function MainCtrl(allParksSrv){

	// Initialise array to store response from db
	this.allData = [];

	allParksSrv.success((response) => {
		this.allData = response
	}).then((response) => {
		// do some more stuff
	})



}

export default MainCtrl;