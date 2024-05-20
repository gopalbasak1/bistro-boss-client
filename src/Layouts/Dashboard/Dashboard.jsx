import { FaCalendarAlt, FaHome } from "react-icons/fa";
import { GiHamburgerMenu, GiShoppingCart } from "react-icons/gi";
import { NavLink, Outlet } from "react-router-dom";
import review from '../../assets/reviews.png'
import { TbBrandBooking } from "react-icons/tb";


const Dashboard = () => {
    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-[#d48917]">
                <ul className="menu p-4">

                    <li>
                         <NavLink to='/dashboard/userHome'>
                         <FaHome className="text-xl" />
                        User Home
                    </NavLink></li>

                    <li>
                         <NavLink to='/dashboard/reservation'>
                         <FaCalendarAlt 
                            className="text-xl" />
                        Reservation
                    </NavLink></li>


                    <li>
                         <NavLink to='/dashboard/cart'>
                         <GiShoppingCart className="text-xl" />
                        My Cart
                    </NavLink></li>

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

                    <div className="divider"></div>

                    <li>
                         <NavLink to='/'>
                         <FaHome className="text-xl" />Home
                    </NavLink></li>

                    <li>
                         <NavLink to='/order/salad'>
                         <GiHamburgerMenu  className="text-xl" />Menu
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