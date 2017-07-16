import { Switch, IMessageTransport } from '@tog-hackerspace/sensor';
export declare class PowerSwitch extends Switch {
    lastUpdated: any;
    socket: string;
    constructor(client: IMessageTransport);
    protected _onSetState(state: boolean): any;
}
