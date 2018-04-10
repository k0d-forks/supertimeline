"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TriggerType;
(function (TriggerType) {
    TriggerType[TriggerType["TIME_ABSOLUTE"] = 0] = "TIME_ABSOLUTE";
    TriggerType[TriggerType["TIME_RELATIVE"] = 1] = "TIME_RELATIVE";
    // To be implemented (and might never be)
    // EVENT = 2,			// the object is not on the timeline, but can be triggered typically from an external source
    TriggerType[TriggerType["LOGICAL"] = 3] = "LOGICAL"; // the object is defined by a logical expression, if resolved to true, then object is present on current time.,
})(TriggerType = exports.TriggerType || (exports.TriggerType = {}));
var EventType;
(function (EventType) {
    EventType[EventType["START"] = 0] = "START";
    EventType[EventType["END"] = 1] = "END";
    EventType[EventType["KEYFRAME"] = 2] = "KEYFRAME";
})(EventType = exports.EventType || (exports.EventType = {}));
var TraceLevel;
(function (TraceLevel) {
    TraceLevel[TraceLevel["ERRORS"] = 0] = "ERRORS";
    TraceLevel[TraceLevel["INFO"] = 1] = "INFO";
    TraceLevel[TraceLevel["TRACE"] = 2] = "TRACE";
})(TraceLevel = exports.TraceLevel || (exports.TraceLevel = {}));
exports.Enums = {
    TriggerType: TriggerType,
    TimelineEventType: EventType,
    TraceLevel: TraceLevel
};
//# sourceMappingURL=enums.js.map