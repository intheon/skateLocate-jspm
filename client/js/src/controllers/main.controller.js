"use strict";

function MainCtrl(allParksSrv, helpersSrv, stylesSrv, tagsSrv){

	// Initialise array to store response from db
	this.allData = [];
	this.revData = [];
	this.mapStyles = stylesSrv;
	this.tags = tagsSrv;

	allParksSrv.success((response) => {
		this.allData = response;
		this.revData = helpersSrv.rev(response);
	}).then((response) => {
		// do some more stuff

	})

}

//MainCtrl.$inject = ["allParksSrv"]

export default MainCtrl;