import React from 'react'


export default function HabitGrid({habits = []}){
// simple mock: 7 days columns
const days = ['Mon','Tues','Wed','Thurs','Fri','Sat','Sun']
return (
<div className="grid grid-cols-9 gap-4 items-start">
<div></div>
{days.map(d=> <div key={d} className="text-center font-medium">{d}</div>)}


{habits.map(h => (
<>
<div className="py-3">{h}</div>
{days.map(day=> (
<div key={day} className="flex justify-center">
<div className="w-8 h-8 bg-pink-100 rounded-md flex items-center justify-center">❤️</div>
</div>
))}
</>
))}
</div>
)
}