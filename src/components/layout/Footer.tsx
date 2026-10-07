import { footerLinks } from "@/data/navigation";
import { contact } from "@/data/contact";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">TIS</h3>
            <p className="mb-4 text-sm">
              Tulas International School Dhoolkot, P.O – Selaqui, Chakrata
              Road, Dehradun-248011 (Uttarakhand)
            </p>
            <div className="space-y-2 text-sm">
              <p>
                <a
                  href={`tel:${contact.phone}`}
                  className="hover:text-amber-500"
                >
                  Phone: {contact.phone}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${contact.email}`}
                  className="hover:text-amber-500"
                >
                  Email: {contact.email}
                </a>
              </p>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="transition-colors hover:text-amber-500"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">
              Admissions
            </h3>
            <div className="space-y-3">
              <a
                href={contact.admissionUrl}
                className="inline-block rounded bg-amber-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-amber-700"
              >
                Apply Now
              </a>
              <a
                href={contact.virtualTourUrl}
                className="block text-sm transition-colors hover:text-amber-500"
              >
                Virtual Tour
              </a>
              <a
                href={contact.fedenaUrl}
                className="block text-sm transition-colors hover:text-amber-500"
              >
                Fedena Login
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">
              Follow Us
            </h3>
            <div className="flex space-x-4">
              {footerLinks.socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm transition-colors hover:text-amber-500"
                  aria-label={link.label}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-800 pt-8 text-center text-sm">
          <p>
            Copyright © 2026 Tulas International School, Dehradun | All Rights
            Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
