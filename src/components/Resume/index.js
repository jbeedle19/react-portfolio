import React from 'react';
import pdf from '../../assets/images/JoshuaBeedleResume.pdf';
import ListGroup from 'react-bootstrap/ListGroup';
import DescriptionIcon from '@material-ui/icons/Description';

function Resume() {
    const frontEndProficiencies = ["HTML", "CSS", "JavaScript", "jQuery", "React", "Bootstrap, Tailwind, Material-UI", "Responsive Design"];
    const backEndProficiencies = ["APIs", "Node", "Express", "MySQL & Sequelize", "MongoDB & Mongoose", "REST", "GraphQL"];

    return (
        <section className='contact-section'>
            <div>
                <h2 className='section-title secondary-border'>Resume</h2>
                <p>Download My Resume | <a target="_blank" rel="noreferrer" href={pdf}><DescriptionIcon /></a></p>
            </div>
            <div>
                <h3>Front-end Proficiencies</h3>
                <ListGroup variant="flush" className="my-3">
                    {frontEndProficiencies.map((context) => {
                        return <ListGroup.Item 
                            key={context}
                            className="bg-primary w-50 ml-5">
                        * {context}
                        </ListGroup.Item>
                    })}
                </ListGroup>
            </div>
            <div>
                <h3>Back-end Proficiencies</h3>
                <ListGroup variant="flush" className='my-3'>
                    {backEndProficiencies.map((context) => {
                        return <ListGroup.Item 
                            key={context}
                            className="bg-primary w-50 ml-5">
                        * {context}
                        </ListGroup.Item>
                    })}
                </ListGroup>
            </div>
        </section>
    )
}

export default Resume;