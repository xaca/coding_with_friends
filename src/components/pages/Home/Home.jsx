
import Gallery from "../../ui/Gallery/Gallery";
import Slider from "../../ui/Slider/Slider";
import Header from "../../ui/Header/Header";
import Footer from "../../ui/Footer/Footer";
import Menu from "../../ui/Menu/Menu";
import "./Home.scss";

function Home(){
    return(<>
            <Header />
            <Menu />
            <Slider id_slider={"slider_1"} />
            <Gallery />
            <Footer />
    </>);
}

export default Home;