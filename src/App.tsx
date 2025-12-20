import Home from "./components/Home"
import Subscribe from "./components/Subscribe"
import { Routes,Route } from "react-router-dom"
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}>Home</Route>
        <Route path="/subscribe" element={<Subscribe />} />
      </Routes>
      {/* <h1 className="text-3xl font-bold text-red-300">Hello world</h1> */}
    </div>
  )
}

export default App
