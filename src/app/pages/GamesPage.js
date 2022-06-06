import { useSelector } from "react-redux";
import { Container, Row } from "reactstrap"
import Menu from "../components/Menu"
import { GAMESMENU } from "../shared/GAMESMENU"
import { selectCurrentUser } from "../../features/users/usersSlice";
import LoginPage from "./LoginPage";

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