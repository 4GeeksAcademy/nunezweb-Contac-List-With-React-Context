import React from "react";
import { useNavigate, Link } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="navbar navbar-dark bg-dark m-0">
      <div className="container-fluid d-flex justify-content-center">
        <div className="d-flex">
          <button
            onClick={() => navigate("/")}
            className="btn btn-link text-decoration-none text-white fw-bold mx-2"
          >
            Home
          </button>
          <Link to="/add">
            <button className="btn btn-primary mx-2">Add new contact</button>
          </Link>
        </div>
      </div>
    </nav>
  );
};
