import React, { useEffect, useState } from "react";
import { Calendar, CheckSquare, List, Tag, Trash, Type, Book } from "react-feather";
import Modal from "../../../components/Modal/Modal";
import Editable from "../../../components/Editable/Editable";
import PriorityDropdown from "./PriorityDropdown";

import SubTask from "./SubTask/SubTask";

import "./AddTask.css";

const projects = ["Home", "Routines", "Inspiration"];

function AddTask(props) {
  const [selectedPriority, setSelectedPriority] = useState("");
  const [selectedProject, setSelectedProject] = useState(projects[0]); // Default to the first project
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


// SubTask
  const [showSubTaskModal, setShowSubTaskModal] = useState(false);
  const openSubTaskModal = () => {
    setShowSubTaskModal(true);
  };

  const closeSubTaskModal = () => {
    setShowSubTaskModal(false);
  };

  return (
    <Modal onClose={closeModal} isOpen={isModalOpen}>
      <div className="cardinfo">

        <div className="cardinfo_box">
          <div className="cardinfo_box_title">
            <Type />
            <p>Title</p>
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
            <Calendar />
            <p>Date</p>
          </div>
          <input
            type="date"
            defaultValue={values.date}
            min={new Date().toISOString().substr(0, 10)}
            onChange={(event) => updateDate(event.target.value)}
          />
        </div>

        <div className="frequency_cardinfo_box">
          <p>Frequency</p>
          <select
            id="frequency"
            value={values.frequency}
            onChange={(event) => updateFrequency(event.target.value)}
          >
            <option value="none">None</option>
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
            <option value="yearly">Yearly</option>
          </select>
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

        

        <div className="cardinfo_box">
          <div className="cardinfo_box_title">
            <Book />
            <p>Select Project</p>
          </div>
          <div className="project_dropdown">
            <select
              id="project"
              value={selectedProject}
              onChange={(event) => setSelectedProject(event.target.value)}
            >
              {projects.map((project, index) => (
                <option key={index} value={project}>{project}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="cardinfo_box">
          <div className="cardinfo_box_title">
            <CheckSquare />
            <p>Sub Tasks</p>
          </div>
          <div className="cardinfo_box_progress-bar">
            <div
              className="cardinfo_box_progress"
              style={{
                width: `${calculatePercent()}%`,
                backgroundColor: calculatePercent() === 100 ? "limegreen" : "",
              }}
            />
          </div>
          <div className="cardinfo_box_task_list">
            {values.tasks?.map((item) => (
              <div key={item.id} className="cardinfo_box_task_checkbox">
                <input
                  type="checkbox"
                  defaultChecked={item.completed}
                  onChange={(event) =>
                    updateTask(item.id, event.target.checked)
                  }
                />
                <p className={item.completed ? "completed" : ""}>{item.text}</p>
                <Trash onClick={() => removeTask(item.id)} />
              </div>
            ))}
          </div>
                  {/* Tombol untuk membuka modal SubTask */}
        <button
          className="text-xs uppercase py-3 font-bold block text-blueGray-700 hover:text-blueGray-500 outline-none focus:outline-none"
          onClick={openSubTaskModal}
        >
          <i className="fa-solid fa-plus mr-2 text-sm outline-none focus:outline-none"></i>
          Sub Task
        </button>
      </div>
      {/* Modal AddTask */}
      {showSubTaskModal && (
        <SubTask onClose={closeSubTaskModal} />
      )}
    </div>

    </Modal>
  );
}

export default AddTask;
