import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, Info, Users, Phone, ClipboardList, Menu, X } from "lucide-react";
import schoolLogo from "@/assets/school-logo.jpg";

const navItems = [
  { title: "Home", path: "/", icon: Home },
  { title: "About Us", path: "/about", icon: Info },
  { title: "Leadership", path: "/leadership", icon: Users },
  { title: "Contact Us", path: "/contact", icon: Phone },
];

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <nav className="sticky top-0 z-50 border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
        <div className="container-main flex h-16 items-center justify-between md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src={schoolLogo} alt="Bornwell Academy Logo" className="h-12 w-12 rounded-full object-cover md:h-14 md:w-14" />
            <div className="hidden sm:block">
              <h1 className="font-heading text-lg font-bold leading-tight text-primary md:text-xl">Bornwell Academy</h1>
              <p className="text-xs text-muted-foreground">For Quality Education & Excellence</p>
            </div>
          </Link>

          {/* Desktop Nav - Centered */}
          <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-2 rounded-lg px-4 py-2 font-body text-sm font-medium transition-colors ${
                  isActive(item.path)
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:bg-muted"
                }`}
              >
                <item.icon className="h-4 w-4" />
                {item.title}
              </Link>
            ))}
          </div>

          {/* Registration Button - Right Side */}
          <div className="hidden items-center lg:flex">
            <Link
              to="/registration"
              className={`flex items-center gap-2 rounded-lg px-5 py-2.5 font-body text-sm font-semibold transition-all ${
                isActive("/registration")
                  ? "bg-gold text-gold-foreground shadow-lg"
                  : "bg-accent text-accent-foreground shadow-md hover:shadow-lg hover:brightness-110"
              }`}
              style={{ background: isActive("/registration") ? undefined : "linear-gradient(135deg, hsl(45 95% 55%), hsl(35 90% 50%))" }}
            >
              <ClipboardList className="h-4 w-4" />
              Registration
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setSidebarOpen(true)}
            className="rounded-lg p-2 text-foreground hover:bg-muted lg:hidden"
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 lg:hidden" onClick={() => setSidebarOpen(false)}>
          <div className="absolute inset-0 bg-foreground/40 backdrop-blur-sm" />
          <aside
            className="absolute right-0 top-0 h-full w-1/2 min-w-[260px] bg-primary p-6 shadow-2xl animate-slide-in-right"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-8 flex items-center justify-between">
              <span className="font-heading text-lg font-bold text-primary-foreground">Menu</span>
              <button onClick={() => setSidebarOpen(false)} className="rounded-lg p-1 text-primary-foreground hover:bg-sidebar-accent" aria-label="Close menu">
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="flex flex-col gap-2">
              {[...navItems, { title: "Registration", path: "/registration", icon: ClipboardList }].map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setSidebarOpen(false)}
                  className={`flex items-center gap-3 rounded-lg px-4 py-3 font-body text-sm font-medium transition-colors ${
                    isActive(item.path)
                      ? "bg-sidebar-accent text-gold"
                      : "text-primary-foreground hover:bg-sidebar-accent"
                  }`}
                >
                  <item.icon className="h-5 w-5" />
                  {item.title}
                </Link>
              ))}
            </div>
          </aside>
        </div>
      )}
    </>
  );
};

export default Navbar;
