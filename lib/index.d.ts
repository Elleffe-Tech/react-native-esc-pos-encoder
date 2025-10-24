import { Canvas } from 'canvas';
type Codepage = 'cp437' | 'cp737' | 'cp850' | 'cp775' | 'cp852' | 'cp855' | 'cp857' | 'cp858' | 'cp860' | 'cp861' | 'cp862' | 'cp863' | 'cp864' | 'cp865' | 'cp866' | 'cp869' | 'cp936' | 'cp949' | 'cp950' | 'cp1252' | 'iso88596' | 'shiftjis' | 'windows874' | 'windows1250' | 'windows1251' | 'windows1252' | 'windows1253' | 'windows1254' | 'windows1255' | 'windows1256' | 'windows1257' | 'windows1258';
type Alignment = 'left' | 'center' | 'right';
type Size = 'small' | 'normal' | 'wide' | 'tall' | 'double';
type Symbology = 'upca' | 'upce' | 'ean13' | 'ean8' | 'code39' | 'coda39' | 'itf' | 'codabar' | 'code93' | 'code128' | 'gs1-128' | 'gs1-databar-omni' | 'gs1-databar-truncated' | 'gs1-databar-limited' | 'gs1-databar-expanded' | 'code128-auto';
type ErrorLevel = 'l' | 'm' | 'q' | 'h';
type CutType = 'full' | 'partial';
type DitherAlgorithm = 'threshold' | 'bayer' | 'floydsteinberg' | 'atkinson';
/**
 * Create a byte stream based on commands for ESC/POS printers
 */
export default class EscPosEncoder {
    private _buffer;
    private _codepage;
    private _state;
    /**
     * Create a new object
     */
    constructor();
    /**
     * Reset the state of the object
     */
    private _reset;
    /**
     * Encode a string with the current code page
     *
     * @param value String to encode
     * @return Encoded string as a Buffer
     */
    private _encode;
    /**
     * Add commands to the buffer
     *
     * @param value An array of numbers, arrays, buffers or Uint8Arrays to add to the buffer
     */
    private _queue;
    /**
     * Initialize the printer
     *
     * @return Return the object, for easy chaining commands
     */
    initialize(): this;
    /**
     * Change the code page
     *
     * @param value The codepage that we set the printer to
     * @return Return the object, for easy chaining commands
     */
    codepage(value: Codepage): this;
    /**
     * Print text
     *
     * @param value Text that needs to be printed
     * @param wrap Wrap text after this many positions
     * @return Return the object, for easy chaining commands
     */
    text(value: string, wrap?: number): this;
    /**
     * Print a newline
     *
     * @return Return the object, for easy chaining commands
     */
    newline(): this;
    /**
     * Print text, followed by a newline
     *
     * @param value Text that needs to be printed
     * @param wrap Wrap text after this many positions
     * @return Return the object, for easy chaining commands
     */
    line(value?: string, wrap?: number): this;
    /**
     * Underline text
     *
     * @param value true to turn on underline, false to turn off, or 2 for double underline
     * @return Return the object, for easy chaining commands
     */
    underline(value?: boolean | number): this;
    /**
     * Italic text
     *
     * @param value true to turn on italic, false to turn off
     * @return Return the object, for easy chaining commands
     */
    italic(value?: boolean): this;
    /**
     * Bold text
     *
     * @param value true to turn on bold, false to turn off, or 2 for double underline
     * @return Return the object, for easy chaining commands
     */
    bold(value?: boolean | number): this;
    /**
     * Change text size
     *
     * @param e small, normal, wide, tall, double
     * @return Return the object, for easy chaining commands
     */
    size(e: Size): this;
    /**
     * Change text alignment
     *
     * @param value left, center or right
     * @return Return the object, for easy chaining commands
     */
    align(value: Alignment): this;
    /**
     * Barcode
     *
     * @param value the value of the barcode
     * @param symbology the type of the barcode
     * @param height height of the barcode
     * @return Return the object, for easy chaining commands
     */
    barcode(value: string, symbology: Symbology, height: number): this;
    /**
     * QR code
     *
     * @param value the value of the qr code
     * @param model model of the qrcode, either 1 or 2
     * @param size size of the qrcode, a value between 1 and 8
     * @param errorlevel the amount of error correction used, either 'l', 'm', 'q', 'h'
     * @return Return the object, for easy chaining commands
     */
    qrcode(value: string, model?: 1 | 2, size?: number, errorlevel?: ErrorLevel): this;
    /**
     * Image
     *
     * @param element an element, like a canvas or image that needs to be printed
     * @param width width of the image on the printer
     * @param height height of the image on the printer
     * @param algorithm the dithering algorithm for making the image black and white
     * @param threshold threshold for the dithering algorithm
     * @return Return the object, for easy chaining commands
     */
    image(element: Canvas | any, width: number, height: number, algorithm?: DitherAlgorithm, threshold?: number): this;
    /**
     * Cut paper
     *
     * @param value full or partial. When not specified a full cut will be assumed
     * @return Return the object, for easy chaining commands
     */
    cut(value?: CutType): this;
    /**
     * Add raw printer commands
     *
     * @param data raw bytes to be included
     * @return Return the object, for easy chaining commands
     */
    raw(data: (number | Uint8Array | Buffer)[]): this;
    /**
     * Encode all previous commands
     *
     * @return Return the encoded bytes
     */
    encode(): Uint8Array;
}
export {};
