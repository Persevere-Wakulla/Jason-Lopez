import { useEffect } from "react";

export default function HomePage({backdrop}) {
    
    console.log(backdrop);
    useEffect(()=>{
        const body = document.body
        body.style.background = `${backdrop}`
    },[])

    return (
        <>
        <div className="home-gallery">
      
            <div className="desc-container">
                <img className="open-image" src="src/assets/pexels-kaique-rocha-331990.jpg" alt="Oil" />
                <div className="desc-img">Add a description of the image or whatever you want here</div>
            </div>
        </div>
            {/* <footer style={{height: '50vh'}}>
            </footer> */}
        </>
    )
}