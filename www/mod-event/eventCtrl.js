angular.module('teambuddy')
.controller('EventCtrl', ['$stateParams', 'EventService', function($stateParams, EventService) {

	var id = $stateParams.eventId;

	this.event = EventService.getEventById(id);

	this.toggleList = function(ev) {
		var $target = $(ev.target);
		$target.toggleClass('state-open');
		$target.closest('.js-item').find('ul').slideToggle(); 
	}

	
}]);