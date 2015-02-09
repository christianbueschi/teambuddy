angular.module('teambuddy')
.controller('EventListCtrl', ['EventService', function(EventService) {

	this.eventList = EventService.getAllEvents();

	var _this = this

	EventService.getAllRemoteEvents().
		$promise.
		then(function(teams) {
			_this.eventListRemote = teams[1].buddyevents;
			console.log(_this.eventListRemote);
		})


	this.toggleState = function(ev) {
		ev.stopPropagation();
		ev.preventDefault();
		var $target = $(ev.target);
		var $ico = $target.closest('.js-btn').find('.js-ico');
		if($ico.hasClass('undefined') || $ico.hasClass('unchecked')) {
			$ico.removeClass('undefined unchecked');
			$ico.addClass('checked');
		} else {
			$ico.removeClass('checked');
			$ico.addClass('unchecked');
		}
	}
  
  
}]);