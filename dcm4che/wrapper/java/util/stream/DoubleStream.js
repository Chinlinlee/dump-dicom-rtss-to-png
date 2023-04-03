"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoubleStream = exports.createDoubleStreamProxy = void 0;
const java_bridge_1 = require("java-bridge");
/**
 * Create a proxy for the {@link DoubleStream} interface.
 * All required methods in {@link DoubleStreamInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
function createDoubleStreamProxy(methods, opts) {
    return (0, java_bridge_1.newProxy)('java.util.stream.DoubleStream', methods, opts);
}
exports.createDoubleStreamProxy = createDoubleStreamProxy;
/**
 * Class java.util.stream.DoubleStream.
 *
 * This actually imports the java class for further use.
 * The class {@link DoubleStreamClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
class DoubleStream extends (0, java_bridge_1.importClass)('java.util.stream.DoubleStream') {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    constructor() {
        super();
    }
}
exports.DoubleStream = DoubleStream;
exports.default = DoubleStream;
//# sourceMappingURL=DoubleStream.js.map