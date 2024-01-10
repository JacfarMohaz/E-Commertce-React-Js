import { useState } from "react"
import { useSelector } from "react-redux"
import { Link, NavLink } from "react-router-dom"

function Header() {

    const cartValue = useSelector((state) => state.cart.cartItems)

    const [isOpen, setIsOpen] = useState(false)

    const HandlIsOpen =  () => {
        setIsOpen(true)
    }

    const HandlClose =  () => {
        setIsOpen(false)
    }

    return <div className="bg-primaryColor flex p-5 text-secondaryColor fixed w-full top-0 justify-between">
        <Link to="/"><h1 className="text-xl sm:text-4xl font-bold pt-1">JM9</h1></Link>
        <i onClick={HandlIsOpen} style={{display: isOpen === true ? "none" : ""}} class="fa-solid fa-bars absolute right-2 text-secenderyColor text-4xl sm:hidden"></i>
        <i onClick={HandlClose} style={{display: isOpen === true ? "block" : ""}} class="fa-solid fa-xmark text-4xl absolute right-2 hidden"></i>

        <ul style={{display: isOpen === true ? "block" : " "}} className="sm:flex flex-col sm:flex-row mt-16 sm:mt-0 gap-20 space-y-5 sm:space-y-0 text-4xl hidden">
            <NavLink to="/"><li>Home</li></NavLink>  
            <NavLink to="/About"><li>About</li></NavLink>
            <NavLink to="/Contact"><li>Contact Us</li></NavLink>
        </ul>

        <ol>
            <Link to="/Cart"><li className="text-4xl"> <i class="fa-solid fa-cart-shopping mr-16"><span className="text-secondaryColor text-xl absolute top-2">({cartValue.length})</span></i> </li></Link>
        </ol>
    </div>
}

export default Header