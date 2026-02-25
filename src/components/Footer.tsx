import { Facebook, Phone, Mail, MapPin } from "lucide-react";
import schoolLogo from "@/assets/school-logo.jpg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Navbar height
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth"
      });
    }
  };

  const footerLinks = [
    { title: "Home", id: "home" },
    { title: "About Us", id: "about" },
    { title: "Leadership", id: "leadership" },
    { title: "Registration", id: "registration" },
    { title: "Contact Us", id: "contact" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-main py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* School Info */}
          <div>
            <div className="mb-4 flex items-center gap-3">
              <img src={schoolLogo} alt="Bornwell Academy Logo" className="h-14 w-14 rounded-full object-cover" />
              <div>
                <h3 className="font-heading text-lg font-bold text-primary-foreground">Bornwell Academy</h3>
                <p className="text-xs text-gold">For Quality Education & Excellence</p>
              </div>
            </div>
            <p className="mb-4 text-sm text-primary-foreground/70">
              A premier nursery, elementary, and secondary school in Juba, South Sudan. Nurturing academic excellence, discipline, and holistic development.
            </p>
            <div className="flex gap-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="flex h-9 w-9 items-center justify-center rounded-full bg-sidebar-accent text-primary-foreground transition-colors hover:bg-gold hover:text-gold-foreground">
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 font-heading text-lg font-bold text-gold">Quick Links</h3>
            <ul className="space-y-2 font-body text-sm">
              {footerLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-primary-foreground/80 transition-colors hover:text-gold cursor-pointer"
                  >
                    {link.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 font-heading text-lg font-bold text-gold">Contact</h3>
            <ul className="space-y-3 font-body text-sm text-primary-foreground/80">
              <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-gold" /> +211 912 345 678</li>
              <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-gold" /> info@bornwellacademy.com</li>
              <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 text-gold" /> Juba, South Sudan</li>
            </ul>
          </div>

          {/* School Hours */}
          <div>
            <h3 className="mb-4 font-heading text-lg font-bold text-gold">School Hours</h3>
            <ul className="space-y-2 font-body text-sm text-primary-foreground/80">
              <li className="flex justify-between">
                <span>Monday - Friday</span>
                <span className="text-gold">7:30 AM - 5:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span className="text-primary-foreground/50">Closed</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span className="text-primary-foreground/50">Closed</span>
              </li>
            </ul>
            <div className="mt-4 rounded-lg bg-sidebar-accent p-3">
              <p className="text-xs text-primary-foreground/60">Office Hours</p>
              <p className="text-sm font-medium text-primary-foreground">Mon - Fri: 8:00 AM - 5:00 PM</p>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-sidebar-border pt-6 text-center font-body text-sm text-primary-foreground/70">
          <p>© {currentYear} Bornwell Academy – South Sudan</p>
          <p className="mt-1">
            Designed and built by{" "}
            <a
              href="https://www.linkedin.com/in/simon-akuien-atem-710895290"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-gold transition-colors hover:underline"
            >
              Simon Star Tech
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
