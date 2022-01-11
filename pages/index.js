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

  return (

    <>

    
    <Container fluid className="px-0">
      <Head>
        <title>THINKING BIG</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      {/*application services modal*/}
      <Modal centered size="lg" show={showModal1} onHide={handleCloseModal1}>
        <Modal.Header closeButton className="p-md-4 pe-4 bg-dark hard-edge">
          <p className="text-white mono pe-5 mt-2"> APPLICATION SERVICES</p>
        </Modal.Header>
        <Modal.Body className="p-md-4 hard-edge no-brdr">
          <Row>
            <Col>
            Hello
            </Col>
            <Col>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>


      <main>

        {/*hero area*/}
        <Container className="px-xl-0 px-lg-3 px-md-1 v-full align-items-center d-flex">
        <Row className="justify-content-center align-items-center d-flex pt-lg-2 mt-lg-2 pt-xl-0 mt-xl-0">
          <Col md={12} className="ps-xl-0">
          <p className="h6 text-grey">THINKING BIG</p>
            <Row className="align-items-top d-flex">
              <Col xl={6} >
                <h1 className="text-dark mb-lg-4 mb-xl-5">
                World-class software + consulting solutions
                </h1>
              </Col>
              <Col xl={6} className="pt-xl-2 px-lg-3 px-xl-0">
              <hr className="mb-4 mt-lg-0 mt-xl-4"/>
                <Row className="px-0">
                  <Col md={3} lg={2} xl={4} className="mb-2">
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

        {/*video loop 1*/}
        <Container fluid className="justify-content-center align-items-center d-flex">
        <Row>
          <Col md={12} className="px-0 px-md-3">
            <video className='w-full pull-up' autoPlay loop muted>
              <source src="./aurora.mp4" type='video/mp4' />
            </video>
          </Col>
        </Row>
        </Container>

        {/*services*/}
        <Container id="services" className="px-xl-0 px-lg-3 px-md-1 v-services d-flex">
        <Row className="mt-4">
          <Col md={12} className="ps-xl-0 mt-5 pt-5">
            <p className="h6 text-grey">THINKING BIG &gt; SERVICES</p>
            <Row className="pb-3 mb-3 pb-lg-5 mb-lg-5">
              <Col lg={11} xl={8}>
                <h2 className="text-dark mb-lg-3 mb-xl-4">
                Our refined processes are the solution to your software problems
                </h2>
              </Col>
            </Row>
            <Row>       
              <Col xl={10} >
                <Row className="px-lg-2">
                  <Col md={3} className="mb-4 mb-0">
                    <p className="text-grey mono">A.</p>
                    <hr className="d-none d-md-block"/>
                    <h4 className="text-dark">
                    Application Services
                    </h4>
                    <p className="text-grey mt-3">
                    Whether the solution calls for software, web development, a mobile application or AI automation, our teams have the expertise to tackle your toughest challenges.
                    </p>
                    <Button onClick={handleShowModal1} variant="link" className="text-dark bold mono elbow-arrow" >
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
                    <Button href="/" variant="link" className="text-dark bold mono elbow-arrow">
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
                    <Button href="/" variant="link" className="text-dark bold mono elbow-arrow">
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
                    <Button href="/" variant="link" className="text-dark bold mono elbow-arrow">
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
      </main>

      <Footer />
    </Container>
    </>
  )
}
