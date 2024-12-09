import { useLoaderData } from "react-router-dom"
import { useState, useEffect, useContext } from "react"
import Card from "../Card"
import { CartContext } from "../layouts/MainLayout"

const res = await fetch('https://dummyjson.com/products/categories')
const catList = await res.json()

export default function Category() {

    const data = useLoaderData()

    const [filter, setFilter] = useState(null)
    const [display, setDisplay] = useState([])
    const [cart, setCart] = useContext(CartContext)

    useEffect(() => {
        const changeItems = () => {
            const newArr = data.products.filter(it => it.category === filter)
            setDisplay(newArr)
        }
        if (filter) {
            changeItems()
        }
    }, [filter])

    function addItem(item) {
        setCart([...cart, item])
    }

    return (
        <>
            <div className="cat-btns">
                {catList.map(cat => (
                    <span key={cat.slug} className='category-btn' key={cat.id} onClick={() => setFilter(cat.slug)}>{cat.name}</span>
                ))}
            </div>
            <div className="products">
                {display.map(product => (
                    <Card product={product} key={product.id} func={addItem} />
                ))}
                <h1 className="catChoose">Please make a selection!</h1>
            </div>

        </>
    )
    
   
}