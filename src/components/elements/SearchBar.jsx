import { useNavigate } from "react-router-dom"


const SearchBar = () => {
    let navigate = useNavigate()
    const openResults = () => {
        navigate("/results")
    }


    return (
        <div className="input-group input-dropdown-sec">
            <button
                className="btn btn-outline-secondary dropdown-toggle resources-btn"
                type="button"
                data-bs-toggle="dropdown"
            >
                Resources
            </button>
            <ul className="dropdown-menu">
                <div>
                    <label className="dropdown-label" htmlFor="scales">
                        Only Domain
                    </label>
                    <input
                        type="checkbox"
                        id="scales"
                        name="scales"
                        defaultChecked
                    />
                </div>


                <div>
                    <label className="dropdown-label" htmlFor="scales">
                        Other Options
                    </label>
                    <input
                        type="checkbox"
                        id="scales"
                        name="scales"
                        defaultChecked
                    />
                </div>
            </ul>
            <div
                style={{ border: "2px solid #52ab84" }}
                className="form-group fg--search"
            >
                <input
                    style={{ border: "none" }}
                    type="text"
                    className="form-control"
                    placeholder="Search"
                />
                <button
                    style={{ padding: "0", marginRight: "5px" }}
                    onClick={openResults}
                    type="submit"
                >
                    <i className="fa fa-search" />
                </button>
            </div>
        </div>
    )
}


export default SearchBar





