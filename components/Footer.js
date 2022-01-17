import Head from 'next/head';
import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { useRouter } from 'next/router';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Placeholder from 'react-bootstrap/Placeholder';
import Offcanvas from 'react-bootstrap/Offcanvas'


export default function Footer() {

  const [showContact, setShowContact] = useState(false);
  const handleCloseContact = () => setShowContact(false);
  const handleShowContact = () => setShowContact(true);
  
  return (
    <>
      <footer className="no-brdr">

      <Container fluid className="mb-4 mb-xl-5 pt-xl-3 pb-sm-4 pb-xl-0">
        <Row className="mt-5 px-xl-5 px-lg-4 px-md-3 mb-xl-4">
          <Col md={12} className="mt-5 pt-5">
            <Row className="align-items-center d-flex mb-4 mb-md-5 mb-lg-4 py-md-5">
              <Col md={6} className="brdr-rght-grey">
                <h2 className="h1 text-dark">
                Remake <br />  your future with us
                </h2>
              </Col>
               <Col md={6} lg={4} xl={3} className="ps-md-5 text-grey">
                 <p className="mb-3 lead">
                   For a competitive advantage you need intelligent solutions. At Thinking Big, we help organizations tackle and solve their own unique and complex challenges. <span className="bold">Find out more.</span>
                </p>
                 <Button onClick={handleShowContact} className="btn btn-primary arrow">
                   CONTACT US
                 </Button>
               </Col>
            </Row>
            <hr className="my-4"/>
            <Row className="">
              <Col xs={12} md={3} className="mb-3">
                <p className="mono text-dark">&#169; 2022 THINKING BIG<br /></p>
                <a href="#" className="mono small text-dark">TERMS</a>
                <a href="#" className="mono small text-dark ms-2">PRIVACY</a>
              </Col>
              <Col xs={12} md={3} className="mb-2 pt-1 px-md-0">
              <p className="small text-grey mono ">OUR SITE</p>
                <ul className="ps-4">
                  <li className="mb-2"><a href="#services" className="text-dark">Services</a></li>
                  <li className="mb-2"><a href="#technology" className="text-dark">Technology</a></li>
                  <li className="mb-2"><a href="#people" className="text-dark">People</a></li>
                  <li className="mb-2"><a href="#" className="text-dark">Menu</a></li>
                </ul>
              </Col>
              <Col xs={12} md={3} className="mb-2 pt-1 px-md-0">
              <p className="small text-grey mono">SOCIAL MEDIA</p>
                <ul className="ps-4">
                  <li className="mb-2"><a href="https://www.facebook.com/thinkingbig.net" className="text-dark">Facebook</a></li>
                  <li className="mb-2"><a href="https://twitter.com/ThinkingBigInc" className="text-dark">Twitter</a></li>
                  <li className="mb-2"><a href="https://www.linkedin.com/company/thinking-big-inc/" className="text-dark">LinkedIn</a></li>
                  <li className="mb-2"><a href="https://www.instagram.com/wearethinkingbig/" className="text-dark">Instagram</a></li>
                </ul>
              </Col>
              <Col xs={12} md={3} className="mb-2 pt-1 px-md-0">
              <p className="small text-grey mono">CONTACT INFO</p>
              <ul className="ps-4">
                  <li className="mb-2 small"><a href="mailto: hello@thinkingbig.net" className="text-dark">hello@thinkingbig.net</a></li>
                  <li className="mb-2"><a href="tel:1-902-367-3447" className="text-dark">1 (902) 367-3447</a></li>
                  <li className="mb-2"><a href="tel:1-977-733-3447" className="text-dark">1 (877) 733-3447</a><p>(Toll-free)</p></li>
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      </footer>

      {/* Get started - Contact */}  
      <Offcanvas show={showContact} onHide={handleCloseContact} placement='end'>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="mt-2" >
          <p className="small mono text-dark bold">GET STARTED - CONTACT US</p>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="">
          <h3 className="mb-5">
          Interested in solving your problem with Thinking Big?
          </h3>  
          <Form className="">
          <Form.Group className="mb-4" controlId="firstLastName">
            <Form.Label className="mb-0"><p className="small mb-0 mono text-grey bold">FIRST AND LAST NAME</p></Form.Label>
            <Form.Control type="email" placeholder="" className="hard-edge"/>
          </Form.Group>
          <Form.Group className="mb-4" controlId="orgName">
          <Form.Label className="mb-0"><p className="small mb-0 mono text-grey bold">ORGANIZATION NAME</p></Form.Label>
            <Form.Control type="email" placeholder="" className="hard-edge"/>
          </Form.Group>
          <Form.Group className="mb-4" controlId="email">
          <Form.Label className="mb-0"><p className="small mb-0 mono text-grey bold">EMAIL ADDRESS</p></Form.Label>
            <Form.Control type="email" placeholder="" className="hard-edge"/>
          </Form.Group>
          <Form.Group className="mb-4" controlId="location">
          <Form.Label className="mb-0"><p className="small mb-0 mono text-grey bold">PHONE NUMBER</p></Form.Label>
            <Form.Control type="email" placeholder="" className="hard-edge"/>
          </Form.Group>
          <Form.Group className="mb-4" controlId="formGridState">
          <Form.Label className="mb-0"><p className="small mb-0 mono text-grey bold">HOW DID YOU HEAR ABOUT US?</p></Form.Label>
            <Form.Select defaultValue="Please select..." className="hard-edge mb-3 mb-md-0">
              <option>Please select...</option>
              <option>Less than 1000</option>
              <option>1000-5000</option>
              <option>5000-10,000</option>
              <option>10,000-20,000</option>
              <option>20,000 +</option>
            </Form.Select> 
          </Form.Group>
          <Form.Group className="mb-2" controlId="location">
          <Form.Label className="mb-0"><p className="small mb-0 mono text-grey bold">PLEASE GIVE US A BRIEF OF THE PROBLEM YOU'D LIKE US TO SOLVE. CONTEXT WILL ALLOW US TO CONNECT YOU TO THE RIGHT TEAM RIGHT AWAY.</p></Form.Label>
            <Form.Control type="email" placeholder="" as="textarea" rows={4} className="hard-edge"/>
          </Form.Group>
          <p className="small mb-4">Please see our <a href="/" className="text-dark">Privacy Policy</a> regarding what we do with this information.</p>
          <Button className="btn btn-dark w-full" type="submit">
            SUBMIT
          </Button>
          </Form>
        </Offcanvas.Body>
      </Offcanvas>

    </>
  )
}
