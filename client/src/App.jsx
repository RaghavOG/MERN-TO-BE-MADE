import {BrowserRouter , Routes , Route} from "react-router-dom"
import Home from "./pages/Home.jsx"
import About from "./pages/About.jsx"
import SignUp from "./pages/SignUp.jsx"
import SignIn from "./pages/SignIn.jsx"
import Header from "./components/Header.jsx"
import PrivateRoute from "./components/PrivateRoute.jsx"
import ProfilePage from "./pages/ProfilePage.jsx"
import ErrorPage from "./pages/ErrorPage.jsx"


function App() {
 

  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />

        <Route element={<PrivateRoute />}>
          <Route path='/profile' element={<ProfilePage />} />
        </Route>

        <Route path="*"  element={<ErrorPage />} />



      </Routes>
    </BrowserRouter>
  )
}

export default App
