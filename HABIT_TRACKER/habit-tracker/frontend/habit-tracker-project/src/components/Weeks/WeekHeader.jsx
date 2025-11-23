import React from 'react';


export default function WeekHeader() {
return (
<div className="flex items-center justify-between mt-6 text-gray-700 w-full">
<button>{"<"}</button>
<p className="font-semibold">Mon, 10/11 - Sun, 16/11</p>
<button>{">"}</button>
</div>
);
}