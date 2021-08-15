/******/ (function(modules) { // webpackBootstrap
/******/ 	// shortcut for better minimizing
/******/ 	var exports = "exports";
/******/ 	
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/ 	
/******/ 	// The require function
/******/ 	function require(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId][exports];
/******/ 		
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/ 		
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module[exports], module, module[exports], require);
/******/ 		
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 		
/******/ 		// Return the exports of the module
/******/ 		return module[exports];
/******/ 	}
/******/ 	
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	require.modules = modules;
/******/ 	
/******/ 	// expose the module cache
/******/ 	require.cache = installedModules;
/******/ 	
/******/ 	// __webpack_public_path__
/******/ 	require.p = "/assets/";
/******/ 	
/******/ 	
/******/ 	// Load entry module and return exports
/******/ 	return require(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, require) {

	"use strict";

	var path = require(3);

	require(2);

	require(4);
	require(6);

	var portfolio = require(8);

	var content = '';
	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
	    for (var _iterator = portfolio[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	        var obj = _step.value;

	        content += '<div class="row info-item"><div class="col-lg-2">';
	        // left part
	        content += '<span>' + obj.date + '</span>';

	        content += '</div><div class="col-lg-7">';
	        // middle part
	        content += '<div class="header-2">' + obj.name + '</div>';
	        content += '<p>' + obj.description + '</p>';
	        if (obj.media != undefined) {
	            content += '<a href="' + obj.media[0].link + '">' + obj.media[0].title + '</a>';
	        }

	        content += '</div><div class="col-lg-3">';
	        // right part
	        if (obj.image != undefined) {
	            content += '<img src="' + require(1)("./" + obj.image) + '"/>';
	        }

	        content += '</div></div>';
	    }
	} catch (err) {
	    _didIteratorError = true;
	    _iteratorError = err;
	} finally {
	    try {
	        if (!_iteratorNormalCompletion && _iterator.return) {
	            _iterator.return();
	        }
	    } finally {
	        if (_didIteratorError) {
	            throw _iteratorError;
	        }
	    }
	}

	$('#portfolio-container').html(content);

	$(function () {
	    $(".element").typed({
	        strings: ['Hello!', 'I am Andy', 'I am a C++ programmer', 'I am a Python programmer', 'I love analyzing data', 'I love watching movie', 'Thanks for visiting :)', ''],
	        typeSpeed: 50,
	        backSpeed: 10,
	        cursorChar: "_"
	    });
	});

/***/ },
/* 1 */
/***/ function(module, exports, require) {

	var map = {
		"./css/athena": 6,
		"./css/athena.scss": 6,
		"./css/athena/_base": 9,
		"./css/athena/_base.scss": 9,
		"./css/athena/_button": 11,
		"./css/athena/_button.scss": 11,
		"./css/athena/_icon-stack": 13,
		"./css/athena/_icon-stack.scss": 13,
		"./css/athena/_image": 15,
		"./css/athena/_image.scss": 15,
		"./css/main": 4,
		"./css/main.scss": 4,
		"./data/portfolio": 8,
		"./data/portfolio.json": 8,
		"./img/avatar.jpg": 20,
		"./img/bird/logo.png": 21,
		"./img/fakebook/logo.png": 22,
		"./img/fitmaniac/logo.png": 23,
		"./img/hunter/logo.png": 24,
		"./img/ismp/logo.png": 25,
		"./img/portalite/logo.png": 26,
		"./img/ptt/logo.png": 27,
		"./img/video/logo.png": 28,
		"./js/typed.custom": 2,
		"./js/typed.custom.js": 2
	};
	function webpackContext(req) {
		return require(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;


/***/ },
/* 2 */
/***/ function(module, exports, require) {

	"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	// The MIT License (MIT)

	// Typed.js | Copyright (c) 2014 Matt Boldt | www.mattboldt.com

	// Permission is hereby granted, free of charge, to any person obtaining a copy
	// of this software and associated documentation files (the "Software"), to deal
	// in the Software without restriction, including without limitation the rights
	// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	// copies of the Software, and to permit persons to whom the Software is
	// furnished to do so, subject to the following conditions:

	// The above copyright notice and this permission notice shall be included in
	// all copies or substantial portions of the Software.

	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	// THE SOFTWARE.


	!function ($) {

	    "use strict";

	    var Typed = function Typed(el, options) {

	        // chosen element to manipulate text
	        this.el = $(el);

	        // options
	        this.options = $.extend({}, $.fn.typed.defaults, options);

	        // attribute to type into
	        this.isInput = this.el.is('input');
	        this.attr = this.options.attr;

	        // show cursor
	        this.showCursor = this.isInput ? false : this.options.showCursor;

	        // text content of element
	        this.elContent = this.attr ? this.el.attr(this.attr) : this.el.text();

	        // html or plain text
	        this.contentType = this.options.contentType;

	        // typing speed
	        this.typeSpeed = this.options.typeSpeed;

	        // add a delay before typing starts
	        this.startDelay = this.options.startDelay;

	        // backspacing speed
	        this.backSpeed = this.options.backSpeed;

	        // amount of time to wait before backspacing
	        this.backDelay = this.options.backDelay;

	        // div containing strings
	        this.stringsElement = this.options.stringsElement;

	        // input strings of text
	        this.strings = this.options.strings;

	        // character number position of current string
	        this.strPos = 0;

	        // current array position
	        this.arrayPos = 0;

	        // number to stop backspacing on.
	        // default 0, can change depending on how many chars
	        // you want to remove at the time
	        this.stopNum = 0;

	        // Looping logic
	        this.loop = this.options.loop;
	        this.loopCount = this.options.loopCount;
	        this.curLoop = 0;

	        // for stopping
	        this.stop = false;

	        // custom cursor
	        this.cursorChar = this.options.cursorChar;

	        // shuffle the strings
	        this.shuffle = this.options.shuffle;
	        // the order of strings
	        this.sequence = [];

	        // All systems go!
	        this.build();
	    };

	    Typed.prototype = {

	        constructor: Typed,

	        init: function init() {
	            // begin the loop w/ first current string (global self.strings)
	            // current string will be passed as an argument each time after this
	            var self = this;
	            self.timeout = setTimeout(function () {
	                for (var i = 0; i < self.strings.length; ++i) {
	                    self.sequence[i] = i;
	                } // shuffle the array if true
	                if (self.shuffle) self.sequence = self.shuffleArray(self.sequence);

	                // Start typing
	                self.typewrite(self.strings[self.sequence[self.arrayPos]], self.strPos);
	            }, self.startDelay);
	        },

	        build: function build() {
	            var self = this;
	            // Insert cursor
	            if (this.showCursor === true) {
	                this.cursor = $("<span class=\"typed-cursor\">" + this.cursorChar + "</span>");
	                this.el.after(this.cursor);
	            }
	            if (this.stringsElement) {
	                this.strings = [];
	                this.stringsElement.hide();
	                console.log(this.stringsElement.children());
	                var strings = this.stringsElement.children();
	                $.each(strings, function (key, value) {
	                    self.strings.push($(value).html());
	                });
	            }
	            this.init();
	        },

	        // pass current string state to each function, types 1 char per call
	        typewrite: function typewrite(curString, curStrPos) {
	            // exit when stopped
	            if (this.stop === true) {
	                return;
	            }

	            // varying values for setTimeout during typing
	            // can't be global since number changes each time loop is executed
	            var humanize = Math.round(Math.random() * (100 - 30)) + this.typeSpeed;
	            var self = this;

	            // ------------- optional ------------- //
	            // backpaces a certain string faster
	            // ------------------------------------ //
	            // if (self.arrayPos == 1){
	            //  self.backDelay = 50;
	            // }
	            // else{ self.backDelay = 500; }

	            // contain typing function in a timeout humanize'd delay
	            self.timeout = setTimeout(function () {
	                // check for an escape character before a pause value
	                // format: \^\d+ .. eg: ^1000 .. should be able to print the ^ too using ^^
	                // single ^ are removed from string
	                var charPause = 0;
	                var substr = curString.substr(curStrPos);
	                if (substr.charAt(0) === '^') {
	                    var skip = 1; // skip atleast 1
	                    if (/^\^\d+/.test(substr)) {
	                        substr = /\d+/.exec(substr)[0];
	                        skip += substr.length;
	                        charPause = parseInt(substr);
	                    }

	                    // strip out the escape character and pause value so they're not printed
	                    curString = curString.substring(0, curStrPos) + curString.substring(curStrPos + skip);
	                }

	                if (self.contentType === 'html') {
	                    // skip over html tags while typing
	                    var curChar = curString.substr(curStrPos).charAt(0);
	                    if (curChar === '<' || curChar === '&') {
	                        var tag = '';
	                        var endTag = '';
	                        if (curChar === '<') {
	                            endTag = '>';
	                        } else {
	                            endTag = ';';
	                        }
	                        while (curString.substr(curStrPos + 1).charAt(0) !== endTag) {
	                            tag += curString.substr(curStrPos).charAt(0);
	                            curStrPos++;
	                            if (curStrPos + 1 > curString.length) {
	                                break;
	                            }
	                        }
	                        curStrPos++;
	                        tag += endTag;
	                    }
	                }

	                // timeout for any pause after a character
	                self.timeout = setTimeout(function () {
	                    if (curStrPos === curString.length) {
	                        // fires callback function
	                        self.options.onStringTyped(self.arrayPos);

	                        // is this the final string
	                        if (self.arrayPos === self.strings.length - 1) {
	                            // animation that occurs on the last typed string
	                            self.options.callback();

	                            self.curLoop++;

	                            // quit if we wont loop back
	                            if (self.loop === false || self.curLoop === self.loopCount) return;
	                        }

	                        self.timeout = setTimeout(function () {
	                            self.backspace(curString, curStrPos);
	                        }, self.backDelay);
	                    } else {

	                        /* call before functions if applicable */
	                        if (curStrPos === 0) {
	                            self.options.preStringTyped(self.arrayPos);
	                        }

	                        // start typing each new char into existing string
	                        // curString: arg, self.el.html: original text inside element
	                        var nextString = curString.substr(0, curStrPos + 1);
	                        if (self.attr) {
	                            self.el.attr(self.attr, nextString);
	                        } else {
	                            if (self.isInput) {
	                                self.el.val(nextString);
	                            } else if (self.contentType === 'html') {
	                                self.el.html(nextString);
	                            } else {
	                                self.el.text(nextString);
	                            }
	                        }

	                        // add characters one by one
	                        curStrPos++;
	                        // loop the function
	                        self.typewrite(curString, curStrPos);
	                    }
	                    // end of character pause
	                }, charPause);

	                // humanized value for typing
	            }, humanize);
	        },

	        backspace: function backspace(curString, curStrPos) {
	            // exit when stopped
	            if (this.stop === true) {
	                return;
	            }

	            // varying values for setTimeout during typing
	            // can't be global since number changes each time loop is executed
	            var humanize = Math.round(Math.random() * (100 - 30)) + this.backSpeed;
	            var self = this;

	            self.timeout = setTimeout(function () {

	                // ----- this part is optional ----- //
	                // check string array position
	                // on the first string, only delete one word
	                // the stopNum actually represents the amount of chars to
	                // keep in the current string. In my case it's 14.
	                if (self.arrayPos == 1) {
	                    self.stopNum = 4;
	                } else if (self.arrayPos == 2 || self.arrayPos == 3) {
	                    self.stopNum = 6;
	                } else if (self.arrayPos == 4) {
	                    self.stopNum = 1;
	                } else if (self.arrayPos == 5 || self.arrayPos == 6) {
	                    self.stopNum = 6;
	                } else {
	                    self.stopNum = 0;
	                }

	                if (self.contentType === 'html') {
	                    // skip over html tags while backspacing
	                    if (curString.substr(curStrPos).charAt(0) === '>') {
	                        var tag = '';
	                        while (curString.substr(curStrPos - 1).charAt(0) !== '<') {
	                            tag -= curString.substr(curStrPos).charAt(0);
	                            curStrPos--;
	                            if (curStrPos < 0) {
	                                break;
	                            }
	                        }
	                        curStrPos--;
	                        tag += '<';
	                    }
	                }

	                // ----- continue important stuff ----- //
	                // replace text with base text + typed characters
	                var nextString = curString.substr(0, curStrPos);
	                if (self.attr) {
	                    self.el.attr(self.attr, nextString);
	                } else {
	                    if (self.isInput) {
	                        self.el.val(nextString);
	                    } else if (self.contentType === 'html') {
	                        self.el.html(nextString);
	                    } else {
	                        self.el.text(nextString);
	                    }
	                }

	                // if the number (id of character in current string) is
	                // less than the stop number, keep going
	                if (curStrPos > self.stopNum) {
	                    // subtract characters one by one
	                    curStrPos--;
	                    // loop the function
	                    self.backspace(curString, curStrPos);
	                }
	                // if the stop number has been reached, increase
	                // array position to next string
	                else if (curStrPos <= self.stopNum) {
	                        self.arrayPos++;

	                        if (self.arrayPos === self.strings.length) {
	                            self.arrayPos = 0;

	                            // Shuffle sequence again
	                            if (self.shuffle) self.sequence = self.shuffleArray(self.sequence);

	                            self.init();
	                        } else self.typewrite(self.strings[self.sequence[self.arrayPos]], curStrPos);
	                    }

	                // humanized value for typing
	            }, humanize);
	        },
	        /**
	         * Shuffles the numbers in the given array.
	         * @param {Array} array
	         * @returns {Array}
	         */
	        shuffleArray: function shuffleArray(array) {
	            var tmp,
	                current,
	                top = array.length;
	            if (top) while (--top) {
	                current = Math.floor(Math.random() * (top + 1));
	                tmp = array[current];
	                array[current] = array[top];
	                array[top] = tmp;
	            }
	            return array;
	        },

	        // Start & Stop currently not working

	        // , stop: function() {
	        //     var self = this;

	        //     self.stop = true;
	        //     clearInterval(self.timeout);
	        // }

	        // , start: function() {
	        //     var self = this;
	        //     if(self.stop === false)
	        //        return;

	        //     this.stop = false;
	        //     this.init();
	        // }

	        // Reset and rebuild the element
	        reset: function reset() {
	            var self = this;
	            clearInterval(self.timeout);
	            var id = this.el.attr('id');
	            this.el.empty();
	            if (typeof this.cursor !== 'undefined') {
	                this.cursor.remove();
	            }
	            this.strPos = 0;
	            this.arrayPos = 0;
	            this.curLoop = 0;
	            // Send the callback
	            this.options.resetCallback();
	        }

	    };

	    $.fn.typed = function (option) {
	        return this.each(function () {
	            var $this = $(this),
	                data = $this.data('typed'),
	                options = (typeof option === "undefined" ? "undefined" : _typeof(option)) == 'object' && option;
	            if (data) {
	                data.reset();
	            }
	            $this.data('typed', data = new Typed(this, options));
	            if (typeof option == 'string') data[option]();
	        });
	    };

	    $.fn.typed.defaults = {
	        strings: ["These are the default values...", "You know what you should do?", "Use your own!", "Have a great day!"],
	        stringsElement: null,
	        // typing speed
	        typeSpeed: 0,
	        // time before typing starts
	        startDelay: 0,
	        // backspacing speed
	        backSpeed: 0,
	        // shuffle the strings
	        shuffle: false,
	        // time before backspacing
	        backDelay: 500,
	        // loop
	        loop: false,
	        // false = infinite
	        loopCount: false,
	        // show cursor
	        showCursor: true,
	        // character for cursor
	        cursorChar: "|",
	        // attribute to type (null == text)
	        attr: null,
	        // either html or text
	        contentType: 'html',
	        // call when done callback function
	        callback: function callback() {},
	        // starting callback function before each string
	        preStringTyped: function preStringTyped() {},
	        //callback for every typed string
	        onStringTyped: function onStringTyped() {},
	        // callback for reset
	        resetCallback: function resetCallback() {}
	    };
	}(window.jQuery);

/***/ },
/* 3 */
/***/ function(module, exports, require) {

	/* WEBPACK VAR INJECTION */(function(require, process) {'use strict';

	var filter = require(19);

	// resolves . and .. elements in a path array with directory names there
	// must be no slashes, empty elements, or device names (c:\) in the array
	// (so also no leading and trailing slashes - it does not distinguish
	// relative and absolute paths)
	function normalizeArray(parts, allowAboveRoot) {
	  // if the path tries to go above the root, `up` ends up > 0
	  var up = 0;
	  for (var i = parts.length; i >= 0; i--) {
	    var last = parts[i];
	    if (last == '.') {
	      parts.splice(i, 1);
	    } else if (last === '..') {
	      parts.splice(i, 1);
	      up++;
	    } else if (up) {
	      parts.splice(i, 1);
	      up--;
	    }
	  }

	  // if the path is allowed to go above the root, restore leading ..s
	  if (allowAboveRoot) {
	    for (; up--; up) {
	      parts.unshift('..');
	    }
	  }

	  return parts;
	}

	// Regex to split a filename into [*, dir, basename, ext]
	// posix version
	var splitPathRe = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;

	// path.resolve([from ...], to)
	// posix version
	exports.resolve = function () {
	  var resolvedPath = '',
	      resolvedAbsolute = false;

	  for (var i = arguments.length; i >= -1 && !resolvedAbsolute; i--) {
	    var path = i >= 0 ? arguments[i] : process.cwd();

	    // Skip empty and invalid entries
	    if (typeof path !== 'string' || !path) {
	      continue;
	    }

	    resolvedPath = path + '/' + resolvedPath;
	    resolvedAbsolute = path.charAt(0) === '/';
	  }

	  // At this point the path should be resolved to a full absolute path, but
	  // handle relative paths to be safe (might happen when process.cwd() fails)

	  // Normalize the path
	  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function (p) {
	    return !!p;
	  }), !resolvedAbsolute).join('/');

	  return (resolvedAbsolute ? '/' : '') + resolvedPath || '.';
	};

	// path.normalize(path)
	// posix version
	exports.normalize = function (path) {
	  var isAbsolute = path.charAt(0) === '/',
	      trailingSlash = path.slice(-1) === '/';

	  // Normalize the path
	  path = normalizeArray(filter(path.split('/'), function (p) {
	    return !!p;
	  }), !isAbsolute).join('/');

	  if (!path && !isAbsolute) {
	    path = '.';
	  }
	  if (path && trailingSlash) {
	    path += '/';
	  }

	  return (isAbsolute ? '/' : '') + path;
	};

	// posix version
	exports.join = function () {
	  var paths = Array.prototype.slice.call(arguments, 0);
	  return exports.normalize(filter(paths, function (p, index) {
	    return p && typeof p === 'string';
	  }).join('/'));
	};

	exports.dirname = function (path) {
	  var match = splitPathRe.exec(path);
	  var root = match[1] || '';
	  var dir = root + (match[2] || '');
	  var isWindows = false;
	  if (!dir) {
	    // No dirname
	    return '.';
	  } else if (dir.length === 1 || isWindows && dir.length <= 3 && dir.charAt(1) === ':') {
	    // It is just a slash or a drive letter with a slash
	    return dir;
	  } else {
	    // It is a full dirname, strip trailing slash
	    return dir.substring(0, dir.length - 1);
	  }
	};

	exports.basename = function (path, ext) {
	  var f = splitPathRe.exec(path)[3] || '';
	  if (ext && f.substr(-1 * ext.length) === ext) {
	    f = f.substr(0, f.length - ext.length);
	  }
	  return f;
	};

	exports.extname = function (path) {
	  return splitPathRe.exec(path)[4] || '';
	};

	exports.relative = function (from, to) {
	  from = exports.resolve(from).substr(1);
	  to = exports.resolve(to).substr(1);

	  function trim(arr) {
	    var start = 0;
	    for (; start < arr.length; start++) {
	      if (arr[start] !== '') break;
	    }

	    var end = arr.length - 1;
	    for (; end >= 0; end--) {
	      if (arr[end] !== '') break;
	    }

	    if (start > end) return [];
	    return arr.slice(start, end - start + 1);
	  }

	  var fromParts = trim(from.split('/'));
	  var toParts = trim(to.split('/'));

	  var length = Math.min(fromParts.length, toParts.length);
	  var samePartsLength = length;
	  for (var i = 0; i < length; i++) {
	    if (fromParts[i] !== toParts[i]) {
	      samePartsLength = i;
	      break;
	    }
	  }

	  var outputParts = [];
	  for (var i = samePartsLength; i < fromParts.length; i++) {
	    outputParts.push('..');
	  }

	  outputParts = outputParts.concat(toParts.slice(samePartsLength));

	  return outputParts.join('/');
	};

	exports.sep = '/';
	/* WEBPACK VAR INJECTION */}.call(exports, require, require(18)))

/***/ },
/* 4 */
/***/ function(module, exports, require) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = require(5);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = require(17)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/postcss-loader/index.js!../../node_modules/sass-loader/index.js!./main.scss", function() {
				var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/postcss-loader/index.js!../../node_modules/sass-loader/index.js!./main.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 5 */
