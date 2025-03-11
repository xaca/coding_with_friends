import logo_pragma from "../../../assets/img/pragma.png";
import logo_upb_tec from "../../../assets/img/upb_tec_logo.png";
import logo_upb from "../../../assets/img/logo_upb.png";

function Sponsors(){
    return (<>
    <footer id="sponsors">
      <h2>
        Con el apoyo de
      </h2>
      <div>
        <a class="enlace_sponsor" href="https://www.pragma.com.co/es/" target="_blank">
            <img src={logo_pragma} alt="" />
        </a>
        <br />
        <a class="enlace_sponsor" href="https://www.upb.edu.co/es/programas-tecnicos" target="_blank">
            <img src={logo_upb_tec} alt="" />
        </a>
        <a class="enlace_sponsor" href="https://www.upb.edu.co" target="_blank">
          <img src={logo_upb} alt="" />
        </a>
        <br />
        <a class="enlace_sponsor autor" href="http://www.xacarana.com" target="_blank">
          Diseño: xacarana
        </a>
      </div>
    </footer>
    </>);
}
export default Sponsors;
/*
<!--a href="https://www.growthaccelerationpartners.com/" target="_blank"
          ><img src="img/empresas_01.jpg" alt=""
        /></a>
        <a href="https://www.uruit.com/" target="_blank"
          ><img src="img/empresas_02.jpg" alt=""
        /></a>
        <a
          href="https://www.meetup.com/es/Medellin-Human-Resources-Meetup/"
          target="_blank"
          ><img src="img/empresas_03.jpg" alt=""
        /></a-->
        <!--a href="https://www.teaminternational.com/" target="_blank"
          ><img src="img/empresas_05.jpg" alt=""
        /></a>
        <a href="https://www.globant.com/" target="_blank"
          ><img src="img/empresas_06.jpg" alt=""
        /></a-->
        
        <!-- <a class="enlace_sponsor" href="https://h1.community/colombia-hackerone-club/" target="_blank">
          <img src="img/colombia.png" alt="">
        </a> -->
*/