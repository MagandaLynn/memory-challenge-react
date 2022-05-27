
import { Container, Row } from "reactstrap";
import LoginPage from "./LoginPage";


const HomePage = () => {
  return(
    <Container>
      <Row className='mt-4'>
        <LoginPage />
      </Row>
      
    </Container>
  )
}

export default HomePage