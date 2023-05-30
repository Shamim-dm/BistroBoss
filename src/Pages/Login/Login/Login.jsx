import React, { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import Swal from "sweetalert2";
import { AuthContext } from "../../../Provider/AuthProviders";
import SocialLogin from "./SocialLogin";


const Login = () => {
 
  const [disabled, setDisabled] = useState(true)
const {signIn} = useContext(AuthContext)
const navigate = useNavigate()
const location = useLocation()
let from = location.state?.from?.pathname || "/";

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password)
    .then((result)=>{
        const loggedUser =  result.user;
        console.log(loggedUser)
        Swal.fire({
            title: 'Login Successfull',
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
          })
          navigate(from, { replace: true });
          
    })
    .catch(error =>{
        console.log(error)
    })
  };

  const captchaValided = e => {
    const user_captcha_value = e.target.value;

        if (validateCaptcha(user_captcha_value)) {
            setDisabled(false)
        } else {
            setDisabled(true)
        
        }
  };

  return (
   

    <>
     <Helmet>
    <title>Bistro Boss | Login</title>
  </Helmet>
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content grid md:grid-cols-2 ">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card  shadow-2xl bg-base-100">
        <div className="card-body">
          <form onSubmit={handleLogin}>
          
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
              </div>

              <div className="form-control">
                <LoadCanvasTemplate />
                <input
                  onBlur={captchaValided}
                  type="text"
                  name="captcha"
                  placeholder="type the captcha"
                  className="input input-bordered"
                />
                
              </div>

              <div className="form-control mt-6">
                <input disabled={disabled}
                  type="submit"
                  value="Login"
                  className="btn btn-primary"
                />
              </div>
            
          </form>
          <p>Don't have an account? <Link to='/signup'>Signup</Link> </p>

          <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
    </div>
    </>
  );
  
};

export default Login;
