import { Card, CardBody, CardHeader, Col } from "reactstrap"

const CreateNumbers = () => {
    return (
        <Col sm='6' className="mx-auto text-center">
            <Card className="card-style"  >
                <CardHeader>Numbers</CardHeader>
                <CardBody>Now turn images into numbers. A toad? That's 11 of course. And a moose? That's 30</CardBody>
            </Card>
        </Col>
      )
}

export default CreateNumbers