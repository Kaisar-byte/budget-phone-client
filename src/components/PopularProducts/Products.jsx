
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Product from "./Product";


const Products = () => {
    const popularProducts = [
        {
            path: "https://www.mobiledokan.co/wp-content/uploads/2021/12/Apple-iPhone-15-Pro-Max-Natural-Titanium-500x500.webp",
            title: "Iphone 15 Pro Max",
            resalePrice: "75,000",
            originalPrice: "1,55,000",
            brand: "apple"
        },
        {
            path: "https://www.mobiledokan.co/wp-content/uploads/2022/09/Apple-iPhone-14-Plus-Purple-500x500.jpg",
            title: "Apple iPhone 14 Plus",
            resalePrice: "1,12,000",
            originalPrice: "97,000",
            brand: "apple"
        },
        {
            path: "https://www.mobiledokan.co/wp-content/uploads/2022/09/Apple-iPhone-14-Plus-Purple-500x500.jpg",
            title: "Apple iPhone 15 Pro Max",
            resalePrice: "2,24,999",
            originalPrice: "1,80,000",
            brand: "apple"
        },
        {
            path: "https://images.samsung.com/is/image/samsung/p6pim/bd/2401/gallery/bd-galaxy-s24-s928-sm-s928bztcbkd-thumb-539412885?$172_172_PNG$",
            title: "Galaxy S24 Ultra",
            resalePrice: "2,43,000",
            originalPrice: "1,60,000",
            brand: "Samsung"
        },
        {
            path: "https://www.excelestore.com.bd/public/uploads/all/1wkuhg5oQ7b9KNsj9Ga3JZQ66hljiCCGTr1QEzfN.webp",
            title: "Samsung Galaxy S23 FE (8/128 GB)",
            resalePrice: "1,09,000",
            originalPrice: "82,000",
            brand: "Samsung"
        },
        {
            path: "https://i02.appmifile.com/13_operatorx_operatorx_opx/11/01/2024/25da829b5997ff8aea28af388df3b8df.png?f=webp",
            title: "Redmi Note 13 Pro",
            resalePrice: "36,000",
            originalPrice: "22,000",
            brand: "Xiaomi"
        },
        {
            path: "https://i02.appmifile.com/13_operatorx_operatorx_opx/11/01/2024/25da829b5997ff8aea28af388df3b8df.png?f=webp",
            title: "Xiaomi Redmi 13C",
            resalePrice: "1, 63,000",
            originalPrice: "97,000",
            brand: "Xiaomi"
        },
        {
            path: "https://i02.appmifile.com/13_operatorx_operatorx_opx/11/01/2024/25da829b5997ff8aea28af388df3b8df.png?f=webp",
            title: "Xiaomi 12S Ultra",
            resalePrice: "1,06,000",
            originalPrice: "84,000",
            brand: "Xiaomi"
        },
        {
            path: "https://www.startech.com.bd/image/cache/catalog/mobile/vivo/v30/v30-peacock-green-228x228.webp",
            title: "Vivo V30 5G Smartphone",
            resalePrice: "59,999",
            originalPrice: "34,000",
            brand: "Vivo"
        },
        {
            path: "https://www.startech.com.bd/image/cache/catalog/mobile/vivo/v30/v30-peacock-green-228x228.webp",
            title: "vivo Y02T",
            resalePrice: "19,200",
            originalPrice: "10,000",
            brand: "Vivo"
        },
        {
            path: "https://www.startech.com.bd/image/cache/catalog/mobile/vivo/v30/v30-peacock-green-228x228.webp",
            title: "vivo V29e 5G",
            resalePrice: "36,999",
            originalPrice: "30,000",
            brand: "Vivo"
        },
        {
            path: "https://www.startech.com.bd/image/cache/catalog/mobile/vivo/v30/v30-peacock-green-228x228.webp",
            title: "vivo V30 5G",
            resalePrice: "59,999",
            originalPrice: "42,000",
            brand: "Vivo"
        },
        {
            path: "https://www.mobiledokan.co/wp-content/uploads/2024/03/Motorola-Edge-50-Pro-Luxe-Lavender.webp",
            title: "Motorola Edge 50 Pro",
            resalePrice: "45,000",
            originalPrice: "32,000",
            brand: "Motorola"
        },
        {
            path: "https://www.mobiledokan.co/wp-content/uploads/2023/12/Motorola-Moto-G-Play-2024.webp",
            title: "Motorola Moto G Play",
            resalePrice: "20,000",
            originalPrice: "12,000",
            brand: "Motorola"
        },
        {
            path: "https://www.mobiledokan.co/wp-content/uploads/2024/01/Realme-12-Pro-Plus-Explorer-Red.webp",
            title: "Realme 12 Pro+",
            resalePrice: "45,000",
            originalPrice: "32,000",
            brand: "Realme"
        },
        {
            path: "https://www.mobiledokan.co/wp-content/uploads/2023/08/Realme-GT5-240W-Starry-Oasis-500x500.webp",
            title: "Realme GT5 240W",
            resalePrice: "72,000",
            originalPrice: "65,000",
            brand: "Realme"
        },
        {
            path: "https://www.mobiledokan.co/wp-content/uploads/2023/07/Realme-GT5-Flowing-Silver-500x500.webp",
            title: "Realme GT5",
            resalePrice: "57,000",
            originalPrice: "50,000",
            brand: "Realme"
        },
    ]
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div>
            <div className="flex justify-between items-center mx-14 border-b-2 pb-4 mb-10">
                <h2 className="text-3xl font-bold text-cyan-500">Popular Products</h2>
            </div>
            <div className="mx-10">
                <Slider {...settings}>
                    {
                        popularProducts.map((popularProduct, i) => <div key={i}>
                            <div className="flex flex-wrap justify-center items-center gap-6">

                                <Product popularProduct={popularProduct} />
                            </div>

                        </div>)
                    }
                </Slider>
            </div>

        </div>
    )
}

export default Products;