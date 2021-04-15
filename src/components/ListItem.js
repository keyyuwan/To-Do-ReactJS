import React from "react";
import Card from "./Card";
import { useDispatch } from 'react-redux'
import { deleteItem, changeDone } from '../actions/listActions'

function DoneImg(props) {
  if (props.done) {
    return <img src="./assets/done.svg" alt="Done" />;
  } else {
    return <img src="./assets/notDone.svg" alt="notDone" />;
  }
}

function ListItem(props) {

  const dispatch = useDispatch()

  return (
    <li>
      <Card className={props.item.done ? "done item" : "item"}>
        {props.item.text}
        <div>
          <button
            className="doneButton"
            onClick={() => {
              dispatch(changeDone(props.item.id))
            }}
          >
            <DoneImg done={props.item.done}></DoneImg>
          </button>
          <button
            className="deleteButton"
            onClick={() => {
              dispatch(deleteItem(props.item.id))
            }}
          >
            <img src="./assets/delete.svg" alt="Delete" />
          </button>
        </div>
      </Card>
    </li>
  );
}

export default ListItem;
