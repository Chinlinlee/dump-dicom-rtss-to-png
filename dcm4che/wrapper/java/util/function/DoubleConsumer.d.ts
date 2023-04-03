import { JavaClass, InterfaceProxyOptions, JavaInterfaceProxy } from "java-bridge";
import { Double as java_lang_Double } from "./../../lang/Double";
/**
 * This class just defines types, you should import {@link DoubleConsumer} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class DoubleConsumerClass extends JavaClass {
    /**
     * @param var0 original type: 'double'
     * @return original return type: 'void'
     */
    accept(var0: java_lang_Double | number): Promise<void>;
    /**
     * @param var0 original type: 'double'
     * @return original return type: 'void'
     */
    acceptSync(var0: java_lang_Double | number): void;
    /**
     * @param var0 original type: 'java.util.function.DoubleConsumer'
     * @return original return type: 'java.util.function.DoubleConsumer'
     */
    andThen(var0: DoubleConsumerClass | JavaInterfaceProxy<DoubleConsumerInterface> | null): Promise<DoubleConsumer | null>;
    /**
     * @param var0 original type: 'java.util.function.DoubleConsumer'
     * @return original return type: 'java.util.function.DoubleConsumer'
     */
    andThenSync(var0: DoubleConsumerClass | JavaInterfaceProxy<DoubleConsumerInterface> | null): DoubleConsumer | null;
}
/**
 * This interface just defines types for creating proxies,
 * you should use {@link createDoubleConsumerProxy} for actually creating the proxies.
 *
 * Optional methods in here may still be required by java.
 * This is caused by typescript not allowing to have both optional and
 * non-optional signatures for the same interface member.
 *
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export interface DoubleConsumerInterface {
    /**
     * @param var0 original type: 'double'
     * @return original return type: 'void'
     */
    accept(var0: java_lang_Double | number): void;
    /**
     * @param var0 original type: 'java.util.function.DoubleConsumer'
     * @return original return type: 'java.util.function.DoubleConsumer'
     */
    andThen?(var0: DoubleConsumerClass | JavaInterfaceProxy<DoubleConsumerInterface> | null): DoubleConsumer | null;
}
/**
 * Create a proxy for the {@link DoubleConsumer} interface.
 * All required methods in {@link DoubleConsumerInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
export declare function createDoubleConsumerProxy(methods: DoubleConsumerInterface, opts?: InterfaceProxyOptions): JavaInterfaceProxy<DoubleConsumerInterface>;
declare const DoubleConsumer_base: typeof DoubleConsumerClass;
/**
 * Class java.util.function.DoubleConsumer.
 *
 * This actually imports the java class for further use.
 * The class {@link DoubleConsumerClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class DoubleConsumer extends DoubleConsumer_base {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    private constructor();
}
export default DoubleConsumer;
//# sourceMappingURL=DoubleConsumer.d.ts.map