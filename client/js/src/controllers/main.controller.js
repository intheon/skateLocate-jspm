"use strict";

function MainCtrl(allParksSrv, helpersSrv){

	let self = this;

	// Initialise array to store response from db
	this.allData = [];
	this.revData = [];

	allParksSrv.success((response) => {
		this.allData = response;
		this.revData = helpersSrv.reverse(response);
	}).then((response) => {
		// do some more stuff

	})


}

//MainCtrl.$inject = ["allParksSrv"]

export default MainCtrl;