import AwesomeSlider from "react-awesome-slider"
import slider1 from '../../assets/images/sliderImages/slider1.avif'
import slider2 from '../../assets/images/sliderImages/slider2.avif'
import slider3 from '../../assets/images/sliderImages/slider3.avif'
import slider4 from '../../assets/images/sliderImages/slider4.avif'
import 'react-awesome-slider/dist/styles.css';
import Navbar from "../Navbar/Navbar"

const Slider = () => {
    const images = [
        {
            path: slider1,
            title: "Branded Phone at Low cost",
            title2: "Our sellers are providing used top branded phone"
        },
        {
            path: slider2,
            title: "Looking Full Fresh",
            title2: "Your eyes will blur to choose our sellers collection"
        },
        {
            path: slider3,
            title: "Exchange Your Phone",
            title2: "Sell/exchange your phone to our site and get benefitted"
        },
        {
            path: slider4,
            title: "Package Offer at every week",
            title2: "We are providing premium exchange offers for both seller and buyer"
        },
    ]
    return (
        <section>
            <Navbar />
            <div className="bg-[#FAF1ED] h-full w-full mb-32">
                <AwesomeSlider className="relative">
                    {
                        images.map((img, idx) => <div style={{ backgroundImage: `url(${img.path})` }} key={idx} className="flex justify-center items-center w-[100%]">
                            <div className="flex flex-col justify-center items-end w-[100%]">
                                <div className="flex flex-col justify-center items-start gap-0 md:gap-6 lg:gap-8 bg-slate-700/85 w-[80%] md:w-[60%] lg:w-[70%] h-[90%] md:h-[70%] lg:h-[50%] absolute rounded-l-xl pl-10">
                                    <h2 className="text-lg md:text-4xl lg:text-6xl white font-bold bg-gradient-to-r  from-red-400 to-blue-400 inline-block text-transparent bg-clip-text py-4">{img.title}</h2>
                                    <p className="text-xs md:text-xl lg:text-2xl text-white
                                    ">{img.title2}</p>
                                    <button className="bg-amber-500 px-6 py-1 rounded-sm text-white mt-4">Shop</button>
                                </div>
                            </div>
                        </div>)
                    }
                </AwesomeSlider >
            </div>
        </section>
    )
}

export default Slider