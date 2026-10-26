import type { Metadata } from 'next';
import Image from 'next/image';
import PsNav from '@/components/ps/PsNav';
import ContactForm from '@/components/ContactForm';
import { site, cta } from '@/content/site';

export const metadata: Metadata = {
  title: 'Contact Dean Draper',
  description: 'Book a free 15-minute Connection Call, or reach Dean Draper by text, phone, or email. Story portraits, headshots, and films across Dallas Fort Worth.',
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
  return (
    <>
      <PsNav current="contact" />
      <main id="main">
        <section className="band wall" aria-labelledby="contact-title">
          <div className="wrap two">
            <div className="stack">
              <p className="eyebrow">Contact</p>
              <h1 id="contact-title">Let&apos;s talk about your story.</h1>
              <p className="lede muted">The easiest first step is a free 15-minute Connection Call. Ask anything you still want to know, and we will see if we are a fit.</p>
              <div className="actions"><a className="btn btn-main" href={site.connectionCall}>{cta.call}</a></div>
              <dl className="contact-list">
                <div><dt>Text or call</dt><dd><a href={site.phoneHref}>{site.phoneDisplay}</a> <span className="muted">Text is preferred.</span></dd></div>
                <div><dt>Email</dt><dd><a href={`mailto:${site.email}`}>{site.email}</a></dd></div>
                <div><dt>Service area</dt><dd>{site.serviceArea}</dd></div>
                <div><dt>Social</dt><dd><a href="https://instagram.com/sharpsightedstudio" rel="noopener noreferrer">Instagram</a> · <a href="https://linkedin.com/in/dean-draper" rel="noopener noreferrer">LinkedIn</a></dd></div>
              </dl>
            </div>
            <div className="qr">
              <a href="https://hihello.com/hi/sharpsightedphotos" rel="noopener noreferrer" className="qr-link">
                <figure className="frame" style={{ margin: 0 }}>
                  <span className="mat"><span className="bevel"><Image src="/images/contact_qr.png" width={600} height={600} alt="QR code that opens Dean Draper's contact card" sizes="320px" /></span></span>
                </figure>
              </a>
              <p className="plaque"><b>Dean Draper</b><span>Scan or tap for my contact card</span></p>
            </div>
          </div>
        </section>
        <section className="band" aria-labelledby="form-title">
          <div className="wrap form-wrap">
            <div className="stack" style={{ gap: 10, alignItems: 'center', textAlign: 'center' }}>
              <p className="eyebrow">Booking</p>
              <h2 id="form-title">Ready to make it official?</h2>
              <p className="muted">Fill out the form, and I will get the process started.</p>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>
    </>
  );
}
