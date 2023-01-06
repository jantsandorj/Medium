import { HiTrendingUp } from "react-icons/hi";
function Card({ TrendingCards }) {
  return (
    <div>
      {TrendingCards.map((e) => {
        return (
          <div>
            <div>{e.id}</div>
            <div>
              <div>
                <img src={e.img} alt={e.text1} className="icon" />
                <div>{e.text1}</div>
              </div>
              <div>
                <h3>{e.text2}</h3>
              </div>
              <div>
                <p>{e.date} : </p>
                <p>{e.read}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default function Trending({ trendingAar }) {
  return (
    <div className="border-bottom border-secondary container-xxl py-5">
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
  );
}
