import React, { useContext } from 'react'
import { BookContext } from '../context/BookStoreContext'
import { FaTimes } from 'react-icons/fa'
const Modal = ({ modalVal }) => {
  const { isModalOpen, closeModal } = useContext(BookContext)
  return (
    <div
      className={`${
        isModalOpen ? 'modal-overlay show-modal' : 'modal-overlay'
      }`}
    >
      <div className="modal-container">
        <img src={modalVal.img} alt="" />
        <h3>{modalVal.title}</h3>
        <p>{modalVal.genre}</p>
        <p>{modalVal.discription}</p>
        <button>Continue Reading</button>
        <button className="close-modal-btn" onClick={closeModal}>
          <FaTimes></FaTimes>
        </button>
      </div>
    </div>
  )
}

export default Modal
