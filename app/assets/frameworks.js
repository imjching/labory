! function() {
    function e() {
        var t = void 0,
            n = void 0,
            o = void 0;
        if (1 === arguments.length ? (t = e.amd, n = [], o = arguments[0]) : 2 === arguments.length ? (t = e.amd, n = arguments[0], o = arguments[1]) : 3 === arguments.length && (t = arguments[0], n = arguments[1], o = arguments[2]), "object" == typeof o && ! function() {
                var e = o;
                o = function() {
                    return e
                }
            }(), "string" != typeof t) throw new TypeError("name was not a string");
        if ("object" != typeof n) throw new TypeError("deps was not an array");
        if ("function" != typeof o) throw new TypeError("definition was not a function");
        r[t] && console.warn("Module redefined", t), r[t] = {
            deps: n,
            callback: o
        }
    }

    function t(e, t) {
        if ("." !== t.charAt(0)) return t;
        for (var n = t.split("/"), r = e.split("/").slice(0, -1), o = 0, i = n.length; i > o; o++) {
            var a = n[o];
            if (".." === a) r.pop();
            else {
                if ("." === a) continue;
                r.push(a)
            }
        }
        return r.join("/")
    }

    function n(e) {
        if (o[e]) return o[e];
        if (!r[e]) throw new Error("Could not find module " + e);
        o[e] = {};
        for (var i = r[e], a = i.deps, s = i.callback, u = [], c = void 0, l = 0, f = a.length; f > l; l++) "exports" === a[l] ? u.push(c = {}) : u.push(n(t(e, a[l])));
        var d = s.apply(this, u);
        return o[e] = c || d
    }
    if (window.define) throw new Error("Module registry already exists");
    var r = {},
        o = {};
    window.define = e, window.require = n
}(), define("github/emoji-detection", ["exports"], function(e) {
        function t(e, t) {
            var r = e.getContext("2d");
            return n(r, t), 0 !== r.getImageData(16, 16, 1, 1).data[0]
        }

        function n(e, t) {
            e.clearRect(0, 0, 400, 400), e.fillStyle = "#000", e.textBaseline = "top", e.font = '32px "Apple Color Emoji", "Segoe UI", "Segoe UI Emoji", "Segoe UI Symbol", Arial', e.fillText(t, 0, 0)
        }

        function r() {
            try {
                var e = document.createElement("canvas");
                return {
                    "6.0": t(e, i),
                    6.1: t(e, a),
                    "7.0": t(e, s),
                    "8.0": t(e, u),
                    "9.0": t(e, c)
                }
            } catch (n) {
                return {}
            }
        }

        function o() {
            var e = r(),
                t = 0;
            for (var n in e) {
                var o = parseFloat(n);
                e[n] && o > t && (t = o)
            }
            return t
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.detectEmoji = t, e.drawEmoji = n, e.detectEmojiUnicodeLevels = r, e.detectEmojiUnicodeLevel = o;
        var i = e.unicode6emoji = String.fromCharCode(55357) + String.fromCharCode(56836),
            a = e.unicode61emoji = String.fromCharCode(55357) + String.fromCharCode(56853),
            s = e.unicode7emoji = String.fromCharCode(55357) + String.fromCharCode(56898),
            u = e.unicode8emoji = String.fromCharCode(55358) + String.fromCharCode(56596),
            c = e.unicode9emoji = String.fromCharCode(55358) + String.fromCharCode(56631)
    }), define("github/feature-detection", ["exports", "./emoji-detection"], function(e, t) {
        function n() {
            try {
                var e = new CustomEvent("test", {
                    detail: "supported"
                });
                return "supported" === e.detail
            } catch (t) {
                return !1
            }
        }

        function r() {
            return a.classList ? (o.classList.add("a", "b"), o.classList.contains("b")) : !1
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = document.createElement("input"),
            i = t.detectEmojiUnicodeLevel(),
            a = {
                emoji: i >= 6.1,
                emojiUnicodeVersion: i,
                CustomEvent: n(),
                registerElement: "registerElement" in document,
                Promise: "Promise" in window,
                URL: "URL" in window,
                WeakMap: "WeakMap" in window,
                fetch: "fetch" in window,
                closest: "function" == typeof o.closest,
                matches: "function" == typeof o.matches,
                stringEndsWith: "endsWith" in String.prototype,
                stringStartsWith: "startsWith" in String.prototype,
                performanceNow: !!(window.performance ? window.performance.now : !1),
                performanceMark: !!(window.performance ? window.performance.mark : !1),
                performanceGetEntries: !!(window.performance ? window.performance.getEntries : !1),
                u2f: "u2f" in window || document.documentElement.classList.contains("is-u2f-enabled")
            };
        a.classList = "classList" in o, a.classListMultiArg = r(), e["default"] = a
    }), require("github/feature-detection"),
    function() {
        "use strict";

        function e(e) {
            if ("string" != typeof e && (e = String(e)), /[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(e)) throw new TypeError("Invalid character in header field name");
            return e.toLowerCase()
        }

        function t(e) {
            return "string" != typeof e && (e = String(e)), e
        }

        function n(e) {
            this.map = {}, e instanceof n ? e.forEach(function(e, t) {
                this.append(t, e)
            }, this) : e && Object.getOwnPropertyNames(e).forEach(function(t) {
                this.append(t, e[t])
            }, this)
        }

        function r(e) {
            return e.bodyUsed ? Promise.reject(new TypeError("Already read")) : void(e.bodyUsed = !0)
        }

        function o(e) {
            return new Promise(function(t, n) {
                e.onload = function() {
                    t(e.result)
                }, e.onerror = function() {
                    n(e.error)
                }
            })
        }

        function i(e) {
            var t = new FileReader;
            return t.readAsArrayBuffer(e), o(t)
        }

        function a(e) {
            var t = new FileReader;
            return t.readAsText(e), o(t)
        }

        function s() {
            return this.bodyUsed = !1, this._initBody = function(e) {
                if (this._bodyInit = e, "string" == typeof e) this._bodyText = e;
                else if (p.blob && Blob.prototype.isPrototypeOf(e)) this._bodyBlob = e;
                else if (p.formData && FormData.prototype.isPrototypeOf(e)) this._bodyFormData = e;
                else if (e) {
                    if (!p.arrayBuffer || !ArrayBuffer.prototype.isPrototypeOf(e)) throw new Error("unsupported BodyInit type")
                } else this._bodyText = ""
            }, p.blob ? (this.blob = function() {
                var e = r(this);
                if (e) return e;
                if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                if (this._bodyFormData) throw new Error("could not read FormData body as blob");
                return Promise.resolve(new Blob([this._bodyText]))
            }, this.arrayBuffer = function() {
                return this.blob().then(i)
            }, this.text = function() {
                var e = r(this);
                if (e) return e;
                if (this._bodyBlob) return a(this._bodyBlob);
                if (this._bodyFormData) throw new Error("could not read FormData body as text");
                return Promise.resolve(this._bodyText)
            }) : this.text = function() {
                var e = r(this);
                return e ? e : Promise.resolve(this._bodyText)
            }, p.formData && (this.formData = function() {
                return this.text().then(l)
            }), this.json = function() {
                return this.text().then(JSON.parse)
            }, this
        }

        function u(e) {
            var t = e.toUpperCase();
            return h.indexOf(t) > -1 ? t : e
        }

        function c(e, t) {
            t = t || {};
            var r = t.body;
            if (c.prototype.isPrototypeOf(e)) {
                if (e.bodyUsed) throw new TypeError("Already read");
                this.url = e.url, this.credentials = e.credentials, t.headers || (this.headers = new n(e.headers)), this.method = e.method, this.mode = e.mode, r || (r = e._bodyInit, e.bodyUsed = !0)
            } else this.url = e;
            if (this.credentials = t.credentials || this.credentials || "omit", (t.headers || !this.headers) && (this.headers = new n(t.headers)), this.method = u(t.method || this.method || "GET"), this.mode = t.mode || this.mode || null, this.referrer = null, ("GET" === this.method || "HEAD" === this.method) && r) throw new TypeError("Body not allowed for GET or HEAD requests");
            this._initBody(r)
        }

        function l(e) {
            var t = new FormData;
            return e.trim().split("&").forEach(function(e) {
                if (e) {
                    var n = e.split("="),
                        r = n.shift().replace(/\+/g, " "),
                        o = n.join("=").replace(/\+/g, " ");
                    t.append(decodeURIComponent(r), decodeURIComponent(o))
                }
            }), t
        }

        function f(e) {
            var t = new n,
                r = e.getAllResponseHeaders().trim().split("\n");
            return r.forEach(function(e) {
                var n = e.trim().split(":"),
                    r = n.shift().trim(),
                    o = n.join(":").trim();
                t.append(r, o)
            }), t
        }

        function d(e, t) {
            t || (t = {}), this._initBody(e), this.type = "default", this.status = t.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = t.statusText, this.headers = t.headers instanceof n ? t.headers : new n(t.headers), this.url = t.url || ""
        }
        if (!self.fetch) {
            n.prototype.append = function(n, r) {
                n = e(n), r = t(r);
                var o = this.map[n];
                o || (o = [], this.map[n] = o), o.push(r)
            }, n.prototype["delete"] = function(t) {
                delete this.map[e(t)]
            }, n.prototype.get = function(t) {
                var n = this.map[e(t)];
                return n ? n[0] : null
            }, n.prototype.getAll = function(t) {
                return this.map[e(t)] || []
            }, n.prototype.has = function(t) {
                return this.map.hasOwnProperty(e(t))
            }, n.prototype.set = function(n, r) {
                this.map[e(n)] = [t(r)]
            }, n.prototype.forEach = function(e, t) {
                Object.getOwnPropertyNames(this.map).forEach(function(n) {
                    this.map[n].forEach(function(r) {
                        e.call(t, r, n, this)
                    }, this)
                }, this)
            };
            var p = {
                    blob: "FileReader" in self && "Blob" in self && function() {
                        try {
                            return new Blob, !0
                        } catch (e) {
                            return !1
                        }
                    }(),
                    formData: "FormData" in self,
                    arrayBuffer: "ArrayBuffer" in self
                },
                h = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
            c.prototype.clone = function() {
                return new c(this)
            }, s.call(c.prototype), s.call(d.prototype), d.prototype.clone = function() {
                return new d(this._bodyInit, {
                    status: this.status,
                    statusText: this.statusText,
                    headers: new n(this.headers),
                    url: this.url
                })
            }, d.error = function() {
                var e = new d(null, {
                    status: 0,
                    statusText: ""
                });
                return e.type = "error", e
            };
            var m = [301, 302, 303, 307, 308];
            d.redirect = function(e, t) {
                if (-1 === m.indexOf(t)) throw new RangeError("Invalid status code");
                return new d(null, {
                    status: t,
                    headers: {
                        location: e
                    }
                })
            }, self.Headers = n, self.Request = c, self.Response = d, self.fetch = function(e, t) {
                return new Promise(function(n, r) {
                    function o() {
                        return "responseURL" in a ? a.responseURL : /^X-Request-URL:/m.test(a.getAllResponseHeaders()) ? a.getResponseHeader("X-Request-URL") : void 0
                    }
                    var i;
                    i = c.prototype.isPrototypeOf(e) && !t ? e : new c(e, t);
                    var a = new XMLHttpRequest;
                    a.onload = function() {
                        var e = 1223 === a.status ? 204 : a.status;
                        if (100 > e || e > 599) return void r(new TypeError("Network request failed"));
                        var t = {
                                status: e,
                                statusText: a.statusText,
                                headers: f(a),
                                url: o()
                            },
                            i = "response" in a ? a.response : a.responseText;
                        n(new d(i, t))
                    }, a.onerror = function() {
                        r(new TypeError("Network request failed"))
                    }, a.open(i.method, i.url, !0), "include" === i.credentials && (a.withCredentials = !0), "responseType" in a && p.blob && (a.responseType = "blob"), i.headers.forEach(function(e, t) {
                        a.setRequestHeader(t, e)
                    }), a.send("undefined" == typeof i._bodyInit ? null : i._bodyInit)
                })
            }, self.fetch.polyfill = !0
        }
    }(), "undefined" == typeof WeakMap && ! function() {
        var e = Object.defineProperty,
            t = Date.now() % 1e9,
            n = function() {
                this.name = "__st" + (1e9 * Math.random() >>> 0) + (t++ + "__")
            };
        n.prototype = {
            set: function(t, n) {
                var r = t[this.name];
                return r && r[0] === t ? r[1] = n : e(t, this.name, {
                    value: [t, n],
                    writable: !0
                }), this
            },
            get: function(e) {
                var t;
                return (t = e[this.name]) && t[0] === e ? t[1] : void 0
            },
            "delete": function(e) {
                var t = e[this.name];
                return t && t[0] === e ? (t[0] = t[1] = void 0, !0) : !1
            },
            has: function(e) {
                var t = e[this.name];
                return t ? t[0] === e : !1
            }
        }, window.WeakMap = n
    }(),
    function(e) {
        function t(e) {
            w.push(e), b || (b = !0, m(r))
        }

        function n(e) {
            return window.ShadowDOMPolyfill && window.ShadowDOMPolyfill.wrapIfNeeded(e) || e
        }

        function r() {
            b = !1;
            var e = w;
            w = [], e.sort(function(e, t) {
                return e.uid_ - t.uid_
            });
            var t = !1;
            e.forEach(function(e) {
                var n = e.takeRecords();
                o(e), n.length && (e.callback_(n, e), t = !0)
            }), t && r()
        }

        function o(e) {
            e.nodes_.forEach(function(t) {
                var n = v.get(t);
                n && n.forEach(function(t) {
                    t.observer === e && t.removeTransientObservers()
                })
            })
        }

        function i(e, t) {
            for (var n = e; n; n = n.parentNode) {
                var r = v.get(n);
                if (r)
                    for (var o = 0; o < r.length; o++) {
                        var i = r[o],
                            a = i.options;
                        if (n === e || a.subtree) {
                            var s = t(a);
                            s && i.enqueue(s)
                        }
                    }
            }
        }

        function a(e) {
            this.callback_ = e, this.nodes_ = [], this.records_ = [], this.uid_ = ++x
        }

        function s(e, t) {
            this.type = e, this.target = t, this.addedNodes = [], this.removedNodes = [], this.previousSibling = null, this.nextSibling = null, this.attributeName = null, this.attributeNamespace = null, this.oldValue = null
        }

        function u(e) {
            var t = new s(e.type, e.target);
            return t.addedNodes = e.addedNodes.slice(), t.removedNodes = e.removedNodes.slice(), t.previousSibling = e.previousSibling, t.nextSibling = e.nextSibling, t.attributeName = e.attributeName, t.attributeNamespace = e.attributeNamespace, t.oldValue = e.oldValue, t
        }

        function c(e, t) {
            return E = new s(e, t)
        }

        function l(e) {
            return T ? T : (T = u(E), T.oldValue = e, T)
        }

        function f() {
            E = T = void 0
        }

        function d(e) {
            return e === T || e === E
        }

        function p(e, t) {
            return e === t ? e : T && d(e) ? T : null
        }

        function h(e, t, n) {
            this.observer = e, this.target = t, this.options = n, this.transientObservedNodes = []
        }
        if (!e.JsMutationObserver) {
            var m, v = new WeakMap;
            if (/Trident|Edge/.test(navigator.userAgent)) m = setTimeout;
            else if (window.setImmediate) m = window.setImmediate;
            else {
                var g = [],
                    y = String(Math.random());
                window.addEventListener("message", function(e) {
                    if (e.data === y) {
                        var t = g;
                        g = [], t.forEach(function(e) {
                            e()
                        })
                    }
                }), m = function(e) {
                    g.push(e), window.postMessage(y, "*")
                }
            }
            var b = !1,
                w = [],
                x = 0;
            a.prototype = {
                observe: function(e, t) {
                    if (e = n(e), !t.childList && !t.attributes && !t.characterData || t.attributeOldValue && !t.attributes || t.attributeFilter && t.attributeFilter.length && !t.attributes || t.characterDataOldValue && !t.characterData) throw new SyntaxError;
                    var r = v.get(e);
                    r || v.set(e, r = []);
                    for (var o, i = 0; i < r.length; i++)
                        if (r[i].observer === this) {
                            o = r[i], o.removeListeners(), o.options = t;
                            break
                        }
                    o || (o = new h(this, e, t), r.push(o), this.nodes_.push(e)), o.addListeners()
                },
                disconnect: function() {
                    this.nodes_.forEach(function(e) {
                        for (var t = v.get(e), n = 0; n < t.length; n++) {
                            var r = t[n];
                            if (r.observer === this) {
                                r.removeListeners(), t.splice(n, 1);
                                break
                            }
                        }
                    }, this), this.records_ = []
                },
                takeRecords: function() {
                    var e = this.records_;
                    return this.records_ = [], e
                }
            };
            var E, T;
            h.prototype = {
                enqueue: function(e) {
                    var n = this.observer.records_,
                        r = n.length;
                    if (n.length > 0) {
                        var o = n[r - 1],
                            i = p(o, e);
                        if (i) return void(n[r - 1] = i)
                    } else t(this.observer);
                    n[r] = e
                },
                addListeners: function() {
                    this.addListeners_(this.target)
                },
                addListeners_: function(e) {
                    var t = this.options;
                    t.attributes && e.addEventListener("DOMAttrModified", this, !0), t.characterData && e.addEventListener("DOMCharacterDataModified", this, !0), t.childList && e.addEventListener("DOMNodeInserted", this, !0), (t.childList || t.subtree) && e.addEventListener("DOMNodeRemoved", this, !0)
                },
                removeListeners: function() {
                    this.removeListeners_(this.target)
                },
                removeListeners_: function(e) {
                    var t = this.options;
                    t.attributes && e.removeEventListener("DOMAttrModified", this, !0), t.characterData && e.removeEventListener("DOMCharacterDataModified", this, !0), t.childList && e.removeEventListener("DOMNodeInserted", this, !0), (t.childList || t.subtree) && e.removeEventListener("DOMNodeRemoved", this, !0)
                },
                addTransientObserver: function(e) {
                    if (e !== this.target) {
                        this.addListeners_(e), this.transientObservedNodes.push(e);
                        var t = v.get(e);
                        t || v.set(e, t = []), t.push(this)
                    }
                },
                removeTransientObservers: function() {
                    var e = this.transientObservedNodes;
                    this.transientObservedNodes = [], e.forEach(function(e) {
                        this.removeListeners_(e);
                        for (var t = v.get(e), n = 0; n < t.length; n++)
                            if (t[n] === this) {
                                t.splice(n, 1);
                                break
                            }
                    }, this)
                },
                handleEvent: function(e) {
                    switch (e.stopImmediatePropagation(), e.type) {
                        case "DOMAttrModified":
                            var t = e.attrName,
                                n = e.relatedNode.namespaceURI,
                                r = e.target,
                                o = new c("attributes", r);
                            o.attributeName = t, o.attributeNamespace = n;
                            var a = e.attrChange === MutationEvent.ADDITION ? null : e.prevValue;
                            i(r, function(e) {
                                return !e.attributes || e.attributeFilter && e.attributeFilter.length && -1 === e.attributeFilter.indexOf(t) && -1 === e.attributeFilter.indexOf(n) ? void 0 : e.attributeOldValue ? l(a) : o
                            });
                            break;
                        case "DOMCharacterDataModified":
                            var r = e.target,
                                o = c("characterData", r),
                                a = e.prevValue;
                            i(r, function(e) {
                                return e.characterData ? e.characterDataOldValue ? l(a) : o : void 0
                            });
                            break;
                        case "DOMNodeRemoved":
                            this.addTransientObserver(e.target);
                        case "DOMNodeInserted":
                            var s, u, d = e.target;
                            "DOMNodeInserted" === e.type ? (s = [d], u = []) : (s = [], u = [d]);
                            var p = d.previousSibling,
                                h = d.nextSibling,
                                o = c("childList", e.target.parentNode);
                            o.addedNodes = s, o.removedNodes = u, o.previousSibling = p, o.nextSibling = h, i(e.relatedNode, function(e) {
                                return e.childList ? o : void 0
                            })
                    }
                    f()
                }
            }, e.JsMutationObserver = a, e.MutationObserver || (e.MutationObserver = a, a._isPolyfilled = !0)
        }
    }(self),
    function(e) {
        "use strict";
        if (!window.performance) {
            var t = Date.now();
            window.performance = {
                now: function() {
                    return Date.now() - t
                }
            }
        }
        window.requestAnimationFrame || (window.requestAnimationFrame = function() {
            var e = window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame;
            return e ? function(t) {
                return e(function() {
                    t(performance.now())
                })
            } : function(e) {
                return window.setTimeout(e, 1e3 / 60)
            }
        }()), window.cancelAnimationFrame || (window.cancelAnimationFrame = function() {
            return window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || function(e) {
                clearTimeout(e)
            }
        }());
        var n = function() {
            var e = document.createEvent("Event");
            return e.initEvent("foo", !0, !0), e.preventDefault(), e.defaultPrevented
        }();
        if (!n) {
            var r = Event.prototype.preventDefault;
            Event.prototype.preventDefault = function() {
                this.cancelable && (r.call(this), Object.defineProperty(this, "defaultPrevented", {
                    get: function() {
                        return !0
                    },
                    configurable: !0
                }))
            }
        }
        var o = /Trident/.test(navigator.userAgent);
        if ((!window.CustomEvent || o && "function" != typeof window.CustomEvent) && (window.CustomEvent = function(e, t) {
                t = t || {};
                var n = document.createEvent("CustomEvent");
                return n.initCustomEvent(e, Boolean(t.bubbles), Boolean(t.cancelable), t.detail), n
            }, window.CustomEvent.prototype = window.Event.prototype), !window.Event || o && "function" != typeof window.Event) {
            var i = window.Event;
            window.Event = function(e, t) {
                t = t || {};
                var n = document.createEvent("Event");
                return n.initEvent(e, Boolean(t.bubbles), Boolean(t.cancelable)), n
            }, window.Event.prototype = i.prototype
        }
    }(window.WebComponents), window.CustomElements = window.CustomElements || {
        flags: {}
    },
    function(e) {
        var t = e.flags,
            n = [],
            r = function(e) {
                n.push(e)
            },
            o = function() {
                n.forEach(function(t) {
                    t(e)
                })
            };
        e.addModule = r, e.initializeModules = o, e.hasNative = Boolean(document.registerElement), e.isIE = /Trident/.test(navigator.userAgent), e.useNative = !t.register && e.hasNative && !window.ShadowDOMPolyfill && (!window.HTMLImports || window.HTMLImports.useNative)
    }(window.CustomElements), window.CustomElements.addModule(function(e) {
        function t(e, t) {
            n(e, function(e) {
                return t(e) ? !0 : void r(e, t)
            }), r(e, t)
        }

        function n(e, t, r) {
            var o = e.firstElementChild;
            if (!o)
                for (o = e.firstChild; o && o.nodeType !== Node.ELEMENT_NODE;) o = o.nextSibling;
            for (; o;) t(o, r) !== !0 && n(o, t, r), o = o.nextElementSibling;
            return null
        }

        function r(e, n) {
            for (var r = e.shadowRoot; r;) t(r, n), r = r.olderShadowRoot
        }

        function o(e, t) {
            i(e, t, [])
        }

        function i(e, t, n) {
            if (e = window.wrap(e), !(n.indexOf(e) >= 0)) {
                n.push(e);
                for (var r, o = e.querySelectorAll("link[rel=" + a + "]"), s = 0, u = o.length; u > s && (r = o[s]); s++) r["import"] && i(r["import"], t, n);
                t(e)
            }
        }
        var a = window.HTMLImports ? window.HTMLImports.IMPORT_LINK_TYPE : "none";
        e.forDocumentTree = o, e.forSubtree = t
    }), window.CustomElements.addModule(function(e) {
        function t(e, t) {
            return n(e, t) || r(e, t)
        }

        function n(t, n) {
            return e.upgrade(t, n) ? !0 : void(n && a(t))
        }

        function r(e, t) {
            b(e, function(e) {
                return n(e, t) ? !0 : void 0
            })
        }

        function o(e) {
            T.push(e), E || (E = !0, setTimeout(i))
        }

        function i() {
            E = !1;
            for (var e, t = T, n = 0, r = t.length; r > n && (e = t[n]); n++) e();
            T = []
        }

        function a(e) {
            x ? o(function() {
                s(e)
            }) : s(e)
        }

        function s(e) {
            e.__upgraded__ && !e.__attached && (e.__attached = !0, e.attachedCallback && e.attachedCallback())
        }

        function u(e) {
            c(e), b(e, function(e) {
                c(e)
            })
        }

        function c(e) {
            x ? o(function() {
                l(e)
            }) : l(e)
        }

        function l(e) {
            e.__upgraded__ && e.__attached && (e.__attached = !1, e.detachedCallback && e.detachedCallback())
        }

        function f(e) {
            for (var t = e, n = window.wrap(document); t;) {
                if (t == n) return !0;
                t = t.parentNode || t.nodeType === Node.DOCUMENT_FRAGMENT_NODE && t.host
            }
        }

        function d(e) {
            if (e.shadowRoot && !e.shadowRoot.__watched) {
                y.dom && console.log("watching shadow-root for: ", e.localName);
                for (var t = e.shadowRoot; t;) m(t), t = t.olderShadowRoot
            }
        }

        function p(e, n) {
            if (y.dom) {
                var r = n[0];
                if (r && "childList" === r.type && r.addedNodes && r.addedNodes) {
                    for (var o = r.addedNodes[0]; o && o !== document && !o.host;) o = o.parentNode;
                    var i = o && (o.URL || o._URL || o.host && o.host.localName) || "";
                    i = i.split("/?").shift().split("/").pop()
                }
                console.group("mutations (%d) [%s]", n.length, i || "")
            }
            var a = f(e);
            n.forEach(function(e) {
                "childList" === e.type && (_(e.addedNodes, function(e) {
                    e.localName && t(e, a)
                }), _(e.removedNodes, function(e) {
                    e.localName && u(e)
                }))
            }), y.dom && console.groupEnd()
        }

        function h(e) {
            for (e = window.wrap(e), e || (e = window.wrap(document)); e.parentNode;) e = e.parentNode;
            var t = e.__observer;
            t && (p(e, t.takeRecords()), i())
        }

        function m(e) {
            if (!e.__observer) {
                var t = new MutationObserver(p.bind(this, e));
                t.observe(e, {
                    childList: !0,
                    subtree: !0
                }), e.__observer = t
            }
        }

        function v(e) {
            e = window.wrap(e), y.dom && console.group("upgradeDocument: ", e.baseURI.split("/").pop());
            var n = e === window.wrap(document);
            t(e, n), m(e), y.dom && console.groupEnd()
        }

        function g(e) {
            w(e, v)
        }
        var y = e.flags,
            b = e.forSubtree,
            w = e.forDocumentTree,
            x = window.MutationObserver._isPolyfilled && y["throttle-attached"];
        e.hasPolyfillMutations = x, e.hasThrottledAttached = x;
        var E = !1,
            T = [],
            _ = Array.prototype.forEach.call.bind(Array.prototype.forEach),
            C = Element.prototype.createShadowRoot;
        C && (Element.prototype.createShadowRoot = function() {
            var e = C.call(this);
            return window.CustomElements.watchShadow(this), e
        }), e.watchShadow = d, e.upgradeDocumentTree = g, e.upgradeDocument = v, e.upgradeSubtree = r, e.upgradeAll = t, e.attached = a, e.takeRecords = h
    }), window.CustomElements.addModule(function(e) {
        function t(t, r) {
            if ("template" === t.localName && window.HTMLTemplateElement && HTMLTemplateElement.decorate && HTMLTemplateElement.decorate(t), !t.__upgraded__ && t.nodeType === Node.ELEMENT_NODE) {
                var o = t.getAttribute("is"),
                    i = e.getRegisteredDefinition(t.localName) || e.getRegisteredDefinition(o);
                if (i && (o && i.tag == t.localName || !o && !i["extends"])) return n(t, i, r)
            }
        }

        function n(t, n, o) {
            return a.upgrade && console.group("upgrade:", t.localName), n.is && t.setAttribute("is", n.is), r(t, n), t.__upgraded__ = !0, i(t), o && e.attached(t), e.upgradeSubtree(t, o), a.upgrade && console.groupEnd(), t
        }

        function r(e, t) {
            Object.__proto__ ? e.__proto__ = t.prototype : (o(e, t.prototype, t["native"]), e.__proto__ = t.prototype)
        }

        function o(e, t, n) {
            for (var r = {}, o = t; o !== n && o !== HTMLElement.prototype;) {
                for (var i, a = Object.getOwnPropertyNames(o), s = 0; i = a[s]; s++) r[i] || (Object.defineProperty(e, i, Object.getOwnPropertyDescriptor(o, i)), r[i] = 1);
                o = Object.getPrototypeOf(o)
            }
        }

        function i(e) {
            e.createdCallback && e.createdCallback()
        }
        var a = e.flags;
        e.upgrade = t, e.upgradeWithDefinition = n, e.implementPrototype = r
    }), window.CustomElements.addModule(function(e) {
        function t(t, r) {
            var u = r || {};
            if (!t) throw new Error("document.registerElement: first argument `name` must not be empty");
            if (t.indexOf("-") < 0) throw new Error("document.registerElement: first argument ('name') must contain a dash ('-'). Argument provided was '" + String(t) + "'.");
            if (o(t)) throw new Error("Failed to execute 'registerElement' on 'Document': Registration failed for type '" + String(t) + "'. The type name is invalid.");
            if (c(t)) throw new Error("DuplicateDefinitionError: a type with name '" + String(t) + "' is already registered");
            return u.prototype || (u.prototype = Object.create(HTMLElement.prototype)), u.__name = t.toLowerCase(), u.lifecycle = u.lifecycle || {}, u.ancestry = i(u["extends"]), a(u), s(u), n(u.prototype), l(u.__name, u), u.ctor = f(u), u.ctor.prototype = u.prototype, u.prototype.constructor = u.ctor, e.ready && g(document), u.ctor
        }

        function n(e) {
            if (!e.setAttribute._polyfilled) {
                var t = e.setAttribute;
                e.setAttribute = function(e, n) {
                    r.call(this, e, n, t)
                };
                var n = e.removeAttribute;
                e.removeAttribute = function(e) {
                    r.call(this, e, null, n)
                }, e.setAttribute._polyfilled = !0
            }
        }

        function r(e, t, n) {
            e = e.toLowerCase();
            var r = this.getAttribute(e);
            n.apply(this, arguments);
            var o = this.getAttribute(e);
            this.attributeChangedCallback && o !== r && this.attributeChangedCallback(e, r, o)
        }

        function o(e) {
            for (var t = 0; t < E.length; t++)
                if (e === E[t]) return !0
        }

        function i(e) {
            var t = c(e);
            return t ? i(t["extends"]).concat([t]) : []
        }

        function a(e) {
            for (var t, n = e["extends"], r = 0; t = e.ancestry[r]; r++) n = t.is && t.tag;
            e.tag = n || e.__name, n && (e.is = e.__name)
        }

        function s(e) {
            if (!Object.__proto__) {
                var t = HTMLElement.prototype;
                if (e.is) {
                    var n = document.createElement(e.tag);
                    t = Object.getPrototypeOf(n)
                }
                for (var r, o = e.prototype, i = !1; o;) o == t && (i = !0), r = Object.getPrototypeOf(o), r && (o.__proto__ = r), o = r;
                i || console.warn(e.tag + " prototype not found in prototype chain for " + e.is), e["native"] = t
            }
        }

        function u(e) {
            return b(C(e.tag), e)
        }

        function c(e) {
            return e ? T[e.toLowerCase()] : void 0
        }

        function l(e, t) {
            T[e] = t
        }

        function f(e) {
            return function() {
                return u(e)
            }
        }

        function d(e, t, n) {
            return e === _ ? p(t, n) : j(e, t)
        }

        function p(e, t) {
            e && (e = e.toLowerCase()), t && (t = t.toLowerCase());
            var n = c(t || e);
            if (n) {
                if (e == n.tag && t == n.is) return new n.ctor;
                if (!t && !n.is) return new n.ctor
            }
            var r;
            return t ? (r = p(e), r.setAttribute("is", t), r) : (r = C(e), e.indexOf("-") >= 0 && w(r, HTMLElement), r)
        }

        function h(e, t) {
            var n = e[t];
            e[t] = function() {
                var e = n.apply(this, arguments);
                return y(e), e
            }
        }
        var m, v = e.isIE,
            g = e.upgradeDocumentTree,
            y = e.upgradeAll,
            b = e.upgradeWithDefinition,
            w = e.implementPrototype,
            x = e.useNative,
            E = ["annotation-xml", "color-profile", "font-face", "font-face-src", "font-face-uri", "font-face-format", "font-face-name", "missing-glyph"],
            T = {},
            _ = "http://www.w3.org/1999/xhtml",
            C = document.createElement.bind(document),
            j = document.createElementNS.bind(document);
        m = Object.__proto__ || x ? function(e, t) {
            return e instanceof t
        } : function(e, t) {
            if (e instanceof t) return !0;
            for (var n = e; n;) {
                if (n === t.prototype) return !0;
                n = n.__proto__
            }
            return !1
        }, h(Node.prototype, "cloneNode"), h(document, "importNode"), v && ! function() {
            var e = document.importNode;
            document.importNode = function() {
                var t = e.apply(document, arguments);
                if (t.nodeType == t.DOCUMENT_FRAGMENT_NODE) {
                    var n = document.createDocumentFragment();
                    return n.appendChild(t), n
                }
                return t
            }
        }(), document.registerElement = t, document.createElement = p, document.createElementNS = d, e.registry = T, e["instanceof"] = m, e.reservedTagList = E, e.getRegisteredDefinition = c, document.register = document.registerElement
    }),
    function(e) {
        function t() {
            i(window.wrap(document)), window.CustomElements.ready = !0;
            var e = window.requestAnimationFrame || function(e) {
                setTimeout(e, 16)
            };
            e(function() {
                setTimeout(function() {
                    window.CustomElements.readyTime = Date.now(), window.HTMLImports && (window.CustomElements.elapsed = window.CustomElements.readyTime - window.HTMLImports.readyTime), document.dispatchEvent(new CustomEvent("WebComponentsReady", {
                        bubbles: !0
                    }))
                })
            })
        }
        var n = e.useNative,
            r = e.initializeModules;
        e.isIE;
        if (n) {
            var o = function() {};
            e.watchShadow = o, e.upgrade = o, e.upgradeAll = o, e.upgradeDocumentTree = o, e.upgradeSubtree = o, e.takeRecords = o, e["instanceof"] = function(e, t) {
                return e instanceof t
            }
        } else r();
        var i = e.upgradeDocumentTree,
            a = e.upgradeDocument;
        if (window.wrap || (window.ShadowDOMPolyfill ? (window.wrap = window.ShadowDOMPolyfill.wrapIfNeeded, window.unwrap = window.ShadowDOMPolyfill.unwrapIfNeeded) : window.wrap = window.unwrap = function(e) {
                return e
            }), window.HTMLImports && (window.HTMLImports.__importsParsingHook = function(e) {
                e["import"] && a(wrap(e["import"]))
            }), "complete" === document.readyState || e.flags.eager) t();
        else if ("interactive" !== document.readyState || window.attachEvent || window.HTMLImports && !window.HTMLImports.ready) {
            var s = window.HTMLImports && !window.HTMLImports.ready ? "HTMLImportsLoaded" : "DOMContentLoaded";
            window.addEventListener(s, t)
        } else t()
    }(window.CustomElements),
    function(e) {
        "use strict";

        function t(e) {
            return void 0 !== d[e]
        }

        function n() {
            s.call(this), this._isInvalid = !0
        }

        function r(e) {
            return "" == e && n.call(this), e.toLowerCase()
        }

        function o(e) {
            var t = e.charCodeAt(0);
            return t > 32 && 127 > t && -1 == [34, 35, 60, 62, 63, 96].indexOf(t) ? e : encodeURIComponent(e)
        }

        function i(e) {
            var t = e.charCodeAt(0);
            return t > 32 && 127 > t && -1 == [34, 35, 60, 62, 96].indexOf(t) ? e : encodeURIComponent(e)
        }

        function a(e, a, s) {
            function u(e) {
                b.push(e)
            }
            var c = a || "scheme start",
                l = 0,
                f = "",
                g = !1,
                y = !1,
                b = [];
            e: for (;
                (e[l - 1] != h || 0 == l) && !this._isInvalid;) {
                var w = e[l];
                switch (c) {
                    case "scheme start":
                        if (!w || !m.test(w)) {
                            if (a) {
                                u("Invalid scheme.");
                                break e
                            }
                            f = "", c = "no scheme";
                            continue
                        }
                        f += w.toLowerCase(), c = "scheme";
                        break;
                    case "scheme":
                        if (w && v.test(w)) f += w.toLowerCase();
                        else {
                            if (":" != w) {
                                if (a) {
                                    if (h == w) break e;
                                    u("Code point not allowed in scheme: " + w);
                                    break e
                                }
                                f = "", l = 0, c = "no scheme";
                                continue
                            }
                            if (this._scheme = f, f = "", a) break e;
                            t(this._scheme) && (this._isRelative = !0), c = "file" == this._scheme ? "relative" : this._isRelative && s && s._scheme == this._scheme ? "relative or authority" : this._isRelative ? "authority first slash" : "scheme data"
                        }
                        break;
                    case "scheme data":
                        "?" == w ? (query = "?", c = "query") : "#" == w ? (this._fragment = "#", c = "fragment") : h != w && " " != w && "\n" != w && "\r" != w && (this._schemeData += o(w));
                        break;
                    case "no scheme":
                        if (s && t(s._scheme)) {
                            c = "relative";
                            continue
                        }
                        u("Missing scheme."), n.call(this);
                        break;
                    case "relative or authority":
                        if ("/" != w || "/" != e[l + 1]) {
                            u("Expected /, got: " + w), c = "relative";
                            continue
                        }
                        c = "authority ignore slashes";
                        break;
                    case "relative":
                        if (this._isRelative = !0, "file" != this._scheme && (this._scheme = s._scheme), h == w) {
                            this._host = s._host, this._port = s._port, this._path = s._path.slice(), this._query = s._query, this._username = s._username, this._password = s._password;
                            break e
                        }
                        if ("/" == w || "\\" == w) "\\" == w && u("\\ is an invalid code point."), c = "relative slash";
                        else if ("?" == w) this._host = s._host, this._port = s._port, this._path = s._path.slice(), this._query = "?", this._username = s._username, this._password = s._password, c = "query";
                        else {
                            if ("#" != w) {
                                var x = e[l + 1],
                                    E = e[l + 2];
                                ("file" != this._scheme || !m.test(w) || ":" != x && "|" != x || h != E && "/" != E && "\\" != E && "?" != E && "#" != E) && (this._host = s._host, this._port = s._port, this._username = s._username, this._password = s._password, this._path = s._path.slice(), this._path.pop()), c = "relative path";
                                continue
                            }
                            this._host = s._host, this._port = s._port, this._path = s._path.slice(), this._query = s._query, this._fragment = "#", this._username = s._username, this._password = s._password, c = "fragment"
                        }
                        break;
                    case "relative slash":
                        if ("/" != w && "\\" != w) {
                            "file" != this._scheme && (this._host = s._host, this._port = s._port, this._username = s._username, this._password = s._password), c = "relative path";
                            continue
                        }
                        "\\" == w && u("\\ is an invalid code point."), c = "file" == this._scheme ? "file host" : "authority ignore slashes";
                        break;
                    case "authority first slash":
                        if ("/" != w) {
                            u("Expected '/', got: " + w), c = "authority ignore slashes";
                            continue
                        }
                        c = "authority second slash";
                        break;
                    case "authority second slash":
                        if (c = "authority ignore slashes", "/" != w) {
                            u("Expected '/', got: " + w);
                            continue
                        }
                        break;
                    case "authority ignore slashes":
                        if ("/" != w && "\\" != w) {
                            c = "authority";
                            continue
                        }
                        u("Expected authority, got: " + w);
                        break;
                    case "authority":
                        if ("@" == w) {
                            g && (u("@ already seen."), f += "%40"), g = !0;
                            for (var T = 0; T < f.length; T++) {
                                var _ = f[T];
                                if (" " != _ && "\n" != _ && "\r" != _)
                                    if (":" != _ || null !== this._password) {
                                        var C = o(_);
                                        null !== this._password ? this._password += C : this._username += C
                                    } else this._password = "";
                                else u("Invalid whitespace in authority.")
                            }
                            f = ""
                        } else {
                            if (h == w || "/" == w || "\\" == w || "?" == w || "#" == w) {
                                l -= f.length, f = "", c = "host";
                                continue
                            }
                            f += w
                        }
                        break;
                    case "file host":
                        if (h == w || "/" == w || "\\" == w || "?" == w || "#" == w) {
                            2 != f.length || !m.test(f[0]) || ":" != f[1] && "|" != f[1] ? 0 == f.length ? c = "relative path start" : (this._host = r.call(this, f), f = "", c = "relative path start") : c = "relative path";
                            continue
                        }
                        " " == w || "\n" == w || "\r" == w ? u("Invalid whitespace in file host.") : f += w;
                        break;
                    case "host":
                    case "hostname":
                        if (":" != w || y) {
                            if (h == w || "/" == w || "\\" == w || "?" == w || "#" == w) {
                                if (this._host = r.call(this, f), f = "", c = "relative path start", a) break e;
                                continue
                            }
                            " " != w && "\n" != w && "\r" != w ? ("[" == w ? y = !0 : "]" == w && (y = !1), f += w) : u("Invalid code point in host/hostname: " + w)
                        } else if (this._host = r.call(this, f), f = "", c = "port", "hostname" == a) break e;
                        break;
                    case "port":
                        if (/[0-9]/.test(w)) f += w;
                        else {
                            if (h == w || "/" == w || "\\" == w || "?" == w || "#" == w || a) {
                                if ("" != f) {
                                    var j = parseInt(f, 10);
                                    j != d[this._scheme] && (this._port = j + ""), f = ""
                                }
                                if (a) break e;
                                c = "relative path start";
                                continue
                            }
                            " " == w || "\n" == w || "\r" == w ? u("Invalid code point in port: " + w) : n.call(this)
                        }
                        break;
                    case "relative path start":
                        if ("\\" == w && u("'\\' not allowed in path."), c = "relative path", "/" != w && "\\" != w) continue;
                        break;
                    case "relative path":
                        if (h != w && "/" != w && "\\" != w && (a || "?" != w && "#" != w)) " " != w && "\n" != w && "\r" != w && (f += o(w));
                        else {
                            "\\" == w && u("\\ not allowed in relative path.");
                            var k;
                            (k = p[f.toLowerCase()]) && (f = k), ".." == f ? (this._path.pop(), "/" != w && "\\" != w && this._path.push("")) : "." == f && "/" != w && "\\" != w ? this._path.push("") : "." != f && ("file" == this._scheme && 0 == this._path.length && 2 == f.length && m.test(f[0]) && "|" == f[1] && (f = f[0] + ":"), this._path.push(f)), f = "", "?" == w ? (this._query = "?", c = "query") : "#" == w && (this._fragment = "#", c = "fragment")
                        }
                        break;
                    case "query":
                        a || "#" != w ? h != w && " " != w && "\n" != w && "\r" != w && (this._query += i(w)) : (this._fragment = "#", c = "fragment");
                        break;
                    case "fragment":
                        h != w && " " != w && "\n" != w && "\r" != w && (this._fragment += w)
                }
                l++
            }
        }

        function s() {
            this._scheme = "", this._schemeData = "", this._username = "", this._password = null, this._host = "", this._port = "", this._path = [], this._query = "", this._fragment = "", this._isInvalid = !1, this._isRelative = !1
        }

        function u(e, t) {
            void 0 === t || t instanceof u || (t = new u(String(t))), this._url = e, s.call(this);
            var n = e.replace(/^[ \t\r\n\f]+|[ \t\r\n\f]+$/g, "");
            a.call(this, n, null, t)
        }
        var c = !1;
        if (!e.forceJURL) try {
            var l = new URL("b", "http://a");
            l.pathname = "c%20d", c = "http://a/c%20d" === l.href
        } catch (f) {}
        if (!c) {
            var d = Object.create(null);
            d.ftp = 21, d.file = 0, d.gopher = 70, d.http = 80, d.https = 443, d.ws = 80, d.wss = 443;
            var p = Object.create(null);
            p["%2e"] = ".", p[".%2e"] = "..", p["%2e."] = "..", p["%2e%2e"] = "..";
            var h = void 0,
                m = /[a-zA-Z]/,
                v = /[a-zA-Z0-9\+\-\.]/;
            u.prototype = {
                toString: function() {
                    return this.href
                },
                get href() {
                    if (this._isInvalid) return this._url;
                    var e = "";
                    return ("" != this._username || null != this._password) && (e = this._username + (null != this._password ? ":" + this._password : "") + "@"), this.protocol + (this._isRelative ? "//" + e + this.host : "") + this.pathname + this._query + this._fragment
                },
                set href(e) {
                    s.call(this), a.call(this, e)
                },
                get protocol() {
                    return this._scheme + ":"
                },
                set protocol(e) {
                    this._isInvalid || a.call(this, e + ":", "scheme start")
                },
                get host() {
                    return this._isInvalid ? "" : this._port ? this._host + ":" + this._port : this._host
                },
                set host(e) {
                    !this._isInvalid && this._isRelative && a.call(this, e, "host")
                },
                get hostname() {
                    return this._host
                },
                set hostname(e) {
                    !this._isInvalid && this._isRelative && a.call(this, e, "hostname")
                },
                get port() {
                    return this._port
                },
                set port(e) {
                    !this._isInvalid && this._isRelative && a.call(this, e, "port")
                },
                get pathname() {
                    return this._isInvalid ? "" : this._isRelative ? "/" + this._path.join("/") : this._schemeData
                },
                set pathname(e) {
                    !this._isInvalid && this._isRelative && (this._path = [], a.call(this, e, "relative path start"))
                },
                get search() {
                    return this._isInvalid || !this._query || "?" == this._query ? "" : this._query
                },
                set search(e) {
                    !this._isInvalid && this._isRelative && (this._query = "?", "?" == e[0] && (e = e.slice(1)), a.call(this, e, "query"))
                },
                get hash() {
                    return this._isInvalid || !this._fragment || "#" == this._fragment ? "" : this._fragment
                },
                set hash(e) {
                    this._isInvalid || (this._fragment = "#", "#" == e[0] && (e = e.slice(1)), a.call(this, e, "fragment"))
                },
                get origin() {
                    var e;
                    if (this._isInvalid || !this._scheme) return "";
                    switch (this._scheme) {
                        case "data":
                        case "file":
                        case "javascript":
                        case "mailto":
                            return "null"
                    }
                    return e = this.host, e ? this._scheme + "://" + e : ""
                }
            };
            var g = e.URL;
            g && (u.createObjectURL = function(e) {
                return g.createObjectURL.apply(g, arguments)
            }, u.revokeObjectURL = function(e) {
                g.revokeObjectURL(e)
            }), e.URL = u
        }
    }(this),
    function(e) {
        "function" != typeof e.matches && (e.matches = e.msMatchesSelector || e.mozMatchesSelector || e.webkitMatchesSelector || function(e) {
            for (var t = this, n = (t.document || t.ownerDocument).querySelectorAll(e), r = 0; n[r] && n[r] !== t;) ++r;
            return !!n[r]
        }), "function" != typeof e.closest && (e.closest = function(e) {
            for (var t = this; t && 11 != t.nodeType;) {
                if (t.matches(e)) return t;
                t = t.parentElement
            }
            return null
        })
    }(Element.prototype),
    function(e) {
        function t(e) {
            return "string" == typeof e ? document.createTextNode(e) : e
        }

        function n(e) {
            if (e.length) {
                if (1 === e.length) return t(e[0]);
                var n, r = document.createDocumentFragment();
                for (n = 0; n < e.length; n++) r.appendChild(t(e[n]));
                return r
            }
            throw new Error("DOM Exception 8")
        }
        "prepend" in e || (e.prepend = function() {
            this.insertBefore(n(arguments), this.firstChild)
        }), "append" in e || (e.append = function() {
            this.appendChild(n(arguments))
        }), "before" in e || (e.before = function() {
            this.parentNode && this.parentNode.insertBefore(n(arguments), this)
        }), "after" in e || (e.after = function() {
            this.parentNode && this.parentNode.insertBefore(n(arguments), this.nextSibling)
        }), "replaceWith" in e || (e.replaceWith = function() {
            this.parentNode && this.parentNode.replaceChild(n(arguments), this)
        }), "remove" in e || (e.remove = function() {
            this.parentNode && this.parentNode.removeChild(this)
        })
    }(Element.prototype), String.prototype.endsWith || ! function() {
        "use strict";
        var e = function() {
                try {
                    var e = {},
                        t = Object.defineProperty,
                        n = t(e, e, e) && t
                } catch (r) {}
                return n
            }(),
            t = {}.toString,
            n = function(e) {
                if (null == this) throw TypeError();
                var n = String(this);
                if (e && "[object RegExp]" == t.call(e)) throw TypeError();
                var r = n.length,
                    o = String(e),
                    i = o.length,
                    a = r;
                if (arguments.length > 1) {
                    var s = arguments[1];
                    void 0 !== s && (a = s ? Number(s) : 0, a != a && (a = 0))
                }
                var u = Math.min(Math.max(a, 0), r),
                    c = u - i;
                if (0 > c) return !1;
                for (var l = -1; ++l < i;)
                    if (n.charCodeAt(c + l) != o.charCodeAt(l)) return !1;
                return !0
            };
        e ? e(String.prototype, "endsWith", {
            value: n,
            configurable: !0,
            writable: !0
        }) : String.prototype.endsWith = n
    }(), String.prototype.startsWith || ! function() {
        "use strict";
        var e = function() {
                try {
                    var e = {},
                        t = Object.defineProperty,
                        n = t(e, e, e) && t
                } catch (r) {}
                return n
            }(),
            t = {}.toString,
            n = function(e) {
                if (null == this) throw TypeError();
                var n = String(this);
                if (e && "[object RegExp]" == t.call(e)) throw TypeError();
                var r = n.length,
                    o = String(e),
                    i = o.length,
                    a = arguments.length > 1 ? arguments[1] : void 0,
                    s = a ? Number(a) : 0;
                s != s && (s = 0);
                var u = Math.min(Math.max(s, 0), r);
                if (i + u > r) return !1;
                for (var c = -1; ++c < i;)
                    if (n.charCodeAt(u + c) != o.charCodeAt(c)) return !1;
                return !0
            };
        e ? e(String.prototype, "startsWith", {
            value: n,
            configurable: !0,
            writable: !0
        }) : String.prototype.startsWith = n
    }(), Array.from || ! function() {
        "use strict";
        var e = function() {
                try {
                    var e = {},
                        t = Object.defineProperty,
                        n = t(e, e, e) && t
                } catch (r) {}
                return n || function(e, t, n) {
                    e[t] = n.value
                }
            }(),
            t = Object.prototype.toString,
            n = function(e) {
                return "function" == typeof e || "[object Function]" == t.call(e)
            },
            r = function(e) {
                var t = Number(e);
                return isNaN(t) ? 0 : 0 != t && isFinite(t) ? (t > 0 ? 1 : -1) * Math.floor(Math.abs(t)) : t
            },
            o = Math.pow(2, 53) - 1,
            i = function(e) {
                var t = r(e);
                return Math.min(Math.max(t, 0), o)
            },
            a = function(t) {
                var r = this;
                if (null == t) throw new TypeError("`Array.from` requires an array-like object, not `null` or `undefined`");
                var o, a, s = Object(t);
                arguments.length > 1;
                if (arguments.length > 1) {
                    if (o = arguments[1], !n(o)) throw new TypeError("When provided, the second argument to `Array.from` must be a function");
                    arguments.length > 2 && (a = arguments[2])
                }
                for (var u, c, l = i(s.length), f = n(r) ? Object(new r(l)) : new Array(l), d = 0; l > d;) u = s[d], c = o ? "undefined" == typeof a ? o(u, d) : o.call(a, u, d) : u, e(f, d, {
                    value: c,
                    configurable: !0,
                    enumerable: !0
                }), ++d;
                return f.length = l, f
            };
        e(Array, "from", {
            value: a,
            configurable: !0,
            writable: !0
        })
    }(),
    function(e) {
        "use strict";
        "undefined" == typeof e && (e = {}), "undefined" == typeof e.performance && (e.performance = {}), e._perfRefForUserTimingPolyfill = e.performance, e.performance.userTimingJsNow = !1, e.performance.userTimingJsNowPrefixed = !1, e.performance.userTimingJsUserTiming = !1, e.performance.userTimingJsUserTimingPrefixed = !1, e.performance.userTimingJsPerformanceTimeline = !1, e.performance.userTimingJsPerformanceTimelinePrefixed = !1;
        var t, n, r = [],
            o = [],
            i = null;
        if ("function" != typeof e.performance.now) {
            for (e.performance.userTimingJsNow = !0, o = ["webkitNow", "msNow", "mozNow"], t = 0; t < o.length; t++)
                if ("function" == typeof e.performance[o[t]]) {
                    e.performance.now = e.performance[o[t]], e.performance.userTimingJsNowPrefixed = !0;
                    break
                }
            var a = +new Date;
            e.performance.timing && e.performance.timing.navigationStart && (a = e.performance.timing.navigationStart), "function" != typeof e.performance.now && (Date.now ? e.performance.now = function() {
                return Date.now() - a
            } : e.performance.now = function() {
                return +new Date - a
            })
        }
        var s = function() {},
            u = function() {},
            c = [],
            l = !1,
            f = !1;
        if ("function" != typeof e.performance.getEntries || "function" != typeof e.performance.mark) {
            for ("function" == typeof e.performance.getEntries && "function" != typeof e.performance.mark && (f = !0), e.performance.userTimingJsPerformanceTimeline = !0, r = ["webkit", "moz"], o = ["getEntries", "getEntriesByName", "getEntriesByType"], t = 0; t < o.length; t++)
                for (n = 0; n < r.length; n++) i = r[n] + o[t].substr(0, 1).toUpperCase() + o[t].substr(1), "function" == typeof e.performance[i] && (e.performance[o[t]] = e.performance[i], e.performance.userTimingJsPerformanceTimelinePrefixed = !0);
            s = function(e) {
                c.push(e), "measure" === e.entryType && (l = !0)
            };
            var d = function() {
                l && (c.sort(function(e, t) {
                    return e.startTime - t.startTime
                }), l = !1)
            };
            if (u = function(e, n) {
                    for (t = 0; t < c.length;) c[t].entryType === e && ("undefined" == typeof n || c[t].name === n) ? c.splice(t, 1) : t++
                }, "function" != typeof e.performance.getEntries || f) {
                var p = e.performance.getEntries;
                e.performance.getEntries = function() {
                    d();
                    var t = c.slice(0);
                    return f && p && (Array.prototype.push.apply(t, p.call(e.performance)), t.sort(function(e, t) {
                        return e.startTime - t.startTime
                    })), t
                }
            }
            if ("function" != typeof e.performance.getEntriesByType || f) {
                var h = e.performance.getEntriesByType;
                e.performance.getEntriesByType = function(n) {
                    if ("undefined" == typeof n || "mark" !== n && "measure" !== n) return f && h ? h.call(e.performance, n) : [];
                    "measure" === n && d();
                    var r = [];
                    for (t = 0; t < c.length; t++) c[t].entryType === n && r.push(c[t]);
                    return r
                }
            }
            if ("function" != typeof e.performance.getEntriesByName || f) {
                var m = e.performance.getEntriesByName;
                e.performance.getEntriesByName = function(n, r) {
                    if (r && "mark" !== r && "measure" !== r) return f && m ? m.call(e.performance, n, r) : [];
                    "undefined" != typeof r && "measure" === r && d();
                    var o = [];
                    for (t = 0; t < c.length; t++)("undefined" == typeof r || c[t].entryType === r) && c[t].name === n && o.push(c[t]);
                    return f && m && (Array.prototype.push.apply(o, m.call(e.performance, n, r)), o.sort(function(e, t) {
                        return e.startTime - t.startTime
                    })), o
                }
            }
        }
        if ("function" != typeof e.performance.mark) {
            for (e.performance.userTimingJsUserTiming = !0, r = ["webkit", "moz", "ms"], o = ["mark", "measure", "clearMarks", "clearMeasures"], t = 0; t < o.length; t++)
                for (n = 0; n < r.length; n++) i = r[n] + o[t].substr(0, 1).toUpperCase() + o[t].substr(1), "function" == typeof e.performance[i] && (e.performance[o[t]] = e.performance[i], e.performance.userTimingJsUserTimingPrefixed = !0);
            var v = {};
            "function" != typeof e.performance.mark && (e.performance.mark = function(t) {
                var n = e.performance.now();
                if ("undefined" == typeof t) throw new SyntaxError("Mark name must be specified");
                if (e.performance.timing && t in e.performance.timing) throw new SyntaxError("Mark name is not allowed");
                v[t] || (v[t] = []), v[t].push(n), s({
                    entryType: "mark",
                    name: t,
                    startTime: n,
                    duration: 0
                })
            }), "function" != typeof e.performance.clearMarks && (e.performance.clearMarks = function(e) {
                e ? v[e] = [] : v = {}, u("mark", e)
            }), "function" != typeof e.performance.measure && (e.performance.measure = function(t, n, r) {
                var o = e.performance.now();
                if (!t) throw new Error("Measure must be specified");
                if (!n) return void s({
                    entryType: "measure",
                    name: t,
                    startTime: 0,
                    duration: o
                });
                var i = 0;
                if (e.performance.timing && n in e.performance.timing) {
                    if ("navigationStart" !== n && 0 === e.performance.timing[n]) throw new Error(n + " has a timing of 0");
                    i = e.performance.timing[n] - e.performance.timing.navigationStart
                } else {
                    if (!(n in v)) throw new Error(n + " mark not found");
                    i = v[n][v[n].length - 1]
                }
                var a = o;
                if (r)
                    if (a = 0, e.performance.timing && r in e.performance.timing) {
                        if ("navigationStart" !== r && 0 === e.performance.timing[r]) throw new Error(r + " has a timing of 0");
                        a = e.performance.timing[r] - e.performance.timing.navigationStart
                    } else {
                        if (!(r in v)) throw new Error(r + " mark not found");
                        a = v[r][v[r].length - 1]
                    }
                var u = a - i;
                s({
                    entryType: "measure",
                    name: t,
                    startTime: i,
                    duration: u
                })
            }), "function" != typeof e.performance.clearMeasures && (e.performance.clearMeasures = function(e) {
                u("measure", e)
            })
        }
        "undefined" != typeof define && define.amd ? define([], function() {
            return e.performance
        }) : "undefined" != typeof module && "undefined" != typeof module.exports && (module.exports = e.performance)
    }("undefined" != typeof window ? window : void 0), ! function(e) {
        "use strict";

        function t(e, t, n, o) {
            var i = Object.create((t || r).prototype),
                a = new d(o || []);
            return i._invoke = c(e, n, a), i
        }

        function n(e, t, n) {
            try {
                return {
                    type: "normal",
                    arg: e.call(t, n)
                }
            } catch (r) {
                return {
                    type: "throw",
                    arg: r
                }
            }
        }

        function r() {}

        function o() {}

        function i() {}

        function a(e) {
            ["next", "throw", "return"].forEach(function(t) {
                e[t] = function(e) {
                    return this._invoke(t, e)
                }
            })
        }

        function s(e) {
            this.arg = e
        }

        function u(e) {
            function t(r, o, i, a) {
                var u = n(e[r], e, o);
                if ("throw" !== u.type) {
                    var c = u.arg,
                        l = c.value;
                    return l instanceof s ? Promise.resolve(l.arg).then(function(e) {
                        t("next", e, i, a)
                    }, function(e) {
                        t("throw", e, i, a)
                    }) : Promise.resolve(l).then(function(e) {
                        c.value = e, i(c)
                    }, a)
                }
                a(u.arg)
            }

            function r(e, n) {
                function r() {
                    return new Promise(function(r, o) {
                        t(e, n, r, o)
                    })
                }
                return o = o ? o.then(r, r) : r()
            }
            "object" == typeof process && process.domain && (t = process.domain.bind(t));
            var o;
            this._invoke = r
        }

        function c(e, t, r) {
            var o = E;
            return function(i, a) {
                if (o === _) throw new Error("Generator is already running");
                if (o === C) {
                    if ("throw" === i) throw a;
                    return h()
                }
                for (;;) {
                    var s = r.delegate;
                    if (s) {
                        if ("return" === i || "throw" === i && s.iterator[i] === m) {
                            r.delegate = null;
                            var u = s.iterator["return"];
                            if (u) {
                                var c = n(u, s.iterator, a);
                                if ("throw" === c.type) {
                                    i = "throw", a = c.arg;
                                    continue
                                }
                            }
                            if ("return" === i) continue
                        }
                        var c = n(s.iterator[i], s.iterator, a);
                        if ("throw" === c.type) {
                            r.delegate = null, i = "throw", a = c.arg;
                            continue
                        }
                        i = "next", a = m;
                        var l = c.arg;
                        if (!l.done) return o = T, l;
                        r[s.resultName] = l.value, r.next = s.nextLoc, r.delegate = null
                    }
                    if ("next" === i) o === T ? r.sent = a : r.sent = m;
                    else if ("throw" === i) {
                        if (o === E) throw o = C, a;
                        r.dispatchException(a) && (i = "next", a = m)
                    } else "return" === i && r.abrupt("return", a);
                    o = _;
                    var c = n(e, t, r);
                    if ("normal" === c.type) {
                        o = r.done ? C : T;
                        var l = {
                            value: c.arg,
                            done: r.done
                        };
                        if (c.arg !== j) return l;
                        r.delegate && "next" === i && (a = m)
                    } else "throw" === c.type && (o = C, i = "throw", a = c.arg)
                }
            }
        }

        function l(e) {
            var t = {
                tryLoc: e[0]
            };
            1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
        }

        function f(e) {
            var t = e.completion || {};
            t.type = "normal", delete t.arg, e.completion = t
        }

        function d(e) {
            this.tryEntries = [{
                tryLoc: "root"
            }], e.forEach(l, this), this.reset(!0)
        }

        function p(e) {
            if (e) {
                var t = e[y];
                if (t) return t.call(e);
                if ("function" == typeof e.next) return e;
                if (!isNaN(e.length)) {
                    var n = -1,
                        r = function o() {
                            for (; ++n < e.length;)
                                if (v.call(e, n)) return o.value = e[n], o.done = !1, o;
                            return o.value = m, o.done = !0, o
                        };
                    return r.next = r
                }
            }
            return {
                next: h
            }
        }

        function h() {
            return {
                value: m,
                done: !0
            }
        }
        var m, v = Object.prototype.hasOwnProperty,
            g = "function" == typeof Symbol ? Symbol : {},
            y = g.iterator || "@@iterator",
            b = g.toStringTag || "@@toStringTag",
            w = "object" == typeof module,
            x = e.regeneratorRuntime;
        if (x) return void(w && (module.exports = x));
        x = e.regeneratorRuntime = w ? module.exports : {}, x.wrap = t;
        var E = "suspendedStart",
            T = "suspendedYield",
            _ = "executing",
            C = "completed",
            j = {},
            k = i.prototype = r.prototype;
        o.prototype = k.constructor = i, i.constructor = o, i[b] = o.displayName = "GeneratorFunction", x.isGeneratorFunction = function(e) {
            var t = "function" == typeof e && e.constructor;
            return t ? t === o || "GeneratorFunction" === (t.displayName || t.name) : !1
        }, x.mark = function(e) {
            return Object.setPrototypeOf ? Object.setPrototypeOf(e, i) : (e.__proto__ = i, b in e || (e[b] = "GeneratorFunction")), e.prototype = Object.create(k), e
        }, x.awrap = function(e) {
            return new s(e)
        }, a(u.prototype), x.async = function(e, n, r, o) {
            var i = new u(t(e, n, r, o));
            return x.isGeneratorFunction(n) ? i : i.next().then(function(e) {
                return e.done ? e.value : i.next()
            })
        }, a(k), k[y] = function() {
            return this
        }, k[b] = "Generator", k.toString = function() {
            return "[object Generator]"
        }, x.keys = function(e) {
            var t = [];
            for (var n in e) t.push(n);
            return t.reverse(),
                function r() {
                    for (; t.length;) {
                        var n = t.pop();
                        if (n in e) return r.value = n, r.done = !1, r
                    }
                    return r.done = !0, r
                }
        }, x.values = p, d.prototype = {
            constructor: d,
            reset: function(e) {
                if (this.prev = 0, this.next = 0, this.sent = m, this.done = !1, this.delegate = null, this.tryEntries.forEach(f), !e)
                    for (var t in this) "t" === t.charAt(0) && v.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = m)
            },
            stop: function() {
                this.done = !0;
                var e = this.tryEntries[0],
                    t = e.completion;
                if ("throw" === t.type) throw t.arg;
                return this.rval
            },
            dispatchException: function(e) {
                function t(t, r) {
                    return i.type = "throw", i.arg = e, n.next = t, !!r
                }
                if (this.done) throw e;
                for (var n = this, r = this.tryEntries.length - 1; r >= 0; --r) {
                    var o = this.tryEntries[r],
                        i = o.completion;
                    if ("root" === o.tryLoc) return t("end");
                    if (o.tryLoc <= this.prev) {
                        var a = v.call(o, "catchLoc"),
                            s = v.call(o, "finallyLoc");
                        if (a && s) {
                            if (this.prev < o.catchLoc) return t(o.catchLoc, !0);
                            if (this.prev < o.finallyLoc) return t(o.finallyLoc)
                        } else if (a) {
                            if (this.prev < o.catchLoc) return t(o.catchLoc, !0)
                        } else {
                            if (!s) throw new Error("try statement without catch or finally");
                            if (this.prev < o.finallyLoc) return t(o.finallyLoc)
                        }
                    }
                }
            },
            abrupt: function(e, t) {
                for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                    var r = this.tryEntries[n];
                    if (r.tryLoc <= this.prev && v.call(r, "finallyLoc") && this.prev < r.finallyLoc) {
                        var o = r;
                        break
                    }
                }
                o && ("break" === e || "continue" === e) && o.tryLoc <= t && t <= o.finallyLoc && (o = null);
                var i = o ? o.completion : {};
                return i.type = e, i.arg = t, o ? this.next = o.finallyLoc : this.complete(i), j
            },
            complete: function(e, t) {
                if ("throw" === e.type) throw e.arg;
                "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = e.arg, this.next = "end") : "normal" === e.type && t && (this.next = t)
            },
            finish: function(e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                    var n = this.tryEntries[t];
                    if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), f(n), j
                }
            },
            "catch": function(e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                    var n = this.tryEntries[t];
                    if (n.tryLoc === e) {
                        var r = n.completion;
                        if ("throw" === r.type) {
                            var o = r.arg;
                            f(n)
                        }
                        return o
                    }
                }
                throw new Error("illegal catch attempt")
            },
            delegateYield: function(e, t, n) {
                return this.delegate = {
                    iterator: p(e),
                    resultName: t,
                    nextLoc: n
                }, j
            }
        }
    }("object" == typeof global ? global : "object" == typeof window ? window : "object" == typeof self ? self : this), define.amd = "jquery",
    function(e, t) {
        "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
            if (!e.document) throw new Error("jQuery requires a window with a document");
            return t(e)
        } : t(e)
    }("undefined" != typeof window ? window : this, function(e, t) {
        function n(e) {
            var t = e.length,
                n = Q.type(e);
            return "function" === n || Q.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
        }

        function r(e, t, n) {
            if (Q.isFunction(t)) return Q.grep(e, function(e, r) {
                return !!t.call(e, r, e) !== n
            });
            if (t.nodeType) return Q.grep(e, function(e) {
                return e === t !== n
            });
            if ("string" == typeof t) {
                if (se.test(t)) return Q.filter(t, e, n);
                t = Q.filter(t, e)
            }
            return Q.grep(e, function(e) {
                return X.call(t, e) >= 0 !== n
            })
        }

        function o(e, t) {
            for (;
                (e = e[t]) && 1 !== e.nodeType;);
            return e
        }

        function i(e) {
            var t = he[e] = {};
            return Q.each(e.match(pe) || [], function(e, n) {
                t[n] = !0
            }), t
        }

        function a() {
            K.removeEventListener("DOMContentLoaded", a, !1), e.removeEventListener("load", a, !1), Q.ready()
        }

        function s() {
            Object.defineProperty(this.cache = {}, 0, {
                get: function() {
                    return {}
                }
            }), this.expando = Q.expando + s.uid++
        }

        function u(e, t, n) {
            var r;
            if (void 0 === n && 1 === e.nodeType)
                if (r = "data-" + t.replace(we, "-$1").toLowerCase(), n = e.getAttribute(r), "string" == typeof n) {
                    try {
                        n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : be.test(n) ? Q.parseJSON(n) : n
                    } catch (o) {}
                    ye.set(e, t, n)
                } else n = void 0;
            return n
        }

        function c() {
            return !0
        }

        function l() {
            return !1
        }

        function f() {
            try {
                return K.activeElement
            } catch (e) {}
        }

        function d(e, t) {
            return Q.nodeName(e, "table") && Q.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
        }

        function p(e) {
            return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
        }

        function h(e) {
            var t = Ie.exec(e.type);
            return t ? e.type = t[1] : e.removeAttribute("type"), e
        }

        function m(e, t) {
            for (var n = 0, r = e.length; r > n; n++) ge.set(e[n], "globalEval", !t || ge.get(t[n], "globalEval"))
        }

        function v(e, t) {
            var n, r, o, i, a, s, u, c;
            if (1 === t.nodeType) {
                if (ge.hasData(e) && (i = ge.access(e), a = ge.set(t, i), c = i.events)) {
                    delete a.handle, a.events = {};
                    for (o in c)
                        for (n = 0, r = c[o].length; r > n; n++) Q.event.add(t, o, c[o][n])
                }
                ye.hasData(e) && (s = ye.access(e), u = Q.extend({}, s), ye.set(t, u))
            }
        }

        function g(e, t) {
            var n = e.getElementsByTagName ? e.getElementsByTagName(t || "*") : e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
            return void 0 === t || t && Q.nodeName(e, t) ? Q.merge([e], n) : n
        }

        function y(e, t) {
            var n = t.nodeName.toLowerCase();
            "input" === n && _e.test(e.type) ? t.checked = e.checked : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
        }

        function b(t, n) {
            var r, o = Q(n.createElement(t)).appendTo(n.body),
                i = e.getDefaultComputedStyle && (r = e.getDefaultComputedStyle(o[0])) ? r.display : Q.css(o[0], "display");
            return o.detach(), i
        }

        function w(e) {
            var t = K,
                n = He[e];
            return n || (n = b(e, t), "none" !== n && n || (qe = (qe || Q("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = qe[0].contentDocument, t.write(), t.close(), n = b(e, t), qe.detach()), He[e] = n), n
        }

        function x(e, t, n) {
            var r, o, i, a, s = e.style;
            return n = n || We(e), n && (a = n.getPropertyValue(t) || n[t]), n && ("" !== a || Q.contains(e.ownerDocument, e) || (a = Q.style(e, t)), Be.test(a) && $e.test(t) && (r = s.width, o = s.minWidth, i = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = o, s.maxWidth = i)), void 0 !== a ? a + "" : a
        }

        function E(e, t) {
            return {
                get: function() {
                    return e() ? void delete this.get : (this.get = t).apply(this, arguments)
                }
            }
        }

        function T(e, t) {
            if (t in e) return t;
            for (var n = t[0].toUpperCase() + t.slice(1), r = t, o = Ve.length; o--;)
                if (t = Ve[o] + n, t in e) return t;
            return r
        }

        function _(e, t, n) {
            var r = ze.exec(t);
            return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
        }

        function C(e, t, n, r, o) {
            for (var i = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; 4 > i; i += 2) "margin" === n && (a += Q.css(e, n + Ee[i], !0, o)), r ? ("content" === n && (a -= Q.css(e, "padding" + Ee[i], !0, o)), "margin" !== n && (a -= Q.css(e, "border" + Ee[i] + "Width", !0, o))) : (a += Q.css(e, "padding" + Ee[i], !0, o), "padding" !== n && (a += Q.css(e, "border" + Ee[i] + "Width", !0, o)));
            return a
        }

        function j(e, t, n) {
            var r = !0,
                o = "width" === t ? e.offsetWidth : e.offsetHeight,
                i = We(e),
                a = "border-box" === Q.css(e, "boxSizing", !1, i);
            if (0 >= o || null == o) {
                if (o = x(e, t, i), (0 > o || null == o) && (o = e.style[t]), Be.test(o)) return o;
                r = a && (G.boxSizingReliable() || o === e.style[t]), o = parseFloat(o) || 0
            }
            return o + C(e, t, n || (a ? "border" : "content"), r, i) + "px"
        }

        function k(e, t) {
            for (var n, r, o, i = [], a = 0, s = e.length; s > a; a++) r = e[a], r.style && (i[a] = ge.get(r, "olddisplay"), n = r.style.display, t ? (i[a] || "none" !== n || (r.style.display = ""), "" === r.style.display && Te(r) && (i[a] = ge.access(r, "olddisplay", w(r.nodeName)))) : (o = Te(r), "none" === n && o || ge.set(r, "olddisplay", o ? n : Q.css(r, "display"))));
            for (a = 0; s > a; a++) r = e[a], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? i[a] || "" : "none"));
            return e
        }

        function S(e, t, n, r, o) {
            return new S.prototype.init(e, t, n, r, o)
        }

        function N() {
            return setTimeout(function() {
                Ge = void 0
            }), Ge = Q.now()
        }

        function D(e, t) {
            var n, r = 0,
                o = {
                    height: e
                };
            for (t = t ? 1 : 0; 4 > r; r += 2 - t) n = Ee[r], o["margin" + n] = o["padding" + n] = e;
            return t && (o.opacity = o.width = e), o
        }

        function O(e, t, n) {
            for (var r, o = (nt[t] || []).concat(nt["*"]), i = 0, a = o.length; a > i; i++)
                if (r = o[i].call(n, t, e)) return r
        }

        function L(e, t, n) {
            var r, o, i, a, s, u, c, l, f = this,
                d = {},
                p = e.style,
                h = e.nodeType && Te(e),
                m = ge.get(e, "fxshow");
            n.queue || (s = Q._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, u = s.empty.fire, s.empty.fire = function() {
                s.unqueued || u()
            }), s.unqueued++, f.always(function() {
                f.always(function() {
                    s.unqueued--, Q.queue(e, "fx").length || s.empty.fire()
                })
            })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], c = Q.css(e, "display"), l = "none" === c ? ge.get(e, "olddisplay") || w(e.nodeName) : c, "inline" === l && "none" === Q.css(e, "float") && (p.display = "inline-block")), n.overflow && (p.overflow = "hidden", f.always(function() {
                p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
            }));
            for (r in t)
                if (o = t[r], Ze.exec(o)) {
                    if (delete t[r], i = i || "toggle" === o, o === (h ? "hide" : "show")) {
                        if ("show" !== o || !m || void 0 === m[r]) continue;
                        h = !0
                    }
                    d[r] = m && m[r] || Q.style(e, r)
                } else c = void 0;
            if (Q.isEmptyObject(d)) "inline" === ("none" === c ? w(e.nodeName) : c) && (p.display = c);
            else {
                m ? "hidden" in m && (h = m.hidden) : m = ge.access(e, "fxshow", {}), i && (m.hidden = !h), h ? Q(e).show() : f.done(function() {
                    Q(e).hide()
                }), f.done(function() {
                    var t;
                    ge.remove(e, "fxshow");
                    for (t in d) Q.style(e, t, d[t])
                });
                for (r in d) a = O(h ? m[r] : 0, r, f), r in m || (m[r] = a.start, h && (a.end = a.start, a.start = "width" === r || "height" === r ? 1 : 0))
            }
        }

        function M(e, t) {
            var n, r, o, i, a;
            for (n in e)
                if (r = Q.camelCase(n), o = t[r], i = e[n], Q.isArray(i) && (o = i[1], i = e[n] = i[0]), n !== r && (e[r] = i, delete e[n]), a = Q.cssHooks[r], a && "expand" in a) {
                    i = a.expand(i), delete e[r];
                    for (n in i) n in e || (e[n] = i[n], t[n] = o)
                } else t[r] = o
        }

        function A(e, t, n) {
            var r, o, i = 0,
                a = tt.length,
                s = Q.Deferred().always(function() {
                    delete u.elem
                }),
                u = function() {
                    if (o) return !1;
                    for (var t = Ge || N(), n = Math.max(0, c.startTime + c.duration - t), r = n / c.duration || 0, i = 1 - r, a = 0, u = c.tweens.length; u > a; a++) c.tweens[a].run(i);
                    return s.notifyWith(e, [c, i, n]), 1 > i && u ? n : (s.resolveWith(e, [c]), !1)
                },
                c = s.promise({
                    elem: e,
                    props: Q.extend({}, t),
                    opts: Q.extend(!0, {
                        specialEasing: {}
                    }, n),
                    originalProperties: t,
                    originalOptions: n,
                    startTime: Ge || N(),
                    duration: n.duration,
                    tweens: [],
                    createTween: function(t, n) {
                        var r = Q.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
                        return c.tweens.push(r), r
                    },
                    stop: function(t) {
                        var n = 0,
                            r = t ? c.tweens.length : 0;
                        if (o) return this;
                        for (o = !0; r > n; n++) c.tweens[n].run(1);
                        return t ? s.resolveWith(e, [c, t]) : s.rejectWith(e, [c, t]), this
                    }
                }),
                l = c.props;
            for (M(l, c.opts.specialEasing); a > i; i++)
                if (r = tt[i].call(c, e, l, c.opts)) return r;
            return Q.map(l, O, c), Q.isFunction(c.opts.start) && c.opts.start.call(e, c), Q.fx.timer(Q.extend(u, {
                elem: e,
                anim: c,
                queue: c.opts.queue
            })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
        }

        function P(e) {
            return function(t, n) {
                "string" != typeof t && (n = t, t = "*");
                var r, o = 0,
                    i = t.toLowerCase().match(pe) || [];
                if (Q.isFunction(n))
                    for (; r = i[o++];) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
            }
        }

        function I(e, t, n, r) {
            function o(s) {
                var u;
                return i[s] = !0, Q.each(e[s] || [], function(e, s) {
                    var c = s(t, n, r);
                    return "string" != typeof c || a || i[c] ? a ? !(u = c) : void 0 : (t.dataTypes.unshift(c), o(c), !1)
                }), u
            }
            var i = {},
                a = e === bt;
            return o(t.dataTypes[0]) || !i["*"] && o("*")
        }

        function R(e, t) {
            var n, r, o = Q.ajaxSettings.flatOptions || {};
            for (n in t) void 0 !== t[n] && ((o[n] ? e : r || (r = {}))[n] = t[n]);
            return r && Q.extend(!0, e, r), e
        }

        function F(e, t, n) {
            for (var r, o, i, a, s = e.contents, u = e.dataTypes;
                "*" === u[0];) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
            if (r)
                for (o in s)
                    if (s[o] && s[o].test(r)) {
                        u.unshift(o);
                        break
                    }
            if (u[0] in n) i = u[0];
            else {
                for (o in n) {
                    if (!u[0] || e.converters[o + " " + u[0]]) {
                        i = o;
                        break
                    }
                    a || (a = o)
                }
                i = i || a
            }
            return i ? (i !== u[0] && u.unshift(i), n[i]) : void 0
        }

        function q(e, t, n, r) {
            var o, i, a, s, u, c = {},
                l = e.dataTypes.slice();
            if (l[1])
                for (a in e.converters) c[a.toLowerCase()] = e.converters[a];
            for (i = l.shift(); i;)
                if (e.responseFields[i] && (n[e.responseFields[i]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = i, i = l.shift())
                    if ("*" === i) i = u;
                    else if ("*" !== u && u !== i) {
                if (a = c[u + " " + i] || c["* " + i], !a)
                    for (o in c)
                        if (s = o.split(" "), s[1] === i && (a = c[u + " " + s[0]] || c["* " + s[0]])) {
                            a === !0 ? a = c[o] : c[o] !== !0 && (i = s[0], l.unshift(s[1]));
                            break
                        }
                if (a !== !0)
                    if (a && e["throws"]) t = a(t);
                    else try {
                        t = a(t)
                    } catch (f) {
                        return {
                            state: "parsererror",
                            error: a ? f : "No conversion from " + u + " to " + i
                        }
                    }
            }
            return {
                state: "success",
                data: t
            }
        }

        function H(e, t, n, r) {
            var o;
            if (Q.isArray(t)) Q.each(t, function(t, o) {
                n || _t.test(e) ? r(e, o) : H(e + "[" + ("object" == typeof o ? t : "") + "]", o, n, r)
            });
            else if (n || "object" !== Q.type(t)) r(e, t);
            else
                for (o in t) H(e + "[" + o + "]", t[o], n, r)
        }

        function $(e) {
            return Q.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
        }
        var B = [],
            W = B.slice,
            U = B.concat,
            z = B.push,
            X = B.indexOf,
            Y = {},
            J = Y.toString,
            V = Y.hasOwnProperty,
            G = {},
            K = e.document,
            Z = "2.1.3",
            Q = function(e, t) {
                return new Q.fn.init(e, t)
            },
            ee = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            te = /^-ms-/,
            ne = /-([\da-z])/gi,
            re = function(e, t) {
                return t.toUpperCase()
            };
        Q.fn = Q.prototype = {
            jquery: Z,
            constructor: Q,
            selector: "",
            length: 0,
            toArray: function() {
                return W.call(this)
            },
            get: function(e) {
                return null != e ? 0 > e ? this[e + this.length] : this[e] : W.call(this)
            },
            pushStack: function(e) {
                var t = Q.merge(this.constructor(), e);
                return t.prevObject = this, t.context = this.context, t
            },
            each: function(e, t) {
                return Q.each(this, e, t)
            },
            map: function(e) {
                return this.pushStack(Q.map(this, function(t, n) {
                    return e.call(t, n, t)
                }))
            },
            slice: function() {
                return this.pushStack(W.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            eq: function(e) {
                var t = this.length,
                    n = +e + (0 > e ? t : 0);
                return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
            },
            end: function() {
                return this.prevObject || this.constructor(null)
            },
            push: z,
            sort: B.sort,
            splice: B.splice
        }, Q.extend = Q.fn.extend = function() {
            var e, t, n, r, o, i, a = arguments[0] || {},
                s = 1,
                u = arguments.length,
                c = !1;
            for ("boolean" == typeof a && (c = a, a = arguments[s] || {}, s++), "object" == typeof a || Q.isFunction(a) || (a = {}), s === u && (a = this, s--); u > s; s++)
                if (null != (e = arguments[s]))
                    for (t in e) n = a[t], r = e[t], a !== r && (c && r && (Q.isPlainObject(r) || (o = Q.isArray(r))) ? (o ? (o = !1, i = n && Q.isArray(n) ? n : []) : i = n && Q.isPlainObject(n) ? n : {}, a[t] = Q.extend(c, i, r)) : void 0 !== r && (a[t] = r));
            return a
        }, Q.extend({
            expando: "jQuery" + (Z + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(e) {
                throw new Error(e)
            },
            noop: function() {},
            isFunction: function(e) {
                return "function" === Q.type(e)
            },
            isArray: Array.isArray,
            isWindow: function(e) {
                return null != e && e === e.window
            },
            isNumeric: function(e) {
                return !Q.isArray(e) && e - parseFloat(e) + 1 >= 0
            },
            isPlainObject: function(e) {
                return "object" !== Q.type(e) || e.nodeType || Q.isWindow(e) ? !1 : e.constructor && !V.call(e.constructor.prototype, "isPrototypeOf") ? !1 : !0
            },
            isEmptyObject: function(e) {
                var t;
                for (t in e) return !1;
                return !0
            },
            type: function(e) {
                return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? Y[J.call(e)] || "object" : typeof e
            },
            globalEval: function(e) {
                var t, n = eval;
                e = Q.trim(e), e && (1 === e.indexOf("use strict") ? (t = K.createElement("script"), t.text = e, K.head.appendChild(t).parentNode.removeChild(t)) : n(e))
            },
            camelCase: function(e) {
                return e.replace(te, "ms-").replace(ne, re)
            },
            nodeName: function(e, t) {
                return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
            },
            each: function(e, t, r) {
                var o, i = 0,
                    a = e.length,
                    s = n(e);
                if (r) {
                    if (s)
                        for (; a > i && (o = t.apply(e[i], r), o !== !1); i++);
                    else
                        for (i in e)
                            if (o = t.apply(e[i], r), o === !1) break
                } else if (s)
                    for (; a > i && (o = t.call(e[i], i, e[i]), o !== !1); i++);
                else
                    for (i in e)
                        if (o = t.call(e[i], i, e[i]), o === !1) break; return e
            },
            trim: function(e) {
                return null == e ? "" : (e + "").replace(ee, "")
            },
            makeArray: function(e, t) {
                var r = t || [];
                return null != e && (n(Object(e)) ? Q.merge(r, "string" == typeof e ? [e] : e) : z.call(r, e)), r
            },
            inArray: function(e, t, n) {
                return null == t ? -1 : X.call(t, e, n)
            },
            merge: function(e, t) {
                for (var n = +t.length, r = 0, o = e.length; n > r; r++) e[o++] = t[r];
                return e.length = o, e
            },
            grep: function(e, t, n) {
                for (var r, o = [], i = 0, a = e.length, s = !n; a > i; i++) r = !t(e[i], i), r !== s && o.push(e[i]);
                return o
            },
            map: function(e, t, r) {
                var o, i = 0,
                    a = e.length,
                    s = n(e),
                    u = [];
                if (s)
                    for (; a > i; i++) o = t(e[i], i, r), null != o && u.push(o);
                else
                    for (i in e) o = t(e[i], i, r), null != o && u.push(o);
                return U.apply([], u)
            },
            guid: 1,
            proxy: function(e, t) {
                var n, r, o;
                return "string" == typeof t && (n = e[t], t = e, e = n), Q.isFunction(e) ? (r = W.call(arguments, 2), o = function() {
                    return e.apply(t || this, r.concat(W.call(arguments)))
                }, o.guid = e.guid = e.guid || Q.guid++, o) : void 0
            },
            now: Date.now,
            support: G
        }), Q.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
            Y["[object " + t + "]"] = t.toLowerCase()
        });
        var oe = function(e) {
            function t(e, t, n, r) {
                var o, i, a, s, u, c, f, p, h, m;
                if ((t ? t.ownerDocument || t : H) !== L && O(t), t = t || L, n = n || [], s = t.nodeType, "string" != typeof e || !e || 1 !== s && 9 !== s && 11 !== s) return n;
                if (!r && A) {
                    if (11 !== s && (o = ye.exec(e)))
                        if (a = o[1]) {
                            if (9 === s) {
                                if (i = t.getElementById(a), !i || !i.parentNode) return n;
                                if (i.id === a) return n.push(i), n
                            } else if (t.ownerDocument && (i = t.ownerDocument.getElementById(a)) && F(t, i) && i.id === a) return n.push(i), n
                        } else {
                            if (o[2]) return Z.apply(n, t.getElementsByTagName(e)), n;
                            if ((a = o[3]) && x.getElementsByClassName) return Z.apply(n, t.getElementsByClassName(a)), n
                        }
                    if (x.qsa && (!P || !P.test(e))) {
                        if (p = f = q, h = t, m = 1 !== s && e, 1 === s && "object" !== t.nodeName.toLowerCase()) {
                            for (c = C(e), (f = t.getAttribute("id")) ? p = f.replace(we, "\\$&") : t.setAttribute("id", p), p = "[id='" + p + "'] ", u = c.length; u--;) c[u] = p + d(c[u]);
                            h = be.test(e) && l(t.parentNode) || t, m = c.join(",")
                        }
                        if (m) try {
                            return Z.apply(n, h.querySelectorAll(m)), n
                        } catch (v) {} finally {
                            f || t.removeAttribute("id")
                        }
                    }
                }
                return k(e.replace(ue, "$1"), t, n, r)
            }

            function n() {
                function e(n, r) {
                    return t.push(n + " ") > E.cacheLength && delete e[t.shift()], e[n + " "] = r
                }
                var t = [];
                return e
            }

            function r(e) {
                return e[q] = !0, e
            }

            function o(e) {
                var t = L.createElement("div");
                try {
                    return !!e(t)
                } catch (n) {
                    return !1
                } finally {
                    t.parentNode && t.parentNode.removeChild(t), t = null
                }
            }

            function i(e, t) {
                for (var n = e.split("|"), r = e.length; r--;) E.attrHandle[n[r]] = t
            }

            function a(e, t) {
                var n = t && e,
                    r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || Y) - (~e.sourceIndex || Y);
                if (r) return r;
                if (n)
                    for (; n = n.nextSibling;)
                        if (n === t) return -1;
                return e ? 1 : -1
            }

            function s(e) {
                return function(t) {
                    var n = t.nodeName.toLowerCase();
                    return "input" === n && t.type === e
                }
            }

            function u(e) {
                return function(t) {
                    var n = t.nodeName.toLowerCase();
                    return ("input" === n || "button" === n) && t.type === e
                }
            }

            function c(e) {
                return r(function(t) {
                    return t = +t, r(function(n, r) {
                        for (var o, i = e([], n.length, t), a = i.length; a--;) n[o = i[a]] && (n[o] = !(r[o] = n[o]))
                    })
                })
            }

            function l(e) {
                return e && "undefined" != typeof e.getElementsByTagName && e
            }

            function f() {}

            function d(e) {
                for (var t = 0, n = e.length, r = ""; n > t; t++) r += e[t].value;
                return r
            }

            function p(e, t, n) {
                var r = t.dir,
                    o = n && "parentNode" === r,
                    i = B++;
                return t.first ? function(t, n, i) {
                    for (; t = t[r];)
                        if (1 === t.nodeType || o) return e(t, n, i)
                } : function(t, n, a) {
                    var s, u, c = [$, i];
                    if (a) {
                        for (; t = t[r];)
                            if ((1 === t.nodeType || o) && e(t, n, a)) return !0
                    } else
                        for (; t = t[r];)
                            if (1 === t.nodeType || o) {
                                if (u = t[q] || (t[q] = {}), (s = u[r]) && s[0] === $ && s[1] === i) return c[2] = s[2];
                                if (u[r] = c, c[2] = e(t, n, a)) return !0
                            }
                }
            }

            function h(e) {
                return e.length > 1 ? function(t, n, r) {
                    for (var o = e.length; o--;)
                        if (!e[o](t, n, r)) return !1;
                    return !0
                } : e[0]
            }

            function m(e, n, r) {
                for (var o = 0, i = n.length; i > o; o++) t(e, n[o], r);
                return r
            }

            function v(e, t, n, r, o) {
                for (var i, a = [], s = 0, u = e.length, c = null != t; u > s; s++)(i = e[s]) && (!n || n(i, r, o)) && (a.push(i), c && t.push(s));
                return a
            }

            function g(e, t, n, o, i, a) {
                return o && !o[q] && (o = g(o)), i && !i[q] && (i = g(i, a)), r(function(r, a, s, u) {
                    var c, l, f, d = [],
                        p = [],
                        h = a.length,
                        g = r || m(t || "*", s.nodeType ? [s] : s, []),
                        y = !e || !r && t ? g : v(g, d, e, s, u),
                        b = n ? i || (r ? e : h || o) ? [] : a : y;
                    if (n && n(y, b, s, u), o)
                        for (c = v(b, p), o(c, [], s, u), l = c.length; l--;)(f = c[l]) && (b[p[l]] = !(y[p[l]] = f));
                    if (r) {
                        if (i || e) {
                            if (i) {
                                for (c = [], l = b.length; l--;)(f = b[l]) && c.push(y[l] = f);
                                i(null, b = [], c, u)
                            }
                            for (l = b.length; l--;)(f = b[l]) && (c = i ? ee(r, f) : d[l]) > -1 && (r[c] = !(a[c] = f))
                        }
                    } else b = v(b === a ? b.splice(h, b.length) : b), i ? i(null, a, b, u) : Z.apply(a, b)
                })
            }

            function y(e) {
                for (var t, n, r, o = e.length, i = E.relative[e[0].type], a = i || E.relative[" "], s = i ? 1 : 0, u = p(function(e) {
                        return e === t
                    }, a, !0), c = p(function(e) {
                        return ee(t, e) > -1
                    }, a, !0), l = [function(e, n, r) {
                        var o = !i && (r || n !== S) || ((t = n).nodeType ? u(e, n, r) : c(e, n, r));
                        return t = null, o
                    }]; o > s; s++)
                    if (n = E.relative[e[s].type]) l = [p(h(l), n)];
                    else {
                        if (n = E.filter[e[s].type].apply(null, e[s].matches), n[q]) {
                            for (r = ++s; o > r && !E.relative[e[r].type]; r++);
                            return g(s > 1 && h(l), s > 1 && d(e.slice(0, s - 1).concat({
                                value: " " === e[s - 2].type ? "*" : ""
                            })).replace(ue, "$1"), n, r > s && y(e.slice(s, r)), o > r && y(e = e.slice(r)), o > r && d(e));
                        }
                        l.push(n)
                    }
                return h(l)
            }

            function b(e, n) {
                var o = n.length > 0,
                    i = e.length > 0,
                    a = function(r, a, s, u, c) {
                        var l, f, d, p = 0,
                            h = "0",
                            m = r && [],
                            g = [],
                            y = S,
                            b = r || i && E.find.TAG("*", c),
                            w = $ += null == y ? 1 : Math.random() || .1,
                            x = b.length;
                        for (c && (S = a !== L && a); h !== x && null != (l = b[h]); h++) {
                            if (i && l) {
                                for (f = 0; d = e[f++];)
                                    if (d(l, a, s)) {
                                        u.push(l);
                                        break
                                    }
                                c && ($ = w)
                            }
                            o && ((l = !d && l) && p--, r && m.push(l))
                        }
                        if (p += h, o && h !== p) {
                            for (f = 0; d = n[f++];) d(m, g, a, s);
                            if (r) {
                                if (p > 0)
                                    for (; h--;) m[h] || g[h] || (g[h] = G.call(u));
                                g = v(g)
                            }
                            Z.apply(u, g), c && !r && g.length > 0 && p + n.length > 1 && t.uniqueSort(u)
                        }
                        return c && ($ = w, S = y), m
                    };
                return o ? r(a) : a
            }
            var w, x, E, T, _, C, j, k, S, N, D, O, L, M, A, P, I, R, F, q = "sizzle" + 1 * new Date,
                H = e.document,
                $ = 0,
                B = 0,
                W = n(),
                U = n(),
                z = n(),
                X = function(e, t) {
                    return e === t && (D = !0), 0
                },
                Y = 1 << 31,
                J = {}.hasOwnProperty,
                V = [],
                G = V.pop,
                K = V.push,
                Z = V.push,
                Q = V.slice,
                ee = function(e, t) {
                    for (var n = 0, r = e.length; r > n; n++)
                        if (e[n] === t) return n;
                    return -1
                },
                te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                ne = "[\\x20\\t\\r\\n\\f]",
                re = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                oe = re.replace("w", "w#"),
                ie = "\\[" + ne + "*(" + re + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + oe + "))|)" + ne + "*\\]",
                ae = ":(" + re + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ie + ")*)|.*)\\)|)",
                se = new RegExp(ne + "+", "g"),
                ue = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"),
                ce = new RegExp("^" + ne + "*," + ne + "*"),
                le = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"),
                fe = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"),
                de = new RegExp(ae),
                pe = new RegExp("^" + oe + "$"),
                he = {
                    ID: new RegExp("^#(" + re + ")"),
                    CLASS: new RegExp("^\\.(" + re + ")"),
                    TAG: new RegExp("^(" + re.replace("w", "w*") + ")"),
                    ATTR: new RegExp("^" + ie),
                    PSEUDO: new RegExp("^" + ae),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + te + ")$", "i"),
                    needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i")
                },
                me = /^(?:input|select|textarea|button)$/i,
                ve = /^h\d$/i,
                ge = /^[^{]+\{\s*\[native \w/,
                ye = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                be = /[+~]/,
                we = /'|\\/g,
                xe = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"),
                Ee = function(e, t, n) {
                    var r = "0x" + t - 65536;
                    return r !== r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
                },
                Te = function() {
                    O()
                };
            try {
                Z.apply(V = Q.call(H.childNodes), H.childNodes), V[H.childNodes.length].nodeType
            } catch (_e) {
                Z = {
                    apply: V.length ? function(e, t) {
                        K.apply(e, Q.call(t))
                    } : function(e, t) {
                        for (var n = e.length, r = 0; e[n++] = t[r++];);
                        e.length = n - 1
                    }
                }
            }
            x = t.support = {}, _ = t.isXML = function(e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return t ? "HTML" !== t.nodeName : !1
            }, O = t.setDocument = function(e) {
                var t, n, r = e ? e.ownerDocument || e : H;
                return r !== L && 9 === r.nodeType && r.documentElement ? (L = r, M = r.documentElement, n = r.defaultView, n && n !== n.top && (n.addEventListener ? n.addEventListener("unload", Te, !1) : n.attachEvent && n.attachEvent("onunload", Te)), A = !_(r), x.attributes = o(function(e) {
                    return e.className = "i", !e.getAttribute("className")
                }), x.getElementsByTagName = o(function(e) {
                    return e.appendChild(r.createComment("")), !e.getElementsByTagName("*").length
                }), x.getElementsByClassName = ge.test(r.getElementsByClassName), x.getById = o(function(e) {
                    return M.appendChild(e).id = q, !r.getElementsByName || !r.getElementsByName(q).length
                }), x.getById ? (E.find.ID = function(e, t) {
                    if ("undefined" != typeof t.getElementById && A) {
                        var n = t.getElementById(e);
                        return n && n.parentNode ? [n] : []
                    }
                }, E.filter.ID = function(e) {
                    var t = e.replace(xe, Ee);
                    return function(e) {
                        return e.getAttribute("id") === t
                    }
                }) : (delete E.find.ID, E.filter.ID = function(e) {
                    var t = e.replace(xe, Ee);
                    return function(e) {
                        var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                        return n && n.value === t
                    }
                }), E.find.TAG = x.getElementsByTagName ? function(e, t) {
                    return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : x.qsa ? t.querySelectorAll(e) : void 0
                } : function(e, t) {
                    var n, r = [],
                        o = 0,
                        i = t.getElementsByTagName(e);
                    if ("*" === e) {
                        for (; n = i[o++];) 1 === n.nodeType && r.push(n);
                        return r
                    }
                    return i
                }, E.find.CLASS = x.getElementsByClassName && function(e, t) {
                    return A ? t.getElementsByClassName(e) : void 0
                }, I = [], P = [], (x.qsa = ge.test(r.querySelectorAll)) && (o(function(e) {
                    M.appendChild(e).innerHTML = "<a id='" + q + "'></a><select id='" + q + "-\f]' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && P.push("[*^$]=" + ne + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || P.push("\\[" + ne + "*(?:value|" + te + ")"), e.querySelectorAll("[id~=" + q + "-]").length || P.push("~="), e.querySelectorAll(":checked").length || P.push(":checked"), e.querySelectorAll("a#" + q + "+*").length || P.push(".#.+[+~]")
                }), o(function(e) {
                    var t = r.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && P.push("name" + ne + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || P.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), P.push(",.*:")
                })), (x.matchesSelector = ge.test(R = M.matches || M.webkitMatchesSelector || M.mozMatchesSelector || M.oMatchesSelector || M.msMatchesSelector)) && o(function(e) {
                    x.disconnectedMatch = R.call(e, "div"), R.call(e, "[s!='']:x"), I.push("!=", ae)
                }), P = P.length && new RegExp(P.join("|")), I = I.length && new RegExp(I.join("|")), t = ge.test(M.compareDocumentPosition), F = t || ge.test(M.contains) ? function(e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                        r = t && t.parentNode;
                    return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                } : function(e, t) {
                    if (t)
                        for (; t = t.parentNode;)
                            if (t === e) return !0;
                    return !1
                }, X = t ? function(e, t) {
                    if (e === t) return D = !0, 0;
                    var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !x.sortDetached && t.compareDocumentPosition(e) === n ? e === r || e.ownerDocument === H && F(H, e) ? -1 : t === r || t.ownerDocument === H && F(H, t) ? 1 : N ? ee(N, e) - ee(N, t) : 0 : 4 & n ? -1 : 1)
                } : function(e, t) {
                    if (e === t) return D = !0, 0;
                    var n, o = 0,
                        i = e.parentNode,
                        s = t.parentNode,
                        u = [e],
                        c = [t];
                    if (!i || !s) return e === r ? -1 : t === r ? 1 : i ? -1 : s ? 1 : N ? ee(N, e) - ee(N, t) : 0;
                    if (i === s) return a(e, t);
                    for (n = e; n = n.parentNode;) u.unshift(n);
                    for (n = t; n = n.parentNode;) c.unshift(n);
                    for (; u[o] === c[o];) o++;
                    return o ? a(u[o], c[o]) : u[o] === H ? -1 : c[o] === H ? 1 : 0
                }, r) : L
            }, t.matches = function(e, n) {
                return t(e, null, null, n)
            }, t.matchesSelector = function(e, n) {
                if ((e.ownerDocument || e) !== L && O(e), n = n.replace(fe, "='$1']"), x.matchesSelector && A && (!I || !I.test(n)) && (!P || !P.test(n))) try {
                    var r = R.call(e, n);
                    if (r || x.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
                } catch (o) {}
                return t(n, L, null, [e]).length > 0
            }, t.contains = function(e, t) {
                return (e.ownerDocument || e) !== L && O(e), F(e, t)
            }, t.attr = function(e, t) {
                (e.ownerDocument || e) !== L && O(e);
                var n = E.attrHandle[t.toLowerCase()],
                    r = n && J.call(E.attrHandle, t.toLowerCase()) ? n(e, t, !A) : void 0;
                return void 0 !== r ? r : x.attributes || !A ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
            }, t.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, t.uniqueSort = function(e) {
                var t, n = [],
                    r = 0,
                    o = 0;
                if (D = !x.detectDuplicates, N = !x.sortStable && e.slice(0), e.sort(X), D) {
                    for (; t = e[o++];) t === e[o] && (r = n.push(o));
                    for (; r--;) e.splice(n[r], 1)
                }
                return N = null, e
            }, T = t.getText = function(e) {
                var t, n = "",
                    r = 0,
                    o = e.nodeType;
                if (o) {
                    if (1 === o || 9 === o || 11 === o) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += T(e)
                    } else if (3 === o || 4 === o) return e.nodeValue
                } else
                    for (; t = e[r++];) n += T(t);
                return n
            }, E = t.selectors = {
                cacheLength: 50,
                createPseudo: r,
                match: he,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(e) {
                        return e[1] = e[1].replace(xe, Ee), e[3] = (e[3] || e[4] || e[5] || "").replace(xe, Ee), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                    },
                    PSEUDO: function(e) {
                        var t, n = !e[6] && e[2];
                        return he.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && de.test(n) && (t = C(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(e) {
                        var t = e.replace(xe, Ee).toLowerCase();
                        return "*" === e ? function() {
                            return !0
                        } : function(e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function(e) {
                        var t = W[e + " "];
                        return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && W(e, function(e) {
                            return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(e, n, r) {
                        return function(o) {
                            var i = t.attr(o, e);
                            return null == i ? "!=" === n : n ? (i += "", "=" === n ? i === r : "!=" === n ? i !== r : "^=" === n ? r && 0 === i.indexOf(r) : "*=" === n ? r && i.indexOf(r) > -1 : "$=" === n ? r && i.slice(-r.length) === r : "~=" === n ? (" " + i.replace(se, " ") + " ").indexOf(r) > -1 : "|=" === n ? i === r || i.slice(0, r.length + 1) === r + "-" : !1) : !0
                        }
                    },
                    CHILD: function(e, t, n, r, o) {
                        var i = "nth" !== e.slice(0, 3),
                            a = "last" !== e.slice(-4),
                            s = "of-type" === t;
                        return 1 === r && 0 === o ? function(e) {
                            return !!e.parentNode
                        } : function(t, n, u) {
                            var c, l, f, d, p, h, m = i !== a ? "nextSibling" : "previousSibling",
                                v = t.parentNode,
                                g = s && t.nodeName.toLowerCase(),
                                y = !u && !s;
                            if (v) {
                                if (i) {
                                    for (; m;) {
                                        for (f = t; f = f[m];)
                                            if (s ? f.nodeName.toLowerCase() === g : 1 === f.nodeType) return !1;
                                        h = m = "only" === e && !h && "nextSibling"
                                    }
                                    return !0
                                }
                                if (h = [a ? v.firstChild : v.lastChild], a && y) {
                                    for (l = v[q] || (v[q] = {}), c = l[e] || [], p = c[0] === $ && c[1], d = c[0] === $ && c[2], f = p && v.childNodes[p]; f = ++p && f && f[m] || (d = p = 0) || h.pop();)
                                        if (1 === f.nodeType && ++d && f === t) {
                                            l[e] = [$, p, d];
                                            break
                                        }
                                } else if (y && (c = (t[q] || (t[q] = {}))[e]) && c[0] === $) d = c[1];
                                else
                                    for (;
                                        (f = ++p && f && f[m] || (d = p = 0) || h.pop()) && ((s ? f.nodeName.toLowerCase() !== g : 1 !== f.nodeType) || !++d || (y && ((f[q] || (f[q] = {}))[e] = [$, d]), f !== t)););
                                return d -= o, d === r || d % r === 0 && d / r >= 0
                            }
                        }
                    },
                    PSEUDO: function(e, n) {
                        var o, i = E.pseudos[e] || E.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                        return i[q] ? i(n) : i.length > 1 ? (o = [e, e, "", n], E.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function(e, t) {
                            for (var r, o = i(e, n), a = o.length; a--;) r = ee(e, o[a]), e[r] = !(t[r] = o[a])
                        }) : function(e) {
                            return i(e, 0, o)
                        }) : i
                    }
                },
                pseudos: {
                    not: r(function(e) {
                        var t = [],
                            n = [],
                            o = j(e.replace(ue, "$1"));
                        return o[q] ? r(function(e, t, n, r) {
                            for (var i, a = o(e, null, r, []), s = e.length; s--;)(i = a[s]) && (e[s] = !(t[s] = i))
                        }) : function(e, r, i) {
                            return t[0] = e, o(t, null, i, n), t[0] = null, !n.pop()
                        }
                    }),
                    has: r(function(e) {
                        return function(n) {
                            return t(e, n).length > 0
                        }
                    }),
                    contains: r(function(e) {
                        return e = e.replace(xe, Ee),
                            function(t) {
                                return (t.textContent || t.innerText || T(t)).indexOf(e) > -1
                            }
                    }),
                    lang: r(function(e) {
                        return pe.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(xe, Ee).toLowerCase(),
                            function(t) {
                                var n;
                                do
                                    if (n = A ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-");
                                while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1
                            }
                    }),
                    target: function(t) {
                        var n = e.location && e.location.hash;
                        return n && n.slice(1) === t.id
                    },
                    root: function(e) {
                        return e === M
                    },
                    focus: function(e) {
                        return e === L.activeElement && (!L.hasFocus || L.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: function(e) {
                        return e.disabled === !1
                    },
                    disabled: function(e) {
                        return e.disabled === !0
                    },
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function(e) {
                        return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(e) {
                        return !E.pseudos.empty(e)
                    },
                    header: function(e) {
                        return ve.test(e.nodeName)
                    },
                    input: function(e) {
                        return me.test(e.nodeName)
                    },
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function(e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: c(function() {
                        return [0]
                    }),
                    last: c(function(e, t) {
                        return [t - 1]
                    }),
                    eq: c(function(e, t, n) {
                        return [0 > n ? n + t : n]
                    }),
                    even: c(function(e, t) {
                        for (var n = 0; t > n; n += 2) e.push(n);
                        return e
                    }),
                    odd: c(function(e, t) {
                        for (var n = 1; t > n; n += 2) e.push(n);
                        return e
                    }),
                    lt: c(function(e, t, n) {
                        for (var r = 0 > n ? n + t : n; --r >= 0;) e.push(r);
                        return e
                    }),
                    gt: c(function(e, t, n) {
                        for (var r = 0 > n ? n + t : n; ++r < t;) e.push(r);
                        return e
                    })
                }
            }, E.pseudos.nth = E.pseudos.eq;
            for (w in {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) E.pseudos[w] = s(w);
            for (w in {
                    submit: !0,
                    reset: !0
                }) E.pseudos[w] = u(w);
            return f.prototype = E.filters = E.pseudos, E.setFilters = new f, C = t.tokenize = function(e, n) {
                var r, o, i, a, s, u, c, l = U[e + " "];
                if (l) return n ? 0 : l.slice(0);
                for (s = e, u = [], c = E.preFilter; s;) {
                    (!r || (o = ce.exec(s))) && (o && (s = s.slice(o[0].length) || s), u.push(i = [])), r = !1, (o = le.exec(s)) && (r = o.shift(), i.push({
                        value: r,
                        type: o[0].replace(ue, " ")
                    }), s = s.slice(r.length));
                    for (a in E.filter) !(o = he[a].exec(s)) || c[a] && !(o = c[a](o)) || (r = o.shift(), i.push({
                        value: r,
                        type: a,
                        matches: o
                    }), s = s.slice(r.length));
                    if (!r) break
                }
                return n ? s.length : s ? t.error(e) : U(e, u).slice(0)
            }, j = t.compile = function(e, t) {
                var n, r = [],
                    o = [],
                    i = z[e + " "];
                if (!i) {
                    for (t || (t = C(e)), n = t.length; n--;) i = y(t[n]), i[q] ? r.push(i) : o.push(i);
                    i = z(e, b(o, r)), i.selector = e
                }
                return i
            }, k = t.select = function(e, t, n, r) {
                var o, i, a, s, u, c = "function" == typeof e && e,
                    f = !r && C(e = c.selector || e);
                if (n = n || [], 1 === f.length) {
                    if (i = f[0] = f[0].slice(0), i.length > 2 && "ID" === (a = i[0]).type && x.getById && 9 === t.nodeType && A && E.relative[i[1].type]) {
                        if (t = (E.find.ID(a.matches[0].replace(xe, Ee), t) || [])[0], !t) return n;
                        c && (t = t.parentNode), e = e.slice(i.shift().value.length)
                    }
                    for (o = he.needsContext.test(e) ? 0 : i.length; o-- && (a = i[o], !E.relative[s = a.type]);)
                        if ((u = E.find[s]) && (r = u(a.matches[0].replace(xe, Ee), be.test(i[0].type) && l(t.parentNode) || t))) {
                            if (i.splice(o, 1), e = r.length && d(i), !e) return Z.apply(n, r), n;
                            break
                        }
                }
                return (c || j(e, f))(r, t, !A, n, be.test(e) && l(t.parentNode) || t), n
            }, x.sortStable = q.split("").sort(X).join("") === q, x.detectDuplicates = !!D, O(), x.sortDetached = o(function(e) {
                return 1 & e.compareDocumentPosition(L.createElement("div"))
            }), o(function(e) {
                return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
            }) || i("type|href|height|width", function(e, t, n) {
                return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
            }), x.attributes && o(function(e) {
                return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
            }) || i("value", function(e, t, n) {
                return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
            }), o(function(e) {
                return null == e.getAttribute("disabled")
            }) || i(te, function(e, t, n) {
                var r;
                return n ? void 0 : e[t] === !0 ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
            }), t
        }(e);
        Q.find = oe, Q.expr = oe.selectors, Q.expr[":"] = Q.expr.pseudos, Q.unique = oe.uniqueSort, Q.text = oe.getText, Q.isXMLDoc = oe.isXML, Q.contains = oe.contains;
        var ie = Q.expr.match.needsContext,
            ae = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
            se = /^.[^:#\[\.,]*$/;
        Q.filter = function(e, t, n) {
            var r = t[0];
            return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? Q.find.matchesSelector(r, e) ? [r] : [] : Q.find.matches(e, Q.grep(t, function(e) {
                return 1 === e.nodeType
            }))
        }, Q.fn.extend({
            find: function(e) {
                var t, n = this.length,
                    r = [],
                    o = this;
                if ("string" != typeof e) return this.pushStack(Q(e).filter(function() {
                    for (t = 0; n > t; t++)
                        if (Q.contains(o[t], this)) return !0
                }));
                for (t = 0; n > t; t++) Q.find(e, o[t], r);
                return r = this.pushStack(n > 1 ? Q.unique(r) : r), r.selector = this.selector ? this.selector + " " + e : e, r
            },
            filter: function(e) {
                return this.pushStack(r(this, e || [], !1))
            },
            not: function(e) {
                return this.pushStack(r(this, e || [], !0))
            },
            is: function(e) {
                return !!r(this, "string" == typeof e && ie.test(e) ? Q(e) : e || [], !1).length
            }
        });
        var ue, ce = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
            le = Q.fn.init = function(e, t) {
                var n, r;
                if (!e) return this;
                if ("string" == typeof e) {
                    if (n = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : ce.exec(e), !n || !n[1] && t) return !t || t.jquery ? (t || ue).find(e) : this.constructor(t).find(e);
                    if (n[1]) {
                        if (t = t instanceof Q ? t[0] : t, Q.merge(this, Q.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : K, !0)), ae.test(n[1]) && Q.isPlainObject(t))
                            for (n in t) Q.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
                        return this
                    }
                    return r = K.getElementById(n[2]), r && r.parentNode && (this.length = 1, this[0] = r), this.context = K, this.selector = e, this
                }
                return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : Q.isFunction(e) ? "undefined" != typeof ue.ready ? ue.ready(e) : e(Q) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), Q.makeArray(e, this))
            };
        le.prototype = Q.fn, ue = Q(K);
        var fe = /^(?:parents|prev(?:Until|All))/,
            de = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
        Q.extend({
            dir: function(e, t, n) {
                for (var r = [], o = void 0 !== n;
                    (e = e[t]) && 9 !== e.nodeType;)
                    if (1 === e.nodeType) {
                        if (o && Q(e).is(n)) break;
                        r.push(e)
                    }
                return r
            },
            sibling: function(e, t) {
                for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
                return n
            }
        }), Q.fn.extend({
            has: function(e) {
                var t = Q(e, this),
                    n = t.length;
                return this.filter(function() {
                    for (var e = 0; n > e; e++)
                        if (Q.contains(this, t[e])) return !0
                })
            },
            closest: function(e, t) {
                for (var n, r = 0, o = this.length, i = [], a = ie.test(e) || "string" != typeof e ? Q(e, t || this.context) : 0; o > r; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && Q.find.matchesSelector(n, e))) {
                            i.push(n);
                            break
                        }
                return this.pushStack(i.length > 1 ? Q.unique(i) : i)
            },
            index: function(e) {
                return e ? "string" == typeof e ? X.call(Q(e), this[0]) : X.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(e, t) {
                return this.pushStack(Q.unique(Q.merge(this.get(), Q(e, t))))
            },
            addBack: function(e) {
                return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
            }
        }), Q.each({
            parent: function(e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t : null
            },
            parents: function(e) {
                return Q.dir(e, "parentNode")
            },
            parentsUntil: function(e, t, n) {
                return Q.dir(e, "parentNode", n)
            },
            next: function(e) {
                return o(e, "nextSibling")
            },
            prev: function(e) {
                return o(e, "previousSibling")
            },
            nextAll: function(e) {
                return Q.dir(e, "nextSibling")
            },
            prevAll: function(e) {
                return Q.dir(e, "previousSibling")
            },
            nextUntil: function(e, t, n) {
                return Q.dir(e, "nextSibling", n)
            },
            prevUntil: function(e, t, n) {
                return Q.dir(e, "previousSibling", n)
            },
            siblings: function(e) {
                return Q.sibling((e.parentNode || {}).firstChild, e)
            },
            children: function(e) {
                return Q.sibling(e.firstChild)
            },
            contents: function(e) {
                return e.contentDocument || Q.merge([], e.childNodes)
            }
        }, function(e, t) {
            Q.fn[e] = function(n, r) {
                var o = Q.map(this, t, n);
                return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (o = Q.filter(r, o)), this.length > 1 && (de[e] || Q.unique(o), fe.test(e) && o.reverse()), this.pushStack(o)
            }
        });
        var pe = /\S+/g,
            he = {};
        Q.Callbacks = function(e) {
            e = "string" == typeof e ? he[e] || i(e) : Q.extend({}, e);
            var t, n, r, o, a, s, u = [],
                c = !e.once && [],
                l = function(i) {
                    for (t = e.memory && i, n = !0, s = o || 0, o = 0, a = u.length, r = !0; u && a > s; s++)
                        if (u[s].apply(i[0], i[1]) === !1 && e.stopOnFalse) {
                            t = !1;
                            break
                        }
                    r = !1, u && (c ? c.length && l(c.shift()) : t ? u = [] : f.disable())
                },
                f = {
                    add: function() {
                        if (u) {
                            var n = u.length;
                            ! function i(t) {
                                Q.each(t, function(t, n) {
                                    var r = Q.type(n);
                                    "function" === r ? e.unique && f.has(n) || u.push(n) : n && n.length && "string" !== r && i(n)
                                })
                            }(arguments), r ? a = u.length : t && (o = n, l(t))
                        }
                        return this
                    },
                    remove: function() {
                        return u && Q.each(arguments, function(e, t) {
                            for (var n;
                                (n = Q.inArray(t, u, n)) > -1;) u.splice(n, 1), r && (a >= n && a--, s >= n && s--)
                        }), this
                    },
                    has: function(e) {
                        return e ? Q.inArray(e, u) > -1 : !(!u || !u.length)
                    },
                    empty: function() {
                        return u = [], a = 0, this
                    },
                    disable: function() {
                        return u = c = t = void 0, this
                    },
                    disabled: function() {
                        return !u
                    },
                    lock: function() {
                        return c = void 0, t || f.disable(), this
                    },
                    locked: function() {
                        return !c
                    },
                    fireWith: function(e, t) {
                        return !u || n && !c || (t = t || [], t = [e, t.slice ? t.slice() : t], r ? c.push(t) : l(t)), this
                    },
                    fire: function() {
                        return f.fireWith(this, arguments), this
                    },
                    fired: function() {
                        return !!n
                    }
                };
            return f
        }, Q.extend({
            Deferred: function(e) {
                var t = [
                        ["resolve", "done", Q.Callbacks("once memory"), "resolved"],
                        ["reject", "fail", Q.Callbacks("once memory"), "rejected"],
                        ["notify", "progress", Q.Callbacks("memory")]
                    ],
                    n = "pending",
                    r = {
                        state: function() {
                            return n
                        },
                        always: function() {
                            return o.done(arguments).fail(arguments), this
                        },
                        then: function() {
                            var e = arguments;
                            return Q.Deferred(function(n) {
                                Q.each(t, function(t, i) {
                                    var a = Q.isFunction(e[t]) && e[t];
                                    o[i[1]](function() {
                                        var e = a && a.apply(this, arguments);
                                        e && Q.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[i[0] + "With"](this === r ? n.promise() : this, a ? [e] : arguments)
                                    })
                                }), e = null
                            }).promise()
                        },
                        promise: function(e) {
                            return null != e ? Q.extend(e, r) : r
                        }
                    },
                    o = {};
                return r.pipe = r.then, Q.each(t, function(e, i) {
                    var a = i[2],
                        s = i[3];
                    r[i[1]] = a.add, s && a.add(function() {
                        n = s
                    }, t[1 ^ e][2].disable, t[2][2].lock), o[i[0]] = function() {
                        return o[i[0] + "With"](this === o ? r : this, arguments), this
                    }, o[i[0] + "With"] = a.fireWith
                }), r.promise(o), e && e.call(o, o), o
            },
            when: function(e) {
                var t, n, r, o = 0,
                    i = W.call(arguments),
                    a = i.length,
                    s = 1 !== a || e && Q.isFunction(e.promise) ? a : 0,
                    u = 1 === s ? e : Q.Deferred(),
                    c = function(e, n, r) {
                        return function(o) {
                            n[e] = this, r[e] = arguments.length > 1 ? W.call(arguments) : o, r === t ? u.notifyWith(n, r) : --s || u.resolveWith(n, r)
                        }
                    };
                if (a > 1)
                    for (t = new Array(a), n = new Array(a), r = new Array(a); a > o; o++) i[o] && Q.isFunction(i[o].promise) ? i[o].promise().done(c(o, r, i)).fail(u.reject).progress(c(o, n, t)) : --s;
                return s || u.resolveWith(r, i), u.promise()
            }
        });
        var me;
        Q.fn.ready = function(e) {
            return Q.ready.promise().done(e), this
        }, Q.extend({
            isReady: !1,
            readyWait: 1,
            holdReady: function(e) {
                e ? Q.readyWait++ : Q.ready(!0)
            },
            ready: function(e) {
                (e === !0 ? --Q.readyWait : Q.isReady) || (Q.isReady = !0, e !== !0 && --Q.readyWait > 0 || (me.resolveWith(K, [Q]), Q.fn.triggerHandler && (Q(K).triggerHandler("ready"), Q(K).off("ready"))))
            }
        }), Q.ready.promise = function(t) {
            return me || (me = Q.Deferred(), "complete" === K.readyState ? setTimeout(Q.ready) : (K.addEventListener("DOMContentLoaded", a, !1), e.addEventListener("load", a, !1))), me.promise(t)
        }, Q.ready.promise();
        var ve = Q.access = function(e, t, n, r, o, i, a) {
            var s = 0,
                u = e.length,
                c = null == n;
            if ("object" === Q.type(n)) {
                o = !0;
                for (s in n) Q.access(e, t, s, n[s], !0, i, a)
            } else if (void 0 !== r && (o = !0, Q.isFunction(r) || (a = !0), c && (a ? (t.call(e, r), t = null) : (c = t, t = function(e, t, n) {
                    return c.call(Q(e), n)
                })), t))
                for (; u > s; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
            return o ? e : c ? t.call(e) : u ? t(e[0], n) : i
        };
        Q.acceptData = function(e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
        }, s.uid = 1, s.accepts = Q.acceptData, s.prototype = {
            key: function(e) {
                if (!s.accepts(e)) return 0;
                var t = {},
                    n = e[this.expando];
                if (!n) {
                    n = s.uid++;
                    try {
                        t[this.expando] = {
                            value: n
                        }, Object.defineProperties(e, t)
                    } catch (r) {
                        t[this.expando] = n, Q.extend(e, t)
                    }
                }
                return this.cache[n] || (this.cache[n] = {}), n
            },
            set: function(e, t, n) {
                var r, o = this.key(e),
                    i = this.cache[o];
                if ("string" == typeof t) i[t] = n;
                else if (Q.isEmptyObject(i)) Q.extend(this.cache[o], t);
                else
                    for (r in t) i[r] = t[r];
                return i
            },
            get: function(e, t) {
                var n = this.cache[this.key(e)];
                return void 0 === t ? n : n[t]
            },
            access: function(e, t, n) {
                var r;
                return void 0 === t || t && "string" == typeof t && void 0 === n ? (r = this.get(e, t), void 0 !== r ? r : this.get(e, Q.camelCase(t))) : (this.set(e, t, n), void 0 !== n ? n : t)
            },
            remove: function(e, t) {
                var n, r, o, i = this.key(e),
                    a = this.cache[i];
                if (void 0 === t) this.cache[i] = {};
                else {
                    Q.isArray(t) ? r = t.concat(t.map(Q.camelCase)) : (o = Q.camelCase(t), t in a ? r = [t, o] : (r = o, r = r in a ? [r] : r.match(pe) || [])), n = r.length;
                    for (; n--;) delete a[r[n]]
                }
            },
            hasData: function(e) {
                return !Q.isEmptyObject(this.cache[e[this.expando]] || {})
            },
            discard: function(e) {
                e[this.expando] && delete this.cache[e[this.expando]]
            }
        };
        var ge = new s,
            ye = new s,
            be = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            we = /([A-Z])/g;
        Q.extend({
            hasData: function(e) {
                return ye.hasData(e) || ge.hasData(e)
            },
            data: function(e, t, n) {
                return ye.access(e, t, n)
            },
            removeData: function(e, t) {
                ye.remove(e, t)
            },
            _data: function(e, t, n) {
                return ge.access(e, t, n)
            },
            _removeData: function(e, t) {
                ge.remove(e, t)
            }
        }), Q.fn.extend({
            data: function(e, t) {
                var n, r, o, i = this[0],
                    a = i && i.attributes;
                if (void 0 === e) {
                    if (this.length && (o = ye.get(i), 1 === i.nodeType && !ge.get(i, "hasDataAttrs"))) {
                        for (n = a.length; n--;) a[n] && (r = a[n].name, 0 === r.indexOf("data-") && (r = Q.camelCase(r.slice(5)), u(i, r, o[r])));
                        ge.set(i, "hasDataAttrs", !0)
                    }
                    return o
                }
                return "object" == typeof e ? this.each(function() {
                    ye.set(this, e)
                }) : ve(this, function(t) {
                    var n, r = Q.camelCase(e);
                    if (i && void 0 === t) {
                        if (n = ye.get(i, e), void 0 !== n) return n;
                        if (n = ye.get(i, r), void 0 !== n) return n;
                        if (n = u(i, r, void 0), void 0 !== n) return n
                    } else this.each(function() {
                        var n = ye.get(this, r);
                        ye.set(this, r, t), -1 !== e.indexOf("-") && void 0 !== n && ye.set(this, e, t)
                    })
                }, null, t, arguments.length > 1, null, !0)
            },
            removeData: function(e) {
                return this.each(function() {
                    ye.remove(this, e)
                })
            }
        }), Q.extend({
            queue: function(e, t, n) {
                var r;
                return e ? (t = (t || "fx") + "queue", r = ge.get(e, t), n && (!r || Q.isArray(n) ? r = ge.access(e, t, Q.makeArray(n)) : r.push(n)), r || []) : void 0
            },
            dequeue: function(e, t) {
                t = t || "fx";
                var n = Q.queue(e, t),
                    r = n.length,
                    o = n.shift(),
                    i = Q._queueHooks(e, t),
                    a = function() {
                        Q.dequeue(e, t)
                    };
                "inprogress" === o && (o = n.shift(), r--), o && ("fx" === t && n.unshift("inprogress"), delete i.stop, o.call(e, a, i)), !r && i && i.empty.fire()
            },
            _queueHooks: function(e, t) {
                var n = t + "queueHooks";
                return ge.get(e, n) || ge.access(e, n, {
                    empty: Q.Callbacks("once memory").add(function() {
                        ge.remove(e, [t + "queue", n])
                    })
                })
            }
        }), Q.fn.extend({
            queue: function(e, t) {
                var n = 2;
                return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? Q.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                    var n = Q.queue(this, e, t);
                    Q._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && Q.dequeue(this, e)
                })
            },
            dequeue: function(e) {
                return this.each(function() {
                    Q.dequeue(this, e)
                })
            },
            clearQueue: function(e) {
                return this.queue(e || "fx", [])
            },
            promise: function(e, t) {
                var n, r = 1,
                    o = Q.Deferred(),
                    i = this,
                    a = this.length,
                    s = function() {
                        --r || o.resolveWith(i, [i])
                    };
                for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;) n = ge.get(i[a], e + "queueHooks"), n && n.empty && (r++, n.empty.add(s));
                return s(), o.promise(t)
            }
        });
        var xe = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            Ee = ["Top", "Right", "Bottom", "Left"],
            Te = function(e, t) {
                return e = t || e, "none" === Q.css(e, "display") || !Q.contains(e.ownerDocument, e)
            },
            _e = /^(?:checkbox|radio)$/i;
        ! function() {
            var e = K.createDocumentFragment(),
                t = e.appendChild(K.createElement("div")),
                n = K.createElement("input");
            n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), t.appendChild(n), G.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", G.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
        }();
        var Ce = "undefined";
        G.focusinBubbles = "onfocusin" in e;
        var je = /^key/,
            ke = /^(?:mouse|pointer|contextmenu)|click/,
            Se = /^(?:focusinfocus|focusoutblur)$/,
            Ne = /^([^.]*)(?:\.(.+)|)$/;
        Q.event = {
            global: {},
            add: function(e, t, n, r, o) {
                var i, a, s, u, c, l, f, d, p, h, m, v = ge.get(e);
                if (v)
                    for (n.handler && (i = n, n = i.handler, o = i.selector), n.guid || (n.guid = Q.guid++), (u = v.events) || (u = v.events = {}), (a = v.handle) || (a = v.handle = function(t) {
                            return typeof Q !== Ce && Q.event.triggered !== t.type ? Q.event.dispatch.apply(e, arguments) : void 0
                        }), t = (t || "").match(pe) || [""], c = t.length; c--;) s = Ne.exec(t[c]) || [], p = m = s[1], h = (s[2] || "").split(".").sort(), p && (f = Q.event.special[p] || {}, p = (o ? f.delegateType : f.bindType) || p, f = Q.event.special[p] || {}, l = Q.extend({
                        type: p,
                        origType: m,
                        data: r,
                        handler: n,
                        guid: n.guid,
                        selector: o,
                        needsContext: o && Q.expr.match.needsContext.test(o),
                        namespace: h.join(".")
                    }, i), (d = u[p]) || (d = u[p] = [], d.delegateCount = 0, f.setup && f.setup.call(e, r, h, a) !== !1 || e.addEventListener && e.addEventListener(p, a, !1)), f.add && (f.add.call(e, l), l.handler.guid || (l.handler.guid = n.guid)), o ? d.splice(d.delegateCount++, 0, l) : d.push(l), Q.event.global[p] = !0)
            },
            remove: function(e, t, n, r, o) {
                var i, a, s, u, c, l, f, d, p, h, m, v = ge.hasData(e) && ge.get(e);
                if (v && (u = v.events)) {
                    for (t = (t || "").match(pe) || [""], c = t.length; c--;)
                        if (s = Ne.exec(t[c]) || [], p = m = s[1], h = (s[2] || "").split(".").sort(), p) {
                            for (f = Q.event.special[p] || {}, p = (r ? f.delegateType : f.bindType) || p, d = u[p] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = i = d.length; i--;) l = d[i], !o && m !== l.origType || n && n.guid !== l.guid || s && !s.test(l.namespace) || r && r !== l.selector && ("**" !== r || !l.selector) || (d.splice(i, 1), l.selector && d.delegateCount--, f.remove && f.remove.call(e, l));
                            a && !d.length && (f.teardown && f.teardown.call(e, h, v.handle) !== !1 || Q.removeEvent(e, p, v.handle), delete u[p])
                        } else
                            for (p in u) Q.event.remove(e, p + t[c], n, r, !0);
                    Q.isEmptyObject(u) && (delete v.handle, ge.remove(e, "events"))
                }
            },
            trigger: function(t, n, r, o) {
                var i, a, s, u, c, l, f, d = [r || K],
                    p = V.call(t, "type") ? t.type : t,
                    h = V.call(t, "namespace") ? t.namespace.split(".") : [];
                if (a = s = r = r || K, 3 !== r.nodeType && 8 !== r.nodeType && !Se.test(p + Q.event.triggered) && (p.indexOf(".") >= 0 && (h = p.split("."), p = h.shift(), h.sort()), c = p.indexOf(":") < 0 && "on" + p, t = t[Q.expando] ? t : new Q.Event(p, "object" == typeof t && t), t.isTrigger = o ? 2 : 3, t.namespace = h.join("."), t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = r), n = null == n ? [t] : Q.makeArray(n, [t]), f = Q.event.special[p] || {}, o || !f.trigger || f.trigger.apply(r, n) !== !1)) {
                    if (!o && !f.noBubble && !Q.isWindow(r)) {
                        for (u = f.delegateType || p, Se.test(u + p) || (a = a.parentNode); a; a = a.parentNode) d.push(a), s = a;
                        s === (r.ownerDocument || K) && d.push(s.defaultView || s.parentWindow || e)
                    }
                    for (i = 0;
                        (a = d[i++]) && !t.isPropagationStopped();) t.type = i > 1 ? u : f.bindType || p, l = (ge.get(a, "events") || {})[t.type] && ge.get(a, "handle"), l && l.apply(a, n), l = c && a[c], l && l.apply && Q.acceptData(a) && (t.result = l.apply(a, n), t.result === !1 && t.preventDefault());
                    return t.type = p, o || t.isDefaultPrevented() || f._default && f._default.apply(d.pop(), n) !== !1 || !Q.acceptData(r) || c && Q.isFunction(r[p]) && !Q.isWindow(r) && (s = r[c], s && (r[c] = null), Q.event.triggered = p, r[p](), Q.event.triggered = void 0, s && (r[c] = s)), t.result
                }
            },
            dispatch: function(e) {
                e = Q.event.fix(e);
                var t, n, r, o, i, a = [],
                    s = W.call(arguments),
                    u = (ge.get(this, "events") || {})[e.type] || [],
                    c = Q.event.special[e.type] || {};
                if (s[0] = e, e.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, e) !== !1) {
                    for (a = Q.event.handlers.call(this, e, u), t = 0;
                        (o = a[t++]) && !e.isPropagationStopped();)
                        for (e.currentTarget = o.elem, n = 0;
                            (i = o.handlers[n++]) && !e.isImmediatePropagationStopped();)(!e.namespace_re || e.namespace_re.test(i.namespace)) && (e.handleObj = i, e.data = i.data, r = ((Q.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, s), void 0 !== r && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation()));
                    return c.postDispatch && c.postDispatch.call(this, e), e.result
                }
            },
            handlers: function(e, t) {
                var n, r, o, i, a = [],
                    s = t.delegateCount,
                    u = e.target;
                if (s && u.nodeType && (!e.button || "click" !== e.type))
                    for (; u !== this; u = u.parentNode || this)
                        if (u.disabled !== !0 || "click" !== e.type) {
                            for (r = [], n = 0; s > n; n++) i = t[n], o = i.selector + " ", void 0 === r[o] && (r[o] = i.needsContext ? Q(o, this).index(u) >= 0 : Q.find(o, this, null, [u]).length), r[o] && r.push(i);
                            r.length && a.push({
                                elem: u,
                                handlers: r
                            })
                        }
                return s < t.length && a.push({
                    elem: this,
                    handlers: t.slice(s)
                }), a
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function(e, t) {
                    return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function(e, t) {
                    var n, r, o, i = t.button;
                    return null == e.pageX && null != t.clientX && (n = e.target.ownerDocument || K, r = n.documentElement, o = n.body, e.pageX = t.clientX + (r && r.scrollLeft || o && o.scrollLeft || 0) - (r && r.clientLeft || o && o.clientLeft || 0), e.pageY = t.clientY + (r && r.scrollTop || o && o.scrollTop || 0) - (r && r.clientTop || o && o.clientTop || 0)), e.which || void 0 === i || (e.which = 1 & i ? 1 : 2 & i ? 3 : 4 & i ? 2 : 0), e
                }
            },
            fix: function(e) {
                if (e[Q.expando]) return e;
                var t, n, r, o = e.type,
                    i = e,
                    a = this.fixHooks[o];
                for (a || (this.fixHooks[o] = a = ke.test(o) ? this.mouseHooks : je.test(o) ? this.keyHooks : {}), r = a.props ? this.props.concat(a.props) : this.props, e = new Q.Event(i), t = r.length; t--;) n = r[t], e[n] = i[n];
                return e.target || (e.target = K), 3 === e.target.nodeType && (e.target = e.target.parentNode), a.filter ? a.filter(e, i) : e
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function() {
                        return this !== f() && this.focus ? (this.focus(), !1) : void 0
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        return this === f() && this.blur ? (this.blur(), !1) : void 0
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function() {
                        return "checkbox" === this.type && this.click && Q.nodeName(this, "input") ? (this.click(), !1) : void 0
                    },
                    _default: function(e) {
                        return Q.nodeName(e.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(e) {
                        void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                    }
                }
            },
            simulate: function(e, t, n, r) {
                var o = Q.extend(new Q.Event, n, {
                    type: e,
                    isSimulated: !0,
                    originalEvent: {}
                });
                r ? Q.event.trigger(o, null, t) : Q.event.dispatch.call(t, o), o.isDefaultPrevented() && n.preventDefault();
            }
        }, Q.removeEvent = function(e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n, !1)
        }, Q.Event = function(e, t) {
            return this instanceof Q.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? c : l) : this.type = e, t && Q.extend(this, t), this.timeStamp = e && e.timeStamp || Q.now(), void(this[Q.expando] = !0)) : new Q.Event(e, t)
        }, Q.Event.prototype = {
            isDefaultPrevented: l,
            isPropagationStopped: l,
            isImmediatePropagationStopped: l,
            preventDefault: function() {
                var e = this.originalEvent;
                this.isDefaultPrevented = c, e && e.preventDefault && e.preventDefault()
            },
            stopPropagation: function() {
                var e = this.originalEvent;
                this.isPropagationStopped = c, e && e.stopPropagation && e.stopPropagation()
            },
            stopImmediatePropagation: function() {
                var e = this.originalEvent;
                this.isImmediatePropagationStopped = c, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
            }
        }, Q.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function(e, t) {
            Q.event.special[e] = {
                delegateType: t,
                bindType: t,
                handle: function(e) {
                    var n, r = this,
                        o = e.relatedTarget,
                        i = e.handleObj;
                    return (!o || o !== r && !Q.contains(r, o)) && (e.type = i.origType, n = i.handler.apply(this, arguments), e.type = t), n
                }
            }
        }), G.focusinBubbles || Q.each({
            focus: "focusin",
            blur: "focusout"
        }, function(e, t) {
            var n = function(e) {
                Q.event.simulate(t, e.target, Q.event.fix(e), !0)
            };
            Q.event.special[t] = {
                setup: function() {
                    var r = this.ownerDocument || this,
                        o = ge.access(r, t);
                    o || r.addEventListener(e, n, !0), ge.access(r, t, (o || 0) + 1)
                },
                teardown: function() {
                    var r = this.ownerDocument || this,
                        o = ge.access(r, t) - 1;
                    o ? ge.access(r, t, o) : (r.removeEventListener(e, n, !0), ge.remove(r, t))
                }
            }
        }), Q.fn.extend({
            on: function(e, t, n, r, o) {
                var i, a;
                if ("object" == typeof e) {
                    "string" != typeof t && (n = n || t, t = void 0);
                    for (a in e) this.on(a, t, n, e[a], o);
                    return this
                }
                if (null == n && null == r ? (r = t, n = t = void 0) : null == r && ("string" == typeof t ? (r = n, n = void 0) : (r = n, n = t, t = void 0)), r === !1) r = l;
                else if (!r) return this;
                return 1 === o && (i = r, r = function(e) {
                    return Q().off(e), i.apply(this, arguments)
                }, r.guid = i.guid || (i.guid = Q.guid++)), this.each(function() {
                    Q.event.add(this, e, r, n, t)
                })
            },
            one: function(e, t, n, r) {
                return this.on(e, t, n, r, 1)
            },
            off: function(e, t, n) {
                var r, o;
                if (e && e.preventDefault && e.handleObj) return r = e.handleObj, Q(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
                if ("object" == typeof e) {
                    for (o in e) this.off(o, t, e[o]);
                    return this
                }
                return (t === !1 || "function" == typeof t) && (n = t, t = void 0), n === !1 && (n = l), this.each(function() {
                    Q.event.remove(this, e, n, t)
                })
            },
            trigger: function(e, t) {
                return this.each(function() {
                    Q.event.trigger(e, t, this)
                })
            },
            triggerHandler: function(e, t) {
                var n = this[0];
                return n ? Q.event.trigger(e, t, n, !0) : void 0
            }
        });
        var De = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
            Oe = /<([\w:]+)/,
            Le = /<|&#?\w+;/,
            Me = /<(?:script|style|link)/i,
            Ae = /checked\s*(?:[^=]|=\s*.checked.)/i,
            Pe = /^$|\/(?:java|ecma)script/i,
            Ie = /^true\/(.*)/,
            Re = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
            Fe = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                thead: [1, "<table>", "</table>"],
                col: [2, "<table><colgroup>", "</colgroup></table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: [0, "", ""]
            };
        Fe.optgroup = Fe.option, Fe.tbody = Fe.tfoot = Fe.colgroup = Fe.caption = Fe.thead, Fe.th = Fe.td, Q.extend({
            clone: function(e, t, n) {
                var r, o, i, a, s = e.cloneNode(!0),
                    u = Q.contains(e.ownerDocument, e);
                if (!(G.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || Q.isXMLDoc(e)))
                    for (a = g(s), i = g(e), r = 0, o = i.length; o > r; r++) y(i[r], a[r]);
                if (t)
                    if (n)
                        for (i = i || g(e), a = a || g(s), r = 0, o = i.length; o > r; r++) v(i[r], a[r]);
                    else v(e, s);
                return a = g(s, "script"), a.length > 0 && m(a, !u && g(e, "script")), s
            },
            buildFragment: function(e, t, n, r) {
                for (var o, i, a, s, u, c, l = t.createDocumentFragment(), f = [], d = 0, p = e.length; p > d; d++)
                    if (o = e[d], o || 0 === o)
                        if ("object" === Q.type(o)) Q.merge(f, o.nodeType ? [o] : o);
                        else if (Le.test(o)) {
                    for (i = i || l.appendChild(t.createElement("div")), a = (Oe.exec(o) || ["", ""])[1].toLowerCase(), s = Fe[a] || Fe._default, i.innerHTML = s[1] + o.replace(De, "<$1></$2>") + s[2], c = s[0]; c--;) i = i.lastChild;
                    Q.merge(f, i.childNodes), i = l.firstChild, i.textContent = ""
                } else f.push(t.createTextNode(o));
                for (l.textContent = "", d = 0; o = f[d++];)
                    if ((!r || -1 === Q.inArray(o, r)) && (u = Q.contains(o.ownerDocument, o), i = g(l.appendChild(o), "script"), u && m(i), n))
                        for (c = 0; o = i[c++];) Pe.test(o.type || "") && n.push(o);
                return l
            },
            cleanData: function(e) {
                for (var t, n, r, o, i = Q.event.special, a = 0; void 0 !== (n = e[a]); a++) {
                    if (Q.acceptData(n) && (o = n[ge.expando], o && (t = ge.cache[o]))) {
                        if (t.events)
                            for (r in t.events) i[r] ? Q.event.remove(n, r) : Q.removeEvent(n, r, t.handle);
                        ge.cache[o] && delete ge.cache[o]
                    }
                    delete ye.cache[n[ye.expando]]
                }
            }
        }), Q.fn.extend({
            text: function(e) {
                return ve(this, function(e) {
                    return void 0 === e ? Q.text(this) : this.empty().each(function() {
                        (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = e)
                    })
                }, null, e, arguments.length)
            },
            append: function() {
                return this.domManip(arguments, function(e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = d(this, e);
                        t.appendChild(e)
                    }
                })
            },
            prepend: function() {
                return this.domManip(arguments, function(e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = d(this, e);
                        t.insertBefore(e, t.firstChild)
                    }
                })
            },
            before: function() {
                return this.domManip(arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this)
                })
            },
            after: function() {
                return this.domManip(arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                })
            },
            remove: function(e, t) {
                for (var n, r = e ? Q.filter(e, this) : this, o = 0; null != (n = r[o]); o++) t || 1 !== n.nodeType || Q.cleanData(g(n)), n.parentNode && (t && Q.contains(n.ownerDocument, n) && m(g(n, "script")), n.parentNode.removeChild(n));
                return this
            },
            empty: function() {
                for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (Q.cleanData(g(e, !1)), e.textContent = "");
                return this
            },
            clone: function(e, t) {
                return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function() {
                    return Q.clone(this, e, t)
                })
            },
            html: function(e) {
                return ve(this, function(e) {
                    var t = this[0] || {},
                        n = 0,
                        r = this.length;
                    if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                    if ("string" == typeof e && !Me.test(e) && !Fe[(Oe.exec(e) || ["", ""])[1].toLowerCase()]) {
                        e = e.replace(De, "<$1></$2>");
                        try {
                            for (; r > n; n++) t = this[n] || {}, 1 === t.nodeType && (Q.cleanData(g(t, !1)), t.innerHTML = e);
                            t = 0
                        } catch (o) {}
                    }
                    t && this.empty().append(e)
                }, null, e, arguments.length)
            },
            replaceWith: function() {
                var e = arguments[0];
                return this.domManip(arguments, function(t) {
                    e = this.parentNode, Q.cleanData(g(this)), e && e.replaceChild(t, this)
                }), e && (e.length || e.nodeType) ? this : this.remove()
            },
            detach: function(e) {
                return this.remove(e, !0)
            },
            domManip: function(e, t) {
                e = U.apply([], e);
                var n, r, o, i, a, s, u = 0,
                    c = this.length,
                    l = this,
                    f = c - 1,
                    d = e[0],
                    m = Q.isFunction(d);
                if (m || c > 1 && "string" == typeof d && !G.checkClone && Ae.test(d)) return this.each(function(n) {
                    var r = l.eq(n);
                    m && (e[0] = d.call(this, n, r.html())), r.domManip(e, t)
                });
                if (c && (n = Q.buildFragment(e, this[0].ownerDocument, !1, this), r = n.firstChild, 1 === n.childNodes.length && (n = r), r)) {
                    for (o = Q.map(g(n, "script"), p), i = o.length; c > u; u++) a = n, u !== f && (a = Q.clone(a, !0, !0), i && Q.merge(o, g(a, "script"))), t.call(this[u], a, u);
                    if (i)
                        for (s = o[o.length - 1].ownerDocument, Q.map(o, h), u = 0; i > u; u++) a = o[u], Pe.test(a.type || "") && !ge.access(a, "globalEval") && Q.contains(s, a) && (a.src ? Q._evalUrl && Q._evalUrl(a.src) : Q.globalEval(a.textContent.replace(Re, "")))
                }
                return this
            }
        }), Q.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(e, t) {
            Q.fn[e] = function(e) {
                for (var n, r = [], o = Q(e), i = o.length - 1, a = 0; i >= a; a++) n = a === i ? this : this.clone(!0), Q(o[a])[t](n), z.apply(r, n.get());
                return this.pushStack(r)
            }
        });
        var qe, He = {},
            $e = /^margin/,
            Be = new RegExp("^(" + xe + ")(?!px)[a-z%]+$", "i"),
            We = function(t) {
                return t.ownerDocument.defaultView.opener ? t.ownerDocument.defaultView.getComputedStyle(t, null) : e.getComputedStyle(t, null)
            };
        ! function() {
            function t() {
                a.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", a.innerHTML = "", o.appendChild(i);
                var t = e.getComputedStyle(a, null);
                n = "1%" !== t.top, r = "4px" === t.width, o.removeChild(i)
            }
            var n, r, o = K.documentElement,
                i = K.createElement("div"),
                a = K.createElement("div");
            a.style && (a.style.backgroundClip = "content-box", a.cloneNode(!0).style.backgroundClip = "", G.clearCloneStyle = "content-box" === a.style.backgroundClip, i.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", i.appendChild(a), e.getComputedStyle && Q.extend(G, {
                pixelPosition: function() {
                    return t(), n
                },
                boxSizingReliable: function() {
                    return null == r && t(), r
                },
                reliableMarginRight: function() {
                    var t, n = a.appendChild(K.createElement("div"));
                    return n.style.cssText = a.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", n.style.marginRight = n.style.width = "0", a.style.width = "1px", o.appendChild(i), t = !parseFloat(e.getComputedStyle(n, null).marginRight), o.removeChild(i), a.removeChild(n), t
                }
            }))
        }(), Q.swap = function(e, t, n, r) {
            var o, i, a = {};
            for (i in t) a[i] = e.style[i], e.style[i] = t[i];
            o = n.apply(e, r || []);
            for (i in t) e.style[i] = a[i];
            return o
        };
        var Ue = /^(none|table(?!-c[ea]).+)/,
            ze = new RegExp("^(" + xe + ")(.*)$", "i"),
            Xe = new RegExp("^([+-])=(" + xe + ")", "i"),
            Ye = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            Je = {
                letterSpacing: "0",
                fontWeight: "400"
            },
            Ve = ["Webkit", "O", "Moz", "ms"];
        Q.extend({
            cssHooks: {
                opacity: {
                    get: function(e, t) {
                        if (t) {
                            var n = x(e, "opacity");
                            return "" === n ? "1" : n
                        }
                    }
                }
            },
            cssNumber: {
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {
                "float": "cssFloat"
            },
            style: function(e, t, n, r) {
                if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                    var o, i, a, s = Q.camelCase(t),
                        u = e.style;
                    return t = Q.cssProps[s] || (Q.cssProps[s] = T(u, s)), a = Q.cssHooks[t] || Q.cssHooks[s], void 0 === n ? a && "get" in a && void 0 !== (o = a.get(e, !1, r)) ? o : u[t] : (i = typeof n, "string" === i && (o = Xe.exec(n)) && (n = (o[1] + 1) * o[2] + parseFloat(Q.css(e, t)), i = "number"), null != n && n === n && ("number" !== i || Q.cssNumber[s] || (n += "px"), G.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u[t] = n)), void 0)
                }
            },
            css: function(e, t, n, r) {
                var o, i, a, s = Q.camelCase(t);
                return t = Q.cssProps[s] || (Q.cssProps[s] = T(e.style, s)), a = Q.cssHooks[t] || Q.cssHooks[s], a && "get" in a && (o = a.get(e, !0, n)), void 0 === o && (o = x(e, t, r)), "normal" === o && t in Je && (o = Je[t]), "" === n || n ? (i = parseFloat(o), n === !0 || Q.isNumeric(i) ? i || 0 : o) : o
            }
        }), Q.each(["height", "width"], function(e, t) {
            Q.cssHooks[t] = {
                get: function(e, n, r) {
                    return n ? Ue.test(Q.css(e, "display")) && 0 === e.offsetWidth ? Q.swap(e, Ye, function() {
                        return j(e, t, r)
                    }) : j(e, t, r) : void 0
                },
                set: function(e, n, r) {
                    var o = r && We(e);
                    return _(e, n, r ? C(e, t, r, "border-box" === Q.css(e, "boxSizing", !1, o), o) : 0)
                }
            }
        }), Q.cssHooks.marginRight = E(G.reliableMarginRight, function(e, t) {
            return t ? Q.swap(e, {
                display: "inline-block"
            }, x, [e, "marginRight"]) : void 0
        }), Q.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(e, t) {
            Q.cssHooks[e + t] = {
                expand: function(n) {
                    for (var r = 0, o = {}, i = "string" == typeof n ? n.split(" ") : [n]; 4 > r; r++) o[e + Ee[r] + t] = i[r] || i[r - 2] || i[0];
                    return o
                }
            }, $e.test(e) || (Q.cssHooks[e + t].set = _)
        }), Q.fn.extend({
            css: function(e, t) {
                return ve(this, function(e, t, n) {
                    var r, o, i = {},
                        a = 0;
                    if (Q.isArray(t)) {
                        for (r = We(e), o = t.length; o > a; a++) i[t[a]] = Q.css(e, t[a], !1, r);
                        return i
                    }
                    return void 0 !== n ? Q.style(e, t, n) : Q.css(e, t)
                }, e, t, arguments.length > 1)
            },
            show: function() {
                return k(this, !0)
            },
            hide: function() {
                return k(this)
            },
            toggle: function(e) {
                return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                    Te(this) ? Q(this).show() : Q(this).hide()
                })
            }
        }), Q.Tween = S, S.prototype = {
            constructor: S,
            init: function(e, t, n, r, o, i) {
                this.elem = e, this.prop = n, this.easing = o || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = i || (Q.cssNumber[n] ? "" : "px")
            },
            cur: function() {
                var e = S.propHooks[this.prop];
                return e && e.get ? e.get(this) : S.propHooks._default.get(this)
            },
            run: function(e) {
                var t, n = S.propHooks[this.prop];
                return this.options.duration ? this.pos = t = Q.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : S.propHooks._default.set(this), this
            }
        }, S.prototype.init.prototype = S.prototype, S.propHooks = {
            _default: {
                get: function(e) {
                    var t;
                    return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = Q.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
                },
                set: function(e) {
                    Q.fx.step[e.prop] ? Q.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[Q.cssProps[e.prop]] || Q.cssHooks[e.prop]) ? Q.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
                }
            }
        }, S.propHooks.scrollTop = S.propHooks.scrollLeft = {
            set: function(e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
            }
        }, Q.easing = {
            linear: function(e) {
                return e
            },
            swing: function(e) {
                return .5 - Math.cos(e * Math.PI) / 2
            }
        }, Q.fx = S.prototype.init, Q.fx.step = {};
        var Ge, Ke, Ze = /^(?:toggle|show|hide)$/,
            Qe = new RegExp("^(?:([+-])=|)(" + xe + ")([a-z%]*)$", "i"),
            et = /queueHooks$/,
            tt = [L],
            nt = {
                "*": [function(e, t) {
                    var n = this.createTween(e, t),
                        r = n.cur(),
                        o = Qe.exec(t),
                        i = o && o[3] || (Q.cssNumber[e] ? "" : "px"),
                        a = (Q.cssNumber[e] || "px" !== i && +r) && Qe.exec(Q.css(n.elem, e)),
                        s = 1,
                        u = 20;
                    if (a && a[3] !== i) {
                        i = i || a[3], o = o || [], a = +r || 1;
                        do s = s || ".5", a /= s, Q.style(n.elem, e, a + i); while (s !== (s = n.cur() / r) && 1 !== s && --u)
                    }
                    return o && (a = n.start = +a || +r || 0, n.unit = i, n.end = o[1] ? a + (o[1] + 1) * o[2] : +o[2]), n
                }]
            };
        Q.Animation = Q.extend(A, {
                tweener: function(e, t) {
                    Q.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
                    for (var n, r = 0, o = e.length; o > r; r++) n = e[r], nt[n] = nt[n] || [], nt[n].unshift(t)
                },
                prefilter: function(e, t) {
                    t ? tt.unshift(e) : tt.push(e)
                }
            }), Q.speed = function(e, t, n) {
                var r = e && "object" == typeof e ? Q.extend({}, e) : {
                    complete: n || !n && t || Q.isFunction(e) && e,
                    duration: e,
                    easing: n && t || t && !Q.isFunction(t) && t
                };
                return r.duration = Q.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in Q.fx.speeds ? Q.fx.speeds[r.duration] : Q.fx.speeds._default, (null == r.queue || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function() {
                    Q.isFunction(r.old) && r.old.call(this), r.queue && Q.dequeue(this, r.queue)
                }, r
            }, Q.fn.extend({
                fadeTo: function(e, t, n, r) {
                    return this.filter(Te).css("opacity", 0).show().end().animate({
                        opacity: t
                    }, e, n, r)
                },
                animate: function(e, t, n, r) {
                    var o = Q.isEmptyObject(e),
                        i = Q.speed(t, n, r),
                        a = function() {
                            var t = A(this, Q.extend({}, e), i);
                            (o || ge.get(this, "finish")) && t.stop(!0)
                        };
                    return a.finish = a, o || i.queue === !1 ? this.each(a) : this.queue(i.queue, a)
                },
                stop: function(e, t, n) {
                    var r = function(e) {
                        var t = e.stop;
                        delete e.stop, t(n)
                    };
                    return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function() {
                        var t = !0,
                            o = null != e && e + "queueHooks",
                            i = Q.timers,
                            a = ge.get(this);
                        if (o) a[o] && a[o].stop && r(a[o]);
                        else
                            for (o in a) a[o] && a[o].stop && et.test(o) && r(a[o]);
                        for (o = i.length; o--;) i[o].elem !== this || null != e && i[o].queue !== e || (i[o].anim.stop(n), t = !1, i.splice(o, 1));
                        (t || !n) && Q.dequeue(this, e)
                    })
                },
                finish: function(e) {
                    return e !== !1 && (e = e || "fx"), this.each(function() {
                        var t, n = ge.get(this),
                            r = n[e + "queue"],
                            o = n[e + "queueHooks"],
                            i = Q.timers,
                            a = r ? r.length : 0;
                        for (n.finish = !0, Q.queue(this, e, []), o && o.stop && o.stop.call(this, !0), t = i.length; t--;) i[t].elem === this && i[t].queue === e && (i[t].anim.stop(!0), i.splice(t, 1));
                        for (t = 0; a > t; t++) r[t] && r[t].finish && r[t].finish.call(this);
                        delete n.finish
                    })
                }
            }), Q.each(["toggle", "show", "hide"], function(e, t) {
                var n = Q.fn[t];
                Q.fn[t] = function(e, r, o) {
                    return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(D(t, !0), e, r, o)
                }
            }), Q.each({
                slideDown: D("show"),
                slideUp: D("hide"),
                slideToggle: D("toggle"),
                fadeIn: {
                    opacity: "show"
                },
                fadeOut: {
                    opacity: "hide"
                },
                fadeToggle: {
                    opacity: "toggle"
                }
            }, function(e, t) {
                Q.fn[e] = function(e, n, r) {
                    return this.animate(t, e, n, r)
                }
            }), Q.timers = [], Q.fx.tick = function() {
                var e, t = 0,
                    n = Q.timers;
                for (Ge = Q.now(); t < n.length; t++) e = n[t], e() || n[t] !== e || n.splice(t--, 1);
                n.length || Q.fx.stop(), Ge = void 0
            }, Q.fx.timer = function(e) {
                Q.timers.push(e), e() ? Q.fx.start() : Q.timers.pop()
            }, Q.fx.interval = 13, Q.fx.start = function() {
                Ke || (Ke = setInterval(Q.fx.tick, Q.fx.interval))
            }, Q.fx.stop = function() {
                clearInterval(Ke), Ke = null
            }, Q.fx.speeds = {
                slow: 600,
                fast: 200,
                _default: 400
            }, Q.fn.delay = function(e, t) {
                return e = Q.fx ? Q.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
                    var r = setTimeout(t, e);
                    n.stop = function() {
                        clearTimeout(r)
                    }
                })
            },
            function() {
                var e = K.createElement("input"),
                    t = K.createElement("select"),
                    n = t.appendChild(K.createElement("option"));
                e.type = "checkbox", G.checkOn = "" !== e.value, G.optSelected = n.selected, t.disabled = !0, G.optDisabled = !n.disabled, e = K.createElement("input"), e.value = "t", e.type = "radio", G.radioValue = "t" === e.value
            }();
        var rt, ot, it = Q.expr.attrHandle;
        Q.fn.extend({
            attr: function(e, t) {
                return ve(this, Q.attr, e, t, arguments.length > 1)
            },
            removeAttr: function(e) {
                return this.each(function() {
                    Q.removeAttr(this, e)
                })
            }
        }), Q.extend({
            attr: function(e, t, n) {
                var r, o, i = e.nodeType;
                if (e && 3 !== i && 8 !== i && 2 !== i) return typeof e.getAttribute === Ce ? Q.prop(e, t, n) : (1 === i && Q.isXMLDoc(e) || (t = t.toLowerCase(), r = Q.attrHooks[t] || (Q.expr.match.bool.test(t) ? ot : rt)), void 0 === n ? r && "get" in r && null !== (o = r.get(e, t)) ? o : (o = Q.find.attr(e, t), null == o ? void 0 : o) : null !== n ? r && "set" in r && void 0 !== (o = r.set(e, n, t)) ? o : (e.setAttribute(t, n + ""), n) : void Q.removeAttr(e, t))
            },
            removeAttr: function(e, t) {
                var n, r, o = 0,
                    i = t && t.match(pe);
                if (i && 1 === e.nodeType)
                    for (; n = i[o++];) r = Q.propFix[n] || n, Q.expr.match.bool.test(n) && (e[r] = !1), e.removeAttribute(n)
            },
            attrHooks: {
                type: {
                    set: function(e, t) {
                        if (!G.radioValue && "radio" === t && Q.nodeName(e, "input")) {
                            var n = e.value;
                            return e.setAttribute("type", t), n && (e.value = n), t
                        }
                    }
                }
            }
        }), ot = {
            set: function(e, t, n) {
                return t === !1 ? Q.removeAttr(e, n) : e.setAttribute(n, n), n
            }
        }, Q.each(Q.expr.match.bool.source.match(/\w+/g), function(e, t) {
            var n = it[t] || Q.find.attr;
            it[t] = function(e, t, r) {
                var o, i;
                return r || (i = it[t], it[t] = o, o = null != n(e, t, r) ? t.toLowerCase() : null, it[t] = i), o
            }
        });
        var at = /^(?:input|select|textarea|button)$/i;
        Q.fn.extend({
            prop: function(e, t) {
                return ve(this, Q.prop, e, t, arguments.length > 1)
            },
            removeProp: function(e) {
                return this.each(function() {
                    delete this[Q.propFix[e] || e]
                })
            }
        }), Q.extend({
            propFix: {
                "for": "htmlFor",
                "class": "className"
            },
            prop: function(e, t, n) {
                var r, o, i, a = e.nodeType;
                if (e && 3 !== a && 8 !== a && 2 !== a) return i = 1 !== a || !Q.isXMLDoc(e), i && (t = Q.propFix[t] || t, o = Q.propHooks[t]), void 0 !== n ? o && "set" in o && void 0 !== (r = o.set(e, n, t)) ? r : e[t] = n : o && "get" in o && null !== (r = o.get(e, t)) ? r : e[t]
            },
            propHooks: {
                tabIndex: {
                    get: function(e) {
                        return e.hasAttribute("tabindex") || at.test(e.nodeName) || e.href ? e.tabIndex : -1
                    }
                }
            }
        }), G.optSelected || (Q.propHooks.selected = {
            get: function(e) {
                var t = e.parentNode;
                return t && t.parentNode && t.parentNode.selectedIndex, null
            }
        }), Q.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            Q.propFix[this.toLowerCase()] = this
        });
        var st = /[\t\r\n\f]/g;
        Q.fn.extend({
            addClass: function(e) {
                var t, n, r, o, i, a, s = "string" == typeof e && e,
                    u = 0,
                    c = this.length;
                if (Q.isFunction(e)) return this.each(function(t) {
                    Q(this).addClass(e.call(this, t, this.className))
                });
                if (s)
                    for (t = (e || "").match(pe) || []; c > u; u++)
                        if (n = this[u], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(st, " ") : " ")) {
                            for (i = 0; o = t[i++];) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                            a = Q.trim(r), n.className !== a && (n.className = a)
                        }
                return this
            },
            removeClass: function(e) {
                var t, n, r, o, i, a, s = 0 === arguments.length || "string" == typeof e && e,
                    u = 0,
                    c = this.length;
                if (Q.isFunction(e)) return this.each(function(t) {
                    Q(this).removeClass(e.call(this, t, this.className))
                });
                if (s)
                    for (t = (e || "").match(pe) || []; c > u; u++)
                        if (n = this[u], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(st, " ") : "")) {
                            for (i = 0; o = t[i++];)
                                for (; r.indexOf(" " + o + " ") >= 0;) r = r.replace(" " + o + " ", " ");
                            a = e ? Q.trim(r) : "", n.className !== a && (n.className = a)
                        }
                return this
            },
            toggleClass: function(e, t) {
                var n = typeof e;
                return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : Q.isFunction(e) ? this.each(function(n) {
                    Q(this).toggleClass(e.call(this, n, this.className, t), t)
                }) : this.each(function() {
                    if ("string" === n)
                        for (var t, r = 0, o = Q(this), i = e.match(pe) || []; t = i[r++];) o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                    else(n === Ce || "boolean" === n) && (this.className && ge.set(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : ge.get(this, "__className__") || "")
                })
            },
            hasClass: function(e) {
                for (var t = " " + e + " ", n = 0, r = this.length; r > n; n++)
                    if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(st, " ").indexOf(t) >= 0) return !0;
                return !1
            }
        });
        var ut = /\r/g;
        Q.fn.extend({
            val: function(e) {
                var t, n, r, o = this[0]; {
                    if (arguments.length) return r = Q.isFunction(e), this.each(function(n) {
                        var o;
                        1 === this.nodeType && (o = r ? e.call(this, n, Q(this).val()) : e, null == o ? o = "" : "number" == typeof o ? o += "" : Q.isArray(o) && (o = Q.map(o, function(e) {
                            return null == e ? "" : e + ""
                        })), t = Q.valHooks[this.type] || Q.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, o, "value") || (this.value = o))
                    });
                    if (o) return t = Q.valHooks[o.type] || Q.valHooks[o.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(o, "value")) ? n : (n = o.value, "string" == typeof n ? n.replace(ut, "") : null == n ? "" : n)
                }
            }
        }), Q.extend({
            valHooks: {
                option: {
                    get: function(e) {
                        var t = Q.find.attr(e, "value");
                        return null != t ? t : Q.trim(Q.text(e))
                    }
                },
                select: {
                    get: function(e) {
                        for (var t, n, r = e.options, o = e.selectedIndex, i = "select-one" === e.type || 0 > o, a = i ? null : [], s = i ? o + 1 : r.length, u = 0 > o ? s : i ? o : 0; s > u; u++)
                            if (n = r[u], (n.selected || u === o) && (G.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !Q.nodeName(n.parentNode, "optgroup"))) {
                                if (t = Q(n).val(), i) return t;
                                a.push(t)
                            }
                        return a
                    },
                    set: function(e, t) {
                        for (var n, r, o = e.options, i = Q.makeArray(t), a = o.length; a--;) r = o[a], (r.selected = Q.inArray(r.value, i) >= 0) && (n = !0);
                        return n || (e.selectedIndex = -1), i
                    }
                }
            }
        }), Q.each(["radio", "checkbox"], function() {
            Q.valHooks[this] = {
                set: function(e, t) {
                    return Q.isArray(t) ? e.checked = Q.inArray(Q(e).val(), t) >= 0 : void 0
                }
            }, G.checkOn || (Q.valHooks[this].get = function(e) {
                return null === e.getAttribute("value") ? "on" : e.value
            })
        }), Q.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
            Q.fn[t] = function(e, n) {
                return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
            }
        }), Q.fn.extend({
            hover: function(e, t) {
                return this.mouseenter(e).mouseleave(t || e)
            },
            bind: function(e, t, n) {
                return this.on(e, null, t, n)
            },
            unbind: function(e, t) {
                return this.off(e, null, t)
            },
            delegate: function(e, t, n, r) {
                return this.on(t, e, n, r)
            },
            undelegate: function(e, t, n) {
                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
            }
        });
        var ct = Q.now(),
            lt = /\?/;
        Q.parseJSON = function(e) {
            return JSON.parse(e + "")
        }, Q.parseXML = function(e) {
            var t, n;
            if (!e || "string" != typeof e) return null;
            try {
                n = new DOMParser, t = n.parseFromString(e, "text/xml")
            } catch (r) {
                t = void 0
            }
            return (!t || t.getElementsByTagName("parsererror").length) && Q.error("Invalid XML: " + e), t
        };
        var ft = /#.*$/,
            dt = /([?&])_=[^&]*/,
            pt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            ht = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            mt = /^(?:GET|HEAD)$/,
            vt = /^\/\//,
            gt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
            yt = {},
            bt = {},
            wt = "*/".concat("*"),
            xt = e.location.href,
            Et = gt.exec(xt.toLowerCase()) || [];
        Q.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: xt,
                type: "GET",
                isLocal: ht.test(Et[1]),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": wt,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /xml/,
                    html: /html/,
                    json: /json/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": Q.parseJSON,
                    "text xml": Q.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(e, t) {
                return t ? R(R(e, Q.ajaxSettings), t) : R(Q.ajaxSettings, e)
            },
            ajaxPrefilter: P(yt),
            ajaxTransport: P(bt),
            ajax: function(e, t) {
                function n(e, t, n, a) {
                    var u, l, g, y, w, E = t;
                    2 !== b && (b = 2, s && clearTimeout(s), r = void 0, i = a || "", x.readyState = e > 0 ? 4 : 0, u = e >= 200 && 300 > e || 304 === e, n && (y = F(f, x, n)), y = q(f, y, x, u), u ? (f.ifModified && (w = x.getResponseHeader("Last-Modified"), w && (Q.lastModified[o] = w), w = x.getResponseHeader("etag"), w && (Q.etag[o] = w)), 204 === e || "HEAD" === f.type ? E = "nocontent" : 304 === e ? E = "notmodified" : (E = y.state, l = y.data, g = y.error, u = !g)) : (g = E, (e || !E) && (E = "error", 0 > e && (e = 0))), x.status = e, x.statusText = (t || E) + "", u ? h.resolveWith(d, [l, E, x]) : h.rejectWith(d, [x, E, g]), x.statusCode(v), v = void 0, c && p.trigger(u ? "ajaxSuccess" : "ajaxError", [x, f, u ? l : g]), m.fireWith(d, [x, E]), c && (p.trigger("ajaxComplete", [x, f]), --Q.active || Q.event.trigger("ajaxStop")))
                }
                "object" == typeof e && (t = e, e = void 0), t = t || {};
                var r, o, i, a, s, u, c, l, f = Q.ajaxSetup({}, t),
                    d = f.context || f,
                    p = f.context && (d.nodeType || d.jquery) ? Q(d) : Q.event,
                    h = Q.Deferred(),
                    m = Q.Callbacks("once memory"),
                    v = f.statusCode || {},
                    g = {},
                    y = {},
                    b = 0,
                    w = "canceled",
                    x = {
                        readyState: 0,
                        getResponseHeader: function(e) {
                            var t;
                            if (2 === b) {
                                if (!a)
                                    for (a = {}; t = pt.exec(i);) a[t[1].toLowerCase()] = t[2];
                                t = a[e.toLowerCase()]
                            }
                            return null == t ? null : t
                        },
                        getAllResponseHeaders: function() {
                            return 2 === b ? i : null
                        },
                        setRequestHeader: function(e, t) {
                            var n = e.toLowerCase();
                            return b || (e = y[n] = y[n] || e, g[e] = t), this
                        },
                        overrideMimeType: function(e) {
                            return b || (f.mimeType = e), this
                        },
                        statusCode: function(e) {
                            var t;
                            if (e)
                                if (2 > b)
                                    for (t in e) v[t] = [v[t], e[t]];
                                else x.always(e[x.status]);
                            return this
                        },
                        abort: function(e) {
                            var t = e || w;
                            return r && r.abort(t), n(0, t), this
                        }
                    };
                if (h.promise(x).complete = m.add, x.success = x.done, x.error = x.fail, f.url = ((e || f.url || xt) + "").replace(ft, "").replace(vt, Et[1] + "//"), f.type = t.method || t.type || f.method || f.type, f.dataTypes = Q.trim(f.dataType || "*").toLowerCase().match(pe) || [""], null == f.crossDomain && (u = gt.exec(f.url.toLowerCase()), f.crossDomain = !(!u || u[1] === Et[1] && u[2] === Et[2] && (u[3] || ("http:" === u[1] ? "80" : "443")) === (Et[3] || ("http:" === Et[1] ? "80" : "443")))), f.data && f.processData && "string" != typeof f.data && (f.data = Q.param(f.data, f.traditional)), I(yt, f, t, x), 2 === b) return x;
                c = Q.event && f.global, c && 0 === Q.active++ && Q.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !mt.test(f.type), o = f.url, f.hasContent || (f.data && (o = f.url += (lt.test(o) ? "&" : "?") + f.data, delete f.data), f.cache === !1 && (f.url = dt.test(o) ? o.replace(dt, "$1_=" + ct++) : o + (lt.test(o) ? "&" : "?") + "_=" + ct++)), f.ifModified && (Q.lastModified[o] && x.setRequestHeader("If-Modified-Since", Q.lastModified[o]), Q.etag[o] && x.setRequestHeader("If-None-Match", Q.etag[o])), (f.data && f.hasContent && f.contentType !== !1 || t.contentType) && x.setRequestHeader("Content-Type", f.contentType), x.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + wt + "; q=0.01" : "") : f.accepts["*"]);
                for (l in f.headers) x.setRequestHeader(l, f.headers[l]);
                if (f.beforeSend && (f.beforeSend.call(d, x, f) === !1 || 2 === b)) return x.abort();
                w = "abort";
                for (l in {
                        success: 1,
                        error: 1,
                        complete: 1
                    }) x[l](f[l]);
                if (r = I(bt, f, t, x)) {
                    x.readyState = 1, c && p.trigger("ajaxSend", [x, f]), f.async && f.timeout > 0 && (s = setTimeout(function() {
                        x.abort("timeout")
                    }, f.timeout));
                    try {
                        b = 1, r.send(g, n)
                    } catch (E) {
                        if (!(2 > b)) throw E;
                        n(-1, E)
                    }
                } else n(-1, "No Transport");
                return x
            },
            getJSON: function(e, t, n) {
                return Q.get(e, t, n, "json")
            },
            getScript: function(e, t) {
                return Q.get(e, void 0, t, "script")
            }
        }), Q.each(["get", "post"], function(e, t) {
            Q[t] = function(e, n, r, o) {
                return Q.isFunction(n) && (o = o || r, r = n, n = void 0), Q.ajax({
                    url: e,
                    type: t,
                    dataType: o,
                    data: n,
                    success: r
                })
            }
        }), Q._evalUrl = function(e) {
            return Q.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                "throws": !0
            })
        }, Q.fn.extend({
            wrapAll: function(e) {
                var t;
                return Q.isFunction(e) ? this.each(function(t) {
                    Q(this).wrapAll(e.call(this, t))
                }) : (this[0] && (t = Q(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                    for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                    return e
                }).append(this)), this)
            },
            wrapInner: function(e) {
                return Q.isFunction(e) ? this.each(function(t) {
                    Q(this).wrapInner(e.call(this, t))
                }) : this.each(function() {
                    var t = Q(this),
                        n = t.contents();
                    n.length ? n.wrapAll(e) : t.append(e)
                })
            },
            wrap: function(e) {
                var t = Q.isFunction(e);
                return this.each(function(n) {
                    Q(this).wrapAll(t ? e.call(this, n) : e)
                })
            },
            unwrap: function() {
                return this.parent().each(function() {
                    Q.nodeName(this, "body") || Q(this).replaceWith(this.childNodes)
                }).end()
            }
        }), Q.expr.filters.hidden = function(e) {
            return e.offsetWidth <= 0 && e.offsetHeight <= 0
        }, Q.expr.filters.visible = function(e) {
            return !Q.expr.filters.hidden(e)
        };
        var Tt = /%20/g,
            _t = /\[\]$/,
            Ct = /\r?\n/g,
            jt = /^(?:submit|button|image|reset|file)$/i,
            kt = /^(?:input|select|textarea|keygen)/i;
        Q.param = function(e, t) {
            var n, r = [],
                o = function(e, t) {
                    t = Q.isFunction(t) ? t() : null == t ? "" : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
                };
            if (void 0 === t && (t = Q.ajaxSettings && Q.ajaxSettings.traditional), Q.isArray(e) || e.jquery && !Q.isPlainObject(e)) Q.each(e, function() {
                o(this.name, this.value)
            });
            else
                for (n in e) H(n, e[n], t, o);
            return r.join("&").replace(Tt, "+")
        }, Q.fn.extend({
            serialize: function() {
                return Q.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var e = Q.prop(this, "elements");
                    return e ? Q.makeArray(e) : this
                }).filter(function() {
                    var e = this.type;
                    return this.name && !Q(this).is(":disabled") && kt.test(this.nodeName) && !jt.test(e) && (this.checked || !_e.test(e))
                }).map(function(e, t) {
                    var n = Q(this).val();
                    return null == n ? null : Q.isArray(n) ? Q.map(n, function(e) {
                        return {
                            name: t.name,
                            value: e.replace(Ct, "\r\n")
                        }
                    }) : {
                        name: t.name,
                        value: n.replace(Ct, "\r\n")
                    }
                }).get()
            }
        }), Q.ajaxSettings.xhr = function() {
            try {
                return new XMLHttpRequest
            } catch (e) {}
        };
        var St = 0,
            Nt = {},
            Dt = {
                0: 200,
                1223: 204
            },
            Ot = Q.ajaxSettings.xhr();
        e.attachEvent && e.attachEvent("onunload", function() {
            for (var e in Nt) Nt[e]()
        }), G.cors = !!Ot && "withCredentials" in Ot, G.ajax = Ot = !!Ot, Q.ajaxTransport(function(e) {
            var t;
            return G.cors || Ot && !e.crossDomain ? {
                send: function(n, r) {
                    var o, i = e.xhr(),
                        a = ++St;
                    if (i.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                        for (o in e.xhrFields) i[o] = e.xhrFields[o];
                    e.mimeType && i.overrideMimeType && i.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                    for (o in n) i.setRequestHeader(o, n[o]);
                    t = function(e) {
                        return function() {
                            t && (delete Nt[a], t = i.onload = i.onerror = null, "abort" === e ? i.abort() : "error" === e ? r(i.status, i.statusText) : r(Dt[i.status] || i.status, i.statusText, "string" == typeof i.responseText ? {
                                text: i.responseText
                            } : void 0, i.getAllResponseHeaders()))
                        }
                    }, i.onload = t(), i.onerror = t("error"), t = Nt[a] = t("abort");
                    try {
                        i.send(e.hasContent && e.data || null)
                    } catch (s) {
                        if (t) throw s
                    }
                },
                abort: function() {
                    t && t()
                }
            } : void 0
        }), Q.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /(?:java|ecma)script/
            },
            converters: {
                "text script": function(e) {
                    return Q.globalEval(e), e
                }
            }
        }), Q.ajaxPrefilter("script", function(e) {
            void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
        }), Q.ajaxTransport("script", function(e) {
            if (e.crossDomain) {
                var t, n;
                return {
                    send: function(r, o) {
                        t = Q("<script>").prop({
                            async: !0,
                            charset: e.scriptCharset,
                            src: e.url
                        }).on("load error", n = function(e) {
                            t.remove(), n = null, e && o("error" === e.type ? 404 : 200, e.type)
                        }), K.head.appendChild(t[0])
                    },
                    abort: function() {
                        n && n()
                    }
                }
            }
        });
        var Lt = [],
            Mt = /(=)\?(?=&|$)|\?\?/;
        Q.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var e = Lt.pop() || Q.expando + "_" + ct++;
                return this[e] = !0, e
            }
        }), Q.ajaxPrefilter("json jsonp", function(t, n, r) {
            var o, i, a, s = t.jsonp !== !1 && (Mt.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && Mt.test(t.data) && "data");
            return s || "jsonp" === t.dataTypes[0] ? (o = t.jsonpCallback = Q.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(Mt, "$1" + o) : t.jsonp !== !1 && (t.url += (lt.test(t.url) ? "&" : "?") + t.jsonp + "=" + o), t.converters["script json"] = function() {
                return a || Q.error(o + " was not called"), a[0]
            }, t.dataTypes[0] = "json", i = e[o], e[o] = function() {
                a = arguments
            }, r.always(function() {
                e[o] = i, t[o] && (t.jsonpCallback = n.jsonpCallback, Lt.push(o)), a && Q.isFunction(i) && i(a[0]), a = i = void 0
            }), "script") : void 0
        }), Q.parseHTML = function(e, t, n) {
            if (!e || "string" != typeof e) return null;
            "boolean" == typeof t && (n = t, t = !1), t = t || K;
            var r = ae.exec(e),
                o = !n && [];
            return r ? [t.createElement(r[1])] : (r = Q.buildFragment([e], t, o), o && o.length && Q(o).remove(), Q.merge([], r.childNodes))
        };
        var At = Q.fn.load;
        Q.fn.load = function(e, t, n) {
            if ("string" != typeof e && At) return At.apply(this, arguments);
            var r, o, i, a = this,
                s = e.indexOf(" ");
            return s >= 0 && (r = Q.trim(e.slice(s)), e = e.slice(0, s)),
                Q.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (o = "POST"), a.length > 0 && Q.ajax({
                    url: e,
                    type: o,
                    dataType: "html",
                    data: t
                }).done(function(e) {
                    i = arguments, a.html(r ? Q("<div>").append(Q.parseHTML(e)).find(r) : e)
                }).complete(n && function(e, t) {
                    a.each(n, i || [e.responseText, t, e])
                }), this
        }, Q.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
            Q.fn[t] = function(e) {
                return this.on(t, e)
            }
        }), Q.expr.filters.animated = function(e) {
            return Q.grep(Q.timers, function(t) {
                return e === t.elem
            }).length
        };
        var Pt = e.document.documentElement;
        Q.offset = {
            setOffset: function(e, t, n) {
                var r, o, i, a, s, u, c, l = Q.css(e, "position"),
                    f = Q(e),
                    d = {};
                "static" === l && (e.style.position = "relative"), s = f.offset(), i = Q.css(e, "top"), u = Q.css(e, "left"), c = ("absolute" === l || "fixed" === l) && (i + u).indexOf("auto") > -1, c ? (r = f.position(), a = r.top, o = r.left) : (a = parseFloat(i) || 0, o = parseFloat(u) || 0), Q.isFunction(t) && (t = t.call(e, n, s)), null != t.top && (d.top = t.top - s.top + a), null != t.left && (d.left = t.left - s.left + o), "using" in t ? t.using.call(e, d) : f.css(d)
            }
        }, Q.fn.extend({
            offset: function(e) {
                if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                    Q.offset.setOffset(this, e, t)
                });
                var t, n, r = this[0],
                    o = {
                        top: 0,
                        left: 0
                    },
                    i = r && r.ownerDocument;
                if (i) return t = i.documentElement, Q.contains(t, r) ? (typeof r.getBoundingClientRect !== Ce && (o = r.getBoundingClientRect()), n = $(i), {
                    top: o.top + n.pageYOffset - t.clientTop,
                    left: o.left + n.pageXOffset - t.clientLeft
                }) : o
            },
            position: function() {
                if (this[0]) {
                    var e, t, n = this[0],
                        r = {
                            top: 0,
                            left: 0
                        };
                    return "fixed" === Q.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), Q.nodeName(e[0], "html") || (r = e.offset()), r.top += Q.css(e[0], "borderTopWidth", !0), r.left += Q.css(e[0], "borderLeftWidth", !0)), {
                        top: t.top - r.top - Q.css(n, "marginTop", !0),
                        left: t.left - r.left - Q.css(n, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var e = this.offsetParent || Pt; e && !Q.nodeName(e, "html") && "static" === Q.css(e, "position");) e = e.offsetParent;
                    return e || Pt
                })
            }
        }), Q.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(t, n) {
            var r = "pageYOffset" === n;
            Q.fn[t] = function(o) {
                return ve(this, function(t, o, i) {
                    var a = $(t);
                    return void 0 === i ? a ? a[n] : t[o] : void(a ? a.scrollTo(r ? e.pageXOffset : i, r ? i : e.pageYOffset) : t[o] = i)
                }, t, o, arguments.length, null)
            }
        }), Q.each(["top", "left"], function(e, t) {
            Q.cssHooks[t] = E(G.pixelPosition, function(e, n) {
                return n ? (n = x(e, t), Be.test(n) ? Q(e).position()[t] + "px" : n) : void 0
            })
        }), Q.each({
            Height: "height",
            Width: "width"
        }, function(e, t) {
            Q.each({
                padding: "inner" + e,
                content: t,
                "": "outer" + e
            }, function(n, r) {
                Q.fn[r] = function(r, o) {
                    var i = arguments.length && (n || "boolean" != typeof r),
                        a = n || (r === !0 || o === !0 ? "margin" : "border");
                    return ve(this, function(t, n, r) {
                        var o;
                        return Q.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === r ? Q.css(t, n, a) : Q.style(t, n, r, a)
                    }, t, i ? r : void 0, i, null)
                }
            })
        }), Q.fn.size = function() {
            return this.length
        }, Q.fn.andSelf = Q.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
            return Q
        });
        var It = e.jQuery,
            Rt = e.$;
        return Q.noConflict = function(t) {
            return e.$ === Q && (e.$ = Rt), t && e.jQuery === Q && (e.jQuery = It), Q
        }, typeof t === Ce && (e.jQuery = e.$ = Q), Q
    }), delete define.amd, define("github/inspect", ["exports"], function(e) {
        function t(e) {
            for (var t = []; e && (t.push(n(e)), e !== document.body && !e.id);) e = e.parentNode;
            return t.reverse().join(" > ")
        }

        function n(e) {
            if (e === window) return "window";
            var t = [e.nodeName.toLowerCase()],
                n = e.id;
            if (n && t.push("#" + n), "function" == typeof e.getAttribute && e.getAttribute("class")) {
                var r = e.getAttribute("class").trim().split(/\s+/).join(".");
                r && t.push("." + r)
            }
            return t.join("")
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e["default"] = t
    }), define("github/jquery-event-error-context", ["jquery", "./inspect"], function(e, t) {
        function n(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var r = n(e),
            o = n(t),
            i = r["default"].event.dispatch;
        r["default"].event.dispatch = function(e) {
            if ("error" === e.type && e.target === window) return i.apply(this, arguments);
            try {
                return i.apply(this, arguments)
            } catch (t) {
                throw t.failbotContext || (t.failbotContext = {
                    eventType: e.type,
                    eventTarget: o["default"](e.target)
                }), t
            }
        }
    }), define("github/history", ["exports", "jquery"], function(e, t) {
        function n(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function r() {
            return v
        }

        function o() {
            return y
        }

        function i() {
            var e = {
                _id: (new Date).getTime()
            };
            return s(e), e
        }

        function a() {
            return history.length - 1 + g
        }

        function s(e) {
            y = e;
            var t = location.href;
            v[a()] = {
                url: t,
                state: y
            }, v.length = history.length;
            var n = new CustomEvent("statechange", {
                bubbles: !1,
                cancelable: !1
            });
            n.state = y, window.dispatchEvent(n)
        }

        function u(e, t) {
            return m["default"].extend({
                _id: t
            }, e || {})
        }

        function c() {
            return (new Date).getTime()
        }

        function l(e, t, n) {
            g = 0, e = u(e, c()), history.pushState(e, t, n), s(e)
        }

        function f(e, t, n) {
            e = u(e, o()._id), history.replaceState(e, t, n), s(e)
        }

        function d() {
            var e = v[a() - 1];
            return e ? e.url : void 0
        }

        function p() {
            var e = v[a() + 1];
            return e ? e.url : void 0
        }

        function h() {
            function e(e, t, n) {
                this.id = e, this.url = t, n && (this.current = n)
            }
            for (var t = [], n = 0; n < history.length; n++) {
                var r = v[n];
                r ? t.push(new e(r.state._id, r.url, a() === n)) : t.push(new e)
            }
            console.table(t)
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.getEntries = r, e.getState = o, e.pushState = l, e.replaceState = f, e.getBackURL = d, e.getForwardURL = p, e.debug = h;
        var m = n(t),
            v = [],
            g = 0,
            y = i();
        window.addEventListener("popstate", function(e) {
            if (e.state && e.state._id) {
                var t = e.state._id;
                t < o()._id ? g-- : g++, s(e.state)
            }
        }, !0), window.addEventListener("hashchange", function() {
            if (history.length > v.length) {
                var e = u({}, c());
                history.replaceState(e, null, location.href), s(e)
            }
        }, !0)
    }), define("github/proxy-site-detection", ["exports"], function(e) {
        function t() {
            var e = document.querySelector("meta[name=expected-hostname]");
            if (!e) return !1;
            var t = e.content.split(".").slice(-2).join("."),
                n = window.location.hostname.split(".").slice(-2).join(".");
            return t != n
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e["default"] = t()
    }), define("github/failbot", ["exports", "jquery", "./history", "./proxy-site-detection", "./jquery-event-error-context"], function(e, t, n, r) {
        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function i(e) {
            d(e) && s(u(e))
        }

        function a(e) {
            var t = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1];
            s(c(e, t))
        }

        function s(e) {
            var t = document.querySelector("meta[name=browser-errors-url]");
            if (t) {
                var n = t.content;
                m++, window.fetch(n, {
                    method: "post",
                    body: JSON.stringify(e)
                })
            }
        }

        function u(e) {
            var t = e.message,
                n = e.filename,
                r = e.lineno,
                o = e.error;
            return c(o, {
                message: t,
                filename: n,
                lineno: r
            })
        }

        function c(e) {
            var t = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1];
            return p["default"].extend({
                originalHistoryState: JSON.stringify(window.history.state),
                url: window.location.href,
                readyState: document.readyState,
                referrer: document.referrer,
                stack: e && e.stack,
                historyState: JSON.stringify(window.history.state),
                timeSinceLoad: Math.round((new Date).getTime() - v),
                extensionScripts: JSON.stringify(f().sort()),
                navigations: JSON.stringify(n.getEntries()),
                user: l(),
                jquery: p["default"].fn.jquery
            }, e.failbotContext, t)
        }

        function l() {
            var e = document.querySelector("meta[name=user-login]");
            return e ? e.content : void 0
        }

        function f() {
            for (var e = document.getElementsByTagName("script"), t = [], n = 0, r = e.length; r > n; n++) {
                var o = e[n];
                /^(?:chrome-extension|file):/.test(o.src) && t.push(o.src)
            }
            return t
        }

        function d(e) {
            var t = e.lineno,
                n = e.error;
            return h["default"] ? !1 : n && n.stack && t ? g ? !1 : p["default"].fn.fire ? m >= 10 ? !1 : !0 : !1 : !1
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.reportEvent = i, e.reportError = a, e.report = s, e.errorContext = c;
        var p = o(t),
            h = o(r),
            m = 0,
            v = (new Date).getTime(),
            g = !1;
        window.addEventListener("pageshow", function() {
            g = !1
        }), window.addEventListener("pagehide", function() {
            g = !0
        })
    }),
    function(e, t) {
        "use strict";

        function n(e) {
            return h[p] = r.apply(t, e), p++
        }

        function r(e) {
            var n = [].slice.call(arguments, 1);
            return function() {
                "function" == typeof e ? e.apply(t, n) : new Function("" + e)()
            }
        }

        function o(e) {
            if (m) setTimeout(r(o, e), 0);
            else {
                var t = h[e];
                if (t) {
                    m = !0;
                    try {
                        t()
                    } finally {
                        i(e), m = !1
                    }
                }
            }
        }

        function i(e) {
            delete h[e]
        }

        function a() {
            d = function() {
                var e = n(arguments);
                return process.nextTick(r(o, e)), e
            }
        }

        function s() {
            if (e.postMessage && !e.importScripts) {
                var t = !0,
                    n = e.onmessage;
                return e.onmessage = function() {
                    t = !1
                }, e.postMessage("", "*"), e.onmessage = n, t
            }
        }

        function u() {
            var t = "setImmediate$" + Math.random() + "$",
                r = function(n) {
                    n.source === e && "string" == typeof n.data && 0 === n.data.indexOf(t) && o(+n.data.slice(t.length))
                };
            e.addEventListener ? e.addEventListener("message", r, !1) : e.attachEvent("onmessage", r), d = function() {
                var r = n(arguments);
                return e.postMessage(t + r, "*"), r
            }
        }

        function c() {
            var e = new MessageChannel;
            e.port1.onmessage = function(e) {
                var t = e.data;
                o(t)
            }, d = function() {
                var t = n(arguments);
                return e.port2.postMessage(t), t
            }
        }

        function l() {
            var e = v.documentElement;
            d = function() {
                var t = n(arguments),
                    r = v.createElement("script");
                return r.onreadystatechange = function() {
                    o(t), r.onreadystatechange = null, e.removeChild(r), r = null
                }, e.appendChild(r), t
            }
        }

        function f() {
            d = function() {
                var e = n(arguments);
                return setTimeout(r(o, e), 0), e
            }
        }
        if (!e.setImmediate) {
            var d, p = 1,
                h = {},
                m = !1,
                v = e.document,
                g = Object.getPrototypeOf && Object.getPrototypeOf(e);
            g = g && g.setTimeout ? g : e, "[object process]" === {}.toString.call(e.process) ? a() : s() ? u() : e.MessageChannel ? c() : v && "onreadystatechange" in v.createElement("script") ? l() : f(), g.setImmediate = d, g.clearImmediate = i
        }
    }("undefined" == typeof self ? "undefined" == typeof global ? this : global : self), define("setimmediate", ["exports"], function(e) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e["default"] = setImmediate
    }),
    function() {
        var e = require("github/failbot"),
            t = e.reportEvent,
            n = require("setimmediate")["default"];
        window.addEventListener("error", t), n(function() {
            return "#b00m" === window.location.hash ? b00m() : void 0
        })
    }(),
    function(e) {
        "use strict";

        function t() {
            return this instanceof t ? (this.size = 0, this.uid = 0, this.selectors = [], this.indexes = Object.create(this.indexes), void(this.activeIndexes = [])) : new t
        }

        function n(e, t) {
            e = e.slice(0).concat(e["default"]);
            var n, r, o, i, a, s, u = e.length,
                c = t,
                l = [];
            do
                if (f.exec(""), (o = f.exec(c)) && (c = o[3], o[2] || !c))
                    for (n = 0; u > n; n++)
                        if (s = e[n], a = s.selector(o[1])) {
                            for (r = l.length, i = !1; r--;)
                                if (l[r].index === s && l[r].key === a) {
                                    i = !0;
                                    break
                                }
                            i || l.push({
                                index: s,
                                key: a
                            });
                            break
                        }
            while (o);
            return l
        }

        function r(e, t) {
            var n, r, o;
            for (n = 0, r = e.length; r > n; n++)
                if (o = e[n], t.isPrototypeOf(o)) return o
        }

        function o(e, t) {
            return e.id - t.id
        }
        var i = e.document.documentElement,
            a = i.webkitMatchesSelector || i.mozMatchesSelector || i.oMatchesSelector || i.msMatchesSelector;
        t.prototype.matchesSelector = function(e, t) {
            return a.call(e, t)
        }, t.prototype.querySelectorAll = function(e, t) {
            return t.querySelectorAll(e)
        }, t.prototype.indexes = [];
        var s = /^#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/g;
        t.prototype.indexes.push({
            name: "ID",
            selector: function(e) {
                var t;
                return (t = e.match(s)) ? t[0].slice(1) : void 0
            },
            element: function(e) {
                return e.id ? [e.id] : void 0
            }
        });
        var u = /^\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/g;
        t.prototype.indexes.push({
            name: "CLASS",
            selector: function(e) {
                var t;
                return (t = e.match(u)) ? t[0].slice(1) : void 0
            },
            element: function(e) {
                var t = e.className;
                if (t) {
                    if ("string" == typeof t) return t.split(/\s/);
                    if ("object" == typeof t && "baseVal" in t) return t.baseVal.split(/\s/)
                }
            }
        });
        var c = /^((?:[\w\u00c0-\uFFFF\-]|\\.)+)/g;
        t.prototype.indexes.push({
            name: "TAG",
            selector: function(e) {
                var t;
                return (t = e.match(c)) ? t[0].toUpperCase() : void 0
            },
            element: function(e) {
                return [e.nodeName.toUpperCase()]
            }
        }), t.prototype.indexes["default"] = {
            name: "UNIVERSAL",
            selector: function() {
                return !0
            },
            element: function() {
                return [!0]
            }
        };
        var l;
        l = "function" == typeof e.Map ? e.Map : function() {
            function e() {
                this.map = {}
            }
            return e.prototype.get = function(e) {
                return this.map[e + " "]
            }, e.prototype.set = function(e, t) {
                this.map[e + " "] = t
            }, e
        }();
        var f = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g;
        t.prototype.logDefaultIndexUsed = function() {}, t.prototype.add = function(e, t) {
            var o, i, a, s, u, c, f, d, p = this.activeIndexes,
                h = this.selectors;
            if ("string" == typeof e) {
                for (o = {
                        id: this.uid++,
                        selector: e,
                        data: t
                    }, f = n(this.indexes, e), i = 0; i < f.length; i++) d = f[i], s = d.key, a = d.index, u = r(p, a), u || (u = Object.create(a), u.map = new l, p.push(u)), a === this.indexes["default"] && this.logDefaultIndexUsed(o), c = u.map.get(s), c || (c = [], u.map.set(s, c)), c.push(o);
                this.size++, h.push(e)
            }
        }, t.prototype.remove = function(e, t) {
            if ("string" == typeof e) {
                var r, o, i, a, s, u, c, l, f = this.activeIndexes,
                    d = {},
                    p = 1 === arguments.length;
                for (r = n(this.indexes, e), i = 0; i < r.length; i++)
                    for (o = r[i], a = f.length; a--;)
                        if (u = f[a], o.index.isPrototypeOf(u)) {
                            if (c = u.map.get(o.key))
                                for (s = c.length; s--;) l = c[s], l.selector !== e || !p && l.data !== t || (c.splice(s, 1), d[l.id] = !0);
                            break
                        }
                this.size -= Object.keys(d).length
            }
        }, t.prototype.queryAll = function(e) {
            if (!this.selectors.length) return [];
            var t, n, r, i, a, s, u, c, l = {},
                f = [],
                d = this.querySelectorAll(this.selectors.join(", "), e);
            for (t = 0, r = d.length; r > t; t++)
                for (a = d[t], s = this.matches(a), n = 0, i = s.length; i > n; n++) c = s[n], l[c.id] ? u = l[c.id] : (u = {
                    id: c.id,
                    selector: c.selector,
                    data: c.data,
                    elements: []
                }, l[c.id] = u, f.push(u)), u.elements.push(a);
            return f.sort(o)
        }, t.prototype.matches = function(e) {
            if (!e) return [];
            var t, n, r, i, a, s, u, c, l, f, d, p = this.activeIndexes,
                h = {},
                m = [];
            for (t = 0, i = p.length; i > t; t++)
                if (u = p[t], c = u.element(e))
                    for (n = 0, a = c.length; a > n; n++)
                        if (l = u.map.get(c[n]))
                            for (r = 0, s = l.length; s > r; r++) f = l[r], d = f.id, !h[d] && this.matchesSelector(e, f.selector) && (h[d] = !0, m.push(f));
            return m.sort(o)
        }, e.SelectorSet = t
    }(window),
    function(e, t) {
        function n(e) {
            var t = [],
                n = e.target,
                r = e.handleObj.selectorSet;
            do {
                if (1 !== n.nodeType) break;
                var o = r.matches(n);
                o.length && t.push({
                    elem: n,
                    handlers: o
                })
            } while (n = n.parentElement);
            return t
        }

        function r(e) {
            for (var t, r = n(e), o = 0;
                (t = r[o++]) && !e.isPropagationStopped();) {
                e.currentTarget = t.elem;
                for (var i, a = 0;
                    (i = t.handlers[a++]) && !e.isImmediatePropagationStopped();) {
                    var s = i.data.apply(t.elem, arguments);
                    void 0 !== s && (e.result = s, s === !1 && (e.preventDefault(), e.stopPropagation()))
                }
            }
        }
        var o = e.document,
            i = e.SelectorSet,
            a = t.event.add,
            s = t.event.remove,
            u = {};
        if (!i) throw "SelectorSet undefined - https://github.com/josh/jquery-selector-set";
        t.event.add = function(e, n, s, c, l) {
            if (e !== o || n.match(/\./) || c || !l) a.call(this, e, n, s, c, l);
            else
                for (var f = n.match(/\S+/g), d = f.length; d--;) {
                    var p = f[d],
                        h = t.event.special[p] || {};
                    p = h.delegateType || p;
                    var m = u[p];
                    m || (m = u[p] = {
                        handler: r,
                        selectorSet: new i
                    }, m.selectorSet.matchesSelector = t.find.matchesSelector, a.call(this, e, p, m)), m.selectorSet.add(l, s), t.expr.cacheLength++, t.find.compile && t.find.compile(l)
                }
        }, t.event.remove = function(e, n, r, i, a) {
            if (e === o && n && !n.match(/\./) && i)
                for (var c = n.match(/\S+/g), l = c.length; l--;) {
                    var f = c[l],
                        d = t.event.special[f] || {};
                    f = d.delegateType || f;
                    var p = u[f];
                    p && p.selectorSet.remove(i, r)
                }
            s.call(this, e, n, r, i, a)
        }
    }(window, jQuery),
    function() {
        if ($(document.documentElement).hasClass("is-preview-features")) {
            var e = /id|data-(ga|hotkey|remote|facebox)/;
            SelectorSet.prototype.logDefaultIndexUsed = function(t) {
                t.selector.match(e) || console.warn(t.selector, "could not be indexed")
            }
        }
    }(),
    function() {
        ("undefined" == typeof Zepto || null === Zepto) && $.ajaxSetup({
            beforeSend: function(e, t) {
                var n, r;
                if (t.global) return n = t.context || document, r = $.Event("ajaxBeforeSend"), $(n).trigger(r, [e, t]), r.isDefaultPrevented() ? !1 : r.result
            }
        })
    }.call(this),
    function() {
        var e, t, n, r, o;
        "undefined" != typeof Zepto && null !== Zepto ? (e = function(e) {
            var t, n, r, o;
            n = document.createEvent("Events");
            for (r in e) o = e[r], n[r] = o;
            return n.initEvent(e.type + ":prepare", !0, !0), t = function(t, r) {
                return function() {
                    return t.apply(e), r.apply(n)
                }
            }, n.preventDefault = t(e.preventDefault, n.preventDefault), n.stopPropagation = t(e.stopPropagation, n.stopPropagation), n.stopImmediatePropagation = t(e.stopImmediatePropagation, n.stopImmediatePropagation), e.target.dispatchEvent(n), n.result
        }, window.addEventListener("click", e, !0), window.addEventListener("submit", e, !0)) : (t = null, n = function(e) {
            var n, r;
            r = e.type + ":" + e.timeStamp, r !== t && (n = e.type, e.type = n + ":prepare", $.event.trigger(e, [], e.target, !1), e.type = n, t = r)
        }, r = function(e) {
            return function() {
                $(this).on(e + ".prepare", function() {})
            }
        }, o = function(e) {
            return function() {
                $(this).off(e + ".prepare", function() {})
            }
        }, $.event.special.click = {
            preDispatch: n
        }, $.event.special.submit = {
            preDispatch: n
        }, $.event.special["click:prepare"] = {
            setup: r("click"),
            teardown: o("click")
        }, $.event.special["submit:prepare"] = {
            setup: r("submit"),
            teardown: o("submit")
        })
    }.call(this),
    function() {
        $(document).on("submit", "form[data-remote]", function(e) {
            var t, n, r, o, i, a;
            return r = $(this), o = {}, o.context = this, (i = r.attr("method")) && (o.type = i), (a = this.action) && (o.url = a), (t = r.serializeArray()) && (o.data = t), (n = r.attr("data-type")) && (o.dataType = n), $.ajax(o), e.preventDefault(), !1
        }), $(document).on("ajaxSend", "[data-remote]", function(e, t) {
            $(this).data("remote-xhr", t)
        }), $(document).on("ajaxComplete", "[data-remote]", function(e, t) {
            var n;
            "function" == typeof(n = $(this)).removeData && n.removeData("remote-xhr")
        })
    }.call(this),
    function() {
        var e;
        e = "form[data-remote] input[type=submit],\nform[data-remote] button[type=submit],\nform[data-remote] button:not([type]),\nform[data-remote-submit] input[type=submit],\nform[data-remote-submit] button[type=submit],\nform[data-remote-submit] button:not([type]),\nform input[type=submit][data-disable-with],\nform button[type=submit][data-disable-with]", $(document).on("click", e, function() {
            var e, t, n, r, o, i;
            o = $(this), t = o.closest("form"), n = t.find(".is-submit-button-value"), (r = o.attr("name")) ? (e = o.is("input[type=submit]") ? "Submit" : "", i = o.val() || e, n[0] ? (n.attr("name", r), n.attr("value", i)) : (n = document.createElement("input"), n.setAttribute("type", "hidden"), n.setAttribute("name", r), n.setAttribute("value", i), n.setAttribute("class", "is-submit-button-value"), t.prepend(n))) : n.remove()
        }), $(document).on("ajaxComplete", "form", function(e) {
            var t;
            return null != (t = this.querySelector(".is-submit-button-value")) ? t.remove() : void 0
        })
    }.call(this),
    function() {
        var e, t, n, r, o, i, a, s, u, c, l, f, d, p, h = [].indexOf || function(e) {
            for (var t = 0, n = this.length; n > t; t++)
                if (t in this && this[t] === e) return t;
            return -1
        };
        u = "[ ]", t = "[x]", s = function(e) {
            return e.replace(/([\[\]])/g, "\\$1").replace(/\s/, "\\s").replace("x", "[xX]")
        }, c = RegExp("" + s(u)), n = RegExp("" + s(t)), l = RegExp("^(?:\\s*(?:>\\s*)*(?:[-+*]|(?:\\d+\\.)))\\s*(" + s(t) + "|" + s(u) + ")\\s+(?!\\(.*?\\))(?=(?:\\[.*?\\]\\s*(?:\\[.*?\\]|\\(.*?\\))\\s*)*(?:[^\\[]|$))"), e = /^`{3}(?:\s*\w+)?[\S\s].*[\S\s]^`{3}$/gm, f = RegExp("^(" + s(t) + "|" + s(u) + ").+$", "g"), p = function(r, o, i) {
            var a, s, d, p;
            return a = r.replace(/\r/g, "").replace(e, "").replace(f, "").split("\n"), s = 0, p = function() {
                var e, f, p, m;
                for (p = r.split("\n"), m = [], e = 0, f = p.length; f > e; e++) d = p[e], h.call(a, d) >= 0 && d.match(l) && (s += 1, s === o && (d = i ? d.replace(c, t) : d.replace(n, u))), m.push(d);
                return m
            }(), p.join("\n")
        }, d = function(e) {
            var t, n, r, o, i;
            return t = e.closest(".js-task-list-container"), n = t.find(".js-task-list-field"), i = 1 + t.find(".task-list-item-checkbox").index(e), r = e.prop("checked"), o = $.Event("tasklist:change"), n.trigger(o, [i, r]), o.isDefaultPrevented() ? void 0 : (n.val(p(n.val(), i, r)), n.trigger("change"), n.trigger("tasklist:changed", [i, r]))
        }, $(document).on("change", ".task-list-item-checkbox", function() {
            return d($(this))
        }), i = function(e) {
            return e.find(".js-task-list-field").length > 0 ? (e.find(".task-list-item").addClass("enabled").find(".task-list-item-checkbox").attr("disabled", null), e.addClass("is-task-list-enabled").trigger("tasklist:enabled")) : void 0
        }, a = function(e) {
            var t, n, r, o;
            for (o = [], n = 0, r = e.length; r > n; n++) t = e[n], o.push(i($(t)));
            return o
        }, r = function(e) {
            return e.find(".task-list-item").removeClass("enabled").find(".task-list-item-checkbox").attr("disabled", "disabled"), e.removeClass("is-task-list-enabled").trigger("tasklist:disabled")
        }, o = function(e) {
            var t, n, o, i;
            for (i = [], n = 0, o = e.length; o > n; n++) t = e[n], i.push(r($(t)));
            return i
        }, $.fn.taskList = function(e) {
            var t, n;
            return t = $(this).closest(".js-task-list-container"), n = {
                enable: a,
                disable: o
            }, n[e || "enable"](t)
        }
    }.call(this), define.amd = "zeroclipboard",
    function(e, t) {
        "use strict";
        var n, r, o = e,
            i = o.document,
            a = o.navigator,
            s = o.setTimeout,
            u = o.encodeURIComponent,
            c = o.ActiveXObject,
            l = o.Error,
            f = o.Number.parseInt || o.parseInt,
            d = o.Number.parseFloat || o.parseFloat,
            p = o.Number.isNaN || o.isNaN,
            h = o.Math.round,
            m = o.Date.now,
            v = o.Object.keys,
            g = o.Object.defineProperty,
            y = o.Object.prototype.hasOwnProperty,
            b = o.Array.prototype.slice,
            w = function() {
                var e = function(e) {
                    return e
                };
                if ("function" == typeof o.wrap && "function" == typeof o.unwrap) try {
                    var t = i.createElement("div"),
                        n = o.unwrap(t);
                    1 === t.nodeType && n && 1 === n.nodeType && (e = o.unwrap)
                } catch (r) {}
                return e
            }(),
            x = function(e) {
                return b.call(e, 0)
            },
            E = function() {
                var e, n, r, o, i, a, s = x(arguments),
                    u = s[0] || {};
                for (e = 1, n = s.length; n > e; e++)
                    if (null != (r = s[e]))
                        for (o in r) y.call(r, o) && (i = u[o], a = r[o], u !== a && a !== t && (u[o] = a));
                return u
            },
            T = function(e) {
                var t, n, r, o;
                if ("object" != typeof e || null == e) t = e;
                else if ("number" == typeof e.length)
                    for (t = [], n = 0, r = e.length; r > n; n++) y.call(e, n) && (t[n] = T(e[n]));
                else {
                    t = {};
                    for (o in e) y.call(e, o) && (t[o] = T(e[o]))
                }
                return t
            },
            _ = function(e, t) {
                for (var n = {}, r = 0, o = t.length; o > r; r++) t[r] in e && (n[t[r]] = e[t[r]]);
                return n
            },
            C = function(e, t) {
                var n = {};
                for (var r in e) - 1 === t.indexOf(r) && (n[r] = e[r]);
                return n
            },
            j = function(e) {
                if (e)
                    for (var t in e) y.call(e, t) && delete e[t];
                return e
            },
            k = function(e, t) {
                if (e && 1 === e.nodeType && e.ownerDocument && t && (1 === t.nodeType && t.ownerDocument && t.ownerDocument === e.ownerDocument || 9 === t.nodeType && !t.ownerDocument && t === e.ownerDocument))
                    do {
                        if (e === t) return !0;
                        e = e.parentNode
                    } while (e);
                return !1
            },
            S = function(e) {
                var t;
                return "string" == typeof e && e && (t = e.split("#")[0].split("?")[0], t = e.slice(0, e.lastIndexOf("/") + 1)), t
            },
            N = function(e) {
                var t, n;
                return "string" == typeof e && e && (n = e.match(/^(?:|[^:@]*@|.+\)@(?=http[s]?|file)|.+?\s+(?: at |@)(?:[^:\(]+ )*[\(]?)((?:http[s]?|file):\/\/[\/]?.+?\/[^:\)]*?)(?::\d+)(?::\d+)?/), n && n[1] ? t = n[1] : (n = e.match(/\)@((?:http[s]?|file):\/\/[\/]?.+?\/[^:\)]*?)(?::\d+)(?::\d+)?/), n && n[1] && (t = n[1]))), t
            },
            D = function() {
                var e, t;
                try {
                    throw new l
                } catch (n) {
                    t = n
                }
                return t && (e = t.sourceURL || t.fileName || N(t.stack)), e
            },
            O = function() {
                var e, n, r;
                if (i.currentScript && (e = i.currentScript.src)) return e;
                if (n = i.getElementsByTagName("script"), 1 === n.length) return n[0].src || t;
                if ("readyState" in n[0])
                    for (r = n.length; r--;)
                        if ("interactive" === n[r].readyState && (e = n[r].src)) return e;
                return "loading" === i.readyState && (e = n[n.length - 1].src) ? e : (e = D()) ? e : t
            },
            L = function() {
                var e, n, r, o = i.getElementsByTagName("script");
                for (e = o.length; e--;) {
                    if (!(r = o[e].src)) {
                        n = null;
                        break
                    }
                    if (r = S(r), null == n) n = r;
                    else if (n !== r) {
                        n = null;
                        break
                    }
                }
                return n || t
            },
            M = function() {
                var e = S(O()) || L() || "";
                return e + "ZeroClipboard.swf"
            },
            A = {
                bridge: null,
                version: "0.0.0",
                pluginType: "unknown",
                disabled: null,
                outdated: null,
                unavailable: null,
                deactivated: null,
                overdue: null,
                ready: null
            },
            P = "11.0.0",
            I = {},
            R = {},
            F = null,
            q = {
                ready: "Flash communication is established",
                error: {
                    "flash-disabled": "Flash is disabled or not installed",
                    "flash-outdated": "Flash is too outdated to support ZeroClipboard",
                    "flash-unavailable": "Flash is unable to communicate bidirectionally with JavaScript",
                    "flash-deactivated": "Flash is too outdated for your browser and/or is configured as click-to-activate",
                    "flash-overdue": "Flash communication was established but NOT within the acceptable time limit"
                }
            },
            H = {
                swfPath: M(),
                trustedDomains: e.location.host ? [e.location.host] : [],
                cacheBust: !0,
                forceEnhancedClipboard: !1,
                flashLoadTimeout: 3e4,
                autoActivate: !0,
                bubbleEvents: !0,
                containerId: "global-zeroclipboard-html-bridge",
                containerClass: "global-zeroclipboard-container",
                swfObjectId: "global-zeroclipboard-flash-bridge",
                hoverClass: "zeroclipboard-is-hover",
                activeClass: "zeroclipboard-is-active",
                forceHandCursor: !1,
                title: null,
                zIndex: 999999999
            },
            $ = function(e) {
                if ("object" == typeof e && null !== e)
                    for (var t in e)
                        if (y.call(e, t))
                            if (/^(?:forceHandCursor|title|zIndex|bubbleEvents)$/.test(t)) H[t] = e[t];
                            else if (null == A.bridge)
                    if ("containerId" === t || "swfObjectId" === t) {
                        if (!ne(e[t])) throw new Error("The specified `" + t + "` value is not valid as an HTML4 Element ID");
                        H[t] = e[t]
                    } else H[t] = e[t]; {
                        if ("string" != typeof e || !e) return T(H);
                        if (y.call(H, e)) return H[e]
                    }
            },
            B = function() {
                return {
                    browser: _(a, ["userAgent", "platform", "appName"]),
                    flash: C(A, ["bridge"]),
                    zeroclipboard: {
                        version: Oe.version,
                        config: Oe.config()
                    }
                }
            },
            W = function() {
                return !!(A.disabled || A.outdated || A.unavailable || A.deactivated)
            },
            U = function(e, t) {
                var n, r, o, i = {};
                if ("string" == typeof e && e) o = e.toLowerCase().split(/\s+/);
                else if ("object" == typeof e && e && "undefined" == typeof t)
                    for (n in e) y.call(e, n) && "string" == typeof n && n && "function" == typeof e[n] && Oe.on(n, e[n]);
                if (o && o.length) {
                    for (n = 0, r = o.length; r > n; n++) e = o[n].replace(/^on/, ""), i[e] = !0, I[e] || (I[e] = []), I[e].push(t);
                    if (i.ready && A.ready && Oe.emit({
                            type: "ready"
                        }), i.error) {
                        var a = ["disabled", "outdated", "unavailable", "deactivated", "overdue"];
                        for (n = 0, r = a.length; r > n; n++)
                            if (A[a[n]] === !0) {
                                Oe.emit({
                                    type: "error",
                                    name: "flash-" + a[n]
                                });
                                break
                            }
                    }
                }
                return Oe
            },
            z = function(e, t) {
                var n, r, o, i, a;
                if (0 === arguments.length) i = v(I);
                else if ("string" == typeof e && e) i = e.split(/\s+/);
                else if ("object" == typeof e && e && "undefined" == typeof t)
                    for (n in e) y.call(e, n) && "string" == typeof n && n && "function" == typeof e[n] && Oe.off(n, e[n]);
                if (i && i.length)
                    for (n = 0, r = i.length; r > n; n++)
                        if (e = i[n].toLowerCase().replace(/^on/, ""), a = I[e], a && a.length)
                            if (t)
                                for (o = a.indexOf(t); - 1 !== o;) a.splice(o, 1), o = a.indexOf(t, o);
                            else a.length = 0;
                return Oe
            },
            X = function(e) {
                var t;
                return t = "string" == typeof e && e ? T(I[e]) || null : T(I)
            },
            Y = function(e) {
                var t, n, r;
                return e = re(e), e && !ce(e) ? "ready" === e.type && A.overdue === !0 ? Oe.emit({
                    type: "error",
                    name: "flash-overdue"
                }) : (t = E({}, e), ue.call(this, t), "copy" === e.type && (r = me(R), n = r.data, F = r.formatMap), n) : void 0
            },
            J = function() {
                if ("boolean" != typeof A.ready && (A.ready = !1), !Oe.isFlashUnusable() && null === A.bridge) {
                    var e = H.flashLoadTimeout;
                    "number" == typeof e && e >= 0 && s(function() {
                        "boolean" != typeof A.deactivated && (A.deactivated = !0), A.deactivated === !0 && Oe.emit({
                            type: "error",
                            name: "flash-deactivated"
                        })
                    }, e), A.overdue = !1, pe()
                }
            },
            V = function() {
                Oe.clearData(), Oe.blur(), Oe.emit("destroy"), he(), Oe.off()
            },
            G = function(e, t) {
                var n;
                if ("object" == typeof e && e && "undefined" == typeof t) n = e, Oe.clearData();
                else {
                    if ("string" != typeof e || !e) return;
                    n = {}, n[e] = t
                }
                for (var r in n) "string" == typeof r && r && y.call(n, r) && "string" == typeof n[r] && n[r] && (R[r] = n[r])
            },
            K = function(e) {
                "undefined" == typeof e ? (j(R), F = null) : "string" == typeof e && y.call(R, e) && delete R[e]
            },
            Z = function(e) {
                return "undefined" == typeof e ? T(R) : "string" == typeof e && y.call(R, e) ? R[e] : void 0
            },
            Q = function(e) {
                if (e && 1 === e.nodeType) {
                    n && (Te(n, H.activeClass), n !== e && Te(n, H.hoverClass)), n = e, Ee(e, H.hoverClass);
                    var t = e.getAttribute("title") || H.title;
                    if ("string" == typeof t && t) {
                        var r = de(A.bridge);
                        r && r.setAttribute("title", t)
                    }
                    var o = H.forceHandCursor === !0 || "pointer" === _e(e, "cursor");
                    Se(o), ke()
                }
            },
            ee = function() {
                var e = de(A.bridge);
                e && (e.removeAttribute("title"), e.style.left = "0px", e.style.top = "-9999px", e.style.width = "1px", e.style.top = "1px"), n && (Te(n, H.hoverClass), Te(n, H.activeClass), n = null)
            },
            te = function() {
                return n || null
            },
            ne = function(e) {
                return "string" == typeof e && e && /^[A-Za-z][A-Za-z0-9_:\-\.]*$/.test(e)
            },
            re = function(e) {
                var t;
                if ("string" == typeof e && e ? (t = e, e = {}) : "object" == typeof e && e && "string" == typeof e.type && e.type && (t = e.type), t) {
                    !e.target && /^(copy|aftercopy|_click)$/.test(t.toLowerCase()) && (e.target = r), E(e, {
                        type: t.toLowerCase(),
                        target: e.target || n || null,
                        relatedTarget: e.relatedTarget || null,
                        currentTarget: A && A.bridge || null,
                        timeStamp: e.timeStamp || m() || null
                    });
                    var o = q[e.type];
                    return "error" === e.type && e.name && o && (o = o[e.name]), o && (e.message = o), "ready" === e.type && E(e, {
                        target: null,
                        version: A.version
                    }), "error" === e.type && (/^flash-(disabled|outdated|unavailable|deactivated|overdue)$/.test(e.name) && E(e, {
                        target: null,
                        minimumVersion: P
                    }), /^flash-(outdated|unavailable|deactivated|overdue)$/.test(e.name) && E(e, {
                        version: A.version
                    })), "copy" === e.type && (e.clipboardData = {
                        setData: Oe.setData,
                        clearData: Oe.clearData
                    }), "aftercopy" === e.type && (e = ve(e, F)), e.target && !e.relatedTarget && (e.relatedTarget = oe(e.target)), e = ie(e)
                }
            },
            oe = function(e) {
                var t = e && e.getAttribute && e.getAttribute("data-clipboard-target");
                return t ? i.getElementById(t) : null
            },
            ie = function(e) {
                if (e && /^_(?:click|mouse(?:over|out|down|up|move))$/.test(e.type)) {
                    var n = e.target,
                        r = "_mouseover" === e.type && e.relatedTarget ? e.relatedTarget : t,
                        a = "_mouseout" === e.type && e.relatedTarget ? e.relatedTarget : t,
                        s = je(n),
                        u = o.screenLeft || o.screenX || 0,
                        c = o.screenTop || o.screenY || 0,
                        l = i.body.scrollLeft + i.documentElement.scrollLeft,
                        f = i.body.scrollTop + i.documentElement.scrollTop,
                        d = s.left + ("number" == typeof e._stageX ? e._stageX : 0),
                        p = s.top + ("number" == typeof e._stageY ? e._stageY : 0),
                        h = d - l,
                        m = p - f,
                        v = u + h,
                        g = c + m,
                        y = "number" == typeof e.movementX ? e.movementX : 0,
                        b = "number" == typeof e.movementY ? e.movementY : 0;
                    delete e._stageX, delete e._stageY, E(e, {
                        srcElement: n,
                        fromElement: r,
                        toElement: a,
                        screenX: v,
                        screenY: g,
                        pageX: d,
                        pageY: p,
                        clientX: h,
                        clientY: m,
                        x: h,
                        y: m,
                        movementX: y,
                        movementY: b,
                        offsetX: 0,
                        offsetY: 0,
                        layerX: 0,
                        layerY: 0
                    })
                }
                return e
            },
            ae = function(e) {
                var t = e && "string" == typeof e.type && e.type || "";
                return !/^(?:(?:before)?copy|destroy)$/.test(t)
            },
            se = function(e, t, n, r) {
                r ? s(function() {
                    e.apply(t, n)
                }, 0) : e.apply(t, n)
            },
            ue = function(e) {
                if ("object" == typeof e && e && e.type) {
                    var t = ae(e),
                        n = I["*"] || [],
                        r = I[e.type] || [],
                        i = n.concat(r);
                    if (i && i.length) {
                        var a, s, u, c, l, f = this;
                        for (a = 0, s = i.length; s > a; a++) u = i[a], c = f, "string" == typeof u && "function" == typeof o[u] && (u = o[u]), "object" == typeof u && u && "function" == typeof u.handleEvent && (c = u, u = u.handleEvent), "function" == typeof u && (l = E({}, e), se(u, c, [l], t))
                    }
                    return this
                }
            },
            ce = function(e) {
                var t = e.target || n || null,
                    o = "swf" === e._source;
                delete e._source;
                var i = ["flash-disabled", "flash-outdated", "flash-unavailable", "flash-deactivated", "flash-overdue"];
                switch (e.type) {
                    case "error":
                        -1 !== i.indexOf(e.name) && E(A, {
                            disabled: "flash-disabled" === e.name,
                            outdated: "flash-outdated" === e.name,
                            unavailable: "flash-unavailable" === e.name,
                            deactivated: "flash-deactivated" === e.name,
                            overdue: "flash-overdue" === e.name,
                            ready: !1
                        });
                        break;
                    case "ready":
                        var a = A.deactivated === !0;
                        E(A, {
                            disabled: !1,
                            outdated: !1,
                            unavailable: !1,
                            deactivated: !1,
                            overdue: a,
                            ready: !a
                        });
                        break;
                    case "beforecopy":
                        r = t;
                        break;
                    case "copy":
                        var s, u, c = e.relatedTarget;
                        !R["text/html"] && !R["text/plain"] && c && (u = c.value || c.outerHTML || c.innerHTML) && (s = c.value || c.textContent || c.innerText) ? (e.clipboardData.clearData(), e.clipboardData.setData("text/plain", s), u !== s && e.clipboardData.setData("text/html", u)) : !R["text/plain"] && e.target && (s = e.target.getAttribute("data-clipboard-text")) && (e.clipboardData.clearData(), e.clipboardData.setData("text/plain", s));
                        break;
                    case "aftercopy":
                        Oe.clearData(), t && t !== xe() && t.focus && t.focus();
                        break;
                    case "_mouseover":
                        Oe.focus(t), H.bubbleEvents === !0 && o && (t && t !== e.relatedTarget && !k(e.relatedTarget, t) && le(E({}, e, {
                            type: "mouseenter",
                            bubbles: !1,
                            cancelable: !1
                        })), le(E({}, e, {
                            type: "mouseover"
                        })));
                        break;
                    case "_mouseout":
                        Oe.blur(), H.bubbleEvents === !0 && o && (t && t !== e.relatedTarget && !k(e.relatedTarget, t) && le(E({}, e, {
                            type: "mouseleave",
                            bubbles: !1,
                            cancelable: !1
                        })), le(E({}, e, {
                            type: "mouseout"
                        })));
                        break;
                    case "_mousedown":
                        Ee(t, H.activeClass), H.bubbleEvents === !0 && o && le(E({}, e, {
                            type: e.type.slice(1)
                        }));
                        break;
                    case "_mouseup":
                        Te(t, H.activeClass), H.bubbleEvents === !0 && o && le(E({}, e, {
                            type: e.type.slice(1)
                        }));
                        break;
                    case "_click":
                        r = null, H.bubbleEvents === !0 && o && le(E({}, e, {
                            type: e.type.slice(1)
                        }));
                        break;
                    case "_mousemove":
                        H.bubbleEvents === !0 && o && le(E({}, e, {
                            type: e.type.slice(1)
                        }))
                }
                return /^_(?:click|mouse(?:over|out|down|up|move))$/.test(e.type) ? !0 : void 0
            },
            le = function(e) {
                if (e && "string" == typeof e.type && e) {
                    var t, n = e.target || null,
                        r = n && n.ownerDocument || i,
                        a = {
                            view: r.defaultView || o,
                            canBubble: !0,
                            cancelable: !0,
                            detail: "click" === e.type ? 1 : 0,
                            button: "number" == typeof e.which ? e.which - 1 : "number" == typeof e.button ? e.button : r.createEvent ? 0 : 1
                        },
                        s = E(a, e);
                    n && r.createEvent && n.dispatchEvent && (s = [s.type, s.canBubble, s.cancelable, s.view, s.detail, s.screenX, s.screenY, s.clientX, s.clientY, s.ctrlKey, s.altKey, s.shiftKey, s.metaKey, s.button, s.relatedTarget], t = r.createEvent("MouseEvents"), t.initMouseEvent && (t.initMouseEvent.apply(t, s), t._source = "js", n.dispatchEvent(t)))
                }
            },
            fe = function() {
                var e = i.createElement("div");
                return e.id = H.containerId, e.className = H.containerClass, e.style.position = "absolute", e.style.left = "0px", e.style.top = "-9999px", e.style.width = "1px", e.style.height = "1px", e.style.zIndex = "" + Ne(H.zIndex), e
            },
            de = function(e) {
                for (var t = e && e.parentNode; t && "OBJECT" === t.nodeName && t.parentNode;) t = t.parentNode;
                return t || null
            },
            pe = function() {
                var e, t = A.bridge,
                    n = de(t);
                if (!t) {
                    var r = we(o.location.host, H),
                        a = "never" === r ? "none" : "all",
                        s = ye(H),
                        u = H.swfPath + ge(H.swfPath, H);
                    n = fe();
                    var c = i.createElement("div");
                    n.appendChild(c), i.body.appendChild(n);
                    var l = i.createElement("div"),
                        f = "activex" === A.pluginType;
                    l.innerHTML = '<object id="' + H.swfObjectId + '" name="' + H.swfObjectId + '" width="100%" height="100%" ' + (f ? 'classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"' : 'type="application/x-shockwave-flash" data="' + u + '"') + ">" + (f ? '<param name="movie" value="' + u + '"/>' : "") + '<param name="allowScriptAccess" value="' + r + '"/><param name="allowNetworking" value="' + a + '"/><param name="menu" value="false"/><param name="wmode" value="transparent"/><param name="flashvars" value="' + s + '"/></object>',
                        t = l.firstChild, l = null, w(t).ZeroClipboard = Oe, n.replaceChild(t, c)
                }
                return t || (t = i[H.swfObjectId], t && (e = t.length) && (t = t[e - 1]), !t && n && (t = n.firstChild)), A.bridge = t || null, t
            },
            he = function() {
                var e = A.bridge;
                if (e) {
                    var t = de(e);
                    t && ("activex" === A.pluginType && "readyState" in e ? (e.style.display = "none", function n() {
                        if (4 === e.readyState) {
                            for (var r in e) "function" == typeof e[r] && (e[r] = null);
                            e.parentNode && e.parentNode.removeChild(e), t.parentNode && t.parentNode.removeChild(t)
                        } else s(n, 10)
                    }()) : (e.parentNode && e.parentNode.removeChild(e), t.parentNode && t.parentNode.removeChild(t))), A.ready = null, A.bridge = null, A.deactivated = null
                }
            },
            me = function(e) {
                var t = {},
                    n = {};
                if ("object" == typeof e && e) {
                    for (var r in e)
                        if (r && y.call(e, r) && "string" == typeof e[r] && e[r]) switch (r.toLowerCase()) {
                            case "text/plain":
                            case "text":
                            case "air:text":
                            case "flash:text":
                                t.text = e[r], n.text = r;
                                break;
                            case "text/html":
                            case "html":
                            case "air:html":
                            case "flash:html":
                                t.html = e[r], n.html = r;
                                break;
                            case "application/rtf":
                            case "text/rtf":
                            case "rtf":
                            case "richtext":
                            case "air:rtf":
                            case "flash:rtf":
                                t.rtf = e[r], n.rtf = r
                        }
                        return {
                            data: t,
                            formatMap: n
                        }
                }
            },
            ve = function(e, t) {
                if ("object" != typeof e || !e || "object" != typeof t || !t) return e;
                var n = {};
                for (var r in e)
                    if (y.call(e, r)) {
                        if ("success" !== r && "data" !== r) {
                            n[r] = e[r];
                            continue
                        }
                        n[r] = {};
                        var o = e[r];
                        for (var i in o) i && y.call(o, i) && y.call(t, i) && (n[r][t[i]] = o[i])
                    }
                return n
            },
            ge = function(e, t) {
                var n = null == t || t && t.cacheBust === !0;
                return n ? (-1 === e.indexOf("?") ? "?" : "&") + "noCache=" + m() : ""
            },
            ye = function(e) {
                var t, n, r, i, a = "",
                    s = [];
                if (e.trustedDomains && ("string" == typeof e.trustedDomains ? i = [e.trustedDomains] : "object" == typeof e.trustedDomains && "length" in e.trustedDomains && (i = e.trustedDomains)), i && i.length)
                    for (t = 0, n = i.length; n > t; t++)
                        if (y.call(i, t) && i[t] && "string" == typeof i[t]) {
                            if (r = be(i[t]), !r) continue;
                            if ("*" === r) {
                                s.length = 0, s.push(r);
                                break
                            }
                            s.push.apply(s, [r, "//" + r, o.location.protocol + "//" + r])
                        }
                return s.length && (a += "trustedOrigins=" + u(s.join(","))), e.forceEnhancedClipboard === !0 && (a += (a ? "&" : "") + "forceEnhancedClipboard=true"), "string" == typeof e.swfObjectId && e.swfObjectId && (a += (a ? "&" : "") + "swfObjectId=" + u(e.swfObjectId)), a
            },
            be = function(e) {
                if (null == e || "" === e) return null;
                if (e = e.replace(/^\s+|\s+$/g, ""), "" === e) return null;
                var t = e.indexOf("//");
                e = -1 === t ? e : e.slice(t + 2);
                var n = e.indexOf("/");
                return e = -1 === n ? e : -1 === t || 0 === n ? null : e.slice(0, n), e && ".swf" === e.slice(-4).toLowerCase() ? null : e || null
            },
            we = function() {
                var e = function(e) {
                    var t, n, r, o = [];
                    if ("string" == typeof e && (e = [e]), "object" != typeof e || !e || "number" != typeof e.length) return o;
                    for (t = 0, n = e.length; n > t; t++)
                        if (y.call(e, t) && (r = be(e[t]))) {
                            if ("*" === r) {
                                o.length = 0, o.push("*");
                                break
                            } - 1 === o.indexOf(r) && o.push(r)
                        }
                    return o
                };
                return function(t, n) {
                    var r = be(n.swfPath);
                    null === r && (r = t);
                    var o = e(n.trustedDomains),
                        i = o.length;
                    if (i > 0) {
                        if (1 === i && "*" === o[0]) return "always";
                        if (-1 !== o.indexOf(t)) return 1 === i && t === r ? "sameDomain" : "always"
                    }
                    return "never"
                }
            }(),
            xe = function() {
                try {
                    return i.activeElement
                } catch (e) {
                    return null
                }
            },
            Ee = function(e, t) {
                if (!e || 1 !== e.nodeType) return e;
                if (e.classList) return e.classList.contains(t) || e.classList.add(t), e;
                if (t && "string" == typeof t) {
                    var n = (t || "").split(/\s+/);
                    if (1 === e.nodeType)
                        if (e.className) {
                            for (var r = " " + e.className + " ", o = e.className, i = 0, a = n.length; a > i; i++) r.indexOf(" " + n[i] + " ") < 0 && (o += " " + n[i]);
                            e.className = o.replace(/^\s+|\s+$/g, "")
                        } else e.className = t
                }
                return e
            },
            Te = function(e, t) {
                if (!e || 1 !== e.nodeType) return e;
                if (e.classList) return e.classList.contains(t) && e.classList.remove(t), e;
                if ("string" == typeof t && t) {
                    var n = t.split(/\s+/);
                    if (1 === e.nodeType && e.className) {
                        for (var r = (" " + e.className + " ").replace(/[\n\t]/g, " "), o = 0, i = n.length; i > o; o++) r = r.replace(" " + n[o] + " ", " ");
                        e.className = r.replace(/^\s+|\s+$/g, "")
                    }
                }
                return e
            },
            _e = function(e, t) {
                var n = o.getComputedStyle(e, null).getPropertyValue(t);
                return "cursor" !== t || n && "auto" !== n || "A" !== e.nodeName ? n : "pointer"
            },
            Ce = function() {
                var e, t, n, r = 1;
                return "function" == typeof i.body.getBoundingClientRect && (e = i.body.getBoundingClientRect(), t = e.right - e.left, n = i.body.offsetWidth, r = h(t / n * 100) / 100), r
            },
            je = function(e) {
                var t = {
                    left: 0,
                    top: 0,
                    width: 0,
                    height: 0
                };
                if (e.getBoundingClientRect) {
                    var n, r, a, s = e.getBoundingClientRect();
                    "pageXOffset" in o && "pageYOffset" in o ? (n = o.pageXOffset, r = o.pageYOffset) : (a = Ce(), n = h(i.documentElement.scrollLeft / a), r = h(i.documentElement.scrollTop / a));
                    var u = i.documentElement.clientLeft || 0,
                        c = i.documentElement.clientTop || 0;
                    t.left = s.left + n - u, t.top = s.top + r - c, t.width = "width" in s ? s.width : s.right - s.left, t.height = "height" in s ? s.height : s.bottom - s.top
                }
                return t
            },
            ke = function() {
                var e;
                if (n && (e = de(A.bridge))) {
                    var t = je(n);
                    E(e.style, {
                        width: t.width + "px",
                        height: t.height + "px",
                        top: t.top + "px",
                        left: t.left + "px",
                        zIndex: "" + Ne(H.zIndex)
                    })
                }
            },
            Se = function(e) {
                A.ready === !0 && (A.bridge && "function" == typeof A.bridge.setHandCursor ? A.bridge.setHandCursor(e) : A.ready = !1)
            },
            Ne = function(e) {
                if (/^(?:auto|inherit)$/.test(e)) return e;
                var t;
                return "number" != typeof e || p(e) ? "string" == typeof e && (t = Ne(f(e, 10))) : t = e, "number" == typeof t ? t : "auto"
            },
            De = function(e) {
                function t(e) {
                    var t = e.match(/[\d]+/g);
                    return t.length = 3, t.join(".")
                }

                function n(e) {
                    return !!e && (e = e.toLowerCase()) && (/^(pepflashplayer\.dll|libpepflashplayer\.so|pepperflashplayer\.plugin)$/.test(e) || "chrome.plugin" === e.slice(-13))
                }

                function r(e) {
                    e && (u = !0, e.version && (f = t(e.version)), !f && e.description && (f = t(e.description)), e.filename && (l = n(e.filename)))
                }
                var o, i, s, u = !1,
                    c = !1,
                    l = !1,
                    f = "";
                if (a.plugins && a.plugins.length) o = a.plugins["Shockwave Flash"], r(o), a.plugins["Shockwave Flash 2.0"] && (u = !0, f = "2.0.0.11");
                else if (a.mimeTypes && a.mimeTypes.length) s = a.mimeTypes["application/x-shockwave-flash"], o = s && s.enabledPlugin, r(o);
                else if ("undefined" != typeof e) {
                    c = !0;
                    try {
                        i = new e("ShockwaveFlash.ShockwaveFlash.7"), u = !0, f = t(i.GetVariable("$version"))
                    } catch (p) {
                        try {
                            i = new e("ShockwaveFlash.ShockwaveFlash.6"), u = !0, f = "6.0.21"
                        } catch (h) {
                            try {
                                i = new e("ShockwaveFlash.ShockwaveFlash"), u = !0, f = t(i.GetVariable("$version"))
                            } catch (m) {
                                c = !1
                            }
                        }
                    }
                }
                A.disabled = u !== !0, A.outdated = f && d(f) < d(P), A.version = f || "0.0.0", A.pluginType = l ? "pepper" : c ? "activex" : u ? "netscape" : "unknown"
            };
        De(c);
        var Oe = function() {
            return this instanceof Oe ? void("function" == typeof Oe._createClient && Oe._createClient.apply(this, x(arguments))) : new Oe
        };
        g(Oe, "version", {
            value: "2.1.6",
            writable: !1,
            configurable: !0,
            enumerable: !0
        }), Oe.config = function() {
            return $.apply(this, x(arguments))
        }, Oe.state = function() {
            return B.apply(this, x(arguments))
        }, Oe.isFlashUnusable = function() {
            return W.apply(this, x(arguments))
        }, Oe.on = function() {
            return U.apply(this, x(arguments))
        }, Oe.off = function() {
            return z.apply(this, x(arguments))
        }, Oe.handlers = function() {
            return X.apply(this, x(arguments))
        }, Oe.emit = function() {
            return Y.apply(this, x(arguments))
        }, Oe.create = function() {
            return J.apply(this, x(arguments))
        }, Oe.destroy = function() {
            return V.apply(this, x(arguments))
        }, Oe.setData = function() {
            return G.apply(this, x(arguments))
        }, Oe.clearData = function() {
            return K.apply(this, x(arguments))
        }, Oe.getData = function() {
            return Z.apply(this, x(arguments))
        }, Oe.focus = Oe.activate = function() {
            return Q.apply(this, x(arguments))
        }, Oe.blur = Oe.deactivate = function() {
            return ee.apply(this, x(arguments))
        }, Oe.activeElement = function() {
            return te.apply(this, x(arguments))
        };
        var Le = 0,
            Me = {},
            Ae = 0,
            Pe = {},
            Ie = {};
        E(H, {
            autoActivate: !0
        });
        var Re = function(e) {
                var t = this;
                t.id = "" + Le++, Me[t.id] = {
                    instance: t,
                    elements: [],
                    handlers: {}
                }, e && t.clip(e), Oe.on("*", function(e) {
                    return t.emit(e)
                }), Oe.on("destroy", function() {
                    t.destroy()
                }), Oe.create()
            },
            Fe = function(e, t) {
                var n, r, o, i = {},
                    a = Me[this.id] && Me[this.id].handlers;
                if ("string" == typeof e && e) o = e.toLowerCase().split(/\s+/);
                else if ("object" == typeof e && e && "undefined" == typeof t)
                    for (n in e) y.call(e, n) && "string" == typeof n && n && "function" == typeof e[n] && this.on(n, e[n]);
                if (o && o.length) {
                    for (n = 0, r = o.length; r > n; n++) e = o[n].replace(/^on/, ""), i[e] = !0, a[e] || (a[e] = []), a[e].push(t);
                    if (i.ready && A.ready && this.emit({
                            type: "ready",
                            client: this
                        }), i.error) {
                        var s = ["disabled", "outdated", "unavailable", "deactivated", "overdue"];
                        for (n = 0, r = s.length; r > n; n++)
                            if (A[s[n]]) {
                                this.emit({
                                    type: "error",
                                    name: "flash-" + s[n],
                                    client: this
                                });
                                break
                            }
                    }
                }
                return this
            },
            qe = function(e, t) {
                var n, r, o, i, a, s = Me[this.id] && Me[this.id].handlers;
                if (0 === arguments.length) i = v(s);
                else if ("string" == typeof e && e) i = e.split(/\s+/);
                else if ("object" == typeof e && e && "undefined" == typeof t)
                    for (n in e) y.call(e, n) && "string" == typeof n && n && "function" == typeof e[n] && this.off(n, e[n]);
                if (i && i.length)
                    for (n = 0, r = i.length; r > n; n++)
                        if (e = i[n].toLowerCase().replace(/^on/, ""), a = s[e], a && a.length)
                            if (t)
                                for (o = a.indexOf(t); - 1 !== o;) a.splice(o, 1), o = a.indexOf(t, o);
                            else a.length = 0;
                return this
            },
            He = function(e) {
                var t = null,
                    n = Me[this.id] && Me[this.id].handlers;
                return n && (t = "string" == typeof e && e ? n[e] ? n[e].slice(0) : [] : T(n)), t
            },
            $e = function(e) {
                if (Xe.call(this, e)) {
                    "object" == typeof e && e && "string" == typeof e.type && e.type && (e = E({}, e));
                    var t = E({}, re(e), {
                        client: this
                    });
                    Ye.call(this, t)
                }
                return this
            },
            Be = function(e) {
                e = Je(e);
                for (var t = 0; t < e.length; t++)
                    if (y.call(e, t) && e[t] && 1 === e[t].nodeType) {
                        e[t].zcClippingId ? -1 === Pe[e[t].zcClippingId].indexOf(this.id) && Pe[e[t].zcClippingId].push(this.id) : (e[t].zcClippingId = "zcClippingId_" + Ae++, Pe[e[t].zcClippingId] = [this.id], H.autoActivate === !0 && Ve(e[t]));
                        var n = Me[this.id] && Me[this.id].elements; - 1 === n.indexOf(e[t]) && n.push(e[t])
                    }
                return this
            },
            We = function(e) {
                var t = Me[this.id];
                if (!t) return this;
                var n, r = t.elements;
                e = "undefined" == typeof e ? r.slice(0) : Je(e);
                for (var o = e.length; o--;)
                    if (y.call(e, o) && e[o] && 1 === e[o].nodeType) {
                        for (n = 0; - 1 !== (n = r.indexOf(e[o], n));) r.splice(n, 1);
                        var i = Pe[e[o].zcClippingId];
                        if (i) {
                            for (n = 0; - 1 !== (n = i.indexOf(this.id, n));) i.splice(n, 1);
                            0 === i.length && (H.autoActivate === !0 && Ge(e[o]), delete e[o].zcClippingId)
                        }
                    }
                return this
            },
            Ue = function() {
                var e = Me[this.id];
                return e && e.elements ? e.elements.slice(0) : []
            },
            ze = function() {
                this.unclip(), this.off(), delete Me[this.id]
            },
            Xe = function(e) {
                if (!e || !e.type) return !1;
                if (e.client && e.client !== this) return !1;
                var t = Me[this.id] && Me[this.id].elements,
                    n = !!t && t.length > 0,
                    r = !e.target || n && -1 !== t.indexOf(e.target),
                    o = e.relatedTarget && n && -1 !== t.indexOf(e.relatedTarget),
                    i = e.client && e.client === this;
                return r || o || i ? !0 : !1
            },
            Ye = function(e) {
                if ("object" == typeof e && e && e.type) {
                    var t = ae(e),
                        n = Me[this.id] && Me[this.id].handlers["*"] || [],
                        r = Me[this.id] && Me[this.id].handlers[e.type] || [],
                        i = n.concat(r);
                    if (i && i.length) {
                        var a, s, u, c, l, f = this;
                        for (a = 0, s = i.length; s > a; a++) u = i[a], c = f, "string" == typeof u && "function" == typeof o[u] && (u = o[u]), "object" == typeof u && u && "function" == typeof u.handleEvent && (c = u, u = u.handleEvent), "function" == typeof u && (l = E({}, e), se(u, c, [l], t))
                    }
                    return this
                }
            },
            Je = function(e) {
                return "string" == typeof e && (e = []), "number" != typeof e.length ? [e] : e
            },
            Ve = function(e) {
                if (e && 1 === e.nodeType) {
                    var t = function(e) {
                            (e || (e = o.event)) && ("js" !== e._source && (e.stopImmediatePropagation(), e.preventDefault()), delete e._source)
                        },
                        n = function(n) {
                            (n || (n = o.event)) && (t(n), Oe.focus(e))
                        };
                    e.addEventListener("mouseover", n, !1), e.addEventListener("mouseout", t, !1), e.addEventListener("mouseenter", t, !1), e.addEventListener("mouseleave", t, !1), e.addEventListener("mousemove", t, !1), Ie[e.zcClippingId] = {
                        mouseover: n,
                        mouseout: t,
                        mouseenter: t,
                        mouseleave: t,
                        mousemove: t
                    }
                }
            },
            Ge = function(e) {
                if (e && 1 === e.nodeType) {
                    var t = Ie[e.zcClippingId];
                    if ("object" == typeof t && t) {
                        for (var n, r, o = ["move", "leave", "enter", "out", "over"], i = 0, a = o.length; a > i; i++) n = "mouse" + o[i], r = t[n], "function" == typeof r && e.removeEventListener(n, r, !1);
                        delete Ie[e.zcClippingId]
                    }
                }
            };
        Oe._createClient = function() {
            Re.apply(this, x(arguments))
        }, Oe.prototype.on = function() {
            return Fe.apply(this, x(arguments))
        }, Oe.prototype.off = function() {
            return qe.apply(this, x(arguments))
        }, Oe.prototype.handlers = function() {
            return He.apply(this, x(arguments))
        }, Oe.prototype.emit = function() {
            return $e.apply(this, x(arguments))
        }, Oe.prototype.clip = function() {
            return Be.apply(this, x(arguments))
        }, Oe.prototype.unclip = function() {
            return We.apply(this, x(arguments))
        }, Oe.prototype.elements = function() {
            return Ue.apply(this, x(arguments))
        }, Oe.prototype.destroy = function() {
            return ze.apply(this, x(arguments))
        }, Oe.prototype.setText = function(e) {
            return Oe.setData("text/plain", e), this
        }, Oe.prototype.setHtml = function(e) {
            return Oe.setData("text/html", e), this
        }, Oe.prototype.setRichText = function(e) {
            return Oe.setData("application/rtf", e), this
        }, Oe.prototype.setData = function() {
            return Oe.setData.apply(this, x(arguments)), this
        }, Oe.prototype.clearData = function() {
            return Oe.clearData.apply(this, x(arguments)), this
        }, Oe.prototype.getData = function() {
            return Oe.getData.apply(this, x(arguments))
        }, "function" == typeof define && define.amd ? define(function() {
            return Oe
        }) : "object" == typeof module && module && "object" == typeof module.exports && module.exports ? module.exports = Oe : e.ZeroClipboard = Oe
    }(function() {
        return this || window
    }()), delete define.amd,
    function(e) {
        function t(t) {
            return e.facebox.settings.inited ? !0 : (e.facebox.settings.inited = !0, e(document).trigger("init.facebox"), void(t && e.extend(e.facebox.settings, t)))
        }

        function n() {
            var e, t;
            return self.pageYOffset ? (t = self.pageYOffset, e = self.pageXOffset) : document.documentElement && document.documentElement.scrollTop ? (t = document.documentElement.scrollTop, e = document.documentElement.scrollLeft) : document.body && (t = document.body.scrollTop, e = document.body.scrollLeft), new Array(e, t)
        }

        function r() {
            var e;
            return self.innerHeight ? e = self.innerHeight : document.documentElement && document.documentElement.clientHeight ? e = document.documentElement.clientHeight : document.body && (e = document.body.clientHeight), e
        }

        function o(t, n) {
            if (t.match(/#/)) {
                var r = window.location.href.split("#")[0],
                    o = t.replace(r, "");
                if ("#" == o) return;
                e.facebox.reveal(e(o).html(), n)
            }
        }

        function i() {
            return 0 == e.facebox.settings.overlay || null === e.facebox.settings.opacity
        }

        function a() {
            return i() ? void 0 : (0 == e(".facebox-overlay").length && e("body").append('<div class="facebox-overlay facebox-overlay-hide"></div>'), e(".facebox-overlay").hide().addClass("facebox-overlay-active").css("opacity", e.facebox.settings.opacity).click(function() {
                u(document, "facebox:close")
            }).fadeIn(200), !1)
        }

        function s() {
            return i() ? void 0 : (e(".facebox-overlay").fadeOut(200, function() {
                e(".facebox-overlay").removeClass("facebox-overlay-active"), e(".facebox-overlay").addClass("facebox-overlay-hide"), e(".facebox-overlay").remove()
            }), !1)
        }

        function u(e, t, n) {
            return e.dispatchEvent(new CustomEvent(t, {
                bubbles: !0,
                cancelable: !0,
                detail: n
            }))
        }
        e.facebox = function(t, n) {
            return e.facebox.loading(), new Promise(function(r) {
                e(document).one("facebox:reveal", function() {
                    r(e(".facebox-content")[0])
                }), t.div ? o(t.div, n) : e.isFunction(t) ? t.call(e) : e.facebox.reveal(t, n)
            })
        }, e.extend(e.facebox, {
            settings: {
                opacity: .5,
                overlay: !0
            },
            loading: function() {
                return t(), 1 == e(".facebox-loading").length ? !0 : (a(), e(".facebox-content").empty().append('<div class="facebox-loading"></div>'), e(".facebox").show().css({
                    top: n()[1] + r() / 10,
                    left: e(window).width() / 2 - e(".facebox-popup").outerWidth() / 2
                }), e(document).bind("keydown.facebox", function(t) {
                    return 27 == t.keyCode && e.facebox.close(), !0
                }), void u(document, "facebox:loading"))
            },
            reveal: function(t, n) {
                e(document).trigger("beforeReveal.facebox"), n && e(".facebox-content").addClass(n), e(".facebox-content").empty().append(t), e(".facebox-loading").remove(), e(".facebox-popup").children().fadeIn("normal"), e(".facebox").css("left", e(window).width() / 2 - e(".facebox-popup").outerWidth() / 2), e(".facebox-header").attr("tabindex", "-1"), e(".facebox-content [data-facebox-id]").each(function() {
                    e(this).attr("id", e(this).attr("data-facebox-id"))
                }), e(".facebox .facebox-header").focus(), u(document, "facebox:reveal"), e(document).trigger("afterReveal.facebox")
            },
            close: function() {
                return u(document, "facebox:close"), !1
            }
        }), e.fn.facebox = function(n) {
            function r(t) {
                t.preventDefault(), e.facebox.loading(!0);
                var n = this.rel.match(/facebox\[?\.(\w+)\]?/);
                n && (n = n[1]), o(this.href, n)
            }
            if (0 != e(this).length) return t(n), this.bind("click.facebox", r)
        }, document.addEventListener("facebox:close", function() {
            e(document).unbind("keydown.facebox"), e(".facebox").fadeOut(function() {
                e(".facebox-content").removeClass().addClass("facebox-content"), e(".facebox-loading").remove(), u(document, "facebox:afterClose")
            }), s()
        }), e(document).on("click", ".js-facebox-close", e.facebox.close)
    }(jQuery),
    function() {
        "use strict";

        function e(e, t) {
            setTimeout(function() {
                var n = t.ownerDocument.createEvent("Event");
                n.initEvent(e, !0, !0), t.dispatchEvent(n)
            }, 0)
        }

        function t(e, t) {
            return t.then(function(t) {
                e.insertAdjacentHTML("afterend", t), e.parentNode.removeChild(e)
            }, function() {
                e.classList.add("is-error")
            })
        }

        function n(e) {
            var t = e.src,
                n = r.get(e);
            return n && n.src === t ? n.data : (n = e.load(t), r.set(e, {
                src: t,
                data: n
            }), n)
        }
        var r = new WeakMap,
            o = Object.create(window.HTMLElement.prototype);
        Object.defineProperty(o, "src", {
            get: function() {
                var e = this.getAttribute("src");
                if (e) {
                    var t = this.ownerDocument.createElement("a");
                    return t.href = e, t.href
                }
                return ""
            },
            set: function(e) {
                this.setAttribute("src", e)
            }
        }), Object.defineProperty(o, "data", {
            get: function() {
                return n(this)
            }
        }), o.attributeChangedCallback = function(e) {
            if ("src" === e) {
                var r = n(this);
                this._attached && t(this, r)
            }
        }, o.createdCallback = function() {
            n(this)["catch"](function() {})
        }, o.attachedCallback = function() {
            this._attached = !0, this.src && t(this, n(this))
        }, o.detachedCallback = function() {
            this._attached = !1
        }, o.load = function(t) {
            var n = this;
            return t ? (e("loadstart", n), n.fetch(t).then(function(t) {
                return e("load", n), e("loadend", n), t
            }, function(t) {
                throw e("error", n), e("loadend", n), t
            })) : Promise.reject(new Error("missing src"))
        }, o.fetch = function(e) {
            return new Promise(function(t, n) {
                var r = new XMLHttpRequest;
                r.onload = function() {
                    if (200 === r.status) {
                        var e = r.getResponseHeader("Content-Type");
                        e && e.match(/^text\/html/) ? t(r.responseText) : n(new Error("Failed to load resource: expected text/html but was " + e))
                    } else n(new Error("Failed to load resource: the server responded with a status of " + r.status))
                }, r.onerror = n, r.open("GET", e), r.setRequestHeader("Accept", "text/html"), r.send()
            })
        }, window.IncludeFragmentElement = document.registerElement("include-fragment", {
            prototype: o
        })
    }(),
    function() {
        var e;
        e = "a[data-confirm], input[type=submit][data-confirm], button[data-confirm]", document.addEventListener("click", function(t) {
            var n, r, o;
            (r = "function" == typeof(n = t.target).closest ? n.closest(e) : void 0) && (o = r.getAttribute("data-confirm")) && (confirm(o) || (t.stopImmediatePropagation(), t.preventDefault()))
        }, !0)
    }.call(this),
    function() {
        var e, t = require("setimmediate")["default"];
        e = /complete|loaded|interactive/, $.readyQueue = function(n) {
            var r, o, i, a, s, u, c;
            return o = [], a = 0, c = !1, u = function() {
                var e;
                c = !1, e = a, a = o.length, n(o.slice(e))
            }, s = function() {
                u(), document.removeEventListener("DOMContentLoaded", s, !1)
            }, i = function(n) {
                n && o.push(n), c || (e.test(document.readyState) ? t(u) : document.addEventListener("DOMContentLoaded", s, !1), c = !0)
            }, r = function() {
                o.length = a = 0, c = !1
            }, {
                handlers: o,
                push: i,
                clear: r
            }
        }
    }.call(this),
    function() {
        var e, t, n, r;
        n = $.readyQueue(function(e) {
            r(e, null, window.location.href)
        }), $.hashChange = n.push, e = window.location.href, $(window).on("popstate", function() {
            return e = window.location.href
        }), $(window).on("hashchange", function(t) {
            var o, i, a;
            i = null != (a = t.originalEvent.oldURL) ? a : e, o = window.location.href, r(n.handlers, i, o), e = o
        }), t = null, document.addEventListener("pjax:start", function() {
            return t = window.location.href
        }), document.addEventListener("pjax:end", function() {
            var e;
            return e = window.location.href, r(n.handlers, t, e)
        }), r = function(e, t, n) {
            var r, o, i, a, s, u;
            for ((a = window.location.hash.slice(1)) && (u = document.getElementById(a)), null == u && (u = window), r = {
                    oldURL: t,
                    newURL: n,
                    target: u
                }, i = 0, s = e.length; s > i; i++) o = e[i], o.call(u, r)
        }, $.hashChange.clear = function() {
            return n.clear()
        }
    }(),
    function() {
        var e, t, n;
        e = null != (n = IncludeFragmentElement.prototype) ? n : Object.getPrototypeOf(new IncludeFragmentElement), t = Object.create(e), t.fetch = function(e) {
            return new Promise(function(t, n) {
                var r;
                return (r = function(o) {
                    var i;
                    return i = new XMLHttpRequest, i.onload = function() {
                        switch (i.status) {
                            case 200:
                                return t(i.responseText);
                            case 202:
                                return window.setTimeout(function() {
                                    return r(1.5 * o)
                                }, o);
                            default:
                                return n()
                        }
                    }, i.onerror = n, i.open("GET", e), i.send()
                })(1e3)
            })
        }, window.PollIncludeFragmentElement = document.registerElement("poll-include-fragment", {
            prototype: t
        })
    }.call(this), define("github/dimensions", ["exports", "jquery"], function(e, t) {
        function n(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function r(e) {
            var t = e.ownerDocument;
            if (t && e !== t.body) {
                for (; e !== t.body;) {
                    if (e = e.parentElement, !e) return;
                    var n = a["default"](e).css("overflow-y"),
                        r = a["default"](e).css("overflow-x");
                    if ("auto" === n || "auto" === r || "scroll" === n || "scroll" === r) break
                }
                return e
            }
        }

        function o(e, t) {
            var n = e.ownerDocument;
            if (n) {
                null == t && (t = n.body);
                var r = i(e, t);
                if (r) {
                    t.offsetParent ? scroll = {
                        top: a["default"](t).scrollTop(),
                        left: a["default"](t).scrollLeft()
                    } : (scroll = {
                        top: a["default"](n.defaultView).scrollTop(),
                        left: a["default"](n.defaultView).scrollLeft()
                    }, t = n.documentElement);
                    var o = r.top - scroll.top,
                        s = r.left - scroll.left,
                        u = t.clientHeight,
                        c = t.clientWidth,
                        l = u - (o + e.offsetHeight),
                        f = c - (s + e.offsetWidth);
                    return {
                        top: o,
                        left: s,
                        bottom: l,
                        right: f,
                        height: u,
                        width: c
                    }
                }
            }
        }

        function i(e, t) {
            var n = e.ownerDocument;
            if (n) {
                for (var r = 0, o = 0, i = e.offsetHeight, s = e.offsetWidth; e !== n.body && e !== t;)
                    if (r += e.offsetTop || 0, o += e.offsetLeft || 0, e = e.offsetParent, !e) return;
                var u = void 0,
                    c = void 0;
                t && t.offsetParent ? (u = t.scrollHeight, c = t.scrollWidth) : (u = a["default"](n).height(), c = a["default"](n).width());
                var l = u - (r + i),
                    f = c - (o + s);
                return {
                    top: r,
                    left: o,
                    bottom: l,
                    right: f
                }
            }
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.overflowParent = r, e.overflowOffset = o, e.positionedOffset = i;
        var a = n(t)
    }),
    function() {
        var e, t = require("setimmediate")["default"],
            n = require("github/dimensions"),
            r = n.positionedOffset,
            o = [].slice;
        $.fn.scrollTo = function() {
            var t, n, i, a, s, u, c;
            return t = 1 <= arguments.length ? o.call(arguments, 0) : [], (n = this[0]) ? (a = {}, $.isPlainObject(t[0]) ? (a = t[0], $.isFunction(t[1]) && null == a.complete && (a.complete = t[1])) : null != t[0] && (a.target = t[0]), null == a.top && null == a.left && (a.target ? (s = r($(a.target)[0], n), c = s.top, i = s.left, a.top = c, a.left = i) : (u = r($(n)[0]), c = u.top, i = u.left, a.top = c, a.left = i, n = document)), n.offsetParent ? a.duration ? e(n, a) : (null != a.top && (n.scrollTop = a.top), null != a.left && (n.scrollLeft = a.left), "function" == typeof a.complete && a.complete()) : a.duration ? e("html, body", a) : (null != a.top && $(document).scrollTop(a.top), null != a.left && $(document).scrollLeft(a.left), "function" == typeof a.complete && a.complete()), this) : this
        }, e = function(e, n) {
            var r, o, i;
            return i = {}, null != n.top && (i.scrollTop = n.top), null != n.left && (i.scrollLeft = n.left), o = {
                duration: n.duration,
                queue: !1
            }, n.complete && (r = $(e).length, o.complete = function() {
                return 0 === --r ? t(n.complete) : void 0
            }), $(e).animate(i, o)
        }
    }.call(this),
    function() {
        var e, t;
        t = function() {
            var e;
            return e = document.createElement("div"), e.style.cssText = "-ms-user-select: element; user-select: contain;", "element" === e.msUserSelect || "contain" === e.userSelect
        }(), t || null != window.getSelection && (e = function(t, n) {
            var r, o, i, a;
            if (t === n) return !0;
            for (a = t.childNodes, r = 0, o = a.length; o > r; r++)
                if (i = a[r], e(i, n)) return !0;
            return !1
        }, $(document).on("click", ".user-select-contain", function() {
            var t, n;
            n = window.getSelection(), n.rangeCount && (t = n.getRangeAt(0).commonAncestorContainer, e(this, t) || n.selectAllChildren(this))
        }))
    }.call(this),
    function() {
        "use strict";

        function e(e) {
            return ("0" + e).slice(-2)
        }

        function t(n, r) {
            var o = n.getDay(),
                i = n.getDate(),
                a = n.getMonth(),
                s = n.getFullYear(),
                u = n.getHours(),
                f = n.getMinutes(),
                d = n.getSeconds();
            return r.replace(/%([%aAbBcdeHIlmMpPSwyYZz])/g, function(r) {
                var p, h = r[1];
                switch (h) {
                    case "%":
                        return "%";
                    case "a":
                        return c[o].slice(0, 3);
                    case "A":
                        return c[o];
                    case "b":
                        return l[a].slice(0, 3);
                    case "B":
                        return l[a];
                    case "c":
                        return n.toString();
                    case "d":
                        return e(i);
                    case "e":
                        return i;
                    case "H":
                        return e(u);
                    case "I":
                        return e(t(n, "%l"));
                    case "l":
                        return 0 === u || 12 === u ? 12 : (u + 12) % 12;
                    case "m":
                        return e(a + 1);
                    case "M":
                        return e(f);
                    case "p":
                        return u > 11 ? "PM" : "AM";
                    case "P":
                        return u > 11 ? "pm" : "am";
                    case "S":
                        return e(d);
                    case "w":
                        return o;
                    case "y":
                        return e(s % 100);
                    case "Y":
                        return s;
                    case "Z":
                        return p = n.toString().match(/\((\w+)\)$/), p ? p[1] : "";
                    case "z":
                        return p = n.toString().match(/\w([+-]\d\d\d\d) /), p ? p[1] : ""
                }
            })
        }

        function n(e) {
            this.date = e
        }

        function r() {
            if (null !== f) return f;
            if (!("Intl" in window)) return !1;
            var e = {
                    day: "numeric",
                    month: "short"
                },
                t = new window.Intl.DateTimeFormat(void 0, e),
                n = t.format(new Date(0));
            return f = !!n.match(/^\d/)
        }

        function o() {
            if (null !== d) return d;
            if (!("Intl" in window)) return !0;
            var e = {
                    day: "numeric",
                    month: "short",
                    year: "numeric"
                },
                t = new window.Intl.DateTimeFormat(void 0, e),
                n = t.format(new Date(0));
            return d = !!n.match(/\d,/)
        }

        function i(e) {
            var t = new Date;
            return t.getUTCFullYear() === e.getUTCFullYear()
        }

        function a() {
            var e, t, n;
            for (t = 0, n = m.length; n > t; t++) e = m[t], e.textContent = e.getFormattedDate()
        }

        function s(e) {
            var n = {
                    weekday: {
                        "short": "%a",
                        "long": "%A"
                    },
                    day: {
                        numeric: "%e",
                        "2-digit": "%d"
                    },
                    month: {
                        "short": "%b",
                        "long": "%B"
                    },
                    year: {
                        numeric: "%Y",
                        "2-digit": "%y"
                    }
                },
                o = r() ? "weekday day month year" : "weekday month day, year";
            for (var i in n) {
                var a = n[i][e.getAttribute(i)];
                o = o.replace(i, a || "")
            }
            return o = o.replace(/(\s,)|(,\s$)/, ""), t(e._date, o).replace(/\s+/, " ").trim()
        }

        function u(e) {
            var n = {
                hour: e.getAttribute("hour"),
                minute: e.getAttribute("minute"),
                second: e.getAttribute("second")
            };
            for (var r in n) n[r] || delete n[r];
            if (0 !== Object.keys(n).length) {
                if ("Intl" in window) {
                    var o = new window.Intl.DateTimeFormat(void 0, n);
                    return o.format(e._date)
                }
                var i = n.second ? "%H:%M:%S" : "%H:%M";
                return t(e._date, i)
            }
        }
        var c = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            l = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        n.prototype.toString = function() {
            var e = this.timeElapsed();
            return e ? e : "on " + this.formatDate()
        }, n.prototype.timeElapsed = function() {
            var e = (new Date).getTime() - this.date.getTime(),
                t = Math.round(e / 1e3),
                n = Math.round(t / 60),
                r = Math.round(n / 60),
                o = Math.round(r / 24);
            return 0 > e ? "just now" : 10 > t ? "just now" : 45 > t ? t + " seconds ago" : 90 > t ? "a minute ago" : 45 > n ? n + " minutes ago" : 90 > n ? "an hour ago" : 24 > r ? r + " hours ago" : 36 > r ? "a day ago" : 30 > o ? o + " days ago" : null
        }, n.prototype.timeAgo = function() {
            var e = (new Date).getTime() - this.date.getTime(),
                t = Math.round(e / 1e3),
                n = Math.round(t / 60),
                r = Math.round(n / 60),
                o = Math.round(r / 24),
                i = Math.round(o / 30),
                a = Math.round(i / 12);
            return 0 > e ? "just now" : 10 > t ? "just now" : 45 > t ? t + " seconds ago" : 90 > t ? "a minute ago" : 45 > n ? n + " minutes ago" : 90 > n ? "an hour ago" : 24 > r ? r + " hours ago" : 36 > r ? "a day ago" : 30 > o ? o + " days ago" : 45 > o ? "a month ago" : 12 > i ? i + " months ago" : 18 > i ? "a year ago" : a + " years ago"
        }, n.prototype.microTimeAgo = function() {
            var e = (new Date).getTime() - this.date.getTime(),
                t = e / 1e3,
                n = t / 60,
                r = n / 60,
                o = r / 24,
                i = o / 30,
                a = i / 12;
            return 1 > n ? "1m" : 60 > n ? Math.round(n) + "m" : 24 > r ? Math.round(r) + "h" : 365 > o ? Math.round(o) + "d" : Math.round(a) + "y"
        };
        var f = null,
            d = null;
        n.prototype.formatDate = function() {
            var e = r() ? "%e %b" : "%b %e";
            return i(this.date) || (e += o() ? ", %Y" : " %Y"), t(this.date, e)
        }, n.prototype.formatTime = function() {
            if ("Intl" in window) {
                var e = new window.Intl.DateTimeFormat(void 0, {
                    hour: "numeric",
                    minute: "2-digit"
                });
                return e.format(this.date)
            }
            return t(this.date, "%l:%M%P")
        };
        var p, h, m = [];
        h = "HTMLTimeElement" in window ? Object.create(window.HTMLTimeElement.prototype) : Object.create(window.HTMLElement.prototype), h.attributeChangedCallback = function(e, t, n) {
            if ("datetime" === e) {
                var r = Date.parse(n);
                this._date = isNaN(r) ? null : new Date(r)
            }
            var o = this.getFormattedTitle();
            o && this.setAttribute("title", o);
            var i = this.getFormattedDate();
            i && (this.textContent = i)
        }, h.getFormattedTitle = function() {
            if (this._date) {
                if (this.hasAttribute("title")) return this.getAttribute("title");
                if ("Intl" in window) {
                    var e = {
                            day: "numeric",
                            month: "short",
                            year: "numeric",
                            hour: "numeric",
                            minute: "2-digit",
                            timeZoneName: "short"
                        },
                        t = new window.Intl.DateTimeFormat(void 0, e);
                    return t.format(this._date)
                }
                return this._date.toLocaleString()
            }
        };
        var v = Object.create(h);
        v.createdCallback = function() {
            var e = this.getAttribute("datetime");
            e && this.attributeChangedCallback("datetime", null, e)
        }, v.getFormattedDate = function() {
            return this._date ? new n(this._date).toString() : void 0
        }, v.attachedCallback = function() {
            m.push(this), p || (a(), p = setInterval(a, 6e4))
        }, v.detachedCallback = function() {
            var e = m.indexOf(this); - 1 !== e && m.splice(e, 1), m.length || p && (clearInterval(p), p = null)
        };
        var g = Object.create(v);
        g.getFormattedDate = function() {
            if (this._date) {
                var e = this.getAttribute("format");
                return "micro" === e ? new n(this._date).microTimeAgo() : new n(this._date).timeAgo()
            }
        };
        var y = Object.create(h);
        y.createdCallback = function() {
            var e;
            (e = this.getAttribute("datetime")) && this.attributeChangedCallback("datetime", null, e), (e = this.getAttribute("format")) && this.attributeChangedCallback("format", null, e)
        }, y.getFormattedDate = function() {
            if (this._date) {
                var e = s(this) || "",
                    t = u(this) || "";
                return (e + " " + t).trim()
            }
        }, window.RelativeTimeElement = document.registerElement("relative-time", {
            prototype: v,
            "extends": "time"
        }), window.TimeAgoElement = document.registerElement("time-ago", {
            prototype: g,
            "extends": "time"
        }), window.LocalTimeElement = document.registerElement("local-time", {
            prototype: y,
            "extends": "time"
        })
    }(),
    function() {
        $.fn.focused = function(e) {
            var t, n, r;
            return n = [], r = [], t = e ? this.find(e).filter(document.activeElement)[0] : this.filter(document.activeElement)[0], this.on("focusin", e, function() {
                var e, r, o;
                if (!t)
                    for (t = this, r = 0, o = n.length; o > r; r++) e = n[r], e.call(this)
            }), this.on("focusout", e, function() {
                var e, n, o;
                if (t)
                    for (t = null, n = 0, o = r.length; o > n; n++) e = r[n], e.call(this)
            }), {
                "in": function(e) {
                    return n.push(e), t && e.call(t), this
                },
                out: function(e) {
                    return r.push(e), this
                }
            }
        }
    }.call(this),
    function() {
        $.fn.onFocusedInput = function(e, t) {
            var n;
            return n = "focusInput" + Math.floor(1e3 * Math.random()), this.focused(e)["in"](function() {
                var e;
                return (e = t.call(this, n)) ? $(this).on("input." + n, e) : void 0
            }).out(function() {
                return $(this).off("." + n)
            }), this
        }
    }.call(this),
    function() {
        $.fn.onFocusedKeydown = function(e, t) {
            var n;
            return n = "focusKeydown" + Math.floor(1e3 * Math.random()), this.focused(e)["in"](function() {
                var e;
                return (e = t.call(this, n)) ? $(this).on("keydown." + n, e) : void 0
            }).out(function() {
                return $(this).off("." + n)
            }), this
        }
    }.call(this),
    function() {
        function e(e, t) {
            var n = void 0,
                r = void 0,
                o = void 0;
            (n = w.get(e)) || (n = [], w.set(e, n)), -1 === n.indexOf(t.id) && (null != t.initialize && (r = t.initialize.call(e, e)), !r || "length" in r || ((o = E.get(e)) || (o = {}, E.set(e, o)), o[t.id] = r), n.push(t.id))
        }

        function t(e, t) {
            var n = void 0,
                r = void 0,
                o = void 0,
                i = void 0,
                a = void 0;
            (n = x.get(e)) || (n = [], x.set(e, n)), -1 === n.indexOf(t.id) && (t.elements.push(e), (r = null != (o = E.get(e)) ? o[t.id] : void 0) && null != (i = r.add) && i.call(e, e), null != (a = t.add) && a.call(e, e), n.push(t.id))
        }

        function n(e, t) {
            var n = void 0,
                r = void 0,
                o = void 0,
                i = void 0,
                a = void 0,
                s = void 0,
                u = void 0,
                c = void 0,
                l = void 0,
                f = void 0,
                d = void 0,
                p = void 0,
                h = void 0;
            if (n = x.get(e))
                if (t) i = t.elements.indexOf(e), -1 !== i && t.elements.splice(i, 1), i = n.indexOf(t.id), -1 !== i && ((a = null != (u = E.get(e)) ? u[t.id] : void 0) && null != (c = a.remove) && c.call(e, e), null != (l = t.remove) && l.call(e, e), n.splice(i, 1)), 0 === n.length && x["delete"](e);
                else {
                    for (f = n.slice(0), r = 0, s = f.length; s > r; r++) o = f[r], t = y[o], t && (i = t.elements.indexOf(e), -1 !== i && t.elements.splice(i, 1), (a = null != (d = E.get(e)) ? d[t.id] : void 0) && null != (p = a.remove) && p.call(e, e), null != (h = t.remove) && h.call(e, e));
                    x["delete"](e)
                }
        }

        function r(e, t) {
            var n = void 0,
                r = void 0,
                o = void 0,
                i = void 0,
                a = void 0,
                s = void 0,
                u = void 0,
                c = void 0,
                l = void 0,
                f = void 0,
                d = void 0,
                p = void 0;
            for (i = 0, c = t.length; c > i; i++) {
                var h = t[i];
                if (h.nodeType === Node.ELEMENT_NODE) {
                    var m = b.matches(h);
                    for (a = 0, l = m.length; l > a; a++) n = m[a].data, e.push(["add", h, n]);
                    var v = b.queryAll(h);
                    for (s = 0, f = v.length; f > s; s++)
                        for (p = v[s], n = p.data, o = p.elements, u = 0, d = o.length; d > u; u++) r = o[u], e.push(["add", r, n])
                }
            }
        }

        function o(e, t) {
            var n = void 0,
                r = void 0,
                o = void 0,
                i = void 0,
                a = void 0;
            for (r = 0, i = t.length; i > r; r++) {
                var s = t[r];
                if (s.nodeType === Node.ELEMENT_NODE) {
                    e.push(["remove", s]);
                    var u = s.getElementsByTagName("*");
                    for (o = 0, a = u.length; a > o; o++) n = u[o], e.push(["remove", n])
                }
            }
        }

        function i(e) {
            var t = void 0,
                n = void 0,
                r = void 0,
                o = void 0,
                i = void 0,
                a = void 0;
            for (n = 0, o = y.length; o > n; n++) {
                var s = y[n];
                if (s)
                    for (a = s.elements, r = 0, i = a.length; i > r; r++) t = a[r], t.parentNode || e.push(["remove", t])
            }
        }

        function a(e, t) {
            var n = void 0,
                r = void 0,
                o = void 0,
                i = void 0,
                a = void 0,
                s = void 0,
                u = void 0,
                c = void 0,
                l = void 0;
            if (t.nodeType === Node.ELEMENT_NODE) {
                for (l = b.matches(t), r = 0, s = l.length; s > r; r++) n = l[r].data, e.push(["add", t, n]);
                if (i = x.get(t))
                    for (a = 0, u = i.length; u > a; a++) o = i[a], (c = y[o]) && (b.matchesSelector(t, c.selector) || e.push(["remove", t, c]))
            }
        }

        function s(e, t) {
            var n = void 0,
                r = void 0,
                o = void 0,
                i = void 0;
            if (t.nodeType === Node.ELEMENT_NODE)
                for (a(e, t), i = t.getElementsByTagName("*"), r = 0, o = i.length; o > r; r++) n = i[r], a(e, n)
        }

        function u(r) {
            var o = void 0,
                i = void 0,
                a = void 0,
                s = void 0,
                u = void 0,
                c = void 0;
            for (i = 0, a = r.length; a > i; i++) u = r[i], c = u[0], o = u[1], s = u[2], "add" === c ? (e(o, s), t(o, s)) : "remove" === c && n(o, s)
        }

        function c(e) {
            var t = void 0,
                r = void 0,
                o = e.elements;
            for (t = 0, r = o.length; r > t; t++) {
                var i = o[t];
                n(i, e)
            }
            b.remove(e.selector, e), delete y[e.id], $.observe.count--
        }

        function l() {
            return T ? void 0 : (m(f), T = !0)
        }

        function f() {
            var e = [];
            return r(e, [document.documentElement]), u(e), T = !1
        }

        function d() {
            var e = void 0,
                t = void 0,
                n = void 0,
                r = void 0,
                o = void 0,
                i = void 0,
                s = void 0,
                c = void 0,
                l = [];
            for (c = _, _ = [], n = 0, o = c.length; o > n; n++)
                for (s = c[n], t = s.form ? s.form.elements : s.ownerDocument.getElementsByTagName("input"), r = 0, i = t.length; i > r; r++) e = t[r], a(l, e);
            u(l)
        }

        function p(e) {
            _.push(e.target), m(d)
        }

        function h(e) {
            var t = void 0,
                n = void 0,
                s = void 0,
                c = [];
            for (t = 0, n = e.length; n > t; t++) s = e[t], "childList" === s.type ? (r(c, s.addedNodes), o(c, s.removedNodes)) : "attributes" === s.type && a(c, s.target);
            v && i(c), u(c)
        }
        var m = require("setimmediate")["default"],
            v = function() {
                var e = document.createElement("div"),
                    t = document.createElement("div"),
                    n = document.createElement("div");
                return e.appendChild(t), t.appendChild(n), e.innerHTML = "", n.parentNode !== t
            }(),
            g = 0,
            y = [],
            b = new SelectorSet;
        b.querySelectorAll = $.find, b.matchesSelector = $.find.matchesSelector;
        var w = new WeakMap,
            x = new WeakMap,
            E = new WeakMap;
        $.observe = function(e, t) {
            var n = void 0;
            return null != t.call && (t = {
                initialize: t
            }), n = {
                id: g++,
                selector: e,
                initialize: t.initialize || t.init,
                add: t.add,
                remove: t.remove,
                elements: [],
                stop: function() {
                    return c(n)
                }
            }, b.add(e, n), y[n.id] = n, l(), $.observe.count++, n
        };
        var T = !1;
        $.observe.count = 0, $(document).on("observe:dirty", function(e) {
            var t = [];
            s(t, e.target), u(t)
        });
        var _ = [];
        document.addEventListener("change", p, !1), $(document).on("change", p);
        var C = new MutationObserver(h);
        $(function() {
            C.observe(document, {
                childList: !0,
                attributes: !0,
                subtree: !0
            });
            var e = [];
            r(e, [document.documentElement]), u(e)
        }, !1)
    }(),
    function() {
        var e;
        e = function() {
            return this.offsetWidth <= 0 && this.offsetHeight <= 0
        }, $.visible = function() {
            return !e.call(this)
        }, $.fn.hidden = function() {
            return this.filter(e)
        }, $.fn.visible = function() {
            return this.filter($.visible)
        }
    }.call(this), define("github/debounce", ["exports"], function(e) {
        function t(e, t) {
            var n = null;
            return function() {
                clearTimeout(n), n = setTimeout(e, t)
            }
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e["default"] = t
    }), define("github/document-ready", ["exports"], function(e) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        e.ready = function() {
            return "interactive" === document.readyState || "complete" === document.readyState ? Promise.resolve() : new Promise(function(e) {
                document.addEventListener("DOMContentLoaded", e)
            })
        }(), e.loaded = function() {
            return "complete" === document.readyState ? Promise.resolve() : new Promise(function(e) {
                window.addEventListener("load", e)
            })
        }()
    }), define("github/event-once", ["exports", "jquery"], function(e, t) {
        function n(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function r() {
            return !0
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e["default"] = function(e, t) {
            var n = arguments.length <= 2 || void 0 === arguments[2] ? r : arguments[2];
            return new Promise(function(r) {
                o["default"](e).on(t, function i(a) {
                    n(a) && (r(a), o["default"](e).off(t, i))
                })
            })
        };
        var o = n(t)
    }), define("github/fetch", ["exports"], function(e) {
        function t(e) {
            if (e.status >= 200 && e.status < 300) return e;
            var t = new Error(e.statusText || e.status);
            throw t.response = e, t
        }

        function n(e) {
            return null == e.headers && (e.headers = {}), e.headers["X-Requested-With"] = "XMLHttpRequest", e
        }

        function r(e) {
            return null == e.credentials && (e.credentials = "same-origin"), e
        }

        function o(e) {
            return e.json()
        }

        function i(e) {
            return e.text()
        }

        function a(e, o) {
            return o = n(r(o || {})), l(e, o).then(t)
        }

        function s(e, o) {
            return o = n(r(o || {})), l(e, o).then(t).then(i)
        }

        function u(e, i) {
            return i = n(r(i || {})), i.headers.Accept = "application/json", l(e, i).then(t).then(o)
        }

        function c(e, t) {
            return new Promise(function(n, r) {
                function o(i) {
                    function s(e) {
                        switch (e.status) {
                            case 200:
                                n(e);
                                break;
                            case 202:
                                setTimeout(function() {
                                    return o(1.5 * i)
                                }, i);
                                break;
                            default:
                                var t = new Error(e.statusText || e.status);
                                t.response = e, r(t)
                        }
                    }
                    a(e, t).then(s, r)
                }
                o(1e3)
            })
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.fetch = a, e.fetchText = s, e.fetchJSON = u, e.fetchPoll = c;
        var l = window.fetch
    }), define("github/hash-change", ["exports", "jquery"], function(e, t) {
        function n(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function r(e) {
            o["default"].hashChange(e)
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e["default"] = r;
        var o = n(t)
    }), define("github/hotkey", ["exports"], function(e) {
        function t(e) {
            var t = n[e.which],
                o = "";
            if (e.ctrlKey && "ctrl" !== t && (o += "ctrl+"), e.altKey && "alt" !== t && (o += "alt+"), e.metaKey && !e.ctrlKey && "meta" !== t && (o += "meta+"), e.shiftKey) {
                var i = r[e.which];
                return i ? o + i : "shift" === t ? o + "shift" : t ? o + "shift+" + t : null
            }
            return t ? o + t : null
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e["default"] = t;
        var n = {
                8: "backspace",
                9: "tab",
                13: "enter",
                16: "shift",
                17: "ctrl",
                18: "alt",
                19: "pause",
                20: "capslock",
                27: "esc",
                32: "space",
                33: "pageup",
                34: "pagedown",
                35: "end",
                36: "home",
                37: "left",
                38: "up",
                39: "right",
                40: "down",
                45: "insert",
                46: "del",
                48: "0",
                49: "1",
                50: "2",
                51: "3",
                52: "4",
                53: "5",
                54: "6",
                55: "7",
                56: "8",
                57: "9",
                65: "a",
                66: "b",
                67: "c",
                68: "d",
                69: "e",
                70: "f",
                71: "g",
                72: "h",
                73: "i",
                74: "j",
                75: "k",
                76: "l",
                77: "m",
                78: "n",
                79: "o",
                80: "p",
                81: "q",
                82: "r",
                83: "s",
                84: "t",
                85: "u",
                86: "v",
                87: "w",
                88: "x",
                89: "y",
                90: "z",
                91: "meta",
                93: "meta",
                96: "0",
                97: "1",
                98: "2",
                99: "3",
                100: "4",
                101: "5",
                102: "6",
                103: "7",
                104: "8",
                105: "9",
                106: "*",
                107: "+",
                109: "-",
                110: ".",
                111: "/",
                112: "f1",
                113: "f2",
                114: "f3",
                115: "f4",
                116: "f5",
                117: "f6",
                118: "f7",
                119: "f8",
                120: "f9",
                121: "f10",
                122: "f11",
                123: "f12",
                144: "numlock",
                145: "scroll",
                186: "",
                187: "=",
                188: ",",
                189: "-",
                190: ".",
                191: "/",
                192: "`",
                219: "[",
                220: "\\",
                221: "]",
                222: "'"
            },
            r = {
                48: ")",
                49: "!",
                50: "@",
                51: "#",
                52: "$",
                53: "%",
                54: "^",
                55: "&",
                56: "*",
                57: "(",
                65: "A",
                66: "B",
                67: "C",
                68: "D",
                69: "E",
                70: "F",
                71: "G",
                72: "H",
                73: "I",
                74: "J",
                75: "K",
                76: "L",
                77: "M",
                78: "N",
                79: "O",
                80: "P",
                81: "Q",
                82: "R",
                83: "S",
                84: "T",
                85: "U",
                86: "V",
                87: "W",
                88: "X",
                89: "Y",
                90: "Z",
                186: ":",
                187: "+",
                188: "<",
                189: "_",
                190: ">",
                191: "?",
                192: "~",
                219: "{",
                220: "|",
                221: "}",
                222: '"'
            }
    }), define("github/png-scanner", ["exports"], function(e) {
        function t(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            r = 2303741511,
            o = 4,
            i = function() {
                function e(n) {
                    t(this, e), this.dataview = new DataView(n), this.pos = 0
                }
                return n(e, null, [{
                    key: "fromFile",
                    value: function(t) {
                        return new Promise(function(n, r) {
                            var o = new FileReader;
                            o.onload = function() {
                                n(new e(o.result))
                            }, o.onerror = function() {
                                r(o.error)
                            }, o.readAsArrayBuffer(t)
                        })
                    }
                }]), n(e, [{
                    key: "advance",
                    value: function(e) {
                        return this.pos += e
                    }
                }, {
                    key: "readInt",
                    value: function(e) {
                        var t = this.dataview["getUint" + 8 * e](this.pos);
                        return this.advance(e), t
                    }
                }, {
                    key: "readChar",
                    value: function() {
                        return this.readInt(1)
                    }
                }, {
                    key: "readShort",
                    value: function() {
                        return this.readInt(2)
                    }
                }, {
                    key: "readLong",
                    value: function() {
                        return this.readInt(4)
                    }
                }, {
                    key: "readString",
                    value: function(e) {
                        for (var t = [], n = 0; e > n; n++) t.push(String.fromCharCode(this.readChar()));
                        return t.join("")
                    }
                }, {
                    key: "scan",
                    value: function(e) {
                        if (this.readLong() !== r) throw new Error("invalid PNG");
                        for (this.advance(4);;) {
                            var t = this.readLong(),
                                n = this.readString(4),
                                i = this.pos + t + o;
                            if (e.call(this, n, t) === !1 || "IEND" === n) break;
                            this.pos = i
                        }
                    }
                }]), e
            }();
        e["default"] = i
    }), define("github/image-dimensions", ["exports", "./png-scanner"], function(e, t) {
        function n(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function r(e) {
            if ("image/png" !== e.type) return Promise.resolve({});
            var t = e.slice(0, 10240, e.type);
            return o["default"].fromFile(t).then(function(e) {
                var t = {};
                return e.scan(function(e) {
                    switch (e) {
                        case "IHDR":
                            return t.width = this.readLong(), void(t.height = this.readLong());
                        case "pHYs":
                            var n = this.readLong(),
                                r = this.readLong(),
                                o = this.readChar(),
                                a = void 0;
                            return 1 === o && (a = i), a && (t.ppi = Math.round((n + r) / 2 * a)), !1;
                        case "IDAT":
                            return !1
                    }
                }), t
            })
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e["default"] = r;
        var o = n(t),
            i = .0254
    }), define("github/inflector", ["exports"], function(e) {
        function t(e, t) {
            return t + (e > 1 || 0 == e ? "s" : "")
        }

        function n(e, t) {
            var n = 1 == e ? "data-singular-string" : "data-plural-string",
                r = t.getAttribute(n);
            t.textContent = r
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.pluralize = t, e.pluralizeNode = n
    }), define("github/local-storage", ["exports"], function(e) {
        function t(e) {
            try {
                return localStorage.getItem(e)
            } catch (t) {
                return null
            }
        }

        function n(e, t) {
            try {
                localStorage.setItem(e, t)
            } catch (n) {}
        }

        function r(e) {
            try {
                localStorage.removeItem(e)
            } catch (t) {}
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.getItem = t, e.setItem = n, e.removeItem = r
    }), define("github/number-helpers", ["exports"], function(e) {
        function t(e) {
            return ("" + e).replace(/(^|[^\w.])(\d{4,})/g, function(e, t, n) {
                return t + n.replace(/\d(?=(?:\d\d\d)+(?!\d))/g, "$&,")
            })
        }

        function n(e) {
            return "string" == typeof e && (e = e.replace(/,/g, "")), parseFloat(e)
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.formatNumber = t, e.parseFormattedNumber = n
    }), define("github/fragment-target", ["exports"], function(e) {
        function t() {
            var e = arguments.length <= 0 || void 0 === arguments[0] ? location.hash : arguments[0],
                t = decodeURIComponent(e.slice(1));
            return n(t)
        }

        function n(e) {
            return document.getElementById(e) || document.getElementsByName(e)[0]
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.findFragmentTarget = t, e.findElementByFragmentName = n
    }), define("github/pjax/prefetch", ["exports"], function(e) {
        function t(e, t) {
            for (var n = e.querySelectorAll("link[rel=pjax-prefetch]"), r = 0, o = n.length; o > r; r++) {
                var i = n[r];
                if (i.href === t.url) return i
            }
        }

        function n(e, n) {
            var r = t(e, n);
            if (r) {
                var i = o.get(r);
                return r.remove(), o["delete"](r), i
            }
        }

        function r(e, t) {
            o.set(e, t)
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.popPrefetchResponseForRequest = n, e.setPrefetchResponse = r;
        var o = new WeakMap
    }), define("github/pjax", ["exports", "./history", "jquery", "./fragment-target", "./inspect", "./pjax/prefetch"], function(e, t, n, r, o, i) {
        function a(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function s(e, t, n) {
            n = x(t, n);
            var r = e.currentTarget;
            if ("A" !== r.tagName.toUpperCase()) throw new Error("$.fn.pjax or pjax click requires an anchor element");
            if (!(e.which > 1 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || location.protocol !== r.protocol || location.hostname !== r.hostname || r.href.indexOf("#") > -1 && w(r) == w(location) || e.isDefaultPrevented())) {
                var o = {
                        url: r.href,
                        container: L["default"](r).attr("data-pjax"),
                        target: r
                    },
                    i = L["default"].extend({}, o, n);
                c(r, "pjax:click", {
                    options: i,
                    relatedEvent: e.originalEvent
                }) && (l(i), e.preventDefault(), c(r, "pjax:clicked", {
                    options: i
                }))
            }
        }

        function u(e, t, n) {
            n = x(t, n);
            var r = e.currentTarget,
                o = L["default"](r);
            if ("FORM" !== r.tagName.toUpperCase()) throw new Error("pjax submit requires a form element");
            var i = {
                type: (o.attr("method") || "GET").toUpperCase(),
                url: o.attr("action"),
                container: o.attr("data-pjax"),
                target: r
            };
            if ("GET" !== i.type && void 0 !== window.FormData) i.data = new FormData(r), i.processData = !1, i.contentType = !1;
            else {
                if (L["default"](r).find(":file").length) return;
                i.data = L["default"](r).serializeArray()
            }
            l(L["default"].extend({}, i, n)), e.preventDefault()
        }

        function c(e, t, n) {
            return e.dispatchEvent(new CustomEvent(t, {
                bubbles: !0,
                cancelable: !0,
                detail: n
            }))
        }

        function l(e) {
            function n(t, n) {
                "GET" !== n.type && (n.timeout = 0), t.setRequestHeader("X-PJAX", "true"), t.setRequestHeader("X-PJAX-Container", u.selector), n.timeout > 0 && (f = setTimeout(function() {
                    c(u[0], "pjax:timeout") && t.abort("timeout")
                }, n.timeout), n.timeout = 0);
                var r = b(n.url);
                s && (r.hash = s), e.requestUrl = y(r)
            }

            function o(t, n) {
                var r = C("", t, e),
                    o = c(u[0], "pjax:error");
                "GET" == e.type && "abort" !== n && o && p(r.url), f && clearTimeout(f), c(u[0], "pjax:complete"), c(u[0], "pjax:end")
            }

            function a(n, o, i) {
                var a = I,
                    l = D(),
                    d = i.getResponseHeader("X-PJAX-Version"),
                    h = C(n, i, e),
                    m = b(h.url);
                if (s && (m.hash = s, h.url = m.href), l && d && l !== d) return void p(h.url);
                if (!h.contents) return void p(h.url);
                I = {
                    id: e.id || v(),
                    url: h.url,
                    title: h.title,
                    container: u.selector,
                    fragment: e.fragment,
                    timeout: e.timeout
                }, (e.push || e.replace) && t.replaceState(I, h.title, h.url);
                var g = L["default"].contains(e.container, document.activeElement);
                if (g) try {
                    document.activeElement.blur()
                } catch (y) {}
                h.title && (document.title = h.title), c(u[0], "pjax:beforeReplace", {
                    contents: h.contents,
                    state: I,
                    previousState: a
                }), u.html(h.contents);
                var w = u.find("input[autofocus], textarea[autofocus]").last()[0];
                w && document.activeElement !== w && w.focus(), j(h.scripts);
                var x = e.scrollTo;
                if (s) {
                    var E = r.findFragmentTarget(s);
                    E && (x = L["default"](E).offset().top)
                }
                "number" == typeof x && L["default"](window).scrollTop(x), c(u[0], "pjax:success"), f && clearTimeout(f), c(u[0], "pjax:complete"), c(u[0], "pjax:end")
            }
            e = L["default"].extend(!0, {}, L["default"].ajaxSettings, A, e), L["default"].isFunction(e.url) && (e.url = e.url());
            var s = b(e.url).hash,
                u = e.context = E(e.container);
            e.data || (e.data = {}), L["default"].isArray(e.data) ? e.data.push({
                name: "_pjax",
                value: u.selector
            }) : e.data._pjax = u.selector;
            var f = void 0;
            I || (I = {
                id: v(),
                url: window.location.href,
                title: document.title,
                container: u.selector,
                fragment: e.fragment,
                timeout: e.timeout
            }, t.replaceState(I, document.title)), m(R), e.beforeSend = n, l.options = e;
            var d = i.popPrefetchResponseForRequest(u[0], e),
                h = R = d || L["default"].ajax(e);
            return h.readyState > 0 && (e.push && !e.replace && (k(I.id, g(u)), t.pushState(null, "", e.requestUrl)), c(u[0], "pjax:start"), c(u[0], "pjax:send")), h.done(a).fail(o)
        }

        function f(e, t) {
            var n = e.closest("[data-pjax-container]");
            if (!n) throw new Error("no pjax container for " + M["default"](n));
            t || (t = {});
            var r = E(n),
                o = L["default"].extend({
                    "X-PJAX": "true",
                    "X-PJAX-Container": r.selector
                }, t.headers || {});
            return L["default"].ajax({
                type: "GET",
                url: e.href,
                data: {
                    _pjax: r.selector
                },
                dataType: "html",
                headers: o
            })
        }

        function d(e, t) {
            var n = {
                url: window.location.href,
                push: !1,
                replace: !0,
                scrollTo: !1
            };
            return l(L["default"].extend(n, x(e, t)))
        }

        function p(e) {
            t.replaceState(null, "", I.url), window.location.replace(e)
        }

        function h(e) {
            F || m(R);
            var t = I,
                n = e.state,
                r = void 0;
            if (n && n.container) {
                if (F && q == n.url) return;
                if (t) {
                    if (t.id === n.id) return;
                    r = t.id < n.id ? "forward" : "back"
                }
                var o = $[n.id] || [],
                    i = L["default"](o[0] || n.container),
                    a = o[1];
                if (i.length) {
                    t && S(r, t.id, g(i)), c(i[0], "pjax:popstate", {
                        state: n,
                        direction: r
                    });
                    var s = {
                        id: n.id,
                        url: n.url,
                        container: i,
                        push: !1,
                        fragment: n.fragment,
                        timeout: n.timeout,
                        scrollTo: !1
                    };
                    a ? (c(i[0], "pjax:start"), I = n, n.title && (document.title = n.title), c(i[0], "pjax:beforeReplace", {
                        contents: a,
                        state: n,
                        previousState: t
                    }), i.html(a), c(i[0], "pjax:end")) : l(s), i[0].offsetHeight
                } else p(location.href)
            }
            F = !1
        }

        function m(e) {
            e && e.readyState < 4 && (e.onreadystatechange = L["default"].noop, e.abort())
        }

        function v() {
            return (new Date).getTime()
        }

        function g(e) {
            var t = e.clone();
            return t.find("script").each(function() {
                this.src || L["default"]._data(this, "globalEval", !1)
            }), [e.selector, t.contents()]
        }

        function y(e) {
            return e.search = e.search.replace(/([?&])(_pjax|_)=[^&]*/g, ""), e.href.replace(/\?($|#)/, "$1")
        }

        function b(e) {
            var t = document.createElement("a");
            return t.href = e, t
        }

        function w(e) {
            return e.href.replace(/#.*/, "")
        }

        function x(e, t) {
            return e && t ? t.container = e : t = L["default"].isPlainObject(e) ? e : {
                container: e
            }, t.container && (t.container = E(t.container)), t
        }

        function E(e) {
            var t = L["default"](e);
            if (t.length) {
                if ("" !== t.selector && t.context === document) return t;
                if (t.attr("id")) return L["default"]("#" + t.attr("id"));
                throw new Error("cant get selector for pjax container!")
            }
            throw new Error("no pjax container for " + t.selector)
        }

        function T(e, t) {
            return e.filter(t).add(e.find(t))
        }

        function _(e) {
            return L["default"].parseHTML(e, document, !0)
        }

        function C(e, t, n) {
            var r = {},
                o = /<html/i.test(e),
                i = t.getResponseHeader("X-PJAX-URL");
            r.url = i ? y(b(i)) : n.requestUrl;
            var a = (t.getResponseHeader("Content-Type") || "").split(";", 1)[0].trim();
            if ("text/html" != a) return r;
            var s = void 0,
                u = void 0;
            if (o ? (s = L["default"](_(e.match(/<head[^>]*>([\s\S.]*)<\/head>/i)[0])), u = L["default"](_(e.match(/<body[^>]*>([\s\S.]*)<\/body>/i)[0]))) : s = u = L["default"](_(e)), 0 === u.length) return r;
            r.title = T(s, "title").last().text();
            var c = void 0;
            return n.fragment ? (c = "body" === n.fragment ? u : T(u, n.fragment).first(), c.length && (r.contents = "body" === n.fragment ? c : c.contents(), r.title || (r.title = c.attr("title") || c.data("title")))) : o || (r.contents = u), r.contents && (r.contents = r.contents.not(function() {
                return L["default"](this).is("title")
            }), r.contents.find("title").remove(), r.scripts = T(r.contents, "script[src]").remove(), r.contents = r.contents.not(r.scripts)), r.title && (r.title = L["default"].trim(r.title)), r
        }

        function j(e) {
            if (e) {
                var t = L["default"]("script[src]");
                e.each(function() {
                    var e = this.src,
                        n = t.filter(function() {
                            return this.src === e
                        });
                    if (!n.length) {
                        var r = document.createElement("script"),
                            o = L["default"](this).attr("type");
                        o && (r.type = o), r.src = L["default"](this).attr("src"), document.head.appendChild(r)
                    }
                })
            }
        }

        function k(e, t) {
            $[e] = t, W.push(e), N(B, 0), N(W, P)
        }

        function S(e, t, n) {
            var r = void 0,
                o = void 0;
            $[t] = n, "forward" === e ? (r = W, o = B) : (r = B, o = W), r.push(t), t = o.pop(), t && delete $[t], N(r, P)
        }

        function N(e, t) {
            for (; e.length > t;) delete $[e.shift()]
        }

        function D() {
            return L["default"]("meta").filter(function() {
                var e = L["default"](this).attr("http-equiv");
                return e && "X-PJAX-VERSION" === e.toUpperCase()
            }).attr("content")
        }

        function O() {
            return I
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.click = s, e.submit = u, e["default"] = l, e.fetch = f, e.reload = d, e.getState = O;
        var L = a(n),
            M = a(o),
            A = {
                timeout: 650,
                push: !0,
                replace: !1,
                type: "GET",
                dataType: "html",
                scrollTo: 0
            },
            P = 20,
            I = void 0,
            R = void 0,
            F = !0,
            q = window.location.href,
            H = window.history.state;
        H && H.container && (I = H), "state" in window.history && (F = !1);
        var $ = {},
            B = [],
            W = [];
        L["default"].inArray("state", L["default"].event.props) < 0 && L["default"].event.props.push("state"), L["default"](window).on("popstate.pjax", h)
    }), define("github/sliding-promise-queue", ["exports"], function(e) {
        function t(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function n() {}
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            o = function() {
                function e() {
                    t(this, e), this.previousReceiver = {}
                }
                return r(e, [{
                    key: "push",
                    value: function(e) {
                        var t = this;
                        return this.previousReceiver.resolve = this.previousReceiver.reject = n, new Promise(function(n, r) {
                            var o = {
                                resolve: n,
                                reject: r
                            };
                            t.previousReceiver = o, e.then(function() {
                                o.resolve.apply(this, arguments)
                            }, function() {
                                o.reject.apply(this, arguments)
                            })
                        })
                    }
                }]), e
            }();
        e["default"] = o
    }), define("github/stats", ["exports", "./proxy-site-detection", "./document-ready"], function(e, t, n) {
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function o() {
            var e = void 0;
            null == s && (s = null != (e = document.querySelector("meta[name=browser-stats-url]")) ? e.getAttribute("content") : void 0), s && (i["default"] || (u = null, window.fetch(s, {
                method: "post",
                body: JSON.stringify(c),
                headers: {
                    "Content-Type": "application/json"
                }
            }), c = []))
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e["default"] = function(e) {
            c.push(e), n.loaded.then(function() {
                null != u ? u : u = setTimeout(o, a)
            })
        };
        var i = r(t),
            a = 500,
            s = null,
            u = null,
            c = []
    }), define("github/sticky-scroll-into-view", ["exports", "./fragment-target"], function(e, t) {
        function n(e) {
            if (Array.isArray(e)) {
                for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
                return n
            }
            return Array.from(e)
        }

        function r(e) {
            e.scrollIntoView(), window.scrollBy(0, -i())
        }

        function o() {
            var e = t.findFragmentTarget();
            e && r(e)
        }

        function i() {
            var e, t = document.querySelectorAll(".js-sticky-offset-scroll");
            return (e = Math).max.apply(e, n(Array.from(t).map(function(e) {
                var t = e.getBoundingClientRect(),
                    n = t.top,
                    r = t.height;
                return 0 === n ? r : 0
            })))
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.scrollIntoView = r, e.scrollToFragmentTarget = o, e.computeFixedYOffset = i
    }), define("github/text", ["exports"], function(e) {
        function t(e, t, n) {
            var r = e.value.substring(0, e.selectionEnd),
                o = e.value.substring(e.selectionEnd);
            r = r.replace(t, n), o = o.replace(t, n), e.value = r + o, e.selectionStart = r.length, e.selectionEnd = r.length
        }

        function n(e, t) {
            var n = e.selectionEnd,
                r = e.value.substring(0, n),
                o = e.value.substring(n),
                i = "" === e.value || r.match(/\n$/) ? "" : "\n";
            e.value = r + i + t + o, e.selectionStart = n + t.length, e.selectionEnd = n + t.length
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.replaceText = t, e.insertText = n
    }), define("delegated-events", ["exports"], function(e) {
        function t(e, t, n) {
            var r = e[t];
            return e[t] = function() {
                return n.apply(e, arguments), r.apply(e, arguments)
            }, e
        }

        function n(e, t) {
            var n = [],
                r = t;
            do {
                if (1 !== r.nodeType) break;
                var o = e.matches(r);
                o.length && n.push({
                    node: r,
                    observers: o
                })
            } while (r = r.parentElement);
            return n
        }

        function r() {
            d.set(this, !0)
        }

        function o() {
            d.set(this, !0), p.set(this, !0)
        }

        function i() {
            return h.get(this) || null
        }

        function a(e) {
            var t = Object.getOwnPropertyDescriptor(Event.prototype, "currentTarget");
            t && Object.defineProperty(e, "currentTarget", {
                get: i
            })
        }

        function s(e) {
            t(e, "stopPropagation", r), t(e, "stopImmediatePropagation", o), a(e);
            for (var i = f[e.type], s = n(i, e.target), u = 0, c = s.length; c > u && !d.get(e); u++) {
                var l = s[u];
                h.set(e, l.node);
                for (var m = 0, v = l.observers.length; v > m && !p.get(e); m++) l.observers[m].data.call(l.node, e)
            }
            h["delete"](e)
        }

        function u(e, t, n) {
            var r = f[e];
            r || (r = new SelectorSet, f[e] = r, document.addEventListener(e, s, !1)), r.add(t, n)
        }

        function c(e, t, n) {
            var r = f[e];
            r && (r.remove(t, n), r.size || (delete f[e], document.removeEventListener(e, s, !1)))
        }

        function l(e, t, n) {
            return e.dispatchEvent(new CustomEvent(t, {
                bubbles: !0,
                cancelable: !0,
                detail: n
            }))
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.on = u, e.off = c, e.fire = l;
        var f = {},
            d = new WeakMap,
            p = new WeakMap,
            h = new WeakMap
    }), define("frameworks-bootstrap", ["./github/debounce", "./github/dimensions", "./github/document-ready", "./github/event-once", "./github/failbot", "./github/feature-detection", "./github/fetch", "./github/hash-change", "./github/hotkey", "./github/image-dimensions", "./github/inflector", "./github/jquery-event-error-context", "./github/local-storage", "./github/number-helpers", "./github/pjax", "./github/png-scanner", "./github/proxy-site-detection", "./github/sliding-promise-queue", "./github/stats", "./github/sticky-scroll-into-view", "./github/text", "./setimmediate", "delegated-events"], function() {}), require("frameworks-bootstrap");