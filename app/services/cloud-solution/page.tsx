import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export default function CloudSolution(){
  return (
    <div className="page-root">
      <Header />
      <main style={{flex:1, display:'flex', alignItems:'center', justifyContent:'center', minHeight:'70vh'}}>
        <div style={{textAlign:'center'}}>
          <h1 style={{fontSize:'clamp(48px, 6vw, 72px)', fontWeight:800, marginBottom:16, background:'linear-gradient(135deg, var(--text-primary), var(--accent-1))', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent'}}>Coming Soon</h1>
          <p style={{fontSize:'clamp(16px, 2vw, 20px)', color:'var(--text-secondary)'}}>We're working on something amazing. Stay tuned!</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
