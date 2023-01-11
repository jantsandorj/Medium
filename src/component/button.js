import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
export default function Button({ text, size, className, color1 }) {
  const style = {
    backgroundColor: color1,
    borderRadius: "50px",
    borderStyle: "none",
    width: size && size === "large" ? "12rem" : "7rem",
    height: size && size === "large" ? "3rem" : "2.5rem",
    // padding: size && size == "large" ? "5rem 3rem" : "1rem 1rem",
    color: "white",
  };
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <button
        style={style}
        size={size}
        className={className}
        color1={color1}
        onClick={handleShow}
      >
        {text}
      </button>
      <>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    </>
  );
}
