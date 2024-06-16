// import React from "react";

// import "./Modal.css";

// function Modal(props) {
//   return (
//     <div
//       className="modal"
//       onClick={() => (props.onClose ? props.onClose() : "")}
//     >
//       <div
//         className="modal_content custom-scroll"
//         onClick={(event) => event.stopPropagation()}
//       >
//         {props.children}
//       </div>
//     </div>
//   );
// }

// export default Modal;

import React from "react";
import "./Modal.css";

function Modal(props) {
  const handleOverlayClick = () => {
    if (props.onClose) {
      props.onClose();
    }
  };

  const stopPropagation = (event) => {
    event.stopPropagation();
  };

  return (
    <div className="modal" onClick={handleOverlayClick}>
      <div className="modal_content custom-scroll" onClick={stopPropagation}>
        {props.children}
      </div>
    </div>
  );
}

export default Modal;