import { TriggerType, TraceLevel, EventType } from '../enums/enums';
export interface TimelineObject {
    id: ObjectId;
    trigger: {
        type: TriggerType;
        value: number | string;
    };
    duration: number;
    LLayer: string | number;
    content: {
        objects?: Array<TimelineObject>;
        keyframes?: Array<TimelineKeyframe>;
        [key: string]: any;
    };
    classes?: Array<string>;
    disabled?: boolean;
    isGroup?: boolean;
    repeating?: boolean;
    priority?: number;
    externalFunction?: string;
}
export interface TimelineGroup extends TimelineObject {
    resolved: ResolvedDetails;
    parent?: TimelineGroup;
}
export declare type TimeMaybe = number | null;
export declare type StartTime = number | null;
export declare type EndTime = number | null;
export declare type Duration = number | null;
export declare type SomeTime = number;
export declare type ObjectId = string;
export interface TimelineEvent {
    type: EventType;
    time: SomeTime;
    obj: TimelineObject;
    kf?: TimelineResolvedKeyframe;
}
export interface TimelineKeyframe {
    id: string;
    trigger: {
        type: TriggerType;
        value: number | string;
    };
    duration: number;
    content?: {
        [key: string]: any;
    };
    classes?: Array<string>;
}
export interface TimelineResolvedObject extends TimelineObject {
    resolved: ResolvedDetails;
    parent?: TimelineGroup;
}
export interface TimelineResolvedKeyframe extends TimelineKeyframe {
    resolved: ResolvedDetails;
    parent?: ObjectId;
}
export interface ResolvedDetails {
    startTime?: StartTime;
    endTime?: EndTime;
    innerStartTime?: StartTime;
    innerEndTime?: EndTime;
    innerDuration?: Duration;
    outerDuration?: Duration;
    parentId?: ObjectId;
    disabled?: boolean;
    referralIndex?: number | null;
    referredObjectIds?: Array<{
        id: string;
        hook: string;
    }> | null;
    repeatingStartTime?: StartTime;
    templateData?: any;
    [key: string]: any;
}
export interface ResolvedTimeline {
    resolved: Array<TimelineResolvedObject>;
    unresolved: Array<TimelineObject>;
}
export interface DevelopedTimeline {
    resolved: Array<TimelineResolvedObject>;
    unresolved: Array<TimelineObject>;
    groups: Array<TimelineGroup>;
}
export interface TimelineState {
    time: SomeTime;
    GLayers: {
        [GLayer: string]: TimelineResolvedObject;
    };
    LLayers: {
        [LLayer: string]: TimelineResolvedObject;
    };
}
export interface ExternalFunctions {
    [fcnName: string]: (obj: TimelineResolvedObject, state: TimelineState, tld: DevelopedTimeline) => boolean;
}
export interface UnresolvedTimeline extends Array<TimelineObject> {
}
export interface ResolvedObjectsStore {
    [id: string]: TimelineResolvedObject | TimelineResolvedKeyframe;
}
export declare type Expression = number | string | ExpressionObj;
export interface ExpressionObj {
    l: Expression;
    o: string;
    r: Expression;
}
export interface Filter {
    startTime?: StartTime;
    endTime?: EndTime;
}
declare class Resolver {
    static setTraceLevel(levelName: string | TraceLevel): void;
    static getTraceLevel(): TraceLevel;
    static getState(data: UnresolvedTimeline | ResolvedTimeline, time: SomeTime, externalFunctions?: ExternalFunctions): TimelineState;
    static getNextEvents(data: ResolvedTimeline, time: SomeTime, count?: number): TimelineEvent[];
    static getTimelineInWindow(data: UnresolvedTimeline, startTime?: StartTime, endTime?: EndTime): ResolvedTimeline;
    static getObjectsInWindow(data: UnresolvedTimeline, startTime: SomeTime, endTime?: SomeTime): DevelopedTimeline;
    static interpretExpression(strOrExpr: string | number | Expression, isLogical?: boolean): string | number | ExpressionObj | null;
    static resolveExpression(strOrExpr: string | number | Expression, resolvedObjects?: ResolvedObjectsStore, ctx?: ResolveExpressionContext): StartTime;
    static resolveLogicalExpression(expressionOrString: Expression | null, obj?: TimelineResolvedObject, returnExpl?: boolean, currentState?: TimelineState): boolean;
    static developTimelineAroundTime(tl: ResolvedTimeline, time: SomeTime): DevelopedTimeline;
    static decipherLogicalValue(str: string | number, obj: TimelineObject | TimelineKeyframe, currentState: TimelineState, returnExpl?: boolean): boolean | string;
}
export interface ResolveExpressionContext {
    touchedObjectExpressions: {
        [expression: string]: any;
    };
    touchedObjectIDs: Array<{
        id: string;
        hook: string;
    }>;
    referralIndex: number;
}
export { Resolver };
