"use strict";

function helpers(){

	let helpers = {};

	helpers.reverse = function(array){
		let copy = [].concat(array);
		return copy.reverse();
	}

	return helpers;

}


export default helpers;