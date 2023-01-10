import Card from "./card";
import "../style/news.css"
function Categor({}) {
  const categ2 = [
    "Programming",
    "Data Science",
    "Technology",
    "Self Improvement",
    "Writing",
    "Relationships",
    "Machine Learning",
    "Productivity",
    "Politics",
  ];
  return (
    <div className="d-flex gap-3
    flex-wrap py-4">
      {categ2.map((l) => {
        return <div className="border p-2 catDiv">{l}</div>;
      })}
    </div>
  );
}
function Footer() {
    const categ1 = [
      "Help",
      "Status",
      "Writers",
      "Blog",
      "Careers",
      "Privacy",
      "Terms",
      "About",
      "Text to Speech",
    ];
    return (
      <div className="d-flex gap-3 flex-wrap footSec">
        {categ1.map((l) => {
          return <p className="footer">{l}</p>;
        })}
      </div>
    );
  }
export default function News({ TrendingAar }) {
  return (
    <div className="container-sm container-xxl py-5 NEWS justify-content-between px-0 mx-auto row flex-column-reverse flex-md-row">
      <div id="newsSection" className="col-12 col-md-8 col-xl-8 px-0 py-3">
        <Card TrendingCards={TrendingAar} />
      </div>
      <div className="catSection col-12 col-md-4 col-xl-3 px-0 container-fluid py-3 container">
        <div className="border-bottom border-secondary cat">
          <p className="discover">DISCOVER MORE OF WHAT MATTERS TO YOU</p>
          <Categor/>
        </div>
        <div className="footerSec py-3 d-none d-md-block">
            <Footer/>
        </div>
      </div>
    </div>
  );
}
