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
        <Container fluid className="mb-4 mb-xl-5 py-xl-3 pb-xl-5">
        <Row className="mt-5 px-xl-5 px-lg-4 px-md-3 mb-xl-4">
          <Col md={12} className="mt-4 pt-5">
          <p className="h6 text-grey mt-2 mb-xl-0">THINKING BIG</p>
            <Row className="align-items-center d-flex">
              <Col xl={6}>
                <h1 className="text-dark">
                World-class software + consulting solutions
                </h1>
              </Col>
              <Col xl={6} className="mrt-xl-3">
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
            <Row className="pb-3 mb-3 pb-lg-5 mb-lg-5">
              <Col lg={11} xl={8}>
                <h2 className="text-dark mb-md-4 mb-xl-5">
                  Our refined processes are the solution to your software problems
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
                    Application Services
                    </h4>
                    <p className="text-grey mt-3">
                    Whether the solution calls for software, web development, a mobile application or AI automation, our teams have the expertise to tackle your toughest challenges.
                    </p>
                    <Button onClick={handleShowModal1} variant="link" className="text-dark bold mono modal-icon p-0" >
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
                    <Button onClick={handleShowModal2} variant="link" className="text-dark bold mono modal-icon p-0">
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
                    <Button onClick={handleShowModal3} variant="link" className="text-dark bold mono modal-icon p-0">
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
                    <Button onClick={handleShowModal4} variant="link" className="text-dark bold mono modal-icon p-0">
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
              <Col lg={11} xl={8}>
                <h2 className="text-dark mb-md-4 mb-xl-5 ">
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
                    Tools 
                    </h4>
                    <p className="text-grey mt-3">
                    Whether the solution calls for software, web development, a mobile application or AI automation, our teams have the expertise to tackle your toughest challenges.
                    </p>
                    <Button onClick={handleShowModal1} variant="link" className="text-dark bold mono modal-icon p-0" >
                      LEARN MORE
                    </Button>
                    <hr className="d-md-none"/>
                  </Col>
                  <Col md={3} className="mb-4 mb-0">
                    <p className="text-grey mono">B.</p>
                    <hr className="d-none d-md-block"/>
                    <h4 className="text-dark">
                    Process
                    </h4>
                    <p className="text-grey mt-3">
                    The business consultants at Thinking Big work with organizations to identify organizational objectives, transform their operations and achieve lasting change.
                    </p>
                    <Button onClick={handleShowModal2} variant="link" className="text-dark bold mono modal-icon p-0">
                      LEARN MORE
                    </Button>
                    <hr className="d-md-none"/>
                  </Col>
                  <Col md={3} className="mb-4 mb-0">
                    <p className="text-grey mono">C.</p>
                    <hr className="d-none d-md-block"/>
                    <h4 className="text-dark">
                    Case Study 1
                    </h4>
                    <p className="text-grey mt-3">
                    Effective Project Management is vital for an organization's success. Trust our people to efficiently guide projects and coach your team with methods tailored to your needs.
                    </p>
                    <Button onClick={handleShowModal3} variant="link" className="text-dark bold mono modal-icon p-0">
                      LEARN MORE
                    </Button>
                    <hr className="d-md-none"/>
                  </Col>
                  <Col md={3} className="mb-4 mb-0">
                    <p className="text-grey mono">D.</p>
                    <hr className="d-none d-md-block"/>
                    <h4 className="text-dark">
                    Case Study 2
                    </h4>
                    <p className="text-grey mt-3">
                    With a thorough knowledge of regulations, policies and IT security practices, our privacy specialists generate and implement risk mitigation strategies to ensure your customers remain protected.
                    </p>
                    <Button onClick={handleShowModal4} variant="link" className="text-dark bold mono modal-icon p-0">
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
              <source src="./turbines.mp4" type='video/mp4' />
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
                    Whether the solution calls for software, web development, a mobile application or AI automation, our teams have the expertise to tackle your toughest challenges.
                    </p>
                    <Button onClick={handleShowModal1} variant="link" className="text-dark bold mono modal-icon p-0" >
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
                    The business consultants at Thinking Big work with organizations to identify organizational objectives, transform their operations and achieve lasting change.
                    </p>
                    <Button onClick={handleShowModal2} variant="link" className="text-dark bold mono modal-icon p-0">
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
                    Effective Project Management is vital for an organization's success. Trust our people to efficiently guide projects and coach your team with methods tailored to your needs.
                    </p>
                    <Button onClick={handleShowModal3} variant="link" className="text-dark bold mono modal-icon p-0">
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
                    <Button onClick={handleShowModal4} variant="link" className="text-dark bold mono modal-icon p-0">
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
        <Row className="px-2 px-lg-4 px-md-3">
          <Col xs={12} className="bg-dark p-3 p-xl-5">
            <Row className="p-3 py-lg-4 py-xl-5">
              <Col md={4} className="text-center">
                <h2 className="numbers mono text-white heavy">
                &gt;150
                </h2>
                <p className="text-white mb-4 mb-md-0">This many things delivered</p>
                <hr className="white d-md-none"/>
              </Col>
              <Col md={4} className="text-center">
                <h2 className="numbers mono text-white heavy">
                200%
                </h2>
                <p className="text-white mb-4 mb-md-0">Something about growth</p>
                <hr className="white d-md-none"/>
              </Col>
              <Col md={4} className="text-center">
                <h2 className="numbers mono text-white heavy">
                150+
                </h2>
                <p className="text-white">Developers, Designers, Analysts, etc</p>
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
        THINKING BIG &gt; APPLICATION SERVICES
      </Modal.Header>
      <Modal.Body className="hard-edge p-3 p-md-4">
        <Row>
          <Col md={6} className="mb-3">
            <p className="text-grey mono mb-1">A.1</p>
            <hr className="mt-0 mb-2 d-none d-md-block"/>
            <h5 className="text-dark">
            Concept Development
            </h5>
            <p className="text-grey mt-2">
            We work with you to look at your organization from a digital perspective within the scope of technology, trends, and process. Then, we help you integrate all these components to form your digital strategy
            </p>
            <hr className="d-md-none"/>
          </Col>
          <Col md={6} className="mb-3">
          <p className="text-grey mono mb-1">A.2</p>
          <hr className="mt-0 mb-2 d-none d-md-block"/>
            <h5 className="text-dark">
            Prototyping
            </h5>
            <p className="text-grey mt-2">
            Ready to take the next step? Thinking Big will help you take your digital concept to the prototype stage and develop the KPI's to measure it's success. We will also help you establish governance to maintain momentum and remain flexible to change.
            </p>
            <hr className="d-md-none"/>
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer className="d-md-none no-brdr pt-0">
        <Button onClick={handleCloseModal1}>Close</Button>
      </Modal.Footer>
    </Modal>
    
    {/*business services modal*/}
    <Modal centered size="lg" show={showModal2} onHide={handleCloseModal2}>
      <Modal.Header closeButton className="p-md-4 bg-dark text-white p mono hard-edge">
        THINKING BIG &gt; BUSINESS SERVICES
      </Modal.Header>
      <Modal.Body className="hard-edge p-3 p-md-4">
        <Row>
          <Col md={6} className="mb-3">
            <p className="text-grey mono mb-1">B.1</p>
            <hr className="mt-0 mb-2 d-none d-md-block"/>
            <h5 className="text-dark">
            User Experience (UX) Design
            </h5>
            <p className="text-grey mt-2">
            This is ultimately what it is all about. If your users do not have a positive experience on your site, they go elsewhere. Our user-centric design model puts the user at the heart of everything we do. Who are they? Are they young or old? Are they affluent or starving students? Are you speaking the right language to them? These are questions that we consider when approaching your solution. We help you find those answers and leverage that knowledge to provide a better user experience.
            </p>
            <hr className="d-md-none"/>
          </Col>
          <Col md={6} className="mb-3">
          <p className="text-grey mono mb-1">B.2</p>
          <hr className="mt-0 mb-2 d-none d-md-block"/>
            <h5 className="text-dark">
            Automation of Services
            </h5>
            <p className="text-grey mt-2">
            Self-service is a given for any organization with a digital presence. Automating services allows you to set a standard of service that will enhance both quality and experience for your users, while increasing employee productivity and decreasing costs for your organization. Our experience with analyzing and automating services using the latest technology ensures your users will benefit from exceptional service.
            </p>
            <hr className="d-md-none"/>
          </Col>
          <Col md={6} className="mb-3">
          <p className="text-grey mono mb-1">B.3</p>
          <hr className="mt-0 mb-2 d-none d-md-block"/>
            <h5 className="text-dark">
            Asset Management
            </h5>
            <p className="text-grey mt-2">
            The ability to organize, track and reuse digital assets allows you to maximize the use of the assets you've spent time on perfecting. This is a typical step in our renewal and reorganization model to enhance the architecture and get the most out of your creativity.
            </p>
            <hr className="d-md-none"/>
          </Col>
          <Col md={6} className="mb-3">
          <p className="text-grey mono mb-1">B.4</p>
          <hr className="mt-0 mb-2 d-none d-md-block"/>
            <h5 className="text-dark">
            Analytics &amp; Optimization
            </h5>
            <p className="text-grey mt-2">
            The ability to collect and analyze data on current activity or decisions enables you to take your vision to the next level. We know how to take this data and optimize your ability to better achieve better online results. Our experience with web analytics will improve your decision making and provide quick analysis on results.
            </p>
            <hr className="d-md-none"/>
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer className="d-md-none no-brdr pt-0">
        <Button onClick={handleCloseModal2}>Close</Button>
      </Modal.Footer>
    </Modal>

    {/*project management modal*/}
    <Modal centered size="lg" show={showModal3} onHide={handleCloseModal3}>
      <Modal.Header closeButton className="p-md-4 bg-dark text-white p mono hard-edge">
        THINKING BIG &gt; PROJECT MANAGEMENT
      </Modal.Header>
      <Modal.Body className="hard-edge p-3 p-md-4">
        <Row>
          <Col md={6} className="mb-3">
            <p className="text-grey mono mb-1">C.1</p>
            <hr className="mt-0 mb-2 d-none d-md-block"/>
            <h5 className="text-dark">
            Business Process Re-engineering (BPR)
            </h5>
            <p className="text-grey mt-2">
            Deciding to change from the “way it's always been done” can be both intimidating and exhilarating. Our BPR team can help you thoroughly review and/or restructure your processes to effect change in your organization.
            </p>
            <hr className="d-md-none"/>
          </Col>
          <Col md={6} className="mb-3">
          <p className="text-grey mono mb-1">C.2</p>
          <hr className="mt-0 mb-2 d-none d-md-block"/>
            <h5 className="text-dark">
            Customer Relationship Management (CRM)
            </h5>
            <p className="text-grey mt-2">
            There may be no better way to know and serve your clients and contacts than through a CRM methodology. Exceptional customer service is achieved by having a 360-degree view of a client's needs by providing interaction through both traditional and social channels to keep them coming back. Our certified Microsoft Dynamics consultants will match your strategy to the technology and provide a solution that will improve customer experience, communication, automation, and provide the analytics to make the right decisions.
            </p>
            <hr className="d-md-none"/>
          </Col>
          <Col md={6} className="mb-3">
          <p className="text-grey mono mb-1">C.3</p>
          <hr className="mt-0 mb-2 d-none d-md-block"/>
            <h5 className="text-dark">
            Enterprise Resource Planning (ERP)
            </h5>
            <p className="text-grey mt-2">
            ERP systems are often the main line of business and financial operations. As ERP's have become more scalable, companies of all sizes are taking advantage of their capabilities. The move towards cloud computing supports the scalability with cost benefits. TB has built our own ERP product called Awesomeware, so we understand your process flows and have a support model in place to support day-to-day ERP needs.
            </p>
            <hr className="d-md-none"/>
          </Col>
          <Col md={6} className="mb-3">
          <p className="text-grey mono mb-1">C.4</p>
          <hr className="mt-0 mb-2 d-none d-md-block"/>
            <h5 className="text-dark">
            Analytics &amp; Optimization
            </h5>
            <p className="text-grey mt-2">
            The ability to collect and analyze data on current activity or decisions enables you to take your vision to the next level. We know how to take this data and optimize your ability to better achieve better online results. Our experience with web analytics will improve your decision making and provide quick analysis on results.
            </p>
            <hr className="d-md-none"/>
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer className="d-md-none no-brdr pt-0">
        <Button onClick={handleCloseModal3}>Close</Button>
      </Modal.Footer>
    </Modal>

    {/*cyber protection modal*/}
    <Modal centered size="lg" show={showModal4} onHide={handleCloseModal4}>
      <Modal.Header closeButton className="p-md-4 bg-dark text-white p mono hard-edge">
        THINKING BIG &gt; CYBER PROTECTION
      </Modal.Header>
      <Modal.Body className="hard-edge p-3 p-md-4">
        <Row>
          <Col md={6} className="mb-3">
            <p className="text-grey mono mb-1">D.1</p>
            <hr className="mt-0 mb-2 d-none d-md-block"/>
            <h5 className="text-dark">
            Technology Enhanced Legal Services
            </h5>
            <p className="text-grey mt-2">
            Thinking Big Legal is working with US law firms to help develop technology platforms for the delivery of legal services. As firms reduce operating expenses, staff are having to do more and more with fewer resources. We create tools that firms can offer their clients to automate the elements of legal services that are redundant, and to enable the lawyer to offer the higher value advice and services that are made more efficient with these tools.
            </p>
            <hr className="d-md-none"/>
          </Col>
          <Col md={6} className="mb-3">
          <p className="text-grey mono mb-1">D.2</p>
          <hr className="mt-0 mb-2 d-none d-md-block"/>
            <h5 className="text-dark">
            Artificial Intelligence and Predictive Analysis
            </h5>
            <p className="text-grey mt-2">
            Thinking Big Legal can work with your firm to identify tasks, systems, and processes that can be enhanced and drastically more efficient with the help of AI and Predictive Analytics. We will work closely with you to identify the business requirements to develop custom solutions that can revolutionize the way you offer legal services to clients, freeing up time for associates to do higher value work.
            </p>
            <hr className="d-md-none"/>
          </Col>
          <Col md={6} className="mb-3">
          <p className="text-grey mono mb-1">D.3</p>
          <hr className="mt-0 mb-2 d-none d-md-block"/>
            <h5 className="text-dark">
            Market Mapping and Data Visualization
            </h5>
            <p className="text-grey mt-2">
            Law firms rely on data: for business development; for market research, for business intelligence, for thought leadership, and for the legal services they provide to their clients. The data is usually harnessed in large data bases, or, if someone has done a lot of work, in large research reports. Digesting the information is difficult. Thinking Big Legal can help you with platforms that present the information through market mapping and data visualization, making the information easier to access, digest, evaluate and use.
            </p>
            <hr className="d-md-none"/>
          </Col>
          <Col md={6} className="mb-3 ">
          <p className="text-grey mono mb-1">D.4</p>
          <hr className="mt-0 mb-2 d-none d-md-block"/>
            <h5 className="text-dark">
            Gamification
            </h5>
            <p className="text-grey mt-2">
            Thinking Big can work with your firm to identify processes and tools the firm uses internally that can be better utilized, contain better content and data, and be more relevant with the use of gamification elements. Having trouble capturing information for your CRM? Lawyers finding it cumbersome to document experience for valuable listings? Tough getting up-to-date bios? Need to enable behaviour change to get accurate time keeping? Struggling for fresh thought leadership content? Thinking Big Legal can help.
            </p>
            <hr className="d-md-none"/>
          </Col>
          <Col md={6} className="mb-3">
          <p className="text-grey mono mb-1">D.5</p>
          <hr className="mt-0 mb-2 d-none d-md-block"/>
            <h5 className="text-dark">
            Knowledge Management
            </h5>
            <p className="text-grey mt-2">
            Thinking Big Legal is working with US law firms to help develop technology platforms for the delivery of legal services. As firms reduce operating expenses, staff are having to do more and more with fewer resources. We create tools that firms can offer their clients to automate the elements of legal services that are redundant, and to enable the lawyer to offer the higher value advice and services that are made more efficient with these tools.
            </p>
            <hr className="d-md-none"/>
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer className="d-md-none no-brdr pt-0">
        <Button onClick={handleCloseModal4}>Close</Button>
      </Modal.Footer>
    </Modal>
    </>
  )
}
