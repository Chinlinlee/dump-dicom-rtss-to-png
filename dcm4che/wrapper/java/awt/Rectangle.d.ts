import { JavaClass, BasicOrJavaType } from "java-bridge";
import { Integer as java_lang_Integer } from "./../lang/Integer";
import { Point as java_awt_Point } from "./Point";
import { Double as java_lang_Double } from "./../lang/Double";
import { Point2D as java_awt_geom_Point2D } from "./geom/Point2D";
import { Rectangle2D as java_awt_geom_Rectangle2D } from "./geom/Rectangle2D";
import { Dimension as java_awt_Dimension } from "./Dimension";
import { PathIterator as java_awt_geom_PathIterator } from "./geom/PathIterator";
import { AffineTransform as java_awt_geom_AffineTransform } from "./geom/AffineTransform";
import { Line2D as java_awt_geom_Line2D } from "./geom/Line2D";
import { Dimension2D as java_awt_geom_Dimension2D } from "./geom/Dimension2D";
import { Long as java_lang_Long } from "./../lang/Long";
import { Class as java_lang_Class } from "./../lang/Class";
/**
 * This class just defines types, you should import {@link Rectangle} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class RectangleClass extends JavaClass {
    /**
     * Original type: 'int'
     */
    x: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    y: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    width: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    height: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly OUT_LEFT: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly OUT_TOP: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly OUT_RIGHT: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly OUT_BOTTOM: java_lang_Integer | number;
    /**
     * @param var0 original type: 'java.awt.Rectangle'
     * @return original return type: 'void'
     */
    add(var0: RectangleClass | null): Promise<void>;
    /**
     * @param var0 original type: 'java.awt.Rectangle'
     * @return original return type: 'void'
     */
    addSync(var0: RectangleClass | null): void;
    /**
     * @param var0 original type: 'java.awt.Point'
     * @return original return type: 'void'
     */
    add(var0: java_awt_Point | null): Promise<void>;
    /**
     * @param var0 original type: 'java.awt.Point'
     * @return original return type: 'void'
     */
    addSync(var0: java_awt_Point | null): void;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @return original return type: 'void'
     */
    add(var0: java_lang_Integer | number, var1: java_lang_Integer | number): Promise<void>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @return original return type: 'void'
     */
    addSync(var0: java_lang_Integer | number, var1: java_lang_Integer | number): void;
    /**
     * @param var0 original type: 'double'
     * @param var1 original type: 'double'
     * @return original return type: 'void'
     */
    add(var0: java_lang_Double | number, var1: java_lang_Double | number): Promise<void>;
    /**
     * @param var0 original type: 'double'
     * @param var1 original type: 'double'
     * @return original return type: 'void'
     */
    addSync(var0: java_lang_Double | number, var1: java_lang_Double | number): void;
    /**
     * @param var0 original type: 'java.awt.geom.Point2D'
     * @return original return type: 'void'
     */
    add(var0: java_awt_geom_Point2D | null): Promise<void>;
    /**
     * @param var0 original type: 'java.awt.geom.Point2D'
     * @return original return type: 'void'
     */
    addSync(var0: java_awt_geom_Point2D | null): void;
    /**
     * @param var0 original type: 'java.awt.geom.Rectangle2D'
     * @return original return type: 'void'
     */
    add(var0: java_awt_geom_Rectangle2D | null): Promise<void>;
    /**
     * @param var0 original type: 'java.awt.geom.Rectangle2D'
     * @return original return type: 'void'
     */
    addSync(var0: java_awt_geom_Rectangle2D | null): void;
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
     * @return original return type: 'boolean'
     */
    isEmpty(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isEmptySync(): boolean;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @param var3 original type: 'int'
     * @return original return type: 'boolean'
     */
    contains(var0: java_lang_Integer | number, var1: java_lang_Integer | number, var2: java_lang_Integer | number, var3: java_lang_Integer | number): Promise<boolean>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @param var3 original type: 'int'
     * @return original return type: 'boolean'
     */
    containsSync(var0: java_lang_Integer | number, var1: java_lang_Integer | number, var2: java_lang_Integer | number, var3: java_lang_Integer | number): boolean;
    /**
     * @param var0 original type: 'java.awt.Rectangle'
     * @return original return type: 'boolean'
     */
    contains(var0: RectangleClass | null): Promise<boolean>;
    /**
     * @param var0 original type: 'java.awt.Rectangle'
     * @return original return type: 'boolean'
     */
    containsSync(var0: RectangleClass | null): boolean;
    /**
     * @param var0 original type: 'java.awt.Point'
     * @return original return type: 'boolean'
     */
    contains(var0: java_awt_Point | null): Promise<boolean>;
    /**
     * @param var0 original type: 'java.awt.Point'
     * @return original return type: 'boolean'
     */
    containsSync(var0: java_awt_Point | null): boolean;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @return original return type: 'boolean'
     */
    contains(var0: java_lang_Integer | number, var1: java_lang_Integer | number): Promise<boolean>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @return original return type: 'boolean'
     */
    containsSync(var0: java_lang_Integer | number, var1: java_lang_Integer | number): boolean;
    /**
     * @param var0 original type: 'double'
     * @param var1 original type: 'double'
     * @return original return type: 'boolean'
     */
    contains(var0: java_lang_Double | number, var1: java_lang_Double | number): Promise<boolean>;
    /**
     * @param var0 original type: 'double'
     * @param var1 original type: 'double'
     * @return original return type: 'boolean'
     */
    containsSync(var0: java_lang_Double | number, var1: java_lang_Double | number): boolean;
    /**
     * @param var0 original type: 'double'
     * @param var1 original type: 'double'
     * @param var2 original type: 'double'
     * @param var3 original type: 'double'
     * @return original return type: 'boolean'
     */
    contains(var0: java_lang_Double | number, var1: java_lang_Double | number, var2: java_lang_Double | number, var3: java_lang_Double | number): Promise<boolean>;
    /**
     * @param var0 original type: 'double'
     * @param var1 original type: 'double'
     * @param var2 original type: 'double'
     * @param var3 original type: 'double'
     * @return original return type: 'boolean'
     */
    containsSync(var0: java_lang_Double | number, var1: java_lang_Double | number, var2: java_lang_Double | number, var3: java_lang_Double | number): boolean;
    /**
     * @param var0 original type: 'java.awt.geom.Rectangle2D'
     * @return original return type: 'boolean'
     */
    contains(var0: java_awt_geom_Rectangle2D | null): Promise<boolean>;
    /**
     * @param var0 original type: 'java.awt.geom.Rectangle2D'
     * @return original return type: 'boolean'
     */
    containsSync(var0: java_awt_geom_Rectangle2D | null): boolean;
    /**
     * @param var0 original type: 'java.awt.geom.Point2D'
     * @return original return type: 'boolean'
     */
    contains(var0: java_awt_geom_Point2D | null): Promise<boolean>;
    /**
     * @param var0 original type: 'java.awt.geom.Point2D'
     * @return original return type: 'boolean'
     */
    containsSync(var0: java_awt_geom_Point2D | null): boolean;
    /**
     * @return original return type: 'java.awt.Rectangle'
     */
    getBounds(): Promise<Rectangle | null>;
    /**
     * @return original return type: 'java.awt.Rectangle'
     */
    getBoundsSync(): Rectangle | null;
    /**
     * @return original return type: 'java.awt.Point'
     */
    getLocation(): Promise<java_awt_Point | null>;
    /**
     * @return original return type: 'java.awt.Point'
     */
    getLocationSync(): java_awt_Point | null;
    /**
     * @return original return type: 'java.awt.Dimension'
     */
    getSize(): Promise<java_awt_Dimension | null>;
    /**
     * @return original return type: 'java.awt.Dimension'
     */
    getSizeSync(): java_awt_Dimension | null;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @return original return type: 'void'
     */
    grow(var0: java_lang_Integer | number, var1: java_lang_Integer | number): Promise<void>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @return original return type: 'void'
     */
    growSync(var0: java_lang_Integer | number, var1: java_lang_Integer | number): void;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @return original return type: 'void'
     */
    resize(var0: java_lang_Integer | number, var1: java_lang_Integer | number): Promise<void>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @return original return type: 'void'
     */
    resizeSync(var0: java_lang_Integer | number, var1: java_lang_Integer | number): void;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @return original return type: 'void'
     */
    move(var0: java_lang_Integer | number, var1: java_lang_Integer | number): Promise<void>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @return original return type: 'void'
     */
    moveSync(var0: java_lang_Integer | number, var1: java_lang_Integer | number): void;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @return original return type: 'void'
     */
    setSize(var0: java_lang_Integer | number, var1: java_lang_Integer | number): Promise<void>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @return original return type: 'void'
     */
    setSizeSync(var0: java_lang_Integer | number, var1: java_lang_Integer | number): void;
    /**
     * @param var0 original type: 'java.awt.Dimension'
     * @return original return type: 'void'
     */
    setSize(var0: java_awt_Dimension | null): Promise<void>;
    /**
     * @param var0 original type: 'java.awt.Dimension'
     * @return original return type: 'void'
     */
    setSizeSync(var0: java_awt_Dimension | null): void;
    /**
     * @param var0 original type: 'java.awt.Rectangle'
     * @return original return type: 'java.awt.Rectangle'
     */
    union(var0: RectangleClass | null): Promise<Rectangle | null>;
    /**
     * @param var0 original type: 'java.awt.Rectangle'
     * @return original return type: 'java.awt.Rectangle'
     */
    unionSync(var0: RectangleClass | null): Rectangle | null;
    /**
     * @param var0 original type: 'java.awt.geom.Rectangle2D'
     * @param var1 original type: 'java.awt.geom.Rectangle2D'
     * @param var2 original type: 'java.awt.geom.Rectangle2D'
     * @return original return type: 'void'
     */
    static union(var0: java_awt_geom_Rectangle2D | null, var1: java_awt_geom_Rectangle2D | null, var2: java_awt_geom_Rectangle2D | null): Promise<void>;
    /**
     * @param var0 original type: 'java.awt.geom.Rectangle2D'
     * @param var1 original type: 'java.awt.geom.Rectangle2D'
     * @param var2 original type: 'java.awt.geom.Rectangle2D'
     * @return original return type: 'void'
     */
    static unionSync(var0: java_awt_geom_Rectangle2D | null, var1: java_awt_geom_Rectangle2D | null, var2: java_awt_geom_Rectangle2D | null): void;
    /**
     * @return original return type: 'double'
     */
    getWidth(): Promise<number>;
    /**
     * @return original return type: 'double'
     */
    getWidthSync(): number;
    /**
     * @return original return type: 'double'
     */
    getHeight(): Promise<number>;
    /**
     * @return original return type: 'double'
     */
    getHeightSync(): number;
    /**
     * @param var0 original type: 'java.awt.Rectangle'
     * @return original return type: 'java.awt.Rectangle'
     */
    intersection(var0: RectangleClass | null): Promise<Rectangle | null>;
    /**
     * @param var0 original type: 'java.awt.Rectangle'
     * @return original return type: 'java.awt.Rectangle'
     */
    intersectionSync(var0: RectangleClass | null): Rectangle | null;
    /**
     * @return original return type: 'double'
     */
    getX(): Promise<number>;
    /**
     * @return original return type: 'double'
     */
    getXSync(): number;
    /**
     * @return original return type: 'double'
     */
    getY(): Promise<number>;
    /**
     * @return original return type: 'double'
     */
    getYSync(): number;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @param var3 original type: 'int'
     * @return original return type: 'void'
     */
    setBounds(var0: java_lang_Integer | number, var1: java_lang_Integer | number, var2: java_lang_Integer | number, var3: java_lang_Integer | number): Promise<void>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @param var3 original type: 'int'
     * @return original return type: 'void'
     */
    setBoundsSync(var0: java_lang_Integer | number, var1: java_lang_Integer | number, var2: java_lang_Integer | number, var3: java_lang_Integer | number): void;
    /**
     * @param var0 original type: 'java.awt.Rectangle'
     * @return original return type: 'void'
     */
    setBounds(var0: RectangleClass | null): Promise<void>;
    /**
     * @param var0 original type: 'java.awt.Rectangle'
     * @return original return type: 'void'
     */
    setBoundsSync(var0: RectangleClass | null): void;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @param var3 original type: 'int'
     * @return original return type: 'void'
     */
    reshape(var0: java_lang_Integer | number, var1: java_lang_Integer | number, var2: java_lang_Integer | number, var3: java_lang_Integer | number): Promise<void>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @param var3 original type: 'int'
     * @return original return type: 'void'
     */
    reshapeSync(var0: java_lang_Integer | number, var1: java_lang_Integer | number, var2: java_lang_Integer | number, var3: java_lang_Integer | number): void;
    /**
     * @param var0 original type: 'java.awt.Point'
     * @return original return type: 'void'
     */
    setLocation(var0: java_awt_Point | null): Promise<void>;
    /**
     * @param var0 original type: 'java.awt.Point'
     * @return original return type: 'void'
     */
    setLocationSync(var0: java_awt_Point | null): void;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @return original return type: 'void'
     */
    setLocation(var0: java_lang_Integer | number, var1: java_lang_Integer | number): Promise<void>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @return original return type: 'void'
     */
    setLocationSync(var0: java_lang_Integer | number, var1: java_lang_Integer | number): void;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @return original return type: 'boolean'
     */
    inside(var0: java_lang_Integer | number, var1: java_lang_Integer | number): Promise<boolean>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @return original return type: 'boolean'
     */
    insideSync(var0: java_lang_Integer | number, var1: java_lang_Integer | number): boolean;
    /**
     * @return original return type: 'java.awt.geom.Rectangle2D'
     */
    getBounds2D(): Promise<java_awt_geom_Rectangle2D | null>;
    /**
     * @return original return type: 'java.awt.geom.Rectangle2D'
     */
    getBounds2DSync(): java_awt_geom_Rectangle2D | null;
    /**
     * @param var0 original type: 'double'
     * @param var1 original type: 'double'
     * @param var2 original type: 'double'
     * @param var3 original type: 'double'
     * @return original return type: 'void'
     */
    setRect(var0: java_lang_Double | number, var1: java_lang_Double | number, var2: java_lang_Double | number, var3: java_lang_Double | number): Promise<void>;
    /**
     * @param var0 original type: 'double'
     * @param var1 original type: 'double'
     * @param var2 original type: 'double'
     * @param var3 original type: 'double'
     * @return original return type: 'void'
     */
    setRectSync(var0: java_lang_Double | number, var1: java_lang_Double | number, var2: java_lang_Double | number, var3: java_lang_Double | number): void;
    /**
     * @param var0 original type: 'java.awt.geom.Rectangle2D'
     * @return original return type: 'void'
     */
    setRect(var0: java_awt_geom_Rectangle2D | null): Promise<void>;
    /**
     * @param var0 original type: 'java.awt.geom.Rectangle2D'
     * @return original return type: 'void'
     */
    setRectSync(var0: java_awt_geom_Rectangle2D | null): void;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @return original return type: 'void'
     */
    translate(var0: java_lang_Integer | number, var1: java_lang_Integer | number): Promise<void>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @return original return type: 'void'
     */
    translateSync(var0: java_lang_Integer | number, var1: java_lang_Integer | number): void;
    /**
     * @param var0 original type: 'java.awt.Rectangle'
     * @return original return type: 'boolean'
     */
    intersects(var0: RectangleClass | null): Promise<boolean>;
    /**
     * @param var0 original type: 'java.awt.Rectangle'
     * @return original return type: 'boolean'
     */
    intersectsSync(var0: RectangleClass | null): boolean;
    /**
     * @param var0 original type: 'double'
     * @param var1 original type: 'double'
     * @param var2 original type: 'double'
     * @param var3 original type: 'double'
     * @return original return type: 'boolean'
     */
    intersects(var0: java_lang_Double | number, var1: java_lang_Double | number, var2: java_lang_Double | number, var3: java_lang_Double | number): Promise<boolean>;
    /**
     * @param var0 original type: 'double'
     * @param var1 original type: 'double'
     * @param var2 original type: 'double'
     * @param var3 original type: 'double'
     * @return original return type: 'boolean'
     */
    intersectsSync(var0: java_lang_Double | number, var1: java_lang_Double | number, var2: java_lang_Double | number, var3: java_lang_Double | number): boolean;
    /**
     * @param var0 original type: 'java.awt.geom.Rectangle2D'
     * @return original return type: 'boolean'
     */
    intersects(var0: java_awt_geom_Rectangle2D | null): Promise<boolean>;
    /**
     * @param var0 original type: 'java.awt.geom.Rectangle2D'
     * @return original return type: 'boolean'
     */
    intersectsSync(var0: java_awt_geom_Rectangle2D | null): boolean;
    /**
     * @param var0 original type: 'double'
     * @param var1 original type: 'double'
     * @return original return type: 'int'
     */
    outcode(var0: java_lang_Double | number, var1: java_lang_Double | number): Promise<number>;
    /**
     * @param var0 original type: 'double'
     * @param var1 original type: 'double'
     * @return original return type: 'int'
     */
    outcodeSync(var0: java_lang_Double | number, var1: java_lang_Double | number): number;
    /**
     * @param var0 original type: 'java.awt.geom.Point2D'
     * @return original return type: 'int'
     */
    outcode(var0: java_awt_geom_Point2D | null): Promise<number>;
    /**
     * @param var0 original type: 'java.awt.geom.Point2D'
     * @return original return type: 'int'
     */
    outcodeSync(var0: java_awt_geom_Point2D | null): number;
    /**
     * @param var0 original type: 'java.awt.geom.Rectangle2D'
     * @return original return type: 'java.awt.geom.Rectangle2D'
     */
    createIntersection(var0: java_awt_geom_Rectangle2D | null): Promise<java_awt_geom_Rectangle2D | null>;
    /**
     * @param var0 original type: 'java.awt.geom.Rectangle2D'
     * @return original return type: 'java.awt.geom.Rectangle2D'
     */
    createIntersectionSync(var0: java_awt_geom_Rectangle2D | null): java_awt_geom_Rectangle2D | null;
    /**
     * @param var0 original type: 'java.awt.geom.Rectangle2D'
     * @return original return type: 'java.awt.geom.Rectangle2D'
     */
    createUnion(var0: java_awt_geom_Rectangle2D | null): Promise<java_awt_geom_Rectangle2D | null>;
    /**
     * @param var0 original type: 'java.awt.geom.Rectangle2D'
     * @return original return type: 'java.awt.geom.Rectangle2D'
     */
    createUnionSync(var0: java_awt_geom_Rectangle2D | null): java_awt_geom_Rectangle2D | null;
    /**
     * @return original return type: 'int'
     */
    hashCode(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    hashCodeSync(): number;
    /**
     * @param var0 original type: 'java.awt.geom.Rectangle2D'
     * @param var1 original type: 'java.awt.geom.Rectangle2D'
     * @param var2 original type: 'java.awt.geom.Rectangle2D'
     * @return original return type: 'void'
     */
    static intersect(var0: java_awt_geom_Rectangle2D | null, var1: java_awt_geom_Rectangle2D | null, var2: java_awt_geom_Rectangle2D | null): Promise<void>;
    /**
     * @param var0 original type: 'java.awt.geom.Rectangle2D'
     * @param var1 original type: 'java.awt.geom.Rectangle2D'
     * @param var2 original type: 'java.awt.geom.Rectangle2D'
     * @return original return type: 'void'
     */
    static intersectSync(var0: java_awt_geom_Rectangle2D | null, var1: java_awt_geom_Rectangle2D | null, var2: java_awt_geom_Rectangle2D | null): void;
    /**
     * @param var0 original type: 'java.awt.geom.AffineTransform'
     * @return original return type: 'java.awt.geom.PathIterator'
     */
    getPathIterator(var0: java_awt_geom_AffineTransform | null): Promise<java_awt_geom_PathIterator | null>;
    /**
     * @param var0 original type: 'java.awt.geom.AffineTransform'
     * @return original return type: 'java.awt.geom.PathIterator'
     */
    getPathIteratorSync(var0: java_awt_geom_AffineTransform | null): java_awt_geom_PathIterator | null;
    /**
     * @param var0 original type: 'java.awt.geom.AffineTransform'
     * @param var1 original type: 'double'
     * @return original return type: 'java.awt.geom.PathIterator'
     */
    getPathIterator(var0: java_awt_geom_AffineTransform | null, var1: java_lang_Double | number): Promise<java_awt_geom_PathIterator | null>;
    /**
     * @param var0 original type: 'java.awt.geom.AffineTransform'
     * @param var1 original type: 'double'
     * @return original return type: 'java.awt.geom.PathIterator'
     */
    getPathIteratorSync(var0: java_awt_geom_AffineTransform | null, var1: java_lang_Double | number): java_awt_geom_PathIterator | null;
    /**
     * @param var0 original type: 'double'
     * @param var1 original type: 'double'
     * @param var2 original type: 'double'
     * @param var3 original type: 'double'
     * @return original return type: 'boolean'
     */
    intersectsLine(var0: java_lang_Double | number, var1: java_lang_Double | number, var2: java_lang_Double | number, var3: java_lang_Double | number): Promise<boolean>;
    /**
     * @param var0 original type: 'double'
     * @param var1 original type: 'double'
     * @param var2 original type: 'double'
     * @param var3 original type: 'double'
     * @return original return type: 'boolean'
     */
    intersectsLineSync(var0: java_lang_Double | number, var1: java_lang_Double | number, var2: java_lang_Double | number, var3: java_lang_Double | number): boolean;
    /**
     * @param var0 original type: 'java.awt.geom.Line2D'
     * @return original return type: 'boolean'
     */
    intersectsLine(var0: java_awt_geom_Line2D | null): Promise<boolean>;
    /**
     * @param var0 original type: 'java.awt.geom.Line2D'
     * @return original return type: 'boolean'
     */
    intersectsLineSync(var0: java_awt_geom_Line2D | null): boolean;
    /**
     * @param var0 original type: 'double'
     * @param var1 original type: 'double'
     * @param var2 original type: 'double'
     * @param var3 original type: 'double'
     * @return original return type: 'void'
     */
    setFrame(var0: java_lang_Double | number, var1: java_lang_Double | number, var2: java_lang_Double | number, var3: java_lang_Double | number): Promise<void>;
    /**
     * @param var0 original type: 'double'
     * @param var1 original type: 'double'
     * @param var2 original type: 'double'
     * @param var3 original type: 'double'
     * @return original return type: 'void'
     */
    setFrameSync(var0: java_lang_Double | number, var1: java_lang_Double | number, var2: java_lang_Double | number, var3: java_lang_Double | number): void;
    /**
     * @param var0 original type: 'java.awt.geom.Rectangle2D'
     * @return original return type: 'void'
     */
    setFrame(var0: java_awt_geom_Rectangle2D | null): Promise<void>;
    /**
     * @param var0 original type: 'java.awt.geom.Rectangle2D'
     * @return original return type: 'void'
     */
    setFrameSync(var0: java_awt_geom_Rectangle2D | null): void;
    /**
     * @param var0 original type: 'java.awt.geom.Point2D'
     * @param var1 original type: 'java.awt.geom.Dimension2D'
     * @return original return type: 'void'
     */
    setFrame(var0: java_awt_geom_Point2D | null, var1: java_awt_geom_Dimension2D | null): Promise<void>;
    /**
     * @param var0 original type: 'java.awt.geom.Point2D'
     * @param var1 original type: 'java.awt.geom.Dimension2D'
     * @return original return type: 'void'
     */
    setFrameSync(var0: java_awt_geom_Point2D | null, var1: java_awt_geom_Dimension2D | null): void;
    /**
     * @return original return type: 'java.lang.Object'
     */
    clone(): Promise<BasicOrJavaType | null>;
    /**
     * @return original return type: 'java.lang.Object'
     */
    cloneSync(): BasicOrJavaType | null;
    /**
     * @return original return type: 'double'
     */
    getMinX(): Promise<number>;
    /**
     * @return original return type: 'double'
     */
    getMinXSync(): number;
    /**
     * @return original return type: 'double'
     */
    getMinY(): Promise<number>;
    /**
     * @return original return type: 'double'
     */
    getMinYSync(): number;
    /**
     * @return original return type: 'double'
     */
    getMaxX(): Promise<number>;
    /**
     * @return original return type: 'double'
     */
    getMaxXSync(): number;
    /**
     * @return original return type: 'double'
     */
    getMaxY(): Promise<number>;
    /**
     * @return original return type: 'double'
     */
    getMaxYSync(): number;
    /**
     * @param var0 original type: 'java.awt.geom.Point2D'
     * @param var1 original type: 'java.awt.geom.Point2D'
     * @return original return type: 'void'
     */
    setFrameFromDiagonal(var0: java_awt_geom_Point2D | null, var1: java_awt_geom_Point2D | null): Promise<void>;
    /**
     * @param var0 original type: 'java.awt.geom.Point2D'
     * @param var1 original type: 'java.awt.geom.Point2D'
     * @return original return type: 'void'
     */
    setFrameFromDiagonalSync(var0: java_awt_geom_Point2D | null, var1: java_awt_geom_Point2D | null): void;
    /**
     * @param var0 original type: 'double'
     * @param var1 original type: 'double'
     * @param var2 original type: 'double'
     * @param var3 original type: 'double'
     * @return original return type: 'void'
     */
    setFrameFromDiagonal(var0: java_lang_Double | number, var1: java_lang_Double | number, var2: java_lang_Double | number, var3: java_lang_Double | number): Promise<void>;
    /**
     * @param var0 original type: 'double'
     * @param var1 original type: 'double'
     * @param var2 original type: 'double'
     * @param var3 original type: 'double'
     * @return original return type: 'void'
     */
    setFrameFromDiagonalSync(var0: java_lang_Double | number, var1: java_lang_Double | number, var2: java_lang_Double | number, var3: java_lang_Double | number): void;
    /**
     * @param var0 original type: 'java.awt.geom.Point2D'
     * @param var1 original type: 'java.awt.geom.Point2D'
     * @return original return type: 'void'
     */
    setFrameFromCenter(var0: java_awt_geom_Point2D | null, var1: java_awt_geom_Point2D | null): Promise<void>;
    /**
     * @param var0 original type: 'java.awt.geom.Point2D'
     * @param var1 original type: 'java.awt.geom.Point2D'
     * @return original return type: 'void'
     */
    setFrameFromCenterSync(var0: java_awt_geom_Point2D | null, var1: java_awt_geom_Point2D | null): void;
    /**
     * @param var0 original type: 'double'
     * @param var1 original type: 'double'
     * @param var2 original type: 'double'
     * @param var3 original type: 'double'
     * @return original return type: 'void'
     */
    setFrameFromCenter(var0: java_lang_Double | number, var1: java_lang_Double | number, var2: java_lang_Double | number, var3: java_lang_Double | number): Promise<void>;
    /**
     * @param var0 original type: 'double'
     * @param var1 original type: 'double'
     * @param var2 original type: 'double'
     * @param var3 original type: 'double'
     * @return original return type: 'void'
     */
    setFrameFromCenterSync(var0: java_lang_Double | number, var1: java_lang_Double | number, var2: java_lang_Double | number, var3: java_lang_Double | number): void;
    /**
     * @return original return type: 'double'
     */
    getCenterX(): Promise<number>;
    /**
     * @return original return type: 'double'
     */
    getCenterXSync(): number;
    /**
     * @return original return type: 'double'
     */
    getCenterY(): Promise<number>;
    /**
     * @return original return type: 'double'
     */
    getCenterYSync(): number;
    /**
     * @return original return type: 'java.awt.geom.Rectangle2D'
     */
    getFrame(): Promise<java_awt_geom_Rectangle2D | null>;
    /**
     * @return original return type: 'java.awt.geom.Rectangle2D'
     */
    getFrameSync(): java_awt_geom_Rectangle2D | null;
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
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @param var3 original type: 'int'
     * @return original return type: 'java.awt.Rectangle'
     */
    static newInstance(var0: java_lang_Integer | number, var1: java_lang_Integer | number, var2: java_lang_Integer | number, var3: java_lang_Integer | number): Promise<Rectangle>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @return original return type: 'java.awt.Rectangle'
     */
    static newInstance(var0: java_lang_Integer | number, var1: java_lang_Integer | number): Promise<Rectangle>;
    /**
     * @param var0 original type: 'java.awt.Dimension'
     * @return original return type: 'java.awt.Rectangle'
     */
    static newInstance(var0: java_awt_Dimension | null): Promise<Rectangle>;
    /**
     * @param var0 original type: 'java.awt.Point'
     * @return original return type: 'java.awt.Rectangle'
     */
    static newInstance(var0: java_awt_Point | null): Promise<Rectangle>;
    /**
     * @param var0 original type: 'java.awt.Rectangle'
     * @return original return type: 'java.awt.Rectangle'
     */
    static newInstance(var0: RectangleClass | null): Promise<Rectangle>;
    /**
     * @return original return type: 'java.awt.Rectangle'
     */
    static newInstance(): Promise<Rectangle>;
    /**
     * @param var0 original type: 'java.awt.Point'
     * @param var1 original type: 'java.awt.Dimension'
     * @return original return type: 'java.awt.Rectangle'
     */
    static newInstance(var0: java_awt_Point | null, var1: java_awt_Dimension | null): Promise<Rectangle>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @param var3 original type: 'int'
     */
    constructor(var0: java_lang_Integer | number, var1: java_lang_Integer | number, var2: java_lang_Integer | number, var3: java_lang_Integer | number);
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     */
    constructor(var0: java_lang_Integer | number, var1: java_lang_Integer | number);
    /**
     * @param var0 original type: 'java.awt.Dimension'
     */
    constructor(var0: java_awt_Dimension | null);
    /**
     * @param var0 original type: 'java.awt.Point'
     */
    constructor(var0: java_awt_Point | null);
    /**
     * @param var0 original type: 'java.awt.Rectangle'
     */
    constructor(var0: RectangleClass | null);
    constructor();
    /**
     * @param var0 original type: 'java.awt.Point'
     * @param var1 original type: 'java.awt.Dimension'
     */
    constructor(var0: java_awt_Point | null, var1: java_awt_Dimension | null);
}
declare const Rectangle_base: typeof RectangleClass;
/**
 * Class java.awt.Rectangle.
 *
 * This actually imports the java class for further use.
 * The class {@link RectangleClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class Rectangle extends Rectangle_base {
}
export default Rectangle;
//# sourceMappingURL=Rectangle.d.ts.map