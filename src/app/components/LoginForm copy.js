import { Button,Label,Col,FormGroup, Modal, ModalHeader, ModalBody } from "reactstrap";
import {Formik, Field, Form, ErrorMessage} from 'formik'
import { validateLoginForm } from "../utils/validateLoginForm";
import { useState } from "react";


const LoginForm = () => {

  const handleSubmit = (values, {resetForm})=>{
    console.log(values);
    console.log(JSON.stringify(values))
    resetForm();
  }
  const [modalOpen,setModalOpen]=useState(false);
  return (
      <>
        <Button onClick={()=>setModalOpen(true)} className="btn-style" color='primary'>Login</Button>
        <Modal isOpen={modalOpen}>
            <ModalHeader toggle={()=>setModalOpen(false)}>
                Login
            </ModalHeader>
            <ModalBody>
                <Formik
                  initialValues = {{
                  email: '',
                  password: '',
                  rememberMe: false,
                }}
                  onSubmit={handleSubmit}
                  validate={validateLoginForm}
                >
                <Form >
                  <FormGroup row>
                    <Label htmlFor="email" md={{size: 2, offset: 2}}>
                      Email
                    </Label>
                    <Col md='6'>
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
                    <Label htmlFor="password" md={{size: 2, offset: 2}}>
                      Password
                    </Label>
                    <Col md='6'>
                    
                      <Field 
                        name='password'
                        placeholder="Password"
                        className='form-control' 
                        />
                        
                      <ErrorMessage name='password'>
                        {(msg)=><p className='text-danger'>{msg}</p>}
                      </ErrorMessage>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label check htmlFor="rememberMe" md={{size: 3, offset: 4}}>
                    <Field
                        name="rememberMe"
                        type="checkbox" 
                      />  
                      {' '}Remember Me
                    </Label>
                    <Col md='4'>
                      <a href="#">Forgot password?</a>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col >
                      <Button type='submit' color='primary'>Login</Button>
                    </Col>
                  </FormGroup>
                </Form>
              </Formik>
            </ModalBody>
        </Modal>
      </>
    
  )
    
}

export default LoginForm;

