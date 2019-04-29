import React from 'react';
import './Header.css';
import HeaderContent from './HeaderContent';


const HeaderTitle = () => {
    return(
        <div className='headerTitle'>
            <div>
                <h3>Lambda School <span>@LambdaSchool - 26 Jan</span></h3>
            </div>
            <div>
                <HeaderContent />
            </div>
        </div>
    );
}

export default HeaderTitle;