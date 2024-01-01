import { useState } from "react"

function Header() {

    const [isOpen, setIsOpen] = useState(false)

    const HandlIsOpen =  () => {
        setIsOpen(true)
    }

    const HandlClose =  () => {
        setIsOpen(false)
    }

    return <div className="bg-primaryColor flex p-5 text-secondaryColor justify-between">
        <h1 className="text-xl sm:text-4xl font-bold">E-Commerce</h1>
        <i onClick={HandlIsOpen} style={{display: isOpen === true ? "none" : ""}} class="fa-solid fa-bars absolute right-2 text-secenderyColor text-4xl sm:hidden"></i>
        <i onClick={HandlClose} style={{display: isOpen === true ? "block" : ""}} class="fa-solid fa-xmark text-4xl absolute right-2 hidden"></i>

        <ul style={{display: isOpen === true ? "block" : " "}} className="sm:flex flex-col sm:flex-row mt-16 sm:mt-0 gap-20 space-y-5 sm:space-y-0 text-4xl hidden">
            <li>Home</li>
            <li>About</li>
            <li>Contact Us</li>
        </ul>

        <ol>
            <li className="text-4xl"> <i class="fa-solid fa-cart-shopping mr-10"></i> </li>
        </ol>
    </div>
}

export default Header