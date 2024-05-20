import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { GiShoppingCart } from "react-icons/gi";
import useCart from "../../../hooks/useCart";

const Navbar = () => {
    const { user, logOut } = useAuth();
    const [cart] = useCart()

    const handleLogOut = () => {
        logOut()
            .then(() => {})
            .catch(error => console.log(error));
    };

    const navOptions = (
        <>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/menu">Our Menu</Link>
            </li>
            <li>
                <Link to="/order/salad">Order Food</Link>
            </li>
            <li>
                <Link to="/secret">Secret</Link>
            </li>

            <li className="">
                <Link to="/dashboard/cart">
                <button className="flex items-center gap-2 mr-4">
                <GiShoppingCart className="text-xl" />
                <div className="badge badge-secondary">+{cart.length}</div>
                </button>
                </Link>
            </li>

        </>
    );

    return (
        <div className="navbar w-full mx-auto fixed z-10 bg-opacity-30 bg-black text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                    >
                        {navOptions}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Bistro Boss</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">{navOptions}</ul>
            </div>
            <div className="navbar-end">
                {user ? (
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src={user.photoURL} alt="User Avatar" />
                            </div>
                        </label>
                        <ul
                            tabIndex={0}
                            className="mt-3 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
                        >
                            <li>
                                <span className="block px-4 py-2 text-sm text-gray-700">
                                    {user.displayName}
                                </span>
                            </li>
                            <li>
                                <button
                                    onClick={handleLogOut}
                                    className="block w-full text-left px-4 py-2 text-sm text-gray-700"
                                >
                                    Log Out
                                </button>
                            </li>
                        </ul>
                    </div>
                ) : (
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                )}
            </div>
        </div>
    );
};

export default Navbar;
