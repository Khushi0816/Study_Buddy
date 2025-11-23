import React from 'react'


export default function MonthView(){
// simplified month grid
return (
<div>
<h2 className="text-2xl font-semibold mb-4">November</h2>
<div className="grid grid-cols-30 gap-1">
{Array.from({length:30}).map((_,i)=> (
<div key={i} className="text-center text-xs p-1 bg-pink-50 rounded">{i+1}</div>
))}
</div>
</div>
)
}