import { useEffect, useState } from 'react'
import './App.css'
import Sidebar from './admin/components/Sidebar'
import axios from 'axios'

function App() {
  const [data, setData] = useState("")
  const getData = async() => {
    const response = Axios.get("/text")
    setData(response.data)
    console.log(data)
    console.log("Hello")
  }

  useEffecct(() => {
    getData()
  }, [])
  return (
    <>
      <Sidebar />
    </>
  )
}

export default App
