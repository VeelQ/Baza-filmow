import React from "react";
import { Link } from "react-router-dom";

const Details = () => {
   return <div className="flexCenter">
    <div className="album py-5 bg-dark mb-5">
        <div className="row justify-content-center">
            <div className="col-md-2">
                <div className="card mb-4 box-shadow bg-dark text-white">
                    <img className="card-img-top" src={process.env.PUBLIC_URL + '/alien.jpg'} alt="Alien"></img>
                    <div className="card-body">
                        <p className="card-text">Alien</p>
                        <div className="d-flex justify-content-between align-items-center">
                            <small className="text-muted">1h 58min</small>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-8 text-white p-4 p-lg-0"><p>The crew of a spacecraft, Nostromo, intercept a distress signal from a planet and set out to investigate it. However, to their horror, they are attacked by an alien which later invades their ship.</p>

                <div className='row'><p>Genere: {<Link to="/tags/sci-fi"><span className="badge bg-primary">Sci-fi</span></Link>}  {<Link to="/tags/horror"><span className="badge bg-primary">Horror</span></Link>}</p></div>
                <div className='row'><p>Release date: {<span className="badge bg-primary">May 25, 1979</span>}</p></div>
                <div className="ratio ratio-16x9">
                    <iframe className='embed-responsive-item' src="https://www.youtube.com/embed/jQ5lPt9edzQ" title="Alien Trailer" ></iframe>
                </div>
            </div>
            
        </div>
    </div>
   </div>;
};

export default Details;