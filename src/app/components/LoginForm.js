import { Button,Label,Col,FormGroup } from "reactstrap";
import {Formik, Field, Form, ErrorMessage} from 'formik'
import { validateLoginForm } from "../utils/validateLoginForm";


const LoginForm = () => {

  const handleSubmit = (values, {resetForm})=>{
    console.log(values);
    console.log(JSON.stringify(values))
    resetForm();
  }

  return (
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
          </Col>
        </FormGroup>
      </Form>
    </Formik>
  )
}

export default LoginForm;

