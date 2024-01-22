import React, { useState, useEffect } from 'react';


function ControlList({onAddItem}){
  const [inputValue, setInputValue] = useState('');
  const [mins, setMins] = useState(0);
 

  const minOptions = [15, 30, 45, 60, 75, 90, 105, 120];

  const handleAdd = () => {
    if (inputValue.length > 0){
      onAddItem(inputValue, mins);
      setInputValue('');
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleAdd();
    }
  };

  return (
    <div className="control-holder">
      <input 
        type="text" 
        value={inputValue} 
        placeholder="enter a task"
        onChange={(e) => setInputValue(e.target.value)} 
        onKeyDown={handleKeyDown}   // checks for enter
      />

      <div className="mins-holder">
        <div className="mins-label">Minutes:</div>
        <select onChange={(e) => setMins(e.target.value)} >
          {
            minOptions.map((min, i) => <option value={min} key={i}>{min}</option>)
          }
        </select>
      </div>

      <button disabled={inputValue.length==0} onClick={() => handleAdd()}>Add</button>
    </div>
  )
}

export default ControlList;