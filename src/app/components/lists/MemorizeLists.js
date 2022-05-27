import { Card, CardBody, CardHeader, Col } from "reactstrap"

const MemorizeLists = () => {
    return (
        <Col xs='6' md='3' className="mx-auto text-center">
            <Card className="card-style">           
                <CardHeader>Lists</CardHeader>
                <CardBody className="mt-4">
                    
                <i className="fa fa-list fa-4x"></i>
                </CardBody>
            </Card>
        </Col>
    )
}

export default MemorizeLists