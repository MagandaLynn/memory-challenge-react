import { Card, CardBody, CardHeader, Col, Row } from "reactstrap"



const PalaceRoomCard = () => {
    const roomsData=[
        {area: "Outside", loc1: "Mailbox", loc2: "Driveway", loc3: "Flowerbed", loc4: "Front Porch", loc5: "Front Door"},
        {area: "Living Room", loc1: "Fish Tank", loc2: "TV", loc3: "Computer Desk", loc4: "Couch", loc5: "Endtable"},
        {area: "Kitchen", loc1: "Counter", loc2: "Sink", loc3: "Stove", loc4: "Pantry", loc5: "Refrigerator"},
        {area: "Bathroom", loc1: "Towel Rack", loc2: "Shower/Tub", loc3: "Toilet", loc4: "Sink/Mirror", loc5: "Cupboard"},
        {area: "My Bedroom", loc1: "Closet", loc2: "Bunk bed", loc3: "Dresser", loc4: "Stereo", loc5: "Desk"}
    ]
    return (
        <Row>
            <Col xs={12} md={7} className='mx-auto text-center my-3'><h3>Childhood Home</h3></Col>
        
            {roomsData.map((room,id)=>(
            <Col xs={12} md={7} className='mx-auto'>
                <Card key={id}>
                    <CardHeader>{room.area}</CardHeader>
                    <CardBody>
                        <p>{id*5+1} - {room.loc1}</p>
                        <p>{id*5+2} - {room.loc2}</p>
                        <p>{id*5+3} - {room.loc3}</p>
                        <p>{id*5+4} - {room.loc4}</p>
                        <p>{id*5+5} - {room.loc5}</p>
                    </CardBody>
                </Card>
            </Col>
            ))}
        </Row>
    )
}

export default PalaceRoomCard