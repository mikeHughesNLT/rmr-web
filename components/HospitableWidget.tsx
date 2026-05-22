"use client";
import Script from "next/script";

interface Props {
  resultsUrl?: string;
  className?: string;
}

export default function HospitableWidget({ resultsUrl, className }: Props) {
  const attrs = [
    `identifier="419f5d9f-c881-4fd1-938d-af2449099b79"`,
    `type="custom"`,
    resultsUrl ? `results-url="${resultsUrl}"` : "",
  ].filter(Boolean).join(" ");

  return (
    <>
      <Script
        src="https://hospitable.b-cdn.net/direct-property-search-widget/hospitable-search-widget.prod.js"
        strategy="afterInteractive"
      />
      <div
        className={className}
        dangerouslySetInnerHTML={{ __html: `<hospitable-direct-mps ${attrs}></hospitable-direct-mps>` }}
      />
    </>
  );
}
