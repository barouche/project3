import React, { Component } from "react";

import { Route, Redirect, Link } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

import LearnersList from "./components/LearnersList";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import CreateRoom from "./components/CreateRoom";
import Room from "./components/Room";
import { Button } from "react-bootstrap";
import ProjectDetails from "./components/ProjectDetails";

class App extends Component {
  state = {
    user: this.props.user,
  };

  setUser = (user) => {
    this.setState({
      user: user,
    });
  };

  render() {
    return (
      <div className="App">
        <Navbar user={this.state.user} setUser={this.setUser} />

        {/* <Route
          exact
          path='/projects'
          component={Projects}
        /> */}

        {/* <Route
          exact
          path="/projects"
          render={(props) => {
            if (this.state.user) {
              return <Projects {...props} />;
            } else return <Redirect to="/" />;
          }}
        /> */}

        <Route
          exact
          path="/home"
          render={(props) => {
            if (this.state.user) {
              return <LearnersList user={this.state.user} {...props} />;
            } else return <Redirect to="/" />;
          }}
        />

        <Route
          exact
          path="/users/:id"
          render={(props) => (
            <ProjectDetails user={this.state.user} {...props} />
          )}
        />

        {/* <Route
          exact
          path="/room/:id"
          render={(props) => <CreateRoom user={this.state.user} {...props} />}
        /> */}
        <Route path="/room/:roomID" component={Room} />

        <Route
          exact
          path="/signup"
          render={(props) => <Signup setUser={this.setUser} {...props} />}
        />
        <Route
          exact
          path="/login"
          render={(props) => <Login setUser={this.setUser} {...props} />}
        />

        <Route
          exact
          path="/"
          render={(props) => {
            if (this.state.user) {
              return <learnersList {...props} />;
            } else
              return (
                <div className="not-signed-up">
                  <h1>Welcome to the Barouche</h1>
                  <p>
                    Here at Barouche, we care about learning languages. A
                    passion for education, coupled with the new normal imposed
                    by COVID, which means we can't travel as much as normal,
                    motivated us to make our groundbreaking language learning
                    platform available to the public. Connect with normal people
                    from all over the world and learn the language of your
                    choosing, whilst simultaneously sharing your own culture.
                  </p>
                  <p>
                    <em>We are Barouche, we are community</em>
                  </p>
                  {/* <a href="/signup">
                    <Button variant="primary" size="lg">
                      Join us now
                    </Button>
                  </a> */}
                  <Login setUser={this.setUser} {...props} />
                  <Link to={`/signup`}>Sign Up here</Link>
                </div>
              );
          }}
        />

        <Route
          exact
          path="/room"
          render={(props) => {
            if (this.state.user) {
              return <CreateRoom {...props} />;
            } else return <Redirect to="/" />;
          }}
        />
      </div>
    );
  }
}

export default App;
