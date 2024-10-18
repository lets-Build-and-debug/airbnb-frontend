import { useState } from 'react'
import { BrowserRouter, Routes , Route} from 'react-router-dom'
import { Homepage } from './pages/Homepage'
import { Stays } from './pages/Stays'
import { Experiences } from './pages/Experiences'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter >
      <Routes>
        {/* all paths  */}
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/Stays" element={<Stays />}></Route>
        <Route path="/Experiences" element={<Experiences />}></Route>

      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
