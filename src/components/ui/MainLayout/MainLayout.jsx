// MainLayout component wraps the app with header, menu, main content, and footer
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Menu from "../Menu/Menu";
import BackToTop from "../BackToTop/BackToTop";

// MainLayout function returns the app structure with header, menu, main content, and footer
export default function MainLayout({ children, logoPersonalizado }) {
  return (
    <div>
      <Header logoPersonalizado={logoPersonalizado} />
      <Menu />
      <main className="main-content">{children}</main>
      <Footer />
      <BackToTop />
    </div>
  );
}
