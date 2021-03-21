import React, { useEffect } from 'react';

function Nav() {

    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <a href='#about'>About Me</a>
                    </li>
                    <li>
                        <a href='#portfolio'>Portfolio</a>
                    </li>
                    <li>
                        <a href='#contact'>Contact Me</a>
                    </li>
                    <li>
                        <a href='#resume'>Resume</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Nav;