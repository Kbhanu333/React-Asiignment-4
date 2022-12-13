import React from 'react'
import { Link } from 'react-router-dom';
import BasicTable from './BasicTable'


const Student = () => {
  return (
    <div>
      <div className="card-body">
        <div className='addStudentLink'>
          <Link className='studentButton' to='/addStudent'>
            Add New Student
          </Link>
        </div>
        <h1 className='headerr' style={{  fontSize: '40px', color: 'black' }}>
          Student Details
        </h1>
        <BasicTable />
      </div>
    </div>
  )
}

export default Student;