import React from 'react';
import './header.scss';

const Header = (props) => {
    return (
        <header>
            <div className='wrap'>
                <div className="logo">
                    <h3>React Testing</h3>
                </div>
            </div>
        </header>
    )
};

export default Header;