/***/ function(module, exports, require) {

	exports = module.exports = require(29)();
	// imports


	// module
	exports.push([module.id, "/* variables */\n/* global styles */\nhtml, body {\n  font-family: \"Source Sans Pro\", \"PingFang TC\", \"Heiti TC\", \"Microsoft YaHei\", sans-serif;\n  font-size: 16px;\n  background: #eeeeee;\n  height: 100%; }\n\nhr {\n  margin: 1rem 0;\n  border: 0;\n  border-top: 0.1rem solid #e5e5e5; }\n\n#main {\n  padding: 8rem 0 4rem 0; }\n\n#footer {\n  padding: 2rem 0;\n  text-align: center;\n  font-size: 0.9rem;\n  color: #888888; }\n\n/* responsive */\n@media screen and (max-width: 519px) {\n  .nav-large {\n    display: none; } }\n\n@media screen and (min-width: 520px) {\n  .nav-small {\n    display: none; } }\n\n.nav-small .icon-stack {\n  margin-bottom: 1rem; }\n  .nav-small .icon-stack li.active:after {\n    bottom: -1rem;\n    left: 30%; }\n\n/* page styles */\n.circle-avatar {\n  margin-left: 2rem;\n  width: 12rem;\n  height: 12rem;\n  border-radius: 10rem;\n  background: url(" + require(20) + ") no-repeat;\n  background-size: cover;\n  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.5); }\n\n.social-icon-section {\n  margin-top: 1.6rem;\n  margin-left: 3.8rem; }\n  .social-icon-section .fa:nth-child(2) {\n    color: #fff; }\n  .social-icon-section .color-mail {\n    color: #ff0082; }\n  .social-icon-section .color-linkedin {\n    color: #0071b0; }\n  .social-icon-section .color-github {\n    color: #201f1f; }\n\n.info-item {\n  margin: 1.5rem 0; }\n  .info-item div:nth-child(1) {\n    padding: 0;\n    padding-bottom: 0.5rem; }\n  .info-item div:nth-child(2) {\n    border: 0rem #dddddd solid;\n    border-left-width: 0.5rem; }\n  .info-item img {\n    max-width: 100%;\n    box-shadow: 0 0 25px rgba(0, 0, 0, 0.75); }\n\n#portfolio-container {\n  margin-top: 5rem; }\n", ""]);

	// exports


/***/ },
/* 6 */
/***/ function(module, exports, require) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = require(7);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = require(17)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/postcss-loader/index.js!../../node_modules/sass-loader/index.js!./athena.scss", function() {
				var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/postcss-loader/index.js!../../node_modules/sass-loader/index.js!./athena.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 7 */
