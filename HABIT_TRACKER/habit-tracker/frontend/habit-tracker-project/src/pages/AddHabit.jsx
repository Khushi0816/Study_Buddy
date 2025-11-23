import React from 'react'


export default function AddHabit(){
return (
<div className="card p-6">
<h2 className="text-xl font-semibold">Add Habit</h2>
<form className="mt-4 space-y-4">
<input placeholder="Habit name" className="w-full border rounded p-2" />
<select className="w-full border rounded p-2">
<option>Daily</option>
<option>Weekly</option>
</select>
<div className="flex gap-2">
<button className="bg-hb-lime text-white px-4 py-2 rounded">Add</button>
<button type="button" className="px-4 py-2 rounded border">Cancel</button>
</div>
</form>
</div>
)
}