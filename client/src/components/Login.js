import React, { Component } from "react";
import { login } from "../services/auth";
import { Form, Alert } from "react-bootstrap";
import "./Login.css";

export default class Login extends Component {
  state = {
    username: "",
    password: "",
    message: "",
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { username, password } = this.state;
    login(username, password).then((data) => {
      if (data.message) {
        this.setState({
          message: data.message,
          username: "",
          password: "",
        });
      } else {
        // now we need to put the user in the user key of the state of App.js
        this.props.setUser(data);
        // redirect to /projects
        this.props.history.push("/home");
      }
    });
  };

  render() {
    return (
      <div className="loginCredentials">
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Control
              type="text"
              name="username"
              placeholder="username"
              value={this.state.username}
              onChange={this.handleChange}
              id="username"
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              type="password"
              name="password"
              placeholder="password"
              value={this.state.password}
              onChange={this.handleChange}
              id="password"
            />
          </Form.Group>
          {this.state.message && (
            <Alert variant="danger">{this.state.message}</Alert>
          )}
          <button class="button" type="submit">
            Login
          </button>
        </Form>
      </div>
    );
  }
}
