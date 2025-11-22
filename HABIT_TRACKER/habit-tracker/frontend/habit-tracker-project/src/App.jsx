import { useState } from "react";
import Heading from './components/HabitBloomLogo';
import Header from "./components/Header";
import Tabs from "./components/Tabs";
import WeekPage from "./components/week/WeekPage";


function App() {
const [activeTab, setActiveTab] = useState("week");
  return (
    <>
     <Heading />
     <Header />
     <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* PAGE CONTENT WILL CHANGE BASED ON TAB */}
      {activeTab === "week" && <WeekPage />}
      {activeTab === "month" && <div>Month Page UI here</div>}
      {activeTab === "notes" && <div>Notes UI here</div>}
      <div className="text-4xl text-pink-500 font-bold">
  Tailwind is working!
</div>

    </>
  );
}

export default App;
