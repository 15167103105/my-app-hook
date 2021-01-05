import React from 'react';
import './App.css';
import A from './model/a/a';
import B from './model/b/B';
import HookPage from './pages/hookPage/HookPage';

function App() {
  return (
    <div className="App">
      <A />
      <B />
      <HookPage />
    </div>
  );
}

export default App;
