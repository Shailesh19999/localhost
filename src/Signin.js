import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { NavLink, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

const Signin = () => {
  
const history = useNavigate();
    const [inputval,Setinputval]= useState({
        email : "",
        password : ""
    
      })
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
        const getuserdata = localStorage.getItem("signupdatakey")
        // console.log(getuserdata)
        // form validation 
        const {email,password}= inputval;
        if(email === ""){
            alert("email is requried☹")
          }
          else if(!/\S+@\S+\.\S+/.test(email))
          {
            alert("email is invalid😌")
          }else if(password===""){
            alert("password is requried☹")
      
          }
          else if(password.length<5){
            alert("password length should be greater than 5🙂")
      
          }
          else{
            if(getuserdata && getuserdata.length){
                const data =JSON.parse(getuserdata)
                // console.log(data)
                const login = data.filter((val)=>{
                    return val.email === email && val.password === password

                })

                if(login.length===0){
                   
    toast.error('invalid detailes', {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
                }else{
                    
                   
                    toast.dark('Sign in successful', {
                        position: "top-center",
                        autoClose: 500,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        
                      });
                      setTimeout(()=>{
                        history("/mainnav")

                      },1000)
                     
                }
            }
        
          }
      }
  return (
    <div>
     <Navbar/>
    
    <div className="container mt-4" id='form_container'>
    <div className="main_container">
    <h1 className='text-center py-3'>Sign In</h1>
   

    <Form >
    <Form.Group className="mb-3 mx-4 " controlId="formBasicEmail">
       <Form.Control type="email" onChange={getdata} name ="email" placeholder="Enter Your email" />
       
       
     </Form.Group>
   

      <Form.Group className="mb-3 mx-4 " controlId="formBasicPassword">
    
        <Form.Control type="password" onChange={getdata} name ="password" placeholder="Password" />
      </Form.Group>
      <Button variant="primary" onClick={savedata} type="submit" className='mx-4 '>
        Sign In
      </Button>
      <ToastContainer />
      <p className='mt-3 mx-4'>New to here ? <span> <NavLink to="/" className="sin_up">Sign up</NavLink></span></p>
    </Form>

    </div>
    
  ;
    </div>
      
    </div>
  )
}

export default Signin
