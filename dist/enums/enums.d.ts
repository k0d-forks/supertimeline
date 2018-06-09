export declare enum TriggerType {
    TIME_ABSOLUTE = 0,
    TIME_RELATIVE = 1,
    LOGICAL = 3
}
export declare enum EventType {
    START = 0,
    END = 1,
    KEYFRAME = 2
}
export declare enum TraceLevel {
    ERRORS = 0,
    INFO = 1,
    TRACE = 2
}
export declare const Enums: {
    TriggerType: typeof TriggerType;
    TimelineEventType: typeof EventType;
    TraceLevel: typeof TraceLevel;
};
