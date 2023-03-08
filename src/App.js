import { BrowserRouter } from "react-router-dom";
import "./assets/fonts/App.scss";
import Layout from "./components/layout/Layout";
import Routing from "./components/layout/Routing";

const App = () => {
    return (
        <div className="App">
            <BrowserRouter>
                <Layout>
                    <Routing />
                </Layout>
            </BrowserRouter>
        </div>
    );
};

export default App;
