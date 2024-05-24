import { FcGoogle } from "react-icons/fc";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const SocialLogin = () => {

    const {googleSignIn} = useAuth();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();


    const handleGoogleSignIn = () =>{
        googleSignIn()
        .then(res => {
            console.log(res.user);
            const userInfo = {
                email: res.user?.email,
                name: res.user?.displayName
            }
            axiosPublic.post('/users', userInfo)
            .then(res =>{
                console.log(res.data);
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Sign In Successful",
                    showConfirmButton: false,
                    timer: 1500
                  });
                navigate('/')
            })
        })
        .catch(err => {
            console.log(err);
        })
    }

    return (
        <div>
            <div className="divider divider-info mt-10">
            <button
            onClick={handleGoogleSignIn}
            className="btn ">
              <FcGoogle className="text-4xl" />
              </button>
            </div>

        </div>
    );
};

export default SocialLogin;