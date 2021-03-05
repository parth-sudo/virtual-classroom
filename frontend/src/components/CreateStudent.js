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
export default class CreateStudent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      year: "",
      attendanceGiven: false,
    };
  }

  handleSubmit = (event) => {
    alert("Student card is created, reload page." + this.state.firstName);
    event.preventDefault();

    const firstName = event.target.elements.firstName.value;
    const lastName = event.target.elements.lastName.value;
    const year = event.target.elements.year.value;

    axios
      .post("http://127.0.0.1:8000/api/create-student/", {
        first_name: firstName,
        last_name: lastName,
        year_choices: year,
      })
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div style={mystyle}>
        <form onSubmitCapture={(event) => this.handleSubmit(event)}>
          <FormGroup>
            <TextField
              required
              id="filled-required"
              label="First Name"
              defaultValue=""
              variant="filled"
              name="firstName"
            />

            <br />

            <TextField
              required
              id="filled-required"
              label="Last Name"
              defaultValue=""
              variant="filled"
              name="lastName"
            />

            <br />

            <TextField
              required
              id="filled-required"
              label="Year"
              defaultValue="3rd"
              variant="filled"
              name="year"
            />

            <br />

            <Button
              variant="contained"
              color="primary"
              label="Submit"
              type="submit"
            >
              Create Card
            </Button>
          </FormGroup>
        </form>
      </div>
    );
  }
}
