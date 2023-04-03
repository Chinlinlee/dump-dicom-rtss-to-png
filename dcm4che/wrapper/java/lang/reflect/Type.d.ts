import { JavaClass, InterfaceProxyOptions, JavaInterfaceProxy } from "java-bridge";
/**
 * This class just defines types, you should import {@link Type} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class TypeClass extends JavaClass {
    /**
     * @return original return type: 'java.lang.String'
     */
    getTypeName(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getTypeNameSync(): string | null;
}
/**
 * This interface just defines types for creating proxies,
 * you should use {@link createTypeProxy} for actually creating the proxies.
 *
 * Optional methods in here may still be required by java.
 * This is caused by typescript not allowing to have both optional and
 * non-optional signatures for the same interface member.
 *
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export interface TypeInterface {
    /**
     * @return original return type: 'java.lang.String'
     */
    getTypeName?(): string | null;
}
/**
 * Create a proxy for the {@link Type} interface.
 * All required methods in {@link TypeInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
export declare function createTypeProxy(methods: TypeInterface, opts?: InterfaceProxyOptions): JavaInterfaceProxy<TypeInterface>;
declare const Type_base: typeof TypeClass;
/**
 * Class java.lang.reflect.Type.
 *
 * This actually imports the java class for further use.
 * The class {@link TypeClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class Type extends Type_base {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    private constructor();
}
export default Type;
//# sourceMappingURL=Type.d.ts.map