import { HiTrendingUp } from "react-icons/hi";
import "../style/trending.css";
import Card from "./card";
import { useEffect, useState } from "react";
export default function Trending() {
  const [data, setData] = useState([])
  useEffect(() => {
    fetch("https://medium-api-psi.vercel.app/api/news")
      .then((res) => res.json())
      .then((dt) => {
        setData(dt.result);
        
      })
      .catch((err) => console.log(err));
  })
  return (
    <div className="border-bottom border-secondary container-fluid Trend">
      <div className=" container-xxl py-5">
        <div className="d-flex gap-3">
          <HiTrendingUp />
          <h5 className="trend">TRENDING ON MEDIUM</h5>
        </div>
        <div>
          <div className="trendCard">
            <Card TrendingCards={data.filter((e) => e.isTrending).slice(0,6)} />
          </div>
        </div>
      </div>
    </div>
  );
}
