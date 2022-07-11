import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

function ModalAlert(props:any) {
  //modal is shown when button is clicked
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  //const handleShow = () => setShow(true);
  
  return (
    <section> 
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>{props.children}</Modal.Title>
              </Modal.Header>
              <Modal.Body>{props.children}</Modal.Body>
            </Modal>    
    </section>
  );
}
export default ModalAlert;