/***/ function(module, exports, require) {

	exports = module.exports = require(29)();
	// imports


	// module
	exports.push([module.id, ".header {\n  font-size: 2rem;\n  font-weight: 900;\n  padding: 1rem 0; }\n\n.header-2 {\n  font-size: 1.5rem;\n  font-weight: 700;\n  padding-top: 3rem; }\n\n/* variables */\n/* base styles */\n.btn.active {\n  box-shadow: none; }\n\n/* hover-button */\n.btn-hover {\n  padding: 0.6rem 1.2rem;\n  font-weight: 700;\n  background: none;\n  outline: none !important;\n  border-radius: 0;\n  border-width: 0.2rem;\n  transition: all 0.2s ease-out; }\n  .btn-hover:active {\n    box-shadow: none; }\n\n/* themes */\n.btn-hover-grey {\n  color: #7f8c97;\n  border-color: #7f8c97; }\n  .btn-hover-grey:hover {\n    color: #fff;\n    background: #7f8c97; }\n  .btn-hover-grey:focus {\n    color: #7f8c97; }\n  .btn-hover-grey:focus:hover {\n    color: #ffffff; }\n\n/* variables */\n/* Caption-Style Image */\n.caption-style {\n  position: relative;\n  width: 22rem;\n  height: 16rem;\n  overflow: hidden; }\n  .caption-style img {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n    -o-object-fit: cover;\n       object-fit: cover;\n    z-index: 3;\n    transition: all 0.25s ease-in-out; }\n  .caption-style:hover > img {\n    opacity: 1;\n    transform: scale(1.5, 1.5); }\n  .caption-style .caption {\n    display: block;\n    position: relative;\n    top: 0px;\n    width: 22rem;\n    height: 16rem;\n    opacity: 0;\n    z-index: 4;\n    transition: all 0.45s ease-in-out; }\n  .caption-style:hover > .caption {\n    opacity: 1; }\n  .caption-style .mask {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n    background-color: rgba(0, 0, 0, 0.6);\n    color: #FFF;\n    padding-top: 3.5rem; }\n\n/* variables */\n/*\r\n$color: #525e64;\r\n$color-active: #32c5d2;\r\n$tab-color: #2f353b;\r\n$tab-font-color: #fff;*/\n/* ul */\n.icon-stack {\n  text-align: center;\n  font-weight: 900;\n  /* font awesome icon */ }\n  .icon-stack .fa {\n    display: inline-block;\n    color: #525e64; }\n  .icon-stack .title {\n    display: block;\n    margin: 0.5rem 0;\n    color: #525e64; }\n  .icon-stack li {\n    position: relative;\n    display: inline-block;\n    margin-left: 1rem; }\n    .icon-stack li a {\n      position: relative;\n      display: block;\n      padding: 1rem 1.2rem; }\n    .icon-stack li a:hover {\n      background-color: transparent; }\n    .icon-stack li a:focus {\n      background-color: transparent; }\n  .icon-stack li.active a .fa {\n    color: #32c5d2; }\n  .icon-stack li.active a .title {\n    color: #32c5d2; }\n  .icon-stack li.active a:hover .fa {\n    color: #32c5d2; }\n  .icon-stack li.active a:hover .title {\n    color: #32c5d2; }\n  .icon-stack li.active:after {\n    content: '';\n    position: absolute;\n    bottom: 0;\n    left: 35%;\n    border-width: 12px;\n    border-style: solid;\n    border-color: transparent transparent #ffffff transparent;\n    display: block;\n    width: 0; }\n\n/* ul */\n.icon-stack-2 {\n  text-align: center;\n  font-weight: 300; }\n  .icon-stack-2 .fa {\n    display: inline-block;\n    color: #ee6557; }\n  .icon-stack-2 .fa-inverse {\n    color: #ffffff; }\n  .icon-stack-2 li {\n    position: relative;\n    display: inline-block;\n    margin-left: 2rem; }\n    .icon-stack-2 li a {\n      position: relative;\n      display: block;\n      padding: 1rem 1.2rem; }\n      .icon-stack-2 li a h4 {\n        color: #5b5b5b; }\n      .icon-stack-2 li a p {\n        color: #000; }\n      .icon-stack-2 li a .pseudo-link {\n        border-bottom: 0.01rem solid #48bed5; }\n      .icon-stack-2 li a i.pulse {\n        display: block;\n        width: 8rem;\n        height: 8rem;\n        border-radius: 1000px;\n        border: 0.1rem solid #ee6557;\n        transition: all 0.2s ease-out;\n        transform: scale(0.8); }\n    .icon-stack-2 li a:hover, .icon-stack-2 li a:focus {\n      background-color: transparent; }\n      .icon-stack-2 li a:hover h4, .icon-stack-2 li a:focus h4 {\n        color: #5b5b5b; }\n      .icon-stack-2 li a:hover .pseudo-link, .icon-stack-2 li a:focus .pseudo-link {\n        color: #48bed5; }\n      .icon-stack-2 li a:hover i.pulse, .icon-stack-2 li a:focus i.pulse {\n        transform: scale(1); }\n\n/* tab */\n.tab-container {\n  background-color: #ffffff;\n  color: #000; }\n  .tab-container .tab-content {\n    padding: 3rem; }\n", ""]);

	// exports


/***/ },
/* 8 */
/***/ function(module, exports, require) {

	module.exports = [{"name":"Fake Bird","date":"2020","image":"img/bird/logo.png","description":"An Angry Birds-like Android game built with Unity for practice."},{"name":"Hunter RO","date":"2018","image":"img/hunter/logo.png","description":"A HUNTER×HUNTER theme Ragnarok private server built with rAthena for practice, only first two maps are playable."},{"name":"ISMP Website","date":"May 2016","image":"img/ismp/logo.png","description":"The homepage of Intelligent System/Media Processing Lab.","media":[{"title":"Website Link","link":"http://ismp.csie.ncku.edu.tw/"}]},{"name":"PTT Search Engine","date":"Sep 2015","image":"img/ptt/logo.png","description":"A vertical search engine based on the data crawled by PTT crawler, which is another project of mine. This website is built with Python, Tornado and Bootstrap. The search engine has used several text mining techniques, such as TD-IDF and indexing."},{"name":"Cloud Video","date":"July 2014 - Jan 2015","image":"img/video/logo.png","description":"A cloud video surveillance system based on Hadoop HDFS."},{"name":"Fit Maniac","date":"Aug 2014","image":"img/fitmaniac/logo.png","description":"A fitness app offering weight training and dieting programs designed by professional fitness trainers."},{"name":"Portalite","date":"Feb 2014","image":"img/portalite/logo.png","description":"An Android app for the learning management system of YZU. It provides a elegant UI and off-line browsing."},{"name":"Fakebook","date":"Aug 2012","image":"img/fakebook/logo.png","description":"A facebook-like website for practice. This website is built with PHP."}]

/***/ },
/* 9 */
/***/ function(module, exports, require) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = require(10);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = require(17)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/postcss-loader/index.js!../../../node_modules/sass-loader/index.js!./_base.scss", function() {
				var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/postcss-loader/index.js!../../../node_modules/sass-loader/index.js!./_base.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 10 */
