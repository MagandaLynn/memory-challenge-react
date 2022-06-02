import React from 'react'
import { Card, CardBody, CardHeader } from 'reactstrap'

const MenuItem = ({menuItem}) => {
  return (
    <Card className={menuItem.type==='create'?'create-card-style':'card-style'}  style={{backgroundColor: menuItem.bg}}>
        <CardHeader>{menuItem.title}</CardHeader>
        <CardBody>{menuItem.desc?menuItem.desc:<i className={menuItem.icon} />}</CardBody>
    </Card>
  )
}

export default MenuItem