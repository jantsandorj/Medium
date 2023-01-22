import Card from "./card";
import "../style/news.css";
import { useEffect, useState } from "react";
import Footer from "./footer";
import Categor from "./category";

export default function News() {
  const [data, setData] = useState([]);
  const [filtered, setFiltered] = useState([]);
  useEffect(() => {
    fetch("https://medium-api-psi.vercel.app/api/news")
      .then((res) => res.json())
      .then((data) => {
        setFiltered(data.result);
      })
      .catch((err) => console.log(err));
  })
  useEffect(() => {
    fetch("https://medium-api-psi.vercel.app/api/news")
      .then((res) => res.json())
      .then((dt) => {
        setData(dt.result);
      })
      .catch((err) => console.log(err));
  })
  
  const FilterCat = (event) => {
    if (event.target.innerHTML != 0) {
     const filter = data.filter((val) => val.category == event.target.innerHTML) 
      setFiltered(filter)
    } else {
      setFiltered(data)
    } 
  }
    return (
      <div className="container-xxl py-5 NEWS justify-content-between px-0 mx-auto row flex-column-reverse flex-md-row">
        <div id="newsSection" className="col-12 col-md-8 col-xl-8 px-0 py-3">
          <Card TrendingCards={filtered} />
        </div>
        <div className="catSection col-12 col-md-4 col-xl-3 px-1 container-fluid py-3 container">
          <div className="border-bottom border-secondary cat">
            <p className="discover">DISCOVER MORE OF WHAT MATTERS TO YOU</p>
            <Categor data={data} FilterCat={FilterCat} />
          </div>
          <div className="footerSec py-3 d-none d-md-block">
            <Footer />
          </div>
        </div>
      </div>
    )
}
