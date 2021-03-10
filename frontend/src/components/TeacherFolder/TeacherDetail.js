import React, { Component } from "react";
import Teacher from "./Teacher.js";
import { Button, Grid } from "@material-ui/core";
import CreateRoom from "../RoomFolder/CreateRoom.js";
import { Link } from "react-router-dom";


const LobbyVisibility = false;

const styler = {
  overflow: "auto",
  height: "100vh",
  marginTop: 5,
  display: "block",
  marginLeft: 20,
  align: "center",
};

const centerStyle = {
  margin: "auto",
  width: "300px",
  padding: "10px",
};

export default class TeacherDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: -1,
      subject: "",
      code: "",
      studentCount: 0,
      attendenceTaken: false,
      showRoomForm: false,
    };
    this.teacherName = this.props.match.params.teacherName;
    this.getTeacherDetails();
  }

  getTeacherDetails() {
    fetch("/api/get-teacher" + "?teacher=" + this.teacherName)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({
          id: data.id,
          subject: data.subject,
          code: data.code,
          studentCount: data.student_count,
          attendenceTaken: data.attendance_taken,
        });
      });
  }

  render() {
    return (
      <div style={styler}>
        <Teacher
          key={this.state.id}
          name={this.teacherName}
          subject={this.state.subject}
          sc={this.state.studentCount}
          code = {this.state.code}
          showTDButton="false"
        />

        <br />

        <div style={centerStyle}>
          <Button
            onClick={() => {
              var f = this.state.showRoomForm;
              return this.setState({ showRoomForm: !f });
            }}
            variant="contained"
            color="primary"
          >
            Create Room
          </Button>

          {this.state.showRoomForm ? (
            <CreateRoom teacherName={this.teacherName} />
          ) : null}


          <p style={{color : '#5DD220'}}> OR, if you already have a room, click below 👇 </p>
          
          <Button  variant="outlined" 
            color="secondary" 
            to = "/rooms" component={Link}> Existing Rooms </Button>

       </div>
      </div>
    );
  }
}
