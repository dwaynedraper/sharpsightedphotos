'use client';

import { useEffect, useRef } from 'react';

export default function ContactForm() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        // Prevent duplicate script injection
        if (containerRef.current.querySelector('#sprout_studio_form_script')) {
            return;
        }

        const script = document.createElement('script');
        script.id = 'sprout_studio_form_script';
        script.src = 'https://sproutstudio.com/sprout_dynamic_lead_form.js';

        // Add data attributes
        script.dataset.apiKey = 'f8f7a61c3ebb87409d8e69ba34ab7653cdd3b3850bf2cd77';
        script.dataset.leadFormId = '1814825';
        script.dataset.baseHostname = 'sproutstudio.com';
        script.async = true;

        containerRef.current.appendChild(script);

        // Optional: clean up? 
        // Removing the script usually doesn't remove the form it rendered, 
        // but we can try to empty the container on unmount if needed.
        // For now, let's leave it persistent to avoid flicker on re-renders.
    }, []);

    return (
        <div className="w-full max-w-2xl mx-auto bg-navy-50/50 dark:bg-navy-800/50 p-4 md:p-8 rounded-xl border border-navy-100 dark:border-navy-700 transition-colors">
            <div ref={containerRef} className="w-full min-h-[500px] flex justify-center" />
        </div>
    );
}
