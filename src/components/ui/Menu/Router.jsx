import { HashRouter, Routes, Route } from "react-router";
import Deportes from "../../pages/Deportes/Deportes";
import Home from "../../pages/Home/Home";
import Cine from "../../pages/Cine/Cine";
import InPersonEvent from "../../pages/Charlas/InPersonEvent";
import OnlineEvents from "../../pages/OnlineEvents/OnlineEvents";
import App from "../../../App";

function Router(){
    return(<>
        <HashRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="cine" element={<Cine />} />
                <Route path="charlas" element={<InPersonEvent />} />
                <Route path="deportes" element={<Deportes />} />
                <Route path="online-events" element={<OnlineEvents />} />
                <Route path="*" element={<Home />} />
            </Routes>
        </HashRouter>
    </>);
}

export default Router;