
function listaDeFotos(){
    let galeria = [];
    const fotos = import.meta.glob("../../assets/img/fotos/*");

    for(var foto in fotos){
      let image_url = new URL(foto, import.meta.url).pathname;
      galeria.push(image_url);
    } 

    return galeria; 
}

export default listaDeFotos;

//  import.meta.url
 
//  Esta es la referencia del modulo desde donde se cargan los recursos, entonces toda la lógica del enrutamiento y creación de la ruta se debe realizar encapsulado en un modulo, ya luego se expone una función que se encarga de armar la interfaz