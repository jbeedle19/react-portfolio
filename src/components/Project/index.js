import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';

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
        title: {
            color: '#7389ae',
        },
        titleBar: {
            background:
                'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
        }
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
                    <GridListTileBar 
                        title={project.title}
                        classes={{
                            root: classes.titleBar,
                            title: classes.title,
                        }}
                        actionIcon={
                            <IconButton aria-label={`GitHub ${project.title}`}>
                                <GitHubIcon className={classes.title} />
                            </IconButton>
                        }
                    />
                </GridListTile>
            ))}
            </GridList>
        </div>
    );
}

export default Project;