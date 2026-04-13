import { MenuGalleryRow } from "../components/MenuGalleryRow";

const menuGalleryImages = [
  { file: "menu 1.png", alt: "Chef 242 menu item 1" },
  { file: "menu 2.png", alt: "Chef 242 menu item 2" },
  { file: "menu 3.png", alt: "Chef 242 menu item 3" },
  { file: "menu 4.png", alt: "Chef 242 menu item 4" },
] as const;

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mt-10 text-lg font-bold text-black sm:text-xl">
      {children}
    </h2>
  );
}

export default function PrivacyPolicyPage() {
  return (
    <div className="w-full">
      <section className="bg-[#F7DC51] py-10 text-center sm:py-12">
        <h1 className="text-[20px] font-semibold uppercase tracking-[0.25em] text-black">
          Privacy Policy
        </h1>
      </section>

      <section className="bg-white px-4 py-14 sm:px-8 sm:py-16">
        <div className="mx-auto max-w-4xl text-black">
          <p className="text-base font-medium leading-relaxed text-black/85">
            Last Updated: April, 2026
          </p>
          <br />
          <p className="text-base font-medium leading-relaxed text-black/85">
            At Chef 242, your privacy matters. We are committed to protecting
            your personal information and being transparent about how we collect
            and use it.
          </p>

          <SectionTitle>Information we collect</SectionTitle>
          <p className="mt-3 text-base font-medium leading-relaxed text-black/85">
            We may collect the following information when you use our services:
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-base font-medium text-black/85 marker:text-black">
            <li>Name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Delivery address (including construction site details)</li>
            <li>Order history and preferences</li>
            <li>
              Payment information (processed securely via third-party providers)
            </li>
          </ul>

          <SectionTitle>How we use your information</SectionTitle>
          <p className="mt-3 text-base font-medium leading-relaxed text-black/85">
            Your information helps us:
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-base font-medium text-black/85 marker:text-black">
            <li>Process and deliver your orders efficiently</li>
            <li>Coordinate deliveries to your job site</li>
            <li>Communicate order updates and service information</li>
            <li>Improve our menu, service, and customer experience</li>
          </ul>
          <p className="mt-4 text-base font-medium leading-relaxed text-black/85">
            We only use your information for legitimate business purposes
            related to our services.
          </p>

          <SectionTitle>Data protection</SectionTitle>
          <p className="mt-3 text-base font-medium leading-relaxed text-black/85">
            We take appropriate security measures to protect your personal data
            from unauthorized access, loss, or misuse. Access to your
            information is limited to authorized personnel only.
          </p>

          <SectionTitle>Sharing of information</SectionTitle>
          <p className="mt-3 text-base font-medium leading-relaxed text-black/85">
            Chef 242 does not sell or rent your personal information. We may
            share necessary information with trusted third parties (such as
            delivery partners or payment processors) strictly to fulfill your
            order. These partners are required to keep your information secure
            and confidential.
          </p>

          <SectionTitle>Cookies & website usage</SectionTitle>
          <p className="mt-3 text-base font-medium leading-relaxed text-black/85">
            Our website may use cookies or similar technologies to improve your
            browsing experience and analyze site performance. You can control
            cookie settings through your browser.
          </p>

          <SectionTitle>Your rights</SectionTitle>
          <p className="mt-3 text-base font-medium leading-relaxed text-black/85">
            You have the right to:
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-base font-medium text-black/85 marker:text-black">
            <li>Access the personal data we hold about you</li>
            <li>Request corrections to your information</li>
            <li>Request deletion of your data (where applicable)</li>
          </ul>
          <p className="mt-4 text-base font-medium leading-relaxed text-black/85">
            To make a request, please contact us directly.
          </p>

          <SectionTitle>Data retention</SectionTitle>
          <p className="mt-3 text-base font-medium leading-relaxed text-black/85">
            We retain your information only as long as necessary to provide our
            services and meet legal or operational requirements.
          </p>

          <SectionTitle>Updates to This Policy</SectionTitle>
          <p className="mt-3 text-base font-medium leading-relaxed text-black/85">
            We may update this Privacy Policy from time to time. Any changes
            will be posted on this page.
          </p>

          <SectionTitle>Contact Us</SectionTitle>
          <p className="mt-3 text-base font-medium leading-relaxed text-black/85">
            If you have any questions about this Privacy Policy or how your data
            is handled, please contact us at:{" "}
            <a
              href="mailto:info@chef242.com"
              className="font-medium text-black underline underline-offset-2 hover:text-black/80"
            >
              info@chef242.com
            </a>
          </p>
        </div>
      </section>

      <section className="grid w-full grid-cols-1 grid-rows-[auto_auto] gap-0 overflow-hidden bg-[#ececec] leading-none">
        <div className="grid grid-cols-2 gap-0 text-center text-xs font-bold uppercase leading-none tracking-wide sm:text-sm">
          <div className="flex items-center justify-center bg-[#4BA4C5] py-10 text-white sm:py-12">
            @CHEF242
          </div>
          <div className="flex items-center justify-center bg-[#F7DC51] py-10 text-black sm:py-12">
            #CHEF242
          </div>
        </div>
        <MenuGalleryRow items={menuGalleryImages} />
      </section>
    </div>
  );
}
