import { NextResponse } from "next/server";

export async function GET() {
  const token      = process.env.HOSPITABLE_PAT;
  const propertyId = process.env.RMR_PROPERTY_ID;

  if (!token || !propertyId) {
    return NextResponse.json({ error: "Not configured" }, { status: 500 });
  }

  const today    = new Date();
  const start    = today.toISOString().split("T")[0];
  const endDate  = new Date(today.getFullYear() + 1, today.getMonth(), today.getDate());
  const end      = endDate.toISOString().split("T")[0];

  try {
    const res = await fetch(
      `https://public.api.hospitable.com/v2/properties/${propertyId}/calendar?start_date=${start}&end_date=${end}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
        },
        next: { revalidate: 3600 }, // re-fetch at most once per hour
      }
    );

    if (!res.ok) throw new Error(`Hospitable ${res.status}`);

    const json = await res.json();

    const availability = (json.data?.days ?? []).map((d: {
      date: string;
      status: { available: boolean };
      price: { formatted: string } | null;
    }) => ({
      date:      d.date,
      available: d.status?.available ?? false,
      price:     d.price?.formatted ?? null,
    }));

    return NextResponse.json({ availability });
  } catch {
    return NextResponse.json({ error: "Failed to fetch availability" }, { status: 500 });
  }
}
