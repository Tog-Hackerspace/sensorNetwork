"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sensor_1 = require("@tog-hackerspace/sensor");
const power_schema_1 = require("./power.schema");
class PowerSwitch extends sensor_1.Switch {
    constructor(client) {
        super(client, power_schema_1.PowerSwitchSchema.ack, power_schema_1.PowerSwitchSchema.sub, ['/tog/sensors/rf/common_room/acks'], // ACK
        ['/tog/sensors/rf/common_room'], // MSG
        ['/tog/sensors/rf/common_room'], // PUB
        'no_serial', 'Power Switch', 'Power switches attached to the lamps in the common room', 'common_room', sensor_1.AccessLevel.READ_WRITE);
        this.lastUpdated = null;
        this.socket = 'all';
    }
    _onSetState(state) {
        return {
            state: state,
            socket: this.socket
        };
    }
}
exports.PowerSwitch = PowerSwitch;
//# sourceMappingURL=power.js.map