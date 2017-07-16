import { Switch, IMessageTransport } from '@seannicholls/sensor';
export declare class KnifeSwitch extends Switch {
    sensorPin: number;
    constructor(client: IMessageTransport);
}
