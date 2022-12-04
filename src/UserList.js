import React from 'react'
import Createuser from './Createuser';
import { Link, useSearchParams } from 'react-router-dom';


function UserList() {
    const data = [{
        Id: 1,
        Name: "Tiger Nixon",
        Position: "System Architect",
        Office: "Edinburgh",
        Age: "61",
        Startdate: "2011/04/25",
        Salary: "$ 320,800"
    }, {
        Id: 2,
        Name: "Garrett Winters",
        Position: "Accountant",
        Office: "Tokyo",
        Age: "63",
        Startdate: "2011/07/25",
        Salary: "$ 170,750"
    }, {
        Id: 3,
        Name: "Ashton Cox",
        Position: "Junior Technical Author",
        Office: "San Francisco",
        Age: "66",
        Startdate: "2009/01/12",
        Salary: "$ 86,000"
    }]

    return (
        <>
            <div class="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 class="h3 mb-0 text-gray-800">User</h1>
                <Link to="/portal/Createuser" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">
                    <i class="fas fa-download fa-sm text-white-50"></i>Createuser</Link>
            </div>
            <div class="card shadow mb-4">
                <div class="card-header py-3">
                    <h6 class="m-0 font-weight-bold text-primary">Personal Info</h6>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Position</th>
                                    <th>Office</th>
                                    <th>Age</th>
                                    <th>Start date</th>
                                    <th>Salary</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tfoot>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Position</th>
                                    <th>Office</th>
                                    <th>Age</th>
                                    <th>Start date</th>
                                    <th>Salary</th>
                                    <th>Action</th>
                                </tr>
                            </tfoot>
                            <tbody>
                                {
                                    data.map((user) => {
                                        return (
                                            <tr>
                                                <td>{user.Id}</td>
                                                <td>{user.Name}</td>
                                                <td>{user.Position}</td>
                                                <td>{user.Office}</td>
                                                <td>{user.Age}</td>
                                                <td>{user.Startdate}</td>
                                                <td>{user.Salary}</td>
                                                <th>
                                                    <Link to={`/portal/userview/${user.Id}`} className='btn btn-info btn-sm mr-1'>View</Link>
                                                    <button className='btn btn-primary btn-sm mr-1'>Edit</button>
                                                    <button className='btn btn-danger btn-sm mr-1'>Delete</button>
                                                </th>
                                            </tr>
                                        )
                                    })
                                }

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserList