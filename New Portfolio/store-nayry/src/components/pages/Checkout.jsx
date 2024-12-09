import { useLoaderData } from "react-router-dom"
import { useContext } from "react"
import { CartContext } from "../layouts/MainLayout"
import Card from "../Card"

export default function Checkout() {
    const data = useLoaderData()
    const [cart, setCart] = useContext(CartContext)

    const addItem = (item) => {
        console.log(cart);
        setCart([...cart, item])
    }
    console.log(data); 
    return (
        <div>
        <div>
            <h1>Thank you for you order!</h1>
      <h2>Please allow 7 to 10 business days for order to arrive...</h2>
        </div>
         <footer style={{height: '50vh'}}>
         
     </footer>
        </div>
    )
}