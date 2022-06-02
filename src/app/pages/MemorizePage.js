import { Container, Row } from "reactstrap"
import Menu from "../components/Menu";
import { MEMORIZEMENU } from "../shared/MEMORIZEMENU";

const MemorizePage = () => {
  const memorizeMenu=MEMORIZEMENU;
  return (
    <Container>
      <Row className="mt-4">
          <Menu menuItems={memorizeMenu} />
      </Row>
      
    </Container>
  )
}

export default MemorizePage