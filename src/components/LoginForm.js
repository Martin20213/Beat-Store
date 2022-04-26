import React,{useState} from "react";
import "../index.css";
import { Link ,useNavigate} from "react-router-dom";

import {auth} from '../firebaseApp'

function LoginForm() {

  
    const navigate = useNavigate();
    const [email, setUserEmail]=useState('')
    const [password,setUserPassword]=useState('')

    const signIn = e =>{
        e.preventDefault();
        
        //firebase login

        auth
            .signInWithEmailAndPassword(email,password)
            .then(auth=>{
                navigate("/home")
            })
            .catch(error => alert(error.message));

    }
    
    return(

       <form>
           <div className="form-inner">
                <h2>
                    Login
                </h2>

                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" id="email" value ={email} onChange={(e)=>setUserEmail(e.target.value)} />
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" id="password" value ={password} onChange={(e)=>setUserPassword(e.target.value)} />
                </div>
                <div>
                 <input type="submit" value="Login" onClick={signIn}/>

                </div>
                <div>
                    <p>You don't have an account yet? <Link to ="/signup"><button className="button">click here</button></Link></p>
                </div>


           </div>

       </form>
    )
}

export default LoginForm;