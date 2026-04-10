import { MenuGalleryRow } from "../components/MenuGalleryRow";

const menuGalleryImages = [
  { file: "menu 1.png", alt: "Chef 242 menu item 1" },
  { file: "menu 2.png", alt: "Chef 242 menu item 2" },
  { file: "menu 3.png", alt: "Chef 242 menu item 3" },
  { file: "menu 4.png", alt: "Chef 242 menu item 4" },
] as const;

function H2({ children }: { children: React.ReactNode }) {
  return <h2 className="mt-10 text-[18px] font-bold text-black">{children}</h2>;
}

function P({ children }: { children: React.ReactNode }) {
  return (
    <p className="mt-3 text-[18px] font-normal leading-relaxed text-black">
      {children}
    </p>
  );
}

export default function TermsPage() {
  return (
    <div className="w-full">
      <section className="bg-[#F7DC51] py-10 text-center sm:py-12">
        <h1 className="text-[20px] font-semibold uppercase tracking-[0.25em] text-black">
          Terms &amp; Conditions
        </h1>
      </section>

      <section className="bg-white px-4 py-14 sm:px-8 sm:py-16">
        <div className="mx-auto max-w-4xl text-black">
          <P>
            Welcome to Chef 242. By using our website and services, you agree to
            the following Terms &amp; Conditions. Please read them carefully.
          </P>

          <H2>1. Use of Services</H2>
          <P>
            Chef 242 provides online food ordering and delivery services to
            construction sites and businesses across The Bahamas. By placing an
            order, you agree to use our services for lawful purposes only.
          </P>

          <H2>2. Orders &amp; Availability</H2>
          <P>All orders are subject to availability and confirmation.</P>
          <P>We reserve the right to refuse or cancel any order due to:</P>
          <ul className="mt-3 list-disc space-y-2 pl-6 text-[18px] font-normal text-black marker:text-black">
            <li>Item unavailability</li>
            <li>Errors in pricing or information</li>
            <li>Issues with delivery location or scheduling</li>
          </ul>
          <P>We will notify you promptly if any changes affect your order.</P>

          <H2>3. Pricing &amp; Payment</H2>
          <P>
            All prices are listed in Bahamian dollars (BSD) or US dollars (USD)
            and are subject to change without notice.
          </P>
          <P>
            Payment must be made at the time of ordering unless otherwise
            agreed. We accept approved payment methods listed on our website.
          </P>

          <H2>4. Delivery</H2>
          <P>
            We aim to deliver all orders on time, especially around scheduled
            lunch breaks. However, delivery times may vary due to:
          </P>
          <ul className="mt-3 list-disc space-y-2 pl-6 text-[18px] font-normal text-black marker:text-black">
            <li>Weather conditions</li>
            <li>Traffic or site access issues</li>
            <li>High demand</li>
          </ul>
          <P>
            Customers are responsible for providing accurate delivery details
            and ensuring safe access to the site.
          </P>

          <H2>5. Cancellations &amp; Refunds</H2>
          <ul className="mt-3 list-disc space-y-2 pl-6 text-[18px] font-normal text-black marker:text-black">
            <li>
              Orders may be canceled within a reasonable timeframe before
              preparation begins.
            </li>
            <li>
              Once food preparation has started, cancellations may not be
              possible.
            </li>
            <li>
              Refunds, if applicable, will be processed at our discretion.
            </li>
          </ul>
          <P>
            If there is an issue with your order, please contact us immediately
            so we can resolve it.
          </P>

          <H2>6. Food &amp; Allergies</H2>
          <P>
            While we strive to accommodate dietary preferences, we cannot
            guarantee that our food is free from allergens. Customers are
            responsible for informing us of any allergies or dietary
            restrictions when ordering.
          </P>
          <P>
            Chef 242 is not liable for allergic reactions or dietary issues if
            such information is not disclosed.
          </P>

          <H2>7. Customer Responsibilities</H2>
          <P>By using our service, you agree to:</P>
          <ul className="mt-3 list-disc space-y-2 pl-6 text-[18px] font-normal text-black marker:text-black">
            <li>Provide accurate and complete information</li>
            <li>Ensure someone is available to receive the order</li>
            <li>
              Treat delivery staff with respect and provide safe access to the
              site
            </li>
          </ul>

          <H2>8. Intellectual Property</H2>
          <P>
            All content on this website, including logos, text, and images, is
            the property of Chef 242 and may not be used or reproduced without
            permission.
          </P>

          <H2>9. Limitation of Liability</H2>
          <P>Chef 242 is not liable for:</P>
          <ul className="mt-3 list-disc space-y-2 pl-6 text-[18px] font-normal text-black marker:text-black">
            <li>Delays beyond our control</li>
            <li>
              Indirect or incidental damages arising from use of our service
            </li>
            <li>
              Issues resulting from incorrect information provided by the
              customer
            </li>
          </ul>
          <P>Our liability is limited to the value of the order placed.</P>

          <H2>10. Changes to Terms</H2>
          <P>
            We reserve the right to update these Terms &amp; Conditions at any
            time. Continued use of our services constitutes acceptance of any
            changes.
          </P>

          <H2>11. Governing Law</H2>
          <P>
            These Terms &amp; Conditions are governed by the laws of The
            Bahamas.
          </P>

          <H2>12. Contact Us</H2>
          <P>
            If you have any questions about these Terms &amp; Conditions, please
            contact us directly at{" "}
            <a
              href="mailto:info@chef242.com"
              className="underline underline-offset-2 hover:opacity-75"
            >
              info@chef242.com
            </a>
            .
          </P>
        </div>
      </section>

      <section className="grid w-full grid-cols-1 gap-0 overflow-hidden">
        <div className="grid grid-cols-2 text-center text-[18px] font-normal uppercase leading-none tracking-wide">
          <div className="bg-[#4BA4C5] py-10 text-black sm:py-12">@CHEF242</div>
          <div className="bg-[#F7DC51] py-10 text-black sm:py-12">#CHEF242</div>
        </div>
        <MenuGalleryRow items={menuGalleryImages} />
      </section>
    </div>
  );
}
