import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Add from '../components/Add';
import Edit from '../components/Edit';
import { toast } from 'react-toastify';
import { getemp, deletemp } from '../services/allApis';


function Home() {
    const [render,setRender]=useState('')
    const [gettemp, setgetemp] = useState([])


    const handleget = async () => {
        const res = await getemp()
        console.log(res)
        if (res.status === 200) {
            setgetemp(res.data);
        } else {
            console.error('Failed to fetch employees');
        }
    }
    const handledel = async (id) => {
        const res = await deletemp(id)
        if (res.status === 200) {
            toast.success('Employee deleted successfully');
            setgetemp(gettemp.filter(emp => emp._id !== id));
        } else {
            toast.error('Failed to delete employee');
        }
    }

    useEffect(() => {
        handleget()

    }, [render])

    return (
        <>
            <Navbar className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home">
                        <i className="fa-solid fa-circle-user" style={{ color: "#000000", }} />{' '}
                        Employe Management
                    </Navbar.Brand>
                </Container>
            </Navbar>
            <div className="m-3">
                <Add render={setRender} />
                <table className='table table-bordered mt-4'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Age</th>
                            <th>Qualification</th>
                            <th>Email</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>

                        {gettemp.length > 0 ? (
                            gettemp.map((emp, index) => (
                                <tr key={index}>
                                    <td>{index+1}</td>
                                    <td>{emp.firstname}</td>
                                    <td>{emp.lastname}</td>
                                    <td>{emp.age}</td>
                                    <td>{emp.qualification}</td>
                                    <td>{emp.email}</td>
                                    <td>
                                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                            <i className="fa-solid fa-trash fa-xl" onClick={() => handledel(emp._id)} style={{ color: "#c90825", marginRight: '10px' }} />
                                            <div style={{ borderLeft: '1px solid #000', height: '24px', margin: '0 10px' }}></div>
                                            
                                            <Edit render={setRender} data={emp}/>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="6" className="text-center">No Employees Found</td>
                            </tr>
                        )}
                    </tbody>

                </table>
            </div>
        </>
    )
}

export default Home