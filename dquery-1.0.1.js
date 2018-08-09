/*!
 * dQuery JavaScript Library v1.0.1
 * http://jquery.com/
 *
 * Depends Sizzle.js
 * http://sizzlejs.com/
 *
 * Author: wanghao
 * Company: HLW
 *
 * Date: 2018-05-20T17:23Z
 */

//定义一个匿名函数，马上调用它，包起来调用的时候可以创建闭包
(function( global, factory ) {
    //BOM 浏览器的运行环境
    //不仅可以运行在BOM环境，还可以运行在其它环境下面比如node
    if ( typeof module === "object" && typeof module.exports === "object" ) {
        // JS开发规范 AMD CMD
        // For CommonJS and CommonJS-like environments where a proper `window`
        // is present, execute the factory and get jQuery.
        // For environments that do not have a `window` with a `document`
        // (such as Node.js), expose a factory as module.exports.
        // This accentuates the need for the creation of a real `window`.
        // e.g. var jQuery = require("jquery")(window);
        // See ticket #14549 for more info.
        module.exports = global.document ?
            factory( global, true ) :
            function( w ) {
                if ( !w.document ) {
                    throw new Error( "jQuery requires a window with a document" );
                }
                return factory( w );
            };
    } else {
        //等同于factory(global, false);
        factory( global );
    }





// 有可能运行的环境不是浏览器，还有可能是其它环境，如果运行在浏览器环境时：window和this是一样的
}(typeof window !== "undefined" ? window : this, function( window, noGlobal ) {



    var version = "1.0.1",

    // Define a local copy of jQuery
    jQuery = function( selector, context ) {

        // The jQuery object is actually just the init constructor 'enhanced'
        // Need init if jQuery is called (just allow error to be thrown if not included)
        return new jQuery.fn.init( selector, context );
    };
    jQuery.fn = jQuery.prototype = {
        init: function (selector, context ) {
            return jQuery.makeArray( selector, context || document)
        },
        each: function (func) {
            for (var i = 0; i < this.length; i++) {
                func.call(this, i, this[i]);
            }
            return this;
        },
        addClass: function (className) {
            return this.each(function(index, element) {
                element.className += ' ' + className;
            });
        },
        removeClass: function (className) {

        }


    };

    jQuery.makeArray = function ( selector, context) {
        var $eles = new Sizzle(selector, context);
        $eles.__proto__ = jQuery.fn;
        $eles.context = context;
        $eles.prevObject = arguments.callee;
        return $eles;
    }





    // Expose jQuery and $ identifiers, even in AMD
    // (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
    // and CommonJS for browser emulators (#13566)
    if ( !noGlobal ) {
        // 如果能进来，说明运行在BOM环境，一定有window对象
        // jQuery一定是核心功能对象 
        window.jQuery = window.$ = jQuery;
    }
    return jQuery;
}));

