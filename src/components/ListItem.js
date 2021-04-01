import React from "react";
import Card from "./Card";

function DoneImg(props) {
  if (props.done) {
    return <img src="./assets/done.svg" alt="Done" />;
  } else {
    return <img src="./assets/notDone.svg" alt="notDone" />;
  }
}

function ListItem(props) {
  return (
    <li>
      <Card className={props.item.done ? "done item" : "item"}>
        {props.item.text}
        <div>
          <button
            className="doneButton"
            onClick={() => {
              props.onDone(props.item);
            }}
          >
            <DoneImg done={props.item.done}></DoneImg>
          </button>
          <button
            className="deleteButton"
            onClick={() => {
              props.onItemDeleted(props.item);
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
