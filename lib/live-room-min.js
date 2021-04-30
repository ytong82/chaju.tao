!function(e) {
    function t(r) {
        if (n[r])
            return n[r].exports;
        var o = n[r] = {
            exports: {},
            id: r,
            loaded: !1
        };
        return e[r].call(o.exports, o, o.exports, t), o.loaded = !0, o.exports
    }
    var n = {};
    t.m = e, t.c = n, t.p = ".package", t(0)
}([function(e, t, n) {
    "use strict";
    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    function o(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    function i(e, t) {
        if (!e)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }
    function a(e, t) {
        if ("function" != typeof t && null !== t)
            throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    r(n(1));
    var s = r(n(3)),
        l = r(n(15));
    new (function(e) {
        function t(e) {
            return o(this, t), i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e))
        }
        return a(t, s.default), t
    }())({
        vueOpts: l.default
    })
}, function(e, t, n) {
    (function(t, n) {
        "use strict";
        function r(e) {
            return null == e ? "" : "object" == typeof e ? JSON.stringify(e, null, 2) : String(e)
        }
        function o(e) {
            var t = parseFloat(e);
            return isNaN(t) ? e : t
        }
        function i(e, t) {
            for (var n = Object.create(null), r = e.split(","), o = 0; o < r.length; o++)
                n[r[o]] = !0;
            return t ? function(e) {
                return n[e.toLowerCase()]
            } : function(e) {
                return n[e]
            }
        }
        function a(e, t) {
            if (e.length) {
                var n = e.indexOf(t);
                if (n > -1)
                    return e.splice(n, 1)
            }
        }
        function s(e, t) {
            return Ln.call(e, t)
        }
        function l(e) {
            return "string" == typeof e || "number" == typeof e
        }
        function c(e) {
            var t = Object.create(null);
            return function(n) {
                return t[n] || (t[n] = e(n))
            }
        }
        function u(e, t) {
            function n(n) {
                var r = arguments.length;
                return r ? r > 1 ? e.apply(t, arguments) : e.call(t, n) : e.call(t)
            }
            return n._length = e.length, n
        }
        function d(e, t) {
            t = t || 0;
            for (var n = e.length - t, r = new Array(n); n--;)
                r[n] = e[n + t];
            return r
        }
        function f(e, t) {
            for (var n in t)
                e[n] = t[n];
            return e
        }
        function p(e) {
            return null !== e && "object" == typeof e
        }
        function h(e) {
            return Bn.call(e) === Un
        }
        function v(e) {
            for (var t = {}, n = 0; n < e.length; n++)
                e[n] && f(t, e[n]);
            return t
        }
        function m() {}
        function g(e, t) {
            var n = p(e),
                r = p(t);
            if (!n || !r)
                return !n && !r && String(e) === String(t);
            try {
                return JSON.stringify(e) === JSON.stringify(t)
            } catch (n) {
                return e === t
            }
        }
        function y(e, t) {
            for (var n = 0; n < e.length; n++)
                if (g(e[n], t))
                    return n;
            return -1
        }
        function b(e) {
            var t = !1;
            return function() {
                t || (t = !0, e())
            }
        }
        function _(e) {
            var t = (e + "").charCodeAt(0);
            return 36 === t || 95 === t
        }
        function w(e, t, n, r) {
            Object.defineProperty(e, t, {
                value: n,
                enumerable: !!r,
                writable: !0,
                configurable: !0
            })
        }
        function E(e) {
            if (!Gn.test(e)) {
                var t = e.split(".");
                return function(e) {
                    for (var n = 0; n < t.length; n++) {
                        if (!e)
                            return;
                        e = e[t[n]]
                    }
                    return e
                }
            }
        }
        function x(e) {
            return /native code/.test(e.toString())
        }
        function T(e) {
            pr.target && hr.push(pr.target), pr.target = e
        }
        function S() {
            pr.target = hr.pop()
        }
        function C(e, t) {
            e.__proto__ = t
        }
        function O(e, t, n) {
            for (var r = 0, o = n.length; r < o; r++) {
                var i = n[r];
                w(e, i, t[i])
            }
        }
        function k(e, t) {
            if (p(e)) {
                var n;
                return s(e, "__ob__") && e.__ob__ instanceof br ? n = e.__ob__ : yr.shouldConvert && !tr() && (Array.isArray(e) || h(e)) && Object.isExtensible(e) && !e._isVue && (n = new br(e)), t && n && n.vmCount++, n
            }
        }
        function M(e, n, r, o) {
            var i = new pr,
                a = Object.getOwnPropertyDescriptor(e, n);
            if (!a || !1 !== a.configurable) {
                var s = a && a.get,
                    l = a && a.set,
                    c = k(r);
                Object.defineProperty(e, n, {
                    enumerable: !0,
                    configurable: !0,
                    get: function() {
                        var t = s ? s.call(e) : r;
                        return pr.target && (i.depend(), c && c.dep.depend(), Array.isArray(t) && I(t)), t
                    },
                    set: function(n) {
                        var a = s ? s.call(e) : r;
                        n === a || n != n && a != a || ("production" !== t.env.NODE_ENV && o && o(), l ? l.call(e, n) : r = n, c = k(n), i.notify())
                    }
                })
            }
        }
        function A(e, n, r) {
            if (Array.isArray(e) && "number" == typeof n)
                return e.length = Math.max(e.length, n), e.splice(n, 1, r), r;
            if (s(e, n))
                return e[n] = r, r;
            var o = e.__ob__;
            return e._isVue || o && o.vmCount ? ("production" !== t.env.NODE_ENV && ar("Avoid adding reactive properties to a Vue instance or its root $data at runtime - declare it upfront in the data option."), r) : o ? (M(o.value, n, r), o.dep.notify(), r) : (e[n] = r, r)
        }
        function N(e, n) {
            if (Array.isArray(e) && "number" == typeof n)
                e.splice(n, 1);
            else {
                var r = e.__ob__;
                e._isVue || r && r.vmCount ? "production" !== t.env.NODE_ENV && ar("Avoid deleting properties on a Vue instance or its root $data - just set it to null.") : s(e, n) && (delete e[n], r && r.dep.notify())
            }
        }
        function I(e) {
            for (var t = void 0, n = 0, r = e.length; n < r; n++)
                (t = e[n]) && t.__ob__ && t.__ob__.dep.depend(), Array.isArray(t) && I(t)
        }
        function L(e, t) {
            if (!t)
                return e;
            for (var n, r, o, i = Object.keys(t), a = 0; a < i.length; a++)
                r = e[n = i[a]], o = t[n], s(e, n) ? h(r) && h(o) && L(r, o) : A(e, n, o);
            return e
        }
        function R(e, t) {
            return t ? e ? e.concat(t) : Array.isArray(t) ? t : [t] : e
        }
        function P(e, t) {
            var n = Object.create(e || null);
            return t ? f(n, t) : n
        }
        function j(e) {
            for (var t in e.components) {
                var n = t.toLowerCase();
                (In(n) || zn.isReservedTag(n)) && ar("Do not use built-in or reserved HTML elements as component id: " + t)
            }
        }
        function D(e) {
            var n = e.props;
            if (n) {
                var r,
                    o,
                    i = {};
                if (Array.isArray(n))
                    for (r = n.length; r--;)
                        "string" == typeof (o = n[r]) ? i[Pn(o)] = {
                            type: null
                        } : "production" !== t.env.NODE_ENV && ar("props must be strings when using array syntax.");
                else if (h(n))
                    for (var a in n)
                        o = n[a], i[Pn(a)] = h(o) ? o : {
                            type: o
                        };
                e.props = i
            }
        }
        function X(e) {
            var t = e.directives;
            if (t)
                for (var n in t) {
                    var r = t[n];
                    "function" == typeof r && (t[n] = {
                        bind: r,
                        update: r
                    })
                }
        }
        function B(e, n, r) {
            function o(t) {
                var o = _r[t] || Er;
                d[t] = o(e[t], n[t], r, t)
            }
            "production" !== t.env.NODE_ENV && j(n), D(n), X(n);
            var i = n.extends;
            if (i && (e = "function" == typeof i ? B(e, i.options, r) : B(e, i, r)), n.mixins)
                for (var a = 0, l = n.mixins.length; a < l; a++) {
                    var c = n.mixins[a];
                    c.prototype instanceof lt && (c = c.options), e = B(e, c, r)
                }
            var u,
                d = {};
            for (u in e)
                o(u);
            for (u in n)
                s(e, u) || o(u);
            return d
        }
        function U(e, n, r, o) {
            if ("string" == typeof r) {
                var i = e[n];
                if (s(i, r))
                    return i[r];
                var a = Pn(r);
                if (s(i, a))
                    return i[a];
                var l = jn(a);
                if (s(i, l))
                    return i[l];
                var c = i[r] || i[a] || i[l];
                return "production" !== t.env.NODE_ENV && o && !c && ar("Failed to resolve " + n.slice(0, -1) + ": " + r, e), c
            }
        }
        function V(e, n, r, o) {
            var i = n[e],
                a = !s(r, e),
                l = r[e];
            if (J(Boolean, i.type) && (a && !s(i, "default") ? l = !1 : J(String, i.type) || "" !== l && l !== Xn(e) || (l = !0)), void 0 === l) {
                l = H(o, i, e);
                var c = yr.shouldConvert;
                yr.shouldConvert = !0, k(l), yr.shouldConvert = c
            }
            return "production" !== t.env.NODE_ENV && z(i, e, l, o, a), l
        }
        function H(e, n, r) {
            if (s(n, "default")) {
                var o = n.default;
                return "production" !== t.env.NODE_ENV && p(o) && ar('Invalid default value for prop "' + r + '": Props with type Object/Array must use a factory function to return the default value.', e), e && e.$options.propsData && void 0 === e.$options.propsData[r] && void 0 !== e._props[r] ? e._props[r] : "function" == typeof o && "Function" !== G(n.type) ? o.call(e) : o
            }
        }
        function z(e, t, n, r, o) {
            if (e.required && o)
                ar('Missing required prop: "' + t + '"', r);
            else if (null != n || e.required) {
                var i = e.type,
                    a = !i || !0 === i,
                    s = [];
                if (i) {
                    Array.isArray(i) || (i = [i]);
                    for (var l = 0; l < i.length && !a; l++) {
                        var c = F(n, i[l]);
                        s.push(c.expectedType || ""), a = c.valid
                    }
                }
                if (a) {
                    var u = e.validator;
                    u && (u(n) || ar('Invalid prop: custom validator check failed for prop "' + t + '".', r))
                } else
                    ar('Invalid prop: type check failed for prop "' + t + '". Expected ' + s.map(jn).join(", ") + ", got " + Object.prototype.toString.call(n).slice(8, -1) + ".", r)
            }
        }
        function F(e, t) {
            var n,
                r = G(t);
            return n = "String" === r ? typeof e == (r = "string") : "Number" === r ? typeof e == (r = "number") : "Boolean" === r ? typeof e == (r = "boolean") : "Function" === r ? typeof e == (r = "function") : "Object" === r ? h(e) : "Array" === r ? Array.isArray(e) : e instanceof t, {
                valid: n,
                expectedType: r
            }
        }
        function G(e) {
            var t = e && e.toString().match(/^\s*function (\w+)/);
            return t && t[1]
        }
        function J(e, t) {
            if (!Array.isArray(t))
                return G(t) === G(e);
            for (var n = 0, r = t.length; n < r; n++)
                if (G(t[n]) === G(e))
                    return !0;
            return !1
        }
        function q(e, n, r) {
            if (zn.errorHandler)
                zn.errorHandler.call(null, e, n, r);
            else {
                if ("production" !== t.env.NODE_ENV && ar("Error in " + r + ":", n), !qn || "undefined" == typeof console)
                    throw e;
                console.error(e)
            }
        }
        function Y(e) {
            return new Ir(void 0, void 0, void 0, String(e))
        }
        function W(e) {
            var t = new Ir(e.tag, e.data, e.children, e.text, e.elm, e.context, e.componentOptions);
            return t.ns = e.ns, t.isStatic = e.isStatic, t.key = e.key, t.isCloned = !0, t
        }
        function K(e) {
            for (var t = e.length, n = new Array(t), r = 0; r < t; r++)
                n[r] = W(e[r]);
            return n
        }
        function Q(e) {
            function t() {
                var e = arguments,
                    n = t.fns;
                if (!Array.isArray(n))
                    return n.apply(null, arguments);
                for (var r = 0; r < n.length; r++)
                    n[r].apply(null, e)
            }
            return t.fns = e, t
        }
        function $(e, n, r, o, i) {
            var a,
                s,
                l,
                c;
            for (a in e)
                s = e[a], l = n[a], c = jr(a), s ? l ? s !== l && (l.fns = s, e[a] = l) : (s.fns || (s = e[a] = Q(s)), r(c.name, s, c.once, c.capture)) : "production" !== t.env.NODE_ENV && ar('Invalid handler for event "' + c.name + '": got ' + String(s), i);
            for (a in n)
                e[a] || o((c = jr(a)).name, n[a], c.capture)
        }
        function Z(e, t, n) {
            function r() {
                n.apply(this, arguments), a(o.fns, r)
            }
            var o,
                i = e[t];
            i ? i.fns && i.merged ? (o = i).fns.push(r) : o = Q([i, r]) : o = Q([r]), o.merged = !0, e[t] = o
        }
        function ee(e) {
            for (var t = 0; t < e.length; t++)
                if (Array.isArray(e[t]))
                    return Array.prototype.concat.apply([], e);
            return e
        }
        function te(e) {
            return l(e) ? [Y(e)] : Array.isArray(e) ? ne(e) : void 0
        }
        function ne(e, t) {
            var n,
                r,
                o,
                i = [];
            for (n = 0; n < e.length; n++)
                null != (r = e[n]) && "boolean" != typeof r && (o = i[i.length - 1], Array.isArray(r) ? i.push.apply(i, ne(r, (t || "") + "_" + n)) : l(r) ? o && o.text ? o.text += String(r) : "" !== r && i.push(Y(r)) : r.text && o && o.text ? i[i.length - 1] = Y(o.text + r.text) : (r.tag && null == r.key && null != t && (r.key = "__vlist" + t + "_" + n + "__"), i.push(r)));
            return i
        }
        function re(e) {
            return e && e.filter(function(e) {
                    return e && e.componentOptions
                })[0]
        }
        function oe(e) {
            e._events = Object.create(null), e._hasHookEvent = !1;
            var t = e.$options._parentListeners;
            t && se(e, t)
        }
        function ie(e, t, n) {
            n ? Rr.$once(e, t) : Rr.$on(e, t)
        }
        function ae(e, t) {
            Rr.$off(e, t)
        }
        function se(e, t, n) {
            Rr = e, $(t, n || {}, ie, ae, e)
        }
        function le(e, t) {
            var n = {};
            if (!e)
                return n;
            for (var r, o, i = [], a = 0, s = e.length; a < s; a++)
                if (((o = e[a]).context === t || o.functionalContext === t) && o.data && (r = o.data.slot)) {
                    var l = n[r] || (n[r] = []);
                    "template" === o.tag ? l.push.apply(l, o.children) : l.push(o)
                } else
                    i.push(o);
            return i.every(ce) || (n.default = i), n
        }
        function ce(e) {
            return e.isComment || " " === e.text
        }
        function ue(e) {
            for (var t = {}, n = 0; n < e.length; n++)
                t[e[n][0]] = e[n][1];
            return t
        }
        function de(e) {
            var t = e.$options,
                n = t.parent;
            if (n && !t.abstract) {
                for (; n.$options.abstract && n.$parent;)
                    n = n.$parent;
                n.$children.push(e)
            }
            e.$parent = n, e.$root = n ? n.$root : e, e.$children = [], e.$refs = {}, e._watcher = null, e._inactive = null, e._directInactive = !1, e._isMounted = !1, e._isDestroyed = !1, e._isBeingDestroyed = !1
        }
        function fe(e, n, r) {
            e.$el = n, e.$options.render || (e.$options.render = Pr, "production" !== t.env.NODE_ENV && (e.$options.template && "#" !== e.$options.template.charAt(0) || e.$options.el || n ? ar("You are using the runtime-only build of Vue where the template compiler is not available. Either pre-compile the templates into render functions, or use the compiler-included build.", e) : ar("Failed to mount component: template or render function not defined.", e))), ge(e, "beforeMount");
            var o;
            return o = "production" !== t.env.NODE_ENV && zn.performance && Mr ? function() {
                var t = e._name,
                    n = e._uid,
                    o = "vue-perf-start:" + n,
                    i = "vue-perf-end:" + n;
                Mr(o);
                var a = e._render();
                Mr(i), Ar(t + " render", o, i), Mr(o), e._update(a, r), Mr(i), Ar(t + " patch", o, i)
            } : function() {
                e._update(e._render(), r)
            }, e._watcher = new Gr(e, o, m), r = !1, null == e.$vnode && (e._isMounted = !0, ge(e, "mounted")), e
        }
        function pe(e, n, r, o, i) {
            var a = !!(i || e.$options._renderChildren || o.data.scopedSlots || e.$scopedSlots !== Fn);
            if (e.$options._parentVnode = o, e.$vnode = o, e._vnode && (e._vnode.parent = o), e.$options._renderChildren = i, n && e.$options.props) {
                yr.shouldConvert = !1, "production" !== t.env.NODE_ENV && (yr.isSettingProps = !0);
                for (var s = e._props, l = e.$options._propKeys || [], c = 0; c < l.length; c++) {
                    var u = l[c];
                    s[u] = V(u, e.$options.props, n, e)
                }
                yr.shouldConvert = !0, "production" !== t.env.NODE_ENV && (yr.isSettingProps = !1), e.$options.propsData = n
            }
            if (r) {
                var d = e.$options._parentListeners;
                e.$options._parentListeners = r, se(e, r, d)
            }
            a && (e.$slots = le(i, o.context), e.$forceUpdate())
        }
        function he(e) {
            for (; e && (e = e.$parent);)
                if (e._inactive)
                    return !0;
            return !1
        }
        function ve(e, t) {
            if (t) {
                if (e._directInactive = !1, he(e))
                    return
            } else if (e._directInactive)
                return;
            if (e._inactive || null == e._inactive) {
                e._inactive = !1;
                for (var n = 0; n < e.$children.length; n++)
                    ve(e.$children[n]);
                ge(e, "activated")
            }
        }
        function me(e, t) {
            if (!(t && (e._directInactive = !0, he(e)) || e._inactive)) {
                e._inactive = !0;
                for (var n = 0; n < e.$children.length; n++)
                    me(e.$children[n]);
                ge(e, "deactivated")
            }
        }
        function ge(e, t) {
            var n = e.$options[t];
            if (n)
                for (var r = 0, o = n.length; r < o; r++)
                    try {
                        n[r].call(e)
                    } catch (n) {
                        q(n, e, t + " hook")
                    }
            e._hasHookEvent && e.$emit("hook:" + t)
        }
        function ye() {
            Xr.length = 0, Br = {}, "production" !== t.env.NODE_ENV && (Ur = {}), Vr = Hr = !1
        }
        function be() {
            Hr = !0;
            var e,
                n,
                r;
            for (Xr.sort(function(e, t) {
                return e.id - t.id
            }), zr = 0; zr < Xr.length; zr++)
                if (e = Xr[zr], n = e.id, Br[n] = null, e.run(), "production" !== t.env.NODE_ENV && null != Br[n] && (Ur[n] = (Ur[n] || 0) + 1, Ur[n] > zn._maxUpdateCount)) {
                    ar("You may have an infinite update loop " + (e.user ? 'in watcher with expression "' + e.expression + '"' : "in a component render function."), e.vm);
                    break
                }
            var o = Xr.slice();
            for (ye(), zr = o.length; zr--;)
                (r = (e = o[zr]).vm)._watcher === e && r._isMounted && ge(r, "updated");
            nr && zn.devtools && nr.emit("flush")
        }
        function _e(e) {
            var t = e.id;
            if (null == Br[t]) {
                if (Br[t] = !0, Hr) {
                    for (var n = Xr.length - 1; n >= 0 && Xr[n].id > e.id;)
                        n--;
                    Xr.splice(Math.max(n, zr) + 1, 0, e)
                } else
                    Xr.push(e);
                Vr || (Vr = !0, or(be))
            }
        }
        function we(e) {
            Jr.clear(), Ee(e, Jr)
        }
        function Ee(e, t) {
            var n,
                r,
                o = Array.isArray(e);
            if ((o || p(e)) && Object.isExtensible(e)) {
                if (e.__ob__) {
                    var i = e.__ob__.dep.id;
                    if (t.has(i))
                        return;
                    t.add(i)
                }
                if (o)
                    for (n = e.length; n--;)
                        Ee(e[n], t);
                else
                    for (n = (r = Object.keys(e)).length; n--;)
                        Ee(e[r[n]], t)
            }
        }
        function xe(e, t, n) {
            qr.get = function() {
                return this[t][n]
            }, qr.set = function(e) {
                this[t][n] = e
            }, Object.defineProperty(e, n, qr)
        }
        function Te(e) {
            e._watchers = [];
            var t = e.$options;
            t.props && Se(e, t.props), t.methods && Ne(e, t.methods), t.data ? Ce(e) : k(e._data = {}, !0), t.computed && ke(e, t.computed), t.watch && Ie(e, t.watch)
        }
        function Se(e, n) {
            var r = e.$options.propsData || {},
                o = e._props = {},
                i = e.$options._propKeys = [],
                a = !e.$parent;
            yr.shouldConvert = a;
            for (var s in n)
                !function(a) {
                    i.push(a);
                    var s = V(a, n, r, e);
                    "production" !== t.env.NODE_ENV ? (Yr[a] && ar('"' + a + '" is a reserved attribute and cannot be used as component prop.', e), M(o, a, s, function() {
                        e.$parent && !yr.isSettingProps && ar("Avoid mutating a prop directly since the value will be overwritten whenever the parent component re-renders. Instead, use a data or computed property based on the prop's value. Prop being mutated: \"" + a + '"', e)
                    })) : M(o, a, s), a in e || xe(e, "_props", a)
                }(s);
            yr.shouldConvert = !0
        }
        function Ce(e) {
            var n = e.$options.data;
            h(n = e._data = "function" == typeof n ? Oe(n, e) : n || {}) || (n = {}, "production" !== t.env.NODE_ENV && ar("data functions should return an object:\nhttps://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function", e));
            for (var r = Object.keys(n), o = e.$options.props, i = r.length; i--;)
                o && s(o, r[i]) ? "production" !== t.env.NODE_ENV && ar('The data property "' + r[i] + '" is already declared as a prop. Use prop default value instead.', e) : _(r[i]) || xe(e, "_data", r[i]);
            k(n, !0)
        }
        function Oe(e, t) {
            try {
                return e.call(t)
            } catch (e) {
                return q(e, t, "data()"), {}
            }
        }
        function ke(e, n) {
            var r = e._computedWatchers = Object.create(null);
            for (var o in n) {
                var i = n[o],
                    a = "function" == typeof i ? i : i.get;
                "production" !== t.env.NODE_ENV && void 0 === a && (ar('No getter function has been defined for computed property "' + o + '".', e), a = m), r[o] = new Gr(e, a, m, Wr), o in e || Me(e, o, i)
            }
        }
        function Me(e, t, n) {
            "function" == typeof n ? (qr.get = Ae(t), qr.set = m) : (qr.get = n.get ? !1 !== n.cache ? Ae(t) : n.get : m, qr.set = n.set ? n.set : m), Object.defineProperty(e, t, qr)
        }
        function Ae(e) {
            return function() {
                var t = this._computedWatchers && this._computedWatchers[e];
                if (t)
                    return t.dirty && t.evaluate(), pr.target && t.depend(), t.value
            }
        }
        function Ne(e, n) {
            var r = e.$options.props;
            for (var o in n)
                e[o] = null == n[o] ? m : u(n[o], e), "production" !== t.env.NODE_ENV && (null == n[o] && ar('method "' + o + '" has an undefined value in the component definition. Did you reference the function correctly?', e), r && s(r, o) && ar('method "' + o + '" has already been defined as a prop.', e))
        }
        function Ie(e, t) {
            for (var n in t) {
                var r = t[n];
                if (Array.isArray(r))
                    for (var o = 0; o < r.length; o++)
                        Le(e, n, r[o]);
                else
                    Le(e, n, r)
            }
        }
        function Le(e, t, n) {
            var r;
            h(n) && (r = n, n = n.handler), "string" == typeof n && (n = e[n]), e.$watch(t, n, r)
        }
        function Re(e, n, r, o, i) {
            if (e) {
                var a = r.$options._base;
                if (p(e) && (e = a.extend(e)), "function" == typeof e) {
                    if (!e.cid)
                        if (e.resolved)
                            e = e.resolved;
                        else if (!(e = De(e, a, function() {
                            r.$forceUpdate()
                        })))
                            return;
                    it(e), (n = n || {}).model && He(e.options, n);
                    var s = Xe(n, e, i);
                    if (e.options.functional)
                        return Pe(e, s, n, r, o);
                    var l = n.on;
                    n.on = n.nativeOn, e.options.abstract && (n = {}), Ue(n);
                    var c = e.options.name || i;
                    return new Ir("vue-component-" + e.cid + (c ? "-" + c : ""), n, void 0, void 0, void 0, r, {
                        Ctor: e,
                        propsData: s,
                        listeners: l,
                        tag: i,
                        children: o
                    })
                }
                "production" !== t.env.NODE_ENV && ar("Invalid Component definition: " + String(e), r)
            }
        }
        function Pe(e, t, n, r, o) {
            var i = {},
                a = e.options.props;
            if (a)
                for (var s in a)
                    i[s] = V(s, a, t);
            var l = Object.create(r),
                c = e.options.render.call(null, function(e, t, n, r) {
                    return ze(l, e, t, n, r, !0)
                }, {
                    props: i,
                    data: n,
                    parent: r,
                    children: o,
                    slots: function() {
                        return le(o, r)
                    }
                });
            return c instanceof Ir && (c.functionalContext = r, n.slot && ((c.data || (c.data = {})).slot = n.slot)), c
        }
        function je(e, t, n, r) {
            var o = e.componentOptions,
                i = {
                    _isComponent: !0,
                    parent: t,
                    propsData: o.propsData,
                    _componentTag: o.tag,
                    _parentVnode: e,
                    _parentListeners: o.listeners,
                    _renderChildren: o.children,
                    _parentElm: n || null,
                    _refElm: r || null
                },
                a = e.data.inlineTemplate;
            return a && (i.render = a.render, i.staticRenderFns = a.staticRenderFns), new o.Ctor(i)
        }
        function De(e, n, r) {
            if (!e.requested) {
                e.requested = !0;
                var o = e.pendingCallbacks = [r],
                    i = !0,
                    a = function(t) {
                        if (p(t) && (t = n.extend(t)), e.resolved = t, !i)
                            for (var r = 0, a = o.length; r < a; r++)
                                o[r](t)
                    },
                    s = function(n) {
                        "production" !== t.env.NODE_ENV && ar("Failed to resolve async component: " + String(e) + (n ? "\nReason: " + n : ""))
                    },
                    l = e(a, s);
                return l && "function" == typeof l.then && !e.resolved && l.then(a, s), i = !1, e.resolved
            }
            e.pendingCallbacks.push(r)
        }
        function Xe(e, n, r) {
            var o = n.options.props;
            if (o) {
                var i = {},
                    a = e.attrs,
                    s = e.props,
                    l = e.domProps;
                if (a || s || l)
                    for (var c in o) {
                        var u = Xn(c);
                        if ("production" !== t.env.NODE_ENV) {
                            var d = c.toLowerCase();
                            c !== d && a && a.hasOwnProperty(d) && sr('Prop "' + d + '" is passed to component ' + ir(r || n) + ', but the declared prop name is "' + c + '". Note that HTML attributes are case-insensitive and camelCased props need to use their kebab-case equivalents when using in-DOM templates. You should probably use "' + u + '" instead of "' + c + '".')
                        }
                        Be(i, s, c, u, !0) || Be(i, a, c, u) || Be(i, l, c, u)
                    }
                return i
            }
        }
        function Be(e, t, n, r, o) {
            if (t) {
                if (s(t, n))
                    return e[n] = t[n], o || delete t[n], !0;
                if (s(t, r))
                    return e[n] = t[r], o || delete t[r], !0
            }
            return !1
        }
        function Ue(e) {
            e.hook || (e.hook = {});
            for (var t = 0; t < Qr.length; t++) {
                var n = Qr[t],
                    r = e.hook[n],
                    o = Kr[n];
                e.hook[n] = r ? Ve(o, r) : o
            }
        }
        function Ve(e, t) {
            return function(n, r, o, i) {
                e(n, r, o, i), t(n, r, o, i)
            }
        }
        function He(e, t) {
            var n = e.model && e.model.prop || "value",
                r = e.model && e.model.event || "input";
            (t.props || (t.props = {}))[n] = t.model.value;
            var o = t.on || (t.on = {});
            o[r] ? o[r] = [t.model.callback].concat(o[r]) : o[r] = t.model.callback
        }
        function ze(e, t, n, r, o, i) {
            return (Array.isArray(n) || l(n)) && (o = r, r = n, n = void 0), i && (o = Zr), Fe(e, t, n, r, o)
        }
        function Fe(e, n, r, o, i) {
            if (r && r.__ob__)
                return "production" !== t.env.NODE_ENV && ar("Avoid using observed data object as vnode data: " + JSON.stringify(r) + "\nAlways create fresh vnode data objects in each render!", e), Pr();
            if (!n)
                return Pr();
            Array.isArray(o) && "function" == typeof o[0] && ((r = r || {}).scopedSlots = {
                default: o[0]
            }, o.length = 0), i === Zr ? o = te(o) : i === $r && (o = ee(o));
            var a,
                s;
            if ("string" == typeof n) {
                var l;
                s = zn.getTagNamespace(n), a = zn.isReservedTag(n) ? new Ir(zn.parsePlatformTagName(n), r, o, void 0, void 0, e) : (l = U(e.$options, "components", n)) ? Re(l, r, e, o, n) : new Ir(n, r, o, void 0, void 0, e)
            } else
                a = Re(n, r, e, o);
            return a ? (s && Ge(a, s), a) : Pr()
        }
        function Ge(e, t) {
            if (e.ns = t, "foreignObject" !== e.tag && e.children)
                for (var n = 0, r = e.children.length; n < r; n++) {
                    var o = e.children[n];
                    o.tag && !o.ns && Ge(o, t)
                }
        }
        function Je(e, t) {
            var n,
                r,
                o,
                i,
                a;
            if (Array.isArray(e) || "string" == typeof e)
                for (n = new Array(e.length), r = 0, o = e.length; r < o; r++)
                    n[r] = t(e[r], r);
            else if ("number" == typeof e)
                for (n = new Array(e), r = 0; r < e; r++)
                    n[r] = t(r + 1, r);
            else if (p(e))
                for (i = Object.keys(e), n = new Array(i.length), r = 0, o = i.length; r < o; r++)
                    a = i[r], n[r] = t(e[a], a, r);
            return n
        }
        function qe(e, n, r, o) {
            var i = this.$scopedSlots[e];
            if (i)
                return r = r || {}, o && f(r, o), i(r) || n;
            var a = this.$slots[e];
            return a && "production" !== t.env.NODE_ENV && (a._rendered && ar('Duplicate presence of slot "' + e + '" found in the same render tree - this will likely cause render errors.', this), a._rendered = !0), a || n
        }
        function Ye(e) {
            return U(this.$options, "filters", e, !0) || Hn
        }
        function We(e, t, n) {
            var r = zn.keyCodes[t] || n;
            return Array.isArray(r) ? -1 === r.indexOf(e) : r !== e
        }
        function Ke(e, n, r, o) {
            if (r)
                if (p(r)) {
                    Array.isArray(r) && (r = v(r));
                    var i;
                    for (var a in r) {
                        if ("class" === a || "style" === a)
                            i = e;
                        else {
                            var s = e.attrs && e.attrs.type;
                            i = o || zn.mustUseProp(n, s, a) ? e.domProps || (e.domProps = {}) : e.attrs || (e.attrs = {})
                        }
                        a in i || (i[a] = r[a])
                    }
                } else
                    "production" !== t.env.NODE_ENV && ar("v-bind without argument expects an Object or Array value", this);
            return e
        }
        function Qe(e, t) {
            var n = this._staticTrees[e];
            return n && !t ? Array.isArray(n) ? K(n) : W(n) : (n = this._staticTrees[e] = this.$options.staticRenderFns[e].call(this._renderProxy), Ze(n, "__static__" + e, !1), n)
        }
        function $e(e, t, n) {
            return Ze(e, "__once__" + t + (n ? "_" + n : ""), !0), e
        }
        function Ze(e, t, n) {
            if (Array.isArray(e))
                for (var r = 0; r < e.length; r++)
                    e[r] && "string" != typeof e[r] && et(e[r], t + "_" + r, n);
            else
                et(e, t, n)
        }
        function et(e, t, n) {
            e.isStatic = !0, e.key = t, e.isOnce = n
        }
        function tt(e) {
            e.$vnode = null, e._vnode = null, e._staticTrees = null;
            var t = e.$options._parentVnode,
                n = t && t.context;
            e.$slots = le(e.$options._renderChildren, n), e.$scopedSlots = Fn, e._c = function(t, n, r, o) {
                return ze(e, t, n, r, o, !1)
            }, e.$createElement = function(t, n, r, o) {
                return ze(e, t, n, r, o, !0)
            }
        }
        function nt(e) {
            var t = e.$options.provide;
            t && (e._provided = "function" == typeof t ? t.call(e) : t)
        }
        function rt(e) {
            var n = e.$options.inject;
            if (n)
                for (var r = Array.isArray(n), o = r ? n : rr ? Reflect.ownKeys(n) : Object.keys(n), i = function(i) {
                        for (var a = o[i], s = r ? a : n[a], l = e; l;) {
                            if (l._provided && s in l._provided) {
                                "production" !== t.env.NODE_ENV ? M(e, a, l._provided[s], function() {
                                    ar('Avoid mutating an injected value directly since the changes will be overwritten whenever the provided component re-renders. injection being mutated: "' + a + '"', e)
                                }) : M(e, a, l._provided[s]);
                                break
                            }
                            l = l.$parent
                        }
                    }, a = 0; a < o.length; a++)
                    i(a)
        }
        function ot(e, t) {
            var n = e.$options = Object.create(e.constructor.options);
            n.parent = t.parent, n.propsData = t.propsData, n._parentVnode = t._parentVnode, n._parentListeners = t._parentListeners, n._renderChildren = t._renderChildren, n._componentTag = t._componentTag, n._parentElm = t._parentElm, n._refElm = t._refElm, t.render && (n.render = t.render, n.staticRenderFns = t.staticRenderFns)
        }
        function it(e) {
            var t = e.options;
            if (e.super) {
                var n = it(e.super);
                if (n !== e.superOptions) {
                    e.superOptions = n;
                    var r = at(e);
                    r && f(e.extendOptions, r), (t = e.options = B(n, e.extendOptions)).name && (t.components[t.name] = e)
                }
            }
            return t
        }
        function at(e) {
            var t,
                n = e.options,
                r = e.sealedOptions;
            for (var o in n)
                n[o] !== r[o] && (t || (t = {}), t[o] = st(n[o], r[o]));
            return t
        }
        function st(e, t) {
            if (Array.isArray(e)) {
                var n = [];
                t = Array.isArray(t) ? t : [t];
                for (var r = 0; r < e.length; r++)
                    t.indexOf(e[r]) < 0 && n.push(e[r]);
                return n
            }
            return e
        }
        function lt(e) {
            "production" === t.env.NODE_ENV || this instanceof lt || ar("Vue is a constructor and should be called with the `new` keyword"), this._init(e)
        }
        function ct(e) {
            e.use = function(e) {
                if (!e.installed) {
                    var t = d(arguments, 1);
                    return t.unshift(this), "function" == typeof e.install ? e.install.apply(e, t) : "function" == typeof e && e.apply(null, t), e.installed = !0, this
                }
            }
        }
        function ut(e) {
            e.mixin = function(e) {
                this.options = B(this.options, e)
            }
        }
        function dt(e) {
            e.cid = 0;
            var n = 1;
            e.extend = function(e) {
                e = e || {};
                var r = this,
                    o = r.cid,
                    i = e._Ctor || (e._Ctor = {});
                if (i[o])
                    return i[o];
                var a = e.name || r.options.name;
                "production" !== t.env.NODE_ENV && (/^[a-zA-Z][\w-]*$/.test(a) || ar('Invalid component name: "' + a + '". Component names can only contain alphanumeric characters and the hyphen, and must start with a letter.'));
                var s = function(e) {
                    this._init(e)
                };
                return s.prototype = Object.create(r.prototype), s.prototype.constructor = s, s.cid = n++, s.options = B(r.options, e), s.super = r, s.options.props && ft(s), s.options.computed && pt(s), s.extend = r.extend, s.mixin = r.mixin, s.use = r.use, zn._assetTypes.forEach(function(e) {
                    s[e] = r[e]
                }), a && (s.options.components[a] = s), s.superOptions = r.options, s.extendOptions = e, s.sealedOptions = f({}, s.options), i[o] = s, s
            }
        }
        function ft(e) {
            var t = e.options.props;
            for (var n in t)
                xe(e.prototype, "_props", n)
        }
        function pt(e) {
            var t = e.options.computed;
            for (var n in t)
                Me(e.prototype, n, t[n])
        }
        function ht(e) {
            zn._assetTypes.forEach(function(n) {
                e[n] = function(e, r) {
                    return r ? ("production" !== t.env.NODE_ENV && "component" === n && zn.isReservedTag(e) && ar("Do not use built-in or reserved HTML elements as component id: " + e), "component" === n && h(r) && (r.name = r.name || e, r = this.options._base.extend(r)), "directive" === n && "function" == typeof r && (r = {
                        bind: r,
                        update: r
                    }), this.options[n + "s"][e] = r, r) : this.options[n + "s"][e]
                }
            })
        }
        function vt(e) {
            return e && (e.Ctor.options.name || e.tag)
        }
        function mt(e, t) {
            return "string" == typeof e ? e.split(",").indexOf(t) > -1 : e instanceof RegExp && e.test(t)
        }
        function gt(e, t) {
            for (var n in e) {
                var r = e[n];
                if (r) {
                    var o = vt(r.componentOptions);
                    o && !t(o) && (yt(r), e[n] = null)
                }
            }
        }
        function yt(e) {
            e && (e.componentInstance._inactive || ge(e.componentInstance, "deactivated"), e.componentInstance.$destroy())
        }
        function bt(e) {
            for (var t = e.data, n = e, r = e; r.componentInstance;)
                (r = r.componentInstance._vnode).data && (t = _t(r.data, t));
            for (; n = n.parent;)
                n.data && (t = _t(t, n.data));
            return wt(t)
        }
        function _t(e, t) {
            return {
                staticClass: Et(e.staticClass, t.staticClass),
                class: e.class ? [e.class, t.class] : t.class
            }
        }
        function wt(e) {
            var t = e.class,
                n = e.staticClass;
            return n || t ? Et(n, xt(t)) : ""
        }
        function Et(e, t) {
            return e ? t ? e + " " + t : e : t || ""
        }
        function xt(e) {
            var t = "";
            if (!e)
                return t;
            if ("string" == typeof e)
                return e;
            if (Array.isArray(e)) {
                for (var n, r = 0, o = e.length; r < o; r++)
                    e[r] && (n = xt(e[r])) && (t += n + " ");
                return t.slice(0, -1)
            }
            if (p(e)) {
                for (var i in e)
                    e[i] && (t += i + " ");
                return t.slice(0, -1)
            }
            return t
        }
        function Tt(e) {
            if ("string" == typeof e) {
                var n = document.querySelector(e);
                return n || ("production" !== t.env.NODE_ENV && ar("Cannot find element: " + e), document.createElement("div"))
            }
            return e
        }
        function St(e, t) {
            var n = e.data.ref;
            if (n) {
                var r = e.context,
                    o = e.componentInstance || e.elm,
                    i = r.$refs;
                t ? Array.isArray(i[n]) ? a(i[n], o) : i[n] === o && (i[n] = void 0) : e.data.refInFor ? Array.isArray(i[n]) && i[n].indexOf(o) < 0 ? i[n].push(o) : i[n] = [o] : i[n] = o
            }
        }
        function Ct(e) {
            return void 0 === e || null === e
        }
        function Ot(e) {
            return void 0 !== e && null !== e
        }
        function kt(e) {
            return !0 === e
        }
        function Mt(e, t) {
            return e.key === t.key && e.tag === t.tag && e.isComment === t.isComment && Ot(e.data) === Ot(t.data) && At(e, t)
        }
        function At(e, t) {
            if ("input" !== e.tag)
                return !0;
            var n;
            return (Ot(n = e.data) && Ot(n = n.attrs) && n.type) === (Ot(n = t.data) && Ot(n = n.attrs) && n.type)
        }
        function Nt(e, t, n) {
            var r,
                o,
                i = {};
            for (r = t; r <= n; ++r)
                Ot(o = e[r].key) && (i[o] = r);
            return i
        }
        function It(e, t) {
            (e.data.directives || t.data.directives) && Lt(e, t)
        }
        function Lt(e, t) {
            var n,
                r,
                o,
                i = e === _o,
                a = t === _o,
                s = Rt(e.data.directives, e.context),
                l = Rt(t.data.directives, t.context),
                c = [],
                u = [];
            for (n in l)
                r = s[n], o = l[n], r ? (o.oldValue = r.value, jt(o, "update", t, e), o.def && o.def.componentUpdated && u.push(o)) : (jt(o, "bind", t, e), o.def && o.def.inserted && c.push(o));
            if (c.length) {
                var d = function() {
                    for (var n = 0; n < c.length; n++)
                        jt(c[n], "inserted", t, e)
                };
                i ? Z(t.data.hook || (t.data.hook = {}), "insert", d) : d()
            }
            if (u.length && Z(t.data.hook || (t.data.hook = {}), "postpatch", function() {
                for (var n = 0; n < u.length; n++)
                    jt(u[n], "componentUpdated", t, e)
            }), !i)
                for (n in s)
                    l[n] || jt(s[n], "unbind", e, e, a)
        }
        function Rt(e, t) {
            var n = Object.create(null);
            if (!e)
                return n;
            var r,
                o;
            for (r = 0; r < e.length; r++)
                (o = e[r]).modifiers || (o.modifiers = xo), n[Pt(o)] = o, o.def = U(t.$options, "directives", o.name, !0);
            return n
        }
        function Pt(e) {
            return e.rawName || e.name + "." + Object.keys(e.modifiers || {}).join(".")
        }
        function jt(e, t, n, r, o) {
            var i = e.def && e.def[t];
            i && i(n.elm, e, n, r, o)
        }
        function Dt(e, t) {
            if (e.data.attrs || t.data.attrs) {
                var n,
                    r,
                    o = t.elm,
                    i = e.data.attrs || {},
                    a = t.data.attrs || {};
                a.__ob__ && (a = t.data.attrs = f({}, a));
                for (n in a)
                    r = a[n], i[n] !== r && Xt(o, n, r);
                Kn && a.value !== i.value && Xt(o, "value", a.value);
                for (n in i)
                    null == a[n] && (co(n) ? o.removeAttributeNS(lo, uo(n)) : ao(n) || o.removeAttribute(n))
            }
        }
        function Xt(e, t, n) {
            so(t) ? fo(n) ? e.removeAttribute(t) : e.setAttribute(t, t) : ao(t) ? e.setAttribute(t, fo(n) || "false" === n ? "false" : "true") : co(t) ? fo(n) ? e.removeAttributeNS(lo, uo(t)) : e.setAttributeNS(lo, t, n) : fo(n) ? e.removeAttribute(t) : e.setAttribute(t, n)
        }
        function Bt(e, t) {
            var n = t.elm,
                r = t.data,
                o = e.data;
            if (r.staticClass || r.class || o && (o.staticClass || o.class)) {
                var i = bt(t),
                    a = n._transitionClasses;
                a && (i = Et(i, xt(a))), i !== n._prevClass && (n.setAttribute("class", i), n._prevClass = i)
            }
        }
        function Ut(e) {
            var t;
            e[Oo] && (e[t = Wn ? "change" : "input"] = [].concat(e[Oo], e[t] || []), delete e[Oo]), e[ko] && (e[t = er ? "click" : "change"] = [].concat(e[ko], e[t] || []), delete e[ko])
        }
        function Vt(e, t, n, r) {
            if (n) {
                var o = t,
                    i = ro;
                t = function(n) {
                    null !== (1 === arguments.length ? o(n) : o.apply(null, arguments)) && Ht(e, t, r, i)
                }
            }
            ro.addEventListener(e, t, r)
        }
        function Ht(e, t, n, r) {
            (r || ro).removeEventListener(e, t, n)
        }
        function zt(e, t) {
            if (e.data.on || t.data.on) {
                var n = t.data.on || {},
                    r = e.data.on || {};
                ro = t.elm, Ut(n), $(n, r, Vt, Ht, t.context)
            }
        }
        function Ft(e, t) {
            if (e.data.domProps || t.data.domProps) {
                var n,
                    r,
                    o = t.elm,
                    i = e.data.domProps || {},
                    a = t.data.domProps || {};
                a.__ob__ && (a = t.data.domProps = f({}, a));
                for (n in i)
                    null == a[n] && (o[n] = "");
                for (n in a)
                    if (r = a[n], "textContent" !== n && "innerHTML" !== n || (t.children && (t.children.length = 0), r !== i[n]))
                        if ("value" === n) {
                            o._value = r;
                            var s = null == r ? "" : String(r);
                            Gt(o, t, s) && (o.value = s)
                        } else
                            o[n] = r
            }
        }
        function Gt(e, t, n) {
            return !e.composing && ("option" === t.tag || Jt(e, n) || qt(e, n))
        }
        function Jt(e, t) {
            return document.activeElement !== e && e.value !== t
        }
        function qt(e, t) {
            var n = e.value,
                r = e._vModifiers;
            return r && r.number || "number" === e.type ? o(n) !== o(t) : r && r.trim ? n.trim() !== t.trim() : n !== t
        }
        function Yt(e) {
            var t = Wt(e.style);
            return e.staticStyle ? f(e.staticStyle, t) : t
        }
        function Wt(e) {
            return Array.isArray(e) ? v(e) : "string" == typeof e ? No(e) : e
        }
        function Kt(e, t) {
            var n,
                r = {};
            if (t)
                for (var o = e; o.componentInstance;)
                    (o = o.componentInstance._vnode).data && (n = Yt(o.data)) && f(r, n);
            (n = Yt(e.data)) && f(r, n);
            for (var i = e; i = i.parent;)
                i.data && (n = Yt(i.data)) && f(r, n);
            return r
        }
        function Qt(e, t) {
            var n = t.data,
                r = e.data;
            if (n.staticStyle || n.style || r.staticStyle || r.style) {
                var o,
                    i,
                    a = t.elm,
                    s = e.data.staticStyle,
                    l = e.data.style || {},
                    c = s || l,
                    u = Wt(t.data.style) || {};
                t.data.style = u.__ob__ ? f({}, u) : u;
                var d = Kt(t, !0);
                for (i in c)
                    null == d[i] && Ro(a, i, "");
                for (i in d)
                    (o = d[i]) !== c[i] && Ro(a, i, null == o ? "" : o)
            }
        }
        function $t(e, t) {
            if (t && (t = t.trim()))
                if (e.classList)
                    t.indexOf(" ") > -1 ? t.split(/\s+/).forEach(function(t) {
                        return e.classList.add(t)
                    }) : e.classList.add(t);
                else {
                    var n = " " + (e.getAttribute("class") || "") + " ";
                    n.indexOf(" " + t + " ") < 0 && e.setAttribute("class", (n + t).trim())
                }
        }
        function Zt(e, t) {
            if (t && (t = t.trim()))
                if (e.classList)
                    t.indexOf(" ") > -1 ? t.split(/\s+/).forEach(function(t) {
                        return e.classList.remove(t)
                    }) : e.classList.remove(t);
                else {
                    for (var n = " " + (e.getAttribute("class") || "") + " ", r = " " + t + " "; n.indexOf(r) >= 0;)
                        n = n.replace(r, " ");
                    e.setAttribute("class", n.trim())
                }
        }
        function en(e) {
            if (e) {
                if ("object" == typeof e) {
                    var t = {};
                    return !1 !== e.css && f(t, Xo(e.name || "v")), f(t, e), t
                }
                return "string" == typeof e ? Xo(e) : void 0
            }
        }
        function tn(e) {
            Jo(function() {
                Jo(e)
            })
        }
        function nn(e, t) {
            (e._transitionClasses || (e._transitionClasses = [])).push(t), $t(e, t)
        }
        function rn(e, t) {
            e._transitionClasses && a(e._transitionClasses, t), Zt(e, t)
        }
        function on(e, t, n) {
            var r = an(e, t),
                o = r.type,
                i = r.timeout,
                a = r.propCount;
            if (!o)
                return n();
            var s = o === Uo ? zo : Go,
                l = 0,
                c = function() {
                    e.removeEventListener(s, u), n()
                },
                u = function(t) {
                    t.target === e && ++l >= a && c()
                };
            setTimeout(function() {
                l < a && c()
            }, i + 1), e.addEventListener(s, u)
        }
        function an(e, t) {
            var n,
                r = window.getComputedStyle(e),
                o = r[Ho + "Delay"].split(", "),
                i = r[Ho + "Duration"].split(", "),
                a = sn(o, i),
                s = r[Fo + "Delay"].split(", "),
                l = r[Fo + "Duration"].split(", "),
                c = sn(s, l),
                u = 0,
                d = 0;
            return t === Uo ? a > 0 && (n = Uo, u = a, d = i.length) : t === Vo ? c > 0 && (n = Vo, u = c, d = l.length) : d = (n = (u = Math.max(a, c)) > 0 ? a > c ? Uo : Vo : null) ? n === Uo ? i.length : l.length : 0, {
                type: n,
                timeout: u,
                propCount: d,
                hasTransform: n === Uo && qo.test(r[Ho + "Property"])
            }
        }
        function sn(e, t) {
            for (; e.length < t.length;)
                e = e.concat(e);
            return Math.max.apply(null, t.map(function(t, n) {
                return ln(t) + ln(e[n])
            }))
        }
        function ln(e) {
            return 1e3 * Number(e.slice(0, -1))
        }
        function cn(e, n) {
            var r = e.elm;
            r._leaveCb && (r._leaveCb.cancelled = !0, r._leaveCb());
            var i = en(e.data.transition);
            if (i && !r._enterCb && 1 === r.nodeType) {
                for (var a = i.css, s = i.type, l = i.enterClass, c = i.enterToClass, u = i.enterActiveClass, d = i.appearClass, f = i.appearToClass, h = i.appearActiveClass, v = i.beforeEnter, m = i.enter, g = i.afterEnter, y = i.enterCancelled, _ = i.beforeAppear, w = i.appear, E = i.afterAppear, x = i.appearCancelled, T = i.duration, S = Dr, C = Dr.$vnode; C && C.parent;)
                    S = (C = C.parent).context;
                var O = !S._isMounted || !e.isRootInsert;
                if (!O || w || "" === w) {
                    var k = O && d ? d : l,
                        M = O && h ? h : u,
                        A = O && f ? f : c,
                        N = O ? _ || v : v,
                        I = O && "function" == typeof w ? w : m,
                        L = O ? E || g : g,
                        R = O ? x || y : y,
                        P = o(p(T) ? T.enter : T);
                    "production" !== t.env.NODE_ENV && null != P && dn(P, "enter", e);
                    var j = !1 !== a && !Kn,
                        D = pn(I),
                        X = r._enterCb = b(function() {
                            j && (rn(r, A), rn(r, M)), X.cancelled ? (j && rn(r, k), R && R(r)) : L && L(r), r._enterCb = null
                        });
                    e.data.show || Z(e.data.hook || (e.data.hook = {}), "insert", function() {
                        var t = r.parentNode,
                            n = t && t._pending && t._pending[e.key];
                        n && n.tag === e.tag && n.elm._leaveCb && n.elm._leaveCb(), I && I(r, X)
                    }), N && N(r), j && (nn(r, k), nn(r, M), tn(function() {
                        nn(r, A), rn(r, k), X.cancelled || D || (fn(P) ? setTimeout(X, P) : on(r, s, X))
                    })), e.data.show && (n && n(), I && I(r, X)), j || D || X()
                }
            }
        }
        function un(e, n) {
            function r() {
                x.cancelled || (e.data.show || ((i.parentNode._pending || (i.parentNode._pending = {}))[e.key] = e), f && f(i), _ && (nn(i, c), nn(i, d), tn(function() {
                    nn(i, u), rn(i, c), x.cancelled || w || (fn(E) ? setTimeout(x, E) : on(i, l, x))
                })), h && h(i, x), _ || w || x())
            }
            var i = e.elm;
            i._enterCb && (i._enterCb.cancelled = !0, i._enterCb());
            var a = en(e.data.transition);
            if (!a)
                return n();
            if (!i._leaveCb && 1 === i.nodeType) {
                var s = a.css,
                    l = a.type,
                    c = a.leaveClass,
                    u = a.leaveToClass,
                    d = a.leaveActiveClass,
                    f = a.beforeLeave,
                    h = a.leave,
                    v = a.afterLeave,
                    m = a.leaveCancelled,
                    g = a.delayLeave,
                    y = a.duration,
                    _ = !1 !== s && !Kn,
                    w = pn(h),
                    E = o(p(y) ? y.leave : y);
                "production" !== t.env.NODE_ENV && null != E && dn(E, "leave", e);
                var x = i._leaveCb = b(function() {
                    i.parentNode && i.parentNode._pending && (i.parentNode._pending[e.key] = null), _ && (rn(i, u), rn(i, d)), x.cancelled ? (_ && rn(i, c), m && m(i)) : (n(), v && v(i)), i._leaveCb = null
                });
                g ? g(r) : r()
            }
        }
        function dn(e, t, n) {
            "number" != typeof e ? ar("<transition> explicit " + t + " duration is not a valid number - got " + JSON.stringify(e) + ".", n.context) : isNaN(e) && ar("<transition> explicit " + t + " duration is NaN - the duration expression might be incorrect.", n.context)
        }
        function fn(e) {
            return "number" == typeof e && !isNaN(e)
        }
        function pn(e) {
            if (!e)
                return !1;
            var t = e.fns;
            return t ? pn(Array.isArray(t) ? t[0] : t) : (e._length || e.length) > 1
        }
        function hn(e, t) {
            t.data.show || cn(t)
        }
        function vn(e, n, r) {
            var o = n.value,
                i = e.multiple;
            if (!i || Array.isArray(o)) {
                for (var a, s, l = 0, c = e.options.length; l < c; l++)
                    if (s = e.options[l], i)
                        a = y(o, gn(s)) > -1, s.selected !== a && (s.selected = a);
                    else if (g(gn(s), o))
                        return void (e.selectedIndex !== l && (e.selectedIndex = l));
                i || (e.selectedIndex = -1)
            } else
                "production" !== t.env.NODE_ENV && ar('<select multiple v-model="' + n.expression + '"> expects an Array value for its binding, but got ' + Object.prototype.toString.call(o).slice(8, -1), r)
        }
        function mn(e, t) {
            for (var n = 0, r = t.length; n < r; n++)
                if (g(gn(t[n]), e))
                    return !1;
            return !0
        }
        function gn(e) {
            return "_value" in e ? e._value : e.value
        }
        function yn(e) {
            e.target.composing = !0
        }
        function bn(e) {
            e.target.composing = !1, _n(e.target, "input")
        }
        function _n(e, t) {
            var n = document.createEvent("HTMLEvents");
            n.initEvent(t, !0, !0), e.dispatchEvent(n)
        }
        function wn(e) {
            return !e.componentInstance || e.data && e.data.transition ? e : wn(e.componentInstance._vnode)
        }
        function En(e) {
            var t = e && e.componentOptions;
            return t && t.Ctor.options.abstract ? En(re(t.children)) : e
        }
        function xn(e) {
            var t = {},
                n = e.$options;
            for (var r in n.propsData)
                t[r] = e[r];
            var o = n._parentListeners;
            for (var i in o)
                t[Pn(i)] = o[i];
            return t
        }
        function Tn(e, t) {
            return /\d-keep-alive$/.test(t.tag) ? e("keep-alive") : null
        }
        function Sn(e) {
            for (; e = e.parent;)
                if (e.data.transition)
                    return !0
        }
        function Cn(e, t) {
            return t.key === e.key && t.tag === e.tag
        }
        function On(e) {
            e.elm._moveCb && e.elm._moveCb(), e.elm._enterCb && e.elm._enterCb()
        }
        function kn(e) {
            e.data.newPos = e.elm.getBoundingClientRect()
        }
        function Mn(e) {
            var t = e.data.pos,
                n = e.data.newPos,
                r = t.left - n.left,
                o = t.top - n.top;
            if (r || o) {
                e.data.moved = !0;
                var i = e.elm.style;
                i.transform = i.WebkitTransform = "translate(" + r + "px," + o + "px)", i.transitionDuration = "0s"
            }
        }
        var An,
            Nn,
            In = i("slot,component", !0),
            Ln = Object.prototype.hasOwnProperty,
            Rn = /-(\w)/g,
            Pn = c(function(e) {
                return e.replace(Rn, function(e, t) {
                    return t ? t.toUpperCase() : ""
                })
            }),
            jn = c(function(e) {
                return e.charAt(0).toUpperCase() + e.slice(1)
            }),
            Dn = /([^-])([A-Z])/g,
            Xn = c(function(e) {
                return e.replace(Dn, "$1-$2").replace(Dn, "$1-$2").toLowerCase()
            }),
            Bn = Object.prototype.toString,
            Un = "[object Object]",
            Vn = function() {
                return !1
            },
            Hn = function(e) {
                return e
            },
            zn = {
                optionMergeStrategies: Object.create(null),
                silent: !1,
                productionTip: "production" !== t.env.NODE_ENV,
                devtools: "production" !== t.env.NODE_ENV,
                performance: !1,
                errorHandler: null,
                ignoredElements: [],
                keyCodes: Object.create(null),
                isReservedTag: Vn,
                isUnknownElement: Vn,
                getTagNamespace: m,
                parsePlatformTagName: Hn,
                mustUseProp: Vn,
                _assetTypes: ["component", "directive", "filter"],
                _lifecycleHooks: ["beforeCreate", "created", "beforeMount", "mounted", "beforeUpdate", "updated", "beforeDestroy", "destroyed", "activated", "deactivated"],
                _maxUpdateCount: 100
            },
            Fn = Object.freeze({}),
            Gn = /[^\w.$]/,
            Jn = "__proto__" in {},
            qn = "undefined" != typeof window,
            Yn = qn && window.navigator.userAgent.toLowerCase(),
            Wn = Yn && /msie|trident/.test(Yn),
            Kn = Yn && Yn.indexOf("msie 9.0") > 0,
            Qn = Yn && Yn.indexOf("edge/") > 0,
            $n = Yn && Yn.indexOf("android") > 0,
            Zn = Yn && /iphone|ipad|ipod|ios/.test(Yn),
            er = Yn && /chrome\/\d+/.test(Yn) && !Qn,
            tr = function() {
                return void 0 === An && (An = !qn && void 0 !== n && "server" === n.process.env.VUE_ENV), An
            },
            nr = qn && window.__VUE_DEVTOOLS_GLOBAL_HOOK__,
            rr = "undefined" != typeof Symbol && x(Symbol) && "undefined" != typeof Reflect && x(Reflect.ownKeys),
            or = function() {
                function e() {
                    r = !1;
                    var e = n.slice(0);
                    n.length = 0;
                    for (var t = 0; t < e.length; t++)
                        e[t]()
                }
                var t,
                    n = [],
                    r = !1;
                if ("undefined" != typeof Promise && x(Promise)) {
                    var o = Promise.resolve(),
                        i = function(e) {
                            console.error(e)
                        };
                    t = function() {
                        o.then(e).catch(i), Zn && setTimeout(m)
                    }
                } else if ("undefined" == typeof MutationObserver || !x(MutationObserver) && "[object MutationObserverConstructor]" !== MutationObserver.toString())
                    t = function() {
                        setTimeout(e, 0)
                    };
                else {
                    var a = 1,
                        s = new MutationObserver(e),
                        l = document.createTextNode(String(a));
                    s.observe(l, {
                        characterData: !0
                    }), t = function() {
                        a = (a + 1) % 2, l.data = String(a)
                    }
                }
                return function(e, o) {
                    var i;
                    if (n.push(function() {
                        e && e.call(o), i && i(o)
                    }), r || (r = !0, t()), !e && "undefined" != typeof Promise)
                        return new Promise(function(e) {
                            i = e
                        })
                }
            }();
        Nn = "undefined" != typeof Set && x(Set) ? Set : function() {
            function e() {
                this.set = Object.create(null)
            }
            return e.prototype.has = function(e) {
                return !0 === this.set[e]
            }, e.prototype.add = function(e) {
                this.set[e] = !0
            }, e.prototype.clear = function() {
                this.set = Object.create(null)
            }, e
        }();
        var ir,
            ar = m,
            sr = m;
        if ("production" !== t.env.NODE_ENV) {
            var lr = "undefined" != typeof console,
                cr = /(?:^|[-_])(\w)/g,
                ur = function(e) {
                    return e.replace(cr, function(e) {
                        return e.toUpperCase()
                    }).replace(/[-_]/g, "")
                };
            ar = function(e, t) {
                lr && !zn.silent && console.error("[Vue warn]: " + e + " " + (t ? dr(ir(t)) : ""))
            }, sr = function(e, t) {
                lr && !zn.silent && console.warn("[Vue tip]: " + e + " " + (t ? dr(ir(t)) : ""))
            }, ir = function(e, t) {
                if (e.$root === e)
                    return "<Root>";
                var n = "string" == typeof e ? e : "function" == typeof e && e.options ? e.options.name : e._isVue ? e.$options.name || e.$options._componentTag : e.name,
                    r = e._isVue && e.$options.__file;
                if (!n && r) {
                    var o = r.match(/([^/\\]+)\.vue$/);
                    n = o && o[1]
                }
                return (n ? "<" + ur(n) + ">" : "<Anonymous>") + (r && !1 !== t ? " at " + r : "")
            };
            var dr = function(e) {
                return "<Anonymous>" === e && (e += ' - use the "name" option for better debugging messages.'), "\n(found in " + e + ")"
            }
        }
        var fr = 0,
            pr = function() {
                this.id = fr++, this.subs = []
            };
        pr.prototype.addSub = function(e) {
            this.subs.push(e)
        }, pr.prototype.removeSub = function(e) {
            a(this.subs, e)
        }, pr.prototype.depend = function() {
            pr.target && pr.target.addDep(this)
        }, pr.prototype.notify = function() {
            for (var e = this.subs.slice(), t = 0, n = e.length; t < n; t++)
                e[t].update()
        }, pr.target = null;
        var hr = [],
            vr = Array.prototype,
            mr = Object.create(vr);
        ["push", "pop", "shift", "unshift", "splice", "sort", "reverse"].forEach(function(e) {
            var t = vr[e];
            w(mr, e, function() {
                for (var n = arguments, r = arguments.length, o = new Array(r); r--;)
                    o[r] = n[r];
                var i,
                    a = t.apply(this, o),
                    s = this.__ob__;
                switch (e) {
                case "push":
                case "unshift":
                    i = o;
                    break;
                case "splice":
                    i = o.slice(2)
                }
                return i && s.observeArray(i), s.dep.notify(), a
            })
        });
        var gr = Object.getOwnPropertyNames(mr),
            yr = {
                shouldConvert: !0,
                isSettingProps: !1
            },
            br = function(e) {
                this.value = e, this.dep = new pr, this.vmCount = 0, w(e, "__ob__", this), Array.isArray(e) ? ((Jn ? C : O)(e, mr, gr), this.observeArray(e)) : this.walk(e)
            };
        br.prototype.walk = function(e) {
            for (var t = Object.keys(e), n = 0; n < t.length; n++)
                M(e, t[n], e[t[n]])
        }, br.prototype.observeArray = function(e) {
            for (var t = 0, n = e.length; t < n; t++)
                k(e[t])
        };
        var _r = zn.optionMergeStrategies;
        "production" !== t.env.NODE_ENV && (_r.el = _r.propsData = function(e, t, n, r) {
            return n || ar('option "' + r + '" can only be used during instance creation with the `new` keyword.'), Er(e, t)
        }), _r.data = function(e, n, r) {
            return r ? e || n ? function() {
                var t = "function" == typeof n ? n.call(r) : n,
                    o = "function" == typeof e ? e.call(r) : void 0;
                return t ? L(t, o) : o
            } : void 0 : n ? "function" != typeof n ? ("production" !== t.env.NODE_ENV && ar('The "data" option should be a function that returns a per-instance value in component definitions.', r), e) : e ? function() {
                return L(n.call(this), e.call(this))
            } : n : e
        }, zn._lifecycleHooks.forEach(function(e) {
            _r[e] = R
        }), zn._assetTypes.forEach(function(e) {
            _r[e + "s"] = P
        }), _r.watch = function(e, t) {
            if (!t)
                return Object.create(e || null);
            if (!e)
                return t;
            var n = {};
            f(n, e);
            for (var r in t) {
                var o = n[r],
                    i = t[r];
                o && !Array.isArray(o) && (o = [o]), n[r] = o ? o.concat(i) : [i]
            }
            return n
        }, _r.props = _r.methods = _r.computed = function(e, t) {
            if (!t)
                return Object.create(e || null);
            if (!e)
                return t;
            var n = Object.create(null);
            return f(n, e), f(n, t), n
        };
        var wr,
            Er = function(e, t) {
                return void 0 === t ? e : t
            };
        if ("production" !== t.env.NODE_ENV) {
            var xr = i("Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,require"),
                Tr = function(e, t) {
                    ar('Property or method "' + t + '" is not defined on the instance but referenced during render. Make sure to declare reactive data properties in the data option.', e)
                },
                Sr = "undefined" != typeof Proxy && Proxy.toString().match(/native code/);
            if (Sr) {
                var Cr = i("stop,prevent,self,ctrl,shift,alt,meta");
                zn.keyCodes = new Proxy(zn.keyCodes, {
                    set: function(e, t, n) {
                        return Cr(t) ? (ar("Avoid overwriting built-in modifier in config.keyCodes: ." + t), !1) : (e[t] = n, !0)
                    }
                })
            }
            var Or = {
                    has: function(e, t) {
                        var n = t in e,
                            r = xr(t) || "_" === t.charAt(0);
                        return n || r || Tr(e, t), n || !r
                    }
                },
                kr = {
                    get: function(e, t) {
                        return "string" != typeof t || t in e || Tr(e, t), e[t]
                    }
                };
            wr = function(e) {
                if (Sr) {
                    var t = e.$options,
                        n = t.render && t.render._withStripped ? kr : Or;
                    e._renderProxy = new Proxy(e, n)
                } else
                    e._renderProxy = e
            }
        }
        var Mr,
            Ar;
        if ("production" !== t.env.NODE_ENV) {
            var Nr = qn && window.performance;
            Nr && Nr.mark && Nr.measure && Nr.clearMarks && Nr.clearMeasures && (Mr = function(e) {
                return Nr.mark(e)
            }, Ar = function(e, t, n) {
                Nr.measure(e, t, n), Nr.clearMarks(t), Nr.clearMarks(n), Nr.clearMeasures(e)
            })
        }
        var Ir = function(e, t, n, r, o, i, a) {
                this.tag = e, this.data = t, this.children = n, this.text = r, this.elm = o, this.ns = void 0, this.context = i, this.functionalContext = void 0, this.key = t && t.key, this.componentOptions = a, this.componentInstance = void 0, this.parent = void 0, this.raw = !1, this.isStatic = !1, this.isRootInsert = !0, this.isComment = !1, this.isCloned = !1, this.isOnce = !1
            },
            Lr = {
                child: {}
            };
        Lr.child.get = function() {
            return this.componentInstance
        }, Object.defineProperties(Ir.prototype, Lr);
        var Rr,
            Pr = function() {
                var e = new Ir;
                return e.text = "", e.isComment = !0, e
            },
            jr = c(function(e) {
                var t = "~" === e.charAt(0),
                    n = "!" === (e = t ? e.slice(1) : e).charAt(0);
                return e = n ? e.slice(1) : e, {
                    name: e,
                    once: t,
                    capture: n
                }
            }),
            Dr = null,
            Xr = [],
            Br = {},
            Ur = {},
            Vr = !1,
            Hr = !1,
            zr = 0,
            Fr = 0,
            Gr = function(e, n, r, o) {
                this.vm = e, e._watchers.push(this), o ? (this.deep = !!o.deep, this.user = !!o.user, this.lazy = !!o.lazy, this.sync = !!o.sync) : this.deep = this.user = this.lazy = this.sync = !1, this.cb = r, this.id = ++Fr, this.active = !0, this.dirty = this.lazy, this.deps = [], this.newDeps = [], this.depIds = new Nn, this.newDepIds = new Nn, this.expression = "production" !== t.env.NODE_ENV ? n.toString() : "", "function" == typeof n ? this.getter = n : (this.getter = E(n), this.getter || (this.getter = function() {}, "production" !== t.env.NODE_ENV && ar('Failed watching path: "' + n + '" Watcher only accepts simple dot-delimited paths. For full control, use a function instead.', e))), this.value = this.lazy ? void 0 : this.get()
            };
        Gr.prototype.get = function() {
            T(this);
            var e,
                t = this.vm;
            if (this.user)
                try {
                    e = this.getter.call(t, t)
                } catch (e) {
                    q(e, t, 'getter for watcher "' + this.expression + '"')
                }
            else
                e = this.getter.call(t, t);
            return this.deep && we(e), S(), this.cleanupDeps(), e
        }, Gr.prototype.addDep = function(e) {
            var t = e.id;
            this.newDepIds.has(t) || (this.newDepIds.add(t), this.newDeps.push(e), this.depIds.has(t) || e.addSub(this))
        }, Gr.prototype.cleanupDeps = function() {
            for (var e = this, t = this.deps.length; t--;) {
                var n = e.deps[t];
                e.newDepIds.has(n.id) || n.removeSub(e)
            }
            var r = this.depIds;
            this.depIds = this.newDepIds, this.newDepIds = r, this.newDepIds.clear(), r = this.deps, this.deps = this.newDeps, this.newDeps = r, this.newDeps.length = 0
        }, Gr.prototype.update = function() {
            this.lazy ? this.dirty = !0 : this.sync ? this.run() : _e(this)
        }, Gr.prototype.run = function() {
            if (this.active) {
                var e = this.get();
                if (e !== this.value || p(e) || this.deep) {
                    var t = this.value;
                    if (this.value = e, this.user)
                        try {
                            this.cb.call(this.vm, e, t)
                        } catch (e) {
                            q(e, this.vm, 'callback for watcher "' + this.expression + '"')
                        }
                    else
                        this.cb.call(this.vm, e, t)
                }
            }
        }, Gr.prototype.evaluate = function() {
            this.value = this.get(), this.dirty = !1
        }, Gr.prototype.depend = function() {
            for (var e = this, t = this.deps.length; t--;)
                e.deps[t].depend()
        }, Gr.prototype.teardown = function() {
            var e = this;
            if (this.active) {
                this.vm._isBeingDestroyed || a(this.vm._watchers, this);
                for (var t = this.deps.length; t--;)
                    e.deps[t].removeSub(e);
                this.active = !1
            }
        };
        var Jr = new Nn,
            qr = {
                enumerable: !0,
                configurable: !0,
                get: m,
                set: m
            },
            Yr = {
                key: 1,
                ref: 1,
                slot: 1
            },
            Wr = {
                lazy: !0
            },
            Kr = {
                init: function(e, t, n, r) {
                    if (!e.componentInstance || e.componentInstance._isDestroyed)
                        (e.componentInstance = je(e, Dr, n, r)).$mount(t ? e.elm : void 0, t);
                    else if (e.data.keepAlive) {
                        var o = e;
                        Kr.prepatch(o, o)
                    }
                },
                prepatch: function(e, t) {
                    var n = t.componentOptions;
                    pe(t.componentInstance = e.componentInstance, n.propsData, n.listeners, t, n.children)
                },
                insert: function(e) {
                    e.componentInstance._isMounted || (e.componentInstance._isMounted = !0, ge(e.componentInstance, "mounted")), e.data.keepAlive && ve(e.componentInstance, !0)
                },
                destroy: function(e) {
                    e.componentInstance._isDestroyed || (e.data.keepAlive ? me(e.componentInstance, !0) : e.componentInstance.$destroy())
                }
            },
            Qr = Object.keys(Kr),
            $r = 1,
            Zr = 2,
            eo = 0;
        !function(e) {
            e.prototype._init = function(e) {
                var n = this;
                n._uid = eo++;
                var r,
                    o;
                "production" !== t.env.NODE_ENV && zn.performance && Mr && (r = "vue-perf-init:" + n._uid, o = "vue-perf-end:" + n._uid, Mr(r)), n._isVue = !0, e && e._isComponent ? ot(n, e) : n.$options = B(it(n.constructor), e || {}, n), "production" !== t.env.NODE_ENV ? wr(n) : n._renderProxy = n, n._self = n, de(n), oe(n), tt(n), ge(n, "beforeCreate"), rt(n), Te(n), nt(n), ge(n, "created"), "production" !== t.env.NODE_ENV && zn.performance && Mr && (n._name = ir(n, !1), Mr(o), Ar(n._name + " init", r, o)), n.$options.el && n.$mount(n.$options.el)
            }
        }(lt), function(e) {
            var n = {};
            n.get = function() {
                return this._data
            };
            var r = {};
            r.get = function() {
                return this._props
            }, "production" !== t.env.NODE_ENV && (n.set = function(e) {
                ar("Avoid replacing instance root $data. Use nested data properties instead.", this)
            }, r.set = function() {
                ar("$props is readonly.", this)
            }), Object.defineProperty(e.prototype, "$data", n), Object.defineProperty(e.prototype, "$props", r), e.prototype.$set = A, e.prototype.$delete = N, e.prototype.$watch = function(e, t, n) {
                var r = this;
                (n = n || {}).user = !0;
                var o = new Gr(r, e, t, n);
                return n.immediate && t.call(r, o.value), function() {
                    o.teardown()
                }
            }
        }(lt), function(e) {
            var n = /^hook:/;
            e.prototype.$on = function(e, t) {
                var r = this,
                    o = this;
                if (Array.isArray(e))
                    for (var i = 0, a = e.length; i < a; i++)
                        r.$on(e[i], t);
                else
                    (o._events[e] || (o._events[e] = [])).push(t), n.test(e) && (o._hasHookEvent = !0);
                return o
            }, e.prototype.$once = function(e, t) {
                function n() {
                    r.$off(e, n), t.apply(r, arguments)
                }
                var r = this;
                return n.fn = t, r.$on(e, n), r
            }, e.prototype.$off = function(e, t) {
                var n = this,
                    r = this;
                if (!arguments.length)
                    return r._events = Object.create(null), r;
                if (Array.isArray(e)) {
                    for (var o = 0, i = e.length; o < i; o++)
                        n.$off(e[o], t);
                    return r
                }
                var a = r._events[e];
                if (!a)
                    return r;
                if (1 === arguments.length)
                    return r._events[e] = null, r;
                for (var s, l = a.length; l--;)
                    if ((s = a[l]) === t || s.fn === t) {
                        a.splice(l, 1);
                        break
                    }
                return r
            }, e.prototype.$emit = function(e) {
                var n = this;
                if ("production" !== t.env.NODE_ENV) {
                    var r = e.toLowerCase();
                    r !== e && n._events[r] && sr('Event "' + r + '" is emitted in component ' + ir(n) + ' but the handler is registered for "' + e + '". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "' + Xn(e) + '" instead of "' + e + '".')
                }
                var o = n._events[e];
                if (o) {
                    o = o.length > 1 ? d(o) : o;
                    for (var i = d(arguments, 1), a = 0, s = o.length; a < s; a++)
                        o[a].apply(n, i)
                }
                return n
            }
        }(lt), function(e) {
            e.prototype._update = function(e, t) {
                var n = this;
                n._isMounted && ge(n, "beforeUpdate");
                var r = n.$el,
                    o = n._vnode,
                    i = Dr;
                Dr = n, n._vnode = e, n.$el = o ? n.__patch__(o, e) : n.__patch__(n.$el, e, t, !1, n.$options._parentElm, n.$options._refElm), Dr = i, r && (r.__vue__ = null), n.$el && (n.$el.__vue__ = n), n.$vnode && n.$parent && n.$vnode === n.$parent._vnode && (n.$parent.$el = n.$el)
            }, e.prototype.$forceUpdate = function() {
                var e = this;
                e._watcher && e._watcher.update()
            }, e.prototype.$destroy = function() {
                var e = this;
                if (!e._isBeingDestroyed) {
                    ge(e, "beforeDestroy"), e._isBeingDestroyed = !0;
                    var t = e.$parent;
                    !t || t._isBeingDestroyed || e.$options.abstract || a(t.$children, e), e._watcher && e._watcher.teardown();
                    for (var n = e._watchers.length; n--;)
                        e._watchers[n].teardown();
                    e._data.__ob__ && e._data.__ob__.vmCount--, e._isDestroyed = !0, e.__patch__(e._vnode, null), ge(e, "destroyed"), e.$off(), e.$el && (e.$el.__vue__ = null), e.$options._parentElm = e.$options._refElm = null
                }
            }
        }(lt), function(e) {
            e.prototype.$nextTick = function(e) {
                return or(e, this)
            }, e.prototype._render = function() {
                var e = this,
                    n = e.$options,
                    r = n.render,
                    o = n.staticRenderFns,
                    i = n._parentVnode;
                if (e._isMounted)
                    for (var a in e.$slots)
                        e.$slots[a] = K(e.$slots[a]);
                e.$scopedSlots = i && i.data.scopedSlots || Fn, o && !e._staticTrees && (e._staticTrees = []), e.$vnode = i;
                var s;
                try {
                    s = r.call(e._renderProxy, e.$createElement)
                } catch (n) {
                    q(n, e, "render function"), s = "production" !== t.env.NODE_ENV && e.$options.renderError ? e.$options.renderError.call(e._renderProxy, e.$createElement, n) : e._vnode
                }
                return s instanceof Ir || ("production" !== t.env.NODE_ENV && Array.isArray(s) && ar("Multiple root nodes returned from render function. Render function should return a single root node.", e), s = Pr()), s.parent = i, s
            }, e.prototype._o = $e, e.prototype._n = o, e.prototype._s = r, e.prototype._l = Je, e.prototype._t = qe, e.prototype._q = g, e.prototype._i = y, e.prototype._m = Qe, e.prototype._f = Ye, e.prototype._k = We, e.prototype._b = Ke, e.prototype._v = Y, e.prototype._e = Pr, e.prototype._u = ue
        }(lt);
        var to = [String, RegExp],
            no = {
                KeepAlive: {
                    name: "keep-alive",
                    abstract: !0,
                    props: {
                        include: to,
                        exclude: to
                    },
                    created: function() {
                        this.cache = Object.create(null)
                    },
                    destroyed: function() {
                        var e = this;
                        for (var t in e.cache)
                            yt(e.cache[t])
                    },
                    watch: {
                        include: function(e) {
                            gt(this.cache, function(t) {
                                return mt(e, t)
                            })
                        },
                        exclude: function(e) {
                            gt(this.cache, function(t) {
                                return !mt(e, t)
                            })
                        }
                    },
                    render: function() {
                        var e = re(this.$slots.default),
                            t = e && e.componentOptions;
                        if (t) {
                            var n = vt(t);
                            if (n && (this.include && !mt(this.include, n) || this.exclude && mt(this.exclude, n)))
                                return e;
                            var r = null == e.key ? t.Ctor.cid + (t.tag ? "::" + t.tag : "") : e.key;
                            this.cache[r] ? e.componentInstance = this.cache[r].componentInstance : this.cache[r] = e, e.data.keepAlive = !0
                        }
                        return e
                    }
                }
            };
        !function(e) {
            var n = {};
            n.get = function() {
                return zn
            }, "production" !== t.env.NODE_ENV && (n.set = function() {
                ar("Do not replace the Vue.config object, set individual fields instead.")
            }), Object.defineProperty(e, "config", n), e.util = {
                warn: ar,
                extend: f,
                mergeOptions: B,
                defineReactive: M
            }, e.set = A, e.delete = N, e.nextTick = or, e.options = Object.create(null), zn._assetTypes.forEach(function(t) {
                e.options[t + "s"] = Object.create(null)
            }), e.options._base = e, f(e.options.components, no), ct(e), ut(e), dt(e), ht(e)
        }(lt), Object.defineProperty(lt.prototype, "$isServer", {
            get: tr
        }), lt.version = "2.2.6";
        var ro,
            oo,
            io = i("input,textarea,option,select"),
            ao = i("contenteditable,draggable,spellcheck"),
            so = i("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,translate,truespeed,typemustmatch,visible"),
            lo = "http://www.w3.org/1999/xlink",
            co = function(e) {
                return ":" === e.charAt(5) && "xlink" === e.slice(0, 5)
            },
            uo = function(e) {
                return co(e) ? e.slice(6, e.length) : ""
            },
            fo = function(e) {
                return null == e || !1 === e
            },
            po = {
                svg: "http://www.w3.org/2000/svg",
                math: "http://www.w3.org/1998/Math/MathML"
            },
            ho = i("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template"),
            vo = i("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view", !0),
            mo = function(e) {
                return ho(e) || vo(e)
            },
            go = Object.create(null),
            yo = Object.freeze({
                createElement: function(e, t) {
                    var n = document.createElement(e);
                    return "select" !== e ? n : (t.data && t.data.attrs && void 0 !== t.data.attrs.multiple && n.setAttribute("multiple", "multiple"), n)
                },
                createElementNS: function(e, t) {
                    return document.createElementNS(po[e], t)
                },
                createTextNode: function(e) {
                    return document.createTextNode(e)
                },
                createComment: function(e) {
                    return document.createComment(e)
                },
                insertBefore: function(e, t, n) {
                    e.insertBefore(t, n)
                },
                removeChild: function(e, t) {
                    e.removeChild(t)
                },
                appendChild: function(e, t) {
                    e.appendChild(t)
                },
                parentNode: function(e) {
                    return e.parentNode
                },
                nextSibling: function(e) {
                    return e.nextSibling
                },
                tagName: function(e) {
                    return e.tagName
                },
                setTextContent: function(e, t) {
                    e.textContent = t
                },
                setAttribute: function(e, t, n) {
                    e.setAttribute(t, n)
                }
            }),
            bo = {
                create: function(e, t) {
                    St(t)
                },
                update: function(e, t) {
                    e.data.ref !== t.data.ref && (St(e, !0), St(t))
                },
                destroy: function(e) {
                    St(e, !0)
                }
            },
            _o = new Ir("", {}, []),
            wo = ["create", "activate", "update", "remove", "destroy"],
            Eo = {
                create: It,
                update: It,
                destroy: function(e) {
                    It(e, _o)
                }
            },
            xo = Object.create(null),
            To = [bo, Eo],
            So = {
                create: Dt,
                update: Dt
            },
            Co = {
                create: Bt,
                update: Bt
            },
            Oo = "__r",
            ko = "__c",
            Mo = {
                create: zt,
                update: zt
            },
            Ao = {
                create: Ft,
                update: Ft
            },
            No = c(function(e) {
                var t = {},
                    n = /:(.+)/;
                return e.split(/;(?![^(]*\))/g).forEach(function(e) {
                    if (e) {
                        var r = e.split(n);
                        r.length > 1 && (t[r[0].trim()] = r[1].trim())
                    }
                }), t
            }),
            Io = /^--/,
            Lo = /\s*!important$/,
            Ro = function(e, t, n) {
                Io.test(t) ? e.style.setProperty(t, n) : Lo.test(n) ? e.style.setProperty(t, n.replace(Lo, ""), "important") : e.style[jo(t)] = n
            },
            Po = ["Webkit", "Moz", "ms"],
            jo = c(function(e) {
                if (oo = oo || document.createElement("div"), "filter" !== (e = Pn(e)) && e in oo.style)
                    return e;
                for (var t = e.charAt(0).toUpperCase() + e.slice(1), n = 0; n < Po.length; n++) {
                    var r = Po[n] + t;
                    if (r in oo.style)
                        return r
                }
            }),
            Do = {
                create: Qt,
                update: Qt
            },
            Xo = c(function(e) {
                return {
                    enterClass: e + "-enter",
                    enterToClass: e + "-enter-to",
                    enterActiveClass: e + "-enter-active",
                    leaveClass: e + "-leave",
                    leaveToClass: e + "-leave-to",
                    leaveActiveClass: e + "-leave-active"
                }
            }),
            Bo = qn && !Kn,
            Uo = "transition",
            Vo = "animation",
            Ho = "transition",
            zo = "transitionend",
            Fo = "animation",
            Go = "animationend";
        Bo && (void 0 === window.ontransitionend && void 0 !== window.onwebkittransitionend && (Ho = "WebkitTransition", zo = "webkitTransitionEnd"), void 0 === window.onanimationend && void 0 !== window.onwebkitanimationend && (Fo = "WebkitAnimation", Go = "webkitAnimationEnd"));
        var Jo = qn && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : setTimeout,
            qo = /\b(transform|all)(,|$)/,
            Yo = function(e) {
                function n(e) {
                    return new Ir(M.tagName(e).toLowerCase(), {}, [], void 0, e)
                }
                function r(e, t) {
                    function n() {
                        0 == --n.listeners && o(e)
                    }
                    return n.listeners = t, n
                }
                function o(e) {
                    var t = M.parentNode(e);
                    Ot(t) && M.removeChild(t, e)
                }
                function a(e, n, r, o, i) {
                    if (e.isRootInsert = !i, !s(e, n, r, o)) {
                        var a = e.data,
                            l = e.children,
                            c = e.tag;
                        Ot(c) ? ("production" !== t.env.NODE_ENV && (a && a.pre && A++, A || e.ns || zn.ignoredElements.length && zn.ignoredElements.indexOf(c) > -1 || !zn.isUnknownElement(c) || ar("Unknown custom element: <" + c + '> - did you register the component correctly? For recursive components, make sure to provide the "name" option.', e.context)), e.elm = e.ns ? M.createElementNS(e.ns, c) : M.createElement(c, e), v(e), f(e, l, n), Ot(a) && h(e, n), d(r, e.elm, o), "production" !== t.env.NODE_ENV && a && a.pre && A--) : kt(e.isComment) ? (e.elm = M.createComment(e.text), d(r, e.elm, o)) : (e.elm = M.createTextNode(e.text), d(r, e.elm, o))
                    }
                }
                function s(e, t, n, r) {
                    var o = e.data;
                    if (Ot(o)) {
                        var i = Ot(e.componentInstance) && o.keepAlive;
                        if (Ot(o = o.hook) && Ot(o = o.init) && o(e, !1, n, r), Ot(e.componentInstance))
                            return c(e, t), kt(i) && u(e, t, n, r), !0
                    }
                }
                function c(e, t) {
                    Ot(e.data.pendingInsert) && t.push.apply(t, e.data.pendingInsert), e.elm = e.componentInstance.$el, p(e) ? (h(e, t), v(e)) : (St(e), t.push(e))
                }
                function u(e, t, n, r) {
                    for (var o, i = e; i.componentInstance;)
                        if (i = i.componentInstance._vnode, Ot(o = i.data) && Ot(o = o.transition)) {
                            for (o = 0; o < O.activate.length; ++o)
                                O.activate[o](_o, i);
                            t.push(i);
                            break
                        }
                    d(n, e.elm, r)
                }
                function d(e, t, n) {
                    Ot(e) && (Ot(n) ? M.insertBefore(e, t, n) : M.appendChild(e, t))
                }
                function f(e, t, n) {
                    if (Array.isArray(t))
                        for (var r = 0; r < t.length; ++r)
                            a(t[r], n, e.elm, null, !0);
                    else
                        l(e.text) && M.appendChild(e.elm, M.createTextNode(e.text))
                }
                function p(e) {
                    for (; e.componentInstance;)
                        e = e.componentInstance._vnode;
                    return Ot(e.tag)
                }
                function h(e, t) {
                    for (var n = 0; n < O.create.length; ++n)
                        O.create[n](_o, e);
                    Ot(S = e.data.hook) && (Ot(S.create) && S.create(_o, e), Ot(S.insert) && t.push(e))
                }
                function v(e) {
                    for (var t, n = e; n;)
                        Ot(t = n.context) && Ot(t = t.$options._scopeId) && M.setAttribute(e.elm, t, ""), n = n.parent;
                    Ot(t = Dr) && t !== e.context && Ot(t = t.$options._scopeId) && M.setAttribute(e.elm, t, "")
                }
                function m(e, t, n, r, o, i) {
                    for (; r <= o; ++r)
                        a(n[r], i, e, t)
                }
                function g(e) {
                    var t,
                        n,
                        r = e.data;
                    if (Ot(r))
                        for (Ot(t = r.hook) && Ot(t = t.destroy) && t(e), t = 0; t < O.destroy.length; ++t)
                            O.destroy[t](e);
                    if (Ot(t = e.children))
                        for (n = 0; n < e.children.length; ++n)
                            g(e.children[n])
                }
                function y(e, t, n, r) {
                    for (; n <= r; ++n) {
                        var i = t[n];
                        Ot(i) && (Ot(i.tag) ? (b(i), g(i)) : o(i.elm))
                    }
                }
                function b(e, t) {
                    if (Ot(t) || Ot(e.data)) {
                        var n = O.remove.length + 1;
                        for (Ot(t) ? t.listeners += n : t = r(e.elm, n), Ot(S = e.componentInstance) && Ot(S = S._vnode) && Ot(S.data) && b(S, t), S = 0; S < O.remove.length; ++S)
                            O.remove[S](e, t);
                        Ot(S = e.data.hook) && Ot(S = S.remove) ? S(e, t) : t()
                    } else
                        o(e.elm)
                }
                function _(e, n, r, o, i) {
                    for (var s, l, c, u = 0, d = 0, f = n.length - 1, p = n[0], h = n[f], v = r.length - 1, g = r[0], b = r[v], _ = !i; u <= f && d <= v;)
                        Ct(p) ? p = n[++u] : Ct(h) ? h = n[--f] : Mt(p, g) ? (w(p, g, o), p = n[++u], g = r[++d]) : Mt(h, b) ? (w(h, b, o), h = n[--f], b = r[--v]) : Mt(p, b) ? (w(p, b, o), _ && M.insertBefore(e, p.elm, M.nextSibling(h.elm)), p = n[++u], b = r[--v]) : Mt(h, g) ? (w(h, g, o), _ && M.insertBefore(e, h.elm, p.elm), h = n[--f], g = r[++d]) : (Ct(s) && (s = Nt(n, u, f)), Ct(l = Ot(g.key) ? s[g.key] : null) ? (a(g, o, e, p.elm), g = r[++d]) : (c = n[l], "production" === t.env.NODE_ENV || c || ar("It seems there are duplicate keys that is causing an update error. Make sure each v-for item has a unique key."), Mt(c, g) ? (w(c, g, o), n[l] = void 0, _ && M.insertBefore(e, g.elm, p.elm), g = r[++d]) : (a(g, o, e, p.elm), g = r[++d])));
                    u > f ? m(e, Ct(r[v + 1]) ? null : r[v + 1].elm, r, d, v, o) : d > v && y(e, n, u, f)
                }
                function w(e, t, n, r) {
                    if (e !== t) {
                        if (kt(t.isStatic) && kt(e.isStatic) && t.key === e.key && (kt(t.isCloned) || kt(t.isOnce)))
                            return t.elm = e.elm, void (t.componentInstance = e.componentInstance);
                        var o,
                            i = t.data;
                        Ot(i) && Ot(o = i.hook) && Ot(o = o.prepatch) && o(e, t);
                        var a = t.elm = e.elm,
                            s = e.children,
                            l = t.children;
                        if (Ot(i) && p(t)) {
                            for (o = 0; o < O.update.length; ++o)
                                O.update[o](e, t);
                            Ot(o = i.hook) && Ot(o = o.update) && o(e, t)
                        }
                        Ct(t.text) ? Ot(s) && Ot(l) ? s !== l && _(a, s, l, n, r) : Ot(l) ? (Ot(e.text) && M.setTextContent(a, ""), m(a, null, l, 0, l.length - 1, n)) : Ot(s) ? y(a, s, 0, s.length - 1) : Ot(e.text) && M.setTextContent(a, "") : e.text !== t.text && M.setTextContent(a, t.text), Ot(i) && Ot(o = i.hook) && Ot(o = o.postpatch) && o(e, t)
                    }
                }
                function E(e, t, n) {
                    if (kt(n) && Ot(e.parent))
                        e.parent.data.pendingInsert = t;
                    else
                        for (var r = 0; r < t.length; ++r)
                            t[r].data.hook.insert(t[r])
                }
                function x(e, n, r) {
                    if ("production" !== t.env.NODE_ENV && !T(e, n))
                        return !1;
                    n.elm = e;
                    var o = n.tag,
                        i = n.data,
                        a = n.children;
                    if (Ot(i) && (Ot(S = i.hook) && Ot(S = S.init) && S(n, !0), Ot(S = n.componentInstance)))
                        return c(n, r), !0;
                    if (Ot(o)) {
                        if (Ot(a))
                            if (e.hasChildNodes()) {
                                for (var s = !0, l = e.firstChild, u = 0; u < a.length; u++) {
                                    if (!l || !x(l, a[u], r)) {
                                        s = !1;
                                        break
                                    }
                                    l = l.nextSibling
                                }
                                if (!s || l)
                                    return "production" === t.env.NODE_ENV || "undefined" == typeof console || N || (N = !0, console.warn("Parent: ", e), console.warn("Mismatching childNodes vs. VNodes: ", e.childNodes, a)), !1
                            } else
                                f(n, a, r);
                        if (Ot(i))
                            for (var d in i)
                                if (!I(d)) {
                                    h(n, r);
                                    break
                                }
                    } else
                        e.data !== n.text && (e.data = n.text);
                    return !0
                }
                function T(e, t) {
                    return Ot(t.tag) ? 0 === t.tag.indexOf("vue-component") || t.tag.toLowerCase() === (e.tagName && e.tagName.toLowerCase()) : e.nodeType === (t.isComment ? 8 : 3)
                }
                var S,
                    C,
                    O = {},
                    k = e.modules,
                    M = e.nodeOps;
                for (S = 0; S < wo.length; ++S)
                    for (O[wo[S]] = [], C = 0; C < k.length; ++C)
                        Ot(k[C][wo[S]]) && O[wo[S]].push(k[C][wo[S]]);
                var A = 0,
                    N = !1,
                    I = i("attrs,style,class,staticClass,staticStyle,key");
                return function(e, r, o, i, s, l) {
                    if (!Ct(r)) {
                        var c = !1,
                            u = [];
                        if (Ct(e))
                            c = !0, a(r, u, s, l);
                        else {
                            var d = Ot(e.nodeType);
                            if (!d && Mt(e, r))
                                w(e, r, u, i);
                            else {
                                if (d) {
                                    if (1 === e.nodeType && e.hasAttribute("server-rendered") && (e.removeAttribute("server-rendered"), o = !0), kt(o)) {
                                        if (x(e, r, u))
                                            return E(r, u, !0), e;
                                        "production" !== t.env.NODE_ENV && ar("The client-side rendered virtual DOM tree is not matching server-rendered content. This is likely caused by incorrect HTML markup, for example nesting block-level elements inside <p>, or missing <tbody>. Bailing hydration and performing full client-side render.")
                                    }
                                    e = n(e)
                                }
                                var f = e.elm,
                                    h = M.parentNode(f);
                                if (a(r, u, f._leaveCb ? null : h, M.nextSibling(f)), Ot(r.parent)) {
                                    for (var v = r.parent; v;)
                                        v.elm = r.elm, v = v.parent;
                                    if (p(r))
                                        for (var m = 0; m < O.create.length; ++m)
                                            O.create[m](_o, r.parent)
                                }
                                Ot(h) ? y(h, [e], 0, 0) : Ot(e.tag) && g(e)
                            }
                        }
                        return E(r, u, c), r.elm
                    }
                    Ot(e) && g(e)
                }
            }({
                nodeOps: yo,
                modules: [So, Co, Mo, Ao, Do, qn ? {
                    create: hn,
                    activate: hn,
                    remove: function(e, t) {
                        e.data.show ? t() : un(e, t)
                    }
                } : {}].concat(To)
            });
        Kn && document.addEventListener("selectionchange", function() {
            var e = document.activeElement;
            e && e.vmodel && _n(e, "input")
        });
        var Wo = {
                model: {
                    inserted: function(e, t, n) {
                        if ("select" === n.tag) {
                            var r = function() {
                                vn(e, t, n.context)
                            };
                            r(), (Wn || Qn) && setTimeout(r, 0)
                        } else
                            "textarea" !== n.tag && "text" !== e.type && "password" !== e.type || (e._vModifiers = t.modifiers, t.modifiers.lazy || ($n || (e.addEventListener("compositionstart", yn), e.addEventListener("compositionend", bn)), Kn && (e.vmodel = !0)))
                    },
                    componentUpdated: function(e, t, n) {
                        "select" === n.tag && (vn(e, t, n.context), (e.multiple ? t.value.some(function(t) {
                            return mn(t, e.options)
                        }) : t.value !== t.oldValue && mn(t.value, e.options)) && _n(e, "change"))
                    }
                },
                show: {
                    bind: function(e, t, n) {
                        var r = t.value,
                            o = (n = wn(n)).data && n.data.transition,
                            i = e.__vOriginalDisplay = "none" === e.style.display ? "" : e.style.display;
                        r && o && !Kn ? (n.data.show = !0, cn(n, function() {
                            e.style.display = i
                        })) : e.style.display = r ? i : "none"
                    },
                    update: function(e, t, n) {
                        var r = t.value;
                        r !== t.oldValue && ((n = wn(n)).data && n.data.transition && !Kn ? (n.data.show = !0, r ? cn(n, function() {
                            e.style.display = e.__vOriginalDisplay
                        }) : un(n, function() {
                            e.style.display = "none"
                        })) : e.style.display = r ? e.__vOriginalDisplay : "none")
                    },
                    unbind: function(e, t, n, r, o) {
                        o || (e.style.display = e.__vOriginalDisplay)
                    }
                }
            },
            Ko = {
                name: String,
                appear: Boolean,
                css: Boolean,
                mode: String,
                type: String,
                enterClass: String,
                leaveClass: String,
                enterToClass: String,
                leaveToClass: String,
                enterActiveClass: String,
                leaveActiveClass: String,
                appearClass: String,
                appearActiveClass: String,
                appearToClass: String,
                duration: [Number, String, Object]
            },
            Qo = {
                name: "transition",
                props: Ko,
                abstract: !0,
                render: function(e) {
                    var n = this,
                        r = this.$slots.default;
                    if (r && (r = r.filter(function(e) {
                        return e.tag
                    })).length) {
                        "production" !== t.env.NODE_ENV && r.length > 1 && ar("<transition> can only be used on a single element. Use <transition-group> for lists.", this.$parent);
                        var o = this.mode;
                        "production" !== t.env.NODE_ENV && o && "in-out" !== o && "out-in" !== o && ar("invalid <transition> mode: " + o, this.$parent);
                        var i = r[0];
                        if (Sn(this.$vnode))
                            return i;
                        var a = En(i);
                        if (!a)
                            return i;
                        if (this._leaving)
                            return Tn(e, i);
                        var s = "__transition-" + this._uid + "-";
                        a.key = null == a.key ? s + a.tag : l(a.key) ? 0 === String(a.key).indexOf(s) ? a.key : s + a.key : a.key;
                        var c = (a.data || (a.data = {})).transition = xn(this),
                            u = En(this._vnode);
                        if (a.data.directives && a.data.directives.some(function(e) {
                            return "show" === e.name
                        }) && (a.data.show = !0), u && u.data && !Cn(a, u)) {
                            var d = u && (u.data.transition = f({}, c));
                            if ("out-in" === o)
                                return this._leaving = !0, Z(d, "afterLeave", function() {
                                    n._leaving = !1, n.$forceUpdate()
                                }), Tn(e, i);
                            if ("in-out" === o) {
                                var p,
                                    h = function() {
                                        p()
                                    };
                                Z(c, "afterEnter", h), Z(c, "enterCancelled", h), Z(d, "delayLeave", function(e) {
                                    p = e
                                })
                            }
                        }
                        return i
                    }
                }
            },
            $o = f({
                tag: String,
                moveClass: String
            }, Ko);
        delete $o.mode;
        var Zo = {
            Transition: Qo,
            TransitionGroup: {
                props: $o,
                render: function(e) {
                    for (var n = this.tag || this.$vnode.data.tag || "span", r = Object.create(null), o = this.prevChildren = this.children, i = this.$slots.default || [], a = this.children = [], s = xn(this), l = 0; l < i.length; l++) {
                        var c = i[l];
                        if (c.tag)
                            if (null != c.key && 0 !== String(c.key).indexOf("__vlist"))
                                a.push(c), r[c.key] = c, (c.data || (c.data = {})).transition = s;
                            else if ("production" !== t.env.NODE_ENV) {
                                var u = c.componentOptions,
                                    d = u ? u.Ctor.options.name || u.tag || "" : c.tag;
                                ar("<transition-group> children must be keyed: <" + d + ">")
                            }
                    }
                    if (o) {
                        for (var f = [], p = [], h = 0; h < o.length; h++) {
                            var v = o[h];
                            v.data.transition = s, v.data.pos = v.elm.getBoundingClientRect(), r[v.key] ? f.push(v) : p.push(v)
                        }
                        this.kept = e(n, null, f), this.removed = p
                    }
                    return e(n, null, a)
                },
                beforeUpdate: function() {
                    this.__patch__(this._vnode, this.kept, !1, !0), this._vnode = this.kept
                },
                updated: function() {
                    var e = this.prevChildren,
                        t = this.moveClass || (this.name || "v") + "-move";
                    if (e.length && this.hasMove(e[0].elm, t)) {
                        e.forEach(On), e.forEach(kn), e.forEach(Mn);
                        document.body.offsetHeight;
                        e.forEach(function(e) {
                            if (e.data.moved) {
                                var n = e.elm,
                                    r = n.style;
                                nn(n, t), r.transform = r.WebkitTransform = r.transitionDuration = "", n.addEventListener(zo, n._moveCb = function e(r) {
                                    r && !/transform$/.test(r.propertyName) || (n.removeEventListener(zo, e), n._moveCb = null, rn(n, t))
                                })
                            }
                        })
                    }
                },
                methods: {
                    hasMove: function(e, t) {
                        if (!Bo)
                            return !1;
                        if (null != this._hasMove)
                            return this._hasMove;
                        var n = e.cloneNode();
                        e._transitionClasses && e._transitionClasses.forEach(function(e) {
                            Zt(n, e)
                        }), $t(n, t), n.style.display = "none", this.$el.appendChild(n);
                        var r = an(n);
                        return this.$el.removeChild(n), this._hasMove = r.hasTransform
                    }
                }
            }
        };
        lt.config.mustUseProp = function(e, t, n) {
            return "value" === n && io(e) && "button" !== t || "selected" === n && "option" === e || "checked" === n && "input" === e || "muted" === n && "video" === e
        }, lt.config.isReservedTag = mo, lt.config.getTagNamespace = function(e) {
            return vo(e) ? "svg" : "math" === e ? "math" : void 0
        }, lt.config.isUnknownElement = function(e) {
            if (!qn)
                return !0;
            if (mo(e))
                return !1;
            if (e = e.toLowerCase(), null != go[e])
                return go[e];
            var t = document.createElement(e);
            return e.indexOf("-") > -1 ? go[e] = t.constructor === window.HTMLUnknownElement || t.constructor === window.HTMLElement : go[e] = /HTMLUnknownElement/.test(t.toString())
        }, f(lt.options.directives, Wo), f(lt.options.components, Zo), lt.prototype.__patch__ = qn ? Yo : m, lt.prototype.$mount = function(e, t) {
            return e = e && qn ? Tt(e) : void 0, fe(this, e, t)
        }, setTimeout(function() {
            zn.devtools && (nr ? nr.emit("init", lt) : "production" !== t.env.NODE_ENV && er && console[console.info ? "info" : "log"]("Download the Vue Devtools extension for a better development experience:\nhttps://github.com/vuejs/vue-devtools")), "production" !== t.env.NODE_ENV && !1 !== zn.productionTip && qn && "undefined" != typeof console && console[console.info ? "info" : "log"]("You are running Vue in development mode.\nMake sure to turn on production mode when deploying for production.\nSee more tips at https://vuejs.org/guide/deployment.html")
        }, 0), e.exports = lt
    }).call(t, n(2), function() {
        return this
    }())
}, function(e, t) {
    function n() {
        throw new Error("setTimeout has not been defined")
    }
    function r() {
        throw new Error("clearTimeout has not been defined")
    }
    function o(e) {
        if (u === setTimeout)
            return setTimeout(e, 0);
        if ((u === n || !u) && setTimeout)
            return u = setTimeout, setTimeout(e, 0);
        try {
            return u(e, 0)
        } catch (t) {
            try {
                return u.call(null, e, 0)
            } catch (t) {
                return u.call(this, e, 0)
            }
        }
    }
    function i(e) {
        if (d === clearTimeout)
            return clearTimeout(e);
        if ((d === r || !d) && clearTimeout)
            return d = clearTimeout, clearTimeout(e);
        try {
            return d(e)
        } catch (t) {
            try {
                return d.call(null, e)
            } catch (t) {
                return d.call(this, e)
            }
        }
    }
    function a() {
        v && p && (v = !1, p.length ? h = p.concat(h) : m = -1, h.length && s())
    }
    function s() {
        if (!v) {
            var e = o(a);
            v = !0;
            for (var t = h.length; t;) {
                for (p = h, h = []; ++m < t;)
                    p && p[m].run();
                m = -1, t = h.length
            }
            p = null, v = !1, i(e)
        }
    }
    function l(e, t) {
        this.fun = e, this.array = t
    }
    function c() {}
    var u,
        d,
        f = e.exports = {};
    !function() {
        try {
            u = "function" == typeof setTimeout ? setTimeout : n
        } catch (e) {
            u = n
        }
        try {
            d = "function" == typeof clearTimeout ? clearTimeout : r
        } catch (e) {
            d = r
        }
    }();
    var p,
        h = [],
        v = !1,
        m = -1;
    f.nextTick = function(e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1)
            for (var n = 1; n < arguments.length; n++)
                t[n - 1] = arguments[n];
        h.push(new l(e, t)), 1 !== h.length || v || o(s)
    }, l.prototype.run = function() {
        this.fun.apply(null, this.array)
    }, f.title = "browser", f.browser = !0, f.env = {}, f.argv = [], f.version = "", f.versions = {}, f.on = c, f.addListener = c, f.once = c, f.off = c, f.removeListener = c, f.removeAllListeners = c, f.emit = c, f.prependListener = c, f.prependOnceListener = c, f.listeners = function(e) {
        return []
    }, f.binding = function(e) {
        throw new Error("process.binding is not supported")
    }, f.cwd = function() {
        return "/"
    }, f.chdir = function(e) {
        throw new Error("process.chdir is not supported")
    }, f.umask = function() {
        return 0
    }
}, function(e, t, n) {
    "use strict";
    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    function o(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = r(n(1)),
        a = r(n(4)),
        s = (r(n(7)), r(n(8)));
    r(n(9)), r(n(13));
    window.CDN_URL = s.default;
    t.default = function e(t) {
        o(this, e);
        var n = (0, a.default)({
            baseDpr: 1
        });
        if (t) {
            var r = t.vueOpts;
            (new (i.default.extend(r))).$mount("#J_container")
        }
        n.fireLazyload(), window.lib.mtop.config.prefix = "acs"
    }
}, function(e, t, n) {
    "undefined" == typeof window && (window = {
        ctrl: {},
        lib: {}
    }), !window.ctrl && (window.ctrl = {}), !window.lib && (window.lib = {}), n(5), n(6), function(e, t) {
        function n() {
            return document.createElement("canvas").toDataURL("image/webp").indexOf("image/webp") > -1
        }
        function r(e, t) {
            var n,
                r,
                o,
                i = null,
                a = 0,
                s = function() {
                    a = Date.now(), i = null, o = e.apply(n, r)
                };
            return function() {
                var l = Date.now(),
                    c = t - (l - a);
                return n = this, r = arguments, 0 >= c ? (clearTimeout(i), i = null, a = l, o = e.apply(n, r)) : i || (i = setTimeout(s, c)), o
            }
        }
        function o(e) {
            null != navigator.userAgent.match(/WindVane/i) && window.WindVane ? WindVane.call("WVNetwork", "getNetworkType", {}, function(t) {
                t && t.type && (k = t.type.toLowerCase()), e && e()
            }, function(t) {
                e && e()
            }) : e && e()
        }
        function i(e, t) {
            for (var n in t)
                t.hasOwnProperty(n) && (e[n] = t[n]);
            return e
        }
        function a(e, t) {
            if (e) {
                if (t || (t = {
                    x: 0,
                    y: 0
                }), e != window)
                    var n = e.getBoundingClientRect(),
                        r = n.left,
                        o = n.top,
                        i = n.right,
                        a = n.bottom;
                else
                    r = 0, o = 0, i = r + e.innerWidth, a = o + e.innerHeight;
                return {
                    left: r,
                    top: o,
                    right: i + t.x,
                    bottom: a + t.y
                }
            }
        }
        function s(e, t) {
            var n = t.right > e.left && t.left < e.right,
                r = t.bottom > e.top && t.top < e.bottom;
            return n && r
        }
        function l() {
            document.createElement("canvas").getContext("2d"), (M = Array.prototype.slice.call(document.querySelectorAll("." + N.class))).length && M.forEach(function(e, t) {
                "1" == e.getAttribute("data-cache") && d(e)
            })
        }
        function c() {
            var e = N.dataSrc;
            M.length && M.forEach(function(t, n) {
                if ("true" != t.getAttribute("data-src-checked")) {
                    var r = t.getAttribute(e),
                        o = t.getAttribute("data-size"),
                        i = t.getAttribute("data-type"),
                        a = t.getAttribute("data-cancel-exif"),
                        s = {};
                    o && (s.size = o), i && (s.type = i), t.attributes["data-original"] && (s.isOriginal = !0), null !== a && (s.cancelEXIF = "true" === a), r && (t.setAttribute(e, I.getNewUrl(r, s)), t.setAttribute("data-src-checked", "true"))
                }
            })
        }
        function u() {
            var e = N.dataSrc,
                t = a(window, {
                    x: N.lazyWidth,
                    y: N.lazyHeight
                });
            M.length && M.forEach(function(n, r) {
                function o(t) {
                    if (t.removeAttribute(e), "IMG" === t.tagName)
                        if (1 == t.getAttribute("data-cache")) {
                            var n = f(i);
                            t.setAttribute("src", n || i)
                        } else
                            t.setAttribute("src", i);
                    else
                        t.style.backgroundImage = "url(" + i + ")";
                    t.className = t.className.replace(new RegExp("(^|\\s)" + N.class + "(\\s|$)"), "")
                }
                var i = n.getAttribute(e),
                    l = a(n),
                    c = s(t, l);
                i && ("wifi" == k && b && N.enalbeIOSWifiLoadMore ? o(n) : c && o(n))
            })
        }
        function d(e) {
            if (!!window.localStorage && !!document.createElement("canvas").getContext && "data" != e.src.substring(0, 4)) {
                var t = document.createElement("canvas"),
                    n = t.getContext("2d");
                e.setAttribute("crossOrigin", "anonymous"), e.onload = function() {
                    if (!this.getAttribute(N.dataSrc) && "data" != e.src.substring(0, 4)) {
                        var r = this.width,
                            o = this.height;
                        t.width = r, t.height = o, n.drawImage(this, 0, 0, r, o);
                        var i = t.toDataURL(),
                            a = {},
                            s = this.src;
                        a[this.src] = i;
                        var l = localStorage.getItem(s),
                            c = localStorage.getItem("h5_lib_img_cached_list"),
                            u = c ? JSON.parse(c) : [];
                        if (!l) {
                            if (localStorage.setItem("h5_lib_img_cached_url_" + s, i), u.length >= 200) {
                                var d = u.shift();
                                localStorage.removeItem(d)
                            }
                            u.push("h5_lib_img_cached_url_" + s), localStorage.setItem("h5_lib_img_cached_list", JSON.stringify(u))
                        }
                    }
                }
            }
        }
        function f(e) {
            var t = !!window.localStorage,
                n = localStorage.getItem("h5_lib_img_cached_url_" + e);
            return t && n ? n : null
        }
        function p(e, t) {
            t = t || x;
            var n = O.square;
            if (!e || "string" != typeof e && "number" != typeof e)
                throw new Error("wrong size type");
            switch ("string" == typeof e && e.match(/^\d+x\d+$/) && (e = t == S ? e.split("x")[1] : e.split("x")[0]), t) {
            case T:
                n = O.widths;
                break;
            case S:
                n = O.heights;
                break;
            case C:
                n = O.xzs
            }
            var r = n[n.length - 1],
                o = n[0],
                i = 0,
                a = N.baseDpr;
            if (_ || (e = parseInt(e / a)), e >= r)
                return r;
            if (o >= e)
                return o;
            for (var s = n.length; s >= 0; s--)
                if (n[s] <= e) {
                    n[s] == e ? i = e : s < n.length - 1 && (i = n[s + 1]);
                    break
                }
            return i
        }
        function h(e) {
            var t = "",
                n = "",
                r = N.q,
                o = N.sharpen,
                i = N.defaultSize,
                a = x,
                s = e.cancelEXIF;
            switch ("[object Array]" == Object.prototype.toString.call(r) && (r = r[0]), e && (e.size && (i = e.size), e.type && e.type.match(new RegExp("^(" + [x, T, S, C].join("|") + ")$")) && (a = e.type)), t = p(i, a), a) {
            case x:
                t = t + "x" + t;
                break;
            case T:
                t += "x10000";
                break;
            case S:
                t = "10000x" + t;
                break;
            case C:
                t = t + "x" + t + "xz"
            }
            return n = "_" + t, n += r + o, s && (n += "g"), n += ".jpg"
        }
        function v() {
            var e = r(u, 100);
            window.addEventListener("scroll", e, !1)
        }
        function m(e) {
            N = i(N, e = e || {}), e.filterDomains && e.filterDomains.length && (O.filterDomains = O.filterDomains.concat(e.filterDomains)), N.class = "." !== N.class.charAt(0) ? N.class : N.class.slice(1), N.size && (N.defaultSize = p(N.size)), o(function() {
                if ("[object Array]" == Object.prototype.toString.call(N.q))
                    if (_)
                        N.q = k ? "wifi" == k ? N.q[0] : N.q[1] : N.q[0];
                    else {
                        var e = parseInt(N.q[0].slice(1)),
                            t = parseInt(N.q[1].slice(1)),
                            r = e + 40 >= 90 ? "q90" : "q" + (e + 40),
                            o = t + 45 >= 75 ? "q75" : "q" + (t + 45);
                        N.q = k ? "wifi" == k ? r : o : r
                    }
                l(), n(), c(), N.enableLazyload && (v(), u())
            })
        }
        var g = (window.document, navigator.userAgent),
            y = window.devicePixelRatio ? window.devicePixelRatio : 1,
            b = null != g.match(/(iPhone\sOS)\s([\d_]+)/i),
            _ = y >= 2;
        g.match(/(iPad)/) && (_ = !0);
        var w = "gw.alicdn.com",
            E = /_(\d+x\d+|cy\d+i\d+|sum|m|b)?(xz|xc)?(q\d+)?(s\d+)?(\.jpg)?(_\.webp)?$/i,
            x = "square",
            T = "widthFixed",
            S = "heightFixed",
            C = "xz",
            O = {};
        O.widths = [110, 150, 170, 220, 240, 290, 450, 570, 580, 620, 790], O.heights = [170, 220, 340, 500], O.xzs = [72, 80, 88, 90, 100, 110, 120, 145, 160, 170, 180, 200, 230, 270, 290, 310, 360, 430, 460, 580, 640], O.square = [16, 20, 24, 30, 32, 36, 40, 48, 50, 60, 64, 70, 72, 80, 88, 90, 100, 110, 120, 125, 128, 145, 180, 190, 200, 200, 210, 220, 230, 240, 250, 270, 300, 310, 315, 320, 336, 360, 468, 490, 540, 560, 580, 600, 640, 720, 728, 760, 970], O.filterDomains = ["a.tbcdn.cn", "assets.alicdn.com", "wwc.taobaocdn.com", "wwc.alicdn.com", "cbu01.alicdn.com"];
        var k,
            M,
            A = n(),
            N = {
                class: "lib-img",
                size: "320x320",
                sharpen: "s150",
                dataSrc: "data-src",
                q: ["q50", "q30"],
                enableLazyload: !0,
                lazyHeight: 0,
                lazyWidth: 0,
                enalbeIOSWifiLoadMore: !1,
                baseDpr: 2,
                diffGif: !1,
                cancelEXIF: !1,
                filterDomains: []
            },
            I = {
                getNewUrl: function(e, n) {
                    if (!e || "string" != typeof e)
                        return "";
                    var r = N.defaultSize + "x" + N.defaultSize,
                        o = N.q,
                        i = N.cancelEXIF;
                    "[object Array]" == Object.prototype.toString.call(o) && (o = o[0]);
                    var a = "_" + r + o + N.sharpen;
                    i && (a += "g"), a += ".jpg";
                    try {
                        var s = new t.httpurl(e)
                    } catch (t) {
                        return console.log("[error]wrong img url:", e), e
                    }
                    var l = s.host,
                        c = s.pathname;
                    if (s.protocol, s.protocol = "", -1 != O.filterDomains.indexOf(l))
                        return /alicdn/.test(l) || (s.protocol = "http:"), s.toString();
                    var u = l.match(/(.+\.(?:alicdn|taobaocdn|taobao|mmcdn)\.com)/);
                    if (u && u[0] != w && (s.host = w), n && n.isOriginal)
                        return s.toString();
                    var d = c.match(E),
                        f = c.match(/-(\d+)-(\d+)\.(?:jpg|png|gif)/);
                    if (f) {
                        var v;
                        a = "_" + (v = p(parseInt(f[1]) < parseInt(N.defaultSize) ? N.defaultSize : f[1] > 760 ? 760 : f[1])) + "x" + v + o + N.sharpen, i && (a += "g"), a += ".jpg"
                    }
                    return n && "string" == typeof n ? a = h({
                        size: n,
                        cancelEXIF: i
                    }) : n && "object" == typeof n && Object.keys(n).length > 0 && (n.cancelEXIF = i, a = h(n)), /\.gif/.test(c) && N.diffGif ? s.toString() : (/\.png/.test(c) && (a = a.replace(/(q\d+)(s\d+)/, "")), A && (a += "_.webp"), d ? d[1] || d[2] || d[3] || d[4] ? s.pathname = c.replace(E, a) : d[0].match(/_\.(jpg|png|gif|jpef)/) && (s.pathname += a) : c.match(/_\.webp$/g) ? s.pathname = c.replace(/_\.webp$/g, a) : s.pathname = c + a, s.protocol = "", s.toString())
                },
                fireLazyload: function() {
                    l(), c(), u()
                }
            };
        t.img = function(e) {
            return m.apply(I, arguments), I
        }, t.img.defaultSrc = "data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg=="
    }(window, window.lib || (window.lib = {})), e.exports = window.lib.img
}, function(e, t) {
    "undefined" == typeof window && (window = {
        ctrl: {},
        lib: {}
    }), !window.ctrl && (window.ctrl = {}), !window.lib && (window.lib = {}), function(e, t) {
        var n = e.Promise,
            r = e.document,
            o = e.navigator.userAgent,
            i = /Windows\sPhone\s(?:OS\s)?[\d\.]+/i.test(o) || /Windows\sNT\s[\d\.]+/i.test(o),
            a = i && e.WindVane_Win_Private && e.WindVane_Win_Private.call,
            s = /iPhone|iPad|iPod/i.test(o),
            l = /Android/i.test(o),
            c = o.match(/WindVane[\/\s](\d+[._]\d+[._]\d+)/),
            u = Object.prototype.hasOwnProperty,
            d = t.windvane = e.WindVane || (e.WindVane = {}),
            f = (e.WindVane_Native, Math.floor(65536 * Math.random())),
            p = 1,
            h = [],
            v = "iframe_",
            m = "param_",
            g = "chunk_",
            y = {
                isAvailable: 1 === function(e, t) {
                    e = e.toString().split("."), t = t.toString().split(".");
                    for (var n = 0; n < e.length || n < t.length; n++) {
                        var r = parseInt(e[n], 10),
                            o = parseInt(t[n], 10);
                        if (window.isNaN(r) && (r = 0), window.isNaN(o) && (o = 0), r < o)
                            return -1;
                        if (r > o)
                            return 1
                    }
                    return 0
                }(c = c ? (c[1] || "0.0.0").replace(/\_/g, ".") : "0.0.0", "0"),
                call: function(e, t, r, o, i, a) {
                    var s,
                        l;
                    "number" == typeof arguments[arguments.length - 1] && (a = arguments[arguments.length - 1]), "function" != typeof o && (o = null), "function" != typeof i && (i = null), n && (l = {}, l.promise = new n(function(e, t) {
                        l.resolve = e, l.reject = t
                    })), s = b.getSid();
                    var c = {
                        success: o,
                        failure: i,
                        deferred: l
                    };
                    if (a > 0 && (c.timeout = setTimeout(function() {
                        y.onFailure(s, {
                            ret: "HY_TIMEOUT"
                        })
                    }, a)), b.registerCall(s, c), b.registerGC(s, a), y.isAvailable ? b.callMethod(e, t, r, s) : y.onFailure(s, {
                        ret: "HY_NOT_IN_WINDVANE"
                    }), l)
                        return l.promise
                },
                fireEvent: function(e, t, n) {
                    var o = r.createEvent("HTMLEvents");
                    o.initEvent(e, !1, !0), o.param = b.parseData(t || b.getData(n)), r.dispatchEvent(o)
                },
                getParam: function(e) {
                    return b.getParam(e)
                },
                setData: function(e, t) {
                    b.setData(e, t)
                },
                onSuccess: function(e, t) {
                    b.onComplete(e, t, "success")
                },
                onFailure: function(e, t) {
                    b.onComplete(e, t, "failure")
                }
            },
            b = {
                params: {},
                chunks: {},
                calls: {},
                getSid: function() {
                    return (f + p++) % 65536 + ""
                },
                buildParam: function(e) {
                    return e && "object" == typeof e ? JSON.stringify(e) : e || ""
                },
                getParam: function(e) {
                    return this.params[m + e] || ""
                },
                setParam: function(e, t) {
                    this.params[m + e] = t
                },
                parseData: function(e) {
                    var t;
                    if (e && "string" == typeof e)
                        try {
                            t = JSON.parse(e)
                        } catch (e) {
                            t = {
                                ret: ["WV_ERR::PARAM_PARSE_ERROR"]
                            }
                        }
                    else
                        t = e || {};
                    return t
                },
                setData: function() {
                    this.chunks[g + sid] = this.chunks[g + sid] || [], this.chunks[g + sid].push(chunk)
                },
                getData: function(e) {
                    return this.chunks[g + e] ? this.chunks[g + e].join("") : ""
                },
                registerCall: function(e, t) {
                    this.calls[e] = t
                },
                unregisterCall: function(e) {
                    var t = {};
                    return this.calls[e] && (t = this.calls[e], delete this.calls[e]), t
                },
                useIframe: function(e, t) {
                    var n = v + e,
                        o = h.pop();
                    o || ((o = r.createElement("iframe")).setAttribute("frameborder", "0"), o.style.cssText = "width:0;height:0;border:0;display:none;"), o.setAttribute("id", n), o.setAttribute("src", t), o.parentNode || setTimeout(function() {
                        r.body.appendChild(o)
                    }, 5)
                },
                retrieveIframe: function(e) {
                    var t = v + e,
                        n = r.querySelector("#" + t);
                    h.length >= 3 ? r.body.removeChild(n) : h.indexOf(n) < 0 && h.push(n)
                },
                callMethod: function(t, n, r, o) {
                    if (r = b.buildParam(r), i)
                        a ? e.WindVane_Win_Private.call(t, n, o, r) : this.onComplete(o, {
                            ret: "HY_NO_HANDLER_ON_WP"
                        }, "failure");
                    else {
                        var c = "hybrid://" + t + ":" + o + "/" + n + "?" + r;
                        if (s)
                            this.setParam(o, r), this.useIframe(o, c);
                        else if (l) {
                            window.prompt(c, "wv_hybrid:")
                        } else
                            this.onComplete(o, {
                                ret: "HY_NOT_SUPPORT_DEVICE"
                            }, "failure")
                    }
                },
                registerGC: function(e, t) {
                    var n = this,
                        r = Math.max(t || 0, 6e5),
                        o = Math.max(t || 0, 6e4),
                        i = Math.max(t || 0, 6e5);
                    setTimeout(function() {
                        n.unregisterCall(e)
                    }, r), s ? setTimeout(function() {
                        n.params[m + e] && delete n.params[m + e]
                    }, o) : l && setTimeout(function() {
                        n.chunks[g + e] && delete n.chunks[g + e]
                    }, i)
                },
                onComplete: function(e, t, n) {
                    var r = this.unregisterCall(e),
                        o = r.success,
                        i = r.failure,
                        a = r.deferred,
                        c = r.timeout;
                    c && clearTimeout(c), t = t || this.getData(e);
                    var u = (t = this.parseData(t)).ret;
                    "string" == typeof u && ((t = t.value || t).ret || (t.ret = [u])), "success" === n ? (o && o(t), a && a.resolve(t)) : "failure" === n && (i && i(t), a && a.reject(t)), s ? (this.retrieveIframe(e), this.params[m + e] && delete this.params[m + e]) : l && this.chunks[g + e] && delete this.chunks[g + e]
                }
            };
        for (var _ in y)
            u.call(d, _) || (d[_] = y[_])
    }(window, window.lib || (window.lib = {})), e.exports = window.lib.windvane
}, function(e, t) {
    "undefined" == typeof window && (window = {
        ctrl: {},
        lib: {}
    }), !window.ctrl && (window.ctrl = {}), !window.lib && (window.lib = {}), function(e, t) {
        function n(e) {
            var t = {};
            Object.defineProperty(this, "params", {
                set: function(e) {
                    if ("object" == typeof e) {
                        for (var n in t)
                            delete t[n];
                        for (var n in e)
                            t[n] = e[n]
                    }
                },
                get: function() {
                    return t
                },
                enumerable: !0
            }), Object.defineProperty(this, "search", {
                set: function(e) {
                    if ("string" == typeof e) {
                        0 === e.indexOf("?") && (e = e.substr(1));
                        var n = e.split("&");
                        for (var r in t)
                            delete t[r];
                        for (var o = 0; o < n.length; o++) {
                            var i = n[o].split("=");
                            if (void 0 !== i[1] && (i[1] = i[1].toString()), i[0])
                                try {
                                    t[decodeURIComponent(i[0])] = decodeURIComponent(i[1])
                                } catch (e) {
                                    t[i[0]] = i[1]
                                }
                        }
                    }
                },
                get: function() {
                    var e = [];
                    for (var n in t)
                        if (void 0 !== t[n])
                            if ("" !== t[n])
                                try {
                                    e.push(encodeURIComponent(n) + "=" + encodeURIComponent(t[n]))
                                } catch (r) {
                                    e.push(n + "=" + t[n])
                                }
                            else
                                try {
                                    e.push(encodeURIComponent(n))
                                } catch (t) {
                                    e.push(n)
                                }
                    return e.length ? "?" + e.join("&") : ""
                },
                enumerable: !0
            });
            var n;
            Object.defineProperty(this, "hash", {
                set: function(e) {
                    "string" == typeof e && (e && e.indexOf("#") < 0 && (e = "#" + e), n = e || "")
                },
                get: function() {
                    return n
                },
                enumerable: !0
            }), this.set = function(e) {
                var t;
                if (!(t = (e = e || "").match(new RegExp("^([a-z0-9-]+:)?[/]{2}(?:([^@/:?]+)(?::([^@/:]+))?@)?([^:/?#]+)(?:[:]([0-9]+))?([/][^?#;]*)?(?:[?]([^#]*))?([#][^?]*)?$", "i"))))
                    throw new Error("Wrong uri scheme.");
                this.protocol = t[1] || ("object" == typeof location ? location.protocol : ""), this.username = t[2] || "", this.password = t[3] || "", this.hostname = this.host = t[4], this.port = t[5] || "", this.pathname = t[6] || "/", this.search = t[7] || "", this.hash = t[8] || "", this.origin = this.protocol + "//" + this.hostname
            }, this.toString = function() {
                var e = this.protocol + "//";
                return this.username && (e += this.username, this.password && (e += ":" + this.password), e += "@"), e += this.host, this.port && "80" !== this.port && (e += ":" + this.port), this.pathname && (e += this.pathname), this.search && (e += this.search), this.hash && (e += this.hash), e
            }, e && this.set(e.toString())
        }
        (window.lib || (window.lib = {})).httpurl = function(e) {
            return new n(e)
        }
    }(window), e.exports = window.lib.httpurl
}, function(e, t, n) {
    "use strict";
    (function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    })(n(1)).default.directive("src", {
        imgHelper: window.lib.img(),
        cdn: function(e) {
            var t = window.CDN_URL;
            return t && t[e] && t[e].cdnurl ? t[e].cdnurl : e
        },
        bind: function() {},
        convertLength: function(e) {
            return Math.ceil(e / window.remUnit * 32 * window.devicePixelRatio)
        },
        parseSrc: function(e) {
            if ("string" == typeof e && e) {
                e = window.lib.cdnurl(e);
                var t,
                    n,
                    r = this.el ? this.el.getAttribute("size") || "" : "",
                    o = {},
                    i = r.match(/^(\d+)x(\d+)$/);
                i ? (t = i[1], n = i[2]) : "cover" === r ? this.el && (t = this.el.offsetWidth / window.rem * window.remUnit, n = this.el.offsetHeight / window.rem * window.remUnit) : (i = e.match(/^(?:http(?:s)?\:)?\/\/.+\-(\d+)\-(\d+)\.\w+$/)) && (t = i[1], n = i[2]), o.size = t && n ? this.convertLength(t) + "x" + this.convertLength(n) : "200x200", e = this.imgHelper.getNewUrl(e, o), this.el.src = e
            }
        },
        update: function(e, t) {
            this.parseSrc(e)
        },
        unbind: function() {}
    })
}, function(e, t) {
    e.exports = {
        "logo.png": "http://gw.alicdn.com/tfscom/TB1.796KFXXXXbHXpXX7WcCNVXX-400-400.png",
        "mask.png": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAB4CAYAAAC5FwHBAAAABGdBTUEAALGPC/xhBQAABgBJREFUeAHtmNGW4zYMQ3d6+tKH/v/ndgdxrhaDSJacxImtRuckoAiQEkVHnt2vX79+fX1/pht/dSqiaKHbnbD309psr7j37/KOHfz9HUMn7gg/boi6tVYYnNBtKnIfGkfp0BDjCOcxbmd86pMvuSVU16YbUz+K03VLBU3bsWkLm/Id9r96FP/7rlavAKEGNu+PxXv/d+bPTL31Mj71hRfxT2afYf65PM7WxWk7Nm1hvMd0ieijAS6z9W+0rfjk0YG99TI+9cmT90vGv+t7PyfLo8h7K6tQ4bwbxGGjTz7jc/5ofObLecmvwjS0wdZwDhtUjNutHPjRglvjydNC8n7RsZbwtP5eYaW11wp1IvgOXTSPYmuTpbUmwGeu45m9jh1vx4M74j02KD+PbNqOUZguhNp49mXBxXPvehmf+ys8l8fahbDG1Q5jzUcusKYd4VxTs+d9j30uj9ozc2Qfl8eR93jX3ngU9QPkRwiOJETbik8eHag10NTWg2vpk0d3c3m4sLZQzUeMOGzQfWuxrk+dc9hgMz+P4uh7pbwnrqtrAXy5Ic3hRvPXcqz5mvm3vsc4KVCLup2bgAOT78XX9O4jL1g4OlYcsxi9jmWrdTL43nEGrC3UaO6n1zFaDJLskvUNX+wDbO6nV9gb9v6cJR99j+UuOEmh2+jc5zZ8omvcTh3zosmOFQLlHUgOhWKD7nPbefl9OIcNug77wmVhkKdHHsXTF5IFTNuxvQsbfu9cT3yrPhtV5ipsz8GPHNRabufacGBPn/FlvnfHykKvNugYJ5SPwqP7UV5y1nLBCWsj41OffMmRHaNAsAgfMNZywYG1ZZzDBqV3u8RTGCcmEadSRGbAjeot9CVm2V8+ilq9egLXbcGBPf017GXAvm7+a+BlO9h7IR7Fvdd5ef7Pn1QvP/IHF6Rj+tGVH57ldJ/bJvlhusZtRO5zGz7RNbLzIz0at28uD0Sgi912Xn4fzmGD0tVs93mu1Lc4j7/Yn8sjj+ro82k7Nm1h3IpHf7I272/6jumK5MoER04JbSs+eXSg1kBTWw+upU8e3dB7rLag+0guHzboPo/BRgfid3QOG5TO7RI37aOYhZV/qF1L12ngK6dhBpxQI/U9fon68/00vQrzQVtBcW671jnX1OyaL3ON5MsY8oIlR3YsA7eeYMY/ez68n+xYboSTAMW7nfq956wNNvfT69jeG90tP3956AQ4BfCeRYlt5evxuebd+uyYJ8pFRufkkB4bdJ/bzsvvwzls0HXYFy4Lgzw98iievpAsYNqOHa2w4fdUdijnehTXfoip3zont9DtVh7XuN3SN/3qmAZJltlzvz03NvjclSwbl4cWYjHQZE0TbSs+eXSgEqOpLQLX0ieP7vPvsdppHtrXexSbrbZHCI0KxeaRcJ/b8ImukZ1jOH9e9x5IUnzMHeFAcTW75vM82OhA/I7OYYPSXezerfi094rv7AF7eD/ZsVyTkwDFu536veesDTb30yts743uln/awrgVdzu5dyWetmMqTMN/jIun/p23UqqUB404bKFG8ou3/d2Lb/JbO8YBgLUtOYcNSu92Ld59aMGMxw8Wfmthvuih7c/lcej2VDZHx/SM8pyCFfmNC20rPnl0oBKiuUluXEtPLHzB/I25sLZQzUeMOGzQfWuxrk+dc9hgM38WlklPO+89ipyMsPbJE0v9Vr53kMP5s2MeyCL4mDvCgeJqds3nWuc9f812LTZYcmZhmaj5Zk/h0eYqbG1wEqC0bq/FvpXrdeytm3tk8WkL41Z85HAOGTttx7g8Ri+EvCWzW8qDRhy2UCP5xdv+7sU3+a0d4wDA2pacwwald7sW7z60YMbjBwu/tTBf9NC2Lg+v9tmbJbfQ7Wevc5Nv62/sJsGAg4IkxQYHwu+TTPsoPtqxvJXyeNUZNOKwhRo9flH9+e7pC/9ox5RIA1xmP7+dwwYzFj/4M9Mycw4bLPn4y0MEJFhEVw6No2vcRuM+t+ETXSM7h/QaxGFfnFf/xZcd88AUM3fs6Xu855Jd07c0Lf0lRxaWSU47/w32MJE/bNxRgQAAAABJRU5ErkJggg==",
        "one.png": "http://gw.alicdn.com/tfscom/TB1vzG3KFXXXXXuXFXX_g.pNVXX-400-300.png",
        "play.png": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJ8AAACBCAYAAADex2gLAAAABGdBTUEAALGPC/xhBQAAGJNJREFUeAHtXXtsVcW636stpTwLFA7lIaWUN6IH1IPBFyKKiRHuJcSYe703iC8iyTXhRpMbNUrCHxoSYjQmaNAYjzFeRK6gOQIWVFQQFFAQpPIoj1IotEBLeXbvve7vV9baZ+29Zmbv3f3o3mvNJNO19qxZs2a++fWb7/tm5hsj4MFgmqaBZnVH7OmIXXFfJIiFSOusEMKHg4J4FWmtjnjJMAwTvz0V2El5HwC2XmhEf8QyRN73QPRE29AOBgLvIuIFxCbERoCR93kd8rKDADaCi2CzY3Fe90LHKn8NrzXaEWAkOPMq5A34ADgOm4MRb0AszSsqZ6eyzfjMccR6AJHDds6HnAYfAEd5bCDiUMS/IOZ0fVG/XAgcok8j1iE2AIiUK3My5GRnAnQcRiut2CUnKZcflWpDNWsZAUIO0zkVcgp81tBaBQoNR0xJCz137pxZV1cX2r9/v7lv375ATU1NoKmpyWhubjZaWloCiLwaly5dMkKh7DOHwsLCQPfu3c3evXvbMVBaWmqWlZWZY8aMCYwfPz4wduxYY+jQoYV9+/ZNtZ/YwCOIh3JpSE61UWhP6gGgK0EpIxErEAuSLZHg2b17d7C6utpENHbu3FnY2NiYE21Lti2i/P379zcnT54cmjFjholo3HTTTUUEbwdCGO8cRTwIEF7pwPtpfaVTOwigI9AqEccgJkVNcrW1a9eG161bZ3z77beFFy5c6NS2pLVX4hTWq1cvc9q0aaEHH3zQnDVrVgG5Y5xXYh+TE9YgcjgmIDsldFqHAXi0yU1EpF0uoQCAmWvWrAkuX77c+PHHH2kw1gEUuOOOO4ILFiwwZ8+eXQRgJtOntBXuAQBpO8x6SKaiaamcJdeNR2HUYBMKAFrw7bffNlevXt3l6tW8sCIk1K50Z+ratWtgzpw5bQsXLjQAyGT+OakZ78u2PJhV8AF4NJdMQkzIKLxx48a2F198sWDbtm3JDivp7te8K2/KlCmhxYsXh2fOnJmotYDa8C4AkGaarISsgM+S7SjXUamIGyDLtb300ksFe/bs0aCLSy11hokTJ4aWLFkShmyYKAgPosSabMiCGQcfgNcNjbkFsa+aTIHAL7/8Epw/f76hQRePUsk/Jwjff/9989Zbb01kOD6HL+wAAC8n/6XE30jarJF40ZgNvz7M3oN3lMCDTS78+OOPt912221FGnjJUDjxvKQr6Us6k95x3mR/3WP1X5ysHX+cMc6Hig9DtW6OV7X33nuv7fnnny8CQTJWl3h18NtzGK3NpUuXBp944olEhuLfwAGPZYJGGelwAG8UKjtWVWEYgcNz584Nf/fdd4kMA6qi9LMOUuCee+4Jrlq1qgBG7Hgj4H4A8EAHPyN9La3gA+hY3gTESukX8QCACwJ4npqFULU3l59x9gQADAGI8ZgA54j3AoRmutoTD/EJfwfAY1mTEaXA4zQY1P+2++67r8hL018JEykHM7If2B/slzhz3OzXyVY/p6Ul5FQpB4vjEXhcbycMnJ14+OGHQ3qYFZInJxI5DH/xxReFcWZJ6lHZnenggOkC342okJTjnTp1KvzAAw+YWpPNCYwpK0GTzIYNG4zy8nLVqMg54d+VBSXwMGXwgesplYujR49SnjBwVTUmgarqLNmiQEVFBRVBE1eVkT9lJSQlQAB4NKdItVpwuiCMmgUaeNmCTXq+w/5iv7H/FCWOtfpfkUX9qMOcDx/m8va/yYpnxW+//fYiLNaUZdHpOU4ByH4BLurAUKzShLdjCG7oSFM6xPkAPE6ZcYGAMOA/JzR9+vRCDTwhefImEUpigP3I/lRUepKFB0UW8aOkwYcP8R3O1Qqt41QuKONpU4qY4PmWyn5kf7JfJXUnDm6xcCHJIk5OGnwohjKecK6W5hRqtVrGExM7X1PZn+CAJvtX0gbiQSr7S95Jbr8E0E05r0pUGA2UtONpc4qIOvmf9scffxSyfxWG6CoLHwk3NmHOh4K5afuvspKxZqxNG5Bl1PFGOvuX/axozV8tnCiy/PNRwtouCqWCIVz6jkoFOUWj+K/45xf1XV5TgLvmsMI8CDlQpgHXQfvdlUgjEwIfgMfNPlNFBUIgDY8bN04rGCLieDSNixEwDJuK1TBbAMC4m5LiDrsAHvNwl5kwcFmU1myFpPFsIvub/a5o4EQLN4osgYQUjkqUINzeyIWgWs5T0tezD9nv7H9JA4kX4kYZlMMu0FuCt6cjuub4uBS7qqrK0CuQlfT19EOuiD506JCJq2gEpWF6E4ZfqWcE0UtOgnHRgAt4zLBo0aKQBp6TVP67Z/8TB5KWEzfEjzRIOR+4Hk0rMxBdAOUuM25GkZaqH/iKAlu3bm2fxxc0mnJhNbifcKe/C1iOAmhMdj2nOYXbGx359K3PKfD000/LPH0RP8SRMLjAxVzgevQoMJz3sYEbuvUsRixV/P2beCAuJFQYbuHJ9VjIwZCZ3gVGu3IjAe659BSaiDA+T+MKaLipE+oHIM2fGHrpFSsquDgfgMcCKqNyWT/Wr1+vuZ6IMDotQO5HfEhIUWnhKuqxi/MhEzcBccmUK0DJCEHZkKHblV8n+IsCWP0c+vnnn2X4oPsNbj6KBBH4puApvUlFBc7fwiGh5zRczFUaQ4YMKR49enR3LBsa2qdPn25tbW3BY8eOtXz55ZcnYM1vgztd1XLyKDr5/QccdcrmfU8DfNuc9IkCE7gezSsDnBns+3feeUe2lsvOkpfXoqIiyrG97r///opHH310LvwiDwH4LmEN2x6A7nO42D2vwZd41xInWHQgemEA8eU0u0RxPjwcgbfocSAqcBHhgAEDDC86Zhw5cmQJZJX/6tev32A4574BxOE/ZBgmpasXL15sPH/+fD044IbXXnttN1zx0oedDgoK0EHlmTNnTMneX3o8OGy/HqtwCJdMffbZZ0EvAg+EMkAkupLt361bt34FBQVdQByGQnDEbj169OiPYXgwOGPVY489NvyRRx4px2+ZTGPT1NdX4oR4kRAhCl+RYRdcj0dKCU/2WbFiRRSHlBScd8kAXMHAgQO7AmRlAGKfmAYYAGB3DMPD4GL2Ucxjjztx4kQtZMH/27Vr1wUQ2ZNiSAwNOvSTeJk3b57o3VLiDP/c7Ud1RcCHnEJZj17fvep8m8pGcXFxLPd3EQ0csRAgvRHr10bCncSN8IC/du/evQ0Yiv90ZdYJ3G5ZRNxIvOQTZ+3gcxKeh+i5Apxwq9ZtufJ7NQFALe7SpUsPDNEDcThLFfYkj8B/95BBgwYV4zAXJx29SoKk2qXATQRn7UQDK+SwytXKrsBzLlyJPk2gLMjhGfasOTgD499feOGFf73rrrv6DR48mNOROjgooMBNmYW39sOP+QoX/7kIyEUEP/zwgxawHUS1bzFc9x41atSdOBNkJEwxdR9//PE/cFzDgdOnT8us/ParvrgSN8QP93zEBOKMeGuxZb4IK3Rm5JFSMLPYeZyPfH9PldjSiCnDmDh6gCC8cvjw4ZZNmzadhbcGX4srwI1B/EyaNEmEH+ItAj7hkMuzzHyPMjUBqLD0YqSRGhrxj9CGa3HY4D9qa2uv4j/f1/QjfgA+EQWJt8O2oNxTlIOH6InSdZqbAtCIiyorK6fALPMvmIp8cdmyZZOfeuqpG9w5/ZOiwE873oog/BGAtPG5Ak9vdCXqBCkFIN+UcDSGbbAcp0SOwqxQLyw1v/bNN980tba2hvxmG1Tgpwdxx/G4O6KLw4Fopt4SKcWZ9AE5IIzWA++8885/u3z5cuOIESO+wRTdl5B/Wv2mjBA/xJHgvGDird0+JeR6R44ckW0MkRJeP4imQElJST9wwAehCf8PVns88+yzz1bgMGeRAB79ood+KXDUg4QQynsHDx70tbCcjv7HEFwAw3RPBK7oCMOlyBismAlDGWnFUHzeDwoJcSRROnpKwcej4XVICwUMzCGXMeI8XCjEVdXY61qL+eFNfliqpcBRO/i4hs8VampcS+5deXRCchSAQtJ1woQJ98I4PWXHjh234iC+1b/++msTNt+cSa6k/MmtwFFXcj6hDIL/SpcSkj9Nzt2acqUMlRII4UOmTp06CquoS8PhsOlVw7QCR1jGKwFfc3OzBl+GMAzwFXPhKgzTj2MmpAEa8YaTJ09Ww/PTRa/NjChwVEQbn5DztbS0ZIj0ulibApZZpvzuu++eu2bNmv+Gcfo/4Va4n5dWyShwpASf5nw2SjJ4hUZcSI0YhulBWDM47KGHHqrEtZirrDP42awVDfDJ2qHBl7VeUHwIADRgjhmEpVk3/QcCFin0ARiFI5KimJx8FA98wik0yB4yxOZkI71QKWjDNAoOvPfeeyvgfLvcC21S4KiQMp9wJgNyhzYyZ7/3yQS5Ds5E9MSSLAWOQgSfcKcRtDENvuyDj06agjhwpQWzIO37HDqhCmn9pAJHQcoVBJ/L0MyXsFsrrRXRhckpAFtfECtfTmLabe3nn39+HNNSl+W58+dJIuBztQYvudJ0QvopAE7HIfYyVv7WwyB74vfff6/Dpus2r9j7FDiKcD4XVaFt6WHXRZX0J4DjXcWSq+OYavs7ptxOr1y58lT6v9J5JSpwJAcflv5o8GWwz8DtrmFo/aG+vv74G2+8sRkLLzEZ0CxU/jJYjYwXrcBRO/iE/nLHjKF/SB3STQFwumvBYPAKgHYCa90OY4XLyc2bN58F9/Mc8Eg7BY6uUuFoFRF4/PjxomSdlgIFKN9BljsL2e7IW2+9tfKDDz44gnuhtSGFz+TUqwoctUrBB+9N2sicpm4E5sJXrlw5i2F2GwBXjd1tzdu2bfOF6zUFjtrBJ7QnDR8+XDjzkab+8EUx5HSQ7a7ChFIPbbbxwIEDtVu2bDmD6yWvczy7gxU4ukjOdwmRykUUp+OmDx7wpjcR2WRM/gr5ro0mFOzh+AgrlxtwXNTx5EvJ3zeIH8HmITaIeLtUhOmcMP5Byf1cezmw+SW0YcMGAlSHJChAgzFmKLZCkz325ptvfrt9+/bzmGD3tGwnIg/xg3QRfi4Sd5xeYxAqHTNmzNDmluv0SegvOR3CBWwXPAy3uocg2x2jJgsvBrTleVKbVRFGgZ92vNmobEIhrlUUeDlqKFZ9yO/PKN9BqWgG8I5ieP1UOw3C2Wly/BBvEZbYKAIP3MHSZaxJpy+i5zrtOgXgiaAZDoJ+/vDDD9dht9a5n3766bzfNojHYoG4IX5i063f7Xizh90LSHQ5u6Z7K+y8991wISFYbLJJgzH+MeuguULEqz0Ej5wNGnjXyUTcED+CQJwRb9c5H4Q/jhpkhYOY6Axwgmh+9dVXziR9DwoAeCEYjBvhJnclTt+p1y5yo2FB3ESnRH41EW/85WSLZIUu8M2ZM6fgueeei7zp9xv8k4aw02x3Q0PDMcxSrIfdrglynu802Xg4IG4keSIinjODcOMynTrD7ZfviUtOhznZS9Baj8LZ9SHMVhz5/vvvG3G94nf5LhZkxIvEGTizRnAW4XxghRfxX92Mh67jEJ588kkT8kzsN/z02yTwsBig7tNPP131+uuv76b5xE8ESKatxIskfzNxZj+L0mIBvhF4MMF+aF8hVHvyBCJuT7z55pt7fv3116/RrRkEZJdfatjtWmEs3vvJJ5/w+IOz2FvbiBXe1zBtJiOwTTZfXkHTDp9AxHXzLqJCbTYwhnvS0TWUhhD+uU7Dl1677clGDIdZLms/e/Ys7MVHD0K2O4Xj3JvI8TTwbCq5r8QJ8eJ+0o6rqH0ZTpkvAJbIoSQyJjsLeOaZZ0QFOrPk3T09hUJ5uLZx48ZNmI3YajcAI0AYz1og033x0UcffYKD7P6Xznwo39l59FVMAQVOzlj4irzoAhQIPxhPb4nkcNx49bxd+FIuGTZsWAmOPB0Mvyll4IbXwOXqcLbwOSgYQSgYLhuogyz61qJAsuftRhQOBwUbcM8htosjrf12yZIlYdhvhJbD2Lz59BsG4iswl7DN9ZDnWgG+IDyJNoIrtukhNvGeJD6QW4QP0pa4igouzsen4H5cQz86Kqf1A1MmIR5pLnqm0/xLgYkTJ4bgd1qGiz8x5NbEUidK5nM8rMW9cFpt8eLFnthJ72irvk0DBRS4II6IJ1cQcj7mAvfjJo6q2DcwDAXgY1dzv1jC+Pg3uR4WyxbBVOWylIAsh8D1hD6WZZyPpDyE6OJynCx+9913RR/hOzr4kALYc2xKgEf8EEfCIAWfpRYfE72F4z6L5s2b50m7n6i9Ok1OAeIAWq5IceVLx2LNK86SpMMuM2HoLcFlOqJLkIR2GIZndR7yoSyD5ejgTQpgf4aJfcfcpyFiYpT1NgF8Utuo6KUIpawXXVoKM/CDS5cu9f2CgwixfHjD/pcAj9SoUQGPGeJyLXA/AvRuxF58ITZMmzYtiPlOGduNza5/e4QCmPWhLVTW71wsuhngc+kMzubHBR8zA4BluEx1vmjfY2tleNy4cYbeYmlTxPtXbomE53wTV9nIuQXAi5orF1FF9nJUXquguqhE6wcrsGrVKtmSadErOi2PKUBrB/tbAby6RIBHEiQEPotWtNUI5zjBgotefvllrf1ahPLyhf3M/pa0kfgQ2vRE+RMadu0XMfwOxP3f7N/OK43PONhOy39OonjsnnIeVgDRmCxr2XZwPdccrixzUuBjIQCgcOaDz2B2MbGEOgx5QFo75tMh/yjAWQysZi+QrNVjg6QzGbLWJjPs2mXsx805+4fzCrXbwBliRkVFhVLLcb6j73OfAuxPuE0xFMAjHoiLpELS4ANbJbB2IAplvPLy8gKYXqgJ6Sm4pLoiNzOzH9mf7FdJDYmDHRYuJFnEybICxbmtVHyIntJ3yTLhP6UQHDCEMxhkWXR6HlAAnI6nYYbYn4rq7rLwoMgiftQh8LEofJCC5W/iYgMByAhF2L0f1BxQRqHcTme/QcYLsR8VNf3NwoEii/xR0gpHbFFQQEYhbWxsuv0bm29C0JIMXDsMdLssfc0OBSjjcaiNw/H2A3gHUqlRyoCwKiBcLMiKsQHggOSEnGjWIccpwH5if8UBXm2qwCMZUgafRcu9uNZb964LhVWq6bQTuR7qhJyhAPuH/aRQLlhX9jP7O+WQFvDhv4CaLRUQKQCpptNA+eqrr7YpjJQpN0gXkDwF2B/sF/aPwpzCgtm/VDDSYslIWeZzNhXyH8ujx4NKZ3rsPeSJ4Ny5cwv1YoRYymT/NxULztWC66kUC1aMotXedAGPBaYVfCyQIZ4SwjxcDQMAUrCN12hm1yEDFOAwC+AVAIDxRsCUlQtR9eN9VPRO3DRLGJWaYVgAG8z1YCtWrGjDzEha2HjciukM7RQgvUl30j8B4NGckpJWKyN7Rjif/TFwQC5EmITo2oBu5+GVS/IXLVoUwgEpynzOd/R9xyjAPRfLli0rVKxAtgvmzMVOAO+0nZDua0bBx8oCgN1wofuNvvytCnBPEZw/f76hN6WrqNSxZzShcJeZYrOPs2DO1XLKjDNZGQsZGXadtbUasAVp0i10dn4Shrve16xZ06btgjZVUruSjqQn6Zog8A7ii1yJnFHgsVUZ53xO0oEL/gW/OQwXO9Nl9+vXr2975ZVXCnBOmWpuUfa6r9OnTJkSoheBmTNnJirKcCEozSgZG2ZjOySr4OPHAcCuuHBN4FD+TiTA8BnEuRbm6tWru8B1WSKv+DIPHTPSP97ChQsNrKtMxopQB4LtA/CyStysg89GBUDITUkTEYW74ux8zis9pGIICS5fvtwAIJMhrrMYz93TB/KCBQvM2bNnxzMSx7adu8z2AHRxN/vEvpiO350GPlYeAKTMWYlIr1hJDa3wmReCw8bwunXrDJgMCgHMTm0L6p+1wKVO2LIa4nEDs2bNKlA435bVifPs3I/NOdpOW/ibEx0GENIzAlfHDENMWgni/hEI1MHq6moT0cCR8Z6aPeEsBA/R41lmPFKKJ/t0cIqSQDuKeBCgk3oSwPOshJwAn91SSx6swu/hiElxQrsM+8r9JDhGPgRXtiaOpArU1NQEcFKQAY/yBk6ADCDyasARpEHwZjsQPFhsa/bu3duOgdLSUrOsrMzk0fA8oZsHJfO8Wm5PSLF+bOARRO6zyKpcp6p3qo1Sld3hZwAhteFKKyaqrXX4ex5+kYZizslyeBVue+3Mtuck+GyCAITkfpwloWZMM01O1xf1y4XAqUqaS6jBNgB02WfrCVIhbzrTGpKHoF0EYmmC7fNTtmY0loA7kUtDq6oD8gZ8zkYAiD3wu78jJmS0dpbhgXsOozzHrD0CcJGTffKlbXkJvljiAoy9kUa7ISPthgSnJ9qGdjBwKCW4aJejTY4nN7bgmtfBSx0U6QiAke0iABl7WpEzKzRMx8aUtGqUl0qgPBYURGqkPAqekaC7CLB5btnZ/wNNqhSQfc53NwAAAABJRU5ErkJggg==",
        "v.png": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDozQkMzOUE5NkY1NjZFNDExQUU1QTkyN0MyNTU0Q0NBOCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo1MjU2NEM5RkJGMUUxMUU1QThFNkY2RDkxMUI1NzEwRiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1MjU2NEM5RUJGMUUxMUU1QThFNkY2RDkxMUI1NzEwRiIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M1IFdpbmRvd3MiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpFN0VGMzZEMDhDQjJFNTExOEQyRkUyRjRBRTU4OENCNiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDozQkMzOUE5NkY1NjZFNDExQUU1QTkyN0MyNTU0Q0NBOCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pnp8HfwAAAVbSURBVHjaxFhdaBxVFD73zszuJulDBUFUsOCLQVR8CJW+CIIoBQUjYh7Uhz5YCvZBatEWtYaEiE1ro1FLYu1D8Y8WW2sJlIh9EApVqChNivrSIiVVq9KmbX52Z+Zezzn3zu7M3slmd4vmsmfn7uzcc7/7nfOduTNCd/eCbQW0jWhPoa2zv//LVkE7hfYF2of2NwgL6Ha0CbT7YWXaT2iPoc1Iy8TxFQQDdm7CUJA2TPfCyjfCsNHHr77aOc0f+tLc16nrhf0I2xfL+G/gSxgfItW3rY8Ara05wKE0UMd4VHi0xgOlGSw87guQ9c5SWBIQMY/XKvGj7WJwvJSgyRfIFDBY66fVlDjRKsJDxRzJabIe6SOeAJ0Fpl8FlWVGA06urB8Voq9wST8C+7xYA6vgpxk2DMUMRkWLbOSQV4eDpFcA4ZfQX8kMIIf14SOGCQyCULH1EZUZHI0RDKYIUqMPH0cLYkpWefazMSd60Vn3Gggm9gN4Mrv2c79B+UEsE6EC84/ka0TiLlkQLkJFC6DCOYDHH4Li+G4nqurLSdBb3gItPaw9lAYmnDIvGfX0rxB/fMj5R9y5Brzn+0BV5nDCMnoNq3mShIoXxAwjoC4PgjdeyimJIcRvjpp8hWwayqyKRFVN0c4PQM/NOb78rZtB3bwKwzCPIUnyzIpBJewsMjveKy+AuO1Wx0e4dz/omT/qRCHqAAmbchRPyv7LsxDuGnVZ6urCVW+FuDKPoBY5V7CDYCIDDplT4QLouzDsG551+b/4O0R7xnBmz86VCrnLkGRZc/ZjAkdjB0CdO++y9PSTIHru5rDoGAGQiqwyDTvzUBjux/zy3GgNDoMoRzgHCkRkFFYPyEhSEHIEI/0OVEIAITrIa4XhAVBq0bBhFWlsHuQTj4C37gE3kc9Mgzp8HH13ohVxHp8ZSqs0m9TChoyliaCCDlDHTkB86nvHubzvHpDP9HKuZCzQUBh8Nf/2/vIOkLLIZYNrGRfZbB1zVWarMVEqPaw5QSc6Qvrj2GVpxzZWUly5Zqx8Dfwtm3ITOTo6Afr0WWaeFsuLrgtXPiBO7CR0ZjXwy3mIDn/lXnnTaghewwQvX4V4cRbgjlugsHlTrszDgV28OMGhCjip8+6HMpdbupAB+bYyd0LYP5xbBoINz3H4qA4VhgeRtsDF8/4YiAt/1dgRfu0m3RQgvjyVSxTzv69C+PZ77qWopOLuIfAffZjNkfmflyAaGed85ETm+6Bccrcgl9w9VHPJZ0fEUrTvU64jDiZUVPHAeH4i7xwBiZtTQeyQ1Il5kPm7hIaAqmXAsMShQ8eV14fyr8WCmSvzT46YEkI+WOZew71UQ0DpMmBYwjJwdBLUj2ea28WzzEvV3IFlwCwPKBO6gHOJy8D2/mWHRZPfWJmXGsq8dUBQVyxxtTRRdOhIA2pQ5tsHrcxLDWXeBqB0GQi4jtBE4dAIT5yLh2V+qSmZtwcoUwZMLomL//DEjswvX4F49KNaEVxG5m0CsotLJzjWlWhkn1MG6GYsFmKWuWxC5u0DSrNEE+GEXigg3LO3JvOps6A+O2bu5k3K/AYApcqAl7DUCfrzCVDTPxtlDbyDQDqYvWZlfmOA0mUg2TN5XRD3vwvqxEkQ302b3PGKTcvcca+7e8stv+mgp5Pk+Y0eb2gvvXoViNk5G1LfPHu1Dug6jfihbZaoWBIbVDCvh3iqxPkFLci8rk0RoIOtvxeweyZigBmxT6GUxHbz3mru2HaQQkbhOt3+GxCdUx/aalNoPfLKha/pzdV6ewLaYStrbYNZT1hYZdiZIXRoL6J9+z++Ezpp5+yxGOBfAQYA5wI5Wdtr9xAAAAAASUVORK5CYII=",
        "taobao.jpg": "http://gw.alicdn.com/tfscom/TB1ki5YKFXXXXbrXFXXuLfz_XXX-1125-422.jpg"
    }
}, function(e, t, n) {
    var r = n(10);
    "string" == typeof r && (r = [[e.id, r, ""]]);
    n(12)(r, {});
    r.locals && (e.exports = r.locals)
}, function(e, t, n) {
    (e.exports = n(11)()).push([e.id, "html{-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;-webkit-tap-highlight-color:rgba(0,0,0,0)}img{border:0}button,input{line-height:normal}button,select{text-transform:none}button,html input[type=button],input[type=reset],input[type=submit]{-webkit-appearance:button;cursor:pointer}button[disabled],html input[disabled]{cursor:default}ol,ul{list-style:none}body,html,li,p,ul{margin:0;padding:0}", ""])
}, function(e, t) {
    e.exports = function() {
        var e = [];
        return e.toString = function() {
            for (var e = [], t = 0; t < this.length; t++) {
                var n = this[t];
                n[2] ? e.push("@media " + n[2] + "{" + n[1] + "}") : e.push(n[1])
            }
            return e.join("")
        }, e.i = function(t, n) {
            "string" == typeof t && (t = [[null, t, ""]]);
            for (var r = {}, o = 0; o < this.length; o++) {
                var i = this[o][0];
                "number" == typeof i && (r[i] = !0)
            }
            for (o = 0; o < t.length; o++) {
                var a = t[o];
                "number" == typeof a[0] && r[a[0]] || (n && !a[2] ? a[2] = n : n && (a[2] = "(" + a[2] + ") and (" + n + ")"), e.push(a))
            }
        }, e
    }
}, function(e, t, n) {
    function r(e, t) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n],
                o = p[r.id];
            if (o) {
                o.refs++;
                for (a = 0; a < o.parts.length; a++)
                    o.parts[a](r.parts[a]);
                for (; a < r.parts.length; a++)
                    o.parts.push(c(r.parts[a], t))
            } else {
                for (var i = [], a = 0; a < r.parts.length; a++)
                    i.push(c(r.parts[a], t));
                p[r.id] = {
                    id: r.id,
                    refs: 1,
                    parts: i
                }
            }
        }
    }
    function o(e) {
        for (var t = [], n = {}, r = 0; r < e.length; r++) {
            var o = e[r],
                i = o[0],
                a = {
                    css: o[1],
                    media: o[2],
                    sourceMap: o[3]
                };
            n[i] ? n[i].parts.push(a) : t.push(n[i] = {
                id: i,
                parts: [a]
            })
        }
        return t
    }
    function i(e, t) {
        var n = m(),
            r = b[b.length - 1];
        if ("top" === e.insertAt)
            r ? r.nextSibling ? n.insertBefore(t, r.nextSibling) : n.appendChild(t) : n.insertBefore(t, n.firstChild), b.push(t);
        else {
            if ("bottom" !== e.insertAt)
                throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
            n.appendChild(t)
        }
    }
    function a(e) {
        e.parentNode.removeChild(e);
        var t = b.indexOf(e);
        t >= 0 && b.splice(t, 1)
    }
    function s(e) {
        var t = document.createElement("style");
        return t.type = "text/css", i(e, t), t
    }
    function l(e) {
        var t = document.createElement("link");
        return t.rel = "stylesheet", i(e, t), t
    }
    function c(e, t) {
        var n,
            r,
            o;
        if (t.singleton) {
            var i = y++;
            n = g || (g = s(t)), r = u.bind(null, n, i, !1), o = u.bind(null, n, i, !0)
        } else
            e.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n = l(t), r = f.bind(null, n), o = function() {
                a(n), n.href && URL.revokeObjectURL(n.href)
            }) : (n = s(t), r = d.bind(null, n), o = function() {
                a(n)
            });
        return r(e), function(t) {
            if (t) {
                if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap)
                    return;
                r(e = t)
            } else
                o()
        }
    }
    function u(e, t, n, r) {
        var o = n ? "" : r.css;
        if (e.styleSheet)
            e.styleSheet.cssText = _(t, o);
        else {
            var i = document.createTextNode(o),
                a = e.childNodes;
            a[t] && e.removeChild(a[t]), a.length ? e.insertBefore(i, a[t]) : e.appendChild(i)
        }
    }
    function d(e, t) {
        var n = t.css,
            r = t.media;
        if (r && e.setAttribute("media", r), e.styleSheet)
            e.styleSheet.cssText = n;
        else {
            for (; e.firstChild;)
                e.removeChild(e.firstChild);
            e.appendChild(document.createTextNode(n))
        }
    }
    function f(e, t) {
        var n = t.css,
            r = t.sourceMap;
        r && (n += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(r)))) + " */");
        var o = new Blob([n], {
                type: "text/css"
            }),
            i = e.href;
        e.href = URL.createObjectURL(o), i && URL.revokeObjectURL(i)
    }
    var p = {},
        h = function(e) {
            var t;
            return function() {
                return void 0 === t && (t = e.apply(this, arguments)), t
            }
        },
        v = h(function() {
            return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase())
        }),
        m = h(function() {
            return document.head || document.getElementsByTagName("head")[0]
        }),
        g = null,
        y = 0,
        b = [];
    e.exports = function(e, t) {
        void 0 === (t = t || {}).singleton && (t.singleton = v()), void 0 === t.insertAt && (t.insertAt = "bottom");
        var n = o(e);
        return r(n, t), function(e) {
            for (var i = [], a = 0; a < n.length; a++) {
                var s = n[a];
                (l = p[s.id]).refs--, i.push(l)
            }
            e && r(o(e), t);
            for (a = 0; a < i.length; a++) {
                var l = i[a];
                if (0 === l.refs) {
                    for (var c = 0; c < l.parts.length; c++)
                        l.parts[c]();
                    delete p[l.id]
                }
            }
        }
    };
    var _ = function() {
        var e = [];
        return function(t, n) {
            return e[t] = n, e.filter(Boolean).join("\n")
        }
    }()
}, function(e, t, n) {
    var r = n(14);
    "string" == typeof r && (r = [[e.id, r, ""]]);
    n(12)(r, {});
    r.locals && (e.exports = r.locals)
}, function(e, t, n) {
    (e.exports = n(11)()).push([e.id, ".f-inline{display:inline-block;*display:inline;*zoom:1;vertical-align:middle}.f-bg-cover{background-size:cover}.f-bg-contain,.f-bg-cover{background-repeat:no-repeat;background-position:center}.f-bg-contain{background-size:contain}.f-pos-cover{position:absolute;top:0;right:0;bottom:0;left:0}.f-justify{text-align:justify;font-size:0}.f-justify:after{content:'';display:inline-block;*display:inline;*zoom:1;width:100%;height:0;vertical-align:middle}.f-clearfix:after{content:\".\";display:block;height:0;clear:both;visibility:hidden}.f-two-line{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;text-overflow:ellipsis;overflow:hidden}", ""])
}, function(e, t, n) {
    n(16);
    var r = n(20)(n(21), n(220), null, null);
    e.exports = r.exports
}, function(e, t, n) {
    var r = n(17);
    "string" == typeof r && (r = [[e.id, r, ""]]), r.locals && (e.exports = r.locals);
    n(18)("ba1c29b0", r, !0)
}, function(e, t, n) {
    (e.exports = n(11)()).push([e.id, 'body{-webkit-text-size-adjust:none;-webkit-font-smoothing:antialiased}a{text-decoration:none}@font-face{font-family:tblive-font;src:url(//at.alicdn.com/t/font_1477475399_7575812.eot);src:url(//at.alicdn.com/t/font_1477475399_7575812.eot#iefix) format("embedded-opentype"),url(//at.alicdn.com/t/font_1477475399_7575812.woff) format("woff"),url(//at.alicdn.com/t/font_1477475399_7575812.ttf) format("truetype"),url(//at.alicdn.com/t/font_1477475399_7575812.svg#iconfont) format("svg")}.icon{display:inline-block;display:inline;zoom:1;vertical-align:middle;font-family:tblive-font;font-style:normal}.live-title{margin:0;padding:12px 0;display:block;font-weight:400;background:#fff}.live-title-txt-small{padding:0 8px;font-size:16px}.live-title-txt-big{padding:0 16px;font-size:20px}.live-title-txt{display:block;border-left:2px solid #ff2851}#J_live-main{width:1190px;margin:auto}.text-pink{color:#ff2852}body,html{background-color:#eee;height:100%;font:12px/1.5 tahoma,arial,Hiragino Sans GB,\\\\5b8b\\4f53,sans-serif}#J_room-container a:hover{text-decoration:none}#J_lr-banner{display:block;height:300px}.lr-group{margin-bottom:20px;background:#fff}.lr-player-movement{width:815px}.lr-player-movement .lr-movement-wrapper,.lr-player-movement .lr-player-wrapper{float:left;height:710px}.lr-movement-wrapper{background:#f8f8f8}.lr-col-item .lr-player-wrapper{width:400px}.lr-status-desc-wrapper{height:300px;background:#051b28;line-height:300px;font-size:16px;color:#fff;text-align:center}#J_room-container .lr-layout-horizontal .video-player-wrapper{height:460px}#J_lr-layout-vertical .lr-movement-wrapper{width:380px}.more-live-list{padding:12px 6px}.more-live-list .lr-morelive-item{margin-bottom:12px}.lr-all-item .lr-all-item-list{height:509px;background:#fff;overflow-y:hidden}#J_lr-layout-horizontal .lr-all-item .lr-all-item-list{max-height:509px}.lr-item-action:hover{background:rgba(255,40,81,.08)}.lr-all-item .lr-view-more{position:absolute;bottom:-3px;left:-1px;right:0;height:30px;line-height:30px;color:#fff;background:rgba(0,0,0,.5);text-align:center;cursor:pointer;z-index:1000}.lr-all-item .f-list-scrollable.lr-all-item-list{overflow-y:scroll}.lr-liveshare-tip{background:rgba(255,40,81,.9);border-radius:100px;width:150px;height:24px;cursor:pointer;color:#fff;text-align:center;line-height:24px;position:absolute;top:52px;z-index:100;left:50%;margin-left:-75px}.lr-showcase-body .lr-content-empty,.more-live-list .lr-content-empty{height:100%;line-height:130px}.lr-content-empty{text-align:center;font-size:14px;color:#999}.lr-showcase-page{float:right;font-size:14px}', ""])
}, function(e, t, n) {
    function r(e) {
        for (var t = 0; t < e.length; t++) {
            var n = e[t],
                r = u[n.id];
            if (r) {
                r.refs++;
                for (a = 0; a < r.parts.length; a++)
                    r.parts[a](n.parts[a]);
                for (; a < n.parts.length; a++)
                    r.parts.push(i(n.parts[a]));
                r.parts.length > n.parts.length && (r.parts.length = n.parts.length)
            } else {
                for (var o = [], a = 0; a < n.parts.length; a++)
                    o.push(i(n.parts[a]));
                u[n.id] = {
                    id: n.id,
                    refs: 1,
                    parts: o
                }
            }
        }
    }
    function o() {
        var e = document.createElement("style");
        return e.type = "text/css", d.appendChild(e), e
    }
    function i(e) {
        var t,
            n,
            r = document.querySelector('style[data-vue-ssr-id~="' + e.id + '"]');
        if (r) {
            if (h)
                return v;
            r.parentNode.removeChild(r)
        }
        if (m) {
            var i = p++;
            r = f || (f = o()), t = a.bind(null, r, i, !1), n = a.bind(null, r, i, !0)
        } else
            r = o(), t = s.bind(null, r), n = function() {
                r.parentNode.removeChild(r)
            };
        return t(e), function(r) {
            if (r) {
                if (r.css === e.css && r.media === e.media && r.sourceMap === e.sourceMap)
                    return;
                t(e = r)
            } else
                n()
        }
    }
    function a(e, t, n, r) {
        var o = n ? "" : r.css;
        if (e.styleSheet)
            e.styleSheet.cssText = g(t, o);
        else {
            var i = document.createTextNode(o),
                a = e.childNodes;
            a[t] && e.removeChild(a[t]), a.length ? e.insertBefore(i, a[t]) : e.appendChild(i)
        }
    }
    function s(e, t) {
        var n = t.css,
            r = t.media,
            o = t.sourceMap;
        if (r && e.setAttribute("media", r), o && (n += "\n/*# sourceURL=" + o.sources[0] + " */", n += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(o)))) + " */"), e.styleSheet)
            e.styleSheet.cssText = n;
        else {
            for (; e.firstChild;)
                e.removeChild(e.firstChild);
            e.appendChild(document.createTextNode(n))
        }
    }
    var l = "undefined" != typeof document,
        c = n(19),
        u = {},
        d = l && (document.head || document.getElementsByTagName("head")[0]),
        f = null,
        p = 0,
        h = !1,
        v = function() {},
        m = "undefined" != typeof navigator && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());
    e.exports = function(e, t, n) {
        h = n;
        var o = c(e, t);
        return r(o), function(t) {
            for (var n = [], i = 0; i < o.length; i++) {
                var a = o[i];
                (s = u[a.id]).refs--, n.push(s)
            }
            t ? r(o = c(e, t)) : o = [];
            for (i = 0; i < n.length; i++) {
                var s = n[i];
                if (0 === s.refs) {
                    for (var l = 0; l < s.parts.length; l++)
                        s.parts[l]();
                    delete u[s.id]
                }
            }
        }
    };
    var g = function() {
        var e = [];
        return function(t, n) {
            return e[t] = n, e.filter(Boolean).join("\n")
        }
    }()
}, function(e, t) {
    e.exports = function(e, t) {
        for (var n = [], r = {}, o = 0; o < t.length; o++) {
            var i = t[o],
                a = i[0],
                s = {
                    id: e + ":" + o,
                    css: i[1],
                    media: i[2],
                    sourceMap: i[3]
                };
            r[a] ? r[a].parts.push(s) : n.push(r[a] = {
                id: a,
                parts: [s]
            })
        }
        return n
    }
}, function(e, t) {
    e.exports = function(e, t, n, r) {
        var o,
            i = e = e || {},
            a = typeof e.default;
        "object" !== a && "function" !== a || (o = e, i = e.default);
        var s = "function" == typeof i ? i.options : i;
        if (t && (s.render = t.render, s.staticRenderFns = t.staticRenderFns), n && (s._scopeId = n), r) {
            var l = Object.create(s.computed || null);
            Object.keys(r).forEach(function(e) {
                var t = r[e];
                l[e] = function() {
                    return t
                }
            }), s.computed = l
        }
        return {
            esModule: o,
            exports: i,
            options: s
        }
    }
}, function(e, t, n) {
    "use strict";
    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    r(n(22));
    var o = r(n(23)),
        i = r(n(27)),
        a = r(n(32)),
        s = r(n(38)),
        l = r(n(45)),
        c = r(n(210)),
        u = r(n(122)),
        d = r(n(126)),
        f = r(n(215));
    t.default = {
        components: {
            headerBar: o.default,
            verticalPanel: l.default,
            horizontalPanel: c.default,
            showcaseList: i.default,
            lrReplayItem: a.default,
            lrMoreliveItem: s.default,
            toast: f.default
        },
        data: function() {
            return {
                showcaseIndex: 0,
                showcaseLen: 10,
                moreVideosLoaded: !1,
                replayVideosLoaded: !1
            }
        },
        computed: {
            isReplay: function() {
                return !!this.video && Boolean(lib.env.params.feedId && this.video.liveUrlHls && 0 != this.video.status)
            },
            hasVideo: function() {
                return !!this.video && Boolean((0 == this.video.status || 1 == this.video.status || 3 == this.video.status) && this.video.liveUrlHls)
            },
            showHorizontal: function() {
                return !!this.video && Boolean(!0 === this.video.landScape && this.hasVideo)
            },
            showVertical: function() {
                return !!this.video && Boolean(!1 === this.video.landScape && this.hasVideo)
            },
            errMsg: function() {
                
                if(1 == this.video.status){
                    console.log('endLiveVideo');
                }
                return this.video ? this.hasVideo ? "" : 0 == this.video.status || 4 == this.video.status ? "主播正在赶来的路上" : 1 == this.video.status ? "主播休息中" : this.emptyObj(this.video) ? "SentinelBlockException" === window.message ? "直播间被挤爆了" : "主播正在赶来的路上" : void 0 : "正在加载"
            }
        },
        created: function() {
            this.fetchVideoDetail()
        },
        mounted: function() {
            var e = this;
            this.getUserInfo(), setTimeout(function() {
                e.fetchReplayVideos(), e.fetchItemList(), e.fetchMoreVideos()
            }, 400)
        },
        store: u.default,
        vuex: {
            getters: {
                name: function(e) {
                    return e.name
                },
                itemList: function(e) {
                    return e.itemList
                },
                hotList: function(e) {
                    return e.hotList
                },
                replayVideos: function(e) {
                    return e.replayVideos
                },
                moreVideos: function(e) {
                    return e.moreVideos
                },
                video: function(e) {
                    return e.video
                },
                toastMsg: function(e) {
                    return e.toastMsg
                }
            },
            actions: d.default
        },
        methods: {
            emptyObj: function(e) {
                return 0 === Object.keys(e).length
            }
        },
        watch: {
            replayVideos: function() {
                this.replayVideosLoaded = !0, lib.img()
            },
            moreVideos: function() {
                this.moreVideosLoaded = !0, this.$nextTick(function() {
                    lib.img()
                })
            },
            itemList: function() {
                this.$nextTick(function() {
                    lib.img()
                })
            },
            hotList: function() {
                this.$nextTick(function() {
                    lib.img()
                })
            },
            video: function(e) {
                e && this.video.topic && this.initMsgSdk()
            }
        }
    }
}, function(e, t) {
    "use strict";
    !function(e, t) {
        function n(e) {
            return o.exec(e).slice(1)
        }
        function r(e, t) {
            var r = n(e)[2];
            return t && r.substr(-1 * t.length) === t && (r = r.substr(0, r.length - t.length)), r
        }
        var o = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
        (window.lib || (window.lib = {})).cdnurl = function(t, n) {
            var o = r(t);
            return (n = n || e.CDN_URL) && n[o] ? n[o] : t
        }
    }(window), e.exports = window.lib.cdnurl
}, function(e, t, n) {
    n(24);
    var r = n(20)(null, n(26), "data-v-375b32d0", null);
    e.exports = r.exports
}, function(e, t, n) {
    var r = n(25);
    "string" == typeof r && (r = [[e.id, r, ""]]), r.locals && (e.exports = r.locals);
    n(18)("87d31ce8", r, !0)
}, function(e, t, n) {
    (e.exports = n(11)()).push([e.id, '#J_header-bar[data-v-375b32d0]{height:60px;background:#ff2851}#J_header-bar[data-v-375b32d0]:after{content:"";display:inline-block;*display:inline;*zoom:1;vertical-align:middle;height:100%}.logo-wrapper[data-v-375b32d0]{width:1190px;line-height:60px;margin:auto}#J_header-bar .header-icon[data-v-375b32d0]{margin-left:28px;height:27px;width:130px}', ""])
}, function(e, t) {
    e.exports = {
        render: function() {
            var e = this,
                t = e.$createElement;
            e._self._c;
            return e._m(0)
        },
        staticRenderFns: [function() {
            var e = this,
                t = e.$createElement,
                n = e._self._c || t;
            return n("div", {
                attrs: {
                    id: "J_header-bar"
                }
            }, [n("div", {
                staticClass: "logo-wrapper"
            }, [n("img", {
                staticClass: "header-icon f-inline",
                attrs: {
                    src: "//gw.alicdn.com/mt/TB1QXiPNpXXXXb4aXXXXXXXXXXX-256-54.png",
                    alt: ""
                }
            })])])
        }]
    }
}, function(e, t, n) {
    n(28);
    var r = n(20)(n(30), n(31), "data-v-79876751", null);
    e.exports = r.exports
}, function(e, t, n) {
    var r = n(29);
    "string" == typeof r && (r = [[e.id, r, ""]]), r.locals && (e.exports = r.locals);
    n(18)("44580359", r, !0)
}, function(e, t, n) {
    (e.exports = n(11)()).push([e.id, ".showcase-list-wrapper[data-v-79876751]{position:relative;width:100%;height:130px;overflow:hidden}.showcase-list-body[data-v-79876751]{height:100%;font-size:0;white-space:nowrap;transition:-webkit-transform 1s ease;transition:transform 1s ease;transition:transform 1s ease,-webkit-transform 1s ease}.showcase-btn[data-v-79876751]{z-index:2;margin:auto;height:42px;width:21px;background:rgba(0,0,0,.3);*background:#aaa;line-height:42px;color:#fff;text-align:center;font-size:20px}.showcase-list-wrapper .showcase-btn-left[data-v-79876751]{left:0;right:auto}.showcase-list-wrapper .showcase-btn-right[data-v-79876751]{right:0;left:auto}", ""])
}, function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = {
        props: ["page"],
        data: function() {
            return {
                showcaseStyle: {},
                index: 0
            }
        },
        methods: {
            goLeft: function() {
                0 !== this.index && this.index--
            },
            goRight: function() {
                this.index !== this.page - 1 && this.index++
            },
            iniImg: function() {
                lib.img()
            }
        },
        computed: {
            wrapLength: function() {
                return this.$refs.showcaseWrapper.offsetWidth
            }
        },
        watch: {
            index: function() {
                var e = this.index,
                    t = this.wrapLength;
                this.showcaseStyle = {
                    transform: "translateX(" + -e * t + "px)",
                    webkitTransform: "translateX(" + -e * t + "px)"
                }
            }
        }
    }
}, function(e, t) {
    e.exports = {
        render: function() {
            var e = this,
                t = e.$createElement,
                n = e._self._c || t;
            return n("div", {
                staticClass: "lr-group appear-replay-videos",
                attrs: {
                    id: "J_replay-showcase",
                    "data-spm": "2278280"
                }
            }, [n("h3", {
                staticClass: "live-title"
            }, [n("span", {
                staticClass: "live-title-txt live-title-txt-big"
            }, [e._v("TA的回放"), e.page > 0 ? n("span", {
                staticClass: "lr-showcase-page"
            }, [n("span", {
                staticClass: "text-pink"
            }, [e._v(e._s(e.index + 1))]), e._v("/" + e._s(e.page))]) : e._e()])]), e._v(" "), n("div", {
                ref: "showcaseWrapper",
                staticClass: "showcase-list-wrapper"
            }, [e.page >= 2 ? n("a", {
                staticClass: "showcase-btn showcase-btn-left f-inline f-pos-cover icon",
                attrs: {
                    href: "javascript: void(0)"
                },
                on: {
                    click: function(t) {
                        e.goLeft()
                    }
                }
            }, [e._v("")]) : e._e(), e._v(" "), n("div", {
                staticClass: "showcase-list-body",
                style: e.showcaseStyle,
                on: {
                    transitionend: e.iniImg,
                    webkitTransitionend: e.iniImg
                }
            }, [e._t("showcase-list-body")], 2), e._v(" "), e.page >= 2 ? n("a", {
                staticClass: "showcase-btn showcase-btn-right f-inline f-pos-cover icon",
                attrs: {
                    href: "javascript: void(0)"
                },
                on: {
                    click: function(t) {
                        e.goRight()
                    }
                }
            }, [e._v("")]) : e._e()])])
        },
        staticRenderFns: []
    }
}, function(e, t, n) {
    n(33);
    var r = n(20)(n(35), n(36), "data-v-1e878122", null);
    e.exports = r.exports
}, function(e, t, n) {
    var r = n(34);
    "string" == typeof r && (r = [[e.id, r, ""]]), r.locals && (e.exports = r.locals);
    n(18)("de2422c6", r, !0)
}, function(e, t, n) {
    (e.exports = n(11)()).push([e.id, ".lr-replay-item[data-v-1e878122]{padding:10px;width:276.5px;height:110px;border:1px solid #eee;border-left:none;border-bottom:none}.lr-replay-item .lr-replay-pic[data-v-1e878122]{float:left;margin-right:6px;height:110px;width:110px}.lr-replay-item .lr-replay-info-wrapper[data-v-1e878122]{position:relative;height:110px}.lr-replay-info-wrapper .lr-replay-date[data-v-1e878122]{font-size:12px;color:#1b609b}.lr-replay-info-wrapper .lr-replay-title[data-v-1e878122]{height:40px;white-space:normal;font-size:14px;color:#3d3f45;line-height:1.4}.lr-replay-info-wrapper .lr-replay-visitcount[data-v-1e878122]{position:absolute;left:116px;bottom:0;font-size:12px;color:#999;line-height:1.5}.lr-replay-item:hover .lr-replay-play-mask[data-v-1e878122]{display:block}.lr-replay-play-mask[data-v-1e878122]{width:100%;height:100%;position:relative;background:rgba(0,0,0,.3);display:none}.lr-replay-play[data-v-1e878122]{position:absolute;width:24px;left:50%;top:50%;margin-left:-12px;margin-top:-10px}", ""])
}, function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = {
        props: {
            replayItem: {
                type: Object,
                default: function() {
                    return {}
                }
            }
        },
        filters: {
            shortNum: function(e) {
                return Number(e) > 1e4 ? (e / 1e4).toFixed(1) + "万" : e
            },
            getDate: function(e) {
                var t = new Date(Number(e));
                return t.getFullYear() + "/" + (t.getMonth() + 1) + "/" + t.getDate()
            }
        }
    }
}, function(e, t, n) {
    e.exports = {
        render: function() {
            var e = this,
                t = e.$createElement,
                n = e._self._c || t;
            return n("a", {
                attrs: {
                    href: "/room/index.htm?feedId=" + e.replayItem.topic
                }
            }, [n("div", {
                staticClass: "lr-replay-item f-inline"
            }, [n("div", {
                staticClass: "lr-replay-pic f-bg-cover f-inline lib-img",
                attrs: {
                    "data-src": e.replayItem.coverImg,
                    "data-size": "240x240"
                }
            }, [e._m(0)]), e._v(" "), n("div", {
                staticClass: "lr-replay-info-wrapper"
            }, [n("div", {
                staticClass: "lr-replay-date"
            }, [e._v(e._s(e._f("getDate")(e.replayItem.startTime)))]), e._v(" "), n("div", {
                staticClass: "lr-replay-title f-two-line"
            }, [e._v(e._s(e.replayItem.title) + " ")]), e._v(" "), n("div", {
                staticClass: "lr-replay-visitcount"
            }, [e._v(e._s(e._f("shortNum")(e.replayItem.viewCount)) + "观看")])])])])
        },
        staticRenderFns: [function() {
            var e = this,
                t = e.$createElement,
                r = e._self._c || t;
            return r("div", {
                staticClass: "lr-replay-play-mask"
            }, [r("img", {
                staticClass: "lr-replay-play",
                attrs: {
                    src: n(37)
                }
            })])
        }]
    }
}, function(e, t) {
    e.exports = function() {
        var e = window.CDN_URL["play.png"];
        return /data:image\/.*;base64/.test(e) ? e : lib.img({
            q: ["q90", "q75"],
            sharpen: "s150"
        }).getNewUrl(e)
    }()
}, function(e, t, n) {
    n(39);
    var r = n(20)(n(42), n(43), "data-v-2e5b3355", null);
    e.exports = r.exports
}, function(e, t, n) {
    var r = n(40);
    "string" == typeof r && (r = [[e.id, r, ""]]), r.locals && (e.exports = r.locals);
    n(18)("6a073c7a", r, !0)
}, function(e, t, n) {
    (e.exports = n(11)()).push([e.id, ".lr-morelive-item[data-v-2e5b3355]{position:relative;display:inline-block;width:282px;height:282px;font-size:14px;color:#fff;text-align:left;margin:6px}.lr-morelive-anchor[data-v-2e5b3355],.lr-morelive-info[data-v-2e5b3355]{position:absolute;left:12px;z-index:2}.lr-morelive-anchor[data-v-2e5b3355]{top:6px}.lr-morelive-anchor .lr-morelive-avatar[data-v-2e5b3355]{position:relative;height:42px;width:42px;margin-right:10px;border-radius:21px}.lr-morelive-avatar .lr-morelive-v[data-v-2e5b3355]{left:auto;top:auto;height:12px;width:12px;background-image:url(" + n(41) + ")}.lr-morelive-info[data-v-2e5b3355]{bottom:10px}.lr-morelive-info .lr-morelive-title[data-v-2e5b3355]{margin-bottom:7px;font-size:16px;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;width:16em}.lr-morelive-state .lr-morelive-icon[data-v-2e5b3355]{width:40px;height:17.5px;line-height:17.5px;text-align:center;border-radius:62.5px;font-size:12px;font-style:normal;transform:scale(.8);-webkit-transform:scale(.8);background:#fe2951}.lr-morelive-state .lr-morelive-visitount[data-v-2e5b3355]{font-size:12px}.lr-morelive-mask[data-v-2e5b3355]{position:absolute;left:0;right:0;bottom:0;height:100px;width:100%}.lr-morelive-item-mask[data-v-2e5b3355]{width:100%;height:100%;background:rgba(0,0,0,.2)}.lr-morelive-item:hover .lr-morelive-item-mask[data-v-2e5b3355]{display:none}", ""])
}, function(e, t) {
    e.exports = function() {
        var e = window.CDN_URL["v.png"];
        return /data:image\/.*;base64/.test(e) ? e : lib.img({
            q: ["q90", "q75"],
            sharpen: "s150"
        }).getNewUrl(e)
    }()
}, function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = {
        props: {
            moreItem: {
                type: Object,
                default: function() {
                    return {}
                }
            }
        },
        data: function() {
            var e = "";
            return this.moreItem && (e = "/room/index.htm?feedId=" + this.moreItem.topic), {
                link: e
            }
        }
    }
}, function(e, t, n) {
    e.exports = {
        render: function() {
            var e = this,
                t = e.$createElement,
                r = e._self._c || t;
            return r("a", {
                staticClass: "lr-morelive-item f-inline f-bg-cover lib-img",
                attrs: {
                    href: e.link,
                    "data-size": "600x600",
                    "data-src": e.moreItem.coverImg
                }
            }, [r("img", {
                staticClass: "lr-morelive-mask",
                attrs: {
                    src: n(44)
                }
            }), e._v(" "), r("div", {
                staticClass: "lr-morelive-item-mask"
            }), e._v(" "), r("div", {
                staticClass: "lr-morelive-anchor"
            }, [r("div", {
                staticClass: "lr-morelive-avatar f-bg-cover f-inline lib-img",
                attrs: {
                    "data-size": "100x100",
                    "data-src": e.moreItem.accountDO.headImg
                }
            }, [r("i", {
                staticClass: "lr-morelive-v f-bg-contain f-inline f-pos-cover"
            })]), e._v(" "), r("span", {
                staticClass: "lr-morelive-nick f-inline"
            }, [e._v(e._s(e.moreItem.accountDO.accountNick))])]), e._v(" "), r("div", {
                staticClass: "lr-morelive-info"
            }, [r("div", {
                staticClass: "lr-morelive-title"
            }, [e._v(e._s(e.moreItem.title))]), e._v(" "), r("div", {
                staticClass: "lr-morelive-state"
            }, [r("i", {
                staticClass: "lr-morelive-icon f-inline"
            }, [e._v("直播")]), e._v(" "), r("span", {
                staticClass: "lr-morelive-visitount"
            }, [e._v(e._s(e.moreItem.viewCount) + "观看")])])])])
        },
        staticRenderFns: []
    }
}, function(e, t) {
    e.exports = function() {
        var e = window.CDN_URL["mask.png"];
        return /data:image\/.*;base64/.test(e) ? e : lib.img({
            q: ["q90", "q75"],
            sharpen: "s150"
        }).getNewUrl(e)
    }()
}, function(e, t, n) {
    n(46);
    var r = n(20)(n(48), n(209), null, null);
    e.exports = r.exports
}, function(e, t, n) {
    var r = n(47);
    "string" == typeof r && (r = [[e.id, r, ""]]), r.locals && (e.exports = r.locals);
    n(18)("562ed0df", r, !0)
}, function(e, t, n) {
    (e.exports = n(11)()).push([e.id, "#J_lr-layout-vertical .lr-anchor-wrapper,#J_lr-layout-vertical .lr-online-list{float:none}#J_lr-layout-vertical .video-player-wrapper{height:710px}#J_lr-layout-vertical .lr-player-wrapper.lr-replay-wrapper{margin-left:208px}.lr-player-movement{position:relative;overflow:hidden}.lr-blur-cover{position:absolute;left:0;top:0;background-size:cover;width:100%;height:100%;-webkit-filter:blur(15px)}#J_lr-layout-vertical .lr-movement-wrapper{width:415px}#J_lr-layout-vertical{display:table;background:#f8f8f8}#J_lr-layout-vertical .lr-col-item{display:table-cell;vertical-align:top;z-index:1;position:relative}#J_room-container .lr-item-wrapper{width:380px}#J_lr-layout-vertical .lr-reco-item{background:#fff}#J_lr-layout-vertical .lr-reco-item-list{overflow:hidden}#J_lr-layout-vertical .lr-reco-item-li{float:left;margin-left:4px}#J_lr-layout-vertical .lr-reco-item-pic{position:relative;height:120px;width:120px}#J_lr-layout-vertical .lr-reco-item-pic:hover{opacity:.8}#J_lr-layout-vertical .lr-reco-icon{position:absolute;top:6px;right:4px;height:16px;width:28px;background:#ff2851;border-radius:2px;text-align:center;font-size:12.5px;color:#fff;line-height:18px;-webkit-transform:scale(.8);transform:scale(.8)}#J_lr-layout-vertical .lr-reco-price{padding:6px 0 12px}#J_lr-layout-vertical .lr-reco-price>i,#J_lr-layout-vertical .lr-reco-price>span{font-size:12px;color:#ff2851;font-style:normal}#J_lr-layout-vertical .lr-reco-price>span{font-weight:700;-webkit-font-smoothing:auto}#J_lr-layout-vertical .lr-all-item{margin-top:3px;position:relative;background:#fff}#J_lr-layout-vertical .lr-all-item .live-title{border-bottom:1px solid #e7e7e7}.lr-no-item{color:#999;height:160px;line-height:160px;text-align:center}#J_lr-layout-vertical .live-title-txt-small,.lr-no-item{font-size:14px}#J_lr-layout-vertical .live-title{padding:9px 0}#J_lr-layout-vertical .lr-all-item .lr-no-item{height:505px}", ""])
}, function(e, t, n) {
    "use strict";
    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = r(n(49)),
        i = r(n(187)),
        a = r(n(192)),
        s = r(n(197)),
        l = r(n(122)),
        c = r(n(126));
    t.default = {
        components: {
            lrHeader: i.default,
            lrVideoPanel: o.default,
            lrItem: a.default,
            lrFeed: s.default
        },
        props: {
            isReplay: {
                type: Boolean,
                default: !1
            }
        },
        data: function() {
            return {
                enableScroll: !1,
                imgHelper: lib.img()
            }
        },
        store: l.default,
        vuex: {
            getters: {
                msgScope: function(e) {
                    return e.msgScope
                },
                newShare: function(e) {
                    return e.newShare
                },
                video: function(e) {
                    return e.video
                },
                itemList: function(e) {
                    return e.itemList
                },
                hotList: function(e) {
                    return e.hotList
                }
            },
            actions: c.default
        },
        computed: {
            showMoreView: function() {
                return !this.enableScroll && this.itemCount > 4
            },
            itemCount: function() {
                return this.itemList.reduce(function(e, t) {
                    return e + t.goodsList.length
                }, 0)
            }
        },
        methods: {
            activeScroll: function() {
                var e = this;
                this.enableScroll = !0, this.$refs.itemlist.scrollTop = 509, this.$refs.itemlist.addEventListener("scroll", function() {
                    e.imgHelper.fireLazyload()
                })
            }
        }
    }
}, function(e, t, n) {
    n(50);
    var r = n(20)(n(52), n(186), "data-v-6bc197e8", null);
    e.exports = r.exports
}, function(e, t, n) {
    var r = n(51);
    "string" == typeof r && (r = [[e.id, r, ""]]), r.locals && (e.exports = r.locals);
    n(18)("26865885", r, !0)
}, function(e, t, n) {
    (e.exports = n(11)()).push([e.id, '#J_video-panel[data-v-6bc197e8]{position:relative;overflow:hidden}#J_video-panel .video-panel-wrapper[data-v-6bc197e8]{padding:0 13px;height:64px}.lr-video-cover[data-v-6bc197e8]{position:absolute;top:0;width:100%;height:100%;z-index:10000}.video-panel-wrapper .video-panel-modal[data-v-6bc197e8]{z-index:1;background:linear-gradient(0deg,transparent,#000);opacity:.8;filter:alpha(opacity=80);filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=80);-ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=80)"}.video-panel-wrapper .lr-anchor-wrapper[data-v-6bc197e8]{position:relative;z-index:2;float:left;margin-top:12px}.lr-anchor-wrapper .lr-anchor-avatar[data-v-6bc197e8]{height:40px;width:40px;border-radius:20px}.lr-anchor-wrapper .lr-anchor-info[data-v-6bc197e8]{margin-left:5px}.lr-anchor-wrapper .lr-anchor-info[data-v-6bc197e8],.lr-anchor-wrapper .lr-online-list[data-v-6bc197e8]{line-height:1;font-size:0}.lr-anchor-info .lr-anchor-nick[data-v-6bc197e8]{margin-bottom:4px;font-size:14px;color:#fff;line-height:1;white-space:nowrap;width:10em;overflow:hidden;text-overflow:ellipsis}.lr-anchor-info .lr-anchor-location[data-v-6bc197e8]{font-size:12px;color:#fff}.lr-anchor-info .lr-anchor-tbicon[data-v-6bc197e8]{margin-left:2px;height:13px;vertical-align:-4px;width:45px;background-image:url(//gw.alicdn.com/mt/TB1Ox6pNpXXXXXUXXXXXXXXXXXX-100-30.png);background-size:45px auto}.lr-anchor-wrapper .lr-anchor-follow[data-v-6bc197e8]{line-height:1}.lr-follow-wrapper[data-v-6bc197e8]{font-size:0;margin-left:25px}.lr-follow-wrapper .lr-follow-btn[data-v-6bc197e8],.lr-follow-wrapper .lr-follow-count[data-v-6bc197e8]{width:60px;height:24px;color:#fff;font-size:12px;line-height:24px;text-align:center}.lr-follow-wrapper .lr-follow-btn[data-v-6bc197e8]{background:rgba(255,40,81,.5);*background:#ff2851}.lr-follow-wrapper .lr-follow-count[data-v-6bc197e8]{background:rgba(0,0,0,.3);*background:#eee}.lr-follow-wrapper .lr-follow-btn[data-v-6bc197e8]:hover{background:rgba(255,40,81,.7);*background:#ff002f}#J_video-panel .lr-has-follow .lr-follow-btn[data-v-6bc197e8]{color:#5f646e;background:hsla(0,0%,100%,.4);*background:#ccc;border-radius:2px}#J_video-panel .lr-has-follow .lr-follow-count[data-v-6bc197e8]{display:none}.lr-anchor-follow .lr-set-calling[data-v-6bc197e8]{margin-left:3px;height:24px;width:24px;padding:4px;font-size:16px;line-height:24px;text-align:center;color:#fff;background:rgba(255,40,81,.5);*background:#ff2851;border-radius:2px}.lr-anchor-follow .lr-set-calling[data-v-6bc197e8]:hover{background:rgba(255,40,81,.7)}#J_video-panel .lr-set-calling-active[data-v-6bc197e8]{color:#5f646e;background:hsla(0,0%,100%,.4);*background:#ccc}.video-panel-wrapper .lr-online-list[data-v-6bc197e8]{float:right;margin-top:12px}.lr-online-list .lr-online-avatar[data-v-6bc197e8]{position:relative;z-index:2;margin-right:6px;height:33px;width:33px;border-radius:50%}.lr-online-list .lr-online-count[data-v-6bc197e8]{position:relative;z-index:2;margin-left:6px;padding:0 10px;height:33px;font-size:12px;line-height:36px;text-align:center;color:#fff}.lr-online-count .lr-online-count-modal[data-v-6bc197e8]{border-radius:100px;opacity:.3;filter:alpha(opacity=30);filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=30);-ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=30)";background:#000}.lr-online-count>b[data-v-6bc197e8],.lr-online-count>span[data-v-6bc197e8]{position:relative;z-index:2}.lr-online-count>b[data-v-6bc197e8]{margin-right:2px;font-weight:400}.prism-player[data-v-6bc197e8]{width:100%;height:100%}.video-player-wrapper[data-v-6bc197e8]{position:relative;overflow:hidden}.lr-video-err-mask[data-v-6bc197e8]{position:absolute;left:0;top:0;width:100%;height:100%;z-index:1000;color:#fff;background:#051b28;text-align:center;font-size:16px;padding-top:317px}.lr-replay-btn[data-v-6bc197e8]{border:1px solid #fff;border-radius:2px;width:118px;height:34px;text-align:center;line-height:34px;display:inline-block;margin-top:22px;cursor:pointer}.lr-live-video[data-v-6bc197e8]{height:775px}.lr-video-horizontal.lr-live-video[data-v-6bc197e8]{height:500px}.lr-player-console[data-v-6bc197e8]{position:absolute;top:680px;width:100%;height:30px;line-height:30px;background:rgba(0,0,0,.5);color:#fff}#J_lr-layout-horizontal .lr-player-console[data-v-6bc197e8]{top:420px}.icon.replay-icon[data-v-6bc197e8]{font-size:22px;margin-left:10px;cursor:pointer;margin-top:-3px}.lr-player-console .current-level-span[data-v-6bc197e8]{padding:2px 8px;border-radius:2px;background:#000;float:right;height:20px;line-height:20px;margin-top:3px;margin-right:10px;color:#fff;cursor:pointer}.lr-player-console .lv-urllist[data-v-6bc197e8]{position:absolute;bottom:30px;right:10px;width:40px;text-align:center;background:#000}.lr-player-console .lv-urllist li[data-v-6bc197e8]{cursor:pointer}.lr-player-console .lv-urllist li.current-lv[data-v-6bc197e8]{background:hsla(0,0%,100%,.2)}.lr-player-console .reload-tip[data-v-6bc197e8]{position:absolute;bottom:32px;left:0;padding:0 5px;background:rgba(0,0,0,.6);border-radius:2px}', ""])
}, function(e, t, n) {
    "use strict";
    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = r(n(53)),
        i = r(n(122)),
        a = r(n(126)),
        s = r(n(172)),
        l = r(n(185));
    t.default = {
        components: {
            lrInteractiveLayer: s.default
        },
        data: function() {
            var e = void 0;
            return e = this.video.liveUrlList ? this.video.liveUrlList.length > 1 ? this.video.liveUrlList[1] : this.video.liveUrlList[0] : this.video.liveUrlHls, {
                layerMessage: {},
                myPlayerLive: null,
                cachedAudienceList: {
                    total: this.video.viewCount,
                    list: []
                },
                audienceList: {
                    total: this.video.viewCount,
                    list: []
                },
                videoErr: !1,
                activeLv: !1,
                currentLv: e,
                reloadHover: !1,
                coverShow: !0,
                sourceTimeout: !1
            }
        },
        props: {
            isReplay: {
                type: Boolean,
                default: function() {
                    return !1
                }
            },
            isHorizontal: {
                type: Boolean,
                default: function() {
                    return !1
                }
            }
        },
        computed: {
            hasFollow: function() {
                return o.default.strBoolean(this.video.broadCaster.isFollow)
            },
            hasSubscribe: function() {
                return !0 === this.video.broadCaster.subscribe
            },
            isLive: function() {
                return !this.isReplay && 0 == this.video.status
            },
            isSafari: function() {
                return -1 != navigator.userAgent.indexOf("Safari") && -1 == navigator.userAgent.indexOf("Chrome")
            },
            currentUrl: function() {
                var e = "";
                return this.isReplay ? e = this.video.replayUrl : this.isLive && (e = this.isSafari ? this.currentLv.hlsUrl : this.currentLv.flvUrl), e.replace("http:", "")
            },
            useFlvPlayer: function() {
                return !0
            }
        },
        store: i.default,
        vuex: {
            getters: {
                msgScope: function(e) {
                    return e.msgScope
                },
                video: function(e) {
                    return e.video
                }
            },
            actions: a.default
        },
        methods: {
            follow: function() {
                var e = this;
                this.followPub(function(t) {
                    e.showToast(t)
                })
            },
            subscribe: function(e) {
                this.subscribePub(e)
            },
            initVideo: function() {
                var e = this,
                    t = this;
                if ("" !== this.currentUrl)
                    if (this.myPlayerLive)
                        this.videoReload();
                    else {
                        var n = this.isHorizontal ? "450px" : "710px",
                            r = document.getElementById("J_Player");
                        try {
                            t.myPlayerLive = new l.default({
                                container: "#J_Player",
                                url: t.currentUrl,
                                live: this.isLive,
                                autoplay: !0,
                                controls: this.isReplay,
                                from: "tblive-pc",
                                timeout: 8e3,
                                flvOptions: {
                                    isLive: !0,
                                    stashInitialSize: 512
                                }
                            }), r.style.height = n, setTimeout(function() {
                                e.coverShow = !1
                            }, 1e3), this.$nextTick(function() {
                                lib.img()
                            })
                        } catch (e) {
                            console.log(e)
                        }
                    }
                else
                    console.warn("没有视频源地址")
            },
            initMsg: function() {
                var e = this;
                this.msgScope.requestUserList(0, 6).then(function(t) {
                    e.audienceList.list = e.cachedAudienceList.list = t.data, e.audienceList.list.length > 6 && (e.audienceList.list.length = 6)
                }), this.msgScope.on("liveJoin", function(t) {
                    var n = t.data;
                    e.cachedAudienceList.total = n.pageViewCount, e.cachedAudienceList.list = n.userList.concat(e.cachedAudienceList.list), e.cachedAudienceList.list.length > 6 && (e.cachedAudienceList.list.length = 6)
                }), this.msgScope.on("liveInteractive", function(t) {
                    e.layerMessage = t.data
                })
            },
            refresh: function() {
                window.location.reload()
            },
            replay: function() {
                this.isLive = !1, this.isReplay = !0, this.myPlayerLive = null
            },
            updateAudienceList: function() {
                this.audienceList.total = this.cachedAudienceList.total, this.audienceList.list = this.cachedAudienceList.list
            },
            setLevel: function(e) {
                this.currentLv = e, this.activeLv = !1, this.videoReload()
            },
            avatar: function(e) {
                return e ? "//wwc.alicdn.com/avatar/getAvatar.do?userId=" + e.userId + "&width=160&height=160&type=sns" : ""
            },
            videoFilter: function(e) {
                var t = e.indexOf("tbflive.alicdn.com"),
                    n = e.indexOf("tvideo.alicdn.com");
                return t > 0 || n > 0 ? e.replace("http", "https") : e
            },
            updateAudience: function() {
                var e = this;
                setInterval(e.updateAudienceList, 1e4)
            },
            videoReload: function() {
                this.myPlayerLive.reload(this.currentUrl)
            },
            reloadTipActivate: function(e) {
                this.reloadHover = e
            },
            selectQuality: function() {
                this.activeLv = !this.activeLv
            }
        },
        mounted: function() {
            var e = this;
            this.initVideo(), this.updateAudience(), setTimeout(function() {
                e.coverShow && (e.sourceTimeout = !0, e.coverShow = !1)
            }, 5e3), this.initMsg()
        },
        watch: {
            msgScope: function() {},
            "audienceList.list": function() {
                this.$nextTick(function() {
                    lib.img()
                })
            },
            "video.status": function(e, t) {
                0 === e ? this.initVideo() : 3 === e && (this.myPlayerLive = null)
            },
            isReplay: function(e, t) {
                !1 === t && !0 === e && this.initVideo()
            }
        }
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }(n(54)).default.IO;
    t.default = {
        jsonpID: 0,
        getParams: function(e) {
            var t = [];
            for (var n in e)
                t.push(n + "=" + e[n]), t.push("&");
            return t.splice(0, t.length - 1).join("")
        },
        ajax: function(e) {
            return new Promise(function(t, n) {
                var o = new r({
                    url: e.url.split("?")[0],
                    dataType: "json",
                    data: e.data,
                    success: function(e) {}
                });
                o.done(function(e) {
                    t(e[0])
                }), o.fail(function(e) {
                    n(e[0])
                })
            })
        },
        jsonp: function(e) {
            var t = "jsonp" + ++this.jsonpID,
                n = document.createElement("script"),
                r = {
                    abort: function() {
                        n.remove(), t in window && (window[t] = function() {})
                    }
                },
                o = void 0;
            e.error && (n.onerror = function() {
                r.abort(), e.error()
            }), window[t] = function(i) {
                e.success(i, r, e), clearTimeout(o), n.remove(), delete window[t]
            };
            var i = e.url.split("?")[0],
                a = e.url.split("?")[1] ? "&" + e.url.split("?")[1] : "";
            return e.noCallback ? n.src = i + "?" + a + "&" + this.getParams(e.data) : n.src = i + "?callback=" + t + a + "&" + this.getParams(e.data), document.querySelector("head").appendChild(n), e.timeout > 0 && (o = setTimeout(function() {
                r.abort()
            }, e.timeout)), r
        },
        replaceHost: function(e) {
            return (/daily/.test(location.hostname) ? "//img01.daily.taobao.net/tfscom/" : "//gw.alicdn.com/tfscom/") + e
        },
        filteHtml: function(e) {
            return e.replace(/<\/?[^>]*>/g, "").replace(/[ | ]*\n/g, "\n").replace(/\n[\s| | ]*\r/g, "\n").replace(/\s+/g, "").replace(/&nbsp;/gi, "")
        },
        replaceHtml: function(e) {
            return e.replace("<", "&lt;").replace(">", "&gt")
        },
        replaceLtAndGt: function(e) {
            return e.replace("&lt;", "<").replace("&gt", ">")
        },
        strBoolean: function(e) {
            return "true" === e || !0 === e
        },
        cachedProp: function(e, t) {}
    }
}, function(e, t, n) {
    e.exports = n(55)
}, function(e, t, n) {
    function r(e) {
        return function(t) {
            return {}.toString.call(t) == "[object " + e + "]"
        }
    }
    function o(e) {
        var t = e.dataType;
        h(t) && (/script/.test(t.join("")) ? e.dataType = "jsonp" : e.dataType = "json")
    }
    function i(e, t, n) {
        var r = 0,
            o = e.length;
        if (n && (t = t.bind(n)), o === +o)
            for (; r < o && !1 !== t(e[r], r, e); r++)
                ;
        else
            for (r in e)
                if (e.hasOwnProperty(r) && !1 === t(e[r], r, e))
                    break
    }
    function a(e) {
        for (var t, n, r = [].slice.call(arguments), o = r.length, i = 1; i < o; i++) {
            t = r[i];
            for (n in t)
                t.hasOwnProperty(n) && (e[n] = t[n])
        }
        return e
    }
    var s = n(56),
        l = n(57),
        c = n(61),
        u = n(80).Defer,
        d = [].slice,
        f = u.prototype.resolve,
        p = u.prototype.reject,
        h = (r("String"), Array.isArray || r("Array")),
        v = l.extend({
            initialize: function(e) {
                var t = this;
                s.on("event:cleanHijackQueue@sufei", function() {
                    for (var e, n, r, o = [t.currentRequest].concat(t.queue), i = 0; i < o.length; i++)
                        o[i] && (e = (n = o[i].sufeiData) && n.defer, r = n && n.response, e && p.apply(e, [r]))
                }), v.superclass.initialize.call(t, e), t.setup()
            },
            setup: function() {
                var e = this;
                c.on("start", function(t) {
                    var n = t.io && t.io.config || {},
                        r = t.io,
                        o = r && r.defer,
                        i = n.dataType;
                    if (h(i) && (i = i.join("")), /json/.test(i)) {
                        var s = n.success;
                        n.success = function(t, r, i) {
                            var l = e.validate(t);
                            l.pass ? (s && s.apply(n.context || n, arguments), n.sufeiData && n.sufeiData.defer && f.apply(n.sufeiData.defer, [d.call(arguments)])) : e.run({
                                url: t.url,
                                config: a({}, n, {
                                    sufeiData: {
                                        defer: o,
                                        response: d.call(arguments)
                                    }
                                }),
                                im: l.immediate
                            })
                        }, o.resolve = function(t) {
                            e.validate(t && t[0]).pass && f.apply(o, [t])
                        }
                    }
                })
            },
            getValidateURI: function(e) {
                var t = this;
                new c({
                    url: e,
                    dataType: "jsonp",
                    sufei: !0,
                    success: function(e) {
                        t.status = 200, s.fire("event:showDialog@sufei", e.url)
                    }
                })
            },
            resendRequest: function(e) {
                var t = this;
                c && (i([t.currentRequest].concat(t.queue), function(n, r) {
                    o(n), n.url = t.addQueryToken(n.url, e), new c(n)
                }), t.reset())
            }
        }),
        m = n(121);
    m.version = "0.1.0", m.style = "//g.alicdn.com/sd/sufei/0.1.0/" + m.style, new v(m), e.exports = {
        IO: c
    }
}, function(e, t) {
    var n = {},
        r = {};
    n.on = function(e, t) {
        return (r[e] || (r[e] = [])).push(t), n
    }, n.off = function(e, t) {
        if (!e && !t)
            return r = {}, n;
        var o = r[e];
        if (o)
            if (t)
                for (var i = o.length - 1; i >= 0; i--)
                    o[i] === t && o.splice(i, 1);
            else
                delete r[e];
        return n
    }, n.fire = function(e, t) {
        var o = r[e];
        if (o)
            for (var i = 0, a = (o = o.slice()).length; i < a; i++)
                o[i](t);
        return n
    }, e.exports = n
}, function(e, t, n) {
    function r() {
        var e = l.createElement("b");
        return e.innerHTML = "\x3c!--[if lte IE 7]><i></i><![endif]--\x3e", 1 === e.getElementsByTagName("i").length
    }
    function o(e) {
        return v ? v(e) : h(e)
    }
    function i(e, t) {
        function n() {
            r.onload = r.onreadystatechange = null, r = null, t()
        }
        e || t && t();
        var r = l.createElement("link");
        r.charset = "utf-8", r.rel = "stylesheet", r.href = e;
        var o = "onload" in r;
        g && !o && setTimeout(function() {
            a(r, t)
        }, 1), o ? r.onload = n : r.onreadystatechange = function() {
            /loaded|complete/.test(r.readyState) && n()
        }, c.appendChild(r), l.createStyleSheet && l.createStyleSheet(e)
    }
    function a(e, t) {
        var n,
            r = e.sheet;
        if (g)
            r && (n = !0);
        else if (r)
            try {
                r.cssRules && (n = !0)
            } catch (e) {
                "NS_ERROR_DOM_SECURITY_ERR" === e.name && (n = !0)
            }
        setTimeout(function() {
            n ? t() : a(e, t)
        }, 20)
    }
    var s = window,
        l = document,
        c = l.head || l.getElementsByTagName("head")[0] || l.documentElement,
        u = s.navigator.userAgent,
        d = n(56),
        f = n(58),
        p = n(59),
        h = n(60),
        v = s.JSON && JSON.parse,
        m = function() {},
        g = +u.replace(/.*(?:AppleWebKit|AndroidWebKit)\/?(\d+).*/i, "$1") < 536,
        y = /iphone|ipad|ipod/.test(u.toLowerCase()),
        b = "rgv587_flag";
    e.exports = f.create({
        initialize: function(e) {
            var t = this;
            e = e || {}, t.app = e.app || "", t.version = e.version || "", t.style = e.style || "", t.dialog = null, t.reset(), t.listen()
        },
        reset: function() {
            var e = this;
            e.currentRequest = null, e.queue = [], e.status = 0
        },
        listen: function() {
            var e = this;
            d.on("event:cleanHijackQueue@sufei", function() {
                e.reset()
            }), d.on("event:showDialog@sufei", function(t) {
                e.dialog ? e.show(t) : i(e.style, function() {
                    e.render(t), e.show()
                })
            }), d.on("msg:validateSuccess@sufei", function(t) {
                e.resendRequest(t), e.hide(), p.send({
                    type: "msg:resetCheckCode@sufei",
                    content: ""
                })
            })
        },
        initMessenger: function(e) {
            var t = this;
            p.initListener({
                currentWin: s,
                originWin: e,
                msgTransfer: "fromFrame"
            }), p.register("msg:validateSuccess@sufei", function(e) {
                d.fire("msg:validateSuccess@sufei", e)
            }), p.register("child", function(e) {
                e = o(decodeURIComponent(e)), t.validate(e).pass ? e.queryToken ? d.fire("msg:validateSuccess@sufei", e.queryToken) : t.hide() : d.fire("event:showDialog@sufei", e.url)
            })
        },
        show: function(e) {
            var t = this;
            e && t.frame.src != e && (t.frame.src = e), t.dialog && (t.dialog.style.display = "block"), p.send({
                type: "msg:refreshCheckCode@sufei",
                content: ""
            }), d.fire("event:dialogShow@sufei")
        },
        hide: function() {
            d.fire("event:cleanHijackQueue@sufei"), this.dialog && (this.dialog.style.display = "none"), d.fire("event:dialogHide@sufei")
        },
        render: function(e) {
            var t = this,
                n = l.createElement("div");
            n.style.display = "none", t.app ? n.className = "sufei-dialog sufei-dialog-" + t.app : n.className = "sufei-dialog", n.innerHTML = ['<div class="sufei-dialog-mask">', r() ? '<iframe frameborder="none" src="javascript:\'\'"></iframe>' : "", "</div>", '<div class="sufei-dialog-content">', '<iframe id="sufei-dialog-content" frameborder="none" src="' + e + '"></iframe>', '<div class="sufei-dialog-close" id="sufei-dialog-close">关闭</div>', "</div>"].join(""), l.body.appendChild(n);
            var o = l.getElementById("sufei-dialog-close");
            o.addEventListener ? o.addEventListener("click", function() {
                t.hide()
            }, !1) : o.attachEvent("onclick", function() {
                return t.hide(), !1
            }), t.dialog = n, t.frame = l.getElementById("sufei-dialog-content"), t.initMessenger(t.frame.contentWindow), y && t.iosFix(), t.render = function() {}
        },
        iosFix: function() {
            var e = l.body,
                t = 0,
                n = this.dialog;
            e.classList.add("sufei-ios-fix-fixed"), d.on("event:dialogShow@sufei", function() {
                t = e.scrollTop, e.scrollTop = 0, n.style.height = Math.max(window.innerHeight, e.scrollHeight) + "px", setTimeout(function() {
                    e.scrollTop = 0
                }, 200)
            }), d.on("event:dialogHide@sufei", function() {
                e.scrollTop = t
            })
        },
        validate: function(e) {
            if ("string" == typeof e)
                try {
                    e = o(e)
                } catch (e) {
                    return {
                        pass: !0
                    }
                }
            return !e || "sm" !== e[b] && "sm" !== e[b + "0"] ? {
                pass: !0
            } : {
                result: e,
                pass: !1,
                immediate: "sm" === e[b]
            }
        },
        run: function(e) {
            var t = this;
            t.status > 0 && !e.config.sufei ? t.queue.push(e.config) : e.im ? (t.currentRequest = t.currentRequest || e.config, t.status = 200, d.fire("event:showDialog@sufei", e.url)) : (t.currentRequest = e.config, t.status = 100, t.getValidateURI(e.url))
        },
        setup: m,
        getValidateURI: m,
        resendRequest: m,
        addQueryToken: function(e, t) {
            return e += /\?/.test(e) ? "&" + t : "?" + t
        },
        parseJSON: o
    })
}, function(e, t) {
    function n(e) {
        if (!(this instanceof n) && u(e))
            return o(e)
    }
    function r(e) {
        var t,
            r;
        for (t in e)
            r = e[t], n.Mutators.hasOwnProperty(t) ? n.Mutators[t].call(this, r) : this.prototype[t] = r
    }
    function o(e) {
        return e.extend = n.extend, e.implement = r, e
    }
    function i() {}
    function a(e, t, n) {
        for (var r in t)
            if (t.hasOwnProperty(r)) {
                if (n && -1 === d(n, r))
                    continue;
                "prototype" !== r && (e[r] = t[r])
            }
    }
    e.exports = n, n.create = function(e, t) {
        function i() {
            e.apply(this, arguments), this.constructor === i && this.initialize && this.initialize.apply(this, arguments)
        }
        return u(e) || (t = e, e = null), t || (t = {}), e || (e = t.Extends || n), t.Extends = e, e !== n && a(i, e, e.StaticsWhiteList), r.call(i, t), o(i)
    }, n.extend = function(e) {
        return e || (e = {}), e.Extends = this, n.create(e)
    }, n.Mutators = {
        Extends: function(e) {
            var t = this.prototype,
                n = s(e.prototype);
            a(n, t), n.constructor = this, this.prototype = n, this.superclass = e.prototype
        },
        Implements: function(e) {
            c(e) || (e = [e]);
            for (var t, n = this.prototype; t = e.shift();)
                a(n, t.prototype || t)
        },
        Statics: function(e) {
            a(this, e)
        }
    };
    var s = Object.__proto__ ? function(e) {
            return {
                __proto__: e
            }
        } : function(e) {
            return i.prototype = e, new i
        },
        l = Object.prototype.toString,
        c = Array.isArray || function(e) {
            return "[object Array]" === l.call(e)
        },
        u = function(e) {
            return "[object Function]" === l.call(e)
        },
        d = Array.prototype.indexOf ? function(e, t) {
            return e.indexOf(t)
        } : function(e, t) {
            for (var n = 0, r = e.length; n < r; n++)
                if (e[n] === t)
                    return n;
            return -1
        }
}, function(e, t, n) {
    function r(e) {
        try {
            var t,
                n,
                r = e.data.split(s);
            r.length > 1 ? (t = r[0], n = r[1]) : (t = (r = o(r[0])).type, n = r.content);
            for (var i = 0, a = d.length; i < a; i++)
                d[i].event === t && d[i].callback(n)
        } catch (e) {}
    }
    function o(e) {
        return a ? a(e) : i(e)
    }
    var i = n(60),
        a = window.JSON && JSON.parse,
        s = "@=_=@",
        l = null,
        c = null,
        u = null,
        d = [],
        f = {
            uid: 0,
            hid: -1,
            q: [],
            tm: 0,
            postMessage: function(e, t) {
                var n = ++f.uid,
                    r = f.q,
                    o = {
                        name: +new Date + "" + n + "^" + document.domain + "&" + t,
                        uid: n,
                        target: e
                    };
                r.push(o), f.tm || (f.tm = setInterval(function() {
                    var e = f.q;
                    if (!(0 === e.length || e[0].uid <= f.hid)) {
                        var t = e[0];
                        f.hid = t.uid, t.target.name = t.name
                    }
                }, 10))
            },
            ListenerMessage: function(e, t) {
                var n = "",
                    r = /^(\d+?)\^(.+?)&(.*?)$/;
                setInterval(function() {
                    if (!e)
                        return !1;
                    var o = e.name;
                    if (o !== n) {
                        f.q.shift(), n = o;
                        var i = r.exec(o);
                        if (!i)
                            return;
                        t && t({
                            origin: i[2],
                            data: i[3]
                        })
                    }
                }, 10)
            }
        };
    window.SufeiMessenger = e.exports = {
        initListener: function(e) {
            l = e.currentWin, c = e.originWin, u = e.msgTransfer, l && c && u && (l.postMessage ? l.addEventListener ? l.addEventListener("message", r, !1) : l.attachEvent && l.attachEvent("onmessage", r) : "fromFrame" == u ? f.ListenerMessage(c, r) : f.ListenerMessage(l, r))
        },
        register: function(e, t) {
            d.push({
                event: e,
                callback: t
            })
        },
        send: function(e) {
            var t = e.type + s + e.content;
            l && c && u && (c.postMessage ? c.postMessage(t, "*") : "fromFrame" == u ? f.postMessage(c, t) : f.postMessage(l, t, "*"))
        }
    }
}, function(e, t) {
    e.exports = function() {
        "use strict";
        var e,
            t,
            n,
            r,
            o = {
                '"': '"',
                "\\": "\\",
                "/": "/",
                b: "\b",
                f: "\f",
                n: "\n",
                r: "\r",
                t: "\t"
            },
            i = function(t) {
                throw {
                    name: "SyntaxError",
                    message: t,
                    at: e,
                    text: n
                }
            },
            a = function(r) {
                return r && r !== t && i("Expected '" + r + "' instead of '" + t + "'"), t = n.charAt(e), e += 1, t
            },
            s = function() {
                var e,
                    n = "";
                for ("-" === t && (n = "-", a("-")); t >= "0" && t <= "9";)
                    n += t, a();
                if ("." === t)
                    for (n += "."; a() && t >= "0" && t <= "9";)
                        n += t;
                if ("e" === t || "E" === t)
                    for (n += t, a(), "-" !== t && "+" !== t || (n += t, a()); t >= "0" && t <= "9";)
                        n += t, a();
                if (e = +n, isFinite(e))
                    return e;
                i("Bad number")
            },
            l = function() {
                var e,
                    n,
                    r,
                    s = "";
                if ('"' === t)
                    for (; a();) {
                        if ('"' === t)
                            return a(), s;
                        if ("\\" === t)
                            if (a(), "u" === t) {
                                for (r = 0, n = 0; n < 4 && (e = parseInt(a(), 16), isFinite(e)); n += 1)
                                    r = 16 * r + e;
                                s += String.fromCharCode(r)
                            } else {
                                if ("string" != typeof o[t])
                                    break;
                                s += o[t]
                            }
                        else
                            s += t
                    }
                i("Bad string")
            },
            c = function() {
                for (; t && t <= " ";)
                    a()
            },
            u = function() {
                switch (t) {
                case "t":
                    return a("t"), a("r"), a("u"), a("e"), !0;
                case "f":
                    return a("f"), a("a"), a("l"), a("s"), a("e"), !1;
                case "n":
                    return a("n"), a("u"), a("l"), a("l"), null
                }
                i("Unexpected '" + t + "'")
            },
            d = function() {
                var e = [];
                if ("[" === t) {
                    if (a("["), c(), "]" === t)
                        return a("]"), e;
                    for (; t;) {
                        if (e.push(r()), c(), "]" === t)
                            return a("]"), e;
                        a(","), c()
                    }
                }
                i("Bad array")
            },
            f = function() {
                var e,
                    n = {};
                if ("{" === t) {
                    if (a("{"), c(), "}" === t)
                        return a("}"), n;
                    for (; t;) {
                        if (e = l(), c(), a(":"), Object.hasOwnProperty.call(n, e) && i('Duplicate key "' + e + '"'), n[e] = r(), c(), "}" === t)
                            return a("}"), n;
                        a(","), c()
                    }
                }
                i("Bad object")
            };
        return r = function() {
            switch (c(), t) {
            case "{":
                return f();
            case "[":
                return d();
            case '"':
                return l();
            case "-":
                return s();
            default:
                return t >= "0" && t <= "9" ? s() : u()
            }
        }, function(o, a) {
            var s;
            return n = o, e = 0, t = " ", s = r(), c(), t && i("Syntax error"), "function" == typeof a ? function e(t, n) {
                var r,
                    o,
                    i = t[n];
                if (i && "object" == typeof i)
                    for (r in i)
                        Object.prototype.hasOwnProperty.call(i, r) && (void 0 !== (o = e(i, r)) ? i[r] = o : delete i[r]);
                return a.call(t, n, i)
            }({
                "": s
            }, "") : s
        }
    }()
}, function(e, t, n) {
    e.exports = n(62)
}, function(e, t, n) {
    var r = n(63),
        o = n(67);
    n(113), o.mix(r, {
        upload: function(e, t, n, o, i) {
            return "function" == typeof n && (i = o, o = n, n = void 0), r({
                url: e,
                type: "post",
                dataType: i,
                form: t,
                data: n,
                complete: o
            })
        }
    }), e.exports = r
}, function(e, t, n) {
    e.exports = n(64)
}, function(e, t, n) {
    var r = n(65),
        o = n(91);
    n(92), n(110), n(111), n(112), r._util = o, e.exports = r
}, function(e, t, n) {
    function r(e, t, n, r, i) {
        return "function" == typeof t && (r = n, n = t, t = void 0), o({
            type: i || "get",
            url: e,
            data: t,
            complete: n,
            dataType: r
        })
    }
    var o = n(66),
        i = n(67),
        a = n(86);
    i.mix(o, {
        getScript: a,
        get: r,
        post: function(e, t, n, o) {
            return "function" == typeof t && (o = n, n = t, t = void 0), r(e, t, n, o, "post")
        },
        jsonp: function(e, t, n) {
            if (i.isPlainObject(e)) {
                var o = e;
                e = o.url, t = o.data, n = o.success
            } else
                "function" == typeof t && (n = t, t = void 0);
            return r(e, t, n, "jsonp")
        },
        getJSON: function(e, t, n) {
            return "function" == typeof t && (n = t, t = void 0), r(e, t, n, "json")
        }
    }), e.exports = o
}, function(e, t, n) {
    function r(e) {
        var t = e.context;
        delete e.context, (e = i.mix(i.clone(m), e, {
            deep: !0
        })).context = t || e;
        var n,
            r,
            o = e.type,
            s = e.dataType;
        return r = e.uri = l.parse(l.resolve(f, e.url), !0), r.query = {}, "crossDomain" in e || (e.crossDomain = !(r.protocol === p.protocol && r.host === p.host)), o = e.type = o.toUpperCase(), e.hasContent = !d.test(o), e.processData && (n = e.data) && "string" != typeof n && (e.data = a.stringify(n, void 0, void 0, e.serializeArray)), s = e.dataType = i.trim(s || "*").split(c), "cache" in e || !i.inArray(s[0], ["script", "jsonp"]) || (e.cache = !1), e.hasContent || (e.data && i.mix(r.query, a.parse(e.data)), !1 === e.cache && (r.query._ksTS = i.now() + "_" + i.guid())), e
    }
    function o(e) {
        var t = this;
        if (!(t instanceof o))
            return new o(e);
        o.superclass.constructor.call(t), s.Defer(t), t.userConfig = e, e = r(e), i.mix(t, {
            responseData: null,
            config: e || {},
            timeoutTimer: null,
            responseText: null,
            responseXML: null,
            responseHeadersString: "",
            responseHeaders: null,
            requestHeaders: {},
            readyState: 0,
            state: 0,
            statusText: null,
            status: 0,
            transport: null
        });
        var n;
        o.callPreprocessors("start", {
            io: t
        }), o.fire("start", {
            io: t
        }), n = new (v[e.dataType[0]] || v["*"])(t), t.transport = n, e.contentType && t.setRequestHeader("Content-Type", e.contentType);
        var a,
            l = e.dataType[0],
            c = e.timeout,
            u = e.context,
            d = e.headers,
            f = e.accepts;
        t.setRequestHeader("Accept", l && f[l] ? f[l] + ("*" === l ? "" : ", */*; q=0.01") : f["*"]);
        for (a in d)
            t.setRequestHeader(a, d[a]);
        if (e.beforeSend && !1 === e.beforeSend.call(u, t, e))
            return t;
        t.readyState = 1, o.callPreprocessors("send", {
            io: t
        }), o.fire("send", {
            io: t
        }), e.async && c > 0 && (t.timeoutTimer = setTimeout(function() {
            t.abort("timeout")
        }, 1e3 * c));
        try {
            t.state = 1, n.send()
        } catch (e) {
            console.error(e.stack || e), setTimeout(function() {
                throw e
            }, 0), t.state < 2 && t._ioReady(-1, e.message || "send error")
        }
        return t
    }
    var i = n(67),
        a = n(75),
        s = n(80),
        l = n(82),
        c = /\s+/,
        u = function(e) {
            return e
        },
        d = /^(?:GET|HEAD)$/,
        f = window.location.href,
        p = l.parse(f),
        h = /^(?:about|app|app\-storage|.+\-extension|file|widget):$/.test(p.protocol),
        v = {},
        m = {
            type: "GET",
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            async: !0,
            serializeArray: !0,
            processData: !0,
            accepts: {
                xml: "application/xml, text/xml",
                html: "text/html",
                text: "text/plain",
                json: "application/json, text/javascript",
                "*": "*/*"
            },
            converters: {
                text: {
                    json: i.parseJson,
                    html: u,
                    text: u,
                    xml: i.parseXML || u
                }
            },
            headers: {
                "X-Requested-With": "XMLHttpRequest"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            }
        };
    m.converters.html = m.converters.text;
    var g = {},
        y = {};
    i.mix(o, {
        preprocessors: g,
        events: y,
        addPreprocessor: function(e, t) {
            return (g[e] = g[e] || []).push(t), o
        },
        callPreprocessors: function(e, t) {
            for (var n = (g[e] || []).concat(), r = 0, i = n.length; r < i; r++)
                n[r].call(o, t)
        },
        on: function(e, t) {
            return (y[e] = y[e] || []).push(t), o
        },
        detach: function(e, t) {
            if (t) {
                var n = y[e];
                if (n) {
                    var r = i.indexOf(t, n);
                    -1 !== r && n.splice(r, 1)
                }
            } else
                y[e] = []
        },
        fire: function(e, t) {
            var n = (y[e] || []).concat();
            (t = t || {}).type = e, t.target = t.currentTarget = o;
            for (var r = 0, i = n.length; r < i; r++)
                n[r].call(o, t)
        },
        isLocal: h,
        setupConfig: function(e) {
            i.mix(m, e, {
                deep: !0
            })
        },
        setupTransport: function(e, t) {
            v[e] = t
        },
        getTransport: function(e) {
            return v[e]
        },
        getConfig: function() {
            return m
        }
    }), e.exports = o
}, function(e, t, n) {
    e.exports = n(68)
}, function(e, t, n) {
    var r = n(69);
    n(70), n(71), n(72), n(73), n(74), n(77), n(78), n(79), e.exports = r
}, function(e, t) {
    var n = 0;
    e.exports = {
        _debug: "@DEBUG@",
        mix: function(e, t) {
            for (var n in t)
                e[n] = t[n];
            return e
        },
        guid: function(e) {
            return (e || "") + n++
        }
    }
}, function(e, t, n) {
    var r = Array.prototype,
        o = r.indexOf,
        i = r.filter,
        a = r.reduce,
        a = r.reduce,
        s = n(69),
        l = r.map;
    s.mix(s, {
        indexOf: function(e, t, n) {
            return void 0 === n ? o.call(t, e) : o.call(t, e, n)
        },
        inArray: function(e, t) {
            return s.indexOf(e, t) > -1
        },
        filter: function(e, t, n) {
            return i.call(e, t, n || this)
        },
        map: function(e, t, n) {
            return l.call(e, t, n || this)
        },
        reduce: function(e, t, n) {
            return a.call(e, t, n)
        },
        makeArray: function(e) {
            if (null == e)
                return [];
            if (s.isArray(e))
                return e;
            var t = typeof e.length,
                n = typeof e;
            if ("number" !== t || "string" == typeof e.nodeName || null != e && e == e.window || "string" === n || "function" === n && !("item" in e && "number" === t))
                return [e];
            for (var r = [], o = 0, i = e.length; o < i; o++)
                r[o] = e[o];
            return r
        }
    })
}, function(e, t, n) {
    function r(e, t, n) {
        function r() {}
        var o = [].slice,
            i = o.call(arguments, 3),
            a = function() {
                var a = o.call(arguments);
                return t.apply(this instanceof r ? this : n || this, e ? a.concat(i) : i.concat(a))
            };
        return r.prototype = t.prototype, a.prototype = new r, a
    }
    var o = n(69);
    o.mix(o, {
        noop: function() {},
        now: Date.now || function() {
            return +new Date
        },
        later: function(e, t, n, r, i) {
            t = t || 0;
            var a,
                s,
                l = e,
                c = o.makeArray(i);
            return "string" == typeof e && (l = r[e]), a = function() {
                l.apply(r, c)
            }, s = n ? setInterval(a, t) : setTimeout(a, t), {
                id: s,
                interval: n,
                cancel: function() {
                    this.interval ? clearInterval(s) : clearTimeout(s)
                }
            }
        },
        buffer: function(e, t, n) {
            function r() {
                r.stop(), i = o.later(e, t, 0, n || this, arguments)
            }
            if (-1 === (t = t || 150))
                return function() {
                    e.apply(n || this, arguments)
                };
            var i = null;
            return r.stop = function() {
                i && (i.cancel(), i = 0)
            }, r
        },
        bind: r(0, r, null, 0),
        rbind: r(0, r, null, 1)
    })
}, function(e, t, n) {
    var r = n(69),
        o = "undefined" != typeof JSON ? JSON : {};
    r.parseJson = o.parse
}, function(e, t, n) {
    function r(e, t) {
        return "constructor" === e ? c : t
    }
    function o() {}
    function i(e, t) {
        var n;
        return h ? n = h(e) : (o.prototype = e, n = new o), n.constructor = t, n
    }
    function a(e, t, n, r, o, i, a) {
        if (!t || !e)
            return e;
        var l;
        t[d] = e, i.push(t);
        for (var c in t)
            (l = c) !== d && s(l, e, t, n, r, o, i, a);
        return e
    }
    function s(e, t, n, r, o, i, s, l) {
        if (r || !(e in t) || i) {
            var f = t[e],
                p = n[e];
            if (f === p)
                return void (f === c && (t[e] = f));
            if (o && (p = o.call(n, e, p)), i && p && (u.isArray(p) || u.isPlainObject(p)))
                if (l && p[d])
                    t[e] = p[d];
                else {
                    var h = f && (u.isArray(f) || u.isPlainObject(f)) ? f : u.isArray(p) ? [] : {};
                    t[e] = h, a(h, p, r, o, !0, s, l)
                }
            else
                p === c || !r && e in t || (t[e] = p)
        }
    }
    function l(e, t, n, r) {
        var o,
            i,
            a,
            s,
            c = e;
        if (!e)
            return c;
        if (r && e[f])
            return n[e[f]].destination;
        if ("object" == typeof e) {
            var d = e.constructor;
            u.inArray(d, [Boolean, String, Number, Date, RegExp]) ? c = new d(e.valueOf()) : (o = u.isArray(e)) ? c = t ? u.filter(e, t) : e.concat() : (i = u.isPlainObject(e)) && (c = {}), r && (e[f] = s = u.guid("c"), n[s] = {
                destination: c,
                input: e
            })
        }
        if (o)
            for (var p = 0; p < c.length; p++)
                c[p] = l(c[p], t, n, r);
        else if (i)
            for (a in e)
                a === f || t && !1 === t.call(e, e[a], a, e) || (c[a] = l(e[a], t, n, r));
        return c
    }
    var c,
        u = n(69),
        d = "__MIX_CIRCULAR",
        f = "__~ks_cloned",
        p = {}.toString,
        h = Object.create;
    !function(e, t) {
        for (var n in t)
            e[n] = t[n]
    }(u, {
        each: function(e, t, n) {
            if (e) {
                var r,
                    o,
                    i,
                    a = 0,
                    s = e && e.length,
                    l = s === c || "[object Function]" === p.call(e);
                if (n = n || null, l)
                    for (o = "function" == typeof Object.keys ? Object.keys(e) : u.keys(e); a < o.length && (r = o[a], !1 !== t.call(n, e[r], r, e)); a++)
                        ;
                else
                    for (i = e[0]; a < s && !1 !== t.call(n, i, a, e); i = e[++a])
                        ;
            }
            return e
        },
        isEmptyObject: function(e) {
            for (var t in e)
                if (t !== c)
                    return !1;
            return !0
        },
        keys: Object.keys,
        stamp: function(e, t, n) {
            var r = e[n = n || "__~ks_stamped"];
            if (r)
                return r;
            if (!t)
                try {
                    r = e[n] = u.guid(n)
                } catch (e) {
                    r = c
                }
            return r
        },
        mix: function(e, t, n, r, o) {
            var i;
            if ("object" == typeof n && (r = n.whitelist, o = n.deep, i = n.structured, n = n.overwrite), r && "function" != typeof r) {
                var s = r;
                r = function(e, t) {
                    return u.inArray(e, s) ? t : c
                }
            }
            n === c && (n = !0), i === c && (i = !0);
            var l,
                f = [],
                p = 0;
            for (a(e, t, n, r, o, f, i); l = f[p++];)
                delete l[d];
            return e
        },
        augment: function(e, t) {
            var n,
                o,
                i = u.makeArray(arguments),
                a = i.length - 2,
                s = 1,
                l = i[a],
                d = i[a + 1];
            for (i[1] = t, u.isArray(d) || (l = d, d = c, a++), "boolean" != typeof l && (l = c, a++); s < a; s++)
                (n = (o = i[s]).prototype) && (o = u.mix({}, n, !0, r)), u.mix(e.prototype, o, l, d);
            return e
        },
        merge: function(e) {
            var t,
                n = {},
                r = (e = u.makeArray(arguments)).length;
            for (t = 0; t < r; t++)
                u.mix(n, e[t]);
            return n
        },
        extend: function(e, t, n, r) {
            var o,
                a = t.prototype;
            return a.constructor = t, o = i(a, e), e.prototype = u.mix(o, e.prototype), e.superclass = a, n && u.mix(o, n), r && u.mix(e, r), e
        },
        clone: function(e, t) {
            var n;
            "object" == typeof t && (n = t.structured, t = t.filter), n === c && (n = !0);
            var r;
            n && (r = {});
            var o = l(e, t, r, n);
            return n && u.each(r, function(e) {
                if ((e = e.input)[f])
                    try {
                        delete e[f]
                    } catch (t) {
                        e[f] = c
                    }
            }), r = null, o
        }
    })
}, function(e, t, n) {
    var r = n(69),
        o = n(75);
    r.mix(r, {
        param: o.stringify,
        unparam: o.parse
    })
}, function(e, t, n) {
    e.exports = n(76)
}, function(e, t) {
    function n(e) {
        var t = typeof e;
        return null == e || "object" !== t && "function" !== t
    }
    function r(e) {
        return "[object Array]" === a.apply(e)
    }
    function o(e) {
        return decodeURIComponent(e.replace(/\+/g, " "))
    }
    var i = encodeURIComponent,
        a = {}.toString;
    e.exports = {
        _debug: "@DEBUG@",
        stringify: function(e, t, o, a) {
            t = t || "&", o = o || "=", void 0 === a && (a = !0);
            var s,
                l,
                c,
                u,
                d,
                f = [];
            for (s in e) {
                d = e[s];
                var p = s;
                if (s = i(s), n(d))
                    f.push(s), void 0 !== d && f.push(o, i(d + "")), f.push(t);
                else if (r(d))
                    for (l = 0, u = d.length; l < u; ++l)
                        n(c = d[l]) && (f.push(s, a && "[]" !== p.slice(-2) ? i("[]") : ""), void 0 !== c && f.push(o, i(c + "")), f.push(t))
            }
            return f.pop(), f.join("")
        },
        parse: function(e, t, n) {
            if ("string" != typeof e || !(e = e.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")))
                return {};
            t = t || "&", n = n || "=";
            for (var i, a, s, l = {}, c = e.split(t), u = 0, d = c.length; u < d; ++u) {
                if (-1 === (i = c[u].indexOf(n)))
                    a = o(c[u]), s = void 0;
                else {
                    a = o(c[u].substring(0, i)), s = c[u].substring(i + 1);
                    try {
                        s = o(s)
                    } catch (e) {
                        switch (e.message) {
                        case "URI malformed":
                            s = window ? o(window.escape(s)) : s;
                            break;
                        default:
                            throw new Error("decodeURIComponent error : " + s)
                        }
                    }
                    "[]" === a.slice(-2) && (a = a.slice(0, -2))
                }
                a in l ? r(l[a]) ? l[a].push(s) : l[a] = [l[a], s] : l[a] = s
            }
            return l
        }
    }
}, function(e, t, n) {
    function r() {
        return arguments[1].toUpperCase()
    }
    var o = n(69),
        i = /\\?\{([^{}]+)\}/g,
        a = String.prototype.trim,
        s = /-([a-z])/gi;
    o.mix(o, {
        trim: function(e) {
            return null == e ? "" : a.call(e)
        },
        startsWith: function(e, t) {
            return 0 === e.lastIndexOf(t, 0)
        },
        endsWith: function(e, t) {
            var n = e.length - t.length;
            return n >= 0 && e.indexOf(t, n) === n
        },
        camelCase: function(e) {
            return -1 === e.indexOf("-") ? e : e.replace(s, r)
        },
        urlEncode: function(e) {
            return encodeURIComponent(String(e))
        },
        urlDecode: function(e) {
            return decodeURIComponent(e.replace(/\+/g, " "))
        },
        ucfirst: function(e) {
            return (e += "").charAt(0).toUpperCase() + e.substring(1)
        },
        substitute: function(e, t, n) {
            return "string" == typeof e && t ? e.replace(n || i, function(e, n) {
                return "\\" === e.charAt(0) ? e.slice(1) : void 0 === t[n] ? "" : t[n]
            }) : e
        }
    })
}, function(e, t, n) {
    function r(e, t) {
        return s.hasOwnProperty.call(e, t)
    }
    var o = n(69),
        i = {},
        a = o.noop,
        s = Object.prototype,
        l = s.toString;
    o.mix(o, {
        type: function(e) {
            return null == e ? String(e) : i[l.call(e)] || "object"
        },
        isPlainObject: function(e) {
            if (!e || "object" !== o.type(e) || e.nodeType || e.window == e)
                return !1;
            var t,
                n;
            try {
                if ((n = e.constructor) && !r(e, "constructor") && !r(n.prototype, "isPrototypeOf"))
                    return !1
            } catch (e) {
                return !1
            }
            for (t in e)
                ;
            return void 0 === t || r(e, t)
        }
    }), o.mix(o, {
        isBoolean: a,
        isNumber: a,
        isString: a,
        isFunction: a,
        isArray: a,
        isDate: a,
        isRegExp: a,
        isObject: a,
        isNull: a,
        isUndefined: a
    });
    for (var c = "Boolean Number String Function Date RegExp Object Array Null Undefined".split(" "), u = 0; u < c.length; u++)
        !function(e, t) {
            i["[object " + e + "]"] = t = e.toLowerCase(), o["is" + e] = function(e) {
                return o.type(e) === t
            }
        }(c[u], u);
    o.isArray = Array.isArray || o.isArray
}, function(e, t, n) {
    var r = n(69),
        o = /complete|loaded|interactive/,
        i = "undefined" != typeof window ? window : {},
        a = /\S/;
    r.mix(r, {
        isWindow: function(e) {
            return null != e && e == e.window
        },
        ready: function(e) {
            o.test(document.readyState) && document.body ? e() : document.addEventListener("DOMContentLoaded", function() {
                e()
            }, !1)
        },
        globalEval: function(e) {
            e && a.test(e) && (i.execScript ? i.execScript(e) : function(e) {
                i.eval.call(i, e)
            }(e))
        }
    })
}, function(e, t, n) {
    e.exports = n(81)
}, function(e, t) {
    function n(e, t) {
        if (e)
            for (var n = 0, r = e.length; n < r && !1 !== t(e[n], n); n++)
                ;
    }
    function r(e) {
        return e && "function" == typeof e.then
    }
    function o(e, t, n) {
        if (e instanceof l)
            n.call(e, e.reason);
        else if (e instanceof s || !r(e)) {
            var i = e[f];
            if (r(i) || i instanceof l)
                return void o(i, t, n);
            e[p] === m ? e[v].push([t, n]) : t && t.call(e, i)
        } else
            e.then(t, n)
    }
    function i(e) {
        var t = this;
        if (!(t instanceof i))
            return new i(e);
        t.promise = e || new s, t.promise.defer = t
    }
    function a(e, t) {
        return function() {
            return e.apply(t, arguments)
        }
    }
    function s(e) {
        var t = this;
        if (t[v] = [], t[h] = [], e)
            if ("function" == typeof e) {
                t[p] = m;
                var n = new i(t),
                    r = a(n.resolve, n),
                    o = a(n.reject, n);
                try {
                    e(r, o)
                } catch (e) {
                    throw o(e), new Error(e.stack || e)
                }
            } else
                t[p] = g;
        else
            t[p] = m
    }
    function l(e) {
        if (e instanceof l)
            return e;
        this.reason = e
    }
    function c(e, t, n) {
        function a(e) {
            try {
                return t ? t.call(this, e) : e
            } catch (e) {
                return window.console && console.error(e.stack || e), new l(e)
            }
        }
        function s(e) {
            try {
                return n ? n.call(this, e) : new l(e)
            } catch (e) {
                return window.console && console.error(e.stack || e), new l(e)
            }
        }
        function c(e) {
            d || (d = 1, u.resolve(a.call(this, e)))
        }
        var u = new i,
            d = 0;
        return r(e) ? o(e, c, function(e) {
            d || (d = 1, u.resolve(s.call(this, e)))
        }) : c(e), u.promise
    }
    function u(e) {
        return e && e[p] === g
    }
    function d(e) {
        return e && e[p] === y
    }
    var f = "__promise_value",
        p = "__promise_status",
        h = "__promise_progress_listeners",
        v = "__promise_pendings",
        m = "Pending",
        g = "Fulfilled",
        y = "Rejected";
    i.prototype = {
        constructor: i,
        resolve: function(e) {
            var t = this.promise;
            return t[p] !== m ? null : (t[p] = e instanceof l ? y : g, t[f] = e, n(t[v], function(e) {
                o(t, e[0], e[1])
            }), t[v] = [], t[h] = [], this.promise)
        },
        reject: function(e) {
            return this.resolve(new l(e))
        },
        notify: function(e) {
            if (this.promise[p] !== m)
                return null;
            n(this.promise[h], function(t) {
                t(e)
            })
        }
    }, (s.prototype = {
        constructor: s,
        then: function(e, t, n) {
            return n && this.progress(n), c(this, e, t)
        },
        progress: function(e) {
            var t = this,
                n = t[h];
            return t[p] !== m ? t : (n || (n = t[h] = []), n.push(e), t)
        },
        fail: function(e) {
            return this.then(0, e)
        },
        fin: function(e) {
            return this.then(function(t) {
                return e(t, !0)
            }, function(t) {
                return e(t, !1)
            })
        },
        done: function(e, t) {
            var n = this;
            (e || t ? n.then(e, t) : n).fail(function(e) {
                setTimeout(function() {
                    throw e
                }, 0)
            })
        },
        isResolved: function() {
            return u(this)
        },
        isRejected: function() {
            return d(this)
        }
    }).catch = s.prototype.fail, s.Defer = i, function(e, t) {
        for (var n in t)
            e[n] = t[n]
    }(s, {
        when: c,
        cast: function(e) {
            return e instanceof s ? e : new s(function(t) {
                t(e)
            })
        },
        resolve: function(e) {
            return new s(function(t) {
                t(e)
            })
        },
        reject: function(e) {
            return new s(function(t, n) {
                n(e)
            })
        },
        isPromise: function(e) {
            return e && e instanceof s
        },
        isResolved: u,
        isRejected: d,
        all: function(e) {
            var t = e.length;
            if (!t)
                return null;
            for (var n = new i, r = 0; r < e.length; r++)
                !function(o, i) {
                    c(e[r], function(r) {
                        e[i] = r, 0 == --t && n.resolve(e)
                    }, function(e) {
                        n.reject(e)
                    })
                }(0, r);
            return n.promise
        },
        async: function(e) {
            return function() {
                function t(e, t) {
                    var i;
                    return (i = o[e](t)).done ? i.value : c(i.value, n, r)
                }
                function n(e) {
                    return t("next", e)
                }
                function r(e) {
                    return t("throw", e)
                }
                var o = e.apply(this, arguments);
                try {
                    return n()
                } catch (e) {
                    return s.reject(e)
                }
            }
        }
    }), e.exports = s
}, function(e, t, n) {
    e.exports = n(83)
}, function(e, t, n) {
    function r(e) {
        return ":" === e.slice(-1) && (e = e.slice(0, -1)), "http" === e || "https" === e || "ftp" === e || "gopher" === e || "file" === e
    }
    function o(e) {
        return 1 === e.length ? "0" + e : e
    }
    function i(e, t) {
        return encodeURI(e).replace(t, function(e) {
            return "%" + o(e.charCodeAt(0).toString(16))
        })
    }
    var a = n(75),
        s = n(84),
        l = /[#\/\?@]/g,
        c = /[#\?]/g,
        u = /#/g,
        d = new RegExp("^([\\w\\d+.-]+:)?(?://(?:([^/?#@]*)@)?([\\w\\d\\-\\u0100-\\uffff.+%]*|\\[[^\\]]+\\])(?::([0-9]+))?)?([^?#]+)?(\\?[^#]*)?(#.*)?$"),
        f = {
            protocol: 1,
            auth: 2,
            hostname: 3,
            port: 4,
            pathname: 5,
            search: 6,
            hash: 7
        },
        p = {
            parse: function(e, t) {
                var n = (e = e || "").match(d) || [],
                    o = {};
                for (var i in f)
                    o[i] = n[f[i]];
                o.protocol && (o.protocol = o.protocol.toLowerCase()), o.hostname && (o.hostname = o.hostname.toLowerCase());
                var s = o.protocol;
                if (s && (o.slashes = -1 !== e.lastIndexOf(s + "//")), s && !r(s.slice(0, -1))) {
                    if (!o.slashes)
                        return e = e.slice(0, s.length) + "//" + e.slice(s.length), o = p.parse(e, t), o.slashes = null, o
                } else
                    o.hostname && !o.pathname && (o.pathname = "/");
                return o.path = o.pathname, o.search && (o.path += o.search), o.host = o.hostname, o.port && (o.host = o.hostname + ":" + o.port), o.search && (o.query = o.search.substring(1)), t && o.query && (o.query = a.parse(o.query)), o.href = p.format(o), o
            },
            format: function(e, t) {
                var n = e.host;
                void 0 === n && e.hostname && (n = encodeURIComponent(e.hostname), e.port && (n += ":" + e.port));
                var o = e.search,
                    s = e.query;
                void 0 === o && void 0 !== s && ("string" != typeof s && (s = a.stringify(s, void 0, void 0, t)), s && (o = "?" + s)), o && "?" !== o.charAt(0) && (o = "?" + o);
                var d = e.hash || "";
                d && "#" !== d.charAt(0) && (d = "#" + d);
                var f,
                    p,
                    h = e.pathname || "",
                    v = [];
                return (f = e.protocol) && (":" !== f.slice(-1) && (f += ":"), v.push(i(f, l))), void 0 !== n && ((this.slashes || f && r(f)) && v.push("//"), (p = e.auth) && (v.push(i(p, l)), v.push("@")), v.push(n)), h && v.push(i(h, c)), o && v.push(o), d && v.push("#" + i(d.substring(1), u)), v.join("")
            },
            resolve: function(e, t) {
                var n,
                    r = 0,
                    o = ["protocol", "auth", "host", "pathname", "search", "hash"],
                    i = {};
                e = p.parse(e), t = p.parse(t);
                for (var a = 0; a < o.length; a++) {
                    var l = o[a];
                    if (r)
                        i[l] = t[l];
                    else if (i[l] = e[l], "pathname" === l) {
                        var c = t.pathname;
                        c && (r = 1, "/" !== c.charAt(0) && (i.hostname && !i.pathname ? c = "/" + c : i.pathname && ("/." !== c.slice(-2) && "/.." !== c.slice(-3) && "." !== c && ".." !== c || (c += "/"), -1 !== (n = i.pathname.lastIndexOf("/")) && (c = i.pathname.slice(0, n + 1) + c))), i.pathname = s.normalize(c))
                    } else
                        "search" === l ? t.search && (i.search = t.search, r = 1) : t[l] && (r = r || i[l] !== t[l], i[l] = t[l])
                }
                return p.format(i)
            }
        };
    p.stringify = p.format, e.exports = p
}, function(e, t, n) {
    var r = n(85);
    e.exports = r
}, function(e, t) {
    function n(e) {
        var t = e.split(/\/+/);
        return t[t.length - 1] || (t = t.slice(0, -1)), t[0] || (t = t.slice(1)), t
    }
    function r(e, t) {
        for (var n, r = 0, o = e.length - 1, i = []; o >= 0; o--)
            "." !== (n = e[o]) && (".." === n ? r++ : r ? r-- : i[i.length] = n);
        if (t)
            for (; r--; r)
                i[i.length] = "..";
        return i = i.reverse()
    }
    var o = /^(\/?)([\s\S]+\/(?!$)|\/)?((?:\.{1,2}$|[\s\S]+?)?(\.[^.\/]*)?)$/,
        i = {
            resolve: function() {
                var e,
                    t,
                    o,
                    i = "",
                    a = arguments,
                    s = 0;
                for (t = a.length - 1; t >= 0 && !s; t--)
                    "string" == typeof (o = a[t]) && o && (i = o + "/" + i, s = "/" === o.charAt(0));
                return e = r(n(i), !s).join("/"), (s ? "/" : "") + e || "."
            },
            normalize: function(e) {
                var t = "/" === e.charAt(0),
                    o = "/" === e.slice(-1);
                return (e = r(n(e), !t).join("/")) || t || (e = "."), e && o && (e += "/"), (t ? "/" : "") + e
            },
            join: function() {
                var e = Array.prototype.slice.call(arguments);
                return i.normalize(e.join("/"))
            },
            relative: function(e, t) {
                e = i.normalize(e), t = i.normalize(t);
                var r,
                    o,
                    a = n(e),
                    s = [],
                    l = n(t),
                    c = Math.min(a.length, l.length);
                for (r = 0; r < c && a[r] === l[r]; r++)
                    ;
                for (o = r; r < a.length;)
                    s.push(".."), r++;
                return (s = s.concat(l.slice(o))).join("/")
            },
            basename: function(e, t) {
                var n = (e.match(o) || [])[3] || "";
                return t && n && n.slice(-1 * t.length) === t && (n = n.slice(0, -1 * t.length)), n
            },
            dirname: function(e) {
                var t = e.match(o) || [],
                    n = t[1] || "",
                    r = t[2] || "";
                return n || r ? (r && (r = r.substring(0, r.length - 1)), n + r) : "."
            },
            extname: function(e) {
                return (e.match(o) || [])[4] || ""
            }
        };
    e.exports = i
}, function(e, t, n) {
    e.exports = n(87)
}, function(e, t, n) {
    var r,
        o = n(84),
        i = n(88),
        a = n(89),
        s = window.document,
        l = {},
        c = "undefined" != typeof KISSY ? KISSY.Config : {};
    e.exports = function(e, t, n) {
        function u() {
            var e = y.readyState;
            e && "loaded" !== e && "complete" !== e || (y.onreadystatechange = y.onload = null, _(0))
        }
        var d,
            f,
            p,
            h,
            v,
            m = t,
            g = 0;
        if (i.startsWith(o.extname(e).toLowerCase(), ".css") && (g = 1), "object" == typeof m && (t = m.success, d = m.error, f = m.timeout, n = m.charset, p = m.attrs), (h = l[e] = l[e] || []).push([t, d]), h.length > 1)
            return h.node;
        var y = s.createElement(g ? "link" : "script"),
            b = function() {
                v && (clearTimeout(v), v = void 0)
            };
        p && i.each(p, function(e, t) {
            y.setAttribute(t, e)
        }), n && (y.charset = n), g ? (y.href = e, y.rel = "stylesheet") : (y.src = e, y.async = !0), h.node = y;
        var _ = function(t) {
                var n,
                    r = t;
                b(), i.each(l[e], function(e) {
                    (n = e[r]) && n.call(y)
                }), delete l[e]
            },
            w = "onload" in y,
            E = c.forceCssPoll || i.webkit && i.webkit < 536;
        return g && E && w && (w = !1), w ? (y.onload = u, y.onerror = function() {
            y.onerror = null, _(1)
        }) : g ? a.pollCss(y, function() {
            _(0)
        }) : y.onreadystatechange = u, f && (v = setTimeout(function() {
            _(1)
        }, 1e3 * f)), r || (r = a.docHead()), g ? r.appendChild(y) : r.insertBefore(y, r.firstChild), y
    }
}, function(e, t) {
    function n(e) {
        var t = [];
        for (var n in e)
            t.push(n);
        return t
    }
    var r,
        o = (window.navigator || {}).userAgent || "",
        i = {},
        a = Array.isArray || function(e) {
            return "[object Array]" === Object.prototype.toString.call(e)
        };
    ((r = o.match(/AppleWebKit\/*\s*([\d.]*)/i)) || (r = o.match(/Safari[\/]{0,1}([\d.]*)/))) && r[1] && (i.webkit = function(e) {
        var t = 0;
        return parseFloat(e.replace(/\./g, function() {
            return 0 == t++ ? "." : ""
        }))
    }(r[1])), i.isEmptyObject = function(e) {
        for (var t in e)
            if (void 0 !== t)
                return !1;
        return !0
    }, i.startsWith = function(e, t) {
        return 0 === e.lastIndexOf(t, 0)
    }, i.each = function(e, t) {
        var r,
            o,
            i = 0;
        if (a(e))
            for (o = e.length; i < o && !1 !== t(e[i], i, e); i++)
                ;
        else
            for (o = (r = n(e)).length; i < o && !1 !== t(e[r[i]], r[i], e); i++)
                ;
    }, e.exports = i
}, function(e, t, n) {
    var r = n(90),
        o = window.document,
        i = {};
    i.docHead = function() {
        return o.getElementsByTagName("head")[0] || o.documentElement
    }, i.pollCss = r.pollCss, e.exports = i
}, function(e, t, n) {
    function r() {
        c || (o("start css poll timer"), a())
    }
    function o(e) {
        console && console.debug && console.debug(e)
    }
    function i(e, t) {
        var n = 0;
        if (s.webkit)
            e.sheet && (o("webkit css poll loaded: " + t), n = 1);
        else if (e.sheet)
            try {
                e.sheet.cssRules && (o("same domain css poll loaded: " + t), n = 1)
            } catch (e) {
                var r = e.name;
                o("css poll exception: " + r + " " + e.code + " " + t), "NS_ERROR_DOM_SECURITY_ERR" === r && (o("css poll exception: " + r + "loaded : " + t), n = 1)
            }
        return n
    }
    function a() {
        for (var e in u) {
            var t = u[e],
                n = t.node;
            i(n, e) && (t.callback && t.callback.call(n), delete u[e])
        }
        s.isEmptyObject(u) ? (o("clear css poll timer"), c = 0) : c = setTimeout(a, l)
    }
    var s = n(88),
        l = 30,
        c = 0,
        u = {},
        d = {};
    d.pollCss = function(e, t) {
        var n,
            o = e.href;
        (n = u[o] = {}).node = e, n.callback = t, r()
    }, d.isCssLoaded = i, e.exports = d
}, function(e, t) {
    var n,
        r,
        o = {
            addEvent: function(e, t, n) {
                e.addEventListener ? e.addEventListener(t, n, !1) : e.attachEvent && e.attachEvent("on" + t, n)
            },
            removeEvent: function(e, t, n) {
                e.removeEventListener ? e.removeEventListener(t, n, !1) : e.detachEvent && e.detachEvent("on" + t, n)
            }
        };
    (n = ((window.navigator || {}).userAgent || "").match(/MSIE ([^;]*)|Trident.*; rv(?:\s|:)?([0-9.]+)/)) && (r = n[1] || n[2]) && (o.ie = function(e) {
        var t = 0;
        return parseFloat(e.replace(/\./g, function() {
            return 0 == t++ ? "." : ""
        }))
    }(r), o.ieMode = document.documentMode || o.ie), e.exports = o
}, function(e, t, n) {
    function r(e) {
        return c.domain && i.endsWith(e, c.domain)
    }
    function o(e) {
        var t = e.config,
            n = t.crossDomain,
            o = this,
            i = t.xdr || {},
            a = i.subDomain = i.subDomain || {};
        return o.io = e, n && !s.supportCORS && r(t.uri.hostname) && !1 !== a.proxy ? new l(e) : (o.nativeXhr = s.nativeXhr(n), o)
    }
    var i = n(67),
        a = n(66),
        s = n(93),
        l = n(94),
        c = document;
    i.augment(o, s.proto, {
        send: function() {
            this.sendInternal()
        }
    }), a.setupTransport("*", o)
}, function(e, t, n) {
    function r(e, t) {
        try {
            return new (t || p).XMLHttpRequest
        } catch (e) {}
    }
    function o(e, t) {
        try {
            return new (t || p).ActiveXObject("Microsoft.XMLHTTP")
        } catch (e) {}
    }
    function i(e) {
        return h && e instanceof h
    }
    function a(e) {
        var t;
        return e.ifModified && (t = e.uri, !1 === e.cache && delete (t = l.clone(t)).query._ksTS, t = c.stringify(t)), t
    }
    var s,
        l = n(67),
        c = n(82),
        u = n(75),
        d = n(66),
        f = n(91),
        p = window,
        h = f.ieMode > 7 && p.XDomainRequest,
        v = {
            proto: {}
        },
        m = {},
        g = {};
    d.__lastModifiedCached = m, d.__eTagCached = g, v.nativeXhr = p.ActiveXObject ? function(e, t) {
        return !s && e && h ? new h : !d.isLocal && r(0, t) || o(0, t)
    } : r, s = v.supportCORS = "withCredentials" in v.nativeXhr(), v.XDomainRequest_ = h, l.mix(v.proto, {
        sendInternal: function() {
            var e,
                t,
                n,
                r,
                o = this,
                c = o.io,
                d = c.config,
                f = o.nativeXhr,
                p = d.files,
                h = p ? "post" : d.type,
                v = d.async,
                y = c.mimeType,
                b = c.requestHeaders || {},
                _ = c._getUrlForSend(),
                w = a(d);
            w && ((n = m[w]) && (b["If-Modified-Since"] = n), (n = g[w]) && (b["If-None-Match"] = n)), (e = d.username) ? f.open(h, _, v, e, d.password) : f.open(h, _, v), "withCredentials" in (t = d.xhrFields || {}) && (s || delete t.withCredentials);
            for (r in t)
                try {
                    f[r] = t[r]
                } catch (e) {}
            if (y && f.overrideMimeType && f.overrideMimeType(y), !1 === b["X-Requested-With"] && delete b["X-Requested-With"], void 0 !== f.setRequestHeader)
                for (r in b)
                    f.setRequestHeader(r, b[r]);
            var E = d.hasContent && d.data || null;
            if (p) {
                var x = E,
                    T = {};
                x && (T = u.parse(x)), T = l.mix(T, p), E = new FormData, l.each(T, function(e, t) {
                    l.isArray(e) ? l.each(e, function(e) {
                        E.append(t + (d.serializeArray ? "[]" : ""), e)
                    }) : E.append(t, e)
                })
            }
            f.send(E), v && 4 !== f.readyState ? i(f) ? (f.onload = function() {
                f.readyState = 4, f.status = 200, o._callback()
            }, f.onerror = function() {
                f.readyState = 4, f.status = 500, o._callback()
            }) : f.onreadystatechange = function() {
                o._callback()
            } : o._callback()
        },
        abort: function() {
            this._callback(0, 1)
        },
        _callback: function(e, t) {
            var n,
                r,
                o,
                s,
                c,
                u = this,
                f = u.nativeXhr,
                p = u.io,
                h = p.config;
            try {
                if (t || 4 === f.readyState)
                    if (i(f) ? (f.onerror = l.noop, f.onload = l.noop) : f.onreadystatechange = l.noop, t)
                        4 !== f.readyState && f.abort();
                    else {
                        n = a(h);
                        var v = f.status;
                        i(f) || (p.responseHeadersString = f.getAllResponseHeaders()), n && (r = f.getResponseHeader("Last-Modified"), o = f.getResponseHeader("ETag"), r && (m[n] = r), o && (g[o] = o)), (c = f.responseXML) && c.documentElement && (p.responseXML = c);
                        var y = p.responseText = f.responseText;
                        if (h.files && y) {
                            var b,
                                _;
                            -1 !== (b = y.indexOf("<body>")) && (-1 === (_ = y.lastIndexOf("</body>")) && (_ = y.length), y = y.slice(b + 6, _)), p.responseText = l.unEscapeHtml ? l.unEscapeHtml(y) : y
                        }
                        try {
                            s = f.statusText
                        } catch (e) {
                            s = ""
                        }
                        v || !d.isLocal || h.crossDomain ? 1223 === v && (v = 204) : v = p.responseText ? 200 : 404, p._ioReady(v, s)
                    }
            } catch (e) {
                console.error(e.stack || e), setTimeout(function() {
                    throw e
                }, 0), f.onreadystatechange = l.noop, t || p._ioReady(-1, e.message || "process error")
            }
        }
    }), e.exports = v
}, function(e, t, n) {
    function r(e) {
        var t = this,
            n = e.config;
        t.io = e, n.crossDomain = !1, t._onLoad = i.bind(o, t)
    }
    function o() {
        var e = this,
            t = e.io.config.uri.hostname,
            n = d[t];
        n.ready = 1, a.removeEvent(n.iframe, "load", e._onLoad), e.send()
    }
    var i = n(67),
        a = n(91),
        s = n(82),
        l = n(95),
        c = n(93),
        u = document,
        d = {};
    i.augment(r, c.proto, {
        send: function() {
            var e,
                t,
                n = this,
                r = n.io.config,
                o = r.uri,
                i = o.hostname,
                f = d[i],
                p = "/sub_domain_proxy.html";
            if (r.xdr && r.xdr.subDomain && r.xdr.subDomain.proxy && (p = r.xdr.subDomain.proxy), f && f.ready)
                return n.nativeXhr = c.nativeXhr(0, f.iframe.contentWindow), void (n.nativeXhr ? n.sendInternal() : console.error("io: document.domain not set correctly!"));
            f ? e = f.iframe : (e = (f = d[i] = {}).iframe = u.createElement("iframe"), l.css(e, {
                position: "absolute",
                left: "-9999px",
                top: "-9999px"
            }), l.prepend(e, u.body || u.documentElement), (t = {}).protocol = o.protocol, t.host = o.host, t.pathname = p, e.src = s.stringify(t)), a.addEvent(e, "load", n._onLoad)
        }
    }), e.exports = r
}, function(e, t, n) {
    e.exports = n(96)
}, function(e, t, n) {
    var r = n(97);
    n(98), n(99), n(100), n(101), n(102), n(103), n(104), n(107), n(109), e.exports = r
}, function(e, t, n) {
    var r = n(67),
        o = window,
        i = o.document,
        a = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,
        s = {
            ELEMENT_NODE: 1,
            ATTRIBUTE_NODE: 2,
            TEXT_NODE: 3,
            CDATA_SECTION_NODE: 4,
            ENTITY_REFERENCE_NODE: 5,
            ENTITY_NODE: 6,
            PROCESSING_INSTRUCTION_NODE: 7,
            COMMENT_NODE: 8,
            DOCUMENT_NODE: 9,
            DOCUMENT_TYPE_NODE: 10,
            DOCUMENT_FRAGMENT_NODE: 11,
            NOTATION_NODE: 12
        },
        l = e.exports = {
            isCustomDomain: function(e) {
                e = e || o;
                var t = (e = l.get(e)).document.domain,
                    n = e.location.hostname;
                return t !== n && t !== "[" + n + "]"
            },
            getEmptyIframeSrc: function() {
                return ""
            },
            NodeType: s,
            getWindow: function(e) {
                if (!(e = l.get(e)) || !e.nodeType)
                    return o;
                if (r.isWindow(e))
                    return e;
                var t = e;
                return t.nodeType !== s.DOCUMENT_NODE && (t = e.ownerDocument), t.defaultView || t.parentWindow
            },
            getDocument: function(e) {
                return e ? (e = l.get(e), r.isWindow(e) ? e.document : e.nodeType === s.DOCUMENT_NODE ? e : e.ownerDocument) : i
            },
            isDomNodeList: function(e) {
                return e && !e.nodeType && e.item && !e.setTimeout
            },
            nodeName: function(e) {
                var t = l.get(e),
                    n = t.nodeName.toLowerCase(),
                    r = t.scopeName;
                return r && "HTML" !== r && (n = r.toLowerCase() + ":" + n), n
            },
            _RE_NUM_NO_PX: new RegExp("^(" + a + ")(?!px)[a-z%]+$", "i")
        }
}, function(e, t, n) {
    function r(e) {
        return null == e ? "" : e + ""
    }
    function o(e, t) {
        t = g[t] || t;
        var n = b[t];
        return n && n.get ? n.get(e, t) : e[t]
    }
    var i = n(67),
        a = n(97),
        s = a.NodeType,
        l = a.nodeName,
        c = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
        u = /^(?:button|input|object|select|textarea)$/i,
        d = /^a(?:rea)?$/i,
        f = /:|^on/,
        p = /\r/g,
        h = {},
        v = {
            val: 1,
            css: 1,
            html: 1,
            text: 1,
            data: 1,
            width: 1,
            height: 1,
            offset: 1,
            scrollTop: 1,
            scrollLeft: 1
        },
        m = {
            tabindex: {
                get: function(e) {
                    var t = e.getAttributeNode("tabindex");
                    return t && t.specified ? parseInt(t.value, 10) : u.test(e.nodeName) || d.test(e.nodeName) && e.href ? 0 : void 0
                }
            }
        },
        g = {
            hidefocus: "hideFocus",
            tabindex: "tabIndex",
            readonly: "readOnly",
            for: "htmlFor",
            class: "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },
        y = {
            get: function(e, t) {
                return a.prop(e, t) ? t.toLowerCase() : void 0
            },
            set: function(e, t, n) {
                var r;
                return !1 === t ? a.removeAttr(e, n) : ((r = g[n] || n) in e && (e[r] = !0), e.setAttribute(n, n.toLowerCase())), n
            }
        },
        b = {},
        _ = {},
        w = {
            select: {
                get: function(e) {
                    var t,
                        n,
                        r,
                        o = e.selectedIndex,
                        i = e.options,
                        s = "select-one" === String(e.type);
                    if (o < 0)
                        return null;
                    if (s)
                        return a.val(i[o]);
                    for (t = [], n = 0, r = i.length; n < r; ++n)
                        i[n].selected && t.push(a.val(i[n]));
                    return t
                },
                set: function(e, t) {
                    var n = i.makeArray(t),
                        r = e.options;
                    return i.each(r, function(e) {
                        e.selected = i.inArray(a.val(e), n)
                    }), n.length || (e.selectedIndex = -1), n
                }
            }
        };
    i.each(["radio", "checkbox"], function(e) {
        w[e] = {
            get: function(e) {
                return null === e.getAttribute("value") ? "on" : e.value
            },
            set: function(e, t) {
                if (i.isArray(t))
                    return e.checked = i.inArray(a.val(e), t), 1
            }
        }
    }), m.style = {
        get: function(e) {
            return e.style.cssText
        }
    }, i.mix(a, {
        _valHooks: w,
        _propFix: g,
        _attrHooks: m,
        _propHooks: b,
        _attrNodeHook: _,
        _attrFix: h,
        prop: function(e, t, n) {
            var r,
                s,
                l,
                c = a.query(e);
            if ("object" != typeof t) {
                if (t = g[t] || t, l = b[t], void 0 !== n)
                    for (r = c.length - 1; r >= 0; r--)
                        s = c[r], l && l.set ? l.set(s, n, t) : s[t] = n;
                else if (c.length)
                    return o(c[0], t)
            } else
                i.each(t, function(e, t) {
                    a.prop(c, t, e)
                })
        },
        removeProp: function(e, t) {
            t = g[t] || t;
            var n,
                r,
                o = a.query(e);
            for (n = o.length - 1; n >= 0; n--) {
                r = o[n];
                try {
                    r[t] = void 0, delete r[t]
                } catch (e) {}
            }
        },
        attr: function(e, t, n, r) {
            var o,
                i,
                u,
                d = a.query(e),
                p = d[0];
            if ("object" != typeof t) {
                if (r && v[t])
                    return a[t](e, n);
                if (t = t.toLowerCase(), r && v[t])
                    return a[t](e, n);
                if (t = h[t] || t, o = c.test(t) ? y : f.test(t) ? _ : m[t], void 0 === n) {
                    if (p && p.nodeType === s.ELEMENT_NODE) {
                        if ("form" === l(p) && (o = _), o && o.get)
                            return o.get(p, t);
                        if ("" === (u = p.getAttribute(t))) {
                            var g = p.getAttributeNode(t);
                            if (!g || !g.specified)
                                return
                        }
                        return null === u ? void 0 : u
                    }
                } else
                    for (i = d.length - 1; i >= 0; i--)
                        (p = d[i]) && p.nodeType === s.ELEMENT_NODE && ("form" === l(p) && (o = _), o && o.set ? o.set(p, n, t) : p.setAttribute(t, "" + n))
            } else {
                r = n;
                for (var b in t)
                    a.attr(d, b, t[b], r)
            }
        },
        removeAttr: function(e, t) {
            t = t.toLowerCase(), t = h[t] || t;
            var n,
                r,
                o,
                i = a.query(e);
            for (o = i.length - 1; o >= 0; o--)
                (r = i[o]).nodeType === s.ELEMENT_NODE && (r.removeAttribute(t), c.test(t) && (n = g[t] || t) in r && (r[n] = !1))
        },
        val: function(e, t) {
            var n,
                o,
                s,
                c,
                u,
                d;
            if (void 0 !== t)
                for (u = (c = a.query(e)).length - 1; u >= 0; u--) {
                    if (1 !== (s = c[u]).nodeType)
                        return;
                    null == (d = t) ? d = "" : "number" == typeof d ? d += "" : i.isArray(d) && (d = i.map(d, r)), (n = w[l(s)] || w[s.type]) && "set" in n && void 0 !== n.set(s, d, "value") || (s.value = d)
                }
            else if (s = a.get(e))
                return (n = w[l(s)] || w[s.type]) && "get" in n && void 0 !== (o = n.get(s, "value")) ? o : "string" == typeof (o = s.value) ? o.replace(p, "") : null == o ? "" : o
        },
        text: function(e, t) {
            var n,
                r,
                o,
                i;
            if (void 0 === t)
                return n = a.get(e), a._getText(n);
            for (o = (r = a.query(e)).length - 1; o >= 0; o--)
                (i = (n = r[o]).nodeType) === s.ELEMENT_NODE ? (a.cleanData(n.getElementsByTagName("*")), "textContent" in n ? n.textContent = t : n.innerText = t) : i !== s.TEXT_NODE && i !== s.CDATA_SECTION_NODE || (n.nodeValue = t)
        },
        _getText: function(e) {
            return e.textContent
        },
        _getProp: o
    })
}, function(e, t, n) {
    function r(e) {
        for (var t, n = (e = a.trim(e || "")).split(u), r = [], o = n.length, i = 0; i < o; i++)
            (t = n[i]) && r.push(t);
        return r
    }
    function o(e) {
        return function(t, n) {
            var r,
                o,
                i,
                a = t.classList,
                s = l.call(arguments, 2);
            for (r = 0, o = n.length; r < o; r++)
                (i = n[r]) && a[e].apply(a, [i].concat(s))
        }
    }
    function i(e) {
        return function(t, n) {
            var o = r(n),
                i = l.call(arguments, 2);
            s.query(t).each(function(t) {
                t.nodeType === c.ELEMENT_NODE && s[e].apply(s, [t, o].concat(i))
            })
        }
    }
    var a = n(67),
        s = n(97),
        l = [].slice,
        c = s.NodeType,
        u = /[\.\s]\s*\.?/;
    a.mix(s, {
        _hasClass: function(e, t) {
            var n,
                r,
                o,
                i = e.classList;
            if (i.length) {
                for (n = 0, r = t.length; n < r; n++)
                    if ((o = t[n]) && !i.contains(o))
                        return !1;
                return !0
            }
            return !1
        },
        _addClass: o("add"),
        _removeClass: o("remove"),
        _toggleClass: o("toggle"),
        hasClass: function(e, t) {
            var n = !1;
            return t = r(t), s.query(e).each(function(e) {
                if (e.nodeType === c.ELEMENT_NODE && s._hasClass(e, t))
                    return n = !0, !1
            }), n
        },
        replaceClass: function(e, t, n) {
            s.removeClass(e, t), s.addClass(e, n)
        },
        addClass: i("_addClass"),
        removeClass: i("_removeClass"),
        toggleClass: i("_toggleClass")
    })
}, function(e, t, n) {
    function r(e, t) {
        return e.getElementsByTagName(t)
    }
    function o(e, t) {
        var n = e && e !== v ? e.createElement(g) : y;
        return t && n === y && (n.innerHTML = ""), n
    }
    function i(e, t) {
        var n = o(t);
        return n.innerHTML = "m<div>" + e + "</div>", n.lastChild
    }
    function a(e) {
        try {
            return void (e.innerHTML = "")
        } catch (e) {}
        for (; e.lastChild;)
            s(e.lastChild, e)
    }
    function s(e, t) {
        t && (x && t.canHaveChildren && "removeNode" in e ? (e.firstChild && a(e), e.removeNode(!1)) : t.removeChild(e))
    }
    function l(e, t, n) {
        var o = t.nodeType;
        if (o === m.DOCUMENT_FRAGMENT_NODE)
            for (var i = t.childNodes, a = n.childNodes, s = 0; i[s];)
                a[s] && l(e, i[s], a[s]), s++;
        else if (o === m.ELEMENT_NODE)
            for (var c = r(t, "*"), u = r(n, "*"), d = 0; c[d];)
                u[d] && e(c[d], u[d]), d++
    }
    function c(e, t, n) {
        var r,
            o;
        if (t.nodeType !== m.ELEMENT_NODE) {
            r = h.data(e);
            for (o in r)
                h.data(t, o, r[o]);
            n && n.clone(e, t)
        }
    }
    function u(e, t) {
        var n = e.nodeType;
        return n === m.ELEMENT_NODE ? h.attr(e, t, !0) : n === m.DOCUMENT_FRAGMENT_NODE && h.attr(e.childNodes, t, !0), e
    }
    function d(e) {
        var t,
            n,
            r = null;
        if (!e || !e.push && !e.item || !e[0])
            throw new Error("Unable to convert " + e + " to fragment.");
        for (r = e[0].ownerDocument.createDocumentFragment(), t = 0, n = (e = p.makeArray(e)).length; t < n; t++)
            r.appendChild(e[t]);
        return r
    }
    var f,
        p = n(67),
        h = n(97),
        v = document,
        m = h.NodeType,
        g = "div",
        y = v && v.createElement(g),
        b = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        _ = /<([\w:]+)/,
        w = /^\s+/,
        E = /\s+$/,
        x = function(e) {
            var t,
                n;
            return !(!(t = navigator.userAgent.match(/MSIE ([^;]*)|Trident.*; rv(?:\s|:)?([0-9.]+)/)) || !(n = t[1] || t[2])) && parseFloat(n) < 9
        }(),
        T = x,
        S = /<|&#?\w+;/,
        C = /^<(\w+)\s*\/?>(?:<\/\1>)?$/,
        O = h._creators = {
            div: i
        },
        k = {
            area: "map",
            thead: "table",
            td: "tr",
            th: "tr",
            tr: "tbody",
            tbody: "table",
            tfoot: "table",
            caption: "table",
            colgroup: "table",
            col: "colgroup",
            legend: "fieldset"
        };
    for (f in k)
        !function(e) {
            O[f] = function(t, n) {
                return h.create(p.substitute("<{tag}>{html}</{tag}>", {
                    tag: e,
                    html: t
                }), void 0, n)
            }
        }(k[f]);
    O.option = O.optgroup = function(e, t) {
        return h.create('<select multiple="multiple">' + e + "</select>", void 0, t)
    }, k.option = k.optgroup = 1, p.mix(h, {
        create: function(e, t, n, r) {
            var o = null;
            if (!e)
                return o;
            if (e.nodeType)
                return h.clone(e);
            if ("string" != typeof e)
                return o;
            void 0 === r && (r = !0), r && (e = p.trim(e));
            var a,
                s,
                l,
                c,
                f,
                m = n || v,
                y = g;
            if (S.test(e))
                if (l = C.exec(e))
                    o = m.createElement(l[1]);
                else if (e = e.replace(b, "<$1></$2>"), (l = _.exec(e)) && (c = l[1]) && (y = c.toLowerCase()), a = (O[y] || i)(e, m), T && (s = e.match(w)) && a.insertBefore(m.createTextNode(s[0]), a.firstChild), T && /\S/.test(e) && (s = e.match(E)) && a.appendChild(m.createTextNode(s[0])), 1 === (f = a.childNodes).length)
                    o = f[0].parentNode.removeChild(f[0]);
                else {
                    if (!f.length)
                        throw new Error(e + " : create node error");
                    o = d(f)
                }
            else
                o = m.createTextNode(e);
            return t ? u(o, t) : o
        },
        _fixCloneAttributes: function(e, t) {
            var n,
                r,
                o = e.nodeName.toLowerCase(),
                i = (e.type || "").toLowerCase();
            "textarea" === o ? (t.defaultValue = e.defaultValue, t.value = e.value) : "input" !== o || "checkbox" !== i && "radio" !== i || ((r = e.checked) && (t.defaultChecked = t.checked = r), n = e.value, t.value !== n && (t.value = n))
        },
        _defaultCreator: i,
        html: function(e, t, n) {
            var i,
                a,
                s,
                l = h.query(e),
                c = l[0],
                u = !1;
            if (c) {
                if (void 0 === t) {
                    if (c.nodeType === m.ELEMENT_NODE)
                        return c.innerHTML;
                    if (c.nodeType === m.DOCUMENT_FRAGMENT_NODE) {
                        var d = o(c.ownerDocument, 1);
                        return d.appendChild(c), d.innerHTML
                    }
                    return null
                }
                if (!((t += "").match(/<(?:script|style|link)/i) || T && t.match(w) || k[(t.match(_) || ["", ""])[1].toLowerCase()]))
                    try {
                        for (a = l.length - 1; a >= 0; a--)
                            (s = l[a]).nodeType === m.ELEMENT_NODE && (h.cleanData(r(s, "*")), s.innerHTML = t);
                        u = !0
                    } catch (e) {}
                u || (i = h.create(t, 0, c.ownerDocument, 0), h.empty(l), h.append(i, l, n))
            }
        },
        remove: function(e, t, n) {
            var o,
                i,
                a,
                l = h.query(e);
            for (a = l.length - 1; a >= 0; a--)
                o = l[a], t || o.nodeType !== m.ELEMENT_NODE || ((i = p.makeArray(r(o, "*"))).push(o), h.removeData(i), n && n.detach(i)), s(o, o.parentNode)
        },
        clone: function(e, t, n, r, o) {
            "object" == typeof t && (r = t.deepWithDataAndEvent, n = t.withDataAndEvent, t = t.deep);
            var i,
                a,
                s = h.get(e),
                u = h._fixCloneAttributes;
            return s ? (a = s.nodeType, i = s.cloneNode(t), a !== m.ELEMENT_NODE && a !== m.DOCUMENT_FRAGMENT_NODE || (u && a === m.ELEMENT_NODE && u(s, i), t && u && l(u, s, i)), n && (c(s, i, o), t && r && l(c, s, i)), i) : null
        },
        empty: function(e, t) {
            var n,
                r,
                o = h.query(e);
            for (r = o.length - 1; r >= 0; r--)
                n = o[r], h.remove(n.childNodes, !1, t)
        },
        _nodeListToFragment: d,
        _getHolderDiv: o
    })
}, function(e, t, n) {
    var r = n(67),
        o = n(97),
        i = window,
        a = "_ks_data_" + r.now(),
        s = {},
        l = {},
        c = {
            applet: 1,
            object: 1,
            embed: 1
        },
        u = {
            data: function(e, t, n) {
                if (e == i)
                    return u.data(l, t, n);
                var r = e[a];
                if (void 0 === n)
                    return void 0 !== t ? r && r[t] : r = e[a] = e[a] || {};
                (r = e[a] = e[a] || {})[t] = n
            },
            removeData: function(e, t) {
                if (e == i)
                    return u.removeData(l, t);
                var n = e[a];
                if (void 0 !== t)
                    delete n[t], r.isEmptyObject(n) && u.removeData(e);
                else
                    try {
                        delete e[a]
                    } catch (t) {
                        e[a] = void 0
                    }
            }
        },
        d = {
            data: function(e, t, n) {
                if (!c[e.nodeName.toLowerCase()]) {
                    var o,
                        i = e[a];
                    if (!i) {
                        if (void 0 !== t && void 0 === n)
                            return;
                        i = e[a] = r.guid()
                    }
                    if (o = s[i], void 0 === n)
                        return void 0 !== t ? o && o[t] : o = s[i] = s[i] || {};
                    (o = s[i] = s[i] || {})[t] = n
                }
            },
            removeData: function(e, t) {
                var n = e[a];
                if (n) {
                    var o = s[n];
                    if (void 0 !== t)
                        delete o[t], r.isEmptyObject(o) && d.removeData(e);
                    else {
                        delete s[n];
                        try {
                            delete e[a]
                        } catch (t) {
                            e[a] = void 0
                        }
                        e.removeAttribute && e.removeAttribute(a)
                    }
                }
            }
        };
    r.mix(o, {
        __EXPANDO: a,
        _dataCache: s,
        _winDataCache: l,
        data: function(e, t, n) {
            var r = o.query(e),
                i = r[0];
            if ("object" != typeof t)
                if (void 0 === n) {
                    if (i)
                        return i.nodeType ? d.data(i, t) : u.data(i, t)
                } else
                    for (var a = r.length - 1; a >= 0; a--)
                        (i = r[a]).nodeType ? d.data(i, t, n) : u.data(i, t, n);
            else
                for (var s in t)
                    o.data(r, s, t[s])
        },
        removeData: function(e, t) {
            var n,
                r,
                i = o.query(e);
            for (r = i.length - 1; r >= 0; r--)
                (n = i[r]).nodeType ? d.removeData(n, t) : u.removeData(n, t)
        },
        cleanData: function(e, t, n) {
            var i,
                a,
                s = o.query(e);
            for (a = s.length - 1; a >= 0; a--)
                if ((i = s[a]).nodeType) {
                    var l = t && r.makeArray(i.getElementsByTagName("*")) || [];
                    l.push(i);
                    for (var c = 0, f = l.length; c < f; c++)
                        d.removeData(l[c]);
                    n && n.detach(l)
                } else
                    u.removeData(i)
        }
    })
}, function(e, t, n) {
    function r(e) {
        return !e.type || v.test(e.type)
    }
    function o(e, t) {
        var n,
            i,
            a,
            s = [];
        for (n = 0; e[n]; n++)
            if (i = e[n], a = f(i), i.nodeType === u.DOCUMENT_FRAGMENT_NODE)
                s.push.apply(s, o(p(i.childNodes), t));
            else if ("script" === a && r(i))
                i.parentNode && i.parentNode.removeChild(i), t && t.push(i);
            else {
                if (i.nodeType === u.ELEMENT_NODE && !d.test(a)) {
                    var l,
                        c,
                        v = [],
                        m = i.getElementsByTagName("script");
                    for (c = 0; c < m.length; c++)
                        r(l = m[c]) && v.push(l);
                    h.apply(e, [n + 1, 0].concat(v))
                }
                s.push(i)
            }
        return s
    }
    function i(e) {
        if (e.src)
            l(e.src);
        else {
            var t = s.trim(e.text || e.textContent || e.innerHTML || "");
            t && s.globalEval(t)
        }
    }
    function a(e, t, n, r) {
        e = c.query(e), r && (r = []), e = o(e, r), c._fixInsertionChecked && c._fixInsertionChecked(e), t = c.query(t);
        var a,
            l,
            u,
            d,
            f = e.length,
            p = t.length;
        if ((f || r && r.length) && p)
            for (a = c._nodeListToFragment(e), p > 1 && (d = c.clone(a, !0), t = s.makeArray(t)), l = 0; l < p; l++)
                u = t[l], a && n(l > 0 ? c.clone(d, !0) : a, u), r && r.length && s.each(r, i)
    }
    var s = n(67),
        l = n(86),
        c = n(97),
        u = c.NodeType,
        d = /^(?:button|input|object|select|textarea)$/i,
        f = c.nodeName,
        p = s.makeArray,
        h = [].splice,
        v = /\/(java|ecma)script/i;
    s.mix(c, {
        _fixInsertionChecked: null,
        insertBefore: function(e, t, n) {
            a(e, t, function(e, t) {
                t.parentNode && t.parentNode.insertBefore(e, t)
            }, n)
        },
        insertAfter: function(e, t, n) {
            a(e, t, function(e, t) {
                t.parentNode && t.parentNode.insertBefore(e, t.nextSibling)
            }, n)
        },
        appendTo: function(e, t, n) {
            a(e, t, function(e, t) {
                t.appendChild(e)
            }, n)
        },
        prependTo: function(e, t, n) {
            a(e, t, function(e, t) {
                t.insertBefore(e, t.firstChild)
            }, n)
        },
        replaceWith: function(e, t) {
            var n = c.query(e);
            t = c.query(t), c.remove(t, !0), c.insertBefore(t, n), c.remove(n)
        }
    }), s.each({
        prepend: "prependTo",
        append: "appendTo",
        before: "insertBefore",
        after: "insertAfter"
    }, function(e, t) {
        c[t] = c[e]
    })
}, function(e, t, n) {
    function r(e) {
        var t,
            n,
            r,
            o = e.ownerDocument.body;
        return e.getBoundingClientRect ? (t = e.getBoundingClientRect(), n = t[g], r = t[y], n -= f.clientLeft || o.clientLeft || 0, r -= f.clientTop || o.clientTop || 0, {
            left: n,
            top: r
        }) : {
            left: 0,
            top: 0
        }
    }
    function o(e) {
        var t = r(e),
            n = p(e);
        return t.left += l[b](n), t.top += l[_](n), t
    }
    function i(e, t) {
        var n,
            i = {
                left: 0,
                top: 0
            },
            a = p(e),
            s = e;
        t = t || a;
        do {
            n = a == t ? o(s) : r(s), i.left += n.left, i.top += n.top
        } while (a && a != t && (s = a.frameElement) && (a = a.parent));
        return i
    }
    function a(e, t) {
        "static" === l.css(e, v) && (e.style[v] = m);
        var n,
            r,
            o = i(e),
            a = {};
        for (r in t)
            n = parseFloat(l.css(e, r)) || 0, a[r] = n + t[r] - o[r];
        l.css(e, a)
    }
    var s = n(67),
        l = n(97),
        c = window,
        u = c.document,
        d = l.NodeType,
        f = u && u.documentElement,
        p = l.getWindow,
        h = Math.max,
        v = "position",
        m = "relative",
        g = "left",
        y = "top",
        b = "scrollLeft",
        _ = "scrollTop",
        w = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    s.mix(l, {
        offset: function(e, t, n) {
            var r;
            if (void 0 === t) {
                var o;
                return (r = l.get(e)) && (o = i(r, n)), o
            }
            var s,
                c = l.query(e);
            for (s = c.length - 1; s >= 0; s--)
                a(r = c[s], t)
        },
        docWidth: 0,
        docHeight: 0,
        viewportHeight: 0,
        viewportWidth: 0,
        scrollTop: 0,
        scrollLeft: 0
    }), s.each(["Left", "Top"], function(e, t) {
        var n = "scroll" + e;
        l[n] = function(r, o) {
            if ("number" == typeof r)
                return arguments.callee(c, r);
            var i,
                a,
                s,
                u,
                f;
            return (r = l.get(r)) && r.nodeType === d.ELEMENT_NODE ? void 0 !== o ? r[n] = parseFloat(o) : i = r[n] : (u = p(r), void 0 !== o ? (o = parseFloat(o), a = "Left" === e ? o : l.scrollLeft(u), s = "Top" === e ? o : l.scrollTop(u), u.scrollTo(a, s)) : "number" != typeof (i = u["page" + (t ? "Y" : "X") + "Offset"]) && "number" != typeof (i = (f = u.document).documentElement[n]) && (i = f.body[n])), i
        }
    }), s.each(["Width", "Height"], function(e) {
        l["doc" + e] = function(t) {
            t = l.get(t);
            var n = l.getDocument(t);
            return h(n.documentElement["scroll" + e], n.body["scroll" + e], l["viewport" + e](n))
        }, l["viewport" + e] = function(t) {
            t = l.get(t);
            var n = p(t),
                r = n["inner" + e];
            if (w && r)
                return r;
            var o = "client" + e,
                i = n.document,
                a = i.body,
                s = i.documentElement[o];
            return "CSS1Compat" === i.compatMode && s || a && a[o] || s
        }
    })
}, function(e, t, n) {
    function r(e) {
        if (I[e])
            return I[e];
        var t = y(e);
        return t && t.propertyName || e
    }
    function o(e) {
        var t,
            n,
            r = L[e];
        return L[e] || (t = x.body || x.documentElement, n = x.createElement(e), m.prepend(n, t), r = m.css(n, "display"), t.removeChild(n), L[e] = r), r
    }
    function i(e, t, n) {
        var r,
            o = {},
            i = e.style;
        for (r in t)
            o[r] = i[r], i[r] = t[r];
        n.call(e);
        for (r in t)
            i[r] = o[r]
    }
    function a(e, t, n, o) {
        var i,
            a,
            s;
        if (i = e.style) {
            if (t = o ? t : R(t), s = N[t], t = r(t), void 0 === n)
                return s && "get" in s && void 0 !== (a = s.get(e, !1)) || (a = i[t]), void 0 === a ? "" : a;
            if (null === n || n === k ? n = k : isNaN(Number(n)) || O[t] || (n += M), s && s.set && (n = s.set(e, n)), void 0 !== n) {
                try {
                    i[t] = n
                } catch (e) {}
                n === k && i.removeAttribute && i.removeAttribute(t)
            }
            i.cssText || e.removeAttribute("style")
        }
    }
    function s(e) {
        var t,
            n = arguments;
        return 0 !== e.offsetWidth ? t = d.apply(void 0, n) : i(e, P, function() {
            t = d.apply(void 0, n)
        }), t
    }
    function l(e, t, n, r) {
        var o,
            i,
            a,
            s = 0;
        for (i = 0; i < t.length; i++)
            if (o = t[i])
                for (a = 0; a < n.length; a++) {
                    var l;
                    l = "border" === o ? o + n[a] + "Width" : o + n[a], s += parseFloat(m._getComputedStyle(e, l, r)) || 0
                }
        return s
    }
    function c(e, t) {
        return "border-box" === m._getComputedStyle(e, "boxSizing", t)
    }
    function u(e) {
        var t,
            n = e.ownerDocument;
        return n.defaultView && (t = n.defaultView.getComputedStyle(e, null)), t
    }
    function d(e, t, n) {
        if (h.isWindow(e))
            return t === S ? m.viewportWidth(e) : m.viewportHeight(e);
        if (9 === e.nodeType)
            return t === S ? m.docWidth(e) : m.docHeight(e);
        var r = t === S ? ["Left", "Right"] : ["Top", "Bottom"],
            o = t === S ? e.offsetWidth : e.offsetHeight,
            i = u(e),
            a = c(e, i),
            s = 0;
        (null == o || o <= 0) && (o = void 0, (null == (s = m._getComputedStyle(e, t, i)) || Number(s) < 0) && (s = e.style[t] || 0), s = parseFloat(s) || 0), void 0 === n && (n = a ? E : _);
        var d = void 0 !== o || a,
            f = o || s;
        return n === _ ? d ? f - l(e, ["border", "padding"], r, i) : s : d ? f + (n === E ? 0 : n === w ? -l(e, ["border"], r, i) : l(e, ["margin"], r, i)) : s + l(e, b.slice(n), r, i)
    }
    function f(e) {
        var t,
            n,
            r = {
                top: 0,
                left: 0
            };
        return "fixed" === m.css(e, "position") ? n = e.getBoundingClientRect() : (t = p(e), n = m.offset(e), (r = m.offset(t)).top += parseFloat(m.css(t, "borderTopWidth")) || 0, r.left += parseFloat(m.css(t, "borderLeftWidth")) || 0), n.top -= parseFloat(m.css(e, "marginTop")) || 0, n.left -= parseFloat(m.css(e, "marginLeft")) || 0, {
            top: n.top - r.top,
            left: n.left - r.left
        }
    }
    function p(e) {
        for (var t = e.offsetParent || (e.ownerDocument || x).body; t && !j.test(t.nodeName) && "static" === m.css(t, "position");)
            t = t.offsetParent;
        return t
    }
    var h = n(67),
        v = n(105),
        m = n(97),
        g = window,
        y = v.getCssVendorInfo,
        b = ["margin", "border", "padding"],
        _ = -1,
        w = 2,
        E = 1,
        x = g.document || {},
        T = /^margin/,
        S = "width",
        C = "display" + h.now(),
        O = {
            fillOpacity: 1,
            fontWeight: 1,
            lineHeight: 1,
            opacity: 1,
            orphans: 1,
            widows: 1,
            zIndex: 1,
            zoom: 1
        },
        k = "",
        M = "px",
        A = /\d(?!px)[a-z%]+$/i,
        N = {},
        I = {
            float: "cssFloat"
        },
        L = {},
        R = h.camelCase;
    h.mix(m, {
        _cssHooks: N,
        _cssProps: I,
        _getComputedStyle: function(e, t, n) {
            var o,
                i,
                a,
                s,
                l = "",
                c = e.ownerDocument;
            return t = r(t), (n = n || c.defaultView.getComputedStyle(e, null)) && (l = n.getPropertyValue(t) || n[t]), "" !== l || m.contains(c, e) || (l = e.style[t]), m._RE_NUM_NO_PX.test(l) && T.test(t) && (o = (s = e.style).width, i = s.minWidth, a = s.maxWidth, s.minWidth = s.maxWidth = s.width = l, l = n.width, s.width = o, s.minWidth = i, s.maxWidth = a), l
        },
        _style: a,
        css: function(e, t, n) {
            var r,
                o,
                i,
                s,
                l = m.query(e),
                c = l[0];
            if ("object" != typeof t) {
                if (t = R(t), o = N[t], void 0 === n)
                    return i = "", c && (o && "get" in o && void 0 !== (i = o.get(c, !0)) || (i = m._getComputedStyle(c, t))), void 0 === i ? "" : i;
                for (s = l.length - 1; s >= 0; s--)
                    a(l[s], t, n, 1)
            } else
                for (r in t)
                    for (s = l.length - 1; s >= 0; s--)
                        a(l[s], r, t[r])
        },
        show: function(e) {
            var t,
                n,
                r,
                i = m.query(e);
            for (r = i.length - 1; r >= 0; r--)
                (n = i[r]).style.display = m.data(n, C) || k, "none" === m.css(n, "display") && (t = o(n.tagName.toLowerCase()), m.data(n, C, t), n.style.display = t)
        },
        hide: function(e) {
            var t,
                n,
                r = m.query(e);
            for (n = r.length - 1; n >= 0; n--) {
                var o = (t = r[n]).style,
                    i = o.display;
                "none" !== i && (i && m.data(t, C, i), o.display = "none")
            }
        },
        toggle: function(e) {
            var t,
                n,
                r = m.query(e);
            for (n = r.length - 1; n >= 0; n--)
                t = r[n], "none" === m.css(t, "display") ? m.show(t) : m.hide(t)
        },
        addStyleSheet: function(e, t, n) {
            "string" == typeof e && (n = t, t = e, e = g);
            var r,
                o = m.getDocument(e);
            n && (n = n.replace("#", k)) && (r = m.get("#" + n, o)), r || (r = m.create("<style>", {
                id: n
            }, o), m.get("head", o).appendChild(r), r.styleSheet ? r.styleSheet.cssText = t : r.appendChild(o.createTextNode(t)))
        },
        innerWidth: 0,
        innerHeight: 0,
        outerWidth: 0,
        outerHeight: 0,
        width: 0,
        height: 0
    }), h.each([S, "height"], function(e) {
        m["inner" + h.ucfirst(e)] = function(t) {
            var n = m.get(t);
            return n && s(n, e, w)
        }, m["outer" + h.ucfirst(e)] = function(t, n) {
            var r = m.get(t);
            return r && s(r, e, n ? 0 : E)
        };
        var t = e === S ? ["Left", "Right"] : ["Top", "Bottom"];
        m[e] = function(n, r) {
            var o = m.get(n);
            if (void 0 === r)
                return o && s(o, e, _);
            if (o) {
                var i = u(o);
                return c(o, i) && (r += l(o, ["padding", "border"], t, i)), m.css(n, e, r)
            }
        }, N[e] = {
            get: function(t, n) {
                var r;
                return n && (r = s(t, e) + "px"), r
            }
        }
    });
    var P = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    };
    h.each(["left", "top"], function(e) {
        N[e] = {
            get: function(t, n) {
                var r,
                    o,
                    i;
                if (n) {
                    if ("static" === (i = m.css(t, "position")))
                        return "auto";
                    if (r = m._getComputedStyle(t, e), (o = "auto" === r) && "relative" === i)
                        return "0px";
                    (o || A.test(r)) && (r = f(t)[e] + "px")
                }
                return r
            }
        }
    });
    var j = /^(?:body|html)$/i
}, function(e, t, n) {
    var r = n(106);
    e.exports = r
}, function(e, t) {
    function n() {
        return arguments[1].toUpperCase()
    }
    function r(e) {
        if (-1 !== e.indexOf("-") && (e = e.replace(y, n)), e in m)
            return m[e];
        if (!i || e in i)
            m[e] = {
                propertyName: e,
                propertyNamePrefix: ""
            };
        else {
            for (var t, r = e.charAt(0).toUpperCase() + e.slice(1), o = 0; o < u; o++) {
                var a = c[o];
                (t = a + r) in i && (m[e] = {
                    propertyName: t,
                    propertyNamePrefix: a
                })
            }
            m[e] = m[e] || null
        }
        return m[e]
    }
    var o,
        i,
        a,
        s,
        l = window,
        c = ["Webkit", "Moz", "O", "ms"],
        u = c.length,
        d = l.document || {},
        f = d && d.documentElement,
        p = !0,
        h = !1,
        v = "ontouchstart" in d && !window.callPhantom,
        m = {},
        g = d.documentMode;
    f && (f.querySelector && 8 !== g && (h = !0), i = f.style, p = "classList" in f, o = "msPointerEnabled" in navigator, a = "pointerEnabled" in navigator);
    var y = /-([a-z])/gi;
    e.exports = {
        isMsPointerSupported: function() {
            return o
        },
        isPointerSupported: function() {
            return a
        },
        isTouchEventSupported: function() {
            return v
        },
        isTouchGestureSupported: function() {
            return v || a || o
        },
        isDeviceMotionSupported: function() {
            return !!l.DeviceMotionEvent
        },
        isHashChangeSupported: function() {
            return "onhashchange" in l && (!g || g > 7)
        },
        isInputEventSupported: function() {
            return "oninput" in l && (!g || g > 9)
        },
        isTransform3dSupported: function() {
            if (void 0 !== s)
                return s;
            if (f && r("transform"))
                try {
                    var e = d.createElement("p"),
                        t = r("transform").propertyName;
                    f.insertBefore(e, f.firstChild), e.style[t] = "translate3d(1px,1px,1px)";
                    var n = l.getComputedStyle(e),
                        o = n.getPropertyValue(t) || n[t];
                    f.removeChild(e), s = void 0 !== o && o.length > 0 && "none" !== o
                } catch (e) {
                    s = !0
                }
            else
                s = !1;
            return s
        },
        isClassListSupported: function() {
            return p
        },
        isQuerySelectorSupported: function() {
            return h
        },
        getCssVendorInfo: function(e) {
            return r(e)
        }
    }
}, function(e, t, n) {
    function r(e) {
        var t,
            n = this,
            r = n.length;
        for (t = 0; t < r && !1 !== e(n[t], t); t++)
            ;
    }
    function o(e) {
        var t = e.substr(1);
        if (!t)
            throw new Error("An invalid or illegal string was specified for selector.");
        return t
    }
    function i(e) {
        var t = e.charAt(0);
        return "#" === t ? a(o(e)) : "." === t ? s(o(e)) : l(e)
    }
    function a(e) {
        return function(t) {
            var n = v._getElementById(e, y);
            return n && v._contains(t, n) ? [n] : []
        }
    }
    function s(e) {
        return function(t) {
            return h(t, e)
        }
    }
    function l(e) {
        return function(t) {
            return t.getElementsByTagName(e)
        }
    }
    function c(e) {
        return !e.match(/,|\+|=|~|\[|\]|:|>|\||\$|\^|\*|\(|\)|[\w-]+\.[\w-]+|[\w-]+#[\w-]+/)
    }
    function u(e, t) {
        var n,
            o,
            a,
            s,
            l = "string" == typeof e,
            d = void 0 !== t ? u(t) : (s = 1) && [y],
            f = d.length;
        if (e) {
            if (l) {
                if (e = I(e), s)
                    if ("body" === e)
                        n = [y.body];
                    else if (O.test(e))
                        n = x(h(y, RegExp.$1));
                    else if (A.test(e))
                        n = (a = v._getElementById(RegExp.$2, y)) && a.nodeName.toLowerCase() === RegExp.$1 ? [a] : [];
                    else if (k.test(e))
                        n = (a = v._getElementById(e.substr(1), y)) ? [a] : [];
                    else if (M.test(e))
                        n = x(y.getElementsByTagName(e));
                    else if (c(e)) {
                        var p,
                            g,
                            b,
                            _ = e.split(/\s+/),
                            w = d;
                        for (o = 0, p = _.length; o < p; o++)
                            _[o] = i(_[o]);
                        for (o = 0, p = _.length; o < p; o++) {
                            var S,
                                N = _[o],
                                L = [];
                            for (g = 0, b = w.length; g < b; g++)
                                S = N(w[g]), L.push.apply(L, x(S));
                            if (!(w = L).length)
                                break
                        }
                        n = w && w.length > 1 ? v.unique(w) : w
                    }
                if (!n) {
                    for (n = [], o = 0; o < f; o++)
                        C.apply(n, v._selectInternal(e, d[o]));
                    n.length > 1 && f > 1 && v.unique(n)
                }
            } else if (n = e.nodeType || m.isWindow(e) ? [e] : e.getDOMNodes ? e.getDOMNodes() : E(e) ? e : T(e) ? x(e) : [e], !s) {
                var R,
                    P = n,
                    j = P.length;
                for (n = [], o = 0; o < j; o++)
                    for (R = 0; R < f; R++)
                        if (v._contains(d[R], P[o])) {
                            n.push(P[o]);
                            break
                        }
            }
        } else
            n = [];
        return n.each = r, n
    }
    function d(e, t) {
        var n = e && f(e, "class");
        return n && (n = n.replace(/[\r\t\n]/g, S)) && (S + n + S).indexOf(S + t + S) > -1
    }
    function f(e, t) {
        var n = e && e.getAttributeNode(t);
        if (n && n.specified)
            return "value" in n ? n.value : n.nodeValue
    }
    function p(e, t) {
        return "*" === t || e.nodeName.toLowerCase() === t.toLowerCase()
    }
    var h,
        v = n(97),
        m = n(67),
        g = n(108),
        y = document,
        b = y.documentElement,
        _ = b.matches || b.webkitMatchesSelector || b.mozMatchesSelector || b.oMatchesSelector || b.msMatchesSelector,
        w = "getElementsByClassName" in y,
        E = m.isArray,
        x = m.makeArray,
        T = v.isDomNodeList,
        S = " ",
        C = Array.prototype.push,
        O = /^\.([\w-]+)$/,
        k = /^#([\w-]+)$/,
        M = /^([\w-])+$/,
        A = /^([\w-]+)#([\w-]+)$/,
        N = /^(?:#([\w-]+))?\s*([\w-]+|\*)?\.?([\w-]+)?$/,
        I = m.trim;
    h = w ? function(e, t) {
        return e.getElementsByClassName(t)
    } : function(e, t) {
        var n,
            r,
            o = [],
            i = e.getElementsByTagName("*");
        for (t = " " + t + " ", n = 0; n < i.length; n++)
            (" " + ((r = i[n]).className || r.getAttribute("class")) + " ").indexOf(t) > -1 && o.push(r);
        return o
    };
    var L = "sourceIndex" in b ? function(e, t) {
            return e.sourceIndex - t.sourceIndex
        } : function(e, t) {
            return e.compareDocumentPosition && t.compareDocumentPosition ? 4 & e.compareDocumentPosition(t) ? -1 : 1 : e.compareDocumentPosition ? -1 : 1
        },
        R = g && g.matches ? g.matches : function(e, t) {
            for (var n, r = [], o = 0, i = t.length; o < i; o++)
                n = t[o], _.call(n, e) && r.push(n);
            return r
        };
    m.mix(v, {
        _getElementsByTagName: function(e, t) {
            return x(t.querySelectorAll(e))
        },
        _getElementById: function(e, t) {
            return t.getElementById(e)
        },
        _getSimpleAttr: f,
        _isTag: p,
        _hasSingleClass: d,
        _selectInternal: g || function(e, t) {
            return x(t.querySelectorAll(e))
        },
        query: u,
        get: function(e, t) {
            return u(e, t)[0] || null
        },
        unique: function() {
            function e(e, n) {
                return e === n ? (t = !0, 0) : L(e, n)
            }
            var t,
                n = !0;
            return [0, 0].sort(function() {
                return n = !1, 0
            }), function(r) {
                if (t = n, r.sort(e), t)
                    for (var o = 1, i = r.length; o < i;)
                        r[o] === r[o - 1] ? (r.splice(o, 1), --i) : o++;
                return r
            }
        }(),
        filter: function(e, t, n) {
            var r,
                o,
                i,
                a,
                s = u(e, n);
            return "string" == typeof t && (t = I(t)) && (i = N.exec(t)) && (r = i[1], o = i[2], a = i[3], r ? !r || o || a || (t = function(e) {
                return f(e, "id") === r
            }) : t = function(e) {
                var t = !0,
                    n = !0;
                return o && (t = p(e, o)), a && (n = d(e, a)), n && t
            }), "function" == typeof t ? m.filter(s, t) : R(t, s)
        },
        test: function(e, t, n) {
            var r = u(e, n);
            return r.length && v.filter(r, t, n).length === r.length
        }
    })
}, function(e, t) {
    e.exports = null
}, function(e, t, n) {
    function r(e, t, n, r, i, c, u) {
        if (!(e = s.get(e)))
            return null;
        if (0 === t)
            return e;
        if (c || (e = e[n]), !e)
            return null;
        i = i && s.get(i) || null, void 0 === t && (t = 1);
        var d,
            f,
            p = [],
            h = a.isArray(t);
        for ("number" == typeof t && (d = 0, f = t, t = function() {
            return ++d === f
        }); e && e !== i && (!(e.nodeType === l.ELEMENT_NODE || e.nodeType === l.TEXT_NODE && u) || !o(e, t) || r && !r(e) || (p.push(e), h));)
            e = e[n];
        return h ? p : p[0] || null
    }
    function o(e, t) {
        if (!t)
            return !0;
        if (a.isArray(t)) {
            var n,
                r = t.length;
            if (!r)
                return !0;
            for (n = 0; n < r; n++)
                if (s.test(e, t[n]))
                    return !0
        } else if (s.test(e, t))
            return !0;
        return !1
    }
    function i(e, t, n, r) {
        var o,
            i,
            c,
            u = [],
            d = s.get(e),
            f = d;
        if (d && n && (f = d.parentNode), f) {
            for (o = a.makeArray(f.childNodes), i = 0; i < o.length; i++)
                c = o[i], (r || c.nodeType === l.ELEMENT_NODE) && c !== d && u.push(c);
            t && (u = s.filter(u, t))
        }
        return u
    }
    var a = n(67),
        s = n(97),
        l = s.NodeType;
    a.mix(s, {
        _contains: function(e, t) {
            return !!(16 & e.compareDocumentPosition(t))
        },
        closest: function(e, t, n, o) {
            return r(e, t, "parentNode", function(e) {
                return e.nodeType !== l.DOCUMENT_FRAGMENT_NODE
            }, n, !0, o)
        },
        parent: function(e, t, n) {
            return r(e, t, "parentNode", function(e) {
                return e.nodeType !== l.DOCUMENT_FRAGMENT_NODE
            }, n, void 0)
        },
        first: function(e, t, n) {
            var o = s.get(e);
            return r(o && o.firstChild, t, "nextSibling", void 0, void 0, !0, n)
        },
        last: function(e, t, n) {
            var o = s.get(e);
            return r(o && o.lastChild, t, "previousSibling", void 0, void 0, !0, n)
        },
        next: function(e, t, n) {
            return r(e, t, "nextSibling", void 0, void 0, void 0, n)
        },
        prev: function(e, t, n) {
            return r(e, t, "previousSibling", void 0, void 0, void 0, n)
        },
        siblings: function(e, t, n) {
            return i(e, t, !0, n)
        },
        children: function(e, t) {
            return i(e, t, void 0)
        },
        contents: function(e, t) {
            return i(e, t, void 0, 1)
        },
        contains: function(e, t) {
            return e = s.get(e), t = s.get(t), !(!e || !t) && s._contains(e, t)
        },
        index: function(e, t) {
            var n,
                r,
                o = s.query(e),
                i = 0,
                c = o[0];
            if (!t) {
                if (!(c && c.parentNode))
                    return -1;
                for (n = c; n = n.previousSibling;)
                    n.nodeType === l.ELEMENT_NODE && i++;
                return i
            }
            return r = s.query(t), "string" == typeof t ? a.indexOf(c, r) : a.indexOf(r[0], o)
        },
        equals: function(e, t) {
            if (e = s.query(e), t = s.query(t), e.length !== t.length)
                return !1;
            for (var n = e.length; n >= 0; n--)
                if (e[n] !== t[n])
                    return !1;
            return !0
        }
    })
}, function(e, t, n) {
    function r(e) {
        var t = this;
        return e.config.crossDomain ? (t.io = e, t) : new (i.getTransport("*"))(e)
    }
    var o = n(67),
        i = n(66);
    i.setupConfig({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /javascript|ecmascript/
        },
        converters: {
            text: {
                script: function(e) {
                    return o.globalEval(e), e
                }
            }
        }
    }), o.augment(r, {
        send: function() {
            var e = this,
                t = e.io,
                n = t.config;
            e.script = i.getScript(t._getUrlForSend(), {
                charset: n.scriptCharset,
                success: function() {
                    e._callback("success")
                },
                error: function() {
                    e._callback("error")
                }
            })
        },
        _callback: function(e, t) {
            var n = this,
                r = n.script,
                o = n.io;
            r && (n.script = void 0, t || ("error" !== e ? o._ioReady(200, "success") : "error" === e && o._ioReady(500, "script error")))
        },
        abort: function() {
            this._callback(0, 1)
        }
    }), i.setupTransport("script", r)
}, function(e, t, n) {
    var r = n(67),
        o = n(66),
        i = window;
    o.setupConfig({
        jsonp: "callback",
        jsonpCallback: function() {
            return r.guid("jsonp")
        }
    }), o.addPreprocessor("start", function(e) {
        var t = e.io,
            n = t.config,
            o = n.dataType;
        if ("jsonp" === o[0]) {
            delete n.contentType;
            var a,
                s,
                l = n.jsonpCallback,
                c = "function" == typeof l ? l() : l,
                u = i[c];
            n.uri.query[n.jsonp] = c, i[c] = function(e) {
                arguments.length > 1 && (e = r.makeArray(arguments)), a = [e]
            }, t.fin(function() {
                if (i[c] = u, void 0 === u)
                    try {
                        delete i[c]
                    } catch (e) {}
                else
                    a && u(a[0])
            }), (s = n.converters).script = s.script || {}, s.script.json = function() {
                if (!a)
                    throw new Error("not call jsonpCallback: " + c);
                return a[0]
            }, o.length = 2, o[0] = "script", o[1] = "json"
        }
    })
}, function(e, t, n) {
    function r(e) {
        var t,
            n,
            r,
            i = e.responseText,
            a = e.responseXML,
            s = e.config,
            l = s.converters,
            c = s.contents,
            u = s.dataType;
        if (i || a) {
            for (n = e.mimeType || e.getResponseHeader("Content-Type"); "*" === u[0];)
                u.shift();
            if (!u.length)
                for (t in c)
                    if (c[t].test(n)) {
                        u[0] !== t && u.unshift(t);
                        break
                    }
            u[0] = u[0] || "text";
            for (var d = 0; d < u.length; d++) {
                if ("text" === u[d] && void 0 !== i) {
                    r = i;
                    break
                }
                if ("xml" === u[d] && void 0 !== a) {
                    r = a;
                    break
                }
            }
            if (!r) {
                var f = {
                    text: i,
                    xml: a
                };
                o.each(["text", "xml"], function(e) {
                    var t = u[0];
                    if (l[e] && l[e][t] && f[e])
                        return u.unshift(e), r = "text" === e ? i : a, !1
                })
            }
        }
        for (var p = u[0], h = 1; h < u.length; h++) {
            t = u[h];
            var v = l[p] && l[p][t];
            if (!v)
                throw new Error("no covert for " + p + " => " + t);
            r = v(r), p = t
        }
        e.responseData = r
    }
    var o = n(67),
        i = n(80),
        a = n(66),
        s = n(82),
        l = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm;
    o.extend(a, i, {
        setRequestHeader: function(e, t) {
            var n = this;
            return n.requestHeaders[e] = t, n
        },
        getAllResponseHeaders: function() {
            var e = this;
            return 2 === e.state ? e.responseHeadersString : null
        },
        getResponseHeader: function(e) {
            var t,
                n,
                r = this;
            if (e = e.toLowerCase(), 2 === r.state) {
                if (!(n = r.responseHeaders))
                    for (n = r.responseHeaders = {}; t = l.exec(r.responseHeadersString);)
                        n[t[1].toLowerCase()] = t[2];
                t = n[e]
            }
            return void 0 === t ? null : t
        },
        overrideMimeType: function(e) {
            var t = this;
            return t.state || (t.mimeType = e), t
        },
        abort: function(e) {
            var t = this;
            return e = e || "abort", t.transport && t.transport.abort(e), t._ioReady(0, e), t
        },
        getNativeXhr: function() {
            var e = this.transport;
            return e ? e.nativeXhr : null
        },
        _ioReady: function(e, t) {
            var n = this;
            if (2 !== n.state) {
                n.state = 2, n.readyState = 4;
                var o;
                if (e >= 200 && e < 300 || 304 === e)
                    if (304 === e)
                        t = "not modified", o = !0;
                    else
                        try {
                            r(n), t = "success", o = !0
                        } catch (e) {
                            console.error(e.stack || e), setTimeout(function() {
                                throw e
                            }, 0), t = e.message || "parser error"
                        }
                else
                    e < 0 && (e = 0);
                n.status = e, n.statusText = t;
                var i,
                    s = n.defer,
                    l = n.config;
                (i = n.timeoutTimer) && (clearTimeout(i), n.timeoutTimer = 0);
                var c,
                    u = o ? "success" : "error",
                    d = [n.responseData, t, n],
                    f = l.context,
                    p = {
                        io: n
                    };
                (c = l[u]) && c.apply(f, d), (c = l.complete) && c.apply(f, d), a.fire(u, p), a.fire("complete", p), s[o ? "resolve" : "reject"](d)
            }
        },
        _getUrlForSend: function() {
            var e = this.config,
                t = e.uri,
                n = t.search || "";
            return delete t.search, n && !o.isEmptyObject(t.query) && (n = "&" + n.substring(1)), s.stringify(t, e.serializeArray) + n
        }
    })
}, function(e, t, n) {
    function r(e) {
        var t,
            n = l.guid("io-iframe"),
            r = u.getEmptyIframeSrc();
        return t = e.iframe = u.create("<iframe " + (r ? ' src="' + r + '" ' : "") + ' id="' + n + '" name="' + n + '" style="position:absolute;left:-9999px;top:-9999px;"/>'), u.prepend(t, p.body || p.documentElement), t
    }
    function o(e, t, n) {
        var r,
            o,
            i,
            a = [];
        return l.each(e, function(e, s) {
            for ((r = l.isArray(e)) || (e = [e]), o = 0; o < e.length; o++)
                (i = p.createElement("input")).type = "hidden", i.name = s + (r && n ? "[]" : ""), i.value = e[o], u.append(i, t), a.push(i)
        }), a
    }
    function i(e) {
        u.remove(e)
    }
    function a(e) {
        var t,
            n = this,
            r = n.form,
            o = n.io,
            a = e.type,
            s = o.iframe;
        if (s)
            if ("abort" === a && 6 === f.ie ? setTimeout(function() {
                u.attr(r, n.attrs)
            }, 0) : u.attr(r, n.attrs), i(this.fields), f.removeEvent(s, "load", n._callback), f.removeEvent(s, "error", n._callback), setTimeout(function() {
                u.remove(s)
            }, m), o.iframe = null, "load" === a)
                try {
                    (t = s.contentWindow.document) && t.body && (o.responseText = u.html(t.body), l.startsWith(o.responseText, "<?xml") && (o.responseText = void 0)), t && t.XMLDocument ? o.responseXML = t.XMLDocument : o.responseXML = t, t ? o._ioReady(h, "success") : o._ioReady(v, "parser error")
                } catch (e) {
                    o._ioReady(v, "parser error")
                }
            else
                "error" === a && o._ioReady(v, "error")
    }
    function s(e) {
        this.io = e, this._callback = l.bind(a, this)
    }
    var l = n(114),
        c = n(75),
        u = n(95),
        d = n(63),
        f = d._util,
        p = document,
        h = 200,
        v = 500,
        m = 30,
        g = l.clone(d.getConfig().converters.text);
    g.json = function(e) {
        return l.parseJson(l.unEscapeHtml(e))
    }, d.setupConfig({
        converters: {
            iframe: g,
            text: {
                iframe: function(e) {
                    return e
                }
            },
            xml: {
                iframe: function(e) {
                    return e
                }
            }
        }
    }), l.augment(s, {
        send: function() {
            function e() {
                f.addEvent(n, "load", a._callback), f.addEvent(n, "error", a._callback), p.submit()
            }
            var t,
                n,
                i,
                a = this,
                s = a.io,
                l = s.config,
                d = l.data,
                p = u.get(l.form);
            a.attrs = {
                target: u.attr(p, "target") || "",
                action: u.attr(p, "action") || "",
                encoding: u.attr(p, "encoding"),
                enctype: u.attr(p, "enctype"),
                method: u.attr(p, "method")
            }, a.form = p, n = r(s), u.attr(p, {
                target: n.id,
                action: s._getUrlForSend(),
                method: "post",
                enctype: "multipart/form-data",
                encoding: "multipart/form-data"
            }), d && (i = c.parse(d)), i && (t = o(i, p, l.serializeArray)), a.fields = t, 6 === f.ie ? setTimeout(e, 0) : e()
        },
        abort: function() {
            this._callback({
                type: "abort"
            })
        }
    }), d.setupTransport("iframe", s)
}, function(e, t, n) {
    e.exports = n(115)
}, function(e, t, n) {
    var r = n(67);
    n(116), n(117), n(118), n(119), n(120), e.exports = r
}, function(e, t, n) {
    var r = Array.prototype,
        o = r.lastIndexOf,
        i = r.every,
        a = r.some,
        s = n(67);
    s.mix(s, {
        lastIndexOf: function(e, t, n) {
            return void 0 === n ? o.call(t, e) : o.call(t, e, n)
        },
        unique: function(e, t) {
            var n = e.slice();
            t && n.reverse();
            for (var r, o, i = 0; i < n.length;) {
                for (o = n[i]; (r = s.lastIndexOf(o, n)) !== i;)
                    n.splice(r, 1);
                i += 1
            }
            return t && n.reverse(), n
        },
        every: function(e, t, n) {
            return i.call(e, t, n || this)
        },
        some: function(e, t, n) {
            return a.call(e, t, n || this)
        }
    })
}, function(e, t, n) {
    var r,
        o,
        i = n(67),
        a = "",
        s = {
            "&amp;": "&",
            "&gt;": ">",
            "&lt;": "<",
            "&#x60;": "`",
            "&#x2F;": "/",
            "&quot;": '"',
            "&#x27;": "'"
        },
        l = {},
        c = /[&<>"'`]/,
        u = /[\-#$\^*()+\[\]{}|\\,.?\s]/g;
    !function() {
        for (var e in s)
            l[s[e]] = e
    }(), r = function() {
        var e = a;
        for (var t in s)
            e += s[t] + "|";
        return e = e.slice(0, -1), r = new RegExp(e, "g")
    }(), o = function() {
        var e = a;
        for (var t in l)
            e += l[t] + "|";
        return e += "&#(\\d{1,5});", o = new RegExp(e, "g")
    }(), i.mix(i, {
        escapeHtml: function(e) {
            return e || 0 === e ? (e = "" + e, c.test(e) ? (e + "").replace(r, function(e) {
                return l[e]
            }) : e) : ""
        },
        escapeRegExp: function(e) {
            return e.replace(u, "\\$&")
        },
        unEscapeHtml: function(e) {
            return e.replace(o, function(e, t) {
                return s[e] || String.fromCharCode(+t)
            })
        },
        fromUnicode: function(e) {
            return e.replace(/\\u([a-f\d]{4})/gi, function(e, t) {
                return String.fromCharCode(parseInt(t, 16))
            })
        }
    }), i.escapeHTML = i.escapeHtml, i.unEscapeHTML = i.unEscapeHtml
}, function(e, t, n) {
    var r = n(67);
    r.mix(r, {
        throttle: function(e, t, n) {
            if (-1 === (t = t || 150))
                return function() {
                    e.apply(n || this, arguments)
                };
            var o = r.now();
            return function() {
                var i = r.now();
                i - o > t && (o = i, e.apply(n || this, arguments))
            }
        }
    })
}, function(e, t, n) {
    (function(e) {
        function t(e, t) {
            return null !== e && e !== i && e[t] !== i
        }
        function r(e, t, n) {
            return delete e[l], delete t[l], n
        }
        function o(e, n) {
            if (e[l] === n && n[l] === e)
                return !0;
            e[l] = n, n[l] = e;
            for (var o in n)
                if (!t(e, o) && t(n, o))
                    return r(e, n, !1);
            for (o in e)
                if (!t(n, o) && t(e, o))
                    return r(e, n, !1);
            for (o in n)
                if (o !== l && !a.equals(e[o], n[o]))
                    return r(e, n, !1);
            return a.isArray(e) && a.isArray(n) && e.length !== n.length ? r(e, n, !1) : r(e, n, !0)
        }
        var i,
            a = n(67),
            s = "undefined" == typeof window ? e : window,
            l = "__~ks_compared";
        !function(e, t) {
            for (var n in t)
                e[n] = t[n]
        }(a, {
            equals: function(e, t) {
                return e === t || (e === i || null === e || t === i || null === t ? null == e && null == t : e instanceof Date && t instanceof Date ? e.getTime() === t.getTime() : "string" == typeof e && "string" == typeof t ? e === t : "number" == typeof e && "number" == typeof t ? e === t : "object" == typeof e && "object" == typeof t ? o(e, t) : e === t)
            },
            namespace: function(e, t) {
                var n,
                    r,
                    o;
                for (o = e.split("."), n = t || s, r = 0; r < o.length; ++r)
                    n = n[o[r]] = n[o[r]] || {};
                return n
            }
        })
    }).call(t, function() {
        return this
    }())
}, function(e, t, n) {
    var r = n(67),
        o = "undefined" != typeof window ? window : {},
        i = o.document || {},
        a = /^#?([\w-]+)$/;
    r.mix(r, {
        parseXml: function(e) {
            if (e.documentElement)
                return e;
            var t;
            if (o.DOMParser ? t = (new DOMParser).parseFromString(e, "text/xml") : ((t = new ActiveXObject("Microsoft.XMLDOM")).async = !1, t.loadXML(e)), !t || !t.documentElement || t.getElementsByTagName("parsererror").length)
                throw new Error("Invalid XML: " + e);
            return t
        },
        available: function(e, t) {
            e = (e + "").match(a)[1];
            var n = 1,
                o = r.later(function() {
                    if (++n > 500)
                        o.cancel();
                    else {
                        var r = i.getElementById(e);
                        r && (t(r), o.cancel())
                    }
                }, 40, !0)
        }
    }), r.parseXML = r.parseXml
}, function(e, t) {
    e.exports = {
        app: "kissy",
        style: "app/common/sufei-tb.css"
    }
}, function(e, t, n) {
    "use strict";
    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = r(n(1)),
        i = r(n(123)),
        a = r(n(124)),
        s = r(n(125)),
        l = r(n(126));
    o.default.use(i.default);
    var c = new i.default.Store({
        state: a.default,
        mutations: s.default,
        actions: l.default,
        strict: !0
    });
    t.default = c
}, function(e, t, n) {
    !function(t, n) {
        e.exports = n()
    }(0, function() {
        "use strict";
        function e(e) {
            return e.reduce(function(e, t) {
                return Object.keys(t).forEach(function(n) {
                    var r = e[n];
                    r ? Array.isArray(r) ? e[n] = r.concat(t[n]) : e[n] = [r].concat(t[n]) : e[n] = t[n]
                }), e
            }, {})
        }
        function t(e) {
            return null !== e && "object" === (void 0 === e ? "undefined" : s(e))
        }
        function n(e, t) {
            return t.reduce(function(e, t) {
                return e[t]
            }, e)
        }
        function r(e) {
            if (!d) {
                var t = function() {},
                    n = e.$watch(t, t);
                d = e._watchers[0].constructor, n()
            }
            return d
        }
        function o(e) {
            return f || (f = e._data.__ob__.dep.constructor), f
        }
        function i(e) {
            p && (p.emit("vuex:init", e), p.on("vuex:travel-to-state", function(t) {
                e.replaceState(t)
            }), e.subscribe(function(e, t) {
                p.emit("vuex:mutation", e, t)
            }))
        }
        function a(e) {
            v ? console.warn("[vuex] already installed. Vue.use(Vuex) should be called only once.") : h(v = e)
        }
        var s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            },
            l = function(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            },
            c = function() {
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
            u = function(e) {
                if (Array.isArray(e)) {
                    for (var t = 0, n = Array(e.length); t < e.length; t++)
                        n[t] = e[t];
                    return n
                }
                return Array.from(e)
            },
            d = void 0,
            f = void 0,
            p = "undefined" != typeof window && window.__VUE_DEVTOOLS_GLOBAL_HOOK__,
            h = function(e) {
                function t() {
                    var e = this.$options,
                        t = e.store,
                        n = e.vuex;
                    if (t ? this.$store = t : e.parent && e.parent.$store && (this.$store = e.parent.$store), n) {
                        this.$store || console.warn("[vuex] store not injected. make sure to provide the store option in your root component.");
                        var r = n.state,
                            o = n.actions,
                            a = n.getters;
                        if (r && !a && (console.warn("[vuex] vuex.state option will been deprecated in 1.0. Use vuex.getters instead."), a = r), a) {
                            e.computed = e.computed || {};
                            for (var l in a)
                                i(this, l, a[l])
                        }
                        if (o) {
                            e.methods = e.methods || {};
                            for (var c in o)
                                e.methods[c] = s(this.$store, o[c], c)
                        }
                    }
                }
                function n() {
                    throw new Error("vuex getter properties are read-only.")
                }
                function i(e, t, r) {
                    "function" != typeof r ? console.warn("[vuex] Getter bound to key 'vuex.getters." + t + "' is not a function.") : Object.defineProperty(e, t, {
                        enumerable: !0,
                        configurable: !0,
                        get: a(e.$store, r),
                        set: n
                    })
                }
                function a(e, t) {
                    var n = e._getterCacheId;
                    if (t[n])
                        return t[n];
                    var i = e._vm,
                        a = r(i),
                        s = o(i),
                        l = new a(i, function(e) {
                            return t(e.state)
                        }, null, {
                            lazy: !0
                        }),
                        c = function() {
                            return l.dirty && l.evaluate(), s.target && l.depend(), l.value
                        };
                    return t[n] = c, c
                }
                function s(e, t, n) {
                    return "function" != typeof t && console.warn("[vuex] Action bound to key 'vuex.actions." + n + "' is not a function."), function() {
                        for (var n = arguments.length, r = Array(n), o = 0; o < n; o++)
                            r[o] = arguments[o];
                        return t.call.apply(t, [this, e].concat(r))
                    }
                }
                if (Number(e.version.split(".")[0]) >= 2) {
                    var l = e.config._lifecycleHooks.indexOf("init") > -1;
                    e.mixin(l ? {
                        init: t
                    } : {
                        beforeCreate: t
                    })
                } else
                    !function() {
                        var n = e.prototype._init;
                        e.prototype._init = function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            e.init = e.init ? [t].concat(e.init) : t, n.call(this, e)
                        }
                    }();
                var c = e.config.optionMergeStrategies.computed;
                e.config.optionMergeStrategies.vuex = function(e, t) {
                    return e ? t ? {
                        getters: c(e.getters, t.getters),
                        state: c(e.state, t.state),
                        actions: c(e.actions, t.actions)
                    } : e : t
                }
            },
            v = void 0,
            m = 0,
            g = function() {
                function o() {
                    var e = this,
                        t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        n = t.state,
                        r = void 0 === n ? {} : n,
                        a = t.mutations,
                        s = void 0 === a ? {} : a,
                        c = t.modules,
                        u = void 0 === c ? {} : c,
                        d = t.plugins,
                        f = void 0 === d ? [] : d,
                        p = t.strict,
                        h = void 0 !== p && p;
                    l(this, o), this._getterCacheId = "vuex_store_" + m++, this._dispatching = !1, this._rootMutations = this._mutations = s, this._modules = u, this._subscribers = [];
                    var g = this.dispatch;
                    if (this.dispatch = function() {
                        for (var t = arguments.length, n = Array(t), r = 0; r < t; r++)
                            n[r] = arguments[r];
                        g.apply(e, n)
                    }, !v)
                        throw new Error("[vuex] must call Vue.use(Vuex) before creating a store instance.");
                    var y = v.config.silent;
                    v.config.silent = !0, this._vm = new v({
                        data: {
                            state: r
                        }
                    }), v.config.silent = y, this._setupModuleState(r, u), this._setupModuleMutations(u), h && this._setupMutationCheck(), i(this), f.forEach(function(t) {
                        return t(e)
                    })
                }
                return c(o, [{
                    key: "replaceState",
                    value: function(e) {
                        this._dispatching = !0, this._vm.state = e, this._dispatching = !1
                    }
                }, {
                    key: "dispatch",
                    value: function(e) {
                        for (var t = this, n = arguments.length, r = Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)
                            r[o - 1] = arguments[o];
                        var i = !1,
                            a = !1;
                        "object" === (void 0 === e ? "undefined" : s(e)) && e.type && 1 === arguments.length && (a = !0, r = e, e.silent && (i = !0), e = e.type);
                        var l = this._mutations[e],
                            c = this.state;
                        l ? (this._dispatching = !0, Array.isArray(l) ? l.forEach(function(e) {
                            a ? e(c, r) : e.apply(void 0, [c].concat(u(r)))
                        }) : a ? l(c, r) : l.apply(void 0, [c].concat(u(r))), this._dispatching = !1, i || function() {
                            var n = a ? r : {
                                type: e,
                                payload: r
                            };
                            t._subscribers.forEach(function(e) {
                                return e(n, c)
                            })
                        }()) : console.warn("[vuex] Unknown mutation: " + e)
                    }
                }, {
                    key: "watch",
                    value: function(e, t, n) {
                        var r = this;
                        if ("function" == typeof e)
                            return this._vm.$watch(function() {
                                return e(r.state)
                            }, t, n);
                        console.error("Vuex store.watch only accepts function.")
                    }
                }, {
                    key: "subscribe",
                    value: function(e) {
                        var t = this._subscribers;
                        return t.indexOf(e) < 0 && t.push(e), function() {
                            var n = t.indexOf(e);
                            n > -1 && t.splice(n, 1)
                        }
                    }
                }, {
                    key: "hotUpdate",
                    value: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            t = e.mutations,
                            n = e.modules;
                        this._rootMutations = this._mutations = t || this._rootMutations, this._setupModuleMutations(n || this._modules)
                    }
                }, {
                    key: "_setupModuleState",
                    value: function(e, n) {
                        var r = this;
                        t(n) && Object.keys(n).forEach(function(t) {
                            var o = n[t];
                            v.set(e, t, o.state || {}), r._setupModuleState(e[t], o.modules)
                        })
                    }
                }, {
                    key: "_setupModuleMutations",
                    value: function(t) {
                        var n = this._modules;
                        Object.keys(t).forEach(function(e) {
                            n[e] = t[e]
                        });
                        var r = this._createModuleMutations(n, []);
                        this._mutations = e([this._rootMutations].concat(u(r)))
                    }
                }, {
                    key: "_createModuleMutations",
                    value: function(r, o) {
                        var i = this;
                        return t(r) ? Object.keys(r).map(function(t) {
                            var a = r[t],
                                s = o.concat(t),
                                l = i._createModuleMutations(a.modules, s);
                            if (!a || !a.mutations)
                                return e(l);
                            var c = {};
                            return Object.keys(a.mutations).forEach(function(e) {
                                var t = a.mutations[e];
                                c[e] = function(e) {
                                    for (var r = arguments.length, o = Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
                                        o[i - 1] = arguments[i];
                                    t.apply(void 0, [n(e, s)].concat(o))
                                }
                            }), e([c].concat(u(l)))
                        }) : []
                    }
                }, {
                    key: "_setupMutationCheck",
                    value: function() {
                        var e = this;
                        new (r(this._vm))(this._vm, "state", function() {
                            if (!e._dispatching)
                                throw new Error("[vuex] Do not mutate vuex store state outside mutation handlers.")
                        }, {
                            deep: !0,
                            sync: !0
                        })
                    }
                }, {
                    key: "state",
                    get: function() {
                        return this._vm.state
                    },
                    set: function(e) {
                        throw new Error("[vuex] Use store.replaceState() to explicit replace store state.")
                    }
                }]), o
            }();
        return "undefined" != typeof window && window.Vue && a(window.Vue), {
            Store: g,
            install: a
        }
    })
}, function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.default = {
        name: "tblive",
        video: null,
        itemList: [],
        hotList: [],
        replayVideos: [],
        moreVideos: [],
        msgScope: null,
        userInfo: null,
        newShare: !1,
        cacheItemList: [],
        toastMsg: ""
    }
}, function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = {
        INCREMENT: function(e) {
            e.count++
        },
        FETACH_LIVE_DETAIL: function(e, t) {
            e.video = t
        },
        FETCH_REPLAY_VIDEOS: function(e, t) {
            e.replayVideos = t
        },
        FETCH_MORE_VIDEOS: function(e, t) {
            e.moreVideos = t
        },
        FETCH_ITEM_LIST: function(e, t, n) {
            e.itemList = t, e.hotList = n
        },
        INIT_MSG_SDK: function(e, t) {
            e.msgScope = t
        },
        LOGIN: function(e) {},
        SUBSCTIBE_PUB: function(e, t) {
            e.video.broadCaster.subscribe = t
        },
        FOLLOW_PUB: function(e, t) {
            e.video.broadCaster.isFollow = t
        },
        ITEM_NEW_SHARE: function(e, t) {
            e.newShare = !0;
            e.itemList.length, e.cacheItemList.length;
            e.cacheItemList.push({
                goodsIndex: t.goodsIndex,
                goodsList: t.goodslist
            }), Array.isArray(t)
        },
        ITEM_MERGE: function(e) {
            e.newShare = !1, e.cacheItemList.reverse(), e.itemList = e.cacheItemList.concat(e.itemList), e.cacheItemList.length = 0
        },
        VIDEO_STATUS_UPDATE: function(e, t) {
            e.video.status = t
        },
        SHOW_MSG: function(e, t, n) {
            e.toastMsg = t
        },
        HIDE_MSG: function(e, t) {
            e.toastMsg = ""
        },
        USER_INFO: function(e, t) {
            e.userInfo = t
        }
    };
    t.default = n
}, function(e, t, n) {
    "use strict";
    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = r(n(53)),
        i = r(n(127)),
        a = {
            liveDetail: window.apis.liveDetail,
            replayVideos: "/api/broadcaster_info/1.0",
            videoList: "/api/video_list/1.0",
            moreVideos: "/api/get_videos/1.0",
            itemList: "/api/item_list/1.0",
            subscribe: "/api/subscribe/1.0",
            unsubscribe: "/api/unsubscribe/1.0",
            follow: "/api/follow/1.0",
            userInfo: "/api/user_info/1.0"
        },
        s = {
            increment: function(e) {
                var t = e.dispatch;
                e.state;
                t("INCREMENT")
            },
            fetchVideoDetail: function(e) {
                var t = e.dispatch;
                e.state;
                o.default.ajax({
                    type: "get",
                    url: a.liveDetail,
                    data: {
                        creatorId: window.lib.env.params.userId || "",
                        liveId: window.lib.env.params.feedId || ""
                    }
                }).then(function(e) {
                    e.success && t("FETACH_LIVE_DETAIL", e.result)
                })
            },
            fetchReplayVideos: function(e) {
                var t = e.dispatch,
                    n = e.state;
                window.lib.appear.init({
                    once: !0,
                    cls: "appear-replay-videos",
                    onAppear: function() {
                        o.default.ajax({
                            type: "get",
                            url: a.replayVideos,
                            data: {
                                accountId: n.video.accountId,
                                index: 0,
                                page: 20
                            }
                        }).then(function(e) {
                            if (e.success) {
                                var n = e.result.model || [];
                                t("FETCH_REPLAY_VIDEOS", n)
                            }
                        })
                    }
                }).fire()
            },
            fetchMoreVideos: function(e) {
                var t = e.dispatch,
                    n = (e.state, this);
                window.lib.appear.init({
                    once: !0,
                    cls: "appear-more-videos",
                    onAppear: function() {
                        o.default.ajax({
                            type: "get",
                            url: a.moreVideos,
                            data: {
                                sortType: "hot"
                            }
                        }).then(function(e) {
                            if (e.success) {
                                var r = e.result.model.dataList.filter(function(e) {
                                    return "video" === e.type && e.accountId != n.video.accountId
                                }) || [];
                                r.length > 8 && (r.length = 8), t("FETCH_MORE_VIDEOS", r)
                            }
                        }).catch(function(e) {
                            console.log(e)
                        })
                    }
                }).fire()
            },
            fetchItemList: function(e) {
                var t = e.dispatch,
                    n = (e.state, this);
                window.lib.appear.init({
                    once: !0,
                    cls: "appear-item-list",
                    onAppear: function() {
                        o.default.ajax({
                            type: "get",
                            url: a.itemList,
                            data: {
                                type: "0",
                                creatorId: n.video.accountId,
                                liveId: n.video.liveId
                            }
                        }).then(function(e) {
                            if (e.success) {
                                var n = e.result.data.itemList || [],
                                    r = e.result.data.hotList || [];
                                t("FETCH_ITEM_LIST", n, r)
                            }
                        })
                    }
                }).fire()
            },
            initMsgSdk: function(e) {
                var t = e.dispatch,
                    n = (e.state, this);
                window.location.href.indexOf("pre") > -1 && (window.lib.mtop.config.subDomain = "wapa");
                var r = {
                    topic: n.video.topic
                };
                "TAOBAO" == window.origin && (r.appkey = "H5_4289");
                var o = i.default.init(r);
                o.on("liveShareList", function(e) {
                    console.log(e.data), t("ITEM_NEW_SHARE", e.data)
                }), o.on("liveBrk", function(e) {
                    t("VIDEO_STATUS_UPDATE", 3)
                }), o.on("liveRestore", function(e) {
                    t("VIDEO_STATUS_UPDATE", 0)
                }), o.on("liveEnd", function(e) {
                    t("VIDEO_STATUS_UPDATE", 1)
                }), t("INIT_MSG_SDK", o), document.addEventListener("visibilitychange", function(e) {
                    e.target.webkitHidden ? o.unSubscribe() : o.subscribe()
                }, !1)
            },
            loginModal: function(e, t) {
                e.dispatch, e.state;
                KISSY.use("tbc/mini-login/2.2.8/", function(e, n) {
                    var r = new n({});
                    r.show(), r.on("login", function(n) {
                        t && t(e)
                    })
                })
            },
            subscribePub: function(e, t) {
                var n = this,
                    r = e.dispatch,
                    i = e.state,
                    s = this;
                t ? o.default.ajax({
                    type: "get",
                    url: a.subscribe,
                    data: {
                        accountId: i.video.accountId
                    }
                }).then(function(e) {
                    e.success ? r("SUBSCTIBE_PUB", !0) : "unLogin" === e.err.errorMessage ? n.loginModal(function() {
                        s.subscribePub()
                    }) : s.showToast(e.err.errorMessage)
                }) : o.default.ajax({
                    type: "get",
                    url: a.unsubscribe,
                    data: {
                        accountId: i.video.accountId
                    }
                }).then(function(e) {
                    e.success ? r("SUBSCTIBE_PUB", !1) : n.loginModal(function() {
                        s.subscribePub()
                    })
                })
            },
            followPub: function(e, t) {
                var n = e.dispatch,
                    r = (e.state, this);
                if (goldlog && goldlog.record("/taobaolive.pclive.remind", "CLK", "", "H1481495473"), o.default.strBoolean(r.video.broadCaster.isFollow)) {
                    var i = window.lib.mtop.request({
                        api: "mtop.cybertron.follow.remove",
                        v: "1.0",
                        data: {
                            pubAccountId: r.video.accountId,
                            origin: "pc"
                        },
                        ecode: 0,
                        type: "GET",
                        dataType: "jsonp"
                    });
                    i.then(function(e) {
                        0 == e.retType && (n("FOLLOW_PUB", !1), r.subscribePub(!1))
                    }).catch(function(e) {})
                } else
                    (i = window.lib.mtop.request({
                        api: "mtop.cybertron.follow.add.h5",
                        v: "1.0",
                        data: {
                            pubAccountId: r.video.accountId,
                            origin: "tblive-pc"
                        },
                        ecode: 0,
                        type: "GET",
                        dataType: "jsonp"
                    })).then(function(e) {
                        0 == e.retType && (n("FOLLOW_PUB", !0), r.subscribePub(!0))
                    }).catch(function(e) {
                        2 == e.retType ? r.loginModal(function() {
                            r.followPub()
                        }) : t && t(e.ret[0].split("::")[1])
                    })
            },
            mergeItemList: function(e) {
                var t = e.dispatch;
                e.state;
                t("ITEM_MERGE")
            },
            showToast: function(e, t, n) {
                var r = e.dispatch;
                e.state;
                r("SHOW_MSG", t), setTimeout(function() {
                    return r("HIDE_MSG")
                }, n || 2e3)
            },
            getUserInfo: function(e) {
                var t = e.dispatch;
                e.state;
                window.lib.login.isLogin(function(e, n) {
                    e && t("USER_INFO", {
                        userId: n.data.userNumId,
                        nickName: n.data.nick
                    })
                })
            }
        };
    t.default = s
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }(n(128));
    t.default = r.default
}, function(e, t, n) {
    "use strict";
    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    function o(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    function i(e, t) {
        if (!e)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }
    function a(e, t) {
        if ("function" != typeof t && null !== t)
            throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var s = function() {
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
        l = r(n(129)),
        c = r(n(167)),
        u = r(n(168)),
        d = r(n(169)),
        f = r(n(170)),
        p = null,
        h = null,
        v = {},
        m = {},
        g = 0,
        y = {
            __invoke: function(e, t) {
                var n = this,
                    r = u.default.getGUID();
                return new Promise(function(o, i) {
                    if (t && (m[r] = {
                        resolve: o,
                        reject: i
                    }), 0 === g)
                        t && (v[r] = t), g = 1, (h = new l.default.PowerMsg({
                            appkey: e.appkey,
                            topic: e.topic,
                            debug: e.debug,
                            bizCode: e.bizCode || 1,
                            bizTag: e.bizTag || "",
                            interval: e.interval,
                            accsToken: e.accsToken,
                            userId: e.userId ? e.userId.toString() : "",
                            nick: e.nick,
                            aserverProxy: e.aserverProxy || ""
                        })).on("ready", function() {
                            g = 2, h.subscribe();
                            p || (p = f.default.init(!0)), n.__addEventListener(e);
                            for (var t in v)
                                !function(e) {
                                    v[e]().then(function(t) {
                                        m[e] && m[e].resolve(t), delete m[e]
                                    }).catch(function(t) {
                                        m[e] && m[e].reject(t), delete m[e]
                                    })
                                }(t)
                        }), h.on("error", function() {
                            g = 0
                        });
                    else if (1 === g)
                        v[r] = t;
                    else if (2 === g)
                        return delete m[r], t().then(function(e) {
                            return o(e)
                        }).catch(function(e) {
                            return i(e)
                        })
                })
            },
            __addEventListener: function(e) {
                h.on("message", function(t) {
                    e.emit("message", t), e.emit("liveMovement", {
                        data: t.data,
                        type: "message"
                    })
                }), h.on("hisMessage", function(t) {
                    e.emit("liveHistory", t)
                }), h.on("subscribe", function(t) {
                    e.emit("subscribe", t)
                }), h.on("unSubscribe", function(t) {
                    e.emit("unSubscribe", t)
                }), h.on("count", function(t) {
                    e.emit("count", t), e.emit("liveMovement", {
                        data: t,
                        type: "count"
                    })
                }), h.on("joinMessage", function(t) {
                    var n = t.data,
                        r = [];
                    for (var o in n.addUsers)
                        r.push({
                            userId: o,
                            nick: n.addUsers[o]
                        });
                    var i = n.totalCount,
                        a = n.onlineCount;
                    e.emit("liveMovement", {
                        data: {
                            online: a,
                            total: i,
                            userList: r
                        },
                        type: "join"
                    }), e.emit("liveJoin", {
                        data: {
                            online: a,
                            total: i,
                            userList: r
                        }
                    })
                }), h.on("hisBizInfoMessage", function(t) {
                    var n = t.data;
                    p.emitEvent(e, n.msgHeader.subType, {
                        content: n.msgDataBuffer,
                        type: "buffer"
                    }, n.msgData, n, !0)
                }), h.on("bizInfoMessage", function(t) {
                    var n = t.data;
                    p.emitEvent(e, n.msgHeader.subType, {
                        content: n.msgDataBuffer,
                        type: "buffer"
                    }, n.msgData, {
                        data: n
                    }, !1)
                })
            }
        },
        b = function(e) {
            function t(e) {
                o(this, t);
                var n = i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                return n.debug = e.debug, n.appkey = e.appkey, n.topic = e.topic, n.bizTag = e.bizTag, n.bizCode = e.bizCode, n.interval = e.interval || 3e3, n.accsToken = e.accsToken, n.userId = e.userId ? e.userId.toString() : "", n.nick = e.nick, n.aserverProxy = e.aserverProxy || "", y.__invoke(n), n
            }
            return a(t, c.default), s(t, [{
                key: "subscribe",
                value: function() {
                    return y.__invoke(this, function() {
                        return h.subscribe()
                    })
                }
            }, {
                key: "unSubscribe",
                value: function() {
                    return y.__invoke(this, function() {
                        return h.unsubscribe()
                    })
                }
            }, {
                key: "sendMessage",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                        t = arguments[1],
                        n = arguments[2],
                        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                        o = arguments[4],
                        i = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
                    return y.__invoke(this, function() {
                        return h.sendMessage(e, t, n, r = {}, o, i)
                    })
                }
            }, {
                key: "count",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
                    return y.__invoke(this, function() {
                        return h.count(e)
                    })
                }
            }, {
                key: "requestUserList",
                value: function(e, t) {
                    return y.__invoke(this, function() {
                        return h.requestTopicUserList(e, t)
                    })
                }
            }, {
                key: "requestTopicStatus",
                value: function() {
                    return y.__invoke(this, function() {
                        return h.requestTopicStatus()
                    })
                }
            }, {
                key: "requestMsgList",
                value: function(e) {
                    return y.__invoke(this, function() {
                        return h.requestMsgList(e)
                    })
                }
            }, {
                key: "sendJoinMsg",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                        r = d.default.SUBTYPE.JOIN_MSG;
                    return y.__invoke(this, function() {
                        var o = p.getJoinMsg(e = [], t = 0, n = 0);
                        return h.msgkit.sendInfoMsg(r, "", "", o.encodeAB())
                    })
                }
            }]), t
        }(),
        _ = {
            init: function(e) {
                return new b(e)
            }
        };
    lib || (window.lib = {}), lib.tbliveSdk = _, t.default = {
        init: _.init
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = {
        PowerMsg: function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }(n(130)).default
    };
    window.lib || (window.lib = {}), lib.powermsgSdk = r, t.default = r
}, function(e, t, n) {
    "use strict";
    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    function o(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = function() {
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
        a = r(n(131)),
        s = r(n(165)),
        l = r(n(138)),
        c = r(n(166)),
        u = l.default.init(),
        d = a.default.Messagekit,
        f = {},
        p = {
            __addEventListener: function(e) {
                var t = this;
                this.MsgData = e.contanse.MsgData;
                var n = function(n) {
                    var r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        o = n.msgHeader,
                        i = n.msgBody,
                        a = o.subType;
                    if (a === c.default.SUBTYPE.SYS_SUBTYPE.MTK_MSG_SYS_COMMON) {
                        var s = t.__decodeMsg(n.msgDataBuffer);
                        console.log('消息内容:{\"nick\":\"'+n.msgBody.from+'\",\"msg\":\"'+s.message+'\"}');
                        s.userId = o.getUserId(), s.from = i.getFrom(), s.timestamp = i.getTimestamp().toNumber(), r ? e.emit("hisMessage", {
                            data: s
                        }) : e.emit("message", {
                            data: s
                        })
                    } else if (a === c.default.SUBTYPE.SYS_SUBTYPE.MTK_MSG_SYS_DIG) {
                        var l = t.__decodeCount(n.msgDataBuffer);
                        r || e.emit("count", {
                            data: l
                        })
                    } else if (a === c.default.SUBTYPE.SYS_SUBTYPE.MTK_MSG_SYS_JOIN) {
                        var u = t.__decodeJoin(n.msgDataBuffer);
                        e.emit("joinMessage", {
                            data: u
                        })
                    } else
                        r ? e.emit("hisBizInfoMessage", {
                            data: n
                        }) : e.emit("bizInfoMessage", {
                            data: n
                        })
                };
                e.msgkit.on("infoMessage", function(e) {
                    // console.log('infoMessage消息4'+JSON.stringify(e));
                    n(e)
                }), e.msgkit.on("hisInfoMessage", function(e) {
                    n(e, !0)
                }), e.msgkit.on("reqMessage", function(n) {
                    var r = n.msgHeader,
                        o = (n.msgBody, r.subType);
                    if (o === c.default.SUBTYPE.REQUEST_SUBTYPE.MKT_REQUEST_SBUTYPE_USER) {
                        var i = t.__decodeTopicUserList(n.msgDataBuffer);
                        f.reqUserList && f.reqUserList(i)
                    } else if (o === c.default.SUBTYPE.REQUEST_SUBTYPE.MKT_REQUEST_SBUTYPE_STAT) {
                        var a = t.__decodeTopicStatus(n.msgDataBuffer);
                        f.reqTopicStatus && f.reqTopicStatus(a)
                    } else
                        e.emit("bizReqMessage", {
                            data: n
                        })
                }), e.msgkit.on("reqMessageByMtop", function(t) {
                    t.subType === c.default.SUBTYPE.REQUEST_SUBTYPE.MKT_REQUEST_SBUTYPE_USER ? f.reqUserList && f.reqUserList(t.data) : t.subType === c.default.SUBTYPE.REQUEST_SUBTYPE.MKT_REQUEST_SBUTYPE_STAT ? f.reqTopicStatus && f.reqTopicStatus(t.data) : e.emit("bizReqMessage", {
                        data: t
                    })
                })
            },
            __decodeMsg: function(e) {
                var t = this.MsgData.TextMessage.decode(e);
                return {
                    message: t.getMessage(),
                    params: t.getParams()
                }
            },
            __decodeCount: function(e) {
                return {
                    count: this.MsgData.CountInfo.decode(e).value.get("dig").toNumber()
                }
            },
            __decodeJoin: function(e) {
                var t = this.MsgData.JoinNotify.decode(e);
                return JSON.parse(t.encodeJSON())
            },
            __decodeTopicUserList: function(e) {
                var t = [];
                return this.MsgData.TopicUser.decode(e).getUser().forEach(function(e) {
                    t.push({
                        userId: e.getUserId(),
                        nick: e.getNick(),
                        timestamp: e.getAddTime() || 0
                    })
                }), t
            },
            __decodeTopicStatus: function(e) {
                var t = this.MsgData.TopicStat.decode(e);
                return {
                    digNum: t.getDigNum(),
                    msgNum: t.getMsgNum(),
                    onlineNum: t.getOnlineNum(),
                    totalNum: t.getTotalNum(),
                    visitNum: t.getVisitNum()
                }
            }
        },
        h = function() {
            function e(t) {
                var n = this;
                o(this, e), this.msgkit = new d({
                    topic: t.topic,
                    debug: t.debug,
                    appkey: t.appkey || "",
                    serviceId: "powermsg",
                    bizCode: t.bizCode,
                    bizTag: t.bizTag,
                    autoUnSub: t.autoUnSub,
                    accsToken: t.accsToken,
                    userId: t.userId ? t.userId.toString() : "",
                    nick: t.nick,
                    aserverProxy: t.aserverProxy || "",
                    mode: t.mode || "ws"
                }), this.interval = t.interval || 3e3, this.msgkit.on("ready", function(e) {
                    n.emit("ready", e)
                }), u.require(["polyfill", "Long", "ByteBuffer", "ProtoBuf"], function() {
                    var e = dcodeIO.ProtoBuf.newBuilder({}).import(s.default).build();
                    n.contanse = {
                        MsgData: e
                    }, n.topic = t.topic, p.__addEventListener(n)
                })
            }
            return i(e, [{
                key: "subscribe",
                value: function() {
                    return this.msgkit.subscribe()
                }
            }, {
                key: "unsubscribe",
                value: function() {
                    return this.msgkit.unSubscribe()
                }
            }, {
                key: "count",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
                        t = c.default.SUBTYPE.SYS_SUBTYPE.MTK_MSG_SYS_DIG;
                    return this.msgkit.sendCountMsg(t, {
                        dig: e
                    })
                }
            }, {
                key: "sendMessage",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                        n = arguments[2],
                        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                        o = arguments[4],
                        i = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
                        a = c.default.SUBTYPE.SYS_SUBTYPE.MTK_MSG_SYS_COMMON,
                        s = new this.contanse.MsgData.TextMessage;
                    s.setMessage(e);
                    for (var l in r)
                        s.params.set(l, r[l].toString());
                    return this.msgkit.sendInfoMsg(a, t, n, s.toArrayBuffer(), o, i)
                }
            }, {
                key: "sendBizMessage",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                        t = arguments[1],
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
                        r = arguments[3],
                        o = arguments[4],
                        i = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
                    return this.msgkit.sendInfoMsg(t, n, r, e, o, i)
                }
            }, {
                key: "requestTopicUserList",
                value: function(e, t) {
                    var n = c.default.SUBTYPE.REQUEST_SUBTYPE.MKT_REQUEST_SBUTYPE_USER,
                        r = Promise.all([this.msgkit.sendRequestMsg(n, e, t), new Promise(function(e, t) {
                            f.reqUserList = e
                        })]);
                    return new Promise(function(e, t) {
                        return r.then(function(t) {
                            e({
                                accsResp: t[0],
                                data: t[1]
                            })
                        })
                    })
                }
            }, {
                key: "requestTopicStatus",
                value: function() {
                    var e = c.default.SUBTYPE.REQUEST_SUBTYPE.MKT_REQUEST_SBUTYPE_STAT,
                        t = Promise.all([this.msgkit.sendRequestMsg(e), new Promise(function(e, t) {
                            f.reqTopicStatus = e
                        })]);
                    return new Promise(function(e, n) {
                        return t.then(function(t) {
                            e({
                                accsResp: t[0],
                                data: t[1]
                            })
                        })
                    })
                }
            }, {
                key: "requestMsgList",
                value: function(e) {
                    var t = c.default.SUBTYPE.REQUEST_SUBTYPE.MKT_REQUEST_SBUTYPE_MSG;
                    return this.msgkit.sendRequestMsg(t, 0, e)
                }
            }, {
                key: "on",
                value: function() {
                    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                        t[n] = arguments[n];
                    this.msgkit.on.apply(this, t)
                }
            }, {
                key: "emit",
                value: function() {
                    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                        t[n] = arguments[n];
                    this.msgkit.emit.apply(this, t)
                }
            }, {
                key: "off",
                value: function() {
                    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                        t[n] = arguments[n];
                    this.msgkit.off.apply(this, t)
                }
            }, {
                key: "once",
                value: function() {
                    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                        t[n] = arguments[n];
                    this.msgkit.once.apply(this, t)
                }
            }]), e
        }();
    t.default = h
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }(n(132));
    t.default = {
        Messagekit: r.default
    }
}, function(e, t, n) {
    "use strict";
    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    function o(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    function i(e, t) {
        if (!e)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }
    function a(e, t) {
        if ("function" != typeof t && null !== t)
            throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var s = function() {
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
        l = r(n(133)),
        c = r(n(144)),
        u = (r(n(145)), r(n(146))),
        d = r(n(148)),
        f = r(n(149)),
        p = r(n(147)),
        h = r(n(150)),
        v = r(n(151)),
        m = r(n(158)),
        g = r(n(159)),
        y = r(n(161)),
        b = r(n(162)),
        _ = r(n(163)),
        w = r(n(164)),
        E = r(n(154)),
        x = r(n(156)),
        T = r(n(138)),
        S = r(n(153)),
        C = r(n(155)),
        O = S.default.ACK_ERROR_CODE,
        k = T.default.init(),
        M = (new Date).getTime(),
        A = null,
        N = null,
        I = !1,
        L = {
            stop: !1,
            tryCount: 3,
            __connect: function(e) {
                var t = this;
                A || "ws" != e.mode ? k.require(["polyfill", "Long", "ByteBuffer", "ProtoBuf"], function(n, r, o, i) {
                    g.default.init(), y.default.init(), b.default.init(), _.default.init(), w.default.init(), t.__initManager(e)
                }) : k.require(["polyfill", "Long", "ByteBuffer", "ProtoBuf"], function(n, r, o, i) {
                    t.__fetchConfList(function(n) {
                        E.default.init(n), l.default.init({
                            appkey: e.appkey,
                            accsToken: e.accsToken,
                            aserverProxy: e.aserverProxy
                        }).then(function(r) {
                            e.serviceId;
                            e.conn = A = r, g.default.init(), y.default.init(), b.default.init(), _.default.init(), w.default.init(), t.__initManager(e), e.mode = n.MONITOR_RANGE_DOWNGRADE ? "mtop" : "ws"
                        }).catch(function(n) {
                            t.tryCount-- >= 0 ? (A = null, t.__connect(e)) : e.mode = "mtop"
                        })
                    })
                })
            },
            __fetchConfList: function(e) {
                u.default.jsonp({
                    url: "//huodong.m.taobao.com/api/data/v2/3ce2b27a824441c1b2959a1fa2560c3b.js",
                    jsonp: "loadConf",
                    success: function(t) {
                        I = t.monitor_range_downgrade, e({
                            MONITOR_RANGE_OPEN: t.monitor_range_open,
                            MONITOR_RANGE_LEFT: t.monitor_range_left,
                            MONITOR_RANGE_RIGHT: t.monitor_range_right,
                            MONITOR_RANGE_MOD: t.monitor_range_mod,
                            MONITOR_RANGE_DELAY: t.monitor_range_delay,
                            MONITOR_RANGE_DOWNGRADE: t.monitor_range_downgrade
                        })
                    },
                    error: function() {
                        e({
                            MONITOR_RANGE_OPEN: !0,
                            MONITOR_RANGE_LEFT: 1e4,
                            MONITOR_RANGE_RIGHT: 1e4,
                            MONITOR_RANGE_MOD: 1e4,
                            MONITOR_RANGE_DELAY: 1e3,
                            MONITOR_RANGE_DOWNGRADE: !1
                        })
                    }
                })
            },
            __cleanMtopFetch: function() {
                this.stop = !0
            },
            __createMtopFetch: function(e) {
                if (!this.stop) {
                    var t = (new Date).getTime(),
                        n = {
                            topic: e.topic,
                            offset: 0,
                            pagesize: Math.ceil(e.interval / 1e3),
                            tag: e.bizTag,
                            bizcode: e.bizCode,
                            sdkversion: e.msg.msgHeader.sdkVersion
                        };
                    e.msgManager.sendMsgByMtop(p.default.powermsg, n).then(function(n) {
                        for (var r = new Date((new Date).getTime() - t).getSeconds(), o = n.data, i = o.timestampList.length, a = (o.offset, Number(o.period) || 2), s = null, l = 0; l < i; l++)
                            s = f.default.binaryStringToBinaryArray(window.atob(o.timestampList[l].data.replace(/[\s]/g, ""))), e.msgManager.fireEventCallBack(s);
                        o.timestampList[i - 1] && o.timestampList[i - 1].offset, r < a ? setTimeout(function() {
                            e.emitter.emit("pullnativemsg")
                        }, 1e3 * (a - r)) : e.emitter.emit("pullnativemsg")
                    })
                }
            },
            __initManager: function(e) {
                var t = l.default.getToken();
                e.msgManager = v.default.init({
                    conn: e.conn,
                    serviceId: e.serviceId,
                    context: e
                }), this.__addEventListener(e), e.emitter = new d.default, c.default.isLogin(function(n, r) {
                    e.msg = new m.default({
                        Qos: h.default.QOS.MKT_MSG_QOS_RELIABLE_DUP,
                        DUP: !0,
                        sysCode: h.default.SYS_CODE.MKT_SYS_CODE_PM,
                        bizCode: e.bizCode,
                        type: 0,
                        userId: e.userId || r.data.userNumId,
                        token: t
                    }), e.msgManager.setBaseMsg(e.msg), setTimeout(function(t) {
                        return e.emit("ready")
                    }, 1)
                })
            },
            __addEventListener: function(e) {
                e.msgManager.getCallbackMap();
                e.msgManager.onMessage("ACK", function(t) {
                    var n = t.protocolData,
                        r = t.msgHeader,
                        o = n.msgType;
                    if (n.msgHeader = r, o === h.default.MSG_TYPE.MKT_PROTOCOL_MSGTYPE_SUBACK)
                        try {
                            var i = w.default.decodeMsgBody(n.msgBodyBuffer);
                            n.msgBody = i, null != n.msgBody.bizTag && n.msgBody.bizTag !== e.bizTag ? C.default.emit("ack", {
                                errorCode: O.SEND_ERR,
                                type: "SEND_ERR",
                                msg: "消息投递错误",
                                context: e,
                                protocolData: n
                            }) : (C.default.emit("ack", {
                                errorCode: O.SEND_SUCCESS,
                                type: "SEND_SUCCESS",
                                msg: "消息投递成功",
                                context: e,
                                protocolData: n
                            }), e.emit("subscribe", n))
                        } catch (t) {
                            console.error(t), C.default.emit("ack", {
                                errorCode: O.PARSE_ERR,
                                type: "PARSE_ERR",
                                msg: "解析错误",
                                context: e,
                                protocolData: n
                            })
                        }
                    else if (o === h.default.MSG_TYPE.MKT_PROTOCOL_MSGTYPE_UNSUBACK)
                        try {
                            var a = w.default.decodeMsgBody(n.msgBodyBuffer);
                            n.msgBody = a, null != n.msgBody.bizTag && n.msgBody.bizTag !== e.bizTag ? C.default.emit("ack", {
                                errorCode: O.SEND_ERR,
                                type: "SEND_ERR",
                                msg: "消息投递错误",
                                context: e,
                                protocolData: n
                            }) : (C.default.emit("ack", {
                                errorCode: O.SEND_SUCCESS,
                                type: "SEND_SUCCESS",
                                msg: "消息投递成功",
                                context: e,
                                protocolData: n
                            }), e.emit("unSubscribe", n))
                        } catch (t) {
                            console.error(t), C.default.emit("ack", {
                                errorCode: O.PARSE_ERR,
                                type: "PARSE_ERR",
                                msg: "解析错误",
                                context: e,
                                protocolData: n
                            })
                        }
                    else
                        o === h.default.MSG_TYPE.MKT_PROTOCOL_MSGTYPE_PUBACK ? (logs("%c [reqMessage event emit]", "color: #5ee81f;"), e.emit("reqMessage", n)) : C.default.emit("ack", {
                            errorCode: O.CHECK_ERR,
                            type: "CHECK_ERR",
                            msg: "消息类型校验错误",
                            context: e
                        })
                }), e.msgManager.onMessage("INFO", function(t) {
                    var n = t.protocolData;
                    try {
                        var r = _.default.decodeMsgBody(n.msgBodyBuffer);
                        n.msgBody = r, null != n.msgBody.sendTags && "" != n.msgBody.sendTags.join("") && -1 === n.msgBody.sendTags.indexOf(e.bizTag) && C.default.emit("ack", {
                            errorCode: O.SEND_ERR,
                            type: "SEND_ERR",
                            msg: "消息投递错误",
                            context: e,
                            protocolData: n
                        }), r.timestamp < M ? (logs("%c [hisInfoMessage event emit]", "color: #5ee81f;"), e.emit("hisInfoMessage", n)) : (logs("%c [infoMessage event emit]", "color: #5ee81f;"), e.emit("infoMessage", n)), C.default.emit("ack", {
                            errorCode: O.SEND_SUCCESS,
                            type: "SEND_SUCCESS",
                            msg: "消息投递成功",
                            context: e,
                            protocolData: n
                        })
                    } catch (t) {
                        console.error(t), C.default.emit("ack", {
                            errorCode: O.PARSE_ERR,
                            type: "PARSE_ERR",
                            msg: "解析错误",
                            context: e,
                            protocolData: n
                        })
                    }
                }), e.msgManager.onMessage("CMD", function(t) {
                    var n = t.protocolData;
                    try {
                        var r = b.default.decodeMsgBody(n.msgBodyBuffer);
                        n.msgBody = r, logs("%c [cmdMessage event emit]", "color: #5ee81f;"), e.emit("cmdMessage", n)
                    } catch (t) {
                        console.error(t), C.default.emit("ack", {
                            errorCode: O.PARSE_ERR,
                            type: "PARSE_ERR",
                            msg: "解析错误",
                            context: e,
                            protocolData: n
                        })
                    }
                })
            },
            __autoUnSubFn: function(e, t) {
                !1 === t.target.hidden || !1 === t.target.webkitHidden ? e.unSubscribe() : !0 !== t.target.hidden && !0 !== t.target.webkitHidden || e.subscribe()
            }
        },
        R = function(e) {
            function t() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                o(this, t);
                var n = i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                x.default.init(e.debug);
                var r = window.location.href;
                return void 0 === e.bizCode && console.error("bizCode为必填"), e.appkey || (r.indexOf("taobao.net") > -1 || r.indexOf("waptest.taobao.com") > -1 ? e.appkey = "4272" : e.appkey = "H5_4282"), n.appkey = e.appkey, n.accsToken = e.accsToken || "", n.aserverProxy = e.aserverProxy || "", n.topic = e.topic, n.serviceId = e.serviceId, n.bizCode = e.bizCode || "", n.bizTag = e.bizTag || "", n.interval = e.interval || 3e3, n.autoUnSub = e.autoUnSub, n.userId = e.userId || e.userId + "", n.nick = e.nick || lib.login.getUserNick(), e.mode ? n.mode = e.mode : window.WebSocket ? n.mode = "ws" : n.mode = "mtop", L.__connect(n), n
            }
            return a(t, d.default), s(t, [{
                key: "subscribe",
                value: function() {
                    var e = this;
                    this.hasBindUnSub || 1 != this.autoUnSub || (this.hasBindUnSub = !0, document.addEventListener("visibilitychange", function(t) {
                        return L.__autoUnSubFn(e, t)
                    }));
                    var t = this.topic,
                        n = this.msg;
                    n.setMsgHeader(t, null, 1);
                    var r = n.getprotocolData();
                    r.msgType = h.default.MSG_TYPE.MKT_PROTOCOL_MSGTYPE_SUBSCRIBE;
                    var o = [this.nick, null, this.bizTag, null],
                        i = o[0],
                        a = o[1],
                        s = o[2],
                        c = o[3],
                        u = w.default.setMsgBody(i, a, s, c);
                    if (r.msgBodyBuffer = u.toArrayBuffer(), "ws" == this.mode)
                        return this.msgManager.sendMsg(r);
                    if ("mtop" == this.mode) {
                        N = (new Date).getTime();
                        var d = {
                            namespace: r.bizCode,
                            topic: t,
                            role: Number(a),
                            sdkVersion: n.msgHeader.sdkVersion,
                            tag: s,
                            timestamp: N,
                            ext: N,
                            utdId: l.default.getAccsDeviceId(),
                            from: i,
                            id: n.msgHeader.userId
                        };
                        return this.msgManager.sendMsgByMtop(p.default.subscribemsg, d).then(function(t) {
                            return new Promise(function(t, n) {
                                e.emitter.on("pullnativemsg", function() {
                                    L.__createMtopFetch(e)
                                }), L.__createMtopFetch(e), t({
                                    mode: e.mode,
                                    accsResp: {}
                                })
                            })
                        }).catch(function(e) {
                            throw new Error(JSON.stringify(e))
                        })
                    }
                    console.error("未知的mode类型:" + this.mode)
                }
            }, {
                key: "unSubscribe",
                value: function() {
                    var e = this,
                        t = this.topic,
                        n = this.msg;
                    n.setMsgHeader(t, null, 1);
                    var r = n.getprotocolData();
                    r.msgType = h.default.MSG_TYPE.MKT_PROTOCOL_MSGTYPE_UNSUBSCRIBE;
                    var o = [this.nick, null, this.bizTag, null],
                        i = o[0],
                        a = o[1],
                        s = o[2],
                        c = o[3],
                        u = w.default.setMsgBody(i, a, s, c);
                    if (r.msgBodyBuffer = u.toArrayBuffer(), "ws" == this.mode)
                        return this.msgManager.sendMsg(r);
                    if ("mtop" == this.mode) {
                        var d = {
                            namespace: r.bizCode,
                            topic: t,
                            role: Number(a),
                            sdkVersion: n.msgHeader.sdkVersion,
                            tag: s,
                            timestamp: (new Date).getTime(),
                            ext: N,
                            utdId: l.default.getAccsDeviceId(),
                            from: i
                        };
                        return this.msgManager.sendMsgByMtop(p.default.unsubscribemsg, d).then(function(t) {
                            return new Promise(function(t, n) {
                                L.__cleanMtopFetch(e), t({
                                    mode: e.mode,
                                    accsResp: {}
                                })
                            })
                        }).catch(function(e) {
                            throw new Error(JSON.stringify(e))
                        })
                    }
                    console.error("未知的mode类型:" + this.mode)
                }
            }, {
                key: "sendInfoMsg",
                value: function(e, t, n) {
                    var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "",
                        o = this,
                        i = arguments[4],
                        a = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
                    return new Promise(function(s, l) {
                        if (lib.login.isLogin() || o.userId) {
                            i || o.bizTag && (i = [o.bizTag]);
                            var c = o.topic,
                                d = o.msg;
                            d.setMsgHeader(c, e, 1);
                            var v = d.getprotocolData();
                            v.type = h.default.TYPE.MKT_MSG_TYPE_INFO, v.Qos = h.default.QOS.MKT_MSG_QOS_RELIABLE;
                            var m = _.default.setMsgBody(t, n, i, a);
                            if (v.msgBodyBuffer = m.toArrayBuffer(), v.msgDataBuffer = u.default.strToBuf(r), "ws" == o.mode)
                                o.msgManager.sendInfoMsg(v).then(function(e) {
                                    s(e)
                                });
                            else if ("mtop" == o.mode) {
                                var g = {
                                    namespace: v.bizCode,
                                    topic: c,
                                    sdkVersion: d.msgHeader.sdkVersion,
                                    subType: e,
                                    bizData: window.btoa(f.default.binaryArrayToBinaryString(new Uint8Array(v.msgDataBuffer))),
                                    msgId: d.msgHeader.messageId,
                                    tagList: JSON.stringify(m.sendTags),
                                    qos: h.default.QOS.MKT_MSG_QOS_UNRELIABLE,
                                    userId: d.msgHeader.userId,
                                    from: t
                                };
                                o.msgManager.sendMsgByMtop(p.default.infomsg, g).then(function(e) {
                                    s(e.data)
                                })
                            } else
                                l({
                                    errMsg: "未知的mode类型",
                                    mode: o.mode
                                })
                        } else
                            l({
                                type: "ERR_NO_LOGIN",
                                message: "用户未登录"
                            })
                    })
                }
            }, {
                key: "sendRequestMsg",
                value: function(e, t, n) {
                    var r = this,
                        o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
                    return new Promise(function(i, a) {
                        var s = r.topic,
                            l = r.msg;
                        l.setMsgHeader(s, e, 1);
                        var c = l.getprotocolData();
                        c.type = h.default.TYPE.MKT_MSG_TYPE_REQUEST, c.Qos = h.default.QOS.MKT_MSG_QOS_RELIABLE;
                        var d = y.default.setMsgBody(t, n);
                        if (c.msgBodyBuffer = d.toArrayBuffer(), c.msgDataBuffer = u.default.strToBuf(o), "ws" == r.mode)
                            r.msgManager.sendRequestMsg(c).then(function(e) {
                                i(e)
                            });
                        else if ("mtop" == r.mode) {
                            var f = {},
                                v = "";
                            e == h.default.SUBTYPE.REQUEST_SUBTYPE.MKT_REQUEST_SBUTYPE_STAT ? (f = {
                                topic: s,
                                sdkversion: l.msgHeader.sdkVersion
                            }, v = p.default.pulltopicstatmsg) : e == h.default.SUBTYPE.REQUEST_SUBTYPE.MKT_REQUEST_SBUTYPE_USER ? (f = {
                                topic: s,
                                sdkversion: l.msgHeader.sdkVersion,
                                offset: 0,
                                pagesize: n
                            }, v = p.default.pulltopicuserlistmsg) : a({
                                errMsg: "未知的请求类型:" + e,
                                subType: e,
                                mode: r.mode
                            }), r.msgManager.sendMsgByMtop(v, f).then(function(t) {
                                r.emit("reqMessageByMtop", {
                                    subType: e,
                                    data: t.data.result
                                }), i({
                                    subType: e,
                                    data: t.data.result
                                })
                            })
                        } else
                            a({
                                errMsg: "未知的mode类型",
                                mode: r.mode
                            })
                    })
                }
            }, {
                key: "sendCommandMsg",
                value: function(e, t, n, r, o) {
                    var i = this,
                        a = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "";
                    return new Promise(function(s, l) {
                        if (lib.login.isLogin() && i.userId) {
                            var c = i.topic,
                                d = i.msg;
                            d.setMsgHeader(c, e, 1);
                            var f = d.getprotocolData();
                            f.type = h.default.TYPE.MKT_MSG_TYPE_COMMAND, f.Qos = h.default.QOS.MKT_MSG_QOS_RELIABLE;
                            var p = b.default.setMsgBody(t, n, r, o);
                            f.msgBodyBuffer = p.toArrayBuffer(), f.msgDataBuffer = u.default.strToBuf(a), "ws" == i.mode ? i.msgManager.sendCommandMsg(f).then(function(e) {
                                s(e)
                            }) : l({
                                errMsg: "未知的mode类型",
                                mode: i.mode
                            })
                        } else
                            l({
                                type: "ERR_NO_LOGIN",
                                message: "用户未登录"
                            })
                    })
                }
            }, {
                key: "sendCountMsg",
                value: function(e, t) {
                    var n = this,
                        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
                    return new Promise(function(o, i) {
                        var a = n.topic,
                            s = n.msg;
                        s.setMsgHeader(a, e, 1);
                        var l = s.getprotocolData();
                        l.type = h.default.TYPE.MKT_MSG_TYPE_COUNT, l.Qos = h.default.QOS.MKT_MSG_QOS_RELIABLE;
                        var c = void 0;
                        for (var d in t)
                            c = g.default.setMsgBody(d, t[d]);
                        if (c && (l.msgBodyBuffer = c.toArrayBuffer()), l.msgDataBuffer = u.default.strToBuf(r), "ws" == n.mode)
                            n.msgManager.sendCountMsg(l).then(function(e) {
                                o(e)
                            });
                        else if ("mtop" == n.mode) {
                            var f = {
                                namespace: l.bizCode,
                                topic: a,
                                sdkVersion: s.msgHeader.sdkVersion,
                                tag: n.bizTag,
                                countMap: JSON.stringify({
                                    dig: t.dig
                                })
                            };
                            n.msgManager.sendMsgByMtop(p.default.countmsg, f).then(function(e) {
                                o(e)
                            })
                        } else
                            i({
                                errMsg: "未知的mode类型",
                                mode: n.mode
                            })
                    })
                }
            }]), t
        }();
    t.default = R
}, function(e, t, n) {
    "use strict";
    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    function o(e, t, n, r, o, a) {
        window.atob ? new i.default(o, a, e, t, n, r) : l.default.init().require(["polyfill"], function() {
            new i.default(o, a, e, t, n, r)
        })
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = r(n(134)),
        a = r(n(142)),
        s = r(n(143)),
        l = r(n(138)),
        c = "",
        u = function() {
            var e = Math.floor(899 * Math.random() + 100),
                t = new a.default({
                    screen_resolution: !0,
                    canvas: !0
                }).get();
            return t = t.toString().substr(0, 11), t += new Array(11 - t.length).join("0"), u = t + "_" + e
        }(),
        d = (window.lib || (window.lib = {})).accs = {
            init: function(e) {
                return new Promise(function(t, n) {
                    var r = window.WebSocket,
                        i = e.ports || 80,
                        a = e.timeout || 3e3,
                        l = e.aserverProxy || "";
                    c = e.appkey, e && e.appkey || n({
                        type: "NO_APPKEY",
                        message: "请传入appkey"
                    }), r ? e.accsToken ? o(l, e.accsToken, i, a, t, n) : s.default.request({
                        api: "mtop.mediaplatform.live.encryption",
                        data: {
                            appKey: e.appkey,
                            windowId: u
                        },
                        AntiCreep: !0,
                        v: "1.0",
                        ecode: "0"
                    }).then(function(e) {
                        if (e && e.data && e.data.result) {
                            var r = e.data.result;
                            o(l, r, i, a, t, n)
                        } else
                            n({
                                type: "GET_TOKEN_ERROR",
                                message: "获取ACCS token时出错",
                                error: e
                            })
                    }).catch(function(e) {
                        n(e.ret[0].indexOf("FAIL_SYS_SESSION_EXPIRED") > -1 ? {
                            type: "UESR_NOT_LOGIN",
                            message: "用户未登录"
                        } : {
                            type: "GET_TOKEN_ERROR",
                            message: "获取ACCS token时出错",
                            error: e
                        })
                    }) : n({
                        type: "NO_WS_SUPPORT",
                        message: "浏览器不支持 WebSocket"
                    })
                })
            },
            getToken: function() {
                return ""
            },
            getAccsDeviceId: function() {
                return u || ""
            },
            getAppkey: function() {
                return c || ""
            }
        };
    t.default = d
}, function(e, t, n) {
    "use strict";
    function r(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = function() {
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
        i = function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }(n(135)),
        a = ["mtop"],
        s = function() {
            function e(t, n) {
                var o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
                    s = arguments[3],
                    l = this,
                    c = arguments[4],
                    u = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 3e3;
                r(this, e), this._subscribeMap = i.default.subscribeMap, this._ackMap = i.default.ackMap;
                for (var d = "m", f = 0; f < a.length; f++)
                    if (void 0 === lib[a[f]])
                        throw "lib.&{REQUIRES[i]} must be required!";
                lib.mtop.config && lib.mtop.config.subDomain && (d = lib.mtop.config.subDomain);
                var p = "ws:";
                "https:" === window.location.protocol && (p = "wss:");
                var h = "";
                h = o ? p + "//" + o + ":" + c + "/accs/auth?token=" + s : p + "//acs." + d + ".taobao.com:" + c + "/accs/auth?token=" + s, this._initConnection(h, function(e) {
                    e.isSuccess ? (l._connection = e.connection, l._bindEventHandler(), t(l)) : n({
                        type: "OPEN_CONNECTION_ERROR",
                        message: "开启连接失败",
                        error: e.error
                    })
                }), setTimeout(function() {
                    l.getStatus() || n({
                        type: "OPEN_CONNECTION_TIMEOUT",
                        message: "开启连接超时",
                        error: ""
                    })
                }, u)
            }
            return o(e, [{
                key: "_initConnection",
                value: function(e, t) {
                    var n = new WebSocket(e);
                    n.onopen = function(e) {
                        n.onerror = null, n.onopen = null, t && t({
                            isSuccess: !0,
                            connection: n
                        })
                    }, n.onerror = function(e) {
                        n.onerror = null, n.onopen = null, t && t({
                            isSuccess: !1,
                            connection: n,
                            error: e
                        })
                    }
                }
            }, {
                key: "_bindEventHandler",
                value: function() {
                    var e = this;
                    this._connection.onerror = function(t) {
                        console.log("accs_onerror", t), e.onError && e.onError(t)
                    }, this._connection.onclose = function(t) {
                        console.log("accs_onclose", t), e.onClose && e.onClose(t)
                    }, this._connection.onmessage = function(t) {
                        e._processDownlinkMsg(t.data)
                    }
                }
            }, {
                key: "_sendACK",
                value: function(e) {
                    this._connection.send(JSON.stringify({
                        type: "ACK",
                        protocol: "ACCS_H5",
                        dataId: e.dataId,
                        serviceId: e.serviceId,
                        data: ""
                    }))
                }
            }, {
                key: "_processDownlinkMsg",
                value: function(e) {
                    var t = this;
                    i.default.processDownlinkMsg(e, function(e) {
                        t._sendACK(e)
                    })
                }
            }, {
                key: "onMessage",
                value: function(e, t) {
                    "function" == typeof t && (this._subscribeMap["_" + e] = t)
                }
            }, {
                key: "onError",
                value: function(e) {
                    console.log(e), console.log("webSocket onerror")
                }
            }, {
                key: "offMessage",
                value: function(e) {
                    delete this._subscribeMap["_" + serviceID]
                }
            }, {
                key: "send",
                value: function(e, t) {
                    var n = this;
                    return new Promise(function(r, o) {
                        try {
                            if (!n.getStatus())
                                throw "websocket not available";
                            var a = i.default.packMsg(e, t);
                            r && (n._ackMap["_" + a.dataId] = r), n._connection.send(JSON.stringify(a))
                        } catch (e) {
                            o(e)
                        }
                    })
                }
            }, {
                key: "close",
                value: function() {
                    this.getStatus() && this._connection.close()
                }
            }, {
                key: "getStatus",
                value: function() {
                    return this._connection && 1 == this._connection.readyState
                }
            }]), e
        }();
    t.default = s
}, function(e, t, n) {
    "use strict";
    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = r(n(136)),
        i = r(n(137)),
        a = r(n(141)),
        s = {
            ackMap: {},
            subscribeMap: {},
            packMsg: function(e, t) {
                var n = void 0;
                if (t.buffer && t instanceof Uint8Array) {
                    var r = i.default.binaryArrayToBinaryString(t);
                    n = window.btoa(r)
                } else {
                    if ("string" != typeof t)
                        throw "non-binary data must be string";
                    n = window.btoa(i.default.utf16ToUtf8(t))
                }
                return {
                    type: "REQ",
                    protocol: "ACCS_H5",
                    dataId: (0, a.default)(),
                    serviceId: e,
                    data: n
                }
            },
            processDownlinkMsg: function(e, t) {
                var n = new o.default(e);
                if ("ACCS_H5" == n.protocol || "ACCS_WV" == n.protocol)
                    if ("1" != n.err)
                        switch (n.type) {
                        case "RES":
                            var r = this.ackMap["_" + n.dataId];
                            r && (r(n), delete this.ackMap["_" + n.dataId]);
                            break;
                        case "DATA":
                            var i = this.subscribeMap["_" + n.serviceId];
                            i && i(n), t && t(n)
                        }
                    else {
                        var a = atob(n.data),
                            s = {};
                        try {
                            s = JSON.parse(a)
                        } catch (e) {}
                        console.error(s)
                    }
            }
        };
    t.default = s
}, function(e, t, n) {
    "use strict";
    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    function o(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = function() {
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
        a = r(n(137)),
        s = r(n(138)).default.init(),
        l = function() {
            function e(t) {
                o(this, e);
                var n = JSON.parse(t);
                for (var r in n)
                    n.hasOwnProperty(r) && (this[r] = n[r])
            }
            return i(e, [{
                key: "getText",
                value: function() {
                    return this.data ? a.default.utf8ToUtf16(window.atob(this.data)) : ""
                }
            }, {
                key: "getBinaryArray",
                value: function() {
                    var e = this;
                    return new Promise(function(t, n) {
                        if (e.data) {
                            var r = window.atob(e.data),
                                o = e.compressType || "COMMON",
                                i = a.default.binaryStringToBinaryArray(r);
                            "GZIP" == o ? s.require(["gzipjs"], function(e) {
                                var n = {
                                    level: 6,
                                    name: "",
                                    timestamp: parseInt(Date.now() / 1e3, 10)
                                };
                                i = new Uint8Array(e.unzip(i, n)), t(i)
                            }) : t(i)
                        } else
                            t([])
                    })
                }
            }]), e
        }();
    t.default = l
}, function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = {
        utf16ToUtf8: function(e) {
            if (e) {
                var t,
                    n,
                    r = [],
                    o = e.length;
                for (t = 0; t < o; t++)
                    (n = e.charCodeAt(t)) > 0 && n <= 127 ? r.push(e.charAt(t)) : n >= 128 && n <= 2047 ? r.push(String.fromCharCode(192 | n >> 6 & 31), String.fromCharCode(128 | 63 & n)) : n >= 2048 && n <= 65535 && r.push(String.fromCharCode(224 | n >> 12 & 15), String.fromCharCode(128 | n >> 6 & 63), String.fromCharCode(128 | 63 & n));
                return r.join("")
            }
        },
        utf8ToUtf16: function(e) {
            if (e) {
                var t,
                    n,
                    r,
                    o = [],
                    i = e.length;
                for (t = 0; t < i; t++)
                    (n = []).push(e.charCodeAt(t)), 0 == (n[0] >> 7 & 255) ? o.push(e.charAt(t)) : 6 == (n[0] >> 5 & 255) ? (n.push(e.charCodeAt(++t)), (r = []).push(31 & n[0]), r.push(63 & n[1]), o.push(String.fromCharCode(r[0] << 6 | r[1]))) : 14 == (n[0] >> 4 & 255) && (n.push(e.charCodeAt(++t)), n.push(e.charCodeAt(++t)), (r = []).push(n[0] << 4 | n[1] >> 2 & 15), r.push((3 & n[1]) << 6 | 63 & n[2]), o.push(String.fromCharCode(r[0] << 8 | r[1])));
                return o.join("")
            }
        },
        binaryStringToBinaryArray: function(e) {
            return new Uint8Array(e.split("").map(function(e) {
                return e.charCodeAt()
            }))
        },
        binaryArrayToBinaryString: function(e) {
            return [].map.call(e, function(e) {
                return String.fromCharCode(e)
            }).join("")
        }
    }
}, function(e, t, n) {
    (function(e) {
        "use strict";
        function r(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = function() {
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
            i = (n(139), function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(n(140))),
            a = ["Long", "ByteBuffer", "ProtoBuf", "polyfill", "gzipjs"];
        e.dcodeIO || (e.dcodeIO = {});
        var s = {},
            l = {},
            c = new i.default;
        c.on("desctroy", function(e) {
            l[e] = null
        });
        var u = function() {
                function t() {
                    var e = arguments.length <= 0 || void 0 === arguments[0] ? {
                        moduleList: [],
                        instanceMap: {
                            length: 0
                        },
                        callback: null
                    } : arguments[0];
                    r(this, t), this.moduleList = e.moduleList, this.callback = e.callback || new Function, this.instanceMap = {
                        length: 0
                    }, this._id = e.id, this.__addEvent()
                }
                return o(t, [{
                    key: "__addEvent",
                    value: function() {
                        for (var t = this, n = this.moduleList, r = n.length, o = 0; o < r && "break" !== function(r) {
                            var o = n[r];
                            if ("done" === s[o])
                                return t.instanceMap[o] = e[o] || dcodeIO[o] || e, t.instanceMap.length++, "break";
                            c.on(o + "Loaded", function(e) {
                                t.instanceMap[o] || (t.instanceMap[o] = e, t.instanceMap.length++), t.tryInvoke()
                            })
                        }(o); o++)
                            ;
                        this.tryInvoke()
                    }
                }, {
                    key: "tryInvoke",
                    value: function() {
                        var t = this.moduleList;
                        if (this.instanceMap.length === t.length && this.callback) {
                            var n = t.map(function(t) {
                                return e[t] || dcodeIO[t] || e
                            });
                            this.callback.apply(d, n), this.callback = null, c.emit("desctroy", this._id)
                        }
                    }
                }]), t
            }(),
            d = {
                config: {
                    basePath: "//g.alicdn.com/mtb/lib/lib-msg-rumtime/??"
                },
                require: function(t, n) {
                    var r = t.length,
                        o = t.slice(),
                        i = (new Date).getTime() + "_" + 1e4 * Math.random(),
                        d = new u({
                            moduleList: o,
                            callback: n,
                            _id: i
                        });
                    l[i] = d;
                    for (var f = 0; f < r; f++) {
                        var p = t[f];
                        if (-1 === a.indexOf(p))
                            throw "module " + p + " not found in module list " + a;
                        -1 === p.indexOf(".js") ? t[f] = "" + this.config.filePath + p + ".js" : t[f] = "" + this.config.filePath + p, "done" !== s[p] && "loading" !== s[p] ? s[p] = "loading" : t[f] = ""
                    }
                    if ((t = t.filter(function(e) {
                        return "" != e
                    })).length > 0) {
                        var h = document.createElement("script");
                        h.type = "text/javascript", h.charset = "utf-8", h.async = !0;
                        var v = this.config.basePath + "/" + t.join(",");
                        h.src = v, h.onload = function() {
                            o.map(function(t) {
                                return e[t] || dcodeIO[t] || e
                            });
                            for (var t = o.length, n = 0; n < t; n++) {
                                var r = o[n];
                                s[r] = "done", c.emit(r + "Loaded", e[r] || dcodeIO[r] || e)
                            }
                        }, document.body.appendChild(h)
                    } else
                        d.tryInvoke()
                }
            };
        t.default = {
            init: function() {
                var e = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0];
                return d.config.basePath = "//g.alicdn.com/mtb/lib-msg-runtime/1.0.0/??", d.config.filePath = e.filePath || "", d
            }
        }
    }).call(t, function() {
        return this
    }())
}, function(e, t) {
    e.exports = {
        name: "@ali/lib-msg-runtime",
        version: "1.0.3",
        description: "pmg消息sdk的运行模块加载器",
        main: "./release/msg-runtime.js",
        dependencies: {
            "gzip-js": "^0.3.2",
            protobufjs: "^5.0.1",
            webpack: "^1.13.2"
        },
        devDependencies: {
            babel: "^6.5.2",
            "babel-cli": "^6.14.0",
            "babel-core": "^6.14.0",
            "babel-loader": "^6.2.5",
            "babel-plugin-transform-runtime": "^6.15.0",
            "babel-preset-es2015": "^6.14.0",
            "babel-runtime": "^6.11.6",
            "json-loader": "^0.5.4",
            uglify: "^0.1.5",
            webpack: "^1.13.2"
        },
        scripts: {
            test: 'echo "Error: no test specified" && exit 1',
            watch: "webpack --config webpack.config.js --watch",
            bundle: "webpack --config webpack.config.js",
            build: "webpack --config webpack.build.js && ./.shell/build.sh && ./node_modules/.bin/babel src --out-dir release && rm -rf release/modules"
        },
        publishConfig: {
            registry: "http://registry.npm.alibaba-inc.com"
        },
        author: "",
        license: "ISC",
        _from: "@ali/lib-msg-runtime@1.0.3",
        _resolved: "http://registry.npm.alibaba-inc.com/@ali/lib-msg-runtime/download/@ali/lib-msg-runtime-1.0.3.tgz"
    }
}, function(e, t) {
    "use strict";
    function n(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
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
                n(this, e)
            }
            return r(e, [{
                key: "on",
                value: function(e, t) {
                    return this._eventCollection = this._eventCollection || {}, this._eventCollection[e] = this._eventCollection[e] || [], this._eventCollection[e].push(t), this
                }
            }, {
                key: "once",
                value: function(e, t) {
                    function n() {
                        r.off(e, n);
                        for (var o = arguments.length, i = Array(o), a = 0; a < o; a++)
                            i[a] = arguments[a];
                        t.apply(this, i)
                    }
                    var r = this;
                    return n.listener = t, this.on(e, n), this
                }
            }, {
                key: "off",
                value: function(e, t) {
                    var n = void 0;
                    return this._eventCollection && (n = this._eventCollection[e]) ? (n.forEach(function(e, r) {
                        e !== t && e.listener !== t || n.splice(r, 1)
                    }), 0 === n.length && delete this._eventCollection[e], this) : this
                }
            }, {
                key: "emit",
                value: function(e) {
                    for (var t = this, n = arguments.length, r = Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)
                        r[o - 1] = arguments[o];
                    var i = void 0;
                    return this._eventCollection && (i = this._eventCollection[e]) ? ((i = i.slice(0)).forEach(function(e) {
                        return e.apply(t, r)
                    }), this) : this
                }
            }]), e
        }();
    t.default = o
}, function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function() {
        return Date.now() % 1e8 + "_" + Math.round(1e4 * Math.random())
    }
}, function(e, t, n) {
    var r,
        o;
    !function(i, a, s) {
        void 0 !== e && e.exports ? e.exports = s() : void 0 !== (o = "function" == typeof (r = s) ? r.call(t, n, t, e) : r) && (e.exports = o)
    }(0, 0, function() {
        "use strict";
        var e = function(e) {
            var t,
                n;
            t = Array.prototype.forEach, n = Array.prototype.map, this.each = function(e, n, r) {
                if (null !== e)
                    if (t && e.forEach === t)
                        e.forEach(n, r);
                    else if (e.length === +e.length) {
                        for (var o = 0, i = e.length; o < i; o++)
                            if (n.call(r, e[o], o, e) === {})
                                return
                    } else
                        for (var a in e)
                            if (e.hasOwnProperty(a) && n.call(r, e[a], a, e) === {})
                                return
            }, this.map = function(e, t, r) {
                var o = [];
                return null == e ? o : n && e.map === n ? e.map(t, r) : (this.each(e, function(e, n, i) {
                    o[o.length] = t.call(r, e, n, i)
                }), o)
            }, "object" == typeof e ? (this.hasher = e.hasher, this.screen_resolution = e.screen_resolution, this.canvas = e.canvas, this.ie_activex = e.ie_activex) : "function" == typeof e && (this.hasher = e)
        };
        return e.prototype = {
            get: function() {
                var e = [];
                return e.push(navigator.userAgent), e.push(navigator.language), e.push(screen.colorDepth), this.screen_resolution && void 0 !== this.getScreenResolution() && e.push(this.getScreenResolution().join("x")), e.push((new Date).getTimezoneOffset()), e.push(this.hasSessionStorage()), e.push(this.hasLocalStorage()), e.push(!!window.indexedDB), document.body ? e.push(typeof document.body.addBehavior) : e.push("undefined"), e.push(typeof window.openDatabase), e.push(navigator.cpuClass), e.push(navigator.platform), e.push(navigator.doNotTrack), e.push(this.getPluginsString()), this.canvas && this.isCanvasSupported() && e.push(this.getCanvasFingerprint()), this.hasher ? this.hasher(e.join("###"), 31) : this.murmurhash3_32_gc(e.join("###"), 31)
            },
            murmurhash3_32_gc: function(e, t) {
                var n,
                    r,
                    o,
                    i,
                    a,
                    s,
                    l,
                    c;
                for (n = 3 & e.length, r = e.length - n, o = t, a = 3432918353, s = 461845907, c = 0; c < r;)
                    l = 255 & e.charCodeAt(c) | (255 & e.charCodeAt(++c)) << 8 | (255 & e.charCodeAt(++c)) << 16 | (255 & e.charCodeAt(++c)) << 24, ++c, o = 27492 + (65535 & (i = 5 * (65535 & (o = (o ^= l = (65535 & (l = (l = (65535 & l) * a + (((l >>> 16) * a & 65535) << 16) & 4294967295) << 15 | l >>> 17)) * s + (((l >>> 16) * s & 65535) << 16) & 4294967295) << 13 | o >>> 19)) + ((5 * (o >>> 16) & 65535) << 16) & 4294967295)) + ((58964 + (i >>> 16) & 65535) << 16);
                switch (l = 0, n) {
                case 3:
                    l ^= (255 & e.charCodeAt(c + 2)) << 16;
                case 2:
                    l ^= (255 & e.charCodeAt(c + 1)) << 8;
                case 1:
                    o ^= l = (65535 & (l = (l = (65535 & (l ^= 255 & e.charCodeAt(c))) * a + (((l >>> 16) * a & 65535) << 16) & 4294967295) << 15 | l >>> 17)) * s + (((l >>> 16) * s & 65535) << 16) & 4294967295
                }
                return o ^= e.length, o ^= o >>> 16, o = 2246822507 * (65535 & o) + ((2246822507 * (o >>> 16) & 65535) << 16) & 4294967295, o ^= o >>> 13, o = 3266489909 * (65535 & o) + ((3266489909 * (o >>> 16) & 65535) << 16) & 4294967295, (o ^= o >>> 16) >>> 0
            },
            hasLocalStorage: function() {
                try {
                    return !!window.localStorage
                } catch (e) {
                    return !0
                }
            },
            hasSessionStorage: function() {
                try {
                    return !!window.sessionStorage
                } catch (e) {
                    return !0
                }
            },
            isCanvasSupported: function() {
                var e = document.createElement("canvas");
                return !(!e.getContext || !e.getContext("2d"))
            },
            isIE: function() {
                return "Microsoft Internet Explorer" === navigator.appName || !("Netscape" !== navigator.appName || !/Trident/.test(navigator.userAgent))
            },
            getPluginsString: function() {
                return this.isIE() && this.ie_activex ? this.getIEPluginsString() : this.getRegularPluginsString()
            },
            getRegularPluginsString: function() {
                return this.map(navigator.plugins, function(e) {
                    var t = this.map(e, function(e) {
                        return [e.type, e.suffixes].join("~")
                    }).join(",");
                    return [e.name, e.description, t].join("::")
                }, this).join(";")
            },
            getIEPluginsString: function() {
                if (window.ActiveXObject) {
                    var e = ["ShockwaveFlash.ShockwaveFlash", "AcroPDF.PDF", "PDF.PdfCtrl", "QuickTime.QuickTime", "rmocx.RealPlayer G2 Control", "rmocx.RealPlayer G2 Control.1", "RealPlayer.RealPlayer(tm) ActiveX Control (32-bit)", "RealVideo.RealVideo(tm) ActiveX Control (32-bit)", "RealPlayer", "SWCtl.SWCtl", "WMPlayer.OCX", "AgControl.AgControl", "Skype.Detection"];
                    return this.map(e, function(e) {
                        try {
                            return new ActiveXObject(e), e
                        } catch (e) {
                            return null
                        }
                    }).join(";")
                }
                return ""
            },
            getScreenResolution: function() {
                return [screen.height, screen.width]
            },
            getCanvasFingerprint: function() {
                var e = document.createElement("canvas"),
                    t = e.getContext("2d"),
                    n = "http://valve.github.io";
                return t.textBaseline = "top", t.font = "14px 'Arial'", t.textBaseline = "alphabetic", t.fillStyle = "#f60", t.fillRect(125, 1, 62, 20), t.fillStyle = "#069", t.fillText(n, 2, 15), t.fillStyle = "rgba(102, 204, 0, 0.7)", t.fillText(n, 4, 17), e.toDataURL()
            }
        }, e
    })
}, function(e, t) {
    "undefined" == typeof window && (window = {
        ctrl: {},
        lib: {}
    }), !window.ctrl && (window.ctrl = {}), !window.lib && (window.lib = {}), function(e, t) {
        function n() {
            var e = {},
                t = new p(function(t, n) {
                    e.resolve = t, e.reject = n
                });
            return e.promise = t, e
        }
        function r(e, t) {
            for (var n in t)
                void 0 === e[n] && (e[n] = t[n]);
            return e
        }
        function o(e) {
            (document.getElementsByTagName("head")[0] || document.getElementsByTagName("body")[0] || document.firstElementChild || document).appendChild(e)
        }
        function i(e) {
            var t = [];
            for (var n in e)
                e[n] && t.push(n + "=" + encodeURIComponent(e[n]));
            return t.join("&")
        }
        function a(e) {
            return e.substring(e.lastIndexOf(".", e.lastIndexOf(".") - 1) + 1)
        }
        function s(e) {
            function t(e, t) {
                return e << t | e >>> 32 - t
            }
            function n(e, t) {
                var n,
                    r,
                    o,
                    i,
                    a;
                return o = 2147483648 & e, i = 2147483648 & t, n = 1073741824 & e, r = 1073741824 & t, a = (1073741823 & e) + (1073741823 & t), n & r ? 2147483648 ^ a ^ o ^ i : n | r ? 1073741824 & a ? 3221225472 ^ a ^ o ^ i : 1073741824 ^ a ^ o ^ i : a ^ o ^ i
            }
            function r(e, t, n) {
                return e & t | ~e & n
            }
            function o(e, t, n) {
                return e & n | t & ~n
            }
            function i(e, t, n) {
                return e ^ t ^ n
            }
            function a(e, t, n) {
                return t ^ (e | ~n)
            }
            function s(e, o, i, a, s, l, c) {
                return e = n(e, n(n(r(o, i, a), s), c)), n(t(e, l), o)
            }
            function l(e, r, i, a, s, l, c) {
                return e = n(e, n(n(o(r, i, a), s), c)), n(t(e, l), r)
            }
            function c(e, r, o, a, s, l, c) {
                return e = n(e, n(n(i(r, o, a), s), c)), n(t(e, l), r)
            }
            function u(e, r, o, i, s, l, c) {
                return e = n(e, n(n(a(r, o, i), s), c)), n(t(e, l), r)
            }
            function d(e) {
                var t,
                    n,
                    r = "",
                    o = "";
                for (n = 0; 3 >= n; n++)
                    t = e >>> 8 * n & 255, o = "0" + t.toString(16), r += o.substr(o.length - 2, 2);
                return r
            }
            var f,
                p,
                h,
                v,
                m,
                g,
                y,
                b,
                _,
                w = [];
            for (w = function(e) {
                for (var t, n = e.length, r = n + 8, o = 16 * ((r - r % 64) / 64 + 1), i = new Array(o - 1), a = 0, s = 0; n > s;)
                    t = (s - s % 4) / 4, a = s % 4 * 8, i[t] = i[t] | e.charCodeAt(s) << a, s++;
                return t = (s - s % 4) / 4, a = s % 4 * 8, i[t] = i[t] | 128 << a, i[o - 2] = n << 3, i[o - 1] = n >>> 29, i
            }(e = function(e) {
                e = e.replace(/\r\n/g, "\n");
                for (var t = "", n = 0; n < e.length; n++) {
                    var r = e.charCodeAt(n);
                    128 > r ? t += String.fromCharCode(r) : r > 127 && 2048 > r ? (t += String.fromCharCode(r >> 6 | 192), t += String.fromCharCode(63 & r | 128)) : (t += String.fromCharCode(r >> 12 | 224), t += String.fromCharCode(r >> 6 & 63 | 128), t += String.fromCharCode(63 & r | 128))
                }
                return t
            }(e)), g = 1732584193, y = 4023233417, b = 2562383102, _ = 271733878, f = 0; f < w.length; f += 16)
                p = g, h = y, v = b, m = _, g = s(g, y, b, _, w[f + 0], 7, 3614090360), _ = s(_, g, y, b, w[f + 1], 12, 3905402710), b = s(b, _, g, y, w[f + 2], 17, 606105819), y = s(y, b, _, g, w[f + 3], 22, 3250441966), g = s(g, y, b, _, w[f + 4], 7, 4118548399), _ = s(_, g, y, b, w[f + 5], 12, 1200080426), b = s(b, _, g, y, w[f + 6], 17, 2821735955), y = s(y, b, _, g, w[f + 7], 22, 4249261313), g = s(g, y, b, _, w[f + 8], 7, 1770035416), _ = s(_, g, y, b, w[f + 9], 12, 2336552879), b = s(b, _, g, y, w[f + 10], 17, 4294925233), y = s(y, b, _, g, w[f + 11], 22, 2304563134), g = s(g, y, b, _, w[f + 12], 7, 1804603682), _ = s(_, g, y, b, w[f + 13], 12, 4254626195), b = s(b, _, g, y, w[f + 14], 17, 2792965006), y = s(y, b, _, g, w[f + 15], 22, 1236535329), g = l(g, y, b, _, w[f + 1], 5, 4129170786), _ = l(_, g, y, b, w[f + 6], 9, 3225465664), b = l(b, _, g, y, w[f + 11], 14, 643717713), y = l(y, b, _, g, w[f + 0], 20, 3921069994), g = l(g, y, b, _, w[f + 5], 5, 3593408605), _ = l(_, g, y, b, w[f + 10], 9, 38016083), b = l(b, _, g, y, w[f + 15], 14, 3634488961), y = l(y, b, _, g, w[f + 4], 20, 3889429448), g = l(g, y, b, _, w[f + 9], 5, 568446438), _ = l(_, g, y, b, w[f + 14], 9, 3275163606), b = l(b, _, g, y, w[f + 3], 14, 4107603335), y = l(y, b, _, g, w[f + 8], 20, 1163531501), g = l(g, y, b, _, w[f + 13], 5, 2850285829), _ = l(_, g, y, b, w[f + 2], 9, 4243563512), b = l(b, _, g, y, w[f + 7], 14, 1735328473), y = l(y, b, _, g, w[f + 12], 20, 2368359562), g = c(g, y, b, _, w[f + 5], 4, 4294588738), _ = c(_, g, y, b, w[f + 8], 11, 2272392833), b = c(b, _, g, y, w[f + 11], 16, 1839030562), y = c(y, b, _, g, w[f + 14], 23, 4259657740), g = c(g, y, b, _, w[f + 1], 4, 2763975236), _ = c(_, g, y, b, w[f + 4], 11, 1272893353), b = c(b, _, g, y, w[f + 7], 16, 4139469664), y = c(y, b, _, g, w[f + 10], 23, 3200236656), g = c(g, y, b, _, w[f + 13], 4, 681279174), _ = c(_, g, y, b, w[f + 0], 11, 3936430074), b = c(b, _, g, y, w[f + 3], 16, 3572445317), y = c(y, b, _, g, w[f + 6], 23, 76029189), g = c(g, y, b, _, w[f + 9], 4, 3654602809), _ = c(_, g, y, b, w[f + 12], 11, 3873151461), b = c(b, _, g, y, w[f + 15], 16, 530742520), y = c(y, b, _, g, w[f + 2], 23, 3299628645), g = u(g, y, b, _, w[f + 0], 6, 4096336452), _ = u(_, g, y, b, w[f + 7], 10, 1126891415), b = u(b, _, g, y, w[f + 14], 15, 2878612391), y = u(y, b, _, g, w[f + 5], 21, 4237533241), g = u(g, y, b, _, w[f + 12], 6, 1700485571), _ = u(_, g, y, b, w[f + 3], 10, 2399980690), b = u(b, _, g, y, w[f + 10], 15, 4293915773), y = u(y, b, _, g, w[f + 1], 21, 2240044497), g = u(g, y, b, _, w[f + 8], 6, 1873313359), _ = u(_, g, y, b, w[f + 15], 10, 4264355552), b = u(b, _, g, y, w[f + 6], 15, 2734768916), y = u(y, b, _, g, w[f + 13], 21, 1309151649), g = u(g, y, b, _, w[f + 4], 6, 4149444226), _ = u(_, g, y, b, w[f + 11], 10, 3174756917), b = u(b, _, g, y, w[f + 2], 15, 718787259), y = u(y, b, _, g, w[f + 9], 21, 3951481745), g = n(g, p), y = n(y, h), b = n(b, v), _ = n(_, m);
            return (d(g) + d(y) + d(b) + d(_)).toLowerCase()
        }
        function l(e) {
            return "[object Object]" == {}.toString.call(e)
        }
        function c(e, t, n) {
            var r = n || {};
            document.cookie = e.replace(/[^+#$&^`|]/g, encodeURIComponent).replace("(", "%28").replace(")", "%29") + "=" + t.replace(/[^+#$&\/:<-\[\]-}]/g, encodeURIComponent) + (r.domain ? ";domain=" + r.domain : "") + (r.path ? ";path=" + r.path : "") + (r.secure ? ";secure" : "") + (r.httponly ? ";HttpOnly" : "")
        }
        function u(e) {
            var t = new RegExp("(?:^|;\\s*)" + e + "\\=([^;]+)(?:;\\s*|$)").exec(document.cookie);
            return t ? t[1] : void 0
        }
        function d(e, t, n) {
            var r = new Date;
            r.setTime(r.getTime() - 864e5);
            document.cookie = e + "=;path=/;domain=." + t + ";expires=" + r.toGMTString(), document.cookie = e + "=;path=/;domain=." + n + "." + t + ";expires=" + r.toGMTString()
        }
        function f(e) {
            this.id = ++b, this.params = r(e || {}, {
                v: "*",
                data: {},
                type: "get",
                dataType: "jsonp"
            }), this.params.type = this.params.type.toLowerCase(), "object" == typeof this.params.data && (this.params.data = JSON.stringify(this.params.data)), this.middlewares = m.slice(0)
        }
        var p = e.Promise,
            h = (p || {
                resolve: function() {}
            }).resolve();
        String.prototype.trim || (String.prototype.trim = function() {
            return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
        });
        var v = {
                useJsonpResultType: !1,
                safariGoLogin: !0,
                useAlipayJSBridge: !1
            },
            m = [],
            g = {
                ERROR: -1,
                SUCCESS: 0,
                TOKEN_EXPIRED: 1,
                SESSION_EXPIRED: 2
            };
        (function() {
            var t = e.location.hostname;
            if (!t) {
                var n = e.parent.location.hostname;
                n && ~n.indexOf("zebra.alibaba-inc.com") && (t = n)
            }
            var r = new RegExp("([^.]*?)\\.?((?:" + ["taobao.net", "taobao.com", "tmall.com", "tmall.hk", "alibaba-inc.com"].join(")|(?:").replace(/\./g, "\\.") + "))", "i"),
                o = t.match(r) || [],
                i = o[2] || "taobao.com",
                a = o[1] || "m";
            "taobao.net" !== i || "x" !== a && "waptest" !== a && "daily" !== a ? "taobao.net" === i && "demo" === a ? a = "demo" : "alibaba-inc.com" === i && "zebra" === a ? a = "zebra" : "waptest" !== a && "wapa" !== a && "m" !== a && (a = "m") : a = "waptest", v.mainDomain = i, v.subDomain = a, v.prefix = "h5api"
        })(), function() {
            var t = e.navigator.userAgent,
                n = t.match(/WindVane[\/\s]([\d\.\_]+)/);
            n && (v.WindVaneVersion = n[1]);
            var r = t.match(/AliApp\(([^\/]+)\/([\d\.\_]+)\)/i);
            r && (v.AliAppName = r[1], v.AliAppVersion = r[2])
        }();
        var y = "AP" === v.AliAppName && parseFloat(v.AliAppVersion) >= 10.1;
        y && 10.1 === parseFloat(v.AliAppVersion) && parseInt(v.AliAppVersion.substr(5)) < 2 && (y = !1);
        var b = 0;
        f.prototype.use = function(e) {
            if (!e)
                throw new Error("middleware is undefined");
            return this.middlewares.push(e), this
        }, f.prototype.__processRequestMethod = function(e) {
            var t = this.params,
                n = this.options;
            "get" === t.type && "jsonp" === t.dataType ? n.getJSONP = !0 : "get" === t.type && "originaljsonp" === t.dataType ? n.getOriginalJSONP = !0 : "get" === t.type && "json" === t.dataType ? n.getJSON = !0 : "post" === t.type && (n.postJSON = !0), e()
        }, f.prototype.__processRequestType = function(n) {
            var r = this,
                o = this.params,
                i = this.options;
            if (!0 === v.H5Request && (i.H5Request = !0), !0 === v.WindVaneRequest && (i.WindVaneRequest = !0), !1 === i.H5Request && !0 === i.WindVaneRequest) {
                if (!y && (!t.windvane || parseFloat(i.WindVaneVersion) < 5.4))
                    throw new Error("WINDVANE_NOT_FOUND::缺少WindVane环境");
                if (y && !e.AlipayJSBridge)
                    throw new Error("ALIPAY_NOT_READY::支付宝通道未准备好，支付宝请见 https://lark.alipay.com/mtbsdkdocs/mtopjssdkdocs/pucq6z")
            } else if (!0 === i.H5Request)
                i.WindVaneRequest = !1;
            else if (void 0 === i.WindVaneRequest && void 0 === i.H5Request && (t.windvane && parseFloat(i.WindVaneVersion) >= 5.4 ? i.WindVaneRequest = !0 : i.H5Request = !0, y))
                if (i.WindVaneRequest = i.H5Request = void 0, e.AlipayJSBridge)
                    if (l(o.data))
                        i.WindVaneRequest = !0;
                    else
                        try {
                            l(JSON.parse(o.data)) ? i.WindVaneRequest = !0 : i.H5Request = !0
                        } catch (e) {
                            i.H5Request = !0
                        }
                else
                    i.H5Request = !0;
            var a = e.navigator.userAgent.toLowerCase();
            return a.indexOf("youku") > -1 && i.mainDomain.indexOf("youku.com") < 0 && (i.WindVaneRequest = !1, i.H5Request = !0), i.mainDomain.indexOf("youku.com") > -1 && a.indexOf("youku") < 0 && (i.WindVaneRequest = !1, i.H5Request = !0), n ? n().then(function() {
                var e = i.retJson.ret;
                if (e instanceof Array && (e = e.join(",")), !0 === i.WindVaneRequest && y && i.retJson.error || !e || e.indexOf("PARAM_PARSE_ERROR") > -1 || e.indexOf("HY_FAILED") > -1 || e.indexOf("HY_NO_HANDLER") > -1 || e.indexOf("HY_CLOSED") > -1 || e.indexOf("HY_EXCEPTION") > -1 || e.indexOf("HY_NO_PERMISSION") > -1) {
                    if (!y || !isNaN(i.retJson.error) || -1 !== i.retJson.error.indexOf("FAIL_SYS_ACCESS_DENIED"))
                        return y && l(o.data) && (o.data = JSON.stringify(o.data)), v.H5Request = !0, r.__sequence([r.__processRequestType, r.__processToken, r.__processRequestUrl, r.middlewares, r.__processRequest]);
                    void 0 === i.retJson.api && void 0 === i.retJson.v && (i.retJson.api = o.api, i.retJson.v = o.v, i.retJson.ret = [i.retJson.error + "::" + i.retJson.errorMessage], i.retJson.data = {})
                }
            }) : void 0
        };
        var _ = "_m_h5_c",
            w = "_m_h5_tk";
        f.prototype.__getTokenFromAlipay = function() {
            var t = n(),
                r = this.options,
                o = (e.navigator.userAgent, !!location.protocol.match(/^https?\:$/));
            return !0 === r.useAlipayJSBridge && !o && y && e.AlipayJSBridge && e.AlipayJSBridge.call ? e.AlipayJSBridge.call("getMtopToken", function(e) {
                e && e.token && (r.token = e.token), t.resolve()
            }, function() {
                t.resolve()
            }) : t.resolve(), t.promise
        }, f.prototype.__getTokenFromCookie = function() {
            var e = this.options;
            return e.CDR && u(_) ? e.token = u(_).split(";")[0] : e.token = e.token || u(w), e.token && (e.token = e.token.split("_")[0]), p.resolve()
        }, f.prototype.__waitWKWebViewCookie = function(t) {
            var n = this.options;
            n.waitWKWebViewCookieFn && n.H5Request && e.webkit && e.webkit.messageHandlers ? n.waitWKWebViewCookieFn(t) : t()
        }, f.prototype.__processToken = function(e) {
            var t = this,
                n = this.options;
            return this.params, n.token && delete n.token, !0 !== n.WindVaneRequest ? h.then(function() {
                return t.__getTokenFromAlipay()
            }).then(function() {
                return t.__getTokenFromCookie()
            }).then(e).then(function() {
                var e = n.retJson,
                    r = e.ret;
                if (r instanceof Array && (r = r.join(",")), r.indexOf("TOKEN_EMPTY") > -1 || !0 === n.CDR && r.indexOf("ILLEGAL_ACCESS") > -1 || r.indexOf("TOKEN_EXOIRED") > -1) {
                    if (n.maxRetryTimes = n.maxRetryTimes || 5, n.failTimes = n.failTimes || 0, n.H5Request && ++n.failTimes < n.maxRetryTimes)
                        return t.__sequence([t.__waitWKWebViewCookie, t.__processToken, t.__processRequestUrl, t.middlewares, t.__processRequest]);
                    n.maxRetryTimes > 0 && (d(_, n.pageDomain, "*"), d(w, n.mainDomain, n.subDomain), d("_m_h5_tk_enc", n.mainDomain, n.subDomain)), e.retType = g.TOKEN_EXPIRED
                }
            }) : void e()
        }, f.prototype.__processRequestUrl = function(t) {
            var n = this.params,
                r = this.options;
            if (r.hostSetting && r.hostSetting[e.location.hostname]) {
                var o = r.hostSetting[e.location.hostname];
                o.prefix && (r.prefix = o.prefix), o.subDomain && (r.subDomain = o.subDomain), o.mainDomain && (r.mainDomain = o.mainDomain)
            }
            if (!0 === r.H5Request) {
                var i = "//" + (r.prefix ? r.prefix + "." : "") + (r.subDomain ? r.subDomain + "." : "") + r.mainDomain + "/h5/" + n.api.toLowerCase() + "/" + n.v.toLowerCase() + "/",
                    a = n.appKey || ("waptest" === r.subDomain ? "4272" : "12574478"),
                    l = (new Date).getTime(),
                    c = {
                        jsv: "2.4.10",
                        appKey: a,
                        t: l,
                        sign: s(r.token + "&" + l + "&" + a + "&" + n.data)
                    },
                    u = {
                        data: n.data,
                        ua: n.ua
                    };
                Object.keys(n).forEach(function(e) {
                    void 0 === c[e] && void 0 === u[e] && (c[e] = n[e])
                }), r.getJSONP ? c.type = "jsonp" : r.getOriginalJSONP ? c.type = "originaljsonp" : (r.getJSON || r.postJSON) && (c.type = "originaljson"), void 0 !== n.valueType && ("original" === n.valueType ? r.getJSONP || r.getOriginalJSONP ? c.type = "originaljsonp" : (r.getJSON || r.postJSON) && (c.type = "originaljson") : "string" === n.valueType && (r.getJSONP || r.getOriginalJSONP ? c.type = "jsonp" : (r.getJSON || r.postJSON) && (c.type = "json"))), !0 === r.useJsonpResultType && "originaljson" === c.type && delete c.type, r.dangerouslySetProtocol && (i = r.dangerouslySetProtocol + ":" + i), r.querystring = c, r.postdata = u, r.path = i
            }
            t()
        }, f.prototype.__processUnitPrefix = function(e) {
            e()
        };
        var E = 0;
        f.prototype.__requestJSONP = function(e) {
            function t(e) {
                if (u && clearTimeout(u), d.parentNode && d.parentNode.removeChild(d), "TIMEOUT" === e)
                    window[c] = function() {
                        window[c] = void 0;
                        try {
                            delete window[c]
                        } catch (e) {}
                    };
                else {
                    window[c] = void 0;
                    try {
                        delete window[c]
                    } catch (e) {}
                }
            }
            var r = n(),
                a = this.params,
                s = this.options,
                l = a.timeout || 2e4,
                c = "mtopjsonp" + (a.jsonpIncPrefix || "") + ++E,
                u = setTimeout(function() {
                    e(s.timeoutErrMsg || "TIMEOUT::接口超时"), t("TIMEOUT")
                }, l);
            s.querystring.callback = c;
            var d = document.createElement("script");
            return d.src = s.path + "?" + i(s.querystring) + "&" + i(s.postdata), d.async = !0, d.onerror = function() {
                t("ABORT"), e(s.abortErrMsg || "ABORT::接口异常退出")
            }, window[c] = function() {
                s.results = Array.prototype.slice.call(arguments), t(), r.resolve()
            }, o(d), r.promise
        }, f.prototype.__requestJSON = function(t) {
            function r(e) {
                d && clearTimeout(d), "TIMEOUT" === e && l.abort()
            }
            var o = n(),
                a = this.params,
                s = this.options,
                l = new e.XMLHttpRequest,
                c = a.timeout || 2e4,
                d = setTimeout(function() {
                    t(s.timeoutErrMsg || "TIMEOUT::接口超时"), r("TIMEOUT")
                }, c);
            s.CDR && u(_) && (s.querystring.c = decodeURIComponent(u(_))), l.onreadystatechange = function() {
                if (4 == l.readyState) {
                    var e,
                        n,
                        i = l.status;
                    if (i >= 200 && 300 > i || 304 == i) {
                        r(), e = l.responseText, n = l.getAllResponseHeaders() || "";
                        try {
                            (e = /^\s*$/.test(e) ? {} : JSON.parse(e)).responseHeaders = n, s.results = [e], o.resolve()
                        } catch (e) {
                            t("PARSE_JSON_ERROR::解析JSON失败")
                        }
                    } else
                        r("ABORT"), t(s.abortErrMsg || "ABORT::接口异常退出")
                }
            };
            var f,
                p,
                h = s.path + "?" + i(s.querystring);
            if (s.getJSON ? (f = "GET", h += "&" + i(s.postdata)) : s.postJSON && (f = "POST", p = i(s.postdata)), l.open(f, h, !0), l.withCredentials = !0, l.setRequestHeader("Accept", "application/json"), l.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), a.headers)
                for (var v in a.headers)
                    l.setRequestHeader(v, a.headers[v]);
            return l.send(p), o.promise
        }, f.prototype.__requestWindVane = function(e) {
            function r(e) {
                a.results = [e], o.resolve()
            }
            var o = n(),
                i = this.params,
                a = this.options,
                s = i.data,
                l = i.api,
                c = i.v,
                u = a.postJSON ? 1 : 0,
                d = a.getJSON || a.postJSON || a.getOriginalJSONP ? "originaljson" : "";
            void 0 !== i.valueType && ("original" === i.valueType ? d = "originaljson" : "string" === i.valueType && (d = "")), !0 === a.useJsonpResultType && (d = "");
            var f,
                p,
                h = "https" === location.protocol ? 1 : 0,
                v = i.isSec || 0,
                m = i.sessionOption || "AutoLoginOnly",
                g = i.ecode || 0;
            f = 2 * (p = void 0 !== i.timer ? parseInt(i.timer) : void 0 !== i.timeout ? parseInt(i.timeout) : 2e4), !0 === i.needLogin && void 0 === i.sessionOption && (m = "AutoLoginAndManualLogin"), void 0 !== i.secType && void 0 === i.isSec && (v = i.secType);
            var y = {
                api: l,
                v: c,
                post: String(u),
                type: d,
                isHttps: String(h),
                ecode: String(g),
                isSec: String(v),
                param: JSON.parse(s),
                timer: p,
                sessionOption: m,
                ext_headers: {
                    referer: location.href
                }
            };
            return i.ttid && !0 === a.dangerouslySetWVTtid && (y.ttid = i.ttid), t.windvane.call("MtopWVPlugin", "send", y, r, r, f), o.promise
        }, f.prototype.__requestAlipay = function(t) {
            var r = n(),
                o = this.params,
                i = this.options,
                a = {
                    apiName: o.api,
                    apiVersion: o.v,
                    needEcodeSign: !!o.ecode,
                    usePost: !!i.postJSON
                };
            return l(o.data) || (o.data = JSON.parse(o.data)), a.data = o.data, o.ttid && !0 === i.dangerouslySetWVTtid && (a.ttid = o.ttid), (i.getJSON || i.postJSON || i.getOriginalJSONP) && (a.type = "originaljson"), void 0 !== o.valueType && ("original" === o.valueType ? a.type = "originaljson" : "string" === o.valueType && delete a.type), !0 === i.useJsonpResultType && delete a.type, e.AlipayJSBridge.call("mtop", a, function(e) {
                i.results = [e], r.resolve()
            }), r.promise
        }, f.prototype.__processRequest = function(e, t) {
            var n = this;
            return h.then(function() {
                var e = n.options;
                if (e.H5Request && (e.getJSONP || e.getOriginalJSONP))
                    return n.__requestJSONP(t);
                if (e.H5Request && (e.getJSON || e.postJSON))
                    return n.__requestJSON(t);
                if (e.WindVaneRequest)
                    return y ? n.__requestAlipay(t) : n.__requestWindVane(t);
                throw new Error("UNEXCEPT_REQUEST::错误的请求类型")
            }).then(e).then(function() {
                var e = n.options,
                    t = (n.params, e.results[0]),
                    r = t && t.ret || [];
                t.ret = r, r instanceof Array && (r = r.join(","));
                var o = t.c;
                e.CDR && o && c(_, o, {
                    domain: e.pageDomain,
                    path: "/"
                }), r.indexOf("SUCCESS") > -1 ? t.retType = g.SUCCESS : t.retType = g.ERROR, e.retJson = t
            })
        }, f.prototype.__sequence = function(e) {
            function t(e) {
                if (e instanceof Array)
                    e.forEach(t);
                else {
                    var a,
                        s = n(),
                        l = n();
                    o.push(function() {
                        return s = n(), (a = e.call(r, function(e) {
                            return s.resolve(e), l.promise
                        }, function(e) {
                            return s.reject(e), l.promise
                        })) && (a = a.catch(function(e) {
                            s.reject(e)
                        })), s.promise
                    }), i.push(function(e) {
                        return l.resolve(e), a
                    })
                }
            }
            var r = this,
                o = [],
                i = [];
            e.forEach(t);
            for (var a, s = h; a = o.shift();)
                s = s.then(a);
            for (; a = i.pop();)
                s = s.then(a);
            return s
        };
        var x = function(e) {
                e()
            },
            T = function(e) {
                e()
            };
        f.prototype.request = function(n) {
            var o = this;
            if (this.options = r(n || {}, v), !p) {
                var i = "当前浏览器不支持Promise，请在windows对象上挂载Promise对象可参考（http://gitlab.alibaba-inc.com/mtb/lib-es6polyfill/tree/master）中的解决方案";
                throw t.mtop = {
                    ERROR: i
                }, new Error(i)
            }
            var s = p.resolve([x, T]).then(function(e) {
                var t = e[0],
                    n = e[1];
                return o.__sequence([t, o.__processRequestMethod, o.__processRequestType, o.__processToken, o.__processRequestUrl, o.middlewares, o.__processRequest, n])
            }).then(function() {
                var e = o.options.retJson;
                return e.retType !== g.SUCCESS ? p.reject(e) : o.options.successCallback ? void o.options.successCallback(e) : p.resolve(e)
            }).catch(function(e) {
                var t;
                return e instanceof Error ? (console.error(e.stack), t = {
                    ret: [e.message],
                    stack: [e.stack],
                    retJson: g.ERROR
                }) : t = "string" == typeof e ? {
                    ret: [e],
                    retJson: g.ERROR
                } : void 0 !== e ? e : o.options.retJson, o.options.failureCallback ? void o.options.failureCallback(t) : p.reject(t)
            });
            return this.__processRequestType(), o.options.H5Request && (o.constructor.__firstProcessor || (o.constructor.__firstProcessor = s), x = function(e) {
                o.constructor.__firstProcessor.then(e).catch(e)
            }), ("get" === this.params.type && "json" === this.params.dataType || "post" === this.params.type) && (n.pageDomain = n.pageDomain || a(e.location.hostname), n.mainDomain !== n.pageDomain && (n.maxRetryTimes = 4, n.CDR = !0)), s
        }, t.mtop = function(e) {
            return new f(e)
        }, t.mtop.request = function(e, t, n) {
            var r = {
                H5Request: e.H5Request,
                WindVaneRequest: e.WindVaneRequest,
                LoginRequest: e.LoginRequest,
                AntiCreep: e.AntiCreep,
                AntiFlood: e.AntiFlood,
                successCallback: t,
                failureCallback: n || t
            };
            return new f(e).request(r)
        }, t.mtop.H5Request = function(e, t, n) {
            var r = {
                H5Request: !0,
                successCallback: t,
                failureCallback: n || t
            };
            return new f(e).request(r)
        }, t.mtop.middlewares = m, t.mtop.config = v, t.mtop.RESPONSE_TYPE = g, t.mtop.CLASS = f
    }(window, window.lib || (window.lib = {})), function(e, t) {
        function n(e) {
            return e.preventDefault(), !1
        }
        function r(e) {
            var t = new RegExp("(?:^|;\\s*)" + e + "\\=([^;]+)(?:;\\s*|$)").exec(document.cookie);
            return t ? t[1] : void 0
        }
        function o(t, r) {
            var o = this,
                i = e.dpr || 1,
                a = document.createElement("div"),
                s = document.documentElement.getBoundingClientRect(),
                l = Math.max(s.width, window.innerWidth) / i,
                c = Math.max(s.height, window.innerHeight) / i;
            a.style.cssText = ["-webkit-transform:scale(" + i + ") translateZ(0)", "-ms-transform:scale(" + i + ") translateZ(0)", "transform:scale(" + i + ") translateZ(0)", "-webkit-transform-origin:0 0", "-ms-transform-origin:0 0", "transform-origin:0 0", "width:" + l + "px", "height:" + c + "px", "z-index:999999", "position:" + (l > 800 ? "fixed" : "absolute"), "left:0", "top:0px", "background:" + (l > 800 ? "rgba(0,0,0,.5)" : "#FFF"), "display:none"].join(";");
            var u = document.createElement("div");
            u.style.cssText = ["width:100%", "height:52px", "background:#EEE", "line-height:52px", "text-align:left", "box-sizing:border-box", "padding-left:20px", "position:absolute", "left:0", "top:0", "font-size:16px", "font-weight:bold", "color:#333"].join(";"), u.innerText = t;
            var d = document.createElement("a");
            d.style.cssText = ["display:block", "position:absolute", "right:0", "top:0", "height:52px", "line-height:52px", "padding:0 20px", "color:#999"].join(";"), d.innerText = "关闭";
            var f = document.createElement("iframe");
            f.style.cssText = ["width:100%", "height:100%", "border:0", "overflow:hidden"].join(";"), l > 800 && (u.style.cssText = ["width:370px", "height:52px", "background:#EEE", "line-height:52px", "text-align:left", "box-sizing:border-box", "padding-left:20px", "position:absolute", "left:" + (l / 2 - 185) + "px", "top:40px", "font-size:16px", "font-weight:bold", "color:#333"].join(";"), f.style.cssText = ["position:absolute", "top:92px", "left:" + (l / 2 - 185) + "px", "width:370px", "height:480px", "border:0", "background:#FFF", "overflow:hidden"].join(";")), u.appendChild(d), a.appendChild(u), a.appendChild(f), a.className = "J_MIDDLEWARE_FRAME_WIDGET", document.body.appendChild(a), f.src = r, d.addEventListener("click", function() {
                o.hide();
                var e = document.createEvent("HTMLEvents");
                e.initEvent("close", !1, !1), a.dispatchEvent(e)
            }, !1), this.addEventListener = function() {
                a.addEventListener.apply(a, arguments)
            }, this.removeEventListener = function() {
                a.removeEventListener.apply(a, arguments)
            }, this.show = function() {
                document.addEventListener("touchmove", n, !1), a.style.display = "block", window.scrollTo(0, 0)
            }, this.hide = function() {
                document.removeEventListener("touchmove", n), window.scrollTo(0, -s.top), a.parentNode && a.parentNode.removeChild(a)
            }
        }
        if (!t || !t.mtop || t.mtop.ERROR)
            throw new Error("Mtop 初始化失败！请参考Mtop文档http://gitlab.alibaba-inc.com/mtb/lib-mtop");
        var i = e.Promise,
            a = t.mtop.CLASS,
            s = t.mtop.config,
            l = t.mtop.RESPONSE_TYPE;
        t.mtop.middlewares.push(function(e) {
            var n = this,
                r = this.options,
                o = this.params;
            return e().then(function() {
                var e = r.retJson,
                    i = e.ret,
                    a = navigator.userAgent.toLowerCase(),
                    c = a.indexOf("safari") > -1 && a.indexOf("chrome") < 0 && a.indexOf("qqbrowser") < 0;
                if (i instanceof Array && (i = i.join(",")), (i.indexOf("SESSION_EXPIRED") > -1 || i.indexOf("SID_INVALID") > -1 || i.indexOf("AUTH_REJECT") > -1 || i.indexOf("NEED_LOGIN") > -1) && (e.retType = l.SESSION_EXPIRED, !r.WindVaneRequest && (!0 === s.LoginRequest || !0 === r.LoginRequest || !0 === o.needLogin))) {
                    if (!t.login)
                        throw new Error("LOGIN_NOT_FOUND::缺少lib.login");
                    if (!0 !== r.safariGoLogin || !c || "taobao.com" === r.pageDomain)
                        return t.login.goLoginAsync().then(function(e) {
                            return n.__sequence([n.__processToken, n.__processRequestUrl, n.__processUnitPrefix, n.middlewares, n.__processRequest])
                        }).catch(function(e) {
                            throw "CANCEL" === e ? new Error("LOGIN_CANCEL::用户取消登录") : new Error("LOGIN_FAILURE::用户登录失败")
                        });
                    t.login.goLogin()
                }
            })
        }), t.mtop.loginRequest = function(e, t, n) {
            var r = {
                LoginRequest: !0,
                H5Request: !0,
                successCallback: t,
                failureCallback: n || t
            };
            return new a(e).request(r)
        }, t.mtop.antiFloodRequest = function(e, t, n) {
            var r = {
                AntiFlood: !0,
                successCallback: t,
                failureCallback: n || t
            };
            return new a(e).request(r)
        }, t.mtop.middlewares.push(function(e) {
            var t = this.options;
            return this.params, !0 !== t.H5Request || !0 !== s.AntiFlood && !0 !== t.AntiFlood ? void e() : e().then(function() {
                var e = t.retJson,
                    n = e.ret;
                n instanceof Array && (n = n.join(",")), n.indexOf("FAIL_SYS_USER_VALIDATE") > -1 && e.data.url && (t.AntiFloodReferer ? location.href = e.data.url.replace(/(http_referer=).+/, "$1" + t.AntiFloodReferer) : location.href = e.data.url)
            })
        }), t.mtop.antiCreepRequest = function(e, t, n) {
            var r = {
                AntiCreep: !0,
                successCallback: t,
                failureCallback: n || t
            };
            return new a(e).request(r)
        }, t.mtop.middlewares.push(function(t) {
            var n = this,
                a = this.options,
                l = this.params;
            return !0 !== l.forceAntiCreep && !0 !== a.H5Request || !0 !== s.AntiCreep && !0 !== a.AntiCreep ? void t() : t().then(function() {
                var t = a.retJson,
                    s = t.ret;
                if (s instanceof Array && (s = s.join(",")), s.indexOf("RGV587_ERROR::SM") > -1 && t.data.url) {
                    var c = "_m_h5_smt",
                        u = r(c),
                        d = !1;
                    if (!0 === a.saveAntiCreepToken && u) {
                        u = JSON.parse(u);
                        for (var f in u)
                            l[f] && (d = !0)
                    }
                    if (!0 === a.saveAntiCreepToken && u && !d) {
                        for (var f in u)
                            l[f] = u[f];
                        return n.__sequence([n.__processToken, n.__processRequestUrl, n.__processUnitPrefix, n.middlewares, n.__processRequest])
                    }
                    return new i(function(r, i) {
                        function s() {
                            d.removeEventListener("close", s), e.removeEventListener("message", u), i("USER_INPUT_CANCEL::用户取消输入")
                        }
                        function u(t) {
                            var o;
                            try {
                                o = JSON.parse(t.data) || {}
                            } catch (e) {}
                            if (o && "child" === o.type) {
                                d.removeEventListener("close", s), e.removeEventListener("message", u), d.hide();
                                var f;
                                try {
                                    "string" == typeof (f = JSON.parse(decodeURIComponent(o.content))) && (f = JSON.parse(f));
                                    for (var p in f)
                                        l[p] = f[p];
                                    !0 === a.saveAntiCreepToken ? (document.cookie = c + "=" + JSON.stringify(f) + ";", e.location.reload()) : n.__sequence([n.__processToken, n.__processRequestUrl, n.__processUnitPrefix, n.middlewares, n.__processRequest]).then(r)
                                } catch (e) {
                                    i("USER_INPUT_FAILURE::用户输入失败")
                                }
                            }
                        }
                        var d = new o("", t.data.url);
                        d.addEventListener("close", s, !1), e.addEventListener("message", u, !1), d.show()
                    })
                }
            })
        })
    }(window, window.lib || (window.lib = {})), e.exports = window.lib.mtop
}, function(e, t) {
    "undefined" == typeof window && (window = {
        ctrl: {},
        lib: {}
    }), !window.ctrl && (window.ctrl = {}), !window.lib && (window.lib = {}), function(e, t, n) {
        function r(e) {
            var t = new RegExp("(?:^|;\\s*)" + e + "\\=([^;]+)(?:;\\s*|$)").exec(p.cookie);
            return t ? t[1] : n
        }
        function o(e) {
            return e.preventDefault(), !1
        }
        function i(t, n) {
            var r = this,
                i = e.dpr || 1,
                a = document.createElement("div"),
                s = document.documentElement.getBoundingClientRect(),
                l = Math.max(s.width, window.innerWidth) / i,
                c = Math.max(s.height, window.innerHeight) / i;
            a.style.cssText = ["-webkit-transform:scale(" + i + ") translateZ(0)", "-ms-transform:scale(" + i + ") translateZ(0)", "transform:scale(" + i + ") translateZ(0)", "-webkit-transform-origin:0 0", "-ms-transform-origin:0 0", "transform-origin:0 0", "width:" + l + "px", "height:" + c + "px", "z-index:999999", "position:absolute", "left:0", "top:0px", "background:#FFF", "display:none"].join(";");
            var u = document.createElement("div");
            u.style.cssText = ["width:100%", "height:52px", "background:#EEE", "line-height:52px", "text-align:left", "box-sizing:border-box", "padding-left:20px", "position:absolute", "left:0", "top:0", "font-size:16px", "font-weight:bold", "color:#333"].join(";"), u.innerText = t;
            var d = document.createElement("a");
            d.style.cssText = ["display:block", "position:absolute", "right:0", "top:0", "height:52px", "line-height:52px", "padding:0 20px", "color:#999"].join(";"), d.innerText = "关闭";
            var f = document.createElement("iframe");
            f.style.cssText = ["width:100%", "height:" + window.innerHeight / i + "px", "border:0", "overflow:hidden"].join(";"), u.appendChild(d), a.appendChild(u), a.appendChild(f), p.body.appendChild(a), f.src = n, d.addEventListener("click", function() {
                r.hide();
                var e = p.createEvent("HTMLEvents");
                e.initEvent("close", !1, !1), a.dispatchEvent(e)
            }, !1), this.addEventListener = function() {
                a.addEventListener.apply(a, arguments)
            }, this.removeEventListener = function() {
                a.removeEventListener.apply(a, arguments)
            }, this.show = function() {
                document.addEventListener("touchmove", o, !1), a.style.display = "block", window.scrollTo(0, 0)
            }, this.hide = function() {
                document.removeEventListener("touchmove", o), window.scrollTo(0, -s.top), p.body.removeChild(a)
            }
        }
        function a(e, n) {
            var r = "//" + T + "." + S.subDomain + "." + E + "/" + S[(e || "login") + "Name"];
            if (n) {
                var o = [];
                for (var i in n)
                    o.push(i + "=" + encodeURIComponent(n[i]));
                r += "?" + o.join("&")
            }
            var a = t.login.config.loginUrlParams;
            if (a) {
                var s = [];
                for (var l in a)
                    s.push(l + "=" + encodeURIComponent(a[l]));
                r += /\?/.test(r) ? "&" + s.join("&") : "?" + o.join("&")
            }
            return r
        }
        function s(e, t) {
            t ? location.replace(e) : location.href = e
        }
        function l(t, n, r) {
            function o() {
                c.removeEventListener("close", o), e.removeEventListener("message", s), r("CANCEL")
            }
            function s(t) {
                var n = t.data || {};
                n && "child" === n.type && n.content.indexOf("SUCCESS") > -1 ? (c.removeEventListener("close", o), e.removeEventListener("message", s), c.hide(), r("SUCCESS")) : r("FAILURE")
            }
            var l = a(t, {
                    ttid: "h5@iframe",
                    redirectURL: location.protocol + "//h5." + S.subDomain + ".taobao.com/" + ("waptest" === S.subDomain ? "src" : "other") + "/" + t + "end.html?origin=" + encodeURIComponent(location.protocol + "//" + location.hostname)
                }),
                c = new i(n.title || "您需要登录才能继续访问", l);
            c.addEventListener("close", o, !1), e.addEventListener("message", s, !1), c.show()
        }
        function c(t, n, r) {
            var o = a(t, {
                wvLoginCallback: "wvLoginCallback"
            });
            e.wvLoginCallback = function(t) {
                delete e.wvLoginCallback, r(t.indexOf(":SUCCESS") > -1 ? "SUCCESS" : t.indexOf(":CANCEL") > -1 ? "CANCEL" : "FAILURE")
            }, s(o)
        }
        function u(e, t, n) {
            "function" == typeof t ? (n = t, t = null) : "string" == typeof t && (t = {
                redirectUrl: t
            }), t = t || {}, n && y ? c(e, t, n) : n && !g && "login" === e ? l(e, t, n) : s(a(e, {
                redirectURL: t.redirectUrl || location.href
            }), t.replace)
        }
        function d(e, t, n) {
            var r;
            return f && (r = {}, r.promise = new f(function(e, t) {
                r.resolve = e, r.reject = t
            })), u(e, t, function(e) {
                n && n(e), "SUCCESS" === e ? r && r.resolve(e) : r && r.reject(e)
            }), r ? r.promise : void 0
        }
        var f = e.Promise,
            p = e.document,
            h = e.navigator.userAgent,
            v = location.hostname,
            m = (e.location.search, h.match(/WindVane[\/\s]([\d\.\_]+)/)),
            g = h.match(/AliApp\(([^\/]+)\/([\d\.\_]+)\)/i),
            y = !!(g && "TB" === g[1] && m && parseFloat(m[1]) > 5.2),
            b = "liblogin",
            _ = new RegExp("([^.]*?)\\.?((?:" + ["taobao.net", "taobao.com"].join(")|(?:").replace(/\./g, "\\.") + "))", "i"),
            w = v.match(_) || [],
            E = (w[2] || "taobao.com").match(/\.?taobao\.net$/) ? "taobao.net" : "taobao.com",
            x = function() {
                var e = w[1] || "m";
                return "taobao.net" === E && (e = "waptest"), "m" != e && "wapa" != e && "waptest" != e && (e = "m"), e
            }(),
            T = "login";
        t.login = t.login || {};
        var S = {
            loginName: "login.htm",
            logoutName: "logout.htm",
            subDomain: x
        };
        t.login.config = S, t.login.isLogin = function(e) {
            if (!e || "function" != typeof e || !t.mtop)
                return !!this.getUserNick();
            t.mtop.request({
                api: "mtop.user.getUserSimple",
                v: "1.0",
                data: {},
                ecode: 1,
                sessionOption: "AutoLoginOnly",
                jsonpIncPrefix: b
            }, function(r) {
                r.retType === t.mtop.RESPONSE_TYPE.SUCCESS ? e(!0, r) : r.retType === t.mtop.RESPONSE_TYPE.SESSION_EXPIRED ? e(!1, r) : e(n, r)
            })
        }, t.login.isLoginAsync = function(e) {
            var t;
            return f && (t = {}, t.promise = new f(function(e, n) {
                t.resolve = e, t.reject = n
            })), this.isLogin(function(n, r) {
                e && e(n, r), !0 === n ? t && t.resolve(r) : t && t.reject(r)
            }), t ? t.promise : void 0
        }, t.login.getUserNick = function(e) {
            if (!e || "function" != typeof e) {
                var t = "",
                    o = r("_w_tb_nick"),
                    i = r("_nk_") || r("snk"),
                    a = r("sn");
                return o && o.length > 0 && "null" != o ? t = decodeURIComponent(o) : i && i.length > 0 && "null" != i ? t = unescape(unescape(i).replace(/\\u/g, "%u")) : a && a.length > 0 && "null" != a && (t = decodeURIComponent(a)), t = t.replace(/\</g, "&lt;").replace(/\>/g, "&gt;")
            }
            this.isLogin(function(t, r) {
                e(!0 === t && r && r.data && r.data.nick ? r.data.nick : !1 === t ? "" : n)
            })
        }, t.login.getUserNickAsync = function(e) {
            var t;
            return f && (t = {}, t.promise = new f(function(e, n) {
                t.resolve = e, t.reject = n
            })), this.getUserNick(function(n) {
                e && e(n), n ? t && t.resolve(n) : t && t.reject()
            }), t ? t.promise : void 0
        }, t.login.generateUrl = a, t.login.goLogin = function(e) {
            u("login", e)
        }, t.login.goLoginAsync = function(e) {
            return d("login", e)
        }, t.login.goLogout = function(e) {
            u("logout", e)
        }, t.login.goLogoutAsync = function(e) {
            return d("logout", e)
        }
    }(window, window.lib || (window.lib = {})), e.exports = window.lib.login
}, function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = [],
        r = {
            encode: function(e) {
                var t = 0,
                    n = 0;
                n = ((n = ((n = ((n = e.msgType) << 1) + e.DUP) << 2) + e.Qos) << 1) + e.retain;
                var r = 0;
                r = ((r = e.version) << 3) + e.serializeType;
                var o = e.sysCode;
                o = (o << 5) + e.type;
                var i = 0;
                i = e.typeVersion, i <<= 3;
                var a = e.bizCode / 256;
                i += a >>= 5;
                var s = e.bizCode % 256,
                    l = e.msgHeaderBuffer.byteLength,
                    c = this.concatBuffer([new Uint16Array([l]).buffer, e.msgHeaderBuffer]);
                if (e.msgBodyBuffer)
                    var u = e.msgBodyBuffer.byteLength,
                        d = this.concatBuffer([new Uint16Array([u]).buffer, e.msgBodyBuffer]);
                else
                    var u = 0,
                        d = new Uint16Array([u]).buffer;
                if (e.msgDataBuffer)
                    var f = e.msgDataBuffer.byteLength,
                        p = this.concatBuffer([new Uint16Array([f]).buffer, e.msgDataBuffer]);
                else
                    var f = 0,
                        p = new Uint16Array([f]).buffer;
                var h = 5 + c.byteLength + d.byteLength + p.byteLength,
                    v = new dcodeIO.ByteBuffer(h);
                return v.writeUint8(n, t++), v.writeUint8(r, t++), v.writeUint8(o, t++), v.writeUint8(i, t++), v.writeUint8(s, t++), v.append(c, "binary", t), t += c.byteLength, v.append(d, "binary", t), t += d.byteLength, v.append(p, "binary", t), t += p.byteLength, v.view
            },
            decode: function(e) {
                var t = new dcodeIO.ByteBuffer(e.length);
                t.append(e.buffer, "binary", 0);
                var r = {},
                    o = 0,
                    i = t.view.byteLength,
                    a = t.readUint8(o);
                o++, r.msgType = a >> 4, r.DUP = a >> 3 & 1, r.DUP = a >> 1 & 3, r.retain = 1 & a;
                var s = t.readUint8(o);
                o++, r.version = s >> 3, r.serializeType = 7 & s;
                var l = t.readUint8(o);
                o++, r.sysCode = l >> 5, r.type = 31 & l;
                var c = t.readUint8(o);
                o++, r.typeVersion = c >> 3;
                var u = 7 & c,
                    d = t.readUint8(o);
                o++, r.bizCode = 256 * u + d;
                var f = new Uint16Array(new Uint8Array([t.readUInt8(o), t.readUInt8(o + 1)]).buffer)[0];
                o += 2;
                var p = new Uint8Array([].slice.call(t.view, o, o + f)).buffer;
                o += f, r.msgHeaderBuffer = p;
                var h = new Uint16Array(new Uint8Array([t.readUInt8(o), t.readUInt8(o + 1)]).buffer)[0];
                o += 2;
                var v = new Uint8Array([].slice.call(t.view, o, o + h)).buffer;
                o += h, r.msgBodyBuffer = v;
                var m = new Uint16Array(new Uint8Array([t.readUInt8(o), t.readUInt8(o + 1)]).buffer)[0];
                o += 2;
                var g = new Uint8Array([].slice.call(t.view, o, o + m)).buffer;
                if (o += m, r.msgDataBuffer = g, n.push(r), o < i)
                    return this.decode(new Uint8Array([].slice.call(e, o)));
                var y = n;
                return n = [], y
            },
            packageProtoBuf: function(e) {
                var t = e.encode().buffer,
                    n = t.byteLength;
                if (!(n < 2)) {
                    var r = new Uint16Array([n]).buffer;
                    return this.concatBuffer([r, t])
                }
                console.error("buffer length at least 2!")
            },
            concatBuffer: function(e) {
                var t = 0;
                e.forEach(function(e) {
                    t += e.byteLength
                });
                var n = new dcodeIO.ByteBuffer(t),
                    r = 0;
                return e.forEach(function(e) {
                    n.append(e, "binary", r), r += e.byteLength
                }), n.buffer
            }
        };
    t.default = r
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        },
        o = (function(e) {
            e && e.__esModule
        }(n(147)), {
            jsonpID: 0,
            strToBuf: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                if ("number" == typeof e.byteLength)
                    return e;
                var t = function() {
                    var t = e.toString(),
                        n = new Uint8Array(t.length);
                    return t.split("").forEach(function(e, t) {
                        n[t] = e.charCodeAt()
                    }), {
                        v: n.buffer
                    }
                }();
                return "object" === (void 0 === t ? "undefined" : r(t)) ? t.v : void 0
            },
            getParams: function(e) {
                var t = [];
                for (var n in e)
                    t.push(n + "=" + e[n]), t.push("&");
                return t.splice(0, t.length - 1).join("")
            },
            jsonp: function(e) {
                var t = e.jsonp || "jsonp" + ++this.jsonpID,
                    n = document.createElement("script"),
                    r = {
                        abort: function() {
                            n.remove(), t in window && (window[t] = function() {})
                        }
                    },
                    o = void 0;
                e.error && (n.onerror = function() {
                    r.abort(), e.error()
                }), window[t] = function(i) {
                    e.success(i, r, e), clearTimeout(o), n.remove(), delete window[t]
                };
                var i = e.url.split("?")[0],
                    a = e.url.split("?")[1] ? "&" + e.url.split("?")[1] : "";
                return e.noCallback ? n.src = i + "?" + a + "&" + this.getParams(e.data) : n.src = i + "?callback=" + t + a + "&" + this.getParams(e.data), document.querySelector("head").appendChild(n), e.timeout > 0 && (o = setTimeout(function() {
                    r.abort()
                }, e.timeout)), r
            },
            sendMsgByMtop: function(e, t) {
                return new Promise(function(n, r) {
                    lib.mtop.request({
                        api: e,
                        v: "1.0",
                        data: t
                    }).then(function(e) {
                        n(e)
                    }).catch(function(e) {
                        r(e)
                    })
                })
            }
        });
    t.default = o
}, function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = {
        powermsg: "mtop.taobao.powermsg.h5.msg.pullnativemsg",
        countmsg: "mtop.taobao.powermsg.h5.msg.count",
        pulltopicstatmsg: "mtop.taobao.powermsg.h5.msg.pulltopicstat",
        pulltopicuserlistmsg: "mtop.taobao.powermsg.h5.msg.pulltopicuserlist",
        infomsg: "mtop.taobao.powermsg.h5.msg.sendmsg",
        subscribemsg: "mtop.taobao.powermsg.h5.msg.subscribe",
        unsubscribemsg: "mtop.taobao.powermsg.h5.msg.unsubscribe"
    }
}, function(e, t) {
    "use strict";
    function n(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
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
                n(this, e)
            }
            return r(e, [{
                key: "on",
                value: function(e, t) {
                    return this._eventCollection = this._eventCollection || {}, this._eventCollection[e] = this._eventCollection[e] || [], this._eventCollection[e].push(t), this
                }
            }, {
                key: "once",
                value: function(e, t) {
                    function n() {
                        r.off(e, n);
                        for (var o = arguments.length, i = Array(o), a = 0; a < o; a++)
                            i[a] = arguments[a];
                        t.apply(null, i)
                    }
                    var r = this;
                    return n.listener = t, this.on(e, n), this
                }
            }, {
                key: "off",
                value: function(e, t) {
                    var n = void 0;
                    return this._eventCollection && (n = this._eventCollection[e]) ? (n.forEach(function(e, r) {
                        e !== t && e.listener !== t || n.splice(r, 1)
                    }), 0 === n.length && delete this._eventCollection[e], this) : this
                }
            }, {
                key: "emit",
                value: function(e) {
                    for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
                        n[r - 1] = arguments[r];
                    var o = void 0;
                    return this._eventCollection && (o = this._eventCollection[e]) ? ((o = o.slice(0)).forEach(function(e) {
                        return e.apply(null, n)
                    }), this) : this
                }
            }]), e
        }();
    t.default = o
}, function(e, t) {
    "use strict";
    function n(e) {
        return new Uint8Array(e.split("").map(function(e) {
            return e.charCodeAt()
        }))
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = {
        utf16ToUtf8: function(e) {
            if (e) {
                var t,
                    n,
                    r = [],
                    o = e.length;
                for (t = 0; t < o; t++)
                    (n = e.charCodeAt(t)) > 0 && n <= 127 ? r.push(e.charAt(t)) : n >= 128 && n <= 2047 ? r.push(String.fromCharCode(192 | n >> 6 & 31), String.fromCharCode(128 | 63 & n)) : n >= 2048 && n <= 65535 && r.push(String.fromCharCode(224 | n >> 12 & 15), String.fromCharCode(128 | n >> 6 & 63), String.fromCharCode(128 | 63 & n));
                return r.join("")
            }
        },
        utf8ToUtf16: function(e) {
            if (e) {
                var t,
                    n,
                    r,
                    o = [],
                    i = e.length;
                for (t = 0; t < i; t++)
                    (n = []).push(e.charCodeAt(t)), 0 == (n[0] >> 7 & 255) ? o.push(e.charAt(t)) : 6 == (n[0] >> 5 & 255) ? (n.push(e.charCodeAt(++t)), (r = []).push(31 & n[0]), r.push(63 & n[1]), o.push(String.fromCharCode(r[0] << 6 | r[1]))) : 14 == (n[0] >> 4 & 255) && (n.push(e.charCodeAt(++t)), n.push(e.charCodeAt(++t)), (r = []).push(n[0] << 4 | n[1] >> 2 & 15), r.push((3 & n[1]) << 6 | 63 & n[2]), o.push(String.fromCharCode(r[0] << 8 | r[1])));
                return o.join("")
            }
        },
        binaryStringToBinaryArray: n,
        binaryArrayToBinaryString: function(e) {
            return [].map.call(e, function(e) {
                return String.fromCharCode(e)
            }).join("")
        },
        strToNum: function(e) {
            if (!e)
                return 0;
            var t = 0,
                r = new Uint8Array(n(e));
            return [].forEach.call(r, function(e) {
                t = 31 * t + e
            }), t
        }
    }
}, function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.default = {
        MSG_TYPE: {
            MKT_PROTOCOL_MSGTYPE_CONNECT: 1,
            MKT_PROTOCOL_MSGTYPE_CONNACK: 2,
            MKT_PROTOCOL_MSGTYPE_PUBLISH: 3,
            MKT_PROTOCOL_MSGTYPE_PUBACK: 4,
            MKT_PROTOCOL_MSGTYPE_PUBREC: 5,
            MKT_PROTOCOL_MSGTYPE_PUBREL: 6,
            MKT_PROTOCOL_MSGTYPE_PUBCOMP: 7,
            MKT_PROTOCOL_MSGTYPE_SUBSCRIBE: 8,
            MKT_PROTOCOL_MSGTYPE_SUBACK: 9,
            MKT_PROTOCOL_MSGTYPE_UNSUBSCRIBE: 10,
            MKT_PROTOCOL_MSGTYPE_UNSUBACK: 11,
            MKT_PROTOCOL_MSGTYPE_PINGREQ: 12,
            MKT_PROTOCOL_MSGTYPE_PINGRESP: 13,
            MKT_PROTOCOL_MSGTYPE_DISCONNECT: 14
        },
        QOS: {
            MKT_MSG_QOS_UNRELIABLE: 0,
            MKT_MSG_QOS_RELIABLE_DUP: 1,
            MKT_MSG_QOS_RELIABLE: 2
        },
        TYPE: {
            MKT_MSG_TYPE_INFO: 1,
            MKT_MSG_TYPE_COUNT: 2,
            MKT_MSG_TYPE_COMMAND: 3,
            MKT_MSG_TYPE_REQUEST: 4
        },
        SUBTYPE: {
            SYS_SUBTYPE: {
                MTK_MSG_SYS_COMMON: 101,
                MTK_MSG_SYS_DIG: 102
            },
            COMMAND_SUBTYPE: {
                MKT_MSG_COMMAND_ADD_BLACKLIST: 301,
                MKT_MSG_COMMAND_DEL_BLACKLIST: 302,
                MKT_MSG_COMMAND_FLOWLIMIT: 303,
                MKT_MSG_COMMAND_USERTOKEN: 304
            },
            REQUEST_SUBTYPE: {
                MKT_REQUEST_SBUTYPE_MSG: 401,
                MKT_REQUEST_SBUTYPE_STAT: 402,
                MKT_REQUEST_SBUTYPE_USER: 403
            }
        },
        SYS_CODE: {
            MKT_SYS_CODE_PM: 1,
            MKT_SYS_CODE_AMP: 2,
            MKT_SYS_CODE_MSG: 3
        },
        MSG_SEND_CONF: {
            INTERVAL: 500,
            MAX_MSG_SIZE: 8192
        }
    }
}, function(e, t, n) {
    "use strict";
    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    function o(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = function() {
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
        a = (r(n(152)), r(n(150))),
        s = r(n(145)),
        l = r(n(148)),
        c = r(n(153)),
        u = r(n(154)),
        d = r(n(155)),
        f = (r(n(156)), c.default.ACK_ERROR_CODE),
        p = (new Date).getTime(),
        h = {
            accsResolveStack: [],
            accsRejectStack: [],
            protocolBufferStack: [],
            msgSize: 0,
            msgIdArgs: []
        },
        v = null,
        m = {},
        g = function() {
            function e(t) {
                o(this, e), t.serviceId ? (this.MsgHeader = t.MsgHeader, this.conn = t.conn, this.serviceId = t.serviceId, this.emitter = new l.default, this.conn && this.__addEventListener(), this.mode = t.mode || "ws", this.context = t.context) : console.error("serviceId is null!")
            }
            return i(e, [{
                key: "__addEventListener",
                value: function() {
                    var e = this;
                    this.conn.onMessage(this.serviceId, function(t) {
                        var n = t.deviceId;
                        u.default.setDeviceId(n);
                        t.getBinaryArray().then(function(t) {
                            e.fireEventCallBack(t)
                        }).catch(function(e) {
                            console.error("accs binary error"), console.log(e)
                        })
                    })
                }
            }, {
                key: "fireEventCallBack",
                value: function(e) {
                    var t = [];
                    try {
                        t = s.default.decode(e)
                    } catch (e) {
                        return console.error(e), void d.default.emit("ack", {
                            errorCode: f.DECODE_ERR,
                            type: "DECODE_ERR",
                            msg: "解包错误",
                            context: this.context,
                            protocolData: {}
                        })
                    }
                    for (var n = t.length, r = null, o = 0; o < n; o++) {
                        r = t[o];
                        var i = null;
                        try {
                            i = this.baseMsg.decodeMsgHeader(r.msgHeaderBuffer), r.msgHeader = i, -1 === h.msgIdArgs.indexOf(i.messageId) ? (h.msgIdArgs.push(i.messageId), this.processprotocolData(r)) : d.default.emit("ack", {
                                errorCode: f.REPEAT_ERR,
                                type: "REPEAT_ERR",
                                msg: "消息重复投递错误",
                                context: this.context,
                                protocolData: r
                            })
                        } catch (e) {
                            console.error(e), d.default.emit("ack", {
                                errorCode: f.PARSE_ERR,
                                type: "PARSE_ERR",
                                msg: "解析错误",
                                context: this.context,
                                protocolData: r
                            })
                        }
                    }
                }
            }, {
                key: "__sendAllCacheMsg",
                value: function(e, t) {
                    var n = new Uint8Array(s.default.concatBuffer(h.protocolBufferStack));
                    h.protocolBufferStack = [], h.msgSize = 0, this.conn.send(this.serviceId, n, !0).then(function(e) {
                        for (var t = h.accsResolveStack.length, n = null, r = 0; r < t; r++)
                            (n = h.accsResolveStack[r]) && n(e);
                        h.accsResolveStack = []
                    }).catch(function(e) {
                        var t = h.accsResolveStack.splice(0, 1)[0];
                        t && t(e)
                    })
                }
            }, {
                key: "processprotocolData",
                value: function(e) {
                    var t = e.msgType,
                        n = new dcodeIO.ByteBuffer(e.msgHeaderBuffer.byteLength);
                    n.append(e.msgHeaderBuffer, "binary", 0);
                    var r = this.baseMsg.decodeMsgHeader(n);
                    if (r.getStatusCode() && 1e3 !== r.getStatusCode())
                        return console.error("On message error, @errCode: " + r.getStatusCode() + "!"), void d.default.emit("ack", {
                            errorCode: f.CHECK_ERR,
                            type: "CHECK_ERR",
                            msg: "消息类型校验错误",
                            context: this.context,
                            protocolData: e
                        });
                    e.sysCode === a.default.SYS_CODE.MKT_SYS_CODE_PM && e.bizCode === this.context.bizCode && r.topic === this.context.topic ? t === a.default.MSG_TYPE.MKT_PROTOCOL_MSGTYPE_PUBLISH ? e.type === a.default.TYPE.MKT_MSG_TYPE_INFO ? this.emitter.emit("INFO", {
                        protocolData: e,
                        msgHeader: r
                    }) : e.type === a.default.TYPE.MKT_MSG_TYPE_COMMAND ? this.emitter.emit("CMD", {
                        protocolData: e,
                        msgHeader: r
                    }) : d.default.emit("ack", {
                        errorCode: f.CHECK_ERR,
                        type: "CHECK_ERR",
                        msg: "消息类型校验错误",
                        context: this.context,
                        protocolData: e
                    }) : t === a.default.MSG_TYPE.MKT_PROTOCOL_MSGTYPE_PUBACK || t === a.default.MSG_TYPE.MKT_PROTOCOL_MSGTYPE_SUBACK || t === a.default.MSG_TYPE.MKT_PROTOCOL_MSGTYPE_UNSUBACK ? this.emitter.emit("ACK", {
                        protocolData: e,
                        msgHeader: r
                    }) : d.default.emit("ack", {
                        errorCode: f.CHECK_ERR,
                        type: "CHECK_ERR",
                        msg: "消息类型校验错误",
                        context: this.context,
                        protocolData: e
                    }) : d.default.emit("ack", {
                        errorCode: f.SEND_ERR,
                        type: "SEND_ERR",
                        msg: "消息投递错误",
                        context: this.context,
                        protocolData: e
                    })
                }
            }, {
                key: "sendInfoMsg",
                value: function(e) {
                    return e.msgType = a.default.MSG_TYPE.MKT_PROTOCOL_MSGTYPE_PUBLISH, e.type = a.default.TYPE.MKT_MSG_TYPE_INFO, this.sendMsg(e)
                }
            }, {
                key: "sendRequestMsg",
                value: function(e) {
                    return e.msgType = a.default.MSG_TYPE.MKT_PROTOCOL_MSGTYPE_PUBLISH, e.type = a.default.TYPE.MKT_MSG_TYPE_REQUEST, this.sendMsg(e)
                }
            }, {
                key: "sendCommandMsg",
                value: function(e) {
                    return e.msgType = a.default.MSG_TYPE.MKT_PROTOCOL_MSGTYPE_PUBLISH, e.type = a.default.TYPE.MKT_MSG_TYPE_COMMAND, this.sendMsg(e)
                }
            }, {
                key: "sendCountMsg",
                value: function(e) {
                    return e.msgType = a.default.MSG_TYPE.MKT_PROTOCOL_MSGTYPE_PUBLISH, e.type = a.default.TYPE.MKT_MSG_TYPE_COUNT, this.sendMsg(e)
                }
            }, {
                key: "sendMsg",
                value: function(e) {
                    var t = this;
                    return new Promise(function(n, r) {
                        var o = (new Date).getTime(),
                            i = s.default.encode(e);
                        if (clearTimeout(v), v = null, h.msgSize + i.buffer.byteLength >= a.default.MSG_SEND_CONF.MAX_MSG_SIZE && t.__sendAllCacheMsg(n, r), o - p > a.default.MSG_SEND_CONF.INTERVAL)
                            t.conn.send(t.serviceId, i, !0).then(function(e) {
                                return n(e)
                            }).catch(function(e) {
                                return r(e)
                            }), h.msgSize = 0, p = o;
                        else {
                            var l = i.buffer;
                            h.protocolBufferStack.push(l), h.accsResolveStack.push(n), h.accsRejectStack.push(r), h.msgSize += l.byteLength, v = setTimeout(function() {
                                t.__sendAllCacheMsg(n, r)
                            }, a.default.MSG_SEND_CONF.INTERVAL)
                        }
                    })
                }
            }, {
                key: "sendMsgByMtop",
                value: function(e, t) {
                    return new Promise(function(n, r) {
                        lib.mtop.request({
                            api: e,
                            v: "1.0",
                            data: t
                        }).then(function(e) {
                            n(e)
                        }).catch(function(e) {
                            r(e)
                        })
                    })
                }
            }, {
                key: "onMessage",
                value: function(e, t) {
                    this.emitter.on(e, t)
                }
            }, {
                key: "getCallbackMap",
                value: function() {
                    return m
                }
            }, {
                key: "setBaseMsg",
                value: function(e) {
                    this.baseMsg = e
                }
            }]), e
        }(),
        y = {
            init: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return new g(e)
            }
        };
    t.default = y
}, function(e, t) {
    e.exports = {
        package: null,
        messages: [{
            name: "MKTProtoHeader",
            fields: [{
                rule: "optional",
                type: "string",
                name: "topic",
                id: 1
            }, {
                rule: "optional",
                type: "int32",
                name: "priority",
                id: 2
            }, {
                rule: "optional",
                type: "int32",
                name: "statusCode",
                id: 3
            }, {
                rule: "optional",
                type: "string",
                name: "sdkVersion",
                id: 4
            }, {
                rule: "optional",
                type: "string",
                name: "appVersion",
                id: 5
            }, {
                rule: "optional",
                type: "string",
                name: "messageId",
                id: 6
            }, {
                rule: "optional",
                type: "int32",
                name: "subType",
                id: 7
            }, {
                rule: "optional",
                type: "string",
                name: "userId",
                id: 8
            }, {
                rule: "optional",
                type: "string",
                name: "token",
                id: 9
            }, {
                rule: "optional",
                type: "int32",
                name: "monitorTag",
                id: 10
            }]
        }]
    }
}, function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.default = {
        ERRCODE: {
            MKT_SUCCESS: 1e3,
            MKT_FAILED: -3e3,
            MKT_TIMEOUT: -3001,
            MKT_BLACK_LIST: -3002,
            MKT_FLOW_LIMIT: -3003,
            MKT_DB_ERROR: -3100,
            MKT_NETWORK_ERROR: -3200,
            MKT_ACCS_ERROR: -3300,
            MKT_ACCS_CONNERROR: -3301,
            MKT_ACCS_TIMEOUT: -3302,
            MKT_ACCS_FLOWLIMIT: -3303,
            MKT_ACCS_FS: -3304
        },
        ACK_ERROR_CODE: {
            DECODE_ERR: -3403,
            PARSE_ERR: -3404,
            TYPE_ERR: -3405,
            CHECK_ERR: -3409,
            REPEAT_ERR: -3406,
            SEND_ERR: -3408,
            SEND_SUCCESS: 1e3
        }
    }
}, function(e, t, n) {
    "use strict";
    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = r(n(155)),
        i = r(n(133)),
        a = r(n(146)),
        s = r(n(149)),
        l = r(n(150)),
        c = r(n(147)),
        u = r(n(157)),
        d = 5,
        f = (new Date).getTime(),
        p = [],
        h = null,
        v = !1,
        m = {
            deviceId: "",
            init: function(e) {
                var t = this;
                if (this.confList = e, v)
                    return this;
                v = !0, o.default.on("ack", function(e) {
                    var n = (e.protocolData.msgHeader || {}).monitorTag,
                        r = t.__monitorHandle(e);
                    t.confList.MONITOR_RANGE_OPEN && (null != n && n > 0 ? (p.push(r), h && p.length < 4999 ? t.confList.MONITOR_RANGE_DELAY = 1e3 * n < t.confList.MONITOR_RANGE_DELAY ? 1e3 * n : t.confList.MONITOR_RANGE_DELAY : t.uploadHandle(t.confList.MONITOR_RANGE_DELAY)) : -1 === n || p.length >= 5e3 ? (p.push(r), t.uploadHandle(t.confList.MONITOR_RANGE_DELAY)) : (p.push(r), h && p.length < 4999 ? t.confList.MONITOR_RANGE_DELAY = 1e3 * n < t.confList.MONITOR_RANGE_DELAY ? 1e3 * n : t.confList.MONITOR_RANGE_DELAY : t.uploadHandle(t.confList.MONITOR_RANGE_DELAY)))
                })
            },
            uploadHandle: function() {
                var e = this,
                    t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1e3,
                    n = p.splice(0);
                h = setTimeout(function() {
                    var t = {
                        data: JSON.stringify(n),
                        sdkversion: "h5_" + u.default.version,
                        h5UtdId: e.deviceId || i.default.getAccsDeviceId(),
                        appKey: i.default.getAppkey()
                    };
                    a.default.sendMsgByMtop("mtop.taobao.powermsg.monitor.ack.upload", t).catch(function n(r) {
                        var o = r.ret[0].split("::")[0];
                        "FAIL_SYS_TOKEN_EXOIRED" != o && "FAIL_SYS_ILLEGAL_ACCESS" != o && "FAIL_SYS_TOKEN_EMPTY" != o || e.__seedCookieToMtopAndRetry("mtop.taobao.powermsg.monitor.ack.upload", t, null, n)
                    }), h = null
                }, t)
            },
            __monitorHandle: function(e) {
                e.errorCode;
                var t = e.protocolData;
                t.msgHeader || (t.msgHeader = {}), t.msgBody || (t.msgBody = {});
                var n = t.msgType,
                    r = this.__recordBaseData(e.context, e.protocolData);
                return r.code = e.errorCode, n === l.default.MSG_TYPE.MKT_PROTOCOL_MSGTYPE_SUBACK ? (r.type = 3, r.source = 0, r.mark = 0, r.id = "nodid") : n === l.default.MSG_TYPE.MKT_PROTOCOL_MSGTYPE_UNSUBACK ? (r.type = 2, r.source = 0, r.mark = 0, r.id = "nodid") : (r.type = 1, r.source = 1, t.msgHeader.monitorTag > 0 || -1 === t.msgHeader.monitorTag ? r.mark = 1 : r.mark = 0, this.confList.MONITOR_RANGE_DOWNGRADE && (r.source = 2), r.id = e.protocolData.msgHeader.messageId || "nodid"), r
            },
            __correctTime: function() {
                a.default.jsonp({
                    url: "//t.alicdn.com/t/gettime",
                    success: function(e) {
                        f = 1e3 * parseInt(e.time)
                    }
                })
            },
            __recordBaseData: function(e, t) {
                var n = t.msgBody.timestamp;
                return {
                    id: "",
                    bizCode: t.bizCode || "",
                    topic: t.msgHeader.topic || "",
                    bizTag: t.msgBody.bizTag || "",
                    code: "",
                    source: 1,
                    type: "",
                    taskId: 0,
                    mode: 1,
                    time: (new Date).getTime(),
                    mtopTime: f,
                    serverTime: n && n.toNumber() || 134,
                    mark: 0,
                    ext: ""
                }
            },
            __seedCookieToMtopAndRetry: function(e, t, n, r) {
                var o = {
                    topic: "h5_cookie_testtopic",
                    sdkversion: "1"
                };
                if (!((d -= 1) > 0))
                    throw new Error("重试次数已用完");
                lib.mtop.request({
                    api: c.default.pulltopicstatmsg,
                    v: "1.0",
                    data: o
                }).then(function(o) {
                    a.default.sendMsgByMtop(e, t).then(function(e) {
                        n && n(e)
                    }).catch(function(e) {
                        r && r(e)
                    })
                }).catch(function(e) {
                    r && r(e)
                })
            },
            shouldReport: function() {
                var e = this.deviceId || i.default.getAccsDeviceId(),
                    t = s.default.strToNum(btoa(e)) % this.confList.MONITOR_RANGE_MOD;
                return t >= -this.confList.MONITOR_RANGE_LEFT && t <= this.confList.MONITOR_RANGE_RIGHT
            },
            setDeviceId: function(e) {
                this.deviceId = e
            }
        };
    t.default = m
}, function(e, t, n) {
    "use strict";
    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = r(n(148)),
        i = (r(n(156)), null);
    i || (i = new o.default).on("ack", function(e) {
        logs(e)
    }), t.default = i
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    !function(e) {
        e && e.__esModule
    }(n(150));
    var r = !1;
    window.logs = function() {
        if (r) {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                t[n] = arguments[n];
            try {
                console.log.apply(console, t)
            } catch (e) {
                console.log(t)
            }
        }
    }, t.default = {
        init: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            r = e
        }
    }
}, function(e, t) {
    e.exports = {
        name: "@ali/lib-messagekit-sdk",
        description: "消息底层打包解包sdk",
        version: "0.4.18",
        repository: {
            type: "git",
            url: "git@gitlab.alibaba-inc.com:mtb/lib-messagekit-sdk.git"
        },
        author: [{
            name: "qindong.qd",
            email: "qindong.qd@alibaba-inc.com"
        }],
        license: "MIT",
        keywords: ["lib", "mtb", "javascript", "es6", "es2015"],
        publishConfig: {
            registry: "http://registry.npm.alibaba-inc.com"
        },
        scripts: {
            "parse:proto": "./node_modules/protobufjs/bin/pbjs ./src/protobuf/header.proto -o ./src/protobuf/header.json -t json -s proto & ./node_modules/protobufjs/bin/pbjs ./src/protobuf/body.proto -o ./src/protobuf/body.json -t json -s proto",
            clear: "rm -rf dist coverage release",
            build: "rm -rf dist && babel src --out-dir dist && tnpm run parse:proto && cp -R src/protobuf dist/",
            bundle: "webpack --config webpack.config.js",
            dev: "tnpm run build && tnpm run bundle",
            watch: "webpack --config webpack.config.js --watch",
            lint: "eslint --fix --config .eslintrc src/**/*.js test/**/*.js",
            test: "mocha --compilers js:babel-core/register test/**/*.js",
            cover: "babel-node node_modules/isparta/bin/isparta cover --report text node_modules/mocha/bin/_mocha test/**/*.js --reporter dot",
            ci: "tnpm run lint && tnpm run test",
            release: "tnpm run build && sh ./build/release.sh",
            "site:update": "sh ./build/site.sh update",
            "site:build": "sh ./build/site.sh build",
            "site:watch": 'watch -p "doc/**/*.md" -p "README.md" -c "tnpm run site:build"',
            "site:serve": "sh ./build/site.sh serve",
            "site:publish": "sh ./build/site.sh publish"
        },
        dependencies: {
            "@ali/lib-accs": "^0.2.12",
            "@ali/lib-httpurl": "~2.0.0",
            "@ali/lib-login": "^1.5.3",
            "@ali/lib-msg-runtime": "^1.0.3",
            bytebuffer: "^5.0.1",
            "json-loader": "^0.5.4",
            long: "^3.1.0",
            protobufjs: "^5.0.1"
        },
        devDependencies: {
            "babel-cli": "~6.4.5",
            "babel-core": "~6.4.5",
            "babel-loader": "~6.2.4",
            "babel-preset-es2015": "~6.3.13",
            chai: "~3.4.1",
            eslint: "~2.1.0",
            "gitbook-cli": "~1.0.1",
            isparta: "~4.0.0",
            mocha: "~2.4.5",
            serve: "~1.4.0",
            "watch-cli": "~0.2.1",
            webpack: "~1.13.0"
        },
        main: "./src/index.js",
        _from: "@ali/lib-messagekit-sdk@0.4.18",
        _resolved: "http://registry.npm.alibaba-inc.com/@ali/lib-messagekit-sdk/download/@ali/lib-messagekit-sdk-0.4.18.tgz"
    }
}, function(e, t, n) {
    "use strict";
    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    function o(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = function() {
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
        a = r(n(157)),
        s = r(n(152)),
        l = (r(n(138)), r(n(145)), 1),
        c = 1,
        u = 1,
        d = function() {
            function e() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                o(this, e);
                var n = dcodeIO.ProtoBuf.newBuilder({}).import(s.default).build();
                this.userId = t.userId, this.token = t.token, this.constanse = {
                    MsgHeader: n
                };
                var r = {};
                void 0 !== t.msgType && (r.msgType = t.msgType), void 0 !== t.type && (r.type = t.type), r.typeVersion = l, r.DUP = t.DUP, r.Qos = t.Qos, r.retain = t.retain || 0, r.version = c, r.serializeType = u, r.sysCode = t.sysCode, r.bizCode = t.bizCode, this.protocolData = r
            }
            return i(e, [{
                key: "setMsgHeader",
                value: function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
                        r = new dcodeIO.Long(16, 16);
                    this.msgHeader = new this.constanse.MsgHeader.MKTProtoHeader, this.msgHeader.setUserId(this.userId || ""), this.msgHeader.setToken(this.token || "");
                    var o = this.msgHeader;
                    return o.setTopic(e.toString()), "number" == typeof t && o.setSubType(t, r), o.setPriority(n, r), o.setSdkVersion("h5_" + a.default.version), o.setAppVersion(navigator.appVersion + " LibMessageKitSdk/" + (new Date).getTime()), o.setMessageId(this.__generateMessageId()), this.protocolData.msgHeaderBuffer = o.toArrayBuffer(), logs("%c [msgHeader为]", "color: #f40;"), logs(o), logs("%c [end]", "color: #f40;"), o
                }
            }, {
                key: "decodeMsgHeader",
                value: function(e) {
                    return this.constanse.MsgHeader.MKTProtoHeader.decode(e)
                }
            }, {
                key: "getprotocolData",
                value: function() {
                    return this.protocolData
                }
            }, {
                key: "__generateMessageId",
                value: function() {
                    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
                        var t = 16 * Math.random() | 0;
                        return ("x" == e ? t : 3 & t | 8).toString(16)
                    })
                }
            }]), e
        }();
    t.default = d
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }(n(160)),
        o = {
            init: function() {
                var e = dcodeIO.ProtoBuf.newBuilder({}).import(r.default).build(),
                    t = new e.MKTProtoBodyCount;
                this.store = {
                    MsgBody: e,
                    msgBody: t
                }
            },
            setMsgBody: function(e, t) {
                return this.store.msgBody.expression.set(e, t), this.store.msgBody
            },
            decodeMsgBody: function(e) {
                return this.store.MsgBody.MKTProtoBodyCount.decode(e)
            }
        };
    t.default = o
}, function(e, t) {
    e.exports = {
        package: null,
        messages: [{
            name: "MKTProtoBodyMsg",
            fields: [{
                rule: "optional",
                type: "string",
                name: "from",
                id: 2
            }, {
                rule: "optional",
                type: "string",
                name: "to",
                id: 3
            }, {
                rule: "optional",
                type: "int64",
                name: "timestamp",
                id: 4
            }, {
                rule: "optional",
                type: "bool",
                name: "sendFullTags",
                id: 5
            }, {
                rule: "repeated",
                type: "string",
                name: "sendTags",
                id: 6
            }]
        }, {
            name: "MKTProtoBodyCount",
            fields: [{
                rule: "map",
                type: "double",
                keytype: "string",
                name: "expression",
                id: 1
            }]
        }, {
            name: "MKTProtoBodyCommand",
            fields: [{
                rule: "optional",
                type: "int32",
                name: "permission",
                id: 2
            }, {
                rule: "optional",
                type: "int32",
                name: "periodTime",
                id: 3
            }, {
                rule: "optional",
                type: "int32",
                name: "type",
                id: 4
            }, {
                rule: "optional",
                type: "int32",
                name: "subType",
                id: 5
            }]
        }, {
            name: "MKTProtoBodyRequest",
            fields: [{
                rule: "optional",
                type: "int64",
                name: "index",
                id: 1
            }, {
                rule: "optional",
                type: "int32",
                name: "pageSize",
                id: 2
            }]
        }, {
            name: "MKTSubscribe",
            fields: [{
                rule: "optional",
                type: "string",
                name: "from",
                id: 1
            }, {
                rule: "optional",
                type: "int32",
                name: "role",
                id: 2
            }, {
                rule: "optional",
                type: "string",
                name: "bizTag",
                id: 3
            }, {
                rule: "optional",
                type: "int32",
                name: "period",
                id: 4
            }]
        }, {
            name: "MKTP2p",
            fields: [{
                rule: "optional",
                type: "string",
                name: "traceId",
                id: 1
            }]
        }, {
            name: "MKTReport",
            fields: [{
                rule: "optional",
                type: "string",
                name: "bizTag",
                id: 1
            }, {
                rule: "optional",
                type: "int32",
                name: "preSubType",
                id: 2
            }]
        }]
    }
}, function(e, t, n) {
    "use strict";
    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    r(n(158));
    var o = r(n(160)),
        i = {
            init: function() {
                var e = dcodeIO.ProtoBuf.newBuilder({}).import(o.default).build(),
                    t = new dcodeIO.Long(32, 32),
                    n = new dcodeIO.Long(16, 16),
                    r = new e.MKTProtoBodyRequest;
                this.store = {
                    MsgBody: e,
                    INT64: t,
                    INT32: n,
                    msgBody: r
                }
            },
            setMsgBody: function(e, t) {
                return e && this.store.msgBody.setIndex(parseInt(e), this.store.INT64), t && this.store.msgBody.setPageSize(parseInt(t), this.store.INT32), this.store.msgBody
            },
            decodeMsgBody: function(e) {
                return this.store.MsgBody.MKTProtoBodyRequest.decode(e)
            }
        };
    t.default = i
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }(n(160)),
        o = {
            init: function() {
                var e = dcodeIO.ProtoBuf.newBuilder({}).import(r.default).build(),
                    t = new e.MKTProtoBodyCommand;
                this.store = {
                    MsgBody: e,
                    msgBody: t
                }
            },
            setMsgBody: function(e, t, n, r) {
                return e && this.store.msgBody.setPermission(e), t && this.store.msgBody.setPeriodTime(t), n && this.store.msgBody.setType(n), r && this.store.msgBody.setSubType(r), this.store.msgBody
            },
            decodeMsgBody: function(e) {
                return this.store.MsgBody.MKTProtoBodyCommand.decode(e)
            }
        };
    t.default = o
}, function(e, t, n) {
    "use strict";
    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    r(n(158));
    var o = r(n(160)),
        i = {
            init: function() {
                var e = dcodeIO.ProtoBuf.newBuilder({}).import(o.default).build(),
                    t = new e.MKTProtoBodyMsg,
                    n = new dcodeIO.Long(32, 32);
                this.store = {
                    MsgBody: e,
                    INT64: n,
                    msgBody: t
                }
            },
            setMsgBody: function(e, t, n, r) {
                e && this.store.msgBody.setFrom(e), t && this.store.msgBody.setTo(t), n && this.store.msgBody.setSendTags(n), this.store.msgBody.setSendFullTags(r);
                var o = (new Date).getTime();
                return this.store.msgBody.setTimestamp(parseInt(o), this.store.INT64), this.store.msgBody
            },
            decodeMsgBody: function(e) {
                return this.store.MsgBody.MKTProtoBodyMsg.decode(e)
            }
        };
    t.default = i
}, function(e, t, n) {
    "use strict";
    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    r(n(158));
    var o = r(n(160)),
        i = {
            init: function() {
                var e = dcodeIO.ProtoBuf.newBuilder({}).import(o.default).build(),
                    t = new dcodeIO.Long(16, 16),
                    n = new e.MKTSubscribe;
                this.store = {
                    MsgBody: e,
                    INT32: t,
                    msgBody: n
                }
            },
            setMsgBody: function(e, t, n, r) {
                return e && this.store.msgBody.setFrom(e), t && this.store.msgBody.setRole(parseInt(t), this.store.INT32), n && this.store.msgBody.setBizTag(n), r && this.store.msgBody.setPageSize(parseInt(r), this.store.INT32), this.store.msgBody
            },
            decodeMsgBody: function(e) {
                return this.store.MsgBody.MKTSubscribe.decode(e)
            }
        };
    t.default = i
}, function(e, t) {
    e.exports = {
        package: null,
        messages: [{
            name: "TopicUser",
            fields: [{
                rule: "repeated",
                type: "User",
                name: "user",
                id: 1
            }],
            messages: [{
                name: "User",
                fields: [{
                    rule: "optional",
                    type: "string",
                    name: "userId",
                    id: 1
                }, {
                    rule: "optional",
                    type: "string",
                    name: "nick",
                    id: 2
                }, {
                    rule: "optional",
                    type: "int64",
                    name: "addTime",
                    id: 3
                }]
            }]
        }, {
            name: "TopicStat",
            fields: [{
                rule: "optional",
                type: "int32",
                name: "visitNum",
                id: 1
            }, {
                rule: "optional",
                type: "int32",
                name: "onlineNum",
                id: 2
            }, {
                rule: "optional",
                type: "int32",
                name: "totalNum",
                id: 3
            }, {
                rule: "optional",
                type: "int32",
                name: "msgNum",
                id: 4
            }, {
                rule: "optional",
                type: "int32",
                name: "digNum",
                id: 5
            }]
        }, {
            name: "TextMessage",
            fields: [{
                rule: "optional",
                type: "string",
                name: "message",
                id: 1
            }, {
                rule: "map",
                type: "string",
                keytype: "string",
                name: "params",
                id: 2
            }]
        }, {
            name: "CountInfo",
            fields: [{
                rule: "map",
                type: "int64",
                keytype: "string",
                name: "value",
                id: 1
            }]
        }, {
            name: "JoinNotify",
            fields: [{
                rule: "optional",
                type: "int32",
                name: "totalCount",
                id: 1
            }, {
                rule: "optional",
                type: "int32",
                name: "onlineCount",
                id: 2
            }, {
                rule: "map",
                type: "string",
                keytype: "string",
                name: "addUsers",
                id: 3
            }, {
                rule: "optional",
                type: "int64",
                name: "pageViewCount",
                id: 4
            }]
        }]
    }
}, function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.default = {
        QOS: {
            MKT_MSG_QOS_UNRELIABLE: 0,
            MKT_MSG_QOS_RELIABLE_DUP: 1,
            MKT_MSG_QOS_RELIABLE: 2
        },
        SUBTYPE: {
            SYS_SUBTYPE: {
                MTK_MSG_SYS_COMMON: 101,
                MTK_MSG_SYS_DIG: 102,
                MTK_MSG_SYS_JOIN: 103
            },
            COMMAND_SUBTYPE: {
                MKT_MSG_COMMAND_ADD_BLACKLIST: 301,
                MKT_MSG_COMMAND_DEL_BLACKLIST: 302,
                MKT_MSG_COMMAND_FLOWLIMIT: 303,
                MKT_MSG_COMMAND_USERTOKEN: 304
            },
            REQUEST_SUBTYPE: {
                MKT_REQUEST_SBUTYPE_MSG: 401,
                MKT_REQUEST_SBUTYPE_STAT: 402,
                MKT_REQUEST_SBUTYPE_USER: 403
            }
        }
    }
}, function(e, t) {
    "use strict";
    function n(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
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
                n(this, e)
            }
            return r(e, [{
                key: "on",
                value: function(e, t) {
                    return this._eventCollection = this._eventCollection || {}, this._eventCollection[e] = this._eventCollection[e] || [], this._eventCollection[e].push(t), this
                }
            }, {
                key: "once",
                value: function(e, t) {
                    function n() {
                        r.off(e, n);
                        for (var o = arguments.length, i = Array(o), a = 0; a < o; a++)
                            i[a] = arguments[a];
                        t.apply(this, i)
                    }
                    var r = this;
                    return n.listener = t, this.on(e, n), this
                }
            }, {
                key: "off",
                value: function(e, t) {
                    var n = void 0;
                    return this._eventCollection && (n = this._eventCollection[e]) ? (n.forEach(function(e, r) {
                        e !== t && e.listener !== t || n.splice(r, 1)
                    }), 0 === n.length && delete this._eventCollection[e], this) : this
                }
            }, {
                key: "emit",
                value: function(e) {
                    for (var t = this, n = arguments.length, r = Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)
                        r[o - 1] = arguments[o];
                    var i = void 0;
                    return this._eventCollection && (i = this._eventCollection[e]) ? ((i = i.slice(0)).forEach(function(e) {
                        return e.apply(t, r)
                    }), this) : this
                }
            }]), e
        }();
    t.default = o
}, function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = {
        binarryToStr: function(e) {
            var t = [];
            // return new Uint8Array(e).forEach(function(e) {
            //     t.push(String.fromCharCode(e))
            // }), t.join("")
        },
        utf16ToUtf8: function(e) {
            if (e) {
                var t,
                    n,
                    r = [],
                    o = e.length;
                for (t = 0; t < o; t++)
                    (n = e.charCodeAt(t)) > 0 && n <= 127 ? r.push(e.charAt(t)) : n >= 128 && n <= 2047 ? r.push(String.fromCharCode(192 | n >> 6 & 31), String.fromCharCode(128 | 63 & n)) : n >= 2048 && n <= 65535 && r.push(String.fromCharCode(224 | n >> 12 & 15), String.fromCharCode(128 | n >> 6 & 63), String.fromCharCode(128 | 63 & n));
                return r.join("")
            }
        },
        utf8ToUtf16: function(e) {
            if (e) {
                var t,
                    n,
                    r,
                    o = [],
                    i = e.length;
                for (t = 0; t < i; t++)
                    (n = []).push(e.charCodeAt(t)), 0 == (n[0] >> 7 & 255) ? o.push(e.charAt(t)) : 6 == (n[0] >> 5 & 255) ? (n.push(e.charCodeAt(++t)), (r = []).push(31 & n[0]), r.push(63 & n[1]), o.push(String.fromCharCode(r[0] << 6 | r[1]))) : 14 == (n[0] >> 4 & 255) && (n.push(e.charCodeAt(++t)), n.push(e.charCodeAt(++t)), (r = []).push(n[0] << 4 | n[1] >> 2 & 15), r.push((3 & n[1]) << 6 | 63 & n[2]), o.push(String.fromCharCode(r[0] << 8 | r[1])));
                return o.join("")
            }
        },
        getGUID: function() {
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
                var t = 16 * Math.random() | 0;
                return ("x" == e ? t : 3 & t | 8).toString(16)
            })
        }
    };
    t.default = n
}, function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.default = {
        SUBTYPE: {
            TEXT_MSG: 101,
            DIG: 102,
            ADD_BLACK_LIST: 301,
            REMOVE_BLACK_LIST: 302,
            FLOW_LIMIT: 303,
            USER_TOKEN: 304,
            PULL_MSG: 401,
            PULL_STAT: 402,
            PULL_USER_LIST: 403,
            SYSTEM_MSG: 10001,
            STUDIO_MSG: 10002,
            SHARE_MSG: 10003,
            BIZ_MSG: 10004,
            JOIN_MSG: 10005,
            STATICS_MSG: 10006,
            MERGE_MSG: 10007,
            SHARE_GOODS_LIST: 10008,
            CLOSE_GOODS_SHOW_CASE: 10009,
            TRADE_SHOW: 10010
        }
    }
}, function(e, t, n) {
    "use strict";
    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = r(n(168)),
        i = r(n(169)),
        a = r(n(171)),
        s = i.default.SUBTYPE,
        l = {
            init: function() {
                var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                if (this.needTbMessage = e, e && dcodeIO.ProtoBuf && dcodeIO.Long) {
                    var t = null,
                        n = null;
                    try {
                        t = dcodeIO.ProtoBuf.newBuilder({}).import(a.default).build(), n = new dcodeIO.Long(16, 16)
                    } catch (e) {
                        console.error("protobufjs need to be required!!"), console.log(e)
                    }
                    this.store = {
                        TBLiveMessage: t,
                        INT32: n
                    }
                }
                return this
            },
            emitEvent: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                        content: null,
                        type: "buffer"
                    },
                    r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
                    i = this,
                    a = arguments[4],
                    l = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
                    c = "decode",
                    u = n.content,
                    d = null;
                if ("base64" == n.type && (c = "decode64"), this.needTbMessage)
                    !function() {
                        switch (t) {
                        case s.TEXT_MSG:
                            l ? e.emit("liveHistory", {
                                data: r
                            }) : (e.emit("message", {
                                data: r
                            }), e.emit("liveMovement", {
                                data: r,
                                type: "message"
                            })), d = r;
                            break;
                        case s.DIG:
                            e.emit("count", {
                                data: r
                            }), e.emit("liveMovement", {
                                data: r,
                                type: "count"
                            }), d = r;
                            break;
                        case s.SYSTEM_MSG:
                            try {
                                if(document.getElementsByClassName('lr-video-err-mask').length == 1){
                                    console.log("endLiveVideo")
                                }
                                var f = "",
                                    p = (f = "base64" === n.type ? JSON.parse(o.default.utf8ToUtf16(atob(u))) : JSON.parse(o.default.utf8ToUtf16(o.default.binarryToStr(u)))).type;

                                if ("systemMessage" == p) {
                                    f.messsageType, f.messasgeText;
                                    e.emit("sysMessage", f)
                                }  else
                                    "endLiveVideo" == p && e.emit("liveEnd", f);
                                d = f
                            } catch (e) {}
                            break;
                        case s.STUDIO_MSG:
                            try {
                                var h = "",
                                    v = (h = "base64" === n.type ? JSON.parse(o.default.utf8ToUtf16(atob(u))) : JSON.parse(o.default.utf8ToUtf16(o.default.binarryToStr(u)))).type;
                                "liveVideoStreamRestore" == v ? e.emit("liveRestore", h) : "liveVideoStreamBreak" == v && e.emit("liveBrk", h), d = h
                            } catch (e) {}
                            break;
                        case s.SHARE_MSG:
                            var m = i.store.TBLiveMessage.TBLiveShareMessage[c](u),
                                g = JSON.parse(m.encodeJSON());
                            e.emit("liveShare", {
                                data: g
                            }), l || e.emit("liveMovement", {
                                data: g,
                                type: "share"
                            }), d = g;
                            break;
                        case s.BIZ_MSG:
                            try {
                                var y = "";
                                y = "base64" === n.type ? JSON.parse(o.default.utf8ToUtf16(atob(u))) : JSON.parse(o.default.utf8ToUtf16(o.default.binarryToStr(u))), e.emit("liveInteractive", {
                                    data: y
                                }), e.emit("liveMovement", {
                                    data: y,
                                    type: "interactive"
                                }), d = y
                            } catch (e) {}
                            break;
                        case s.JOIN_MSG:
                            var b = i.store.TBLiveMessage.TBLiveJoinNotify[c](u),
                                _ = JSON.parse(b.encodeJSON()),
                                w = [];
                            b.addUsers.forEach(function(e, t) {
                                w.push({
                                    nick: e,
                                    userId: t
                                })
                            });
                            var E = b.totalCount,
                                x = b.onlineCount,
                                T = _.pageViewCount;
                            e.emit("liveJoin", {
                                data: {
                                    online: x,
                                    total: E,
                                    pageViewCount: T,
                                    userList: w
                                }
                            }), e.emit("liveMovement", {
                                data: {
                                    online: x,
                                    total: E,
                                    userList: w
                                },
                                type: "join"
                            }), d = _;
                            break;
                        case s.STATICS_MSG:
                            break;
                        case s.SHARE_GOODS_LIST:
                            var S = i.store.TBLiveMessage.TBLiveMessageShareGoodsList[c](u),
                                C = JSON.parse(S.encodeJSON());
                            e.emit("liveShareList", {
                                data: C
                            }), e.emit("liveMovement", {
                                data: C,
                                type: "shareList"
                            }), d = C;
                            break;
                        case s.CLOSE_GOODS_SHOW_CASE:
                            e.emit("liveShareClose", {
                                data: {}
                            }), d = {};
                            break;
                        case s.TRADE_SHOW:
                            var O = i.store.TBLiveMessage.TBLiveMessageTradeShow[c](u),
                                k = JSON.parse(O.encodeJSON());
                            e.emit("liveTrade", {
                                data: k
                            }), e.emit("liveMovement", {
                                data: k,
                                type: "trade"
                            }), d = k;
                            break;
                        default:
                            d = "base64" === n.type ? n.content : window.btoa(o.default.utf8ToUtf16(o.default.binarryToStr(n.content))), a.decodeMsgData = d, e.emit("bizInfo", a)
                        }
                    }();
                else
                    switch (t) {
                    case s.TEXT_MSG:
                        l ? e.emit("liveHistory", {
                            data: r
                        }) : (e.emit("message", {
                            data: r
                        }), e.emit("liveMovement", {
                            data: r,
                            type: "message"
                        })), d = r;
                        break;
                    case s.DIG:
                        e.emit("count", {
                            data: r
                        }), e.emit("liveMovement", {
                            data: r,
                            type: "count"
                        }), d = r;
                        break;
                    default:
                        d = "base64" === n.type ? n.content : window.btoa(o.default.utf8ToUtf16(o.default.binarryToStr(n.content))), a.decodeMsgData = d, e.emit("bizInfo", a)
                    }
            },
            getJoinMsg: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                    r = new this.store.TBLiveMessage.TBLiveJoinNotify;
                return e.forEach(function(e) {
                    r.addUsers.set(e.userId.toString(), e.userNick.toString())
                }), r.setTotalCount(t, this.store.INT32), r.setOnlineCount(n, this.store.INT32), r
            }
        };
    t.default = {
        init: function() {
            var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
            return l.init(e)
        }
    }
}, function(e, t) {
    e.exports = {
        package: null,
        options: {
            java_package: "",
            java_outer_classname: "TBLiveMessage"
        },
        messages: [{
            name: "TBLiveShareMessage",
            fields: [{
                rule: "optional",
                type: "string",
                name: "content",
                id: 1
            }, {
                rule: "optional",
                type: "string",
                name: "title",
                id: 2
            }, {
                rule: "optional",
                type: "string",
                name: "picUrl",
                id: 3
            }, {
                rule: "optional",
                type: "string",
                name: "actionUrl",
                id: 4
            }, {
                rule: "optional",
                type: "string",
                name: "shareType",
                id: 5
            }, {
                rule: "optional",
                type: "string",
                name: "shareId",
                id: 6
            }, {
                rule: "optional",
                type: "string",
                name: "price",
                id: 7
            }]
        }, {
            name: "TBLiveShareSingleGoods",
            fields: [{
                rule: "optional",
                type: "string",
                name: "itemId",
                id: 1
            }, {
                rule: "optional",
                type: "string",
                name: "itemName",
                id: 2
            }, {
                rule: "optional",
                type: "string",
                name: "itemPic",
                id: 3
            }, {
                rule: "optional",
                type: "string",
                name: "itemPrice",
                id: 4
            }, {
                rule: "optional",
                type: "string",
                name: "itemUrl",
                id: 5
            }, {
                rule: "optional",
                type: "string",
                name: "buyCount",
                id: 6
            }, {
                rule: "optional",
                type: "string",
                name: "itemH5TaokeUrl",
                id: 7
            }, {
                rule: "optional",
                type: "string",
                name: "itemIcon",
                id: 8
            }]
        }, {
            name: "TBLiveMessageShareGoodsList",
            fields: [{
                rule: "optional",
                type: "int32",
                name: "goodsIndex",
                id: 1
            }, {
                rule: "repeated",
                type: "TBLiveShareSingleGoods",
                name: "goodslist",
                id: 2
            }]
        }, {
            name: "TBLiveMessageCloseGoodsShowCase",
            fields: [{
                rule: "optional",
                type: "int32",
                name: "unused",
                id: 1
            }]
        }, {
            name: "TBLiveMessageTradeShow",
            fields: [{
                rule: "optional",
                type: "int32",
                name: "type",
                id: 1
            }, {
                rule: "optional",
                type: "string",
                name: "nick",
                id: 2
            }]
        }, {
            name: "TBLiveJoinNotify",
            fields: [{
                rule: "optional",
                type: "int32",
                name: "totalCount",
                id: 1
            }, {
                rule: "optional",
                type: "int32",
                name: "onlineCount",
                id: 2
            }, {
                rule: "map",
                type: "string",
                keytype: "string",
                name: "addUsers",
                id: 3
            }, {
                rule: "optional",
                type: "int64",
                name: "pageViewCount",
                id: 4
            }]
        }, {
            name: "TBLiveBizCount",
            fields: [{
                rule: "optional",
                type: "int64",
                name: "value",
                id: 1
            }]
        }],
        enums: [{
            name: "TBLiveMessageSubType",
            values: [{
                name: "TBLiveMessageSubType_None",
                id: 0
            }, {
                name: "TBLiveMessageSubType_ShareMessage",
                id: 10003
            }, {
                name: "TBLiveMessageSubType_JoinNotify",
                id: 10005
            }, {
                name: "TBLiveMessageSubType_ShareGoodsList",
                id: 10008
            }, {
                name: "TBLiveMessageSubType_CloseGoodsShowCase",
                id: 10009
            }, {
                name: "TBLiveMessageSubType_TradeShow",
                id: 10010
            }]
        }]
    }
}, function(e, t, n) {
    n(173);
    var r = n(20)(n(175), n(184), "data-v-08b70bdc", null);
    e.exports = r.exports
}, function(e, t, n) {
    var r = n(174);
    "string" == typeof r && (r = [[e.id, r, ""]]), r.locals && (e.exports = r.locals);
    n(18)("7d1ae28e", r, !0)
}, function(e, t, n) {
    (e.exports = n(11)()).push([e.id, "#interactive-canvas[data-v-08b70bdc]{position:absolute;left:19px;top:134px;z-index:1}", ""])
}, function(e, t, n) {
    "use strict";
    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = r(n(1)),
        i = r(n(176)),
        a = r(n(122)),
        s = r(n(126)),
        l = null;
    t.default = {
        props: {
            message: {
                type: Object,
                default: function() {
                    return {}
                }
            }
        },
        data: function() {
            return {}
        },
        store: a.default,
        vuex: {
            actions: s.default
        },
        mounted: function() {
            var e = this;
            (l = new i.default({
                layerSelector: "#interactive-canvas",
                videoWrapSelector: "#J_video-panel"
            })).registerModule({
                toast: function(t, n, r) {
                    e.showToast(t)
                },
                login: function(t) {
                    e.loginModal(t)
                }
            }), window.Vue = o.default
        },
        methods: {},
        filters: {},
        watch: {
            message: function() {
                l.setMessage(this.message)
            }
        }
    }
}, function(e, t, n) {
    "use strict";
    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    function o(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = function() {
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
        a = n(177),
        s = r(n(178)),
        l = r(n(181)),
        c = r(n(179)),
        u = (r(n(182)), "0.1.0"),
        d = function() {
            function e() {
                var t = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0];
                o(this, e), this.version = u, this.bind(), this.bindEvent(), this.setGlobalConfig(t), this.fetchCTL()
            }
            return i(e, [{
                key: "setGlobalConfig",
                value: function(e) {
                    window.INTERACTIVE_LAYER_CONFIG = {
                        layerSelector: e.layerSelector || "#interactive-layer",
                        videoWrapSelector: e.videoWrapSelector || "#video-wrap",
                        videoWrapCanvas: e.videoWrapCanvas || "#vidoe-interactive-canvas",
                        materialUrls: a.MATERIAL_URL
                    }
                }
            }, {
                key: "fetchCTL",
                value: function() {
                    var e = document.createElement("script");
                    e.src = "https://aeu.alicdn.com/ctl/ctl.js", e.type = "text/javascript", document.head.appendChild(e)
                }
            }, {
                key: "setMessage",
                value: function(e) {
                    if (!e)
                        throw new Error("Missing parameter: message");
                    c.default.copy(e);
                    this.render.render(e)
                }
            }, {
                key: "registerModule",
                value: function(e) {
                    this.env.registerModule(e)
                }
            }, {
                key: "bind",
                value: function() {
                    this.env = new l.default, this.render = new s.default({
                        canvas: a.CANVAS_SELECTOR,
                        materialURL: a.MATERIAL_URL
                    })
                }
            }, {
                key: "bindEvent",
                value: function() {
                    var e = this;
                    this.render.on("before::render", function(t) {
                        e.env.register(t.message)
                    }), this.render.on("after::render", function() {}), this.env.on("env::close", function() {
                        e.render.close()
                    }), this.env.on("env::closeFullScreen", function() {
                        e.render.closeFullScreen()
                    })
                }
            }]), e
        }();
    t.default = d
}, function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = "localhost" == location.host;
    t.CANVAS_SELECTOR = "interactive-canvas", t.MATERIAL_URL = [{
        name: "coupon",
        bundleUrl: ""
    }], t.MATERIAL_CONFIG_URL = n ? "./config-list.js" : "//gw.alicdn.com/L1/584/46882000/api/data/ae881389d42bc4b9.js?file=ae881389d42bc4b9.js"
}, function(e, t, n) {
    "use strict";
    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    function o(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    function i(e, t) {
        if (!e)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }
    function a(e, t) {
        if ("function" != typeof t && null !== t)
            throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var s = function() {
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
        l = n(177),
        c = (r(n(179)), r(n(180))),
        u = (location.host, l.MATERIAL_URL),
        d = 0,
        f = function(e) {
            function t(e) {
                var n = e.canvas,
                    r = void 0 === n ? "interactive-canvas" : n;
                e.materialURL;
                o(this, t);
                var a = i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                return a._fetchMaterialConfig(), a.renderLayout(r), a
            }
            return a(t, c.default), s(t, [{
                key: "renderLayout",
                value: function(e) {
                    this.canvas = e, "string" == typeof e && (this.canvas = document.querySelector("#" + e)), this.canvas || (this.canvas = document.createElement("div"), this.canvas.id = l.CANVAS_SELECTOR, document.querySelector("body").appendChild(this.canvas))
                }
            }, {
                key: "renderWrap",
                value: function(e) {
                    var t = document.createElement("div");
                    t.id = "interactive-layer", e.appendChild(t)
                }
            }, {
                key: "_findBundleUrlByName",
                value: function(e) {
                    if (!u)
                        throw new Error("no material bundle url, material name is " + e);
                    for (var t = 0; t < u.length; t++) {
                        var n = u[t];
                        if (n.name == e)
                            return n.bundleUrl
                    }
                    throw new Error("no material bundle url, material name is " + e)
                }
            }, {
                key: "_fetchMaterialConfig",
                value: function() {
                    window.bundleCallback = function(e) {
                        e && e.bundleArr && (window.INTERACTIVE_LAYER_CONFIG.materialUrls = u = e.bundleArr)
                    }, this._getScript(l.MATERIAL_CONFIG_URL)
                }
            }, {
                key: "empty",
                value: function() {
                    var e = document.getElementById("interactive-canvas");
                    e.innerHTML = "", e.className = ""
                }
            }, {
                key: "render",
                value: function(e) {
                    var t = e.timeline[0].name,
                        n = this._findBundleUrlByName(t);
                    this.empty(), this.renderWrap(this.canvas), this.downloadBundle(n, e)
                }
            }, {
                key: "_getScript",
                value: function(e) {
                    var t = arguments.length <= 1 || void 0 === arguments[1] ? new Function : arguments[1],
                        n = document.createElement("script");
                    n.src = e, n.type = "text/javascript", n.onload = t, document.head.appendChild(n)
                }
            }, {
                key: "downloadBundle",
                value: function(e, t) {
                    var n = this;
                    this._getScript(e, function() {
                        var e = document.getElementById("interactive-canvas");
                        n.emit("after::render", {
                            message: t
                        }), e.className = "canvas-show", clearTimeout(d), n.hideModuleAfterTimeout(t.duration)
                    }), this.emit("before::render", {
                        message: t
                    })
                }
            }, {
                key: "hideModuleAfterTimeout",
                value: function() {
                    var e = arguments.length <= 0 || void 0 === arguments[0] ? 0 : arguments[0],
                        t = this;
                    d = setTimeout(function() {
                        t.empty()
                    }, 1e3 * e)
                }
            }, {
                key: "close",
                value: function() {
                    var e = document.getElementById("interactive-canvas");
                    e.innerHTML = "", e.className = ""
                }
            }, {
                key: "closeFullScreen",
                value: function() {
                    var e = window.INTERACTIVE_LAYER_CONFIG.videoWrapSelector.replace("#", ""),
                        t = window.INTERACTIVE_LAYER_CONFIG.videoWrapCanvas.replace("#", ""),
                        n = document.getElementById(e),
                        r = document.getElementById(t);
                    n.removeChild(r)
                }
            }]), t
        }();
    t.default = f
}, function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
    };
    t.default = {
        copy: function(e) {
            return e ? JSON.parse(JSON.stringify(e)) : {}
        },
        getDomain: function() {
            return location.protocol + "//" + location.host
        },
        parse: function(e) {
            if (!e)
                throw new Error("Missing parameter: objStr");
            return "object" == (void 0 === e ? "undefined" : n(e)) ? e : JSON.parse(e)
        }
    }
}, function(e, t) {
    "use strict";
    function n(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
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
                n(this, e)
            }
            return r(e, [{
                key: "on",
                value: function(e, t) {
                    return this._eventCollection = this._eventCollection || {}, this._eventCollection[e] = this._eventCollection[e] || [], this._eventCollection[e].push(t), this
                }
            }, {
                key: "once",
                value: function(e, t) {
                    function n() {
                        r.off(e, n), t.apply(this, arguments)
                    }
                    var r = this;
                    return n.listener = t, this.on(e, n), this
                }
            }, {
                key: "off",
                value: function(e, t) {
                    var n = void 0;
                    return this._eventCollection && (n = this._eventCollection[e]) ? (n.forEach(function(e, r) {
                        e !== t && e.listener !== t || n.splice(r, 1)
                    }), 0 === n.length && delete this._eventCollection[e], this) : this
                }
            }, {
                key: "emit",
                value: function(e) {
                    for (var t = this, n = arguments.length, r = Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)
                        r[o - 1] = arguments[o];
                    var i = void 0;
                    return this._eventCollection && (i = this._eventCollection[e]) ? ((i = i.slice(0)).forEach(function(e) {
                        return e.apply(t, r)
                    }), this) : this
                }
            }]), e
        }();
    t.default = o
}, function(e, t, n) {
    "use strict";
    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    function o(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    function i(e, t) {
        if (!e)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }
    function a(e, t) {
        if ("function" != typeof t && null !== t)
            throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var s = function() {
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
        l = (r(n(179)), r(n(180))),
        c = function(e) {
            function t() {
                o(this, t);
                var e = i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                return e.UTLIS = {}, e.registerDefaultModule(), e
            }
            return a(t, l.default), s(t, [{
                key: "register",
                value: function(e) {
                    var t = this;
                    window.INTERACTIVE_BRIDGE = function(n) {
                        if (n && "InteractVideoWVPlugin" == n.moduleName && function() {
                            var r = n.method,
                                o = t["_" + r];
                            setTimeout(function() {
                                o && o.apply(t, [n, e])
                            })
                        }(), n && "callUtils" == n.type) {
                            var r = n.method,
                                o = n.success,
                                i = n.failure,
                                a = t.UTLIS[r];
                            a && a && a.apply(t, [n.param, o, i])
                        }
                    }
                }
            }, {
                key: "registerModule",
                value: function(e) {
                    for (var t in e)
                        this.UTLIS[t] = e[t]
                }
            }, {
                key: "registerDefaultModule",
                value: function() {
                    var e = this;
                    this.UTLIS.hide = function() {
                        return e.emit("env::close")
                    }
                }
            }, {
                key: "_commitAlarm",
                value: function(e, t) {}
            }, {
                key: "_getConfig",
                value: function(e, t) {
                    e.success({
                        sdkVersion: "2.0.0",
                        width: 750,
                        height: 1334,
                        ret: ["HY_SUCCESS"]
                    })
                }
            }, {
                key: "_getJsData",
                value: function(e, t) {
                    var n = t.timeline[0].portraitMode.jsData;
                    e.success({
                        jsData: n
                    })
                }
            }, {
                key: "_getUTParams",
                value: function(e, t) {
                    var n = t.timeline[0].utParams;
                    e.success(n)
                }
            }, {
                key: "_setPenetrateAlpha",
                value: function(e, t) {}
            }, {
                key: "_closeWebViewLayer",
                value: function(e, t) {
                    this.emit("env::close")
                }
            }, {
                key: "_closeFullScreenViewLayer",
                value: function(e, t) {
                    this.emit("env::closeFullScreen")
                }
            }]), t
        }();
    t.default = c
}, function(e, t, n) {
    var r = n(183);
    "string" == typeof r && (r = [[e.id, r, ""]]);
    n(12)(r, {});
    r.locals && (e.exports = r.locals)
}, function(e, t, n) {
    (e.exports = n(11)()).push([e.id, "#interactive-canvas{width:170px;-webkit-transform:translate(-170px);transform:translate(-170px);display:inline-block}#interactive-canvas.canvas-show{transition:all .3s ease-out;-webkit-transform:translate(0);transform:translate(0)}", ""])
}, function(e, t) {
    e.exports = {
        render: function() {
            var e = this,
                t = e.$createElement;
            return (e._self._c || t)("div", {
                attrs: {
                    id: "interactive-canvas"
                }
            })
        },
        staticRenderFns: []
    }
}, function(e, t, n) {
    !function(t, n) {
        e.exports = n()
    }(0, function() {
        return function(e) {
            function t(n) {
                if (r[n])
                    return r[n].exports;
                var o = r[n] = {
                    i: n,
                    l: !1,
                    exports: {}
                };
                return e[n].call(o.exports, o, o.exports, t), o.l = !0, o.exports
            }
            var n = window.webpackJsonpVideoX;
            window.webpackJsonpVideoX = function(t, r, i) {
                for (var a, s, l = 0, c = []; l < t.length; l++)
                    s = t[l], o[s] && c.push(o[s][0]), o[s] = 0;
                for (a in r)
                    Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
                for (n && n(t, r, i); c.length;)
                    c.shift()()
            };
            var r = {},
                o = {
                    2: 0
                };
            return t.e = function(e) {
                function n() {
                    s.onerror = s.onload = null, clearTimeout(l);
                    var t = o[e];
                    0 !== t && (t && t[1](new Error("Loading chunk " + e + " failed.")), o[e] = void 0)
                }
                var r = o[e];
                if (0 === r)
                    return new Promise(function(e) {
                        e()
                    });
                if (r)
                    return r[2];
                var i = new Promise(function(t, n) {
                    r = o[e] = [t, n]
                });
                r[2] = i;
                var a = document.getElementsByTagName("head")[0],
                    s = document.createElement("script");
                s.type = "text/javascript", s.charset = "utf-8", s.async = !0, s.timeout = 12e4, t.nc && s.setAttribute("nonce", t.nc), s.src = t.p + "" + e + ".js";
                var l = setTimeout(n, 12e4);
                return s.onerror = s.onload = n, a.appendChild(s), i
            }, t.m = e, t.c = r, t.d = function(e, n, r) {
                t.o(e, n) || Object.defineProperty(e, n, {
                    configurable: !1,
                    enumerable: !0,
                    get: r
                })
            }, t.n = function(e) {
                var n = e && e.__esModule ? function() {
                    return e.default
                } : function() {
                    return e
                };
                return t.d(n, "a", n), n
            }, t.o = function(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            }, t.p = "", t.oe = function(e) {
                throw console.error(e), e
            }, t(t.s = 160)
        }([function(e, t) {
            var n = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
            "number" == typeof __g && (__g = n)
        }, function(e, t, n) {
            "use strict";
            t.__esModule = !0, t.default = function(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }
        }, function(e, t, n) {
            "use strict";
            t.__esModule = !0;
            var r = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(n(107));
            t.default = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var o = t[n];
                        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), (0, r.default)(e, o.key, o)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }()
        }, function(e, t, n) {
            var r = n(87),
                o = n(35);
            e.exports = function(e) {
                return r(o(e))
            }
        }, function(e, t, n) {
            var r = n(18),
                o = n(55),
                i = n(37),
                a = Object.defineProperty;
            t.f = n(5) ? Object.defineProperty : function(e, t, n) {
                if (r(e), t = i(t, !0), r(n), o)
                    try {
                        return a(e, t, n)
                    } catch (e) {}
                if ("get" in n || "set" in n)
                    throw TypeError("Accessors not supported!");
                return "value" in n && (e[t] = n.value), e
            }
        }, function(e, t, n) {
            e.exports = !n(24)(function() {
                return 7 != Object.defineProperty({}, "a", {
                    get: function() {
                        return 7
                    }
                }).a
            })
        }, function(e, t) {
            var n = {}.hasOwnProperty;
            e.exports = function(e, t) {
                return n.call(e, t)
            }
        }, function(e, t) {
            e.exports = function(e) {
                return !!e && "object" == typeof e
            }
        }, function(e, t) {
            var n = e.exports = {
                version: "2.5.0"
            };
            "number" == typeof __e && (__e = n)
        }, function(e, t, n) {
            var r = n(4),
                o = n(25);
            e.exports = n(5) ? function(e, t, n) {
                return r.f(e, t, o(1, n))
            } : function(e, t, n) {
                return e[t] = n, e
            }
        }, function(e, t, n) {
            var r = n(41)("wks"),
                o = n(27),
                i = n(0).Symbol,
                a = "function" == typeof i;
            (e.exports = function(e) {
                return r[e] || (r[e] = a && i[e] || (a ? i : o)("Symbol." + e))
            }).store = r
        }, function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            t.default = {
                VIDEO_ABORT: "video:abort",
                VIDEO_ENDED: "video:ended",
                VIDEO_ERROR: "video:error",
                VIDEO_PLAY: "video:play",
                VIDEO_PLAYING: "video:playing",
                VIDEO_PROGRESS: "video:progress",
                VIDEO_LOADSTART: "video:loadstart",
                VIDEO_SUSPEND: "video:suspend",
                VIDEO_STALLED: "video:stalled",
                VIDEO_WAITING: "video:waiting",
                VIDEO_CANPLAY: "video:canplay",
                VIDEO_CANPLAYTHROUGH: "video:canplaythrough",
                VIDEO_TIMEUPDATE: "video:timeupdate",
                VIDEO_VOLUMECHANGE: "video:volumechange",
                VIDEO_SEEKING: "video:seeking",
                VIDEO_SEEKED: "video:seeked",
                VIDEO_PAUSE: "video:pause",
                VIDEO_REALPLAY: "video:realPlay",
                VIDEO_EXITFULLSCREEN: "video:exitFullscreen",
                VIDEO_ENTERFULLSCREEN: "video:enterFullscreen"
            }
        }, function(e, t, n) {
            "use strict";
            function r(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            function o(e) {
                return "string" == typeof e && /\S/.test(e)
            }
            function i(e) {
                if (/\s/.test(e))
                    throw new Error("class has illegal whitespace characters")
            }
            function a(e) {
                return new RegExp("(^|\\s)" + e + "($|\\s)")
            }
            function s(e) {
                return function(t, n) {
                    return o(t) ? (o(n) && (n = document.querySelector(n)), (f(n) ? n : document)[e](t)) : document[e](null)
                }
            }
            function l(e, t) {
                return e.classList ? e.classList.contains(t) : (i(t), a(t).test(e.className))
            }
            function c(e, t) {
                return e.classList ? e.classList.add(t) : l(e, t) || (e.className = (e.className + " " + t).trim()), e
            }
            function u(e, t) {
                return e.classList ? e.classList.remove(t) : (i(t), e.className = e.className.split(/\s+/).filter(function(e) {
                    return e !== t
                }).join(" ")), e
            }
            function d(e) {
                var t = void 0;
                if (e.getBoundingClientRect && e.parentNode && (t = e.getBoundingClientRect()), !t)
                    return {
                        left: 0,
                        top: 0
                    };
                var n = document.documentElement,
                    r = document.body,
                    o = n.clientLeft || r.clientLeft || 0,
                    i = window.pageXOffset || r.scrollLeft,
                    a = t.left + i - o,
                    s = n.clientTop || r.clientTop || 0,
                    l = window.pageYOffset || r.scrollTop,
                    c = t.top + l - s;
                return {
                    left: Math.round(a),
                    top: Math.round(c)
                }
            }
            function f(e) {
                return !!e && "object" === (void 0 === e ? "undefined" : (0, g.default)(e)) && 1 === e.nodeType
            }
            function p(e) {
                return !!e && "object" === (void 0 === e ? "undefined" : (0, g.default)(e)) && 3 === e.nodeType
            }
            function h(e) {
                for (; e.firstChild;)
                    e.removeChild(e.firstChild);
                return e
            }
            function v(e) {
                return "function" == typeof e && (e = e()), (Array.isArray(e) ? e : [e]).map(function(e) {
                    return "function" == typeof e && (e = e()), f(e) || p(e) ? e : "string" == typeof e && /\S/.test(e) ? document.createTextNode(e) : void 0
                }).filter(function(e) {
                    return e
                })
            }
            function m(e, t) {
                return v(t).forEach(function(t) {
                    return e.appendChild(t)
                }), e
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.$$ = t.$ = void 0;
            var g = r(n(16));
            t.getEl = function(e) {
                return 0 === e.indexOf("#") && (e = e.slice(1)), document.getElementById(e)
            }, t.createEl = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "div",
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    r = document.createElement(e);
                return Object.getOwnPropertyNames(t).forEach(function(e) {
                    var n = t[e];
                    -1 !== e.indexOf("aria-") || "role" === e || "type" === e ? r.setAttribute(e, n) : r[e] = n
                }), Object.getOwnPropertyNames(n).forEach(function(e) {
                    n[e], r.setAttribute(e, n[e])
                }), r
            }, t.textContent = function(e, t) {
                void 0 === e.textContent ? e.innerText = t : e.textContent = t
            }, t.insertElFirst = function(e, t) {
                t.firstChild ? t.insertBefore(e, t.firstChild) : t.appendChild(e)
            }, t.getElData = function(e) {
                var t = e[_];
                return t || (t = e[_] = y.newGUID()), b[t] || (b[t] = {}), b[t]
            }, t.hasElData = function(e) {
                var t = e[_];
                return !!t && !!Object.getOwnPropertyNames(b[t]).length
            }, t.removeElData = function(e) {
                var t = e[_];
                if (t) {
                    delete b[t];
                    try {
                        delete e[_]
                    } catch (t) {
                        e.removeAttribute ? e.removeAttribute(_) : e[_] = null
                    }
                }
            }, t.hasElClass = l, t.addElClass = c, t.removeElClass = u, t.toggleElClass = function(e, t, n) {
                var r = l(e, t);
                if ("function" == typeof n && (n = n(e, t)), "boolean" != typeof n && (n = !r), n !== r)
                    return n ? c(e, t) : u(e, t), e
            }, t.setElAttributes = function(e, t) {
                Object.getOwnPropertyNames(t).forEach(function(n) {
                    var r = t[n];
                    null === r || void 0 === r || !1 === r ? e.removeAttribute(n) : e.setAttribute(n, !0 === r ? "" : r)
                })
            }, t.getElAttributes = function(e) {
                var t,
                    n,
                    r,
                    o,
                    i;
                if (t = {}, n = ",autoplay,controls,loop,muted,default,", e && e.attributes && e.attributes.length > 0)
                    for (var a = (r = e.attributes).length - 1; a >= 0; a--)
                        o = r[a].name, i = r[a].value, "boolean" != typeof e[o] && -1 === n.indexOf("," + o + ",") || (i = null !== i), t[o] = i;
                return t
            }, t.blockTextSelection = function() {
                document.body.focus(), document.onselectstart = function() {
                    return !1
                }
            }, t.unblockTextSelection = function() {
                document.onselectstart = function() {
                    return !0
                }
            }, t.findElPosition = d, t.getPointerPosition = function(e, t) {
                var n = {},
                    r = d(e),
                    o = e.offsetWidth,
                    i = e.offsetHeight,
                    a = r.top,
                    s = r.left,
                    l = t.pageY,
                    c = t.pageX;
                return t.changedTouches && (c = t.changedTouches[0].pageX, l = t.changedTouches[0].pageY), n.y = Math.max(0, Math.min(1, (a - l + i) / i)), n.x = Math.max(0, Math.min(1, (c - s) / o)), n
            }, t.isEl = f, t.isTextNode = p, t.emptyEl = h, t.normalizeContent = v, t.appendContent = m, t.insertContent = function(e, t) {
                return m(h(e), t)
            };
            var y = function(e) {
                    if (e && e.__esModule)
                        return e;
                    var t = {};
                    if (null != e)
                        for (var n in e)
                            Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                    return t.default = e, t
                }(n(62)),
                b = (r(n(21)), {}),
                _ = "vdata" + (new Date).getTime();
            t.$ = s("querySelector"), t.$$ = s("querySelectorAll")
        }, function(e, t) {
            e.exports = function(e) {
                var t = typeof e;
                return !!e && ("object" == t || "function" == t)
            }
        }, function(e, t, n) {
            "use strict";
            t.__esModule = !0;
            var r = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(n(16));
            t.default = function(e, t) {
                if (!e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" !== (void 0 === t ? "undefined" : (0, r.default)(t)) && "function" != typeof t ? e : t
            }
        }, function(e, t, n) {
            "use strict";
            function r(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            t.__esModule = !0;
            var o = r(n(110)),
                i = r(n(114)),
                a = r(n(16));
            t.default = function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function, not " + (void 0 === t ? "undefined" : (0, a.default)(t)));
                e.prototype = (0, i.default)(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (o.default ? (0, o.default)(e, t) : e.__proto__ = t)
            }
        }, function(e, t, n) {
            "use strict";
            function r(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            t.__esModule = !0;
            var o = r(n(80)),
                i = r(n(96)),
                a = "function" == typeof i.default && "symbol" == typeof o.default ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof i.default && e.constructor === i.default && e !== i.default.prototype ? "symbol" : typeof e
                };
            t.default = "function" == typeof i.default && "symbol" === a(o.default) ? function(e) {
                return void 0 === e ? "undefined" : a(e)
            } : function(e) {
                return e && "function" == typeof i.default && e.constructor === i.default && e !== i.default.prototype ? "symbol" : void 0 === e ? "undefined" : a(e)
            }
        }, function(e, t, n) {
            var r = n(0),
                o = n(8),
                i = n(54),
                a = n(9),
                s = function(e, t, n) {
                    var l,
                        c,
                        u,
                        d = e & s.F,
                        f = e & s.G,
                        p = e & s.S,
                        h = e & s.P,
                        v = e & s.B,
                        m = e & s.W,
                        g = f ? o : o[t] || (o[t] = {}),
                        y = g.prototype,
                        b = f ? r : p ? r[t] : (r[t] || {}).prototype;
                    f && (n = t);
                    for (l in n)
                        (c = !d && b && void 0 !== b[l]) && l in g || (u = c ? b[l] : n[l], g[l] = f && "function" != typeof b[l] ? n[l] : v && c ? i(u, r) : m && b[l] == u ? function(e) {
                            var t = function(t, n, r) {
                                if (this instanceof e) {
                                    switch (arguments.length) {
                                    case 0:
                                        return new e;
                                    case 1:
                                        return new e(t);
                                    case 2:
                                        return new e(t, n)
                                    }
                                    return new e(t, n, r)
                                }
                                return e.apply(this, arguments)
                            };
                            return t.prototype = e.prototype, t
                        }(u) : h && "function" == typeof u ? i(Function.call, u) : u, h && ((g.virtual || (g.virtual = {}))[l] = u, e & s.R && y && !y[l] && a(y, l, u)))
                };
            s.F = 1, s.G = 2, s.S = 4, s.P = 8, s.B = 16, s.W = 32, s.U = 64, s.R = 128, e.exports = s
        }, function(e, t, n) {
            var r = n(19);
            e.exports = function(e) {
                if (!r(e))
                    throw TypeError(e + " is not an object!");
                return e
            }
        }, function(e, t) {
            e.exports = function(e) {
                return "object" == typeof e ? null !== e : "function" == typeof e
            }
        }, function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            t.default = {
                INIT: "vx:init",
                SOURCE_ATTACHED: "vx:sourceattached",
                LOADING: "vx:loading",
                TRIGGER_PAUSE: "vx:triggerpause",
                TRIGGER_PLAY: "vx:triggerplay",
                VIDEO_CLICK: "vx:videoclick"
            }
        }, function(e, t, n) {
            "use strict";
            function r(e, t) {
                var n = Array.prototype.slice.call(t),
                    r = function() {},
                    i = window.console || {
                        log: r,
                        warn: r,
                        error: r
                    };
                e ? n.unshift(e.toUpperCase() + ":") : e = "log", o.history.push(n), n.unshift("LIB-PLAYER-VIDEO:"), i[e].apply ? i[e].apply(i, n) : i[e](n.join(" "))
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var o = function() {
                window.libVideoPlayerDebug && r(null, arguments)
            };
            o.history = [], o.error = function() {
                r("error", arguments)
            }, o.warn = function() {
                r("warn", arguments)
            }, t.default = o
        }, function(e, t, n) {
            var r = n(125),
                o = n(23);
            e.exports = function(e) {
                return null != e && o(r(e))
            }
        }, function(e, t) {
            var n = 9007199254740991;
            e.exports = function(e) {
                return "number" == typeof e && e > -1 && e % 1 == 0 && e <= n
            }
        }, function(e, t) {
            e.exports = function(e) {
                try {
                    return !!e()
                } catch (e) {
                    return !0
                }
            }
        }, function(e, t) {
            e.exports = function(e, t) {
                return {
                    enumerable: !(1 & e),
                    configurable: !(2 & e),
                    writable: !(4 & e),
                    value: t
                }
            }
        }, function(e, t, n) {
            var r = n(58),
                o = n(42);
            e.exports = Object.keys || function(e) {
                return r(e, o)
            }
        }, function(e, t) {
            var n = 0,
                r = Math.random();
            e.exports = function(e) {
                return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++n + r).toString(36))
            }
        }, function(e, t, n) {
            "use strict";
            function r(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var o = r(n(1)),
                i = r(n(2)),
                a = function() {
                    function e() {
                        (0, o.default)(this, e)
                    }
                    return (0, i.default)(e, [{
                        key: "on",
                        value: function(e, t) {
                            return this._eventCollection = this._eventCollection || {}, this._eventCollection[e] = this._eventCollection[e] || [], this._eventCollection[e].push(t), this
                        }
                    }, {
                        key: "once",
                        value: function(e, t) {
                            function n() {
                                r.off(e, n), t.apply(this, arguments)
                            }
                            var r = this;
                            return n.listener = t, this.on(e, n), this
                        }
                    }, {
                        key: "off",
                        value: function(e, t) {
                            var n = void 0;
                            return this._eventCollection && (n = this._eventCollection[e]) ? (n.forEach(function(e, r) {
                                e !== t && e.listener !== t || n.splice(r, 1)
                            }), 0 === n.length && delete this._eventCollection[e], this) : this
                        }
                    }, {
                        key: "emit",
                        value: function(e) {
                            for (var t = this, n = arguments.length, r = Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)
                                r[o - 1] = arguments[o];
                            var i = void 0;
                            return this._eventCollection && (i = this._eventCollection[e]) ? ((i = i.slice(0)).forEach(function(e) {
                                return e.apply(t, r)
                            }), this) : this
                        }
                    }]), e
                }();
            t.default = a
        }, function(e, t, n) {
            var r = n(22),
                o = n(7),
                i = Object.prototype,
                a = i.hasOwnProperty,
                s = i.propertyIsEnumerable;
            e.exports = function(e) {
                return o(e) && r(e) && a.call(e, "callee") && !s.call(e, "callee")
            }
        }, function(e, t) {
            var n = Array.prototype,
                r = Error.prototype,
                o = Object.prototype.propertyIsEnumerable,
                i = n.splice,
                a = {};
            !function(e) {
                var t = function() {
                        this.x = 1
                    },
                    n = {
                        0: 1,
                        length: 1
                    },
                    s = [];
                t.prototype = {
                    valueOf: 1,
                    y: 1
                };
                for (var l in new t)
                    s.push(l);
                a.enumErrorProps = o.call(r, "message") || o.call(r, "name"), a.enumPrototypes = o.call(t, "prototype"), a.nonEnumShadows = !/valueOf/.test(s), a.ownLast = "x" != s[0], a.spliceObjects = (i.call(n, 0, 1), !n[0]), a.unindexedChars = "x"[0] + Object("x")[0] != "xx"
            }(), e.exports = a
        }, function(e, t, n) {
            var r = n(66),
                o = n(23),
                i = n(7),
                a = Object.prototype.toString,
                s = r(Array, "isArray") || function(e) {
                    return i(e) && o(e.length) && "[object Array]" == a.call(e)
                };
            e.exports = s
        }, function(e, t, n) {
            "use strict";
            function r(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Version = t.params = t.thirdapp = t.aliapp = t.os = t.browser = void 0;
            var o = r(n(142)),
                i = r(n(143)),
                a = r(n(70)),
                s = r(n(144)),
                l = r(n(145)),
                c = r(n(33));
            t.browser = i.default, t.os = a.default, t.aliapp = o.default, t.thirdapp = s.default, t.params = l.default, t.Version = c.default
        }, function(e, t, n) {
            "use strict";
            function r(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var o = function() {
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
                i = function() {
                    function e(t) {
                        r(this, e), this.val = t ? t.toString() : ""
                    }
                    return o(e, null, [{
                        key: "compare",
                        value: function(e, t) {
                            e = e.toString().split("."), t = t.toString().split(".");
                            for (var n = 0; n < e.length || n < t.length; n++) {
                                var r = parseInt(e[n], 10),
                                    o = parseInt(t[n], 10);
                                if (isNaN(r) && (r = 0), isNaN(o) && (o = 0), r < o)
                                    return -1;
                                if (r > o)
                                    return 1
                            }
                            return 0
                        }
                    }]), o(e, [{
                        key: "gt",
                        value: function(t) {
                            return e.compare(this, t) > 0
                        }
                    }, {
                        key: "gte",
                        value: function(t) {
                            return e.compare(this, t) >= 0
                        }
                    }, {
                        key: "lt",
                        value: function(t) {
                            return e.compare(this, t) < 0
                        }
                    }, {
                        key: "lte",
                        value: function(t) {
                            return e.compare(this, t) <= 0
                        }
                    }, {
                        key: "eq",
                        value: function(t) {
                            return 0 === e.compare(this, t)
                        }
                    }, {
                        key: "toString",
                        value: function() {
                            return this.val.toString()
                        }
                    }]), e
                }();
            t.default = i
        }, function(e, t) {
            var n = Math.ceil,
                r = Math.floor;
            e.exports = function(e) {
                return isNaN(e = +e) ? 0 : (e > 0 ? r : n)(e)
            }
        }, function(e, t) {
            e.exports = function(e) {
                if (void 0 == e)
                    throw TypeError("Can't call method on  " + e);
                return e
            }
        }, function(e, t) {
            e.exports = !0
        }, function(e, t, n) {
            var r = n(19);
            e.exports = function(e, t) {
                if (!r(e))
                    return e;
                var n,
                    o;
                if (t && "function" == typeof (n = e.toString) && !r(o = n.call(e)))
                    return o;
                if ("function" == typeof (n = e.valueOf) && !r(o = n.call(e)))
                    return o;
                if (!t && "function" == typeof (n = e.toString) && !r(o = n.call(e)))
                    return o;
                throw TypeError("Can't convert object to primitive value")
            }
        }, function(e, t) {
            e.exports = {}
        }, function(e, t, n) {
            var r = n(18),
                o = n(86),
                i = n(42),
                a = n(40)("IE_PROTO"),
                s = function() {},
                l = function() {
                    var e,
                        t = n(56)("iframe"),
                        r = i.length;
                    for (t.style.display = "none", n(91).appendChild(t), t.src = "javascript:", (e = t.contentWindow.document).open(), e.write("<script>document.F=Object<\/script>"), e.close(), l = e.F; r--;)
                        delete l.prototype[i[r]];
                    return l()
                };
            e.exports = Object.create || function(e, t) {
                var n;
                return null !== e ? (s.prototype = r(e), n = new s, s.prototype = null, n[a] = e) : n = l(), void 0 === t ? n : o(n, t)
            }
        }, function(e, t, n) {
            var r = n(41)("keys"),
                o = n(27);
            e.exports = function(e) {
                return r[e] || (r[e] = o(e))
            }
        }, function(e, t, n) {
            var r = n(0),
                o = r["__core-js_shared__"] || (r["__core-js_shared__"] = {});
            e.exports = function(e) {
                return o[e] || (o[e] = {})
            }
        }, function(e, t) {
            e.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
        }, function(e, t, n) {
            var r = n(4).f,
                o = n(6),
                i = n(10)("toStringTag");
            e.exports = function(e, t, n) {
                e && !o(e = n ? e : e.prototype, i) && r(e, i, {
                    configurable: !0,
                    value: t
                })
            }
        }, function(e, t, n) {
            t.f = n(10)
        }, function(e, t, n) {
            var r = n(0),
                o = n(8),
                i = n(36),
                a = n(44),
                s = n(4).f;
            e.exports = function(e) {
                var t = o.Symbol || (o.Symbol = i ? {} : r.Symbol || {});
                "_" == e.charAt(0) || e in t || s(t, e, {
                    value: a.f(e)
                })
            }
        }, function(e, t) {
            t.f = {}.propertyIsEnumerable
        }, function(e, t, n) {
            "use strict";
            function r(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            function o(e) {
                return !!e && "object" === (void 0 === e ? "undefined" : (0, a.default)(e)) && "[object Object]" === e.toString() && e.constructor === Object
            }
            function i() {
                var e = Array.prototype.slice.call(arguments);
                return e.unshift({}), e.push(l), s.default.apply(null, e), e[0]
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var a = r(n(16));
            t.default = i;
            var s = r(n(121)),
                l = function(e, t) {
                    return o(t) ? o(e) ? void 0 : i(t) : t
                }
        }, function(e, t, n) {
            var r = n(7),
                o = "[object String]",
                i = Object.prototype.toString;
            e.exports = function(e) {
                return "string" == typeof e || r(e) && i.call(e) == o
            }
        }, function(e, t, n) {
            var r = n(64),
                o = n(29),
                i = n(31),
                a = n(67),
                s = n(50),
                l = n(23),
                c = n(13),
                u = n(48),
                d = n(30),
                f = "[object Error]",
                p = "[object Object]",
                h = "[object String]",
                v = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"],
                m = Error.prototype,
                g = Object.prototype,
                y = String.prototype,
                b = g.hasOwnProperty,
                _ = g.toString,
                w = {};
            w["[object Array]"] = w["[object Date]"] = w["[object Number]"] = {
                constructor: !0,
                toLocaleString: !0,
                toString: !0,
                valueOf: !0
            }, w["[object Boolean]"] = w[h] = {
                constructor: !0,
                toString: !0,
                valueOf: !0
            }, w[f] = w["[object Function]"] = w["[object RegExp]"] = {
                constructor: !0,
                toString: !0
            }, w[p] = {
                constructor: !0
            }, r(v, function(e) {
                for (var t in w)
                    if (b.call(w, t)) {
                        var n = w[t];
                        n[e] = b.call(n, e)
                    }
            }), e.exports = function(e) {
                if (null == e)
                    return [];
                c(e) || (e = Object(e));
                var t = e.length;
                t = t && l(t) && (i(e) || o(e) || u(e)) && t || 0;
                for (var n = e.constructor, r = -1, E = a(n) && n.prototype || g, x = E === e, T = Array(t), S = t > 0, C = d.enumErrorProps && (e === m || e instanceof Error), O = d.enumPrototypes && a(e); ++r < t;)
                    T[r] = r + "";
                for (var k in e)
                    O && "prototype" == k || C && ("message" == k || "name" == k) || S && s(k, t) || "constructor" == k && (x || !b.call(e, k)) || T.push(k);
                if (d.nonEnumShadows && e !== g) {
                    var M = e === y ? h : e === m ? f : _.call(e),
                        A = w[M] || w[p];
                    for (M == p && (E = g), t = v.length; t--;) {
                        var N = A[k = v[t]];
                        x && N || (N ? !b.call(e, k) : e[k] === E[k]) || T.push(k)
                    }
                }
                return T
            }
        }, function(e, t) {
            var n = /^\d+$/,
                r = 9007199254740991;
            e.exports = function(e, t) {
                return e = "number" == typeof e || n.test(e) ? +e : -1, t = null == t ? r : t, e > -1 && e % 1 == 0 && e < t
            }
        }, function(e, t, n) {
            "use strict";
            function r(e) {
                if (e && e.__esModule)
                    return e;
                var t = {};
                if (null != e)
                    for (var n in e)
                        Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                return t.default = e, t
            }
            function o(e, t, n) {
                if (Array.isArray(t))
                    return u(o, e, t, n);
                var r = d.getElData(e);
                r.handlers || (r.handlers = {}), r.handlers[t] || (r.handlers[t] = []), n.guid || (n.guid = f.newGUID()), r.handlers[t].push(n), r.dispatcher || (r.disabled = !1, r.dispatcher = function(t, n) {
                    if (!r.disabled) {
                        t = l(t);
                        var o = r.handlers[t.type];
                        if (o)
                            for (var i = o.slice(0), a = 0, s = i.length; a < s && !t.isImmediatePropagationStopped(); a++)
                                i[a].call(e, t, n)
                    }
                }), 1 === r.handlers[t].length && (e.addEventListener ? e.addEventListener(t, r.dispatcher, !1) : e.attachEvent && e.attachEvent("on" + t, r.dispatcher))
            }
            function i(e, t, n) {
                if (d.hasElData(e)) {
                    var r = d.getElData(e);
                    if (r.handlers) {
                        if (Array.isArray(t))
                            return u(i, e, t, n);
                        var o = function(t) {
                            r.handlers[t] = [], c(e, t)
                        };
                        if (t) {
                            var a = r.handlers[t];
                            if (a) {
                                if (!n)
                                    return void o(t);
                                if (n.guid)
                                    for (var s = 0; s < a.length; s++)
                                        a[s].guid === n.guid && a.splice(s--, 1);
                                c(e, t)
                            }
                        } else
                            for (var l in r.handlers)
                                o(l)
                    }
                }
            }
            function a(e, t, n) {
                var r = d.hasElData(e) ? d.getElData(e) : {},
                    o = e.parentNode || e.ownerDocument;
                if ("string" == typeof t && (t = {
                    type: t,
                    target: e
                }), t = l(t), r.dispatcher && r.dispatcher.call(e, t, n), o && !t.isPropagationStopped() && !0 === t.bubbles)
                    a.call(null, o, t, n);
                else if (!o && !t.defaultPrevented) {
                    var i = d.getElData(t.target);
                    t.target[t.type] && (i.disabled = !0, "function" == typeof t.target[t.type] && t.target[t.type](), i.disabled = !1)
                }
                return !t.defaultPrevented
            }
            function s(e, t, n) {
                if (Array.isArray(t))
                    return u(s, e, t, n);
                var r = function r() {
                    i(e, t, r), n.apply(this, arguments)
                };
                r.guid = n.guid = n.guid || f.newGUID(), o(e, t, r)
            }
            function l(e) {
                function t() {
                    return !0
                }
                function n() {
                    return !1
                }
                if (!e || !e.isPropagationStopped) {
                    var r = e || window.event;
                    e = {};
                    for (var o in r)
                        "layerX" !== o && "layerY" !== o && "keyLocation" !== o && "webkitMovementX" !== o && "webkitMovementY" !== o && ("returnValue" === o && r.preventDefault || (e[o] = r[o]));
                    if (e.target || (e.target = e.srcElement || document), e.relatedTarget || (e.relatedTarget = e.fromElement === e.target ? e.toElement : e.fromElement), e.preventDefault = function() {
                        r.preventDefault && r.preventDefault(), e.returnValue = !1, r.returnValue = !1, e.defaultPrevented = !0
                    }, e.defaultPrevented = !1, e.stopPropagation = function() {
                        r.stopPropagation && r.stopPropagation(), e.cancelBubble = !0, r.cancelBubble = !0, e.isPropagationStopped = t
                    }, e.isPropagationStopped = n, e.stopImmediatePropagation = function() {
                        r.stopImmediatePropagation && r.stopImmediatePropagation(), e.isImmediatePropagationStopped = t, e.stopPropagation()
                    }, e.isImmediatePropagationStopped = n, null != e.clientX) {
                        var i = document.documentElement,
                            a = document.body;
                        e.pageX = e.clientX + (i && i.scrollLeft || a && a.scrollLeft || 0) - (i && i.clientLeft || a && a.clientLeft || 0), e.pageY = e.clientY + (i && i.scrollTop || a && a.scrollTop || 0) - (i && i.clientTop || a && a.clientTop || 0)
                    }
                    e.which = e.charCode || e.keyCode, null != e.button && (e.button = 1 & e.button ? 0 : 4 & e.button ? 1 : 2 & e.button ? 2 : 0)
                }
                return e
            }
            function c(e, t) {
                var n = d.getElData(e);
                0 === n.handlers[t].length && (delete n.handlers[t], e.removeEventListener ? e.removeEventListener(t, n.dispatcher, !1) : e.detachEvent && e.detachEvent("on" + t, n.dispatcher)), Object.getOwnPropertyNames(n.handlers).length <= 0 && (delete n.handlers, delete n.dispatcher, delete n.disabled), 0 === Object.getOwnPropertyNames(n).length && d.removeElData(e)
            }
            function u(e, t, n, r) {
                n.forEach(function(n) {
                    e(t, n, r)
                })
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.on = o, t.off = i, t.trigger = a, t.one = s, t.fixEvent = l;
            var d = r(n(12)),
                f = r(n(62))
        }, function(e, t, n) {
            var r = n(46),
                o = n(25),
                i = n(3),
                a = n(37),
                s = n(6),
                l = n(55),
                c = Object.getOwnPropertyDescriptor;
            t.f = n(5) ? c : function(e, t) {
                if (e = i(e), t = a(t, !0), l)
                    try {
                        return c(e, t)
                    } catch (e) {}
                if (s(e, t))
                    return o(!r.f.call(e, t), e[t])
            }
        }, function(e, t, n) {
            "use strict";
            var r = n(36),
                o = n(17),
                i = n(57),
                a = n(9),
                s = n(6),
                l = n(38),
                c = n(85),
                u = n(43),
                d = n(74),
                f = n(10)("iterator"),
                p = !([].keys && "next" in [].keys()),
                h = function() {
                    return this
                };
            e.exports = function(e, t, n, v, m, g, y) {
                c(n, t, v);
                var b,
                    _,
                    w,
                    E = function(e) {
                        if (!p && e in C)
                            return C[e];
                        switch (e) {
                        case "keys":
                        case "values":
                            return function() {
                                return new n(this, e)
                            }
                        }
                        return function() {
                            return new n(this, e)
                        }
                    },
                    x = t + " Iterator",
                    T = "values" == m,
                    S = !1,
                    C = e.prototype,
                    O = C[f] || C["@@iterator"] || m && C[m],
                    k = O || E(m),
                    M = m ? T ? E("entries") : k : void 0,
                    A = "Array" == t ? C.entries || O : O;
                if (A && (w = d(A.call(new e))) !== Object.prototype && w.next && (u(w, x, !0), r || s(w, f) || a(w, f, h)), T && O && "values" !== O.name && (S = !0, k = function() {
                    return O.call(this)
                }), r && !y || !p && !S && C[f] || a(C, f, k), l[t] = k, l[x] = h, m)
                    if (b = {
                        values: T ? k : E("values"),
                        keys: g ? k : E("keys"),
                        entries: M
                    }, y)
                        for (_ in b)
                            _ in C || i(C, _, b[_]);
                    else
                        o(o.P + o.F * (p || S), t, b);
                return b
            }
        }, function(e, t, n) {
            var r = n(84);
            e.exports = function(e, t, n) {
                if (r(e), void 0 === t)
                    return e;
                switch (n) {
                case 1:
                    return function(n) {
                        return e.call(t, n)
                    };
                case 2:
                    return function(n, r) {
                        return e.call(t, n, r)
                    };
                case 3:
                    return function(n, r, o) {
                        return e.call(t, n, r, o)
                    }
                }
                return function() {
                    return e.apply(t, arguments)
                }
            }
        }, function(e, t, n) {
            e.exports = !n(5) && !n(24)(function() {
                return 7 != Object.defineProperty(n(56)("div"), "a", {
                    get: function() {
                        return 7
                    }
                }).a
            })
        }, function(e, t, n) {
            var r = n(19),
                o = n(0).document,
                i = r(o) && r(o.createElement);
            e.exports = function(e) {
                return i ? o.createElement(e) : {}
            }
        }, function(e, t, n) {
            e.exports = n(9)
        }, function(e, t, n) {
            var r = n(6),
                o = n(3),
                i = n(88)(!1),
                a = n(40)("IE_PROTO");
            e.exports = function(e, t) {
                var n,
                    s = o(e),
                    l = 0,
                    c = [];
                for (n in s)
                    n != a && r(s, n) && c.push(n);
                for (; t.length > l;)
                    r(s, n = t[l++]) && (~i(c, n) || c.push(n));
                return c
            }
        }, function(e, t) {
            var n = {}.toString;
            e.exports = function(e) {
                return n.call(e).slice(8, -1)
            }
        }, function(e, t) {
            t.f = Object.getOwnPropertySymbols
        }, function(e, t, n) {
            var r = n(58),
                o = n(42).concat("length", "prototype");
            t.f = Object.getOwnPropertyNames || function(e) {
                return r(e, o)
            }
        }, function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.newGUID = function() {
                return r++
            };
            var r = 1
        }, function(e, t, n) {
            "use strict";
            function r(e) {
                if (e && e.__esModule)
                    return e;
                var t = {};
                if (null != e)
                    for (var n in e)
                        Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                return t.default = e, t
            }
            function o(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = o(n(1)),
                a = o(n(2)),
                s = o(n(14)),
                l = o(n(15)),
                c = r(n(12)),
                u = o(n(47)),
                d = o(n(21)),
                f = o(n(141)),
                p = o(n(146)),
                h = r(n(51)),
                v = r(n(32)),
                m = r(n(147)),
                g = o(n(28)),
                y = o(n(20)),
                b = o(n(11)),
                _ = function(e) {
                    return e.preventDefault && e.preventDefault(), e.returnValue = !1, e.stopPropagation && e.stopPropagation(), !1
                },
                w = function(e) {
                    function t(e) {
                        (0, i.default)(this, t);
                        var n = (0, s.default)(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e)),
                            r = n.player = n.videox = e,
                            o = n.opts = e.config;
                        return n.options = {
                            playButtonClassName: "vjs-play-control",
                            playStatusButtonClassName: "vjs-playing",
                            playFullscreenClassName: "vjs-fullscreen-control",
                            showHiddenFullscreenClassName: "vjs-fullscreen",
                            itemClassName: "J_Interact_Item"
                        }, n.options = (0, u.default)(n.options, o), n.rootElement = r.rootElement, n.screen = "Vertical", n.rootElement = e.rootElement, n.player = r, n._addEventListener(), n
                    }
                    return (0, l.default)(t, e), (0, a.default)(t, [{
                        key: "_addEventListener",
                        value: function() {
                            this.videox.on(y.default.INIT, this.onInit.bind(this)), this.videox.on(y.default.VIDEO_CLICK, this.onVideoClick.bind(this)), this.videox.on(b.default.VIDEO_PLAY, this.onVideoPlay.bind(this)), this.videox.on(b.default.VIDEO_ENDED, this.onVideoEnded.bind(this)), this.videox.on(b.default.VIDEO_PAUSE, this.onVideoPause.bind(this))
                        }
                    }, {
                        key: "onInit",
                        value: function() {
                            this.el = this.createEl(), this.playBtnEl = c.$(".vjs-play-control", this.el), this.fullScreenBtnEl = c.$(".vjs-fullscreen-control", this.el), !0 !== this.options.live && (this.controlProgress = new f.default(this.videox)), this.options.volumeControls && !1 !== this.options.controls && (this.volumeProgress = new p.default(this.videox)), this.bindEvent()
                        }
                    }, {
                        key: "onVideoPlay",
                        value: function(e) {
                            c.addElClass(this.playBtnEl, this.options.playStatusButtonClassName)
                        }
                    }, {
                        key: "onVideoPause",
                        value: function(e) {
                            this.exePause(this.playBtnEl, !0)
                        }
                    }, {
                        key: "onVideoEnded",
                        value: function(e) {
                            this.exePause(this.playBtnEl, !0)
                        }
                    }, {
                        key: "onVideoClick",
                        value: function(e) {
                            this.triggerShowHideBar()
                        }
                    }, {
                        key: "createEl",
                        value: function() {
                            var e = "",
                                t = "",
                                n = "vjs-hidden",
                                r = navigator.userAgent.match(/UCBrowser/);
                            (v.aliapp && "TB" == v.aliapp.appname && !r && v.os.isAndroid || this.options.noFullscreen || !1 === this.options.controls) && (e = "vjs-hidden"), !1 !== this.options.controls && !0 !== this.options.live || (t = "vjs-hidden"), this.options.interact && (n = "");
                            var o = c.createEl("div", {
                                className: "vjs-control-bar",
                                innerHTML: '\n        <button class="' + t + ' vjs-play-control vjs-control vjs-button" tabindex="0" role="button" type="button">\n          <span class="vjs-control-text">Play</span>\n        </button>\n        <div class="progress-wrap"></div>\n        <div class="volume-wrap"></div>\n        <button class="interact-item J_Interact_Item ' + n + '"></button>\n        <button class="' + e + ' vjs-fullscreen-control vjs-control vjs-button " tabindex="0" role="button" type="button">\n          <span class="vjs-control-text">Fullscreen</span>\n        </button>\n      '
                            });
                            return c.appendContent(this.rootElement, o), o
                        }
                    }, {
                        key: "bindEvent",
                        value: function() {
                            var e = this;
                            h.on(this.el, "click", function(t) {
                                return e._triggerControllBarClick(t)
                            })
                        }
                    }, {
                        key: "volumeupdate",
                        value: function(e) {
                            this.volumeProgress && this.volumeProgress.volumeupdate(e)
                        }
                    }, {
                        key: "triggerShowHideBar",
                        value: function() {
                            c.hasElClass(this.el, "vjs-opacity-hidden") ? this.showControlBar() : this.hiddenControlBar_()
                        }
                    }, {
                        key: "showControlBar",
                        value: function() {
                            var e = this;
                            this.timer_ && clearTimeout(this.timer_), c.removeElClass(this.el, "vjs-hidden"), setTimeout(function() {
                                c.removeElClass(e.el, "vjs-opacity-hidden")
                            }, 0), this.timer_ = setTimeout(function() {
                                var t = e.controlProgress && e.controlProgress.progressing,
                                    n = e.volumeProgress && e.volumeProgress.progressing;
                                t || n ? e.showControlBar() : e.hiddenControlBar_()
                            }, 4e3)
                        }
                    }, {
                        key: "hiddenControlBar_",
                        value: function() {
                            var e = this;
                            c.addElClass(this.el, "vjs-opacity-hidden"), setTimeout(function() {
                                c.addElClass(e.el, "vjs-hidden")
                            }, 300)
                        }
                    }, {
                        key: "_triggerControllBarClick",
                        value: function(e) {
                            (0, d.default)("ControlBar::triggerControllBarClick_()");
                            var t = e.target;
                            e.preventDefault(), c.hasElClass(t, this.options.playButtonClassName) ? this.playButton(t) : c.hasElClass(t, this.options.playFullscreenClassName) ? this.fullscreenButton(t) : c.hasElClass(t, this.options.itemClassName) && this.player.emit("video:item:click")
                        }
                    }, {
                        key: "fullscreenButton",
                        value: function(e) {
                            "default" != this.options.fullscreen && v.os.isIPhone && m.isAvailable ? this.mockFullScreen_(e || this.fullScreenBtnEl) : "default" != this.options.fullscreen && v.os.isAndroid && m.isAvailable ? this.mockFullScreenRotateY_(e || this.fullScreenBtnEl) : "default" == this.options.fullscreen ? this.mockFullScreenVertical_(e || this.fullScreenBtnEl) : this.enterFullScreen()
                        }
                    }, {
                        key: "enterFullScreen",
                        value: function() {
                            var e = this.videox.videoDom;
                            "webkitDisplayingFullscreen" in e && h.one(e, "webkitbeginfullscreen", function() {
                                h.one(e, "webkitendfullscreen", function() {
                                    h.trigger(e, "fullscreenchange", {
                                        isFullscreen: !1
                                    })
                                }), h.trigger(e, "fullscreenchange", {
                                    isFullscreen: !0
                                })
                            }), e.paused && e.networkState <= e.HAVE_METADATA ? (e.play(), setTimeout(function() {
                                e.pause(), e.webkitEnterFullScreen()
                            }, 0)) : this.canFullScreen_() || v.os.isIPhone ? e.webkitEnterFullScreen() : this.rotatePage_(), this.videox.emit(b.default.VIDEO_ENTERFULLSCREEN)
                        }
                    }, {
                        key: "mockFullScreen_",
                        value: function(e) {
                            var t = this,
                                n = "Vertical" === this.screen;
                            this.transverseFullScreen_(n, function(e) {
                                !e && n ? (c.addElClass(document.body, "vjs-body-fullscreen"), c.addElClass(t.rootElement, "vjs-player-fullscreen"), window.scrollTo(0, 0), t.screen = "landscape", t.player.emit("video:enterFullscreen")) : e || n ? (t.videoPlayer.enterFullScreen(), t.player.emit("video:enterFullscreen")) : (c.removeElClass(document.body, "vjs-body-fullscreen"), c.removeElClass(t.rootElement, "vjs-player-fullscreen"), t.screen = "Vertical", window.scrollTo(0, t.rootElement.offsetTop - window.scrollY), t.player.emit("video:exitFullscreen"))
                            })
                        }
                    }, {
                        key: "mockFullScreenRotateY_",
                        value: function(e) {
                            var t = this,
                                n = "Vertical" === this.screen,
                                r = document.documentElement.getBoundingClientRect();
                            r.width, r.height, document.querySelector('meta[name="viewport"]'), this.options["initial-scale"], this.androidBgMaskEl = c.$(".vjs-android-bg-mask"), this.androidBgMaskEl || (this.androidBgMaskEl = c.createEl("div", {
                                className: "vjs-android-bg-mask"
                            })), this.oldWidth || (this.oldWidth = this.rootElement.offsetWidth, this.oldHeight = this.rootElement.offsetHeight), n ? window.WindVane.call("WebAppInterface", "setNaviBarHidden", {
                                hidden: "1",
                                animated: "1"
                            }, function() {
                                t._canSetNav = !0, t.rotatePage_(), t.player.emit("video:enterFullscreen")
                            }, function() {
                                t._canSetNav = !1, t.videoPlayer.enterFullScreen(), t.player.emit("video:enterFullscreen")
                            }) : (window.WindVane.call("WebAppInterface", "setNaviBarHidden", {
                                hidden: "0",
                                animated: "0"
                            }, function() {}, function() {}), this.rotateBackPage_(), this.player.emit("video:exitFullscreen"))
                        }
                    }, {
                        key: "mockFullScreenVertical_",
                        value: function(e) {
                            "Vertical" === this.screen ? (c.addElClass(document.body, "vjs-body-fullscreen"), c.addElClass(this.rootElement, "vjs-player-fullscreen"), window.scrollTo(0, 0), this.screen = "landscape", this.player.emit("video:enterFullscreen")) : (c.removeElClass(document.body, "vjs-body-fullscreen"), c.removeElClass(this.rootElement, "vjs-player-fullscreen"), this.screen = "Vertical", window.scrollTo(0, this.rootElement.offsetTop - window.scrollY), this.player.emit("video:exitFullscreen"))
                        }
                    }, {
                        key: "transverseFullScreen_",
                        value: function(e, t) {
                            window.WindVane.call("WebAppInterface", "transverseFullScreen", {
                                open: e.toString()
                            }, function(e) {
                                t(null, !0)
                            }, function(e) {
                                t(!0, e)
                            })
                        }
                    }, {
                        key: "playButton",
                        value: function(e, t) {
                            this.showControlBar(), c.hasElClass(e, this.options.playStatusButtonClassName) ? this.exePause(e, t) : this.exePlay(e, t)
                        }
                    }, {
                        key: "playEnded",
                        value: function() {
                            this.exePause(this.playBtnEl, !0)
                        }
                    }, {
                        key: "playPause",
                        value: function() {
                            this.exePause(this.playBtnEl, !0)
                        }
                    }, {
                        key: "realPlay",
                        value: function() {
                            this.showControlBar(), this.exePlay(this.playBtnEl, !0)
                        }
                    }, {
                        key: "exePlay",
                        value: function(e, t) {
                            c.addElClass(this.playBtnEl, this.options.playStatusButtonClassName), !t && this.videox.emit(y.default.TRIGGER_PLAY, {})
                        }
                    }, {
                        key: "exePause",
                        value: function(e, t) {
                            c.removeElClass(this.playBtnEl, this.options.playStatusButtonClassName), t || this.videox.emit(y.default.TRIGGER_PAUSE, {})
                        }
                    }, {
                        key: "canFullScreen_",
                        value: function() {
                            return document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled
                        }
                    }, {
                        key: "requestFullScreen_",
                        value: function() {
                            var e = this.videoPlayer.video;
                            e.requestFullscreen ? e.requestFullscreen() : e.webkitRequestFullscreen ? e.webkitRequestFullscreen() : e.mozRequestFullScreen ? e.mozRequestFullScreen() : e.msRequestFullscreen && e.msRequestFullscreen()
                        }
                    }, {
                        key: "rotatePage_",
                        value: function() {
                            var e = this._canSetNav ? 0 : 70,
                                t = document.documentElement.getBoundingClientRect(),
                                n = t.width + "px",
                                r = t.height + 50 / (this.options["initial-scale"] || 1) - e + "px";
                            c.addElClass(document.body, "vjs-body-fullscreen"), c.addElClass(this.rootElement, "vjs-player-fullscreen-rotate"), c.appendContent(this.rootElement.parentNode.parentNode, this.androidBgMaskEl), this.rootElement.style.height = n, this.rootElement.style.width = r, document.body.style.height = n, this.screen = "landscape", window.scrollTo(0, 0), h.on(this.rootElement, "touchmove", _), this.player.emit("video:enterFullscreen")
                        }
                    }, {
                        key: "rotateBackPage_",
                        value: function() {
                            var e = this;
                            c.removeElClass(document.body, "vjs-body-fullscreen"), c.removeElClass(this.rootElement, "vjs-player-fullscreen-rotate"), this.androidBgMaskEl && this.rootElement.parentNode.parentNode.removeChild(this.androidBgMaskEl), this.rootElement.style.height = this.oldHeight + "px", this.rootElement.style.width = this.oldWidth + "px", document.body.style.height = "100%", this.screen = "Vertical", h.off(this.rootElement, "touchmove", _), setTimeout(function() {
                                window.scrollTo(0, e.rootElement.offsetTop - window.scrollY)
                            }, 500)
                        }
                    }]), t
                }(g.default);
            t.default = w
        }, function(e, t) {
            e.exports = function(e, t) {
                for (var n = -1, r = e.length; ++n < r && !1 !== t(e[n], n, e);)
                    ;
                return e
            }
        }, function(e, t, n) {
            var r = n(13),
                o = n(48),
                i = n(30);
            e.exports = function(e) {
                if (i.unindexedChars && o(e)) {
                    for (var t = -1, n = e.length, a = Object(e); ++t < n;)
                        a[t] = e.charAt(t);
                    return a
                }
                return r(e) ? e : Object(e)
            }
        }, function(e, t, n) {
            var r = n(127);
            e.exports = function(e, t) {
                var n = null == e ? void 0 : e[t];
                return r(n) ? n : void 0
            }
        }, function(e, t, n) {
            var r = n(13),
                o = "[object Function]",
                i = Object.prototype.toString;
            e.exports = function(e) {
                return r(e) && i.call(e) == o
            }
        }, function(e, t) {
            var n = function() {
                try {
                    Object({
                        toString: 0
                    } + "")
                } catch (e) {
                    return function() {
                        return !1
                    }
                }
                return function(e) {
                    return "function" != typeof e.toString && "string" == typeof (e + "")
                }
            }();
            e.exports = n
        }, function(e, t, n) {
            var r = n(23),
                o = n(7),
                i = {};
            i["[object Float32Array]"] = i["[object Float64Array]"] = i["[object Int8Array]"] = i["[object Int16Array]"] = i["[object Int32Array]"] = i["[object Uint8Array]"] = i["[object Uint8ClampedArray]"] = i["[object Uint16Array]"] = i["[object Uint32Array]"] = !0, i["[object Arguments]"] = i["[object Array]"] = i["[object ArrayBuffer]"] = i["[object Boolean]"] = i["[object Date]"] = i["[object Error]"] = i["[object Function]"] = i["[object Map]"] = i["[object Number]"] = i["[object Object]"] = i["[object RegExp]"] = i["[object Set]"] = i["[object String]"] = i["[object WeakMap]"] = !1;
            var a = Object.prototype.toString;
            e.exports = function(e) {
                return o(e) && r(e.length) && !!i[a.call(e)]
            }
        }, function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r,
                o,
                i = function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }(n(33)),
                a = window.navigator.userAgent;
            if (o = a.match(/Windows\sPhone\s(?:OS\s)?([\d\.]+)/))
                r = {
                    name: "Windows Phone",
                    isWindowsPhone: !0,
                    version: new i.default(o[1])
                };
            else if (a.match(/Safari/) && (o = a.match(/Android[\s\/]([\d\.]+)/)))
                r = {
                    version: new i.default(o[1])
                }, a.match(/Mobile\s+Safari/) ? (r.name = "Android", r.isAndroid = !0) : (r.name = "AndroidPad", r.isAndroidPad = !0);
            else if (o = a.match(/(iPhone|iPad|iPod)/)) {
                var s = o[1];
                (o = a.match(/OS ([\d_\.]+) like Mac OS X/)) && (r = {
                    name: s,
                    isIPhone: "iPhone" === s || "iPod" === s,
                    isIPad: "iPad" === s,
                    isIOS: !0,
                    version: new i.default(o[1].split("_").join("."))
                })
            }
            r || (r = {
                name: "unknown",
                version: new i.default("0.0.0")
            }), t.default = r
        }, function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            t.default = function(e) {
                try {
                    var t = new URL(e);
                    return t.hostname, "rtmp:" == t.protocol ? "rtmp" : e.split(".").pop().split(/\#|\?/)[0].toLowerCase()
                } catch (e) {
                    return ""
                }
            }
        }, function(e, t, n) {
            "use strict";
            function r(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }
            var o = function() {
                    function e(e, t) {
                        var n = [],
                            r = !0,
                            o = !1,
                            i = void 0;
                        try {
                            for (var a, s = e[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0)
                                ;
                        } catch (e) {
                            o = !0, i = e
                        } finally {
                            try {
                                !r && s.return && s.return()
                            } finally {
                                if (o)
                                    throw i
                            }
                        }
                        return n
                    }
                    return function(t, n) {
                        if (Array.isArray(t))
                            return t;
                        if (Symbol.iterator in Object(t))
                            return e(t, n);
                        throw new TypeError("Invalid attempt to destructure non-iterable instance")
                    }
                }(),
                i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
                },
                a = function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                        }
                    }
                    return function(t, n, r) {
                        return n && e(t.prototype, n), r && e(t, r), t
                    }
                }();
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var s = new RegExp("^([a-z0-9-]+:)?[/]{2}(?:([^@/:?]+)(?::([^@/:]+))?@)?([^:/?#]+)(?:[:]([0-9]+))?([/][^?#;]*)?(?:[?]([^#]*))?([#][^?]*)?$", "i"),
                l = function() {
                    function e(t) {
                        r(this, e), this._params = {}, this._hash = "", t && this.assign(t.toString())
                    }
                    return a(e, [{
                        key: "assign",
                        value: function(e) {
                            var t = (e = e || "").match(s);
                            if (!t)
                                throw new Error("Parse Error");
                            this.protocol = t[1] || ("object" === ("undefined" == typeof location ? "undefined" : i(location)) ? location.protocol : ""), this.username = t[2] || "", this.password = t[3] || "", this.hostname = t[4], this.port = t[5] || "", this.pathname = t[6] || "/", this.search = t[7] || "", this.hash = t[8] || "", this.origin = this.protocol + "//" + this.host
                        }
                    }, {
                        key: "toString",
                        value: function() {
                            var e = this.protocol + "//";
                            return this.username && (e += this.username, this.password && (e += ":" + this.password), e += "@"), e += this.hostname, this.port && "80" !== this.port && (e += ":" + this.port), this.pathname && (e += this.pathname), this.search && (e += this.search), this.hash && (e += this.hash), e
                        }
                    }, {
                        key: "params",
                        get: function() {
                            return this._params
                        },
                        set: function(e) {
                            if (e && "object" === (void 0 === e ? "undefined" : i(e)) && !(e instanceof Date) && !(e instanceof RegExp) && !(e instanceof Array) && !(e instanceof String) && !(e instanceof Number) && !(e instanceof Boolean)) {
                                for (var t in this._params)
                                    delete this._params[t];
                                for (var t in e)
                                    this._params[t] = e[t]
                            }
                        }
                    }, {
                        key: "search",
                        get: function() {
                            var e = [];
                            for (var t in this._params)
                                if (void 0 !== this._params[t])
                                    if ("" !== this._params[t])
                                        try {
                                            e.push(encodeURIComponent(t) + "=" + encodeURIComponent(this._params[t]))
                                        } catch (n) {
                                            e.push(t + "=" + this._params[t])
                                        }
                                    else
                                        try {
                                            e.push(encodeURIComponent(t))
                                        } catch (n) {
                                            e.push(t)
                                        }
                            return e.length ? "?" + e.join("&") : ""
                        },
                        set: function(e) {
                            if ("string" == typeof e || e instanceof String) {
                                0 === (e = e.toString()).indexOf("?") && (e = e.substr(1));
                                var t = e.split("&");
                                for (var n in this._params)
                                    delete this._params[n];
                                for (var r = 0; r < t.length; r++) {
                                    var i = t[r].split("="),
                                        a = o(i, 2),
                                        s = a[0],
                                        l = a[1];
                                    if (void 0 !== l && (l = l.toString()), s)
                                        try {
                                            this._params[decodeURIComponent(s)] = decodeURIComponent(l)
                                        } catch (e) {
                                            this._params[s] = l
                                        }
                                }
                            }
                        }
                    }, {
                        key: "hash",
                        get: function() {
                            return this._hash
                        },
                        set: function(e) {
                            ("string" == typeof e || e instanceof String) && ((e = e.toString()) && e.indexOf("#") < 0 && (e = "#" + e), this._hash = e || "")
                        }
                    }, {
                        key: "host",
                        get: function() {
                            return this.hostname + (this.port ? ":" + this.port : "")
                        },
                        set: function(e) {
                            if ("string" == typeof e || e instanceof String) {
                                var t = (e = e.toString()).match(/([^:\/?#]+)(?:[:]([0-9]+))?/);
                                t && (this.hostname = t[1], this.port = t[2] || "")
                            }
                        }
                    }]), e
                }();
            t.default = l
        }, function(e, t) {
            function n() {
                this._events = this._events || {}, this._maxListeners = this._maxListeners || void 0
            }
            function r(e) {
                return "function" == typeof e
            }
            function o(e) {
                return "number" == typeof e
            }
            function i(e) {
                return "object" == typeof e && null !== e
            }
            function a(e) {
                return void 0 === e
            }
            e.exports = n, n.EventEmitter = n, n.prototype._events = void 0, n.prototype._maxListeners = void 0, n.defaultMaxListeners = 10, n.prototype.setMaxListeners = function(e) {
                if (!o(e) || e < 0 || isNaN(e))
                    throw TypeError("n must be a positive number");
                return this._maxListeners = e, this
            }, n.prototype.emit = function(e) {
                var t,
                    n,
                    o,
                    s,
                    l,
                    c;
                if (this._events || (this._events = {}), "error" === e && (!this._events.error || i(this._events.error) && !this._events.error.length)) {
                    if ((t = arguments[1]) instanceof Error)
                        throw t;
                    var u = new Error('Uncaught, unspecified "error" event. (' + t + ")");
                    throw u.context = t, u
                }
                if (n = this._events[e], a(n))
                    return !1;
                if (r(n))
                    switch (arguments.length) {
                    case 1:
                        n.call(this);
                        break;
                    case 2:
                        n.call(this, arguments[1]);
                        break;
                    case 3:
                        n.call(this, arguments[1], arguments[2]);
                        break;
                    default:
                        s = Array.prototype.slice.call(arguments, 1), n.apply(this, s)
                    }
                else if (i(n))
                    for (s = Array.prototype.slice.call(arguments, 1), c = n.slice(), o = c.length, l = 0; l < o; l++)
                        c[l].apply(this, s);
                return !0
            }, n.prototype.addListener = function(e, t) {
                var o;
                if (!r(t))
                    throw TypeError("listener must be a function");
                return this._events || (this._events = {}), this._events.newListener && this.emit("newListener", e, r(t.listener) ? t.listener : t), this._events[e] ? i(this._events[e]) ? this._events[e].push(t) : this._events[e] = [this._events[e], t] : this._events[e] = t, i(this._events[e]) && !this._events[e].warned && (o = a(this._maxListeners) ? n.defaultMaxListeners : this._maxListeners) && o > 0 && this._events[e].length > o && (this._events[e].warned = !0, console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.", this._events[e].length), "function" == typeof console.trace && console.trace()), this
            }, n.prototype.on = n.prototype.addListener, n.prototype.once = function(e, t) {
                function n() {
                    this.removeListener(e, n), o || (o = !0, t.apply(this, arguments))
                }
                if (!r(t))
                    throw TypeError("listener must be a function");
                var o = !1;
                return n.listener = t, this.on(e, n), this
            }, n.prototype.removeListener = function(e, t) {
                var n,
                    o,
                    a,
                    s;
                if (!r(t))
                    throw TypeError("listener must be a function");
                if (!this._events || !this._events[e])
                    return this;
                if (n = this._events[e], a = n.length, o = -1, n === t || r(n.listener) && n.listener === t)
                    delete this._events[e], this._events.removeListener && this.emit("removeListener", e, t);
                else if (i(n)) {
                    for (s = a; s-- > 0;)
                        if (n[s] === t || n[s].listener && n[s].listener === t) {
                            o = s;
                            break
                        }
                    if (o < 0)
                        return this;
                    1 === n.length ? (n.length = 0, delete this._events[e]) : n.splice(o, 1), this._events.removeListener && this.emit("removeListener", e, t)
                }
                return this
            }, n.prototype.removeAllListeners = function(e) {
                var t,
                    n;
                if (!this._events)
                    return this;
                if (!this._events.removeListener)
                    return 0 === arguments.length ? this._events = {} : this._events[e] && delete this._events[e], this;
                if (0 === arguments.length) {
                    for (t in this._events)
                        "removeListener" !== t && this.removeAllListeners(t);
                    return this.removeAllListeners("removeListener"), this._events = {}, this
                }
                if (n = this._events[e], r(n))
                    this.removeListener(e, n);
                else if (n)
                    for (; n.length;)
                        this.removeListener(e, n[n.length - 1]);
                return delete this._events[e], this
            }, n.prototype.listeners = function(e) {
                return this._events && this._events[e] ? r(this._events[e]) ? [this._events[e]] : this._events[e].slice() : []
            }, n.prototype.listenerCount = function(e) {
                if (this._events) {
                    var t = this._events[e];
                    if (r(t))
                        return 1;
                    if (t)
                        return t.length
                }
                return 0
            }, n.listenerCount = function(e, t) {
                return e.listenerCount(t)
            }
        }, function(e, t, n) {
            var r = n(6),
                o = n(75),
                i = n(40)("IE_PROTO"),
                a = Object.prototype;
            e.exports = Object.getPrototypeOf || function(e) {
                return e = o(e), r(e, i) ? e[i] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? a : null
            }
        }, function(e, t, n) {
            var r = n(35);
            e.exports = function(e) {
                return Object(r(e))
            }
        }, function(e, t) {
            function n(e, t) {
                var n = e[1] || "",
                    o = e[3];
                if (!o)
                    return n;
                if (t && "function" == typeof btoa) {
                    var i = r(o);
                    return [n].concat(o.sources.map(function(e) {
                        return "/*# sourceURL=" + o.sourceRoot + e + " */"
                    })).concat([i]).join("\n")
                }
                return [n].join("\n")
            }
            function r(e) {
                return "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(e)))) + " */"
            }
            e.exports = function(e) {
                var t = [];
                return t.toString = function() {
                    return this.map(function(t) {
                        var r = n(t, e);
                        return t[2] ? "@media " + t[2] + "{" + r + "}" : r
                    }).join("")
                }, t.i = function(e, n) {
                    "string" == typeof e && (e = [[null, e, ""]]);
                    for (var r = {}, o = 0; o < this.length; o++) {
                        var i = this[o][0];
                        "number" == typeof i && (r[i] = !0)
                    }
                    for (o = 0; o < e.length; o++) {
                        var a = e[o];
                        "number" == typeof a[0] && r[a[0]] || (n && !a[2] ? a[2] = n : n && (a[2] = "(" + a[2] + ") and (" + n + ")"), t.push(a))
                    }
                }, t
            }
        }, function(e, t, n) {
            function r(e, t) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n],
                        o = h[r.id];
                    if (o) {
                        o.refs++;
                        for (a = 0; a < o.parts.length; a++)
                            o.parts[a](r.parts[a]);
                        for (; a < r.parts.length; a++)
                            o.parts.push(u(r.parts[a], t))
                    } else {
                        for (var i = [], a = 0; a < r.parts.length; a++)
                            i.push(u(r.parts[a], t));
                        h[r.id] = {
                            id: r.id,
                            refs: 1,
                            parts: i
                        }
                    }
                }
            }
            function o(e, t) {
                for (var n = [], r = {}, o = 0; o < e.length; o++) {
                    var i = e[o],
                        a = t.base ? i[0] + t.base : i[0],
                        s = {
                            css: i[1],
                            media: i[2],
                            sourceMap: i[3]
                        };
                    r[a] ? r[a].parts.push(s) : n.push(r[a] = {
                        id: a,
                        parts: [s]
                    })
                }
                return n
            }
            function i(e, t) {
                var n = m(e.insertInto);
                if (!n)
                    throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
                var r = b[b.length - 1];
                if ("top" === e.insertAt)
                    r ? r.nextSibling ? n.insertBefore(t, r.nextSibling) : n.appendChild(t) : n.insertBefore(t, n.firstChild), b.push(t);
                else {
                    if ("bottom" !== e.insertAt)
                        throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
                    n.appendChild(t)
                }
            }
            function a(e) {
                if (null === e.parentNode)
                    return !1;
                e.parentNode.removeChild(e);
                var t = b.indexOf(e);
                t >= 0 && b.splice(t, 1)
            }
            function s(e) {
                var t = document.createElement("style");
                return e.attrs.type = "text/css", c(t, e.attrs), i(e, t), t
            }
            function l(e) {
                var t = document.createElement("link");
                return e.attrs.type = "text/css", e.attrs.rel = "stylesheet", c(t, e.attrs), i(e, t), t
            }
            function c(e, t) {
                Object.keys(t).forEach(function(n) {
                    e.setAttribute(n, t[n])
                })
            }
            function u(e, t) {
                var n,
                    r,
                    o,
                    i;
                if (t.transform && e.css) {
                    if (!(i = t.transform(e.css)))
                        return function() {};
                    e.css = i
                }
                if (t.singleton) {
                    var c = y++;
                    n = g || (g = s(t)), r = d.bind(null, n, c, !1), o = d.bind(null, n, c, !0)
                } else
                    e.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n = l(t), r = p.bind(null, n, t), o = function() {
                        a(n), n.href && URL.revokeObjectURL(n.href)
                    }) : (n = s(t), r = f.bind(null, n), o = function() {
                        a(n)
                    });
                return r(e), function(t) {
                    if (t) {
                        if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap)
                            return;
                        r(e = t)
                    } else
                        o()
                }
            }
            function d(e, t, n, r) {
                var o = n ? "" : r.css;
                if (e.styleSheet)
                    e.styleSheet.cssText = w(t, o);
                else {
                    var i = document.createTextNode(o),
                        a = e.childNodes;
                    a[t] && e.removeChild(a[t]), a.length ? e.insertBefore(i, a[t]) : e.appendChild(i)
                }
            }
            function f(e, t) {
                var n = t.css,
                    r = t.media;
                if (r && e.setAttribute("media", r), e.styleSheet)
                    e.styleSheet.cssText = n;
                else {
                    for (; e.firstChild;)
                        e.removeChild(e.firstChild);
                    e.appendChild(document.createTextNode(n))
                }
            }
            function p(e, t, n) {
                var r = n.css,
                    o = n.sourceMap,
                    i = void 0 === t.convertToAbsoluteUrls && o;
                (t.convertToAbsoluteUrls || i) && (r = _(r)), o && (r += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(o)))) + " */");
                var a = new Blob([r], {
                        type: "text/css"
                    }),
                    s = e.href;
                e.href = URL.createObjectURL(a), s && URL.revokeObjectURL(s)
            }
            var h = {},
                v = function(e) {
                    var t;
                    return function() {
                        return void 0 === t && (t = e.apply(this, arguments)), t
                    }
                }(function() {
                    return window && document && document.all && !window.atob
                }),
                m = function(e) {
                    var t = {};
                    return function(n) {
                        return void 0 === t[n] && (t[n] = e.call(this, n)), t[n]
                    }
                }(function(e) {
                    return document.querySelector(e)
                }),
                g = null,
                y = 0,
                b = [],
                _ = n(78);
            e.exports = function(e, t) {
                (t = t || {}).attrs = "object" == typeof t.attrs ? t.attrs : {}, t.singleton || (t.singleton = v()), t.insertInto || (t.insertInto = "head"), t.insertAt || (t.insertAt = "bottom");
                var n = o(e, t);
                return r(n, t), function(e) {
                    for (var i = [], a = 0; a < n.length; a++) {
                        var s = n[a];
                        (l = h[s.id]).refs--, i.push(l)
                    }
                    e && r(o(e, t), t);
                    for (a = 0; a < i.length; a++) {
                        var l = i[a];
                        if (0 === l.refs) {
                            for (var c = 0; c < l.parts.length; c++)
                                l.parts[c]();
                            delete h[l.id]
                        }
                    }
                }
            };
            var w = function() {
                var e = [];
                return function(t, n) {
                    return e[t] = n, e.filter(Boolean).join("\n")
                }
            }()
        }, function(e, t) {
            e.exports = function(e) {
                var t = "undefined" != typeof window && window.location;
                if (!t)
                    throw new Error("fixUrls requires window.location");
                if (!e || "string" != typeof e)
                    return e;
                var n = t.protocol + "//" + t.host,
                    r = n + t.pathname.replace(/\/[^\/]*$/, "/");
                return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(e, t) {
                    var o = t.trim().replace(/^"(.*)"$/, function(e, t) {
                        return t
                    }).replace(/^'(.*)'$/, function(e, t) {
                        return t
                    });
                    if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(o))
                        return e;
                    var i;
                    return i = 0 === o.indexOf("//") ? o : 0 === o.indexOf("/") ? n + o : r + o.replace(/^\.\//, ""), "url(" + JSON.stringify(i) + ")"
                })
            }
        }, function(e, t, n) {
            "use strict";
            function r(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var o = r(n(1)),
                i = r(n(14)),
                a = r(n(2)),
                s = r(n(15)),
                l = n(117),
                c = r(n(73)),
                u = r(n(118)),
                d = r(n(63)),
                f = r(n(11)),
                p = r(n(20)),
                h = r(n(157)),
                v = n(12);
            n.p = "//g.alicdn.com/mtb/lcps-videox/" + l.version + "/";
            var m = function(e) {
                function t() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    (0, o.default)(this, t);
                    var n = (0, i.default)(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                    return n.Events = f.default, n.config = e, n.rootElement = (0, v.createEl)("div", {
                        className: "lib-video"
                    }), n.player = new u.default(n), !1 !== e.controls && (n.controlBar = new d.default(n)), n._initLogTrack(), n.emit(p.default.INIT, {}), n._bindEvent(), n
                }
                return (0, s.default)(t, e), (0, a.default)(t, null, [{
                    key: "version",
                    get: function() {
                        return l.version
                    }
                }]), (0, a.default)(t, [{
                    key: "getVideoEl",
                    value: function() {
                        return this.videoDom
                    }
                }, {
                    key: "play",
                    value: function() {
                        this.player.play()
                    }
                }, {
                    key: "pause",
                    value: function() {
                        this.player.pause()
                    }
                }, {
                    key: "reload",
                    value: function(e) {
                        this.player.reload(e)
                    }
                }, {
                    key: "setCurrentTime",
                    value: function(e) {
                        this.videoDom.currentTime = e
                    }
                }, {
                    key: "_initLogTrack",
                    value: function() {
                        var e = {
                            videox: this
                        };
                        Object.assign(e, this.config), this.logTrack = new h.default(e)
                    }
                }, {
                    key: "_bindEvent",
                    value: function() {
                        var e = this;
                        this.rootElement.addEventListener("touchend", function(t) {
                            return e._triggerPlayerClick(t)
                        }, !0), this.rootElement.addEventListener("click", function(t) {
                            return e._triggerPlayerClick(t)
                        }, !0)
                    }
                }, {
                    key: "_triggerPlayerClick",
                    value: function(e) {
                        "VIDEO" === e.target.nodeName.toUpperCase() && ("touchend" == e.type && (e.stopPropagation(), e.preventDefault()), this.emit(p.default.VIDEO_CLICK))
                    }
                }], [{
                    key: "videoDom",
                    set: function(e) {
                        t.videoDom = e
                    }
                }]), t
            }(c.default);
            t.default = m
        }, function(e, t, n) {
            e.exports = {
                default: n(81),
                __esModule: !0
            }
        }, function(e, t, n) {
            n(82), n(92), e.exports = n(44).f("iterator")
        }, function(e, t, n) {
            "use strict";
            var r = n(83)(!0);
            n(53)(String, "String", function(e) {
                this._t = String(e), this._i = 0
            }, function() {
                var e,
                    t = this._t,
                    n = this._i;
                return n >= t.length ? {
                    value: void 0,
                    done: !0
                } : (e = r(t, n), this._i += e.length, {
                    value: e,
                    done: !1
                })
            })
        }, function(e, t, n) {
            var r = n(34),
                o = n(35);
            e.exports = function(e) {
                return function(t, n) {
                    var i,
                        a,
                        s = String(o(t)),
                        l = r(n),
                        c = s.length;
                    return l < 0 || l >= c ? e ? "" : void 0 : (i = s.charCodeAt(l)) < 55296 || i > 56319 || l + 1 === c || (a = s.charCodeAt(l + 1)) < 56320 || a > 57343 ? e ? s.charAt(l) : i : e ? s.slice(l, l + 2) : a - 56320 + (i - 55296 << 10) + 65536
                }
            }
        }, function(e, t) {
            e.exports = function(e) {
                if ("function" != typeof e)
                    throw TypeError(e + " is not a function!");
                return e
            }
        }, function(e, t, n) {
            "use strict";
            var r = n(39),
                o = n(25),
                i = n(43),
                a = {};
            n(9)(a, n(10)("iterator"), function() {
                return this
            }), e.exports = function(e, t, n) {
                e.prototype = r(a, {
                    next: o(1, n)
                }), i(e, t + " Iterator")
            }
        }, function(e, t, n) {
            var r = n(4),
                o = n(18),
                i = n(26);
            e.exports = n(5) ? Object.defineProperties : function(e, t) {
                o(e);
                for (var n, a = i(t), s = a.length, l = 0; s > l;)
                    r.f(e, n = a[l++], t[n]);
                return e
            }
        }, function(e, t, n) {
            var r = n(59);
            e.exports = Object("z").propertyIsEnumerable(0) ? Object : function(e) {
                return "String" == r(e) ? e.split("") : Object(e)
            }
        }, function(e, t, n) {
            var r = n(3),
                o = n(89),
                i = n(90);
            e.exports = function(e) {
                return function(t, n, a) {
                    var s,
                        l = r(t),
                        c = o(l.length),
                        u = i(a, c);
                    if (e && n != n) {
                        for (; c > u;)
                            if ((s = l[u++]) != s)
                                return !0
                    } else
                        for (; c > u; u++)
                            if ((e || u in l) && l[u] === n)
                                return e || u || 0;
                    return !e && -1
                }
            }
        }, function(e, t, n) {
            var r = n(34),
                o = Math.min;
            e.exports = function(e) {
                return e > 0 ? o(r(e), 9007199254740991) : 0
            }
        }, function(e, t, n) {
            var r = n(34),
                o = Math.max,
                i = Math.min;
            e.exports = function(e, t) {
                return (e = r(e)) < 0 ? o(e + t, 0) : i(e, t)
            }
        }, function(e, t, n) {
            var r = n(0).document;
            e.exports = r && r.documentElement
        }, function(e, t, n) {
            n(93);
            for (var r = n(0), o = n(9), i = n(38), a = n(10)("toStringTag"), s = "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","), l = 0; l < s.length; l++) {
                var c = s[l],
                    u = r[c],
                    d = u && u.prototype;
                d && !d[a] && o(d, a, c), i[c] = i.Array
            }
        }, function(e, t, n) {
            "use strict";
            var r = n(94),
                o = n(95),
                i = n(38),
                a = n(3);
            e.exports = n(53)(Array, "Array", function(e, t) {
                this._t = a(e), this._i = 0, this._k = t
            }, function() {
                var e = this._t,
                    t = this._k,
                    n = this._i++;
                return !e || n >= e.length ? (this._t = void 0, o(1)) : "keys" == t ? o(0, n) : "values" == t ? o(0, e[n]) : o(0, [n, e[n]])
            }, "values"), i.Arguments = i.Array, r("keys"), r("values"), r("entries")
        }, function(e, t) {
            e.exports = function() {}
        }, function(e, t) {
            e.exports = function(e, t) {
                return {
                    value: t,
                    done: !!e
                }
            }
        }, function(e, t, n) {
            e.exports = {
                default: n(97),
                __esModule: !0
            }
        }, function(e, t, n) {
            n(98), n(104), n(105), n(106), e.exports = n(8).Symbol
        }, function(e, t, n) {
            "use strict";
            var r = n(0),
                o = n(6),
                i = n(5),
                a = n(17),
                s = n(57),
                l = n(99).KEY,
                c = n(24),
                u = n(41),
                d = n(43),
                f = n(27),
                p = n(10),
                h = n(44),
                v = n(45),
                m = n(100),
                g = n(101),
                y = n(102),
                b = n(18),
                _ = n(3),
                w = n(37),
                E = n(25),
                x = n(39),
                T = n(103),
                S = n(52),
                C = n(4),
                O = n(26),
                k = S.f,
                M = C.f,
                A = T.f,
                N = r.Symbol,
                I = r.JSON,
                L = I && I.stringify,
                R = p("_hidden"),
                P = p("toPrimitive"),
                j = {}.propertyIsEnumerable,
                D = u("symbol-registry"),
                X = u("symbols"),
                B = u("op-symbols"),
                U = Object.prototype,
                V = "function" == typeof N,
                H = r.QObject,
                z = !H || !H.prototype || !H.prototype.findChild,
                F = i && c(function() {
                    return 7 != x(M({}, "a", {
                        get: function() {
                            return M(this, "a", {
                                value: 7
                            }).a
                        }
                    })).a
                }) ? function(e, t, n) {
                    var r = k(U, t);
                    r && delete U[t], M(e, t, n), r && e !== U && M(U, t, r)
                } : M,
                G = function(e) {
                    var t = X[e] = x(N.prototype);
                    return t._k = e, t
                },
                J = V && "symbol" == typeof N.iterator ? function(e) {
                    return "symbol" == typeof e
                } : function(e) {
                    return e instanceof N
                },
                q = function(e, t, n) {
                    return e === U && q(B, t, n), b(e), t = w(t, !0), b(n), o(X, t) ? (n.enumerable ? (o(e, R) && e[R][t] && (e[R][t] = !1), n = x(n, {
                        enumerable: E(0, !1)
                    })) : (o(e, R) || M(e, R, E(1, {})), e[R][t] = !0), F(e, t, n)) : M(e, t, n)
                },
                Y = function(e, t) {
                    b(e);
                    for (var n, r = g(t = _(t)), o = 0, i = r.length; i > o;)
                        q(e, n = r[o++], t[n]);
                    return e
                },
                W = function(e) {
                    var t = j.call(this, e = w(e, !0));
                    return !(this === U && o(X, e) && !o(B, e)) && (!(t || !o(this, e) || !o(X, e) || o(this, R) && this[R][e]) || t)
                },
                K = function(e, t) {
                    if (e = _(e), t = w(t, !0), e !== U || !o(X, t) || o(B, t)) {
                        var n = k(e, t);
                        return !n || !o(X, t) || o(e, R) && e[R][t] || (n.enumerable = !0), n
                    }
                },
                Q = function(e) {
                    for (var t, n = A(_(e)), r = [], i = 0; n.length > i;)
                        o(X, t = n[i++]) || t == R || t == l || r.push(t);
                    return r
                },
                $ = function(e) {
                    for (var t, n = e === U, r = A(n ? B : _(e)), i = [], a = 0; r.length > a;)
                        !o(X, t = r[a++]) || n && !o(U, t) || i.push(X[t]);
                    return i
                };
            V || (N = function() {
                if (this instanceof N)
                    throw TypeError("Symbol is not a constructor!");
                var e = f(arguments.length > 0 ? arguments[0] : void 0),
                    t = function(n) {
                        this === U && t.call(B, n), o(this, R) && o(this[R], e) && (this[R][e] = !1), F(this, e, E(1, n))
                    };
                return i && z && F(U, e, {
                    configurable: !0,
                    set: t
                }), G(e)
            }, s(N.prototype, "toString", function() {
                return this._k
            }), S.f = K, C.f = q, n(61).f = T.f = Q, n(46).f = W, n(60).f = $, i && !n(36) && s(U, "propertyIsEnumerable", W, !0), h.f = function(e) {
                return G(p(e))
            }), a(a.G + a.W + a.F * !V, {
                Symbol: N
            });
            for (var Z = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), ee = 0; Z.length > ee;)
                p(Z[ee++]);
            for (var te = O(p.store), ne = 0; te.length > ne;)
                v(te[ne++]);
            a(a.S + a.F * !V, "Symbol", {
                for: function(e) {
                    return o(D, e += "") ? D[e] : D[e] = N(e)
                },
                keyFor: function(e) {
                    if (J(e))
                        return m(D, e);
                    throw TypeError(e + " is not a symbol!")
                },
                useSetter: function() {
                    z = !0
                },
                useSimple: function() {
                    z = !1
                }
            }), a(a.S + a.F * !V, "Object", {
                create: function(e, t) {
                    return void 0 === t ? x(e) : Y(x(e), t)
                },
                defineProperty: q,
                defineProperties: Y,
                getOwnPropertyDescriptor: K,
                getOwnPropertyNames: Q,
                getOwnPropertySymbols: $
            }), I && a(a.S + a.F * (!V || c(function() {
                var e = N();
                return "[null]" != L([e]) || "{}" != L({
                        a: e
                    }) || "{}" != L(Object(e))
            })), "JSON", {
                stringify: function(e) {
                    if (void 0 !== e && !J(e)) {
                        for (var t, n, r = [e], o = 1; arguments.length > o;)
                            r.push(arguments[o++]);
                        return "function" == typeof (t = r[1]) && (n = t), !n && y(t) || (t = function(e, t) {
                            if (n && (t = n.call(this, e, t)), !J(t))
                                return t
                        }), r[1] = t, L.apply(I, r)
                    }
                }
            }), N.prototype[P] || n(9)(N.prototype, P, N.prototype.valueOf), d(N, "Symbol"), d(Math, "Math", !0), d(r.JSON, "JSON", !0)
        }, function(e, t, n) {
            var r = n(27)("meta"),
                o = n(19),
                i = n(6),
                a = n(4).f,
                s = 0,
                l = Object.isExtensible || function() {
                    return !0
                },
                c = !n(24)(function() {
                    return l(Object.preventExtensions({}))
                }),
                u = function(e) {
                    a(e, r, {
                        value: {
                            i: "O" + ++s,
                            w: {}
                        }
                    })
                },
                d = e.exports = {
                    KEY: r,
                    NEED: !1,
                    fastKey: function(e, t) {
                        if (!o(e))
                            return "symbol" == typeof e ? e : ("string" == typeof e ? "S" : "P") + e;
                        if (!i(e, r)) {
                            if (!l(e))
                                return "F";
                            if (!t)
                                return "E";
                            u(e)
                        }
                        return e[r].i
                    },
                    getWeak: function(e, t) {
                        if (!i(e, r)) {
                            if (!l(e))
                                return !0;
                            if (!t)
                                return !1;
                            u(e)
                        }
                        return e[r].w
                    },
                    onFreeze: function(e) {
                        return c && d.NEED && l(e) && !i(e, r) && u(e), e
                    }
                }
        }, function(e, t, n) {
            var r = n(26),
                o = n(3);
            e.exports = function(e, t) {
                for (var n, i = o(e), a = r(i), s = a.length, l = 0; s > l;)
                    if (i[n = a[l++]] === t)
                        return n
            }
        }, function(e, t, n) {
            var r = n(26),
                o = n(60),
                i = n(46);
            e.exports = function(e) {
                var t = r(e),
                    n = o.f;
                if (n)
                    for (var a, s = n(e), l = i.f, c = 0; s.length > c;)
                        l.call(e, a = s[c++]) && t.push(a);
                return t
            }
        }, function(e, t, n) {
            var r = n(59);
            e.exports = Array.isArray || function(e) {
                return "Array" == r(e)
            }
        }, function(e, t, n) {
            var r = n(3),
                o = n(61).f,
                i = {}.toString,
                a = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [],
                s = function(e) {
                    try {
                        return o(e)
                    } catch (e) {
                        return a.slice()
                    }
                };
            e.exports.f = function(e) {
                return a && "[object Window]" == i.call(e) ? s(e) : o(r(e))
            }
        }, function(e, t) {}, function(e, t, n) {
            n(45)("asyncIterator")
        }, function(e, t, n) {
            n(45)("observable")
        }, function(e, t, n) {
            e.exports = {
                default: n(108),
                __esModule: !0
            }
        }, function(e, t, n) {
            n(109);
            var r = n(8).Object;
            e.exports = function(e, t, n) {
                return r.defineProperty(e, t, n)
            }
        }, function(e, t, n) {
            var r = n(17);
            r(r.S + r.F * !n(5), "Object", {
                defineProperty: n(4).f
            })
        }, function(e, t, n) {
            e.exports = {
                default: n(111),
                __esModule: !0
            }
        }, function(e, t, n) {
            n(112), e.exports = n(8).Object.setPrototypeOf
        }, function(e, t, n) {
            var r = n(17);
            r(r.S, "Object", {
                setPrototypeOf: n(113).set
            })
        }, function(e, t, n) {
            var r = n(19),
                o = n(18),
                i = function(e, t) {
                    if (o(e), !r(t) && null !== t)
                        throw TypeError(t + ": can't set as prototype!")
                };
            e.exports = {
                set: Object.setPrototypeOf || ("__proto__" in {} ? function(e, t, r) {
                    try {
                        (r = n(54)(Function.call, n(52).f(Object.prototype, "__proto__").set, 2))(e, []), t = !(e instanceof Array)
                    } catch (e) {
                        t = !0
                    }
                    return function(e, n) {
                        return i(e, n), t ? e.__proto__ = n : r(e, n), e
                    }
                }({}, !1) : void 0),
                check: i
            }
        }, function(e, t, n) {
            e.exports = {
                default: n(115),
                __esModule: !0
            }
        }, function(e, t, n) {
            n(116);
            var r = n(8).Object;
            e.exports = function(e, t) {
                return r.create(e, t)
            }
        }, function(e, t, n) {
            var r = n(17);
            r(r.S, "Object", {
                create: n(39)
            })
        }, function(e, t) {
            e.exports = {
                name: "@ali/lcps-videox",
                description: "支持多种视频格式、适用于点播和直播场景的统一播放器",
                version: "0.1.18",
                repository: {
                    type: "git",
                    url: "git@gitlab.alibaba-inc.com:mtb/lcps-videox.git"
                },
                author: [{
                    name: "yingyi.zj",
                    email: "yingyi.zj@alibaba-inc.com"
                }],
                license: "MIT",
                keywords: ["lib", "mtb", "javascript", "es6", "es2015"],
                publishConfig: {
                    registry: "http://registry.npm.alibaba-inc.com"
                },
                scripts: {
                    clear: "rm -rf dist coverage release",
                    build: "webpack --config ./webpack/webpack.pub.js",
                    bundle: "webpack --config ./webpack/webpack.dev.js",
                    dev: "webpack --config ./webpack/webpack.dev.js --watch",
                    lint: "eslint --fix --config .eslintrc src/**/*.js test/**/*.js",
                    test: "mocha --compilers js:babel-core/register test/**/*.js",
                    cover: "babel-node node_modules/isparta/bin/isparta cover --report text node_modules/mocha/bin/_mocha test/**/*.js --reporter dot",
                    ci: "tnpm run lint && tnpm run test",
                    release: "tnpm run build && sh ./build/release.sh && sh ./build/pubcdn.sh",
                    "site:update": "sh ./build/site.sh update",
                    "site:build": "sh ./build/site.sh build",
                    "site:watch": 'watch -p "doc/**/*.md" -p "README.md" -c "tnpm run site:build"',
                    "site:serve": "sh ./build/site.sh serve",
                    "site:publish": "sh ./build/site.sh publish"
                },
                dependencies: {
                    "@ali/lib-httpurl": "~2.0.0",
                    "@ali/lib-video-tool": "^0.1.1",
                    "@ali/lib-windvane": "^2.1.8",
                    "amfe-env": "^2.0.0",
                    "es6-promise": "^4.0.5",
                    "lodash-compat": "^3.10.2",
                    "url-toolkit": "^2.0.1",
                    webworkify: "^1.4.0"
                },
                devDependencies: {
                    autoprefixer: "^7.1.1",
                    babel: "^6.23.0",
                    "babel-cli": "~6.4.5",
                    "babel-core": "^6.25.0",
                    "babel-loader": "^7.1.1",
                    "babel-plugin-syntax-async-functions": "^6.13.0",
                    "babel-plugin-syntax-dynamic-import": "^6.18.0",
                    "babel-plugin-transform-async-to-generator": "^6.24.1",
                    "babel-plugin-transform-regenerator": "^6.24.1",
                    "babel-plugin-transform-runtime": "^6.23.0",
                    "babel-preset-es2015": "~6.3.13",
                    "babel-runtime": "^6.23.0",
                    chai: "~3.4.1",
                    "css-loader": "^0.28.4",
                    cssnano: "^3.10.0",
                    eslint: "~2.1.0",
                    "gitbook-cli": "~1.0.1",
                    isparta: "~4.0.0",
                    mocha: "~2.4.5",
                    "postcss-loader": "^2.0.6",
                    "postcss-px2rem": "^0.3.0",
                    precss: "^2.0.0",
                    serve: "~1.4.0",
                    "style-loader": "^0.18.2",
                    "watch-cli": "~0.2.1",
                    webpack: "^3.0.0",
                    "webworkify-webpack": "^2.1.0"
                },
                main: "./src/videox.js"
            }
        }, function(e, t, n) {
            "use strict";
            function r(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var o = r(n(16)),
                i = r(n(1)),
                a = r(n(2)),
                s = r(n(14)),
                l = r(n(15));
            n(119);
            var c = r(n(28)),
                u = r(n(20)),
                d = r(n(11)),
                f = r(n(120)),
                p = n(12),
                h = function(e) {
                    if (e && e.__esModule)
                        return e;
                    var t = {};
                    if (null != e)
                        for (var n in e)
                            Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                    return t.default = e, t
                }((r(n(63)), n(32))),
                v = r(n(21)),
                m = new (n(148).VideoTool),
                g = function(e) {
                    function t(e) {
                        (0, i.default)(this, t);
                        var n = (0, s.default)(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                        n.videox = e;
                        var r = n.opts = e.config;
                        return n.hlsPlayer = null, n.flvPlayer = null, n.options = {
                            controls: !1,
                            autoplay: !1,
                            flvOptions: {}
                        }, n.firstPlay = !0, n.flvHadPlayed = !1, Object.assign(n.options, r), n.rootElement = e.rootElement, n._addEventListener(), n
                    }
                    return (0, l.default)(t, e), (0, a.default)(t, [{
                        key: "_addEventListener",
                        value: function() {
                            this.videox.on(u.default.INIT, this.onInit.bind(this)), this.videox.on(u.default.SOURCE_ATTACHED, this.onSourceAttached.bind(this)), this.videox.on(u.default.TRIGGER_PAUSE, this.onTriggerPause.bind(this)), this.videox.on(u.default.TRIGGER_PLAY, this.onTriggerPlay.bind(this)), this.videox.on(d.default.VIDEO_PLAY, this.onVideoPlay.bind(this)), this.videox.on(d.default.VIDEO_WAITING, this.onVideoWaiting.bind(this)), this.videox.on(d.default.VIDEO_PLAYING, this.onVideoPlaying.bind(this)), this.videox.on(d.default.VIDEO_ERROR, this.onVideoError.bind(this)), this.videox.on(d.default.VIDEO_PAUSE, this.onVideoPause.bind(this))
                        }
                    }, {
                        key: "onInit",
                        value: function() {
                            var e = this.opts;
                            "object" === (0, o.default)(e.container) ? this.container = e.container : "string" == typeof e.container && (this.container = (0, p.$)(e.container)), e.from || console.error("参数from为必填项，用作业务埋点统计，请联系@霜草进行分配"), this.video = (0, p.createEl)("video", {
                                className: "lib-video",
                                loop: e.loop || !1,
                                volume: void 0 == e.volume ? 1 : e.volume,
                                muted: e.muted || !1
                            }, {
                                "webkit-playsinline": "webkit-playsinline",
                                playsinline: "playsinline",
                                poster: e.poster || ""
                            }), this.logParams = {
                                videoId: "",
                                type: e.live ? "live" : "video"
                            }, this._render(), this._appendSource(), this._bindEvent(!1), this._bindDomEvent(), this.videox.videoDom = this.getVideoEl(), this.logTrack = this.videox.logTrack
                        }
                    }, {
                        key: "onTriggerPause",
                        value: function() {
                            this.pause()
                        }
                    }, {
                        key: "onTriggerPlay",
                        value: function() {
                            this.play()
                        }
                    }, {
                        key: "onLoading",
                        value: function() {
                            (0, p.addElClass)(this.startPlayEl.parentNode, "loading")
                        }
                    }, {
                        key: "onVideoWaiting",
                        value: function() {
                            (0, p.addElClass)(this.startPlayEl.parentNode, "loading")
                        }
                    }, {
                        key: "onVideoPlay",
                        value: function(e) {
                            (0, p.addElClass)(this.startPlayEl.parentNode, "loading"), (0, p.removeElClass)(this.startPlayEl.parentNode, "error")
                        }
                    }, {
                        key: "onVideoPlaying",
                        value: function(e) {
                            (0, p.removeElClass)(this.startPlayEl.parentNode, "loading"), (0, p.addElClass)(this.rootElement, "vjs-has-started")
                        }
                    }, {
                        key: "onVideoPause",
                        value: function(e) {}
                    }, {
                        key: "onVideoError",
                        value: function(e) {
                            (0, p.removeElClass)(this.rootElement, "vjs-has-started"), (0, p.removeElClass)(this.rootElement, "vjs-has-paused"), (0, p.removeElClass)(this.startPlayEl.parentNode, "loading"), this.videox.videoDom.poster = "", (0, p.addElClass)(this.startPlayEl.parentNode, "error")
                        }
                    }, {
                        key: "onSourceAttached",
                        value: function(e) {
                            this.tagType = e.tagType, e.reload ? this.play() : this.options.autoplay && ("NATIVE" == this.tagType ? this.video.autoplay = !0 : this.play())
                        }
                    }, {
                        key: "_appendSource",
                        value: function(e) {
                            var t = this,
                                r = e || this.options.url,
                                o = !!e,
                                i = f.default.checkFileType(r);
                            if (this.video.innerHTML = "", m.canPlay(r)) {
                                this.video.removeAttribute("src");
                                var a = (0, p.createEl)("source", {
                                    src: r
                                });
                                this.video.appendChild(a), this.videox.emit(u.default.SOURCE_ATTACHED, {
                                    tagType: "NATIVE",
                                    reload: o
                                })
                            } else if ("flv" === i)
                                n.e(1).then(n.bind(null, 158)).then(function(e) {
                                    if (e.isSupported()) {
                                        var n = {},
                                            r = e.Events,
                                            i = r.ERROR,
                                            a = r.LOADING_COMPLETE,
                                            s = r.RECOVERED_EARLY_EOF,
                                            l = r.MEDIA_INFO,
                                            c = r.STATISTICS_INFO;
                                        Object.assign(n, t.options, {
                                            type: "flv"
                                        });
                                        var f = t.flvPlayer = e.createPlayer(n, t.options.flvOptions);
                                        f.attachMediaElement(t.video), f.load(), t.videox.emit(u.default.SOURCE_ATTACHED, {
                                            tagType: "FLV",
                                            reload: o
                                        }), f.on(i, function(e) {
                                            t.videox.emit(d.default.VIDEO_ERROR, e)
                                        }), f.on(a, function(e) {
                                            t.videox.emit(d.default.VIDEO_ERROR, e)
                                        }), f.on(s, function(e) {
                                            t.videox.emit(d.default.VIDEO_ERROR, e)
                                        }), f.on(l, function(e) {
                                            return t.videox.emit(l, e)
                                        }), f.on(c, function(e) {
                                            return t.videox.emit(c, e)
                                        })
                                    } else
                                        t.videox.emit(d.default.VIDEO_ERROR, {
                                            isSupport: !1
                                        }), console.error("FLV is not support!")
                                });
                            else if ("m3u8" === i)
                                n.e(0).then(n.bind(null, 159)).then(function(e) {
                                    e.isSupported() ? (t.hlsPlayer = new e(t.options.codecConfig), t.hlsPlayer.attachMedia(t.video), t.hlsPlayer.loadSource(r), t.videoPlayerType = "hls", t.videox.emit(u.default.SOURCE_ATTACHED, {
                                        tagType: "HLS",
                                        reload: o
                                    })) : (t.videox.emit(d.default.VIDEO_ERROR, {
                                        isSupport: !1
                                    }), console.error("HLS is not support!"))
                                });
                            else {
                                this.video.removeAttribute("src");
                                var s = (0, p.createEl)("source", {
                                    src: r
                                });
                                this.video.appendChild(s), this.videox.emit(u.default.SOURCE_ATTACHED, {
                                    tagType: "NATIVE",
                                    reload: o
                                })
                            }
                        }
                    }, {
                        key: "play",
                        value: function() {
                            var e = this.video.play();
                            void 0 !== e && e.then(function() {}).catch(function(e) {
                                console.log(e)
                            })
                        }
                    }, {
                        key: "pause",
                        value: function() {
                            this.video.pause()
                        }
                    }, {
                        key: "stop",
                        value: function() {
                            this.pause(), this.video.currentTime = 0
                        }
                    }, {
                        key: "flvPlay",
                        value: function() {
                            this.flvPlayer.pause(), this.flvPlayer.unload(), this.flvPlayer.load(), this.flvPlayer.play()
                        }
                    }, {
                        key: "setCurrentTime",
                        value: function(e) {
                            this.video.currentTime = e
                        }
                    }, {
                        key: "getVideoEl",
                        value: function() {
                            return this.video
                        }
                    }, {
                        key: "getStatus",
                        value: function() {
                            return this.video.networkState
                        }
                    }, {
                        key: "enterFullScreen",
                        value: function() {
                            this.controlBar && this.controlBar.enterFullScreen(), this.logTrack.fullScreenLog()
                        }
                    }, {
                        key: "reload",
                        value: function(e) {
                            if (this.video) {
                                var t = e || this.options.url;
                                t && (this.pause(), this._cleanPlayer(), this.options.url = t, this._appendSource(this.options.url, this.options.codecConfig))
                            } else
                                console.error("Unable to find a video element")
                        }
                    }, {
                        key: "_cleanPlayer",
                        value: function() {
                            this.flvPlayer && this.flvPlayer.destroy(), this.flvPlayer = null, this.hlsPlayer && this.hlsPlayer.destroy(), this.hlsPlayer = null, this.video.pause(), this.video.src = "", this.video.load(), this.video.currentTime = 0, this.video.innerHTML = ""
                        }
                    }, {
                        key: "_render",
                        value: function() {
                            var e = (0, p.createEl)("div", {
                                className: "vjs-center-container",
                                innerHTML: '\n        <button class="vjs-center-load vjs-button" role="button" type="button">\n          <span class="vjs-control-text">Load</span>\n        </button>\n        <button class="vjs-center-start vjs-button" role="button" type="button">\n          <span class="vjs-control-text">start</span>\n        </button>\n      <div class="error-content">\n          <p>网络错误，请重试</p>\n          <button class="vjs-center-retry vjs-button" role="button" type="button">\n            <span class="vjs-control-text">retry</span>\n          </button>\n        </div>\n      '
                            });
                            (0, p.createEl)("div", {
                                className: "vjs-center-container error",
                                innerHTML: "\n\n        \n      "
                            }), (0, p.appendContent)(this.rootElement, [this.video, e]), this.startPlayEl = (0, p.$)(".vjs-center-start", this.rootElement), this.retryEl = (0, p.$)(".vjs-center-retry", this.rootElement), this.container.appendChild(this.rootElement)
                        }
                    }, {
                        key: "_bindEvent",
                        value: function(e) {
                            var t = this;
                            this.rootElement, !e && this.startPlayEl.addEventListener("click", function(e) {
                                return t._triggerStartPlayerClick(e)
                            }), !e && this.retryEl.addEventListener("click", function(e) {
                                return t.reload()
                            })
                        }
                    }, {
                        key: "_bindDomEvent",
                        value: function() {
                            var e = this;
                            this.video.addEventListener("error", function(t) {
                                return e._errorEmit(t)
                            }), this.video.addEventListener("ended", function(t) {
                                return e._endedEmit(t)
                            }), this.video.addEventListener("progress", function(t) {
                                return e._progressEmit(t)
                            }), this.video.addEventListener("play", function(t) {
                                return e._playEmit(t)
                            }), this.video.addEventListener("loadstart", function(t) {
                                return e._loadstartEmit(t)
                            }), this.video.addEventListener("playing", function(t) {
                                return e._playingEmit(t)
                            }), this.video.addEventListener("suspend", function(t) {
                                return e._suspendEmit(t)
                            }), this.video.addEventListener("abort", function(t) {
                                return e._abortEmit(t)
                            }), this.video.addEventListener("stalled", function(t) {
                                return e._stalledEmit(t)
                            }), this.video.addEventListener("waiting", function(t) {
                                return e._waitingEmit(t)
                            }), this.video.addEventListener("canplay", function(t) {
                                return e._canplayEmit(t)
                            }), this.video.addEventListener("canplaythrough", function(t) {
                                return e._canplaythroughEmit(t)
                            }), this.video.addEventListener("timeupdate", function(t) {
                                return e._timeupdateEmit(t)
                            }), this.video.addEventListener("seeking", function(t) {
                                return e._seekingEmit(t)
                            }), this.video.addEventListener("seeked", function(t) {
                                return e._seekedEmit(t)
                            }), this.video.addEventListener("pause", function(t) {
                                return e._pauseEmit(t)
                            }), this.video.addEventListener("volumechange", function(t) {
                                return e._volumechangeEmit(t)
                            })
                        }
                    }, {
                        key: "_error",
                        value: function() {
                            (0, p.addElClass)(this.rootElement, "vjs-error"), (0, p.removeElClass)(this.startPlayEl.parentNode, "loading"), this.videoLoading = !1
                        }
                    }, {
                        key: "_triggerStartPlayerClick",
                        value: function(e) {
                            e && e.preventDefault(), (0, v.default)("Player::triggerStartPlayerClick_()"), this.play()
                        }
                    }, {
                        key: "_checkUC",
                        value: function() {
                            var e = navigator.userAgent.match(/UCBrowser/);
                            return !(!h.aliapp || !e)
                        }
                    }, {
                        key: "_pauseEmit",
                        value: function(e) {
                            (0, v.default)("HTML5:emit:::video:pause::" + (new Date).getTime()), this.videox.emit(d.default.VIDEO_PAUSE, e), this.logTrack.pauseLog()
                        }
                    }, {
                        key: "_emitFlvEvent",
                        value: function(e, t) {
                            (0, v.default)("HTML5:emit:::flv:" + e + "::" + (new Date).getTime()), this.emit(e, t)
                        }
                    }, {
                        key: "_seekingEmit",
                        value: function(e) {
                            (0, v.default)("HTML5:emit:::video:seeking::" + (new Date).getTime()), this.emit && this.emit(d.default.VIDEO_SEEKING, e)
                        }
                    }, {
                        key: "_seekedEmit",
                        value: function(e) {
                            (0, v.default)("HTML5:emit:::video:seeked::" + (new Date).getTime()), this.emit && this.emit(d.default.VIDEO_SEEKED, e)
                        }
                    }, {
                        key: "_stalledEmit",
                        value: function(e) {
                            (0, v.default)("HTML5:emit:::video:stalled::" + (new Date).getTime()), this.emit && this.emit(d.default.VIDEO_STALLED, e)
                        }
                    }, {
                        key: "_waitingEmit",
                        value: function(e) {
                            (0, v.default)("HTML5:emit:::video:waiting::" + (new Date).getTime()), this.videox.emit(u.default.LOADING), this.videox.emit(d.default.VIDEO_WAITING, e), this._setTimeoutError()
                        }
                    }, {
                        key: "_abortEmit",
                        value: function(e) {
                            (0, v.default)("HTML5:emit:::video:abort::" + (new Date).getTime()), this.emit && this.emit(d.default.VIDEO_ABORT, e)
                        }
                    }, {
                        key: "_suspendEmit",
                        value: function(e) {
                            (0, v.default)("HTML5:emit:::video:suspend::" + (new Date).getTime()), this.emit && this.emit(d.default.VIDEO_SUSPEND, e)
                        }
                    }, {
                        key: "_canplayEmit",
                        value: function(e) {
                            (0, v.default)("HTML5:emit:::video:canplay::" + (new Date).getTime()), this.emit && this.emit(d.default.VIDEO_CANPLAY, e)
                        }
                    }, {
                        key: "_canplaythroughEmit",
                        value: function(e) {
                            (0, v.default)("HTML5:emit:::video:canplaythrough::" + (new Date).getTime()), this.emit && this.emit(d.default.VIDEO_CANPLAYTHROUGH, e)
                        }
                    }, {
                        key: "_errorEmit",
                        value: function(e) {
                            (0, v.default)("HTML5:emit:::video:error::" + (new Date).getTime()), this.videox.emit(d.default.VIDEO_ERROR, e), this.logTrack.errorLog(e)
                        }
                    }, {
                        key: "_progressEmit",
                        value: function() {
                            (0, v.default)("HTML5:emit:::video:progress::" + (new Date).getTime()), this.controlBar && this.controlBar.emit(d.default.VIDEO_PROGRESS)
                        }
                    }, {
                        key: "_endedEmit",
                        value: function(e) {
                            (0, v.default)("HTML5:emit:::video:ended::"), this.videox.emit(d.default.VIDEO_ENDED, e)
                        }
                    }, {
                        key: "_timeupdateEmit",
                        value: function(e) {
                            (0, v.default)("HTML5:emit:::video:timeupdate::" + this.video.currentTime);
                            var t = e.currentTarget.currentTime;
                            navigator.userAgent.match(/UCBrowser/), this.playEmited || (t > 0 || this.videoLoading && this.options.live && h.os.isAndroid) && (this.waitTimer_ && (clearTimeout(this.waitTimer_), this.waitTimer_ = 0), this.videox.emit(d.default.VIDEO_TIMEUPDATE, e))
                        }
                    }, {
                        key: "_volumechangeEmit",
                        value: function(e) {
                            this.videox.emit(d.default.VIDEO_VOLUMECHANGE, e), (0, v.default)("HTML5:emit:::video:volumechange::" + this.video.volume + "::muted::" + this.video.muted)
                        }
                    }, {
                        key: "_playEmit",
                        value: function(e) {
                            this.videox.emit(d.default.VIDEO_PLAY, e), this.logTrack.playLog()
                        }
                    }, {
                        key: "_loadstartEmit",
                        value: function(e) {
                            (0, v.default)("HTML5:emit:::video:loadstart::" + (new Date).getTime()), this.videox.emit(d.default.VIDEO_LOADSTART)
                        }
                    }, {
                        key: "_playingEmit",
                        value: function() {
                            (0, v.default)("HTML5:emit:::video:playing::" + (new Date).getTime()), this.videox.emit(d.default.VIDEO_PLAYING)
                        }
                    }, {
                        key: "_setTimeoutError",
                        value: function() {
                            var e = this;
                            this.waitTimer_ || (this.waitTimer_ = setTimeout(function() {
                                e.video.networkState === e.video.NETWORK_NO_SOURCE ? e.videox.emit(d.default.VIDEO_ERROR, {
                                    errorCode: "NETWORK_NO_SOURCE"
                                }) : e.videox.emit(d.default.VIDEO_ERROR, {
                                    errorCode: "NETWORK_TIMEOUT"
                                }), e.waitTimer_ = null
                            }, this.options.timeout || 1e4))
                        }
                    }]), t
                }(c.default);
            t.default = g
        }, function(e, t, n) {
            "use strict";
            "function" != typeof Object.assign && (Object.assign = function(e, t) {
                if (null == e)
                    throw new TypeError("Cannot convert undefined or null to object");
                for (var n = Object(e), r = 1; r < arguments.length; r++) {
                    var o = arguments[r];
                    if (null != o)
                        for (var i in o)
                            Object.prototype.hasOwnProperty.call(o, i) && (n[i] = o[i])
                }
                return n
            })
        }, function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = {
                checkFileType: function(e) {
                    return e.split(".").pop().split(/\#|\?/)[0].toLowerCase()
                },
                isSafari: function() {
                    return -1 != navigator.userAgent.indexOf("Safari") && -1 == navigator.userAgent.indexOf("Chrome")
                },
                hlsSupport: function() {
                    return document.createElement("video").canPlayType("application/x-mpegURL")
                }
            }
        }, function(e, t, n) {
            var r = n(122),
                o = n(136)(r);
            e.exports = o
        }, function(e, t, n) {
            function r(e, t, n, f, p) {
                if (!l(e))
                    return e;
                var h = s(t) && (a(t) || u(t)),
                    v = h ? void 0 : d(t);
                return o(v || t, function(o, a) {
                    if (v && (a = o, o = t[a]), c(o))
                        f || (f = []), p || (p = []), i(e, t, a, r, n, f, p);
                    else {
                        var s = e[a],
                            l = n ? n(s, o, a, e, t) : void 0,
                            u = void 0 === l;
                        u && (l = o), void 0 === l && (!h || a in e) || !u && (l == l ? l === s : s != s) || (e[a] = l)
                    }
                }), e
            }
            var o = n(64),
                i = n(123),
                a = n(31),
                s = n(22),
                l = n(13),
                c = n(7),
                u = n(69),
                d = n(134);
            e.exports = r
        }, function(e, t, n) {
            var r = n(124),
                o = n(29),
                i = n(31),
                a = n(22),
                s = n(128),
                l = n(69),
                c = n(132);
            e.exports = function(e, t, n, u, d, f, p) {
                for (var h = f.length, v = t[n]; h--;)
                    if (f[h] == v)
                        return void (e[n] = p[h]);
                var m = e[n],
                    g = d ? d(m, v, n, e, t) : void 0,
                    y = void 0 === g;
                y && (g = v, a(v) && (i(v) || l(v)) ? g = i(m) ? m : a(m) ? r(m) : [] : s(v) || o(v) ? g = o(m) ? c(m) : s(m) ? m : {} : y = !1), f.push(v), p.push(g), y ? e[n] = u(g, v, d, f, p) : (g == g ? g !== m : m == m) && (e[n] = g)
            }
        }, function(e, t) {
            e.exports = function(e, t) {
                var n = -1,
                    r = e.length;
                for (t || (t = Array(r)); ++n < r;)
                    t[n] = e[n];
                return t
            }
        }, function(e, t, n) {
            var r = n(126)("length");
            e.exports = r
        }, function(e, t, n) {
            var r = n(65);
            e.exports = function(e) {
                return function(t) {
                    return null == t ? void 0 : r(t)[e]
                }
            }
        }, function(e, t, n) {
            var r = n(67),
                o = n(68),
                i = n(7),
                a = /^\[object .+?Constructor\]$/,
                s = Object.prototype,
                l = Function.prototype.toString,
                c = s.hasOwnProperty,
                u = RegExp("^" + l.call(c).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
            e.exports = function(e) {
                return null != e && (r(e) ? u.test(l.call(e)) : i(e) && (o(e) ? u : a).test(e))
            }
        }, function(e, t, n) {
            var r = n(129),
                o = n(29),
                i = n(68),
                a = n(7),
                s = n(30),
                l = "[object Object]",
                c = Object.prototype,
                u = c.hasOwnProperty,
                d = c.toString;
            e.exports = function(e) {
                var t;
                if (!a(e) || d.call(e) != l || i(e) || o(e) || !u.call(e, "constructor") && "function" == typeof (t = e.constructor) && !(t instanceof t))
                    return !1;
                var n;
                return s.ownLast ? (r(e, function(e, t, r) {
                    return n = u.call(r, t), !1
                }), !1 !== n) : (r(e, function(e, t) {
                    n = t
                }), void 0 === n || u.call(e, n))
            }
        }, function(e, t, n) {
            var r = n(130),
                o = n(49);
            e.exports = function(e, t) {
                return r(e, t, o)
            }
        }, function(e, t, n) {
            var r = n(131)();
            e.exports = r
        }, function(e, t, n) {
            var r = n(65);
            e.exports = function(e) {
                return function(t, n, o) {
                    for (var i = r(t), a = o(t), s = a.length, l = e ? s : -1; e ? l-- : ++l < s;) {
                        var c = a[l];
                        if (!1 === n(i[c], c, i))
                            break
                    }
                    return t
                }
            }
        }, function(e, t, n) {
            var r = n(133),
                o = n(49);
            e.exports = function(e) {
                return r(e, o(e))
            }
        }, function(e, t) {
            e.exports = function(e, t, n) {
                n || (n = {});
                for (var r = -1, o = t.length; ++r < o;) {
                    var i = t[r];
                    n[i] = e[i]
                }
                return n
            }
        }, function(e, t, n) {
            var r = n(66),
                o = n(22),
                i = n(13),
                a = n(135),
                s = n(30),
                l = r(Object, "keys"),
                c = l ? function(e) {
                    var t = null == e ? void 0 : e.constructor;
                    return "function" == typeof t && t.prototype === e || ("function" == typeof e ? s.enumPrototypes : o(e)) ? a(e) : i(e) ? l(e) : []
                } : a;
            e.exports = c
        }, function(e, t, n) {
            var r = n(29),
                o = n(31),
                i = n(50),
                a = n(23),
                s = n(48),
                l = n(49),
                c = Object.prototype.hasOwnProperty;
            e.exports = function(e) {
                for (var t = l(e), n = t.length, u = n && e.length, d = !!u && a(u) && (o(e) || r(e) || s(e)), f = -1, p = []; ++f < n;) {
                    var h = t[f];
                    (d && i(h, u) || c.call(e, h)) && p.push(h)
                }
                return p
            }
        }, function(e, t, n) {
            var r = n(137),
                o = n(139),
                i = n(140);
            e.exports = function(e) {
                return i(function(t, n) {
                    var i = -1,
                        a = null == t ? 0 : n.length,
                        s = a > 2 ? n[a - 2] : void 0,
                        l = a > 2 ? n[2] : void 0,
                        c = a > 1 ? n[a - 1] : void 0;
                    for ("function" == typeof s ? (s = r(s, c, 5), a -= 2) : (s = "function" == typeof c ? c : void 0, a -= s ? 1 : 0), l && o(n[0], n[1], l) && (s = a < 3 ? void 0 : s, a = 1); ++i < a;) {
                        var u = n[i];
                        u && e(t, u, s)
                    }
                    return t
                })
            }
        }, function(e, t, n) {
            var r = n(138);
            e.exports = function(e, t, n) {
                if ("function" != typeof e)
                    return r;
                if (void 0 === t)
                    return e;
                switch (n) {
                case 1:
                    return function(n) {
                        return e.call(t, n)
                    };
                case 3:
                    return function(n, r, o) {
                        return e.call(t, n, r, o)
                    };
                case 4:
                    return function(n, r, o, i) {
                        return e.call(t, n, r, o, i)
                    };
                case 5:
                    return function(n, r, o, i, a) {
                        return e.call(t, n, r, o, i, a)
                    }
                }
                return function() {
                    return e.apply(t, arguments)
                }
            }
        }, function(e, t) {
            e.exports = function(e) {
                return e
            }
        }, function(e, t, n) {
            var r = n(22),
                o = n(50),
                i = n(13);
            e.exports = function(e, t, n) {
                if (!i(n))
                    return !1;
                var a = typeof t;
                if ("number" == a ? r(n) && o(t, n.length) : "string" == a && t in n) {
                    var s = n[t];
                    return e == e ? e === s : s != s
                }
                return !1
            }
        }, function(e, t) {
            var n = "Expected a function",
                r = Math.max;
            e.exports = function(e, t) {
                if ("function" != typeof e)
                    throw new TypeError(n);
                return t = r(void 0 === t ? e.length - 1 : +t || 0, 0), function() {
                    for (var n = arguments, o = -1, i = r(n.length - t, 0), a = Array(i); ++o < i;)
                        a[o] = n[t + o];
                    switch (t) {
                    case 0:
                        return e.call(this, a);
                    case 1:
                        return e.call(this, n[0], a);
                    case 2:
                        return e.call(this, n[0], n[1], a)
                    }
                    var s = Array(t + 1);
                    for (o = -1; ++o < t;)
                        s[o] = n[o];
                    return s[t] = a, e.apply(this, s)
                }
            }
        }, function(e, t, n) {
            "use strict";
            function r(e) {
                if (e && e.__esModule)
                    return e;
                var t = {};
                if (null != e)
                    for (var n in e)
                        Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                return t.default = e, t
            }
            function o(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = o(n(1)),
                a = o(n(2)),
                s = o(n(14)),
                l = o(n(15)),
                c = r(n(12)),
                u = r((o((o(n(47)), n(21))), n(32))),
                d = r(n(51)),
                f = o(n(28)),
                p = o(n(20)),
                h = o(n(11)),
                v = function(e) {
                    function t(e) {
                        (0, i.default)(this, t);
                        var n = (0, s.default)(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, h.default.VIDEO_TIMEUPDATE));
                        return n.videox = e, n.options = n.videox.config, n.media = n.videox.videoDom, n.parent_ = n.videox.controlBar.el, n.el = n.getProgressEl(), n.totalTimeEl = c.$(".J_TotalTime", n.el), n.currentTimeEl = c.$(".J_CurrentTime", n.el), n.progressBarEl = c.$(".J_ProgressBar", n.el), n.progressEl = c.$(".J_Progress", n.el), n.videox.videoDom.addEventListener("loadedmetadata", function(e) {
                            n.updateTimeCount_(e)
                        }), n.bindEvent(), n._addEventListener(), n
                    }
                    return (0, l.default)(t, e), (0, a.default)(t, [{
                        key: "_addEventListener",
                        value: function() {
                            this.videox.on(p.default.INIT, this.onInit.bind(this)), this.videox.on(h.default.VIDEO_TIMEUPDATE, this.onVideoTimeupdate.bind(this))
                        }
                    }, {
                        key: "onInit",
                        value: function() {}
                    }, {
                        key: "onVideoTimeupdate",
                        value: function(e) {
                            this.timeupdate(e)
                        }
                    }, {
                        key: "getProgressEl",
                        value: function() {
                            var e = !0 === this.options.live ? "vjs-hidden" : "",
                                t = c.createEl("div", {
                                    className: "vjs-progress-bar " + e,
                                    innerHTML: '\n        <span class="current-time"><em class="J_CurrentTime">00:00</em></span>\n        <span class="progress-bar J_ProgressBar">\n          <span class="progress J_Progress">\n            <span class="control J_Update"></span>\n          </span>\n        </span>\n        <span class="total-time"><em class="J_TotalTime">--:--</em></span>\n      '
                                });
                            return c.appendContent(c.$(".progress-wrap", this.parent_), t), t
                        }
                    }, {
                        key: "bindEvent",
                        value: function() {
                            var e = this,
                                t = !1,
                                n = !1,
                                r = "",
                                o = this.videox.videoDom,
                                i = function(r) {
                                    e.progressing = !0, t = !0, n = !o.paused, e.setMediaProgress(r)
                                },
                                a = function(o) {
                                    console.log(o.type + ":::mouseUp"), o.preventDefault(), clearInterval(r), t = !1, 1 == n && (n = !1), e.progressing = !1
                                },
                                s = function(n) {
                                    n.preventDefault(), !0 === t && (r = setInterval(e.setMediaProgress(n), 1e3))
                                };
                            d.on(this.el, "touchstart", function(e) {
                                return i(e)
                            }), d.on(this.el, "touchmove", function(e) {
                                return s(e)
                            }), d.on(this.el, "touchend", function(e) {
                                return a(e)
                            }), d.on(this.el, "mousedown", function(e) {
                                return i(e)
                            }), d.on(this.el, "mousemove", function(e) {
                                return s(e)
                            }), d.on(this.el, "mouseup", function(e) {
                                return a(e)
                            })
                        }
                    }, {
                        key: "setMediaProgress",
                        value: function(e) {
                            var t = this.media,
                                n = this.timeFromCursorPosition(this.progressBarEl, e, t.duration);
                            t.currentTime = n, this.updateProgress_()
                        }
                    }, {
                        key: "timeFromCursorPosition",
                        value: function(e, t, n) {
                            var r = e.getBoundingClientRect(),
                                o = (t.clientX || t.changedTouches[0].clientX) - r.left,
                                i = r.width;
                            return u.aliapp && "TB" == u.aliapp.appname && u.os.isAndroid && (o = (t.clientY || t.changedTouches[0].clientY) - r.top, i = r.height), o / i * n
                        }
                    }, {
                        key: "timeupdate",
                        value: function(e) {
                            this.updateProgress_(e), this.updateTimeCount_(e)
                        }
                    }, {
                        key: "updateProgress_",
                        value: function(e) {
                            var t = this.media,
                                n = 0;
                            t.currentTime > 0 && (n = 100 / t.duration * t.currentTime), this.progressEl.style.width = n + "%"
                        }
                    }, {
                        key: "updateTimeCount_",
                        value: function(e) {
                            var t = this.media,
                                n = this.formatTime(t.currentTime),
                                r = this.formatTime(t.duration);
                            !0 === isNaN(t.duration) && (r = "00:00"), this.currentTimeEl.innerHTML = n, this.totalTimeEl.innerHTML = r
                        }
                    }, {
                        key: "formatTime",
                        value: function(e) {
                            var t = Math.floor(e / 60);
                            return t + ":" + ("0" + Math.round(e - 60 * t)).slice(-2)
                        }
                    }, {
                        key: "setTimeline",
                        value: function(e) {
                            var t = c.createEl("span", {
                                    className: "vjs-progress-tag"
                                }),
                                n = 100 / this.media.duration * e;
                            return t.style.left = n + "%", c.appendContent(this.progressBarEl, t), t
                        }
                    }]), t
                }(f.default);
            t.default = v
        }, function(e, t, n) {
            "use strict";
            function r(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var o,
                i,
                a = r(n(33)),
                s = r(n(70)),
                l = window.navigator.userAgent,
                c = !1,
                u = "",
                d = "",
                f = "";
            (i = l.match(/WindVane[\/\s]([\d\.\_]+)/i)) && (o = i[1]), (i = l.match(/AliApp\(([A-Z\-]+)\/([\d\.]+)\)/i)) && (c = !0, u = i[1], f = i[2], d = u.indexOf("-PD") > 0 ? s.default.isIOS ? "iPad" : s.default.isAndroid ? "AndroidPad" : s.default.name : s.default.name), !u && l.indexOf("TBIOS") > 0 && (u = "TB");
            var p = window._ua_popLayer || "",
                h = !1,
                v = "";
            p && (i = p.match(/PopLayer\/([\d\.]+)/i)) && (h = !0, v = i[1]), c && (c = {
                windvane: new a.default(o || "0.0.0"),
                appname: u || "unkown",
                version: new a.default(f || "0.0.0"),
                platform: d || s.default.name,
                poplayer: h || !1,
                poplayerVersion: new a.default(v || "0.0.0")
            }), t.default = c
        }, function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r,
                o,
                i = function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }(n(33)),
                a = window.navigator.userAgent;
            (o = a.match(/(?:UCWEB|UCBrowser\/)([\d\.]+)/)) ? r = {
                name: "UC",
                isUC: !0,
                version: new i.default(o[1])
            } : (o = a.match(/MQQBrowser\/([\d\.]+)/)) ? r = {
                name: "QQ",
                isQQ: !0,
                version: new i.default(o[1])
            } : (o = a.match(/(?:Firefox|FxiOS)\/([\d\.]+)/)) ? r = {
                name: "Firefox",
                isFirefox: !0,
                version: new i.default(o[1])
            } : (o = a.match(/MSIE\s([\d\.]+)/)) || (o = a.match(/IEMobile\/([\d\.]+)/)) ? (r = {
                version: new i.default(o[1])
            }, a.match(/IEMobile/) ? (r.name = "IEMobile", r.isIEMobile = !0) : (r.name = "IE", r.isIE = !0), a.match(/Android|iPhone/) && (r.isIELikeWebkit = !0)) : (o = a.match(/(?:Chrome|CriOS)\/([\d\.]+)/)) ? (r = {
                name: "Chrome",
                isChrome: !0,
                version: new i.default(o[1])
            }, a.match(/Version\/[\d+\.]+\s*Chrome/) && (r.name = "Chrome Webview", r.isWebview = !0)) : a.match(/Safari/) && (o = a.match(/Android[\s\/]([\d\.]+)/)) ? r = {
                name: "Android",
                isAndroid: !0,
                version: new i.default(o[1])
            } : a.match(/iPhone|iPad|iPod/) && (a.match(/Safari/) && (o = a.match(/Version\/([\d\.]+)/)) ? r = {
                name: "Safari",
                isSafari: !0,
                version: new i.default(o[1])
            } : (o = a.match(/OS ([\d_\.]+) like Mac OS X/)) && (r = {
                name: "iOS Webview",
                isWebview: !0,
                version: new i.default(o[1].replace(/\_/g, "."))
            })), r || (r = {
                name: "unknown",
                version: new i.default("0.0.0")
            }), t.default = r
        }, function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r,
                o = window.navigator.userAgent;
            r = o.match(/Weibo/i) ? {
                appname: "Weibo",
                isWeibo: !0
            } : !!o.match(/MicroMessenger/i) && {
                appname: "Weixin",
                isWeixin: !0
            }, t.default = r
        }, function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = {},
                o = window.location.search.replace(/^\?/, "");
            if (o)
                for (var i = o.split("&"), a = 0; a < i.length; a++) {
                    i[a] = i[a].split("=");
                    try {
                        r[i[a][0]] = decodeURIComponent(i[a][1])
                    } catch (e) {
                        r[i[a][0]] = i[a][1]
                    }
                }
            t.default = r
        }, function(e, t, n) {
            "use strict";
            function r(e) {
                if (e && e.__esModule)
                    return e;
                var t = {};
                if (null != e)
                    for (var n in e)
                        Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                return t.default = e, t
            }
            function o(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = o(n(1)),
                a = o(n(2)),
                s = o(n(14)),
                l = o(n(15)),
                c = r(n(12)),
                u = r((r((o((o(n(47)), n(21))), n(32))), n(51))),
                d = o(n(28)),
                f = o(n(20)),
                p = o(n(11)),
                h = function(e) {
                    function t(e) {
                        (0, i.default)(this, t);
                        var n = (0, s.default)(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                        return n.videox = e, n.media = n.videox.videoDom, n.parent_ = n.videox.controlBar.el, n.el = n.getVolumeEl(), n.progressBarEl = c.$(".J_VolumeBar", n.el), n.progressEl = c.$(".J_Volume", n.el), n.volumeIcon = c.$(".J_VolumeIcon", n.el), n.initStatus(), n.bindEvent(), n._addEventListener(), n.loadImage(), n
                    }
                    return (0, l.default)(t, e), (0, a.default)(t, [{
                        key: "initStatus",
                        value: function() {
                            this.updateVolumn_()
                        }
                    }, {
                        key: "getVolumeEl",
                        value: function() {
                            var e = c.createEl("div", {
                                className: "vjs-volume-bar",
                                innerHTML: '\n        <span class="vjs-icon-volume J_VolumeIcon"></span>\n        <span class="volume-bar J_VolumeBar">\n          <span class="volume J_Volume">\n            <span class="control J_Update"></span>\n          </span>\n        </span>\n      '
                            });
                            return c.appendContent(c.$(".volume-wrap", this.parent_), e), e
                        }
                    }, {
                        key: "bindEvent",
                        value: function() {
                            var e = this,
                                t = !1,
                                n = "",
                                r = (this.media, function(n) {
                                    e.progressing = !0, t = !0, e.setMediaVolume(n)
                                }),
                                o = function(r) {
                                    r.preventDefault(), clearInterval(n), t = !1, e.progressing = !1
                                },
                                i = function(r) {
                                    r.preventDefault(), !0 === t && (n = setInterval(e.setMediaVolume(r), 1e3))
                                },
                                a = function(t) {
                                    var n = e.media;
                                    n.muted = !n.muted
                                };
                            u.on(this.el, "touchstart", function(e) {
                                return r(e)
                            }), u.on(this.el, "touchmove", function(e) {
                                return i(e)
                            }), u.on(this.el, "touchend", function(e) {
                                return o(e)
                            }), u.on(this.volumeIcon, "touch", function(e) {
                                return a()
                            }), u.on(this.el, "mousedown", function(e) {
                                return r(e)
                            }), u.on(this.el, "mousemove", function(e) {
                                return i(e)
                            }), u.on(this.el, "mouseup", function(e) {
                                return o(e)
                            }), u.on(this.volumeIcon, "click", function(e) {
                                return a()
                            })
                        }
                    }, {
                        key: "_addEventListener",
                        value: function() {
                            this.videox.on(f.default.INIT, this.volumeupdate.bind(this)), this.videox.on(p.default.VIDEO_VOLUMECHANGE, this.volumeupdate.bind(this))
                        }
                    }, {
                        key: "loadImage",
                        value: function() {
                            (new Image).src = "//gw.alicdn.com/tfs/TB1fdLdSFXXXXXAaXXXXXXXXXXX-80-80.png", (new Image).src = "//gw.alicdn.com/tfs/TB1A2bRSFXXXXahXXXXXXXXXXXX-80-80.png"
                        }
                    }, {
                        key: "setMediaMutedStatus",
                        value: function(e) {
                            this.media.muted ? c.addElClass(this.volumeIcon, "vjs-icon-volume-muted") : c.removeElClass(this.volumeIcon, "vjs-icon-volume-muted")
                        }
                    }, {
                        key: "setMediaVolume",
                        value: function(e) {
                            var t = this.media,
                                n = this.volumeFromCursorPosition(this.progressBarEl, e, 1);
                            n < 0 || n > 1 || (t.volume = n, this.updateVolumn_())
                        }
                    }, {
                        key: "volumeFromCursorPosition",
                        value: function(e, t, n) {
                            var r = e.getBoundingClientRect();
                            return ((t.clientX || t.changedTouches[0].clientX) - r.left) / r.width * n
                        }
                    }, {
                        key: "updateVolumn_",
                        value: function() {
                            var e = this.media,
                                t = (e.muted, 0);
                            e.volume > 0 && (t = 100 * e.volume), this.progressEl.style.width = t + "%", this.setMediaMutedStatus(e)
                        }
                    }, {
                        key: "volumeupdate",
                        value: function() {
                            this.updateVolumn_()
                        }
                    }]), t
                }(d.default);
            t.default = h
        }, function(e, t) {
            "undefined" == typeof window && (window = {
                ctrl: {},
                lib: {}
            }), !window.ctrl && (window.ctrl = {}), !window.lib && (window.lib = {}), function(e, t) {
                var n = e.Promise,
                    r = e.document,
                    o = e.navigator.userAgent,
                    i = /Windows\sPhone\s(?:OS\s)?[\d\.]+/i.test(o) || /Windows\sNT\s[\d\.]+/i.test(o),
                    a = i && e.WindVane_Win_Private && e.WindVane_Win_Private.call,
                    s = /iPhone|iPad|iPod/i.test(o),
                    l = /Android/i.test(o),
                    c = o.match(/WindVane[\/\s](\d+[._]\d+[._]\d+)/),
                    u = Object.prototype.hasOwnProperty,
                    d = t.windvane = e.WindVane || (e.WindVane = {}),
                    f = (e.WindVane_Native, Math.floor(65536 * Math.random())),
                    p = 1,
                    h = [],
                    v = "iframe_",
                    m = "param_",
                    g = "chunk_",
                    y = {
                        isAvailable: 1 === function(e, t) {
                            e = e.toString().split("."), t = t.toString().split(".");
                            for (var n = 0; n < e.length || n < t.length; n++) {
                                var r = parseInt(e[n], 10),
                                    o = parseInt(t[n], 10);
                                if (window.isNaN(r) && (r = 0), window.isNaN(o) && (o = 0), r < o)
                                    return -1;
                                if (r > o)
                                    return 1
                            }
                            return 0
                        }(c = c ? (c[1] || "0.0.0").replace(/\_/g, ".") : "0.0.0", "0"),
                        call: function(e, t, r, o, i, a) {
                            var s,
                                l;
                            "number" == typeof arguments[arguments.length - 1] && (a = arguments[arguments.length - 1]), "function" != typeof o && (o = null), "function" != typeof i && (i = null), n && (l = {}, l.promise = new n(function(e, t) {
                                l.resolve = e, l.reject = t
                            })), s = b.getSid();
                            var c = {
                                success: o,
                                failure: i,
                                deferred: l
                            };
                            if (a > 0 && (c.timeout = setTimeout(function() {
                                y.onFailure(s, {
                                    ret: "HY_TIMEOUT"
                                })
                            }, a)), b.registerCall(s, c), b.registerGC(s, a), y.isAvailable ? b.callMethod(e, t, r, s) : y.onFailure(s, {
                                ret: "HY_NOT_IN_WINDVANE"
                            }), l)
                                return l.promise
                        },
                        fireEvent: function(e, t, n) {
                            var o = r.createEvent("HTMLEvents");
                            o.initEvent(e, !1, !0), o.param = b.parseData(t || b.getData(n)), r.dispatchEvent(o)
                        },
                        getParam: function(e) {
                            return b.getParam(e)
                        },
                        setData: function(e, t) {
                            b.setData(e, t)
                        },
                        onSuccess: function(e, t) {
                            b.onComplete(e, t, "success")
                        },
                        onFailure: function(e, t) {
                            b.onComplete(e, t, "failure")
                        }
                    },
                    b = {
                        params: {},
                        chunks: {},
                        calls: {},
                        getSid: function() {
                            return (f + p++) % 65536 + ""
                        },
                        buildParam: function(e) {
                            return e && "object" == typeof e ? JSON.stringify(e) : e || ""
                        },
                        getParam: function(e) {
                            return this.params[m + e] || ""
                        },
                        setParam: function(e, t) {
                            this.params[m + e] = t
                        },
                        parseData: function(e) {
                            var t;
                            if (e && "string" == typeof e)
                                try {
                                    t = JSON.parse(e)
                                } catch (e) {
                                    t = {
                                        ret: ["WV_ERR::PARAM_PARSE_ERROR"]
                                    }
                                }
                            else
                                t = e || {};
                            return t
                        },
                        setData: function() {
                            this.chunks[g + sid] = this.chunks[g + sid] || [], this.chunks[g + sid].push(chunk)
                        },
                        getData: function(e) {
                            return this.chunks[g + e] ? this.chunks[g + e].join("") : ""
                        },
                        registerCall: function(e, t) {
                            this.calls[e] = t
                        },
                        unregisterCall: function(e) {
                            var t = {};
                            return this.calls[e] && (t = this.calls[e], delete this.calls[e]), t
                        },
                        useIframe: function(e, t) {
                            var n = v + e,
                                o = h.pop();
                            o || ((o = r.createElement("iframe")).setAttribute("frameborder", "0"), o.style.cssText = "width:0;height:0;border:0;display:none;"), o.setAttribute("id", n), o.setAttribute("src", t), o.parentNode || setTimeout(function() {
                                r.body.appendChild(o)
                            }, 5)
                        },
                        retrieveIframe: function(e) {
                            var t = v + e,
                                n = r.querySelector("#" + t);
                            h.length >= 3 ? r.body.removeChild(n) : h.indexOf(n) < 0 && h.push(n)
                        },
                        callMethod: function(t, n, r, o) {
                            if (r = b.buildParam(r), i)
                                a ? e.WindVane_Win_Private.call(t, n, o, r) : this.onComplete(o, {
                                    ret: "HY_NO_HANDLER_ON_WP"
                                }, "failure");
                            else {
                                var c = "hybrid://" + t + ":" + o + "/" + n + "?" + r;
                                s ? (this.setParam(o, r), this.useIframe(o, c)) : l ? window.prompt(c, "wv_hybrid:") : this.onComplete(o, {
                                    ret: "HY_NOT_SUPPORT_DEVICE"
                                }, "failure")
                            }
                        },
                        registerGC: function(e, t) {
                            var n = this,
                                r = Math.max(t || 0, 6e5),
                                o = Math.max(t || 0, 6e4),
                                i = Math.max(t || 0, 6e5);
                            setTimeout(function() {
                                n.unregisterCall(e)
                            }, r), s ? setTimeout(function() {
                                n.params[m + e] && delete n.params[m + e]
                            }, o) : l && setTimeout(function() {
                                n.chunks[g + e] && delete n.chunks[g + e]
                            }, i)
                        },
                        onComplete: function(e, t, n) {
                            var r = this.unregisterCall(e),
                                o = r.success,
                                i = r.failure,
                                a = r.deferred,
                                c = r.timeout;
                            c && clearTimeout(c), t = t || this.getData(e);
                            var u = (t = this.parseData(t)).ret;
                            "string" == typeof u && ((t = t.value || t).ret || (t.ret = [u])), "success" === n ? (o && o(t), a && a.resolve(t)) : "failure" === n && (i && i(t), a && a.reject(t)), s ? (this.retrieveIframe(e), this.params[m + e] && delete this.params[m + e]) : l && this.chunks[g + e] && delete this.chunks[g + e]
                        }
                    };
                for (var _ in y)
                    u.call(d, _) || (d[_] = y[_])
            }(window, window.lib || (window.lib = {})), e.exports = window.lib.windvane
        }, function(e, t, n) {
            "use strict";
            function r(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.HttpURL = t.VideoTool = t.version = void 0;
            var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                },
                i = r(n(149)),
                a = r(n(72)),
                s = (new i.default).version;
            "function" == typeof alert && ("undefined" == typeof console || o(console)), t.version = s, t.VideoTool = i.default, t.HttpURL = a.default
        }, function(e, t, n) {
            "use strict";
            function r(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            function o(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = function() {
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
                a = n(150),
                s = r(n(151)),
                l = r(n(155)),
                c = r(n(71)),
                u = function() {
                    function e() {
                        o(this, e), this.version = a.version
                    }
                    return i(e, [{
                        key: "getFileType",
                        value: function(e) {
                            return (0, c.default)(e)
                        }
                    }, {
                        key: "getDuration",
                        value: function(e) {
                            return (0, s.default)(e)
                        }
                    }, {
                        key: "canPlay",
                        value: function(e) {
                            return (0, l.default)(e)
                        }
                    }]), e
                }();
            t.default = u
        }, function(e, t) {
            e.exports = {
                name: "@ali/lib-video-tool",
                description: "project description",
                version: "0.1.1",
                repository: {
                    type: "git",
                    url: "git@gitlab.alibaba-inc.com:mtb/lib-video-tool.git"
                },
                author: [{
                    name: "九瑶",
                    email: "mengli.xml@alibaba-inc.com"
                }],
                license: "MIT",
                keywords: ["lib", "mtb", "javascript", "es6", "es2015"],
                publishConfig: {
                    registry: "http://registry.npm.alibaba-inc.com"
                },
                scripts: {
                    clear: "rm -rf dist coverage release",
                    build: "rm -rf dist && babel src --out-dir dist",
                    bundle: "webpack --config webpack.config.js",
                    dev: "npm run build && npm run bundle",
                    watch: 'watch -p "src/**/*.js" -c "npm run dev"',
                    lint: "eslint --fix --config .eslintrc src/**/*.js test/**/*.js",
                    test: "mocha --compilers js:babel-core/register test/**/*.js",
                    cover: "babel-node node_modules/isparta/bin/isparta cover --report text node_modules/mocha/bin/_mocha test/**/*.js --reporter dot",
                    ci: "npm run lint && npm run test",
                    release: "npm run build && sh ./build/release.sh",
                    "site:update": "sh ./build/site.sh update",
                    "site:build": "sh ./build/site.sh build",
                    "site:watch": 'watch -p "doc/**/*.md" -p "README.md" -c "npm run site:build"',
                    "site:serve": "sh ./build/site.sh serve",
                    "site:publish": "sh ./build/site.sh publish"
                },
                dependencies: {
                    "@ali/lib-httpurl": "~2.0.0"
                },
                devDependencies: {
                    "babel-cli": "~6.4.5",
                    "babel-core": "~6.4.5",
                    "babel-loader": "~6.2.4",
                    "babel-preset-es2015": "~6.3.13",
                    chai: "~3.4.1",
                    eslint: "~2.1.0",
                    "gitbook-cli": "~1.0.1",
                    isparta: "~4.0.0",
                    mocha: "~2.4.5",
                    serve: "~1.4.0",
                    "watch-cli": "~0.2.1",
                    webpack: "~1.13.0",
                    "json-loader": "^0.5.4"
                },
                main: "./src/index.js",
                _from: "@ali/lib-video-tool@0.1.1",
                _resolved: "http://registry.npm.alibaba-inc.com/@ali/lib-video-tool/download/@ali/lib-video-tool-0.1.1.tgz"
            }
        }, function(e, t, n) {
            "use strict";
            function r(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var o = r(n(71)),
                i = r(n(152)),
                a = n(154),
                s = new RegExp([/#EXTINF:(\d*(?:\.\d+)?)(?:,(.*)\s+)?/.source, /|(?!#)(\S+)/.source, /|#EXT-X-BYTERANGE:*(.+)/.source, /|#EXT-X-PROGRAM-DATE-TIME:(.+)/.source, /|#.*/.source].join(""), "g"),
                l = /(?:(?:#(EXTM3U))|(?:#EXT-X-(PLAYLIST-TYPE):(.+))|(?:#EXT-X-(MEDIA-SEQUENCE): *(\d+))|(?:#EXT-X-(TARGETDURATION): *(\d+))|(?:#EXT-X-(KEY):(.+))|(?:#EXT-X-(START):(.+))|(?:#EXT-X-(ENDLIST))|(?:#EXT-X-(DISCONTINUITY-SEQ)UENCE:(\d+))|(?:#EXT-X-(DIS)CONTINUITY))|(?:#EXT-X-(VERSION):(\d+))|(?:#EXT-X-(MAP):(.+))|(?:(#)(.*):(.*))|(?:(#)(.*))(?:.*)\r?\n?/,
                c = function(e, t) {
                    var n = document.createElement("video");
                    n.src = e, n.preload = "metadata", n.onloadedmetadata = function() {
                        t(n.duration), n = null
                    }
                },
                u = function(e, t, n, r) {
                    var o,
                        i,
                        a = 0,
                        c = {};
                    for (s.lastIndex = 0; null !== (o = s.exec(e));) {
                        var u = o[1];
                        if (u)
                            c.duration = parseFloat(u);
                        else if (o[3])
                            isNaN(c.duration) || (a += c.duration);
                        else if (o[4])
                            ;
                        else if (o[5])
                            ;
                        else
                            for (o = o[0].match(l), i = 1; i < o.length && void 0 === o[i]; i++)
                                ;
                    }
                    return a
                },
                d = function(e, t) {
                    var n = e.data;
                    0 === n.indexOf("#EXTM3U") && n.indexOf("#EXTINF:") > 0 && t(u(n)), t(void 0)
                };
            t.default = function(e) {
                var t = (0, o.default)(e);
                return new Promise(function(n, r) {
                    if ("mp4" == t)
                        return c(e, n);
                    if ("m3u8" == t) {
                        var o = new i.default,
                            s = {
                                url: e,
                                responseType: ""
                            };
                        o.load(s, a.loaderConfig, {
                            onSuccess: function(e) {
                                d(e, n)
                            }
                        })
                    } else
                        n(void 0)
                })
            }
        }, function(e, t, n) {
            "use strict";
            function r(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var o = function() {
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
                i = n(153),
                a = function() {
                    function e(t) {
                        r(this, e), t && t.xhrSetup && (this.xhrSetup = t.xhrSetup)
                    }
                    return o(e, [{
                        key: "destroy",
                        value: function() {
                            this.abort(), this.loader = null
                        }
                    }, {
                        key: "abort",
                        value: function() {
                            var e = this.loader;
                            e && 4 !== e.readyState && (this.stats.aborted = !0, e.abort()), window.clearTimeout(this.requestTimeout), this.requestTimeout = null, window.clearTimeout(this.retryTimeout), this.retryTimeout = null
                        }
                    }, {
                        key: "load",
                        value: function(e, t, n) {
                            this.context = e, this.config = t, this.callbacks = n, this.stats = {
                                trequest: performance.now(),
                                retry: 0
                            }, this.retryDelay = t.retryDelay, this.loadInternal()
                        }
                    }, {
                        key: "loadInternal",
                        value: function() {
                            var e,
                                t = this.context;
                            e = "undefined" != typeof XDomainRequest ? this.loader = new XDomainRequest : this.loader = new XMLHttpRequest;
                            var n = this.stats;
                            n.tfirst = 0, n.loaded = 0;
                            var r = this.xhrSetup;
                            try {
                                if (r)
                                    try {
                                        r(e, t.url)
                                    } catch (n) {
                                        e.open("GET", t.url, !0), r(e, t.url)
                                    }
                                e.readyState || e.open("GET", t.url, !0)
                            } catch (n) {
                                return void this.callbacks.onError({
                                    code: e.status,
                                    text: n.message
                                }, t, e)
                            }
                            t.rangeEnd && e.setRequestHeader("Range", "bytes=" + t.rangeStart + "-" + (t.rangeEnd - 1)), e.onreadystatechange = this.readystatechange.bind(this), e.onprogress = this.loadprogress.bind(this), e.responseType = t.responseType, this.requestTimeout = window.setTimeout(this.loadtimeout.bind(this), this.config.timeout), e.send()
                        }
                    }, {
                        key: "readystatechange",
                        value: function(e) {
                            var t = e.currentTarget,
                                n = t.readyState,
                                r = this.stats,
                                o = this.context,
                                a = this.config;
                            if (!r.aborted && n >= 2)
                                if (window.clearTimeout(this.requestTimeout), 0 === r.tfirst && (r.tfirst = Math.max(performance.now(), r.trequest)), 4 === n) {
                                    var s = t.status;
                                    if (s >= 200 && s < 300) {
                                        r.tload = Math.max(r.tfirst, performance.now());
                                        var l = void 0,
                                            c = void 0;
                                        "arraybuffer" === o.responseType ? (l = t.response, c = l.byteLength) : (l = t.responseText, c = l.length), r.loaded = r.total = c;
                                        var u = {
                                            url: t.responseURL,
                                            data: l
                                        };
                                        this.callbacks.onSuccess(u, r, o, t)
                                    } else
                                        r.retry >= a.maxRetry || s >= 400 && s < 499 ? (i.logger.error(s + " while loading " + o.url), this.callbacks.onError({
                                            code: s,
                                            text: t.statusText
                                        }, o, t)) : (i.logger.warn(s + " while loading " + o.url + ", retrying in " + this.retryDelay + "..."), this.destroy(), this.retryTimeout = window.setTimeout(this.loadInternal.bind(this), this.retryDelay), this.retryDelay = Math.min(2 * this.retryDelay, a.maxRetryDelay), r.retry++)
                                } else
                                    this.requestTimeout = window.setTimeout(this.loadtimeout.bind(this), a.timeout)
                        }
                    }, {
                        key: "loadtimeout",
                        value: function() {
                            i.logger.warn("timeout while loading " + this.context.url), this.callbacks.onTimeout(this.stats, this.context, null)
                        }
                    }, {
                        key: "loadprogress",
                        value: function(e) {
                            var t = e.currentTarget,
                                n = this.stats;
                            n.loaded = e.loaded, e.lengthComputable && (n.total = e.total);
                            var r = this.callbacks.onProgress;
                            r && r(n, this.context, null, t)
                        }
                    }]), e
                }();
            t.default = a
        }, function(e, t, n) {
            "use strict";
            function r() {}
            function o(e, t) {
                return t = "[" + e + "] > " + t
            }
            function i(e) {
                var t = self.console[e];
                return t ? function() {
                    for (var n = arguments.length, r = Array(n), i = 0; i < n; i++)
                        r[i] = arguments[i];
                    r[0] && (r[0] = o(e, r[0])), t.apply(self.console, r)
                } : r
            }
            function a(e) {
                for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
                    n[r - 1] = arguments[r];
                n.forEach(function(t) {
                    c[t] = e[t] ? e[t].bind(e) : i(t)
                })
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                },
                l = {
                    trace: r,
                    debug: r,
                    log: r,
                    warn: r,
                    info: r,
                    error: r
                },
                c = l;
            t.enableLogs = function(e) {
                if (!0 === e || "object" === (void 0 === e ? "undefined" : s(e))) {
                    a(e, "debug", "log", "info", "warn", "error");
                    try {
                        c.log()
                    } catch (e) {
                        c = l
                    }
                } else
                    c = l
            }, t.logger = c
        }, function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = t.loaderConfig = {
                maxRetry: 1,
                maxRetryDelay: 64e3,
                retryDelay: 1e3,
                timeout: 1e4
            };
            t.default = r
        }, function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = n(156),
                o = function(e) {
                    var t = i(e, r.MIMETYPES);
                    return 0 == t.length && (t = i(e, r.AUDIO_MIMETYPES)), t
                },
                i = function(e, t, n) {
                    var r = (e.split("?")[0].match(/.*\.(.*)$/) || [])[1],
                        o = n || r && t[r.toLowerCase()] || [];
                    return o.constructor === Array ? o : [o]
                };
            t.default = function(e, t, n) {
                var r = o(e),
                    i = document.createElement("video");
                return !!r.filter(function(e) {
                    return !!i.canPlayType(e).replace(/no/, "")
                })[0]
            }
        }, function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = t.MIMETYPES = {
                mp4: ["avc1.42E01E", "avc1.58A01E", "avc1.4D401E", "avc1.64001E", "mp4v.20.8", "mp4v.20.240"].map(function(e) {
                    return "video/mp4; codecs=" + e + ", mp4a.40.2"
                }),
                ogg: ['video/ogg; codecs="theora, vorbis"', 'video/ogg; codecs="dirac"', 'video/ogg; codecs="theora, speex"'],
                "3gpp": ['video/3gpp; codecs="mp4v.20.8, samr"'],
                webm: ['video/webm; codecs="vp8, vorbis"'],
                mkv: ['video/x-matroska; codecs="theora, vorbis"'],
                m3u8: ["application/x-mpegURL"]
            };
            r.ogv = r.ogg, r["3gp"] = r["3gpp"], t.AUDIO_MIMETYPES = {
                wav: ["audio/wav"],
                mp3: ["audio/mp3", 'audio/mpeg;codecs="mp3"'],
                aac: ['audio/mp4;codecs="mp4a.40.5"'],
                oga: ["audio/ogg"]
            }, t.default = r
        }, function(e, t, n) {
            "use strict";
            function r(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var o = r(n(1)),
                i = r(n(2)),
                a = r(n(72)),
                s = r(n(11)),
                l = window.goldlog,
                c = function() {
                    function e(t) {
                        (0, o.default)(this, e), this.options = {}, Object.assign(this.options, t), this._initLogParams(), this.initLog(), this.videox = t.videox, this._isPlaying = !1, this._isInView = !1, this._startPlayTime = 0, this._playTime = 0, this._startExposeTime = 0, this._startSeekTime = 0
                    }
                    return (0, i.default)(e, [{
                        key: "_initLogParams",
                        value: function() {
                            var e = "";
                            try {
                                e = new a.default(this.options.url)
                            } catch (e) {
                                return void console.error(e, "url不合法")
                            }
                            var t = e.pathname.split(".").pop(),
                                n = "",
                                r = "unkown",
                                o = this.options.live ? "live" : "video";
                            switch (t) {
                            case "m3u8":
                                r = e.pathname.split("/")[1], n = e.pathname.split("/")[2].split(".")[0];
                                break;
                            case "mp4":
                                r = "tbvideo", n = e.pathname.split("/").pop().split(".")[0];
                                break;
                            case "flv":
                                r = e.pathname.split("/")[1], n = e.pathname.split("/")[2].split(".")[0]
                            }
                            this.logParams = {
                                app: r,
                                media_id: n,
                                ext: t,
                                video_type: o,
                                from: this.options.from
                            }
                        }
                    }, {
                        key: "_bindEvent",
                        value: function() {
                            var e = this,
                                t = this.videox;
                            t.on(s.default.VIDEO_PLAY, function(t) {
                                e._isPlaying = !0, e._recordStartTime()
                            }), t.on(s.default.VIDEO_PAUSE, function(t) {
                                e._isPlaying = !1, e._addPlayTime()
                            }), t.on(s.default.VIDEO_ERROR, function(t) {
                                e.errorLog(t)
                            }), t.on(s.default.VIDEO_SEEKING, function(t) {
                                e.seekLog(), e._recordStartSeekTime()
                            }), t.on(s.default.VIDEO_SEEKED, function(t) {
                                e.seekLog()
                            }), document.addEventListener("visibilitychange", function(t) {
                                "hidden" === document.visibilityState && (e._addPlayTime(), e.exposeLog(), e.playTimeLog())
                            });
                            var n = function() {
                                var t = e._getOffset(window),
                                    n = e._getOffset(e.videox.getVideoEl()),
                                    r = e._compareOffset(t, n);
                                r && !e._isInView ? (e._isInView = !0, e._recordStartExposeTime(), e._isPlaying && e._recordStartTime()) : !r && e._isInView && (e._isInView = !1, e.exposeLog(), e._isPlaying && e._addPlayTime())
                            };
                            document.addEventListener("scroll", this._throttle(n, 300)), n()
                        }
                    }, {
                        key: "_throttle",
                        value: function(e, t) {
                            var n = (Date.now(), 0),
                                r = null,
                                o = void 0,
                                i = void 0,
                                a = void 0,
                                s = function() {
                                    n = Date.now(), r = null, e.apply(o, i)
                                };
                            return function() {
                                var l = Date.now();
                                o = this, i = arguments;
                                var c = t - (l - n);
                                return c <= 0 || c >= t ? (clearTimeout(r), r = null, a = e.apply(o, i)) : null == r && (r = setTimeout(s, c)), a
                            }
                        }
                    }, {
                        key: "_addPlayTime",
                        value: function() {
                            this._startPlayTime > 0 && (this._playTime += Date.now() - this._startPlayTime)
                        }
                    }, {
                        key: "_recordStartTime",
                        value: function() {
                            this._startPlayTime = Date.now()
                        }
                    }, {
                        key: "_recordStartExposeTime",
                        value: function() {
                            this._startExposeTime = Date.now()
                        }
                    }, {
                        key: "_recordStartSeekTime",
                        value: function() {
                            this._startSeekTime = this.videox.getVideoEl().currentTime
                        }
                    }, {
                        key: "_getOffset",
                        value: function(e, t) {
                            var e,
                                n,
                                r,
                                o,
                                i,
                                a = window.innerHeight,
                                s = window.innerWidth;
                            if (e)
                                return t || (t = {
                                    x: 0,
                                    y: 0
                                }), e != window ? (e = e.getBoundingClientRect(), n = e.left, r = e.top, o = e.right, i = e.bottom) : (n = 0, r = 0, o = n + s, i = r + a), t.w && (o = t.w), t.h && (r = a - t.h), {
                                    left: n,
                                    top: r,
                                    right: o + t.x,
                                    bottom: i + t.y
                                }
                        }
                    }, {
                        key: "_compareOffset",
                        value: function(e, t) {
                            var n = t.right > e.left && t.left < e.right,
                                r = t.bottom > e.top && t.top < e.bottom;
                            return n && r
                        }
                    }, {
                        key: "_getLogParamsString",
                        value: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                t = this.logParams,
                                n = Object.keys(t).map(function(e) {
                                    return e + "=" + t[e]
                                }),
                                r = Object.keys(e).map(function(t) {
                                    return t + "=" + e[t]
                                });
                            return n.concat(r).join("&")
                        }
                    }, {
                        key: "initLog",
                        value: function() {
                            var e = this._getLogParamsString();
                            l && l.record("/taobaolive.videox.init", "CLK", e, "H1479648468")
                        }
                    }, {
                        key: "playLog",
                        value: function() {
                            var e = this._getLogParamsString();
                            l && l.record("/taobaolive.videox.play", "CLK", e, "H1479648494")
                        }
                    }, {
                        key: "pauseLog",
                        value: function() {
                            var e = this._getLogParamsString();
                            l && l.record("/taobaolive.videox.pause", "CLK", e, "H1480571953")
                        }
                    }, {
                        key: "fullScreenLog",
                        value: function() {
                            var e = this._getLogParamsString();
                            l && l.record("/taobaolive.videox.fullscreen", "CLK", e, "H1485189588")
                        }
                    }, {
                        key: "playTimeLog",
                        value: function() {
                            var e = this._getLogParamsString({
                                duration: this._playTime
                            });
                            l && l.record("/taobaolive.videox.playtime", "OTHER", e, "H1483342516")
                        }
                    }, {
                        key: "exposeLog",
                        value: function() {
                            var e = this._getLogParamsString({
                                duration: Date.now() - this._startExposeTime
                            });
                            l && l.record("/taobaolive.videox.expose", "EXP", e, "H1481495474")
                        }
                    }, {
                        key: "errorLog",
                        value: function(e) {
                            var t = this.videox.getVideoEl().error,
                                n = t ? t.code : e.errorCode,
                                r = this._getLogParamsString({
                                    error_type: n
                                });
                            l && l.record("/taobaolive.videox.error", "OTHER", r, "H1480571987")
                        }
                    }, {
                        key: "seekLog",
                        value: function() {
                            var e = 1e3 * (this.videox.getVideoEl().currentTime - this._startSeekTime);
                            if (e > 10) {
                                var t = this._getLogParamsString({
                                    duration: e
                                });
                                l && l.record("/taobaolive.videox.seek", "OTHER", t, "H1479648438"), this._startSeekTime = 0
                            }
                        }
                    }]), e
                }();
            t.default = c
        }, , , function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), n(161);
            var r = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(n(79));
            t.default = r.default
        }, function(e, t, n) {
            var r = n(162);
            "string" == typeof r && (r = [[e.i, r, ""]]);
            var o = {};
            o.transform = void 0, n(77)(r, o), r.locals && (e.exports = r.locals)
        }, function(e, t, n) {
            (e.exports = n(76)(void 0)).push([e.i, '.lib-video,body,html{height:100%}.lib-video{position:relative;width:100%}.lib-video::-webkit-media-controls-start-playback-button{display:none}.lib-video video{background:#000;width:100%;height:100%}.vjs-hidden{display:none!important}.vjs-opacity-hidden{opacity:0!important}.lib-video .interact-item{display:-webkit-box;display:-webkit-flex;display:flex;width:1.173333rem;height:.533333rem;background-image:url(//gw.alicdn.com/mt/TB1_qhcPVXXXXcNXpXXXXXXXXXX-88-40.png);background-size:contain;background-repeat:no-repeat;border:none;background-color:transparent;margin-right:.266667rem;margin-left:.133333rem}.lib-video .vjs-big-play-button:before,.lib-video .vjs-control:before{position:absolute;top:0;left:0;width:100%;height:100%;text-align:center}.vjs-body-fullscreen{overflow-x:hidden;overflow-y:hidden;overflow:hidden;max-width:100%}.vjs-body-fullscreen .lib-video.vjs-player-fullscreen{position:fixed;left:0;top:0;bottom:0;right:0;z-index:100;width:100%!important;height:100%!important}.vjs-body-fullscreen .lib-video.vjs-player-fullscreen-rotate{position:fixed;left:100%;top:0;z-index:9999;-webkit-transform:rotate(90deg);transform:rotate(90deg);-webkit-transform-origin:0 0;transform-origin:0 0}.vjs-body-fullscreen .vjs-android-bg-mask{width:100%;height:100%;position:fixed;background:#000;z-index:1;left:0;top:0}.lib-video .vjs-control-bar{width:100%;position:absolute;z-index:2;bottom:0;left:0;right:0;padding:.133333rem 0;background-image:url(//gw.alicdn.com/mt/TB1xK4uPVXXXXcRXXXXXXXXXXXX-750-80.png);background-size:cover;-webkit-transition:all .3s ease;transition:all .3s ease;opacity:1;display:box;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-flex-direction:row;-moz-flex-direction:row;-o-flex-direction:row;flex-direction:row;-webkit-box-pack:space-between;-webkit-justify-content:space-between;-moz-justify-content:space-between;-ms-justify-content:space-between;-o-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-moz-align-items:center;-ms-align-items:center;-o-align-items:center;align-items:center}.vjs-has-started.vjs-user-inactive.vjs-playing .vjs-control-bar{visibility:hidden;opacity:0;-webkit-transition:visibility 1s,opacity 1s;transition:visibility 1s,opacity 1s}.vjs-audio.vjs-has-started.vjs-user-inactive.vjs-playing .vjs-control-bar{opacity:1;visibility:visible}.lib-video .vjs-control{outline:none;position:relative;text-align:center;margin:0;padding:0;height:.533333rem;width:.533333rem;-webkit-box-flex:none;-webkit-flex:none;flex:none}.lib-video .vjs-play-control,.vjs-icon-play{left:0}.vjs-button{background:none;border:none;color:#fff;outline:none}.lib-video .vjs-play-control:before,.vjs-icon-play:before{background-image:url(//gw.alicdn.com/mt/TB1..XoPVXXXXX2XpXXXXXXXXXX-60-60.png);background-size:cover;width:.533333rem;height:.533333rem;content:""}.vjs-icon-volume{width:.533333rem;height:.533333rem;margin-right:.133333rem;cursor:pointer}.vjs-icon-volume:before{background-image:url(//gw.alicdn.com/tfs/TB1fdLdSFXXXXXAaXXXXXXXXXXX-80-80.png);background-size:.4rem .4rem;background-repeat:no-repeat;background-position:center center;width:.533333rem;height:.533333rem;content:"";position:absolute;top:0;left:0;text-align:center}.vjs-icon-volume-muted:before{background-image:url(//gw.alicdn.com/tfs/TB1A2bRSFXXXXahXXXXXXXXXXXX-80-80.png)}.vjs-icon-play-circle{font-family:VideoJS;font-weight:400;font-style:normal}.vjs-icon-play-circle:before{content:"\\F102"}.lib-video .vjs-playing:before,.vjs-icon-pause:before{background-image:url(//gw.alicdn.com/mt/TB1gkQVPFXXXXcwXVXXXXXXXXXX-60-60.png);background-size:cover;width:.533333rem;height:.533333rem;content:""}.lib-video,.lib-video .vjs-fullscreen-control,.vjs-icon-fullscreen-enter{font-family:VideoJS;font-weight:400;font-style:normal}.lib-video .vjs-fullscreen-control:before,.vjs-icon-fullscreen-enter:before{background-image:url(//gw.alicdn.com/mt/TB1pIhEPVXXXXayXXXXXXXXXXXX-60-60.png);background-size:cover;width:.533333rem;height:.533333rem;content:""}.lib-video.vjs-player-fullscreen .vjs-fullscreen-control,.vjs-icon-fullscreen-exit{font-family:VideoJS;font-weight:400;font-style:normal}.lib-video.vjs-player-fullscreen-rotate .vjs-fullscreen-control:before,.lib-video.vjs-player-fullscreen .vjs-fullscreen-control:before,.vjs-icon-fullscreen-exit:before{background-image:url(//gw.alicdn.com/mt/TB1l9n5PVXXXXahXXXXXXXXXXXX-60-60.png);background-size:cover;width:.533333rem;height:.533333rem;content:""}.lib-video .vjs-control:focus,.lib-video .vjs-control:focus:before,.lib-video .vjs-control:hover:before{text-shadow:0 0 1em #fff}.lib-video .vjs-control-text{border:0;clip:rect(0 0 0 0);height:.013333rem;margin:-.013333rem;overflow:hidden;padding:0;position:absolute;width:.013333rem}.vjs-no-flex .vjs-control{display:table-cell;vertical-align:middle}.vjs-center-container{position:absolute;left:0;right:0;bottom:0;top:0;width:1.333333rem;height:1.333333rem;text-align:center;margin:auto;z-index:2}.vjs-center-container.loading .vjs-center-load{opacity:1;display:inline-block}.vjs-center-container.loading .vjs-center-start{display:none}.vjs-center-start{width:1.333333rem;height:1.333333rem;background-image:url(https://gw.alicdn.com/mt/TB1exduPVXXXXcIXpXXXXXXXXXX-136-136.png)}.vjs-center-retry,.vjs-center-start{background-size:contain;border:none;background-repeat:no-repeat}.vjs-center-retry{width:.8rem;height:.8rem;background-image:url(https://gw.alicdn.com/mt/TB1U1JfXMfHK1Jjy1zbXXahRFXa-200-200.png)}.vjs-center-container.error{color:#fff;width:100%;height:1.066667rem;font-size:.266667rem}.error-content{opacity:0;display:none}.vjs-center-container.error .error-content{opacity:1;display:inline-block}.vjs-center-container.error .vjs-center-start,.vjs-center-load{opacity:0;display:none}.vjs-center-load{border-radius:100%;-webkit-animation-fill-mode:both;animation-fill-mode:both;border:.013333rem solid #fff;border-bottom-color:transparent;width:1.2rem;height:1.2rem;background:transparent!important;-webkit-animation:rotate .75s 0s linear infinite;animation:rotate .75s 0s linear infinite}@-webkit-keyframes rotate{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}50%{-webkit-transform:rotate(180deg);transform:rotate(180deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes rotate{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}50%{-webkit-transform:rotate(180deg);transform:rotate(180deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.vjs-center-poster,.vjs-mock-mask{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;opacity:0;z-index:1;background:#000}.vjs-center-poster{opacity:1;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;overflow:hidden;background-size:contain;background-repeat:no-repeat;background-position:center center}.vjs-has-started .vjs-center-container,.vjs-has-started .vjs-center-poster,.vjs-has-started .vjs-mock-mask{display:none}.vjs-flash{width:100%;height:100%}.progress-wrap{-webkit-box-flex:1;-moz-box-flex:1;width:20%;-webkit-flex:1;flex:1}.progress-wrap,.volume-wrap{overflow:hidden}.vjs-progress-bar,.vjs-volume-bar{position:relative;display:inline-block;width:100%;vertical-align:top;display:box;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-flex-direction:row;-moz-flex-direction:row;-o-flex-direction:row;flex-direction:row;-webkit-box-pack:space-between;-webkit-justify-content:space-between;-moz-justify-content:space-between;-ms-justify-content:space-between;-o-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-moz-align-items:center;-ms-align-items:center;-o-align-items:center;align-items:center}.vjs-progress-bar .current-time,.vjs-progress-bar .total-time{color:#fff;line-height:.373333rem;height:.373333rem;text-align:center;display:inline-block;vertical-align:middle;font-weight:400!important}.vjs-progress-bar .current-time em,.vjs-progress-bar .total-time em{display:inline-block;margin:0 .133333rem;font-size:.293333rem;font-weight:400!important;float:left;color:#fff;vertical-align:middle;font-style:normal}.vjs-progress-bar .progress-bar,.vjs-volume-bar .volume-bar{display:block;height:.04rem;border-radius:.04rem;background-color:hsla(0,0%,100%,.4);position:relative;-webkit-box-flex:1;-moz-box-flex:1;width:20%;-webkit-flex:1;flex:1}.vjs-volume-bar .volume-bar{margin-right:.133333rem;width:1.6rem}.vjs-progress-bar .progress,.vjs-volume-bar .volume{width:0;top:0;left:0;background:#ff5000;position:absolute;border-radius:.04rem;height:.04rem}// .vjs-volume-bar .volume{margin-right:.133333rem}.vjs-progress-bar .progress .control,.vjs-volume-bar .volume .control{position:absolute;background:0 0;right:0;top:0}.vjs-progress-bar .progress .control:after,.vjs-volume-bar .volume .control:after{position:absolute;content:"";border-radius:100%;background:#fff;top:-.08rem;left:-.106667rem;width:.186667rem;height:.186667rem}.vjs-progress-bar .vjs-progress-tag{width:.133333rem;height:.133333rem;top:-.04rem;border-radius:100%;background:#fff;position:absolute}.vjs-danmaku-container{position:absolute;left:0;top:0;overflow:"hidden";width:100%;height:100%}.vjs-danmaku-item{-webkit-transition:all 4s linear;transition:all 4s linear;overflow:hidden;vertical-align:middle}.vjs-danmaku-item p{padding:.013333rem .053333rem .026667rem;vertical-align:middle;border-radius:.053333rem}', ""])
        }])
    })
}, function(e, t) {
    e.exports = {
        render: function() {
            var e = this,
                t = e.$createElement,
                n = e._self._c || t;
            return n("div", {
                attrs: {
                    id: "J_video-panel"
                }
            }, [n("div", {
                staticClass: "video-panel-wrapper f-pos-cover"
            }, [n("div", {
                staticClass: "lr-anchor-wrapper"
            }, [n("div", {
                staticClass: "lr-anchor-avatar f-inline f-bg-cover lib-img",
                attrs: {
                    "data-src": e.video.broadCaster.headImg,
                    "data-size": "80x80"
                }
            }), e._v(" "), n("div", {
                staticClass: "lr-anchor-info f-inline"
            }, [n("div", {
                staticClass: "lr-anchor-nick"
            }, [e._v(e._s(e.video.broadCaster.accountName))]), e._v(" "), n("div", {
                staticClass: "lr-anchor-location"
            }, [n("span", {
                staticClass: "f-inline"
            }, [e._v(e._s(e.video.location))]), e._v(" "), n("i", {
                staticClass: "f-inline lr-anchor-tbicon"
            })])])]), e._v(" "), 0 == e.video.status ? n("ul", {
                staticClass: "lr-online-list"
            }, [e._l(e.audienceList.list, function(t) {
                return n("li", {
                    staticClass: "lr-online-avatar f-inline f-bg-cover lib-img",
                    attrs: {
                        "data-src": e.avatar(t)
                    }
                })
            }), e._v(" "), n("li", {
                staticClass: "lr-online-count f-inline"
            }, [n("div", {
                staticClass: "lr-online-count-modal f-pos-cover"
            }), e._v(" "), n("b", [e._v(e._s(e.audienceList.total))]), e._v(" "), n("span", [e._v("观看")])])], 2) : e._e(), e._v(" "), n("div", {
                staticClass: "video-panel-modal f-pos-cover"
            })]), e._v(" "), n("div", {
                staticClass: "video-player-wrapper"
            }, [(e.useFlvPlayer, n("div", {
                staticClass: "prism-player",
                attrs: {
                    id: "J_Player"
                }
            })), e._v(" "), n("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.coverShow,
                    expression: "coverShow"
                }],
                staticClass: "f-bg-cover lr-video-cover",
                style: {
                    backgroundImage: "url(" + e.video.coverImg + ")"
                }
            }), e._v(" "), e.sourceTimeout ? n("div", {
                staticClass: "lr-video-err-mask"
            }, [n("p", [e._v("播放源异常")]), e._v(" "), n("div", {
                staticClass: "lr-replay-btn",
                on: {
                    click: function(t) {
                        e.refresh()
                    }
                }
            }, [e._v("刷新")])]) : e._e(), e._v(" "), 3 != e.video.status || e.isReplay ? e._e() : n("div", {
                staticClass: "lr-video-err-mask"
            }, [n("p", [e._v("直播即将开始")]), e._v(" "), n("div", {
                staticClass: "lr-replay-btn",
                on: {
                    click: function(t) {
                        e.refresh()
                    }
                }
            }, [e._v("刷新")])]), e._v(" "), 1 != e.video.status || e.isReplay ? e._e() : n("div", {
                staticClass: "lr-video-err-mask"
            }, [n("p", [e._v("直播已经结束")]), e._v(" "), n("div", {
                staticClass: "lr-replay-btn",
                on: {
                    click: function(t) {
                        e.replay()
                    }
                }
            }, [e._v("观看重播")])]), e._v(" "), e.isLive ? n("div", {
                staticClass: "lr-player-console"
            }, [n("span", {
                staticClass: "icon replay-icon",
                on: {
                    mouseover: function(t) {
                        e.reloadTipActivate(!0)
                    },
                    mouseleave: function(t) {
                        e.reloadTipActivate(!1)
                    },
                    click: function(t) {
                        e.videoReload()
                    }
                }
            }, [e._v("")]), e._v(" "), n("span", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.reloadHover,
                    expression: "reloadHover"
                }],
                staticClass: "reload-tip"
            }, [e._v("重新加载")]), e._v(" "), n("span", {
                staticClass: "current-level-span",
                on: {
                    click: e.selectQuality
                }
            }, [e._v(e._s(e.currentLv.name))]), e._v(" "), e.video.liveUrlList ? n("ul", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.activeLv,
                    expression: "activeLv"
                }],
                staticClass: "lv-urllist"
            }, e._l(e.video.liveUrlList, function(t) {
                return n("li", {
                    on: {
                        click: function(n) {
                            e.setLevel(t)
                        }
                    }
                }, [e._v(e._s(t.name))])
            })) : e._e()]) : e._e(), e._v(" "), n("lr-interactive-layer", {
                attrs: {
                    message: e.layerMessage
                }
            })], 1)])
        },
        staticRenderFns: []
    }
}, function(e, t, n) {
    n(188);
    var r = n(20)(n(190), n(191), "data-v-48c547c7", null);
    e.exports = r.exports
}, function(e, t, n) {
    var r = n(189);
    "string" == typeof r && (r = [[e.id, r, ""]]), r.locals && (e.exports = r.locals);
    n(18)("371a0b12", r, !0)
}, function(e, t, n) {
    (e.exports = n(11)()).push([e.id, "#J_lr-header[data-v-48c547c7]{height:40px;background:#fff;position:relative}#J_lr-header .lr-header-item[data-v-48c547c7]{height:40px;margin-left:8px;text-align:center}#J_lr-header .lr-header-item>b[data-v-48c547c7]{display:inline-block;*display:inline;*zoom:1;vertical-align:middle;height:100%}.lr-header-item-left[data-v-48c547c7]{float:left}.lr-header-item-right[data-v-48c547c7]{float:right}#J_lr-header .lr-header-tbicon[data-v-48c547c7]{height:20px;width:40px;line-height:20px;border-radius:74px;color:#fff;background:#fe2951;font-size:12px}#J_lr-header .lr-header-tbicon.lr-header-replay[data-v-48c547c7]{background:#3b67a4}#J_lr-header .lr-header-title[data-v-48c547c7]{font-size:16px;color:#222;letter-spacing:0}#J_lr-header .lr-header-qrcode[data-v-48c547c7],#J_lr-header .lr-header-share[data-v-48c547c7]{margin-right:20px;font-size:14px;color:#5f646e}#J_lr-header .lr-header-item .icon[data-v-48c547c7]{font-size:18px}#J_lr-header .lr-header-qrcode[data-v-48c547c7]:hover,#J_lr-header .lr-header-share[data-v-48c547c7]:hover{cursor:pointer;color:#fe2951}.lr-qrcode-wrapper[data-v-48c547c7]{position:absolute;width:100px;height:120px;padding:10px;top:50px;z-index:1000000;background:#fff;right:10px;border:1px solid #dcdcdc;text-align:center}.lr-qrcode-wrapper canvas[data-v-48c547c7]{width:90px;height:90px;margin-top:5px}.lr-qrcode-desc[data-v-48c547c7]{font-size:12px;color:#999;margin:5px auto 10px}", ""])
}, function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = {
        data: function() {
            return {
                qrcodeActive: !1
            }
        },
        props: {
            title: {
                type: String,
                default: function() {
                    return ""
                }
            },
            accountId: {
                type: Number,
                default: function() {
                    return ""
                }
            },
            isReplay: {
                type: Boolean,
                default: function() {
                    return !1
                }
            }
        },
        methods: {
            generateQrCode: function() {
                var e = {
                        render: "canvas",
                        width: 256,
                        height: 256,
                        typeNumber: -1,
                        correctLevel: lib.QRErrorCorrectLevel.H,
                        background: "#ffffff",
                        foreground: "#000000"
                    },
                    t = new lib.QRCode(e.typeNumber, e.correctLevel),
                    n = "http://h5.m.taobao.com/taolive/video.html?userId=" + this.accountId;
                t.addData(n), t.make();
                var r = document.getElementById("qrcode-canvas");
                r.width = e.width, r.height = e.height;
                for (var o = r.getContext("2d"), i = e.width / t.getModuleCount(), a = e.height / t.getModuleCount(), s = 0; s < t.getModuleCount(); s++)
                    for (var l = 0; l < t.getModuleCount(); l++) {
                        o.fillStyle = t.isDark(s, l) ? e.foreground : e.background;
                        var c = Math.ceil((l + 1) * i) - Math.floor(l * i),
                            u = Math.ceil((s + 1) * i) - Math.floor(s * i);
                        o.fillRect(Math.round(l * i), Math.round(s * a), c, u)
                    }
            },
            activeQRcode: function(e) {
                this.qrcodeActive = e, goldlog && e && goldlog.record("/taobaolive.pclive.mobilelive", "CLK", "", "H1485189558")
            }
        },
        mounted: function() {
            this.generateQrCode()
        }
    }
}, function(e, t) {
    e.exports = {
        render: function() {
            var e = this,
                t = e.$createElement,
                n = e._self._c || t;
            return n("ul", {
                attrs: {
                    id: "J_lr-header"
                }
            }, [n("li", {
                staticClass: "lr-header-item lr-header-item-left"
            }, [e.isReplay ? n("div", {
                staticClass: "lr-header-tbicon lr-header-replay f-inline"
            }, [e._v("回放")]) : n("div", {
                staticClass: "lr-header-tbicon f-inline"
            }, [e._v("直播")]), e._v(" "), n("div", {
                staticClass: "lr-header-title f-inline"
            }, [e._v(e._s(e.title))]), e._v(" "), n("b")]), e._v(" "), n("li", {
                staticClass: "lr-header-item lr-header-item-right"
            }, [n("div", {
                staticClass: "lr-header-qrcode f-inline",
                on: {
                    mouseover: function(t) {
                        e.activeQRcode(!0)
                    },
                    mouseleave: function(t) {
                        e.activeQRcode(!1)
                    }
                }
            }, [n("i", {
                staticClass: "icon"
            }, [e._v("")]), e._v(" "), n("span", {
                staticClass: "f-inline"
            }, [e._v("手机看直播")])]), e._v(" "), n("b")]), e._v(" "), n("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.qrcodeActive,
                    expression: "qrcodeActive"
                }],
                staticClass: "lr-qrcode-wrapper",
                attrs: {
                    id: "qrcode"
                }
            }, [n("canvas", {
                staticClass: "lr-qrcode",
                attrs: {
                    id: "qrcode-canvas"
                }
            }), e._v(" "), n("p", {
                staticClass: "lr-qrcode-desc"
            }, [e._v("用手机淘宝扫码")])])])
        },
        staticRenderFns: []
    }
}, function(e, t, n) {
    n(193);
    var r = n(20)(n(195), n(196), null, null);
    e.exports = r.exports
}, function(e, t, n) {
    var r = n(194);
    "string" == typeof r && (r = [[e.id, r, ""]]), r.locals && (e.exports = r.locals);
    n(18)("edca8cd6", r, !0)
}, function(e, t, n) {
    (e.exports = n(11)()).push([e.id, ".lr-item{position:relative;padding:12px 32px 12px 40px;overflow:hidden;background:#fff;border-bottom:1px solid #e7e7e7}.lr-item-pic{float:left;position:relative;margin-right:15px;height:100px;width:100px}.lr-item .lr-item-num{position:absolute;top:15px;left:15px;z-index:2;height:16px;width:16px;border-radius:8px;font-size:12px;line-height:1.2;text-align:center;font-style:normal;color:#fff;background:#aaaeb1}.lr-item-info-wrapper{position:relative;padding:0 0 0 23px;height:100px;margin-bottom:7px}.lr-item-info-wrapper .lr-item-title{padding-top:3px;font-size:14px;color:#3d3f45;line-height:1.4;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;text-overflow:ellipsis;overflow:hidden}.lr-item-price-wrapper b,.lr-item-price-wrapper i{font-size:12px;color:#ff2851;font-style:normal}.lr-item-price-wrapper b{font-weight:700;-webkit-font-smoothing:auto}.lr-item-buycount{position:absolute;left:115px;bottom:0;font-size:12px;color:#999;line-height:14px}.lr-item-action{position:absolute;right:0;bottom:0;width:78px;height:22px;border:1px solid #ff2851;border-radius:2px;line-height:22px;font-size:14px;color:#ff2851;text-align:center}.lr-horizontal-item .lr-item-buycount{right:0;left:auto;bottom:auto;top:0}.lr-horizontal-item .lr-item-action{left:115px;right:auto}", ""])
}, function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = {
        props: {
            isHorizontal: {
                default: !1,
                type: Boolean
            },
            itemgroup: {
                type: Object,
                default: function() {
                    return {}
                }
            }
        },
        computed: {
            clsObj: function() {
                return {
                    "lr-horizontal-item": this.isHorizontal
                }
            }
        },
        methods: {
            decode: function(e) {
                return decodeURIComponent(e)
            }
        }
    }
}, function(e, t) {
    e.exports = {
        render: function() {
            var e = this,
                t = e.$createElement,
                n = e._self._c || t;
            return n("li", {
                staticClass: "lr-item",
                class: e.clsObj
            }, [n("i", {
                staticClass: "lr-item-num f-inline"
            }, [e._v(e._s(e.itemgroup.goodsIndex))]), e._v(" "), e._l(e.itemgroup.goodsList, function(t) {
                return n("div", [n("a", {
                    attrs: {
                        target: "_blank",
                        href: e.decode(t.itemH5TaokeUrl)
                    }
                }, [n("div", {
                    staticClass: "lr-item-pic f-bg-cover lib-img",
                    attrs: {
                        "data-src": t.itemPic,
                        "data-spm": "2278304",
                        "data-size": "200x200"
                    }
                }), e._v(" "), n("div", {
                    staticClass: "lr-item-info-wrapper"
                }, [n("div", {
                    staticClass: "lr-item-title",
                    attrs: {
                        "data-spm": "2278304"
                    }
                }, [e._v(e._s(t.itemName))]), e._v(" "), n("div", {
                    staticClass: "lr-item-price-wrapper"
                }, [n("i", [e._v("￥")]), e._v(" "), n("b", [e._v(e._s(t.itemPrice))])]), e._v(" "), n("div", {
                    staticClass: "lr-item-buycount"
                }, [e._v(e._s(t.buyCount || 0) + "人已购买")]), e._v(" "), n("span", {
                    staticClass: "lr-item-action f-inline",
                    attrs: {
                        "data-spm": "2278279"
                    }
                }, [e._v("立即查看")])])])])
            })], 2)
        },
        staticRenderFns: []
    }
}, function(e, t, n) {
    n(198);
    var r = n(20)(n(200), n(208), null, null);
    e.exports = r.exports
}, function(e, t, n) {
    var r = n(199);
    "string" == typeof r && (r = [[e.id, r, ""]]), r.locals && (e.exports = r.locals);
    n(18)("a5fc3930", r, !0)
}, function(e, t, n) {
    (e.exports = n(11)()).push([e.id, ".cw-container{overflow:hidden;position:relative}.cw-container .comment-outer{position:relative;width:100%;height:100%;overflow-x:hidden;overflow-y:scroll}.cw-container .comment-outer::-webkit-scrollbar{display:none}.cw-container .comment-outer .comment-inner{width:100%;overflow:hidden}.cw-container .comment{font-size:14px;padding:2px 8px;line-height:20px;margin-bottom:6px;color:#051b28;float:left;clear:both;word-break:break-all;word-wrap:break-word}.cw-container .comment:last-child{margin-bottom:0}.cw-container .more{display:none;position:absolute;z-index:1;bottom:0;left:50%;margin-left:-48px;width:96px;height:26px;border-radius:13px;color:#ff2851;background:#fff;font-size:12px;line-height:26px;text-align:center;cursor:pointer}.feed-component{position:relative;height:100%;width:100%}.feed-component .feed-container{padding:18px;font-size:12px;background-color:#f8f8f8}.feed-component .feed-container .comment{padding:0}.feed-component .join{color:#999}.feed-component .comment.fav{background-color:#f40;color:#fff;border-radius:2px;padding:1px 5px}.feed-component .comment.follow{background-color:#ff2851;color:#fff;border-radius:2px;padding:1px 5px}.feed-component .comment-text{word-break:break-all;max-width:280px;vertical-align:top;display:-webkit-box;float:left;-webkit-line-clamp:5;-webkit-box-orient:vertical;text-overflow:ellipsis;overflow:hidden}.feed-component .comment-container,.feed-component .interact-box{position:absolute;bottom:0;left:0;right:0}.feed-component .comment-container{width:100%;height:44px}.feed-component .cw-container .more{box-shadow:0 0 4px 0 rgba(0,0,0,.11);bottom:15px}.feed-component .like-container{width:80px;height:400px;position:absolute;right:0;bottom:0}.feed-component .comment-input{padding:14px 19px;font-size:14px;border:none;width:182px;height:16px;float:left;vertical-align:middle}#J_lr-layout-vertical .feed-component .comment-input{width:216px}.feed-component .comment-input:focus{outline:none}.feed-component .comment-btn,.feed-component .like-btn{width:80px;background:#5f646e;height:44px;line-height:44px;text-align:center;color:#fff;float:left;overflow:hidden;moz-user-select:-moz-none;-moz-user-select:none;-o-user-select:none;-webkit-user-select:none;user-select:none;cursor:pointer}.feed-component .comment-btn{position:absolute;right:80px}.feed-component .like-btn{float:right}.feed-component .comment-btn:hover,.feed-component .like-btn:hover{background:#ff2851}.feed-component .comment-btn.disabled,.feed-component .like-btn.disabled{opacity:.4;cursor:not-allowed}.feed-component .like-btn{background-color:#494b4e;font-size:12px}.feed-component .like-btn .icon{font-size:14px}", ""])
}, function(e, t, n) {
    "use strict";
    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = r(n(122)),
        i = r(n(126)),
        a = n(201).ChatWindow,
        s = n(204).LikeAnim,
        l = n(207);
    t.default = {
        data: function() {
            return {
                likeAnim: null,
                chatWindow: null,
                userColor: ["#38a1f2", "#7538c7", "#ff2851", "#ff3c00", "#31b48d"],
                colorIndex: 0,
                comment: "",
                nick: "",
                likeCount: 0,
                lastMsg: null,
                commentAllow: "1688" == window.origin
            }
        },
        props: {
            isHorizontal: {
                type: Boolean,
                default: function() {
                    return !1
                }
            }
        },
        computed: {
            feedHeight: function() {
                return this.isHorizontal ? parseInt(document.documentElement.clientHeight) - 44 - 36 : 632
            },
            videoEnd: function() {
                return 1 == this.video.status
            }
        },
        store: o.default,
        vuex: {
            getters: {
                msgScope: function(e) {
                    return e.msgScope
                },
                video: function(e) {
                    return e.video
                },
                userInfo: function(e) {
                    return e.userInfo
                }
            },
            actions: i.default
        },
        methods: {
            initMsg: function() {
                var e = this,
                    t = e.msgScope;
                    // console.log('msgScope=='+JSON.stringify(t));
                t.requestTopicStatus().then(function(t) {
                    t.acssResp;
                    var n = t.data;
                    e.likeCount = n.digNum
                }).catch(function(e) {}), t.on("message", function(t) {
                    // console.log('消息4=='+JSON.stringify(t.data));
                    var n = t.data,
                        r = [].map.call(new Uint16Array([8258, 8752, 9159, 102, 111, 108, 108, 111, 119]), function(e) {
                            return String.fromCharCode(e)
                        }).join("");
                    n.message.indexOf(r) > -1 ? e.chatWindow.addComment({
                        content: '<span style="color:white;">' + n.from + " 关注了主播</span>",
                        class: "follow",
                        shouldMerge: !0
                    }) : (!e.userInfo || e.userInfo.userId !== n.userId && e.userInfo.nickName !== n.from) && (e.colorIndex++, e.colorIndex > 4 && (e.colorIndex = 0), e.chatWindow.addComment({
                        content: '<span style="color:' + e.userColor[e.colorIndex] + ';float:left;">' + n.from + ': </span> <span class="comment-text">' + n.message + "</span>"
                    }))
                }), t.on("liveJoin", function(t) {
                    var n = t.data;
                    // console.log('消息2'+n);
                    console.log('进入了直播间:'+JSON.stringify(n));
                    
                    // e.chatWindow.addComment({
                    //     content: '<span style="color:#999;">' + n.userList[0].nick + " 进入了直播间</span>",
                    //     class: "join",
                    //     shouldMerge: !0
                    // })
                }), t.on("liveTrade", function(t) {
                    var n = t.data;
                    console.log('正在去购买的路上:'+JSON.stringify(n));
                    if (1 == n.type) {
                        var r = n.nick[0] + "****" + n.nick[n.nick.length - 1];
                        e.chatWindow.addComment({
                            content: '<span style="color:white;">' + r + " 正在去购买的路上</span>",
                            class: "fav",
                            shouldMerge: !0
                        })
                    }
                }), t.on("count", function(t) {
                    console.log('点赞:'+JSON.stringify(t.data));
                    e.likeAnim.like(), e.likeCount = e.likeCount + 1
                })
            },
            doLike: function() {
                var e = this;
                this.videoEnd || (null === this.userInfo ? this.loginModal(function() {
                    e.likeMsg()
                }) : this.likeMsg())
            },
            likeMsg: function() {
                var e = this;
                e.msgScope && (e.likeCount++, e.likeAnim.like(), e.msgScope.count().then(function(e) {}).catch(function(e) {
                    console.log(e)
                })), goldlog && goldlog.record("/taobaolive.pclive.like", "CLK", "", "H1479648432")
            },
            sendMsg: function() {
                if (!this.videoEnd) {
                    var e = this;
                    if (e.msgScope) {
                        if ("" == e.comment)
                            return void e.showToast("请输入评论内容");
                        if (null === e.userInfo)
                            return void e.loginModal(function() {
                                e.getUserInfo(), e.sendMsg()
                            });
                        e.msgScope.sendMessage(e.comment, e.userInfo.nickName).then(function(e) {}).catch(function(t) {
                            "ERR_NO_LOGIN" == t.type && (e.loginModal(function() {
                                e.getUserInfo(), e.sendMsg()
                            }), console.log(t.message))
                        }), e.colorIndex++, e.colorIndex > 4 && (e.colorIndex = 0);
                        var t = l(e.comment);
                        // console.log('comment:'+t);
                        e.chatWindow.addComment({
                            content: '<span style="color:' + e.userColor[e.colorIndex] + ';float:left;">' + e.userInfo.nickName + ': </span> <span class="comment-text">' + t + "</span>"
                        }), e.comment = "", e.chatWindow.scrollToBottom(), goldlog && goldlog.record("/taobaolive.pclive.comment", "CLK", "", "H1482419031")
                    }
                }
            }
        },
        watch: {
            msgScope: function() {}
        },
        mounted: function() {
            this.likeAnim = new s({
                container: "#J_Like_Container",
                showLikeBtn: !1,
                icons: ["//gw.alicdn.com/bao/uploaded/TB1HPo3NXXXXXapXXXXXXXXXXXX-60-60.png", "//gw.alicdn.com/bao/uploaded/TB18UsqNXXXXXcCaXXXXXXXXXXX-60-60.png", "//gw.alicdn.com/bao/uploaded/TB1IssvNXXXXXXiaXXXXXXXXXXX-60-60.png", "//gw.alicdn.com/bao/uploaded/TB1z4E2NXXXXXaUXXXXXXXXXXXX-60-60.png", "//gw.alicdn.com/bao/uploaded/TB1F0kGNXXXXXcSXFXXXXXXXXXX-60-60.png", "//gw.alicdn.com/bao/uploaded/TB1ums5NXXXXXXCXXXXXXXXXXXX-60-60.png", "//gw.alicdn.com/bao/uploaded/TB1fWMQNXXXXXb7XpXXXXXXXXXX-60-60.png", "//gw.alicdn.com/bao/uploaded/TB1SSEpNXXXXXaIaXXXXXXXXXXX-60-60.png", "//gw.alicdn.com/bao/uploaded/TB1i6Z3NXXXXXaIXXXXXXXXXXXX-60-60.png", "//gw.alicdn.com/bao/uploaded/TB1IOURNXXXXXarXpXXXXXXXXXX-60-60.png", "//gw.alicdn.com/bao/uploaded/TB1pXZHNXXXXXcBXFXXXXXXXXXX-60-60.png", "//gw.alicdn.com/bao/uploaded/TB1ANQGNXXXXXcpXFXXXXXXXXXX-60-60.png", "//gw.alicdn.com/bao/uploaded/TB1RdMnNXXXXXaUapXXXXXXXXXX-60-60.png", "//gw.alicdn.com/bao/uploaded/TB1WP74NXXXXXaaXXXXXXXXXXXX-60-60.png", "//gw.alicdn.com/bao/uploaded/TB1TNAJNXXXXXbzXFXXXXXXXXXX-60-60.png", "//gw.alicdn.com/bao/uploaded/TB1mQ73NXXXXXaFXXXXXXXXXXXX-60-60.png", "//gw.alicdn.com/bao/uploaded/TB10n.CNXXXXXX4XVXXXXXXXXXX-60-60.png", "//gw.alicdn.com/bao/uploaded/TB1._34NXXXXXX4XXXXXXXXXXXX-60-60.png", "//gw.alicdn.com/bao/uploaded/TB1myIHNXXXXXb2XFXXXXXXXXXX-60-60.png", "//gw.alicdn.com/bao/uploaded/TB19uIUNXXXXXazXpXXXXXXXXXX-60-60.png"]
            }), this.chatWindow = new a({
                container: "#J_Feed_Containter",
                commentWidth: 380,
                cooldownPeriod: 1e3,
                maxLength: 1e3,
                mergeComment: !0
            }), this.initMsg()
        }
    }
}, function(e, t, n) {
    "use strict";
    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    function o(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.ChatWindow = void 0;
    var i = function() {
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
        a = r(n(202)),
        s = r(n(203)),
        l = "cw-container",
        c = "comment-outer",
        u = "comment-inner",
        d = "more",
        f = {
            commentWidth: 230,
            autoScroll: !0,
            autoScrollThrottle: 30,
            alwaysScroll: !1,
            showMore: !0,
            cooldownPeriod: 200,
            maxLength: 1e3,
            mergeComment: !1
        },
        p = function() {
            function e(t) {
                o(this, e), (t = a.default.merge(f, t)).container && (this.cfg = t, this.nodes = {
                    container: document.querySelector(this.cfg.container)
                }, this.nodes.commentOuter = e._createDiv(this.nodes.container, c), this.nodes.commentInner = e._createDiv(this.nodes.commentOuter, u), this.nodes.more = e._createDiv(this.nodes.container, d), this.nodes.commentOuter.style.wid_checkMoreth = this.nodes.commentOuter.offsetWidth + 30 + "px", this.nodes.commentInner.style.width = this.cfg.commentWidth + "px", this.nodes.container.className += " " + l, this.commentList = [], this.commentToPush = [], this.bindEvent())
            }
            return i(e, [{
                key: "bindEvent",
                value: function() {
                    this.nodes.commentOuter.addEventListener("scroll", function(e) {
                        this._checkMore()
                    }.bind(this)), this.nodes.more.addEventListener("click", function(e) {
                        this.scrollToBottom()
                    }.bind(this))
                }
            }, {
                key: "addComment",
                value: function(e) {
                    e = a.default.merge(this.cfg, e);
                    var t = new s.default(e);
                    this.commentToPush.push(t), this.pushToWindow()
                }
            }, {
                key: "_removeOverflowComment",
                value: function() {
                    var e = this.nodes.commentInner.childNodes;
                    for (this.commentList.splice(0, e.length - this.cfg.maxLength); e.length > this.cfg.maxLength;)
                        this.nodes.commentInner.removeChild(e[0])
                }
            }, {
                key: "updateComment",
                value: function(e) {}
            }, {
                key: "pushToWindow",
                value: function() {
                    var e = this;
                    if (!this.cooldown && this.commentToPush.length) {
                        var t = this._checkScroll();
                        this.commentToPush.forEach(function(t) {
                            var n = e.commentToPush.shift();
                            e.commentList.push(n);
                            var r = n.render(),
                                o = e.nodes.commentInner.lastChild,
                                i = e.commentList[e.commentList.length - 1];
                            e.cfg.mergeComment && o && n.cfg.shouldMerge && i.cfg.shouldMerge && r.className === o.className && e.nodes.commentInner.removeChild(e.nodes.commentInner.lastChild), e.nodes.commentInner.appendChild(r), e._checkMore(r)
                        }), t && this.scrollToBottom(), this._removeOverflowComment(), this.cooldown = !0, clearTimeout(this.cooldownTimeout), this.cooldownTimeout = setTimeout(function() {
                            e.cooldown = !1, e.pushToWindow()
                        }, this.cfg.cooldownPeriod)
                    }
                }
            }, {
                key: "clear",
                value: function() {
                    this.commentList = [], this.commentToPush = [], this.nodes.commentInner.innerHTML = "", this._checkMore()
                }
            }, {
                key: "scrollToBottom",
                value: function() {
                    var e = this.nodes.commentInner.offsetHeight - this.nodes.commentOuter.offsetHeight;
                    e > 0 && (this.nodes.commentOuter.scrollTop = e)
                }
            }, {
                key: "_checkScroll",
                value: function() {
                    return !!this.cfg.alwaysScroll || !!this.cfg.autoScroll && this.nodes.commentInner.offsetHeight - this.nodes.commentOuter.offsetHeight - this.nodes.commentOuter.scrollTop <= this.cfg.autoScrollThrottle
                }
            }, {
                key: "_checkMore",
                value: function(e) {
                    var t = Array.prototype.slice.call(document.querySelectorAll('[data-more="true"]'), 0);
                    e && t.push(e);
                    var n = this.nodes.commentOuter.scrollTop + this.nodes.commentOuter.offsetHeight,
                        r = 0;
                    t.forEach(function(e) {
                        n > e.offsetTop ? e.removeAttribute("data-more") : (e.setAttribute("data-more", "true"), ++r)
                    }), this.cfg.showMore && r > 0 ? (this.nodes.more.innerHTML = r + "条新评论", this.nodes.more.style.display = "block") : this.nodes.more.style.display = "none"
                }
            }], [{
                key: "_createDiv",
                value: function(e, t) {
                    var n = document.createElement("div");
                    return n.className = t, e.appendChild(n), n
                }
            }]), e
        }();
    t.ChatWindow = p
}, function(e, t) {
    "use strict";
    var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    };
    e.exports = {
        mix: function(e, t, n, r, o) {
            var i;
            return Array.prototype.slice.call(arguments, 1).forEach(function(t) {
                if (t)
                    for (var n in t)
                        void 0 !== (i = t[n]) && (e[n] = i)
            }), e
        },
        merge: function() {
            var e = Array.prototype.slice.call(arguments, 0);
            return this.mix.apply(null, [{}].concat(e))
        },
        isObject: function(e) {
            return "object" == (void 0 === e ? "undefined" : n(e))
        },
        isRegExp: function(e) {
            return e instanceof RegExp
        },
        isArray: function(e) {
            return "[object Array]" == Object.prototype.toString.call(e)
        },
        isFunction: function(e) {
            return e instanceof Function
        },
        isString: function(e) {
            return "string" == typeof e
        },
        isNumber: function(e) {
            return "number" == typeof e
        }
    }
}, function(e, t, n) {
    "use strict";
    function r(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = function() {
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
        i = function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }(n(202)),
        a = {
            class: "",
            backgroundColor: "",
            borderRadius: 2,
            shouldMerge: !1
        },
        s = function() {
            function e(t) {
                r(this, e), t = i.default.merge(a, t), this.cfg = t
            }
            return o(e, [{
                key: "render",
                value: function() {
                    var e = document.createElement("div");
                    return e.className = "comment " + this.cfg.class, e.style.backgroundColor = this.cfg.backgroundColor, e.style.borderRadius = this.cfg.borderRadius + "px", e.innerHTML = this.cfg.content, e
                }
            }]), e
        }();
    t.default = s
}, function(e, t, n) {
    "use strict";
    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    function o(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.LikeAnim = void 0;
    var i = function() {
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
        a = r(n(205)),
        s = r(n(206)),
        l = {
            canvasId: "J_LiveAnimCanvas",
            showLikeBtn: !0,
            likeBtnImg: "//img.alicdn.com/tfs/TB17.kVLXXXXXXAapXXXXXXXXXX-72-74.png",
            likeBtnWidth: 36,
            likeBtnHeight: 36,
            likeBtnClass: "live-anim-btn",
            likeBtnId: "J_LiveAnimBtn",
            canvasIconOpacity: .8,
            icons: ["//gw.alicdn.com/tfs/TB1lqdXLpXXXXcwXpXXXXXXXXXX-154-181.png", "//gw.alicdn.com/tfs/TB1T6lgLpXXXXajXpXXXXXXXXXX-154-181.png", "//gw.alicdn.com/tfs/TB1V.tmLpXXXXaVXXXXXXXXXXXX-154-181.png", "//gw.alicdn.com/tfs/TB1mHc4LXXXXXaoXVXXXXXXXXXX-154-181.png", "//gw.alicdn.com/tfs/TB1h.33LXXXXXaGXVXXXXXXXXXX-154-181.png", "//gw.alicdn.com/tfs/TB1KXtoLpXXXXahXXXXXXXXXXXX-154-181.png", "//gw.alicdn.com/tfs/TB1oqAYLXXXXXaGaXXXXXXXXXXX-154-181.png", "//gw.alicdn.com/tfs/TB1uYXjLpXXXXchXXXXXXXXXXXX-154-181.png", "//gw.alicdn.com/tfs/TB1oWMZLXXXXXa.XVXXXXXXXXXX-154-181.png"],
            iconWidth: 80,
            iconHeight: 80,
            giftNumberLimit: 40,
            xSpeedBase: 1,
            xSpeedRandomRange: .5,
            xLimitRandomRange: .2,
            xLimitAttenuationRate: .95,
            ySpeedBase: 3,
            ySpeedRandomRange: .3,
            yLimitRandomRange: .3,
            stayDuration: 200,
            visualSizeRatio: 2,
            activeFading: !0
        },
        c = function() {
            function e(t) {
                o(this, e), (t = t || {}).container || console.warn("未找到 like-anim 容器!"), this.cfg = a.default.merge(l, t), this.clickHandler = t.clickHandler || function() {}, this.initCanvas(t.container)
            }
            return i(e, [{
                key: "initCanvas",
                value: function() {
                    try {
                        var e = document.querySelector(this.cfg.container)
                    } catch (e) {
                        return void console.warn(e)
                    }
                    var t = e.clientWidth,
                        n = e.clientHeight;
                    if (t && n) {
                        e.className += " live-anim-wrap", this.cfg.canvasWidth = Math.floor(t * this.cfg.visualSizeRatio), this.cfg.canvasHeight = Math.floor(n * this.cfg.visualSizeRatio);
                        var r = document.createElement("canvas");
                        if (r.style.width = t + "px", r.style.height = n + "px", r.setAttribute("id", this.cfg.canvasId), r.setAttribute("width", this.cfg.canvasWidth), r.setAttribute("height", this.cfg.canvasHeight), this.cxt = r.getContext("2d"), this.cxt.globalAlpha = this.cfg.canvasIconOpacity, e.appendChild(r), this.cfg.showLikeBtn) {
                            var o = document.createElement("div");
                            o.style.backgroundImage = "url('" + this.cfg.likeBtnImg + "')", o.style.width = this.cfg.likeBtnWidth + "px", o.style.height = this.cfg.likeBtnHeight + "px", o.style.marginLeft = -this.cfg.likeBtnWidth / 2 + "px", o.className = this.cfg.likeBtnClass, o.setAttribute("id", this.cfg.likeBtnId), o.addEventListener("click", this.clickHandler), e.appendChild(o)
                        }
                        this.initComplete = !0, this.giftArr = []
                    }
                }
            }, {
                key: "like",
                value: function(e) {
                    if (this.initComplete && !(this.giftArr.length > this.cfg.giftNumberLimit)) {
                        if (!(e = e || {}).iconSrc) {
                            if (!this.cfg.icons.length)
                                return;
                            this.i = this.i ? (this.i + 1) % this.cfg.icons.length : 1, e.iconSrc = this.cfg.icons[this.i]
                        }
                        e = a.default.merge(this.cfg, e);
                        var t = new s.default(e);
                        this.giftArr.push(t), this.startLoop()
                    }
                }
            }, {
                key: "startLoop",
                value: function() {
                    var e = this;
                    if (!this.animFrame) {
                        this.animFrame = window.requestAnimFrame(function t() {
                            e.cxt.clearRect(0, 0, e.cfg.canvasWidth, e.cfg.canvasHeight), e.recycle(), e.giftArr.length ? (e.giftArr.forEach(function(e) {
                                e.move()
                            }), e.animFrame = window.requestAnimFrame(t)) : e.stopLoop()
                        })
                    }
                }
            }, {
                key: "stopLoop",
                value: function() {
                    window.cancelAnimationFrame(this.animFrame), delete this.animFrame
                }
            }, {
                key: "recycle",
                value: function() {
                    var e = [];
                    this.giftArr.forEach(function(t) {
                        !t.finished && e.push(t)
                    }), this.giftArr = e
                }
            }]), e
        }();
    window.requestAnimFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(e) {
        return window.setTimeout(e, 1e3 / 60)
    }, t.LikeAnim = c
}, function(e, t) {
    "use strict";
    var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    };
    e.exports = {
        mix: function(e, t, n, r, o) {
            var i;
            return Array.prototype.slice.call(arguments, 1).forEach(function(t) {
                if (t)
                    for (var n in t)
                        void 0 !== (i = t[n]) && (e[n] = i)
            }), e
        },
        merge: function() {
            var e = Array.prototype.slice.call(arguments, 0);
            return this.mix.apply(null, [{}].concat(e))
        },
        isObject: function(e) {
            return "object" == (void 0 === e ? "undefined" : n(e))
        },
        isRegExp: function(e) {
            return e instanceof RegExp
        },
        isArray: function(e) {
            return "[object Array]" == Object.prototype.toString.call(e)
        },
        isFunction: function(e) {
            return e instanceof Function
        },
        isString: function(e) {
            return "string" == typeof e
        },
        isNumber: function(e) {
            return "number" == typeof e
        }
    }
}, function(e, t) {
    "use strict";
    function n(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
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
            function e(t) {
                n(this, e), t = t || {}, this.cfg = t, this.drawIcon()
            }
            return r(e, [{
                key: "drawIcon",
                value: function() {
                    var e = this;
                    this.iconElem = new Image, this.iconElem.onload = function() {
                        var t = document.getElementById(e.cfg.canvasId);
                        e.cxt = t.getContext("2d"), e.x = (e.cfg.canvasWidth - e.cfg.iconWidth) / 2, e.y = e.cfg.canvasHeight - e.cfg.iconHeight - 40, e.directLeft = Math.random() > .5, e.xSpeed = 1 - (1 - 2 * Math.random()) * e.cfg.xSpeedRandomRange, e.ySpeed = 1 - (1 - 2 * Math.random()) * e.cfg.ySpeedRandomRange, e.maxHorizontalOffset = 1 - (1 - Math.random()) * e.cfg.xLimitRandomRange, e.maxVerticalOffset = 1 - (1 - Math.random()) * e.cfg.yLimitRandomRange, e.cxt.drawImage(e.iconElem, e.x, e.y, e.cfg.iconWidth, e.cfg.iconHeight)
                    }, this.iconElem.src = this.cfg.iconSrc
                }
            }, {
                key: "move",
                value: function() {
                    var e = this;
                    if (this.cxt && !this.destroy) {
                        var t = this.cfg.xSpeedBase * this.xSpeed,
                            n = this.cfg.ySpeedBase * this.ySpeed;
                        this.y - n > (1 - this.maxVerticalOffset) * this.cfg.canvasHeight ? (this.y -= n, this.directLeft ? this.x - t >= this.cfg.canvasWidth * (1 - this.maxHorizontalOffset) / 2 ? this.x -= t : (this.directLeft = !this.directLeft, this.maxHorizontalOffset *= this.cfg.xLimitAttenuationRate) : this.x + this.cfg.iconWidth + t <= this.cfg.canvasWidth * (1 + this.maxHorizontalOffset) / 2 ? this.x += t : (this.directLeft = !this.directLeft, this.maxHorizontalOffset *= this.cfg.xLimitAttenuationRate)) : this.finishTimeout = this.finishTimeout || setTimeout(function() {
                            e.finished = !0
                        }, this.cfg.stayDuration), this.cfg.activeFading && (this.cxt.globalAlpha = (this.y / this.cfg.canvasHeight).toFixed(2)), this.cxt.drawImage(this.iconElem, this.x, this.y, this.cfg.iconWidth, this.cfg.iconHeight)
                    }
                }
            }]), e
        }();
    t.default = o
}, function(e, t, n) {
    (function() {
        "use strict";
        var n = function(e) {
                return "string" == typeof e
            },
            r = function(e) {
                return "[object Array]" === toString.call(e)
            },
            o = function(e) {
                return !r(e) && e instanceof Object
            },
            i = function(e) {
                return "number" == typeof e
            },
            a = function(e) {
                return "boolean" == typeof e
            },
            s = function(e) {
                var t,
                    n,
                    r = "";
                for (t = 0; t < e.length; t += 1)
                    switch (n = e.charAt(t)) {
                    case "<":
                        r += "&lt;";
                        break;
                    case ">":
                        r += "&gt;";
                        break;
                    case "&":
                        r += "&amp;";
                        break;
                    case "/":
                        r += "&#x2F;";
                        break;
                    case '"':
                        r += "&quot;";
                        break;
                    case "'":
                        r += "&#x27;";
                        break;
                    default:
                        r += n
                    }
                return r
            },
            l = function(e) {
                return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;")
            },
            c = function(e, t) {
                var u,
                    d,
                    f,
                    p;
                if (n(e))
                    p = e.length, u = "charForLoopStrategy" === t ? s(e) : "regexStrategy" === t ? l(e) : p > 32 ? l(e) : s(e);
                else if (i(e) || a(e))
                    u = e;
                else if (r(e))
                    for (u = [], f = 0; f < e.length; f += 1)
                        u.push(c(e[f]));
                else if (o(e)) {
                    u = {};
                    for (d in e)
                        e.hasOwnProperty(d) && (u[d] = c(e[d]))
                }
                return u
            };
        void 0 !== e && e.exports && (t = e.exports = c), t.xssEscape = c
    }).call(this)
}, function(e, t) {
    e.exports = {
        render: function() {
            var e = this,
                t = e.$createElement,
                n = e._self._c || t;
            return n("div", {
                staticClass: "feed-component"
            }, [n("div", {
                staticClass: "feed-container",
                style: {
                    height: e.feedHeight + "px"
                },
                attrs: {
                    id: "J_Feed_Containter"
                }
            }), e._v(" "), n("div", {
                staticClass: "interact-box"
            }, [n("div", {
                staticClass: "like-container",
                attrs: {
                    id: "J_Like_Container"
                }
            }), e._v(" "), n("div", {
                staticClass: "comment-container"
            }, [e.commentAllow ? n("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.comment,
                    expression: "comment"
                }],
                staticClass: "comment-input",
                attrs: {
                    type: "text",
                    placeholder: "跟主播聊什么？"
                },
                domProps: {
                    value: e.comment
                },
                on: {
                    keyup: function(t) {
                        if (!("button" in t) && e._k(t.keyCode, "enter", 13, t.key))
                            return null;
                        e.sendMsg()
                    },
                    input: function(t) {
                        t.target.composing || (e.comment = t.target.value)
                    }
                }
            }) : e._e(), e._v(" "), e.commentAllow ? n("div", {
                staticClass: "comment-btn",
                class: {
                    disabled: e.videoEnd
                },
                on: {
                    click: function(t) {
                        e.sendMsg()
                    }
                }
            }, [e._v("发送")]) : e._e(), e._v(" "), n("div", {
                staticClass: "like-btn",
                class: {
                    disabled: e.videoEnd
                },
                on: {
                    click: function(t) {
                        e.doLike()
                    }
                }
            }, [n("i", {
                staticClass: "icon"
            }, [e._v("")]), e._v(" " + e._s(e.likeCount || 0) + "\n\t\t\t")])])])])
        },
        staticRenderFns: []
    }
}, function(e, t) {
    e.exports = {
        render: function() {
            var e = this,
                t = e.$createElement,
                n = e._self._c || t;
            return n("div", {
                staticClass: "lr-group",
                attrs: {
                    id: "J_lr-layout-vertical"
                }
            }, [n("div", {
                staticClass: "lr-col-item"
            }, [n("lr-header", {
                attrs: {
                    title: e.video.title,
                    "is-replay": e.isReplay,
                    "account-id": e.video.accountId
                }
            }), e._v(" "), n("div", {
                staticClass: "lr-player-movement f-clearfix"
            }, [n("div", {
                class: ["lr-player-wrapper", {
                    "lr-replay-wrapper": e.isReplay
                }]
            }, [e.isReplay ? n("div", {
                staticClass: "lib-img lr-blur-cover",
                attrs: {
                    "data-src": e.video.coverImg
                }
            }) : e._e(), e._v(" "), n("lr-video-panel", {
                attrs: {
                    "is-replay": e.isReplay,
                    "is-horizontal": !1
                }
            })], 1), e._v(" "), e.isReplay ? e._e() : n("div", {
                staticClass: "lr-movement-wrapper"
            }, [n("lr-feed", {
                attrs: {
                    "is-horizontal": !1
                }
            })], 1)])], 1), e._v(" "), n("div", {
                staticClass: "lr-col-item lr-item-wrapper appear-item-list",
                attrs: {
                    "data-spm": "2278269"
                }
            }, [n("div", {
                staticClass: "lr-reco-item"
            }, [e._m(0), e._v(" "), e.hotList.length > 0 ? n("ul", {
                staticClass: "lr-reco-item-list"
            }, e._l(e.hotList, function(t) {
                return n("li", {
                    staticClass: "lr-reco-item-li"
                }, [n("a", {
                    attrs: {
                        target: "_blank",
                        href: t.itemH5TaokeUrl
                    }
                }, [n("div", {
                    staticClass: "lr-reco-item-pic f-bg-cover lib-img",
                    attrs: {
                        "data-size": "240x240",
                        "data-src": t.itemPic
                    }
                }, [n("i", {
                    staticClass: "lr-reco-icon icon f-inline"
                }, [e._v("HOT")])])]), e._v(" "), n("div", {
                    staticClass: "lr-reco-price"
                }, [n("i", [e._v("￥")]), e._v(" "), n("span", [e._v(e._s(t.itemPrice))])])])
            })) : n("div", {
                staticClass: "lr-no-item"
            }, [e._v("没有最热推荐")])]), e._v(" "), n("div", {
                staticClass: "lr-all-item",
                attrs: {
                    id: "J_item_wrapper"
                }
            }, [n("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.newShare,
                    expression: "newShare"
                }],
                staticClass: "lr-liveshare-tip",
                on: {
                    click: function(t) {
                        e.mergeItemList()
                    }
                }
            }, [e._v("主播分享了新的宝贝")]), e._v(" "), n("h3", {
                staticClass: "live-title"
            }, [n("span", {
                staticClass: "live-title-txt live-title-txt-small"
            }, [e._v("全部宝贝 "), n("span", {
                staticClass: "text-pink"
            }, [e._v(e._s(e.itemCount))])])]), e._v(" "), e.itemList.length > 0 ? n("ul", {
                ref: "itemlist",
                staticClass: "lr-all-item-list",
                class: {
                    "f-list-scrollable": e.enableScroll
                }
            }, e._l(e.itemList, function(e) {
                return n("lr-item", {
                    attrs: {
                        "is-horizontal": !1,
                        itemgroup: e
                    }
                })
            })) : n("div", {
                staticClass: "lr-no-item"
            }, [e._v("主播还没有分享宝贝")]), e._v(" "), e.showMoreView ? n("div", {
                staticClass: "lr-view-more",
                on: {
                    click: function(t) {
                        e.activeScroll()
                    }
                }
            }, [e._v("查看更多")]) : e._e()])])])
        },
        staticRenderFns: [function() {
            var e = this,
                t = e.$createElement,
                n = e._self._c || t;
            return n("h3", {
                staticClass: "live-title"
            }, [n("span", {
                staticClass: "live-title-txt live-title-txt-small"
            }, [e._v("最热推荐")])])
        }]
    }
}, function(e, t, n) {
    n(211);
    var r = n(20)(n(213), n(214), null, null);
    e.exports = r.exports
}, function(e, t, n) {
    var r = n(212);
    "string" == typeof r && (r = [[e.id, r, ""]]), r.locals && (e.exports = r.locals);
    n(18)("0dd418cc", r, !0)
}, function(e, t, n) {
    (e.exports = n(11)()).push([e.id, "#J_lr-layout-horizontal{background:none}#J_lr-layout-horizontal .lr-player-movement{width:100%;position:relative;height:450px}#J_lr-layout-horizontal .lr-horizonral-left{float:left;width:810px}#J_lr-layout-horizontal .lr-horizonral-left.lr-replay-wrapper{width:100%}#J_lr-layout-horizontal .lr-player-wrapper{height:450px;width:100%}#J_lr-layout-horizontal .video-player-wrapper{height:450px}#J_lr-layout-horizontal .lr-video-err-mask{padding-top:180px}#J_lr-layout-horizontal .lr-movement-wrapper{width:380px;margin-left:810px}#J_room-container .lr-item-wrapper{background:#f8f8f8;width:100%;box-shadow:-5px 0 10px rgba(0,0,0,.04)}#J_lr-layout-horizontal .lr-reco-item{margin-bottom:20px;background:#fff}#J_lr-layout-horizontal .lr-reco-item-list{padding:12px 0;overflow:hidden;border-top:1px solid #e7e7e7}#J_lr-layout-horizontal .lr-reco-item-li{float:left;margin-left:12px;position:relative}#J_lr-layout-horizontal .lr-reco-item-li.lr-reco-replay-item-li{width:380px}#J_lr-layout-horizontal .lr-reco-item-li.lr-reco-replay-item-li .lr-reco-info{width:235px}#J_lr-layout-horizontal .lr-reco-item-li .lr-item-action{left:130px;right:auto}#J_lr-layout-horizontal .lr-reco-title{height:40px;font-size:14px;color:#3d3f45;line-height:1.5;overflow:hidden;text-overflow:ellipsis}#J_lr-layout-horizontal .lr-reco-item-pic{float:left;position:relative;height:120px;width:120px}#J_lr-layout-horizontal .lr-reco-info{float:left;padding-left:12px;width:120px}#J_lr-layout-horizontal .lr-reco-icon{position:absolute;top:6px;right:4px;height:16px;width:28px;background:#ff2851;border-radius:2px;text-align:center;font-size:12.5px;color:#fff;line-height:18px;-webkit-transform:scale(.8);transform:scale(.8)}#J_lr-layout-horizontal .lr-reco-price{padding:6px 0 12px}#J_lr-layout-horizontal .lr-reco-price>i,#J_lr-layout-horizontal .lr-reco-price>span{font-size:12px;color:#ff2851;font-style:normal}#J_lr-layout-horizontal .lr-reco-price>span{font-weight:700;-webkit-font-smoothing:auto}#J_lr-layout-horizontal .lr-all-item .live-title{border-bottom:1px solid #e7e7e7}#J_lr-layout-horizontal .lr-all-item{background:#fff;overflow:hidden;position:relative}#J_lr-layout-horizontal .lr-all-item .lr-view-more{bottom:0}", ""])
}, function(e, t, n) {
    "use strict";
    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = r(n(49)),
        i = r(n(187)),
        a = r(n(192)),
        s = r(n(197)),
        l = r(n(122)),
        c = r(n(126));
    t.default = {
        components: {
            lrHeader: i.default,
            lrVideoPanel: o.default,
            lrItem: a.default,
            lrFeed: s.default
        },
        props: {
            isReplay: {
                type: Boolean,
                default: !1
            }
        },
        data: function() {
            return {
                windowH: document.documentElement.clientHeight,
                imgHelper: lib.img({
                    class: "lib-img",
                    dataSrc: "data-src",
                    size: "200x200"
                }),
                enableScroll: !1
            }
        },
        store: l.default,
        vuex: {
            getters: {
                msgScope: function(e) {
                    return e.msgScope
                },
                newShare: function(e) {
                    return e.newShare
                },
                video: function(e) {
                    return e.video
                },
                itemList: function(e) {
                    return e.itemList
                },
                hotList: function(e) {
                    return e.hotList
                }
            },
            actions: c.default
        },
        methods: {
            scrollToFix: function() {
                var e = this.$refs.feed,
                    t = e.getBoundingClientRect().top - document.body.getBoundingClientRect().top,
                    n = document.getElementById("J_replay-showcase").getBoundingClientRect().top - document.body.getBoundingClientRect().top,
                    r = document.documentElement.clientHeight;
                window.addEventListener("scroll", function() {
                    var o = -document.body.getBoundingClientRect().top;
                    o > t && o + r - 20 < n ? (e.style.position = "fixed", e.style.top = "0px") : (e.style.position = "absolute", e.style.top = "auto")
                })
            },
            activeScroll: function() {
                var e = this;
                this.enableScroll = !0, this.$refs.itemlist.scrollTop = 509, this.$refs.itemlist.addEventListener("scroll", function() {
                    e.imgHelper.fireLazyload()
                })
            }
        },
        mounted: function() {
            0 !== this.video.status && 3 !== this.video.status || this.scrollToFix()
        },
        computed: {
            itemCount: function() {
                return this.itemList.reduce(function(e, t) {
                    return e + t.goodsList.length
                }, 0)
            },
            showMoreView: function() {
                return !this.enableScroll && this.itemCount > 4
            }
        }
    }
}, function(e, t) {
    e.exports = {
        render: function() {
            var e = this,
                t = e.$createElement,
                n = e._self._c || t;
            return n("div", {
                staticClass: "lr-group f-clearfix",
                attrs: {
                    id: "J_lr-layout-horizontal"
                }
            }, [n("div", {
                class: ["lr-horizonral-left", {
                    "lr-replay-wrapper": e.isReplay
                }]
            }, [n("div", {
                staticClass: "lr-col-item"
            }, [n("lr-header", {
                attrs: {
                    title: e.video.title,
                    "is-replay": e.isReplay,
                    "account-id": e.video.accountId
                }
            }), e._v(" "), n("div", {
                staticClass: "lr-player-movement"
            }, [n("div", {
                staticClass: "lr-player-wrapper"
            }, [n("lr-video-panel", {
                attrs: {
                    "is-replay": e.isReplay,
                    "is-horizontal": !0
                }
            })], 1)])], 1), e._v(" "), n("div", {
                staticClass: "lr-col-item lr-item-wrapper"
            }, [n("div", {
                staticClass: "lr-reco-item appear-item-list"
            }, [e._m(0), e._v(" "), e.hotList.length > 0 ? n("ul", {
                staticClass: "lr-reco-item-list"
            }, [e._l(e.hotList, function(t) {
                return [n("li", {
                    staticClass: "lr-reco-item-li",
                    class: {
                        "lr-reco-replay-item-li": e.isReplay
                    }
                }, [n("a", {
                    attrs: {
                        target: "_blank",
                        href: t.itemH5TaokeUrl
                    }
                }, [n("div", {
                    staticClass: "lr-reco-item-pic f-bg-cover lib-img",
                    attrs: {
                        "data-size": "240x240",
                        "data-src": t.itemPic
                    }
                }, [n("i", {
                    staticClass: "lr-reco-icon icon f-inline"
                }, [e._v("HOT")])])]), e._v(" "), n("div", {
                    staticClass: "lr-reco-info"
                }, [n("div", {
                    staticClass: "lr-reco-title f-two-line"
                }, [e._v(e._s(t.itemName))]), e._v(" "), n("div", {
                    staticClass: "lr-reco-price"
                }, [n("i", [e._v("￥")]), e._v(" "), n("span", [e._v(e._s(t.itemPrice))])]), e._v(" "), n("a", {
                    staticClass: "lr-item-action f-inline",
                    attrs: {
                        href: t.itemH5TaokeUrl
                    }
                }, [e._v("立即查看")])])])]
            })], 2) : n("div", {
                staticClass: "lr-no-item"
            }, [e._v("没有最热推荐")])]), e._v(" "), n("div", {
                staticClass: "lr-all-item",
                attrs: {
                    id: "J_item_wrapper"
                }
            }, [n("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.newShare,
                    expression: "newShare"
                }],
                staticClass: "lr-liveshare-tip",
                on: {
                    click: function(t) {
                        e.mergeItemList()
                    }
                }
            }, [e._v("主播分享了新的宝贝")]), e._v(" "), n("h3", {
                staticClass: "live-title"
            }, [n("span", {
                staticClass: "live-title-txt live-title-txt-big"
            }, [e._v("全部宝贝 "), n("span", {
                staticClass: "text-pink"
            }, [e._v(e._s(e.itemCount))])])]), e._v(" "), e.itemList.length > 0 ? n("ul", {
                ref: "itemlist",
                staticClass: "lr-all-item-list",
                class: {
                    "f-list-scrollable": e.enableScroll
                }
            }, e._l(e.itemList, function(e) {
                return n("lr-item", {
                    attrs: {
                        "is-horizontal": !0,
                        itemgroup: e
                    }
                })
            })) : n("div", {
                staticClass: "lr-no-item"
            }, [e._v("主播还没有分享宝贝")]), e._v(" "), e.showMoreView ? n("div", {
                staticClass: "lr-view-more",
                on: {
                    click: function(t) {
                        e.activeScroll()
                    }
                }
            }, [e._v("查看更多")]) : e._e()])])]), e._v(" "), e.isReplay ? e._e() : n("div", {
                ref: "feed",
                staticClass: "lr-movement-wrapper",
                style: {
                    height: e.windowH + "px"
                }
            }, [n("lr-feed", {
                attrs: {
                    "is-horizontal": !0
                }
            })], 1)])
        },
        staticRenderFns: [function() {
            var e = this,
                t = e.$createElement,
                n = e._self._c || t;
            return n("h3", {
                staticClass: "live-title"
            }, [n("span", {
                staticClass: "live-title-txt live-title-txt-big"
            }, [e._v("热门推荐")])])
        }]
    }
}, function(e, t, n) {
    n(216);
    var r = n(20)(n(218), n(219), null, null);
    e.exports = r.exports
}, function(e, t, n) {
    var r = n(217);
    "string" == typeof r && (r = [[e.id, r, ""]]), r.locals && (e.exports = r.locals);
    n(18)("f78893e8", r, !0)
}, function(e, t, n) {
    (e.exports = n(11)()).push([e.id, '.toast-wrapper{position:fixed;top:0;right:0;bottom:0;left:0;z-index:100;margin:auto;height:1px;text-align:center}.toast-cont{padding:0 20px;height:40px;line-height:40px;font-size:13px;color:#fff;text-align:center;background:rgba(0,0,0,.7);border-radius:4px}.toast-cont,.toast-wrapper:after{display:inline-block;vertical-align:middle}.toast-wrapper:after{content:"";height:100%}.fade-enter-active,.fade-leave-active{transition:opacity .5s}.fade-enter,.fade-leave-active{opacity:0}', ""])
}, function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = {
        computed: {
            isShow: function() {
                return "" != this.txt
            }
        },
        props: {
            txt: {
                type: String,
                default: function() {
                    return ""
                }
            }
        },
        methods: {
            show: function(e) {
                var t = this;
                this.isShow = !0, setTimeout(function() {
                    return t.hide()
                }, e || 2e3)
            },
            hide: function() {
                this.txt = ""
            }
        }
    }
}, function(e, t) {
    e.exports = {
        render: function() {
            var e = this,
                t = e.$createElement,
                n = e._self._c || t;
            return n("transition", {
                attrs: {
                    name: "fade"
                }
            }, [e.isShow ? n("div", {
                staticClass: "toast-wrapper"
            }, [n("div", {
                staticClass: "toast-cont"
            }, [e._v(e._s(e.txt))])]) : e._e()])
        },
        staticRenderFns: []
    }
}, function(e, t) {
    e.exports = {
        render: function() {
            var e = this,
                t = e.$createElement,
                n = e._self._c || t;
            return n("div", {
                attrs: {
                    id: "J_room-container"
                }
            }, [n("header-bar"), e._v(" "), n("div", {
                attrs: {
                    id: "J_live-main"
                }
            }, [e.showHorizontal ? n("horizontal-panel", {
                attrs: {
                    "is-replay": e.isReplay
                }
            }) : e._e(), e._v(" "), e.showVertical ? n("vertical-panel", {
                attrs: {
                    "is-replay": e.isReplay
                }
            }) : e._e(), e._v(" "), e.hasVideo ? e._e() : n("div", {
                staticClass: "lr-status-desc-wrapper"
            }, [n("p", {
                staticClass: "lr-status-desc"
            }, [e._v(e._s(e.errMsg))])]), e._v(" "), n("showcase-list", {
                attrs: {
                    "data-spm": "2278280",
                    page: Math.ceil(e.replayVideos.length / 4)
                }
            }, [n("div", {
                staticClass: "lr-showcase-body",
                attrs: {
                    slot: "showcase-list-body"
                },
                slot: "showcase-list-body"
            }, [e._l(e.replayVideos, function(e, t) {
                return n("lr-replay-item", {
                    attrs: {
                        "replay-item": e,
                        "track-by": "index"
                    }
                })
            }), e._v(" "), n("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: 0 === e.replayVideos.length && e.replayVideosLoaded,
                    expression: "(replayVideos.length === 0 && replayVideosLoaded)"
                }],
                staticClass: "lr-content-empty"
            }, [e._v("主播还没有回放内容")]), e._v(" "), n("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: !e.replayVideosLoaded,
                    expression: "(!replayVideosLoaded)"
                }],
                staticClass: "lr-content-empty"
            }, [e._v("数据加载中…")])], 2)]), e._v(" "), n("div", {
                staticClass: "lr-group appear-more-videos",
                attrs: {
                    id: "J_more-live",
                    "data-spm": "2278281"
                }
            }, [e._m(0), e._v(" "), n("div", {
                staticClass: "more-live-list"
            }, [e._l(e.moreVideos, function(e) {
                return n("lr-morelive-item", {
                    attrs: {
                        "more-item": e
                    }
                })
            }), e._v(" "), n("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: 0 === e.moreVideos.length && e.moreVideosLoaded,
                    expression: "(moreVideos.length === 0 && moreVideosLoaded)"
                }],
                staticClass: "lr-content-empty"
            }, [e._v("没有更多直播")]), e._v(" "), n("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: !e.moreVideosLoaded,
                    expression: "(!moreVideosLoaded)"
                }],
                staticClass: "lr-content-empty"
            }, [e._v("数据加载中…")])], 2)])], 1), e._v(" "), n("toast", {
                ref: "toast",
                attrs: {
                    txt: e.toastMsg
                }
            })], 1)
        },
        staticRenderFns: [function() {
            var e = this,
                t = e.$createElement,
                n = e._self._c || t;
            return n("h3", {
                staticClass: "live-title"
            }, [n("span", {
                staticClass: "live-title-txt live-title-txt-big"
            }, [e._v("更多直播")])])
        }]
    }
}]);

