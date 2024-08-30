import React, { useState } from "react";
import "./PhoneModal.css";

function PhoneModal({ trigger, phoneNumber }) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(phoneNumber)
      .then(() => {
        alert("전화번호가 복사되었습니다.");
      })
      .catch((err) => {
        alert("복사에 실패했습니다.");
      });
  };

  return (
    <>
      <span onClick={openModal}>{trigger}</span>
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <button className="close-button" onClick={closeModal}>
                &times;
              </button>
            </div>
            <div className="modal-body">
              <h2>전화번호</h2>
              <p>{phoneNumber}</p>
              <div className="modal-buttons">
                <button className="copy-button" onClick={copyToClipboard}>
                  복사
                </button>
                <button className="cancel-button" onClick={closeModal}>
                  취소
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default PhoneModal;
