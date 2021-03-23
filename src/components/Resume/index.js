import React from 'react';
import pdf from '../../assets/images/JoshuaBeedleResume.pdf';

function Resume() {

    return (
        <section className='contact-section'>
            <div>
                <h2 className='section-title secondary-border'>Resume</h2>
                <p>Download My <a target="_blank" rel="noreferrer" href={pdf}>Resume</a></p>
            </div>
            <div>
                <h3>Front-end Proficiencies</h3>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>jQuery</li>
                    <li>React</li>
                    <li>Bootstrap, Tailwind, Material-UI</li>
                    <li>Responsive Design</li>
                </ul>
            </div>
            <div>
                <h3>Back-end Proficiencies</h3>
                <ul>
                    <li>APIs</li>
                    <li>Node</li>
                    <li>Express</li>
                    <li>MySQL, Sequelize</li>
                    <li>MongoDB, Mongoose</li>
                    <li>REST</li>
                    <li>GraphQL</li>
                </ul>
            </div>
        </section>
    )
}

export default Resume;