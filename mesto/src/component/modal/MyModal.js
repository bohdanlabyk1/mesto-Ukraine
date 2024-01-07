import './modal.css'

// Стилі для модального вікна
const MyModal = ({ isOpen, onClose, children }) => {
  return (
    <>
      {isOpen && (
        <div className="modal-overlay" onClick={() => onClose(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={onClose}>
            </button>
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default MyModal;