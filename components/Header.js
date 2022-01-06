import React, { useState, useEffect, MouseEvent, Component} from 'react';
import { render } from 'react-dom';
import Container from 'react-bootstrap/Container';
import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import Row from 'react-bootstrap/Row';
import Stack from 'react-bootstrap/Stack';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import Link from 'next/link';
import Offcanvas from 'react-bootstrap/Offcanvas'


export default function Header() {

  const [showOffCanvas, setShowOffCanvas] = useState(false);
  const handleCloseOffCanvas = () => setShowOffCanvas(false);
  const handleShowOffCanvas = () => setShowOffCanvas(true);

  return (
    <>

      <Offcanvas show={showOffCanvas} onHide={handleCloseOffCanvas} placement='end'>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="mt-3" >
          <p className="h6 text-dark-blue">GET STARTED - CONTACT US</p>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="d-flex flex-column mb-3">
        <h3 className=" mb-auto">
        Interested in solving your problem with Thinking Big?
          </h3>
          
          <Form className="">
          <Form.Group className="mb-3" controlId="firstLastName">
            <Form.Label className="p small text-grey">FIRST AND LAST NAME</Form.Label>
            <Form.Control type="email" placeholder="" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="orgName">
            <Form.Label className="p small text-grey">ORGANIZATION NAME</Form.Label>
            <Form.Control type="email" placeholder="" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="email">
            <Form.Label className="p small text-grey">EMAIL ADDRESS</Form.Label>
            <Form.Control type="email" placeholder="" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="lodaction">
            <Form.Label className="p small text-grey">LOCATION</Form.Label>
            <Form.Control type="email" placeholder="" />
          </Form.Group>

          <Form.Group className="mb-4" controlId="formGridState">
            <Form.Label className="p small text-grey">EXPECTED NUMBER OF PLAYERS</Form.Label>
            <Form.Select defaultValue="Please select...">
              <option>Please select...</option>
              <option>Less than 1000</option>
              <option>1000-5000</option>
              <option>5000-10,000</option>
              <option>10,000-20,000</option>
              <option>20,000 +</option>
            </Form.Select>
          </Form.Group>
          <Button className="btn btn-primary w-full" type="submit">
            SUBMIT
          </Button>
          </Form>
        
        </Offcanvas.Body>
      </Offcanvas>
    
      <Navbar className="px-md-5 px-1" fixed="top">
      <Navbar.Brand href="#home">
        <img src="/TBlogo.svg" alt="Thinking Big Logo"/>
      </Navbar.Brand>
      <Nav className="ms-auto">
        <Nav.Link href="#home">
          <Button className="btn btn-primary arrow" onClick={handleShowOffCanvas}>
            GET STARTED
          </Button>
        </Nav.Link>
        <Nav.Link className="pe-0" href="#home">
          <Button className="btn btn-primary menu">
            
          </Button>
        </Nav.Link>
       </Nav>
      </Navbar>
    
</>
  )
}
