export const metadata = {
  title: "Terms & Conditions - RepoCoMaine",
  description: "Read the Terms & Conditions for our repossession services.",
};

export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto py-10 px-4 space-y-6">
      <h1 className="text-3xl font-bold mb-4">Terms & Conditions</h1>
      <p>
        These Terms & Conditions govern your use of the RepoCoMaine website and
        services. By accessing or using our services, you agree to be bound by
        these Terms. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Nulla ultricies risus sem, nec luctus erat fermentum eget.
      </p>

      <section>
        <h2 className="text-xl font-semibold mb-2">1. Acceptance of Terms</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Fusce
          euismod efficitur elit, id convallis lorem commodo eget. Integer
          placerat magna ac leo pretium, et maximus ligula laoreet.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">
          2. Services & Responsibilities
        </h2>
        <p>
          RepoCoMaine provides vehicle and asset repossession services
          throughout Portland, Maine, and surrounding areas. We operate in full
          compliance with local, state, and federal laws. It is your
          responsibility to provide accurate information regarding the
          repossession request.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">
          3. Limitations & Liability
        </h2>
        <p>
          We are not liable for any damages resulting from the use of our
          services beyond the extent permitted by law. Our liability is limited
          to the amount paid for the specific services rendered. Suspendisse
          elementum erat non justo fringilla, nec mattis lacus lobortis.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">4. Changes to Terms</h2>
        <p>
          We reserve the right to modify these Terms & Conditions at any time.
          Any changes will be effective immediately upon posting. It is your
          responsibility to review these Terms periodically for updates.
        </p>
      </section>

      <p>
        If you have any questions regarding these Terms & Conditions, please
        contact us at:{" "}
        <a href="mailto:info@yourcompany.com" className="underline">
          info@yourcompany.com
        </a>
      </p>
    </div>
  );
}
