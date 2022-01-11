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

  const [showOffContact, setShowOffContact] = useState(false);
  const handleCloseOffContact = () => setShowOffContact(false);
  const handleShowOffContact = () => setShowOffContact(true);

  const [showMenu, setShowMenu] = useState(false);
  const handleCloseMenu = () => setShowMenu(false);
  const handleShowMenu = () => setShowMenu(true);

  return (
    <>

    {/* Get started form */}

      <Offcanvas show={showOffContact} onHide={handleCloseOffContact} placement='end'>
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
          <Form.Label className="mb-0"><p className="small mb-0 mono text-grey bold">PLEASE GIVE US A BRIEF OF THE PROBLEM YOU'D LIKE US TO SOLVE. CONTEXT WILL ALLOW US TO CONNNECT YOU TO THE RIGHT TEAM RIGHT AWAY.</p></Form.Label>
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
        <Offcanvas.Header className="px-3 px-md-4 px-lg-5 pt-3 d-flex" closeButton>
          <img src="/TBlogo-white.svg" className="logo-alt" alt="Thinking Big Logo White" onClick={handleCloseMenu}/>  
          <Button className="btn btn-primary py-1 arrow ms-auto me-3" onClick={handleShowOffContact}>
            GET STARTED
          </Button>      
        </Offcanvas.Header>
        <Offcanvas.Body className="px-3 px-md-4 px-lg-5 mt-4 pb-5">
          <Row className="">
            <Col md={12}>
            <p className="h6">THINKING BIG &gt; MENU</p>
            <hr className="white"/>
            <Row>
              <Col md={3} xl={2} className="brdr-rght pb-md-3">
                <Row>
                  <Col xs={6} sm={6} md={12}>
                  <p className="small mono">OUR SITE</p>
                    <ul className="mb-4 ps-4">
                      <li className="mb-2"><a href="#" className="text-white">Option 1</a></li>
                      <li className="mb-2"><a href="#" className="text-white">Option 2</a></li>
                      <li className="mb-2"><a href="#" className="text-white">Option 3</a></li>
                      <li className="mb-2"><a href="#" className="text-white">Option 4</a></li>
                      <li className="mb-2"><a href="#" className="text-white">Option 5</a></li>
                    </ul>
                  </Col>
                  <Col xs={6} sm={6} md={12}>
                  <p className="small mono">SOCIAL MEDIA</p>
                    <ul className="ps-4">
                      <li className="mb-2"><a href="#" className="text-white">Option 1</a></li>
                      <li className="mb-2"><a href="#" className="text-white">Option 2</a></li>
                      <li className="mb-2"><a href="#" className="text-white">Option 3</a></li>
                      <li className="mb-2"><a href="#" className="text-white">Option 4</a></li>
                      <li className="mb-2"><a href="#" className="text-white">Option 5</a></li>
                    </ul>
                  </Col>
                </Row>
                <hr className="white d-md-none"/>
              </Col>
              <Col md={9} xl={10} className="ps-md-4">
              <div className="d-flex mb-2">
                  <h4 className="mb-2">Latest Articles</h4>
                  <a className="text-white ms-auto mt-xl-2 text-end d-none d-md-block">View all articles on Medium</a>
                </div>
                  <Row className="mb-4 pb-2">
                    <Col xs={12} sm={12} md={4}>
                      <Card className="hard-edge mb-3 mb-md-0">
                        <Card.Img variant="top" src="./placeholder.svg" className="hard-edge no-brdr"/>
                        <Card.Body>
                          <Card.Title className="text-dark">Article Title</Card.Title>
                          <Card.Text className="text-grey">
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                          </Card.Text>
                          <Button variant="secondary">Read article</Button>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col xs={12} sm={12} md={4}>
                      <Card className="hard-edge mb-3 mb-md-0">
                        <Card.Img variant="top" src="./placeholder.svg" className="hard-edge no-brdr"/>
                        <Card.Body>
                          <Card.Title className="text-dark">Article Title</Card.Title>
                          <Card.Text className="text-grey">
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                          </Card.Text>
                          <Button variant="secondary">Read article</Button>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col xs={12} sm={12} md={4}>
                      <Card className="hard-edge mb-3 mb-md-0">
                        <Card.Img variant="top" src="./placeholder.svg" className="hard-edge no-brdr"/>
                        <Card.Body>
                          <Card.Title className="text-dark">Article Title</Card.Title>
                          <Card.Text className="text-grey">
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                          </Card.Text>
                          <Button variant="secondary">Read article</Button>
                        </Card.Body>
                      </Card>
                      <a className="text-white ms-auto mt-xl-2 text-end d-md-none">View all articles on Medium</a>
                    </Col>
                  </Row>
                  <hr className="white d-md-none"/>
                <div className="d-flex mb-2">
                  <h4 className="mb-2">Latest Career Opportunities</h4>
                  <a className="text-white text-right ms-auto mt-xl-2 text-end d-none d-md-block">View all careers on LinkedIn</a>
                </div>
                <Row>
                <Col xs={12} sm={12} md={4}>
                  <Card className="hard-edge mb-3 mb-md-0">
                    <Card.Body>
                      <Card.Title className="text-dark">Career Title</Card.Title>
                      <Card.Text className="text-grey">
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                      </Card.Text>
                      <Button variant="secondary">Apply for this</Button>
                    </Card.Body>
                  </Card>
                  </Col>
                  <Col xs={12} sm={12} md={4}>
                  <Card className="hard-edge mb-3 mb-md-0">
                    <Card.Body>
                      <Card.Title className="text-dark">Career Title</Card.Title>
                      <Card.Text className="text-grey">
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                      </Card.Text>
                      <Button variant="secondary">Apply for this</Button>
                    </Card.Body>
                  </Card>
                  </Col>
                  <Col xs={12} sm={12} md={4}>
                  <Card className="hard-edge mb-3 mb-md-0">
                    <Card.Body>
                      <Card.Title className="text-dark">Career Title</Card.Title>
                      <Card.Text className="text-grey">
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                      </Card.Text>
                      <Button variant="secondary">Apply for this</Button>
                    </Card.Body>
                  </Card>
                  <a className="text-white text-right ms-auto mt-xl-2 text-end d-md-none">View all careers on LinkedIn</a>
                  </Col>
                </Row>
              </Col>
            </Row>
            </Col>
          </Row>
        </Offcanvas.Body>
      </Offcanvas>

    {/* NavBar */}
    
      <Navbar className="px-2 px-md-4 px-lg-5" fixed="top">
      <Navbar.Brand href="#home">
        <img src="/TBlogo.svg" className="logo ps-1 ps-sm-0" alt="Thinking Big Logo"/>
      </Navbar.Brand>
      <Nav className="ms-auto">
        <Nav.Link>
          <Button className="btn btn-primary arrow" onClick={handleShowOffContact}>
            GET STARTED
          </Button>
        </Nav.Link>
        <Nav.Link className="pe-1 pe-xl-0">
          <Button className="btn btn-primary menu" onClick={handleShowMenu}>       
          </Button>
        </Nav.Link>
       </Nav>
      </Navbar>
    
</>
  )
}
