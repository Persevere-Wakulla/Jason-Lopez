import { useState, useEffect } from "react"
import { Outlet } from "react-router-dom"

export default function TenetLayout() {

    const [tenet, setTenet] = useState('')
    const [page, setPage] = useState(0)

    let loading
    useEffect(() => {
        loading = true
        const tenetLoader = async () => {
            const res = await fetch(`http://localhost:5555/Home/Tenets`)
            const tenet = await res.json()
            if (!tenet.data) {
            }
            loading = false
            setTenet(tenet.data[page].script)
        }
        tenetLoader()
    })
    return (
        <>
        <div className="scroll">
            <Outlet context={tenet} />
        </div>
            <div className="btn-group">
                <button onClick={() => setPage(p => p - 1)} className="btn btns flex flex-start">⟨</button>
                <button onClick={() => setPage(p => p + 1)} className="btn btns flex flex-start">⟩</button>
            </div>
        </>
    )
}