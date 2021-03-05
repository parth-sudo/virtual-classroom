import React, { Component } from "react";
import Teacher from "./Teacher.js";
import { Button } from "@material-ui/core";

// use this component for taking attendance as well.
const styler = {
  overflow: "auto",
  height: "100vh",
  marginTop: 20,
  display: "block",
  marginLeft: 20,
  align: "center",
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
      toggle : false,
    };
    this.teacherName = this.props.match.params.teacherName;
    this.showOTC = this.showOTC.bind(this);
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

  showOTC() {
      this.setState({
          toggle : true,
      })
      console.log(this.state.toggle);
  }

  render() {
    return (
      <div style={styler}>
        <Teacher
          key={this.state.id}
          name={this.teacherName}
          subject={this.state.subject}
          sc={this.state.studentCount}
          showTDButton = "false"
        />

        <br />

        {this.state.toggle ? (
            <div style={{color : 'goldenrod'}}> 
             <p > Copy this and share with students: <strong style={{color : 'grey'}}> {this.state.code} </strong> </p>
           </div>
        ) : (
            <Button variant="contained" color="secondary" onClick={this.showOTC}>
            Generate OTC (One Time Code)
          </Button>
        )}

      </div>
    );
  }
}
