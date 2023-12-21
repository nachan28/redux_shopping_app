import React from "react";
import { useDispatch } from "react-redux";
import { clearCart } from "../features/cart/cartSlice";
import { closeModal } from "../features/modal/modalSlice";

export const Modal = () => {
  const dispatch = useDispatch();
  return (
    <aside>
      <div className="modal-container">
        <div className="modal">
          <h4>買い物かごを空にしますか？</h4>
          <div className="btn-container">
            <button
              className="btn confirm-btn"
              onClick={() => {
                dispatch(clearCart());
                dispatch(closeModal());
              }}
            >
              OK
            </button>
            <button
              className="btn clear-btn"
              onClick={() => {
                dispatch(closeModal());
              }}
            >
              やめとく
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
};
