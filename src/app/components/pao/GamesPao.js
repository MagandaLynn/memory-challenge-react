import { Card, CardBody, CardHeader, Col } from "reactstrap"

const GamesPao = () => {
    return (
        <Col xs='6' md='3' className="mx-auto text-center">
            <Card className="card-style">           
                <CardHeader>Speed PAO</CardHeader>
                <CardBody className="mt-2">
                    <p className="large-icon">PAO</p>
                </CardBody>
            </Card>
        </Col>
    )
}

export default GamesPao