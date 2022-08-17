import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { NavLink, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './Navbar';

const Signup = () => {
  const history = useNavigate();
  const [inputval,Setinputval]= useState({
    name : "",
    email : "",
    phone : "",
    password : ""

  })
  const[sendData,SetsendData]= useState([]);

  
  // console.log(inputval)
  const getdata =(e)=>{
    const{value, name }= e.target
    Setinputval(()=>{
      return {
        ...inputval, [name]:value
      }
    })
    


  }
  const savedata=(e)=>{
    e.preventDefault();
    // form validation 
    const {name, email, phone, password}= inputval;

    if(name === ""){
     alert("name is requried☹")

    }
    else if(email === ""){
      alert("email is requried☹")
    }
    else if(!/\S+@\S+\.\S+/.test(email))
    {
      alert("email is invalid😌")
    }else if(phone === ""){
      alert("phone number is requried☹")
    }
    
    else if(phone.length<10){
      alert("phone number is not valid😌")

    }
    else if(password===""){
      alert("password is requried☹")

    }
    else if(password.length<6){
      alert("password length should be more than 5🙂")

    }
    else{
      localStorage.setItem("signupdatakey", JSON.stringify([ ...sendData, inputval]));
      toast.dark('Sign up successful', {
        position: "top-center",
        autoClose: 500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setTimeout(()=>{
        history("/signin")

      },1000)

    }

  }
  return (
    <div>
    <Navbar/>
    <div className="container mt-4" id='form_container'>
    <div className="main_container">
    <h1 className='text-center py-3'>Sign Up</h1>
   
    
   

    <Form >
      <Form.Group className="mb-3 mx-4 " controlId="formBasicEmail">
        <Form.Control type="text" onChange={getdata} name ="name" placeholder="Enter Your Name" />
       
        
      </Form.Group>
     
      
      
      
      <Form.Group className="mb-3 mx-4 " controlId="formBasicEmail">
       <Form.Control type="email" onChange={getdata} name ="email" placeholder="Enter Your email" />
       
       
     </Form.Group>
     <Form.Group className="mb-3 mx-4  " controlId="formBasicEmail">
       
     <Form.Control type="number" onChange={getdata} name ="phone" placeholder="Enter Your number" />
       
     </Form.Group>

      <Form.Group className="mb-3 mx-4 " controlId="formBasicPassword">
    
        <Form.Control type="password" onChange={getdata} name ="password" placeholder=" Enter your Password" />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={savedata} className='mx-4 '>
        Sign Up
      </Button>
      <ToastContainer />
    
      <p className='mt-3 mx-4'>Already have an account ? 
      <span> <NavLink to="/signin" className="sin_up">Sign in</NavLink></span></p>
    </Form>

    </div>
    
  ; 
    </div>
      
    </div>
  )
}

export default Signup
