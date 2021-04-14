var toolio = (function (exports) {
    'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    var DEFAULT_BACKGROUND = '#6d6d6d';
    var DEFAULT_COLOR = 'white';
    var DEFAULT_PLACEMENT = 'top';
    var DEFAULT_PADDING = '.25rem .5rem';
    var DEFUALT_BORDERRADIUS = '3px';
    var DEFAULT_FONTSIZE = '1rem';
    var DEFAULT_FONTWEIGHT = 'normal';
    var DEFAULT_OPTIONS = { visibility: 'hidden', position: 'absolute', transition: '.3s ease', opacity: 0, zIndex: 999 };
    var Toolio = /** @class */ (function () {
        function Toolio(opts) {
            this._uniqueId = function () { return Math.random().toString(36).substr(2, 9); };
            this.options = __assign({ placement: DEFAULT_PLACEMENT, color: DEFAULT_COLOR, background: DEFAULT_BACKGROUND, padding: DEFAULT_PADDING, borderRadius: DEFUALT_BORDERRADIUS, fontSize: DEFAULT_FONTSIZE, fontWeight: DEFAULT_FONTWEIGHT }, opts);
            this.debounceTimer = null;
            this.init();
        }
        Toolio.prototype.init = function () {
            var _tooltips = document.querySelectorAll('[toolio]');
            for (var i = 0; i < _tooltips.length; i++) {
                var _tooltip = _tooltips[i];
                var value = _tooltip.getAttribute('toolio');
                if (!value)
                    return; // Guard
                var options = _tooltip.getAttribute('toolio-options');
                var opts = options ? JSON.parse(options) : null;
                this.createItem(_tooltip, value, opts);
            }
        };
        Toolio.prototype.createItem = function (elm, value, opts) {
            var _a;
            var uniqueId = '_t-' + this._uniqueId();
            elm.style.position = 'relative';
            elm.setAttribute('role', 'toolio');
            elm.setAttribute('aria-describedby', uniqueId);
            elm.tabIndex = 0; // Tab-able at elements relative position in document
            var template = document.createElement('span');
            template.id = uniqueId;
            template.setAttribute('aria-hidden', 'true');
            var styleObj = this._generateStyleObject(Object.assign({}, this.options, opts));
            this.applyElementStyling(template, styleObj);
            template.innerHTML = value;
            elm.appendChild(template);
            this._assignEvents(elm, template, (_a = opts === null || opts === void 0 ? void 0 : opts.placement) !== null && _a !== void 0 ? _a : DEFAULT_PLACEMENT, ['mouseenter', 'focus'], ['mouseleave', 'blur']);
        };
        Toolio.prototype.applyElementStyling = function (element, style) {
            for (var property in style) {
                element.style[property] = style[property];
            }
        };
        Toolio.prototype._generateStyleObject = function (opts) {
            var placementObj = (function (_a) {
                var transform = _a.transform, top = _a.top, right = _a.right, bottom = _a.bottom, left = _a.left;
                return ({ transform: transform, top: top, right: right, bottom: bottom, left: left });
            })(this._position(opts.placement, true));
            delete opts.placement;
            return Object.assign({}, placementObj, opts, DEFAULT_OPTIONS);
        };
        Toolio.prototype._position = function (align, initialState) {
            if (initialState === void 0) { initialState = false; }
            if (initialState) {
                if (align === 'top' || !align)
                    return { top: 0, left: '50%', transform: 'translate(-50%, -100%)' };
                if (align === 'right')
                    return { right: 0, top: '50%', transform: 'translate(100%, -50%)' };
                if (align === 'bottom')
                    return { bottom: 0, left: '50%', transform: 'translate(-50%, 100%)' };
                if (align === 'left')
                    return { left: 0, top: '50%', transform: 'translate(-100%, -50%)' };
            }
            else {
                if (align === 'top' || !align)
                    return { top: 0, left: '50%', transform: 'translate(-50%, calc(-100% - .5rem))' };
                if (align === 'right')
                    return { right: 0, transform: 'translate(calc(100% + .5rem), -50%)' };
                if (align === 'bottom')
                    return { bottom: 0, transform: 'translate(-50%, calc(100% + .5rem))' };
                if (align === 'left')
                    return { left: 0, transform: 'translate(calc(-100% - .5rem), -50%)' };
            }
            return null;
        };
        Toolio.prototype._assignEvents = function (elm, template, placement, initialEvents, endEvents) {
            var _this = this;
            initialEvents.forEach(function (evt, index) {
                elm.addEventListener(evt, (function () { _this.showTip(template, placement); }));
                elm.addEventListener(endEvents[index], (function () { _this.hideTip(template, placement); }));
            });
        };
        Toolio.prototype.showTip = function (elm, placement) {
            var _this = this;
            if (this.debounceTimer) {
                clearTimeout(this.debounceTimer);
            }
            var placementObj = this._position(placement);
            this.debounceTimer = setTimeout(function () {
                _this.applyElementStyling(elm, __assign({ visibility: 'visible', opacity: 1 }, placementObj));
            }, 333);
        };
        Toolio.prototype.hideTip = function (elm, placement) {
            var _this = this;
            if (this.debounceTimer) {
                clearTimeout(this.debounceTimer);
            }
            var placementObj = this._position(placement, true);
            this.debounceTimer = setTimeout(function () {
                _this.applyElementStyling(elm, __assign({ visibility: 'hidden', opacity: 0 }, placementObj));
            }, 333);
        };
        return Toolio;
    }());

    exports.Toolio = Toolio;

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

}({}));
