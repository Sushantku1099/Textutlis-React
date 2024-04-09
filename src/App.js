import "./App.css";
import Alert from "./components/Alert.js";
// import About from "./components/About.js";
import Navbar from "./components/Navbar.js";
import TextForm from "./components/TextForm.js";
import React, { useState } from "react";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#05214a";
      showAlert("Dark Mode has been Enabled", "success");
      document.title = "Textutlis - Dark Mode";
      // setInterval(() => {
      //   document.title = "Textutlis is amazing";
      // }, 2000);
      // setInterval(() => {
      //   document.title = "Install Textutlis Now";
      // }, 1500);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Dark Mode has been Enabled", "success");
      document.title = "Textutlis - Light Mode";
    }
  };

  return (
    <>
      {/* <Router> */}
      <Navbar
        title="Textutlis"
        About="About"
        mode={mode}
        toggleMode={toggleMode}
      />
      {/* <Navbar /> */}
      <Alert alert={alert} />
      <div className="container">
        {/* <Switch> */}
        {/* <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/"> */}
        <TextForm
          showAlert={showAlert}
          heading="Enter the text to analyze below"
          mode={mode}
        />
        {/* </Route>
          </Switch> */}
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
