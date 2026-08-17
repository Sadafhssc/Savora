import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from './pages/Home'
import { Toaster } from 'react-hot-toast'
import Cart from './pages/Cart'
import AddItemPage from './pages/admin/AddItemPage'
import Layout from './pages/Layout'
import ListItemsPage from './pages/admin/ListItemsPage'
import PlaceOrder from './pages/PlaceOrder'
const App = () => {
  return (
    <>
    <Toaster/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path="/order" element={<PlaceOrder/>}/>
          <Route
          path="/admin"
          element={<Layout/>}
          
        >
            <Route index element={< AddItemPage/>} />
             <Route path='list-items' element={< ListItemsPage/>} />
        </Route>
      </Routes>
    </>
  )
}

export default App
