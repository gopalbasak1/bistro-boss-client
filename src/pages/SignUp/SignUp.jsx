import useAuth from "../../hooks/useAuth";
import loginImg from '../../assets/others/authentication2.png'
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { FcGoogle } from "react-icons/fc";
import SocialLogin from "../../components/SocialLogin/SocialLogin";


const SignUp = () => {
  const axiosPublic = useAxiosPublic();
    const {createUser, updateUserProfile} = useAuth();
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm();

      const onSubmit= (data) =>{

        createUser(data.email, data.password)
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser);
            updateUserProfile(data.name, data.photoURL)
            .then(()=>{
              // create user entry in the database
              const userInfo = {
                name: data.name,
                email: data.email,
                password: data.password
              }
              axiosPublic.post('/users',userInfo)
              .then(res=>{
                if(res.data.insertedId){
               console.log('user added to the database');
              reset();
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your account has been create",
                showConfirmButton: false,
                timer: 1500
              });
              navigate('/')

                }
              })

              
            })
            .catch(error => console.log(error))
        })
      };

    // const handleSignUp= event =>{

    //     event.preventDefault();
    //     const form = event.target;
    //     const email = form.email.value;
    //     const password = form.password.value;
    //     console.log(email, password);
    //     createUser(email, password)
    //     .then(res=>{
    //         const user = res.user;
    //         console.log(user);
    //     })
    // }



    return (
       <>

            <Helmet>
                <title>Bistro Boss | Sign Up</title>
            </Helmet>

           <div className='featured-item min-h-screen md:w-[750px] lg:w-full mx-auto flex items-center'>
        <div className="flex-col md:flex md:flex-row-reverse justify-center gap-20 p-10 items-center shadow-custom mx-auto md:w-[700px] lg:w-[1400px] h-[700px] ">
          <div className="mx-auto w-2/4">
            <div className='login'>
                <img src={loginImg} alt="" />
            </div>
          </div>
          <div className="card w-2/5 ">
            <h2 className='text-center text-4xl font-bold'>Sign Up</h2>
            <form 
            onSubmit={handleSubmit(onSubmit)} className="card-body">

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" 
                {...register("name", { required: true })} 
                name='name'
                placeholder="Your name" className="input input-bordered"/>
                {errors.name && <span className="text-red-600 font-medium">Name is required</span>}
              </div>

              <div className="form-control">
                <label className="label">
                    <span className="label-text">Photo URL</span>
                </label>
                <input type="text"  {...register("photoURL", { required: true })} placeholder="Photo URL" className="input input-bordered" />
                {errors.photoURL && <span className="text-red-600">Photo URL is required</span>}
            </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email"
                {...register("email", {required: true})}
                name='email'
                placeholder="email" className="input input-bordered" />
                {errors.email && <span className="text-red-600 font-medium">Email is required</span>}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password"
                {...register("password", {required: true,
                   minLength: 8,
                    maxLength: 20,
                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{8}/
                  })}
                name='password'
                placeholder="password" className="input input-bordered" />
                 {errors.password?.type === "required" && (
                <p className="text-red-600 font-medium">Password is required</p>
                    )}

                 {errors.password?.type === "minLength" && (
                <p className="text-red-600 font-medium">Password must be 8 characters</p>
                    )}

                 {errors.password?.type === "maxLength" && (
                <p className="text-red-600 font-medium">Password must be 20 characters</p>
                    )}

                 {errors.password?.type === "pattern" && (
                <p className="text-red-600 font-medium">Password must be one upper case one lower case, one number and one special character</p>
                    )}
              </div>

              <div className="form-control mt-6">
                <input className="btn bg-[#b48641b3] hover:bg-[#d8c29e] text-xl font-bold text-white" type="submit" value="Sign Up" />
              </div>
            </form>
            <div className='flex gap-2 items-center text-[#D1A054]'>
                <p className=' text-xl font-bold'>Already registered?  </p>
                <Link className='text-xl font-bold' to='/login'>
                Go to log in
                </Link>
            </div>
            <div className="w-full mx-auto">
                    <SocialLogin/>
            </div>
          </div>
        </div>
      </div>
       </>
    );
};

export default SignUp;