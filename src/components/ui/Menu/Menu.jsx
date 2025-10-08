import { NavLink } from "react-router";
import "./Menu.scss";
import soundPlayer from '../../../utils/soundPlayer';

// Menu component displays the navigation menu
function Menu(){
    return(<>
    <nav className="menu">
        <NavLink to="/">Home</NavLink>
        {/*<NavLink to="/charlas">Charlas</NavLink>*/}
        <NavLink to="/cine" onMouseEnter={() => soundPlayer.playHover()} onClick={() => soundPlayer.playClick()}>Cine</NavLink>
        <NavLink to="/online-events" onMouseEnter={() => soundPlayer.playHover()} onClick={() => soundPlayer.playClick()}>Online</NavLink>
        <NavLink to="/cursos-sapiencia" onMouseEnter={() => soundPlayer.playHover()} onClick={() => soundPlayer.playClick()}>Cursos Sapiencia</NavLink>
        <NavLink to="/hacktoberfest" onMouseEnter={() => soundPlayer.playHover()} onClick={() => soundPlayer.playClick()}>HacktoberFest</NavLink>
        {/*<NavLink to="/deportes">Deportes</NavLink>*/}
    </nav>
    </>);
}

export default Menu;