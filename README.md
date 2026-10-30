# Karmasiddhi Nirmaan website (Next.js)

    npm install
    npm run dev      # http://localhost:3000
    npm run build && npm start

- Logo: edit components/Header.js (comment shows where) and drop logo.svg in /public.
- Content: projects, stats and values live in lib/data.js.
- Contact form: wire up onSubmit in components/ContactForm.js.
- Replace placeholder phone, email, address and the sample project details with real ones.

## Updates
- Set the WhatsApp number in lib/data.js (WHATSAPP, digits only with country code).
- The testimonials, amenities, FAQ answers, sizes and handover dates are sample content: replace with verified facts (RERA numbers, loan approvals and so on).
- The construction animation lives in components/BuildingAnimation.js.
- Logo files: public/logo-mark.png and public/logo-wordmark.png (also used as the browser icon via app/icon.png).
