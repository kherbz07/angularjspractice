var todoapp = angular.module('todoApp', []);
todoapp.controller('todoCtrl', function todoCtrl($scope) {
	$scope.tasks = [
		'Wake up',
		'Sit',
		'Stand'
	];
	$scope.newtask = '';

	$scope.addtask = function() {
		var newtask = $scope.newtask.trim();
		if (!newtask) return;
		$scope.tasks.push(newtask);
		$scope.newtask = '';
	};

	$scope.deltask = function(task) {
		var index = $scope.tasks.indexOf(task);
		$scope.tasks.splice(index, 1);
	};
});