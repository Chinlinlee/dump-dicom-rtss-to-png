import { JavaClass, BasicOrJavaType, JavaInterfaceProxy } from "java-bridge";
import { Class as java_lang_Class } from "./Class";
import { Integer as java_lang_Integer } from "./Integer";
import { MethodHandles$Lookup as java_lang_invoke_MethodHandles$Lookup } from "./invoke/MethodHandles$Lookup";
import { Optional as java_util_Optional } from "./../util/Optional";
import { CharSequence as java_lang_CharSequence, CharSequenceInterface as java_lang_CharSequenceInterface } from "./CharSequence";
/**
 * This class just defines types, you should import {@link Long} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class LongClass extends JavaClass {
    /**
     * Original type: 'long'
     */
    static readonly MIN_VALUE: LongClass | bigint | number;
    /**
     * Original type: 'long'
     */
    static readonly MAX_VALUE: LongClass | bigint | number;
    /**
     * Original type: 'java.lang.Class'
     */
    static readonly TYPE: java_lang_Class | null;
    /**
     * Original type: 'int'
     */
    static readonly SIZE: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly BYTES: java_lang_Integer | number;
    /**
     * @param var0 original type: 'long'
     * @return original return type: 'int'
     */
    static numberOfLeadingZeros(var0: LongClass | bigint | number): Promise<number>;
    /**
     * @param var0 original type: 'long'
     * @return original return type: 'int'
     */
    static numberOfLeadingZerosSync(var0: LongClass | bigint | number): number;
    /**
     * @param var0 original type: 'long'
     * @return original return type: 'int'
     */
    static numberOfTrailingZeros(var0: LongClass | bigint | number): Promise<number>;
    /**
     * @param var0 original type: 'long'
     * @return original return type: 'int'
     */
    static numberOfTrailingZerosSync(var0: LongClass | bigint | number): number;
    /**
     * @param var0 original type: 'long'
     * @return original return type: 'int'
     */
    static bitCount(var0: LongClass | bigint | number): Promise<number>;
    /**
     * @param var0 original type: 'long'
     * @return original return type: 'int'
     */
    static bitCountSync(var0: LongClass | bigint | number): number;
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
     * @param var0 original type: 'long'
     * @return original return type: 'java.lang.String'
     */
    static toString(var0: LongClass | bigint | number): Promise<string>;
    /**
     * @param var0 original type: 'long'
     * @return original return type: 'java.lang.String'
     */
    static toStringSync(var0: LongClass | bigint | number): string;
    /**
     * @param var0 original type: 'long'
     * @param var1 original type: 'int'
     * @return original return type: 'java.lang.String'
     */
    static toString(var0: LongClass | bigint | number, var1: java_lang_Integer | number): Promise<string>;
    /**
     * @param var0 original type: 'long'
     * @param var1 original type: 'int'
     * @return original return type: 'java.lang.String'
     */
    static toStringSync(var0: LongClass | bigint | number, var1: java_lang_Integer | number): string;
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
     * @param var0 original type: 'long'
     * @return original return type: 'int'
     */
    static hashCode(var0: LongClass | bigint | number): Promise<number>;
    /**
     * @param var0 original type: 'long'
     * @return original return type: 'int'
     */
    static hashCodeSync(var0: LongClass | bigint | number): number;
    /**
     * @param var0 original type: 'long'
     * @param var1 original type: 'long'
     * @return original return type: 'long'
     */
    static min(var0: LongClass | bigint | number, var1: LongClass | bigint | number): Promise<number>;
    /**
     * @param var0 original type: 'long'
     * @param var1 original type: 'long'
     * @return original return type: 'long'
     */
    static minSync(var0: LongClass | bigint | number, var1: LongClass | bigint | number): number;
    /**
     * @param var0 original type: 'long'
     * @param var1 original type: 'long'
     * @return original return type: 'long'
     */
    static max(var0: LongClass | bigint | number, var1: LongClass | bigint | number): Promise<number>;
    /**
     * @param var0 original type: 'long'
     * @param var1 original type: 'long'
     * @return original return type: 'long'
     */
    static maxSync(var0: LongClass | bigint | number, var1: LongClass | bigint | number): number;
    /**
     * @param var0 original type: 'long'
     * @return original return type: 'int'
     */
    static signum(var0: LongClass | bigint | number): Promise<number>;
    /**
     * @param var0 original type: 'long'
     * @return original return type: 'int'
     */
    static signumSync(var0: LongClass | bigint | number): number;
    /**
     * @param var0 original type: 'long'
     * @return original return type: 'long'
     */
    static reverseBytes(var0: LongClass | bigint | number): Promise<number>;
    /**
     * @param var0 original type: 'long'
     * @return original return type: 'long'
     */
    static reverseBytesSync(var0: LongClass | bigint | number): number;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @return original return type: 'int'
     */
    compareTo(var0: BasicOrJavaType | null): Promise<number>;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @return original return type: 'int'
     */
    compareToSync(var0: BasicOrJavaType | null): number;
    /**
     * @param var0 original type: 'java.lang.Long'
     * @return original return type: 'int'
     */
    compareTo(var0: LongClass | bigint | number | null): Promise<number>;
    /**
     * @param var0 original type: 'java.lang.Long'
     * @return original return type: 'int'
     */
    compareToSync(var0: LongClass | bigint | number | null): number;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'long'
     * @return original return type: 'java.lang.Long'
     */
    static getLong(var0: string | null, var1: LongClass | bigint | number): Promise<number | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'long'
     * @return original return type: 'java.lang.Long'
     */
    static getLongSync(var0: string | null, var1: LongClass | bigint | number): number | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.lang.Long'
     */
    static getLong(var0: string | null): Promise<number | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.lang.Long'
     */
    static getLongSync(var0: string | null): number | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.Long'
     * @return original return type: 'java.lang.Long'
     */
    static getLong(var0: string | null, var1: LongClass | bigint | number | null): Promise<number | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.Long'
     * @return original return type: 'java.lang.Long'
     */
    static getLongSync(var0: string | null, var1: LongClass | bigint | number | null): number | null;
    /**
     * @param var0 original type: 'long'
     * @param var1 original type: 'long'
     * @return original return type: 'int'
     */
    static compare(var0: LongClass | bigint | number, var1: LongClass | bigint | number): Promise<number>;
    /**
     * @param var0 original type: 'long'
     * @param var1 original type: 'long'
     * @return original return type: 'int'
     */
    static compareSync(var0: LongClass | bigint | number, var1: LongClass | bigint | number): number;
    /**
     * @return original return type: 'byte'
     */
    byteValue(): Promise<number>;
    /**
     * @return original return type: 'byte'
     */
    byteValueSync(): number;
    /**
     * @return original return type: 'short'
     */
    shortValue(): Promise<number>;
    /**
     * @return original return type: 'short'
     */
    shortValueSync(): number;
    /**
     * @return original return type: 'int'
     */
    intValue(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    intValueSync(): number;
    /**
     * @return original return type: 'long'
     */
    longValue(): Promise<number>;
    /**
     * @return original return type: 'long'
     */
    longValueSync(): number;
    /**
     * @return original return type: 'float'
     */
    floatValue(): Promise<number>;
    /**
     * @return original return type: 'float'
     */
    floatValueSync(): number;
    /**
     * @return original return type: 'double'
     */
    doubleValue(): Promise<number>;
    /**
     * @return original return type: 'double'
     */
    doubleValueSync(): number;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'int'
     * @return original return type: 'java.lang.Long'
     */
    static valueOf(var0: string | null, var1: java_lang_Integer | number): Promise<number | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'int'
     * @return original return type: 'java.lang.Long'
     */
    static valueOfSync(var0: string | null, var1: java_lang_Integer | number): number | null;
    /**
     * @param var0 original type: 'long'
     * @return original return type: 'java.lang.Long'
     */
    static valueOf(var0: LongClass | bigint | number): Promise<number | null>;
    /**
     * @param var0 original type: 'long'
     * @return original return type: 'java.lang.Long'
     */
    static valueOfSync(var0: LongClass | bigint | number): number | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.lang.Long'
     */
    static valueOf(var0: string | null): Promise<number | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.lang.Long'
     */
    static valueOfSync(var0: string | null): number | null;
    /**
     * @param var0 original type: 'long'
     * @return original return type: 'java.lang.String'
     */
    static toHexString(var0: LongClass | bigint | number): Promise<string | null>;
    /**
     * @param var0 original type: 'long'
     * @return original return type: 'java.lang.String'
     */
    static toHexStringSync(var0: LongClass | bigint | number): string | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.lang.Long'
     */
    static decode(var0: string | null): Promise<number | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.lang.Long'
     */
    static decodeSync(var0: string | null): number | null;
    /**
     * @param var0 original type: 'java.lang.invoke.MethodHandles$Lookup'
     * @return original return type: 'java.lang.Object'
     */
    resolveConstantDesc(var0: java_lang_invoke_MethodHandles$Lookup | null): Promise<BasicOrJavaType | null>;
    /**
     * @param var0 original type: 'java.lang.invoke.MethodHandles$Lookup'
     * @return original return type: 'java.lang.Object'
     */
    resolveConstantDescSync(var0: java_lang_invoke_MethodHandles$Lookup | null): BasicOrJavaType | null;
    /**
     * @param var0 original type: 'java.lang.invoke.MethodHandles$Lookup'
     * @return original return type: 'java.lang.Long'
     */
    resolveConstantDesc(var0: java_lang_invoke_MethodHandles$Lookup | null): Promise<number | null>;
    /**
     * @param var0 original type: 'java.lang.invoke.MethodHandles$Lookup'
     * @return original return type: 'java.lang.Long'
     */
    resolveConstantDescSync(var0: java_lang_invoke_MethodHandles$Lookup | null): number | null;
    /**
     * @return original return type: 'java.util.Optional'
     */
    describeConstable(): Promise<java_util_Optional | null>;
    /**
     * @return original return type: 'java.util.Optional'
     */
    describeConstableSync(): java_util_Optional | null;
    /**
     * @param var0 original type: 'long'
     * @return original return type: 'long'
     */
    static reverse(var0: LongClass | bigint | number): Promise<number>;
    /**
     * @param var0 original type: 'long'
     * @return original return type: 'long'
     */
    static reverseSync(var0: LongClass | bigint | number): number;
    /**
     * @param var0 original type: 'long'
     * @param var1 original type: 'long'
     * @return original return type: 'long'
     */
    static sum(var0: LongClass | bigint | number, var1: LongClass | bigint | number): Promise<number>;
    /**
     * @param var0 original type: 'long'
     * @param var1 original type: 'long'
     * @return original return type: 'long'
     */
    static sumSync(var0: LongClass | bigint | number, var1: LongClass | bigint | number): number;
    /**
     * @param var0 original type: 'long'
     * @param var1 original type: 'long'
     * @return original return type: 'int'
     */
    static compareUnsigned(var0: LongClass | bigint | number, var1: LongClass | bigint | number): Promise<number>;
    /**
     * @param var0 original type: 'long'
     * @param var1 original type: 'long'
     * @return original return type: 'int'
     */
    static compareUnsignedSync(var0: LongClass | bigint | number, var1: LongClass | bigint | number): number;
    /**
     * @param var0 original type: 'long'
     * @param var1 original type: 'int'
     * @return original return type: 'java.lang.String'
     */
    static toUnsignedString(var0: LongClass | bigint | number, var1: java_lang_Integer | number): Promise<string | null>;
    /**
     * @param var0 original type: 'long'
     * @param var1 original type: 'int'
     * @return original return type: 'java.lang.String'
     */
    static toUnsignedStringSync(var0: LongClass | bigint | number, var1: java_lang_Integer | number): string | null;
    /**
     * @param var0 original type: 'long'
     * @return original return type: 'java.lang.String'
     */
    static toUnsignedString(var0: LongClass | bigint | number): Promise<string | null>;
    /**
     * @param var0 original type: 'long'
     * @return original return type: 'java.lang.String'
     */
    static toUnsignedStringSync(var0: LongClass | bigint | number): string | null;
    /**
     * @param var0 original type: 'java.lang.CharSequence'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @param var3 original type: 'int'
     * @return original return type: 'long'
     */
    static parseLong(var0: java_lang_CharSequence | JavaInterfaceProxy<java_lang_CharSequenceInterface> | null, var1: java_lang_Integer | number, var2: java_lang_Integer | number, var3: java_lang_Integer | number): Promise<number>;
    /**
     * @param var0 original type: 'java.lang.CharSequence'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @param var3 original type: 'int'
     * @return original return type: 'long'
     */
    static parseLongSync(var0: java_lang_CharSequence | JavaInterfaceProxy<java_lang_CharSequenceInterface> | null, var1: java_lang_Integer | number, var2: java_lang_Integer | number, var3: java_lang_Integer | number): number;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'int'
     * @return original return type: 'long'
     */
    static parseLong(var0: string | null, var1: java_lang_Integer | number): Promise<number>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'int'
     * @return original return type: 'long'
     */
    static parseLongSync(var0: string | null, var1: java_lang_Integer | number): number;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'long'
     */
    static parseLong(var0: string | null): Promise<number>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'long'
     */
    static parseLongSync(var0: string | null): number;
    /**
     * @param var0 original type: 'long'
     * @return original return type: 'java.lang.String'
     */
    static toOctalString(var0: LongClass | bigint | number): Promise<string | null>;
    /**
     * @param var0 original type: 'long'
     * @return original return type: 'java.lang.String'
     */
    static toOctalStringSync(var0: LongClass | bigint | number): string | null;
    /**
     * @param var0 original type: 'long'
     * @return original return type: 'java.lang.String'
     */
    static toBinaryString(var0: LongClass | bigint | number): Promise<string | null>;
    /**
     * @param var0 original type: 'long'
     * @return original return type: 'java.lang.String'
     */
    static toBinaryStringSync(var0: LongClass | bigint | number): string | null;
    /**
     * @param var0 original type: 'long'
     * @param var1 original type: 'long'
     * @return original return type: 'long'
     */
    static divideUnsigned(var0: LongClass | bigint | number, var1: LongClass | bigint | number): Promise<number>;
    /**
     * @param var0 original type: 'long'
     * @param var1 original type: 'long'
     * @return original return type: 'long'
     */
    static divideUnsignedSync(var0: LongClass | bigint | number, var1: LongClass | bigint | number): number;
    /**
     * @param var0 original type: 'long'
     * @param var1 original type: 'long'
     * @return original return type: 'long'
     */
    static remainderUnsigned(var0: LongClass | bigint | number, var1: LongClass | bigint | number): Promise<number>;
    /**
     * @param var0 original type: 'long'
     * @param var1 original type: 'long'
     * @return original return type: 'long'
     */
    static remainderUnsignedSync(var0: LongClass | bigint | number, var1: LongClass | bigint | number): number;
    /**
     * @param var0 original type: 'long'
     * @return original return type: 'long'
     */
    static highestOneBit(var0: LongClass | bigint | number): Promise<number>;
    /**
     * @param var0 original type: 'long'
     * @return original return type: 'long'
     */
    static highestOneBitSync(var0: LongClass | bigint | number): number;
    /**
     * @param var0 original type: 'long'
     * @return original return type: 'long'
     */
    static lowestOneBit(var0: LongClass | bigint | number): Promise<number>;
    /**
     * @param var0 original type: 'long'
     * @return original return type: 'long'
     */
    static lowestOneBitSync(var0: LongClass | bigint | number): number;
    /**
     * @param var0 original type: 'long'
     * @param var1 original type: 'int'
     * @return original return type: 'long'
     */
    static rotateLeft(var0: LongClass | bigint | number, var1: java_lang_Integer | number): Promise<number>;
    /**
     * @param var0 original type: 'long'
     * @param var1 original type: 'int'
     * @return original return type: 'long'
     */
    static rotateLeftSync(var0: LongClass | bigint | number, var1: java_lang_Integer | number): number;
    /**
     * @param var0 original type: 'long'
     * @param var1 original type: 'int'
     * @return original return type: 'long'
     */
    static rotateRight(var0: LongClass | bigint | number, var1: java_lang_Integer | number): Promise<number>;
    /**
     * @param var0 original type: 'long'
     * @param var1 original type: 'int'
     * @return original return type: 'long'
     */
    static rotateRightSync(var0: LongClass | bigint | number, var1: java_lang_Integer | number): number;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'int'
     * @return original return type: 'long'
     */
    static parseUnsignedLong(var0: string | null, var1: java_lang_Integer | number): Promise<number>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'int'
     * @return original return type: 'long'
     */
    static parseUnsignedLongSync(var0: string | null, var1: java_lang_Integer | number): number;
    /**
     * @param var0 original type: 'java.lang.CharSequence'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @param var3 original type: 'int'
     * @return original return type: 'long'
     */
    static parseUnsignedLong(var0: java_lang_CharSequence | JavaInterfaceProxy<java_lang_CharSequenceInterface> | null, var1: java_lang_Integer | number, var2: java_lang_Integer | number, var3: java_lang_Integer | number): Promise<number>;
    /**
     * @param var0 original type: 'java.lang.CharSequence'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @param var3 original type: 'int'
     * @return original return type: 'long'
     */
    static parseUnsignedLongSync(var0: java_lang_CharSequence | JavaInterfaceProxy<java_lang_CharSequenceInterface> | null, var1: java_lang_Integer | number, var2: java_lang_Integer | number, var3: java_lang_Integer | number): number;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'long'
     */
    static parseUnsignedLong(var0: string | null): Promise<number>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'long'
     */
    static parseUnsignedLongSync(var0: string | null): number;
    /**
     * @param var0 original type: 'long'
     * @param var1 original type: 'int'
     * @return original return type: 'void'
     */
    wait(var0: LongClass | bigint | number, var1: java_lang_Integer | number): Promise<void>;
    /**
     * @param var0 original type: 'long'
     * @param var1 original type: 'int'
     * @return original return type: 'void'
     */
    waitSync(var0: LongClass | bigint | number, var1: java_lang_Integer | number): void;
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
    wait(var0: LongClass | bigint | number): Promise<void>;
    /**
     * @param var0 original type: 'long'
     * @return original return type: 'void'
     */
    waitSync(var0: LongClass | bigint | number): void;
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
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.lang.Long'
     */
    static newInstance(var0: string | null): Promise<number>;
    /**
     * @param var0 original type: 'long'
     * @return original return type: 'java.lang.Long'
     */
    static newInstance(var0: LongClass | bigint | number): Promise<number>;
    /**
     * @param var0 original type: 'java.lang.String'
     */
    constructor(var0: string | null);
    /**
     * @param var0 original type: 'long'
     */
    constructor(var0: LongClass | bigint | number);
}
declare const Long_base: typeof LongClass;
/**
 * Class java.lang.Long.
 *
 * This actually imports the java class for further use.
 * The class {@link LongClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class Long extends Long_base {
}
export default Long;
//# sourceMappingURL=Long.d.ts.map