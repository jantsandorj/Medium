import { useEffect, useState } from "react";
import { Link, Outlet, Route, Routes } from "react-router-dom";
import { Barchart } from "../component/barchart";

export const Admin = () => {
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(false);
  const [err, setErr] = useState("");
  useEffect(() => {
    fetch("http://192.168.1.50:4040/news")
      .then((res) => res.json())
      .then((dt) => {
        console.log(dt.news);
        setData(dt.news);
      })
      .catch((err) => console.log(err));
  });

  return (
    <div>
      <header className="bg-warning">
        <nav className="navbar navbar-expand-lg">
          <ul className="navbar-nav d-flex justify-content-between w-100">
            <li className="nav-item">
              <Link className="nav-link" to="/admin">
                Company name
              </Link>
            </li>
            <li>
              <input type="text" className="form-control bg-light" />
            </li>
            <li>
              <Link className="nav-link" to="/">
                Logout
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <div className="container-fluid">
        <main className="row">
          <section className="col-3">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/dashboard">
                  Dashboard
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/news">
                  News
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/user">
                  Users
                </Link>
              </li>
            </ul>
          </section>
          <section className="col-9">
            <div className="row">
              <div className="col-md-4">
                <div className="card">
                  <div className="card-title">Users</div>
                  <div className="flex justify-content-between align-items-center">
                    <i
                      className="bi bi-people"
                      style={{ fontSize: "40px" }}
                    ></i>
                    <h3>4500</h3>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card">
                  <div className="card-title">News</div>
                  <div className="flex justify-content-between align-items-center">
                    <i
                      className="bi bi-newspaper"
                      style={{ fontSize: "40px" }}
                    ></i>
                    <h3>9000</h3>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card">
                  <div className="card-title">Category</div>
                  <div className="flex justify-content-between align-items-center">
                    <i
                      className="bi bi-people"
                      style={{ fontSize: "40px" }}
                    ></i>
                    <h3>280</h3>
                  </div>
                </div>
              </div>
            </div>
            <Barchart />
            <div className="row">
              <div className="table-responsive">
                <table className="table table-strip">
                  <thead>
                    <th>No</th>
                    <th>Title</th>
                    <th>Category</th>
                    <th>Category</th>
                    <th>isTrending</th>
                  </thead>
                  <tbody>
                    {data.map(
                      ({ _id, title, body, isTrending, category }, index) => {
                        return (
                          <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{title}</td>
                            <td>{category}</td>
                            <td>
                              {isTrending ? (
                                <button className="btn btn-success disabled">
                                  Yes
                                </button>
                              ) : (
                                <button className="btn btn-danger disabled">
                                  No
                                </button>
                              )}
                            </td>
                          </tr>
                        );
                      }
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};