/***/ function(module, exports, require) {

	exports = module.exports = require(29)();
	// imports


	// module
	exports.push([module.id, ".header {\n  font-size: 2rem;\n  font-weight: 900;\n  padding: 1rem 0; }\n\n.header-2 {\n  font-size: 1.5rem;\n  font-weight: 700;\n  padding-top: 3rem; }\n", ""]);

	// exports


/***/ },
/* 11 */
/***/ function(module, exports, require) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = require(12);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = require(17)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/postcss-loader/index.js!../../../node_modules/sass-loader/index.js!./_button.scss", function() {
				var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/postcss-loader/index.js!../../../node_modules/sass-loader/index.js!./_button.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 12 */
/***/ function(module, exports, require) {

	exports = module.exports = require(29)();
	// imports


	// module
	exports.push([module.id, "/* variables */\n/* base styles */\n.btn.active {\n  box-shadow: none; }\n\n/* hover-button */\n.btn-hover {\n  padding: 0.6rem 1.2rem;\n  font-weight: 700;\n  background: none;\n  outline: none !important;\n  border-radius: 0;\n  border-width: 0.2rem;\n  transition: all 0.2s ease-out; }\n  .btn-hover:active {\n    box-shadow: none; }\n\n/* themes */\n.btn-hover-grey {\n  color: #7f8c97;\n  border-color: #7f8c97; }\n  .btn-hover-grey:hover {\n    color: #fff;\n    background: #7f8c97; }\n  .btn-hover-grey:focus {\n    color: #7f8c97; }\n  .btn-hover-grey:focus:hover {\n    color: #ffffff; }\n", ""]);

	// exports


/***/ },
/* 13 */
/***/ function(module, exports, require) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = require(14);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = require(17)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/postcss-loader/index.js!../../../node_modules/sass-loader/index.js!./_icon-stack.scss", function() {
				var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/postcss-loader/index.js!../../../node_modules/sass-loader/index.js!./_icon-stack.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 14 */
