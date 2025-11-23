import React from 'react';
import '../../styles/HabitBloomLogo.css';


function HabitBloomLogo() {
return (
<div className="habit-bloom-logo">
<div className="habit-with-icon">
<img src="/butterfly.gif" alt="HabitBloom Icon" className="logo-icon" />
<span className="logo-part-habit">Habit</span>
</div>
<span className="logo-part-bloom">Bloom</span>
</div>
);
}
export default HabitBloomLogo;