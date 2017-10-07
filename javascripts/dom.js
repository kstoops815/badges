"use strict";

const badges = require("./badges");

const badgesDomString = (badgez) => {
	let badgesString = "";
	for(let i = 0; i < badgez.length; i++){
		var allBadges = "";
		allBadges += `<div class="badgesBox">`;
		allBadges +=	`<div class="name">${badgez[i].name}</div>`;
		allBadges +=		`<img class="badgeImage" src="${badgez[i].icon_url}">`;
		allBadges += `</div>`;

		badgesString += allBadges;
	}
	printToDom(badgesString);
	//console.log("in domstring function", badgesString);
};

const printToDom = (strang) => {
	$("#badgeHolder").html(strang);
};

module.exports = {badgesDomString};