import React, { Component } from "react";
import { Button, Grid, Typography, ButtonGroup } from "@material-ui/core";
import axios from "axios";
import { Redirect } from "react-router-dom";
import CreateStudent from "./CreateStudent.js";
import Classroom from "../Classroom.js";

const classRoomVisibility = false;

const styler = {
  fontFamily: "Helvetica",
  fontSize: "20px",
  color: "purple",
};

export default class StudentArea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
      studentNames: [],
      showNameBar: false,
      username: "",
      userFound: false,
      showForm: false,
      buttonPressed: false,
    };
    this.checkValidity = this.checkValidity.bind(this);
  }

  async componentDidMount() {
    axios.get("http://127.0.0.1:8000/api/student-list/").then((response) => {
      this.setState({
        students: response.data,
      });
      console.log(response.data);
    });
  }

  checkValidity() {
    this.setState({
      buttonPressed: true,
    });

    this.state.students.map((item) => {
      this.state.studentNames.push(item.first_name + " " + item.last_name);
      return console.log("");
    });

    let arr = this.state.studentNames;
    console.log(arr);

    let j = -1;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === this.state.username) {
        j = i;
        break;
      }
    }

    if (j !== -1) {
      this.setState({
        userFound: true,
      });
    }
  }

  render() {
    return (
      <div>
        <Grid container spacing={3}>
          <Grid item xs={12} align="center">
            <Typography variant="h4" compact="h4">
              Are a new student or an existing student?
            </Typography>
          </Grid>
          <Grid item xs={12} align="center">
            <ButtonGroup
              orientation="vertical"
              aria-label="vertical outlined primary button group"
            >
              <Button
                onClick={() => this.setState({ showNameBar: true })}
                size="medium"
                variant="contained"
                color="primary"
              >
                Existing
              </Button>

              {this.state.showNameBar ? (
                <div>
                  <p style={styler}> Enter your Full name. </p>
                  <input
                    value={this.state.username}
                    onChange={(e) =>
                      this.setState({ username: e.target.value })
                    }
                    type="text"
                  />
                  <Button
                    variant="outlined"
                    color="primary"
                    onClick={this.checkValidity}
                  >
                    Go to rooms
                  </Button>
                </div>
              ) : null}

              {this.state.userFound ? (
                <Redirect to="/rooms" />
              ) : this.state.buttonPressed ? (
                <p style={{ fontFamily: "Helvetica", color: "#FF3E00" }}>
                  User not found. Create a new one by clicking on "NEW"
                </p>
              ) : null}

              <br></br>
              <Button
                onClick={() => {
                  var f = this.state.showForm;
                  return this.setState({ showForm: !f });
                }}
                variant="contained"
                color="secondary"
              >
                New
              </Button>
            </ButtonGroup>

            <br />
            <hr></hr>
            {this.state.showForm ? <CreateStudent /> : null}

            {classRoomVisibility ? (
              <Classroom role="student" name={this.state.username} />
            ) : null}
            
          </Grid>
        </Grid>
      </div>
    );
  }
}
