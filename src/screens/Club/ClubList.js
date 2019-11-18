import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Row, Col, Container } from "react-bootstrap";

import { useSelector, useDispatch } from "react-redux";
import { requestClub } from "store/actions/getInfo";
import { Link } from "react-router-dom";
import "./ClubList.scss";

const ClubList = ({ match }) => {
    const dispatch = useDispatch();
    const clubs = useSelector(state => state.clubReducer.clubInfo);

    useEffect(() => {
        dispatch(requestClub());
    }, []);

    const useStyles = makeStyles({
        card: {
            maxWidth: 300
        },
        media: {
            height: 150
        },
        text: {
            height: 120
        }
    });

    const classes = useStyles();

    return (
        <div>
            <Container>
                <Row>
                    {clubs.results &&
                        clubs.results.map(club => {
                            return (
                                <Col md={4}>
                                    <div className="block">
                                        <Card className={classes.card}>
                                            <CardActionArea>
                                                <CardMedia className={classes.media} />
                                                <CardContent>
                                                    <Typography gutterBottom variant="h5" component="h2" className={classes.text}>
                                                        {club.title}
                                                    </Typography>
                                                    {/*<Typography variant="body2" color="textSecondary" component="p">
                        </Typography>*/}
                                                </CardContent>
                                            </CardActionArea>
                                            <CardActions>
                                                <Button size="small" color="primary">
                                                    Share
                                                </Button>
                                                <Link to={`${match.url}/${club.id}`}>
                                                    <Button size="small" color="primary">
                                                        More Info
                                                    </Button>
                                                </Link>
                                            </CardActions>
                                        </Card>
                                    </div>
                                </Col>
                            );
                        })}
                </Row>
            </Container>
        </div>
    );
};

export default ClubList;