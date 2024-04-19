import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

import useAuth from "../Hook/useAuth";
import SocialLoginBtn from "./SocialLoginBtn";




const Login = () => {
    const{ singInUser}=useAuth()


    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()
    
      const onSubmit = (data) =>{
        const{email,password} =data


        singInUser(email,password)
        .then(result => {
            console.log(result)
        })
        .catch(error =>{
            console.log(error)
        })
      };

    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
            <div className="text-center ">
            <h1 className="text-5xl font-bold">Login now!</h1>
            </div>
            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)}  className="card-body">
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" name="email" className="input input-bordered" required {...register("email", { required: true })} />
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" name="password" className="input input-bordered" required {...register("password", { required: true })} />
                <label className="label">
                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
                </div>
                <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
                </div>
            </form>
            <SocialLoginBtn></SocialLoginBtn>
            <p className="mx-8">New Here ? please 
                <Link to="/register">
                 <button className="btn btn-link">Register</button>
                </Link> </p>
            </div>
        </div>
        </div>
    );
};

export default Login;