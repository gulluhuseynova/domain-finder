import AdobeDetail from "../../elements/AdobeDetail";
import MiniDetailAdobe from "../../elements/MiniDetailAdobe";
import DomainRegistrar from "../../elements/DomainRegistrar";
import TagCards from "../../elements/TagCards";
import DetailTabs from "../../elements/DetailTabs";
const Detail = () => {
    return (
        <div className="container">
            <div className="row first-row-position">
                <div className="col-8 col-position">
                    <div className="row">
                        <AdobeDetail />
                    </div>
                    <div className="row">
                        <DomainRegistrar />
                    </div>
                    <div className="row">
                        <DetailTabs />
                    </div>
                </div>
                <div className="col-4 col-position">
                    <TagCards />
                </div>
            </div>
            <h2 className="similar-content">Similar Content</h2>
            <div className="row first-row-position">
                <div className="col-4 col-position">
                    <MiniDetailAdobe />
                </div>
                <div className="col-4 col-position">
                    <MiniDetailAdobe />
                </div>
                <div className="col-4 col-position">
                    <MiniDetailAdobe />
                </div>
            </div>
        </div>
    );
};

export default Detail;
