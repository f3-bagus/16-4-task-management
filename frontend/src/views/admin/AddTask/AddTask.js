// AddTask.js
import React from "react";
import Editable from "../../../components/AddEditable/Editable";

export default function AddTask(props) {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full px-4">
          <Editable
            text="+ Add Task"
            placeholder="Enter Task Title"
            displayClass="board_add-card"
            editClass="board_add-card_edit"
            onSubmit={(value) => props.addCard(props.board?.id, value)}
          />
        </div>
      </div>
    </>
  );
}