/***/ function(module, exports, require) {

	exports = module.exports = require(29)();
	// imports


	// module
	exports.push([module.id, "/* variables */\n/*\r\n$color: #525e64;\r\n$color-active: #32c5d2;\r\n$tab-color: #2f353b;\r\n$tab-font-color: #fff;*/\n/* ul */\n.icon-stack {\n  text-align: center;\n  font-weight: 900;\n  /* font awesome icon */ }\n  .icon-stack .fa {\n    display: inline-block;\n    color: #525e64; }\n  .icon-stack .title {\n    display: block;\n    margin: 0.5rem 0;\n    color: #525e64; }\n  .icon-stack li {\n    position: relative;\n    display: inline-block;\n    margin-left: 1rem; }\n    .icon-stack li a {\n      position: relative;\n      display: block;\n      padding: 1rem 1.2rem; }\n    .icon-stack li a:hover {\n      background-color: transparent; }\n    .icon-stack li a:focus {\n      background-color: transparent; }\n  .icon-stack li.active a .fa {\n    color: #32c5d2; }\n  .icon-stack li.active a .title {\n    color: #32c5d2; }\n  .icon-stack li.active a:hover .fa {\n    color: #32c5d2; }\n  .icon-stack li.active a:hover .title {\n    color: #32c5d2; }\n  .icon-stack li.active:after {\n    content: '';\n    position: absolute;\n    bottom: 0;\n    left: 35%;\n    border-width: 12px;\n    border-style: solid;\n    border-color: transparent transparent #ffffff transparent;\n    display: block;\n    width: 0; }\n\n/* ul */\n.icon-stack-2 {\n  text-align: center;\n  font-weight: 300; }\n  .icon-stack-2 .fa {\n    display: inline-block;\n    color: #ee6557; }\n  .icon-stack-2 .fa-inverse {\n    color: #ffffff; }\n  .icon-stack-2 li {\n    position: relative;\n    display: inline-block;\n    margin-left: 2rem; }\n    .icon-stack-2 li a {\n      position: relative;\n      display: block;\n      padding: 1rem 1.2rem; }\n      .icon-stack-2 li a h4 {\n        color: #5b5b5b; }\n      .icon-stack-2 li a p {\n        color: #000; }\n      .icon-stack-2 li a .pseudo-link {\n        border-bottom: 0.01rem solid #48bed5; }\n      .icon-stack-2 li a i.pulse {\n        display: block;\n        width: 8rem;\n        height: 8rem;\n        border-radius: 1000px;\n        border: 0.1rem solid #ee6557;\n        transition: all 0.2s ease-out;\n        transform: scale(0.8); }\n    .icon-stack-2 li a:hover, .icon-stack-2 li a:focus {\n      background-color: transparent; }\n      .icon-stack-2 li a:hover h4, .icon-stack-2 li a:focus h4 {\n        color: #5b5b5b; }\n      .icon-stack-2 li a:hover .pseudo-link, .icon-stack-2 li a:focus .pseudo-link {\n        color: #48bed5; }\n      .icon-stack-2 li a:hover i.pulse, .icon-stack-2 li a:focus i.pulse {\n        transform: scale(1); }\n\n/* tab */\n.tab-container {\n  background-color: #ffffff;\n  color: #000; }\n  .tab-container .tab-content {\n    padding: 3rem; }\n", ""]);

	// exports


/***/ },
/* 15 */
/***/ function(module, exports, require) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = require(16);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = require(17)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/postcss-loader/index.js!../../../node_modules/sass-loader/index.js!./_image.scss", function() {
				var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/postcss-loader/index.js!../../../node_modules/sass-loader/index.js!./_image.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 16 */
