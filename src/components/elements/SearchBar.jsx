import { useNavigate } from "react-router-dom";

const SearchBar = () => {
    let navigate = useNavigate();
    const openResults = () => {
        navigate("/results");
    };

    return (
        <div className="input-group input-dropdown-sec">
            <button className="btn btn-outline-secondary dropdown-toggle resources-btn" type="button" data-bs-toggle="dropdown">
                Resources
            </button>
            <ul className="dropdown-menu">
                <div>
                    <label className="dropdown-label" htmlFor="scales">
                        Only Domain
                    </label>
                    <input type="checkbox" id="scales" name="scales" defaultChecked />
                </div>

                <div>
                    <label className="dropdown-label" htmlFor="scales">
                        Other Options
                    </label>
                    <input type="checkbox" id="scales" name="scales" defaultChecked />
                </div>
            </ul>
            <div className="form-group fg--search">
                <input className="form-control" type="text" placeholder="Search" />
                <button className="search-icon-btn" onClick={openResults} type="submit">
                    <i className="fa fa-search" />
                </button>
            </div>
        </div>
    );
};

export default SearchBar;
