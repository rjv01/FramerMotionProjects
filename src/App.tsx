import Card from "./components/Card"
import Home from "./components/Home"
import Subscribe from "./components/Subscribe"
import Sidebar from "./components/Sidebar"

import { Routes,Route } from "react-router-dom"
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}>Home</Route>
        <Route path="/subscribe" element={<Subscribe />} />
        <Route path="/Card" element={<Card />} />
        <Route path="/sidebar" element={<Sidebar />} />
      </Routes>
    </div>
  )
}

export default App
