import Head from 'next/head';
import Header from '@components/Header';
import Footer from '@components/Footer';
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

export default function Home() {
  return (

    <>

    <Container fluid className="px-0">
      <Head>
        <title>THINKING BIG</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <main className="">
        <Container className="px-xl-0 px-lg-3 px-md-1 v-full align-items-center d-flex">
        <Row className="justify-content-center align-items-center d-flex pt-lg-2 mt-lg-2 pt-xl-0 mt-xl-0">
          <Col md={12} className="ps-xl-0">
          <h6 className="text-grey" >THINKING BIG</h6>
            <Row className="align-items-top d-flex">
              <Col xl={6} >
                <h1 className="mb-lg-4 mb-xl-5">
                World-class software + consulting solutions
                </h1>
              </Col>
              <Col xl={6} className="pt-xl-0 px-lg-3 px-xl-0">
              <hr className="mb-4 mt-lg-0 mt-xl-3"/>
                <Row className="px-0">
                  <Col md={3} lg={2} xl={4} className="mb-2">
                    <Link href="/">
                    <a className="text-dark h5 d-arrow">Services</a>
                    </Link>
                  </Col>
                  <Col md={9} lg={9} xl={8}>
                    <p className="text-grey mb-xl-3">
                    For 20 years, Thinking Big's interconnected services—software, web development and consulting—have helped clients of all sizes tackle their industry's toughest challenges. 
                    </p>
                  </Col>
                </Row>
              <hr className="mb-4" />
                <Row>
                  <Col md={3} lg={2} xl={4} className="mb-2">
                    <Link href="/">
                    <a className="text-dark h5 d-arrow">Technology</a>
                    </Link>
                  </Col>
                  <Col md={9} lg={9} xl={8}>
                    <p className="text-grey mb-xl-3">
                    Technology only works when it's the right choice for the right reasons. We're committed to innovation, matching the technology to the problem, and ultimately creating solutions that last.
                    </p>
                  </Col>
                </Row>
              <hr className="mb-4" />
                <Row>
                <Col md={3} lg={2} xl={4} className="mb-2">
                  <Link href="/">
                    <a className="text-dark h5 d-arrow">People</a>
                    </Link>
                  </Col>
                  <Col md={9} lg={9} xl={8}>
                    <p className="text-grey mb-xl-3">
                    Our world-class group of developers, business consultants, designers and privacy specialists are ready to help you to transform your business.
                    </p>
                  </Col>
                </Row>
              <hr className="" />
              </Col>
            </Row>
          </Col>
        </Row>
        </Container>

        <Container fluid className="px-md-3 justify-content-center align-items-center d-flex">
        <Row>
          <Col md={12} >
            <video className='w-full pull-up' autoPlay loop muted>
              <source src="./aurora.mp4" type='video/mp4' />
            </video>
          </Col>
        </Row>
        </Container>


      </main>

      <Footer />
    </Container>
    </>
  )
}
