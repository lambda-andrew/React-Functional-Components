import React from 'react';
import './Card.css';
import CardBanner from './CardBanner';

const CardContainer = () => {
    return (
        <div className="banner-wrapper">
        <CardBanner />
        <CardContent />
      </div>
    );
};

export default CardContainer;