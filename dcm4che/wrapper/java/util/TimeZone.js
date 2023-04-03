"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeZone = void 0;
const java_bridge_1 = require("java-bridge");
/**
 * Class java.util.TimeZone.
 *
 * This actually imports the java class for further use.
 * The class {@link TimeZoneClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
class TimeZone extends (0, java_bridge_1.importClass)('java.util.TimeZone') {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    constructor() {
        super();
    }
}
exports.TimeZone = TimeZone;
exports.default = TimeZone;
//# sourceMappingURL=TimeZone.js.map