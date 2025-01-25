import React, { useState } from 'react'
import axios from 'axios'

const Register = () => {
    const [Input ,setInput]=useState({username:"",email:"",password:"",confirmPassword:""})

    const changeHandle =(e)=>{
        setInput({...Input,[e.target.name]:e.target.value})
        
  }  
  const submitForm =async(e)=>{
      e.preventDefault()
      try{
        const response = await axios.post('api/users/register',{
            username:Input.username,
            email:Input.email,
            password:Input.password
    
          })
          setInput({username:"",email:"",password:"",confirmPassword:""})  
          alert("submit successfuly!")
          console.log(Input)
      }
      catch(err){
        console.log(err)
      }
  }


  return (
    <>
        <form onSubmit={submitForm} >
        <table class="mx-auto my-4 border rounded-4" style={{height:'300px' , width:'400px'}}>
            <tr class='bg-primary text-center fs-2 mx-2 fw-bold'><td colSpan={2}>Register</td></tr>
            <tr>
                <td><label htmlFor='username'>username:</label></td> 
                <td><input type="text" name="username" id="uname" value={Input.username} onChange={changeHandle}/></td>
            </tr>
            <tr>
                <td><label htmlFor='email'>email:</label></td> 
                <td><input type="text" name="email" id="emails" value={Input.email} onChange={changeHandle}/></td>
            </tr>
            <tr>
                <td><label htmlFor='password'>password:</label></td> 
                <td><input type="text" name="password" id="password" value={Input.password} onChange={changeHandle}/></td>
            </tr>
            <tr>
                <td><label htmlFor='confirmPassword'>confirmPassword:</label></td> 
                <td><input type="text" name="confirmPassword" id="confirmPassword" value={Input.confirmPassword} onChange={changeHandle}/></td>
            </tr>
            <tr>
                <td></td>
                <td><input type="submit" value="register"/></td>
            </tr>
            </table>
        </form>
    </>
  )
}

export default Register
