'use client';

import { useEffect, useRef } from 'react';

// Sprout Studio lead form. The script renders the form into this container.
export default function ContactForm() {
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!containerRef.current || containerRef.current.querySelector('#sprout_studio_form_script')) return;
    const script = document.createElement('script');
    script.id = 'sprout_studio_form_script';
    script.src = 'https://sproutstudio.com/sprout_dynamic_lead_form.js';
    script.dataset.apiKey = 'f8f7a61c3ebb87409d8e69ba34ab7653cdd3b3850bf2cd77';
    script.dataset.leadFormId = '1812121';
    script.dataset.baseHostname = 'sproutstudio.com';
    script.async = true;
    containerRef.current.appendChild(script);
  }, []);
  return (
    <div className="lead-form">
      <div ref={containerRef} className="lead-form-inner" />
    </div>
  );
}
