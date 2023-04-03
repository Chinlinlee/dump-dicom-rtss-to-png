import { JavaClass, InterfaceProxyOptions, JavaInterfaceProxy } from "java-bridge";
import { Double as java_lang_Double } from "./../../lang/Double";
import { DoubleConsumer as java_util_function_DoubleConsumer, DoubleConsumerInterface as java_util_function_DoubleConsumerInterface } from "./../function/DoubleConsumer";
/**
 * This class just defines types, you should import {@link DoubleStream$DoubleMapMultiConsumer} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class DoubleStream$DoubleMapMultiConsumerClass extends JavaClass {
    /**
     * @param var0 original type: 'double'
     * @param var1 original type: 'java.util.function.DoubleConsumer'
     * @return original return type: 'void'
     */
    accept(var0: java_lang_Double | number, var1: java_util_function_DoubleConsumer | JavaInterfaceProxy<java_util_function_DoubleConsumerInterface> | null): Promise<void>;
    /**
     * @param var0 original type: 'double'
     * @param var1 original type: 'java.util.function.DoubleConsumer'
     * @return original return type: 'void'
     */
    acceptSync(var0: java_lang_Double | number, var1: java_util_function_DoubleConsumer | JavaInterfaceProxy<java_util_function_DoubleConsumerInterface> | null): void;
}
/**
 * This interface just defines types for creating proxies,
 * you should use {@link createDoubleStream$DoubleMapMultiConsumerProxy} for actually creating the proxies.
 *
 * Optional methods in here may still be required by java.
 * This is caused by typescript not allowing to have both optional and
 * non-optional signatures for the same interface member.
 *
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export interface DoubleStream$DoubleMapMultiConsumerInterface {
    /**
     * @param var0 original type: 'double'
     * @param var1 original type: 'java.util.function.DoubleConsumer'
     * @return original return type: 'void'
     */
    accept(var0: java_lang_Double | number, var1: java_util_function_DoubleConsumer | JavaInterfaceProxy<java_util_function_DoubleConsumerInterface> | null): void;
}
/**
 * Create a proxy for the {@link DoubleStream$DoubleMapMultiConsumer} interface.
 * All required methods in {@link DoubleStream$DoubleMapMultiConsumerInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
export declare function createDoubleStream$DoubleMapMultiConsumerProxy(methods: DoubleStream$DoubleMapMultiConsumerInterface, opts?: InterfaceProxyOptions): JavaInterfaceProxy<DoubleStream$DoubleMapMultiConsumerInterface>;
declare const DoubleStream$DoubleMapMultiConsumer_base: typeof DoubleStream$DoubleMapMultiConsumerClass;
/**
 * Class java.util.stream.DoubleStream$DoubleMapMultiConsumer.
 *
 * This actually imports the java class for further use.
 * The class {@link DoubleStream$DoubleMapMultiConsumerClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class DoubleStream$DoubleMapMultiConsumer extends DoubleStream$DoubleMapMultiConsumer_base {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    private constructor();
}
export default DoubleStream$DoubleMapMultiConsumer;
//# sourceMappingURL=DoubleStream$DoubleMapMultiConsumer.d.ts.map