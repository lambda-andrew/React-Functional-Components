import React from 'react';
import './Header.css';
import ImageThumbnail from './ImageThumbnail';
import HeaderContent from './HeaderContent';
import HeaderTitle from './HeaderTitle';

const HeaderContainer = () => {
  return (
    <header>
    <div className = "thumbnail-title">
      <HeaderTitle />
      <ImageThumbnail />
    </div>
      <div className = "header-content">
        <HeaderContent />
      </div>
    </header>
  );
}
