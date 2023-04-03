import { JavaClass, BasicOrJavaType } from "java-bridge";
import { Enum as java_lang_Enum } from "./../lang/Enum";
import { Class as java_lang_Class } from "./../lang/Class";
import { Optional as java_util_Optional } from "./Optional";
import { Long as java_lang_Long } from "./../lang/Long";
import { Integer as java_lang_Integer } from "./../lang/Integer";
/**
 * This class just defines types, you should import {@link Locale$FilteringMode} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class Locale$FilteringModeClass extends JavaClass {
    /**
     * Original type: 'java.util.Locale$FilteringMode'
     */
    static readonly AUTOSELECT_FILTERING: Locale$FilteringModeClass | null;
    /**
     * Original type: 'java.util.Locale$FilteringMode'
     */
    static readonly EXTENDED_FILTERING: Locale$FilteringModeClass | null;
    /**
     * Original type: 'java.util.Locale$FilteringMode'
     */
    static readonly IGNORE_EXTENDED_RANGES: Locale$FilteringModeClass | null;
    /**
     * Original type: 'java.util.Locale$FilteringMode'
     */
    static readonly MAP_EXTENDED_RANGES: Locale$FilteringModeClass | null;
    /**
     * Original type: 'java.util.Locale$FilteringMode'
     */
    static readonly REJECT_EXTENDED_RANGES: Locale$FilteringModeClass | null;
    /**
     * @return original return type: 'java.util.Locale$FilteringMode[]'
     */
    static values(): Promise<(Locale$FilteringMode | null)[] | null>;
    /**
     * @return original return type: 'java.util.Locale$FilteringMode[]'
     */
    static valuesSync(): (Locale$FilteringMode | null)[] | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.util.Locale$FilteringMode'
     */
    static valueOf(var0: string | null): Promise<Locale$FilteringMode | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.util.Locale$FilteringMode'
     */
    static valueOfSync(var0: string | null): Locale$FilteringMode | null;
    /**
     * @param var0 original type: 'java.lang.Class'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'java.lang.Enum'
     */
    static valueOf(var0: java_lang_Class | null, var1: string | null): Promise<java_lang_Enum | null>;
    /**
     * @param var0 original type: 'java.lang.Class'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'java.lang.Enum'
     */
    static valueOfSync(var0: java_lang_Class | null, var1: string | null): java_lang_Enum | null;
    /**
     * @return original return type: 'java.lang.String'
     */
    name(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    nameSync(): string | null;
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
     * @param var0 original type: 'java.lang.Enum'
     * @return original return type: 'int'
     */
    compareTo(var0: java_lang_Enum | null): Promise<number>;
    /**
     * @param var0 original type: 'java.lang.Enum'
     * @return original return type: 'int'
     */
    compareToSync(var0: java_lang_Enum | null): number;
    /**
     * @return original return type: 'java.util.Optional'
     */
    describeConstable(): Promise<java_util_Optional | null>;
    /**
     * @return original return type: 'java.util.Optional'
     */
    describeConstableSync(): java_util_Optional | null;
    /**
     * @return original return type: 'java.lang.Class'
     */
    getDeclaringClass(): Promise<java_lang_Class | null>;
    /**
     * @return original return type: 'java.lang.Class'
     */
    getDeclaringClassSync(): java_lang_Class | null;
    /**
     * @return original return type: 'int'
     */
    ordinal(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    ordinalSync(): number;
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
}
declare const Locale$FilteringMode_base: typeof Locale$FilteringModeClass;
/**
 * Class java.util.Locale$FilteringMode.
 *
 * This actually imports the java class for further use.
 * The class {@link Locale$FilteringModeClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class Locale$FilteringMode extends Locale$FilteringMode_base {
}
export default Locale$FilteringMode;
//# sourceMappingURL=Locale$FilteringMode.d.ts.map