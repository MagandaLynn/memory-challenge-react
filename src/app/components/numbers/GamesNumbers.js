import { Card, CardBody, CardHeader, Col } from "reactstrap"

const GamesNumbers = () => {
    return (
        <Col xs='6' md='3' className="mx-auto text-center">
            <Card className="card-style">           
                <CardHeader>Quick Numbers</CardHeader>
                <CardBody className="mt-1">
                    <p className="large-icon">3 8</p>
                </CardBody>
            </Card>
        </Col>
    )
}

export default GamesNumbers