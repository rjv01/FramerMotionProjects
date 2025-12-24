import Card from "./components/Card"
import Home from "./components/Home"
import Subscribe from "./components/Subscribe"
import Sidebar from "./components/Sidebar"

import { Routes,Route } from "react-router-dom"
import Counter from "./components/Counter"
import Scroll from "./components/Scroll";
import CardLayout from "./components/CardLayout";
import Navbar from "./components/Navbar"
import AnimateText from "./components/AnimateText"
import SuccessButton1 from "./components/SuccessButton1"

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}>Home</Route>
        <Route path="/subscribe" element={<Subscribe />} />
        <Route path="/Card" element={<Card />} />
        <Route path="/sidebar" element={<Sidebar />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/scroll" element={<Scroll />} />
        <Route path="/layoutcard" element={<CardLayout />} />
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/animatetext" element={<AnimateText />} />
        <Route path="/successbutton" element={<SuccessButton1 />} />
      </Routes>
    </div>
  )
}

export default App
