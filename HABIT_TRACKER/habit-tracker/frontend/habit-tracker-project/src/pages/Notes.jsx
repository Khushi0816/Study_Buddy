import React, {useState} from 'react'


export default function Notes(){
const [notes] = useState(["June Trip Notes","College Presentation","Journal Ideas"])
const [selected,setSelected] = useState('')
return (
<div className="grid grid-cols-2 gap-6">
<div>
<h3 className="text-xl font-semibold mb-4">Your Notes</h3>
<div className="space-y-3">
{notes.map(n=> <div key={n} className="bg-hb-pink p-3 rounded" onClick={()=>setSelected(n)}>{n}</div>)}
</div>
</div>
<div>
<h3 className="text-xl font-semibold mb-4">Selected Note</h3>
<textarea className="w-full h-40 border rounded p-3" placeholder="Write your thoughts..." value={selected} readOnly />
<button className="mt-4 bg-hb-lime text-white px-4 py-2 rounded">Save Note</button>
</div>
</div>
)
}