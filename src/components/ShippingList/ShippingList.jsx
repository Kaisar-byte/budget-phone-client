import { FaShippingFast } from "react-icons/fa";
import { GiReturnArrow } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";

const ShippingList = () => {
    const shippings = [
        {
            icon: <FaShippingFast />,
            title: "Shipping Worldwide",
            subTitle: "Free shipping on all US orders or orders above $100"
        },
        {
            icon: <GiReturnArrow />,
            title: "14 Days Return",
            subTitle: "Simply return it within 30 days for an exchange."
        },
        {
            icon: <RiSecurePaymentLine />,
            title: "Security Payment",
            subTitle: "We ensure secure payment with PEV"
        },
    ]
    return (
        <div className="py-16">
            <div className="flex justify-between items-center mx-14 border-b-2 pb-4">
                <h2 className="text-3xl font-bold text-cyan-500">Delivery Service</h2>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-2 py-10">
                {
                    shippings.map((ship, idx) => <div key={idx} className="py-6 px-10">
                        <div className="flex flex-col justify-center items-center gap-2 text-center">
                            <span className="text-3xl md:text-6xl lg:text-6xl hover:text-blue-700">{ship.icon}</span>
                            <h2 className="text-sm md:text-xl lg:text-xl font-semibold text-cyan-600/80">{ship.title}</h2>
                            <p className="text-md text-gray-500">{ship.subTitle}</p>
                        </div>

                    </div>)
                }
            </div>

        </div>
    )
}

export default ShippingList