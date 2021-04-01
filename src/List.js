import React from 'react'

function DoneImg(props) {

  if(props.done) {
    return (<img src="./assets/done.svg" alt="Done" />)
  } else {
    return <img src="./assets/notDone.svg" alt="notDone" />;
  }
}

function List(props) {

  return (
    <ul>
      {props.items.map((item) => (
        <li key={item.id} className={item.done ? "done" : ""}>
          {item.text}
          <button onClick={() => {props.onDone(item)}}>
            <DoneImg done={item.done} ></DoneImg>
          </button>
          <button onClick={() => {props.onItemDeleted(item)}}>
            <img src="./assets/delete.svg" alt="Delete"/>
          </button>
          </li>
      ))}
    </ul>
  );
}

export default List
