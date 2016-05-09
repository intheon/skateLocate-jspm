"use strict";

function MainCtrl(allParksSrv, helpersSrv, stylesSrv, tagsSrv, NgMap){

	// Initialise array to store response from db
	this.allData = [];
	this.revData = [];
	this.mapStyles = stylesSrv;
	this.tags = tagsSrv;

	allParksSrv.success((response) => {
		this.allData = response;
		this.revData = helpersSrv.rev(response);
	}).then((response) => {


	})

}

//MainCtrl.$inject = ["allParksSrv"]

export default MainCtrl;