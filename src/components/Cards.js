import React from 'react'
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';

const Cards = ({children, title}) => {
  return (
    <Card className="h-100">
      <Card.Header>{title}</Card.Header>
      <Card.Body className="p-0"> 
        {children}
      </Card.Body>
    </Card>
  )
}

Cards.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired
};

export default Cards