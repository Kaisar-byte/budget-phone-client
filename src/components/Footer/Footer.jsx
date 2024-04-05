
import { Link, NavLink } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="p-4 bg-gray-700/85 md:p-8 lg:p-10 dark:bg-gray-800">
            <div className="mx-auto max-w-screen-xl text-center">
                <NavLink href="#" className="justify-center items-center text-2xl  bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text font-sans font-bold">
                    Budget-Phone
                </NavLink>


                <p className="my-6 text-gray-500 dark:text-gray-400">A great solution for the buyer and seller whose first and extreme choice to better phone on individual budget.</p>
                <ul className="flex flex-wrap justify-center items-center mb-6 text-gray-900 dark:text-white">
                    <NavLink to="#" className="mr-4 hover:underline md:mr-6 ">Home</NavLink>
                    <NavLink to="#" className="mr-4 hover:underline md:mr-6 ">About</NavLink>
                    <NavLink to="#" className="mr-4 hover:underline md:mr-6 ">Shop</NavLink>
                    <NavLink to="#" className="mr-4 hover:underline md:mr-6 ">Blog</NavLink>
                    <NavLink to="#" className="mr-4 hover:underline md:mr-6 ">Contact</NavLink>

                </ul>
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">©  <Link className="hover:underline">Budget-Phone</Link>. All Rights Reserved.</span>
            </div>
        </footer>
    )
}

export default Footer