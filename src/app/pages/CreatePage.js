import { useSelector } from "react-redux";
import { Container, Row } from "reactstrap"
import Menu from "../components/Menu"
import { loadCreateMenu } from "../../features/create/createPageSlice";

const CreatePage = () => {
  
  const createMenu=useSelector(loadCreateMenu);
  console.log(createMenu)
  return (
    <Container>
      <Row className="mt-4">
          <Menu menuItems={createMenu} />
      </Row>
      
    </Container>
  )
}

export default CreatePage