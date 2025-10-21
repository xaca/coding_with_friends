import logo from "../../../assets/img/logo.png";

// Header component displays the top logo and branding
function Header({logoPersonalizado}) {
  let imagen = logoPersonalizado || logo;
  return (
    <div className="header">
        <img src={imagen} className="logo_principal" alt="Coding with Friends :)" />
    </div>
  );
}
export default Header;