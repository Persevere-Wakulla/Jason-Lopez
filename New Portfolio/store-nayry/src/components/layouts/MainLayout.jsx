import { useState, useEffect, createContext } from "react";
import { NavLink, Outlet } from "react-router-dom";

export const CartContext = createContext([])

export default function MainLayout() {

    const [cart, setCart] = useState([])
    const [mainClass, setMainClass] = useState('')
    // console.log(categories);

    // useEffect(() => {
    //     if (window.innerWidth < 500) {
    //         setMainClass('mobile')
    //     } else {
    //         switch (location.pathname) {
    //             case '/products':
    //                 setMainClass('product-page')
    //                 break;
    //             case '/shoppingCart':
    //                 setMainClass('cart')
    //                 break;
    //             // add any other specific styling you want here!
    //             case '/categories':
    //                 setMainClass('category-page')
    //                 break;
    //             default:
    //                 setMainClass('home')
    //         }
    //         return () => {
    //             setMainClass('')
    //         }
    //     }
    // }, [location.pathname])

    return (
        <>
            <header>
                <img className="head" src="src/assets/Nazyr.png" alt="" />
            </header>
                <nav>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="products">Products</NavLink>
                    <NavLink to='categories'>Categories</NavLink>
                    <NavLink to="shoppingcart">Shopping Cart</NavLink>

                </nav>
            <main>
                <CartContext.Provider value={[cart, setCart]}>
                    <Outlet />
                </CartContext.Provider>
            </main>
        </>

    )
}