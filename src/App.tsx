import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Innovation from './pages/Innovation';
import InnovationDetail from './pages/InnovationDetail';
import './App.css';

function App() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div className="app">
      <Header />
      <div className="app-body">
        <Sidebar collapsed={sidebarCollapsed} onToggle={() => setSidebarCollapsed(!sidebarCollapsed)} />
        <main className="main-content" >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/innovation" element={<Innovation />} />
            <Route path="/innovation/:id" element={<InnovationDetail />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
