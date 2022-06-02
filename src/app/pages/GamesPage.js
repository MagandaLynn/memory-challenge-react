import { Container, Row } from "reactstrap"
import Menu from "../components/Menu"
import { GAMESMENU } from "../shared/GAMESMENU"

const GamesPage = () => {
  const gamesMenu=GAMESMENU;
  return (
    <Container>
      <Row className="mt-4">
          <Menu menuItems={gamesMenu} />
      </Row>
      
    </Container>
  )
}

export default GamesPage