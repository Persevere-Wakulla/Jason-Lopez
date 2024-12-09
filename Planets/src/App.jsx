import { Route, Routes } from 'react-router'
import { useEffect, useState } from 'react'

import Mercury from './components/Planets/Mercury'
import Earth from './components/Planets/Earth'
import Jupiter from './components/Planets/Jupiter'
import Mars from './components/Planets/Mars'
import Neptune from './components/Planets/Neptune'
import Saturn from './components/Planets/Saturn'
import Uranus from './components/Planets/Uranus'
import Venus from './components/Planets/Venus'


export default function App() {
  const [data, setData] = useState([])
  // Create a useEffect


  useEffect(() => {
    async function fetchData() {

      const res = await fetch("./data.json")
      const data = await res.json()
      return setData(data)
    }
    fetchData()
  }, [])
  console.log(data)


  let plant = data.find((plan) => { return plan.name == "Earth" })
  console.log(plant)

  return (
    // how can I check the length of data?
    data.length > 0 && (

      <div>
        <Routes>
          <Route path='/' element={<Earth planet={data.find((plan) => { return plan.name === "Earth" })} />} />
          <Route path='/mercury' element={<Mercury planet={data.find((plan) => { return plan.name === "Mercury" })} />} />
          <Route path='/jupiter' element={<Jupiter planet={data.find((plan) => { return plan.name === "Jupiter" })} />} />
          <Route path='/mars' element={<Mars planet={data.find((plan) => { return plan.name === "Mars" })} />} />
          <Route path='/neptune' element={<Neptune planet={data.find((plan) => { return plan.name === "Neptune" })} />} />
          <Route path='/saturn' element={<Saturn planet={data.find((plan) => { return plan.name === "Saturn" })} />} />
          <Route path='/uranus' element={<Uranus planet={data.find((plan) => { return plan.name === "Uranus" })} />} />
          <Route path='/venus' element={<Venus planet={data.find((plan) => { return plan.name === "Venus" })} />} />
        </Routes>
      </div>
    )

  )
}


