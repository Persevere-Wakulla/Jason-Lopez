import { useState } from "react"
import NavBar from "../NavBar"

export default function Mercury({ planet }) {

    const [content, setContent] = useState('')

    function changeContent(e){
        if (e.target.classList.contains('overview-container')){
            setContent(e.target.innerText)
        }
    }

    const text = content === '02 INTERNAL STRUCTURE' ? planet.structure.content : content === '03 SURFACE GEOLOGY' ? planet.geology.content : planet.overview.content

    
    const imgSrc = content === '03 SURFACE GEOLOGY' ? (
    <div className="relative-container">
        <img className="full" src={planet.images.planet} alt="" />
        <img src={planet.images.geology} className="absolute" alt="" />
    </div>
    ) : content === '02 INTERNAL STRUCTURE' ? (
        <img src={planet.images.internal} alt="" />
        ) : <img src={planet.images.planet} alt="" />



    return (
        <><div className="nav-bar">
            <NavBar />
        </div>
            <div className="flex">
                <div className="img">
                   {imgSrc}
                </div>
                <div className='info'>
                    <h1 className="planets">{planet.name}</h1>
                    <p className="text">{text}
                    </p>

                    <p>Source: <a href="#">{planet.geology.source}</a></p>

                    <div className="btn" onClick={changeContent}>
                        <button className="overview-container">01 OVERVIEW</button>
                        <button className="overview-container">02 INTERNAL STRUCTURE</button>
                        <button className="overview-container">03 SURFACE GEOLOGY</button>
                    </div>

                </div>
            </div>
            <div className="footer">
                <div className="border">
                    <p>ROTATION TIME</p>
                    <p className="num">{planet.rotation }</p>
                </div>
                <div className="border">
                    <p>REVOLUTION TIME</p>
                    <p className="num">{planet.revolution}</p>
                </div>
                <div className="border">
                    <p>RADIUS</p>
                    <p className="num">{planet.radius}</p>
                </div>
                <div className="border">
                    <p>AVERAGE TEMP</p>
                    <p className="num">{planet.temperature}</p>
                </div>
            </div>

        </>
    )
}
