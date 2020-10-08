import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const CreateRoom = (props) => {
  const [roomNumber, setRoomNumber] = useState();

  function create() {
    const id = roomNumber;

    props.history.push(`/room/${id}`);
  }

  function onEnteringChar(event) {
    setRoomNumber(event.target.value);
  }

  return (
    <div className="enterRoom">
      <label htmlFor="roomNumber">Please enter a room number: </label>
      <TextField
        type="number"
        name="roomNumber"
        id="roomNumber"
        value={roomNumber}
        onChange={onEnteringChar}
      />

      {roomNumber && (
        <div><br />
        <Button variant="outlined" color="primary" onClick={create} id="goRoom">
          Enter Room
        </Button>
        </div>
      ) }
    </div>
  );
};
// export default CreateRoom;
export default withRouter(CreateRoom);
