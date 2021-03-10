import React, { Component } from "react";
import {
  Button,
  Card,
  Typography,
  CardContent,
  ButtonGroup,
} from "@material-ui/core";

import {Link} from "react-router-dom";

const styler = {
  border: "2px solid pink",
};

export default class Student extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inform: true,
      counter: 1,
    };
  }

  SimpleCard() {
    return (
      <div style={styler}>
        <Card>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Enrollment No: {this.props.roll}
            </Typography>
            <Typography variant="h5" component="h2">
              Name: {this.props.name}
            </Typography>
            <Typography color="textSecondary">
              Year: {this.props.year}
            </Typography>
            <Typography variant="body2" component="p">
              {this.props.atg}
              <br />
              <ButtonGroup>
  
                <Button
                  to="/studentArea"
                  component={Link}
                  size="small"
                  color="secondary"
                  variant="contained"
                >
                  Leave Room.
                </Button>
              </ButtonGroup>

  
            </Typography>
          </CardContent>
        </Card>
      </div>
    );
  }

  render() {
    return <div>{this.SimpleCard()}</div>;
  }
}
