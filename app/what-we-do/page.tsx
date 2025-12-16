import Link from "next/link";

export default function WhatWeDo(){
  return (
    <main style={{padding:48, minHeight:'100vh'}}>
      <Link href="/">← Home</Link>
      <h1>What we do</h1>
      <p style={{color:'var(--muted)'}}>We provide data annotation, cloud architecture, fullstack product engineering, CI/CD and DevOps, and managed IT solutions — all with a focus on privacy, reliability and measurable outcomes.</p>

      <section style={{marginTop:20}}>
        <h2>Primary offerings</h2>
        <ul>
          <li>Data labeling and quality engineering</li>
          <li>Cloud migration, cost optimisation, and landing zones</li>
          <li>End-to-end product development and testing</li>
          <li>CI/CD pipelines, SRE practices and IaC</li>
        </ul>
      </section>
    </main>
  );
}
