"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileAttributeView = exports.createFileAttributeViewProxy = void 0;
const java_bridge_1 = require("java-bridge");
/**
 * Create a proxy for the {@link FileAttributeView} interface.
 * All required methods in {@link FileAttributeViewInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
function createFileAttributeViewProxy(methods, opts) {
    return (0, java_bridge_1.newProxy)('java.nio.file.attribute.FileAttributeView', methods, opts);
}
exports.createFileAttributeViewProxy = createFileAttributeViewProxy;
/**
 * Class java.nio.file.attribute.FileAttributeView.
 *
 * This actually imports the java class for further use.
 * The class {@link FileAttributeViewClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
class FileAttributeView extends (0, java_bridge_1.importClass)('java.nio.file.attribute.FileAttributeView') {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    constructor() {
        super();
    }
}
exports.FileAttributeView = FileAttributeView;
exports.default = FileAttributeView;
//# sourceMappingURL=FileAttributeView.js.map