import { JavaClass, InterfaceProxyOptions, JavaInterfaceProxy } from "java-bridge";
import { Long as java_lang_Long } from "./../../lang/Long";
/**
 * This class just defines types, you should import {@link LongUnaryOperator} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class LongUnaryOperatorClass extends JavaClass {
    /**
     * @return original return type: 'java.util.function.LongUnaryOperator'
     */
    static identity(): Promise<LongUnaryOperator | null>;
    /**
     * @return original return type: 'java.util.function.LongUnaryOperator'
     */
    static identitySync(): LongUnaryOperator | null;
    /**
     * @param var0 original type: 'long'
     * @return original return type: 'long'
     */
    applyAsLong(var0: java_lang_Long | bigint | number): Promise<number>;
    /**
     * @param var0 original type: 'long'
     * @return original return type: 'long'
     */
    applyAsLongSync(var0: java_lang_Long | bigint | number): number;
    /**
     * @param var0 original type: 'java.util.function.LongUnaryOperator'
     * @return original return type: 'java.util.function.LongUnaryOperator'
     */
    compose(var0: LongUnaryOperatorClass | JavaInterfaceProxy<LongUnaryOperatorInterface> | null): Promise<LongUnaryOperator | null>;
    /**
     * @param var0 original type: 'java.util.function.LongUnaryOperator'
     * @return original return type: 'java.util.function.LongUnaryOperator'
     */
    composeSync(var0: LongUnaryOperatorClass | JavaInterfaceProxy<LongUnaryOperatorInterface> | null): LongUnaryOperator | null;
    /**
     * @param var0 original type: 'java.util.function.LongUnaryOperator'
     * @return original return type: 'java.util.function.LongUnaryOperator'
     */
    andThen(var0: LongUnaryOperatorClass | JavaInterfaceProxy<LongUnaryOperatorInterface> | null): Promise<LongUnaryOperator | null>;
    /**
     * @param var0 original type: 'java.util.function.LongUnaryOperator'
     * @return original return type: 'java.util.function.LongUnaryOperator'
     */
    andThenSync(var0: LongUnaryOperatorClass | JavaInterfaceProxy<LongUnaryOperatorInterface> | null): LongUnaryOperator | null;
}
/**
 * This interface just defines types for creating proxies,
 * you should use {@link createLongUnaryOperatorProxy} for actually creating the proxies.
 *
 * Optional methods in here may still be required by java.
 * This is caused by typescript not allowing to have both optional and
 * non-optional signatures for the same interface member.
 *
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export interface LongUnaryOperatorInterface {
    /**
     * @param var0 original type: 'long'
     * @return original return type: 'long'
     */
    applyAsLong(var0: java_lang_Long | bigint | number): number;
    /**
     * @param var0 original type: 'java.util.function.LongUnaryOperator'
     * @return original return type: 'java.util.function.LongUnaryOperator'
     */
    compose?(var0: LongUnaryOperatorClass | JavaInterfaceProxy<LongUnaryOperatorInterface> | null): LongUnaryOperator | null;
    /**
     * @param var0 original type: 'java.util.function.LongUnaryOperator'
     * @return original return type: 'java.util.function.LongUnaryOperator'
     */
    andThen?(var0: LongUnaryOperatorClass | JavaInterfaceProxy<LongUnaryOperatorInterface> | null): LongUnaryOperator | null;
}
/**
 * Create a proxy for the {@link LongUnaryOperator} interface.
 * All required methods in {@link LongUnaryOperatorInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
export declare function createLongUnaryOperatorProxy(methods: LongUnaryOperatorInterface, opts?: InterfaceProxyOptions): JavaInterfaceProxy<LongUnaryOperatorInterface>;
declare const LongUnaryOperator_base: typeof LongUnaryOperatorClass;
/**
 * Class java.util.function.LongUnaryOperator.
 *
 * This actually imports the java class for further use.
 * The class {@link LongUnaryOperatorClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class LongUnaryOperator extends LongUnaryOperator_base {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    private constructor();
}
export default LongUnaryOperator;
//# sourceMappingURL=LongUnaryOperator.d.ts.map