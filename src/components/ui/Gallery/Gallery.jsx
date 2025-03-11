import listaDeFotos from "../../data/fotos.js";
import foto1 from "../../../assets/img/fotos/IMG_0027.jpg";
import foto2 from "../../../assets/img/fotos/IMG_0032.jpg";
import foto3 from "../../../assets/img/fotos/IMG_0034.jpg";
import foto4 from "../../../assets/img/fotos/IMG_0117.jpg";
import foto5 from "../../../assets/img/fotos/IMG_1014.jpg";
import foto6 from "../../../assets/img/fotos/IMG_1035.jpg";
import foto7 from "../../../assets/img/fotos/IMG_1396.jpg";
import foto8 from "../../../assets/img/fotos/IMG_1703.jpg";
import foto9 from "../../../assets/img/fotos/IMG_1708.jpg";
import foto10 from "../../../assets/img/fotos/IMG_9390.jpg";
import foto11 from "../../../assets/img/fotos/IMG_9399.jpg";
import foto12 from "../../../assets/img/fotos/IMG_9400.jpg";
import foto13 from "../../../assets/img/fotos/IMG_9406.jpg";
import foto14 from "../../../assets/img/fotos/IMG_9411.jpg";
import foto15 from "../../../assets/img/fotos/IMG_9471.jpg";
import foto16 from "../../../assets/img/fotos/IMG_9488.jpg";
import foto17 from "../../../assets/img/fotos/IMG_9491.jpg";
import foto18 from "../../../assets/img/fotos/IMG_9518.jpg";
import foto19 from "../../../assets/img/fotos/IMG_9736.jpg";
import foto20 from "../../../assets/img/fotos/IMG_9739.jpg";
import foto21 from "../../../assets/img/fotos/IMG_9752.jpg";
import foto22 from "../../../assets/img/fotos/IMG_9753.jpg";
import foto23 from "../../../assets/img/fotos/IMG_9846.jpg";
import foto24 from "../../../assets/img/fotos/IMG_9901.jpg";
import foto25 from "../../../assets/img/fotos/IMG_9906.jpg";
import foto26 from "../../../assets/img/fotos/IMG_9907.jpg";
import Image from "./Image.jsx";
import './Gallery.scss';

function Gallery() {
  //let galeria = listaDeFotos();
  let galeria = [foto1,foto2,foto3,foto4,foto5,foto6,foto7,foto8,foto9,foto10,foto11,foto12,foto13,foto14,foto15,foto16,foto17,foto18,foto19,foto20,foto21,foto22,foto23,foto24,foto25,foto26];
  return (
    <div id="images-wrapper">
      {
        galeria.map((foto,index)=>{
          return <Image src={foto} key={index} />
        })
      }
    </div>
  );
}
export default Gallery;