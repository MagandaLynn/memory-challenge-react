import { Field, Form, Formik } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import { Card, CardBody, CardHeader, Label, Button, FormGroup } from 'reactstrap'
import { addUserGoal, completeUserGoal, selectCurrentUserGoals } from '../../features/goals/goalsSlice'
import { selectCurrentUser } from '../../features/users/usersSlice'


const CurrentGoals = () => {
    //to be updated using slice
    const dispatch=useDispatch();
    const currentUser=useSelector(selectCurrentUser)
    const currentGoals = useSelector(selectCurrentUserGoals)
    const handleUpdate = (values,{resetForm}) => {
        console.log("values", values)
        if(values.newGoal){
            dispatch(addUserGoal({text: values.newGoal,completed: false, user: currentUser.email}))
        }
        currentGoals.map((goal, id)=>{
            if(values[id]){
                dispatch(completeUserGoal({...goal, completed:true}))
            }
        })
        resetForm();
    }
    return (
    <Card>
        <CardHeader>Current Goals</CardHeader>
        <CardBody>
            <Formik
                initialValues={{
                    newGoal: ''
                }}
                onSubmit={handleUpdate}
                //insert validation
            >
                <Form>       
                {currentGoals?currentGoals.map((goal, id)=>(
                    <FormGroup key={id}>
                        <Field type="checkbox" className="form-check-input" name={id}  />
                        {' '}
                        <Label htmlFor={id}>{goal.text}</Label>
                    </FormGroup>
                )):<p>Please add a goal</p>}
                    <FormGroup>
                        <Field type='text' className='form-control' placeholder='New Goal' name='newGoal' id='newGoal'/>
                    </FormGroup>
                    <Button type='sumbit'>Update</Button>
                </Form>
            </Formik>
        </CardBody>
        
    </Card>
  )
}

export default CurrentGoals