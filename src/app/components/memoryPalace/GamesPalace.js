import { Card, CardBody, CardHeader, Col } from "reactstrap"

const GamesPalace = () => {
    return (
        <Col xs='6' md='3' className="mx-auto text-center">
            <Card className="card-style">           
                <CardHeader>Palace</CardHeader>
                <CardBody className="mt-2">
                    
                    <i className="fa fa-fort-awesome fa-4x"></i>
                </CardBody>
            </Card>
        </Col>
    )
}

export default GamesPalace