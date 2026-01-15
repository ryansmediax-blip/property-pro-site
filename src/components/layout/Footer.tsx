import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const footerLinks = {
  main: [
    { name: "Memberships", href: "/memberships" },
    { name: "Services", href: "/services" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ],
  legal: [
    { name: "Terms of Service", href: "/terms" },
    { name: "Privacy Policy", href: "/privacy" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-wide mx-auto px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-semibold mb-4">Payette Property Prep</h3>
            <p className="text-primary-foreground/80 text-sm leading-relaxed mb-6">
              Premium exterior property services for Valley County, Idaho. Serving McCall, Donnelly, and Cascade.
            </p>
            <div className="space-y-3">
              <a href="tel:208-991-6297" className="flex items-center gap-3 text-sm hover:text-accent transition-colors">
                <Phone className="h-4 w-4" />
                208-991-6297
              </a>
              <a href="mailto:payettepropertyprep@gmail.com" className="flex items-center gap-3 text-sm hover:text-accent transition-colors">
                <Mail className="h-4 w-4" />
                payettepropertyprep@gmail.com
              </a>
              <div className="flex items-center gap-3 text-sm text-primary-foreground/80">
                <MapPin className="h-4 w-4" />
                Valley County, Idaho
              </div>
            </div>
          </div>

          {/* Main */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {footerLinks.main.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 pt-6 border-t border-primary-foreground/20">
              <p className="text-xs text-primary-foreground/60">Licensed & Insured</p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <p className="text-center text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} Payette Property Prep. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
