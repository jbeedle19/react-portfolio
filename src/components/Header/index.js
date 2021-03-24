import React from 'react';
import Nav from '../Nav';

function Header({ currentNavSection, handleSectionChange }) {

    return (
        <header>
            <h1>
                <a href={process.env.PUBLIC_URL} className='name'>
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