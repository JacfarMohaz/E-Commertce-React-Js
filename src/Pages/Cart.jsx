import { useDispatch, useSelector } from "react-redux"
import Header from "../Components/Header"
import { calculateTotalPrice, removeFromCart } from "../redux/reducer/carts"
import { useEffect } from "react"

function Cart() {

    const cartItem = useSelector((state) => state.cart.cartItems)
    const totalPrice = useSelector((state) => state.cart.totalPrice)

    const dispatch = useDispatch()

    const handlRemoveItem = (itemIndex) => {
        dispatch(removeFromCart(itemIndex))
        dispatch(calculateTotalPrice())
    }

    useEffect(() => {
        dispatch(calculateTotalPrice())
    }, [])

    return <div>
        <Header />
        <h1 className="text-3xl font-bold pt-24 text-center">Your Shopping cart</h1>
        <div className="flex justify-center pt-10 mb-20">

            <div>

                {
                    cartItem.length > 0 ?
                        cartItem.map((item, index) => (
                            <div className="flex flex-col sm:flex-row sm:ml-[120px] ml-10 mt-5 border-2 border-gray-800 sm:w-[850px] w-[300px] p-2">
                                <img className="sm:w-56 w-full" src={item.image} />
                                <h1 className="sm:text-2xl text-5xl pl-20 pt-10">{item.name}</h1>
                                <h1 className="sm:text-2xl text-4xl pl-20 pt-10">${item.price}</h1>
                                <div className="sm:ml-32 ml-2 mt-12">
                                    <button onClick={() => handlRemoveItem(index)} className=" bg-red-400 sm:px-3 px-24 text-xl sm:text-sm py-3 sm:py-1">Remove</button>
                                </div>
                            </div>
                        ))
                        :
                        <p>Your cart is Empty</p>
                }

                {
                    cartItem.length > 0 &&

                    <>
                        <div className="sm:ml-28 ml-10">

                        <hr className="sm:w-[1000px] w-[350px] border-1 border-gray-800 mt-10" />

                        <button className="bg-primaryColor px-4 py-2 rounded-lg text-secondaryColor text-xl mt-8">Buy Now</button>
                        <h1 className="sm:text-2xl text-3xl font-bold">${totalPrice}</h1>
                        </div>
                    </>
                }




            </div>

        </div>
    </div>
}

export default Cart