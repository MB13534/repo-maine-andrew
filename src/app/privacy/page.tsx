export const metadata = {
  title: "Privacy Policy - RepoCoMaine",
  description: "Learn how we handle your data and maintain privacy.",
};

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto py-10 px-4 space-y-6">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
      <p>
        Your privacy is important to us. This policy explains how we collect,
        use, and protect your personal information when you use our services or
        visit our website. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Vestibulum a metus in leo imperdiet sodales.
      </p>

      <section>
        <h2 className="text-xl font-semibold mb-2">
          1. Information We Collect
        </h2>
        <p>
          We may collect personal data such as your name, email address, phone
          number, and other details required to process repossession requests.
          In addition, we may gather non-personal data, such as IP addresses or
          browser information, for analytics purposes.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">
          2. How We Use Your Information
        </h2>
        <p>
          We use the collected information to fulfill service requests,
          communicate with you, and improve our offerings. We do not sell or
          share your personal data with third parties except as necessary to
          fulfill the service. Nulla facilisi. Nunc porttitor tristique arcu,
          vitae rhoncus neque.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">3. Data Security</h2>
        <p>
          We implement industry-standard measures to protect your information
          from unauthorized access, disclosure, or misuse. Sed nec libero
          sollicitudin, bibendum nisi a, tristique nisi.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">4. Third-Party Services</h2>
        <p>
          Our website may include links to external sites. We are not
          responsible for the privacy practices of these third parties. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">5. Changes to Policy</h2>
        <p>
          We reserve the right to update this Privacy Policy at any time. Any
          changes will be posted here with a new effective date. Morbi quis
          varius eros.
        </p>
      </section>

      <p className="mt-4">
        For any privacy-related concerns, please contact us at:{" "}
        <a href="mailto:info@yourcompany.com" className="underline">
          info@yourcompany.com
        </a>
      </p>
    </div>
  );
}
