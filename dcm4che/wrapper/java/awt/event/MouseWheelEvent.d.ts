import { JavaClass, BasicOrJavaType } from "java-bridge";
import { Integer as java_lang_Integer } from "./../../lang/Integer";
import { Long as java_lang_Long } from "./../../lang/Long";
import { Point as java_awt_Point } from "./../Point";
import { Component as java_awt_Component } from "./../Component";
import { Class as java_lang_Class } from "./../../lang/Class";
import { Boolean as java_lang_Boolean } from "./../../lang/Boolean";
import { Double as java_lang_Double } from "./../../lang/Double";
/**
 * This class just defines types, you should import {@link MouseWheelEvent} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class MouseWheelEventClass extends JavaClass {
    /**
     * Original type: 'int'
     */
    static readonly WHEEL_UNIT_SCROLL: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly WHEEL_BLOCK_SCROLL: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly MOUSE_FIRST: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly MOUSE_LAST: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly MOUSE_CLICKED: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly MOUSE_PRESSED: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly MOUSE_RELEASED: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly MOUSE_MOVED: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly MOUSE_ENTERED: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly MOUSE_EXITED: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly MOUSE_DRAGGED: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly MOUSE_WHEEL: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly NOBUTTON: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly BUTTON1: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly BUTTON2: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly BUTTON3: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly SHIFT_MASK: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly CTRL_MASK: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly META_MASK: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly ALT_MASK: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly ALT_GRAPH_MASK: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly BUTTON1_MASK: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly BUTTON2_MASK: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly BUTTON3_MASK: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly SHIFT_DOWN_MASK: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly CTRL_DOWN_MASK: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly META_DOWN_MASK: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly ALT_DOWN_MASK: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly BUTTON1_DOWN_MASK: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly BUTTON2_DOWN_MASK: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly BUTTON3_DOWN_MASK: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly ALT_GRAPH_DOWN_MASK: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly COMPONENT_FIRST: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly COMPONENT_LAST: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly COMPONENT_MOVED: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly COMPONENT_RESIZED: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly COMPONENT_SHOWN: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly COMPONENT_HIDDEN: java_lang_Integer | number;
    /**
     * Original type: 'long'
     */
    static readonly COMPONENT_EVENT_MASK: java_lang_Long | bigint | number;
    /**
     * Original type: 'long'
     */
    static readonly CONTAINER_EVENT_MASK: java_lang_Long | bigint | number;
    /**
     * Original type: 'long'
     */
    static readonly FOCUS_EVENT_MASK: java_lang_Long | bigint | number;
    /**
     * Original type: 'long'
     */
    static readonly KEY_EVENT_MASK: java_lang_Long | bigint | number;
    /**
     * Original type: 'long'
     */
    static readonly MOUSE_EVENT_MASK: java_lang_Long | bigint | number;
    /**
     * Original type: 'long'
     */
    static readonly MOUSE_MOTION_EVENT_MASK: java_lang_Long | bigint | number;
    /**
     * Original type: 'long'
     */
    static readonly WINDOW_EVENT_MASK: java_lang_Long | bigint | number;
    /**
     * Original type: 'long'
     */
    static readonly ACTION_EVENT_MASK: java_lang_Long | bigint | number;
    /**
     * Original type: 'long'
     */
    static readonly ADJUSTMENT_EVENT_MASK: java_lang_Long | bigint | number;
    /**
     * Original type: 'long'
     */
    static readonly ITEM_EVENT_MASK: java_lang_Long | bigint | number;
    /**
     * Original type: 'long'
     */
    static readonly TEXT_EVENT_MASK: java_lang_Long | bigint | number;
    /**
     * Original type: 'long'
     */
    static readonly INPUT_METHOD_EVENT_MASK: java_lang_Long | bigint | number;
    /**
     * Original type: 'long'
     */
    static readonly PAINT_EVENT_MASK: java_lang_Long | bigint | number;
    /**
     * Original type: 'long'
     */
    static readonly INVOCATION_EVENT_MASK: java_lang_Long | bigint | number;
    /**
     * Original type: 'long'
     */
    static readonly HIERARCHY_EVENT_MASK: java_lang_Long | bigint | number;
    /**
     * Original type: 'long'
     */
    static readonly HIERARCHY_BOUNDS_EVENT_MASK: java_lang_Long | bigint | number;
    /**
     * Original type: 'long'
     */
    static readonly MOUSE_WHEEL_EVENT_MASK: java_lang_Long | bigint | number;
    /**
     * Original type: 'long'
     */
    static readonly WINDOW_STATE_EVENT_MASK: java_lang_Long | bigint | number;
    /**
     * Original type: 'long'
     */
    static readonly WINDOW_FOCUS_EVENT_MASK: java_lang_Long | bigint | number;
    /**
     * Original type: 'int'
     */
    static readonly RESERVED_ID_MAX: java_lang_Integer | number;
    /**
     * @return original return type: 'java.lang.String'
     */
    paramString(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    paramStringSync(): string | null;
    /**
     * @return original return type: 'int'
     */
    getScrollType(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    getScrollTypeSync(): number;
    /**
     * @return original return type: 'int'
     */
    getScrollAmount(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    getScrollAmountSync(): number;
    /**
     * @return original return type: 'int'
     */
    getWheelRotation(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    getWheelRotationSync(): number;
    /**
     * @return original return type: 'double'
     */
    getPreciseWheelRotation(): Promise<number>;
    /**
     * @return original return type: 'double'
     */
    getPreciseWheelRotationSync(): number;
    /**
     * @return original return type: 'int'
     */
    getUnitsToScroll(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    getUnitsToScrollSync(): number;
    /**
     * @return original return type: 'int'
     */
    getX(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    getXSync(): number;
    /**
     * @return original return type: 'int'
     */
    getY(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    getYSync(): number;
    /**
     * @return original return type: 'java.awt.Point'
     */
    getLocationOnScreen(): Promise<java_awt_Point | null>;
    /**
     * @return original return type: 'java.awt.Point'
     */
    getLocationOnScreenSync(): java_awt_Point | null;
    /**
     * @return original return type: 'int'
     */
    getXOnScreen(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    getXOnScreenSync(): number;
    /**
     * @return original return type: 'int'
     */
    getYOnScreen(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    getYOnScreenSync(): number;
    /**
     * @return original return type: 'int'
     */
    getClickCount(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    getClickCountSync(): number;
    /**
     * @return original return type: 'boolean'
     */
    isPopupTrigger(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isPopupTriggerSync(): boolean;
    /**
     * @return original return type: 'int'
     */
    getModifiersEx(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    getModifiersExSync(): number;
    /**
     * @return original return type: 'int'
     */
    getButton(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    getButtonSync(): number;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @return original return type: 'void'
     */
    translatePoint(var0: java_lang_Integer | number, var1: java_lang_Integer | number): Promise<void>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @return original return type: 'void'
     */
    translatePointSync(var0: java_lang_Integer | number, var1: java_lang_Integer | number): void;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'java.lang.String'
     */
    static getMouseModifiersText(var0: java_lang_Integer | number): Promise<string | null>;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'java.lang.String'
     */
    static getMouseModifiersTextSync(var0: java_lang_Integer | number): string | null;
    /**
     * @return original return type: 'java.awt.Point'
     */
    getPoint(): Promise<java_awt_Point | null>;
    /**
     * @return original return type: 'java.awt.Point'
     */
    getPointSync(): java_awt_Point | null;
    /**
     * @return original return type: 'int'
     */
    getModifiers(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    getModifiersSync(): number;
    /**
     * @return original return type: 'void'
     */
    consume(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    consumeSync(): void;
    /**
     * @return original return type: 'boolean'
     */
    isControlDown(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isControlDownSync(): boolean;
    /**
     * @return original return type: 'boolean'
     */
    isShiftDown(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isShiftDownSync(): boolean;
    /**
     * @return original return type: 'boolean'
     */
    isConsumed(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isConsumedSync(): boolean;
    /**
     * @return original return type: 'long'
     */
    getWhen(): Promise<number>;
    /**
     * @return original return type: 'long'
     */
    getWhenSync(): number;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'int'
     */
    static getMaskForButton(var0: java_lang_Integer | number): Promise<number>;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'int'
     */
    static getMaskForButtonSync(var0: java_lang_Integer | number): number;
    /**
     * @return original return type: 'boolean'
     */
    isMetaDown(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isMetaDownSync(): boolean;
    /**
     * @return original return type: 'boolean'
     */
    isAltDown(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isAltDownSync(): boolean;
    /**
     * @return original return type: 'boolean'
     */
    isAltGraphDown(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isAltGraphDownSync(): boolean;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'java.lang.String'
     */
    static getModifiersExText(var0: java_lang_Integer | number): Promise<string | null>;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'java.lang.String'
     */
    static getModifiersExTextSync(var0: java_lang_Integer | number): string | null;
    /**
     * @return original return type: 'java.awt.Component'
     */
    getComponent(): Promise<java_awt_Component | null>;
    /**
     * @return original return type: 'java.awt.Component'
     */
    getComponentSync(): java_awt_Component | null;
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
    getID(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    getIDSync(): number;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @return original return type: 'void'
     */
    setSource(var0: BasicOrJavaType | null): Promise<void>;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @return original return type: 'void'
     */
    setSourceSync(var0: BasicOrJavaType | null): void;
    /**
     * @return original return type: 'java.lang.Object'
     */
    getSource(): Promise<BasicOrJavaType | null>;
    /**
     * @return original return type: 'java.lang.Object'
     */
    getSourceSync(): BasicOrJavaType | null;
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
     * @param var0 original type: 'java.awt.Component'
     * @param var1 original type: 'int'
     * @param var2 original type: 'long'
     * @param var3 original type: 'int'
     * @param var4 original type: 'int'
     * @param var5 original type: 'int'
     * @param var6 original type: 'int'
     * @param var7 original type: 'int'
     * @param var8 original type: 'int'
     * @param var9 original type: 'boolean'
     * @param var10 original type: 'int'
     * @param var11 original type: 'int'
     * @param var12 original type: 'int'
     * @param var13 original type: 'double'
     * @return original return type: 'java.awt.event.MouseWheelEvent'
     */
    static newInstance(var0: java_awt_Component | null, var1: java_lang_Integer | number, var2: java_lang_Long | bigint | number, var3: java_lang_Integer | number, var4: java_lang_Integer | number, var5: java_lang_Integer | number, var6: java_lang_Integer | number, var7: java_lang_Integer | number, var8: java_lang_Integer | number, var9: java_lang_Boolean | boolean, var10: java_lang_Integer | number, var11: java_lang_Integer | number, var12: java_lang_Integer | number, var13: java_lang_Double | number): Promise<MouseWheelEvent>;
    /**
     * @param var0 original type: 'java.awt.Component'
     * @param var1 original type: 'int'
     * @param var2 original type: 'long'
     * @param var3 original type: 'int'
     * @param var4 original type: 'int'
     * @param var5 original type: 'int'
     * @param var6 original type: 'int'
     * @param var7 original type: 'int'
     * @param var8 original type: 'int'
     * @param var9 original type: 'boolean'
     * @param var10 original type: 'int'
     * @param var11 original type: 'int'
     * @param var12 original type: 'int'
     * @return original return type: 'java.awt.event.MouseWheelEvent'
     */
    static newInstance(var0: java_awt_Component | null, var1: java_lang_Integer | number, var2: java_lang_Long | bigint | number, var3: java_lang_Integer | number, var4: java_lang_Integer | number, var5: java_lang_Integer | number, var6: java_lang_Integer | number, var7: java_lang_Integer | number, var8: java_lang_Integer | number, var9: java_lang_Boolean | boolean, var10: java_lang_Integer | number, var11: java_lang_Integer | number, var12: java_lang_Integer | number): Promise<MouseWheelEvent>;
    /**
     * @param var0 original type: 'java.awt.Component'
     * @param var1 original type: 'int'
     * @param var2 original type: 'long'
     * @param var3 original type: 'int'
     * @param var4 original type: 'int'
     * @param var5 original type: 'int'
     * @param var6 original type: 'int'
     * @param var7 original type: 'boolean'
     * @param var8 original type: 'int'
     * @param var9 original type: 'int'
     * @param var10 original type: 'int'
     * @return original return type: 'java.awt.event.MouseWheelEvent'
     */
    static newInstance(var0: java_awt_Component | null, var1: java_lang_Integer | number, var2: java_lang_Long | bigint | number, var3: java_lang_Integer | number, var4: java_lang_Integer | number, var5: java_lang_Integer | number, var6: java_lang_Integer | number, var7: java_lang_Boolean | boolean, var8: java_lang_Integer | number, var9: java_lang_Integer | number, var10: java_lang_Integer | number): Promise<MouseWheelEvent>;
    /**
     * @param var0 original type: 'java.awt.Component'
     * @param var1 original type: 'int'
     * @param var2 original type: 'long'
     * @param var3 original type: 'int'
     * @param var4 original type: 'int'
     * @param var5 original type: 'int'
     * @param var6 original type: 'int'
     * @param var7 original type: 'int'
     * @param var8 original type: 'int'
     * @param var9 original type: 'boolean'
     * @param var10 original type: 'int'
     * @param var11 original type: 'int'
     * @param var12 original type: 'int'
     * @param var13 original type: 'double'
     */
    constructor(var0: java_awt_Component | null, var1: java_lang_Integer | number, var2: java_lang_Long | bigint | number, var3: java_lang_Integer | number, var4: java_lang_Integer | number, var5: java_lang_Integer | number, var6: java_lang_Integer | number, var7: java_lang_Integer | number, var8: java_lang_Integer | number, var9: java_lang_Boolean | boolean, var10: java_lang_Integer | number, var11: java_lang_Integer | number, var12: java_lang_Integer | number, var13: java_lang_Double | number);
    /**
     * @param var0 original type: 'java.awt.Component'
     * @param var1 original type: 'int'
     * @param var2 original type: 'long'
     * @param var3 original type: 'int'
     * @param var4 original type: 'int'
     * @param var5 original type: 'int'
     * @param var6 original type: 'int'
     * @param var7 original type: 'int'
     * @param var8 original type: 'int'
     * @param var9 original type: 'boolean'
     * @param var10 original type: 'int'
     * @param var11 original type: 'int'
     * @param var12 original type: 'int'
     */
    constructor(var0: java_awt_Component | null, var1: java_lang_Integer | number, var2: java_lang_Long | bigint | number, var3: java_lang_Integer | number, var4: java_lang_Integer | number, var5: java_lang_Integer | number, var6: java_lang_Integer | number, var7: java_lang_Integer | number, var8: java_lang_Integer | number, var9: java_lang_Boolean | boolean, var10: java_lang_Integer | number, var11: java_lang_Integer | number, var12: java_lang_Integer | number);
    /**
     * @param var0 original type: 'java.awt.Component'
     * @param var1 original type: 'int'
     * @param var2 original type: 'long'
     * @param var3 original type: 'int'
     * @param var4 original type: 'int'
     * @param var5 original type: 'int'
     * @param var6 original type: 'int'
     * @param var7 original type: 'boolean'
     * @param var8 original type: 'int'
     * @param var9 original type: 'int'
     * @param var10 original type: 'int'
     */
    constructor(var0: java_awt_Component | null, var1: java_lang_Integer | number, var2: java_lang_Long | bigint | number, var3: java_lang_Integer | number, var4: java_lang_Integer | number, var5: java_lang_Integer | number, var6: java_lang_Integer | number, var7: java_lang_Boolean | boolean, var8: java_lang_Integer | number, var9: java_lang_Integer | number, var10: java_lang_Integer | number);
}
declare const MouseWheelEvent_base: typeof MouseWheelEventClass;
/**
 * Class java.awt.event.MouseWheelEvent.
 *
 * This actually imports the java class for further use.
 * The class {@link MouseWheelEventClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class MouseWheelEvent extends MouseWheelEvent_base {
}
export default MouseWheelEvent;
//# sourceMappingURL=MouseWheelEvent.d.ts.map