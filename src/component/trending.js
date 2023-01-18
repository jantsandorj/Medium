import { HiTrendingUp } from "react-icons/hi";
import "../style/trending.css";
import Card from "./card";
export default function Trending({ trendingAar }) {
  return (
    <div className="border-bottom border-secondary container-fluid Trend">
      <div className=" container-xxl py-5">
        <div className="d-flex gap-3">
          <HiTrendingUp />
          <h5 className="trend">TRENDING ON MEDIUM</h5>
        </div>
        <div>
          <div className="trendCard">
            <Card TrendingCards={trendingAar} />
          </div>
        </div>
      </div>
    </div>
  );
}
