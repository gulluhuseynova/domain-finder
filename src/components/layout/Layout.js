import Header from "./Header";
import Footer from "./Footer";

const Layout = (props) => {
    return (
        <>
            <Header />
            {props.children}
            <hr />
            <Footer />
        </>
    );
};

export default Layout;
