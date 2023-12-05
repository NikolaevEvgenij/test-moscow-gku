import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";

const ApplyForm = ({ show, onHide }) => {
   const [formData, setFormData] = useState({
      fullName: "",
      email: "",
      phone: "",
   });

   const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
   };

   const handleSubmit = () => {
      // Ваша логика отправки данных на почту
      console.log("Отправка данных:", formData);
      onHide();
   };

   return (
      <Modal show={show} onHide={onHide}>
         <Modal.Header closeButton>
            <Modal.Title>Форма отклика</Modal.Title>
         </Modal.Header>
         <Modal.Body>
            <Form>
               <Form.Group controlId='formFullName'>
                  <Form.Label>ФИО</Form.Label>
                  <Form.Control
                     type='text'
                     placeholder='Введите ваше ФИО'
                     name='fullName'
                     value={formData.fullName}
                     onChange={handleInputChange}
                     required
                  />
               </Form.Group>

               <Form.Group controlId='formEmail'>
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                     type='email'
                     placeholder='Введите ваш email'
                     name='email'
                     value={formData.email}
                     onChange={handleInputChange}
                     required
                  />
               </Form.Group>

               <Form.Group controlId='formPhone'>
                  <Form.Label>Телефон</Form.Label>
                  <Form.Control
                     type='text'
                     placeholder='Введите ваш телефон'
                     name='phone'
                     value={formData.phone}
                     onChange={handleInputChange}
                  />
               </Form.Group>

               <Button
                  variant='primary'
                  onClick={handleSubmit}
                  disabled={
                     !formData.fullName || !formData.email
                  }
               >
                  Отправить
               </Button>
            </Form>
         </Modal.Body>
      </Modal>
   );
};

export default ApplyForm;
