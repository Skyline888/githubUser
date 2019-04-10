import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import './UsersListStyle.css';

export default ({ projectProps, userProps }) =>

    <div className="users-list">
        <div className="users-list__area">
            {(projectProps.length > 0)
                ? (
                    <>
                        {userProps.map( (item, index) => {
                                return (
                                    <Card key={item.id} className="users-list__card">
                                        <CardActionArea>
                                            <CardMedia
                                                className="users-list__media"
                                                image={item.avatar_url}
                                            />
                                            <Typography gutterBottom variant="h5" component="h2" className="users-list__title">
                                                {item.login}
                                            </Typography>
                                            <CardContent className="users-list__сontent">
                                                {(Array.isArray(projectProps[index]))
                                                    ? (projectProps[index].map( project => {
                                                        return (
                                                            <div key={project.id} className="users-list__project">
                                                                <div className="users-list__project-name">{project.name}</div>
                                                            </div>
                                                        )
                                                    })
                                                    ) : (( <div className="users-list__item-none">No Project for this User</div> ))
                                                }
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                )
                        })}

                    </>

                ) : ( <div className="users-list__item-none">No User added</div> )
            }
        </div>
    </div>