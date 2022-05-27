import { Container, Row } from "reactstrap"
import { CreateLists } from "../components/lists/CreateLists"
import CreateMemoryPalace from "../components/memoryPalace/CreateMemoryPalace"
import CreateNumbers from "../components/numbers/CreateNumbers"
import CreatePao from "../components/pao/CreatePao"

const CreatePage = () => {
  return (
    <Container>
      <Row className="mt-4">
        <CreateMemoryPalace />
        <CreateLists />
        <CreateNumbers />
        <CreatePao />
      </Row>
      
    </Container>
  )
}

export default CreatePage