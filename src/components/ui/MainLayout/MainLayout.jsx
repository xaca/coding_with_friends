import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Menu from "../Menu/Menu";

export default function MainLayout({children, logoPersonalizado}){
    return(
        <div>
            <Header logoPersonalizado={logoPersonalizado} />
            <Menu />
            {children}
            <Footer />
        </div>

    )
}
