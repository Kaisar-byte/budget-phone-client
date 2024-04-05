import bdPhone from "../../assets/images/bdPhone.png"
import addBg from "../../assets/images/AddBG.png"
const AdvertiseProduct = () => {
    return (
        <div className="w-[70%] mx-auto">
            <div className="flex justify-between items-stretch my-20 mt-32 gap-16 ">
                <div className="flex flex-col justify-center items-start bg-cover bg-center pl-20 w-[70%] gap-4" style={{ backgroundImage: `url(${addBg})` }}>

                    <span className="text-md text-gray-600 font-semibold">galaxy sale is live now</span>
                    <h2 className="text-3xl text-black font-bold">Galaxy S24 | S24+</h2>
                    <p className="text-sm text-gray-700">Get up to $1,000 in trade-in credit from participating carriers. Terms apply.</p>
                </div>
                <div className="w-[30%]">
                    <img src={bdPhone} className="w-64" alt="" />
                </div>
            </div>
        </div>
    )
}

export default AdvertiseProduct