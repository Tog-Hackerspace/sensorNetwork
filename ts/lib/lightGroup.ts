import {
  AccessLevel,
  Switch,
  IMessageTransport,
  IDevice,
  DeviceGroup
} from '@seannicholls/sensor';
import { Joi } from '../lib/joi';
import { PowerSwitch } from './power';

export class LightGroup extends DeviceGroup {

  public lastUpdated: any = null;
  public socket: string = 'all';

  private _allSocket = new PowerSwitch('all');
  private _sockets = [
    'e',
    'f',
    'g',
    'h'
  ];

  constructor(client: IMessageTransport) {
    super();
    let targets = new Array<PowerSwitch>();
    for(let socket of this._sockets) {
      targets.push(new PowerSwitch(socket));
    }
    super.addDevices(targets);
  }

  public turnOn(index: number) {
    let device = super.getDevice(index);
    if(!device) { return; }
    device.state = true;
  }

  public turnOff(index: number) {
    let device = super.getDevice(index);
    if(!device) { return; }
    device.state = false;
  }

  protected _onSetState(state: boolean): any {

    super.publish({
      state: state,
      socket: this.socket
    });

    return true;
  }
}
