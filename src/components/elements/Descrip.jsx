import Image from "../../assets/img/Image";

const Description = () => {
    return (
        <div className="container text-center main-girl-section">
            <div className="row home-pa">
                <div className="col-12 col-md-8" style={{alignSelf:"center"}}>
                    <h3 className="row text-left first-text-left">
                        Use Domain Finder to find <br /> unique domains!
                    </h3>
                    <div className="row text-left">
                        Millions of people are searching for companies, domains, meta tags, company <br /> names and etc., on Domain finder. Try
                        today! 1 000 000 data for your search.
                    </div>
                    <div className="row girl-section-arrows">
                        <div className="col ">
                            <img src={Image.first} />
                        </div>
                        <div className="col ">Type to search</div>

                        <div className="col ">
                            <img src={Image.arrow} />
                        </div>

                        <div className="col ">
                            <img src={Image.second} />
                        </div>
                        <div className="col ">Find domains</div>

                        <div className="col ">
                            <img src={Image.arrow}></img>
                        </div>

                        <div className="col ">
                            <img src={Image.third} />
                        </div>
                        <div className="col ">Filter them</div>
                    </div>
                </div>
                <div className="col-6 col-md-4 ">
                    <img className="main-girl" src={Image.mainimg}></img>
                </div>
            </div>
        </div>
    );
};
export default Description;
