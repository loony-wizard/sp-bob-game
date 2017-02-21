"use strict";

if (window.requestAnimationFrame === undefined) {

	window.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function ( /* function FrameRequestCallback */callback, /* DOMElement Element */element) {
		window.setTimeout(callback, 1000 / 60);
	};
}