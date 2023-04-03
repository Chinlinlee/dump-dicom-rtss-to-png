/// <reference types="node" />
import { JavaClass, BasicOrJavaType, InterfaceProxyOptions, JavaInterfaceProxy } from "java-bridge";
import { Integer as java_lang_Integer } from "./../lang/Integer";
import { Float as java_lang_Float } from "./../lang/Float";
import { Boolean as java_lang_Boolean } from "./../lang/Boolean";
import { Long as java_lang_Long } from "./../lang/Long";
import { Double as java_lang_Double } from "./../lang/Double";
/**
 * This class just defines types, you should import {@link ObjectOutput} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class ObjectOutputClass extends JavaClass {
    /**
     * @return original return type: 'void'
     */
    flush(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    flushSync(): void;
    /**
     * @param var0 original type: 'byte[]'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @return original return type: 'void'
     */
    write(var0: Buffer | null, var1: java_lang_Integer | number, var2: java_lang_Integer | number): Promise<void>;
    /**
     * @param var0 original type: 'byte[]'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @return original return type: 'void'
     */
    writeSync(var0: Buffer | null, var1: java_lang_Integer | number, var2: java_lang_Integer | number): void;
    /**
     * @param var0 original type: 'byte[]'
     * @return original return type: 'void'
     */
    write(var0: Buffer | null): Promise<void>;
    /**
     * @param var0 original type: 'byte[]'
     * @return original return type: 'void'
     */
    writeSync(var0: Buffer | null): void;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'void'
     */
    write(var0: java_lang_Integer | number): Promise<void>;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'void'
     */
    writeSync(var0: java_lang_Integer | number): void;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @return original return type: 'void'
     */
    writeObject(var0: BasicOrJavaType | null): Promise<void>;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @return original return type: 'void'
     */
    writeObjectSync(var0: BasicOrJavaType | null): void;
    /**
     * @return original return type: 'void'
     */
    close(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    closeSync(): void;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'void'
     */
    writeInt(var0: java_lang_Integer | number): Promise<void>;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'void'
     */
    writeIntSync(var0: java_lang_Integer | number): void;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    writeUTF(var0: string | null): Promise<void>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    writeUTFSync(var0: string | null): void;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    writeBytes(var0: string | null): Promise<void>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    writeBytesSync(var0: string | null): void;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'void'
     */
    writeChar(var0: java_lang_Integer | number): Promise<void>;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'void'
     */
    writeCharSync(var0: java_lang_Integer | number): void;
    /**
     * @param var0 original type: 'float'
     * @return original return type: 'void'
     */
    writeFloat(var0: java_lang_Float | number): Promise<void>;
    /**
     * @param var0 original type: 'float'
     * @return original return type: 'void'
     */
    writeFloatSync(var0: java_lang_Float | number): void;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'void'
     */
    writeBoolean(var0: java_lang_Boolean | boolean): Promise<void>;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'void'
     */
    writeBooleanSync(var0: java_lang_Boolean | boolean): void;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'void'
     */
    writeByte(var0: java_lang_Integer | number): Promise<void>;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'void'
     */
    writeByteSync(var0: java_lang_Integer | number): void;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'void'
     */
    writeShort(var0: java_lang_Integer | number): Promise<void>;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'void'
     */
    writeShortSync(var0: java_lang_Integer | number): void;
    /**
     * @param var0 original type: 'long'
     * @return original return type: 'void'
     */
    writeLong(var0: java_lang_Long | bigint | number): Promise<void>;
    /**
     * @param var0 original type: 'long'
     * @return original return type: 'void'
     */
    writeLongSync(var0: java_lang_Long | bigint | number): void;
    /**
     * @param var0 original type: 'double'
     * @return original return type: 'void'
     */
    writeDouble(var0: java_lang_Double | number): Promise<void>;
    /**
     * @param var0 original type: 'double'
     * @return original return type: 'void'
     */
    writeDoubleSync(var0: java_lang_Double | number): void;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    writeChars(var0: string | null): Promise<void>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    writeCharsSync(var0: string | null): void;
}
/**
 * This interface just defines types for creating proxies,
 * you should use {@link createObjectOutputProxy} for actually creating the proxies.
 *
 * Optional methods in here may still be required by java.
 * This is caused by typescript not allowing to have both optional and
 * non-optional signatures for the same interface member.
 *
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export interface ObjectOutputInterface {
    /**
     * @return original return type: 'void'
     */
    flush(): void;
    /**
     * @param var0 original type: 'byte[]'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @return original return type: 'void'
     */
    write(var0: Buffer | null, var1: java_lang_Integer | number, var2: java_lang_Integer | number): void;
    /**
     * @param var0 original type: 'byte[]'
     * @return original return type: 'void'
     */
    write(var0: Buffer | null): void;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'void'
     */
    write(var0: java_lang_Integer | number): void;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @return original return type: 'void'
     */
    writeObject(var0: BasicOrJavaType | null): void;
    /**
     * @return original return type: 'void'
     */
    close(): void;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'void'
     */
    writeInt(var0: java_lang_Integer | number): void;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    writeUTF(var0: string | null): void;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    writeBytes(var0: string | null): void;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'void'
     */
    writeChar(var0: java_lang_Integer | number): void;
    /**
     * @param var0 original type: 'float'
     * @return original return type: 'void'
     */
    writeFloat(var0: java_lang_Float | number): void;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'void'
     */
    writeBoolean(var0: java_lang_Boolean | boolean): void;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'void'
     */
    writeByte(var0: java_lang_Integer | number): void;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'void'
     */
    writeShort(var0: java_lang_Integer | number): void;
    /**
     * @param var0 original type: 'long'
     * @return original return type: 'void'
     */
    writeLong(var0: java_lang_Long | bigint | number): void;
    /**
     * @param var0 original type: 'double'
     * @return original return type: 'void'
     */
    writeDouble(var0: java_lang_Double | number): void;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    writeChars(var0: string | null): void;
}
/**
 * Create a proxy for the {@link ObjectOutput} interface.
 * All required methods in {@link ObjectOutputInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
export declare function createObjectOutputProxy(methods: ObjectOutputInterface, opts?: InterfaceProxyOptions): JavaInterfaceProxy<ObjectOutputInterface>;
declare const ObjectOutput_base: typeof ObjectOutputClass;
/**
 * Class java.io.ObjectOutput.
 *
 * This actually imports the java class for further use.
 * The class {@link ObjectOutputClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class ObjectOutput extends ObjectOutput_base {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    private constructor();
}
export default ObjectOutput;
//# sourceMappingURL=ObjectOutput.d.ts.map