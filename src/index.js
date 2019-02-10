import React, {Component} from "react";
import ReactDOM from "react-dom";
import Test from "./components/test.jsx";
import  "./scss/main.scss";
console.log("hello, world");
const wrapper = document.getElementById("root");
wrapper ? ReactDOM.render(<Test />, wrapper) : 0;
