import React, { Component } from "react";
import { Button, TextField, FormGroup } from "@material-ui/core";
import RaisedButton from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import axios from "axios";

export default class CreateTeacher extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      subject: "",
      studentCount: 0,
      attendanceTaken: false,
    };

  }

  handleSubmit = (event, requestType, teacherID) => {
    alert("Teacher is created, reload page." + this.state.name);
    event.preventDefault();

    const name = event.target.elements.name.value;
    const subject = event.target.elements.subject.value;
    const studentCount = event.target.elements.studentCount.value;

    axios
      .post("http://127.0.0.1:8000/api/create-teacher/", {
        name: name,
        subject: subject,
        student_count: studentCount,
      })
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div>
        <form
          onSubmitCapture={(event) =>
            this.handleSubmit(
              event,
              this.props.requestType,
              this.props.teacherID
            )
          }
        >
          <FormGroup>
            <TextField
              required
              id="filled-required"
              label="Name"
              defaultValue=""
              variant="filled"
              name="name"
            />

            <TextField
              required
              id="filled-required"
              label="Subject"
              defaultValue="?"
              variant="filled"
              name="subject"
            />

             <TextField
              required
              id="filled-required"
              label="Max Students Allowed"
              defaultValue="3"
              variant="filled"
              name="studentCount"
            />

            <Button variant="contained" color="primary" label="Submit" type="submit">
              Submit
            </Button>
          </FormGroup>
        </form>
      </div>
    );
  }
}
