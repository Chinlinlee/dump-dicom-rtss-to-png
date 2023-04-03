import { JavaClass, InterfaceProxyOptions, JavaInterfaceProxy } from "java-bridge";
import { Annotation as java_lang_annotation_Annotation } from "./../annotation/Annotation";
import { Class as java_lang_Class } from "./../Class";
import { Type as java_lang_reflect_Type } from "./Type";
/**
 * This class just defines types, you should import {@link AnnotatedType} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class AnnotatedTypeClass extends JavaClass {
    /**
     * @param var0 original type: 'java.lang.Class'
     * @return original return type: 'java.lang.annotation.Annotation'
     */
    getAnnotation(var0: java_lang_Class | null): Promise<java_lang_annotation_Annotation | null>;
    /**
     * @param var0 original type: 'java.lang.Class'
     * @return original return type: 'java.lang.annotation.Annotation'
     */
    getAnnotationSync(var0: java_lang_Class | null): java_lang_annotation_Annotation | null;
    /**
     * @return original return type: 'java.lang.annotation.Annotation[]'
     */
    getAnnotations(): Promise<(java_lang_annotation_Annotation | null)[] | null>;
    /**
     * @return original return type: 'java.lang.annotation.Annotation[]'
     */
    getAnnotationsSync(): (java_lang_annotation_Annotation | null)[] | null;
    /**
     * @return original return type: 'java.lang.annotation.Annotation[]'
     */
    getDeclaredAnnotations(): Promise<(java_lang_annotation_Annotation | null)[] | null>;
    /**
     * @return original return type: 'java.lang.annotation.Annotation[]'
     */
    getDeclaredAnnotationsSync(): (java_lang_annotation_Annotation | null)[] | null;
    /**
     * @return original return type: 'java.lang.reflect.Type'
     */
    getType(): Promise<java_lang_reflect_Type | null>;
    /**
     * @return original return type: 'java.lang.reflect.Type'
     */
    getTypeSync(): java_lang_reflect_Type | null;
    /**
     * @return original return type: 'java.lang.reflect.AnnotatedType'
     */
    getAnnotatedOwnerType(): Promise<AnnotatedType | null>;
    /**
     * @return original return type: 'java.lang.reflect.AnnotatedType'
     */
    getAnnotatedOwnerTypeSync(): AnnotatedType | null;
    /**
     * @param var0 original type: 'java.lang.Class'
     * @return original return type: 'boolean'
     */
    isAnnotationPresent(var0: java_lang_Class | null): Promise<boolean>;
    /**
     * @param var0 original type: 'java.lang.Class'
     * @return original return type: 'boolean'
     */
    isAnnotationPresentSync(var0: java_lang_Class | null): boolean;
    /**
     * @param var0 original type: 'java.lang.Class'
     * @return original return type: 'java.lang.annotation.Annotation[]'
     */
    getAnnotationsByType(var0: java_lang_Class | null): Promise<(java_lang_annotation_Annotation | null)[] | null>;
    /**
     * @param var0 original type: 'java.lang.Class'
     * @return original return type: 'java.lang.annotation.Annotation[]'
     */
    getAnnotationsByTypeSync(var0: java_lang_Class | null): (java_lang_annotation_Annotation | null)[] | null;
    /**
     * @param var0 original type: 'java.lang.Class'
     * @return original return type: 'java.lang.annotation.Annotation'
     */
    getDeclaredAnnotation(var0: java_lang_Class | null): Promise<java_lang_annotation_Annotation | null>;
    /**
     * @param var0 original type: 'java.lang.Class'
     * @return original return type: 'java.lang.annotation.Annotation'
     */
    getDeclaredAnnotationSync(var0: java_lang_Class | null): java_lang_annotation_Annotation | null;
    /**
     * @param var0 original type: 'java.lang.Class'
     * @return original return type: 'java.lang.annotation.Annotation[]'
     */
    getDeclaredAnnotationsByType(var0: java_lang_Class | null): Promise<(java_lang_annotation_Annotation | null)[] | null>;
    /**
     * @param var0 original type: 'java.lang.Class'
     * @return original return type: 'java.lang.annotation.Annotation[]'
     */
    getDeclaredAnnotationsByTypeSync(var0: java_lang_Class | null): (java_lang_annotation_Annotation | null)[] | null;
}
/**
 * This interface just defines types for creating proxies,
 * you should use {@link createAnnotatedTypeProxy} for actually creating the proxies.
 *
 * Optional methods in here may still be required by java.
 * This is caused by typescript not allowing to have both optional and
 * non-optional signatures for the same interface member.
 *
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export interface AnnotatedTypeInterface {
    /**
     * @param var0 original type: 'java.lang.Class'
     * @return original return type: 'java.lang.annotation.Annotation'
     */
    getAnnotation(var0: java_lang_Class | null): java_lang_annotation_Annotation | null;
    /**
     * @return original return type: 'java.lang.annotation.Annotation[]'
     */
    getAnnotations(): (java_lang_annotation_Annotation | null)[] | null;
    /**
     * @return original return type: 'java.lang.annotation.Annotation[]'
     */
    getDeclaredAnnotations(): (java_lang_annotation_Annotation | null)[] | null;
    /**
     * @return original return type: 'java.lang.reflect.Type'
     */
    getType(): java_lang_reflect_Type | null;
    /**
     * @return original return type: 'java.lang.reflect.AnnotatedType'
     */
    getAnnotatedOwnerType?(): AnnotatedType | null;
    /**
     * @param var0 original type: 'java.lang.Class'
     * @return original return type: 'boolean'
     */
    isAnnotationPresent?(var0: java_lang_Class | null): boolean;
    /**
     * @param var0 original type: 'java.lang.Class'
     * @return original return type: 'java.lang.annotation.Annotation[]'
     */
    getAnnotationsByType?(var0: java_lang_Class | null): (java_lang_annotation_Annotation | null)[] | null;
    /**
     * @param var0 original type: 'java.lang.Class'
     * @return original return type: 'java.lang.annotation.Annotation'
     */
    getDeclaredAnnotation?(var0: java_lang_Class | null): java_lang_annotation_Annotation | null;
    /**
     * @param var0 original type: 'java.lang.Class'
     * @return original return type: 'java.lang.annotation.Annotation[]'
     */
    getDeclaredAnnotationsByType?(var0: java_lang_Class | null): (java_lang_annotation_Annotation | null)[] | null;
}
/**
 * Create a proxy for the {@link AnnotatedType} interface.
 * All required methods in {@link AnnotatedTypeInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
export declare function createAnnotatedTypeProxy(methods: AnnotatedTypeInterface, opts?: InterfaceProxyOptions): JavaInterfaceProxy<AnnotatedTypeInterface>;
declare const AnnotatedType_base: typeof AnnotatedTypeClass;
/**
 * Class java.lang.reflect.AnnotatedType.
 *
 * This actually imports the java class for further use.
 * The class {@link AnnotatedTypeClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class AnnotatedType extends AnnotatedType_base {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    private constructor();
}
export default AnnotatedType;
//# sourceMappingURL=AnnotatedType.d.ts.map