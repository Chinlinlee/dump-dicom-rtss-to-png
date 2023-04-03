import { JavaClass, BasicOrJavaType } from "java-bridge";
import { ResourceBundle as java_util_ResourceBundle } from "./../util/ResourceBundle";
import { Locale as java_util_Locale } from "./../util/Locale";
import { Long as java_lang_Long } from "./../lang/Long";
import { Integer as java_lang_Integer } from "./../lang/Integer";
import { Class as java_lang_Class } from "./../lang/Class";
/**
 * This class just defines types, you should import {@link ComponentOrientation} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class ComponentOrientationClass extends JavaClass {
    /**
     * Original type: 'java.awt.ComponentOrientation'
     */
    static readonly LEFT_TO_RIGHT: ComponentOrientationClass | null;
    /**
     * Original type: 'java.awt.ComponentOrientation'
     */
    static readonly RIGHT_TO_LEFT: ComponentOrientationClass | null;
    /**
     * Original type: 'java.awt.ComponentOrientation'
     */
    static readonly UNKNOWN: ComponentOrientationClass | null;
    /**
     * @param var0 original type: 'java.util.ResourceBundle'
     * @return original return type: 'java.awt.ComponentOrientation'
     */
    static getOrientation(var0: java_util_ResourceBundle | null): Promise<ComponentOrientation | null>;
    /**
     * @param var0 original type: 'java.util.ResourceBundle'
     * @return original return type: 'java.awt.ComponentOrientation'
     */
    static getOrientationSync(var0: java_util_ResourceBundle | null): ComponentOrientation | null;
    /**
     * @param var0 original type: 'java.util.Locale'
     * @return original return type: 'java.awt.ComponentOrientation'
     */
    static getOrientation(var0: java_util_Locale | null): Promise<ComponentOrientation | null>;
    /**
     * @param var0 original type: 'java.util.Locale'
     * @return original return type: 'java.awt.ComponentOrientation'
     */
    static getOrientationSync(var0: java_util_Locale | null): ComponentOrientation | null;
    /**
     * @return original return type: 'boolean'
     */
    isHorizontal(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isHorizontalSync(): boolean;
    /**
     * @return original return type: 'boolean'
     */
    isLeftToRight(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isLeftToRightSync(): boolean;
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
declare const ComponentOrientation_base: typeof ComponentOrientationClass;
/**
 * Class java.awt.ComponentOrientation.
 *
 * This actually imports the java class for further use.
 * The class {@link ComponentOrientationClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class ComponentOrientation extends ComponentOrientation_base {
}
export default ComponentOrientation;
//# sourceMappingURL=ComponentOrientation.d.ts.map