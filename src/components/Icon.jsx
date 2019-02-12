import React, { Component } from "react";
const path = "si-glyph-camera";
const photoIcon = require(`glyph-iconset/svg/${path}.svg`);
function Icon(props)
{
	return (
		<div
			className="icon"
			dangerouslySetInnerHTML = {
			{__html: require(`glyph-iconset/svg/${props.name}.svg`)}
		} />
	);
}

export default Icon;
