import React from 'react';
import pdf from '../../assets/images/JoshuaBeedleResume.pdf';
import ListGroup from 'react-bootstrap/ListGroup';

function Resume() {

    return (
        <section className='contact-section'>
            <div>
                <h2 className='section-title secondary-border'>Resume</h2>
                <p>Download My <a target="_blank" rel="noreferrer" href={pdf}>Resume</a></p>
            </div>
            <div>
                <h3>Front-end Proficiencies</h3>
                <ListGroup variant="flush">
                    <ListGroup.Item>HTML</ListGroup.Item>
                    <ListGroup.Item>CSS</ListGroup.Item>
                    <ListGroup.Item>JavaScript</ListGroup.Item>
                    <ListGroup.Item>jQuery</ListGroup.Item>
                    <ListGroup.Item>React</ListGroup.Item>
                    <ListGroup.Item>Bootstrap, Tailwind, Material-UI</ListGroup.Item>
                    <ListGroup.Item>Responsive Design</ListGroup.Item>
                </ListGroup>
            </div>
            <div>
                <h3>Back-end Proficiencies</h3>
                <ListGroup variant="flush">
                    <ListGroup.Item>APIs</ListGroup.Item>
                    <ListGroup.Item>Node</ListGroup.Item>
                    <ListGroup.Item>Express</ListGroup.Item>
                    <ListGroup.Item>MySQL & Sequelize</ListGroup.Item>
                    <ListGroup.Item>MongoDB & Mongoose</ListGroup.Item>
                    <ListGroup.Item>REST</ListGroup.Item>
                    <ListGroup.Item>GraphQL</ListGroup.Item>
                </ListGroup>
            </div>
        </section>
    )
}

export default Resume;