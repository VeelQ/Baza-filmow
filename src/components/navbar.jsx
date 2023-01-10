import React from "react";
import {Link} from "react-router-dom";
// import { isExpired, decodeToken  } from "react-jwt";

const Navbar = () => {


   return (

    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <Link to="/" class="navbar-brand">MovieGalaxy</Link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse pt-4 pt-lg-0" id="navbarSupportedContent">
        <form class="d-flex flex-grow-2" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button class="btn btn-outline-primary me-2" type="submit">Search</button>
        </form>
        <Link to="/login"><button type="button" className="btn btn-primary me-2 mt-2 mt-lg-0">Log In</button></Link>
        <Link to="/signup"><button type="button" className="btn btn-outline-primary me-2 mt-2 mt-lg-0">Sign Up</button></Link>
      </div>
    </div>
  </nav>


    )
};

export default Navbar;