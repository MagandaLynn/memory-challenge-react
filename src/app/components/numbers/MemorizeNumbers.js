import { Card, CardBody, CardHeader, Col } from "reactstrap"

const MemorizeNumbers = () => {
    return (
        <Col xs='6' md='3' className="mx-auto text-center">
            <Card className="card-style">           
                <CardHeader>Numbers</CardHeader>
                <CardBody className="mt-3">
                    <p class="large-icon">#</p>
                </CardBody>
            </Card>
        </Col>
    )
}

export default MemorizeNumbers