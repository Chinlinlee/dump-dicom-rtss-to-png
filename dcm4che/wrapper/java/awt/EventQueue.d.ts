import { JavaClass, BasicOrJavaType, JavaInterfaceProxy } from "java-bridge";
import { AWTEvent as java_awt_AWTEvent } from "./AWTEvent";
import { Runnable as java_lang_Runnable, RunnableInterface as java_lang_RunnableInterface } from "./../lang/Runnable";
import { Integer as java_lang_Integer } from "./../lang/Integer";
import { SecondaryLoop as java_awt_SecondaryLoop } from "./SecondaryLoop";
import { Long as java_lang_Long } from "./../lang/Long";
import { Class as java_lang_Class } from "./../lang/Class";
/**
 * This class just defines types, you should import {@link EventQueue} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class EventQueueClass extends JavaClass {
    /**
     * @param var0 original type: 'java.awt.EventQueue'
     * @return original return type: 'void'
     */
    push(var0: EventQueueClass | null): Promise<void>;
    /**
     * @param var0 original type: 'java.awt.EventQueue'
     * @return original return type: 'void'
     */
    pushSync(var0: EventQueueClass | null): void;
    /**
     * @param var0 original type: 'java.awt.AWTEvent'
     * @return original return type: 'void'
     */
    postEvent(var0: java_awt_AWTEvent | null): Promise<void>;
    /**
     * @param var0 original type: 'java.awt.AWTEvent'
     * @return original return type: 'void'
     */
    postEventSync(var0: java_awt_AWTEvent | null): void;
    /**
     * @return original return type: 'boolean'
     */
    static isDispatchThread(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    static isDispatchThreadSync(): boolean;
    /**
     * @param var0 original type: 'java.lang.Runnable'
     * @return original return type: 'void'
     */
    static invokeAndWait(var0: java_lang_Runnable | JavaInterfaceProxy<java_lang_RunnableInterface> | null): Promise<void>;
    /**
     * @param var0 original type: 'java.lang.Runnable'
     * @return original return type: 'void'
     */
    static invokeAndWaitSync(var0: java_lang_Runnable | JavaInterfaceProxy<java_lang_RunnableInterface> | null): void;
    /**
     * @param var0 original type: 'java.lang.Runnable'
     * @return original return type: 'void'
     */
    static invokeLater(var0: java_lang_Runnable | JavaInterfaceProxy<java_lang_RunnableInterface> | null): Promise<void>;
    /**
     * @param var0 original type: 'java.lang.Runnable'
     * @return original return type: 'void'
     */
    static invokeLaterSync(var0: java_lang_Runnable | JavaInterfaceProxy<java_lang_RunnableInterface> | null): void;
    /**
     * @return original return type: 'java.awt.AWTEvent'
     */
    static getCurrentEvent(): Promise<java_awt_AWTEvent | null>;
    /**
     * @return original return type: 'java.awt.AWTEvent'
     */
    static getCurrentEventSync(): java_awt_AWTEvent | null;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'java.awt.AWTEvent'
     */
    peekEvent(var0: java_lang_Integer | number): Promise<java_awt_AWTEvent | null>;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'java.awt.AWTEvent'
     */
    peekEventSync(var0: java_lang_Integer | number): java_awt_AWTEvent | null;
    /**
     * @return original return type: 'java.awt.AWTEvent'
     */
    peekEvent(): Promise<java_awt_AWTEvent | null>;
    /**
     * @return original return type: 'java.awt.AWTEvent'
     */
    peekEventSync(): java_awt_AWTEvent | null;
    /**
     * @return original return type: 'java.awt.SecondaryLoop'
     */
    createSecondaryLoop(): Promise<java_awt_SecondaryLoop | null>;
    /**
     * @return original return type: 'java.awt.SecondaryLoop'
     */
    createSecondaryLoopSync(): java_awt_SecondaryLoop | null;
    /**
     * @return original return type: 'java.awt.AWTEvent'
     */
    getNextEvent(): Promise<java_awt_AWTEvent | null>;
    /**
     * @return original return type: 'java.awt.AWTEvent'
     */
    getNextEventSync(): java_awt_AWTEvent | null;
    /**
     * @return original return type: 'long'
     */
    static getMostRecentEventTime(): Promise<number>;
    /**
     * @return original return type: 'long'
     */
    static getMostRecentEventTimeSync(): number;
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
    /**
     * @return original return type: 'java.awt.EventQueue'
     */
    static newInstance(): Promise<EventQueue>;
    constructor();
}
declare const EventQueue_base: typeof EventQueueClass;
/**
 * Class java.awt.EventQueue.
 *
 * This actually imports the java class for further use.
 * The class {@link EventQueueClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class EventQueue extends EventQueue_base {
}
export default EventQueue;
//# sourceMappingURL=EventQueue.d.ts.map