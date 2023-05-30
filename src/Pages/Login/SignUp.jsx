import React, { useContext } from "react";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProviders";
import Swal from 'sweetalert2'

const SignUp = () => {
    const {createUser, updateUserProfile} = useContext(AuthContext)
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
   const navigate = useNavigate()
    const onSubmit = data => { 
        createUser(data.email, data.password)
        .then(result =>{
            const loggedUser = result.user;     
            console.log(loggedUser)     
            updateUserProfile(data.name, data.photoURL)
            .then(()=>{
              const saveUser = {name: data.name, email: data.email}
              fetch('http://localhost:5000/users', {
                method: 'POST',
                headers:{
                  'content-type': 'application/json'
                },
                body: JSON.stringify(saveUser)
              })
              .then(res => res.json())
              .then(data => {
                if(data.insertedId){
                  reset()
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Create account succesfully',
                    showConfirmButton: false,
                    timer: 1500
                  })
                  navigate('/')

                }
              })
                
                  

            })
            .then(error=> {
                console.log(error)})
            


        })
        .catch(error=>{
            console.log(error)
        })
    };
 

 
 
    return (
    <>
      <Helmet>
    <title>Bistro Boss | signup</title>
  </Helmet>
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">SignUp!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
         
         
          <div  className="card-body">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                {...register("name",{ required: true })}
                placeholder="name"
                className="input input-bordered"
              />
              {errors.name && <p className="text-red-500">name required</p> }
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                {...register("photoURL",{ required: true })}
                placeholder="Photo URL"
                className="input input-bordered"
              />
              {errors.name && <p className="text-red-500">Photo url required</p> }
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                {...register("email", { required: true })}
                placeholder="email"
                className="input input-bordered"
              />
                {errors.email && <p className="text-red-500">email requared</p> }
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                {...register("password", { required: true, 
                    minLength: 6, 
                    maxLength: 20,
                    pattern: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-])/
                 })}
                placeholder="password"
                className="input input-bordered"
              />
              {
                errors.password?.type === 'required' && 
                <p className="text-red-500">Passwors required</p>
              }
               {
                errors.password?.type === 'minLength' && 
                <p className="text-red-500">Passwors must be 6 characters</p>
              }
               {
                errors.password?.type === 'maxLength' && 
                <p className="text-red-500">Passwors must be less than 20 characters</p>
              }
              {
                errors.password?.type === 'pattern' && 
                <p className="text-red-500">Passwors must be one uppercase one lowercase one spicial characters</p>
              }
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              {/* <button className="btn btn-primary">signup</button> */}
              <input type="submit" value='signup'  className="btn btn-primary"/>
            </div>
            
          </form>
          <p>already have account? <Link to ='/login'>Login</Link> </p>
          </div>
              
        </div>
      </div>
    </div></>
  );
};

export default SignUp;
