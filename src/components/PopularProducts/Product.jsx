
const Product = ({ popularProduct }) => {
  const { path, title, resalePrice, originalPrice, brand } = popularProduct
  return (
    <div className="flex justify-center items-center gap-0 w-[320px] border rounded-md bg-cyan-50   py-4">
      <figure><img src={path} className="w-44 h-36" alt="phone" /></figure>
      <div className="flex flex-col justify-center items-start">
        <div className="flex justify-center items-start w-44">
          <h2 className="text-lg font-bold text-blue-400 ">{title}</h2>
        </div>
        <p className="text-sm font-semibold text-red-500 line-through">Original Price: {originalPrice}</p>
        <p className="text-sm font-semibold text-sky-500 mb-2 ">Resale Price: {resalePrice}</p>
        <button className="bg-cyan-400 text-white  px-3 rounded-sm">Book Now</button>
      </div>
    </div>
  )
}

export default Product