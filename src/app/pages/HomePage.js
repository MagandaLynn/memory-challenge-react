
import { useDispatch, useSelector } from "react-redux";
import { Container, Row } from "reactstrap";
import Error from "../components/Error";
import Goals from "../../features/goals/Goals";
import Loading from "../components/Loading";
import { loadUserGoals, setUser } from "../../features/goals/goalsSlice";
import { selectCurrentUser } from "../../features/users/usersSlice";
import LoginPage from "./LoginPage";


const HomePage = () => {
  const currentUser=useSelector(selectCurrentUser);
  
  const dispatch=useDispatch();
  dispatch(setUser(currentUser.email))
  dispatch(loadUserGoals())
  return (
    <div><Goals /></div>
  )
}
  

export default HomePage