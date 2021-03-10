import React, { Component } from "react";
import { Button, Grid, Typography } from "@material-ui/core";
import axios from "axios";
import Student from "./StudentFolder/Student.js";

export default class Classroom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      roomInfo: {},
      roomCode: "",
      inputCode: "",

      studentCount: 0,
      rollNumber: 0,
      students: [],
      studentName: "",
      studentInfo: {},
      userFound: false,

      attendanceGiven: false,
      pressed : false,
      informed : false,
    };
  }
  componentDidMount() {
    console.log("SC:" + this.state.studentCount);
    const roomID = this.props.match.params.id;

    fetch(`/api/get-room?id=${roomID}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data.code);
        this.setState({
          roomInfo: data,
          roomCode: data.code,
        });
      });

    axios.get("http://127.0.0.1:8000/api/student-list/").then((response) => {
      this.setState({ students: response.data });
    });
  }

  renderRoomCard() {
    const room = this.state.roomInfo;
    return (
      <div>
        <Typography variant="h4" compact="h4">
          {room.teacher_name}'s Room
        </Typography>

        <Grid item xs={12} align="center">
          Subject : {room.subject}
        </Grid>
      </div>
    );
  }

  checkValidity() {
    let arr = [];
    this.state.students.map((item) => {
      arr.push(item.enrollment_no);
      return null;
    });

    let j = -1;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === this.state.rollNumber) {
        j = i;
        break;
      }
    }

    if (j !== -1) {
      this.setState({
        userFound: true,
      });

      //get student.
      const roll = this.state.rollNumber;
      axios.get(`/api/get-student?student=${roll}`).then((response) => {
        this.setState({
          studentInfo: response.data,
        });
      });
    }
  }

  updateSC(value) {
    return () => {
      this.setState({
        informed: value,
      });
    };
  }

  showStudent() {
    alert("Entry given. You can leave the room.");
    return (
      <Student
      name={this.state.studentInfo.first_name}
      roll={this.state.studentInfo.enrollment_no}
      year={this.state.studentInfo.year_choices}
      atg={this.state.studentInfo.attendance_given}
      data={this.updateSC.bind(this)}
    />
    )      
  }

  increaseSC = () => {
    var sc = this.state.studentCount + 1;
    this.setState({
      studentCount : sc,
    })

  }

  render() {
    return (
      <div>
        <Grid container spacing={3}>
          <Grid item xs={12} align="center">
            {this.renderRoomCard()}

            <p> Hey Student, Enter your enrollment number. </p>
            <input
              style={{ border: "1px solid grey" }}
              value={this.state.rollNumber}
              onChange={(e) => this.setState({ rollNumber: e.target.value })}
              type="text"
            />

            <Button
              onClick={this.checkValidity.bind(this)}
              varaint="contained"
              color="primary"
            >
              Check validity
            </Button>

            {this.state.userFound ? (
              // Render student card.
              <div> 
                <p> Valid Student.</p>
                {/* here, another input form for entering room code. */}
                <p> Enter the room code. </p>
                <input
                  style={{ border: "1px solid grey" }}
                  value={this.state.inputCode}
                  onChange={(e) => this.setState({ inputCode: e.target.value })}
                  type="text"
                />

               <Button onClick={()=>this.setState({pressed:true})}> Give Attendance</Button>
              
               {this.state.roomCode === this.state.inputCode 
                 && this.state.pressed ? (

                  this.showStudent()
               ) : this.state.roomCode !== this.state.inputCode 
                 && this.state.pressed ?<p> Invalid code.</p> : null}
             
             </div>
            ) : null}

            {this.state.informed ? (
              this.increaseSC()
            ): null}

            {this.state.roomInfo.max_students_allowed === this.state.studentCount ?
            (
             <h2> Room is full. </h2> 
            ): null}

          </Grid>
        </Grid>
      </div>
    );
  }
}
