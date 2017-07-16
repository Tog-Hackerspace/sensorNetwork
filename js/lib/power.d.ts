import { Switch, IMessageTransport } from '@seannicholls/sensor';
export declare class PowerSwitch extends Switch {
    lastUpdated: any;
    socket: string;
    constructor(client: IMessageTransport);
    protected _onSetState(state: boolean): any;
}
