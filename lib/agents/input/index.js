'use strict';

const BaseAgent = require('../base');

class InputAgent extends BaseAgent {
  constructor() {
    super();
  }

  /**
   * Dispatches a key event to the page.
   * 
   * @param {string keyDown|keyUp|rawKeyDown|char} type Type of the key event.
   * @param {integer=} modifiers Bit field representing pressed modifier keys. Alt=1, Ctrl=2, Meta/Command=4, Shift=8 (default: 0).
   * @param {number=} timestamp Time at which the event occurred. Measured in UTC time in seconds since January 1, 1970 (default: current time).
   * @param {string=} text Text as generated by processing a virtual key code with a keyboard layout. Not needed for for <code>keyUp</code> and <code>rawKeyDown</code> events (default: "")
   * @param {string=} unmodifiedText Text that would have been generated by the keyboard if no modifiers were pressed (except for shift). Useful for shortcut (accelerator) key handling (default: "").
   * @param {string=} keyIdentifier Unique key identifier (e.g., 'U+0041') (default: "").
   * @param {string=} code Unique DOM defined string value for each physical key (e.g., 'KeyA') (default: "").
   * @param {string=} key Unique DOM defined string value describing the meaning of the key in the context of active modifiers, keyboard layout, etc (e.g., 'AltGr') (default: "").
   * @param {integer=} windowsVirtualKeyCode Windows virtual key code (default: 0).
   * @param {integer=} nativeVirtualKeyCode Native virtual key code (default: 0).
   * @param {boolean=} autoRepeat Whether the event was generated from auto repeat (default: false).
   * @param {boolean=} isKeypad Whether the event was generated from the keypad (default: false).
   * @param {boolean=} isSystemKey Whether the event was a system key event (default: false).
   */
  dispatchKeyEvent() {
    throw new Error('Not implemented');
  }

  /**
   * Dispatches a mouse event to the page.
   * 
   * @param {string mousePressed|mouseReleased|mouseMoved} type Type of the mouse event.
   * @param {integer} x X coordinate of the event relative to the main frame's viewport.
   * @param {integer} y Y coordinate of the event relative to the main frame's viewport. 0 refers to the top of the viewport and Y increases as it proceeds towards the bottom of the viewport.
   * @param {integer=} modifiers Bit field representing pressed modifier keys. Alt=1, Ctrl=2, Meta/Command=4, Shift=8 (default: 0).
   * @param {number=} timestamp Time at which the event occurred. Measured in UTC time in seconds since January 1, 1970 (default: current time).
   * @param {string none|left|middle|right=} button Mouse button (default: "none").
   * @param {integer=} clickCount Number of times the mouse button was clicked (default: 0).
   */
  dispatchMouseEvent() {
    throw new Error('Not implemented');
  }

  /**
   * Dispatches a touch event to the page.
   * 
   * @param {string touchStart|touchEnd|touchMove} type Type of the touch event.
   * @param {Array.<TouchPoint>} touchPoints Touch points.
   * @param {integer=} modifiers Bit field representing pressed modifier keys. Alt=1, Ctrl=2, Meta/Command=4, Shift=8 (default: 0).
   * @param {number=} timestamp Time at which the event occurred. Measured in UTC time in seconds since January 1, 1970 (default: current time).
   */
  dispatchTouchEvent() {
    throw new Error('Not implemented');
  }

  /**
   * Emulates touch event from the mouse event parameters.
   * 
   * @param {string mousePressed|mouseReleased|mouseMoved|mouseWheel} type Type of the mouse event.
   * @param {integer} x X coordinate of the mouse pointer in DIP.
   * @param {integer} y Y coordinate of the mouse pointer in DIP.
   * @param {number} timestamp Time at which the event occurred. Measured in UTC time in seconds since January 1, 1970.
   * @param {string none|left|middle|right} button Mouse button.
   * @param {number=} deltaX X delta in DIP for mouse wheel event (default: 0).
   * @param {number=} deltaY Y delta in DIP for mouse wheel event (default: 0).
   * @param {integer=} modifiers Bit field representing pressed modifier keys. Alt=1, Ctrl=2, Meta/Command=4, Shift=8 (default: 0).
   * @param {integer=} clickCount Number of times the mouse button was clicked (default: 0).
   */
  emulateTouchFromMouseEvent() {
    throw new Error('Not implemented');
  }

  /**
   * Synthesizes a pinch gesture over a time period by issuing appropriate touch events.
   * 
   * @param {integer} x X coordinate of the start of the gesture in CSS pixels.
   * @param {integer} y Y coordinate of the start of the gesture in CSS pixels.
   * @param {number} scaleFactor Relative scale factor after zooming (>1.0 zooms in, <1.0 zooms out).
   * @param {integer=} relativeSpeed Relative pointer speed in pixels per second (default: 800).
   * @param {GestureSourceType=} gestureSourceType Which type of input events to be generated (default: 'default', which queries the platform for the preferred input type).
   */
  synthesizePinchGesture() {
    throw new Error('Not implemented');
  }

  /**
   * Synthesizes a scroll gesture over a time period by issuing appropriate touch events.
   * 
   * @param {integer} x X coordinate of the start of the gesture in CSS pixels.
   * @param {integer} y Y coordinate of the start of the gesture in CSS pixels.
   * @param {integer=} xDistance The distance to scroll along the X axis (positive to scroll left).
   * @param {integer=} yDistance The distance to scroll along the Y axis (positive to scroll up).
   * @param {integer=} xOverscroll The number of additional pixels to scroll back along the X axis, in addition to the given distance.
   * @param {integer=} yOverscroll The number of additional pixels to scroll back along the Y axis, in addition to the given distance.
   * @param {boolean=} preventFling Prevent fling (default: true).
   * @param {integer=} speed Swipe speed in pixels per second (default: 800).
   * @param {GestureSourceType=} gestureSourceType Which type of input events to be generated (default: 'default', which queries the platform for the preferred input type).
   */
  synthesizeScrollGesture() {
    throw new Error('Not implemented');
  }

  /**
   * Synthesizes a tap gesture over a time period by issuing appropriate touch events.
   * 
   * @param {integer} x X coordinate of the start of the gesture in CSS pixels.
   * @param {integer} y Y coordinate of the start of the gesture in CSS pixels.
   * @param {integer=} duration Duration between touchdown and touchup events in ms (default: 50).
   * @param {integer=} tapCount Number of times to perform the tap (e.g. 2 for double tap, default: 1).
   * @param {GestureSourceType=} gestureSourceType Which type of input events to be generated (default: 'default', which queries the platform for the preferred input type).
   */
  synthesizeTapGesture() {
    throw new Error('Not implemented');
  }
}

module.exports = InputAgent;