import React from "react";

export const PrivacyPolicy: React.FC = () => (
  <article className="max-w-2xl mx-auto p-6 font-sans leading-relaxed">
    <h1 className="text-3xl font-bold mb-2">Hexagonical Privacy Policy</h1>
    <p className="italic mb-4">Last updated: June 27, 2025</p>

    <p className="mb-6">At Hexagonical, your privacy matters. This policy explains what personal data we collect, how we use it, and your rights.</p>

    <h2 className="text-xl font-semibold mt-8 mb-2">1. What Data We Collect</h2>
    <ul className="list-disc list-inside mb-6 space-y-1">
      <li><strong>Personal info you give us:</strong> like your name, email, and account details when you sign up.</li>
      <li><strong>Usage data:</strong> info about how you use our tools and hosting (e.g., IP address, device info, logs).</li>
      <li><strong>Cookies and similar tech:</strong> to improve your experience and track site usage.</li>
    </ul>

    <h2 className="text-xl font-semibold mt-8 mb-2">2. How We Use Your Data</h2>
    <ul className="list-disc list-inside mb-6 space-y-1">
      <li>To provide and improve Hexagonical services.</li>
      <li>To communicate with you (support, updates, billing).</li>
      <li>To keep our services safe and secure.</li>
      <li>To comply with legal obligations.</li>
    </ul>

    <h2 className="text-xl font-semibold mt-8 mb-2">3. Data Sharing</h2>
    <ul className="list-disc list-inside mb-6 space-y-1">
      <li>We <strong>do not sell or rent</strong> your personal data.</li>
      <li>We may share data with trusted service providers only to help run Hexagonical (e.g., hosting providers, payment processors).</li>
      <li>We may disclose your data if required by law.</li>
    </ul>

    <h2 className="text-xl font-semibold mt-8 mb-2">4. Data Security</h2>
    <ul className="list-disc list-inside mb-6 space-y-1">
      <li>We take reasonable steps to protect your data from unauthorized access, loss, or misuse.</li>
      <li>But no method is 100% secure — use strong passwords and keep your account info safe.</li>
    </ul>

    <h2 className="text-xl font-semibold mt-8 mb-2">5. Your Rights</h2>
    <ul className="list-disc list-inside mb-6 space-y-1">
      <li>You can request access to your data, correct it, or ask us to delete it.</li>
      <li>You can opt out of marketing emails anytime.</li>
      <li>Contact us if you want to exercise any rights.</li>
    </ul>

    <h2 className="text-xl font-semibold mt-8 mb-2">6. Data Retention</h2>
    <ul className="list-disc list-inside mb-6 space-y-1">
      <li>We keep your data as long as you have an account or as needed to provide services.</li>
      <li>We may delete data after account closure or inactivity.</li>
    </ul>

    <h2 className="text-xl font-semibold mt-8 mb-2">7. Cookies</h2>
    <p className="mb-6">We use cookies to enhance your experience. You can control cookies via your browser settings.</p>

    <h2 className="text-xl font-semibold mt-8 mb-2">8. International Users</h2>
    <p className="mb-6">If you’re outside Switzerland, your data may be transferred to and processed in Switzerland. We ensure appropriate safeguards are in place.</p>

    <h2 className="text-xl font-semibold mt-8 mb-2">9. Changes to This Policy</h2>
    <p className="mb-6">We may update this policy occasionally. We’ll notify you of major changes.</p>

    <h2 className="text-xl font-semibold mt-8 mb-2">10. Contact Us</h2>
    <p>Questions or concerns? Email <a className="text-blue-600 underline" href="mailto:support@hexagonical.ch">support@hexagonical.ch</a>.</p>
  </article>
);