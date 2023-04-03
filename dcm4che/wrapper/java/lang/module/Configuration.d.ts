import { JavaClass, BasicOrJavaType, JavaInterfaceProxy } from "java-bridge";
import { ModuleFinder as java_lang_module_ModuleFinder, ModuleFinderInterface as java_lang_module_ModuleFinderInterface } from "./ModuleFinder";
import { Collection as java_util_Collection, CollectionInterface as java_util_CollectionInterface } from "./../../util/Collection";
import { List as java_util_List, ListInterface as java_util_ListInterface } from "./../../util/List";
import { Set as java_util_Set } from "./../../util/Set";
import { Optional as java_util_Optional } from "./../../util/Optional";
import { Long as java_lang_Long } from "./../Long";
import { Integer as java_lang_Integer } from "./../Integer";
import { Class as java_lang_Class } from "./../Class";
/**
 * This class just defines types, you should import {@link Configuration} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class ConfigurationClass extends JavaClass {
    /**
     * @return original return type: 'java.lang.String'
     */
    toString(): Promise<string>;
    /**
     * @return original return type: 'java.lang.String'
     */
    toStringSync(): string;
    /**
     * @return original return type: 'java.lang.module.Configuration'
     */
    static empty(): Promise<Configuration | null>;
    /**
     * @return original return type: 'java.lang.module.Configuration'
     */
    static emptySync(): Configuration | null;
    /**
     * @param var0 original type: 'java.lang.module.ModuleFinder'
     * @param var1 original type: 'java.lang.module.ModuleFinder'
     * @param var2 original type: 'java.util.Collection'
     * @return original return type: 'java.lang.module.Configuration'
     */
    resolve(var0: java_lang_module_ModuleFinder | JavaInterfaceProxy<java_lang_module_ModuleFinderInterface> | null, var1: java_lang_module_ModuleFinder | JavaInterfaceProxy<java_lang_module_ModuleFinderInterface> | null, var2: java_util_Collection | JavaInterfaceProxy<java_util_CollectionInterface> | null): Promise<Configuration | null>;
    /**
     * @param var0 original type: 'java.lang.module.ModuleFinder'
     * @param var1 original type: 'java.lang.module.ModuleFinder'
     * @param var2 original type: 'java.util.Collection'
     * @return original return type: 'java.lang.module.Configuration'
     */
    resolveSync(var0: java_lang_module_ModuleFinder | JavaInterfaceProxy<java_lang_module_ModuleFinderInterface> | null, var1: java_lang_module_ModuleFinder | JavaInterfaceProxy<java_lang_module_ModuleFinderInterface> | null, var2: java_util_Collection | JavaInterfaceProxy<java_util_CollectionInterface> | null): Configuration | null;
    /**
     * @param var0 original type: 'java.lang.module.ModuleFinder'
     * @param var1 original type: 'java.util.List'
     * @param var2 original type: 'java.lang.module.ModuleFinder'
     * @param var3 original type: 'java.util.Collection'
     * @return original return type: 'java.lang.module.Configuration'
     */
    static resolve(var0: java_lang_module_ModuleFinder | JavaInterfaceProxy<java_lang_module_ModuleFinderInterface> | null, var1: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null, var2: java_lang_module_ModuleFinder | JavaInterfaceProxy<java_lang_module_ModuleFinderInterface> | null, var3: java_util_Collection | JavaInterfaceProxy<java_util_CollectionInterface> | null): Promise<Configuration | null>;
    /**
     * @param var0 original type: 'java.lang.module.ModuleFinder'
     * @param var1 original type: 'java.util.List'
     * @param var2 original type: 'java.lang.module.ModuleFinder'
     * @param var3 original type: 'java.util.Collection'
     * @return original return type: 'java.lang.module.Configuration'
     */
    static resolveSync(var0: java_lang_module_ModuleFinder | JavaInterfaceProxy<java_lang_module_ModuleFinderInterface> | null, var1: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null, var2: java_lang_module_ModuleFinder | JavaInterfaceProxy<java_lang_module_ModuleFinderInterface> | null, var3: java_util_Collection | JavaInterfaceProxy<java_util_CollectionInterface> | null): Configuration | null;
    /**
     * @return original return type: 'java.util.Set'
     */
    modules(): Promise<java_util_Set | null>;
    /**
     * @return original return type: 'java.util.Set'
     */
    modulesSync(): java_util_Set | null;
    /**
     * @return original return type: 'java.util.List'
     */
    parents(): Promise<java_util_List | null>;
    /**
     * @return original return type: 'java.util.List'
     */
    parentsSync(): java_util_List | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.util.Optional'
     */
    findModule(var0: string | null): Promise<java_util_Optional | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.util.Optional'
     */
    findModuleSync(var0: string | null): java_util_Optional | null;
    /**
     * @param var0 original type: 'java.lang.module.ModuleFinder'
     * @param var1 original type: 'java.util.List'
     * @param var2 original type: 'java.lang.module.ModuleFinder'
     * @param var3 original type: 'java.util.Collection'
     * @return original return type: 'java.lang.module.Configuration'
     */
    static resolveAndBind(var0: java_lang_module_ModuleFinder | JavaInterfaceProxy<java_lang_module_ModuleFinderInterface> | null, var1: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null, var2: java_lang_module_ModuleFinder | JavaInterfaceProxy<java_lang_module_ModuleFinderInterface> | null, var3: java_util_Collection | JavaInterfaceProxy<java_util_CollectionInterface> | null): Promise<Configuration | null>;
    /**
     * @param var0 original type: 'java.lang.module.ModuleFinder'
     * @param var1 original type: 'java.util.List'
     * @param var2 original type: 'java.lang.module.ModuleFinder'
     * @param var3 original type: 'java.util.Collection'
     * @return original return type: 'java.lang.module.Configuration'
     */
    static resolveAndBindSync(var0: java_lang_module_ModuleFinder | JavaInterfaceProxy<java_lang_module_ModuleFinderInterface> | null, var1: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null, var2: java_lang_module_ModuleFinder | JavaInterfaceProxy<java_lang_module_ModuleFinderInterface> | null, var3: java_util_Collection | JavaInterfaceProxy<java_util_CollectionInterface> | null): Configuration | null;
    /**
     * @param var0 original type: 'java.lang.module.ModuleFinder'
     * @param var1 original type: 'java.lang.module.ModuleFinder'
     * @param var2 original type: 'java.util.Collection'
     * @return original return type: 'java.lang.module.Configuration'
     */
    resolveAndBind(var0: java_lang_module_ModuleFinder | JavaInterfaceProxy<java_lang_module_ModuleFinderInterface> | null, var1: java_lang_module_ModuleFinder | JavaInterfaceProxy<java_lang_module_ModuleFinderInterface> | null, var2: java_util_Collection | JavaInterfaceProxy<java_util_CollectionInterface> | null): Promise<Configuration | null>;
    /**
     * @param var0 original type: 'java.lang.module.ModuleFinder'
     * @param var1 original type: 'java.lang.module.ModuleFinder'
     * @param var2 original type: 'java.util.Collection'
     * @return original return type: 'java.lang.module.Configuration'
     */
    resolveAndBindSync(var0: java_lang_module_ModuleFinder | JavaInterfaceProxy<java_lang_module_ModuleFinderInterface> | null, var1: java_lang_module_ModuleFinder | JavaInterfaceProxy<java_lang_module_ModuleFinderInterface> | null, var2: java_util_Collection | JavaInterfaceProxy<java_util_CollectionInterface> | null): Configuration | null;
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
}
declare const Configuration_base: typeof ConfigurationClass;
/**
 * Class java.lang.module.Configuration.
 *
 * This actually imports the java class for further use.
 * The class {@link ConfigurationClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class Configuration extends Configuration_base {
}
export default Configuration;
//# sourceMappingURL=Configuration.d.ts.map