import { Container, Row } from "reactstrap"
import GamesPalace from "../components/memoryPalace/GamesPalace"
import GamesNumbers from "../components/numbers/GamesNumbers"
import GamesPao from "../components/pao/GamesPao"

const GamesPage = () => {
  return (
    <Container>
      <Row className="mt-4">
        <GamesPalace />
        <GamesNumbers />
        <GamesPao />
      </Row>
    </Container>
  )
}

export default GamesPage