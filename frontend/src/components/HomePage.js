import React, { Component } from "react";
import Staff from "./TeacherFolder/Staff.js";
import { Grid, Button, ButtonGroup, Typography } from "@material-ui/core";
import axios from "axios";
import TeacherDetail from "./TeacherFolder/TeacherDetail.js";
import StudentArea from "./StudentFolder/StudentArea.js";
import RoomLobby from "./RoomFolder/RoomLobby.js";

import {
  BrowserRouter as Router,

  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teacherList: [],
    };
    this.renderHomepage = this.renderHomepage.bind(this);
  }


  async componentDidMount() {
    axios.get("http://127.0.0.1:8000/api/teacher-list/")
    .then((response) => {
      this.setState({
        teacherList: response.data
      });
      console.log(response.data);
    });

    let arr = [];
    this.state.teacherList.map((obj) => {
      arr.push(obj.name);
      return console.log(obj.name);
    })


  }

  renderHomepage() {
    return (
      <Grid container spacing={3}>
        <Grid item xs={12} align="center">
          <Typography variant="h3" compact="h3">
            Are you a ?
          </Typography>
        </Grid>
        <Grid item xs={12} align="center">
          <ButtonGroup disableElevation variant="contained" color="primary">
            <Button color="primary" to="/staff" component={Link}>
              Teacher
            </Button>
            <Button color="secondary" to="/studentArea" component={Link}>
              Student
            </Button>
          </ButtonGroup>
        </Grid>
      </Grid>
    );
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            {this.renderHomepage}
          </Route>
          <Route path="/staff" component={Staff} />
          <Route path="/studentArea" component={StudentArea} />
          <Route path="/rooms" component={RoomLobby} />
          <Route path="/:teacherName" component={TeacherDetail} />
         
        </Switch>
      </Router>
    );
  }
}
