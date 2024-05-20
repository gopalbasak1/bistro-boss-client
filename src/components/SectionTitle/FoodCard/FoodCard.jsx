import useAuth from "../../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useCart from "../../../hooks/useCart";


const FoodCard = ({item}) => {

      const {image, price, recipe, name, _id} = item || {};
      const {user} = useAuth();
      const navigate = useNavigate();
      const location = useLocation();
      const axiosSecure = useAxiosSecure();
      const [, refetch] = useCart()




      const handleAddToCart = () => {
        if(user && user.email){
          //TODO: send cart item to the database
          const cartItem = {
            menuId: _id,
            email: user.email,
            name,
            image,
            price
          }
          axiosSecure.post('/carts', cartItem)
          .then(res => {
            if(res.data.insertedId){
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${name} added to your cart`,
                showConfirmButton: false,
                timer: 1500
              });
              //refetch cart to update the cart items count
              refetch()
            }
          })
        }
        else{
          Swal.fire({
            title: "You are not Logged In?",
            text: "Please login to add to the cart",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, login!"
          }).then((result) => {
            if (result.isConfirmed) {
              //TODO: send cart item to the login page
              navigate('/login', {state: {from: location}})
            }
          });
        }
      };

    return (

    <div className="card w-96 bg-[#f3f3f3] shadow-xl">
  <figure> <img src={image} alt={name} />
  </figure>
  <p className="absolute right-0 bg-slate-900 mr-4 mt-4 px-3 py-2 text-white">${price}</p>
  <div className="card-body text-center space-y-5">
    <h2 className="text-2xl font-semibold text-center">{name}</h2>
    <p>{recipe}</p>
    <div className="card-actions justify-center">
      <button
      onClick={handleAddToCart}
      className="btn btn-outline border-0 text-[#BB8506] hover:text-[#BB8506] border-b-4 text-xl uppercase bg-[#e8e8e8]">Add to Cart</button>
    </div>
  </div>
</div>

    );

};

export default FoodCard;