import React from 'react';


export default function Tabs({ activeTab, setActiveTab }) {
const tabs = ["week", "month", "notes"];


return (
<div className="flex gap-3 mt-4">
{tabs.map((t) => (
<button
key={t}
onClick={() => setActiveTab(t)}
className={`px-4 py-1 rounded-full text-sm capitalize shadow-sm transition-all
${activeTab === t ? "bg-pink-200 text-pink-700" : "bg-white"}`}
>
{t}
</button>
))}
</div>
);
}