"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LongConsumer = exports.createLongConsumerProxy = void 0;
const java_bridge_1 = require("java-bridge");
/**
 * Create a proxy for the {@link LongConsumer} interface.
 * All required methods in {@link LongConsumerInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
function createLongConsumerProxy(methods, opts) {
    return (0, java_bridge_1.newProxy)('java.util.function.LongConsumer', methods, opts);
}
exports.createLongConsumerProxy = createLongConsumerProxy;
/**
 * Class java.util.function.LongConsumer.
 *
 * This actually imports the java class for further use.
 * The class {@link LongConsumerClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
class LongConsumer extends (0, java_bridge_1.importClass)('java.util.function.LongConsumer') {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    constructor() {
        super();
    }
}
exports.LongConsumer = LongConsumer;
exports.default = LongConsumer;
//# sourceMappingURL=LongConsumer.js.map