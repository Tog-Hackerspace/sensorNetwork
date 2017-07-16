import { Switch, IMessageTransport } from '@tog-hackerspace/sensor';
export declare class KnifeSwitch extends Switch {
    sensorPin: number;
    constructor(client: IMessageTransport);
}
