import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Register from './component/Register'
import Login from './component/Login'

const App = () => {
  return (
    <>
      <Routes>
      <Route path='/' Component={Register}/>
      <Route path='/login' Component={Login}/>
      </Routes>
    </>
  )
}

export default App
