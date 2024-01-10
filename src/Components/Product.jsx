import { useDispatch } from "react-redux"
import { addToCart } from "../redux/reducer/carts"

function Product({product}) {

    const dispatch = useDispatch()

    const handleAddToCart = () => {
        dispatch(addToCart(product))
    }

    return <div className="w-[300px] border-2 border-gray-500 p-2 rounded mt-20">
        <img src= {product.image} />
        <div className="flex justify-between mt-3 text-4xl font-semibold">
            <h1>{product.name}</h1>
            <h1>${product.price}</h1>
        </div>
        <button onClick={handleAddToCart} className="bg-primaryColor px-24 text-secondaryColor font-bold rounded-lg mt-5 py-2">Add to cart</button>
    </div>
}

export default Product