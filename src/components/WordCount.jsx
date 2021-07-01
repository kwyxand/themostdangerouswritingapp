import React from "react";
import { withAppContext } from "./AppContext";

const WordCount = ({ words, limit }) => (
  <div className="wordcount">
    {words || 0} {" / " + limit} {"words"}
  </div>
);

export default withAppContext(WordCount);
