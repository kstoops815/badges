"use strict";

let dom = require("./dom");

let badges = [];
let imageData = {};


$.ajax({
	method: "GET",
	url: "https://teamtreehouse.com/kellystoops.json"}).done((data) => {
	badges = data.badges;
	console.log(badges);
	dom.badgesDomString(badges);
}).fail((error) => {
	console.log(error);
});



module.exports = {};