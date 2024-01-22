import React, { useState } from 'react';

function ListItem(props){
  return (
    <li>
      <div>{props.item.task}</div>
      <div>{props.item.mins}</div>
    </li>
  )
}

export default ListItem;