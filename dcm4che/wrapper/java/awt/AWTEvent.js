"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AWTEvent = void 0;
const java_bridge_1 = require("java-bridge");
/**
 * Class java.awt.AWTEvent.
 *
 * This actually imports the java class for further use.
 * The class {@link AWTEventClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
class AWTEvent extends (0, java_bridge_1.importClass)('java.awt.AWTEvent') {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    constructor() {
        super();
    }
}
exports.AWTEvent = AWTEvent;
exports.default = AWTEvent;
//# sourceMappingURL=AWTEvent.js.map