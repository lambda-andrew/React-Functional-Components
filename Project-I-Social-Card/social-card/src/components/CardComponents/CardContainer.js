import React from 'react';
import './Card.css';
import CardBanner from './CardBanner';
import CardContent from './CardContent';

const CardContainer = (props) => {
  return (
    <div className = "card-content">
      <div className = "card-banner">
        <CardBanner />
      </div>
      <CardContent />
    </div>
  );
}
export default CardContainer;
