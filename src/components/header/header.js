import React from 'react';
import './header.scss';

const Header = (props) => {
    return (
        <header data-test="headerComponent">
            <div className='wrap'>
                <div className="logo">
                    <h3 data-test="heading">React Testing</h3>
                </div>
            </div>
        </header>
    )
};

export default Header;