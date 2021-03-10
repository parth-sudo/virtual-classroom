import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";


const useStyles = makeStyles({
  root: {
    minWidth: 275,
    borderWidth: "5px",
    borderStyle: "ridge",
    margin: "auto",
    width: "400px",
    border: "3px solid green",
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

function Teacher(props) {
  const classes = useStyles();

  return (
  
      <Card className={classes.root}>
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            {props.id}
          </Typography>
          <Typography variant="h5" component="h2">
            {props.name}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            Max Students allowed : {props.sc}
          </Typography>
          <Typography variant="body2" component="p">
            Subject : {props.subject}
            <br />
          </Typography>

          <Typography variant="body2" component="p">
           Teacher code = {props.code}
            <br />
          </Typography>
        </CardContent>
        <CardActions>
          {props.showTDButton === "true" ? (
            <Button
              variant="outlined"
              color="secondary"
              size="small"
              to={`/${props.name}`}
              component={Link}
            >
           
              Take Attendance
            </Button>
          ) : (
            <Button
              variant="outlined"
              color="primary"
              size="small"
              to="/staff"
              component={Link}
            >
              {" "}
              Back{" "}
            </Button>
          )}
        </CardActions>
      </Card>
  
  );
}

export default Teacher;
