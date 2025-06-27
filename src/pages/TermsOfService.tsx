import React from "react";

export const TermsOfService: React.FC = () => (
  <article className="max-w-2xl mx-auto p-6 font-sans leading-relaxed">
    <h1 className="text-3xl font-bold mb-2">Hexagonical Terms of Service</h1>
    <p className="italic mb-4">Last updated: June 27, 2025</p>

    <p className="mb-6">Welcome to Hexagonical! We build developer-first tools and offer hosting services to help your projects run smoothly. Before using our services, please read these Terms of Service (“TOS”). By using Hexagonical, you agree to these terms.</p>

    <h2 className="text-xl font-semibold mt-8 mb-2">1. Using Hexagonical</h2>
    <ul className="list-disc list-inside mb-6 space-y-1">
      <li>Use our services legally and responsibly. No hacking, spamming, or illegal activities.</li>
      <li>You’re responsible for how you use Hexagonical. We’re not liable for your coding mistakes, lost data, or damages caused by your use, except if we directly cause harm.</li>
    </ul>

    <h2 className="text-xl font-semibold mt-8 mb-2">2. Account & Security</h2>
    <ul className="list-disc list-inside mb-6 space-y-1">
      <li>You’re responsible for keeping your account details and password safe.</li>
      <li>Notify us immediately if you suspect unauthorized access.</li>
    </ul>

    <h2 className="text-xl font-semibold mt-8 mb-2">3. Content & Intellectual Property</h2>
    <ul className="list-disc list-inside mb-6 space-y-1">
      <li>You own your projects and content. We don’t claim ownership.</li>
      <li>You give us permission to host and operate your content as part of providing the service.</li>
      <li>Don’t upload illegal, harmful, or offensive content. We may remove such content or suspend accounts.</li>
    </ul>

    <h2 className="text-xl font-semibold mt-8 mb-2">4. Payments & Refunds</h2>
    <ul className="list-disc list-inside mb-6 space-y-1">
      <li>Paid services must be paid on time.</li>
      <li>Refunds are only given if we decide to provide them.</li>
      <li>We may update pricing and features but will notify you beforehand.</li>
    </ul>

    <h2 className="text-xl font-semibold mt-8 mb-2">5. Service Availability & Limitations</h2>
    <ul className="list-disc list-inside mb-6 space-y-1">
      <li>We aim for high uptime but can’t guarantee 100% availability.</li>
      <li>We aren’t responsible for outages, downtime, or damages from interruptions.</li>
      <li>We’re not liable for indirect damages like lost profits or data loss.</li>
    </ul>

    <h2 className="text-xl font-semibold mt-8 mb-2">6. Privacy & Data Protection</h2>
    <ul className="list-disc list-inside mb-6 space-y-1">
      <li>We collect and process personal data only to provide and improve our services.</li>
      <li>We protect your data and do not share it with third parties unless required by law.</li>
      <li>You can request access, correction, or deletion of your personal data by contacting us.</li>
      <li>For more details, see our Privacy Policy.</li>
    </ul>

    <h2 className="text-xl font-semibold mt-8 mb-2">7. Indemnification</h2>
    <p className="mb-6">You agree to defend and hold harmless Hexagonical and its team from any claims, damages, or losses arising from your use of the services or violation of these terms.</p>

    <h2 className="text-xl font-semibold mt-8 mb-2">8. Termination</h2>
    <ul className="list-disc list-inside mb-6 space-y-1">
      <li>We may suspend or terminate your account if you break the rules or abuse the service.</li>
      <li>You can cancel your account anytime, but data may be deleted after.</li>
    </ul>

    <h2 className="text-xl font-semibold mt-8 mb-2">9. Governing Law & Disputes</h2>
    <ul className="list-disc list-inside mb-6 space-y-1">
      <li>These terms are governed by the laws of Switzerland.</li>
      <li>Any disputes will be resolved in Swiss courts.</li>
    </ul>

    <h2 className="text-xl font-semibold mt-8 mb-2">10. Force Majeure</h2>
    <p className="mb-6">We’re not responsible for failures due to events beyond our control (e.g., natural disasters, internet outages).</p>

    <h2 className="text-xl font-semibold mt-8 mb-2">11. Changes to Terms</h2>
    <p className="mb-6">We may update these terms occasionally and will notify you. Continuing to use Hexagonical means you accept the changes.</p>

    <h2 className="text-xl font-semibold mt-8 mb-2">12. Contact Us</h2>
    <p>Questions? Reach out at <a className="text-blue-600 underline" href="mailto:support@hexagonical.ch">support@hexagonical.ch</a> or visit our website.</p>
  </article>
);