/***/ function(module, exports, require) {

	exports = module.exports = require(29)();
	// imports


	// module
	exports.push([module.id, "/* variables */\n/* Caption-Style Image */\n.caption-style {\n  position: relative;\n  width: 22rem;\n  height: 16rem;\n  overflow: hidden; }\n  .caption-style img {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n    -o-object-fit: cover;\n       object-fit: cover;\n    z-index: 3;\n    transition: all 0.25s ease-in-out; }\n  .caption-style:hover > img {\n    opacity: 1;\n    transform: scale(1.5, 1.5); }\n  .caption-style .caption {\n    display: block;\n    position: relative;\n    top: 0px;\n    width: 22rem;\n    height: 16rem;\n    opacity: 0;\n    z-index: 4;\n    transition: all 0.45s ease-in-out; }\n  .caption-style:hover > .caption {\n    opacity: 1; }\n  .caption-style .mask {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n    background-color: rgba(0, 0, 0, 0.6);\n    color: #FFF;\n    padding-top: 3.5rem; }\n", ""]);

	// exports


/***/ },
/* 17 */
/***/ function(module, exports, require) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 18 */
/***/ function(module, exports, require) {

	'use strict';

	var events = require(31);

	exports = module.exports = new events.EventEmitter();

	exports.nextTick = function () {
	    var canSetImmediate = typeof window !== 'undefined' && window.setImmediate;
	    var canPost = typeof window !== 'undefined' && window.postMessage && window.addEventListener;

	    if (canSetImmediate) {
	        return function (f) {
	            return window.setImmediate(f);
	        };
	    }

	    if (canPost) {
	        var queue = [];
	        window.addEventListener('message', function (ev) {
	            if (ev.source === window && ev.data === 'browserify-tick') {
	                ev.stopPropagation();
	                if (queue.length > 0) {
	                    var fn = queue.shift();
	                    fn();
	                }
	            }
	        }, true);

	        return function nextTick(fn) {
	            queue.push(fn);
	            window.postMessage('browserify-tick', '*');
	        };
	    }

	    return function nextTick(fn) {
	        setTimeout(fn, 0);
	    };
	}();

	exports.platform = exports.arch = exports.execPath = exports.title = 'browser';
	exports.pid = 1;
	exports.browser = true;
	exports.env = {};
	exports.argv = [];

	exports.binding = function (name) {
	    if (name === 'evals') return require(30);else throw new Error('No such module. (Possibly not yet loaded)');
	};

	(function () {
	    var cwd = '/';
	    var path;
	    exports.cwd = function () {
	        return cwd;
	    };
	    exports.chdir = function (dir) {
	        if (!path) path = require(3);
	        cwd = path.resolve(dir, cwd);
	    };
	})();

	exports.exit = exports.kill = exports.umask = exports.dlopen = exports.uptime = exports.memoryUsage = exports.uvCounters = function () {};
	exports.features = {};

/***/ },
/* 19 */
/***/ function(module, exports, require) {

	"use strict";

	module.exports = function filter(xs, fn) {
	    var res = [];
	    for (var i = 0; i < xs.length; i++) {
	        if (fn(xs[i], i, xs)) res.push(xs[i]);
	    }
	    return res;
	};

/***/ },
/* 20 */
/***/ function(module, exports, require) {

	module.exports = require.p + "img/img-adb4b1.jpg";

/***/ },
/* 21 */
/***/ function(module, exports, require) {

	module.exports = require.p + "img/img-9345eb.png";

/***/ },
/* 22 */
/***/ function(module, exports, require) {

	module.exports = require.p + "img/img-10f7e6.png";

/***/ },
/* 23 */
/***/ function(module, exports, require) {

	module.exports = require.p + "img/img-a8f6c5.png";

/***/ },
/* 24 */
/***/ function(module, exports, require) {

	module.exports = require.p + "img/img-6748be.png";

/***/ },
/* 25 */
/***/ function(module, exports, require) {

	module.exports = require.p + "img/img-66c360.png";

/***/ },
/* 26 */
/***/ function(module, exports, require) {

	module.exports = "data:image/png;base64,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TUw6Y29tLmFkb2JlLnhtcAAAAAAAPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS40LjAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOnRpZmY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vdGlmZi8xLjAvIgogICAgICAgICAgICB4bWxuczpleGlmPSJodHRwOi8vbnMuYWRvYmUuY29tL2V4aWYvMS4wLyI+CiAgICAgICAgIDx4bXA6TW9kaWZ5RGF0ZT4yMDE0LTAzLTI2VDE0OjAzOjA1PC94bXA6TW9kaWZ5RGF0ZT4KICAgICAgICAgPHhtcDpDcmVhdG9yVG9vbD5QaXhlbG1hdG9yIDMuMDwveG1wOkNyZWF0b3JUb29sPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICAgICA8dGlmZjpDb21wcmVzc2lvbj41PC90aWZmOkNvbXByZXNzaW9uPgogICAgICAgICA8dGlmZjpSZXNvbHV0aW9uVW5pdD4xPC90aWZmOlJlc29sdXRpb25Vbml0PgogICAgICAgICA8dGlmZjpZUmVzb2x1dGlvbj43MjwvdGlmZjpZUmVzb2x1dGlvbj4KICAgICAgICAgPHRpZmY6WFJlc29sdXRpb24+NzI8L3RpZmY6WFJlc29sdXRpb24+CiAgICAgICAgIDxleGlmOlBpeGVsWERpbWVuc2lvbj4yNTU8L2V4aWY6UGl4ZWxYRGltZW5zaW9uPgogICAgICAgICA8ZXhpZjpDb2xvclNwYWNlPjE8L2V4aWY6Q29sb3JTcGFjZT4KICAgICAgICAgPGV4aWY6UGl4ZWxZRGltZW5zaW9uPjI1NTwvZXhpZjpQaXhlbFlEaW1lbnNpb24+CiAgICAgIDwvcmRmOkRlc2Ny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"

/***/ },
/* 27 */
/***/ function(module, exports, require) {

	module.exports = require.p + "img/img-cb49ce.png";

/***/ },
/* 28 */
/***/ function(module, exports, require) {

	module.exports = require.p + "img/img-a318e1.png";

/***/ },
/* 29 */
/***/ function(module, exports, require) {

	"use strict";

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function () {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for (var i = 0; i < this.length; i++) {
				var item = this[i];
				if (item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function (modules, mediaQuery) {
			if (typeof modules === "string") modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for (var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if (typeof id === "number") alreadyImportedModules[id] = true;
			}
			for (i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if (mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if (mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};

/***/ },
/* 30 */
/***/ function(module, exports, require) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var Object_keys = function Object_keys(obj) {
	    if (Object.keys) return Object.keys(obj);else {
	        var res = [];
	        for (var key in obj) {
	            res.push(key);
	        }return res;
	    }
	};

	var forEach = function forEach(xs, fn) {
	    if (xs.forEach) return xs.forEach(fn);else for (var i = 0; i < xs.length; i++) {
	        fn(xs[i], i, xs);
	    }
	};

	var Script = exports.Script = function NodeScript(code) {
	    if (!(this instanceof Script)) return new Script(code);
	    this.code = code;
	};

	Script.prototype.runInNewContext = function (context) {
	    if (!context) context = {};

	    var iframe = document.createElement('iframe');
	    if (!iframe.style) iframe.style = {};
	    iframe.style.display = 'none';

	    document.body.appendChild(iframe);

	    var win = iframe.contentWindow;

	    forEach(Object_keys(context), function (key) {
	        win[key] = context[key];
	    });

	    if (!win.eval && win.execScript) {
	        // win.eval() magically appears when this is called in IE:
	        win.execScript('null');
	    }

	    var res = win.eval(this.code);

	    forEach(Object_keys(win), function (key) {
	        context[key] = win[key];
	    });

	    document.body.removeChild(iframe);

	    return res;
	};

	Script.prototype.runInThisContext = function () {
	    return eval(this.code); // maybe...
	};

	Script.prototype.runInContext = function (context) {
	    // seems to be just runInNewContext on magical context objects which are
	    // otherwise indistinguishable from objects except plain old objects
	    // for the parameter segfaults node
	    return this.runInNewContext(context);
	};

	forEach(Object_keys(Script.prototype), function (name) {
	    exports[name] = Script[name] = function (code) {
	        var s = Script(code);
	        return s[name].apply(s, [].slice.call(arguments, 1));
	    };
	});

	exports.createScript = function (code) {
	    return exports.Script(code);
	};

	exports.createContext = Script.createContext = function (context) {
	    // not really sure what this one does
	    // seems to just make a shallow copy
	    var copy = {};
	    if ((typeof context === 'undefined' ? 'undefined' : _typeof(context)) === 'object') {
	        forEach(Object_keys(context), function (key) {
	            copy[key] = context[key];
	        });
	    }
	    return copy;
	};

/***/ },
/* 31 */
/***/ function(module, exports, require) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	function EventEmitter() {
	  this._events = this._events || {};
	  this._maxListeners = this._maxListeners || undefined;
	}
	module.exports = EventEmitter;

	// Backwards-compat with node 0.10.x
	EventEmitter.EventEmitter = EventEmitter;

	EventEmitter.prototype._events = undefined;
	EventEmitter.prototype._maxListeners = undefined;

	// By default EventEmitters will print a warning if more than 10 listeners are
	// added to it. This is a useful default which helps finding memory leaks.
	EventEmitter.defaultMaxListeners = 10;

	// Obviously not all Emitters should be limited to 10. This function allows
	// that to be increased. Set to zero for unlimited.
	EventEmitter.prototype.setMaxListeners = function(n) {
	  if (!isNumber(n) || n < 0 || isNaN(n))
	    throw TypeError('n must be a positive number');
	  this._maxListeners = n;
	  return this;
	};

	EventEmitter.prototype.emit = function(type) {
	  var er, handler, len, args, i, listeners;

	  if (!this._events)
	    this._events = {};

	  // If there is no 'error' event listener then throw.
	  if (type === 'error') {
	    if (!this._events.error ||
	        (isObject(this._events.error) && !this._events.error.length)) {
	      er = arguments[1];
	      if (er instanceof Error) {
	        throw er; // Unhandled 'error' event
	      } else {
	        // At least give some kind of context to the user
	        var err = new Error('Uncaught, unspecified "error" event. (' + er + ')');
	        err.context = er;
	        throw err;
	      }
	    }
	  }

	  handler = this._events[type];

	  if (isUndefined(handler))
	    return false;

	  if (isFunction(handler)) {
	    switch (arguments.length) {
	      // fast cases
	      case 1:
	        handler.call(this);
	        break;
	      case 2:
	        handler.call(this, arguments[1]);
	        break;
	      case 3:
	        handler.call(this, arguments[1], arguments[2]);
	        break;
	      // slower
	      default:
	        args = Array.prototype.slice.call(arguments, 1);
	        handler.apply(this, args);
	    }
	  } else if (isObject(handler)) {
	    args = Array.prototype.slice.call(arguments, 1);
	    listeners = handler.slice();
	    len = listeners.length;
	    for (i = 0; i < len; i++)
	      listeners[i].apply(this, args);
	  }

	  return true;
	};

	EventEmitter.prototype.addListener = function(type, listener) {
	  var m;

	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');

	  if (!this._events)
	    this._events = {};

	  // To avoid recursion in the case that type === "newListener"! Before
	  // adding it to the listeners, first emit "newListener".
	  if (this._events.newListener)
	    this.emit('newListener', type,
	              isFunction(listener.listener) ?
	              listener.listener : listener);

	  if (!this._events[type])
	    // Optimize the case of one listener. Don't need the extra array object.
	    this._events[type] = listener;
	  else if (isObject(this._events[type]))
	    // If we've already got an array, just append.
	    this._events[type].push(listener);
	  else
	    // Adding the second element, need to change to array.
	    this._events[type] = [this._events[type], listener];

	  // Check for listener leak
	  if (isObject(this._events[type]) && !this._events[type].warned) {
	    if (!isUndefined(this._maxListeners)) {
	      m = this._maxListeners;
	    } else {
	      m = EventEmitter.defaultMaxListeners;
	    }

	    if (m && m > 0 && this._events[type].length > m) {
	      this._events[type].warned = true;
	      console.error('(node) warning: possible EventEmitter memory ' +
	                    'leak detected. %d listeners added. ' +
	                    'Use emitter.setMaxListeners() to increase limit.',
	                    this._events[type].length);
	      if (typeof console.trace === 'function') {
	        // not supported in IE 10
	        console.trace();
	      }
	    }
	  }

	  return this;
	};

	EventEmitter.prototype.on = EventEmitter.prototype.addListener;

	EventEmitter.prototype.once = function(type, listener) {
	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');

	  var fired = false;

	  function g() {
	    this.removeListener(type, g);

	    if (!fired) {
	      fired = true;
	      listener.apply(this, arguments);
	    }
	  }

	  g.listener = listener;
	  this.on(type, g);

	  return this;
	};

	// emits a 'removeListener' event iff the listener was removed
	EventEmitter.prototype.removeListener = function(type, listener) {
	  var list, position, length, i;

	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');

	  if (!this._events || !this._events[type])
	    return this;

	  list = this._events[type];
	  length = list.length;
	  position = -1;

	  if (list === listener ||
	      (isFunction(list.listener) && list.listener === listener)) {
	    delete this._events[type];
	    if (this._events.removeListener)
	      this.emit('removeListener', type, listener);

	  } else if (isObject(list)) {
	    for (i = length; i-- > 0;) {
	      if (list[i] === listener ||
	          (list[i].listener && list[i].listener === listener)) {
	        position = i;
	        break;
	      }
	    }

	    if (position < 0)
	      return this;

	    if (list.length === 1) {
	      list.length = 0;
	      delete this._events[type];
	    } else {
	      list.splice(position, 1);
	    }

	    if (this._events.removeListener)
	      this.emit('removeListener', type, listener);
	  }

	  return this;
	};

	EventEmitter.prototype.removeAllListeners = function(type) {
	  var key, listeners;

	  if (!this._events)
	    return this;

	  // not listening for removeListener, no need to emit
	  if (!this._events.removeListener) {
	    if (arguments.length === 0)
	      this._events = {};
	    else if (this._events[type])
	      delete this._events[type];
	    return this;
	  }

	  // emit removeListener for all listeners on all events
	  if (arguments.length === 0) {
	    for (key in this._events) {
	      if (key === 'removeListener') continue;
	      this.removeAllListeners(key);
	    }
	    this.removeAllListeners('removeListener');
	    this._events = {};
	    return this;
	  }

	  listeners = this._events[type];

	  if (isFunction(listeners)) {
	    this.removeListener(type, listeners);
	  } else if (listeners) {
	    // LIFO order
	    while (listeners.length)
	      this.removeListener(type, listeners[listeners.length - 1]);
	  }
	  delete this._events[type];

	  return this;
	};

	EventEmitter.prototype.listeners = function(type) {
	  var ret;
	  if (!this._events || !this._events[type])
	    ret = [];
	  else if (isFunction(this._events[type]))
	    ret = [this._events[type]];
	  else
	    ret = this._events[type].slice();
	  return ret;
	};

	EventEmitter.prototype.listenerCount = function(type) {
	  if (this._events) {
	    var evlistener = this._events[type];

	    if (isFunction(evlistener))
	      return 1;
	    else if (evlistener)
	      return evlistener.length;
	  }
	  return 0;
	};

	EventEmitter.listenerCount = function(emitter, type) {
	  return emitter.listenerCount(type);
	};

	function isFunction(arg) {
	  return typeof arg === 'function';
	}

	function isNumber(arg) {
	  return typeof arg === 'number';
	}

	function isObject(arg) {
	  return typeof arg === 'object' && arg !== null;
	}

	function isUndefined(arg) {
	  return arg === void 0;
	}


/***/ }
/******/ ])