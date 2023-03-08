import Filter from "../../elements/Filter";
import ResultList from "../../elements/ResultList";
import SearchBar from "../../elements/SearchBar";

const Results = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-auto shadow p-3 bg-white rounded mx-auto" style={{ marginTop: "-20px" }}>
                    <SearchBar />
                </div>
            </div>
            <div className="row" style={{ marginTop: "80px", marginBottom: "20px" }}>
                <div className="col-lg-2 pale-sentences">FILTERS</div>
                <div className="col-lg-4 pale-sentences">Showing: 599 filtered domains</div>
                <div className="col-lg-6 pale-sentences" style={{ textAlign: "right" }}>
                    Sort by : <b>Relevance</b>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-2 col-12">
                    <Filter />
                </div>
                <div className="col-lg-10 col-12">
                    <ResultList />
                </div>
            </div>
        </div>
    );
};
export default Results;
