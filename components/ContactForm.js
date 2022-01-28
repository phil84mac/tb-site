import Head from 'next/head';
import React, { useState, useRef, useEffect } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import ReactDOM from 'react-dom';
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
import Offcanvas from 'react-bootstrap/Offcanvas';


export default function ContactForm() {
    
    const [state, handleSubmit] = useForm("mayvqrbr");
    if (state.succeeded) {
        return (
        <p>
        ........
        </p>
            );
    }
    return (

        <>
        
        <h3 className="mb-5">
          Interested in solving your problem with Thinking Big?
          </h3>  

          <Form name="contact" onSubmit={handleSubmit}>

          <Form.Group className="mb-4" controlId="firstlastname">
            <Form.Label for="full-name" className="mb-0"><p className="small mb-0 mono text-grey bold">FIRST AND LAST NAME</p></Form.Label>
            <Form.Control name="name" type="text" id="firstlastname" placeholder="" className="hard-edge"/>
            <ValidationError 
              prefix="FirstLastName" 
              field="firstlastname"
              errors={state.errors}
            />
          </Form.Group>

          <Form.Group className="mb-4" controlId="organization">
          <Form.Label for="organization" className="mb-0"><p className="small mb-0 mono text-grey bold">ORGANIZATION NAME</p></Form.Label>
            <Form.Control name="organization" type="text" id="organization" placeholder="" className="hard-edge"/>
            <ValidationError 
              prefix="Organization" 
              field="organization"
              errors={state.errors}
            />
          </Form.Group>

          <Form.Group className="mb-4" controlId="email">
          <Form.Label for="email" className="mb-0"><p className="small mb-0 mono text-grey bold">EMAIL ADDRESS</p></Form.Label>
            <Form.Control type="email" name="email" id="email" placeholder="" className="hard-edge"/>
            <ValidationError 
                prefix="Email" 
                field="email"
                errors={state.errors}
            />
          </Form.Group>

          <Form.Group className="mb-4" controlId="number">
            <Form.Label htmlFor="number" className="mb-0"><p className="small mb-0 mono text-grey bold">PHONE NUMBER</p></Form.Label>
            <Form.Control name="number" type="number" placeholder="" className="hard-edge"/>
            <ValidationError 
              prefix="Number" 
              field="number"
              errors={state.errors}
            />
          </Form.Group>

          <Form.Group className="mb-4" controlId="select">
          <Form.Label for="select" className="mb-0"><p className="small mb-0 mono text-grey bold">HOW DID YOU HEAR ABOUT US?</p></Form.Label>
            <Form.Select defaultValue="Please select..." name="select" type="select" className="hard-edge mb-3 mb-md-0">
              <option>Please select...</option>
              <option>From a fiend or co-worker</option>
              <option>Online/social media</option>
              <option>Through the grapevine</option>
            </Form.Select> 
            <ValidationError 
              prefix="Select" 
              field="select"
              errors={state.errors}
            />
          </Form.Group>

          <Form.Group className="mb-2" controlId="message">
            <Form.Label for="message" className="mb-0"><p className="small mb-0 mono text-grey bold">PLEASE GIVE US A BRIEF OF THE PROBLEM YOU'D LIKE US TO SOLVE. CONTEXT WILL ALLOW US TO CONNECT YOU TO THE RIGHT TEAM RIGHT AWAY.</p></Form.Label>
            <Form.Control as="textarea" rows={4} type="message" id="message" placeholder="" className="hard-edge"/>
                <ValidationError 
                prefix="Message" 
                field="message"
                errors={state.errors}
                />
          </Form.Group>

          <p className="small mb-4">Please see our <a href="/privacy" className="text-dark">Privacy Policy</a> regarding what we do with this information.</p>

          <Button className="btn btn-dark w-full" type="submit" disabled={state.submitting}>
            SUBMIT
          </Button>

          </Form>
        
        </>

    )
}
