import React from 'react'
import Header from '../components/Weeks/Header'
import Tabs from '../components/Weeks/Tabs'

const monthNumbers = Array.from({length: 23}, (_,i)=> i+1)

export default function MonthView(){
  return (
    <div>
      <Header />
      <div className="max-w-6xl mx-auto px-6 py-8">
        <Tabs active="month" />
        <div className="flex items-center justify-center my-4 text-2xl font-semibold">◀ <span className="px-6">November</span> ▶</div>

        <div className="grid grid-cols-[120px_1fr] gap-6">
          <div className="py-6">
            {/* left column for habit labels if you want */}
          </div>

          <div className="bg-hb-pink-2 p-6 rounded-xl">
            <div className="grid grid-cols-23 gap-2 text-center">
              {monthNumbers.map(n=>(
                <div key={n} className="w-8 h-8 bg-white rounded-sm text-xs grid place-items-center text-hb-deep">{n}</div>
              ))}
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Sleep Tracker</h3>
              <div className="h-48 bg-white rounded-xl grid place-items-center text-sm text-hb-deep/60">[Chart placeholder — you can plug in a chart library here]</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
