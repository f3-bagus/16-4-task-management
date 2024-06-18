import React, { useEffect, useState } from "react";
import {
  Calendar,
  CheckSquare,
  List,
  Tag,
  Trash,
  Type,
} from "react-feather";

import Modal from "../../../../components/Modal/Modal";
import Editable from "../../../../components/Editable/Editable";
import PriorityDropdown from "../PriorityDropdown";

import "./SubTask.css";

function SubTask(props) {
  const [selectedPriority, setSelectedPriority] = useState("");
  const [values, setValues] = useState({
    title: props.card?.title || '',
    desc: props.card?.desc || '',
    date: props.card?.date || '',
    frequency: props.card?.frequency || 'daily',
    labels: props.card?.labels || [],
    tasks: props.card?.tasks || [],
  });
  const [isModalOpen, setIsModalOpen] = useState(true); // State untuk mengontrol visibilitas modal

  const closeModal = () => {
    setIsModalOpen(false);
    if (props.onClose) {
      props.onClose();
    }
  };

  const updateTitle = (value) => {
    setValues({ ...values, title: value });
  };

  const updateDesc = (value) => {
    setValues({ ...values, desc: value });
  };

  const addTask = (value) => {
    const task = {
      id: Date.now() + Math.random() * 2,
      completed: false,
      text: value,
    };
    setValues({
      ...values,
      tasks: [...values.tasks, task],
    });
  };

  const removeTask = (id) => {
    const tasks = [...values.tasks];
    const tempTasks = tasks.filter((item) => item.id !== id);
    setValues({
      ...values,
      tasks: tempTasks,
    });
  };

  const updateTask = (id, value) => {
    const tasks = [...values.tasks];
    const index = tasks.findIndex((item) => item.id === id);
    if (index < 0) return;
    tasks[index].completed = value;
    setValues({
      ...values,
      tasks,
    });
  };

  const calculatePercent = () => {
    if (!values.tasks?.length) return 0;
    const completed = values.tasks?.filter((item) => item.completed)?.length;
    return (completed / values.tasks?.length) * 100;
  };

  const updateDate = (date) => {
    if (!date) return;
    setValues({
      ...values,
      date,
    });
  };

  const updateFrequency = (frequency) => {
    setValues({
      ...values,
      frequency,
    });
  };

  useEffect(() => {
    if (props.updateCard) props.updateCard(props.boardId, values.id, values);
  }, [values]);


  return (
    <Modal onClose={closeModal} isOpen={isModalOpen}>
      <div className="cardinfo">
        

        <div className="cardinfo_box">
          <div className="cardinfo_box_title">
            <Type />
            <p>Sub Task Title</p>
          </div>
          <Editable
            defaultValue={values.title}
            text={values.title || "Add a Title"}
            placeholder="Enter Title"
            onSubmit={updateTitle}
          />
        </div>

        <div className="cardinfo_box">
          <div className="cardinfo_box_title">
            <List />
            <p>Description</p>
          </div>
          <Editable
            defaultValue={values.desc}
            text={values.desc || "Add a Description"}
            placeholder="Enter description"
            onSubmit={updateDesc}
          />
        </div>


      <div className="cardinfo_box">
          <div className="cardinfo_box_title">
            <Tag />
            <p>Priority</p>
          </div>
          <PriorityDropdown 
            selectedPriority={selectedPriority}
            setSelectedPriority={setSelectedPriority}
          />
        </div>

      </div>
      
    </Modal>
  );
}

export default SubTask;
