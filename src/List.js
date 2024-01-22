import React, { useState } from 'react';
import ListItem from './ListItem.js';

function List(props){
  let theList = props.list;
  return (
    <div className="list-holder">
      <ul>
      {
        theList.map((item, i) => <ListItem item={item} key={i}/>)
      }
      </ul>
    </div>
  )
}

export default List;