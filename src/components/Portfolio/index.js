import React from 'react';

function Portfolio() {

    return(
        <section id="work" class="work-section">
            <div class="flex-row">
                <h2 class="section-title secondary-border">
                    Work
                </h2>
            </div>
            
            <div class="work-grid-wrapper">
                <div class="work-grid-container">
                    <div class="work-grid-item fridge">
                        <div>
                            <h2><a class="link" href="https://fridg3-fri3nd.herokuapp.com/" target="_blank">Fridge Friend</a></h2>
                            <h3><a class="link" href="https://github.com/jbeedle19/fridge-friend" target="_blank">GitHub Repo</a></h3>
                            <h4>Exrpess.js / Sequelize / Handlebars.js / Tailwind CSS /  Nodemailer</h4>
                        </div>
                    </div>
                    <div class="work-grid-item movers">
                        <div>
                            <h2><a class="link" href="https://jbeedle19.github.io/movers-not-shakers/" target="_blank">Movers Not Shakers</a></h2>
                            <h3><a class="link" href="https://github.com/jbeedle19/movers-not-shakers" target="_blank">GitHub Repo</a></h3>
                            <h4>jQuery / Bulma CSS / Google Maps API / OpenWeather API</h4>
                        </div>
                    </div>
                    <div class="work-grid-item weather">
                        <div>
                            <h2><a class="link" href="https://jbeedle19.github.io/weather-dashboard/" target="_blank">Weather Dashboard</a></h2>
                            <h3><a class="link" href="https://github.com/jbeedle19/weather-dashboard" target="_blank">GitHub Repo</a></h3>
                            <h4>jQuery / Bootstrap / Moment.js</h4>
                        </div>
                    </div>
                    <div class="work-grid-item blog">
                        <div>
                            <h2><a class="link" href="https://the-t3ch-blog.herokuapp.com/" target="_blank">Tech Blog</a></h2>
                            <h3><a class="link" href="https://github.com/jbeedle19/tech-blog" target="_blank">GitHub Repo</a></h3>
                            <h4>Express.js / Sequelize / Handlebars.js</h4>
                        </div>
                    </div>
                    <div class="work-grid-item quiz">
                        <div>
                            <h2><a class="link" href="https://jbeedle19.github.io/code-quiz/" target="_blank">Code Quiz</a></h2>
                            <h3><a class="link" href="https://github.com/jbeedle19/code-quiz" target="_blank">GitHub Repo</a></h3>
                            <h4>HTML / CSS / JavaScript</h4>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Portfolio;