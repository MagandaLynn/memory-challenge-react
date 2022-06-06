import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Col, Container, Row } from 'reactstrap'
import CompletedGoals from './CompletedGoals'
import CurrentGoals from './CurrentGoals'
import { removeNewStatus, selectCurrentUser} from '../users/usersSlice'
import { addUserGoal } from './goalsSlice'

const Goals = () => {
    const user = useSelector(selectCurrentUser);
    
       
    return (    
    <Container>
        
        <Row>
            <Col xs='12' className='text-center'><h2>Welcome Back {user.name}</h2></Col>
        </Row>
        <Row>
            <Col md='6'>
                <CurrentGoals />
            </Col>
            <Col md='6'>
                <CompletedGoals />
            </Col>
        </Row>

    </Container>
  )
}

export default Goals