import React from 'react';
import './Card.css';

const CardContent = (props) => {
  return (
    <div className = "card-content">
      <h3>Get Started With React</h3>
      <p>React makes it painless to create interactive UIs. Design simple views for each state in your application</p>
      <p className = "link"><a href = "https:reactjs.org" target = "_blank">reactjs.org</a></p>
    </div>
  );
}

export default CardContent;
