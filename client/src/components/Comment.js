import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
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
        roomGenerated: this.state.roomGenerated
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
    console.log("sender",this.props.comments.slice(-1))
    event.preventDefault();
    axios
      .post("/comments", {
        comment:
          "This is your room number: " + Math.floor(Math.random() * 1000000),
        receiver: this.props.userId,
        receiverUsername: senderName,
        senderUsername: this.props.loggedUser.username,
        roomGenerated: !this.state.roomGenerated
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
    if (event.target.className == "is-hidden") {
      event.target.className = "";
    } else {
      event.target.className = "is-hidden";
    }
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
          {commentObj.senderUsername === this.props.username ?  <p className="username-comment">{commentObj.receiverUsername} said: </p> : <p className="username-comment">{commentObj.senderUsername} said: </p>}
          {commentObj.comment}
          <Form>
            {allowedToDelete && (
              <Button
                variant="danger"
                onClick={() => {
                  this.decline(commentObj);
                }}
              >
                Decline
              </Button>
            )}
          </Form>

            {(this.props.loggedUser._id !== commentObj.sender &&
            !commentObj.roomGenerated
            ) && 
          <Form onSubmit={this.handleRandomRoom}>
      <Button onClick={this.handleButton} type="submit">Accept invitation</Button> <br />
            </Form>  
            }
        </div>
      );
    });

    return (
      <>
        <h1>Comments:</h1>
        <div className="comments">{userComment}</div>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>

            <Form.Label htmlFor="comment">
              <b>Schedule a videocall here! </b>
            </Form.Label>
            <Form.Control
              type="text"
              name="comment"
              value={this.state.comment}
              onChange={this.handleChange}
              id="comment"
            />
          </Form.Group>

          <Button type="submit">Submit comment</Button> <br />

        </Form>
      </>
    );
  }
}
