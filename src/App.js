import React from "react";
import Vote from "./components/Vote/Vote";
import { VoteContextProvider } from "./store/vote-context";

const App = () => {
  return (
    <div>
      <VoteContextProvider>
        <Vote />
      </VoteContextProvider>
    </div>
  );
};

export default App;
