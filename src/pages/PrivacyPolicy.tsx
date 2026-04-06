import Header from "../components/Header";
import Footer from "../components/Footer";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen flex flex-col transition-colors duration-300">
      <Header />
      <div className="flex-1 text-foreground transition-colors duration-300">
        <main className="mx-auto max-w-3xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-foreground mb-8">
            Privacy Policy
          </h1>
          <p className="text-sm text-muted-foreground mb-8">
            Last updated: April 6, 2026
          </p>

          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                Overview
              </h2>
              <p>
                This website, adamarcher.ca, is a personal portfolio site. Your
                privacy is important and this policy explains what information is
                collected and how it is used.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                Information Collected
              </h2>
              <p>
                This site does not use cookies, analytics, or tracking scripts.
                If you use the contact form, the information you provide (name,
                email, and message) is sent via EmailJS and is used solely to
                respond to your inquiry.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                Third-Party Services
              </h2>
              <p>
                This site is hosted on GitHub Pages. The contact form uses
                EmailJS to deliver messages. These services may collect standard
                server logs (e.g., IP addresses) as part of their normal
                operations. Please refer to their respective privacy policies
                for details.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                Data Retention
              </h2>
              <p>
                Information submitted through the contact form is retained only
                as long as necessary to respond to your message. No personal
                data is stored on this site.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                Contact
              </h2>
              <p>
                If you have questions about this privacy policy, please reach
                out using the{" "}
                <a
                  href="/#contact"
                  className="text-primary hover:underline"
                >
                  contact form
                </a>
                .
              </p>
            </section>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
