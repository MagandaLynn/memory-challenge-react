import React from 'react'
import { NavLink } from 'react-router-dom'
import { Card, CardBody, CardHeader } from 'reactstrap'

const MenuItem = ({menuItem}) => {
  console.log(menuItem)
  return (
    <NavLink className='nav-link text-white'  to={menuItem.nav || "/"}>

      <Card className={menuItem.type==='create'?'create-card-style':'card-style'}  style={{backgroundColor: menuItem.bg}}>
          <CardHeader>{menuItem.title}</CardHeader>
          <CardBody>{menuItem.desc?menuItem.desc:<i className={menuItem.icon} />}</CardBody>
      </Card>
    </NavLink>
  )
}

export default MenuItem