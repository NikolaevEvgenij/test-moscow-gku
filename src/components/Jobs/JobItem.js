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
                     <Card.Title>{job.title}</Card.Title>
                     <Card.Subtitle className='mb-2 text-muted'>
                        {job.salary}
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

         <Modal show={showDetails} onHide={handleClose}>
            <Modal.Header closeButton>
               <Modal.Title>{job.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
               <p>{job.description}</p>
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
