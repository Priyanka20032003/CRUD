// import React from 'react'

// const DeletePopup = () => {
//   return (
//       <div className='border w-25'>
//           <h3>Confirm Delete</h3>
//           <p>Are you sure you want to delete this item ?</p>
//           <div className='text-end'>
//               <button className='btn btn-secondary'>close</button>
//               <button className='btn btn-danger mx-2'>delete</button>
//           </div>
//     </div>
//   )
// }

// export default DeletePopup

import React from "react";
import './ViewUser.css'

const DeletePopup = ({ onDelete, onClose }) => {
  return (
    <div className="border w-25 p-3 position-fixed" style={{ background: "white", top: "30%", left: "35%" }}>
      <h3>Confirm Delete</h3>
      <p>Are you sure you want to delete this item?</p>
      <div className="text-end">
        <button className="btn btn-secondary" onClick={onClose}>Close</button>
        <button className="btn btn-danger mx-2" onClick={onDelete}>Delete</button>
      </div>
    </div>
  );
};

export default DeletePopup;
