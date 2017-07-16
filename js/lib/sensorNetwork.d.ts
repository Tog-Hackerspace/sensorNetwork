/// <reference types="node" />
import events = require('events');
import { IMessageTransport, IDevice } from '@seannicholls/sensor';
export declare class SensorChannels {
    static All: string;
    static KnifeSwitch: string;
    static PowerSwitch: string;
}
export declare class SensorNetwork extends events.EventEmitter {
    protected _client: IMessageTransport;
    protected _sensors: any;
    constructor(_client: IMessageTransport);
    getMQTT(): any;
    readonly KnifeSwitch: IDevice;
    readonly PowerSwitch: IDevice;
    on(event: string | symbol, listener: (...args: any[]) => void): this;
}
