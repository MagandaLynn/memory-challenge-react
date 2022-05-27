import { Card, CardBody, CardHeader, Col } from "reactstrap"


const CreateMemoryPalace = () => {
  return (
    <Col sm='6' className="mx-auto text-center" >
        <Card className="card-style" >
            <CardHeader >Memory Palace</CardHeader>
            <CardBody>Make your first memory palace</CardBody>
        </Card>
    </Col>
  )
}

export default CreateMemoryPalace