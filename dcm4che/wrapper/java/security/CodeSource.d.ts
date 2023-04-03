import { JavaClass, BasicOrJavaType } from "java-bridge";
import { URL as java_net_URL } from "./../net/URL";
import { Certificate as java_security_cert_Certificate } from "./cert/Certificate";
import { CodeSigner as java_security_CodeSigner } from "./CodeSigner";
import { Long as java_lang_Long } from "./../lang/Long";
import { Integer as java_lang_Integer } from "./../lang/Integer";
import { Class as java_lang_Class } from "./../lang/Class";
/**
 * This class just defines types, you should import {@link CodeSource} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class CodeSourceClass extends JavaClass {
    /**
     * @param var0 original type: 'java.lang.Object'
     * @return original return type: 'boolean'
     */
    equals(var0: BasicOrJavaType | null): Promise<boolean>;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @return original return type: 'boolean'
     */
    equalsSync(var0: BasicOrJavaType | null): boolean;
    /**
     * @return original return type: 'java.lang.String'
     */
    toString(): Promise<string>;
    /**
     * @return original return type: 'java.lang.String'
     */
    toStringSync(): string;
    /**
     * @return original return type: 'int'
     */
    hashCode(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    hashCodeSync(): number;
    /**
     * @return original return type: 'java.net.URL'
     */
    getLocation(): Promise<java_net_URL | null>;
    /**
     * @return original return type: 'java.net.URL'
     */
    getLocationSync(): java_net_URL | null;
    /**
     * @return original return type: 'java.security.cert.Certificate[]'
     */
    getCertificates(): Promise<(java_security_cert_Certificate | null)[] | null>;
    /**
     * @return original return type: 'java.security.cert.Certificate[]'
     */
    getCertificatesSync(): (java_security_cert_Certificate | null)[] | null;
    /**
     * @param var0 original type: 'java.security.CodeSource'
     * @return original return type: 'boolean'
     */
    implies(var0: CodeSourceClass | null): Promise<boolean>;
    /**
     * @param var0 original type: 'java.security.CodeSource'
     * @return original return type: 'boolean'
     */
    impliesSync(var0: CodeSourceClass | null): boolean;
    /**
     * @return original return type: 'java.security.CodeSigner[]'
     */
    getCodeSigners(): Promise<(java_security_CodeSigner | null)[] | null>;
    /**
     * @return original return type: 'java.security.CodeSigner[]'
     */
    getCodeSignersSync(): (java_security_CodeSigner | null)[] | null;
    /**
     * @param var0 original type: 'long'
     * @param var1 original type: 'int'
     * @return original return type: 'void'
     */
    wait(var0: java_lang_Long | bigint | number, var1: java_lang_Integer | number): Promise<void>;
    /**
     * @param var0 original type: 'long'
     * @param var1 original type: 'int'
     * @return original return type: 'void'
     */
    waitSync(var0: java_lang_Long | bigint | number, var1: java_lang_Integer | number): void;
    /**
     * @return original return type: 'void'
     */
    wait(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    waitSync(): void;
    /**
     * @param var0 original type: 'long'
     * @return original return type: 'void'
     */
    wait(var0: java_lang_Long | bigint | number): Promise<void>;
    /**
     * @param var0 original type: 'long'
     * @return original return type: 'void'
     */
    waitSync(var0: java_lang_Long | bigint | number): void;
    /**
     * @return original return type: 'java.lang.Class'
     */
    getClass(): Promise<java_lang_Class>;
    /**
     * @return original return type: 'java.lang.Class'
     */
    getClassSync(): java_lang_Class;
    /**
     * @return original return type: 'void'
     */
    notify(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    notifySync(): void;
    /**
     * @return original return type: 'void'
     */
    notifyAll(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    notifyAllSync(): void;
    /**
     * @param var0 original type: 'java.net.URL'
     * @param var1 original type: 'java.security.cert.Certificate[]'
     * @return original return type: 'java.security.CodeSource'
     */
    static newInstance(var0: java_net_URL | null, var1: (java_security_cert_Certificate | null)[] | null): Promise<CodeSource>;
    /**
     * @param var0 original type: 'java.net.URL'
     * @param var1 original type: 'java.security.CodeSigner[]'
     * @return original return type: 'java.security.CodeSource'
     */
    static newInstance(var0: java_net_URL | null, var1: (java_security_CodeSigner | null)[] | null): Promise<CodeSource>;
    /**
     * @param var0 original type: 'java.net.URL'
     * @param var1 original type: 'java.security.cert.Certificate[]'
     */
    constructor(var0: java_net_URL | null, var1: (java_security_cert_Certificate | null)[] | null);
    /**
     * @param var0 original type: 'java.net.URL'
     * @param var1 original type: 'java.security.CodeSigner[]'
     */
    constructor(var0: java_net_URL | null, var1: (java_security_CodeSigner | null)[] | null);
}
declare const CodeSource_base: typeof CodeSourceClass;
/**
 * Class java.security.CodeSource.
 *
 * This actually imports the java class for further use.
 * The class {@link CodeSourceClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class CodeSource extends CodeSource_base {
}
export default CodeSource;
//# sourceMappingURL=CodeSource.d.ts.map