import { ErrorMessage,Form, Field, Formik } from "formik";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Col, FormGroup, Modal, ModalBody, ModalHeader } from "reactstrap";
import { validateRegisterForm } from "../utils/validateRegisterForm";
import { addUser } from "./usersSlice";

const Register = () => {
  const [modalOpen,setModalOpen]=useState(false);
  const dispatch = useDispatch();    
  const handleSubmit = (values)=>{
    const newUser={
        name: values.firstName,
        email: values.email,
        password: values.password
    }    
    dispatch(addUser(newUser));
    setModalOpen(false);
  }
  return (
      <>
        <p>Don't have an account? <btn onClick={()=>setModalOpen(true)} className="modal-link">Register</btn></p>
        <Modal isOpen={modalOpen}>
            <ModalHeader toggle={()=>setModalOpen(false)}>
                Register
            </ModalHeader>
            <ModalBody>
                <Formik
                    initialValues={{
                        firstName:'',
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
                                <Button type='button' onClick={()=>setModalOpen(false)} color='secondary'>Cancel</Button>
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