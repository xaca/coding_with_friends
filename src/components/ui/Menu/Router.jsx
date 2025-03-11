import { BrowserRouter, Routes, Route } from "react-router";
import Deportes from "../../pages/Deportes/Deportes";
import Home from "../../pages/Home/Home";
import Cine from "../../pages/Cine/Cine";
import InPersonEvent from "../../pages/Charlas/InPersonEvent";

function Router(){
    return(<>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="cine" element={<Cine />} />
                <Route path="charlas" element={<InPersonEvent />} />
                <Route path="deportes" element={<Deportes />} />
                <Route path="*" element={<Home />} />
            </Routes>
        </BrowserRouter>
    </>);
}

export default Router;