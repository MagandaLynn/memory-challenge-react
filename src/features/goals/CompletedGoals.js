import { Field, Form, Formik } from 'formik'
import React from 'react'
import { useSelector } from 'react-redux'
import { Card, CardBody, CardHeader, Input, Label } from 'reactstrap'
import { selectCompletedUserGoals } from '../../features/goals/goalsSlice'

const CompletedGoals = () => {
    const completedGoals = useSelector(selectCompletedUserGoals)
    
  return (
    <Card>
        <CardHeader>Completed Goals</CardHeader>
        <CardBody>
            <Formik>
                <Form>
                    {completedGoals?completedGoals.map((goal, id)=>(
                        <div key={id}>
                            <Field type="checkbox" className="form-check-input" readOnly checked   id={id}/>
                            {' '}
                            <Label htmlFor={id}>{goal.text}</Label>
                        </div>
                    )):<p>No goals completed yet</p>}
                </Form>
            </Formik>
        </CardBody>
        
    </Card>
  )
}

export default CompletedGoals