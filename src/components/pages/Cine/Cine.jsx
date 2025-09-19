import MainLayout from "../../ui/MainLayout/MainLayout";

function Cine(){
    const form_url = "https://docs.google.com/forms/d/e/1FAIpQLScoZFvTAnwOVg4hW4zruOPz7KxvZJ0ZOF5n3-lcBiIJ6sBHng/viewform?usp=header"
    return(<MainLayout>
       <div>
       <h1>Salida Cine</h1>
            <iframe src={form_url} width="80%" height="4030" frameborder="0" marginheight="0" marginwidth="0">Cargando…</iframe>
       </div>
    </MainLayout>);
}
export default Cine;