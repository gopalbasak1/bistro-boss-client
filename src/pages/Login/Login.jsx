import './Login.css'
import loginImg from '../../assets/others/authentication2.png'
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha} from 'react-simple-captcha';
import { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';



const Login = () => {

    const [disabled, setDisabled] = useState(true);
    const {signIn} = useAuth();

    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";

    useEffect(()=>{
        loadCaptchaEnginge(6);
    },[]);

    const handleLogin = event =>{

        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
        .then(res => {
            const user = res.user;
            console.log(user);
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "User Login successful",
              showConfirmButton: false,
              timer: 1500
            })
            navigate(from, {replace: true});
        })
    }

    const handleValidateCaptcha = (e) =>{
        const user_captcha_value = e.target.value;
        
        if(validateCaptcha(user_captcha_value)){
            setDisabled(false)
        }
        else{
            setDisabled(true);
        }
    }




    return (

          <>

              <Helmet>
                <title>Bistro Boss | Login</title>
            </Helmet>
          
          <div className='featured-item min-h-screen md:w-[750px] lg:w-full mx-auto flex items-center'>
        <div className="flex-col md:flex md:flex-row justify-center gap-20 p-10 items-center shadow-custom mx-auto md:w-[700px] lg:w-[1400px] h-[700px] ">
          <div className="mx-auto w-1/2">
            <div className='login'>
                <img src={loginImg} alt="" />
            </div>
          </div>
          <div className="card shrink-0 w-full max-w-sm">
            <h2 className='text-center text-4xl font-bold'>Login</h2>
            <form 
            onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email"
                name='email'
                placeholder="email" className="input input-bordered" required />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password"
                name='password'
                placeholder="password" className="input input-bordered" required />
              </div>

              <div className="form-control">
                <label className="label">
                <LoadCanvasTemplate />
                </label>
                <input type="text"
                onBlur={handleValidateCaptcha}
                name='captcha'
                placeholder="Type the text above captcha" className="input input-bordered" required />
              </div>


              <div className="form-control mt-6">
                <button disabled={disabled}  className="btn bg-[#b48641b3] hover:bg-[#d8c29e] text-xl font-bold text-white">Login</button>
              </div>
            </form>
            <div className='flex gap-2 items-center text-[#D1A054]'>
                <p className=' text-xl font-bold'>New here? </p>
                <Link className='text-xl font-bold' to='/signup'>
                Create a New Account
                </Link>
            </div>
          </div>
        </div>
      </div>
          
          </>
        

    );
};

export default Login;