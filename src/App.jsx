
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import LoginPage from './pages/LoginPage'
import NotFound from './NotFount/NotFound'
import { ToastContainer } from 'react-toastify'


function App() {
 
const route = createBrowserRouter (
  createRoutesFromElements(
    <Route>
     
      <Route path='/' element = {<LoginPage/>}/>
      
      <Route path='*' element = {<NotFound/>}/>

    </Route>
  )
)
  return (
    <>
     <ToastContainer />
     <RouterProvider router={route}/>
    </>
  )
}

export default App
