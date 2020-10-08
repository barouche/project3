import React, { Component } from "react";
import axios from "axios";
import { Form } from "react-bootstrap";
import "./LearnersList.css";

// import LearnersList from "./LearnersList";
// import AddProject from "./AddProject";
// import ProjectDetails from "./ProjectDetails";

export default class Projects extends Component {
  state = {
    learners: [],
    search: null,
  };

  componentDidMount() {
    this.getData();
  }

  searchSpace = (event) => {
    let keyword = event.target.value;
    this.setState({ search: keyword });
  };

  getData = () => {
    axios
      .get("/api/projects")
      .then((response) => {
        this.setState({
          learners: response.data,
        });
        this.state.learners.forEach((learner) => {
          learner.languagesSpoken.forEach((language) => {});
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const users = this.state.learners
      .filter((data) => {
        if (this.state.search == null) return data;
        else if (
          data.username
            .toLowerCase()
            .includes(this.state.search.toLowerCase()) ||
          data.languagesSpoken.some((language) => {
            return language
              .slice(5)
              .toLowerCase()
              .includes(this.state.search.toLowerCase());
          })
        ) {
          return data;
        }
      })
      .map((user) => {
        return (
          <div className="UserInformation">
            <a className="nameDisplay" href={`/users/${user._id}`}>
              {user.username}
            </a>{" "}
            <br></br>
            <b>{user.description}</b>
            <div className="languageDetails">
              {/* <b>Languages</b> */}
              <div className="language">
                <h6>SPEAKS</h6>
                {user.languagesSpoken.map((spokenLanguage) => {
                  return <p>{spokenLanguage}</p>;
                })}
                <h6>LEARNS</h6>
                {user.languagesToLearn.map((languagesToLearn) => {
                  return <p>{languagesToLearn}</p>;
                })}
              </div>
            </div>
          </div>
        );
      });
    return (
      <div>
        <Form.Group className="search-field">
          <Form.Label htmlFor="search"> </Form.Label>
          <Form.Control 
            type="text"
            name="search"
            onChange={(e) => this.searchSpace(e)}
            id="search"
            placeholder="Enter the language you want to learn or the user you want to talk to"
          />
        </Form.Group>
        <div className="userContainer">{users}</div>
      </div>
    );
  }
}
