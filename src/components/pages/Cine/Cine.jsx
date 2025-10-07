import MainLayout from "../../ui/MainLayout/MainLayout";

function Cine() {
    const form_url = "https://forms.gle/TBSXajUiAXESmCxh8"
    return (<MainLayout>
        <div>
            <h1>Salida Cine🍿</h1>
            <iframe src={form_url} width="80%" height="4250" frameborder="0" marginheight="0" marginwidth="0">Cargando…</iframe>
        </div>
    </MainLayout>);
}
export default Cine;