import "../../../assets/scss/Home.scss"
import Description from "../../elements/Descrip"
import SearchBar from "../../elements/SearchBar"


const Home = () => {
    return (
        <div className="container">
            <div className="row main-input-section">
                <div className="col-auto">
                    <h3 className="main-title">
                        Use Domain Finder to find unique domains!
                    </h3>
                    <p className="main-description">
                        Millions of people are searching for companies, domains,
                        meta tags, company names and etc.,
                        <br /> on Domain finder. Try today! <b>
                            1 000 000
                        </b>{" "}
                        data for your search.
                    </p>
                    <SearchBar />
                    <div className="row top-searches">
                        <h6 className="col top-search">Top Searches:</h6>
                        <div className="col ">
                            <button type="button" className="btn btn-light">
                                development
                            </button>
                        </div>
                        <div className="col ">
                            <button type="button" className="btn btn-light">
                                agile
                            </button>
                        </div>
                        <div className="col ">
                            <button type="button" className="btn btn-light">
                                design
                            </button>
                        </div>
                        <div className="col ">
                            <button type="button" className="btn btn-light">
                                finance
                            </button>
                        </div>
                        <div className="col ">
                            <button type="button" className="btn btn-light">
                                startup
                            </button>
                        </div>
                        <div className="col ">
                            <button type="button" className="btn btn-light">
                                delivery
                            </button>
                        </div>
                    </div>
                </div>
            </div>


            <Description />
        </div>
    )
}
export default Home



