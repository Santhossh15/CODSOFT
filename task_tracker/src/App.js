import React, { useState } from 'react';
import './App.css';

function App() {
  const [isCompletedScreen, setIsCompletedScreen] = useState(false);
  return (
    <div className="App">
      <h1>Task Tracker</h1>
      <div className='todo-wrapper'>
        <div className='todo-input'>
          <div className='todo-input-item'>
            <label>Title</label>
            <input type="text" placeholder="What's the task title?" />
          </div>
          <div className='todo-input-item'>
            <label>Description</label>
            <input type="text" placeholder="What's the task description?" />
          </div>
          <div className='todo-input-item'>
            <button type="button" className='primary-btn'>Add</button>
          </div>
        </div>
        <div className='btn-area'>
          <button className={`secondaryBtn ${isCompletedScreen === false && 'active'}`}
            onClick={() => setIsCompletedScreen(false)}>To Do</button>
          <button className={`secondaryBtn ${isCompletedScreen === true && 'active'}`}
            onClick={() => setIsCompletedScreen(true)}> Completed</button>
        </div>
        <div className='todo-list'>
          <div className='todo-list-item'>
            <h3>Task1</h3>
            <p>Description</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
