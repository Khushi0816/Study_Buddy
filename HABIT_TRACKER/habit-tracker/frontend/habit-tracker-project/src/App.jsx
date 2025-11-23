import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import WeekView from './pages/WeekView'
import MonthView from './pages/MonthView'
import Notes from './pages/Notes'

export default function App(){
  return (
    <div className="app-wrapper">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WeekView/>} />
        <Route path="/month" element={<MonthView/>} />
        <Route path="/notes" element={<Notes/>} />
      </Routes>
    </BrowserRouter>
    </div>
  )
}
