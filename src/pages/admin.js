import { Link, Outlet, Route, Routes } from "react-router-dom";

export const Admin = () => {
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
              <Link className="nav-link" to="/">
                Logout
              </Link>
            </li>
          </ul>
        </nav>
      </header>
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
          <Outlet />
        </section>
      </main>
    </div>
  );
};
