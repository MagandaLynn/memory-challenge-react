import React from 'react'
import { Col, Row } from 'reactstrap'
import MenuItem from './MenuItem'

const Menu = ({menuItems}) => {
    
    return (
        <Row>
        {menuItems.map((menuItem)=>(
            <Col sm={menuItem.type==='create'?'11':'3'} className="mx-auto text-center text-white">
                <MenuItem menuItem={menuItem} key={menuItem.id} />
            </Col>
        ))}
        </Row>
      )
}

export default Menu