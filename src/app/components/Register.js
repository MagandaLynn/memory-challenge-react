import { ErrorMessage, Field, Formik } from "formik";
import { useState } from "react";
import { Button, Col, Form, FormGroup, Modal, ModalBody, ModalHeader } from "reactstrap";
import { validateRegisterForm } from "../utils/validateRegisterForm";

const Register = () => {
  const [modalOpen,setModalOpen]=useState(false);
    
  const handleSubmit = (values, {resetForm})=>{
    console.log(values);
    console.log(JSON.stringify(values))
    resetForm();
  }
  return (
      <>
        <p>Don't have an account? <a onClick={()=>setModalOpen(true)} className="modal-link">Register</a></p>
        <Modal isOpen={modalOpen}>
            <ModalHeader toggle={()=>setModalOpen(false)}>
                Register
            </ModalHeader>
            <ModalBody>
                <Formik
                    initialValues={{
                        firstName:'',
                        lastname:'',
                        email:'',
                        password:'',
                        confirmPassword:''
                    }}
                    onSubmit={handleSubmit}
                    validate={validateRegisterForm}
                        
                >
                    <Form>
                        <FormGroup row>
                            <Col sm='10' className="mx-auto">
                                <Field 
                                name='firstName'
                                placeholder='First Name'
                                className='form-control' 
                                />
                                <ErrorMessage name='firstName'>
                                {(msg)=><p className='text-danger'>{msg}</p>}
                                </ErrorMessage>
                            </Col>
                        </FormGroup>
                        
                        <FormGroup row>
                            <Col sm='10' className="mx-auto">
                                <Field 
                                name='lastName'
                                placeholder='Last Name'
                                className='form-control' 
                                />
                                <ErrorMessage name='lastName'>
                                {(msg)=><p className='text-danger'>{msg}</p>}
                                </ErrorMessage>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col sm='10' className="mx-auto">
                                <Field 
                                name='email'
                                placeholder='Email'
                                className='form-control' 
                                />
                                <ErrorMessage name='email'>
                                {(msg)=><p className='text-danger'>{msg}</p>}
                                </ErrorMessage>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col sm='10' className="mx-auto">
                                <Field 
                                name='password'
                                placeholder='Password'
                                className='form-control' 
                                />
                                <ErrorMessage name='password'>
                                {(msg)=><p className='text-danger'>{msg}</p>}
                                </ErrorMessage>
                            </Col>
                        </FormGroup>
                        
                        <FormGroup row>
                            <Col sm='10' className="mx-auto">
                                <Field 
                                name='confirmPassword'
                                placeholder='Confirm Password'
                                className='form-control' 
                                />
                                <ErrorMessage name='confirmPassword'>
                                {(msg)=><p className='text-danger'>{msg}</p>}
                                </ErrorMessage>
                            </Col>
                        </FormGroup>
                            <FormGroup row>
                            <Col xs={{size: 2, offset: 6}}>
                                <Button onClick={()=>setModalOpen(false)} color='secondary'>Cancel</Button>
                            </Col>
                            <Col xs='3'>
                                <Button type='submit' color='primary'>Sign Up</Button>
                            </Col>
                            </FormGroup>
                    </Form>
                    
                </Formik>
            </ModalBody>
        </Modal>
      </>
    
  )
  
}

export default Register