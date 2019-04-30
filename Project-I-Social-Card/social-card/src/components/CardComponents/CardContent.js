import React from 'react';
import './Card.css';
import CardBanner from './CardBanner';

const CardContent = () => {
  return (
    <div >
    <CardBanner/>
      <div id = "top">

      <h1>get started with react</h1>
      <p>
        react makes it painless to creatte interative uis. design simple views for each state in yout apllication
      </p>
      <address>reactttjs.org</address>
      </div>
    </div>
  )
};

export default CardContent ;