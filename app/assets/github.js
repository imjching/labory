function _toConsumableArray(e) {
    if (Array.isArray(e)) {
        for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
        return n
    }
    return Array.from(e)
}

function _toConsumableArray(e) {
    if (Array.isArray(e)) {
        for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
        return n
    }
    return Array.from(e)
}

function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}
top !== window && (alert("For security reasons, framing is not allowed."), top.location.replace(document.location)),
    function(e) {
        e.fn.caret = function(e) {
            return "undefined" == typeof e ? this[0].selectionStart : (this[0].focus(), this[0].setSelectionRange(e, e))
        }, e.fn.caretSelection = function(e, t) {
            return "undefined" == typeof e && "undefined" == typeof t ? [this[0].selectionStart, this[0].selectionEnd] : (this[0].focus(), this[0].setSelectionRange(e, t))
        }
    }(jQuery), $(document).on("ajaxSuccess", ".js-ajax-pagination", function(e, t, n, i) {
        this.replaceWith.apply(this, $.parseHTML(i))
    }),
    function() {
        var e, t, n, i;
        t = require("github/inspect")["default"], n = require("github/failbot").reportError, e = function(e) {
            return Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = (new Error).stack, this.name = "DataRemoteError", this.message = e
        }, e.prototype = new Error, e.prototype.constructor = e, i = function() {
            return $("#ajax-error-message").show(function() {
                return $(this).addClass("visible")
            })
        }, $(document).on("ajaxError", "[data-remote]", function(r, s, o, a) {
            var c, u, l, d, h, f;
            if (this === r.target && "abort" !== a && "canceled" !== a) {
                if (u = "." + this.className.split(" ").sort().join("."), c = new e(a + " (" + s.status + ") from " + u), n(c, {
                        dataRemote: {
                            target: t(this),
                            method: null != (l = this.getAttribute("method")) ? l : "GET",
                            url: null != (d = null != (h = this.href) ? h : this.action) ? d : window.location.href,
                            dataType: null != (f = this.getAttribute("data-type")) ? f : "intelligent guess"
                        }
                    }), /<html/.test(s.responseText)) throw i(), r.stopImmediatePropagation(), c;
                return setTimeout(function() {
                    if (!r.isDefaultPrevented()) throw i(), c
                }, 0)
            }
        }), $(document).on("ajaxSend", "[data-remote]", function() {
            return $("#ajax-error-message").hide().removeClass("visible")
        }), $(document).on("click", ".js-ajax-error-dismiss", function() {
            return $("#ajax-error-message").hide().removeClass("visible"), !1
        })
    }.call(this),
    function() {
        $(document).on("ajaxSend", "[data-remote]", function(e) {
            return this !== e.target || e.isDefaultPrevented() ? void 0 : $(this).addClass("loading")
        }), $(document).on("ajaxComplete", "[data-remote]", function(e) {
            return this === e.target ? $(this).removeClass("loading") : void 0
        })
    }.call(this),
    function() {
        var e, t, n, i, r, s = {}.hasOwnProperty,
            o = [].slice;
        n = function(e) {
            return console && console.log ? console.log(e) : void 0
        }, r = function(e) {
            return console && console.warn ? console.warn(e) : void 0
        }, t = function(e, t) {
            var n, i, r;
            if (e.length !== t.length) return !1;
            for (n = i = 0, r = e.length; r >= 0 ? r > i : i > r; n = r >= 0 ? ++i : --i)
                if (e[n] !== t[n]) return !1;
            return !0
        }, e = {
            host: "collector.githubapp.com",
            type: "page_view",
            dimensions: {},
            measures: {},
            context: {},
            actor: {},
            image: new Image,
            performance: {},
            expectedPerformanceTimingKeys: ["connectEnd", "connectStart", "domComplete", "domContentLoadedEventEnd", "domContentLoadedEventStart", "domInteractive", "domLoading", "domainLookupEnd", "domainLookupStart", "fetchStart", "loadEventEnd", "loadEventStart", "navigationStart", "redirectEnd", "redirectStart", "requestStart", "responseEnd", "responseStart", "secureConnectionStart", "unloadEventEnd", "unloadEventStart"],
            recordPageView: function() {
                return this.applyMetaTags(), null == this.app ? !1 : null == this.host ? (r("Host not set, you are doing something wrong"), !1) : (this.image.src = this._src(), this._clearPerformance(), !0)
            },
            setHost: function(e) {
                return this.host = e
            },
            setApp: function(e) {
                return this.app = e
            },
            setDimensions: function(e) {
                return this.dimensions = e
            },
            addDimensions: function(e) {
                var t, n, i;
                null == this.dimensions && (this.dimensions = {}), n = [];
                for (t in e) s.call(e, t) && (i = e[t], n.push(this.dimensions[t] = i));
                return n
            },
            setMeasures: function(e) {
                return this.measures = e
            },
            addMeasures: function(e) {
                var t, n, i;
                null == this.measures && (this.measures = {}), n = [];
                for (t in e) s.call(e, t) && (i = e[t], n.push(this.measures[t] = i));
                return n
            },
            setContext: function(e) {
                return this.context = e
            },
            addContext: function(e) {
                var t, n, i;
                null == this.context && (this.context = {}), n = [];
                for (t in e) s.call(e, t) && (i = e[t], n.push(this.context[t] = i));
                return n
            },
            setActor: function(e) {
                return this.actor = e
            },
            push: function(e) {
                return this.applyCall(e)
            },
            enablePerformance: function() {
                return this.performance = this._performanceTiming()
            },
            _recordSrc: function(e, t, n, i) {
                return "//" + this.host + "/" + this.app + "/" + e + "?" + this._queryString(t, n, i)
            },
            _src: function() {
                return "//" + this.host + "/" + this.app + "/" + this.type + "?" + this._queryString()
            },
            _queryString: function(e, t, n) {
                var i, r, s;
                return r = function() {
                    var e, t;
                    e = this._params(), t = [];
                    for (i in e) s = e[i], t.push("dimensions[" + i + "]=" + s);
                    return t
                }.call(this), r.push(this._encodeObject("dimensions", this._merge(this.dimensions, e))), r.push(this._encodeObject("measures", this._merge(this.measures, t))), null != this.performance && r.push(this._encodeObject("measures", {
                    performance_timing: this.performance
                })), r.push(this._encodeObject("context", this._merge(this.context, n))), r.push(this._actor()), r.push(this._encodeObject("dimensions", {
                    cid: this._clientId()
                })), r.join("&")
            },
            _clearPerformance: function() {
                return this.performance = null
            },
            _performanceTiming: function() {
                var e, t, n, i, r, s, o, a, c, u, l, d, h;
                if (null == (null != (o = window.performance) && null != (a = o.timing) ? a.navigationStart : void 0)) return null;
                for (l = {}, c = this.expectedPerformanceTimingKeys, t = 0, i = c.length; i > t; t++) n = c[t], l[n] = null != (u = window.performance.timing[n]) ? u : 0;
                h = 1, s = [], e = l.navigationStart;
                for (n in l) d = l[n], r = 0 === d ? null : d - e, s.push(r);
                return h + "-" + s.join("-")
            },
            _params: function() {
                return {
                    page: this._encode(this._page()),
                    title: this._encode(this._title()),
                    referrer: this._encode(this._referrer()),
                    user_agent: this._encode(this._agent()),
                    screen_resolution: this._encode(this._screenResolution()),
                    pixel_ratio: this._encode(this._pixelRatio()),
                    browser_resolution: this._encode(this._browserResolution()),
                    tz_seconds: this._encode(this._tzSeconds()),
                    timestamp: (new Date).getTime()
                }
            },
            _page: function() {
                var e, t;
                try {
                    return document.location.href
                } catch (t) {
                    return e = t, ""
                }
            },
            _title: function() {
                var e, t;
                try {
                    return document.title
                } catch (t) {
                    return e = t, ""
                }
            },
            _referrer: function() {
                var e, t, n, i;
                i = "";
                try {
                    i = window.top.document.referrer
                } catch (t) {
                    if (e = t, window.parent) try {
                        i = window.parent.document.referrer
                    } catch (n) {
                        e = n
                    }
                }
                return "" === i && (i = document.referrer), i
            },
            _agent: function() {
                var e, t;
                try {
                    return navigator.userAgent
                } catch (t) {
                    return e = t, ""
                }
            },
            _screenResolution: function() {
                var e, t;
                try {
                    return screen.width + "x" + screen.height
                } catch (t) {
                    return e = t, "unknown"
                }
            },
            _pixelRatio: function() {
                return window.devicePixelRatio
            },
            _browserResolution: function() {
                var e, t, n, i, r, s;
                try {
                    return s = 0, n = 0, "number" == typeof window.innerWidth ? (s = window.innerWidth, n = window.innerHeight) : null != (null != (i = document.documentElement) ? i.clientWidth : void 0) ? (s = document.documentElement.clientWidth, n = document.documentElement.clientHeight) : null != (null != (r = document.body) ? r.clientWidth : void 0) && (s = document.body.clientWidth, n = document.body.clientHeight), s + "x" + n
                } catch (t) {
                    return e = t, "unknown"
                }
            },
            _tzSeconds: function() {
                var e, t;
                try {
                    return -60 * (new Date).getTimezoneOffset()
                } catch (t) {
                    return e = t, ""
                }
            },
            _merge: function() {
                var e, t, n, i, r, s, a;
                for (s = 1 <= arguments.length ? o.call(arguments, 0) : [], i = {}, e = 0, n = s.length; n > e; e++) {
                    r = s[e];
                    for (t in r) a = r[t], i[t] = a
                }
                return i
            },
            _encodeObject: function(e, t) {
                var n, i, r, s, o;
                if (s = [], null != Array.isArray && Array.isArray(t) || "[object Array]" === Object.prototype.toString.call(t))
                    for (i = 0, r = t.length; r > i; i++) n = t[i], s.push(this._encodeObject(e + "[]", n));
                else if (t === Object(t))
                    for (o in t) s.push(this._encodeObject(e + "[" + o + "]", t[o]));
                else s.push(e + "=" + this._encode(t));
                return s.join("&")
            },
            _actor: function() {
                var e, t, n, i, r, s, o, a;
                t = [], o = this.actor;
                for (r in o)
                    if (a = o[r], e = "dimensions[actor_" + r + "]", a.join)
                        for (i = 0, s = a.length; s > i; i++) n = a[i], t.push(e + "[]=" + this._encode(n));
                    else t.push(e + "=" + this._encode(a));
                return t.join("&")
            },
            _getCookie: function(e) {
                var t, n, i, r, s, o, a, c;
                for (o = [], s = document.cookie.split(";"), n = 0, r = s.length; r > n; n++) t = s[n], a = t.trim().split("="), a.length < 2 || (i = a[0], c = a[1], i === e && o.push({
                    key: i,
                    value: c
                }));
                return o
            },
            _clientId: function() {
                var e;
                return e = this._getClientId(), "" === e && (e = this._setClientId()), e
            },
            _getClientId: function() {
                var e, t, n, i, r, s, o, a, c;
                for (i = this._getCookie("_octo"), t = [], s = 0, o = i.length; o > s; s++) n = i[s], a = n.value.split("."), r = a.shift(), "GH1" === r && a.length > 1 && (c = a.shift().split("-"), 1 === c.length && (c[1] = "1"), c[0] *= 1, c[1] *= 1, e = a.join("."), t.push([c, e]));
                return e = "", t.length > 0 && (e = t.sort().reverse()[0][1]), e
            },
            _setClientId: function() {
                var e, t, n, i, r;
                return r = (new Date).getTime(), e = Math.round(Math.random() * (Math.pow(2, 31) - 1)) + "." + Math.round(r / 1e3), t = "GH1.1." + e, i = new Date(r + 63072e6).toGMTString(), n = "." + document.domain.split(".").reverse().slice(0, 2).reverse().join("."), document.cookie = "_octo=" + t + "; expires=" + i + "; path=/; domain=" + n, e
            },
            _encode: function(e) {
                return null != e ? window.encodeURIComponent(e) : ""
            },
            applyQueuedCalls: function(e) {
                var t, n, i, r;
                for (r = [], n = 0, i = e.length; i > n; n++) t = e[n], r.push(this.applyCall(t));
                return r
            },
            applyCall: function(e) {
                var t, n;
                return n = e[0], t = e.slice(1), this[n] ? this[n].apply(this, t) : r(n + " is not a valid method")
            },
            applyMetaTags: function() {
                var e;
                return e = this.loadMetaTags(), e.host && this.setHost(e.host), e.app && this.setApp(e.app), this._objectIsEmpty(e.actor) || this.setActor(e.actor), this.addDimensions(e.dimensions), this.addMeasures(e.measures), this.addContext(e.context)
            },
            loadMetaTags: function() {
                var e, t, n, i, r, s;
                for (s = {
                        dimensions: {},
                        measures: {},
                        context: {},
                        actor: {}
                    }, r = document.getElementsByTagName("meta"), e = 0, t = r.length; t > e; e++)
                    if (n = r[e], n.name && n.content && (i = n.name.match(this.octolyticsMetaTagName))) switch (i[1]) {
                        case "host":
                            s.host = n.content;
                            break;
                        case "app-id":
                            s.app = n.content;
                            break;
                        case "app":
                            s.app = n.content;
                            break;
                        case "dimension":
                            this._addField(s.dimensions, i[2], n);
                            break;
                        case "measure":
                            this._addField(s.measures, i[2], n);
                            break;
                        case "context":
                            this._addField(s.context, i[2], n);
                            break;
                        case "actor":
                            this._addField(s.actor, i[2], n)
                    }
                    return s
            },
            _addField: function(e, t, n) {
                return n.attributes["data-array"] ? (null == e[t] && (e[t] = []), e[t].push(n.content)) : e[t] = n.content
            },
            _objectIsEmpty: function(e) {
                var t, n;
                for (t in e)
                    if (s.call(e, t)) return n = e[t], !1;
                return !0
            },
            octolyticsMetaTagName: /^octolytics-(host|app-id|app|dimension|measure|context|actor)-?(.*)/
        }, window._octo ? window._octo.slice && (i = window._octo.slice(0), window._octo = e, window._octo.applyQueuedCalls(i)) : window._octo = e
    }.call(this),
    function() {
        $(function() {
            _octo.push(["enablePerformance"]), _octo.push(["recordPageView"])
        }), document.addEventListener("pjax:complete", function() {
            _octo.push(["recordPageView"])
        })
    }.call(this),
    function() {
        var e, t, n, i, r, s, o, a, c;
        e = require("github/sliding-promise-queue")["default"], r = require("delegated-events").fire, i = require("github/fetch").fetchText, a = new WeakMap, o = new WeakMap, s = function(t, n) {
            var r, s;
            return (r = a.get(t)) || (r = new e, a.set(t, r)), n.value.trim() ? (n.authenticity_token = null != (s = t.form.elements.authenticity_token) ? s.value : void 0, r.push(i(t.getAttribute("data-autocheck-url"), {
                method: "post",
                body: $.param(n),
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                }
            }))) : Promise.reject(new Error("empty"))
        }, n = function(e, t) {
            return c(e), e.classList.add("errored"), $(e).find("p.note").hide()
        }, c = function(e) {
            return e.classList.remove("errored"), e.classList.remove("warn"), $(e).find("p.note").show(), $(e).find("dd.error").remove(), $(e).find("dd.warning").remove()
        }, t = function(e) {
            var t, i, a, u, l, d, h;
            return t = $(e), a = {
                value: e.value
            }, r(e, "autocheck:send", a), u = $.param(a).split("&").sort().join("&"), u !== o.get(e) ? (o.set(e, u), t.closest("dl.form").removeClass("errored successed"), e.classList.remove("is-autocheck-successful", "is-autocheck-errored"), h = function(n) {
                return e.classList.toggle("is-autocheck-loading", n), t.closest("dl.form").toggleClass("is-loading", n)
            }, i = function() {
                return h(!1), r(e, "autocheck:complete")
            }, l = function(t) {
                var n;
                return e.classList.add("is-autocheck-successful"), n = e.closest("dl.form"), c(n), n.classList.add("successed"), r(e, "autocheck:success", t), i()
            }, d = function(s) {
                var o, a, u;
                return o = e.closest("dl.form"), "empty" === s.message ? c(o) : t.is($.visible) && (e.classList.add("is-autocheck-errored"), a = (null != (u = s.response) ? u.text() : void 0) || Promise.resolve("Something went wrong"), a.then(function(t) {
                    var i, a;
                    return /<html/.test(t) && (t = "Something went wrong."), n(o), i = document.createElement("dd"), i.classList.add("error"), (null != (a = s.response) ? a.headers.get("Content-Type").match("text/html") : void 0) ? i.innerHTML = t : i.textContent = t, o.append(i), r(e, "autocheck:error")
                })), i()
            }, h(!0), s(e, a).then(l, d)) : void 0
        }, $(document).on("change", "input[data-autocheck-url]", function() {
            t(this)
        }), $(document).onFocusedInput("input[data-autocheck-url]", function(e) {
            return this.getAttribute("data-throttle-wait") || this.setAttribute("data-throttle-wait", 300), $(this).on("throttled:input." + e, function() {
                t(this)
            }), !1
        })
    }.call(this),
    function() {
        var e = require("setimmediate")["default"];
        $.fn.fire = function(t) {
            var n, i, r, s, o;
            return (n = arguments[1]) && ($.isPlainObject(n) ? s = n : $.isFunction(n) && (i = n)), (n = arguments[2]) && $.isFunction(n) && (i = n), r = this[0], null == s && (s = {}), null == s.cancelable && (s.cancelable = !!i), null == s.bubbles && (s.bubbles = !0), o = function() {
                var e;
                return e = $.Event(t, s), $.event.trigger(e, [], r, !e.bubbles), i && !e.isDefaultPrevented() && i.call(r, e), e
            }, s.async ? (delete s.async, void e(o)) : o()
        }
    }.call(this),
    function() {
        function e(e) {
            var t, n;
            return e.nodeType !== Node.ELEMENT_NODE ? !1 : (t = e.nodeName.toLowerCase(), n = (e.getAttribute("type") || "").toLowerCase(), "select" === t || "textarea" === t || "input" === t && "submit" !== n && "reset" !== n)
        }

        function t(t) {
            var i;
            return null == t.hotkey && (t.hotkey = n(t)), i = null, null == t.isFormInteraction && (t.isFormInteraction = function() {
                return null != i ? i : i = e(this.target)
            }), t.handleObj.handler.apply(this, arguments)
        }
        var n = require("github/hotkey")["default"];
        $.event.special.keydown = {
            handle: t
        }, $.event.special.keyup = {
            handle: t
        }
    }(),
    function() {
        var e, t, n, i, r, s, o;
        i = e = {}, s = null, o = function() {
            return s = null, e = i
        }, $(document).on("keydown", function(t) {
            var n;
            if (!t.isFormInteraction())
                if (s && clearTimeout(s), n = e[t.hotkey]) {
                    if (!("nodeType" in n)) return e = n, void(s = setTimeout(o, 1500));
                    o(), $(n).fire("hotkey:activate", {
                        originalEvent: t
                    }, function() {
                        return $(n).is("input, textarea") ? void $(n).focus() : void $(n).click()
                    }), t.preventDefault()
                } else o()
        }), t = function(e) {
            var t, n, i, r, s;
            for (r = e.getAttribute("data-hotkey").split(/\s*,\s*/), s = [], n = 0, i = r.length; i > n; n++) t = r[n], s.push(t.split(/\s+/));
            return s
        }, n = function(e) {
            var n, r, s, o, a, c, u, l, d;
            for (l = t(e), d = [], s = 0, c = l.length; c > s; s++) a = l[s], u = i, d.push(function() {
                var t, i, s;
                for (s = [], r = t = 0, i = a.length; i > t; r = ++t) o = a[r], r < a.length - 1 ? (n = u[o], (!n || "nodeType" in n) && (u[o] = {}), s.push(u = u[o])) : s.push(u[o] = e);
                return s
            }());
            return d
        }, r = function(t) {
            var r, s, o, a;
            for (i = e = {}, o = $("[data-hotkey]"), a = [], r = 0, s = o.length; s > r; r++) t = o[r], a.push(n(t));
            return a
        }, $.observe("[data-hotkey]", {
            add: n,
            remove: r
        })
    }.call(this),
    function() {
        var e, t, n, i, r, s, o, a, c, u, l, d, h, f, m, p, g, v, b, y, j, w, x, k, S, C, L, q, A, T, _, E;
        q = require("github/dimensions"), j = q.overflowOffset, w = q.overflowParent, C = q.positionedOffset, r = navigator.userAgent.match(/Macintosh/), g = navigator.userAgent.match(/Macintosh/) ? "meta" : "ctrl", c = !1, v = {
            x: 0,
            y: 0
        }, t = function(e) {
            e.addEventListener("mousemove", b, !1), e.addEventListener("mouseover", y, !1)
        }, E = function(e) {
            e.removeEventListener("mousemove", b, !1), e.removeEventListener("mouseover", y, !1)
        }, $.observe(".js-navigation-container", {
            add: t,
            remove: E
        }), b = function(e) {
            (v.x !== e.clientX || v.y !== e.clientY) && (c = !1), v = {
                x: e.clientX,
                y: e.clientY
            }
        }, y = function(e) {
            c || $(e.target).trigger("navigation:mouseover")
        }, $(document).on("keydown", function(e) {
            var t, n, i;
            (e.target === document.body || e.target.classList.contains("js-navigation-enable")) && (t = h()) && (c = !0, i = $(t).find(".js-navigation-item.navigation-focus")[0] || t, n = $(i).fire("navigation:keydown", {
                originalEvent: e,
                hotkey: e.hotkey,
                relatedTarget: t
            }), n.isDefaultPrevented() && e.preventDefault())
        }), $(document).on("navigation:keydown", ".js-active-navigation-container", function(e) {
            var t, n, i;
            if (t = this, n = $(e.originalEvent.target).is("input, textarea"), $(e.target).is(".js-navigation-item"))
                if (i = e.target, n) {
                    if (r) switch (e.hotkey) {
                        case "ctrl+n":
                            s(i, t);
                            break;
                        case "ctrl+p":
                            o(i, t)
                    }
                    switch (e.hotkey) {
                        case "up":
                            o(i, t);
                            break;
                        case "down":
                            s(i, t);
                            break;
                        case "enter":
                            p(i);
                            break;
                        case g + "+enter":
                            p(i, !0)
                    }
                } else {
                    if (r) switch (e.hotkey) {
                        case "ctrl+n":
                            s(i, t);
                            break;
                        case "ctrl+p":
                            o(i, t);
                            break;
                        case "alt+v":
                            k(i, t);
                            break;
                        case "ctrl+v":
                            x(i, t)
                    }
                    switch (e.hotkey) {
                        case "j":
                        case "J":
                            s(i, t);
                            break;
                        case "k":
                        case "K":
                            o(i, t);
                            break;
                        case "o":
                        case "enter":
                            p(i);
                            break;
                        case g + "+enter":
                            p(i, !0)
                    }
                }
            else if (i = f(t)[0])
                if (n) {
                    if (r) switch (e.hotkey) {
                        case "ctrl+n":
                            d(i, t)
                    }
                    switch (e.hotkey) {
                        case "down":
                            d(i, t)
                    }
                } else {
                    if (r) switch (e.hotkey) {
                        case "ctrl+n":
                        case "ctrl+v":
                            d(i, t)
                    }
                    switch (e.hotkey) {
                        case "j":
                            d(i, t)
                    }
                }
            if (n) {
                if (r) switch (e.hotkey) {
                    case "ctrl+n":
                    case "ctrl+p":
                        e.preventDefault()
                }
                switch (e.hotkey) {
                    case "up":
                    case "down":
                        e.preventDefault();
                        break;
                    case "enter":
                    case g + "+enter":
                        e.preventDefault()
                }
            } else {
                if (r) switch (e.hotkey) {
                    case "ctrl+n":
                    case "ctrl+p":
                    case "alt+v":
                    case "ctrl+v":
                        e.preventDefault()
                }
                switch (e.hotkey) {
                    case "j":
                    case "k":
                        e.preventDefault();
                        break;
                    case "o":
                    case "enter":
                    case g + "+enter":
                        e.preventDefault()
                }
            }
        }), $(document).on("navigation:mouseover", ".js-active-navigation-container .js-navigation-item", function(e) {
            var t;
            t = $(e.currentTarget).closest(".js-navigation-container")[0], d(e.currentTarget, t)
        }), u = function(e) {
            var t, n, i;
            i = e.currentTarget, n = e.modifierKey || e.altKey || e.ctrlKey || e.metaKey, t = $(i).fire("navigation:open", {
                modifierKey: n
            }), t.isDefaultPrevented() && e.preventDefault()
        }, $(document).on("click", ".js-active-navigation-container .js-navigation-item", function(e) {
            u(e)
        }), $(document).on("navigation:keyopen", ".js-active-navigation-container .js-navigation-item", function(e) {
            var t;
            (t = $(this).filter(".js-navigation-open")[0] || $(this).find(".js-navigation-open")[0]) ? (e.modifierKey ? (window.open(t.href, "_blank"), window.focus()) : $(t).click(), e.preventDefault()) : u(e)
        }), e = function(e) {
            var t;
            return t = h(), e !== t ? $(e).fire("navigation:activate", function() {
                return t && t.classList.remove("js-active-navigation-container"), e.classList.add("js-active-navigation-container"), $(e).fire("navigation:activated", {
                    async: !0
                })
            }) : void 0
        }, a = function(e) {
            return $(e).fire("navigation:deactivate", function() {
                return e.classList.remove("js-active-navigation-container"), $(e).fire("navigation:deactivated", {
                    async: !0
                })
            })
        }, i = [], L = function(t) {
            var n;
            (n = h()) && i.push(n), e(t)
        }, S = function(t) {
            var r;
            a(t), n(t), (r = i.pop()) && e(r)
        }, l = function(t, n, i) {
            var r, s, o;
            if (null == i && (i = "smooth"), r = f(n)[0], o = $(t).closest(".js-navigation-item")[0] || r, e(n), o) {
                if (s = d(o, n)) return;
                _(w(o), o, i)
            }
        }, n = function(e) {
            $(e).find(".navigation-focus.js-navigation-item").removeClass("navigation-focus")
        }, A = function(e, t, i) {
            null == i && (i = "smooth"), n(t), l(e, t, i)
        }, o = function(e, t) {
            var n, i, r, s, o;
            if (r = f(t), i = $.inArray(e, r), o = r[i - 1]) {
                if (n = d(o, t)) return;
                s = w(o), "page" === m(t) ? _(s, o) : T(s, o)
            }
        }, s = function(e, t) {
            var n, i, r, s, o;
            if (r = f(t), i = $.inArray(e, r), s = r[i + 1]) {
                if (n = d(s, t)) return;
                o = w(s), "page" === m(t) ? _(o, s) : T(o, s)
            }
        }, k = function(e, t) {
            var n, i, r, s, o;
            for (r = f(t), i = $.inArray(e, r), s = w(e);
                (o = r[i - 1]) && j(o, s).top >= 0;) i--;
            if (o) {
                if (n = d(o, t)) return;
                _(s, o)
            }
        }, x = function(e, t) {
            var n, i, r, s, o;
            for (r = f(t), i = $.inArray(e, r), o = w(e);
                (s = r[i + 1]) && j(s, o).bottom >= 0;) i++;
            if (s) {
                if (n = d(s, t)) return;
                _(o, s)
            }
        }, p = function(e, t) {
            null == t && (t = !1), $(e).fire("navigation:keyopen", {
                modifierKey: t
            })
        }, d = function(e, t) {
            var i;
            return i = $(e).fire("navigation:focus", function() {
                return n(t), e.classList.add("navigation-focus"), $(e).fire("navigation:focused", {
                    async: !0
                })
            }), i.isDefaultPrevented()
        }, h = function() {
            return $(".js-active-navigation-container")[0]
        }, f = function(e) {
            return $(e).find(".js-navigation-item").visible()
        }, m = function(e) {
            var t;
            return null != (t = $(e).attr("data-navigation-scroll")) ? t : "item"
        }, _ = function(e, t, n) {
            var i, r, s, o;
            return null == n && (n = "smooth"), s = C(t, e), r = j(t, e), i = {}, "smooth" === n && (i.duration = 200), r.bottom <= 0 ? i.top = s.top - 30 : r.top <= 0 && (o = null != e.offsetParent ? e.scrollHeight : $(document).height(), i.top = o - (s.bottom + r.height) + 30), r.bottom <= 0 || r.top <= 0 ? $(e).scrollTo(i) : void 0
        }, T = function(e, t) {
            var n, i, r, s;
            return i = C(t, e), n = j(t, e), n.bottom <= 0 ? (r = null != e.offsetParent ? e.scrollHeight : $(document).height(), s = r - (i.bottom + n.height), $(e).scrollTo({
                top: s
            })) : n.top <= 0 ? $(e).scrollTo({
                top: i.top
            }) : void 0
        }, $.fn.navigation = function(t, i) {
            var r, s;
            return null == i && (i = {}), "active" === t ? h() : (r = $(this).closest(".js-navigation-container")[0]) ? (s = {
                activate: function() {
                    return e(r)
                },
                deactivate: function() {
                    return a(r)
                },
                push: function() {
                    return L(r)
                },
                pop: function() {
                    return S(r)
                },
                focus: function(e) {
                    return function() {
                        return l(e[0], r, i.behavior)
                    }
                }(this),
                clear: function() {
                    return n(r)
                },
                refocus: function(e) {
                    return function() {
                        return A(e[0], r, i.behavior)
                    }
                }(this)
            }, "function" == typeof s[t] ? s[t]() : void 0) : void 0
        }
    }.call(this),
    function() {
        var e, t;
        e = function() {
            var e, t, n, i, r;
            return t = !1, e = !1, i = null, r = parseInt(this.getAttribute("data-throttle-wait")) || 100, n = function(t) {
                return function(n) {
                    i && clearTimeout(i), i = setTimeout(function() {
                        var r;
                        i = null, e = !1, r = new $.Event("throttled:input", {
                            target: n
                        }), $.event.trigger(r, null, t, !0)
                    }, r)
                }
            }(this), $(this).on("keydown.throttledInput", function() {
                t = !0, i && clearTimeout(i)
            }), $(this).on("keyup.throttledInput", function(i) {
                t = !1, e && n(i.target)
            }), $(this).on("input.throttledInput", function(i) {
                e = !0, t || n(i.target)
            })
        }, t = function() {
            return $(this).off("keydown.throttledInput"), $(this).off("keyup.throttledInput"), $(this).off("input.throttledInput")
        }, $.event.special["throttled:input"] = {
            setup: e,
            teardown: t
        }
    }.call(this),
    function() {
        var e, t, n, i, r = function(e, t) {
            return function() {
                return e.apply(t, arguments)
            }
        };
        t = require("github/sliding-promise-queue")["default"], i = require("github/fetch").fetchText, e = function() {
            function e() {
                this.onNavigationOpen = r(this.onNavigationOpen, this), this.onNavigationKeyDown = r(this.onNavigationKeyDown, this), this.onInputChange = r(this.onInputChange, this), this.onResultsMouseDown = r(this.onResultsMouseDown, this), this.onInputBlur = r(this.onInputBlur, this), this.onInputFocus = r(this.onInputFocus, this), this.focusedInput = this.focusedResults = null, this.mouseDown = !1, this.fetchQueue = new t
            }
            return e.prototype.bindEvents = function(e, t) {
                return $(e).on("blur", this.onInputBlur), $(e).on("throttled:input", this.onInputChange), $(t).on("mousedown", this.onResultsMouseDown), $(t).on("navigation:open", "[data-autocomplete-value]", this.onNavigationOpen), $(t).on("navigation:keydown", "[data-autocomplete-value]", this.onNavigationKeyDown)
            }, e.prototype.unbindEvents = function(e, t) {
                return $(e).off("blur", this.onInputBlur), $(e).off("throttled:input", this.onInputChange), $(t).off("mousedown", this.onResultsMouseDown), $(t).off("navigation:open", "[data-autocomplete-value]", this.onNavigationOpen), $(t).off("navigation:keydown", "[data-autocomplete-value]", this.onNavigationKeyDown)
            }, e.prototype.onInputFocus = function(e) {
                var t, n;
                t = $(e).closest(".js-autocomplete-container"), n = t.find(".js-autocomplete")[0], this.focusedInput = e, this.focusedResults = n, this.bindEvents(e, n), $(e).attr("autocomplete", "off"), $(e).trigger("autocomplete:focus"), this.fetchResults(e.value)
            }, e.prototype.onInputBlur = function() {
                var e, t;
                e = this.focusedInput, t = this.focusedResults, this.mouseDown || (this.hideResults(), this.inputValue = null, this.focusedInput = this.focusedResults = null, this.unbindEvents(e, t), $(e).trigger("autocomplete:blur"))
            }, e.prototype.onResultsMouseDown = function(e) {
                var t;
                this.mouseDown = !0, t = function(e) {
                    return function() {
                        return e.mouseDown = !1, $(document).off("mouseup", t)
                    }
                }(this), $(document).on("mouseup", t)
            }, e.prototype.onInputChange = function(e) {
                var t;
                t = e.currentTarget, this.inputValue !== t.value && ($(t).removeData("autocompleted"), $(t).trigger("autocomplete:autocompleted:changed")), this.fetchResults(t.value)
            }, e.prototype.fetchResults = function(e) {
                var t, n, r, s;
                return (s = this.focusedResults.getAttribute("data-search-url")) ? (t = $(this.focusedInput).closest(".js-autocomplete-container"), r = e.trim() ? (s += ~s.indexOf("?") ? "&" : "?", s += "q=" + encodeURIComponent(e), t.addClass("is-sending"), i(s)) : $(this.focusedResults).find("[data-autocomplete-value]").length > 0 ? this.showResults() : Promise.resolve(""), n = function() {
                    return t.removeClass("is-sending")
                }, this.fetchQueue.push(r).then(function(t) {
                    return function(n) {
                        return $(t.focusedResults).find(".js-autocomplete-results").html(n), t.onResultsChange(e)
                    }
                }(this)).then(n, n)) : void 0
            }, e.prototype.onResultsChange = function(e) {
                var t;
                t = $(this.focusedResults).find("[data-autocomplete-value]"), 0 === t.length ? this.hideResults() : this.inputValue !== e && (this.inputValue = e, this.showResults(), $(this.focusedInput).is("[data-autocomplete-autofocus]") && $(this.focusedResults).find(".js-navigation-container").navigation("focus"))
            }, e.prototype.onNavigationKeyDown = function(e) {
                switch (e.hotkey) {
                    case "tab":
                        return this.onNavigationOpen(e), !1;
                    case "esc":
                        return this.hideResults(), !1
                }
            }, e.prototype.onNavigationOpen = function(e) {
                var t, n;
                t = e.currentTarget, t.classList.contains("disabled") || (n = $(t).attr("data-autocomplete-value"), this.inputValue = n, $(this.focusedInput).val(n), $(this.focusedInput).data("autocompleted", n), $(this.focusedInput).trigger("autocomplete:autocompleted:changed", [n]), $(this.focusedInput).trigger("autocomplete:result", [n]), $(t).removeClass("active"), this.focusedInput === document.activeElement ? this.hideResults() : this.onInputBlur())
            }, e.prototype.showResults = function(e, t) {
                var n, i, r, s, o;
                return null == e && (e = this.focusedInput), null == t && (t = this.focusedResults), $(t).is($.visible) ? void 0 : (r = $(e).offset(), s = r.top, i = r.left, n = s + $(e).innerHeight(), o = $(e).innerWidth(), $(t).css({
                    display: "block",
                    position: "absolute",
                    width: o + 2
                }), $(t).offset({
                    top: n + 5
                }), $(e).addClass("js-navigation-enable"), $(t).find(".js-navigation-container").navigation("push"), $(t).show())
            }, e.prototype.hideResults = function(e, t) {
                return null == e && (e = this.focusedInput), null == t && (t = this.focusedResults), $(t).is($.visible) ? ($(e).removeClass("js-navigation-enable"), $(t).find(".js-navigation-container").navigation("pop"), $(t).hide()) : void 0
            }, e
        }(), n = new e, $(document.activeElement).is(".js-autocomplete-field") && n.onInputFocus(document.activeElement), $.observe(".js-autocomplete-field", function() {
            $(this).on("focus", function() {
                return n.onInputFocus(this)
            })
        })
    }.call(this),
    function() {
        var e, t, n, i;
        n = require("github/fetch").fetchText, i = require("github/history").replaceState, e = require("github/sliding-promise-queue")["default"], t = new e, $(document).onFocusedInput(".js-autosearch-field", function(e) {
            $(this).on("throttled:input." + e, function() {
                var e, r, s, o;
                return r = this.form, r.classList.add("is-sending"), e = function() {
                    return r.classList.remove("is-sending")
                }, s = $(r).serialize(), o = (r.action + "&" + s).replace(/[?&]/, "?"), t.push(n(o)).then(function(e) {
                    var t;
                    return t = document.getElementById(r.getAttribute("data-results-container")), t.innerHTML = e, i(null, "", "?" + s)
                }).then(e, e)
            })
        })
    }.call(this),
    function() {
        $(document).on("change", "form[data-autosubmit]", function() {
            return $(this).submit()
        })
    }.call(this),
    function() {
        var e, t, n, i;
        e = require("github/pjax"), t = require("github/history").replaceState, i = null, n = function() {
            var n, r, s, o, a, c, u;
            return i && i.abort(), c = $(this).attr("data-item-name") || "items", u = parseInt($(this).attr("data-item-minimum")) || 0, o = parseInt($(this).attr("data-item-count")) || 0, a = Math.max(u, parseInt(this.value) || 0), n = a > 300, $(".js-purchase-button").prop("disabled", 0 === a || n), $(".js-downgrade-button").prop("disabled", a === o), r = {}, r[c] = a, i = $.ajax({
                url: $(this).attr("data-url"),
                data: r
            }), s = function(i) {
                var r, s, o;
                $(".js-contact-us").toggleClass("hidden", !n), $(".js-payment-summary").toggleClass("hidden", n), $(".js-billing-section").toggleClass("has-removed-contents", i.free), $(".js-upgrade-info").toggleClass("hidden", 0 >= a), $(".js-downgrade-info").toggleClass("hidden", a >= 0), $(".js-extra-seats-line-item").toggleClass("hidden", i.no_additional_seats), r = i.selectors;
                for (s in r) o = r[s], $(s).text(o);
                return t(e.getState(), null, i.url)
            }, i.then(s)
        }, $.observe(".js-addon-purchase-field", function() {
            $(this).on("throttled:input", n), $(this).is($.visible) && n.call($(".js-addon-purchase-field")[0])
        }), $.observe(".js-addon-downgrade-field", function() {
            $(this).on("change", n), $(this).is($.visible) && n.call($(".js-addon-downgrade-field")[0])
        })
    }.call(this),
    function() {
        var e, t, n, i, r, s, o, a, c, u, l, d, h, f, m, p, g, v, b, y, j, $, w, x, k, S = [].slice,
            C = [].indexOf || function(e) {
                for (var t = 0, n = this.length; n > t; t++)
                    if (t in this && this[t] === e) return t;
                return -1
            };
        e = window.jQuery || window.Zepto || window.$, e.payment = {}, e.payment.fn = {}, e.fn.payment = function() {
            var t, n;
            return n = arguments[0], t = 2 <= arguments.length ? S.call(arguments, 1) : [], e.payment.fn[n].apply(this, t)
        }, r = /(\d{1,4})/g, e.payment.cards = i = [{
            type: "visaelectron",
            pattern: /^4(026|17500|405|508|844|91[37])/,
            format: r,
            length: [16],
            cvcLength: [3],
            luhn: !0
        }, {
            type: "maestro",
            pattern: /^(5(018|0[23]|[68])|6(39|7))/,
            format: r,
            length: [12, 13, 14, 15, 16, 17, 18, 19],
            cvcLength: [3],
            luhn: !0
        }, {
            type: "forbrugsforeningen",
            pattern: /^600/,
            format: r,
            length: [16],
            cvcLength: [3],
            luhn: !0
        }, {
            type: "dankort",
            pattern: /^5019/,
            format: r,
            length: [16],
            cvcLength: [3],
            luhn: !0
        }, {
            type: "visa",
            pattern: /^4/,
            format: r,
            length: [13, 16],
            cvcLength: [3],
            luhn: !0
        }, {
            type: "mastercard",
            pattern: /^(5[0-5]|2[2-7])/,
            format: r,
            length: [16],
            cvcLength: [3],
            luhn: !0
        }, {
            type: "amex",
            pattern: /^3[47]/,
            format: /(\d{1,4})(\d{1,6})?(\d{1,5})?/,
            length: [15],
            cvcLength: [3, 4],
            luhn: !0
        }, {
            type: "dinersclub",
            pattern: /^3[0689]/,
            format: /(\d{1,4})(\d{1,6})?(\d{1,4})?/,
            length: [14],
            cvcLength: [3],
            luhn: !0
        }, {
            type: "discover",
            pattern: /^6([045]|22)/,
            format: r,
            length: [16],
            cvcLength: [3],
            luhn: !0
        }, {
            type: "unionpay",
            pattern: /^(62|88)/,
            format: r,
            length: [16, 17, 18, 19],
            cvcLength: [3],
            luhn: !1
        }, {
            type: "jcb",
            pattern: /^35/,
            format: r,
            length: [16],
            cvcLength: [3],
            luhn: !0
        }], t = function(e) {
            var t, n, r;
            for (e = (e + "").replace(/\D/g, ""), n = 0, r = i.length; r > n; n++)
                if (t = i[n], t.pattern.test(e)) return t
        }, n = function(e) {
            var t, n, r;
            for (n = 0, r = i.length; r > n; n++)
                if (t = i[n], t.type === e) return t
        }, m = function(e) {
            var t, n, i, r, s, o;
            for (i = !0, r = 0, n = (e + "").split("").reverse(), s = 0, o = n.length; o > s; s++) t = n[s], t = parseInt(t, 10), (i = !i) && (t *= 2), t > 9 && (t -= 9), r += t;
            return r % 10 === 0
        }, f = function(e) {
            var t;
            return null != e.prop("selectionStart") && e.prop("selectionStart") !== e.prop("selectionEnd") ? !0 : null != ("undefined" != typeof document && null !== document && null != (t = document.selection) ? t.createRange : void 0) && document.selection.createRange().text ? !0 : !1
        }, x = function(e, t) {
            var n, i, r;
            try {
                n = t.prop("selectionStart")
            } catch (s) {
                i = s, n = null
            }
            return r = t.val(), t.val(e), null !== n && t.is(":focus") ? (n === r.length && (n = e.length), t.prop("selectionStart", n), t.prop("selectionEnd", n)) : void 0
        }, b = function(t) {
            return setTimeout(function() {
                var n, i;
                return n = e(t.currentTarget), i = n.val(), i = i.replace(/\D/g, ""), x(i, n)
            })
        }, g = function(t) {
            return setTimeout(function() {
                var n, i;
                return n = e(t.currentTarget), i = n.val(), i = e.payment.formatCardNumber(i), x(i, n)
            })
        }, a = function(n) {
            var i, r, s, o, a, c, u;
            return s = String.fromCharCode(n.which), !/^\d+$/.test(s) || (i = e(n.currentTarget), u = i.val(), r = t(u + s), o = (u.replace(/\D/g, "") + s).length, c = 16, r && (c = r.length[r.length.length - 1]), o >= c || null != i.prop("selectionStart") && i.prop("selectionStart") !== u.length) ? void 0 : (a = r && "amex" === r.type ? /^(\d{4}|\d{4}\s\d{6})$/ : /(?:^|\s)(\d{4})$/, a.test(u) ? (n.preventDefault(), setTimeout(function() {
                return i.val(u + " " + s)
            })) : a.test(u + s) ? (n.preventDefault(), setTimeout(function() {
                return i.val(u + s + " ")
            })) : void 0)
        }, s = function(t) {
            var n, i;
            return n = e(t.currentTarget), i = n.val(), 8 !== t.which || null != n.prop("selectionStart") && n.prop("selectionStart") !== i.length ? void 0 : /\d\s$/.test(i) ? (t.preventDefault(), setTimeout(function() {
                return n.val(i.replace(/\d\s$/, ""))
            })) : /\s\d?$/.test(i) ? (t.preventDefault(), setTimeout(function() {
                return n.val(i.replace(/\d$/, ""))
            })) : void 0
        }, v = function(t) {
            return setTimeout(function() {
                var n, i;
                return n = e(t.currentTarget), i = n.val(), i = e.payment.formatExpiry(i), x(i, n)
            })
        }, c = function(t) {
            var n, i, r;
            return i = String.fromCharCode(t.which), /^\d+$/.test(i) ? (n = e(t.currentTarget), r = n.val() + i, /^\d$/.test(r) && "0" !== r && "1" !== r ? (t.preventDefault(), setTimeout(function() {
                return n.val("0" + r + " / ")
            })) : /^\d\d$/.test(r) ? (t.preventDefault(), setTimeout(function() {
                return n.val("" + r + " / ")
            })) : void 0) : void 0
        }, u = function(t) {
            var n, i, r;
            return i = String.fromCharCode(t.which), /^\d+$/.test(i) ? (n = e(t.currentTarget), r = n.val(), /^\d\d$/.test(r) ? n.val("" + r + " / ") : void 0) : void 0
        }, l = function(t) {
            var n, i, r;
            return r = String.fromCharCode(t.which), "/" === r || " " === r ? (n = e(t.currentTarget), i = n.val(), /^\d$/.test(i) && "0" !== i ? n.val("0" + i + " / ") : void 0) : void 0;
        }, o = function(t) {
            var n, i;
            return n = e(t.currentTarget), i = n.val(), 8 !== t.which || null != n.prop("selectionStart") && n.prop("selectionStart") !== i.length ? void 0 : /\d\s\/\s$/.test(i) ? (t.preventDefault(), setTimeout(function() {
                return n.val(i.replace(/\d\s\/\s$/, ""))
            })) : void 0
        }, p = function(t) {
            return setTimeout(function() {
                var n, i;
                return n = e(t.currentTarget), i = n.val(), i = i.replace(/\D/g, "").slice(0, 4), x(i, n)
            })
        }, d = function(t) {
            return 229 === t.which ? e(t.currentTarget).data("ime", !0) : void 0
        }, h = function(t) {
            var n, i;
            return n = e(t.currentTarget), i = String.fromCharCode(t.which), n.data("ime") === !0 ? (n.data("ime", !1), n.val(n.val() + i), n.trigger("input")) : void 0
        }, w = function(e) {
            var t;
            return e.metaKey || e.ctrlKey ? !0 : 32 === e.which ? !1 : 0 === e.which ? !0 : e.which < 33 ? !0 : (t = String.fromCharCode(e.which), !!/[\d\s]/.test(t))
        }, j = function(n) {
            var i, r, s, o;
            return i = e(n.currentTarget), s = String.fromCharCode(n.which), /^\d+$/.test(s) && !f(i) ? (o = (i.val() + s).replace(/\D/g, ""), r = t(o), r ? o.length <= r.length[r.length.length - 1] : o.length <= 16) : void 0
        }, $ = function(t) {
            var n, i, r;
            return n = e(t.currentTarget), i = String.fromCharCode(t.which), /^\d+$/.test(i) && !f(n) ? (r = n.val() + i, r = r.replace(/\D/g, ""), r.length > 6 ? !1 : void 0) : void 0
        }, y = function(t) {
            var n, i, r;
            return n = e(t.currentTarget), i = String.fromCharCode(t.which), /^\d+$/.test(i) && !f(n) ? (r = n.val() + i, r.length <= 4) : void 0
        }, k = function(t) {
            var n, r, s, o, a;
            return n = e(t.currentTarget), a = n.val(), o = e.payment.cardType(a) || "unknown", n.hasClass(o) ? void 0 : (r = function() {
                var e, t, n;
                for (n = [], e = 0, t = i.length; t > e; e++) s = i[e], n.push(s.type);
                return n
            }(), n.removeClass("unknown"), n.removeClass(r.join(" ")), n.addClass(o), n.toggleClass("identified", "unknown" !== o), n.trigger("payment.cardType", o))
        }, e.payment.fn.formatCardCVC = function() {
            return this.on("keydown", d), this.on("keyup", h), this.on("keypress", w), this.on("keypress", y), this.on("paste", p), this.on("change", p), this.on("input", p), this
        }, e.payment.fn.formatCardExpiry = function() {
            return this.on("keydown", d), this.on("keyup", h), this.on("keypress", w), this.on("keypress", $), this.on("keypress", c), this.on("keypress", l), this.on("keypress", u), this.on("keydown", o), this.on("change", v), this.on("input", v), this
        }, e.payment.fn.formatCardNumber = function() {
            return this.on("keydown", d), this.on("keyup", h), this.on("keypress", w), this.on("keypress", j), this.on("keypress", a), this.on("keydown", s), this.on("keyup", k), this.on("paste", g), this.on("change", g), this.on("input", g), this.on("input", k), this
        }, e.payment.fn.restrictNumeric = function() {
            return this.on("keydown", d), this.on("keyup", h), this.on("keypress", w), this.on("paste", b), this.on("change", b), this.on("input", b), this
        }, e.payment.fn.cardExpiryVal = function() {
            return e.payment.cardExpiryVal(e(this).val())
        }, e.payment.cardExpiryVal = function(e) {
            var t, n, i, r;
            return r = e.split(/[\s\/]+/, 2), t = r[0], i = r[1], 2 === (null != i ? i.length : void 0) && /^\d+$/.test(i) && (n = (new Date).getFullYear(), n = n.toString().slice(0, 2), i = n + i), t = parseInt(t, 10), i = parseInt(i, 10), {
                month: t,
                year: i
            }
        }, e.payment.validateCardNumber = function(e) {
            var n, i;
            return e = (e + "").replace(/\s+|-/g, ""), /^\d+$/.test(e) ? (n = t(e), n ? (i = e.length, C.call(n.length, i) >= 0 && (n.luhn === !1 || m(e))) : !1) : !1
        }, e.payment.validateCardExpiry = function(t, n) {
            var i, r, s;
            return "object" == typeof t && "month" in t && (s = t, t = s.month, n = s.year), t && n ? (t = e.trim(t), n = e.trim(n), /^\d+$/.test(t) && /^\d+$/.test(n) && t >= 1 && 12 >= t ? (2 === n.length && (n = 70 > n ? "20" + n : "19" + n), 4 !== n.length ? !1 : (r = new Date(n, t), i = new Date, r.setMonth(r.getMonth() - 1), r.setMonth(r.getMonth() + 1, 1), r > i)) : !1) : !1
        }, e.payment.validateCardCVC = function(t, i) {
            var r, s;
            return t = e.trim(t), /^\d+$/.test(t) ? (r = n(i), null != r ? (s = t.length, C.call(r.cvcLength, s) >= 0) : t.length >= 3 && t.length <= 4) : !1
        }, e.payment.cardType = function(e) {
            var n;
            return e ? (null != (n = t(e)) ? n.type : void 0) || null : null
        }, e.payment.formatCardNumber = function(n) {
            var i, r, s, o;
            return n = n.replace(/\D/g, ""), (i = t(n)) ? (s = i.length[i.length.length - 1], n = n.slice(0, s), i.format.global ? null != (o = n.match(i.format)) ? o.join(" ") : void 0 : (r = i.format.exec(n), null != r ? (r.shift(), r = e.grep(r, function(e) {
                return e
            }), r.join(" ")) : void 0)) : n
        }, e.payment.formatExpiry = function(e) {
            var t, n, i, r;
            return (n = e.match(/^\D*(\d{1,2})(\D+)?(\d{1,4})?/)) ? (t = n[1] || "", i = n[2] || "", r = n[3] || "", r.length > 0 ? i = " / " : " /" === i ? (t = t.substring(0, 1), i = "") : 2 === t.length || i.length > 0 ? i = " / " : 1 === t.length && "0" !== t && "1" !== t && (t = "0" + t, i = " / "), t + i + r) : ""
        }
    }.call(this),
    function() {
        var e, t = [].indexOf || function(e) {
            for (var t = 0, n = this.length; n > t; t++)
                if (t in this && this[t] === e) return t;
            return -1
        };
        $.observe(".js-card-select-number-field", {
            add: function() {
                $(this).payment("formatCardNumber")
            }
        }), $.observe(".js-card-cvv", {
            add: function() {
                $(this).payment("formatCardCVC")
            }
        }), $.observe(".js-card-select-number-field", function() {
            var e, t, n;
            t = $(this).closest("form"), e = t.find(".js-card"), n = t.find(".js-card-select-type-field"), $(this).on("input", function() {
                var t, i, r, s, o;
                if (o = $(this).val(), s = $.payment.cardType(o))
                    for (i = 0, r = e.length; r > i; i++) t = e[i], $(t).toggleClass("enabled", $(t).attr("data-name") === s), $(t).toggleClass("disabled", $(t).attr("data-name") !== s);
                else e.removeClass("enabled disabled");
                n.val(s)
            })
        }), $(document).on("blur", ".js-card-select-number-field", function() {
            $(this).val($.payment.formatCardNumber($(this).val()))
        }), $(document).on("click", ".js-card", function() {
            var e, t;
            e = $(this).closest("form"), t = e.find(".js-card-select-number-field"), t.focus()
        }), $(document).on("click", ".js-enter-new-card", function(e) {
            var t, n;
            t = $(this).closest(".js-setup-creditcard"), n = t.find(".js-card-select-number-field"), t.removeClass("has-credit-card"), n.attr("required", "required"), n.attr("data-encrypted-name", "billing[credit_card][number]"), e.preventDefault()
        }), $(document).on("click", ".js-cancel-enter-new-card", function(e) {
            var t, n;
            t = $(this).closest(".js-setup-creditcard"), n = t.find(".js-card-select-number-field"), t.addClass("has-credit-card"), n.removeAttr("required"), n.removeAttr("data-encrypted-name"), e.preventDefault()
        }), e = function(e) {
            var n, i, r, s, o, a;
            i = e.find("option:selected").text(), s = {
                Austria: "ATU000000000",
                Belgium: "BE0000000000",
                Bulgaria: "BG000000000...",
                Croatia: "",
                Cyprus: "CY000000000X",
                "Czech Republic": "CZ00000000...",
                Denmark: "DK00 00 00 00",
                Estonia: "EE000000000",
                Finland: "FI00000000",
                France: "FRXX 000000000",
                Germany: "DE000000000",
                Greece: "EL000000000",
                Hungary: "HU00000000",
                Iceland: "",
                Ireland: "IE...",
                Italy: "IT00000000000",
                Latvia: "LV00000000000",
                Lithuania: "LT000000000...",
                Luxembourg: "LU00000000",
                Malta: "MT00000000",
                Netherlands: "NL000000000B00",
                Norway: "",
                Poland: "PL0000000000",
                Portugal: "PT000000000",
                Romania: "RO...",
                Slovakia: "SK0000000000",
                Slovenia: "",
                Spain: "ES...",
                Sweden: "SE000000000000",
                Switzerland: "",
                "United Kingdom": "GB..."
            }, r = ["Angola", "Antigua and Barbuda", "Aruba", "Bahamas", "Belize", "Benin", "Botswana", "Cameroon", "Comoros", "Congo (Brazzaville)", "Congo (Kinshasa)", "Cook Islands", "C\xf4te d'Ivoire", "Djibouti", "Dominica", "Fiji", "French Southern Lands", "Ghana", "Guyana", "Hong Kong", "Ireland", "Kiribati", "Korea, North", "Malawi", "Maritania", "Mauritius", "Montserrat", "Nauru", "Niue", "Qatar", "Saint Kitts and Nevis", "Saint Lucia", "Sao Tome and Principe", "Seychelles", "Sierra Leone", "Sint Maarten (Dutch part)", "Solomon Islands", "Somalia", "Suriname", "Syria", "Togo", "Tokelau", "Tonga", "United Arab Emirates", "Vanuatu", "Yemen", "Zimbabwe"], o = s[i], $(".js-setup-creditcard").toggleClass("is-vat-country", null != o), a = null != o ? "(" + o + ")" : "", n = e.parents(".js-setup-creditcard").find(".js-vat-help-text"), n.html(a), "United States of America" !== i ? ($(".js-setup-creditcard").addClass("is-international"), $(".js-select-state").removeAttr("required").val("")) : ($(".js-setup-creditcard").removeClass("is-international"), $(".js-select-state").attr("required", "required")), t.call(r, i) >= 0 ? ($(".js-setup-creditcard").addClass("no-postcodes"), $(".js-postal-code-field").removeAttr("required").val("")) : ($(".js-setup-creditcard").removeClass("no-postcodes"), $(".js-postal-code-field").attr("required", "required"))
        }, $(document).on("change", ".js-select-country", function() {
            e($(this))
        }), $.observe(".js-select-country", function() {
            e($(this))
        })
    }(),
    function() {
        $(document).on("change", ".js-payment-methods .js-payment-method", function() {
            var e, t;
            e = $(this).closest(".js-payment-methods"), t = $(this).attr("data-selected-tab"), e.find(".js-selected-payment-method").removeClass("active"), e.find("." + t).addClass("active")
        }), $.observe(".js-selected-payment-method:not(.active)", {
            add: function() {
                $(this).addClass("has-removed-contents")
            },
            remove: function() {
                $(this).removeClass("has-removed-contents")
            }
        }), $.observe(".js-billing-payment-methods", function() {
            $(this).removeClass("disabled")
        }), $(document).on("click", ".js-toggle-change-payment-method", function() {
            var e;
            e = this.closest(".js-change-payment-method-container"), e.querySelector(".js-change-payment-method").classList.toggle("has-removed-contents"), e.querySelector(".js-current-payment-method").classList.toggle("hidden")
        })
    }(), define("github/dismiss-notice", ["delegated-events"], function(e) {
        ! function() {
            var t = e.on;
            t("click", ".js-dismiss-notice", function() {
                this.closest(".js-dismissible-notice").classList.add("hidden");
                var e = this.getAttribute("data-dismiss-url");
                fetch(e, {
                    method: "post"
                })
            })
        }()
    }), define("github/fixed-offset-fragment-navigation-observer", ["./sticky-scroll-into-view", "./hash-change", "../setimmediate"], function(e, t, n) {
        function i(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function r() {
            e.computeFixedYOffset() && e.scrollToFragmentTarget()
        }
        var s = i(t),
            o = i(n);
        s["default"](r), document.addEventListener("pjax:end", function() {
            o["default"](r)
        })
    }), define("github/git-clone-help", ["delegated-events"], function(e) {
        e.on("click", ".js-git-clone-help-container .js-git-clone-help-switcher", function() {
            var e = this.closest(".js-git-clone-help-container"),
                t = this.getAttribute("data-url");
            e.querySelector(".js-git-clone-help-field").value = t, this.matches(".js-git-protocol-clone-url") && Array.from(e.querySelectorAll(".js-git-clone-help-text")).forEach(function(e) {
                e.textContent = t
            });
            var n = e.querySelector(".js-clone-url-button.selected");
            n && n.classList.remove("selected"), this.closest(".js-clone-url-button").classList.add("selected")
        })
    }), define("github/homepage/play-video", ["delegated-events"], function(e) {
        function t(e, t) {
            void 0 === t && (t = 0);
            var n = e.getBoundingClientRect(),
                i = n.top - t,
                r = n.bottom - window.innerHeight + t;
            0 > i ? window.scrollBy(0, i) : r > 0 && window.scrollBy(0, r)
        }
        e.on("click", ".js-video-play, .js-video-close, .is-expanded", function(e) {
            e.preventDefault();
            var n = this,
                i = n.classList.contains("js-video-play"),
                r = n.closest(".js-video-container"),
                s = r.querySelector(".js-video-iframe"),
                o = document.querySelector(".js-video-bg");
            i ? s.src = s.getAttribute("data-src") : s.removeAttribute("src"), r.classList.toggle("is-expanded", i), o.classList.toggle("is-expanded", i), t(s, 20)
        })
    }), define("github/link-prefetch-viewed", ["jquery"], function(e) {
        function t(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var n = t(e);
        n["default"].observe("link[rel=prefetch-viewed]", {
            init: function() {
                fetch(location.href, {
                    method: "HEAD",
                    credentials: "same-origin",
                    headers: {
                        Purpose: "prefetch-viewed"
                    }
                })
            }
        })
    }), define("github/capture-keypresses", ["exports"], function(e) {
        function t() {
            var e = document.createElement("textarea");
            return e.style.position = "fixed", e.style.top = 0, e.style.left = 0, e.style.opacity = 0, document.body.appendChild(e), e.focus(),
                function() {
                    return e.blur(), e.remove(), e.value
                }
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e["default"] = t
    }), define("github/pjax/capture-keypresses", ["delegated-events", "../capture-keypresses"], function(e, t) {
        function n(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var i = n(t),
            r = null;
        e.on("pjax:click", ".js-pjax-capture-input", function() {
            r = i["default"]()
        }), e.on("pjax:end", "#js-repo-pjax-container", function() {
            if (r) {
                var t = r(),
                    n = document.querySelector(".js-pjax-restore-captured-input");
                n && t && (n.value = t, e.fire(n, "change")), r = null
            }
        })
    }), define("github/pjax/history-navigate", ["../history", "delegated-events"], function(e, t) {
        t.on("pjax:click", ".js-pjax-history-navigate", function(t) {
            this.href === e.getBackURL() ? (history.back(), t.detail.relatedEvent.preventDefault(), t.preventDefault()) : this.href === e.getForwardURL() && (history.forward(), t.detail.relatedEvent.preventDefault(), t.preventDefault())
        })
    }), define("github/pjax/link-prefetch", ["jquery", "../pjax", "./prefetch"], function(e, t, n) {
        function i(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var r = i(e);
        r["default"].observe("link[rel=pjax-prefetch]", {
            init: function(e) {
                var i = t.fetch(e, {
                    headers: {
                        Purpose: "prefetch"
                    }
                });
                n.setPrefetchResponse(e, i)
            }
        })
    }), define("github/sticky", ["jquery"], function(e) {
        function t(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function n() {
            p.length ? i() : r()
        }

        function i() {
            m || (window.addEventListener("resize", s), document.addEventListener("scroll", s), m = !0)
        }

        function r() {
            window.removeEventListener("resize", s), document.removeEventListener("scroll", s), m = !1
        }

        function s() {
            p.forEach(function(e) {
                if (e.element.offsetHeight > 0) {
                    var t = e.element,
                        n = e.placeholder,
                        i = e.top,
                        r = t.getBoundingClientRect();
                    if (n) {
                        var s = n.getBoundingClientRect();
                        t.classList.contains("is-stuck") ? s.top > parseInt(i) ? c(e) : u(e) : r.top <= parseInt(i) && a(e)
                    } else r.top <= parseInt(i) ? a(e) : c(e)
                }
            })
        }

        function o(e) {
            var t = window.getComputedStyle(e),
                n = t.position;
            return /sticky/.test(n)
        }

        function a(e) {
            var t = e.element,
                n = e.placeholder,
                i = e.top;
            if (n) {
                var r = t.getBoundingClientRect();
                t.style.top = i, t.style.left = r.left + "px", t.style.width = r.width + "px", t.style.marginTop = 0, t.style.position = "fixed", n.style.display = "block"
            }
            t.classList.add("is-stuck")
        }

        function c(e) {
            var t = e.element,
                n = e.placeholder;
            n && (t.style.position = "static", t.style.marginTop = n.style.marginTop, n.style.display = "none"), t.classList.remove("is-stuck")
        }

        function u(e) {
            var t = e.element,
                n = e.placeholder,
                i = e.offsetParent,
                r = e.top;
            if (n) {
                var s = t.getBoundingClientRect(),
                    o = n.getBoundingClientRect();
                if (t.style.left = o.left + "px", t.style.width = o.width + "px", i) {
                    var a = i.getBoundingClientRect();
                    a.bottom < s.height + parseInt(r) && (t.style.top = a.bottom - s.height + "px")
                }
            }
        }

        function l(e) {
            if (o(e)) return null;
            var t = e.previousElementSibling;
            if (t && t.classList.contains("is-placeholder")) return t;
            var n = document.createElement("div");
            return n.style.visibility = "hidden", n.style.display = "none", n.style.height = window.getComputedStyle(e).height, n.className = e.className, n.classList.remove("js-sticky"), n.classList.add("is-placeholder"), e.parentNode.insertBefore(n, e)
        }

        function d(e) {
            var t = l(e),
                n = window.getComputedStyle(e).position;
            e.style.position = "static";
            var i = e.offsetParent;
            e.style.position = "fixed";
            var r = window.getComputedStyle(e).top,
                s = {
                    element: e,
                    placeholder: t,
                    offsetParent: i,
                    top: "auto" == r ? 0 : r
                };
            e.style.position = n, p.push(s)
        }

        function h(e) {
            var t = p.map(function(e) {
                return e.element
            }).indexOf(e);
            p.splice(t, 1)
        }
        var f = t(e),
            m = !1,
            p = [];
        f["default"].observe(".js-sticky", {
            add: function() {
                d(this), s(), n()
            },
            remove: function() {
                h(this), n()
            }
        })
    }), define.amd = "jstimezonedetect",
    function(e) {
        var t = function() {
            "use strict";
            var e = "s",
                n = {
                    DAY: 864e5,
                    HOUR: 36e5,
                    MINUTE: 6e4,
                    SECOND: 1e3,
                    BASELINE_YEAR: 2014,
                    MAX_SCORE: 864e6,
                    AMBIGUITIES: {
                        "America/Denver": ["America/Mazatlan"],
                        "Europe/London": ["Africa/Casablanca"],
                        "America/Chicago": ["America/Mexico_City"],
                        "America/Asuncion": ["America/Campo_Grande", "America/Santiago"],
                        "America/Montevideo": ["America/Sao_Paulo", "America/Santiago"],
                        "Asia/Beirut": ["Asia/Amman", "Asia/Jerusalem", "Europe/Helsinki", "Asia/Damascus", "Africa/Cairo", "Asia/Gaza", "Europe/Minsk"],
                        "Pacific/Auckland": ["Pacific/Fiji"],
                        "America/Los_Angeles": ["America/Santa_Isabel"],
                        "America/New_York": ["America/Havana"],
                        "America/Halifax": ["America/Goose_Bay"],
                        "America/Godthab": ["America/Miquelon"],
                        "Asia/Dubai": ["Asia/Yerevan"],
                        "Asia/Jakarta": ["Asia/Krasnoyarsk"],
                        "Asia/Shanghai": ["Asia/Irkutsk", "Australia/Perth"],
                        "Australia/Sydney": ["Australia/Lord_Howe"],
                        "Asia/Tokyo": ["Asia/Yakutsk"],
                        "Asia/Dhaka": ["Asia/Omsk"],
                        "Asia/Baku": ["Asia/Yerevan"],
                        "Australia/Brisbane": ["Asia/Vladivostok"],
                        "Pacific/Noumea": ["Asia/Vladivostok"],
                        "Pacific/Majuro": ["Asia/Kamchatka", "Pacific/Fiji"],
                        "Pacific/Tongatapu": ["Pacific/Apia"],
                        "Asia/Baghdad": ["Europe/Minsk", "Europe/Moscow"],
                        "Asia/Karachi": ["Asia/Yekaterinburg"],
                        "Africa/Johannesburg": ["Asia/Gaza", "Africa/Cairo"]
                    }
                },
                i = function(e) {
                    var t = -e.getTimezoneOffset();
                    return null !== t ? t : 0
                },
                r = function() {
                    var t = i(new Date(n.BASELINE_YEAR, 0, 2)),
                        r = i(new Date(n.BASELINE_YEAR, 5, 2)),
                        s = t - r;
                    return 0 > s ? t + ",1" : s > 0 ? r + ",1," + e : t + ",0"
                },
                s = function() {
                    var e, t;
                    if ("undefined" != typeof Intl && "undefined" != typeof Intl.DateTimeFormat && (e = Intl.DateTimeFormat(), "undefined" != typeof e && "undefined" != typeof e.resolvedOptions)) return t = e.resolvedOptions().timeZone, t && (t.indexOf("/") > -1 || "UTC" === t) ? t : void 0
                },
                o = function(e) {
                    for (var t = new Date(e, 0, 1, 0, 0, 1, 0).getTime(), n = new Date(e, 12, 31, 23, 59, 59).getTime(), i = t, r = new Date(i).getTimezoneOffset(), s = null, o = null; n - 864e5 > i;) {
                        var c = new Date(i),
                            u = c.getTimezoneOffset();
                        u !== r && (r > u && (s = c), u > r && (o = c), r = u), i += 864e5
                    }
                    return s && o ? {
                        s: a(s).getTime(),
                        e: a(o).getTime()
                    } : !1
                },
                a = function h(e, t, i) {
                    "undefined" == typeof t && (t = n.DAY, i = n.HOUR);
                    for (var r = new Date(e.getTime() - t).getTime(), s = e.getTime() + t, o = new Date(r).getTimezoneOffset(), a = r, c = null; s - i > a;) {
                        var u = new Date(a),
                            l = u.getTimezoneOffset();
                        if (l !== o) {
                            c = u;
                            break
                        }
                        a += i
                    }
                    return t === n.DAY ? h(c, n.HOUR, n.MINUTE) : t === n.HOUR ? h(c, n.MINUTE, n.SECOND) : c
                },
                c = function(e, t, n, i) {
                    if ("N/A" !== n) return n;
                    if ("Asia/Beirut" === t) {
                        if ("Africa/Cairo" === i.name && 13983768e5 === e[6].s && 14116788e5 === e[6].e) return 0;
                        if ("Asia/Jerusalem" === i.name && 13959648e5 === e[6].s && 14118588e5 === e[6].e) return 0
                    } else if ("America/Santiago" === t) {
                        if ("America/Asuncion" === i.name && 14124816e5 === e[6].s && 1397358e6 === e[6].e) return 0;
                        if ("America/Campo_Grande" === i.name && 14136912e5 === e[6].s && 13925196e5 === e[6].e) return 0
                    } else if ("America/Montevideo" === t) {
                        if ("America/Sao_Paulo" === i.name && 14136876e5 === e[6].s && 1392516e6 === e[6].e) return 0
                    } else if ("Pacific/Auckland" === t && "Pacific/Fiji" === i.name && 14142456e5 === e[6].s && 13961016e5 === e[6].e) return 0;
                    return n
                },
                u = function(e, i) {
                    for (var r = function(t) {
                            for (var r = 0, s = 0; s < e.length; s++)
                                if (t.rules[s] && e[s]) {
                                    if (!(e[s].s >= t.rules[s].s && e[s].e <= t.rules[s].e)) {
                                        r = "N/A";
                                        break
                                    }
                                    if (r = 0, r += Math.abs(e[s].s - t.rules[s].s), r += Math.abs(t.rules[s].e - e[s].e), r > n.MAX_SCORE) {
                                        r = "N/A";
                                        break
                                    }
                                }
                            return r = c(e, i, r, t)
                        }, s = {}, o = t.olson.dst_rules.zones, a = o.length, u = n.AMBIGUITIES[i], l = 0; a > l; l++) {
                        var d = o[l],
                            h = r(o[l]);
                        "N/A" !== h && (s[d.name] = h)
                    }
                    for (var f in s)
                        if (s.hasOwnProperty(f))
                            for (var m = 0; m < u.length; m++)
                                if (u[m] === f) return f;
                    return i
                },
                l = function(e) {
                    var n = function() {
                            for (var e = [], n = 0; n < t.olson.dst_rules.years.length; n++) {
                                var i = o(t.olson.dst_rules.years[n]);
                                e.push(i)
                            }
                            return e
                        },
                        i = function(e) {
                            for (var t = 0; t < e.length; t++)
                                if (e[t] !== !1) return !0;
                            return !1
                        },
                        r = n(),
                        s = i(r);
                    return s ? u(r, e) : e
                },
                d = function() {
                    var e = s();
                    return e || (e = t.olson.timezones[r()], "undefined" != typeof n.AMBIGUITIES[e] && (e = l(e))), {
                        name: function() {
                            return e
                        }
                    }
                };
            return {
                determine: d
            }
        }();
        t.olson = t.olson || {}, t.olson.timezones = {
            "-720,0": "Etc/GMT+12",
            "-660,0": "Pacific/Pago_Pago",
            "-660,1,s": "Pacific/Apia",
            "-600,1": "America/Adak",
            "-600,0": "Pacific/Honolulu",
            "-570,0": "Pacific/Marquesas",
            "-540,0": "Pacific/Gambier",
            "-540,1": "America/Anchorage",
            "-480,1": "America/Los_Angeles",
            "-480,0": "Pacific/Pitcairn",
            "-420,0": "America/Phoenix",
            "-420,1": "America/Denver",
            "-360,0": "America/Guatemala",
            "-360,1": "America/Chicago",
            "-360,1,s": "Pacific/Easter",
            "-300,0": "America/Bogota",
            "-300,1": "America/New_York",
            "-270,0": "America/Caracas",
            "-240,1": "America/Halifax",
            "-240,0": "America/Santo_Domingo",
            "-240,1,s": "America/Asuncion",
            "-210,1": "America/St_Johns",
            "-180,1": "America/Godthab",
            "-180,0": "America/Argentina/Buenos_Aires",
            "-180,1,s": "America/Montevideo",
            "-120,0": "America/Noronha",
            "-120,1": "America/Noronha",
            "-60,1": "Atlantic/Azores",
            "-60,0": "Atlantic/Cape_Verde",
            "0,0": "UTC",
            "0,1": "Europe/London",
            "60,1": "Europe/Berlin",
            "60,0": "Africa/Lagos",
            "60,1,s": "Africa/Windhoek",
            "120,1": "Asia/Beirut",
            "120,0": "Africa/Johannesburg",
            "180,0": "Asia/Baghdad",
            "180,1": "Europe/Moscow",
            "210,1": "Asia/Tehran",
            "240,0": "Asia/Dubai",
            "240,1": "Asia/Baku",
            "270,0": "Asia/Kabul",
            "300,1": "Asia/Yekaterinburg",
            "300,0": "Asia/Karachi",
            "330,0": "Asia/Kolkata",
            "345,0": "Asia/Kathmandu",
            "360,0": "Asia/Dhaka",
            "360,1": "Asia/Omsk",
            "390,0": "Asia/Rangoon",
            "420,1": "Asia/Krasnoyarsk",
            "420,0": "Asia/Jakarta",
            "480,0": "Asia/Shanghai",
            "480,1": "Asia/Irkutsk",
            "525,0": "Australia/Eucla",
            "525,1,s": "Australia/Eucla",
            "540,1": "Asia/Yakutsk",
            "540,0": "Asia/Tokyo",
            "570,0": "Australia/Darwin",
            "570,1,s": "Australia/Adelaide",
            "600,0": "Australia/Brisbane",
            "600,1": "Asia/Vladivostok",
            "600,1,s": "Australia/Sydney",
            "630,1,s": "Australia/Lord_Howe",
            "660,1": "Asia/Kamchatka",
            "660,0": "Pacific/Noumea",
            "690,0": "Pacific/Norfolk",
            "720,1,s": "Pacific/Auckland",
            "720,0": "Pacific/Majuro",
            "765,1,s": "Pacific/Chatham",
            "780,0": "Pacific/Tongatapu",
            "780,1,s": "Pacific/Apia",
            "840,0": "Pacific/Kiritimati"
        }, t.olson.dst_rules = {
            years: [2008, 2009, 2010, 2011, 2012, 2013, 2014],
            zones: [{
                name: "Africa/Cairo",
                rules: [{
                    e: 12199572e5,
                    s: 12090744e5
                }, {
                    e: 1250802e6,
                    s: 1240524e6
                }, {
                    e: 12858804e5,
                    s: 12840696e5
                }, !1, !1, !1, {
                    e: 14116788e5,
                    s: 1406844e6
                }]
            }, {
                name: "Africa/Casablanca",
                rules: [{
                    e: 12202236e5,
                    s: 12122784e5
                }, {
                    e: 12508092e5,
                    s: 12438144e5
                }, {
                    e: 1281222e6,
                    s: 12727584e5
                }, {
                    e: 13120668e5,
                    s: 13017888e5
                }, {
                    e: 13489704e5,
                    s: 1345428e6
                }, {
                    e: 13828392e5,
                    s: 13761e8
                }, {
                    e: 14142888e5,
                    s: 14069448e5
                }]
            }, {
                name: "America/Asuncion",
                rules: [{
                    e: 12050316e5,
                    s: 12243888e5
                }, {
                    e: 12364812e5,
                    s: 12558384e5
                }, {
                    e: 12709548e5,
                    s: 12860784e5
                }, {
                    e: 13024044e5,
                    s: 1317528e6
                }, {
                    e: 1333854e6,
                    s: 13495824e5
                }, {
                    e: 1364094e6,
                    s: 1381032e6
                }, {
                    e: 13955436e5,
                    s: 14124816e5
                }]
            }, {
                name: "America/Campo_Grande",
                rules: [{
                    e: 12032172e5,
                    s: 12243888e5
                }, {
                    e: 12346668e5,
                    s: 12558384e5
                }, {
                    e: 12667212e5,
                    s: 1287288e6
                }, {
                    e: 12981708e5,
                    s: 13187376e5
                }, {
                    e: 13302252e5,
                    s: 1350792e6
                }, {
                    e: 136107e7,
                    s: 13822416e5
                }, {
                    e: 13925196e5,
                    s: 14136912e5
                }]
            }, {
                name: "America/Goose_Bay",
                rules: [{
                    e: 122559486e4,
                    s: 120503526e4
                }, {
                    e: 125704446e4,
                    s: 123648486e4
                }, {
                    e: 128909886e4,
                    s: 126853926e4
                }, {
                    e: 13205556e5,
                    s: 129998886e4
                }, {
                    e: 13520052e5,
                    s: 13314456e5
                }, {
                    e: 13834548e5,
                    s: 13628952e5
                }, {
                    e: 14149044e5,
                    s: 13943448e5
                }]
            }, {
                name: "America/Havana",
                rules: [{
                    e: 12249972e5,
                    s: 12056436e5
                }, {
                    e: 12564468e5,
                    s: 12364884e5
                }, {
                    e: 12885012e5,
                    s: 12685428e5
                }, {
                    e: 13211604e5,
                    s: 13005972e5
                }, {
                    e: 13520052e5,
                    s: 13332564e5
                }, {
                    e: 13834548e5,
                    s: 13628916e5
                }, {
                    e: 14149044e5,
                    s: 13943412e5
                }]
            }, {
                name: "America/Mazatlan",
                rules: [{
                    e: 1225008e6,
                    s: 12074724e5
                }, {
                    e: 12564576e5,
                    s: 1238922e6
                }, {
                    e: 1288512e6,
                    s: 12703716e5
                }, {
                    e: 13199616e5,
                    s: 13018212e5
                }, {
                    e: 13514112e5,
                    s: 13332708e5
                }, {
                    e: 13828608e5,
                    s: 13653252e5
                }, {
                    e: 14143104e5,
                    s: 13967748e5
                }]
            }, {
                name: "America/Mexico_City",
                rules: [{
                    e: 12250044e5,
                    s: 12074688e5
                }, {
                    e: 1256454e6,
                    s: 12389184e5
                }, {
                    e: 12885084e5,
                    s: 1270368e6
                }, {
                    e: 1319958e6,
                    s: 13018176e5
                }, {
                    e: 13514076e5,
                    s: 13332672e5
                }, {
                    e: 13828572e5,
                    s: 13653216e5
                }, {
                    e: 14143068e5,
                    s: 13967712e5
                }]
            }, {
                name: "America/Miquelon",
                rules: [{
                    e: 12255984e5,
                    s: 12050388e5
                }, {
                    e: 1257048e6,
                    s: 12364884e5
                }, {
                    e: 12891024e5,
                    s: 12685428e5
                }, {
                    e: 1320552e6,
                    s: 12999924e5
                }, {
                    e: 13520016e5,
                    s: 1331442e6
                }, {
                    e: 13834512e5,
                    s: 13628916e5
                }, {
                    e: 14149008e5,
                    s: 13943412e5
                }]
            }, {
                name: "America/Santa_Isabel",
                rules: [{
                    e: 12250116e5,
                    s: 1207476e6
                }, {
                    e: 12564612e5,
                    s: 12389256e5
                }, {
                    e: 12885156e5,
                    s: 12703752e5
                }, {
                    e: 13199652e5,
                    s: 13018248e5
                }, {
                    e: 13514148e5,
                    s: 13332744e5
                }, {
                    e: 13828644e5,
                    s: 13653288e5
                }, {
                    e: 1414314e6,
                    s: 13967784e5
                }]
            }, {
                name: "America/Santiago",
                rules: [{
                    e: 1206846e6,
                    s: 1223784e6
                }, {
                    e: 1237086e6,
                    s: 12552336e5
                }, {
                    e: 127035e7,
                    s: 12866832e5
                }, {
                    e: 13048236e5,
                    s: 13138992e5
                }, {
                    e: 13356684e5,
                    s: 13465584e5
                }, {
                    e: 1367118e6,
                    s: 13786128e5
                }, {
                    e: 13985676e5,
                    s: 14100624e5
                }]
            }, {
                name: "America/Sao_Paulo",
                rules: [{
                    e: 12032136e5,
                    s: 12243852e5
                }, {
                    e: 12346632e5,
                    s: 12558348e5
                }, {
                    e: 12667176e5,
                    s: 12872844e5
                }, {
                    e: 12981672e5,
                    s: 1318734e6
                }, {
                    e: 13302216e5,
                    s: 13507884e5
                }, {
                    e: 13610664e5,
                    s: 1382238e6
                }, {
                    e: 1392516e6,
                    s: 14136876e5
                }]
            }, {
                name: "Asia/Amman",
                rules: [{
                    e: 1225404e6,
                    s: 12066552e5
                }, {
                    e: 12568536e5,
                    s: 12381048e5
                }, {
                    e: 12883032e5,
                    s: 12695544e5
                }, {
                    e: 13197528e5,
                    s: 13016088e5
                }, !1, !1, {
                    e: 14147064e5,
                    s: 13959576e5
                }]
            }, {
                name: "Asia/Damascus",
                rules: [{
                    e: 12254868e5,
                    s: 120726e7
                }, {
                    e: 125685e7,
                    s: 12381048e5
                }, {
                    e: 12882996e5,
                    s: 12701592e5
                }, {
                    e: 13197492e5,
                    s: 13016088e5
                }, {
                    e: 13511988e5,
                    s: 13330584e5
                }, {
                    e: 13826484e5,
                    s: 1364508e6
                }, {
                    e: 14147028e5,
                    s: 13959576e5
                }]
            }, {
                name: "Asia/Dubai",
                rules: [!1, !1, !1, !1, !1, !1, !1]
            }, {
                name: "Asia/Gaza",
                rules: [{
                    e: 12199572e5,
                    s: 12066552e5
                }, {
                    e: 12520152e5,
                    s: 12381048e5
                }, {
                    e: 1281474e6,
                    s: 126964086e4
                }, {
                    e: 1312146e6,
                    s: 130160886e4
                }, {
                    e: 13481784e5,
                    s: 13330584e5
                }, {
                    e: 13802292e5,
                    s: 1364508e6
                }, {
                    e: 1414098e6,
                    s: 13959576e5
                }]
            }, {
                name: "Asia/Irkutsk",
                rules: [{
                    e: 12249576e5,
                    s: 12068136e5
                }, {
                    e: 12564072e5,
                    s: 12382632e5
                }, {
                    e: 12884616e5,
                    s: 12697128e5
                }, !1, !1, !1, !1]
            }, {
                name: "Asia/Jerusalem",
                rules: [{
                    e: 12231612e5,
                    s: 12066624e5
                }, {
                    e: 1254006e6,
                    s: 1238112e6
                }, {
                    e: 1284246e6,
                    s: 12695616e5
                }, {
                    e: 131751e7,
                    s: 1301616e6
                }, {
                    e: 13483548e5,
                    s: 13330656e5
                }, {
                    e: 13828284e5,
                    s: 13645152e5
                }, {
                    e: 1414278e6,
                    s: 13959648e5
                }]
            }, {
                name: "Asia/Kamchatka",
                rules: [{
                    e: 12249432e5,
                    s: 12067992e5
                }, {
                    e: 12563928e5,
                    s: 12382488e5
                }, {
                    e: 12884508e5,
                    s: 12696984e5
                }, !1, !1, !1, !1]
            }, {
                name: "Asia/Krasnoyarsk",
                rules: [{
                    e: 12249612e5,
                    s: 12068172e5
                }, {
                    e: 12564108e5,
                    s: 12382668e5
                }, {
                    e: 12884652e5,
                    s: 12697164e5
                }, !1, !1, !1, !1]
            }, {
                name: "Asia/Omsk",
                rules: [{
                    e: 12249648e5,
                    s: 12068208e5
                }, {
                    e: 12564144e5,
                    s: 12382704e5
                }, {
                    e: 12884688e5,
                    s: 126972e7
                }, !1, !1, !1, !1]
            }, {
                name: "Asia/Vladivostok",
                rules: [{
                    e: 12249504e5,
                    s: 12068064e5
                }, {
                    e: 12564e8,
                    s: 1238256e6
                }, {
                    e: 12884544e5,
                    s: 12697056e5
                }, !1, !1, !1, !1]
            }, {
                name: "Asia/Yakutsk",
                rules: [{
                    e: 1224954e6,
                    s: 120681e7
                }, {
                    e: 12564036e5,
                    s: 12382596e5
                }, {
                    e: 1288458e6,
                    s: 12697092e5
                }, !1, !1, !1, !1]
            }, {
                name: "Asia/Yekaterinburg",
                rules: [{
                    e: 12249684e5,
                    s: 12068244e5
                }, {
                    e: 1256418e6,
                    s: 1238274e6
                }, {
                    e: 12884724e5,
                    s: 12697236e5
                }, !1, !1, !1, !1]
            }, {
                name: "Asia/Yerevan",
                rules: [{
                    e: 1224972e6,
                    s: 1206828e6
                }, {
                    e: 12564216e5,
                    s: 12382776e5
                }, {
                    e: 1288476e6,
                    s: 12697272e5
                }, {
                    e: 13199256e5,
                    s: 13011768e5
                }, !1, !1, !1]
            }, {
                name: "Australia/Lord_Howe",
                rules: [{
                    e: 12074076e5,
                    s: 12231342e5
                }, {
                    e: 12388572e5,
                    s: 12545838e5
                }, {
                    e: 12703068e5,
                    s: 12860334e5
                }, {
                    e: 13017564e5,
                    s: 1317483e6
                }, {
                    e: 1333206e6,
                    s: 13495374e5
                }, {
                    e: 13652604e5,
                    s: 1380987e6
                }, {
                    e: 139671e7,
                    s: 14124366e5
                }]
            }, {
                name: "Australia/Perth",
                rules: [{
                    e: 12068136e5,
                    s: 12249576e5
                }, !1, !1, !1, !1, !1, !1]
            }, {
                name: "Europe/Helsinki",
                rules: [{
                    e: 12249828e5,
                    s: 12068388e5
                }, {
                    e: 12564324e5,
                    s: 12382884e5
                }, {
                    e: 12884868e5,
                    s: 1269738e6
                }, {
                    e: 13199364e5,
                    s: 13011876e5
                }, {
                    e: 1351386e6,
                    s: 13326372e5
                }, {
                    e: 13828356e5,
                    s: 13646916e5
                }, {
                    e: 14142852e5,
                    s: 13961412e5
                }]
            }, {
                name: "Europe/Minsk",
                rules: [{
                    e: 12249792e5,
                    s: 12068352e5
                }, {
                    e: 12564288e5,
                    s: 12382848e5
                }, {
                    e: 12884832e5,
                    s: 12697344e5
                }, !1, !1, !1, !1]
            }, {
                name: "Europe/Moscow",
                rules: [{
                    e: 12249756e5,
                    s: 12068316e5
                }, {
                    e: 12564252e5,
                    s: 12382812e5
                }, {
                    e: 12884796e5,
                    s: 12697308e5
                }, !1, !1, !1, !1]
            }, {
                name: "Pacific/Apia",
                rules: [!1, !1, !1, {
                    e: 13017528e5,
                    s: 13168728e5
                }, {
                    e: 13332024e5,
                    s: 13489272e5
                }, {
                    e: 13652568e5,
                    s: 13803768e5
                }, {
                    e: 13967064e5,
                    s: 14118264e5
                }]
            }, {
                name: "Pacific/Fiji",
                rules: [!1, !1, {
                    e: 12696984e5,
                    s: 12878424e5
                }, {
                    e: 13271544e5,
                    s: 1319292e6
                }, {
                    e: 1358604e6,
                    s: 13507416e5
                }, {
                    e: 139005e7,
                    s: 1382796e6
                }, {
                    e: 14215032e5,
                    s: 14148504e5
                }]
            }, {
                name: "Europe/London",
                rules: [{
                    e: 12249828e5,
                    s: 12068388e5
                }, {
                    e: 12564324e5,
                    s: 12382884e5
                }, {
                    e: 12884868e5,
                    s: 1269738e6
                }, {
                    e: 13199364e5,
                    s: 13011876e5
                }, {
                    e: 1351386e6,
                    s: 13326372e5
                }, {
                    e: 13828356e5,
                    s: 13646916e5
                }, {
                    e: 14142852e5,
                    s: 13961412e5
                }]
            }]
        }, "undefined" != typeof module && "undefined" != typeof module.exports ? module.exports = t : "undefined" != typeof define && null !== define && null != define.amd ? define([], function() {
            return t
        }) : "undefined" == typeof e ? window.jstz = t : e.jstz = t
    }(), delete define.amd, define("github/tz-cookie", ["jstimezonedetect"], function(e) {
        function t(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var n = t(e),
            i = n["default"].determine().name(),
            r = "https:" === location.protocol ? "secure" : "";
        document.cookie = "tz=" + encodeURIComponent(i) + "; path=/; " + r
    }), define("github-bootstrap", ["./github/dismiss-notice", "./github/fixed-offset-fragment-navigation-observer", "./github/git-clone-help", "./github/homepage/play-video", "./github/link-prefetch-viewed", "./github/pjax/capture-keypresses", "./github/pjax/history-navigate", "./github/pjax/link-prefetch", "./github/sticky", "./github/tz-cookie"], function() {}), require("github-bootstrap"),
    function() {
        var e, t;
        t = require("github/stats")["default"], e = require("github/feature-detection")["default"], t({
            browserfeatures: {
                classlist_multi_arg: e.classListMultiArg,
                classlist: e.classList,
                closest: e.closest,
                custom_elements: e.registerElement,
                custom_event: e.CustomEvent,
                emoji: e.emoji,
                emoji_unicode_6: e.emojiUnicodeVersion >= 6,
                emoji_unicode_7: e.emojiUnicodeVersion >= 7,
                emoji_unicode_8: e.emojiUnicodeVersion >= 8,
                emoji_unicode_9: e.emojiUnicodeVersion >= 9,
                fetch: e.fetch,
                matches: e.matches,
                performance_getentries: e.performanceGetEntries,
                performance_mark: e.performanceMark,
                performance_now: e.performanceNow,
                promise: e.Promise,
                string_ends_with: e.stringEndsWith,
                string_starts_with: e.stringStartsWith,
                url: e.URL,
                weakmap: e.WeakMap
            }
        })
    }.call(this),
    function() {
        function e() {
            var e, i, r, s, o, a;
            (r = function() {
                try {
                    return localStorage.getItem("bundle-urls")
                } catch (e) {}
            }()) && (s = function() {
                try {
                    return JSON.parse(r)
                } catch (e) {}
            }()), null == s && (s = {}), a = t();
            try {
                localStorage.setItem("bundle-urls", JSON.stringify(a))
            } catch (c) {}
            return i = function() {
                var t;
                t = [];
                for (e in a) o = a[e], s[e] !== o && t.push(e);
                return t
            }(), i.length ? n({
                downloadedbundles: i
            }) : void 0
        }

        function t() {
            var e, t, n, i, r, s, o, a, c, u, l;
            for (l = {}, a = $("script"), t = 0, i = a.length; i > t; t++) u = a[t], o = u.src.match(/\/([\w-]+)-[0-9a-f]{64}\.js$/), null != o && (e = o[1], l[e + ".js"] = u.src);
            for (c = $("link[rel=stylesheet]"), n = 0, r = c.length; r > n; n++) s = c[n], o = s.href.match(/\/([\w-]+)-[0-9a-f]{64}\.css$/), null != o && (e = o[1], l[e + ".css"] = s.href);
            return l
        }
        var n = require("github/stats")["default"];
        $(window).on("load", e)
    }(),
    function() {
        function e(e) {
            e.preventDefault(), e.stopPropagation()
        }
        $.observe("a.btn.disabled", {
            add: function(t) {
                t.addEventListener("click", e)
            },
            remove: function(t) {
                t.removeEventListener("click", e)
            }
        })
    }(),
    function() {
        var e, t, n;
        e = function(e) {
            return $(e).closest(".js-check-all-container")[0] || document.body
        }, t = function(e, t, n, i) {
            null == i && (i = !1), t.indeterminate = i, t.checked !== n && (t.checked = n, $(t).fire("change", {
                relatedTarget: e,
                async: !0
            }))
        }, $(document).on("change", "input.js-check-all", function(n) {
            var i, r, s, o, a;
            if (!$(n.relatedTarget).is("input.js-check-all-item")) {
                for (i = $(e(this)), r = i.find("input.js-check-all-item"), s = 0, a = r.length; a > s; s++) o = r[s], t(this, o, this.checked);
                r.removeClass("is-last-changed")
            }
        }), n = null, $(document).on("mousedown", "input.js-check-all-item", function(e) {
            n = e.shiftKey
        }), $(document).on("change", "input.js-check-all-item", function(i) {
            var r, s, o, a, c, u, l, d, h, f, m, p, g, v, b, y;
            if (!$(i.relatedTarget).is("input.js-check-all, input.js-check-all-item")) {
                if (r = $(e(this)), o = r.find("input.js-check-all")[0], s = r.find("input.js-check-all-item"), n && (m = s.filter(".is-last-changed")[0]))
                    for (a = s.toArray(), g = [a.indexOf(m), a.indexOf(this)].sort(), b = g[0], l = g[1], v = a.slice(b, +l + 1 || 9e9), d = 0, p = v.length; p > d; d++) f = v[d], t(this, f, this.checked);
                n = null, s.removeClass("is-last-changed"), $(this).addClass("is-last-changed"), y = s.length, u = function() {
                    var e, t, n;
                    for (n = [], e = 0, t = s.length; t > e; e++) f = s[e], f.checked && n.push(f);
                    return n
                }().length, c = u === y, h = y > u && u > 0, t(this, o, c, h)
            }
        }), $(document).on("change", "input.js-check-all-item", function(t) {
            var n, i, r;
            n = $(e(this)), i = n.find(".js-check-all-count"), i.length && (r = n.find("input.js-check-all-item:checked").length, i.text(r))
        })
    }.call(this),
    function() {
        var e, t, n, i, r, s, o, a, c, u, l, d, h;
        h = require("github/failbot").reportError, c = require("github/inspect")["default"], e = require("zeroclipboard"), s = function(e) {
            var t;
            return t = document.createElement("pre"), t.style.width = "1px", t.style.height = "1px", t.style.position = "fixed", t.style.top = "5px", t.textContent = e, t
        }, i = function(e) {
            var t, n;
            return n = getSelection(), n.removeAllRanges(), t = document.createRange(), t.selectNodeContents(e), n.addRange(t), document.execCommand("copy"), n.removeAllRanges()
        }, r = function(e) {
            var t;
            return t = s(e), document.body.appendChild(t), i(t), document.body.removeChild(t)
        }, n = function(e) {
            return e.select(), document.execCommand("copy"), getSelection().removeAllRanges()
        }, o = function(e, t, n) {
            var i;
            return e.addEventListener(t, i = function() {
                return e.removeEventListener(t, i), n.apply(this, arguments)
            })
        }, $(document).on("click", ".is-copy-enabled .js-zeroclipboard", function(e) {
            var t, s, a, c, l;
            (l = this.getAttribute("data-clipboard-text")) ? r(l): (t = this.closest(".js-zeroclipboard-container"), s = t.querySelector(".js-zeroclipboard-target"), u(s) ? "hidden" === s.type ? r(s.value) : n(s) : i(s)), a = this.getAttribute("data-copied-hint"), c = this.getAttribute("aria-label"), a && a !== c && (this.setAttribute("aria-label", a), o(this, "mouseleave", function() {
                return null != c ? this.setAttribute("aria-label", c) : this.removeAttribute("aria-label")
            })), this.blur()
        }), u = function(e) {
            return "INPUT" === e.nodeName || "TEXTAREA" === e.nodeName
        }, document.documentElement.classList.contains("is-copy-enabled") || (t = null != (l = $("link[rel=assets]").prop("href")) ? l : "/", e.config({
            swfPath: t + "static/flash/ZeroClipboard.v" + e.version + ".swf",
            trustedOrigins: [location.hostname],
            flashLoadTimeout: 1e4,
            cacheBust: null != (d = /MSIE/.test(navigator.userAgent) || /Trident\/[\d](?=[^\?]+).*rv:([0-9.].)/.test(navigator.userAgent)) ? d : {
                "true": !1
            }
        }), $(document).on("click", "#global-zeroclipboard-html-bridge", function(e) {
            e.stopImmediatePropagation()
        }), $.observe("button.js-zeroclipboard", a = function(t) {
            var n, i, r;
            r = new e(t), r.on("copy", function(e) {
                var t, n, i, r, s;
                return t = e.target, null == t.getAttribute("data-clipboard-text") ? (r = $(t).closest(".js-zeroclipboard-container").find(".js-zeroclipboard-target")[0], r ? (s = u(r) ? r.value : r.textContent, n = e.clipboardData, n.setData("text/plain", s.trim())) : (i = new Error("source of clipboard text not found"), h(i, {
                    eventType: "copy",
                    eventTarget: c(t)
                }))) : void 0
            }), r.on("aftercopy", function(e) {
                var n;
                return n = $(this).attr("data-copied-hint"), $("#global-zeroclipboard-html-bridge").attr("aria-label", n || "Copied!"), t.blur()
            }), r.on("error", function(e) {
                return $("#global-zeroclipboard-html-bridge, .js-zeroclipboard").remove(), $(".js-zeroclipboard-container").addClass("has-zeroclipboard-disabled")
            }), i = function() {
                var e;
                return this.classList.remove("tooltipped", "tooltipped-s"), e = $(this).attr("aria-label"), $("#global-zeroclipboard-html-bridge").addClass("tooltipped tooltipped-s").attr("aria-label", e || "Copy to clipboard.")
            }, n = function() {
                return $("#global-zeroclipboard-html-bridge").removeClass("tooltipped tooltipped-s")
            }, $(t).hover(i, n)
        }))
    }.call(this),
    function() {
        var e;
        e = require("setimmediate")["default"], $(document).on("ajaxBeforeSend", ".js-new-comment-form", function(t) {
            return this === t.target && $(this).data("remote-xhr") ? (e(function() {
                throw new Error("canceled comment form submission")
            }), !1) : void 0
        }), $(document).on("ajaxSend", ".js-new-comment-form", function(e) {
            return this === e.target ? $(this).find(".js-comment-form-error").hide() : void 0
        }), $(document).on("ajaxSuccess", ".js-new-comment-form", function(e, t, n, i) {
            var r, s, o, a;
            if (this === e.target) {
                this.reset(), $(this).find(".js-comment-field").trigger("validation:field:change"), $(this).find(".js-write-tab").click(), o = i.updateContent;
                for (a in o) s = o[a], r = $(a), r[0] || console.warn("couldn't find " + a + " for immediate update"), r.updateContent(s)
            }
        }), $(document).on("ajaxError", ".js-new-comment-form", function(e, t) {
            var n, i;
            if (this === e.target) return i = "Sorry! We couldn't save your comment", 422 === t.status && (n = JSON.parse(t.responseText), n.errors && (i += " \u2014 your comment ", i += " " + n.errors.join(", "))), i += ". ", i += "Please try again.", $(this).find(".js-comment-form-error").show().text(i), !1
        })
    }.call(this),
    function() {
        $.observe(".js-comment-and-button", function() {
            var e, t, n, i, r;
            return e = this, t = e.form.querySelector(".js-comment-field"), n = e.textContent, r = !1, i = function() {
                var t;
                return t = this.value.trim(), t !== r ? (r = t, e.textContent = t ? e.getAttribute("data-comment-text") : n) : void 0
            }, {
                add: function() {
                    return $(t).on("input change", i)
                },
                remove: function() {
                    return $(t).off("input change", i)
                }
            }
        })
    }.call(this), define("github/has-interactions", ["exports"], function(e) {
        function t(e) {
            return n(e) || r(e) || s(e) || o(e)
        }

        function n(e) {
            for (var t = e.querySelectorAll("input, textarea"), n = 0, i = t.length; i > n; n++) {
                var r = t[n];
                if (r.value !== r.defaultValue) return !0
            }
            return !1
        }

        function i(e) {
            if (e.nodeType !== Node.ELEMENT_NODE) return !1;
            var t = e.nodeName.toLowerCase(),
                n = (e.getAttribute("type") || "").toLowerCase(),
                i = "input" === t && "submit" !== n && "reset" !== n;
            return "select" === t || "textarea" === t || i
        }

        function r(e) {
            var t = document.activeElement;
            return i(t) && e === t || e.contains(t)
        }

        function s(e) {
            return e.matches(":active")
        }

        function o(e) {
            return e.closest(".is-dirty") || e.querySelector(".is-dirty") ? !0 : !1
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.hasInteractions = t, e.hasDirtyFields = n, e.hasFocus = r, e.hasMousedown = s, e.markedAsDirty = o
    }),
    function() {
        var e;
        e = require("github/has-interactions").hasDirtyFields, $(document).on("click", ".js-comment-edit-button", function() {
            var e;
            e = $(this).closest(".js-comment"), e.addClass("is-comment-editing"), e.find(".js-write-tab").click(), e.find(".js-comment-field").focus().trigger("change")
        }), $(document).on("click", ".js-comment-cancel-button", function() {
            var t, n, i, r, s;
            if (t = $(this).closest("form"), e(t[0]) && !confirm($(this).attr("data-confirm-text"))) return !1;
            for (s = t.find("input, textarea"), i = 0, r = s.length; r > i; i++) n = s[i], n.value = n.defaultValue;
            return $(this).closest(".js-comment").removeClass("is-comment-editing"), !1
        }), $(document).on("ajaxSend", ".js-comment-delete, .js-comment-update, .js-issue-update", function(e, t) {
            var n, i;
            if (e.target === e.currentTarget) return n = $(this).closest(".js-comment"), n.addClass("is-comment-loading"), n.find(".btn-sm").addClass("disabled"), (i = n.attr("data-body-version")) ? t.setRequestHeader("X-Body-Version", i) : void 0
        }), $(document).on("ajaxError", ".js-comment-update", function(e, t, n, i) {
            var r, s, o, a, c;
            if (e.target === e.currentTarget && (console.error("ajaxError for js-comment-update", i), 422 === t.status)) try {
                if (o = JSON.parse(t.responseText), r = $(this).closest(".js-comment"), o.stale) return t.stale = !0, r.addClass("is-comment-stale"), r.find(".btn-sm").addClass("disabled"), e.preventDefault();
                if (o.errors) return c = "There was an error posting your comment: " + o.errors.join(", "), r.find(".js-comment-update-error").text(c).show(), e.preventDefault()
            } catch (a) {
                return s = a, console.error("Error trying to handle ajaxError for js-comment-update: " + s)
            }
        }), $(document).on("ajaxComplete", ".js-comment-delete, .js-comment-update", function(e, t, n) {
            var i;
            if (e.target === e.currentTarget) return i = $(this).closest(".js-comment"), i.removeClass("is-comment-loading"), i.find(".btn-sm").removeClass("disabled"), t.stale ? i.find(".form-actions button[type=submit].btn-sm").addClass("disabled") : void 0
        }), $(document).on("ajaxSuccess", ".js-comment-delete", function() {
            var e, t;
            return e = $(this).closest(".js-comment"), t = $(this).closest(".js-comment-container"), 1 !== t.find(".js-comment").length && (t = e), t.fadeOut(function() {
                return e.remove()
            })
        }), $(document).on("ajaxSuccess", ".js-comment-update", function(e, t, n, i) {
            var r, s, o, a, c, u;
            if (e.target === e.currentTarget) {
                for (r = $(this).closest(".js-comment"), s = $(this).closest(".js-comment-container"), s.length || (s = r), r.find(".js-comment-body").html(i.body), r.find(".js-comment-update-error").hide(), r.attr("data-body-version", i.newBodyVersion), u = r.find("input, textarea"), a = 0, c = u.length; c > a; a++) o = u[a], o.defaultValue = o.value;
                return r.removeClass("is-comment-editing")
            }
        }), $(document).on("ajaxSuccess", ".js-issue-update", function(e, t, n, i) {
            var r, s, o, a, c, u, l, d;
            for (o = this, r = o.closest(".js-details-container"), r.classList.remove("open"), null != i.issue_title && (r.querySelector(".js-issue-title").textContent = i.issue_title, c = r.closest(".js-issues-results"), l = c.querySelector(".js-merge-pull-request textarea"), l && l.value === l.defaultValue && (l.value = l.defaultValue = i.issue_title)), document.title = i.page_title, d = o.elements, a = 0, u = d.length; u > a; a++) s = d[a], s.defaultValue = s.value
        })
    }.call(this),
    function() {
        $(document).on("focusin", ".js-write-bucket", function() {
            return $(this).addClass("focused")
        }), $(document).on("focusout", ".js-write-bucket", function() {
            return $(this).removeClass("focused")
        })
    }.call(this),
    function() {
        var e, t, n, i, r, s, o, a, c, u, l, d, h, f, m, p, g, v, b;
        i = require("delegated-events"), o = require("github/hotkey")["default"], c = function(e) {
            return e.trim().split("\n").length > 1
        }, m = function(e, t) {
            return Array(t + 1).join(e)
        }, b = function(e, t) {
            for (; e[t] && null != e[t - 1] && !e[t - 1].match(/\s/);) t--;
            return t
        }, v = function(e, t) {
            for (; e[t] && !e[t].match(/\s/);) t++;
            return t
        }, n = null, a = function(e, t) {
            var r, s, o, a, c, u, l, d;
            if (d = t.text, l = t.selectionStart, u = t.selectionEnd, c = e.selectionStart, null === n || n) {
                e.contenteditable = !0;
                try {
                    n = document.execCommand("insertText", !1, d)
                } catch (a) {
                    o = a, n = !1
                }
                e.contenteditable = !1
            }
            if (!n) {
                s = e.value.slice(0, e.selectionStart), r = e.value.slice(e.selectionEnd);
                try {
                    document.execCommand("ms-beginUndoUnit")
                } catch (h) {}
                e.value = s + d + r;
                try {
                    document.execCommand("ms-endUndoUnit")
                } catch (h) {}
                i.fire(e, "input")
            }
            return null != l && null != u ? e.setSelectionRange(l, u) : e.setSelectionRange(c, e.selectionEnd)
        }, p = function(e, n) {
            var i, r;
            return r = e.value.slice(e.selectionStart, e.selectionEnd), i = n.orderedList ? f(e) : n.multiline && c(r) ? l(e, n) : t(e, n), a(e, i)
        }, r = function(e, t, n) {
            var i, r, s, o;
            return e.selectionStart === e.selectionEnd ? (e.selectionStart = b(e.value, e.selectionStart), e.selectionEnd = v(e.value, e.selectionEnd)) : (o = e.selectionStart - t.length, s = e.selectionEnd + n.length, i = e.value.slice(o, e.selectionStart) === t, r = e.value.slice(e.selectionEnd, s) === n, i && r && (e.selectionStart = o, e.selectionEnd = s)), e.value.slice(e.selectionStart, e.selectionEnd)
        }, d = function(e) {
            var t, n, i, r, s, o, a, c;
            return n = e.value.slice(0, e.selectionStart), t = e.value.slice(e.selectionEnd), r = null != (a = n.match(/\n*$/)) ? a[0].length : void 0, i = null != (c = t.match(/^\n*/)) ? c[0].length : void 0, n.match(/\S/) && 2 > r && (s = m("\n", 2 - r)), t.match(/\S/) && 2 > i && (o = m("\n", 2 - i)), null == s && (s = ""), null == o && (o = ""), {
                newlinesToAppend: s,
                newlinesToPrepend: o
            }
        }, t = function(e, t) {
            var n, i, s, o, a, u, l, h, f, m, p, g, v, b, y, j, $, w, x, k, S, C, L;
            return p = t.prefix, S = t.suffix, i = t.blockPrefix, s = t.blockSuffix, a = t.multiline, y = t.replaceNext, g = t.prefixSpace, $ = t.scanFor, L = t.surroundWithNewlines, f = e.selectionStart, h = e.selectionEnd, w = e.value.slice(e.selectionStart, e.selectionEnd), v = c(w) && i.length > 0 ? i + "\n" : p, C = c(w) && s.length > 0 ? "\n" + s : S, g && (n = e.value[e.selectionStart - 1], 0 === e.selectionStart || null == n || n.match(/\s/) || (v = " " + v)), w = r(e, v, C), k = e.selectionStart, x = e.selectionEnd, o = y.length > 0 && C.indexOf(y) > -1 && w.length > 0, L && (b = d(e), u = b.newlinesToAppend, l = b.newlinesToPrepend, v = u + p, C += l), w.startsWith(v) && w.endsWith(C) ? (j = w.slice(v.length, w.length - C.length), f === h ? (m = f - v.length, m = Math.max(m, k), m = Math.min(m, k + j.length), k = x = m) : (k = k, x = k + j.length), {
                text: j,
                selectionStart: k,
                selectionEnd: x
            }) : o ? $.length > 0 && w.match($) ? (C = C.replace(y, w), j = v + C, k = x = k + v.length, {
                text: j,
                selectionStart: k,
                selectionEnd: x
            }) : (j = v + w + C, k = k + v.length + w.length + C.indexOf(y), x = k + y.length, {
                text: j,
                selectionStart: k,
                selectionEnd: x
            }) : (j = v + w + C, k = f + v.length, x = h + v.length, {
                text: j,
                selectionStart: k,
                selectionEnd: x
            })
        }, l = function(e, t) {
            var n, i, r, s, o, a, c, u, l, h, f, m, p, g, v, b, y, j, $;
            return u = t.prefix, v = t.suffix, n = t.blockPrefix, i = t.blockSuffix, o = t.multiline, f = t.replaceNext, l = t.prefixSpace, m = t.scanFor, b = t.surroundWithNewlines, y = e.value.slice(e.selectionStart, e.selectionEnd), g = e.selectionStart, p = e.selectionEnd, s = y.split("\n"), j = function() {
                var e, t, n;
                for (n = [], e = 0, t = s.length; t > e; e++) r = s[e], n.push(r.startsWith(u) && r.endsWith(v));
                return n
            }(), $ = j.every(function(e) {
                return e
            }), $ ? (y = function() {
                var e, t, n;
                for (n = [], e = 0, t = s.length; t > e; e++) r = s[e], n.push(r.slice(u.length, r.length - v.length));
                return n
            }().join("\n"), p = g + y.length) : (y = function() {
                var e, t, n;
                for (n = [], e = 0, t = s.length; t > e; e++) r = s[e], n.push(u + r + v);
                return n
            }().join("\n"), b && (h = d(e), a = h.newlinesToAppend, c = h.newlinesToPrepend, g += a.length, p = g + y.length, y = a + y + c)), {
                text: y,
                selectionStart: g,
                selectionEnd: p
            }
        }, f = function(e) {
            var t, n, i, r, s, o, a, c, u, l, h;
            return o = /^\d+\.\s+/, l = e.value.slice(e.selectionStart, e.selectionEnd), i = l.split("\n"), h = i.every(function(e) {
                return o.test(e)
            }), h ? (i = function() {
                var e, t, r;
                for (r = [], e = 0, t = i.length; t > e; e++) n = i[e], r.push(n.replace(o, ""));
                return r
            }(), l = i.join("\n")) : (i = function() {
                var e, r, s;
                for (s = [], t = e = 0, r = i.length; r > e; t = ++e) n = i[t], s.push(t + 1 + ". " + n);
                return s
            }(), l = i.join("\n"), a = d(e), r = a.newlinesToAppend, s = a.newlinesToPrepend, u = e.selectionStart + r.length, c = u + l.length, l = r + l + s), {
                text: l,
                selectionStart: u,
                selectionEnd: c
            }
        }, i.on("click", ".js-toolbar-item", function() {
            return $(this).menu("deactivate"), e(this)
        }), e = function(e) {
            var t, n, i;
            return t = e.closest(".js-previewable-comment-form"), i = t.querySelector(".js-improved-comment-field"), n = {
                prefix: e.getAttribute("data-prefix") || "",
                suffix: e.getAttribute("data-suffix") || "",
                blockPrefix: e.getAttribute("data-block-prefix") || "",
                blockSuffix: e.getAttribute("data-block-suffix") || "",
                multiline: e.getAttribute("data-multiline") || !1,
                replaceNext: e.getAttribute("data-replace-next") || "",
                prefixSpace: e.getAttribute("data-prefix-space") || !1,
                scanFor: e.getAttribute("data-scan-for") || "",
                surroundWithNewlines: e.getAttribute("data-surround-with-newlines") || !1,
                orderedList: e.getAttribute("data-ordered-list") || !1
            }, i.focus(), p(i, n)
        }, u = navigator.userAgent.match(/Macintosh/) ? "meta" : "ctrl", g = new WeakMap, s = function(e) {
            var t, n, i, r, s, o;
            if (r = g.get(e)) return r;
            for (r = {}, s = e.querySelectorAll(".js-toolbar-item[data-toolbar-hotkey]"), t = 0, i = s.length; i > t; t++) o = s[t], n = o.getAttribute("data-toolbar-hotkey"), r[u + "+" + n] = o;
            return g.set(e, r), r
        }, h = function() {
            var t, n;
            if (!g.get(this)) return g.set(this, !0), n = this.closest(".js-previewable-comment-form").querySelector(".js-toolbar"), t = s(n), this.addEventListener("keydown", function(n) {
                var i;
                (i = t[o(n)]) && (e(i), n.preventDefault())
            })
        }, $.observe(".js-improved-comment-field", function() {
            this.addEventListener("focus", h)
        })
    }.call(this),
    function() {
        var e, t, n, i, r, s, o, a, c, u, l;
        r = require("github/fetch").fetchText, u = require("github/stats")["default"], e = require("github/sliding-promise-queue")["default"], l = function(e) {
            var t;
            return null != (t = e.closest("form").elements.authenticity_token) ? t.value : void 0
        }, t = function(e) {
            var t, n, i, r, s, o;
            return t = e.closest(".js-previewable-comment-form"), i = e.classList.contains("js-preview-tab"), i && (s = t.querySelector(".js-write-bucket"), r = t.querySelector(".js-preview-body"), r.style.minHeight = $(s).height() + "px"), t.classList.toggle("preview-selected", i), t.classList.toggle("write-selected", !i), n = t.querySelector(".tabnav-tab.selected"), n.setAttribute("aria-selected", !1), n.classList.remove("selected"), e.classList.add("selected"), e.setAttribute("aria-selected", !0), o = t.querySelector(".js-write-tab"), i ? o.setAttribute("data-hotkey", "ctrl+P,meta+P") : o.removeAttribute("data-hotkey"), Promise.resolve(t)
        }, $(document).on("click", ".js-write-tab", function() {
            var e;
            return t(this).then(function(e) {
                return e.querySelector(".js-comment-field").focus()
            }), e = this.closest(".js-previewable-comment-form").querySelector(".js-toolbar"), null != e && e.classList.remove("hidden"), !1
        }), $(document).on("click", ".js-preview-tab", function(e) {
            var n;
            return t(this).then(function(t) {
                return c(t, e.timeStamp)
            }), n = this.closest(".js-previewable-comment-form").querySelector(".js-toolbar"), null != n && n.classList.add("hidden"), !1
        }), $(document).on("preview:render", ".js-previewable-comment-form", function(e) {
            var n;
            return n = this.querySelector(".js-preview-tab"), t(n).then(function(t) {
                var n;
                return n = e.originalEvent.detail.requestedAt || e.timeStamp, c(t, n)
            })
        }), a = new e, o = new WeakMap, s = !1, n = function(e, t) {
            var n, r, c, u, d;
            return d = {
                url: e.getAttribute("data-preview-url"),
                data: {
                    text: t,
                    authenticity_token: l(e)
                },
                headers: {
                    "content-type": "application/x-www-form-urlencoded; charset=UTF-8"
                }
            }, (r = !e.dispatchEvent(new CustomEvent("preview:setup", {
                bubbles: !0,
                cancelable: !0,
                detail: d
            }))) ? Promise.reject(new Error("preview canceled")) : (t = JSON.stringify(d), (n = o.get(e)) && (c = n[0], u = n[1]), c !== t && (s = !1, u = a.push(i(d)), u.then(function() {
                return s = !0
            }), o.set(e, [t, u])), u)
        }, i = function(e) {
            return r(e.url, {
                method: "post",
                body: $.param(e.data),
                headers: e.headers
            })
        }, c = function(e, t) {
            var i, r;
            return r = e.querySelector(".js-comment-field"), i = e.querySelector(".comment-body"), n(e, r.value).then(function(e) {
                var n;
                return i.innerHTML = e || "<p>Nothing to preview</p>", n = new Date - t, u({
                    preview_delay: {
                        ms: n,
                        background: !1
                    }
                })
            }), s ? void 0 : i.innerHTML = "<p>Loading preview&hellip;</p>"
        }, $.observe(".js-preview-tab", function() {
            var e, t;
            t = this.closest(".js-previewable-comment-form"), e = t.querySelector(".js-comment-field"), $(this).on("mouseenter", function() {
                return n(t, e.value)
            })
        }), $(document).onFocusedKeydown(".js-comment-field", function(e) {
            var t;
            return t = this.closest(".js-previewable-comment-form"),
                function(e) {
                    return "ctrl+P" !== e.hotkey && "meta+P" !== e.hotkey || !t.classList.contains("write-selected") ? void 0 : (this.blur(), t.dispatchEvent(new CustomEvent("preview:render", {
                        bubbles: !0,
                        cancelable: !1,
                        detail: {
                            requestedAt: e.timeStamp
                        }
                    })), e.stopImmediatePropagation(), !1)
                }
        })
    }.call(this),
    function() {
        var e;
        e = require("delegated-events"), e.on("pjax:send", ".context-loader-container", function() {
            var e, t;
            e = this.querySelector(".context-loader"), this.matches(".js-repo-nav-next") && (e = null), e ? e.classList.add("is-context-loading") : null != (t = document.querySelector(".page-context-loader")) && t.classList.add("is-context-loading")
        }), e.on("pjax:complete", ".context-loader-container", function(e) {
            var t, n;
            null != (t = e.target.querySelector(".context-loader")) && t.classList.remove("is-context-loading"), null != (n = document.querySelector(".page-context-loader")) && n.classList.remove("is-context-loading"), document.body.classList.remove("disables-context-loader")
        }), e.on("pjax:timeout", ".context-loader-container", function(e) {
            e.preventDefault()
        })
    }.call(this),
    function() {
        var e = require("github/stats")["default"];
        $.hashChange(function(t) {
            var n = window.location.hash.slice(1);
            return n && /\/(issues|pulls?)\/\d+/.test(t.newURL) ? e({
                conversation_anchor: {
                    anchor: n,
                    matches_element: t.target !== window
                }
            }) : void 0
        })
    }.call(this),
    function(e) {
        e.Jcrop = function(t, n) {
            function i(e) {
                return Math.round(e) + "px"
            }

            function r(e) {
                return M.baseClass + "-" + e
            }

            function s() {
                return e.fx.step.hasOwnProperty("backgroundColor")
            }

            function o(t) {
                var n = e(t).offset();
                return [n.left, n.top]
            }

            function a(e) {
                return [e.pageX - D[0], e.pageY - D[1]]
            }

            function c(t) {
                "object" != typeof t && (t = {}), M = e.extend(M, t), e.each(["onChange", "onSelect", "onRelease", "onDblClick"], function(e, t) {
                    "function" != typeof M[t] && (M[t] = function() {})
                })
            }

            function u(e, t, n) {
                if (D = o(B), me.setCursor("move" === e ? e : e + "-resize"), "move" === e) return me.activateHandlers(d(t), g, n);
                var i = de.getFixed(),
                    r = h(e),
                    s = de.getCorner(h(r));
                de.setPressed(de.getCorner(r)), de.setCurrent(s), me.activateHandlers(l(e, i), g, n)
            }

            function l(e, t) {
                return function(n) {
                    if (M.aspectRatio) switch (e) {
                        case "e":
                            n[1] = t.y + 1;
                            break;
                        case "w":
                            n[1] = t.y + 1;
                            break;
                        case "n":
                            n[0] = t.x + 1;
                            break;
                        case "s":
                            n[0] = t.x + 1
                    } else switch (e) {
                        case "e":
                            n[1] = t.y2;
                            break;
                        case "w":
                            n[1] = t.y2;
                            break;
                        case "n":
                            n[0] = t.x2;
                            break;
                        case "s":
                            n[0] = t.x2
                    }
                    de.setCurrent(n), fe.update()
                }
            }

            function d(e) {
                var t = e;
                return pe.watchKeys(),
                    function(e) {
                        de.moveOffset([e[0] - t[0], e[1] - t[1]]), t = e, fe.update()
                    }
            }

            function h(e) {
                switch (e) {
                    case "n":
                        return "sw";
                    case "s":
                        return "nw";
                    case "e":
                        return "nw";
                    case "w":
                        return "ne";
                    case "ne":
                        return "sw";
                    case "nw":
                        return "se";
                    case "se":
                        return "nw";
                    case "sw":
                        return "ne"
                }
            }

            function f(e) {
                return function(t) {
                    return M.disabled ? !1 : "move" !== e || M.allowMove ? (D = o(B), ie = !0, u(e, a(t)), t.stopPropagation(), t.preventDefault(), !1) : !1
                }
            }

            function m(e, t, n) {
                var i = e.width(),
                    r = e.height();
                i > t && t > 0 && (i = t, r = t / e.width() * e.height()), r > n && n > 0 && (r = n, i = n / e.height() * e.width()), te = e.width() / i, ne = e.height() / r, e.width(i).height(r)
            }

            function p(e) {
                return {
                    x: e.x * te,
                    y: e.y * ne,
                    x2: e.x2 * te,
                    y2: e.y2 * ne,
                    w: e.w * te,
                    h: e.h * ne
                }
            }

            function g(e) {
                var t = de.getFixed();
                t.w > M.minSelect[0] && t.h > M.minSelect[1] ? (fe.enableHandles(), fe.done()) : fe.release(), me.setCursor(M.allowSelect ? "crosshair" : "default")
            }

            function v(e) {
                if (M.disabled) return !1;
                if (!M.allowSelect) return !1;
                ie = !0, D = o(B), fe.disableHandles(), me.setCursor("crosshair");
                var t = a(e);
                return de.setPressed(t), fe.update(), me.activateHandlers(b, g, "touch" === e.type.substring(0, 5)), pe.watchKeys(), e.stopPropagation(), e.preventDefault(), !1
            }

            function b(e) {
                de.setCurrent(e), fe.update()
            }

            function y() {
                var t = e("<div></div>").addClass(r("tracker"));
                return R && t.css({
                    opacity: 0,
                    backgroundColor: "white"
                }), t
            }

            function j(e) {
                V.removeClass().addClass(r("holder")).addClass(e)
            }

            function $(e, t) {
                function n() {
                    window.setTimeout(b, d)
                }
                var i = e[0] / te,
                    r = e[1] / ne,
                    s = e[2] / te,
                    o = e[3] / ne;
                if (!re) {
                    var a = de.flipCoords(i, r, s, o),
                        c = de.getFixed(),
                        u = [c.x, c.y, c.x2, c.y2],
                        l = u,
                        d = M.animationDelay,
                        h = a[0] - u[0],
                        f = a[1] - u[1],
                        m = a[2] - u[2],
                        p = a[3] - u[3],
                        g = 0,
                        v = M.swingSpeed;
                    i = l[0], r = l[1], s = l[2], o = l[3], fe.animMode(!0);
                    var b = function() {
                        return function() {
                            g += (100 - g) / v, l[0] = Math.round(i + g / 100 * h), l[1] = Math.round(r + g / 100 * f), l[2] = Math.round(s + g / 100 * m), l[3] = Math.round(o + g / 100 * p), g >= 99.8 && (g = 100), 100 > g ? (x(l), n()) : (fe.done(), fe.animMode(!1), "function" == typeof t && t.call(ge))
                        }
                    }();
                    n()
                }
            }

            function w(e) {
                x([e[0] / te, e[1] / ne, e[2] / te, e[3] / ne]), M.onSelect.call(ge, p(de.getFixed())), fe.enableHandles()
            }

            function x(e) {
                de.setPressed([e[0], e[1]]), de.setCurrent([e[2], e[3]]), fe.update()
            }

            function k() {
                return p(de.getFixed())
            }

            function S() {
                return de.getFixed()
            }

            function C(e) {
                c(e), P()
            }

            function L() {
                M.disabled = !0, fe.disableHandles(), fe.setCursor("default"), me.setCursor("default")
            }

            function q() {
                M.disabled = !1, P()
            }

            function A() {
                fe.done(), me.activateHandlers(null, null)
            }

            function T() {
                V.remove(), O.show(), O.css("visibility", "visible"), e(t).removeData("Jcrop")
            }

            function _(e, t) {
                fe.release(), L();
                var n = new Image;
                n.onload = function() {
                    var i = n.width,
                        r = n.height,
                        s = M.boxWidth,
                        o = M.boxHeight;
                    B.width(i).height(r), B.attr("src", e), Y.attr("src", e), m(B, s, o), U = B.width(), W = B.height(), Y.width(U).height(W), ae.width(U + 2 * oe).height(W + 2 * oe), V.width(U).height(W), he.resize(U, W), q(), "function" == typeof t && t.call(ge)
                }, n.src = e
            }

            function E(e, t, n) {
                var i = t || M.bgColor;
                M.bgFade && s() && M.fadeTime && !n ? e.animate({
                    backgroundColor: i
                }, {
                    queue: !1,
                    duration: M.fadeTime
                }) : e.css("backgroundColor", i)
            }

            function P(e) {
                M.allowResize ? e ? fe.enableOnly() : fe.enableHandles() : fe.disableHandles(), me.setCursor(M.allowSelect ? "crosshair" : "default"), fe.setCursor(M.allowMove ? "move" : "default"), M.hasOwnProperty("trueSize") && (te = M.trueSize[0] / U, ne = M.trueSize[1] / W), M.hasOwnProperty("setSelect") && (w(M.setSelect), fe.done(), delete M.setSelect), he.refresh(), M.bgColor != ce && (E(M.shade ? he.getShades() : V, M.shade ? M.shadeColor || M.bgColor : M.bgColor), ce = M.bgColor), ue != M.bgOpacity && (ue = M.bgOpacity, M.shade ? he.refresh() : fe.setBgOpacity(ue)), K = M.maxSize[0] || 0, Q = M.maxSize[1] || 0, Z = M.minSize[0] || 0, ee = M.minSize[1] || 0, M.hasOwnProperty("outerImage") && (B.attr("src", M.outerImage), delete M.outerImage), fe.refresh()
            }
            var D, M = e.extend({}, e.Jcrop.defaults),
                I = navigator.userAgent.toLowerCase(),
                R = /msie/.test(I),
                H = /msie [1-6]\./.test(I);
            "object" != typeof t && (t = e(t)[0]), "object" != typeof n && (n = {}), c(n);
            var N = {
                    border: "none",
                    visibility: "visible",
                    margin: 0,
                    padding: 0,
                    position: "absolute",
                    top: 0,
                    left: 0
                },
                O = e(t),
                z = !0;
            if ("IMG" == t.tagName) {
                if (0 != O[0].width && 0 != O[0].height) O.width(O[0].width), O.height(O[0].height);
                else {
                    var F = new Image;
                    F.src = O[0].src, O.width(F.width), O.height(F.height)
                }
                var B = O.clone().removeAttr("id").css(N).show();
                B.width(O.width()), B.height(O.height()), O.after(B).hide()
            } else B = O.css(N).show(), z = !1, null === M.shade && (M.shade = !0);
            m(B, M.boxWidth, M.boxHeight);
            var U = B.width(),
                W = B.height(),
                V = e("<div />").width(U).height(W).addClass(r("holder")).css({
                    position: "relative",
                    backgroundColor: M.bgColor
                }).insertAfter(O).append(B);
            M.addClass && V.addClass(M.addClass);
            var Y = e("<div />"),
                J = e("<div />").width("100%").height("100%").css({
                    zIndex: 310,
                    position: "absolute",
                    overflow: "hidden"
                }),
                G = e("<div />").width("100%").height("100%").css("zIndex", 320),
                X = e("<div />").css({
                    position: "absolute",
                    zIndex: 600
                }).dblclick(function() {
                    var e = de.getFixed();
                    M.onDblClick.call(ge, e)
                }).insertBefore(B).append(J, G);
            z && (Y = e("<img />").attr("src", B.attr("src")).css(N).width(U).height(W), J.append(Y)), H && X.css({
                overflowY: "hidden"
            });
            var K, Q, Z, ee, te, ne, ie, re, se, oe = M.boundary,
                ae = y().width(U + 2 * oe).height(W + 2 * oe).css({
                    position: "absolute",
                    top: i(-oe),
                    left: i(-oe),
                    zIndex: 290
                }).mousedown(v),
                ce = M.bgColor,
                ue = M.bgOpacity;
            D = o(B);
            var le = function() {
                    function e() {
                        var e, t = {},
                            n = ["touchstart", "touchmove", "touchend"],
                            i = document.createElement("div");
                        try {
                            for (e = 0; e < n.length; e++) {
                                var r = n[e];
                                r = "on" + r;
                                var s = r in i;
                                s || (i.setAttribute(r, "return;"), s = "function" == typeof i[r]), t[n[e]] = s
                            }
                            return t.touchstart && t.touchend && t.touchmove
                        } catch (o) {
                            return !1
                        }
                    }

                    function t() {
                        return M.touchSupport === !0 || M.touchSupport === !1 ? M.touchSupport : e()
                    }
                    return {
                        createDragger: function(e) {
                            return function(t) {
                                return M.disabled ? !1 : "move" !== e || M.allowMove ? (D = o(B), ie = !0, u(e, a(le.cfilter(t)), !0), t.stopPropagation(), t.preventDefault(), !1) : !1
                            }
                        },
                        newSelection: function(e) {
                            return v(le.cfilter(e))
                        },
                        cfilter: function(e) {
                            return e.pageX = e.originalEvent.changedTouches[0].pageX, e.pageY = e.originalEvent.changedTouches[0].pageY, e
                        },
                        isSupported: e,
                        support: t()
                    }
                }(),
                de = function() {
                    function e(e) {
                        e = o(e), m = h = e[0], p = f = e[1]
                    }

                    function t(e) {
                        e = o(e), l = e[0] - m, d = e[1] - p, m = e[0], p = e[1]
                    }

                    function n() {
                        return [l, d]
                    }

                    function i(e) {
                        var t = e[0],
                            n = e[1];
                        0 > h + t && (t -= t + h), 0 > f + n && (n -= n + f), p + n > W && (n += W - (p + n)), m + t > U && (t += U - (m + t)), h += t, m += t, f += n, p += n
                    }

                    function r(e) {
                        var t = s();
                        switch (e) {
                            case "ne":
                                return [t.x2, t.y];
                            case "nw":
                                return [t.x, t.y];
                            case "se":
                                return [t.x2, t.y2];
                            case "sw":
                                return [t.x, t.y2]
                        }
                    }

                    function s() {
                        if (!M.aspectRatio) return c();
                        var e, t, n, i, r = M.aspectRatio,
                            s = M.minSize[0] / te,
                            o = M.maxSize[0] / te,
                            l = M.maxSize[1] / ne,
                            d = m - h,
                            g = p - f,
                            v = Math.abs(d),
                            b = Math.abs(g),
                            y = v / b;
                        return 0 === o && (o = 10 * U), 0 === l && (l = 10 * W), r > y ? (t = p, n = b * r, e = 0 > d ? h - n : n + h, 0 > e ? (e = 0, i = Math.abs((e - h) / r), t = 0 > g ? f - i : i + f) : e > U && (e = U, i = Math.abs((e - h) / r), t = 0 > g ? f - i : i + f)) : (e = m, i = v / r, t = 0 > g ? f - i : f + i, 0 > t ? (t = 0, n = Math.abs((t - f) * r), e = 0 > d ? h - n : n + h) : t > W && (t = W, n = Math.abs(t - f) * r, e = 0 > d ? h - n : n + h)), e > h ? (s > e - h ? e = h + s : e - h > o && (e = h + o), t = t > f ? f + (e - h) / r : f - (e - h) / r) : h > e && (s > h - e ? e = h - s : h - e > o && (e = h - o), t = t > f ? f + (h - e) / r : f - (h - e) / r), 0 > e ? (h -= e, e = 0) : e > U && (h -= e - U, e = U), 0 > t ? (f -= t, t = 0) : t > W && (f -= t - W, t = W), u(a(h, f, e, t))
                    }

                    function o(e) {
                        return e[0] < 0 && (e[0] = 0), e[1] < 0 && (e[1] = 0), e[0] > U && (e[0] = U), e[1] > W && (e[1] = W), [Math.round(e[0]), Math.round(e[1])]
                    }

                    function a(e, t, n, i) {
                        var r = e,
                            s = n,
                            o = t,
                            a = i;
                        return e > n && (r = n, s = e), t > i && (o = i, a = t), [r, o, s, a]
                    }

                    function c() {
                        var e, t = m - h,
                            n = p - f;
                        return K && Math.abs(t) > K && (m = t > 0 ? h + K : h - K), Q && Math.abs(n) > Q && (p = n > 0 ? f + Q : f - Q), ee / ne && Math.abs(n) < ee / ne && (p = n > 0 ? f + ee / ne : f - ee / ne), Z / te && Math.abs(t) < Z / te && (m = t > 0 ? h + Z / te : h - Z / te), 0 > h && (m -= h, h -= h), 0 > f && (p -= f, f -= f), 0 > m && (h -= m, m -= m), 0 > p && (f -= p, p -= p), m > U && (e = m - U, h -= e, m -= e), p > W && (e = p - W, f -= e, p -= e), h > U && (e = h - W, p -= e, f -= e), f > W && (e = f - W, p -= e, f -= e), u(a(h, f, m, p))
                    }

                    function u(e) {
                        return {
                            x: e[0],
                            y: e[1],
                            x2: e[2],
                            y2: e[3],
                            w: e[2] - e[0],
                            h: e[3] - e[1]
                        }
                    }
                    var l, d, h = 0,
                        f = 0,
                        m = 0,
                        p = 0;
                    return {
                        flipCoords: a,
                        setPressed: e,
                        setCurrent: t,
                        getOffset: n,
                        moveOffset: i,
                        getCorner: r,
                        getFixed: s
                    }
                }(),
                he = function() {
                    function t(e, t) {
                        m.left.css({
                            height: i(t)
                        }), m.right.css({
                            height: i(t)
                        })
                    }

                    function n() {
                        return r(de.getFixed())
                    }

                    function r(e) {
                        m.top.css({
                            left: i(e.x),
                            width: i(e.w),
                            height: i(e.y)
                        }), m.bottom.css({
                            top: i(e.y2),
                            left: i(e.x),
                            width: i(e.w),
                            height: i(W - e.y2)
                        }), m.right.css({
                            left: i(e.x2),
                            width: i(U - e.x2)
                        }), m.left.css({
                            width: i(e.x)
                        })
                    }

                    function s() {
                        return e("<div />").css({
                            position: "absolute",
                            backgroundColor: M.shadeColor || M.bgColor
                        }).appendTo(f)
                    }

                    function o() {
                        h || (h = !0, f.insertBefore(B), n(), fe.setBgOpacity(1, 0, 1), Y.hide(), a(M.shadeColor || M.bgColor, 1), fe.isAwake() ? u(M.bgOpacity, 1) : u(1, 1))
                    }

                    function a(e, t) {
                        E(d(), e, t)
                    }

                    function c() {
                        h && (f.remove(), Y.show(), h = !1, fe.isAwake() ? fe.setBgOpacity(M.bgOpacity, 1, 1) : (fe.setBgOpacity(1, 1, 1), fe.disableHandles()), E(V, 0, 1))
                    }

                    function u(e, t) {
                        h && (M.bgFade && !t ? f.animate({
                            opacity: 1 - e
                        }, {
                            queue: !1,
                            duration: M.fadeTime
                        }) : f.css({
                            opacity: 1 - e
                        }))
                    }

                    function l() {
                        M.shade ? o() : c(), fe.isAwake() && u(M.bgOpacity)
                    }

                    function d() {
                        return f.children()
                    }
                    var h = !1,
                        f = e("<div />").css({
                            position: "absolute",
                            zIndex: 240,
                            opacity: 0
                        }),
                        m = {
                            top: s(),
                            left: s().height(W),
                            right: s().height(W),
                            bottom: s()
                        };
                    return {
                        update: n,
                        updateRaw: r,
                        getShades: d,
                        setBgColor: a,
                        enable: o,
                        disable: c,
                        resize: t,
                        refresh: l,
                        opacity: u
                    }
                }(),
                fe = function() {
                    function t(t) {
                        var n = e("<div />").css({
                            position: "absolute",
                            opacity: M.borderOpacity
                        }).addClass(r(t));
                        return J.append(n), n
                    }

                    function n(t, n) {
                        var i = e("<div />").mousedown(f(t)).css({
                            cursor: t + "-resize",
                            position: "absolute",
                            zIndex: n
                        }).addClass("ord-" + t);
                        return le.support && i.bind("touchstart.jcrop", le.createDragger(t)), G.append(i), i
                    }

                    function s(e) {
                        var t = M.handleSize,
                            i = n(e, L++).css({
                                opacity: M.handleOpacity
                            }).addClass(r("handle"));
                        return t && i.width(t).height(t), i
                    }

                    function o(e) {
                        return n(e, L++).addClass("jcrop-dragbar")
                    }

                    function a(e) {
                        var t;
                        for (t = 0; t < e.length; t++) T[e[t]] = o(e[t])
                    }

                    function c(e) {
                        var n, i;
                        for (i = 0; i < e.length; i++) {
                            switch (e[i]) {
                                case "n":
                                    n = "hline";
                                    break;
                                case "s":
                                    n = "hline bottom";
                                    break;
                                case "e":
                                    n = "vline right";
                                    break;
                                case "w":
                                    n = "vline"
                            }
                            q[e[i]] = t(n)
                        }
                    }

                    function u(e) {
                        var t;
                        for (t = 0; t < e.length; t++) A[e[t]] = s(e[t])
                    }

                    function l(e, t) {
                        M.shade || Y.css({
                            top: i(-t),
                            left: i(-e)
                        }), X.css({
                            top: i(t),
                            left: i(e)
                        })
                    }

                    function d(e, t) {
                        X.width(Math.round(e)).height(Math.round(t))
                    }

                    function h() {
                        var e = de.getFixed();
                        de.setPressed([e.x, e.y]), de.setCurrent([e.x2, e.y2]), m()
                    }

                    function m(e) {
                        return C ? g(e) : void 0
                    }

                    function g(e) {
                        var t = de.getFixed();
                        d(t.w, t.h), l(t.x, t.y), M.shade && he.updateRaw(t), C || b(), e ? M.onSelect.call(ge, p(t)) : M.onChange.call(ge, p(t))
                    }

                    function v(e, t, n) {
                        (C || t) && (M.bgFade && !n ? B.animate({
                            opacity: e
                        }, {
                            queue: !1,
                            duration: M.fadeTime
                        }) : B.css("opacity", e))
                    }

                    function b() {
                        X.show(), M.shade ? he.opacity(ue) : v(ue, !0), C = !0
                    }

                    function j() {
                        x(), X.hide(), M.shade ? he.opacity(1) : v(1), C = !1, M.onRelease.call(ge)
                    }

                    function $() {
                        _ && G.show()
                    }

                    function w() {
                        return _ = !0, M.allowResize ? (G.show(), !0) : void 0
                    }

                    function x() {
                        _ = !1, G.hide()
                    }

                    function k(e) {
                        e ? (re = !0, x()) : (re = !1, w())
                    }

                    function S() {
                        k(!1), h()
                    }
                    var C, L = 370,
                        q = {},
                        A = {},
                        T = {},
                        _ = !1;
                    M.dragEdges && e.isArray(M.createDragbars) && a(M.createDragbars), e.isArray(M.createHandles) && u(M.createHandles), M.drawBorders && e.isArray(M.createBorders) && c(M.createBorders), e(document).bind("touchstart.jcrop-ios", function(t) {
                        e(t.currentTarget).hasClass("jcrop-tracker") && t.stopPropagation()
                    });
                    var E = y().mousedown(f("move")).css({
                        cursor: "move",
                        position: "absolute",
                        zIndex: 360
                    });
                    return le.support && E.bind("touchstart.jcrop", le.createDragger("move")), J.append(E), x(), {
                        updateVisible: m,
                        update: g,
                        release: j,
                        refresh: h,
                        isAwake: function() {
                            return C
                        },
                        setCursor: function(e) {
                            E.css("cursor", e)
                        },
                        enableHandles: w,
                        enableOnly: function() {
                            _ = !0
                        },
                        showHandles: $,
                        disableHandles: x,
                        animMode: k,
                        setBgOpacity: v,
                        done: S
                    }
                }(),
                me = function() {
                    function t(t) {
                        ae.css({
                            zIndex: 450
                        }), t ? e(document).bind("touchmove.jcrop", o).bind("touchend.jcrop", c) : h && e(document).bind("mousemove.jcrop", i).bind("mouseup.jcrop", r)
                    }

                    function n() {
                        ae.css({
                            zIndex: 290
                        }), e(document).unbind(".jcrop")
                    }

                    function i(e) {
                        return l(a(e)), !1
                    }

                    function r(e) {
                        return e.preventDefault(), e.stopPropagation(), ie && (ie = !1, d(a(e)), fe.isAwake() && M.onSelect.call(ge, p(de.getFixed())), n(), l = function() {}, d = function() {}), !1
                    }

                    function s(e, n, i) {
                        return ie = !0, l = e, d = n, t(i), !1
                    }

                    function o(e) {
                        return l(a(le.cfilter(e))), !1
                    }

                    function c(e) {
                        return r(le.cfilter(e))
                    }

                    function u(e) {
                        ae.css("cursor", e)
                    }
                    var l = function() {},
                        d = function() {},
                        h = M.trackDocument;
                    return h || ae.mousemove(i).mouseup(r).mouseout(r), B.before(ae), {
                        activateHandlers: s,
                        setCursor: u
                    }
                }(),
                pe = function() {
                    function t() {
                        M.keySupport && (s.show(), s.focus())
                    }

                    function n(e) {
                        s.hide()
                    }

                    function i(e, t, n) {
                        M.allowMove && (de.moveOffset([t, n]), fe.updateVisible(!0)), e.preventDefault(), e.stopPropagation()
                    }

                    function r(e) {
                        if (e.ctrlKey || e.metaKey) return !0;
                        se = e.shiftKey ? !0 : !1;
                        var t = se ? 10 : 1;
                        switch (e.keyCode) {
                            case 37:
                                i(e, -t, 0);
                                break;
                            case 39:
                                i(e, t, 0);
                                break;
                            case 38:
                                i(e, 0, -t);
                                break;
                            case 40:
                                i(e, 0, t);
                                break;
                            case 27:
                                M.allowSelect && fe.release();
                                break;
                            case 9:
                                return !0
                        }
                        return !1
                    }
                    var s = e('<input type="radio" />').css({
                            position: "fixed",
                            left: "-120px",
                            width: "12px"
                        }).addClass("jcrop-keymgr"),
                        o = e("<div />").css({
                            position: "absolute",
                            overflow: "hidden"
                        }).append(s);
                    return M.keySupport && (s.keydown(r).blur(n), H || !M.fixedSupport ? (s.css({
                        position: "absolute",
                        left: "-20px"
                    }), o.append(s).insertBefore(B)) : s.insertBefore(B)), {
                        watchKeys: t
                    }
                }();
            le.support && ae.bind("touchstart.jcrop", le.newSelection), G.hide(), P(!0);
            var ge = {
                setImage: _,
                animateTo: $,
                setSelect: w,
                setOptions: C,
                tellSelect: k,
                tellScaled: S,
                setClass: j,
                disable: L,
                enable: q,
                cancel: A,
                release: fe.release,
                destroy: T,
                focus: pe.watchKeys,
                getBounds: function() {
                    return [U * te, W * ne]
                },
                getWidgetSize: function() {
                    return [U, W]
                },
                getScaleFactor: function() {
                    return [te, ne]
                },
                getOptions: function() {
                    return M
                },
                ui: {
                    holder: V,
                    selection: X
                }
            };
            return R && V.bind("selectstart", function() {
                return !1
            }), O.data("Jcrop", ge), ge
        }, e.fn.Jcrop = function(t, n) {
            var i;
            return this.each(function() {
                if (e(this).data("Jcrop")) {
                    if ("api" === t) return e(this).data("Jcrop");
                    e(this).data("Jcrop").setOptions(t)
                } else "IMG" == this.tagName ? e.Jcrop.Loader(this, function() {
                    e(this).css({
                        display: "block",
                        visibility: "hidden"
                    }), i = e.Jcrop(this, t), e.isFunction(n) && n.call(i)
                }) : (e(this).css({
                    display: "block",
                    visibility: "hidden"
                }), i = e.Jcrop(this, t), e.isFunction(n) && n.call(i))
            }), this
        }, e.Jcrop.Loader = function(t, n, i) {
            function r() {
                o.complete ? (s.unbind(".jcloader"), e.isFunction(n) && n.call(o)) : window.setTimeout(r, 50)
            }
            var s = e(t),
                o = s[0];
            s.bind("load.jcloader", r).bind("error.jcloader", function(t) {
                s.unbind(".jcloader"), e.isFunction(i) && i.call(o)
            }), o.complete && e.isFunction(n) && (s.unbind(".jcloader"), n.call(o))
        }, e.Jcrop.defaults = {
            allowSelect: !0,
            allowMove: !0,
            allowResize: !0,
            trackDocument: !0,
            baseClass: "jcrop",
            addClass: null,
            bgColor: "black",
            bgOpacity: .6,
            bgFade: !1,
            borderOpacity: .4,
            handleOpacity: .5,
            handleSize: null,
            aspectRatio: 0,
            keySupport: !0,
            createHandles: ["n", "s", "e", "w", "nw", "ne", "se", "sw"],
            createDragbars: ["n", "s", "e", "w"],
            createBorders: ["n", "s", "e", "w"],
            drawBorders: !0,
            dragEdges: !0,
            fixedSupport: !0,
            touchSupport: null,
            shade: null,
            boxWidth: 0,
            boxHeight: 0,
            boundary: 2,
            fadeTime: 400,
            animationDelay: 20,
            swingSpeed: 3,
            minSelect: [0, 0],
            maxSize: [0, 0],
            minSize: [0, 0],
            onChange: function() {},
            onSelect: function() {},
            onDblClick: function() {},
            onRelease: function() {}
        }
    }(jQuery),
    function() {
        var e, t = function(e, t) {
            return function() {
                return e.apply(t, arguments)
            }
        };
        e = function() {
            function e(e) {
                this.clearCropFormValues = t(this.clearCropFormValues, this), this.setCropFormValues = t(this.setCropFormValues, this), this.setCurrentSelection = t(this.setCurrentSelection, this), this.setTrueSize = t(this.setTrueSize, this);
                var n, i, r;
                this.$container = $(e), this.spinner = this.$container.find(".profile-picture-spinner"), this.img = this.$container.find(".js-croppable-avatar"), this.croppedX = this.$container.find(".js-crop-cropped-x"), this.croppedY = this.$container.find(".js-crop-cropped-y"), this.croppedW = this.$container.find(".js-crop-cropped-width"), this.croppedH = this.$container.find(".js-crop-cropped-height"), n = this.img.parent("div").width(), r = {
                    aspectRatio: 1,
                    onSelect: this.setCropFormValues,
                    onRelease: this.clearCropFormValues,
                    bgColor: "",
                    maxSize: [3e3, 3e3],
                    boxWidth: n,
                    boxHeight: n
                }, this.setTrueSize(r), this.setCurrentSelection(r), i = this, this.img.Jcrop(r, function() {
                    return i.spinner.addClass("hidden"), i.jcrop = this
                })
            }
            return e.prototype.setTrueSize = function(e) {
                var t, n;
                return n = parseInt(this.img.attr("data-true-width")), t = parseInt(this.img.attr("data-true-height")), 0 !== n && 0 !== t ? e.trueSize = [n, t] : void 0
            }, e.prototype.setCurrentSelection = function(e) {
                var t, n, i, r;
                return n = parseInt(this.croppedW.val()), t = parseInt(this.croppedH.val()), 0 !== n && 0 !== t ? (i = parseInt(this.croppedX.val()), r = parseInt(this.croppedY.val()), e.setSelect = [i, r, i + n, r + t]) : void 0
            }, e.prototype.setCropFormValues = function(e) {
                return this.croppedX.val(e.x), this.croppedY.val(e.y), this.croppedW.val(e.w), this.croppedH.val(e.h)
            }, e.prototype.clearCropFormValues = function() {
                return this.croppedX.val("0"), this.croppedY.val("0"), this.croppedW.val("0"), this.croppedH.val("0")
            }, e
        }(), $.observe(".js-croppable-container", {
            add: function(t) {
                return new e(t)
            }
        }), document.addEventListener("facebox:afterClose", function() {
            $(".js-avatar-field").val("")
        })
    }.call(this),
    function() {
        function e(e) {
            return e.offsetParent ? {
                top: $(e).scrollTop(),
                left: $(e).scrollLeft()
            } : {
                top: $(document).scrollTop(),
                left: $(document).scrollLeft()
            }
        }
        $.fn.scrollBy = function(t, n) {
            var i, r;
            return 0 === t && 0 === n ? [0, 0] : (r = e(this[0]), this.scrollTo({
                top: r.top + n,
                left: r.left + t
            }), i = e(this[0]), [i.left - r.left, i.top - r.top])
        }
    }.call(this),
    function() {
        var e = require("github/dimensions"),
            t = e.overflowParent;
        $.fn.cumulativeScrollBy = function(e, n) {
            var i, r, s, o, a;
            i = r = 0;
            for (var c = t(this[0]); c && (s = $(c).scrollBy(e - i, n - r), o = s[0], a = s[1], i += o, r += a, i !== e || r !== n);) c = t(c)
        }
    }.call(this),
    function() {
        window.d3Ready = function() {
            return "undefined" != typeof d3 && null !== d3 ? Promise.resolve() : new Promise(function(e, t) {
                return document.addEventListener("graph-lib:loaded", function() {
                    return e()
                })
            })
        }
    }.call(this),
    function() {
        var e, t, n;
        t = "ontransitionend" in window, $.fn.performTransition = function(i) {
            var r, s, o, a, c, u, l, d;
            if (!t) return void i.apply(this);
            for (o = this.find(".js-transitionable"), o = o.add(this.filter(".js-transitionable")), a = 0, u = o.length; u > a; a++) s = o[a], r = $(s), d = e(s), r.one("transitionend", function() {
                return s.style.display = null, s.style.visibility = null, d ? n(s, function() {
                    return s.style.height = null
                }) : void 0
            }), s.style.display = "block", s.style.visibility = "visible", d && n(s, function() {
                return s.style.height = r.height() + "px"
            }), s.offsetHeight;
            for (i.apply(this), c = 0, l = o.length; l > c; c++) s = o[c], e(s) && (0 === $(s).height() ? s.style.height = s.scrollHeight + "px" : s.style.height = "0px");
            return this
        }, e = function(e) {
            return "height" === $(e).css("transitionProperty")
        }, n = function(e, t) {
            e.style.transition = "none", t(e), e.offsetHeight, e.style.transition = null
        }
    }.call(this),
    function() {
        $(document).on("click", ".js-details-container .js-details-target", function(e) {
            var t, n;
            n = $(this), t = n.closest(".js-details-container"), n.fire("details:toggle", {
                relatedTarget: e.target
            }, function() {
                t.performTransition(function() {
                    this.toggleClass("open"), this.fire("details:toggled", {
                        relatedTarget: e.target,
                        async: !0
                    })
                }), e.preventDefault()
            })
        }), $(document).on("details:toggled", function(e) {
            var t, n, i;
            n = e.target, i = e.relatedTarget, t = $(n).find("input[autofocus], textarea[autofocus]").last()[0], t && document.activeElement !== t && t.focus(), i.classList.contains("tooltipped") && (i.classList.remove("tooltipped"), $(i).one("mouseleave", function() {
                return i.classList.add("tooltipped")
            })), "function" == typeof i.blur && i.blur()
        }), $.hashChange(function(e) {
            return $(e.target).parents(".js-details-container").addClass("open")
        })
    }.call(this), $(document).on("menu:activate", ".js-select-menu", function() {
        $(this).addClass("is-dirty")
    }), $(document).on("menu:deactivate", ".js-select-menu", function() {
        $(this).removeClass("is-dirty")
    }),
    function() {
        function e(e) {
            return "INPUT" === e.nodeName ? e.value || "Submit" : e.innerHTML || ""
        }

        function t(e, t) {
            return "INPUT" === e.nodeName ? e.value = t : e.innerHTML = t
        }
        var n = new WeakMap,
            i = ["input[type=submit][data-disable-with]", "button[type=submit][data-disable-with]"].join(", ");
        $(document).on("submit:prepare", "form", function() {
            var r, s, o, a, c;
            for (c = this.querySelectorAll(i), o = 0, a = c.length; a > o; o++) r = c[o], n.set(r, e(r)), s = r.getAttribute("data-disable-with"), s && t(r, s), r.disabled = !0
        }), $(document).on("ajaxComplete", "form", function(e) {
            var r, s, o, a, c;
            if (this === e.target)
                for (a = this.querySelectorAll(i), s = 0, o = a.length; o > s; s++) r = a[s], c = n.get(r), null != c && (t(r, c), r.disabled = !1, n["delete"](r))
        })
    }(), $(document).on("click", "[data-facebox]", function() {
        $.facebox({
            div: this.getAttribute("data-facebox")
        }, this.getAttribute("data-facebox-class"))
    }),
    function() {
        var e, t;
        document.addEventListener("facebox:reveal", function() {
            var e, n;
            e = $("#facebox"), n = e.find("input[autofocus], textarea[autofocus]").last()[0], n && document.activeElement !== n && n.focus(), $(document).on("keydown", t)
        }), document.addEventListener("facebox:afterClose", function() {
            $(document).off("keydown", t), $("#facebox :focus").blur()
        }), t = function(e) {
            var t, n, i, r, s, o;
            ("tab" === (s = e.hotkey) || "shift+tab" === s) && (e.preventDefault(), n = $("#facebox"), t = n.find("input, button, .btn, textarea").visible().filter(function() {
                return !this.disabled
            }), r = "shift+tab" === e.hotkey ? -1 : 1, i = t.index(t.filter(":focus")), o = i + r, o === t.length || -1 === i && "tab" === e.hotkey ? t.first().focus() : -1 === i ? t.last().focus() : t.get(o).focus())
        }, $.observe("a[rel*=facebox]", e = function() {
            $(this).facebox()
        })
    }.call(this), define("github/fuzzy-filter", ["exports"], function(e) {
        function t(e, t) {
            var n = a(e, t);
            if (n && -1 === t.indexOf("/")) {
                var i = e.substring(e.lastIndexOf("/") + 1);
                n += a(i, t)
            }
            return n
        }

        function n(e, n) {
            e = function() {
                for (var i = [], r = 0, s = e.length; s > r; r++) {
                    var o = e[r],
                        a = t(o, n);
                    a && i.push([o, a])
                }
                return i
            }(), e.sort(i);
            for (var r = [], s = 0, o = e.length; o > s; s++) {
                var a = e[s];
                r.push(a[0])
            }
            return r
        }

        function i(e, t) {
            var n = e[0],
                i = t[0],
                r = e[1],
                s = t[1];
            return r > s ? -1 : s > r ? 1 : i > n ? -1 : n > i ? 1 : 0
        }

        function r(e) {
            var t = e.toLowerCase(),
                n = "+.*?[]{}()^$|\\".replace(/(.)/g, "\\$1"),
                i = new RegExp("\\(([" + n + "])\\)", "g");
            return e = t.replace(/(.)/g, "($1)(.*?)").replace(i, "(\\$1)"), new RegExp("(.*)" + e + "$", "i")
        }

        function s(e, t, n) {
            null == n && (n = null);
            var i = e.innerHTML.trim();
            if (t) {
                null == n && (n = r(t));
                var s = i.match(n);
                if (!s) return;
                open = !1, i = [];
                var o = void 0,
                    a = void 0,
                    c = void 0;
                for (o = a = 1, c = s.length; c >= 1 ? c > a : a > c; o = c >= 1 ? ++a : --a) {
                    var u = s[o];
                    u && (o % 2 === 0 ? open || (i.push("<mark>"), open = !0) : open && (i.push("</mark>"), open = !1), i.push(u))
                }
                e.innerHTML = i.join("")
            } else {
                var l = i.replace(/<\/?mark>/g, "");
                i !== l && (e.innerHTML = l)
            }
        }

        function o(e, t, n) {
            null == n && (n = r(t));
            for (var i = e.match(n), s = [], o = null, a = 1; a < i.length; a++) {
                var c = i[a];
                c && (a % 2 === 0 ? o || (o = [], s.push(o)) : o = null, o ? o.push(c) : s.push(c))
            }
            return s.map(function(e) {
                return "string" == typeof e ? e : [e.join("")]
            })
        }

        function a(e, t) {
            if (e === t) return 1;
            var n = e.length,
                i = 0,
                r = 0,
                s = void 0,
                o = void 0,
                a = void 0;
            for (s = o = 0, a = t.length; a > o; s = ++o) {
                var c = t[s],
                    u = e.indexOf(c.toLowerCase()),
                    l = e.indexOf(c.toUpperCase()),
                    d = Math.min(u, l),
                    h = d > -1 ? d : Math.max(u, l);
                if (-1 === h) return 0;
                i += .1, e[h] === c && (i += .1), 0 === h && (i += .8, 0 === s && (r = 1)), " " === e.charAt(h - 1) && (i += .8), e = e.substring(h + 1, n)
            }
            var f = t.length,
                m = i / f,
                p = (m * (f / n) + m) / 2;
            return r && 1 > p + .1 && (p += .1), p
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.fuzzyScore = t, e.fuzzySort = n, e.fuzzyRegexp = r, e.fuzzyHighlightElement = s, e.fuzzyHighlight = o
    }),
    function() {
        var e, t, n, i, r, s, o, a, c;
        a = require("github/fuzzy-filter"), s = a.fuzzyScore, r = a.fuzzyRegexp, i = a.fuzzyHighlightElement, o = new WeakMap, $.fn.fuzzyFilterSortList = function(i, a) {
            var u, l, d, h, f, m, p, g, v, b, y, j, w, x, k, S, C, L, q, A, T, _, E, P, D, M, I;
            if (null == a && (a = {}), S = this[0]) {
                for (i = i.toLowerCase(), h = null != (q = a.content) ? q : e, D = null != (A = a.text) ? A : n, P = null != (T = a.score) ? T : s, k = a.limit, a.mark === !0 ? C = t : null != (null != (_ = a.mark) ? _.call : void 0) && (C = a.mark), (u = o.get(S)) ? l = $(S).children() : (l = u = $(S).children(), S.webkitWeakMapWorkaround = 1, o.set(S, u.slice(0))), f = 0, y = l.length; y > f; f++) m = l[f], S.removeChild(m), m.style.display = "";
                if (E = document.createDocumentFragment(), M = 0, I = 0, i) {
                    for (p = u.slice(0), v = 0, w = p.length; w > v; v++) m = p[v], null == m.fuzzyFilterTextCache && (m.fuzzyFilterTextCache = D(h(m))), m.fuzzyFilterScoreCache = P(m.fuzzyFilterTextCache, i);
                    for (p.sort(c), L = r(i), b = 0, x = p.length; x > b; b++) m = p[b], (!k || k > M) && m.fuzzyFilterScoreCache > 0 && (I++, C && (d = h(m), C(d), C(d, i, L)), E.appendChild(m)), M++
                } else
                    for (g = 0, j = u.length; j > g; g++) m = u[g], (!k || k > M) && (I++, C && C(h(m)), E.appendChild(m)), M++;
                return S.appendChild(E), I
            }
        }, c = function(e, t) {
            var n, i, r, s;
            return n = e.fuzzyFilterScoreCache, r = t.fuzzyFilterScoreCache, i = e.fuzzyFilterTextCache, s = t.fuzzyFilterTextCache, n > r ? -1 : r > n ? 1 : s > i ? -1 : i > s ? 1 : 0
        }, e = function(e) {
            return e
        }, n = function(e) {
            return $.trim(e.textContent.toLowerCase())
        }, t = i
    }.call(this),
    function() {
        var e, t;
        $.fn.prefixFilterList = function(n, i) {
            var r, s, o, a, c, u, l, d, h, f, m;
            if (null == i && (i = {}), u = this[0]) {
                for (n = n.toLowerCase(), f = null != (d = i.text) ? d : t, r = $(u).children(), c = i.limit, i.mark === !0 ? l = e : null != (null != (h = i.mark) ? h.call : void 0) && (l = i.mark), m = 0, s = 0, a = r.length; a > s; s++) o = r[s], 0 === f(o).indexOf(n) ? c && m >= c ? o.style.display = "none" : (m++, o.style.display = "", l && (l(o), l(o, n))) : o.style.display = "none";
                return m
            }
        }, t = function(e) {
            return $.trim(e.textContent.toLowerCase())
        }, e = function(e, t) {
            var n, i, r;
            i = e.innerHTML, t ? (r = new RegExp(t, "i"), e.innerHTML = i.replace(r, "<mark>$&</mark>")) : (n = i.replace(/<\/?mark>/g, ""), i !== n && (e.innerHTML = n))
        }
    }.call(this),
    function() {
        var e, t;
        $.fn.substringFilterList = function(n, i) {
            var r, s, o, a, c, u, l, d, h, f, m;
            if (null == i && (i = {}), u = this[0]) {
                for (n = n.toLowerCase(), f = null != (d = i.text) ? d : t, c = i.limit, r = $(u).children(), i.mark === !0 ? l = e : null != (null != (h = i.mark) ? h.call : void 0) && (l = i.mark), m = 0, s = 0, a = r.length; a > s; s++) o = r[s], -1 !== f(o).indexOf(n) ? c && m >= c ? o.style.display = "none" : (m++, o.style.display = "", l && (l(o), l(o, n))) : o.style.display = "none";
                return m
            }
        }, t = function(e) {
            return $.trim(e.textContent.toLowerCase())
        }, e = function(e, t) {
            var n, i, r;
            i = e.innerHTML, t ? (r = new RegExp(t, "i"), e.innerHTML = i.replace(r, "<mark>$&</mark>")) : (n = i.replace(/<\/?mark>/g, ""), i !== n && (e.innerHTML = n))
        }
    }.call(this),
    function() {
        function e(e, t) {
            var n = e.hasAttribute("data-filterable-highlight"),
                i = e.getAttribute("data-filterable-limit"),
                r = 0;
            switch (e.getAttribute("data-filterable-type")) {
                case "fuzzy":
                    r = $(e).fuzzyFilterSortList(t, {
                        mark: n,
                        limit: i
                    });
                    break;
                case "substring":
                    r = $(e).substringFilterList(t, {
                        mark: n,
                        limit: i
                    });
                    break;
                default:
                    r = $(e).prefixFilterList(t, {
                        mark: n,
                        limit: i
                    })
            }
            e.classList.toggle("filterable-active", t.length > 0), e.classList.toggle("filterable-empty", 0 === r)
        }
        $.observe(".js-filterable-field", function() {
            var e = this.value;
            return {
                add: function() {
                    $(this).on("throttled:input.filterable", function() {
                        e !== this.value && (e = this.value, $(this).fire("filterable:change", {
                            async: !0
                        }))
                    }), $(this).on("focus.filterable", function() {
                        $(this).fire("filterable:change", {
                            async: !0
                        })
                    })
                },
                remove: function() {
                    $(this).off("filterable")
                }
            }
        }), $(document).on("filterable:change", ".js-filterable-field", function() {
            var t = this,
                n = this.value.trim().toLowerCase(),
                i = document.querySelectorAll("[data-filterable-for=" + this.id + "]");
            Array.from(i).forEach(function(i) {
                e(i, n), $(i).fire("filterable:change", {
                    relatedTarget: t
                })
            })
        })
    }(), $(document).on("click", ".js-flash-close", function() {
        var e = $(this).closest(".flash-messages");
        $(this).closest(".flash").fadeOut(300, function() {
            $(this).remove(), 0 === e.find(".flash").length && e.remove()
        })
    }),
    function() {
        var e = new WeakMap;
        $(document).on("focusin.delay", function(t) {
            var n;
            n = t.target, e.get(n) || $(n).fire("focusin:delay", function() {
                e.set(n, !0), $(n).trigger("focusin:delayed")
            })
        }), $(document).on("focusout.delay", function(t) {
            return setTimeout(function() {
                var n;
                n = t.target, n !== document.activeElement && $(n).fire("focusout:delay", function() {
                    e["delete"](t.target), $(n).trigger("focusout:delayed")
                })
            }, 200)
        })
    }(),
    function() {
        var e = require("github/local-storage"),
            t = e.getItem,
            n = e.removeItem,
            i = require("github/fetch"),
            r = i.fetch;
        $.observe(".js-force-push-default-branch-notice", function() {
            var e = "true" === t("hide-force-push-default-branch-notice");
            if (this.classList.toggle("hidden", e), e) {
                var i = this.getAttribute("data-push-local-url");
                r(i, {
                    method: "post"
                }).then(function() {
                    return n("hide-force-push-default-branch-notice")
                })
            }
        })
    }(),
    function() {
        function e(e) {
            var t;
            return t = document.createElement("img"), t.src = e.getAttribute("fallback-src"), t.className = "emoji", t.alt = t.title = ":" + e.getAttribute("alias") + ":", t.height = 20, t.width = 20, t.align = "absmiddle", t
        }
        var t = require("github/feature-detection")["default"];
        if (!t.emoji) {
            var n = Object.create(HTMLElement.prototype);
            n.createdCallback = function() {
                this.textContent = "", this.appendChild(e(this))
            }, window.GEmojiElement = document.registerElement("g-emoji", {
                prototype: n
            })
        }
    }(),
    function() {
        function e(e, t) {
            return e.href = t
        }

        function t(e, t) {
            return e.name = t
        }

        function n(e) {
            Se.set(e)
        }

        function i(e) {
            return "function" == typeof e
        }

        function r(e) {
            return "[object Array]" == Object[pe].toString[be](Object(e))
        }

        function s(e) {
            return void 0 != e && -1 < (e.constructor + "")[de]("String")
        }

        function o(e, t) {
            return 0 == e[de](t)
        }

        function a(e) {
            return e ? e[F](/^[\s\xa0]+|[\s\xa0]+$/g, "") : ""
        }

        function c() {
            return [Ge() ^ 2147483647 & Re(), z.round((new Date)[G]() / 1e3)][xe](".")
        }

        function u(e) {
            var t = Te[Y]("img");
            return t.width = 1, t.height = 1, t.src = e, t
        }

        function l() {}

        function d(e) {
            return H instanceof Function ? H(e) : (n(28), e)
        }

        function h(e) {
            return d(e)[F](/\(/g, "%28")[F](/\)/g, "%29")
        }

        function f(e, t) {
            if (e) {
                var n = Te[Y]("script");
                n.type = "text/javascript", n.async = !0, n.src = e, n.id = t;
                var i = Te.getElementsByTagName("script")[0];
                i[we].insertBefore(n, i)
            }
        }

        function m() {
            return lt || "https:" == Te[Q][ne] ? "https:" : "http:"
        }

        function p() {
            var e = "" + Te[Q][ee];
            return 0 == e[de]("www.") ? e[je](4) : e
        }

        function g(e) {
            var t = Te.referrer;
            if (/^https?:\/\//i [ce](t)) {
                if (e) return t;
                e = "//" + Te[Q][ee];
                var n = t[de](e);
                if ((5 == n || 6 == n) && (e = t.charAt(n + e[me]), "/" == e || "?" == e || "" == e || ":" == e)) return;
                return t
            }
        }

        function v(e, t) {
            if (1 == t[me] && null != t[0] && "object" == typeof t[0]) return t[0];
            for (var n = {}, i = z.min(e[me] + 1, t[me]), r = 0; i > r; r++) {
                if ("object" == typeof t[r]) {
                    for (var s in t[r]) t[r][Z](s) && (n[s] = t[r][s]);
                    break
                }
                r < e[me] && (n[e[r]] = t[r])
            }
            return n
        }

        function b(e) {
            if (100 != e.get(Pn) && R(Ze(e, $n)) % 1e4 >= 100 * et(e, Pn)) throw "abort"
        }

        function y(e) {
            if (_e(Ze(e, xn))) throw "abort"
        }

        function j() {
            var e = Te[Q][ne];
            if ("http:" != e && "https:" != e) throw "abort"
        }

        function $(e) {
            try {
                Ae.XMLHttpRequest && "withCredentials" in new Ae.XMLHttpRequest ? n(40) : Ae.XDomainRequest && n(41), Ae[$e].sendBeacon && n(42)
            } catch (t) {}
            e.set(bt, et(e, bt) + 1);
            var i = [];
            if (Ke.map(function(t, n) {
                    if (n.p) {
                        var r = e.get(t);
                        void 0 != r && r != n[he] && ("boolean" == typeof r && (r *= 1), i[oe](n.p + "=" + d("" + r)))
                    }
                }), On(new Nn(1e4))) {
                var r = [];
                r[oe](Ye()), r[oe][se](r, c()[K](".")), r[oe](Je());
                var s;
                s = Ae.crypto ? !0 : !1, r[oe](s ? "c" : "b"), i[oe]("z=" + r[xe]("."))
            } else i[oe]("z=" + Je());
            e.set(gt, i[xe]("&"), !0)
        }

        function w(e) {
            var t = Ze(e, In) || He() + "/collect";
            ze(t, Ze(e, gt), e.get(pt), e.get(vt)), e.set(pt, l, !0)
        }

        function x(e) {
            var t = Ae.gaData;
            t && (t.expId && e.set(Jt, t.expId), t.expVar && e.set(Gt, t.expVar))
        }

        function k() {
            if (Ae[$e] && "preview" == Ae[$e].loadPurpose) throw "abort"
        }

        function S(e) {
            var t = Ae.gaDevIds;
            r(t) && 0 != t[me] && e.set("&did", t[xe](","), !0)
        }

        function C(e) {
            if (!e.get(xn)) throw "abort"
        }

        function L(e) {
            var t = et(e, Zt);
            t >= 500 && n(15);
            var i = Ze(e, mt);
            if ("transaction" != i && "item" != i) {
                var i = et(e, tn),
                    r = (new Date)[G](),
                    s = et(e, en);
                if (0 == s && e.set(en, r), s = z.round(2 * (r - s) / 1e3), s > 0 && (i = z.min(i + s, 20), e.set(en, r)), 0 >= i) throw "abort";
                e.set(tn, --i)
            }
            e.set(Zt, ++t)
        }

        function q(e, t, i, r) {
            t[e] = function() {
                try {
                    return r && n(r), i[se](this, arguments)
                } catch (t) {
                    var s = t && t[fe];
                    if (!(1 <= 100 * z.random() || _e("?"))) {
                        var o = ["t=error", "_e=exc", "_v=j30", "sr=1"];
                        e && o[oe]("_f=" + e), s && o[oe]("_m=" + d(s[je](0, 100))), o[oe]("aip=1"), o[oe]("z=" + Ge()), ze(He() + "/collect", o[xe]("&"))
                    }
                    throw t
                }
            }
        }

        function A() {
            var e, t, n;
            if ((n = (n = Ae[$e]) ? n.plugins : null) && n[me])
                for (var i = 0; i < n[me] && !t; i++) {
                    var r = n[i]; - 1 < r[fe][de]("Shockwave Flash") && (t = r.description)
                }
            if (!t) try {
                e = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7"), t = e.GetVariable("$version")
            } catch (s) {}
            if (!t) try {
                e = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6"), t = "WIN 6,0,21,0", e.AllowScriptAccess = "always", t = e.GetVariable("$version")
            } catch (o) {}
            if (!t) try {
                e = new ActiveXObject("ShockwaveFlash.ShockwaveFlash"), t = e.GetVariable("$version")
            } catch (a) {}
            return t && (e = t[U](/[\d]+/g)) && 3 <= e[me] && (t = e[0] + "." + e[1] + " r" + e[2]), t || void 0
        }

        function T(e, t, n) {
            "none" == t && (t = "");
            var i = [],
                r = Pe(e);
            e = "__utma" == e ? 6 : 2;
            for (var s = 0; s < r[me]; s++) {
                var o = ("" + r[s])[K](".");
                o[me] >= e && i[oe]({
                    hash: o[0],
                    R: r[s],
                    O: o
                })
            }
            return 0 == i[me] ? void 0 : 1 == i[me] ? i[0] : _(t, i) || _(n, i) || _(null, i) || i[0]
        }

        function _(e, t) {
            var n, i;
            null == e ? n = i = 1 : (n = R(e), i = R(o(e, ".") ? e[je](1) : "." + e));
            for (var r = 0; r < t[me]; r++)
                if (t[r][ae] == n || t[r][ae] == i) return t[r]
        }

        function E(e) {
            e = e.get($n);
            var t = P(e, 0);
            return "_ga=1." + d(t + "." + e)
        }

        function P(e, t) {
            for (var n = new Date, i = Ae[$e], r = i.plugins || [], n = [e, i.userAgent, n.getTimezoneOffset(), n.getYear(), n.getDate(), n.getHours(), n.getMinutes() + t], i = 0; i < r[me]; ++i) n[oe](r[i].description);
            return R(n[xe]("."))
        }

        function D(e, t) {
            if (t == Te[Q][ee]) return !1;
            for (var n = 0; n < e[me]; n++)
                if (e[n] instanceof RegExp) {
                    if (e[n][ce](t)) return !0
                } else if (0 <= t[de](e[n])) return !0;
            return !1
        }

        function M() {
            var e = Ae.gaGlobal = Ae.gaGlobal || {};
            return e.hid = e.hid || Ge()
        }

        function I(e) {
            return 0 <= e[de](".") || 0 <= e[de](":")
        }

        function R(e) {
            var t, n = 1,
                i = 0;
            if (e)
                for (n = 0, t = e[me] - 1; t >= 0; t--) i = e.charCodeAt(t), n = (n << 6 & 268435455) + i + (i << 14), i = 266338304 & n, n = 0 != i ? n ^ i >> 21 : n;
            return n
        }
        var H = encodeURIComponent,
            N = window,
            O = setTimeout,
            z = Math,
            F = "replace",
            B = "data",
            U = "match",
            W = "send",
            V = "port",
            Y = "createElement",
            J = "setAttribute",
            G = "getTime",
            X = "host",
            K = "split",
            Q = "location",
            Z = "hasOwnProperty",
            ee = "hostname",
            te = "search",
            ne = "protocol",
            ie = "href",
            re = "action",
            se = "apply",
            oe = "push",
            ae = "hash",
            ce = "test",
            ue = "slice",
            le = "cookie",
            de = "indexOf",
            he = "defaultValue",
            fe = "name",
            me = "length",
            pe = "prototype",
            ge = "clientWidth",
            ve = "target",
            be = "call",
            ye = "clientHeight",
            je = "substring",
            $e = "navigator",
            we = "parentNode",
            xe = "join",
            ke = "toLowerCase",
            Se = new function() {
                var e = [];
                this.set = function(t) {
                    e[t] = !0
                }, this.M = function() {
                    for (var t = [], n = 0; n < e[me]; n++) e[n] && (t[z.floor(n / 6)] = t[z.floor(n / 6)] ^ 1 << n % 6);
                    for (n = 0; n < t[me]; n++) t[n] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(t[n] || 0);
                    return t[xe]("") + "~"
                }
            },
            Ce = function(e, t, i, r) {
                try {
                    e.addEventListener ? e.addEventListener(t, i, !!r) : e.attachEvent && e.attachEvent("on" + t, i)
                } catch (s) {
                    n(27)
                }
            },
            Le = function(e, t, n) {
                e.removeEventListener ? e.removeEventListener(t, n, !1) : e.detachEvent && e.detachEvent("on" + t, n)
            },
            qe = function() {
                this.keys = [], this.w = {}, this.m = {}
            };
        qe[pe].set = function(e, t, n) {
            this.keys[oe](e), n ? this.m[":" + e] = t : this.w[":" + e] = t
        }, qe[pe].get = function(e) {
            return this.m[Z](":" + e) ? this.m[":" + e] : this.w[":" + e]
        }, qe[pe].map = function(e) {
            for (var t = 0; t < this.keys[me]; t++) {
                var n = this.keys[t],
                    i = this.get(n);
                i && e(n, i)
            }
        };
        var Ae = N,
            Te = document,
            _e = function(e) {
                var t = Ae._gaUserPrefs;
                if (t && t.ioo && t.ioo() || e && !0 === Ae["ga-disable-" + e]) return !0;
                try {
                    var n = Ae.external;
                    if (n && n._gaUserPrefs && "oo" == n._gaUserPrefs) return !0
                } catch (i) {}
                return !1
            },
            Ee = function(e) {
                O(e, 100)
            },
            Pe = function(e) {
                var t = [],
                    n = Te[le][K](";");
                e = new RegExp("^\\s*" + e + "=\\s*(.*?)\\s*$");
                for (var i = 0; i < n[me]; i++) {
                    var r = n[i][U](e);
                    r && t[oe](r[1])
                }
                return t
            },
            De = function(e, t, i, r, s, o) {
                if (s = _e(s) ? !1 : Ie[ce](Te[Q][ee]) || "/" == i && Me[ce](r) ? !1 : !0, !s) return !1;
                if (t && 1200 < t[me] && (t = t[je](0, 1200), n(24)), i = e + "=" + t + "; path=" + i + "; ", o && (i += "expires=" + new Date((new Date)[G]() + o).toGMTString() + "; "), r && "none" != r && (i += "domain=" + r + ";"), r = Te[le], Te.cookie = i, !(r = r != Te[le])) e: {
                    for (e = Pe(e), r = 0; r < e[me]; r++)
                        if (t == e[r]) {
                            r = !0;
                            break e
                        }
                    r = !1
                }
                return r
            },
            Me = new RegExp(/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/),
            Ie = new RegExp(/(^|\.)doubleclick\.net$/i),
            Re = function() {
                for (var e = Ae[$e].userAgent + (Te[le] ? Te[le] : "") + (Te.referrer ? Te.referrer : ""), t = e[me], n = Ae.history[me]; n > 0;) e += n-- ^ t++;
                return R(e)
            },
            He = function() {
                return m() + "//www.google-analytics.com"
            },
            Ne = function(e) {
                t(this, "len"), this.message = e + "-8192"
            },
            Oe = function(e) {
                t(this, "ff2post"), this.message = e + "-2036"
            },
            ze = function(e, t, n, i) {
                if (n = n || l, i && (i = n, Ae[$e].sendBeacon && Ae[$e].sendBeacon(e, t) ? (i(), i = !0) : i = !1), !i)
                    if (2036 >= t[me]) Fe(e, t, n);
                    else {
                        if (!(8192 >= t[me])) throw new Ne(t[me]);
                        if (0 <= Ae[$e].userAgent[de]("Firefox") && ![].reduce) throw new Oe(t[me]);
                        Ue(e, t, n) || Be(e, t, n) || We(t, n) || n()
                    }
            },
            Fe = function(e, t, n) {
                var i = u(e + "?" + t);
                i.onload = i.onerror = function() {
                    i.onload = null, i.onerror = null, n()
                }
            },
            Be = function(e, t, n) {
                var i;
                return (i = Ae.XDomainRequest) ? (i = new i, i.open("POST", e), i.onerror = function() {
                    n()
                }, i.onload = n, i[W](t), !0) : !1
            },
            Ue = function(e, t, n) {
                var i = Ae.XMLHttpRequest;
                if (!i) return !1;
                var r = new i;
                return "withCredentials" in r ? (r.open("POST", e, !0), r.withCredentials = !0, r.setRequestHeader("Content-Type", "text/plain"), r.onreadystatechange = function() {
                    4 == r.readyState && (n(), r = null)
                }, r[W](t), !0) : !1
            },
            We = function(e, n) {
                if (!Te.body) return Ee(function() {
                    We(e, n)
                }), !0;
                e = H(e);
                try {
                    var i = Te[Y]('<iframe name="' + e + '"></iframe>')
                } catch (r) {
                    i = Te[Y]("iframe"), t(i, e)
                }
                i.height = "0", i.width = "0", i.style.display = "none", i.style.visibility = "hidden";
                var s = Te[Q],
                    s = He() + "/analytics_iframe.html#" + H(s[ne] + "//" + s[X] + "/favicon.ico"),
                    o = function() {
                        i.src = "", i[we] && i[we].removeChild(i)
                    };
                Ce(Ae, "beforeunload", o);
                var a = !1,
                    c = 0,
                    u = function() {
                        if (!a) {
                            try {
                                if (c > 9 || i.contentWindow[Q][X] == Te[Q][X]) return a = !0, o(), Le(Ae, "beforeunload", o), void n()
                            } catch (e) {}
                            c++, O(u, 200)
                        }
                    };
                return Ce(i, "load", u), Te.body.appendChild(i), i.src = s, !0
            },
            Ve = function() {
                this.t = []
            };
        Ve[pe].add = function(e) {
            this.t[oe](e)
        }, Ve[pe].D = function(e) {
            try {
                for (var t = 0; t < this.t[me]; t++) {
                    var n = e.get(this.t[t]);
                    n && i(n) && n[be](Ae, e)
                }
            } catch (r) {}
            t = e.get(pt), t != l && i(t) && (e.set(pt, l, !0), O(t, 10))
        };
        var Ye = function() {
                return z.round(2147483647 * z.random())
            },
            Je = function() {
                try {
                    var e = new Uint32Array(1);
                    return Ae.crypto.getRandomValues(e), 2147483647 & e[0]
                } catch (t) {
                    return Ye()
                }
            },
            Ge = Ye,
            Xe = function() {
                this.data = new qe
            },
            Ke = new qe,
            Qe = [];
        Xe[pe].get = function(e) {
            var t = it(e),
                n = this[B].get(e);
            return t && void 0 == n && (n = i(t[he]) ? t[he]() : t[he]), t && t.n ? t.n(this, e, n) : n
        };
        var Ze = function(e, t) {
                var n = e.get(t);
                return void 0 == n ? "" : "" + n
            },
            et = function(e, t) {
                var n = e.get(t);
                return void 0 == n || "" === n ? 0 : 1 * n
            };
        Xe[pe].set = function(e, t, n) {
            if (e)
                if ("object" == typeof e)
                    for (var i in e) e[Z](i) && tt(this, i, e[i], n);
                else tt(this, e, t, n)
        };
        var tt = function(e, t, n, i) {
                if (void 0 != n) switch (t) {
                    case xn:
                        bi[ce](n)
                }
                var r = it(t);
                r && r.o ? r.o(e, t, n, i) : e[B].set(t, n, i)
            },
            nt = function(e, n, i, r, s) {
                t(this, e), this.p = n, this.n = r, this.o = s, this.defaultValue = i
            },
            it = function(e) {
                var t = Ke.get(e);
                if (!t)
                    for (var n = 0; n < Qe[me]; n++) {
                        var i = Qe[n],
                            r = i[0].exec(e);
                        if (r) {
                            t = i[1](r), Ke.set(t[fe], t);
                            break
                        }
                    }
                return t
            },
            rt = function(e) {
                var t;
                return Ke.map(function(n, i) {
                    i.p == e && (t = i)
                }), t && t[fe]
            },
            st = function(e, t, n, i, r) {
                return e = new nt(e, t, n, i, r), Ke.set(e[fe], e), e[fe]
            },
            ot = function(e, t) {
                Qe[oe]([new RegExp("^" + e + "$"), t])
            },
            at = function(e, t, n) {
                return st(e, t, n, void 0, ct)
            },
            ct = function() {},
            ut = s(N.GoogleAnalyticsObject) && a(N.GoogleAnalyticsObject) || "ga",
            lt = !1,
            dt = at("apiVersion", "v"),
            ht = at("clientVersion", "_v");
        st("anonymizeIp", "aip");
        var ft = st("adSenseId", "a"),
            mt = st("hitType", "t"),
            pt = st("hitCallback"),
            gt = st("hitPayload");
        st("nonInteraction", "ni"), st("currencyCode", "cu");
        var vt = st("useBeacon", void 0, !1);
        st("dataSource", "ds"), st("sessionControl", "sc", ""), st("sessionGroup", "sg"), st("queueTime", "qt");
        var bt = st("_s", "_s");
        st("screenName", "cd");
        var yt = st("location", "dl", ""),
            jt = st("referrer", "dr"),
            $t = st("page", "dp", "");
        st("hostname", "dh");
        var wt = st("language", "ul"),
            xt = st("encoding", "de");
        st("title", "dt", function() {
            return Te.title || void 0
        }), ot("contentGroup([0-9]+)", function(e) {
            return new nt(e[0], "cg" + e[1])
        });
        var kt = st("screenColors", "sd"),
            St = st("screenResolution", "sr"),
            Ct = st("viewportSize", "vp"),
            Lt = st("javaEnabled", "je"),
            qt = st("flashVersion", "fl");
        st("campaignId", "ci"), st("campaignName", "cn"), st("campaignSource", "cs"), st("campaignMedium", "cm"), st("campaignKeyword", "ck"), st("campaignContent", "cc");
        var At = st("eventCategory", "ec"),
            Tt = st("eventAction", "ea"),
            _t = st("eventLabel", "el"),
            Et = st("eventValue", "ev"),
            Pt = st("socialNetwork", "sn"),
            Dt = st("socialAction", "sa"),
            Mt = st("socialTarget", "st"),
            It = st("l1", "plt"),
            Rt = st("l2", "pdt"),
            Ht = st("l3", "dns"),
            Nt = st("l4", "rrt"),
            Ot = st("l5", "srt"),
            zt = st("l6", "tcp"),
            Ft = st("l7", "dit"),
            Bt = st("l8", "clt"),
            Ut = st("timingCategory", "utc"),
            Wt = st("timingVar", "utv"),
            Vt = st("timingLabel", "utl"),
            Yt = st("timingValue", "utt");
        st("appName", "an"), st("appVersion", "av", ""), st("appId", "aid", ""), st("appInstallerId", "aiid", ""), st("exDescription", "exd"), st("exFatal", "exf");
        var Jt = st("expId", "xid"),
            Gt = st("expVar", "xvar"),
            Xt = st("_utma", "_utma"),
            Kt = st("_utmz", "_utmz"),
            Qt = st("_utmht", "_utmht"),
            Zt = st("_hc", void 0, 0),
            en = st("_ti", void 0, 0),
            tn = st("_to", void 0, 20);
        ot("dimension([0-9]+)", function(e) {
            return new nt(e[0], "cd" + e[1])
        }), ot("metric([0-9]+)", function(e) {
            return new nt(e[0], "cm" + e[1])
        }), st("linkerParam", void 0, void 0, E, ct);
        var nn = st("usage", "_u", void 0, function() {
            return Se.M()
        }, ct);
        st("forceSSL", void 0, void 0, function() {
            return lt
        }, function(e, t, i) {
            n(34), lt = !!i
        });
        var rn = st("_j1", "jid"),
            sn = st("_j2", "gjid");
        ot("\\&(.*)", function(e) {
            var t = new nt(e[0], e[1]),
                n = rt(e[0][je](1));
            return n && (t.n = function(e) {
                return e.get(n)
            }, t.o = function(e, t, i, r) {
                e.set(n, i, r)
            }, t.p = void 0), t
        });
        var on = at("_oot"),
            an = st("previewTask"),
            cn = st("checkProtocolTask"),
            un = st("validationTask"),
            ln = st("checkStorageTask"),
            dn = st("historyImportTask"),
            hn = st("samplerTask"),
            fn = at("_rlt"),
            mn = st("buildHitTask"),
            pn = st("sendHitTask"),
            gn = st("ceTask"),
            vn = st("devIdTask"),
            bn = st("timingTask"),
            yn = st("displayFeaturesTask"),
            jn = at("name"),
            $n = at("clientId", "cid"),
            wn = st("userId", "uid"),
            xn = at("trackingId", "tid"),
            kn = at("cookieName", void 0, "_ga"),
            Sn = at("cookieDomain"),
            Cn = at("cookiePath", void 0, "/"),
            Ln = at("cookieExpires", void 0, 63072e3),
            qn = at("legacyCookieDomain"),
            An = at("legacyHistoryImport", void 0, !0),
            Tn = at("storage", void 0, "cookie"),
            _n = at("allowLinker", void 0, !1),
            En = at("allowAnchor", void 0, !0),
            Pn = at("sampleRate", "sf", 100),
            Dn = at("siteSpeedSampleRate", void 0, 1),
            Mn = at("alwaysSendReferrer", void 0, !1),
            In = st("transportUrl"),
            Rn = st("_r", "_r"),
            Hn = st("_dfr", void 0, 1),
            Nn = function(e) {
                this.V = e, this.fa = void 0, this.$ = !1, this.ha = void 0, this.ea = 1
            },
            On = function(e, t, n) {
                if (e.fa && e.$) return 0;
                if (e.$ = !0, t) {
                    if (e.ha && et(t, e.ha)) return et(t, e.ha);
                    if (0 == t.get(Dn)) return 0
                }
                return 0 == e.V ? 0 : (void 0 === n && (n = Je()), 0 == n % e.V ? z.floor(n / e.V) % e.ea + 1 : 0)
            },
            zn = function(e, t) {
                var n = z.min(et(e, Dn), 100);
                if (!(R(Ze(e, $n)) % 100 >= n) && (n = {}, Fn(n) || Bn(n))) {
                    var i = n[It];
                    void 0 == i || 1 / 0 == i || isNaN(i) || (i > 0 ? (Un(n, Ht), Un(n, zt), Un(n, Ot), Un(n, Rt), Un(n, Nt), Un(n, Ft), Un(n, Bt), t(n)) : Ce(Ae, "load", function() {
                        zn(e, t)
                    }, !1))
                }
            },
            Fn = function(e) {
                var t = Ae.performance || Ae.webkitPerformance,
                    t = t && t.timing;
                if (!t) return !1;
                var n = t.navigationStart;
                return 0 == n ? !1 : (e[It] = t.loadEventStart - n, e[Ht] = t.domainLookupEnd - t.domainLookupStart, e[zt] = t.connectEnd - t.connectStart, e[Ot] = t.responseStart - t.requestStart, e[Rt] = t.responseEnd - t.responseStart, e[Nt] = t.fetchStart - n, e[Ft] = t.domInteractive - n, e[Bt] = t.domContentLoadedEventStart - n, !0)
            },
            Bn = function(e) {
                if (Ae.top != Ae) return !1;
                var t = Ae.external,
                    n = t && t.onloadT;
                return t && !t.isValidLoadTime && (n = void 0), n > 2147483648 && (n = void 0), n > 0 && t.setPageReadyTime(), void 0 == n ? !1 : (e[It] = n, !0)
            },
            Un = function(e, t) {
                var n = e[t];
                (isNaN(n) || 1 / 0 == n || 0 > n) && (e[t] = void 0)
            },
            Wn = function(e) {
                return function(t) {
                    "pageview" != t.get(mt) || e.I || (e.I = !0, zn(t, function(t) {
                        e[W]("timing", t)
                    }))
                }
            },
            Vn = !1,
            Yn = function(e) {
                if ("cookie" == Ze(e, Tn)) {
                    var t = Ze(e, kn),
                        i = Xn(e),
                        r = ei(Ze(e, Cn)),
                        s = Qn(Ze(e, Sn)),
                        o = 1e3 * et(e, Ln),
                        a = Ze(e, xn);
                    if ("auto" != s) De(t, i, r, s, a, o) && (Vn = !0);
                    else {
                        n(32);
                        var c;
                        if (i = [], s = p()[K]("."), 4 != s[me] || (c = s[s[me] - 1], parseInt(c, 10) != c)) {
                            for (c = s[me] - 2; c >= 0; c--) i[oe](s[ue](c)[xe]("."));
                            i[oe]("none"), c = i
                        } else c = ["none"];
                        for (var u = 0; u < c[me]; u++)
                            if (s = c[u], e[B].set(Sn, s), i = Xn(e), De(t, i, r, s, a, o)) return void(Vn = !0);
                        e[B].set(Sn, "auto")
                    }
                }
            },
            Jn = function(e) {
                if ("cookie" == Ze(e, Tn) && !Vn && (Yn(e), !Vn)) throw "abort"
            },
            Gn = function(e) {
                if (e.get(An)) {
                    var t = Ze(e, Sn),
                        i = Ze(e, qn) || p(),
                        r = T("__utma", i, t);
                    r && (n(19), e.set(Qt, (new Date)[G](), !0), e.set(Xt, r.R), (t = T("__utmz", i, t)) && r[ae] == t[ae] && e.set(Kt, t.R))
                }
            },
            Xn = function(e) {
                var t = h(Ze(e, $n)),
                    n = Zn(Ze(e, Sn));
                return e = ti(Ze(e, Cn)), e > 1 && (n += "-" + e), ["GA1", n, t][xe](".")
            },
            Kn = function(e, t, n) {
                for (var i, r = [], s = [], o = 0; o < e[me]; o++) {
                    var a = e[o];
                    a.r[n] == t ? r[oe](a) : void 0 == i || a.r[n] < i ? (s = [a], i = a.r[n]) : a.r[n] == i && s[oe](a)
                }
                return 0 < r[me] ? r : s
            },
            Qn = function(e) {
                return 0 == e[de](".") ? e.substr(1) : e
            },
            Zn = function(e) {
                return Qn(e)[K](".")[me]
            },
            ei = function(e) {
                return e ? (1 < e[me] && e.lastIndexOf("/") == e[me] - 1 && (e = e.substr(0, e[me] - 1)), 0 != e[de]("/") && (e = "/" + e), e) : "/"
            },
            ti = function(e) {
                return e = ei(e), "/" == e ? 1 : e[K]("/")[me]
            },
            ni = new RegExp(/^https?:\/\/([^\/:]+)/),
            ii = /(.*)([?&#])(?:_ga=[^&#]*)(?:&?)(.*)/,
            ri = function(e) {
                n(48), this.target = e, this.T = !1
            };
        ri[pe].Q = function(t, n) {
            if (t.tagName) {
                if ("a" == t.tagName[ke]()) return void(t[ie] && e(t, si(this, t[ie], n)));
                if ("form" == t.tagName[ke]()) return oi(this, t)
            }
            return "string" == typeof t ? si(this, t, n) : void 0
        };
        var si = function(e, t, n) {
                var i = ii.exec(t);
                i && 3 <= i[me] && (t = i[1] + (i[3] ? i[2] + i[3] : "")), e = e[ve].get("linkerParam");
                var r = t[de]("?"),
                    i = t[de]("#");
                return n ? t += (-1 == i ? "#" : "&") + e : (n = -1 == r ? "?" : "&", t = -1 == i ? t + (n + e) : t[je](0, i) + n + e + t[je](i)), t
            },
            oi = function(e, t) {
                if (t && t[re]) {
                    var n = e[ve].get("linkerParam")[K]("=")[1];
                    if ("get" == t.method[ke]()) {
                        for (var i = t.childNodes || [], r = 0; r < i[me]; r++)
                            if ("_ga" == i[r][fe]) return void i[r][J]("value", n);
                        i = Te[Y]("input"), i[J]("type", "hidden"), i[J]("name", "_ga"), i[J]("value", n), t.appendChild(i)
                    } else "post" == t.method[ke]() && (t.action = si(e, t[re]))
                }
            };
        ri[pe].S = function(t, i, r) {
            function s(r) {
                try {
                    r = r || Ae.event;
                    var s;
                    e: {
                        var a = r[ve] || r.srcElement;
                        for (r = 100; a && r > 0;) {
                            if (a[ie] && a.nodeName[U](/^a(?:rea)?$/i)) {
                                s = a;
                                break e
                            }
                            a = a[we], r--
                        }
                        s = {}
                    }("http:" == s[ne] || "https:" == s[ne]) && D(t, s[ee] || "") && s[ie] && e(s, si(o, s[ie], i))
                } catch (c) {
                    n(26)
                }
            }
            var o = this;
            if (this.T || (this.T = !0, Ce(Te, "mousedown", s, !1), Ce(Te, "touchstart", s, !1), Ce(Te, "keyup", s, !1)), r) {
                r = function(e) {
                    if (e = e || Ae.event, (e = e[ve] || e.srcElement) && e[re]) {
                        var n = e[re][U](ni);
                        n && D(t, n[1]) && oi(o, e)
                    }
                };
                for (var a = 0; a < Te.forms[me]; a++) Ce(Te.forms[a], "submit", r)
            }
        };
        var ai, ci = function(e, t, n, i) {
                this.U = t, this.aa = n, (t = i) || (t = (t = Ze(e, jn)) && "t0" != t ? fi[ce](t) ? "_gat_" + h(Ze(e, xn)) : "_gat_" + h(t) : "_gat"), this.Y = t
            },
            ui = function(e, t) {
                var n = t.get(mn);
                t.set(mn, function(t) {
                    li(e, t);
                    var i = n(t);
                    return di(e, t), i
                });
                var i = t.get(pn);
                t.set(pn, function(t) {
                    var n = i(t);
                    return hi(e, t), n
                })
            },
            li = function(e, t) {
                t.get(e.U) || ("1" == Pe(e.Y)[0] ? t.set(e.U, "", !0) : t.set(e.U, "" + Ge(), !0))
            },
            di = function(e, t) {
                t.get(e.U) && De(e.Y, "1", t.get(Cn), t.get(Sn), t.get(xn), 6e5)
            },
            hi = function(e, t) {
                if (t.get(e.U)) {
                    var n = new qe,
                        i = function(e) {
                            n.set(it(e).p, t.get(e))
                        };
                    i(dt), i(ht), i(xn), i($n), i(e.U), i(nn);
                    var r = e.aa;
                    n.map(function(e, t) {
                        r += d(e) + "=" + d("" + t) + "&"
                    }), r += "z=" + Ge(), u(r), t.set(e.U, "", !0)
                }
            },
            fi = /^gtm\d+$/,
            mi = function(e, t) {
                var i = e.b;
                if (!i.get("dcLoaded")) {
                    n(29), Ae._gaq && n(52), t = t || {};
                    var r;
                    t[kn] && (r = h(t[kn])), r = new ci(i, rn, "https://stats.g.doubleclick.net/collect?t=dc&aip=1&", r), ui(r, i), i.set("dcLoaded", !0)
                }
            },
            pi = function(e) {
                var t;
                e.get("dcLoaded") || "cookie" != e.get(Tn) ? t = !1 : (t = new Nn(et(e, Hn)), t = On(t, null, R(e.get($n)))), t && (n(51), t = new ci(e, rn), li(t, e), di(t, e), e.get(t.U) && (e.set(Rn, 1, !0), e.set(In, He() + "/r/collect", !0)))
            },
            gi = function(e, t) {
                var i = e.b;
                if (!i.get("_rlsaLoaded")) {
                    if (n(38), t = t || {}, t[kn]) var r = h(t[kn]);
                    r = new ci(i, sn, "https://www.google.com/ads/ga-audiences?t=sr&aip=1&", r), ui(r, i), i.set("_rlsaLoaded", !0), Ai("displayfeatures", e, t)
                }
            },
            vi = function(e, t, n) {
                if (!ai) {
                    var i;
                    i = Te[Q][ae];
                    var r = Ae[fe],
                        s = /^#?gaso=([^&]*)/;
                    (r = (i = (i = i && i[U](s) || r && r[U](s)) ? i[1] : Pe("GASO")[0] || "") && i[U](/^(?:!([-0-9a-z.]{1,40})!)?([-.\w]{10,1200})$/i)) && (De("GASO", "" + i, n, t, e, 0),
                        N._udo || (N._udo = t), N._utcp || (N._utcp = n), e = r[1], f("https://www.google.com/analytics/web/inpage/pub/inpage.js?" + (e ? "prefix=" + e + "&" : "") + Ge(), "_gasojs")), ai = !0
                }
            },
            bi = /^(UA|YT|MO|GP)-(\d+)-(\d+)$/,
            yi = function(e) {
                function t(e, t) {
                    i.b[B].set(e, t)
                }

                function n(e, n) {
                    t(e, n), i.filters.add(e)
                }
                var i = this;
                this.b = new Xe, this.filters = new Ve, t(jn, e[jn]), t(xn, a(e[xn])), t(kn, e[kn]), t(Sn, e[Sn] || p()), t(Cn, e[Cn]), t(Ln, e[Ln]), t(qn, e[qn]), t(An, e[An]), t(_n, e[_n]), t(En, e[En]), t(Pn, e[Pn]), t(Dn, e[Dn]), t(Mn, e[Mn]), t(Tn, e[Tn]), t(wn, e[wn]), t(dt, 1), t(ht, "j30"), n(on, y), n(an, k), n(cn, j), n(un, C), n(ln, Jn), n(dn, Gn), n(hn, b), n(fn, L), n(gn, x), n(vn, S), n(yn, pi), n(mn, $), n(pn, w), n(bn, Wn(this)), ji(this.b, e[$n]), $i(this.b), this.b.set(ft, M()), vi(this.b.get(xn), this.b.get(Sn), this.b.get(Cn))
            },
            ji = function(e, t) {
                if ("cookie" == Ze(e, Tn)) {
                    Vn = !1;
                    var i;
                    e: {
                        var r = Pe(Ze(e, kn));
                        if (r && !(1 > r[me])) {
                            i = [];
                            for (var s = 0; s < r[me]; s++) {
                                var o;
                                o = r[s][K](".");
                                var a = o.shift();
                                ("GA1" == a || "1" == a) && 1 < o[me] ? (a = o.shift()[K]("-"), 1 == a[me] && (a[1] = "1"), a[0] *= 1, a[1] *= 1, o = {
                                    r: a,
                                    s: o[xe](".")
                                }) : o = void 0, o && i[oe](o)
                            }
                            if (1 == i[me]) {
                                n(13), i = i[0].s;
                                break e
                            }
                            if (0 != i[me]) {
                                if (n(14), r = Zn(Ze(e, Sn)), i = Kn(i, r, 0), 1 == i[me]) {
                                    i = i[0].s;
                                    break e
                                }
                                r = ti(Ze(e, Cn)), i = Kn(i, r, 1), i = i[0] && i[0].s;
                                break e
                            }
                            n(12)
                        }
                        i = void 0
                    }
                    i || (i = Ze(e, Sn), r = Ze(e, qn) || p(), i = T("__utma", r, i), (i = void 0 == i ? void 0 : i.O[1] + "." + i.O[2]) && n(10)), i && (e[B].set($n, i), Vn = !0)
                }
                i = e.get(En), (s = (i = Te[Q][i ? "href" : "search"][U]("(?:&|#|\\?)" + d("_ga")[F](/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1") + "=([^&#]*)")) && 2 == i[me] ? i[1] : "") && (e.get(_n) ? (i = s[de]("."), -1 == i ? n(22) : (r = s[je](i + 1), "1" != s[je](0, i) ? n(22) : (i = r[de]("."), -1 == i ? n(22) : (s = r[je](0, i), i = r[je](i + 1), s != P(i, 0) && s != P(i, -1) && s != P(i, -2) ? n(23) : (n(11), e[B].set($n, i)))))) : n(21)), t && (n(9), e[B].set($n, d(t))), e.get($n) || ((i = (i = Ae.gaGlobal && Ae.gaGlobal.vid) && -1 != i[te](/^(?:utma\.)?\d+\.\d+$/) ? i : void 0) ? (n(17), e[B].set($n, i)) : (n(8), e[B].set($n, c()))), Yn(e)
            },
            $i = function(e) {
                var t = Ae[$e],
                    i = Ae.screen,
                    r = Te[Q];
                if (e.set(jt, g(e.get(Mn))), r) {
                    var s = r.pathname || "";
                    "/" != s.charAt(0) && (n(31), s = "/" + s), e.set(yt, r[ne] + "//" + r[ee] + s + r[te])
                }
                i && e.set(St, i.width + "x" + i.height), i && e.set(kt, i.colorDepth + "-bit");
                var i = Te.documentElement,
                    a = (s = Te.body) && s[ge] && s[ye],
                    c = [];
                if (i && i[ge] && i[ye] && ("CSS1Compat" === Te.compatMode || !a) ? c = [i[ge], i[ye]] : a && (c = [s[ge], s[ye]]), i = 0 >= c[0] || 0 >= c[1] ? "" : c[xe]("x"), e.set(Ct, i), e.set(qt, A()), e.set(xt, Te.characterSet || Te.charset), e.set(Lt, t && "function" == typeof t.javaEnabled && t.javaEnabled() || !1), e.set(wt, (t && (t.language || t.browserLanguage) || "")[ke]()), r && e.get(En) && (t = Te[Q][ae])) {
                    for (t = t[K](/[?&#]+/), r = [], i = 0; i < t[me]; ++i)(o(t[i], "utm_id") || o(t[i], "utm_campaign") || o(t[i], "utm_source") || o(t[i], "utm_medium") || o(t[i], "utm_term") || o(t[i], "utm_content") || o(t[i], "gclid") || o(t[i], "dclid") || o(t[i], "gclsrc")) && r[oe](t[i]);
                    0 < r[me] && (t = "#" + r[xe]("&"), e.set(yt, e.get(yt) + t))
                }
            };
        yi[pe].get = function(e) {
            return this.b.get(e)
        }, yi[pe].set = function(e, t) {
            this.b.set(e, t)
        };
        var wi = {
            pageview: [$t],
            event: [At, Tt, _t, Et],
            social: [Pt, Dt, Mt],
            timing: [Ut, Wt, Yt, Vt]
        };
        yi[pe].send = function(e) {
            if (!(1 > arguments[me])) {
                var t, i;
                "string" == typeof arguments[0] ? (t = arguments[0], i = [][ue][be](arguments, 1)) : (t = arguments[0] && arguments[0][mt], i = arguments), t && (i = v(wi[t] || [], i), i[mt] = t, this.b.set(i, void 0, !0), this.filters.D(this.b), this.b[B].m = {}, n(44))
            }
        };
        var xi, ki, Si, Ci = function(e) {
                return "prerender" == Te.visibilityState ? !1 : (e(), !0)
            },
            Li = /^(?:(\w+)\.)?(?:(\w+):)?(\w+)$/,
            qi = function(e) {
                if (i(e[0])) this.u = e[0];
                else {
                    var t = Li.exec(e[0]);
                    if (null != t && 4 == t[me] && (this.c = t[1] || "t0", this.e = t[2] || "", this.d = t[3], this.a = [][ue][be](e, 1), this.e || (this.A = "create" == this.d, this.i = "require" == this.d, this.g = "provide" == this.d, this.ba = "remove" == this.d), this.i && (3 <= this.a[me] ? (this.X = this.a[1], this.W = this.a[2]) : this.a[1] && (s(this.a[1]) ? this.X = this.a[1] : this.W = this.a[1]))), t = e[1], e = e[2], !this.d) throw "abort";
                    if (this.i && (!s(t) || "" == t)) throw "abort";
                    if (this.g && (!s(t) || "" == t || !i(e))) throw "abort";
                    if (I(this.c) || I(this.e)) throw "abort";
                    if (this.g && "t0" != this.c) throw "abort"
                }
            };
        xi = new qe, Si = new qe, ki = {
            ec: 45,
            ecommerce: 46,
            linkid: 47
        };
        var Ai = function(e, t, r) {
                t == Ei ? n(35) : t.get(jn);
                var s = xi.get(e);
                return i(s) ? (t.plugins_ = t.plugins_ || new qe, t.plugins_.get(e) ? !0 : (t.plugins_.set(e, new s(t, r || {})), !0)) : !1
            },
            Ti = function(t) {
                function n(e) {
                    var t = (e[ee] || "")[K](":")[0][ke](),
                        n = (e[ne] || "")[ke](),
                        n = 1 * e[V] || ("http:" == n ? 80 : "https:" == n ? 443 : "");
                    return e = e.pathname || "", o(e, "/") || (e = "/" + e), [t, "" + n, e]
                }
                var i = Te[Y]("a");
                e(i, Te[Q][ie]);
                var r = (i[ne] || "")[ke](),
                    s = n(i),
                    a = i[te] || "",
                    c = r + "//" + s[0] + (s[1] ? ":" + s[1] : "");
                return o(t, "//") ? t = r + t : o(t, "/") ? t = c + t : !t || o(t, "?") ? t = c + s[2] + (t || a) : 0 > t[K]("/")[0][de](":") && (t = c + s[2][je](0, s[2].lastIndexOf("/")) + "/" + t), e(i, t), r = n(i), {
                    protocol: (i[ne] || "")[ke](),
                    host: r[0],
                    port: r[1],
                    path: r[2],
                    G: i[te] || "",
                    url: t || ""
                }
            },
            _i = {
                ga: function() {
                    _i.f = []
                }
            };
        _i.ga(), _i.D = function(e) {
            var t = _i.J[se](_i, arguments),
                t = _i.f.concat(t);
            for (_i.f = []; 0 < t[me] && !_i.v(t[0]) && (t.shift(), !(0 < _i.f[me])););
            _i.f = _i.f.concat(t)
        }, _i.J = function(e) {
            for (var t = [], r = 0; r < arguments[me]; r++) try {
                var s = new qi(arguments[r]);
                if (s.g) xi.set(s.a[0], s.a[1]);
                else {
                    if (s.i) {
                        var a = s,
                            c = a.a[0];
                        if (!i(xi.get(c)) && !Si.get(c)) {
                            ki[Z](c) && n(ki[c]);
                            var u = a.X;
                            if (!u && ki[Z](c) ? (n(39), u = c + ".js") : n(43), u) {
                                u && 0 <= u[de]("/") || (u = m() + "//www.google-analytics.com/plugins/ua/" + u);
                                var l, d = Ti(u),
                                    a = void 0,
                                    h = d[ne],
                                    p = Te[Q][ne],
                                    a = "https:" == h || h == p ? !0 : "http:" != h ? !1 : "http:" == p;
                                if (l = a) {
                                    var a = d,
                                        g = Ti(Te[Q][ie]);
                                    if (a.G || 0 <= a.url[de]("?") || 0 <= a.path[de]("://")) l = !1;
                                    else if (a[X] == g[X] && a[V] == g[V]) l = !0;
                                    else {
                                        var v = "http:" == a[ne] ? 80 : 443;
                                        l = "www.google-analytics.com" == a[X] && (a[V] || v) == v && o(a.path, "/plugins/") ? !0 : !1
                                    }
                                }
                                l && (f(d.url), Si.set(c, !0))
                            }
                        }
                    }
                    t[oe](s)
                }
            } catch (b) {}
            return t
        }, _i.v = function(e) {
            try {
                if (e.u) e.u[be](Ae, Ei.j("t0"));
                else {
                    var t = e.c == ut ? Ei : Ei.j(e.c);
                    if (e.A) "t0" == e.c && Ei.create[se](Ei, e.a);
                    else if (e.ba) Ei.remove(e.c);
                    else if (t)
                        if (e.i) {
                            if (!Ai(e.a[0], t, e.W)) return !0
                        } else if (e.e) {
                        var n = e.d,
                            i = e.a,
                            r = t.plugins_.get(e.e);
                        r[n][se](r, i)
                    } else t[e.d][se](t, e.a)
                }
            } catch (s) {}
        };
        var Ei = function(e) {
            n(1), _i.D[se](_i, [arguments])
        };
        Ei.h = {}, Ei.P = [], Ei.L = 0, Ei.answer = 42;
        var Pi = [xn, Sn, jn];
        Ei.create = function(e) {
                var t = v(Pi, [][ue][be](arguments));
                t[jn] || (t[jn] = "t0");
                var n = "" + t[jn];
                return Ei.h[n] ? Ei.h[n] : (t = new yi(t), Ei.h[n] = t, Ei.P[oe](t), t)
            }, Ei.remove = function(e) {
                for (var t = 0; t < Ei.P[me]; t++)
                    if (Ei.P[t].get(jn) == e) {
                        Ei.P.splice(t, 1), Ei.h[e] = null;
                        break
                    }
            }, Ei.j = function(e) {
                return Ei.h[e]
            }, Ei.K = function() {
                return Ei.P[ue](0)
            }, Ei.N = function() {
                "ga" != ut && n(49);
                var e = Ae[ut];
                if (!e || 42 != e.answer) {
                    Ei.L = e && e.l, Ei.loaded = !0;
                    var t = Ae[ut] = Ei;
                    q("create", t, t.create, 3), q("remove", t, t.remove), q("getByName", t, t.j, 5), q("getAll", t, t.K, 6), t = yi[pe], q("get", t, t.get, 7), q("set", t, t.set, 4), q("send", t, t[W], 2), t = Xe[pe], q("get", t, t.get), q("set", t, t.set), (Ae.gaplugins = Ae.gaplugins || {}).Linker = ri, t = ri[pe], xi.set("linker", ri), q("decorate", t, t.Q, 20), q("autoLink", t, t.S, 25), xi.set("displayfeatures", mi), xi.set("adfeatures", gi), e = e && e.q, r(e) ? _i.D[se](Ei, e) : n(50)
                }
            },
            function() {
                var e = Ei.N;
                if (!Ci(e)) {
                    n(16);
                    var t = !1,
                        i = function() {
                            !t && Ci(e) && (t = !0, Le(Te, "visibilitychange", i))
                        };
                    Ce(Te, "visibilitychange", i)
                }
            }()
    }(window),
    function() {
        var e, t, n, i, r;
        window.GoogleAnalyticsObject = "ga", null == window.ga && (window.ga = function() {
                var e;
                return null == (e = window.ga).q && (e.q = []), window.ga.q.push(arguments)
            }), window.ga.l = Date.now(), e = function() {
                var e, t, n, i;
                return e = $("meta[name=analytics-location]").last()[0], t = $("meta[name=analytics-location-params]").last()[0], i = (null != e ? e.content : void 0) || window.location.pathname, n = t ? (window.location.search ? window.location.search + "&" : "?") + t.content : window.location.search, i + n
            }, t = function() {
                return $("meta[name=analytics-location]").length ? document.title.replace(/([\w-]+\/)+[\w\.-]+/g, "private/private") : document.title
            }, r = function() {
                var n, i, r, s, o;
                for (r = window.location.protocol + "//" + window.location.host + e(), window.ga("set", "title", t()), window.ga("set", "location", r), o = document.querySelectorAll("meta.js-ga-set"), n = 0, i = o.length; i > n; n++) s = o[n], window.ga("set", s.name, s.content)
            }, n = function() {
                var n;
                return n = {
                    title: t(),
                    path: e()
                }, window.ga("send", "pageview", n)
            }, i = function() {
                return r(), n()
            },
            function() {
                var e;
                if (e = document.querySelector("meta[name=google-analytics]")) return window.ga("create", e.content, "github.com"), r()
            }(), $(function() {
                return n()
            }), document.addEventListener("pjax:complete", function() {
                return setTimeout(i, 20)
            })
    }.call(this),
    function() {
        var e, t, n, i, r, s = function(e, t) {
                function n() {
                    this.constructor = e
                }
                for (var i in t) o.call(t, i) && (e[i] = t[i]);
                return n.prototype = t.prototype, e.prototype = new n, e.__super__ = t.prototype, e
            },
            o = {}.hasOwnProperty;
        t = require("setimmediate")["default"], e = function(e) {
            function t(e) {
                this.name = "InvalidGAEventValueError", this.message = "The event value in '" + JSON.stringify(e) + "' has to be an integer."
            }
            return s(t, e), t
        }(Error), i = function(n, i) {
            var r;
            if (null == i && (i = !0), n = n.trim().split(/\s*,\s*/), n[3])
                if (/^\d+$/.test(n[3])) n[3] = Number(n[3]);
                else if ($(document.documentElement).hasClass("is-preview-features")) return r = new e(n), void t(function() {
                throw r
            });
            n.unshift("send", "event"), n.push({
                useBeacon: !0,
                nonInteraction: !i
            }), window.ga.apply(null, n)
        }, n = function(e) {
            var t;
            t = $(e.target).closest("[data-ga-click]").attr("data-ga-click"), t && i(t)
        }, r = function(e) {
            window.ga("send", "pageview", e)
        }, $.observe("[data-ga-load]", function() {
            i(this.getAttribute("data-ga-load"), !1)
        }), $.observe("meta[name=analytics-event]", function() {
            i(this.content, !1)
        }), $.observe("meta[name=analytics-virtual-pageview]", function() {
            r(this.content)
        }), window.addEventListener("click", n, !0)
    }.call(this), $.observe(".js-in-app-popup", function(e) {
        setTimeout(function(e) {
            return function() {
                return $(e).submit()
            }
        }(this), 15e3)
    }),
    function() {
        $.pageFocused = function() {
            return new Promise(function(e) {
                var t;
                return t = function() {
                    document.hasFocus() && (e(), document.removeEventListener("visibilitychange", t), window.removeEventListener("focus", t), window.removeEventListener("blur", t))
                }, document.addEventListener("visibilitychange", t), window.addEventListener("focus", t), window.addEventListener("blur", t), t()
            })
        }
    }.call(this),
    function() {
        var e, t, n, i, r, s, o;
        r = 0, n = -1, t = function(e) {
            var t, n, i, r;
            return t = e.getBoundingClientRect(), i = $(window).height(), r = $(window).width(), 0 === t.height ? !1 : t.height < i ? t.top >= 0 && t.left >= 0 && t.bottom <= i && t.right <= r : (n = Math.ceil(i / 2), t.top >= 0 && t.top + n < i)
        }, e = function(e) {
            var n, i, r, s, o, a, c;
            for (s = e.elements, c = [], i = 0, r = s.length; r > i; i++) n = s[i], t(n) ? c.push(null != (o = e["in"]) ? o.call(n, n, e) : void 0) : c.push(null != (a = e.out) ? a.call(n, n, e) : void 0);
            return c
        }, o = function(t) {
            return document.hasFocus() && window.scrollY !== n && (n = window.scrollY, !t.checkPending) ? (t.checkPending = !0, window.requestAnimationFrame(function() {
                return t.checkPending = !1, e(t)
            })) : void 0
        }, i = function(t, n) {
            return 0 === n.elements.length && (window.addEventListener("scroll", n.scrollHandler), $.pageFocused().then(function() {
                return e(n)
            })), n.elements.push(t)
        }, s = function(e, t) {
            var n;
            return n = t.elements.indexOf(e), -1 !== n && t.elements.splice(n, 1), 0 === t.elements.length ? window.removeEventListener("scroll", t.scrollHandler) : void 0
        }, $.inViewport = function(e, t) {
            var n;
            return null != t.call && (t = {
                "in": t
            }), n = {
                id: r++,
                selector: e,
                "in": t["in"],
                out: t.out,
                elements: [],
                checkPending: !1
            }, n.scrollHandler = function() {
                return o(n)
            }, $.observe(e, {
                add: function(e) {
                    return i(e, n)
                },
                remove: function(e) {
                    return s(e, n)
                }
            }), n
        }
    }.call(this), $.interactiveElement = function() {
        var e, t, n;
        return document.activeElement !== document.body ? e = document.activeElement : (t = document.querySelectorAll(":hover"), (n = t.length) && (e = t[n - 1])), $(e)
    },
    function() {
        function e() {
            var e, n, r, s, o, a, c, u, l;
            if (l = this.getAttribute("data-url")) {
                for (u = i(l), a = this.getAttribute("data-id"), r = document.querySelectorAll(".js-issue-link[data-id='" + a + "']"), o = 0, c = r.length; c > o; o++) n = r[o], n.removeAttribute("data-url");
                return e = function(e) {
                    return t(r, e.title)
                }, s = function(e) {
                    return function(n) {
                        var i, s, o;
                        return o = (null != (s = n.response) ? s.status : void 0) || 500, i = function() {
                            switch (o) {
                                case 404:
                                    return this.getAttribute("data-permission-text");
                                default:
                                    return this.getAttribute("data-error-text")
                            }
                        }.call(e), t(r, i)
                    }
                }(this), u.then(e, s)
            }
        }

        function t(e, t) {
            var n, i, r, s;
            for (s = [], i = 0, r = e.length; r > i; i++) n = e[i], s.push(n.setAttribute("title", t));
            return s
        }
        var n = require("github/fetch"),
            i = n.fetchJSON;
        $.observe(".js-issue-link", function() {
            this.addEventListener("mouseenter", e)
        })
    }.call(this), $(document).on("ajaxSuccess", ".js-immediate-updates", function(e, t, n, i) {
        var r, s, o;
        if (this === e.target) {
            s = i.updateContent;
            for (o in s) r = s[o], $(o).updateContent(r)
        }
    }),
    function() {
        $.observe(".labeled-button:checked", {
            add: function() {
                return $(this).parent("label").addClass("selected")
            },
            remove: function() {
                return $(this).parent("label").removeClass("selected")
            }
        })
    }.call(this),
    function() {
        var e;
        e = "is-last-changed", $(document).on("change", "form.js-form-last-changed", function(t) {
            var n, i;
            n = t.target, null != (i = this.querySelector("." + e)) && i.classList.remove(e), n.classList.add(e)
        })
    }.call(this),
    function() {
        var e, t, n, i, r, s = [].indexOf || function(e) {
            for (var t = 0, n = this.length; n > t; t++)
                if (t in this && this[t] === e) return t;
            return -1
        };
        t = null, e = function(e) {
            t && n(t), $(e).fire("menu:activate", function() {
                return $(document).on("keydown.menu", r), $(document).on("click.menu", i), t = e, $(e).performTransition(function() {
                    return e.classList.add("active"), $(e).find(".js-menu-content[aria-hidden]").attr("aria-hidden", "false")
                }), $(e).fire("menu:activated", {
                    async: !0
                })
            })
        }, n = function(e) {
            $(e).fire("menu:deactivate", function() {
                return $(document).off(".menu"), t = null, $(e).performTransition(function() {
                    return e.classList.remove("active"), $(e).find(".js-menu-content[aria-hidden]").attr("aria-hidden", "true")
                }), $(e).fire("menu:deactivated", {
                    async: !0
                })
            })
        }, i = function(e) {
            t && ($(e.target).closest(t)[0] || (e.preventDefault(), n(t)))
        }, r = function(e) {
            t && "esc" === e.hotkey && (s.call($(document.activeElement).parents(), t) >= 0 && document.activeElement.blur(), e.preventDefault(), n(t))
        }, $(document).on("click", ".js-menu-container", function(i) {
            var r, s, o;
            r = this, (o = $(i.target).closest(".js-menu-target")[0]) ? (i.preventDefault(), r === t ? n(r) : e(r)) : (s = $(i.target).closest(".js-menu-content")[0]) || r === t && (i.preventDefault(), n(r))
        }), $(document).on("click", ".js-menu-container .js-menu-close", function(e) {
            n($(this).closest(".js-menu-container")[0]), e.preventDefault()
        }), $.fn.menu = function(t) {
            var i, r;
            return (i = $(this).closest(".js-menu-container")[0]) ? (r = {
                activate: function() {
                    return e(i)
                },
                deactivate: function() {
                    return n(i)
                }
            }, "function" == typeof r[t] ? r[t]() : void 0) : void 0
        }, $.observe(".js-menu-container.active", {
            add: function() {
                return document.body.classList.add("menu-active")
            },
            remove: function() {
                return document.body.classList.remove("menu-active")
            }
        })
    }.call(this),
    function() {
        function e(e) {
            "enter" === e.hotkey && ($(this).click(), e.preventDefault())
        }
        $(document).on("focus", "div.btn-sm, span.btn-sm", function() {
            $(this).on("keydown", e)
        }), $(document).on("blur", "div.btn-sm, span.btn-sm", function() {
            $(this).off("keydown", e)
        })
    }.call(this), $(document).on("submit", ".js-mobile-preference-form", function(e) {
        var t;
        return t = $(this).find(".js-mobile-preference-anchor-field"), t.val(window.location.hash.substr(1)), !0
    }),
    function() {
        var e, t, n, i;
        e = require("github/debounce")["default"], i = require("setimmediate")["default"], $.fn.notScrolling = function() {
            return new Promise(function(e) {
                return function(t, i) {
                    return 1 === e.length ? n(e[0], t) : t()
                }
            }(this))
        }, t = 0, window.addEventListener("scroll", function(e) {
            t = e.timeStamp || (new Date).getTime()
        }, !0), n = function(n, r) {
            var s;
            return n === window && t < (new Date).getTime() - 500 ? void i(r) : (s = e(function() {
                return n.removeEventListener("scroll", s, !1), r()
            }, 500), n.addEventListener("scroll", s, !1), void s())
        }
    }.call(this), $(document).on("ajaxSuccess", ".js-notice-dismiss", function() {
        $(this).closest(".js-notice").fadeOut()
    }), $(document).on("click", ".js-notice-dismiss-action", function() {
        $(this).closest(".js-notice").find(".js-notice-dismiss").submit()
    }),
    function() {
        $.observeLast = function(e, t) {
            var n, i;
            null == t && (t = "last"), n = i = function() {
                $(e).removeClass(t).last().addClass(t)
            }, $.observe(e, {
                add: n,
                remove: i
            })
        }
    }.call(this),
    function() {
        $(document).on("click", ".js-permalink-shortcut", function() {
            return window.location = this.href + window.location.hash, !1
        })
    }.call(this),
    function() {
        document.addEventListener("pjax:start", function(e) {
            var t;
            (t = e.relatedTarget) && ($(t).addClass("pjax-active"), $(t).parents(".js-pjax-active").addClass("pjax-active"))
        }), document.addEventListener("pjax:end", function() {
            $(".pjax-active").removeClass("pjax-active")
        })
    }.call(this),
    function() {
        document.addEventListener("pjax:click", function(e) {
            return window.onbeforeunload ? e.preventDefault() : void 0
        })
    }.call(this),
    function() {
        var e, t;
        e = require("delegated-events"), t = function() {
            var e, t;
            return t = function() {
                var t, n, i;
                for (i = [], t = 0, n = arguments.length; n > t; t++) e = arguments[t], i.push(e.split("/", 3).join("/"));
                return i
            }.apply(this, arguments), t[0] === t[1]
        }, e.on("pjax:click", "#js-repo-pjax-container a[href]", function(e) {
            return t(this.pathname, location.pathname) ? void 0 : e.preventDefault()
        }), e.on("pjax:click", ".js-comment-body", function(e) {
            return "files" === e.target.pathname.split("/")[3] ? e.preventDefault() : void 0
        })
    }.call(this),
    function() {
        var e, t;
        t = {}, $(e = function() {
            return t[document.location.pathname] = $("head [data-pjax-transient]")
        }), document.addEventListener("pjax:beforeReplace", function(e) {
            var n, i, r, s, o;
            for (n = e.detail.contents, r = s = 0, o = n.length; o > s; r = ++s) i = n[r], i && ("pjax-head" === i.id ? (t[document.location.pathname] = $(i).children(), n[r] = null) : "js-flash-container" === i.id && ($("#js-flash-container").replaceWith(i), n[r] = null))
        }), document.addEventListener("pjax:end", function() {
            var e, n, i;
            return e = t[document.location.pathname], e ? ($("head [data-pjax-transient]").remove(), i = $(e).not("title, script, link[rel='stylesheet']"), n = $(e).filter("link[rel='stylesheet']"), $(document.head).append(i.attr("data-pjax-transient", !0)), $(document.head).append(n)) : void 0
        })
    }.call(this),
    function() {
        var e, t, n;
        t = require("github/pjax"), n = function(e) {
            return null != e.getAttribute("data-pjax-preserve-scroll") ? !1 : 0
        }, e = function(e) {
            var t, n, i;
            return t = $(e), n = t.add(t.parents("[data-pjax]")).map(function() {
                var e;
                return e = this.getAttribute("data-pjax"), null != e && "true" !== e ? e : void 0
            }), (i = n[0]) ? document.querySelector(i) : $(e).closest("[data-pjax-container]")[0]
        }, $(document).on("click", "[data-pjax] a, a[data-pjax]", function(i) {
            var r, s;
            return s = this, null == s.getAttribute("data-skip-pjax") && null == s.getAttribute("data-remote") && (r = e(s)) ? t.click(i, {
                container: r,
                scrollTo: n(s)
            }) : void 0
        }), $(document).on("submit", "form[data-pjax]", function(i) {
            var r, s;
            return s = this, (r = e(s)) ? t.submit(i, {
                container: r,
                scrollTo: n(s)
            }) : void 0
        })
    }.call(this),
    function() {
        var e, t, n, i, r, s, o, a, c;
        a = require("github/stats")["default"], o = require("setimmediate")["default"], t = null, r = "last_pjax_request", s = "pjax_start", i = "pjax_end", n = function(e) {
            var n, i;
            (i = null != (n = e.relatedTarget) ? n.href : void 0) && (window.performance.mark(s), t = i)
        }, c = function() {
            o(function() {
                var n, o, c;
                if (window.performance.getEntriesByName(s).length && (window.performance.mark(i), window.performance.measure(r, s, i), o = window.performance.getEntriesByName(r), n = null != (c = o.pop()) ? c.duration : void 0)) return a({
                    pjax: {
                        url: t,
                        ms: Math.round(n)
                    }
                }), e()
            })
        }, e = function() {
            window.performance.clearMarks(s), window.performance.clearMarks(i), window.performance.clearMeasures(r)
        }, document.addEventListener("pjax:start", n), document.addEventListener("pjax:end", c)
    }.call(this),
    function() {
        function e(e) {
            var t, n, i, r;
            for (n = []; e;) i = e.getBoundingClientRect(), r = i.top, t = i.left, n.push({
                element: e,
                top: r,
                left: t
            }), e = e.parentElement;
            return n
        }

        function t(e) {
            var t, n, i;
            for (t = 0, n = e.length; n > t; t++)
                if (i = e[t], $.contains(document, i.element)) return i
        }
        $.fn.preservingScrollPosition = function(e) {
            return $.preservingScrollPosition(this[0], e), this
        }, $.preservingScrollPosition = function(n, i) {
            var r, s, o, a, c, u, l, d;
            return n ? (o = e(n), l = i.call(n), (s = t(o)) ? (n = s.element, c = s.top, a = s.left, u = n.getBoundingClientRect(), d = u.top, r = u.left, $(n).cumulativeScrollBy(r - a, d - c), l) : void 0) : i()
        }
    }.call(this), $.preserveInteractivePosition = function(e) {
        return $(window).notScrolling().then(function() {
            var t;
            return t = $.interactiveElement()[0], $.preservingScrollPosition(t, e)
        })
    }, $(function() {
        document.body.classList.contains("js-print-popup") && (window.print(), setTimeout(window.close, 1e3))
    }),
    function() {
        var e = require("github/failbot"),
            t = e.errorContext;
        $(function() {
            var e, n;
            return document.documentElement.classList.contains("is-employee") ? (e = function() {
                return "qi:" + document.location
            }, n = [], $(document).on("submit", ".js-quick-issue-form", function() {
                var t;
                $(".facebox-content > *").hide(), $(".facebox-content .js-quick-issue-thanks").show(), t = e();
                try {
                    localStorage.removeItem(t)
                } catch (n) {}
                return !0
            }), $(document).onFocusedInput(".js-quick-issue-body", function() {
                return function() {
                    var t, n;
                    t = e(), n = $(this).val();
                    try {
                        return localStorage.setItem(t, n)
                    } catch (i) {}
                }
            }), document.addEventListener("facebox:reveal", function() {
                var t, n, i;
                return $(".facebox-content .quick-issue-link").remove(), i = $(".facebox-content .js-quick-issue-body"), i.length ? (n = e(), t = function() {
                    try {
                        return localStorage.getItem(n)
                    } catch (e) {}
                }(), t && i.val(t), i.focus()) : void 0
            }), $(window).on("error", function(e) {
                return n.push(t(e.originalEvent.error)), $(".js-captured-errors").val(JSON.stringify(n))
            }), $(document).on("ajaxSuccess", ".js-quick-issue-form", function(e, t, n) {
                return $(".js-quick-issue-thanks").append(t.responseText)
            })) : void 0
        })
    }.call(this), $(document).onFocusedKeydown(".js-quick-submit", function() {
        return function(e) {
            var t, n;
            return "ctrl+enter" === e.hotkey || "meta+enter" === e.hotkey ? (n = $(this).closest("form"), t = n.find("input[type=submit], button[type=submit]").first(), t.prop("disabled") || n.submit(), !1) : void 0
        }
    }),
    function() {
        var e, t, n, i = function(e, t) {
            return function() {
                return e.apply(t, arguments)
            }
        };
        t = require("github/sliding-promise-queue")["default"], n = require("github/fetch").fetchText, e = function() {
            function e(e) {
                this.resultsChanged = i(this.resultsChanged, this), this.fetchResults = i(this.fetchResults, this), this.onFieldInput = i(this.onFieldInput, this), this.onNavigationKeyDown = i(this.onNavigationKeyDown, this), this.teardown = i(this.teardown, this), this.$field = $(e), this.$form = $(e.form), this.fetchQueue = new t, this.$field.on("input.results", this.onFieldInput), this.$field.on("focusout:delayed.results", this.teardown), this.$form.on("submit.results", this.teardown), this.$results = $(".js-quicksearch-results"), this.$results.navigation("push"), this.$results.on("navigation:keydown.results", this.onNavigationKeyDown)
            }
            return e.prototype.teardown = function() {
                return this.$field.off(".results"), this.$form.off(".results"), this.$results.off(".results"), this.$results.removeClass("active"), this.$results.navigation("pop")
            }, e.prototype.onNavigationKeyDown = function(e) {
                return "esc" === e.hotkey ? this.$results.removeClass("active").navigation("clear") : "enter" !== e.hotkey || e.target.classList.contains("js-navigation-item") ? void 0 : (this.$form.submit(), !1)
            }, e.prototype.onFieldInput = function() {
                return this.fetchResults(this.$field.val())
            }, e.prototype.fetchResults = function(e) {
                var t, i, r;
                return (r = this.$results.attr("data-quicksearch-url")) ? (i = e.trim() ? (r += ~r.indexOf("?") ? "&" : "?", r += this.$form.serialize(), this.$form.addClass("is-sending"), n(r)) : Promise.resolve(""), t = function(e) {
                    return function() {
                        return e.$form.removeClass("is-sending")
                    }
                }(this), this.fetchQueue.push(i).then(function(e) {
                    return function(t) {
                        return e.$results.html(t), e.resultsChanged()
                    }
                }(this)).then(t, t)) : void 0
            }, e.prototype.resultsChanged = function() {
                var e;
                return e = "" !== this.$field.val(), this.$results.toggleClass("active", e)
            }, e
        }(), $(document).on("focusin:delayed", ".js-quicksearch-field", function() {
            new e(this)
        })
    }.call(this),
    function() {
        var e, t, n, i, r, s, o, a, c, u, l, d, h = [].slice;
        for (d = require("setimmediate")["default"], a = function() {
                var e, t, n, i, r;
                for (e = arguments[0], r = 2 <= arguments.length ? h.call(arguments, 1) : [], t = 0, i = r.length; i > t; t++)
                    if (n = r[t], e.classList.contains(n)) return !0;
                return !1
            }, i = function(e) {
                var t, n, i, r, s;
                for (s = e.parentNode.children, t = i = 0, r = s.length; r > i; t = ++i)
                    if (n = s[t], n === e) return t
            }, n = function(e) {
                return "IMG" === e.nodeName || null != e.firstChild
            }, o = 0, c = function(e) {
                var t, n;
                return t = e.childNodes[0], n = e.childNodes[1], t && e.childNodes.length < 3 ? !("OL" !== t.nodeName && "UL" !== t.nodeName || n && (n.nodeType !== Node.TEXT_NODE || n.textContent.trim())) : void 0
            }, t = {
                CODE: function(e) {
                    var t;
                    return t = e.textContent, "PRE" === e.parentNode.nodeName ? e.textContent = t.replace(/^/gm, "    ") : t.indexOf("`") >= 0 ? "`` " + t + " ``" : "`" + t + "`"
                },
                PRE: function(e) {
                    var t;
                    return t = e.parentNode, "DIV" === t.nodeName && t.classList.contains("highlight") && (e.textContent = e.textContent.replace(/^/gm, "    "), e.append("\n\n")), e
                },
                STRONG: function(e) {
                    return "**" + e.textContent + "**"
                },
                EM: function(e) {
                    return "_" + e.textContent + "_"
                },
                BLOCKQUOTE: function(e) {
                    var t, n;
                    return n = e.textContent.trim().replace(/^/gm, "> "), t = document.createElement("pre"), t.textContent = n + "\n\n", t
                },
                A: function(e) {
                    var t;
                    return t = e.textContent, a(e, "issue-link", "user-mention", "team-mention") ? t : /^https?:/.test(t) && t === e.getAttribute("href") ? t : "[" + t + "](" + e.getAttribute("href") + ")"
                },
                IMG: function(e) {
                    var t;
                    return t = e.getAttribute("alt"), a(e, "emoji") ? t : "![" + t + "](" + e.getAttribute("src") + ")"
                },
                LI: function(e) {
                    var t, n;
                    if (!c(e)) switch (t = e.parentNode, t.nodeName) {
                        case "UL":
                            e.prepend("* ");
                            break;
                        case "OL":
                            o > 0 && !t.previousSibling ? (n = i(e) + o + 1, e.prepend(n + "\\. ")) : e.prepend(i(e) + 1 + ". ")
                    }
                    return e
                },
                OL: function(e) {
                    var t;
                    return t = document.createElement("li"), t.append(document.createElement("br")), e.append(t), e
                },
                H1: function(e) {
                    var t;
                    return t = parseInt(e.nodeName.slice(1)), e.prepend(Array(t + 1).join("#") + " "), e
                }
            }, t.UL = t.OL, s = r = 2; 6 >= r; s = ++r) t["H" + s] = t.H1;
        e = function(e, i) {
            var r, s, o, a, c, u;
            a = document.createNodeIterator(e, NodeFilter.SHOW_ELEMENT, {
                acceptNode: function(e) {
                    return e.nodeName in t && n(e) ? NodeFilter.FILTER_ACCEPT : void 0
                }
            }), c = [];
            for (; o = a.nextNode();) c.push(o);
            for (c.reverse(), u = [], r = 0, s = c.length; s > r; r++) o = c[r], u.push(i(o));
            return u
        }, u = function(e, t) {
            var n, i, r;
            n = document.createElement("div"), n.appendChild(t), n.style.cssText = "position:absolute;left:-9999px;", document.body.appendChild(n);
            try {
                i = document.createRange(), i.selectNodeContents(n), e.removeAllRanges(), e.addRange(i), r = e.toString(), e.removeAllRanges()
            } finally {
                document.body.removeChild(n)
            }
            return r
        }, l = function(n) {
            var r, s, a, c;
            return r = n.getRangeAt(0).cloneContents(), o = 0, (a = n.anchorNode.parentNode.closest("li")) && ("OL" === a.parentNode.nodeName && (o = i(a)), r.querySelector("li") || (c = document.createElement(a.parentNode.nodeName), s = document.createElement("li"), s.append(r), c.append(s), r = document.createDocumentFragment(), r.appendChild(c))), e(r, function(e) {
                var n;
                return n = t[e.nodeName](e), e.replaceWith(n)
            }), u(n, r)
        }, $(document).on("quote:selection", ".js-quote-markdown", function(e) {
            var t, n, i, r;
            i = e.detail.selection;
            try {
                return r = l(i), e.detail.selectionText = r.replace(/^\n+/, "").replace(/\s+$/, "")
            } catch (n) {
                return t = n, d(function() {
                    throw t
                })
            }
        })
    }.call(this),
    function() {
        $(document).on("keydown", function(e) {
            var t, n, i, r, s, o, a, c, u;
            if ("r" === e.hotkey && !e.isDefaultPrevented() && !e.isFormInteraction() && (c = window.getSelection(), i = $(c.focusNode), (u = $.trim(c.toString())) && (t = i.closest(".js-quote-selection-container"), t.length))) {
                if (s = $.Event("quote:selection", {
                        detail: {
                            selection: c,
                            selectionText: u
                        }
                    }), t.trigger(s), s.isDefaultPrevented()) return !1;
                if (u = s.detail.selectionText, n = t.find(".js-quote-selection-target").visible().first(), o = n[0]) return a = "> " + u.replace(/\n/g, "\n> ") + "\n\n", (r = o.value) && (a = r + "\n\n" + a), o.value = a, n.trigger("change"), n.scrollTo({
                    duration: 300
                }, function() {
                    return o.focus(), o.selectionStart = o.value.length, n.scrollTop(o.scrollHeight)
                }), e.preventDefault()
            }
        })
    }.call(this), $(document).on("ajaxSuccess", ".js-pick-reaction", function(e, t, n, i) {
        $(this.closest(".js-menu-container")).menu("deactivate");
        var r = this.closest(".js-comment");
        if (r) {
            var s, o, a = $.parseHTML(i.reactions_container.trim()),
                c = $.parseHTML(i.comment_header_reaction_button.trim());
            (s = r.querySelector(".js-reactions-container")).replaceWith.apply(s, _toConsumableArray(a)), (o = r.querySelector(".js-comment-header-reaction-button")).replaceWith.apply(o, _toConsumableArray(c))
        }
    });
var showReactionContent = function() {
        var e = this.getAttribute("data-reaction-label");
        this.closest(".js-add-reaction-popover").querySelector(".js-reaction-description").textContent = e
    },
    hideReactionContent = function() {
        this.closest(".js-add-reaction-popover").querySelector(".js-reaction-description").textContent = "Pick your reaction"
    };
$(document).on("menu:activated", ".js-reaction-popover-container", function() {
        $(this).on("mouseenter", ".js-reaction-option-item", showReactionContent), $(this).on("mouseleave", ".js-reaction-option-item", hideReactionContent)
    }), $(document).on("menu:deactivated", ".js-reaction-popover-container", function() {
        $(this).off("mouseenter", ".js-reaction-option-item", showReactionContent), $(this).off("mouseleave", ".js-reaction-option-item", hideReactionContent)
    }),
    function() {
        $.observe(".has-removed-contents", function() {
            var e, t, n;
            return e = $(this).contents(), t = function() {
                return e.detach()
            }, n = function() {
                return $(this).html(e)
            }, {
                add: t,
                remove: n
            }
        })
    }.call(this),
    function() {
        var e, t;
        e = require("github/fetch").fetchText, $(document).on("focusin", ".js-repo-filter .js-filterable-field", function() {
            var e;
            (e = this.closest(".js-repo-filter").querySelector(".js-more-repos-link")) && t(e)
        }), $(document).on("click", ".js-repo-filter .js-repo-filter-tab", function(e) {
            var n, i, r, s, o, a;
            for (n = this.closest(".js-repo-filter"), (o = n.querySelector(".js-more-repos-link")) && t(o), a = n.querySelectorAll(".js-repo-filter-tab"), r = 0, s = a.length; s > r; r++) i = a[r], i.classList.toggle("filter-selected", i === this);
            $(n.querySelector(".js-filterable-field")).fire("filterable:change"), e.preventDefault()
        }), $(document).on("filterable:change", ".js-repo-filter .js-repo-list", function() {
            var e, t, n;
            e = this.closest(".js-repo-filter"), (n = null != (t = e.querySelector(".js-repo-filter-tab.filter-selected")) ? t.getAttribute("data-filter") : void 0) && $(this).children().not(n).hide()
        }), t = function(t) {
            var n, i;
            if (!t.classList.contains("is-loading")) return t.classList.add("is-loading"), i = function(e) {
                var n;
                return n = t.closest(".js-repo-filter"), n.querySelector(".js-repo-list").innerHTML = e, $(n.querySelector(".js-filterable-field")).fire("filterable:change"), t.remove()
            }, n = function() {
                return t.classList.remove("is-loading")
            }, e(t.href).then(i).then(n, n)
        }, $(document).on("click", ".js-more-repos-link", function(e) {
            e.preventDefault(), t(this)
        })
    }.call(this), $(document).on("ajaxSuccess", ".js-select-menu:not([data-multiple])", function() {
        return $(this).menu("deactivate")
    }), $(document).on("ajaxSend", ".js-select-menu:not([data-multiple])", function() {
        return $(this).addClass("is-loading")
    }), $(document).on("ajaxComplete", ".js-select-menu", function() {
        return $(this).removeClass("is-loading")
    }), $(document).on("ajaxError", ".js-select-menu", function() {
        return $(this).addClass("has-error")
    }), $(document).on("menu:deactivate", ".js-select-menu", function() {
        return $(this).removeClass("is-loading has-error")
    }),
    function() {
        var e = require("delegated-events"),
            t = e.fire;
        $(document).on("navigation:open", ".js-select-menu:not([data-multiple]) .js-navigation-item", function() {
            var e, n;
            return n = $(this), e = n.closest(".js-select-menu"), e.find(".js-navigation-item.selected").removeClass("selected"), n.addClass("selected"), n.removeClass("indeterminate"), n.find("input[type=radio], input[type=checkbox]").prop("checked", !0).change(), t(this, "selectmenu:selected"), e.hasClass("is-loading") ? void 0 : e.menu("deactivate")
        }), $(document).on("navigation:open", ".js-select-menu[data-multiple] .js-navigation-item", function() {
            var e, n;
            return e = $(this), n = e.hasClass("selected"), e.toggleClass("selected", !n), e.removeClass("indeterminate"), e.find("input[type=radio], input[type=checkbox]").prop("checked", !n).change(), t(this, "selectmenu:selected")
        })
    }.call(this), $(document).on("selectmenu:selected", ".js-select-menu .js-navigation-item", function() {
        var e, t, n;
        return e = $(this).closest(".js-select-menu"), n = $(this).find(".js-select-button-text"), n[0] && e.find(".js-select-button").html(n.html()), t = $(this).find(".js-select-menu-item-gravatar"), n[0] ? e.find(".js-select-button-gravatar").html(t.html()) : void 0
    }), $(document).on("selectmenu:change", ".js-select-menu .select-menu-list", function(e) {
        var t, n;
        t = $(this).find(".js-navigation-item"), t.removeClass("last-visible"), t.visible().last().addClass("last-visible"), $(this).is("[data-filterable-for]") || (n = $(e.target).hasClass("filterable-empty"), $(this).toggleClass("filterable-empty", n))
    }), $(document).on("menu:activated selectmenu:load", ".js-select-menu", function() {
        var e = this.querySelector(".js-filterable-field");
        e && e.focus()
    }), $(document).on("menu:deactivate", ".js-select-menu", function() {
        var e = this.querySelector(".js-filterable-field");
        if (e && (e.value = "", $(e).trigger("filterable:change")), Array.from(this.querySelectorAll(".js-navigation-item.selected")).forEach(function(e) {
                var t = e.querySelector("input[type=radio], input[type=checkbox]");
                t && e.classList.toggle("selected", t.checked)
            }), this.contains(document.activeElement)) try {
            document.activeElement.blur()
        } catch (t) {}
    }),
    function() {
        var e, t;
        e = require("delegated-events").fire, t = function(t) {
            var n, i, r, s;
            i = t.currentTarget, i.classList.remove("js-load-contents"), i.classList.add("is-loading"), i.classList.remove("has-error"), r = i.getAttribute("data-contents-url"), n = $(i).data("contents-data"), s = $.ajax({
                url: r,
                data: n
            }), s.then(function(t) {
                i.classList.remove("is-loading"), i.querySelector(".js-select-menu-deferred-content").innerHTML = t, i.classList.contains("active") && e(i, "selectmenu:load")
            }, function() {
                i.classList.remove("is-loading"), i.classList.add("has-error")
            })
        }, $.observe(".js-select-menu.js-load-contents", {
            add: function() {
                $(this).on("mouseenter", t), $(this).on("menu:activate", t)
            },
            remove: function() {
                $(this).off("mouseenter", t), $(this).off("menu:activate", t)
            }
        })
    }.call(this), $(document).on("menu:activate", ".js-select-menu", function() {
        $(this).find(":focus").blur(), $(this).find(".js-menu-target").addClass("selected"), $(this).find(".js-navigation-container").navigation("push")
    }), $(document).on("menu:deactivate", ".js-select-menu", function() {
        $(this).find(".js-menu-target").removeClass("selected"), $(this).find(".js-navigation-container").navigation("pop")
    }), $(document).on("filterable:change selectmenu:tabchange", ".js-select-menu .select-menu-list", function() {
        $(this).navigation("refocus")
    }),
    function() {
        var e, t;
        e = require("delegated-events").fire, $(document).on("filterable:change", ".js-select-menu .select-menu-list", function(n) {
            var i, r, s, o;
            (r = this.querySelector(".js-new-item-form")) && (i = n.relatedTarget.value, "" === i || t(this, i) ? $(this).removeClass("is-showing-new-item-form") : ($(this).addClass("is-showing-new-item-form"), o = r.querySelector(".js-new-item-name"), "innerText" in o ? o.innerText = i : o.textContent = i, null != (s = r.querySelector(".js-new-item-value")) && (s.value = i))), e(n.target, "selectmenu:change")
        }), t = function(e, t) {
            var n, i, r, s, o;
            for (s = e.querySelectorAll(".js-select-button-text, .js-select-menu-filter-text"), n = 0, r = s.length; r > n; n++)
                if (i = s[n], o = i.textContent.toLowerCase().trim(), o === t.toLowerCase()) return !0;
            return !1
        }
    }.call(this),
    function() {
        function e(e, t) {
            var i, r, s;
            s = e.getAttribute("data-tab-filter"), r = $(e).closest(".js-select-menu").find(".js-select-menu-tab-bucket"), i = r.filter(function() {
                return this.getAttribute("data-tab-filter") === s
            }), i.toggleClass("selected", t), t && n(i[0], "selectmenu:tabchange")
        }
        var t = require("delegated-events"),
            n = t.fire;
        $(document).on("menu:activate selectmenu:load", ".js-select-menu", function() {
            var e;
            return e = $(this).find(".js-select-menu-tab"), e.attr("aria-selected", "false").removeClass("selected"), e.first().attr("aria-selected", "true").addClass("selected")
        }), $(document).on("click", ".js-select-menu .js-select-menu-tab", function() {
            var e, t, n, i;
            return t = this.closest(".js-select-menu"), (i = t.querySelector(".js-select-menu-tab.selected")) && (i.classList.remove("selected"), i.setAttribute("aria-selected", !1)), this.classList.add("selected"), this.setAttribute("aria-selected", !0), (e = t.querySelector(".js-filterable-field")) && ((n = this.getAttribute("data-filter-placeholder")) && e.setAttribute("placeholder", n), e.focus()), !1
        }), $.observe(".js-select-menu .js-select-menu-tab.selected", {
            add: function() {
                e(this, !0)
            },
            remove: function() {
                e(this, !1)
            }
        })
    }.call(this),
    function() {
        var e, t, n, i, r;
        i = require("setimmediate")["default"], e = function(e) {
            var t;
            return null == e && (e = window.location), (t = document.querySelector("meta[name=session-resume-id]")) ? t.content : e.pathname
        }, r = null, $(window).on("submit:prepare", function(e) {
            r = e.target, i(function() {
                return e.isDefaultPrevented() ? r = null : void 0
            })
        }), t = function(e) {
            var t, n, i, s;
            if (i = "session-resume:" + e, s = function(e) {
                    return e.id && e.value !== e.defaultValue && e.form !== r
                }, n = function() {
                    var e, n, i, r;
                    for (i = $(".js-session-resumable"), r = [], e = 0, n = i.length; n > e; e++) t = i[e], s(t) && r.push([t.id, t.value]);
                    return r
                }(), n.length) try {
                sessionStorage.setItem(i, JSON.stringify(n))
            } catch (o) {}
        }, n = function(e) {
            var t, n, r, s, o, a, c, u;
            if (s = "session-resume:" + e, n = function() {
                    try {
                        return sessionStorage.getItem(s)
                    } catch (e) {}
                }()) {
                try {
                    sessionStorage.removeItem(s)
                } catch (l) {}
                for (t = [], a = JSON.parse(n), r = 0, o = a.length; o > r; r++) c = a[r], e = c[0], u = c[1], $(document).fire("session:resume", {
                    targetId: e,
                    targetValue: u
                }, function() {
                    var n;
                    n = document.getElementById(e), n && n.value === n.defaultValue && (n.value = u, t.push(n))
                });
                i(function() {
                    return $(t).trigger("change")
                })
            }
        }, $(window).on("pageshow pjax:end", function() {
            n(e())
        }), $(window).on("pagehide", function() {
            t(e())
        }), window.addEventListener("pjax:beforeReplace", function(n) {
            var r, s, o, a;
            (a = null != (o = n.detail.previousState) ? o.url : void 0) ? (s = e(new URL(a)), t(s)) : (r = new Error("pjax:beforeReplace event.detail.previousState.url is undefined"), i(function() {
                throw r
            }))
        })
    }.call(this),
    function() {
        var e, t, n;
        e = require("github/debounce")["default"], t = function() {
            var t, n, i;
            t = null, i = e(function() {
                return t = null
            }, 200), n = {
                x: 0,
                y: 0
            }, $(this).on("mousemove.userResize", function(e) {
                var r;
                (n.x !== e.clientX || n.y !== e.clientY) && (r = this.style.height, t && t !== r && $(this).trigger("user:resize"), t = r, i()), n = {
                    x: e.clientX,
                    y: e.clientY
                }
            })
        }, n = function() {
            $(this).off("mousemove.userResize")
        }, $.event.special["user:resize"] = {
            setup: t,
            teardown: n
        }
    }.call(this),
    function() {
        var e, t, n, i, r = require("github/dimensions"),
            s = r.overflowOffset;
        n = function(e) {
            return $(e).on("user:resize.trackUserResize", function() {
                return $(e).addClass("is-user-resized"), $(e).css({
                    "max-height": ""
                })
            })
        }, i = function(e) {
            return $(e).off("user:resize.trackUserResize")
        }, $(document).on("reset", "form", function() {
            var e;
            e = $(this).find("textarea.js-size-to-fit"), e.removeClass("is-user-resized"), e.css({
                height: "",
                "max-height": ""
            })
        }), $.observe("textarea.js-size-to-fit", {
            add: n,
            remove: i
        }), e = function(e) {
            var t, n, i;
            t = $(e), n = null, i = function(i) {
                var r, o, a, c;
                e.value !== n && t.is($.visible) && (c = s(t[0]), c.top < 0 || c.bottom < 0 || (a = t.outerHeight() + c.bottom, e.style.maxHeight = a - 100 + "px", r = e.parentNode, o = r.style.height, r.style.height = $(r).css("height"), e.style.height = "auto", t.innerHeight(e.scrollHeight), r.style.height = o, n = e.value))
            }, t.on("change.sizeToFit", function() {
                return i()
            }), t.on("input.sizeToFit", function() {
                return i()
            }), e.value && i()
        }, t = function(e) {
            $(e).off(".sizeToFit")
        }, $.observe("textarea.js-size-to-fit:not(.is-user-resized)", {
            add: e,
            remove: t
        })
    }.call(this),
    function() {
        $(document).on("ajaxSuccess", ".js-social-container", function(e, t, n, i) {
            return $(this).find(".js-social-count").text(i.count)
        })
    }.call(this), define.amd = "reconnectingwebsocket",
    function(e, t) {
        "function" == typeof define && define.amd ? define([], t) : "undefined" != typeof module && module.exports ? module.exports = t() : e.ReconnectingWebSocket = t()
    }(this, function() {
        function e(t, n, i) {
            function r(e, t) {
                var n = document.createEvent("CustomEvent");
                return n.initCustomEvent(e, !1, !1, t), n
            }
            var s = {
                debug: !1,
                automaticOpen: !0,
                reconnectInterval: 1e3,
                maxReconnectInterval: 3e4,
                reconnectDecay: 1.5,
                timeoutInterval: 2e3,
                maxReconnectAttempts: null
            };
            i || (i = {});
            for (var o in s) "undefined" != typeof i[o] ? this[o] = i[o] : this[o] = s[o];
            this.url = t, this.reconnectAttempts = 0, this.readyState = WebSocket.CONNECTING, this.protocol = null;
            var a, c = this,
                u = !1,
                l = !1,
                d = document.createElement("div");
            d.addEventListener("open", function(e) {
                c.onopen(e)
            }), d.addEventListener("close", function(e) {
                c.onclose(e)
            }), d.addEventListener("connecting", function(e) {
                c.onconnecting(e)
            }), d.addEventListener("message", function(e) {
                c.onmessage(e)
            }), d.addEventListener("error", function(e) {
                c.onerror(e)
            }), this.addEventListener = d.addEventListener.bind(d), this.removeEventListener = d.removeEventListener.bind(d), this.dispatchEvent = d.dispatchEvent.bind(d), this.open = function(t) {
                if (a = new WebSocket(c.url, n || []), t) {
                    if (this.maxReconnectAttempts && this.reconnectAttempts > this.maxReconnectAttempts) return
                } else d.dispatchEvent(r("connecting")), this.reconnectAttempts = 0;
                (c.debug || e.debugAll) && console.debug("ReconnectingWebSocket", "attempt-connect", c.url);
                var i = a,
                    s = setTimeout(function() {
                        (c.debug || e.debugAll) && console.debug("ReconnectingWebSocket", "connection-timeout", c.url), l = !0, i.close(), l = !1
                    }, c.timeoutInterval);
                a.onopen = function(n) {
                    clearTimeout(s), (c.debug || e.debugAll) && console.debug("ReconnectingWebSocket", "onopen", c.url), c.protocol = a.protocol, c.readyState = WebSocket.OPEN, c.reconnectAttempts = 0;
                    var i = r("open");
                    i.isReconnect = t, t = !1, d.dispatchEvent(i)
                }, a.onclose = function(n) {
                    if (clearTimeout(s), a = null, u) c.readyState = WebSocket.CLOSED, d.dispatchEvent(r("close"));
                    else {
                        c.readyState = WebSocket.CONNECTING;
                        var i = r("connecting");
                        i.code = n.code, i.reason = n.reason, i.wasClean = n.wasClean, d.dispatchEvent(i), t || l || ((c.debug || e.debugAll) && console.debug("ReconnectingWebSocket", "onclose", c.url), d.dispatchEvent(r("close")));
                        var s = c.reconnectInterval * Math.pow(c.reconnectDecay, c.reconnectAttempts);
                        setTimeout(function() {
                            c.reconnectAttempts++, c.open(!0)
                        }, s > c.maxReconnectInterval ? c.maxReconnectInterval : s)
                    }
                }, a.onmessage = function(t) {
                    (c.debug || e.debugAll) && console.debug("ReconnectingWebSocket", "onmessage", c.url, t.data);
                    var n = r("message");
                    n.data = t.data, d.dispatchEvent(n)
                }, a.onerror = function(t) {
                    (c.debug || e.debugAll) && console.debug("ReconnectingWebSocket", "onerror", c.url, t), d.dispatchEvent(r("error"))
                }
            }, 1 == this.automaticOpen && this.open(!1), this.send = function(t) {
                if (a) return (c.debug || e.debugAll) && console.debug("ReconnectingWebSocket", "send", c.url, t), a.send(t);
                throw "INVALID_STATE_ERR : Pausing to reconnect websocket"
            }, this.close = function(e, t) {
                "undefined" == typeof e && (e = 1e3), u = !0, a && a.close(e, t)
            }, this.refresh = function() {
                a && a.close()
            }
        }
        if ("WebSocket" in window) return e.prototype.onopen = function(e) {}, e.prototype.onclose = function(e) {}, e.prototype.onconnecting = function(e) {}, e.prototype.onmessage = function(e) {}, e.prototype.onerror = function(e) {}, e.debugAll = !1, e.CONNECTING = WebSocket.CONNECTING, e.OPEN = WebSocket.OPEN, e.CLOSING = WebSocket.CLOSING, e.CLOSED = WebSocket.CLOSED, e
    }), delete define.amd,
    function() {
        var e, t, n, i, r, s, o, a;
        "undefined" != typeof WebSocket && null !== WebSocket && (e = require("reconnectingwebsocket"), o = {}, n = {}, t = null, r = function(t) {
            var i, r;
            if (i = document.head.querySelector("link[rel=web-socket]")) return r = new e(i.href), r.reconnectInterval = 2e3 * Math.random() + 1e3, r.reconnectDecay = 2, r.maxReconnectAttempts = 5, r.addEventListener("open", function() {
                var e, t, n;
                n = [];
                for (t in o) e = o[t], n.push(r.send("subscribe:" + t));
                return n
            }), r.addEventListener("message", function(e) {
                var t, i, r;
                r = JSON.parse(e.data), i = r[0], t = r[1], i && t && $(n[i]).trigger("socket:message", [t, i])
            }), r
        }, i = function(e) {
            var t, n;
            return null != (t = null != (n = e.getAttribute("data-channel")) ? n.split(/\s+/) : void 0) ? t : []
        }, s = function(e) {
            var s, a, c, u, l;
            if (null != t ? t : t = r())
                for (l = t, u = i(e), s = 0, a = u.length; a > s; s++) c = u[s], l.readyState !== WebSocket.OPEN || o[c] || l.send("subscribe:" + c), o[c] = !0, null == n[c] && (n[c] = []), n[c].push(e)
        }, a = function(e) {
            var t, r, s, o;
            for (o = i(e), t = 0, r = o.length; r > t; t++) s = o[t], n[s] = $(n[s]).not(e).slice(0)
        }, $.observe(".js-socket-channel[data-channel]", {
            add: s,
            remove: a
        }))
    }.call(this),
    function() {
        var e, t, n;
        if (n = null != (t = document.querySelector("meta[name=user-login]")) ? t.content : void 0, null != n) {
            e = String(!!n.length);
            try {
                localStorage.setItem("logged-in", e)
            } catch (i) {
                return
            }
            window.addEventListener("storage", function(t) {
                var n;
                if (t.storageArea === localStorage && "logged-in" === t.key && t.newValue !== e) return e = t.newValue, n = document.querySelector(".js-stale-session-flash"), n.classList.toggle("is-signed-in", "true" === e), n.classList.toggle("is-signed-out", "false" === e), n.classList.remove("hidden"), $(window).on("popstate", function(e) {
                    return null != e.state.container ? location.reload() : void 0
                }), $(document).on("submit", "form", function(e) {
                    return e.preventDefault()
                })
            })
        }
    }.call(this),
    function() {
        var e = ["position:absolute;", "overflow:auto;", "word-wrap:break-word;", "top:0px;", "left:-9999px;"],
            t = ["box-sizing", "font-family", "font-size", "font-style", "font-variant", "font-weight", "height", "letter-spacing", "line-height", "max-height", "min-height", "padding-bottom", "padding-left", "padding-right", "padding-top", "border-bottom", "border-left", "border-right", "border-top", "text-decoration", "text-indent", "text-transform", "width", "word-spacing"],
            n = new WeakMap;
        $.fn.textFieldMirror = function(i) {
            var r, s, o, a, c, u, l, d, h, f, m, p;
            if ((p = this[0]) && (d = p.nodeName.toLowerCase(), "textarea" === d || "input" === d)) {
                if (u = n.get(p), u && u.parentElement === p.parentElement) u.innerHTML = "";
                else {
                    for (u = document.createElement("div"), n.set(p, u), f = window.getComputedStyle(p), h = e.slice(0), "textarea" === d ? h.push("white-space:pre-wrap;") : h.push("white-space:nowrap;"), o = 0, a = t.length; a > o; o++) l = t[o], h.push(l + ":" + f.getPropertyValue(l) + ";");
                    u.style.cssText = h.join(" ")
                }
                return i !== !1 && (c = document.createElement("span"), c.style.cssText = "position: absolute;", c.className = "text-field-mirror-marker", c.innerHTML = "&nbsp;"), "number" == typeof i ? ((m = p.value.substring(0, i)) && (s = document.createTextNode(m)), (m = p.value.substring(i)) && (r = document.createTextNode(m))) : (m = p.value) && (s = document.createTextNode(m)), s && u.appendChild(s), c && u.appendChild(c), r && u.appendChild(r), u.parentElement || p.parentElement.insertBefore(u, p), u.scrollTop = p.scrollTop, u.scrollLeft = p.scrollLeft, u
            }
        }
    }(), $.fn.textFieldSelectionPosition = function(e) {
        var t, n, i;
        if ((i = this[0]) && (null == e && (e = i.selectionEnd), t = $(i).textFieldMirror(e))) return n = $(t).find(".text-field-mirror-marker").position(), n.top += parseInt($(t).css("border-top-width"), 10), n.left += parseInt($(t).css("border-left-width"), 10), setTimeout(function() {
            return $(t).remove()
        }, 5e3), n
    }, define("github/suggester", ["exports", "jquery", "./fetch", "./hotkey"], function(e, t, n, i) {
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function s(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = r(t),
            a = r(i),
            c = function() {
                function e(e, t) {
                    var n = [],
                        i = !0,
                        r = !1,
                        s = void 0;
                    try {
                        for (var o, a = e[Symbol.iterator](); !(i = (o = a.next()).done) && (n.push(o.value), !t || n.length !== t); i = !0);
                    } catch (c) {
                        r = !0, s = c
                    } finally {
                        try {
                            !i && a["return"] && a["return"]()
                        } finally {
                            if (r) throw s
                        }
                    }
                    return n
                }
                return function(t, n) {
                    if (Array.isArray(t)) return t;
                    if (Symbol.iterator in Object(t)) return e(t, n);
                    throw new TypeError("Invalid attempt to destructure non-iterable instance")
                }
            }(),
            u = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                    }
                }
                return function(t, n, i) {
                    return n && e(t.prototype, n), i && e(t, i), t
                }
            }(),
            l = {},
            d = function() {
                function e(t) {
                    s(this, e), this.setup = this.setup.bind(this), this.teardown = this.teardown.bind(this), this.textarea = t.input, this.types = t.types, this.suggester = t.suggester, this.repositionManually = t.repositionManually, this.teardownManually = t.teardownManually, this.onActivate = t.onActivate, this.suggestions = t.suggestions || document.createElement("div"), this.disable = t.disable
                }
                return u(e, [{
                    key: "setup",
                    value: function() {
                        o["default"](this.textarea.form).on("reset.suggester", this.deactivate.bind(this)), o["default"](this.textarea).on("paste.suggester", this.onPaste.bind(this)), o["default"](this.textarea).on("input.suggester", this.onInput.bind(this)), o["default"](this.suggester).on("navigation:keydown.suggester", "[data-value]", this.onNavigationKeyDown.bind(this)), o["default"](this.suggester).on("navigation:open.suggester", "[data-value]", this.onNavigationOpen.bind(this)), this.teardownManually || o["default"](this.textarea).on("focusout:delayed.suggester", this.teardown), this.loadSuggestions()
                    }
                }, {
                    key: "teardown",
                    value: function() {
                        this.deactivate(), o["default"](this.textarea).off(".suggester"), o["default"](this.textarea.form).off(".suggester"), o["default"](this.suggester).off(".suggester"), this.onSuggestionsLoaded = function() {
                            return null
                        }
                    }
                }, {
                    key: "onPaste",
                    value: function() {
                        this.deactivate(), this.justPasted = !0
                    }
                }, {
                    key: "onInput",
                    value: function() {
                        return this.justPasted ? void(this.justPasted = !1) : this.checkQuery() ? !1 : void 0
                    }
                }, {
                    key: "onNavigationKeyDown",
                    value: function(e) {
                        switch (a["default"](e.originalEvent)) {
                            case "tab":
                                return this.onNavigationOpen(e), !1;
                            case "esc":
                                return this.deactivate(), e.stopImmediatePropagation(), !1
                        }
                    }
                }, {
                    key: "onNavigationOpen",
                    value: function(e) {
                        var t = void 0;
                        t = this.currentSearch.type.getValue ? this.currentSearch.type.getValue(e.target) : e.target.getAttribute("data-value");
                        var n = this.textarea.value.substring(0, this.currentSearch.endIndex),
                            i = this.textarea.value.substring(this.currentSearch.endIndex);
                        this.currentSearch.type.onSelection ? this.currentSearch.type.onSelection(t) : (n = n.replace(this.currentSearch.type.match, this.currentSearch.type.replace.replace("$value", t)), this.textarea.value = n + i), this.deactivate(), this.textarea.focus(), this.textarea.selectionStart = n.length, this.textarea.selectionEnd = n.length
                    }
                }, {
                    key: "checkQuery",
                    value: function() {
                        var e = this,
                            t = this.searchQuery();
                        if (t) {
                            if (this.currentSearch && this.currentSearch === t.query) return;
                            return this.currentSearch = t, this.search(t.type, t.query).then(function(n) {
                                return n ? e.activate(t.startIndex) : e.deactivate()
                            }), this.currentSearch.query
                        }
                        return this.currentSearch = null, void this.deactivate()
                    }
                }, {
                    key: "activate",
                    value: function(e) {
                        this.onActivate && this.onActivate(this.suggester), this.repositionManually || o["default"](this.suggester).css(o["default"](this.textarea).textFieldSelectionPosition(e + 1)), this.suggester.classList.contains("active") || (this.suggester.classList.add("active"), this.textarea.classList.add("js-navigation-enable"), o["default"](this.suggester).navigation("push"), o["default"](this.suggester).navigation("focus"))
                    }
                }, {
                    key: "deactivate",
                    value: function() {
                        this.suggester.classList.contains("active") && (this.suggester.classList.remove("active"), o["default"](this.suggester).find(".suggestions").hide(), this.textarea.classList.remove("js-navigation-enable"), o["default"](this.suggester).navigation("pop"))
                    }
                }, {
                    key: "search",
                    value: function(e, t) {
                        var n = this;
                        return e.search(this.suggestions, t).then(function(e) {
                            var t = c(e, 2),
                                i = t[0],
                                r = t[1];
                            if (r > 0) {
                                var s = i[0].cloneNode(!0);
                                return n.suggester.innerHTML = "", n.suggester.appendChild(s), o["default"](s).show(), o["default"](n.suggester).navigation("focus"), !0
                            }
                            return !1
                        })
                    }
                }, {
                    key: "searchQuery",
                    value: function() {
                        var e = this.textarea.selectionEnd,
                            t = this.textarea.value.substring(0, e);
                        if (!this.disable || !this.disable(t))
                            for (var n in this.types) {
                                var i = this.types[n],
                                    r = t.match(i.match);
                                if (r) return i.normalizeMatch ? i.normalizeMatch(i, e, r) : this.normalizeMatch(i, e, r)
                            }
                    }
                }, {
                    key: "normalizeMatch",
                    value: function(e, t, n) {
                        var i = n[2],
                            r = n[3],
                            s = t - i.length,
                            o = t;
                        return {
                            type: e,
                            text: i,
                            query: r,
                            startIndex: s,
                            endIndex: o
                        }
                    }
                }, {
                    key: "loadSuggestions",
                    value: function() {
                        var e = this;
                        if (!this.suggestions.hasChildNodes()) {
                            var t = this.suggester.getAttribute("data-url");
                            if (t) {
                                var i = l[t] || (l[t] = n.fetchText(t));
                                return i.then(function(t) {
                                    return e.onSuggestionsLoaded(t)
                                })
                            }
                        }
                    }
                }, {
                    key: "onSuggestionsLoaded",
                    value: function(e) {
                        var t = this;
                        return o["default"].parseHTML(e).forEach(function(e) {
                            return t.suggestions.appendChild(e)
                        }), document.activeElement === this.textarea ? (this.currentSearch = null, this.checkQuery()) : void 0
                    }
                }]), e
            }();
        e["default"] = d
    }),
    function() {
        var e, t, n, i, r, s, o, a, c, u, l, d, h, f, m, p;
        a = require("github/feature-detection")["default"], e = require("github/suggester")["default"], h = function(e, t, n) {
            var i, r, s, o;
            return o = n[3], r = n[4], s = t - r.length, i = t, {
                type: e,
                text: o,
                query: r,
                startIndex: s,
                endIndex: i
            }
        }, p = {
            mention: {
                match: /(^|\s)(@([a-z0-9\-_\/]*))$/i,
                replace: "$1@$value ",
                search: function(e, t) {
                    var i, r, s;
                    return s = u(t), i = $(e).find("ul.mention-suggestions"), r = i.fuzzyFilterSortList(t, {
                        limit: 5,
                        text: n,
                        score: s.score
                    }), Promise.resolve([i, r])
                }
            },
            auditLogUser: {
                match: /(^|\s)((\-?actor:|\-?user:)([a-z0-9\-\+_]*))$/i,
                replace: "$1$3$value ",
                search: function(e, t) {
                    var n, i;
                    return n = $(e).find("ul.user-suggestions"), i = n.fuzzyFilterSortList(t, {
                        limit: 5
                    }), Promise.resolve([n, i])
                },
                normalizeMatch: h
            },
            auditLogOrg: {
                match: /(^|\s)((\-?org:)([a-z0-9\-\+_]*))$/i,
                replace: "$1$3$value ",
                search: function(e, t) {
                    var n, i;
                    return n = $(e).find("ul.org-suggestions"), i = n.fuzzyFilterSortList(t, {
                        limit: 5
                    }), Promise.resolve([n, i])
                },
                normalizeMatch: h
            },
            auditLogAction: {
                match: /(^|\s)((\-?action:)([a-z0-9\.\-\+_]*))$/i,
                replace: "$1$3$value ",
                search: function(e, t) {
                    var n, i;
                    return n = $(e).find("ul.action-suggestions"), i = n.fuzzyFilterSortList(t, {
                        limit: 5
                    }), Promise.resolve([n, i])
                },
                normalizeMatch: h
            },
            auditLogRepo: {
                match: /(^|\s)((\-?repo:)([a-z0-9\/\-\+_]*))$/i,
                replace: "$1$3$value ",
                search: function(e, t) {
                    var n, i;
                    return n = $(e).find("ul.repo-suggestions"), i = n.fuzzyFilterSortList(t, {
                        limit: 5
                    }), Promise.resolve([n, i])
                },
                normalizeMatch: h
            },
            auditLogCountry: {
                match: /(^|\s)((\-?country:)([a-z0-9\-\+_]*))$/i,
                replace: "$1$3$value ",
                search: function(e, t) {
                    var n, i;
                    return n = $(e).find("ul.country-suggestions"), i = n.fuzzyFilterSortList(t, {
                        limit: 5
                    }), Promise.resolve([n, i])
                },
                normalizeMatch: h
            },
            emoji: {
                match: /(^|\s)(:([a-z0-9\-\+_]*))$/i,
                replace: "$1$value ",
                getValue: function(e) {
                    return a.emoji && e.getAttribute("data-raw-value") || e.getAttribute("data-value")
                },
                search: function(e, t) {
                    var n, i;
                    return n = $(e).find("ul.emoji-suggestions"), t = " " + t.toLowerCase().replace(/_/g, " "), i = n.fuzzyFilterSortList(t, {
                        limit: 5,
                        text: o,
                        score: s
                    }), Promise.resolve([n, i])
                }
            },
            hashed: {
                match: /(^|\s)(\#([a-z0-9\-_\/]*))$/i,
                replace: "$1#$value ",
                search: function(e, t) {
                    var i, r, s, o;
                    return i = $(e).find("ul.hashed-suggestions"), r = /^\d+$/.test(t) ? (s = new RegExp("\\b" + t), function(e) {
                        return d(e, s)
                    }) : u(t).score, o = i.fuzzyFilterSortList(t, {
                        limit: 5,
                        text: n,
                        score: r
                    }), Promise.resolve([i, o])
                }
            }
        }, r = {}, o = function(e) {
            var t;
            return t = e.getAttribute("data-emoji-name"), r[t] = " " + n(e).replace(/_/g, " "), t
        }, n = function(e) {
            return e.getAttribute("data-text").trim().toLowerCase()
        }, s = function(e, t) {
            var n;
            return n = r[e].indexOf(t), n > -1 ? 1e3 - n : 0
        }, d = function(e, t) {
            var n;
            return n = e.search(t), n > -1 ? 1e3 - n : 0
        }, f = function(e, n) {
            var i, r, s, o, a, c, u;
            if (u = t(e, n[0]), 0 !== u.length) {
                if (1 === n.length) return [u[0], 1, []];
                for (a = null, r = 0, s = u.length; s > r; r++) c = u[r], (i = l(e, n, c + 1)) && (o = i[i.length - 1] - c, (!a || o < a[1]) && (a = [c, o, i]));
                return a
            }
        }, t = function(e, t) {
            var n, i;
            for (n = 0, i = [];
                (n = e.indexOf(t, n)) > -1;) i.push(n++);
            return i
        }, l = function(e, t, n) {
            var i, r, s, o;
            for (r = [], i = s = 1, o = t.length; o >= 1 ? o > s : s > o; i = o >= 1 ? ++s : --s) {
                if (n = e.indexOf(t[i], n), -1 === n) return;
                r.push(n++)
            }
            return r
        }, c = function() {
            return 2
        }, u = function(e) {
            var t, n;
            return e ? (t = e.toLowerCase().split(""), n = function(n) {
                var i, r;
                return n && (i = f(n, t)) ? (r = e.length / i[1], r /= i[0] / 2 + 1) : 0
            }) : n = c, {
                score: n
            }
        }, i = function(e) {
            var t;
            return t = e.match(/`{3,}/g), t || (t = m(e).match(/`/g)), (null != t ? t.length : void 0) % 2
        }, m = function(e) {
            return e.replace(/`{3,}[^`]*\n(.+)?\n`{3,}/g, "")
        }, $(document).on("focusin:delayed", ".js-suggester-field", function() {
            new e({
                input: this,
                suggester: this.closest(".js-suggester-container").querySelector(".js-suggester"),
                types: p,
                disable: i
            }).setup()
        })
    }.call(this),
    function() {
        function e() {
            return "survey-" + document.querySelector(".js-survey").getAttribute("data-survey-slug")
        }

        function t() {
            return parseInt(l(e())) || 0
        }

        function n() {
            var n = arguments.length <= 0 || void 0 === arguments[0] ? 1 : arguments[0];
            d(e(), t() + n)
        }

        function i() {
            return "github.dev" === location.hostname || location.search.match(/show-survey=1/) ? !0 : t() < h
        }

        function r(e) {
            if (e.getAttribute("data-optional-question")) return !0;
            var t = e.querySelector("input.js-other-choice"),
                n = e.querySelector("input[type=text]");
            if (t && t.checked) {
                var i = n.value.trim();
                return i
            }
            return e.querySelector("input:checked") ? !0 : !1
        }

        function s(e) {
            var t = e.closest(".js-survey"),
                n = t.querySelector(".js-survey-button");
            n.disabled = !r(e)
        }

        function o(e) {
            var t = e.querySelector("input.js-other-choice"),
                n = e.querySelector("input[type=text]");
            t && (n.classList.toggle("hidden", !t.checked), t.checked && n.focus())
        }

        function a(e, t) {
            var i = e.querySelector(".js-survey-form"),
                r = e.querySelectorAll(".js-survey-box-header, .js-survey-body, .js-survey-footer"),
                s = e.querySelector(".js-survey-complete");
            t.classList.toggle("hidden", !0), Array.from(r).forEach(function(e) {
                return e.classList.toggle("hidden", !0)
            }), s.classList.toggle("hidden", !1), window.ga("send", "event", "survey", "click", "submit"), n(h), $(i).submit(), setTimeout(function() {
                return e.classList.toggle("anim-fade-down", !0)
            }, 5e3)
        }

        function c(e, t, n) {
            var i = n.getAttribute("data-next-question"),
                r = e.querySelector(".js-question-" + i),
                o = e.querySelector(".js-question-number");
            window.ga("send", "event", "survey", "click", "next", i), o.textContent = parseInt(i) + 1, r.classList.toggle("hidden", !1), s(r), r.getAttribute("data-last-question") && (r.querySelector("textarea").focus(), t.textContent = "Submit", t.classList.add("btn-primary"))
        }
        var u = require("github/local-storage"),
            l = u.getItem,
            d = u.setItem,
            h = 3;
        $.observe(".js-survey", function() {
            i() ? (window.ga("send", "event", "survey", "show"), n(), this.classList.toggle("hidden", !1)) : this.classList.toggle("hidden", !0)
        }), $(document).on("ajaxSuccess", ".js-survey-form", function() {
            window.ga("send", "event", "survey", "success")
        }), $(document).on("click", ".js-survey-button", function() {
            var e = this.closest(".js-survey"),
                t = e.querySelector(".js-question:not(.hidden)"),
                n = t.getAttribute("data-last-question"),
                i = this;
            t.classList.toggle("hidden", !0), n ? a(e, i) : c(e, i, t)
        }), $(document).on("click", ".js-dismiss-survey", function(e) {
            window.ga("send", "event", "survey", "click", "dimiss"), document.querySelector(".js-survey").classList.toggle("anim-fade-down", !0), n(h), e.preventDefault()
        }), $(document).on("change", ".js-survey", function() {
            var e = this.querySelector(".js-question:not(.hidden)");
            s(e), o(e)
        }), $.observe(".js-survey input[type=text]", function() {
            $(this).on("input", function() {
                var e = this.closest(".js-survey"),
                    t = e.querySelector(".js-question:not(.hidden)");
                s(t)
            })
        })
    }();
var _createClass = function() {
    function e(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
    }
    return function(t, n, i) {
        return n && e(t.prototype, n), i && e(t, i), t
    }
}();
! function() {
    var e = require("github/suggester")["default"],
        t = require("github/fuzzy-filter").fuzzyScore,
        n = require("github/hotkey")["default"],
        i = function() {
            function i(e) {
                _classCallCheck(this, i), this.container = e.container, this.selections = e.selections, this.inputWrap = e.inputWrap, this.input = e.input, this.suggestions = e.suggestions, this.tagTemplate = e.tagTemplate
            }
            return _createClass(i, [{
                key: "setup",
                value: function() {
                    this.container.addEventListener("click", function(e) {
                        e.target.matches(".js-remove") ? this.removeTag(e) : this.onFocus()
                    }.bind(this)), this.input.addEventListener("focus", this.onFocus.bind(this)), this.input.addEventListener("blur", this.onBlur.bind(this)), this.input.addEventListener("keydown", this.onKeyDown.bind(this)), this.setupSuggester()
                }
            }, {
                key: "setupSuggester",
                value: function() {
                    var t = this.suggestions.cloneNode(!0);
                    this.container.appendChild(t), new e({
                        input: this.input,
                        suggester: this.suggestions,
                        suggestions: t,
                        repositionManually: !0,
                        teardownManually: !0,
                        onActivate: this.repositionSuggester.bind(this),
                        types: {
                            tag: {
                                match: /.+/i,
                                onSelection: this.selectTag.bind(this),
                                search: this.filterSuggestions.bind(this),
                                normalizeMatch: this.normalizeSuggestionMatch.bind(this)
                            }
                        }
                    }).setup(), this.container.classList.add("js-suggester-container"), this.suggestions.classList.add("js-navigation-container", "suggester")
                }
            }, {
                key: "onFocus",
                value: function() {
                    this.inputWrap.classList.add("focus"), this.input != document.activeElement && this.input.focus()
                }
            }, {
                key: "onBlur",
                value: function() {
                    this.inputWrap.classList.remove("focus")
                }
            }, {
                key: "onKeyDown",
                value: function(e) {
                    switch (n(e)) {
                        case "backspace":
                            this.onBackspace(e);
                            break;
                        case "enter":
                        case "tab":
                            !this.isSuggesterVisible() && this.val() && (e.preventDefault(), this.selectTag(this.val()))
                    }
                }
            }, {
                key: "selectTag",
                value: function(e) {
                    this.selections.appendChild(this.templateTag(e)), this.input.value = ""
                }
            }, {
                key: "removeTag",
                value: function(e) {
                    e.preventDefault(), e.target.closest(".tag-input-tag").remove()
                }
            }, {
                key: "templateTag",
                value: function(e) {
                    var t = this.normalizeTag(e),
                        n = this.tagTemplate.cloneNode(!0);
                    return n.querySelector("input").value = t, n.querySelector(".js-placeholder-tag-name").replaceWith(t), n.classList.remove("hidden", "js-template"), n
                }
            }, {
                key: "normalizeTag",
                value: function(e) {
                    return e.toLowerCase().trim().replace(/[^a-z0-9\.\-]/g, "-")
                }
            }, {
                key: "onBackspace",
                value: function() {
                    if (!this.val()) {
                        var e = this.selections.querySelector("li:last-child .js-remove");
                        e && e.click()
                    }
                }
            }, {
                key: "val",
                value: function() {
                    return this.input.value
                }
            }, {
                key: "repositionSuggester",
                value: function(e) {
                    e.style.position = "absolute", e.style.top = this.container.clientHeight + "px"
                }
            }, {
                key: "filterSuggestions",
                value: function(e, n) {
                    var i = this.selectedTags(),
                        r = $(e).find("ul.js-tag-suggestions"),
                        s = r.fuzzyFilterSortList(n, {
                            limit: 5,
                            score: function(e, n) {
                                return i.indexOf(e) >= 0 ? 0 : t(e, n)
                            }
                        });
                    return Promise.resolve([r, s])
                }
            }, {
                key: "normalizeSuggestionMatch",
                value: function(e, t, n) {
                    return {
                        type: e,
                        text: n[0],
                        query: n[0]
                    }
                }
            }, {
                key: "selectedTags",
                value: function() {
                    var e = this.selections.querySelectorAll("input");
                    return [].concat(_toConsumableArray(e)).map(function(e) {
                        return e.value
                    })
                }
            }, {
                key: "isSuggesterVisible",
                value: function() {
                    return !!this.suggestions.offsetParent
                }
            }]), i
        }();
    $.observe(".js-tag-input-container", function() {
        var e = this.querySelector(".js-template");
        e.remove(), new i({
            container: this,
            inputWrap: this.querySelector(".js-tag-input-wrapper"),
            input: this.querySelector('input[type="text"]'),
            suggestions: this.querySelector(".js-tag-input-options"),
            selections: this.querySelector(".js-tag-input-selected-tags"),
            tagTemplate: e
        }).setup()
    })
}(),
function() {
    $(document).on("tasklist:change", ".js-task-list-container", function() {
        $(this).taskList("disable")
    }), $(document).on("tasklist:changed", ".js-task-list-container", function(e, t, n) {
        var i, r, s, o;
        return r = $(this).find("form.js-comment-update"), s = r.find("input[name=task_list_key]"), s.length > 0 || (o = r.find(".js-task-list-field").attr("name").split("[")[0], s = $("<input>", {
            type: "hidden",
            name: "task_list_key",
            value: o
        }), r.append(s)), n = n ? "1" : "0", i = $("<input>", {
            type: "hidden",
            name: "task_list_checked",
            value: n
        }), r.append(i), r.one("ajaxComplete", function(e, t) {
            return i.remove(), 200 !== t.status || /^\s*</.test(t.responseText) ? 422 === t.status && t.stale ? window.location.reload() : void 0 : $(this).taskList("enable")
        }), r.submit()
    }), $.observe(".task-list", function() {
        $(this).taskList("enable")
    })
}.call(this),
    function() {
        var e, t, n, i;
        e = require("github/fetch").fetchJSON, t = function() {
            var t, r, s, o, a, c;
            if (c = this.getAttribute("data-url")) return a = e(c), s = this.getAttribute("data-id"), o = $(".js-team-mention[data-id='" + s + "']"), o.removeAttr("data-url"), t = function(e) {
                return 0 === e.total ? e.members.push("This team has no members") : e.total > e.members.length && e.members.push(e.total - e.members.length + " more"), i(o, n(e.members))
            }, r = function(e) {
                return function(t) {
                    var n, r, s;
                    return s = (null != (r = t.response) ? r.status : void 0) || 500, n = function() {
                        switch (s) {
                            case 404:
                                return this.getAttribute("data-permission-text");
                            default:
                                return this.getAttribute("data-error-text")
                        }
                    }.call(e), i(o, n)
                }
            }(this), a.then(t, r)
        }, i = function(e, t) {
            return e.attr("aria-label", t), e.addClass("tooltipped tooltipped-s tooltipped-multiline")
        }, n = function(e) {
            var t;
            return 0 === e.length ? "" : 1 === e.length ? e[0] : 2 === e.length ? e.join(" and ") : ([].splice.apply(e, [-1, 9e9].concat(t = "and " + e.slice(-1))), e.join(", "))
        }, $.observe(".js-team-mention", function() {
            $(this).on("mouseenter", t)
        })
    }.call(this),
    function() {
        $(document).on("ajaxBeforeSend", function(e, t, n) {
            var i;
            n.crossDomain || (i = $(".js-timeline-marker"), i.length && t.setRequestHeader("X-Timeline-Last-Modified", i.attr("data-last-modified")))
        })
    }.call(this),
    function() {
        var e, t, n, i, r = require("github/dimensions"),
            s = r.overflowOffset;
        $(document).on("click", ".js-timeline-progressive-disclosure-button", function() {
            var e;
            return e = this.closest(".js-timeline-progressive-disclosure-container"), e.src = this.getAttribute("data-url"), !0
        }), t = null, $.observe(".js-timeline-progressive-disclosure-container", function() {
            return {
                add: function(e) {
                    return e.addEventListener("loadstart", function() {
                        return this.classList.add("is-loading"), !0
                    }), e.addEventListener("loadend", function() {
                        return this.classList.remove("is-loading"), !0
                    }), e.addEventListener("load", function() {
                        var n, i, r, o, a, c;
                        return e === t && (t = null, r = window.location.hash.slice(1), (i = document.getElementById(r)) && (null != (o = i.closest(".js-details-container")) && o.classList.add("open"), a = s(i), c = a.top,
                            n = a.bottom, (0 > c || 0 > n) && i.scrollIntoView())), !0
                    }), e.addEventListener("error", function() {
                        return this.src = "", !0
                    })
                }
            }
        }), e = /^(?:commits-pushed-([0-9a-f]{7})|discussion-diff-(\d+)(?:[LR]-?\d+)?|discussion_r(\d+)|event-(\d+)|issuecomment-(\d+)|ref-issue-(\d+)|ref-pullrequest-(\d+))$/, i = function(t) {
            var n, i, r, s, o, a, c, u, l, d, h, f;
            return c = e.exec(t), null != c ? (n = c[0], i = c[1], s = c[2], r = c[3], o = c[4], h = c[5], f = c[6], a = null != (u = null != (l = null != (d = null != s ? s : r) ? d : o) ? l : h) ? u : f, null != a ? {
                timeline_item_id: a
            } : null != i ? {
                commit_sha: i
            } : void 0) : void 0
        }, (n = function() {
            var e, n, r, s, o;
            return n = window.location.hash.slice(1), !document.getElementById(n) && (e = document.querySelector(".js-timeline-progressive-disclosure-container"), e && (r = i(n))) ? (o = e.getAttribute("data-fragment-url"), s = o.indexOf("?") ? "&" : "?", e.src = o + s + $.param(r), t = e) : void 0
        })()
    }.call(this),
    function() {
        function e() {
            if (!window.performance.timing) try {
                return sessionStorage.setItem("navigationStart", Date.now())
            } catch (e) {}
        }

        function t() {
            return setTimeout(function() {
                var e, t, i, r, s, o, a, c, u, l, d, h;
                if (d = {}, d.crossBrowserLoadEvent = Date.now(), window.performance.timing) {
                    o = window.performance.timing;
                    for (i in o) h = o[i], "number" == typeof h && (d[i] = h);
                    (e = null != (a = window.chrome) && "function" == typeof a.loadTimes && null != (c = a.loadTimes()) ? c.firstPaintTime : void 0) && (d.chromeFirstPaintTime = Math.round(1e3 * e))
                } else s = function() {
                    try {
                        return sessionStorage.getItem("navigationStart")
                    } catch (e) {}
                }(), s && (d.simulatedNavigationStart = parseInt(s, 10));
                for (l = function() {
                        var e, t, n, i;
                        for (n = window.performance.getEntriesByType("resource"), i = [], e = 0, t = n.length; t > e; e++) u = n[e], i.push($.extend({}, u));
                        return i
                    }(), t = 0, r = l.length; r > t; t++) u = l[t], delete u.toJSON;
                return Object.keys(d).length > 1 || l.length ? n({
                    timing: d,
                    resources: l
                }) : void 0
            }, 0)
        }
        var n = require("github/stats")["default"];
        $(window).on("pagehide", e), $(window).on("load", t)
    }.call(this), $(document).on("click", ".js-toggler-container .js-toggler-target", function(e) {
        return 1 === e.which ? ($(e.target).trigger("toggler:toggle"), 0 === $(this).parent(".js-toggler-form").length ? !1 : void 0) : void 0
    }), $(document).on("ajaxSend", ".js-toggler-container", function() {
        this.classList.remove("success", "error"), this.classList.add("loading")
    }), $(document).on("ajaxComplete", ".js-toggler-container", function() {
        this.classList.remove("loading")
    }), $(document).on("ajaxSuccess", ".js-toggler-container", function() {
        this.classList.add("success")
    }), $(document).on("ajaxError", ".js-toggler-container", function() {
        this.classList.add("error")
    }), $(document).on("toggler:toggle", ".js-toggler-container", function() {
        this.classList.toggle("on")
    }),
    function() {
        var e, t, n;
        n = 0, t = function(e) {
            var t;
            if (document.hasFocus() && (t = document.querySelector(".js-timeline-marker-form"))) return $(t).submit()
        }, $.inViewport(".js-unread-item", {
            "in": function() {
                e(this)
            }
        }), $.observe(".js-unread-item", {
            add: function() {
                return n++
            },
            remove: function() {
                return n--, 0 === n ? t(this) : void 0
            }
        }), e = function(e) {
            return e.classList.remove("js-unread-item", "unread-item")
        }, $(document).on("socket:message", ".js-discussion", function(t) {
            var n, i, r, s;
            if (this === t.target)
                for (s = document.querySelectorAll(".js-unread-item"), i = 0, r = s.length; r > i; i++) n = s[i], e(n)
        })
    }.call(this),
    function() {
        function e() {
            var e;
            return e = n ? "(" + n + ") " : "", document.title.match(t) ? document.title = document.title.replace(t, e) : document.title = "" + e + document.title
        }
        var t, n;
        n = 0, t = /^\(\d+\)\s+/, $.observe(".js-unread-item", {
            add: function() {
                return n++, e()
            },
            remove: function() {
                return n--, e()
            }
        })
    }.call(this),
    function() {
        var e, t, n, i, r = require("github/has-interactions"),
            s = r.hasInteractions;
        e = new WeakMap, $.fn.updateContent = function(n) {
            var i, r;
            return i = this[0], null != (r = e.get(i)) && r.abort(), t(i, n)
        }, $(document).on("socket:message", ".js-updatable-content", function(t, r, s) {
            var o;
            this === t.target && (e.get(this) || (o = new XMLHttpRequest, o.open("GET", this.getAttribute("data-url")), o.setRequestHeader("Accept", "text/html"), o.setRequestHeader("X-Requested-With", "XMLHttpRequest"), e.set(this, o), i(o).then(function(t) {
                return function(i) {
                    return e["delete"](t), n(t, i)
                }
            }(this))["catch"](function(t) {
                return function(n) {
                    e["delete"](t), "XMLHttpRequest abort" !== n.message && console.warn("Failed to update content", t, n)
                }
            }(this))))
        }), i = function(e) {
            return new Promise(function(t, n) {
                return e.onload = function() {
                    return 200 === e.status ? t(e.responseText) : n(new Error("XMLHttpRequest " + e.statusText))
                }, e.onerror = n, e.send()
            })
        }, t = function(e, t) {
            return $.preserveInteractivePosition(function() {
                var n;
                return n = $($.parseHTML($.trim(t))), $(e).replaceWith(n), n
            })
        }, n = function(e, n) {
            if (s(e)) throw new Error("element had interactions");
            return t(e, n)
        }
    }.call(this),
    function() {
        var e, t;
        e = require("delegated-events"), t = require("github/fetch").fetchText, e.on("upload:setup", ".js-upload-avatar-image", function(e) {
            var t, n, i, r;
            return r = e.detail.policyRequest, t = this.getAttribute("data-alambic-organization"), i = this.getAttribute("data-alambic-owner-type"), n = this.getAttribute("data-alambic-owner-id"), t && r.body.append("organization_id", t), i && r.body.append("owner_type", i), n ? r.body.append("owner_id", n) : void 0
        }), e.on("upload:complete", ".js-upload-avatar-image", function(e) {
            var n, i;
            return n = e.detail.result, i = "/settings/avatars/" + n.id, $.facebox(function() {
                return t(i).then($.facebox)
            })
        })
    }.call(this),
    function() {
        var e, t, n, i, r, s, o, a, c, u, l;
        i = require("github/image-dimensions")["default"], n = require("delegated-events"), l = require("setimmediate")["default"], c = require("github/text"), r = c.insertText, u = c.replaceText, o = function(e) {
            return e.toLowerCase().replace(/[^a-z0-9\-_]+/gi, ".").replace(/\.{2,}/g, ".").replace(/^\.|\.$/gi, "")
        }, a = function(e) {
            var t;
            return t = s(e) ? "!" : "", t + ("[Uploading " + e.name + "\u2026]()")
        }, t = function(e) {
            return o(e).replace(/\.[^.]+$/, "").replace(/\./g, " ")
        }, s = function(e) {
            var t;
            return "image/gif" === (t = e.type) || "image/png" === t || "image/jpg" === t || "image/jpeg" === t
        }, e = 144, n.on("upload:setup", ".js-upload-markdown-image", function(e) {
            var t;
            return t = this.querySelector(".js-comment-field"), r(t, a(e.detail.file) + "\n"), $(this).trigger("validation:change", !1)
        }), n.on("upload:complete", ".js-upload-markdown-image", function(n) {
            var r, o, c, d, h;
            return h = n.detail, r = this, o = r.querySelector(".js-comment-field"), c = a(h.file), d = function(n) {
                var i, a, l, d;
                return a = s(h.file) ? (i = t(h.policy.asset.name), l = h.policy.asset.href, (null != n ? n.ppi : void 0) === e ? (d = Math.round(n.width / 2), '<img width="' + d + '" alt="' + i + '" src="' + l + '">') : "![" + i + "](" + l + ")") : "[" + h.file.name + "](" + h.policy.asset.href + ")", u(o, c, a), $(r).trigger("validation:field:change")
            }, i(h.file).then(d, function(e) {
                return d(), l(function() {
                    throw e
                })
            })
        }), n.on("upload:error", ".js-upload-markdown-image", function(e) {
            var t, n;
            return t = this.querySelector(".js-comment-field"), n = a(e.detail.file), u(t, n, ""), $(this).trigger("validation:field:change")
        }), n.on("upload:invalid", ".js-upload-markdown-image", function(e) {
            var t, n;
            return t = this.querySelector(".js-comment-field"), n = a(e.detail.file), u(t, n, ""), $(this).trigger("validation:field:change")
        })
    }.call(this),
    function() {
        var e;
        e = require("delegated-events"), e.on("upload:complete", ".js-upload-oauth-logo", function(e) {
            var t;
            return t = e.detail, this.querySelector(".js-image-field").src = t.policy.asset.href, this.classList.add("has-uploaded-logo")
        }), e.on("upload:setup", ".js-upload-oauth-logo", function(e) {
            var t, n;
            return n = e.detail.policyRequest, t = this.getAttribute("data-oauth-application-id"), t ? n.body.append("application_id", t) : void 0
        })
    }.call(this),
    function() {
        var e, t, n, i, r, s, o, a, c, u, l, d, h, f, m, p, g, v, b, y, j, w, x, k, S, C, L, q, A, T, _, E, P, D, M, I, R, H, N, O, z, F, B, U, W, V, Y = [].indexOf || function(e) {
            for (var t = 0, n = this.length; n > t; t++)
                if (t in this && this[t] === e) return t;
            return -1
        };
        w = require("github/inspect")["default"], m = require("delegated-events").fire, h = require("github/fetch").fetchJSON, j = require("github/text").insertText, N = function(e) {
            var t;
            return (null != (t = e.closest("form").elements.authenticity_token) ? t.value : void 0) || function() {
                throw new Error(w(e) + " is missing authenticity_token")
            }()
        }, t = function() {
            function e() {
                this.uploads = [], this.busy = !1
            }
            return e.prototype.upload = function(e, t) {
                var n;
                return n = function() {}, this.uploads.push({
                    file: e,
                    to: t.to,
                    sameOrigin: t.sameOrigin,
                    csrf: t.csrf,
                    form: t.form || {},
                    header: t.header || {},
                    start: t.start || n,
                    progress: t.progress || n,
                    complete: t.complete || n,
                    error: t.error || n
                }), this.process()
            }, e.prototype.process = function() {
                var e, t, n, i, r, s, o;
                if (!this.busy && 0 !== this.uploads.length) {
                    r = this.uploads.shift(), this.busy = !0, o = new XMLHttpRequest, o.open("POST", r.to, !0), n = r.header;
                    for (t in n) s = n[t], o.setRequestHeader(t, s);
                    o.onloadstart = function() {
                        return r.start()
                    }, o.onload = function(e) {
                        return function() {
                            return 204 === o.status ? r.complete({}) : 201 === o.status ? r.complete(JSON.parse(o.responseText)) : r.error({
                                status: o.status,
                                body: o.responseText
                            }), e.busy = !1, e.process()
                        }
                    }(this), o.onerror = function() {
                        return r.error({
                            status: 0,
                            body: ""
                        })
                    }, o.upload.onprogress = function(e) {
                        var t;
                        return e.lengthComputable ? (t = Math.round(e.loaded / e.total * 100), r.progress(t)) : void 0
                    }, e = new FormData, r.sameOrigin && e.append("authenticity_token", r.csrf), i = r.form;
                    for (t in i) s = i[t], e.append(t, s);
                    return e.append("file", r.file), o.send(e)
                }
            }, e
        }(), I = ["is-default", "is-uploading", "is-bad-file", "is-duplicate-filename", "is-too-big", "is-too-many", "is-failed", "is-bad-dimensions", "is-empty", "is-bad-permissions", "is-repository-required"], H = function(e, t) {
            var n;
            return (n = e.classList).remove.apply(n, I), e.classList.add(t)
        }, W = new t, e = function() {
            function e(e) {
                var t;
                this.files = function() {
                    var n, i, r;
                    for (r = [], n = 0, i = e.length; i > n; n++) t = e[n], r.push(t);
                    return r
                }(), this.percentages = function() {
                    var n, i, r;
                    for (r = [], n = 0, i = e.length; i > n; n++) t = e[n], r.push(0);
                    return r
                }(), this.size = this.files.length, this.total = this.files.reduce(function(e, t) {
                    return e + t.size
                }, 0), this.uploaded = 0
            }
            return e.prototype.percent = function() {
                var e, t, n;
                return e = function() {
                    var e, i, r, s;
                    for (r = this.files, s = [], n = e = 0, i = r.length; i > e; n = ++e) t = r[n], s.push(t.size * this.percentages[n] / 100);
                    return s
                }.call(this).reduce(function(e, t) {
                    return e + t
                }), Math.round(e / this.total * 100)
            }, e.prototype.progress = function(e, t) {
                var n;
                return n = this.files.indexOf(e), this.percentages[n] = t
            }, e.prototype.completed = function(e) {
                return this.uploaded += 1
            }, e.prototype.isFinished = function() {
                return this.uploaded === this.files.length
            }, e
        }(), R = function(e, t) {
            var n, i, r, s, o;
            for (s = e.files, o = [], i = 0, r = s.length; r > i; i++) n = s[i], o.push(function(n) {
                var i, r;
                return i = c(n, t), r = [], m(t, "upload:setup", {
                    batch: e,
                    file: n,
                    policyRequest: i,
                    preprocess: r
                }) ? Promise.all(r).then(function() {
                    return h(i.url, i)
                }).then(function(i) {
                    var r;
                    return r = u(e, n, i, t), W.upload(n, r)
                })["catch"](function(i) {
                    var r;
                    return m(t, "upload:invalid", {
                        batch: e,
                        file: n,
                        error: i
                    }), null != i.response ? i.response.text().then(function(e) {
                        var r, s;
                        return s = i.response.status, r = M({
                            status: s,
                            body: e
                        }, n), H(t, r)
                    }) : (r = M({
                        status: 0
                    }), H(t, r))
                }) : void 0
            }(n));
            return o
        }, c = function(e, t) {
            var n, i, r;
            return r = t.getAttribute("data-upload-policy-url"), i = t.getAttribute("data-upload-repository-id"), n = new FormData, n.append("name", e.name), n.append("size", e.size), n.append("content_type", e.type), n.append("authenticity_token", N(t)), i && n.append("repository_id", i), e._path && n.append("directory", e._path), {
                url: r,
                method: "post",
                body: n,
                headers: {}
            }
        }, M = function(e, t) {
            var n, i, r, s, o, a;
            if (400 === e.status) return "is-bad-file";
            if (422 !== e.status) return "is-failed";
            if (i = JSON.parse(e.body), null == (null != i ? i.errors : void 0)) return "is-failed";
            for (o = i.errors, r = 0, s = o.length; s > r; r++) switch (n = o[r], n.field) {
                case "size":
                    return a = null != t ? t.size : void 0, null != a && 0 === parseInt(a) ? "is-empty" : "is-too-big";
                case "file_count":
                    return "is-too-many";
                case "width":
                case "height":
                    return "is-bad-dimensions";
                case "name":
                    return "already_exists" === n.code ? "is-duplicate-filename" : "is-bad-file";
                case "content_type":
                    return "is-bad-file";
                case "uploader_id":
                    return "is-bad-permissions";
                case "repository_id":
                    return "is-repository-required"
            }
            return "is-failed"
        }, u = function(e, t, n, i) {
            var r;
            return r = {
                to: n.upload_url,
                form: n.form,
                header: n.header,
                sameOrigin: n.same_origin,
                csrf: N(i),
                start: function() {
                    return H(i, "is-uploading"), m(i, "upload:start", {
                        batch: e,
                        file: t,
                        policy: n
                    })
                },
                progress: function(n) {
                    return e.progress(t, n), m(i, "upload:progress", {
                        batch: e,
                        file: t,
                        percent: n
                    })
                },
                complete: function(r) {
                    var s, o;
                    return e.completed(t), null != (null != r ? r.href : void 0) && (n.asset || (n.asset = {}), n.asset.href = r.href), (null != (o = n.asset_upload_url) ? o.length : void 0) > 0 && (s = new FormData, s.append("authenticity_token", N(i)), h(n.asset_upload_url, {
                        method: "put",
                        body: s
                    })), m(i, "upload:complete", {
                        batch: e,
                        file: t,
                        policy: n,
                        result: r
                    }), H(i, "is-default")
                },
                error: function(r) {
                    var s;
                    return m(i, "upload:error", {
                        batch: e,
                        file: t,
                        policy: n
                    }), s = M(r), H(i, s)
                }
            }
        }, O = function(e) {
            return e.types ? Y.call(e.types, "Files") >= 0 : !1
        }, z = function(e) {
            return e.types ? Y.call(e.types, "text/uri-list") >= 0 : !1
        }, F = function(e) {
            return e.types ? Y.call(e.types, "text/plain") >= 0 : !1
        }, p = function(e) {
            var t, n, i, r;
            for (i = [], t = 0, n = e.length; n > t; t++) r = e[t], Array.isArray(r) ? i = i.concat(p(r)) : i.push(r);
            return i
        }, b = function(e) {
            return e.name.startsWith(".")
        }, V = function(e) {
            var t, n, i, r;
            for (r = [], n = 0, i = e.length; i > n; n++) t = e[n], b(t) || r.push(t);
            return r
        }, B = function(e, t) {
            return t.getFilesAndDirectories ? t.getFilesAndDirectories().then(function(e) {
                var n, i;
                return i = function() {
                    var i, r, s, o;
                    for (s = V(e), o = [], i = 0, r = s.length; r > i; i++) n = s[i], o.push(B(t.path, n));
                    return o
                }(), Promise.all(i)
            }) : (t._path = e, t)
        }, s = function(e) {
            return B("", e).then(p)
        }, v = function(e) {
            return new Promise(function(t, n) {
                return e.file(t, n)
            })
        }, g = function(e) {
            return new Promise(function(t, n) {
                return e.createReader().readEntries(t, n)
            })
        }, U = function(e, t) {
            return t.isDirectory ? g(t).then(function(e) {
                var n, i;
                return i = function() {
                    var i, r, s, o;
                    for (s = V(e), o = [], i = 0, r = s.length; r > i; i++) n = s[i], o.push(U(t.fullPath, n));
                    return o
                }(), Promise.all(i)
            }) : v(t).then(function(t) {
                return t._path = e, t
            })
        }, k = function(e) {
            var t, n, i, r;
            if (!e.items) return !1;
            for (r = e.items, t = 0, i = r.length; i > t; t++)
                if (n = r[t], n.webkitGetAsEntry && n.webkitGetAsEntry().isDirectory) return !0;
            return !1
        }, o = function(e) {
            var t, n, i, r;
            return t = function() {
                var t, n, r, s;
                for (r = e.items, s = [], t = 0, n = r.length; n > t; t++) i = r[t], s.push(i.webkitGetAsEntry());
                return s
            }(), r = function() {
                var e, i, r, s;
                for (r = V(t), s = [], e = 0, i = r.length; i > e; e++) n = r[e], s.push(U("", n));
                return s
            }(), Promise.all(r).then(p)
        }, n = function(t, n) {
            var i;
            return i = new e(t), R(i, n)
        }, i = function(e, t) {
            var n, i, r, s, o, a, c;
            if (e) {
                for (n = t.querySelector(".js-comment-field"), o = e.split("\r\n"), a = [], i = 0, r = o.length; r > i; i++) s = o[i], c = x(s) ? "\n![](" + s + ")\n" : s, a.push(j(n, c));
                return a
            }
        }, r = function(e, t) {
            var n;
            return n = t.querySelector(".js-comment-field"), j(n, e)
        }, x = function(e) {
            var t;
            return t = e.split(".").pop(), "gif" === t || "png" === t || "jpg" === t || "jpeg" === t
        }, l = function(e) {
            return O(e) ? "copy" : z(e) ? "link" : F(e) ? "copy" : "none"
        }, f = function(e) {
            switch (e) {
                case "image/gif":
                    return "image.gif";
                case "image/png":
                    return "image.png";
                case "image/jpeg":
                    return "image.jpg"
            }
        }, q = function(e) {
            return e.preventDefault()
        }, L = function(e) {
            return e.dataTransfer.dropEffect = "none", e.preventDefault()
        }, d = null, T = function(e) {
            var t, n;
            if (!y) return clearTimeout(d), t = function(e) {
                return function() {
                    return e.classList.remove("dragover")
                }
            }(this), d = setTimeout(t, 200), n = l(e.dataTransfer), e.dataTransfer.dropEffect = n, this.classList.add("dragover"), e.stopPropagation(), e.preventDefault()
        }, _ = function(e) {
            return e.dataTransfer.dropEffect = "none", this.classList.remove("dragover"), e.stopPropagation(), e.preventDefault()
        }, S = function(e) {
            var t;
            return (null != (t = e.target.classList) ? t.contains("js-document-dropzone") : void 0) ? this.classList.remove("dragover") : void 0
        }, P = function(e) {
            var t, a, c;
            return this.classList.remove("dragover"), document.body.classList.remove("dragover"), c = e.dataTransfer, c.types ? O(c) ? (a = this.hasAttribute("data-directory-upload") && c.getFilesAndDirectories ? s(c) : this.hasAttribute("data-directory-upload") && k(c) ? o(c) : Promise.resolve(V(c.files)), t = this, a.then(function(e) {
                var i, r;
                return r = n.bind(null, e), i = !m(t, "upload:drop:setup", {
                    upload: r,
                    files: e
                }), i ? void 0 : n(e, t)
            })) : z(c) ? i(c.getData("text/uri-list"), this) : F(c) && r(c.getData("text/plain"), this) : H(this, "is-bad-browser"), e.stopPropagation(), e.preventDefault()
        }, D = function(e) {
            var t, i, r, s, o, a, c;
            if (null != (null != (a = e.clipboardData) ? a.items : void 0)) {
                for (c = e.clipboardData.items, r = 0, o = c.length; o > r && (s = c[r], !(i = f(s.type))); r++);
                if (i) return t = s.getAsFile(), t.name = i, n([t], this), e.preventDefault()
            }
        }, C = function(e) {
            return e.target.classList.contains("js-manual-file-chooser") ? (e.target.files ? n(e.target.files, this) : H(this, "is-bad-browser"), e.target.value = "") : void 0
        }, a = 0, y = !1, E = function() {
            return y = !0
        }, A = function() {
            return y = !1
        }, $.observe(".js-document-dropzone", {
            add: function() {
                return document.body.addEventListener("dragstart", E), document.body.addEventListener("dragend", A), document.body.addEventListener("dragenter", T), document.body.addEventListener("dragover", T), document.body.addEventListener("dragleave", S), this.addEventListener("drop", P)
            },
            remove: function() {
                return document.body.removeEventListener("dragstart", E), document.body.removeEventListener("dragend", A), document.body.removeEventListener("dragenter", T), document.body.removeEventListener("dragover", T), document.body.removeEventListener("dragleave", S), this.removeEventListener("drop", P)
            }
        }), $.observe(".js-uploadable-container", {
            add: function() {
                return 0 === a++ && (document.addEventListener("drop", q), document.addEventListener("dragover", L)), this.addEventListener("dragenter", T), this.addEventListener("dragover", T), this.addEventListener("dragleave", _), this.addEventListener("drop", P), this.addEventListener("paste", D), this.addEventListener("change", C)
            },
            remove: function() {
                return 0 === --a && (document.removeEventListener("drop", q), document.removeEventListener("dragover", L)), this.removeEventListener("dragenter", T), this.removeEventListener("dragover", T), this.removeEventListener("dragleave", _), this.removeEventListener("drop", P), this.removeEventListener("paste", D), this.removeEventListener("change", C)
            }
        }), ("undefined" == typeof FormData || null === FormData) && document.documentElement.classList.add("no-dnd-uploads")
    }.call(this),
    function() {
        var e, t, n, i;
        t = require("delegated-events"), i = require("setimmediate")["default"], t.on("click", ".js-release-remove-file", function() {
            var e;
            return e = this.closest(".js-release-file"), e.classList.add("delete"), e.querySelector("input.destroy").value = "true"
        }), t.on("click", ".js-release-undo-remove-file", function() {
            var e;
            return e = this.closest(".js-release-file"), e.classList.remove("delete"), e.querySelector("input.destroy").value = ""
        }), n = function(e) {
            return e.closest("form").querySelector("#release_id").value
        }, e = [], t.on("release:saved", ".js-release-form", function() {
            var t, n, r, s, o, a;
            for (i(function() {
                    var t, n, i;
                    for (t = 0, n = e.length; n > t; t++)(i = e[t])();
                    return e.length = 0
                }), a = 0, o = this.querySelectorAll(".js-releases-field .js-release-file"), r = 0, s = o.length; s > r; r++) t = o[r], t.classList.contains("delete") ? t.remove() : t.classList.contains("js-template") || a++;
            return n = this.querySelector(".js-releases-field"), n.classList.toggle("not-populated", !a), n.classList.toggle("is-populated", a)
        }), t.on("upload:setup", ".js-upload-release-file", function(t) {
            var i, r, s, o, a;
            return a = t.detail, s = a.policyRequest, o = a.preprocess, r = this, i = function() {
                var e, t, i;
                return s.body.append("release_id", n(r)), i = document.querySelectorAll(".js-releases-field .js-release-file.delete .id"), i.length ? (t = function() {
                    var t, n, r;
                    for (r = [], t = 0, n = i.length; n > t; t++) e = i[t], r.push(e.value);
                    return r
                }(), s.body.append("deletion_candidates", t.join(","))) : void 0
            }, n(r) ? i() : (o.push(new Promise(function(t) {
                return e.push(t)
            }).then(i)), 1 === e.length ? $("button.js-save-draft").click() : void 0)
        }), t.on("upload:start", ".js-upload-release-file", function(e) {
            var t, n, i, r, s, o, a;
            if (r = e.detail.policy, this.querySelector(".js-upload-meter").classList.remove("hidden"), o = r.asset.replaced_asset) {
                for (s = document.querySelectorAll(".js-releases-field .js-release-file .id"), a = [], n = 0, i = s.length; i > n; n++) t = s[n], Number(t.value) === o ? a.push(t.closest(".js-release-file").remove()) : a.push(void 0);
                return a
            }
        }), t.on("upload:complete", ".js-upload-release-file", function(e) {
            var t, n, i, r, s, o, a, c, u, l;
            for (l = e.detail, a = l.policy, n = document.querySelector(".js-releases-field"), u = n.querySelector(".js-template").cloneNode(!0), u.classList.remove("template", "js-template"), u.querySelector("input.id").value = a.asset.id || l.result.id, o = a.asset.name || a.asset.href.split("/").pop(), c = u.querySelectorAll(".filename"), r = 0, s = c.length; s > r; r++) t = c[r], "INPUT" === t.tagName ? t.value = o : t.textContent = o;
            return i = "", a.asset.size && (i = "(" + (a.asset.size / 1048576).toFixed(2) + " MB)"), u.querySelector(".filesize").textContent = i, n.appendChild(u), n.classList.remove("not-populated"), n.classList.add("is-populated"), this.querySelector(".js-upload-meter").classList.add("hidden")
        }), t.on("upload:progress", ".js-upload-release-file", function(e) {
            var t;
            return t = this.querySelector(".js-upload-meter"), t.style.width = e.detail.percent + "%"
        })
    }.call(this),
    function() {
        var e, t, n, i, r, s, o, a, c, u, l;
        t = require("delegated-events"), u = require("github/fetch"), n = u.fetchJSON, i = u.fetchPoll, c = require("github/pjax"), e = [], o = new WeakMap, l = function(e, t) {
            var n, i, r;
            n = e.closest(".js-upload-manifest-file-container"), i = n.querySelector(".js-upload-progress"), i.classList.add("active"), e.classList.add("is-progress-bar"), r = i.querySelector(".js-upload-meter-text"), r.querySelector(".js-upload-meter-range-start").textContent = t.batch.uploaded + 1, r.querySelector(".js-upload-meter-range-end").textContent = t.batch.size
        }, s = function(e) {
            var t, n, i;
            return e.classList.remove("is-progress-bar"), t = e.closest(".js-upload-manifest-file-container"), n = t.querySelector(".js-upload-progress"), n.classList.remove("active"), i = t.querySelector(".js-upload-meter-text"), i.querySelector(".js-upload-meter-filename").textContent = ""
        }, t.on("upload:drop:setup", ".js-upload-manifest-file", function(e) {
            var t, n;
            t = e.detail.files, n = parseInt(this.getAttribute("data-directory-upload-max-files"), 10), t.length > n && (e.preventDefault(), this.classList.add("is-too-many"))
        }), t.on("upload:drop:setup", ".js-upload-manifest-tree-view", function(e) {
            var t, n;
            return e.preventDefault(), t = e.detail.upload, $(document).one("pjax:success", "#js-repo-pjax-container", function() {
                return t(this.querySelector(".js-uploadable-container"))
            }), n = this.getAttribute("data-drop-url"), c["default"]({
                url: n,
                container: "#js-repo-pjax-container"
            })
        }), t.on("upload:setup", ".js-upload-manifest-file", function(t) {
            var i, r, s, a, c, u;
            return u = t.detail, a = u.policyRequest, c = u.preprocess, l(this, t.detail), r = this, i = function() {
                return a.body.append("upload_manifest_id", o.get(r))
            }, o.get(r) ? i() : c.push(new Promise(function(t) {
                return e.push(t)
            }).then(i)), e.length > 1 || o.get(r) ? void 0 : (s = this.closest(".js-upload-manifest-file-container").querySelector(".js-upload-manifest-form"), n(s.action, {
                method: s.method,
                body: new FormData(s)
            }).then(function(t) {
                var n, i, s, a;
                for (n = document.querySelector(".js-manifest-commit-form"), n.elements.manifest_id.value = t.upload_manifest.id, o.set(r, t.upload_manifest.id), i = 0, s = e.length; s > i; i++)(a = e[i])();
                return e.length = 0
            }))
        }), r = function(e) {
            return e._path ? e._path + "/" + e.name : e.name
        }, t.on("upload:start", ".js-upload-manifest-file", function(e) {
            var t, n, i, s;
            return s = e.detail, t = this.closest(".js-upload-manifest-file-container"), n = t.querySelector(".js-upload-progress"), i = n.querySelector(".js-upload-meter-text"), i.querySelector(".js-upload-meter-range-start").textContent = s.batch.uploaded + 1, i.querySelector(".js-upload-meter-filename").textContent = r(s.file)
        }), t.on("upload:complete", ".js-upload-manifest-file", function(e) {
            var t, n, i, o, a, c;
            return c = e.detail, a = document.querySelector(".js-manifest-commit-file-template"), o = a.rows[0].cloneNode(!0), o.querySelector(".name").textContent = r(c.file), o.querySelector(".js-remove-manifest-file-form").elements.file_id.value = c.policy.asset.id, t = document.querySelector(".js-manifest-file-list"), t.classList.remove("hidden"), this.classList.add("is-file-list"), n = document.querySelector(".js-upload-progress"), n.classList.add("is-file-list"), i = t.querySelector(".js-manifest-file-list-root"), i.appendChild(o), c.batch.isFinished() ? s(this) : void 0
        }), t.on("upload:progress", ".js-upload-manifest-file", function(e) {
            var t, n, i;
            return i = e.detail, t = this.closest(".js-upload-manifest-file-container"), n = t.querySelector(".js-upload-meter"), n.style.width = i.batch.percent() + "%"
        }), a = function() {
            return s(this)
        }, t.on("upload:error", ".js-upload-manifest-file", a), t.on("upload:invalid", ".js-upload-manifest-file", a), $(document).on("ajaxSuccess", ".js-remove-manifest-file-form", function() {
            var e, t, n, i;
            i = this.closest(".js-manifest-file-list-root"), this.closest(".js-manifest-file-entry").remove(), i.hasChildNodes() || (t = i.closest(".js-manifest-file-list"), t.classList.add("hidden"), e = document.querySelector(".js-upload-manifest-file"), e.classList.remove("is-file-list"), n = document.querySelector(".js-upload-progress"), n.classList.remove("is-file-list"))
        }), $.observe(".js-manifest-ready-check", function() {
            var e;
            e = this.getAttribute("data-redirect-url"), i(this.getAttribute("data-poll-url")).then(function() {
                return window.location = e
            })["catch"](function() {
                return document.querySelector(".js-manifest-ready-check").classList.add("hidden"), document.querySelector(".js-manifest-ready-check-failed").classList.remove("hidden")
            })
        })
    }.call(this),
    function() {
        var e, t;
        e = require("github/fragment-target").findElementByFragmentName, t = function() {
            var t, n;
            if (location.hash && !document.querySelector(":target")) {
                try {
                    t = decodeURIComponent(location.hash.slice(1))
                } catch (i) {
                    return
                }
                n = e("user-content-" + t), null != n && n.scrollIntoView()
            }
        }, window.addEventListener("hashchange", t), $(t), document.addEventListener("pjax:success", t)
    }.call(this),
    function() {
        var e, t, n, i, r, s, o;
        o = document.createElement("input"), "checkValidity" in o ? (o.required = !0, o.value = "hi", s = o.cloneNode().checkValidity()) : s = !1, o = null, n = function(i) {
            var r, o, a, c, u;
            if (s) return i.checkValidity();
            if (r = $(i), r.is("[required]") && !t(i)) return !1;
            if (r.is("[pattern]") && !e(i)) return !1;
            if (r.is("form"))
                for (u = i.elements, a = 0, c = u.length; c > a; a++)
                    if (o = u[a], !n(o)) return !1;
            return !0
        }, t = function(e) {
            return !!e.value.trim()
        }, e = function(e) {
            var t;
            return t = new RegExp("^(?:" + $(e).attr("pattern") + ")$"), 0 === e.value.search(t)
        }, i = function() {
            var e;
            return e = n(this), e && $(this).trigger("validation:field:change"),
                function() {
                    var t;
                    t = n(this), t !== e && $(this).trigger("validation:field:change"), e = t
                }
        }, r = ["input[pattern]", "input[required]", "textarea[required]", "select[required]"].join(","), $(document).onFocusedInput(r, i), $(document).on("change", r, i), $.observe(r, function() {
            $(this).trigger("validation:field:change")
        }), $(document).on("validation:field:change", "form", function() {
            var e;
            return e = n(this), $(this).trigger("validation:change", [e])
        }), $(document).on("validation:change", "form", function(e, t) {
            return $(this).find("button[data-disable-invalid]").prop("disabled", !t)
        }), $(document).on("submit", ".js-normalize-submit", function(e) {
            return n(this) ? void 0 : e.preventDefault()
        })
    }.call(this),
    function() {
        var e;
        $.observe(".will-transition-once", {
            add: function() {
                this.addEventListener("transitionend", e)
            },
            remove: function() {
                this.removeEventListener("transitionend", e)
            }
        }), e = function(e) {
            return e.target.classList.remove("will-transition-once")
        }
    }.call(this),
    function() {
        $(document).on("ajaxSuccess", function(e, t) {
            var n;
            (n = t.getResponseHeader("X-XHR-Location")) && (document.location.href = n, e.stopImmediatePropagation())
        })
    }.call(this), $(function() {
        $(".js-signup-form").one("input", "input[type=text]", function() {
            var e = this.form.querySelector(".js-signup-source");
            window.ga("send", "event", "Signup", "Attempt", e.value)
        })
    }),
    function() {
        var e;
        e = require("github/fetch").fetchText, $(document).on("click", ".js-new-user-contrib-example", function(t) {
            var n, i, r;
            return t.preventDefault(), n = document.querySelector(".js-calendar-graph"), n.classList.contains("sample-graph") ? void 0 : (n.classList.add("sample-graph"), i = function(e) {
                var t;
                return t = n.querySelector(".js-calendar-graph-svg"), $(t).replaceWith(e)
            }, r = function() {
                return n.classList.remove("sample-graph")
            }, e(this.getAttribute("href")).then(i, r))
        })
    }.call(this), define("github/d3/format-symbol", ["exports"], function(e) {
        function t(e, t) {
            if (t && (e = Math.abs(e)), 1e3 > e) return e;
            var n = d3.formatPrefix(e);
            return "" + n.scale(e) + n.symbol
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e["default"] = t
    }),
    function() {
        var e, t;
        t = require("github/d3/format-symbol")["default"], e = require("delegated-events"), e.on("graph:load", ".js-graph-code-frequency", function(e) {
            var n, i, r, s, o, a, c, u, l, d, h, f, m, p, g, v, b, y, j, w;
            return r = e.detail.data, v = $(this).width(), o = 500, f = [10, 10, 20, 40], h = f[0], d = f[1], u = f[2], l = f[3], r = r.map(function(e, t) {
                return [new Date(1e3 * e[0]), e[1], e[2]]
            }).sort(function(e, t) {
                return d3.ascending(e[0], t[0])
            }), n = r.map(function(e) {
                return [e[0], e[1]]
            }), s = r.map(function(e) {
                return [e[0], e[2]]
            }), a = d3.max(n, function(e) {
                return e[1]
            }), c = d3.min(s, function(e) {
                return e[1]
            }), g = r[0][0], p = r[r.length - 1][0], b = d3.time.scale().domain([g, p]).range([0, v - l - d]), j = d3.scale.linear().domain([c, a]).range([o - u - h, 0]), y = d3.svg.axis().scale(b).tickFormat(function(e) {
                return g.getFullYear() !== p.getFullYear() ? d3.time.format("%m/%y")(e) : d3.time.format("%m/%d")(e)
            }), w = d3.svg.axis().scale(j).orient("left").tickPadding(5).tickSize(v).tickFormat(function(e) {
                return t(e, !0)
            }), i = d3.svg.area().x(function(e) {
                return b(e[0])
            }).y0(function(e) {
                return j(e[1])
            }).y1(function(e) {
                return j(0)
            }), m = d3.select(this).data(r).append("svg").attr("width", v).attr("height", o).attr("class", "viz code-frequency").append("g").attr("transform", "translate(" + l + "," + h + ")"), m.append("g").attr("class", "x axis").attr("transform", "translate(0, " + (o - h - u) + ")").call(y), m.append("g").attr("class", "y axis").attr("transform", "translate(" + v + ", 0)").call(w), m.selectAll("path.area").data([n, s]).enter().append("path").attr("class", function(e, t) {
                return 0 === t ? "addition" : "deletion"
            }).attr("d", i)
        })
    }.call(this), define("github/locale", ["exports"], function(e) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        e.weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], e.months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    }),
    function() {
        var e, t, n, i, r, s, o;
        t = require("github/d3/format-symbol")["default"], s = require("github/locale"), i = s.months, o = s.weekdays, r = require("github/inflector").pluralize, e = require("delegated-events"), n = require("github/hotkey")["default"], e.on("graph:load", ".js-commit-activity-graph", function(e) {
            var s, a, c, u, l, d, h, f, m, p, g, v, b, y, j, w, x, k, S, C, L, q, A;
            return a = e.detail.data, f = $("#commit-activity-master"), c = $("#commit-activity-detail"), d = 260, k = c.width(), S = 0, w = null,
                function() {
                    var e, t, i, r, s, l, h, f, m, p, g, v, b, y, j, x, C, L, q, A;
                    for (h = 0, s = l = 0, f = a.length; f > l; s = ++l) e = a[s], 0 !== e.total && (h = s);
                    return S = h, j = [20, 30, 30, 40], b = j[0], g = j[1], v = j[2], p = j[3], i = a[S].days, m = d3.max(a, function(e) {
                        return d3.max(e.days)
                    }), C = d3.scale.linear().domain([0, i.length - 1]).range([0, k - g - v]), q = d3.scale.linear().domain([0, m]).range([d, 0]), A = d3.svg.axis().scale(q).orient("left").ticks(5).tickSize(-k + v + g), $(this).on("hotkey:activate", function(e) {
                        var t, i;
                        return t = S, i = n(e.originalEvent), "left" === i || "right" === i ? (S > 0 && "left" === i && (t -= 1), S < a.length && "right" === i && (t += 1), w({
                            index: t
                        })) : void 0
                    }), x = d3.select(c[0]).data([i]).append("svg").attr("width", k).attr("height", d + b + p).attr("class", "viz").append("g").attr("transform", "translate(" + g + "," + b + ")"), x.append("g").attr("class", "y axis").call(A), L = x.append("g").attr("class", "axis"), t = L.selectAll(".day").data(o).enter().append("g").attr("class", "day").attr("transform", function(e, t) {
                        return "translate(" + C(t) + ", " + d + ")"
                    }), t.append("text").attr("text-anchor", "middle").attr("dy", "2em").text(function(e, t) {
                        return e
                    }), y = d3.svg.line().x(function(e, t) {
                        return C(t)
                    }).y(q), x.append("path").attr("class", "path").attr("d", y), r = x.selectAll("g.dot").data(i).enter().append("g").attr("class", "dot").attr("transform", function(e, t) {
                        return "translate(" + C(t) + ", " + q(e) + ")"
                    }), r.append("circle").attr("r", 4), r.append("text").attr("text-anchor", "middle").attr("class", "tip").attr("dy", -10).text(function(e) {
                        return e
                    }), w = function(e) {
                        var t, n, r;
                        if (!(e.index >= 52 || e.index < 0)) return S = e.index, i = a[e.index].days, m = d3.max(i), C.domain([0, i.length - 1]), r = d3.selectAll(".bar.mini").attr("class", "bar mini"), t = d3.select(r[0][S]).attr("class", "bar mini active"), n = d3.transform(t.attr("transform")), u.transition().ease("back-out").duration(300).attr("transform", "translate(" + (n.translate[0] + 8) + ", 105)"), x.selectAll(".path").data([i]).transition().duration(500).attr("d", y), x.selectAll("g.dot").data(i).transition().duration(300).attr("transform", function(e, t) {
                            return "translate(" + C(t) + ", " + q(e) + ")"
                        }), x.selectAll("text.tip").data(i).text(function(e) {
                            return e
                        })
                    }
                }(), b = [10, 30, 20, 30], v = b[0], p = b[1], g = b[2], m = b[3], d = 100, j = a.map(function(e) {
                    return e.total
                }), h = d3.max(j), l = d3.time.format.utc("%m/%d"), C = d3.scale.ordinal().domain(d3.range(j.length)).rangeRoundBands([0, k - p - g], .1), q = d3.scale.linear().domain([0, h]).range([d, 0]), A = d3.svg.axis().scale(q).orient("left").ticks(3).tickSize(-k + p + g).tickFormat(t), L = d3.svg.axis().scale(C).ticks(d3.time.weeks).tickFormat(function(e, t) {
                    var n;
                    return n = new Date(1e3 * a[t].week), l(n)
                }), y = d3.tip().attr("class", "svg-tip").offset([-10, 0]).html(function(e, t) {
                    var n, s;
                    return n = new Date(1e3 * a[t].week), s = i[n.getUTCMonth()].slice(0, 3) + " " + n.getUTCDate(), "<strong>" + e + "</strong> " + r(e, "commit") + " the week of " + s
                }), x = d3.select(f[0]).style("width", k + "px").append("svg").attr("width", k + (p + g)).attr("height", d + v + m).attr("class", "viz").append("g").attr("transform", "translate(" + p + "," + v + ")").call(y), x.append("g").attr("class", "y axis").call(A), s = x.selectAll("g.mini").data(j).enter().append("g").attr("class", function(e, t) {
                    return t === S ? "bar mini active" : "bar mini"
                }).attr("transform", function(e, t) {
                    return "translate(" + C(t) + ", 0)"
                }).on("click", function(e, t) {
                    return w({
                        node: this,
                        index: t,
                        data: e
                    })
                }), s.append("rect").attr("width", C.rangeBand()).attr("height", function(e) {
                    return d - q(e)
                }).attr("y", function(e) {
                    return q(e)
                }).on("mouseover", y.show).on("mouseout", y.hide), x.append("g").attr("class", "x axis").attr("transform", "translate(0," + d + ")").call(L).selectAll(".tick").style("display", function(e, t) {
                    return t % 3 !== 0 ? "none" : "block"
                }), u = x.append("circle").attr("class", "focus").attr("r", 8).attr("transform", "translate(" + (C(S) + C.rangeBand() / 2) + ", " + -d + ")"), u.transition().ease("elastic-in").duration(1e3).attr("r", 2).attr("transform", "translate(" + (C(S) + C.rangeBand() / 2) + ", " + (d + 5) + ")")
        })
    }.call(this),
    function() {
        var e, t, n, i, r, s, o, a, c, u, l;
        n = require("github/d3/format-symbol")["default"], a = require("github/pjax"), t = require("github/number-helpers").formatNumber, r = require("github/locale").months, c = require("github/inflector").pluralize, u = require("github/history").pushState, e = require("delegated-events"), o = function() {
            var e, t, n, i, r, s, o, a;
            for (r = {}, s = document.location.search.substr(1).split("&"), e = 0, n = s.length; n > e; e++) i = s[e], o = i.split("="), t = o[0], a = o[1], r[t] = a;
            return r
        }, i = function(e) {
            return e = new Date(e), r[e.getUTCMonth()].slice(0, 3) + " " + e.getUTCDate() + ", " + e.getUTCFullYear()
        }, l = function(e, t) {
            var n, r;
            return r = i(e), n = i(t), $(".js-date-range").html(r + " &ndash; " + n)
        }, s = function(e) {
            var t, n;
            return t = e[0].weeks[0].date, n = new Date(t.getTime() - 6048e5), e.forEach(function(e) {
                return e.weeks.unshift({
                    a: 0,
                    c: 0,
                    d: 0,
                    date: n,
                    w: n / 1e3
                })
            })
        }, e.on("graph:load", "#contributors", function(i) {
            var r, a, d, h, f, m, p, g, v, b, y, j, w, x, k, S, C, L, q, A;
            return f = i.detail.data, r = $(this), d = [], b = o(), A = null, q = null, null != b.from && (S = new Date(b.from)), null != b.to && (m = new Date(b.to)), h = (null != b ? b.type : void 0) || "c", g = d3.time.format.utc("%Y-%m-%d"), y = function(e) {
                return new Date(1e3 * ~~e)
            }, r[0].addEventListener("range.selection.end", function(e) {
                var t;
                return t = e.detail.range, S = t[0], m = t[1], g(S) === g(m) && (S = A, m = q), L(), l(S, m), x()
            }), w = function(e) {
                var t, n;
                return 1 === e[0].weeks.length && s(e), n = a(e), A = y(n[0].key), q = y(~~n[n.length - 1].key + 518400), t = new Date, q > t && (q = new Date(Date.UTC(t.getFullYear(), t.getMonth(), t.getDate()))), null == S && (S = A), null == m && (m = q), l(S, m), k(n, A, q), x(e, A, q), $(".js-contribution-container").on("change", "input[type=radio]", v)
            }, j = function(e) {
                var t, n, i, r, s, o, a;
                for (n = 0, r = e.length; r > n; n++)
                    for (t = e[n], o = t.weeks, i = 0, s = o.length; s > i; i++) a = o[i], a.date = new Date(1e3 * a.w);
                return e
            }, p = function(e, t) {
                return e.map(function(e) {
                    var n;
                    return n = $.extend(!0, {}, e), n.weeks = n.weeks.filter(function(e) {
                        return e.date >= t[0] && e.date <= t[1]
                    }), n
                })
            }, a = function(e) {
                var t, n, i, r, s, o, a, c, u;
                for (c = {}, n = 0, r = e.length; r > n; n++)
                    for (t = e[n], a = t.weeks, i = 0, s = a.length; s > i; i++) u = a[i], null == c[o = u.w] && (c[o] = {
                        c: 0,
                        a: 0,
                        d: 0
                    }), c[u.w].c += u.c, c[u.w].a += u.a, c[u.w].d += u.d;
                return d3.entries(c)
            }, C = function(e) {
                return e = p(e, [S, m]), e.forEach(function(e) {
                    var t, n, i, r, s, o, a;
                    for (n = 0, t = 0, i = 0, o = e.weeks, r = 0, s = o.length; s > r; r++) a = o[r], n += a.c, t += a.a, i += a.d;
                    return e.c = n, e.a = t, e.d = i
                }), e.sort(function(e, t) {
                    return d3.descending(e[h], t[h])
                })
            }, k = function(t, i, s) {
                var o, a, c, u, l, d, f, p, v, b, j, $, w, x, k, C, L, q;
                return v = [20, 50, 20, 30], p = v[0], d = v[1], f = v[2], l = v[3], x = r.width(), c = 125, u = d3.max(t, function(e) {
                    return e.value[h]
                }), k = d3.time.scale().domain([i, s]).range([0, x - d - f]), L = d3.scale.linear().domain([0, u]).range([c, 0]), q = d3.svg.axis().scale(L).orient("left").ticks(4).tickSize(-x + d + f).tickPadding(10).tickFormat(n), C = d3.svg.axis().scale(k), t.length < 5 && C.ticks(t.length), o = d3.svg.area().interpolate("basis").x(function(e) {
                    return k(y(e.key))
                }).y0(function(e) {
                    return c
                }).y1(function(e) {
                    return L(e.value[h])
                }), d3.select("#contributors-master svg").remove(), w = d3.select("#contributors-master").data([t]).append("svg").attr("height", c + p + l).attr("width", x).attr("class", "viz").append("g").attr("transform", "translate(" + d + "," + p + ")"), w.append("g").attr("class", "x axis").attr("transform", "translate(0, " + c + ")").call(C), w.append("g").attr("class", "y axis").call(q), w.append("path").attr("class", "area").attr("d", o), $ = function() {
                    var t;
                    return w.classed("selecting", !0), t = d3.event.target.extent(), e.fire(r[0], "range.selection.start", {
                        data: arguments[0],
                        range: t
                    })
                }, b = function() {
                    var t;
                    return t = d3.event.target.extent(), e.fire(r[0], "range.selection.selected", {
                        data: arguments[0],
                        range: t
                    })
                }, j = function() {
                    var t;
                    return w.classed("selecting", !d3.event.target.empty()), t = d3.event.target.extent(), e.fire(r[0], "range.selection.end", {
                        data: arguments[0],
                        range: t
                    })
                }, a = d3.svg.brush().x(k).on("brushstart", $).on("brush", b).on("brushend", j), (g(S) !== g(i) || g(m) !== g(s)) && a.extent([S, m]), w.append("g").attr("class", "selection").call(a).selectAll("rect").attr("height", c)
            }, x = function() {
                var e, i, s, o, a, u, l, p, g, v, b, y, j, w, x, k, L, q, A, T, _, E;
                return y = [10, 10, 10, 20], v = y[0], p = y[1], g = y[2], l = y[3], L = parseInt(r.attr("data-graph-width")), s = 100, $("#contributors ol").remove(), f = C(d), w = document.createElement("ol"), k = d3.select(w).attr("class", "contrib-data capped-cards clearfix"), a = d3.max(f, function(e) {
                    return d3.max(e.weeks, function(e) {
                        return e[h]
                    })
                }), q = d3.time.scale().domain([S, m]).range([0, L]), T = d3.scale.linear().domain([0, a]).range([s - l - v, 0]), i = d3.svg.area().interpolate("basis").x(function(e) {
                    return q(e.date)
                }).y0(function(e) {
                    return s - l - v
                }).y1(function(e) {
                    return T(e[h])
                }), _ = d3.svg.axis().scale(T).orient("left").ticks(2).tickSize(-L).tickPadding(10).tickFormat(n), A = d3.svg.axis().scale(q), f[0].weeks.length < 5 && A.ticks(f[0].weeks.length).tickFormat(d3.time.format("%x")), $("li.capped-card").remove(), b = k.selectAll("li.capped-card").data(f).enter().append("li").attr("class", "capped-card").style("display", function(e) {
                    return e[h] < 1 ? "none" : "block"
                }), o = b.append("h3"), o.append("img").attr("src", function(e) {
                    return e.author.avatar
                }).attr("class", "avatar").attr("alt", ""), o.append("span").attr("class", "rank").text(function(e, t) {
                    return "#" + (t + 1)
                }), o.append("a").attr("class", "aname").attr("href", function(e) {
                    return "/" + e.author.login
                }).text(function(e) {
                    return e.author.login
                }), e = o.append("span").attr("class", "ameta"), j = $(".graphs").attr("data-repo-url"), e.append("span").attr("class", "cmeta").html(function(e) {
                    var n, i, r, s, o, a;
                    return n = j + "/commits?author=" + e.author.login, a = t(e.c) + " " + c(e.c, "commit"), o = $("<a>", {
                        href: n,
                        "class": "cmt",
                        text: a
                    }), r = $("<span>", {
                        "class": "a",
                        text: t(e.a) + " ++"
                    }), s = $("<span>", {
                        "class": "d",
                        text: t(e.d) + " --"
                    }), i = " / ", $("<div>").append([o, i, r, i, s]).html()
                }), x = b.append("svg").attr("width", L + (p + g)).attr("height", s + v + l).attr("class", "capped-card-content").append("g").attr("transform", "translate(" + p + "," + v + ")"), u = A.ticks()[0], x.append("g").attr("class", "x axis").classed("dense", u >= 10).attr("transform", "translate(0, " + (s - v - l) + ")").call(A).selectAll(".tick text").style("display", function(e, t) {
                    return t % 2 !== 0 ? "none" : "block"
                }), x.select(".x.dense text").attr("dx", 7), E = x.append("g").attr("class", "y axis").call(_).selectAll(".y.axis g text").attr("dx", L / 2).style("display", function(e, t) {
                    return 0 === t ? "none" : "block"
                }).classed("midlabel", !0), x.append("path").attr("d", function(e) {
                    return i(e.weeks)
                }), document.querySelector("#contributors").appendChild(w)
            }, L = function() {
                var e, t;
                return e = document.location, h = $("input[name=ctype]:checked").prop("value").toLowerCase(), t = e.pathname + "?from=" + g(S) + "&to=" + g(m) + "&type=" + h, u(null, null, t)
            }, v = function(e) {
                return h !== $(this).val() ? (L(), w(d)) : void 0
            }, d = j(f), w(f)
        })
    }.call(this),
    function() {
        var e, t, n, i, r, s, o, a, c;
        t = require("github/d3/format-symbol")["default"], e = require("delegated-events"), r = function(e) {
            var t;
            return (t = d3.format(","))(e)
        }, i = {
            top: 20,
            right: 40,
            bottom: 30,
            left: 40
        }, c = 980 - i.left - i.right, n = 150 - i.top - i.bottom, a = function(e, t) {
            return 0 > e ? t.classList.add("is-decrease") : e > 0 && t.classList.add("is-increase"), t.querySelector(".js-change-num").textContent = r(Math.abs(e))
        }, s = function(e, t) {
            return 0 > e ? (t.classList.add("is-decrease"), t.querySelector(".js-change-num").textContent = r(Math.abs(e)) + "% decrease") : e > 0 ? (t.classList.add("is-increase"), t.querySelector(".js-change-num").textContent = r(Math.abs(e)) + "% increase") : 0 === e ? t.querySelector(".js-change-num").textContent = r(Math.abs(e)) + "% increase" : void 0
        }, o = function(e) {
            var o, u, l, d, h, f, m, p, g, v, b, y, j, $, w, x, k, S, C, L, q, A, T, _, E, P, D, M, I;
            if (f = e.detail.data, f && null == f.error) {
                for (h = f.counts, d = f.summary.columns, L = new Date(1e3 * f.summary.starting), p = new Date(1e3 * f.summary.ending), k = f.summary.model, S = f.summary.period, x = d3.max(d3.merge(d3.values(h)), function(e) {
                        return e.count
                    }), w = d3.time.format("%A, %B %-d, %Y"), g = d3.time.format("%-I%p"), u = d3.bisector(function(e) {
                        return e.date
                    }).left, v = 0, y = d.length; y > v; v++) l = d[v], document.querySelector(".js-" + k + "-" + l + " .js-total").textContent = r(f.summary.totals[l]), a(f.summary.total_changes[l], document.querySelector(".js-" + k + "-" + l + " .js-total-change")), s(f.summary.percent_changes[l], document.querySelector(".js-" + k + "-" + l + " .js-percentage-change"));
                if (0 === d3.values(f.summary.totals).filter(function(e) {
                        return 0 !== e
                    }).length) return this.closest(".js-dashboards-overview-card").classList.add("is-no-activity");
                for (T = d3.tip().attr("class", "svg-tip total-unique comparison").offset([-10, 0]).html(function(e) {
                        var t, n, i, s, o, a;
                        for (a = "", t = function() {
                                switch (S) {
                                    case "year":
                                        return "Week of " + w(e.date);
                                    case "week":
                                        return w(e.date) + " starting at " + g(e.date);
                                    default:
                                        return w(e.date)
                                }
                            }(), o = 270 / f.summary.columns.length, s = f.summary.columns, n = 0, i = s.length; i > n; n++) l = s[n], a += "<li class='totals " + l + "' style='width:" + o + "px'> <strong>" + r(e[l]) + "</strong> " + l.split("_at")[0] + " </li>";
                        return "<span class='title'>" + t + "</span> <ul> " + a + " </ul>"
                    }), C = function() {
                        var e, t, n, i, r, s, o, a, c, f;
                        for (c = {}, f = E.invert(d3.mouse(this)[0]), r = d[0], s = u(h[r], f, 1), t = h[r][s - 1], n = h[r][s], e = n && f - t.date > n.date - f ? s : s - 1, c.date = h[r][e].date, o = 0, a = d.length; a > o; o++) l = d[o], c[l] = h[l][e].count;
                        return i = _.selectAll("g.dots circle").filter(function(e) {
                            return e.date === c.date
                        }), T.show.call(this, c, i[0][0])
                    }, b = 0, j = d.length; j > b; b++) l = d[b], h[l].forEach(function(e) {
                    return e.date = new Date(1e3 * e.bucket)
                }), h[l] = h[l].filter(function(e) {
                    return e.date < new Date
                });
                return E = d3.time.scale().range([0, c]), D = d3.scale.linear().range([n, 0]), M = d3.scale.linear().range([n, 0]), q = 1, A = function() {
                    switch (S) {
                        case "year":
                            return d3.time.months;
                        case "week":
                            return q = 8, d3.time.hours;
                        default:
                            return q = 2, d3.time.days
                    }
                }(), P = d3.svg.axis().scale(E).tickSize(n + 5).tickPadding(10).ticks(A, q).orient("bottom"), I = d3.svg.axis().scale(D).ticks(3).tickFormat(t).orient("left"), $ = d3.svg.line().x(function(e) {
                    return E(e.date)
                }).y(function(e) {
                    return D(e.count)
                }), _ = d3.select(this).append("svg").attr("width", c + i.left + i.right).attr("height", n + i.top + i.bottom).attr("class", "vis").append("g").attr("transform", "translate(" + i.left + "," + i.top + ")").call(T), E.domain([L, p]), D.domain([0, x]), _.append("g").attr("class", "x axis").call(P).selectAll("text").attr("text-anchor", "middle"), _.append("g").attr("class", "y axis").call(I), o = d3.values(h), _.selectAll("path.path").data(o).enter().append("path").attr("class", function(e, t) {
                    return "path total " + e[0].column
                }).attr("d", function(e) {
                    return $(e)
                }), m = _.selectAll("g.dots").data(o).enter().append("g").attr("class", function(e, t) {
                    return "dots totals " + e[0].column
                }), m.each(function(e, t) {
                    var n;
                    return n = d3.select(this), n.selectAll("circle").data(function(e) {
                        return h[e[0].column]
                    }).enter().append("circle").attr("cx", function(e) {
                        return E(e.date)
                    }).attr("cy", function(e) {
                        return D(e.count)
                    }).attr("r", 4)
                }), I.orient("right"), _.append("g").attr("class", "y axis unique").attr("transform", "translate(" + c + ", 0)").call(I), _.append("rect").attr("class", "overlay").attr("width", c).attr("height", n).on("mousemove", C).on("mouseout", function(e) {
                    return setTimeout(T.hide, 500)
                })
            }
        }, e.on("graph:load", ".js-dashboards-overview-graph", o)
    }.call(this),
    function() {
        var e, t, n, i, r;
        t = require("github/fetch").fetchPoll, n = require("delegated-events").fire, e = {}, r = function(e) {
            return e.json()
        }, $.observe(".js-graph", i = function(i) {
            var s, o, a, c;
            (c = i.getAttribute("data-url")) && ($(i).find("svg").remove(), a = null != e[c] ? e[c] : e[c] = t(c, {
                headers: {
                    accept: "application/json"
                }
            }).then(r), i.classList.add("is-graph-loading"), i.classList.remove("is-graph-load-error", "is-graph-empty"), s = function(e) {
                var t, r, s;
                return i.classList.remove("is-graph-loading"), (null != e ? e.unusable : void 0) ? i.classList.add("is-graph-without-usable-data") : 0 === (null != e ? e.length : void 0) || 0 === (null != e && null != (t = e.summary) ? t.total : void 0) || 0 === (null != (r = e[0]) && null != (s = r.weeks) ? s.length : void 0) ? i.classList.add("is-graph-empty") : d3Ready().then(function() {
                    return n(i, "graph:load", {
                        data: e
                    })
                })
            }, o = function() {
                return i.classList.remove("is-graph-loading"), i.classList.add("is-graph-load-error")
            }, a.then(s, o))
        })
    }.call(this),
    function() {
        var e, t, n, i, r, s, o, a, c, u, l = function(e, t) {
            return function() {
                return e.apply(t, arguments)
            }
        };
        c = require("github/fetch"), o = c.fetchJSON, a = c.fetchPoll, i = function() {
            function i(e, t, n) {
                this.container = e, this.width = t, this.height = n, this.initError = l(this.initError, this), this.init = l(this.init, this), this.loaderInterval = null, this.loaderOffset = 0, this.ctx = this.initCanvas(this.container, this.width, this.height), this.startLoader("Loading graph data"), this.loadMeta()
            }
            return i.prototype.initCanvas = function(e, t, n) {
                var i, r, s, o, a, c, u;
                return o = e.getElementsByTagName("canvas")[0], o.style.zIndex = "0", s = o.width, r = o.height, a = o.getContext("2d"), c = window.devicePixelRatio || 1, i = a.webkitBackingStorePixelRatio || a.mozBackingStorePixelRatio || a.msBackingStorePixelRatio || a.oBackingStorePixelRatio || a.backingStorePixelRatio || 1, u = c / i, 1 === u ? a : (o.width = s * u, o.height = r * u, o.style.width = s + "px", o.style.height = r + "px", a.scale(u, u), a)
            }, i.prototype.startLoader = function(e) {
                return this.ctx.save(), this.ctx.font = "14px 'Helvetica Neue', Arial, sans-serif", this.ctx.fillStyle = "#cacaca", this.ctx.textAlign = "center", this.ctx.fillText(e, this.width / 2, 155), this.ctx.restore(), this.displayLoader()
            }, i.prototype.stopLoader = function() {
                var e;
                return e = this.container.querySelector(".large-loading-area"), e.classList.add("is-hidden")
            }, i.prototype.displayLoader = function() {
                var e;
                return e = this.container.querySelector(".large-loading-area"), e.classList.remove("is-hidden")
            }, i.prototype.loadMeta = function() {
                var e, t;
                return e = function(e) {
                    return e.json()
                }, t = this.container.getAttribute("data-network-graph-meta-url"), a(t, {
                    headers: {
                        accept: "application/json"
                    }
                }).then(e, this.initError).then(this.init)
            }, i.prototype.init = function(i) {
                var o, a, c, l, d, h;
                if (u) {
                    for (this.focus = i.focus, this.nethash = i.nethash, this.spaceMap = i.spacemap, this.userBlocks = i.blocks, this.commits = function() {
                            var t, n, r, s;
                            for (r = i.dates, s = [], c = t = 0, n = r.length; n > t; c = ++t) o = r[c], s.push(new e(c, o));
                            return s
                        }(), this.users = {}, d = i.users, a = 0, l = d.length; l > a; a++) h = d[a], this.users[h.name] = h;
                    return this.chrome = new r(this, this.ctx, this.width, this.height, this.focus, this.commits, this.userBlocks, this.users), this.graph = new s(this, this.ctx, this.width, this.height, this.focus, this.commits, this.users, this.spaceMap, this.userBlocks, this.nethash), this.mouseDriver = new n(this.container, this.chrome, this.graph), this.keyDriver = new t(this.chrome, this.graph), this.stopLoader(), this.graph.drawBackground(), this.chrome.draw(), this.graph.requestInitialChunk()
                }
            }, i.prototype.initError = function() {
                return this.stopLoader(), this.ctx.clearRect(0, 0, this.width, this.height), this.startLoader("Graph could not be drawn due to a network problem.")
            }, i
        }(), e = function() {
            function e(e, t) {
                this.time = e, this.date = new Date(t), this.requested = null, this.populated = null
            }
            return e.prototype.populate = function(e, t, n) {
                return this.user = t, this.author = e.author, this.date = new Date(e.date.replace(" ", "T")), this.gravatar = e.gravatar, this.id = e.id, this.login = e.login, this.message = e.message, this.space = e.space, this.time = e.time, this.parents = this.populateParents(e.parents, n), this.requested = !0, this.populated = new Date
            }, e.prototype.populateParents = function(e, t) {
                var n, i, r;
                return r = function() {
                    var r, s, o;
                    for (o = [], r = 0, s = e.length; s > r; r++) n = e[r], i = t[n[1]], i.id = n[0], i.space = n[2], o.push(i);
                    return o
                }()
            }, e
        }(), r = function() {
            function e(e, t, n, i, r, s, o, a) {
                this.network = e, this.ctx = t, this.width = n, this.height = i, this.focus = r, this.commits = s, this.userBlocks = o, this.users = a, this.namesWidth = 120, this.months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], this.userBgColors = ["#fff", "#f7f7f7"], this.headerColor = "#f7f7f7", this.dividerColor = "#ddd", this.headerHeight = 40, this.dateRowHeight = 30, this.graphTopOffset = 10 + this.headerHeight + this.dateRowHeight, this.nameLineHeight = 24, this.offsetX = this.namesWidth + (this.width - this.namesWidth) / 2 - this.focus * this.nameLineHeight, this.offsetY = 0, this.contentHeight = this.calcContentHeight(), this.graphMidpoint = this.namesWidth + (this.width - this.namesWidth) / 2, this.activeUser = null
            }
            return e.prototype.moveX = function(e) {
                return this.offsetX += e, this.offsetX > this.graphMidpoint ? this.offsetX = this.graphMidpoint : this.offsetX < this.graphMidpoint - this.commits.length * this.nameLineHeight ? this.offsetX = this.graphMidpoint - this.commits.length * this.nameLineHeight : void 0
            }, e.prototype.moveY = function(e) {
                return this.offsetY += e, this.offsetY > 0 || this.contentHeight < this.height - this.graphTopOffset ? this.offsetY = 0 : this.offsetY < -this.contentHeight + this.height / 2 ? this.offsetY = -this.contentHeight + this.height / 2 : void 0
            }, e.prototype.calcContentHeight = function() {
                var e, t, n, i, r;
                for (t = 0, r = this.userBlocks, n = 0, i = r.length; i > n; n++) e = r[n], t += e.count;
                return t * this.nameLineHeight
            }, e.prototype.hover = function(e, t) {
                var n, i, r, s;
                for (s = this.userBlocks, i = 0, r = s.length; r > i; i++)
                    if (n = s[i], e > 0 && e < this.namesWidth && t > this.graphTopOffset + this.offsetY + n.start * this.nameLineHeight && t < this.graphTopOffset + this.offsetY + (n.start + n.count) * this.nameLineHeight) return this.users[n.name];
                return null
            }, e.prototype.draw = function() {
                return this.drawTimeline(this.ctx), this.drawUsers(this.ctx)
            }, e.prototype.drawTimeline = function(e) {
                var t, n, i, r, s, o, a, c, u, l, d, h, f;
                for (e.fillStyle = this.headerColor, e.fillRect(0, 0, this.width, this.headerHeight), e.fillStyle = this.dividerColor, e.fillRect(0, this.headerHeight - 1, this.width, 1), u = parseInt((0 - this.offsetX) / this.nameLineHeight), 0 > u && (u = 0), c = u + parseInt(this.width / (this.nameLineHeight - 1)), c > this.commits.length && (c = this.commits.length), e.save(), e.translate(this.offsetX, 0), a = null, o = null, s = r = h = u, f = c; f >= h ? f > r : r > f; s = f >= h ? ++r : --r) t = this.commits[s], l = this.months[t.date.getMonth()], l !== a && (e.font = "bold 12px 'Helvetica Neue', Arial, sans-serif", e.fillStyle = "#555", d = this.ctx.measureText(l).width, e.fillText(l, s * this.nameLineHeight - d / 2, this.headerHeight / 2 + 4), a = l), i = t.date.getDate(), i !== o && (e.font = "12px 'Helvetica Neue', Arial, sans-serif", e.fillStyle = "#555", n = this.ctx.measureText(i).width, e.fillText(i, s * this.nameLineHeight - n / 2, this.headerHeight + this.dateRowHeight / 2 + 3), o = i, e.fillStyle = "#ddd", e.fillRect(s * this.nameLineHeight, this.headerHeight, 1, 6));
                return e.restore()
            }, e.prototype.drawUsers = function(e) {
                var t, n, i, r, s, o, a;
                for (e.fillStyle = "#fff", e.fillRect(0, 0, this.namesWidth, this.height), e.save(), e.translate(0, this.headerHeight + this.dateRowHeight + this.offsetY), o = this.userBlocks, i = n = 0, r = o.length; r > n; i = ++n) t = o[i], e.fillStyle = this.userBgColors[i % 2], e.fillRect(0, t.start * this.nameLineHeight, this.namesWidth, t.count * this.nameLineHeight), this.activeUser && this.activeUser.name === t.name && (e.fillStyle = "rgba(0, 0, 0, 0.05)", e.fillRect(0, t.start * this.nameLineHeight, this.namesWidth, t.count * this.nameLineHeight)), s = (t.start + t.count / 2) * this.nameLineHeight + 3, e.fillStyle = "rgba(0, 0, 0, 0.1)", e.fillRect(0, t.start * this.nameLineHeight + t.count * this.nameLineHeight - 1, this.namesWidth, 1), e.fillStyle = "#333", e.font = "13px 'Helvetica Neue', Arial, sans-serif", e.textAlign = "center", e.fillText(t.name, this.namesWidth / 2, s, 96);
                return e.restore(), e.fillStyle = this.headerColor, e.fillRect(0, 0, this.namesWidth, this.headerHeight), e.fillStyle = "#777", e.font = "12px 'Helvetica Neue', Arial, sans-serif", e.fillText("Owners", 40, this.headerHeight / 2 + 3), a = 10, e.fillStyle = this.dividerColor, e.fillRect(this.namesWidth - 1, a, 1, this.headerHeight - 2 * a), e.fillStyle = this.dividerColor, e.fillRect(0, this.headerHeight - 1, this.namesWidth, 1), e.fillStyle = this.dividerColor, e.fillRect(this.namesWidth - 1, this.headerHeight, 1, this.height - this.headerHeight)
            }, e
        }(), s = function() {
            function e(e, t, n, i, r, s, o, a, c, u) {
                var l, d, h, f, m, p, g, v, b, y, j, $, w, x, k, S, C;
                for (this.network = e, this.ctx = t, this.width = n, this.height = i, this.focus = r, this.commits = s, this.users = o, this.spaceMap = a, this.userBlocks = c, this.nethash = u, this.namesWidth = 120, this.headerHeight = 40, this.dateRowHeight = 30, this.graphTopOffset = 10 + this.headerHeight + this.dateRowHeight, this.bgColors = ["#fff", "#f9f9f9"], this.nameLineHeight = 24, this.spaceColors = ["#c0392b", "#3498db", "#2ecc71", "#8e44ad", "#f1c40f", "#e67e22", "#34495e", "#e74c3c", "#2980b9", "#1abc9c", "#9b59b6", "#f39c12", "#7f8c8d", "#2c3e50", "#d35400", "#e74c3c", "#95a5a6", "#bdc3c7", "#16a085", "#27ae60"], this.offsetX = this.namesWidth + (this.width - this.namesWidth) / 2 - this.focus * this.nameLineHeight, this.offsetY = 0, this.bgCycle = 0, this.marginMap = {}, this.gravatars = {}, this.activeCommit = null, this.contentHeight = this.calcContentHeight(), this.graphMidpoint = this.namesWidth + (this.width - this.namesWidth) / 2, this.showRefs = !0, this.lastHotLoadCenterIndex = null, this.connectionMap = {}, this.spaceUserMap = {}, $ = this.userBlocks, f = 0, g = $.length; g > f; f++)
                    for (l = $[f], m = p = w = l.start, x = l.start + l.count; x >= w ? x > p : p > x; m = x >= w ? ++p : --p) this.spaceUserMap[m] = this.users[l.name];
                for (this.headsMap = {}, k = this.userBlocks, y = 0, v = k.length; v > y; y++)
                    for (l = k[y], C = this.users[l.name], S = C.heads, j = 0, b = S.length; b > j; j++) d = S[j], this.headsMap[d.id] || (this.headsMap[d.id] = []), h = {
                        name: C.name,
                        head: d
                    }, this.headsMap[d.id].push(h)
            }
            return e.prototype.moveX = function(e) {
                return this.offsetX += e, this.offsetX > this.graphMidpoint ? this.offsetX = this.graphMidpoint : this.offsetX < this.graphMidpoint - this.commits.length * this.nameLineHeight && (this.offsetX = this.graphMidpoint - this.commits.length * this.nameLineHeight), this.hotLoadCommits()
            }, e.prototype.moveY = function(e) {
                return this.offsetY += e, this.offsetY > 0 || this.contentHeight < this.height - this.graphTopOffset ? this.offsetY = 0 : this.offsetY < -this.contentHeight + this.height / 2 ? this.offsetY = -this.contentHeight + this.height / 2 : void 0
            }, e.prototype.toggleRefs = function() {
                return this.showRefs = !this.showRefs
            }, e.prototype.calcContentHeight = function() {
                var e, t, n, i, r;
                for (t = 0, r = this.userBlocks, n = 0, i = r.length; i > n; n++) e = r[n], t += e.count;
                return t * this.nameLineHeight
            }, e.prototype.hover = function(e, t) {
                var n, i, r, s, o, a, c, u;
                for (u = this.timeWindow(), r = i = s = u.min, o = u.max; o >= s ? o >= i : i >= o; r = o >= s ? ++i : --i)
                    if (n = this.commits[r], a = this.offsetX + n.time * this.nameLineHeight, c = this.offsetY + this.graphTopOffset + n.space * this.nameLineHeight, e > a - 5 && a + 5 > e && t > c - 5 && c + 5 > t) return n;
                return null
            }, e.prototype.hotLoadCommits = function() {
                var e, t, n, i, r, s;
                return r = 200, t = parseInt((-this.offsetX + this.graphMidpoint) / this.nameLineHeight), 0 > t && (t = 0), t > this.commits.length - 1 && (t = this.commits.length - 1), this.lastHotLoadCenterIndex && Math.abs(this.lastHotLoadCenterIndex - t) < 10 ? void 0 : (this.lastHotLoadCenterIndex = t, e = this.backSpan(t, r), i = this.frontSpan(t, r), e || i ? (s = e ? e[0] : i[0], n = i ? i[1] : e[1], this.requestChunk(s, n)) : void 0)
            }, e.prototype.backSpan = function(e, t) {
                var n, i, r, s, o, a, c, u;
                for (s = null, i = n = c = e;
                    (0 >= c ? 0 >= n : n >= 0) && i > e - t; i = 0 >= c ? ++n : --n)
                    if (!this.commits[i].requested) {
                        s = i;
                        break
                    }
                if (null !== s) {
                    for (o = null, a = null, i = r = u = s;
                        (0 >= u ? 0 >= r : r >= 0) && i > s - t; i = 0 >= u ? ++r : --r)
                        if (this.commits[i].requested) {
                            o = i;
                            break
                        }
                    return o ? a = o + 1 : (a = s - t, 0 > a && (a = 0)), [a, s]
                }
                return null
            }, e.prototype.frontSpan = function(e, t) {
                var n, i, r, s, o, a, c, u, l, d;
                for (u = null, i = n = s = e, o = this.commits.length;
                    (o >= s ? o > n : n > o) && e + t > i; i = o >= s ? ++n : --n)
                    if (!this.commits[i].requested) {
                        u = i;
                        break
                    }
                if (null !== u) {
                    for (l = null, d = null, i = r = a = u, c = this.commits.length;
                        (c >= a ? c > r : r > c) && u + t > i; i = c >= a ? ++r : --r)
                        if (this.commits[i].requested) {
                            l = i;
                            break
                        }
                    return d = l ? l - 1 : u + t >= this.commits.length ? this.commits.length - 1 : u + t, [u, d]
                }
                return null
            }, e.prototype.chunkUrl = function() {
                return document.querySelector(".js-network-graph-container").getAttribute("data-network-graph-chunk-url")
            }, e.prototype.requestInitialChunk = function() {
                var e;
                if (u) return e = this.chunkUrl() + "?" + $.param({
                    nethash: this.nethash
                }), o(e).then(function(e) {
                    return function(t) {
                        return e.importChunk(t), e.draw(), e.network.chrome.draw()
                    }
                }(this))
            }, e.prototype.requestChunk = function(e, t) {
                var n, i, r, s, a;
                if (u) {
                    for (i = n = r = e, s = t; s >= r ? s >= n : n >= s; i = s >= r ? ++n : --n) this.commits[i].requested = new Date;
                    return a = this.chunkUrl() + "?" + $.param({
                        nethash: this.nethash,
                        start: e,
                        end: t
                    }), o(a).then(function(e) {
                        return function(t) {
                            return e.importChunk(t), e.draw(), e.network.chrome.draw(), e.lastHotLoadCenterIndex = e.focus
                        }
                    }(this))
                }
            }, e.prototype.importChunk = function(e) {
                var t, n, i, r, s, o, a, c, u;
                if (e.commits) {
                    for (a = e.commits, c = [], i = 0, s = a.length; s > i; i++) t = a[i], u = this.spaceUserMap[t.space], n = this.commits[t.time], n.populate(t, u, this.commits), c.push(function() {
                        var e, t, i, s;
                        for (i = n.parents, s = [], e = 0, t = i.length; t > e; e++) o = i[e], s.push(function() {
                            var e, t, i, s;
                            for (s = [], r = e = t = o.time + 1, i = n.time; i >= t ? i > e : e > i; r = i >= t ? ++e : --e) this.connectionMap[r] = this.connectionMap[r] || [], s.push(this.connectionMap[r].push(n));
                            return s
                        }.call(this));
                        return s
                    }.call(this));
                    return c
                }
            }, e.prototype.timeWindow = function() {
                var e, t;
                return t = parseInt((this.namesWidth - this.offsetX + this.nameLineHeight) / this.nameLineHeight), 0 > t && (t = 0), e = t + parseInt((this.width - this.namesWidth) / this.nameLineHeight), e > this.commits.length - 1 && (e = this.commits.length - 1), {
                    min: t,
                    max: e
                }
            }, e.prototype.draw = function() {
                var e, t, n, i, r, s, o, a, c, u, l, d, h, f, m, p, g, v, b, y, j, $, w, x, k, S, C, L, q, A, T, _, E, P, D, M;
                for (this.drawBackground(), M = this.timeWindow(), g = M.min, p = M.max, this.ctx.save(), this.ctx.translate(this.offsetX, this.offsetY + this.graphTopOffset), i = {}, x = this.spaceMap, a = o = 0, l = x.length; l > o; a = ++o)
                    for (e = x[a], P = this.spaceMap.length - a - 1, c = u = S = g, C = p; C >= S ? C >= u : u >= C; c = C >= S ? ++u : --u) t = this.commits[c], t.populated && t.space === P && (this.drawConnection(t), i[t.id] = !0);
                for (a = m = L = g, q = p; q >= L ? q >= m : m >= q; a = q >= L ? ++m : --m)
                    if (n = this.connectionMap[a])
                        for (v = 0, d = n.length; d > v; v++) t = n[v], i[t.id] || (this.drawConnection(t), i[t.id] = !0);
                for (A = this.spaceMap, a = y = 0, h = A.length; h > y; a = ++y)
                    for (e = A[a], P = this.spaceMap.length - a - 1, c = $ = T = g, _ = p; _ >= T ? _ >= $ : $ >= _; c = _ >= T ? ++$ : --$) t = this.commits[c], t.populated && t.space === P && (t === this.activeCommit ? this.drawActiveCommit(t) : this.drawCommit(t));
                if (this.showRefs)
                    for (c = w = E = g, k = p; k >= E ? k >= w : w >= k; c = k >= E ? ++w : --w)
                        if (t = this.commits[c], t.populated && (s = this.headsMap[t.id]))
                            for (j = 0, D = 0, f = s.length; f > D; D++) r = s[D], this.spaceUserMap[t.space].name === r.name && (b = this.drawHead(t, r.head, j), j += b);
                return this.ctx.restore(), this.activeCommit ? this.drawCommitInfo(this.activeCommit) : void 0
            }, e.prototype.drawBackground = function() {
                var e, t, n, i, r;
                for (this.ctx.clearRect(0, 0, this.width, this.height), this.ctx.save(), this.ctx.translate(0, this.offsetY + this.graphTopOffset), this.ctx.clearRect(0, -10, this.width, this.height), r = this.userBlocks, n = t = 0, i = r.length; i > t; n = ++t) e = r[n], this.ctx.fillStyle = this.bgColors[n % 2], this.ctx.fillRect(0, e.start * this.nameLineHeight - 10, this.width, e.count * this.nameLineHeight), this.ctx.fillStyle = "#DDDDDD", this.ctx.fillRect(0, (e.start + e.count) * this.nameLineHeight - 11, this.width, 1);
                return this.ctx.restore()
            }, e.prototype.drawCommit = function(e) {
                var t, n;
                return t = e.time * this.nameLineHeight, n = e.space * this.nameLineHeight, this.ctx.beginPath(), this.ctx.arc(t, n, 3, 0, 2 * Math.PI, !1), this.ctx.fillStyle = this.spaceColor(e.space), this.ctx.fill()
            }, e.prototype.drawActiveCommit = function(e) {
                var t, n;
                return t = e.time * this.nameLineHeight, n = e.space * this.nameLineHeight, this.ctx.beginPath(), this.ctx.arc(t, n, 6, 0, 2 * Math.PI, !1), this.ctx.fillStyle = this.spaceColor(e.space), this.ctx.fill()
            }, e.prototype.drawCommitInfo = function(e) {
                var t, n, i, r, s, o, a, c, u, l;
                return t = 3, n = 340, l = 56, u = e.message ? this.splitLines(e.message, 48) : [], o = Math.max(l, 38 + 16 * u.length), i = this.offsetX + e.time * this.nameLineHeight, r = this.graphTopOffset + this.offsetY + e.space * this.nameLineHeight, a = 0, c = 0, a = i < this.graphMidpoint ? i + 10 : i - (n + 10), c = r < 40 + (this.height - 40) / 2 ? r + 10 : r - o - 10, this.ctx.save(), this.ctx.translate(a, c), this.ctx.fillStyle = "#fff", this.ctx.strokeStyle = "rgba(0, 0, 0, 0.2)", this.ctx.lineWidth = 1, this.roundRect(0, 0, n, o, t), s = this.gravatars[e.gravatar], s ? this.drawGravatar(s, 10, 10) : (s = new Image, s.src = e.gravatar, s.onload = function(t) {
                    return function() {
                        return t.activeCommit === e ? (t.drawGravatar(s, a + 10, c + 10), t.gravatars[e.gravatar] = s) : void 0
                    }
                }(this)), this.ctx.fillStyle = "#000", this.ctx.font = "bold 12px 'Helvetica Neue', Arial, sans-serif", this.ctx.fillText(e.author, 55, 24), this.ctx.fillStyle = "#bbb", this.ctx.font = "11px Consolas, Menlo, Courier, monospace", this.ctx.fillText(e.id.slice(0, 7), 280, 24), this.drawMessage(u, 55, 41), this.ctx.restore()
            }, e.prototype.drawGravatar = function(e, t, n) {
                var i;
                return i = 32, this.ctx.save(), this.ctx.fillStyle = "#fff", this.ctx.strokeStyle = "rgba(0, 0, 0, 0.0)", this.ctx.lineWidth = .1, this.roundRect(t + 2, n + 2, i, i, 4), this.ctx.clip(), this.ctx.drawImage(e, t + 2, n + 2, i, i), this.ctx.restore()
            }, e.prototype.roundRect = function(e, t, n, i, r) {
                return this.ctx.beginPath(), this.ctx.moveTo(e, t + r), this.ctx.lineTo(e, t + i - r), this.ctx.quadraticCurveTo(e, t + i, e + r, t + i), this.ctx.lineTo(e + n - r, t + i), this.ctx.quadraticCurveTo(e + n, t + i, e + n, t + i - r), this.ctx.lineTo(e + n, t + r), this.ctx.quadraticCurveTo(e + n, t, e + n - r, t), this.ctx.lineTo(e + r, t), this.ctx.quadraticCurveTo(e, t, e, t + r), this.ctx.fill(), this.ctx.stroke()
            }, e.prototype.drawMessage = function(e, t, n) {
                var i, r, s, o, a;
                for (this.ctx.font = "12px 'Helvetica Neue', Arial, sans-serif", this.ctx.fillStyle = "#000000", a = [], r = i = 0, s = e.length; s > i; r = ++i) o = e[r], a.push(this.ctx.fillText(o, t, n + 16 * r));
                return a
            }, e.prototype.splitLines = function(e, t) {
                var n, i, r, s, o, a;
                for (a = e.split(" "), s = [], r = "", n = 0, i = a.length; i > n; n++) o = a[n], r.length + 1 + o.length < t ? r = "" === r ? o : r + " " + o : (s.push(r), r = o);
                return s.push(r), s
            }, e.prototype.drawHead = function(e, t, n) {
                var i, r, s, o;
                return this.ctx.font = "11px 'Helvetica Neue', Arial, sans-serif", this.ctx.save(), i = this.ctx.measureText(t.name).width, this.ctx.restore(), s = e.time * this.nameLineHeight, o = e.space * this.nameLineHeight + 5 + n, r = 2.5, this.ctx.save(), this.ctx.translate(s, o - r), this.ctx.fillStyle = "rgba(0, 0, 0, 0.8)", this.ctx.beginPath(), this.ctx.moveTo(0, r), this.ctx.lineTo(-4, 10), this.ctx.quadraticCurveTo(-9, 10, -9, 15), this.ctx.lineTo(-9, 15 + i), this.ctx.quadraticCurveTo(-9, 15 + i + 5, -4, 15 + i + 5), this.ctx.lineTo(4, 15 + i + 5), this.ctx.quadraticCurveTo(9, 15 + i + 5, 9, 15 + i), this.ctx.lineTo(9, 15), this.ctx.quadraticCurveTo(9, 10, 4, 10), this.ctx.lineTo(0, r), this.ctx.fill(), this.ctx.fillStyle = "#fff", this.ctx.font = "12px 'Helvetica Neue', Arial, sans-serif", this.ctx.textBaseline = "middle", this.ctx.scale(.85, .85), this.ctx.rotate(Math.PI / 2), this.ctx.fillText(t.name, 19, -.5), this.ctx.restore(), i + this.nameLineHeight
            }, e.prototype.drawConnection = function(e) {
                var t, n, i, r, s, o;
                for (s = e.parents, o = [], n = t = 0, i = s.length; i > t; n = ++t) r = s[n], 0 === n ? r.space === e.space ? o.push(this.drawBasicConnection(r, e)) : o.push(this.drawBranchConnection(r, e)) : o.push(this.drawMergeConnection(r, e));
                return o
            }, e.prototype.drawBasicConnection = function(e, t) {
                var n;
                return n = this.spaceColor(t.space), this.ctx.strokeStyle = n, this.ctx.lineWidth = 2, this.ctx.beginPath(), this.ctx.moveTo(e.time * this.nameLineHeight, t.space * this.nameLineHeight), this.ctx.lineTo(t.time * this.nameLineHeight, t.space * this.nameLineHeight), this.ctx.stroke()
            }, e.prototype.drawBranchConnection = function(e, t) {
                var n;
                return n = this.spaceColor(t.space), this.ctx.strokeStyle = n, this.ctx.lineWidth = 2, this.ctx.beginPath(), this.ctx.moveTo(e.time * this.nameLineHeight, e.space * this.nameLineHeight),
                    this.ctx.lineTo(e.time * this.nameLineHeight, t.space * this.nameLineHeight), this.ctx.lineTo(t.time * this.nameLineHeight - 10, t.space * this.nameLineHeight), this.ctx.stroke(), this.threeClockArrow(n, t.time * this.nameLineHeight, t.space * this.nameLineHeight)
            }, e.prototype.drawMergeConnection = function(e, t) {
                var n, i, r;
                return n = this.spaceColor(e.space), this.ctx.strokeStyle = n, this.ctx.lineWidth = 2, this.ctx.beginPath(), e.space > t.space ? (this.ctx.moveTo(e.time * this.nameLineHeight, e.space * this.nameLineHeight), r = this.safePath(e.time, t.time, e.space), r ? (this.ctx.lineTo(t.time * this.nameLineHeight - 10, e.space * this.nameLineHeight), this.ctx.lineTo(t.time * this.nameLineHeight - 10, t.space * this.nameLineHeight + 15), this.ctx.lineTo(t.time * this.nameLineHeight - 5.7, t.space * this.nameLineHeight + 7.5), this.ctx.stroke(), this.oneClockArrow(n, t.time * this.nameLineHeight, t.space * this.nameLineHeight)) : (i = this.closestMargin(e.time, t.time, e.space, -1), e.space === t.space + 1 && e.space === i + 1 ? (this.ctx.lineTo(e.time * this.nameLineHeight, i * this.nameLineHeight + 10), this.ctx.lineTo(t.time * this.nameLineHeight - 15, i * this.nameLineHeight + 10), this.ctx.lineTo(t.time * this.nameLineHeight - 9.5, i * this.nameLineHeight + 7.7), this.ctx.stroke(), this.twoClockArrow(n, t.time * this.nameLineHeight, i * this.nameLineHeight), this.addMargin(e.time, t.time, i)) : e.time + 1 === t.time ? (i = this.closestMargin(e.time, t.time, t.space, 0), this.ctx.lineTo(e.time * this.nameLineHeight, i * this.nameLineHeight + 10), this.ctx.lineTo(t.time * this.nameLineHeight - 15, i * this.nameLineHeight + 10), this.ctx.lineTo(t.time * this.nameLineHeight - 15, t.space * this.nameLineHeight + 10), this.ctx.lineTo(t.time * this.nameLineHeight - 9.5, t.space * this.nameLineHeight + 7.7), this.ctx.stroke(), this.twoClockArrow(n, t.time * this.nameLineHeight, t.space * this.nameLineHeight), this.addMargin(e.time, t.time, i)) : (this.ctx.lineTo(e.time * this.nameLineHeight + 10, e.space * this.nameLineHeight - 10), this.ctx.lineTo(e.time * this.nameLineHeight + 10, i * this.nameLineHeight + 10), this.ctx.lineTo(t.time * this.nameLineHeight - 10, i * this.nameLineHeight + 10), this.ctx.lineTo(t.time * this.nameLineHeight - 10, t.space * this.nameLineHeight + 15), this.ctx.lineTo(t.time * this.nameLineHeight - 5.7, t.space * this.nameLineHeight + 7.5), this.ctx.stroke(), this.oneClockArrow(n, t.time * this.nameLineHeight, t.space * this.nameLineHeight), this.addMargin(e.time, t.time, i)))) : (i = this.closestMargin(e.time, t.time, t.space, -1), i < t.space ? (this.ctx.moveTo(e.time * this.nameLineHeight, e.space * this.nameLineHeight), this.ctx.lineTo(e.time * this.nameLineHeight, i * this.nameLineHeight + 10), this.ctx.lineTo(t.time * this.nameLineHeight - 12.7, i * this.nameLineHeight + 10), this.ctx.lineTo(t.time * this.nameLineHeight - 12.7, t.space * this.nameLineHeight - 10), this.ctx.lineTo(t.time * this.nameLineHeight - 9.4, t.space * this.nameLineHeight - 7.7), this.ctx.stroke(), this.fourClockArrow(n, t.time * this.nameLineHeight, t.space * this.nameLineHeight), this.addMargin(e.time, t.time, i)) : (this.ctx.moveTo(e.time * this.nameLineHeight, e.space * this.nameLineHeight), this.ctx.lineTo(e.time * this.nameLineHeight, i * this.nameLineHeight + 10), this.ctx.lineTo(t.time * this.nameLineHeight - 12.7, i * this.nameLineHeight + 10), this.ctx.lineTo(t.time * this.nameLineHeight - 12.7, t.space * this.nameLineHeight + 10), this.ctx.lineTo(t.time * this.nameLineHeight - 9.4, t.space * this.nameLineHeight + 7.7), this.ctx.stroke(), this.twoClockArrow(n, t.time * this.nameLineHeight, t.space * this.nameLineHeight), this.addMargin(e.time, t.time, i)))
            }, e.prototype.addMargin = function(e, t, n) {
                return this.marginMap[n] || (this.marginMap[n] = []), this.marginMap[n].push([e, t])
            }, e.prototype.oneClockArrow = function(e, t, n) {
                return this.ctx.fillStyle = e, this.ctx.beginPath(), this.ctx.moveTo(t - 3, n + 10.5), this.ctx.lineTo(t - 9, n + 5.5), this.ctx.lineTo(t - 2.6, n + 3.5), this.ctx.fill()
            }, e.prototype.twoClockArrow = function(e, t, n) {
                return this.ctx.fillStyle = e, this.ctx.beginPath(), this.ctx.moveTo(t - 12.4, n + 6.6), this.ctx.lineTo(t - 9.3, n + 10.6), this.ctx.lineTo(t - 3.2, n + 2.4), this.ctx.fill()
            }, e.prototype.threeClockArrow = function(e, t, n) {
                return this.ctx.fillStyle = e, this.ctx.beginPath(), this.ctx.moveTo(t - 10, n - 3.5), this.ctx.lineTo(t - 10, n + 3.5), this.ctx.lineTo(t - 4, n), this.ctx.fill()
            }, e.prototype.fourClockArrow = function(e, t, n) {
                return this.ctx.fillStyle = e, this.ctx.beginPath(), this.ctx.moveTo(t - 12.4, n - 6.6), this.ctx.lineTo(t - 9.3, n - 10.6), this.ctx.lineTo(t - 3.2, n - 2.4), this.ctx.fill()
            }, e.prototype.safePath = function(e, t, n) {
                var i, r, s, o;
                for (o = this.spaceMap[n], i = 0, r = o.length; r > i; i++)
                    if (s = o[i], this.timeInPath(e, s)) return s[1] === t;
                return !1
            }, e.prototype.closestMargin = function(e, t, n, i) {
                var r, s, o, a, c;
                for (a = this.spaceMap.length, o = i, s = !1, r = !1, c = !1; !r || !s;) {
                    if (n + o >= 0 && this.safeMargin(e, t, n + o)) return n + o;
                    0 > n + o && (s = !0), n + o > a && (r = !0), c === !1 && 0 === o ? (o = -1, c = !0) : o = 0 > o ? -o - 1 : -o - 2
                }
                return n > 0 ? n - 1 : 0
            }, e.prototype.safeMargin = function(e, t, n) {
                var i, r, s, o;
                if (!this.marginMap[n]) return !0;
                for (o = this.marginMap[n], i = 0, r = o.length; r > i; i++)
                    if (s = o[i], this.pathsCollide([e, t], s)) return !1;
                return !0
            }, e.prototype.pathsCollide = function(e, t) {
                return this.timeWithinPath(e[0], t) || this.timeWithinPath(e[1], t) || this.timeWithinPath(t[0], e) || this.timeWithinPath(t[1], e)
            }, e.prototype.timeInPath = function(e, t) {
                return e >= t[0] && e <= t[1]
            }, e.prototype.timeWithinPath = function(e, t) {
                return e > t[0] && e < t[1]
            }, e.prototype.spaceColor = function(e) {
                return 0 === e ? "#000000" : this.spaceColors[e % this.spaceColors.length]
            }, e
        }(), n = function() {
            function e(e, t, n) {
                this.chrome = t, this.graph = n, this.out = l(this.out, this), this.move = l(this.move, this), this.docmove = l(this.docmove, this), this.down = l(this.down, this), this.up = l(this.up, this), this.dragging = !1, this.lastPoint = {
                    x: 0,
                    y: 0
                }, this.lastHoverCommit = null, this.lastHoverUser = null, this.pressedCommit = null, this.pressedUser = null, this.canvas = e.getElementsByTagName("canvas")[0], this.canvasOffset = $(this.canvas).offset(), this.canvas.style.cursor = "move", document.body.addEventListener("mouseup", this.up), document.body.addEventListener("mousemove", this.docmove), this.canvas.addEventListener("mousedown", this.down), this.canvas.addEventListener("mousemove", this.move), this.canvas.addEventListener("mouseout", this.out)
            }
            return e.prototype.up = function(e) {
                return this.dragging = !1, this.pressedCommit && this.graph.activeCommit === this.pressedCommit ? window.open("/" + this.graph.activeCommit.user.name + "/" + this.graph.activeCommit.user.repo + "/commit/" + this.graph.activeCommit.id) : this.pressedUser && this.chrome.activeUser === this.pressedUser && (window.location = "/" + this.chrome.activeUser.name + "/" + this.chrome.activeUser.repo + "/network"), this.pressedCommit = null, this.pressedUser = null
            }, e.prototype.down = function(e) {
                return this.graph.activeCommit ? this.pressedCommit = this.graph.activeCommit : this.chrome.activeUser ? this.pressedUser = this.chrome.activeUser : this.dragging = !0
            }, e.prototype.docmove = function(e) {
                var t, n;
                return t = e.pageX, n = e.pageY, this.dragging && (this.graph.moveX(t - this.lastPoint.x), this.graph.moveY(n - this.lastPoint.y), this.graph.draw(), this.chrome.moveX(t - this.lastPoint.x), this.chrome.moveY(n - this.lastPoint.y), this.chrome.draw()), this.lastPoint.x = t, this.lastPoint.y = n
            }, e.prototype.move = function(e) {
                var t, n, i, r;
                return i = e.pageX, r = e.pageY, this.dragging ? (this.graph.moveX(i - this.lastPoint.x), this.graph.moveY(r - this.lastPoint.y), this.graph.draw(), this.chrome.moveX(i - this.lastPoint.x), this.chrome.moveY(r - this.lastPoint.y), this.chrome.draw()) : (n = this.chrome.hover(i - this.canvasOffset.left, r - this.canvasOffset.top), n !== this.lastHoverUser ? (this.canvas.style.cursor = n ? "pointer" : "move", this.chrome.activeUser = n, this.chrome.draw(), this.lastHoverUser = n) : (t = this.graph.hover(i - this.canvasOffset.left, r - this.canvasOffset.top), t !== this.lastHoverCommit && (this.canvas.style.cursor = t ? "pointer" : "move", this.graph.activeCommit = t, this.graph.draw(), this.chrome.draw(), this.lastHoverCommit = t))), this.lastPoint.x = i, this.lastPoint.y = r
            }, e.prototype.out = function(e) {
                return this.graph.activeCommit = null, this.chrome.activeUser = null, this.graph.draw(), this.chrome.draw(), this.lastHoverCommit = null, this.lastHoverUser = null
            }, e
        }(), t = function() {
            function e(e, t) {
                this.chrome = e, this.graph = t, this.down = l(this.down, this), this.dirty = !1, document.addEventListener("keydown", this.down)
            }
            return e.prototype.moveBothX = function(e) {
                return this.graph.moveX(e), this.chrome.moveX(e), this.graph.activeCommit = null, this.dirty = !0
            }, e.prototype.moveBothY = function(e) {
                return this.graph.moveY(e), this.chrome.moveY(e), this.graph.activeCommit = null, this.dirty = !0
            }, e.prototype.toggleRefs = function() {
                return this.graph.toggleRefs(), this.dirty = !0
            }, e.prototype.redraw = function() {
                return this.dirty && (this.graph.draw(), this.chrome.draw()), this.dirty = !1
            }, e.prototype.down = function(e) {
                if ($(e.target).is("input")) return !0;
                if (e.shiftKey) switch (e.which) {
                    case 37:
                    case 72:
                        return this.moveBothX(999999), this.redraw();
                    case 38:
                    case 75:
                        return this.moveBothY(999999), this.redraw();
                    case 39:
                    case 76:
                        return this.moveBothX(-999999), this.redraw();
                    case 40:
                    case 74:
                        return this.moveBothY(-999999), this.redraw()
                } else switch (e.which) {
                    case 37:
                    case 72:
                        return this.moveBothX(100), this.redraw();
                    case 38:
                    case 75:
                        return this.moveBothY(30), this.redraw();
                    case 39:
                    case 76:
                        return this.moveBothX(-100), this.redraw();
                    case 40:
                    case 74:
                        return this.moveBothY(-30), this.redraw();
                    case 84:
                        return this.toggleRefs(), this.redraw()
                }
            }, e
        }(), u = !1, $.observe(".js-network-graph-container", {
            add: function() {
                return u = !0, new i(this, 980, 600)
            },
            remove: function() {
                return u = !1
            }
        })
    }.call(this),
    function() {
        var e, t;
        t = require("github/inflector").pluralize, e = require("delegated-events"), e.on("graph:load", ".js-pulse-authors-graph", function(e) {
            var n, i, r, s, o, a, c, u, l, d, h;
            return r = e.detail.data, n = 15, r = r.slice(0, +(n - 1) + 1 || 9e9), o = {
                top: 20,
                right: 0,
                bottom: 30,
                left: 20
            }, u = $(this).width() - o.left - o.right, s = $(this).height() - o.top - o.bottom, l = d3.scale.ordinal().domain(d3.range(n)).rangeRoundBands([0, u], .2), d = d3.scale.linear().domain([0, d3.max(r, function(e) {
                return e.commits
            })]).range([s, 0]), h = d3.svg.axis().scale(d).orient("left").ticks(3).tickSize(-u).tickFormat(function(e) {
                return 1e3 > e ? e : d3.format(",s")(e)
            }), a = d3.tip().attr("class", "svg-tip").offset([-10, 0]).html(function(e) {
                var n;
                return "<strong>" + e.commits + "</strong> " + t(e.commits, "commit") + " by <strong>" + (null != (n = e.login) ? n : e.name) + "</strong>"
            }), c = d3.select(this).append("svg").attr("width", u + o.left + o.right).attr("height", s + o.top + o.bottom).append("g").attr("transform", "translate(" + o.left + ", " + o.top + ")").call(a), c.append("g").attr("class", "y axis").call(h), i = c.selectAll(".bar").data(r).enter().append("g").attr("class", "bar").attr("transform", function(e, t) {
                return "translate(" + l(t) + ", 0)"
            }), i.append("rect").attr("width", l.rangeBand()).attr("height", function(e, t) {
                return s - d(e.commits)
            }).attr("y", function(e) {
                return d(e.commits)
            }).on("mouseover", a.show).on("mouseout", a.hide), i.append("a").attr("xlink:href", function(e) {
                return null != e.login ? "/" + e.login : void 0
            }).append("image").attr("y", s + 5).attr("xlink:href", function(e) {
                return e.gravatar
            }).attr("width", l.rangeBand()).attr("height", l.rangeBand())
        })
    }.call(this),
    function() {
        var e, t, n;
        t = require("github/inflector").pluralize, n = require("github/locale").weekdays, e = require("delegated-events"), e.on("graph:load", ".js-graph-punchcard", function(e) {
            var i, r, s, o, a, c, u, l, d, h, f, m, p, g, v, b, y, j, w, x, k, S;
            return r = e.detail.data, c = 500, x = $(this).width(), f = {}, r.forEach(function(e) {
                var t, i, r;
                return r = n[e[0]], t = null != f[r] ? f[r] : f[r] = [], i = e[1], null == t[i] && (t[i] = 0), t[i] += e[2]
            }), r = d3.entries(f).reverse(), y = [0, 0, 0, 20], v = y[0], p = y[1], g = y[2], m = y[3], l = 100, s = d3.range(7), u = d3.range(24), h = d3.min(r, function(e) {
                return d3.min(e.value)
            }), d = d3.max(r, function(e) {
                return d3.max(e.value)
            }), k = d3.scale.ordinal().domain(u).rangeRoundBands([0, x - l - p - g], .1), S = d3.scale.ordinal().domain(s).rangeRoundBands([c - v - m, 0], .1), b = d3.scale.sqrt().domain([0, d]).range([0, k.rangeBand() / 2]), j = d3.tip().attr("class", "svg-tip").offset([-10, 0]).html(function(e) {
                return "<strong>" + e + "</strong> " + t(e, "commit")
            }), w = d3.select(this).data(r).attr("width", x + "px").append("svg").attr("width", x + (p + g)).attr("height", c + v + m).attr("class", "viz").append("g").attr("transform", "translate(" + p + "," + v + ")").call(j), o = w.selectAll("g.day").data(r).enter().append("g").attr("class", "day").attr("transform", function(e, t) {
                return "translate(0, " + S(t) + ")"
            }), o.append("line").attr("x1", 0).attr("y1", S.rangeBand()).attr("x2", x - p - g).attr("y2", S.rangeBand()).attr("class", "axis"), o.append("text").attr("class", "day-name").text(function(e, t) {
                return e.key
            }).attr("dy", S.rangeBand() / 2), w.append("g").selectAll("text.hour").data(u).enter().append("text").attr("text-anchor", "middle").attr("transform", function(e, t) {
                return "translate(" + (k(t) + l) + ", " + c + ")"
            }).attr("class", "label").text(function(e) {
                var t;
                return t = e % 12 || 12, 0 === e || 12 > e ? t + "a" : t + "p"
            }), a = o.selectAll(".hour").data(function(e) {
                return e.value
            }).enter().append("g").attr("class", "hour").attr("transform", function(e, t) {
                return "translate(" + (k(t) + l) + ", 0)"
            }).attr("width", k.rangeBand()), a.append("line").attr("x1", 0).attr("y1", function(e, t) {
                return S.rangeBand() - (t % 2 === 0 ? 15 : 10)
            }).attr("x2", 0).attr("y2", S.rangeBand()).attr("class", function(e, t) {
                return t % 2 === 0 ? "axis even" : "axis odd"
            }), i = a.append("circle").attr("r", 0).attr("cy", S.rangeBand() / 2 - 5).attr("class", function(e) {
                return "day"
            }).on("mouseover", j.show).on("mouseout", j.hide), i.transition().attr("r", b)
        })
    }.call(this),
    function() {
        var e, t, n, i, r, s, o, a;
        n = require("github/d3/format-symbol")["default"], t = require("delegated-events"), s = function(e) {
            var t;
            return (t = d3.format(","))(e)
        }, r = {
            top: 20,
            right: 40,
            bottom: 30,
            left: 40
        }, a = 980 - r.left - r.right, i = 170 - r.top - r.bottom, e = function(e, t, n, i) {
            var r;
            return r = d3.time.format.utc("%A, %B %-d, %Y"), d3.tip().attr("class", "svg-tip web-views comparison").offset([-10, 0]).html(function(o) {
                var a, c;
                return a = 1 === o.total ? e : t, c = 1 === o.unique ? n : i, "<span class='title'>" + r(o.date) + "</span> <ul class='web-views'> <li class='totals'><strong>" + s(o.total) + "</strong> " + a + "</li> <li class='uniques'><strong>" + s(o.unique) + "</strong> " + c + "</li> </ul>"
            })
        }, o = function(e, t) {
            var o, c, u, l, d, h, f, m, p, g, v, b, y, j, w, x, k, S, C, L, q, A, T, _, E, P, D, M, I, R;
            if (e && null == e.error) {
                for (P = d3.time.scale.utc().range([0, a]), M = d3.scale.linear().range([i, 0]), I = d3.scale.linear().range([i, 0]), y = d3.time.format.utc("%m/%d"), D = d3.svg.axis().scale(P).ticks(e.counts.length).tickSize(i + 5).tickPadding(10).tickFormat(y).orient("bottom"), R = d3.svg.axis().scale(M).ticks(3).tickFormat(n).orient("left"), p = d3.svg.line().x(function(e) {
                        return P(e.key)
                    }).y(function(e) {
                        return M(e.value)
                    }), T = d3.select(this).select(".js-graph").append("svg").attr("width", a + r.left + r.right).attr("height", i + r.top + r.bottom).attr("class", "vis").append("g").attr("transform", "translate(" + r.left + "," + r.top + ")").call(t), u = e.counts, u.forEach(function(e) {
                        return e.date = new Date(1e3 * e.bucket)
                    }), u.sort(function(e, t) {
                        return d3.ascending(e.date, t.date)
                    }), c = d3.bisector(function(e) {
                        return e.date
                    }).left, j = function() {
                        var e, n, i, r, s, o;
                        return o = P.invert(d3.mouse(this)[0]), s = c(u, o, 1), n = u[s - 1], i = u[s], n && i ? (e = o - n.date > i.date - o ? i : n, r = T.selectAll("g.dots circle").filter(function(t) {
                            return t.key === e.date
                        }), r = r[0], r.sort(function(e, t) {
                            return $(e).attr("cy") - $(t).attr("cy")
                        }), t.show.call(this, e, r[0])) : void 0
                    }, S = [], A = [], f = 0, m = u.length; m > f; f++) h = u[f], S.push({
                    key: h.date,
                    value: h.total
                }), A.push({
                    key: h.date,
                    value: h.unique
                });
                return b = [S, A], g = d3.extent(u, function(e) {
                    return e.date
                }), x = g[0], d = g[1], v = d3.extent(S, function(e) {
                    return e.value
                }), E = v[0], _ = v[1], C = d3.max(A, function(e) {
                    return e.value
                }), L = C + d3.median(A, function(e) {
                    return e.value
                }), P.domain([x, d]), M.domain([0, _]), I.domain([0, L]), k = e.summary.total, $(this).find(".js-traffic-total").text(s(k)), 1 === k && (o = $(this).find(".js-traffic-total-units"), o.length > 0 && (w = o.attr("data-singular"), o.text(w))), q = e.summary.unique, $(this).find(".js-traffic-uniques").text(s(q)), 1 === q && (o = $(this).find(".js-traffic-unique-units"), o.length > 0 && (w = o.attr("data-singular"), o.text(w))), T.append("g").attr("class", "x axis").call(D), T.append("g").attr("class", "y axis views").call(R), T.selectAll("path.path").data(b).enter().append("path").attr("class", function(e, t) {
                    return "path " + (0 === t ? "total" : "unique")
                }).attr("d", function(e, t) {
                    return 0 === t ? p(e) : p.y(function(e) {
                        return I(e.value)
                    })(e)
                }), l = T.selectAll("g.dots").data(b).enter().append("g").attr("class", function(e, t) {
                    return 0 === t ? "dots totals" : "dots uniques"
                }), l.each(function(e, t) {
                    var n;
                    return n = d3.select(this), 1 === t && (M = I), n.selectAll("circle").data(function(e, t) {
                        return e
                    }).enter().append("circle").attr("cx", function(e) {
                        return P(e.key)
                    }).attr("cy", function(e) {
                        return M(e.value)
                    }).attr("r", 4)
                }), R.scale(I).orient("right"), T.append("g").attr("class", "y axis unique").attr("transform", "translate(" + a + ", 0)").call(R), T.append("rect").attr("class", "overlay").attr("width", a).attr("height", i).on("mousemove", j).on("mouseout", function(e) {
                    return setTimeout(t.hide, 500)
                })
            }
        }, t.on("graph:load", "#js-visitors-graph", function(t) {
            var n;
            return n = e("view", "views", "unique visitor", "unique visitors"), $.observe("#js-visitors-graph .js-graph", {
                remove: n.hide
            }), o.apply(this, [t.detail.data, n])
        }), t.on("graph:load", "#js-clones-graph", function(t) {
            var n;
            return n = e("clone", "clones", "unique cloner", "unique cloners"), $.observe("#js-clones-graph .js-graph", {
                remove: n.hide
            }), o.apply(this, [t.detail.data, n])
        })
    }.call(this),
    function() {
        var e;
        e = function() {
            var e, t;
            t = $(this), e = t.find(":selected"), e.attr("data-already-member") ? ($(".js-account-membership-form").addClass("is-member"), $(".js-account-membership-form").removeClass("is-not-member")) : ($(".js-account-membership-form").removeClass("is-member"), $(".js-account-membership-form").addClass("is-not-member"))
        }, $.observe(".js-account-membership", e), $(document).on("change", ".js-account-membership", e)
    }.call(this),
    function() {
        var e, t, n, i, r, s, o, a, c, u;
        n = require("github/fetch").fetchPoll, c = null, o = 300, a = [".", ".", "."], s = 0, t = function() {
            return $(".js-audit-log-export-button").removeClass("disabled")
        }, e = function() {
            return $(".js-audit-log-export-button").addClass("disabled")
        }, r = function() {
            var t, n;
            return t = $(".js-audit-log-export-status"), t.data("oldText", t.text()), n = function() {
                var e;
                return e = a.slice(0, s).join(""), t.text("Exporting" + e), s >= 3 ? s = 0 : s += 1
            }, c = setInterval(n, o), e()
        }, u = function() {
            var e;
            return t(), e = $(".js-audit-log-export-status"), e.text(e.data("oldText")), clearInterval(c), s = 0
        }, i = function() {
            return u(), $("#ajax-error-message").show(function() {
                return this.classList.add("visible")
            })
        }, $(document).on("ajaxSend", ".js-audit-log-export", r), $(document).on("ajaxError", ".js-audit-log-export", i), $(document).on("ajaxSuccess", ".js-audit-log-export", function(e, t, r, s) {
            var o, a;
            return a = this, o = function() {
                return u(), window.location = s.export_url
            }, n(s.job_url).then(o, i)
        }), $(document).on("navigation:open", ".audit-search-form .js-suggester", function(e) {
            return $(this).closest("form").submit()
        })
    }.call(this),
    function() {
        var e, t;
        $(document).on("submit", ".js-find-coupon-form", function(e) {
            var t, n;
            return t = e.target.action, n = $("#code").val(), window.location = t + "/" + encodeURIComponent(n), e.stopPropagation(), e.preventDefault()
        }), $(document).on("click", ".js-choose-account", function(t) {
            return $(".js-plan-row, .js-choose-plan").removeClass("selected"), $(".js-plan").val(""), $(".js-billing-section").addClass("has-removed-contents"), e($(this).closest(".js-account-row")), t.stopPropagation(), t.preventDefault()
        }), $(document).on("click", ".js-choose-plan", function(e) {
            return t($(this).closest(".js-plan-row")), e.stopPropagation(), e.preventDefault()
        }), $.observe(".js-plan-row.selected", {
            add: function() {
                return $(this).closest("form").find(".js-redeem-button").prop("disabled", $(this).hasClass("free-plan"))
            }
        }), e = function(e) {
            var n, i, r, s;
            if (e.length) return r = e.attr("data-login"), s = e.attr("data-plan"), $(".js-account-row, .js-choose-account").removeClass("selected"), e.addClass("selected"), e.find(".js-choose-account").addClass("selected"), $(".js-account").val(r), $(".js-plan-section").removeClass("is-hidden"), $(".js-billing-plans").addClass("is-hidden"), i = $(".js-plans-for-" + r), i.removeClass("is-hidden"), n = $(".js-plan-row", i), t(1 === n.length ? n : $("[data-name='" + s + "']", i))
        }, t = function(e) {
            var t, n, i, r, s;
            if (e.length) return r = e.attr("data-name"), n = parseInt(e.attr("data-cost"), 10), s = e.closest(".js-billing-plans"), i = "true" === s.attr("data-has-billing"), t = s.attr("data-login"), $(".js-plan-row, .js-choose-plan").removeClass("selected"), e.addClass("selected"), e.find(".js-choose-plan").addClass("selected"), $(".js-plan").val(r), 0 === n || i ? $(".js-billing-section").addClass("has-removed-contents") : $(".js-billing-section[data-login='" + t + "']").removeClass("has-removed-contents")
        }, $(function() {
            return e($(".js-account-row.selected")), t($(".js-plan-row.selected"))
        })
    }.call(this),
    function() {
        $(document).on("change", ".js-survey-select", function() {
            var e, t, n, i;
            return n = $(this)[0], t = $(this).closest(".js-survey-question-form"), e = t.find(".js-survey-other-text"), i = n.options[n.selectedIndex], i.classList.contains("js-survey-option-other") ? (t.addClass("is-other-selected"), e.attr("required", "required"), e.focus()) : (e.removeAttr("required"), t.removeClass("is-other-selected"))
        }), $(document).on("change", ".js-survey-radio", function() {
            var e, t, n;
            return e = $(this)[0], n = $(this).closest(".js-survey-question-form"), t = n.find(".js-survey-other-text"), e.classList.contains("js-survey-radio-other") ? (n.addClass("is-other-selected"), t.attr("required", "required"), t.focus()) : (t.removeAttr("required"), n.removeClass("is-other-selected")), $(this).trigger("validation:field:change")
        })
    }.call(this),
    function() {
        var e, t, n, i, r, s, o, a, c, u, l = require("delegated-events"),
            d = l.fire;
        r = function(e) {
            var t, n, i, r, s;
            if (r = e.match(/\#?(?:L)(\d+)/gi)) {
                for (s = [], t = 0, n = r.length; n > t; t++) i = r[t], s.push(parseInt(i.replace(/\D/g, "")));
                return s
            }
            return []
        }, n = function(e) {
            var t;
            return (t = e.match(/(file-.+?-)L\d+?/i)) ? t[1] : ""
        }, i = function(e) {
            return {
                lineRange: r(e),
                anchorPrefix: n(e)
            }
        }, e = function(e) {
            var t, n;
            switch (n = e.lineRange, t = e.anchorPrefix, n.sort(c), n.length) {
                case 1:
                    return "#" + t + "L" + n[0];
                case 2:
                    return "#" + t + "L" + n[0] + "-L" + n[1];
                default:
                    return "#"
            }
        }, c = function(e, t) {
            return e - t
        }, a = !1, t = function(e) {
            var t, n, i, r, s;
            if (r = e.lineRange, t = e.anchorPrefix, i = $(".js-file-line"), i.length) {
                if (i.css("background-color", ""), 1 === r.length) return $("#" + t + "LC" + r[0]).css("background-color", "#f8eec7");
                if (r.length > 1) {
                    for (n = r[0], s = []; n <= r[1];) $("#" + t + "LC" + n).css("background-color", "#f8eec7"), s.push(n++);
                    return s
                }
            }
        }, o = function(e) {
            var n, r, s;
            return null == e && (e = i(window.location.hash)), s = e.lineRange, n = e.anchorPrefix, t(e), !a && (r = $("#" + n + "LC" + s[0])).length && $(window).scrollTop(r.offset().top - .33 * $(window).height()), a = !1
        }, u = function(e, t) {
            var n, i, r;
            return r = "FORM" === e.nodeName ? "action" : "href", n = e.getAttribute(r), (i = n.indexOf("#")) >= 0 && (n = n.substr(0, i)), n += t, e.setAttribute(r, n)
        }, $.hashChange(function() {
            var e, t, n, i, r, s;
            if (document.querySelector(".js-file-line-container")) {
                for (setTimeout(o, 0), t = window.location.hash, r = document.querySelectorAll(".js-update-url-with-hash"), s = [], n = 0, i = r.length; i > n; n++) e = r[n], s.push(u(e, t));
                return s
            }
        }), s = function(e) {
            var t, n;
            return a = !0, n = null != (t = $(window).scrollTop()) ? t : 0, e(), $(window).scrollTop(n)
        }, $(document).on("mousedown", ".js-line-number", function(t) {
            var n, o;
            return n = i(this.id), t.shiftKey && (o = r(window.location.hash), n.lineRange.unshift(o[0])), s(function() {
                return window.location.hash = e(n)
            }), !1
        }), $(document).on("submit", ".js-jump-to-line-form", function() {
            var e, t;
            return e = this.querySelector(".js-jump-to-line-field"), (t = e.value.replace(/[^\d\-]/g, "")) && (window.location.hash = "L" + t), d(document, "facebox:close"), !1
        })
    }.call(this),
    function() {
        var e, t, n, i, r, s, o, a, c, u, l, d, h, f, m, p, g, v, b, y;
        r = require("github/fetch").fetchText, c = function(e) {
            var t, n, i;
            return n = e[0], t = n.querySelector(".js-blob-filename"), t ? "." === (i = t.value) || ".." === i || ".git" === i ? !1 : /\S/.test(t.value) : !0
        }, e = function(e) {
            var t;
            return t = e.querySelector(".js-blob-contents"), t ? "true" === t.getAttribute("data-allow-unchanged") ? !0 : s(t) : !0
        }, d = function(e) {
            var t;
            return t = e.querySelector(".js-new-filename-field"), s(t)
        }, t = function(t) {
            var n;
            return t = $(".js-blob-form"), n = t[0], t.find(".js-check-for-fork").is($.visible) ? !1 : c(t) ? e(n) || d(n) : !1
        }, g = function(e) {
            var t;
            return t = e.find(".js-blob-contents")[0], t ? $(t).attr("data-allow-unchanged") ? !0 : s(t) : !1
        }, u = function(e) {
            var t, n;
            return n = e[0], t = n.querySelector(".js-blob-contents"), s(t) || d(n)
        }, n = null, i = function(e) {
            var t;
            return t = $(e).attr("data-github-confirm-unload"), ("yes" === t || "true" === t) && (t = ""), null == t && (t = "false"), "no" === t || "false" === t ? null : function() {
                return t
            }
        }, h = function() {
            var e;
            return e = $(".js-blob-form"), e[0] ? (e.find(".js-blob-submit").prop("disabled", !t(e)), e.find(".js-blob-contents-changed").val(g(e)), n ? u(e) ? window.onbeforeunload = n : window.onbeforeunload = null : void 0) : void 0
        }, f = function(e) {
            var t, n, i, r, s;
            for (r = e.querySelectorAll("input"), s = [], n = 0, i = r.length; i > n; n++) t = r[n], "hidden" === t.getAttribute("type") && t.getAttribute("class") && (null == t.getAttribute("data-default-value") ? s.push(t.setAttribute("data-default-value", t.value)) : s.push(void 0));
            return s
        }, s = function(e) {
            return null == e ? !0 : "hidden" === e.type ? e.value !== e.getAttribute("data-default-value") : e.value !== e.defaultValue
        }, m = function(e) {
            var t, n, i, r;
            return t = e.querySelector(".js-blob-contents"), i = e.querySelector(".js-new-filename-field"), n = e.querySelector(".js-blob-filename"), t && i && n && (null != (r = n.defaultValue) ? r.length : void 0) ? $(t).data("old-filename", i.value) : void 0
        }, $.observe(".js-blob-form", function() {
            f(this), m(this), h(), n = i(this), $(this).on("submit", function() {
                return window.onbeforeunload = null
            })
        }), $(document).on("change", ".js-blob-contents", function() {
            return p($(".js-blob-filename")), h()
        }), $(document).onFocusedInput(".js-blob-filename", function() {
            return function() {
                return $(".js-blob-contents").attr("data-filename", $(this).val()), l($(this).val()), p($(this))
            }
        }), $(document).onFocusedInput(".js-breadcrumb-nav", function() {
            return function() {
                return y($(this)), p($(this))
            }
        }), $(document).onFocusedKeydown(".js-breadcrumb-nav", function() {
            return function(e) {
                var t, n, i;
                return n = $(this).caretSelection(), i = [0, 0], t = 0 === $(n).not(i).length && 0 === $(i).not(n).length, t && 8 === e.keyCode && 1 !== $(this).parent().children(".separator").length && (a($(this), !0), e.preventDefault()), p($(this))
            }
        }), p = function(e) {
            return null != e[0] && (b(e), v(e)), h()
        }, y = function(e) {
            var t, n, i, r, s, c;
            for (i = []; e.val().split("/").length > 1;) t = e.val(), r = t.split("/"), n = r[0], c = r.slice(1).join("/"), "" === n || "." === n || ".git" === n ? (e.val(c), s = function() {
                return e.caret(0)
            }, i.push(window.setTimeout(s, 1))) : ".." === n ? i.push(a(e)) : i.push(o(e, n, c));
            return i
        }, l = function(e) {
            var t, n;
            return t = $(".js-gitignore-template"), n = $(".js-license-template"), /^(.+\/)?\.gitignore$/.test(e) ? t.addClass("is-visible") : /^(.+\/)?(licen[sc]e|copying)($|\.)/i.test(e) ? n.addClass("is-visible") : (t.removeClass("is-visible"), n.removeClass("is-visible"))
        }, v = function(e) {
            var t, n, i, r, o, a, c, u, l, d, h, f;
            return i = e.closest("form"), n = $(".js-blob-contents"), t = i.find(".js-new-blob-commit-summary"), c = e.val() ? "Create " + e.val() : "Create new file", h = n.data("old-filename"), u = $(".js-new-filename-field").val(), n.removeData("new-filename"), c = (null != h ? h.length : void 0) && u !== h && null != e[0] ? (n.data("new-filename", !0), o = s(n[0]), r = o ? "Update and rename" : "Rename", e.val().length && u.length ? (f = h.split("/"), l = u.split("/"), d = !0, a = f.length - 1, f.forEach(function(e, t) {
                return t !== a && e !== l[t] ? d = !1 : void 0
            }), f.length === l.length && d ? r + " " + f[a] + " to " + l[a] : r + " " + h + " to " + u) : r + " " + h) : (null != h ? h.length : void 0) && u === h ? "Update " + e.val() : c, t.attr("placeholder", c), $(".js-commit-message-fallback").val(c)
        }, b = function(e) {
            var t, n;
            return t = $(".breadcrumb").children(".js-path-segment"), n = "", t.each(function() {
                var e;
                return e = $(this), n = n + e.text() + "/"
            }), n += e.val(), $(".js-new-filename-field").val(n)
        }, a = function(e, t) {
            var n, i;
            return null == t && (t = !1), t || e.val(e.val().replace("../", "")), i = function() {
                return e.caret(0)
            }, 1 !== e.parent().children(".separator").length && (e.prev().remove(), n = e.prev().children().children().html(), e.prev().remove(), t && (e.val("" + n + e.val()), i = function() {
                return t ? e.caret(n.length) : void 0
            })), l(e.val()), window.setTimeout(i, 1)
        }, o = function(e, t, n) {
            var i, r, s, o, a, c, u;
            return null == n && (n = ""), t = t.replace(/[^-.a-z_0-9]+/gi, "-"), t = t.replace(/^-+|-+$/g, ""), t.length > 0 && (u = e.parent().children(".js-repo-root, [itemtype]").children("a").last().attr("href"), u || (i = e.parent().children(".js-repo-root, [itemtype]").children("span").children("a").last(), r = i.attr("data-branch"), a = i.attr("href"), u = a + "/tree/" + r), s = $(".js-crumb-template").clone().removeClass("js-crumb-template"), s.find("a[itemscope]").attr("href", u + "/" + t), s.find("span").text(t), o = $(".js-crumb-separator").clone().removeClass("js-crumb-separator"), e.before(s, o)), e.val(n), l(e.val()), c = function() {
                return e.caret(0)
            }, window.setTimeout(c, 1)
        }, $(document).onFocusedInput(".js-new-blob-commit-summary", function() {
            var e;
            return e = $(this).closest(".js-file-commit-form"),
                function() {
                    return e.toggleClass("is-too-long-error", $(this).val().length > 50)
                }
        }), $.observe(".js-check-for-fork", function() {
            this.addEventListener("load", function() {
                return h()
            })
        }), $(document).on("change", ".js-gitignore-template input[type=radio]", function() {
            var e;
            return e = $(this).closest(".js-blob-form").find(".js-code-editor").data("code-editor"), r(this.getAttribute("data-template-url")).then(function(t) {
                return e.setCode(t)
            })
        }), $(document).on("change", ".js-license-template input[type=radio]", function() {
            var e, t;
            return e = $(this).closest(".js-blob-form").find(".js-code-editor").data("code-editor"), t = $(this).attr("data-template-contents"), e.setCode(t)
        }), $(document).onFocusedKeydown(".js-new-blob-commit-description", function() {
            return function(e) {
                return "ctrl+enter" === e.hotkey || "meta+enter" === e.hotkey ? ($(this).closest("form").submit(), !1) : void 0
            }
        })
    }.call(this),
    function() {
        var e, t;
        e = function(e) {
            var t, n, i, r, s, o;
            for (e = e.toLowerCase(), t = $(".js-csv-data tbody tr"), r = [], n = 0, i = t.length; i > n; n++) s = t[n], o = $(s).text().toLowerCase(), -1 === o.indexOf(e) ? r.push($(s).hide()) : r.push($(s).show());
            return r
        }, t = function(t) {
            var n;
            n = t.target.value, null != n && e(n), t.preventDefault()
        }, $(document).on("focus", ".js-csv-filter-field", function() {
            return $(this).on("keyup", t)
        }), $(document).on("blur", ".js-csv-filter-field", function() {
            return $(this).off("keyup", t)
        })
    }.call(this),
    function() {
        var e, t, n;
        t = require("github/pjax"), n = require("github/history").replaceState, e = null, $.observe(".js-branch-search-field", function() {
            var t, i, r, s, o, a, c, u, l, d, h, f, m, p;
            i = $(this), r = i.closest(".js-branch-search"), t = r.closest(".js-branches"), s = t.find(".js-branches-subnav .js-subnav-item"), m = r.prop("action"), f = r.attr("data-reset-url"), p = r.attr("data-results-container"), l = /\S/, c = function() {
                return l.test(i.val())
            }, d = function(e, t) {
                var i;
                return n(null, "", t), i = document.getElementById(p), $(i).html(e)
            }, a = null, o = function(e) {
                return a && a.readyState < 4 && a.abort(), a = $.ajax(e)
            }, u = function() {
                var n, i;
                return null === e && (e = s.filter(".selected")), n = c(), i = n ? m + "?" + r.serialize() : f, o({
                    url: i,
                    context: r
                }).always(function() {
                    return t.removeClass("is-loading")
                }).done(function(e) {
                    return d(e, i)
                }), t.toggleClass("is-search-mode", n), t.addClass("is-loading"), s.removeClass("selected"), n ? s.filter(".js-branches-all").addClass("selected") : (e.addClass("selected"), e = null)
            }, h = function() {
                var e;
                return e = c(), i.val(""), e ? u() : void 0
            }, i.on("throttled:input", u), i.on("keyup", function(e) {
                return "esc" === e.hotkey ? (h(), this.blur()) : void 0
            })
        }), $(document).on("submit", ".js-branch-search", !1), $(document).on("click", ".js-clear-branch-search", function(e) {
            var t;
            if (1 === e.which) return t = $(this).closest(".js-branch-search").find(".js-branch-search-field"), t.focus().val("").trigger("input"), e.preventDefault()
        }), $(document).on("ajaxSend", ".js-branch-destroy, .js-branch-restore", function(e, t) {
            var n, i, r, s, o;
            return i = $(this), o = i.is(".js-branch-destroy"), s = i.closest(".js-branch-row").attr("data-branch-name"), n = i.closest(".js-branches").find(".js-branch-row").filter(function() {
                return this.getAttribute("data-branch-name") === s
            }), r = i.find("button[type=submit]"), r.blur().removeClass("tooltipped"), n.addClass("loading"), t.done(function() {
                return n.toggleClass("is-deleted", o)
            }).always(function() {
                return n.removeClass("loading"), r.addClass("tooltipped")
            })
        })
    }.call(this),
    function() {
        var e, t;
        e = function() {
            var e, n, i, r, s, o;
            return s = [], n = $(".js-advanced-search-input").val(), o = {
                Repositories: 0,
                Users: 0,
                Code: 0
            }, e = $("input[type=text].js-advanced-search-prefix, select.js-advanced-search-prefix"), s = t(e, function(e, t, n) {
                return "" === e ? "" : ("" !== t && o[n]++, "" !== t ? "" + e + t : void 0)
            }), $.merge(s, t($("input[type=checkbox].js-advanced-search-prefix"), function(e, t, n) {
                var i;
                return i = $(this).prop("checked"), i !== !1 && o[n]++, i !== !1 ? "" + e + i : void 0
            })), i = function(e) {
                return e.Users > e.Code && e.Users > e.Repositories ? "Users" : e.Code > e.Users && e.Code > e.Repositories ? "Code" : "Repositories"
            }, r = $.trim(s.join(" ")), $(".js-type-value").val(i(o)), $(".js-search-query").val($.trim(n + " " + r)), $(".js-advanced-query").empty(), $(".js-advanced-query").text("" + r), $(".js-advanced-query").prepend($("<span>").text($.trim(n)), " ")
        }, t = function(e, t) {
            return $.map(e, function(e, n) {
                var i, r, s, o;
                return s = $.trim($(e).val()), i = $(e).attr("data-search-prefix"), r = $(e).attr("data-search-type"), o = function(e) {
                    return -1 !== e.search(/\s/g) ? '"' + e + '"' : e
                }, "" === i ? t.call(e, i, s, r) : -1 !== s.search(/\,/g) && "location" !== i ? s.split(/\,/).map(function(n, s) {
                    return t.call(e, i, o($.trim(n)), r)
                }) : t.call(e, i, o(s), r)
            })
        }, $(document).onFocusedInput(".js-advanced-search-prefix", function() {
            return function() {
                return e()
            }
        }), $(document).on("change", ".js-advanced-search-prefix", e), $(document).on("focusin", ".js-advanced-search-input", function() {
            return $(this).closest(".js-advanced-search-label").addClass("focus")
        }), $(document).on("focusout", ".js-advanced-search-input", function() {
            return $(this).closest(".js-advanced-search-label").removeClass("focus")
        }), $(document).on("click", ".js-see-all-search-cheatsheet", function() {
            return $(".js-more-cheatsheet-info").removeClass("hidden"), !1
        }), $(function() {
            return $(".js-advanced-search-input").length ? e() : void 0
        })
    }.call(this),
    function() {
        $(document).on("navigation:keyopen", ".commits-list-item", function() {
            return $(this).find(".commit-title > a").first().click(), !1
        }), $(document).on("navigation:keydown", ".commits-list-item", function(e) {
            return "c" === e.hotkey ? ($(this).find(".commit-title > a").first().click(), !1) : void 0
        })
    }.call(this),
    function() {
        var e;
        e = require("delegated-events"), $(document).on("click", ".js-compare-tabs a", function() {
            return $(this).closest(".js-compare-tabs").find("a").removeClass("selected"), $(this).addClass("selected"), $("#commits_bucket, #files_bucket, #commit_comments_bucket").hide(), $(this.hash).show(), !1
        }), $.hashChange(function() {
            return $(this).closest("#files_bucket")[0] && !$(this).is($.visible) ? $('a.tabnav-tab[href="#files_bucket"]').click() : void 0
        }), $(document).on("click", ".js-toggle-range-editor-cross-repo", function() {
            return $(".js-range-editor").toggleClass("is-cross-repo"), !1
        }), e.on("pjax:click", ".js-range-editor", function(e) {
            var t;
            t = e.detail.options, $(".js-compare-pr").hasClass("open") && !t.url.match(/expand=1/) && (null == t.data && (t.data = {}), t.data.expand = "1")
        }), $(document).on("navigation:open", "form.js-commitish-form", function() {
            var e, t, n;
            return t = $(this), n = t.find(".js-new-item-name").text(), e = $("<input>", {
                type: "hidden",
                name: "new_compare_ref",
                value: n
            }), t.append(e), t.submit()
        }), $.observe(".js-compare-pr.open", {
            add: function() {
                return document.body.classList.add("is-pr-composer-expanded")
            },
            remove: function() {
                return document.body.classList.remove("is-pr-composer-expanded")
            }
        })
    }.call(this),
    function() {
        var e, t, n, i, r, s, o;
        t = require("github/fetch").fetchText, o = require("github/dimensions").overflowOffset, n = require("github/fragment-target").findElementByFragmentName, $.hashChange(r = function() {
            var t, r, a, c, u, l, d, h, f;
            return c = window.location.hash, c && (l = s(c)) && (t = l[0], r = l[1], f = l[2], u = l[3], !n(c.slice(1))) ? (h = 0, d = 1, (a = function() {
                var t, s;
                if ((s = $(n(r)).next()[0]) && (t = i(s, f, u))) return $(t).parents(".js-details-container").addClass("open"), e(t).then(function() {
                    var e, t, i, r;
                    if (t = n(c.slice(1))) {
                        if (i = o(t), r = i.top, e = i.bottom, 0 > r || 0 > e) return t.scrollIntoView()
                    } else if (d > h) return h++, a()
                })
            })()) : void 0
        }), $(document).on("click", ".js-expand", function() {
            return e(this), !1
        }), e = function(e) {
            var n;
            return n = e.getAttribute("data-url"), n += "&anchor=" + encodeURIComponent(e.hash.slice(1)), n = n.replace(/[?&]/, "?"), new Promise(function(i, r) {
                return t(n).then(function(t) {
                    var n, r;
                    return n = $(e).closest(".js-expandable-line"), r = n.next(".file-diff-line"), r.preservingScrollPosition(function() {
                        return n.replaceWith(t)
                    }), i()
                }, r)
            })
        }, s = function(e) {
            var t, n;
            return t = e.match(/\#(diff\-[a-f0-9]+)([L|R])(\d+)$/i), null != t && 4 === t.length ? t : (n = e.match(/\#(discussion\-diff\-[0-9]+)([L|R])(\d+)$/i), null != n && 4 === n.length ? n : null)
        }, i = function(e, t, n) {
            var i, r, s, o, a, c, u, l;
            for (n = parseInt(n, 10), c = $(e).find(".js-expand"), o = 0, a = c.length; a > o; o++)
                if (r = c[o], i = "R" === t ? "data-right-range" : "data-left-range", u = r.getAttribute(i).split("-"), l = u[0], s = u[1], parseInt(l, 10) <= n && n <= parseInt(s, 10)) return r;
            return null
        }
    }.call(this),
    function() {
        var e, t, n, i, r, s, o, a, c;
        $(document).on("click", ".js-add-single-line-comment", function() {
            var e, t, n, r, s, c;
            i($(this).closest(".file")[0]), s = this.getAttribute("data-path"), e = this.getAttribute("data-anchor"), c = this.getAttribute("data-position"), t = this.getAttribute("data-line"), r = a($(this).closest("tr")[0], {
                path: s,
                anchor: e,
                position: c,
                line: t
            }), n = $(r).find(".js-line-comments")[0], n.classList.contains("is-resolved") ? n.classList.toggle("is-collapsed") : o(n)
        }), $(document).on("click", ".js-add-split-line-comment", function() {
            var e, t, n, s, a, u, l, d;
            i($(this).closest(".file")[0]), d = this.getAttribute("data-type"), u = this.getAttribute("data-path"), e = this.getAttribute("data-anchor"), l = this.getAttribute("data-position"), n = this.getAttribute("data-line"), t = function() {
                switch (d) {
                    case "addition":
                        return "js-addition";
                    case "deletion":
                        return "js-deletion"
                }
            }(), a = c($(this).closest("tr")[0]), s = r(a, t, {
                type: d,
                anchor: e,
                path: u,
                position: l,
                line: n
            }), s.classList.contains("is-resolved") ? s.classList.toggle("is-collapsed") : o(s)
        }), $(document).on("click", ".js-toggle-inline-comment-form", function() {
            return o($(this).closest(".js-line-comments")[0]), !1
        }), $(document).on("quote:selection", ".js-line-comments", function() {
            o(this)
        }), $(document).onFocusedKeydown(".js-inline-comment-form .js-comment-field", function() {
            return function(t) {
                return $(this).hasClass("js-navigation-enable") ? void 0 : "esc" === t.hotkey && 0 === this.value.length ? (e($(this).closest(".js-inline-comment-form")[0]), !1) : void 0
            }
        }), $(document).on("click", ".js-hide-inline-comment-form", function() {
            return e($(this).closest(".js-inline-comment-form")[0]), !1
        }), $(document).on("ajaxSuccess", ".js-inline-comment-form", function(t, n, i, r) {
            var s;
            this === t.target && (s = $(this).closest(".js-line-comments"), s.find(".js-comments-holder").append(r.inline_comment), e(this))
        }), $(document).on("session:resume", function(e) {
            var t;
            (t = e.targetId.match(/^new_inline_comment_diff_([\w-]+)_(\d+)$/)) && $(".js-add-line-comment[data-anchor=" + t[1] + "][data-position=" + t[2] + "]").click()
        }), o = function(e) {
            return $(e).find(".js-inline-comment-form-container").addClass("open"), $(e).find(".js-write-tab").click(), $(e).find(".js-comment-field").focus()
        }, e = function(e) {
            return e.reset(), $(e).closest(".js-inline-comment-form-container").removeClass("open"), t()
        }, i = function(e) {
            return $(e).find(".js-toggle-file-notes").prop("checked", !0).trigger("change")
        }, t = function() {
            var e, t, n, i, r, s, o;
            for (o = $(".file .js-inline-comments-container"), r = 0, s = o.length; s > r; r++) t = o[r], e = $(t).find(".js-comments-holder > *"), i = e.length > 0, n = $(t).find(".js-inline-comment-form-container").hasClass("open"), i || n || $(t).remove()
        }, n = function(e) {
            var t, n;
            return n = document.querySelector(e), t = n.firstElementChild.cloneNode(!0), t.querySelector("textarea").value = "", t
        }, $.observe(".js-comment", {
            remove: t
        }), a = function(e, t) {
            var i, r;
            return null == t && (t = {}), (r = $(e).next(".js-inline-comments-container")[0]) ? r : (r = n("#js-inline-comments-single-container-template"), (i = r.querySelector(".js-inline-comment-form")) && s(i, t), e.after(r), r)
        }, r = function(e, t, i) {
            var r, o, a;
            return null == i && (i = {}), (a = $(e).find(".js-line-comments." + t)[0]) ? a : (a = n("#js-inline-comments-split-form-container-template"), a.classList.add(t), (o = a.querySelector(".js-inline-comment-form")) && s(o, i), r = $(e).find("." + t), r.last().after(a), r.remove(), a)
        }, c = function(e) {
            var t;
            return (t = $(e).next(".js-inline-comments-container")[0]) ? t : (t = $("#js-inline-comments-split-container-template").clone().children()[0], $(e).after(t), t)
        }, s = function(e, t) {
            var n, i, r, s, o;
            for (s = e.elements, i = 0, r = s.length; r > i; i++) n = s[i], n.name in t && (n.value = t[n.name]);
            o = e.querySelector(".js-comment-field"), o.id = o.id.replace(/^r\d+ /, "").replace("${anchor}", t.anchor).replace("${position}", t.position)
        }
    }.call(this),
    function() {
        var e, t;
        e = function(e, t, n) {
            return $.observe(e, function(e) {
                var i, r, s, o, a, c;
                return c = null, r = s = function() {
                    c && n(c, !1), c = null
                }, o = function(e) {
                    c && n(c, !1), c = $(e.target).closest(t)[0], c && n(c, !0)
                }, i = function() {
                    return e.addEventListener("mouseenter", r), e.addEventListener("mouseleave", s), e.addEventListener("mouseover", o)
                }, a = function() {
                    return e.removeEventListener("mouseenter", r), e.removeEventListener("mouseleave", s), e.removeEventListener("mouseover", o)
                }, {
                    add: i,
                    remove: a
                }
            })
        }, t = function(e) {
            return Math.floor(e / 2)
        }, e(".diff-table", "td.blob-code, td.blob-num", function(e, n) {
            var i, r, s, o, a, c, u, l, d, h;
            if (h = e.parentNode, i = h.children, 4 === i.length)
                for (o = a = 0, u = i.length; u > a; o = ++a) s = i[o], s === e && (r = t(o));
            for (d = [], o = c = 0, l = i.length; l > c; o = ++c) s = i[o], (null == r || t(o) === r) && d.push(s.classList.toggle("is-hovered", n));
            return d
        })
    }.call(this),
    function() {
        var e, t, n;
        $(document).on("click", ".js-linkable-line-number", function() {
            return window.location.hash = this.id, !1
        }), e = null, n = function(e) {
            return Math.floor(e / 2)
        }, t = function() {
            var t, i, r, s, o, a, c, u, l, d, h;
            if (e) {
                for (a = 0, u = e.length; u > a; a++) r = e[a], r.classList.remove("selected-line");
                e = null
            }
            if (o = window.location.hash.substring(1), o && (h = document.getElementById(o)), h && h.classList.contains("js-linkable-line-number")) {
                if (d = h.parentNode, t = d.children, 4 === t.length)
                    for (s = c = 0, l = t.length; l > c; s = ++c) r = t[s], r === h && (i = n(s));
                e = function() {
                    var e, o, a;
                    for (a = [], s = e = 0, o = t.length; o > e; s = ++e) r = t[s], (null == i || n(s) === i) && (r.classList.toggle("selected-line"), a.push(r));
                    return a
                }()
            }
        }, $.hashChange(t), $.observe(".blob-expanded", t)
    }.call(this), $(document).on("click", ".js-rich-diff.collapsed .js-expandable", function(e) {
        e.preventDefault(), $(e.target).closest(".js-rich-diff").removeClass("collapsed")
    }), $(document).on("click", ".js-show-rich-diff", function(e) {
        e.preventDefault(), $(this).closest(".js-warn-no-visible-changes").addClass("hidden").hide().siblings(".js-no-rich-changes").removeClass("hidden").show()
    }),
    function() {
        var e;
        e = function() {
            var e;
            return e = "split" === $("meta[name=diff-view]").prop("content") && $(".file-diff-split").is(":visible"), document.body.classList.toggle("split-diff", e)
        }, $.observe("meta[name=diff-view]", {
            add: e,
            remove: e
        }), $.observe(".file-diff-split", {
            add: e,
            remove: e
        }), $.observe(".js-compare-tabs .tabnav-tab.selected", {
            add: e,
            remove: e
        })
    }.call(this),
    function() {
        $(document).on("change", ".js-toggle-file-notes", function() {
            return $(this).closest(".file").toggleClass("show-inline-notes", this.checked)
        }), $(document).on("click", ".js-toggle-all-file-notes", function() {
            var e, t;
            return e = $(".js-toggle-file-notes"), t = 0 === e.filter(":checked").length, e.prop("checked", t).trigger("change"), !1
        }), $.observe(".js-inline-comments-container", function() {
            var e, t, n;
            return (t = $(this).closest(".file")[0]) ? (e = n = function() {
                var e;
                e = null != t.querySelector(".js-inline-comments-container"), t.classList.toggle("has-inline-notes", e)
            }, {
                add: e,
                remove: n
            }) : void 0
        })
    }.call(this),
    function() {
        function e(e) {
            var t, n, i;
            i = e.parentElement, n = i.querySelectorAll("td.js-line-comments").length, t = i.querySelectorAll("td.js-line-comments.is-collapsed").length, i.classList.toggle("is-collapsed", t > 0 && n === t)
        }
        $.observe("td.js-line-comments.is-collapsed", {
            add: function(t) {
                e(t)
            },
            remove: function(t) {
                e(t)
            }
        })
    }.call(this),
    function() {
        $(document).on("focusin", ".js-url-field", function() {
            var e;
            return e = this, setTimeout(function() {
                return $(e).select()
            }, 0)
        })
    }.call(this),
    function() {
        document.querySelector(".js-account-membership-form") && ($(document).one("change.early-access-tracking", ".js-account-membership-form", function() {
            return window.ga("send", "event", "Large File Storage", "attempt", "location: early access form")
        }), $(document).on("submit.early-access-tracking", ".js-account-membership-form", function(e) {
            return window.ga("send", "event", "Large File Storage", "submit", "location: early access form")
        }))
    }.call(this),
    function() {
        var e, t;
        t = require("github/fetch").fetchText, e = function() {
            return $(".js-repo-toggle-team:checked").visible()
        }, $(document).onFocusedInput(".js-repository-name", function() {
            var e, t, n;
            return n = /[^0-9A-Za-z_\-.]/g, t = $(".js-form-note"), e = $(".js-rename-repository-button"),
                function() {
                    t.html("Will be renamed as <strong>" + this.value.replace(n, "-") + "</strong>"), n.test(this.value) ? t.show() : t.hide(), this.value && this.value !== $(this).attr("data-original-name") ? e.prop("disabled", !1) : e.prop("disabled", !0)
                }
        }), $(document).on("click", ".js-repo-team-suggestions-view-all", function() {
            return t(this.href).then(function(t) {
                return function(n) {
                    var i, r;
                    return r = e().map(function() {
                        return this.value
                    }), i = $(t).closest("ul"), i.html(n), r.each(function() {
                        return i.find(".js-repo-toggle-team[value=" + this + "]").prop("checked", !0)
                    })
                }
            }(this)), !1
        })
    }.call(this),
    function() {
        var e, t, n, i, r, s;
        s = function(e, t) {
            var n;
            return n = t.querySelector(".js-repo-access-error"), n.textContent = e, n.classList.remove("hidden")
        }, i = function() {
            var e, t, n, i, r;
            for (i = document.querySelectorAll(".js-repo-access-error"), r = [], t = 0, n = i.length; n > t; t++) e = i[t], e.textContent = "", r.push(e.classList.add("hidden"));
            return r
        }, e = function(e) {
            return e.classList.toggle("is-empty", !e.querySelector(".js-repo-access-entry"))
        }, r = function() {
            var e;
            (e = document.getElementById("collaborators")) && (e.querySelector(".js-add-new-collab").disabled = !0, $(e.querySelector(".js-add-repo-access-field")).data("autocompleted"))
        }, $.observe(".js-add-new-collab", r), t = function(e) {
            var t, n, i, r, s, o, a;
            if (o = document.querySelector(".js-repo-access-team-select")) {
                for (a = 0, s = o.querySelectorAll(".js-repo-access-team-select-option"), t = 0, r = s.length; r > t; t++) n = s[t], i = n.classList, e === n.getAttribute("data-team-id") && (i.add("has-access"), i.remove("selected")), i.contains("has-access") || a++;
                if (0 === a) return o.closest(".js-repo-access-group").classList.add("no-form")
            }
        }, n = function(e) {
            var t, n;
            return (n = document.querySelector(".js-repo-access-team-select")) ? (null != (t = n.querySelector("[data-team-id='" + e + "']")) && t.classList.remove("has-access"), n.closest(".js-repo-access-group").classList.remove("no-form")) : void 0
        }, $(document).on("autocomplete:autocompleted:changed", ".js-add-repo-access-field", function() {
            return $(this).data("autocompleted") ? this.form.querySelector(".js-add-new-collab").disabled = !1 : r()
        }), $(document).on("selectmenu:selected", ".js-repo-access-team-select", function() {
            var e, t;
            return e = this.querySelector(".js-repo-access-team-select-option.selected").getAttribute("data-team-id"), t = this.closest(".js-repo-access-group").querySelector(".js-add-repo-access-field"), t.value = e, $(t.form).submit()
        }), $(document).on("ajaxSend", ".js-add-repo-access-form", function() {
            i()
        }), $(document).on("ajaxSuccess", ".js-add-repo-access-form", function(n, i, o, a) {
            var c, u, l, d;
            return u = this.closest(".js-repo-access-group"), c = this.querySelector(".js-add-repo-access-field"), l = u.querySelector(".js-repo-access-list"), d = c.value, c.value = "", a.error ? s(a.error, u) : (r(), l.insertAdjacentHTML("beforeend", a.html), e(u), "teams" === u.id ? t(d) : void 0)
        }), $(document).on("ajaxSuccess", ".js-remove-repo-access-form", function() {
            var t, r;
            return i(), t = this.closest(".js-repo-access-entry"), r = this.closest(".js-repo-access-group"), "teams" === r.id && n(t.getAttribute("data-team-id")), t.remove(), e(r)
        }), $(document).on("ajaxError", ".js-remove-repo-access-form", function() {
            return s(this.getAttribute("data-error-message"), this.closest(".js-repo-access-group")), !1
        })
    }.call(this),
    function() {
        var e, t;
        e = require("github/fetch").fetchText, $(document).on("change", ".js-default-branch", function() {
            var e, t;
            return t = document.querySelector(".js-default-branch-confirmation"), e = document.querySelector(".js-change-default-branch-button"), e.disabled = this.value === t.getAttribute("data-original-value"), t.value = this.value
        }), $(document).on("change", ".js-repo-features-form input[type=checkbox]", function() {
            var e;
            return e = this.closest(".js-repo-option").querySelector(".js-status-indicator"), e.classList.remove("status-indicator-success", "status-indicator-failed"), e.classList.add("status-indicator-loading")
        }), $(document).on("ajaxSuccess", ".js-repo-features-form", function(e, t, n, i) {
            var r, s, o, a;
            for (a = this.querySelectorAll(".status-indicator-loading"), s = 0, o = a.length; o > s; s++) r = a[s], r.classList.remove("status-indicator-loading"), r.classList.add("status-indicator-success");
            return /^\s*</.test(i) ? $(document.querySelector(".js-repo-nav")).replaceWith(i) : void 0
        }), $(document).on("ajaxError", ".js-repo-features-form", function(e, t, n, i) {
            var r, s, o, a, c, u;
            for (u = this.querySelectorAll(".status-indicator-loading"), o = 0, a = u.length; a > o; o++) s = u[o], s.classList.remove("status-indicator-loading"), s.classList.add("status-indicator-failed"), r = s.closest(".js-repo-option").querySelector("input[type=checkbox]"), r.checked = !r.checked;
            422 === t.status && (c = document.querySelector("#ajax-error-message"), c.textContent = t.responseText)
        }), $(document).on("change", ".js-protect-branch", function() {
            var e, t, n, i, r, s, o, a, c, u;
            for (a = this.closest(".js-protected-branch-settings"), e = this.checked, c = a.querySelectorAll(".js-protected-branch-options"), n = 0, s = c.length; s > n; n++) t = c[n], t.classList.toggle("active", e);
            for (u = a.querySelectorAll(".js-protected-branch-option"), r = 0, o = u.length; o > r; r++) i = u[r], e ? i.removeAttribute("disabled") : i.setAttribute("disabled", "disabled")
        }), $(document).on("change", ".js-required-status-toggle", function() {
            var e;
            e = this.closest(".js-protected-branch-settings").querySelector(".js-required-statuses"), e.classList.toggle("hidden", !this.checked)
        }), $(document).on("change", ".js-required-status-checkbox", function() {
            var e;
            e = this.closest(".js-protected-branches-item"), e.querySelector(".js-required-status-badge").classList.toggle("hidden", !this.checked)
        }), $(document).on("change", ".js-authorized-branch-pushers-toggle", function() {
            var e;
            e = this.closest(".js-protected-branch-settings").querySelector(".js-authorized-pushers"), e.classList.toggle("hidden", !this.checked), e.querySelector(".js-autocomplete-field").focus()
        }), $(document).on("change", ".js-protected-branch-include-admin-toggle", function() {
            var e, t, n, i;
            for (i = this.closest(".js-protected-branch-settings").querySelectorAll(".js-protected-branch-admin-permission"), t = 0, n = i.length; n > t; t++) e = i[t], e.classList.toggle("hidden"), e.classList.toggle("active", !e.classList.contains("hidden"))
        }), t = function(e) {
            var t, n, i;
            return t = e.querySelector(".js-authorized-pushers"), i = parseInt(t.getAttribute("data-limit")), n = t.querySelectorAll(".js-authorized-user-or-team").length, t.classList.toggle("at-limit", n >= i)
        }, $(document).on("autocomplete:result", ".js-add-protected-branch-user-or-team", function(n, i) {
            var r, s, o;
            s = this.closest(".js-protected-branch-options"), r = this.closest(".js-autocomplete-container"), o = r.getAttribute("data-url") + "&" + $.param({
                item: i
            }), e(o, {
                method: "GET",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
                }
            }).then(function(e) {
                return r.querySelector(".js-autocomplete-field").value = "", s.querySelector(".js-authorized-users-and-teams").insertAdjacentHTML("beforeend", e), t(s)
            })
        }), $(document).on("click", ".js-remove-authorized-user-or-team", function() {
            var e;
            return e = this.closest(".js-protected-branch-options"), this.closest(".js-authorized-user-or-team").remove(), t(e)
        })
    }.call(this),
    function() {
        var e, t, n, i, r, s, o, a, c;
        a = ["is-render-pending", "is-render-ready", "is-render-loading", "is-render-loaded"].reduce(function(e, t) {
            return e + " " + t
        }), o = function(e) {
            var t;
            return t = e.data("timing"), null != t ? (t.load = t.hello = null, t.helloTimer && (clearTimeout(t.helloTimer), t.helloTimer = null), t.loadTimer ? (clearTimeout(t.loadTimer), t.loadTimer = null) : void 0) : void 0
        }, i = function(e) {
            var t, n, i;
            if (!e.data("timing")) return t = 10, n = 45, i = {
                load: null,
                hello: null,
                helloTimer: null,
                loadTimer: null
            }, i.load = Date.now(), i.helloTimer = setTimeout(c(e, function() {
                return !i.hello
            }), 1e3 * t), i.loadTimer = setTimeout(c(e), 1e3 * n), e.data("timing", i)
        }, s = function(e) {
            return e.addClass("is-render-requested")
        }, r = function(e) {
            return e.removeClass(a), e.addClass("is-render-failed"), o(e)
        }, c = function(e, t) {
            return null == t && (t = function() {
                    return !0
                }),
                function() {
                    var n, i;
                    return n = function() {
                        try {
                            return e.is($.visible)
                        } catch (t) {
                            return e.visible().length > 0
                        }
                    }(), !n || e.hasClass("is-render-ready") || e.hasClass("is-render-failed") || e.hasClass("is-render-failed-fatally") || !t() ? void 0 : (i = e.data("timing")) ? (console.error("Render timeout: " + JSON.stringify(i) + " Now: " + Date.now()), r(e)) : console.error("No timing data on $:", e)
                }
        }, e = function(e) {
            var t, n;
            t = $(e || this), (null != (n = t.data("timing")) ? n.load : 0) || (o(t), i(t), t.addClass("is-render-automatic"), s(t))
        }, null != $.observe ? $.observe(".js-render-target", e) : $(function() {
            return $.each($(".js-render-target"), function(t, n) {
                return e(n)
            })
        }), t = function(e) {
            var t;
            return t = ".js-render-target", e ? $(t + "[data-identity='" + e + "']") : $(t)
        }, $(window).on("message", function(e) {
            var i, r, s, o, a, c, u, l, d, h;
            return l = null != (u = e.originalEvent) ? u : e, s = l.data, a = l.origin, s && a && (d = function() {
                var t;
                try {
                    return JSON.parse(s)
                } catch (t) {
                    return e = t, s
                }
            }(), h = d.type, o = d.identity, r = d.body, c = d.payload, h && r && 1 === (i = t(o)).length && a === i.attr("data-host") && "render" === h) ? n(i, h, o, r, c) : void 0
        }), n = function(e, t, n, i, s) {
            var o, c, u, l, d, h;
            switch (i) {
                case "hello":
                    if (d = e.data("timing") || {
                            untimed: !0
                        }, d.hello = Date.now(), o = {
                            type: "render:cmd",
                            body: {
                                cmd: "ack",
                                ack: !0
                            }
                        }, u = {
                            type: "render:cmd",
                            body: {
                                cmd: "branding",
                                branding: !1
                            }
                        }, h = null != (l = e.find("iframe").get(0)) ? l.contentWindow : void 0, "function" == typeof h.postMessage && h.postMessage(JSON.stringify(o), "*"), "function" == typeof h.postMessage && h.postMessage(JSON.stringify(u), "*"), e.hasClass("is-local")) return c = e.parents(".js-code-editor").data("code-editor"), u = {
                        type: "render:data",
                        body: c.code()
                    }, "function" == typeof h.postMessage ? h.postMessage(JSON.stringify(u), "*") : void 0;
                    break;
                case "error":
                    return r(e);
                case "error:fatal":
                    return r(e), e.addClass("is-render-failed-fatal");
                case "error:invalid":
                    return r(e, "invalid"), e.addClass("is-render-failed-invalid");
                case "loading":
                    return e.removeClass(a), e.addClass("is-render-loading");
                case "loaded":
                    return e.removeClass(a), e.addClass("is-render-loaded");
                case "ready":
                    if (e.removeClass(a), e.addClass("is-render-ready"), null != (null != s ? s.height : void 0)) return e.height(s.height);
                    break;
                case "resize":
                    return null != (null != s ? s.height : void 0) && e.hasClass("is-render-ready") ? e.height(s.height) : console.error("Resize event sent without height or before ready");
                default:
                    return console.error("Unknown message [" + t + "]=>'" + i + "'")
            }
        }
    }.call(this),
    function() {
        $(function() {
            var e, t;
            return e = $(".js-newsletter-frequency-choice"), e.length ? (t = function() {
                var t;
                return e.find(".selected").removeClass("selected"), t = e.find("input[type=radio]:enabled:checked"), t.closest(".choice").addClass("selected")
            }, e.on("change", "input[type=radio]", function() {
                return t()
            }), t()) : void 0
        }), $(document).on("ajaxSuccess", ".js-subscription-toggle", function(e, t, n) {
            var i;
            return i = $(this).find(".selected .notice"), i.addClass("visible"), setTimeout(function() {
                return i.removeClass("visible")
            }, 2e3)
        }), $(document).on("ajaxSuccess", ".js-explore-newsletter-subscription-container", function(e, t, n) {
            return $(this).replaceWith(t.responseText)
        })
    }.call(this), $(document).on("selectmenu:selected", ".js-set-user-protocol-preference", function() {
        $(this).submit()
    }), $(document).on("navigation:open", ".js-create-branch", function() {
        return $(this).submit(), !1
    }), $(document).on("click", ".js-toggle-lang-stats", function(e) {
        var t = document.querySelector(".js-stats-switcher-viewport"),
            n = 0 !== t.scrollTop ? "is-revealing-overview" : "is-revealing-lang-stats";
        t.classList.toggle(n), e.preventDefault()
    }), $(document).on("click", ".js-toggle-lang-stats-new", function(e) {
        var t = document.querySelector(".js-file-navigation-new");
        t.classList.toggle("is-revealing-stats"), e.preventDefault()
    }),
    function() {
        var e, t, n = function(e, t) {
            return function() {
                return e.apply(t, arguments)
            }
        };
        e = function() {
            function e(e) {
                var t;
                t = $(e), this.name = t.attr("data-theme-name"), this.slug = t.attr("data-theme-slug"), this.baseHref = t.attr("href")
            }
            return e.prototype.wrappedKey = function(e, t) {
                return null == t && (t = null), t ? t + "[" + e + "]" : e
            }, e.prototype.params = function(e) {
                var t;
                return null == e && (e = null), t = {}, t[this.wrappedKey("theme_slug", e)] = this.slug, t
            }, e.prototype.previewSrc = function() {
                return [this.baseHref, $.param(this.params())].join("&")
            }, e
        }(), t = function() {
            function t() {
                this.updateScrollLinks = n(this.updateScrollLinks, this), this.scrollThemeLinksContainer = n(this.scrollThemeLinksContainer, this), this.onPublishClick = n(this.onPublishClick, this), this.onHideClick = n(this.onHideClick, this), this.onThemeLinkClick = n(this.onThemeLinkClick, this), this.onThemeNavNextClick = n(this.onThemeNavNextClick, this), this.onThemeNavPrevClick = n(this.onThemeNavPrevClick, this), this.onScrollForwardsClick = n(this.onScrollForwardsClick, this), this.onScrollBackwardsClick = n(this.onScrollBackwardsClick, this), this.onPagePreviewLoad = n(this.onPagePreviewLoad, this), this.$pagePreview = $("#page-preview"), this.$contextLoader = $(".theme-picker-spinner"), this.$fullPicker = $(".theme-picker-thumbs"), this.$miniPicker = $(".theme-picker-controls"), this.$scrollBackwardsLinks = $(".theme-toggle-full-left"), this.$scrollForwardsLinks = $(".theme-toggle-full-right"), this.$prevLinks = $(".theme-picker-prev"), this.$nextLinks = $(".theme-picker-next"), this.themeLinksContainer = this.$fullPicker.find(".js-theme-selector"), this.themeLinks = this.themeLinksContainer.find(".theme-selector-thumbnail"), this.themes = [], this.themeLinks.each(function(t) {
                    return function(n, i) {
                        return t.themes.push(new e(i))
                    }
                }(this)), this.selectedTheme = this.themes[0], this.$pagePreview.load(this.onPagePreviewLoad), this.$scrollBackwardsLinks.click(this.onScrollBackwardsClick), this.$scrollForwardsLinks.click(this.onScrollForwardsClick), this.$prevLinks.click(this.onThemeNavPrevClick), this.$nextLinks.click(this.onThemeNavNextClick), this.themeLinks.click(this.onThemeLinkClick), $(".theme-picker-view-toggle").click(this.onHideClick), $("#page-edit").click(this.onEditClick), $("#page-publish").click(this.onPublishClick), this.theme(this.selectedTheme), this.updateScrollLinks()
            }
            return t.prototype.onPagePreviewLoad = function(e) {
                var t, n;
                return this.$contextLoader.removeClass("visible"), t = this.$pagePreview[0].contentDocument ? this.$pagePreview[0].contentDocument : this.$pagePreview[0].contentWindow.document, n = this.getDocHeight(t) + "px", this.$pagePreview.css("visibility", "hidden"), this.$pagePreview.height("10px"), this.$pagePreview.height(n), this.$pagePreview.css("visibility", "visible")
            }, t.prototype.onScrollBackwardsClick = function(e) {
                return this.scrollThemeLinksContainer(-1)
            }, t.prototype.onScrollForwardsClick = function(e) {
                return this.scrollThemeLinksContainer(1)
            }, t.prototype.onThemeNavPrevClick = function(e) {
                return this.theme(this.prevTheme())
            }, t.prototype.onThemeNavNextClick = function(e) {
                return this.theme(this.nextTheme())
            }, t.prototype.onThemeLinkClick = function(e) {
                return this.theme(this.themeForLink(e.currentTarget)), !1
            }, t.prototype.onHideClick = function(e) {
                var t;
                return this.$fullPicker.toggle(), this.$miniPicker.toggle(), this.scrollToTheme(this.theme(), !1), t = $(e.currentTarget), t.toggleClass("open")
            }, t.prototype.onEditClick = function(e) {
                return $("#page-edit-form").submit(), !1
            }, t.prototype.onPublishClick = function(e) {
                var t;
                return t = $("#page-publish-form"), t.find('input[name="page[theme_slug]"]').val(this.theme().slug), $("#page-publish-form").submit(), !1
            }, t.prototype.scrollThemeLinksContainer = function(e) {
                var t, n, i;
                return n = this.themeLinksContainer.scrollLeft(), i = this.themeLinksContainer.outerWidth(!0), t = n + i * e, this.themeLinksContainer.animate({
                    scrollLeft: t
                }, 400, function(e) {
                    return function() {
                        return e.updateScrollLinks()
                    }
                }(this)), !1
            }, t.prototype.updateScrollLinks = function() {
                var e, t, n;
                return e = this.themeLinksContainer.scrollLeft(), 0 >= e ? (this.$scrollBackwardsLinks.addClass("disabled"), this.$scrollForwardsLinks.removeClass("disabled")) : (this.$scrollBackwardsLinks.removeClass("disabled"), n = this.themeLinksContainer[0].scrollWidth, t = n - this.themeLinksContainer.outerWidth(!0), e >= t ? this.$scrollForwardsLinks.addClass("disabled") : this.$scrollForwardsLinks.removeClass("disabled"))
            }, t.prototype.selectedThemeIndex = function() {
                return this.themes.indexOf(this.selectedTheme)
            }, t.prototype.prevTheme = function() {
                var e;
                return e = (this.selectedThemeIndex() - 1) % this.themes.length, 0 > e && (e += this.themes.length), this.themes[e]
            }, t.prototype.nextTheme = function() {
                return this.themes[(this.selectedThemeIndex() + 1) % this.themes.length]
            }, t.prototype.themeForLink = function(e) {
                return this.themes[this.themeLinks.index($(e))]
            }, t.prototype.linkForTheme = function(e) {
                return $(this.themeLinks[this.themes.indexOf(e)])
            }, t.prototype.scrollToTheme = function(e, t) {
                var n, i, r, s, o, a;
                return null == t && (t = !0), n = this.linkForTheme(e), a = this.themes.indexOf(e), s = n.outerWidth(!0), r = a * s, i = this.themeLinksContainer.scrollLeft(), o = i + this.themeLinksContainer.outerWidth(!0), i > r || r + s > o ? t ? this.themeLinksContainer.animate({
                    scrollLeft: r
                }, 500) : this.themeLinksContainer.scrollLeft(r) : void 0
            }, t.prototype.theme = function(e) {
                return null == e && (e = null), e ? (this.selectedTheme = e, this.showPreviewFor(e), this.themeLinks.removeClass("selected"), this.linkForTheme(e).addClass("selected"), this.scrollToTheme(e), this.$miniPicker.find(".js-theme-name").text(e.name), !1) : this.selectedTheme
            }, t.prototype.showPreviewFor = function(e) {
                var t;
                return this.$contextLoader.addClass("visible"), t = this.$fullPicker.find("form"), t.find('input[name="theme_slug"]').val(e.slug), t.submit()
            }, t.prototype.getDocHeight = function(e) {
                var t, n;
                return this.$pagePreview.height("auto"), t = e.body, n = e.documentElement, Math.max(t.scrollHeight, t.offsetHeight, n.clientHeight, n.scrollHeight, n.offsetHeight)
            }, t
        }(), $(function() {
            return document.getElementById("theme-picker-wrap") ? new t : void 0
        })
    }.call(this), $(document).on("click", ".email-hidden-toggle > a", function() {
        return $(this).parent().siblings(".email-hidden-reply").toggle(), !1
    }),
    function() {
        function e(e) {
            document.querySelector(".js-gist-dropzone").classList.remove("hidden"), e.stopPropagation(), e.preventDefault()
        }

        function t(e) {
            var t;
            (null != (t = e.target.classList) ? t.contains("js-gist-dropzone") : void 0) && e.target.classList.add("hidden")
        }

        function n(e) {
            var t, n, r, s, o, a;
            for (a = e.dataTransfer.files, s = 0, o = a.length; o > s; s++) r = a[s], window.ga("send", "event", "Interaction", "File Drop", r.type, {
                useBeacon: !0
            }), t = function(t) {
                var n;
                return r = t.file, n = t.data, e.target.dispatchEvent(new CustomEvent("gist:filedrop", {
                    bubbles: !0,
                    cancelable: !0,
                    detail: {
                        file: r,
                        text: n
                    }
                }))
            }, n = function() {}, i(r).then(t, n);
            document.querySelector(".js-gist-dropzone").classList.add("hidden"), e.stopPropagation(), e.preventDefault()
        }

        function i(e) {
            return new Promise(function(t, n) {
                var i;
                return i = new FileReader, i.onload = function() {
                    var r;
                    return r = i.result, r && !/\0/.test(r) ? t({
                        file: e,
                        data: r
                    }) : n(new Error("invalid file"))
                }, i.readAsText(e)
            })
        }
        $.observe(".js-gist-dropzone", {
            add: function() {
                document.body.addEventListener("dragenter", e), document.body.addEventListener("dragleave", t), document.body.addEventListener("dragover", e), document.body.addEventListener("drop", n)
            },
            remove: function() {
                document.body.removeEventListener("dragenter", e), document.body.removeEventListener("dragleave", t), document.body.removeEventListener("dragover", e), document.body.removeEventListener("drop", n)
            }
        })
    }.call(this),
    function() {
        var e, t, n, i, r, s, o, a;
        n = require("github/fetch").fetchJSON, t = function(e) {
            var t, n, i, r, s, o, a, c, u, l, d;
            for (i = e.querySelector(".js-gist-files"), d = document.getElementById("js-gist-file-template"), t = document.createElement("div"), t.innerHTML = d.textContent, u = t.querySelectorAll("[id]"), r = 0, o = u.length; o > r; r++) n = u[r], n.removeAttribute("id");
            for (c = t.querySelector(".js-code-textarea"), null != c && c.setAttribute("id", "blob_contents_" + Date.now()), l = t.children, s = 0, a = l.length; a > s; s++) n = l[s], i.append(n);
            return i.lastElementChild
        }, a = function(e) {
            var n, i, r, s, o, a;
            for (o = e.querySelectorAll(".js-gist-file"), r = 0, s = o.length; s > r; r++)
                if (n = o[r], i = n.querySelector(".js-gist-filename"), a = n.querySelector(".js-blob-contents"), !i.value && !a.value) return n;
            return t(e)
        }, o = function(e) {
            var t;
            return t = e.closest(".js-code-editor"), new Promise(function(e) {
                var n;
                return (n = $(t).data("code-editor")) ? e(n) : $(t).one("codeEditor:ready", function() {
                    return e($(this).data("code-editor"))
                })
            })
        }, e = function(e) {
            var t, n, i, r;
            for (i = e.querySelectorAll(".js-code-textarea"), t = 0, n = i.length; n > t; t++)
                if (r = i[t], r.value.trim().length > 0) return !0;
            return !1
        }, r = function() {
            var t, n, i, r, s;
            for (r = document.querySelectorAll(".js-gist-create"), s = [], n = 0, i = r.length; i > n; n++) t = r[n], s.push(t.disabled = !e(t.form));
            return s
        }, $(document).on("change", ".js-code-textarea", function() {
            return r()
        }), i = function() {
            var e, t;
            return t = this, (e = t.getAttribute("data-language-detection-url")) ? n(e + "?filename=" + encodeURIComponent(t.value)).then(function(e) {
                return o(t).then(function(t) {
                    return t.setMode(e.language)
                })
            }) : void 0
        }, $(document).onFocusedInput(".js-gist-filename", function(e) {
            var t, n;
            return n = this, t = n.closest(".js-code-editor"), o(t).then(function(t) {
                return null == t.ace ? !1 : $(n).on("throttled:input." + e, i)
            }), !1
        }), $(document).on("click", ".js-add-gist-file", function() {
            var e;
            return e = this.closest(".js-blob-form"), t(e).scrollIntoView(), !1
        }), $(document).on("gist:filedrop", ".js-blob-form", function(e) {
            var t, n, r, s, c;
            return s = e.originalEvent.detail, t = s.file, c = s.text, n = a(this), r = n.querySelector(".js-gist-filename"), r.value = t.name, i.call(r), o(r).then(function(e) {
                return e.setCode(c)
            }), n.scrollIntoView()
        }), $(document).on("click", ".js-remove-gist-file", function() {
            var e, t, n, i, r;
            for (e = this.closest(".js-gist-file"), r = e.querySelectorAll(".js-gist-deleted input"), t = 0, i = r.length; i > t; t++) n = r[t], n.disabled = !1;
            return e.querySelector(".js-code-editor").remove(), !1
        }), $(function() {
            return r()
        }), s = function(e) {
            var t, n, i, r, s;
            for (n = e.querySelectorAll(".js-remove-gist-file"), s = [], i = 0, r = n.length; r > i; i++) t = n[i], s.push(t.classList.toggle("hidden", n.length < 2));
            return s
        }, $.observe(".js-remove-gist-file", function() {
            var e;
            return e = this.closest(".js-gist-files"), {
                add: function() {
                    return s(e)
                },
                remove: function() {
                    return s(e)
                }
            }
        })
    }.call(this), $(document).on("ajaxComplete", ".js-gist-file-update-container .js-comment-update", function(e, t) {
        var n;
        200 === t.status && (n = JSON.parse(t.responseText), this.action = n.url)
    }), $(document).on("click", ".js-skip-to-content", function() {
        return $("#start-of-content").next().attr("tabindex", "-1").focus(), !1
    });
var _this = this;
$(document).ready(function() {
        var e = require("github/fetch"),
            t = e.fetchText,
            n = function() {
                var e = $(".js-job-search-input")[0].value,
                    t = $("input[type=text].js-job-search-prefix, select.js-job-search-prefix, input[type=hidden].js-job-search-prefix"),
                    n = i(t, function(e, t) {
                        return "" === e ? "" : "" !== t ? e + t : void 0
                    }),
                    r = "input[type=checkbox].js-job-search-prefix";
                $.merge(n, i($(r), function(e, t) {
                    return "true" === t ? e + t : void 0
                }));
                var s = $.trim(n.join(" "));
                $(".js-hidden-job-query").val($.trim(e + " " + s))
            },
            i = function(e, t) {
                return $.map(e, function(e) {
                    var n = null;
                    n = $(e).is("[type=checkbox]") ? $(e).prop("checked") ? "true" : "false" : e.value.trim();
                    var i = e.getAttribute("data-search-prefix"),
                        r = function(e) {
                            return -1 !== e.search(/\s/g) ? '"' + e + '"' : e
                        };
                    return "" === i ? t.call(e, i, n) : -1 !== n.search(/\,/g) && "location" !== i ? n.split(/\,/).map(function(n) {
                        return t.call(e, i, r($.trim(n)))
                    }) : t.call(e, i, r(n))
                })
            };
        $(document).on("focusin", ".js-job-search-prefix", function() {
            return function() {
                n()
            }
        }), $(document).on("focusin", ".js-job-search-input", function() {
            $(_this).closest(".js-advanced-search-label").addClass("focus")
        }), $(document).on("change", ".js-job-search-prefix", n), $(document).on("ajaxSuccess", ".js-job-search-unwatch", function(e) {
            var t = $(e.target),
                n = t.closest(".menu");
            t.closest(".menu-item").remove(), n.find(".menu-item").length < 1 && ($(".search-job-postings-watched, .js-job-search-watch").removeClass("hidden"), $(".js-watched-orgs").addClass("hidden"))
        }), $(document).on("ajaxSuccess", ".js-org-job-search-unwatch", function() {
            $(".js-org-job-search-watch").removeClass("hidden")
        }), $(document).on("ajaxSuccess", ".js-job-search-watch", function(e, t, n, i) {
            $(".js-job-search-watch")[0].classList.add("hidden"), $(".js-job-search-watches").empty().append($(i))
        }), $(document).on("ajaxSuccess", ".js-org-job-search-watch", function(e, t, n, i) {
            $(".js-org-job-search-watch")[0].classList.add("hidden"), $(".js-org-job-search-unwatch").removeClass("hidden");
            var r = !0,
                s = !1,
                o = void 0;
            try {
                for (var a, c = document.querySelectorAll(".js-org-job-search-id")[Symbol.iterator](); !(r = (a = c.next()).done); r = !0) {
                    var u = a.value;
                    u.value = i.saved_search.id
                }
            } catch (l) {
                s = !0, o = l
            } finally {
                try {
                    !r && c["return"] && c["return"]()
                } finally {
                    if (s) throw o
                }
            }
        });
        var r = ".js-select-menu.js-job-search-watch, .js-select-menu.js-org-job-search-watch";
        $(r).on("menu:activated", function(e) {
            $(e.target).find(".js-job-search-title").focus()
        }), $(document).on("submit", ".js-job-search-unwatch, .js-org-job-search-unwatch", function(e) {
            $(e.target).addClass("hidden")
        });
        var s = function(e) {
                var t = e[0].getAttribute("data-value"),
                    n = e.closest(".js-suggester-container"),
                    i = n.find('input[type="text"]'),
                    r = n.find('input[type="hidden"]'),
                    s = n.find(".applied-suggestions");
                if (s.length > 0) {
                    var o = document.createElement("li");
                    o.className = "applied-suggestion";
                    var a = n.find(".js-applied-suggestions-value"),
                        c = a[0].value,
                        u = "";
                    u = c.length < 1 ? t : c.split(",").concat(t).join(","), a.val(u).change(), o.appendChild(document.createTextNode(e.text()));
                    var l = document.createElement("button");
                    l.setAttribute("data-value", t), $(l).append("&times;"), l.className = "js-remove-suggestion remove-suggestion tooltipped tooltipped-e", l.setAttribute("aria-label", "Remove"), l.type = "button", o.appendChild(l), s[0].appendChild(o), i.val(""), s.removeClass("hidden")
                } else r.length > 0 ? (r.val(t).change(), i.val(e.text()).change()) : i.val(t).change();
                e.closest(".js-suggester").empty().addClass("hidden"), i.focus()
            },
            o = function(e, t) {
                var n = e.find(".js-navigation-item");
                if (!(n.length < 1)) {
                    var i = e.find(".js-navigation-item.navigation-focus"),
                        r = null;
                    if (i.length > 0) {
                        var s = i.next(),
                            o = i.prev();
                        i.removeClass("navigation-focus"), r = 1 === t ? s.length > 0 ? s : n.first() : o.length > 0 ? o : n.last()
                    } else r = 1 === t ? n.first() : n.last();
                    r.addClass("navigation-focus")
                }
            },
            a = function(e, t) {
                var n = e.closest(".js-suggester-container")[0],
                    i = n.querySelector(".js-suggester");
                i.innerHTML = t, i.querySelectorAll("li").length > 0 ? (i.classList.remove("hidden"), i.style.display = "block") : i.classList.add("hidden")
            },
            c = function(e, n, i) {
                var r = e[0].value.trim(),
                    s = e.closest(".js-suggester-container"),
                    o = s[0].querySelector(".octospinner");
                if (s.find(".js-suggester").empty(), !(r.length < 1)) {
                    o.classList.remove("hidden");
                    var c = n.indexOf("?") > -1 ? "&" : "?";
                    n += c + "q=" + i(r), t(n).then(function(t) {
                        a(e, t), o.classList.add("hidden")
                    })
                }
            },
            u = function(e, t) {
                c(e, t, function(e) {
                    return 'title:"' + encodeURIComponent(e) + '"'
                })
            },
            l = function(e, t) {
                c(e, t, function(e) {
                    return encodeURIComponent(e)
                })
            },
            d = {};
        d.jobTitle = null, d.jobLocation = null;
        var h = function(e, t, n) {
            var i = $(t.target),
                r = i.closest(".js-suggester-container"),
                a = r.find(".js-suggester");
            if (d[e] && clearTimeout(d[e]), 38 === t.keyCode) return void o(a, -1);
            if (40 === t.keyCode) return void o(a, 1);
            if (27 === t.keyCode || 9 === t.keyCode) return a.empty(), void a[0].classList.add("hidden");
            if (13 === t.keyCode) {
                var c = a.find(".js-navigation-item.navigation-focus");
                return void(c.length > 0 && (t.preventDefault(), s(c)))
            }
            var u = r[0].querySelector(".js-navigation-container").getAttribute("data-url");
            d[e] = setTimeout(function() {
                n(i, u)
            }, 500)
        };
        $.observe(".js-job-search-input", function() {
            this.addEventListener("keydown", function(e) {
                h("jobTitle", e, u)
            })
        });
        var f = function(e) {
                var t = e.target;
                t.classList.contains("js-navigation-item") || (t = t.closest(".js-navigation-item"));
                var n = t.closest(".js-job-search-suggester").querySelector(".navigation-focus");
                null !== n && n.classList.remove("navigation-focus"), t.classList.add("navigation-focus")
            },
            m = function(e) {
                var t = e.target;
                t.classList.contains("js-navigation-item") || (t = t.closest(".js-navigation-item")), t.classList.remove("navigation-focus")
            },
            p = function(e) {
                var t = $(e.target);
                t.is(".js-navigation-item") || (t = t.closest(".js-navigation-item")), s(t)
            },
            g = ".js-job-search-suggester .js-navigation-item";
        $(document).on("mouseover", g, f).on("mouseout", g, m).on("click", g, p), ($(".js-job-search-input").length || $(".js-job-search-hidden").length) && n(), $.observe(".js-job-posting-location", function() {
            this.addEventListener("keydown", function(e) {
                h("jobLocation", e, l)
            })
        });
        var v = function(e) {
            e.preventDefault();
            var t = $(e.target),
                n = t[0].getAttribute("data-value"),
                i = t.closest(".js-suggester-container"),
                r = i[0].querySelector(".js-applied-suggestions-value"),
                s = r.value.split(","),
                o = s.indexOf(n);
            o > -1 && s.splice(o, 1), r.value = s.join(",");
            var a = t.closest(".applied-suggestions")[0];
            t.closest("li").remove(), a.querySelectorAll("li").length < 1 && a.classList.add("hidden")
        };
        $(document).on("click", ".js-remove-suggestion", v)
    }),
    function() {
        var e, t, n, i, r, s, o;
        s = require("github/fetch"), n = s.fetch, i = s.fetchText, r = require("delegated-events").fire, e = {
            isHttpFragment: function(e) {
                return 0 === "http://".indexOf(e) || 0 === "https://".indexOf(e)
            },
            isValidHttpUrl: function(e) {
                var t, n, i;
                return e = e.trim(), i = function() {
                    try {
                        return new URL(e)
                    } catch (t) {}
                }(), null == i ? !1 : (t = /^https?/.test(i.protocol), n = i.href === e || i.href === e + "/", t && n)
            }
        }, $.observe(".js-hook-url-field", function(t) {
            var n, i, r;
            n = $(t), i = function(e) {
                var t, n;
                return t = $(e).closest("form"), n = /^https:\/\/.+/.test(e.val()), t.toggleClass("is-ssl", n)
            }, r = function(t) {
                var n, i;
                return n = t.val(), i = e.isHttpFragment(n) || e.isValidHttpUrl(n), t.closest("form").toggleClass("is-invalid-url", !i)
            }, n.on("keyup", function() {
                return i(n)
            }), n.on("throttled:input", function() {
                return r(n)
            }), i(n), r(n)
        }), $(document).on("click", ".js-hook-toggle-ssl-verification", function(e) {
            return e.preventDefault(), $(".js-ssl-hook-fields").toggleClass("is-not-verifying-ssl"), $(".js-ssl-hook-fields").hasClass("is-not-verifying-ssl") ? ($(".js-hook-ssl-verification-field").val("1"), r(document, "facebox:close")) : $(".js-hook-ssl-verification-field").val("0")
        }), t = function(e) {
            var t;
            return t = $(".js-hook-event-checkbox"), t.prop("checked", !1), null != e ? t.filter(e).prop("checked", !0) : void 0
        }, $(document).on("change", ".js-hook-event-choice", function() {
            var e;
            return e = "custom" === $(this).val(), $(".js-hook-events-field").toggleClass("is-custom", e), !0
        }), $(document).on("submit", ".js-hook-form", function() {
            var e, n;
            return e = $(this), n = e.find(".js-hook-event-choice:checked").val(), "custom" === n && $(".js-hook-wildcard-event").prop("checked", !1), "push" === n && t('[value="push"]'), "all" === n && t(".js-hook-wildcard-event"), !0
        }), $(document).on("details:toggled", ".js-hook-secret", function() {
            var e, t;
            return e = $(this), t = e.find("input[type=password]"), e.hasClass("open") ? t.removeAttr("disabled").focus() : t.attr("disabled", "disabled")
        }), $(document).on("details:toggle", ".js-hook-delivery-item", function() {
            var e, t;
            return e = $(this), t = this.querySelector(".js-hook-delivery-details"), e.data("details-load-initiated") ? void 0 : $.sudo().then(function() {
                var n, r;
                return e.data("details-load-initiated", !0), t.classList.add("is-loading"), n = function(e) {
                    return $(t).replaceWith(e), t.classList.remove("is-loading")
                }, r = function() {
                    return t.classList.add("has-error"), t.classList.remove("is-loading")
                }, i(t.getAttribute("data-url")).then(n, r)
            })
        }), $(document).on("click", ".js-hook-delivery-details .js-tabnav-tab", function() {
            var e, t, n;
            return t = $(this), e = t.closest(".js-hook-delivery-details"), e.find(".js-tabnav-tab").removeClass("selected"), n = e.find(".js-tabnav-tabcontent").removeClass("selected"), t.addClass("selected"), n.filter(function() {
                return this.getAttribute("data-tab-name") === t.attr("data-tab-target")
            }).addClass("selected")
        }), $(document).on("click", ".js-hook-deliveries-pagination-button", function(e) {
            var t, n;
            return e.preventDefault(), n = this, t = $(this).parent(), $.sudo().then(function() {
                return t.addClass("loading"), i(n.getAttribute("href")).then(function(e) {
                    return t.replaceWith(e)
                })
            })
        }), $(document).on("click", ".js-redeliver-hook-delivery-init-button", function(e) {
            var t;
            return e.preventDefault(), t = this.getAttribute("href"), $.sudo().then(function() {
                return $.facebox({
                    div: t
                })
            })
        }), $(document).on("ajaxSuccess", ".js-redeliver-hook-form", function(e, t) {
            var n, i, s, o;
            return o = this.getAttribute("data-delivery-guid"), n = $(".js-hook-delivery-details").filter(function() {
                return this.getAttribute("data-delivery-guid") === o
            }), s = n.closest(".js-hook-delivery-item"), r(document, "facebox:close"), i = $(t.responseText), n.replaceWith(i), i.on("load", function() {
                return n = s.find(".js-hook-delivery-details"), s.find(".js-item-status").removeClass("success pending failure").addClass(n.attr("data-status-class")), s.find(".js-item-status-tooltip").attr("aria-label", n.attr("data-status-message"))
            })
        }), $(document).on("ajaxError", ".js-redeliver-hook-form", function() {
            return $(this).siblings(".js-redelivery-dialog").addClass("failed")
        }), $(document).on("submit", ".js-test-hook-form", function(e) {
            var t;
            return e.preventDefault(), t = this, $.sudo().then(function() {
                var e, i, r, s;
                return s = document.querySelector(".js-test-hook-message"), s.classList.remove("error", "success"), e = function() {
                    return t.dispatchEvent(new CustomEvent("ajaxComplete", {
                        bubbles: !0
                    }))
                }, i = function() {
                    return s.classList.add("success")
                }, r = function(e) {
                    var t;
                    return s.classList.add("error"), t = s.querySelector(".js-test-hook-message-errors"), null != e.response ? e.response.json().then(function(e) {
                        return t.textContent = e.errors
                    }) : t.textContent = "Network request failed"
                }, n(t.action, {
                    method: t.method,
                    body: $(t).serialize(),
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
                    }
                }).then(i, r).then(e, e)
            })
        }), o = function() {
            var e, t, n, i;
            return n = $(this), i = n.find(".js-value"), e = n.closest("form"), t = e.find(".js-item-value")[0], t.value = i.text(), e.submit()
        }, $(document).on("click", ".js-hook-enforcement-select .js-navigation-item", o), $(document).on("click", ".js-hook-final-input", function() {
            return $(this).closest("form").submit()
        })
    }.call(this),
    function() {
        var e, t, n, i, r, s, o, a;
        o = require("github/fetch"), n = o.fetchText, e = o.fetchJSON, t = o.fetchPoll, s = require("github/inflector").pluralizeNode, a = require("setimmediate")["default"], $(document).on("change", ".js-triage-list-check", function(e) {
            return $(".js-triage-toolbar").toggleClass("triage-mode", $(".js-triage-list-check:checked").length > 0)
        }), $(document).on("change", ".js-triage-list-check", function() {
            var e;
            e = $(".js-triage-list-check:checked"), $(".js-triage-item").data("contents-data", e).addClass("js-load-contents")
        }), $(document).on("selectmenu:selected", ".js-triage-toolbar .js-navigation-item", function() {
            var e, t, n, i, r, s;
            n = $(this).closest(".js-menu-container").hasClass("js-select-menu-multiple"), e = $(this).closest("form"), r = $(this).hasClass("selected"), i = $(this).attr("data-name"), s = $(this).attr("data-value"), t = n ? $("<input>", {
                type: "hidden",
                name: i + "[" + s + "]",
                value: r ? "1" : "0"
            }) : $("<input>", {
                type: "hidden",
                name: i,
                value: r ? s : ""
            }), a(function(e) {
                return function() {
                    return $(e).menu("deactivate")
                }
            }(this)), e.find(".js-bulk-triage-fields").append(t), e.addClass("will-submit")
        }), $(document).on("menu:deactivate", ".js-triage-toolbar .js-menu-container", function(n) {
            var i, r;
            (i = this.querySelector("form.will-submit")) && (this.classList.add("is-loading"), r = e(i.getAttribute("action"), {
                method: "put",
                body: $.param($(i).serializeArray()),
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
                }
            }), r.then(function(e) {
                return function(n) {
                    var i, r, s;
                    return s = t(n.job.url, {
                        headers: {
                            accept: "application/json"
                        }
                    }), i = function() {
                        return $(e).menu("deactivate"), location.reload()
                    }, r = function() {
                        return e.classList.add("has-error")
                    }, s.then(i, r)
                }
            }(this)), i.classList.remove("will-submit"), n.preventDefault())
        }), r = function(e) {
            return $(e).closest(".js-check-all-container")[0] || document.body
        }, $(document).on("change", "input.js-orgs-org-toggle", function(e) {
            var t, n, i;
            t = $(r(this)), n = t.find(".js-check-all-count"), n.length && (i = t.find("input.js-check-all-item:checked").length, s(i, document.querySelector(".js-orgs")))
        }), $(document).on("submit", ".js-delete-orgs-form", function(n) {
            var i, r, s, o, a;
            n.preventDefault(), s = $(".facebox"), s.addClass("is-loading"), o = this, i = $(".js-triage-list-check:checked"), r = i.length ? "&" + $.param(i) : "", a = e(o.getAttribute("action"), {
                method: "put",
                body: $.param($(o).serializeArray()) + r,
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
                }
            }), a.then(function(e) {
                var n, i, r;
                return r = t(e.job.url, {
                    headers: {
                        accept: "application/json"
                    }
                }), n = function() {
                    return location.reload()
                }, i = function() {
                    return o.classList.add("has-error")
                }, r.then(n, i)
            })
        }), i = function() {
            var e, t, n;
            return e = $(".js-orgs-grid"), t = e.find(".js-orgs-org").has(".js-orgs-org-toggle:checked"),
                function() {
                    var e, i, r;
                    for (r = [], e = 0, i = t.length; i > e; e++) n = t[e], r.push(n.getAttribute("data-id"));
                    return r
                }().sort()
        }, $(document).on("click", ".js-orgs-delete-confirm-button", function(e) {
            return e.preventDefault(), $.facebox(function() {
                var t;
                return t = n($(e.target).attr("data-url") + "?organization_ids=" + i().join(","), {
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
                    }
                }), t.then(function(e) {
                    return $.facebox(e)
                })
            })
        }), $(document).on("change", ".js-hosted-admin-auth-switcher", function(e) {
            var t;
            return t = $(".js-hosted-admin-saml-settings"), t.toggleClass("hidden")
        }), $(document).on("click", ".js-preview-sign-in-message", function(e) {
            var t, n;
            return n = $("#customizations_sign_in_message").val(), t = encodeURIComponent(n), window.open("/preview_sign_in_message?sign_in_message=" + t, "_blank")
        }), $(document).on("click", ".js-preview-suspended-message", function(e) {
            var t, n;
            return n = $("#customizations_suspended_message").val(), t = encodeURIComponent(n), window.open("/preview_suspended_message?suspended_message=" + t, "_blank")
        }), $(document).on("selectmenu:selected", ".js-select-environment", function(e) {
            var t;
            return t = $(this).attr("data-env-id"), $("#pre_receive_hook_target_hook_attributes_environment_id").val(t)
        }), $.observe(".js-repo-field.js-get-contents", function(e) {
            $(this).on("throttled:input." + e, function() {
                var e, t, i, r;
                return e = $(this), r = e.attr("data-contents-url"), t = e.val().trim(), i = n(r + "?query=" + t), i.then(function(e) {
                    return $(".js-repo-results").html(e)
                })
            })
        }), $(document).on("menu:activated selectmenu:load", ".js-repo-select-menu", function(e) {
            return $(this).find(".js-repo-field").focus()
        }), $(document).on("selectmenu:selected", ".js-select-repository", function(e) {
            var t;
            return t = $(this).attr("data-repo-id"), $("#pre_receive_hook_target_hook_attributes_repository_id").val(t)
        })
    }.call(this),
    function() {
        $(document).on("navigation:open", ".js-issues-custom-filter", function() {
            var e, t, n, i;
            return t = $(this), i = t.find(".js-new-item-name").text(), n = t.attr("data-name"), e = $("<input>", {
                type: "hidden",
                name: n,
                value: i
            }), t.append(e), t.submit()
        })
    }.call(this),
    function() {
        var e, t, n, i = require("setimmediate")["default"];
        t = function(t, n) {
            return t.closest(".js-label-editor").find(".js-color-editor-bg").css("background-color", n), t.css("color", e(n, -.5)), t.css("border-color", n)
        }, n = function(e) {
            var t, n;
            return n = "#c00", t = $(e).closest(".js-color-editor"), t.find(".js-color-editor-bg").css("background-color", n), e.css("color", "#c00"), e.css("border-color", n)
        }, e = function(e, t) {
            var n, i, r;
            for (e = String(e).toLowerCase().replace(/[^0-9a-f]/g, ""), e.length < 6 && (e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2]), t = t || 0, r = "#", n = void 0, i = 0; 3 > i;) n = parseInt(e.substr(2 * i, 2), 16), n = Math.round(Math.min(Math.max(0, n + n * t), 255)).toString(16), r += ("00" + n).substr(n.length), i++;
            return r
        }, $(document).on("focusin", ".js-color-editor-input", function() {
            var e, i;
            return i = $(this), e = $(this).closest(".js-label-editor"), i.on("throttled:input.colorEditor", function(r) {
                var s;
                return "#" !== i.val().charAt(0) && i.val("#" + i.val()), e.removeClass("is-valid is-not-valid"), s = /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(i.val()), s ? (e.addClass("is-valid"), t(i, i.val())) : (e.addClass("is-not-valid"), n(i))
            }), i.on("blur.colorEditor", function() {
                return i.off(".colorEditor")
            })
        }), $(document).on("mousedown", ".js-color-chooser-color", function(e) {
            var n, i, r;
            return $(this).closest(".js-color-editor").removeClass("open"), n = $(this).closest(".js-label-editor"), i = "#" + $(this).attr("data-hex-color"), r = n.find(".js-color-editor-input"), n.removeClass("is-valid is-not-valid"), r.val(i), t(r, i)
        }), $(document).on("submit", ".js-label-editor form", function() {
            var e, t;
            return e = $(this).find(".js-color-editor-input"), t = e.val(), t.length < 6 && (t = t[1] + t[1] + t[2] + t[2] + t[3] + t[3]), e.val(t.replace("#", ""))
        }), $(document).on("focusin", ".js-label-editor", function() {
            return $(this).closest(".js-label-editor").addClass("open")
        }), $(document).on("reset", ".js-create-label", function() {
            var e, n, r;
            return e = $(this).find(".color-chooser span").removeAttr("data-selected"), r = e.eq(Math.floor(Math.random() * e.length)), n = "#" + r.attr("data-selected", "").attr("data-hex-color"), i(function(e) {
                return function() {
                    var i;
                    return i = $(e).find(".js-color-editor-input"), i.attr("data-original-color", n).attr("value", n), t(i, i.val())
                }
            }(this))
        })
    }.call(this),
    function() {
        function e(e, t) {
            return e.closest("div.js-details-container").classList.toggle("is-empty", t)
        }

        function t(e) {
            var t, n, r;
            return t = document.querySelector(".js-labels-count"), r = o(t.textContent), n = r + e, t.textContent = s(n), i(n, document.querySelector(".js-labels-label")), n
        }
        var n = require("github/inflector"),
            i = n.pluralizeNode,
            r = require("github/number-helpers"),
            s = r.formatNumber,
            o = r.parseFormattedNumber;
        $(document).on("click", ".js-edit-label", function() {
            $(this).closest(".labels-list-item").addClass("edit")
        }), $(document).on("click", ".js-edit-label-cancel", function() {
            this.form.reset(), $(this).closest(".labels-list-item").removeClass("edit")
        }), $(document).on("ajaxSuccess", ".js-create-label", function(n, i, r, s) {
            this.reset(), $(this).nextAll(".table-list").prepend(s), t(1), e(this, !1)
        }), $(document).on("ajaxSuccess", ".js-update-label", function(e, t, n, i) {
            $(this).closest(".labels-list-item").replaceWith(i)
        }), $(document).on("ajaxSend", ".js-update-label, .js-create-label", function() {
            $(this).find(".error").text("")
        }), $(document).on("ajaxError", ".js-update-label, .js-create-label", function(e, t) {
            return $(this).find(".error").text(t.responseText), !1
        }), $(document).on("ajaxSuccess", ".js-delete-label", function() {
            var n;
            n = t(-1), e(this, 0 === n), $(this).closest(".labels-list-item").fadeOut()
        })
    }.call(this),
    function() {
        $.hashChange(function(e) {
            var t, n, i, r;
            return r = e.newURL, (i = r.match(/\/issues#issue\/(\d+)$/)) ? (t = i[0], n = i[1], window.location = r.replace(/\/?#issue\/.+/, "/" + n)) : void 0
        }), $.hashChange(function(e) {
            var t, n, i, r, s;
            return s = e.newURL, (r = s.match(/\/issues#issue\/(\d+)\/comment\/(\d+)$/)) ? (t = r[0], i = r[1], n = r[2], window.location = s.replace(/\/?#issue\/.+/, "/" + i + "#issuecomment-" + n)) : void 0
        })
    }.call(this),
    function() {
        var e;
        $.observe(".js-issues-list-check:checked", {
            add: function() {
                return $(this).closest(".js-issue-row").addClass("selected")
            },
            remove: function() {
                return $(this).closest(".js-issue-row").removeClass("selected")
            }
        }), $(document).on("navigation:keydown", ".js-issue-row", function(t) {
            return "x" === t.hotkey ? (e(this), !1) : void 0
        }), $("#js-issues-search").focus(function(e) {
            return this.value = this.value
        }), e = function(e) {
            var t;
            (t = $(e).find(".js-issues-list-check")[0]) && (t.checked = !t.checked, $(t).trigger("change"))
        }
    }.call(this),
    function() {
        var e = require("delegated-events"),
            t = e.on,
            n = require("github/text"),
            i = n.insertText;
        t("selectmenu:selected", ".js-saved-reply-container", function(e) {
            var t = e.target.querySelector(".js-saved-reply-body").textContent.trim(),
                n = this.closest(".js-previewable-comment-form"),
                r = n.querySelector(".js-comment-field");
            i(r, t)
        })
    }(),
    function() {
        var e, t, n, i, r;
        e = require("github/fetch").fetchText, $(document).on("selectmenu:selected", ".js-issue-sidebar-form", function(e) {
            var t, i, r, s, o;
            return i = e.target, i.hasAttribute("data-assignee-value") && (r = i.closest(".js-menu-content"), t = r.querySelector(".js-assignee-field"), t.value = i.getAttribute("data-assignee-value"), t.disabled = !1), o = function(e) {
                return function() {
                    return e.matches("form") ? $(e).submit() : n(e)
                }
            }(this), s = i.closest(".js-select-menu").hasAttribute("data-multiple"), s ? ($(this).off(".deferredSubmit"), $(this).one("menu:deactivate.deferredSubmit", o)) : o()
        }), r = function(e, t) {
            var n;
            e.replaceWith.apply(e, $.parseHTML(t)), n = document.querySelector(".js-discussion-sidebar-item .js-assignee-field"), n && n.value && (n.disabled = !1)
        }, $(document).on("ajaxSuccess", ".js-discussion-sidebar-item", function(e, t, n, i) {
            var s;
            s = e.target.classList, s.contains("js-issue-sidebar-form") && r(this, i)
        }), $(document).on("click", "div.js-issue-sidebar-form .js-issue-assign-self", function(e) {
            var t;
            t = this.closest(".js-issue-sidebar-form"), n(t, {
                name: this.name,
                value: this.value
            }), e.preventDefault()
        }), n = function(t, n) {
            var s;
            s = i(t), n && s.push(n), s.push({
                name: "authenticity_token",
                value: t.closest("form").elements.authenticity_token.value
            }), e(t.getAttribute("data-url"), {
                method: "post",
                body: $.param(s),
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
                }
            }).then(function(e) {
                return r(t.closest(".js-discussion-sidebar-item"), e)
            })
        }, i = function(e) {
            var n, i, r, s, o, a;
            for (n = e.closest("form"), o = $(n).serializeArray(), a = [], i = 0, r = o.length; r > i; i++) s = o[i], $.contains(e, t(n, s)) && a.push(s);
            return a
        }, t = function(e, t) {
            var n, i, r, s;
            for (s = e.elements, i = 0, r = s.length; r > i; i++)
                if (n = s[i], n.name === t.name && n.value === t.value) return n
        }
    }.call(this),
    function() {
        var e, t, n, i;
        n = require("github/fetch"), e = n.fetchJSON, t = n.fetchPoll, i = require("setimmediate")["default"], $(document).on("change", ".js-issues-list-check", function() {
            $("#js-issues-toolbar").toggleClass("triage-mode", $(".js-issues-list-check:checked").length > 0)
        }), $(document).on("change", ".js-issues-list-check", function() {
            var e;
            e = $(".js-issues-list-check:checked"), $("#js-issues-toolbar .js-issues-toolbar-triage .js-select-menu").data("contents-data", e).addClass("js-load-contents")
        }), $(document).on("selectmenu:selected", ".js-issues-toolbar-triage .js-navigation-item", function() {
            var e, t, n, r, s, o;
            n = $(this).closest(".js-menu-container").hasClass("js-label-select-menu"), e = $(this).closest("form"), s = $(this).hasClass("selected"), r = $(this).attr("data-name"), o = $(this).attr("data-value"), t = n ? $("<input>", {
                type: "hidden",
                name: r + "[" + o + "]",
                value: s ? "1" : "0"
            }) : $("<input>", {
                type: "hidden",
                name: r,
                value: s ? o : ""
            }), i(function(e) {
                return function() {
                    return $(e).menu("deactivate")
                }
            }(this)), e.find(".js-issues-triage-fields").append(t), e.addClass("will-submit")
        }), $(document).on("menu:deactivate", ".js-issues-toolbar-triage .js-menu-container", function(n) {
            var i, r;
            (i = this.querySelector("form.will-submit")) && (this.classList.add("is-loading"), r = e(i.getAttribute("action"), {
                method: i.getAttribute("method"),
                body: $.param($(i).serializeArray()),
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
                }
            }), r.then(function(e) {
                return function(n) {
                    var i, r, s;
                    return s = t(n.job.url, {
                        headers: {
                            accept: "application/json"
                        }
                    }), i = function() {
                        return $(e).menu("deactivate"), location.reload()
                    }, r = function() {
                        return e.classList.add("has-error")
                    }, s.then(i, r)
                }
            }(this)), i.classList.remove("will-submit"), n.preventDefault())
        })
    }.call(this), DateInput = function(e) {
        function t(n, i) {
            "object" != typeof i && (i = {}), e.extend(this, t.DEFAULT_OPTS, i), this.input = e(n), this.bindMethodsToObj("show", "hide", "hideIfClickOutside", "keydownHandler", "selectDate"), this.build(), this.selectDate(), this.show(), this.input.hide(), this.input.data("datePicker", this)
        }
        return t.DEFAULT_OPTS = {
            month_names: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            short_month_names: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            short_day_names: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            start_of_week: 1
        }, t.prototype = {
            build: function() {
                var t = e('<p class="month_nav"><span class="date-button prev" title="[Page-Up]">\u25c0</span> <span class="month-name"></span> <span class="date-button next" title="[Page-Down]">\u25b6</span></p>');
                this.monthNameSpan = e(".month-name", t), e(".prev", t).click(this.bindToObj(function() {
                    this.moveMonthBy(-1)
                })), e(".next", t).click(this.bindToObj(function() {
                    this.moveMonthBy(1)
                }));
                var n = e('<p class="year_nav"><span class="date-button prev" title="[Ctrl+Page-Up]">\u25c0</span> <span class="year-name"></span> <span class="date-button next" title="[Ctrl+Page-Down]">\u25b6</span></p>');
                this.yearNameSpan = e(".year-name", n), e(".prev", n).click(this.bindToObj(function() {
                    this.moveMonthBy(-12)
                })), e(".next", n).click(this.bindToObj(function() {
                    this.moveMonthBy(12)
                }));
                var i = e("<div></div>").append(t, n),
                    r = "<table><thead><tr>";
                e(this.adjustDays(this.short_day_names)).each(function() {
                    r += "<th>" + this + "</th>"
                }), r += "</tr></thead><tbody></tbody></table>", this.dateSelector = this.rootLayers = e('<div class="date_selector"></div>').append(i, r).insertAfter(this.input), this.tbody = e("tbody", this.dateSelector), this.input.change(this.bindToObj(function() {
                    this.selectDate()
                })), this.selectDate()
            },
            selectMonth: function(t) {
                var n = new Date(t.getFullYear(), t.getMonth(), 1);
                if (!this.currentMonth || this.currentMonth.getFullYear() != n.getFullYear() || this.currentMonth.getMonth() != n.getMonth()) {
                    this.currentMonth = n;
                    for (var i = this.rangeStart(t), r = this.rangeEnd(t), s = this.daysBetween(i, r), o = "", a = 0; s >= a; a++) {
                        var c = new Date(i.getFullYear(), i.getMonth(), i.getDate() + a, 12, 0);
                        this.isFirstDayOfWeek(c) && (o += "<tr>"), o += c.getMonth() == t.getMonth() ? '<td class="selectable_day" date="' + this.dateToString(c) + '">' + c.getDate() + "</td>" : '<td class="unselected_month" date="' + this.dateToString(c) + '">' + c.getDate() + "</td>", this.isLastDayOfWeek(c) && (o += "</tr>")
                    }
                    this.tbody.empty().append(o), this.monthNameSpan.empty().append(this.monthName(t)), this.yearNameSpan.empty().append(this.currentMonth.getFullYear()), e(".selectable_day", this.tbody).mousedown(this.bindToObj(function(t) {
                        this.changeInput(e(t.target).attr("date"))
                    })), e("td[date='" + this.dateToString(new Date) + "']", this.tbody).addClass("today"), e("td.selectable_day", this.tbody).mouseover(function() {
                        e(this).addClass("hover")
                    }), e("td.selectable_day", this.tbody).mouseout(function() {
                        e(this).removeClass("hover")
                    })
                }
                e(".selected", this.tbody).removeClass("selected"), e('td[date="' + this.selectedDateString + '"]', this.tbody).addClass("selected")
            },
            selectDate: function(e) {
                "undefined" == typeof e && (e = this.stringToDate(this.input.val())), e || (e = new Date), this.selectedDate = e, this.selectedDateString = this.dateToString(this.selectedDate), this.selectMonth(this.selectedDate)
            },
            resetDate: function() {
                e(".selected", this.tbody).removeClass("selected"), this.changeInput("")
            },
            changeInput: function(e) {
                this.input.val(e).change(), this.hide()
            },
            show: function() {
                this.rootLayers.css("display", "block"), e([window, document.body]).click(this.hideIfClickOutside), this.input.unbind("focus", this.show), this.rootLayers.keydown(this.keydownHandler), this.setPosition()
            },
            hide: function() {},
            hideIfClickOutside: function(e) {
                e.target == this.input[0] || this.insideSelector(e) || this.hide()
            },
            insideSelector: function(t) {
                return $target = e(t.target), $target.parents(".date_selector").length || $target.is(".date_selector")
            },
            keydownHandler: function(e) {
                switch (e.keyCode) {
                    case 9:
                    case 27:
                        return void this.hide();
                    case 13:
                        this.changeInput(this.selectedDateString);
                        break;
                    case 33:
                        this.moveDateMonthBy(e.ctrlKey ? -12 : -1);
                        break;
                    case 34:
                        this.moveDateMonthBy(e.ctrlKey ? 12 : 1);
                        break;
                    case 38:
                        this.moveDateBy(-7);
                        break;
                    case 40:
                        this.moveDateBy(7);
                        break;
                    case 37:
                        this.moveDateBy(-1);
                        break;
                    case 39:
                        this.moveDateBy(1);
                        break;
                    default:
                        return
                }
                e.preventDefault()
            },
            stringToDate: function(e) {
                var t;
                return (t = e.match(/^(\d{1,2}) ([^\s]+) (\d{4,4})$/)) ? new Date(t[3], this.shortMonthNum(t[2]), t[1], 12, 0) : null
            },
            dateToString: function(e) {
                return e.getDate() + " " + this.short_month_names[e.getMonth()] + " " + e.getFullYear()
            },
            setPosition: function() {
                var e = this.input.offset();
                this.rootLayers.css({
                    top: e.top + this.input.outerHeight(),
                    left: e.left
                }), this.ieframe && this.ieframe.css({
                    width: this.dateSelector.outerWidth(),
                    height: this.dateSelector.outerHeight()
                })
            },
            moveDateBy: function(e) {
                var t = new Date(this.selectedDate.getFullYear(), this.selectedDate.getMonth(), this.selectedDate.getDate() + e);
                this.selectDate(t)
            },
            moveDateMonthBy: function(e) {
                var t = new Date(this.selectedDate.getFullYear(), this.selectedDate.getMonth() + e, this.selectedDate.getDate());
                t.getMonth() == this.selectedDate.getMonth() + e + 1 && t.setDate(0), this.selectDate(t)
            },
            moveMonthBy: function(e) {
                var t = new Date(this.currentMonth.getFullYear(), this.currentMonth.getMonth() + e, this.currentMonth.getDate());
                this.selectMonth(t)
            },
            monthName: function(e) {
                return this.month_names[e.getMonth()]
            },
            bindToObj: function(e) {
                var t = this;
                return function() {
                    return e.apply(t, arguments)
                }
            },
            bindMethodsToObj: function() {
                for (var e = 0; e < arguments.length; e++) this[arguments[e]] = this.bindToObj(this[arguments[e]])
            },
            indexFor: function(e, t) {
                for (var n = 0; n < e.length; n++)
                    if (t == e[n]) return n
            },
            monthNum: function(e) {
                return this.indexFor(this.month_names, e)
            },
            shortMonthNum: function(e) {
                return this.indexFor(this.short_month_names, e)
            },
            shortDayNum: function(e) {
                return this.indexFor(this.short_day_names, e)
            },
            daysBetween: function(e, t) {
                return e = Date.UTC(e.getFullYear(), e.getMonth(), e.getDate()),
                    t = Date.UTC(t.getFullYear(), t.getMonth(), t.getDate()), (t - e) / 864e5
            },
            changeDayTo: function(e, t, n) {
                var i = n * (Math.abs(t.getDay() - e - 7 * n) % 7);
                return new Date(t.getFullYear(), t.getMonth(), t.getDate() + i)
            },
            rangeStart: function(e) {
                return this.changeDayTo(this.start_of_week, new Date(e.getFullYear(), e.getMonth()), -1)
            },
            rangeEnd: function(e) {
                return this.changeDayTo((this.start_of_week - 1) % 7, new Date(e.getFullYear(), e.getMonth() + 1, 0), 1)
            },
            isFirstDayOfWeek: function(e) {
                return e.getDay() == this.start_of_week
            },
            isLastDayOfWeek: function(e) {
                return e.getDay() == (this.start_of_week - 1) % 7
            },
            adjustDays: function(e) {
                for (var t = [], n = 0; n < e.length; n++) t[n] = e[(n + this.start_of_week) % 7];
                return t
            }
        }, t
    }(jQuery),
    function() {
        var e = require("github/has-interactions"),
            t = e.hasDirtyFields;
        $.observe("input.js-date-input", function() {
            $(this).next(".date_selector").remove(), new DateInput(this)
        }), $(document).on("click", ".js-date-input-clear", function() {
            return $("input.js-date-input").data("datePicker").resetDate(), !1
        }), $(document).on("change click", ".js-milestone-edit-form", function() {
            var e = this.querySelector(".js-milestone-edit-cancel");
            t(this) ? e.setAttribute("data-confirm", e.getAttribute("data-confirm-changes")) : e.removeAttribute("data-confirm")
        })
    }(),
    function() {
        var e;
        e = require("delegated-events"), e.on("pjax:clicked", ".js-directory-link", function() {
            return this.closest("tr").classList.add("is-loading"), document.body.classList.add("disables-context-loader")
        }), e.on("pjax:click", ".js-octicon-loaders a", function() {
            return this.classList.add("is-loading"), $(document).one("pjax:end", function(e) {
                return function() {
                    return e.classList.remove("is-loading")
                }
            }(this))
        })
    }.call(this),
    function() {
        function e(e) {
            return e.classList.contains("read") ? void 0 : (e.classList.toggle("unread"), e.classList.toggle("read"))
        }
        $(document).on("click", ".js-notification-target", function(t) {
            t.which > 1 || e(this.closest(".js-notification"))
        }), $(document).on("ajaxSuccess", ".js-delete-notification", function() {
            e(this.closest(".js-notification"))
        }), $(document).on("ajaxSuccess", ".js-mute-notification", function() {
            var t;
            e(this.closest(".js-notification")), t = this.closest(".js-notification"), t.classList.contains("muted") ? this.action = this.action.replace("unmute", "mute") : this.action = this.action.replace("mute", "unmute"), t.classList.toggle("muted")
        }), $(document).on("ajaxSuccess", ".js-unmute-notification", function() {
            var e;
            e = this.closest(".js-notification"), e.classList.contains("muted") ? this.action = this.action.replace("unmute", "mute") : this.action = this.action.replace("mute", "unmute"), e.classList.toggle("muted")
        }), $(document).on("ajaxSuccess", ".js-mark-visible-as-read", function() {
            var e, t, n, i, r, s, o;
            for (e = this.closest(".js-notifications-browser"), r = e.querySelectorAll(".unread"), n = 0, i = r.length; i > n; n++) t = r[n], t.classList.remove("unread"), t.classList.add("read");
            return null != (s = e.querySelector(".js-mark-visible-as-read")) && s.classList.add("mark-all-as-read-confirmed"), null != (o = e.querySelector(".js-mark-as-read-confirmation")) ? o.classList.add("mark-all-as-read-confirmed") : void 0
        }), $(document).on("ajaxSuccess", ".js-mark-remaining-as-read", function() {
            var e, t, n;
            return e = this.closest(".js-notifications-browser"), null != (t = e.querySelector(".js-mark-remaining-as-read")) && t.classList.add("hidden"), null != (n = e.querySelector(".js-mark-remaining-as-read-confirmation")) ? n.classList.remove("hidden") : void 0
        }), $(document).on("navigation:keydown", ".js-notification", function(e) {
            switch (e.hotkey) {
                case "I":
                case "e":
                case "y":
                    return $(this).find(".js-delete-notification").submit(), !1;
                case "M":
                case "m":
                    return $(this).find(".js-mute-notification").submit(), !1
            }
        }), $(document).on("navigation:keyopen", ".js-notification", function() {
            e(this)
        }), $(document).on("ajaxSend", ".js-notifications-subscription", function() {
            this.querySelector(".js-spinner").classList.remove("hidden")
        }), $(document).on("ajaxComplete", ".js-notifications-subscription", function() {
            this.querySelector(".js-spinner").classList.add("hidden")
        })
    }.call(this), $(document).on("ajaxSend", ".js-auto-subscribe-toggle", function() {
        $(this).find(".js-status-indicator").removeClass("status-indicator-success").removeClass("status-indicator-loading").addClass("status-indicator-loading")
    }), $(document).on("ajaxError", ".js-auto-subscribe-toggle", function() {
        $(this).find(".js-status-indicator").removeClass("status-indicator-loading").addClass("status-indicator-failed")
    }), $(document).on("ajaxSuccess", ".js-auto-subscribe-toggle", function() {
        $(this).find(".js-status-indicator").removeClass("status-indicator-loading").addClass("status-indicator-success")
    }), $(document).on("ajaxSend", ".js-unignore-form, .js-ignore-form", function() {
        $(this).closest(".js-subscription-row").addClass("loading")
    }), $(document).on("ajaxError", ".js-unignore-form, .js-ignore-form", function() {
        $(this).closest(".js-subscription-row").removeClass("loading"), $(this).find(".btn-sm").addClass("btn-danger").attr("title", "There was a problem unignoring this repo.")
    }), $(document).on("ajaxSuccess", ".js-unignore-form", function() {
        $(this).closest(".js-subscription-row").removeClass("loading").addClass("unsubscribed")
    }), $(document).on("ajaxSuccess", ".js-ignore-form", function() {
        $(this).closest(".js-subscription-row").removeClass("loading unsubscribed")
    }), $(document).on("ajaxSend", ".js-unsubscribe-form, .js-subscribe-form", function() {
        $(this).closest(".js-subscription-row").addClass("loading")
    }), $(document).on("ajaxError", ".js-unsubscribe-form, .js-subscribe-form", function() {
        $(this).closest(".js-subscription-row").removeClass("loading"), $(this).find(".btn-sm").addClass("btn-danger").attr("title", "There was a problem with unsubscribing :(")
    }), $(document).on("ajaxSuccess", ".js-unsubscribe-form", function() {
        $(this).closest(".js-subscription-row").removeClass("loading").addClass("unsubscribed")
    }), $(document).on("ajaxSuccess", ".js-subscribe-form", function() {
        $(this).closest(".js-subscription-row").removeClass("loading unsubscribed")
    }), $(document).on("ajaxSuccess", ".js-thread-subscription-status", function(e, t, n, i) {
        $(".js-thread-subscription-status").updateContent(i)
    }),
    function() {
        var e, t, n, i, r;
        t = require("delegated-events").fire, $(document).on("ajaxSend", ".js-toggler-container .js-set-approval-state", function() {
            return this.closest(".js-toggler-container").classList.add("loading")
        }), $(document).on("ajaxComplete", ".js-toggler-container .js-set-approval-state", function() {
            return this.closest(".js-toggler-container").classList.remove("loading")
        }), $(document).on("ajaxSuccess", ".js-toggler-container .js-set-approval-state", function() {
            return this.closest(".js-toggler-container").classList.add("on")
        }), $(document).on("ajaxSuccess", ".js-request-approval-facebox-form", function() {
            var e;
            return e = this.getAttribute("data-container-id"), document.getElementById(e).classList.add("on"), t(document, "facebox:close")
        }), r = function(e) {
            return e.querySelectorAll(".js-integrations-install-repo-picked .js-repository-picker-result").length
        }, e = function(e) {
            return r(e) > 0
        }, i = function(e) {
            var t;
            return (t = +e.getAttribute("data-max-repos")) ? r(e) >= t : void 0
        }, n = function(t) {
            var n;
            return n = t.querySelector(".js-all-repositories-radio"), n.checked || e(t)
        }, $.observe(".js-integrations-install-form", function() {
            var e, t, r, s, o, a;
            o = this, s = o.querySelector(".js-integrations-install-form-submit"), e = o.querySelector(".js-autocomplete"), r = e.getAttribute("data-search-url"), t = o.querySelector(".js-autocomplete-field"), a = function() {
                return s.disabled = !n(this), t.disabled = i(this), o.querySelector(".flash").classList.toggle("hidden", !i(this))
            }, this.addEventListener("change", a), a.call(this), $(document).on("click", ".js-repository-picker-remove", function() {
                var e;
                return e = this.closest(".js-repository-picker-result"), e.remove(), a.call(o)
            }), $(document).on("focus", ".js-integrations-install-repo-picker .js-autocomplete-field", function() {
                return document.querySelector(".js-select-repositories-radio").checked = !0, a.call(o)
            }), $(document).on("autocomplete:autocompleted:changed", ".js-integrations-install-repo-picker", function() {
                var t, n, i, s, o;
                for (o = r, s = document.querySelectorAll(".js-integrations-install-repo-picked .js-selected-repository-field"), n = 0, i = s.length; i > n; n++) t = s[n], o += ~o.indexOf("?") ? "&" : "?", o += t.name + "=" + encodeURIComponent(t.value);
                return e.setAttribute("data-search-url", o)
            }), $(document).on("autocomplete:result", ".js-integrations-install-repo-picker", function(e, n) {
                var i, r;
                return r = this.querySelector("#repo-result-" + n), i = o.querySelector(".js-integrations-install-repo-picked"), r.classList.remove("hidden"), i.insertBefore(r, i.firstChild), t.value = "", o.querySelector(".js-autocomplete-results").innerHTML = "", a.call(o)
            })
        })
    }.call(this),
    function() {
        $(document).on("submit", ".org form[data-results-container]", function() {
            return !1
        })
    }.call(this),
    function() {
        var e, t;
        t = require("github/fetch").fetchText, e = function() {
            return $(".js-invitation-toggle-team:checked").visible()
        }, $(document).on("click", ".js-invitations-team-suggestions-view-all", function() {
            return t(this.href).then(function(t) {
                return function(n) {
                    var i, r;
                    return r = e().map(function() {
                        return this.value
                    }), i = $(t).closest("ul"), i.html(n), r.each(function() {
                        return i.find(".js-invitation-toggle-team[value=" + this + "]").prop("checked", !0)
                    })
                }
            }(this)), !1
        })
    }.call(this), define("github/org-sidebar-stats", ["exports", "./number-helpers", "./inflector"], function(e, t, n) {
        function i(e) {
            var i = arguments.length <= 1 || void 0 === arguments[1] ? "+" : arguments[1],
                s = document.querySelector("." + e),
                o = s.parentNode.querySelector(".js-stat-label"),
                a = t.parseFormattedNumber(s.textContent),
                c = r(a, i);
            s.textContent = c, n.pluralizeNode(c, o)
        }

        function r(e, t) {
            switch (t) {
                case "+":
                    return e + 1;
                case "-":
                    return e - 1;
                default:
                    return e
            }
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.updateStat = i
    }),
    function() {
        var e, t, n, i, r, s;
        s = require("github/org-sidebar-stats").updateStat, r = require("setimmediate")["default"], e = [], t = function() {
            var e, t, n;
            return e = $(".js-person-grid"), t = e.find(".js-org-person").has(".js-org-person-toggle:checked"),
                function() {
                    var e, i, r;
                    for (r = [], e = 0, i = t.length; i > e; e++) n = t[e], r.push($(n).attr("data-id"));
                    return r
                }().sort()
        }, i = null, $(document).on("change", ".js-org-person-toggle", function(n) {
            var r, s, o, a;
            return r = $(".js-org-toolbar"), s = r.find(".js-member-selected-actions"), o = t(), a = o.length > 0, JSON.stringify(o) !== JSON.stringify(e) ? (e = o, r.find(".js-org-toolbar-select-all-label").toggleClass("has-selected-members", a), $(".js-member-not-selected-actions").toggleClass("hidden", a), s.toggleClass("hidden", !a), r.addClass("disabled"), null != i && i.abort(), i = $.ajax({
                url: s.attr("data-toolbar-actions-url"),
                data: {
                    member_ids: o
                }
            }), i.done(function(e, t, n) {
                return s.html(e)
            }), i.always(function() {
                return r.removeClass("disabled")
            })) : void 0
        }), $(document).on("click", ".js-member-remove-confirm-button", function(e) {
            return e.preventDefault(), $.facebox(function() {
                var n;
                return n = $.ajax({
                    url: $(e.target).attr("data-url"),
                    data: {
                        member_ids: t()
                    }
                }), n.done(function(e) {
                    return $.facebox(e)
                })
            })
        }), $(document).on("click", ".js-member-search-filter", function() {
            var e, t;
            return t = $(this).attr("data-filter"), e = $(".js-member-filter-field"), e.val(t + " "), e.focus(), e.trigger("throttled:input"), !1
        }), $(document).on("ajaxSend ajaxComplete", ".js-add-team-member-or-repo-form", function(e) {
            return this === e.target ? this.classList.toggle("is-sending", "ajaxSend" === e.type) : void 0
        }), n = navigator.userAgent.match(/Macintosh/) ? "meta" : "ctrl", $(document).onFocusedKeydown(".js-add-team-member-or-repo-form .js-autocomplete-field", function() {
            return function(e) {
                return "enter" === e.hotkey || e.hotkey === n + "+enter" ? e.preventDefault() : void 0
            }
        }), $(document).on("autocomplete:result", ".js-bulk-add-team-form .js-autocomplete-field", function(e) {
            var t, n;
            return n = $(this).data("autocompleted"), n.indexOf("/") > 0 ? (t = this.form.action, $.sudo().then(function() {
                return $.facebox(function() {
                    var e;
                    return e = $.ajax({
                        url: t,
                        method: "post",
                        data: {
                            member: n
                        }
                    }), e.done(function(e) {
                        return $.facebox(e)
                    })
                })
            }), e.stopPropagation()) : void 0
        }), $(document).on("autocomplete:result", ".js-add-team-member-or-repo-form", function() {
            return r(function(e) {
                return function() {
                    return $(e).submit()
                }
            }(this))
        }), $(document).on("ajaxSuccess", ".js-add-team-member-or-repo-form", function(e, t) {
            var n, i, r, o, a, c, u, l, d;
            try {
                l = JSON.parse(t.responseText)
            } catch (h) {}
            if (l ? (n = $(l.list_item_html), l.stat_count_class && s(l.stat_count_class, "+")) : n = $(t.responseText), i = $(".js-member-list"), this.querySelector(".js-autocomplete-field").value = "", d = n.attr("data-login"))
                for (u = i.children(), r = 0, a = u.length; a > r; r++)
                    if (o = u[r], o.getAttribute("data-login") === d) return;
            return i.prepend(n), c = !i.children().length, i.closest(".js-org-section").toggleClass("is-empty", c), i.siblings(".js-subnav").addClass("subnav-bordered")
        }), $(document).on("ajaxSuccess", ".js-remove-team-repository", function(e, t, n, i) {
            var r, o, a, c;
            return o = $(this), r = o.closest(".js-org-section"), a = r.find(".js-org-list"), o.closest(".js-org-repo").remove(), c = !a.children().length, r.toggleClass("is-empty", c), c && (a.removeClass("table-list-bordered"), a.siblings(".js-subnav").removeClass("subnav-bordered")), s("js-repositories-count", "-")
        }), $(document).on("ajaxError", ".js-add-team-member-or-repo-form, .js-remove-team-repository", function(e, t) {
            var n, i, r;
            if (!/<html/.test(t.responseText)) {
                i = $(".js-member-list").siblings(".js-blankslate");
                try {
                    r = JSON.parse(t.responseText), n = r.message_html
                } catch (s) {
                    n = $(t.responseText)
                }
                return $(".flash-messages").remove(), i.before(n), !1
            }
        })
    }.call(this),
    function() {
        $(document).on("click", ".js-remove-person-from-org-button", function(e) {
            var t;
            return e.preventDefault(), t = $(e.target), $.facebox(function() {
                var e;
                return e = $.ajax({
                    url: t.attr("data-url"),
                    data: {
                        member_ids: [t.attr("data-user-id")],
                        redirect_to_path: t.attr("data-redirect-to-path")
                    }
                }), e.done(function(e) {
                    return $.facebox(e)
                })
            })
        })
    }.call(this),
    function() {
        var e, t, n, i, r, s;
        t = require("github/debounce")["default"], $(document).on("change", ".js-customize-member-privileges-default-repository-permission-radio", function() {
            var e;
            return e = document.querySelector(".js-migrate-ability-list-item-default-repository-permission"), e.classList.toggle("migrate-ability-not-possible", n()), s()
        }), $(document).on("change", ".js-customize-member-privileges-repository-creation-radio", function() {
            var e;
            return e = document.querySelector(".js-migrate-ability-list-item-members-can-create-repositories"), e.classList.toggle("migrate-ability-not-possible", i()), s()
        }), $(document).on("change", ".js-customize-member-privileges-team-privacy-radio", function() {
            var e;
            return e = document.querySelector(".js-migrate-ability-list-item-team-privacy"), e.classList.toggle("migrate-ability-not-possible", r()), s()
        }), s = function() {
            var t;
            return t = document.querySelector(".js-save-member-privileges-button-container"), t.classList.toggle("member-privilege-radios-preserved", e())
        }, n = function() {
            return "" === document.querySelector(".js-customize-member-privileges-default-repository-permission-radio:checked").value
        }, i = function() {
            return "0" === document.querySelector(".js-customize-member-privileges-repository-creation-radio:checked").value
        }, r = function() {
            return "secret" === document.querySelector(".js-customize-member-privileges-team-privacy-radio:checked").value
        }, e = function() {
            return n() && i() && r()
        }, $(function() {
            var e, n, i, r, o, a, c, u, l;
            return a = document.querySelector(".js-org-migration-settings-sidebar"), null != a ? (c = a.getBoundingClientRect(), u = 16, l = c.top + window.pageYOffset - u, n = a.style.position, i = a.style.top, e = a.style.left, r = a.style.width, o = t(function() {
                var t, s;
                return t = a.parentNode.getBoundingClientRect(), s = t.right - c.width, window.pageYOffset >= l ? (a.style.position = "fixed", a.style.top = u + "px", a.style.left = s + "px", a.style.width = "250px") : (a.style.position = n, a.style.top = i, a.style.left = e, a.style.width = r)
            }, 5), window.addEventListener("scroll", o), window.addEventListener("resize", o), s()) : void 0
        })
    }.call(this),
    function() {
        var e, t;
        e = require("github/fetch").fetchText, $.observe(".js-rename-owners-team-input", function() {
            $(this).on("throttled:input", function() {
                var n, i, r;
                return n = this.form, i = this.value.trim().toLowerCase(), "owners" === i || "" === i ? t(!1, "") : (n.classList.add("is-sending"), r = new URL(this.getAttribute("data-check-url"), window.location.origin).toString(), r += -1 === r.indexOf("?") ? "?" : "&", r += "name=" + encodeURIComponent(i), e(r).then(function(e) {
                    var i;
                    return e = e.trim(), i = "" === e, n.classList.remove("is-sending"), t(i, e)
                }))
            })
        }), t = function(e, t) {
            return document.querySelector(".js-rename-owners-team-button").classList.toggle("disabled", !e), document.querySelector(".js-rename-owners-team-errors").innerHTML = t, document.querySelector(".js-rename-owners-team-note").classList.toggle("hidden", "" !== t)
        }
    }.call(this),
    function() {
        $(document).onFocusedInput(".js-new-organization-name", function() {
            var e;
            return (e = this.closest("dd").querySelector(".js-field-hint-name")) ? function() {
                return "innerText" in e ? e.innerText = this.value : e.textContent = this.value
            } : void 0
        }), $(document).on("ajaxSend", ".js-org-list-item .js-org-remove-item", function() {
            return this.closest(".js-org-list-item").classList.add("hidden")
        }), $(document).on("ajaxSuccess", ".js-org-list-item .js-org-remove-item", function() {
            return this.closest(".js-org-list-item").remove()
        }), $(document).on("ajaxError", ".js-org-list-item .js-org-remove-item", function() {
            var e;
            return this.closest(".js-org-list-item").classList.remove("hidden"), (e = this.getAttribute("data-error-message")) ? alert(e) : void 0
        })
    }.call(this),
    function() {
        var e, t;
        $(document).on("click", ".js-org-billing-plans .js-choose-plan", function(t) {
            return e($(this).closest(".js-plan-row")), !1
        }), e = function(e) {
            var n, i, r, s;
            return r = e.attr("data-name"), i = parseInt(e.attr("data-cost"), 10), n = parseInt(null != (s = e.attr("data-balance")) ? s : "0", 10), $(".js-org-billing-plans").find(".js-plan-row, .js-choose-plan").removeClass("selected"), e.find(".js-choose-plan").addClass("selected"), e.addClass("selected"), $(".js-plan").val(r), 0 === i && 0 === n ? $(".js-billing-section").addClass("has-removed-contents") : ($(".js-billing-section").removeClass("has-removed-contents"), null != e.attr("data-balance") ? t(r) : void 0)
        }, t = function(e) {
            return $(".js-plan-change-message").addClass("is-hidden"), $('.js-plan-change-message[data-name="' + e + '"]').removeClass("is-hidden")
        }, $(function() {
            return $(".selected .js-choose-plan").click()
        })
    }.call(this),
    function() {
        var e;
        e = function(e) {
            var t, n, i, r;
            n = e.selectors;
            for (i in n) r = n[i], $(i).text(r);
            return t = 100 === e.filled_seats_percent, $(".js-live-update-seats-percent").css("width", e.filled_seats_percent + "%"), $(".js-need-more-seats").toggleClass("hidden", !t), $(".js-add-team-member-or-repo-form").toggleClass("hidden", t)
        }, $(document).on("ajaxSuccess", ".js-per-seat-invite-field, .js-per-seat-invite .js-org-remove-item", function(t, n) {
            return e(JSON.parse(n.responseText))
        })
    }.call(this),
    function() {
        $(document).on("click", ".js-repo-search-filter", function() {
            var e, t, n, i, r;
            return t = $(this).attr("data-filter"), n = $(this).attr("data-negate"), e = $(".js-repo-filter-field"), i = e.val(), i.indexOf(n) > -1 && (i = i.replace(n, ""), i = i.replace(/^\s*/, "")), -1 === i.indexOf(t) && (r = i && i.match(/\s$/) ? "" : " ", e.val(i + ("" + r + t + " ")), e.focus(), e.trigger("throttled:input")), $("body").removeClass("menu-active"), !1
        }), $.observe(".js-repository-fallback-search", function() {
            $(this).on("keypress", function(e) {
                var t, n, i, r;
                if (13 === e.which) return t = $(this), n = t.attr("data-host"), i = t.attr("data-org"), r = t.val(), document.location = "http://" + n + "/search?q=user%3A" + i + "+" + r + "&type=Repositories"
            })
        }), $(document).on("click", ".js-team-repo-higher-access", function(e) {
            return e.preventDefault(), $.facebox(function() {
                var t;
                return t = $.ajax({
                    url: $(e.target).attr("data-url")
                }), t.done(function(e) {
                    return $.facebox(e)
                })
            })
        })
    }.call(this), $(document).on("selectmenu:selected", ".js-select-repo-permission", function() {
        return $(this).submit()
    }), $(document).on("ajaxSend", ".js-select-repo-permission", function() {
        return this.classList.remove("was-successful")
    }), $(document).on("ajaxSuccess", ".js-select-repo-permission", function(e, t, n, i) {
        var r;
        return this.classList.add("was-successful"), null != (r = this.closest(".js-org-repo")) ? r.classList.toggle("with-higher-access", i.members_with_higher_access) : void 0
    }),
    function() {
        $(document).on("click", ".js-change-default-repository-permission-confirm", function(e) {
            e.preventDefault(), $(document).find(".js-change-default-repository-permission-form").submit()
        })
    }.call(this),
    function() {
        $(document).on("autocomplete:autocompleted:changed", ".js-team-add-user-name", function(e) {
            var t;
            return t = $(".js-team-add-user-button")[0], t.disabled = !$(this).data("autocompleted")
        }), $(document).on("click", ".js-team-remove-user", function(e) {
            var t, n;
            return e.preventDefault(), $(".js-team-add-user-form").removeClass("hidden"), $(".js-team-add-user-name").focus(), t = $(this).closest("li").remove(), n = t.attr("data-login")
        }), $(document).on("click", ".js-team-add-user-button", function(e) {
            var t, n, i, r, s, o;
            if (e.preventDefault(), n = $(".js-team-add-user-name"), o = n.val(), o && n.data("autocompleted")) {
                for (n.val(""), s = $(".js-team-user-logins li"), t = 0, i = s.length; i > t; t++)
                    if (r = s[t], $(r).attr("data-login") === o) return;
                return $.sudo().then(function() {
                    return $.ajax({
                        url: $(".js-team-add-user-form").attr("data-template-url"),
                        data: {
                            member: o
                        },
                        success: function(e) {
                            return $(".js-team-user-logins").append(e), $(".js-login-field").prop("disabled", !1), $(".js-team-add-user-form").addClass("hidden")
                        }
                    }), $(".js-team-add-user-name").focus()
                })
            }
        })
    }.call(this),
    function() {
        $(document).on("ajaxSend", ".js-ldap-import-groups-container", function(e, t, n) {
            return t.setRequestHeader("X-Context", "import")
        }), $(document).on("autocomplete:autocompleted:changed", ".js-team-ldap-group-field", function(e) {
            var t;
            (t = this.closest(".js-ldap-group-adder")) && (t.classList.remove("is-exists"), t.querySelector(".js-ldap-group-adder-button").disabled = !$(this).data("autocompleted"))
        }), $(document).on("navigation:open", ".js-team-ldap-group-autocomplete-results .js-navigation-item", function() {
            var e, t;
            return e = $(this).closest(".js-ldap-group-adder"), t = $(this).attr("data-dn"), e.find(".js-team-ldap-dn-field").val(t), $(this).closest(".js-ldap-import-groups-container").find(".js-ldap-group-dn").map(function(n, i) {
                $(i).text() === t && (e.addClass("is-exists"), e[0].querySelector(".js-ldap-group-adder-button").disabled = !0)
            })
        }), $(document).on("ajaxSend", ".js-import-container", function(e, t, n) {
            this.classList.add("is-importing"), this.querySelector(".js-ldap-group-adder-button").disabled = !0
        }), $(document).on("ajaxComplete", ".js-import-container", function(e, t, n) {
            return $(this).removeClass("is-importing")
        }), $(document).on("ajaxSuccess", ".js-ldap-group-adder", function(e, t, n, i) {
            return $(this).closest(".js-ldap-import-groups-container").removeClass("is-empty").find(".js-ldap-imported-groups").prepend($(i)), this.reset(), $(this).find(".js-team-ldap-group-field").focus(), this.querySelector(".js-ldap-group-adder-button").disabled = !0, $(".js-import-form-actions").removeClass("hidden")
        }), $(document).on("submit", ".js-team-remove-group", function(e) {
            this.closest(".js-team").classList.add("is-removing"), document.querySelector(".js-team-ldap-group-field").focus()
        }), $(document).on("ajaxSuccess", ".js-team-remove-group", function() {
            this.closest(".js-team").remove(), document.querySelector(".js-team:not(.is-removing)") || (document.querySelector(".js-ldap-import-groups-container").classList.add("is-empty"), document.querySelector(".js-import-form-actions").classList.add("hidden"))
        }), $(document).on("ajaxError", ".js-team-remove-group", function() {
            this.closest(".js-team").classList.remove("is-removing")
        }), $(document).on("click", ".js-edit-team", function(e) {
            return $(this).closest(".js-team").hasClass("is-removing") ? !1 : (e.preventDefault(), $(this).closest(".js-team").addClass("is-editing"), $(this).closest(".js-team").find(".js-team-name-field").focus())
        }), $(document).on("click", ".js-save-button", function() {
            return $(this).hasClass("disabled") ? !1 : $(this).closest(".js-team").addClass("is-sending")
        }), $(document).on("click", ".js-cancel-team-edit", function(e) {
            var t, n;
            return e.preventDefault(), n = $(this).closest(".js-team").removeClass("is-editing"), t = n.find(".js-team-form").removeClass("is-exists"), t.find(".js-slug").text(t.find(".js-slug").attr("data-original-slug")), t[0].reset()
        }), $(document).on("ajaxSuccess", ".js-team-form:not(.is-checking)", function(e, t, n, i) {
            return t.nameCheck ? void 0 : $(this).closest(".js-team").removeClass("is-editing").replaceWith($(i))
        }), $(document).on("ajaxSuccess", ".js-team-form.is-checking", function(e, t, n, i) {
            var r, s;
            return r = $(this).removeClass("is-checking"), "function" == typeof(s = r.find(".js-team-name-field")).removeData && s.removeData("autocheck-xhr"), i.error ? (r.find(".js-save-button").addClass("disabled"), "exists" === i.error ? (r.addClass("is-exists"), r.find(".js-slug").html(i.slug)) : void 0) : (r.find(".js-slug").html(i.slug), r.find(".js-save-button").removeClass("disabled"))
        }), $(document).on("ajaxError", ".js-team-form", function(e, t, n, i) {
            return t.nameCheck && "abort" === t.statusText ? !1 : void 0
        }), $.observe(".js-team-name-field", function() {
            $(this).on("throttled:input", function() {
                var e, t, n, i;
                return t = $(this), e = t.closest(".js-team-form"), null != (n = t.data("autocheck-xhr")) && n.abort(), e.removeClass("is-exists").addClass("is-checking"), e.find(".js-save-button").addClass("disabled"), i = $.ajax({
                    url: t.attr("data-check-url"),
                    type: "GET",
                    context: this,
                    data: {
                        name: this.value
                    }
                }), i.nameCheck = !0, t.data("autocheck-xhr", i)
            })
        })
    }.call(this),
    function() {
        $(document).on("click", ".js-show-own-teams", function() {
            var e, t, n, i;
            return e = $(".js-team-search-field"), i = e.val(), n = $(this).attr("data-me"), -1 === i.indexOf("@" + n) && (t = i ? " " : "", e.val("" + i + t + "@" + n), e.focus(), e.trigger("throttled:input")), !1
        })
    }.call(this),
    function() {
        var e, t;
        t = require("github/fetch").fetchText, e = function(e) {
            var n, i, r;
            i = e.value.trim(), n = e.form, n.classList.add("is-sending"), n.classList.remove("is-name-check-fail"), n.classList.remove("is-name-check-success"), r = new URL(e.getAttribute("data-check-url"), window.location.origin).toString(), r += -1 === r.indexOf("?") ? "?" : "&", r += "name=" + encodeURIComponent(i), t(r).then(function(t) {
                var r, s, o, a, c;
                return n.classList.remove("is-sending"), n.querySelector(".js-team-name-errors").innerHTML = t || "", o = null != (a = e.getAttribute("data-original")) ? a.trim() : void 0, s = o && i === o, r = !!n.querySelector(".js-error"), c = (r || !i) && !s, n.querySelector(".js-create-team-button").disabled = c, n.classList.toggle("is-name-check-fail", r), n.classList.toggle("is-name-check-success", !r && i)
            })
        }, $.observe(".js-new-team", function() {
            $(this).on("throttled:input", function() {
                return e(this)
            })
        }), $.observe(".js-new-org-team", function() {
            var t;
            t = this.querySelector(".js-new-team"), t.value && e(t)
        })
    }.call(this),
    function() {
        var e, t, n;
        e = require("github/fetch").fetch, n = require("github/org-sidebar-stats").updateStat, t = require("delegated-events").fire, $(document).on("submit", ".js-remove-team-members-form", function() {
            return $.sudo().then(function(t) {
                return function() {
                    var i;
                    return i = $(t), e(i.attr("action"), {
                        method: "post",
                        body: i.serialize(),
                        headers: {
                            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
                        }
                    }).then(function() {
                        var e;
                        return e = i.closest(".js-org-section"), i.closest(".js-edit-team-member").remove(), e.toggleClass("is-empty", !e.find(".js-org-list").children().length), n("js-members-count", "-")
                    })
                }
            }(this)), !1
        }), $(document).on("click", ".js-team-description-toggle", function() {
            return $(".js-description-toggler").toggleClass("on")
        }), $(document).on("ajaxComplete", ".js-team-description-form", function() {
            var e;
            return e = $(".js-team-description-field").val(), $(".js-description-toggler").toggleClass("on"), e.trim() ? $(".js-team-description .description").text(e) : $(".js-team-description .description").html("<span class='link'>This team has no description</span>")
        }), $(document).on("ajaxSuccess", ".js-add-team-members-form", function(e, n, i, r) {
            var s;
            return s = $(document).find(".js-member-listings-container"), t(document, "facebox:close"), s.html(n.responseText)
        }), $(document).on("click", ".js-rename-owners-team-next-btn", function() {
            return document.querySelector(".js-rename-owners-team-about-content").classList.toggle("migrate-owners-content-hidden"), document.querySelector(".js-rename-owners-team-rename-form").classList.toggle("migrate-owners-content-hidden")
        })
    }.call(this),
    function() {
        $.observe(".js-org-transform-poller", function() {
            var e;
            e = this.getAttribute("data-redirect-url"), this.addEventListener("load", function() {
                return window.location.href = e
            })
        })
    }.call(this),
    function() {
        $(function() {
            var e;
            return $("#load-readme").click(function() {
                var t, n, i, r, s, o;
                return n = $("#gollum-editor-body"), t = $("#editor-body-buffer"), r = $("#undo-load-readme"), o = t.text(), e(n, t), i = $(this), i.prop("disabled", !0), i.text(i.attr("data-readme-name") + " loaded"), r.show(), s = function() {
                    return $(this).val() !== o && r.hide(), n.off("change keyup", s)
                }, n.on("change keyup", s), !1
            }), $("#undo-load-readme").click(function() {
                var t;
                return e($("#gollum-editor-body"), $("#editor-body-buffer")), t = $("#load-readme"), t.prop("disabled", !1), t.text("Load " + t.attr("data-readme-name")), $(this).hide(), !1
            }), e = function(e, t) {
                var n, i, r;
                return n = $(e), i = $(t), r = n.val(), n.val(i.text()), i.text(r)
            }
        })
    }.call(this),
    function() {
        function e(e, t) {
            var n = e.querySelector("table.timeline-commits > tbody"),
                i = t.querySelectorAll("table.timeline-commits > tbody > tr.commit");
            Array.from(i).forEach(function(e) {
                n.appendChild(e)
            }), t.remove()
        }
        var t = ".discussion-item.discussion-commits + .discussion-item.discussion-commits";
        $.observe(".discussion-item.discussion-commits", {
            add: function() {
                var n = document.querySelectorAll(t);
                Array.from(n).forEach(function(t) {
                    t.querySelector(".discussion-item-header") || e(t.previousElementSibling, t)
                })
            }
        })
    }(), $(document).on("click", ".js-merge-branch-action", function(e) {
        var t, n;
        n = $(this), t = n.closest(".js-merge-pr"), n.fire("details:toggle", {
            relatedTarget: e.target
        }, function() {}), t.performTransition(function() {
            this.toggleClass("open"), this.fire("details:toggled", {
                relatedTarget: e.target,
                async: !0
            })
        }), e.preventDefault()
    }),
    function() {
        $(document).on("details:toggled", ".js-pull-merging", function() {
            var e;
            e = $(this).find(".js-merge-pull-request"), e.toggleClass("is-dirty", e.is($.visible))
        }), $(document).on("ajaxSuccess", ".js-merge-pull-request", function(e, t, n, i) {
            var r, s, o;
            this.reset(), $(this).removeClass("is-dirty"), s = i.updateContent;
            for (o in s) r = s[o], $(o).updateContent(r)
        }), $(document).on("session:resume", function(e) {
            var t, n;
            (n = document.getElementById(e.targetId)) && (t = $(n).closest(".js-merge-pull-request"), t.closest(".js-details-container").addClass("open"))
        }), $(document).on("change", ".js-merge-method", function() {
            var e;
            e = this.closest(".js-merge-methods"), e.classList.toggle("is-squashing", "merge" !== this.value)
        }), $(document).on("change", ".js-merge-button-toggle", function() {
            var e, t, n, i, r, s;
            for (i = this.closest(".js-merge-pr"), r = !this.checked, s = i.querySelectorAll(".js-merge-commit-button"), t = 0, n = s.length; n > t; t++) e = s[t], e.disabled = r
        })
    }.call(this),
    function() {
        var e;
        e = require("github/fetch").fetchText, $(document).on("ajaxError", ".js-handle-pull-merging-errors", function(e, t) {
            var n, i, r;
            return n = this.closest(".js-pull-merging"), n.classList.add("is-error"), 422 === t.status && (r = t.responseText) && (i = n.querySelector(".js-pull-merging-error"), $(i).replaceWith(r)), !1
        }), $(document).on("click", ".js-pull-merging-refresh", function() {
            var t, n;
            return t = this.closest(".js-pull-merging"), n = t.getAttribute("data-url"), e(n).then(function(e) {
                return $(t).replaceWith(e)
            }), !1
        })
    }.call(this),
    function() {
        var e;
        $.observeLast(".pull-request-ref-restore", "last"), e = function() {
            var e;
            return e = $("#js-pull-restorable").length, $(".js-pull-discussion-timeline").toggleClass("is-pull-restorable", e)
        }, $.observe("#js-pull-restorable", {
            add: e,
            remove: e
        })
    }.call(this),
    function() {
        $(document).on("pjax:end", function() {
            return $(".js-pull-refresh-on-pjax").trigger("socket:message")
        })
    }.call(this),
    function() {
        var e, t, n, i, r, s, o, a, c;
        t = require("github/fetch").fetchJSON, r = require("github/history").replaceState, n = require("github/pjax"), $(document).on("click", ".js-timeline-tags-expander", function() {
            return $(this).closest(".js-timeline-tags").removeClass("is-collapsed")
        }), s = ["is-default", "is-saving", "is-saved", "is-failed"], o = function(e, t) {
            var n;
            return (n = e.classList).remove.apply(n, s), e.classList.add(t), e.disabled = "is-saving" === t
        }, $(document).on("click", ".js-save-draft", function() {
            var e, n, i, r;
            return e = this, r = e.closest("form"), r.querySelector("#release_draft").value = "1", n = function(t) {
                return o(e, "is-saved"), setTimeout(function() {
                    return o(e, "is-default");
                }, 5e3), r.dispatchEvent(new CustomEvent("release:saved", {
                    bubbles: !0,
                    cancelable: !1,
                    detail: {
                        release: t
                    }
                }))
            }, i = function() {
                return o(e, "is-failed")
            }, t(r.action, {
                method: r.method,
                body: $(r).serialize(),
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
                }
            }).then(n, i), o(e, "is-saving"), !1
        }), $(document).on("release:saved", ".js-release-form", function(e) {
            var t, s, o, a, c, u, l;
            return a = e.originalEvent.detail.release, o = this, u = o.getAttribute("data-repo-url"), l = i("tag", u, a.tag_name), s = i("edit", u, a.tag_name), o.setAttribute("action", l), r(n.getState(), document.title, s), (t = document.querySelector("#delete_release_confirm form")) && t.setAttribute("action", l), c = o.querySelector("#release_id"), c.value ? void 0 : (c.value = a.id, $(o).append('<input type="hidden" name="_method" value="put">'))
        }), $(document).on("click", ".js-publish-release", function(e) {
            return $("#release_draft").val("0")
        }), c = ["is-loading", "is-empty", "is-valid", "is-invalid", "is-duplicate", "is-pending"], a = function(e) {
            var t;
            switch (e) {
                case "is-valid":
                    $(".release-target-wrapper").addClass("hidden");
                    break;
                case "is-loading":
                    break;
                default:
                    $(".release-target-wrapper").removeClass("hidden")
            }
            return t = $(".js-release-tag"), t.removeClass(c.join(" ")), t.addClass(e)
        }, e = function(e) {
            return e.val() && e.val() !== e.data("last-checked") ? (a("is-loading"), $.ajax({
                url: e.attr("data-url"),
                type: "GET",
                data: {
                    tag_name: e.val()
                },
                dataType: "json",
                success: function(t) {
                    return "duplicate" === t.status && parseInt(e.attr("data-existing-id")) === parseInt(t.release_id) ? void a("is-valid") : ($(".js-release-tag .js-edit-release-link").attr("href", t.url), a("is-" + t.status))
                },
                error: function(e) {
                    return a("is-invalid")
                },
                complete: function() {
                    return e.data("last-checked", e.val())
                }
            })) : void 0
        }, i = function(e, t, n) {
            return t + "/releases/" + e + "/" + n
        }, $(document).on("blur", ".js-release-tag-field", function(t) {
            return e($(this))
        }), $.observe(".js-release-tag-field", function() {
            e($(this))
        }), $(document).on("change", ".js-release-tag", function() {
            var e, t, n, i, r, s, o, a, c;
            if (n = $(this), e = n.closest("form"), t = e.find(".js-previewable-comment-form"), t.length) {
                for (i = t.data("base-preview-url"), i || (i = t.attr("data-preview-url"), i += i.indexOf("?") >= 0 ? "&" : "?", t.data("base-preview-url", i)), r = [], c = n.find('input[name="release[tag_name]"], input[name="release[target_commitish]"]:checked'), s = 0, a = c.length; a > s; s++) o = c[s], o.value && r.push({
                    name: o.name,
                    value: o.value
                });
                return t.attr("data-preview-url", i + $.param(r))
            }
        }), $.observe(".js-release-form .js-previewable-comment-form", function() {
            $(this).closest("form").find(".js-release-tag").trigger("change")
        })
    }.call(this),
    function() {
        document.addEventListener("facebox:reveal", function() {
            var e;
            e = document.querySelector("#facebox .js-fork-select-fragment"), e && e.setAttribute("src", e.getAttribute("data-url"))
        })
    }.call(this),
    function() {
        var e;
        e = require("github/pjax"), $(document).on("change", ".js-pulse-period", function(t) {
            var n;
            return n = $(t.target).attr("data-url"), e["default"]({
                url: n,
                container: "#js-repo-pjax-container"
            })
        })
    }.call(this),
    function() {
        var e, t, n = function(e, t) {
            return function() {
                return e.apply(t, arguments)
            }
        };
        t = require("delegated-events"), e = function() {
            function e() {
                this.validate = n(this.validate, this), this.updateUpsell = n(this.updateUpsell, this), this.selectedPrivacyToggleElement = n(this.selectedPrivacyToggleElement, this), this.handlePrivacyChange = n(this.handlePrivacyChange, this), this.handleOwnerChange = n(this.handleOwnerChange, this), this.elements = {
                    $ownerContainer: $(".js-owner-container"),
                    $iconPreviewPublic: $(".js-icon-preview-public"),
                    $iconPreviewPrivate: $(".js-icon-preview-private"),
                    $upgradeUpsell: $("#js-upgrade-container").hide(),
                    $upgradeConfirmationCheckbox: $(".js-confirm-upgrade"),
                    $upsells: $(".js-upgrade"),
                    $privacyToggles: $(".js-privacy-toggle"),
                    $privateRadio: $(".js-privacy-toggle[value=false]"),
                    $publicRadio: $(".js-privacy-toggle[value=true]"),
                    $repoNameField: $("input[type=text].js-repo-name"),
                    $form: $("#new_repository"),
                    $licenseContainer: $(".js-license-container"),
                    $suggestion: $(".js-reponame-suggestion")
                }, this.current_login = $("input[name=owner]:checked").prop("value"), this.privateRepo = !1, this.changedPrivacyManually = !1, this.elements.$ownerContainer.on("change", "input[type=radio]", this.handleOwnerChange), this.elements.$privacyToggles.on("change", function(e) {
                    return function(t) {
                        return e.handlePrivacyChange(t.targetElement, t)
                    }
                }(this)), this.elements.$upgradeUpsell.on("change input", "input", this.validate), this.elements.$form.on("repoform:validate", this.validate), this.elements.$suggestion.on("click", function(e) {
                    return function(t) {
                        var n;
                        return n = e.elements.$repoNameField, n.val($(t.target).text()), n.trigger("change")
                    }
                }(this)), this.handleOwnerChange(), this.validate()
            }
            return e.prototype.handleOwnerChange = function() {
                var e;
                return this.current_login = $("input[name=owner]:checked").prop("value"), this.elements.$repoNameField.trigger("change"), e = this.elements.$ownerContainer.find(".select-menu-item.selected"), this.changedPrivacyManually || ("private" === e.attr("data-default") ? this.elements.$privateRadio.prop("checked", "checked").change() : this.elements.$publicRadio.prop("checked", "checked").change()), "yes" === e.attr("data-permission") ? ($(".with-permission-fields").show(), $(".without-permission-fields").hide(), $(".errored").show(), $("dl.warn").show()) : ($(".with-permission-fields").hide(), $(".without-permission-fields").show(), $(".errored").hide(), $("dl.warn").hide()), this.updateUpsell(), this.handlePrivacyChange()
            }, e.prototype.handlePrivacyChange = function(e, t) {
                var n;
                return null == e && (e = this.selectedPrivacyToggleElement()), null == t && (t = null), t && !t.isTrigger && (this.changedPrivacyManually = !0), n = this.elements.$upgradeUpsell.find(".js-billing-section"), "false" === e.val() ? (this.privateRepo = !0, this.elements.$upgradeUpsell.show(), n.removeClass("has-removed-contents"), this.elements.$upgradeUpsell.find("input[type=checkbox]").prop("checked", "checked"), this.elements.$iconPreviewPublic.hide(), this.elements.$iconPreviewPrivate.show()) : (this.privateRepo = !1, this.elements.$upgradeUpsell.hide(), n.addClass("has-removed-contents"), this.elements.$upgradeUpsell.find("input[type=checkbox]").prop("checked", null), this.elements.$form.attr("action", this.elements.$form.attr("data-url")), this.elements.$iconPreviewPrivate.hide(), this.elements.$iconPreviewPublic.show()), this.validate()
            }, e.prototype.selectedPrivacyToggleElement = function() {
                return this.elements.$privateRadio.is(":checked") ? this.elements.$privateRadio : this.elements.$publicRadio
            }, e.prototype.updateUpsell = function() {
                var e;
                return e = this.elements.$upsells.filter("[data-login=" + this.current_login + "]"), this.elements.$upgradeUpsell.html(e)
            }, e.prototype.validate = function() {
                var e, t;
                return t = !0, this.elements.$repoNameField.is(".is-autocheck-successful") || (t = !1), e = this.elements.$upgradeUpsell.find("input[type=checkbox]"), this.privateRepo && e.length && !e.is(":checked") && (t = !1), this.elements.$form.find("button.primary").prop("disabled", !t)
            }, e
        }(), $(function() {
            return $(".page-new-repo").length ? new e : void 0
        }), t.on("autocheck:send", "#repository_name", function(e) {
            var t, n, i;
            n = e.detail, t = $(this), i = t.closest("form").find("input[name=owner]:checked").val(), n.owner = i, t.trigger("repoform:validate")
        }), t.on("autocheck:complete", "#repository_name", function() {
            return $(this).trigger("repoform:validate")
        }), t.on("autocheck:success", "#repository_name", function(e) {
            var t, n, i, r;
            (r = null != (n = e.detail) ? n.trim() : void 0) && (t = this.closest("dl.form"), t.classList.add("warn"), i = document.createElement("dd"), i.classList.add("warning"), i.innerHTML = r, t.append(i))
        })
    }(),
    function() {
        document.addEventListener("pjax:end", function() {
            var e, t, n, i, r, s, o, a, c, u, l;
            if (l = $(document.head).find("meta[name='selected-link']").attr("value"), null != l)
                for (n = $(".js-sidenav-container-pjax .js-selected-navigation-item").removeClass("selected"), e = 0, r = n.length; r > e; e++)
                    for (t = n[e], a = null != (c = $(t).attr("data-selected-links")) ? c : "", u = a.split(" "), i = 0, s = u.length; s > i; i++) o = u[i], o === l && $(t).addClass("selected")
        })
    }.call(this), $(document).on("socket:message", ".js-repository-import-channel", function(e, t) {
        $(e.target).text(JSON.stringify(t, void 0, 2))
    }),
    function() {
        var e, t, n, i;
        e = require("github/fetch").fetch, n = function() {
            return document.body.classList.add("is-sending"), document.body.classList.remove("is-sent", "is-not-sent")
        }, i = function() {
            return document.body.classList.add("is-sent"), document.body.classList.remove("is-sending")
        }, t = function(e) {
            return e && (document.querySelector(".js-sms-error").textContent = e), document.body.classList.add("is-not-sent"), document.body.classList.remove("is-sending")
        }, $(document).on("ajaxSend", ".js-send-auth-code", function() {
            n()
        }), $(document).on("ajaxSuccess", ".js-send-auth-code", function() {
            i()
        }), $(document).on("ajaxError", ".js-send-auth-code", function(e, n) {
            t(n.responseText)
        }), $(document).on("click", ".js-send-two-factor-code", function() {
            var r, s, o, a, c, u;
            o = this.form, r = o.querySelector(".js-country-code-select").value, c = o.querySelector(".js-sms-number").value, a = r + " " + c, u = o.querySelector(".js-two-factor-secret").value, n(), s = new FormData, s.append("number", a), s.append("two_factor_secret", u), s.append("authenticity_token", o.elements.authenticity_token.value), e(this.getAttribute("data-url"), {
                method: "post",
                body: s
            }).then(function() {
                var e, t, n, r;
                for (i(), r = o.querySelectorAll(".js-2fa-enable"), t = 0, n = r.length; n > t; t++) e = r[t], e.disabled = !1;
                return o.querySelector(".js-2fa-otp").focus()
            })["catch"](function(e) {
                var n, i, r, s, a, c;
                for (null != (s = e.response) && s.text().then(t), a = o.querySelectorAll(".js-2fa-enable"), c = [], i = 0, r = a.length; r > i; i++) n = a[i], c.push(n.disabled = !0);
                return c
            })
        }), document.addEventListener("facebox:loading", function() {
            "/settings/two_factor_authentication/configure" === window.location.pathname && ($(".js-configure-sms-fallback .facebox-alert").text("").hide(), $(".js-configure-sms-fallback").show(), $(".js-verify-sms-fallback").hide())
        }), $(document).on("ajaxSuccess", ".js-two-factor-set-sms-fallback", function(e, t) {
            switch (t.status) {
                case 200:
                case 201:
                    return window.location.reload();
                case 202:
                    return $(".js-configure-sms-fallback").hide(), $(".js-verify-sms-fallback").show(), $(".js-fallback-otp").focus()
            }
        }), $(document).on("ajaxError", ".js-two-factor-set-sms-fallback", function(e, t) {
            switch (t.status) {
                case 422:
                    return window.location.reload();
                case 429:
                    return $(".js-configure-sms-fallback .facebox-alert").text(t.responseText).show(), !1
            }
        })
    }.call(this),
    function() {
        if (!("u2f" in window) && "chrome" in window) {
            var e, t = window.u2f = {};
            t.EXTENSION_ID = "kmendfapggjehodndflmmgagdbamhnfd", t.MessageTypes = {
                U2F_REGISTER_REQUEST: "u2f_register_request",
                U2F_REGISTER_RESPONSE: "u2f_register_response",
                U2F_SIGN_REQUEST: "u2f_sign_request",
                U2F_SIGN_RESPONSE: "u2f_sign_response",
                U2F_GET_API_VERSION_REQUEST: "u2f_get_api_version_request",
                U2F_GET_API_VERSION_RESPONSE: "u2f_get_api_version_response"
            }, t.ErrorCodes = {
                OK: 0,
                OTHER_ERROR: 1,
                BAD_REQUEST: 2,
                CONFIGURATION_UNSUPPORTED: 3,
                DEVICE_INELIGIBLE: 4,
                TIMEOUT: 5
            }, t.U2fRequest, t.U2fResponse, t.Error, t.Transport, t.Transports, t.SignRequest, t.SignResponse, t.RegisterRequest, t.RegisterResponse, t.RegisteredKey, t.GetJsApiVersionResponse, t.getMessagePort = function(e) {
                if ("undefined" != typeof chrome && chrome.runtime) {
                    var n = {
                        type: t.MessageTypes.U2F_SIGN_REQUEST,
                        signRequests: []
                    };
                    chrome.runtime.sendMessage(t.EXTENSION_ID, n, function() {
                        chrome.runtime.lastError ? t.getIframePort_(e) : t.getChromeRuntimePort_(e)
                    })
                } else t.isAndroidChrome_() ? t.getAuthenticatorPort_(e) : t.isIosChrome_() ? t.getIosPort_(e) : t.getIframePort_(e)
            }, t.isAndroidChrome_ = function() {
                var e = navigator.userAgent;
                return -1 != e.indexOf("Chrome") && -1 != e.indexOf("Android")
            }, t.isIosChrome_ = function() {
                return $.inArray(navigator.platform, ["iPhone", "iPad", "iPod"]) > -1
            }, t.getChromeRuntimePort_ = function(e) {
                var n = chrome.runtime.connect(t.EXTENSION_ID, {
                    includeTlsChannelId: !0
                });
                setTimeout(function() {
                    e(new t.WrappedChromeRuntimePort_(n))
                }, 0)
            }, t.getAuthenticatorPort_ = function(e) {
                setTimeout(function() {
                    e(new t.WrappedAuthenticatorPort_)
                }, 0)
            }, t.getIosPort_ = function(e) {
                setTimeout(function() {
                    e(new t.WrappedIosPort_)
                }, 0)
            }, t.WrappedChromeRuntimePort_ = function(e) {
                this.port_ = e
            }, t.formatSignRequest_ = function(n, i, r, s, o) {
                if (void 0 === e || 1.1 > e) {
                    for (var a = [], c = 0; c < r.length; c++) a[c] = {
                        version: r[c].version,
                        challenge: i,
                        keyHandle: r[c].keyHandle,
                        appId: n
                    };
                    return {
                        type: t.MessageTypes.U2F_SIGN_REQUEST,
                        signRequests: a,
                        timeoutSeconds: s,
                        requestId: o
                    }
                }
                return {
                    type: t.MessageTypes.U2F_SIGN_REQUEST,
                    appId: n,
                    challenge: i,
                    registeredKeys: r,
                    timeoutSeconds: s,
                    requestId: o
                }
            }, t.formatRegisterRequest_ = function(n, i, r, s, o) {
                if (void 0 === e || 1.1 > e) {
                    for (var a = 0; a < r.length; a++) r[a].appId = n;
                    for (var c = [], a = 0; a < i.length; a++) c[a] = {
                        version: i[a].version,
                        challenge: r[0],
                        keyHandle: i[a].keyHandle,
                        appId: n
                    };
                    return {
                        type: t.MessageTypes.U2F_REGISTER_REQUEST,
                        signRequests: c,
                        registerRequests: r,
                        timeoutSeconds: s,
                        requestId: o
                    }
                }
                return {
                    type: t.MessageTypes.U2F_REGISTER_REQUEST,
                    appId: n,
                    registerRequests: r,
                    registeredKeys: i,
                    timeoutSeconds: s,
                    requestId: o
                }
            }, t.WrappedChromeRuntimePort_.prototype.postMessage = function(e) {
                this.port_.postMessage(e)
            }, t.WrappedChromeRuntimePort_.prototype.addEventListener = function(e, t) {
                var n = e.toLowerCase();
                "message" == n || "onmessage" == n ? this.port_.onMessage.addListener(function(e) {
                    t({
                        data: e
                    })
                }) : console.error("WrappedChromeRuntimePort only supports onMessage")
            }, t.WrappedAuthenticatorPort_ = function() {
                this.requestId_ = -1, this.requestObject_ = null
            }, t.WrappedAuthenticatorPort_.prototype.postMessage = function(e) {
                var n = t.WrappedAuthenticatorPort_.INTENT_URL_BASE_ + ";S.request=" + encodeURIComponent(JSON.stringify(e)) + ";end";
                document.location = n
            }, t.WrappedAuthenticatorPort_.prototype.getPortType = function() {
                return "WrappedAuthenticatorPort_"
            }, t.WrappedAuthenticatorPort_.prototype.addEventListener = function(e, t) {
                var n = e.toLowerCase();
                if ("message" == n) {
                    var i = this;
                    window.addEventListener("message", i.onRequestUpdate_.bind(i, t), !1)
                } else console.error("WrappedAuthenticatorPort only supports message")
            }, t.WrappedAuthenticatorPort_.prototype.onRequestUpdate_ = function(e, t) {
                var n = JSON.parse(t.data),
                    i = (n.intentURL, n.errorCode, null);
                n.hasOwnProperty("data") && (i = JSON.parse(n.data)), e({
                    data: i
                })
            }, t.WrappedAuthenticatorPort_.INTENT_URL_BASE_ = "intent:#Intent;action=com.google.android.apps.authenticator.AUTHENTICATE", t.WrappedIosPort_ = function() {}, t.WrappedIosPort_.prototype.postMessage = function(e) {
                var t = JSON.stringify(e),
                    n = "u2f://auth?" + encodeURI(t);
                location.replace(n)
            }, t.WrappedIosPort_.prototype.getPortType = function() {
                return "WrappedIosPort_"
            }, t.WrappedIosPort_.prototype.addEventListener = function(e, t) {
                var n = e.toLowerCase();
                "message" !== n && console.error("WrappedIosPort only supports message")
            }, t.getIframePort_ = function(e) {
                var n = "chrome-extension://" + t.EXTENSION_ID,
                    i = document.createElement("iframe");
                i.src = n + "/u2f-comms.html", i.setAttribute("style", "display:none"), document.body.appendChild(i);
                var r = new MessageChannel,
                    s = function(t) {
                        "ready" == t.data ? (r.port1.removeEventListener("message", s), e(r.port1)) : console.error('First event on iframe port was not "ready"')
                    };
                r.port1.addEventListener("message", s), r.port1.start(), i.addEventListener("load", function() {
                    i.contentWindow.postMessage("init", n, [r.port2])
                })
            }, t.EXTENSION_TIMEOUT_SEC = 30, t.port_ = null, t.waitingForPort_ = [], t.reqCounter_ = 0, t.callbackMap_ = {}, t.getPortSingleton_ = function(e) {
                t.port_ ? e(t.port_) : (0 == t.waitingForPort_.length && t.getMessagePort(function(e) {
                    for (t.port_ = e, t.port_.addEventListener("message", t.responseHandler_); t.waitingForPort_.length;) t.waitingForPort_.shift()(t.port_)
                }), t.waitingForPort_.push(e))
            }, t.responseHandler_ = function(e) {
                var n = e.data,
                    i = n.requestId;
                if (!i || !t.callbackMap_[i]) return void console.error("Unknown or missing requestId in response.");
                var r = t.callbackMap_[i];
                delete t.callbackMap_[i], r(n.responseData)
            }, t.sign = function(n, i, r, s, o) {
                void 0 === e ? t.getApiVersion(function(a) {
                    e = void 0 === a.js_api_version ? 0 : a.js_api_version, console.log("Extension JS API Version: ", e), t.sendSignRequest(n, i, r, s, o)
                }) : t.sendSignRequest(n, i, r, s, o)
            }, t.sendSignRequest = function(e, n, i, r, s) {
                t.getPortSingleton_(function(o) {
                    var a = ++t.reqCounter_;
                    t.callbackMap_[a] = r;
                    var c = "undefined" != typeof s ? s : t.EXTENSION_TIMEOUT_SEC,
                        u = t.formatSignRequest_(e, n, i, c, a);
                    o.postMessage(u)
                })
            }, t.register = function(n, i, r, s, o) {
                void 0 === e ? t.getApiVersion(function(a) {
                    e = void 0 === a.js_api_version ? 0 : a.js_api_version, console.log("Extension JS API Version: ", e), t.sendRegisterRequest(n, i, r, s, o)
                }) : t.sendRegisterRequest(n, i, r, s, o)
            }, t.sendRegisterRequest = function(e, n, i, r, s) {
                t.getPortSingleton_(function(o) {
                    var a = ++t.reqCounter_;
                    t.callbackMap_[a] = r;
                    var c = "undefined" != typeof s ? s : t.EXTENSION_TIMEOUT_SEC,
                        u = t.formatRegisterRequest_(e, i, n, c, a);
                    o.postMessage(u)
                })
            }, t.getApiVersion = function(e, n) {
                t.getPortSingleton_(function(i) {
                    if (i.getPortType) {
                        var r;
                        switch (i.getPortType()) {
                            case "WrappedIosPort_":
                            case "WrappedAuthenticatorPort_":
                                r = 1.1;
                                break;
                            default:
                                r = 0
                        }
                        return void e({
                            js_api_version: r
                        })
                    }
                    var s = ++t.reqCounter_;
                    t.callbackMap_[s] = e;
                    var o = {
                        type: t.MessageTypes.U2F_GET_API_VERSION_REQUEST,
                        timeoutSeconds: "undefined" != typeof n ? n : t.EXTENSION_TIMEOUT_SEC,
                        requestId: s
                    };
                    i.postMessage(o)
                })
            }
        }
    }(),
    function() {
        var e, t, n, i, r = [].slice;
        t = require("github/feature-detection")["default"], (e = document.querySelector(".js-u2f-auth-form-body")) && (e.classList.toggle("unavailable", !t.u2f), t.u2f && (n = function() {
            var e;
            return e = 1 <= arguments.length ? r.call(arguments, 0) : [], new Promise(function(t, n) {
                return u2f.sign.apply(u2f, r.call(e).concat([function(e) {
                    var i;
                    return null != e.errorCode && 0 !== e.errorCode ? (i = new Error("Signing request failed"), i.code = e.errorCode, n(i)) : t(e)
                }]))
            })
        }, i = function() {
            var e, t, i, r, s, o, a, c, u;
            for (a = document.querySelectorAll(".js-u2f-error"), s = 0, o = a.length; o > s; s++) i = a[s], i.classList.add("hidden");
            return document.querySelector(".js-u2f-login-waiting").classList.remove("hidden"), r = document.querySelector(".js-u2f-auth-form"), c = r.querySelector(".js-u2f-auth-response"), e = r.getAttribute("data-app-id"), t = r.getAttribute("data-challenge"), u = JSON.parse(r.getAttribute("data-sign-requests")), n(e, t, u).then(function(e) {
                return c.value = JSON.stringify(e), r.submit()
            })["catch"](function(e) {
                var t;
                return t = function() {
                    switch (e.code) {
                        case 4:
                            return ".js-u2f-auth-not-registered-error";
                        case 5:
                            return ".js-u2f-auth-timeout";
                        default:
                            return ".js-u2f-auth-error"
                    }
                }(), document.querySelector(t).classList.remove("hidden"), document.querySelector(".js-u2f-login-waiting").classList.add("hidden")
            })
        }, $(document).on("click", ".js-u2f-auth-retry", function() {
            i()
        }), $.observe(".js-u2f-auth-form", function() {
            i()
        })))
    }.call(this),
    function() {
        var e;
        e = function(e) {
            var t;
            return t = $(".js-hosted-account-linker-hosted"), t.toggleClass("hidden", "tenant" !== e.value)
        }, $(document).on("change", ".js-hosted-account-linker", function() {
            return e(this)
        }), $(function() {
            var t;
            return (t = $(".js-hosted-account-linker:checked")[0]) ? e(t) : void 0
        })
    }.call(this),
    function() {
        $(document).on("ajaxSuccess", ".js-saved-reply-delete", function() {
            var e = this.closest(".js-saved-reply-container"),
                t = e.querySelectorAll(".js-saved-reply-list-item").length;
            e.classList.toggle("has-replies", t > 1), this.closest(".js-saved-reply-list-item").remove()
        })
    }(),
    function() {
        var e;
        e = require("delegated-events").fire, $.observe(".js-email-global-unsubscribe-form", function() {
            this.querySelector(".js-email-global-unsubscribe-submit").disabled = !0
        }), $(document).on("change", ".js-email-global-unsubscribe-form", function() {
            var e, t;
            return e = function() {
                var e, n, i, r;
                for (i = this.querySelectorAll(".js-email-global-unsubscribe"), r = [], e = 0, n = i.length; n > e; e++) t = i[e], t.checked && r.push(t);
                return r
            }.call(this), this.querySelector(".js-email-global-unsubscribe-submit").disabled = e[0].defaultChecked
        }), $(document).on("ajaxSend", ".js-remove-ssh-key", function(e) {
            return $(this).addClass("disabled").find("span").text("Deleting\u2026")
        }), $(document).on("ajaxError", ".js-remove-ssh-key", function(e) {
            return $(this).removeClass("disabled").find("span").text("Error. Try again.")
        }), $(document).on("ajaxSuccess", ".js-remove-ssh-key", function(e) {
            return $(this).closest("li").remove(), 0 === $(".js-ssh-keys-box li").length ? $(".js-ssh-keys-container").removeClass("has-keys") : void 0
        }), $(document).on("ajaxSend", ".js-remove-gpg-key", function(e) {
            return $(this).addClass("disabled").find("span").text("Deleting\u2026")
        }), $(document).on("ajaxError", ".js-remove-gpg-key", function(e) {
            return $(this).removeClass("disabled").find("span").text("Error. Try again.")
        }), $(document).on("ajaxSuccess", ".js-remove-gpg-key", function(e) {
            return $(this).closest("li").remove(), 0 === $(".js-gpg-keys-box li").length ? $(".js-gpg-keys-container").removeClass("has-keys") : void 0
        }), $(document).on("ajaxSend", ".js-verify-ssh-key", function(e) {
            return $(this).addClass("disabled").find("span").text("Verifying\u2026")
        }), $(document).on("ajaxError", ".js-verify-ssh-key", function(e) {
            return $(this).removeClass("disabled").find("span").text("Error. Try again.")
        }), $(document).on("ajaxSuccess", ".js-verify-ssh-key", function(e) {
            var t;
            return t = this.closest("li"), t.querySelector(".js-unverified-user-key-notice").remove(), t.querySelector(".js-user-key-icon").classList.remove("unverified-user-key"), this.remove()
        }), $(document).on("ajaxSuccess", ".js-leave-collaborated-repo", function(e) {
            var t, n;
            t = e.target.getAttribute("data-repo-id"), n = document.querySelector(".js-collab-repo[data-repo-id='" + t + "']"), n.remove(), $.facebox.close()
        }), $(document).on("ajaxSuccess", ".js-newsletter-unsubscribe-form", function() {
            var e, t, n, i, r;
            for (i = document.querySelectorAll(".js-newsletter-unsubscribe-message"), r = [], t = 0, n = i.length; n > t; t++) e = i[t], r.push(e.classList.toggle("hidden"));
            return r
        }), $(document).on("click", ".js-show-new-ssh-key-form", function() {
            return $(".js-new-ssh-key-box").toggle().find(".js-ssh-key-title").focus(), !1
        }), $(document).on("click", ".js-show-new-gpg-key-form", function() {
            return $(".js-new-gpg-key-box").toggle().find(".js-gpg-key-public_key").focus(), !1
        }), $(document).on("ajaxSuccess", ".js-revoke-access-form", function() {
            var e, t, n;
            e = this.getAttribute("data-id"), n = this.getAttribute("data-type-name"), t = document.querySelector(".js-revoke-item[data-type='" + n + "'][data-id='" + e + "']"), $.facebox.close(), t.remove(), t.classList.contains("new-token") && document.querySelector(".js-flash-new-token").remove()
        }), $(document).on("click", ".js-delete-oauth-application-image", function() {
            var e, t;
            return e = $(this).closest(".js-uploadable-container"), t = e.closest("form"), t.append('<input name="oauth_application[logo_id]" type="hidden" value="">'), t.append('<input name="_method" type="hidden" value="put">'), t.submit(), !1
        }), $(document).on("click", ".js-new-callback", function(e) {
            var t, n;
            return e.preventDefault(), t = $(e.currentTarget).closest(".js-callback-urls"), n = t.find(".js-callback-url").first().clone(), n.removeClass("is-default-callback"), n.find("input").val(""), t.addClass("has-many"), $(e.currentTarget).before(n)
        }), $(document).on("click", ".js-delete-callback", function(e) {
            var t, n;
            return e.preventDefault(), t = $(e.currentTarget).closest(".js-callback-urls"), $(e.currentTarget).closest(".js-callback-url").remove(), n = t.find(".js-callback-url"), n.length <= 1 ? t.removeClass("has-many") : void 0
        }), $(document).on("click", ".js-oauth-application-whitelist .js-deny-this-request", function(e) {
            return $(e.currentTarget).siblings("#state").val("denied"), $(e.currentTarget).closest(".js-org-application-access-form").submit()
        }), $(document).on("ajaxSuccess", ".js-org-application-access-form", function(e, t, n, i) {
            return window.location.reload()
        }), $(document).on("click", ".js-user-rename-warning-continue", function() {
            var e, t, n, i, r;
            for (i = document.querySelectorAll(".js-user-rename-warning, .js-user-rename-form"), r = [], t = 0, n = i.length; n > t; t++) e = i[t], r.push(e.classList.toggle("hidden"));
            return r
        }), $(document).on("change", ".js-checkbox-scope", function() {
            var e, t, n, i, r, s;
            for (i = this.closest(".js-check-scope-container"), r = i.querySelectorAll(".js-checkbox-scope"), s = [], t = 0, n = r.length; n > t; t++) e = r[t], e !== this ? (e.checked = this.checked, s.push(e.disabled = this.checked)) : s.push(void 0);
            return s
        }), $(document).on("click", ".js-generate-integration-key", function() {
            var t;
            return e(document, "facebox:close"), t = document.querySelector(".js-integration-key-management-wrapper"), t.classList.add("downloading")
        })
    }.call(this),
    function() {
        var e, t, n, i, r, s, o, a, c, u, l, d, h, f, m, p = [].slice;
        r = require("github/feature-detection")["default"], s = require("github/fetch").fetchJSON, h = function() {
            var e;
            return e = 1 <= arguments.length ? p.call(arguments, 0) : [], new Promise(function(t, n) {
                return u2f.register.apply(u2f, p.call(e).concat([function(e) {
                    var i;
                    return null != e.errorCode && 0 !== e.errorCode ? (i = new Error("Device registration failed"), i.code = e.errorCode, n(i)) : t(e)
                }]))
            })
        }, (n = document.querySelector(".js-u2f-box")) && (n.classList.toggle("available", r.u2f), a = function(e, t, n) {
            return null != n ? e.setAttribute(t, JSON.stringify(n)) : JSON.parse(e.getAttribute(t))
        }, d = function(e) {
            var t;
            return t = document.querySelector(".js-add-u2f-registration-form"), a(t, "data-sign-requests", e)
        }, c = function(e) {
            var t;
            return t = document.querySelector(".js-add-u2f-registration-form"), a(t, "data-register-requests", e)
        }, o = document.querySelector(".js-add-u2f-registration-form"), e = o.getAttribute("data-app-id"), f = function(e) {
            return e.register_requests && c(e.register_requests), e.sign_requests ? d(e.sign_requests) : void 0
        }, $(document).on("ajaxSend", ".js-u2f-registration-delete", function() {
            return this.closest(".js-u2f-registration").classList.add("is-sending")
        }), $(document).on("ajaxSuccess", ".js-u2f-registration-delete", function(e, t) {
            return f(t.responseJSON), this.closest(".js-u2f-registration").remove()
        }), $(document).on("click", ".js-add-u2f-registration-link", function(e) {
            var t, n;
            return t = document.querySelector(".js-new-u2f-registration"), t.classList.add("is-active"), t.classList.remove("is-showing-error"), n = document.querySelector(".js-u2f-registration-nickname-field"), n.focus()
        }), t = function(e) {
            var t;
            return n = document.createElement("div"), n.innerHTML = e, t = n.firstChild, document.querySelector(".js-u2f-registrations").appendChild(t)
        }, i = function(e, t) {
            var n, i, r, s, o;
            for (s = document.querySelector(".js-new-u2f-registration"), s.classList.add("is-showing-error"), s.classList.remove("is-sending"), o = s.querySelectorAll(".js-u2f-error"), i = 0, r = o.length; r > i; i++) n = o[i], n.classList.add("hidden");
            return n = s.querySelector(e), null != t && (n.textContent = t), n.classList.remove("hidden")
        }, u = function() {
            var e;
            return e = document.querySelector(".js-new-u2f-registration"), e.classList.remove("is-sending", "is-active"), document.querySelector(".js-u2f-registration-nickname-field").value = ""
        }, l = function(e) {
            return o = document.querySelector(".js-add-u2f-registration-form"), o.elements.response.value = JSON.stringify(e), s(o.action, {
                method: o.method,
                body: new FormData(o)
            }).then(function(e) {
                return f(e), u(), t(e.registration)
            })["catch"](function(e) {
                return null != e.response ? e.response.json().then(function(e) {
                    return f(e), i(".js-u2f-server-error", e.error)
                }) : i(".js-u2f-network-error")
            })
        }, m = function() {
            var t;
            return t = document.querySelector(".js-new-u2f-registration"), t.classList.add("is-sending"), t.classList.remove("is-showing-error"), h(e, c(), d()).then(l)["catch"](function(e) {
                var t;
                return t = function() {
                    switch (e.code) {
                        case 4:
                            return ".js-u2f-registered-error";
                        case 5:
                            return ".js-u2f-timeout-error";
                        default:
                            return ".js-u2f-other-error"
                    }
                }(), i(t)
            })
        }, $(document).on("click", ".js-u2f-register-retry", function() {
            m()
        }), $(document).on("submit", ".js-add-u2f-registration-form", function(e) {
            return e.preventDefault(), m()
        }))
    }.call(this), $(document).on("ajaxSuccess", ".js-user-sessions-revoke", function() {
        this.closest("li").remove()
    }),
    function() {
        $(function() {
            return $(".js-email-notice-trigger").focus(function() {
                return $(".js-email-notice").addClass("notice-highlight")
            }), $(".js-email-notice-trigger").blur(function() {
                return $(".js-email-notice").removeClass("notice-highlight")
            })
        }), $.observe(".js-plan-choice:checked", {
            add: function() {
                return $(this).closest(".plan-row").addClass("selected")
            },
            remove: function() {
                return $(this).closest(".plan-row").removeClass("selected")
            }
        }), $.observe(".js-plan-row.selected", {
            add: function() {
                var e;
                return e = $(this).find(".js-choose-button"), e.text(e.attr("data-selected-text"))
            },
            remove: function() {
                var e;
                return e = $(this).find(".js-choose-button"), e.text(e.attr("data-default-text"))
            }
        }), $.observe(".js-plan-row.free-plan.selected, .js-plan-choice-label.plan-choice-free.open", {
            add: function() {
                return $("#js-signup-billing-fields").addClass("has-removed-contents")
            },
            remove: function() {
                return $("#js-signup-billing-fields").removeClass("has-removed-contents")
            }
        }), $.observe(".js-setup-organization:checked", {
            add: function() {
                var e;
                return e = $(".js-choose-plan-submit"), e.attr("data-default-text") || e.attr("data-default-text", e.text()), e.text(e.attr("data-org-text"))
            },
            remove: function() {
                var e;
                return e = $(".js-choose-plan-submit"), e.text(e.attr("data-default-text"))
            }
        })
    }.call(this),
    function() {
        function e(e) {
            var t = $(".js-site-search-form")[0];
            t.setAttribute("action", t.getAttribute("data-unscoped-search-url")), $(".js-site-search").removeClass("scoped-search"), e.setAttribute("placeholder", e.getAttribute("data-unscoped-placeholder"))
        }

        function t(e) {
            var t = $(".js-site-search-form")[0];
            t.setAttribute("action", t.getAttribute("data-scoped-search-url")), $(".js-site-search").addClass("scoped-search"), e.setAttribute("placeholder", e.getAttribute("data-scoped-placeholder"))
        }

        function n(n) {
            var i = n.target,
                r = i.value;
            "" === r && "backspace" === n.hotkey && i.classList.contains("is-clearable") && e(i), "" === r && "esc" === n.hotkey && t(i), i.classList.toggle("is-clearable", "" === r)
        }
        $(document).on("focus", ".js-site-search-field", function() {
            return $(this).on("keyup", n)
        }), $(document).on("blur", ".js-site-search-field", function() {
            return $(this).off("keyup", n)
        }), $(document).on("focusout", ".js-site-search-focus", function() {
            this.closest(".js-chromeless-input-container").classList.remove("focus"), "" === this.value && this.classList.contains("js-site-search-field") && t(this)
        }), $(document).on("focusin", ".js-site-search-focus", function() {
            this.closest(".js-chromeless-input-container").classList.add("focus")
        })
    }.call(this), $.observe(".js-contact-javascript-flag", function(e) {
        e.value = "true"
    }),
    function() {
        var e, t;
        e = function() {
            var e;
            return e = $("#js-features-branch-diagram"), e.removeClass("preload"), e.find("path").each(function(e) {
                var t, n, i;
                return $(this).is("#js-branch-diagram-branch") ? i = "stroke-dashoffset 3.5s linear 0.25s" : $(this).is("#js-branch-diagram-master") ? i = "stroke-dashoffset 4.1s linear 0s" : $(this).is("#js-branch-diagram-arrow") && (i = "stroke-dashoffset 0.2s linear 4.3s"), n = $(this).get(0), t = n.getTotalLength(), n.style.transition = n.style.WebkitTransition = "none", n.style.strokeDasharray = t + " " + t, n.style.strokeDashoffset = t, n.getBoundingClientRect(), n.style.transition = n.style.WebkitTransition = i, n.style.strokeDashoffset = "0"
            })
        }, $(document).on("click", ".js-segmented-nav-button", function(e) {
            var t, n;
            return n = $(this).attr("data-selected-tab"), t = $(this).closest(".js-segmented-nav"), t.find(".js-segmented-nav-button").removeClass("selected"), t.siblings(".js-selected-nav-tab").removeClass("active"), $(this).addClass("selected"), $("." + n).addClass("active"), e.preventDefault()
        }), t = function() {
            return $(document).scrollTop() >= $("#js-features-branch-diagram").offset().top - 700 ? e() : void 0
        }, $.observe("#js-features-branch-diagram.preload", {
            add: function() {
                return $(window).on("scroll", t)
            },
            remove: function() {
                return $(window).off("scroll", t)
            }
        })
    }.call(this),
    function() {
        $(document).on("socket:message", ".js-notification-indicator", function(e, t) {
            $(this).attr({
                "aria-label": t.aria_label,
                "data-ga-click": t.ga_click
            }), $("span", this).attr("class", t.span_class)
        })
    }(),
    function() {
        var e, t;
        e = require("github/fetch").fetchText, t = function() {
            var t;
            return t = "/site/keyboard_shortcuts?url=" + window.location.pathname, $.facebox(function() {
                return e(t).then(function(e) {
                    return $.facebox(e, "shortcuts")
                })
            })
        }, $(document).on("click", ".js-keyboard-shortcuts", function() {
            return t(), !1
        }), $(document).on("click", ".js-see-all-keyboard-shortcuts", function() {
            return this.remove(), $(".facebox .js-hidden-pane").css("display", "table-row-group"), !1
        }), $(document).on("keypress", function(e) {
            return e.target === document.body && 63 === e.which ? ($(".facebox").is($.visible) ? $.facebox.close() : t(), !1) : void 0
        })
    }.call(this), $.observe(".js-site-status-container", function() {
        var e, t, n, i, r;
        r = this, t = r.querySelector(".js-site-status-message"), n = r.querySelector(".js-site-status-time"), e = r.querySelector(".flash"), i = document.querySelector("meta[name=site-status-api-url]").content, window.fetch(i).then(function(e) {
            return e.json()
        }).then(function(i) {
            var s;
            null != i.status && "good" !== i.status && (t.textContent = i.body, n.setAttribute("datetime", i.created_on), s = "major" === i.status ? "error" : "warn", e.classList.add("flash-" + s), r.classList.remove("hidden"))
        })
    }),
    function() {
        $(document).on("ajaxSend", ".js-action-ldap-create", function() {
            return $(this).find(".btn-sm").addClass("disabled")
        }), $(document).on("ajaxError", ".js-action-ldap-create", function(e, t, n, i) {
            return !1
        }), $(document).on("ajaxComplete", ".js-action-ldap-create", function(e, t) {
            var n, i;
            return n = $(this), i = 500 === t.status ? "Oops, something went wrong." : t.responseText, n.find(".js-message").show().html(" &ndash; " + i), 200 === t.status && n.find(".btn").hide(), !1
        })
    }.call(this),
    function() {
        var e;
        e = require("github/history").replaceState, location.search || location.hash || $(function() {
            var t, n, i;
            return t = null != (n = document.getElementById("issues-dashboard")) ? n : document.getElementById("issues_list"), (i = $(t).attr("data-url")) ? e(null, document.title, i) : void 0
        })
    }.call(this),
    function() {
        function e(t, i) {
            var u = document.getElementById(t.getAttribute("data-results"));
            if (u) {
                var l = c.get(u);
                if (!l) return void(null == a && (a = n(u.getAttribute("data-url")).then(function(n) {
                    c.set(u, n.paths), e(t), a = null
                })["catch"](function() {
                    a = null
                })));
                var d = u.querySelector(".js-tree-browser-result-template").firstElementChild,
                    h = u.querySelector(".js-tree-finder-results");
                null == i && (i = t.value);
                var f = void 0,
                    m = void 0;
                i ? (f = s(i), m = r(l, i)) : m = l, u.classList.toggle("filterable-empty", !m.length);
                for (var p = document.createDocumentFragment(), g = m.slice(0, 50), v = 0, b = g.length; b > v; v++) {
                    var y = g[v],
                        j = d.cloneNode(!0),
                        w = j.getElementsByClassName("js-tree-finder-path")[0],
                        x = new URL(w.href);
                    x.pathname = x.pathname + "/" + y, w.href = x.href, w.textContent = y, o(w, i, f), p.appendChild(j)
                }
                h.innerHTML = "", h.appendChild(p), $(h).navigation("focus")
            }
        }
        var t = require("github/fetch"),
            n = t.fetchJSON,
            i = require("github/fuzzy-filter"),
            r = i.fuzzySort,
            s = i.fuzzyRegexp,
            o = i.fuzzyHighlightElement,
            a = null,
            c = new WeakMap;
        $(document).onFocusedKeydown(".js-tree-finder-field", function(t) {
            return e(this), $(this).on("throttled:input." + t, function() {
                    e(this)
                }),
                function(e) {
                    "esc" === e.hotkey && (history.back(), e.preventDefault())
                }
        }), $.observe(".js-tree-finder-field", function() {
            e(this)
        })
    }(),
    function() {
        var e, t, n, i, r, s, o, a, c, u, l, d, h, f, m, p, g, v, b, y, j, w;
        s = require("delegated-events"), h = require("github/inflector").pluralize, o = require("github/number-helpers").formatNumber, d = require("github/pjax"), l = null, f = null, b = null, y = null, i = function() {
            return document.querySelector(".js-calendar-graph").getAttribute("data-url")
        }, s.on("pjax:send", ".js-contribution-activity", function() {
            this.classList.add("loading")
        }), s.on("pjax:complete", ".js-contribution-activity", function() {
            this.classList.remove("loading")
        }), $.observe(".js-calendar-graph-svg", function() {
            var e, t, i;
            e = this.closest(".js-calendar-graph"), e.addEventListener("mouseover", n), e.addEventListener("mouseout", r), t = e.getAttribute("data-from"), t && (t = f = w(t)), i = e.getAttribute("data-to"), i && (i = w(i)), (t || i) && m(t, i, !0)
        }), s.on("click", ".js-calendar-graph rect.day", function(e) {
            var t;
            t = w(this.getAttribute("data-date")), m(t, e.shiftKey, !1)
        }), n = function(e) {
            return e.target.matches("rect.day") ? j(e.target) : void 0
        }, r = function(e) {
            var t;
            return null != (t = document.querySelector(".svg-tip")) ? t.remove() : void 0
        }, e = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], j = function(t) {
            var n, i, r, s, a, c, u, l;
            return r = w(t.getAttribute("data-date")), i = parseInt(t.getAttribute("data-count")), c = 0 === i ? "No" : o(i), a = e[r.getUTCMonth()].slice(0, 3) + " " + r.getUTCDate() + ", " + r.getUTCFullYear(), s = $('<div class="svg-tip svg-tip-one-line">\n  <strong>' + c + " " + h(i, "contribution") + "</strong> on " + a + "\n</div>").get(0), $(".svg-tip").remove(), document.body.appendChild(s), n = t.getBoundingClientRect(), u = n.left + window.pageXOffset - s.offsetWidth / 2 + n.width / 2, l = n.bottom + window.pageYOffset - s.offsetHeight - 2 * n.height, s.style.top = l + "px", s.style.left = u + "px"
        }, c = function(e) {
            return d["default"]({
                url: e,
                container: ".js-contribution-activity",
                scrollTo: !1,
                replace: !0
            })
        }, g = function(e) {
            var t, n;
            return l = e, t = null, b = null, y = null, n = i() + "?tab=contributions&period=" + l, v(), c(n)
        }, p = function(e, t) {
            var n, i;
            return i = e.getAttribute("class").trim().split(" "), i = function() {
                var e, r, s;
                for (s = [], e = 0, r = i.length; r > e; e++) n = i[e], n !== t && s.push(n);
                return s
            }(), e.setAttribute("class", i.join(" "))
        }, t = function(e, t) {
            var n;
            return n = e.getAttribute("class") + " " + t, e.setAttribute("class", n.trim())
        }, v = function(e, n) {
            var i, r, s, o, a, c, u, l, d;
            for (i = document.querySelector(".js-calendar-graph"), d = i.querySelectorAll("rect.day"), o = 0, c = d.length; c > o; o++) r = d[o], p(r, "active");
            if (i.classList.remove("days-selected"), e || n) {
                for (i.classList.add("days-selected"), s = function(t) {
                        var i;
                        return i = w(t.getAttribute("data-date")).getTime(), e && n ? e.getTime() <= i && i <= n.getTime() : i === e.getTime()
                    }, l = [], a = 0, u = d.length; u > a; a++) r = d[a], s(r) && l.push(t(r, "active"));
                return l
            }
        }, u = function(e) {
            return ("0" + e).slice(-2)
        }, a = function(e) {
            return e.getUTCFullYear() + "-" + u(e.getUTCMonth() + 1) + "-" + u(e.getUTCDate())
        }, w = function(e) {
            var t, n, i, r, s;
            return i = function() {
                var t, n, i, s;
                for (i = e.split("-"), s = [], t = 0, n = i.length; n > t; t++) r = i[t], s.push(parseInt(r));
                return s
            }(), s = i[0], n = i[1], t = i[2], new Date(Date.UTC(s, n - 1, t))
        }, m = function(e, t, n) {
            var r, s, o, u, d, h, m, p;
            return p = i() + "?tab=contributions", e >= b && y >= e ? void g("weekly") : ("object" == typeof t && (f = t, t = !0), f && t ? (o = new Date(f.getTime() - 26784e5), s = new Date(f.getTime() + 26784e5), u = e > f ? [f, e] : [e, f], r = u[0], m = u[1], o > r && (r = o), m > s && (m = s), d = [r, m], b = d[0], y = d[1], p += "&from=" + a(r) + "&to=" + a(m)) : (r = e, h = [r, null], b = h[0], y = h[1], p += "&from=" + a(r)), f = e, l = "custom", v(r, m), n ? void 0 : c(p))
        }, $(document).on("change", ".js-period-container", function(e) {
            var t;
            return e.preventDefault(), e.stopPropagation(), t = e.target.value.toLowerCase(), l !== t ? g(t) : void 0
        })
    }.call(this), $(function() {
        function e() {
            var t = $("#current-version").val();
            t && n("_current").then(function(n) {
                t == n ? setTimeout(e, 5e3) : i || ($("#gollum-error-message").text("Someone has edited the wiki since you started. Please reload this page and re-apply your changes."), $("#gollum-error-message").show(), $("#gollum-editor-submit").attr("disabled", "disabled"), $("#gollum-editor-submit").attr("value", "Cannot Save, Someone Else Has Edited"))
            })
        }
        var t = require("github/fetch"),
            n = t.fetchText,
            i = !1;
        $("#gollum-editor-body").each(e), $("#gollum-editor-submit").click(function() {
            i = !0
        })
    }),
    function() {
        var e, t, n, i;
        t = null != (n = document.querySelector("meta[name=form-nonce]")) ? n.content : void 0, null != t && (i = require("github/failbot").reportError, e = require("github/inspect")["default"], $.observe("form", function(n) {
            var r, s;
            "get" !== n.method.toLowerCase() && (s = n.getAttribute("data-form-nonce"), null != s && s !== t && (r = new Error("Incorrect form-nonce"), i(r, {
                form: e(n),
                method: n.method,
                action: n.action
            })), (null == s || s !== t) && n.remove())
        }))
    }.call(this),
    function() {
        var e, t, n, i, r, s;
        s = require("github/failbot").reportError, i = require("github/proxy-site-detection")["default"], e = "$__", i && (t = {
            url: window.location.href,
            proxyPayload: document.querySelector("meta[name=js-proxy-site-detection-payload]").content
        }, n = new Error, s(n, (r = {}, r["" + e] = btoa(JSON.stringify(t)), r)))
    }.call(this),
    function() {
        var e, t, n, i, r, s, o;
        e = require("github/fetch").fetch, t = require("delegated-events").fire, i = function() {
            var t;
            return document.getElementById("js-sudo-prompt") ? Promise.resolve() : (t = document.querySelector("link[rel=sudo-modal]")) ? e(t.href).then(function(e) {
                return e.text()
            }).then(function(e) {
                return document.body.insertAdjacentHTML("beforeend", e)
            }) : Promise.reject()
        }, n = function() {
            return e("/sessions/in_sudo.json").then(function(e) {
                return e.json()
            })
        }, o = function() {
            return i().then(function() {
                return $.facebox({
                    div: "#js-sudo-prompt"
                }, "sudo")
            }).then(function(e) {
                return new Promise(function(n, i) {
                    var r, s;
                    return s = null, r = $(e).find(".js-sudo-form"), r.find(".js-sudo-login, .js-sudo-password").first().focus(), r.on("ajaxSuccess", function() {
                        return s = !0, t(document, "facebox:close")
                    }), r.on("ajaxError", function() {
                        return s = !1, $(this).find(".js-sudo-error").text("Incorrect Password.").show(), $(this).find(".js-sudo-password").val(""), !1
                    }), $(document).one("facebox:afterClose", function() {
                        return s ? n(!0) : i(new Error("sudo prompt canceled"))
                    })
                })
            })
        }, $.sudo = function() {
            return n().then(function(e) {
                return e || o()
            })
        }, s = !1, r = function(e) {
            s || (e.preventDefault(), e.stopImmediatePropagation(), $.sudo().then(function() {
                s = !0, $(e.target)[e.type](), s = !1
            }))
        }, $.observe("a.js-sudo-required", {
            add: function() {
                return $(this).on("click", r)
            },
            remove: function() {
                return $(this).off("click", r)
            }
        }), $.observe("form.js-sudo-required", {
            add: function() {
                return $(this).on("submit", r)
            },
            remove: function() {
                return $(this).off("submit", r)
            }
        })
    }.call(this);