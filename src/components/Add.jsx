import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { toast } from 'react-toastify';
import { adddata } from '../services/allApis';

function Add({render}) {

    const [emp, setemp] = useState({
        firstname: "", lastname: "", age: "", qualification: "", email: ""
    })

    const handleadd = async () => {
        console.log(emp)
        const { firstname, lastname, age, qualification, email } = emp
        if (!firstname || !lastname || !age || !qualification || !email) {
            toast.warning("Invalid Inputs")
        }
        else {
            const res = await adddata(emp)
            console.log(res)
            if (res.status == 200) {
                toast.success("Employee Added")
                setemp({
                    firstname: "", lastname: "", age: "", qualification: "", email: ""

                })
                render(res)
                handleClose()
            } else {
                toast.error("Employee Added Failed")
            }
        }

    }

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <button className='btn btn-info ' onClick={handleShow}>Add Employee</button>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Add Employee Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>


                    <input type="text" onChange={(e) => { setemp({ ...emp, firstname: e.target.value }) }} placeholder='Firstname' className="form-control mb-3" />
                    <input type="text" onChange={(e) => { setemp({ ...emp, lastname: e.target.value }) }} placeholder='Lastname' className="form-control mb-3" />
                    <input type="Number" onChange={(e) => { setemp({ ...emp, age: e.target.value }) }} placeholder='Age' className="form-control mb-3" />
                    <input type="text" onChange={(e) => { setemp({ ...emp, qualification: e.target.value }) }} placeholder='Qualification' className="form-control mb-3" />
                    <input type="email" onChange={(e) => { setemp({ ...emp, email: e.target.value }) }} placeholder='Email' className="form-control mb-3" />


                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleadd}>Save</Button>
                </Modal.Footer>
            </Modal>

        </>
    )
}

export default Add