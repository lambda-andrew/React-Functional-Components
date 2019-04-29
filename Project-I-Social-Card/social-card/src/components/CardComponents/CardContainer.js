import React from 'react';
import './Card.css';
import HeaderContainer from '../HeaderComponents/HeaderContainer';
import CardContent from './CardContent';
import Footer from '../FooterComponents/Footer' ;

const Card = () => {
  return (
  <div>
    <HeaderContainer/>
    <CardContent/>
    <Footer/>
  </div>
)};

export default Card ;