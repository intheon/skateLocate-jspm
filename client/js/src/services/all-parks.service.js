function allParksSrv ($http){

	return $http.get("/skateparks");

}

export default allParksSrv;