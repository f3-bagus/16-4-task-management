import React from "react";

const priorities = [
  { text: "Low", color: "green" },
  { text: "Medium", color: "yellow" },
  { text: "High", color: "red" },
];

function PriorityDropdown({ selectedPriority, setSelectedPriority }) {
  return (
    <div className="priority-dropdown">
      <select
        value={selectedPriority}
        onChange={(e) => setSelectedPriority(e.target.value)}
      >
        <option value="">Select Priority</option>
        {priorities.map((priority) => (
          <option key={priority.text} value={priority.text}>
            {priority.text}
          </option>
        ))}
      </select>
      {selectedPriority && (
        <div
          className="selected-priority"
          style={{ color: priorities.find(p => p.text === selectedPriority)?.color }}
        >
          Selected Priority: {selectedPriority}
        </div>
      )}
    </div>
  );
}

export default PriorityDropdown;
