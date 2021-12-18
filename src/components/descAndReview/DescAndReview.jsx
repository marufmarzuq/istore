import "./DescAndReview.css";
import Badge from "@mui/material/Badge";

const DescAndReview = ({ desc }) => {
    return (
        <section className="single-page-desc">
            <div className="container">
                <div className="desc-review-tab-container">
                    <p>
                        <span className="active">Description</span> |{" "}
                        <Badge badgeContent={1} color="info">
                            <span>Review</span>
                        </Badge>
                    </p>
                </div>
                <p className="desc-review-content">{desc}</p>
            </div>
        </section>
    );
};

export default DescAndReview;
