import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import Classroom from "../Classroom.js";


const useStyles = makeStyles({
  root: {
    minWidth: 275,
    borderWidth: "5px",
    borderStyle: "ridge",
    margin: "auto",
    width: "400px",
    border: "3px solid #AECCC8",
    padding: "10px",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

function Room(props) {
  const classes = useStyles();

  return (

      <Card className={classes.root}>
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
           Room # {props.id}
          </Typography>
          <Typography variant="h5" component="h2">
            {props.teacherName}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
          Subject : {props.subject}
          </Typography>
          <Typography variant="body2" component="p">
          Max Students allowed : {props.maxStudentsAllowed}
            <br />
          </Typography>

          <Typography variant="body2" component="p">
            ...
            <br />
          </Typography>
        </CardContent>
        <CardActions>

        <Link
        to={{
          pathname: `/rooms/${props.id}`,
          state: { roomID: props.id }
        }}
      >
        <Button color="secondary" variant="outlined"> 
         Enter {props.teacherName}'s room
        </Button>
      </Link>
        
        </CardActions>
      </Card>
  
  );
}

export default Room;
