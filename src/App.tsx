import Card from "./components/Card"
import Home from "./components/Home"
import Subscribe from "./components/Subscribe"
import { Routes,Route } from "react-router-dom"
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}>Home</Route>
        <Route path="/subscribe" element={<Subscribe />} />
        <Route path="/Card" element={<Card />} />
      </Routes>
    </div>
  )
}

export default App
