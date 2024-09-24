import React from 'react'
import {createPortal} from 'react-dom'
import '../../App.css';


const Modal = ({message, children}) => {
  return createPortal (
    <div className="modal-overlay">
     <div className="modal">
     <div className="modal-content">
        <p>{message}</p>
        </div>
        {children}
     </div>
    </div>,
    document.getElementById('modal-root')
  )
}

export default Modal