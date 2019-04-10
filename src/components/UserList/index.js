import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './UsersListStyle.css.css';

export default ({ projectProps, userProps }) =>

    <div className="users-list">
        <div className="users-list__area">
            <Card className="card">
                <CardActionArea>
                    <CardMedia
                        className="media"
                        image="/static/images/cards/contemplative-reptile.jpg"
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Lizard
                        </Typography>
                        <Typography component="p">
                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                            across all continents except Antarctica
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        Share
                    </Button>
                    <Button size="small" color="primary">
                        Learn More
                    </Button>
                </CardActions>
            </Card>
            {/*{(projectProps.length > 0)*/}
                {/*? (*/}
                    {/*<>*/}
                        {/*{userProps.map( (item, index) => {*/}
                                {/*return (*/}
                                    {/*<div key={item.id} className="users-list__item">*/}
                                        {/*<div className="users-list__item">*/}
                                            {/*<div className="users-list__item-name">{item.login}</div>*/}
                                            {/*<div className="users-list__item-photo">*/}
                                                {/*<img src={item.avatar_url} alt=""/></div>*/}
                                        {/*</div>*/}
                                        {/*{projectProps[index].map( project => {*/}
                                            {/*return (*/}
                                                {/*<div key={project.id} className="users-list__project">*/}
                                                    {/*<div className="users-list__project-name">{project.name}</div>*/}
                                                {/*</div>*/}
                                            {/*)*/}
                                        {/*})}*/}
                                    {/*</div>*/}
                                {/*)*/}
                        {/*})}*/}

                    {/*</>*/}

                {/*) : ( <div className="users-list__item-none">No User added</div> )*/}
            {/*}*/}
        </div>
    </div>