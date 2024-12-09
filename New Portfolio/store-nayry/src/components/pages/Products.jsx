import { useLoaderData } from "react-router-dom"
import { useContext } from "react"
import { CartContext } from "../layouts/MainLayout"
import Card from "../Card"

export default function Products() {

    const data = useLoaderData()
    const [cart, setCart] = useContext(CartContext)


    const addItem = (item) => {
        console.log(cart);
        setCart([...cart, item])
    }
    console.log(data); // {}

    return (
        <div className="products">

            {data.products.map(product => {
           
                return (
                    <Card product={product} func={addItem}/>
                )
            })}
        </div>
    )
}
export const productsLoader = async () => {
    const res = await fetch('https://dummyjson.com/products?limit=0')

    if (!res.ok) {
        throw Error("Could not fetch the products")
    }
    return await res.json()
}