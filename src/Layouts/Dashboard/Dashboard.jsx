import { FaBook, FaCalendarAlt, FaHome, FaList } from "react-icons/fa";
import { GiHamburgerMenu, GiShoppingCart } from "react-icons/gi";
import { NavLink, Outlet } from "react-router-dom";
import review from '../../assets/reviews.png'
import { TbBrandBooking } from "react-icons/tb";
import useCart from "../../hooks/useCart";
import { MdContactMail } from "react-icons/md";
import { LuUtensilsCrossed } from "react-icons/lu";
import { HiOutlineUserGroup } from "react-icons/hi";
import useAdmin from "../../hooks/useAdmin";


const Dashboard = () => {

    const [cart] = useCart();
    
    //TODO: get isAdmin value from the database
    const [isAdmin ]= useAdmin();

    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-[#d48917]">
                <ul className="menu p-4">

                   {
                     isAdmin ? <>

<li>
                     <NavLink to='/dashboard/adminHome'>
                     <FaHome className="text-xl" />
                    Admin Home
                </NavLink></li>

                <li>
                     <NavLink to='/dashboard/addItems'>
                     <LuUtensilsCrossed className="text-xl" />
                     Add Items
                </NavLink></li>


                <li>
                     <NavLink to='/dashboard/manageItems'>
                     <FaList className="text-xl" />
                   Manage Items
                </NavLink></li>

                <li className="">
                     <NavLink to='/dashboard/bookings'>
                     <FaBook className="text-xl"/>
                    Manage Bookings
                </NavLink></li>

                <li className="">
                     <NavLink to='/dashboard/users'>
                     <HiOutlineUserGroup className="text-xl" />
                    All Users
                </NavLink></li>

                     </>
                     : 
                    
                     <>
                <li>
                     <NavLink to='/dashboard/userHome'>
                     <FaHome className="text-xl" />
                    User Home
                </NavLink>
                </li>

                <li>
                     <NavLink to='/dashboard/reservation'>
                     <FaCalendarAlt 
                        className="text-xl" />
                    Reservation
                </NavLink></li>


                <li>
                     <NavLink to='/dashboard/cart'>
                     <GiShoppingCart className="text-xl" />
                    My Cart ({cart.length})
                </NavLink>
                </li>

                <li className="">
                     <NavLink to='/dashboard/review'>
                     <img className="w-6 h-8" src={review} alt="" />
                    Add a Review
                </NavLink></li>

                <li className="">
                     <NavLink to='/dashboard/booking'>
                     <TbBrandBooking className="text-xl" />
                    My Bookings
                </NavLink></li>
                     </>

                   }    


                    <div className="divider"></div>

                    {/* Shared navlink */}
                    <li>
                         <NavLink to='/'>
                         <FaHome className="text-xl" />Home
                    </NavLink></li>

                    <li>
                         <NavLink to='/order/salad'>
                         <GiHamburgerMenu  className="text-xl" />Menu
                    </NavLink></li>

                    <li>
                         <NavLink to='/order/contact'>
                         <MdContactMail className="text-xl" />
                         Contact
                    </NavLink></li>


                </ul>
            </div>

            <div className="flex-1 p-8">
                <Outlet/>
            </div>

        </div>
    );
};

export default Dashboard;