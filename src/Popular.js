import axios from 'axios'
import React, { useState }  from 'react'
import { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { Add } from './redux/action/action';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Popular = () => {
    const[srch,setSearch]= useState()
  const[srchuu,setSearchuu]= useState([])
  // console.log(srch)
  useEffect(()=>{
    axios.get(`https://www.omdbapi.com/?s=drama&apikey=cf041b1e`)
    .then((res)=>{
      setSearchuu(res.data.Search)
    })

  },[])
  
  const chngtxt=(e)=>{
    setSearch(e.target.value)
   

  }
  const getmovie=(e)=>{
    e.preventDefault()
    
    axios.get(`https://www.omdbapi.com/?s=${srch}&apikey=cf041b1e`)
    .then((res)=>{
     if(srch.length=="0"){
      alert("Please search somthing😊")

     }
     else if(srch.match(res.data.Search)){
      alert("Movie not found⚠⚠")


     }
     else{
      setSearchuu(res.data.Search)
     }
      
    }) 

  }
  const dispatch = useDispatch();
  const send =(e)=>{
    // console.log(e)
    dispatch(Add(e))
    toast.success('Movie added to Watchlist', {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });


  }
  return (
    <>
 <nav className="menu">
      <ul><li>
      <NavLink  aria-current="page" to="/mainnav">Home</NavLink>
      </li>
      <li>
      <NavLink  aria-current="page" to="/popular">Popular</NavLink>
      </li>
      <li>
      <NavLink  to="/favr">Favourite</NavLink>
      </li>
      </ul>

      <NavLink className="nav-link active" to="/signin"><button className='logout_btn'>Log out</button></NavLink>
    </nav>
    <form class="d-flex search_form " onSubmit={getmovie}>
        <input class="form-control  me-2 text-center " value={srch} onChange={chngtxt} type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-dark " type="submit">Search</button>
      </form> 
<div className="container my-3">
<div className="row">
  {srchuu.map((v)=>{
    return(
      <>
      <div className="col-xs-6 col-sm-6 col-md-4 my-4">
      <div class="card text-center " id='mcard' style={{ objectFit: "contain", border: "none"}}>
  <img src={v.Poster} class="card-img-top "  alt="popular_image"/>
  <div class="card-body">
    <h5 class="card-title">{v.Title}</h5>
    <p class="card-text">{v.Year}</p>
    <NavLink to="#"> <button  class="btn btn-danger w-100" onClick={()=>send(v)}> Watch Later</button></NavLink>
  <ToastContainer/>
  </div>
 </div>
 </div>

      </>
    )
  })
  }
  
 
</div></div>


   
      
    </>
  )
      

  
}

export default Popular
