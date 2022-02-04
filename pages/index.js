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

  const [showModal5, setShowModal5] = useState(false);
  const handleCloseModal5 = () => setShowModal5(false);
  const handleShowModal5 = () => setShowModal5(true);

  const [showModal6, setShowModal6] = useState(false);
  const handleCloseModal6 = () => setShowModal6(false);
  const handleShowModal6 = () => setShowModal6(true);

  const [showModal7, setShowModal7] = useState(false);
  const handleCloseModal7 = () => setShowModal7(false);
  const handleShowModal7 = () => setShowModal7(true);

  const [showModal8, setShowModal8] = useState(false);
  const handleCloseModal8 = () => setShowModal8(false);
  const handleShowModal8 = () => setShowModal8(true);

  const [showModal9, setShowModal9] = useState(false);
  const handleCloseModal9 = () => setShowModal9(false);
  const handleShowModal9 = () => setShowModal9(true);

  const [showModal10, setShowModal10] = useState(false);
  const handleCloseModal10 = () => setShowModal10(false);
  const handleShowModal10 = () => setShowModal10(true);

  const [showModal11, setShowModal11] = useState(false);
  const handleCloseModal11 = () => setShowModal11(false);
  const handleShowModal11 = () => setShowModal11(true);

  const [showModal12, setShowModal12] = useState(false);
  const handleCloseModal12 = () => setShowModal12(false);
  const handleShowModal12 = () => setShowModal12(true);


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
        <Container fluid id="home" className="mb-4 mb-xl-5 py-xl-3 pb-xl-5">
        <Row className="mt-5 px-xl-5 px-lg-4 px-md-3">
          <Col md={12} className="mt-4 pt-5">
          <p className="h6 text-grey mt-2 mb-xl-0">THINKING BIG</p>
            <Row className="align-items-top d-flex">
              <Col xl={7}>
                <h1 className="text-dark mb-4">
                Reimagine what's possible
                </h1>
              </Col>
              <Col xl={5} className="">
              <hr className="mb-4 mt-1"/>
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
                    <Link href="/#technology">
                    <a className="text-dark h5 d-arrow">Technology</a>
                    </Link>
                  </Col>
                  <Col md={9} lg={9} xl={8}>
                    <p className="text-grey mb-xl-3">
                    Technology only works when it's the right choice for the right reasons. We're committed to innovation, matching the technology to the problem, and creating solutions that last.
                    </p>
                  </Col>
                </Row>
              <hr className="mb-4" />
                <Row>
                <Col md={3} lg={2} xl={4} className="mb-3">
                  <Link href="/#people">
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
        <Container fluid>
        <Row>
          <Col xs={12} className="px-0 px-md-3 px-lg-4">
            <video className='w-full' autoPlay loop muted>
              <source src="./aurora.mp4" type='video/mp4' />
            </video>
          </Col>
        </Row>
        </Container>

        {/*services*/}
        <Container id="services" fluid className="mb-2 mb-md-4 mb-xl-5 py-xl-3">
        <Row className="px-xl-5 px-lg-4 px-md-3">
          <Col md={12} className="mt-5 pt-5">
            <p className="h6 mt-4 text-grey">THINKING BIG &gt; SERVICES</p>
            <Row className="pb-3 mb-3 pb-lg-4 mb-lg-4 pb-xl-5 mb-xl-4">
              <Col  xl={10}>
                <h2 className="text-dark mb-md-3">
                Digital solutions to transform your operations and modernize your business
                </h2>
              </Col>
            </Row>
            <Row className="mb-xl-4">       
              <Col xl={10}>
                <Row>
                  <Col md={4} className="mb-4 mb-xl-5">
                    <p className="text-grey mono">A.</p>
                    <hr className="d-none d-md-block mt-0"/>
                    <h4 className="text-dark">
                    Business Services
                    </h4>
                    <p className="text-grey mt-3">
                    Thinking Big's business services will help you modernize and reimagine your operations with speed and agility, to tackle your industry's toughest challenges.
                    </p>
                    <Button onClick={handleShowModal1} variant="link" className="text-dark bold mono modal-icon p-0" >
                      LEARN MORE
                    </Button>
                    <hr className="d-md-none"/>
                  </Col>
                  <Col md={4}  className="mb-4 mb-md-5">
                    <p className="text-grey mono">B.</p>
                    <hr className="d-none d-md-block mt-0"/>
                    <h4 className="text-dark">
                    Software Engineering
                    </h4>
                    <p className="text-grey mt-3">
                    Companies must adapt and innovate to meet those expectations. At Thinking Big we deliver applications that are intuitive, useful and future-proof.
                    </p>
                    <Button onClick={handleShowModal2} variant="link" className="text-dark bold mono modal-icon p-0">
                      LEARN MORE
                    </Button>
                    <hr className="d-md-none"/>
                  </Col>
                  <Col md={4} className="mb-4 mb-md-5">
                    <p className="text-grey mono">C.</p>
                    <hr className="d-none d-md-block mt-0"/>
                    <h4 className="text-dark">
                    Human-centered Design
                    </h4>
                    <p className="text-grey mt-3">
                    Human-centered Design allows our team, with you, to reimagine the user experience and, in the process, create products and services that people actually use.
                    </p>
                    <Button onClick={handleShowModal3} variant="link" className="text-dark bold mono modal-icon p-0">
                      LEARN MORE
                    </Button>
                    <hr className="d-md-none"/>
                  </Col>
                  <Col md={4} className="mb-4 mb-md-5">
                    <p className="text-grey mono">D.</p>
                    <hr className="d-none d-md-block mt-0"/>
                    <h4 className="text-dark ">
                    Artificial Intelligence
                    </h4>
                    <p className="text-grey mt-3">
                    At Thinking Big, we can help you capitalize on the power of AI automation, while saving you time, energy and precious resources.
                    </p>
                    <Button onClick={handleShowModal4} variant="link" className="text-dark bold mono modal-icon p-0">
                        LEARN MORE
                    </Button>
                    <hr className="d-md-none"/>
                  </Col>
                  <Col md={4} className="mb-4 mb-md-5">
                    <p className="text-grey mono">E.</p>
                    <hr className="d-none d-md-block mt-0"/>
                    <h4 className="text-dark">
                    Data Gathering + Management
                    </h4>
                    <p className="text-grey mt-3">
                    If you'd like to quickly and easily modernize your business, we can design a solution using Cloud Services that scales to meet your unique needs.
                    </p>
                    <Button onClick={handleShowModal5} variant="link" className="text-dark bold mono modal-icon p-0">
                        LEARN MORE
                    </Button>
                    <hr className="d-md-none"/>
                  </Col>
                  <Col md={4} className="mb-4 mb-md-5">
                    <p className="text-grey mono">F.</p>
                    <hr className="d-none d-md-block mt-0"/>
                    <h4 className="text-dark ">
                    Cloud Services
                    </h4>
                    <p className="text-grey mt-3">
                    Businesses of all sizes use data gathered from the web to study markets, generate leads, compare prices, detect trends or even to analyze social media posts.
                    </p>
                    <Button onClick={handleShowModal6} variant="link" className="text-dark bold mono modal-icon p-0">
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

        {/*video loop 2*/}
        <Container fluid>
        <Row>
          <Col xs={12} className="px-0 px-md-3 px-lg-4">
            <video className='w-full' autoPlay loop muted>
              <source src="./server.mp4" type='video/mp4' />
            </video>
          </Col>
        </Row>
        </Container>

        {/*technology*/}
        <Container id="technology" fluid className="mb-2 mb-md-4 mb-xl-5 py-xl-3">
        <Row className="px-xl-5 px-lg-4 px-md-3">
          <Col md={12} className="mt-5 pt-5">
            <p className="h6 mt-4 text-grey">THINKING BIG &gt; TECHNOLOGY</p>
            <Row className="pb-3 mb-3 pb-lg-5 mb-lg-5">
              <Col lg={10} xl={8}>
                <h2 className="text-dark mb-md-4 mb-xl-5 pe-md-5">
                  We work with cutting edge tools to make sustainable technology
                </h2>
              </Col>
            </Row>
            <Row className="mb-xl-4">      
              <Col xl={10} >
                <Row>
                  <Col md={3} className="mb-4 mb-0">
                    <p className="text-grey mono">A.</p>
                    <hr className="d-none d-md-block"/>
                    <h4 className="text-dark">
                    Case Study 1
                    </h4>
                    <p className="text-grey mt-3">
                    It's in the nature of technology to evolve, so our team is always searching for the most effective and innovative tools to best solve your problems.
                    </p>
                    <Button onClick={handleShowModal5} variant="link" className="text-dark bold mono modal-icon p-0" >
                      LEARN MORE
                    </Button>
                    <hr className="d-md-none"/>
                  </Col>
                  <Col md={3} className="mb-4 mb-0">
                    <p className="text-grey mono">B.</p>
                    <hr className="d-none d-md-block"/>
                    <h4 className="text-dark">
                    Case Study 2
                    </h4>
                    <p className="text-grey mt-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <Button onClick={handleShowModal6} variant="link" className="text-dark bold mono modal-icon p-0">
                      LEARN MORE
                    </Button>
                    <hr className="d-md-none"/>
                  </Col>
                  <Col md={3} className="mb-4 mb-0">
                    <p className="text-grey mono">C.</p>
                    <hr className="d-none d-md-block"/>
                    <h4 className="text-dark">
                    Case Study 3
                    </h4>
                    <p className="text-grey mt-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <Button onClick={handleShowModal7} variant="link" className="text-dark bold mono modal-icon p-0">
                      LEARN MORE
                    </Button>
                    <hr className="d-md-none"/>
                  </Col>
                  <Col md={3} className="mb-4 mb-0 d-none">
                    <p className="text-grey mono">D.</p>
                    <hr className="d-none d-md-block"/>
                    <h4 className="text-dark">
                    Case Study 2
                    </h4>
                    <p className="text-grey mt-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <Button onClick={handleShowModal8} variant="link" className="text-dark bold mono modal-icon p-0">
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

        {/*video loop 3*/}
        <Container fluid>
        <Row>
          <Col xs={12} className="px-0 px-md-3 px-lg-4">
            <video className='w-full' autoPlay loop muted>
              <source src="./overpass.mp4" type='video/mp4' />
            </video>
          </Col>
        </Row>
        </Container>

        {/*people*/}
        <Container id="people" fluid className="mb-2 mb-md-4 mb-xl-5 py-xl-3">
        <Row className="px-xl-5 px-lg-4 px-md-3">
          <Col md={12} className="mt-5 pt-5">
            <p className="h6 mt-4 text-grey">THINKING BIG &gt; PEOPLE</p>
            <Row className="pb-3 mb-3 pb-lg-5 mb-lg-5">
              <Col md={10} xl={8}>
                <h2 className="text-dark mb-md-4 mb-xl-5 ">
                  We are in a constant state of growth and evolution
                </h2>
              </Col>
            </Row>
            <Row className="mb-xl-4">      
              <Col xl={10} >
                <Row>
                  <Col md={3} className="mb-4 mb-0">
                    <p className="text-grey mono">A.</p>
                    <hr className="d-none d-md-block"/>
                    <h4 className="text-dark">
                    Leadership 
                    </h4>
                    <p className="text-grey mt-3">
                    With our world-class expertise, we not only guide organizations through an evolving technological landscape, we develop and foster lasting internal capabilities.
                    </p>
                    <Button onClick={handleShowModal9} variant="link" className="text-dark bold mono modal-icon p-0" >
                      LEARN MORE
                    </Button>
                    <hr className="d-md-none"/>
                  </Col>
                  <Col md={3} className="mb-4 mb-0">
                    <p className="text-grey mono">B.</p>
                    <hr className="d-none d-md-block"/>
                    <h4 className="text-dark">
                    Careers
                    </h4>
                    <p className="text-grey mt-3">
                    Thinking Big looks for outstanding people driven by curiosity to solve demanding problems.
                    </p>
                    <p className="text-grey">
                    If that sounds like you, we have career opportunities for new graduates and experienced professionals.
                    </p>
                    <Button onClick={handleShowModal10} variant="link" className="text-dark bold mono modal-icon p-0">
                      LEARN MORE
                    </Button>
                    <hr className="d-md-none"/>
                  </Col>
                  <Col md={3} className="mb-4 mb-0 ">
                    <p className="text-grey mono">C.</p>
                    <hr className="d-none d-md-block"/>
                    <h4 className="text-dark">
                    Benefits
                    </h4>
                    <p className="text-grey mt-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <Button onClick={handleShowModal11} variant="link" className="text-dark bold mono modal-icon p-0">
                      LEARN MORE
                    </Button>
                    <hr className="d-md-none"/>
                  </Col>
                  <Col md={3} className="mb-4 mb-0 d-none">
                    <p className="text-grey mono">D.</p>
                    <hr className="d-none d-md-block"/>
                    <h4 className="text-dark">
                    Case Study 2
                    </h4>
                    <p className="text-grey mt-3">
                    With a thorough knowledge of regulations, policies and IT security practices, our privacy specialists generate and implement risk mitigation strategies to ensure your customers remain protected.
                    </p>
                    <Button onClick={handleShowModal12} variant="link" className="text-dark bold mono modal-icon p-0">
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

        {/*by the numbers*/}
        <Container fluid>
        <Row className="px-2 px-md-2 px-lg-4 px-md-3">
          <Col xs={12} className="bg-dark p-3 p-xl-5">
            <Row className="p-3 py-lg-4 py-xl-5">
              <Col md={4} className="text-center">
                <h2 className="numbers mono text-white heavy">
                &gt;150
                </h2>
                <p className="text-light-grey mb-4 mb-md-0">This many things delivered</p>
                <hr className="white d-md-none"/>
              </Col>
              <Col md={4} className="text-center">
                <h2 className="numbers mono text-white heavy">
                200%
                </h2>
                <p className="text-light-grey mb-4 mb-md-0">Something about growth</p>
                <hr className="white d-md-none"/>
              </Col>
              <Col md={4} className="text-center">
                <h2 className="numbers mono text-white heavy">
                100+
                </h2>
                <p className="text-light-grey">Developers, Designers, Analysts, etc</p>
              </Col>
            </Row> 
          </Col>
        </Row>
        </Container>

      </main>

      <Footer />
    </Container>

    {/* MODALS */}

    {/*application services modal*/}
    <Modal centered size="lg" show={showModal1} onHide={handleCloseModal1}>
      <Modal.Header closeButton className="p-md-4 bg-dark text-white p mono hard-edge">
        THINKING BIG &gt; SERVICES &gt; A.
      </Modal.Header>
      <Modal.Body className="hard-edge p-3 p-md-4">
        <Row>  
          <Col lg={8} className="mb-2">
          <h3 className="text-dark mb-3">Business Services</h3>
            <p className="text-grey">
            Success starts with effective Project Management. Trust our people to efficiently guide projects and coach your team with methods tailored to your needs. We manage projects at all stages to ensure the best use of your time, talent, and budget. From Business Process Engineering to application development to artificial intelligence, organizations across multiple industries trust us to help them embrace a new future with confidence.
            </p>
            <p className="text-grey">
            As business becomes more competitive, successful companies put people first. With insights gained from a human-centered perspective, our Service Designers guide transformation for everyone, from users to customers to your own employees. We analyze issues holistically and create solutions with you, to effect change that has a lasting impact.   
            </p>
            <p className="text-grey">
            We also introduce Lean and Agile principles and practices to transform how your enterprise works, and to empower your people to sustain those skills.
            </p>
            <p className="text-grey">
            We're ready to help you to revitalize your business.
            </p>
          </Col>
          <Col lg={4} className="mb-3">
          <hr className="mt-1"/>
           <h5 className="text-dark mb-3">
            Sub-services
           </h5>
           <p className="text-grey small">
           Digital transformation and modernization
           </p>
           <p className="text-grey small">
           Project management, planning and reporting
           </p>
           <p className="text-grey small">
           Business process re-engineering (BPR)
           </p>
           <p className="text-grey small ">
           Service Design, facilitation, blueprinting and journey mapping
           </p>
           <p className="text-grey small">
           Business analysis
           </p>
          <hr />
           <h5 className="text-dark mb-3">
            Technology and processes
           </h5>
           <Row className="">
             <Col xs={1}>
             <img src="/scrum.svg" className="align-top icon icon-scrum"></img>
             </Col>
             <Col xs={10}>
             <p className="text-grey small ps-lg-1">
             Scrum to build organizational capacity
             </p>
             </Col>
           </Row>
           
           <Row className="">
             <Col xs={1}>
             <img src="/agile.svg" className="align-top icon icon-agile"></img>
             </Col>
             <Col xs={10}>
             <p className="text-grey small ps-lg-1">
             Lean + Agile processes
             </p>
             </Col>
           </Row>
           
           <Row>
             <Col xs={1} className="justify-center">
             <img src="/Gitlab.svg" className="align-top icon icon-gitlab"></img>
             </Col>
             <Col xs={10}>
             <p className="text-grey small ps-lg-1">
             Gitlab for planning and issue tracking
             </p>
             </Col>
           </Row>
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer className="d-md-none no-brdr pt-0">
        <Button onClick={handleCloseModal4}>Close</Button>
      </Modal.Footer>
    </Modal>
    
    {/*modal 2*/}
    <Modal centered size="lg" show={showModal2} onHide={handleCloseModal2}>
    <Modal.Header closeButton className="p-md-4 bg-dark text-white p mono hard-edge">
        THINKING BIG &gt; SERVICES &gt; B.
      </Modal.Header>
      <Modal.Body className="hard-edge p-3 p-md-4">
        <Row>  
          <Col lg={8} className="mb-2">
          <h3 className="text-dark mb-3">Software Engineering</h3>
            <p className="text-grey">
            We structure applications using Microservice architecture, in other words, as collections of maintainable and testable services that are independently deployable. We make systems flexible using Event-driven architecture which allows pieces of the application puzzle to speak to each other in real time. And we use a rapid, iterative approach for development and deployment by embracing the agile methodology company-wide.
             </p>
            <p className="text-grey">
            Whether the solution calls for software, web development or a mobile application, our engineers, architects, designers, analysts and testing professionals will develop the most effective and innovative tools to best solve your problems.
            </p>
            <p className="text-grey">
            If you're looking to transform your digital operations, we have the world-class expertise to tackle your toughest challenges and make your organization ready for whatever the future brings.
            </p>
            <p className="text-grey">
            We make it our business to make your business more efficient.
            </p>
          </Col>
          <Col lg={4} className="mb-3">
          <hr className="mt-1"/>
           <h5 className="text-dark mb-3">
            Sub-services
           </h5>
           <p className="text-grey small">
           Web and mobile application design and development
           </p>
           <p className="text-grey small">
           Microservice architecture
           </p>
           <p className="text-grey small">
           Event-driven architecture
           </p>
           <p className="text-grey small ">
           Project Management
           </p>
           <p className="text-grey small">
           Testing and Quality Assurance
           </p>
           <p className="text-grey small">
           Automation
           </p>
          <hr />
           <h5 className="text-dark mb-3">
            Technology and processes
           </h5>
           <Row className="">
             <Col xs={1}>
             <img src="/scrum.svg" className="align-top icon icon-scrum"></img>
             </Col>
             <Col xs={10}>
             <p className="text-grey small ps-lg-1">
             Microsoft Dynamics CRM
             </p>
             </Col>
           </Row>
           
           <Row className="">
             <Col xs={1}>
             <img src="/agile.svg" className="align-top icon icon-agile"></img>
             </Col>
             <Col xs={10}>
             <p className="text-grey small ps-lg-1">
             React
             </p>
             </Col>
           </Row>
           
           <Row>
             <Col xs={1} className="justify-center">
             <img src="/Gitlab.svg" className="align-top icon icon-gitlab"></img>
             </Col>
             <Col xs={10}>
             <p className="text-grey small ps-lg-1">
             Angular
             </p>
             </Col>
           </Row>

           <Row className="">
             <Col xs={1}>
             <img src="/scrum.svg" className="align-top icon icon-scrum"></img>
             </Col>
             <Col xs={10}>
             <p className="text-grey small ps-lg-1">
             Gherkin
             </p>
             </Col>
           </Row>
           
           <Row className="">
             <Col xs={1}>
             <img src="/agile.svg" className="align-top icon icon-agile"></img>
             </Col>
             <Col xs={10}>
             <p className="text-grey small ps-lg-1">
             Behavior-Driven Development (BDD)
             </p>
             </Col>
           </Row>
           
           <Row>
             <Col xs={1} className="justify-center">
             <img src="/Gitlab.svg" className="align-top icon icon-gitlab"></img>
             </Col>
             <Col xs={10}>
             <p className="text-grey small ps-lg-1">
             Selenium
             </p>
             </Col>
           </Row>

           <Row>
             <Col xs={1} className="justify-center">
             <img src="/Gitlab.svg" className="align-top icon icon-gitlab"></img>
             </Col>
             <Col xs={10}>
             <p className="text-grey small ps-lg-1">
             Git
             </p>
             </Col>
           </Row>

          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer className="d-md-none no-brdr pt-0">
        <Button onClick={handleCloseModal4}>Close</Button>
      </Modal.Footer>
    </Modal>

    {/*modal 3*/}
    <Modal centered size="lg" show={showModal3} onHide={handleCloseModal3}>
    <Modal.Header closeButton className="p-md-4 bg-dark text-white p mono hard-edge">
        THINKING BIG &gt; SERVICES &gt; C.
      </Modal.Header>
      <Modal.Body className="hard-edge p-3 p-md-4">
        <Row>  
          <Col lg={8} className="mb-2">
          <h3 className="text-dark mb-3">Human-centered Design</h3>
            <p className="text-grey">
            Human-Centered Design means solving problems with the people who will use the feature, tool, product or service instead of for them. And it's a significant distinction. It means making a deliberate effort to understand the point of view of the person experiencing the issue to be solved, whether that person is a customer or an employee, then working with them, designing, testing and iterating, to get the solution right.
            </p>
            <p className="text-grey">
            HCD shapes our work in Customer Experience (CX), web design and application usability and allows our solutions to feel truly inclusive and useful to the people who matter, those who use them. And what better way to have people adopt the tools and services you create than to include them in the creation process?
            </p>
            <p className="text-grey">
            Using proven and repeatable methodologies, our Service Design experts guide the journey from understanding the user to creating the solution. Teaming with our graphic designers and software engineers, we use everything from low tech paper representations to technology like Figma, a user interface design tool, to quickly and easily communicate, test and refine concepts.
            </p>
            <p className="text-grey">
            Our Human-centered Design ethos sets us apart. It allows our team, with you, to reimagine the user experience and, in the process, create products and services that people actually use.
            </p>
          </Col>
          <Col lg={4} className="mb-3">
          <hr className="mt-1"/>
           <h5 className="text-dark mb-3">
            Sub-services
           </h5>
           <p className="text-grey small">
           Web design, visual design and branding
           </p>
           <p className="text-grey small">
           Customer experience (CX) and application usability
           </p>
           <p className="text-grey small">
           Service Design, facilitation, blueprinting and journey mapping
           </p>
          <hr />
           <h5 className="text-dark mb-3">
            Technology and processes
           </h5>
           <Row className="">
             <Col xs={1}>
             <img src="/scrum.svg" className="align-top icon icon-scrum"></img>
             </Col>
             <Col xs={10}>
             <p className="text-grey small ps-lg-1">
             Adobe Creative Suite
             </p>
             </Col>
           </Row>
           
           <Row className="">
             <Col xs={1}>
             <img src="/agile.svg" className="align-top icon icon-agile"></img>
             </Col>
             <Col xs={10}>
             <p className="text-grey small ps-lg-1">
             VS Code
             </p>
             </Col>
           </Row>
           
           <Row>
             <Col xs={1} className="justify-center">
             <img src="/Gitlab.svg" className="align-top icon icon-gitlab"></img>
             </Col>
             <Col xs={10}>
             <p className="text-grey small ps-lg-1">
             Figma
             </p>
             </Col>
           </Row>

           <Row className="">
             <Col xs={1}>
             <img src="/scrum.svg" className="align-top icon icon-scrum"></img>
             </Col>
             <Col xs={10}>
             <p className="text-grey small ps-lg-1">
             Blender
             </p>
             </Col>
           </Row>
           
           <Row>
             <Col xs={1} className="justify-center">
             <img src="/Gitlab.svg" className="align-top icon icon-gitlab"></img>
             </Col>
             <Col xs={10}>
             <p className="text-grey small ps-lg-1">
             Object-oriented UX (OOUX)
             </p>
             </Col>
           </Row>

           <Row>
             <Col xs={1} className="justify-center">
             <img src="/Gitlab.svg" className="align-top icon icon-gitlab"></img>
             </Col>
             <Col xs={10}>
             <p className="text-grey small ps-lg-1">
             Design Thinking
             </p>
             </Col>
           </Row>

          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer className="d-md-none no-brdr pt-0">
        <Button onClick={handleCloseModal4}>Close</Button>
      </Modal.Footer>
    </Modal>

    {/*modal 4*/}
    <Modal centered size="lg" show={showModal4} onHide={handleCloseModal4}>
    <Modal.Header closeButton className="p-md-4 bg-dark text-white p mono hard-edge">
        THINKING BIG &gt; SERVICES &gt; D.
      </Modal.Header>
      <Modal.Body className="hard-edge p-3 p-md-4">
        <Row>  
          <Col lg={8} className="mb-2">
          <h3 className="text-dark mb-3">Artificial Intelligence</h3>
            <p className="text-grey">
            Artificial intelligence (AI) is quickly becoming an essential tool for organizations to stay competitive. Whether it's to personalize customer experiences (Conversational AI like chatbots and virtual agents), to read and analyze vast quantities of data (Data Analysis) or to identify the why behind decision-making (machine learning and causal AI) our AI professionals are helping organizations change how they do business.
            </p>
            <p className="text-grey">
            Deep Learning, a subfield of machine learning, feeds computers large amounts of data (images, text or sound) so that it can learn to recognize and distinguish new data at extremely high levels. These types of machine learning models are useful for establishing the correlation between an event and an outcome. Or for strategizing and predicting trends. How does that help businesses? Forecasting trends can give your organization valuable insights into a shifting market, and give you the edge on competitors. 
            </p>
            <p className="text-grey">
            Taken further, Causal AI can help identify the relationship between cause and effect. So, not only predicting a person’s behaviour (anticipating a purchase or a mouse-click) but understanding the root causes of the behaviour. Causal AI makes it possible to intervene and change those outcomes.
            </p>
            <p className="text-grey">
            Our Human-centered Design ethos sets us apart. It allows our team, with you, to reimagine the user experience and, in the process, create products and services that people actually use.
            </p>
          </Col>
          <Col lg={4} className="mb-3">
          <hr className="mt-1"/>
           <h5 className="text-dark mb-3">
            Sub-services
           </h5>
           <p className="text-grey small bold mb-1">
           Research
           </p>
            <ul className="text-grey square small ps-3">
              <li>Natural Language Processing</li>
              <li>Data analysis</li>
              <li>Trend analysis</li>
              <li>Conversational AI</li>
            </ul>

           <p className="text-grey small bold mb-1">
           Machine Learning
           </p>
           <ul className="text-grey square small ps-3">
              <li>Deep Learning</li>
              <li>Predictive (decision-making)</li>
              <li>Causal AI</li>
              <li>Modelling</li>
            </ul>
           
          <hr />
           <h5 className="text-dark mb-3">
            Technology and processes
           </h5>
           <Row className="">
             <Col xs={1}>
             <img src="/scrum.svg" className="align-top icon icon-scrum"></img>
             </Col>
             <Col xs={10}>
             <p className="text-grey small ps-lg-1 bold mb-1">
             Python
             </p>
             <ul className="text-grey square small ps-3">
              <li>In-house built Python libraries (e.g., for image recognition, data processing)</li>
              <li>Pytorch  for research</li>
              <li>TensorFlow - deep learning library</li>
            </ul>
             </Col>
           </Row>
           
           <Row className="">
             <Col xs={1}>
             <img src="/agile.svg" className="align-top icon icon-agile"></img>
             </Col>
             <Col xs={10}>
             <p className="text-grey small ps-lg-1">
             Microsoft .NET Framework
             </p>
             </Col>
           </Row>
           
           <Row>
             <Col xs={1} className="justify-center">
             <img src="/Gitlab.svg" className="align-top icon icon-gitlab"></img>
             </Col>
             <Col xs={10}>
             <p className="text-grey small ps-lg-1">
             Angular
             </p>
             </Col>
           </Row>

           <Row className="">
             <Col xs={1}>
             <img src="/scrum.svg" className="align-top icon icon-scrum"></img>
             </Col>
             <Col xs={10}>
             <p className="text-grey small ps-lg-1">
             .NET Core API
             </p>
             </Col>
           </Row>

          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer className="d-md-none no-brdr pt-0">
        <Button onClick={handleCloseModal4}>Close</Button>
      </Modal.Footer>
    </Modal>

    {/*modal 5*/}
    <Modal centered size="lg" show={showModal5} onHide={handleCloseModal5}>
    <Modal.Header closeButton className="p-md-4 bg-dark text-white p mono hard-edge">
        THINKING BIG &gt; SERVICES &gt; E.
      </Modal.Header>
      <Modal.Body className="hard-edge p-3 p-md-4">
        <Row>  
          <Col lg={8} className="mb-2">
          <h3 className="text-dark mb-3">Data Gathering and Management</h3>
            <p className="text-grey">
            One of the most efficient ways to get information from the internet is through data gathering, also known as data or web scraping. It is the process of importing information into a database where it can be cleaned up and analyzed. Commonly used for research, web scraping tools such as Selenium can browse through hundreds, or even thousands, of webpages to extract information that can then be processed.
            </p>
            <p className="text-grey">
            What kind of information? Businesses of all sizes use data gathered from the web to study markets, generate leads, compare prices, detect trends or even to analyze social media posts.
            </p>
            <p className="text-grey">
            Data Gathering and Management can give your business access to data from any website on the internet delivered exactly as you need it. It's an incredibly powerful tool you can use right now. At Thinking Big, we specialize in delivering custom data designed for your needs, quickly and reliably.  Come talk to us. 
            </p>
          </Col>
          <Col lg={4} className="mb-3">
          <hr className="mt-1"/>
           <h5 className="text-dark mb-3">
            Sub-services
           </h5>
           <p className="text-grey small">
           Data sourcing and gathering
           </p>
           <p className="text-grey small">
           Data analysis
           </p>
           <p className="text-grey small">
           Data delivery
           </p>
          <hr />
           <h5 className="text-dark mb-3">
            Technology and processes
           </h5>
           <Row className="">
             <Col xs={1}>
             <img src="/scrum.svg" className="align-top icon icon-scrum"></img>
             </Col>
             <Col xs={10}>
             <p className="text-grey small ps-lg-1">
             Python for AI
             </p>
             </Col>
           </Row>
           
           <Row className="">
             <Col xs={1}>
             <img src="/agile.svg" className="align-top icon icon-agile"></img>
             </Col>
             <Col xs={10}>
             <p className="text-grey small ps-lg-1">
             C Sharp (C#)
             </p>
             </Col>
           </Row>
           
           <Row>
             <Col xs={1} className="justify-center">
             <img src="/Gitlab.svg" className="align-top icon icon-gitlab"></img>
             </Col>
             <Col xs={10}>
             <p className="text-grey small ps-lg-1">
             Selenium for data scraping
             </p>
             </Col>
           </Row>

          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer className="d-md-none no-brdr pt-0">
        <Button onClick={handleCloseModal4}>Close</Button>
      </Modal.Footer>
    </Modal>

    {/*modal 6*/}
    <Modal centered size="lg" show={showModal6} onHide={handleCloseModal6}>
    <Modal.Header closeButton className="p-md-4 bg-dark text-white p mono hard-edge">
        THINKING BIG &gt; SERVICES &gt; F.
      </Modal.Header>
      <Modal.Body className="hard-edge p-3 p-md-4">
        <Row>  
          <Col lg={8} className="mb-2">
          <h3 className="text-dark mb-3">Cloud Services</h3>
            <p className="text-grey">
            Everyone talks about the “cloud” but what is it and how can Cloud Services help your business? Cloud Services refers to IT platforms, infrastructure and software that are hosted by third-party providers and made available to users through the internet. Businesses can access Cloud Services, such as dedicated servers and other hardware, as well as software and databases, to get up and running with nothing more than a computer and a network connection.
            </p>
            <p className="text-grey">
            Using Cloud Services provides a number of advantages over buying and maintaining your own infrastructure and software. Your business can rely on updated hardware, with dedicated servers, giving you the speed and processing power you need, when you need it. Cloud Services easily scale up or down based on usage requirements in real time. They can be set up quickly, and with lower start-up costs.
            </p>
            <p className="text-grey">
            Services such as Microsoft Dynamics use pre-built business applications that are secure and ready to roll out when you need them. Container Managed Services, such as Docker, allow developers to bundle, configure and deploy applications hosted in lightweight virtual environments. Managed Platform Services makes your IT costs more predictable and reliable, while reducing risk. 
            </p>
            <p className="text-grey">
            By helping businesses quickly and easily adapt and modernize, at a lower cost with increased flexibility, Cloud Services are transforming how businesses operate.
            </p>
          </Col>
          <Col lg={4} className="mb-3">
          <hr className="mt-1"/>
           <h5 className="text-dark mb-3">
            Sub-services
           </h5>
           <p className="text-grey small">
           Hosting applications and databases
           </p>
           <p className="text-grey small">
           Managing backups
           </p>
           <p className="text-grey small">
           Managed Platform Services
           </p>
           <p className="text-grey small">
           Container Managed Services
           </p>
          <hr />
           <h5 className="text-dark mb-3">
            Technology and processes
           </h5>
           <Row className="">
             <Col xs={1}>
             <img src="/scrum.svg" className="align-top icon icon-scrum"></img>
             </Col>
             <Col xs={10}>
             <p className="text-grey small ps-lg-1">
             Amazon Web Services (AWS)
             </p>
             </Col>
           </Row>
           
           <Row className="">
             <Col xs={1}>
             <img src="/agile.svg" className="align-top icon icon-agile"></img>
             </Col>
             <Col xs={10}>
             <p className="text-grey small ps-lg-1">
             Google Cloud (GCP)
             </p>
             </Col>
           </Row>
           
           <Row>
             <Col xs={1} className="justify-center">
             <img src="/Gitlab.svg" className="align-top icon icon-gitlab"></img>
             </Col>
             <Col xs={10}>
             <p className="text-grey small ps-lg-1">
             Azure (database functions)
             </p>
             </Col>
           </Row>

           <Row className="">
             <Col xs={1}>
             <img src="/agile.svg" className="align-top icon icon-agile"></img>
             </Col>
             <Col xs={10}>
             <p className="text-grey small ps-lg-1">
             Enabling technologies like Microsoft Dynamics
             </p>
             </Col>
           </Row>
           
           <Row>
             <Col xs={1} className="justify-center">
             <img src="/Gitlab.svg" className="align-top icon icon-gitlab"></img>
             </Col>
             <Col xs={10}>
             <p className="text-grey small ps-lg-1">
             Docker
             </p>
             </Col>
           </Row>

          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer className="d-md-none no-brdr pt-0">
        <Button onClick={handleCloseModal4}>Close</Button>
      </Modal.Footer>
    </Modal>

    {/*modal 7*/}
    <Modal centered size="lg" show={showModal7} onHide={handleCloseModal7}>
      <Modal.Header closeButton className="p-md-4 bg-dark text-white p mono hard-edge">
        THINKING BIG &gt; -
      </Modal.Header>
      <Modal.Body className="hard-edge p-3 p-md-4">
        <Row>
          <Col>

          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer className="d-md-none no-brdr pt-0">
        <Button onClick={handleCloseModal7}>Close</Button>
      </Modal.Footer>
    </Modal>

    {/*modal 8*/}
    <Modal centered size="lg" show={showModal8} onHide={handleCloseModal8}>
      <Modal.Header closeButton className="p-md-4 bg-dark text-white p mono hard-edge">
        THINKING BIG &gt; -
      </Modal.Header>
      <Modal.Body className="hard-edge p-3 p-md-4">
        <Row>
          <Col>

          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer className="d-md-none no-brdr pt-0">
        <Button onClick={handleCloseModal8}>Close</Button>
      </Modal.Footer>
    </Modal>

    {/*modal 9*/}
    <Modal centered size="lg" show={showModal9} onHide={handleCloseModal9}>
      <Modal.Header closeButton className="p-md-4 bg-dark text-white p mono hard-edge">
        THINKING BIG &gt; -
      </Modal.Header>
      <Modal.Body className="hard-edge p-3 p-md-4">
        <Row>
          <Col>

          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer className="d-md-none no-brdr pt-0">
        <Button onClick={handleCloseModal9}>Close</Button>
      </Modal.Footer>
    </Modal>

    {/*modal 10*/}
    <Modal centered size="lg" show={showModal10} onHide={handleCloseModal10}>
      <Modal.Header closeButton className="p-md-4 bg-dark text-white p mono hard-edge">
        THINKING BIG &gt; -
      </Modal.Header>
      <Modal.Body className="hard-edge p-3 p-md-4">
        <Row>
          <Col>

          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer className="d-md-none no-brdr pt-0">
        <Button onClick={handleCloseModal10}>Close</Button>
      </Modal.Footer>
    </Modal>

    {/*modal 11*/}
    <Modal centered size="lg" show={showModal11} onHide={handleCloseModal11}>
      <Modal.Header closeButton className="p-md-4 bg-dark text-white p mono hard-edge">
        THINKING BIG &gt; -
      </Modal.Header>
      <Modal.Body className="hard-edge p-3 p-md-4">
        <Row>
          <Col>

          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer className="d-md-none no-brdr pt-0">
        <Button onClick={handleCloseModal11}>Close</Button>
      </Modal.Footer>
    </Modal>

    {/*modal 12*/}
    <Modal centered size="lg" show={showModal12} onHide={handleCloseModal12}>
      <Modal.Header closeButton className="p-md-4 bg-dark text-white p mono hard-edge">
        THINKING BIG &gt; -
      </Modal.Header>
      <Modal.Body className="hard-edge p-3 p-md-4">
        <Row>
          <Col>

          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer className="d-md-none no-brdr pt-0">
        <Button onClick={handleCloseModal12}>Close</Button>
      </Modal.Footer>
    </Modal>

    </>
  )
}
