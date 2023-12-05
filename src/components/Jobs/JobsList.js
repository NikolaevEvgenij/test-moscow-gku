import React, { useState } from "react";
import { Pagination, Form } from "react-bootstrap";

import JobItem from "./JobItem";
import { jobsData } from "../../consts/jobsFromXML";

const JobList = () => {
   const [currentPage, setCurrentPage] = useState(1);
   const [jobsPerPage] = useState(5);
   const [filter, setFilter] = useState({
      title: "",
      minSalary: "",
      showWithoutSalary: false,
   });

   // Фильтрация вакансий
   const filteredJobs = jobsData.filter((job) => {
      return (
         job.jobName
            .toLowerCase()
            .includes(filter.title.toLowerCase()) &&
         (!filter.showWithoutSalary || job.salary) &&
         (!filter.minSalary ||
            parseInt(job.salary, 10) >=
               parseInt(filter.minSalary, 10))
      );
   });

   // Пагинация
   const indexOfLastJob = currentPage * jobsPerPage;
   const indexOfFirstJob = indexOfLastJob - jobsPerPage;
   const currentJobs = filteredJobs.slice(
      indexOfFirstJob,
      indexOfLastJob
   );

   const paginate = (pageNumber) =>
      setCurrentPage(pageNumber);

   return (
      <div>
         <h1>Вакансии</h1>
         <Form className='mb-4'>
            <Form.Group
               controlId='formJobTitle'
               className='mb-2'
            >
               <Form.Label>Название вакансии</Form.Label>
               <Form.Control
                  type='text'
                  placeholder='Введите название вакансии'
                  value={filter.title}
                  onChange={(e) => {
                     setCurrentPage(1);
                     setFilter({
                        ...filter,
                        title: e.target.value,
                     });
                  }}
               />
            </Form.Group>

            <Form.Group
               controlId='formMinSalary'
               className='mb-2'
            >
               <Form.Label>
                  Размер зарплаты (минимальный)
               </Form.Label>
               <Form.Control
                  type='number'
                  placeholder='Минимальная зарплата'
                  value={filter.minSalary}
                  onChange={(e) => {
                     setCurrentPage(1);
                     setFilter({
                        ...filter,
                        minSalary: e.target.value,
                     });
                  }}
               />
            </Form.Group>

            <Form.Group
               controlId='formShowWithoutSalary'
               className='mb-2'
            >
               <Form.Check
                  type='checkbox'
                  label='Не показывать вакансии без зарплаты'
                  checked={filter.showWithoutSalary}
                  onChange={(e) => {
                     setCurrentPage(1);
                     setFilter({
                        ...filter,
                        showWithoutSalary: e.target.checked,
                     });
                  }}
               />
            </Form.Group>
         </Form>
         {filteredJobs ? (
            currentJobs.map((job) => (
               <JobItem key={job.id} job={job} />
            ))
         ) : (
            <p>Таких вакансий нет!</p>
         )}
         <Pagination>
            {Array.from({
               length: Math.ceil(
                  filteredJobs.length / jobsPerPage
               ),
            }).map((_, index) => (
               <Pagination.Item
                  key={index + 1}
                  onClick={() => paginate(index + 1)}
               >
                  {index + 1}
               </Pagination.Item>
            ))}
         </Pagination>
      </div>
   );
};

export default JobList;
