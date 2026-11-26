import ContactForm from "./ContactForm";

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ interest?: string | string[] }>;
}) {
  const params = await searchParams;
  const raw = Array.isArray(params.interest) ? params.interest[0] : params.interest;
  const interest = raw?.replace(/[\r\n]/g, " ").trim().slice(0, 120);
  const defaultMessage = interest ? `Interested in a ${interest}.` : undefined;

  return <ContactForm defaultMessage={defaultMessage} />;
}
