import React from 'react'
import './css/style.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './pages/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Blog from './pages/Blog'
import Service from './pages/Service'
import Resort from './pages/Resort'
import Contact from './pages/Contact'

const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/blog' element={<Blog/>}/>
          <Route path='/service' element={<Service/>}/>
          <Route path='/resort' element={<Resort/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Route>
      </Routes>
    </BrowserRouter>   
    </>
  )
}

export default App
