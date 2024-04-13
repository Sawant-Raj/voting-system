import React, { useContext, useState } from "react";
import Modal from "../UI/Modal";
import VoteForm from "./VoteForm";
import VoteContext from "../../store/vote-context";

const Vote = () => {
  // const [isModalOpen, setIsModelOpen] = useState(false);
  const voteCtx=useContext(VoteContext);

  // const addVoteHandler = () => {
  //   setIsModelOpen(true);
  // };

  // const closeModalHandler = () => {
  //   setIsModelOpen(false);
  // };

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h1>Class Monitor Vote</h1>
        <div>Total Votes: {voteCtx.totalVoteCount}</div>
        <button>Add New Vote</button>
      </div>
      <div style={{ marginTop: 60, marginLeft: 30 }}>
        <h2>Suresh</h2>
        <p>Total:0</p>
      </div>
      <div style={{ marginTop: 60, marginLeft: 30 }}>
        <h2>Deepank</h2>
        <p>Total:0</p>
      </div>
      <div style={{ marginTop: 60, marginLeft: 30 }}>
        <h2>Abhik</h2>
        <p>Total:0</p>
      </div>
      {/* {isModalOpen && <VoteForm />} */}
      <VoteForm/>
    </>
  );
};

export default Vote;
