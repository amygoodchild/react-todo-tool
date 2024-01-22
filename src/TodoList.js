import React, { useState, useEffect } from 'react';

import List from './List.js';
import ControlList from './ControlList.js';

function TodoList() {
  const [list, setList] = useState([]);

  const handleAddItem = (task, mins) => {
    let item = {task: task, mins: mins}
    setList((prev) => [...prev, item]);
  }

  return (
    <div className="todo-holder">
      <ControlList onAddItem={handleAddItem} />
      <List list={list} />
    </div>
  );
}

export default TodoList;