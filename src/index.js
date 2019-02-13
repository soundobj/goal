import React, {Component} from "react";
import ReactDOM from "react-dom";
import Icon from "./components/Icon.jsx";
import Test from "./components/Test.jsx";
import  "./main.scss";
console.log("hello, world");
const App = () => {
	return (
		<div className="wrapper">
			<Test />
			<Icon name="si-glyph-mushrooms" />
		</div>
	)
}
const wrapper = document.getElementById("root");
wrapper ? ReactDOM.render(<App />, wrapper) : 0;
