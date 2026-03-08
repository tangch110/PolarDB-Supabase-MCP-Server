"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/tools/polardb-tools.ts
var polardb_tools_exports = {};
__export(polardb_tools_exports, {
  getPolarDBTools: () => getPolarDBTools
});
module.exports = __toCommonJS(polardb_tools_exports);

// ../mcp-utils/dist/index.js
var cl = Object.create;
var ws = Object.defineProperty;
var dl = Object.getOwnPropertyDescriptor;
var fl = Object.getOwnPropertyNames;
var hl = Object.getPrototypeOf;
var pl = Object.prototype.hasOwnProperty;
var B = (a16, e) => () => (e || a16((e = { exports: {} }).exports, e), e.exports);
var ml = (a16, e, t, s) => {
  if (e && typeof e == "object" || typeof e == "function") for (let r of fl(e)) !pl.call(a16, r) && r !== t && ws(a16, r, { get: () => e[r], enumerable: !(s = dl(e, r)) || s.enumerable });
  return a16;
};
var vl = (a16, e, t) => (t = a16 != null ? cl(hl(a16)) : {}, ml(e || !a16 || !a16.__esModule ? ws(t, "default", { value: a16, enumerable: true }) : t, a16));
var sn = B((zt, an) => {
  "use strict";
  (function(a16, e) {
    typeof zt == "object" && typeof an < "u" ? e(zt) : typeof define == "function" && define.amd ? define(["exports"], e) : e(a16.URI = a16.URI || {});
  })(zt, function(a16) {
    "use strict";
    function e() {
      for (var p = arguments.length, f = Array(p), g = 0; g < p; g++) f[g] = arguments[g];
      if (f.length > 1) {
        f[0] = f[0].slice(0, -1);
        for (var P = f.length - 1, E = 1; E < P; ++E) f[E] = f[E].slice(1, -1);
        return f[P] = f[P].slice(1), f.join("");
      } else return f[0];
    }
    function t(p) {
      return "(?:" + p + ")";
    }
    function s(p) {
      return p === void 0 ? "undefined" : p === null ? "null" : Object.prototype.toString.call(p).split(" ").pop().split("]").shift().toLowerCase();
    }
    function r(p) {
      return p.toUpperCase();
    }
    function n(p) {
      return p != null ? p instanceof Array ? p : typeof p.length != "number" || p.split || p.setInterval || p.call ? [p] : Array.prototype.slice.call(p) : [];
    }
    function o(p, f) {
      var g = p;
      if (f) for (var P in f) g[P] = f[P];
      return g;
    }
    function i(p) {
      var f = "[A-Za-z]", g = "[\\x0D]", P = "[0-9]", E = "[\\x22]", j = e(P, "[A-Fa-f]"), W = "[\\x0A]", ne = "[\\x20]", le = t(t("%[EFef]" + j + "%" + j + j + "%" + j + j) + "|" + t("%[89A-Fa-f]" + j + "%" + j + j) + "|" + t("%" + j + j)), Pe = "[\\:\\/\\?\\#\\[\\]\\@]", te = "[\\!\\$\\&\\'\\(\\)\\*\\+\\,\\;\\=]", me = e(Pe, te), xe = p ? "[\\xA0-\\u200D\\u2010-\\u2029\\u202F-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF]" : "[]", he = p ? "[\\uE000-\\uF8FF]" : "[]", ie = e(f, P, "[\\-\\.\\_\\~]", xe), ve = t(f + e(f, P, "[\\+\\-\\.]") + "*"), ue = t(t(le + "|" + e(ie, te, "[\\:]")) + "*"), wr = t(t("25[0-5]") + "|" + t("2[0-4]" + P) + "|" + t("1" + P + P) + "|" + t("[1-9]" + P) + "|" + P), Ne = t(t("25[0-5]") + "|" + t("2[0-4]" + P) + "|" + t("1" + P + P) + "|" + t("0?[1-9]" + P) + "|0?0?" + P), Ue = t(Ne + "\\." + Ne + "\\." + Ne + "\\." + Ne), de = t(j + "{1,4}"), Fe = t(t(de + "\\:" + de) + "|" + Ue), ze = t(t(de + "\\:") + "{6}" + Fe), rr = t("\\:\\:" + t(de + "\\:") + "{5}" + Fe), Rr = t(t(de) + "?\\:\\:" + t(de + "\\:") + "{4}" + Fe), or = t(t(t(de + "\\:") + "{0,1}" + de) + "?\\:\\:" + t(de + "\\:") + "{3}" + Fe), ut = t(t(t(de + "\\:") + "{0,2}" + de) + "?\\:\\:" + t(de + "\\:") + "{2}" + Fe), St = t(t(t(de + "\\:") + "{0,3}" + de) + "?\\:\\:" + de + "\\:" + Fe), wt = t(t(t(de + "\\:") + "{0,4}" + de) + "?\\:\\:" + Fe), Qr = t(t(t(de + "\\:") + "{0,5}" + de) + "?\\:\\:" + de), Jr = t(t(t(de + "\\:") + "{0,6}" + de) + "?\\:\\:"), lr = t([ze, rr, Rr, or, ut, St, wt, Qr, Jr].join("|")), Kr = t(t(ie + "|" + le) + "+"), ha = t(lr + "\\%25" + Kr), Tr = t(lr + t("\\%25|\\%(?!" + j + "{2})") + Kr), al = t("[vV]" + j + "+\\." + e(ie, te, "[\\:]") + "+"), sl = t("\\[" + t(Tr + "|" + lr + "|" + al) + "\\]"), Ps = t(t(le + "|" + e(ie, te)) + "*"), ct = t(sl + "|" + Ue + "(?!" + Ps + ")|" + Ps), dt = t(P + "*"), xs = t(t(ue + "@") + "?" + ct + t("\\:" + dt) + "?"), ft = t(le + "|" + e(ie, te, "[\\:\\@]")), nl = t(ft + "*"), Es = t(ft + "+"), il = t(t(le + "|" + e(ie, te, "[\\@]")) + "+"), ur = t(t("\\/" + nl) + "*"), Wr = t("\\/" + t(Es + ur) + "?"), pa = t(il + ur), Rt = t(Es + ur), Gr = "(?!" + ft + ")", rf = t(ur + "|" + Wr + "|" + pa + "|" + Rt + "|" + Gr), Yr = t(t(ft + "|" + e("[\\/\\?]", he)) + "*"), ht = t(t(ft + "|[\\/\\?]") + "*"), Ss = t(t("\\/\\/" + xs + ur) + "|" + Wr + "|" + Rt + "|" + Gr), ol = t(ve + "\\:" + Ss + t("\\?" + Yr) + "?" + t("\\#" + ht) + "?"), ll = t(t("\\/\\/" + xs + ur) + "|" + Wr + "|" + pa + "|" + Gr), ul = t(ll + t("\\?" + Yr) + "?" + t("\\#" + ht) + "?"), tf = t(ol + "|" + ul), af = t(ve + "\\:" + Ss + t("\\?" + Yr) + "?"), sf = "^(" + ve + ")\\:" + t(t("\\/\\/(" + t("(" + ue + ")@") + "?(" + ct + ")" + t("\\:(" + dt + ")") + "?)") + "?(" + ur + "|" + Wr + "|" + Rt + "|" + Gr + ")") + t("\\?(" + Yr + ")") + "?" + t("\\#(" + ht + ")") + "?$", nf = "^(){0}" + t(t("\\/\\/(" + t("(" + ue + ")@") + "?(" + ct + ")" + t("\\:(" + dt + ")") + "?)") + "?(" + ur + "|" + Wr + "|" + pa + "|" + Gr + ")") + t("\\?(" + Yr + ")") + "?" + t("\\#(" + ht + ")") + "?$", of = "^(" + ve + ")\\:" + t(t("\\/\\/(" + t("(" + ue + ")@") + "?(" + ct + ")" + t("\\:(" + dt + ")") + "?)") + "?(" + ur + "|" + Wr + "|" + Rt + "|" + Gr + ")") + t("\\?(" + Yr + ")") + "?$", lf = "^" + t("\\#(" + ht + ")") + "?$", uf = "^" + t("(" + ue + ")@") + "?(" + ct + ")" + t("\\:(" + dt + ")") + "?$";
      return { NOT_SCHEME: new RegExp(e("[^]", f, P, "[\\+\\-\\.]"), "g"), NOT_USERINFO: new RegExp(e("[^\\%\\:]", ie, te), "g"), NOT_HOST: new RegExp(e("[^\\%\\[\\]\\:]", ie, te), "g"), NOT_PATH: new RegExp(e("[^\\%\\/\\:\\@]", ie, te), "g"), NOT_PATH_NOSCHEME: new RegExp(e("[^\\%\\/\\@]", ie, te), "g"), NOT_QUERY: new RegExp(e("[^\\%]", ie, te, "[\\:\\@\\/\\?]", he), "g"), NOT_FRAGMENT: new RegExp(e("[^\\%]", ie, te, "[\\:\\@\\/\\?]"), "g"), ESCAPE: new RegExp(e("[^]", ie, te), "g"), UNRESERVED: new RegExp(ie, "g"), OTHER_CHARS: new RegExp(e("[^\\%]", ie, me), "g"), PCT_ENCODED: new RegExp(le, "g"), IPV4ADDRESS: new RegExp("^(" + Ue + ")$"), IPV6ADDRESS: new RegExp("^\\[?(" + lr + ")" + t(t("\\%25|\\%(?!" + j + "{2})") + "(" + Kr + ")") + "?\\]?$") };
    }
    var u = i(false), d = i(true), h = /* @__PURE__ */ function() {
      function p(f, g) {
        var P = [], E = true, j = false, W = void 0;
        try {
          for (var ne = f[Symbol.iterator](), le; !(E = (le = ne.next()).done) && (P.push(le.value), !(g && P.length === g)); E = true) ;
        } catch (Pe) {
          j = true, W = Pe;
        } finally {
          try {
            !E && ne.return && ne.return();
          } finally {
            if (j) throw W;
          }
        }
        return P;
      }
      return function(f, g) {
        if (Array.isArray(f)) return f;
        if (Symbol.iterator in Object(f)) return p(f, g);
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      };
    }(), m = function(p) {
      if (Array.isArray(p)) {
        for (var f = 0, g = Array(p.length); f < p.length; f++) g[f] = p[f];
        return g;
      } else return Array.from(p);
    }, b = 2147483647, c = 36, v = 1, _ = 26, y = 38, x = 700, w = 72, S = 128, R = "-", A = /^xn--/, I = /[^\0-\x7E]/, z2 = /[\x2E\u3002\uFF0E\uFF61]/g, M = { overflow: "Overflow: input needs wider integers to process", "not-basic": "Illegal input >= 0x80 (not a basic code point)", "invalid-input": "Invalid input" }, k = c - v, L = Math.floor, q = String.fromCharCode;
    function F(p) {
      throw new RangeError(M[p]);
    }
    function Z(p, f) {
      for (var g = [], P = p.length; P--; ) g[P] = f(p[P]);
      return g;
    }
    function $(p, f) {
      var g = p.split("@"), P = "";
      g.length > 1 && (P = g[0] + "@", p = g[1]), p = p.replace(z2, ".");
      var E = p.split("."), j = Z(E, f).join(".");
      return P + j;
    }
    function D(p) {
      for (var f = [], g = 0, P = p.length; g < P; ) {
        var E = p.charCodeAt(g++);
        if (E >= 55296 && E <= 56319 && g < P) {
          var j = p.charCodeAt(g++);
          (j & 64512) == 56320 ? f.push(((E & 1023) << 10) + (j & 1023) + 65536) : (f.push(E), g--);
        } else f.push(E);
      }
      return f;
    }
    var G = function(f) {
      return String.fromCodePoint.apply(String, m(f));
    }, X = function(f) {
      return f - 48 < 10 ? f - 22 : f - 65 < 26 ? f - 65 : f - 97 < 26 ? f - 97 : c;
    }, re = function(f, g) {
      return f + 22 + 75 * (f < 26) - ((g != 0) << 5);
    }, Y = function(f, g, P) {
      var E = 0;
      for (f = P ? L(f / x) : f >> 1, f += L(f / g); f > k * _ >> 1; E += c) f = L(f / k);
      return L(E + (k + 1) * f / (f + y));
    }, Q = function(f) {
      var g = [], P = f.length, E = 0, j = S, W = w, ne = f.lastIndexOf(R);
      ne < 0 && (ne = 0);
      for (var le = 0; le < ne; ++le) f.charCodeAt(le) >= 128 && F("not-basic"), g.push(f.charCodeAt(le));
      for (var Pe = ne > 0 ? ne + 1 : 0; Pe < P; ) {
        for (var te = E, me = 1, xe = c; ; xe += c) {
          Pe >= P && F("invalid-input");
          var he = X(f.charCodeAt(Pe++));
          (he >= c || he > L((b - E) / me)) && F("overflow"), E += he * me;
          var ie = xe <= W ? v : xe >= W + _ ? _ : xe - W;
          if (he < ie) break;
          var ve = c - ie;
          me > L(b / ve) && F("overflow"), me *= ve;
        }
        var ue = g.length + 1;
        W = Y(E - te, ue, te == 0), L(E / ue) > b - j && F("overflow"), j += L(E / ue), E %= ue, g.splice(E++, 0, j);
      }
      return String.fromCodePoint.apply(String, g);
    }, se = function(f) {
      var g = [];
      f = D(f);
      var P = f.length, E = S, j = 0, W = w, ne = true, le = false, Pe = void 0;
      try {
        for (var te = f[Symbol.iterator](), me; !(ne = (me = te.next()).done); ne = true) {
          var xe = me.value;
          xe < 128 && g.push(q(xe));
        }
      } catch (Tr) {
        le = true, Pe = Tr;
      } finally {
        try {
          !ne && te.return && te.return();
        } finally {
          if (le) throw Pe;
        }
      }
      var he = g.length, ie = he;
      for (he && g.push(R); ie < P; ) {
        var ve = b, ue = true, wr = false, Ne = void 0;
        try {
          for (var Ue = f[Symbol.iterator](), de; !(ue = (de = Ue.next()).done); ue = true) {
            var Fe = de.value;
            Fe >= E && Fe < ve && (ve = Fe);
          }
        } catch (Tr) {
          wr = true, Ne = Tr;
        } finally {
          try {
            !ue && Ue.return && Ue.return();
          } finally {
            if (wr) throw Ne;
          }
        }
        var ze = ie + 1;
        ve - E > L((b - j) / ze) && F("overflow"), j += (ve - E) * ze, E = ve;
        var rr = true, Rr = false, or = void 0;
        try {
          for (var ut = f[Symbol.iterator](), St; !(rr = (St = ut.next()).done); rr = true) {
            var wt = St.value;
            if (wt < E && ++j > b && F("overflow"), wt == E) {
              for (var Qr = j, Jr = c; ; Jr += c) {
                var lr = Jr <= W ? v : Jr >= W + _ ? _ : Jr - W;
                if (Qr < lr) break;
                var Kr = Qr - lr, ha = c - lr;
                g.push(q(re(lr + Kr % ha, 0))), Qr = L(Kr / ha);
              }
              g.push(q(re(Qr, 0))), W = Y(j, ze, ie == he), j = 0, ++ie;
            }
          }
        } catch (Tr) {
          Rr = true, or = Tr;
        } finally {
          try {
            !rr && ut.return && ut.return();
          } finally {
            if (Rr) throw or;
          }
        }
        ++j, ++E;
      }
      return g.join("");
    }, _e = function(f) {
      return $(f, function(g) {
        return A.test(g) ? Q(g.slice(4).toLowerCase()) : g;
      });
    }, Se = function(f) {
      return $(f, function(g) {
        return I.test(g) ? "xn--" + se(g) : g;
      });
    }, fe = { version: "2.1.0", ucs2: { decode: D, encode: G }, decode: Q, encode: se, toASCII: Se, toUnicode: _e }, ce = {};
    function Ee(p) {
      var f = p.charCodeAt(0), g = void 0;
      return f < 16 ? g = "%0" + f.toString(16).toUpperCase() : f < 128 ? g = "%" + f.toString(16).toUpperCase() : f < 2048 ? g = "%" + (f >> 6 | 192).toString(16).toUpperCase() + "%" + (f & 63 | 128).toString(16).toUpperCase() : g = "%" + (f >> 12 | 224).toString(16).toUpperCase() + "%" + (f >> 6 & 63 | 128).toString(16).toUpperCase() + "%" + (f & 63 | 128).toString(16).toUpperCase(), g;
    }
    function we(p) {
      for (var f = "", g = 0, P = p.length; g < P; ) {
        var E = parseInt(p.substr(g + 1, 2), 16);
        if (E < 128) f += String.fromCharCode(E), g += 3;
        else if (E >= 194 && E < 224) {
          if (P - g >= 6) {
            var j = parseInt(p.substr(g + 4, 2), 16);
            f += String.fromCharCode((E & 31) << 6 | j & 63);
          } else f += p.substr(g, 6);
          g += 6;
        } else if (E >= 224) {
          if (P - g >= 9) {
            var W = parseInt(p.substr(g + 4, 2), 16), ne = parseInt(p.substr(g + 7, 2), 16);
            f += String.fromCharCode((E & 15) << 12 | (W & 63) << 6 | ne & 63);
          } else f += p.substr(g, 9);
          g += 9;
        } else f += p.substr(g, 3), g += 3;
      }
      return f;
    }
    function pr(p, f) {
      function g(P) {
        var E = we(P);
        return E.match(f.UNRESERVED) ? E : P;
      }
      return p.scheme && (p.scheme = String(p.scheme).replace(f.PCT_ENCODED, g).toLowerCase().replace(f.NOT_SCHEME, "")), p.userinfo !== void 0 && (p.userinfo = String(p.userinfo).replace(f.PCT_ENCODED, g).replace(f.NOT_USERINFO, Ee).replace(f.PCT_ENCODED, r)), p.host !== void 0 && (p.host = String(p.host).replace(f.PCT_ENCODED, g).toLowerCase().replace(f.NOT_HOST, Ee).replace(f.PCT_ENCODED, r)), p.path !== void 0 && (p.path = String(p.path).replace(f.PCT_ENCODED, g).replace(p.scheme ? f.NOT_PATH : f.NOT_PATH_NOSCHEME, Ee).replace(f.PCT_ENCODED, r)), p.query !== void 0 && (p.query = String(p.query).replace(f.PCT_ENCODED, g).replace(f.NOT_QUERY, Ee).replace(f.PCT_ENCODED, r)), p.fragment !== void 0 && (p.fragment = String(p.fragment).replace(f.PCT_ENCODED, g).replace(f.NOT_FRAGMENT, Ee).replace(f.PCT_ENCODED, r)), p;
    }
    function nr(p) {
      return p.replace(/^0*(.*)/, "$1") || "0";
    }
    function be(p, f) {
      var g = p.match(f.IPV4ADDRESS) || [], P = h(g, 2), E = P[1];
      return E ? E.split(".").map(nr).join(".") : p;
    }
    function ge(p, f) {
      var g = p.match(f.IPV6ADDRESS) || [], P = h(g, 3), E = P[1], j = P[2];
      if (E) {
        for (var W = E.toLowerCase().split("::").reverse(), ne = h(W, 2), le = ne[0], Pe = ne[1], te = Pe ? Pe.split(":").map(nr) : [], me = le.split(":").map(nr), xe = f.IPV4ADDRESS.test(me[me.length - 1]), he = xe ? 7 : 8, ie = me.length - he, ve = Array(he), ue = 0; ue < he; ++ue) ve[ue] = te[ue] || me[ie + ue] || "";
        xe && (ve[he - 1] = be(ve[he - 1], f));
        var wr = ve.reduce(function(ze, rr, Rr) {
          if (!rr || rr === "0") {
            var or = ze[ze.length - 1];
            or && or.index + or.length === Rr ? or.length++ : ze.push({ index: Rr, length: 1 });
          }
          return ze;
        }, []), Ne = wr.sort(function(ze, rr) {
          return rr.length - ze.length;
        })[0], Ue = void 0;
        if (Ne && Ne.length > 1) {
          var de = ve.slice(0, Ne.index), Fe = ve.slice(Ne.index + Ne.length);
          Ue = de.join(":") + "::" + Fe.join(":");
        } else Ue = ve.join(":");
        return j && (Ue += "%" + j), Ue;
      } else return p;
    }
    var xr = /^(?:([^:\/?#]+):)?(?:\/\/((?:([^\/?#@]*)@)?(\[[^\/?#\]]+\]|[^\/?#:]*)(?:\:(\d*))?))?([^?#]*)(?:\?([^#]*))?(?:#((?:.|\n|\r)*))?/i, Te = "".match(/(){0}/)[1] === void 0;
    function oe(p) {
      var f = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, g = {}, P = f.iri !== false ? d : u;
      f.reference === "suffix" && (p = (f.scheme ? f.scheme + ":" : "") + "//" + p);
      var E = p.match(xr);
      if (E) {
        Te ? (g.scheme = E[1], g.userinfo = E[3], g.host = E[4], g.port = parseInt(E[5], 10), g.path = E[6] || "", g.query = E[7], g.fragment = E[8], isNaN(g.port) && (g.port = E[5])) : (g.scheme = E[1] || void 0, g.userinfo = p.indexOf("@") !== -1 ? E[3] : void 0, g.host = p.indexOf("//") !== -1 ? E[4] : void 0, g.port = parseInt(E[5], 10), g.path = E[6] || "", g.query = p.indexOf("?") !== -1 ? E[7] : void 0, g.fragment = p.indexOf("#") !== -1 ? E[8] : void 0, isNaN(g.port) && (g.port = p.match(/\/\/(?:.|\n)*\:(?:\/|\?|\#|$)/) ? E[4] : void 0)), g.host && (g.host = ge(be(g.host, P), P)), g.scheme === void 0 && g.userinfo === void 0 && g.host === void 0 && g.port === void 0 && !g.path && g.query === void 0 ? g.reference = "same-document" : g.scheme === void 0 ? g.reference = "relative" : g.fragment === void 0 ? g.reference = "absolute" : g.reference = "uri", f.reference && f.reference !== "suffix" && f.reference !== g.reference && (g.error = g.error || "URI is not a " + f.reference + " reference.");
        var j = ce[(f.scheme || g.scheme || "").toLowerCase()];
        if (!f.unicodeSupport && (!j || !j.unicodeSupport)) {
          if (g.host && (f.domainHost || j && j.domainHost)) try {
            g.host = fe.toASCII(g.host.replace(P.PCT_ENCODED, we).toLowerCase());
          } catch (W) {
            g.error = g.error || "Host's domain name can not be converted to ASCII via punycode: " + W;
          }
          pr(g, u);
        } else pr(g, P);
        j && j.parse && j.parse(g, f);
      } else g.error = g.error || "URI can not be parsed.";
      return g;
    }
    function mr(p, f) {
      var g = f.iri !== false ? d : u, P = [];
      return p.userinfo !== void 0 && (P.push(p.userinfo), P.push("@")), p.host !== void 0 && P.push(ge(be(String(p.host), g), g).replace(g.IPV6ADDRESS, function(E, j, W) {
        return "[" + j + (W ? "%25" + W : "") + "]";
      })), (typeof p.port == "number" || typeof p.port == "string") && (P.push(":"), P.push(String(p.port))), P.length ? P.join("") : void 0;
    }
    var ir = /^\.\.?\//, Er = /^\/\.(\/|$)/, Sr = /^\/\.\.(\/|$)/, Re = /^\/?(?:.|\n)*?(?=\/|$)/;
    function Me(p) {
      for (var f = []; p.length; ) if (p.match(ir)) p = p.replace(ir, "");
      else if (p.match(Er)) p = p.replace(Er, "/");
      else if (p.match(Sr)) p = p.replace(Sr, "/"), f.pop();
      else if (p === "." || p === "..") p = "";
      else {
        var g = p.match(Re);
        if (g) {
          var P = g[0];
          p = p.slice(P.length), f.push(P);
        } else throw new Error("Unexpected dot segment condition");
      }
      return f.join("");
    }
    function Ie(p) {
      var f = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, g = f.iri ? d : u, P = [], E = ce[(f.scheme || p.scheme || "").toLowerCase()];
      if (E && E.serialize && E.serialize(p, f), p.host && !g.IPV6ADDRESS.test(p.host)) {
        if (f.domainHost || E && E.domainHost) try {
          p.host = f.iri ? fe.toUnicode(p.host) : fe.toASCII(p.host.replace(g.PCT_ENCODED, we).toLowerCase());
        } catch (ne) {
          p.error = p.error || "Host's domain name can not be converted to " + (f.iri ? "Unicode" : "ASCII") + " via punycode: " + ne;
        }
      }
      pr(p, g), f.reference !== "suffix" && p.scheme && (P.push(p.scheme), P.push(":"));
      var j = mr(p, f);
      if (j !== void 0 && (f.reference !== "suffix" && P.push("//"), P.push(j), p.path && p.path.charAt(0) !== "/" && P.push("/")), p.path !== void 0) {
        var W = p.path;
        !f.absolutePath && (!E || !E.absolutePath) && (W = Me(W)), j === void 0 && (W = W.replace(/^\/\//, "/%2F")), P.push(W);
      }
      return p.query !== void 0 && (P.push("?"), P.push(p.query)), p.fragment !== void 0 && (P.push("#"), P.push(p.fragment)), P.join("");
    }
    function $e(p, f) {
      var g = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, P = arguments[3], E = {};
      return P || (p = oe(Ie(p, g), g), f = oe(Ie(f, g), g)), g = g || {}, !g.tolerant && f.scheme ? (E.scheme = f.scheme, E.userinfo = f.userinfo, E.host = f.host, E.port = f.port, E.path = Me(f.path || ""), E.query = f.query) : (f.userinfo !== void 0 || f.host !== void 0 || f.port !== void 0 ? (E.userinfo = f.userinfo, E.host = f.host, E.port = f.port, E.path = Me(f.path || ""), E.query = f.query) : (f.path ? (f.path.charAt(0) === "/" ? E.path = Me(f.path) : ((p.userinfo !== void 0 || p.host !== void 0 || p.port !== void 0) && !p.path ? E.path = "/" + f.path : p.path ? E.path = p.path.slice(0, p.path.lastIndexOf("/") + 1) + f.path : E.path = f.path, E.path = Me(E.path)), E.query = f.query) : (E.path = p.path, f.query !== void 0 ? E.query = f.query : E.query = p.query), E.userinfo = p.userinfo, E.host = p.host, E.port = p.port), E.scheme = p.scheme), E.fragment = f.fragment, E;
    }
    function Xe(p, f, g) {
      var P = o({ scheme: "null" }, g);
      return Ie($e(oe(p, P), oe(f, P), P, true), P);
    }
    function je(p, f) {
      return typeof p == "string" ? p = Ie(oe(p, f), f) : s(p) === "object" && (p = oe(Ie(p, f), f)), p;
    }
    function Et(p, f, g) {
      return typeof p == "string" ? p = Ie(oe(p, g), g) : s(p) === "object" && (p = Ie(p, g)), typeof f == "string" ? f = Ie(oe(f, g), g) : s(f) === "object" && (f = Ie(f, g)), p === f;
    }
    function da(p, f) {
      return p && p.toString().replace(!f || !f.iri ? u.ESCAPE : d.ESCAPE, Ee);
    }
    function Qe(p, f) {
      return p && p.toString().replace(!f || !f.iri ? u.PCT_ENCODED : d.PCT_ENCODED, we);
    }
    var ot = { scheme: "http", domainHost: true, parse: function(f, g) {
      return f.host || (f.error = f.error || "HTTP URIs must have a host."), f;
    }, serialize: function(f, g) {
      var P = String(f.scheme).toLowerCase() === "https";
      return (f.port === (P ? 443 : 80) || f.port === "") && (f.port = void 0), f.path || (f.path = "/"), f;
    } }, hs = { scheme: "https", domainHost: ot.domainHost, parse: ot.parse, serialize: ot.serialize };
    function ps(p) {
      return typeof p.secure == "boolean" ? p.secure : String(p.scheme).toLowerCase() === "wss";
    }
    var lt = { scheme: "ws", domainHost: true, parse: function(f, g) {
      var P = f;
      return P.secure = ps(P), P.resourceName = (P.path || "/") + (P.query ? "?" + P.query : ""), P.path = void 0, P.query = void 0, P;
    }, serialize: function(f, g) {
      if ((f.port === (ps(f) ? 443 : 80) || f.port === "") && (f.port = void 0), typeof f.secure == "boolean" && (f.scheme = f.secure ? "wss" : "ws", f.secure = void 0), f.resourceName) {
        var P = f.resourceName.split("?"), E = h(P, 2), j = E[0], W = E[1];
        f.path = j && j !== "/" ? j : void 0, f.query = W, f.resourceName = void 0;
      }
      return f.fragment = void 0, f;
    } }, ms = { scheme: "wss", domainHost: lt.domainHost, parse: lt.parse, serialize: lt.serialize }, Ho = {}, Bo = true, vs = "[A-Za-z0-9\\-\\.\\_\\~" + (Bo ? "\\xA0-\\u200D\\u2010-\\u2029\\u202F-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF" : "") + "]", er = "[0-9A-Fa-f]", Qo = t(t("%[EFef]" + er + "%" + er + er + "%" + er + er) + "|" + t("%[89A-Fa-f]" + er + "%" + er + er) + "|" + t("%" + er + er)), Jo = "[A-Za-z0-9\\!\\$\\%\\'\\*\\+\\-\\^\\_\\`\\{\\|\\}\\~]", Ko = "[\\!\\$\\%\\'\\(\\)\\*\\+\\,\\-\\.0-9\\<\\>A-Z\\x5E-\\x7E]", Wo = e(Ko, '[\\"\\\\]'), Go = "[\\!\\$\\'\\(\\)\\*\\+\\,\\;\\:\\@]", Yo = new RegExp(vs, "g"), Br = new RegExp(Qo, "g"), Xo = new RegExp(e("[^]", Jo, "[\\.]", '[\\"]', Wo), "g"), gs = new RegExp(e("[^]", vs, Go), "g"), el = gs;
    function fa(p) {
      var f = we(p);
      return f.match(Yo) ? f : p;
    }
    var ys = { scheme: "mailto", parse: function(f, g) {
      var P = f, E = P.to = P.path ? P.path.split(",") : [];
      if (P.path = void 0, P.query) {
        for (var j = false, W = {}, ne = P.query.split("&"), le = 0, Pe = ne.length; le < Pe; ++le) {
          var te = ne[le].split("=");
          switch (te[0]) {
            case "to":
              for (var me = te[1].split(","), xe = 0, he = me.length; xe < he; ++xe) E.push(me[xe]);
              break;
            case "subject":
              P.subject = Qe(te[1], g);
              break;
            case "body":
              P.body = Qe(te[1], g);
              break;
            default:
              j = true, W[Qe(te[0], g)] = Qe(te[1], g);
              break;
          }
        }
        j && (P.headers = W);
      }
      P.query = void 0;
      for (var ie = 0, ve = E.length; ie < ve; ++ie) {
        var ue = E[ie].split("@");
        if (ue[0] = Qe(ue[0]), g.unicodeSupport) ue[1] = Qe(ue[1], g).toLowerCase();
        else try {
          ue[1] = fe.toASCII(Qe(ue[1], g).toLowerCase());
        } catch (wr) {
          P.error = P.error || "Email address's domain name can not be converted to ASCII via punycode: " + wr;
        }
        E[ie] = ue.join("@");
      }
      return P;
    }, serialize: function(f, g) {
      var P = f, E = n(f.to);
      if (E) {
        for (var j = 0, W = E.length; j < W; ++j) {
          var ne = String(E[j]), le = ne.lastIndexOf("@"), Pe = ne.slice(0, le).replace(Br, fa).replace(Br, r).replace(Xo, Ee), te = ne.slice(le + 1);
          try {
            te = g.iri ? fe.toUnicode(te) : fe.toASCII(Qe(te, g).toLowerCase());
          } catch (ie) {
            P.error = P.error || "Email address's domain name can not be converted to " + (g.iri ? "Unicode" : "ASCII") + " via punycode: " + ie;
          }
          E[j] = Pe + "@" + te;
        }
        P.path = E.join(",");
      }
      var me = f.headers = f.headers || {};
      f.subject && (me.subject = f.subject), f.body && (me.body = f.body);
      var xe = [];
      for (var he in me) me[he] !== Ho[he] && xe.push(he.replace(Br, fa).replace(Br, r).replace(gs, Ee) + "=" + me[he].replace(Br, fa).replace(Br, r).replace(el, Ee));
      return xe.length && (P.query = xe.join("&")), P;
    } }, rl = /^([^\:]+)\:(.*)/, _s = { scheme: "urn", parse: function(f, g) {
      var P = f.path && f.path.match(rl), E = f;
      if (P) {
        var j = g.scheme || E.scheme || "urn", W = P[1].toLowerCase(), ne = P[2], le = j + ":" + (g.nid || W), Pe = ce[le];
        E.nid = W, E.nss = ne, E.path = void 0, Pe && (E = Pe.parse(E, g));
      } else E.error = E.error || "URN can not be parsed.";
      return E;
    }, serialize: function(f, g) {
      var P = g.scheme || f.scheme || "urn", E = f.nid, j = P + ":" + (g.nid || E), W = ce[j];
      W && (f = W.serialize(f, g));
      var ne = f, le = f.nss;
      return ne.path = (E || g.nid) + ":" + le, ne;
    } }, tl = /^[0-9A-Fa-f]{8}(?:\-[0-9A-Fa-f]{4}){3}\-[0-9A-Fa-f]{12}$/, bs = { scheme: "urn:uuid", parse: function(f, g) {
      var P = f;
      return P.uuid = P.nss, P.nss = void 0, !g.tolerant && (!P.uuid || !P.uuid.match(tl)) && (P.error = P.error || "UUID is not valid."), P;
    }, serialize: function(f, g) {
      var P = f;
      return P.nss = (f.uuid || "").toLowerCase(), P;
    } };
    ce[ot.scheme] = ot, ce[hs.scheme] = hs, ce[lt.scheme] = lt, ce[ms.scheme] = ms, ce[ys.scheme] = ys, ce[_s.scheme] = _s, ce[bs.scheme] = bs, a16.SCHEMES = ce, a16.pctEncChar = Ee, a16.pctDecChars = we, a16.parse = oe, a16.removeDotSegments = Me, a16.serialize = Ie, a16.resolveComponents = $e, a16.resolve = Xe, a16.normalize = je, a16.equal = Et, a16.escapeComponent = da, a16.unescapeComponent = Qe, Object.defineProperty(a16, "__esModule", { value: true });
  });
});
var Zt = B((Sf, nn) => {
  "use strict";
  nn.exports = function a16(e, t) {
    if (e === t) return true;
    if (e && t && typeof e == "object" && typeof t == "object") {
      if (e.constructor !== t.constructor) return false;
      var s, r, n;
      if (Array.isArray(e)) {
        if (s = e.length, s != t.length) return false;
        for (r = s; r-- !== 0; ) if (!a16(e[r], t[r])) return false;
        return true;
      }
      if (e.constructor === RegExp) return e.source === t.source && e.flags === t.flags;
      if (e.valueOf !== Object.prototype.valueOf) return e.valueOf() === t.valueOf();
      if (e.toString !== Object.prototype.toString) return e.toString() === t.toString();
      if (n = Object.keys(e), s = n.length, s !== Object.keys(t).length) return false;
      for (r = s; r-- !== 0; ) if (!Object.prototype.hasOwnProperty.call(t, n[r])) return false;
      for (r = s; r-- !== 0; ) {
        var o = n[r];
        if (!a16(e[o], t[o])) return false;
      }
      return true;
    }
    return e !== e && t !== t;
  };
});
var ln = B((wf, on) => {
  "use strict";
  on.exports = function(e) {
    for (var t = 0, s = e.length, r = 0, n; r < s; ) t++, n = e.charCodeAt(r++), n >= 55296 && n <= 56319 && r < s && (n = e.charCodeAt(r), (n & 64512) == 56320 && r++);
    return t;
  };
});
var Vr = B((Rf, dn) => {
  "use strict";
  dn.exports = { copy: vc, checkDataType: La, checkDataTypes: gc, coerceToTypes: yc, toHash: Ma, getProperty: Ua, escapeQuotes: za, equal: Zt(), ucs2length: ln(), varOccurences: Pc, varReplace: xc, schemaHasRules: Ec, schemaHasRulesExcept: Sc, schemaUnknownRules: wc, toQuotedString: qa, getPathExpr: Rc, getPath: Tc, getData: Ac, unescapeFragment: Dc, unescapeJsonPointer: Va, escapeFragment: Ic, escapeJsonPointer: Za };
  function vc(a16, e) {
    e = e || {};
    for (var t in a16) e[t] = a16[t];
    return e;
  }
  function La(a16, e, t, s) {
    var r = s ? " !== " : " === ", n = s ? " || " : " && ", o = s ? "!" : "", i = s ? "" : "!";
    switch (a16) {
      case "null":
        return e + r + "null";
      case "array":
        return o + "Array.isArray(" + e + ")";
      case "object":
        return "(" + o + e + n + "typeof " + e + r + '"object"' + n + i + "Array.isArray(" + e + "))";
      case "integer":
        return "(typeof " + e + r + '"number"' + n + i + "(" + e + " % 1)" + n + e + r + e + (t ? n + o + "isFinite(" + e + ")" : "") + ")";
      case "number":
        return "(typeof " + e + r + '"' + a16 + '"' + (t ? n + o + "isFinite(" + e + ")" : "") + ")";
      default:
        return "typeof " + e + r + '"' + a16 + '"';
    }
  }
  function gc(a16, e, t) {
    switch (a16.length) {
      case 1:
        return La(a16[0], e, t, true);
      default:
        var s = "", r = Ma(a16);
        r.array && r.object && (s = r.null ? "(" : "(!" + e + " || ", s += "typeof " + e + ' !== "object")', delete r.null, delete r.array, delete r.object), r.number && delete r.integer;
        for (var n in r) s += (s ? " && " : "") + La(n, e, t, true);
        return s;
    }
  }
  var un = Ma(["string", "number", "integer", "boolean", "null"]);
  function yc(a16, e) {
    if (Array.isArray(e)) {
      for (var t = [], s = 0; s < e.length; s++) {
        var r = e[s];
        (un[r] || a16 === "array" && r === "array") && (t[t.length] = r);
      }
      if (t.length) return t;
    } else {
      if (un[e]) return [e];
      if (a16 === "array" && e === "array") return ["array"];
    }
  }
  function Ma(a16) {
    for (var e = {}, t = 0; t < a16.length; t++) e[a16[t]] = true;
    return e;
  }
  var _c = /^[a-z$_][a-z$_0-9]*$/i, bc = /'|\\/g;
  function Ua(a16) {
    return typeof a16 == "number" ? "[" + a16 + "]" : _c.test(a16) ? "." + a16 : "['" + za(a16) + "']";
  }
  function za(a16) {
    return a16.replace(bc, "\\$&").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\f/g, "\\f").replace(/\t/g, "\\t");
  }
  function Pc(a16, e) {
    e += "[^0-9]";
    var t = a16.match(new RegExp(e, "g"));
    return t ? t.length : 0;
  }
  function xc(a16, e, t) {
    return e += "([^0-9])", t = t.replace(/\$/g, "$$$$"), a16.replace(new RegExp(e, "g"), t + "$1");
  }
  function Ec(a16, e) {
    if (typeof a16 == "boolean") return !a16;
    for (var t in a16) if (e[t]) return true;
  }
  function Sc(a16, e, t) {
    if (typeof a16 == "boolean") return !a16 && t != "not";
    for (var s in a16) if (s != t && e[s]) return true;
  }
  function wc(a16, e) {
    if (typeof a16 != "boolean") {
      for (var t in a16) if (!e[t]) return t;
    }
  }
  function qa(a16) {
    return "'" + za(a16) + "'";
  }
  function Rc(a16, e, t, s) {
    var r = t ? "'/' + " + e + (s ? "" : ".replace(/~/g, '~0').replace(/\\//g, '~1')") : s ? "'[' + " + e + " + ']'" : "'[\\'' + " + e + " + '\\']'";
    return cn(a16, r);
  }
  function Tc(a16, e, t) {
    var s = qa(t ? "/" + Za(e) : Ua(e));
    return cn(a16, s);
  }
  var Oc = /^\/(?:[^~]|~0|~1)*$/, $c = /^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;
  function Ac(a16, e, t) {
    var s, r, n, o;
    if (a16 === "") return "rootData";
    if (a16[0] == "/") {
      if (!Oc.test(a16)) throw new Error("Invalid JSON-pointer: " + a16);
      r = a16, n = "rootData";
    } else {
      if (o = a16.match($c), !o) throw new Error("Invalid JSON-pointer: " + a16);
      if (s = +o[1], r = o[2], r == "#") {
        if (s >= e) throw new Error("Cannot access property/index " + s + " levels up, current level is " + e);
        return t[e - s];
      }
      if (s > e) throw new Error("Cannot access data " + s + " levels up, current level is " + e);
      if (n = "data" + (e - s || ""), !r) return n;
    }
    for (var i = n, u = r.split("/"), d = 0; d < u.length; d++) {
      var h = u[d];
      h && (n += Ua(Va(h)), i += " && " + n);
    }
    return i;
  }
  function cn(a16, e) {
    return a16 == '""' ? e : (a16 + " + " + e).replace(/([^\\])' \+ '/g, "$1");
  }
  function Dc(a16) {
    return Va(decodeURIComponent(a16));
  }
  function Ic(a16) {
    return encodeURIComponent(Za(a16));
  }
  function Za(a16) {
    return a16.replace(/~/g, "~0").replace(/\//g, "~1");
  }
  function Va(a16) {
    return a16.replace(/~1/g, "/").replace(/~0/g, "~");
  }
});
var Ha = B((Tf, fn) => {
  "use strict";
  var kc = Vr();
  fn.exports = Cc;
  function Cc(a16) {
    kc.copy(a16, this);
  }
});
var pn = B((Of, hn) => {
  "use strict";
  var _r = hn.exports = function(a16, e, t) {
    typeof e == "function" && (t = e, e = {}), t = e.cb || t;
    var s = typeof t == "function" ? t : t.pre || function() {
    }, r = t.post || function() {
    };
    Vt(e, s, r, a16, "", a16);
  };
  _r.keywords = { additionalItems: true, items: true, contains: true, additionalProperties: true, propertyNames: true, not: true };
  _r.arrayKeywords = { items: true, allOf: true, anyOf: true, oneOf: true };
  _r.propsKeywords = { definitions: true, properties: true, patternProperties: true, dependencies: true };
  _r.skipKeywords = { default: true, enum: true, const: true, required: true, maximum: true, minimum: true, exclusiveMaximum: true, exclusiveMinimum: true, multipleOf: true, maxLength: true, minLength: true, pattern: true, format: true, maxItems: true, minItems: true, uniqueItems: true, maxProperties: true, minProperties: true };
  function Vt(a16, e, t, s, r, n, o, i, u, d) {
    if (s && typeof s == "object" && !Array.isArray(s)) {
      e(s, r, n, o, i, u, d);
      for (var h in s) {
        var m = s[h];
        if (Array.isArray(m)) {
          if (h in _r.arrayKeywords) for (var b = 0; b < m.length; b++) Vt(a16, e, t, m[b], r + "/" + h + "/" + b, n, r, h, s, b);
        } else if (h in _r.propsKeywords) {
          if (m && typeof m == "object") for (var c in m) Vt(a16, e, t, m[c], r + "/" + h + "/" + jc(c), n, r, h, s, c);
        } else (h in _r.keywords || a16.allKeys && !(h in _r.skipKeywords)) && Vt(a16, e, t, m, r + "/" + h, n, r, h, s);
      }
      t(s, r, n, o, i, u, d);
    }
  }
  function jc(a16) {
    return a16.replace(/~/g, "~0").replace(/\//g, "~1");
  }
});
var Wt = B(($f, yn) => {
  "use strict";
  var Pt = sn(), mn = Zt(), Jt = Vr(), Ht = Ha(), Nc = pn();
  yn.exports = Pr;
  Pr.normalizeId = br;
  Pr.fullPath = Bt;
  Pr.url = Qt;
  Pr.ids = Uc;
  Pr.inlineRef = Ba;
  Pr.schema = Kt;
  function Pr(a16, e, t) {
    var s = this._refs[t];
    if (typeof s == "string") if (this._refs[s]) s = this._refs[s];
    else return Pr.call(this, a16, e, s);
    if (s = s || this._schemas[t], s instanceof Ht) return Ba(s.schema, this._opts.inlineRefs) ? s.schema : s.validate || this._compile(s);
    var r = Kt.call(this, e, t), n, o, i;
    return r && (n = r.schema, e = r.root, i = r.baseId), n instanceof Ht ? o = n.validate || a16.call(this, n.schema, e, void 0, i) : n !== void 0 && (o = Ba(n, this._opts.inlineRefs) ? n : a16.call(this, n, e, void 0, i)), o;
  }
  function Kt(a16, e) {
    var t = Pt.parse(e), s = gn(t), r = Bt(this._getId(a16.schema));
    if (Object.keys(a16.schema).length === 0 || s !== r) {
      var n = br(s), o = this._refs[n];
      if (typeof o == "string") return Fc.call(this, a16, o, t);
      if (o instanceof Ht) o.validate || this._compile(o), a16 = o;
      else if (o = this._schemas[n], o instanceof Ht) {
        if (o.validate || this._compile(o), n == br(e)) return { schema: o, root: a16, baseId: r };
        a16 = o;
      } else return;
      if (!a16.schema) return;
      r = Bt(this._getId(a16.schema));
    }
    return vn.call(this, t, r, a16.schema, a16);
  }
  function Fc(a16, e, t) {
    var s = Kt.call(this, a16, e);
    if (s) {
      var r = s.schema, n = s.baseId;
      a16 = s.root;
      var o = this._getId(r);
      return o && (n = Qt(n, o)), vn.call(this, t, n, r, a16);
    }
  }
  var Lc = Jt.toHash(["properties", "patternProperties", "enum", "dependencies", "definitions"]);
  function vn(a16, e, t, s) {
    if (a16.fragment = a16.fragment || "", a16.fragment.slice(0, 1) == "/") {
      for (var r = a16.fragment.split("/"), n = 1; n < r.length; n++) {
        var o = r[n];
        if (o) {
          if (o = Jt.unescapeFragment(o), t = t[o], t === void 0) break;
          var i;
          if (!Lc[o] && (i = this._getId(t), i && (e = Qt(e, i)), t.$ref)) {
            var u = Qt(e, t.$ref), d = Kt.call(this, s, u);
            d && (t = d.schema, s = d.root, e = d.baseId);
          }
        }
      }
      if (t !== void 0 && t !== s.schema) return { schema: t, root: s, baseId: e };
    }
  }
  var qc = Jt.toHash(["type", "format", "pattern", "maxLength", "minLength", "maxProperties", "minProperties", "maxItems", "minItems", "maximum", "minimum", "uniqueItems", "multipleOf", "required", "enum"]);
  function Ba(a16, e) {
    if (e === false) return false;
    if (e === void 0 || e === true) return Qa(a16);
    if (e) return Ja(a16) <= e;
  }
  function Qa(a16) {
    var e;
    if (Array.isArray(a16)) {
      for (var t = 0; t < a16.length; t++) if (e = a16[t], typeof e == "object" && !Qa(e)) return false;
    } else for (var s in a16) if (s == "$ref" || (e = a16[s], typeof e == "object" && !Qa(e))) return false;
    return true;
  }
  function Ja(a16) {
    var e = 0, t;
    if (Array.isArray(a16)) {
      for (var s = 0; s < a16.length; s++) if (t = a16[s], typeof t == "object" && (e += Ja(t)), e == 1 / 0) return 1 / 0;
    } else for (var r in a16) {
      if (r == "$ref") return 1 / 0;
      if (qc[r]) e++;
      else if (t = a16[r], typeof t == "object" && (e += Ja(t) + 1), e == 1 / 0) return 1 / 0;
    }
    return e;
  }
  function Bt(a16, e) {
    e !== false && (a16 = br(a16));
    var t = Pt.parse(a16);
    return gn(t);
  }
  function gn(a16) {
    return Pt.serialize(a16).split("#")[0] + "#";
  }
  var Mc = /#\/?$/;
  function br(a16) {
    return a16 ? a16.replace(Mc, "") : "";
  }
  function Qt(a16, e) {
    return e = br(e), Pt.resolve(a16, e);
  }
  function Uc(a16) {
    var e = br(this._getId(a16)), t = { "": e }, s = { "": Bt(e, false) }, r = {}, n = this;
    return Nc(a16, { allKeys: true }, function(o, i, u, d, h, m, b) {
      if (i !== "") {
        var c = n._getId(o), v = t[d], _ = s[d] + "/" + h;
        if (b !== void 0 && (_ += "/" + (typeof b == "number" ? b : Jt.escapeFragment(b))), typeof c == "string") {
          c = v = br(v ? Pt.resolve(v, c) : c);
          var y = n._refs[c];
          if (typeof y == "string" && (y = n._refs[y]), y && y.schema) {
            if (!mn(o, y.schema)) throw new Error('id "' + c + '" resolves to more than one schema');
          } else if (c != br(_)) if (c[0] == "#") {
            if (r[c] && !mn(o, r[c])) throw new Error('id "' + c + '" resolves to more than one schema');
            r[c] = o;
          } else n._refs[c] = _;
        }
        t[i] = v, s[i] = _;
      }
    }), r;
  }
});
var Gt = B((Af, bn) => {
  "use strict";
  var Ka = Wt();
  bn.exports = { Validation: _n(zc), MissingRef: _n(Wa) };
  function zc(a16) {
    this.message = "validation failed", this.errors = a16, this.ajv = this.validation = true;
  }
  Wa.message = function(a16, e) {
    return "can't resolve reference " + e + " from id " + a16;
  };
  function Wa(a16, e, t) {
    this.message = t || Wa.message(a16, e), this.missingRef = Ka.url(a16, e), this.missingSchema = Ka.normalizeId(Ka.fullPath(this.missingRef));
  }
  function _n(a16) {
    return a16.prototype = Object.create(Error.prototype), a16.prototype.constructor = a16, a16;
  }
});
var Ga = B((Df, Pn) => {
  "use strict";
  Pn.exports = function(a16, e) {
    e || (e = {}), typeof e == "function" && (e = { cmp: e });
    var t = typeof e.cycles == "boolean" ? e.cycles : false, s = e.cmp && /* @__PURE__ */ function(n) {
      return function(o) {
        return function(i, u) {
          var d = { key: i, value: o[i] }, h = { key: u, value: o[u] };
          return n(d, h);
        };
      };
    }(e.cmp), r = [];
    return function n(o) {
      if (o && o.toJSON && typeof o.toJSON == "function" && (o = o.toJSON()), o !== void 0) {
        if (typeof o == "number") return isFinite(o) ? "" + o : "null";
        if (typeof o != "object") return JSON.stringify(o);
        var i, u;
        if (Array.isArray(o)) {
          for (u = "[", i = 0; i < o.length; i++) i && (u += ","), u += n(o[i]) || "null";
          return u + "]";
        }
        if (o === null) return "null";
        if (r.indexOf(o) !== -1) {
          if (t) return JSON.stringify("__cycle__");
          throw new TypeError("Converting circular structure to JSON");
        }
        var d = r.push(o) - 1, h = Object.keys(o).sort(s && s(o));
        for (u = "", i = 0; i < h.length; i++) {
          var m = h[i], b = n(o[m]);
          b && (u && (u += ","), u += JSON.stringify(m) + ":" + b);
        }
        return r.splice(d, 1), "{" + u + "}";
      }
    }(a16);
  };
});
var Ya = B((If, xn) => {
  "use strict";
  xn.exports = function(e, t, s) {
    var r = "", n = e.schema.$async === true, o = e.util.schemaHasRulesExcept(e.schema, e.RULES.all, "$ref"), i = e.self._getId(e.schema);
    if (e.opts.strictKeywords) {
      var u = e.util.schemaUnknownRules(e.schema, e.RULES.keywords);
      if (u) {
        var d = "unknown keyword: " + u;
        if (e.opts.strictKeywords === "log") e.logger.warn(d);
        else throw new Error(d);
      }
    }
    if (e.isTop && (r += " var validate = ", n && (e.async = true, r += "async "), r += "function(data, dataPath, parentData, parentDataProperty, rootData) { 'use strict'; ", i && (e.opts.sourceCode || e.opts.processCode) && (r += " " + ("/*# sourceURL=" + i + " */") + " ")), typeof e.schema == "boolean" || !(o || e.schema.$ref)) {
      var t = "false schema", h = e.level, m = e.dataLevel, b = e.schema[t], c = e.schemaPath + e.util.getProperty(t), v = e.errSchemaPath + "/" + t, A = !e.opts.allErrors, M, _ = "data" + (m || ""), R = "valid" + h;
      if (e.schema === false) {
        e.isTop ? A = true : r += " var " + R + " = false; ";
        var y = y || [];
        y.push(r), r = "", e.createErrors !== false ? (r += " { keyword: '" + (M || "false schema") + "' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(v) + " , params: {} ", e.opts.messages !== false && (r += " , message: 'boolean schema is false' "), e.opts.verbose && (r += " , schema: false , parentSchema: validate.schema" + e.schemaPath + " , data: " + _ + " "), r += " } ") : r += " {} ";
        var x = r;
        r = y.pop(), !e.compositeRule && A ? e.async ? r += " throw new ValidationError([" + x + "]); " : r += " validate.errors = [" + x + "]; return false; " : r += " var err = " + x + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ";
      } else e.isTop ? n ? r += " return data; " : r += " validate.errors = null; return true; " : r += " var " + R + " = true; ";
      return e.isTop && (r += " }; return validate; "), r;
    }
    if (e.isTop) {
      var w = e.isTop, h = e.level = 0, m = e.dataLevel = 0, _ = "data";
      if (e.rootId = e.resolve.fullPath(e.self._getId(e.root.schema)), e.baseId = e.baseId || e.rootId, delete e.isTop, e.dataPathArr = [""], e.schema.default !== void 0 && e.opts.useDefaults && e.opts.strictDefaults) {
        var S = "default is ignored in the schema root";
        if (e.opts.strictDefaults === "log") e.logger.warn(S);
        else throw new Error(S);
      }
      r += " var vErrors = null; ", r += " var errors = 0;     ", r += " if (rootData === undefined) rootData = data; ";
    } else {
      var h = e.level, m = e.dataLevel, _ = "data" + (m || "");
      if (i && (e.baseId = e.resolve.url(e.baseId, i)), n && !e.async) throw new Error("async schema in sync schema");
      r += " var errs_" + h + " = errors;";
    }
    var R = "valid" + h, A = !e.opts.allErrors, I = "", z2 = "", M, k = e.schema.type, L = Array.isArray(k);
    if (k && e.opts.nullable && e.schema.nullable === true && (L ? k.indexOf("null") == -1 && (k = k.concat("null")) : k != "null" && (k = [k, "null"], L = true)), L && k.length == 1 && (k = k[0], L = false), e.schema.$ref && o) {
      if (e.opts.extendRefs == "fail") throw new Error('$ref: validation keywords used in schema at path "' + e.errSchemaPath + '" (see option extendRefs)');
      e.opts.extendRefs !== true && (o = false, e.logger.warn('$ref: keywords ignored in schema at path "' + e.errSchemaPath + '"'));
    }
    if (e.schema.$comment && e.opts.$comment && (r += " " + e.RULES.all.$comment.code(e, "$comment")), k) {
      if (e.opts.coerceTypes) var q = e.util.coerceToTypes(e.opts.coerceTypes, k);
      var F = e.RULES.types[k];
      if (q || L || F === true || F && !Re(F)) {
        var c = e.schemaPath + ".type", v = e.errSchemaPath + "/type", c = e.schemaPath + ".type", v = e.errSchemaPath + "/type", Z = L ? "checkDataTypes" : "checkDataType";
        if (r += " if (" + e.util[Z](k, _, e.opts.strictNumbers, true) + ") { ", q) {
          var $ = "dataType" + h, D = "coerced" + h;
          r += " var " + $ + " = typeof " + _ + "; var " + D + " = undefined; ", e.opts.coerceTypes == "array" && (r += " if (" + $ + " == 'object' && Array.isArray(" + _ + ") && " + _ + ".length == 1) { " + _ + " = " + _ + "[0]; " + $ + " = typeof " + _ + "; if (" + e.util.checkDataType(e.schema.type, _, e.opts.strictNumbers) + ") " + D + " = " + _ + "; } "), r += " if (" + D + " !== undefined) ; ";
          var G = q;
          if (G) for (var X, re = -1, Y = G.length - 1; re < Y; ) X = G[re += 1], X == "string" ? r += " else if (" + $ + " == 'number' || " + $ + " == 'boolean') " + D + " = '' + " + _ + "; else if (" + _ + " === null) " + D + " = ''; " : X == "number" || X == "integer" ? (r += " else if (" + $ + " == 'boolean' || " + _ + " === null || (" + $ + " == 'string' && " + _ + " && " + _ + " == +" + _ + " ", X == "integer" && (r += " && !(" + _ + " % 1)"), r += ")) " + D + " = +" + _ + "; ") : X == "boolean" ? r += " else if (" + _ + " === 'false' || " + _ + " === 0 || " + _ + " === null) " + D + " = false; else if (" + _ + " === 'true' || " + _ + " === 1) " + D + " = true; " : X == "null" ? r += " else if (" + _ + " === '' || " + _ + " === 0 || " + _ + " === false) " + D + " = null; " : e.opts.coerceTypes == "array" && X == "array" && (r += " else if (" + $ + " == 'string' || " + $ + " == 'number' || " + $ + " == 'boolean' || " + _ + " == null) " + D + " = [" + _ + "]; ");
          r += " else {   ";
          var y = y || [];
          y.push(r), r = "", e.createErrors !== false ? (r += " { keyword: '" + (M || "type") + "' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(v) + " , params: { type: '", L ? r += "" + k.join(",") : r += "" + k, r += "' } ", e.opts.messages !== false && (r += " , message: 'should be ", L ? r += "" + k.join(",") : r += "" + k, r += "' "), e.opts.verbose && (r += " , schema: validate.schema" + c + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + _ + " "), r += " } ") : r += " {} ";
          var x = r;
          r = y.pop(), !e.compositeRule && A ? e.async ? r += " throw new ValidationError([" + x + "]); " : r += " validate.errors = [" + x + "]; return false; " : r += " var err = " + x + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", r += " } if (" + D + " !== undefined) {  ";
          var Q = m ? "data" + (m - 1 || "") : "parentData", se = m ? e.dataPathArr[m] : "parentDataProperty";
          r += " " + _ + " = " + D + "; ", m || (r += "if (" + Q + " !== undefined)"), r += " " + Q + "[" + se + "] = " + D + "; } ";
        } else {
          var y = y || [];
          y.push(r), r = "", e.createErrors !== false ? (r += " { keyword: '" + (M || "type") + "' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(v) + " , params: { type: '", L ? r += "" + k.join(",") : r += "" + k, r += "' } ", e.opts.messages !== false && (r += " , message: 'should be ", L ? r += "" + k.join(",") : r += "" + k, r += "' "), e.opts.verbose && (r += " , schema: validate.schema" + c + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + _ + " "), r += " } ") : r += " {} ";
          var x = r;
          r = y.pop(), !e.compositeRule && A ? e.async ? r += " throw new ValidationError([" + x + "]); " : r += " validate.errors = [" + x + "]; return false; " : r += " var err = " + x + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ";
        }
        r += " } ";
      }
    }
    if (e.schema.$ref && !o) r += " " + e.RULES.all.$ref.code(e, "$ref") + " ", A && (r += " } if (errors === ", w ? r += "0" : r += "errs_" + h, r += ") { ", z2 += "}");
    else {
      var _e = e.RULES;
      if (_e) {
        for (var F, Se = -1, fe = _e.length - 1; Se < fe; ) if (F = _e[Se += 1], Re(F)) {
          if (F.type && (r += " if (" + e.util.checkDataType(F.type, _, e.opts.strictNumbers) + ") { "), e.opts.useDefaults) {
            if (F.type == "object" && e.schema.properties) {
              var b = e.schema.properties, ce = Object.keys(b), Ee = ce;
              if (Ee) for (var we, pr = -1, nr = Ee.length - 1; pr < nr; ) {
                we = Ee[pr += 1];
                var be = b[we];
                if (be.default !== void 0) {
                  var ge = _ + e.util.getProperty(we);
                  if (e.compositeRule) {
                    if (e.opts.strictDefaults) {
                      var S = "default is ignored for: " + ge;
                      if (e.opts.strictDefaults === "log") e.logger.warn(S);
                      else throw new Error(S);
                    }
                  } else r += " if (" + ge + " === undefined ", e.opts.useDefaults == "empty" && (r += " || " + ge + " === null || " + ge + " === '' "), r += " ) " + ge + " = ", e.opts.useDefaults == "shared" ? r += " " + e.useDefault(be.default) + " " : r += " " + JSON.stringify(be.default) + " ", r += "; ";
                }
              }
            } else if (F.type == "array" && Array.isArray(e.schema.items)) {
              var xr = e.schema.items;
              if (xr) {
                for (var be, re = -1, Te = xr.length - 1; re < Te; ) if (be = xr[re += 1], be.default !== void 0) {
                  var ge = _ + "[" + re + "]";
                  if (e.compositeRule) {
                    if (e.opts.strictDefaults) {
                      var S = "default is ignored for: " + ge;
                      if (e.opts.strictDefaults === "log") e.logger.warn(S);
                      else throw new Error(S);
                    }
                  } else r += " if (" + ge + " === undefined ", e.opts.useDefaults == "empty" && (r += " || " + ge + " === null || " + ge + " === '' "), r += " ) " + ge + " = ", e.opts.useDefaults == "shared" ? r += " " + e.useDefault(be.default) + " " : r += " " + JSON.stringify(be.default) + " ", r += "; ";
                }
              }
            }
          }
          var oe = F.rules;
          if (oe) {
            for (var mr, ir = -1, Er = oe.length - 1; ir < Er; ) if (mr = oe[ir += 1], Me(mr)) {
              var Sr = mr.code(e, mr.keyword, F.type);
              Sr && (r += " " + Sr + " ", A && (I += "}"));
            }
          }
          if (A && (r += " " + I + " ", I = ""), F.type && (r += " } ", k && k === F.type && !q)) {
            r += " else { ";
            var c = e.schemaPath + ".type", v = e.errSchemaPath + "/type", y = y || [];
            y.push(r), r = "", e.createErrors !== false ? (r += " { keyword: '" + (M || "type") + "' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(v) + " , params: { type: '", L ? r += "" + k.join(",") : r += "" + k, r += "' } ", e.opts.messages !== false && (r += " , message: 'should be ", L ? r += "" + k.join(",") : r += "" + k, r += "' "), e.opts.verbose && (r += " , schema: validate.schema" + c + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + _ + " "), r += " } ") : r += " {} ";
            var x = r;
            r = y.pop(), !e.compositeRule && A ? e.async ? r += " throw new ValidationError([" + x + "]); " : r += " validate.errors = [" + x + "]; return false; " : r += " var err = " + x + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", r += " } ";
          }
          A && (r += " if (errors === ", w ? r += "0" : r += "errs_" + h, r += ") { ", z2 += "}");
        }
      }
    }
    A && (r += " " + z2 + " "), w ? (n ? (r += " if (errors === 0) return data;           ", r += " else throw new ValidationError(vErrors); ") : (r += " validate.errors = vErrors; ", r += " return errors === 0;       "), r += " }; return validate;") : r += " var " + R + " = errors === errs_" + h + ";";
    function Re($e) {
      for (var Xe = $e.rules, je = 0; je < Xe.length; je++) if (Me(Xe[je])) return true;
    }
    function Me($e) {
      return e.schema[$e.keyword] !== void 0 || $e.implements && Ie($e);
    }
    function Ie($e) {
      for (var Xe = $e.implements, je = 0; je < Xe.length; je++) if (e.schema[Xe[je]] !== void 0) return true;
    }
    return r;
  };
});
var Tn = B((kf, Rn) => {
  "use strict";
  var Yt = Wt(), ea = Vr(), Sn = Gt(), Zc = Ga(), En = Ya(), Vc = ea.ucs2length, Hc = Zt(), Bc = Sn.Validation;
  Rn.exports = Xa;
  function Xa(a16, e, t, s) {
    var r = this, n = this._opts, o = [void 0], i = {}, u = [], d = {}, h = [], m = {}, b = [];
    function c($, D) {
      var G = n.regExp ? "regExp" : "new RegExp";
      return "var pattern" + $ + " = " + G + "(" + ea.toQuotedString(D[$]) + ");";
    }
    e = e || { schema: a16, refVal: o, refs: i };
    var v = Qc.call(this, a16, e, s), _ = this._compilations[v.index];
    if (v.compiling) return _.callValidate = R;
    var y = this._formats, x = this.RULES;
    try {
      var w = A(a16, e, t, s);
      _.validate = w;
      var S = _.callValidate;
      return S && (S.schema = w.schema, S.errors = null, S.refs = w.refs, S.refVal = w.refVal, S.root = w.root, S.$async = w.$async, n.sourceCode && (S.source = w.source)), w;
    } finally {
      Jc.call(this, a16, e, s);
    }
    function R() {
      var $ = _.validate, D = $.apply(this, arguments);
      return R.errors = $.errors, D;
    }
    function A($, D, G, X) {
      var re = !D || D && D.schema == $;
      if (D.schema != e.schema) return Xa.call(r, $, D, G, X);
      var Y = $.$async === true, Q = En({ isTop: true, schema: $, isRoot: re, baseId: X, root: D, schemaPath: "", errSchemaPath: "#", errorPath: '""', MissingRefError: Sn.MissingRef, RULES: x, validate: En, util: ea, resolve: Yt, resolveRef: I, usePattern: q, useDefault: F, useCustomRule: Z, opts: n, formats: y, logger: r.logger, self: r });
      Q = Xt(o, Wc) + Xt(u, c) + Xt(h, Kc) + Xt(b, Gc) + Q, n.processCode && (Q = n.processCode(Q, $));
      var se;
      try {
        var _e = new Function("self", "RULES", "formats", "root", "refVal", "defaults", "customRules", "equal", "ucs2length", "ValidationError", "regExp", Q);
        se = _e(r, x, y, e, o, h, b, Hc, Vc, Bc, n.regExp), o[0] = se;
      } catch (Se) {
        throw r.logger.error("Error compiling schema, function code:", Q), Se;
      }
      return se.schema = $, se.errors = null, se.refs = i, se.refVal = o, se.root = re ? se : D, Y && (se.$async = true), n.sourceCode === true && (se.source = { code: Q, patterns: u, defaults: h }), se;
    }
    function I($, D, G) {
      D = Yt.url($, D);
      var X = i[D], re, Y;
      if (X !== void 0) return re = o[X], Y = "refVal[" + X + "]", L(re, Y);
      if (!G && e.refs) {
        var Q = e.refs[D];
        if (Q !== void 0) return re = e.refVal[Q], Y = z2(D, re), L(re, Y);
      }
      Y = z2(D);
      var se = Yt.call(r, A, e, D);
      if (se === void 0) {
        var _e = t && t[D];
        _e && (se = Yt.inlineRef(_e, n.inlineRefs) ? _e : Xa.call(r, _e, e, t, $));
      }
      if (se === void 0) M(D);
      else return k(D, se), L(se, Y);
    }
    function z2($, D) {
      var G = o.length;
      return o[G] = D, i[$] = G, "refVal" + G;
    }
    function M($) {
      delete i[$];
    }
    function k($, D) {
      var G = i[$];
      o[G] = D;
    }
    function L($, D) {
      return typeof $ == "object" || typeof $ == "boolean" ? { code: D, schema: $, inline: true } : { code: D, $async: $ && !!$.$async };
    }
    function q($) {
      var D = d[$];
      return D === void 0 && (D = d[$] = u.length, u[D] = $), "pattern" + D;
    }
    function F($) {
      switch (typeof $) {
        case "boolean":
        case "number":
          return "" + $;
        case "string":
          return ea.toQuotedString($);
        case "object":
          if ($ === null) return "null";
          var D = Zc($), G = m[D];
          return G === void 0 && (G = m[D] = h.length, h[G] = $), "default" + G;
      }
    }
    function Z($, D, G, X) {
      if (r._opts.validateSchema !== false) {
        var re = $.definition.dependencies;
        if (re && !re.every(function(we) {
          return Object.prototype.hasOwnProperty.call(G, we);
        })) throw new Error("parent schema must have all required keywords: " + re.join(","));
        var Y = $.definition.validateSchema;
        if (Y) {
          var Q = Y(D);
          if (!Q) {
            var se = "keyword schema is invalid: " + r.errorsText(Y.errors);
            if (r._opts.validateSchema == "log") r.logger.error(se);
            else throw new Error(se);
          }
        }
      }
      var _e = $.definition.compile, Se = $.definition.inline, fe = $.definition.macro, ce;
      if (_e) ce = _e.call(r, D, G, X);
      else if (fe) ce = fe.call(r, D, G, X), n.validateSchema !== false && r.validateSchema(ce, true);
      else if (Se) ce = Se.call(r, X, $.keyword, D, G);
      else if (ce = $.definition.validate, !ce) return;
      if (ce === void 0) throw new Error('custom keyword "' + $.keyword + '"failed to compile');
      var Ee = b.length;
      return b[Ee] = ce, { code: "customRule" + Ee, validate: ce };
    }
  }
  function Qc(a16, e, t) {
    var s = wn.call(this, a16, e, t);
    return s >= 0 ? { index: s, compiling: true } : (s = this._compilations.length, this._compilations[s] = { schema: a16, root: e, baseId: t }, { index: s, compiling: false });
  }
  function Jc(a16, e, t) {
    var s = wn.call(this, a16, e, t);
    s >= 0 && this._compilations.splice(s, 1);
  }
  function wn(a16, e, t) {
    for (var s = 0; s < this._compilations.length; s++) {
      var r = this._compilations[s];
      if (r.schema == a16 && r.root == e && r.baseId == t) return s;
    }
    return -1;
  }
  function Kc(a16) {
    return "var default" + a16 + " = defaults[" + a16 + "];";
  }
  function Wc(a16, e) {
    return e[a16] === void 0 ? "" : "var refVal" + a16 + " = refVal[" + a16 + "];";
  }
  function Gc(a16) {
    return "var customRule" + a16 + " = customRules[" + a16 + "];";
  }
  function Xt(a16, e) {
    if (!a16.length) return "";
    for (var t = "", s = 0; s < a16.length; s++) t += e(s, a16);
    return t;
  }
});
var $n = B((Cf, On) => {
  "use strict";
  var ra = On.exports = function() {
    this._cache = {};
  };
  ra.prototype.put = function(e, t) {
    this._cache[e] = t;
  };
  ra.prototype.get = function(e) {
    return this._cache[e];
  };
  ra.prototype.del = function(e) {
    delete this._cache[e];
  };
  ra.prototype.clear = function() {
    this._cache = {};
  };
});
var Un = B((jf, Mn) => {
  "use strict";
  var Yc = Vr(), Xc = /^(\d\d\d\d)-(\d\d)-(\d\d)$/, ed = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], rd = /^(\d\d):(\d\d):(\d\d)(\.\d+)?(z|[+-]\d\d(?::?\d\d)?)?$/i, An = /^(?=.{1,253}\.?$)[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[-0-9a-z]{0,61}[0-9a-z])?)*\.?$/i, td = /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)(?:\?(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i, ad = /^(?:[a-z][a-z0-9+\-.]*:)?(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'"()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?(?:\?(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i, Dn = /^(?:(?:[^\x00-\x20"'<>%\\^`{|}]|%[0-9a-f]{2})|\{[+#./;?&=,!@|]?(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?(?:,(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?)*\})*$/i, In = /^(?:(?:http[s\u017F]?|ftp):\/\/)(?:(?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+(?::(?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*)?@)?(?:(?!10(?:\.[0-9]{1,3}){3})(?!127(?:\.[0-9]{1,3}){3})(?!169\.254(?:\.[0-9]{1,3}){2})(?!192\.168(?:\.[0-9]{1,3}){2})(?!172\.(?:1[6-9]|2[0-9]|3[01])(?:\.[0-9]{1,3}){2})(?:[1-9][0-9]?|1[0-9][0-9]|2[01][0-9]|22[0-3])(?:\.(?:1?[0-9]{1,2}|2[0-4][0-9]|25[0-5])){2}(?:\.(?:[1-9][0-9]?|1[0-9][0-9]|2[0-4][0-9]|25[0-4]))|(?:(?:(?:[0-9a-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+-)*(?:[0-9a-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+)(?:\.(?:(?:[0-9a-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+-)*(?:[0-9a-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+)*(?:\.(?:(?:[a-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]){2,})))(?::[0-9]{2,5})?(?:\/(?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*)?$/i, kn = /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i, Cn = /^(?:\/(?:[^~/]|~0|~1)*)*$/, jn = /^#(?:\/(?:[a-z0-9_\-.!$&'()*+,;:=@]|%[0-9a-f]{2}|~0|~1)*)*$/i, Nn = /^(?:0|[1-9][0-9]*)(?:#|(?:\/(?:[^~/]|~0|~1)*)*)$/;
  Mn.exports = ta;
  function ta(a16) {
    return a16 = a16 == "full" ? "full" : "fast", Yc.copy(ta[a16]);
  }
  ta.fast = { date: /^\d\d\d\d-[0-1]\d-[0-3]\d$/, time: /^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)?$/i, "date-time": /^\d\d\d\d-[0-1]\d-[0-3]\d[t\s](?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)$/i, uri: /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/)?[^\s]*$/i, "uri-reference": /^(?:(?:[a-z][a-z0-9+\-.]*:)?\/?\/)?(?:[^\\\s#][^\s#]*)?(?:#[^\\\s]*)?$/i, "uri-template": Dn, url: In, email: /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)*$/i, hostname: An, ipv4: /^(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)$/, ipv6: /^\s*(?:(?:(?:[0-9a-f]{1,4}:){7}(?:[0-9a-f]{1,4}|:))|(?:(?:[0-9a-f]{1,4}:){6}(?::[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){5}(?:(?:(?::[0-9a-f]{1,4}){1,2})|:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){4}(?:(?:(?::[0-9a-f]{1,4}){1,3})|(?:(?::[0-9a-f]{1,4})?:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){3}(?:(?:(?::[0-9a-f]{1,4}){1,4})|(?:(?::[0-9a-f]{1,4}){0,2}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){2}(?:(?:(?::[0-9a-f]{1,4}){1,5})|(?:(?::[0-9a-f]{1,4}){0,3}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){1}(?:(?:(?::[0-9a-f]{1,4}){1,6})|(?:(?::[0-9a-f]{1,4}){0,4}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?::(?:(?:(?::[0-9a-f]{1,4}){1,7})|(?:(?::[0-9a-f]{1,4}){0,5}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(?:%.+)?\s*$/i, regex: qn, uuid: kn, "json-pointer": Cn, "json-pointer-uri-fragment": jn, "relative-json-pointer": Nn };
  ta.full = { date: Fn, time: Ln, "date-time": id, uri: ld, "uri-reference": ad, "uri-template": Dn, url: In, email: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i, hostname: An, ipv4: /^(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)$/, ipv6: /^\s*(?:(?:(?:[0-9a-f]{1,4}:){7}(?:[0-9a-f]{1,4}|:))|(?:(?:[0-9a-f]{1,4}:){6}(?::[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){5}(?:(?:(?::[0-9a-f]{1,4}){1,2})|:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){4}(?:(?:(?::[0-9a-f]{1,4}){1,3})|(?:(?::[0-9a-f]{1,4})?:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){3}(?:(?:(?::[0-9a-f]{1,4}){1,4})|(?:(?::[0-9a-f]{1,4}){0,2}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){2}(?:(?:(?::[0-9a-f]{1,4}){1,5})|(?:(?::[0-9a-f]{1,4}){0,3}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){1}(?:(?:(?::[0-9a-f]{1,4}){1,6})|(?:(?::[0-9a-f]{1,4}){0,4}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?::(?:(?:(?::[0-9a-f]{1,4}){1,7})|(?:(?::[0-9a-f]{1,4}){0,5}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(?:%.+)?\s*$/i, regex: qn, uuid: kn, "json-pointer": Cn, "json-pointer-uri-fragment": jn, "relative-json-pointer": Nn };
  function sd(a16) {
    return a16 % 4 === 0 && (a16 % 100 !== 0 || a16 % 400 === 0);
  }
  function Fn(a16) {
    var e = a16.match(Xc);
    if (!e) return false;
    var t = +e[1], s = +e[2], r = +e[3];
    return s >= 1 && s <= 12 && r >= 1 && r <= (s == 2 && sd(t) ? 29 : ed[s]);
  }
  function Ln(a16, e) {
    var t = a16.match(rd);
    if (!t) return false;
    var s = t[1], r = t[2], n = t[3], o = t[5];
    return (s <= 23 && r <= 59 && n <= 59 || s == 23 && r == 59 && n == 60) && (!e || o);
  }
  var nd = /t|\s/i;
  function id(a16) {
    var e = a16.split(nd);
    return e.length == 2 && Fn(e[0]) && Ln(e[1], true);
  }
  var od = /\/|:/;
  function ld(a16) {
    return od.test(a16) && td.test(a16);
  }
  var ud = /[^\\]\\Z/;
  function qn(a16) {
    if (ud.test(a16)) return false;
    try {
      return new RegExp(a16), true;
    } catch {
      return false;
    }
  }
});
var Zn = B((Nf, zn) => {
  "use strict";
  zn.exports = function(e, t, s) {
    var r = " ", n = e.level, o = e.dataLevel, i = e.schema[t], u = e.errSchemaPath + "/" + t, d = !e.opts.allErrors, h = "data" + (o || ""), m = "valid" + n, b, c;
    if (i == "#" || i == "#/") e.isRoot ? (b = e.async, c = "validate") : (b = e.root.schema.$async === true, c = "root.refVal[0]");
    else {
      var v = e.resolveRef(e.baseId, i, e.isRoot);
      if (v === void 0) {
        var _ = e.MissingRefError.message(e.baseId, i);
        if (e.opts.missingRefs == "fail") {
          e.logger.error(_);
          var y = y || [];
          y.push(r), r = "", e.createErrors !== false ? (r += " { keyword: '$ref' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(u) + " , params: { ref: '" + e.util.escapeQuotes(i) + "' } ", e.opts.messages !== false && (r += " , message: 'can\\'t resolve reference " + e.util.escapeQuotes(i) + "' "), e.opts.verbose && (r += " , schema: " + e.util.toQuotedString(i) + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + h + " "), r += " } ") : r += " {} ";
          var x = r;
          r = y.pop(), !e.compositeRule && d ? e.async ? r += " throw new ValidationError([" + x + "]); " : r += " validate.errors = [" + x + "]; return false; " : r += " var err = " + x + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", d && (r += " if (false) { ");
        } else if (e.opts.missingRefs == "ignore") e.logger.warn(_), d && (r += " if (true) { ");
        else throw new e.MissingRefError(e.baseId, i, _);
      } else if (v.inline) {
        var w = e.util.copy(e);
        w.level++;
        var S = "valid" + w.level;
        w.schema = v.schema, w.schemaPath = "", w.errSchemaPath = i;
        var R = e.validate(w).replace(/validate\.schema/g, v.code);
        r += " " + R + " ", d && (r += " if (" + S + ") { ");
      } else b = v.$async === true || e.async && v.$async !== false, c = v.code;
    }
    if (c) {
      var y = y || [];
      y.push(r), r = "", e.opts.passContext ? r += " " + c + ".call(this, " : r += " " + c + "( ", r += " " + h + ", (dataPath || '')", e.errorPath != '""' && (r += " + " + e.errorPath);
      var A = o ? "data" + (o - 1 || "") : "parentData", I = o ? e.dataPathArr[o] : "parentDataProperty";
      r += " , " + A + " , " + I + ", rootData)  ";
      var z2 = r;
      if (r = y.pop(), b) {
        if (!e.async) throw new Error("async schema referenced by sync schema");
        d && (r += " var " + m + "; "), r += " try { await " + z2 + "; ", d && (r += " " + m + " = true; "), r += " } catch (e) { if (!(e instanceof ValidationError)) throw e; if (vErrors === null) vErrors = e.errors; else vErrors = vErrors.concat(e.errors); errors = vErrors.length; ", d && (r += " " + m + " = false; "), r += " } ", d && (r += " if (" + m + ") { ");
      } else r += " if (!" + z2 + ") { if (vErrors === null) vErrors = " + c + ".errors; else vErrors = vErrors.concat(" + c + ".errors); errors = vErrors.length; } ", d && (r += " else { ");
    }
    return r;
  };
});
var Hn = B((Ff, Vn) => {
  "use strict";
  Vn.exports = function(e, t, s) {
    var r = " ", n = e.schema[t], o = e.schemaPath + e.util.getProperty(t), i = e.errSchemaPath + "/" + t, u = !e.opts.allErrors, d = e.util.copy(e), h = "";
    d.level++;
    var m = "valid" + d.level, b = d.baseId, c = true, v = n;
    if (v) for (var _, y = -1, x = v.length - 1; y < x; ) _ = v[y += 1], (e.opts.strictKeywords ? typeof _ == "object" && Object.keys(_).length > 0 || _ === false : e.util.schemaHasRules(_, e.RULES.all)) && (c = false, d.schema = _, d.schemaPath = o + "[" + y + "]", d.errSchemaPath = i + "/" + y, r += "  " + e.validate(d) + " ", d.baseId = b, u && (r += " if (" + m + ") { ", h += "}"));
    return u && (c ? r += " if (true) { " : r += " " + h.slice(0, -1) + " "), r;
  };
});
var Qn = B((Lf, Bn) => {
  "use strict";
  Bn.exports = function(e, t, s) {
    var r = " ", n = e.level, o = e.dataLevel, i = e.schema[t], u = e.schemaPath + e.util.getProperty(t), d = e.errSchemaPath + "/" + t, h = !e.opts.allErrors, m = "data" + (o || ""), b = "valid" + n, c = "errs__" + n, v = e.util.copy(e), _ = "";
    v.level++;
    var y = "valid" + v.level, x = i.every(function(M) {
      return e.opts.strictKeywords ? typeof M == "object" && Object.keys(M).length > 0 || M === false : e.util.schemaHasRules(M, e.RULES.all);
    });
    if (x) {
      var w = v.baseId;
      r += " var " + c + " = errors; var " + b + " = false;  ";
      var S = e.compositeRule;
      e.compositeRule = v.compositeRule = true;
      var R = i;
      if (R) for (var A, I = -1, z2 = R.length - 1; I < z2; ) A = R[I += 1], v.schema = A, v.schemaPath = u + "[" + I + "]", v.errSchemaPath = d + "/" + I, r += "  " + e.validate(v) + " ", v.baseId = w, r += " " + b + " = " + b + " || " + y + "; if (!" + b + ") { ", _ += "}";
      e.compositeRule = v.compositeRule = S, r += " " + _ + " if (!" + b + ") {   var err =   ", e.createErrors !== false ? (r += " { keyword: 'anyOf' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(d) + " , params: {} ", e.opts.messages !== false && (r += " , message: 'should match some schema in anyOf' "), e.opts.verbose && (r += " , schema: validate.schema" + u + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + m + " "), r += " } ") : r += " {} ", r += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", !e.compositeRule && h && (e.async ? r += " throw new ValidationError(vErrors); " : r += " validate.errors = vErrors; return false; "), r += " } else {  errors = " + c + "; if (vErrors !== null) { if (" + c + ") vErrors.length = " + c + "; else vErrors = null; } ", e.opts.allErrors && (r += " } ");
    } else h && (r += " if (true) { ");
    return r;
  };
});
var Kn = B((qf, Jn) => {
  "use strict";
  Jn.exports = function(e, t, s) {
    var r = " ", n = e.schema[t], o = e.errSchemaPath + "/" + t, i = !e.opts.allErrors, u = e.util.toQuotedString(n);
    return e.opts.$comment === true ? r += " console.log(" + u + ");" : typeof e.opts.$comment == "function" && (r += " self._opts.$comment(" + u + ", " + e.util.toQuotedString(o) + ", validate.root.schema);"), r;
  };
});
var Gn = B((Mf, Wn) => {
  "use strict";
  Wn.exports = function(e, t, s) {
    var r = " ", n = e.level, o = e.dataLevel, i = e.schema[t], u = e.schemaPath + e.util.getProperty(t), d = e.errSchemaPath + "/" + t, h = !e.opts.allErrors, m = "data" + (o || ""), b = "valid" + n, c = e.opts.$data && i && i.$data, v;
    c ? (r += " var schema" + n + " = " + e.util.getData(i.$data, o, e.dataPathArr) + "; ", v = "schema" + n) : v = i, c || (r += " var schema" + n + " = validate.schema" + u + ";"), r += "var " + b + " = equal(" + m + ", schema" + n + "); if (!" + b + ") {   ";
    var _ = _ || [];
    _.push(r), r = "", e.createErrors !== false ? (r += " { keyword: 'const' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(d) + " , params: { allowedValue: schema" + n + " } ", e.opts.messages !== false && (r += " , message: 'should be equal to constant' "), e.opts.verbose && (r += " , schema: validate.schema" + u + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + m + " "), r += " } ") : r += " {} ";
    var y = r;
    return r = _.pop(), !e.compositeRule && h ? e.async ? r += " throw new ValidationError([" + y + "]); " : r += " validate.errors = [" + y + "]; return false; " : r += " var err = " + y + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", r += " }", h && (r += " else { "), r;
  };
});
var Xn = B((Uf, Yn) => {
  "use strict";
  Yn.exports = function(e, t, s) {
    var r = " ", n = e.level, o = e.dataLevel, i = e.schema[t], u = e.schemaPath + e.util.getProperty(t), d = e.errSchemaPath + "/" + t, h = !e.opts.allErrors, m = "data" + (o || ""), b = "valid" + n, c = "errs__" + n, v = e.util.copy(e), _ = "";
    v.level++;
    var y = "valid" + v.level, x = "i" + n, w = v.dataLevel = e.dataLevel + 1, S = "data" + w, R = e.baseId, A = e.opts.strictKeywords ? typeof i == "object" && Object.keys(i).length > 0 || i === false : e.util.schemaHasRules(i, e.RULES.all);
    if (r += "var " + c + " = errors;var " + b + ";", A) {
      var I = e.compositeRule;
      e.compositeRule = v.compositeRule = true, v.schema = i, v.schemaPath = u, v.errSchemaPath = d, r += " var " + y + " = false; for (var " + x + " = 0; " + x + " < " + m + ".length; " + x + "++) { ", v.errorPath = e.util.getPathExpr(e.errorPath, x, e.opts.jsonPointers, true);
      var z2 = m + "[" + x + "]";
      v.dataPathArr[w] = x;
      var M = e.validate(v);
      v.baseId = R, e.util.varOccurences(M, S) < 2 ? r += " " + e.util.varReplace(M, S, z2) + " " : r += " var " + S + " = " + z2 + "; " + M + " ", r += " if (" + y + ") break; }  ", e.compositeRule = v.compositeRule = I, r += " " + _ + " if (!" + y + ") {";
    } else r += " if (" + m + ".length == 0) {";
    var k = k || [];
    k.push(r), r = "", e.createErrors !== false ? (r += " { keyword: 'contains' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(d) + " , params: {} ", e.opts.messages !== false && (r += " , message: 'should contain a valid item' "), e.opts.verbose && (r += " , schema: validate.schema" + u + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + m + " "), r += " } ") : r += " {} ";
    var L = r;
    return r = k.pop(), !e.compositeRule && h ? e.async ? r += " throw new ValidationError([" + L + "]); " : r += " validate.errors = [" + L + "]; return false; " : r += " var err = " + L + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", r += " } else { ", A && (r += "  errors = " + c + "; if (vErrors !== null) { if (" + c + ") vErrors.length = " + c + "; else vErrors = null; } "), e.opts.allErrors && (r += " } "), r;
  };
});
var ri = B((zf, ei) => {
  "use strict";
  ei.exports = function(e, t, s) {
    var r = " ", n = e.level, o = e.dataLevel, i = e.schema[t], u = e.schemaPath + e.util.getProperty(t), d = e.errSchemaPath + "/" + t, h = !e.opts.allErrors, m = "data" + (o || ""), b = "errs__" + n, c = e.util.copy(e), v = "";
    c.level++;
    var _ = "valid" + c.level, y = {}, x = {}, w = e.opts.ownProperties;
    for (I in i) if (I != "__proto__") {
      var S = i[I], R = Array.isArray(S) ? x : y;
      R[I] = S;
    }
    r += "var " + b + " = errors;";
    var A = e.errorPath;
    r += "var missing" + n + ";";
    for (var I in x) if (R = x[I], R.length) {
      if (r += " if ( " + m + e.util.getProperty(I) + " !== undefined ", w && (r += " && Object.prototype.hasOwnProperty.call(" + m + ", '" + e.util.escapeQuotes(I) + "') "), h) {
        r += " && ( ";
        var z2 = R;
        if (z2) for (var M, k = -1, L = z2.length - 1; k < L; ) {
          M = z2[k += 1], k && (r += " || ");
          var q = e.util.getProperty(M), F = m + q;
          r += " ( ( " + F + " === undefined ", w && (r += " || ! Object.prototype.hasOwnProperty.call(" + m + ", '" + e.util.escapeQuotes(M) + "') "), r += ") && (missing" + n + " = " + e.util.toQuotedString(e.opts.jsonPointers ? M : q) + ") ) ";
        }
        r += ")) {  ";
        var Z = "missing" + n, $ = "' + " + Z + " + '";
        e.opts._errorDataPathProperty && (e.errorPath = e.opts.jsonPointers ? e.util.getPathExpr(A, Z, true) : A + " + " + Z);
        var D = D || [];
        D.push(r), r = "", e.createErrors !== false ? (r += " { keyword: 'dependencies' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(d) + " , params: { property: '" + e.util.escapeQuotes(I) + "', missingProperty: '" + $ + "', depsCount: " + R.length + ", deps: '" + e.util.escapeQuotes(R.length == 1 ? R[0] : R.join(", ")) + "' } ", e.opts.messages !== false && (r += " , message: 'should have ", R.length == 1 ? r += "property " + e.util.escapeQuotes(R[0]) : r += "properties " + e.util.escapeQuotes(R.join(", ")), r += " when property " + e.util.escapeQuotes(I) + " is present' "), e.opts.verbose && (r += " , schema: validate.schema" + u + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + m + " "), r += " } ") : r += " {} ";
        var G = r;
        r = D.pop(), !e.compositeRule && h ? e.async ? r += " throw new ValidationError([" + G + "]); " : r += " validate.errors = [" + G + "]; return false; " : r += " var err = " + G + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ";
      } else {
        r += " ) { ";
        var X = R;
        if (X) for (var M, re = -1, Y = X.length - 1; re < Y; ) {
          M = X[re += 1];
          var q = e.util.getProperty(M), $ = e.util.escapeQuotes(M), F = m + q;
          e.opts._errorDataPathProperty && (e.errorPath = e.util.getPath(A, M, e.opts.jsonPointers)), r += " if ( " + F + " === undefined ", w && (r += " || ! Object.prototype.hasOwnProperty.call(" + m + ", '" + e.util.escapeQuotes(M) + "') "), r += ") {  var err =   ", e.createErrors !== false ? (r += " { keyword: 'dependencies' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(d) + " , params: { property: '" + e.util.escapeQuotes(I) + "', missingProperty: '" + $ + "', depsCount: " + R.length + ", deps: '" + e.util.escapeQuotes(R.length == 1 ? R[0] : R.join(", ")) + "' } ", e.opts.messages !== false && (r += " , message: 'should have ", R.length == 1 ? r += "property " + e.util.escapeQuotes(R[0]) : r += "properties " + e.util.escapeQuotes(R.join(", ")), r += " when property " + e.util.escapeQuotes(I) + " is present' "), e.opts.verbose && (r += " , schema: validate.schema" + u + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + m + " "), r += " } ") : r += " {} ", r += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } ";
        }
      }
      r += " }   ", h && (v += "}", r += " else { ");
    }
    e.errorPath = A;
    var Q = c.baseId;
    for (var I in y) {
      var S = y[I];
      (e.opts.strictKeywords ? typeof S == "object" && Object.keys(S).length > 0 || S === false : e.util.schemaHasRules(S, e.RULES.all)) && (r += " " + _ + " = true; if ( " + m + e.util.getProperty(I) + " !== undefined ", w && (r += " && Object.prototype.hasOwnProperty.call(" + m + ", '" + e.util.escapeQuotes(I) + "') "), r += ") { ", c.schema = S, c.schemaPath = u + e.util.getProperty(I), c.errSchemaPath = d + "/" + e.util.escapeFragment(I), r += "  " + e.validate(c) + " ", c.baseId = Q, r += " }  ", h && (r += " if (" + _ + ") { ", v += "}"));
    }
    return h && (r += "   " + v + " if (" + b + " == errors) {"), r;
  };
});
var ai = B((Zf, ti) => {
  "use strict";
  ti.exports = function(e, t, s) {
    var r = " ", n = e.level, o = e.dataLevel, i = e.schema[t], u = e.schemaPath + e.util.getProperty(t), d = e.errSchemaPath + "/" + t, h = !e.opts.allErrors, m = "data" + (o || ""), b = "valid" + n, c = e.opts.$data && i && i.$data, v;
    c ? (r += " var schema" + n + " = " + e.util.getData(i.$data, o, e.dataPathArr) + "; ", v = "schema" + n) : v = i;
    var _ = "i" + n, y = "schema" + n;
    c || (r += " var " + y + " = validate.schema" + u + ";"), r += "var " + b + ";", c && (r += " if (schema" + n + " === undefined) " + b + " = true; else if (!Array.isArray(schema" + n + ")) " + b + " = false; else {"), r += "" + b + " = false;for (var " + _ + "=0; " + _ + "<" + y + ".length; " + _ + "++) if (equal(" + m + ", " + y + "[" + _ + "])) { " + b + " = true; break; }", c && (r += "  }  "), r += " if (!" + b + ") {   ";
    var x = x || [];
    x.push(r), r = "", e.createErrors !== false ? (r += " { keyword: 'enum' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(d) + " , params: { allowedValues: schema" + n + " } ", e.opts.messages !== false && (r += " , message: 'should be equal to one of the allowed values' "), e.opts.verbose && (r += " , schema: validate.schema" + u + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + m + " "), r += " } ") : r += " {} ";
    var w = r;
    return r = x.pop(), !e.compositeRule && h ? e.async ? r += " throw new ValidationError([" + w + "]); " : r += " validate.errors = [" + w + "]; return false; " : r += " var err = " + w + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", r += " }", h && (r += " else { "), r;
  };
});
var ni = B((Vf, si) => {
  "use strict";
  si.exports = function(e, t, s) {
    var r = " ", n = e.level, o = e.dataLevel, i = e.schema[t], u = e.schemaPath + e.util.getProperty(t), d = e.errSchemaPath + "/" + t, h = !e.opts.allErrors, m = "data" + (o || "");
    if (e.opts.format === false) return h && (r += " if (true) { "), r;
    var b = e.opts.$data && i && i.$data, c;
    b ? (r += " var schema" + n + " = " + e.util.getData(i.$data, o, e.dataPathArr) + "; ", c = "schema" + n) : c = i;
    var v = e.opts.unknownFormats, _ = Array.isArray(v);
    if (b) {
      var y = "format" + n, x = "isObject" + n, w = "formatType" + n;
      r += " var " + y + " = formats[" + c + "]; var " + x + " = typeof " + y + " == 'object' && !(" + y + " instanceof RegExp) && " + y + ".validate; var " + w + " = " + x + " && " + y + ".type || 'string'; if (" + x + ") { ", e.async && (r += " var async" + n + " = " + y + ".async; "), r += " " + y + " = " + y + ".validate; } if (  ", b && (r += " (" + c + " !== undefined && typeof " + c + " != 'string') || "), r += " (", v != "ignore" && (r += " (" + c + " && !" + y + " ", _ && (r += " && self._opts.unknownFormats.indexOf(" + c + ") == -1 "), r += ") || "), r += " (" + y + " && " + w + " == '" + s + "' && !(typeof " + y + " == 'function' ? ", e.async ? r += " (async" + n + " ? await " + y + "(" + m + ") : " + y + "(" + m + ")) " : r += " " + y + "(" + m + ") ", r += " : " + y + ".test(" + m + "))))) {";
    } else {
      var y = e.formats[i];
      if (!y) {
        if (v == "ignore") return e.logger.warn('unknown format "' + i + '" ignored in schema at path "' + e.errSchemaPath + '"'), h && (r += " if (true) { "), r;
        if (_ && v.indexOf(i) >= 0) return h && (r += " if (true) { "), r;
        throw new Error('unknown format "' + i + '" is used in schema at path "' + e.errSchemaPath + '"');
      }
      var x = typeof y == "object" && !(y instanceof RegExp) && y.validate, w = x && y.type || "string";
      if (x) {
        var S = y.async === true;
        y = y.validate;
      }
      if (w != s) return h && (r += " if (true) { "), r;
      if (S) {
        if (!e.async) throw new Error("async format in sync schema");
        var R = "formats" + e.util.getProperty(i) + ".validate";
        r += " if (!(await " + R + "(" + m + "))) { ";
      } else {
        r += " if (! ";
        var R = "formats" + e.util.getProperty(i);
        x && (R += ".validate"), typeof y == "function" ? r += " " + R + "(" + m + ") " : r += " " + R + ".test(" + m + ") ", r += ") { ";
      }
    }
    var A = A || [];
    A.push(r), r = "", e.createErrors !== false ? (r += " { keyword: 'format' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(d) + " , params: { format:  ", b ? r += "" + c : r += "" + e.util.toQuotedString(i), r += "  } ", e.opts.messages !== false && (r += ` , message: 'should match format "`, b ? r += "' + " + c + " + '" : r += "" + e.util.escapeQuotes(i), r += `"' `), e.opts.verbose && (r += " , schema:  ", b ? r += "validate.schema" + u : r += "" + e.util.toQuotedString(i), r += "         , parentSchema: validate.schema" + e.schemaPath + " , data: " + m + " "), r += " } ") : r += " {} ";
    var I = r;
    return r = A.pop(), !e.compositeRule && h ? e.async ? r += " throw new ValidationError([" + I + "]); " : r += " validate.errors = [" + I + "]; return false; " : r += " var err = " + I + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", r += " } ", h && (r += " else { "), r;
  };
});
var oi = B((Hf, ii) => {
  "use strict";
  ii.exports = function(e, t, s) {
    var r = " ", n = e.level, o = e.dataLevel, i = e.schema[t], u = e.schemaPath + e.util.getProperty(t), d = e.errSchemaPath + "/" + t, h = !e.opts.allErrors, m = "data" + (o || ""), b = "valid" + n, c = "errs__" + n, v = e.util.copy(e);
    v.level++;
    var _ = "valid" + v.level, y = e.schema.then, x = e.schema.else, w = y !== void 0 && (e.opts.strictKeywords ? typeof y == "object" && Object.keys(y).length > 0 || y === false : e.util.schemaHasRules(y, e.RULES.all)), S = x !== void 0 && (e.opts.strictKeywords ? typeof x == "object" && Object.keys(x).length > 0 || x === false : e.util.schemaHasRules(x, e.RULES.all)), R = v.baseId;
    if (w || S) {
      var A;
      v.createErrors = false, v.schema = i, v.schemaPath = u, v.errSchemaPath = d, r += " var " + c + " = errors; var " + b + " = true;  ";
      var I = e.compositeRule;
      e.compositeRule = v.compositeRule = true, r += "  " + e.validate(v) + " ", v.baseId = R, v.createErrors = true, r += "  errors = " + c + "; if (vErrors !== null) { if (" + c + ") vErrors.length = " + c + "; else vErrors = null; }  ", e.compositeRule = v.compositeRule = I, w ? (r += " if (" + _ + ") {  ", v.schema = e.schema.then, v.schemaPath = e.schemaPath + ".then", v.errSchemaPath = e.errSchemaPath + "/then", r += "  " + e.validate(v) + " ", v.baseId = R, r += " " + b + " = " + _ + "; ", w && S ? (A = "ifClause" + n, r += " var " + A + " = 'then'; ") : A = "'then'", r += " } ", S && (r += " else { ")) : r += " if (!" + _ + ") { ", S && (v.schema = e.schema.else, v.schemaPath = e.schemaPath + ".else", v.errSchemaPath = e.errSchemaPath + "/else", r += "  " + e.validate(v) + " ", v.baseId = R, r += " " + b + " = " + _ + "; ", w && S ? (A = "ifClause" + n, r += " var " + A + " = 'else'; ") : A = "'else'", r += " } "), r += " if (!" + b + ") {   var err =   ", e.createErrors !== false ? (r += " { keyword: 'if' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(d) + " , params: { failingKeyword: " + A + " } ", e.opts.messages !== false && (r += ` , message: 'should match "' + ` + A + ` + '" schema' `), e.opts.verbose && (r += " , schema: validate.schema" + u + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + m + " "), r += " } ") : r += " {} ", r += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", !e.compositeRule && h && (e.async ? r += " throw new ValidationError(vErrors); " : r += " validate.errors = vErrors; return false; "), r += " }   ", h && (r += " else { ");
    } else h && (r += " if (true) { ");
    return r;
  };
});
var ui = B((Bf, li) => {
  "use strict";
  li.exports = function(e, t, s) {
    var r = " ", n = e.level, o = e.dataLevel, i = e.schema[t], u = e.schemaPath + e.util.getProperty(t), d = e.errSchemaPath + "/" + t, h = !e.opts.allErrors, m = "data" + (o || ""), b = "valid" + n, c = "errs__" + n, v = e.util.copy(e), _ = "";
    v.level++;
    var y = "valid" + v.level, x = "i" + n, w = v.dataLevel = e.dataLevel + 1, S = "data" + w, R = e.baseId;
    if (r += "var " + c + " = errors;var " + b + ";", Array.isArray(i)) {
      var A = e.schema.additionalItems;
      if (A === false) {
        r += " " + b + " = " + m + ".length <= " + i.length + "; ";
        var I = d;
        d = e.errSchemaPath + "/additionalItems", r += "  if (!" + b + ") {   ";
        var z2 = z2 || [];
        z2.push(r), r = "", e.createErrors !== false ? (r += " { keyword: 'additionalItems' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(d) + " , params: { limit: " + i.length + " } ", e.opts.messages !== false && (r += " , message: 'should NOT have more than " + i.length + " items' "), e.opts.verbose && (r += " , schema: false , parentSchema: validate.schema" + e.schemaPath + " , data: " + m + " "), r += " } ") : r += " {} ";
        var M = r;
        r = z2.pop(), !e.compositeRule && h ? e.async ? r += " throw new ValidationError([" + M + "]); " : r += " validate.errors = [" + M + "]; return false; " : r += " var err = " + M + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", r += " } ", d = I, h && (_ += "}", r += " else { ");
      }
      var k = i;
      if (k) {
        for (var L, q = -1, F = k.length - 1; q < F; ) if (L = k[q += 1], e.opts.strictKeywords ? typeof L == "object" && Object.keys(L).length > 0 || L === false : e.util.schemaHasRules(L, e.RULES.all)) {
          r += " " + y + " = true; if (" + m + ".length > " + q + ") { ";
          var Z = m + "[" + q + "]";
          v.schema = L, v.schemaPath = u + "[" + q + "]", v.errSchemaPath = d + "/" + q, v.errorPath = e.util.getPathExpr(e.errorPath, q, e.opts.jsonPointers, true), v.dataPathArr[w] = q;
          var $ = e.validate(v);
          v.baseId = R, e.util.varOccurences($, S) < 2 ? r += " " + e.util.varReplace($, S, Z) + " " : r += " var " + S + " = " + Z + "; " + $ + " ", r += " }  ", h && (r += " if (" + y + ") { ", _ += "}");
        }
      }
      if (typeof A == "object" && (e.opts.strictKeywords ? typeof A == "object" && Object.keys(A).length > 0 || A === false : e.util.schemaHasRules(A, e.RULES.all))) {
        v.schema = A, v.schemaPath = e.schemaPath + ".additionalItems", v.errSchemaPath = e.errSchemaPath + "/additionalItems", r += " " + y + " = true; if (" + m + ".length > " + i.length + ") {  for (var " + x + " = " + i.length + "; " + x + " < " + m + ".length; " + x + "++) { ", v.errorPath = e.util.getPathExpr(e.errorPath, x, e.opts.jsonPointers, true);
        var Z = m + "[" + x + "]";
        v.dataPathArr[w] = x;
        var $ = e.validate(v);
        v.baseId = R, e.util.varOccurences($, S) < 2 ? r += " " + e.util.varReplace($, S, Z) + " " : r += " var " + S + " = " + Z + "; " + $ + " ", h && (r += " if (!" + y + ") break; "), r += " } }  ", h && (r += " if (" + y + ") { ", _ += "}");
      }
    } else if (e.opts.strictKeywords ? typeof i == "object" && Object.keys(i).length > 0 || i === false : e.util.schemaHasRules(i, e.RULES.all)) {
      v.schema = i, v.schemaPath = u, v.errSchemaPath = d, r += "  for (var " + x + " = 0; " + x + " < " + m + ".length; " + x + "++) { ", v.errorPath = e.util.getPathExpr(e.errorPath, x, e.opts.jsonPointers, true);
      var Z = m + "[" + x + "]";
      v.dataPathArr[w] = x;
      var $ = e.validate(v);
      v.baseId = R, e.util.varOccurences($, S) < 2 ? r += " " + e.util.varReplace($, S, Z) + " " : r += " var " + S + " = " + Z + "; " + $ + " ", h && (r += " if (!" + y + ") break; "), r += " }";
    }
    return h && (r += " " + _ + " if (" + c + " == errors) {"), r;
  };
});
var es = B((Qf, ci) => {
  "use strict";
  ci.exports = function(e, t, s) {
    var r = " ", n = e.level, o = e.dataLevel, i = e.schema[t], u = e.schemaPath + e.util.getProperty(t), d = e.errSchemaPath + "/" + t, h = !e.opts.allErrors, R, m = "data" + (o || ""), b = e.opts.$data && i && i.$data, c;
    b ? (r += " var schema" + n + " = " + e.util.getData(i.$data, o, e.dataPathArr) + "; ", c = "schema" + n) : c = i;
    var v = t == "maximum", _ = v ? "exclusiveMaximum" : "exclusiveMinimum", y = e.schema[_], x = e.opts.$data && y && y.$data, w = v ? "<" : ">", S = v ? ">" : "<", R = void 0;
    if (!(b || typeof i == "number" || i === void 0)) throw new Error(t + " must be number");
    if (!(x || y === void 0 || typeof y == "number" || typeof y == "boolean")) throw new Error(_ + " must be number or boolean");
    if (x) {
      var A = e.util.getData(y.$data, o, e.dataPathArr), I = "exclusive" + n, z2 = "exclType" + n, M = "exclIsNumber" + n, k = "op" + n, L = "' + " + k + " + '";
      r += " var schemaExcl" + n + " = " + A + "; ", A = "schemaExcl" + n, r += " var " + I + "; var " + z2 + " = typeof " + A + "; if (" + z2 + " != 'boolean' && " + z2 + " != 'undefined' && " + z2 + " != 'number') { ";
      var R = _, q = q || [];
      q.push(r), r = "", e.createErrors !== false ? (r += " { keyword: '" + (R || "_exclusiveLimit") + "' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(d) + " , params: {} ", e.opts.messages !== false && (r += " , message: '" + _ + " should be boolean' "), e.opts.verbose && (r += " , schema: validate.schema" + u + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + m + " "), r += " } ") : r += " {} ";
      var F = r;
      r = q.pop(), !e.compositeRule && h ? e.async ? r += " throw new ValidationError([" + F + "]); " : r += " validate.errors = [" + F + "]; return false; " : r += " var err = " + F + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", r += " } else if ( ", b && (r += " (" + c + " !== undefined && typeof " + c + " != 'number') || "), r += " " + z2 + " == 'number' ? ( (" + I + " = " + c + " === undefined || " + A + " " + w + "= " + c + ") ? " + m + " " + S + "= " + A + " : " + m + " " + S + " " + c + " ) : ( (" + I + " = " + A + " === true) ? " + m + " " + S + "= " + c + " : " + m + " " + S + " " + c + " ) || " + m + " !== " + m + ") { var op" + n + " = " + I + " ? '" + w + "' : '" + w + "='; ", i === void 0 && (R = _, d = e.errSchemaPath + "/" + _, c = A, b = x);
    } else {
      var M = typeof y == "number", L = w;
      if (M && b) {
        var k = "'" + L + "'";
        r += " if ( ", b && (r += " (" + c + " !== undefined && typeof " + c + " != 'number') || "), r += " ( " + c + " === undefined || " + y + " " + w + "= " + c + " ? " + m + " " + S + "= " + y + " : " + m + " " + S + " " + c + " ) || " + m + " !== " + m + ") { ";
      } else {
        M && i === void 0 ? (I = true, R = _, d = e.errSchemaPath + "/" + _, c = y, S += "=") : (M && (c = Math[v ? "min" : "max"](y, i)), y === (M ? c : true) ? (I = true, R = _, d = e.errSchemaPath + "/" + _, S += "=") : (I = false, L += "="));
        var k = "'" + L + "'";
        r += " if ( ", b && (r += " (" + c + " !== undefined && typeof " + c + " != 'number') || "), r += " " + m + " " + S + " " + c + " || " + m + " !== " + m + ") { ";
      }
    }
    R = R || t;
    var q = q || [];
    q.push(r), r = "", e.createErrors !== false ? (r += " { keyword: '" + (R || "_limit") + "' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(d) + " , params: { comparison: " + k + ", limit: " + c + ", exclusive: " + I + " } ", e.opts.messages !== false && (r += " , message: 'should be " + L + " ", b ? r += "' + " + c : r += "" + c + "'"), e.opts.verbose && (r += " , schema:  ", b ? r += "validate.schema" + u : r += "" + i, r += "         , parentSchema: validate.schema" + e.schemaPath + " , data: " + m + " "), r += " } ") : r += " {} ";
    var F = r;
    return r = q.pop(), !e.compositeRule && h ? e.async ? r += " throw new ValidationError([" + F + "]); " : r += " validate.errors = [" + F + "]; return false; " : r += " var err = " + F + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", r += " } ", h && (r += " else { "), r;
  };
});
var rs = B((Jf, di) => {
  "use strict";
  di.exports = function(e, t, s) {
    var r = " ", n = e.level, o = e.dataLevel, i = e.schema[t], u = e.schemaPath + e.util.getProperty(t), d = e.errSchemaPath + "/" + t, h = !e.opts.allErrors, _, m = "data" + (o || ""), b = e.opts.$data && i && i.$data, c;
    if (b ? (r += " var schema" + n + " = " + e.util.getData(i.$data, o, e.dataPathArr) + "; ", c = "schema" + n) : c = i, !(b || typeof i == "number")) throw new Error(t + " must be number");
    var v = t == "maxItems" ? ">" : "<";
    r += "if ( ", b && (r += " (" + c + " !== undefined && typeof " + c + " != 'number') || "), r += " " + m + ".length " + v + " " + c + ") { ";
    var _ = t, y = y || [];
    y.push(r), r = "", e.createErrors !== false ? (r += " { keyword: '" + (_ || "_limitItems") + "' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(d) + " , params: { limit: " + c + " } ", e.opts.messages !== false && (r += " , message: 'should NOT have ", t == "maxItems" ? r += "more" : r += "fewer", r += " than ", b ? r += "' + " + c + " + '" : r += "" + i, r += " items' "), e.opts.verbose && (r += " , schema:  ", b ? r += "validate.schema" + u : r += "" + i, r += "         , parentSchema: validate.schema" + e.schemaPath + " , data: " + m + " "), r += " } ") : r += " {} ";
    var x = r;
    return r = y.pop(), !e.compositeRule && h ? e.async ? r += " throw new ValidationError([" + x + "]); " : r += " validate.errors = [" + x + "]; return false; " : r += " var err = " + x + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", r += "} ", h && (r += " else { "), r;
  };
});
var ts = B((Kf, fi) => {
  "use strict";
  fi.exports = function(e, t, s) {
    var r = " ", n = e.level, o = e.dataLevel, i = e.schema[t], u = e.schemaPath + e.util.getProperty(t), d = e.errSchemaPath + "/" + t, h = !e.opts.allErrors, _, m = "data" + (o || ""), b = e.opts.$data && i && i.$data, c;
    if (b ? (r += " var schema" + n + " = " + e.util.getData(i.$data, o, e.dataPathArr) + "; ", c = "schema" + n) : c = i, !(b || typeof i == "number")) throw new Error(t + " must be number");
    var v = t == "maxLength" ? ">" : "<";
    r += "if ( ", b && (r += " (" + c + " !== undefined && typeof " + c + " != 'number') || "), e.opts.unicode === false ? r += " " + m + ".length " : r += " ucs2length(" + m + ") ", r += " " + v + " " + c + ") { ";
    var _ = t, y = y || [];
    y.push(r), r = "", e.createErrors !== false ? (r += " { keyword: '" + (_ || "_limitLength") + "' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(d) + " , params: { limit: " + c + " } ", e.opts.messages !== false && (r += " , message: 'should NOT be ", t == "maxLength" ? r += "longer" : r += "shorter", r += " than ", b ? r += "' + " + c + " + '" : r += "" + i, r += " characters' "), e.opts.verbose && (r += " , schema:  ", b ? r += "validate.schema" + u : r += "" + i, r += "         , parentSchema: validate.schema" + e.schemaPath + " , data: " + m + " "), r += " } ") : r += " {} ";
    var x = r;
    return r = y.pop(), !e.compositeRule && h ? e.async ? r += " throw new ValidationError([" + x + "]); " : r += " validate.errors = [" + x + "]; return false; " : r += " var err = " + x + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", r += "} ", h && (r += " else { "), r;
  };
});
var as = B((Wf, hi) => {
  "use strict";
  hi.exports = function(e, t, s) {
    var r = " ", n = e.level, o = e.dataLevel, i = e.schema[t], u = e.schemaPath + e.util.getProperty(t), d = e.errSchemaPath + "/" + t, h = !e.opts.allErrors, _, m = "data" + (o || ""), b = e.opts.$data && i && i.$data, c;
    if (b ? (r += " var schema" + n + " = " + e.util.getData(i.$data, o, e.dataPathArr) + "; ", c = "schema" + n) : c = i, !(b || typeof i == "number")) throw new Error(t + " must be number");
    var v = t == "maxProperties" ? ">" : "<";
    r += "if ( ", b && (r += " (" + c + " !== undefined && typeof " + c + " != 'number') || "), r += " Object.keys(" + m + ").length " + v + " " + c + ") { ";
    var _ = t, y = y || [];
    y.push(r), r = "", e.createErrors !== false ? (r += " { keyword: '" + (_ || "_limitProperties") + "' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(d) + " , params: { limit: " + c + " } ", e.opts.messages !== false && (r += " , message: 'should NOT have ", t == "maxProperties" ? r += "more" : r += "fewer", r += " than ", b ? r += "' + " + c + " + '" : r += "" + i, r += " properties' "), e.opts.verbose && (r += " , schema:  ", b ? r += "validate.schema" + u : r += "" + i, r += "         , parentSchema: validate.schema" + e.schemaPath + " , data: " + m + " "), r += " } ") : r += " {} ";
    var x = r;
    return r = y.pop(), !e.compositeRule && h ? e.async ? r += " throw new ValidationError([" + x + "]); " : r += " validate.errors = [" + x + "]; return false; " : r += " var err = " + x + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", r += "} ", h && (r += " else { "), r;
  };
});
var mi = B((Gf, pi) => {
  "use strict";
  pi.exports = function(e, t, s) {
    var r = " ", n = e.level, o = e.dataLevel, i = e.schema[t], u = e.schemaPath + e.util.getProperty(t), d = e.errSchemaPath + "/" + t, h = !e.opts.allErrors, m = "data" + (o || ""), b = e.opts.$data && i && i.$data, c;
    if (b ? (r += " var schema" + n + " = " + e.util.getData(i.$data, o, e.dataPathArr) + "; ", c = "schema" + n) : c = i, !(b || typeof i == "number")) throw new Error(t + " must be number");
    r += "var division" + n + ";if (", b && (r += " " + c + " !== undefined && ( typeof " + c + " != 'number' || "), r += " (division" + n + " = " + m + " / " + c + ", ", e.opts.multipleOfPrecision ? r += " Math.abs(Math.round(division" + n + ") - division" + n + ") > 1e-" + e.opts.multipleOfPrecision + " " : r += " division" + n + " !== parseInt(division" + n + ") ", r += " ) ", b && (r += "  )  "), r += " ) {   ";
    var v = v || [];
    v.push(r), r = "", e.createErrors !== false ? (r += " { keyword: 'multipleOf' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(d) + " , params: { multipleOf: " + c + " } ", e.opts.messages !== false && (r += " , message: 'should be multiple of ", b ? r += "' + " + c : r += "" + c + "'"), e.opts.verbose && (r += " , schema:  ", b ? r += "validate.schema" + u : r += "" + i, r += "         , parentSchema: validate.schema" + e.schemaPath + " , data: " + m + " "), r += " } ") : r += " {} ";
    var _ = r;
    return r = v.pop(), !e.compositeRule && h ? e.async ? r += " throw new ValidationError([" + _ + "]); " : r += " validate.errors = [" + _ + "]; return false; " : r += " var err = " + _ + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", r += "} ", h && (r += " else { "), r;
  };
});
var gi = B((Yf, vi) => {
  "use strict";
  vi.exports = function(e, t, s) {
    var r = " ", n = e.level, o = e.dataLevel, i = e.schema[t], u = e.schemaPath + e.util.getProperty(t), d = e.errSchemaPath + "/" + t, h = !e.opts.allErrors, m = "data" + (o || ""), b = "errs__" + n, c = e.util.copy(e);
    c.level++;
    var v = "valid" + c.level;
    if (e.opts.strictKeywords ? typeof i == "object" && Object.keys(i).length > 0 || i === false : e.util.schemaHasRules(i, e.RULES.all)) {
      c.schema = i, c.schemaPath = u, c.errSchemaPath = d, r += " var " + b + " = errors;  ";
      var _ = e.compositeRule;
      e.compositeRule = c.compositeRule = true, c.createErrors = false;
      var y;
      c.opts.allErrors && (y = c.opts.allErrors, c.opts.allErrors = false), r += " " + e.validate(c) + " ", c.createErrors = true, y && (c.opts.allErrors = y), e.compositeRule = c.compositeRule = _, r += " if (" + v + ") {   ";
      var x = x || [];
      x.push(r), r = "", e.createErrors !== false ? (r += " { keyword: 'not' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(d) + " , params: {} ", e.opts.messages !== false && (r += " , message: 'should NOT be valid' "), e.opts.verbose && (r += " , schema: validate.schema" + u + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + m + " "), r += " } ") : r += " {} ";
      var w = r;
      r = x.pop(), !e.compositeRule && h ? e.async ? r += " throw new ValidationError([" + w + "]); " : r += " validate.errors = [" + w + "]; return false; " : r += " var err = " + w + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", r += " } else {  errors = " + b + "; if (vErrors !== null) { if (" + b + ") vErrors.length = " + b + "; else vErrors = null; } ", e.opts.allErrors && (r += " } ");
    } else r += "  var err =   ", e.createErrors !== false ? (r += " { keyword: 'not' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(d) + " , params: {} ", e.opts.messages !== false && (r += " , message: 'should NOT be valid' "), e.opts.verbose && (r += " , schema: validate.schema" + u + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + m + " "), r += " } ") : r += " {} ", r += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", h && (r += " if (false) { ");
    return r;
  };
});
var _i = B((Xf, yi) => {
  "use strict";
  yi.exports = function(e, t, s) {
    var r = " ", n = e.level, o = e.dataLevel, i = e.schema[t], u = e.schemaPath + e.util.getProperty(t), d = e.errSchemaPath + "/" + t, h = !e.opts.allErrors, m = "data" + (o || ""), b = "valid" + n, c = "errs__" + n, v = e.util.copy(e), _ = "";
    v.level++;
    var y = "valid" + v.level, x = v.baseId, w = "prevValid" + n, S = "passingSchemas" + n;
    r += "var " + c + " = errors , " + w + " = false , " + b + " = false , " + S + " = null; ";
    var R = e.compositeRule;
    e.compositeRule = v.compositeRule = true;
    var A = i;
    if (A) for (var I, z2 = -1, M = A.length - 1; z2 < M; ) I = A[z2 += 1], (e.opts.strictKeywords ? typeof I == "object" && Object.keys(I).length > 0 || I === false : e.util.schemaHasRules(I, e.RULES.all)) ? (v.schema = I, v.schemaPath = u + "[" + z2 + "]", v.errSchemaPath = d + "/" + z2, r += "  " + e.validate(v) + " ", v.baseId = x) : r += " var " + y + " = true; ", z2 && (r += " if (" + y + " && " + w + ") { " + b + " = false; " + S + " = [" + S + ", " + z2 + "]; } else { ", _ += "}"), r += " if (" + y + ") { " + b + " = " + w + " = true; " + S + " = " + z2 + "; }";
    return e.compositeRule = v.compositeRule = R, r += "" + _ + "if (!" + b + ") {   var err =   ", e.createErrors !== false ? (r += " { keyword: 'oneOf' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(d) + " , params: { passingSchemas: " + S + " } ", e.opts.messages !== false && (r += " , message: 'should match exactly one schema in oneOf' "), e.opts.verbose && (r += " , schema: validate.schema" + u + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + m + " "), r += " } ") : r += " {} ", r += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", !e.compositeRule && h && (e.async ? r += " throw new ValidationError(vErrors); " : r += " validate.errors = vErrors; return false; "), r += "} else {  errors = " + c + "; if (vErrors !== null) { if (" + c + ") vErrors.length = " + c + "; else vErrors = null; }", e.opts.allErrors && (r += " } "), r;
  };
});
var Pi = B((eh, bi) => {
  "use strict";
  bi.exports = function(e, t, s) {
    var r = " ", n = e.level, o = e.dataLevel, i = e.schema[t], u = e.schemaPath + e.util.getProperty(t), d = e.errSchemaPath + "/" + t, h = !e.opts.allErrors, m = "data" + (o || ""), b = "valid" + n, c = e.opts.$data && i && i.$data, v;
    c ? (r += " var schema" + n + " = " + e.util.getData(i.$data, o, e.dataPathArr) + "; ", v = "schema" + n) : v = i;
    var _ = e.opts.regExp ? "regExp" : "new RegExp";
    if (c) r += " var " + b + " = true; try { " + b + " = " + _ + "(" + v + ").test(" + m + "); } catch(e) { " + b + " = false; } if ( ", c && (r += " (" + v + " !== undefined && typeof " + v + " != 'string') || "), r += " !" + b + ") {";
    else {
      var y = e.usePattern(i);
      r += " if ( ", c && (r += " (" + v + " !== undefined && typeof " + v + " != 'string') || "), r += " !" + y + ".test(" + m + ") ) {";
    }
    var x = x || [];
    x.push(r), r = "", e.createErrors !== false ? (r += " { keyword: 'pattern' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(d) + " , params: { pattern:  ", c ? r += "" + v : r += "" + e.util.toQuotedString(i), r += "  } ", e.opts.messages !== false && (r += ` , message: 'should match pattern "`, c ? r += "' + " + v + " + '" : r += "" + e.util.escapeQuotes(i), r += `"' `), e.opts.verbose && (r += " , schema:  ", c ? r += "validate.schema" + u : r += "" + e.util.toQuotedString(i), r += "         , parentSchema: validate.schema" + e.schemaPath + " , data: " + m + " "), r += " } ") : r += " {} ";
    var w = r;
    return r = x.pop(), !e.compositeRule && h ? e.async ? r += " throw new ValidationError([" + w + "]); " : r += " validate.errors = [" + w + "]; return false; " : r += " var err = " + w + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", r += "} ", h && (r += " else { "), r;
  };
});
var Ei = B((rh, xi) => {
  "use strict";
  xi.exports = function(e, t, s) {
    var r = " ", n = e.level, o = e.dataLevel, i = e.schema[t], u = e.schemaPath + e.util.getProperty(t), d = e.errSchemaPath + "/" + t, h = !e.opts.allErrors, m = "data" + (o || ""), b = "errs__" + n, c = e.util.copy(e), v = "";
    c.level++;
    var _ = "valid" + c.level, y = "key" + n, x = "idx" + n, w = c.dataLevel = e.dataLevel + 1, S = "data" + w, R = "dataProperties" + n, A = Object.keys(i || {}).filter(re), I = e.schema.patternProperties || {}, z2 = Object.keys(I).filter(re), M = e.schema.additionalProperties, k = A.length || z2.length, L = M === false, q = typeof M == "object" && Object.keys(M).length, F = e.opts.removeAdditional, Z = L || q || F, $ = e.opts.ownProperties, D = e.baseId, G = e.schema.required;
    if (G && !(e.opts.$data && G.$data) && G.length < e.opts.loopRequired) var X = e.util.toHash(G);
    function re(Qe) {
      return Qe !== "__proto__";
    }
    if (r += "var " + b + " = errors;var " + _ + " = true;", $ && (r += " var " + R + " = undefined;"), Z) {
      if ($ ? r += " " + R + " = " + R + " || Object.keys(" + m + "); for (var " + x + "=0; " + x + "<" + R + ".length; " + x + "++) { var " + y + " = " + R + "[" + x + "]; " : r += " for (var " + y + " in " + m + ") { ", k) {
        if (r += " var isAdditional" + n + " = !(false ", A.length) if (A.length > 8) r += " || validate.schema" + u + ".hasOwnProperty(" + y + ") ";
        else {
          var Y = A;
          if (Y) for (var Q, se = -1, _e = Y.length - 1; se < _e; ) Q = Y[se += 1], r += " || " + y + " == " + e.util.toQuotedString(Q) + " ";
        }
        if (z2.length) {
          var Se = z2;
          if (Se) for (var fe, ce = -1, Ee = Se.length - 1; ce < Ee; ) fe = Se[ce += 1], r += " || " + e.usePattern(fe) + ".test(" + y + ") ";
        }
        r += " ); if (isAdditional" + n + ") { ";
      }
      if (F == "all") r += " delete " + m + "[" + y + "]; ";
      else {
        var we = e.errorPath, pr = "' + " + y + " + '";
        if (e.opts._errorDataPathProperty && (e.errorPath = e.util.getPathExpr(e.errorPath, y, e.opts.jsonPointers)), L) if (F) r += " delete " + m + "[" + y + "]; ";
        else {
          r += " " + _ + " = false; ";
          var nr = d;
          d = e.errSchemaPath + "/additionalProperties";
          var be = be || [];
          be.push(r), r = "", e.createErrors !== false ? (r += " { keyword: 'additionalProperties' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(d) + " , params: { additionalProperty: '" + pr + "' } ", e.opts.messages !== false && (r += " , message: '", e.opts._errorDataPathProperty ? r += "is an invalid additional property" : r += "should NOT have additional properties", r += "' "), e.opts.verbose && (r += " , schema: false , parentSchema: validate.schema" + e.schemaPath + " , data: " + m + " "), r += " } ") : r += " {} ";
          var ge = r;
          r = be.pop(), !e.compositeRule && h ? e.async ? r += " throw new ValidationError([" + ge + "]); " : r += " validate.errors = [" + ge + "]; return false; " : r += " var err = " + ge + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", d = nr, h && (r += " break; ");
        }
        else if (q) if (F == "failing") {
          r += " var " + b + " = errors;  ";
          var xr = e.compositeRule;
          e.compositeRule = c.compositeRule = true, c.schema = M, c.schemaPath = e.schemaPath + ".additionalProperties", c.errSchemaPath = e.errSchemaPath + "/additionalProperties", c.errorPath = e.opts._errorDataPathProperty ? e.errorPath : e.util.getPathExpr(e.errorPath, y, e.opts.jsonPointers);
          var Te = m + "[" + y + "]";
          c.dataPathArr[w] = y;
          var oe = e.validate(c);
          c.baseId = D, e.util.varOccurences(oe, S) < 2 ? r += " " + e.util.varReplace(oe, S, Te) + " " : r += " var " + S + " = " + Te + "; " + oe + " ", r += " if (!" + _ + ") { errors = " + b + "; if (validate.errors !== null) { if (errors) validate.errors.length = errors; else validate.errors = null; } delete " + m + "[" + y + "]; }  ", e.compositeRule = c.compositeRule = xr;
        } else {
          c.schema = M, c.schemaPath = e.schemaPath + ".additionalProperties", c.errSchemaPath = e.errSchemaPath + "/additionalProperties", c.errorPath = e.opts._errorDataPathProperty ? e.errorPath : e.util.getPathExpr(e.errorPath, y, e.opts.jsonPointers);
          var Te = m + "[" + y + "]";
          c.dataPathArr[w] = y;
          var oe = e.validate(c);
          c.baseId = D, e.util.varOccurences(oe, S) < 2 ? r += " " + e.util.varReplace(oe, S, Te) + " " : r += " var " + S + " = " + Te + "; " + oe + " ", h && (r += " if (!" + _ + ") break; ");
        }
        e.errorPath = we;
      }
      k && (r += " } "), r += " }  ", h && (r += " if (" + _ + ") { ", v += "}");
    }
    var mr = e.opts.useDefaults && !e.compositeRule;
    if (A.length) {
      var ir = A;
      if (ir) for (var Q, Er = -1, Sr = ir.length - 1; Er < Sr; ) {
        Q = ir[Er += 1];
        var Re = i[Q];
        if (e.opts.strictKeywords ? typeof Re == "object" && Object.keys(Re).length > 0 || Re === false : e.util.schemaHasRules(Re, e.RULES.all)) {
          var Me = e.util.getProperty(Q), Te = m + Me, Ie = mr && Re.default !== void 0;
          c.schema = Re, c.schemaPath = u + Me, c.errSchemaPath = d + "/" + e.util.escapeFragment(Q), c.errorPath = e.util.getPath(e.errorPath, Q, e.opts.jsonPointers), c.dataPathArr[w] = e.util.toQuotedString(Q);
          var oe = e.validate(c);
          if (c.baseId = D, e.util.varOccurences(oe, S) < 2) {
            oe = e.util.varReplace(oe, S, Te);
            var $e = Te;
          } else {
            var $e = S;
            r += " var " + S + " = " + Te + "; ";
          }
          if (Ie) r += " " + oe + " ";
          else {
            if (X && X[Q]) {
              r += " if ( " + $e + " === undefined ", $ && (r += " || ! Object.prototype.hasOwnProperty.call(" + m + ", '" + e.util.escapeQuotes(Q) + "') "), r += ") { " + _ + " = false; ";
              var we = e.errorPath, nr = d, Xe = e.util.escapeQuotes(Q);
              e.opts._errorDataPathProperty && (e.errorPath = e.util.getPath(we, Q, e.opts.jsonPointers)), d = e.errSchemaPath + "/required";
              var be = be || [];
              be.push(r), r = "", e.createErrors !== false ? (r += " { keyword: 'required' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(d) + " , params: { missingProperty: '" + Xe + "' } ", e.opts.messages !== false && (r += " , message: '", e.opts._errorDataPathProperty ? r += "is a required property" : r += "should have required property \\'" + Xe + "\\'", r += "' "), e.opts.verbose && (r += " , schema: validate.schema" + u + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + m + " "), r += " } ") : r += " {} ";
              var ge = r;
              r = be.pop(), !e.compositeRule && h ? e.async ? r += " throw new ValidationError([" + ge + "]); " : r += " validate.errors = [" + ge + "]; return false; " : r += " var err = " + ge + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", d = nr, e.errorPath = we, r += " } else { ";
            } else h ? (r += " if ( " + $e + " === undefined ", $ && (r += " || ! Object.prototype.hasOwnProperty.call(" + m + ", '" + e.util.escapeQuotes(Q) + "') "), r += ") { " + _ + " = true; } else { ") : (r += " if (" + $e + " !== undefined ", $ && (r += " &&   Object.prototype.hasOwnProperty.call(" + m + ", '" + e.util.escapeQuotes(Q) + "') "), r += " ) { ");
            r += " " + oe + " } ";
          }
        }
        h && (r += " if (" + _ + ") { ", v += "}");
      }
    }
    if (z2.length) {
      var je = z2;
      if (je) for (var fe, Et = -1, da = je.length - 1; Et < da; ) {
        fe = je[Et += 1];
        var Re = I[fe];
        if (e.opts.strictKeywords ? typeof Re == "object" && Object.keys(Re).length > 0 || Re === false : e.util.schemaHasRules(Re, e.RULES.all)) {
          c.schema = Re, c.schemaPath = e.schemaPath + ".patternProperties" + e.util.getProperty(fe), c.errSchemaPath = e.errSchemaPath + "/patternProperties/" + e.util.escapeFragment(fe), $ ? r += " " + R + " = " + R + " || Object.keys(" + m + "); for (var " + x + "=0; " + x + "<" + R + ".length; " + x + "++) { var " + y + " = " + R + "[" + x + "]; " : r += " for (var " + y + " in " + m + ") { ", r += " if (" + e.usePattern(fe) + ".test(" + y + ")) { ", c.errorPath = e.util.getPathExpr(e.errorPath, y, e.opts.jsonPointers);
          var Te = m + "[" + y + "]";
          c.dataPathArr[w] = y;
          var oe = e.validate(c);
          c.baseId = D, e.util.varOccurences(oe, S) < 2 ? r += " " + e.util.varReplace(oe, S, Te) + " " : r += " var " + S + " = " + Te + "; " + oe + " ", h && (r += " if (!" + _ + ") break; "), r += " } ", h && (r += " else " + _ + " = true; "), r += " }  ", h && (r += " if (" + _ + ") { ", v += "}");
        }
      }
    }
    return h && (r += " " + v + " if (" + b + " == errors) {"), r;
  };
});
var wi = B((th, Si) => {
  "use strict";
  Si.exports = function(e, t, s) {
    var r = " ", n = e.level, o = e.dataLevel, i = e.schema[t], u = e.schemaPath + e.util.getProperty(t), d = e.errSchemaPath + "/" + t, h = !e.opts.allErrors, m = "data" + (o || ""), b = "errs__" + n, c = e.util.copy(e), v = "";
    c.level++;
    var _ = "valid" + c.level;
    if (r += "var " + b + " = errors;", e.opts.strictKeywords ? typeof i == "object" && Object.keys(i).length > 0 || i === false : e.util.schemaHasRules(i, e.RULES.all)) {
      c.schema = i, c.schemaPath = u, c.errSchemaPath = d;
      var y = "key" + n, x = "idx" + n, w = "i" + n, S = "' + " + y + " + '", R = c.dataLevel = e.dataLevel + 1, A = "data" + R, I = "dataProperties" + n, z2 = e.opts.ownProperties, M = e.baseId;
      z2 && (r += " var " + I + " = undefined; "), z2 ? r += " " + I + " = " + I + " || Object.keys(" + m + "); for (var " + x + "=0; " + x + "<" + I + ".length; " + x + "++) { var " + y + " = " + I + "[" + x + "]; " : r += " for (var " + y + " in " + m + ") { ", r += " var startErrs" + n + " = errors; ";
      var k = y, L = e.compositeRule;
      e.compositeRule = c.compositeRule = true;
      var q = e.validate(c);
      c.baseId = M, e.util.varOccurences(q, A) < 2 ? r += " " + e.util.varReplace(q, A, k) + " " : r += " var " + A + " = " + k + "; " + q + " ", e.compositeRule = c.compositeRule = L, r += " if (!" + _ + ") { for (var " + w + "=startErrs" + n + "; " + w + "<errors; " + w + "++) { vErrors[" + w + "].propertyName = " + y + "; }   var err =   ", e.createErrors !== false ? (r += " { keyword: 'propertyNames' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(d) + " , params: { propertyName: '" + S + "' } ", e.opts.messages !== false && (r += " , message: 'property name \\'" + S + "\\' is invalid' "), e.opts.verbose && (r += " , schema: validate.schema" + u + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + m + " "), r += " } ") : r += " {} ", r += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", !e.compositeRule && h && (e.async ? r += " throw new ValidationError(vErrors); " : r += " validate.errors = vErrors; return false; "), h && (r += " break; "), r += " } }";
    }
    return h && (r += " " + v + " if (" + b + " == errors) {"), r;
  };
});
var Ti = B((ah, Ri) => {
  "use strict";
  Ri.exports = function(e, t, s) {
    var r = " ", n = e.level, o = e.dataLevel, i = e.schema[t], u = e.schemaPath + e.util.getProperty(t), d = e.errSchemaPath + "/" + t, h = !e.opts.allErrors, m = "data" + (o || ""), b = "valid" + n, c = e.opts.$data && i && i.$data, v;
    c ? (r += " var schema" + n + " = " + e.util.getData(i.$data, o, e.dataPathArr) + "; ", v = "schema" + n) : v = i;
    var _ = "schema" + n;
    if (!c) if (i.length < e.opts.loopRequired && e.schema.properties && Object.keys(e.schema.properties).length) {
      var y = [], x = i;
      if (x) for (var w, S = -1, R = x.length - 1; S < R; ) {
        w = x[S += 1];
        var A = e.schema.properties[w];
        A && (e.opts.strictKeywords ? typeof A == "object" && Object.keys(A).length > 0 || A === false : e.util.schemaHasRules(A, e.RULES.all)) || (y[y.length] = w);
      }
    } else var y = i;
    if (c || y.length) {
      var I = e.errorPath, z2 = c || y.length >= e.opts.loopRequired, M = e.opts.ownProperties;
      if (h) if (r += " var missing" + n + "; ", z2) {
        c || (r += " var " + _ + " = validate.schema" + u + "; ");
        var k = "i" + n, L = "schema" + n + "[" + k + "]", q = "' + " + L + " + '";
        e.opts._errorDataPathProperty && (e.errorPath = e.util.getPathExpr(I, L, e.opts.jsonPointers)), r += " var " + b + " = true; ", c && (r += " if (schema" + n + " === undefined) " + b + " = true; else if (!Array.isArray(schema" + n + ")) " + b + " = false; else {"), r += " for (var " + k + " = 0; " + k + " < " + _ + ".length; " + k + "++) { " + b + " = " + m + "[" + _ + "[" + k + "]] !== undefined ", M && (r += " &&   Object.prototype.hasOwnProperty.call(" + m + ", " + _ + "[" + k + "]) "), r += "; if (!" + b + ") break; } ", c && (r += "  }  "), r += "  if (!" + b + ") {   ";
        var F = F || [];
        F.push(r), r = "", e.createErrors !== false ? (r += " { keyword: 'required' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(d) + " , params: { missingProperty: '" + q + "' } ", e.opts.messages !== false && (r += " , message: '", e.opts._errorDataPathProperty ? r += "is a required property" : r += "should have required property \\'" + q + "\\'", r += "' "), e.opts.verbose && (r += " , schema: validate.schema" + u + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + m + " "), r += " } ") : r += " {} ";
        var Z = r;
        r = F.pop(), !e.compositeRule && h ? e.async ? r += " throw new ValidationError([" + Z + "]); " : r += " validate.errors = [" + Z + "]; return false; " : r += " var err = " + Z + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", r += " } else { ";
      } else {
        r += " if ( ";
        var $ = y;
        if ($) for (var D, k = -1, G = $.length - 1; k < G; ) {
          D = $[k += 1], k && (r += " || ");
          var X = e.util.getProperty(D), re = m + X;
          r += " ( ( " + re + " === undefined ", M && (r += " || ! Object.prototype.hasOwnProperty.call(" + m + ", '" + e.util.escapeQuotes(D) + "') "), r += ") && (missing" + n + " = " + e.util.toQuotedString(e.opts.jsonPointers ? D : X) + ") ) ";
        }
        r += ") {  ";
        var L = "missing" + n, q = "' + " + L + " + '";
        e.opts._errorDataPathProperty && (e.errorPath = e.opts.jsonPointers ? e.util.getPathExpr(I, L, true) : I + " + " + L);
        var F = F || [];
        F.push(r), r = "", e.createErrors !== false ? (r += " { keyword: 'required' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(d) + " , params: { missingProperty: '" + q + "' } ", e.opts.messages !== false && (r += " , message: '", e.opts._errorDataPathProperty ? r += "is a required property" : r += "should have required property \\'" + q + "\\'", r += "' "), e.opts.verbose && (r += " , schema: validate.schema" + u + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + m + " "), r += " } ") : r += " {} ";
        var Z = r;
        r = F.pop(), !e.compositeRule && h ? e.async ? r += " throw new ValidationError([" + Z + "]); " : r += " validate.errors = [" + Z + "]; return false; " : r += " var err = " + Z + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", r += " } else { ";
      }
      else if (z2) {
        c || (r += " var " + _ + " = validate.schema" + u + "; ");
        var k = "i" + n, L = "schema" + n + "[" + k + "]", q = "' + " + L + " + '";
        e.opts._errorDataPathProperty && (e.errorPath = e.util.getPathExpr(I, L, e.opts.jsonPointers)), c && (r += " if (" + _ + " && !Array.isArray(" + _ + ")) {  var err =   ", e.createErrors !== false ? (r += " { keyword: 'required' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(d) + " , params: { missingProperty: '" + q + "' } ", e.opts.messages !== false && (r += " , message: '", e.opts._errorDataPathProperty ? r += "is a required property" : r += "should have required property \\'" + q + "\\'", r += "' "), e.opts.verbose && (r += " , schema: validate.schema" + u + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + m + " "), r += " } ") : r += " {} ", r += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } else if (" + _ + " !== undefined) { "), r += " for (var " + k + " = 0; " + k + " < " + _ + ".length; " + k + "++) { if (" + m + "[" + _ + "[" + k + "]] === undefined ", M && (r += " || ! Object.prototype.hasOwnProperty.call(" + m + ", " + _ + "[" + k + "]) "), r += ") {  var err =   ", e.createErrors !== false ? (r += " { keyword: 'required' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(d) + " , params: { missingProperty: '" + q + "' } ", e.opts.messages !== false && (r += " , message: '", e.opts._errorDataPathProperty ? r += "is a required property" : r += "should have required property \\'" + q + "\\'", r += "' "), e.opts.verbose && (r += " , schema: validate.schema" + u + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + m + " "), r += " } ") : r += " {} ", r += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } } ", c && (r += "  }  ");
      } else {
        var Y = y;
        if (Y) for (var D, Q = -1, se = Y.length - 1; Q < se; ) {
          D = Y[Q += 1];
          var X = e.util.getProperty(D), q = e.util.escapeQuotes(D), re = m + X;
          e.opts._errorDataPathProperty && (e.errorPath = e.util.getPath(I, D, e.opts.jsonPointers)), r += " if ( " + re + " === undefined ", M && (r += " || ! Object.prototype.hasOwnProperty.call(" + m + ", '" + e.util.escapeQuotes(D) + "') "), r += ") {  var err =   ", e.createErrors !== false ? (r += " { keyword: 'required' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(d) + " , params: { missingProperty: '" + q + "' } ", e.opts.messages !== false && (r += " , message: '", e.opts._errorDataPathProperty ? r += "is a required property" : r += "should have required property \\'" + q + "\\'", r += "' "), e.opts.verbose && (r += " , schema: validate.schema" + u + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + m + " "), r += " } ") : r += " {} ", r += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } ";
        }
      }
      e.errorPath = I;
    } else h && (r += " if (true) {");
    return r;
  };
});
var $i = B((sh, Oi) => {
  "use strict";
  Oi.exports = function(e, t, s) {
    var r = " ", n = e.level, o = e.dataLevel, i = e.schema[t], u = e.schemaPath + e.util.getProperty(t), d = e.errSchemaPath + "/" + t, h = !e.opts.allErrors, m = "data" + (o || ""), b = "valid" + n, c = e.opts.$data && i && i.$data, v;
    if (c ? (r += " var schema" + n + " = " + e.util.getData(i.$data, o, e.dataPathArr) + "; ", v = "schema" + n) : v = i, (i || c) && e.opts.uniqueItems !== false) {
      c && (r += " var " + b + "; if (" + v + " === false || " + v + " === undefined) " + b + " = true; else if (typeof " + v + " != 'boolean') " + b + " = false; else { "), r += " var i = " + m + ".length , " + b + " = true , j; if (i > 1) { ";
      var _ = e.schema.items && e.schema.items.type, y = Array.isArray(_);
      if (!_ || _ == "object" || _ == "array" || y && (_.indexOf("object") >= 0 || _.indexOf("array") >= 0)) r += " outer: for (;i--;) { for (j = i; j--;) { if (equal(" + m + "[i], " + m + "[j])) { " + b + " = false; break outer; } } } ";
      else {
        r += " var itemIndices = {}, item; for (;i--;) { var item = " + m + "[i]; ";
        var x = "checkDataType" + (y ? "s" : "");
        r += " if (" + e.util[x](_, "item", e.opts.strictNumbers, true) + ") continue; ", y && (r += ` if (typeof item == 'string') item = '"' + item; `), r += " if (typeof itemIndices[item] == 'number') { " + b + " = false; j = itemIndices[item]; break; } itemIndices[item] = i; } ";
      }
      r += " } ", c && (r += "  }  "), r += " if (!" + b + ") {   ";
      var w = w || [];
      w.push(r), r = "", e.createErrors !== false ? (r += " { keyword: 'uniqueItems' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(d) + " , params: { i: i, j: j } ", e.opts.messages !== false && (r += " , message: 'should NOT have duplicate items (items ## ' + j + ' and ' + i + ' are identical)' "), e.opts.verbose && (r += " , schema:  ", c ? r += "validate.schema" + u : r += "" + i, r += "         , parentSchema: validate.schema" + e.schemaPath + " , data: " + m + " "), r += " } ") : r += " {} ";
      var S = r;
      r = w.pop(), !e.compositeRule && h ? e.async ? r += " throw new ValidationError([" + S + "]); " : r += " validate.errors = [" + S + "]; return false; " : r += " var err = " + S + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", r += " } ", h && (r += " else { ");
    } else h && (r += " if (true) { ");
    return r;
  };
});
var Di = B((nh, Ai) => {
  "use strict";
  Ai.exports = { $ref: Zn(), allOf: Hn(), anyOf: Qn(), $comment: Kn(), const: Gn(), contains: Xn(), dependencies: ri(), enum: ai(), format: ni(), if: oi(), items: ui(), maximum: es(), minimum: es(), maxItems: rs(), minItems: rs(), maxLength: ts(), minLength: ts(), maxProperties: as(), minProperties: as(), multipleOf: mi(), not: gi(), oneOf: _i(), pattern: Pi(), properties: Ei(), propertyNames: wi(), required: Ti(), uniqueItems: $i(), validate: Ya() };
});
var Ci = B((ih, ki) => {
  "use strict";
  var Ii = Di(), ss = Vr().toHash;
  ki.exports = function() {
    var e = [{ type: "number", rules: [{ maximum: ["exclusiveMaximum"] }, { minimum: ["exclusiveMinimum"] }, "multipleOf", "format"] }, { type: "string", rules: ["maxLength", "minLength", "pattern", "format"] }, { type: "array", rules: ["maxItems", "minItems", "items", "contains", "uniqueItems"] }, { type: "object", rules: ["maxProperties", "minProperties", "required", "dependencies", "propertyNames", { properties: ["additionalProperties", "patternProperties"] }] }, { rules: ["$ref", "const", "enum", "not", "anyOf", "oneOf", "allOf", "if"] }], t = ["type", "$comment"], s = ["$schema", "$id", "id", "$data", "$async", "title", "description", "default", "definitions", "examples", "readOnly", "writeOnly", "contentMediaType", "contentEncoding", "additionalItems", "then", "else"], r = ["number", "integer", "string", "array", "object", "boolean", "null"];
    return e.all = ss(t), e.types = ss(r), e.forEach(function(n) {
      n.rules = n.rules.map(function(o) {
        var i;
        if (typeof o == "object") {
          var u = Object.keys(o)[0];
          i = o[u], o = u, i.forEach(function(h) {
            t.push(h), e.all[h] = true;
          });
        }
        t.push(o);
        var d = e.all[o] = { keyword: o, code: Ii[o], implements: i };
        return d;
      }), e.all.$comment = { keyword: "$comment", code: Ii.$comment }, n.type && (e.types[n.type] = n);
    }), e.keywords = ss(t.concat(s)), e.custom = {}, e;
  };
});
var Fi = B((oh, Ni) => {
  "use strict";
  var ji = ["multipleOf", "maximum", "exclusiveMaximum", "minimum", "exclusiveMinimum", "maxLength", "minLength", "pattern", "additionalItems", "maxItems", "minItems", "uniqueItems", "maxProperties", "minProperties", "required", "additionalProperties", "enum", "format", "const"];
  Ni.exports = function(a16, e) {
    for (var t = 0; t < e.length; t++) {
      a16 = JSON.parse(JSON.stringify(a16));
      var s = e[t].split("/"), r = a16, n;
      for (n = 1; n < s.length; n++) r = r[s[n]];
      for (n = 0; n < ji.length; n++) {
        var o = ji[n], i = r[o];
        i && (r[o] = { anyOf: [i, { $ref: "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#" }] });
      }
    }
    return a16;
  };
});
var Mi = B((lh, qi) => {
  "use strict";
  var cd = Gt().MissingRef;
  qi.exports = Li;
  function Li(a16, e, t) {
    var s = this;
    if (typeof this._opts.loadSchema != "function") throw new Error("options.loadSchema should be a function");
    typeof e == "function" && (t = e, e = void 0);
    var r = n(a16).then(function() {
      var i = s._addSchema(a16, void 0, e);
      return i.validate || o(i);
    });
    return t && r.then(function(i) {
      t(null, i);
    }, t), r;
    function n(i) {
      var u = i.$schema;
      return u && !s.getSchema(u) ? Li.call(s, { $ref: u }, true) : Promise.resolve();
    }
    function o(i) {
      try {
        return s._compile(i);
      } catch (d) {
        if (d instanceof cd) return u(d);
        throw d;
      }
      function u(d) {
        var h = d.missingSchema;
        if (c(h)) throw new Error("Schema " + h + " is loaded but " + d.missingRef + " cannot be resolved");
        var m = s._loadingSchemas[h];
        return m || (m = s._loadingSchemas[h] = s._opts.loadSchema(h), m.then(b, b)), m.then(function(v) {
          if (!c(h)) return n(v).then(function() {
            c(h) || s.addSchema(v, h, void 0, e);
          });
        }).then(function() {
          return o(i);
        });
        function b() {
          delete s._loadingSchemas[h];
        }
        function c(v) {
          return s._refs[v] || s._schemas[v];
        }
      }
    }
  }
});
var zi = B((uh, Ui) => {
  "use strict";
  Ui.exports = function(e, t, s) {
    var r = " ", n = e.level, o = e.dataLevel, i = e.schema[t], u = e.schemaPath + e.util.getProperty(t), d = e.errSchemaPath + "/" + t, h = !e.opts.allErrors, m, b = "data" + (o || ""), c = "valid" + n, v = "errs__" + n, _ = e.opts.$data && i && i.$data, y;
    _ ? (r += " var schema" + n + " = " + e.util.getData(i.$data, o, e.dataPathArr) + "; ", y = "schema" + n) : y = i;
    var x = this, w = "definition" + n, S = x.definition, R = "", A, I, z2, M, k;
    if (_ && S.$data) {
      k = "keywordValidate" + n;
      var L = S.validateSchema;
      r += " var " + w + " = RULES.custom['" + t + "'].definition; var " + k + " = " + w + ".validate;";
    } else {
      if (M = e.useCustomRule(x, i, e.schema, e), !M) return;
      y = "validate.schema" + u, k = M.code, A = S.compile, I = S.inline, z2 = S.macro;
    }
    var q = k + ".errors", F = "i" + n, Z = "ruleErr" + n, $ = S.async;
    if ($ && !e.async) throw new Error("async keyword in sync schema");
    if (I || z2 || (r += "" + q + " = null;"), r += "var " + v + " = errors;var " + c + ";", _ && S.$data && (R += "}", r += " if (" + y + " === undefined) { " + c + " = true; } else { ", L && (R += "}", r += " " + c + " = " + w + ".validateSchema(" + y + "); if (" + c + ") { ")), I) S.statements ? r += " " + M.validate + " " : r += " " + c + " = " + M.validate + "; ";
    else if (z2) {
      var D = e.util.copy(e), R = "";
      D.level++;
      var G = "valid" + D.level;
      D.schema = M.validate, D.schemaPath = "";
      var X = e.compositeRule;
      e.compositeRule = D.compositeRule = true;
      var re = e.validate(D).replace(/validate\.schema/g, k);
      e.compositeRule = D.compositeRule = X, r += " " + re;
    } else {
      var Y = Y || [];
      Y.push(r), r = "", r += "  " + k + ".call( ", e.opts.passContext ? r += "this" : r += "self", A || S.schema === false ? r += " , " + b + " " : r += " , " + y + " , " + b + " , validate.schema" + e.schemaPath + " ", r += " , (dataPath || '')", e.errorPath != '""' && (r += " + " + e.errorPath);
      var Q = o ? "data" + (o - 1 || "") : "parentData", se = o ? e.dataPathArr[o] : "parentDataProperty";
      r += " , " + Q + " , " + se + " , rootData )  ";
      var _e = r;
      r = Y.pop(), S.errors === false ? (r += " " + c + " = ", $ && (r += "await "), r += "" + _e + "; ") : $ ? (q = "customErrors" + n, r += " var " + q + " = null; try { " + c + " = await " + _e + "; } catch (e) { " + c + " = false; if (e instanceof ValidationError) " + q + " = e.errors; else throw e; } ") : r += " " + q + " = null; " + c + " = " + _e + "; ";
    }
    if (S.modifying && (r += " if (" + Q + ") " + b + " = " + Q + "[" + se + "];"), r += "" + R, S.valid) h && (r += " if (true) { ");
    else {
      r += " if ( ", S.valid === void 0 ? (r += " !", z2 ? r += "" + G : r += "" + c) : r += " " + !S.valid + " ", r += ") { ", m = x.keyword;
      var Y = Y || [];
      Y.push(r), r = "";
      var Y = Y || [];
      Y.push(r), r = "", e.createErrors !== false ? (r += " { keyword: '" + (m || "custom") + "' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(d) + " , params: { keyword: '" + x.keyword + "' } ", e.opts.messages !== false && (r += ` , message: 'should pass "` + x.keyword + `" keyword validation' `), e.opts.verbose && (r += " , schema: validate.schema" + u + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + b + " "), r += " } ") : r += " {} ";
      var Se = r;
      r = Y.pop(), !e.compositeRule && h ? e.async ? r += " throw new ValidationError([" + Se + "]); " : r += " validate.errors = [" + Se + "]; return false; " : r += " var err = " + Se + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ";
      var fe = r;
      r = Y.pop(), I ? S.errors ? S.errors != "full" && (r += "  for (var " + F + "=" + v + "; " + F + "<errors; " + F + "++) { var " + Z + " = vErrors[" + F + "]; if (" + Z + ".dataPath === undefined) " + Z + ".dataPath = (dataPath || '') + " + e.errorPath + "; if (" + Z + ".schemaPath === undefined) { " + Z + '.schemaPath = "' + d + '"; } ', e.opts.verbose && (r += " " + Z + ".schema = " + y + "; " + Z + ".data = " + b + "; "), r += " } ") : S.errors === false ? r += " " + fe + " " : (r += " if (" + v + " == errors) { " + fe + " } else {  for (var " + F + "=" + v + "; " + F + "<errors; " + F + "++) { var " + Z + " = vErrors[" + F + "]; if (" + Z + ".dataPath === undefined) " + Z + ".dataPath = (dataPath || '') + " + e.errorPath + "; if (" + Z + ".schemaPath === undefined) { " + Z + '.schemaPath = "' + d + '"; } ', e.opts.verbose && (r += " " + Z + ".schema = " + y + "; " + Z + ".data = " + b + "; "), r += " } } ") : z2 ? (r += "   var err =   ", e.createErrors !== false ? (r += " { keyword: '" + (m || "custom") + "' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(d) + " , params: { keyword: '" + x.keyword + "' } ", e.opts.messages !== false && (r += ` , message: 'should pass "` + x.keyword + `" keyword validation' `), e.opts.verbose && (r += " , schema: validate.schema" + u + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + b + " "), r += " } ") : r += " {} ", r += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", !e.compositeRule && h && (e.async ? r += " throw new ValidationError(vErrors); " : r += " validate.errors = vErrors; return false; ")) : S.errors === false ? r += " " + fe + " " : (r += " if (Array.isArray(" + q + ")) { if (vErrors === null) vErrors = " + q + "; else vErrors = vErrors.concat(" + q + "); errors = vErrors.length;  for (var " + F + "=" + v + "; " + F + "<errors; " + F + "++) { var " + Z + " = vErrors[" + F + "]; if (" + Z + ".dataPath === undefined) " + Z + ".dataPath = (dataPath || '') + " + e.errorPath + ";  " + Z + '.schemaPath = "' + d + '";  ', e.opts.verbose && (r += " " + Z + ".schema = " + y + "; " + Z + ".data = " + b + "; "), r += " } } else { " + fe + " } "), r += " } ", h && (r += " else { ");
    }
    return r;
  };
});
var ns = B((ch, dd) => {
  dd.exports = { $schema: "http://json-schema.org/draft-07/schema#", $id: "http://json-schema.org/draft-07/schema#", title: "Core schema meta-schema", definitions: { schemaArray: { type: "array", minItems: 1, items: { $ref: "#" } }, nonNegativeInteger: { type: "integer", minimum: 0 }, nonNegativeIntegerDefault0: { allOf: [{ $ref: "#/definitions/nonNegativeInteger" }, { default: 0 }] }, simpleTypes: { enum: ["array", "boolean", "integer", "null", "number", "object", "string"] }, stringArray: { type: "array", items: { type: "string" }, uniqueItems: true, default: [] } }, type: ["object", "boolean"], properties: { $id: { type: "string", format: "uri-reference" }, $schema: { type: "string", format: "uri" }, $ref: { type: "string", format: "uri-reference" }, $comment: { type: "string" }, title: { type: "string" }, description: { type: "string" }, default: true, readOnly: { type: "boolean", default: false }, examples: { type: "array", items: true }, multipleOf: { type: "number", exclusiveMinimum: 0 }, maximum: { type: "number" }, exclusiveMaximum: { type: "number" }, minimum: { type: "number" }, exclusiveMinimum: { type: "number" }, maxLength: { $ref: "#/definitions/nonNegativeInteger" }, minLength: { $ref: "#/definitions/nonNegativeIntegerDefault0" }, pattern: { type: "string", format: "regex" }, additionalItems: { $ref: "#" }, items: { anyOf: [{ $ref: "#" }, { $ref: "#/definitions/schemaArray" }], default: true }, maxItems: { $ref: "#/definitions/nonNegativeInteger" }, minItems: { $ref: "#/definitions/nonNegativeIntegerDefault0" }, uniqueItems: { type: "boolean", default: false }, contains: { $ref: "#" }, maxProperties: { $ref: "#/definitions/nonNegativeInteger" }, minProperties: { $ref: "#/definitions/nonNegativeIntegerDefault0" }, required: { $ref: "#/definitions/stringArray" }, additionalProperties: { $ref: "#" }, definitions: { type: "object", additionalProperties: { $ref: "#" }, default: {} }, properties: { type: "object", additionalProperties: { $ref: "#" }, default: {} }, patternProperties: { type: "object", additionalProperties: { $ref: "#" }, propertyNames: { format: "regex" }, default: {} }, dependencies: { type: "object", additionalProperties: { anyOf: [{ $ref: "#" }, { $ref: "#/definitions/stringArray" }] } }, propertyNames: { $ref: "#" }, const: true, enum: { type: "array", items: true, minItems: 1, uniqueItems: true }, type: { anyOf: [{ $ref: "#/definitions/simpleTypes" }, { type: "array", items: { $ref: "#/definitions/simpleTypes" }, minItems: 1, uniqueItems: true }] }, format: { type: "string" }, contentMediaType: { type: "string" }, contentEncoding: { type: "string" }, if: { $ref: "#" }, then: { $ref: "#" }, else: { $ref: "#" }, allOf: { $ref: "#/definitions/schemaArray" }, anyOf: { $ref: "#/definitions/schemaArray" }, oneOf: { $ref: "#/definitions/schemaArray" }, not: { $ref: "#" } }, default: true };
});
var Hi = B((dh, Vi) => {
  "use strict";
  var Zi = ns();
  Vi.exports = { $id: "https://github.com/ajv-validator/ajv/blob/master/lib/definition_schema.js", definitions: { simpleTypes: Zi.definitions.simpleTypes }, type: "object", dependencies: { schema: ["validate"], $data: ["validate"], statements: ["inline"], valid: { not: { required: ["macro"] } } }, properties: { type: Zi.properties.type, schema: { type: "boolean" }, statements: { type: "boolean" }, dependencies: { type: "array", items: { type: "string" } }, metaSchema: { type: "object" }, modifying: { type: "boolean" }, valid: { type: "boolean" }, $data: { type: "boolean" }, async: { type: "boolean" }, errors: { anyOf: [{ type: "boolean" }, { const: "full" }] } } };
});
var Qi = B((fh, Bi) => {
  "use strict";
  var fd = /^[a-z_$][a-z0-9_$-]*$/i, hd = zi(), pd = Hi();
  Bi.exports = { add: md, get: vd, remove: gd, validate: is };
  function md(a16, e) {
    var t = this.RULES;
    if (t.keywords[a16]) throw new Error("Keyword " + a16 + " is already defined");
    if (!fd.test(a16)) throw new Error("Keyword " + a16 + " is not a valid identifier");
    if (e) {
      this.validateKeyword(e, true);
      var s = e.type;
      if (Array.isArray(s)) for (var r = 0; r < s.length; r++) o(a16, s[r], e);
      else o(a16, s, e);
      var n = e.metaSchema;
      n && (e.$data && this._opts.$data && (n = { anyOf: [n, { $ref: "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#" }] }), e.validateSchema = this.compile(n, true));
    }
    t.keywords[a16] = t.all[a16] = true;
    function o(i, u, d) {
      for (var h, m = 0; m < t.length; m++) {
        var b = t[m];
        if (b.type == u) {
          h = b;
          break;
        }
      }
      h || (h = { type: u, rules: [] }, t.push(h));
      var c = { keyword: i, definition: d, custom: true, code: hd, implements: d.implements };
      h.rules.push(c), t.custom[i] = c;
    }
    return this;
  }
  function vd(a16) {
    var e = this.RULES.custom[a16];
    return e ? e.definition : this.RULES.keywords[a16] || false;
  }
  function gd(a16) {
    var e = this.RULES;
    delete e.keywords[a16], delete e.all[a16], delete e.custom[a16];
    for (var t = 0; t < e.length; t++) for (var s = e[t].rules, r = 0; r < s.length; r++) if (s[r].keyword == a16) {
      s.splice(r, 1);
      break;
    }
    return this;
  }
  function is(a16, e) {
    is.errors = null;
    var t = this._validateKeyword = this._validateKeyword || this.compile(pd, true);
    if (t(a16)) return true;
    if (is.errors = t.errors, e) throw new Error("custom keyword definition is invalid: " + this.errorsText(t.errors));
    return false;
  }
});
var Ji = B((hh, yd) => {
  yd.exports = { $schema: "http://json-schema.org/draft-07/schema#", $id: "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#", description: "Meta-schema for $data reference (JSON Schema extension proposal)", type: "object", required: ["$data"], properties: { $data: { type: "string", anyOf: [{ format: "relative-json-pointer" }, { format: "json-pointer" }] } }, additionalProperties: false };
});
var so = B((ph, ao) => {
  "use strict";
  var Wi = Tn(), Hr = Wt(), _d = $n(), Gi = Ha(), bd = Ga(), Pd = Un(), xd = Ci(), Yi = Fi(), Xi = Vr();
  ao.exports = ye;
  ye.prototype.validate = Sd;
  ye.prototype.compile = wd;
  ye.prototype.addSchema = Rd;
  ye.prototype.addMetaSchema = Td;
  ye.prototype.validateSchema = Od;
  ye.prototype.getSchema = Ad;
  ye.prototype.removeSchema = Id;
  ye.prototype.addFormat = Md;
  ye.prototype.errorsText = qd;
  ye.prototype._addSchema = kd;
  ye.prototype._compile = Cd;
  ye.prototype.compileAsync = Mi();
  var na = Qi();
  ye.prototype.addKeyword = na.add;
  ye.prototype.getKeyword = na.get;
  ye.prototype.removeKeyword = na.remove;
  ye.prototype.validateKeyword = na.validate;
  var eo = Gt();
  ye.ValidationError = eo.Validation;
  ye.MissingRefError = eo.MissingRef;
  ye.$dataMetaSchema = Yi;
  var sa = "http://json-schema.org/draft-07/schema", Ki = ["removeAdditional", "useDefaults", "coerceTypes", "strictDefaults"], Ed = ["/properties"];
  function ye(a16) {
    if (!(this instanceof ye)) return new ye(a16);
    a16 = this._opts = Xi.copy(a16) || {}, Bd(this), this._schemas = {}, this._refs = {}, this._fragments = {}, this._formats = Pd(a16.format), this._cache = a16.cache || new _d(), this._loadingSchemas = {}, this._compilations = [], this.RULES = xd(), this._getId = jd(a16), a16.loopRequired = a16.loopRequired || 1 / 0, a16.errorDataPath == "property" && (a16._errorDataPathProperty = true), a16.serialize === void 0 && (a16.serialize = bd), this._metaOpts = Hd(this), a16.formats && Zd(this), a16.keywords && Vd(this), Ud(this), typeof a16.meta == "object" && this.addMetaSchema(a16.meta), a16.nullable && this.addKeyword("nullable", { metaSchema: { type: "boolean" } }), zd(this);
  }
  function Sd(a16, e) {
    var t;
    if (typeof a16 == "string") {
      if (t = this.getSchema(a16), !t) throw new Error('no schema with key or ref "' + a16 + '"');
    } else {
      var s = this._addSchema(a16);
      t = s.validate || this._compile(s);
    }
    var r = t(e);
    return t.$async !== true && (this.errors = t.errors), r;
  }
  function wd(a16, e) {
    var t = this._addSchema(a16, void 0, e);
    return t.validate || this._compile(t);
  }
  function Rd(a16, e, t, s) {
    if (Array.isArray(a16)) {
      for (var r = 0; r < a16.length; r++) this.addSchema(a16[r], void 0, t, s);
      return this;
    }
    var n = this._getId(a16);
    if (n !== void 0 && typeof n != "string") throw new Error("schema id must be string");
    return e = Hr.normalizeId(e || n), to(this, e), this._schemas[e] = this._addSchema(a16, t, s, true), this;
  }
  function Td(a16, e, t) {
    return this.addSchema(a16, e, t, true), this;
  }
  function Od(a16, e) {
    var t = a16.$schema;
    if (t !== void 0 && typeof t != "string") throw new Error("$schema must be a string");
    if (t = t || this._opts.defaultMeta || $d(this), !t) return this.logger.warn("meta-schema not available"), this.errors = null, true;
    var s = this.validate(t, a16);
    if (!s && e) {
      var r = "schema is invalid: " + this.errorsText();
      if (this._opts.validateSchema == "log") this.logger.error(r);
      else throw new Error(r);
    }
    return s;
  }
  function $d(a16) {
    var e = a16._opts.meta;
    return a16._opts.defaultMeta = typeof e == "object" ? a16._getId(e) || e : a16.getSchema(sa) ? sa : void 0, a16._opts.defaultMeta;
  }
  function Ad(a16) {
    var e = ro(this, a16);
    switch (typeof e) {
      case "object":
        return e.validate || this._compile(e);
      case "string":
        return this.getSchema(e);
      case "undefined":
        return Dd(this, a16);
    }
  }
  function Dd(a16, e) {
    var t = Hr.schema.call(a16, { schema: {} }, e);
    if (t) {
      var s = t.schema, r = t.root, n = t.baseId, o = Wi.call(a16, s, r, void 0, n);
      return a16._fragments[e] = new Gi({ ref: e, fragment: true, schema: s, root: r, baseId: n, validate: o }), o;
    }
  }
  function ro(a16, e) {
    return e = Hr.normalizeId(e), a16._schemas[e] || a16._refs[e] || a16._fragments[e];
  }
  function Id(a16) {
    if (a16 instanceof RegExp) return aa(this, this._schemas, a16), aa(this, this._refs, a16), this;
    switch (typeof a16) {
      case "undefined":
        return aa(this, this._schemas), aa(this, this._refs), this._cache.clear(), this;
      case "string":
        var e = ro(this, a16);
        return e && this._cache.del(e.cacheKey), delete this._schemas[a16], delete this._refs[a16], this;
      case "object":
        var t = this._opts.serialize, s = t ? t(a16) : a16;
        this._cache.del(s);
        var r = this._getId(a16);
        r && (r = Hr.normalizeId(r), delete this._schemas[r], delete this._refs[r]);
    }
    return this;
  }
  function aa(a16, e, t) {
    for (var s in e) {
      var r = e[s];
      !r.meta && (!t || t.test(s)) && (a16._cache.del(r.cacheKey), delete e[s]);
    }
  }
  function kd(a16, e, t, s) {
    if (typeof a16 != "object" && typeof a16 != "boolean") throw new Error("schema should be object or boolean");
    var r = this._opts.serialize, n = r ? r(a16) : a16, o = this._cache.get(n);
    if (o) return o;
    s = s || this._opts.addUsedSchema !== false;
    var i = Hr.normalizeId(this._getId(a16));
    i && s && to(this, i);
    var u = this._opts.validateSchema !== false && !e, d;
    u && !(d = i && i == Hr.normalizeId(a16.$schema)) && this.validateSchema(a16, true);
    var h = Hr.ids.call(this, a16), m = new Gi({ id: i, schema: a16, localRefs: h, cacheKey: n, meta: t });
    return i[0] != "#" && s && (this._refs[i] = m), this._cache.put(n, m), u && d && this.validateSchema(a16, true), m;
  }
  function Cd(a16, e) {
    if (a16.compiling) return a16.validate = r, r.schema = a16.schema, r.errors = null, r.root = e || r, a16.schema.$async === true && (r.$async = true), r;
    a16.compiling = true;
    var t;
    a16.meta && (t = this._opts, this._opts = this._metaOpts);
    var s;
    try {
      s = Wi.call(this, a16.schema, e, a16.localRefs);
    } catch (n) {
      throw delete a16.validate, n;
    } finally {
      a16.compiling = false, a16.meta && (this._opts = t);
    }
    return a16.validate = s, a16.refs = s.refs, a16.refVal = s.refVal, a16.root = s.root, s;
    function r() {
      var n = a16.validate, o = n.apply(this, arguments);
      return r.errors = n.errors, o;
    }
  }
  function jd(a16) {
    switch (a16.schemaId) {
      case "auto":
        return Ld;
      case "id":
        return Nd;
      default:
        return Fd;
    }
  }
  function Nd(a16) {
    return a16.$id && this.logger.warn("schema $id ignored", a16.$id), a16.id;
  }
  function Fd(a16) {
    return a16.id && this.logger.warn("schema id ignored", a16.id), a16.$id;
  }
  function Ld(a16) {
    if (a16.$id && a16.id && a16.$id != a16.id) throw new Error("schema $id is different from id");
    return a16.$id || a16.id;
  }
  function qd(a16, e) {
    if (a16 = a16 || this.errors, !a16) return "No errors";
    e = e || {};
    for (var t = e.separator === void 0 ? ", " : e.separator, s = e.dataVar === void 0 ? "data" : e.dataVar, r = "", n = 0; n < a16.length; n++) {
      var o = a16[n];
      o && (r += s + o.dataPath + " " + o.message + t);
    }
    return r.slice(0, -t.length);
  }
  function Md(a16, e) {
    return typeof e == "string" && (e = new RegExp(e)), this._formats[a16] = e, this;
  }
  function Ud(a16) {
    var e;
    if (a16._opts.$data && (e = Ji(), a16.addMetaSchema(e, e.$id, true)), a16._opts.meta !== false) {
      var t = ns();
      a16._opts.$data && (t = Yi(t, Ed)), a16.addMetaSchema(t, sa, true), a16._refs["http://json-schema.org/schema"] = sa;
    }
  }
  function zd(a16) {
    var e = a16._opts.schemas;
    if (e) if (Array.isArray(e)) a16.addSchema(e);
    else for (var t in e) a16.addSchema(e[t], t);
  }
  function Zd(a16) {
    for (var e in a16._opts.formats) {
      var t = a16._opts.formats[e];
      a16.addFormat(e, t);
    }
  }
  function Vd(a16) {
    for (var e in a16._opts.keywords) {
      var t = a16._opts.keywords[e];
      a16.addKeyword(e, t);
    }
  }
  function to(a16, e) {
    if (a16._schemas[e] || a16._refs[e]) throw new Error('schema with key or id "' + e + '" already exists');
  }
  function Hd(a16) {
    for (var e = Xi.copy(a16._opts), t = 0; t < Ki.length; t++) delete e[Ki[t]];
    return e;
  }
  function Bd(a16) {
    var e = a16._opts.logger;
    if (e === false) a16.logger = { log: os, warn: os, error: os };
    else {
      if (e === void 0 && (e = console), !(typeof e == "object" && e.log && e.warn && e.error)) throw new Error("logger must implement log, warn and error methods");
      a16.logger = e;
    }
  }
  function os() {
  }
});
var ae;
(function(a16) {
  a16.assertEqual = (r) => r;
  function e(r) {
  }
  a16.assertIs = e;
  function t(r) {
    throw new Error();
  }
  a16.assertNever = t, a16.arrayToEnum = (r) => {
    let n = {};
    for (let o of r) n[o] = o;
    return n;
  }, a16.getValidEnumValues = (r) => {
    let n = a16.objectKeys(r).filter((i) => typeof r[r[i]] != "number"), o = {};
    for (let i of n) o[i] = r[i];
    return a16.objectValues(o);
  }, a16.objectValues = (r) => a16.objectKeys(r).map(function(n) {
    return r[n];
  }), a16.objectKeys = typeof Object.keys == "function" ? (r) => Object.keys(r) : (r) => {
    let n = [];
    for (let o in r) Object.prototype.hasOwnProperty.call(r, o) && n.push(o);
    return n;
  }, a16.find = (r, n) => {
    for (let o of r) if (n(o)) return o;
  }, a16.isInteger = typeof Number.isInteger == "function" ? (r) => Number.isInteger(r) : (r) => typeof r == "number" && isFinite(r) && Math.floor(r) === r;
  function s(r, n = " | ") {
    return r.map((o) => typeof o == "string" ? `'${o}'` : o).join(n);
  }
  a16.joinValues = s, a16.jsonStringifyReplacer = (r, n) => typeof n == "bigint" ? n.toString() : n;
})(ae || (ae = {}));
var va;
(function(a16) {
  a16.mergeShapes = (e, t) => ({ ...e, ...t });
})(va || (va = {}));
var N = ae.arrayToEnum(["string", "nan", "number", "integer", "float", "boolean", "date", "bigint", "symbol", "function", "undefined", "null", "array", "object", "unknown", "promise", "void", "never", "map", "set"]);
var dr = (a16) => {
  switch (typeof a16) {
    case "undefined":
      return N.undefined;
    case "string":
      return N.string;
    case "number":
      return isNaN(a16) ? N.nan : N.number;
    case "boolean":
      return N.boolean;
    case "function":
      return N.function;
    case "bigint":
      return N.bigint;
    case "symbol":
      return N.symbol;
    case "object":
      return Array.isArray(a16) ? N.array : a16 === null ? N.null : a16.then && typeof a16.then == "function" && a16.catch && typeof a16.catch == "function" ? N.promise : typeof Map < "u" && a16 instanceof Map ? N.map : typeof Set < "u" && a16 instanceof Set ? N.set : typeof Date < "u" && a16 instanceof Date ? N.date : N.object;
    default:
      return N.unknown;
  }
};
var T = ae.arrayToEnum(["invalid_type", "invalid_literal", "custom", "invalid_union", "invalid_union_discriminator", "invalid_enum_value", "unrecognized_keys", "invalid_arguments", "invalid_return_type", "invalid_date", "invalid_string", "too_small", "too_big", "invalid_intersection_types", "not_multiple_of", "not_finite"]);
var gl = (a16) => JSON.stringify(a16, null, 2).replace(/"([^"]+)":/g, "$1:");
var Le = class a extends Error {
  get errors() {
    return this.issues;
  }
  constructor(e) {
    super(), this.issues = [], this.addIssue = (s) => {
      this.issues = [...this.issues, s];
    }, this.addIssues = (s = []) => {
      this.issues = [...this.issues, ...s];
    };
    let t = new.target.prototype;
    Object.setPrototypeOf ? Object.setPrototypeOf(this, t) : this.__proto__ = t, this.name = "ZodError", this.issues = e;
  }
  format(e) {
    let t = e || function(n) {
      return n.message;
    }, s = { _errors: [] }, r = (n) => {
      for (let o of n.issues) if (o.code === "invalid_union") o.unionErrors.map(r);
      else if (o.code === "invalid_return_type") r(o.returnTypeError);
      else if (o.code === "invalid_arguments") r(o.argumentsError);
      else if (o.path.length === 0) s._errors.push(t(o));
      else {
        let i = s, u = 0;
        for (; u < o.path.length; ) {
          let d = o.path[u];
          u === o.path.length - 1 ? (i[d] = i[d] || { _errors: [] }, i[d]._errors.push(t(o))) : i[d] = i[d] || { _errors: [] }, i = i[d], u++;
        }
      }
    };
    return r(this), s;
  }
  static assert(e) {
    if (!(e instanceof a)) throw new Error(`Not a ZodError: ${e}`);
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, ae.jsonStringifyReplacer, 2);
  }
  get isEmpty() {
    return this.issues.length === 0;
  }
  flatten(e = (t) => t.message) {
    let t = {}, s = [];
    for (let r of this.issues) r.path.length > 0 ? (t[r.path[0]] = t[r.path[0]] || [], t[r.path[0]].push(e(r))) : s.push(e(r));
    return { formErrors: s, fieldErrors: t };
  }
  get formErrors() {
    return this.flatten();
  }
};
Le.create = (a16) => new Le(a16);
var rt = (a16, e) => {
  let t;
  switch (a16.code) {
    case T.invalid_type:
      a16.received === N.undefined ? t = "Required" : t = `Expected ${a16.expected}, received ${a16.received}`;
      break;
    case T.invalid_literal:
      t = `Invalid literal value, expected ${JSON.stringify(a16.expected, ae.jsonStringifyReplacer)}`;
      break;
    case T.unrecognized_keys:
      t = `Unrecognized key(s) in object: ${ae.joinValues(a16.keys, ", ")}`;
      break;
    case T.invalid_union:
      t = "Invalid input";
      break;
    case T.invalid_union_discriminator:
      t = `Invalid discriminator value. Expected ${ae.joinValues(a16.options)}`;
      break;
    case T.invalid_enum_value:
      t = `Invalid enum value. Expected ${ae.joinValues(a16.options)}, received '${a16.received}'`;
      break;
    case T.invalid_arguments:
      t = "Invalid function arguments";
      break;
    case T.invalid_return_type:
      t = "Invalid function return type";
      break;
    case T.invalid_date:
      t = "Invalid date";
      break;
    case T.invalid_string:
      typeof a16.validation == "object" ? "includes" in a16.validation ? (t = `Invalid input: must include "${a16.validation.includes}"`, typeof a16.validation.position == "number" && (t = `${t} at one or more positions greater than or equal to ${a16.validation.position}`)) : "startsWith" in a16.validation ? t = `Invalid input: must start with "${a16.validation.startsWith}"` : "endsWith" in a16.validation ? t = `Invalid input: must end with "${a16.validation.endsWith}"` : ae.assertNever(a16.validation) : a16.validation !== "regex" ? t = `Invalid ${a16.validation}` : t = "Invalid";
      break;
    case T.too_small:
      a16.type === "array" ? t = `Array must contain ${a16.exact ? "exactly" : a16.inclusive ? "at least" : "more than"} ${a16.minimum} element(s)` : a16.type === "string" ? t = `String must contain ${a16.exact ? "exactly" : a16.inclusive ? "at least" : "over"} ${a16.minimum} character(s)` : a16.type === "number" ? t = `Number must be ${a16.exact ? "exactly equal to " : a16.inclusive ? "greater than or equal to " : "greater than "}${a16.minimum}` : a16.type === "date" ? t = `Date must be ${a16.exact ? "exactly equal to " : a16.inclusive ? "greater than or equal to " : "greater than "}${new Date(Number(a16.minimum))}` : t = "Invalid input";
      break;
    case T.too_big:
      a16.type === "array" ? t = `Array must contain ${a16.exact ? "exactly" : a16.inclusive ? "at most" : "less than"} ${a16.maximum} element(s)` : a16.type === "string" ? t = `String must contain ${a16.exact ? "exactly" : a16.inclusive ? "at most" : "under"} ${a16.maximum} character(s)` : a16.type === "number" ? t = `Number must be ${a16.exact ? "exactly" : a16.inclusive ? "less than or equal to" : "less than"} ${a16.maximum}` : a16.type === "bigint" ? t = `BigInt must be ${a16.exact ? "exactly" : a16.inclusive ? "less than or equal to" : "less than"} ${a16.maximum}` : a16.type === "date" ? t = `Date must be ${a16.exact ? "exactly" : a16.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(Number(a16.maximum))}` : t = "Invalid input";
      break;
    case T.custom:
      t = "Invalid input";
      break;
    case T.invalid_intersection_types:
      t = "Intersection results could not be merged";
      break;
    case T.not_multiple_of:
      t = `Number must be a multiple of ${a16.multipleOf}`;
      break;
    case T.not_finite:
      t = "Number must be finite";
      break;
    default:
      t = e.defaultError, ae.assertNever(a16);
  }
  return { message: t };
};
var Os = rt;
function yl(a16) {
  Os = a16;
}
function Tt() {
  return Os;
}
var Ot = (a16) => {
  let { data: e, path: t, errorMaps: s, issueData: r } = a16, n = [...t, ...r.path || []], o = { ...r, path: n };
  if (r.message !== void 0) return { ...r, path: n, message: r.message };
  let i = "", u = s.filter((d) => !!d).slice().reverse();
  for (let d of u) i = d(o, { data: e, defaultError: i }).message;
  return { ...r, path: n, message: i };
};
var _l = [];
function C(a16, e) {
  let t = Tt(), s = Ot({ issueData: e, data: a16.data, path: a16.path, errorMaps: [a16.common.contextualErrorMap, a16.schemaErrorMap, t, t === rt ? void 0 : rt].filter((r) => !!r) });
  a16.common.issues.push(s);
}
var Oe = class a2 {
  constructor() {
    this.value = "valid";
  }
  dirty() {
    this.value === "valid" && (this.value = "dirty");
  }
  abort() {
    this.value !== "aborted" && (this.value = "aborted");
  }
  static mergeArray(e, t) {
    let s = [];
    for (let r of t) {
      if (r.status === "aborted") return H;
      r.status === "dirty" && e.dirty(), s.push(r.value);
    }
    return { status: e.value, value: s };
  }
  static async mergeObjectAsync(e, t) {
    let s = [];
    for (let r of t) {
      let n = await r.key, o = await r.value;
      s.push({ key: n, value: o });
    }
    return a2.mergeObjectSync(e, s);
  }
  static mergeObjectSync(e, t) {
    let s = {};
    for (let r of t) {
      let { key: n, value: o } = r;
      if (n.status === "aborted" || o.status === "aborted") return H;
      n.status === "dirty" && e.dirty(), o.status === "dirty" && e.dirty(), n.value !== "__proto__" && (typeof o.value < "u" || r.alwaysSet) && (s[n.value] = o.value);
    }
    return { status: e.value, value: s };
  }
};
var H = Object.freeze({ status: "aborted" });
var et = (a16) => ({ status: "dirty", value: a16 });
var Ae = (a16) => ({ status: "valid", value: a16 });
var ga = (a16) => a16.status === "aborted";
var ya = (a16) => a16.status === "dirty";
var Or = (a16) => a16.status === "valid";
var vt = (a16) => typeof Promise < "u" && a16 instanceof Promise;
function $t(a16, e, t, s) {
  if (t === "a" && !s) throw new TypeError("Private accessor was defined without a getter");
  if (typeof e == "function" ? a16 !== e || !s : !e.has(a16)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return t === "m" ? s : t === "a" ? s.call(a16) : s ? s.value : e.get(a16);
}
function $s(a16, e, t, s, r) {
  if (s === "m") throw new TypeError("Private method is not writable");
  if (s === "a" && !r) throw new TypeError("Private accessor was defined without a setter");
  if (typeof e == "function" ? a16 !== e || !r : !e.has(a16)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return s === "a" ? r.call(a16, t) : r ? r.value = t : e.set(a16, t), t;
}
var U;
(function(a16) {
  a16.errToObj = (e) => typeof e == "string" ? { message: e } : e || {}, a16.toString = (e) => typeof e == "string" ? e : e?.message;
})(U || (U = {}));
var pt;
var mt;
var Ve = class {
  constructor(e, t, s, r) {
    this._cachedPath = [], this.parent = e, this.data = t, this._path = s, this._key = r;
  }
  get path() {
    return this._cachedPath.length || (this._key instanceof Array ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath;
  }
};
var Rs = (a16, e) => {
  if (Or(e)) return { success: true, data: e.value };
  if (!a16.common.issues.length) throw new Error("Validation failed but no issues detected.");
  return { success: false, get error() {
    if (this._error) return this._error;
    let t = new Le(a16.common.issues);
    return this._error = t, this._error;
  } };
};
function J(a16) {
  if (!a16) return {};
  let { errorMap: e, invalid_type_error: t, required_error: s, description: r } = a16;
  if (e && (t || s)) throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
  return e ? { errorMap: e, description: r } : { errorMap: (o, i) => {
    var u, d;
    let { message: h } = a16;
    return o.code === "invalid_enum_value" ? { message: h ?? i.defaultError } : typeof i.data > "u" ? { message: (u = h ?? s) !== null && u !== void 0 ? u : i.defaultError } : o.code !== "invalid_type" ? { message: i.defaultError } : { message: (d = h ?? t) !== null && d !== void 0 ? d : i.defaultError };
  }, description: r };
}
var K = class {
  get description() {
    return this._def.description;
  }
  _getType(e) {
    return dr(e.data);
  }
  _getOrReturnCtx(e, t) {
    return t || { common: e.parent.common, data: e.data, parsedType: dr(e.data), schemaErrorMap: this._def.errorMap, path: e.path, parent: e.parent };
  }
  _processInputParams(e) {
    return { status: new Oe(), ctx: { common: e.parent.common, data: e.data, parsedType: dr(e.data), schemaErrorMap: this._def.errorMap, path: e.path, parent: e.parent } };
  }
  _parseSync(e) {
    let t = this._parse(e);
    if (vt(t)) throw new Error("Synchronous parse encountered promise.");
    return t;
  }
  _parseAsync(e) {
    let t = this._parse(e);
    return Promise.resolve(t);
  }
  parse(e, t) {
    let s = this.safeParse(e, t);
    if (s.success) return s.data;
    throw s.error;
  }
  safeParse(e, t) {
    var s;
    let r = { common: { issues: [], async: (s = t?.async) !== null && s !== void 0 ? s : false, contextualErrorMap: t?.errorMap }, path: t?.path || [], schemaErrorMap: this._def.errorMap, parent: null, data: e, parsedType: dr(e) }, n = this._parseSync({ data: e, path: r.path, parent: r });
    return Rs(r, n);
  }
  "~validate"(e) {
    var t, s;
    let r = { common: { issues: [], async: !!this["~standard"].async }, path: [], schemaErrorMap: this._def.errorMap, parent: null, data: e, parsedType: dr(e) };
    if (!this["~standard"].async) try {
      let n = this._parseSync({ data: e, path: [], parent: r });
      return Or(n) ? { value: n.value } : { issues: r.common.issues };
    } catch (n) {
      !((s = (t = n?.message) === null || t === void 0 ? void 0 : t.toLowerCase()) === null || s === void 0) && s.includes("encountered") && (this["~standard"].async = true), r.common = { issues: [], async: true };
    }
    return this._parseAsync({ data: e, path: [], parent: r }).then((n) => Or(n) ? { value: n.value } : { issues: r.common.issues });
  }
  async parseAsync(e, t) {
    let s = await this.safeParseAsync(e, t);
    if (s.success) return s.data;
    throw s.error;
  }
  async safeParseAsync(e, t) {
    let s = { common: { issues: [], contextualErrorMap: t?.errorMap, async: true }, path: t?.path || [], schemaErrorMap: this._def.errorMap, parent: null, data: e, parsedType: dr(e) }, r = this._parse({ data: e, path: s.path, parent: s }), n = await (vt(r) ? r : Promise.resolve(r));
    return Rs(s, n);
  }
  refine(e, t) {
    let s = (r) => typeof t == "string" || typeof t > "u" ? { message: t } : typeof t == "function" ? t(r) : t;
    return this._refinement((r, n) => {
      let o = e(r), i = () => n.addIssue({ code: T.custom, ...s(r) });
      return typeof Promise < "u" && o instanceof Promise ? o.then((u) => u ? true : (i(), false)) : o ? true : (i(), false);
    });
  }
  refinement(e, t) {
    return this._refinement((s, r) => e(s) ? true : (r.addIssue(typeof t == "function" ? t(s, r) : t), false));
  }
  _refinement(e) {
    return new qe({ schema: this, typeName: O.ZodEffects, effect: { type: "refinement", refinement: e } });
  }
  superRefine(e) {
    return this._refinement(e);
  }
  constructor(e) {
    this.spa = this.safeParseAsync, this._def = e, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), this.default = this.default.bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), this.pipe = this.pipe.bind(this), this.readonly = this.readonly.bind(this), this.isNullable = this.isNullable.bind(this), this.isOptional = this.isOptional.bind(this), this["~standard"] = { version: 1, vendor: "zod", validate: (t) => this["~validate"](t) };
  }
  optional() {
    return Ze.create(this, this._def);
  }
  nullable() {
    return ar.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return hr.create(this);
  }
  promise() {
    return yr.create(this, this._def);
  }
  or(e) {
    return jr.create([this, e], this._def);
  }
  and(e) {
    return Nr.create(this, e, this._def);
  }
  transform(e) {
    return new qe({ ...J(this._def), schema: this, typeName: O.ZodEffects, effect: { type: "transform", transform: e } });
  }
  default(e) {
    let t = typeof e == "function" ? e : () => e;
    return new Ur({ ...J(this._def), innerType: this, defaultValue: t, typeName: O.ZodDefault });
  }
  brand() {
    return new gt({ typeName: O.ZodBranded, type: this, ...J(this._def) });
  }
  catch(e) {
    let t = typeof e == "function" ? e : () => e;
    return new zr({ ...J(this._def), innerType: this, catchValue: t, typeName: O.ZodCatch });
  }
  describe(e) {
    let t = this.constructor;
    return new t({ ...this._def, description: e });
  }
  pipe(e) {
    return yt.create(this, e);
  }
  readonly() {
    return Zr.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
};
var bl = /^c[^\s-]{8,}$/i;
var Pl = /^[0-9a-z]+$/;
var xl = /^[0-9A-HJKMNP-TV-Z]{26}$/i;
var El = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i;
var Sl = /^[a-z0-9_-]{21}$/i;
var wl = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/;
var Rl = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/;
var Tl = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i;
var Ol = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
var ma;
var $l = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/;
var Al = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/;
var Dl = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/;
var Il = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/;
var kl = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;
var Cl = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/;
var As = "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))";
var jl = new RegExp(`^${As}$`);
function Ds(a16) {
  let e = "([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d";
  return a16.precision ? e = `${e}\\.\\d{${a16.precision}}` : a16.precision == null && (e = `${e}(\\.\\d+)?`), e;
}
function Nl(a16) {
  return new RegExp(`^${Ds(a16)}$`);
}
function Is(a16) {
  let e = `${As}T${Ds(a16)}`, t = [];
  return t.push(a16.local ? "Z?" : "Z"), a16.offset && t.push("([+-]\\d{2}:?\\d{2})"), e = `${e}(${t.join("|")})`, new RegExp(`^${e}$`);
}
function Fl(a16, e) {
  return !!((e === "v4" || !e) && $l.test(a16) || (e === "v6" || !e) && Dl.test(a16));
}
function Ll(a16, e) {
  if (!wl.test(a16)) return false;
  try {
    let [t] = a16.split("."), s = t.replace(/-/g, "+").replace(/_/g, "/").padEnd(t.length + (4 - t.length % 4) % 4, "="), r = JSON.parse(atob(s));
    return !(typeof r != "object" || r === null || !r.typ || !r.alg || e && r.alg !== e);
  } catch {
    return false;
  }
}
function ql(a16, e) {
  return !!((e === "v4" || !e) && Al.test(a16) || (e === "v6" || !e) && Il.test(a16));
}
var vr = class a3 extends K {
  _parse(e) {
    if (this._def.coerce && (e.data = String(e.data)), this._getType(e) !== N.string) {
      let n = this._getOrReturnCtx(e);
      return C(n, { code: T.invalid_type, expected: N.string, received: n.parsedType }), H;
    }
    let s = new Oe(), r;
    for (let n of this._def.checks) if (n.kind === "min") e.data.length < n.value && (r = this._getOrReturnCtx(e, r), C(r, { code: T.too_small, minimum: n.value, type: "string", inclusive: true, exact: false, message: n.message }), s.dirty());
    else if (n.kind === "max") e.data.length > n.value && (r = this._getOrReturnCtx(e, r), C(r, { code: T.too_big, maximum: n.value, type: "string", inclusive: true, exact: false, message: n.message }), s.dirty());
    else if (n.kind === "length") {
      let o = e.data.length > n.value, i = e.data.length < n.value;
      (o || i) && (r = this._getOrReturnCtx(e, r), o ? C(r, { code: T.too_big, maximum: n.value, type: "string", inclusive: true, exact: true, message: n.message }) : i && C(r, { code: T.too_small, minimum: n.value, type: "string", inclusive: true, exact: true, message: n.message }), s.dirty());
    } else if (n.kind === "email") Tl.test(e.data) || (r = this._getOrReturnCtx(e, r), C(r, { validation: "email", code: T.invalid_string, message: n.message }), s.dirty());
    else if (n.kind === "emoji") ma || (ma = new RegExp(Ol, "u")), ma.test(e.data) || (r = this._getOrReturnCtx(e, r), C(r, { validation: "emoji", code: T.invalid_string, message: n.message }), s.dirty());
    else if (n.kind === "uuid") El.test(e.data) || (r = this._getOrReturnCtx(e, r), C(r, { validation: "uuid", code: T.invalid_string, message: n.message }), s.dirty());
    else if (n.kind === "nanoid") Sl.test(e.data) || (r = this._getOrReturnCtx(e, r), C(r, { validation: "nanoid", code: T.invalid_string, message: n.message }), s.dirty());
    else if (n.kind === "cuid") bl.test(e.data) || (r = this._getOrReturnCtx(e, r), C(r, { validation: "cuid", code: T.invalid_string, message: n.message }), s.dirty());
    else if (n.kind === "cuid2") Pl.test(e.data) || (r = this._getOrReturnCtx(e, r), C(r, { validation: "cuid2", code: T.invalid_string, message: n.message }), s.dirty());
    else if (n.kind === "ulid") xl.test(e.data) || (r = this._getOrReturnCtx(e, r), C(r, { validation: "ulid", code: T.invalid_string, message: n.message }), s.dirty());
    else if (n.kind === "url") try {
      new URL(e.data);
    } catch {
      r = this._getOrReturnCtx(e, r), C(r, { validation: "url", code: T.invalid_string, message: n.message }), s.dirty();
    }
    else n.kind === "regex" ? (n.regex.lastIndex = 0, n.regex.test(e.data) || (r = this._getOrReturnCtx(e, r), C(r, { validation: "regex", code: T.invalid_string, message: n.message }), s.dirty())) : n.kind === "trim" ? e.data = e.data.trim() : n.kind === "includes" ? e.data.includes(n.value, n.position) || (r = this._getOrReturnCtx(e, r), C(r, { code: T.invalid_string, validation: { includes: n.value, position: n.position }, message: n.message }), s.dirty()) : n.kind === "toLowerCase" ? e.data = e.data.toLowerCase() : n.kind === "toUpperCase" ? e.data = e.data.toUpperCase() : n.kind === "startsWith" ? e.data.startsWith(n.value) || (r = this._getOrReturnCtx(e, r), C(r, { code: T.invalid_string, validation: { startsWith: n.value }, message: n.message }), s.dirty()) : n.kind === "endsWith" ? e.data.endsWith(n.value) || (r = this._getOrReturnCtx(e, r), C(r, { code: T.invalid_string, validation: { endsWith: n.value }, message: n.message }), s.dirty()) : n.kind === "datetime" ? Is(n).test(e.data) || (r = this._getOrReturnCtx(e, r), C(r, { code: T.invalid_string, validation: "datetime", message: n.message }), s.dirty()) : n.kind === "date" ? jl.test(e.data) || (r = this._getOrReturnCtx(e, r), C(r, { code: T.invalid_string, validation: "date", message: n.message }), s.dirty()) : n.kind === "time" ? Nl(n).test(e.data) || (r = this._getOrReturnCtx(e, r), C(r, { code: T.invalid_string, validation: "time", message: n.message }), s.dirty()) : n.kind === "duration" ? Rl.test(e.data) || (r = this._getOrReturnCtx(e, r), C(r, { validation: "duration", code: T.invalid_string, message: n.message }), s.dirty()) : n.kind === "ip" ? Fl(e.data, n.version) || (r = this._getOrReturnCtx(e, r), C(r, { validation: "ip", code: T.invalid_string, message: n.message }), s.dirty()) : n.kind === "jwt" ? Ll(e.data, n.alg) || (r = this._getOrReturnCtx(e, r), C(r, { validation: "jwt", code: T.invalid_string, message: n.message }), s.dirty()) : n.kind === "cidr" ? ql(e.data, n.version) || (r = this._getOrReturnCtx(e, r), C(r, { validation: "cidr", code: T.invalid_string, message: n.message }), s.dirty()) : n.kind === "base64" ? kl.test(e.data) || (r = this._getOrReturnCtx(e, r), C(r, { validation: "base64", code: T.invalid_string, message: n.message }), s.dirty()) : n.kind === "base64url" ? Cl.test(e.data) || (r = this._getOrReturnCtx(e, r), C(r, { validation: "base64url", code: T.invalid_string, message: n.message }), s.dirty()) : ae.assertNever(n);
    return { status: s.value, value: e.data };
  }
  _regex(e, t, s) {
    return this.refinement((r) => e.test(r), { validation: t, code: T.invalid_string, ...U.errToObj(s) });
  }
  _addCheck(e) {
    return new a3({ ...this._def, checks: [...this._def.checks, e] });
  }
  email(e) {
    return this._addCheck({ kind: "email", ...U.errToObj(e) });
  }
  url(e) {
    return this._addCheck({ kind: "url", ...U.errToObj(e) });
  }
  emoji(e) {
    return this._addCheck({ kind: "emoji", ...U.errToObj(e) });
  }
  uuid(e) {
    return this._addCheck({ kind: "uuid", ...U.errToObj(e) });
  }
  nanoid(e) {
    return this._addCheck({ kind: "nanoid", ...U.errToObj(e) });
  }
  cuid(e) {
    return this._addCheck({ kind: "cuid", ...U.errToObj(e) });
  }
  cuid2(e) {
    return this._addCheck({ kind: "cuid2", ...U.errToObj(e) });
  }
  ulid(e) {
    return this._addCheck({ kind: "ulid", ...U.errToObj(e) });
  }
  base64(e) {
    return this._addCheck({ kind: "base64", ...U.errToObj(e) });
  }
  base64url(e) {
    return this._addCheck({ kind: "base64url", ...U.errToObj(e) });
  }
  jwt(e) {
    return this._addCheck({ kind: "jwt", ...U.errToObj(e) });
  }
  ip(e) {
    return this._addCheck({ kind: "ip", ...U.errToObj(e) });
  }
  cidr(e) {
    return this._addCheck({ kind: "cidr", ...U.errToObj(e) });
  }
  datetime(e) {
    var t, s;
    return typeof e == "string" ? this._addCheck({ kind: "datetime", precision: null, offset: false, local: false, message: e }) : this._addCheck({ kind: "datetime", precision: typeof e?.precision > "u" ? null : e?.precision, offset: (t = e?.offset) !== null && t !== void 0 ? t : false, local: (s = e?.local) !== null && s !== void 0 ? s : false, ...U.errToObj(e?.message) });
  }
  date(e) {
    return this._addCheck({ kind: "date", message: e });
  }
  time(e) {
    return typeof e == "string" ? this._addCheck({ kind: "time", precision: null, message: e }) : this._addCheck({ kind: "time", precision: typeof e?.precision > "u" ? null : e?.precision, ...U.errToObj(e?.message) });
  }
  duration(e) {
    return this._addCheck({ kind: "duration", ...U.errToObj(e) });
  }
  regex(e, t) {
    return this._addCheck({ kind: "regex", regex: e, ...U.errToObj(t) });
  }
  includes(e, t) {
    return this._addCheck({ kind: "includes", value: e, position: t?.position, ...U.errToObj(t?.message) });
  }
  startsWith(e, t) {
    return this._addCheck({ kind: "startsWith", value: e, ...U.errToObj(t) });
  }
  endsWith(e, t) {
    return this._addCheck({ kind: "endsWith", value: e, ...U.errToObj(t) });
  }
  min(e, t) {
    return this._addCheck({ kind: "min", value: e, ...U.errToObj(t) });
  }
  max(e, t) {
    return this._addCheck({ kind: "max", value: e, ...U.errToObj(t) });
  }
  length(e, t) {
    return this._addCheck({ kind: "length", value: e, ...U.errToObj(t) });
  }
  nonempty(e) {
    return this.min(1, U.errToObj(e));
  }
  trim() {
    return new a3({ ...this._def, checks: [...this._def.checks, { kind: "trim" }] });
  }
  toLowerCase() {
    return new a3({ ...this._def, checks: [...this._def.checks, { kind: "toLowerCase" }] });
  }
  toUpperCase() {
    return new a3({ ...this._def, checks: [...this._def.checks, { kind: "toUpperCase" }] });
  }
  get isDatetime() {
    return !!this._def.checks.find((e) => e.kind === "datetime");
  }
  get isDate() {
    return !!this._def.checks.find((e) => e.kind === "date");
  }
  get isTime() {
    return !!this._def.checks.find((e) => e.kind === "time");
  }
  get isDuration() {
    return !!this._def.checks.find((e) => e.kind === "duration");
  }
  get isEmail() {
    return !!this._def.checks.find((e) => e.kind === "email");
  }
  get isURL() {
    return !!this._def.checks.find((e) => e.kind === "url");
  }
  get isEmoji() {
    return !!this._def.checks.find((e) => e.kind === "emoji");
  }
  get isUUID() {
    return !!this._def.checks.find((e) => e.kind === "uuid");
  }
  get isNANOID() {
    return !!this._def.checks.find((e) => e.kind === "nanoid");
  }
  get isCUID() {
    return !!this._def.checks.find((e) => e.kind === "cuid");
  }
  get isCUID2() {
    return !!this._def.checks.find((e) => e.kind === "cuid2");
  }
  get isULID() {
    return !!this._def.checks.find((e) => e.kind === "ulid");
  }
  get isIP() {
    return !!this._def.checks.find((e) => e.kind === "ip");
  }
  get isCIDR() {
    return !!this._def.checks.find((e) => e.kind === "cidr");
  }
  get isBase64() {
    return !!this._def.checks.find((e) => e.kind === "base64");
  }
  get isBase64url() {
    return !!this._def.checks.find((e) => e.kind === "base64url");
  }
  get minLength() {
    let e = null;
    for (let t of this._def.checks) t.kind === "min" && (e === null || t.value > e) && (e = t.value);
    return e;
  }
  get maxLength() {
    let e = null;
    for (let t of this._def.checks) t.kind === "max" && (e === null || t.value < e) && (e = t.value);
    return e;
  }
};
vr.create = (a16) => {
  var e;
  return new vr({ checks: [], typeName: O.ZodString, coerce: (e = a16?.coerce) !== null && e !== void 0 ? e : false, ...J(a16) });
};
function Ml(a16, e) {
  let t = (a16.toString().split(".")[1] || "").length, s = (e.toString().split(".")[1] || "").length, r = t > s ? t : s, n = parseInt(a16.toFixed(r).replace(".", "")), o = parseInt(e.toFixed(r).replace(".", ""));
  return n % o / Math.pow(10, r);
}
var $r = class a4 extends K {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf;
  }
  _parse(e) {
    if (this._def.coerce && (e.data = Number(e.data)), this._getType(e) !== N.number) {
      let n = this._getOrReturnCtx(e);
      return C(n, { code: T.invalid_type, expected: N.number, received: n.parsedType }), H;
    }
    let s, r = new Oe();
    for (let n of this._def.checks) n.kind === "int" ? ae.isInteger(e.data) || (s = this._getOrReturnCtx(e, s), C(s, { code: T.invalid_type, expected: "integer", received: "float", message: n.message }), r.dirty()) : n.kind === "min" ? (n.inclusive ? e.data < n.value : e.data <= n.value) && (s = this._getOrReturnCtx(e, s), C(s, { code: T.too_small, minimum: n.value, type: "number", inclusive: n.inclusive, exact: false, message: n.message }), r.dirty()) : n.kind === "max" ? (n.inclusive ? e.data > n.value : e.data >= n.value) && (s = this._getOrReturnCtx(e, s), C(s, { code: T.too_big, maximum: n.value, type: "number", inclusive: n.inclusive, exact: false, message: n.message }), r.dirty()) : n.kind === "multipleOf" ? Ml(e.data, n.value) !== 0 && (s = this._getOrReturnCtx(e, s), C(s, { code: T.not_multiple_of, multipleOf: n.value, message: n.message }), r.dirty()) : n.kind === "finite" ? Number.isFinite(e.data) || (s = this._getOrReturnCtx(e, s), C(s, { code: T.not_finite, message: n.message }), r.dirty()) : ae.assertNever(n);
    return { status: r.value, value: e.data };
  }
  gte(e, t) {
    return this.setLimit("min", e, true, U.toString(t));
  }
  gt(e, t) {
    return this.setLimit("min", e, false, U.toString(t));
  }
  lte(e, t) {
    return this.setLimit("max", e, true, U.toString(t));
  }
  lt(e, t) {
    return this.setLimit("max", e, false, U.toString(t));
  }
  setLimit(e, t, s, r) {
    return new a4({ ...this._def, checks: [...this._def.checks, { kind: e, value: t, inclusive: s, message: U.toString(r) }] });
  }
  _addCheck(e) {
    return new a4({ ...this._def, checks: [...this._def.checks, e] });
  }
  int(e) {
    return this._addCheck({ kind: "int", message: U.toString(e) });
  }
  positive(e) {
    return this._addCheck({ kind: "min", value: 0, inclusive: false, message: U.toString(e) });
  }
  negative(e) {
    return this._addCheck({ kind: "max", value: 0, inclusive: false, message: U.toString(e) });
  }
  nonpositive(e) {
    return this._addCheck({ kind: "max", value: 0, inclusive: true, message: U.toString(e) });
  }
  nonnegative(e) {
    return this._addCheck({ kind: "min", value: 0, inclusive: true, message: U.toString(e) });
  }
  multipleOf(e, t) {
    return this._addCheck({ kind: "multipleOf", value: e, message: U.toString(t) });
  }
  finite(e) {
    return this._addCheck({ kind: "finite", message: U.toString(e) });
  }
  safe(e) {
    return this._addCheck({ kind: "min", inclusive: true, value: Number.MIN_SAFE_INTEGER, message: U.toString(e) })._addCheck({ kind: "max", inclusive: true, value: Number.MAX_SAFE_INTEGER, message: U.toString(e) });
  }
  get minValue() {
    let e = null;
    for (let t of this._def.checks) t.kind === "min" && (e === null || t.value > e) && (e = t.value);
    return e;
  }
  get maxValue() {
    let e = null;
    for (let t of this._def.checks) t.kind === "max" && (e === null || t.value < e) && (e = t.value);
    return e;
  }
  get isInt() {
    return !!this._def.checks.find((e) => e.kind === "int" || e.kind === "multipleOf" && ae.isInteger(e.value));
  }
  get isFinite() {
    let e = null, t = null;
    for (let s of this._def.checks) {
      if (s.kind === "finite" || s.kind === "int" || s.kind === "multipleOf") return true;
      s.kind === "min" ? (t === null || s.value > t) && (t = s.value) : s.kind === "max" && (e === null || s.value < e) && (e = s.value);
    }
    return Number.isFinite(t) && Number.isFinite(e);
  }
};
$r.create = (a16) => new $r({ checks: [], typeName: O.ZodNumber, coerce: a16?.coerce || false, ...J(a16) });
var Ar = class a5 extends K {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte;
  }
  _parse(e) {
    if (this._def.coerce) try {
      e.data = BigInt(e.data);
    } catch {
      return this._getInvalidInput(e);
    }
    if (this._getType(e) !== N.bigint) return this._getInvalidInput(e);
    let s, r = new Oe();
    for (let n of this._def.checks) n.kind === "min" ? (n.inclusive ? e.data < n.value : e.data <= n.value) && (s = this._getOrReturnCtx(e, s), C(s, { code: T.too_small, type: "bigint", minimum: n.value, inclusive: n.inclusive, message: n.message }), r.dirty()) : n.kind === "max" ? (n.inclusive ? e.data > n.value : e.data >= n.value) && (s = this._getOrReturnCtx(e, s), C(s, { code: T.too_big, type: "bigint", maximum: n.value, inclusive: n.inclusive, message: n.message }), r.dirty()) : n.kind === "multipleOf" ? e.data % n.value !== BigInt(0) && (s = this._getOrReturnCtx(e, s), C(s, { code: T.not_multiple_of, multipleOf: n.value, message: n.message }), r.dirty()) : ae.assertNever(n);
    return { status: r.value, value: e.data };
  }
  _getInvalidInput(e) {
    let t = this._getOrReturnCtx(e);
    return C(t, { code: T.invalid_type, expected: N.bigint, received: t.parsedType }), H;
  }
  gte(e, t) {
    return this.setLimit("min", e, true, U.toString(t));
  }
  gt(e, t) {
    return this.setLimit("min", e, false, U.toString(t));
  }
  lte(e, t) {
    return this.setLimit("max", e, true, U.toString(t));
  }
  lt(e, t) {
    return this.setLimit("max", e, false, U.toString(t));
  }
  setLimit(e, t, s, r) {
    return new a5({ ...this._def, checks: [...this._def.checks, { kind: e, value: t, inclusive: s, message: U.toString(r) }] });
  }
  _addCheck(e) {
    return new a5({ ...this._def, checks: [...this._def.checks, e] });
  }
  positive(e) {
    return this._addCheck({ kind: "min", value: BigInt(0), inclusive: false, message: U.toString(e) });
  }
  negative(e) {
    return this._addCheck({ kind: "max", value: BigInt(0), inclusive: false, message: U.toString(e) });
  }
  nonpositive(e) {
    return this._addCheck({ kind: "max", value: BigInt(0), inclusive: true, message: U.toString(e) });
  }
  nonnegative(e) {
    return this._addCheck({ kind: "min", value: BigInt(0), inclusive: true, message: U.toString(e) });
  }
  multipleOf(e, t) {
    return this._addCheck({ kind: "multipleOf", value: e, message: U.toString(t) });
  }
  get minValue() {
    let e = null;
    for (let t of this._def.checks) t.kind === "min" && (e === null || t.value > e) && (e = t.value);
    return e;
  }
  get maxValue() {
    let e = null;
    for (let t of this._def.checks) t.kind === "max" && (e === null || t.value < e) && (e = t.value);
    return e;
  }
};
Ar.create = (a16) => {
  var e;
  return new Ar({ checks: [], typeName: O.ZodBigInt, coerce: (e = a16?.coerce) !== null && e !== void 0 ? e : false, ...J(a16) });
};
var Dr = class extends K {
  _parse(e) {
    if (this._def.coerce && (e.data = !!e.data), this._getType(e) !== N.boolean) {
      let s = this._getOrReturnCtx(e);
      return C(s, { code: T.invalid_type, expected: N.boolean, received: s.parsedType }), H;
    }
    return Ae(e.data);
  }
};
Dr.create = (a16) => new Dr({ typeName: O.ZodBoolean, coerce: a16?.coerce || false, ...J(a16) });
var Ir = class a6 extends K {
  _parse(e) {
    if (this._def.coerce && (e.data = new Date(e.data)), this._getType(e) !== N.date) {
      let n = this._getOrReturnCtx(e);
      return C(n, { code: T.invalid_type, expected: N.date, received: n.parsedType }), H;
    }
    if (isNaN(e.data.getTime())) {
      let n = this._getOrReturnCtx(e);
      return C(n, { code: T.invalid_date }), H;
    }
    let s = new Oe(), r;
    for (let n of this._def.checks) n.kind === "min" ? e.data.getTime() < n.value && (r = this._getOrReturnCtx(e, r), C(r, { code: T.too_small, message: n.message, inclusive: true, exact: false, minimum: n.value, type: "date" }), s.dirty()) : n.kind === "max" ? e.data.getTime() > n.value && (r = this._getOrReturnCtx(e, r), C(r, { code: T.too_big, message: n.message, inclusive: true, exact: false, maximum: n.value, type: "date" }), s.dirty()) : ae.assertNever(n);
    return { status: s.value, value: new Date(e.data.getTime()) };
  }
  _addCheck(e) {
    return new a6({ ...this._def, checks: [...this._def.checks, e] });
  }
  min(e, t) {
    return this._addCheck({ kind: "min", value: e.getTime(), message: U.toString(t) });
  }
  max(e, t) {
    return this._addCheck({ kind: "max", value: e.getTime(), message: U.toString(t) });
  }
  get minDate() {
    let e = null;
    for (let t of this._def.checks) t.kind === "min" && (e === null || t.value > e) && (e = t.value);
    return e != null ? new Date(e) : null;
  }
  get maxDate() {
    let e = null;
    for (let t of this._def.checks) t.kind === "max" && (e === null || t.value < e) && (e = t.value);
    return e != null ? new Date(e) : null;
  }
};
Ir.create = (a16) => new Ir({ checks: [], coerce: a16?.coerce || false, typeName: O.ZodDate, ...J(a16) });
var tt = class extends K {
  _parse(e) {
    if (this._getType(e) !== N.symbol) {
      let s = this._getOrReturnCtx(e);
      return C(s, { code: T.invalid_type, expected: N.symbol, received: s.parsedType }), H;
    }
    return Ae(e.data);
  }
};
tt.create = (a16) => new tt({ typeName: O.ZodSymbol, ...J(a16) });
var kr = class extends K {
  _parse(e) {
    if (this._getType(e) !== N.undefined) {
      let s = this._getOrReturnCtx(e);
      return C(s, { code: T.invalid_type, expected: N.undefined, received: s.parsedType }), H;
    }
    return Ae(e.data);
  }
};
kr.create = (a16) => new kr({ typeName: O.ZodUndefined, ...J(a16) });
var Cr = class extends K {
  _parse(e) {
    if (this._getType(e) !== N.null) {
      let s = this._getOrReturnCtx(e);
      return C(s, { code: T.invalid_type, expected: N.null, received: s.parsedType }), H;
    }
    return Ae(e.data);
  }
};
Cr.create = (a16) => new Cr({ typeName: O.ZodNull, ...J(a16) });
var gr = class extends K {
  constructor() {
    super(...arguments), this._any = true;
  }
  _parse(e) {
    return Ae(e.data);
  }
};
gr.create = (a16) => new gr({ typeName: O.ZodAny, ...J(a16) });
var fr = class extends K {
  constructor() {
    super(...arguments), this._unknown = true;
  }
  _parse(e) {
    return Ae(e.data);
  }
};
fr.create = (a16) => new fr({ typeName: O.ZodUnknown, ...J(a16) });
var Je = class extends K {
  _parse(e) {
    let t = this._getOrReturnCtx(e);
    return C(t, { code: T.invalid_type, expected: N.never, received: t.parsedType }), H;
  }
};
Je.create = (a16) => new Je({ typeName: O.ZodNever, ...J(a16) });
var at = class extends K {
  _parse(e) {
    if (this._getType(e) !== N.undefined) {
      let s = this._getOrReturnCtx(e);
      return C(s, { code: T.invalid_type, expected: N.void, received: s.parsedType }), H;
    }
    return Ae(e.data);
  }
};
at.create = (a16) => new at({ typeName: O.ZodVoid, ...J(a16) });
var hr = class a7 extends K {
  _parse(e) {
    let { ctx: t, status: s } = this._processInputParams(e), r = this._def;
    if (t.parsedType !== N.array) return C(t, { code: T.invalid_type, expected: N.array, received: t.parsedType }), H;
    if (r.exactLength !== null) {
      let o = t.data.length > r.exactLength.value, i = t.data.length < r.exactLength.value;
      (o || i) && (C(t, { code: o ? T.too_big : T.too_small, minimum: i ? r.exactLength.value : void 0, maximum: o ? r.exactLength.value : void 0, type: "array", inclusive: true, exact: true, message: r.exactLength.message }), s.dirty());
    }
    if (r.minLength !== null && t.data.length < r.minLength.value && (C(t, { code: T.too_small, minimum: r.minLength.value, type: "array", inclusive: true, exact: false, message: r.minLength.message }), s.dirty()), r.maxLength !== null && t.data.length > r.maxLength.value && (C(t, { code: T.too_big, maximum: r.maxLength.value, type: "array", inclusive: true, exact: false, message: r.maxLength.message }), s.dirty()), t.common.async) return Promise.all([...t.data].map((o, i) => r.type._parseAsync(new Ve(t, o, t.path, i)))).then((o) => Oe.mergeArray(s, o));
    let n = [...t.data].map((o, i) => r.type._parseSync(new Ve(t, o, t.path, i)));
    return Oe.mergeArray(s, n);
  }
  get element() {
    return this._def.type;
  }
  min(e, t) {
    return new a7({ ...this._def, minLength: { value: e, message: U.toString(t) } });
  }
  max(e, t) {
    return new a7({ ...this._def, maxLength: { value: e, message: U.toString(t) } });
  }
  length(e, t) {
    return new a7({ ...this._def, exactLength: { value: e, message: U.toString(t) } });
  }
  nonempty(e) {
    return this.min(1, e);
  }
};
hr.create = (a16, e) => new hr({ type: a16, minLength: null, maxLength: null, exactLength: null, typeName: O.ZodArray, ...J(e) });
function Xr(a16) {
  if (a16 instanceof ke) {
    let e = {};
    for (let t in a16.shape) {
      let s = a16.shape[t];
      e[t] = Ze.create(Xr(s));
    }
    return new ke({ ...a16._def, shape: () => e });
  } else return a16 instanceof hr ? new hr({ ...a16._def, type: Xr(a16.element) }) : a16 instanceof Ze ? Ze.create(Xr(a16.unwrap())) : a16 instanceof ar ? ar.create(Xr(a16.unwrap())) : a16 instanceof tr ? tr.create(a16.items.map((e) => Xr(e))) : a16;
}
var ke = class a8 extends K {
  constructor() {
    super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend;
  }
  _getCached() {
    if (this._cached !== null) return this._cached;
    let e = this._def.shape(), t = ae.objectKeys(e);
    return this._cached = { shape: e, keys: t };
  }
  _parse(e) {
    if (this._getType(e) !== N.object) {
      let d = this._getOrReturnCtx(e);
      return C(d, { code: T.invalid_type, expected: N.object, received: d.parsedType }), H;
    }
    let { status: s, ctx: r } = this._processInputParams(e), { shape: n, keys: o } = this._getCached(), i = [];
    if (!(this._def.catchall instanceof Je && this._def.unknownKeys === "strip")) for (let d in r.data) o.includes(d) || i.push(d);
    let u = [];
    for (let d of o) {
      let h = n[d], m = r.data[d];
      u.push({ key: { status: "valid", value: d }, value: h._parse(new Ve(r, m, r.path, d)), alwaysSet: d in r.data });
    }
    if (this._def.catchall instanceof Je) {
      let d = this._def.unknownKeys;
      if (d === "passthrough") for (let h of i) u.push({ key: { status: "valid", value: h }, value: { status: "valid", value: r.data[h] } });
      else if (d === "strict") i.length > 0 && (C(r, { code: T.unrecognized_keys, keys: i }), s.dirty());
      else if (d !== "strip") throw new Error("Internal ZodObject error: invalid unknownKeys value.");
    } else {
      let d = this._def.catchall;
      for (let h of i) {
        let m = r.data[h];
        u.push({ key: { status: "valid", value: h }, value: d._parse(new Ve(r, m, r.path, h)), alwaysSet: h in r.data });
      }
    }
    return r.common.async ? Promise.resolve().then(async () => {
      let d = [];
      for (let h of u) {
        let m = await h.key, b = await h.value;
        d.push({ key: m, value: b, alwaysSet: h.alwaysSet });
      }
      return d;
    }).then((d) => Oe.mergeObjectSync(s, d)) : Oe.mergeObjectSync(s, u);
  }
  get shape() {
    return this._def.shape();
  }
  strict(e) {
    return U.errToObj, new a8({ ...this._def, unknownKeys: "strict", ...e !== void 0 ? { errorMap: (t, s) => {
      var r, n, o, i;
      let u = (o = (n = (r = this._def).errorMap) === null || n === void 0 ? void 0 : n.call(r, t, s).message) !== null && o !== void 0 ? o : s.defaultError;
      return t.code === "unrecognized_keys" ? { message: (i = U.errToObj(e).message) !== null && i !== void 0 ? i : u } : { message: u };
    } } : {} });
  }
  strip() {
    return new a8({ ...this._def, unknownKeys: "strip" });
  }
  passthrough() {
    return new a8({ ...this._def, unknownKeys: "passthrough" });
  }
  extend(e) {
    return new a8({ ...this._def, shape: () => ({ ...this._def.shape(), ...e }) });
  }
  merge(e) {
    return new a8({ unknownKeys: e._def.unknownKeys, catchall: e._def.catchall, shape: () => ({ ...this._def.shape(), ...e._def.shape() }), typeName: O.ZodObject });
  }
  setKey(e, t) {
    return this.augment({ [e]: t });
  }
  catchall(e) {
    return new a8({ ...this._def, catchall: e });
  }
  pick(e) {
    let t = {};
    return ae.objectKeys(e).forEach((s) => {
      e[s] && this.shape[s] && (t[s] = this.shape[s]);
    }), new a8({ ...this._def, shape: () => t });
  }
  omit(e) {
    let t = {};
    return ae.objectKeys(this.shape).forEach((s) => {
      e[s] || (t[s] = this.shape[s]);
    }), new a8({ ...this._def, shape: () => t });
  }
  deepPartial() {
    return Xr(this);
  }
  partial(e) {
    let t = {};
    return ae.objectKeys(this.shape).forEach((s) => {
      let r = this.shape[s];
      e && !e[s] ? t[s] = r : t[s] = r.optional();
    }), new a8({ ...this._def, shape: () => t });
  }
  required(e) {
    let t = {};
    return ae.objectKeys(this.shape).forEach((s) => {
      if (e && !e[s]) t[s] = this.shape[s];
      else {
        let n = this.shape[s];
        for (; n instanceof Ze; ) n = n._def.innerType;
        t[s] = n;
      }
    }), new a8({ ...this._def, shape: () => t });
  }
  keyof() {
    return ks(ae.objectKeys(this.shape));
  }
};
ke.create = (a16, e) => new ke({ shape: () => a16, unknownKeys: "strip", catchall: Je.create(), typeName: O.ZodObject, ...J(e) });
ke.strictCreate = (a16, e) => new ke({ shape: () => a16, unknownKeys: "strict", catchall: Je.create(), typeName: O.ZodObject, ...J(e) });
ke.lazycreate = (a16, e) => new ke({ shape: a16, unknownKeys: "strip", catchall: Je.create(), typeName: O.ZodObject, ...J(e) });
var jr = class extends K {
  _parse(e) {
    let { ctx: t } = this._processInputParams(e), s = this._def.options;
    function r(n) {
      for (let i of n) if (i.result.status === "valid") return i.result;
      for (let i of n) if (i.result.status === "dirty") return t.common.issues.push(...i.ctx.common.issues), i.result;
      let o = n.map((i) => new Le(i.ctx.common.issues));
      return C(t, { code: T.invalid_union, unionErrors: o }), H;
    }
    if (t.common.async) return Promise.all(s.map(async (n) => {
      let o = { ...t, common: { ...t.common, issues: [] }, parent: null };
      return { result: await n._parseAsync({ data: t.data, path: t.path, parent: o }), ctx: o };
    })).then(r);
    {
      let n, o = [];
      for (let u of s) {
        let d = { ...t, common: { ...t.common, issues: [] }, parent: null }, h = u._parseSync({ data: t.data, path: t.path, parent: d });
        if (h.status === "valid") return h;
        h.status === "dirty" && !n && (n = { result: h, ctx: d }), d.common.issues.length && o.push(d.common.issues);
      }
      if (n) return t.common.issues.push(...n.ctx.common.issues), n.result;
      let i = o.map((u) => new Le(u));
      return C(t, { code: T.invalid_union, unionErrors: i }), H;
    }
  }
  get options() {
    return this._def.options;
  }
};
jr.create = (a16, e) => new jr({ options: a16, typeName: O.ZodUnion, ...J(e) });
var cr = (a16) => a16 instanceof Fr ? cr(a16.schema) : a16 instanceof qe ? cr(a16.innerType()) : a16 instanceof Lr ? [a16.value] : a16 instanceof qr ? a16.options : a16 instanceof Mr ? ae.objectValues(a16.enum) : a16 instanceof Ur ? cr(a16._def.innerType) : a16 instanceof kr ? [void 0] : a16 instanceof Cr ? [null] : a16 instanceof Ze ? [void 0, ...cr(a16.unwrap())] : a16 instanceof ar ? [null, ...cr(a16.unwrap())] : a16 instanceof gt || a16 instanceof Zr ? cr(a16.unwrap()) : a16 instanceof zr ? cr(a16._def.innerType) : [];
var At = class a9 extends K {
  _parse(e) {
    let { ctx: t } = this._processInputParams(e);
    if (t.parsedType !== N.object) return C(t, { code: T.invalid_type, expected: N.object, received: t.parsedType }), H;
    let s = this.discriminator, r = t.data[s], n = this.optionsMap.get(r);
    return n ? t.common.async ? n._parseAsync({ data: t.data, path: t.path, parent: t }) : n._parseSync({ data: t.data, path: t.path, parent: t }) : (C(t, { code: T.invalid_union_discriminator, options: Array.from(this.optionsMap.keys()), path: [s] }), H);
  }
  get discriminator() {
    return this._def.discriminator;
  }
  get options() {
    return this._def.options;
  }
  get optionsMap() {
    return this._def.optionsMap;
  }
  static create(e, t, s) {
    let r = /* @__PURE__ */ new Map();
    for (let n of t) {
      let o = cr(n.shape[e]);
      if (!o.length) throw new Error(`A discriminator value for key \`${e}\` could not be extracted from all schema options`);
      for (let i of o) {
        if (r.has(i)) throw new Error(`Discriminator property ${String(e)} has duplicate value ${String(i)}`);
        r.set(i, n);
      }
    }
    return new a9({ typeName: O.ZodDiscriminatedUnion, discriminator: e, options: t, optionsMap: r, ...J(s) });
  }
};
function _a(a16, e) {
  let t = dr(a16), s = dr(e);
  if (a16 === e) return { valid: true, data: a16 };
  if (t === N.object && s === N.object) {
    let r = ae.objectKeys(e), n = ae.objectKeys(a16).filter((i) => r.indexOf(i) !== -1), o = { ...a16, ...e };
    for (let i of n) {
      let u = _a(a16[i], e[i]);
      if (!u.valid) return { valid: false };
      o[i] = u.data;
    }
    return { valid: true, data: o };
  } else if (t === N.array && s === N.array) {
    if (a16.length !== e.length) return { valid: false };
    let r = [];
    for (let n = 0; n < a16.length; n++) {
      let o = a16[n], i = e[n], u = _a(o, i);
      if (!u.valid) return { valid: false };
      r.push(u.data);
    }
    return { valid: true, data: r };
  } else return t === N.date && s === N.date && +a16 == +e ? { valid: true, data: a16 } : { valid: false };
}
var Nr = class extends K {
  _parse(e) {
    let { status: t, ctx: s } = this._processInputParams(e), r = (n, o) => {
      if (ga(n) || ga(o)) return H;
      let i = _a(n.value, o.value);
      return i.valid ? ((ya(n) || ya(o)) && t.dirty(), { status: t.value, value: i.data }) : (C(s, { code: T.invalid_intersection_types }), H);
    };
    return s.common.async ? Promise.all([this._def.left._parseAsync({ data: s.data, path: s.path, parent: s }), this._def.right._parseAsync({ data: s.data, path: s.path, parent: s })]).then(([n, o]) => r(n, o)) : r(this._def.left._parseSync({ data: s.data, path: s.path, parent: s }), this._def.right._parseSync({ data: s.data, path: s.path, parent: s }));
  }
};
Nr.create = (a16, e, t) => new Nr({ left: a16, right: e, typeName: O.ZodIntersection, ...J(t) });
var tr = class a10 extends K {
  _parse(e) {
    let { status: t, ctx: s } = this._processInputParams(e);
    if (s.parsedType !== N.array) return C(s, { code: T.invalid_type, expected: N.array, received: s.parsedType }), H;
    if (s.data.length < this._def.items.length) return C(s, { code: T.too_small, minimum: this._def.items.length, inclusive: true, exact: false, type: "array" }), H;
    !this._def.rest && s.data.length > this._def.items.length && (C(s, { code: T.too_big, maximum: this._def.items.length, inclusive: true, exact: false, type: "array" }), t.dirty());
    let n = [...s.data].map((o, i) => {
      let u = this._def.items[i] || this._def.rest;
      return u ? u._parse(new Ve(s, o, s.path, i)) : null;
    }).filter((o) => !!o);
    return s.common.async ? Promise.all(n).then((o) => Oe.mergeArray(t, o)) : Oe.mergeArray(t, n);
  }
  get items() {
    return this._def.items;
  }
  rest(e) {
    return new a10({ ...this._def, rest: e });
  }
};
tr.create = (a16, e) => {
  if (!Array.isArray(a16)) throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  return new tr({ items: a16, typeName: O.ZodTuple, rest: null, ...J(e) });
};
var Dt = class a11 extends K {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(e) {
    let { status: t, ctx: s } = this._processInputParams(e);
    if (s.parsedType !== N.object) return C(s, { code: T.invalid_type, expected: N.object, received: s.parsedType }), H;
    let r = [], n = this._def.keyType, o = this._def.valueType;
    for (let i in s.data) r.push({ key: n._parse(new Ve(s, i, s.path, i)), value: o._parse(new Ve(s, s.data[i], s.path, i)), alwaysSet: i in s.data });
    return s.common.async ? Oe.mergeObjectAsync(t, r) : Oe.mergeObjectSync(t, r);
  }
  get element() {
    return this._def.valueType;
  }
  static create(e, t, s) {
    return t instanceof K ? new a11({ keyType: e, valueType: t, typeName: O.ZodRecord, ...J(s) }) : new a11({ keyType: vr.create(), valueType: e, typeName: O.ZodRecord, ...J(t) });
  }
};
var st = class extends K {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(e) {
    let { status: t, ctx: s } = this._processInputParams(e);
    if (s.parsedType !== N.map) return C(s, { code: T.invalid_type, expected: N.map, received: s.parsedType }), H;
    let r = this._def.keyType, n = this._def.valueType, o = [...s.data.entries()].map(([i, u], d) => ({ key: r._parse(new Ve(s, i, s.path, [d, "key"])), value: n._parse(new Ve(s, u, s.path, [d, "value"])) }));
    if (s.common.async) {
      let i = /* @__PURE__ */ new Map();
      return Promise.resolve().then(async () => {
        for (let u of o) {
          let d = await u.key, h = await u.value;
          if (d.status === "aborted" || h.status === "aborted") return H;
          (d.status === "dirty" || h.status === "dirty") && t.dirty(), i.set(d.value, h.value);
        }
        return { status: t.value, value: i };
      });
    } else {
      let i = /* @__PURE__ */ new Map();
      for (let u of o) {
        let d = u.key, h = u.value;
        if (d.status === "aborted" || h.status === "aborted") return H;
        (d.status === "dirty" || h.status === "dirty") && t.dirty(), i.set(d.value, h.value);
      }
      return { status: t.value, value: i };
    }
  }
};
st.create = (a16, e, t) => new st({ valueType: e, keyType: a16, typeName: O.ZodMap, ...J(t) });
var nt = class a12 extends K {
  _parse(e) {
    let { status: t, ctx: s } = this._processInputParams(e);
    if (s.parsedType !== N.set) return C(s, { code: T.invalid_type, expected: N.set, received: s.parsedType }), H;
    let r = this._def;
    r.minSize !== null && s.data.size < r.minSize.value && (C(s, { code: T.too_small, minimum: r.minSize.value, type: "set", inclusive: true, exact: false, message: r.minSize.message }), t.dirty()), r.maxSize !== null && s.data.size > r.maxSize.value && (C(s, { code: T.too_big, maximum: r.maxSize.value, type: "set", inclusive: true, exact: false, message: r.maxSize.message }), t.dirty());
    let n = this._def.valueType;
    function o(u) {
      let d = /* @__PURE__ */ new Set();
      for (let h of u) {
        if (h.status === "aborted") return H;
        h.status === "dirty" && t.dirty(), d.add(h.value);
      }
      return { status: t.value, value: d };
    }
    let i = [...s.data.values()].map((u, d) => n._parse(new Ve(s, u, s.path, d)));
    return s.common.async ? Promise.all(i).then((u) => o(u)) : o(i);
  }
  min(e, t) {
    return new a12({ ...this._def, minSize: { value: e, message: U.toString(t) } });
  }
  max(e, t) {
    return new a12({ ...this._def, maxSize: { value: e, message: U.toString(t) } });
  }
  size(e, t) {
    return this.min(e, t).max(e, t);
  }
  nonempty(e) {
    return this.min(1, e);
  }
};
nt.create = (a16, e) => new nt({ valueType: a16, minSize: null, maxSize: null, typeName: O.ZodSet, ...J(e) });
var It = class a13 extends K {
  constructor() {
    super(...arguments), this.validate = this.implement;
  }
  _parse(e) {
    let { ctx: t } = this._processInputParams(e);
    if (t.parsedType !== N.function) return C(t, { code: T.invalid_type, expected: N.function, received: t.parsedType }), H;
    function s(i, u) {
      return Ot({ data: i, path: t.path, errorMaps: [t.common.contextualErrorMap, t.schemaErrorMap, Tt(), rt].filter((d) => !!d), issueData: { code: T.invalid_arguments, argumentsError: u } });
    }
    function r(i, u) {
      return Ot({ data: i, path: t.path, errorMaps: [t.common.contextualErrorMap, t.schemaErrorMap, Tt(), rt].filter((d) => !!d), issueData: { code: T.invalid_return_type, returnTypeError: u } });
    }
    let n = { errorMap: t.common.contextualErrorMap }, o = t.data;
    if (this._def.returns instanceof yr) {
      let i = this;
      return Ae(async function(...u) {
        let d = new Le([]), h = await i._def.args.parseAsync(u, n).catch((c) => {
          throw d.addIssue(s(u, c)), d;
        }), m = await Reflect.apply(o, this, h);
        return await i._def.returns._def.type.parseAsync(m, n).catch((c) => {
          throw d.addIssue(r(m, c)), d;
        });
      });
    } else {
      let i = this;
      return Ae(function(...u) {
        let d = i._def.args.safeParse(u, n);
        if (!d.success) throw new Le([s(u, d.error)]);
        let h = Reflect.apply(o, this, d.data), m = i._def.returns.safeParse(h, n);
        if (!m.success) throw new Le([r(h, m.error)]);
        return m.data;
      });
    }
  }
  parameters() {
    return this._def.args;
  }
  returnType() {
    return this._def.returns;
  }
  args(...e) {
    return new a13({ ...this._def, args: tr.create(e).rest(fr.create()) });
  }
  returns(e) {
    return new a13({ ...this._def, returns: e });
  }
  implement(e) {
    return this.parse(e);
  }
  strictImplement(e) {
    return this.parse(e);
  }
  static create(e, t, s) {
    return new a13({ args: e || tr.create([]).rest(fr.create()), returns: t || fr.create(), typeName: O.ZodFunction, ...J(s) });
  }
};
var Fr = class extends K {
  get schema() {
    return this._def.getter();
  }
  _parse(e) {
    let { ctx: t } = this._processInputParams(e);
    return this._def.getter()._parse({ data: t.data, path: t.path, parent: t });
  }
};
Fr.create = (a16, e) => new Fr({ getter: a16, typeName: O.ZodLazy, ...J(e) });
var Lr = class extends K {
  _parse(e) {
    if (e.data !== this._def.value) {
      let t = this._getOrReturnCtx(e);
      return C(t, { received: t.data, code: T.invalid_literal, expected: this._def.value }), H;
    }
    return { status: "valid", value: e.data };
  }
  get value() {
    return this._def.value;
  }
};
Lr.create = (a16, e) => new Lr({ value: a16, typeName: O.ZodLiteral, ...J(e) });
function ks(a16, e) {
  return new qr({ values: a16, typeName: O.ZodEnum, ...J(e) });
}
var qr = class a14 extends K {
  constructor() {
    super(...arguments), pt.set(this, void 0);
  }
  _parse(e) {
    if (typeof e.data != "string") {
      let t = this._getOrReturnCtx(e), s = this._def.values;
      return C(t, { expected: ae.joinValues(s), received: t.parsedType, code: T.invalid_type }), H;
    }
    if ($t(this, pt, "f") || $s(this, pt, new Set(this._def.values), "f"), !$t(this, pt, "f").has(e.data)) {
      let t = this._getOrReturnCtx(e), s = this._def.values;
      return C(t, { received: t.data, code: T.invalid_enum_value, options: s }), H;
    }
    return Ae(e.data);
  }
  get options() {
    return this._def.values;
  }
  get enum() {
    let e = {};
    for (let t of this._def.values) e[t] = t;
    return e;
  }
  get Values() {
    let e = {};
    for (let t of this._def.values) e[t] = t;
    return e;
  }
  get Enum() {
    let e = {};
    for (let t of this._def.values) e[t] = t;
    return e;
  }
  extract(e, t = this._def) {
    return a14.create(e, { ...this._def, ...t });
  }
  exclude(e, t = this._def) {
    return a14.create(this.options.filter((s) => !e.includes(s)), { ...this._def, ...t });
  }
};
pt = /* @__PURE__ */ new WeakMap();
qr.create = ks;
var Mr = class extends K {
  constructor() {
    super(...arguments), mt.set(this, void 0);
  }
  _parse(e) {
    let t = ae.getValidEnumValues(this._def.values), s = this._getOrReturnCtx(e);
    if (s.parsedType !== N.string && s.parsedType !== N.number) {
      let r = ae.objectValues(t);
      return C(s, { expected: ae.joinValues(r), received: s.parsedType, code: T.invalid_type }), H;
    }
    if ($t(this, mt, "f") || $s(this, mt, new Set(ae.getValidEnumValues(this._def.values)), "f"), !$t(this, mt, "f").has(e.data)) {
      let r = ae.objectValues(t);
      return C(s, { received: s.data, code: T.invalid_enum_value, options: r }), H;
    }
    return Ae(e.data);
  }
  get enum() {
    return this._def.values;
  }
};
mt = /* @__PURE__ */ new WeakMap();
Mr.create = (a16, e) => new Mr({ values: a16, typeName: O.ZodNativeEnum, ...J(e) });
var yr = class extends K {
  unwrap() {
    return this._def.type;
  }
  _parse(e) {
    let { ctx: t } = this._processInputParams(e);
    if (t.parsedType !== N.promise && t.common.async === false) return C(t, { code: T.invalid_type, expected: N.promise, received: t.parsedType }), H;
    let s = t.parsedType === N.promise ? t.data : Promise.resolve(t.data);
    return Ae(s.then((r) => this._def.type.parseAsync(r, { path: t.path, errorMap: t.common.contextualErrorMap })));
  }
};
yr.create = (a16, e) => new yr({ type: a16, typeName: O.ZodPromise, ...J(e) });
var qe = class extends K {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === O.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
  }
  _parse(e) {
    let { status: t, ctx: s } = this._processInputParams(e), r = this._def.effect || null, n = { addIssue: (o) => {
      C(s, o), o.fatal ? t.abort() : t.dirty();
    }, get path() {
      return s.path;
    } };
    if (n.addIssue = n.addIssue.bind(n), r.type === "preprocess") {
      let o = r.transform(s.data, n);
      if (s.common.async) return Promise.resolve(o).then(async (i) => {
        if (t.value === "aborted") return H;
        let u = await this._def.schema._parseAsync({ data: i, path: s.path, parent: s });
        return u.status === "aborted" ? H : u.status === "dirty" || t.value === "dirty" ? et(u.value) : u;
      });
      {
        if (t.value === "aborted") return H;
        let i = this._def.schema._parseSync({ data: o, path: s.path, parent: s });
        return i.status === "aborted" ? H : i.status === "dirty" || t.value === "dirty" ? et(i.value) : i;
      }
    }
    if (r.type === "refinement") {
      let o = (i) => {
        let u = r.refinement(i, n);
        if (s.common.async) return Promise.resolve(u);
        if (u instanceof Promise) throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
        return i;
      };
      if (s.common.async === false) {
        let i = this._def.schema._parseSync({ data: s.data, path: s.path, parent: s });
        return i.status === "aborted" ? H : (i.status === "dirty" && t.dirty(), o(i.value), { status: t.value, value: i.value });
      } else return this._def.schema._parseAsync({ data: s.data, path: s.path, parent: s }).then((i) => i.status === "aborted" ? H : (i.status === "dirty" && t.dirty(), o(i.value).then(() => ({ status: t.value, value: i.value }))));
    }
    if (r.type === "transform") if (s.common.async === false) {
      let o = this._def.schema._parseSync({ data: s.data, path: s.path, parent: s });
      if (!Or(o)) return o;
      let i = r.transform(o.value, n);
      if (i instanceof Promise) throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
      return { status: t.value, value: i };
    } else return this._def.schema._parseAsync({ data: s.data, path: s.path, parent: s }).then((o) => Or(o) ? Promise.resolve(r.transform(o.value, n)).then((i) => ({ status: t.value, value: i })) : o);
    ae.assertNever(r);
  }
};
qe.create = (a16, e, t) => new qe({ schema: a16, typeName: O.ZodEffects, effect: e, ...J(t) });
qe.createWithPreprocess = (a16, e, t) => new qe({ schema: e, effect: { type: "preprocess", transform: a16 }, typeName: O.ZodEffects, ...J(t) });
var Ze = class extends K {
  _parse(e) {
    return this._getType(e) === N.undefined ? Ae(void 0) : this._def.innerType._parse(e);
  }
  unwrap() {
    return this._def.innerType;
  }
};
Ze.create = (a16, e) => new Ze({ innerType: a16, typeName: O.ZodOptional, ...J(e) });
var ar = class extends K {
  _parse(e) {
    return this._getType(e) === N.null ? Ae(null) : this._def.innerType._parse(e);
  }
  unwrap() {
    return this._def.innerType;
  }
};
ar.create = (a16, e) => new ar({ innerType: a16, typeName: O.ZodNullable, ...J(e) });
var Ur = class extends K {
  _parse(e) {
    let { ctx: t } = this._processInputParams(e), s = t.data;
    return t.parsedType === N.undefined && (s = this._def.defaultValue()), this._def.innerType._parse({ data: s, path: t.path, parent: t });
  }
  removeDefault() {
    return this._def.innerType;
  }
};
Ur.create = (a16, e) => new Ur({ innerType: a16, typeName: O.ZodDefault, defaultValue: typeof e.default == "function" ? e.default : () => e.default, ...J(e) });
var zr = class extends K {
  _parse(e) {
    let { ctx: t } = this._processInputParams(e), s = { ...t, common: { ...t.common, issues: [] } }, r = this._def.innerType._parse({ data: s.data, path: s.path, parent: { ...s } });
    return vt(r) ? r.then((n) => ({ status: "valid", value: n.status === "valid" ? n.value : this._def.catchValue({ get error() {
      return new Le(s.common.issues);
    }, input: s.data }) })) : { status: "valid", value: r.status === "valid" ? r.value : this._def.catchValue({ get error() {
      return new Le(s.common.issues);
    }, input: s.data }) };
  }
  removeCatch() {
    return this._def.innerType;
  }
};
zr.create = (a16, e) => new zr({ innerType: a16, typeName: O.ZodCatch, catchValue: typeof e.catch == "function" ? e.catch : () => e.catch, ...J(e) });
var it = class extends K {
  _parse(e) {
    if (this._getType(e) !== N.nan) {
      let s = this._getOrReturnCtx(e);
      return C(s, { code: T.invalid_type, expected: N.nan, received: s.parsedType }), H;
    }
    return { status: "valid", value: e.data };
  }
};
it.create = (a16) => new it({ typeName: O.ZodNaN, ...J(a16) });
var Ul = Symbol("zod_brand");
var gt = class extends K {
  _parse(e) {
    let { ctx: t } = this._processInputParams(e), s = t.data;
    return this._def.type._parse({ data: s, path: t.path, parent: t });
  }
  unwrap() {
    return this._def.type;
  }
};
var yt = class a15 extends K {
  _parse(e) {
    let { status: t, ctx: s } = this._processInputParams(e);
    if (s.common.async) return (async () => {
      let n = await this._def.in._parseAsync({ data: s.data, path: s.path, parent: s });
      return n.status === "aborted" ? H : n.status === "dirty" ? (t.dirty(), et(n.value)) : this._def.out._parseAsync({ data: n.value, path: s.path, parent: s });
    })();
    {
      let r = this._def.in._parseSync({ data: s.data, path: s.path, parent: s });
      return r.status === "aborted" ? H : r.status === "dirty" ? (t.dirty(), { status: "dirty", value: r.value }) : this._def.out._parseSync({ data: r.value, path: s.path, parent: s });
    }
  }
  static create(e, t) {
    return new a15({ in: e, out: t, typeName: O.ZodPipeline });
  }
};
var Zr = class extends K {
  _parse(e) {
    let t = this._def.innerType._parse(e), s = (r) => (Or(r) && (r.value = Object.freeze(r.value)), r);
    return vt(t) ? t.then((r) => s(r)) : s(t);
  }
  unwrap() {
    return this._def.innerType;
  }
};
Zr.create = (a16, e) => new Zr({ innerType: a16, typeName: O.ZodReadonly, ...J(e) });
function Cs(a16, e = {}, t) {
  return a16 ? gr.create().superRefine((s, r) => {
    var n, o;
    if (!a16(s)) {
      let i = typeof e == "function" ? e(s) : typeof e == "string" ? { message: e } : e, u = (o = (n = i.fatal) !== null && n !== void 0 ? n : t) !== null && o !== void 0 ? o : true, d = typeof i == "string" ? { message: i } : i;
      r.addIssue({ code: "custom", ...d, fatal: u });
    }
  }) : gr.create();
}
var zl = { object: ke.lazycreate };
var O;
(function(a16) {
  a16.ZodString = "ZodString", a16.ZodNumber = "ZodNumber", a16.ZodNaN = "ZodNaN", a16.ZodBigInt = "ZodBigInt", a16.ZodBoolean = "ZodBoolean", a16.ZodDate = "ZodDate", a16.ZodSymbol = "ZodSymbol", a16.ZodUndefined = "ZodUndefined", a16.ZodNull = "ZodNull", a16.ZodAny = "ZodAny", a16.ZodUnknown = "ZodUnknown", a16.ZodNever = "ZodNever", a16.ZodVoid = "ZodVoid", a16.ZodArray = "ZodArray", a16.ZodObject = "ZodObject", a16.ZodUnion = "ZodUnion", a16.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", a16.ZodIntersection = "ZodIntersection", a16.ZodTuple = "ZodTuple", a16.ZodRecord = "ZodRecord", a16.ZodMap = "ZodMap", a16.ZodSet = "ZodSet", a16.ZodFunction = "ZodFunction", a16.ZodLazy = "ZodLazy", a16.ZodLiteral = "ZodLiteral", a16.ZodEnum = "ZodEnum", a16.ZodEffects = "ZodEffects", a16.ZodNativeEnum = "ZodNativeEnum", a16.ZodOptional = "ZodOptional", a16.ZodNullable = "ZodNullable", a16.ZodDefault = "ZodDefault", a16.ZodCatch = "ZodCatch", a16.ZodPromise = "ZodPromise", a16.ZodBranded = "ZodBranded", a16.ZodPipeline = "ZodPipeline", a16.ZodReadonly = "ZodReadonly";
})(O || (O = {}));
var Zl = (a16, e = { message: `Input not instance of ${a16.name}` }) => Cs((t) => t instanceof a16, e);
var js = vr.create;
var Ns = $r.create;
var Vl = it.create;
var Hl = Ar.create;
var Fs = Dr.create;
var Bl = Ir.create;
var Ql = tt.create;
var Jl = kr.create;
var Kl = Cr.create;
var Wl = gr.create;
var Gl = fr.create;
var Yl = Je.create;
var Xl = at.create;
var eu = hr.create;
var ru = ke.create;
var tu = ke.strictCreate;
var au = jr.create;
var su = At.create;
var nu = Nr.create;
var iu = tr.create;
var ou = Dt.create;
var lu = st.create;
var uu = nt.create;
var cu = It.create;
var du = Fr.create;
var fu = Lr.create;
var hu = qr.create;
var pu = Mr.create;
var mu = yr.create;
var Ts = qe.create;
var vu = Ze.create;
var gu = ar.create;
var yu = qe.createWithPreprocess;
var _u = yt.create;
var bu = () => js().optional();
var Pu = () => Ns().optional();
var xu = () => Fs().optional();
var Eu = { string: (a16) => vr.create({ ...a16, coerce: true }), number: (a16) => $r.create({ ...a16, coerce: true }), boolean: (a16) => Dr.create({ ...a16, coerce: true }), bigint: (a16) => Ar.create({ ...a16, coerce: true }), date: (a16) => Ir.create({ ...a16, coerce: true }) };
var Su = H;
var l = Object.freeze({ __proto__: null, defaultErrorMap: rt, setErrorMap: yl, getErrorMap: Tt, makeIssue: Ot, EMPTY_PATH: _l, addIssueToContext: C, ParseStatus: Oe, INVALID: H, DIRTY: et, OK: Ae, isAborted: ga, isDirty: ya, isValid: Or, isAsync: vt, get util() {
  return ae;
}, get objectUtil() {
  return va;
}, ZodParsedType: N, getParsedType: dr, ZodType: K, datetimeRegex: Is, ZodString: vr, ZodNumber: $r, ZodBigInt: Ar, ZodBoolean: Dr, ZodDate: Ir, ZodSymbol: tt, ZodUndefined: kr, ZodNull: Cr, ZodAny: gr, ZodUnknown: fr, ZodNever: Je, ZodVoid: at, ZodArray: hr, ZodObject: ke, ZodUnion: jr, ZodDiscriminatedUnion: At, ZodIntersection: Nr, ZodTuple: tr, ZodRecord: Dt, ZodMap: st, ZodSet: nt, ZodFunction: It, ZodLazy: Fr, ZodLiteral: Lr, ZodEnum: qr, ZodNativeEnum: Mr, ZodPromise: yr, ZodEffects: qe, ZodTransformer: qe, ZodOptional: Ze, ZodNullable: ar, ZodDefault: Ur, ZodCatch: zr, ZodNaN: it, BRAND: Ul, ZodBranded: gt, ZodPipeline: yt, ZodReadonly: Zr, custom: Cs, Schema: K, ZodSchema: K, late: zl, get ZodFirstPartyTypeKind() {
  return O;
}, coerce: Eu, any: Wl, array: eu, bigint: Hl, boolean: Fs, date: Bl, discriminatedUnion: su, effect: Ts, enum: hu, function: cu, instanceof: Zl, intersection: nu, lazy: du, literal: fu, map: lu, nan: Vl, nativeEnum: pu, never: Yl, null: Kl, nullable: gu, number: Ns, object: ru, oboolean: xu, onumber: Pu, optional: vu, ostring: bu, pipeline: _u, preprocess: yu, promise: mu, record: ou, set: uu, strictObject: tu, string: js, symbol: Ql, transformer: Ts, tuple: iu, undefined: Jl, union: au, unknown: Gl, void: Xl, NEVER: Su, ZodIssueCode: T, quotelessJson: gl, ZodError: Le });
var kt = "2.0";
var qs = l.union([l.string(), l.number().int()]);
var Ms = l.string();
var wu = l.object({ progressToken: l.optional(qs) }).passthrough();
var He = l.object({ _meta: l.optional(wu) }).passthrough();
var Ce = l.object({ method: l.string(), params: l.optional(He) });
var _t = l.object({ _meta: l.optional(l.object({}).passthrough()) }).passthrough();
var sr = l.object({ method: l.string(), params: l.optional(_t) });
var Be = l.object({ _meta: l.optional(l.object({}).passthrough()) }).passthrough();
var Ct = l.union([l.string(), l.number().int()]);
var Us = l.object({ jsonrpc: l.literal(kt), id: Ct }).merge(Ce).strict();
var Zs = l.object({ jsonrpc: l.literal(kt) }).merge(sr).strict();
var Hs = l.object({ jsonrpc: l.literal(kt), id: Ct, result: Be }).strict();
var Ke;
(function(a16) {
  a16[a16.ConnectionClosed = -32e3] = "ConnectionClosed", a16[a16.RequestTimeout = -32001] = "RequestTimeout", a16[a16.ParseError = -32700] = "ParseError", a16[a16.InvalidRequest = -32600] = "InvalidRequest", a16[a16.MethodNotFound = -32601] = "MethodNotFound", a16[a16.InvalidParams = -32602] = "InvalidParams", a16[a16.InternalError = -32603] = "InternalError";
})(Ke || (Ke = {}));
var Bs = l.object({ jsonrpc: l.literal(kt), id: Ct, error: l.object({ code: l.number().int(), message: l.string(), data: l.optional(l.unknown()) }) }).strict();
var hf = l.union([Us, Zs, Hs, Bs]);
var jt = Be.strict();
var Nt = sr.extend({ method: l.literal("notifications/cancelled"), params: _t.extend({ requestId: Ct, reason: l.string().optional() }) });
var bt = l.object({ name: l.string(), title: l.optional(l.string()) }).passthrough();
var Js = bt.extend({ version: l.string() });
var Ru = l.object({ experimental: l.optional(l.object({}).passthrough()), sampling: l.optional(l.object({}).passthrough()), elicitation: l.optional(l.object({}).passthrough()), roots: l.optional(l.object({ listChanged: l.optional(l.boolean()) }).passthrough()) }).passthrough();
var xa = Ce.extend({ method: l.literal("initialize"), params: He.extend({ protocolVersion: l.string(), capabilities: Ru, clientInfo: Js }) });
var Tu = l.object({ experimental: l.optional(l.object({}).passthrough()), logging: l.optional(l.object({}).passthrough()), completions: l.optional(l.object({}).passthrough()), prompts: l.optional(l.object({ listChanged: l.optional(l.boolean()) }).passthrough()), resources: l.optional(l.object({ subscribe: l.optional(l.boolean()), listChanged: l.optional(l.boolean()) }).passthrough()), tools: l.optional(l.object({ listChanged: l.optional(l.boolean()) }).passthrough()) }).passthrough();
var Ou = Be.extend({ protocolVersion: l.string(), capabilities: Tu, serverInfo: Js, instructions: l.optional(l.string()) });
var Ea = sr.extend({ method: l.literal("notifications/initialized") });
var Ft = Ce.extend({ method: l.literal("ping") });
var $u = l.object({ progress: l.number(), total: l.optional(l.number()), message: l.optional(l.string()) }).passthrough();
var Lt = sr.extend({ method: l.literal("notifications/progress"), params: _t.merge($u).extend({ progressToken: qs }) });
var qt = Ce.extend({ params: He.extend({ cursor: l.optional(Ms) }).optional() });
var Mt = Be.extend({ nextCursor: l.optional(Ms) });
var Ks = l.object({ uri: l.string(), mimeType: l.optional(l.string()), _meta: l.optional(l.object({}).passthrough()) }).passthrough();
var Ws = Ks.extend({ text: l.string() });
var Sa = l.string().refine((a16) => {
  try {
    return atob(a16), true;
  } catch {
    return false;
  }
}, { message: "Invalid Base64 string" });
var Gs = Ks.extend({ blob: Sa });
var Ys = bt.extend({ uri: l.string(), description: l.optional(l.string()), mimeType: l.optional(l.string()), _meta: l.optional(l.object({}).passthrough()) });
var Au = bt.extend({ uriTemplate: l.string(), description: l.optional(l.string()), mimeType: l.optional(l.string()), _meta: l.optional(l.object({}).passthrough()) });
var wa = qt.extend({ method: l.literal("resources/list") });
var Du = Mt.extend({ resources: l.array(Ys) });
var Ra = qt.extend({ method: l.literal("resources/templates/list") });
var Iu = Mt.extend({ resourceTemplates: l.array(Au) });
var Ta = Ce.extend({ method: l.literal("resources/read"), params: He.extend({ uri: l.string() }) });
var ku = Be.extend({ contents: l.array(l.union([Ws, Gs])) });
var Cu = sr.extend({ method: l.literal("notifications/resources/list_changed") });
var ju = Ce.extend({ method: l.literal("resources/subscribe"), params: He.extend({ uri: l.string() }) });
var Nu = Ce.extend({ method: l.literal("resources/unsubscribe"), params: He.extend({ uri: l.string() }) });
var Fu = sr.extend({ method: l.literal("notifications/resources/updated"), params: _t.extend({ uri: l.string() }) });
var Lu = l.object({ name: l.string(), description: l.optional(l.string()), required: l.optional(l.boolean()) }).passthrough();
var qu = bt.extend({ description: l.optional(l.string()), arguments: l.optional(l.array(Lu)), _meta: l.optional(l.object({}).passthrough()) });
var Oa = qt.extend({ method: l.literal("prompts/list") });
var Mu = Mt.extend({ prompts: l.array(qu) });
var $a = Ce.extend({ method: l.literal("prompts/get"), params: He.extend({ name: l.string(), arguments: l.optional(l.record(l.string())) }) });
var Aa = l.object({ type: l.literal("text"), text: l.string(), _meta: l.optional(l.object({}).passthrough()) }).passthrough();
var Da = l.object({ type: l.literal("image"), data: Sa, mimeType: l.string(), _meta: l.optional(l.object({}).passthrough()) }).passthrough();
var Ia = l.object({ type: l.literal("audio"), data: Sa, mimeType: l.string(), _meta: l.optional(l.object({}).passthrough()) }).passthrough();
var Uu = l.object({ type: l.literal("resource"), resource: l.union([Ws, Gs]), _meta: l.optional(l.object({}).passthrough()) }).passthrough();
var zu = Ys.extend({ type: l.literal("resource_link") });
var Xs = l.union([Aa, Da, Ia, zu, Uu]);
var Zu = l.object({ role: l.enum(["user", "assistant"]), content: Xs }).passthrough();
var Vu = Be.extend({ description: l.optional(l.string()), messages: l.array(Zu) });
var Hu = sr.extend({ method: l.literal("notifications/prompts/list_changed") });
var Bu = l.object({ title: l.optional(l.string()), readOnlyHint: l.optional(l.boolean()), destructiveHint: l.optional(l.boolean()), idempotentHint: l.optional(l.boolean()), openWorldHint: l.optional(l.boolean()) }).passthrough();
var Qu = bt.extend({ description: l.optional(l.string()), inputSchema: l.object({ type: l.literal("object"), properties: l.optional(l.object({}).passthrough()), required: l.optional(l.array(l.string())) }).passthrough(), outputSchema: l.optional(l.object({ type: l.literal("object"), properties: l.optional(l.object({}).passthrough()), required: l.optional(l.array(l.string())) }).passthrough()), annotations: l.optional(Bu), _meta: l.optional(l.object({}).passthrough()) });
var ka = qt.extend({ method: l.literal("tools/list") });
var Ju = Mt.extend({ tools: l.array(Qu) });
var en = Be.extend({ content: l.array(Xs).default([]), structuredContent: l.object({}).passthrough().optional(), isError: l.optional(l.boolean()) });
var pf = en.or(Be.extend({ toolResult: l.unknown() }));
var Ca = Ce.extend({ method: l.literal("tools/call"), params: He.extend({ name: l.string(), arguments: l.optional(l.record(l.unknown())) }) });
var Ku = sr.extend({ method: l.literal("notifications/tools/list_changed") });
var rn = l.enum(["debug", "info", "notice", "warning", "error", "critical", "alert", "emergency"]);
var Wu = Ce.extend({ method: l.literal("logging/setLevel"), params: He.extend({ level: rn }) });
var Gu = sr.extend({ method: l.literal("notifications/message"), params: _t.extend({ level: rn, logger: l.optional(l.string()), data: l.unknown() }) });
var Yu = l.object({ name: l.string().optional() }).passthrough();
var Xu = l.object({ hints: l.optional(l.array(Yu)), costPriority: l.optional(l.number().min(0).max(1)), speedPriority: l.optional(l.number().min(0).max(1)), intelligencePriority: l.optional(l.number().min(0).max(1)) }).passthrough();
var ec = l.object({ role: l.enum(["user", "assistant"]), content: l.union([Aa, Da, Ia]) }).passthrough();
var rc = Ce.extend({ method: l.literal("sampling/createMessage"), params: He.extend({ messages: l.array(ec), systemPrompt: l.optional(l.string()), includeContext: l.optional(l.enum(["none", "thisServer", "allServers"])), temperature: l.optional(l.number()), maxTokens: l.number().int(), stopSequences: l.optional(l.array(l.string())), metadata: l.optional(l.object({}).passthrough()), modelPreferences: l.optional(Xu) }) });
var ja = Be.extend({ model: l.string(), stopReason: l.optional(l.enum(["endTurn", "stopSequence", "maxTokens"]).or(l.string())), role: l.enum(["user", "assistant"]), content: l.discriminatedUnion("type", [Aa, Da, Ia]) });
var tc = l.object({ type: l.literal("boolean"), title: l.optional(l.string()), description: l.optional(l.string()), default: l.optional(l.boolean()) }).passthrough();
var ac = l.object({ type: l.literal("string"), title: l.optional(l.string()), description: l.optional(l.string()), minLength: l.optional(l.number()), maxLength: l.optional(l.number()), format: l.optional(l.enum(["email", "uri", "date", "date-time"])) }).passthrough();
var sc = l.object({ type: l.enum(["number", "integer"]), title: l.optional(l.string()), description: l.optional(l.string()), minimum: l.optional(l.number()), maximum: l.optional(l.number()) }).passthrough();
var nc = l.object({ type: l.literal("string"), title: l.optional(l.string()), description: l.optional(l.string()), enum: l.array(l.string()), enumNames: l.optional(l.array(l.string())) }).passthrough();
var ic = l.union([tc, ac, sc, nc]);
var oc = Ce.extend({ method: l.literal("elicitation/create"), params: He.extend({ message: l.string(), requestedSchema: l.object({ type: l.literal("object"), properties: l.record(l.string(), ic), required: l.optional(l.array(l.string())) }).passthrough() }) });
var Na = Be.extend({ action: l.enum(["accept", "decline", "cancel"]), content: l.optional(l.record(l.string(), l.unknown())) });
var lc = l.object({ type: l.literal("ref/resource"), uri: l.string() }).passthrough();
var uc = l.object({ type: l.literal("ref/prompt"), name: l.string() }).passthrough();
var cc = Ce.extend({ method: l.literal("completion/complete"), params: He.extend({ ref: l.union([uc, lc]), argument: l.object({ name: l.string(), value: l.string() }).passthrough(), context: l.optional(l.object({ arguments: l.optional(l.record(l.string(), l.string())) })) }) });
var dc = Be.extend({ completion: l.object({ values: l.array(l.string()).max(100), total: l.optional(l.number().int()), hasMore: l.optional(l.boolean()) }).passthrough() });
var fc = l.object({ uri: l.string().startsWith("file://"), name: l.optional(l.string()), _meta: l.optional(l.object({}).passthrough()) }).passthrough();
var hc = Ce.extend({ method: l.literal("roots/list") });
var Fa = Be.extend({ roots: l.array(fc) });
var pc = sr.extend({ method: l.literal("notifications/roots/list_changed") });
var mf = l.union([Ft, xa, cc, Wu, $a, Oa, wa, Ra, Ta, ju, Nu, Ca, ka]);
var vf = l.union([Nt, Lt, Ea, pc]);
var gf = l.union([jt, ja, Na, Fa]);
var yf = l.union([Ft, rc, oc, hc]);
var _f = l.union([Nt, Lt, Gu, Fu, Cu, Ku, Hu]);
var bf = l.union([jt, Ou, dc, Vu, Mu, Du, Iu, ku, en, Ju]);
var no = vl(so(), 1);
var oo = Symbol("Let zodToJsonSchema decide on which parser to use");
var Kd = new Set("ABCDEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopqrstuvxyz0123456789");
function bv(a16) {
  return a16;
}

// src/tools/polardb-tools.ts
var import_fs = require("fs");

// ../../node_modules/.pnpm/registry.npmmirror.com+zod@3.24.1/node_modules/zod/lib/index.mjs
var util;
(function(util2) {
  util2.assertEqual = (val) => val;
  function assertIs(_arg) {
  }
  util2.assertIs = assertIs;
  function assertNever(_x) {
    throw new Error();
  }
  util2.assertNever = assertNever;
  util2.arrayToEnum = (items) => {
    const obj = {};
    for (const item of items) {
      obj[item] = item;
    }
    return obj;
  };
  util2.getValidEnumValues = (obj) => {
    const validKeys = util2.objectKeys(obj).filter((k) => typeof obj[obj[k]] !== "number");
    const filtered = {};
    for (const k of validKeys) {
      filtered[k] = obj[k];
    }
    return util2.objectValues(filtered);
  };
  util2.objectValues = (obj) => {
    return util2.objectKeys(obj).map(function(e) {
      return obj[e];
    });
  };
  util2.objectKeys = typeof Object.keys === "function" ? (obj) => Object.keys(obj) : (object) => {
    const keys = [];
    for (const key in object) {
      if (Object.prototype.hasOwnProperty.call(object, key)) {
        keys.push(key);
      }
    }
    return keys;
  };
  util2.find = (arr, checker) => {
    for (const item of arr) {
      if (checker(item))
        return item;
    }
    return void 0;
  };
  util2.isInteger = typeof Number.isInteger === "function" ? (val) => Number.isInteger(val) : (val) => typeof val === "number" && isFinite(val) && Math.floor(val) === val;
  function joinValues(array, separator = " | ") {
    return array.map((val) => typeof val === "string" ? `'${val}'` : val).join(separator);
  }
  util2.joinValues = joinValues;
  util2.jsonStringifyReplacer = (_, value) => {
    if (typeof value === "bigint") {
      return value.toString();
    }
    return value;
  };
})(util || (util = {}));
var objectUtil;
(function(objectUtil2) {
  objectUtil2.mergeShapes = (first, second) => {
    return {
      ...first,
      ...second
      // second overwrites first
    };
  };
})(objectUtil || (objectUtil = {}));
var ZodParsedType = util.arrayToEnum([
  "string",
  "nan",
  "number",
  "integer",
  "float",
  "boolean",
  "date",
  "bigint",
  "symbol",
  "function",
  "undefined",
  "null",
  "array",
  "object",
  "unknown",
  "promise",
  "void",
  "never",
  "map",
  "set"
]);
var getParsedType = (data) => {
  const t = typeof data;
  switch (t) {
    case "undefined":
      return ZodParsedType.undefined;
    case "string":
      return ZodParsedType.string;
    case "number":
      return isNaN(data) ? ZodParsedType.nan : ZodParsedType.number;
    case "boolean":
      return ZodParsedType.boolean;
    case "function":
      return ZodParsedType.function;
    case "bigint":
      return ZodParsedType.bigint;
    case "symbol":
      return ZodParsedType.symbol;
    case "object":
      if (Array.isArray(data)) {
        return ZodParsedType.array;
      }
      if (data === null) {
        return ZodParsedType.null;
      }
      if (data.then && typeof data.then === "function" && data.catch && typeof data.catch === "function") {
        return ZodParsedType.promise;
      }
      if (typeof Map !== "undefined" && data instanceof Map) {
        return ZodParsedType.map;
      }
      if (typeof Set !== "undefined" && data instanceof Set) {
        return ZodParsedType.set;
      }
      if (typeof Date !== "undefined" && data instanceof Date) {
        return ZodParsedType.date;
      }
      return ZodParsedType.object;
    default:
      return ZodParsedType.unknown;
  }
};
var ZodIssueCode = util.arrayToEnum([
  "invalid_type",
  "invalid_literal",
  "custom",
  "invalid_union",
  "invalid_union_discriminator",
  "invalid_enum_value",
  "unrecognized_keys",
  "invalid_arguments",
  "invalid_return_type",
  "invalid_date",
  "invalid_string",
  "too_small",
  "too_big",
  "invalid_intersection_types",
  "not_multiple_of",
  "not_finite"
]);
var quotelessJson = (obj) => {
  const json = JSON.stringify(obj, null, 2);
  return json.replace(/"([^"]+)":/g, "$1:");
};
var ZodError = class _ZodError extends Error {
  get errors() {
    return this.issues;
  }
  constructor(issues) {
    super();
    this.issues = [];
    this.addIssue = (sub) => {
      this.issues = [...this.issues, sub];
    };
    this.addIssues = (subs = []) => {
      this.issues = [...this.issues, ...subs];
    };
    const actualProto = new.target.prototype;
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(this, actualProto);
    } else {
      this.__proto__ = actualProto;
    }
    this.name = "ZodError";
    this.issues = issues;
  }
  format(_mapper) {
    const mapper = _mapper || function(issue) {
      return issue.message;
    };
    const fieldErrors = { _errors: [] };
    const processError = (error) => {
      for (const issue of error.issues) {
        if (issue.code === "invalid_union") {
          issue.unionErrors.map(processError);
        } else if (issue.code === "invalid_return_type") {
          processError(issue.returnTypeError);
        } else if (issue.code === "invalid_arguments") {
          processError(issue.argumentsError);
        } else if (issue.path.length === 0) {
          fieldErrors._errors.push(mapper(issue));
        } else {
          let curr = fieldErrors;
          let i = 0;
          while (i < issue.path.length) {
            const el = issue.path[i];
            const terminal = i === issue.path.length - 1;
            if (!terminal) {
              curr[el] = curr[el] || { _errors: [] };
            } else {
              curr[el] = curr[el] || { _errors: [] };
              curr[el]._errors.push(mapper(issue));
            }
            curr = curr[el];
            i++;
          }
        }
      }
    };
    processError(this);
    return fieldErrors;
  }
  static assert(value) {
    if (!(value instanceof _ZodError)) {
      throw new Error(`Not a ZodError: ${value}`);
    }
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, util.jsonStringifyReplacer, 2);
  }
  get isEmpty() {
    return this.issues.length === 0;
  }
  flatten(mapper = (issue) => issue.message) {
    const fieldErrors = {};
    const formErrors = [];
    for (const sub of this.issues) {
      if (sub.path.length > 0) {
        fieldErrors[sub.path[0]] = fieldErrors[sub.path[0]] || [];
        fieldErrors[sub.path[0]].push(mapper(sub));
      } else {
        formErrors.push(mapper(sub));
      }
    }
    return { formErrors, fieldErrors };
  }
  get formErrors() {
    return this.flatten();
  }
};
ZodError.create = (issues) => {
  const error = new ZodError(issues);
  return error;
};
var errorMap = (issue, _ctx) => {
  let message;
  switch (issue.code) {
    case ZodIssueCode.invalid_type:
      if (issue.received === ZodParsedType.undefined) {
        message = "Required";
      } else {
        message = `Expected ${issue.expected}, received ${issue.received}`;
      }
      break;
    case ZodIssueCode.invalid_literal:
      message = `Invalid literal value, expected ${JSON.stringify(issue.expected, util.jsonStringifyReplacer)}`;
      break;
    case ZodIssueCode.unrecognized_keys:
      message = `Unrecognized key(s) in object: ${util.joinValues(issue.keys, ", ")}`;
      break;
    case ZodIssueCode.invalid_union:
      message = `Invalid input`;
      break;
    case ZodIssueCode.invalid_union_discriminator:
      message = `Invalid discriminator value. Expected ${util.joinValues(issue.options)}`;
      break;
    case ZodIssueCode.invalid_enum_value:
      message = `Invalid enum value. Expected ${util.joinValues(issue.options)}, received '${issue.received}'`;
      break;
    case ZodIssueCode.invalid_arguments:
      message = `Invalid function arguments`;
      break;
    case ZodIssueCode.invalid_return_type:
      message = `Invalid function return type`;
      break;
    case ZodIssueCode.invalid_date:
      message = `Invalid date`;
      break;
    case ZodIssueCode.invalid_string:
      if (typeof issue.validation === "object") {
        if ("includes" in issue.validation) {
          message = `Invalid input: must include "${issue.validation.includes}"`;
          if (typeof issue.validation.position === "number") {
            message = `${message} at one or more positions greater than or equal to ${issue.validation.position}`;
          }
        } else if ("startsWith" in issue.validation) {
          message = `Invalid input: must start with "${issue.validation.startsWith}"`;
        } else if ("endsWith" in issue.validation) {
          message = `Invalid input: must end with "${issue.validation.endsWith}"`;
        } else {
          util.assertNever(issue.validation);
        }
      } else if (issue.validation !== "regex") {
        message = `Invalid ${issue.validation}`;
      } else {
        message = "Invalid";
      }
      break;
    case ZodIssueCode.too_small:
      if (issue.type === "array")
        message = `Array must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `more than`} ${issue.minimum} element(s)`;
      else if (issue.type === "string")
        message = `String must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `over`} ${issue.minimum} character(s)`;
      else if (issue.type === "number")
        message = `Number must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${issue.minimum}`;
      else if (issue.type === "date")
        message = `Date must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${new Date(Number(issue.minimum))}`;
      else
        message = "Invalid input";
      break;
    case ZodIssueCode.too_big:
      if (issue.type === "array")
        message = `Array must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `less than`} ${issue.maximum} element(s)`;
      else if (issue.type === "string")
        message = `String must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `under`} ${issue.maximum} character(s)`;
      else if (issue.type === "number")
        message = `Number must be ${issue.exact ? `exactly` : issue.inclusive ? `less than or equal to` : `less than`} ${issue.maximum}`;
      else if (issue.type === "bigint")
        message = `BigInt must be ${issue.exact ? `exactly` : issue.inclusive ? `less than or equal to` : `less than`} ${issue.maximum}`;
      else if (issue.type === "date")
        message = `Date must be ${issue.exact ? `exactly` : issue.inclusive ? `smaller than or equal to` : `smaller than`} ${new Date(Number(issue.maximum))}`;
      else
        message = "Invalid input";
      break;
    case ZodIssueCode.custom:
      message = `Invalid input`;
      break;
    case ZodIssueCode.invalid_intersection_types:
      message = `Intersection results could not be merged`;
      break;
    case ZodIssueCode.not_multiple_of:
      message = `Number must be a multiple of ${issue.multipleOf}`;
      break;
    case ZodIssueCode.not_finite:
      message = "Number must be finite";
      break;
    default:
      message = _ctx.defaultError;
      util.assertNever(issue);
  }
  return { message };
};
var overrideErrorMap = errorMap;
function setErrorMap(map) {
  overrideErrorMap = map;
}
function getErrorMap() {
  return overrideErrorMap;
}
var makeIssue = (params) => {
  const { data, path, errorMaps, issueData } = params;
  const fullPath = [...path, ...issueData.path || []];
  const fullIssue = {
    ...issueData,
    path: fullPath
  };
  if (issueData.message !== void 0) {
    return {
      ...issueData,
      path: fullPath,
      message: issueData.message
    };
  }
  let errorMessage = "";
  const maps = errorMaps.filter((m) => !!m).slice().reverse();
  for (const map of maps) {
    errorMessage = map(fullIssue, { data, defaultError: errorMessage }).message;
  }
  return {
    ...issueData,
    path: fullPath,
    message: errorMessage
  };
};
var EMPTY_PATH = [];
function addIssueToContext(ctx, issueData) {
  const overrideMap = getErrorMap();
  const issue = makeIssue({
    issueData,
    data: ctx.data,
    path: ctx.path,
    errorMaps: [
      ctx.common.contextualErrorMap,
      // contextual error map is first priority
      ctx.schemaErrorMap,
      // then schema-bound map if available
      overrideMap,
      // then global override map
      overrideMap === errorMap ? void 0 : errorMap
      // then global default map
    ].filter((x) => !!x)
  });
  ctx.common.issues.push(issue);
}
var ParseStatus = class _ParseStatus {
  constructor() {
    this.value = "valid";
  }
  dirty() {
    if (this.value === "valid")
      this.value = "dirty";
  }
  abort() {
    if (this.value !== "aborted")
      this.value = "aborted";
  }
  static mergeArray(status, results) {
    const arrayValue = [];
    for (const s of results) {
      if (s.status === "aborted")
        return INVALID;
      if (s.status === "dirty")
        status.dirty();
      arrayValue.push(s.value);
    }
    return { status: status.value, value: arrayValue };
  }
  static async mergeObjectAsync(status, pairs) {
    const syncPairs = [];
    for (const pair of pairs) {
      const key = await pair.key;
      const value = await pair.value;
      syncPairs.push({
        key,
        value
      });
    }
    return _ParseStatus.mergeObjectSync(status, syncPairs);
  }
  static mergeObjectSync(status, pairs) {
    const finalObject = {};
    for (const pair of pairs) {
      const { key, value } = pair;
      if (key.status === "aborted")
        return INVALID;
      if (value.status === "aborted")
        return INVALID;
      if (key.status === "dirty")
        status.dirty();
      if (value.status === "dirty")
        status.dirty();
      if (key.value !== "__proto__" && (typeof value.value !== "undefined" || pair.alwaysSet)) {
        finalObject[key.value] = value.value;
      }
    }
    return { status: status.value, value: finalObject };
  }
};
var INVALID = Object.freeze({
  status: "aborted"
});
var DIRTY = (value) => ({ status: "dirty", value });
var OK = (value) => ({ status: "valid", value });
var isAborted = (x) => x.status === "aborted";
var isDirty = (x) => x.status === "dirty";
var isValid = (x) => x.status === "valid";
var isAsync = (x) => typeof Promise !== "undefined" && x instanceof Promise;
function __classPrivateFieldGet(receiver, state, kind, f) {
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}
function __classPrivateFieldSet(receiver, state, value, kind, f) {
  if (kind === "m") throw new TypeError("Private method is not writable");
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
}
var errorUtil;
(function(errorUtil2) {
  errorUtil2.errToObj = (message) => typeof message === "string" ? { message } : message || {};
  errorUtil2.toString = (message) => typeof message === "string" ? message : message === null || message === void 0 ? void 0 : message.message;
})(errorUtil || (errorUtil = {}));
var _ZodEnum_cache;
var _ZodNativeEnum_cache;
var ParseInputLazyPath = class {
  constructor(parent, value, path, key) {
    this._cachedPath = [];
    this.parent = parent;
    this.data = value;
    this._path = path;
    this._key = key;
  }
  get path() {
    if (!this._cachedPath.length) {
      if (this._key instanceof Array) {
        this._cachedPath.push(...this._path, ...this._key);
      } else {
        this._cachedPath.push(...this._path, this._key);
      }
    }
    return this._cachedPath;
  }
};
var handleResult = (ctx, result) => {
  if (isValid(result)) {
    return { success: true, data: result.value };
  } else {
    if (!ctx.common.issues.length) {
      throw new Error("Validation failed but no issues detected.");
    }
    return {
      success: false,
      get error() {
        if (this._error)
          return this._error;
        const error = new ZodError(ctx.common.issues);
        this._error = error;
        return this._error;
      }
    };
  }
};
function processCreateParams(params) {
  if (!params)
    return {};
  const { errorMap: errorMap2, invalid_type_error, required_error, description } = params;
  if (errorMap2 && (invalid_type_error || required_error)) {
    throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
  }
  if (errorMap2)
    return { errorMap: errorMap2, description };
  const customMap = (iss, ctx) => {
    var _a2, _b;
    const { message } = params;
    if (iss.code === "invalid_enum_value") {
      return { message: message !== null && message !== void 0 ? message : ctx.defaultError };
    }
    if (typeof ctx.data === "undefined") {
      return { message: (_a2 = message !== null && message !== void 0 ? message : required_error) !== null && _a2 !== void 0 ? _a2 : ctx.defaultError };
    }
    if (iss.code !== "invalid_type")
      return { message: ctx.defaultError };
    return { message: (_b = message !== null && message !== void 0 ? message : invalid_type_error) !== null && _b !== void 0 ? _b : ctx.defaultError };
  };
  return { errorMap: customMap, description };
}
var ZodType = class {
  get description() {
    return this._def.description;
  }
  _getType(input) {
    return getParsedType(input.data);
  }
  _getOrReturnCtx(input, ctx) {
    return ctx || {
      common: input.parent.common,
      data: input.data,
      parsedType: getParsedType(input.data),
      schemaErrorMap: this._def.errorMap,
      path: input.path,
      parent: input.parent
    };
  }
  _processInputParams(input) {
    return {
      status: new ParseStatus(),
      ctx: {
        common: input.parent.common,
        data: input.data,
        parsedType: getParsedType(input.data),
        schemaErrorMap: this._def.errorMap,
        path: input.path,
        parent: input.parent
      }
    };
  }
  _parseSync(input) {
    const result = this._parse(input);
    if (isAsync(result)) {
      throw new Error("Synchronous parse encountered promise.");
    }
    return result;
  }
  _parseAsync(input) {
    const result = this._parse(input);
    return Promise.resolve(result);
  }
  parse(data, params) {
    const result = this.safeParse(data, params);
    if (result.success)
      return result.data;
    throw result.error;
  }
  safeParse(data, params) {
    var _a2;
    const ctx = {
      common: {
        issues: [],
        async: (_a2 = params === null || params === void 0 ? void 0 : params.async) !== null && _a2 !== void 0 ? _a2 : false,
        contextualErrorMap: params === null || params === void 0 ? void 0 : params.errorMap
      },
      path: (params === null || params === void 0 ? void 0 : params.path) || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data,
      parsedType: getParsedType(data)
    };
    const result = this._parseSync({ data, path: ctx.path, parent: ctx });
    return handleResult(ctx, result);
  }
  "~validate"(data) {
    var _a2, _b;
    const ctx = {
      common: {
        issues: [],
        async: !!this["~standard"].async
      },
      path: [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data,
      parsedType: getParsedType(data)
    };
    if (!this["~standard"].async) {
      try {
        const result = this._parseSync({ data, path: [], parent: ctx });
        return isValid(result) ? {
          value: result.value
        } : {
          issues: ctx.common.issues
        };
      } catch (err) {
        if ((_b = (_a2 = err === null || err === void 0 ? void 0 : err.message) === null || _a2 === void 0 ? void 0 : _a2.toLowerCase()) === null || _b === void 0 ? void 0 : _b.includes("encountered")) {
          this["~standard"].async = true;
        }
        ctx.common = {
          issues: [],
          async: true
        };
      }
    }
    return this._parseAsync({ data, path: [], parent: ctx }).then((result) => isValid(result) ? {
      value: result.value
    } : {
      issues: ctx.common.issues
    });
  }
  async parseAsync(data, params) {
    const result = await this.safeParseAsync(data, params);
    if (result.success)
      return result.data;
    throw result.error;
  }
  async safeParseAsync(data, params) {
    const ctx = {
      common: {
        issues: [],
        contextualErrorMap: params === null || params === void 0 ? void 0 : params.errorMap,
        async: true
      },
      path: (params === null || params === void 0 ? void 0 : params.path) || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data,
      parsedType: getParsedType(data)
    };
    const maybeAsyncResult = this._parse({ data, path: ctx.path, parent: ctx });
    const result = await (isAsync(maybeAsyncResult) ? maybeAsyncResult : Promise.resolve(maybeAsyncResult));
    return handleResult(ctx, result);
  }
  refine(check, message) {
    const getIssueProperties = (val) => {
      if (typeof message === "string" || typeof message === "undefined") {
        return { message };
      } else if (typeof message === "function") {
        return message(val);
      } else {
        return message;
      }
    };
    return this._refinement((val, ctx) => {
      const result = check(val);
      const setError = () => ctx.addIssue({
        code: ZodIssueCode.custom,
        ...getIssueProperties(val)
      });
      if (typeof Promise !== "undefined" && result instanceof Promise) {
        return result.then((data) => {
          if (!data) {
            setError();
            return false;
          } else {
            return true;
          }
        });
      }
      if (!result) {
        setError();
        return false;
      } else {
        return true;
      }
    });
  }
  refinement(check, refinementData) {
    return this._refinement((val, ctx) => {
      if (!check(val)) {
        ctx.addIssue(typeof refinementData === "function" ? refinementData(val, ctx) : refinementData);
        return false;
      } else {
        return true;
      }
    });
  }
  _refinement(refinement) {
    return new ZodEffects({
      schema: this,
      typeName: ZodFirstPartyTypeKind.ZodEffects,
      effect: { type: "refinement", refinement }
    });
  }
  superRefine(refinement) {
    return this._refinement(refinement);
  }
  constructor(def) {
    this.spa = this.safeParseAsync;
    this._def = def;
    this.parse = this.parse.bind(this);
    this.safeParse = this.safeParse.bind(this);
    this.parseAsync = this.parseAsync.bind(this);
    this.safeParseAsync = this.safeParseAsync.bind(this);
    this.spa = this.spa.bind(this);
    this.refine = this.refine.bind(this);
    this.refinement = this.refinement.bind(this);
    this.superRefine = this.superRefine.bind(this);
    this.optional = this.optional.bind(this);
    this.nullable = this.nullable.bind(this);
    this.nullish = this.nullish.bind(this);
    this.array = this.array.bind(this);
    this.promise = this.promise.bind(this);
    this.or = this.or.bind(this);
    this.and = this.and.bind(this);
    this.transform = this.transform.bind(this);
    this.brand = this.brand.bind(this);
    this.default = this.default.bind(this);
    this.catch = this.catch.bind(this);
    this.describe = this.describe.bind(this);
    this.pipe = this.pipe.bind(this);
    this.readonly = this.readonly.bind(this);
    this.isNullable = this.isNullable.bind(this);
    this.isOptional = this.isOptional.bind(this);
    this["~standard"] = {
      version: 1,
      vendor: "zod",
      validate: (data) => this["~validate"](data)
    };
  }
  optional() {
    return ZodOptional.create(this, this._def);
  }
  nullable() {
    return ZodNullable.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return ZodArray.create(this);
  }
  promise() {
    return ZodPromise.create(this, this._def);
  }
  or(option) {
    return ZodUnion.create([this, option], this._def);
  }
  and(incoming) {
    return ZodIntersection.create(this, incoming, this._def);
  }
  transform(transform) {
    return new ZodEffects({
      ...processCreateParams(this._def),
      schema: this,
      typeName: ZodFirstPartyTypeKind.ZodEffects,
      effect: { type: "transform", transform }
    });
  }
  default(def) {
    const defaultValueFunc = typeof def === "function" ? def : () => def;
    return new ZodDefault({
      ...processCreateParams(this._def),
      innerType: this,
      defaultValue: defaultValueFunc,
      typeName: ZodFirstPartyTypeKind.ZodDefault
    });
  }
  brand() {
    return new ZodBranded({
      typeName: ZodFirstPartyTypeKind.ZodBranded,
      type: this,
      ...processCreateParams(this._def)
    });
  }
  catch(def) {
    const catchValueFunc = typeof def === "function" ? def : () => def;
    return new ZodCatch({
      ...processCreateParams(this._def),
      innerType: this,
      catchValue: catchValueFunc,
      typeName: ZodFirstPartyTypeKind.ZodCatch
    });
  }
  describe(description) {
    const This = this.constructor;
    return new This({
      ...this._def,
      description
    });
  }
  pipe(target) {
    return ZodPipeline.create(this, target);
  }
  readonly() {
    return ZodReadonly.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
};
var cuidRegex = /^c[^\s-]{8,}$/i;
var cuid2Regex = /^[0-9a-z]+$/;
var ulidRegex = /^[0-9A-HJKMNP-TV-Z]{26}$/i;
var uuidRegex = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i;
var nanoidRegex = /^[a-z0-9_-]{21}$/i;
var jwtRegex = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/;
var durationRegex = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/;
var emailRegex = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i;
var _emojiRegex = `^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$`;
var emojiRegex;
var ipv4Regex = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/;
var ipv4CidrRegex = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/;
var ipv6Regex = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/;
var ipv6CidrRegex = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/;
var base64Regex = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;
var base64urlRegex = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/;
var dateRegexSource = `((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))`;
var dateRegex = new RegExp(`^${dateRegexSource}$`);
function timeRegexSource(args) {
  let regex = `([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d`;
  if (args.precision) {
    regex = `${regex}\\.\\d{${args.precision}}`;
  } else if (args.precision == null) {
    regex = `${regex}(\\.\\d+)?`;
  }
  return regex;
}
function timeRegex(args) {
  return new RegExp(`^${timeRegexSource(args)}$`);
}
function datetimeRegex(args) {
  let regex = `${dateRegexSource}T${timeRegexSource(args)}`;
  const opts = [];
  opts.push(args.local ? `Z?` : `Z`);
  if (args.offset)
    opts.push(`([+-]\\d{2}:?\\d{2})`);
  regex = `${regex}(${opts.join("|")})`;
  return new RegExp(`^${regex}$`);
}
function isValidIP(ip, version) {
  if ((version === "v4" || !version) && ipv4Regex.test(ip)) {
    return true;
  }
  if ((version === "v6" || !version) && ipv6Regex.test(ip)) {
    return true;
  }
  return false;
}
function isValidJWT(jwt, alg) {
  if (!jwtRegex.test(jwt))
    return false;
  try {
    const [header] = jwt.split(".");
    const base64 = header.replace(/-/g, "+").replace(/_/g, "/").padEnd(header.length + (4 - header.length % 4) % 4, "=");
    const decoded = JSON.parse(atob(base64));
    if (typeof decoded !== "object" || decoded === null)
      return false;
    if (!decoded.typ || !decoded.alg)
      return false;
    if (alg && decoded.alg !== alg)
      return false;
    return true;
  } catch (_a2) {
    return false;
  }
}
function isValidCidr(ip, version) {
  if ((version === "v4" || !version) && ipv4CidrRegex.test(ip)) {
    return true;
  }
  if ((version === "v6" || !version) && ipv6CidrRegex.test(ip)) {
    return true;
  }
  return false;
}
var ZodString = class _ZodString extends ZodType {
  _parse(input) {
    if (this._def.coerce) {
      input.data = String(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.string) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.string,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    const status = new ParseStatus();
    let ctx = void 0;
    for (const check of this._def.checks) {
      if (check.kind === "min") {
        if (input.data.length < check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            minimum: check.value,
            type: "string",
            inclusive: true,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        if (input.data.length > check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            maximum: check.value,
            type: "string",
            inclusive: true,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "length") {
        const tooBig = input.data.length > check.value;
        const tooSmall = input.data.length < check.value;
        if (tooBig || tooSmall) {
          ctx = this._getOrReturnCtx(input, ctx);
          if (tooBig) {
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_big,
              maximum: check.value,
              type: "string",
              inclusive: true,
              exact: true,
              message: check.message
            });
          } else if (tooSmall) {
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_small,
              minimum: check.value,
              type: "string",
              inclusive: true,
              exact: true,
              message: check.message
            });
          }
          status.dirty();
        }
      } else if (check.kind === "email") {
        if (!emailRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "email",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "emoji") {
        if (!emojiRegex) {
          emojiRegex = new RegExp(_emojiRegex, "u");
        }
        if (!emojiRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "emoji",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "uuid") {
        if (!uuidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "uuid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "nanoid") {
        if (!nanoidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "nanoid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "cuid") {
        if (!cuidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "cuid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "cuid2") {
        if (!cuid2Regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "cuid2",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "ulid") {
        if (!ulidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "ulid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "url") {
        try {
          new URL(input.data);
        } catch (_a2) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "url",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "regex") {
        check.regex.lastIndex = 0;
        const testResult = check.regex.test(input.data);
        if (!testResult) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "regex",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "trim") {
        input.data = input.data.trim();
      } else if (check.kind === "includes") {
        if (!input.data.includes(check.value, check.position)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: { includes: check.value, position: check.position },
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "toLowerCase") {
        input.data = input.data.toLowerCase();
      } else if (check.kind === "toUpperCase") {
        input.data = input.data.toUpperCase();
      } else if (check.kind === "startsWith") {
        if (!input.data.startsWith(check.value)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: { startsWith: check.value },
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "endsWith") {
        if (!input.data.endsWith(check.value)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: { endsWith: check.value },
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "datetime") {
        const regex = datetimeRegex(check);
        if (!regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: "datetime",
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "date") {
        const regex = dateRegex;
        if (!regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: "date",
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "time") {
        const regex = timeRegex(check);
        if (!regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: "time",
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "duration") {
        if (!durationRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "duration",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "ip") {
        if (!isValidIP(input.data, check.version)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "ip",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "jwt") {
        if (!isValidJWT(input.data, check.alg)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "jwt",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "cidr") {
        if (!isValidCidr(input.data, check.version)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "cidr",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "base64") {
        if (!base64Regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "base64",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "base64url") {
        if (!base64urlRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "base64url",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return { status: status.value, value: input.data };
  }
  _regex(regex, validation, message) {
    return this.refinement((data) => regex.test(data), {
      validation,
      code: ZodIssueCode.invalid_string,
      ...errorUtil.errToObj(message)
    });
  }
  _addCheck(check) {
    return new _ZodString({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  email(message) {
    return this._addCheck({ kind: "email", ...errorUtil.errToObj(message) });
  }
  url(message) {
    return this._addCheck({ kind: "url", ...errorUtil.errToObj(message) });
  }
  emoji(message) {
    return this._addCheck({ kind: "emoji", ...errorUtil.errToObj(message) });
  }
  uuid(message) {
    return this._addCheck({ kind: "uuid", ...errorUtil.errToObj(message) });
  }
  nanoid(message) {
    return this._addCheck({ kind: "nanoid", ...errorUtil.errToObj(message) });
  }
  cuid(message) {
    return this._addCheck({ kind: "cuid", ...errorUtil.errToObj(message) });
  }
  cuid2(message) {
    return this._addCheck({ kind: "cuid2", ...errorUtil.errToObj(message) });
  }
  ulid(message) {
    return this._addCheck({ kind: "ulid", ...errorUtil.errToObj(message) });
  }
  base64(message) {
    return this._addCheck({ kind: "base64", ...errorUtil.errToObj(message) });
  }
  base64url(message) {
    return this._addCheck({
      kind: "base64url",
      ...errorUtil.errToObj(message)
    });
  }
  jwt(options) {
    return this._addCheck({ kind: "jwt", ...errorUtil.errToObj(options) });
  }
  ip(options) {
    return this._addCheck({ kind: "ip", ...errorUtil.errToObj(options) });
  }
  cidr(options) {
    return this._addCheck({ kind: "cidr", ...errorUtil.errToObj(options) });
  }
  datetime(options) {
    var _a2, _b;
    if (typeof options === "string") {
      return this._addCheck({
        kind: "datetime",
        precision: null,
        offset: false,
        local: false,
        message: options
      });
    }
    return this._addCheck({
      kind: "datetime",
      precision: typeof (options === null || options === void 0 ? void 0 : options.precision) === "undefined" ? null : options === null || options === void 0 ? void 0 : options.precision,
      offset: (_a2 = options === null || options === void 0 ? void 0 : options.offset) !== null && _a2 !== void 0 ? _a2 : false,
      local: (_b = options === null || options === void 0 ? void 0 : options.local) !== null && _b !== void 0 ? _b : false,
      ...errorUtil.errToObj(options === null || options === void 0 ? void 0 : options.message)
    });
  }
  date(message) {
    return this._addCheck({ kind: "date", message });
  }
  time(options) {
    if (typeof options === "string") {
      return this._addCheck({
        kind: "time",
        precision: null,
        message: options
      });
    }
    return this._addCheck({
      kind: "time",
      precision: typeof (options === null || options === void 0 ? void 0 : options.precision) === "undefined" ? null : options === null || options === void 0 ? void 0 : options.precision,
      ...errorUtil.errToObj(options === null || options === void 0 ? void 0 : options.message)
    });
  }
  duration(message) {
    return this._addCheck({ kind: "duration", ...errorUtil.errToObj(message) });
  }
  regex(regex, message) {
    return this._addCheck({
      kind: "regex",
      regex,
      ...errorUtil.errToObj(message)
    });
  }
  includes(value, options) {
    return this._addCheck({
      kind: "includes",
      value,
      position: options === null || options === void 0 ? void 0 : options.position,
      ...errorUtil.errToObj(options === null || options === void 0 ? void 0 : options.message)
    });
  }
  startsWith(value, message) {
    return this._addCheck({
      kind: "startsWith",
      value,
      ...errorUtil.errToObj(message)
    });
  }
  endsWith(value, message) {
    return this._addCheck({
      kind: "endsWith",
      value,
      ...errorUtil.errToObj(message)
    });
  }
  min(minLength, message) {
    return this._addCheck({
      kind: "min",
      value: minLength,
      ...errorUtil.errToObj(message)
    });
  }
  max(maxLength, message) {
    return this._addCheck({
      kind: "max",
      value: maxLength,
      ...errorUtil.errToObj(message)
    });
  }
  length(len, message) {
    return this._addCheck({
      kind: "length",
      value: len,
      ...errorUtil.errToObj(message)
    });
  }
  /**
   * Equivalent to `.min(1)`
   */
  nonempty(message) {
    return this.min(1, errorUtil.errToObj(message));
  }
  trim() {
    return new _ZodString({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }]
    });
  }
  toLowerCase() {
    return new _ZodString({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }]
    });
  }
  toUpperCase() {
    return new _ZodString({
      ...this._def,
      checks: [...this._def.checks, { kind: "toUpperCase" }]
    });
  }
  get isDatetime() {
    return !!this._def.checks.find((ch) => ch.kind === "datetime");
  }
  get isDate() {
    return !!this._def.checks.find((ch) => ch.kind === "date");
  }
  get isTime() {
    return !!this._def.checks.find((ch) => ch.kind === "time");
  }
  get isDuration() {
    return !!this._def.checks.find((ch) => ch.kind === "duration");
  }
  get isEmail() {
    return !!this._def.checks.find((ch) => ch.kind === "email");
  }
  get isURL() {
    return !!this._def.checks.find((ch) => ch.kind === "url");
  }
  get isEmoji() {
    return !!this._def.checks.find((ch) => ch.kind === "emoji");
  }
  get isUUID() {
    return !!this._def.checks.find((ch) => ch.kind === "uuid");
  }
  get isNANOID() {
    return !!this._def.checks.find((ch) => ch.kind === "nanoid");
  }
  get isCUID() {
    return !!this._def.checks.find((ch) => ch.kind === "cuid");
  }
  get isCUID2() {
    return !!this._def.checks.find((ch) => ch.kind === "cuid2");
  }
  get isULID() {
    return !!this._def.checks.find((ch) => ch.kind === "ulid");
  }
  get isIP() {
    return !!this._def.checks.find((ch) => ch.kind === "ip");
  }
  get isCIDR() {
    return !!this._def.checks.find((ch) => ch.kind === "cidr");
  }
  get isBase64() {
    return !!this._def.checks.find((ch) => ch.kind === "base64");
  }
  get isBase64url() {
    return !!this._def.checks.find((ch) => ch.kind === "base64url");
  }
  get minLength() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min;
  }
  get maxLength() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max;
  }
};
ZodString.create = (params) => {
  var _a2;
  return new ZodString({
    checks: [],
    typeName: ZodFirstPartyTypeKind.ZodString,
    coerce: (_a2 = params === null || params === void 0 ? void 0 : params.coerce) !== null && _a2 !== void 0 ? _a2 : false,
    ...processCreateParams(params)
  });
};
function floatSafeRemainder(val, step) {
  const valDecCount = (val.toString().split(".")[1] || "").length;
  const stepDecCount = (step.toString().split(".")[1] || "").length;
  const decCount = valDecCount > stepDecCount ? valDecCount : stepDecCount;
  const valInt = parseInt(val.toFixed(decCount).replace(".", ""));
  const stepInt = parseInt(step.toFixed(decCount).replace(".", ""));
  return valInt % stepInt / Math.pow(10, decCount);
}
var ZodNumber = class _ZodNumber extends ZodType {
  constructor() {
    super(...arguments);
    this.min = this.gte;
    this.max = this.lte;
    this.step = this.multipleOf;
  }
  _parse(input) {
    if (this._def.coerce) {
      input.data = Number(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.number) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.number,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    let ctx = void 0;
    const status = new ParseStatus();
    for (const check of this._def.checks) {
      if (check.kind === "int") {
        if (!util.isInteger(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_type,
            expected: "integer",
            received: "float",
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "min") {
        const tooSmall = check.inclusive ? input.data < check.value : input.data <= check.value;
        if (tooSmall) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            minimum: check.value,
            type: "number",
            inclusive: check.inclusive,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        const tooBig = check.inclusive ? input.data > check.value : input.data >= check.value;
        if (tooBig) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            maximum: check.value,
            type: "number",
            inclusive: check.inclusive,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "multipleOf") {
        if (floatSafeRemainder(input.data, check.value) !== 0) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.not_multiple_of,
            multipleOf: check.value,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "finite") {
        if (!Number.isFinite(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.not_finite,
            message: check.message
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return { status: status.value, value: input.data };
  }
  gte(value, message) {
    return this.setLimit("min", value, true, errorUtil.toString(message));
  }
  gt(value, message) {
    return this.setLimit("min", value, false, errorUtil.toString(message));
  }
  lte(value, message) {
    return this.setLimit("max", value, true, errorUtil.toString(message));
  }
  lt(value, message) {
    return this.setLimit("max", value, false, errorUtil.toString(message));
  }
  setLimit(kind, value, inclusive, message) {
    return new _ZodNumber({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind,
          value,
          inclusive,
          message: errorUtil.toString(message)
        }
      ]
    });
  }
  _addCheck(check) {
    return new _ZodNumber({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  int(message) {
    return this._addCheck({
      kind: "int",
      message: errorUtil.toString(message)
    });
  }
  positive(message) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  negative(message) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  nonpositive(message) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  nonnegative(message) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  multipleOf(value, message) {
    return this._addCheck({
      kind: "multipleOf",
      value,
      message: errorUtil.toString(message)
    });
  }
  finite(message) {
    return this._addCheck({
      kind: "finite",
      message: errorUtil.toString(message)
    });
  }
  safe(message) {
    return this._addCheck({
      kind: "min",
      inclusive: true,
      value: Number.MIN_SAFE_INTEGER,
      message: errorUtil.toString(message)
    })._addCheck({
      kind: "max",
      inclusive: true,
      value: Number.MAX_SAFE_INTEGER,
      message: errorUtil.toString(message)
    });
  }
  get minValue() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min;
  }
  get maxValue() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max;
  }
  get isInt() {
    return !!this._def.checks.find((ch) => ch.kind === "int" || ch.kind === "multipleOf" && util.isInteger(ch.value));
  }
  get isFinite() {
    let max = null, min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "finite" || ch.kind === "int" || ch.kind === "multipleOf") {
        return true;
      } else if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      } else if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return Number.isFinite(min) && Number.isFinite(max);
  }
};
ZodNumber.create = (params) => {
  return new ZodNumber({
    checks: [],
    typeName: ZodFirstPartyTypeKind.ZodNumber,
    coerce: (params === null || params === void 0 ? void 0 : params.coerce) || false,
    ...processCreateParams(params)
  });
};
var ZodBigInt = class _ZodBigInt extends ZodType {
  constructor() {
    super(...arguments);
    this.min = this.gte;
    this.max = this.lte;
  }
  _parse(input) {
    if (this._def.coerce) {
      try {
        input.data = BigInt(input.data);
      } catch (_a2) {
        return this._getInvalidInput(input);
      }
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.bigint) {
      return this._getInvalidInput(input);
    }
    let ctx = void 0;
    const status = new ParseStatus();
    for (const check of this._def.checks) {
      if (check.kind === "min") {
        const tooSmall = check.inclusive ? input.data < check.value : input.data <= check.value;
        if (tooSmall) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            type: "bigint",
            minimum: check.value,
            inclusive: check.inclusive,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        const tooBig = check.inclusive ? input.data > check.value : input.data >= check.value;
        if (tooBig) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            type: "bigint",
            maximum: check.value,
            inclusive: check.inclusive,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "multipleOf") {
        if (input.data % check.value !== BigInt(0)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.not_multiple_of,
            multipleOf: check.value,
            message: check.message
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return { status: status.value, value: input.data };
  }
  _getInvalidInput(input) {
    const ctx = this._getOrReturnCtx(input);
    addIssueToContext(ctx, {
      code: ZodIssueCode.invalid_type,
      expected: ZodParsedType.bigint,
      received: ctx.parsedType
    });
    return INVALID;
  }
  gte(value, message) {
    return this.setLimit("min", value, true, errorUtil.toString(message));
  }
  gt(value, message) {
    return this.setLimit("min", value, false, errorUtil.toString(message));
  }
  lte(value, message) {
    return this.setLimit("max", value, true, errorUtil.toString(message));
  }
  lt(value, message) {
    return this.setLimit("max", value, false, errorUtil.toString(message));
  }
  setLimit(kind, value, inclusive, message) {
    return new _ZodBigInt({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind,
          value,
          inclusive,
          message: errorUtil.toString(message)
        }
      ]
    });
  }
  _addCheck(check) {
    return new _ZodBigInt({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  positive(message) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  negative(message) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  nonpositive(message) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  nonnegative(message) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  multipleOf(value, message) {
    return this._addCheck({
      kind: "multipleOf",
      value,
      message: errorUtil.toString(message)
    });
  }
  get minValue() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min;
  }
  get maxValue() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max;
  }
};
ZodBigInt.create = (params) => {
  var _a2;
  return new ZodBigInt({
    checks: [],
    typeName: ZodFirstPartyTypeKind.ZodBigInt,
    coerce: (_a2 = params === null || params === void 0 ? void 0 : params.coerce) !== null && _a2 !== void 0 ? _a2 : false,
    ...processCreateParams(params)
  });
};
var ZodBoolean = class extends ZodType {
  _parse(input) {
    if (this._def.coerce) {
      input.data = Boolean(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.boolean) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.boolean,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
};
ZodBoolean.create = (params) => {
  return new ZodBoolean({
    typeName: ZodFirstPartyTypeKind.ZodBoolean,
    coerce: (params === null || params === void 0 ? void 0 : params.coerce) || false,
    ...processCreateParams(params)
  });
};
var ZodDate = class _ZodDate extends ZodType {
  _parse(input) {
    if (this._def.coerce) {
      input.data = new Date(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.date) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.date,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    if (isNaN(input.data.getTime())) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_date
      });
      return INVALID;
    }
    const status = new ParseStatus();
    let ctx = void 0;
    for (const check of this._def.checks) {
      if (check.kind === "min") {
        if (input.data.getTime() < check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            message: check.message,
            inclusive: true,
            exact: false,
            minimum: check.value,
            type: "date"
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        if (input.data.getTime() > check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            message: check.message,
            inclusive: true,
            exact: false,
            maximum: check.value,
            type: "date"
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return {
      status: status.value,
      value: new Date(input.data.getTime())
    };
  }
  _addCheck(check) {
    return new _ZodDate({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  min(minDate, message) {
    return this._addCheck({
      kind: "min",
      value: minDate.getTime(),
      message: errorUtil.toString(message)
    });
  }
  max(maxDate, message) {
    return this._addCheck({
      kind: "max",
      value: maxDate.getTime(),
      message: errorUtil.toString(message)
    });
  }
  get minDate() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min != null ? new Date(min) : null;
  }
  get maxDate() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max != null ? new Date(max) : null;
  }
};
ZodDate.create = (params) => {
  return new ZodDate({
    checks: [],
    coerce: (params === null || params === void 0 ? void 0 : params.coerce) || false,
    typeName: ZodFirstPartyTypeKind.ZodDate,
    ...processCreateParams(params)
  });
};
var ZodSymbol = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.symbol) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.symbol,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
};
ZodSymbol.create = (params) => {
  return new ZodSymbol({
    typeName: ZodFirstPartyTypeKind.ZodSymbol,
    ...processCreateParams(params)
  });
};
var ZodUndefined = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.undefined) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.undefined,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
};
ZodUndefined.create = (params) => {
  return new ZodUndefined({
    typeName: ZodFirstPartyTypeKind.ZodUndefined,
    ...processCreateParams(params)
  });
};
var ZodNull = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.null) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.null,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
};
ZodNull.create = (params) => {
  return new ZodNull({
    typeName: ZodFirstPartyTypeKind.ZodNull,
    ...processCreateParams(params)
  });
};
var ZodAny = class extends ZodType {
  constructor() {
    super(...arguments);
    this._any = true;
  }
  _parse(input) {
    return OK(input.data);
  }
};
ZodAny.create = (params) => {
  return new ZodAny({
    typeName: ZodFirstPartyTypeKind.ZodAny,
    ...processCreateParams(params)
  });
};
var ZodUnknown = class extends ZodType {
  constructor() {
    super(...arguments);
    this._unknown = true;
  }
  _parse(input) {
    return OK(input.data);
  }
};
ZodUnknown.create = (params) => {
  return new ZodUnknown({
    typeName: ZodFirstPartyTypeKind.ZodUnknown,
    ...processCreateParams(params)
  });
};
var ZodNever = class extends ZodType {
  _parse(input) {
    const ctx = this._getOrReturnCtx(input);
    addIssueToContext(ctx, {
      code: ZodIssueCode.invalid_type,
      expected: ZodParsedType.never,
      received: ctx.parsedType
    });
    return INVALID;
  }
};
ZodNever.create = (params) => {
  return new ZodNever({
    typeName: ZodFirstPartyTypeKind.ZodNever,
    ...processCreateParams(params)
  });
};
var ZodVoid = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.undefined) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.void,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
};
ZodVoid.create = (params) => {
  return new ZodVoid({
    typeName: ZodFirstPartyTypeKind.ZodVoid,
    ...processCreateParams(params)
  });
};
var ZodArray = class _ZodArray extends ZodType {
  _parse(input) {
    const { ctx, status } = this._processInputParams(input);
    const def = this._def;
    if (ctx.parsedType !== ZodParsedType.array) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.array,
        received: ctx.parsedType
      });
      return INVALID;
    }
    if (def.exactLength !== null) {
      const tooBig = ctx.data.length > def.exactLength.value;
      const tooSmall = ctx.data.length < def.exactLength.value;
      if (tooBig || tooSmall) {
        addIssueToContext(ctx, {
          code: tooBig ? ZodIssueCode.too_big : ZodIssueCode.too_small,
          minimum: tooSmall ? def.exactLength.value : void 0,
          maximum: tooBig ? def.exactLength.value : void 0,
          type: "array",
          inclusive: true,
          exact: true,
          message: def.exactLength.message
        });
        status.dirty();
      }
    }
    if (def.minLength !== null) {
      if (ctx.data.length < def.minLength.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_small,
          minimum: def.minLength.value,
          type: "array",
          inclusive: true,
          exact: false,
          message: def.minLength.message
        });
        status.dirty();
      }
    }
    if (def.maxLength !== null) {
      if (ctx.data.length > def.maxLength.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_big,
          maximum: def.maxLength.value,
          type: "array",
          inclusive: true,
          exact: false,
          message: def.maxLength.message
        });
        status.dirty();
      }
    }
    if (ctx.common.async) {
      return Promise.all([...ctx.data].map((item, i) => {
        return def.type._parseAsync(new ParseInputLazyPath(ctx, item, ctx.path, i));
      })).then((result2) => {
        return ParseStatus.mergeArray(status, result2);
      });
    }
    const result = [...ctx.data].map((item, i) => {
      return def.type._parseSync(new ParseInputLazyPath(ctx, item, ctx.path, i));
    });
    return ParseStatus.mergeArray(status, result);
  }
  get element() {
    return this._def.type;
  }
  min(minLength, message) {
    return new _ZodArray({
      ...this._def,
      minLength: { value: minLength, message: errorUtil.toString(message) }
    });
  }
  max(maxLength, message) {
    return new _ZodArray({
      ...this._def,
      maxLength: { value: maxLength, message: errorUtil.toString(message) }
    });
  }
  length(len, message) {
    return new _ZodArray({
      ...this._def,
      exactLength: { value: len, message: errorUtil.toString(message) }
    });
  }
  nonempty(message) {
    return this.min(1, message);
  }
};
ZodArray.create = (schema, params) => {
  return new ZodArray({
    type: schema,
    minLength: null,
    maxLength: null,
    exactLength: null,
    typeName: ZodFirstPartyTypeKind.ZodArray,
    ...processCreateParams(params)
  });
};
function deepPartialify(schema) {
  if (schema instanceof ZodObject) {
    const newShape = {};
    for (const key in schema.shape) {
      const fieldSchema = schema.shape[key];
      newShape[key] = ZodOptional.create(deepPartialify(fieldSchema));
    }
    return new ZodObject({
      ...schema._def,
      shape: () => newShape
    });
  } else if (schema instanceof ZodArray) {
    return new ZodArray({
      ...schema._def,
      type: deepPartialify(schema.element)
    });
  } else if (schema instanceof ZodOptional) {
    return ZodOptional.create(deepPartialify(schema.unwrap()));
  } else if (schema instanceof ZodNullable) {
    return ZodNullable.create(deepPartialify(schema.unwrap()));
  } else if (schema instanceof ZodTuple) {
    return ZodTuple.create(schema.items.map((item) => deepPartialify(item)));
  } else {
    return schema;
  }
}
var ZodObject = class _ZodObject extends ZodType {
  constructor() {
    super(...arguments);
    this._cached = null;
    this.nonstrict = this.passthrough;
    this.augment = this.extend;
  }
  _getCached() {
    if (this._cached !== null)
      return this._cached;
    const shape = this._def.shape();
    const keys = util.objectKeys(shape);
    return this._cached = { shape, keys };
  }
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.object) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.object,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    const { status, ctx } = this._processInputParams(input);
    const { shape, keys: shapeKeys } = this._getCached();
    const extraKeys = [];
    if (!(this._def.catchall instanceof ZodNever && this._def.unknownKeys === "strip")) {
      for (const key in ctx.data) {
        if (!shapeKeys.includes(key)) {
          extraKeys.push(key);
        }
      }
    }
    const pairs = [];
    for (const key of shapeKeys) {
      const keyValidator = shape[key];
      const value = ctx.data[key];
      pairs.push({
        key: { status: "valid", value: key },
        value: keyValidator._parse(new ParseInputLazyPath(ctx, value, ctx.path, key)),
        alwaysSet: key in ctx.data
      });
    }
    if (this._def.catchall instanceof ZodNever) {
      const unknownKeys = this._def.unknownKeys;
      if (unknownKeys === "passthrough") {
        for (const key of extraKeys) {
          pairs.push({
            key: { status: "valid", value: key },
            value: { status: "valid", value: ctx.data[key] }
          });
        }
      } else if (unknownKeys === "strict") {
        if (extraKeys.length > 0) {
          addIssueToContext(ctx, {
            code: ZodIssueCode.unrecognized_keys,
            keys: extraKeys
          });
          status.dirty();
        }
      } else if (unknownKeys === "strip") ;
      else {
        throw new Error(`Internal ZodObject error: invalid unknownKeys value.`);
      }
    } else {
      const catchall = this._def.catchall;
      for (const key of extraKeys) {
        const value = ctx.data[key];
        pairs.push({
          key: { status: "valid", value: key },
          value: catchall._parse(
            new ParseInputLazyPath(ctx, value, ctx.path, key)
            //, ctx.child(key), value, getParsedType(value)
          ),
          alwaysSet: key in ctx.data
        });
      }
    }
    if (ctx.common.async) {
      return Promise.resolve().then(async () => {
        const syncPairs = [];
        for (const pair of pairs) {
          const key = await pair.key;
          const value = await pair.value;
          syncPairs.push({
            key,
            value,
            alwaysSet: pair.alwaysSet
          });
        }
        return syncPairs;
      }).then((syncPairs) => {
        return ParseStatus.mergeObjectSync(status, syncPairs);
      });
    } else {
      return ParseStatus.mergeObjectSync(status, pairs);
    }
  }
  get shape() {
    return this._def.shape();
  }
  strict(message) {
    errorUtil.errToObj;
    return new _ZodObject({
      ...this._def,
      unknownKeys: "strict",
      ...message !== void 0 ? {
        errorMap: (issue, ctx) => {
          var _a2, _b, _c, _d;
          const defaultError = (_c = (_b = (_a2 = this._def).errorMap) === null || _b === void 0 ? void 0 : _b.call(_a2, issue, ctx).message) !== null && _c !== void 0 ? _c : ctx.defaultError;
          if (issue.code === "unrecognized_keys")
            return {
              message: (_d = errorUtil.errToObj(message).message) !== null && _d !== void 0 ? _d : defaultError
            };
          return {
            message: defaultError
          };
        }
      } : {}
    });
  }
  strip() {
    return new _ZodObject({
      ...this._def,
      unknownKeys: "strip"
    });
  }
  passthrough() {
    return new _ZodObject({
      ...this._def,
      unknownKeys: "passthrough"
    });
  }
  // const AugmentFactory =
  //   <Def extends ZodObjectDef>(def: Def) =>
  //   <Augmentation extends ZodRawShape>(
  //     augmentation: Augmentation
  //   ): ZodObject<
  //     extendShape<ReturnType<Def["shape"]>, Augmentation>,
  //     Def["unknownKeys"],
  //     Def["catchall"]
  //   > => {
  //     return new ZodObject({
  //       ...def,
  //       shape: () => ({
  //         ...def.shape(),
  //         ...augmentation,
  //       }),
  //     }) as any;
  //   };
  extend(augmentation) {
    return new _ZodObject({
      ...this._def,
      shape: () => ({
        ...this._def.shape(),
        ...augmentation
      })
    });
  }
  /**
   * Prior to zod@1.0.12 there was a bug in the
   * inferred type of merged objects. Please
   * upgrade if you are experiencing issues.
   */
  merge(merging) {
    const merged = new _ZodObject({
      unknownKeys: merging._def.unknownKeys,
      catchall: merging._def.catchall,
      shape: () => ({
        ...this._def.shape(),
        ...merging._def.shape()
      }),
      typeName: ZodFirstPartyTypeKind.ZodObject
    });
    return merged;
  }
  // merge<
  //   Incoming extends AnyZodObject,
  //   Augmentation extends Incoming["shape"],
  //   NewOutput extends {
  //     [k in keyof Augmentation | keyof Output]: k extends keyof Augmentation
  //       ? Augmentation[k]["_output"]
  //       : k extends keyof Output
  //       ? Output[k]
  //       : never;
  //   },
  //   NewInput extends {
  //     [k in keyof Augmentation | keyof Input]: k extends keyof Augmentation
  //       ? Augmentation[k]["_input"]
  //       : k extends keyof Input
  //       ? Input[k]
  //       : never;
  //   }
  // >(
  //   merging: Incoming
  // ): ZodObject<
  //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
  //   Incoming["_def"]["unknownKeys"],
  //   Incoming["_def"]["catchall"],
  //   NewOutput,
  //   NewInput
  // > {
  //   const merged: any = new ZodObject({
  //     unknownKeys: merging._def.unknownKeys,
  //     catchall: merging._def.catchall,
  //     shape: () =>
  //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
  //     typeName: ZodFirstPartyTypeKind.ZodObject,
  //   }) as any;
  //   return merged;
  // }
  setKey(key, schema) {
    return this.augment({ [key]: schema });
  }
  // merge<Incoming extends AnyZodObject>(
  //   merging: Incoming
  // ): //ZodObject<T & Incoming["_shape"], UnknownKeys, Catchall> = (merging) => {
  // ZodObject<
  //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
  //   Incoming["_def"]["unknownKeys"],
  //   Incoming["_def"]["catchall"]
  // > {
  //   // const mergedShape = objectUtil.mergeShapes(
  //   //   this._def.shape(),
  //   //   merging._def.shape()
  //   // );
  //   const merged: any = new ZodObject({
  //     unknownKeys: merging._def.unknownKeys,
  //     catchall: merging._def.catchall,
  //     shape: () =>
  //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
  //     typeName: ZodFirstPartyTypeKind.ZodObject,
  //   }) as any;
  //   return merged;
  // }
  catchall(index) {
    return new _ZodObject({
      ...this._def,
      catchall: index
    });
  }
  pick(mask) {
    const shape = {};
    util.objectKeys(mask).forEach((key) => {
      if (mask[key] && this.shape[key]) {
        shape[key] = this.shape[key];
      }
    });
    return new _ZodObject({
      ...this._def,
      shape: () => shape
    });
  }
  omit(mask) {
    const shape = {};
    util.objectKeys(this.shape).forEach((key) => {
      if (!mask[key]) {
        shape[key] = this.shape[key];
      }
    });
    return new _ZodObject({
      ...this._def,
      shape: () => shape
    });
  }
  /**
   * @deprecated
   */
  deepPartial() {
    return deepPartialify(this);
  }
  partial(mask) {
    const newShape = {};
    util.objectKeys(this.shape).forEach((key) => {
      const fieldSchema = this.shape[key];
      if (mask && !mask[key]) {
        newShape[key] = fieldSchema;
      } else {
        newShape[key] = fieldSchema.optional();
      }
    });
    return new _ZodObject({
      ...this._def,
      shape: () => newShape
    });
  }
  required(mask) {
    const newShape = {};
    util.objectKeys(this.shape).forEach((key) => {
      if (mask && !mask[key]) {
        newShape[key] = this.shape[key];
      } else {
        const fieldSchema = this.shape[key];
        let newField = fieldSchema;
        while (newField instanceof ZodOptional) {
          newField = newField._def.innerType;
        }
        newShape[key] = newField;
      }
    });
    return new _ZodObject({
      ...this._def,
      shape: () => newShape
    });
  }
  keyof() {
    return createZodEnum(util.objectKeys(this.shape));
  }
};
ZodObject.create = (shape, params) => {
  return new ZodObject({
    shape: () => shape,
    unknownKeys: "strip",
    catchall: ZodNever.create(),
    typeName: ZodFirstPartyTypeKind.ZodObject,
    ...processCreateParams(params)
  });
};
ZodObject.strictCreate = (shape, params) => {
  return new ZodObject({
    shape: () => shape,
    unknownKeys: "strict",
    catchall: ZodNever.create(),
    typeName: ZodFirstPartyTypeKind.ZodObject,
    ...processCreateParams(params)
  });
};
ZodObject.lazycreate = (shape, params) => {
  return new ZodObject({
    shape,
    unknownKeys: "strip",
    catchall: ZodNever.create(),
    typeName: ZodFirstPartyTypeKind.ZodObject,
    ...processCreateParams(params)
  });
};
var ZodUnion = class extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    const options = this._def.options;
    function handleResults(results) {
      for (const result of results) {
        if (result.result.status === "valid") {
          return result.result;
        }
      }
      for (const result of results) {
        if (result.result.status === "dirty") {
          ctx.common.issues.push(...result.ctx.common.issues);
          return result.result;
        }
      }
      const unionErrors = results.map((result) => new ZodError(result.ctx.common.issues));
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_union,
        unionErrors
      });
      return INVALID;
    }
    if (ctx.common.async) {
      return Promise.all(options.map(async (option) => {
        const childCtx = {
          ...ctx,
          common: {
            ...ctx.common,
            issues: []
          },
          parent: null
        };
        return {
          result: await option._parseAsync({
            data: ctx.data,
            path: ctx.path,
            parent: childCtx
          }),
          ctx: childCtx
        };
      })).then(handleResults);
    } else {
      let dirty = void 0;
      const issues = [];
      for (const option of options) {
        const childCtx = {
          ...ctx,
          common: {
            ...ctx.common,
            issues: []
          },
          parent: null
        };
        const result = option._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: childCtx
        });
        if (result.status === "valid") {
          return result;
        } else if (result.status === "dirty" && !dirty) {
          dirty = { result, ctx: childCtx };
        }
        if (childCtx.common.issues.length) {
          issues.push(childCtx.common.issues);
        }
      }
      if (dirty) {
        ctx.common.issues.push(...dirty.ctx.common.issues);
        return dirty.result;
      }
      const unionErrors = issues.map((issues2) => new ZodError(issues2));
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_union,
        unionErrors
      });
      return INVALID;
    }
  }
  get options() {
    return this._def.options;
  }
};
ZodUnion.create = (types, params) => {
  return new ZodUnion({
    options: types,
    typeName: ZodFirstPartyTypeKind.ZodUnion,
    ...processCreateParams(params)
  });
};
var getDiscriminator = (type) => {
  if (type instanceof ZodLazy) {
    return getDiscriminator(type.schema);
  } else if (type instanceof ZodEffects) {
    return getDiscriminator(type.innerType());
  } else if (type instanceof ZodLiteral) {
    return [type.value];
  } else if (type instanceof ZodEnum) {
    return type.options;
  } else if (type instanceof ZodNativeEnum) {
    return util.objectValues(type.enum);
  } else if (type instanceof ZodDefault) {
    return getDiscriminator(type._def.innerType);
  } else if (type instanceof ZodUndefined) {
    return [void 0];
  } else if (type instanceof ZodNull) {
    return [null];
  } else if (type instanceof ZodOptional) {
    return [void 0, ...getDiscriminator(type.unwrap())];
  } else if (type instanceof ZodNullable) {
    return [null, ...getDiscriminator(type.unwrap())];
  } else if (type instanceof ZodBranded) {
    return getDiscriminator(type.unwrap());
  } else if (type instanceof ZodReadonly) {
    return getDiscriminator(type.unwrap());
  } else if (type instanceof ZodCatch) {
    return getDiscriminator(type._def.innerType);
  } else {
    return [];
  }
};
var ZodDiscriminatedUnion = class _ZodDiscriminatedUnion extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.object) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.object,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const discriminator = this.discriminator;
    const discriminatorValue = ctx.data[discriminator];
    const option = this.optionsMap.get(discriminatorValue);
    if (!option) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_union_discriminator,
        options: Array.from(this.optionsMap.keys()),
        path: [discriminator]
      });
      return INVALID;
    }
    if (ctx.common.async) {
      return option._parseAsync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      });
    } else {
      return option._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      });
    }
  }
  get discriminator() {
    return this._def.discriminator;
  }
  get options() {
    return this._def.options;
  }
  get optionsMap() {
    return this._def.optionsMap;
  }
  /**
   * The constructor of the discriminated union schema. Its behaviour is very similar to that of the normal z.union() constructor.
   * However, it only allows a union of objects, all of which need to share a discriminator property. This property must
   * have a different value for each object in the union.
   * @param discriminator the name of the discriminator property
   * @param types an array of object schemas
   * @param params
   */
  static create(discriminator, options, params) {
    const optionsMap = /* @__PURE__ */ new Map();
    for (const type of options) {
      const discriminatorValues = getDiscriminator(type.shape[discriminator]);
      if (!discriminatorValues.length) {
        throw new Error(`A discriminator value for key \`${discriminator}\` could not be extracted from all schema options`);
      }
      for (const value of discriminatorValues) {
        if (optionsMap.has(value)) {
          throw new Error(`Discriminator property ${String(discriminator)} has duplicate value ${String(value)}`);
        }
        optionsMap.set(value, type);
      }
    }
    return new _ZodDiscriminatedUnion({
      typeName: ZodFirstPartyTypeKind.ZodDiscriminatedUnion,
      discriminator,
      options,
      optionsMap,
      ...processCreateParams(params)
    });
  }
};
function mergeValues(a16, b) {
  const aType = getParsedType(a16);
  const bType = getParsedType(b);
  if (a16 === b) {
    return { valid: true, data: a16 };
  } else if (aType === ZodParsedType.object && bType === ZodParsedType.object) {
    const bKeys = util.objectKeys(b);
    const sharedKeys = util.objectKeys(a16).filter((key) => bKeys.indexOf(key) !== -1);
    const newObj = { ...a16, ...b };
    for (const key of sharedKeys) {
      const sharedValue = mergeValues(a16[key], b[key]);
      if (!sharedValue.valid) {
        return { valid: false };
      }
      newObj[key] = sharedValue.data;
    }
    return { valid: true, data: newObj };
  } else if (aType === ZodParsedType.array && bType === ZodParsedType.array) {
    if (a16.length !== b.length) {
      return { valid: false };
    }
    const newArray = [];
    for (let index = 0; index < a16.length; index++) {
      const itemA = a16[index];
      const itemB = b[index];
      const sharedValue = mergeValues(itemA, itemB);
      if (!sharedValue.valid) {
        return { valid: false };
      }
      newArray.push(sharedValue.data);
    }
    return { valid: true, data: newArray };
  } else if (aType === ZodParsedType.date && bType === ZodParsedType.date && +a16 === +b) {
    return { valid: true, data: a16 };
  } else {
    return { valid: false };
  }
}
var ZodIntersection = class extends ZodType {
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    const handleParsed = (parsedLeft, parsedRight) => {
      if (isAborted(parsedLeft) || isAborted(parsedRight)) {
        return INVALID;
      }
      const merged = mergeValues(parsedLeft.value, parsedRight.value);
      if (!merged.valid) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_intersection_types
        });
        return INVALID;
      }
      if (isDirty(parsedLeft) || isDirty(parsedRight)) {
        status.dirty();
      }
      return { status: status.value, value: merged.data };
    };
    if (ctx.common.async) {
      return Promise.all([
        this._def.left._parseAsync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        }),
        this._def.right._parseAsync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        })
      ]).then(([left, right]) => handleParsed(left, right));
    } else {
      return handleParsed(this._def.left._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      }), this._def.right._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      }));
    }
  }
};
ZodIntersection.create = (left, right, params) => {
  return new ZodIntersection({
    left,
    right,
    typeName: ZodFirstPartyTypeKind.ZodIntersection,
    ...processCreateParams(params)
  });
};
var ZodTuple = class _ZodTuple extends ZodType {
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.array) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.array,
        received: ctx.parsedType
      });
      return INVALID;
    }
    if (ctx.data.length < this._def.items.length) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.too_small,
        minimum: this._def.items.length,
        inclusive: true,
        exact: false,
        type: "array"
      });
      return INVALID;
    }
    const rest = this._def.rest;
    if (!rest && ctx.data.length > this._def.items.length) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.too_big,
        maximum: this._def.items.length,
        inclusive: true,
        exact: false,
        type: "array"
      });
      status.dirty();
    }
    const items = [...ctx.data].map((item, itemIndex) => {
      const schema = this._def.items[itemIndex] || this._def.rest;
      if (!schema)
        return null;
      return schema._parse(new ParseInputLazyPath(ctx, item, ctx.path, itemIndex));
    }).filter((x) => !!x);
    if (ctx.common.async) {
      return Promise.all(items).then((results) => {
        return ParseStatus.mergeArray(status, results);
      });
    } else {
      return ParseStatus.mergeArray(status, items);
    }
  }
  get items() {
    return this._def.items;
  }
  rest(rest) {
    return new _ZodTuple({
      ...this._def,
      rest
    });
  }
};
ZodTuple.create = (schemas, params) => {
  if (!Array.isArray(schemas)) {
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  }
  return new ZodTuple({
    items: schemas,
    typeName: ZodFirstPartyTypeKind.ZodTuple,
    rest: null,
    ...processCreateParams(params)
  });
};
var ZodRecord = class _ZodRecord extends ZodType {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.object) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.object,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const pairs = [];
    const keyType = this._def.keyType;
    const valueType = this._def.valueType;
    for (const key in ctx.data) {
      pairs.push({
        key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, key)),
        value: valueType._parse(new ParseInputLazyPath(ctx, ctx.data[key], ctx.path, key)),
        alwaysSet: key in ctx.data
      });
    }
    if (ctx.common.async) {
      return ParseStatus.mergeObjectAsync(status, pairs);
    } else {
      return ParseStatus.mergeObjectSync(status, pairs);
    }
  }
  get element() {
    return this._def.valueType;
  }
  static create(first, second, third) {
    if (second instanceof ZodType) {
      return new _ZodRecord({
        keyType: first,
        valueType: second,
        typeName: ZodFirstPartyTypeKind.ZodRecord,
        ...processCreateParams(third)
      });
    }
    return new _ZodRecord({
      keyType: ZodString.create(),
      valueType: first,
      typeName: ZodFirstPartyTypeKind.ZodRecord,
      ...processCreateParams(second)
    });
  }
};
var ZodMap = class extends ZodType {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.map) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.map,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const keyType = this._def.keyType;
    const valueType = this._def.valueType;
    const pairs = [...ctx.data.entries()].map(([key, value], index) => {
      return {
        key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, [index, "key"])),
        value: valueType._parse(new ParseInputLazyPath(ctx, value, ctx.path, [index, "value"]))
      };
    });
    if (ctx.common.async) {
      const finalMap = /* @__PURE__ */ new Map();
      return Promise.resolve().then(async () => {
        for (const pair of pairs) {
          const key = await pair.key;
          const value = await pair.value;
          if (key.status === "aborted" || value.status === "aborted") {
            return INVALID;
          }
          if (key.status === "dirty" || value.status === "dirty") {
            status.dirty();
          }
          finalMap.set(key.value, value.value);
        }
        return { status: status.value, value: finalMap };
      });
    } else {
      const finalMap = /* @__PURE__ */ new Map();
      for (const pair of pairs) {
        const key = pair.key;
        const value = pair.value;
        if (key.status === "aborted" || value.status === "aborted") {
          return INVALID;
        }
        if (key.status === "dirty" || value.status === "dirty") {
          status.dirty();
        }
        finalMap.set(key.value, value.value);
      }
      return { status: status.value, value: finalMap };
    }
  }
};
ZodMap.create = (keyType, valueType, params) => {
  return new ZodMap({
    valueType,
    keyType,
    typeName: ZodFirstPartyTypeKind.ZodMap,
    ...processCreateParams(params)
  });
};
var ZodSet = class _ZodSet extends ZodType {
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.set) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.set,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const def = this._def;
    if (def.minSize !== null) {
      if (ctx.data.size < def.minSize.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_small,
          minimum: def.minSize.value,
          type: "set",
          inclusive: true,
          exact: false,
          message: def.minSize.message
        });
        status.dirty();
      }
    }
    if (def.maxSize !== null) {
      if (ctx.data.size > def.maxSize.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_big,
          maximum: def.maxSize.value,
          type: "set",
          inclusive: true,
          exact: false,
          message: def.maxSize.message
        });
        status.dirty();
      }
    }
    const valueType = this._def.valueType;
    function finalizeSet(elements2) {
      const parsedSet = /* @__PURE__ */ new Set();
      for (const element of elements2) {
        if (element.status === "aborted")
          return INVALID;
        if (element.status === "dirty")
          status.dirty();
        parsedSet.add(element.value);
      }
      return { status: status.value, value: parsedSet };
    }
    const elements = [...ctx.data.values()].map((item, i) => valueType._parse(new ParseInputLazyPath(ctx, item, ctx.path, i)));
    if (ctx.common.async) {
      return Promise.all(elements).then((elements2) => finalizeSet(elements2));
    } else {
      return finalizeSet(elements);
    }
  }
  min(minSize, message) {
    return new _ZodSet({
      ...this._def,
      minSize: { value: minSize, message: errorUtil.toString(message) }
    });
  }
  max(maxSize, message) {
    return new _ZodSet({
      ...this._def,
      maxSize: { value: maxSize, message: errorUtil.toString(message) }
    });
  }
  size(size, message) {
    return this.min(size, message).max(size, message);
  }
  nonempty(message) {
    return this.min(1, message);
  }
};
ZodSet.create = (valueType, params) => {
  return new ZodSet({
    valueType,
    minSize: null,
    maxSize: null,
    typeName: ZodFirstPartyTypeKind.ZodSet,
    ...processCreateParams(params)
  });
};
var ZodFunction = class _ZodFunction extends ZodType {
  constructor() {
    super(...arguments);
    this.validate = this.implement;
  }
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.function) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.function,
        received: ctx.parsedType
      });
      return INVALID;
    }
    function makeArgsIssue(args, error) {
      return makeIssue({
        data: args,
        path: ctx.path,
        errorMaps: [
          ctx.common.contextualErrorMap,
          ctx.schemaErrorMap,
          getErrorMap(),
          errorMap
        ].filter((x) => !!x),
        issueData: {
          code: ZodIssueCode.invalid_arguments,
          argumentsError: error
        }
      });
    }
    function makeReturnsIssue(returns, error) {
      return makeIssue({
        data: returns,
        path: ctx.path,
        errorMaps: [
          ctx.common.contextualErrorMap,
          ctx.schemaErrorMap,
          getErrorMap(),
          errorMap
        ].filter((x) => !!x),
        issueData: {
          code: ZodIssueCode.invalid_return_type,
          returnTypeError: error
        }
      });
    }
    const params = { errorMap: ctx.common.contextualErrorMap };
    const fn = ctx.data;
    if (this._def.returns instanceof ZodPromise) {
      const me = this;
      return OK(async function(...args) {
        const error = new ZodError([]);
        const parsedArgs = await me._def.args.parseAsync(args, params).catch((e) => {
          error.addIssue(makeArgsIssue(args, e));
          throw error;
        });
        const result = await Reflect.apply(fn, this, parsedArgs);
        const parsedReturns = await me._def.returns._def.type.parseAsync(result, params).catch((e) => {
          error.addIssue(makeReturnsIssue(result, e));
          throw error;
        });
        return parsedReturns;
      });
    } else {
      const me = this;
      return OK(function(...args) {
        const parsedArgs = me._def.args.safeParse(args, params);
        if (!parsedArgs.success) {
          throw new ZodError([makeArgsIssue(args, parsedArgs.error)]);
        }
        const result = Reflect.apply(fn, this, parsedArgs.data);
        const parsedReturns = me._def.returns.safeParse(result, params);
        if (!parsedReturns.success) {
          throw new ZodError([makeReturnsIssue(result, parsedReturns.error)]);
        }
        return parsedReturns.data;
      });
    }
  }
  parameters() {
    return this._def.args;
  }
  returnType() {
    return this._def.returns;
  }
  args(...items) {
    return new _ZodFunction({
      ...this._def,
      args: ZodTuple.create(items).rest(ZodUnknown.create())
    });
  }
  returns(returnType) {
    return new _ZodFunction({
      ...this._def,
      returns: returnType
    });
  }
  implement(func) {
    const validatedFunc = this.parse(func);
    return validatedFunc;
  }
  strictImplement(func) {
    const validatedFunc = this.parse(func);
    return validatedFunc;
  }
  static create(args, returns, params) {
    return new _ZodFunction({
      args: args ? args : ZodTuple.create([]).rest(ZodUnknown.create()),
      returns: returns || ZodUnknown.create(),
      typeName: ZodFirstPartyTypeKind.ZodFunction,
      ...processCreateParams(params)
    });
  }
};
var ZodLazy = class extends ZodType {
  get schema() {
    return this._def.getter();
  }
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    const lazySchema = this._def.getter();
    return lazySchema._parse({ data: ctx.data, path: ctx.path, parent: ctx });
  }
};
ZodLazy.create = (getter, params) => {
  return new ZodLazy({
    getter,
    typeName: ZodFirstPartyTypeKind.ZodLazy,
    ...processCreateParams(params)
  });
};
var ZodLiteral = class extends ZodType {
  _parse(input) {
    if (input.data !== this._def.value) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        received: ctx.data,
        code: ZodIssueCode.invalid_literal,
        expected: this._def.value
      });
      return INVALID;
    }
    return { status: "valid", value: input.data };
  }
  get value() {
    return this._def.value;
  }
};
ZodLiteral.create = (value, params) => {
  return new ZodLiteral({
    value,
    typeName: ZodFirstPartyTypeKind.ZodLiteral,
    ...processCreateParams(params)
  });
};
function createZodEnum(values, params) {
  return new ZodEnum({
    values,
    typeName: ZodFirstPartyTypeKind.ZodEnum,
    ...processCreateParams(params)
  });
}
var ZodEnum = class _ZodEnum extends ZodType {
  constructor() {
    super(...arguments);
    _ZodEnum_cache.set(this, void 0);
  }
  _parse(input) {
    if (typeof input.data !== "string") {
      const ctx = this._getOrReturnCtx(input);
      const expectedValues = this._def.values;
      addIssueToContext(ctx, {
        expected: util.joinValues(expectedValues),
        received: ctx.parsedType,
        code: ZodIssueCode.invalid_type
      });
      return INVALID;
    }
    if (!__classPrivateFieldGet(this, _ZodEnum_cache, "f")) {
      __classPrivateFieldSet(this, _ZodEnum_cache, new Set(this._def.values), "f");
    }
    if (!__classPrivateFieldGet(this, _ZodEnum_cache, "f").has(input.data)) {
      const ctx = this._getOrReturnCtx(input);
      const expectedValues = this._def.values;
      addIssueToContext(ctx, {
        received: ctx.data,
        code: ZodIssueCode.invalid_enum_value,
        options: expectedValues
      });
      return INVALID;
    }
    return OK(input.data);
  }
  get options() {
    return this._def.values;
  }
  get enum() {
    const enumValues = {};
    for (const val of this._def.values) {
      enumValues[val] = val;
    }
    return enumValues;
  }
  get Values() {
    const enumValues = {};
    for (const val of this._def.values) {
      enumValues[val] = val;
    }
    return enumValues;
  }
  get Enum() {
    const enumValues = {};
    for (const val of this._def.values) {
      enumValues[val] = val;
    }
    return enumValues;
  }
  extract(values, newDef = this._def) {
    return _ZodEnum.create(values, {
      ...this._def,
      ...newDef
    });
  }
  exclude(values, newDef = this._def) {
    return _ZodEnum.create(this.options.filter((opt) => !values.includes(opt)), {
      ...this._def,
      ...newDef
    });
  }
};
_ZodEnum_cache = /* @__PURE__ */ new WeakMap();
ZodEnum.create = createZodEnum;
var ZodNativeEnum = class extends ZodType {
  constructor() {
    super(...arguments);
    _ZodNativeEnum_cache.set(this, void 0);
  }
  _parse(input) {
    const nativeEnumValues = util.getValidEnumValues(this._def.values);
    const ctx = this._getOrReturnCtx(input);
    if (ctx.parsedType !== ZodParsedType.string && ctx.parsedType !== ZodParsedType.number) {
      const expectedValues = util.objectValues(nativeEnumValues);
      addIssueToContext(ctx, {
        expected: util.joinValues(expectedValues),
        received: ctx.parsedType,
        code: ZodIssueCode.invalid_type
      });
      return INVALID;
    }
    if (!__classPrivateFieldGet(this, _ZodNativeEnum_cache, "f")) {
      __classPrivateFieldSet(this, _ZodNativeEnum_cache, new Set(util.getValidEnumValues(this._def.values)), "f");
    }
    if (!__classPrivateFieldGet(this, _ZodNativeEnum_cache, "f").has(input.data)) {
      const expectedValues = util.objectValues(nativeEnumValues);
      addIssueToContext(ctx, {
        received: ctx.data,
        code: ZodIssueCode.invalid_enum_value,
        options: expectedValues
      });
      return INVALID;
    }
    return OK(input.data);
  }
  get enum() {
    return this._def.values;
  }
};
_ZodNativeEnum_cache = /* @__PURE__ */ new WeakMap();
ZodNativeEnum.create = (values, params) => {
  return new ZodNativeEnum({
    values,
    typeName: ZodFirstPartyTypeKind.ZodNativeEnum,
    ...processCreateParams(params)
  });
};
var ZodPromise = class extends ZodType {
  unwrap() {
    return this._def.type;
  }
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.promise && ctx.common.async === false) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.promise,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const promisified = ctx.parsedType === ZodParsedType.promise ? ctx.data : Promise.resolve(ctx.data);
    return OK(promisified.then((data) => {
      return this._def.type.parseAsync(data, {
        path: ctx.path,
        errorMap: ctx.common.contextualErrorMap
      });
    }));
  }
};
ZodPromise.create = (schema, params) => {
  return new ZodPromise({
    type: schema,
    typeName: ZodFirstPartyTypeKind.ZodPromise,
    ...processCreateParams(params)
  });
};
var ZodEffects = class extends ZodType {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === ZodFirstPartyTypeKind.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
  }
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    const effect = this._def.effect || null;
    const checkCtx = {
      addIssue: (arg) => {
        addIssueToContext(ctx, arg);
        if (arg.fatal) {
          status.abort();
        } else {
          status.dirty();
        }
      },
      get path() {
        return ctx.path;
      }
    };
    checkCtx.addIssue = checkCtx.addIssue.bind(checkCtx);
    if (effect.type === "preprocess") {
      const processed = effect.transform(ctx.data, checkCtx);
      if (ctx.common.async) {
        return Promise.resolve(processed).then(async (processed2) => {
          if (status.value === "aborted")
            return INVALID;
          const result = await this._def.schema._parseAsync({
            data: processed2,
            path: ctx.path,
            parent: ctx
          });
          if (result.status === "aborted")
            return INVALID;
          if (result.status === "dirty")
            return DIRTY(result.value);
          if (status.value === "dirty")
            return DIRTY(result.value);
          return result;
        });
      } else {
        if (status.value === "aborted")
          return INVALID;
        const result = this._def.schema._parseSync({
          data: processed,
          path: ctx.path,
          parent: ctx
        });
        if (result.status === "aborted")
          return INVALID;
        if (result.status === "dirty")
          return DIRTY(result.value);
        if (status.value === "dirty")
          return DIRTY(result.value);
        return result;
      }
    }
    if (effect.type === "refinement") {
      const executeRefinement = (acc) => {
        const result = effect.refinement(acc, checkCtx);
        if (ctx.common.async) {
          return Promise.resolve(result);
        }
        if (result instanceof Promise) {
          throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
        }
        return acc;
      };
      if (ctx.common.async === false) {
        const inner = this._def.schema._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
        if (inner.status === "aborted")
          return INVALID;
        if (inner.status === "dirty")
          status.dirty();
        executeRefinement(inner.value);
        return { status: status.value, value: inner.value };
      } else {
        return this._def.schema._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx }).then((inner) => {
          if (inner.status === "aborted")
            return INVALID;
          if (inner.status === "dirty")
            status.dirty();
          return executeRefinement(inner.value).then(() => {
            return { status: status.value, value: inner.value };
          });
        });
      }
    }
    if (effect.type === "transform") {
      if (ctx.common.async === false) {
        const base = this._def.schema._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
        if (!isValid(base))
          return base;
        const result = effect.transform(base.value, checkCtx);
        if (result instanceof Promise) {
          throw new Error(`Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.`);
        }
        return { status: status.value, value: result };
      } else {
        return this._def.schema._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx }).then((base) => {
          if (!isValid(base))
            return base;
          return Promise.resolve(effect.transform(base.value, checkCtx)).then((result) => ({ status: status.value, value: result }));
        });
      }
    }
    util.assertNever(effect);
  }
};
ZodEffects.create = (schema, effect, params) => {
  return new ZodEffects({
    schema,
    typeName: ZodFirstPartyTypeKind.ZodEffects,
    effect,
    ...processCreateParams(params)
  });
};
ZodEffects.createWithPreprocess = (preprocess, schema, params) => {
  return new ZodEffects({
    schema,
    effect: { type: "preprocess", transform: preprocess },
    typeName: ZodFirstPartyTypeKind.ZodEffects,
    ...processCreateParams(params)
  });
};
var ZodOptional = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType === ZodParsedType.undefined) {
      return OK(void 0);
    }
    return this._def.innerType._parse(input);
  }
  unwrap() {
    return this._def.innerType;
  }
};
ZodOptional.create = (type, params) => {
  return new ZodOptional({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodOptional,
    ...processCreateParams(params)
  });
};
var ZodNullable = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType === ZodParsedType.null) {
      return OK(null);
    }
    return this._def.innerType._parse(input);
  }
  unwrap() {
    return this._def.innerType;
  }
};
ZodNullable.create = (type, params) => {
  return new ZodNullable({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodNullable,
    ...processCreateParams(params)
  });
};
var ZodDefault = class extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    let data = ctx.data;
    if (ctx.parsedType === ZodParsedType.undefined) {
      data = this._def.defaultValue();
    }
    return this._def.innerType._parse({
      data,
      path: ctx.path,
      parent: ctx
    });
  }
  removeDefault() {
    return this._def.innerType;
  }
};
ZodDefault.create = (type, params) => {
  return new ZodDefault({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodDefault,
    defaultValue: typeof params.default === "function" ? params.default : () => params.default,
    ...processCreateParams(params)
  });
};
var ZodCatch = class extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    const newCtx = {
      ...ctx,
      common: {
        ...ctx.common,
        issues: []
      }
    };
    const result = this._def.innerType._parse({
      data: newCtx.data,
      path: newCtx.path,
      parent: {
        ...newCtx
      }
    });
    if (isAsync(result)) {
      return result.then((result2) => {
        return {
          status: "valid",
          value: result2.status === "valid" ? result2.value : this._def.catchValue({
            get error() {
              return new ZodError(newCtx.common.issues);
            },
            input: newCtx.data
          })
        };
      });
    } else {
      return {
        status: "valid",
        value: result.status === "valid" ? result.value : this._def.catchValue({
          get error() {
            return new ZodError(newCtx.common.issues);
          },
          input: newCtx.data
        })
      };
    }
  }
  removeCatch() {
    return this._def.innerType;
  }
};
ZodCatch.create = (type, params) => {
  return new ZodCatch({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodCatch,
    catchValue: typeof params.catch === "function" ? params.catch : () => params.catch,
    ...processCreateParams(params)
  });
};
var ZodNaN = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.nan) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.nan,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return { status: "valid", value: input.data };
  }
};
ZodNaN.create = (params) => {
  return new ZodNaN({
    typeName: ZodFirstPartyTypeKind.ZodNaN,
    ...processCreateParams(params)
  });
};
var BRAND = Symbol("zod_brand");
var ZodBranded = class extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    const data = ctx.data;
    return this._def.type._parse({
      data,
      path: ctx.path,
      parent: ctx
    });
  }
  unwrap() {
    return this._def.type;
  }
};
var ZodPipeline = class _ZodPipeline extends ZodType {
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.common.async) {
      const handleAsync = async () => {
        const inResult = await this._def.in._parseAsync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
        if (inResult.status === "aborted")
          return INVALID;
        if (inResult.status === "dirty") {
          status.dirty();
          return DIRTY(inResult.value);
        } else {
          return this._def.out._parseAsync({
            data: inResult.value,
            path: ctx.path,
            parent: ctx
          });
        }
      };
      return handleAsync();
    } else {
      const inResult = this._def.in._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      });
      if (inResult.status === "aborted")
        return INVALID;
      if (inResult.status === "dirty") {
        status.dirty();
        return {
          status: "dirty",
          value: inResult.value
        };
      } else {
        return this._def.out._parseSync({
          data: inResult.value,
          path: ctx.path,
          parent: ctx
        });
      }
    }
  }
  static create(a16, b) {
    return new _ZodPipeline({
      in: a16,
      out: b,
      typeName: ZodFirstPartyTypeKind.ZodPipeline
    });
  }
};
var ZodReadonly = class extends ZodType {
  _parse(input) {
    const result = this._def.innerType._parse(input);
    const freeze = (data) => {
      if (isValid(data)) {
        data.value = Object.freeze(data.value);
      }
      return data;
    };
    return isAsync(result) ? result.then((data) => freeze(data)) : freeze(result);
  }
  unwrap() {
    return this._def.innerType;
  }
};
ZodReadonly.create = (type, params) => {
  return new ZodReadonly({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodReadonly,
    ...processCreateParams(params)
  });
};
function custom(check, params = {}, fatal) {
  if (check)
    return ZodAny.create().superRefine((data, ctx) => {
      var _a2, _b;
      if (!check(data)) {
        const p = typeof params === "function" ? params(data) : typeof params === "string" ? { message: params } : params;
        const _fatal = (_b = (_a2 = p.fatal) !== null && _a2 !== void 0 ? _a2 : fatal) !== null && _b !== void 0 ? _b : true;
        const p2 = typeof p === "string" ? { message: p } : p;
        ctx.addIssue({ code: "custom", ...p2, fatal: _fatal });
      }
    });
  return ZodAny.create();
}
var late = {
  object: ZodObject.lazycreate
};
var ZodFirstPartyTypeKind;
(function(ZodFirstPartyTypeKind2) {
  ZodFirstPartyTypeKind2["ZodString"] = "ZodString";
  ZodFirstPartyTypeKind2["ZodNumber"] = "ZodNumber";
  ZodFirstPartyTypeKind2["ZodNaN"] = "ZodNaN";
  ZodFirstPartyTypeKind2["ZodBigInt"] = "ZodBigInt";
  ZodFirstPartyTypeKind2["ZodBoolean"] = "ZodBoolean";
  ZodFirstPartyTypeKind2["ZodDate"] = "ZodDate";
  ZodFirstPartyTypeKind2["ZodSymbol"] = "ZodSymbol";
  ZodFirstPartyTypeKind2["ZodUndefined"] = "ZodUndefined";
  ZodFirstPartyTypeKind2["ZodNull"] = "ZodNull";
  ZodFirstPartyTypeKind2["ZodAny"] = "ZodAny";
  ZodFirstPartyTypeKind2["ZodUnknown"] = "ZodUnknown";
  ZodFirstPartyTypeKind2["ZodNever"] = "ZodNever";
  ZodFirstPartyTypeKind2["ZodVoid"] = "ZodVoid";
  ZodFirstPartyTypeKind2["ZodArray"] = "ZodArray";
  ZodFirstPartyTypeKind2["ZodObject"] = "ZodObject";
  ZodFirstPartyTypeKind2["ZodUnion"] = "ZodUnion";
  ZodFirstPartyTypeKind2["ZodDiscriminatedUnion"] = "ZodDiscriminatedUnion";
  ZodFirstPartyTypeKind2["ZodIntersection"] = "ZodIntersection";
  ZodFirstPartyTypeKind2["ZodTuple"] = "ZodTuple";
  ZodFirstPartyTypeKind2["ZodRecord"] = "ZodRecord";
  ZodFirstPartyTypeKind2["ZodMap"] = "ZodMap";
  ZodFirstPartyTypeKind2["ZodSet"] = "ZodSet";
  ZodFirstPartyTypeKind2["ZodFunction"] = "ZodFunction";
  ZodFirstPartyTypeKind2["ZodLazy"] = "ZodLazy";
  ZodFirstPartyTypeKind2["ZodLiteral"] = "ZodLiteral";
  ZodFirstPartyTypeKind2["ZodEnum"] = "ZodEnum";
  ZodFirstPartyTypeKind2["ZodEffects"] = "ZodEffects";
  ZodFirstPartyTypeKind2["ZodNativeEnum"] = "ZodNativeEnum";
  ZodFirstPartyTypeKind2["ZodOptional"] = "ZodOptional";
  ZodFirstPartyTypeKind2["ZodNullable"] = "ZodNullable";
  ZodFirstPartyTypeKind2["ZodDefault"] = "ZodDefault";
  ZodFirstPartyTypeKind2["ZodCatch"] = "ZodCatch";
  ZodFirstPartyTypeKind2["ZodPromise"] = "ZodPromise";
  ZodFirstPartyTypeKind2["ZodBranded"] = "ZodBranded";
  ZodFirstPartyTypeKind2["ZodPipeline"] = "ZodPipeline";
  ZodFirstPartyTypeKind2["ZodReadonly"] = "ZodReadonly";
})(ZodFirstPartyTypeKind || (ZodFirstPartyTypeKind = {}));
var instanceOfType = (cls, params = {
  message: `Input not instance of ${cls.name}`
}) => custom((data) => data instanceof cls, params);
var stringType = ZodString.create;
var numberType = ZodNumber.create;
var nanType = ZodNaN.create;
var bigIntType = ZodBigInt.create;
var booleanType = ZodBoolean.create;
var dateType = ZodDate.create;
var symbolType = ZodSymbol.create;
var undefinedType = ZodUndefined.create;
var nullType = ZodNull.create;
var anyType = ZodAny.create;
var unknownType = ZodUnknown.create;
var neverType = ZodNever.create;
var voidType = ZodVoid.create;
var arrayType = ZodArray.create;
var objectType = ZodObject.create;
var strictObjectType = ZodObject.strictCreate;
var unionType = ZodUnion.create;
var discriminatedUnionType = ZodDiscriminatedUnion.create;
var intersectionType = ZodIntersection.create;
var tupleType = ZodTuple.create;
var recordType = ZodRecord.create;
var mapType = ZodMap.create;
var setType = ZodSet.create;
var functionType = ZodFunction.create;
var lazyType = ZodLazy.create;
var literalType = ZodLiteral.create;
var enumType = ZodEnum.create;
var nativeEnumType = ZodNativeEnum.create;
var promiseType = ZodPromise.create;
var effectsType = ZodEffects.create;
var optionalType = ZodOptional.create;
var nullableType = ZodNullable.create;
var preprocessType = ZodEffects.createWithPreprocess;
var pipelineType = ZodPipeline.create;
var ostring = () => stringType().optional();
var onumber = () => numberType().optional();
var oboolean = () => booleanType().optional();
var coerce = {
  string: (arg) => ZodString.create({ ...arg, coerce: true }),
  number: (arg) => ZodNumber.create({ ...arg, coerce: true }),
  boolean: (arg) => ZodBoolean.create({
    ...arg,
    coerce: true
  }),
  bigint: (arg) => ZodBigInt.create({ ...arg, coerce: true }),
  date: (arg) => ZodDate.create({ ...arg, coerce: true })
};
var NEVER = INVALID;
var z = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  defaultErrorMap: errorMap,
  setErrorMap,
  getErrorMap,
  makeIssue,
  EMPTY_PATH,
  addIssueToContext,
  ParseStatus,
  INVALID,
  DIRTY,
  OK,
  isAborted,
  isDirty,
  isValid,
  isAsync,
  get util() {
    return util;
  },
  get objectUtil() {
    return objectUtil;
  },
  ZodParsedType,
  getParsedType,
  ZodType,
  datetimeRegex,
  ZodString,
  ZodNumber,
  ZodBigInt,
  ZodBoolean,
  ZodDate,
  ZodSymbol,
  ZodUndefined,
  ZodNull,
  ZodAny,
  ZodUnknown,
  ZodNever,
  ZodVoid,
  ZodArray,
  ZodObject,
  ZodUnion,
  ZodDiscriminatedUnion,
  ZodIntersection,
  ZodTuple,
  ZodRecord,
  ZodMap,
  ZodSet,
  ZodFunction,
  ZodLazy,
  ZodLiteral,
  ZodEnum,
  ZodNativeEnum,
  ZodPromise,
  ZodEffects,
  ZodTransformer: ZodEffects,
  ZodOptional,
  ZodNullable,
  ZodDefault,
  ZodCatch,
  ZodNaN,
  BRAND,
  ZodBranded,
  ZodPipeline,
  ZodReadonly,
  custom,
  Schema: ZodType,
  ZodSchema: ZodType,
  late,
  get ZodFirstPartyTypeKind() {
    return ZodFirstPartyTypeKind;
  },
  coerce,
  any: anyType,
  array: arrayType,
  bigint: bigIntType,
  boolean: booleanType,
  date: dateType,
  discriminatedUnion: discriminatedUnionType,
  effect: effectsType,
  "enum": enumType,
  "function": functionType,
  "instanceof": instanceOfType,
  intersection: intersectionType,
  lazy: lazyType,
  literal: literalType,
  map: mapType,
  nan: nanType,
  nativeEnum: nativeEnumType,
  never: neverType,
  "null": nullType,
  nullable: nullableType,
  number: numberType,
  object: objectType,
  oboolean,
  onumber,
  optional: optionalType,
  ostring,
  pipeline: pipelineType,
  preprocess: preprocessType,
  promise: promiseType,
  record: recordType,
  set: setType,
  strictObject: strictObjectType,
  string: stringType,
  symbol: symbolType,
  transformer: effectsType,
  tuple: tupleType,
  "undefined": undefinedType,
  union: unionType,
  unknown: unknownType,
  "void": voidType,
  NEVER,
  ZodIssueCode,
  quotelessJson,
  ZodError
});

// src/prompts/auth-nextjs.md
var auth_nextjs_default = "# Bootstrap Next.js app with Supabase Auth\n\n## \u{1F3AF} \u76EE\u6807\n\u5728 Next.js \u5E94\u7528\u4E2D\u5FEB\u901F\u8BBE\u7F6E Supabase \u8BA4\u8BC1\u7CFB\u7EDF\u3002\n\n## \u{1F6E0}\uFE0F \u6240\u9700\u5DE5\u5177\n- Next.js \u9879\u76EE\n- Supabase \u9879\u76EE\n- Supabase JavaScript \u5BA2\u6237\u7AEF\n\n## \u{1F680} \u5B9E\u73B0\u6B65\u9AA4\n\n### 1. \u5B89\u88C5\u4F9D\u8D56\n```bash\nnpm install @supabase/supabase-js @supabase/auth-helpers-nextjs\n```\n\n### 2. \u73AF\u5883\u53D8\u91CF\u914D\u7F6E\n```env\nNEXT_PUBLIC_SUPABASE_URL=your_supabase_url\nNEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key\n```\n\n### 3. \u521B\u5EFA Supabase \u5BA2\u6237\u7AEF\n```typescript\n// lib/supabase.ts\nimport { createClient } from '@supabase/supabase-js'\n\nexport const supabase = createClient(\n  process.env.NEXT_PUBLIC_SUPABASE_URL!,\n  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!\n)\n```\n\n### 4. \u8BA4\u8BC1\u7EC4\u4EF6\u793A\u4F8B\n```typescript\n// components/Auth.tsx\nimport { useState } from 'react'\nimport { supabase } from '../lib/supabase'\n\nexport default function Auth() {\n  const [loading, setLoading] = useState(false)\n  const [email, setEmail] = useState('')\n  const [password, setPassword] = useState('')\n\n  const handleSignUp = async (e: React.FormEvent) => {\n    e.preventDefault()\n    setLoading(true)\n    \n    const { error } = await supabase.auth.signUp({\n      email,\n      password,\n    })\n    \n    if (error) console.log('Error:', error.message)\n    else alert('Check your email for the confirmation link!')\n    setLoading(false)\n  }\n\n  const handleSignIn = async (e: React.FormEvent) => {\n    e.preventDefault()\n    setLoading(true)\n    \n    const { error } = await supabase.auth.signInWithPassword({\n      email,\n      password,\n    })\n    \n    if (error) console.log('Error:', error.message)\n    setLoading(false)\n  }\n\n  return (\n    <div className=\"auth-container\">\n      <form onSubmit={handleSignUp}>\n        <input\n          type=\"email\"\n          placeholder=\"Your email\"\n          value={email}\n          onChange={(e) => setEmail(e.target.value)}\n        />\n        <input\n          type=\"password\"\n          placeholder=\"Your password\"\n          value={password}\n          onChange={(e) => setPassword(e.target.value)}\n        />\n        <button type=\"submit\" disabled={loading}>\n          {loading ? 'Loading...' : 'Sign Up'}\n        </button>\n      </form>\n      \n      <form onSubmit={handleSignIn}>\n        <button type=\"submit\" disabled={loading}>\n          {loading ? 'Loading...' : 'Sign In'}\n        </button>\n      </form>\n    </div>\n  )\n}\n```\n\n## \u{1F512} \u5B89\u5168\u6700\u4F73\u5B9E\u8DF5\n- \u4F7F\u7528\u73AF\u5883\u53D8\u91CF\u5B58\u50A8\u654F\u611F\u4FE1\u606F\n- \u5B9E\u73B0\u9002\u5F53\u7684\u9519\u8BEF\u5904\u7406\n- \u6DFB\u52A0\u52A0\u8F7D\u72B6\u6001\u548C\u7528\u6237\u53CD\u9988\n- \u8003\u8651\u5B9E\u73B0\u5BC6\u7801\u5F3A\u5EA6\u9A8C\u8BC1\n\n## \u{1F4DA} \u76F8\u5173\u8D44\u6E90\n- [Supabase Auth Documentation](https://supabase.com/docs/guides/auth)\n- [Next.js Documentation](https://nextjs.org/docs)\n\n\n";

// src/prompts/database-functions.md
var database_functions_default = "# Database: Create functions\n\n## \u{1F3AF} \u76EE\u6807\n\u521B\u5EFA\u9AD8\u6548\u3001\u53EF\u7EF4\u62A4\u7684\u6570\u636E\u5E93\u51FD\u6570\uFF0C\u63D0\u5347\u5E94\u7528\u6027\u80FD\u548C\u6570\u636E\u4E00\u81F4\u6027\u3002\n\n## \u{1F3D7}\uFE0F \u51FD\u6570\u7C7B\u578B\n\n### 1. \u6807\u91CF\u51FD\u6570\n```sql\n-- \u8BA1\u7B97\u7528\u6237\u5E74\u9F84\nCREATE OR REPLACE FUNCTION calculate_age(birth_date DATE)\nRETURNS INTEGER AS $$\nBEGIN\n  RETURN EXTRACT(YEAR FROM AGE(birth_date));\nEND;\n$$ LANGUAGE plpgsql IMMUTABLE;\n\n-- \u683C\u5F0F\u5316\u91D1\u989D\nCREATE OR REPLACE FUNCTION format_currency(amount DECIMAL, currency_code VARCHAR(3))\nRETURNS VARCHAR AS $$\nBEGIN\n  RETURN currency_code || ' ' || TO_CHAR(amount, 'FM999,999,999.00');\nEND;\n$$ LANGUAGE plpgsql IMMUTABLE;\n```\n\n### 2. \u8868\u51FD\u6570\n```sql\n-- \u83B7\u53D6\u7528\u6237\u8BA2\u5355\u7EDF\u8BA1\nCREATE OR REPLACE FUNCTION get_user_order_stats(user_uuid UUID)\nRETURNS TABLE (\n  total_orders BIGINT,\n  total_spent DECIMAL(10,2),\n  avg_order_value DECIMAL(10,2),\n  last_order_date TIMESTAMP WITH TIME ZONE\n) AS $$\nBEGIN\n  RETURN QUERY\n  SELECT \n    COUNT(o.id)::BIGINT,\n    COALESCE(SUM(o.total_amount), 0),\n    COALESCE(AVG(o.total_amount), 0),\n    MAX(o.created_at)\n  FROM orders o\n  WHERE o.user_id = user_uuid;\nEND;\n$$ LANGUAGE plpgsql STABLE;\n```\n\n### 3. \u89E6\u53D1\u5668\u51FD\u6570\n```sql\n-- \u81EA\u52A8\u66F4\u65B0\u65F6\u95F4\u6233\nCREATE OR REPLACE FUNCTION update_updated_at_column()\nRETURNS TRIGGER AS $$\nBEGIN\n  NEW.updated_at = NOW();\n  RETURN NEW;\nEND;\n$$ LANGUAGE plpgsql;\n\n-- \u521B\u5EFA\u89E6\u53D1\u5668\nCREATE TRIGGER update_users_updated_at\n  BEFORE UPDATE ON users\n  FOR EACH ROW\n  EXECUTE FUNCTION update_updated_at_column();\n```\n\n## \u{1F512} \u5B89\u5168\u51FD\u6570\n\n### 1. \u6570\u636E\u9A8C\u8BC1\u51FD\u6570\n```sql\n-- \u9A8C\u8BC1\u90AE\u7BB1\u683C\u5F0F\nCREATE OR REPLACE FUNCTION is_valid_email(email TEXT)\nRETURNS BOOLEAN AS $$\nBEGIN\n  RETURN email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}$';\nEND;\n$$ LANGUAGE plpgsql IMMUTABLE;\n\n-- \u9A8C\u8BC1\u5BC6\u7801\u5F3A\u5EA6\nCREATE OR REPLACE FUNCTION is_strong_password(password TEXT)\nRETURNS BOOLEAN AS $$\nBEGIN\n  RETURN \n    LENGTH(password) >= 8 AND\n    password ~ '[A-Z]' AND\n    password ~ '[a-z]' AND\n    password ~ '[0-9]' AND\n    password ~ '[^A-Za-z0-9]';\nEND;\n$$ LANGUAGE plpgsql IMMUTABLE;\n```\n\n### 2. \u6743\u9650\u68C0\u67E5\u51FD\u6570\n```sql\n-- \u68C0\u67E5\u7528\u6237\u6743\u9650\nCREATE OR REPLACE FUNCTION check_user_permission(\n  user_uuid UUID,\n  required_permission TEXT\n)\nRETURNS BOOLEAN AS $$\nDECLARE\n  has_permission BOOLEAN;\nBEGIN\n  SELECT EXISTS(\n    SELECT 1 FROM user_permissions up\n    JOIN permissions p ON up.permission_id = p.id\n    WHERE up.user_id = user_uuid\n    AND p.name = required_permission\n    AND up.is_active = true\n  ) INTO has_permission;\n  \n  RETURN has_permission;\nEND;\n$$ LANGUAGE plpgsql STABLE;\n```\n\n## \u{1F504} \u4E8B\u52A1\u51FD\u6570\n\n### 1. \u590D\u6742\u4E1A\u52A1\u903B\u8F91\n```sql\n-- \u5904\u7406\u8BA2\u5355\u652F\u4ED8\nCREATE OR REPLACE FUNCTION process_order_payment(\n  order_uuid UUID,\n  payment_amount DECIMAL(10,2),\n  payment_method TEXT\n)\nRETURNS BOOLEAN AS $$\nDECLARE\n  order_record RECORD;\n  user_record RECORD;\nBEGIN\n  -- \u5F00\u59CB\u4E8B\u52A1\n  BEGIN\n    -- \u83B7\u53D6\u8BA2\u5355\u4FE1\u606F\n    SELECT * INTO order_record FROM orders WHERE id = order_uuid;\n    IF NOT FOUND THEN\n      RAISE EXCEPTION 'Order not found';\n    END IF;\n    \n    -- \u83B7\u53D6\u7528\u6237\u4FE1\u606F\n    SELECT * INTO user_record FROM users WHERE id = order_record.user_id;\n    \n    -- \u9A8C\u8BC1\u652F\u4ED8\u91D1\u989D\n    IF payment_amount != order_record.total_amount THEN\n      RAISE EXCEPTION 'Payment amount mismatch';\n    END IF;\n    \n    -- \u66F4\u65B0\u8BA2\u5355\u72B6\u6001\n    UPDATE orders \n    SET \n      status = 'paid',\n      payment_method = payment_method,\n      paid_at = NOW(),\n      updated_at = NOW()\n    WHERE id = order_uuid;\n    \n    -- \u8BB0\u5F55\u652F\u4ED8\u5386\u53F2\n    INSERT INTO payment_history (\n      order_id, amount, method, processed_at\n    ) VALUES (\n      order_uuid, payment_amount, payment_method, NOW()\n    );\n    \n    -- \u63D0\u4EA4\u4E8B\u52A1\n    RETURN true;\n    \n  EXCEPTION\n    WHEN OTHERS THEN\n      -- \u56DE\u6EDA\u4E8B\u52A1\n      RAISE;\n  END;\nEND;\n$$ LANGUAGE plpgsql;\n```\n\n## \u26A1 \u6027\u80FD\u4F18\u5316\n\n### 1. \u51FD\u6570\u5C5E\u6027\n```sql\n-- \u4E0D\u53EF\u53D8\u51FD\u6570\uFF08\u76F8\u540C\u8F93\u5165\u603B\u662F\u8FD4\u56DE\u76F8\u540C\u8F93\u51FA\uFF09\nCREATE OR REPLACE FUNCTION get_user_by_id(user_id UUID)\nRETURNS users AS $$\n  SELECT * FROM users WHERE id = user_id;\n$$ LANGUAGE sql IMMUTABLE;\n\n-- \u7A33\u5B9A\u51FD\u6570\uFF08\u76F8\u540C\u8F93\u5165\u5728\u4E8B\u52A1\u5185\u8FD4\u56DE\u76F8\u540C\u8F93\u51FA\uFF09\nCREATE OR REPLACE FUNCTION get_user_profile(user_id UUID)\nRETURNS user_profiles AS $$\n  SELECT * FROM user_profiles WHERE user_id = $1;\n$$ LANGUAGE sql STABLE;\n\n-- \u6613\u53D8\u51FD\u6570\uFF08\u53EF\u80FD\u8FD4\u56DE\u4E0D\u540C\u7ED3\u679C\uFF09\nCREATE OR REPLACE FUNCTION get_current_timestamp()\nRETURNS TIMESTAMP WITH TIME ZONE AS $$\n  SELECT NOW();\n$$ LANGUAGE sql VOLATILE;\n```\n\n### 2. \u5E76\u884C\u6267\u884C\n```sql\n-- \u652F\u6301\u5E76\u884C\u6267\u884C\u7684\u51FD\u6570\nCREATE OR REPLACE FUNCTION parallel_process_data(data_array INTEGER[])\nRETURNS INTEGER AS $$\nBEGIN\n  RETURN array_length(data_array, 1);\nEND;\n$$ LANGUAGE plpgsql PARALLEL SAFE;\n```\n\n## \u{1F9EA} \u6D4B\u8BD5\u51FD\u6570\n\n### 1. \u5355\u5143\u6D4B\u8BD5\n```sql\n-- \u6D4B\u8BD5\u51FD\u6570\nCREATE OR REPLACE FUNCTION test_calculate_age()\nRETURNS BOOLEAN AS $$\nDECLARE\n  test_result INTEGER;\nBEGIN\n  -- \u6D4B\u8BD5\u7528\u4F8B 1\n  test_result := calculate_age('1990-01-01'::DATE);\n  IF test_result != 34 THEN\n    RAISE EXCEPTION 'Test failed: expected 34, got %', test_result;\n  END IF;\n  \n  -- \u6D4B\u8BD5\u7528\u4F8B 2\n  test_result := calculate_age('2000-01-01'::DATE);\n  IF test_result != 24 THEN\n    RAISE EXCEPTION 'Test failed: expected 24, got %', test_result;\n  END IF;\n  \n  RETURN true;\nEND;\n$$ LANGUAGE plpgsql;\n```\n\n## \u{1F4DA} \u76F8\u5173\u8D44\u6E90\n- [PostgreSQL Functions Documentation](https://www.postgresql.org/docs/current/xfunc.html)\n- [Supabase Database Functions](https://supabase.com/docs/guides/database/functions)\n\n\n";

// src/prompts/database-schema.md
var database_schema_default = "# Database: Declarative Database Schema\n\n## \u{1F3AF} \u76EE\u6807\n\u4F7F\u7528\u58F0\u660E\u5F0F\u65B9\u6CD5\u8BBE\u8BA1\u6E05\u6670\u3001\u53EF\u7EF4\u62A4\u7684\u6570\u636E\u5E93\u6A21\u5F0F\u3002\n\n## \u{1F3D7}\uFE0F \u6A21\u5F0F\u8BBE\u8BA1\u539F\u5219\n\n### 1. \u547D\u540D\u7EA6\u5B9A\n- \u8868\u540D\u4F7F\u7528\u590D\u6570\u5F62\u5F0F\uFF1A`users`, `orders`, `products`\n- \u5B57\u6BB5\u540D\u4F7F\u7528\u5C0F\u5199\u548C\u4E0B\u5212\u7EBF\uFF1A`user_id`, `created_at`, `is_active`\n- \u7EA6\u675F\u540D\u4F7F\u7528\u63CF\u8FF0\u6027\u540D\u79F0\uFF1A`fk_user_orders`, `idx_users_email`\n\n### 2. \u6570\u636E\u7C7B\u578B\u9009\u62E9\n```sql\n-- \u7528\u6237\u8868\u793A\u4F8B\nCREATE TABLE users (\n  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),\n  email VARCHAR(255) UNIQUE NOT NULL,\n  username VARCHAR(50) UNIQUE NOT NULL,\n  full_name VARCHAR(100),\n  avatar_url TEXT,\n  is_active BOOLEAN DEFAULT true,\n  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),\n  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()\n);\n\n-- \u8BA2\u5355\u8868\u793A\u4F8B\nCREATE TABLE orders (\n  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),\n  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,\n  order_number VARCHAR(20) UNIQUE NOT NULL,\n  total_amount DECIMAL(10,2) NOT NULL CHECK (total_amount > 0),\n  status VARCHAR(20) DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'shipped', 'delivered', 'cancelled')),\n  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),\n  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()\n);\n```\n\n### 3. \u7D22\u5F15\u7B56\u7565\n```sql\n-- \u4E3A\u5E38\u7528\u67E5\u8BE2\u5B57\u6BB5\u521B\u5EFA\u7D22\u5F15\nCREATE INDEX idx_users_email ON users(email);\nCREATE INDEX idx_users_username ON users(username);\nCREATE INDEX idx_orders_user_id ON orders(user_id);\nCREATE INDEX idx_orders_status ON orders(status);\nCREATE INDEX idx_orders_created_at ON orders(created_at);\n\n-- \u590D\u5408\u7D22\u5F15\nCREATE INDEX idx_orders_user_status ON orders(user_id, status);\n```\n\n### 4. \u7EA6\u675F\u548C\u9A8C\u8BC1\n```sql\n-- \u68C0\u67E5\u7EA6\u675F\nALTER TABLE users ADD CONSTRAINT chk_email_format \n  CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}$');\n\n-- \u5916\u952E\u7EA6\u675F\nALTER TABLE orders ADD CONSTRAINT fk_orders_user \n  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE;\n\n-- \u552F\u4E00\u7EA6\u675F\nALTER TABLE users ADD CONSTRAINT uk_users_email UNIQUE (email);\n```\n\n## \u{1F504} \u6A21\u5F0F\u6F14\u8FDB\n\n### 1. \u4F7F\u7528\u8FC1\u79FB\u6587\u4EF6\n```sql\n-- migrations/001_create_users_table.sql\nCREATE TABLE users (\n  -- \u8868\u7ED3\u6784\n);\n\n-- migrations/002_add_user_profile.sql\nALTER TABLE users ADD COLUMN profile_data JSONB;\n```\n\n### 2. \u5411\u540E\u517C\u5BB9\u6027\n```sql\n-- \u6DFB\u52A0\u65B0\u5B57\u6BB5\u65F6\u63D0\u4F9B\u9ED8\u8BA4\u503C\nALTER TABLE users ADD COLUMN phone VARCHAR(20) DEFAULT NULL;\n\n-- \u5220\u9664\u5B57\u6BB5\u524D\u5148\u6807\u8BB0\u4E3A\u5E9F\u5F03\nALTER TABLE users ADD COLUMN is_deprecated BOOLEAN DEFAULT false;\n```\n\n## \u26A1 \u6027\u80FD\u4F18\u5316\n\n### 1. \u5206\u533A\u7B56\u7565\n```sql\n-- \u6309\u65F6\u95F4\u5206\u533A\nCREATE TABLE orders (\n  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),\n  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),\n  -- \u5176\u4ED6\u5B57\u6BB5\n) PARTITION BY RANGE (created_at);\n\n-- \u521B\u5EFA\u5206\u533A\nCREATE TABLE orders_2024 PARTITION OF orders\n  FOR VALUES FROM ('2024-01-01') TO ('2025-01-01');\n```\n\n### 2. \u7269\u5316\u89C6\u56FE\n```sql\n-- \u521B\u5EFA\u7269\u5316\u89C6\u56FE\nCREATE MATERIALIZED VIEW user_order_summary AS\nSELECT \n  u.id,\n  u.email,\n  COUNT(o.id) as order_count,\n  SUM(o.total_amount) as total_spent\nFROM users u\nLEFT JOIN orders o ON u.id = o.user_id\nGROUP BY u.id, u.email;\n\n-- \u5B9A\u671F\u5237\u65B0\nREFRESH MATERIALIZED VIEW user_order_summary;\n```\n\n## \u{1F512} \u5B89\u5168\u8003\u8651\n- \u4F7F\u7528 RLS (Row Level Security) \u63A7\u5236\u6570\u636E\u8BBF\u95EE\n- \u5B9E\u73B0\u9002\u5F53\u7684\u6743\u9650\u7BA1\u7406\n- \u5B9A\u671F\u5BA1\u8BA1\u6570\u636E\u5E93\u8BBF\u95EE\n- \u52A0\u5BC6\u654F\u611F\u6570\u636E\n\n## \u{1F4DA} \u76F8\u5173\u8D44\u6E90\n- [PostgreSQL Documentation](https://www.postgresql.org/docs/)\n- [Supabase Database Guide](https://supabase.com/docs/guides/database)\n\n\n";

// src/prompts/edge-functions.md
var edge_functions_default = '# Writing Supabase Edge Functions\n\n## \u{1F3AF} \u76EE\u6807\n\u5F00\u53D1\u9AD8\u6548\u3001\u5B89\u5168\u7684 Supabase Edge Functions\u3002\n\n## \u{1F4DD} \u51FD\u6570\u6A21\u677F\n\n### \u57FA\u7840\u51FD\u6570\u7ED3\u6784\n```typescript\n// supabase/functions/my-function/index.ts\nimport { serve } from "https://deno.land/std@0.168.0/http/server.ts"\n\nserve(async (req) => {\n  try {\n    // \u83B7\u53D6\u8BF7\u6C42\u6570\u636E\n    const { name } = await req.json()\n    \n    // \u4E1A\u52A1\u903B\u8F91\n    const message = `Hello ${name}!`\n    \n    // \u8FD4\u56DE\u54CD\u5E94\n    return new Response(\n      JSON.stringify({ message }),\n      { \n        headers: { "Content-Type": "application/json" },\n        status: 200 \n      }\n    )\n  } catch (error) {\n    return new Response(\n      JSON.stringify({ error: error.message }),\n      { \n        headers: { "Content-Type": "application/json" },\n        status: 400 \n      }\n    )\n  }\n})\n```\n\n### \u6570\u636E\u5E93\u64CD\u4F5C\u51FD\u6570\n```typescript\nimport { serve } from "https://deno.land/std@0.168.0/http/server.ts"\nimport { createClient } from \'https://esm.sh/@supabase/supabase-js@2\'\n\nserve(async (req) => {\n  // \u521B\u5EFA Supabase \u5BA2\u6237\u7AEF\n  const supabaseClient = createClient(\n    Deno.env.get(\'SUPABASE_URL\') ?? \'\',\n    Deno.env.get(\'SUPABASE_ANON_KEY\') ?? \'\'\n  )\n  \n  try {\n    const { data, error } = await supabaseClient\n      .from(\'users\')\n      .select(\'*\')\n      .limit(10)\n    \n    if (error) throw error\n    \n    return new Response(\n      JSON.stringify({ data }),\n      { headers: { "Content-Type": "application/json" } }\n    )\n  } catch (error) {\n    return new Response(\n      JSON.stringify({ error: error.message }),\n      { \n        headers: { "Content-Type": "application/json" },\n        status: 400 \n      }\n    )\n  }\n})\n```\n\n## \u{1F512} \u5B89\u5168\u6700\u4F73\u5B9E\u8DF5\n- \u9A8C\u8BC1 JWT \u4EE4\u724C\n- \u5B9E\u73B0\u9002\u5F53\u7684\u9519\u8BEF\u5904\u7406\n- \u76EE\u524D\u4E0D\u652F\u6301\u4F7F\u7528\u73AF\u5883\u53D8\u91CF\u5B58\u50A8\u654F\u611F\u4FE1\u606F\n\n## \u{1F680} \u90E8\u7F72\u548C\u6D4B\u8BD5\n\u91CD\u8981\uFF1A\u4E0D\u652F\u6301\u57FA\u4E8E supabase cli \u7684 Edge Functions \u90E8\u7F72\u65B9\u5F0F\uFF0C\u53EF\u4EE5\u901A\u8FC7 PolarDB Supabase MCP \u8FDB\u884C Edge Functions \u7BA1\u7406\u3002\n\n## \u{1F4DA} \u76F8\u5173\u8D44\u6E90\n- [Edge Functions Documentation](https://supabase.com/docs/guides/functions)\n- [Deno Runtime](https://deno.land/)\n\n\n';

// src/prompts/frontend-best-practices.md
var frontend_best_practices_default = '# \u57FA\u4E8E PolarDB Supabase \u7684\u524D\u7AEF\u5E94\u7528\u5F00\u53D1\u6700\u4F73\u5B9E\u8DF5\n\n## \u{1F3AF} \u6838\u5FC3\u8EAB\u4EFD\n\u4F60\u662F\u4E00\u540D\u4E13\u4E1A AI \u52A9\u624B\u548C\u5353\u8D8A\u7684\u8F6F\u4EF6\u5F00\u53D1\u4E13\u5BB6\uFF0C\u5728\u591A\u79CD\u7F16\u7A0B\u8BED\u8A00\u3001\u6846\u67B6\u548C\u6700\u4F73\u5B9E\u8DF5\u65B9\u9762\u62E5\u6709\u4E30\u5BCC\u7684\u77E5\u8BC6\u3002\n\n## \u{1F4CB} \u54CD\u5E94\u8981\u6C42\n1. **\u8BBE\u8BA1\u8D28\u91CF**\uFF1A\u6240\u6709\u8BBE\u8BA1\u8BF7\u6C42\u5FC5\u987B\u662F\u4E13\u4E1A\u3001\u7F8E\u89C2\u3001\u72EC\u7279\u4E14\u529F\u80FD\u5B8C\u6574\u7684\u751F\u4EA7\u7EA7\u8D28\u91CF\n3. **\u4E13\u6CE8\u6027**\uFF1A\u4E13\u6CE8\u4E8E\u89E3\u51B3\u7528\u6237\u8BF7\u6C42\uFF0C\u4E0D\u504F\u79BB\u5230\u4E0D\u76F8\u5173\u8BDD\u9898\n4. **\u8BED\u8A00\u5339\u914D**\uFF1A\u4F7F\u7528\u7528\u6237\u63D0\u95EE\u7684\u8BED\u8A00\u6765\u56DE\u7B54\n\n## \u{1F6E0}\uFE0F \u6280\u672F\u504F\u597D\n- **\u6570\u636E\u5E93**\uFF1A\u9ED8\u8BA4\u4F7F\u7528 Supabase \u4F5C\u4E3A\u6570\u636E\u5E93\uFF0C\u9664\u975E\u53E6\u6709\u8BF4\u660E\n- **\u56FE\u7247\u8D44\u6E90**\uFF1A\u4F7F\u7528\u6765\u81EA Pexels \u6216 Unsplash \u7684\u5E93\u5B58\u7167\u7247\uFF08\u4EC5\u9650\u6709\u6548 URL\uFF09\n\n### \u9879\u76EE\u8BBE\u7F6E\u63D0\u9192\n- \u5982\u679C .env \u6587\u4EF6\u4E0D\u5B58\u5728\uFF0C\u521B\u5EFA .env \u6587\u4EF6\uFF0C\u5305\u542B\u5FC5\u8981\u53D8\u91CF\n- .env \u9700\u8981\u5305\u542B Supabase \u8FDE\u63A5\u4FE1\u606F VITE_SUPABASE_URL\u3001VITE_SUPABASE_ANON_KEY\uFF0C\u503C\u53EF\u4EE5\u901A\u8FC7 PolarDB Supabase MCP \u83B7\u53D6\u5230\u3002\n\n### \u5BA2\u6237\u7AEF\u8BBE\u7F6E\n- \u4F7F\u7528 @supabase/supabase-js\n- \u521B\u5EFA\u5355\u4F8B\u5BA2\u6237\u7AEF\u5B9E\u4F8B\n- \u4F7F\u7528 .env \u4E2D\u7684\u73AF\u5883\u53D8\u91CF\n\n### \u8BA4\u8BC1\u8981\u6C42\n- \u59CB\u7EC8\u4F7F\u7528\u7535\u5B50\u90AE\u4EF6/\u5BC6\u7801\u6CE8\u518C\n- **\u7981\u6B62**\uFF1A\u81EA\u5B9A\u4E49\u8BA4\u8BC1\u7CFB\u7EDF\uFF0C\u59CB\u7EC8\u4F7F\u7528 Supabase \u7684\u5185\u7F6E\u8BA4\u8BC1\n\n## \u{1F3A8} \u8BBE\u8BA1\u6307\u4EE4\n\n### \u6838\u5FC3\u8BBE\u8BA1\u6807\u51C6\n- **\u8D28\u91CF\u8981\u6C42**\uFF1A\u521B\u9020\u4EE4\u4EBA\u60CA\u53F9\u3001\u6C89\u6D78\u5F0F\u7684\u8BBE\u8BA1\uFF0C\u5AB2\u7F8E\u82F9\u679C\u3001Stripe \u6216\u5962\u4F88\u54C1\u724C\u7684\u7CBE\u81F4\u5EA6\n- **\u529F\u80FD\u5B8C\u6574**\uFF1A\u8BBE\u8BA1\u5FC5\u987B\u53EF\u76F4\u63A5\u751F\u4EA7\uFF0C\u529F\u80FD\u5B8C\u5907\uFF0C\u4E0D\u4F7F\u7528\u5360\u4F4D\u7B26\n- **\u72EC\u7279\u6027**\uFF1A\u4E25\u7981\u4F7F\u7528\u901A\u7528\u6216\u6A21\u677F\u5316\u7F8E\u5B66\uFF0C\u6BCF\u4E2A\u8BBE\u8BA1\u5FC5\u987B\u62E5\u6709\u72EC\u7279\u7684\u54C1\u724C\u4E13\u5C5E\u89C6\u89C9\u6807\u8BC6\n- **\u6807\u9898\u8BBE\u8BA1**\uFF1A\u5FC5\u987B\u52A8\u6001\u3001\u6C89\u6D78\u4E14\u4EE5\u6545\u4E8B\u9A71\u52A8\uFF0C\u4F7F\u7528\u5206\u5C42\u89C6\u89C9\u6548\u679C\u3001\u52A8\u6548\u548C\u8C61\u5F81\u5143\u7D20\n- **\u52A8\u753B\u6548\u679C**\uFF1A\u878D\u5165\u6709\u76EE\u7684\u7684\u8F7B\u91CF\u7EA7\u52A8\u753B\uFF0C\u7528\u4E8E\u6EDA\u52A8\u63ED\u793A\u3001\u5FAE\u4EA4\u4E92\u548C\u533A\u57DF\u8FC7\u6E21\n\n### \u8BBE\u8BA1\u539F\u5219\n- \u8FBE\u5230\u82F9\u679C\u7EA7\u522B\u7684\u7CBE\u81F4\uFF0C\u6CE8\u91CD\u7EC6\u8282\n- \u63D0\u4F9B\u529F\u80FD\u5B8C\u5907\u7684\u4EA4\u4E92\u7EC4\u4EF6\uFF0C\u5177\u5907\u76F4\u89C2\u7684\u53CD\u9988\u72B6\u6001\n- \u4F7F\u7528\u5B9A\u5236\u63D2\u753B\u30013D \u5143\u7D20\u6216\u8C61\u5F81\u6027\u89C6\u89C9\u5143\u7D20\n- \u786E\u4FDD\u8BBE\u8BA1\u5145\u6EE1\u6D3B\u529B\u4E14\u73B0\u4EE3\uFF0C\u901A\u8FC7\u6E10\u53D8\u3001\u8F89\u5149\u6216\u89C6\u5DEE\u6548\u679C\u7B49\u52A8\u6001\u5143\u7D20\n- \u6700\u7EC8\u5B9A\u7A3F\u524D\u81EA\u95EE\uFF1A"\u8FD9\u4E2A\u8BBE\u8BA1\u80FD\u5426\u8BA9 Apple \u6216 Stripe \u7684\u8BBE\u8BA1\u5E08\u9A7B\u8DB3\u5173\u6CE8\uFF1F"\n\n### \u907F\u514D\u7684\u8BBE\u8BA1\n- \u672A\u7ECF\u663E\u8457\u5B9A\u5236\u6253\u78E8\u7684\u57FA\u672C\u5E03\u5C40\n- \u7B80\u5355\u5316\u7684\u9875\u7709\uFF0C\u5FC5\u987B\u5177\u6709\u6C89\u6D78\u611F\u3001\u52A8\u753B\u6548\u679C\n- \u53EF\u80FD\u88AB\u8BEF\u8BA4\u4E3A\u514D\u8D39\u6A21\u677F\u6216\u8FC7\u5EA6\u4F7F\u7528\u7684\u6A21\u5F0F\n\n### \u4EA4\u4E92\u6A21\u5F0F\n- \u4F7F\u7528\u6E10\u8FDB\u5F0F\u62AB\u9732\u6765\u5F15\u5BFC\u7528\u6237\u76F4\u89C2\u64CD\u4F5C\n- \u7ED3\u5408\u4E0A\u4E0B\u6587\u83DC\u5355\u3001\u667A\u80FD\u63D0\u793A\u548C\u89C6\u89C9\u63D0\u793A\n- \u5B9E\u73B0\u62D6\u653E\u3001\u60AC\u505C\u6548\u679C\u548C\u8FC7\u6E21\u52A8\u753B\n- \u652F\u6301\u952E\u76D8\u5FEB\u6377\u952E\u3001ARIA \u6807\u7B7E\u548C\u7126\u70B9\u72B6\u6001\n- \u6DFB\u52A0\u5FAE\u5999\u7684\u89C6\u5DEE\u6548\u679C\u6216\u6EDA\u52A8\u89E6\u53D1\u7684\u52A8\u753B\n\n### \u6280\u672F\u8981\u6C42\n- \u7CBE\u5FC3\u6311\u9009\u7684\u989C\u8272\u8C03\u8272\u677F\uFF083-5 \u79CD\u5BCC\u6709\u8868\u73B0\u529B\u7684\u989C\u8272+\u4E2D\u6027\u8272\uFF09\n- \u786E\u4FDD\u6240\u6709\u6587\u672C\u548C\u4EA4\u4E92\u5143\u7D20\u81F3\u5C11\u5177\u6709 4.5:1 \u7684\u5BF9\u6BD4\u5EA6\n- \u4F7F\u7528\u5BCC\u6709\u8868\u73B0\u529B\u4E14\u6613\u4E8E\u9605\u8BFB\u7684\u5B57\u4F53\uFF08\u6B63\u6587\u4E0D\u5C0F\u4E8E 18px\uFF0C\u6807\u9898\u4E0D\u5C0F\u4E8E 40px\uFF09\n- \u8BBE\u8BA1\u4E3A\u5168\u54CD\u5E94\u5F0F\uFF0C\u786E\u4FDD\u5728\u6240\u6709\u5C4F\u5E55\u5C3A\u5BF8\u4E0A\u5747\u80FD\u5B8C\u7F8E\u8FD0\u884C\n- \u9075\u5FAA WCAG 2.1 AA \u6307\u5357\n- \u9075\u5FAA 8px \u7F51\u683C\u7CFB\u7EDF\n- \u901A\u8FC7\u7EC6\u5FAE\u7684\u9634\u5F71\u3001\u6E10\u53D8\u3001\u8F89\u5149\u548C\u5706\u89D2\u589E\u52A0\u6DF1\u5EA6\n- \u4F18\u5316\u52A8\u753B\u548C\u4EA4\u4E92\uFF0C\u786E\u4FDD\u8DE8\u8BBE\u5907\u7684\u6D41\u7545\u4F53\u9A8C\n\n### \u7EC4\u4EF6\u8981\u6C42\n- \u8BBE\u8BA1\u5177\u6709\u4E00\u81F4\u6837\u5F0F\u3001\u884C\u4E3A\u548C\u53CD\u9988\u72B6\u6001\u7684\u53EF\u91CD\u7528\u3001\u6A21\u5757\u5316\u7EC4\u4EF6\n- \u5305\u542B\u6709\u76EE\u7684\u7684\u52A8\u753B\u6765\u5F15\u5BFC\u6CE8\u610F\u529B\u5E76\u589E\u5F3A\u4EA4\u4E92\u6027\n- \u786E\u4FDD\u5B8C\u6574\u7684\u65E0\u969C\u788D\u652F\u6301\n- \u4F7F\u7528\u81EA\u5B9A\u4E49\u56FE\u6807\u6216\u63D2\u56FE\u6765\u5F3A\u5316\u7EC4\u4EF6\u7684\u54C1\u724C\u89C6\u89C9\u8BC6\u522B\n\n\n';

// src/prompts/migrations.md
var migrations_default = "# Database: Create migration\n\n## \u{1F3AF} \u76EE\u6807\n\u521B\u5EFA\u5B89\u5168\u3001\u53EF\u56DE\u6EDA\u7684\u6570\u636E\u5E93\u8FC1\u79FB\uFF0C\u7BA1\u7406\u6570\u636E\u5E93\u6A21\u5F0F\u7684\u6F14\u8FDB\u3002\n\n## \u{1F3D7}\uFE0F \u8FC1\u79FB\u57FA\u7840\n\n### 1. \u8FC1\u79FB\u6587\u4EF6\u547D\u540D\n```bash\n# \u683C\u5F0F\uFF1AYYYYMMDDHHMMSS_description.sql\n20241220120000_create_users_table.sql\n20241220120001_add_user_profile.sql\n20241220120002_create_orders_table.sql\n```\n\n### 2. \u8FC1\u79FB\u6587\u4EF6\u7ED3\u6784\n```sql\n-- \u8FC1\u79FB\u6587\u4EF6\uFF1A20241220120000_create_users_table.sql\n\n-- \u5411\u4E0A\u8FC1\u79FB\nCREATE TABLE users (\n  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),\n  email VARCHAR(255) UNIQUE NOT NULL,\n  username VARCHAR(50) UNIQUE NOT NULL,\n  full_name VARCHAR(100),\n  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),\n  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()\n);\n\n-- \u521B\u5EFA\u7D22\u5F15\nCREATE INDEX idx_users_email ON users(email);\nCREATE INDEX idx_users_username ON users(username);\n\n-- \u5411\u4E0B\u8FC1\u79FB\uFF08\u56DE\u6EDA\uFF09\n-- DROP TABLE users CASCADE;\n```\n\n## \u{1F504} \u8FC1\u79FB\u7C7B\u578B\n\n### 1. \u8868\u7ED3\u6784\u8FC1\u79FB\n```sql\n-- \u521B\u5EFA\u8868\nCREATE TABLE products (\n  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),\n  name VARCHAR(255) NOT NULL,\n  description TEXT,\n  price DECIMAL(10,2) NOT NULL CHECK (price > 0),\n  category_id UUID REFERENCES categories(id),\n  is_active BOOLEAN DEFAULT true,\n  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()\n);\n\n-- \u6DFB\u52A0\u5B57\u6BB5\nALTER TABLE users ADD COLUMN phone VARCHAR(20);\nALTER TABLE users ADD COLUMN avatar_url TEXT;\n\n-- \u4FEE\u6539\u5B57\u6BB5\nALTER TABLE users ALTER COLUMN email TYPE VARCHAR(320);\nALTER TABLE users ALTER COLUMN username SET NOT NULL;\n\n-- \u5220\u9664\u5B57\u6BB5\nALTER TABLE users DROP COLUMN phone;\n```\n\n### 2. \u6570\u636E\u8FC1\u79FB\n```sql\n-- \u63D2\u5165\u521D\u59CB\u6570\u636E\nINSERT INTO categories (name, description) VALUES\n  ('Electronics', 'Electronic devices and accessories'),\n  ('Clothing', 'Apparel and fashion items'),\n  ('Books', 'Books and publications');\n\n-- \u66F4\u65B0\u73B0\u6709\u6570\u636E\nUPDATE users \nSET full_name = CONCAT(first_name, ' ', last_name)\nWHERE full_name IS NULL;\n\n-- \u6570\u636E\u6E05\u7406\nDELETE FROM users WHERE created_at < '2020-01-01';\n```\n\n### 3. \u7D22\u5F15\u8FC1\u79FB\n```sql\n-- \u521B\u5EFA\u7D22\u5F15\nCREATE INDEX idx_products_category ON products(category_id);\nCREATE INDEX idx_products_price ON products(price);\nCREATE INDEX idx_products_active ON products(is_active) WHERE is_active = true;\n\n-- \u5220\u9664\u7D22\u5F15\nDROP INDEX IF EXISTS idx_products_old;\n```\n\n## \u{1F512} \u5B89\u5168\u8FC1\u79FB\n\n### 1. \u4E8B\u52A1\u5305\u88C5\n```sql\n-- \u4F7F\u7528\u4E8B\u52A1\u786E\u4FDD\u539F\u5B50\u6027\nBEGIN;\n\n-- \u6267\u884C\u8FC1\u79FB\u64CD\u4F5C\nCREATE TABLE new_users (\n  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),\n  email VARCHAR(255) UNIQUE NOT NULL,\n  username VARCHAR(50) UNIQUE NOT NULL\n);\n\n-- \u590D\u5236\u6570\u636E\nINSERT INTO new_users (id, email, username)\nSELECT id, email, username FROM users;\n\n-- \u91CD\u547D\u540D\u8868\nALTER TABLE users RENAME TO users_old;\nALTER TABLE new_users RENAME TO users;\n\nCOMMIT;\n```\n\n### 2. \u56DE\u6EDA\u51C6\u5907\n```sql\n-- \u5728\u8FC1\u79FB\u524D\u521B\u5EFA\u5907\u4EFD\nCREATE TABLE users_backup AS SELECT * FROM users;\n\n-- \u6216\u8005\u4F7F\u7528\u4E34\u65F6\u8868\nCREATE TEMP TABLE users_temp AS SELECT * FROM users;\n```\n\n### 3. \u6570\u636E\u9A8C\u8BC1\n```sql\n-- \u8FC1\u79FB\u540E\u9A8C\u8BC1\u6570\u636E\u5B8C\u6574\u6027\nSELECT COUNT(*) FROM users;\nSELECT COUNT(*) FROM users_backup;\n\n-- \u9A8C\u8BC1\u5173\u952E\u6570\u636E\nSELECT COUNT(*) FROM users WHERE email IS NULL;\nSELECT COUNT(*) FROM users WHERE username IS NULL;\n```\n\n## \u26A1 \u6027\u80FD\u4F18\u5316\n\n### 1. \u6279\u91CF\u64CD\u4F5C\n```sql\n-- \u6279\u91CF\u63D2\u5165\nINSERT INTO products (name, price, category_id)\nSELECT \n  'Product ' || generate_series(1, 1000),\n  random() * 1000,\n  (random() * 5 + 1)::int\nFROM generate_series(1, 1000);\n\n-- \u6279\u91CF\u66F4\u65B0\nUPDATE products \nSET price = price * 1.1\nWHERE category_id = 1;\n```\n\n### 2. \u5E76\u53D1\u63A7\u5236\n```sql\n-- \u4F7F\u7528 LOCK \u907F\u514D\u5E76\u53D1\u95EE\u9898\nLOCK TABLE users IN ACCESS EXCLUSIVE MODE;\n\n-- \u6216\u8005\u4F7F\u7528\u884C\u7EA7\u9501\nSELECT * FROM users WHERE id = 'user-uuid' FOR UPDATE;\n```\n\n## \u{1F9EA} \u6D4B\u8BD5\u8FC1\u79FB\n\n### 1. \u672C\u5730\u6D4B\u8BD5\n```bash\n# \u5728\u672C\u5730\u73AF\u5883\u6D4B\u8BD5\u8FC1\u79FB\nsupabase db reset\nsupabase db push\n\n# \u9A8C\u8BC1\u8FC1\u79FB\u7ED3\u679C\nsupabase db diff\n```\n\n### 2. \u8FC1\u79FB\u9A8C\u8BC1\n```sql\n-- \u68C0\u67E5\u8868\u7ED3\u6784\n\\d users\n\n-- \u68C0\u67E5\u7D22\u5F15\nSELECT indexname, indexdef FROM pg_indexes WHERE tablename = 'users';\n\n-- \u68C0\u67E5\u7EA6\u675F\nSELECT conname, contype, pg_get_constraintdef(oid) \nFROM pg_constraint \nWHERE conrelid = 'users'::regclass;\n```\n\n## \u{1F4CB} \u8FC1\u79FB\u6E05\u5355\n\n### 1. \u8FC1\u79FB\u524D\u68C0\u67E5\n- [ ] \u5907\u4EFD\u751F\u4EA7\u6570\u636E\n- [ ] \u5728\u6D4B\u8BD5\u73AF\u5883\u9A8C\u8BC1\u8FC1\u79FB\n- [ ] \u68C0\u67E5\u4F9D\u8D56\u5173\u7CFB\n- [ ] \u8BC4\u4F30\u505C\u673A\u65F6\u95F4\n- [ ] \u51C6\u5907\u56DE\u6EDA\u65B9\u6848\n\n### 2. \u8FC1\u79FB\u6267\u884C\n- [ ] \u6267\u884C\u8FC1\u79FB\u811A\u672C\n- [ ] \u9A8C\u8BC1\u6570\u636E\u5B8C\u6574\u6027\n- [ ] \u66F4\u65B0\u5E94\u7528\u914D\u7F6E\n- [ ] \u76D1\u63A7\u7CFB\u7EDF\u6027\u80FD\n- [ ] \u8BB0\u5F55\u8FC1\u79FB\u65E5\u5FD7\n\n### 3. \u8FC1\u79FB\u540E\u68C0\u67E5\n- [ ] \u9A8C\u8BC1\u6240\u6709\u529F\u80FD\u6B63\u5E38\n- [ ] \u68C0\u67E5\u6027\u80FD\u6307\u6807\n- [ ] \u66F4\u65B0\u6587\u6863\n- [ ] \u6E05\u7406\u4E34\u65F6\u6587\u4EF6\n- [ ] \u901A\u77E5\u76F8\u5173\u56E2\u961F\n\n## \u26A0\uFE0F \u6CE8\u610F\u4E8B\u9879\n\n### 1. \u5E38\u89C1\u9677\u9631\n- \u5FD8\u8BB0\u5904\u7406\u5916\u952E\u7EA6\u675F\n- \u6CA1\u6709\u8003\u8651\u6570\u636E\u91CF\u5927\u5C0F\n- \u5FFD\u7565\u7D22\u5F15\u91CD\u5EFA\u65F6\u95F4\n- \u5FD8\u8BB0\u66F4\u65B0\u5E94\u7528\u4EE3\u7801\n\n### 2. \u6700\u4F73\u5B9E\u8DF5\n- \u603B\u662F\u6D4B\u8BD5\u8FC1\u79FB\u811A\u672C\n- \u4F7F\u7528\u7248\u672C\u63A7\u5236\u7BA1\u7406\u8FC1\u79FB\n- \u8BB0\u5F55\u8BE6\u7EC6\u7684\u8FC1\u79FB\u65E5\u5FD7\n- \u51C6\u5907\u56DE\u6EDA\u8BA1\u5212\n- \u5728\u4F4E\u5CF0\u671F\u6267\u884C\u8FC1\u79FB\n\n## \u{1F4DA} \u76F8\u5173\u8D44\u6E90\n- [PostgreSQL ALTER TABLE](https://www.postgresql.org/docs/current/sql-altertable.html)\n- [Supabase Migrations](https://supabase.com/docs/guides/database/migrations)\n\n\n";

// src/prompts/postgres-style.md
var postgres_style_default = "# Postgres SQL Style Guide\n\n## \u{1F3AF} \u76EE\u6807\n\u9075\u5FAA\u4E00\u81F4\u7684 PostgreSQL SQL \u7F16\u7801\u98CE\u683C\uFF0C\u63D0\u9AD8\u4EE3\u7801\u53EF\u8BFB\u6027\u548C\u7EF4\u62A4\u6027\u3002\n\n## \u{1F4DD} \u547D\u540D\u7EA6\u5B9A\n\n### 1. \u8868\u540D\n```sql\n-- \u2705 \u597D\u7684\u547D\u540D\nusers, user_profiles, order_items, product_categories\n\n-- \u274C \u907F\u514D\u7684\u547D\u540D\nUser, userProfile, orderItem, productCategory\n```\n\n### 2. \u5B57\u6BB5\u540D\n```sql\n-- \u2705 \u597D\u7684\u547D\u540D\nuser_id, created_at, is_active, email_address\n\n-- \u274C \u907F\u514D\u7684\u547D\u540D\nuserId, createdAt, isActive, emailAddress\n```\n\n### 3. \u7EA6\u675F\u540D\n```sql\n-- \u2705 \u597D\u7684\u547D\u540D\nfk_users_orders, idx_users_email, uk_users_email, chk_users_age\n\n-- \u274C \u907F\u514D\u7684\u547D\u540D\nFK_Users_Orders, idxUsersEmail, UK_Users_Email\n```\n\n### 4. \u51FD\u6570\u540D\n```sql\n-- \u2705 \u597D\u7684\u547D\u540D\nget_user_by_id, calculate_total_amount, validate_email_format\n\n-- \u274C \u907F\u514D\u7684\u547D\u540D\ngetUserById, calculateTotalAmount, validateEmailFormat\n```\n\n## \u{1F3D7}\uFE0F \u8868\u7ED3\u6784\n\n### 1. \u5B57\u6BB5\u987A\u5E8F\n```sql\nCREATE TABLE users (\n  -- \u4E3B\u952E\n  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),\n  \n  -- \u4E1A\u52A1\u5B57\u6BB5\n  email VARCHAR(255) UNIQUE NOT NULL,\n  username VARCHAR(50) UNIQUE NOT NULL,\n  full_name VARCHAR(100),\n  \n  -- \u72B6\u6001\u5B57\u6BB5\n  is_active BOOLEAN DEFAULT true,\n  status VARCHAR(20) DEFAULT 'pending',\n  \n  -- \u65F6\u95F4\u5B57\u6BB5\n  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),\n  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),\n  \n  -- \u5916\u952E\n  role_id UUID REFERENCES roles(id)\n);\n```\n\n### 2. \u6570\u636E\u7C7B\u578B\u9009\u62E9\n```sql\n-- \u2705 \u63A8\u8350\u7684\u6570\u636E\u7C7B\u578B\nid UUID PRIMARY KEY DEFAULT gen_random_uuid(),           -- \u4E3B\u952E\nemail VARCHAR(255),                                      -- \u90AE\u7BB1\ndescription TEXT,                                         -- \u957F\u6587\u672C\nprice DECIMAL(10,2),                                     -- \u91D1\u989D\nis_active BOOLEAN DEFAULT true,                          -- \u5E03\u5C14\u503C\ncreated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),       -- \u65F6\u95F4\u6233\nmetadata JSONB,                                          -- \u7ED3\u6784\u5316\u6570\u636E\n\n-- \u274C \u907F\u514D\u7684\u6570\u636E\u7C7B\u578B\nid INTEGER,                                              -- \u53EF\u80FD\u6EA2\u51FA\nemail CHAR(255),                                         -- \u56FA\u5B9A\u957F\u5EA6\u6D6A\u8D39\u7A7A\u95F4\ndescription VARCHAR(1000),                               -- \u9650\u5236\u957F\u5EA6\nprice FLOAT,                                             -- \u7CBE\u5EA6\u95EE\u9898\n```\n\n### 3. \u7EA6\u675F\u5B9A\u4E49\n```sql\n-- \u2705 \u597D\u7684\u7EA6\u675F\u5B9A\u4E49\nCREATE TABLE orders (\n  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),\n  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,\n  order_number VARCHAR(20) UNIQUE NOT NULL,\n  total_amount DECIMAL(10,2) NOT NULL CHECK (total_amount > 0),\n  status VARCHAR(20) DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'shipped')),\n  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()\n);\n\n-- \u6DFB\u52A0\u7EA6\u675F\nALTER TABLE orders ADD CONSTRAINT fk_orders_user \n  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE;\n\nALTER TABLE orders ADD CONSTRAINT chk_orders_amount \n  CHECK (total_amount > 0);\n```\n\n## \u{1F50D} \u67E5\u8BE2\u8BED\u53E5\n\n### 1. SELECT \u8BED\u53E5\n```sql\n-- \u2705 \u597D\u7684 SELECT \u8BED\u53E5\nSELECT \n  u.id,\n  u.email,\n  u.full_name,\n  COUNT(o.id) as order_count,\n  SUM(o.total_amount) as total_spent\nFROM users u\nLEFT JOIN orders o ON u.id = o.user_id\nWHERE u.is_active = true\n  AND u.created_at >= '2024-01-01'\nGROUP BY u.id, u.email, u.full_name\nHAVING COUNT(o.id) > 0\nORDER BY total_spent DESC\nLIMIT 100;\n\n-- \u274C \u907F\u514D\u7684\u5199\u6CD5\nSELECT * FROM users u, orders o WHERE u.id = o.user_id;\n```\n\n### 2. JOIN \u8BED\u53E5\n```sql\n-- \u2705 \u597D\u7684 JOIN \u5199\u6CD5\nSELECT \n  u.email,\n  o.order_number,\n  p.name as product_name\nFROM users u\nINNER JOIN orders o ON u.id = o.user_id\nINNER JOIN order_items oi ON o.id = oi.order_id\nINNER JOIN products p ON oi.product_id = p.id\nWHERE u.is_active = true;\n\n-- \u274C \u907F\u514D\u7684\u5199\u6CD5\nSELECT u.email, o.order_number, p.name\nFROM users u, orders o, order_items oi, products p\nWHERE u.id = o.user_id AND o.id = oi.order_id AND oi.product_id = p.id;\n```\n\n### 3. \u5B50\u67E5\u8BE2\n```sql\n-- \u2705 \u597D\u7684\u5B50\u67E5\u8BE2\nSELECT \n  u.email,\n  (SELECT COUNT(*) FROM orders WHERE user_id = u.id) as order_count\nFROM users u\nWHERE u.is_active = true;\n\n-- \u6216\u8005\u4F7F\u7528 EXISTS\nSELECT u.email\nFROM users u\nWHERE EXISTS (\n  SELECT 1 FROM orders o \n  WHERE o.user_id = u.id \n  AND o.status = 'completed'\n);\n\n-- \u274C \u907F\u514D\u7684\u5199\u6CD5\nSELECT u.email, COUNT(o.id) as order_count\nFROM users u, orders o\nWHERE u.id = o.user_id(+);  -- Oracle \u8BED\u6CD5\n```\n\n## \u{1F512} \u5B89\u5168\u6700\u4F73\u5B9E\u8DF5\n\n### 1. \u53C2\u6570\u5316\u67E5\u8BE2\n```sql\n-- \u2705 \u4F7F\u7528\u53C2\u6570\u5316\u67E5\u8BE2\nSELECT * FROM users WHERE email = $1 AND status = $2;\n\n-- \u274C \u5B57\u7B26\u4E32\u62FC\u63A5\uFF08\u6613\u53D7 SQL \u6CE8\u5165\u653B\u51FB\uFF09\nSELECT * FROM users WHERE email = 'user@example.com' AND status = 'active';\n```\n\n### 2. \u6743\u9650\u63A7\u5236\n```sql\n-- \u2705 \u4F7F\u7528 RLS \u63A7\u5236\u8BBF\u95EE\nALTER TABLE users ENABLE ROW LEVEL SECURITY;\n\nCREATE POLICY \"Users can view own profile\" ON users\n  FOR SELECT USING (auth.uid() = id);\n\n-- \u274C \u5728\u5E94\u7528\u5C42\u63A7\u5236\u6743\u9650\n-- \u8FD9\u53EF\u80FD\u5BFC\u81F4\u6743\u9650\u7ED5\u8FC7\n```\n\n## \u26A1 \u6027\u80FD\u4F18\u5316\n\n### 1. \u7D22\u5F15\u7B56\u7565\n```sql\n-- \u2705 \u597D\u7684\u7D22\u5F15\u7B56\u7565\n-- \u4E3A\u5E38\u7528\u67E5\u8BE2\u5B57\u6BB5\u521B\u5EFA\u7D22\u5F15\nCREATE INDEX idx_users_email ON users(email);\nCREATE INDEX idx_users_status ON users(status);\nCREATE INDEX idx_orders_user_status ON orders(user_id, status);\n\n-- \u90E8\u5206\u7D22\u5F15\nCREATE INDEX idx_users_active ON users(email) WHERE is_active = true;\n\n-- \u274C \u907F\u514D\u7684\u7D22\u5F15\nCREATE INDEX idx_users_all ON users(id, email, username, full_name);  -- \u8FC7\u5EA6\u7D22\u5F15\n```\n\n### 2. \u67E5\u8BE2\u4F18\u5316\n```sql\n-- \u2705 \u597D\u7684\u67E5\u8BE2\u4E60\u60EF\n-- \u53EA\u9009\u62E9\u9700\u8981\u7684\u5B57\u6BB5\nSELECT id, email, full_name FROM users WHERE is_active = true;\n\n-- \u4F7F\u7528 LIMIT \u9650\u5236\u7ED3\u679C\u96C6\nSELECT * FROM orders ORDER BY created_at DESC LIMIT 100;\n\n-- \u907F\u514D SELECT *\nSELECT * FROM users;  -- \u274C \u9009\u62E9\u6240\u6709\u5B57\u6BB5\n```\n\n## \u{1F4CB} \u4EE3\u7801\u683C\u5F0F\u5316\n\n### 1. \u7F29\u8FDB\u548C\u6362\u884C\n```sql\n-- \u2705 \u597D\u7684\u683C\u5F0F\u5316\nSELECT \n  u.id,\n  u.email,\n  u.full_name,\n  COUNT(o.id) as order_count\nFROM users u\nLEFT JOIN orders o ON u.id = o.user_id\nWHERE u.is_active = true\n  AND u.created_at >= '2024-01-01'\nGROUP BY \n  u.id, \n  u.email, \n  u.full_name\nHAVING COUNT(o.id) > 0\nORDER BY order_count DESC\nLIMIT 100;\n\n-- \u274C \u4E0D\u597D\u7684\u683C\u5F0F\u5316\nSELECT u.id,u.email,u.full_name,COUNT(o.id) as order_count FROM users u LEFT JOIN orders o ON u.id=o.user_id WHERE u.is_active=true AND u.created_at>='2024-01-01' GROUP BY u.id,u.email,u.full_name HAVING COUNT(o.id)>0 ORDER BY order_count DESC LIMIT 100;\n```\n\n### 2. \u6CE8\u91CA\u89C4\u8303\n```sql\n-- \u2705 \u597D\u7684\u6CE8\u91CA\n-- \u83B7\u53D6\u6D3B\u8DC3\u7528\u6237\u7684\u8BA2\u5355\u7EDF\u8BA1\nSELECT \n  u.id,\n  u.email,\n  COUNT(o.id) as order_count\nFROM users u\nLEFT JOIN orders o ON u.id = o.user_id\nWHERE u.is_active = true  -- \u53EA\u67E5\u8BE2\u6D3B\u8DC3\u7528\u6237\nGROUP BY u.id, u.email;\n\n-- \u274C \u4E0D\u597D\u7684\u6CE8\u91CA\n-- \u67E5\u8BE2\u7528\u6237\nSELECT * FROM users;  -- \u6CE8\u91CA\u8FC7\u4E8E\u7B80\u5355\n```\n\n## \u{1F9EA} \u6D4B\u8BD5\u548C\u9A8C\u8BC1\n\n### 1. \u67E5\u8BE2\u6D4B\u8BD5\n```sql\n-- \u2705 \u6D4B\u8BD5\u67E5\u8BE2\n-- \u5148\u6D4B\u8BD5\u5C0F\u6570\u636E\u96C6\nSELECT COUNT(*) FROM users WHERE is_active = true;\n\n-- \u4F7F\u7528 EXPLAIN \u5206\u6790\u67E5\u8BE2\u8BA1\u5212\nEXPLAIN (ANALYZE, BUFFERS) \nSELECT * FROM users WHERE email = 'test@example.com';\n\n-- \u274C \u76F4\u63A5\u5728\u751F\u4EA7\u73AF\u5883\u6267\u884C\u590D\u6742\u67E5\u8BE2\n```\n\n### 2. \u6570\u636E\u9A8C\u8BC1\n```sql\n-- \u2705 \u6570\u636E\u9A8C\u8BC1\n-- \u68C0\u67E5\u6570\u636E\u5B8C\u6574\u6027\nSELECT COUNT(*) FROM users WHERE email IS NULL;\nSELECT COUNT(*) FROM users WHERE username IS NULL;\n\n-- \u9A8C\u8BC1\u7EA6\u675F\nSELECT COUNT(*) FROM orders WHERE total_amount <= 0;\n```\n\n## \u{1F4DA} \u76F8\u5173\u8D44\u6E90\n- [PostgreSQL Documentation](https://www.postgresql.org/docs/)\n- [Supabase SQL Guide](https://supabase.com/docs/guides/database)\n- [PostgreSQL Style Guide](https://www.postgresql.org/docs/current/style-guide.html)\n\n\n";

// src/prompts/rls-policies.md
var rls_policies_default = '# Database: Create RLS policies\n\n## \u{1F3AF} \u76EE\u6807\n\u5B9E\u73B0\u884C\u7EA7\u5B89\u5168\u7B56\u7565\uFF0C\u786E\u4FDD\u6570\u636E\u8BBF\u95EE\u7684\u5B89\u5168\u6027\u548C\u9694\u79BB\u6027\u3002\n\n## \u{1F512} RLS \u57FA\u7840\u6982\u5FF5\n\n### 1. \u542F\u7528 RLS\n```sql\n-- \u4E3A\u8868\u542F\u7528 RLS\nALTER TABLE users ENABLE ROW LEVEL SECURITY;\nALTER TABLE orders ENABLE ROW LEVEL SECURITY;\nALTER TABLE products ENABLE ROW LEVEL SECURITY;\n```\n\n### 2. \u521B\u5EFA\u7B56\u7565\n```sql\n-- \u7528\u6237\u53EA\u80FD\u8BBF\u95EE\u81EA\u5DF1\u7684\u6570\u636E\nCREATE POLICY "Users can view own profile" ON users\n  FOR SELECT USING (auth.uid() = id);\n\nCREATE POLICY "Users can update own profile" ON users\n  FOR UPDATE USING (auth.uid() = id);\n\n-- \u7528\u6237\u53EA\u80FD\u521B\u5EFA\u81EA\u5DF1\u7684\u8BA2\u5355\nCREATE POLICY "Users can create own orders" ON orders\n  FOR INSERT WITH CHECK (auth.uid() = user_id);\n\n-- \u7528\u6237\u53EA\u80FD\u67E5\u770B\u81EA\u5DF1\u7684\u8BA2\u5355\nCREATE POLICY "Users can view own orders" ON orders\n  FOR SELECT USING (auth.uid() = user_id);\n```\n\n## \u{1F3D7}\uFE0F \u7B56\u7565\u6A21\u5F0F\n\n### 1. \u57FA\u4E8E\u7528\u6237 ID \u7684\u7B56\u7565\n```sql\n-- \u7528\u6237\u8868\u7B56\u7565\nCREATE POLICY "Users can manage own data" ON users\n  FOR ALL USING (auth.uid() = id);\n\n-- \u8BA2\u5355\u8868\u7B56\u7565\nCREATE POLICY "Users can manage own orders" ON orders\n  FOR ALL USING (auth.uid() = user_id);\n\n-- \u4EA7\u54C1\u8868\u7B56\u7565\uFF08\u53EA\u8BFB\uFF09\nCREATE POLICY "Users can view products" ON products\n  FOR SELECT USING (true);\n```\n\n### 2. \u57FA\u4E8E\u89D2\u8272\u7684\u7B56\u7565\n```sql\n-- \u7BA1\u7406\u5458\u7B56\u7565\nCREATE POLICY "Admins can manage all data" ON users\n  FOR ALL USING (\n    EXISTS (\n      SELECT 1 FROM user_roles \n      WHERE user_id = auth.uid() \n      AND role = \'admin\'\n    )\n  );\n\n-- \u666E\u901A\u7528\u6237\u7B56\u7565\nCREATE POLICY "Users can view public data" ON products\n  FOR SELECT USING (is_public = true);\n```\n\n### 3. \u57FA\u4E8E\u72B6\u6001\u7684\u7B56\u7565\n```sql\n-- \u6D3B\u8DC3\u7528\u6237\u7B56\u7565\nCREATE POLICY "Active users can access premium features" ON premium_content\n  FOR SELECT USING (\n    EXISTS (\n      SELECT 1 FROM users \n      WHERE id = auth.uid() \n      AND is_active = true \n      AND subscription_status = \'active\'\n    )\n  );\n```\n\n## \u{1F510} \u9AD8\u7EA7\u7B56\u7565\n\n### 1. \u65F6\u95F4\u9650\u5236\u7B56\u7565\n```sql\n-- \u9650\u5236\u8BBF\u95EE\u65F6\u95F4\nCREATE POLICY "Business hours access" ON sensitive_data\n  FOR SELECT USING (\n    EXTRACT(HOUR FROM NOW()) BETWEEN 9 AND 17\n  );\n```\n\n### 2. \u5730\u7406\u4F4D\u7F6E\u7B56\u7565\n```sql\n-- \u57FA\u4E8E IP \u5730\u5740\u7684\u7B56\u7565\nCREATE POLICY "Local access only" ON internal_data\n  FOR SELECT USING (\n    inet_client_addr() <<= \'192.168.0.0/16\'\n  );\n```\n\n### 3. \u6570\u636E\u654F\u611F\u5EA6\u7B56\u7565\n```sql\n-- \u57FA\u4E8E\u6570\u636E\u654F\u611F\u5EA6\u7684\u7B56\u7565\nCREATE POLICY "Sensitive data access" ON user_profiles\n  FOR SELECT USING (\n    CASE \n      WHEN auth.uid() = user_id THEN true\n      WHEN is_public = true THEN true\n      WHEN EXISTS (\n        SELECT 1 FROM user_roles \n        WHERE user_id = auth.uid() \n        AND role IN (\'admin\', \'moderator\')\n      ) THEN true\n      ELSE false\n    END\n  );\n```\n\n## \u{1F9EA} \u6D4B\u8BD5\u7B56\u7565\n\n### 1. \u7B56\u7565\u6D4B\u8BD5\n```sql\n-- \u6D4B\u8BD5\u7528\u6237\u7B56\u7565\n-- \u4EE5\u7528\u6237\u8EAB\u4EFD\u8FDE\u63A5\nSET LOCAL ROLE authenticated;\nSET LOCAL "request.jwt.claim.sub" TO \'user-uuid\';\n\n-- \u6D4B\u8BD5\u67E5\u8BE2\nSELECT * FROM users WHERE id = \'user-uuid\';\nSELECT * FROM users WHERE id != \'user-uuid\'; -- \u5E94\u8BE5\u8FD4\u56DE\u7A7A\n```\n\n### 2. \u7B56\u7565\u9A8C\u8BC1\n```sql\n-- \u67E5\u770B\u8868\u7684\u7B56\u7565\nSELECT schemaname, tablename, policyname, permissive, roles, cmd, qual\nFROM pg_policies \nWHERE tablename = \'users\';\n\n-- \u67E5\u770B RLS \u72B6\u6001\nSELECT schemaname, tablename, rowsecurity \nFROM pg_tables \nWHERE tablename = \'users\';\n```\n\n## \u26A0\uFE0F \u6CE8\u610F\u4E8B\u9879\n\n### 1. \u6027\u80FD\u8003\u8651\n- \u7B56\u7565\u51FD\u6570\u5E94\u8BE5\u9AD8\u6548\u6267\u884C\n- \u907F\u514D\u590D\u6742\u7684\u5B50\u67E5\u8BE2\n- \u4F7F\u7528\u9002\u5F53\u7684\u7D22\u5F15\n\n### 2. \u8C03\u8BD5\u6280\u5DE7\n- \u4F7F\u7528 `EXPLAIN` \u5206\u6790\u7B56\u7565\u6267\u884C\n- \u68C0\u67E5\u7B56\u7565\u662F\u5426\u6309\u9884\u671F\u5DE5\u4F5C\n- \u9A8C\u8BC1\u7528\u6237\u6743\u9650\u8BBE\u7F6E\n\n### 3. \u5E38\u89C1\u9677\u9631\n- \u5FD8\u8BB0\u542F\u7528 RLS\n- \u7B56\u7565\u8FC7\u4E8E\u590D\u6742\n- \u6CA1\u6709\u6D4B\u8BD5\u6240\u6709\u573A\u666F\n\n## \u{1F4DA} \u76F8\u5173\u8D44\u6E90\n- [PostgreSQL RLS Documentation](https://www.postgresql.org/docs/current/ddl-rowsecurity.html)\n- [Supabase RLS Guide](https://supabase.com/docs/guides/auth/row-level-security)\n\n\n';

// src/prompts-loader.ts
var entries = [
  {
    id: "auth-nextjs",
    name: "Bootstrap Next.js app with Supabase Auth",
    description: "Official prompt for setting up Supabase Auth in Next.js",
    content: auth_nextjs_default
  },
  {
    id: "database-functions",
    name: "Database: Create functions",
    description: "Official prompt for database functions",
    content: database_functions_default
  },
  {
    id: "database-schema",
    name: "Database: Declarative Database Schema",
    description: "Official prompt for database schema design",
    content: database_schema_default
  },
  {
    id: "edge-functions",
    name: "Writing Supabase Edge Functions",
    description: "Official prompt for developing Edge Functions",
    content: edge_functions_default
  },
  {
    id: "frontend-best-practices",
    name: "Frontend Application Development Best Practices",
    description: "Comprehensive guide for frontend development best practices",
    content: frontend_best_practices_default
  },
  {
    id: "migrations",
    name: "Database: Create migration",
    description: "Official prompt for database migrations",
    content: migrations_default
  },
  {
    id: "postgres-style",
    name: "Postgres SQL Style Guide",
    description: "Official PostgreSQL SQL style guide",
    content: postgres_style_default
  },
  {
    id: "rls-policies",
    name: "Database: Create RLS policies",
    description: "Official prompt for Row Level Security policies",
    content: rls_policies_default
  }
];
var PromptsProvider = class {
  /**
   * 加载所有提示词文件
   */
  async getAllPrompts() {
    return entries.map(this.fromEntry);
  }
  /**
   * 根据文件名和内容生成资源对象
   */
  fromEntry = (entry) => ({
    name: entry.name,
    description: entry.description,
    content: entry.content
  });
};
var promptsProvider = new PromptsProvider();

// src/tools/polardb-tools.ts
function getPolarDBTools({ platform, projectId, readOnly }) {
  return {
    list_tables: bv({
      description: "List all tables in the database",
      parameters: z.object({
        schema: z.string().optional().default("public")
      }),
      async execute({ schema }) {
        const query = `
          SELECT 
            table_name,
            table_type,
            table_schema
          FROM information_schema.tables 
          WHERE table_schema = '${schema}'
          ORDER BY table_name
        `;
        const result = await platform.executeSql(projectId || "default", {
          query,
          read_only: true
        });
        return result;
      }
    }),
    execute_sql: bv({
      description: "Execute SQL query against the database",
      parameters: z.object({
        query: z.string().describe("SQL query to execute"),
        read_only: z.boolean().optional().default(true).describe("Whether the query is read-only")
      }),
      async execute({ query, read_only }) {
        if (readOnly && !read_only) {
          throw new Error("Server is configured in read-only mode. Cannot execute write operations.");
        }
        const finalReadOnly = readOnly ? true : read_only;
        const result = await platform.executeSql(projectId || "default", {
          query,
          read_only: finalReadOnly
        });
        return {
          data: result,
          rowCount: Array.isArray(result) ? result.length : 0,
          readOnly: finalReadOnly
        };
      }
    }),
    get_anon_key: bv({
      description: "Get the anonymous key for the project",
      parameters: z.object({}),
      async execute() {
        return await platform.getAnonKey(projectId || "default");
      }
    }),
    get_project_url: bv({
      description: "Get the project URL",
      parameters: z.object({}),
      async execute() {
        return await platform.getProjectUrl(projectId || "default");
      }
    }),
    list_storage_buckets: bv({
      description: "List all storage buckets",
      parameters: z.object({}),
      async execute() {
        return await platform.listAllBuckets(projectId || "default");
      }
    }),
    list_edge_functions: bv({
      description: "List all Edge Functions in the project",
      parameters: z.object({}),
      async execute() {
        return await platform.listEdgeFunctions(projectId || "default");
      }
    }),
    get_edge_function: bv({
      description: "Get a specific Edge Function by slug",
      parameters: z.object({
        slug: z.string().describe("The slug of the Edge Function")
      }),
      async execute({ slug }) {
        return await platform.getEdgeFunction(projectId || "default", slug);
      }
    }),
    deploy_edge_function: bv({
      description: "Deploy an Edge Function to a Supabase project. If the function already exists, this will create a new version.",
      parameters: z.object({
        name: z.string().describe("The name/slug of the Edge Function"),
        entrypoint_path: z.string().default("index.ts").describe("The entrypoint path for the function"),
        import_map_path: z.string().optional().describe("The import map path (optional)"),
        files: z.array(z.object({
          name: z.string().describe("The filename"),
          content: z.string().optional().describe("The file content (alternative to file_path)"),
          file_path: z.string().optional().describe("Local file path, alternative to content")
        })).describe("Array of files to deploy. Each file must have either content or file_path"),
        verify_jwt: z.boolean().optional().describe("Whether to enable JWT verification for this function")
      }),
      async execute({ name, entrypoint_path, import_map_path, files, verify_jwt }) {
        if (readOnly) {
          throw new Error("Cannot deploy Edge Functions in read-only mode");
        }
        const processedFiles = files.map((file) => {
          if (file.content) {
            return { name: file.name, content: file.content };
          } else if (file.file_path) {
            try {
              const content = (0, import_fs.readFileSync)(file.file_path, "utf-8");
              return { name: file.name, content };
            } catch (error) {
              throw new Error(`Failed to read file ${file.file_path}: ${error instanceof Error ? error.message : String(error)}`);
            }
          } else {
            throw new Error(`File ${file.name} must have either content or file_path`);
          }
        });
        return await platform.deployEdgeFunction(projectId || "default", {
          name,
          entrypoint_path,
          import_map_path,
          files: processedFiles,
          verify_jwt
        });
      }
    }),
    // Short name to keep polardb-supabase_* under 60 chars (Cursor MCP limit)
    list_ef_secrets: bv({
      description: "List all Edge Function secrets in the project",
      parameters: z.object({}),
      async execute() {
        return await platform.listSecrets(projectId || "default");
      }
    }),
    // Short name to keep polardb-supabase_* under 60 chars (Cursor MCP limit)
    create_ef_secrets: bv({
      description: "Create or update Edge Function secrets. Secrets are encrypted and stored securely.",
      parameters: z.object({
        secrets: z.array(z.object({
          name: z.string().describe("The name of the secret"),
          value: z.string().describe("The value of the secret (will be encrypted)")
        })).describe("Array of secrets to create or update")
      }),
      async execute({ secrets }) {
        if (readOnly) {
          throw new Error("Cannot create secrets in read-only mode");
        }
        return await platform.createSecrets(projectId || "default", secrets);
      }
    }),
    // Short name to keep polardb-supabase_* under 60 chars (Cursor MCP limit)
    delete_ef_secrets: bv({
      description: "Delete Edge Function secrets from the project",
      parameters: z.object({
        secret_names: z.array(z.string()).describe("Array of secret names to delete")
      }),
      async execute({ secret_names }) {
        if (readOnly) {
          throw new Error("Cannot delete secrets in read-only mode");
        }
        await platform.deleteSecrets(projectId || "default", secret_names);
        return { success: true, message: "Secrets deleted successfully" };
      }
    }),
    update_edge_function: bv({
      description: "Update an existing Edge Function configuration (e.g., enable/disable JWT verification).",
      parameters: z.object({
        function_slug: z.string().describe("The slug of the function to update"),
        verify_jwt: z.boolean().optional().describe("Whether to enable JWT verification for this function")
      }),
      async execute({ function_slug, verify_jwt }) {
        if (readOnly) {
          throw new Error("Cannot update Edge Functions in read-only mode");
        }
        if (verify_jwt === void 0) {
          throw new Error("At least one field to update must be provided (e.g., verify_jwt)");
        }
        return await platform.updateEdgeFunction(projectId || "default", function_slug, {
          verify_jwt
        });
      }
    }),
    get_best_practices: bv({
      description: "Get Supabase development best practices and prompts for use in IDE rules configuration",
      parameters: z.object({}),
      async execute() {
        try {
          const prompts = await promptsProvider.getAllPrompts();
          const content = [
            `# Supabase Development Best Practices`,
            ``,
            `> Total practices: ${prompts.length}`,
            ``,
            ...prompts.map((prompt) => [
              `## ${prompt.name}`,
              ``,
              prompt.description ? `**${prompt.description}**` : "",
              ``,
              prompt.content,
              ``,
              `---`,
              ``
            ].filter(Boolean).join("\n"))
          ].join("\n");
          return {
            content,
            count: prompts.length,
            usage: "Copy the content above and paste it into .cursor/rules or .qoder/rules"
          };
        } catch (error) {
          return {
            error: "Failed to get best practices",
            message: error instanceof Error ? error.message : String(error)
          };
        }
      }
    })
  };
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  getPolarDBTools
});
/*! Bundled license information:

uri-js/dist/es5/uri.all.js:
  (** @license URI.js v4.4.1 (c) 2011 Gary Court. License: http://github.com/garycourt/uri-js *)
*/
//# sourceMappingURL=polardb-tools.cjs.map