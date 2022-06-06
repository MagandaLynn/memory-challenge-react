import React from 'react'
import { Col, NavLink, Row } from 'reactstrap'
import MenuItem from './MenuItem'

const Menu = ({menuItems}) => {
    
    return (
        <Row>
        {menuItems.map((menuItem)=>(
            <Col sm={menuItem.type==='create'?'11':'6'} className="mx-auto text-center m-0">
                <MenuItem menuItem={menuItem} key={menuItem.id} />
            </Col>
        ))}
        </Row>
      )
}

export default Menu