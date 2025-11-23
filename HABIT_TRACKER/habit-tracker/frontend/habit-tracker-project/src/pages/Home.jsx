import React from 'react'
import Tabs from '../components/Weeks/Tabs'
import HabitGrid from '../components/Weeks/HabitGrid'
import TodayGoals from '../components/Weeks/TodayGoals'


export default function Home(){
const habits = ['Habit 1','Habit 2','Habit 3','Habit 4']
return (
<div className="grid grid-cols-12 gap-8">
<div className="col-span-9">
<Tabs />
<div className="flex items-center justify-between mb-6">
<div className="flex items-center gap-4">
<button className="text-2xl">❮</button>
<div className="text-sm text-gray-600">Mon, 10/11 - Sun, 16/11</div>
<button className="text-2xl">❯</button>
</div>
<div className="flex items-center gap-2">
<div className="bg-hb-pink px-3 py-1 rounded-full">🌸</div>
</div>
</div>


<HabitGrid habits={habits} />


<div className="mt-8 text-pink-600">Tailwind is working!</div>
</div>


<div className="col-span-3">
<TodayGoals goals={["Habit 1","Habit 2"]} />
</div>
</div>
)
}