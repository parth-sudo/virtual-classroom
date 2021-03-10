import React, { Component } from "react";
import axios from "axios";
import { Button, Typography } from "@material-ui/core";
import Room from "./Room.js";
import Classroom from "../Classroom.js";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

const style = {
  overflow: "auto",
  height: "100vh",
  display: "block",
  marginLeft: 20,
  align: "center",
};

export default class RoomLobby extends Component {
  state = {
    rooms: [],
  };

  componentDidMount() {
    axios.get("http://127.0.0.1:8000/api/room-list/")
    .then((response) => {
      this.setState({ rooms: response.data });
    });
  }

  renderRoomLobby() {
    return (
      <div style={style}>
        <div style={{ marginTop: 20, margin: "auto" }}>
          <Typography color="inherit" align="center" variant="h3">
            Rooms Lobby 👌👌😊
          </Typography>
          <Button
            variant="outlined"
            color="primary"
            size="small"
            to="/"
            component={Link}
          >
            Back
          </Button>
        </div>

        {this.state.rooms.map((item) => {
          return (
            <Room
              key={item.id}
              id={item.id}
              teacherName={item.teacher_name}
              subject={item.subject}
              maxStudentsAllowed={item.max_students_allowed}
              code={item.code}
            />
          );
        })}
      </div>
    );
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/rooms">
            {this.renderRoomLobby.bind(this)}
          </Route>
          <Route path = "/rooms/:id" component={Classroom}/>
        </Switch>
      </Router>
    );
  }
}
