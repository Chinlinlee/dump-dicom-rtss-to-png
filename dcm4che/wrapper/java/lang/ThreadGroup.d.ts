import { JavaClass, BasicOrJavaType } from "java-bridge";
import { Boolean as java_lang_Boolean } from "./Boolean";
import { Thread as java_lang_Thread } from "./Thread";
import { Throwable as java_lang_Throwable } from "./Throwable";
import { Integer as java_lang_Integer } from "./Integer";
import { Long as java_lang_Long } from "./Long";
import { Class as java_lang_Class } from "./Class";
/**
 * This class just defines types, you should import {@link ThreadGroup} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class ThreadGroupClass extends JavaClass {
    /**
     * @return original return type: 'java.lang.String'
     */
    getName(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getNameSync(): string | null;
    /**
     * @return original return type: 'java.lang.String'
     */
    toString(): Promise<string>;
    /**
     * @return original return type: 'java.lang.String'
     */
    toStringSync(): string;
    /**
     * @return original return type: 'void'
     */
    list(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    listSync(): void;
    /**
     * @return original return type: 'java.lang.ThreadGroup'
     */
    getParent(): Promise<ThreadGroup | null>;
    /**
     * @return original return type: 'java.lang.ThreadGroup'
     */
    getParentSync(): ThreadGroup | null;
    /**
     * @return original return type: 'void'
     */
    checkAccess(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    checkAccessSync(): void;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'void'
     */
    setDaemon(var0: java_lang_Boolean | boolean): Promise<void>;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'void'
     */
    setDaemonSync(var0: java_lang_Boolean | boolean): void;
    /**
     * @return original return type: 'boolean'
     */
    isDaemon(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isDaemonSync(): boolean;
    /**
     * @return original return type: 'void'
     */
    resume(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    resumeSync(): void;
    /**
     * @return original return type: 'void'
     */
    interrupt(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    interruptSync(): void;
    /**
     * @return original return type: 'int'
     */
    getMaxPriority(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    getMaxPrioritySync(): number;
    /**
     * @return original return type: 'int'
     */
    activeCount(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    activeCountSync(): number;
    /**
     * @param var0 original type: 'java.lang.ThreadGroup[]'
     * @param var1 original type: 'boolean'
     * @return original return type: 'int'
     */
    enumerate(var0: (ThreadGroupClass | null)[] | null, var1: java_lang_Boolean | boolean): Promise<number>;
    /**
     * @param var0 original type: 'java.lang.ThreadGroup[]'
     * @param var1 original type: 'boolean'
     * @return original return type: 'int'
     */
    enumerateSync(var0: (ThreadGroupClass | null)[] | null, var1: java_lang_Boolean | boolean): number;
    /**
     * @param var0 original type: 'java.lang.ThreadGroup[]'
     * @return original return type: 'int'
     */
    enumerate(var0: (ThreadGroupClass | null)[] | null): Promise<number>;
    /**
     * @param var0 original type: 'java.lang.ThreadGroup[]'
     * @return original return type: 'int'
     */
    enumerateSync(var0: (ThreadGroupClass | null)[] | null): number;
    /**
     * @param var0 original type: 'java.lang.Thread[]'
     * @return original return type: 'int'
     */
    enumerate(var0: (java_lang_Thread | null)[] | null): Promise<number>;
    /**
     * @param var0 original type: 'java.lang.Thread[]'
     * @return original return type: 'int'
     */
    enumerateSync(var0: (java_lang_Thread | null)[] | null): number;
    /**
     * @param var0 original type: 'java.lang.Thread[]'
     * @param var1 original type: 'boolean'
     * @return original return type: 'int'
     */
    enumerate(var0: (java_lang_Thread | null)[] | null, var1: java_lang_Boolean | boolean): Promise<number>;
    /**
     * @param var0 original type: 'java.lang.Thread[]'
     * @param var1 original type: 'boolean'
     * @return original return type: 'int'
     */
    enumerateSync(var0: (java_lang_Thread | null)[] | null, var1: java_lang_Boolean | boolean): number;
    /**
     * @param var0 original type: 'java.lang.Thread'
     * @param var1 original type: 'java.lang.Throwable'
     * @return original return type: 'void'
     */
    uncaughtException(var0: java_lang_Thread | null, var1: java_lang_Throwable | null): Promise<void>;
    /**
     * @param var0 original type: 'java.lang.Thread'
     * @param var1 original type: 'java.lang.Throwable'
     * @return original return type: 'void'
     */
    uncaughtExceptionSync(var0: java_lang_Thread | null, var1: java_lang_Throwable | null): void;
    /**
     * @return original return type: 'void'
     */
    stop(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    stopSync(): void;
    /**
     * @return original return type: 'void'
     */
    suspend(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    suspendSync(): void;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'void'
     */
    setMaxPriority(var0: java_lang_Integer | number): Promise<void>;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'void'
     */
    setMaxPrioritySync(var0: java_lang_Integer | number): void;
    /**
     * @return original return type: 'int'
     */
    activeGroupCount(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    activeGroupCountSync(): number;
    /**
     * @return original return type: 'void'
     */
    destroy(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    destroySync(): void;
    /**
     * @return original return type: 'boolean'
     */
    isDestroyed(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isDestroyedSync(): boolean;
    /**
     * @param var0 original type: 'java.lang.ThreadGroup'
     * @return original return type: 'boolean'
     */
    parentOf(var0: ThreadGroupClass | null): Promise<boolean>;
    /**
     * @param var0 original type: 'java.lang.ThreadGroup'
     * @return original return type: 'boolean'
     */
    parentOfSync(var0: ThreadGroupClass | null): boolean;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'boolean'
     */
    allowThreadSuspension(var0: java_lang_Boolean | boolean): Promise<boolean>;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'boolean'
     */
    allowThreadSuspensionSync(var0: java_lang_Boolean | boolean): boolean;
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
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.lang.ThreadGroup'
     */
    static newInstance(var0: string | null): Promise<ThreadGroup>;
    /**
     * @param var0 original type: 'java.lang.ThreadGroup'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'java.lang.ThreadGroup'
     */
    static newInstance(var0: ThreadGroupClass | null, var1: string | null): Promise<ThreadGroup>;
    /**
     * @param var0 original type: 'java.lang.String'
     */
    constructor(var0: string | null);
    /**
     * @param var0 original type: 'java.lang.ThreadGroup'
     * @param var1 original type: 'java.lang.String'
     */
    constructor(var0: ThreadGroupClass | null, var1: string | null);
}
declare const ThreadGroup_base: typeof ThreadGroupClass;
/**
 * Class java.lang.ThreadGroup.
 *
 * This actually imports the java class for further use.
 * The class {@link ThreadGroupClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class ThreadGroup extends ThreadGroup_base {
}
export default ThreadGroup;
//# sourceMappingURL=ThreadGroup.d.ts.map