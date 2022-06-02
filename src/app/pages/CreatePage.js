import { Container, Row } from "reactstrap"
import Menu from "../components/Menu"
import {CREATEMENU} from '../shared/CREATEMENU'

const CreatePage = () => {
  const createMenu=CREATEMENU;
  return (
    <Container>
      <Row className="mt-4">
          <Menu menuItems={createMenu} />
      </Row>
      
    </Container>
  )
}

export default CreatePage