import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Tabs({ activeTab, setActiveTab }) {
	const tabs = ["week", "month", "notes"];
	const toPath = (t) => `/${t}`;

	return (
		<div className="flex gap-3 mt-4">
			{tabs.map((t) => (
				<NavLink
					key={t}
					to={toPath(t)}
					onClick={() => setActiveTab && setActiveTab(t)}
					className={({ isActive }) =>
						`px-4 py-1 rounded-full text-sm capitalize shadow-sm transition-all ${
							isActive ? 'bg-pink-200 text-pink-700' : 'bg-white'
						}`
					}
				>
					{t}
				</NavLink>
			))}
		</div>
	);
}