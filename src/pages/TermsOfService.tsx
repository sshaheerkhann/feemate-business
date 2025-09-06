import React from "react";

const TermsOfService: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
      <p className="mb-4">Last updated: September 2025</p>

      <p className="mb-4">
        These Terms of Service (&quot;Terms&quot;) govern the use of FeeMate
        (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) services by
        schools, administrators, parents, and guardians (&quot;you&quot;).
        By accessing or using FeeMate, you agree to these Terms.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">1. Use of Service</h2>
      <p className="mb-4">
        FeeMate provides schools with a platform to manage student records,
        track payments, and send reminders. You agree to use the service only
        for lawful purposes.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">2. Accounts</h2>
      <p className="mb-4">
        Schools must provide accurate information when creating an account. You
        are responsible for maintaining the confidentiality of your login
        credentials.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">3. Fees & Payments</h2>
      <p className="mb-4">
        Schools agree to pay applicable service fees. FeeMate may add a small
        digital fee per student which is collected through the school’s fee
        vouchers.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">4. Messaging Policy</h2>
      <p className="mb-4">
        By using FeeMate, you authorize us to send SMS/WhatsApp reminders and
        invoices on behalf of the school. Parents must ensure their contact
        details are correct and up to date.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">5. Data Protection</h2>
      <p className="mb-4">
        FeeMate handles personal information in accordance with our{" "}
        <a href="/privacy-policy" className="text-blue-600 underline">
          Privacy Policy
        </a>
        .
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">6. Limitation of Liability</h2>
      <p className="mb-4">
        FeeMate is provided on an &quot;as is&quot; basis. We are not liable
        for delays in message delivery or incorrect data provided by schools or
        parents.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">7. Termination</h2>
      <p className="mb-4">
        We reserve the right to suspend or terminate accounts that misuse the
        platform or violate these Terms.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">8. Contact Us</h2>
      <p>
        For questions about these Terms, email us at{" "}
        <span className="font-semibold">support@feemate.pk</span>
      </p>
    </div>
  );
};

export default TermsOfService;
