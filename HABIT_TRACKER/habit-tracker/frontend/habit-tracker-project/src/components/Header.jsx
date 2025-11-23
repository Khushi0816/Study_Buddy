import React from 'react'
import { Link, useLocation } from 'react-router-dom'


export default function Header(){
	const loc = useLocation()
	return (
		<header className="bg-hb-cream border-b border-hb-pink/40">
			<div className="app-container flex items-center justify-between py-6">
				<div className="flex items-center gap-4">
					<img src="/logo192.png" alt="logo" className="w-28 h-auto" />
					<div>
						<h1 className="logo-text text-3xl text-hb-mint">Habit<span className="text-hb-plum">Bloom</span></h1>
						<p className="text-sm text-gray-600">Hey there, Bloom 🌸</p>
					</div>
				</div>

				<div className="flex items-center gap-4">
					<Link to="/add" className="px-4 py-2 rounded-full bg-hb-lime text-white font-semibold">+ Add Habit</Link>
					<Link to="/profile" className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center">👤</Link>
				</div>
			</div>
		</header>
	)
}