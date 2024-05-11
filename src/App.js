import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Home'
import About from '../src/About'
import Contact from '../src/Contact'
import '../src/App.css'
import Error from './Error'
import MainHeader from '../src/Components/MainHeader'
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainHeader/>}>
          <Route index element={<Home/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="contact" element={<Contact/>}/>
          <Route path="*" element={<Error/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App