export const metadata = {
  title: "Legal Disclaimers - RepoCoMaine",
  description:
    "Important legal information about our repossession services and website usage.",
};

export default function LegalPage() {
  return (
    <div className="max-w-3xl mx-auto py-10 px-4 space-y-6">
      <h1 className="text-3xl font-bold mb-4">Legal Disclaimers</h1>
      <p>
        The information provided on this website is for general informational
        purposes only. It is not intended to constitute legal advice. For
        specific legal questions, consult an attorney licensed in your
        jurisdiction. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Curabitur mollis varius ultrices.
      </p>

      <section>
        <h2 className="text-xl font-semibold mb-2">1. No Legal Advice</h2>
        <p>
          Nothing on this website should be taken as legal advice. We recommend
          contacting a qualified attorney for any legal concerns.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">
          2. Accuracy of Information
        </h2>
        <p>
          While we strive to ensure the accuracy of the information on our site,
          we make no guarantees or warranties regarding completeness or
          timeliness. Quisque at nulla dapibus, hendrerit neque vitae, gravida
          massa.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">3. Service Limitations</h2>
        <p>
          Our repossession services are subject to compliance with state and
          federal laws. We reserve the right to decline services that do not fit
          within legal guidelines.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">4. Third-Party Content</h2>
        <p>
          Our website may contain links to external sites. We are not
          responsible for the content or policies of these third parties.
          Integer feugiat nulla mi, ac imperdiet lacus congue sed.
        </p>
      </section>

      <p className="mt-4">
        For any additional questions, please contact us at:{" "}
        <a href="mailto:info@yourcompany.com" className="underline">
          info@yourcompany.com
        </a>
      </p>
    </div>
  );
}
