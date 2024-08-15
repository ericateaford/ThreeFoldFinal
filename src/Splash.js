import Logo from "./images/logo.png";
import SearchBarPassword from "./images/Searchbarpassword.png";
import SearchBarUsername from "./images/Searchbarusername.png";


const Splash = () => {
  return (

<div>


<img src={Logo} class="logo mt-4" alt="logo" />

<h1 class="float-center mt-4">Three-Fold</h1>
<h4 class="float-center mt-3 mb-3">Your guide to revolutionize your spiritual journey</h4>
<div class="searchbar col-6 mx-auto">
<img src={SearchBarUsername} class="mb-5" alt="logo" />
<img src={SearchBarPassword} class="logo" alt="logo" /> 
<h6 class="float-center mt-4">Forgot Password</h6>

<button type="button" class="btn btn-dark btn-lg mt-5">Log In</button>
<h6 class="float-center mt-4">Sign Up</h6>
</div>
</div>

);
}
export default Splash;