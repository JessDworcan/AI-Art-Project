import React, { Component } from "react";
import TextField from "@mui/material/TextField";

class PromptBox extends Component {
  state = {};
  render() {
    return (
      <div>
        <TextField>Enter prompt here</TextField>
      </div>
    );
  }
}

export default PromptBox;
