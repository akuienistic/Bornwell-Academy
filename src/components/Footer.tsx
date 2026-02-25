import { Facebook, Phone, Mail, MapPin } from "lucide-react";

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
        <div className="grid gap-8 md:grid-cols-3">
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

          {/* Social */}
          <div>
            <h3 className="mb-4 font-heading text-lg font-bold text-gold">Follow Us</h3>
            <div className="flex gap-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full bg-sidebar-accent text-primary-foreground transition-colors hover:bg-gold hover:text-gold-foreground">
                <Facebook className="h-5 w-5" />
              </a>
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
