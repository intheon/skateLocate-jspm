"use strict";

function MainCtrl(allParksSrv, helpersSrv, stylesSrv, tagsSrv, NgMap){

	let vm = this;

	// Initialise array to store response from db
	this.allData = [];
	this.revData = [];
	this.mapStyles = stylesSrv;
	this.tags = tagsSrv;
	vm.dynMarkers = []

	allParksSrv.success((response) => {
		this.allData = response;
		this.revData = helpersSrv.rev(response);
	}).then((response) => {


	})

}

function groupMarkersIntoCluster(NgMap){

	let dynMarkers = [];

	NgMap.getMap().then((map) => {
		let bounds = new google.maps.LatLngBounds();
		angular.forEach(map.markers, (marker, key) => {
			dynMarkers.push(marker);
			bounds.extend(marker.getPosition());
		});
		let markerCluster = new MarkerClusterer(map, dynMarkers, {});
		map.setCenter(bounds.getCenter());
		map.fitBounds(bounds);
	});

}

//MainCtrl.$inject = ["allParksSrv"]

export default MainCtrl;