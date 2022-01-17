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
  
  return (
    <>
      <footer className="no-brdr">

      <Container fluid className="mb-4 mb-xl-5 pt-xl-3 pb-sm-4 pb-xl-0">
        <Row className="mt-5 px-xl-5 px-lg-4 px-md-3 mb-xl-4">
          <Col md={12} className="mt-5 mt-lg-4 pt-5">
            <Row className="align-items-center d-flex mb-4 py-md-5 pb-lg-4 pt-lg-5 py-xl-3">
              <Col md={6} className="brdr-rght-grey">
                <h2 className="h1 text-dark">
                Remake <br />  your future with us
                </h2>
              </Col>
               <Col md={6} lg={4} xl={3} className="ps-md-5 text-grey">
                 <p className="mb-3 lead">
                   For a competitive advantage you need intelligent solutions. At Thinking Big, we help organizations tackle and solve their own unique and complex challenges. Find out more.
                </p>
                 <Button className="btn btn-primary arrow">
                   CONTACT US
                 </Button>
               </Col>
            </Row>
            <hr className="mb-5"/>
            <Row className="">
              <Col xs={12} md={3}>
                <p className="mono text-dark mb-4">&#169; THINKING BIG 2022</p>
              </Col>
              <Col xs={12} md={3} className="mb-2 px-md-0">
              <p className="small text-grey mono ">OUR SITE</p>
                <ul className="ps-4">
                  <li className="mb-2"><a href="#" className="text-dark">Option 1</a></li>
                  <li className="mb-2"><a href="#" className="text-dark">Option 2</a></li>
                  <li className="mb-2"><a href="#" className="text-dark">Option 3</a></li>
                  <li className="mb-2"><a href="#" className="text-dark">Option 4</a></li>
                  <li className="mb-2"><a href="#" className="text-dark">Option 5</a></li>
                </ul>
              </Col>
              <Col xs={12} md={3} className="mb-2 px-md-0">
              <p className="small text-grey mono">SOCIAL MEDIA</p>
                <ul className="ps-4">
                  <li className="mb-2"><a href="#" className="text-dark">Option 1</a></li>
                  <li className="mb-2"><a href="#" className="text-dark">Option 2</a></li>
                  <li className="mb-2"><a href="#" className="text-dark">Option 3</a></li>
                  <li className="mb-2"><a href="#" className="text-dark">Option 4</a></li>
                  <li className="mb-2"><a href="#" className="text-dark">Option 5</a></li>
                </ul>
              </Col>
              <Col xs={12} md={3} className="mb-2 px-md-0">
              <p className="small text-grey mono">CONTACT INFO</p>
              <ul className="ps-4">
                  <li className="mb-2"><a href="#" className="text-dark">Option 1</a></li>
                  <li className="mb-2"><a href="#" className="text-dark">Option 2</a></li>
                  <li className="mb-2"><a href="#" className="text-dark">Option 3</a></li>
                  <li className="mb-2"><a href="#" className="text-dark">Option 4</a></li>
                  <li className="mb-2"><a href="#" className="text-dark">Option 5</a></li>
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>

      </footer>
    </>
  )
}
