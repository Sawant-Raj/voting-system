import React,{useContext} from "react";
import Modal from "../UI/Modal";
import VoteContext from "../../store/vote-context";

const submitHandler = (event) => {
  event.preventDefault();
};

const VoteForm = (props) => {
  const voteCtx=useContext(VoteContext);

  // const addVoteHandler=()=>{
  //   voteCtx.addTotalVote();
  // }

async function addVoteHandler(event) {
  event.preventDefault();
  const candidateName = event.target.monitor.value;

  const response = await fetch(
    "https://react-http-requests-2e42c-default-rtdb.asia-southeast1.firebasedatabase.app/votes.json",
    {
      method: "PUT",
      body: JSON.stringify({
        [candidateName]: voteCtx.voteCount[candidateName] + 1,
      }), 
      headers: {
        "Content-Type": "application/json",
      }, 
    }
  );

  const data = await response.json(); //data coming from Firebase
  // console.log(data);
}

  return (
    // <Modal onClose={props.onClose}>
    <form onSubmit={submitHandler}>
      <label htmlFor="name">Student Name:</label>
      <input id="name" />
      <label htmlFor="monitor">Choose Monitor:</label>
      <select id="monitor" name="monitor">
        <option value="option1">Suresh</option>
        <option value="option2">Deepank</option>
        <option value="option3">Abhik</option>
      </select>
      <button onClick={addVoteHandler} 
      // onClick={props.onClose}
      >
        Vote
      </button>
      <button onClick={props.onClose}>
        Close
      </button>
    </form>
    // </Modal>
  );
};

export default VoteForm;
