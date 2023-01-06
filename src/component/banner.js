import Button from "./button";
import M from "../image/M.png";
export default function Banner() {
  return (
    <div className="container-fluid bg-warning m-0 border-bottom border-dark banner">
      <div className="container-xxl d-flex">
        <div className="d-flex flex-column py-5 w-50">
          <h1 className="m-0 py-3 bannerTitle">Stay curious.</h1>
          <h3 className="m-0 bannerDesc w-75 py-2">
            Discover stories, thinking, and expertise from writers on any topic.
          </h3>
          <div className="py-4">
            <Button text={"Start Reading"} size={"large"} className="fs-5"/>
          </div>
        </div>
        <div className="M">
          <img src={M} alt="M" />
        </div>
      </div>
    </div>
  );
}
