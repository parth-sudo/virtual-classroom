import React, { Component } from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import { Button, Typography} from "@material-ui/core";
import Room from "./Room.js";

export default class RoomLobby extends Component {
  state = {
    rooms: [],
  };

  componentDidMount() {
    axios.get("http://127.0.0.1:8000/api/room-list/").then((response) => {
      this.setState({ rooms: response.data });
      console.log(response.data);
    });
  }

  render() {
    return (
      <div style = {{height: '100vh'}}>
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
              key = {item.id}
              teacherName={item.teacher_name}
              subject={item.subject}
              maxStudentsAllowed={item.max_students_allowed}
            />
          );
        })}

      </div>
    );
  }
}
