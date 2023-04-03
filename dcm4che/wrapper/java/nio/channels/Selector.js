"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Selector = void 0;
const java_bridge_1 = require("java-bridge");
/**
 * Class java.nio.channels.Selector.
 *
 * This actually imports the java class for further use.
 * The class {@link SelectorClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
class Selector extends (0, java_bridge_1.importClass)('java.nio.channels.Selector') {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    constructor() {
        super();
    }
}
exports.Selector = Selector;
exports.default = Selector;
//# sourceMappingURL=Selector.js.map