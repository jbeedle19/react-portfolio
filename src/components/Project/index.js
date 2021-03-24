import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

import fridgeImage from '../../assets/images/fridge.svg';
import moversImage from '../../assets/images/movers-not-shakers.jpg';
import techImage from '../../assets/images/blog-favicon.png';
import codeImage from '../../assets/images/quiz-favicon.png';
import weatherImage from '../../assets/images/weather-favicon.png';

function Project() {
    const useStyles = makeStyles((theme) => ({
        root: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            overflow: 'hidden',
            backgroundColor: '#7389ae',
        },
        gridList: {
            width: 500,
            height: 450,
        },
    }));

    const classes = useStyles();

    const projectData = [
        {
            img: fridgeImage,
            title: 'Fridge Friend',
            description: 'Express / Sequelize / Handlebars.js / Tailwind / Nodemailer',
            cols: 2,
        },
        {
            img: moversImage,
            title: 'Movers Not Shakers',
            description: 'jQuery / Bulma CSS / Google Maps API / OpenWeather API',
            cols: 1,
        },
        {
            img: techImage,
            title: 'Tech Blog',
            description: 'Express / Sequelize / Handlebars.js',
            cols: 1,
        },
        {
            img: codeImage,
            title: 'Code Quiz',
            description: 'HTML / CSS / JavaScript',
            cols: 1,
        },
        {
            img: weatherImage,
            title: 'Weather Dashboard',
            description: 'jQuery / Bootstrap / Moment.js',
            cols: 1,
        }
    ];

    return (
        <div className={classes.root}>
            <GridList cellHeight={160} className={classes.gridList} cols={3}>
            {projectData.map((project) => (
                <GridListTile key={project.title} cols={project.cols || 1}>
                    <img src={project.img} alt={project.title} />
                </GridListTile>
            ))}
            </GridList>
        </div>
    );
}

export default Project;