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
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import Link from 'next/link';
import Offcanvas from 'react-bootstrap/Offcanvas';


export default function Header() {

  const [showContact, setShowContact] = useState(false);
  const handleCloseContact = () => setShowContact(false);
  const handleShowContact = () => setShowContact(true);

  const [showMenu, setShowMenu] = useState(false);
  const handleCloseMenu = () => setShowMenu(false);
  const handleShowMenu = () => setShowMenu(true);

  return (
    <>

    {/* NavBar */}  

    <Navbar className="px-xl-5 px-lg-4 px-md-3" fixed="top">
      <Navbar.Brand href="/#home" className="ps-1 ms-2">
        <img src="/TBlogo2.svg" className="logo" alt="Thinking Big Logo"/>
      </Navbar.Brand>
      <Nav className="ms-auto pe-1 me-2">
        <Nav.Link className="me-0 pe-1">
          <Button className="btn btn-primary arrow" onClick={handleShowContact}>
            GET STARTED
          </Button>
        </Nav.Link>
        <Nav.Link className="pe-0">
          <Button className="btn btn-primary menu" onClick={handleShowMenu}>       
          </Button>
        </Nav.Link>
       </Nav>
    </Navbar>

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

    {/* Menu */}
      <Offcanvas show={showMenu} onHide={handleCloseMenu} placement='top' className="w-full h-full bg-menu">
        <Offcanvas.Header className="pt-3 px-xl-5 px-lg-4 px-md-3 me-sm-3" closeButton>
          <div className="ms-sm-2 ps-sm-1 d-flex">
            <a ><img src="/TBlogo-white.svg" className="logo-menu" alt="Thinking Big Logo White" onClick={handleCloseMenu}/></a>
             
          </div>  
          <div className=" ms-auto">
          <Button className="btn btn-primary py-1 arrow me-3" onClick={handleShowContact}>
              GET STARTED
            </Button>  
          </div> 
        </Offcanvas.Header>
        <Offcanvas.Body className="pb-5">
          <Row className="px-xl-5 px-lg-4 px-md-3 mt-4 pt-xl-3">
            <Col md={12} className="ps-md-2">
            <p className="h6">THINKING BIG &gt; MENU</p>
            <hr className="white"/>
            <Row>
              <Col md={3} xl={2} className="brdr-rght pb-md-3">
                <Row>
                  <Col xs={6} sm={6} md={12}>
                  <p className="small mono">OUR SITE</p>
                    <ul className="mb-4 ps-0">
                    <li className="mb-2"><a href="#services" className="text-white">Services</a></li>
                    <li className="mb-2"><a href="#technology" className="text-white">Technology</a></li>
                    <li className="mb-2"><a href="#people" className="text-white">People</a></li>
                    </ul>
                  </Col>
                  <Col xs={6} sm={6} md={12}>
                  <p className="small mono">SOCIAL MEDIA</p>
                    <ul className="ps-0">
                    <li className="mb-2"><a href="https://www.facebook.com/thinkingbig.net" className="text-white">Facebook</a></li>
                    <li className="mb-2"><a href="https://twitter.com/ThinkingBigInc" className="text-white">Twitter</a></li>
                    <li className="mb-2"><a href="https://www.linkedin.com/company/thinking-big-inc/" className="text-white">LinkedIn</a></li>
                    <li className="mb-2"><a href="https://www.instagram.com/wearethinkingbig/" className="text-white">Instagram</a></li>
                    </ul>
                  </Col>
                </Row>
                <hr className="white d-md-none"/>
              </Col>
              <Col md={9} xl={10} className="ps-md-4">
              <div className="d-flex mb-2">
                  <h4 className="mb-2">Latest Articles</h4>
                  <a href="https://medium.com/thinkingbig" className="text-white ms-auto mt-xl-2 text-end d-none d-md-block">View all articles on Medium</a>
                </div>
                  <Row className="mb-4 pb-2 d-flex">
                    <Col xs={12} sm={12} lg={4} className="mb-3 mb-lg-0">
                      <Card className="hard-edge no-brdr h-full">
                        <Card.Img variant="top" src="./heuristic.png" className="hard-edge no-brdr"/>
                        <Card.Body className="d-flex flex-column align-items-start">
                          <Card.Title className="text-dark">How A Heuristic Evaluation Can Elevate Your Design Process</Card.Title>
                          <Card.Text className="text-grey">
                          Think of it as a rule of thumb rather than specific guidelines.
                          </Card.Text>
                          <Button className="mt-auto" href="https://medium.com/thinkingbig/how-a-heuristic-evaluation-can-elevate-your-product-design-process-4ba1fdecb7b8" tager="_blank" variant="secondary">Read article on Medium</Button>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col xs={12} sm={12} lg={4} className="mb-3 mb-lg-0">
                    <Card className="hard-edge no-brdr h-full">
                        <Card.Img variant="top" src="./remote.png" className="hard-edge no-brdr"/>
                        <Card.Body className="d-flex flex-column align-items-start">
                          <Card.Title className="text-dark">The 5 A's of Remote Work During a Pandemic</Card.Title>
                          <Card.Text className="text-grey">
                          Or, finding zen in chaos: a guide to staying fresh and productive while working from home in times like these.
                          </Card.Text>
                          <Button className="mt-auto" href="https://medium.com/thinkingbig/the-5-as-of-remote-work-during-a-pandemic-c89115d245b7" target="_blank" variant="secondary">Read article on Medium</Button>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col xs={12} sm={12} lg={4} className="mb-3 mb-lg-0">
                      <Card className="hard-edge no-brdr h-full">
                        <Card.Img variant="top" src="./remotely.png" className="hard-edge no-brdr"/>
                        <Card.Body className="d-flex flex-column align-items-start">
                          <Card.Title className="text-dark">3 Great Tools for Working Remotely</Card.Title>
                          <Card.Text className="text-grey">
                          Adopting tools that promote human connection will go a long way in protecting your team's mental health.
                          </Card.Text>
                          <Button className="mt-auto" href="https://medium.com/thinkingbig/3-great-tools-for-working-remotely-26a096aaab77" target="_blank" variant="secondary">Read article on Medium</Button>
                        </Card.Body>
                      </Card>
                    </Col>
                    <a href="https://medium.com/thinkingbig" className="text-white ms-auto mt-xl-2 d-md-none">View all articles on Medium</a>
                  </Row>
                  <hr className="white d-md-none"/>
                <div className="d-flex mb-2">
                  <h4 className="mb-2">Latest Career Opportunities</h4>
                  <a href="" className="text-white text-right ms-auto mt-xl-2 text-end d-none d-md-block">View all careers on LinkedIn</a>
                </div>
                <Row>
                <Col xs={12} sm={12} lg={4} className="mb-3 mb-lg-0">
                  <Card className="hard-edge no-brdr h-full">
                    <Card.Body className="d-flex flex-column align-items-start">
                      <Card.Title className="text-dark">Software Architect</Card.Title>
                      <Card.Text className="text-grey">
                      Want to architect solutions and see them come to life? We have a need for a Senior Software Architect. Experience in API integration would be a major asset. Pitch is on why you'd be a good fit for Thinking Big.
                      </Card.Text>
                      <Button className="mt-auto" variant="secondary">Apply for this on LinkedIn</Button>
                    </Card.Body>
                  </Card>
                  </Col>
                  <Col xs={12} sm={12} lg={4} className="mb-3 mb-lg-0">
                  <Card className="hard-edge no-brdr h-full">
                    <Card.Body className="d-flex flex-column align-items-start">
                      <Card.Title className="text-dark">Senior Developer</Card.Title>
                      <Card.Text className="text-grey">
                      More than just a lifestyle, programming is a fashionable living that not just anyone can aspire to. It takes critical thinking, and easy-going personality, and attention to detail. When the muck hits the fan, a programmer cracks their knuckles, rolls up their sleeves and dives in!
                      </Card.Text>
                      <Button className="mt-auto" variant="secondary">Apply for this on LinkedIn</Button>
                    </Card.Body>
                  </Card>
                  </Col>
                  <Col xs={12} sm={12} lg={4} className="mb-3 mb-lg-0">
                  <Card className="hard-edge no-brdr h-full">
                    <Card.Body className="d-flex flex-column align-items-start">
                      <Card.Title className="text-dark">User Experience (UX) Designer</Card.Title>
                      <Card.Text className="text-grey">
                      Inspiration, ideation and implementation! These three pillars of human-centered design are at the core of our design process. From client research and interviews to rapid prototyping and usability testing, being a designer at Thinking Big is more than pretty colours and cool trends.
                      </Card.Text>
                      <Button className="mt-auto" variant="secondary">Apply for this on LinkedIn</Button>
                    </Card.Body>
                  </Card>
                  </Col>
                  <a href="" className="text-white text-right mt-xl-2 d-md-none">View all careers on LinkedIn</a>
                </Row>
              </Col>
            </Row>
            </Col>
          </Row>
        </Offcanvas.Body>
      </Offcanvas>
    
</>
  )
}
