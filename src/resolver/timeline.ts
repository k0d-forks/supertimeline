import { TriggerType } from '../enums/enums'

export type ObjectId = string

export interface TimelineObject {
	id: ObjectId,
	trigger: TimelineTrigger,
	duration?: number | string,
	LLayer: string | number,
	content: {
		objects?: Array<TimelineObject>,

		keyframes?: Array<TimelineKeyframe>,
		// templateData?: any,

		[key: string]: any
	},
	classes?: Array<string>
	disabled?: boolean,
	isGroup?: boolean,
	repeating?: boolean,
	priority?: number,
	externalFunction?: string
}
export interface TimelineTrigger {
	type: TriggerType
	value: number | string
}
export interface TimelineKeyframe {
	id: string,
	trigger: {
		type: TriggerType,
		value: number | string
	},
	duration?: number | string,
	content?: {

		// templateData?: any,
		[key: string]: any
	},
	classes?: Array<string>
}
