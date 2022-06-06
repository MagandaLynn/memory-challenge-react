import React, { useState } from 'react'
import { Button, Card, CardBody, CardHeader, Col, Container, Modal, ModalBody, ModalHeader, Row } from 'reactstrap'
import PalaceRoomCard from './PalaceRoomCard';

const CreateMemoryPalace = () => {
  
  const [modalOpen,setModalOpen]=useState(false);
  

  return (
    <>
    <Container>
      <Row>
        <Col xs={12} className="text-center my-3"><btn onClick={()=>setModalOpen(true)}className="modal-link ">How to create a memory palace</btn>
    </Col>
      </Row>

      <Row>
        <Col xs={9}><PalaceRoomCard /></Col>
        <Col xs={3}>
          <Row>
            <Col xs={10}><Button className='btn-primary my-2'>Save Palace</Button></Col>
            
            <Col xs={10}><Button className='btn-primary my-2'>Open Saved Palace</Button></Col>
          </Row>
        </Col>  
      </Row>
      <Row>
        <Col><Button>Add Room</Button></Col>
      </Row>

    
    </Container>

    <Modal isOpen={modalOpen}>
      <ModalHeader toggle={()=>setModalOpen(false)}>
          How to create a memory palace
      </ModalHeader>
      <ModalBody>insert directions here</ModalBody>
    </Modal>
    </>
  )
}

export default CreateMemoryPalace