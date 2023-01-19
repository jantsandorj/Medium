import Button from "./button";
import M from "../image/M.png";

export default function Banner({ color1 }) {
  return (
    <div className="container-fluid bg-warning border-bottom border-dark banner">
      <div className="container-xxl">
        <div className="row">
          <div className="d-flex flex-column py-5 col-sm-12 col-xxl-6">
            <h1 className="m-0 py-3 bannerTitle col-12">Stay curious.</h1>
            <h3 className="m-0 bannerDesc col-12 col-md-12 py-2">
              Discover stories, thinking, and expertise from writers on any
              topic.
            </h3>
            <div className="py-4">
              <Button
                text={"Start Reading"}
                size={"large"}
                className="fs-5"
                color1={color1} />
            </div>
          </div>
          <div className="M d-none d-xxl-block col-xxl-6">
            <img src={M} alt="M" />
          </div>
        </div>
      </div>
    </div>
  );
}
