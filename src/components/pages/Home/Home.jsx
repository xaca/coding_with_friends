

// Home component displays the main slider and gallery
import Gallery from "../../ui/Gallery/Gallery";
import Slider from "../../ui/Slider/Slider";
import '../../../css/variables.scss';
import '../../../css/generales.scss';
import '../../../css/mediaqueries/mobile.scss';
import '../../../css/mediaqueries/tablet.scss';
import '../../../css/mediaqueries/desktop.scss';
import "./Home.scss";

// Main Home function returns the slider and gallery components
function Home(){
    return(<>
        <Slider id_slider={"slider_1"} />
        <Gallery />
    </>);
}

export default Home;