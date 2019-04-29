import React from 'react';
import './Card.css';

const CardContent = (props) => {
  return (
    <div className = "card-content">
      <h3>Get Started With React</h3>
      <p>React makes it painless to create interactive UIs. Design simple views for each state in your application</p>
      <a className = "link" href = "https:reactjs.org" target = "_blank">reactjs.org</a>
    </div>
  );
}

export default CardContent;
