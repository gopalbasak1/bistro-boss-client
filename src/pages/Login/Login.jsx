import './Login.css'
import loginImg from '../../assets/others/authentication2.png'

const Login = () => {

    const handleLogin = event =>{

        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
    }





    return (
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
              <div className="form-control mt-6">
                <button className="btn bg-[#b48641b3] hover:bg-[#d8c29e] text-xl font-bold text-white">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Login;