import React, {useEffect, useState} from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { isExpired, decodeToken } from "react-jwt";
const axios = require('axios');

const Details = () => {

    let { id } = useParams();
    const [item, setItem] = useState([]);
    const isNotLogged = isExpired(localStorage.getItem('token'));
    const user = decodeToken(localStorage.getItem('token'));

    const nav = useNavigate();
    const fetchFun = () => {
        if(!id){
            nav("/")
            return
        }
        axios({method:'get',url:`https://at.usermd.net/api/movies/${id}`})
        .then((result) => {
            setItem(result.data)
        },
        (error) => {
            nav("/")
            console.error(error)
        })
    }
    
    useEffect(()=>{
        fetchFun()
    },[])


    const handleDelete = (event) => {
        event.preventDefault()

        axios({
            method: 'delete',
            url: `https://at.usermd.net/api/movie/${id}`,

        }).then((response) => {
            window.location.assign("/")
        }).catch((error) => {
            console.log(error)
        })
    }

   return <div className="flexCenter">
    <div className="album py-5 bg-dark mb-5">
        <div className="row justify-content-center">
            <div className="col-md-2">
                <div className="card mb-4 box-shadow bg-dark text-white">
                    <img className="card-img-top" src={item.image} alt={item.title}></img>
                    <div className="card-body">
                        <p className="card-text">{item.title}</p>
                        <div className="d-flex justify-content-between align-items-center">
                            <small className="text-muted">1h 58min</small>
                        </div>
                        
                        <div style={{paddingTop: 10}}>
                        {(!isNotLogged && user.isAdmin === true) && <div className="d-flex justify-content-center">
                    <button className="btn btn-danger" onClick={handleDelete}>Delete</button>
                </div>}
                        </div>
                        
                    </div>
                </div>
                
            </div>
            <div className="col-md-8 text-white p-4 p-lg-0">
  <p>{item.content}</p>

  <div className="ratio ratio-16x9">
    <iframe className='embed-responsive-item' src="https://www.youtube.com/embed/jQ5lPt9edzQ" title="Alien Trailer"></iframe>
  </div>
</div>
            
        </div>
    </div>
   </div>;
};

export default Details;