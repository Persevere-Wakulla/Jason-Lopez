import { useLoaderData, useParams} from "react-router-dom"
import { useContext } from "react";
import { CartContext } from "./MainLayout";

export default function ProductLayout() {

   const { id } = useParams()
   const SingleData = useLoaderData()
   console.log(SingleData);
   const [cart, setCart] = useContext(CartContext)
   
   const addItem = (item) => {
      setCart([...cart, item])
   }

   return <div className="singlepic-container">
      <div className="img-pics">
      {SingleData.images.map((imStr) => <img className="single-pic" src={imStr} />)}

      </div>
      <div className="info">
         <p className="product-title">{SingleData.title}</p>
         <p className="p">Descrption: {SingleData.description}</p>
         <p className="p">Ratings: {SingleData.rating}</p>
         <p className="p">Returns: {SingleData.returnPolicy}</p>
         <button className="single-add" onClick={() => addItem(SingleData)}>Add to cart</button>
         <p className="price">Price: {SingleData.price}</p>
      </div>

   </div>
}


export const SingleProductLoader = async ({ params }) => {
   const { id } = params
   const res = await fetch('https://dummyjson.com/products/' + id)
   return res.json()
}