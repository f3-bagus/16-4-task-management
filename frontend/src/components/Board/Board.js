import React, { useState } from "react";
import { MoreHorizontal } from "react-feather";

import Card from "../MainCard/Card";
import Dropdown from "../Dropdown/Dropdown";
import Editable from "../Editable/Editable";
import AddTask from "../../views/admin/AddTask/AddTask"; // Import AddTask
import "./Board.css";

function Board(props) {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showAddTaskModal, setShowAddTaskModal] = useState(false); // State untuk modal

  const openAddTaskModal = () => {
    setShowAddTaskModal(true);
  };

  const closeAddTaskModal = () => {
    setShowAddTaskModal(false);
  };

  console.log("props in Board:", props); // Tambahkan log ini untuk debugging

  return (
    <div className="board">
      <div className="board_header">
        <p className="board_header_title">
          {props.board?.title}
          <span>{props.board?.cards?.length || 0}</span>
        </p>
        <div
          className="board_header_title_more"
          onClick={() => setShowDropdown(true)}
        >
          <MoreHorizontal />
          {showDropdown && (
            <Dropdown
              class="board_dropdown"
              onClose={() => setShowDropdown(false)}
            >
              <p onClick={() => props.removeBoard()}>Delete Board</p>
            </Dropdown>
          )}
        </div>
      </div>

      <div className="board_cards custom-scroll">
        {props.board?.cards?.map((item) => (
          <Card
            key={item.id}
            card={item}
            boardId={props.board.id}
            removeCard={props.removeCard}
            dragEntered={props.dragEntered}
            dragEnded={props.dragEnded}
            updateCard={props.updateCard}
          />
        ))}

        {/* Tombol untuk membuka modal AddTask */}
        <button
          className="text-xs uppercase py-3 font-bold block text-blueGray-700 hover:text-blueGray-500 outline-none focus:outline-none"
          onClick={openAddTaskModal}
        >
          <i className="fa-solid fa-plus mr-2 text-sm outline-none focus:outline-none"></i>
          Add Task
        </button>
      </div>
      {/* Modal AddTask */}
      {showAddTaskModal && (
        <AddTask onClose={closeAddTaskModal} />
      )}
    </div>

  );
}

export default Board;
