import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
   return <div className="flexCenter"><div className="jumbotron text-light">
       <h1 className="display-4">404 - Not found!</h1>
       <p className="lead">To prawdopodobnie nie jest strona której szukasz. <br />Chyba że dokładnie tego szukałeś.</p>
       
       <Link className="btn btn-primary btn-lg flexCenter mb-5" to="/home" role="button">Home</Link>
   </div></div>;
};

export default NotFound;