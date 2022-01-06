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

      <main>
        <Container fluid className="px-0 v-100 align-items-center d-flex">
        <Row className="px-md-5">
          <Col md={12}>
          <h6 className="text-grey">THINKING BIG</h6>
            <Row className="">
              <Col md={6}>
                <h1>
                World-class software + consulting solutions
                </h1>
              </Col>
              <Col md={6}>
              <hr className="mt-2 mb-4"/>
                <Row>
                  <Col md={4}>
                    <Link href="/">
                    <a className="text-dark"><h4 className="d-arrow">Services</h4></a>
                    </Link>
                  </Col>
                  <Col md={8}>
                    <p className="text-grey mb-2">
                    For 20 years, Thinking Big's interconnected services—software, web development and consulting—have helped clients of all sizes tackle their industry's toughest challenges. 
                    </p>
                  </Col>
                </Row>
              <hr className="mb-4" />
                <Row>
                  <Col md={4}>
                  <a className="text-dark"><h4 className="d-arrow">Technology</h4></a>
                  </Col>
                  <Col md={8}>
                    <p className="text-grey mb-2">
                    Technology only works when it's the right choice for the right reasons. We're committed to innovation, matching the technology to the problem, and ultimately creating solutions that last.
                    </p>
                  </Col>
                </Row>
              <hr className="mb-4" />
                <Row>
                  <Col md={4}>
                  <a className="text-dark"><h4 className="d-arrow">People</h4></a>
                  </Col>
                  <Col md={8}>
                    <p className="text-grey mb-3">
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
      </main>

      <Footer />
    </Container>
    </>
  )
}
