//import PropTypes from 'prop-types'
import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './Book.css'
class Book extends Component {
//   const books = {second: third};
  render() {
    return (
    //   <div classNameName='container'>
    //     <div classNameName="row">
    //         <div classNameName="col-md-12">
    //             <div classNameName="card">
    //                 <div classNameName="card-header">
    //                     <h4>Books
    //                         <Link to={'add-book'} classNameName='book'>Add Book</Link>
    //                     </h4>
    //                 </div>
    //                 <div classNameName="card-body">

    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    //   </div>


    <div className="container py-5">
    <div className="row">
    <div className="col-md-12">
        <div className="card shadow">
        <div className="card-header">
            <h4>View Books
            <Link to={'add-book'}  className="btn btn-primary btn-sm float-end">Add Book</Link>
            </h4>
        </div>

        <div className="card-body table-responsive">
            <table id="mydataTable" className="table table-striped table-bordered display nowrap">
            <thead>
                <tr>
                <th>ID</th>
                <th>Category Name</th>
                <th>Image</th>
                <th>Status</th>
                <th>Edit</th>
                <th>Delete</th>
                </tr>
            </thead>
            <tbody>
               

            </tbody>
            </table>
        </div>


        </div>
    </div>
    </div>
    </div>
    )
  }
}


export default Book;