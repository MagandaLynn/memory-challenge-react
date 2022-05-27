import { Container, Row } from "reactstrap"
import MemorizeLists from "../components/lists/MemorizeLists"
import MemorizeMemoryPalace from "../components/memoryPalace/MemorizeMemoryPalace"
import MemorizeNumbers from "../components/numbers/MemorizeNumbers"
import MemorizeCards from "../components/pao/MemorizeCards"

const MemorizePage = () => {
  return (
    <Container>
      <Row className="mt-4">
        <MemorizeMemoryPalace />
        <MemorizeLists />
        <MemorizeNumbers />
        <MemorizeCards />
      </Row>
    </Container>
  )
}

export default MemorizePage