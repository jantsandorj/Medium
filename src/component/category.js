import { useEffect, useState } from "react";
export default function Categor({ data,FilterCat }) {
  //   const [data, setData] = useState([]);
  //   useEffect(() => {
  //     fetch("https://medium-api-psi.vercel.app/api/news")
  //       .then((res) => res.json())
  //       .then((dt) => {
  //         setData(dt.result);
  //       })
  //       .catch((err) => console.log(err));
  //   });

  const categ2 = [...data];
  const categ3 = [];
  categ2.map((e) => {
    if (e.category != 0) {
      categ3.push(e.category);
    }
  });
  const categ4 = categ3.filter((e, i, a) => a.indexOf(e) === i);

  return (
    <div
      className="d-flex gap-3
        flex-wrap py-4"
    >
      <button className="border p-2 catDiv" onClick={FilterCat}>
          All
          </button>
      {categ4.map((l) => {
        return (
          <button className="border p-2 catDiv" onClick={(e) => FilterCat}>
            {l}
          </button>
        );
      })}
    </div>
  );
}
