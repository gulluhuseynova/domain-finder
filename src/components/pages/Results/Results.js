import { Link } from "react-router-dom";
import Filter from "../../elements/Filter";
import ResultList from "../../elements/ResultList";
import SearchBar from "../../elements/SearchBar";
import "../../../assets/scss/ResultItem.scss";
const Results = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-auto shadow p-3 bg-white rounded mx-auto result-search-input">
                    <SearchBar />
                </div>
            </div>
            <div className="row faded-links">
                <div className="col-lg-2 ">
                    <Link className="pale-sentences">FILTERS</Link>
                </div>
                <div className="col-lg-4 pale-sentences">Showing: 599 filtered domains</div>
                <div className="col-lg-6 pale-sentences" style={{ textAlign: "right" }}>
                    Sort by : <b>Relevance</b>
                </div>
            </div>
            <div className="row" style={{ width: "100%" }}>
                <div className="col-2 result-items">
                    <Filter />
                </div>
                <div className="col-10 result-items">
                    <ResultList />
                </div>
            </div>
        </div>
    );
};
export default Results;
