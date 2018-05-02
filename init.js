use tfg;
db.createUser({ user: "angel", pwd: "angel", roles: [{ role: "readWrite", db: "tfg" }, { role: "readWrite", db: "admin" }] });
db.createCollection("clients");
db.clients.insert({ "lat": 28.4815678, "lon": -16.3193438, "id": 1, "name": "client1", "address": "address1", "open": 8, "close": 22, "truckId": null, "served": false, "serving": false, "closed": false, "order": 99 });
db.clients.insert({ "lat": 28.3246468, "lon": -16.3768241, "id": 2, "name": "client2", "address": "address2", "open": 8, "close": 22, "truckId": null, "served": false, "serving": false, "closed": false, "order": 99 });
db.clients.insert({ "lat": 28.2741662, "lon": -16.3852894, "id": 3, "name": "client3", "address": "address3", "open": 8, "close": 22, "truckId": 1, "served": false, "serving": false, "closed": false, "order": 1 });
db.clients.insert({ "lat": 28.2371288, "lon": -16.4069047, "id": 4, "name": "client4", "address": "address4", "open": 8, "close": 22, "truckId": 1, "served": false, "serving": false, "closed": false, "order": 2 });
db.clients.insert({ "lat": 28.1685127, "lon": -16.4329046, "id": 5, "name": "client5", "address": "address5", "open": 8, "close": 22, "truckId": 1, "served": false, "serving": false, "closed": false, "order": 4 });
db.clients.insert({ "lat": 28.1133541, "lon": -16.4813502, "id": 6, "name": "client6", "address": "address6", "open": 8, "close": 22, "truckId": 1, "served": false, "serving": false, "closed": false, "order": 3 });
db.clients.insert({ "lat": 28.0874269, "lon": -16.5112444, "id": 7, "name": "client7", "address": "address7", "open": 8, "close": 22, "truckId": 1, "served": false, "serving": false, "closed": false, "order": 5 });
db.clients.insert({ "lat": 28.0673783, "lon": -16.5623092, "id": 8, "name": "client8", "address": "address8", "open": 8, "close": 22, "truckId": null, "served": false, "serving": false, "closed": false, "order": 99 });
db.clients.insert({ "lat": 28.4146588, "lon": -16.5036585, "id": 9, "name": "client9", "address": "address9", "open": 8, "close": 22, "truckId": null, "served": false, "serving": false, "closed": false, "order": 99 });
db.clients.insert({ "lat": 28.3923046, "lon": -16.6185377, "id": 10, "name": "client10", "address": "address10", "open": 8, "close": 22, "truckId": 2, "served": false, "serving": false, "closed": false, "order": 1 });
db.clients.insert({ "lat": 28.3799089, "lon": -16.6862339, "id": 11, "name": "client11", "address": "address11", "open": 8, "close": 22, "truckId": 2, "served": false, "serving": false, "closed": false, "order": 2 });
db.clients.insert({ "lat": 28.3699303, "lon": -16.7208714, "id": 12, "name": "client12", "address": "address12", "open": 8, "close": 22, "truckId": 2, "served": false, "serving": false, "closed": false, "order": 3 });
db.clients.insert({ "lat": 28.3593711, "lon": -16.7650989, "id": 13, "name": "client13", "address": "address13", "open": 8, "close": 22, "truckId": 2, "served": false, "serving": false, "closed": false, "order": 5 });
db.clients.insert({ "lat": 28.3207525, "lon": -16.7982797, "id": 14, "name": "client14", "address": "address14", "open": 8, "close": 22, "truckId": 2, "served": false, "serving": false, "closed": false, "order": 4 });
db.clients.insert({ "lat": 28.2940447, "lon": -16.8030540, "id": 15, "name": "client15", "address": "address15", "open": 8, "close": 22, "truckId": 2, "served": false, "serving": false, "closed": false, "order": 6 });
db.clients.insert({ "lat": 28.2602565, "lon": -16.8012020, "id": 16, "name": "client16", "address": "address16", "open": 8, "close": 22, "truckId": null, "served": false, "serving": false, "closed": false, "order": 99 });
db.clients.insert({ "lat": 28.4601084, "lon": -16.4278517, "id": 17, "name": "client17", "address": "address17", "open": 8, "close": 22, "truckId": 3, "served": false, "serving": false, "closed": false, "order": 1 });
db.clients.insert({ "lat": 28.4865127, "lon": -16.3271648, "id": 18, "name": "client18", "address": "address18", "open": 8, "close": 22, "truckId": 3, "served": false, "serving": false, "closed": false, "order": 2 });
db.clients.insert({ "lat": 28.4044498, "lon": -16.3255256, "id": 19, "name": "client19", "address": "address19", "open": 8, "close": 22, "truckId": null, "served": false, "serving": false, "closed": false, "order": 99 });
db.clients.insert({ "lat": 28.3894865, "lon": -16.344337, "id": 20, "name": "client20", "address": "address20", "open": 8, "close": 22, "truckId": 3, "served": false, "serving": false, "closed": false, "order": 3 });
db.createCollection("trucks");
db.trucks.insert({ "id": 1, "startTime": null, "endTime": null, "distance": 0, "clientsServed": 0, "lastLat": 28.4091675, "lastLon": -16.5616061, "startLat": 28.4091675, "startLon": -16.5616061 });
db.trucks.insert({ "id": 2, "startTime": null, "endTime": null, "distance": 0, "clientsServed": 0, "lastLat": 28.4091675, "lastLon": -16.5616061, "startLat": 28.4091675, "startLon": -16.5616061 });
db.trucks.insert({ "id": 3, "startTime": null, "endTime": null, "distance": 0, "clientsServed": 0, "lastLat": 28.4091675, "lastLon": -16.5616061, "startLat": 28.4091675, "startLon": -16.5616061 });
db.trucks.insert({ "id": 4, "startTime": null, "endTime": null, "distance": 0, "clientsServed": 0, "lastLat": 28.4091675, "lastLon": -16.5616061, "startLat": 28.4091675, "startLon": -16.5616061 });
db.createCollection("services");