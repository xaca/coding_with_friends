import { NavLink } from "react-router";
import "./Menu.scss";

// Menu component displays the navigation menu
function Menu(){
    return(<>
    <nav className="menu">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/charlas">Charlas</NavLink>
        <NavLink to="/cine">Cine</NavLink>
        <NavLink to="/online-events">Online</NavLink>
        <NavLink to="/cursos-sapiencia">Cursos Sapiencia</NavLink>
        <NavLink to="/hacktoberfest">HacktoberFest</NavLink>
        <NavLink to="/frases-motivacionales">Frases Motivacionales</NavLink>
        {/*<NavLink to="/deportes">Deportes</NavLink>*/}
    </nav>
    </>);
}

export default Menu;