import React, { useState } from "react";
export default function TextForm(props) {
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase!", "success");
  };

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase!", "success");
  };

  const handleSenCase = () => {
    let newText = text.charAt(0).toUpperCase() + text.substring(1);
    setText(newText);
    props.showAlert("Converted to Sentence Case!", "success");
  };

  const handleCpy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to clipboard!", "success");
  };

  const handleRemSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Space Remove!", "success");
  };

  const handleTitCase = () => {
    let newText = text
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
    setText(newText);
    props.showAlert("Converted to TitleCase!", "success");
  };

  const handleClear = () => {
    let newText = " ";
    setText(newText);
    props.showAlert("Text Cleared!", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState(" ");
  return (
    <>
      <div className="container">
        <h1
          style={{
            color: props.mode === "dark" ? "white" : "black",
          }}
        >
          {props.heading}
        </h1>
        <div
          className="mb-3"
          style={{
            color: props.mode === "dark" ? "white" : "black",
          }}
        >
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            id="myBox"
            rows="8"
          ></textarea>
          <button className="btn btn-primary my-3" onClick={handleUpClick}>
            Convert to Uppercase
          </button>
          <button className="btn btn-primary mx-3 my-3" onClick={handleLoClick}>
            Convert to Lowercase
          </button>
          <button className="btn btn-primary mx-2 my-3" onClick={handleClear}>
            Clear Text
          </button>
          <button className="btn btn-primary mx-2 my-3" onClick={handleSenCase}>
            Convert to Sentence Case
          </button>
          <button className="btn btn-primary mx-2 my-3" onClick={handleCpy}>
            Copy Text
          </button>
          <button
            className="btn btn-primary mx-2 my-3"
            onClick={handleRemSpace}
          >
            Remove Extra Spaces
          </button>
          <button className="btn btn-primary mx-2 my-3" onClick={handleTitCase}>
            Title Case
          </button>
        </div>
      </div>
      <div
        className="container my-3"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h1>Text Summary</h1>
        <p>
          {text.split(" ").length} Words and {text.length} Characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter something in the textbox above to preview it here"}
        </p>
      </div>
    </>
  );
}
