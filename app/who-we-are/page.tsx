import Link from "next/link";

export default function WhoWeAre(){
  return (
    <main style={{padding:48, minHeight:'100vh'}}>
      <Link href="/">← Home</Link>
      <h1>Who we are</h1>
      <p style={{color:'var(--muted)'}}>We're a cross-functional engineering team with experience building and operating AI systems, cloud platforms, and enterprise-grade software. Our team blends research-grade data expertise with practical engineering and operational experience.</p>

      <section style={{marginTop:20}}>
        <h2>Team highlights</h2>
        <ul>
          <li>Data scientists & annotation leads</li>
          <li>Cloud architects and SREs</li>
          <li>Fullstack product engineers and QA</li>
        </ul>
      </section>
    </main>
  );
}
