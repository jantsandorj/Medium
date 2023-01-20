export default function Card({ TrendingCards }) {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://medium-api-psi.vercel.app/api/news")
      .then((res) => res.json())
      .then((dt) => {
        console.log(dt.result);
        setData(dt.result);
      })
      .catch((err) => console.log(err))}
  return (
      <div className="newsCard row col-12">
        {TrendingCards.map((e) => {
          return (
            <div className="d-flex Card  col-12 col-md-5 col-xxl-3">
              <div className="ID">{e.id}</div>
              <div className="news">
                <div className="d-flex gap-2">
                  <img src={e.img} alt={e.text1} className="icon" />
                  <div className="userName">{e.text1}</div>
                </div>
                <div>
                  <p className="newsTitle text-wrap">{e.text2}</p>
                  <p className="newsDesc text-wrap">{e.text3}</p>
                </div>
                <div className="d-flex info">
                  <p className="newsDate">{e.date}</p>
                  <p className="newsDate">{e.read}</p>
                  <img className="trendPic" src={e.icon} alt="trend" />
                </div>
              </div>
              <div className="displayPic">
                <img src={e.img1} alt={e.text1} />
              </div>
            </div>
          );
        })}
      </div>
    )
  }