"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Iterator = exports.createIteratorProxy = void 0;
const java_bridge_1 = require("java-bridge");
/**
 * Create a proxy for the {@link Iterator} interface.
 * All required methods in {@link IteratorInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
function createIteratorProxy(methods, opts) {
    return (0, java_bridge_1.newProxy)('java.util.Iterator', methods, opts);
}
exports.createIteratorProxy = createIteratorProxy;
/**
 * Class java.util.Iterator.
 *
 * This actually imports the java class for further use.
 * The class {@link IteratorClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
class Iterator extends (0, java_bridge_1.importClass)('java.util.Iterator') {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    constructor() {
        super();
    }
}
exports.Iterator = Iterator;
exports.default = Iterator;
//# sourceMappingURL=Iterator.js.map