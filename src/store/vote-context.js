import React, { useState } from "react";

const VoteContext = React.createContext({
  totalVoteCount: 0,
  voteCount: {
    Suresh: 0,
    Deepank: 0,
    Abhik: 0
  },
  addTotalVote: () => {},
  addVote: () => {},
});

export const VoteContextProvider = (props) => {
  const [totalVoteCount, setTotalVoteCount] = useState(0);
  const [voteCount, setVoteCount] = useState({
    Suresh: 0,
    Deepank: 0,
    Abhik: 0
  });

  const addTotalVote = () => {
    setTotalVoteCount((prevCount) => prevCount + 1);
  };

  const addVote = (candidateName) => {
    setVoteCount((prevCount) => {
      return {
        ...prevCount,
        [candidateName]: prevCount[candidateName] + 1
      };
    });
  };

  const contextValue = {
    totalVoteCount: totalVoteCount,
    voteCount: voteCount,
    addTotalVote: addTotalVote,
    addVote: addVote,
  };

  return (
    <VoteContext.Provider value={contextValue}>
      {props.children}
    </VoteContext.Provider>
  );
};

export default VoteContext;
