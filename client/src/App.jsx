import {BrowserRouter , Routes , Route} from "react-router-dom"
import Home from "./pages/Home.jsx"
import About from "./pages/About.jsx"
import SignUp from "./pages/SignUp.jsx"
import SignIn from "./pages/SignIn.jsx"
function App() {
 

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
