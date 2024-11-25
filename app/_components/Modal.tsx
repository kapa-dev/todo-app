import { ModalProps } from "../lib/types";

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;
  
    return (
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 1000,
        }}
      >
        <div
          style={{
            background: "white",
            padding: "20px",
            borderRadius: "8px",
            width: "400px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          }}
        >
          <button
            onClick={onClose}
            style={{
              background: "none",
              border: "none",
              color: "black",
              fontSize: "16px",
              position: "absolute",
              right: "20px",
              top: "20px",
              cursor: "pointer",
            }}
          >
            ✖
          </button>
          {children}
        </div>
      </div>
    );
  };
  
  export default Modal;