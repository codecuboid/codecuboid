import Link from "next/link";

export default function ServiceCard({ title, slug, summary }: { title: string; slug: string; summary: string; }){
  return (
    <div className="service-card">
      <h3>{title}</h3>
      <p>{summary}</p>
      <Link href={`/services/${slug}`} className="service-cta">Learn more</Link>
    </div>
  );
}
