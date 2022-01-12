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

  const [showModal1, setShowModal1] = useState(false);
  const handleCloseModal1 = () => setShowModal1(false);
  const handleShowModal1 = () => setShowModal1(true);

  const [showModal2, setShowModal2] = useState(false);
  const handleCloseModal2 = () => setShowModal2(false);
  const handleShowModal2 = () => setShowModal2(true);

  const [showModal3, setShowModal3] = useState(false);
  const handleCloseModal3 = () => setShowModal3(false);
  const handleShowModal3 = () => setShowModal3(true);

  const [showModal4, setShowModal4] = useState(false);
  const handleCloseModal4 = () => setShowModal4(false);
  const handleShowModal4 = () => setShowModal4(true);


  return (

    <>

    
    <Container fluid className="px-0">
      <Head>
        <title>THINKING BIG</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <main>
        {/*hero area*/}
        <Container fluid className="px-2 px-md-4 px-lg-5 v-full">
        <Row className="mt-5 px-xl-2">
          <Col md={12} className="mt-5 pt-5 px-xl-1">
          <p className="h6 text-grey">THINKING BIG</p>
            <Row className="align-items- d-flex">
              <Col xl={6}>
                <h1 className="text-dark">
                World-class software + consulting solutions
                </h1>
              </Col>
              <Col xl={6} className="">
              <hr className="mb-4"/>
                <Row>
                  <Col md={3} lg={2} xl={4} className="mb-3">
                    <Link href="/#services">
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
                  <Col md={3} lg={2} xl={4} className="mb-3">
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
                <Col md={3} lg={2} xl={4} className="mb-3">
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
              <hr className="mb-4" />
              </Col>
            </Row>
          </Col>
        </Row>
        </Container>

        {/*video loop 1*/}
        <Container fluid className="mb-0">
        <Row className="mb-0">
          <Col xs={12} className="px-0 px-md-3">
            <video className='w-full pull-up' autoPlay loop muted>
              <source src="./aurora.mp4" type='video/mp4' />
            </video>
          </Col>
        </Row>
        </Container>

        {/*services*/}
        <Container id="services" fluid className="px-2 px-md-4 px-lg-5 v-services">
        <Row className="mt-5">
          <Col md={12} className="mt-5 pt-5">
            <p className="h6 text-grey ">THINKING BIG &gt; SERVICES</p>
            <Row className="pb-3 mb-3 pb-lg-5 mb-lg-5">
              <Col lg={11} xl={8}>
                <h2 className="text-dark mb-lg-4 mb-xl-5">
                  Our refined processes are the solution to your software problems
                </h2>
              </Col>
            </Row>
            <Row>       
              <Col xl={10} >
                <Row>
                  <Col md={3} className="mb-4 mb-0">
                    <p className="text-grey mono">A.</p>
                    <hr className="d-none d-md-block"/>
                    <h4 className="text-dark">
                    Application Services
                    </h4>
                    <p className="text-grey mt-3">
                    Whether the solution calls for software, web development, a mobile application or AI automation, our teams have the expertise to tackle your toughest challenges.
                    </p>
                    <Button onClick={handleShowModal1} variant="link" className="text-dark bold mono elbow-arrow p-0" >
                      LEARN MORE
                    </Button>
                    <hr className="d-md-none"/>
                  </Col>
                  <Col md={3} className="mb-4 mb-0">
                    <p className="text-grey mono">B.</p>
                    <hr className="d-none d-md-block"/>
                    <h4 className="text-dark d-none d-md-block">
                    Business <br /> Services
                    </h4>
                    <h4 className="text-dark d-md-none">
                    Business Services
                    </h4>
                    <p className="text-grey mt-3">
                    The business consultants at Thinking Big work with organizations to identify organizational objectives, transform their operations and achieve lasting change.
                    </p>
                    <Button onClick={handleShowModal2} variant="link" className="text-dark bold mono elbow-arrow p-0">
                      LEARN MORE
                    </Button>
                    <hr className="d-md-none"/>
                  </Col>
                  <Col md={3} className="mb-4 mb-0">
                    <p className="text-grey mono">C.</p>
                    <hr className="d-none d-md-block"/>
                    <h4 className="text-dark">
                    Project Management
                    </h4>
                    <p className="text-grey mt-3">
                    Effective Project Management is vital for an organization's success. Trust our people to efficiently guide projects and coach your team with methods tailored to your needs.
                    </p>
                    <Button onClick={handleShowModal3} variant="link" className="text-dark bold mono elbow-arrow p-0">
                      LEARN MORE
                    </Button>
                    <hr className="d-md-none"/>
                  </Col>
                  <Col md={3} className="mb-4 mb-0">
                    <p className="text-grey mono">D.</p>
                    <hr className="d-none d-md-block"/>
                    <h4 className="text-dark d-none d-md-block">
                    Cyber <br /> Protection
                    </h4>
                    <h4 className="text-dark d-md-none">
                    Cyber Protection
                    </h4>
                    <p className="text-grey mt-3">
                    With a thorough knowledge of regulations, policies and IT security practices, our privacy specialists generate and implement risk mitigation strategies to ensure your customers remain protected.
                    </p>
                    <Button onClick={handleShowModal4} variant="link" className="text-dark bold mono elbow-arrow p-0">
                        LEARN MORE
                    </Button>
                    <hr className="d-md-none"/>
                  </Col>
                </Row> 
              </Col>
            </Row>
          </Col>
        </Row>
        </Container>

        {/*video loop 1*/}
        <Container fluid >
        <Row>
          <Col md={12} className="px-0 px-md-3">
            <video className='w-full pull-up-2' autoPlay loop muted>
              <source src="./overpass.mp4" type='video/mp4' />
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
