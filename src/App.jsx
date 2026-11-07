// src/App.jsx
import { useState } from 'react';
import { dramaData } from './dramas';
import DramaCard from "./Dramacard.jsx"
import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("All");
  const [filterCategory, setFilterCategory] = useState("All");

  // 1. Filter by C-Drama / K-Drama
  // 2. Filter by Category (Modern, Historical, etc.)
  // 3. Filter by Search Text
  const filteredDramas = dramaData.filter((drama) => {
    const matchesSearch = 
      drama.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      (drama.chineseTitle && drama.chineseTitle.includes(searchTerm));
      
    const matchesType = filterType === "All" || drama.type === filterType;
    const matchesCategory = filterCategory === "All" || drama.category === filterCategory;
    
    return matchesSearch && matchesType && matchesCategory;
  });

  return (
    <div className="app-container">
      <header>
        <h1>My Drama Tracker</h1>
        <p>A collection of my favorite C-Dramas & K-Dramas</p>
      </header>

      <div className="controls">
        <input 
          type="text" 
          placeholder="Search by title (English or Chinese)..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        
        {/* Row 1: CDrama vs KDrama */}
        <div className="filter-buttons">
          <button className={filterType === "All" ? "active" : ""} onClick={() => setFilterType("All")}>All Shows</button>
          <button className={filterType === "CDrama" ? "active" : ""} onClick={() => setFilterType("CDrama")}>C-Dramas</button>
          <button className={filterType === "KDrama" ? "active" : ""} onClick={() => setFilterType("KDrama")}>K-Dramas</button>
        </div>

        {/* Row 2: Categories */}
        <div className="category-buttons">
          <button onClick={() => setFilterCategory("All")}>All Genres</button>
          <button onClick={() => setFilterCategory("Modern")}>Modern</button>
          <button onClick={() => setFilterCategory("Historical")}>Historical</button>
          <button onClick={() => setFilterCategory("Xianxia")}>Xianxia</button>
          <button onClick={() => setFilterCategory("Republican")}>Republican</button>
        </div>
      </div>

      <div className="drama-grid">
        {filteredDramas.length > 0 ? (
          filteredDramas.map((drama) => (
            <DramaCard key={drama.id} drama={drama} />
          ))
        ) : (
          <p>No dramas found matching your filters!</p>
        )}
      </div>
    </div>
  );
}

export default App;