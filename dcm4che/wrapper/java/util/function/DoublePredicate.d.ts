import { JavaClass, InterfaceProxyOptions, JavaInterfaceProxy } from "java-bridge";
import { Double as java_lang_Double } from "./../../lang/Double";
/**
 * This class just defines types, you should import {@link DoublePredicate} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class DoublePredicateClass extends JavaClass {
    /**
     * @param var0 original type: 'double'
     * @return original return type: 'boolean'
     */
    test(var0: java_lang_Double | number): Promise<boolean>;
    /**
     * @param var0 original type: 'double'
     * @return original return type: 'boolean'
     */
    testSync(var0: java_lang_Double | number): boolean;
    /**
     * @param var0 original type: 'java.util.function.DoublePredicate'
     * @return original return type: 'java.util.function.DoublePredicate'
     */
    or(var0: DoublePredicateClass | JavaInterfaceProxy<DoublePredicateInterface> | null): Promise<DoublePredicate | null>;
    /**
     * @param var0 original type: 'java.util.function.DoublePredicate'
     * @return original return type: 'java.util.function.DoublePredicate'
     */
    orSync(var0: DoublePredicateClass | JavaInterfaceProxy<DoublePredicateInterface> | null): DoublePredicate | null;
    /**
     * @return original return type: 'java.util.function.DoublePredicate'
     */
    negate(): Promise<DoublePredicate | null>;
    /**
     * @return original return type: 'java.util.function.DoublePredicate'
     */
    negateSync(): DoublePredicate | null;
    /**
     * @param var0 original type: 'java.util.function.DoublePredicate'
     * @return original return type: 'java.util.function.DoublePredicate'
     */
    and(var0: DoublePredicateClass | JavaInterfaceProxy<DoublePredicateInterface> | null): Promise<DoublePredicate | null>;
    /**
     * @param var0 original type: 'java.util.function.DoublePredicate'
     * @return original return type: 'java.util.function.DoublePredicate'
     */
    andSync(var0: DoublePredicateClass | JavaInterfaceProxy<DoublePredicateInterface> | null): DoublePredicate | null;
}
/**
 * This interface just defines types for creating proxies,
 * you should use {@link createDoublePredicateProxy} for actually creating the proxies.
 *
 * Optional methods in here may still be required by java.
 * This is caused by typescript not allowing to have both optional and
 * non-optional signatures for the same interface member.
 *
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export interface DoublePredicateInterface {
    /**
     * @param var0 original type: 'double'
     * @return original return type: 'boolean'
     */
    test(var0: java_lang_Double | number): boolean;
    /**
     * @param var0 original type: 'java.util.function.DoublePredicate'
     * @return original return type: 'java.util.function.DoublePredicate'
     */
    or?(var0: DoublePredicateClass | JavaInterfaceProxy<DoublePredicateInterface> | null): DoublePredicate | null;
    /**
     * @return original return type: 'java.util.function.DoublePredicate'
     */
    negate?(): DoublePredicate | null;
    /**
     * @param var0 original type: 'java.util.function.DoublePredicate'
     * @return original return type: 'java.util.function.DoublePredicate'
     */
    and?(var0: DoublePredicateClass | JavaInterfaceProxy<DoublePredicateInterface> | null): DoublePredicate | null;
}
/**
 * Create a proxy for the {@link DoublePredicate} interface.
 * All required methods in {@link DoublePredicateInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
export declare function createDoublePredicateProxy(methods: DoublePredicateInterface, opts?: InterfaceProxyOptions): JavaInterfaceProxy<DoublePredicateInterface>;
declare const DoublePredicate_base: typeof DoublePredicateClass;
/**
 * Class java.util.function.DoublePredicate.
 *
 * This actually imports the java class for further use.
 * The class {@link DoublePredicateClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class DoublePredicate extends DoublePredicate_base {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    private constructor();
}
export default DoublePredicate;
//# sourceMappingURL=DoublePredicate.d.ts.map