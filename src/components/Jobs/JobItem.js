import React, { useState } from "react";
import {
   Button,
   Modal,
   Card,
   Stack,
} from "react-bootstrap";

import ApplyForm from "./ApplyForm";

const JobItem = ({ job }) => {
   const [showDetails, setShowDetails] = useState(false);
   const [showApplyForm, setShowApplyForm] =
      useState(false);

   const handleClose = () => setShowDetails(false);
   const handleShow = () => setShowDetails(true);

   const handleApply = () => {
      setShowDetails(false);
      setShowApplyForm(true);
   };

   return (
      <div>
         <Card className='mb-2'>
            <Card.Body>
               <Stack direction='horizontal'>
                  <Stack>
                     <Card.Title>{job.jobName}</Card.Title>
                     <Card.Subtitle className='mb-2 text-muted'>
                        {job.salary
                           ? `${job.salary} ${job.currency}`
                           : "Не указано"}
                     </Card.Subtitle>
                  </Stack>

                  <Button
                     variant='primary'
                     onClick={handleShow}
                  >
                     Подробнее
                  </Button>
               </Stack>
            </Card.Body>
         </Card>

         <Modal
            show={showDetails}
            onHide={handleClose}
            size='lg'
         >
            <Modal.Header closeButton>
               <Modal.Title>{job.jobName}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
               <p className='h4'>
                  Зарплата:{" "}
                  {job.salary
                     ? `${job.salary} ${job.currency}`
                     : "Не указано"}
               </p>
               <p>
                  <small>
                     Специализация: {job.industry}
                  </small>
               </p>
               <p>
                  <small>
                     Требуемый опыт работы:{" "}
                     {job.requirement.experience}
                  </small>
               </p>
               <p>
                  <small>
                     Образование:{" "}
                     {job.requirement.education}
                  </small>
               </p>
               <small>
                  <p>Регион: {job.region}</p>
               </small>
               <p>
                  Описание:
                  <br />
                  {job.description}
               </p>

               <p>Компаня: {job.company.name}</p>
               <Button variant='info' onClick={handleApply}>
                  Откликнуться
               </Button>
            </Modal.Body>
         </Modal>

         <ApplyForm
            show={showApplyForm}
            onHide={() => setShowApplyForm(false)}
         />
      </div>
   );
};

export default JobItem;
