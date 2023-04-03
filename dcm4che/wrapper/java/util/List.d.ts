import { JavaClass, BasicOrJavaType, InterfaceProxyOptions, JavaInterfaceProxy } from "java-bridge";
import { Integer as java_lang_Integer } from "./../lang/Integer";
import { Collection as java_util_Collection, CollectionInterface as java_util_CollectionInterface } from "./Collection";
import { UnaryOperator as java_util_function_UnaryOperator, UnaryOperatorInterface as java_util_function_UnaryOperatorInterface } from "./function/UnaryOperator";
import { IntFunction as java_util_function_IntFunction, IntFunctionInterface as java_util_function_IntFunctionInterface } from "./function/IntFunction";
import { Iterator as java_util_Iterator } from "./Iterator";
import { Spliterator as java_util_Spliterator } from "./Spliterator";
import { Comparator as java_util_Comparator, ComparatorInterface as java_util_ComparatorInterface } from "./Comparator";
import { ListIterator as java_util_ListIterator } from "./ListIterator";
import { Stream as java_util_stream_Stream } from "./stream/Stream";
import { Predicate as java_util_function_Predicate, PredicateInterface as java_util_function_PredicateInterface } from "./function/Predicate";
import { Consumer as java_util_function_Consumer, ConsumerInterface as java_util_function_ConsumerInterface } from "./function/Consumer";
/**
 * This class just defines types, you should import {@link List} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class ListClass extends JavaClass {
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'java.lang.Object'
     * @return original return type: 'void'
     */
    add(var0: java_lang_Integer | number, var1: BasicOrJavaType | null): Promise<void>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'java.lang.Object'
     * @return original return type: 'void'
     */
    addSync(var0: java_lang_Integer | number, var1: BasicOrJavaType | null): void;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @return original return type: 'boolean'
     */
    add(var0: BasicOrJavaType | null): Promise<boolean>;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @return original return type: 'boolean'
     */
    addSync(var0: BasicOrJavaType | null): boolean;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @return original return type: 'boolean'
     */
    remove(var0: BasicOrJavaType | null): Promise<boolean>;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @return original return type: 'boolean'
     */
    removeSync(var0: BasicOrJavaType | null): boolean;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'java.lang.Object'
     */
    remove(var0: java_lang_Integer | number): Promise<BasicOrJavaType | null>;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'java.lang.Object'
     */
    removeSync(var0: java_lang_Integer | number): BasicOrJavaType | null;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'java.lang.Object'
     */
    get(var0: java_lang_Integer | number): Promise<BasicOrJavaType | null>;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'java.lang.Object'
     */
    getSync(var0: java_lang_Integer | number): BasicOrJavaType | null;
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
     * @param var0 original type: 'java.util.Collection'
     * @return original return type: 'java.util.List'
     */
    static copyOf(var0: java_util_Collection | JavaInterfaceProxy<java_util_CollectionInterface> | null): Promise<List | null>;
    /**
     * @param var0 original type: 'java.util.Collection'
     * @return original return type: 'java.util.List'
     */
    static copyOfSync(var0: java_util_Collection | JavaInterfaceProxy<java_util_CollectionInterface> | null): List | null;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @return original return type: 'int'
     */
    indexOf(var0: BasicOrJavaType | null): Promise<number>;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @return original return type: 'int'
     */
    indexOfSync(var0: BasicOrJavaType | null): number;
    /**
     * @return original return type: 'void'
     */
    clear(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    clearSync(): void;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @return original return type: 'int'
     */
    lastIndexOf(var0: BasicOrJavaType | null): Promise<number>;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @return original return type: 'int'
     */
    lastIndexOfSync(var0: BasicOrJavaType | null): number;
    /**
     * @return original return type: 'boolean'
     */
    isEmpty(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isEmptySync(): boolean;
    /**
     * @param var0 original type: 'java.util.function.UnaryOperator'
     * @return original return type: 'void'
     */
    replaceAll(var0: java_util_function_UnaryOperator | JavaInterfaceProxy<java_util_function_UnaryOperatorInterface> | null): Promise<void>;
    /**
     * @param var0 original type: 'java.util.function.UnaryOperator'
     * @return original return type: 'void'
     */
    replaceAllSync(var0: java_util_function_UnaryOperator | JavaInterfaceProxy<java_util_function_UnaryOperatorInterface> | null): void;
    /**
     * @return original return type: 'int'
     */
    size(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    sizeSync(): number;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @return original return type: 'java.util.List'
     */
    subList(var0: java_lang_Integer | number, var1: java_lang_Integer | number): Promise<List | null>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @return original return type: 'java.util.List'
     */
    subListSync(var0: java_lang_Integer | number, var1: java_lang_Integer | number): List | null;
    /**
     * @return original return type: 'java.lang.Object[]'
     */
    toArray(): Promise<(BasicOrJavaType | null)[] | null>;
    /**
     * @return original return type: 'java.lang.Object[]'
     */
    toArraySync(): (BasicOrJavaType | null)[] | null;
    /**
     * @param var0 original type: 'java.lang.Object[]'
     * @return original return type: 'java.lang.Object[]'
     */
    toArray(var0: (BasicOrJavaType | null)[] | null): Promise<(BasicOrJavaType | null)[] | null>;
    /**
     * @param var0 original type: 'java.lang.Object[]'
     * @return original return type: 'java.lang.Object[]'
     */
    toArraySync(var0: (BasicOrJavaType | null)[] | null): (BasicOrJavaType | null)[] | null;
    /**
     * @param var0 original type: 'java.util.function.IntFunction'
     * @return original return type: 'java.lang.Object[]'
     */
    toArray(var0: java_util_function_IntFunction | JavaInterfaceProxy<java_util_function_IntFunctionInterface> | null): Promise<(BasicOrJavaType | null)[] | null>;
    /**
     * @param var0 original type: 'java.util.function.IntFunction'
     * @return original return type: 'java.lang.Object[]'
     */
    toArraySync(var0: java_util_function_IntFunction | JavaInterfaceProxy<java_util_function_IntFunctionInterface> | null): (BasicOrJavaType | null)[] | null;
    /**
     * @return original return type: 'java.util.Iterator'
     */
    iterator(): Promise<java_util_Iterator | null>;
    /**
     * @return original return type: 'java.util.Iterator'
     */
    iteratorSync(): java_util_Iterator | null;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @param var1 original type: 'java.lang.Object'
     * @param var2 original type: 'java.lang.Object'
     * @param var3 original type: 'java.lang.Object'
     * @return original return type: 'java.util.List'
     */
    static of(var0: BasicOrJavaType | null, var1: BasicOrJavaType | null, var2: BasicOrJavaType | null, var3: BasicOrJavaType | null): Promise<List | null>;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @param var1 original type: 'java.lang.Object'
     * @param var2 original type: 'java.lang.Object'
     * @param var3 original type: 'java.lang.Object'
     * @return original return type: 'java.util.List'
     */
    static ofSync(var0: BasicOrJavaType | null, var1: BasicOrJavaType | null, var2: BasicOrJavaType | null, var3: BasicOrJavaType | null): List | null;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @param var1 original type: 'java.lang.Object'
     * @param var2 original type: 'java.lang.Object'
     * @return original return type: 'java.util.List'
     */
    static of(var0: BasicOrJavaType | null, var1: BasicOrJavaType | null, var2: BasicOrJavaType | null): Promise<List | null>;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @param var1 original type: 'java.lang.Object'
     * @param var2 original type: 'java.lang.Object'
     * @return original return type: 'java.util.List'
     */
    static ofSync(var0: BasicOrJavaType | null, var1: BasicOrJavaType | null, var2: BasicOrJavaType | null): List | null;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @param var1 original type: 'java.lang.Object'
     * @return original return type: 'java.util.List'
     */
    static of(var0: BasicOrJavaType | null, var1: BasicOrJavaType | null): Promise<List | null>;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @param var1 original type: 'java.lang.Object'
     * @return original return type: 'java.util.List'
     */
    static ofSync(var0: BasicOrJavaType | null, var1: BasicOrJavaType | null): List | null;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @return original return type: 'java.util.List'
     */
    static of(var0: BasicOrJavaType | null): Promise<List | null>;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @return original return type: 'java.util.List'
     */
    static ofSync(var0: BasicOrJavaType | null): List | null;
    /**
     * @return original return type: 'java.util.List'
     */
    static of(): Promise<List | null>;
    /**
     * @return original return type: 'java.util.List'
     */
    static ofSync(): List | null;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @param var1 original type: 'java.lang.Object'
     * @param var2 original type: 'java.lang.Object'
     * @param var3 original type: 'java.lang.Object'
     * @param var4 original type: 'java.lang.Object'
     * @param var5 original type: 'java.lang.Object'
     * @param var6 original type: 'java.lang.Object'
     * @param var7 original type: 'java.lang.Object'
     * @return original return type: 'java.util.List'
     */
    static of(var0: BasicOrJavaType | null, var1: BasicOrJavaType | null, var2: BasicOrJavaType | null, var3: BasicOrJavaType | null, var4: BasicOrJavaType | null, var5: BasicOrJavaType | null, var6: BasicOrJavaType | null, var7: BasicOrJavaType | null): Promise<List | null>;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @param var1 original type: 'java.lang.Object'
     * @param var2 original type: 'java.lang.Object'
     * @param var3 original type: 'java.lang.Object'
     * @param var4 original type: 'java.lang.Object'
     * @param var5 original type: 'java.lang.Object'
     * @param var6 original type: 'java.lang.Object'
     * @param var7 original type: 'java.lang.Object'
     * @return original return type: 'java.util.List'
     */
    static ofSync(var0: BasicOrJavaType | null, var1: BasicOrJavaType | null, var2: BasicOrJavaType | null, var3: BasicOrJavaType | null, var4: BasicOrJavaType | null, var5: BasicOrJavaType | null, var6: BasicOrJavaType | null, var7: BasicOrJavaType | null): List | null;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @param var1 original type: 'java.lang.Object'
     * @param var2 original type: 'java.lang.Object'
     * @param var3 original type: 'java.lang.Object'
     * @param var4 original type: 'java.lang.Object'
     * @param var5 original type: 'java.lang.Object'
     * @param var6 original type: 'java.lang.Object'
     * @return original return type: 'java.util.List'
     */
    static of(var0: BasicOrJavaType | null, var1: BasicOrJavaType | null, var2: BasicOrJavaType | null, var3: BasicOrJavaType | null, var4: BasicOrJavaType | null, var5: BasicOrJavaType | null, var6: BasicOrJavaType | null): Promise<List | null>;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @param var1 original type: 'java.lang.Object'
     * @param var2 original type: 'java.lang.Object'
     * @param var3 original type: 'java.lang.Object'
     * @param var4 original type: 'java.lang.Object'
     * @param var5 original type: 'java.lang.Object'
     * @param var6 original type: 'java.lang.Object'
     * @return original return type: 'java.util.List'
     */
    static ofSync(var0: BasicOrJavaType | null, var1: BasicOrJavaType | null, var2: BasicOrJavaType | null, var3: BasicOrJavaType | null, var4: BasicOrJavaType | null, var5: BasicOrJavaType | null, var6: BasicOrJavaType | null): List | null;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @param var1 original type: 'java.lang.Object'
     * @param var2 original type: 'java.lang.Object'
     * @param var3 original type: 'java.lang.Object'
     * @param var4 original type: 'java.lang.Object'
     * @param var5 original type: 'java.lang.Object'
     * @return original return type: 'java.util.List'
     */
    static of(var0: BasicOrJavaType | null, var1: BasicOrJavaType | null, var2: BasicOrJavaType | null, var3: BasicOrJavaType | null, var4: BasicOrJavaType | null, var5: BasicOrJavaType | null): Promise<List | null>;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @param var1 original type: 'java.lang.Object'
     * @param var2 original type: 'java.lang.Object'
     * @param var3 original type: 'java.lang.Object'
     * @param var4 original type: 'java.lang.Object'
     * @param var5 original type: 'java.lang.Object'
     * @return original return type: 'java.util.List'
     */
    static ofSync(var0: BasicOrJavaType | null, var1: BasicOrJavaType | null, var2: BasicOrJavaType | null, var3: BasicOrJavaType | null, var4: BasicOrJavaType | null, var5: BasicOrJavaType | null): List | null;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @param var1 original type: 'java.lang.Object'
     * @param var2 original type: 'java.lang.Object'
     * @param var3 original type: 'java.lang.Object'
     * @param var4 original type: 'java.lang.Object'
     * @return original return type: 'java.util.List'
     */
    static of(var0: BasicOrJavaType | null, var1: BasicOrJavaType | null, var2: BasicOrJavaType | null, var3: BasicOrJavaType | null, var4: BasicOrJavaType | null): Promise<List | null>;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @param var1 original type: 'java.lang.Object'
     * @param var2 original type: 'java.lang.Object'
     * @param var3 original type: 'java.lang.Object'
     * @param var4 original type: 'java.lang.Object'
     * @return original return type: 'java.util.List'
     */
    static ofSync(var0: BasicOrJavaType | null, var1: BasicOrJavaType | null, var2: BasicOrJavaType | null, var3: BasicOrJavaType | null, var4: BasicOrJavaType | null): List | null;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @param var1 original type: 'java.lang.Object'
     * @param var2 original type: 'java.lang.Object'
     * @param var3 original type: 'java.lang.Object'
     * @param var4 original type: 'java.lang.Object'
     * @param var5 original type: 'java.lang.Object'
     * @param var6 original type: 'java.lang.Object'
     * @param var7 original type: 'java.lang.Object'
     * @param var8 original type: 'java.lang.Object'
     * @param var9 original type: 'java.lang.Object'
     * @return original return type: 'java.util.List'
     */
    static of(var0: BasicOrJavaType | null, var1: BasicOrJavaType | null, var2: BasicOrJavaType | null, var3: BasicOrJavaType | null, var4: BasicOrJavaType | null, var5: BasicOrJavaType | null, var6: BasicOrJavaType | null, var7: BasicOrJavaType | null, var8: BasicOrJavaType | null, var9: BasicOrJavaType | null): Promise<List | null>;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @param var1 original type: 'java.lang.Object'
     * @param var2 original type: 'java.lang.Object'
     * @param var3 original type: 'java.lang.Object'
     * @param var4 original type: 'java.lang.Object'
     * @param var5 original type: 'java.lang.Object'
     * @param var6 original type: 'java.lang.Object'
     * @param var7 original type: 'java.lang.Object'
     * @param var8 original type: 'java.lang.Object'
     * @param var9 original type: 'java.lang.Object'
     * @return original return type: 'java.util.List'
     */
    static ofSync(var0: BasicOrJavaType | null, var1: BasicOrJavaType | null, var2: BasicOrJavaType | null, var3: BasicOrJavaType | null, var4: BasicOrJavaType | null, var5: BasicOrJavaType | null, var6: BasicOrJavaType | null, var7: BasicOrJavaType | null, var8: BasicOrJavaType | null, var9: BasicOrJavaType | null): List | null;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @param var1 original type: 'java.lang.Object'
     * @param var2 original type: 'java.lang.Object'
     * @param var3 original type: 'java.lang.Object'
     * @param var4 original type: 'java.lang.Object'
     * @param var5 original type: 'java.lang.Object'
     * @param var6 original type: 'java.lang.Object'
     * @param var7 original type: 'java.lang.Object'
     * @param var8 original type: 'java.lang.Object'
     * @return original return type: 'java.util.List'
     */
    static of(var0: BasicOrJavaType | null, var1: BasicOrJavaType | null, var2: BasicOrJavaType | null, var3: BasicOrJavaType | null, var4: BasicOrJavaType | null, var5: BasicOrJavaType | null, var6: BasicOrJavaType | null, var7: BasicOrJavaType | null, var8: BasicOrJavaType | null): Promise<List | null>;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @param var1 original type: 'java.lang.Object'
     * @param var2 original type: 'java.lang.Object'
     * @param var3 original type: 'java.lang.Object'
     * @param var4 original type: 'java.lang.Object'
     * @param var5 original type: 'java.lang.Object'
     * @param var6 original type: 'java.lang.Object'
     * @param var7 original type: 'java.lang.Object'
     * @param var8 original type: 'java.lang.Object'
     * @return original return type: 'java.util.List'
     */
    static ofSync(var0: BasicOrJavaType | null, var1: BasicOrJavaType | null, var2: BasicOrJavaType | null, var3: BasicOrJavaType | null, var4: BasicOrJavaType | null, var5: BasicOrJavaType | null, var6: BasicOrJavaType | null, var7: BasicOrJavaType | null, var8: BasicOrJavaType | null): List | null;
    /**
     * @param var0 original type: 'java.lang.Object[]'
     * @return original return type: 'java.util.List'
     */
    static of(var0: (BasicOrJavaType | null)[] | null): Promise<List | null>;
    /**
     * @param var0 original type: 'java.lang.Object[]'
     * @return original return type: 'java.util.List'
     */
    static ofSync(var0: (BasicOrJavaType | null)[] | null): List | null;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @return original return type: 'boolean'
     */
    contains(var0: BasicOrJavaType | null): Promise<boolean>;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @return original return type: 'boolean'
     */
    containsSync(var0: BasicOrJavaType | null): boolean;
    /**
     * @return original return type: 'java.util.Spliterator'
     */
    spliterator(): Promise<java_util_Spliterator | null>;
    /**
     * @return original return type: 'java.util.Spliterator'
     */
    spliteratorSync(): java_util_Spliterator | null;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'java.util.Collection'
     * @return original return type: 'boolean'
     */
    addAll(var0: java_lang_Integer | number, var1: java_util_Collection | JavaInterfaceProxy<java_util_CollectionInterface> | null): Promise<boolean>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'java.util.Collection'
     * @return original return type: 'boolean'
     */
    addAllSync(var0: java_lang_Integer | number, var1: java_util_Collection | JavaInterfaceProxy<java_util_CollectionInterface> | null): boolean;
    /**
     * @param var0 original type: 'java.util.Collection'
     * @return original return type: 'boolean'
     */
    addAll(var0: java_util_Collection | JavaInterfaceProxy<java_util_CollectionInterface> | null): Promise<boolean>;
    /**
     * @param var0 original type: 'java.util.Collection'
     * @return original return type: 'boolean'
     */
    addAllSync(var0: java_util_Collection | JavaInterfaceProxy<java_util_CollectionInterface> | null): boolean;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'java.lang.Object'
     * @return original return type: 'java.lang.Object'
     */
    set(var0: java_lang_Integer | number, var1: BasicOrJavaType | null): Promise<BasicOrJavaType | null>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'java.lang.Object'
     * @return original return type: 'java.lang.Object'
     */
    setSync(var0: java_lang_Integer | number, var1: BasicOrJavaType | null): BasicOrJavaType | null;
    /**
     * @param var0 original type: 'java.util.Comparator'
     * @return original return type: 'void'
     */
    sort(var0: java_util_Comparator | JavaInterfaceProxy<java_util_ComparatorInterface> | null): Promise<void>;
    /**
     * @param var0 original type: 'java.util.Comparator'
     * @return original return type: 'void'
     */
    sortSync(var0: java_util_Comparator | JavaInterfaceProxy<java_util_ComparatorInterface> | null): void;
    /**
     * @param var0 original type: 'java.util.Collection'
     * @return original return type: 'boolean'
     */
    removeAll(var0: java_util_Collection | JavaInterfaceProxy<java_util_CollectionInterface> | null): Promise<boolean>;
    /**
     * @param var0 original type: 'java.util.Collection'
     * @return original return type: 'boolean'
     */
    removeAllSync(var0: java_util_Collection | JavaInterfaceProxy<java_util_CollectionInterface> | null): boolean;
    /**
     * @param var0 original type: 'java.util.Collection'
     * @return original return type: 'boolean'
     */
    retainAll(var0: java_util_Collection | JavaInterfaceProxy<java_util_CollectionInterface> | null): Promise<boolean>;
    /**
     * @param var0 original type: 'java.util.Collection'
     * @return original return type: 'boolean'
     */
    retainAllSync(var0: java_util_Collection | JavaInterfaceProxy<java_util_CollectionInterface> | null): boolean;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'java.util.ListIterator'
     */
    listIterator(var0: java_lang_Integer | number): Promise<java_util_ListIterator | null>;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'java.util.ListIterator'
     */
    listIteratorSync(var0: java_lang_Integer | number): java_util_ListIterator | null;
    /**
     * @return original return type: 'java.util.ListIterator'
     */
    listIterator(): Promise<java_util_ListIterator | null>;
    /**
     * @return original return type: 'java.util.ListIterator'
     */
    listIteratorSync(): java_util_ListIterator | null;
    /**
     * @param var0 original type: 'java.util.Collection'
     * @return original return type: 'boolean'
     */
    containsAll(var0: java_util_Collection | JavaInterfaceProxy<java_util_CollectionInterface> | null): Promise<boolean>;
    /**
     * @param var0 original type: 'java.util.Collection'
     * @return original return type: 'boolean'
     */
    containsAllSync(var0: java_util_Collection | JavaInterfaceProxy<java_util_CollectionInterface> | null): boolean;
    /**
     * @return original return type: 'java.util.stream.Stream'
     */
    stream(): Promise<java_util_stream_Stream | null>;
    /**
     * @return original return type: 'java.util.stream.Stream'
     */
    streamSync(): java_util_stream_Stream | null;
    /**
     * @param var0 original type: 'java.util.function.Predicate'
     * @return original return type: 'boolean'
     */
    removeIf(var0: java_util_function_Predicate | JavaInterfaceProxy<java_util_function_PredicateInterface> | null): Promise<boolean>;
    /**
     * @param var0 original type: 'java.util.function.Predicate'
     * @return original return type: 'boolean'
     */
    removeIfSync(var0: java_util_function_Predicate | JavaInterfaceProxy<java_util_function_PredicateInterface> | null): boolean;
    /**
     * @return original return type: 'java.util.stream.Stream'
     */
    parallelStream(): Promise<java_util_stream_Stream | null>;
    /**
     * @return original return type: 'java.util.stream.Stream'
     */
    parallelStreamSync(): java_util_stream_Stream | null;
    /**
     * @param var0 original type: 'java.util.function.Consumer'
     * @return original return type: 'void'
     */
    forEach(var0: java_util_function_Consumer | JavaInterfaceProxy<java_util_function_ConsumerInterface> | null): Promise<void>;
    /**
     * @param var0 original type: 'java.util.function.Consumer'
     * @return original return type: 'void'
     */
    forEachSync(var0: java_util_function_Consumer | JavaInterfaceProxy<java_util_function_ConsumerInterface> | null): void;
}
/**
 * This interface just defines types for creating proxies,
 * you should use {@link createListProxy} for actually creating the proxies.
 *
 * Optional methods in here may still be required by java.
 * This is caused by typescript not allowing to have both optional and
 * non-optional signatures for the same interface member.
 *
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export interface ListInterface {
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'java.lang.Object'
     * @return original return type: 'void'
     */
    add(var0: java_lang_Integer | number, var1: BasicOrJavaType | null): void;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @return original return type: 'boolean'
     */
    add(var0: BasicOrJavaType | null): boolean;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @return original return type: 'boolean'
     */
    remove(var0: BasicOrJavaType | null): boolean;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'java.lang.Object'
     */
    remove(var0: java_lang_Integer | number): BasicOrJavaType | null;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'java.lang.Object'
     */
    get(var0: java_lang_Integer | number): BasicOrJavaType | null;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @return original return type: 'boolean'
     */
    equals(var0: BasicOrJavaType | null): boolean;
    /**
     * @return original return type: 'int'
     */
    hashCode(): number;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @return original return type: 'int'
     */
    indexOf(var0: BasicOrJavaType | null): number;
    /**
     * @return original return type: 'void'
     */
    clear(): void;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @return original return type: 'int'
     */
    lastIndexOf(var0: BasicOrJavaType | null): number;
    /**
     * @return original return type: 'boolean'
     */
    isEmpty(): boolean;
    /**
     * @param var0 original type: 'java.util.function.UnaryOperator'
     * @return original return type: 'void'
     */
    replaceAll?(var0: java_util_function_UnaryOperator | JavaInterfaceProxy<java_util_function_UnaryOperatorInterface> | null): void;
    /**
     * @return original return type: 'int'
     */
    size(): number;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @return original return type: 'java.util.List'
     */
    subList(var0: java_lang_Integer | number, var1: java_lang_Integer | number): List | null;
    /**
     * **Note: Although this method is marked as optional, it actually must be implemented.**
     *
     * @return original return type: 'java.lang.Object[]'
     */
    toArray?(): (BasicOrJavaType | null)[] | null;
    /**
     * **Note: Although this method is marked as optional, it actually must be implemented.**
     *
     * @param var0 original type: 'java.lang.Object[]'
     * @return original return type: 'java.lang.Object[]'
     */
    toArray?(var0: (BasicOrJavaType | null)[] | null): (BasicOrJavaType | null)[] | null;
    /**
     * @param var0 original type: 'java.util.function.IntFunction'
     * @return original return type: 'java.lang.Object[]'
     */
    toArray?(var0: java_util_function_IntFunction | JavaInterfaceProxy<java_util_function_IntFunctionInterface> | null): (BasicOrJavaType | null)[] | null;
    /**
     * @return original return type: 'java.util.Iterator'
     */
    iterator(): java_util_Iterator | null;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @return original return type: 'boolean'
     */
    contains(var0: BasicOrJavaType | null): boolean;
    /**
     * @return original return type: 'java.util.Spliterator'
     */
    spliterator?(): java_util_Spliterator | null;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'java.util.Collection'
     * @return original return type: 'boolean'
     */
    addAll(var0: java_lang_Integer | number, var1: java_util_Collection | JavaInterfaceProxy<java_util_CollectionInterface> | null): boolean;
    /**
     * @param var0 original type: 'java.util.Collection'
     * @return original return type: 'boolean'
     */
    addAll(var0: java_util_Collection | JavaInterfaceProxy<java_util_CollectionInterface> | null): boolean;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'java.lang.Object'
     * @return original return type: 'java.lang.Object'
     */
    set(var0: java_lang_Integer | number, var1: BasicOrJavaType | null): BasicOrJavaType | null;
    /**
     * @param var0 original type: 'java.util.Comparator'
     * @return original return type: 'void'
     */
    sort?(var0: java_util_Comparator | JavaInterfaceProxy<java_util_ComparatorInterface> | null): void;
    /**
     * @param var0 original type: 'java.util.Collection'
     * @return original return type: 'boolean'
     */
    removeAll(var0: java_util_Collection | JavaInterfaceProxy<java_util_CollectionInterface> | null): boolean;
    /**
     * @param var0 original type: 'java.util.Collection'
     * @return original return type: 'boolean'
     */
    retainAll(var0: java_util_Collection | JavaInterfaceProxy<java_util_CollectionInterface> | null): boolean;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'java.util.ListIterator'
     */
    listIterator(var0: java_lang_Integer | number): java_util_ListIterator | null;
    /**
     * @return original return type: 'java.util.ListIterator'
     */
    listIterator(): java_util_ListIterator | null;
    /**
     * @param var0 original type: 'java.util.Collection'
     * @return original return type: 'boolean'
     */
    containsAll(var0: java_util_Collection | JavaInterfaceProxy<java_util_CollectionInterface> | null): boolean;
    /**
     * @return original return type: 'java.util.stream.Stream'
     */
    stream?(): java_util_stream_Stream | null;
    /**
     * @param var0 original type: 'java.util.function.Predicate'
     * @return original return type: 'boolean'
     */
    removeIf?(var0: java_util_function_Predicate | JavaInterfaceProxy<java_util_function_PredicateInterface> | null): boolean;
    /**
     * @return original return type: 'java.util.stream.Stream'
     */
    parallelStream?(): java_util_stream_Stream | null;
    /**
     * @param var0 original type: 'java.util.function.Consumer'
     * @return original return type: 'void'
     */
    forEach?(var0: java_util_function_Consumer | JavaInterfaceProxy<java_util_function_ConsumerInterface> | null): void;
}
/**
 * Create a proxy for the {@link List} interface.
 * All required methods in {@link ListInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
export declare function createListProxy(methods: ListInterface, opts?: InterfaceProxyOptions): JavaInterfaceProxy<ListInterface>;
declare const List_base: typeof ListClass;
/**
 * Class java.util.List.
 *
 * This actually imports the java class for further use.
 * The class {@link ListClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class List extends List_base {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    private constructor();
}
export default List;
//# sourceMappingURL=List.d.ts.map