import React, { useState } from 'react'


function TodoForm(props) {
  const [text, setText] = useState("");

  function handleChange(event) {
    let t = event.target.value;
    setText(t);
  }

  function addItem(event) {
    event.preventDefault();

    if (text) {
      // setItems([...items, text]);
      // estou compartilhando um estado entre componentes
      props.onAddItem(text);
      setText("");
    }
  }

  return (
    <form>
      <input className="todoInput" onChange={handleChange} type="text" value={text} placeholder="To Do"/>
      <button className="addTodoButton" onClick={addItem}>Add</button>
    </form>
  );
}

export default TodoForm