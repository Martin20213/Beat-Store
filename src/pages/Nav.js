import { Link } from "react-router-dom";
import "../App.css";
import logo from '../stex2.png';
import LogoutIcon from '@mui/icons-material/Logout';
import { useStateValue } from "../StateProvider";
import { auth } from "../firebaseApp";

function Nav() {

  const [{user}, dispatch] = useStateValue();

  const handleAuthentication = () =>{
    if(user){
      auth.signOut();
    
    }
  }

  const navStyle = {
    color: "black",
  };

  return (

    

    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    
        <div id="keppad">
        <Link style={navStyle} to="/">
            <img src={logo} className="navbar-brand" alt="stex logo"></img>
        </Link>

        </div>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">

      <div>

    <script src="nav.js" id="replace_with_navbar"></script>

      <ul className="navbar-nav mr-auto navbari">

        <Link style={navStyle} to="/home">
          <li className="nav-item active">
            <div id="buttoneffect" className="nav-link"> <span>Home</span></div>
            
          </li>
        </Link>


        <Link style={navStyle} to="/beats">
          <li className="nav-item ">
            <div id="buttoneffect" className="nav-link"> <span>Beats</span></div>
          </li>
        </Link>

        <Link style={navStyle} to="/custom">
          <li className="nav-item ">
            <div id="buttoneffect" className="nav-link"><span>Custom</span></div>
          </li>
        </Link>


        <Link style={navStyle} to="/services">
          <li className="nav-item ">
            <div id="buttoneffect" className="nav-link"> <span>Services</span></div>
          </li>
        </Link>

    

        <Link style={navStyle} to="/contact">
          <li className="nav-item ">
            <div id="buttoneffect" className="nav-link"><span>Contact</span></div>
          </li>
        </Link>

        
        </ul>

        </div>

        <div className="container">


       
      
      

        <Link style={navStyle} to="/signup">
          <li className="nav-item jobbdiv">
            <div id="buttoneffect2" className="nav-link"><span>Sign Up</span></div>
          </li>

        </Link>
        
       

          
        <Link style={navStyle} to="/login">
          <li className="nav-item jobbdiv">
            <div id="buttoneffect2" className="nav-link"  onClick={handleAuthentication}> <span>{user!=null ?'Sign Out' : 'Sign In'}</span></div>
          </li>
        </Link>

        </div>
        
        </div>

       
      
      

      

      <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossOrigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-Piv4xVNRyMGpqkS2by6br4gNJ7DXjqk09RmUpJ8jgGtD7zP9yug3goQfGII0yAns" crossOrigin="anonymous"></script>

      
    </nav>


  );
}

export default Nav;
