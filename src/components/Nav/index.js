import React, { useEffect } from 'react';

function Nav(props) {
    const navSections = ['About Me', 'Portfolio', 'Contact', 'Resume'];

    return (
        <header>
            <nav>
                <ul>
                    {navSections.map(section => (
                        <li key={section}>
                            <a
                                href={'#' + section.toLowerCase()}
                                onClick={() => props.handleSectionChange(section)}
                            >
                                {section}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default Nav;