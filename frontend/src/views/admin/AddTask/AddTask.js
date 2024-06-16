import React from "react";
import AddEditable from "../../../components/AddEditable/AddEditable";

export default function AddTask(props) {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-md px-4">
        <AddEditable
          text="+ Add Task"
          placeholder="Enter Task Title"
          displayClass="board_add-card"
          editClass="board_add-card_edit"
          onSubmit={(value) => props.addCard(props.board?.id, value)}
        />
      </div>
    </div>
  );
}
