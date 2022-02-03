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
        <Row className="mt-5 px-xl-5 px-lg-4 px-md-3 mb-xl-4">
          <Col md={12} className="mt-4 pt-5">
          <p className="h6 text-grey mt-2 mb-xl-0">THINKING BIG</p>
            <Row className="align-items-top d-flex pt-2">
              <Col xl={6}>
                <h1 className="text-dark pe-5">
                Reimagine what's possible with us
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
                    <Link href="/#technology">
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
              <Col lg={11} xl={8}>
                <h2 className="text-dark mb-md-3">
                  Our refined processes are the solution to your software problems
                </h2>
              </Col>
            </Row>
            <Row className="mb-xl-4">       
              <Col xl={10}>
                <Row>
                  <Col md={4} className="mb-4 mb-0">
                    <p className="text-grey mono">A.</p>
                    <hr className="d-none d-md-block"/>
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
                  <Col md={4}  className="mb-4 mb-0">
                    <p className="text-grey mono">B.</p>
                    <hr className="d-none d-md-block"/>
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
                  <Col md={4} className="mb-4 mb-0">
                    <p className="text-grey mono">C.</p>
                    <hr className="d-none d-md-block"/>
                    <h4 className="text-dark">
                    Human-centered Design
                    </h4>
                    <p className="text-grey mt-3">
                    Our Human-centered Design allows our team, with you, to reimagine the user experience and, in the process, create products and services that people actually use.
                    </p>
                    <Button onClick={handleShowModal3} variant="link" className="text-dark bold mono modal-icon p-0">
                      LEARN MORE
                    </Button>
                    <hr className="d-md-none"/>
                  </Col>
                  <Col md={4} className="mb-4 mb-0">
                    <p className="text-grey mono">D.</p>
                    <hr className="d-none d-md-block"/>
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
                  <Col md={4} className="mb-4 mb-0">
                    <p className="text-grey mono">E.</p>
                    <hr className="d-none d-md-block"/>
                    <h4 className="text-dark ">
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
                  <Col md={4} className="mb-4 mb-0">
                    <p className="text-grey mono">F.</p>
                    <hr className="d-none d-md-block"/>
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
              <source src="./overpass.mp4" type='video/mp4' />
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
              <source src="./typing.mp4" type='video/mp4' />
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
        <h3 className="text-dark">Business Services</h3>
          <Col lg={8} className="mb-3">
            <p className="text-grey">
            Success starts with effective Project Management. Trust our people to efficiently guide projects and coach your team with methods tailored to your needs. We manage projects at all stages to ensure the best use of your time, talent, and budget. From Business Process Engineering to application development to artificial intelligence, organizations across multiple industries trust us to help them embrace a new future with confidence.Success starts with effective Project Management. Trust our people to efficiently guide projects and coach your team with methods tailored to your needs. We manage projects at all stages to ensure the best use of your time, talent, and budget. From Business Process Engineering to application development to artificial intelligence, organizations across multiple industries trust us to help them embrace a new future with confidence.
            </p>
            <p className="text-grey">
            As business becomes more competitive, successful companies put people first. With insights gained from a human-centered perspective, our Service Designers guide transformation for everyone, from users to customers to your own employees. We analyze issues holistically and create solutions with you, to effect change that has a lasting impact.   
            </p>
            <p className="text-grey">
            We also introduce Lean and Agile principles and practices to transform how your enterprise works, and to empower your people to sustain those skills.
            </p>
            <p className="text-grey">
            We also introduce Lean and Agile principles and practices to transform how your enterprise works, and to empower your people to sustain those skills.
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
           <Row className="mb-2">
             <Col xs={1}>
             <img src="/scrum.svg" className="align-top icon icon-scrum"></img>
             </Col>
             <Col xs={10}>
             <p className="text-grey small ps-lg-1">
             Scrum to build organizational capacity
             </p>
             </Col>
           </Row>
           
           <Row className="mb-2">
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
        THINKING BIG &gt; -
      </Modal.Header>
      <Modal.Body className="hard-edge p-3 p-md-4">
        <Row>
          <Col>

          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer className="d-md-none no-brdr pt-0">
        <Button onClick={handleCloseModal2}>Close</Button>
      </Modal.Footer>
    </Modal>

    {/*modal 3*/}
    <Modal centered size="lg" show={showModal3} onHide={handleCloseModal3}>
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
        <Button onClick={handleCloseModal3}>Close</Button>
      </Modal.Footer>
    </Modal>

    {/*modal 4*/}
    <Modal centered size="lg" show={showModal4} onHide={handleCloseModal4}>
      <Modal.Header closeButton className="p-md-4 bg-dark text-white p mono hard-edge">
        THINKING BIG &gt; CYBER PROTECTION
      </Modal.Header>
      <Modal.Body className="hard-edge p-3 p-md-4">
        <Row>
          <Col md={8} className="mb-3">
            
          </Col>
          <Col md={4} className="mb-3">
          
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
        THINKING BIG &gt; -
      </Modal.Header>
      <Modal.Body className="hard-edge p-3 p-md-4">
        <Row>
          <Col>

          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer className="d-md-none no-brdr pt-0">
        <Button onClick={handleCloseModal5}>Close</Button>
      </Modal.Footer>
    </Modal>

    {/*modal 6*/}
    <Modal centered size="lg" show={showModal6} onHide={handleCloseModal6}>
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
        <Button onClick={handleCloseModal6}>Close</Button>
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
