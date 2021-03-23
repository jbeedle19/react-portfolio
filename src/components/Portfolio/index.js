import React from 'react';

function Portfolio() {

    return(
        <section id="work" className="work-section">
            <div className="flex-row">
                <h2 className="section-title secondary-border">
                    Work
                </h2>
            </div>
            
            <div className="work-grid-wrapper">
                <div className="work-grid-container">
                    <div className="work-grid-item fridge">
                        <div>
                            <h2><a className="link" href="https://fridg3-fri3nd.herokuapp.com/" target="_blank" rel="noreferrer">Fridge Friend</a></h2>
                            <h3><a className="link" href="https://github.com/jbeedle19/fridge-friend" target="_blank" rel="noreferrer">GitHub Repo</a></h3>
                            <h4>Exrpess.js / Sequelize / Handlebars.js / Tailwind CSS /  Nodemailer</h4>
                        </div>
                    </div>
                    <div className="work-grid-item movers">
                        <div>
                            <h2><a className="link" href="https://jbeedle19.github.io/movers-not-shakers/" target="_blank" rel="noreferrer">Movers Not Shakers</a></h2>
                            <h3><a className="link" href="https://github.com/jbeedle19/movers-not-shakers" target="_blank" rel="noreferrer">GitHub Repo</a></h3>
                            <h4>jQuery / Bulma CSS / Google Maps API / OpenWeather API</h4>
                        </div>
                    </div>
                    <div className="work-grid-item weather">
                        <div>
                            <h2><a className="link" href="https://jbeedle19.github.io/weather-dashboard/" target="_blank" rel="noreferrer">Weather Dashboard</a></h2>
                            <h3><a className="link" href="https://github.com/jbeedle19/weather-dashboard" target="_blank" rel="noreferrer">GitHub Repo</a></h3>
                            <h4>jQuery / Bootstrap / Moment.js</h4>
                        </div>
                    </div>
                    <div className="work-grid-item blog">
                        <div>
                            <h2><a className="link" href="https://the-t3ch-blog.herokuapp.com/" target="_blank" rel="noreferrer">Tech Blog</a></h2>
                            <h3><a className="link" href="https://github.com/jbeedle19/tech-blog" target="_blank" rel="noreferrer">GitHub Repo</a></h3>
                            <h4>Express.js / Sequelize / Handlebars.js</h4>
                        </div>
                    </div>
                    <div className="work-grid-item quiz">
                        <div>
                            <h2><a className="link" href="https://jbeedle19.github.io/code-quiz/" target="_blank" rel="noreferrer">Code Quiz</a></h2>
                            <h3><a className="link" href="https://github.com/jbeedle19/code-quiz" target="_blank" rel="noreferrer">GitHub Repo</a></h3>
                            <h4>HTML / CSS / JavaScript</h4>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Portfolio;