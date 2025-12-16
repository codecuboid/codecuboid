import Link from "next/link";

export default function WhyChooseUs(){
  return (
    <main style={{padding:48, minHeight:'100vh'}}>
      <Link href="/">← Home</Link>
      <h1>Why choose us</h1>
      <p style={{color:'var(--muted)'}}>We focus on outcomes you can measure: accuracy, uptime, cost and time-to-market. We operate with transparency, clear milestones, and documented processes so your team can take over smoothly.</p>

      <section style={{marginTop:20}}>
        <h2>Our guarantees</h2>
        <ul>
          <li>Clear delivery milestones and timelines</li>
          <li>Security-first approach, auditable processes</li>
          <li>Flexible engagement models to match your risk profile</li>
        </ul>
      </section>
    </main>
  );
}
