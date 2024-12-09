import { useContext } from "react"
import { CartContext } from './MainLayout'
import { Outlet} from "react-router-dom"

export default function ShoppingCart({background}) {

    const [cart, setCart] = useContext(CartContext)

    console.log(cart);

    return (
        <>
        <div className="col-25">
                <div className="container">
                    <div className="cart-items">

                        <h4>Cart
                            <span className="price" style={{ color: "black" }}>
                                <i className="fa fa-shopping-cart"></i>
                                <b>{cart.length} Items</b>
                            </span>
                        </h4>
                      
                        {cart.map((product) => (

                            <p><a href="#"> {product.title} </a> <span className="price"> {product.price}</span></p>
                        ))}

                        <hr></hr>
                        {/* reduce to find total price */}
                        <p className="cart-prices">Total
                            <span className="price" style={{ color: "black" }}>
                                <b>{cart.reduce((total, current) => total + current.price, 0).toFixed(2)}</b>
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        <Outlet />
        </>
    )
} 