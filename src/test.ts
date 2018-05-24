import {
	Resolver,
	TimelineResolvedObject,
	TimelineState,
	DevelopedTimeline,
	ExternalFunctions
} from './resolver/resolver'
import { TraceLevel } from '.';

let tl = [
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
				// {
				// 	"id": "sdMGMiW4W1crbkA8cu2VQfmxTYw=",
				// 	"roId": "X8L2x/wfFtv9ob2GHHF5st3rEHk=",
				// 	"trigger": {
				// 		"type": 3,
				// 		"value": "1"
				// 	},
				// 	"priority": 0,
				// 	"duration": 0,
				// 	"LLayer": "atem_me_studiomonitor",
				// 	"content": {
				// 		"type": "me",
				// 		"attributes": {
				// 			"input": 1,
				// 			"transition": 5
				// 		},
				// 		"objects": []
				// 	},
				// 	"inGroup": "sl-group-J9SSnFrZXHecqVPHDnUwKeP36Gw=",
				// 	"resolved": {
				// 		"outerDuration": 0,
				// 		"innerDuration": 0
				// 	}
				// },
				// {
				// 	"id": "TMnRRP4jzX1zlxjJDxQoAgoCbzg=",
				// 	"roId": "X8L2x/wfFtv9ob2GHHF5st3rEHk=",
				// 	"trigger": {
				// 		"type": 3,
				// 		"value": "1"
				// 	},
				// 	"priority": 0,
				// 	"duration": 0,
				// 	"LLayer": "atem_aux_clean",
				// 	"content": {
				// 		"type": "aux",
				// 		"attributes": {
				// 			"input": 7001
				// 		},
				// 		"objects": []
				// 	},
				// 	"inGroup": "sl-group-J9SSnFrZXHecqVPHDnUwKeP36Gw=",
				// 	"resolved": {
				// 		"outerDuration": 0,
				// 		"innerDuration": 0
				// 	}
				// },
				// {
				// 	"id": "NOIQAU1w99wVdLFw/Cv4FgoHkuc=",
				// 	"roId": "X8L2x/wfFtv9ob2GHHF5st3rEHk=",
				// 	"trigger": {
				// 		"type": 3,
				// 		"value": "1"
				// 	},
				// 	"priority": 0,
				// 	"duration": 0,
				// 	"LLayer": "atem_aux_preview",
				// 	"content": {
				// 		"type": "aux",
				// 		"attributes": {
				// 			"input": 10011
				// 		},
				// 		"objects": []
				// 	},
				// 	"inGroup": "sl-group-J9SSnFrZXHecqVPHDnUwKeP36Gw=",
				// 	"resolved": {
				// 		"outerDuration": 0,
				// 		"innerDuration": 0
				// 	}
				// },
				// {
				// 	"id": "C1dZNSSUbf0NRre1o7zlwAreCfY=",
				// 	"roId": "X8L2x/wfFtv9ob2GHHF5st3rEHk=",
				// 	"trigger": {
				// 		"type": 3,
				// 		"value": "1"
				// 	},
				// 	"priority": 0,
				// 	"duration": 0,
				// 	"LLayer": "atem_dsk_graphics",
				// 	"content": {
				// 		"type": "dsk",
				// 		"attributes": {
				// 			"onAir": true,
				// 			"fillSource": 10,
				// 			"keySource": 11
				// 		},
				// 		"objects": []
				// 	},
				// 	"inGroup": "sl-group-J9SSnFrZXHecqVPHDnUwKeP36Gw=",
				// 	"resolved": {
				// 		"outerDuration": 0,
				// 		"innerDuration": 0
				// 	}
				// },
				// {
				// 	"id": "7fKVnpiy+B3vgknjjzDUcPS5yqM=",
				// 	"roId": "X8L2x/wfFtv9ob2GHHF5st3rEHk=",
				// 	"trigger": {
				// 		"type": 3,
				// 		"value": "1"
				// 	},
				// 	"priority": 0,
				// 	"duration": 0,
				// 	"LLayer": "atem_dsk_effect",
				// 	"content": {
				// 		"type": "dsk",
				// 		"attributes": {
				// 			"onAir": true,
				// 			"fillSource": 12,
				// 			"keySource": 13
				// 		},
				// 		"objects": []
				// 	},
				// 	"inGroup": "sl-group-J9SSnFrZXHecqVPHDnUwKeP36Gw=",
				// 	"resolved": {
				// 		"outerDuration": 0,
				// 		"innerDuration": 0
				// 	}
				// },
				// {
				// 	"id": "NP1y6opT1qOtUSP+dC9R2jjtTdw=",
				// 	"roId": "X8L2x/wfFtv9ob2GHHF5st3rEHk=",
				// 	"trigger": {
				// 		"type": 3,
				// 		"value": "1"
				// 	},
				// 	"priority": 0,
				// 	"duration": 0,
				// 	"LLayer": "atem_dsk_effect",
				// 	"content": {
				// 		"type": "ssrc",
				// 		"attributes": {
				// 			"boxes": [
				// 				{
				// 					"enabled": true,
				// 					"source": 1
				// 				},
				// 				{
				// 					"enabled": true,
				// 					"source": 4
				// 				}
				// 			],
				// 			"artfillSource": 16
				// 		},
				// 		"objects": []
				// 	},
				// 	"inGroup": "sl-group-J9SSnFrZXHecqVPHDnUwKeP36Gw=",
				// 	"resolved": {
				// 		"outerDuration": 0,
				// 		"innerDuration": 0
				// 	}
				// },
				// {
				// 	"id": "XTPlRtE6GnROhpFSkZN31r1nKiw=",
				// 	"roId": "X8L2x/wfFtv9ob2GHHF5st3rEHk=",
				// 	"trigger": {
				// 		"type": 3,
				// 		"value": "1"
				// 	},
				// 	"priority": 0,
				// 	"duration": 0,
				// 	"LLayer": "lawo_source_automix",
				// 	"content": {
				// 		"type": "audio_source",
				// 		"attributes": {
				// 			"db": -191
				// 		},
				// 		"objects": []
				// 	},
				// 	"inGroup": "sl-group-J9SSnFrZXHecqVPHDnUwKeP36Gw=",
				// 	"resolved": {
				// 		"outerDuration": 0,
				// 		"innerDuration": 0
				// 	}
				// },
				// {
				// 	"id": "n4+fyv5j7d60mu7Xl6NML+Ox/OE=",
				// 	"roId": "X8L2x/wfFtv9ob2GHHF5st3rEHk=",
				// 	"trigger": {
				// 		"type": 3,
				// 		"value": "1"
				// 	},
				// 	"priority": 0,
				// 	"duration": 0,
				// 	"LLayer": "lawo_source_clip",
				// 	"content": {
				// 		"type": "audio_source",
				// 		"attributes": {
				// 			"db": -191
				// 		},
				// 		"objects": []
				// 	},
				// 	"inGroup": "sl-group-J9SSnFrZXHecqVPHDnUwKeP36Gw=",
				// 	"resolved": {
				// 		"outerDuration": 0,
				// 		"innerDuration": 0
				// 	}
				// },
				// {
				// 	"id": "DqWg4uVD/tJSoK0MjXmIWYGydoU=",
				// 	"roId": "X8L2x/wfFtv9ob2GHHF5st3rEHk=",
				// 	"trigger": {
				// 		"type": 3,
				// 		"value": "1"
				// 	},
				// 	"priority": 0,
				// 	"duration": 0,
				// 	"LLayer": "lawo_source_effect",
				// 	"content": {
				// 		"type": "audio_source",
				// 		"attributes": {
				// 			"db": -191
				// 		},
				// 		"objects": []
				// 	},
				// 	"inGroup": "sl-group-J9SSnFrZXHecqVPHDnUwKeP36Gw=",
				// 	"resolved": {
				// 		"outerDuration": 0,
				// 		"innerDuration": 0
				// 	}
				// },
				// {
				// 	"id": "zZNNKxKLFGFj8VmDcTtpnuNf9QA=",
				// 	"roId": "X8L2x/wfFtv9ob2GHHF5st3rEHk=",
				// 	"trigger": {
				// 		"type": 3,
				// 		"value": "1"
				// 	},
				// 	"priority": 0,
				// 	"duration": 0,
				// 	"LLayer": "lawo_source_preview",
				// 	"content": {
				// 		"type": "audio_source",
				// 		"attributes": {
				// 			"db": 0
				// 		},
				// 		"objects": []
				// 	},
				// 	"inGroup": "sl-group-J9SSnFrZXHecqVPHDnUwKeP36Gw=",
				// 	"resolved": {
				// 		"outerDuration": 0,
				// 		"innerDuration": 0
				// 	}
				// },
				// {
				// 	"id": "R9DXWYKm0THQnAnUL6vPLx2WwWk=",
				// 	"roId": "X8L2x/wfFtv9ob2GHHF5st3rEHk=",
				// 	"trigger": {
				// 		"type": 3,
				// 		"value": "1"
				// 	},
				// 	"priority": 0,
				// 	"duration": 0,
				// 	"LLayer": "casparcg_cg_graphics",
				// 	"content": {
				// 		"type": "template",
				// 		"attributes": {
				// 			"name": "http://design-nyheter.mesosint.nrk.no/?group=DKKristiansand&channel=gfx1",
				// 			"data": {},
				// 			"useStopCommand": false
				// 		},
				// 		"objects": []
				// 	},
				// 	"inGroup": "sl-group-J9SSnFrZXHecqVPHDnUwKeP36Gw=",
				// 	"resolved": {
				// 		"outerDuration": 0,
				// 		"innerDuration": 0
				// 	}
				// },
				// {
				// 	"id": "xROPId+1i0B1747z1e+Uy5Myti8=",
				// 	"roId": "X8L2x/wfFtv9ob2GHHF5st3rEHk=",
				// 	"trigger": {
				// 		"type": 3,
				// 		"value": "1"
				// 	},
				// 	"priority": 0,
				// 	"duration": 0,
				// 	"LLayer": "casparcg_cg_logo",
				// 	"content": {
				// 		"type": "template",
				// 		"attributes": {
				// 			"name": "http://design-nyheter.mesosint.nrk.no/?group=DKKristiansand&channel=gfx1",
				// 			"data": {},
				// 			"useStopCommand": false
				// 		},
				// 		"objects": []
				// 	},
				// 	"inGroup": "sl-group-J9SSnFrZXHecqVPHDnUwKeP36Gw=",
				// 	"resolved": {
				// 		"outerDuration": 0,
				// 		"innerDuration": 0
				// 	}
				// },
				// {
				// 	"id": "oVsb0PdAg15excnLBUG5bOwqMKU=",
				// 	"roId": "X8L2x/wfFtv9ob2GHHF5st3rEHk=",
				// 	"trigger": {
				// 		"type": 3,
				// 		"value": "1"
				// 	},
				// 	"priority": 0,
				// 	"duration": 0,
				// 	"LLayer": "casparcg_cg_studiomonitor",
				// 	"content": {
				// 		"type": "template",
				// 		"attributes": {
				// 			"name": "http://design-nyheter.mesosint.nrk.no/?group=DKKristiansand&channel=gfx2",
				// 			"data": {},
				// 			"useStopCommand": false
				// 		},
				// 		"objects": []
				// 	},
				// 	"inGroup": "sl-group-J9SSnFrZXHecqVPHDnUwKeP36Gw=",
				// 	"resolved": {
				// 		"outerDuration": 0,
				// 		"innerDuration": 0
				// 	}
				// },
				// {
				// 	"id": "sl-group-firstobject-J9SSnFrZXHecqVPHDnUwKeP36Gw=",
				// 	"roId": "X8L2x/wfFtv9ob2GHHF5st3rEHk=",
				// 	"trigger": {
				// 		"type": 0,
				// 		"value": 0
				// 	},
				// 	"duration": 0,
				// 	"LLayer": "core_abstract",
				// 	"content": {
				// 		"type": "nothing",
				// 		"objects": [],
				// 		"callBack": "segmentLinePlaybackStarted",
				// 		"callBackData": {
				// 			"roId": "X8L2x/wfFtv9ob2GHHF5st3rEHk=",
				// 			"slId": "J9SSnFrZXHecqVPHDnUwKeP36Gw="
				// 		}
				// 	},
				// 	"inGroup": "sl-group-J9SSnFrZXHecqVPHDnUwKeP36Gw=",
				// 	"slId": "J9SSnFrZXHecqVPHDnUwKeP36Gw=",
				// 	"resolved": {
				// 		"startTime": 0,
				// 		"outerDuration": 0,
				// 		"innerDuration": 0,
				// 		"endTime": 0
				// 	}
				// }
			],
			"GLayer": "core"
		},
		"isGroup": true,
		"isSegmentLineGroup": true
	}
]

Resolver.setTraceLevel(TraceLevel.TRACE)
let state = Resolver.getState(tl, 1527064487117)

console.log('state', state)
// console.log('state')


