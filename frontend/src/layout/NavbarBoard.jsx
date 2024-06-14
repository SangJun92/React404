import React from "react";
import { Link } from "react-router-dom";

function NavbarBoard() {
  return (
    <nav className="navbar navbar-expand-md bg-body-tertiary">
      <div className="container-fluid navbar-dark bg-primary">
        <Link to="/" className="navbar-brand text-warning" href="#">
          나만의 게시판
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto mb-2 mt-2 nb-lg-0">
            <li className="nav-item">
              <Link to="/addboard" className="btn btn-outline-light">
                게시글 작성
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default NavbarBoard;
