import React from "react";

export default function Navbar() {
  const logoUrl = `./src/assets/logo/v-logo-main.png`;

  return (
    <header className="w-full bg-[#0E0A24] border-b border-white/10">
      {/* Height is controlled HERE */}
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 h-20">
        
        {/* Logo */}
        <img 
          src={logoUrl} 
          alt="StudySathi logo" 
          className="w-40 object-contain" 
        />

        {/* Center Nav Links */}
        <nav className="flex gap-10 items-center">
          {/* <a className="text-base text-white/80 hover:text-accent transition font-medium">Notes</a>
          <a className="text-base text-white/80 hover:text-accent transition font-medium">Flashcards</a>
          <a className="text-base text-white/80 hover:text-accent transition font-medium">Pomodoro</a> */}
        </nav>

        {/* Avatar */}
        <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center">
          <span className="text-sm text-white/90">K</span>
        </div>

      </div>
    </header>
  );
}
