import { useState } from 'react'
import { BrowserRouter, Routes , Route} from 'react-router-dom'
import { Homepage } from './pages/Homepage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter >
      <Routes>
        {/* all paths  */}
        <Route path="/" element={<Homepage />}></Route>

      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
