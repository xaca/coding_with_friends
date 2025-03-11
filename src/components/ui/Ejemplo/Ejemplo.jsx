import { useEffect,useState } from "react";

function Ejemplo(){
    const [usuario,setUsuario] = useState("");

    useEffect(()=>{
        setUsuario(localStorage.getItem("usuario"));
    },[localStorage]);

    function handleChange(e)
    {
      //console.dir(e.target.value);
      //let txt_usuario = document.getElementById("txt_usuario");
      const valor = e.target.value;
      localStorage.setItem("usuario",valor); 
      setUsuario(valor); 
    }
    return(<>
        <h1>
            Website intro
        </h1>
        <p>
            {usuario && `Hola ${usuario}`}
        </p>
        <input type="text" onChange={handleChange} />
        </>
    );
}
export default Ejemplo;