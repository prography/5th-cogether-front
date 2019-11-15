import React, {useEffect} from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { Row, Col, Container } from 'react-bootstrap';

import { useSelector, useDispatch } from "react-redux";
import { requestEducation } from "../../../store/actions/education";
import './EducationList.scss';

const EducationList = () => {

    const dispatch = useDispatch();
    const educations = useSelector(state => state.educationReducer.educationInfo);

    useEffect(()=>{    
      dispatch(requestEducation());
    },[])

    const useStyles = makeStyles({
        card: {
          maxWidth: 300,
        },
        media: {
          height: 150,
        },
        text: {
          height:120,
        }
      });

    const classes = useStyles();

    return (
      <div>
        <Container>
          <Row>
          {educations.map( edu => {
            return(
              <Col md={4}>
                <div className="block">
                  <Card className={classes.card} >
                    <CardActionArea>
                      <CardMedia
                        className={classes.media}
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2" className={classes.text}>
                          {edu.title}
                        </Typography>
                        {/*<Typography variant="body2" color="textSecondary" component="p">
                        </Typography>*/}
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <Button size="small" color="primary">
                        Share
                      </Button>
                      <Button size="small" color="primary">
                        More Info
                      </Button>
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


export default EducationList;