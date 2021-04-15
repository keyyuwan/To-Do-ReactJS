import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addItem } from '../actions/listActions'


function TodoForm(props) {
  const [text, setText] = useState("");
  const dispatch = useDispatch()

  function handleChange(event) {
    let t = event.target.value;
    setText(t);
  }

  function addItemEvent(event) {
    event.preventDefault();

    if (text) {
      // setItems([...items, text]);
      // estou compartilhando um estado entre componentes
      dispatch(addItem(text))
      setText("");
      props.onHideModal()
    }
  }

  return (
    <form>
      <input className="todoInput" onChange={handleChange} type="text" value={text} placeholder="To Do"/>
      <button className="addTodoButton" onClick={addItemEvent}>Add</button>
    </form>
  );
}

export default TodoForm
