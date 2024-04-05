import samsung from "../../assets/images/category/samsung.avif"
import iphone from "../../assets/images/category/iphone.png"
import motorola from "../../assets/images/category/motorola.jpeg"
import realme from "../../assets/images/category/realme.png"
import vivo from "../../assets/images/category/vivo.jpeg"
import xiaomi from "../../assets/images/category/xiaomi.png"
import Category from "./Category"
import { FaLongArrowAltRight } from "react-icons/fa"
import { Link } from "react-router-dom"
const Categories = () => {
    const brands = [
        {
            title: "Samsung",
            title2: "Samsung",
            image: samsung
        },
        {
            title: "Iphone",
            title2: "Iphone",
            image: iphone
        },
        {
            title: "Motorola",
            title2: "Motorola",
            image: motorola
        },
        {
            title: "Realme",
            title2: "Realme",
            image: realme
        },
        {
            title: "vivo",
            title2: "Vivo",
            image: vivo
        },
        {
            title: "Xiaomi",
            title2: "Xiaomi",
            image: xiaomi
        },
    ]
    return (
        <div className="py-6 ">
            <div className="flex justify-between items-center mx-14  border-b-2 pb-4">
                <h2 className="text-3xl font-bold text-cyan-500">Branding Categories</h2>
                <div className="flex justify-center items-center gap-2">
                    <button>Show More</button>
                    <span><FaLongArrowAltRight />
                    </span>
                </div>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-4 py-14">
                {
                    brands.map((brand, i) => <Link to="/category/:id" key={i}><Category brand={brand} /></Link>)
                }
            </div>
        </div >
    )
}

export default Categories