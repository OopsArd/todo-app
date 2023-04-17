import { useState } from 'react'

import './App.css'
import TodoItem from './cmponents/TodoItem'
import { data } from './constance/data'

function App() {
  const [todo, setTodo] = useState(data);
  const handleKeyDown = (event) => {
    if(event.key === 'Enter')
    {
      const dataInput = event.target.value
      if(dataInput){
        setTodo([...todo, {title: dataInput, isComplete: false}]);
        event.target.value = "";
      }
    }
  }

  const onDelete = (title) =>{
    setTodo(todo => todo.filter(item => item.title !== title));
  }

  return(
    <div className='app'>
      <div className="input">
        <input 
            className='input-field' 
            onKeyDown={ handleKeyDown } 
            type='text' 
            placeholder='Thêm việc cần làm' 
          />
        <button className='input-button'>+</button>
      </div>
      <div className="field">
          { 
            todo.map((item, index) => <TodoItem key={index} item = {item} onDelete = {onDelete} /> )
          }
        </div>
    </div>
  )
}

export default App
