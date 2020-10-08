import React, { Component } from "react";
import { Form } from "react-bootstrap";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import axios from "axios";
export default class Comment extends Component {
  state = {
    comment: "",
    receiver: "",
    receiverUsername: "",
    senderUsername: "",
    roomGenerated: false,
    allowedToDelete: false,
  };

  handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("/comments", {
        comment: this.state.comment,
        receiver: this.props.userId,
        receiverUsername: this.props.username,
        senderUsername: this.props.loggedUser.username,
        roomGenerated: this.state.roomGenerated,
      })
      .then(() => {
        this.setState({
          comment: "",
        });

        this.props.getData();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };
  handleRandomRoom = (event) => {
    const senderName = this.props.comments.slice(-1)[0].senderUsername;
    console.log("sender", this.props.comments.slice(-1));
    event.preventDefault();
    axios
      .post("/comments", {
        comment:
          "This is your room number: " + Math.floor(Math.random() * 1000000),
        receiver: this.props.userId,
        receiverUsername: senderName,
        senderUsername: this.props.loggedUser.username,
        roomGenerated: !this.state.roomGenerated,
      })
      .then(() => {
        this.setState({
          comment: "",
        });
        this.props.getData();
      });
  };
  decline = (commentObj) => {
    console.log(`find the comment`, commentObj);
    axios
      .delete(`/comments/${commentObj._id}`)
      .then(() => {
        this.props.getData();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  handleButton = (event) => {
    console.log(event.target.parentName);
    // if (event.target.className == "disappear") {
    //   event.target.className = "";
    // } else {
      event.target.className = "disappear";
    // }
  };
  render() {
    let allowedToDelete = true;
    const userComment = this.props.comments.map((commentObj) => {
      // console.log("this.props.loggedUser._id",this.props.loggedUser._id);
      // console.log("commentObj ",commentObj)
      // console.log("this.props", this.props);
      // console.log("this.props.loggedUser.username", this.props.loggedUser.username);
      return (
        <div>
          {commentObj.senderUsername === this.props.username ? (
            <h6 className="username-comment">
              {commentObj.receiverUsername} said:{" "}
            </h6>
          ) : (
            <h6 className="username-comment">
              <b>{commentObj.senderUsername}</b> said:{" "}
            </h6>
          )}
          {commentObj.comment}
          <div className="button-in-comment">
          <Form>
            {allowedToDelete && (
              <Button
              variant="contained" color="secondary"
                onClick={() => {
                  this.decline(commentObj);
                }}
              >
                Decline
              </Button>
            )}
          </Form>
          </div>
          {this.props.loggedUser._id !== commentObj.sender &&
            !commentObj.roomGenerated && (
              <div className="button-in-comment">
              <Form onSubmit={this.handleRandomRoom}>
                <Button onClick={this.handleButton} variant="contained"color="primary" type="submit">
                  Accept invitation
                </Button>
                <br />
              </Form>
              </div>
            )}
        </div>
      );
    });

    return (
      <>
        <div className="comment-submit">
        <Form onSubmit={this.handleSubmit}>
            <Form.Label htmlFor="comment">
            </Form.Label>
            <TextField id="standard-primary" label="Comment here" color="primary" 
              type="text"
              name="comment"
              value={this.state.comment}
              onChange={this.handleChange}
              placeholder="Schedule a videocall"
              id="comment"
            />
          <Button variant="contained" style={{marginLeft:"20px"}} type="submit">Submit</Button> <br />
        </Form>
        </div>
        <div className="comments"><br/>{userComment}</div>
      </>
    );
  }
}
