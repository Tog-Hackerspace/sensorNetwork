"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sensor_1 = require("@tog-hackerspace/sensor");
const knife_schema_1 = require("./knife.schema");
class KnifeSwitch extends sensor_1.Switch {
    constructor(client) {
        super(client, knife_schema_1.KnifeSwitchSchema.ack, knife_schema_1.KnifeSwitchSchema.sub, ['/tog/sensors/rf/common_room/acks'], // ACKs
        ['/tog/sensors/rf/common_room'], // CMD
        ['/tog/sensors/rf/common_room'], // PUB
        'knife_switch_ca750200', 'Knife Switch', 'Open / Closed status switch (shown on website)', 'common_room', sensor_1.AccessLevel.READ_ONLY);
        this.sensorPin = -1;
    }
}
exports.KnifeSwitch = KnifeSwitch;
//# sourceMappingURL=knife.js.map