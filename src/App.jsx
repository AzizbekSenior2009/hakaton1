import React from 'react'
import { Route, Routes } from 'react-router-dom'
import User from './user/User'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/user' element={<User/>}/>
      </Routes>
    </div>
  )
}

export default App
