"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Spliterator$OfLong = exports.createSpliterator$OfLongProxy = void 0;
const java_bridge_1 = require("java-bridge");
/**
 * Create a proxy for the {@link Spliterator$OfLong} interface.
 * All required methods in {@link Spliterator$OfLongInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
function createSpliterator$OfLongProxy(methods, opts) {
    return (0, java_bridge_1.newProxy)('java.util.Spliterator$OfLong', methods, opts);
}
exports.createSpliterator$OfLongProxy = createSpliterator$OfLongProxy;
/**
 * Class java.util.Spliterator$OfLong.
 *
 * This actually imports the java class for further use.
 * The class {@link Spliterator$OfLongClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
class Spliterator$OfLong extends (0, java_bridge_1.importClass)('java.util.Spliterator$OfLong') {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    constructor() {
        super();
    }
}
exports.Spliterator$OfLong = Spliterator$OfLong;
exports.default = Spliterator$OfLong;
//# sourceMappingURL=Spliterator$OfLong.js.map