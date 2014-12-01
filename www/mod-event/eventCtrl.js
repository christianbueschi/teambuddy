angular.module('tb.event', [])
.controller('EventCtrl', function($scope, $stateParams, EventService) {

	var id = $stateParams.eventId;

	$scope.event = EventService.getEventById(id);

	
});