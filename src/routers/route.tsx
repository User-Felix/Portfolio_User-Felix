import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "../pages/Home/main"
import About from "../pages/About/main";
import Skills from "../pages/Skills/main";

export default function MainRoute() {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/About" element={<About/>}/>
                <Route path="/Skills" element={<Skills/>}/>
            </Routes>
        </Router>
    )
}