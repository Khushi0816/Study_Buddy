import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Weeks/Header'
import Home from './pages/Home'
import WeekView from './pages/WeekView'
import MonthView from './pages/MonthView'
import Notes from './pages/Notes'
import AddHabit from './pages/AddHabit'
import Profile from './pages/Profile'
import Dashboard from './pages/Dashboard'
import Auth from './pages/Auth'


export default function App(){
return (
<div className="min-h-screen">
<Header />
<main className="max-w-7xl mx-auto px-6 py-8">
<Routes>
<Route path="/" element={<Home/>} />
<Route path="/week" element={<WeekView/>} />
<Route path="/month" element={<MonthView/>} />
<Route path="/notes" element={<Notes/>} />
<Route path="/add" element={<AddHabit/>} />
<Route path="/profile" element={<Profile/>} />
<Route path="/dashboard" element={<Dashboard/>} />
<Route path="/auth/*" element={<Auth/>} />
</Routes>
</main>
</div>
)
}