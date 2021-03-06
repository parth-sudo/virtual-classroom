import React, { Component } from "react";
import Teacher from "./Teacher.js";
import { Button, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import CreateTeacher from "./CreateTeacher.js";
import axios from "axios";
// import '../stylers/Teacher.css';

const style = {
  overflow: "auto",
  height: "100vh",
  display: "block",
  marginLeft: 20,
  align: "center",
};

export default class Staff extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teachers: [],
      placeholer: "loading",
    };
  }

  componentDidMount() {
    axios.get("http://127.0.0.1:8000/api/teacher-list/").then((response) => {
      this.setState({
        teachers: response.data,
      });
      console.log(response.data);
    });
  }

  render() {
    return (
      <div style={style}>
        <div style={{ marginTop: 20 }}>
          <Typography color="inherit" align="center" variant="h3">
            Teacher's Lobby 👌👌😊
          </Typography>
          <Button variant="outlined" color="primary"
             size="small" to="/" component={Link} > Back </Button>
        </div>

         {/* for new teacher profile */}

         <div style={{ padding: 20 }}>
          <h3 style={{ fontFamily: "Helvetica", color: "Red" }}>
            <strong style={{ color: "Black" }}>Note: </strong>
            If you are a new teacher, Create your own teacher card.{" "}
          </h3>
          <CreateTeacher requestType="post" teacherID={null} />
        </div>

        {/* loop through teachers component*/}
        
        <div> 

        <Typography color="inherit" align="center" variant="h4">
           Current Teacher Cards 👇🧧
          </Typography>

        {this.state.teachers.map((item) => {
          return (
            <Teacher
              key={item.id}
              name={item.name}
              subject={item.subject}
              code={item.code}
              at={item.attendance_taken}
              sc={item.student_count}
              showTDButton="true"
            />
          );
        })}


        </div>
     
       
      </div>
    );
  }
}
