import { useState } from "react"
import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa6";
import { Link } from "react-router-dom";


const Register = () => {
    const [isChecked, setIsChecked] = useState(false)

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked)
    }



    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <div className="w-full h-screen bg-gradient-to-t from-sky-500/50 to-blue-800">
            <div className="flex justify-center items-center h-screen">
                <form onSubmit={handleSubmit}>

                    <div className=" p-4 rounded-lg bg-pink-300 bg-gradient-to-br from-cyan-500 to-slate-700 shadow-md">
                        <div className="flex flex-col justify-center items-center  space-y-3">
                            <h2 className="text-2xl font-bold bg-gradient-to-t from-gray-800 to-red-500 inline-block bg-clip-text text-transparent my-4">Register</h2>
                            <input type="text" className="h-10 w-64 text-center bg-blue-600  text-white focus:bg-green-900 rounded-sm" name="email" placeholder="Your email address" id="" />
                            <input type="text" className="h-10 w-64 text-center bg-blue-600  text-white focus:bg-green-900 " name="password" placeholder="Your Password" id="" />
                            <div className="flex justify-center items-center gap-20 relative">
                                <label className='relative inline-flex cursor-pointer select-none items-center'>
                                    <input
                                        type='checkbox'
                                        checked={isChecked}
                                        onChange={handleCheckboxChange}
                                        className='sr-only'
                                    />
                                    <span className='label flex items-center text-lg font-medium text-black'>
                                        Seller
                                    </span>
                                    <span
                                        className={`slider mx-4 flex h-8 w-[60px] items-center rounded-full p-1 duration-200 ${isChecked ? 'bg-sky-300' : 'bg-orange-500'
                                            }`}
                                    >
                                        <span
                                            className={`dot h-6 w-6 rounded-full bg-white duration-200 ${isChecked ? 'translate-x-[28px]' : ''
                                                }`}
                                        ></span>
                                    </span>
                                    <span className='label flex items-center text-lg font-medium text-black'>
                                        Buyer
                                    </span>
                                </label>
                            </div>
                            <button className="bg-green-600 hover:bg-green-700 hover:border px-5 py-1 rounded-sm text-white">Register</button>
                        </div>
                        <h2 className="text-xs text-right pr-4 py-4">Already have an account. Please <Link to="/login" className="font-bold">login</Link></h2>

                        <div className="divider">Or register using </div>
                        <div className="flex justify-center items-center gap-4">
                            <FaFacebookF className="hover:text-blue-900 hover:text-xl" />
                            <FaGoogle className="hover:text-blue-900 hover:text-xl" />
                            <FaGithub className="hover:text-blue-900 hover:text-xl" />
                        </div>
                    </div>

                </form>
            </div>

        </div>
    )
}

export default Register