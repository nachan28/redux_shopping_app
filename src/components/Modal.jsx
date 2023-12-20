import React from "react";

export const Modal = () => {
  return (
    <aside>
      <div className="modal-container">
        <div className="modal">
          <h4>買い物かごを空にしますか？</h4>
          <div className="btn-container">
            <button className="btn confirm-btn">OK</button>
            <button className="btn clear-btn">やめとく</button>
          </div>
        </div>
      </div>
    </aside>
  );
};
