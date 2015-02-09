angular.module('tb.event-service', [])
.factory('EventService', function ($resource) {


	var Teams = $resource('http://teambuddy.ch/teams');

	var teams;



    var EventList = [
            {   id: 1, 
                title: 'Taktiktraining', 
                team: '1. Mannschaft', 
                from: 1429637400000,
                to: 1429644600000, 
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
                from: 1609368600000,
                to: 1609282800000, 
                location: 'Allmend, Bern' 
            },
            {   id: 3,
                title: 'FC EDA – SC Zürich-Versicherungen',  
                team: '1. Mannschaft', 
                from: 1420070460000,
                to: 1420153140000, 
                location: 'Stadion Neufeld, Bern' 
            },
            {   id: 4,
                title: 'Training', 
                team: '1. Mannschaft', 
                from: 1609368600000,
                to: 1609282800000, 
                location: 'Allmend, Bern' 
            },
            {   id: 5, 
                title: 'FC EDA – SC Swiss Life Bern / Coop', 
                team: '1. Mannschaft', 
                from: 1429637400000,
                to: 1429644600000, 
                location: 'Allmend, Bern' 
            },
            {   id: 6,
                title: 'Taktiktraining',  
                team: '1. Mannschaft', 
                from: 1429637400000,
                to: 1429644600000, 
                location: 'Allmend, Bern' 
            }
        ];

    return {

		getAllRemoteEvents: function() {
			return Teams.query();
		},
        
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