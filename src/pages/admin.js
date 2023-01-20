import "../style/admin.css";
import { Link, Outlet } from "react-router-dom";

export const Admin = () => {
  return (
    <div>
      <header className="bg-warning row">
        <nav className="navbar navbar-expand-md col-12">
          <div className="row w-100">
            <ul className="navbar-nav d-flex justify-content-between col-12">
              <li className="nav-item ps-5">
                <Link className="nav-link" to="/admin">
                  Company name
                </Link>
              </li>
              <li className="nav-item">
                <input type="text" className="form-control bg-light srchInput" placeholder="Search ..." />
              </li>
              <li className="nav-item pe-5">
                <Link className="nav-link" to="/">
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <div className="container-fluid">
        <main className="row">
          <section className="col-2 border ">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  className="nav-link font1 d-flex gap-2"
                  to="/admin/dashboard"
                >
                  <i class="bi bi-rocket"></i>
                  Dashboard
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link font1 d-flex gap-2" to="/admin/news">
                  <i class="bi bi-newspaper"></i>
                  News
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link font1 d-flex gap-2" to="/admin/user">
                  <i class="bi bi-person-rolodex"></i>
                  Users
                </Link>
              </li>
              <a>Hahha</a>
            </ul>
          </section>
          <Outlet />
        </main>
      </div>
    </div>
  );
};
