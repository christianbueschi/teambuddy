angular.module('tb.eventList', [])
.controller('EventListCtrl', function($scope, EventService) {

	$scope.eventList = EventService.getAllEvents();

	$scope.toggleState = function(ev) {
		ev.stopPropagation();
		ev.preventDefault();
		var $target = $(ev.target);
		var $ico = $target.closest('.js-btn').find('.js-ico');
		if($ico.hasClass('undefined') || $ico.hasClass('unchecked')) {
			$ico.removeClass('undefined, unchecked');
			$ico.addClass('checked');
		} else {
			$ico.removeClass('checked');
			$ico.addClass('unchecked');
		}
	}
  
  
});