import './App.css'

import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import Home from './pages/Home/Home'
import NavBar from './component/NavBar/NavBar'
import Footer from './component/Footer/Footer'


const route = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
])

function App() {

  return (
    <>
      <NavBar />
      <RouterProvider router={route} />
      <Footer />
    </>
   
  )
}

export default App
