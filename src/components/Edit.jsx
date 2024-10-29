import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { updateemp } from '../services/allApis';
import { toast } from 'react-toastify';

function Edit({data,render}) {
    const [show, setShow] = useState(false);
    const [selectedEmployee, setSelectedEmployee] = useState(data);
    console.log(selectedEmployee)

    const handleEdit = () => {
        setSelectedEmployee(data);
        setShow(true);
    };

    const handleUpdate = async () => {

        const { _id, firstname, lastname, age, qualification, email } = selectedEmployee;
        const res = await updateemp(_id, { firstname, lastname, age, qualification, email });
        if (res.status === 200) {
            toast.success('Employee updated successfully');
            setShow(false);
            render(res)

        } else {
            toast.error('Failed to update employee');
        }
    }


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <button className='btn' onClick={handleShow}>
            <i className="fa-solid fa-pen fa-xl"   onClick={() => handleEdit()}  style={{ color: "#000000", marginLeft: '10px' }} />
            </button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Edit Student Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>


                    <input type="text" value={selectedEmployee?.firstname} onChange={(e) => setSelectedEmployee({ ...selectedEmployee, firstname: e.target.value })} placeholder='Firstname' className="form-control mb-3" />
                    <input type="text" value={selectedEmployee?.lastname} onChange={(e) => setSelectedEmployee({ ...selectedEmployee, lastname: e.target.value })} placeholder='Lastname' className="form-control mb-3" />
                    <input type="Number" value={selectedEmployee?.age} onChange={(e) => setSelectedEmployee({ ...selectedEmployee, age: e.target.value })} placeholder='Age' className="form-control mb-3" />
                    <input type="text" value={selectedEmployee?.qualification} onChange={(e) => setSelectedEmployee({ ...selectedEmployee, qualification: e.target.value })} placeholder='Qualification' className="form-control mb-3" />
                    <input type="email" value={selectedEmployee?.email} onChange={(e) => setSelectedEmployee({ ...selectedEmployee, email: e.target.value })} placeholder='Email' className="form-control mb-3" />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleUpdate}>Update</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Edit