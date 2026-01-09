import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { createMetadata } from '@/components/seo/MetaTags';
import type { Metadata } from 'next';

// Force dynamic rendering to ensure proper SSR in production
export const dynamic = 'force-dynamic';

export const metadata: Metadata = createMetadata({
  title: 'Terms of Service',
  description:
    'Read our terms of service to understand the rules and regulations for using our website and services.',
  keywords:
    'Terms of Service, Terms and Conditions, User Agreement, Legal Terms',
  canonical: '/terms',
  noindex: false,
});

export default function TermsPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Terms of Service', href: '/terms' },
        ]}
        className="container py-4"
      />
      <div className="container py-16">
        <div className="mx-auto max-w-4xl space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tight">
              Terms of Service
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
              <h2 className="text-2xl font-semibold">1. Agreement to Terms</h2>
              <p className="text-muted-foreground">
                By accessing or using our website, you agree to be bound by
                these Terms of Service and all applicable laws and regulations.
                If you do not agree with any of these terms, you are prohibited
                from using or accessing this site. The materials contained in
                this website are protected by applicable copyright and trademark
                law.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">2. Use License</h2>
              <p className="text-muted-foreground">
                Permission is granted to temporarily download one copy of the
                materials on our website for personal, non-commercial transitory
                viewing only. This is the grant of a license, not a transfer of
                title, and under this license you may not:
              </p>
              <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
                <li>Modify or copy the materials</li>
                <li>
                  Use the materials for any commercial purpose or for any public
                  display (commercial or non-commercial)
                </li>
                <li>
                  Attempt to decompile or reverse engineer any software
                  contained on the website
                </li>
                <li>
                  Remove any copyright or other proprietary notations from the
                  materials
                </li>
                <li>
                  Transfer the materials to another person or &quot;mirror&quot;
                  the materials on any other server
                </li>
              </ul>
              <p className="text-muted-foreground">
                This license shall automatically terminate if you violate any of
                these restrictions and may be terminated by us at any time. Upon
                terminating your viewing of these materials or upon the
                termination of this license, you must destroy any downloaded
                materials in your possession whether in electronic or printed
                format.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">3. User Accounts</h2>
              <p className="text-muted-foreground">
                When you create an account with us, you must provide information
                that is accurate, complete, and current at all times. You are
                responsible for safeguarding the password and for all activities
                that occur under your account. You agree not to disclose your
                password to any third party and to take sole responsibility for
                any activities or actions under your account.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">4. Acceptable Use</h2>
              <p className="text-muted-foreground">
                You agree not to use the website:
              </p>
              <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
                <li>
                  In any way that violates any applicable national or
                  international law or regulation
                </li>
                <li>
                  To transmit, or procure the sending of, any advertising or
                  promotional material without our prior written consent
                </li>
                <li>
                  To impersonate or attempt to impersonate the company, a
                  company employee, another user, or any other person or entity
                </li>
                <li>
                  In any way that infringes upon the rights of others, or in any
                  way is illegal, threatening, fraudulent, or harmful
                </li>
                <li>
                  To engage in any other conduct that restricts or inhibits
                  anyone&apos;s use or enjoyment of the website
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">
                5. Intellectual Property
              </h2>
              <p className="text-muted-foreground">
                The website and its original content, features, and
                functionality are and will remain the exclusive property of the
                company and its licensors. The website is protected by
                copyright, trademark, and other laws. Our trademarks and trade
                dress may not be used in connection with any product or service
                without our prior written consent.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">6. User Content</h2>
              <p className="text-muted-foreground">
                Our website may allow you to post, link, store, share and
                otherwise make available certain information, text, graphics, or
                other material. You are responsible for the content that you
                post on or through the website, including its legality,
                reliability, and appropriateness. By posting content on or
                through the website, you grant us the right and license to use,
                modify, publicly perform, publicly display, reproduce, and
                distribute such content on and through the website.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">7. Prohibited Content</h2>
              <p className="text-muted-foreground">
                You agree not to post any content that:
              </p>
              <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
                <li>
                  Is illegal, harmful, threatening, abusive, or discriminatory
                </li>
                <li>
                  Infringes on any patent, trademark, trade secret, copyright,
                  or other proprietary rights
                </li>
                <li>Contains viruses, malware, or other harmful code</li>
                <li>
                  Is spam, unsolicited promotional material, or any form of
                  solicitation
                </li>
                <li>
                  Violates the privacy or publicity rights of any third party
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">8. Payment Terms</h2>
              <p className="text-muted-foreground">
                If you purchase a subscription or make a payment through our
                website, you agree to provide current, complete, and accurate
                purchase and account information. You agree to promptly update
                your account and other information, including your email address
                and credit card numbers and expiration dates, so that we can
                complete your transactions and contact you as needed. All prices
                are in the currency specified and are subject to change without
                notice.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">9. Refund Policy</h2>
              <p className="text-muted-foreground">
                Unless otherwise stated, all purchases are final and
                non-refundable. If you believe you are entitled to a refund,
                please contact us within 30 days of your purchase with your
                order details and reason for the refund request. We reserve the
                right to approve or deny refund requests at our sole discretion.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">10. Disclaimer</h2>
              <p className="text-muted-foreground">
                The materials on our website are provided on an &apos;as
                is&apos; basis. We make no warranties, expressed or implied, and
                hereby disclaim and negate all other warranties including,
                without limitation, implied warranties or conditions of
                merchantability, fitness for a particular purpose, or
                non-infringement of intellectual property or other violation of
                rights.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">
                11. Limitations of Liability
              </h2>
              <p className="text-muted-foreground">
                In no event shall we or our suppliers be liable for any damages
                (including, without limitation, damages for loss of data or
                profit, or due to business interruption) arising out of the use
                or inability to use the materials on our website, even if we or
                an authorized representative has been notified orally or in
                writing of the possibility of such damage.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">12. Indemnification</h2>
              <p className="text-muted-foreground">
                You agree to defend, indemnify, and hold harmless the company
                and its licensee and licensors, and their employees,
                contractors, agents, officers and directors, from and against
                any and all claims, damages, obligations, losses, liabilities,
                costs or debt, and expenses (including but not limited to
                attorney&apos;s fees), resulting from or arising out of your use
                and access of the website, by you or any person using your
                account and password, or a breach of these Terms.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">13. Termination</h2>
              <p className="text-muted-foreground">
                We may terminate or suspend your account and bar access to the
                website immediately, without prior notice or liability, under
                our sole discretion, for any reason whatsoever and without
                limitation, including but not limited to a breach of the Terms.
                If you wish to terminate your account, you may simply
                discontinue using the website.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">14. Governing Law</h2>
              <p className="text-muted-foreground">
                These Terms shall be interpreted and governed by the laws of the
                jurisdiction in which our company is located, without regard to
                its conflict of law provisions. Our failure to enforce any right
                or provision of these Terms will not be considered a waiver of
                those rights.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">15. Changes to Terms</h2>
              <p className="text-muted-foreground">
                We reserve the right, at our sole discretion, to modify or
                replace these Terms at any time. If a revision is material, we
                will provide at least 30 days notice prior to any new terms
                taking effect. What constitutes a material change will be
                determined at our sole discretion. By continuing to access or
                use our website after those revisions become effective, you
                agree to be bound by the revised terms.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">
                16. Contact Information
              </h2>
              <p className="text-muted-foreground">
                If you have any questions about these Terms of Service, please
                contact us at:
              </p>
              <p className="text-muted-foreground">
                Email: legal@example.com
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
