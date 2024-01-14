import data from "./Data";
import Product from "./Product";

function ProductList() {
    return <div className="grid sm:grid-cols-[300px_300px_300px] justify-evenly sm:mt-10 mt-52 mb-28">
        {
            data.map( (items) => {
                return <Product product={items} />
            })
        }
    </div>
}

export default ProductList