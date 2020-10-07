import React, { useState } from "react";
import { withRouter } from "react-router-dom";

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
    <div className="button">
      <label htmlFor="roomNumber">Please enter a room number</label>
      <input
        type="number"
        name="roomNumber"
        id="roomNumber"
        value={roomNumber}
        onChange={onEnteringChar}
      ></input>

      {roomNumber ? (
        <button onClick={create} id="goRoom">
          Enter Room
        </button>
      ) : (
        <h1> Add a room number </h1>
      )}
    </div>
  );
};
// export default CreateRoom;
export default withRouter(CreateRoom);
