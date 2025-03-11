import { NavLink } from "react-router";
import "./Menu.scss";

function Menu(){
    return(<>
    <nav className="menu">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/charlas">Charlas</NavLink>
    </nav>
    </>);
}
/*<NavLink to="/cine">Cine</NavLink>
<NavLink to="/deportes">Deportes</NavLink>*/
export default Menu;