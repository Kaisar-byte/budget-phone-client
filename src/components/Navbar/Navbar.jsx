import { NavLink } from "react-router-dom"
import logo from "../../assets/images/logo.png"
import { useContext, useState } from "react"
import { RxCross1, RxHamburgerMenu } from "react-icons/rx";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
    const [open, setOpen] = useState(false)

    const { user } = useContext(AuthContext)
    console.log(user)
    const handleOpen = () => {
        setOpen(!open)

    }
    return (
        <div className="flex flex-row lg:flex-row justify-between md:justify-between lg:justify-between items-start md:items-center lg:items-center py-4 px-2 lg:px-10 shadow-sm opacity-80 sticky top-0 z-10 bg-[#1F2937] ">
            <div className="flex justify-center items-center gap-2 px-2 ">
                <img className="h-10 " src={logo} alt="" />
                <h2 className="text-lg bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text font-sans font-bold">Budget-Phone</h2>
            </div>
            <div className="flex flex-col justify-between items-end lg:items-center gap-4" >
                <div className="active md:hidden lg:hidden">
                    <span>
                        <button onClick={handleOpen}>{open ? <RxCross1 /> : <RxHamburgerMenu />}</button>
                    </span>

                </div>
                <div className="hidden lg:collapse md:collapse">
                    <div className="flex flex-col md:flex-row lg:flex-row justify-between items-center gap-4 ">
                        <nav className="flex flex-col md:flex-row lg:flex-row justify-center items-end lg:items-center gap-2 md:gap-4 lg:gap-4">
                            <NavLink className="hover:text-blue-700 text-white hover:font-bold">Home</NavLink>
                            <NavLink className="hover:text-blue-700 text-white hover:font-bold">About</NavLink>
                            <NavLink className="hover:text-blue-700 text-white hover:font-bold">Shop</NavLink>
                            <NavLink className="hover:text-blue-700 text-white hover:font-bold">Blog</NavLink>
                            <NavLink className="hover:text-blue-700 text-white hover:font-bold">Contact</NavLink>
                        </nav>
                        <NavLink className="bg-green-400/40 hover:bg-green-600 px-4 py-1 rounded-md text-white" to="/login">Login</NavLink>
                    </div>
                </div>

                {open &&
                    <div className="flex flex-col md:flex-row lg:flex-row justify-between items-center gap-4 ">
                        <nav className="flex flex-col md:flex-row lg:flex-row justify-center items-end lg:items-center gap-2 md:gap-4 lg:gap-4">
                            <NavLink className="hover:text-blue-700 hover:border-b hover:border-yellow-600 text-white hover:font-bold">Home</NavLink>
                            <NavLink className="hover:text-blue-700 hover:border-b hover:border-yellow-600 text-white hover:font-bold">About</NavLink>
                            <NavLink className="hover:text-blue-700 hover:border-b hover:border-yellow-600 text-white hover:font-bold">Shop</NavLink>
                            <NavLink className="hover:text-blue-700 hover:border-b hover:border-yellow-600 text-white hover:font-bold">Blog</NavLink>
                            <NavLink className="hover:text-blue-700 hover:border-b hover:border-yellow-600 text-white hover:font-bold">Contact</NavLink>
                        </nav>
                        <NavLink className="bg-green-400/40 hover:bg-green-600 px-4 py-1 rounded-md text-white" to="/login">Login</NavLink>
                    </div>
                }
            </div>
        </div >
    )
}

export default Navbar