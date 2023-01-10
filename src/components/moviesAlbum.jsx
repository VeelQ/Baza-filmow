import React from "react";
import {Link} from "react-router-dom";

const MoviesAlbum = ( props ) => {

    const { items } = props;

    return (
        
        <div class="album py-5 bg-dark">
             
            <div class="container">
                <div class="row">
                {items.map((item, key) =>
            (
                    <div class="col-md-2" key={key}>
                        <div class="card mb-4 box-shadow bg-dark text-white">
                            <Link to="/details"><img class="card-img-top" src={process.env.PUBLIC_URL + '/alien.jpg'} alt="Card image"></img></Link>
                            <div class="card-body">
                                <Link to="/details"><p class="card-text">{item.text}</p></Link>
                                <div class="d-flex justify-content-between align-items-center">
                                    <small class="text-muted">1h 58min</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
            <div className="d-flex py-4 justify-content-center">
                    <Link to="/add"><button className="btn btn-primary">Add movie</button></Link>
                </div>
        </div>
   )
};
export default MoviesAlbum;