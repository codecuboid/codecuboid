"use client";
import { useState } from "react";

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactForm(){
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState<FormState>({
    name: '', email: '', subject: '', message: ''
  });

  function update(e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>){
    const { name, value } = e.target as HTMLInputElement;
    setForm(prev=>({...prev, [name]: value}));
  }

  function submit(e: React.FormEvent){
    e.preventDefault();
    // compose mailto body (fallback)
    const subject = encodeURIComponent(form.subject || 'Contact from website');
    const bodyParts = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      // company/phone removed per request
      '',
      `Message:\n${form.message}`
    ].filter(Boolean).join('\n');

    const body = encodeURIComponent(bodyParts);
    window.location.href = `mailto:info@codecuboid.com?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <div className="card">
      <h3>Contact us</h3>
      <form onSubmit={submit} style={{display:'flex',flexDirection:'column',gap:10,marginTop:8}}>
        <input name="name" placeholder="Your name" value={form.name} onChange={update} required />
        <input name="email" placeholder="Email" value={form.email} onChange={update} type="email" required />
        {/* removed phone/company fields */}
        <input name="subject" placeholder="Subject" value={form.subject} onChange={update} />
        <textarea name="message" placeholder="Message" rows={6} value={form.message} onChange={update} required />
        <div style={{display:'flex',justifyContent:'flex-end'}}>
          <button type="submit" style={{padding:'10px 18px',background:'linear-gradient(135deg,var(--accent-1),var(--accent-4))',color:'#fff',borderRadius:10,border:0,boxShadow:'0 10px 30px rgba(0,0,0,0.12)',fontWeight:700}}>
            Send
          </button>
        </div>

        {sent && <div style={{color:'var(--text-secondary)',fontSize:13}}>Opening your mail app to send — or copy the message.</div>}
      </form>
    </div>
  );
}
