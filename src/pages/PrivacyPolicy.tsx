import React from "react";

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <p className="mb-4">Last updated: September 2025</p>

      <p className="mb-4">
        FeeMate (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) respects
        your privacy. This Privacy Policy explains how we collect, use, and
        protect information when schools, students, and parents use our fee
        management and reminder services.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">1. Information We Collect</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>School details such as name, address, and administrator contact.</li>
        <li>Student and parent/guardian data such as names, phone numbers, and fee records.</li>
        <li>Technical information such as browser type, device, and usage patterns.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">2. How We Use Information</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>To manage student records and fee tracking.</li>
        <li>To send reminders and invoices through SMS or WhatsApp.</li>
        <li>To improve and secure our services.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">3. Sharing of Information</h2>
      <p className="mb-4">
        We do not sell personal information. Data is shared only:
      </p>
      <ul className="list-disc ml-6 mb-4">
        <li>With trusted third-party providers (e.g., SMS/WhatsApp services).</li>
        <li>When required by law or to protect the rights of users.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">4. Data Security</h2>
      <p className="mb-4">
        We use industry-standard practices to secure student and school data.
        However, no system is 100% secure, and schools/parents should also take
        care in safeguarding their accounts.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">5. Your Rights</h2>
      <p className="mb-4">
        Schools and parents can request correction or deletion of personal
        information by contacting us.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">6. Contact Us</h2>
      <p>
        If you have questions about this Privacy Policy, contact us at:{" "}
        <span className="font-semibold">support@feemate.pk</span>
      </p>
    </div>
  );
};

export default PrivacyPolicy;
