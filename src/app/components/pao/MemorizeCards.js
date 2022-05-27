import { Card, CardBody, CardHeader, Col } from "reactstrap"

const MemorizeCards = () => {
  return (
    <Col xs='6' md='3' className="mx-auto text-center">
        <Card className="card-style">           
            <CardHeader>Cards</CardHeader>
            <CardBody className="mt-3">
                
                <div class="box mx-auto">
                    <div class="card-sm-1"></div>
                    <div class="card-sm-2"></div>
                </div>
            </CardBody>
        </Card>
    </Col>
    )
}

export default MemorizeCards