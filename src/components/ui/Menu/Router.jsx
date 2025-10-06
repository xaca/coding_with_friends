import { HashRouter, Routes, Route } from "react-router";
import Deportes from "../../pages/Deportes/Deportes";
import Home from "../../pages/Home/Home";
import Cine from "../../pages/Cine/Cine";
import InPersonEvent from "../../pages/Charlas/InPersonEvent";
import OnlineEvents from "../../pages/OnlineEvents/OnlineEvents";
import CursosSapiencia from "../../pages/CursosSapiencia/CursosSapiencia";
import HacktoberFest from "../../pages/HacktoberFest/HacktoberFest";
import App from "../../../App";
import { ViewTransitionWrapper } from "../PageTransition/ViewTransition";

function Router(){
    return(<>
        <HashRouter>
        <ViewTransitionWrapper>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="cine" element={<Cine />} />
                <Route path="charlas" element={<InPersonEvent />} />
                <Route path="deportes" element={<Deportes />} />
                <Route path="online-events" element={<OnlineEvents />} />
                <Route path="cursos-sapiencia" element={<CursosSapiencia />} />
                <Route path="hacktoberfest" element={<HacktoberFest />} />
                <Route path="*" element={<Home />} />
            </Routes>
        </ViewTransitionWrapper>
        </HashRouter>
    </>);
}

export default Router;