import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-3xl mx-auto px-4 py-8 md:py-12">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-primary font-bold mb-6 hover:underline"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Home
        </Link>

        <header className="mb-8">
          <p className="text-sm text-muted-foreground font-bold">Spectra Speech</p>
          <h1 className="text-3xl md:text-4xl font-black text-foreground">
            Privacy Policy
          </h1>
          <p className="text-sm text-muted-foreground mt-2">
            Last updated: May 22, 2026
          </p>
        </header>

        <article className="prose prose-sm md:prose-base max-w-none space-y-6 text-foreground">
          <section>
            <h2 className="text-xl font-extrabold mb-2">Educational Use Disclaimer</h2>
            <p>
              Spectra Speech – WH Questions App is an educational tool created to
              support speech-language therapy practice for children with language
              delays. It is not a medical device and is not a substitute for
              professional diagnosis, treatment, or therapy by a licensed
              speech-language pathologist.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-extrabold mb-2">Local Storage Only</h2>
            <p>
              This app stores all data locally on your device using your browser's
              local storage. We do <strong>not</strong> collect, transmit, or store
              any personal information on remote servers. Progress, settings, and
              preferences never leave the device.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-extrabold mb-2">No Selling of Personal Data</h2>
            <p>
              We do not sell, rent, trade, or share any personal data with third
              parties. The app contains no third-party advertising, no analytics
              trackers, and no behavioral profiling.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-extrabold mb-2">Parent &amp; Therapist Supervision</h2>
            <p>
              This app is designed to be used under the supervision of a parent,
              caregiver, or licensed therapist. Adults are responsible for
              configuring categories and monitoring use by children.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-extrabold mb-2">Child-Friendly Compliance</h2>
            <p>
              In line with COPPA and GDPR-K principles, this app:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Does not request or collect any personally identifiable information from children.</li>
              <li>Does not require account creation or sign-in.</li>
              <li>Does not include in-app purchases, ads, or external links to social media.</li>
              <li>Stores nothing beyond your device.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-extrabold mb-2">Permissions</h2>
            <p>
              The app may request browser permissions only to enable core
              functionality (for example, audio playback for spoken prompts). No
              microphone, camera, location, or contact data is accessed.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-extrabold mb-2">Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Any updates will
              appear on this page with a revised date.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-extrabold mb-2">Contact</h2>
            <p>
              For questions about this Privacy Policy, please contact:
              <br />
              <a
                href="mailto:contact@example.com"
                className="text-primary font-bold underline"
              >
                contact@example.com
              </a>
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Developed by Speech Language Therapist Shabana Tariq.
            </p>
          </section>
        </article>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
