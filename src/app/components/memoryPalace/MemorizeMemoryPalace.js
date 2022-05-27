import { Card, CardBody, CardHeader, Col } from "reactstrap"

const MemorizeMemoryPalace = () => {
    return (
        <Col xs='6' md='3' className="mx-auto text-center">
            <Card className="card-style">           
                <CardHeader>Palace</CardHeader>
                <CardBody className="mt-4">
                    <i class="fa fa-fort-awesome fa-4x"></i>
                </CardBody>
            </Card>
        </Col>
    )
}

export default MemorizeMemoryPalace