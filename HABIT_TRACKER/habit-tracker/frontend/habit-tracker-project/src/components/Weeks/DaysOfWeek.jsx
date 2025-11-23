import React from 'react';


const days = ["Mon", "Tue", "Wed", "Thurs", "Fri", "Sat", "Sun"];


export default function DaysOfWeek() {
return (
<div className="grid grid-cols-7 text-center mt-6 font-semibold text-gray-600">
{days.map((d) => (
<p key={d}>{d}</p>
))}
</div>
);
}