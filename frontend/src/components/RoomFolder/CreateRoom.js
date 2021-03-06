import React, { Component } from "react";
import { Button, TextField, FormGroup } from "@material-ui/core";
import RaisedButton from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import axios from "axios";

const mystyle = {
  borderWidth:"5px",
  borderStyle:"ridge",
  padding: "10px",
  width: "300px",
};
export default class CreateRoom extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  handleSubmit = (event) => {
    alert("Room is created, go to localhost:8000/rooms/");
    event.preventDefault();

    const name = event.target.elements.name.value;
    const subject = event.target.elements.subject.value;
    const msa = event.target.elements.msa.value;

    axios
      .post("http://127.0.0.1:8000/api/create-room/", {
        teacher_name: name,
        subject: subject,
        max_students_allowed: msa,
      })
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  };

  toRoomPage() {
    //   return (
    //       <h2> Hi. </h2>
    //       <Redirect to={}
    //   )
  }

  render() {
    return (
      <div style={mystyle}>
        <form onSubmitCapture={(event) => this.handleSubmit(event)}>
          <FormGroup>
            <TextField
              required
              id="filled-required"
              label="Your Name"
              defaultValue={this.props.teacherName}
              variant="filled"
              name="name"
            />

            <br />

            <TextField
              required
              id="filled-required"
              label="Subject"
              defaultValue=""
              variant="filled"
              name="subject"
            />

            <br />

            <TextField
              required
              id="filled-required"
              label="Max Students Allowed"
              defaultValue="3"
              variant="filled"
              name="msa"
            />

            <br />

            <Button
             onClick = {this.toRoomPage.bind(this)}
              variant="contained"
              color="secondary"
              label="Submit"
              type="submit"
            >
              Create Room
            </Button>
          </FormGroup>
        </form>
      </div>
    );
  }
}
