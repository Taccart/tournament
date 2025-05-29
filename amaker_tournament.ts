
enum LogLevel {
        //% block="info"
        Info,
        //% block="debug"
        Debug,
        //% block="warning"
        Warning,
        //% block="error"
        Error
    }


enum CommunicationChannel {
        //% block="radio"
        Radio,
        //% block="led"
        Led,
        //% block="serial"
        Serial
    }


enum NeoPixelColors {
    //% block=red
    Red = 0xFF0000
}

/**
 * Different modes for RGB or RGB+W NeoPixel strips
 */
enum NeoPixelMode {
    //% block="RGB (GRB format)"
    RGB = 1

}

/**
 * Functions to operate NeoPixel strips.
 */
//% weight=5 color=#2699BF icon="\uf110"
namespace neopixel {
    

        
    /**
     * A NeoPixel strip
     */
    export class Strip {
        /**
         * Shows all LEDs to a given color (range 0-255 for r, g, b).
         * @param rgb RGB color of the LED
         */
        //% blockId="neopixel_set_strip_color" block="%strip|show color %rgb=neopixel_colors"
        //% strip.defl=strip
        //% weight=85 blockGap=8
        //% parts="neopixel"
        showColor(rgb: number) {

        }


    }


    /**
    * Emit a log message via communication channel
    * @param msg string
    * @param lvl LogLevel
    */    
    //% blockId=log block="message %msg|level %lvl"
    export function emit_log_message ( message: string, level: number = LogLevel.Info) {
        }

    /**
     * Gets the RGB value of a known color
     advanced true
    */
    //% weight=2 blockGap=8
    //% blockId="neopixel_colors" block="%color"
    export function colors(color: NeoPixelColors): number {
        return color;
    }


    /**
     * Converts a hue saturation luminosity value into a RGB color
     * @param h hue from 0 to 360
     * @param s saturation from 0 to 99
     * @param l luminosity from 0 to 99
     */
    //% blockId=neopixelHSL block="hue %h|saturation %s|luminosity %l"
    export function hsl(h: number, s: number, l: number): number {
        return 0
    }

    export enum HueInterpolationDirection {
        Clockwise,
        CounterClockwise,
        Shortest
    }
}
