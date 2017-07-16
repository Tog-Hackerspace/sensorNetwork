import { IMessageTransport, Callback } from '@seannicholls/sensor';
export declare class MockTransport implements IMessageTransport {
    subscribe(topic: string, callback?: Callback): any;
    on(topic: string, callback?: Callback): any;
    publish(topic: string, message: string, callback?: Callback): any;
}
