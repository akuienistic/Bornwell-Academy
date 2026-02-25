import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";

const Layout = ({ children }: { children: ReactNode }) => (
  <div className="flex min-h-screen flex-col font-body">
    <Navbar />
    <main className="flex-1">{children}</main>
    <Footer />
    <ScrollToTop />
  </div>
);

export default Layout;
