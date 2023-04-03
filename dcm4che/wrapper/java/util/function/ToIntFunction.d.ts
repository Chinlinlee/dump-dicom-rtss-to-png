import { JavaClass, BasicOrJavaType, InterfaceProxyOptions, JavaInterfaceProxy } from "java-bridge";
/**
 * This class just defines types, you should import {@link ToIntFunction} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class ToIntFunctionClass extends JavaClass {
    /**
     * @param var0 original type: 'java.lang.Object'
     * @return original return type: 'int'
     */
    applyAsInt(var0: BasicOrJavaType | null): Promise<number>;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @return original return type: 'int'
     */
    applyAsIntSync(var0: BasicOrJavaType | null): number;
}
/**
 * This interface just defines types for creating proxies,
 * you should use {@link createToIntFunctionProxy} for actually creating the proxies.
 *
 * Optional methods in here may still be required by java.
 * This is caused by typescript not allowing to have both optional and
 * non-optional signatures for the same interface member.
 *
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export interface ToIntFunctionInterface {
    /**
     * @param var0 original type: 'java.lang.Object'
     * @return original return type: 'int'
     */
    applyAsInt(var0: BasicOrJavaType | null): number;
}
/**
 * Create a proxy for the {@link ToIntFunction} interface.
 * All required methods in {@link ToIntFunctionInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
export declare function createToIntFunctionProxy(methods: ToIntFunctionInterface, opts?: InterfaceProxyOptions): JavaInterfaceProxy<ToIntFunctionInterface>;
declare const ToIntFunction_base: typeof ToIntFunctionClass;
/**
 * Class java.util.function.ToIntFunction.
 *
 * This actually imports the java class for further use.
 * The class {@link ToIntFunctionClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class ToIntFunction extends ToIntFunction_base {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    private constructor();
}
export default ToIntFunction;
//# sourceMappingURL=ToIntFunction.d.ts.map