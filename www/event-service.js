angular.module('tb.event-service', [])
.factory('EventService', function () {
    return {
        EventList: [
            { title: 'Taktiktraining', id: 1, team: '1. Mannschaft', fromDate: '23.04', fromTime: '19.30', toDate: '', toTime: '21.00', location: 'Allmend, Bern' },
            { title: 'Krafttraining', id: 2, team: '1. Mannschaft', fromDate: '23.04', fromTime: '19.30', toDate: '', toTime: '21.00', location: 'Allmend, Bern' },
            { title: 'FC EDA – SC Zürich-Versicherungen', id: 3, team: '1. Mannschaft', fromDate: '23.04', fromTime: '19.30', toDate: '', toTime: '21.30', location: 'Stadion Neufeld, Bern' },
            { title: 'Training', id: 4, team: '1. Mannschaft', fromDate: '23.04', fromTime: '19.30', toDate: '', toTime: '21.00', location: 'Allmend, Bern' },
            { title: 'FC EDA – SC Swiss Life Bern / Coop', id: 5, team: '1. Mannschaft', fromDate: '23.04', fromTime: '19.30', toDate: '21.00', toTime: '', location: 'Allmend, Bern' },
            { title: 'Taktiktraining', id: 6, team: '1. Mannschaft', fromDate: '23.04', fromTime: '19.30', toDate: '', toTime: '21.00', location: 'Allmend, Bern' }
        ],
        getAllEvents: function () {
            return this.EventList;
        },
        getEventById: function (id) {
            var events = this.getAllEvents(),
                event = {},
                found = false;
            angular.forEach(events, function(eventItem, key) {
                if(eventItem.id === parseInt(id)) {
                    event = eventItem;
                    found = true;
                };
            });
            return (found) ? event: false;
        }
    }
}); 