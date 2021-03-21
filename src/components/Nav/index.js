import React, { useEffect } from 'react';

function Nav(props) {
    const navSections = ['About Me', 'Portfolio', 'Contact', 'Resume'];

    return (
        <section>
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
        </section>
    );
}

export default Nav;