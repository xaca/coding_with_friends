import { NavLink } from "react-router";
import "./Menu.scss";

function Menu(){
    return(<>
    <nav className="menu">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/charlas">Charlas</NavLink>
        <NavLink to="/cine">Cine</NavLink>
        {/*<NavLink to="/deportes">Deportes</NavLink>*/}
    </nav>
    </>);
}
export default Menu;