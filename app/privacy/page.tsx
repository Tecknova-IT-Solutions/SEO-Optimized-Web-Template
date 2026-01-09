import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { createMetadata } from '@/components/seo/MetaTags';
import type { Metadata } from 'next';

// Force dynamic rendering to ensure proper SSR in production
export const dynamic = 'force-dynamic';

export const metadata: Metadata = createMetadata({
  title: 'Privacy Policy',
  description:
    'Read our privacy policy to understand how we collect, use, and protect your personal information.',
  keywords: 'Privacy Policy, Data Protection, Privacy, GDPR, User Privacy',
  canonical: '/privacy',
  noindex: false,
});

export default function PrivacyPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Privacy Policy', href: '/privacy' },
        ]}
        className="container py-4"
      />
      <div className="container py-16">
        <div className="mx-auto max-w-4xl space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tight">
              Privacy Policy
            </h1>
            <p className="text-lg text-muted-foreground">
              Last updated:{' '}
              {new Date().toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </p>
          </div>

          <div className="prose prose-slate max-w-none space-y-8">
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">1. Introduction</h2>
              <p className="text-muted-foreground">
                Welcome to our website. We are committed to protecting your
                personal information and your right to privacy. This Privacy
                Policy explains how we collect, use, disclose, and safeguard
                your information when you visit our website.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">
                2. Information We Collect
              </h2>
              <p className="text-muted-foreground">
                We may collect information about you in a variety of ways. The
                information we may collect on the site includes:
              </p>
              <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
                <li>
                  <strong>Personal Data:</strong> Personally identifiable
                  information, such as your name, email address, and telephone
                  number, that you voluntarily give to us when you register with
                  the site or when you choose to participate in various
                  activities related to the site.
                </li>
                <li>
                  <strong>Derivative Data:</strong> Information our servers
                  automatically collect when you access the site, such as your
                  IP address, browser type, operating system, access times, and
                  the pages you have viewed directly before and after accessing
                  the site.
                </li>
                <li>
                  <strong>Financial Data:</strong> Financial information, such
                  as data related to your payment method (e.g., valid credit
                  card number, card brand, expiration date) that we may collect
                  when you purchase, order, return, exchange, or request
                  information about our services from the site.
                </li>
                <li>
                  <strong>Mobile Device Data:</strong> Device information, such
                  as your mobile device ID number, model, and manufacturer, and
                  information about the location of your device, if you access
                  the site from a mobile device.
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">
                3. How We Use Your Information
              </h2>
              <p className="text-muted-foreground">
                Having accurate information about you permits us to provide you
                with a smooth, efficient, and customized experience.
                Specifically, we may use information collected about you via the
                site to:
              </p>
              <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
                <li>Create and manage your account</li>
                <li>
                  Process your transactions and send you related information
                </li>
                <li>Email you regarding your account or order</li>
                <li>
                  Fulfill and manage purchases, orders, payments, and other
                  transactions related to the site
                </li>
                <li>
                  Generate a personal profile about you to make future visits
                  more personalized
                </li>
                <li>Increase the efficiency and operation of the site</li>
                <li>
                  Monitor and analyze usage and trends to improve your
                  experience
                </li>
                <li>Notify you of updates to the site</li>
                <li>Perform other business activities as needed</li>
                <li>
                  Request feedback and contact you about your use of the site
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">
                4. Disclosure of Your Information
              </h2>
              <p className="text-muted-foreground">
                We may share information we have collected about you in certain
                situations. Your information may be disclosed as follows:
              </p>
              <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
                <li>
                  <strong>By Law or to Protect Rights:</strong> If we believe
                  the release of information about you is necessary to respond
                  to legal process, to investigate or remedy potential
                  violations of our policies, or to protect the rights,
                  property, and safety of others, we may share your information
                  as permitted or required by any applicable law, rule, or
                  regulation.
                </li>
                <li>
                  <strong>Third-Party Service Providers:</strong> We may share
                  your information with third parties that perform services for
                  us or on our behalf, including payment processing, data
                  analysis, email delivery, hosting services, customer service,
                  and marketing assistance.
                </li>
                <li>
                  <strong>Business Transfers:</strong> We may share or transfer
                  your information in connection with, or during negotiations
                  of, any merger, sale of company assets, financing, or
                  acquisition of all or a portion of our business to another
                  company.
                </li>
                <li>
                  <strong>Affiliates:</strong> We may share your information
                  with our affiliates, in which case we will require those
                  affiliates to honor this Privacy Policy.
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">
                5. Security of Your Information
              </h2>
              <p className="text-muted-foreground">
                We use administrative, technical, and physical security measures
                to help protect your personal information. While we have taken
                reasonable steps to secure the personal information you provide
                to us, please be aware that despite our efforts, no security
                measures are perfect or impenetrable, and no method of data
                transmission can be guaranteed against any interception or other
                type of misuse.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">
                6. Cookies and Tracking Technologies
              </h2>
              <p className="text-muted-foreground">
                We may use cookies, web beacons, tracking pixels, and other
                tracking technologies on the site to help customize the site and
                improve your experience. When you access the site, your personal
                information is not collected through the use of tracking
                technology. Most browsers are set to accept cookies by default.
                You can remove or reject cookies, but be aware that such action
                could affect the availability and functionality of the site.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">7. Your Privacy Rights</h2>
              <p className="text-muted-foreground">
                Depending on your location, you may have the following rights
                regarding your personal information:
              </p>
              <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
                <li>
                  The right to access – You have the right to request copies of
                  your personal data
                </li>
                <li>
                  The right to rectification – You have the right to request
                  that we correct any information you believe is inaccurate
                </li>
                <li>
                  The right to erasure – You have the right to request that we
                  erase your personal data, under certain conditions
                </li>
                <li>
                  The right to restrict processing – You have the right to
                  request that we restrict the processing of your personal data
                </li>
                <li>
                  The right to object to processing – You have the right to
                  object to our processing of your personal data
                </li>
                <li>
                  The right to data portability – You have the right to request
                  that we transfer the data that we have collected to another
                  organization, or directly to you
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">
                8. Children&apos;s Privacy
              </h2>
              <p className="text-muted-foreground">
                Our services are not intended for children under the age of 13.
                We do not knowingly collect personal information from children
                under 13. If we learn that we have collected personal
                information from a child under age 13, we will delete that
                information as quickly as possible.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">
                9. Changes to This Privacy Policy
              </h2>
              <p className="text-muted-foreground">
                We may update this Privacy Policy from time to time in order to
                reflect changes to our practices or for other operational,
                legal, or regulatory reasons. We will notify you of any changes
                by posting the new Privacy Policy on this page and updating the
                &quot;Last updated&quot; date.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">10. Contact Us</h2>
              <p className="text-muted-foreground">
                If you have questions or comments about this Privacy Policy,
                please contact us at:
              </p>
              <p className="text-muted-foreground">
                Email:{' '}
                <a
                  href="mailto:privacy@example.com"
                  className="text-primary hover:underline"
                >
                  privacy@example.com
                </a>
                <br />
                Address: 123 Example Street, City, State, ZIP Code
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
