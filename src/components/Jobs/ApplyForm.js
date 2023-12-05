import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { useForm } from "@formspree/react";

const ApplyForm = ({ show, onHide }) => {
   const [formData, setFormData] = useState({
      fullName: "",
      email: "",
      phone: "",
   });

   const [state, handleSubmit] = useForm("xgejgevr");

   if (state.succeeded) {
      setTimeout(() => {
         onHide();
      }, 2000);
   }

   if (state.errors) {
      console.log(state.errors);
   }

   const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
   };

   return (
      <Modal show={show} onHide={onHide}>
         <Modal.Header closeButton>
            <Modal.Title>Форма отклика</Modal.Title>
         </Modal.Header>
         <Modal.Body>
            {(state.succeeded && (
               <p>Спасибо! Мы с вами свяжемся</p>
            )) || (
               <Form onSubmit={handleSubmit}>
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
                     type='submit'
                     disabled={
                        !formData.fullName ||
                        !formData.email
                     }
                     className='mt-2 mb-2'
                  >
                     Отправить
                  </Button>
               </Form>
            )}
         </Modal.Body>
      </Modal>
   );
};

export default ApplyForm;
