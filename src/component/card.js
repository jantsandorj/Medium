import { useEffect, useState } from "react";
export default function Card({ TrendingCards }) {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://medium-api-psi.vercel.app/api/news")
      .then((res) => res.json())
      .then((dt) => {
        console.log(dt.result);
        setData(dt.result);
      })
      .catch((err) => console.log(err))})
  return (
      <div className="newsCard row col-12">
        {TrendingCards.map((e,i) => {
          return (
            <div className="d-flex Card col-12 col-md-5 col-xxl-4">
              <div className="ID">0{i+1}</div>
              <div className="news">
                <div className="d-flex gap-2">
                  <img src={e.img} alt={e.body} className="icon" />
                  <div className="userName">{e.body}</div>
                </div>
                <div>
                  <p className="newsTitle w-100">{e.title}</p>
                  <p className="newsDesc">{e.body}</p>
                </div>
                <div className="d-flex info">
                  <p className="newsDate">{e.date}</p>
                  <p className="newsDate">{e.read}</p>
                  <img className="trendPic" src={e.img} alt="trend" />
                </div>
              </div>
              <div className="displayPic">
                <img src={e.img} alt={e.body} />
              </div>
            </div>
          );
        })}
      </div>
    );
      }