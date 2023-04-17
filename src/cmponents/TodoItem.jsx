import React, { useState } from 'react'
import { Checkbox } from 'antd';
import './TodoItem.css'


const TodoItem = (props) => {
    const { title, isComplete } = props.item;
    const [complete, setComplete] = useState(isComplete);
    const itemClick = () => {
        setComplete(complete => (!complete));
    }
    const btnDelete = () => {
      props.onDelete(title);
    }
  return (
    <div 
        onClick={ itemClick } 
        className={complete ? 'TodoItem TodoItem-complete' : 'TodoItem' }
    >
      <div className="left">
        <Checkbox className='checkbox' checked={complete}/>
        <p>{title}</p>
      </div>
      <span onClick={ btnDelete } className='btn-delete'>delete</span>

    </div>
  )
}

export default TodoItem