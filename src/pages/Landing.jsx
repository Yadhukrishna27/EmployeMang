import React from 'react'
import { Row,Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Landing() {
  return (
    <>
        <div className="w-99 d-flex justify-content-center align-items-center" style={{height:'99vh',backgroundColor:'light'}}>
        <div className='w-75'>
            <h1 style={{textAlign:'center'}}>Welcome to Employe Management System</h1>
            <p style={{textAlign:'center'}}>A simple and efficient application to manage your Office's data.</p>
            <Row className='d-flex my-5'>
                <Col md={6}>
                <h1>Employe Management</h1>
                    <p style={{textAlign:'center'}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque eaque labore ex quis facilis quidem laudantium officia illum, deserunt commodi nobis, a praesentium quaerat, laborum numquam est omnis. Officia, culpa.</p>
                    <Link to={"/home"} className='btn btn-primary'>Let's Go</Link>
                </Col>
                <Col md={6}>
                    <img src="https://img.freepik.com/free-vector/colleagues-working-together-project_74855-6308.jpg" alt="" className='img-fluid w-99' />


                </Col>
            </Row>
        </div>
    </div>
    </>
  )
}

export default Landing