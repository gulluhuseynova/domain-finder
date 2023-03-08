import { Routes, Route } from "react-router-dom";
import Home from "./../pages/Home/Home";
import About from "./../pages/About/About";
import Results from "./../pages/Results/Results";
import Detail from "../pages/Detail/Detail";
import NoPage from './../elements/NoPage';

const Routing = () => {
    return (
        <div>
            <Routes>
                <Route path="/" index element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/results" element={<Results />} />
                <Route path="/results/:id" element={<Detail />} />
                <Route path="*" element={<NoPage />} />
            </Routes>
        </div>
    );
};

export default Routing;
