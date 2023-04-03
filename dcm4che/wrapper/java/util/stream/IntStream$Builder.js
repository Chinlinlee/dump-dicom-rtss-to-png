"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IntStream$Builder = exports.createIntStream$BuilderProxy = void 0;
const java_bridge_1 = require("java-bridge");
/**
 * Create a proxy for the {@link IntStream$Builder} interface.
 * All required methods in {@link IntStream$BuilderInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
function createIntStream$BuilderProxy(methods, opts) {
    return (0, java_bridge_1.newProxy)('java.util.stream.IntStream$Builder', methods, opts);
}
exports.createIntStream$BuilderProxy = createIntStream$BuilderProxy;
/**
 * Class java.util.stream.IntStream$Builder.
 *
 * This actually imports the java class for further use.
 * The class {@link IntStream$BuilderClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
class IntStream$Builder extends (0, java_bridge_1.importClass)('java.util.stream.IntStream$Builder') {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    constructor() {
        super();
    }
}
exports.IntStream$Builder = IntStream$Builder;
exports.default = IntStream$Builder;
//# sourceMappingURL=IntStream$Builder.js.map