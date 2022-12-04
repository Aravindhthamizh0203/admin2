import React from 'react'

function Createuser() {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-lg-6'>
                    <lable>name</lable>
                    <input type={"text"} className='form-control' />
                </div>
                <div className='col-lg-6'>
                    <lable>E-Mail</lable>
                    <input type={"mail"} className='form-control' />
                </div>
                <div className='col-lg-4'>
                    <lable>country</lable>
                    <select className='form-control'>
                        <option>-*-</option>
                        <option>India</option>
                        <option>Amreica</option>
                    </select>
                </div>
                <div className='col-lg-4'>
                    <lable>state</lable>
                    <select className='form-control'>
                        <option>-*-</option>
                        <option>Tamilnadu</option>
                        <option>Puducherry</option>
                    </select>
                </div>
                <div className='col-lg-4'>
                    <lable>city</lable>
                    <select className='form-control'>
                        <option>-*-</option>
                        <option>Villupuram</option>
                        <option>Puducherry</option>
                    </select>
                </div>
                <div className='col-lg-3 mt-5'>
                    <input type={"submit"} value="Create" className='btn btn-primary' />
                </div>
            </div>
        </div>
    )
}

export default Createuser