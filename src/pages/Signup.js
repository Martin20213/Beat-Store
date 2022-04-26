import "../index.css";
import React,{useState} from "react";
import { Link, useNavigate} from "react-router-dom";

import {auth} from '../firebaseApp';





function Signup(){

    const navigate = useNavigate();

    const [email,setUserEmail] = useState('');
    const [password,setUserPassword] = useState('');

    const register = e =>{
        e.preventDefault()

        //firebase register.
        auth
            .createUserWithEmailAndPassword(email,password)
            .then((auth) =>{
                console.log("auth cucc: ",auth);
                if(auth){
                    navigate('/home');
                }
            })
            .catch((error) =>alert(error.message));
    }

    return(

        <div className="App">
    <div className="bg2">


       <form>
           <div className="form-inner">
                <h2>
                    Sign up
                </h2>

              <div className="error"></div>

            
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input value={email}  id="email"  onChange={e => setUserEmail(e.target.value)} type="email"></input>
                    
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input value={password} id="password" onChange={e => setUserPassword(e.target.value)} type="password"/>
                   
                </div>
                <div>
                 <input type="submit" value="Sign up" onClick={register}/>

                </div>
                <div>
                    <p>You already have an account? <Link to ="/login"><button className="button">click here</button></Link></p>
                </div>


           </div>
           

       </form>

       <footer>
	<p>
		Created by <i className="fa fa-heart"></i>  
		<a target="_blank" rel="noreferrer" href="https://www.instagram.com/sss_stex/">STEXBEATS </a>,2022
	</p>
</footer>


       </div>
       </div>
    )
}

export default Signup;