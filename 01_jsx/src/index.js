// Import React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom";

// Create React Component
const App = () => {
  const buttonText = { text: "Click Me!" };
  const labelText = "Enter name:";

  return (
    <div>
      <label htmlFor="name" className="label">
        {labelText}
      </label>
      <input type="text" id="name" />
      <button style={{ backgroundColor: "blue", color: "white" }}>
        {buttonText.text}
      </button>
    </div>
  );
};

// Take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector("#root"));
