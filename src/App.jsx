import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './page/Home'
import {Routes, Route} from 'react-router'
import './App.css'
import Props from './page/Props'
import Timer from './page/Timer'
import TimerReverse from './page/TimerReverse'

function App() {

  return (
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/props" element={<Props/>}></Route>
        <Route path="/timer" element={<Timer/>}></Route>
        <Route path="/timerrev" element={<TimerReverse/>}></Route>
      </Routes>
  )
}

export default App
