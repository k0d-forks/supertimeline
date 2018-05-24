"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var resolver_1 = require("./resolver/resolver");
var _1 = require(".");
var tl = [
    {
        "id": "sl-group-J9SSnFrZXHecqVPHDnUwKeP36Gw=",
        "roId": "X8L2x/wfFtv9ob2GHHF5st3rEHk=",
        "trigger": {
            "type": 0,
            "value": 1527064487117
        },
        "duration": 0,
        "LLayer": "core",
        "content": {
            "type": "group",
            "objects": [
                {
                    "id": "Ieu+jbqZHvQvY9n8/9NIqhjUJTA=",
                    "roId": "X8L2x/wfFtv9ob2GHHF5st3rEHk=",
                    "trigger": {
                        "type": 3,
                        "value": '1'
                    },
                    "priority": 0,
                    "duration": 0,
                    "LLayer": "atem_me_program",
                    "content": {
                        "type": "me",
                        "attributes": {
                            "input": 1,
                            "transition": 5
                        },
                        "objects": []
                    },
                    "inGroup": "sl-group-J9SSnFrZXHecqVPHDnUwKeP36Gw=",
                    "resolved": {
                        "outerDuration": 0,
                        "innerDuration": 0
                    }
                },
            ],
            "GLayer": "core"
        },
        "isGroup": true,
        "isSegmentLineGroup": true
    }
];
resolver_1.Resolver.setTraceLevel(_1.TraceLevel.TRACE);
var state = resolver_1.Resolver.getState(tl, 1527064487117);
console.log('state', state);
// console.log('state')
//# sourceMappingURL=test.js.map