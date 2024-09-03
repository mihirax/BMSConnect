import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './Registrations.css'
const Regisistrations = () => {
  return (
    <div className='mt-5'>
        <div className='contain'>
        
        <table class="table">
  <thead>
    <tr className="table-dark">
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td classname="d-flex justify-content-between">
        <button className='btn btn-succcess'> Read</button>
        <button className='btn btn-primary'>Update</button>
        <button className='btn btn-danger'>Delete</button>
      </td>
    </tr>
    
  </tbody>
</table>
</div>
    </div>
  )
}

export default Regisistrations
