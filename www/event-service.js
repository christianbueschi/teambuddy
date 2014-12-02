angular.module('tb.event-service', [])
.factory('EventService', function () {

    var EventList = [
            {   id: 1, 
                title: 'Taktiktraining', 
                team: '1. Mannschaft', 
                fromDate: '23.04', 
                fromTime: '19.30', 
                toDate: '', 
                toTime: '21.00', 
                location: 'Allmend, Bern',
                present: [
                {
                    firstName: 'Till',
                    lastName: 'Affolter'
                },
                {
                    firstName: 'Manuel',
                    lastName: 'Linder'
                },
                {
                    firstName: 'Jonas',
                    lastName: 'Affolter'
                },
                {
                    firstName: 'Joao',
                    lastName: 'Viana'
                },
                {
                    firstName: 'Michael',
                    lastName: 'Flühmann'
                },
                {
                    firstName: 'Reto',
                    lastName: 'Regez'
                }
                ],
                absent: [
                {
                    firstName: 'Thomas',
                    lastName: 'Michel'
                },
                {
                    firstName: 'Michael',
                    lastName: 'Zierski'
                },
                {
                    firstName: 'Andreas',
                    lastName: 'Kind'
                }
                ],
                outstanding: [
                {
                    firstName: 'Christian',
                    lastName: 'Büschi'
                },
                {
                    firstName: 'Conor',
                    lastName: 'MacAodha'
                }
                ]
            },
            {   id: 2,
                title: 'Krafttraining',  
                team: '1. Mannschaft', 
                fromDate: '23.04', 
                fromTime: '19.30', 
                toDate: '', 
                toTime: '21.00', 
                location: 'Allmend, Bern' 
            },
            {   id: 3,
                title: 'FC EDA – SC Zürich-Versicherungen',  
                team: '1. Mannschaft', 
                fromDate: '23.04', 
                fromTime: '19.30', 
                toDate: '', 
                toTime: '21.30', 
                location: 'Stadion Neufeld, Bern' 
            },
            {   id: 4,
                title: 'Training', 
                team: '1. Mannschaft', 
                fromDate: '23.04', 
                fromTime: '19.30', 
                toDate: '', 
                toTime: '21.00', 
                location: 'Allmend, Bern' 
            },
            {   id: 5, 
                title: 'FC EDA – SC Swiss Life Bern / Coop', 
                team: '1. Mannschaft', 
                fromDate: '23.04', 
                fromTime: '19.30', 
                toDate: '21.00', 
                toTime: '', 
                location: 'Allmend, Bern' 
            },
            {   id: 6,
                title: 'Taktiktraining',  
                team: '1. Mannschaft', 
                fromDate: '23.04', 
                fromTime: '19.30', 
                toDate: '', 
                toTime: '21.00', 
                location: 'Allmend, Bern' 
            }
        ];

    return {
        
        getAllEvents: function () {
            return EventList;
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