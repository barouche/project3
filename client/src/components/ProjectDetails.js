import React, { Component } from "react";
import axios from "axios";
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import ListGroup from 'react-bootstrap/ListGroup'
import Comment from "./Comment";
import CreateRoom from "./CreateRoom";
// import { Route, Redirect, Link } from "react-router-dom";
import "./ProjectDetails.css";

export default class ProjectDetails extends Component {
  state = {
    userId: "",
    username: "",
    languagesSpoken: [],
    languagesToLearn: [],
    description: "",
    comments: [],
    error: "",
    allowedToDelete: false,
  };
  getData = () => {
    axios
      .get(`/api/projects/${this.props.match.params.id}`)
      .then((response) => {
        const userComments = response.data.comments.filter((comment) => {
          console.log("this.props", this.props);
          console.log("comment in userComments pkdetaisl", comment);
          console.log("comment.receiver: ", comment.receiver);
          console.log("comment.sender: ", comment.sender);
          console.log(this.props.user._id === comment.receiver);
          console.log(comment.sender === this.props.user._id);
          return (
            (
              this.props.user.username === comment.receiverUsername ||
              this.props.user.username === comment.senderUsername
              // this.props.user._id === comment.receiver ||
              // comment.sender === this.props.user._id
              ) &&
            this.props.match.params.id === comment.receiver &&
            comment
          );
        });
        // console.log("userComments here ",userComments)

        this.setState({
          userId: response.data.user._id,
          username: response.data.user.username,
          description: response.data.user.description,
          languagesSpoken: response.data.user.languagesSpoken,
          languagesToLearn: response.data.user.languagesToLearn,
          comments: userComments,
        });
      })
      .catch((error) => {
        if (error.response.status === 404) {
          this.setState({
            error: "Not found",
          });
        }
      });
  };

  // deleteProject = () => {
  //   const id = this.props.match.params.id;
  //   axios
  //     .delete(`/api/projects/${id}.comment`)
  //     .then(() => {
  //       this.props.history.push("/home");
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  // handleSubmit = (event) => {
  //   event.preventDefault();
  //   const id = this.props.match.params.id;
  //   axios
  //     .put(`/projects/${id}`, {
  //       title: this.state.title,
  //       description: this.state.description,
  //     })
  //     .then((response) => {
  //       this.setState({
  //         project: response.data,
  //         title: response.data.title,
  //         description: response.data.description,
  //         editForm: false,
  //       });
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  toggleEditForm = () => {
    this.setState((state) => ({
      editForm: !state.editForm,
    }));
  };

  componentDidMount() {
    this.getData();
  }
  render() {

    // if (this.state.error) return <div>{this.state.error}</div>;
    // if (!this.state.project) return <p>Loading ...</p>;

    let allowedToDelete = true;
    const user = this.props.user;
    // const owner = this.state.project.owner;
    // if (user && user._id === owner) allowedToDelete = true;
    const languagesSpoken = this.state.languagesSpoken.map((language) => {
      return <div><ListItemText> {language} </ListItemText> <Divider  /></div>;
    });
    const languagesToLearn = this.state.languagesToLearn.map((language) => {
      return <div><ListItemText> {language} </ListItemText> <Divider  /></div>;
    });
    return (
      <div>
      <div className="circle-container">
        <h1 className="circle">{this.state.username}</h1>
        </div>

    <h5>{this.state.description}</h5>
        
        <div className="details-container">
          <div className="languages-container box">
          <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Typography variant="h6" >
            
        <h3>Speaks</h3>
        <List>
        {languagesSpoken}
        </List>
        <br />
        <h3>Learns</h3>
        <List>
        {languagesToLearn}
        </List>
          </Typography>
          <div >
          </div>
        </Grid>
        </Grid>
        </div>
        <div className="comment-box">
        <Comment
          getData={this.getData}
          loggedUser={this.props.user}
          {...this.state}
          />
        <CreateRoom />
        </div>
        </div>
      </div>
    );
  }
}
