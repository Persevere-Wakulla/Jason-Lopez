import { useEffect, useState } from "react";
import { useOutletContext } from "react-router"

export default function Tenents() {

    const tenet = useOutletContext()
    console.dir(tenet);

    useEffect(() => {
        let tenDiv = document.querySelector('.tenets-container');
        tenDiv.innerHTML = tenet;
    })
    return (
        <div className="tenets-container">
        </div>
    )
}
