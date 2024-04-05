import AdvertiseProduct from "../../components/AdvertiseProduct/AdvertiseProduct"
import Categories from "../../components/Categories/Categories"
import Products from "../../components/PopularProducts/Products"
import ShippingList from "../../components/ShippingList/ShippingList"
import Slider from "../../components/Slider/Slider"


const Home = () => {
    return (
        <div>
            <Slider />
            <Categories />
            <Products />
            <AdvertiseProduct />
            <ShippingList />
        </div>
    )
}

export default Home