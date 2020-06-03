//Create a React app from scratch.
import React from "react";
import ReactDOM from "react-dom";

//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
const customStyle = {
  color: ""
};

//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
const day = new Date(2020, 3, 31, 15);
const currenttime = day.getHours();

let greeting;
if (currenttime < 12) {
  greeting = "Good morning";
  customStyle.color = "red";
} else if (currenttime < 18) {
  greeting = "Good afternoon";
  customStyle.color = "green";
} else {
  greeting = "Good night";
  customStyle.color = "blue";
}
ReactDOM.render(
  <h1 className="heading" style={customStyle}>
    {greeting}
  </h1>,
  document.getElementById("root")
);
