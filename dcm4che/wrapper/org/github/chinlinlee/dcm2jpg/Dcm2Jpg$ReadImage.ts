import { importClass, JavaClass, newProxy, InterfaceProxyOptions, JavaInterfaceProxy } from "java-bridge";
import { BufferedImage as java_awt_image_BufferedImage } from "./../../../../java/awt/image/BufferedImage";
import { File as java_io_File } from "./../../../../java/io/File";

/**
 * This class just defines types, you should import {@link Dcm2Jpg$ReadImage} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class Dcm2Jpg$ReadImageClass extends JavaClass {
    // ================== Method apply ==================
    /**
     * @param var0 original type: 'java.io.File'
     * @return original return type: 'java.awt.image.BufferedImage'
     */
    public apply(var0: java_io_File | null): Promise<java_awt_image_BufferedImage | null>;
    // ================== Method apply ==================
    /**
     * @param var0 original type: 'java.io.File'
     * @return original return type: 'java.awt.image.BufferedImage'
     */
    public applySync(var0: java_io_File | null): java_awt_image_BufferedImage | null;
}

/**
 * This interface just defines types for creating proxies,
 * you should use {@link createDcm2Jpg$ReadImageProxy} for actually creating the proxies.
 *
 * Optional methods in here may still be required by java.
 * This is caused by typescript not allowing to have both optional and
 * non-optional signatures for the same interface member.
 *
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export interface Dcm2Jpg$ReadImageInterface {
    // ================== Method apply ==================
    /**
     * @param var0 original type: 'java.io.File'
     * @return original return type: 'java.awt.image.BufferedImage'
     */
    apply(var0: java_io_File | null): java_awt_image_BufferedImage | null;
}

/**
 * Create a proxy for the {@link Dcm2Jpg$ReadImage} interface.
 * All required methods in {@link Dcm2Jpg$ReadImageInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
export function createDcm2Jpg$ReadImageProxy(methods: Dcm2Jpg$ReadImageInterface, opts?: InterfaceProxyOptions): JavaInterfaceProxy<Dcm2Jpg$ReadImageInterface> {
    return newProxy<Dcm2Jpg$ReadImageInterface>('org.github.chinlinlee.dcm2jpg.Dcm2Jpg$ReadImage', methods, opts);
}

/**
 * Class org.github.chinlinlee.dcm2jpg.Dcm2Jpg$ReadImage.
 *
 * This actually imports the java class for further use.
 * The class {@link Dcm2Jpg$ReadImageClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export class Dcm2Jpg$ReadImage extends importClass<typeof Dcm2Jpg$ReadImageClass>('org.github.chinlinlee.dcm2jpg.Dcm2Jpg$ReadImage') {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    private constructor() {
        super();
    }
}
export default Dcm2Jpg$ReadImage;