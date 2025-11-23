import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'


function Login(){
return (
<div className="max-w-md mx-auto card p-6">
<h2 className="text-xl font-semibold">Login</h2>
<input placeholder="Email" className="w-full border rounded p-2 mt-3" />
<input placeholder="Password" type="password" className="w-full border rounded p-2 mt-3" />
<button className="mt-4 w-full bg-hb-lime text-white py-2 rounded">Sign in</button>
<p className="mt-3 text-sm">No account? <Link to="signup" className="text-hb-plum">Sign up</Link></p>
</div>
)
}
function Signup(){
return (
<div className="max-w-md mx-auto card p-6">
<h2 className="text-xl font-semibold">Sign up</h2>
<input placeholder="Name" className="w-full border rounded p-2 mt-3" />
<input placeholder="Email" className="w-full border rounded p-2 mt-3" />
<input placeholder="Password" type="password" className="w-full border rounded p-2 mt-3" />
<button className="mt-4 w-full bg-hb-lime text-white py-2 rounded">Create account</button>
<p className="mt-3 text-sm">Already have an account? <Link to="/auth/login" className="text-hb-plum">Login</Link></p>
</div>
)
}


export default function Auth(){
return (
<Routes>
<Route path="login" element={<Login/>} />
<Route path="signup" element={<Signup/>} />
</Routes>
)
}