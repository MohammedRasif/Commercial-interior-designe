import { Link } from 'react-router-dom';
import { useForm  } from 'react-hook-form';
import useAuth from '../Hook/useAuth';

const Register = () => {

    
    const {createUser} = useAuth()
    // console.log(createUser)
    
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()
    
      const onSubmit = (data) =>{
        const{email,password} =data
        createUser(email,password)
        .then(result => {
            console.log(result)
        })
      }
    

    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
            <div className="text-center ">
            <h1 className="text-5xl font-bold">Register Now!</h1>
            </div>
            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)}  className="card-body">
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Name</span>
                </label>
                <input type="Text" placeholder="Your name" name="name" className="input input-bordered" required {...register("FullName", { required: true })} />
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Photo Url</span>
                </label>
                <input type="text" placeholder="Photo" name="email" className="input input-bordered" required {...register("Photo", { required: true })} />
                </div>
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
                <button className="btn btn-primary">Register</button>
                </div>
            </form>
            <p className="mx-8">Already have Account ? please 
                <Link to="/login">
                 <button className="btn btn-link">Login</button>
                </Link> </p>
            </div>
        </div>
        </div>
    );
};

export default Register;