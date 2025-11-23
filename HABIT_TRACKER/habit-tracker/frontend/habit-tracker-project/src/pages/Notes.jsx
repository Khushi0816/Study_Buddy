import React, {useState} from 'react'
import Header from '../components/Weeks/Header'
import Tabs from '../components/Weeks/Tabs'
const notesImg = '/mnt/data/6dfe078a-83f4-4042-b94c-ad1a55c3b3ef.jpg'

export default function Notes(){
  const [notes, setNotes] = useState([
    {id:1,title:'June Trip Notes', emoji:'🌸', text:'Trip planning...'},
    {id:2,title:'College Presentation', emoji:'💭', text:'Slides & points'},
    {id:3,title:'Journal Ideas', emoji:'📕', text:'Daily prompts'}
  ])
  const [sel, setSel] = useState(notes[0])
  const save = () => {
    setNotes(prev => prev.map(n => n.id === sel.id ? sel : n))
    alert('Saved!')
  }

  return (
    <div>
      <Header />
      <div className="max-w-6xl mx-auto px-6 py-8">
        <Tabs active="notes" />

        <div className="grid grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Your Notes</h2>
            <div className="space-y-4">
              {notes.map(n=>(
                <button key={n.id} onClick={()=> setSel(n)} className="w-full text-left bg-hb-pink-2 rounded-xl p-4 flex items-center gap-3">
                  <span className="text-2xl">{n.emoji}</span>
                  <div className="font-medium">{n.title}</div>
                </button>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Selected Note</h2>
            <div className="chic-card p-6">
              <textarea className="w-full h-40 p-4 border border-hb-pink rounded-lg" value={sel.text} onChange={e=> setSel({...sel, text: e.target.value})} />
              <div className="flex justify-end mt-4">
                <button onClick={save} className="bg-hb-green text-white px-6 py-3 rounded-xl">Save Note</button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
