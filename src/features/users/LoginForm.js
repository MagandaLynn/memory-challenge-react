import { Button,Label,Col,FormGroup, Modal, ModalBody } from "reactstrap";
import {Formik, Field, Form, ErrorMessage} from 'formik'
import { validateLoginForm } from "../../app/utils/validateLoginForm";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUser, setCurrentUser } from "./usersSlice";
import { useState } from "react";


const LoginForm = () => {
  const [loginError,setLoginError]=useState(false);
  const currentUser=useSelector(selectCurrentUser);
  const dispatch=useDispatch();
  const handleSubmit= ({email, password})=>{
    setLoginError()
    const userInfo = { 
        id: Date.now(),
        email: email,
        name: 'Guest',
        password: password   
    }
    dispatch(setCurrentUser(userInfo));
    if(!currentUser){
      setLoginError(true)
    }
  }
    
  return (
    <Formik
      initialValues = {{
        email: 'guest',
        password: 'guest',
        rememberMe: false,
      }}
      onSubmit={handleSubmit}
      validate={validateLoginForm}
    >
      <Form >
        <FormGroup row>
          {/* <Label htmlFor="email" md={{size: 2, offset: 2}}>
            Email
          </Label> */}
          <Col sm='8' className="mx-auto">
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
          {/* <Label htmlFor="password" md={{size: 2, offset: 2}}>
            Password
          </Label> */}
          <Col sm='8' className="mx-auto">
          
            <Field 
              name='password'
              placeholder="Password"
              type="password"
              className='form-control' 
              />
              
            <ErrorMessage name='password'>
              {(msg)=><p className='text-danger'>{msg}</p>}
            </ErrorMessage>
          </Col>
        </FormGroup>
        <FormGroup row >
          <Col className="mx-auto">
            <Label check htmlFor="rememberMe" >
              <Field
                name="rememberMe"
                type="checkbox" 
              />  
              {' '}Remember Me
            </Label>
            </Col>
            <Col className='mx-auto' >
              <a href="#">Forgot password?</a>
            </Col>
        </FormGroup>
        <FormGroup row>
          <Col >
            <Button type='submit' color='primary'>Login</Button>
            {loginError?<p className="text-danger">Please enter valid username and password</p>:null}
            
            </Col>
        </FormGroup>
      </Form>

    </Formik>
  )
}

export default LoginForm;

