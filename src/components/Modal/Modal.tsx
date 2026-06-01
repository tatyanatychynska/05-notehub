import { createPortal } from "react-dom";
import css from "./Modal.module.css";
import { useEffect } from "react";
import type { ReactNode } from "react";

interface ModalProps {
  onClose: () => void;
  children: ReactNode;
}

export default function Modal({ onClose, children }: ModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);
  return createPortal(
    <div
      className={css.backdrop}
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div className={css.modal} onClick={(e) => e.stopPropagation()}>
        <button type="button" className={css.closeBtn} onClick={onClose}>
          ×
        </button>
        {children}
      </div>
    </div>,
    document.body,
  );
}
