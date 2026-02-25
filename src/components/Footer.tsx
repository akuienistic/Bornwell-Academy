import { Facebook, Phone, Mail, MapPin, Home, Info, Users, ClipboardList, MessageSquare } from "lucide-react";
import schoolLogo from "@/assets/school-logo.jpg";

// Custom TikTok icon component
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
);

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
    { title: "Home", id: "home", icon: Home },
    { title: "About Us", id: "about", icon: Info },
    { title: "Leadership", id: "leadership", icon: Users },
    { title: "Registration", id: "registration", icon: ClipboardList },
    { title: "Contact Us", id: "contact", icon: MessageSquare },
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
              A premier nursery, elementary, and secondary school in Juba, South Sudan — nurturing academic excellence,
              discipline, and holistic development.
            </p>
            <div className="flex gap-3">
              <a
                href="https://web.facebook.com/profile.php?id=100094747883962"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-sidebar-accent text-primary-foreground transition-colors hover:bg-gold hover:text-gold-foreground"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="https://tiktok.com/@bornwell.academy"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-sidebar-accent text-primary-foreground transition-colors hover:bg-gold hover:text-gold-foreground"
              >
                <TikTokIcon className="h-4 w-4" />
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
                    className="flex items-center gap-2 text-primary-foreground/80 transition-colors hover:text-gold cursor-pointer"
                  >
                    <link.icon className="h-4 w-4" />
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
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-gold" /> +211 912 345 678
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-gold" /> info@bornwellacademy.com
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 text-gold" /> Juba, South Sudan
              </li>
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
              href="https://web.facebook.com/profile.php?id=61572703111798"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-gold transition-colors"
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
