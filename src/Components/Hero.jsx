function Hero() {
    return <div className="h-[400px] sm:px-20 px-10  sm:flex justify-between">

        <div className="mt-20 sm:w-[580px] w-[350px]">
            <h1 className="text-5xl font-bold">Best Place For Shopping In Your Area</h1>
            <p className="mt-8 text-2xl">We got you everything that you need. visit us any whare and any time</p>
            <button className="bg-primaryColor mt-5 px-10 py-3 text-3xl text-secondaryColor rounded-lg">Explore More</button>
        </div>

        <img className="rounded-xl mt-16 " src="https://img.freepik.com/free-photo/add-cart-buy-now-online-commerce-graphic-concept_53876-124865.jpg?size=626&ext=jpg" alt="" />
    </div>
}

export default Hero