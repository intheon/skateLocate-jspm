function MapCtrl($scope, helpersSrv){

	$scope.isEditing = false;
	$scope.toggleEditing = () => {
		toggleEditButton($scope, helpersSrv);
	}

}


function toggleEditButton($scope, helpersSrv)
{
	if (!$scope.isEditing)
	{
		$scope.isEditing = true;
		helpersSrv.createToast("Click or tap on the map to add a new park!");
		helpersSrv.toggleEditOn();
	}
	else if ($scope.isEditing)
	{
		$scope.isEditing = false;
		helpersSrv.toggleEditOff();
	}
}
export default MapCtrl;