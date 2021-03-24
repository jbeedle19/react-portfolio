import React from 'react';
import Nav from '../Nav';

function Header({ currentNavSection, handleSectionChange }) {

    return (
        <header>
            <h1>
                <a href='/' className='name'>
                    Beedle
                </a>
            </h1>
            <Nav
                currentNavSection={currentNavSection}
                handleSectionChange={handleSectionChange}
            ></Nav>
        </header>
    )
}

export default Header;