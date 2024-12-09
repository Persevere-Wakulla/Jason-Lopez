import { Link } from "react-router-dom"

export default function Card({ product, func }) {

    const phones = product.category === 'smartphones' || product.id === 6 ? 'height' : 'width'
    return (
    
        <div className="card">
            <Link to={`/products/${product.id.toString()}`}>
                <div className="img-container">
                    <img className={phones} src={product.images[0]} />
                </div>
                  
<div class="tooltip">View More
  <span class="tooltiptext">Click Me</span>
</div>
                <h2 className="cat-title">{product.title}</h2>
            </Link>
            <h1 className="price">$ {product.price}</h1>
            <button className="category-add" onClick={() => func(product)}>Add to cart</button>
        </div >
    )
}