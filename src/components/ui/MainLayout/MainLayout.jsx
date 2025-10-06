import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Menu from "../Menu/Menu";

export default function MainLayout({ children, logoPersonalizado }) {
  return (
    <div>
      <Header logoPersonalizado={logoPersonalizado} />
      <Menu />
      <main className="main-content">{children}</main>
      <Footer />
    </div>
  );
}
