import { Container, Pill } from "../components/ui";

export const metadata = {
  title: "Privacy Policy",
  description: "How ireallylikeclouds.xyz collects, uses, and protects personal information."
};

export default function PrivacyPolicyPage() {
  return (
    <main className="py-12">
      <Container>
        <Pill>Legal</Pill>
        <h1 className="mt-4 font-display text-3xl tracking-tight text-ink-950 sm:text-4xl">Privacy Policy</h1>
        <p className="mt-3 max-w-3xl text-ink-800">
          Last updated: May 28, 2026. This policy explains how ireallylikeclouds.xyz collects, uses, stores, and
          shares information when you use this site.
        </p>

        <div className="mt-8 space-y-6 text-sm leading-relaxed text-ink-800">
          <section>
            <h2 className="text-base font-semibold text-ink-950">Information we collect</h2>
            <ul className="mt-2 list-disc space-y-2 pl-5">
              <li>Basic technical data such as IP address, browser type, device information, and request logs.</li>
              <li>Usage data such as visited pages, referring pages, and timestamps.</li>
              <li>Content you submit, including cloud photos and optional text/captions.</li>
              <li>
                Approximate location data only when required for forecast features (for example latitude, longitude, and
                timezone you provide).
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-base font-semibold text-ink-950">How we use information</h2>
            <ul className="mt-2 list-disc space-y-2 pl-5">
              <li>Operate, secure, and improve the site.</li>
              <li>Provide cloud identification, forecast, and community photo features.</li>
              <li>Moderate user-submitted content and prevent spam, abuse, and fraud.</li>
              <li>Comply with legal obligations and enforce site terms.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-base font-semibold text-ink-950">Legal bases (where required)</h2>
            <p className="mt-2">
              Depending on your location, processing is based on one or more of: your consent, performance of requested
              services, legitimate interests (such as security and product improvement), and compliance with legal
              obligations.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-ink-950">Third-party services</h2>
            <p className="mt-2">
              The site may use third-party providers to host infrastructure, process uploaded content, or provide AI and
              forecast functionality. These providers may process data on our behalf subject to their own terms and
              privacy policies.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-ink-950">Data sharing</h2>
            <p className="mt-2">
              We do not sell personal information. We may disclose data to service providers, when you make content
              public, when required by law, or to protect rights, safety, and security.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-ink-950">Data retention</h2>
            <p className="mt-2">
              We retain information only as long as reasonably necessary for the purposes above, including legal,
              operational, and security needs.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-ink-950">Your rights</h2>
            <p className="mt-2">
              Depending on your location, you may have rights to access, correct, delete, or restrict processing of your
              personal information, and to request data portability or object to certain uses.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-ink-950">Children&apos;s privacy</h2>
            <p className="mt-2">
              This site is not directed to children under 13 (or the equivalent minimum age in your jurisdiction), and
              we do not knowingly collect personal information from children without appropriate consent.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-ink-950">Security</h2>
            <p className="mt-2">
              We use reasonable administrative, technical, and organizational safeguards. No method of transmission or
              storage is completely secure, so absolute security cannot be guaranteed.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-ink-950">Policy updates</h2>
            <p className="mt-2">
              We may update this policy from time to time. Material changes will be reflected by updating the date at
              the top of this page.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-ink-950">Important legal note</h2>
            <p className="mt-2">
              This policy is provided for general information and does not constitute legal advice or guarantee
              compliance with every law in every jurisdiction. For legal certainty tailored to your business, consult a
              licensed attorney.
            </p>
          </section>
        </div>
      </Container>
    </main>
  );
}
