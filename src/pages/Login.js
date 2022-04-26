import "../index.css";
import React ,{useState} from "react";
import LoginForm from "../components/LoginForm";


function Login() {
  
    const adminUser = {

      email:"admin@admin.com",
      password:"admin123"

    }

    

    const[user,setUser] = useState({name:"",email:""});
    const[error,setError] = useState("");

    const Login = details =>{
      console.log(details);

      if(details.email == adminUser.email && details.password == adminUser.password){
        console.log("Logged in");
        setUser({
          name : details.name,
          email : details.email


        });

      }else{
        console.log("Invalid details!");
        setError("Invalid details!");
      }

    }

    const Logout = () =>{
      console.log("Logout");

      setUser({ name: "", email: ""});

    }
  return (
 
    <div className="App">
    <div className="bg2">
      {(user.email != "") ? (
        <div className="Welcome">
          <h2>Welcome, <span>{user.name}</span></h2>
            <button onClick={Logout}>Logout</button>
        </div>
        
      ) : (
        <LoginForm Login={Login} error={error} />     
      )}

<footer>
	<p>
		Created by <i className="fa fa-heart"></i>  
		<a target="_blank" href="https://www.instagram.com/sss_stex/">STEXBEATS </a>,2022
	</p>
</footer>
       </div>
       </div>
      
  );
}

export default Login;
