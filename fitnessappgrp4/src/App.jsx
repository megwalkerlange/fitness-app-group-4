import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar'
import PastWorkouts from './components/pages/pastWorkouts'
import CurrentWorkouts from './components/pages/currentWorkouts'
import FutureWorkouts from './components/pages/futureWorkouts'

export function App() {
 
  return(
    <>
      <Router>
      <div>
        <Navbar />
        <Routes>
          {/* <Route path='home' element={<App />} /> */}
          <Route path='pastWorkouts' element={<PastWorkouts />} />
          <Route path='currentWorkouts' element={<CurrentWorkouts />} />
          <Route path='futureWorkouts' element={<FutureWorkouts />} />
        </Routes>

      </div>
    </Router>
    </>
  )

}

export default App
