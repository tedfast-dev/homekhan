/**
 * app - v1.0.0 - 2024-11-02
 * 
 *
 * Copyright (c) 2024 huydang1920
 * Licensed MIT <https://raw.github.com/ngbp/ngbp/master/LICENSE>
 */

!function(a,b){"object"==typeof exports&&"undefined"!=typeof module?module.exports=b():"function"==typeof define&&define.amd?define("underscore",b):(a="undefined"!=typeof globalThis?globalThis:a||self,function(){var c=a._,d=a._=b();d.noConflict=function(){return a._=c,d}}())}(this,function(){function a(a,b){return b=null==b?a.length-1:+b,function(){for(var c=Math.max(arguments.length-b,0),d=Array(c),e=0;e<c;e++)d[e]=arguments[e+b];switch(b){case 0:return a.call(this,d);case 1:return a.call(this,arguments[0],d);case 2:return a.call(this,arguments[0],arguments[1],d)}var f=Array(b+1);for(e=0;e<b;e++)f[e]=arguments[e];return f[b]=d,a.apply(this,f)}}function b(a){var b=typeof a;return"function"===b||"object"===b&&!!a}function c(a){return void 0===a}function d(a){return!0===a||!1===a||"[object Boolean]"===ua.call(a)}function e(a){var b="[object "+a+"]";return function(a){return ua.call(a)===b}}function f(a,b){return null!=a&&va.call(a,b)}function g(a){return Ia(a)&&Ca(a)}function h(a){return function(){return a}}function i(a){return function(b){var c=a(b);return"number"==typeof c&&c>=0&&c<=Ga}}function j(a){return function(b){return null==b?void 0:b[a]}}function k(a,b){b=function(a){for(var b={},c=a.length,d=0;d<c;++d)b[a[d]]=!0;return{contains:function(a){return!0===b[a]},push:function(c){return b[c]=!0,a.push(c)}}}(b);var c=Fa.length,d=a.constructor,e=Qa(d)&&d.prototype||qa,g="constructor";for(f(a,g)&&!b.contains(g)&&b.push(g);c--;)(g=Fa[c])in a&&a[g]!==e[g]&&!b.contains(g)&&b.push(g)}function l(a){if(!b(a))return[];if(za)return za(a);var c=[];for(var d in a)f(a,d)&&c.push(d);return Ea&&k(a,c),c}function m(a,b){var c=l(b),d=c.length;if(null==a)return!d;for(var e=Object(a),f=0;f<d;f++){var g=c[f];if(b[g]!==e[g]||!(g in e))return!1}return!0}function n(a){return a instanceof n?a:this instanceof n?void(this._wrapped=a):new n(a)}function o(a){return new Uint8Array(a.buffer||a,a.byteOffset||0,Za(a))}function p(a,b,c,d){if(a===b)return 0!==a||1/a==1/b;if(null==a||null==b)return!1;if(a!=a)return b!=b;var e=typeof a;return("function"===e||"object"===e||"object"==typeof b)&&function a(b,c,d,e){b instanceof n&&(b=b._wrapped),c instanceof n&&(c=c._wrapped);var g=ua.call(b);if(g!==ua.call(c))return!1;if(Sa&&"[object Object]"==g&&Va(b)){if(!Va(c))return!1;g=cb}switch(g){case"[object RegExp]":case"[object String]":return""+b==""+c;case"[object Number]":return+b!=+b?+c!=+c:0==+b?1/+b==1/c:+b==+c;case"[object Date]":case"[object Boolean]":return+b==+c;case"[object Symbol]":return ra.valueOf.call(b)===ra.valueOf.call(c);case"[object ArrayBuffer]":case cb:return a(o(b),o(c),d,e)}var h="[object Array]"===g;if(!h&&ab(b)){if(Za(b)!==Za(c))return!1;if(b.buffer===c.buffer&&b.byteOffset===c.byteOffset)return!0;h=!0}if(!h){if("object"!=typeof b||"object"!=typeof c)return!1;var i=b.constructor,j=c.constructor;if(i!==j&&!(Qa(i)&&i instanceof i&&Qa(j)&&j instanceof j)&&"constructor"in b&&"constructor"in c)return!1}e=e||[];for(var k=(d=d||[]).length;k--;)if(d[k]===b)return e[k]===c;if(d.push(b),e.push(c),h){if((k=b.length)!==c.length)return!1;for(;k--;)if(!p(b[k],c[k],d,e))return!1}else{var m,q=l(b);if(k=q.length,l(c).length!==k)return!1;for(;k--;)if(m=q[k],!f(c,m)||!p(b[m],c[m],d,e))return!1}return d.pop(),e.pop(),!0}(a,b,c,d)}function q(a){if(!b(a))return[];var c=[];for(var d in a)c.push(d);return Ea&&k(a,c),c}function r(a){var b=bb(a);return function(c){if(null==c)return!1;var d=q(c);if(bb(d))return!1;for(var e=0;e<b;e++)if(!Qa(c[a[e]]))return!1;return a!==hb||!Qa(c[db])}}function s(a){for(var b=l(a),c=b.length,d=Array(c),e=0;e<c;e++)d[e]=a[b[e]];return d}function t(a){for(var b={},c=l(a),d=0,e=c.length;d<e;d++)b[a[c[d]]]=c[d];return b}function u(a){var b=[];for(var c in a)Qa(a[c])&&b.push(c);return b.sort()}function v(a,b){return function(c){var d=arguments.length;if(b&&(c=Object(c)),d<2||null==c)return c;for(var e=1;e<d;e++)for(var f=arguments[e],g=a(f),h=g.length,i=0;i<h;i++){var j=g[i];b&&void 0!==c[j]||(c[j]=f[j])}return c}}function w(a){if(!b(a))return{};if(Aa)return Aa(a);var c=function(){};c.prototype=a;var d=new c;return c.prototype=null,d}function x(a){return Wa(a)?a:[a]}function y(a){return n.toPath(a)}function z(a,b){for(var c=b.length,d=0;d<c;d++){if(null==a)return;a=a[b[d]]}return c?a:void 0}function A(a,b,d){var e=z(a,y(b));return c(e)?d:e}function B(a){return a}function C(a){return a=ob({},a),function(b){return m(b,a)}}function D(a){return a=y(a),function(b){return z(b,a)}}function E(a,b,c){if(void 0===b)return a;switch(null==c?3:c){case 1:return function(c){return a.call(b,c)};case 3:return function(c,d,e){return a.call(b,c,d,e)};case 4:return function(c,d,e,f){return a.call(b,c,d,e,f)}}return function(){return a.apply(b,arguments)}}function F(a,c,d){return null==a?B:Qa(a)?E(a,c,d):b(a)&&!Wa(a)?C(a):D(a)}function G(a,b){return F(a,b,1/0)}function H(a,b,c){return n.iteratee!==G?n.iteratee(a,b):F(a,b,c)}function I(){}function J(a,b){return null==b&&(b=a,a=0),a+Math.floor(Math.random()*(b-a+1))}function K(a){var b=function(b){return a[b]},c="(?:"+l(a).join("|")+")",d=RegExp(c),e=RegExp(c,"g");return function(a){return a=null==a?"":""+a,d.test(a)?a.replace(e,b):a}}function L(a){return"\\"+wb[a]}function M(a,c,d,e,f){if(!(e instanceof c))return a.apply(d,f);var g=w(a.prototype),h=a.apply(g,f);return b(h)?h:g}function N(a,b,c,d){if(d=d||[],b||0===b){if(b<=0)return d.concat(a)}else b=1/0;for(var e=d.length,f=0,g=bb(a);f<g;f++){var h=a[f];if(Cb(h)&&(Wa(h)||Ya(h)))if(b>1)N(h,b-1,c,d),e=d.length;else for(var i=0,j=h.length;i<j;)d[e++]=h[i++];else c||(d[e++]=h)}return d}function O(a){return function(){return!a.apply(this,arguments)}}function P(a,b){var c;return function(){return--a>0&&(c=b.apply(this,arguments)),a<=1&&(b=null),c}}function Q(a,b,c){b=H(b,c);for(var d,e=l(a),f=0,g=e.length;f<g;f++)if(b(a[d=e[f]],d,a))return d}function R(a){return function(b,c,d){c=H(c,d);for(var e=bb(b),f=a>0?0:e-1;f>=0&&f<e;f+=a)if(c(b[f],f,b))return f;return-1}}function S(a,b,c,d){for(var e=(c=H(c,d,1))(b),f=0,g=bb(a);f<g;){var h=Math.floor((f+g)/2);c(a[h])<e?f=h+1:g=h}return f}function T(a,b,c){return function(d,e,f){var h=0,i=bb(d);if("number"==typeof f)a>0?h=f>=0?f:Math.max(f+i,h):i=f>=0?Math.min(f+1,i):f+i+1;else if(c&&f&&i)return d[f=c(d,e)]===e?f:-1;if(e!=e)return(f=b(ta.call(d,h,i),g))>=0?f+h:-1;for(f=a>0?h:i-1;f>=0&&f<i;f+=a)if(d[f]===e)return f;return-1}}function U(a,b,c){var d=(Cb(a)?Hb:Q)(a,b,c);if(void 0!==d&&-1!==d)return a[d]}function V(a,b,c){var d,e;if(b=E(b,c),Cb(a))for(d=0,e=a.length;d<e;d++)b(a[d],d,a);else{var f=l(a);for(d=0,e=f.length;d<e;d++)b(a[f[d]],f[d],a)}return a}function W(a,b,c){b=H(b,c);for(var d=!Cb(a)&&l(a),e=(d||a).length,f=Array(e),g=0;g<e;g++){var h=d?d[g]:g;f[g]=b(a[h],h,a)}return f}function X(a){var b=function(b,c,d,e){var f=!Cb(b)&&l(b),g=(f||b).length,h=a>0?0:g-1;for(e||(d=b[f?f[h]:h],h+=a);h>=0&&h<g;h+=a){var i=f?f[h]:h;d=c(d,b[i],i,b)}return d};return function(a,c,d,e){var f=arguments.length>=3;return b(a,E(c,e,4),d,f)}}function Y(a,b,c){var d=[];return b=H(b,c),V(a,function(a,c,e){b(a,c,e)&&d.push(a)}),d}function Z(a,b,c){b=H(b,c);for(var d=!Cb(a)&&l(a),e=(d||a).length,f=0;f<e;f++){var g=d?d[f]:f;if(!b(a[g],g,a))return!1}return!0}function $(a,b,c){b=H(b,c);for(var d=!Cb(a)&&l(a),e=(d||a).length,f=0;f<e;f++){var g=d?d[f]:f;if(b(a[g],g,a))return!0}return!1}function _(a,b,c,d){return Cb(a)||(a=s(a)),("number"!=typeof c||d)&&(c=0),Jb(a,b,c)>=0}function aa(a,b){return W(a,D(b))}function ba(a,b,c){var d,e,f=-1/0,g=-1/0;if(null==b||"number"==typeof b&&"object"!=typeof a[0]&&null!=a)for(var h=0,i=(a=Cb(a)?a:s(a)).length;h<i;h++)null!=(d=a[h])&&d>f&&(f=d);else b=H(b,c),V(a,function(a,c,d){((e=b(a,c,d))>g||e===-1/0&&f===-1/0)&&(f=a,g=e)});return f}function ca(a){return a?Wa(a)?ta.call(a):Ha(a)?a.match(Ob):Cb(a)?W(a,B):s(a):[]}function da(a,b,c){if(null==b||c)return Cb(a)||(a=s(a)),a[J(a.length-1)];var d=ca(a),e=bb(d);b=Math.max(Math.min(b,e),0);for(var f=e-1,g=0;g<b;g++){var h=J(g,f),i=d[g];d[g]=d[h],d[h]=i}return d.slice(0,b)}function ea(a,b){return function(c,d,e){var f=b?[[],[]]:{};return d=H(d,e),V(c,function(b,e){var g=d(b,e,c);a(f,b,g)}),f}}function fa(a,b,c){return b in c}function ga(a,b,c){return ta.call(a,0,Math.max(0,a.length-(null==b||c?1:b)))}function ha(a,b,c){return null==a||a.length<1?null==b||c?void 0:[]:null==b||c?a[0]:ga(a,a.length-b)}function ia(a,b,c){return ta.call(a,null==b||c?1:b)}function ja(a,b,c,e){d(b)||(e=c,c=b,b=!1),null!=c&&(c=H(c,e));for(var f=[],g=[],h=0,i=bb(a);h<i;h++){var j=a[h],k=c?c(j,h,a):j;b&&!c?(h&&g===k||f.push(j),g=k):c?_(g,k)||(g.push(k),f.push(j)):_(f,j)||f.push(j)}return f}function ka(a){for(var b=a&&ba(a,bb).length||0,c=Array(b),d=0;d<b;d++)c[d]=aa(a,d);return c}function la(a,b){return a._chain?n(b).chain():b}function ma(a){return V(u(a),function(b){var c=n[b]=a[b];n.prototype[b]=function(){var a=[this._wrapped];return sa.apply(a,arguments),la(this,c.apply(n,a))}}),n}var na="1.13.6",oa="object"==typeof self&&self.self===self&&self||"object"==typeof global&&global.global===global&&global||Function("return this")()||{},pa=Array.prototype,qa=Object.prototype,ra="undefined"!=typeof Symbol?Symbol.prototype:null,sa=pa.push,ta=pa.slice,ua=qa.toString,va=qa.hasOwnProperty,wa="undefined"!=typeof ArrayBuffer,xa="undefined"!=typeof DataView,ya=Array.isArray,za=Object.keys,Aa=Object.create,Ba=wa&&ArrayBuffer.isView,Ca=isNaN,Da=isFinite,Ea=!{toString:null}.propertyIsEnumerable("toString"),Fa=["valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"],Ga=Math.pow(2,53)-1,Ha=e("String"),Ia=e("Number"),Ja=e("Date"),Ka=e("RegExp"),La=e("Error"),Ma=e("Symbol"),Na=e("ArrayBuffer"),Oa=e("Function"),Pa=oa.document&&oa.document.childNodes;"function"!=typeof/./&&"object"!=typeof Int8Array&&"function"!=typeof Pa&&(Oa=function(a){return"function"==typeof a||!1});var Qa=Oa,Ra=e("Object"),Sa=xa&&Ra(new DataView(new ArrayBuffer(8))),Ta="undefined"!=typeof Map&&Ra(new Map),Ua=e("DataView"),Va=Sa?function(a){return null!=a&&Qa(a.getInt8)&&Na(a.buffer)}:Ua,Wa=ya||e("Array"),Xa=e("Arguments");!function(){Xa(arguments)||(Xa=function(a){return f(a,"callee")})}();var Ya=Xa,Za=j("byteLength"),$a=i(Za),_a=/\[object ((I|Ui)nt(8|16|32)|Float(32|64)|Uint8Clamped|Big(I|Ui)nt64)Array\]/,ab=wa?function(a){return Ba?Ba(a)&&!Va(a):$a(a)&&_a.test(ua.call(a))}:h(!1),bb=j("length");n.VERSION=na,n.prototype.value=function(){return this._wrapped},n.prototype.valueOf=n.prototype.toJSON=n.prototype.value,n.prototype.toString=function(){return String(this._wrapped)};var cb="[object DataView]",db="forEach",eb=["clear","delete"],fb=["get","has","set"],gb=eb.concat(db,fb),hb=eb.concat(fb),ib=["add"].concat(eb,db,"has"),jb=Ta?r(gb):e("Map"),kb=Ta?r(hb):e("WeakMap"),lb=Ta?r(ib):e("Set"),mb=e("WeakSet"),nb=v(q),ob=v(l),pb=v(q,!0);n.toPath=x,n.iteratee=G;var qb=Date.now||function(){return(new Date).getTime()},rb={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},sb=K(rb),tb=K(t(rb)),ub=n.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g},vb=/(.)^/,wb={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},xb=/\\|'|\r|\n|\u2028|\u2029/g,yb=/^\s*(\w|\$)+\s*$/,zb=0,Ab=a(function(a,b){var c=Ab.placeholder,d=function(){for(var e=0,f=b.length,g=Array(f),h=0;h<f;h++)g[h]=b[h]===c?arguments[e++]:b[h];for(;e<arguments.length;)g.push(arguments[e++]);return M(a,d,this,this,g)};return d});Ab.placeholder=n;var Bb=a(function(b,c,d){if(!Qa(b))throw new TypeError("Bind must be called on a function");var e=a(function(a){return M(b,e,c,this,d.concat(a))});return e}),Cb=i(bb),Db=a(function(a,b){var c=(b=N(b,!1,!1)).length;if(c<1)throw new Error("bindAll must be passed function names");for(;c--;){var d=b[c];a[d]=Bb(a[d],a)}return a}),Eb=a(function(a,b,c){return setTimeout(function(){return a.apply(null,c)},b)}),Fb=Ab(Eb,n,1),Gb=Ab(P,2),Hb=R(1),Ib=R(-1),Jb=T(1,Hb,S),Kb=T(-1,Ib),Lb=X(1),Mb=X(-1),Nb=a(function(a,b,c){var d,e;return Qa(b)?e=b:(b=y(b),d=b.slice(0,-1),b=b[b.length-1]),W(a,function(a){var f=e;if(!f){if(d&&d.length&&(a=z(a,d)),null==a)return;f=a[b]}return null==f?f:f.apply(a,c)})}),Ob=/[^\ud800-\udfff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff]/g,Pb=ea(function(a,b,c){f(a,c)?a[c].push(b):a[c]=[b]}),Qb=ea(function(a,b,c){a[c]=b}),Rb=ea(function(a,b,c){f(a,c)?a[c]++:a[c]=1}),Sb=ea(function(a,b,c){a[c?0:1].push(b)},!0),Tb=a(function(a,b){var c={},d=b[0];if(null==a)return c;Qa(d)?(b.length>1&&(d=E(d,b[1])),b=q(a)):(d=fa,b=N(b,!1,!1),a=Object(a));for(var e=0,f=b.length;e<f;e++){var g=b[e],h=a[g];d(h,g,a)&&(c[g]=h)}return c}),Ub=a(function(a,b){var c,d=b[0];return Qa(d)?(d=O(d),b.length>1&&(c=b[1])):(b=W(N(b,!1,!1),String),d=function(a,c){return!_(b,c)}),Tb(a,d,c)}),Vb=a(function(a,b){return b=N(b,!0,!0),Y(a,function(a){return!_(b,a)})}),Wb=a(function(a,b){return Vb(a,b)}),Xb=a(function(a){return ja(N(a,!0,!0))}),Yb=a(ka);V(["pop","push","reverse","shift","sort","splice","unshift"],function(a){var b=pa[a];n.prototype[a]=function(){var c=this._wrapped;return null!=c&&(b.apply(c,arguments),"shift"!==a&&"splice"!==a||0!==c.length||delete c[0]),la(this,c)}}),V(["concat","join","slice"],function(a){var b=pa[a];n.prototype[a]=function(){var a=this._wrapped;return null!=a&&(a=b.apply(a,arguments)),la(this,a)}});var Zb=ma({__proto__:null,VERSION:na,restArguments:a,isObject:b,isNull:function(a){return null===a},isUndefined:c,isBoolean:d,isElement:function(a){return!(!a||1!==a.nodeType)},isString:Ha,isNumber:Ia,isDate:Ja,isRegExp:Ka,isError:La,isSymbol:Ma,isArrayBuffer:Na,isDataView:Va,isArray:Wa,isFunction:Qa,isArguments:Ya,isFinite:function(a){return!Ma(a)&&Da(a)&&!isNaN(parseFloat(a))},isNaN:g,isTypedArray:ab,isEmpty:function(a){if(null==a)return!0;var b=bb(a);return"number"==typeof b&&(Wa(a)||Ha(a)||Ya(a))?0===b:0===bb(l(a))},isMatch:m,isEqual:function(a,b){return p(a,b)},isMap:jb,isWeakMap:kb,isSet:lb,isWeakSet:mb,keys:l,allKeys:q,values:s,pairs:function(a){for(var b=l(a),c=b.length,d=Array(c),e=0;e<c;e++)d[e]=[b[e],a[b[e]]];return d},invert:t,functions:u,methods:u,extend:nb,extendOwn:ob,assign:ob,defaults:pb,create:function(a,b){var c=w(a);return b&&ob(c,b),c},clone:function(a){return b(a)?Wa(a)?a.slice():nb({},a):a},tap:function(a,b){return b(a),a},get:A,has:function(a,b){for(var c=(b=y(b)).length,d=0;d<c;d++){var e=b[d];if(!f(a,e))return!1;a=a[e]}return!!c},mapObject:function(a,b,c){b=H(b,c);for(var d=l(a),e=d.length,f={},g=0;g<e;g++){var h=d[g];f[h]=b(a[h],h,a)}return f},identity:B,constant:h,noop:I,toPath:x,property:D,propertyOf:function(a){return null==a?I:function(b){return A(a,b)}},matcher:C,matches:C,times:function(a,b,c){var d=Array(Math.max(0,a));b=E(b,c,1);for(var e=0;e<a;e++)d[e]=b(e);return d},random:J,now:qb,escape:sb,unescape:tb,templateSettings:ub,template:function(a,b,c){!b&&c&&(b=c),b=pb({},b,n.templateSettings);var d=RegExp([(b.escape||vb).source,(b.interpolate||vb).source,(b.evaluate||vb).source].join("|")+"|$","g"),e=0,f="__p+='";a.replace(d,function(b,c,d,g,h){return f+=a.slice(e,h).replace(xb,L),e=h+b.length,c?f+="'+\n((__t=("+c+"))==null?'':_.escape(__t))+\n'":d?f+="'+\n((__t=("+d+"))==null?'':__t)+\n'":g&&(f+="';\n"+g+"\n__p+='"),b}),f+="';\n";var g,h=b.variable;if(h){if(!yb.test(h))throw new Error("variable is not a bare identifier: "+h)}else f="with(obj||{}){\n"+f+"}\n",h="obj";f="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+f+"return __p;\n";try{g=new Function(h,"_",f)}catch(a){throw a.source=f,a}var i=function(a){return g.call(this,a,n)};return i.source="function("+h+"){\n"+f+"}",i},result:function(a,b,c){var d=(b=y(b)).length;if(!d)return Qa(c)?c.call(a):c;for(var e=0;e<d;e++){var f=null==a?void 0:a[b[e]];void 0===f&&(f=c,e=d),a=Qa(f)?f.call(a):f}return a},uniqueId:function(a){var b=++zb+"";return a?a+b:b},chain:function(a){var b=n(a);return b._chain=!0,b},iteratee:G,partial:Ab,bind:Bb,bindAll:Db,memoize:function(a,b){var c=function(d){var e=c.cache,g=""+(b?b.apply(this,arguments):d);return f(e,g)||(e[g]=a.apply(this,arguments)),e[g]};return c.cache={},c},delay:Eb,defer:Fb,throttle:function(a,b,c){var d,e,f,g,h=0;c||(c={});var i=function(){h=!1===c.leading?0:qb(),d=null,g=a.apply(e,f),d||(e=f=null)},j=function(){var j=qb();h||!1!==c.leading||(h=j);var k=b-(j-h);return e=this,f=arguments,k<=0||k>b?(d&&(clearTimeout(d),d=null),h=j,g=a.apply(e,f),d||(e=f=null)):d||!1===c.trailing||(d=setTimeout(i,k)),g};return j.cancel=function(){clearTimeout(d),h=0,d=e=f=null},j},debounce:function(b,c,d){var e,f,g,h,i,j=function(){var a=qb()-f;c>a?e=setTimeout(j,c-a):(e=null,d||(h=b.apply(i,g)),e||(g=i=null))},k=a(function(a){return i=this,g=a,f=qb(),e||(e=setTimeout(j,c),d&&(h=b.apply(i,g))),h});return k.cancel=function(){clearTimeout(e),e=g=i=null},k},wrap:function(a,b){return Ab(b,a)},negate:O,compose:function(){var a=arguments,b=a.length-1;return function(){for(var c=b,d=a[b].apply(this,arguments);c--;)d=a[c].call(this,d);return d}},after:function(a,b){return function(){if(--a<1)return b.apply(this,arguments)}},before:P,once:Gb,findKey:Q,findIndex:Hb,findLastIndex:Ib,sortedIndex:S,indexOf:Jb,lastIndexOf:Kb,find:U,detect:U,findWhere:function(a,b){return U(a,C(b))},each:V,forEach:V,map:W,collect:W,reduce:Lb,foldl:Lb,inject:Lb,reduceRight:Mb,foldr:Mb,filter:Y,select:Y,reject:function(a,b,c){return Y(a,O(H(b)),c)},every:Z,all:Z,some:$,any:$,contains:_,includes:_,include:_,invoke:Nb,pluck:aa,where:function(a,b){return Y(a,C(b))},max:ba,min:function(a,b,c){var d,e,f=1/0,g=1/0;if(null==b||"number"==typeof b&&"object"!=typeof a[0]&&null!=a)for(var h=0,i=(a=Cb(a)?a:s(a)).length;h<i;h++)null!=(d=a[h])&&d<f&&(f=d);else b=H(b,c),V(a,function(a,c,d){((e=b(a,c,d))<g||e===1/0&&f===1/0)&&(f=a,g=e)});return f},shuffle:function(a){return da(a,1/0)},sample:da,sortBy:function(a,b,c){var d=0;return b=H(b,c),aa(W(a,function(a,c,e){return{value:a,index:d++,criteria:b(a,c,e)}}).sort(function(a,b){var c=a.criteria,d=b.criteria;if(c!==d){if(c>d||void 0===c)return 1;if(c<d||void 0===d)return-1}return a.index-b.index}),"value")},groupBy:Pb,indexBy:Qb,countBy:Rb,partition:Sb,toArray:ca,size:function(a){return null==a?0:Cb(a)?a.length:l(a).length},pick:Tb,omit:Ub,first:ha,head:ha,take:ha,initial:ga,last:function(a,b,c){return null==a||a.length<1?null==b||c?void 0:[]:null==b||c?a[a.length-1]:ia(a,Math.max(0,a.length-b))},rest:ia,tail:ia,drop:ia,compact:function(a){return Y(a,Boolean)},flatten:function(a,b){return N(a,b,!1)},without:Wb,uniq:ja,unique:ja,union:Xb,intersection:function(a){for(var b=[],c=arguments.length,d=0,e=bb(a);d<e;d++){var f=a[d];if(!_(b,f)){var g;for(g=1;g<c&&_(arguments[g],f);g++);g===c&&b.push(f)}}return b},difference:Vb,unzip:ka,transpose:ka,zip:Yb,object:function(a,b){for(var c={},d=0,e=bb(a);d<e;d++)b?c[a[d]]=b[d]:c[a[d][0]]=a[d][1];return c},range:function(a,b,c){null==b&&(b=a||0,a=0),c||(c=b<a?-1:1);for(var d=Math.max(Math.ceil((b-a)/c),0),e=Array(d),f=0;f<d;f++,a+=c)e[f]=a;return e},chunk:function(a,b){if(null==b||b<1)return[];for(var c=[],d=0,e=a.length;d<e;)c.push(ta.call(a,d,d+=b));return c},mixin:ma,default:n});return Zb._=Zb,Zb}),function(a){"use strict";function b(a,b){return b=b||Error,function(){var c,d=arguments[0];for(c="["+(a?a+":":"")+d+"] http://errors.angularjs.org/1.5.11/"+(a?a+"/":"")+d,d=1;d<arguments.length;d++){c=c+(1==d?"?":"&")+"p"+(d-1)+"=";var e,f=encodeURIComponent;e=arguments[d],e="function"==typeof e?e.toString().replace(/ \{[\s\S]*$/,""):void 0===e?"undefined":"string"!=typeof e?JSON.stringify(e):e,c+=f(e)}return new b(c)}}function c(a){if(null==a||z(a))return!1;if(hd(a)||u(a)||Tc&&a instanceof Tc)return!0;var b="length"in Object(a)&&a.length;return v(b)&&(0<=b&&(b-1 in a||a instanceof Array)||"function"==typeof a.item)}function d(a,b,e){var f,g;if(a)if(x(a))for(f in a)"prototype"===f||"length"===f||"name"===f||a.hasOwnProperty&&!a.hasOwnProperty(f)||b.call(e,a[f],f,a);else if(hd(a)||c(a)){var h="object"!=typeof a;for(f=0,g=a.length;f<g;f++)(h||f in a)&&b.call(e,a[f],f,a)}else if(a.forEach&&a.forEach!==d)a.forEach(b,e,a);else if(t(a))for(f in a)b.call(e,a[f],f,a);else if("function"==typeof a.hasOwnProperty)for(f in a)a.hasOwnProperty(f)&&b.call(e,a[f],f,a);else for(f in a)Xc.call(a,f)&&b.call(e,a[f],f,a);return a}function e(a,b,c){for(var d=Object.keys(a).sort(),e=0;e<d.length;e++)b.call(c,a[d[e]],d[e]);return d}function f(a){return function(b,c){a(c,b)}}function g(){return++fd}function h(a,b,c){for(var d=a.$$hashKey,e=0,f=b.length;e<f;++e){var g=b[e];if(s(g)||x(g))for(var i=Object.keys(g),j=0,k=i.length;j<k;j++){var l=i[j],m=g[l];c&&s(m)?w(m)?a[l]=new Date(m.valueOf()):y(m)?a[l]=new RegExp(m):m.nodeName?a[l]=m.cloneNode(!0):D(m)?a[l]=m.clone():(s(a[l])||(a[l]=hd(m)?[]:{}),h(a[l],[m],!0)):a[l]=m}}return d?a.$$hashKey=d:delete a.$$hashKey,a}function i(a){return h(a,$c.call(arguments,1),!1)}function j(a){return h(a,$c.call(arguments,1),!0)}function k(a){return parseInt(a,10)}function l(a,b){return i(Object.create(a),b)}function m(){}function n(a){return a}function o(a){return function(){return a}}function p(a){return x(a.toString)&&a.toString!==bd}function q(a){return void 0===a}function r(a){return void 0!==a}function s(a){return null!==a&&"object"==typeof a}function t(a){return null!==a&&"object"==typeof a&&!cd(a)}function u(a){return"string"==typeof a}function v(a){return"number"==typeof a}function w(a){return"[object Date]"===bd.call(a)}function x(a){return"function"==typeof a}function y(a){return"[object RegExp]"===bd.call(a)}function z(a){return a&&a.window===a}function A(a){return a&&a.$evalAsync&&a.$watch}function B(a){return"boolean"==typeof a}function C(a){return a&&v(a.length)&&id.test(bd.call(a))}function D(a){return!(!a||!(a.nodeName||a.prop&&a.attr&&a.find))}function E(a){var b={};a=a.split(",");var c;for(c=0;c<a.length;c++)b[a[c]]=!0;return b}function F(a){return Yc(a.nodeName||a[0]&&a[0].nodeName)}function G(a,b){var c=a.indexOf(b);return 0<=c&&a.splice(c,1),c}function H(a,b){function c(a,b){var c,d=b.$$hashKey;if(hd(a)){c=0;for(var f=a.length;c<f;c++)b.push(e(a[c]))}else if(t(a))for(c in a)b[c]=e(a[c]);else if(a&&"function"==typeof a.hasOwnProperty)for(c in a)a.hasOwnProperty(c)&&(b[c]=e(a[c]));else for(c in a)Xc.call(a,c)&&(b[c]=e(a[c]));return d?b.$$hashKey=d:delete b.$$hashKey,b}function e(a){if(!s(a))return a;var b=g.indexOf(a);if(-1!==b)return h[b];if(z(a)||A(a))throw dd("cpws");var b=!1,d=f(a);return void 0===d&&(d=hd(a)?[]:Object.create(cd(a)),b=!0),g.push(a),h.push(d),b?c(a,d):d}function f(a){switch(bd.call(a)){case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Float32Array]":case"[object Float64Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return new a.constructor(e(a.buffer),a.byteOffset,a.length);case"[object ArrayBuffer]":if(!a.slice){var b=new ArrayBuffer(a.byteLength);return new Uint8Array(b).set(new Uint8Array(a)),b}return a.slice(0);case"[object Boolean]":case"[object Number]":case"[object String]":case"[object Date]":return new a.constructor(a.valueOf());case"[object RegExp]":return b=new RegExp(a.source,a.toString().match(/[^/]*$/)[0]),b.lastIndex=a.lastIndex,b;case"[object Blob]":return new a.constructor([a],{type:a.type})}if(x(a.cloneNode))return a.cloneNode(!0)}var g=[],h=[];if(b){if(C(b)||"[object ArrayBuffer]"===bd.call(b))throw dd("cpta");if(a===b)throw dd("cpi");return hd(b)?b.length=0:d(b,function(a,c){"$$hashKey"!==c&&delete b[c]}),g.push(a),h.push(b),c(a,b)}return e(a)}function I(a,b){if(a===b)return!0;if(null===a||null===b)return!1;if(a!==a&&b!==b)return!0;var c,d=typeof a;if(d===typeof b&&"object"===d){if(!hd(a)){if(w(a))return!!w(b)&&I(a.getTime(),b.getTime());if(y(a))return!!y(b)&&a.toString()===b.toString();if(A(a)||A(b)||z(a)||z(b)||hd(b)||w(b)||y(b))return!1;d=fa();for(c in a)if("$"!==c.charAt(0)&&!x(a[c])){if(!I(a[c],b[c]))return!1;d[c]=!0}for(c in b)if(!(c in d)&&"$"!==c.charAt(0)&&r(b[c])&&!x(b[c]))return!1;return!0}if(!hd(b))return!1;if((d=a.length)===b.length){for(c=0;c<d;c++)if(!I(a[c],b[c]))return!1;return!0}}return!1}function J(a,b,c){return a.concat($c.call(b,c))}function K(a,b){var c=2<arguments.length?$c.call(arguments,2):[];return!x(b)||b instanceof RegExp?b:c.length?function(){return arguments.length?b.apply(a,J(c,arguments,0)):b.apply(a,c)}:function(){return arguments.length?b.apply(a,arguments):b.call(a)}}function L(b,c){var d=c;return"string"==typeof b&&"$"===b.charAt(0)&&"$"===b.charAt(1)?d=void 0:z(c)?d="$WINDOW":c&&a.document===c?d="$DOCUMENT":A(c)&&(d="$SCOPE"),d}function M(a,b){if(!q(a))return v(b)||(b=b?2:null),JSON.stringify(a,L,b)}function N(a){return u(a)?JSON.parse(a):a}function O(a,b){a=a.replace(nd,"");var c=Date.parse("Jan 01, 1970 00:00:00 "+a)/6e4;return gd(c)?b:c}function P(a,b,c){c=c?-1:1;var d=a.getTimezoneOffset();return b=O(b,d),c*=b-d,a=new Date(a.getTime()),a.setMinutes(a.getMinutes()+c),a}function Q(a){a=Tc(a).clone();try{a.empty()}catch(a){}var b=Tc("<div>").append(a).html();try{return a[0].nodeType===sd?Yc(b):b.match(/^(<[^>]+>)/)[1].replace(/^<([\w-]+)/,function(a,b){return"<"+Yc(b)})}catch(a){return Yc(b)}}function R(a){try{return decodeURIComponent(a)}catch(a){}}function S(a){var b={};return d((a||"").split("&"),function(a){var c,d,e;a&&(d=a=a.replace(/\+/g,"%20"),c=a.indexOf("="),-1!==c&&(d=a.substring(0,c),e=a.substring(c+1)),d=R(d),r(d)&&(e=!r(e)||R(e),Xc.call(b,d)?hd(b[d])?b[d].push(e):b[d]=[b[d],e]:b[d]=e))}),b}function T(a){var b=[];return d(a,function(a,c){hd(a)?d(a,function(a){b.push(V(c,!0)+(!0===a?"":"="+V(a,!0)))}):b.push(V(c,!0)+(!0===a?"":"="+V(a,!0)))}),b.length?b.join("&"):""}function U(a){return V(a,!0).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+")}function V(a,b){return encodeURIComponent(a).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%3B/gi,";").replace(/%20/g,b?"%20":"+")}function W(a,b){var c,d,e=od.length;for(d=0;d<e;++d)if(c=od[d]+b,u(c=a.getAttribute(c)))return c;return null}function X(b,c){var e,f,g={};d(od,function(a){a+="app",!e&&b.hasAttribute&&b.hasAttribute(a)&&(e=b,f=b.getAttribute(a))}),d(od,function(a){a+="app";var c;!e&&(c=b.querySelector("["+a.replace(":","\\:")+"]"))&&(e=c,f=c.getAttribute(a))}),e&&(pd?(g.strictDi=null!==W(e,"strict-di"),c(e,f?[f]:[],g)):a.console.error("Angular: disabling automatic bootstrap. <script> protocol indicates an extension, document.location.href does not match."))}function Y(b,c,e){s(e)||(e={}),e=i({strictDi:!1},e);var f=function(){if(b=Tc(b),b.injector()){var d=b[0]===a.document?"document":Q(b);throw dd("btstrpd",d.replace(/</,"&lt;").replace(/>/,"&gt;"))}return c=c||[],c.unshift(["$provide",function(a){a.value("$rootElement",b)}]),e.debugInfoEnabled&&c.push(["$compileProvider",function(a){a.debugInfoEnabled(!0)}]),c.unshift("ng"),d=La(c,e.strictDi),d.invoke(["$rootScope","$rootElement","$compile","$injector",function(a,b,c,d){a.$apply(function(){b.data("$injector",d),c(b)(a)})}]),d},g=/^NG_ENABLE_DEBUG_INFO!/,h=/^NG_DEFER_BOOTSTRAP!/;if(a&&g.test(a.name)&&(e.debugInfoEnabled=!0,a.name=a.name.replace(g,"")),a&&!h.test(a.name))return f();a.name=a.name.replace(h,""),ed.resumeBootstrap=function(a){return d(a,function(a){c.push(a)}),f()},x(ed.resumeDeferredBootstrap)&&ed.resumeDeferredBootstrap()}function Z(){a.name="NG_ENABLE_DEBUG_INFO!"+a.name,a.location.reload()}function $(a){if(!(a=ed.element(a).injector()))throw dd("test");return a.get("$$testability")}function _(a,b){return b=b||"_",a.replace(qd,function(a,c){return(c?b:"")+a.toLowerCase()})}function aa(a,b,c){if(!a)throw dd("areq",b||"?",c||"required");return a}function ba(a,b,c){return c&&hd(a)&&(a=a[a.length-1]),aa(x(a),b,"not a function, got "+(a&&"object"==typeof a?a.constructor.name||"Object":typeof a)),a}function ca(a,b){if("hasOwnProperty"===a)throw dd("badname",b)}function da(a,b,c){if(!b)return a;b=b.split(".");for(var d,e=a,f=b.length,g=0;g<f;g++)d=b[g],a&&(a=(e=a)[d]);return!c&&x(a)?K(e,a):a}function ea(a){for(var b,c=a[0],d=a[a.length-1],e=1;c!==d&&(c=c.nextSibling);e++)(b||a[e]!==c)&&(b||(b=Tc($c.call(a,0,e))),b.push(c));return b||a}function fa(){return Object.create(null)}function ga(a){function c(a,b,c){return a[b]||(a[b]=c())}var d=b("$injector"),e=b("ng");return a=c(a,"angular",Object),a.$$minErr=a.$$minErr||b,c(a,"module",function(){var a={};return function(b,f,g){if("hasOwnProperty"===b)throw e("badname","module");return f&&a.hasOwnProperty(b)&&(a[b]=null),c(a,b,function(){function a(a,b,c,d){return d||(d=e),function(){return d[c||"push"]([a,b,arguments]),k}}function c(a,c){return function(d,f){return f&&x(f)&&(f.$$moduleName=b),e.push([a,c,arguments]),k}}if(!f)throw d("nomod",b);var e=[],h=[],i=[],j=a("$injector","invoke","push",h),k={_invokeQueue:e,_configBlocks:h,_runBlocks:i,requires:f,name:b,provider:c("$provide","provider"),factory:c("$provide","factory"),service:c("$provide","service"),value:a("$provide","value"),constant:a("$provide","constant","unshift"),decorator:c("$provide","decorator"),animation:c("$animateProvider","register"),filter:c("$filterProvider","register"),controller:c("$controllerProvider","register"),directive:c("$compileProvider","directive"),component:c("$compileProvider","component"),config:j,run:function(a){return i.push(a),this}};return g&&j(g),k})}})}function ha(a,b){if(hd(a)){b=b||[];for(var c=0,d=a.length;c<d;c++)b[c]=a[c]}else if(s(a))for(c in b=b||{},a)"$"===c.charAt(0)&&"$"===c.charAt(1)||(b[c]=a[c]);return b||a}function ia(a){return a.replace(wd,function(a,b,c,d){return d?c.toUpperCase():c}).replace(xd,"Moz$1")}function ja(a){return 1===(a=a.nodeType)||!a||9===a}function ka(a,b){var c,e,f=b.createDocumentFragment(),g=[];if(Bd.test(a)){for(c=f.appendChild(b.createElement("div")),e=(Cd.exec(a)||["",""])[1].toLowerCase(),e=Ed[e]||Ed._default,c.innerHTML=e[1]+a.replace(Dd,"<$1></$2>")+e[2],e=e[0];e--;)c=c.lastChild;g=J(g,c.childNodes),c=f.firstChild,c.textContent=""}else g.push(b.createTextNode(a));return f.textContent="",f.innerHTML="",d(g,function(a){f.appendChild(a)}),f}function la(a,b){var c=a.parentNode;c&&c.replaceChild(b,a),b.appendChild(a)}function ma(b){if(b instanceof ma)return b;var c;if(u(b)&&(b=jd(b),c=!0),!(this instanceof ma)){if(c&&"<"!==b.charAt(0))throw zd("nosel");return new ma(b)}if(c){c=a.document;var d;b=(d=Ad.exec(b))?[c.createElement(d[1])]:(d=ka(b,c))?d.childNodes:[]}wa(this,b)}function na(a){return a.cloneNode(!0)}function oa(a,b){if(b||qa(a),a.querySelectorAll)for(var c=a.querySelectorAll("*"),d=0,e=c.length;d<e;d++)qa(c[d])}function pa(a,b,c,e){if(r(e))throw zd("offargs");var f=(e=ra(a))&&e.events,g=e&&e.handle;if(g)if(b){var h=function(b){var d=f[b];r(c)&&G(d||[],c),r(c)&&d&&0<d.length||(a.removeEventListener(b,g,!1),delete f[b])};d(b.split(" "),function(a){h(a),yd[a]&&h(yd[a])})}else for(b in f)"$destroy"!==b&&a.removeEventListener(b,g,!1),delete f[b]}function qa(a,b){var c=a.ng339,d=c&&ud[c];d&&(b?delete d.data[b]:(d.handle&&(d.events.$destroy&&d.handle({},"$destroy"),pa(a)),delete ud[c],a.ng339=void 0))}function ra(a,b){var c=a.ng339,c=c&&ud[c];return b&&!c&&(a.ng339=c=++vd,c=ud[c]={events:{},data:{},handle:void 0}),c}function sa(a,b,c){if(ja(a)){var d=r(c),e=!d&&b&&!s(b),f=!b;if(a=(a=ra(a,!e))&&a.data,d)a[b]=c;else{if(f)return a;if(e)return a&&a[b];i(a,b)}}}function ta(a,b){return!!a.getAttribute&&-1<(" "+(a.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").indexOf(" "+b+" ")}function ua(a,b){b&&a.setAttribute&&d(b.split(" "),function(b){a.setAttribute("class",jd((" "+(a.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").replace(" "+jd(b)+" "," ")))})}function va(a,b){if(b&&a.setAttribute){var c=(" "+(a.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ");d(b.split(" "),function(a){a=jd(a),-1===c.indexOf(" "+a+" ")&&(c+=a+" ")}),a.setAttribute("class",jd(c))}}function wa(a,b){if(b)if(b.nodeType)a[a.length++]=b;else{var c=b.length;if("number"==typeof c&&b.window!==b){if(c)for(var d=0;d<c;d++)a[a.length++]=b[d]}else a[a.length++]=b}}function xa(a,b){return ya(a,"$"+(b||"ngController")+"Controller")}function ya(a,b,c){
for(9===a.nodeType&&(a=a.documentElement),b=hd(b)?b:[b];a;){for(var d=0,e=b.length;d<e;d++)if(r(c=Tc.data(a,b[d])))return c;a=a.parentNode||11===a.nodeType&&a.host}}function za(a){for(oa(a,!0);a.firstChild;)a.removeChild(a.firstChild)}function Aa(a,b){b||oa(a);var c=a.parentNode;c&&c.removeChild(a)}function Ba(b,c){c=c||a,"complete"===c.document.readyState?c.setTimeout(b):Tc(c).on("load",b)}function Ca(a,b){var c=Hd[b.toLowerCase()];return c&&Id[F(a)]&&c}function Da(a,b){var c=function(c,d){c.isDefaultPrevented=function(){return c.defaultPrevented};var e=b[d||c.type],f=e?e.length:0;if(f){if(q(c.immediatePropagationStopped)){var g=c.stopImmediatePropagation;c.stopImmediatePropagation=function(){c.immediatePropagationStopped=!0,c.stopPropagation&&c.stopPropagation(),g&&g.call(c)}}c.isImmediatePropagationStopped=function(){return!0===c.immediatePropagationStopped};var h=e.specialHandlerWrapper||Ea;1<f&&(e=ha(e));for(var i=0;i<f;i++)c.isImmediatePropagationStopped()||h(a,c,e[i])}};return c.elem=a,c}function Ea(a,b,c){c.call(a,b)}function Fa(a,b,c){var d=b.relatedTarget;d&&(d===a||Fd.call(a,d))||c.call(a,b)}function Ga(){this.$get=function(){return i(ma,{hasClass:function(a,b){return a.attr&&(a=a[0]),ta(a,b)},addClass:function(a,b){return a.attr&&(a=a[0]),va(a,b)},removeClass:function(a,b){return a.attr&&(a=a[0]),ua(a,b)}})}}function Ha(a,b){var c=a&&a.$$hashKey;return c?("function"==typeof c&&(c=a.$$hashKey()),c):(c=typeof a,c="function"===c||"object"===c&&null!==a?a.$$hashKey=c+":"+(b||g)():c+":"+a)}function Ia(a,b){if(b){var c=0;this.nextUid=function(){return++c}}d(a,this.put,this)}function Ja(a){return a=(Function.prototype.toString.call(a)+" ").replace(Pd,""),a.match(Ld)||a.match(Md)}function Ka(a){return(a=Ja(a))?"function("+(a[1]||"").replace(/[\s\r\n]+/," ")+")":"fn"}function La(a,b){function c(a){return function(b,c){if(!s(b))return a(b,c);d(b,f(a))}}function e(a,b){if(ca(a,"service"),(x(b)||hd(b))&&(b=p.instantiate(b)),!b.$get)throw Qd("pget",a);return n[a+"Provider"]=b}function g(a,b){return function(){var c=v.invoke(b,this);if(q(c))throw Qd("undef",a);return c}}function h(a,b,c){return e(a,{$get:!1!==c?g(a,b):b})}function i(a){aa(q(a)||hd(a),"modulesToLoad","not an array");var b,c=[];return d(a,function(a){function d(a){var b,c;for(b=0,c=a.length;b<c;b++){var d=a[b],e=p.get(d[0]);e[d[1]].apply(e,d[2])}}if(!m.get(a)){m.put(a,!0);try{u(a)?(b=Vc(a),c=c.concat(i(b.requires)).concat(b._runBlocks),d(b._invokeQueue),d(b._configBlocks)):x(a)?c.push(p.invoke(a)):hd(a)?c.push(p.invoke(a)):ba(a,"module")}catch(b){throw hd(a)&&(a=a[a.length-1]),b.message&&b.stack&&-1===b.stack.indexOf(b.message)&&(b=b.message+"\n"+b.stack),Qd("modulerr",a,b.stack||b.message||b)}}}),c}function j(a,c){function d(b,d){if(a.hasOwnProperty(b)){if(a[b]===k)throw Qd("cdep",b+" <- "+l.join(" <- "));return a[b]}try{return l.unshift(b),a[b]=k,a[b]=c(b,d),a[b]}catch(c){throw a[b]===k&&delete a[b],c}finally{l.shift()}}function e(a,c,e){var f=[];a=La.$$annotate(a,b,e);for(var g=0,h=a.length;g<h;g++){var i=a[g];if("string"!=typeof i)throw Qd("itkn",i);f.push(c&&c.hasOwnProperty(i)?c[i]:d(i,e))}return f}return{invoke:function(a,b,c,d){return"string"==typeof c&&(d=c,c=null),c=e(a,c,d),hd(a)&&(a=a[a.length-1]),d=!(11>=Sc)&&("function"==typeof a&&/^(?:class\b|constructor\()/.test(Function.prototype.toString.call(a)+" ")),d?(c.unshift(null),new(Function.prototype.bind.apply(a,c))):a.apply(b,c)},instantiate:function(a,b,c){var d=hd(a)?a[a.length-1]:a;return a=e(a,b,c),a.unshift(null),new(Function.prototype.bind.apply(d,a))},get:d,annotate:La.$$annotate,has:function(b){return n.hasOwnProperty(b+"Provider")||a.hasOwnProperty(b)}}}b=!0===b;var k={},l=[],m=new Ia([],!0),n={$provide:{provider:c(e),factory:c(h),service:c(function(a,b){return h(a,["$injector",function(a){return a.instantiate(b)}])}),value:c(function(a,b){return h(a,o(b),!1)}),constant:c(function(a,b){ca(a,"constant"),n[a]=b,r[a]=b}),decorator:function(a,b){var c=p.get(a+"Provider"),d=c.$get;c.$get=function(){var a=v.invoke(d,c);return v.invoke(b,null,{$delegate:a})}}}},p=n.$injector=j(n,function(a,b){throw ed.isString(b)&&l.push(b),Qd("unpr",l.join(" <- "))}),r={},t=j(r,function(a,b){var c=p.get(a+"Provider",b);return v.invoke(c.$get,c,void 0,a)}),v=t;n.$injectorProvider={$get:o(t)};var w=i(a),v=t.get("$injector");return v.strictDi=b,d(w,function(a){a&&v.invoke(a)}),v}function Ma(){var a=!0;this.disableAutoScrolling=function(){a=!1},this.$get=["$window","$location","$rootScope",function(b,c,d){function e(a){var b=null;return Array.prototype.some.call(a,function(a){if("a"===F(a))return b=a,!0}),b}function f(a){if(a){a.scrollIntoView();var c;c=g.yOffset,x(c)?c=c():D(c)?(c=c[0],c="fixed"!==b.getComputedStyle(c).position?0:c.getBoundingClientRect().bottom):v(c)||(c=0),c&&(a=a.getBoundingClientRect().top,b.scrollBy(0,a-c))}else b.scrollTo(0,0)}function g(a){a=u(a)?a:v(a)?a.toString():c.hash();var b;a?(b=h.getElementById(a))?f(b):(b=e(h.getElementsByName(a)))?f(b):"top"===a&&f(null):f(null)}var h=b.document;return a&&d.$watch(function(){return c.hash()},function(a,b){a===b&&""===a||Ba(function(){d.$evalAsync(g)})}),g}]}function Na(a,b){return a||b?a?b?(hd(a)&&(a=a.join(" ")),hd(b)&&(b=b.join(" ")),a+" "+b):a:b:""}function Oa(a){u(a)&&(a=a.split(" "));var b=fa();return d(a,function(a){a.length&&(b[a]=!0)}),b}function Pa(a){return s(a)?a:{}}function Qa(a,b,c,e){function f(a){try{a.apply(null,$c.call(arguments,1))}finally{if(0===--r)for(;s.length;)try{s.pop()()}catch(a){c.error(a)}}}function g(){x=null,h(),i()}function h(){t=y(),t=q(t)?null:t,I(t,B)&&(t=B),B=t}function i(){v===j.url()&&u===t||(v=j.url(),u=t,d(z,function(a){a(j.url(),t)}))}var j=this,k=a.location,l=a.history,n=a.setTimeout,o=a.clearTimeout,p={};j.isMock=!1;var r=0,s=[];j.$$completeOutstandingRequest=f,j.$$incOutstandingRequestCount=function(){r++},j.notifyWhenNoOutstandingRequests=function(a){0===r?a():s.push(a)};var t,u,v=k.href,w=b.find("base"),x=null,y=e.history?function(){try{return l.state}catch(a){}}:m;h(),u=t,j.url=function(b,c,d){if(q(d)&&(d=null),k!==a.location&&(k=a.location),l!==a.history&&(l=a.history),b){var f=u===d;if(v===b&&(!e.history||f))return j;var g=v&&sb(v)===sb(b);return v=b,u=d,!e.history||g&&f?(g||(x=b),c?k.replace(b):g?(c=k,d=b.indexOf("#"),d=-1===d?"":b.substr(d),c.hash=d):k.href=b,k.href!==b&&(x=b)):(l[c?"replaceState":"pushState"](d,"",b),h(),u=t),x&&(x=b),j}return x||k.href.replace(/%27/g,"'")},j.state=function(){return t};var z=[],A=!1,B=null;j.onUrlChange=function(b){return A||(e.history&&Tc(a).on("popstate",g),Tc(a).on("hashchange",g),A=!0),z.push(b),b},j.$$applicationDestroyed=function(){Tc(a).off("hashchange popstate",g)},j.$$checkUrlChange=i,j.baseHref=function(){var a=w.attr("href");return a?a.replace(/^(https?:)?\/\/[^/]*/,""):""},j.defer=function(a,b){var c;return r++,c=n(function(){delete p[c],f(a)},b||0),p[c]=!0,c},j.defer.cancel=function(a){return!!p[a]&&(delete p[a],o(a),f(m),!0)}}function Ra(){this.$get=["$window","$log","$sniffer","$document",function(a,b,c,d){return new Qa(a,d,b,c)}]}function Sa(){this.$get=function(){function a(a,d){function e(a){a!==m&&(n?n===a&&(n=a.n):n=a,f(a.n,a.p),f(a,m),m=a,m.n=null)}function f(a,b){a!==b&&(a&&(a.p=b),b&&(b.n=a))}if(a in c)throw b("$cacheFactory")("iid",a);var g=0,h=i({},d,{id:a}),j=fa(),k=d&&d.capacity||Number.MAX_VALUE,l=fa(),m=null,n=null;return c[a]={put:function(a,b){if(!q(b)){if(k<Number.MAX_VALUE){e(l[a]||(l[a]={key:a}))}return a in j||g++,j[a]=b,g>k&&this.remove(n.key),b}},get:function(a){if(k<Number.MAX_VALUE){var b=l[a];if(!b)return;e(b)}return j[a]},remove:function(a){if(k<Number.MAX_VALUE){var b=l[a];if(!b)return;b===m&&(m=b.p),b===n&&(n=b.n),f(b.n,b.p),delete l[a]}a in j&&(delete j[a],g--)},removeAll:function(){j=fa(),g=0,l=fa(),m=n=null},destroy:function(){l=h=j=null,delete c[a]},info:function(){return i({},h,{size:g})}}}var c={};return a.info=function(){var a={};return d(c,function(b,c){a[c]=b.info()}),a},a.get=function(a){return c[a]},a}}function Ta(){this.$get=["$cacheFactory",function(a){return a("templates")}]}function Ua(b,c){function e(a,b,c){var e=/^\s*([@&<]|=(\*?))(\??)\s*([\w$]*)\s*$/,f=fa();return d(a,function(a,d){if(a in y)f[d]=y[a];else{var g=a.match(e);if(!g)throw Yd("iscp",b,d,a,c?"controller bindings definition":"isolate scope definition");f[d]={mode:g[1][0],collection:"*"===g[2],optional:"?"===g[3],attrName:g[4]||d},g[4]&&(y[a]=f[d])}}),f}function g(a){var b=a.charAt(0);if(!b||b!==Yc(b))throw Yd("baddir",a);if(a!==a.trim())throw Yd("baddir",a)}function h(a){var b=a.require||a.controller&&a.name;return!hd(b)&&s(b)&&d(b,function(a,c){var d=a.match(v);a.substring(d[0].length)||(b[c]=d[0]+c)}),b}var j={},k=/^\s*directive:\s*([\w-]+)\s+(.*)$/,p=/(([\w-]+)(?::([^;]+))?;?)/,t=E("ngSrc,ngSrcset,src,srcset"),v=/^(?:(\^\^?)?(\?)?(\^\^?)?)?/,w=/^(on[a-z]+|formaction)$/,y=fa();this.directive=function a(c,e){return aa(c,"name"),ca(c,"directive"),u(c)?(g(c),aa(e,"directiveFactory"),j.hasOwnProperty(c)||(j[c]=[],b.factory(c+"Directive",["$injector","$exceptionHandler",function(a,b){var e=[];return d(j[c],function(d,f){try{var g=a.invoke(d);x(g)?g={compile:o(g)}:!g.compile&&g.link&&(g.compile=o(g.link)),g.priority=g.priority||0,g.index=f,g.name=g.name||c,g.require=h(g);var i=g,j=g.restrict;if(j&&(!u(j)||!/[EACM]/.test(j)))throw Yd("badrestrict",j,c);i.restrict=j||"EA",g.$$moduleName=d.$$moduleName,e.push(g)}catch(a){b(a)}}),e}])),j[c].push(e)):d(c,f(a)),this},this.component=function(a,b){function c(a){function c(b){return x(b)||hd(b)?function(c,d){return a.invoke(b,this,{$element:c,$attrs:d})}:b}var f=b.template||b.templateUrl?b.template:"",g={controller:e,controllerAs:Za(b.controller)||b.controllerAs||"$ctrl",template:c(f),templateUrl:c(b.templateUrl),transclude:b.transclude,scope:{},bindToController:b.bindings||{},restrict:"E",require:b.require};return d(b,function(a,b){"$"===b.charAt(0)&&(g[b]=a)}),g}var e=b.controller||function(){};return d(b,function(a,b){"$"===b.charAt(0)&&(c[b]=a,x(e)&&(e[b]=a))}),c.$inject=["$injector"],this.directive(a,c)},this.aHrefSanitizationWhitelist=function(a){return r(a)?(c.aHrefSanitizationWhitelist(a),this):c.aHrefSanitizationWhitelist()},this.imgSrcSanitizationWhitelist=function(a){return r(a)?(c.imgSrcSanitizationWhitelist(a),this):c.imgSrcSanitizationWhitelist()};var z=!0;this.debugInfoEnabled=function(a){return r(a)?(z=a,this):z};var C=!0;this.preAssignBindingsEnabled=function(a){return r(a)?(C=a,this):C};var D=10;this.onChangesTtl=function(a){return arguments.length?(D=a,this):D};var H=!0;this.commentDirectivesEnabled=function(a){return arguments.length?(H=a,this):H};var J=!0;this.cssClassDirectivesEnabled=function(a){return arguments.length?(J=a,this):J},this.$get=["$injector","$interpolate","$exceptionHandler","$templateRequest","$parse","$controller","$rootScope","$sce","$animate","$$sanitizeUri",function(b,c,f,g,h,o,y,E,L,M){function N(){try{if(!--Aa)throw va=void 0,Yd("infchng",D);y.$apply(function(){for(var a=[],b=0,c=va.length;b<c;++b)try{va[b]()}catch(b){a.push(b)}if(va=void 0,a.length)throw a})}finally{Aa++}}function O(a,b){if(b){var c,d,e,f=Object.keys(b);for(c=0,d=f.length;c<d;c++)e=f[c],this[e]=b[e]}else this.$attr={};this.$$element=a}function P(a,b,c){xa.innerHTML="<span "+b+">",b=xa.firstChild.attributes;var d=b[0];b.removeNamedItem(d.name),d.value=c,a.attributes.setNamedItem(d)}function R(a,b){try{a.addClass(b)}catch(a){}}function S(b,c,d,e,f){b instanceof Tc||(b=Tc(b));for(var g=/\S+/,h=0,i=b.length;h<i;h++){var j=b[h];j.nodeType===sd&&j.nodeValue.match(g)&&la(j,b[h]=a.document.createElement("span"))}var k=T(b,c,b,d,e,f);S.$$addScopeClass(b);var l=null;return function(a,c,d){aa(a,"scope"),f&&f.needsNewScope&&(a=a.$parent.$new()),d=d||{};var e=d.parentBoundTranscludeFn,g=d.transcludeControllers;if(d=d.futureParentElement,e&&e.$$boundTransclude&&(e=e.$$boundTransclude),l||(l=(d=d&&d[0])&&"foreignobject"!==F(d)&&bd.call(d).match(/SVG/)?"svg":"html"),d="html"!==l?Tc(oa(l,Tc("<div>").append(b).html())):c?Gd.clone.call(b):b,g)for(var h in g)d.data("$"+h+"Controller",g[h].instance);return S.$$addScopeInfo(d,a),c&&c(d,a),k&&k(a,d,d,e),d}}function T(a,b,c,d,e,f){function g(a,c,d,e){var f,g,h,i,j,k,n;if(l)for(n=Array(c.length),i=0;i<m.length;i+=3)f=m[i],n[f]=c[f];else n=c;for(i=0,j=m.length;i<j;)g=n[m[i++]],c=m[i++],f=m[i++],c?(c.scope?(h=a.$new(),S.$$addScopeInfo(Tc(g),h)):h=a,k=c.transcludeOnThisElement?U(a,c.transclude,e):!c.templateOnThisElement&&e?e:!e&&b?U(a,b):null,c(f,h,g,d,k)):f&&f(a,g.childNodes,void 0,e)}for(var h,i,j,k,l,m=[],n=0;n<a.length;n++)h=new O,i=V(a[n],[],h,0===n?d:void 0,e),(f=i.length?$(i,a[n],h,b,c,null,[],[],f):null)&&f.scope&&S.$$addScopeClass(h.$$element),h=f&&f.terminal||!(j=a[n].childNodes)||!j.length?null:T(j,f?(f.transcludeOnThisElement||!f.templateOnThisElement)&&f.transclude:b),(f||h)&&(m.push(n,f,h),k=!0,l=l||f),f=null;return k?g:null}function U(a,b,c){function d(d,e,f,g,h){return d||(d=a.$new(!1,h),d.$$transcluded=!0),b(d,e,{parentBoundTranscludeFn:c,transcludeControllers:f,futureParentElement:g})}var e,f=d.$$slots=fa();for(e in b.$$slots)f[e]=b.$$slots[e]?U(a,b.$$slots[e],c):null;return d}function V(a,b,c,d,e){var f,g=c.$attr;switch(a.nodeType){case 1:f=F(a),ea(b,Wa(f),"E",d,e);for(var h,i,j,k,l=a.attributes,m=0,n=l&&l.length;m<n;m++){var o=!1,q=!1;h=l[m],i=h.name,j=jd(h.value),h=Wa(i),(k=Fa.test(h))&&(i=i.replace($d,"").substr(8).replace(/_(.)/g,function(a,b){return b.toUpperCase()})),(h=h.match(Ga))&&ga(h[1])&&(o=i,q=i.substr(0,i.length-5)+"end",i=i.substr(0,i.length-6)),h=Wa(i.toLowerCase()),g[h]=i,!k&&c.hasOwnProperty(h)||(c[h]=j,Ca(a,h)&&(c[h]=!0)),qa(a,b,j,h,k),ea(b,h,"A",d,e,o,q)}if("input"===f&&"hidden"===a.getAttribute("type")&&a.setAttribute("autocomplete","off"),!za)break;if(g=a.className,s(g)&&(g=g.animVal),u(g)&&""!==g)for(;a=p.exec(g);)h=Wa(a[2]),ea(b,h,"C",d,e)&&(c[h]=jd(a[3])),g=g.substr(a.index+a[0].length);break;case sd:if(11===Sc)for(;a.parentNode&&a.nextSibling&&a.nextSibling.nodeType===sd;)a.nodeValue+=a.nextSibling.nodeValue,a.parentNode.removeChild(a.nextSibling);ma(b,a.nodeValue);break;case 8:if(!ya)break;W(a,b,c,d,e)}return b.sort(ja),b}function W(a,b,c,d,e){try{var f=k.exec(a.nodeValue);if(f){var g=Wa(f[1]);ea(b,g,"M",d,e)&&(c[g]=jd(f[2]))}}catch(a){}}function X(a,b,c){var d=[],e=0;if(b&&a.hasAttribute&&a.hasAttribute(b))do{if(!a)throw Yd("uterdir",b,c);1===a.nodeType&&(a.hasAttribute(b)&&e++,a.hasAttribute(c)&&e--),d.push(a),a=a.nextSibling}while(0<e);else d.push(a);return Tc(d)}function Y(a,b,c){return function(d,e,f,g,h){return e=X(e[0],b,c),a(d,e,f,g,h)}}function Z(a,b,c,d,e,f){var g;return a?S(b,c,d,e,f):function(){return g||(g=S(b,c,d,e,f),b=c=f=null),g.apply(this,arguments)}}function $(a,b,c,e,g,h,j,k,l){function m(a,b,c,d){a&&(c&&(a=Y(a,c,d)),a.require=o.require,a.directiveName=p,(z===o||o.$$isolateScope)&&(a=sa(a,{isolateScope:!0})),j.push(a)),b&&(c&&(b=Y(b,c,d)),b.require=o.require,b.directiveName=p,(z===o||o.$$isolateScope)&&(b=sa(b,{isolateScope:!0})),k.push(b))}function n(a,e,g,h,l){function m(a,b,c,d){var e;if(A(a)||(d=c,c=b,b=a,a=void 0),H&&(e=u),c||(c=H?D.parent():D),!d)return l(a,b,e,c,G);var f=l.$$slots[d];if(f)return f(a,b,e,c,G);if(q(f))throw Yd("noslot",d,Q(D))}var n,o,p,r,t,u,v,D;b===g?(h=c,D=c.$$element):(D=Tc(g),h=new O(D,c)),t=e,z?r=e.$new(!0):w&&(t=e.$parent),l&&(v=m,v.$$boundTransclude=l,v.isSlotFilled=function(a){return!!l.$$slots[a]}),y&&(u=ca(D,h,v,y,r,e,z)),z&&(S.$$addScopeInfo(D,r,!0,!(B&&(B===z||B===z.$$originalDirective))),S.$$addScopeClass(D,!0),r.$$isolateBindings=z.$$isolateBindings,o=ua(e,h,r,r.$$isolateBindings,z),o.removeWatches&&r.$on("$destroy",o.removeWatches));for(n in u){o=y[n],p=u[n];var E=o.$$bindings.bindToController;if(C){p.bindingInfo=E?ua(t,h,p.instance,E,o):{};var F=p();F!==p.instance&&(p.instance=F,D.data("$"+o.name+"Controller",F),p.bindingInfo.removeWatches&&p.bindingInfo.removeWatches(),p.bindingInfo=ua(t,h,p.instance,E,o))}else p.instance=p(),D.data("$"+o.name+"Controller",p.instance),p.bindingInfo=ua(t,h,p.instance,E,o)}for(d(y,function(a,b){var c=a.require;a.bindToController&&!hd(c)&&s(c)&&i(u[b].instance,ba(b,c,D,u))}),d(u,function(a){var b=a.instance;if(x(b.$onChanges))try{b.$onChanges(a.bindingInfo.initialChanges)}catch(a){f(a)}if(x(b.$onInit))try{b.$onInit()}catch(a){f(a)}x(b.$doCheck)&&(t.$watch(function(){b.$doCheck()}),b.$doCheck()),x(b.$onDestroy)&&t.$on("$destroy",function(){b.$onDestroy()})}),n=0,o=j.length;n<o;n++)p=j[n],ta(p,p.isolateScope?r:e,D,h,p.require&&ba(p.directiveName,p.require,D,u),v);var G=e;for(z&&(z.template||null===z.templateUrl)&&(G=r),a&&a(G,g.childNodes,void 0,l),n=k.length-1;0<=n;n--)p=k[n],ta(p,p.isolateScope?r:e,D,h,p.require&&ba(p.directiveName,p.require,D,u),v);d(u,function(a){a=a.instance,x(a.$postLink)&&a.$postLink()})}l=l||{};for(var o,p,r,t,u,v=-Number.MAX_VALUE,w=l.newScopeDirective,y=l.controllerDirectives,z=l.newIsolateScopeDirective,B=l.templateDirective,D=l.nonTlbTranscludeDirective,E=!1,G=!1,H=l.hasElementTranscludeDirective,I=c.$$element=Tc(b),J=e,L=!1,M=!1,N=0,P=a.length;N<P;N++){o=a[N];var R=o.$$start,T=o.$$end;if(R&&(I=X(b,R,T)),r=void 0,v>o.priority)break;if((u=o.scope)&&(o.templateUrl||(s(u)?(ka("new/isolated scope",z||w,o,I),z=o):ka("new/isolated scope",z,o,I)),w=w||o),p=o.name,!L&&(o.replace&&(o.templateUrl||o.template)||o.transclude&&!o.$$tlb)){for(u=N+1;L=a[u++];)if(L.transclude&&!L.$$tlb||L.replace&&(L.templateUrl||L.template)){M=!0;break}L=!0}if(!o.templateUrl&&o.controller&&(y=y||fa(),ka("'"+p+"' controller",y[p],o,I),y[p]=o),u=o.transclude)if(E=!0,o.$$tlb||(ka("transclusion",D,o,I),D=o),"element"===u)H=!0,v=o.priority,r=I,I=c.$$element=Tc(S.$$createComment(p,c[p])),b=I[0],ra(g,$c.call(r,0),b),r[0].$$parentNode=r[0].parentNode,J=Z(M,r,e,v,h&&h.name,{nonTlbTranscludeDirective:D});else{var U=fa();if(r=Tc(na(b)).contents(),s(u)){r=[];var W=fa(),$=fa();d(u,function(a,b){var c="?"===a.charAt(0);a=c?a.substring(1):a,W[a]=b,U[b]=null,$[b]=c}),d(I.contents(),function(a){var b=W[Wa(F(a))];b?($[b]=!0,U[b]=U[b]||[],U[b].push(a)):r.push(a)}),d($,function(a,b){if(!a)throw Yd("reqslot",b)});for(var _ in U)U[_]&&(U[_]=Z(M,U[_],e))}I.empty(),J=Z(M,r,e,void 0,void 0,{needsNewScope:o.$$isolateScope||o.$$newScope}),J.$$slots=U}if(o.template)if(G=!0,ka("template",B,o,I),B=o,u=x(o.template)?o.template(I,c):o.template,u=Ea(u),o.replace){if(h=o,r=Bd.test(u)?Ya(oa(o.templateNamespace,jd(u))):[],b=r[0],1!==r.length||1!==b.nodeType)throw Yd("tplrt",p,"");ra(g,I,b),P={$attr:{}},u=V(b,[],P);var aa=a.splice(N+1,a.length-(N+1));(z||w)&&da(u,z,w),a=a.concat(u).concat(aa),ha(c,P),P=a.length}else I.html(u);if(o.templateUrl)G=!0,ka("template",B,o,I),B=o,o.replace&&(h=o),n=ia(a.splice(N,a.length-N),I,c,g,E&&J,j,k,{controllerDirectives:y,newScopeDirective:w!==o&&w,newIsolateScopeDirective:z,templateDirective:B,nonTlbTranscludeDirective:D}),P=a.length;else if(o.compile)try{t=o.compile(I,c,J);var ea=o.$$originalDirective||o;x(t)?m(null,K(ea,t),R,T):t&&m(K(ea,t.pre),K(ea,t.post),R,T)}catch(a){f(a,Q(I))}o.terminal&&(n.terminal=!0,v=Math.max(v,o.priority))}return n.scope=w&&!0===w.scope,n.transcludeOnThisElement=E,n.templateOnThisElement=G,n.transclude=J,l.hasElementTranscludeDirective=H,n}function ba(a,b,c,e){var f;if(u(b)){var g=b.match(v);b=b.substring(g[0].length);var h=g[1]||g[3],g="?"===g[2];if("^^"===h?c=c.parent():f=(f=e&&e[b])&&f.instance,!f){var i="$"+b+"Controller";f=h?c.inheritedData(i):c.data(i)}if(!f&&!g)throw Yd("ctreq",b,a)}else if(hd(b))for(f=[],h=0,g=b.length;h<g;h++)f[h]=ba(a,b[h],c,e);else s(b)&&(f={},d(b,function(b,d){f[d]=ba(a,b,c,e)}));return f||null}function ca(a,b,c,d,e,f,g){var h,i=fa();for(h in d){var j=d[h],k={$scope:j===g||j.$$isolateScope?e:f,$element:a,$attrs:b,$transclude:c},l=j.controller;"@"===l&&(l=b[j.name]),k=o(l,k,!0,j.controllerAs),i[j.name]=k,a.data("$"+j.name+"Controller",k.instance)}return i}function da(a,b,c){for(var d=0,e=a.length;d<e;d++)a[d]=l(a[d],{$$isolateScope:b,$$newScope:c})}function ea(a,c,d,f,g,h,i){if(c===g)return null;var k=null;if(j.hasOwnProperty(c)){g=b.get(c+"Directive");for(var m=0,n=g.length;m<n;m++)if(c=g[m],(q(f)||f>c.priority)&&-1!==c.restrict.indexOf(d)){if(h&&(c=l(c,{$$start:h,$$end:i})),!c.$$bindings){var o=k=c,p=c.name,r={isolateScope:null,bindToController:null};if(s(o.scope)&&(!0===o.bindToController?(r.bindToController=e(o.scope,p,!0),r.isolateScope={}):r.isolateScope=e(o.scope,p,!1)),s(o.bindToController)&&(r.bindToController=e(o.bindToController,p,!0)),r.bindToController&&!o.controller)throw Yd("noctrl",p);k=k.$$bindings=r,s(k.isolateScope)&&(c.$$isolateBindings=k.isolateScope)}a.push(c),k=c}}return k}function ga(a){if(j.hasOwnProperty(a))for(var c=b.get(a+"Directive"),d=0,e=c.length;d<e;d++)if(a=c[d],a.multiElement)return!0;return!1}function ha(a,b){var c=b.$attr,e=a.$attr;d(a,function(d,e){"$"!==e.charAt(0)&&(b[e]&&b[e]!==d&&(d+=("style"===e?";":" ")+b[e]),a.$set(e,d,!0,c[e]))}),d(b,function(b,d){a.hasOwnProperty(d)||"$"===d.charAt(0)||(a[d]=b,"class"!==d&&"style"!==d&&(e[d]=c[d]))})}function ia(a,b,c,e,f,h,i,j){var k,m,n=[],o=b[0],p=a.shift(),q=l(p,{templateUrl:null,transclude:null,replace:null,$$originalDirective:p}),r=x(p.templateUrl)?p.templateUrl(b,c):p.templateUrl,t=p.templateNamespace;return b.empty(),g(r).then(function(g){var l,u;if(g=Ea(g),p.replace){if(g=Bd.test(g)?Ya(oa(t,jd(g))):[],l=g[0],1!==g.length||1!==l.nodeType)throw Yd("tplrt",p.name,r);g={$attr:{}},ra(e,b,l);var v=V(l,[],g);s(p.scope)&&da(v,!0),a=v.concat(a),ha(c,g)}else l=o,b.html(g);for(a.unshift(q),k=$(a,l,c,f,b,p,h,i,j),d(e,function(a,c){a===l&&(e[c]=b[0])}),m=T(b[0].childNodes,f);n.length;){g=n.shift(),u=n.shift();var w=n.shift(),x=n.shift(),v=b[0];if(!g.$$destroyed){if(u!==o){var y=u.className;j.hasElementTranscludeDirective&&p.replace||(v=na(l)),ra(w,Tc(u),v),R(Tc(v),y)}u=k.transcludeOnThisElement?U(g,k.transclude,x):x,k(m,g,v,e,u)}}n=null}),function(a,b,c,d,e){a=e,b.$$destroyed||(n?n.push(b,c,d,a):(k.transcludeOnThisElement&&(a=U(b,k.transclude,e)),k(m,b,c,d,a)))}}function ja(a,b){var c=b.priority-a.priority;return 0!==c?c:a.name!==b.name?a.name<b.name?-1:1:a.index-b.index}function ka(a,b,c,d){function e(a){return a?" (module: "+a+")":""}if(b)throw Yd("multidir",b.name,e(b.$$moduleName),c.name,e(c.$$moduleName),a,Q(d))}function ma(a,b){var d=c(b,!0);d&&a.push({priority:0,compile:function(a){a=a.parent();var b=!!a.length;return b&&S.$$addBindingClass(a),function(a,c){var e=c.parent();b||S.$$addBindingClass(e),S.$$addBindingInfo(e,d.expressions),a.$watch(d,function(a){c[0].nodeValue=a})}}})}function oa(b,c){switch(b=Yc(b||"html")){case"svg":case"math":var d=a.document.createElement("div");return d.innerHTML="<"+b+">"+c+"</"+b+">",d.childNodes[0].childNodes;default:return c}}function pa(a,b){if("srcdoc"===b)return E.HTML;var c=F(a);if("src"===b||"ngSrc"===b){if(-1===["img","video","audio","source","track"].indexOf(c))return E.RESOURCE_URL}else if("xlinkHref"===b||"form"===c&&"action"===b)return E.RESOURCE_URL}function qa(a,b,d,e,f){var g=pa(a,e),h=t[e]||f,i=c(d,!f,g,h);if(i){if("multiple"===e&&"select"===F(a))throw Yd("selmulti",Q(a));b.push({priority:100,compile:function(){return{pre:function(a,b,f){if(b=f.$$observers||(f.$$observers=fa()),w.test(e))throw Yd("nodomevents");var j=f[e];j!==d&&(i=j&&c(j,!0,g,h),d=j),i&&(f[e]=i(a),(b[e]||(b[e]=[])).$$inter=!0,(f.$$observers&&f.$$observers[e].$$scope||a).$watch(i,function(a,b){"class"===e&&a!==b?f.$updateClass(a,b):f.$set(e,a)}))}}}})}}function ra(b,c,d){var e,f,g=c[0],h=c.length,i=g.parentNode;if(b)for(e=0,f=b.length;e<f;e++)if(b[e]===g){b[e++]=d,f=e+h-1;for(var j=b.length;e<j;e++,f++)f<j?b[e]=b[f]:delete b[e];b.length-=h-1,b.context===g&&(b.context=d);break}for(i&&i.replaceChild(d,g),b=a.document.createDocumentFragment(),e=0;e<h;e++)b.appendChild(c[e]);for(Tc.hasData(g)&&(Tc.data(d,Tc.data(g)),Tc(g).off("$destroy")),Tc.cleanData(b.querySelectorAll("*")),e=1;e<h;e++)delete c[e];c[0]=d,c.length=1}function sa(a,b){return i(function(){return a.apply(null,arguments)},a,b)}function ta(a,b,c,d,e,g){try{a(b,c,d,e,g)}catch(a){f(a,Q(c))}}function ua(a,b,e,f,g){function i(b,c,d){!x(e.$onChanges)||c===d||c!==c&&d!==d||(va||(a.$$postDigest(N),va=[]),k||(k={},va.push(j)),k[b]&&(d=k[b].previousValue),k[b]=new Va(d,c))}function j(){e.$onChanges(k),k=void 0}var k,l=[],n={};return d(f,function(d,f){var j,k,o,p,q=d.attrName,r=d.optional;switch(d.mode){case"@":r||Xc.call(b,q)||(e[f]=b[q]=void 0),r=b.$observe(q,function(a){(u(a)||B(a))&&(i(f,a,e[f]),e[f]=a)}),b.$$observers[q].$$scope=a,j=b[q],u(j)?e[f]=c(j)(a):B(j)&&(e[f]=j),n[f]=new Va(Zd,e[f]),l.push(r);break;case"=":if(!Xc.call(b,q)){if(r)break;b[q]=void 0}if(r&&!b[q])break;k=h(b[q]),p=k.literal?I:function(a,b){return a===b||a!==a&&b!==b},o=k.assign||function(){throw j=e[f]=k(a),Yd("nonassign",b[q],q,g.name)},j=e[f]=k(a),r=function(b){return p(b,e[f])||(p(b,j)?o(a,b=e[f]):e[f]=b),j=b},r.$stateful=!0,r=d.collection?a.$watchCollection(b[q],r):a.$watch(h(b[q],r),null,k.literal),l.push(r);break;case"<":if(!Xc.call(b,q)){if(r)break;b[q]=void 0}if(r&&!b[q])break;k=h(b[q]);var s=k.literal,t=e[f]=k(a);n[f]=new Va(Zd,e[f]),r=a.$watch(k,function(a,b){if(b===a){if(b===t||s&&I(b,t))return;b=t}i(f,a,b),e[f]=a},s),l.push(r);break;case"&":if((k=b.hasOwnProperty(q)?h(b[q]):m)===m&&r)break;e[f]=function(b){return k(a,b)}}}),{initialChanges:n,removeWatches:l.length&&function(){for(var a=0,b=l.length;a<b;++a)l[a]()}}}var va,wa=/^\w/,xa=a.document.createElement("div"),ya=H,za=J,Aa=D;O.prototype={$normalize:Wa,$addClass:function(a){a&&0<a.length&&L.addClass(this.$$element,a)},$removeClass:function(a){a&&0<a.length&&L.removeClass(this.$$element,a)},$updateClass:function(a,b){var c=Xa(a,b);c&&c.length&&L.addClass(this.$$element,c),(c=Xa(b,a))&&c.length&&L.removeClass(this.$$element,c)},$set:function(a,b,c,e){var g=Ca(this.$$element[0],a),h=Jd[a],i=a;if(g?(this.$$element.prop(a,b),e=g):h&&(this[h]=b,i=h),this[a]=b,e?this.$attr[a]=e:(e=this.$attr[a])||(this.$attr[a]=e=_(a,"-")),"a"===(g=F(this.$$element))&&("href"===a||"xlinkHref"===a)||"img"===g&&"src"===a)this[a]=b=M(b,"src"===a);else if("img"===g&&"srcset"===a&&r(b)){for(var g="",h=jd(b),j=/(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/,j=/\s/.test(h)?j:/(,)/,h=h.split(j),j=Math.floor(h.length/2),k=0;k<j;k++)var l=2*k,g=g+M(jd(h[l]),!0),g=g+" "+jd(h[l+1]);h=jd(h[2*k]).split(/\s/),g+=M(jd(h[0]),!0),2===h.length&&(g+=" "+jd(h[1])),this[a]=b=g}!1!==c&&(null===b||q(b)?this.$$element.removeAttr(e):wa.test(e)?this.$$element.attr(e,b):P(this.$$element[0],e,b)),(a=this.$$observers)&&d(a[i],function(a){try{a(b)}catch(a){f(a)}})},$observe:function(a,b){var c=this,d=c.$$observers||(c.$$observers=fa()),e=d[a]||(d[a]=[]);return e.push(b),y.$evalAsync(function(){e.$$inter||!c.hasOwnProperty(a)||q(c[a])||b(c[a])}),function(){G(e,b)}}};var Ba=c.startSymbol(),Da=c.endSymbol(),Ea="{{"===Ba&&"}}"===Da?n:function(a){return a.replace(/\{\{/g,Ba).replace(/}}/g,Da)},Fa=/^ngAttr[A-Z]/,Ga=/^(.+)Start$/;return S.$$addBindingInfo=z?function(a,b){var c=a.data("$binding")||[];hd(b)?c=c.concat(b):c.push(b),a.data("$binding",c)}:m,S.$$addBindingClass=z?function(a){R(a,"ng-binding")}:m,S.$$addScopeInfo=z?function(a,b,c,d){a.data(c?d?"$isolateScopeNoTemplate":"$isolateScope":"$scope",b)}:m,S.$$addScopeClass=z?function(a,b){R(a,b?"ng-isolate-scope":"ng-scope")}:m,S.$$createComment=function(b,c){var d="";return z&&(d=" "+(b||"")+": ",c&&(d+=c+" ")),a.document.createComment(d)},S}]}function Va(a,b){this.previousValue=a,this.currentValue=b}function Wa(a){return ia(a.replace($d,""))}function Xa(a,b){var c="",d=a.split(/\s+/),e=b.split(/\s+/),f=0;a:for(;f<d.length;f++){for(var g=d[f],h=0;h<e.length;h++)if(g===e[h])continue a;c+=(0<c.length?" ":"")+g}return c}function Ya(a){a=Tc(a);var b=a.length;if(1>=b)return a;for(;b--;){var c=a[b];(8===c.nodeType||c.nodeType===sd&&""===c.nodeValue.trim())&&_c.call(a,b,1)}return a}function Za(a,b){if(b&&u(b))return b;if(u(a)){var c=ae.exec(a);if(c)return c[3]}}function $a(){var a={},c=!1;this.has=function(b){return a.hasOwnProperty(b)},this.register=function(b,c){ca(b,"controller"),s(b)?i(a,b):a[b]=c},this.allowGlobals=function(){c=!0},this.$get=["$injector","$window",function(d,e){function f(a,c,d,e){if(!a||!s(a.$scope))throw b("$controller")("noscp",e,c);a.$scope[c]=d}return function(b,g,h,j){var k,l,m;if(h=!0===h,j&&u(j)&&(m=j),u(b)){if(!(j=b.match(ae)))throw _d("ctrlfmt",b);if(l=j[1],m=m||j[3],!(b=a.hasOwnProperty(l)?a[l]:da(g.$scope,l,!0)||(c?da(e,l,!0):void 0)))throw _d("ctrlreg",l);ba(b,l,!0)}return h?(h=(hd(b)?b[b.length-1]:b).prototype,k=Object.create(h||null),m&&f(g,m,k,l||b.name),i(function(){var a=d.invoke(b,k,g,l);return a!==k&&(s(a)||x(a))&&(k=a,m&&f(g,m,k,l||b.name)),k},{instance:k,identifier:m})):(k=d.instantiate(b,g,l),m&&f(g,m,k,l||b.name),k)}}]}function _a(){this.$get=["$window",function(a){return Tc(a.document)}]}function ab(){this.$get=["$log",function(a){return function(b,c){a.error.apply(a,arguments)}}]}function bb(a){return s(a)?w(a)?a.toISOString():M(a):a}function cb(){this.$get=function(){return function(a){if(!a)return"";var b=[];return e(a,function(a,c){null===a||q(a)||(hd(a)?d(a,function(a){b.push(V(c)+"="+V(bb(a)))}):b.push(V(c)+"="+V(bb(a))))}),b.join("&")}}}function db(){this.$get=function(){return function(a){function b(a,f,g){null===a||q(a)||(hd(a)?d(a,function(a,c){b(a,f+"["+(s(a)?c:"")+"]")}):s(a)&&!w(a)?e(a,function(a,c){b(a,f+(g?"":"[")+c+(g?"":"]"))}):c.push(V(f)+"="+V(bb(a))))}if(!a)return"";var c=[];return b(a,"",!0),c.join("&")}}}function eb(a,b){if(u(a)){var c=a.replace(ge,"").trim();if(c){var d=b("Content-Type");(d=d&&0===d.indexOf(ce))||(d=(d=c.match(ee))&&fe[d[0]].test(c)),d&&(a=N(c))}}return a}function fb(a){var b,c=fa();return u(a)?d(a.split("\n"),function(a){b=a.indexOf(":");var d=Yc(jd(a.substr(0,b)));a=jd(a.substr(b+1)),d&&(c[d]=c[d]?c[d]+", "+a:a)}):s(a)&&d(a,function(a,b){var d=Yc(b),e=jd(a);d&&(c[d]=c[d]?c[d]+", "+e:e)}),c}function gb(a){var b;return function(c){return b||(b=fb(a)),c?(c=b[Yc(c)],void 0===c&&(c=null),c):b}}function hb(a,b,c,e){return x(e)?e(a,b,c):(d(e,function(d){a=d(a,b,c)}),a)}function ib(){var a=this.defaults={transformResponse:[eb],transformRequest:[function(a){return s(a)&&"[object File]"!==bd.call(a)&&"[object Blob]"!==bd.call(a)&&"[object FormData]"!==bd.call(a)?M(a):a}],headers:{common:{Accept:"application/json, text/plain, */*"},post:ha(de),put:ha(de),patch:ha(de)},xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",paramSerializer:"$httpParamSerializer"},c=!1;this.useApplyAsync=function(a){return r(a)?(c=!!a,this):c};var e=!0;this.useLegacyPromiseExtensions=function(a){return r(a)?(e=!!a,this):e};var f=this.interceptors=[];this.$get=["$httpBackend","$$cookieReader","$cacheFactory","$rootScope","$q","$injector",function(g,h,j,k,l,m){function n(c){function f(a,b){for(var c=0,d=b.length;c<d;){var e=b[c++],f=b[c++];a=a.then(e,f)}return b.length=0,a}function g(a,b){var c,e={};return d(a,function(a,d){x(a)?null!=(c=a(b))&&(e[d]=c):e[d]=a}),e}function h(a){var b=i({},a);return b.data=hb(a.data,a.headers,a.status,j.transformResponse),a=a.status,200<=a&&300>a?b:l.reject(b)}if(!s(c))throw b("$http")("badreq",c);if(!u(c.url))throw b("$http")("badreq",c.url);var j=i({method:"get",transformRequest:a.transformRequest,transformResponse:a.transformResponse,paramSerializer:a.paramSerializer},c);j.headers=function(b){var c,d,e,f=a.headers,h=i({},b.headers),f=i({},f.common,f[Yc(b.method)]);a:for(c in f){d=Yc(c);for(e in h)if(Yc(e)===d)continue a;h[c]=f[c]}return g(h,ha(b))}(c),j.method=Zc(j.method),j.paramSerializer=u(j.paramSerializer)?m.get(j.paramSerializer):j.paramSerializer;var k=[],n=[],p=l.when(j);return d(v,function(a){(a.request||a.requestError)&&k.unshift(a.request,a.requestError),(a.response||a.responseError)&&n.push(a.response,a.responseError)}),p=f(p,k),p=p.then(function(b){var c=b.headers,e=hb(b.data,gb(c),void 0,b.transformRequest);return q(e)&&d(c,function(a,b){"content-type"===Yc(b)&&delete c[b]}),q(b.withCredentials)&&!q(a.withCredentials)&&(b.withCredentials=a.withCredentials),o(b,e).then(h,h)}),p=f(p,n),e?(p.success=function(a){return ba(a,"fn"),p.then(function(b){
a(b.data,b.status,b.headers,j)}),p},p.error=function(a){return ba(a,"fn"),p.then(null,function(b){a(b.data,b.status,b.headers,j)}),p}):(p.success=ie("success"),p.error=ie("error")),p}function o(b,e){function f(a){if(a){var b={};return d(a,function(a,d){b[d]=function(b){function d(){a(b)}c?k.$applyAsync(d):k.$$phase?d():k.$apply(d)}}),b}}function i(a,b,d,e){function f(){j(b,a,d,e)}u&&(200<=a&&300>a?u.put(A,[a,b,fb(d),e]):u.remove(A)),c?k.$applyAsync(f):(f(),k.$$phase||k.$apply())}function j(a,c,d,e){c=-1<=c?c:0,(200<=c&&300>c?w.resolve:w.reject)({data:a,status:c,headers:gb(d),config:b,statusText:e})}function m(a){j(a.data,a.status,ha(a.headers()),a.statusText)}function o(){var a=n.pendingRequests.indexOf(b);-1!==a&&n.pendingRequests.splice(a,1)}var u,v,w=l.defer(),y=w.promise,z=b.headers,A=p(b.url,b.paramSerializer(b.params));return n.pendingRequests.push(b),y.then(o,o),!b.cache&&!a.cache||!1===b.cache||"GET"!==b.method&&"JSONP"!==b.method||(u=s(b.cache)?b.cache:s(a.cache)?a.cache:t),u&&(v=u.get(A),r(v)?v&&x(v.then)?v.then(m,m):hd(v)?j(v[1],v[0],ha(v[2]),v[3]):j(v,200,{},"OK"):u.put(A,y)),q(v)&&((v=fc(b.url)?h()[b.xsrfCookieName||a.xsrfCookieName]:void 0)&&(z[b.xsrfHeaderName||a.xsrfHeaderName]=v),g(b.method,A,e,i,z,b.timeout,b.withCredentials,b.responseType,f(b.eventHandlers),f(b.uploadEventHandlers))),y}function p(a,b){return 0<b.length&&(a+=(-1===a.indexOf("?")?"?":"&")+b),a}var t=j("$http");a.paramSerializer=u(a.paramSerializer)?m.get(a.paramSerializer):a.paramSerializer;var v=[];return d(f,function(a){v.unshift(u(a)?m.get(a):m.invoke(a))}),n.pendingRequests=[],function(a){d(arguments,function(a){n[a]=function(b,c){return n(i({},c||{},{method:a,url:b}))}})}("get","delete","head","jsonp"),function(a){d(arguments,function(a){n[a]=function(b,c,d){return n(i({},d||{},{method:a,url:b,data:c}))}})}("post","put","patch"),n.defaults=a,n}]}function jb(){this.$get=function(){return function(){return new a.XMLHttpRequest}}}function kb(){this.$get=["$browser","$jsonpCallbacks","$document","$xhrFactory",function(a,b,c,d){return lb(a,d,a.defer,b,c[0])}]}function lb(a,b,c,e,f){function g(a,b,c){a=a.replace("JSON_CALLBACK",b);var d=f.createElement("script"),g=null;return d.type="text/javascript",d.src=a,d.async=!0,g=function(a){d.removeEventListener("load",g,!1),d.removeEventListener("error",g,!1),f.body.removeChild(d),d=null;var h=-1,i="unknown";a&&("load"!==a.type||e.wasCalled(b)||(a={type:"error"}),i=a.type,h="error"===a.type?404:200),c&&c(h,i)},d.addEventListener("load",g,!1),d.addEventListener("error",g,!1),f.body.appendChild(d),g}return function(f,h,i,j,k,l,n,o,p,s){function t(){w&&w(),y&&y.abort()}function u(b,d,e,f,g){r(z)&&c.cancel(z),w=y=null,b(d,e,f,g),a.$$completeOutstandingRequest(m)}if(a.$$incOutstandingRequestCount(),h=h||a.url(),"jsonp"===Yc(f))var v=e.createCallback(h),w=g(h,v,function(a,b){var c=200===a&&e.getResponse(v);u(j,a,c,"",b),e.removeCallback(v)});else{var y=b(f,h);if(y.open(f,h,!0),d(k,function(a,b){r(a)&&y.setRequestHeader(b,a)}),y.onload=function(){var a=y.statusText||"",b="response"in y?y.response:y.responseText,c=1223===y.status?204:y.status;0===c&&(c=b?200:"file"===ec(h).protocol?404:0),u(j,c,b,y.getAllResponseHeaders(),a)},f=function(){u(j,-1,null,null,"")},y.onerror=f,y.onabort=f,y.ontimeout=f,d(p,function(a,b){y.addEventListener(b,a)}),d(s,function(a,b){y.upload.addEventListener(b,a)}),n&&(y.withCredentials=!0),o)try{y.responseType=o}catch(a){if("json"!==o)throw a}y.send(q(i)?null:i)}if(0<l)var z=c(t,l);else l&&x(l.then)&&l.then(t)}}function mb(){var a="{{",b="}}";this.startSymbol=function(b){return b?(a=b,this):a},this.endSymbol=function(a){return a?(b=a,this):b},this.$get=["$parse","$exceptionHandler","$sce",function(c,d,e){function f(a){return"\\\\\\"+a}function g(c){return c.replace(m,a).replace(n,b)}function h(a,b,c,d){var e=a.$watch(function(a){return e(),d(a)},b,c);return e}function j(f,j,m,n){function p(a){try{var b=a;a=m?e.getTrusted(m,b):e.valueOf(b);var c;if(n&&!r(a))c=a;else if(null==a)c="";else{switch(typeof a){case"string":break;case"number":a=""+a;break;default:a=M(a)}c=a}return c}catch(a){d(je.interr(f,a))}}if(!f.length||-1===f.indexOf(a)){var s;return j||(j=g(f),s=o(j),s.exp=f,s.expressions=[],s.$$watchDelegate=h),s}n=!!n;var t,u,v=0,w=[],y=[];s=f.length;for(var z=[],A=[];v<s;){if(-1===(t=f.indexOf(a,v))||-1===(u=f.indexOf(b,t+k))){v!==s&&z.push(g(f.substring(v)));break}v!==t&&z.push(g(f.substring(v,t))),v=f.substring(t+k,u),w.push(v),y.push(c(v,p)),v=u+l,A.push(z.length),z.push("")}if(m&&1<z.length&&je.throwNoconcat(f),!j||w.length){var B=function(a){for(var b=0,c=w.length;b<c;b++){if(n&&q(a[b]))return;z[A[b]]=a[b]}return z.join("")};return i(function(a){var b=0,c=w.length,e=Array(c);try{for(;b<c;b++)e[b]=y[b](a);return B(e)}catch(a){d(je.interr(f,a))}},{exp:f,expressions:w,$$watchDelegate:function(a,b){var c;return a.$watchGroup(y,function(d,e){var f=B(d);x(b)&&b.call(this,f,d!==e?c:f,a),c=f})}})}}var k=a.length,l=b.length,m=new RegExp(a.replace(/./g,f),"g"),n=new RegExp(b.replace(/./g,f),"g");return j.startSymbol=function(){return a},j.endSymbol=function(){return b},j}]}function nb(){this.$get=["$rootScope","$window","$q","$$q","$browser",function(a,b,c,d,e){function f(f,h,i,j){function k(){l?f.apply(null,m):f(p)}var l=4<arguments.length,m=l?$c.call(arguments,4):[],n=b.setInterval,o=b.clearInterval,p=0,q=r(j)&&!j,s=(q?d:c).defer(),t=s.promise;return i=r(i)?i:0,t.$$intervalId=n(function(){q?e.defer(k):a.$evalAsync(k),s.notify(p++),0<i&&p>=i&&(s.resolve(p),o(t.$$intervalId),delete g[t.$$intervalId]),q||a.$apply()},h),g[t.$$intervalId]=s,t}var g={};return f.cancel=function(a){return!!(a&&a.$$intervalId in g)&&(g[a.$$intervalId].reject("canceled"),b.clearInterval(a.$$intervalId),delete g[a.$$intervalId],!0)},f}]}function ob(a){a=a.split("/");for(var b=a.length;b--;)a[b]=U(a[b]);return a.join("/")}function pb(a,b){var c=ec(a);b.$$protocol=c.protocol,b.$$host=c.hostname,b.$$port=k(c.port)||me[c.protocol]||null}function qb(a,b){if(oe.test(a))throw ne("badpath",a);var c="/"!==a.charAt(0);c&&(a="/"+a);var d=ec(a);b.$$path=decodeURIComponent(c&&"/"===d.pathname.charAt(0)?d.pathname.substring(1):d.pathname),b.$$search=S(d.search),b.$$hash=decodeURIComponent(d.hash),b.$$path&&"/"!==b.$$path.charAt(0)&&(b.$$path="/"+b.$$path)}function rb(a,b){if(b.slice(0,a.length)===a)return b.substr(a.length)}function sb(a){var b=a.indexOf("#");return-1===b?a:a.substr(0,b)}function tb(a){return a.replace(/(#.+)|#$/,"$1")}function ub(a,b,c){this.$$html5=!0,c=c||"",pb(a,this),this.$$parse=function(a){var c=rb(b,a);if(!u(c))throw ne("ipthprfx",a,b);qb(c,this),this.$$path||(this.$$path="/"),this.$$compose()},this.$$compose=function(){var a=T(this.$$search),c=this.$$hash?"#"+U(this.$$hash):"";this.$$url=ob(this.$$path)+(a?"?"+a:"")+c,this.$$absUrl=b+this.$$url.substr(1)},this.$$parseLinkUrl=function(d,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),!0;var f,g;return r(f=rb(a,d))?(g=f,g=c&&r(f=rb(c,f))?b+(rb("/",f)||f):a+g):r(f=rb(b,d))?g=b+f:b===d+"/"&&(g=b),g&&this.$$parse(g),!!g}}function vb(a,b,c){pb(a,this),this.$$parse=function(d){var e,f=rb(a,d)||rb(b,d);q(f)||"#"!==f.charAt(0)?this.$$html5?e=f:(e="",q(f)&&(a=d,this.replace())):(e=rb(c,f),q(e)&&(e=f)),qb(e,this),d=this.$$path;var f=a,g=/^\/[A-Z]:(\/.*)/;e.slice(0,f.length)===f&&(e=e.replace(f,"")),g.exec(e)||(d=(e=g.exec(d))?e[1]:d),this.$$path=d,this.$$compose()},this.$$compose=function(){var b=T(this.$$search),d=this.$$hash?"#"+U(this.$$hash):"";this.$$url=ob(this.$$path)+(b?"?"+b:"")+d,this.$$absUrl=a+(this.$$url?c+this.$$url:"")},this.$$parseLinkUrl=function(b,c){return sb(a)===sb(b)&&(this.$$parse(b),!0)}}function wb(a,b,c){this.$$html5=!0,vb.apply(this,arguments),this.$$parseLinkUrl=function(d,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),!0;var f,g;return a===sb(d)?f=d:(g=rb(b,d))?f=a+c+g:b===d+"/"&&(f=b),f&&this.$$parse(f),!!f},this.$$compose=function(){var b=T(this.$$search),d=this.$$hash?"#"+U(this.$$hash):"";this.$$url=ob(this.$$path)+(b?"?"+b:"")+d,this.$$absUrl=a+c+this.$$url}}function xb(a){return function(){return this[a]}}function yb(a,b){return function(c){return q(c)?this[a]:(this[a]=b(c),this.$$compose(),this)}}function zb(){var a="",b={enabled:!1,requireBase:!0,rewriteLinks:!0};this.hashPrefix=function(b){return r(b)?(a=b,this):a},this.html5Mode=function(a){return B(a)?(b.enabled=a,this):s(a)?(B(a.enabled)&&(b.enabled=a.enabled),B(a.requireBase)&&(b.requireBase=a.requireBase),(B(a.rewriteLinks)||u(a.rewriteLinks))&&(b.rewriteLinks=a.rewriteLinks),this):b},this.$get=["$rootScope","$browser","$sniffer","$rootElement","$window",function(c,d,e,f,g){function h(a,b,c){var e=j.url(),f=j.$$state;try{d.url(a,b,c),j.$$state=d.state()}catch(a){throw j.url(e),j.$$state=f,a}}function i(a,b){c.$broadcast("$locationChangeSuccess",j.absUrl(),a,j.$$state,b)}var j,k;k=d.baseHref();var l,m=d.url();if(b.enabled){if(!k&&b.requireBase)throw ne("nobase");l=m.substring(0,m.indexOf("/",m.indexOf("//")+2))+(k||"/"),k=e.history?ub:wb}else l=sb(m),k=vb;var n=l.substr(0,sb(l).lastIndexOf("/")+1);j=new k(l,n,"#"+a),j.$$parseLinkUrl(m,m),j.$$state=d.state();var o=/^\s*(javascript|mailto):/i;f.on("click",function(a){var e=b.rewriteLinks;if(e&&!a.ctrlKey&&!a.metaKey&&!a.shiftKey&&2!==a.which&&2!==a.button){for(var h=Tc(a.target);"a"!==F(h[0]);)if(h[0]===f[0]||!(h=h.parent())[0])return;if(!u(e)||!q(h.attr(e))){var e=h.prop("href"),i=h.attr("href")||h.attr("xlink:href");s(e)&&"[object SVGAnimatedString]"===e.toString()&&(e=ec(e.animVal).href),o.test(e)||!e||h.attr("target")||a.isDefaultPrevented()||!j.$$parseLinkUrl(e,i)||(a.preventDefault(),j.absUrl()!==d.url()&&(c.$apply(),g.angular["ff-684208-preventDefault"]=!0))}}}),tb(j.absUrl())!==tb(m)&&d.url(j.absUrl(),!0);var p=!0;return d.onUrlChange(function(a,b){q(rb(n,a))?g.location.href=a:(c.$evalAsync(function(){var d,e=j.absUrl(),f=j.$$state;a=tb(a),j.$$parse(a),j.$$state=b,d=c.$broadcast("$locationChangeStart",a,e,b,f).defaultPrevented,j.absUrl()===a&&(d?(j.$$parse(e),j.$$state=f,h(e,!1,f)):(p=!1,i(e,f)))}),c.$$phase||c.$digest())}),c.$watch(function(){var a=tb(d.url()),b=tb(j.absUrl()),f=d.state(),g=j.$$replace,k=a!==b||j.$$html5&&e.history&&f!==j.$$state;(p||k)&&(p=!1,c.$evalAsync(function(){var b=j.absUrl(),d=c.$broadcast("$locationChangeStart",b,a,j.$$state,f).defaultPrevented;j.absUrl()===b&&(d?(j.$$parse(a),j.$$state=f):(k&&h(b,g,f===j.$$state?null:j.$$state),i(a,f)))})),j.$$replace=!1}),j}]}function Ab(){var a=!0,b=this;this.debugEnabled=function(b){return r(b)?(a=b,this):a},this.$get=["$window",function(c){function e(a){return a instanceof Error&&(a.stack?a=a.message&&-1===a.stack.indexOf(a.message)?"Error: "+a.message+"\n"+a.stack:a.stack:a.sourceURL&&(a=a.message+"\n"+a.sourceURL+":"+a.line)),a}function f(a){var b=c.console||{},f=b[a]||b.log||m;a=!1;try{a=!!f.apply}catch(a){}return a?function(){var a=[];return d(arguments,function(b){a.push(e(b))}),f.apply(b,a)}:function(a,b){f(a,null==b?"":b)}}return{log:f("log"),info:f("info"),warn:f("warn"),error:f("error"),debug:function(){var c=f("debug");return function(){a&&c.apply(b,arguments)}}()}}]}function Bb(a,b){if("__defineGetter__"===a||"__defineSetter__"===a||"__lookupGetter__"===a||"__lookupSetter__"===a||"__proto__"===a)throw qe("isecfld",b);return a}function Cb(a){return a+""}function Db(a,b){if(a){if(a.constructor===a)throw qe("isecfn",b);if(a.window===a)throw qe("isecwindow",b);if(a.children&&(a.nodeName||a.prop&&a.attr&&a.find))throw qe("isecdom",b);if(a===Object)throw qe("isecobj",b)}return a}function Eb(a,b){if(a){if(a.constructor===a)throw qe("isecfn",b);if(a===De||a===Ee||a===Fe)throw qe("isecff",b)}}function Fb(a,b){if(a&&(a===re||a===se||a===te||a===ue||a===ve||a===we||a===xe||a===ye||a===ze||a===Ae||a===Be||a===Ce))throw qe("isecaf",b)}function Gb(a,b){return void 0!==a?a:b}function Hb(a,b){return void 0===a?b:void 0===b?a:a+b}function Ib(a,b){var c,e,f;switch(a.type){case Ke.Program:c=!0,d(a.body,function(a){Ib(a.expression,b),c=c&&a.expression.constant}),a.constant=c;break;case Ke.Literal:a.constant=!0,a.toWatch=[];break;case Ke.UnaryExpression:Ib(a.argument,b),a.constant=a.argument.constant,a.toWatch=a.argument.toWatch;break;case Ke.BinaryExpression:Ib(a.left,b),Ib(a.right,b),a.constant=a.left.constant&&a.right.constant,a.toWatch=a.left.toWatch.concat(a.right.toWatch);break;case Ke.LogicalExpression:Ib(a.left,b),Ib(a.right,b),a.constant=a.left.constant&&a.right.constant,a.toWatch=a.constant?[]:[a];break;case Ke.ConditionalExpression:Ib(a.test,b),Ib(a.alternate,b),Ib(a.consequent,b),a.constant=a.test.constant&&a.alternate.constant&&a.consequent.constant,a.toWatch=a.constant?[]:[a];break;case Ke.Identifier:a.constant=!1,a.toWatch=[a];break;case Ke.MemberExpression:Ib(a.object,b),a.computed&&Ib(a.property,b),a.constant=a.object.constant&&(!a.computed||a.property.constant),a.toWatch=[a];break;case Ke.CallExpression:c=f=!!a.filter&&!b(a.callee.name).$stateful,e=[],d(a.arguments,function(a){Ib(a,b),c=c&&a.constant,a.constant||e.push.apply(e,a.toWatch)}),a.constant=c,a.toWatch=f?e:[a];break;case Ke.AssignmentExpression:Ib(a.left,b),Ib(a.right,b),a.constant=a.left.constant&&a.right.constant,a.toWatch=[a];break;case Ke.ArrayExpression:c=!0,e=[],d(a.elements,function(a){Ib(a,b),c=c&&a.constant,a.constant||e.push.apply(e,a.toWatch)}),a.constant=c,a.toWatch=e;break;case Ke.ObjectExpression:c=!0,e=[],d(a.properties,function(a){Ib(a.value,b),c=c&&a.value.constant&&!a.computed,a.value.constant||e.push.apply(e,a.value.toWatch)}),a.constant=c,a.toWatch=e;break;case Ke.ThisExpression:a.constant=!1,a.toWatch=[];break;case Ke.LocalsExpression:a.constant=!1,a.toWatch=[]}}function Jb(a){if(1===a.length){a=a[0].expression;var b=a.toWatch;return 1!==b.length?b:b[0]!==a?b:void 0}}function Kb(a){return a.type===Ke.Identifier||a.type===Ke.MemberExpression}function Lb(a){if(1===a.body.length&&Kb(a.body[0].expression))return{type:Ke.AssignmentExpression,left:a.body[0].expression,right:{type:Ke.NGValueParameter},operator:"="}}function Mb(a){return 0===a.body.length||1===a.body.length&&(a.body[0].expression.type===Ke.Literal||a.body[0].expression.type===Ke.ArrayExpression||a.body[0].expression.type===Ke.ObjectExpression)}function Nb(a,b){this.astBuilder=a,this.$filter=b}function Ob(a,b){this.astBuilder=a,this.$filter=b}function Pb(a){return"constructor"===a}function Qb(a){return x(a.valueOf)?a.valueOf():Ge.call(a)}function Rb(){var a,b,c=fa(),e=fa(),f={true:!0,false:!1,null:null,undefined:void 0};this.addLiteral=function(a,b){f[a]=b},this.setIdentifierFns=function(c,d){return a=c,b=d,this},this.$get=["$filter",function(g){function h(a,b,d){var f,h,j;switch(d=d||u,typeof a){case"string":j=a=a.trim();var q=d?e:c;if(!(f=q[j])){":"===a.charAt(0)&&":"===a.charAt(1)&&(h=!0,a=a.substring(2)),f=d?t:s;var r=new Je(f);f=new Le(r,g,f).parse(a),f.constant?f.$$watchDelegate=o:h?f.$$watchDelegate=f.literal?n:l:f.inputs&&(f.$$watchDelegate=k),d&&(f=i(f)),q[j]=f}return p(f,b);case"function":return p(a,b);default:return p(m,b)}}function i(a){function b(b,c,d,e){var f=u;u=!0;try{return a(b,c,d,e)}finally{u=f}}if(!a)return a;b.$$watchDelegate=a.$$watchDelegate,b.assign=i(a.assign),b.constant=a.constant,b.literal=a.literal;for(var c=0;a.inputs&&c<a.inputs.length;++c)a.inputs[c]=i(a.inputs[c]);return b.inputs=a.inputs,b}function j(a,b){return null==a||null==b?a===b:("object"!=typeof a||"object"!=typeof(a=Qb(a)))&&(a===b||a!==a&&b!==b)}function k(a,b,c,d,e){var f,g=d.inputs;if(1===g.length){var h=j,g=g[0];return a.$watch(function(a){var b=g(a);return j(b,h)||(f=d(a,void 0,void 0,[b]),h=b&&Qb(b)),f},b,c,e)}for(var i=[],k=[],l=0,m=g.length;l<m;l++)i[l]=j,k[l]=null;return a.$watch(function(a){for(var b=!1,c=0,e=g.length;c<e;c++){var h=g[c](a);(b||(b=!j(h,i[c])))&&(k[c]=h,i[c]=h&&Qb(h))}return b&&(f=d(a,void 0,void 0,k)),f},b,c,e)}function l(a,b,c,d){var e,f;return e=a.$watch(function(a){return d(a)},function(a,c,d){f=a,x(b)&&b.apply(this,arguments),r(a)&&d.$$postDigest(function(){r(f)&&e()})},c)}function n(a,b,c,e){function f(a){var b=!0;return d(a,function(a){r(a)||(b=!1)}),b}var g,h;return g=a.$watch(function(a){return e(a)},function(a,c,d){h=a,x(b)&&b.call(this,a,c,d),f(a)&&d.$$postDigest(function(){f(h)&&g()})},c)}function o(a,b,c,d){var e=a.$watch(function(a){return e(),d(a)},b,c);return e}function p(a,b){if(!b)return a;var c=a.$$watchDelegate,d=!1,c=c!==n&&c!==l?function(c,e,f,g){return f=d&&g?g[0]:a(c,e,f,g),b(f,c,e)}:function(c,d,e,f){return e=a(c,d,e,f),c=b(e,c,d),r(e)?c:e};return a.$$watchDelegate&&a.$$watchDelegate!==k?c.$$watchDelegate=a.$$watchDelegate:b.$stateful||(c.$$watchDelegate=k,d=!a.inputs,c.inputs=a.inputs?a.inputs:[a]),c}var q=ld().noUnsafeEval,s={csp:q,expensiveChecks:!1,literals:H(f),isIdentifierStart:x(a)&&a,isIdentifierContinue:x(b)&&b},t={csp:q,expensiveChecks:!0,literals:H(f),isIdentifierStart:x(a)&&a,isIdentifierContinue:x(b)&&b},u=!1;return h.$$runningExpensiveChecks=function(){return u},h}]}function Sb(){this.$get=["$rootScope","$exceptionHandler",function(a,b){return Ub(function(b){a.$evalAsync(b)},b)}]}function Tb(){this.$get=["$browser","$exceptionHandler",function(a,b){return Ub(function(b){a.defer(b)},b)}]}function Ub(a,c){function e(){var a=new j;return a.resolve=g(a,a.resolve),a.reject=g(a,a.reject),a.notify=g(a,a.notify),a}function f(){this.$$state={status:0}}function g(a,b){return function(c){b.call(a,c)}}function h(b){!b.processScheduled&&b.pending&&(b.processScheduled=!0,a(function(){var a,d,e;e=b.pending,b.processScheduled=!1,b.pending=void 0;for(var f=0,g=e.length;f<g;++f){d=e[f][0],a=e[f][b.status];try{x(a)?d.resolve(a(b.value)):1===b.status?d.resolve(b.value):d.reject(b.value)}catch(a){d.reject(a),c(a)}}}))}function j(){this.promise=new f}function k(a){var b=new j;return b.reject(a),b.promise}function l(a,b,c){var d=null;try{x(c)&&(d=c())}catch(a){return k(a)}return d&&x(d.then)?d.then(function(){return b(a)},k):b(a)}function m(a,b,c,d){var e=new j;return e.resolve(a),e.promise.then(b,c,d)}function n(a){if(!x(a))throw o("norslvr",a);var b=new j;return a(function(a){b.resolve(a)},function(a){b.reject(a)}),b.promise}var o=b("$q",TypeError);i(f.prototype,{then:function(a,b,c){if(q(a)&&q(b)&&q(c))return this;var d=new j;return this.$$state.pending=this.$$state.pending||[],this.$$state.pending.push([d,a,b,c]),0<this.$$state.status&&h(this.$$state),d.promise},catch:function(a){return this.then(null,a)},finally:function(a,b){return this.then(function(b){return l(b,p,a)},function(b){return l(b,k,a)},b)}}),i(j.prototype,{resolve:function(a){this.promise.$$state.status||(a===this.promise?this.$$reject(o("qcycle",a)):this.$$resolve(a))},$$resolve:function(a){function b(a){i||(i=!0,f.$$resolve(a))}function d(a){i||(i=!0,f.$$reject(a))}var e,f=this,i=!1;try{(s(a)||x(a))&&(e=a&&a.then),x(e)?(this.promise.$$state.status=-1,e.call(a,b,d,g(this,this.notify))):(this.promise.$$state.value=a,this.promise.$$state.status=1,h(this.promise.$$state))}catch(a){d(a),c(a)}},reject:function(a){this.promise.$$state.status||this.$$reject(a)},$$reject:function(a){this.promise.$$state.value=a,this.promise.$$state.status=2,h(this.promise.$$state)},notify:function(b){var d=this.promise.$$state.pending;0>=this.promise.$$state.status&&d&&d.length&&a(function(){for(var a,e,f=0,g=d.length;f<g;f++){e=d[f][0],a=d[f][3];try{e.notify(x(a)?a(b):b)}catch(a){c(a)}}})}});var p=m;return n.prototype=f.prototype,n.defer=e,n.reject=k,n.when=m,n.resolve=p,n.all=function(a){var b=new j,c=0,e=hd(a)?[]:{};return d(a,function(a,d){c++,m(a).then(function(a){e[d]=a,--c||b.resolve(e)},function(a){b.reject(a)})}),0===c&&b.resolve(e),b.promise},n.race=function(a){var b=e();return d(a,function(a){m(a).then(b.resolve,b.reject)}),b.promise},n}function Vb(){this.$get=["$window","$timeout",function(a,b){var c=a.requestAnimationFrame||a.webkitRequestAnimationFrame,d=a.cancelAnimationFrame||a.webkitCancelAnimationFrame||a.webkitCancelRequestAnimationFrame,e=!!c,f=e?function(a){var b=c(a);return function(){d(b)}}:function(a){var c=b(a,16.66,!1);return function(){b.cancel(c)}};return f.supported=e,f}]}function Wb(){function a(a){function b(){this.$$watchers=this.$$nextSibling=this.$$childHead=this.$$childTail=null,this.$$listeners={},this.$$listenerCount={},this.$$watchersCount=0,this.$id=++fd,this.$$ChildScope=null}return b.prototype=a,b}var e=10,f=b("$rootScope"),g=null,h=null;this.digestTtl=function(a){return arguments.length&&(e=a),e},this.$get=["$exceptionHandler","$parse","$browser",function(b,i,j){function k(a){a.currentScope.$$destroyed=!0}function l(a){9===Sc&&(a.$$childHead&&l(a.$$childHead),a.$$nextSibling&&l(a.$$nextSibling)),a.$parent=a.$$nextSibling=a.$$prevSibling=a.$$childHead=a.$$childTail=a.$root=a.$$watchers=null}function n(){this.$id=++fd,this.$$phase=this.$parent=this.$$watchers=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=null,this.$root=this,this.$$destroyed=!1,this.$$listeners={},this.$$listenerCount={},this.$$watchersCount=0,this.$$isolateBindings=null}function o(a){if(w.$$phase)throw f("inprog",w.$$phase);w.$$phase=a}function p(a,b){do{a.$$watchersCount+=b}while(a=a.$parent)}function r(a,b,c){do{a.$$listenerCount[c]-=b,0===a.$$listenerCount[c]&&delete a.$$listenerCount[c]}while(a=a.$parent)}function t(){}function u(){for(;A.length;)try{A.shift()()}catch(a){b(a)}h=null}function v(){null===h&&(h=j.defer(function(){w.$apply(u)}))}n.prototype={constructor:n,$new:function(b,c){var d;return c=c||this,b?(d=new n,d.$root=this.$root):(this.$$ChildScope||(this.$$ChildScope=a(this)),d=new this.$$ChildScope),d.$parent=c,d.$$prevSibling=c.$$childTail,c.$$childHead?(c.$$childTail.$$nextSibling=d,c.$$childTail=d):c.$$childHead=c.$$childTail=d,(b||c!==this)&&d.$on("$destroy",k),d},$watch:function(a,b,c,d){var e=i(a);if(e.$$watchDelegate)return e.$$watchDelegate(this,b,c,e,a);var f=this,h=f.$$watchers,j={fn:b,last:t,get:e,exp:d||a,eq:!!c};return g=null,x(b)||(j.fn=m),h||(h=f.$$watchers=[],h.$$digestWatchIndex=-1),h.unshift(j),h.$$digestWatchIndex++,p(this,1),function(){var a=G(h,j);0<=a&&(p(f,-1),a<h.$$digestWatchIndex&&h.$$digestWatchIndex--),g=null}},$watchGroup:function(a,b){function c(){i=!1,j?(j=!1,b(f,f,h)):b(f,e,h)}var e=Array(a.length),f=Array(a.length),g=[],h=this,i=!1,j=!0;if(!a.length){var k=!0;return h.$evalAsync(function(){k&&b(f,f,h)}),function(){k=!1}}return 1===a.length?this.$watch(a[0],function(a,c,d){f[0]=a,e[0]=c,b(f,a===c?f:e,d)}):(d(a,function(a,b){var d=h.$watch(a,function(a,d){f[b]=a,e[b]=d,i||(i=!0,h.$evalAsync(c))});g.push(d)}),function(){for(;g.length;)g.shift()()})},$watchCollection:function(a,b){function d(a){e=a;var b,d,g;if(!q(e)){if(s(e))if(c(e))for(f!==m&&(f=m,p=f.length=0,k++),a=e.length,p!==a&&(k++,f.length=p=a),b=0;b<a;b++)g=f[b],d=e[b],g!==g&&d!==d||g===d||(k++,f[b]=d);else{f!==n&&(f=n={},p=0,k++),a=0;for(b in e)Xc.call(e,b)&&(a++,d=e[b],g=f[b],b in f?g!==g&&d!==d||g===d||(k++,f[b]=d):(p++,f[b]=d,k++));if(p>a)for(b in k++,f)Xc.call(e,b)||(p--,delete f[b])}else f!==e&&(f=e,k++);return k}}d.$stateful=!0;var e,f,g,h=this,j=1<b.length,k=0,l=i(a,d),m=[],n={},o=!0,p=0;return this.$watch(l,function(){if(o?(o=!1,b(e,e,h)):b(e,g,h),j)if(s(e))if(c(e)){g=Array(e.length);for(var a=0;a<e.length;a++)g[a]=e[a]}else for(a in g={},e)Xc.call(e,a)&&(g[a]=e[a]);else g=e})},$digest:function(){var a,c,d,i,k,l,m,n,p,q,r=e,s=[];o("$digest"),j.$$checkUrlChange(),this===w&&null!==h&&(j.defer.cancel(h),u()),g=null;do{for(m=!1,n=this,l=0;l<y.length;l++){try{q=y[l],q.scope.$eval(q.expression,q.locals)}catch(a){b(a)}g=null}y.length=0;a:do{if(l=n.$$watchers)for(l.$$digestWatchIndex=l.length;l.$$digestWatchIndex--;)try{if(a=l[l.$$digestWatchIndex])if(k=a.get,(c=k(n))===(d=a.last)||(a.eq?I(c,d):gd(c)&&gd(d))){if(a===g){m=!1;break a}}else m=!0,g=a,a.last=a.eq?H(c,null):c,i=a.fn,i(c,d===t?c:d,n),5>r&&(p=4-r,s[p]||(s[p]=[]),s[p].push({msg:x(a.exp)?"fn: "+(a.exp.name||a.exp.toString()):a.exp,newVal:c,oldVal:d}))}catch(a){b(a)}if(!(l=n.$$watchersCount&&n.$$childHead||n!==this&&n.$$nextSibling))for(;n!==this&&!(l=n.$$nextSibling);)n=n.$parent}while(n=l);if((m||y.length)&&!r--)throw w.$$phase=null,f("infdig",e,s)}while(m||y.length);for(w.$$phase=null;B<z.length;)try{z[B++]()}catch(a){b(a)}z.length=B=0},$destroy:function(){if(!this.$$destroyed){var a=this.$parent;this.$broadcast("$destroy"),this.$$destroyed=!0,this===w&&j.$$applicationDestroyed(),p(this,-this.$$watchersCount);for(var b in this.$$listenerCount)r(this,this.$$listenerCount[b],b);a&&a.$$childHead===this&&(a.$$childHead=this.$$nextSibling),a&&a.$$childTail===this&&(a.$$childTail=this.$$prevSibling),this.$$prevSibling&&(this.$$prevSibling.$$nextSibling=this.$$nextSibling),this.$$nextSibling&&(this.$$nextSibling.$$prevSibling=this.$$prevSibling),this.$destroy=this.$digest=this.$apply=this.$evalAsync=this.$applyAsync=m,this.$on=this.$watch=this.$watchGroup=function(){return m},this.$$listeners={},this.$$nextSibling=null,l(this)}},$eval:function(a,b){return i(a)(this,b)},$evalAsync:function(a,b){w.$$phase||y.length||j.defer(function(){y.length&&w.$digest()}),y.push({scope:this,expression:i(a),locals:b})},$$postDigest:function(a){z.push(a)},$apply:function(a){try{o("$apply");try{return this.$eval(a)}finally{w.$$phase=null}}catch(a){b(a)}finally{try{w.$digest()}catch(a){throw b(a),a}}},$applyAsync:function(a){function b(){c.$eval(a)}var c=this;a&&A.push(b),a=i(a),v()},$on:function(a,b){var c=this.$$listeners[a];c||(this.$$listeners[a]=c=[]),c.push(b);var d=this;do{d.$$listenerCount[a]||(d.$$listenerCount[a]=0),d.$$listenerCount[a]++}while(d=d.$parent);var e=this;return function(){var d=c.indexOf(b);-1!==d&&(c[d]=null,r(e,1,a))}},$emit:function(a,c){var d,e,f,g=[],h=this,i=!1,j={name:a,targetScope:h,stopPropagation:function(){i=!0},preventDefault:function(){j.defaultPrevented=!0},defaultPrevented:!1},k=J([j],arguments,1);do{for(d=h.$$listeners[a]||g,j.currentScope=h,e=0,f=d.length;e<f;e++)if(d[e])try{d[e].apply(null,k)}catch(a){b(a)}else d.splice(e,1),e--,f--;if(i)return j.currentScope=null,j;h=h.$parent}while(h);return j.currentScope=null,j},$broadcast:function(a,c){var d=this,e=this,f={name:a,targetScope:this,preventDefault:function(){f.defaultPrevented=!0},defaultPrevented:!1};if(!this.$$listenerCount[a])return f;for(var g,h,i=J([f],arguments,1);d=e;){for(f.currentScope=d,e=d.$$listeners[a]||[],g=0,h=e.length;g<h;g++)if(e[g])try{e[g].apply(null,i)}catch(a){b(a)}else e.splice(g,1),g--,h--;if(!(e=d.$$listenerCount[a]&&d.$$childHead||d!==this&&d.$$nextSibling))for(;d!==this&&!(e=d.$$nextSibling);)d=d.$parent}return f.currentScope=null,f}};var w=new n,y=w.$$asyncQueue=[],z=w.$$postDigestQueue=[],A=w.$$applyAsyncQueue=[],B=0;return w}]}function Xb(){var a=/^\s*(https?|ftp|mailto|tel|file):/,b=/^\s*((https?|ftp|file|blob):|data:image\/)/;this.aHrefSanitizationWhitelist=function(b){return r(b)?(a=b,this):a},this.imgSrcSanitizationWhitelist=function(a){return r(a)?(b=a,this):b},this.$get=function(){return function(c,d){var e,f=d?b:a;return e=ec(c).href,""===e||e.match(f)?c:"unsafe:"+e}}}function Yb(a){if("self"===a)return a;if(u(a)){if(-1<a.indexOf("***"))throw Me("iwcard",a);return a=kd(a).replace(/\\\*\\\*/g,".*").replace(/\\\*/g,"[^:/.?&;]*"),new RegExp("^"+a+"$")}if(y(a))return new RegExp("^"+a.source+"$");throw Me("imatcher")}function Zb(a){var b=[];return r(a)&&d(a,function(a){b.push(Yb(a))}),b}function $b(){this.SCE_CONTEXTS=Ne;var a=["self"],b=[];this.resourceUrlWhitelist=function(b){return arguments.length&&(a=Zb(b)),a},this.resourceUrlBlacklist=function(a){return arguments.length&&(b=Zb(a)),b},this.$get=["$injector",function(c){function d(a,b){return"self"===a?fc(b):!!a.exec(b.href)}function e(a){var b=function(a){this.$$unwrapTrustedValue=function(){return a}};return a&&(b.prototype=new a),b.prototype.valueOf=function(){return this.$$unwrapTrustedValue()},b.prototype.toString=function(){return this.$$unwrapTrustedValue().toString()},b}var f=function(a){throw Me("unsafe")};c.has("$sanitize")&&(f=c.get("$sanitize"));var g=e(),h={};return h[Ne.HTML]=e(g),h[Ne.CSS]=e(g),h[Ne.URL]=e(g),h[Ne.JS]=e(g),h[Ne.RESOURCE_URL]=e(h[Ne.URL]),{trustAs:function(a,b){var c=h.hasOwnProperty(a)?h[a]:null;if(!c)throw Me("icontext",a,b);if(null===b||q(b)||""===b)return b;if("string"!=typeof b)throw Me("itype",a);return new c(b)},getTrusted:function(c,e){if(null===e||q(e)||""===e)return e;var g=h.hasOwnProperty(c)?h[c]:null;if(g&&e instanceof g)return e.$$unwrapTrustedValue();if(c===Ne.RESOURCE_URL){var i,j,g=ec(e.toString()),k=!1;for(i=0,j=a.length;i<j;i++)if(d(a[i],g)){k=!0;break}if(k)for(i=0,j=b.length;i<j;i++)if(d(b[i],g)){k=!1;break}if(k)return e;throw Me("insecurl",e.toString())}if(c===Ne.HTML)return f(e);throw Me("unsafe")},valueOf:function(a){return a instanceof g?a.$$unwrapTrustedValue():a}}}]}function _b(){var a=!0;this.enabled=function(b){return arguments.length&&(a=!!b),a},this.$get=["$parse","$sceDelegate",function(b,c){if(a&&8>Sc)throw Me("iequirks");var e=ha(Ne);e.isEnabled=function(){return a},e.trustAs=c.trustAs,e.getTrusted=c.getTrusted,e.valueOf=c.valueOf,a||(e.trustAs=e.getTrusted=function(a,b){return b},e.valueOf=n),e.parseAs=function(a,c){var d=b(c);return d.literal&&d.constant?d:b(c,function(b){return e.getTrusted(a,b)})};var f=e.parseAs,g=e.getTrusted,h=e.trustAs;return d(Ne,function(a,b){var c=Yc(b);e[ia("parse_as_"+c)]=function(b){return f(a,b)},e[ia("get_trusted_"+c)]=function(b){return g(a,b)},e[ia("trust_as_"+c)]=function(b){return h(a,b)}}),e}]}function ac(){this.$get=["$window","$document",function(a,b){var c,d={},e=!(a.chrome&&(a.chrome.app&&a.chrome.app.runtime||!a.chrome.app&&a.chrome.runtime&&a.chrome.runtime.id))&&a.history&&a.history.pushState,f=k((/android (\d+)/.exec(Yc((a.navigator||{}).userAgent))||[])[1]),g=/Boxee/i.test((a.navigator||{}).userAgent),h=b[0]||{},i=/^(Moz|webkit|ms)(?=[A-Z])/,j=h.body&&h.body.style,l=!1,m=!1;if(j){for(var n in j)if(l=i.exec(n)){c=l[0],c=c[0].toUpperCase()+c.substr(1);break}c||(c="WebkitOpacity"in j&&"webkit"),l=!!("transition"in j||c+"Transition"in j),m=!!("animation"in j||c+"Animation"in j),!f||l&&m||(l=u(j.webkitTransition),m=u(j.webkitAnimation))}return{history:!(!e||4>f||g),hasEvent:function(a){if("input"===a&&11>=Sc)return!1;if(q(d[a])){var b=h.createElement("div");d[a]="on"+a in b}return d[a]},csp:ld(),vendorPrefix:c,transitions:l,animations:m,android:f}}]}function bc(){var a;this.httpOptions=function(b){return b?(a=b,this):a},this.$get=["$templateCache","$http","$q","$sce",function(b,c,d,e){function f(g,h){f.totalPendingRequests++,u(g)&&!q(b.get(g))||(g=e.getTrustedResourceUrl(g));var j=c.defaults&&c.defaults.transformResponse;return hd(j)?j=j.filter(function(a){return a!==eb}):j===eb&&(j=null),c.get(g,i({cache:b,transformResponse:j},a)).finally(function(){f.totalPendingRequests--}).then(function(a){return b.put(g,a.data),a.data},function(a){if(!h)throw Oe("tpload",g,a.status,a.statusText);return d.reject(a)})}return f.totalPendingRequests=0,f}]}function cc(){this.$get=["$rootScope","$browser","$location",function(a,b,c){return{findBindings:function(a,b,c){a=a.getElementsByClassName("ng-binding");var e=[];return d(a,function(a){var f=ed.element(a).data("$binding");f&&d(f,function(d){c?new RegExp("(^|\\s)"+kd(b)+"(\\s|\\||$)").test(d)&&e.push(a):-1!==d.indexOf(b)&&e.push(a)})}),e},findModels:function(a,b,c){for(var d=["ng-","data-ng-","ng\\:"],e=0;e<d.length;++e){var f=a.querySelectorAll("["+d[e]+"model"+(c?"=":"*=")+'"'+b+'"]');if(f.length)return f}},getLocation:function(){return c.url()},setLocation:function(b){b!==c.url()&&(c.url(b),a.$digest())},whenStable:function(a){b.notifyWhenNoOutstandingRequests(a)}}}]}function dc(){this.$get=["$rootScope","$browser","$q","$$q","$exceptionHandler",function(a,b,c,d,e){function f(f,h,i){x(f)||(i=h,h=f,f=m);var j,k=$c.call(arguments,3),l=r(i)&&!i,n=(l?d:c).defer(),o=n.promise;return j=b.defer(function(){try{n.resolve(f.apply(null,k))}catch(a){n.reject(a),e(a)}finally{delete g[o.$$timeoutId]}l||a.$apply()},h),o.$$timeoutId=j,g[j]=n,o}var g={};return f.cancel=function(a){return!!(a&&a.$$timeoutId in g)&&(g[a.$$timeoutId].reject("canceled"),delete g[a.$$timeoutId],
b.defer.cancel(a.$$timeoutId))},f}]}function ec(a){return Sc&&(Pe.setAttribute("href",a),a=Pe.href),Pe.setAttribute("href",a),{href:Pe.href,protocol:Pe.protocol?Pe.protocol.replace(/:$/,""):"",host:Pe.host,search:Pe.search?Pe.search.replace(/^\?/,""):"",hash:Pe.hash?Pe.hash.replace(/^#/,""):"",hostname:Pe.hostname,port:Pe.port,pathname:"/"===Pe.pathname.charAt(0)?Pe.pathname:"/"+Pe.pathname}}function fc(a){return a=u(a)?ec(a):a,a.protocol===Qe.protocol&&a.host===Qe.host}function gc(){this.$get=o(a)}function hc(a){function b(a){try{return decodeURIComponent(a)}catch(b){return a}}var c=a[0]||{},d={},e="";return function(){var a,f,g,h,i;try{a=c.cookie||""}catch(b){a=""}if(a!==e)for(e=a,a=e.split("; "),d={},g=0;g<a.length;g++)f=a[g],0<(h=f.indexOf("="))&&(i=b(f.substring(0,h)),q(d[i])&&(d[i]=b(f.substring(h+1))));return d}}function ic(){this.$get=hc}function jc(a){function b(c,e){if(s(c)){var f={};return d(c,function(a,c){f[c]=b(c,a)}),f}return a.factory(c+"Filter",e)}this.register=b,this.$get=["$injector",function(a){return function(b){return a.get(b+"Filter")}}],b("currency",oc),b("date",zc),b("filter",kc),b("json",Ac),b("limitTo",Bc),b("lowercase",Xe),b("number",pc),b("orderBy",Dc),b("uppercase",Ye)}function kc(){return function(a,d,e,f){if(!c(a)){if(null==a)return a;throw b("filter")("notarray",a)}f=f||"$";var g;switch(nc(d)){case"function":break;case"boolean":case"null":case"number":case"string":g=!0;case"object":d=lc(d,e,f,g);break;default:return a}return Array.prototype.filter.call(a,d)}}function lc(a,b,c,d){var e=s(a)&&c in a;return!0===b?b=I:x(b)||(b=function(a,b){return!q(a)&&(null===a||null===b?a===b:!(s(b)||s(a)&&!p(a))&&(a=Yc(""+a),b=Yc(""+b),-1!==a.indexOf(b)))}),function(f){return e&&!s(f)?mc(f,a[c],b,c,!1):mc(f,a,b,c,d)}}function mc(a,b,c,d,e,f){var g=nc(a),h=nc(b);if("string"===h&&"!"===b.charAt(0))return!mc(a,b.substring(1),c,d,e);if(hd(a))return a.some(function(a){return mc(a,b,c,d,e)});switch(g){case"object":var i;if(e){for(i in a)if("$"!==i.charAt(0)&&mc(a[i],b,c,d,!0))return!0;return!f&&mc(a,b,c,d,!1)}if("object"===h){for(i in b)if(f=b[i],!x(f)&&!q(f)&&(g=i===d,!mc(g?a:a[i],f,c,d,g,g)))return!1;return!0}return c(a,b);case"function":return!1;default:return c(a,b)}}function nc(a){return null===a?"null":typeof a}function oc(a){var b=a.NUMBER_FORMATS;return function(a,c,d){return q(c)&&(c=b.CURRENCY_SYM),q(d)&&(d=b.PATTERNS[1].maxFrac),null==a?a:sc(a,b.PATTERNS[1],b.GROUP_SEP,b.DECIMAL_SEP,d).replace(/\u00A4/g,c)}}function pc(a){var b=a.NUMBER_FORMATS;return function(a,c){return null==a?a:sc(a,b.PATTERNS[0],b.GROUP_SEP,b.DECIMAL_SEP,c)}}function qc(a){var b,c,d,e,f,g=0;for(-1<(c=a.indexOf(Se))&&(a=a.replace(Se,"")),0<(d=a.search(/e/i))?(0>c&&(c=d),c+=+a.slice(d+1),a=a.substring(0,d)):0>c&&(c=a.length),d=0;a.charAt(d)===Te;d++);if(d===(f=a.length))b=[0],c=1;else{for(f--;a.charAt(f)===Te;)f--;for(c-=d,b=[],e=0;d<=f;d++,e++)b[e]=+a.charAt(d)}return c>Re&&(b=b.splice(0,Re-1),g=c-1,c=1),{d:b,e:g,i:c}}function rc(a,b,c,d){var e=a.d,f=e.length-a.i;if(b=q(b)?Math.min(Math.max(c,f),d):+b,c=b+a.i,d=e[c],0<c){e.splice(Math.max(a.i,c));for(var g=c;g<e.length;g++)e[g]=0}else for(f=Math.max(0,f),a.i=1,e.length=Math.max(1,c=b+1),e[0]=0,g=1;g<c;g++)e[g]=0;if(5<=d)if(0>c-1){for(d=0;d>c;d--)e.unshift(0),a.i++;e.unshift(1),a.i++}else e[c-1]++;for(;f<Math.max(0,b);f++)e.push(0);(b=e.reduceRight(function(a,b,c,d){return b+=a,d[c]=b%10,Math.floor(b/10)},0))&&(e.unshift(b),a.i++)}function sc(a,b,c,d,e){if(!u(a)&&!v(a)||isNaN(a))return"";var f=!isFinite(a),g=!1,h=Math.abs(a)+"",i="";if(f)i="∞";else{for(g=qc(h),rc(g,e,b.minFrac,b.maxFrac),i=g.d,h=g.i,e=g.e,f=[],g=i.reduce(function(a,b){return a&&!b},!0);0>h;)i.unshift(0),h++;for(0<h?f=i.splice(h,i.length):(f=i,i=[0]),h=[],i.length>=b.lgSize&&h.unshift(i.splice(-b.lgSize,i.length).join(""));i.length>b.gSize;)h.unshift(i.splice(-b.gSize,i.length).join(""));i.length&&h.unshift(i.join("")),i=h.join(c),f.length&&(i+=d+f.join("")),e&&(i+="e+"+e)}return 0>a&&!g?b.negPre+i+b.negSuf:b.posPre+i+b.posSuf}function tc(a,b,c,d){var e="";for((0>a||d&&0>=a)&&(d?a=1-a:(a=-a,e="-")),a=""+a;a.length<b;)a=Te+a;return c&&(a=a.substr(a.length-b)),e+a}function uc(a,b,c,d,e){return c=c||0,function(f){return f=f["get"+a](),(0<c||f>-c)&&(f+=c),0===f&&-12===c&&(f=12),tc(f,b,d,e)}}function vc(a,b,c){return function(d,e){var f=d["get"+a]();return e[Zc((c?"STANDALONE":"")+(b?"SHORT":"")+a)][f]}}function wc(a){var b=new Date(a,0,1).getDay();return new Date(a,0,(4>=b?5:12)-b)}function xc(a){return function(b){var c=wc(b.getFullYear());return b=+new Date(b.getFullYear(),b.getMonth(),b.getDate()+(4-b.getDay()))-+c,b=1+Math.round(b/6048e5),tc(b,a)}}function yc(a,b){return 0>=a.getFullYear()?b.ERAS[0]:b.ERAS[1]}function zc(a){function b(a){var b;if(b=a.match(c)){a=new Date(0);var d=0,e=0,f=b[8]?a.setUTCFullYear:a.setFullYear,g=b[8]?a.setUTCHours:a.setHours;b[9]&&(d=k(b[9]+b[10]),e=k(b[9]+b[11])),f.call(a,k(b[1]),k(b[2])-1,k(b[3])),d=k(b[4]||0)-d,e=k(b[5]||0)-e,f=k(b[6]||0),b=Math.round(1e3*parseFloat("0."+(b[7]||0))),g.call(a,d,e,f,b)}return a}var c=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;return function(c,e,f){var g,h,i="",j=[];if(e=e||"mediumDate",e=a.DATETIME_FORMATS[e]||e,u(c)&&(c=We.test(c)?k(c):b(c)),v(c)&&(c=new Date(c)),!w(c)||!isFinite(c.getTime()))return c;for(;e;)(h=Ve.exec(e))?(j=J(j,h,1),e=j.pop()):(j.push(e),e=null);var l=c.getTimezoneOffset();return f&&(l=O(f,l),c=P(c,f,!0)),d(j,function(b){g=Ue[b],i+=g?g(c,a.DATETIME_FORMATS,l):"''"===b?"'":b.replace(/(^'|'$)/g,"").replace(/''/g,"'")}),i}}function Ac(){return function(a,b){return q(b)&&(b=2),M(a,b)}}function Bc(){return function(a,b,d){return b=1/0===Math.abs(Number(b))?Number(b):k(b),gd(b)?a:(v(a)&&(a=a.toString()),c(a)?(d=!d||isNaN(d)?0:k(d),d=0>d?Math.max(0,a.length+d):d,0<=b?Cc(a,d,d+b):0===d?Cc(a,b,a.length):Cc(a,Math.max(0,d+b),d)):a)}}function Cc(a,b,c){return u(a)?a.slice(b,c):$c.call(a,b,c)}function Dc(a){function d(b){return b.map(function(b){var c=1,d=n;if(x(b))d=b;else if(u(b)&&("+"!==b.charAt(0)&&"-"!==b.charAt(0)||(c="-"===b.charAt(0)?-1:1,b=b.substring(1)),""!==b&&(d=a(b),d.constant)))var e=d(),d=function(a){return a[e]};return{get:d,descending:c}})}function e(a){switch(typeof a){case"number":case"boolean":case"string":return!0;default:return!1}}function f(a,b){var c=0,d=a.type,e=b.type;if(d===e){var e=a.value,f=b.value;"string"===d?(e=e.toLowerCase(),f=f.toLowerCase()):"object"===d&&(s(e)&&(e=a.index),s(f)&&(f=b.index)),e!==f&&(c=e<f?-1:1)}else c=d<e?-1:1;return c}return function(a,g,h,i){if(null==a)return a;if(!c(a))throw b("orderBy")("notarray",a);hd(g)||(g=[g]),0===g.length&&(g=["+"]);var j=d(g),k=h?-1:1,l=x(i)?i:f;return a=Array.prototype.map.call(a,function(a,b){return{value:a,tieBreaker:{value:b,type:"number",index:b},predicateValues:j.map(function(c){var d=c.get(a);return c=typeof d,null===d?(c="string",d="null"):"object"===c&&(x(d.valueOf)&&(d=d.valueOf(),e(d))||p(d)&&(d=d.toString(),e(d))),{value:d,type:c,index:b}})}}),a.sort(function(a,b){for(var c=0,d=j.length;c<d;c++){var e=l(a.predicateValues[c],b.predicateValues[c]);if(e)return e*j[c].descending*k}return l(a.tieBreaker,b.tieBreaker)*k}),a=a.map(function(a){return a.value})}}function Ec(a){return x(a)&&(a={link:a}),a.restrict=a.restrict||"AC",o(a)}function Fc(a,b,c,e,f){var g=this,h=[];g.$error={},g.$$success={},g.$pending=void 0,g.$name=f(b.name||b.ngForm||"")(c),g.$dirty=!1,g.$pristine=!0,g.$valid=!0,g.$invalid=!1,g.$submitted=!1,g.$$parentForm=_e,g.$rollbackViewValue=function(){d(h,function(a){a.$rollbackViewValue()})},g.$commitViewValue=function(){d(h,function(a){a.$commitViewValue()})},g.$addControl=function(a){ca(a.$name,"input"),h.push(a),a.$name&&(g[a.$name]=a),a.$$parentForm=g},g.$$renameControl=function(a,b){var c=a.$name;g[c]===a&&delete g[c],g[b]=a,a.$name=b},g.$removeControl=function(a){a.$name&&g[a.$name]===a&&delete g[a.$name],d(g.$pending,function(b,c){g.$setValidity(c,null,a)}),d(g.$error,function(b,c){g.$setValidity(c,null,a)}),d(g.$$success,function(b,c){g.$setValidity(c,null,a)}),G(h,a),a.$$parentForm=_e},Qc({ctrl:this,$element:a,set:function(a,b,c){var d=a[b];d?-1===d.indexOf(c)&&d.push(c):a[b]=[c]},unset:function(a,b,c){var d=a[b];d&&(G(d,c),0===d.length&&delete a[b])},$animate:e}),g.$setDirty=function(){e.removeClass(a,Kf),e.addClass(a,Lf),g.$dirty=!0,g.$pristine=!1,g.$$parentForm.$setDirty()},g.$setPristine=function(){e.setClass(a,Kf,Lf+" ng-submitted"),g.$dirty=!1,g.$pristine=!0,g.$submitted=!1,d(h,function(a){a.$setPristine()})},g.$setUntouched=function(){d(h,function(a){a.$setUntouched()})},g.$setSubmitted=function(){e.addClass(a,"ng-submitted"),g.$submitted=!0,g.$$parentForm.$setSubmitted()}}function Gc(a){a.$formatters.push(function(b){return a.$isEmpty(b)?b:b.toString()})}function Hc(a,b,c,d,e,f){var g=Yc(b[0].type);if(!e.android){var h=!1;b.on("compositionstart",function(){h=!0}),b.on("compositionend",function(){h=!1,j()})}var i,j=function(a){if(i&&(f.defer.cancel(i),i=null),!h){var e=b.val();a=a&&a.type,"password"===g||c.ngTrim&&"false"===c.ngTrim||(e=jd(e)),(d.$viewValue!==e||""===e&&d.$$hasNativeValidators)&&d.$setViewValue(e,a)}};if(e.hasEvent("input"))b.on("input",j);else{var k=function(a,b,c){i||(i=f.defer(function(){i=null,b&&b.value===c||j(a)}))};b.on("keydown",function(a){var b=a.keyCode;91===b||15<b&&19>b||37<=b&&40>=b||k(a,this,this.value)}),e.hasEvent("paste")&&b.on("paste cut",k)}b.on("change",j),nf[g]&&d.$$hasNativeValidators&&g===c.type&&b.on("keydown wheel mousedown",function(a){if(!i){var b=this.validity,c=b.badInput,d=b.typeMismatch;i=f.defer(function(){i=null,b.badInput===c&&b.typeMismatch===d||j(a)})}}),d.$render=function(){var a=d.$isEmpty(d.$viewValue)?"":d.$viewValue;b.val()!==a&&b.val(a)}}function Ic(a,b){return function(c,e){var f,g;if(w(c))return c;if(u(c)){if('"'===c.charAt(0)&&'"'===c.charAt(c.length-1)&&(c=c.substring(1,c.length-1)),df.test(c))return new Date(c);if(a.lastIndex=0,f=a.exec(c))return f.shift(),g=e?{yyyy:e.getFullYear(),MM:e.getMonth()+1,dd:e.getDate(),HH:e.getHours(),mm:e.getMinutes(),ss:e.getSeconds(),sss:e.getMilliseconds()/1e3}:{yyyy:1970,MM:1,dd:1,HH:0,mm:0,ss:0,sss:0},d(f,function(a,c){c<b.length&&(g[b[c]]=+a)}),new Date(g.yyyy,g.MM-1,g.dd,g.HH,g.mm,g.ss||0,1e3*g.sss||0)}return NaN}}function Jc(a,b,c,d){return function(e,f,g,h,i,j,k){function l(a){return a&&!(a.getTime&&a.getTime()!==a.getTime())}function m(a){return r(a)&&!w(a)?c(a)||void 0:a}Kc(e,f,g,h),Hc(e,f,g,h,i,j);var n,o=h&&h.$options&&h.$options.timezone;if(h.$$parserName=a,h.$parsers.push(function(a){return h.$isEmpty(a)?null:b.test(a)?(a=c(a,n),o&&(a=P(a,o)),a):void 0}),h.$formatters.push(function(a){if(a&&!w(a))throw Nf("datefmt",a);return l(a)?((n=a)&&o&&(n=P(n,o,!0)),k("date")(a,d,o)):(n=null,"")}),r(g.min)||g.ngMin){var p;h.$validators.min=function(a){return!l(a)||q(p)||c(a)>=p},g.$observe("min",function(a){p=m(a),h.$validate()})}if(r(g.max)||g.ngMax){var s;h.$validators.max=function(a){return!l(a)||q(s)||c(a)<=s},g.$observe("max",function(a){s=m(a),h.$validate()})}}}function Kc(a,b,c,d){(d.$$hasNativeValidators=s(b[0].validity))&&d.$parsers.push(function(a){var c=b.prop("validity")||{};return c.badInput||c.typeMismatch?void 0:a})}function Lc(a){a.$$parserName="number",a.$parsers.push(function(b){return a.$isEmpty(b)?null:gf.test(b)?parseFloat(b):void 0}),a.$formatters.push(function(b){if(!a.$isEmpty(b)){if(!v(b))throw Nf("numfmt",b);b=b.toString()}return b})}function Mc(a){return r(a)&&!v(a)&&(a=parseFloat(a)),gd(a)?void 0:a}function Nc(a){var b=a.toString(),c=b.indexOf(".");return-1===c?-1<a&&1>a&&(a=/e-(\d+)$/.exec(b))?Number(a[1]):0:b.length-c-1}function Oc(a,b,c,d,e){if(r(d)){if(a=a(d),!a.constant)throw Nf("constexpr",c,d);return a(b)}return e}function Pc(a,b){return a="ngClass"+a,["$animate",function(c){function e(a,b){var c=[],d=0;a:for(;d<a.length;d++){for(var e=a[d],f=0;f<b.length;f++)if(e===b[f])continue a;c.push(e)}return c}function f(a){var b=[];return hd(a)?(d(a,function(a){b=b.concat(f(a))}),b):u(a)?a.split(" "):s(a)?(d(a,function(a,c){a&&(b=b.concat(c.split(" ")))}),b):a}return{restrict:"AC",link:function(g,h,i){function j(a){a=k(a,1),i.$addClass(a)}function k(a,b){var c=h.data("$classCounts")||fa(),e=[];return d(a,function(a){(0<b||c[a])&&(c[a]=(c[a]||0)+b,c[a]===+(0<b)&&e.push(a))}),h.data("$classCounts",c),e.join(" ")}function l(a,b){var d=e(b,a),f=e(a,b),d=k(d,1),f=k(f,-1);d&&d.length&&c.addClass(h,d),f&&f.length&&c.removeClass(h,f)}function m(a){if(!0===b||(1&g.$index)===b){var c=f(a||[]);if(n){if(!I(a,n)){var d=f(n);l(d,c)}}else j(c)}n=hd(a)?a.map(function(a){return ha(a)}):ha(a)}var n;i.$observe("class",function(b){m(g.$eval(i[a]))}),"ngClass"!==a&&g.$watch("$index",function(a,c){var d=1&a;if(d!==(1&c)){var e=f(n);d===b?j(e):(d=k(e,-1),i.$removeClass(d))}}),g.$watch(i[a],m,!0)}}}]}function Qc(a){function b(a,b){b&&!f[a]?(i.addClass(e,a),f[a]=!0):!b&&f[a]&&(i.removeClass(e,a),f[a]=!1)}function c(a,c){a=a?"-"+_(a,"-"):"",b(If+a,!0===c),b(Jf+a,!1===c)}var d=a.ctrl,e=a.$element,f={},g=a.set,h=a.unset,i=a.$animate;f[Jf]=!(f[If]=e.hasClass(If)),d.$setValidity=function(a,e,f){q(e)?(d.$pending||(d.$pending={}),g(d.$pending,a,f)):(d.$pending&&h(d.$pending,a,f),Rc(d.$pending)&&(d.$pending=void 0)),B(e)?e?(h(d.$error,a,f),g(d.$$success,a,f)):(g(d.$error,a,f),h(d.$$success,a,f)):(h(d.$error,a,f),h(d.$$success,a,f)),d.$pending?(b(Mf,!0),d.$valid=d.$invalid=void 0,c("",null)):(b(Mf,!1),d.$valid=Rc(d.$error),d.$invalid=!d.$valid,c("",d.$valid)),e=d.$pending&&d.$pending[a]?void 0:!d.$error[a]&&(!!d.$$success[a]||null),c(a,e),d.$$parentForm.$setValidity(a,e,d)}}function Rc(a){if(a)for(var b in a)if(a.hasOwnProperty(b))return!1;return!0}var Sc,Tc,Uc,Vc,Wc=/^\/(.+)\/([a-z]*)$/,Xc=Object.prototype.hasOwnProperty,Yc=function(a){return u(a)?a.toLowerCase():a},Zc=function(a){return u(a)?a.toUpperCase():a},$c=[].slice,_c=[].splice,ad=[].push,bd=Object.prototype.toString,cd=Object.getPrototypeOf,dd=b("ng"),ed=a.angular||(a.angular={}),fd=0;Sc=a.document.documentMode;var gd=Number.isNaN||function(a){return a!==a};m.$inject=[],n.$inject=[];var hd=Array.isArray,id=/^\[object (?:Uint8|Uint8Clamped|Uint16|Uint32|Int8|Int16|Int32|Float32|Float64)Array]$/,jd=function(a){return u(a)?a.trim():a},kd=function(a){return a.replace(/([-()[\]{}+?*.$^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08")},ld=function(){if(!r(ld.rules)){var b=a.document.querySelector("[ng-csp]")||a.document.querySelector("[data-ng-csp]");if(b){var c=b.getAttribute("ng-csp")||b.getAttribute("data-ng-csp");ld.rules={noUnsafeEval:!c||-1!==c.indexOf("no-unsafe-eval"),noInlineStyle:!c||-1!==c.indexOf("no-inline-style")}}else{b=ld;try{new Function(""),c=!1}catch(a){c=!0}b.rules={noUnsafeEval:c,noInlineStyle:!1}}}return ld.rules},md=function(){if(r(md.name_))return md.name_;var b,c,d,e,f=od.length;for(c=0;c<f;++c)if(d=od[c],b=a.document.querySelector("["+d.replace(":","\\:")+"jq]")){e=b.getAttribute(d+"jq");break}return md.name_=e},nd=/:/g,od=["ng-","data-ng-","ng:","x-ng-"],pd=function(a){var b=a.currentScript,b=b&&b.getAttribute("src");if(!b)return!0;var c=a.createElement("a");if(c.href=b,a.location.origin===c.origin)return!0;switch(c.protocol){case"http:":case"https:":case"ftp:":case"blob:":case"file:":case"data:":return!0;default:return!1}}(a.document),qd=/[A-Z]/g,rd=!1,sd=3,td={full:"1.5.11",major:1,minor:5,dot:11,codeName:"princely-quest"};ma.expando="ng339";var ud=ma.cache={},vd=1;ma._data=function(a){return this.cache[a[this.expando]]||{}};var wd=/([:\-_]+(.))/g,xd=/^moz([A-Z])/,yd={mouseleave:"mouseout",mouseenter:"mouseover"},zd=b("jqLite"),Ad=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,Bd=/<|&#?\w+;/,Cd=/<([\w:-]+)/,Dd=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,Ed={option:[1,'<select multiple="multiple">',"</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};Ed.optgroup=Ed.option,Ed.tbody=Ed.tfoot=Ed.colgroup=Ed.caption=Ed.thead,Ed.th=Ed.td;var Fd=a.Node.prototype.contains||function(a){return!!(16&this.compareDocumentPosition(a))},Gd=ma.prototype={ready:function(b){function c(){d||(d=!0,b())}var d=!1;"complete"===a.document.readyState?a.setTimeout(c):(this.on("DOMContentLoaded",c),ma(a).on("load",c))},toString:function(){var a=[];return d(this,function(b){a.push(""+b)}),"["+a.join(", ")+"]"},eq:function(a){return Tc(0<=a?this[a]:this[this.length+a])},length:0,push:ad,sort:[].sort,splice:[].splice},Hd={};d("multiple selected checked disabled readOnly required open".split(" "),function(a){Hd[Yc(a)]=a});var Id={};d("input select option textarea button form details".split(" "),function(a){Id[a]=!0});var Jd={ngMinlength:"minlength",ngMaxlength:"maxlength",ngMin:"min",ngMax:"max",ngPattern:"pattern"};d({data:sa,removeData:qa,hasData:function(a){for(var b in ud[a.ng339])return!0;return!1},cleanData:function(a){for(var b=0,c=a.length;b<c;b++)qa(a[b])}},function(a,b){ma[b]=a}),d({data:sa,inheritedData:ya,scope:function(a){return Tc.data(a,"$scope")||ya(a.parentNode||a,["$isolateScope","$scope"])},isolateScope:function(a){return Tc.data(a,"$isolateScope")||Tc.data(a,"$isolateScopeNoTemplate")},controller:xa,injector:function(a){return ya(a,"$injector")},removeAttr:function(a,b){a.removeAttribute(b)},hasClass:ta,css:function(a,b,c){if(b=ia(b),!r(c))return a.style[b];a.style[b]=c},attr:function(a,b,c){var d=a.nodeType;if(d!==sd&&2!==d&&8!==d)if(d=Yc(b),Hd[d]){if(!r(c))return a[b]||(a.attributes.getNamedItem(b)||m).specified?d:void 0;c?(a[b]=!0,a.setAttribute(b,d)):(a[b]=!1,a.removeAttribute(d))}else if(r(c))a.setAttribute(b,c);else if(a.getAttribute)return a=a.getAttribute(b,2),null===a?void 0:a},prop:function(a,b,c){if(!r(c))return a[b];a[b]=c},text:function(){function a(a,b){if(q(b)){var c=a.nodeType;return 1===c||c===sd?a.textContent:""}a.textContent=b}return a.$dv="",a}(),val:function(a,b){if(q(b)){if(a.multiple&&"select"===F(a)){var c=[];return d(a.options,function(a){a.selected&&c.push(a.value||a.text)}),0===c.length?null:c}return a.value}a.value=b},html:function(a,b){if(q(b))return a.innerHTML;oa(a,!0),a.innerHTML=b},empty:za},function(a,b){ma.prototype[b]=function(b,c){var d,e,f=this.length;if(a!==za&&q(2===a.length&&a!==ta&&a!==xa?b:c)){if(s(b)){for(d=0;d<f;d++)if(a===sa)a(this[d],b);else for(e in b)a(this[d],e,b[e]);return this}for(d=a.$dv,f=q(d)?Math.min(f,1):f,e=0;e<f;e++){var g=a(this[e],b,c);d=d?d+g:g}return d}for(d=0;d<f;d++)a(this[d],b,c);return this}}),d({removeData:qa,on:function(a,b,c,d){if(r(d))throw zd("onargs");if(ja(a)){d=ra(a,!0);var e=d.events,f=d.handle;f||(f=d.handle=Da(a,e)),d=0<=b.indexOf(" ")?b.split(" "):[b];for(var g=d.length,h=function(b,d,g){var h=e[b];h||(h=e[b]=[],h.specialHandlerWrapper=d,"$destroy"===b||g||a.addEventListener(b,f,!1)),h.push(c)};g--;)b=d[g],yd[b]?(h(yd[b],Fa),h(b,void 0,!0)):h(b)}},off:pa,one:function(a,b,c){a=Tc(a),a.on(b,function d(){a.off(b,c),a.off(b,d)}),a.on(b,c)},replaceWith:function(a,b){var c,e=a.parentNode;oa(a),d(new ma(b),function(b){c?e.insertBefore(b,c.nextSibling):e.replaceChild(b,a),c=b})},children:function(a){var b=[];return d(a.childNodes,function(a){1===a.nodeType&&b.push(a)}),b},contents:function(a){return a.contentDocument||a.childNodes||[]},append:function(a,b){var c=a.nodeType;if(1===c||11===c){b=new ma(b);for(var c=0,d=b.length;c<d;c++)a.appendChild(b[c])}},prepend:function(a,b){if(1===a.nodeType){var c=a.firstChild;d(new ma(b),function(b){a.insertBefore(b,c)})}},wrap:function(a,b){la(a,Tc(b).eq(0).clone()[0])},remove:Aa,detach:function(a){Aa(a,!0)},after:function(a,b){var c=a,d=a.parentNode;if(d){b=new ma(b);for(var e=0,f=b.length;e<f;e++){var g=b[e];d.insertBefore(g,c.nextSibling),c=g}}},addClass:va,removeClass:ua,toggleClass:function(a,b,c){b&&d(b.split(" "),function(b){var d=c;q(d)&&(d=!ta(a,b)),(d?va:ua)(a,b)})},parent:function(a){return(a=a.parentNode)&&11!==a.nodeType?a:null},next:function(a){return a.nextElementSibling},find:function(a,b){return a.getElementsByTagName?a.getElementsByTagName(b):[]},clone:na,triggerHandler:function(a,b,c){var e,f,g=b.type||b,h=ra(a);(h=(h=h&&h.events)&&h[g])&&(e={preventDefault:function(){this.defaultPrevented=!0},isDefaultPrevented:function(){return!0===this.defaultPrevented},stopImmediatePropagation:function(){this.immediatePropagationStopped=!0},isImmediatePropagationStopped:function(){return!0===this.immediatePropagationStopped},stopPropagation:m,type:g,target:a},b.type&&(e=i(e,b)),b=ha(h),f=c?[e].concat(c):[e],d(b,function(b){e.isImmediatePropagationStopped()||b.apply(a,f)}))}},function(a,b){ma.prototype[b]=function(b,c,d){for(var e,f=0,g=this.length;f<g;f++)q(e)?(e=a(this[f],b,c,d),r(e)&&(e=Tc(e))):wa(e,a(this[f],b,c,d));return r(e)?e:this}}),ma.prototype.bind=ma.prototype.on,ma.prototype.unbind=ma.prototype.off,Ia.prototype={put:function(a,b){this[Ha(a,this.nextUid)]=b},get:function(a){return this[Ha(a,this.nextUid)]},remove:function(a){var b=this[a=Ha(a,this.nextUid)];return delete this[a],b}};var Kd=[function(){this.$get=[function(){return Ia}]}],Ld=/^([^(]+?)=>/,Md=/^[^(]*\(\s*([^)]*)\)/m,Nd=/,/,Od=/^\s*(_?)(\S+?)\1\s*$/,Pd=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm,Qd=b("$injector");La.$$annotate=function(a,b,c){var e;if("function"==typeof a){if(!(e=a.$inject)){if(e=[],a.length){if(b)throw u(c)&&c||(c=a.name||Ka(a)),Qd("strictdi",c);b=Ja(a),d(b[1].split(Nd),function(a){a.replace(Od,function(a,b,c){e.push(c)})})}a.$inject=e}}else hd(a)?(b=a.length-1,ba(a[b],"fn"),e=a.slice(0,b)):ba(a,"fn",!0);return e};var Rd=b("$animate"),Sd=function(){this.$get=m},Td=function(){var a=new Ia,b=[];this.$get=["$$AnimateRunner","$rootScope",function(c,e){function f(a,b,c){var e=!1;return b&&(b=u(b)?b.split(" "):hd(b)?b:[],d(b,function(b){b&&(e=!0,a[b]=c)})),e}function g(){d(b,function(b){var c=a.get(b);if(c){var e=Oa(b.attr("class")),f="",g="";d(c,function(a,b){a!==!!e[b]&&(a?f+=(f.length?" ":"")+b:g+=(g.length?" ":"")+b)}),d(b,function(a){f&&va(a,f),g&&ua(a,g)}),a.remove(b)}}),b.length=0}return{enabled:m,on:m,off:m,pin:m,push:function(d,h,i,j){return j&&j(),i=i||{},i.from&&d.css(i.from),i.to&&d.css(i.to),(i.addClass||i.removeClass)&&(h=i.addClass,j=i.removeClass,i=a.get(d)||{},h=f(i,h,!0),j=f(i,j,!1),(h||j)&&(a.put(d,i),b.push(d),1===b.length&&e.$$postDigest(g))),d=new c,d.complete(),d}}}]},Ud=["$provide",function(a){var b=this;this.$$registeredAnimations=Object.create(null),this.register=function(c,d){if(c&&"."!==c.charAt(0))throw Rd("notcsel",c);var e=c+"-animation";b.$$registeredAnimations[c.substr(1)]=e,a.factory(e,d)},this.classNameFilter=function(a){if(1===arguments.length&&(this.$$classNameFilter=a instanceof RegExp?a:null)&&/(\s+|\/)ng-animate(\s+|\/)/.test(this.$$classNameFilter.toString()))throw Rd("nongcls","ng-animate");return this.$$classNameFilter},this.$get=["$$animateQueue",function(a){function b(a,b,c){if(c){var d;a:{for(d=0;d<c.length;d++){var e=c[d];if(1===e.nodeType){d=e;break a}}d=void 0}!d||d.parentNode||d.previousElementSibling||(c=null)}c?c.after(a):b.prepend(a)}return{on:a.on,off:a.off,pin:a.pin,enabled:a.enabled,cancel:function(a){a.end&&a.end()},enter:function(c,d,e,f){return d=d&&Tc(d),e=e&&Tc(e),d=d||e.parent(),b(c,d,e),a.push(c,"enter",Pa(f))},move:function(c,d,e,f){return d=d&&Tc(d),e=e&&Tc(e),d=d||e.parent(),b(c,d,e),a.push(c,"move",Pa(f))},leave:function(b,c){return a.push(b,"leave",Pa(c),function(){b.remove()})},addClass:function(b,c,d){return d=Pa(d),d.addClass=Na(d.addclass,c),a.push(b,"addClass",d)},removeClass:function(b,c,d){return d=Pa(d),d.removeClass=Na(d.removeClass,c),a.push(b,"removeClass",d)},setClass:function(b,c,d,e){return e=Pa(e),e.addClass=Na(e.addClass,c),e.removeClass=Na(e.removeClass,d),a.push(b,"setClass",e)},animate:function(b,c,d,e,f){return f=Pa(f),f.from=f.from?i(f.from,c):c,f.to=f.to?i(f.to,d):d,f.tempClasses=Na(f.tempClasses,e||"ng-inline-animate"),a.push(b,"animate",f)}}}]}],Vd=function(){this.$get=["$$rAF",function(a){function b(b){c.push(b),1<c.length||a(function(){for(var a=0;a<c.length;a++)c[a]();c=[]})}var c=[];return function(){var a=!1;return b(function(){a=!0}),function(c){a?c():b(c)}}}]},Wd=function(){this.$get=["$q","$sniffer","$$animateAsyncRun","$document","$timeout",function(a,b,c,e,f){function g(a){this.setHost(a);var b=c();this._doneCallbacks=[],this._tick=function(a){var c=e[0];c&&c.hidden?f(a,0,!1):b(a)},this._state=0}return g.chain=function(a,b){function c(){d===a.length?b(!0):a[d](function(a){!1===a?b(!1):(d++,c())})}var d=0;c()},g.all=function(a,b){function c(c){f=f&&c,++e===a.length&&b(f)}var e=0,f=!0;d(a,function(a){a.done(c)})},g.prototype={setHost:function(a){this.host=a||{}},done:function(a){2===this._state?a():this._doneCallbacks.push(a)},progress:m,getPromise:function(){if(!this.promise){var b=this;this.promise=a(function(a,c){b.done(function(b){!1===b?c():a()})})}return this.promise},then:function(a,b){return this.getPromise().then(a,b)},catch:function(a){return this.getPromise().catch(a)},finally:function(a){return this.getPromise().finally(a)},pause:function(){this.host.pause&&this.host.pause()},resume:function(){this.host.resume&&this.host.resume()},end:function(){this.host.end&&this.host.end(),this._resolve(!0)},cancel:function(){this.host.cancel&&this.host.cancel(),this._resolve(!1)},complete:function(a){var b=this;0===b._state&&(b._state=1,b._tick(function(){b._resolve(a)}))},_resolve:function(a){2!==this._state&&(d(this._doneCallbacks,function(b){b(a)}),this._doneCallbacks.length=0,this._state=2)}},g}]},Xd=function(){this.$get=["$$rAF","$q","$$AnimateRunner",function(a,b,c){return function(b,d){function e(){return a(function(){f.addClass&&(b.addClass(f.addClass),f.addClass=null),f.removeClass&&(b.removeClass(f.removeClass),f.removeClass=null),f.to&&(b.css(f.to),f.to=null),g||h.complete(),g=!0}),h}var f=d||{};f.$$prepared||(f=H(f)),f.cleanupStyles&&(f.from=f.to=null),f.from&&(b.css(f.from),f.from=null);var g,h=new c;return{start:e,end:e}}}]},Yd=b("$compile"),Zd=new function(){};Ua.$inject=["$provide","$$sanitizeUriProvider"],Va.prototype.isFirstChange=function(){return this.previousValue===Zd};var $d=/^((?:x|data)[:\-_])/i,_d=b("$controller"),ae=/^(\S+)(\s+as\s+([\w$]+))?$/,be=function(){this.$get=["$document",function(a){return function(b){return b?!b.nodeType&&b instanceof Tc&&(b=b[0]):b=a[0].body,b.offsetWidth+1}}]},ce="application/json",de={"Content-Type":ce+";charset=utf-8"},ee=/^\[|^\{(?!\{)/,fe={"[":/]$/,"{":/}$/},ge=/^\)]\}',?\n/,he=b("$http"),ie=function(a){return function(){throw he("legacy",a)}},je=ed.$interpolateMinErr=b("$interpolate");je.throwNoconcat=function(a){throw je("noconcat",a)},je.interr=function(a,b){return je("interr",a,b.toString())};var ke=function(){this.$get=["$window",function(a){function b(a){var b=function(a){b.data=a,b.called=!0};return b.id=a,b}var c=a.angular.callbacks,d={};return{createCallback:function(a){a="_"+(c.$$counter++).toString(36);var e="angular.callbacks."+a,f=b(a);return d[e]=c[a]=f,e},wasCalled:function(a){return d[a].called},getResponse:function(a){return d[a].data},removeCallback:function(a){delete c[d[a].id],delete d[a]}}}]},le=/^([^?#]*)(\?([^#]*))?(#(.*))?$/,me={http:80,https:443,ftp:21},ne=b("$location"),oe=/^\s*[\\/]{2,}/,pe={$$absUrl:"",$$html5:!1,$$replace:!1,absUrl:xb("$$absUrl"),url:function(a){if(q(a))return this.$$url;var b=le.exec(a);return(b[1]||""===a)&&this.path(decodeURIComponent(b[1])),(b[2]||b[1]||""===a)&&this.search(b[3]||""),this.hash(b[5]||""),this},protocol:xb("$$protocol"),host:xb("$$host"),port:xb("$$port"),path:yb("$$path",function(a){return a=null!==a?a.toString():"","/"===a.charAt(0)?a:"/"+a}),search:function(a,b){switch(arguments.length){case 0:return this.$$search;case 1:if(u(a)||v(a))a=a.toString(),this.$$search=S(a);else{if(!s(a))throw ne("isrcharg");a=H(a,{}),d(a,function(b,c){null==b&&delete a[c]}),this.$$search=a}break;default:q(b)||null===b?delete this.$$search[a]:this.$$search[a]=b}return this.$$compose(),this},hash:yb("$$hash",function(a){return null!==a?a.toString():""}),replace:function(){return this.$$replace=!0,this}};d([wb,vb,ub],function(a){a.prototype=Object.create(pe),a.prototype.state=function(b){if(!arguments.length)return this.$$state;if(a!==ub||!this.$$html5)throw ne("nostate");return this.$$state=q(b)?null:b,this}});var qe=b("$parse"),re=[].constructor,se=(!1).constructor,te=Function.constructor,ue=(0).constructor,ve={}.constructor,we="".constructor,xe=re.prototype,ye=se.prototype,ze=te.prototype,Ae=ue.prototype,Be=ve.prototype,Ce=we.prototype,De=ze.call,Ee=ze.apply,Fe=ze.bind,Ge=Be.valueOf,He=fa();d("+ - * / % === !== == != < > <= >= && || ! = |".split(" "),function(a){He[a]=!0});var Ie={n:"\n",f:"\f",r:"\r",t:"\t",v:"\v","'":"'",'"':'"'},Je=function(a){this.options=a};Je.prototype={constructor:Je,lex:function(a){for(this.text=a,this.index=0,this.tokens=[];this.index<this.text.length;)if('"'===(a=this.text.charAt(this.index))||"'"===a)this.readString(a);else if(this.isNumber(a)||"."===a&&this.isNumber(this.peek()))this.readNumber();else if(this.isIdentifierStart(this.peekMultichar()))this.readIdent();else if(this.is(a,"(){}[].,;:?"))this.tokens.push({index:this.index,text:a}),this.index++;else if(this.isWhitespace(a))this.index++;else{var b=a+this.peek(),c=b+this.peek(2),d=He[b],e=He[c];He[a]||d||e?(a=e?c:d?b:a,this.tokens.push({index:this.index,text:a,operator:!0}),this.index+=a.length):this.throwError("Unexpected next character ",this.index,this.index+1)}return this.tokens},is:function(a,b){return-1!==b.indexOf(a)},peek:function(a){return a=a||1,this.index+a<this.text.length&&this.text.charAt(this.index+a)},isNumber:function(a){return"0"<=a&&"9">=a&&"string"==typeof a},isWhitespace:function(a){return" "===a||"\r"===a||"\t"===a||"\n"===a||"\v"===a||" "===a},isIdentifierStart:function(a){return this.options.isIdentifierStart?this.options.isIdentifierStart(a,this.codePointAt(a)):this.isValidIdentifierStart(a)},isValidIdentifierStart:function(a){return"a"<=a&&"z">=a||"A"<=a&&"Z">=a||"_"===a||"$"===a},isIdentifierContinue:function(a){return this.options.isIdentifierContinue?this.options.isIdentifierContinue(a,this.codePointAt(a)):this.isValidIdentifierContinue(a)},isValidIdentifierContinue:function(a,b){return this.isValidIdentifierStart(a,b)||this.isNumber(a)},codePointAt:function(a){return 1===a.length?a.charCodeAt(0):(a.charCodeAt(0)<<10)+a.charCodeAt(1)-56613888},peekMultichar:function(){var a=this.text.charAt(this.index),b=this.peek();if(!b)return a;var c=a.charCodeAt(0),d=b.charCodeAt(0);return 55296<=c&&56319>=c&&56320<=d&&57343>=d?a+b:a},isExpOperator:function(a){return"-"===a||"+"===a||this.isNumber(a)},throwError:function(a,b,c){throw c=c||this.index,b=r(b)?"s "+b+"-"+this.index+" ["+this.text.substring(b,c)+"]":" "+c,qe("lexerr",a,b,this.text)},readNumber:function(){for(var a="",b=this.index;this.index<this.text.length;){var c=Yc(this.text.charAt(this.index));if("."===c||this.isNumber(c))a+=c;else{var d=this.peek();if("e"===c&&this.isExpOperator(d))a+=c;else if(this.isExpOperator(c)&&d&&this.isNumber(d)&&"e"===a.charAt(a.length-1))a+=c;else{if(!this.isExpOperator(c)||d&&this.isNumber(d)||"e"!==a.charAt(a.length-1))break;this.throwError("Invalid exponent")}}this.index++}this.tokens.push({index:b,text:a,constant:!0,value:Number(a)})},readIdent:function(){var a=this.index;for(this.index+=this.peekMultichar().length;this.index<this.text.length;){var b=this.peekMultichar();if(!this.isIdentifierContinue(b))break;this.index+=b.length}this.tokens.push({index:a,text:this.text.slice(a,this.index),identifier:!0})},readString:function(a){var b=this.index;this.index++;for(var c="",d=a,e=!1;this.index<this.text.length;){var f=this.text.charAt(this.index),d=d+f;if(e)"u"===f?(e=this.text.substring(this.index+1,this.index+5),e.match(/[\da-f]{4}/i)||this.throwError("Invalid unicode escape [\\u"+e+"]"),this.index+=4,c+=String.fromCharCode(parseInt(e,16))):c+=Ie[f]||f,e=!1;else if("\\"===f)e=!0;else{if(f===a)return this.index++,void this.tokens.push({index:b,text:d,constant:!0,value:c});c+=f}this.index++}
this.throwError("Unterminated quote",b)}};var Ke=function(a,b){this.lexer=a,this.options=b};Ke.Program="Program",Ke.ExpressionStatement="ExpressionStatement",Ke.AssignmentExpression="AssignmentExpression",Ke.ConditionalExpression="ConditionalExpression",Ke.LogicalExpression="LogicalExpression",Ke.BinaryExpression="BinaryExpression",Ke.UnaryExpression="UnaryExpression",Ke.CallExpression="CallExpression",Ke.MemberExpression="MemberExpression",Ke.Identifier="Identifier",Ke.Literal="Literal",Ke.ArrayExpression="ArrayExpression",Ke.Property="Property",Ke.ObjectExpression="ObjectExpression",Ke.ThisExpression="ThisExpression",Ke.LocalsExpression="LocalsExpression",Ke.NGValueParameter="NGValueParameter",Ke.prototype={ast:function(a){return this.text=a,this.tokens=this.lexer.lex(a),a=this.program(),0!==this.tokens.length&&this.throwError("is an unexpected token",this.tokens[0]),a},program:function(){for(var a=[];;)if(0<this.tokens.length&&!this.peek("}",")",";","]")&&a.push(this.expressionStatement()),!this.expect(";"))return{type:Ke.Program,body:a}},expressionStatement:function(){return{type:Ke.ExpressionStatement,expression:this.filterChain()}},filterChain:function(){for(var a=this.expression();this.expect("|");)a=this.filter(a);return a},expression:function(){return this.assignment()},assignment:function(){var a=this.ternary();if(this.expect("=")){if(!Kb(a))throw qe("lval");a={type:Ke.AssignmentExpression,left:a,right:this.assignment(),operator:"="}}return a},ternary:function(){var a,b,c=this.logicalOR();return this.expect("?")&&(a=this.expression(),this.consume(":"))?(b=this.expression(),{type:Ke.ConditionalExpression,test:c,alternate:a,consequent:b}):c},logicalOR:function(){for(var a=this.logicalAND();this.expect("||");)a={type:Ke.LogicalExpression,operator:"||",left:a,right:this.logicalAND()};return a},logicalAND:function(){for(var a=this.equality();this.expect("&&");)a={type:Ke.LogicalExpression,operator:"&&",left:a,right:this.equality()};return a},equality:function(){for(var a,b=this.relational();a=this.expect("==","!=","===","!==");)b={type:Ke.BinaryExpression,operator:a.text,left:b,right:this.relational()};return b},relational:function(){for(var a,b=this.additive();a=this.expect("<",">","<=",">=");)b={type:Ke.BinaryExpression,operator:a.text,left:b,right:this.additive()};return b},additive:function(){for(var a,b=this.multiplicative();a=this.expect("+","-");)b={type:Ke.BinaryExpression,operator:a.text,left:b,right:this.multiplicative()};return b},multiplicative:function(){for(var a,b=this.unary();a=this.expect("*","/","%");)b={type:Ke.BinaryExpression,operator:a.text,left:b,right:this.unary()};return b},unary:function(){var a;return(a=this.expect("+","-","!"))?{type:Ke.UnaryExpression,operator:a.text,prefix:!0,argument:this.unary()}:this.primary()},primary:function(){var a;this.expect("(")?(a=this.filterChain(),this.consume(")")):this.expect("[")?a=this.arrayDeclaration():this.expect("{")?a=this.object():this.selfReferential.hasOwnProperty(this.peek().text)?a=H(this.selfReferential[this.consume().text]):this.options.literals.hasOwnProperty(this.peek().text)?a={type:Ke.Literal,value:this.options.literals[this.consume().text]}:this.peek().identifier?a=this.identifier():this.peek().constant?a=this.constant():this.throwError("not a primary expression",this.peek());for(var b;b=this.expect("(","[",".");)"("===b.text?(a={type:Ke.CallExpression,callee:a,arguments:this.parseArguments()},this.consume(")")):"["===b.text?(a={type:Ke.MemberExpression,object:a,property:this.expression(),computed:!0},this.consume("]")):"."===b.text?a={type:Ke.MemberExpression,object:a,property:this.identifier(),computed:!1}:this.throwError("IMPOSSIBLE");return a},filter:function(a){a=[a];for(var b={type:Ke.CallExpression,callee:this.identifier(),arguments:a,filter:!0};this.expect(":");)a.push(this.expression());return b},parseArguments:function(){var a=[];if(")"!==this.peekToken().text)do{a.push(this.filterChain())}while(this.expect(","));return a},identifier:function(){var a=this.consume();return a.identifier||this.throwError("is not a valid identifier",a),{type:Ke.Identifier,name:a.text}},constant:function(){return{type:Ke.Literal,value:this.consume().value}},arrayDeclaration:function(){var a=[];if("]"!==this.peekToken().text)do{if(this.peek("]"))break;a.push(this.expression())}while(this.expect(","));return this.consume("]"),{type:Ke.ArrayExpression,elements:a}},object:function(){var a,b=[];if("}"!==this.peekToken().text)do{if(this.peek("}"))break;a={type:Ke.Property,kind:"init"},this.peek().constant?(a.key=this.constant(),a.computed=!1,this.consume(":"),a.value=this.expression()):this.peek().identifier?(a.key=this.identifier(),a.computed=!1,this.peek(":")?(this.consume(":"),a.value=this.expression()):a.value=a.key):this.peek("[")?(this.consume("["),a.key=this.expression(),this.consume("]"),a.computed=!0,this.consume(":"),a.value=this.expression()):this.throwError("invalid key",this.peek()),b.push(a)}while(this.expect(","));return this.consume("}"),{type:Ke.ObjectExpression,properties:b}},throwError:function(a,b){throw qe("syntax",b.text,a,b.index+1,this.text,this.text.substring(b.index))},consume:function(a){if(0===this.tokens.length)throw qe("ueoe",this.text);var b=this.expect(a);return b||this.throwError("is unexpected, expecting ["+a+"]",this.peek()),b},peekToken:function(){if(0===this.tokens.length)throw qe("ueoe",this.text);return this.tokens[0]},peek:function(a,b,c,d){return this.peekAhead(0,a,b,c,d)},peekAhead:function(a,b,c,d,e){if(this.tokens.length>a){a=this.tokens[a];var f=a.text;if(f===b||f===c||f===d||f===e||!(b||c||d||e))return a}return!1},expect:function(a,b,c,d){return!!(a=this.peek(a,b,c,d))&&(this.tokens.shift(),a)},selfReferential:{this:{type:Ke.ThisExpression},$locals:{type:Ke.LocalsExpression}}},Nb.prototype={compile:function(a,b){var c=this,e=this.astBuilder.ast(a);this.state={nextId:0,filters:{},expensiveChecks:b,fn:{vars:[],body:[],own:{}},assign:{vars:[],body:[],own:{}},inputs:[]},Ib(e,c.$filter);var f,g="";return this.stage="assign",(f=Lb(e))&&(this.state.computing="assign",g=this.nextId(),this.recurse(f,g),this.return_(g),g="fn.assign="+this.generateFunction("assign","s,v,l")),f=Jb(e.body),c.stage="inputs",d(f,function(a,b){var d="fn"+b;c.state[d]={vars:[],body:[],own:{}},c.state.computing=d;var e=c.nextId();c.recurse(a,e),c.return_(e),c.state.inputs.push(d),a.watchId=b}),this.state.computing="fn",this.stage="main",this.recurse(e),g='"'+this.USE+" "+this.STRICT+'";\n'+this.filterPrefix()+"var fn="+this.generateFunction("fn","s,l,a,i")+g+this.watchFns()+"return fn;",g=new Function("$filter","ensureSafeMemberName","ensureSafeObject","ensureSafeFunction","getStringValue","ensureSafeAssignContext","ifDefined","plus","text",g)(this.$filter,Bb,Db,Eb,Cb,Fb,Gb,Hb,a),this.state=this.stage=void 0,g.literal=Mb(e),g.constant=e.constant,g},USE:"use",STRICT:"strict",watchFns:function(){var a=[],b=this.state.inputs,c=this;return d(b,function(b){a.push("var "+b+"="+c.generateFunction(b,"s"))}),b.length&&a.push("fn.inputs=["+b.join(",")+"];"),a.join("")},generateFunction:function(a,b){return"function("+b+"){"+this.varsPrefix(a)+this.body(a)+"};"},filterPrefix:function(){var a=[],b=this;return d(this.state.filters,function(c,d){a.push(c+"=$filter("+b.escape(d)+")")}),a.length?"var "+a.join(",")+";":""},varsPrefix:function(a){return this.state[a].vars.length?"var "+this.state[a].vars.join(",")+";":""},body:function(a){return this.state[a].body.join("")},recurse:function(a,b,c,e,f,g){var h,i,j,k,l,n=this;if(e=e||m,!g&&r(a.watchId))b=b||this.nextId(),this.if_("i",this.lazyAssign(b,this.computedMember("i",a.watchId)),this.lazyRecurse(a,b,c,e,f,!0));else switch(a.type){case Ke.Program:d(a.body,function(b,c){n.recurse(b.expression,void 0,void 0,function(a){i=a}),c!==a.body.length-1?n.current().body.push(i,";"):n.return_(i)});break;case Ke.Literal:k=this.escape(a.value),this.assign(b,k),e(k);break;case Ke.UnaryExpression:this.recurse(a.argument,void 0,void 0,function(a){i=a}),k=a.operator+"("+this.ifDefined(i,0)+")",this.assign(b,k),e(k);break;case Ke.BinaryExpression:this.recurse(a.left,void 0,void 0,function(a){h=a}),this.recurse(a.right,void 0,void 0,function(a){i=a}),k="+"===a.operator?this.plus(h,i):"-"===a.operator?this.ifDefined(h,0)+a.operator+this.ifDefined(i,0):"("+h+")"+a.operator+"("+i+")",this.assign(b,k),e(k);break;case Ke.LogicalExpression:b=b||this.nextId(),n.recurse(a.left,b),n.if_("&&"===a.operator?b:n.not(b),n.lazyRecurse(a.right,b)),e(b);break;case Ke.ConditionalExpression:b=b||this.nextId(),n.recurse(a.test,b),n.if_(b,n.lazyRecurse(a.alternate,b),n.lazyRecurse(a.consequent,b)),e(b);break;case Ke.Identifier:b=b||this.nextId(),c&&(c.context="inputs"===n.stage?"s":this.assign(this.nextId(),this.getHasOwnProperty("l",a.name)+"?l:s"),c.computed=!1,c.name=a.name),Bb(a.name),n.if_("inputs"===n.stage||n.not(n.getHasOwnProperty("l",a.name)),function(){n.if_("inputs"===n.stage||"s",function(){f&&1!==f&&n.if_(n.not(n.nonComputedMember("s",a.name)),n.lazyAssign(n.nonComputedMember("s",a.name),"{}")),n.assign(b,n.nonComputedMember("s",a.name))})},b&&n.lazyAssign(b,n.nonComputedMember("l",a.name))),(n.state.expensiveChecks||Pb(a.name))&&n.addEnsureSafeObject(b),e(b);break;case Ke.MemberExpression:h=c&&(c.context=this.nextId())||this.nextId(),b=b||this.nextId(),n.recurse(a.object,h,void 0,function(){n.if_(n.notNull(h),function(){f&&1!==f&&n.addEnsureSafeAssignContext(h),a.computed?(i=n.nextId(),n.recurse(a.property,i),n.getStringValue(i),n.addEnsureSafeMemberName(i),f&&1!==f&&n.if_(n.not(n.computedMember(h,i)),n.lazyAssign(n.computedMember(h,i),"{}")),k=n.ensureSafeObject(n.computedMember(h,i)),n.assign(b,k),c&&(c.computed=!0,c.name=i)):(Bb(a.property.name),f&&1!==f&&n.if_(n.not(n.nonComputedMember(h,a.property.name)),n.lazyAssign(n.nonComputedMember(h,a.property.name),"{}")),k=n.nonComputedMember(h,a.property.name),(n.state.expensiveChecks||Pb(a.property.name))&&(k=n.ensureSafeObject(k)),n.assign(b,k),c&&(c.computed=!1,c.name=a.property.name))},function(){n.assign(b,"undefined")}),e(b)},!!f);break;case Ke.CallExpression:b=b||this.nextId(),a.filter?(i=n.filter(a.callee.name),j=[],d(a.arguments,function(a){var b=n.nextId();n.recurse(a,b),j.push(b)}),k=i+"("+j.join(",")+")",n.assign(b,k),e(b)):(i=n.nextId(),h={},j=[],n.recurse(a.callee,i,h,function(){n.if_(n.notNull(i),function(){n.addEnsureSafeFunction(i),d(a.arguments,function(a){n.recurse(a,n.nextId(),void 0,function(a){j.push(n.ensureSafeObject(a))})}),h.name?(n.state.expensiveChecks||n.addEnsureSafeObject(h.context),k=n.member(h.context,h.name,h.computed)+"("+j.join(",")+")"):k=i+"("+j.join(",")+")",k=n.ensureSafeObject(k),n.assign(b,k)},function(){n.assign(b,"undefined")}),e(b)}));break;case Ke.AssignmentExpression:i=this.nextId(),h={},this.recurse(a.left,void 0,h,function(){n.if_(n.notNull(h.context),function(){n.recurse(a.right,i),n.addEnsureSafeObject(n.member(h.context,h.name,h.computed)),n.addEnsureSafeAssignContext(h.context),k=n.member(h.context,h.name,h.computed)+a.operator+i,n.assign(b,k),e(b||k)})},1);break;case Ke.ArrayExpression:j=[],d(a.elements,function(a){n.recurse(a,n.nextId(),void 0,function(a){j.push(a)})}),k="["+j.join(",")+"]",this.assign(b,k),e(k);break;case Ke.ObjectExpression:j=[],l=!1,d(a.properties,function(a){a.computed&&(l=!0)}),l?(b=b||this.nextId(),this.assign(b,"{}"),d(a.properties,function(a){a.computed?(h=n.nextId(),n.recurse(a.key,h)):h=a.key.type===Ke.Identifier?a.key.name:""+a.key.value,i=n.nextId(),n.recurse(a.value,i),n.assign(n.member(b,h,a.computed),i)})):(d(a.properties,function(b){n.recurse(b.value,a.constant?void 0:n.nextId(),void 0,function(a){j.push(n.escape(b.key.type===Ke.Identifier?b.key.name:""+b.key.value)+":"+a)})}),k="{"+j.join(",")+"}",this.assign(b,k)),e(b||k);break;case Ke.ThisExpression:this.assign(b,"s"),e("s");break;case Ke.LocalsExpression:this.assign(b,"l"),e("l");break;case Ke.NGValueParameter:this.assign(b,"v"),e("v")}},getHasOwnProperty:function(a,b){var c=a+"."+b,d=this.current().own;return d.hasOwnProperty(c)||(d[c]=this.nextId(!1,a+"&&("+this.escape(b)+" in "+a+")")),d[c]},assign:function(a,b){if(a)return this.current().body.push(a,"=",b,";"),a},filter:function(a){return this.state.filters.hasOwnProperty(a)||(this.state.filters[a]=this.nextId(!0)),this.state.filters[a]},ifDefined:function(a,b){return"ifDefined("+a+","+this.escape(b)+")"},plus:function(a,b){return"plus("+a+","+b+")"},return_:function(a){this.current().body.push("return ",a,";")},if_:function(a,b,c){if(!0===a)b();else{var d=this.current().body;d.push("if(",a,"){"),b(),d.push("}"),c&&(d.push("else{"),c(),d.push("}"))}},not:function(a){return"!("+a+")"},notNull:function(a){return a+"!=null"},nonComputedMember:function(a,b){var c=/[^$_a-zA-Z0-9]/g;return/^[$_a-zA-Z][$_a-zA-Z0-9]*$/.test(b)?a+"."+b:a+'["'+b.replace(c,this.stringEscapeFn)+'"]'},computedMember:function(a,b){return a+"["+b+"]"},member:function(a,b,c){return c?this.computedMember(a,b):this.nonComputedMember(a,b)},addEnsureSafeObject:function(a){this.current().body.push(this.ensureSafeObject(a),";")},addEnsureSafeMemberName:function(a){this.current().body.push(this.ensureSafeMemberName(a),";")},addEnsureSafeFunction:function(a){this.current().body.push(this.ensureSafeFunction(a),";")},addEnsureSafeAssignContext:function(a){this.current().body.push(this.ensureSafeAssignContext(a),";")},ensureSafeObject:function(a){return"ensureSafeObject("+a+",text)"},ensureSafeMemberName:function(a){return"ensureSafeMemberName("+a+",text)"},ensureSafeFunction:function(a){return"ensureSafeFunction("+a+",text)"},getStringValue:function(a){this.assign(a,"getStringValue("+a+")")},ensureSafeAssignContext:function(a){return"ensureSafeAssignContext("+a+",text)"},lazyRecurse:function(a,b,c,d,e,f){var g=this;return function(){g.recurse(a,b,c,d,e,f)}},lazyAssign:function(a,b){var c=this;return function(){c.assign(a,b)}},stringEscapeRegex:/[^ a-zA-Z0-9]/g,stringEscapeFn:function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)},escape:function(a){if(u(a))return"'"+a.replace(this.stringEscapeRegex,this.stringEscapeFn)+"'";if(v(a))return a.toString();if(!0===a)return"true";if(!1===a)return"false";if(null===a)return"null";if(void 0===a)return"undefined";throw qe("esc")},nextId:function(a,b){var c="v"+this.state.nextId++;return a||this.current().vars.push(c+(b?"="+b:"")),c},current:function(){return this.state[this.state.computing]}},Ob.prototype={compile:function(a,b){var c=this,e=this.astBuilder.ast(a);this.expression=a,this.expensiveChecks=b,Ib(e,c.$filter);var f,g;(f=Lb(e))&&(g=this.recurse(f)),f=Jb(e.body);var h;f&&(h=[],d(f,function(a,b){var d=c.recurse(a);a.input=d,h.push(d),a.watchId=b}));var i=[];return d(e.body,function(a){i.push(c.recurse(a.expression))}),f=0===e.body.length?m:1===e.body.length?i[0]:function(a,b){var c;return d(i,function(d){c=d(a,b)}),c},g&&(f.assign=function(a,b,c){return g(a,c,b)}),h&&(f.inputs=h),f.literal=Mb(e),f.constant=e.constant,f},recurse:function(a,b,c){var e,f,g,h=this;if(a.input)return this.inputs(a.input,a.watchId);switch(a.type){case Ke.Literal:return this.value(a.value,b);case Ke.UnaryExpression:return f=this.recurse(a.argument),this["unary"+a.operator](f,b);case Ke.BinaryExpression:case Ke.LogicalExpression:return e=this.recurse(a.left),f=this.recurse(a.right),this["binary"+a.operator](e,f,b);case Ke.ConditionalExpression:return this["ternary?:"](this.recurse(a.test),this.recurse(a.alternate),this.recurse(a.consequent),b);case Ke.Identifier:return Bb(a.name,h.expression),h.identifier(a.name,h.expensiveChecks||Pb(a.name),b,c,h.expression);case Ke.MemberExpression:return e=this.recurse(a.object,!1,!!c),a.computed||(Bb(a.property.name,h.expression),f=a.property.name),a.computed&&(f=this.recurse(a.property)),a.computed?this.computedMember(e,f,b,c,h.expression):this.nonComputedMember(e,f,h.expensiveChecks,b,c,h.expression);case Ke.CallExpression:return g=[],d(a.arguments,function(a){g.push(h.recurse(a))}),a.filter&&(f=this.$filter(a.callee.name)),a.filter||(f=this.recurse(a.callee,!0)),a.filter?function(a,c,d,e){for(var h=[],i=0;i<g.length;++i)h.push(g[i](a,c,d,e));return a=f.apply(void 0,h,e),b?{context:void 0,name:void 0,value:a}:a}:function(a,c,d,e){var i,j=f(a,c,d,e);if(null!=j.value){Db(j.context,h.expression),Eb(j.value,h.expression),i=[];for(var k=0;k<g.length;++k)i.push(Db(g[k](a,c,d,e),h.expression));i=Db(j.value.apply(j.context,i),h.expression)}return b?{value:i}:i};case Ke.AssignmentExpression:return e=this.recurse(a.left,!0,1),f=this.recurse(a.right),function(a,c,d,g){var i=e(a,c,d,g);return a=f(a,c,d,g),Db(i.value,h.expression),Fb(i.context),i.context[i.name]=a,b?{value:a}:a};case Ke.ArrayExpression:return g=[],d(a.elements,function(a){g.push(h.recurse(a))}),function(a,c,d,e){for(var f=[],h=0;h<g.length;++h)f.push(g[h](a,c,d,e));return b?{value:f}:f};case Ke.ObjectExpression:return g=[],d(a.properties,function(a){a.computed?g.push({key:h.recurse(a.key),computed:!0,value:h.recurse(a.value)}):g.push({key:a.key.type===Ke.Identifier?a.key.name:""+a.key.value,computed:!1,value:h.recurse(a.value)})}),function(a,c,d,e){for(var f={},h=0;h<g.length;++h)g[h].computed?f[g[h].key(a,c,d,e)]=g[h].value(a,c,d,e):f[g[h].key]=g[h].value(a,c,d,e);return b?{value:f}:f};case Ke.ThisExpression:return function(a){return b?{value:a}:a};case Ke.LocalsExpression:return function(a,c){return b?{value:c}:c};case Ke.NGValueParameter:return function(a,c,d){return b?{value:d}:d}}},"unary+":function(a,b){return function(c,d,e,f){return c=a(c,d,e,f),c=r(c)?+c:0,b?{value:c}:c}},"unary-":function(a,b){return function(c,d,e,f){return c=a(c,d,e,f),c=r(c)?-c:0,b?{value:c}:c}},"unary!":function(a,b){return function(c,d,e,f){return c=!a(c,d,e,f),b?{value:c}:c}},"binary+":function(a,b,c){return function(d,e,f,g){var h=a(d,e,f,g);return d=b(d,e,f,g),h=Hb(h,d),c?{value:h}:h}},"binary-":function(a,b,c){return function(d,e,f,g){var h=a(d,e,f,g);return d=b(d,e,f,g),h=(r(h)?h:0)-(r(d)?d:0),c?{value:h}:h}},"binary*":function(a,b,c){return function(d,e,f,g){return d=a(d,e,f,g)*b(d,e,f,g),c?{value:d}:d}},"binary/":function(a,b,c){return function(d,e,f,g){return d=a(d,e,f,g)/b(d,e,f,g),c?{value:d}:d}},"binary%":function(a,b,c){return function(d,e,f,g){return d=a(d,e,f,g)%b(d,e,f,g),c?{value:d}:d}},"binary===":function(a,b,c){return function(d,e,f,g){return d=a(d,e,f,g)===b(d,e,f,g),c?{value:d}:d}},"binary!==":function(a,b,c){return function(d,e,f,g){return d=a(d,e,f,g)!==b(d,e,f,g),c?{value:d}:d}},"binary==":function(a,b,c){return function(d,e,f,g){return d=a(d,e,f,g)==b(d,e,f,g),c?{value:d}:d}},"binary!=":function(a,b,c){return function(d,e,f,g){return d=a(d,e,f,g)!=b(d,e,f,g),c?{value:d}:d}},"binary<":function(a,b,c){return function(d,e,f,g){return d=a(d,e,f,g)<b(d,e,f,g),c?{value:d}:d}},"binary>":function(a,b,c){return function(d,e,f,g){return d=a(d,e,f,g)>b(d,e,f,g),c?{value:d}:d}},"binary<=":function(a,b,c){return function(d,e,f,g){return d=a(d,e,f,g)<=b(d,e,f,g),c?{value:d}:d}},"binary>=":function(a,b,c){return function(d,e,f,g){return d=a(d,e,f,g)>=b(d,e,f,g),c?{value:d}:d}},"binary&&":function(a,b,c){return function(d,e,f,g){return d=a(d,e,f,g)&&b(d,e,f,g),c?{value:d}:d}},"binary||":function(a,b,c){return function(d,e,f,g){return d=a(d,e,f,g)||b(d,e,f,g),c?{value:d}:d}},"ternary?:":function(a,b,c,d){return function(e,f,g,h){return e=a(e,f,g,h)?b(e,f,g,h):c(e,f,g,h),d?{value:e}:e}},value:function(a,b){return function(){return b?{context:void 0,name:void 0,value:a}:a}},identifier:function(a,b,c,d,e){return function(f,g,h,i){return f=g&&a in g?g:f,d&&1!==d&&f&&!f[a]&&(f[a]={}),g=f?f[a]:void 0,b&&Db(g,e),c?{context:f,name:a,value:g}:g}},computedMember:function(a,b,c,d,e){return function(f,g,h,i){var j,k,l=a(f,g,h,i);return null!=l&&(j=b(f,g,h,i),j+="",Bb(j,e),d&&1!==d&&(Fb(l),l&&!l[j]&&(l[j]={})),k=l[j],Db(k,e)),c?{context:l,name:j,value:k}:k}},nonComputedMember:function(a,b,c,d,e,f){return function(g,h,i,j){return g=a(g,h,i,j),e&&1!==e&&(Fb(g),g&&!g[b]&&(g[b]={})),h=null!=g?g[b]:void 0,(c||Pb(b))&&Db(h,f),d?{context:g,name:b,value:h}:h}},inputs:function(a,b){return function(c,d,e,f){return f?f[b]:a(c,d,e)}}};var Le=function(a,b,c){this.lexer=a,this.$filter=b,this.options=c,this.ast=new Ke(a,c),this.astCompiler=c.csp?new Ob(this.ast,b):new Nb(this.ast,b)};Le.prototype={constructor:Le,parse:function(a){return this.astCompiler.compile(a,this.options.expensiveChecks)}};var Me=b("$sce"),Ne={HTML:"html",CSS:"css",URL:"url",RESOURCE_URL:"resourceUrl",JS:"js"},Oe=b("$compile"),Pe=a.document.createElement("a"),Qe=ec(a.location.href);hc.$inject=["$document"],jc.$inject=["$provide"];var Re=22,Se=".",Te="0";oc.$inject=["$locale"],pc.$inject=["$locale"];var Ue={yyyy:uc("FullYear",4,0,!1,!0),yy:uc("FullYear",2,0,!0,!0),y:uc("FullYear",1,0,!1,!0),MMMM:vc("Month"),MMM:vc("Month",!0),MM:uc("Month",2,1),M:uc("Month",1,1),LLLL:vc("Month",!1,!0),dd:uc("Date",2),d:uc("Date",1),HH:uc("Hours",2),H:uc("Hours",1),hh:uc("Hours",2,-12),h:uc("Hours",1,-12),mm:uc("Minutes",2),m:uc("Minutes",1),ss:uc("Seconds",2),s:uc("Seconds",1),sss:uc("Milliseconds",3),EEEE:vc("Day"),EEE:vc("Day",!0),a:function(a,b){return 12>a.getHours()?b.AMPMS[0]:b.AMPMS[1]},Z:function(a,b,c){return a=-1*c,a=(0<=a?"+":"")+(tc(Math[0<a?"floor":"ceil"](a/60),2)+tc(Math.abs(a%60),2))},ww:xc(2),w:xc(1),G:yc,GG:yc,GGG:yc,GGGG:function(a,b){return 0>=a.getFullYear()?b.ERANAMES[0]:b.ERANAMES[1]}},Ve=/((?:[^yMLdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|L+|d+|H+|h+|m+|s+|a|Z|G+|w+))(.*)/,We=/^-?\d+$/;zc.$inject=["$locale"];var Xe=o(Yc),Ye=o(Zc);Dc.$inject=["$parse"];var Ze=o({restrict:"E",compile:function(a,b){if(!b.href&&!b.xlinkHref)return function(a,b){if("a"===b[0].nodeName.toLowerCase()){var c="[object SVGAnimatedString]"===bd.call(b.prop("href"))?"xlink:href":"href";b.on("click",function(a){b.attr(c)||a.preventDefault()})}}}}),$e={};d(Hd,function(a,b){function c(a,c,e){a.$watch(e[d],function(a){e.$set(b,!!a)})}if("multiple"!==a){var d=Wa("ng-"+b),e=c;"checked"===a&&(e=function(a,b,e){e.ngModel!==e[d]&&c(a,b,e)}),$e[d]=function(){return{restrict:"A",priority:100,link:e}}}}),d(Jd,function(a,b){$e[b]=function(){return{priority:100,link:function(a,c,d){if("ngPattern"===b&&"/"===d.ngPattern.charAt(0)&&(c=d.ngPattern.match(Wc)))return void d.$set("ngPattern",new RegExp(c[1],c[2]));a.$watch(d[b],function(a){d.$set(b,a)})}}}}),d(["src","srcset","href"],function(a){var b=Wa("ng-"+a);$e[b]=function(){return{priority:99,link:function(c,d,e){var f=a,g=a;"href"===a&&"[object SVGAnimatedString]"===bd.call(d.prop("href"))&&(g="xlinkHref",e.$attr[g]="xlink:href",f=null),e.$observe(b,function(b){b?(e.$set(g,b),Sc&&f&&d.prop(f,e[g])):"href"===a&&e.$set(g,null)})}}}});var _e={$addControl:m,$$renameControl:function(a,b){a.$name=b},$removeControl:m,$setValidity:m,$setDirty:m,$setPristine:m,$setSubmitted:m};Fc.$inject=["$element","$attrs","$scope","$animate","$interpolate"];var af=function(a){return["$timeout","$parse",function(b,c){function d(a){return""===a?c('this[""]').assign:c(a).assign||m}return{name:"form",restrict:a?"EAC":"E",require:["form","^^?form"],controller:Fc,compile:function(c,e){c.addClass(Kf).addClass(If);var f=e.name?"name":!(!a||!e.ngForm)&&"ngForm";return{pre:function(a,c,e,g){var h=g[0];if(!("action"in e)){var j=function(b){a.$apply(function(){h.$commitViewValue(),h.$setSubmitted()}),b.preventDefault()};c[0].addEventListener("submit",j,!1),c.on("$destroy",function(){b(function(){c[0].removeEventListener("submit",j,!1)},0,!1)})}(g[1]||h.$$parentForm).$addControl(h);var k=f?d(h.$name):m;f&&(k(a,h),e.$observe(f,function(b){h.$name!==b&&(k(a,void 0),h.$$parentForm.$$renameControl(h,b),(k=d(h.$name))(a,h))})),c.on("$destroy",function(){h.$$parentForm.$removeControl(h),k(a,void 0),i(h,_e)})}}}}}]},bf=af(),cf=af(!0),df=/^\d{4,}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+(?:[+-][0-2]\d:[0-5]\d|Z)$/,ef=/^[a-z][a-z\d.+-]*:\/*(?:[^:@]+(?::[^@]+)?@)?(?:[^\s:/?#]+|\[[a-f\d:]+])(?::\d+)?(?:\/[^?#]*)?(?:\?[^#]*)?(?:#.*)?$/i,ff=/^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/,gf=/^\s*(-|\+)?(\d+|(\d*(\.\d*)))([eE][+-]?\d+)?\s*$/,hf=/^(\d{4,})-(\d{2})-(\d{2})$/,jf=/^(\d{4,})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,kf=/^(\d{4,})-W(\d\d)$/,lf=/^(\d{4,})-(\d\d)$/,mf=/^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,nf=fa();d(["date","datetime-local","month","time","week"],function(a){nf[a]=!0});var of={text:function(a,b,c,d,e,f){Hc(a,b,c,d,e,f),Gc(d)},date:Jc("date",hf,Ic(hf,["yyyy","MM","dd"]),"yyyy-MM-dd"),"datetime-local":Jc("datetimelocal",jf,Ic(jf,"yyyy MM dd HH mm ss sss".split(" ")),"yyyy-MM-ddTHH:mm:ss.sss"),time:Jc("time",mf,Ic(mf,["HH","mm","ss","sss"]),"HH:mm:ss.sss"),week:Jc("week",kf,function(a,b){if(w(a))return a;if(u(a)){kf.lastIndex=0;var c=kf.exec(a);if(c){var d=+c[1],e=+c[2],f=c=0,g=0,h=0,i=wc(d),e=7*(e-1);return b&&(c=b.getHours(),f=b.getMinutes(),g=b.getSeconds(),h=b.getMilliseconds()),new Date(d,0,i.getDate()+e,c,f,g,h)}}return NaN},"yyyy-Www"),month:Jc("month",lf,Ic(lf,["yyyy","MM"]),"yyyy-MM"),number:function(a,b,c,d,e,f){Kc(a,b,c,d),Hc(a,b,c,d,e,f),Lc(d);var g,h;(r(c.min)||c.ngMin)&&(d.$validators.min=function(a){return d.$isEmpty(a)||q(g)||a>=g},c.$observe("min",function(a){g=Mc(a),d.$validate()})),(r(c.max)||c.ngMax)&&(d.$validators.max=function(a){return d.$isEmpty(a)||q(h)||a<=h},c.$observe("max",function(a){h=Mc(a),d.$validate()}))},url:function(a,b,c,d,e,f){Hc(a,b,c,d,e,f),Gc(d),d.$$parserName="url",d.$validators.url=function(a,b){var c=a||b;return d.$isEmpty(c)||ef.test(c)}},email:function(a,b,c,d,e,f){Hc(a,b,c,d,e,f),Gc(d),d.$$parserName="email",d.$validators.email=function(a,b){var c=a||b;return d.$isEmpty(c)||ff.test(c)}},radio:function(a,b,c,d){q(c.name)&&b.attr("name",++fd),b.on("click",function(a){b[0].checked&&d.$setViewValue(c.value,a&&a.type)}),d.$render=function(){b[0].checked=c.value==d.$viewValue},c.$observe("value",d.$render)},range:function(a,b,c,d,e,f){function g(a,d){b.attr(a,c[a]),c.$observe(a,d)}function h(a){l=Mc(a),gd(d.$modelValue)||(k?(a=b.val(),l>a&&(a=l,b.val(a)),d.$setViewValue(a)):d.$validate())}function i(a){m=Mc(a),gd(d.$modelValue)||(k?(a=b.val(),m<a&&(b.val(m),a=m<l?l:m),d.$setViewValue(a)):d.$validate())}function j(a){n=Mc(a),gd(d.$modelValue)||(k&&d.$viewValue!==b.val()?d.$setViewValue(b.val()):d.$validate())}Kc(a,b,c,d),Lc(d),Hc(a,b,c,d,e,f);var k=d.$$hasNativeValidators&&"range"===b[0].type,l=k?0:void 0,m=k?100:void 0,n=k?1:void 0,o=b[0].validity;a=r(c.min),e=r(c.max),f=r(c.step);var p=d.$render;d.$render=k&&r(o.rangeUnderflow)&&r(o.rangeOverflow)?function(){p(),d.$setViewValue(b.val())}:p,a&&(d.$validators.min=k?function(){return!0}:function(a,b){return d.$isEmpty(b)||q(l)||b>=l},g("min",h)),e&&(d.$validators.max=k?function(){return!0}:function(a,b){return d.$isEmpty(b)||q(m)||b<=m},g("max",i)),f&&(d.$validators.step=k?function(){return!o.stepMismatch}:function(a,b){var c;if(!(c=d.$isEmpty(b)||q(n))){c=l||0;var e=n,f=Number(b);if((0|f)!==f||(0|c)!==c||(0|e)!==e){var g=Math.max(Nc(f),Nc(c),Nc(e)),g=Math.pow(10,g),f=f*g;c*=g,e*=g}c=0==(f-c)%e}return c},g("step",j))},checkbox:function(a,b,c,d,e,f,g,h){var i=Oc(h,a,"ngTrueValue",c.ngTrueValue,!0),j=Oc(h,a,"ngFalseValue",c.ngFalseValue,!1);b.on("click",function(a){d.$setViewValue(b[0].checked,a&&a.type)}),d.$render=function(){b[0].checked=d.$viewValue},d.$isEmpty=function(a){return!1===a},d.$formatters.push(function(a){return I(a,i)}),d.$parsers.push(function(a){return a?i:j})},hidden:m,button:m,submit:m,reset:m,file:m},pf=["$browser","$sniffer","$filter","$parse",function(a,b,c,d){return{restrict:"E",require:["?ngModel"],link:{pre:function(e,f,g,h){if(h[0]){var i=Yc(g.type);"range"!==i||g.hasOwnProperty("ngInputRange")||(i="text"),(of[i]||of.text)(e,f,g,h[0],b,a,c,d)}}}}}],qf=/^(true|false|\d+)$/,rf=function(){return{restrict:"A",priority:100,compile:function(a,b){return qf.test(b.ngValue)?function(a,b,c){c.$set("value",a.$eval(c.ngValue))}:function(a,b,c){a.$watch(c.ngValue,function(a){c.$set("value",a)})}}}},sf=["$compile",function(a){return{restrict:"AC",compile:function(b){return a.$$addBindingClass(b),function(b,c,d){a.$$addBindingInfo(c,d.ngBind),c=c[0],b.$watch(d.ngBind,function(a){c.textContent=q(a)?"":a})}}}}],tf=["$interpolate","$compile",function(a,b){return{compile:function(c){return b.$$addBindingClass(c),function(c,d,e){c=a(d.attr(e.$attr.ngBindTemplate)),b.$$addBindingInfo(d,c.expressions),d=d[0],e.$observe("ngBindTemplate",function(a){d.textContent=q(a)?"":a})}}}}],uf=["$sce","$parse","$compile",function(a,b,c){return{restrict:"A",compile:function(d,e){var f=b(e.ngBindHtml),g=b(e.ngBindHtml,function(b){return a.valueOf(b)});return c.$$addBindingClass(d),function(b,d,e){c.$$addBindingInfo(d,e.ngBindHtml),b.$watch(g,function(){var c=f(b);d.html(a.getTrustedHtml(c)||"")})}}}}],vf=o({restrict:"A",require:"ngModel",link:function(a,b,c,d){d.$viewChangeListeners.push(function(){a.$eval(c.ngChange)})}}),wf=Pc("",!0),xf=Pc("Odd",0),yf=Pc("Even",1),zf=Ec({compile:function(a,b){b.$set("ngCloak",void 0),a.removeClass("ng-cloak")}}),Af=[function(){return{restrict:"A",scope:!0,controller:"@",priority:500}}],Bf={},Cf={blur:!0,focus:!0};d("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "),function(a){var b=Wa("ng-"+a);Bf[b]=["$parse","$rootScope",function(c,d){return{restrict:"A",compile:function(e,f){var g=c(f[b],null,!0);return function(b,c){c.on(a,function(c){var e=function(){g(b,{$event:c})};Cf[a]&&d.$$phase?b.$evalAsync(e):b.$apply(e)})}}}}]});var Df=["$animate","$compile",function(a,b){return{multiElement:!0,transclude:"element",priority:600,terminal:!0,restrict:"A",$$tlb:!0,link:function(c,d,e,f,g){var h,i,j;c.$watch(e.ngIf,function(c){c?i||g(function(c,f){i=f,c[c.length++]=b.$$createComment("end ngIf",e.ngIf),h={clone:c},a.enter(c,d.parent(),d)}):(j&&(j.remove(),j=null),i&&(i.$destroy(),i=null),h&&(j=ea(h.clone),a.leave(j).done(function(a){!1!==a&&(j=null)}),h=null))})}}}],Ef=["$templateRequest","$anchorScroll","$animate",function(a,b,c){return{restrict:"ECA",priority:400,terminal:!0,transclude:"element",controller:ed.noop,compile:function(d,e){var f=e.ngInclude||e.src,g=e.onload||"",h=e.autoscroll;return function(d,e,i,j,k){var l,m,n,o=0,p=function(){m&&(m.remove(),m=null),l&&(l.$destroy(),l=null),n&&(c.leave(n).done(function(a){!1!==a&&(m=null)}),m=n,n=null)};d.$watch(f,function(f){var i=function(a){!1===a||!r(h)||h&&!d.$eval(h)||b()},m=++o;f?(a(f,!0).then(function(a){if(!d.$$destroyed&&m===o){var b=d.$new();j.template=a,a=k(b,function(a){p(),c.enter(a,null,e).done(i)}),l=b,n=a,l.$emit("$includeContentLoaded",f),d.$eval(g)}},function(){d.$$destroyed||m!==o||(p(),d.$emit("$includeContentError",f))}),d.$emit("$includeContentRequested",f)):(p(),j.template=null)})}}}}],Ff=["$compile",function(b){return{restrict:"ECA",priority:-400,require:"ngInclude",link:function(c,d,e,f){bd.call(d[0]).match(/SVG/)?(d.empty(),b(ka(f.template,a.document).childNodes)(c,function(a){d.append(a)},{futureParentElement:d})):(d.html(f.template),b(d.contents())(c))}}}],Gf=Ec({priority:450,compile:function(){return{pre:function(a,b,c){a.$eval(c.ngInit)}}}}),Hf=function(){return{restrict:"A",priority:100,require:"ngModel",link:function(a,b,c,e){var f=b.attr(c.$attr.ngList)||", ",g="false"!==c.ngTrim,h=g?jd(f):f;e.$parsers.push(function(a){if(!q(a)){var b=[];return a&&d(a.split(h),function(a){a&&b.push(g?jd(a):a)}),b}}),e.$formatters.push(function(a){if(hd(a))return a.join(f)}),e.$isEmpty=function(a){return!a||!a.length}}}},If="ng-valid",Jf="ng-invalid",Kf="ng-pristine",Lf="ng-dirty",Mf="ng-pending",Nf=b("ngModel"),Of=["$scope","$exceptionHandler","$attrs","$element","$parse","$animate","$timeout","$rootScope","$q","$interpolate",function(a,b,c,e,f,g,h,i,j,k){this.$modelValue=this.$viewValue=Number.NaN,this.$$rawModelValue=void 0,this.$validators={},this.$asyncValidators={},this.$parsers=[],this.$formatters=[],
this.$viewChangeListeners=[],this.$untouched=!0,this.$touched=!1,this.$pristine=!0,this.$dirty=!1,this.$valid=!0,this.$invalid=!1,this.$error={},this.$$success={},this.$pending=void 0,this.$name=k(c.name||"",!1)(a),this.$$parentForm=_e;var l,n=f(c.ngModel),o=n.assign,p=n,s=o,t=null,u=this;this.$$setOptions=function(a){if((u.$options=a)&&a.getterSetter){var b=f(c.ngModel+"()"),d=f(c.ngModel+"($$$p)");p=function(a){var c=n(a);return x(c)&&(c=b(a)),c},s=function(a,b){x(n(a))?d(a,{$$$p:b}):o(a,b)}}else if(!n.assign)throw Nf("nonassign",c.ngModel,Q(e))},this.$render=m,this.$isEmpty=function(a){return q(a)||""===a||null===a||a!==a},this.$$updateEmptyClasses=function(a){u.$isEmpty(a)?(g.removeClass(e,"ng-not-empty"),g.addClass(e,"ng-empty")):(g.removeClass(e,"ng-empty"),g.addClass(e,"ng-not-empty"))};var w=0;Qc({ctrl:this,$element:e,set:function(a,b){a[b]=!0},unset:function(a,b){delete a[b]},$animate:g}),this.$setPristine=function(){u.$dirty=!1,u.$pristine=!0,g.removeClass(e,Lf),g.addClass(e,Kf)},this.$setDirty=function(){u.$dirty=!0,u.$pristine=!1,g.removeClass(e,Kf),g.addClass(e,Lf),u.$$parentForm.$setDirty()},this.$setUntouched=function(){u.$touched=!1,u.$untouched=!0,g.setClass(e,"ng-untouched","ng-touched")},this.$setTouched=function(){u.$touched=!0,u.$untouched=!1,g.setClass(e,"ng-touched","ng-untouched")},this.$rollbackViewValue=function(){h.cancel(t),u.$viewValue=u.$$lastCommittedViewValue,u.$render()},this.$validate=function(){if(!gd(u.$modelValue)){var a=u.$$rawModelValue,b=u.$valid,c=u.$modelValue,d=u.$options&&u.$options.allowInvalid;u.$$runValidators(a,u.$$lastCommittedViewValue,function(e){d||b===e||(u.$modelValue=e?a:void 0,u.$modelValue!==c&&u.$$writeModelToScope())})}},this.$$runValidators=function(a,b,c){function e(a,b){g===w&&u.$setValidity(a,b)}function f(a){g===w&&c(a)}w++;var g=w;!function(){var a=u.$$parserName||"parse";return q(l)?(e(a,null),!0):(l||(d(u.$validators,function(a,b){e(b,null)}),d(u.$asyncValidators,function(a,b){e(b,null)})),e(a,l),l)}()?f(!1):function(){var c=!0;return d(u.$validators,function(d,f){var g=d(a,b);c=c&&g,e(f,g)}),!!c||(d(u.$asyncValidators,function(a,b){e(b,null)}),!1)}()?function(){var c=[],g=!0;d(u.$asyncValidators,function(d,f){var h=d(a,b);if(!h||!x(h.then))throw Nf("nopromise",h);e(f,void 0),c.push(h.then(function(){e(f,!0)},function(){g=!1,e(f,!1)}))}),c.length?j.all(c).then(function(){f(g)},m):f(!0)}():f(!1)},this.$commitViewValue=function(){var a=u.$viewValue;h.cancel(t),(u.$$lastCommittedViewValue!==a||""===a&&u.$$hasNativeValidators)&&(u.$$updateEmptyClasses(a),u.$$lastCommittedViewValue=a,u.$pristine&&this.$setDirty(),this.$$parseAndValidate())},this.$$parseAndValidate=function(){var b=u.$$lastCommittedViewValue;if(l=!q(b)||void 0)for(var c=0;c<u.$parsers.length;c++)if(b=u.$parsers[c](b),q(b)){l=!1;break}gd(u.$modelValue)&&(u.$modelValue=p(a));var d=u.$modelValue,e=u.$options&&u.$options.allowInvalid;u.$$rawModelValue=b,e&&(u.$modelValue=b,u.$modelValue!==d&&u.$$writeModelToScope()),u.$$runValidators(b,u.$$lastCommittedViewValue,function(a){e||(u.$modelValue=a?b:void 0,u.$modelValue!==d&&u.$$writeModelToScope())})},this.$$writeModelToScope=function(){s(a,u.$modelValue),d(u.$viewChangeListeners,function(a){try{a()}catch(a){b(a)}})},this.$setViewValue=function(a,b){u.$viewValue=a,u.$options&&!u.$options.updateOnDefault||u.$$debounceViewValueCommit(b)},this.$$debounceViewValueCommit=function(b){var c=0,d=u.$options;d&&r(d.debounce)&&(d=d.debounce,v(d)?c=d:v(d[b])?c=d[b]:v(d.default)&&(c=d.default)),h.cancel(t),c?t=h(function(){u.$commitViewValue()},c):i.$$phase?u.$commitViewValue():a.$apply(function(){u.$commitViewValue()})},a.$watch(function(){var b=p(a);if(b!==u.$modelValue&&(u.$modelValue===u.$modelValue||b===b)){u.$modelValue=u.$$rawModelValue=b,l=void 0;for(var c=u.$formatters,d=c.length,e=b;d--;)e=c[d](e);u.$viewValue!==e&&(u.$$updateEmptyClasses(e),u.$viewValue=u.$$lastCommittedViewValue=e,u.$render(),u.$$runValidators(u.$modelValue,u.$viewValue,m))}return b})}],Pf=["$rootScope",function(a){return{restrict:"A",require:["ngModel","^?form","^?ngModelOptions"],controller:Of,priority:1,compile:function(b){return b.addClass(Kf).addClass("ng-untouched").addClass(If),{pre:function(a,b,c,d){var e=d[0];b=d[1]||e.$$parentForm,e.$$setOptions(d[2]&&d[2].$options),b.$addControl(e),c.$observe("name",function(a){e.$name!==a&&e.$$parentForm.$$renameControl(e,a)}),a.$on("$destroy",function(){e.$$parentForm.$removeControl(e)})},post:function(b,c,d,e){var f=e[0];f.$options&&f.$options.updateOn&&c.on(f.$options.updateOn,function(a){f.$$debounceViewValueCommit(a&&a.type)}),c.on("blur",function(){f.$touched||(a.$$phase?b.$evalAsync(f.$setTouched):b.$apply(f.$setTouched))})}}}}}],Qf=/(\s+|^)default(\s+|$)/,Rf=function(){return{restrict:"A",controller:["$scope","$attrs",function(a,b){var c=this;this.$options=H(a.$eval(b.ngModelOptions)),r(this.$options.updateOn)?(this.$options.updateOnDefault=!1,this.$options.updateOn=jd(this.$options.updateOn.replace(Qf,function(){return c.$options.updateOnDefault=!0," "}))):this.$options.updateOnDefault=!0}]}},Sf=Ec({terminal:!0,priority:1e3}),Tf=b("ngOptions"),Uf=/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?(?:\s+disable\s+when\s+([\s\S]+?))?\s+for\s+(?:([$\w][$\w]*)|(?:\(\s*([$\w][$\w]*)\s*,\s*([$\w][$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,Vf=["$compile","$document","$parse",function(b,e,f){function g(a,b,d){function e(a,b,c,d,e){this.selectValue=a,this.viewValue=b,this.label=c,this.group=d,this.disabled=e}function g(a){var b;if(!j&&c(a))b=a;else{b=[];for(var d in a)a.hasOwnProperty(d)&&"$"!==d.charAt(0)&&b.push(d)}return b}var h=a.match(Uf);if(!h)throw Tf("iexp",a,Q(b));var i=h[5]||h[7],j=h[6];a=/ as /.test(h[0])&&h[1];var k=h[9];b=f(h[2]?h[1]:i);var l=a&&f(a)||b,m=k&&f(k),n=k?function(a,b){return m(d,b)}:function(a){return Ha(a)},o=function(a,b){return n(a,u(a,b))},p=f(h[2]||h[1]),q=f(h[3]||""),r=f(h[4]||""),s=f(h[8]),t={},u=j?function(a,b){return t[j]=b,t[i]=a,t}:function(a){return t[i]=a,t};return{trackBy:k,getTrackByValue:o,getWatchables:f(s,function(a){var b=[];a=a||[];for(var c=g(a),e=c.length,f=0;f<e;f++){var i=a===c?f:c[f],j=a[i],i=u(j,i),j=n(j,i);b.push(j),(h[2]||h[1])&&(j=p(d,i),b.push(j)),h[4]&&(i=r(d,i),b.push(i))}return b}),getOptions:function(){for(var a=[],b={},c=s(d)||[],f=g(c),h=f.length,i=0;i<h;i++){var j=c===f?i:f[i],m=u(c[j],j),t=l(d,m),j=n(t,m),v=p(d,m),w=q(d,m),m=r(d,m),t=new e(j,t,v,w,m);a.push(t),b[j]=t}return{items:a,selectValueMap:b,getOptionFromViewValue:function(a){return b[o(a)]},getViewValueFromOption:function(a){return k?H(a.viewValue):a.viewValue}}}}}var h=a.document.createElement("option"),i=a.document.createElement("optgroup");return{restrict:"A",terminal:!0,require:["select","ngModel"],link:{pre:function(a,b,c,d){d[0].registerOption=m},post:function(a,c,f,j){function k(a,b){a.element=b,b.disabled=a.disabled,a.label!==b.label&&(b.label=a.label,b.textContent=a.label),b.value=a.selectValue}function l(){var a=w&&n.readValue();if(w)for(var b=w.items.length-1;0<=b;b--){var d=w.items[b];Aa(r(d.group)?d.element.parentNode:d.element)}w=x.getOptions();var e={};t&&c.prepend(m),w.items.forEach(function(a){var b;if(r(a.group)){b=e[a.group],b||(b=i.cloneNode(!1),y.appendChild(b),b.label=null===a.group?"null":a.group,e[a.group]=b);var c=h.cloneNode(!1)}else b=y,c=h.cloneNode(!1);b.appendChild(c),k(a,c)}),c[0].appendChild(y),o.$render(),o.$isEmpty(a)||(b=n.readValue(),(x.trackBy||p?I(a,b):a===b)||(o.$setViewValue(b),o.$render()))}var m,n=j[0],o=j[1],p=f.multiple;j=0;for(var q=c.children(),s=q.length;j<s;j++)if(""===q[j].value){m=q.eq(j);break}var t=!!m,u=!1,v=Tc(h.cloneNode(!1));v.val("?");var w,x=g(f.ngOptions,c,a),y=e[0].createDocumentFragment(),z=function(){t?u&&m.removeAttr("selected"):m.remove()};p?(o.$isEmpty=function(a){return!a||0===a.length},n.writeValue=function(a){w.items.forEach(function(a){a.element.selected=!1}),a&&a.forEach(function(a){(a=w.getOptionFromViewValue(a))&&(a.element.selected=!0)})},n.readValue=function(){var a=c.val()||[],b=[];return d(a,function(a){(a=w.selectValueMap[a])&&!a.disabled&&b.push(w.getViewValueFromOption(a))}),b},x.trackBy&&a.$watchCollection(function(){if(hd(o.$viewValue))return o.$viewValue.map(function(a){return x.getTrackByValue(a)})},function(){o.$render()})):(n.writeValue=function(a){var b=w.selectValueMap[c.val()],d=w.getOptionFromViewValue(a);b&&b.element.removeAttribute("selected"),d?(c[0].value!==d.selectValue&&(v.remove(),z(),c[0].value=d.selectValue,d.element.selected=!0),d.element.setAttribute("selected","selected")):null===a||t?(v.remove(),t||c.prepend(m),c.val(""),u&&(m.prop("selected",!0),m.attr("selected",!0))):(z(),c.prepend(v),c.val("?"),v.prop("selected",!0),v.attr("selected",!0))},n.readValue=function(){var a=w.selectValueMap[c.val()];return a&&!a.disabled?(z(),v.remove(),w.getViewValueFromOption(a)):null},x.trackBy&&a.$watch(function(){return x.getTrackByValue(o.$viewValue)},function(){o.$render()})),t?(m.remove(),b(m)(a),8===m[0].nodeType?(u=!1,n.registerOption=function(a,b){""===b.val()&&(u=!0,m=b,m.removeClass("ng-scope"),o.$render(),b.on("$destroy",function(){m=void 0,u=!1}))}):(m.removeClass("ng-scope"),u=!0)):m=Tc(h.cloneNode(!1)),c.empty(),l(),a.$watchCollection(x.getWatchables,l)}}}}],Wf=["$locale","$interpolate","$log",function(a,b,c){var e=/{}/g,f=/^when(Minus)?(.+)$/;return{link:function(g,h,i){function j(a){h.text(a||"")}var k,l=i.count,n=i.$attr.when&&h.attr(i.$attr.when),o=i.offset||0,p=g.$eval(n)||{},r={},s=b.startSymbol(),t=b.endSymbol(),u=s+l+"-"+o+t,v=ed.noop;d(i,function(a,b){var c=f.exec(b);c&&(c=(c[1]?"-":"")+Yc(c[2]),p[c]=h.attr(i.$attr[b]))}),d(p,function(a,c){r[c]=b(a.replace(e,u))}),g.$watch(l,function(b){var d=parseFloat(b),e=gd(d);e||d in p||(d=a.pluralCat(d-o)),d===k||e&&gd(k)||(v(),e=r[d],q(e)?(null!=b&&c.debug("ngPluralize: no rule defined for '"+d+"' in "+n),v=m,j()):v=g.$watch(e,j),k=d)})}}}],Xf=["$parse","$animate","$compile",function(a,e,f){var g=b("ngRepeat"),h=function(a,b,c,d,e,f,g){a[c]=d,e&&(a[e]=f),a.$index=b,a.$first=0===b,a.$last=b===g-1,a.$middle=!(a.$first||a.$last),a.$odd=!(a.$even=0==(1&b))};return{restrict:"A",multiElement:!0,transclude:"element",priority:1e3,terminal:!0,$$tlb:!0,compile:function(b,i){var j=i.ngRepeat,k=f.$$createComment("end ngRepeat",j),l=j.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);if(!l)throw g("iexp",j);var m=l[1],n=l[2],o=l[3],p=l[4],l=m.match(/^(?:(\s*[$\w]+)|\(\s*([$\w]+)\s*,\s*([$\w]+)\s*\))$/);if(!l)throw g("iidexp",m);var q=l[3]||l[1],r=l[2];if(o&&(!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(o)||/^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(o)))throw g("badident",o);var s,t,u,v,w={$id:Ha};return p?s=a(p):(u=function(a,b){return Ha(b)},v=function(a){return a}),function(a,b,f,i,l){s&&(t=function(b,c,d){return r&&(w[r]=b),w[q]=c,w.$index=d,s(a,w)});var m=fa();a.$watchCollection(n,function(f){var i,n,p,s,w,x,y,z,A,B,C=b[0],D=fa();if(o&&(a[o]=f),c(f))z=f,n=t||u;else for(B in n=t||v,z=[],f)Xc.call(f,B)&&"$"!==B.charAt(0)&&z.push(B);for(s=z.length,B=Array(s),i=0;i<s;i++)if(w=f===z?i:z[i],x=f[w],y=n(w,x,i),m[y])A=m[y],delete m[y],D[y]=A,B[i]=A;else{if(D[y])throw d(B,function(a){a&&a.scope&&(m[a.id]=a)}),g("dupes",j,y,x);B[i]={id:y,scope:void 0,clone:void 0},D[y]=!0}for(p in m){if(A=m[p],y=ea(A.clone),e.leave(y),y[0].parentNode)for(i=0,n=y.length;i<n;i++)y[i].$$NG_REMOVED=!0;A.scope.$destroy()}for(i=0;i<s;i++)if(w=f===z?i:z[i],x=f[w],A=B[i],A.scope){p=C;do{p=p.nextSibling}while(p&&p.$$NG_REMOVED);A.clone[0]!==p&&e.move(ea(A.clone),null,C),C=A.clone[A.clone.length-1],h(A.scope,i,q,x,r,w,s)}else l(function(a,b){A.scope=b;var c=k.cloneNode(!1);a[a.length++]=c,e.enter(a,null,C),C=c,A.clone=a,D[A.id]=A,h(A.scope,i,q,x,r,w,s)});m=D})}}}}],Yf=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(b,c,d){b.$watch(d.ngShow,function(b){a[b?"removeClass":"addClass"](c,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],Zf=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(b,c,d){b.$watch(d.ngHide,function(b){a[b?"addClass":"removeClass"](c,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],$f=Ec(function(a,b,c){a.$watch(c.ngStyle,function(a,c){c&&a!==c&&d(c,function(a,c){b.css(c,"")}),a&&b.css(a)},!0)}),_f=["$animate","$compile",function(a,b){return{require:"ngSwitch",controller:["$scope",function(){this.cases={}}],link:function(c,e,f,g){var h=[],i=[],j=[],k=[],l=function(a,b){return function(c){!1!==c&&a.splice(b,1)}};c.$watch(f.ngSwitch||f.on,function(c){for(var e,f;j.length;)a.cancel(j.pop());for(e=0,f=k.length;e<f;++e){var m=ea(i[e].clone);k[e].$destroy(),(j[e]=a.leave(m)).done(l(j,e))}i.length=0,k.length=0,(h=g.cases["!"+c]||g.cases["?"])&&d(h,function(c){c.transclude(function(d,e){k.push(e);var f=c.element;d[d.length++]=b.$$createComment("end ngSwitchWhen"),i.push({clone:d}),a.enter(d,f.parent(),f)})})})}}}],ag=Ec({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,b,c,e,f){a=c.ngSwitchWhen.split(c.ngSwitchWhenSeparator).sort().filter(function(a,b,c){return c[b-1]!==a}),d(a,function(a){e.cases["!"+a]=e.cases["!"+a]||[],e.cases["!"+a].push({transclude:f,element:b})})}}),bg=Ec({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,b,c,d,e){d.cases["?"]=d.cases["?"]||[],d.cases["?"].push({transclude:e,element:b})}}),cg=b("ngTransclude"),dg=["$compile",function(a){return{restrict:"EAC",terminal:!0,compile:function(b){var c=a(b.contents());return b.empty(),function(a,b,d,e,f){function g(){c(a,function(a){b.append(a)})}if(!f)throw cg("orphan",Q(b));d.ngTransclude===d.$attr.ngTransclude&&(d.ngTransclude=""),d=d.ngTransclude||d.ngTranscludeSlot,f(function(a,c){a.length?b.append(a):(g(),c.$destroy())},null,d),d&&!f.isSlotFilled(d)&&g()}}}}],eg=["$templateCache",function(a){return{restrict:"E",terminal:!0,compile:function(b,c){"text/ng-template"===c.type&&a.put(c.id,b[0].text)}}}],fg={$setViewValue:m,$render:m},gg=["$element","$scope",function(b,c){var d=this,e=new Ia;d.ngModelCtrl=fg,d.unknownOption=Tc(a.document.createElement("option")),d.renderUnknownOption=function(a){a="? "+Ha(a)+" ?",d.unknownOption.val(a),b.prepend(d.unknownOption),b.val(a)},c.$on("$destroy",function(){d.renderUnknownOption=m}),d.removeUnknownOption=function(){d.unknownOption.parent()&&d.unknownOption.remove()},d.readValue=function(){return d.removeUnknownOption(),b.val()},d.writeValue=function(a){d.hasOption(a)?(d.removeUnknownOption(),b.val(a),""===a&&d.emptyOption.prop("selected",!0)):null==a&&d.emptyOption?(d.removeUnknownOption(),b.val("")):d.renderUnknownOption(a)},d.addOption=function(a,b){if(8!==b[0].nodeType){ca(a,'"option value"'),""===a&&(d.emptyOption=b);var c=e.get(a)||0;e.put(a,c+1),d.ngModelCtrl.$render(),b[0].hasAttribute("selected")&&(b[0].selected=!0)}},d.removeOption=function(a){var b=e.get(a);b&&(1===b?(e.remove(a),""===a&&(d.emptyOption=void 0)):e.put(a,b-1))},d.hasOption=function(a){return!!e.get(a)},d.registerOption=function(a,b,c,e,f){if(e){var g;c.$observe("value",function(a){r(g)&&d.removeOption(g),g=a,d.addOption(a,b)})}else f?a.$watch(f,function(a,e){c.$set("value",a),e!==a&&d.removeOption(e),d.addOption(a,b)}):d.addOption(c.value,b);b.on("$destroy",function(){d.removeOption(c.value),d.ngModelCtrl.$render()})}}],hg=function(){return{restrict:"E",require:["select","?ngModel"],controller:gg,priority:1,link:{pre:function(a,b,c,e){var f=e[1];if(f){var g=e[0];if(g.ngModelCtrl=f,b.on("change",function(){a.$apply(function(){f.$setViewValue(g.readValue())})}),c.multiple){g.readValue=function(){var a=[];return d(b.find("option"),function(b){b.selected&&a.push(b.value)}),a},g.writeValue=function(a){var c=new Ia(a);d(b.find("option"),function(a){a.selected=r(c.get(a.value))})};var h,i=NaN;a.$watch(function(){i!==f.$viewValue||I(h,f.$viewValue)||(h=ha(f.$viewValue),f.$render()),i=f.$viewValue}),f.$isEmpty=function(a){return!a||0===a.length}}}},post:function(a,b,c,d){var e=d[1];if(e){var f=d[0];e.$render=function(){f.writeValue(e.$viewValue)}}}}}},ig=["$interpolate",function(a){return{restrict:"E",priority:100,compile:function(b,c){var d,e;return r(c.ngValue)?d=!0:r(c.value)?d=a(c.value,!0):(e=a(b.text(),!0))||c.$set("value",b.text()),function(a,b,c){var f=b.parent();(f=f.data("$selectController")||f.parent().data("$selectController"))&&f.registerOption(a,b,c,d,e)}}}}],jg=function(){return{restrict:"A",require:"?ngModel",link:function(a,b,c,d){d&&(c.required=!0,d.$validators.required=function(a,b){return!c.required||!d.$isEmpty(b)},c.$observe("required",function(){d.$validate()}))}}},kg=function(){return{restrict:"A",require:"?ngModel",link:function(a,c,d,e){if(e){var f,g=d.ngPattern||d.pattern;d.$observe("pattern",function(a){if(u(a)&&0<a.length&&(a=new RegExp("^"+a+"$")),a&&!a.test)throw b("ngPattern")("noregexp",g,a,Q(c));f=a||void 0,e.$validate()}),e.$validators.pattern=function(a,b){return e.$isEmpty(b)||q(f)||f.test(b)}}}}},lg=function(){return{restrict:"A",require:"?ngModel",link:function(a,b,c,d){if(d){var e=-1;c.$observe("maxlength",function(a){a=k(a),e=gd(a)?-1:a,d.$validate()}),d.$validators.maxlength=function(a,b){return 0>e||d.$isEmpty(b)||b.length<=e}}}}},mg=function(){return{restrict:"A",require:"?ngModel",link:function(a,b,c,d){if(d){var e=0;c.$observe("minlength",function(a){e=k(a)||0,d.$validate()}),d.$validators.minlength=function(a,b){return d.$isEmpty(b)||b.length>=e}}}}};a.angular.bootstrap?a.console&&console.log("WARNING: Tried to load angular more than once."):(function(){var b;if(!rd){var c=md();(Uc=q(c)?a.jQuery:c?a[c]:void 0)&&Uc.fn.on?(Tc=Uc,i(Uc.fn,{scope:Gd.scope,isolateScope:Gd.isolateScope,controller:Gd.controller,injector:Gd.injector,inheritedData:Gd.inheritedData}),b=Uc.cleanData,Uc.cleanData=function(a){for(var c,d,e=0;null!=(d=a[e]);e++)(c=Uc._data(d,"events"))&&c.$destroy&&Uc(d).triggerHandler("$destroy");b(a)}):Tc=ma,ed.element=Tc,rd=!0}}(),function(c){i(c,{bootstrap:Y,copy:H,extend:i,merge:j,equals:I,element:Tc,forEach:d,injector:La,noop:m,bind:K,toJson:M,fromJson:N,identity:n,isUndefined:q,isDefined:r,isString:u,isFunction:x,isObject:s,isNumber:v,isElement:D,isArray:hd,version:td,isDate:w,lowercase:Yc,uppercase:Zc,callbacks:{$$counter:0},getTestability:$,$$minErr:b,$$csp:ld,reloadWithDebugInfo:Z}),(Vc=ga(a))("ng",["ngLocale"],["$provide",function(a){a.provider({$$sanitizeUri:Xb}),a.provider("$compile",Ua).directive({a:Ze,input:pf,textarea:pf,form:bf,script:eg,select:hg,option:ig,ngBind:sf,ngBindHtml:uf,ngBindTemplate:tf,ngClass:wf,ngClassEven:yf,ngClassOdd:xf,ngCloak:zf,ngController:Af,ngForm:cf,ngHide:Zf,ngIf:Df,ngInclude:Ef,ngInit:Gf,ngNonBindable:Sf,ngPluralize:Wf,ngRepeat:Xf,ngShow:Yf,ngStyle:$f,ngSwitch:_f,ngSwitchWhen:ag,ngSwitchDefault:bg,ngOptions:Vf,ngTransclude:dg,ngModel:Pf,ngList:Hf,ngChange:vf,pattern:kg,ngPattern:kg,required:jg,ngRequired:jg,minlength:mg,ngMinlength:mg,maxlength:lg,ngMaxlength:lg,ngValue:rf,ngModelOptions:Rf}).directive({ngInclude:Ff}).directive($e).directive(Bf),a.provider({$anchorScroll:Ma,$animate:Ud,$animateCss:Xd,$$animateJs:Sd,$$animateQueue:Td,$$AnimateRunner:Wd,$$animateAsyncRun:Vd,$browser:Ra,$cacheFactory:Sa,$controller:$a,$document:_a,$exceptionHandler:ab,$filter:jc,$$forceReflow:be,$interpolate:mb,$interval:nb,$http:ib,$httpParamSerializer:cb,$httpParamSerializerJQLike:db,$httpBackend:kb,$xhrFactory:jb,$jsonpCallbacks:ke,$location:zb,$log:Ab,$parse:Rb,$rootScope:Wb,$q:Sb,$$q:Tb,$sce:_b,$sceDelegate:$b,$sniffer:ac,$templateCache:Ta,$templateRequest:bc,$$testability:cc,$timeout:dc,$window:gc,$$rAF:Vb,$$jqLite:Ga,$$HashMap:Kd,$$cookieReader:ic})}])}(ed),ed.module("ngLocale",[],["$provide",function(a){function b(a){a+="";var b=a.indexOf(".");return-1==b?0:a.length-b-1}a.value("$locale",{DATETIME_FORMATS:{AMPMS:["AM","PM"],DAY:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),ERANAMES:["Before Christ","Anno Domini"],ERAS:["BC","AD"],FIRSTDAYOFWEEK:6,MONTH:"January February March April May June July August September October November December".split(" "),SHORTDAY:"Sun Mon Tue Wed Thu Fri Sat".split(" "),SHORTMONTH:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),STANDALONEMONTH:"January February March April May June July August September October November December".split(" "),WEEKENDRANGE:[5,6],fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",medium:"MMM d, y h:mm:ss a",mediumDate:"MMM d, y",mediumTime:"h:mm:ss a",short:"M/d/yy h:mm a",shortDate:"M/d/yy",shortTime:"h:mm a"},NUMBER_FORMATS:{CURRENCY_SYM:"$",DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-¤",negSuf:"",posPre:"¤",posSuf:""}]},id:"en-us",localeID:"en_US",pluralCat:function(a,c){var d=0|a,e=c;return void 0===e&&(e=Math.min(b(a),3)),Math.pow(10,e),1==d&&0==e?"one":"other"}})}]),Tc(a.document).ready(function(){X(a.document,Y)}))}(window),!window.angular.$$csp().noInlineStyle&&window.angular.element(document.head).prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}.ng-animate-shim{visibility:hidden;}.ng-anchor{position:absolute;}</style>'),function(a,b){"use strict";function c(a){var b=[];return k(b,i).chars(a),b.join("")}var d,e,f,g,h,i,j,k,l=b.$$minErr("$sanitize");b.module("ngSanitize",[]).provider("$sanitize",function(){function c(a,b){var c,d={},e=a.split(",");for(c=0;c<e.length;c++)d[b?h(e[c]):e[c]]=!0;return d}function m(a){for(var b={},c=0,d=a.length;c<d;c++){var e=a[c];b[e.name]=e.value}return b}function n(a){return a.replace(/&/g,"&amp;").replace(r,function(a){var b=a.charCodeAt(0);return a=a.charCodeAt(1),"&#"+(1024*(b-55296)+(a-56320)+65536)+";"}).replace(s,function(a){return"&#"+a.charCodeAt(0)+";"}).replace(/</g,"&lt;").replace(/>/g,"&gt;")}function o(b){for(;b;){if(b.nodeType===a.Node.ELEMENT_NODE)for(var c=b.attributes,d=0,e=c.length;d<e;d++){var f=c[d],g=f.name.toLowerCase();"xmlns:ns1"!==g&&0!==g.lastIndexOf("ns1:",0)||(b.removeAttributeNode(f),d--,e--)}(c=b.firstChild)&&o(c),b=b.nextSibling}}var p=!1;this.$get=["$$sanitizeUri",function(a){return p&&e(z,x),function(b){var c=[];return j(b,k(c,function(b,c){return!/^unsafe:/.test(a(b,c))})),c.join("")}}],this.enableSvg=function(a){return g(a)?(p=a,this):p},d=b.bind,e=b.extend,f=b.forEach,g=b.isDefined,h=b.lowercase,i=b.noop,j=function(b,c){null===b||void 0===b?b="":"string"!=typeof b&&(b=""+b),q.innerHTML=b;var d=5;do{if(0===d)throw l("uinput");d--,a.document.documentMode&&o(q),b=q.innerHTML,q.innerHTML=b}while(b!==q.innerHTML);for(d=q.firstChild;d;){switch(d.nodeType){case 1:c.start(d.nodeName.toLowerCase(),m(d.attributes));break;case 3:c.chars(d.textContent)}var e;if(!((e=d.firstChild)||(1===d.nodeType&&c.end(d.nodeName.toLowerCase()),e=d.nextSibling)))for(;null==e&&(d=d.parentNode)!==q;)e=d.nextSibling,1===d.nodeType&&c.end(d.nodeName.toLowerCase());d=e}for(;d=q.firstChild;)q.removeChild(d)},k=function(a,b){var c=!1,e=d(a,a.push);return{start:function(a,d){a=h(a),!c&&y[a]&&(c=a),c||!0!==z[a]||(e("<"),e(a),f(d,function(c,d){var f=h(d),g="img"===a&&"src"===f||"background"===f;!0!==B[f]||!0===A[f]&&!b(c,g)||(e(" "),e(d),e('="'),e(n(c)),e('"'))}),e(">"))},end:function(a){a=h(a),c||!0!==z[a]||!0===t[a]||(e("</"),e(a),e(">")),a==c&&(c=!1)},chars:function(a){c||e(n(a))}}};var q,r=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,s=/([^#-~ |!])/g,t=c("area,br,col,hr,img,wbr"),u=c("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),v=c("rp,rt"),w=e({},v,u),u=e({},u,c("address,article,aside,blockquote,caption,center,del,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,map,menu,nav,ol,pre,section,table,ul")),v=e({},v,c("a,abbr,acronym,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,q,ruby,rp,rt,s,samp,small,span,strike,strong,sub,sup,time,tt,u,var")),x=c("circle,defs,desc,ellipse,font-face,font-face-name,font-face-src,g,glyph,hkern,image,linearGradient,line,marker,metadata,missing-glyph,mpath,path,polygon,polyline,radialGradient,rect,stop,svg,switch,text,title,tspan"),y=c("script,style"),z=e({},t,u,v,w),A=c("background,cite,href,longdesc,src,xlink:href"),w=c("abbr,align,alt,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,coords,dir,face,headers,height,hreflang,hspace,ismap,lang,language,nohref,nowrap,rel,rev,rows,rowspan,rules,scope,scrolling,shape,size,span,start,summary,tabindex,target,title,type,valign,value,vspace,width"),v=c("accent-height,accumulate,additive,alphabetic,arabic-form,ascent,baseProfile,bbox,begin,by,calcMode,cap-height,class,color,color-rendering,content,cx,cy,d,dx,dy,descent,display,dur,end,fill,fill-rule,font-family,font-size,font-stretch,font-style,font-variant,font-weight,from,fx,fy,g1,g2,glyph-name,gradientUnits,hanging,height,horiz-adv-x,horiz-origin-x,ideographic,k,keyPoints,keySplines,keyTimes,lang,marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mathematical,max,min,offset,opacity,orient,origin,overline-position,overline-thickness,panose-1,path,pathLength,points,preserveAspectRatio,r,refX,refY,repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,rotate,rx,ry,slope,stemh,stemv,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,systemLanguage,target,text-anchor,to,transform,type,u1,u2,underline-position,underline-thickness,unicode,unicode-range,units-per-em,values,version,viewBox,visibility,width,widths,x,x-height,x1,x2,xlink:actuate,xlink:arcrole,xlink:role,xlink:show,xlink:title,xlink:type,xml:base,xml:lang,xml:space,xmlns,xmlns:xlink,y,y1,y2,zoomAndPan",!0),B=e({},A,v,w);!function(a){if(!a.document||!a.document.implementation)throw l("noinert");a=a.document.implementation.createHTMLDocument("inert");var b=(a.documentElement||a.getDocumentElement()).getElementsByTagName("body");1===b.length?q=b[0]:(b=a.createElement("html"),q=a.createElement("body"),b.appendChild(q),a.appendChild(b))}(a)}),b.module("ngSanitize").filter("linky",["$sanitize",function(a){var d=/((ftp|https?):\/\/|(www\.)|(mailto:)?[A-Za-z0-9._%+-]+@)\S*[^\s.;,(){}<>"\u201d\u2019]/i,e=/^mailto:/i,f=b.$$minErr("linky"),g=b.isDefined,h=b.isFunction,i=b.isObject,j=b.isString;return function(b,k,l){function m(a){a&&r.push(c(a))}if(null==b||""===b)return b;if(!j(b))throw f("notstring",b);for(var n,o,p=h(l)?l:i(l)?function(){return l}:function(){return{}},q=b,r=[];b=q.match(d);)n=b[0],b[2]||b[4]||(n=(b[3]?"http://":"mailto:")+n),o=b.index,m(q.substr(0,o)),function(a,b){var c,d=p(a);r.push("<a ");for(c in d)r.push(c+'="'+d[c]+'" ');!g(k)||"target"in d||r.push('target="',k,'" '),r.push('href="',a.replace(/"/g,"&quot;"),'">'),m(b),r.push("</a>")}(n,b[0].replace(e,"")),q=q.substring(o+b[0].length);return m(q),a(r.join(""))}}])}(window,window.angular),function(a,b){"use strict";function c(a,c,d){var e=d.baseHref(),f=a[0];return function(a,d,g){var h,i;g=g||{},i=g.expires,h=b.isDefined(g.path)?g.path:e,b.isUndefined(d)&&(i="Thu, 01 Jan 1970 00:00:00 GMT",d=""),b.isString(i)&&(i=new Date(i)),d=encodeURIComponent(a)+"="+encodeURIComponent(d),d=d+(h?";path="+h:"")+(g.domain?";domain="+g.domain:""),d+=i?";expires="+i.toUTCString():"",d+=g.secure?";secure":"",g=d.length+1,4096<g&&c.warn("Cookie '"+a+"' possibly not set or overflowed because it was too large ("+g+" > 4096 bytes)!"),f.cookie=d}}b.module("ngCookies",["ng"]).provider("$cookies",[function(){var a=this.defaults={};this.$get=["$$cookieReader","$$cookieWriter",function(c,d){return{get:function(a){return c()[a]},getObject:function(a){return(a=this.get(a))?b.fromJson(a):a},getAll:function(){return c()},put:function(c,e,f){d(c,e,f?b.extend({},a,f):a)},putObject:function(a,c,d){this.put(a,b.toJson(c),d)},remove:function(c,e){d(c,void 0,e?b.extend({},a,e):a)}}}]}]),b.module("ngCookies").factory("$cookieStore",["$cookies",function(a){return{get:function(b){return a.getObject(b)},put:function(b,c){a.putObject(b,c)},remove:function(b){a.remove(b)}}}]),c.$inject=["$document","$log","$browser"],b.module("ngCookies").provider("$$cookieWriter",function(){this.$get=c})}(window,window.angular),angular.module("ui.bootstrap",["ui.bootstrap.tpls","ui.bootstrap.collapse","ui.bootstrap.tabindex","ui.bootstrap.accordion","ui.bootstrap.alert","ui.bootstrap.buttons","ui.bootstrap.carousel","ui.bootstrap.dateparser","ui.bootstrap.isClass","ui.bootstrap.datepicker","ui.bootstrap.position","ui.bootstrap.datepickerPopup","ui.bootstrap.debounce","ui.bootstrap.multiMap","ui.bootstrap.dropdown","ui.bootstrap.stackedMap","ui.bootstrap.modal","ui.bootstrap.paging","ui.bootstrap.pager","ui.bootstrap.pagination","ui.bootstrap.tooltip","ui.bootstrap.popover","ui.bootstrap.progressbar","ui.bootstrap.rating","ui.bootstrap.tabs","ui.bootstrap.timepicker","ui.bootstrap.typeahead"]),angular.module("ui.bootstrap.tpls",["uib/template/accordion/accordion-group.html","uib/template/accordion/accordion.html","uib/template/alert/alert.html","uib/template/carousel/carousel.html","uib/template/carousel/slide.html","uib/template/datepicker/datepicker.html","uib/template/datepicker/day.html","uib/template/datepicker/month.html","uib/template/datepicker/year.html","uib/template/datepickerPopup/popup.html","uib/template/modal/window.html","uib/template/pager/pager.html","uib/template/pagination/pagination.html","uib/template/tooltip/tooltip-html-popup.html","uib/template/tooltip/tooltip-popup.html","uib/template/tooltip/tooltip-template-popup.html","uib/template/popover/popover-html.html","uib/template/popover/popover-template.html","uib/template/popover/popover.html","uib/template/progressbar/bar.html","uib/template/progressbar/progress.html","uib/template/progressbar/progressbar.html","uib/template/rating/rating.html","uib/template/tabs/tab.html","uib/template/tabs/tabset.html","uib/template/timepicker/timepicker.html","uib/template/typeahead/typeahead-match.html","uib/template/typeahead/typeahead-popup.html"]),angular.module("ui.bootstrap.collapse",[]).directive("uibCollapse",["$animate","$q","$parse","$injector",function(a,b,c,d){var e=d.has("$animateCss")?d.get("$animateCss"):null;return{link:function(d,f,g){function h(a){return q?{width:a.scrollWidth+"px"}:{height:a.scrollHeight+"px"}}function i(){f.hasClass("collapse")&&f.hasClass("in")||b.resolve(m(d)).then(function(){f.removeClass("collapse").addClass("collapsing").attr("aria-expanded",!0).attr("aria-hidden",!1),e?e(f,{addClass:"in",easing:"ease",css:{overflow:"hidden"},to:h(f[0])}).start().finally(j):a.addClass(f,"in",{css:{overflow:"hidden"},to:h(f[0])}).then(j)},angular.noop)}function j(){f.removeClass("collapsing").addClass("collapse").css(r),n(d)}function k(){return f.hasClass("collapse")||f.hasClass("in")?void b.resolve(o(d)).then(function(){f.css(h(f[0])).removeClass("collapse").addClass("collapsing").attr("aria-expanded",!1).attr("aria-hidden",!0),e?e(f,{removeClass:"in",to:s}).start().finally(l):a.removeClass(f,"in",{to:s}).then(l)},angular.noop):l()}function l(){f.css(s),f.removeClass("collapsing").addClass("collapse"),p(d)}var m=c(g.expanding),n=c(g.expanded),o=c(g.collapsing),p=c(g.collapsed),q=!1,r={},s={};(function(){q=!!("horizontal"in g),q?(r={width:""},s={width:"0"}):(r={height:""},s={height:"0"}),d.$eval(g.uibCollapse)||f.addClass("in").addClass("collapse").attr("aria-expanded",!0).attr("aria-hidden",!1).css(r)})(),d.$watch(g.uibCollapse,function(a){a?k():i()})}}}]),angular.module("ui.bootstrap.tabindex",[]).directive("uibTabindexToggle",function(){return{restrict:"A",link:function(a,b,c){c.$observe("disabled",function(a){c.$set("tabindex",a?-1:null)})}}}),angular.module("ui.bootstrap.accordion",["ui.bootstrap.collapse","ui.bootstrap.tabindex"]).constant("uibAccordionConfig",{closeOthers:!0
}).controller("UibAccordionController",["$scope","$attrs","uibAccordionConfig",function(a,b,c){this.groups=[],this.closeOthers=function(d){(angular.isDefined(b.closeOthers)?a.$eval(b.closeOthers):c.closeOthers)&&angular.forEach(this.groups,function(a){a!==d&&(a.isOpen=!1)})},this.addGroup=function(a){var b=this;this.groups.push(a),a.$on("$destroy",function(c){b.removeGroup(a)})},this.removeGroup=function(a){var b=this.groups.indexOf(a);-1!==b&&this.groups.splice(b,1)}}]).directive("uibAccordion",function(){return{controller:"UibAccordionController",controllerAs:"accordion",transclude:!0,templateUrl:function(a,b){return b.templateUrl||"uib/template/accordion/accordion.html"}}}).directive("uibAccordionGroup",function(){return{require:"^uibAccordion",transclude:!0,restrict:"A",templateUrl:function(a,b){return b.templateUrl||"uib/template/accordion/accordion-group.html"},scope:{heading:"@",panelClass:"@?",isOpen:"=?",isDisabled:"=?"},controller:function(){this.setHeading=function(a){this.heading=a}},link:function(a,b,c,d){b.addClass("panel"),d.addGroup(a),a.openClass=c.openClass||"panel-open",a.panelClass=c.panelClass||"panel-default",a.$watch("isOpen",function(c){b.toggleClass(a.openClass,!!c),c&&d.closeOthers(a)}),a.toggleOpen=function(b){a.isDisabled||b&&32!==b.which||(a.isOpen=!a.isOpen)};var e="accordiongroup-"+a.$id+"-"+Math.floor(1e4*Math.random());a.headingId=e+"-tab",a.panelId=e+"-panel"}}}).directive("uibAccordionHeading",function(){return{transclude:!0,template:"",replace:!0,require:"^uibAccordionGroup",link:function(a,b,c,d,e){d.setHeading(e(a,angular.noop))}}}).directive("uibAccordionTransclude",function(){return{require:"^uibAccordionGroup",link:function(a,b,c,d){a.$watch(function(){return d[c.uibAccordionTransclude]},function(a){if(a){var c=angular.element(b[0].querySelector("uib-accordion-header,data-uib-accordion-header,x-uib-accordion-header,uib\\:accordion-header,[uib-accordion-header],[data-uib-accordion-header],[x-uib-accordion-header]"));c.html(""),c.append(a)}})}}}),angular.module("ui.bootstrap.alert",[]).controller("UibAlertController",["$scope","$element","$attrs","$interpolate","$timeout",function(a,b,c,d,e){a.closeable=!!c.close,b.addClass("alert"),c.$set("role","alert"),a.closeable&&b.addClass("alert-dismissible");var f=angular.isDefined(c.dismissOnTimeout)?d(c.dismissOnTimeout)(a.$parent):null;f&&e(function(){a.close()},parseInt(f,10))}]).directive("uibAlert",function(){return{controller:"UibAlertController",controllerAs:"alert",restrict:"A",templateUrl:function(a,b){return b.templateUrl||"uib/template/alert/alert.html"},transclude:!0,scope:{close:"&"}}}),angular.module("ui.bootstrap.buttons",[]).constant("uibButtonConfig",{activeClass:"active",toggleEvent:"click"}).controller("UibButtonsController",["uibButtonConfig",function(a){this.activeClass=a.activeClass||"active",this.toggleEvent=a.toggleEvent||"click"}]).directive("uibBtnRadio",["$parse",function(a){return{require:["uibBtnRadio","ngModel"],controller:"UibButtonsController",controllerAs:"buttons",link:function(b,c,d,e){var f=e[0],g=e[1],h=a(d.uibUncheckable);c.find("input").css({display:"none"}),g.$render=function(){c.toggleClass(f.activeClass,angular.equals(g.$modelValue,b.$eval(d.uibBtnRadio)))},c.on(f.toggleEvent,function(){if(!d.disabled){var a=c.hasClass(f.activeClass);a&&!angular.isDefined(d.uncheckable)||b.$apply(function(){g.$setViewValue(a?null:b.$eval(d.uibBtnRadio)),g.$render()})}}),d.uibUncheckable&&b.$watch(h,function(a){d.$set("uncheckable",a?"":void 0)})}}}]).directive("uibBtnCheckbox",function(){return{require:["uibBtnCheckbox","ngModel"],controller:"UibButtonsController",controllerAs:"button",link:function(a,b,c,d){function e(){return g(c.btnCheckboxTrue,!0)}function f(){return g(c.btnCheckboxFalse,!1)}function g(b,c){return angular.isDefined(b)?a.$eval(b):c}var h=d[0],i=d[1];b.find("input").css({display:"none"}),i.$render=function(){b.toggleClass(h.activeClass,angular.equals(i.$modelValue,e()))},b.on(h.toggleEvent,function(){c.disabled||a.$apply(function(){i.$setViewValue(b.hasClass(h.activeClass)?f():e()),i.$render()})})}}}),angular.module("ui.bootstrap.carousel",[]).controller("UibCarouselController",["$scope","$element","$interval","$timeout","$animate",function(a,b,c,d,e){function f(a){for(var b=0;b<p.length;b++)p[b].slide.active=b===a}function g(c,d,g){if(!s){if(angular.extend(c,{direction:g}),angular.extend(p[r].slide||{},{direction:g}),e.enabled(b)&&!a.$currentTransition&&p[d].element&&o.slides.length>1){p[d].element.data(q,c.direction);var h=o.getCurrentIndex();angular.isNumber(h)&&p[h].element&&p[h].element.data(q,c.direction),a.$currentTransition=!0,e.on("addClass",p[d].element,function(b,c){"close"===c&&(a.$currentTransition=null,e.off("addClass",b))})}a.active=c.index,r=c.index,f(d),k()}}function h(a){for(var b=0;b<p.length;b++)if(p[b].slide===a)return b}function i(){m&&(c.cancel(m),m=null)}function j(b){b.length||(a.$currentTransition=null)}function k(){i();var b=+a.interval;!isNaN(b)&&b>0&&(m=c(l,b))}function l(){var b=+a.interval;n&&!isNaN(b)&&b>0&&p.length?a.next():a.pause()}var m,n,o=this,p=o.slides=a.slides=[],q="uib-slideDirection",r=a.active,s=!1;b.addClass("carousel"),o.addSlide=function(b,c){p.push({slide:b,element:c}),p.sort(function(a,b){return+a.slide.index-+b.slide.index}),(b.index===a.active||1===p.length&&!angular.isNumber(a.active))&&(a.$currentTransition&&(a.$currentTransition=null),r=b.index,a.active=b.index,f(r),o.select(p[h(b)]),1===p.length&&a.play())},o.getCurrentIndex=function(){for(var a=0;a<p.length;a++)if(p[a].slide.index===r)return a},o.next=a.next=function(){var b=(o.getCurrentIndex()+1)%p.length;return 0===b&&a.noWrap()?void a.pause():o.select(p[b],"next")},o.prev=a.prev=function(){var b=o.getCurrentIndex()-1<0?p.length-1:o.getCurrentIndex()-1;return a.noWrap()&&b===p.length-1?void a.pause():o.select(p[b],"prev")},o.removeSlide=function(b){var c=h(b);p.splice(c,1),p.length>0&&r===c?c>=p.length?(r=p.length-1,a.active=r,f(r),o.select(p[p.length-1])):(r=c,a.active=r,f(r),o.select(p[c])):r>c&&(r--,a.active=r),0===p.length&&(r=null,a.active=null)},o.select=a.select=function(b,c){var d=h(b.slide);void 0===c&&(c=d>o.getCurrentIndex()?"next":"prev"),b.slide.index===r||a.$currentTransition||g(b.slide,d,c)},a.indexOfSlide=function(a){return+a.slide.index},a.isActive=function(b){return a.active===b.slide.index},a.isPrevDisabled=function(){return 0===a.active&&a.noWrap()},a.isNextDisabled=function(){return a.active===p.length-1&&a.noWrap()},a.pause=function(){a.noPause||(n=!1,i())},a.play=function(){n||(n=!0,k())},b.on("mouseenter",a.pause),b.on("mouseleave",a.play),a.$on("$destroy",function(){s=!0,i()}),a.$watch("noTransition",function(a){e.enabled(b,!a)}),a.$watch("interval",k),a.$watchCollection("slides",j),a.$watch("active",function(a){if(angular.isNumber(a)&&r!==a){for(var b=0;b<p.length;b++)if(p[b].slide.index===a){a=b;break}p[a]&&(f(a),o.select(p[a]),r=a)}})}]).directive("uibCarousel",function(){return{transclude:!0,controller:"UibCarouselController",controllerAs:"carousel",restrict:"A",templateUrl:function(a,b){return b.templateUrl||"uib/template/carousel/carousel.html"},scope:{active:"=",interval:"=",noTransition:"=",noPause:"=",noWrap:"&"}}}).directive("uibSlide",["$animate",function(a){return{require:"^uibCarousel",restrict:"A",transclude:!0,templateUrl:function(a,b){return b.templateUrl||"uib/template/carousel/slide.html"},scope:{actual:"=?",index:"=?"},link:function(b,c,d,e){c.addClass("item"),e.addSlide(b,c),b.$on("$destroy",function(){e.removeSlide(b)}),b.$watch("active",function(b){a[b?"addClass":"removeClass"](c,"active")})}}}]).animation(".item",["$animateCss",function(a){function b(a,b,c){a.removeClass(b),c&&c()}var c="uib-slideDirection";return{beforeAddClass:function(d,e,f){if("active"===e){var g=!1,h=d.data(c),i="next"===h?"left":"right",j=b.bind(this,d,i+" "+h,f);return d.addClass(h),a(d,{addClass:i}).start().done(j),function(){g=!0}}f()},beforeRemoveClass:function(d,e,f){if("active"===e){var g=!1,h=d.data(c),i="next"===h?"left":"right",j=b.bind(this,d,i,f);return a(d,{addClass:i}).start().done(j),function(){g=!0}}f()}}}]),angular.module("ui.bootstrap.dateparser",[]).service("uibDateParser",["$log","$locale","dateFilter","orderByFilter","filterFilter",function(a,b,c,d,e){function f(a){return e(s,{key:a},!0)[0]}function g(a){var b=[],c=a.split(""),e=a.indexOf("'");if(e>-1){var f=!1;a=a.split("");for(var g=e;g<a.length;g++)f?("'"===a[g]&&(g+1<a.length&&"'"===a[g+1]?(a[g+1]="$",c[g+1]=""):(c[g]="",f=!1)),a[g]="$"):"'"===a[g]&&(a[g]="$",c[g]="",f=!0);a=a.join("")}return angular.forEach(s,function(d){var e=a.indexOf(d.key);if(e>-1){a=a.split(""),c[e]="("+d.regex+")",a[e]="$";for(var f=e+1,g=e+d.key.length;g>f;f++)c[f]="",a[f]="$";a=a.join(""),b.push({index:e,key:d.key,apply:d.apply,matcher:d.regex})}}),{regex:new RegExp("^"+c.join("")+"$"),map:d(b,"index")}}function h(a){for(var b,c,d=[],e=0;e<a.length;)if(angular.isNumber(c)){if("'"===a.charAt(e))(e+1>=a.length||"'"!==a.charAt(e+1))&&(d.push(i(a,c,e)),c=null);else if(e===a.length)for(;c<a.length;)b=j(a,c),d.push(b),c=b.endIdx;e++}else"'"!==a.charAt(e)?(b=j(a,e),d.push(b.parser),e=b.endIdx):(c=e,e++);return d}function i(a,b,c){return function(){return a.substr(b+1,c-b-1)}}function j(a,b){for(var c=a.substr(b),d=0;d<s.length;d++)if(new RegExp("^"+s[d].key).test(c)){var e=s[d];return{endIdx:b+e.key.length,parser:e.formatter}}return{endIdx:b+1,parser:function(){return c.charAt(0)}}}function k(a,b,c){return!(1>c)&&(1===b&&c>28?29===c&&(a%4==0&&a%100!=0||a%400==0):3!==b&&5!==b&&8!==b&&10!==b||31>c)}function l(a){return parseInt(a,10)}function m(a,b){return a&&b?q(a,b):a}function n(a,b){return a&&b?q(a,b,!0):a}function o(a,b){a=a.replace(/:/g,"");var c=Date.parse("Jan 01, 1970 00:00:00 "+a)/6e4;return isNaN(c)?b:c}function p(a,b){return a=new Date(a.getTime()),a.setMinutes(a.getMinutes()+b),a}function q(a,b,c){c=c?-1:1;var d=a.getTimezoneOffset();return p(a,c*(o(b,d)-d))}var r,s,t=/[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g;this.init=function(){r=b.id,this.parsers={},this.formatters={},s=[{key:"yyyy",regex:"\\d{4}",apply:function(a){this.year=+a},formatter:function(a){var b=new Date;return b.setFullYear(Math.abs(a.getFullYear())),c(b,"yyyy")}},{key:"yy",regex:"\\d{2}",apply:function(a){a=+a,this.year=69>a?a+2e3:a+1900},formatter:function(a){var b=new Date;return b.setFullYear(Math.abs(a.getFullYear())),c(b,"yy")}},{key:"y",regex:"\\d{1,4}",apply:function(a){this.year=+a},formatter:function(a){var b=new Date;return b.setFullYear(Math.abs(a.getFullYear())),c(b,"y")}},{key:"M!",regex:"0?[1-9]|1[0-2]",apply:function(a){this.month=a-1},formatter:function(a){return/^[0-9]$/.test(a.getMonth())?c(a,"MM"):c(a,"M")}},{key:"MMMM",regex:b.DATETIME_FORMATS.MONTH.join("|"),apply:function(a){this.month=b.DATETIME_FORMATS.MONTH.indexOf(a)},formatter:function(a){return c(a,"MMMM")}},{key:"MMM",regex:b.DATETIME_FORMATS.SHORTMONTH.join("|"),apply:function(a){this.month=b.DATETIME_FORMATS.SHORTMONTH.indexOf(a)},formatter:function(a){return c(a,"MMM")}},{key:"MM",regex:"0[1-9]|1[0-2]",apply:function(a){this.month=a-1},formatter:function(a){return c(a,"MM")}},{key:"M",regex:"[1-9]|1[0-2]",apply:function(a){this.month=a-1},formatter:function(a){return c(a,"M")}},{key:"d!",regex:"[0-2]?[0-9]{1}|3[0-1]{1}",apply:function(a){this.date=+a},formatter:function(a){return/^[1-9]$/.test(a.getDate())?c(a,"dd"):c(a,"d")}},{key:"dd",regex:"[0-2][0-9]{1}|3[0-1]{1}",apply:function(a){this.date=+a},formatter:function(a){return c(a,"dd")}},{key:"d",regex:"[1-2]?[0-9]{1}|3[0-1]{1}",apply:function(a){this.date=+a},formatter:function(a){return c(a,"d")}},{key:"EEEE",regex:b.DATETIME_FORMATS.DAY.join("|"),formatter:function(a){return c(a,"EEEE")}},{key:"EEE",regex:b.DATETIME_FORMATS.SHORTDAY.join("|"),formatter:function(a){return c(a,"EEE")}},{key:"HH",regex:"(?:0|1)[0-9]|2[0-3]",apply:function(a){this.hours=+a},formatter:function(a){return c(a,"HH")}},{key:"hh",regex:"0[0-9]|1[0-2]",apply:function(a){this.hours=+a},formatter:function(a){return c(a,"hh")}},{key:"H",regex:"1?[0-9]|2[0-3]",apply:function(a){this.hours=+a},formatter:function(a){return c(a,"H")}},{key:"h",regex:"[0-9]|1[0-2]",apply:function(a){this.hours=+a},formatter:function(a){return c(a,"h")}},{key:"mm",regex:"[0-5][0-9]",apply:function(a){this.minutes=+a},formatter:function(a){return c(a,"mm")}},{key:"m",regex:"[0-9]|[1-5][0-9]",apply:function(a){this.minutes=+a},formatter:function(a){return c(a,"m")}},{key:"sss",regex:"[0-9][0-9][0-9]",apply:function(a){this.milliseconds=+a},formatter:function(a){return c(a,"sss")}},{key:"ss",regex:"[0-5][0-9]",apply:function(a){this.seconds=+a},formatter:function(a){return c(a,"ss")}},{key:"s",regex:"[0-9]|[1-5][0-9]",apply:function(a){this.seconds=+a},formatter:function(a){return c(a,"s")}},{key:"a",regex:b.DATETIME_FORMATS.AMPMS.join("|"),apply:function(a){12===this.hours&&(this.hours=0),"PM"===a&&(this.hours+=12)},formatter:function(a){return c(a,"a")}},{key:"Z",regex:"[+-]\\d{4}",apply:function(a){var b=a.match(/([+-])(\d{2})(\d{2})/),c=b[1],d=b[2],e=b[3];this.hours+=l(c+d),this.minutes+=l(c+e)},formatter:function(a){return c(a,"Z")}},{key:"ww",regex:"[0-4][0-9]|5[0-3]",formatter:function(a){return c(a,"ww")}},{key:"w",regex:"[0-9]|[1-4][0-9]|5[0-3]",formatter:function(a){return c(a,"w")}},{key:"GGGG",regex:b.DATETIME_FORMATS.ERANAMES.join("|").replace(/\s/g,"\\s"),formatter:function(a){return c(a,"GGGG")}},{key:"GGG",regex:b.DATETIME_FORMATS.ERAS.join("|"),formatter:function(a){return c(a,"GGG")}},{key:"GG",regex:b.DATETIME_FORMATS.ERAS.join("|"),formatter:function(a){return c(a,"GG")}},{key:"G",regex:b.DATETIME_FORMATS.ERAS.join("|"),formatter:function(a){return c(a,"G")}}],angular.version.major>=1&&angular.version.minor>4&&s.push({key:"LLLL",regex:b.DATETIME_FORMATS.STANDALONEMONTH.join("|"),apply:function(a){this.month=b.DATETIME_FORMATS.STANDALONEMONTH.indexOf(a)},formatter:function(a){return c(a,"LLLL")}})},this.init(),this.getParser=function(a){var b=f(a);return b&&b.apply||null},this.overrideParser=function(a,b){var c=f(a);c&&angular.isFunction(b)&&(this.parsers={},c.apply=b)}.bind(this),this.filter=function(a,c){return angular.isDate(a)&&!isNaN(a)&&c?(c=b.DATETIME_FORMATS[c]||c,b.id!==r&&this.init(),this.formatters[c]||(this.formatters[c]=h(c)),this.formatters[c].reduce(function(b,c){return b+c(a)},"")):""},this.parse=function(c,d,e){if(!angular.isString(c)||!d)return c;d=b.DATETIME_FORMATS[d]||d,d=d.replace(t,"\\$&"),b.id!==r&&this.init(),this.parsers[d]||(this.parsers[d]=g(d));var f=this.parsers[d],h=f.regex,i=f.map,j=c.match(h),l=!1;if(j&&j.length){var m,n;angular.isDate(e)&&!isNaN(e.getTime())?m={year:e.getFullYear(),month:e.getMonth(),date:e.getDate(),hours:e.getHours(),minutes:e.getMinutes(),seconds:e.getSeconds(),milliseconds:e.getMilliseconds()}:(e&&a.warn("dateparser:","baseDate is not a valid date"),m={year:1900,month:0,date:1,hours:0,minutes:0,seconds:0,milliseconds:0});for(var o=1,p=j.length;p>o;o++){var q=i[o-1];"Z"===q.matcher&&(l=!0),q.apply&&q.apply.call(m,j[o])}var s=l?Date.prototype.setUTCFullYear:Date.prototype.setFullYear,u=l?Date.prototype.setUTCHours:Date.prototype.setHours;return k(m.year,m.month,m.date)&&(!angular.isDate(e)||isNaN(e.getTime())||l?(n=new Date(0),s.call(n,m.year,m.month,m.date),u.call(n,m.hours||0,m.minutes||0,m.seconds||0,m.milliseconds||0)):(n=new Date(e),s.call(n,m.year,m.month,m.date),u.call(n,m.hours,m.minutes,m.seconds,m.milliseconds))),n}},this.toTimezone=m,this.fromTimezone=n,this.timezoneToOffset=o,this.addDateMinutes=p,this.convertTimezoneToLocal=q}]),angular.module("ui.bootstrap.isClass",[]).directive("uibIsClass",["$animate",function(a){var b=/^\s*([\s\S]+?)\s+on\s+([\s\S]+?)\s*$/,c=/^\s*([\s\S]+?)\s+for\s+([\s\S]+?)\s*$/;return{restrict:"A",compile:function(d,e){function f(a,b,c){i.push(a),j.push({scope:a,element:b}),o.forEach(function(b,c){g(b,a)}),a.$on("$destroy",h)}function g(b,d){var e=b.match(c),f=d.$eval(e[1]),g=e[2],h=k[b];if(!h){var i=function(b){var c=null;j.some(function(a){return a.scope.$eval(m)===b?(c=a,!0):void 0}),h.lastActivated!==c&&(h.lastActivated&&a.removeClass(h.lastActivated.element,f),c&&a.addClass(c.element,f),h.lastActivated=c)};k[b]=h={lastActivated:null,scope:d,watchFn:i,compareWithExp:g,watcher:d.$watch(g,i)}}h.watchFn(d.$eval(g))}function h(a){var b=a.targetScope,c=i.indexOf(b);if(i.splice(c,1),j.splice(c,1),i.length){var d=i[0];angular.forEach(k,function(a){a.scope===b&&(a.watcher=d.$watch(a.compareWithExp,a.watchFn),a.scope=d)})}else k={}}var i=[],j=[],k={},l=e.uibIsClass.match(b),m=l[2],n=l[1],o=n.split(",");return f}}}]),angular.module("ui.bootstrap.datepicker",["ui.bootstrap.dateparser","ui.bootstrap.isClass"]).value("$datepickerSuppressError",!1).value("$datepickerLiteralWarning",!0).constant("uibDatepickerConfig",{datepickerMode:"day",formatDay:"dd",formatMonth:"MMMM",formatYear:"yyyy",formatDayHeader:"EEE",formatDayTitle:"MMMM yyyy",formatMonthTitle:"yyyy",maxDate:null,maxMode:"year",minDate:null,minMode:"day",monthColumns:3,ngModelOptions:{},shortcutPropagation:!1,showWeeks:!0,yearColumns:5,yearRows:4}).controller("UibDatepickerController",["$scope","$element","$attrs","$parse","$interpolate","$locale","$log","dateFilter","uibDatepickerConfig","$datepickerLiteralWarning","$datepickerSuppressError","uibDateParser",function(a,b,c,d,e,f,g,h,i,j,k,l){function m(b){a.datepickerMode=b,a.datepickerOptions.datepickerMode=b}function n(b){var c;if(angular.version.minor<6)c=b.$options||a.datepickerOptions.ngModelOptions||i.ngModelOptions||{},c.getOption=function(a){return c[a]};else{var d=b.$options.getOption("timezone")||(a.datepickerOptions.ngModelOptions?a.datepickerOptions.ngModelOptions.timezone:null)||(i.ngModelOptions?i.ngModelOptions.timezone:null);c=b.$options.createChild(i.ngModelOptions).createChild(a.datepickerOptions.ngModelOptions).createChild(b.$options).createChild({timezone:d})}return c}var o=this,p={$setViewValue:angular.noop},q={},r=[];b.addClass("uib-datepicker"),c.$set("role","application"),a.datepickerOptions||(a.datepickerOptions={}),this.modes=["day","month","year"],["customClass","dateDisabled","datepickerMode","formatDay","formatDayHeader","formatDayTitle","formatMonth","formatMonthTitle","formatYear","maxDate","maxMode","minDate","minMode","monthColumns","showWeeks","shortcutPropagation","startingDay","yearColumns","yearRows"].forEach(function(b){switch(b){case"customClass":case"dateDisabled":a[b]=a.datepickerOptions[b]||angular.noop;break;case"datepickerMode":a.datepickerMode=angular.isDefined(a.datepickerOptions.datepickerMode)?a.datepickerOptions.datepickerMode:i.datepickerMode;break;case"formatDay":case"formatDayHeader":case"formatDayTitle":case"formatMonth":case"formatMonthTitle":case"formatYear":o[b]=angular.isDefined(a.datepickerOptions[b])?e(a.datepickerOptions[b])(a.$parent):i[b];break;case"monthColumns":case"showWeeks":case"shortcutPropagation":case"yearColumns":case"yearRows":o[b]=angular.isDefined(a.datepickerOptions[b])?a.datepickerOptions[b]:i[b];break;case"startingDay":angular.isDefined(a.datepickerOptions.startingDay)?o.startingDay=a.datepickerOptions.startingDay:angular.isNumber(i.startingDay)?o.startingDay=i.startingDay:o.startingDay=(f.DATETIME_FORMATS.FIRSTDAYOFWEEK+8)%7;break;case"maxDate":case"minDate":a.$watch("datepickerOptions."+b,function(a){a?angular.isDate(a)?o[b]=l.fromTimezone(new Date(a),q.getOption("timezone")):(j&&g.warn("Literal date support has been deprecated, please switch to date object usage"),o[b]=new Date(h(a,"medium"))):o[b]=i[b]?l.fromTimezone(new Date(i[b]),q.getOption("timezone")):null,o.refreshView()});break;case"maxMode":case"minMode":a.datepickerOptions[b]?a.$watch(function(){return a.datepickerOptions[b]},function(c){o[b]=a[b]=angular.isDefined(c)?c:a.datepickerOptions[b],("minMode"===b&&o.modes.indexOf(a.datepickerOptions.datepickerMode)<o.modes.indexOf(o[b])||"maxMode"===b&&o.modes.indexOf(a.datepickerOptions.datepickerMode)>o.modes.indexOf(o[b]))&&(a.datepickerMode=o[b],a.datepickerOptions.datepickerMode=o[b])}):o[b]=a[b]=i[b]||null}}),a.uniqueId="datepicker-"+a.$id+"-"+Math.floor(1e4*Math.random()),a.disabled=angular.isDefined(c.disabled)||!1,angular.isDefined(c.ngDisabled)&&r.push(a.$parent.$watch(c.ngDisabled,function(b){a.disabled=b,o.refreshView()})),a.isActive=function(b){return 0===o.compare(b.date,o.activeDate)&&(a.activeDateId=b.uid,!0)},this.init=function(b){p=b,q=n(p),a.datepickerOptions.initDate?(o.activeDate=l.fromTimezone(a.datepickerOptions.initDate,q.getOption("timezone"))||new Date,a.$watch("datepickerOptions.initDate",function(a){a&&(p.$isEmpty(p.$modelValue)||p.$invalid)&&(o.activeDate=l.fromTimezone(a,q.getOption("timezone")),o.refreshView())})):o.activeDate=new Date;var c=p.$modelValue?new Date(p.$modelValue):new Date;this.activeDate=isNaN(c)?l.fromTimezone(new Date,q.getOption("timezone")):l.fromTimezone(c,q.getOption("timezone")),p.$render=function(){o.render()}},this.render=function(){if(p.$viewValue){var a=new Date(p.$viewValue);!isNaN(a)?this.activeDate=l.fromTimezone(a,q.getOption("timezone")):k||g.error('Datepicker directive: "ng-model" value must be a Date object')}this.refreshView()},this.refreshView=function(){if(this.element){a.selectedDt=null,this._refreshView(),a.activeDt&&(a.activeDateId=a.activeDt.uid);var b=p.$viewValue?new Date(p.$viewValue):null;b=l.fromTimezone(b,q.getOption("timezone")),p.$setValidity("dateDisabled",!b||this.element&&!this.isDisabled(b))}},this.createDateObject=function(b,c){var d=p.$viewValue?new Date(p.$viewValue):null;d=l.fromTimezone(d,q.getOption("timezone"));var e=new Date;e=l.fromTimezone(e,q.getOption("timezone"));var f=this.compare(b,e),g={date:b,label:l.filter(b,c),selected:d&&0===this.compare(b,d),disabled:this.isDisabled(b),past:0>f,current:0===f,future:f>0,customClass:this.customClass(b)||null};return d&&0===this.compare(b,d)&&(a.selectedDt=g),o.activeDate&&0===this.compare(g.date,o.activeDate)&&(a.activeDt=g),g},this.isDisabled=function(b){return a.disabled||this.minDate&&this.compare(b,this.minDate)<0||this.maxDate&&this.compare(b,this.maxDate)>0||a.dateDisabled&&a.dateDisabled({date:b,mode:a.datepickerMode})},this.customClass=function(b){return a.customClass({date:b,mode:a.datepickerMode})},this.split=function(a,b){for(var c=[];a.length>0;)c.push(a.splice(0,b));return c},a.select=function(b){if(a.datepickerMode===o.minMode){var c=p.$viewValue?l.fromTimezone(new Date(p.$viewValue),q.getOption("timezone")):new Date(0,0,0,0,0,0,0);c.setFullYear(b.getFullYear(),b.getMonth(),b.getDate()),c=l.toTimezone(c,q.getOption("timezone")),p.$setViewValue(c),p.$render()}else o.activeDate=b,m(o.modes[o.modes.indexOf(a.datepickerMode)-1]),a.$emit("uib:datepicker.mode");a.$broadcast("uib:datepicker.focus")},a.move=function(a){var b=o.activeDate.getFullYear()+a*(o.step.years||0),c=o.activeDate.getMonth()+a*(o.step.months||0);o.activeDate.setFullYear(b,c,1),o.refreshView()},a.toggleMode=function(b){b=b||1,a.datepickerMode===o.maxMode&&1===b||a.datepickerMode===o.minMode&&-1===b||(m(o.modes[o.modes.indexOf(a.datepickerMode)+b]),a.$emit("uib:datepicker.mode"))},a.keys={13:"enter",32:"space",33:"pageup",34:"pagedown",35:"end",36:"home",37:"left",38:"up",39:"right",40:"down"};var s=function(){o.element[0].focus()};a.$on("uib:datepicker.focus",s),a.keydown=function(b){var c=a.keys[b.which];if(c&&!b.shiftKey&&!b.altKey&&!a.disabled)if(b.preventDefault(),o.shortcutPropagation||b.stopPropagation(),"enter"===c||"space"===c){if(o.isDisabled(o.activeDate))return;a.select(o.activeDate)}else!b.ctrlKey||"up"!==c&&"down"!==c?(o.handleKeyDown(c,b),o.refreshView()):a.toggleMode("up"===c?1:-1)},b.on("keydown",function(b){a.$apply(function(){a.keydown(b)})}),a.$on("$destroy",function(){for(;r.length;)r.shift()()})}]).controller("UibDaypickerController",["$scope","$element","dateFilter",function(a,b,c){function d(a,b){return 1!==b||a%4!=0||a%100==0&&a%400!=0?f[b]:29}function e(a){var b=new Date(a);b.setDate(b.getDate()+4-(b.getDay()||7));var c=b.getTime();return b.setMonth(0),b.setDate(1),Math.floor(Math.round((c-b)/864e5)/7)+1}var f=[31,28,31,30,31,30,31,31,30,31,30,31];this.step={months:1},this.element=b,this.init=function(b){angular.extend(b,this),a.showWeeks=b.showWeeks,b.refreshView()},this.getDates=function(a,b){for(var c,d=new Array(b),e=new Date(a),f=0;b>f;)c=new Date(e),d[f++]=c,e.setDate(e.getDate()+1);return d},this._refreshView=function(){var b=this.activeDate.getFullYear(),d=this.activeDate.getMonth(),f=new Date(this.activeDate);f.setFullYear(b,d,1);var g=this.startingDay-f.getDay(),h=g>0?7-g:-g,i=new Date(f);h>0&&i.setDate(1-h);for(var j=this.getDates(i,42),k=0;42>k;k++)j[k]=angular.extend(this.createDateObject(j[k],this.formatDay),{secondary:j[k].getMonth()!==d,uid:a.uniqueId+"-"+k});a.labels=new Array(7);for(var l=0;7>l;l++)a.labels[l]={abbr:c(j[l].date,this.formatDayHeader),full:c(j[l].date,"EEEE")};if(a.title=c(this.activeDate,this.formatDayTitle),a.rows=this.split(j,7),a.showWeeks){a.weekNumbers=[];for(var m=(11-this.startingDay)%7,n=a.rows.length,o=0;n>o;o++)a.weekNumbers.push(e(a.rows[o][m].date))}},this.compare=function(a,b){var c=new Date(a.getFullYear(),a.getMonth(),a.getDate()),d=new Date(b.getFullYear(),b.getMonth(),b.getDate());return c.setFullYear(a.getFullYear()),d.setFullYear(b.getFullYear()),c-d},this.handleKeyDown=function(a,b){var c=this.activeDate.getDate();if("left"===a)c-=1;else if("up"===a)c-=7;else if("right"===a)c+=1;else if("down"===a)c+=7;else if("pageup"===a||"pagedown"===a){var e=this.activeDate.getMonth()+("pageup"===a?-1:1);this.activeDate.setMonth(e,1),c=Math.min(d(this.activeDate.getFullYear(),this.activeDate.getMonth()),c)}else"home"===a?c=1:"end"===a&&(c=d(this.activeDate.getFullYear(),this.activeDate.getMonth()));this.activeDate.setDate(c)}}]).controller("UibMonthpickerController",["$scope","$element","dateFilter",function(a,b,c){this.step={years:1},this.element=b,this.init=function(a){angular.extend(a,this),a.refreshView()},this._refreshView=function(){for(var b,d=new Array(12),e=this.activeDate.getFullYear(),f=0;12>f;f++)b=new Date(this.activeDate),b.setFullYear(e,f,1),d[f]=angular.extend(this.createDateObject(b,this.formatMonth),{uid:a.uniqueId+"-"+f});a.title=c(this.activeDate,this.formatMonthTitle),a.rows=this.split(d,this.monthColumns),a.yearHeaderColspan=this.monthColumns>3?this.monthColumns-2:1},this.compare=function(a,b){var c=new Date(a.getFullYear(),a.getMonth()),d=new Date(b.getFullYear(),b.getMonth());return c.setFullYear(a.getFullYear()),d.setFullYear(b.getFullYear()),c-d},this.handleKeyDown=function(a,b){var c=this.activeDate.getMonth();if("left"===a)c-=1;else if("up"===a)c-=this.monthColumns;else if("right"===a)c+=1;else if("down"===a)c+=this.monthColumns;else if("pageup"===a||"pagedown"===a){var d=this.activeDate.getFullYear()+("pageup"===a?-1:1);this.activeDate.setFullYear(d)}else"home"===a?c=0:"end"===a&&(c=11);this.activeDate.setMonth(c)}}]).controller("UibYearpickerController",["$scope","$element","dateFilter",function(a,b,c){function d(a){return parseInt((a-1)/f,10)*f+1}var e,f;this.element=b,this.yearpickerInit=function(){e=this.yearColumns,f=this.yearRows*e,this.step={years:f}},this._refreshView=function(){for(var b,c=new Array(f),g=0,h=d(this.activeDate.getFullYear());f>g;g++)b=new Date(this.activeDate),b.setFullYear(h+g,0,1),c[g]=angular.extend(this.createDateObject(b,this.formatYear),{uid:a.uniqueId+"-"+g});a.title=[c[0].label,c[f-1].label].join(" - "),a.rows=this.split(c,e),a.columns=e},this.compare=function(a,b){return a.getFullYear()-b.getFullYear()},this.handleKeyDown=function(a,b){var c=this.activeDate.getFullYear();"left"===a?c-=1:"up"===a?c-=e:"right"===a?c+=1:"down"===a?c+=e:"pageup"===a||"pagedown"===a?c+=("pageup"===a?-1:1)*f:"home"===a?c=d(this.activeDate.getFullYear()):"end"===a&&(c=d(this.activeDate.getFullYear())+f-1),this.activeDate.setFullYear(c)}}]).directive("uibDatepicker",function(){return{templateUrl:function(a,b){return b.templateUrl||"uib/template/datepicker/datepicker.html"},scope:{datepickerOptions:"=?"},require:["uibDatepicker","^ngModel"],restrict:"A",controller:"UibDatepickerController",controllerAs:"datepicker",link:function(a,b,c,d){var e=d[0],f=d[1];e.init(f)}}}).directive("uibDaypicker",function(){return{templateUrl:function(a,b){return b.templateUrl||"uib/template/datepicker/day.html"},require:["^uibDatepicker","uibDaypicker"],restrict:"A",controller:"UibDaypickerController",link:function(a,b,c,d){var e=d[0];d[1].init(e)}}}).directive("uibMonthpicker",function(){return{templateUrl:function(a,b){return b.templateUrl||"uib/template/datepicker/month.html"},require:["^uibDatepicker","uibMonthpicker"],restrict:"A",controller:"UibMonthpickerController",link:function(a,b,c,d){var e=d[0];d[1].init(e)}}}).directive("uibYearpicker",function(){return{templateUrl:function(a,b){return b.templateUrl||"uib/template/datepicker/year.html"},require:["^uibDatepicker","uibYearpicker"],restrict:"A",controller:"UibYearpickerController",link:function(a,b,c,d){var e=d[0];angular.extend(e,d[1]),e.yearpickerInit(),e.refreshView()}}}),angular.module("ui.bootstrap.position",[]).factory("$uibPosition",["$document","$window",function(a,b){var c,d,e={normal:/(auto|scroll)/,hidden:/(auto|scroll|hidden)/},f={auto:/\s?auto?\s?/i,primary:/^(top|bottom|left|right)$/,secondary:/^(top|bottom|left|right|center)$/,vertical:/^(top|bottom)$/},g=/(HTML|BODY)/;return{getRawNode:function(a){return a.nodeName?a:a[0]||a},parseStyle:function(a){return a=parseFloat(a),isFinite(a)?a:0},offsetParent:function(c){c=this.getRawNode(c);for(var d=c.offsetParent||a[0].documentElement;d&&d!==a[0].documentElement&&function(a){return"static"===(b.getComputedStyle(a).position||"static")}(d);)d=d.offsetParent;return d||a[0].documentElement},scrollbarWidth:function(e){if(e){if(angular.isUndefined(d)){var f=a.find("body");f.addClass("uib-position-body-scrollbar-measure"),d=b.innerWidth-f[0].clientWidth,d=isFinite(d)?d:0,f.removeClass("uib-position-body-scrollbar-measure")}return d}if(angular.isUndefined(c)){var g=angular.element('<div class="uib-position-scrollbar-measure"></div>');a.find("body").append(g),c=g[0].offsetWidth-g[0].clientWidth,c=isFinite(c)?c:0,g.remove()}return c},scrollbarPadding:function(a){a=this.getRawNode(a);var c=b.getComputedStyle(a),d=this.parseStyle(c.paddingRight),e=this.parseStyle(c.paddingBottom),f=this.scrollParent(a,!1,!0),h=this.scrollbarWidth(g.test(f.tagName));return{scrollbarWidth:h,widthOverflow:f.scrollWidth>f.clientWidth,right:d+h,originalRight:d,heightOverflow:f.scrollHeight>f.clientHeight,bottom:e+h,originalBottom:e}},isScrollable:function(a,c){a=this.getRawNode(a);var d=c?e.hidden:e.normal,f=b.getComputedStyle(a);return d.test(f.overflow+f.overflowY+f.overflowX)},scrollParent:function(c,d,f){c=this.getRawNode(c);var g=d?e.hidden:e.normal,h=a[0].documentElement,i=b.getComputedStyle(c);if(f&&g.test(i.overflow+i.overflowY+i.overflowX))return c;var j="absolute"===i.position,k=c.parentElement||h;if(k===h||"fixed"===i.position)return h;for(;k.parentElement&&k!==h;){var l=b.getComputedStyle(k);if(j&&"static"!==l.position&&(j=!1),!j&&g.test(l.overflow+l.overflowY+l.overflowX))break;k=k.parentElement}return k},position:function(c,d){c=this.getRawNode(c);var e=this.offset(c);if(d){var f=b.getComputedStyle(c);e.top-=this.parseStyle(f.marginTop),e.left-=this.parseStyle(f.marginLeft)}var g=this.offsetParent(c),h={top:0,left:0};return g!==a[0].documentElement&&(h=this.offset(g),h.top+=g.clientTop-g.scrollTop,h.left+=g.clientLeft-g.scrollLeft),{width:Math.round(angular.isNumber(e.width)?e.width:c.offsetWidth),height:Math.round(angular.isNumber(e.height)?e.height:c.offsetHeight),top:Math.round(e.top-h.top),left:Math.round(e.left-h.left)}},offset:function(c){c=this.getRawNode(c);var d=c.getBoundingClientRect();return{width:Math.round(angular.isNumber(d.width)?d.width:c.offsetWidth),height:Math.round(angular.isNumber(d.height)?d.height:c.offsetHeight),top:Math.round(d.top+(b.pageYOffset||a[0].documentElement.scrollTop)),
left:Math.round(d.left+(b.pageXOffset||a[0].documentElement.scrollLeft))}},viewportOffset:function(c,d,e){c=this.getRawNode(c),e=!1!==e;var f=c.getBoundingClientRect(),g={top:0,left:0,bottom:0,right:0},h=d?a[0].documentElement:this.scrollParent(c),i=h.getBoundingClientRect();if(g.top=i.top+h.clientTop,g.left=i.left+h.clientLeft,h===a[0].documentElement&&(g.top+=b.pageYOffset,g.left+=b.pageXOffset),g.bottom=g.top+h.clientHeight,g.right=g.left+h.clientWidth,e){var j=b.getComputedStyle(h);g.top+=this.parseStyle(j.paddingTop),g.bottom-=this.parseStyle(j.paddingBottom),g.left+=this.parseStyle(j.paddingLeft),g.right-=this.parseStyle(j.paddingRight)}return{top:Math.round(f.top-g.top),bottom:Math.round(g.bottom-f.bottom),left:Math.round(f.left-g.left),right:Math.round(g.right-f.right)}},parsePlacement:function(a){var b=f.auto.test(a);return b&&(a=a.replace(f.auto,"")),a=a.split("-"),a[0]=a[0]||"top",f.primary.test(a[0])||(a[0]="top"),a[1]=a[1]||"center",f.secondary.test(a[1])||(a[1]="center"),a[2]=!!b,a},positionElements:function(a,c,d,e){a=this.getRawNode(a),c=this.getRawNode(c);var g=angular.isDefined(c.offsetWidth)?c.offsetWidth:c.prop("offsetWidth"),h=angular.isDefined(c.offsetHeight)?c.offsetHeight:c.prop("offsetHeight");d=this.parsePlacement(d);var i=e?this.offset(a):this.position(a),j={top:0,left:0,placement:""};if(d[2]){var k=this.viewportOffset(a,e),l=b.getComputedStyle(c),m={width:g+Math.round(Math.abs(this.parseStyle(l.marginLeft)+this.parseStyle(l.marginRight))),height:h+Math.round(Math.abs(this.parseStyle(l.marginTop)+this.parseStyle(l.marginBottom)))};if(d[0]="top"===d[0]&&m.height>k.top&&m.height<=k.bottom?"bottom":"bottom"===d[0]&&m.height>k.bottom&&m.height<=k.top?"top":"left"===d[0]&&m.width>k.left&&m.width<=k.right?"right":"right"===d[0]&&m.width>k.right&&m.width<=k.left?"left":d[0],d[1]="top"===d[1]&&m.height-i.height>k.bottom&&m.height-i.height<=k.top?"bottom":"bottom"===d[1]&&m.height-i.height>k.top&&m.height-i.height<=k.bottom?"top":"left"===d[1]&&m.width-i.width>k.right&&m.width-i.width<=k.left?"right":"right"===d[1]&&m.width-i.width>k.left&&m.width-i.width<=k.right?"left":d[1],"center"===d[1])if(f.vertical.test(d[0])){var n=i.width/2-g/2;k.left+n<0&&m.width-i.width<=k.right?d[1]="left":k.right+n<0&&m.width-i.width<=k.left&&(d[1]="right")}else{var o=i.height/2-m.height/2;k.top+o<0&&m.height-i.height<=k.bottom?d[1]="top":k.bottom+o<0&&m.height-i.height<=k.top&&(d[1]="bottom")}}switch(d[0]){case"top":j.top=i.top-h;break;case"bottom":j.top=i.top+i.height;break;case"left":j.left=i.left-g;break;case"right":j.left=i.left+i.width}switch(d[1]){case"top":j.top=i.top;break;case"bottom":j.top=i.top+i.height-h;break;case"left":j.left=i.left;break;case"right":j.left=i.left+i.width-g;break;case"center":f.vertical.test(d[0])?j.left=i.left+i.width/2-g/2:j.top=i.top+i.height/2-h/2}return j.top=Math.round(j.top),j.left=Math.round(j.left),j.placement="center"===d[1]?d[0]:d[0]+"-"+d[1],j},adjustTop:function(a,b,c,d){return-1!==a.indexOf("top")&&c!==d?{top:b.top-d+"px"}:void 0},positionArrow:function(a,c){a=this.getRawNode(a);var d=a.querySelector(".tooltip-inner, .popover-inner");if(d){var e=angular.element(d).hasClass("tooltip-inner"),g=e?a.querySelector(".tooltip-arrow"):a.querySelector(".arrow");if(g){var h={top:"",bottom:"",left:"",right:""};if(c=this.parsePlacement(c),"center"===c[1])return void angular.element(g).css(h);var i="border-"+c[0]+"-width",j=b.getComputedStyle(g)[i],k="border-";k+=f.vertical.test(c[0])?c[0]+"-"+c[1]:c[1]+"-"+c[0],k+="-radius";var l=b.getComputedStyle(e?d:a)[k];switch(c[0]){case"top":h.bottom=e?"0":"-"+j;break;case"bottom":h.top=e?"0":"-"+j;break;case"left":h.right=e?"0":"-"+j;break;case"right":h.left=e?"0":"-"+j}h[c[1]]=l,angular.element(g).css(h)}}}}}]),angular.module("ui.bootstrap.datepickerPopup",["ui.bootstrap.datepicker","ui.bootstrap.position"]).value("$datepickerPopupLiteralWarning",!0).constant("uibDatepickerPopupConfig",{altInputFormats:[],appendToBody:!1,clearText:"Clear",closeOnDateSelection:!0,closeText:"Done",currentText:"Today",datepickerPopup:"yyyy-MM-dd",datepickerPopupTemplateUrl:"uib/template/datepickerPopup/popup.html",datepickerTemplateUrl:"uib/template/datepicker/datepicker.html",html5Types:{date:"yyyy-MM-dd","datetime-local":"yyyy-MM-ddTHH:mm:ss.sss",month:"yyyy-MM"},onOpenFocus:!0,showButtonBar:!0,placement:"auto bottom-left"}).controller("UibDatepickerPopupController",["$scope","$element","$attrs","$compile","$log","$parse","$window","$document","$rootScope","$uibPosition","dateFilter","uibDateParser","uibDatepickerPopupConfig","$timeout","uibDatepickerConfig","$datepickerPopupLiteralWarning",function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){function q(b){var c=l.parse(b,x,a.date);if(isNaN(c))for(var d=0;d<J.length;d++)if(c=l.parse(b,J[d],a.date),!isNaN(c))return c;return c}function r(a){if(angular.isNumber(a)&&(a=new Date(a)),!a)return null;if(angular.isDate(a)&&!isNaN(a))return a;if(angular.isString(a)){var b=q(a);if(!isNaN(b))return l.toTimezone(b,H.getOption("timezone"))}return H.getOption("allowInvalid")?a:void 0}function s(a,b){var d=a||b;return!c.ngRequired&&!d||(angular.isNumber(d)&&(d=new Date(d)),!d||(!(!angular.isDate(d)||isNaN(d))||!!angular.isString(d)&&!isNaN(q(d))))}function t(c){if(a.isOpen||!a.disabled){var d=I[0],e=b[0].contains(c.target),f=void 0!==d.contains&&d.contains(c.target);!a.isOpen||e||f||a.$apply(function(){a.isOpen=!1})}}function u(c){27===c.which&&a.isOpen?(c.preventDefault(),c.stopPropagation(),a.$apply(function(){a.isOpen=!1}),b[0].focus()):40!==c.which||a.isOpen||(c.preventDefault(),c.stopPropagation(),a.$apply(function(){a.isOpen=!0}))}function v(){if(a.isOpen){var d=angular.element(I[0].querySelector(".uib-datepicker-popup")),e=c.popupPlacement?c.popupPlacement:m.placement,f=j.positionElements(b,d,e,z);d.css({top:f.top+"px",left:f.left+"px"}),d.hasClass("uib-position-measure")&&d.removeClass("uib-position-measure")}}function w(a){var b;return angular.version.minor<6?(b=angular.isObject(a.$options)?a.$options:{timezone:null},b.getOption=function(a){return b[a]}):b=a.$options,b}var x,y,z,A,B,C,D,E,F,G,H,I,J,K=!1,L=[];this.init=function(e){if(G=e,H=w(G),y=angular.isDefined(c.closeOnDateSelection)?a.$parent.$eval(c.closeOnDateSelection):m.closeOnDateSelection,z=angular.isDefined(c.datepickerAppendToBody)?a.$parent.$eval(c.datepickerAppendToBody):m.appendToBody,A=angular.isDefined(c.onOpenFocus)?a.$parent.$eval(c.onOpenFocus):m.onOpenFocus,B=angular.isDefined(c.datepickerPopupTemplateUrl)?c.datepickerPopupTemplateUrl:m.datepickerPopupTemplateUrl,C=angular.isDefined(c.datepickerTemplateUrl)?c.datepickerTemplateUrl:m.datepickerTemplateUrl,J=angular.isDefined(c.altInputFormats)?a.$parent.$eval(c.altInputFormats):m.altInputFormats,a.showButtonBar=angular.isDefined(c.showButtonBar)?a.$parent.$eval(c.showButtonBar):m.showButtonBar,m.html5Types[c.type]?(x=m.html5Types[c.type],K=!0):(x=c.uibDatepickerPopup||m.datepickerPopup,c.$observe("uibDatepickerPopup",function(a,b){var c=a||m.datepickerPopup;if(c!==x&&(x=c,G.$modelValue=null,!x))throw new Error("uibDatepickerPopup must have a date format specified.")})),!x)throw new Error("uibDatepickerPopup must have a date format specified.");if(K&&c.uibDatepickerPopup)throw new Error("HTML5 date input types do not support custom formats.");D=angular.element("<div uib-datepicker-popup-wrap><div uib-datepicker></div></div>"),D.attr({"ng-model":"date","ng-change":"dateSelection(date)","template-url":B}),E=angular.element(D.children()[0]),E.attr("template-url",C),a.datepickerOptions||(a.datepickerOptions={}),K&&"month"===c.type&&(a.datepickerOptions.datepickerMode="month",a.datepickerOptions.minMode="month"),E.attr("datepicker-options","datepickerOptions"),K?G.$formatters.push(function(b){return a.date=l.fromTimezone(b,H.getOption("timezone")),b}):(G.$$parserName="date",G.$validators.date=s,G.$parsers.unshift(r),G.$formatters.push(function(b){return G.$isEmpty(b)?(a.date=b,b):(angular.isNumber(b)&&(b=new Date(b)),a.date=l.fromTimezone(b,H.getOption("timezone")),l.filter(a.date,x))})),G.$viewChangeListeners.push(function(){a.date=q(G.$viewValue)}),b.on("keydown",u),I=d(D)(a),D.remove(),z?h.find("body").append(I):b.after(I),a.$on("$destroy",function(){for(!0===a.isOpen&&(i.$$phase||a.$apply(function(){a.isOpen=!1})),I.remove(),b.off("keydown",u),h.off("click",t),F&&F.off("scroll",v),angular.element(g).off("resize",v);L.length;)L.shift()()})},a.getText=function(b){return a[b+"Text"]||m[b+"Text"]},a.isDisabled=function(b){"today"===b&&(b=l.fromTimezone(new Date,H.getOption("timezone")));var c={};return angular.forEach(["minDate","maxDate"],function(b){a.datepickerOptions[b]?angular.isDate(a.datepickerOptions[b])?c[b]=new Date(a.datepickerOptions[b]):(p&&e.warn("Literal date support has been deprecated, please switch to date object usage"),c[b]=new Date(k(a.datepickerOptions[b],"medium"))):c[b]=null}),a.datepickerOptions&&c.minDate&&a.compare(b,c.minDate)<0||c.maxDate&&a.compare(b,c.maxDate)>0},a.compare=function(a,b){return new Date(a.getFullYear(),a.getMonth(),a.getDate())-new Date(b.getFullYear(),b.getMonth(),b.getDate())},a.dateSelection=function(c){a.date=c;var d=a.date?l.filter(a.date,x):null;b.val(d),G.$setViewValue(d),y&&(a.isOpen=!1,b[0].focus())},a.keydown=function(c){27===c.which&&(c.stopPropagation(),a.isOpen=!1,b[0].focus())},a.select=function(b,c){if(c.stopPropagation(),"today"===b){var d=new Date;angular.isDate(a.date)?(b=new Date(a.date),b.setFullYear(d.getFullYear(),d.getMonth(),d.getDate())):(b=l.fromTimezone(d,H.getOption("timezone")),b.setHours(0,0,0,0))}a.dateSelection(b)},a.close=function(c){c.stopPropagation(),a.isOpen=!1,b[0].focus()},a.disabled=angular.isDefined(c.disabled)||!1,c.ngDisabled&&L.push(a.$parent.$watch(f(c.ngDisabled),function(b){a.disabled=b})),a.$watch("isOpen",function(d){d?a.disabled?a.isOpen=!1:n(function(){v(),A&&a.$broadcast("uib:datepicker.focus"),h.on("click",t);var d=c.popupPlacement?c.popupPlacement:m.placement;z||j.parsePlacement(d)[2]?(F=F||angular.element(j.scrollParent(b)))&&F.on("scroll",v):F=null,angular.element(g).on("resize",v)},0,!1):(h.off("click",t),F&&F.off("scroll",v),angular.element(g).off("resize",v))}),a.$on("uib:datepicker.mode",function(){n(v,0,!1)})}]).directive("uibDatepickerPopup",function(){return{require:["ngModel","uibDatepickerPopup"],controller:"UibDatepickerPopupController",scope:{datepickerOptions:"=?",isOpen:"=?",currentText:"@",clearText:"@",closeText:"@"},link:function(a,b,c,d){var e=d[0];d[1].init(e)}}}).directive("uibDatepickerPopupWrap",function(){return{restrict:"A",transclude:!0,templateUrl:function(a,b){return b.templateUrl||"uib/template/datepickerPopup/popup.html"}}}),angular.module("ui.bootstrap.debounce",[]).factory("$$debounce",["$timeout",function(a){return function(b,c){var d;return function(){var e=this,f=Array.prototype.slice.call(arguments);d&&a.cancel(d),d=a(function(){b.apply(e,f)},c)}}}]),angular.module("ui.bootstrap.multiMap",[]).factory("$$multiMap",function(){return{createNew:function(){var a={};return{entries:function(){return Object.keys(a).map(function(b){return{key:b,value:a[b]}})},get:function(b){return a[b]},hasKey:function(b){return!!a[b]},keys:function(){return Object.keys(a)},put:function(b,c){a[b]||(a[b]=[]),a[b].push(c)},remove:function(b,c){var d=a[b];if(d){var e=d.indexOf(c);-1!==e&&d.splice(e,1),d.length||delete a[b]}}}}}}),angular.module("ui.bootstrap.dropdown",["ui.bootstrap.multiMap","ui.bootstrap.position"]).constant("uibDropdownConfig",{appendToOpenClass:"uib-dropdown-open",openClass:"open"}).service("uibDropdownService",["$document","$rootScope","$$multiMap",function(a,b,c){var d=null,e=c.createNew();this.isOnlyOpen=function(a,b){var c=e.get(b);if(c){if(c.reduce(function(b,c){return c.scope===a?c:b},{}))return 1===c.length}return!1},this.open=function(b,c,g){if(d||a.on("click",f),d&&d!==b&&(d.isOpen=!1),d=b,g){var h=e.get(g);if(h){-1===h.map(function(a){return a.scope}).indexOf(b)&&e.put(g,{scope:b})}else e.put(g,{scope:b})}},this.close=function(b,c,g){if(d===b&&(a.off("click",f),a.off("keydown",this.keybindFilter),d=null),g){var h=e.get(g);if(h){var i=h.reduce(function(a,c){return c.scope===b?c:a},{});i&&e.remove(g,i)}}};var f=function(a){if(d&&d.isOpen&&!(a&&"disabled"===d.getAutoClose()||a&&3===a.which)){var c=d.getToggleElement();if(!(a&&c&&c[0].contains(a.target))){var e=d.getDropdownElement();a&&"outsideClick"===d.getAutoClose()&&e&&e[0].contains(a.target)||(d.focusToggleElement(),d.isOpen=!1,b.$$phase||d.$apply())}}};this.keybindFilter=function(a){if(d){var b=d.getDropdownElement(),c=d.getToggleElement(),e=b&&b[0].contains(a.target),g=c&&c[0].contains(a.target);27===a.which?(a.stopPropagation(),d.focusToggleElement(),f()):d.isKeynavEnabled()&&-1!==[38,40].indexOf(a.which)&&d.isOpen&&(e||g)&&(a.preventDefault(),a.stopPropagation(),d.focusDropdownEntry(a.which))}}}]).controller("UibDropdownController",["$scope","$element","$attrs","$parse","uibDropdownConfig","uibDropdownService","$animate","$uibPosition","$document","$compile","$templateRequest",function(a,b,c,d,e,f,g,h,i,j,k){function l(){b.append(o.dropdownMenu)}var m,n,o=this,p=a.$new(),q=e.appendToOpenClass,r=e.openClass,s=angular.noop,t=c.onToggle?d(c.onToggle):angular.noop,u=!1,v=i.find("body");b.addClass("dropdown"),this.init=function(){c.isOpen&&(n=d(c.isOpen),s=n.assign,a.$watch(n,function(a){p.isOpen=!!a})),u=angular.isDefined(c.keyboardNav)},this.toggle=function(a){return p.isOpen=arguments.length?!!a:!p.isOpen,angular.isFunction(s)&&s(p,p.isOpen),p.isOpen},this.isOpen=function(){return p.isOpen},p.getToggleElement=function(){return o.toggleElement},p.getAutoClose=function(){return c.autoClose||"always"},p.getElement=function(){return b},p.isKeynavEnabled=function(){return u},p.focusDropdownEntry=function(a){var c=o.dropdownMenu?angular.element(o.dropdownMenu).find("a"):b.find("ul").eq(0).find("a");switch(a){case 40:angular.isNumber(o.selectedOption)?o.selectedOption=o.selectedOption===c.length-1?o.selectedOption:o.selectedOption+1:o.selectedOption=0;break;case 38:angular.isNumber(o.selectedOption)?o.selectedOption=0===o.selectedOption?0:o.selectedOption-1:o.selectedOption=c.length-1}c[o.selectedOption].focus()},p.getDropdownElement=function(){return o.dropdownMenu},p.focusToggleElement=function(){o.toggleElement&&o.toggleElement[0].focus()},p.$watch("isOpen",function(e,n){var u=null,w=!1;if(angular.isDefined(c.dropdownAppendTo)){var x=d(c.dropdownAppendTo)(p);x&&(u=angular.element(x))}if(angular.isDefined(c.dropdownAppendToBody)){!1!==d(c.dropdownAppendToBody)(p)&&(w=!0)}if(w&&!u&&(u=v),u&&o.dropdownMenu&&(e?(u.append(o.dropdownMenu),b.on("$destroy",l)):(b.off("$destroy",l),l())),u&&o.dropdownMenu){var y,z,A,B=h.positionElements(b,o.dropdownMenu,"bottom-left",!0),C=0;if(y={top:B.top+"px",display:e?"block":"none"},z=o.dropdownMenu.hasClass("dropdown-menu-right"),z?(y.left="auto",A=h.scrollbarPadding(u),A.heightOverflow&&A.scrollbarWidth&&(C=A.scrollbarWidth),y.right=window.innerWidth-C-(B.left+b.prop("offsetWidth"))+"px"):(y.left=B.left+"px",y.right="auto"),!w){var D=h.offset(u);y.top=B.top-D.top+"px",z?y.right=window.innerWidth-(B.left-D.left+b.prop("offsetWidth"))+"px":y.left=B.left-D.left+"px"}o.dropdownMenu.css(y)}var E=u||b,F=u?q:r,G=E.hasClass(F),H=f.isOnlyOpen(a,u);if(G===!e){var I;I=u?H?"removeClass":"addClass":e?"addClass":"removeClass",g[I](E,F).then(function(){angular.isDefined(e)&&e!==n&&t(a,{open:!!e})})}if(e)o.dropdownMenuTemplateUrl?k(o.dropdownMenuTemplateUrl).then(function(a){m=p.$new(),j(a.trim())(m,function(a){var b=a;o.dropdownMenu.replaceWith(b),o.dropdownMenu=b,i.on("keydown",f.keybindFilter)})}):i.on("keydown",f.keybindFilter),p.focusToggleElement(),f.open(p,b,u);else{if(f.close(p,b,u),o.dropdownMenuTemplateUrl){m&&m.$destroy();var J=angular.element('<ul class="dropdown-menu"></ul>');o.dropdownMenu.replaceWith(J),o.dropdownMenu=J}o.selectedOption=null}angular.isFunction(s)&&s(a,e)})}]).directive("uibDropdown",function(){return{controller:"UibDropdownController",link:function(a,b,c,d){d.init()}}}).directive("uibDropdownMenu",function(){return{restrict:"A",require:"?^uibDropdown",link:function(a,b,c,d){if(d&&!angular.isDefined(c.dropdownNested)){b.addClass("dropdown-menu");var e=c.templateUrl;e&&(d.dropdownMenuTemplateUrl=e),d.dropdownMenu||(d.dropdownMenu=b)}}}}).directive("uibDropdownToggle",function(){return{require:"?^uibDropdown",link:function(a,b,c,d){if(d){b.addClass("dropdown-toggle"),d.toggleElement=b;var e=function(e){e.preventDefault(),b.hasClass("disabled")||c.disabled||a.$apply(function(){d.toggle()})};b.on("click",e),b.attr({"aria-haspopup":!0,"aria-expanded":!1}),a.$watch(d.isOpen,function(a){b.attr("aria-expanded",!!a)}),a.$on("$destroy",function(){b.off("click",e)})}}}}),angular.module("ui.bootstrap.stackedMap",[]).factory("$$stackedMap",function(){return{createNew:function(){var a=[];return{add:function(b,c){a.push({key:b,value:c})},get:function(b){for(var c=0;c<a.length;c++)if(b===a[c].key)return a[c]},keys:function(){for(var b=[],c=0;c<a.length;c++)b.push(a[c].key);return b},top:function(){return a[a.length-1]},remove:function(b){for(var c=-1,d=0;d<a.length;d++)if(b===a[d].key){c=d;break}return a.splice(c,1)[0]},removeTop:function(){return a.pop()},length:function(){return a.length}}}}}),angular.module("ui.bootstrap.modal",["ui.bootstrap.multiMap","ui.bootstrap.stackedMap","ui.bootstrap.position"]).provider("$uibResolve",function(){var a=this;this.resolver=null,this.setResolver=function(a){this.resolver=a},this.$get=["$injector","$q",function(b,c){var d=a.resolver?b.get(a.resolver):null;return{resolve:function(a,e,f,g){if(d)return d.resolve(a,e,f,g);var h=[];return angular.forEach(a,function(a){angular.isFunction(a)||angular.isArray(a)?h.push(c.resolve(b.invoke(a))):angular.isString(a)?h.push(c.resolve(b.get(a))):h.push(c.resolve(a))}),c.all(h).then(function(b){var c={},d=0;return angular.forEach(a,function(a,e){c[e]=b[d++]}),c})}}}]}).directive("uibModalBackdrop",["$animate","$injector","$uibModalStack",function(a,b,c){function d(b,d,e){e.modalInClass&&(a.addClass(d,e.modalInClass),b.$on(c.NOW_CLOSING_EVENT,function(c,f){var g=f();b.modalOptions.animation?a.removeClass(d,e.modalInClass).then(g):g()}))}return{restrict:"A",compile:function(a,b){return a.addClass(b.backdropClass),d}}}]).directive("uibModalWindow",["$uibModalStack","$q","$animateCss","$document",function(a,b,c,d){return{scope:{index:"@"},restrict:"A",transclude:!0,templateUrl:function(a,b){return b.templateUrl||"uib/template/modal/window.html"},link:function(e,f,g){f.addClass(g.windowTopClass||""),e.size=g.size,e.close=function(b){var c=a.getTop();c&&c.value.backdrop&&"static"!==c.value.backdrop&&b.target===b.currentTarget&&(b.preventDefault(),b.stopPropagation(),a.dismiss(c.key,"backdrop click"))},f.on("click",e.close),e.$isRendered=!0;var h=b.defer();e.$$postDigest(function(){h.resolve()}),h.promise.then(function(){var h=null;g.modalInClass&&(h=c(f,{addClass:g.modalInClass}).start(),e.$on(a.NOW_CLOSING_EVENT,function(a,b){var d=b();c(f,{removeClass:g.modalInClass}).start().then(d)})),b.when(h).then(function(){var b=a.getTop();if(b&&a.modalRendered(b.key),!d[0].activeElement||!f[0].contains(d[0].activeElement)){var c=f[0].querySelector("[autofocus]");c?c.focus():f[0].focus()}})})}}}]).directive("uibModalAnimationClass",function(){return{compile:function(a,b){b.modalAnimation&&a.addClass(b.uibModalAnimationClass)}}}).directive("uibModalTransclude",["$animate",function(a){return{link:function(b,c,d,e,f){f(b.$parent,function(b){c.empty(),a.enter(b,c)})}}}]).factory("$uibModalStack",["$animate","$animateCss","$document","$compile","$rootScope","$q","$$multiMap","$$stackedMap","$uibPosition",function(a,b,c,d,e,f,g,h,i){function j(a){return a.replace(D,function(a,b){return(b?"-":"")+a.toLowerCase()})}function k(a){return!!(a.offsetWidth||a.offsetHeight||a.getClientRects().length)}function l(){for(var a=-1,b=x.keys(),c=0;c<b.length;c++)x.get(b[c]).value.backdrop&&(a=c);return a>-1&&A>a&&(a=A),a}function m(a,b){var c=x.get(a).value,d=c.appendTo;x.remove(a),B=x.top(),B&&(A=parseInt(B.value.modalDomEl.attr("index"),10)),p(c.modalDomEl,c.modalScope,function(){var b=c.openedClass||w;y.remove(b,a);var e=y.hasKey(b);d.toggleClass(b,e),!e&&v&&v.heightOverflow&&v.scrollbarWidth&&(v.originalRight?d.css({paddingRight:v.originalRight+"px"}):d.css({paddingRight:""}),v=null),n(!0)},c.closedDeferred),o(),b&&b.focus?b.focus():d.focus&&d.focus()}function n(a){var b;x.length()>0&&(b=x.top().value,b.modalDomEl.toggleClass(b.windowTopClass||"",a))}function o(){if(t&&-1===l()){var a=u;p(t,u,function(){a=null}),t=void 0,u=void 0}}function p(b,c,d,e){function g(){g.done||(g.done=!0,a.leave(b).then(function(){d&&d(),b.remove(),e&&e.resolve()}),c.$destroy())}var h,i=null,j=function(){return h||(h=f.defer(),i=h.promise),function(){h.resolve()}};return c.$broadcast(z.NOW_CLOSING_EVENT,j),f.when(i).then(g)}function q(a){if(a.isDefaultPrevented())return a;var b=x.top();if(b)switch(a.which){case 27:b.value.keyboard&&(a.preventDefault(),e.$apply(function(){z.dismiss(b.key,"escape key press")}));break;case 9:var c=z.loadFocusElementList(b),d=!1;a.shiftKey?(z.isFocusInFirstItem(a,c)||z.isModalFocused(a,b))&&(d=z.focusLastFocusableElement(c)):z.isFocusInLastItem(a,c)&&(d=z.focusFirstFocusableElement(c)),d&&(a.preventDefault(),a.stopPropagation())}}function r(a,b,c){return!a.value.modalScope.$broadcast("modal.closing",b,c).defaultPrevented}function s(){Array.prototype.forEach.call(document.querySelectorAll("["+C+"]"),function(a){var b=parseInt(a.getAttribute(C),10),c=b-1;a.setAttribute(C,c),c||(a.removeAttribute(C),a.removeAttribute("aria-hidden"))})}var t,u,v,w="modal-open",x=h.createNew(),y=g.createNew(),z={NOW_CLOSING_EVENT:"modal.stack.now-closing"},A=0,B=null,C="data-bootstrap-modal-aria-hidden-count",D=/[A-Z]/g;return e.$watch(l,function(a){u&&(u.index=a)}),c.on("keydown",q),e.$on("$destroy",function(){c.off("keydown",q)}),z.open=function(b,f){function g(a){if(a&&"BODY"!==a[0].tagName)return function(a){var b=a.parent()?a.parent().children():[];return Array.prototype.filter.call(b,function(b){return b!==a[0]})}(a).forEach(function(a){var b="true"===a.getAttribute("aria-hidden"),c=parseInt(a.getAttribute(C),10);c||(c=b?1:0),a.setAttribute(C,c+1),a.setAttribute("aria-hidden","true")}),g(a.parent())}var h=c[0].activeElement,k=f.openedClass||w;n(!1),B=x.top(),x.add(b,{deferred:f.deferred,renderDeferred:f.renderDeferred,closedDeferred:f.closedDeferred,modalScope:f.scope,backdrop:f.backdrop,keyboard:f.keyboard,openedClass:f.openedClass,windowTopClass:f.windowTopClass,animation:f.animation,appendTo:f.appendTo}),y.put(k,b);var m=f.appendTo,o=l();o>=0&&!t&&(u=e.$new(!0),u.modalOptions=f,u.index=o,t=angular.element('<div uib-modal-backdrop="modal-backdrop"></div>'),t.attr({class:"modal-backdrop","ng-style":"{'z-index': 1040 + (index && 1 || 0) + index*10}","uib-modal-animation-class":"fade","modal-in-class":"in"}),f.backdropClass&&t.addClass(f.backdropClass),f.animation&&t.attr("modal-animation","true"),d(t)(u),a.enter(t,m),i.isScrollable(m)&&(v=i.scrollbarPadding(m),v.heightOverflow&&v.scrollbarWidth&&m.css({paddingRight:v.right+"px"})));var p;f.component?(p=document.createElement(j(f.component.name)),p=angular.element(p),p.attr({resolve:"$resolve","modal-instance":"$uibModalInstance",close:"$close($value)",dismiss:"$dismiss($value)"})):p=f.content,A=B?parseInt(B.value.modalDomEl.attr("index"),10)+1:0;var q=angular.element('<div uib-modal-window="modal-window"></div>');q.attr({class:"modal","template-url":f.windowTemplateUrl,"window-top-class":f.windowTopClass,role:"dialog","aria-labelledby":f.ariaLabelledBy,"aria-describedby":f.ariaDescribedBy,size:f.size,index:A,animate:"animate","ng-style":"{'z-index': 1050 + $$topModalIndex*10, display: 'block'}",tabindex:-1,"uib-modal-animation-class":"fade","modal-in-class":"in"}).append(p),f.windowClass&&q.addClass(f.windowClass),f.animation&&q.attr("modal-animation","true"),m.addClass(k),f.scope&&(f.scope.$$topModalIndex=A),a.enter(d(q)(f.scope),m),x.top().value.modalDomEl=q,x.top().value.modalOpener=h,g(q)},z.close=function(a,b){var c=x.get(a);return s(),c&&r(c,b,!0)?(c.value.modalScope.$$uibDestructionScheduled=!0,c.value.deferred.resolve(b),m(a,c.value.modalOpener),!0):!c},z.dismiss=function(a,b){var c=x.get(a);return s(),c&&r(c,b,!1)?(c.value.modalScope.$$uibDestructionScheduled=!0,c.value.deferred.reject(b),m(a,c.value.modalOpener),!0):!c},z.dismissAll=function(a){for(var b=this.getTop();b&&this.dismiss(b.key,a);)b=this.getTop()},z.getTop=function(){return x.top()},z.modalRendered=function(a){var b=x.get(a);b&&b.value.renderDeferred.resolve()},z.focusFirstFocusableElement=function(a){return a.length>0&&(a[0].focus(),!0)},z.focusLastFocusableElement=function(a){return a.length>0&&(a[a.length-1].focus(),!0)},z.isModalFocused=function(a,b){if(a&&b){var c=b.value.modalDomEl;if(c&&c.length)return(a.target||a.srcElement)===c[0]}return!1},z.isFocusInFirstItem=function(a,b){return b.length>0&&(a.target||a.srcElement)===b[0]},z.isFocusInLastItem=function(a,b){return b.length>0&&(a.target||a.srcElement)===b[b.length-1]},z.loadFocusElementList=function(a){if(a){var b=a.value.modalDomEl;if(b&&b.length){var c=b[0].querySelectorAll("a[href], area[href], input:not([disabled]):not([tabindex='-1']), button:not([disabled]):not([tabindex='-1']),select:not([disabled]):not([tabindex='-1']), textarea:not([disabled]):not([tabindex='-1']), iframe, object, embed, *[tabindex]:not([tabindex='-1']), *[contenteditable=true]");return c?Array.prototype.filter.call(c,function(a){return k(a)}):c}}},z}]).provider("$uibModal",function(){var a={options:{animation:!0,backdrop:!0,keyboard:!0},$get:["$rootScope","$q","$document","$templateRequest","$controller","$uibResolve","$uibModalStack",function(b,c,d,e,f,g,h){function i(a){return a.template?c.when(a.template):e(angular.isFunction(a.templateUrl)?a.templateUrl():a.templateUrl)}var j={},k=null;return j.getPromiseChain=function(){return k},j.open=function(e){function j(){return q}var l=c.defer(),m=c.defer(),n=c.defer(),o=c.defer(),p={result:l.promise,opened:m.promise,closed:n.promise,rendered:o.promise,close:function(a){return h.close(p,a)},dismiss:function(a){return h.dismiss(p,a)}};if(e=angular.extend({},a.options,e),e.resolve=e.resolve||{},e.appendTo=e.appendTo||d.find("body").eq(0),!e.appendTo.length)throw new Error("appendTo element not found. Make sure that the element passed is in DOM.");if(!e.component&&!e.template&&!e.templateUrl)throw new Error("One of component or template or templateUrl options is required.");var q;q=e.component?c.when(g.resolve(e.resolve,{},null,null)):c.all([i(e),g.resolve(e.resolve,{},null,null)]);var r;return r=k=c.all([k]).then(j,j).then(function(a){function c(b,c,d,e){b.$scope=g,b.$scope.$resolve={},d?b.$scope.$uibModalInstance=p:b.$uibModalInstance=p;var f=c?a[1]:a;angular.forEach(f,function(a,c){e&&(b[c]=a),b.$scope.$resolve[c]=a})}var d=e.scope||b,g=d.$new();g.$close=p.close,g.$dismiss=p.dismiss,g.$on("$destroy",function(){g.$$uibDestructionScheduled||g.$dismiss("$uibUnscheduledDestruction")});var i,j,k={scope:g,deferred:l,renderDeferred:o,closedDeferred:n,animation:e.animation,backdrop:e.backdrop,keyboard:e.keyboard,backdropClass:e.backdropClass,windowTopClass:e.windowTopClass,windowClass:e.windowClass,windowTemplateUrl:e.windowTemplateUrl,ariaLabelledBy:e.ariaLabelledBy,ariaDescribedBy:e.ariaDescribedBy,size:e.size,openedClass:e.openedClass,appendTo:e.appendTo},q={},r={};e.component?(c(q,!1,!0,!1),q.name=e.component,k.component=q):e.controller&&(c(r,!0,!1,!0),j=f(e.controller,r,!0,e.controllerAs),e.controllerAs&&e.bindToController&&(i=j.instance,i.$close=g.$close,i.$dismiss=g.$dismiss,angular.extend(i,{$resolve:r.$scope.$resolve},d)),i=j(),angular.isFunction(i.$onInit)&&i.$onInit()),e.component||(k.content=a[0]),h.open(p,k),m.resolve(!0)},function(a){m.reject(a),l.reject(a)}).finally(function(){k===r&&(k=null)}),p},j}]};return a}),angular.module("ui.bootstrap.paging",[]).factory("uibPaging",["$parse",function(a){return{create:function(b,c,d){b.setNumPages=d.numPages?a(d.numPages).assign:angular.noop,b.ngModelCtrl={$setViewValue:angular.noop},b._watchers=[],b.init=function(a,e){b.ngModelCtrl=a,b.config=e,a.$render=function(){b.render()},d.itemsPerPage?b._watchers.push(c.$parent.$watch(d.itemsPerPage,function(a){b.itemsPerPage=parseInt(a,10),c.totalPages=b.calculateTotalPages(),b.updatePage()})):b.itemsPerPage=e.itemsPerPage,c.$watch("totalItems",function(a,d){(angular.isDefined(a)||a!==d)&&(c.totalPages=b.calculateTotalPages(),b.updatePage())})},b.calculateTotalPages=function(){var a=b.itemsPerPage<1?1:Math.ceil(c.totalItems/b.itemsPerPage);return Math.max(a||0,1)},b.render=function(){c.page=parseInt(b.ngModelCtrl.$viewValue,10)||1},c.selectPage=function(a,d){d&&d.preventDefault(),(!c.ngDisabled||!d)&&c.page!==a&&a>0&&a<=c.totalPages&&(d&&d.target&&d.target.blur(),b.ngModelCtrl.$setViewValue(a),b.ngModelCtrl.$render())},c.getText=function(a){return c[a+"Text"]||b.config[a+"Text"]},c.noPrevious=function(){return 1===c.page},c.noNext=function(){return c.page===c.totalPages},b.updatePage=function(){b.setNumPages(c.$parent,c.totalPages),c.page>c.totalPages?c.selectPage(c.totalPages):b.ngModelCtrl.$render()},c.$on("$destroy",function(){for(;b._watchers.length;)b._watchers.shift()()})}}}]),angular.module("ui.bootstrap.pager",["ui.bootstrap.paging","ui.bootstrap.tabindex"]).controller("UibPagerController",["$scope","$attrs","uibPaging","uibPagerConfig",function(a,b,c,d){a.align=angular.isDefined(b.align)?a.$parent.$eval(b.align):d.align,c.create(this,a,b)}]).constant("uibPagerConfig",{itemsPerPage:10,previousText:"« Previous",nextText:"Next »",align:!0}).directive("uibPager",["uibPagerConfig",function(a){return{scope:{totalItems:"=",previousText:"@",nextText:"@",ngDisabled:"="},require:["uibPager","?ngModel"],restrict:"A",controller:"UibPagerController",controllerAs:"pager",templateUrl:function(a,b){return b.templateUrl||"uib/template/pager/pager.html"},link:function(b,c,d,e){c.addClass("pager");var f=e[0],g=e[1];g&&f.init(g,a)}}}]),angular.module("ui.bootstrap.pagination",["ui.bootstrap.paging","ui.bootstrap.tabindex"]).controller("UibPaginationController",["$scope","$attrs","$parse","uibPaging","uibPaginationConfig",function(a,b,c,d,e){function f(a,b,c){return{number:a,text:b,active:c}}function g(a,b){var c=[],d=1,e=b,g=angular.isDefined(i)&&b>i;g&&(j?(d=Math.max(a-Math.floor(i/2),1),(e=d+i-1)>b&&(e=b,d=e-i+1)):(d=(Math.ceil(a/i)-1)*i+1,e=Math.min(d+i-1,b)));for(var h=d;e>=h;h++){var n=f(h,m(h),h===a);c.push(n)}if(g&&i>0&&(!j||k||l)){if(d>1){if(!l||d>3){var o=f(d-1,"...",!1);c.unshift(o)}if(l){if(3===d){var p=f(2,"2",!1);c.unshift(p)}var q=f(1,"1",!1);c.unshift(q)}}if(b>e){if(!l||b-2>e){var r=f(e+1,"...",!1);c.push(r)}if(l){if(e===b-2){var s=f(b-1,b-1,!1);c.push(s)}var t=f(b,b,!1);c.push(t)}}}return c}var h=this,i=angular.isDefined(b.maxSize)?a.$parent.$eval(b.maxSize):e.maxSize,j=angular.isDefined(b.rotate)?a.$parent.$eval(b.rotate):e.rotate,k=angular.isDefined(b.forceEllipses)?a.$parent.$eval(b.forceEllipses):e.forceEllipses,l=angular.isDefined(b.boundaryLinkNumbers)?a.$parent.$eval(b.boundaryLinkNumbers):e.boundaryLinkNumbers,m=angular.isDefined(b.pageLabel)?function(c){return a.$parent.$eval(b.pageLabel,{$page:c})}:angular.identity;a.boundaryLinks=angular.isDefined(b.boundaryLinks)?a.$parent.$eval(b.boundaryLinks):e.boundaryLinks,a.directionLinks=angular.isDefined(b.directionLinks)?a.$parent.$eval(b.directionLinks):e.directionLinks,b.$set("role","menu"),d.create(this,a,b),b.maxSize&&h._watchers.push(a.$parent.$watch(c(b.maxSize),function(a){i=parseInt(a,10),h.render()}));var n=this.render;this.render=function(){n(),a.page>0&&a.page<=a.totalPages&&(a.pages=g(a.page,a.totalPages))}}]).constant("uibPaginationConfig",{itemsPerPage:10,boundaryLinks:!1,boundaryLinkNumbers:!1,directionLinks:!0,firstText:"First",previousText:"Previous",nextText:"Next",lastText:"Last",rotate:!0,forceEllipses:!1
}).directive("uibPagination",["$parse","uibPaginationConfig",function(a,b){return{scope:{totalItems:"=",firstText:"@",previousText:"@",nextText:"@",lastText:"@",ngDisabled:"="},require:["uibPagination","?ngModel"],restrict:"A",controller:"UibPaginationController",controllerAs:"pagination",templateUrl:function(a,b){return b.templateUrl||"uib/template/pagination/pagination.html"},link:function(a,c,d,e){c.addClass("pagination");var f=e[0],g=e[1];g&&f.init(g,b)}}}]),angular.module("ui.bootstrap.tooltip",["ui.bootstrap.position","ui.bootstrap.stackedMap"]).provider("$uibTooltip",function(){function a(a){var b=/[A-Z]/g;return a.replace(b,function(a,b){return(b?"-":"")+a.toLowerCase()})}var b={placement:"top",placementClassPrefix:"",animation:!0,popupDelay:0,popupCloseDelay:0,useContentExp:!1},c={mouseenter:"mouseleave",click:"click",outsideClick:"outsideClick",focus:"blur",none:""},d={};this.options=function(a){angular.extend(d,a)},this.setTriggers=function(a){angular.extend(c,a)},this.$get=["$window","$compile","$timeout","$document","$uibPosition","$interpolate","$rootScope","$parse","$$stackedMap",function(e,f,g,h,i,j,k,l,m){function n(a){if(27===a.which){var b=o.top();b&&(b.value.close(),b=null)}}var o=m.createNew();return h.on("keyup",n),k.$on("$destroy",function(){h.off("keyup",n)}),function(e,k,m,n){function p(a){var b=(a||n.trigger||m).split(" ");return{show:b,hide:b.map(function(a){return c[a]||a})}}n=angular.extend({},b,d,n);var q=a(e),r=j.startSymbol(),s=j.endSymbol(),t="<div "+q+'-popup uib-title="'+r+"title"+s+'" '+(n.useContentExp?'content-exp="contentExp()" ':'content="'+r+"content"+s+'" ')+'origin-scope="origScope" class="uib-position-measure '+k+'" tooltip-animation-class="fade"uib-tooltip-classes ng-class="{ in: isOpen }" ></div>';return{compile:function(a,b){var c=f(t);return function(a,b,d,f){function j(){O.isOpen?q():m()}function m(){N&&!a.$eval(d[k+"Enable"])||(u(),x(),O.popupDelay?G||(G=g(r,O.popupDelay,!1)):r())}function q(){s(),O.popupCloseDelay?H||(H=g(t,O.popupCloseDelay,!1)):t()}function r(){return s(),u(),O.content?(v(),void O.$evalAsync(function(){O.isOpen=!0,y(!0),T()})):angular.noop}function s(){G&&(g.cancel(G),G=null),I&&(g.cancel(I),I=null)}function t(){O&&O.$evalAsync(function(){O&&(O.isOpen=!1,y(!1),O.animation?F||(F=g(w,150,!1)):w())})}function u(){H&&(g.cancel(H),H=null),F&&(g.cancel(F),F=null)}function v(){D||(E=O.$new(),D=c(E,function(a){L?h.find("body").append(a):b.after(a)}),o.add(O,{close:t}),z())}function w(){s(),u(),A(),D&&(D.remove(),D=null,J&&g.cancel(J)),o.remove(O),E&&(E.$destroy(),E=null)}function x(){O.title=d[k+"Title"],O.content=R?R(a):d[e],O.popupClass=d[k+"Class"],O.placement=angular.isDefined(d[k+"Placement"])?d[k+"Placement"]:n.placement;var b=i.parsePlacement(O.placement);K=b[1]?b[0]+"-"+b[1]:b[0];var c=parseInt(d[k+"PopupDelay"],10),f=parseInt(d[k+"PopupCloseDelay"],10);O.popupDelay=isNaN(c)?n.popupDelay:c,O.popupCloseDelay=isNaN(f)?n.popupCloseDelay:f}function y(b){Q&&angular.isFunction(Q.assign)&&Q.assign(a,b)}function z(){S.length=0,R?(S.push(a.$watch(R,function(a){O.content=a,!a&&O.isOpen&&t()})),S.push(E.$watch(function(){P||(P=!0,E.$$postDigest(function(){P=!1,O&&O.isOpen&&T()}))}))):S.push(d.$observe(e,function(a){O.content=a,!a&&O.isOpen?t():T()})),S.push(d.$observe(k+"Title",function(a){O.title=a,O.isOpen&&T()})),S.push(d.$observe(k+"Placement",function(a){O.placement=a||n.placement,O.isOpen&&T()}))}function A(){S.length&&(angular.forEach(S,function(a){a()}),S.length=0)}function B(a){O&&O.isOpen&&D&&(b[0].contains(a.target)||D[0].contains(a.target)||q())}function C(a){27===a.which&&q()}var D,E,F,G,H,I,J,K,L=!!angular.isDefined(n.appendToBody)&&n.appendToBody,M=p(void 0),N=angular.isDefined(d[k+"Enable"]),O=a.$new(!0),P=!1,Q=!!angular.isDefined(d[k+"IsOpen"])&&l(d[k+"IsOpen"]),R=!!n.useContentExp&&l(d[e]),S=[],T=function(){D&&D.html()&&(I||(I=g(function(){var a=i.positionElements(b,D,O.placement,L),c=angular.isDefined(D.offsetHeight)?D.offsetHeight:D.prop("offsetHeight"),d=L?i.offset(b):i.position(b);D.css({top:a.top+"px",left:a.left+"px"});var e=a.placement.split("-");D.hasClass(e[0])||(D.removeClass(K.split("-")[0]),D.addClass(e[0])),D.hasClass(n.placementClassPrefix+a.placement)||(D.removeClass(n.placementClassPrefix+K),D.addClass(n.placementClassPrefix+a.placement)),J=g(function(){var a=angular.isDefined(D.offsetHeight)?D.offsetHeight:D.prop("offsetHeight"),b=i.adjustTop(e,d,c,a);b&&D.css(b),J=null},0,!1),D.hasClass("uib-position-measure")?(i.positionArrow(D,a.placement),D.removeClass("uib-position-measure")):K!==a.placement&&i.positionArrow(D,a.placement),K=a.placement,I=null},0,!1)))};O.origScope=a,O.isOpen=!1,O.contentExp=function(){return O.content},d.$observe("disabled",function(a){a&&s(),a&&O.isOpen&&t()}),Q&&a.$watch(Q,function(a){O&&!a===O.isOpen&&j()});var U=function(){M.show.forEach(function(a){"outsideClick"===a?b.off("click",j):(b.off(a,m),b.off(a,j)),b.off("keypress",C)}),M.hide.forEach(function(a){"outsideClick"===a?h.off("click",B):b.off(a,q)})};!function(){var c=[],e=[],f=a.$eval(d[k+"Trigger"]);U(),angular.isObject(f)?(Object.keys(f).forEach(function(a){c.push(a),e.push(f[a])}),M={show:c,hide:e}):M=p(f),"none"!==M.show&&M.show.forEach(function(a,c){"outsideClick"===a?(b.on("click",j),h.on("click",B)):a===M.hide[c]?b.on(a,j):a&&(b.on(a,m),b.on(M.hide[c],q)),b.on("keypress",C)})}();var V=a.$eval(d[k+"Animation"]);O.animation=angular.isDefined(V)?!!V:n.animation;var W,X=k+"AppendToBody";W=X in d&&void 0===d[X]||a.$eval(d[X]),L=angular.isDefined(W)?W:L,a.$on("$destroy",function(){U(),w(),O=null})}}}}}]}).directive("uibTooltipTemplateTransclude",["$animate","$sce","$compile","$templateRequest",function(a,b,c,d){return{link:function(e,f,g){var h,i,j,k=e.$eval(g.tooltipTemplateTranscludeScope),l=0,m=function(){i&&(i.remove(),i=null),h&&(h.$destroy(),h=null),j&&(a.leave(j).then(function(){i=null}),i=j,j=null)};e.$watch(b.parseAsResourceUrl(g.uibTooltipTemplateTransclude),function(b){var g=++l;b?(d(b,!0).then(function(d){if(g===l){var e=k.$new(),i=d,n=c(i)(e,function(b){m(),a.enter(b,f)});h=e,j=n,h.$emit("$includeContentLoaded",b)}},function(){g===l&&(m(),e.$emit("$includeContentError",b))}),e.$emit("$includeContentRequested",b)):m()}),e.$on("$destroy",m)}}}]).directive("uibTooltipClasses",["$uibPosition",function(a){return{restrict:"A",link:function(b,c,d){if(b.placement){var e=a.parsePlacement(b.placement);c.addClass(e[0])}b.popupClass&&c.addClass(b.popupClass),b.animation&&c.addClass(d.tooltipAnimationClass)}}}]).directive("uibTooltipPopup",function(){return{restrict:"A",scope:{content:"@"},templateUrl:"uib/template/tooltip/tooltip-popup.html"}}).directive("uibTooltip",["$uibTooltip",function(a){return a("uibTooltip","tooltip","mouseenter")}]).directive("uibTooltipTemplatePopup",function(){return{restrict:"A",scope:{contentExp:"&",originScope:"&"},templateUrl:"uib/template/tooltip/tooltip-template-popup.html"}}).directive("uibTooltipTemplate",["$uibTooltip",function(a){return a("uibTooltipTemplate","tooltip","mouseenter",{useContentExp:!0})}]).directive("uibTooltipHtmlPopup",function(){return{restrict:"A",scope:{contentExp:"&"},templateUrl:"uib/template/tooltip/tooltip-html-popup.html"}}).directive("uibTooltipHtml",["$uibTooltip",function(a){return a("uibTooltipHtml","tooltip","mouseenter",{useContentExp:!0})}]),angular.module("ui.bootstrap.popover",["ui.bootstrap.tooltip"]).directive("uibPopoverTemplatePopup",function(){return{restrict:"A",scope:{uibTitle:"@",contentExp:"&",originScope:"&"},templateUrl:"uib/template/popover/popover-template.html"}}).directive("uibPopoverTemplate",["$uibTooltip",function(a){return a("uibPopoverTemplate","popover","click",{useContentExp:!0})}]).directive("uibPopoverHtmlPopup",function(){return{restrict:"A",scope:{contentExp:"&",uibTitle:"@"},templateUrl:"uib/template/popover/popover-html.html"}}).directive("uibPopoverHtml",["$uibTooltip",function(a){return a("uibPopoverHtml","popover","click",{useContentExp:!0})}]).directive("uibPopoverPopup",function(){return{restrict:"A",scope:{uibTitle:"@",content:"@"},templateUrl:"uib/template/popover/popover.html"}}).directive("uibPopover",["$uibTooltip",function(a){return a("uibPopover","popover","click")}]),angular.module("ui.bootstrap.progressbar",[]).constant("uibProgressConfig",{animate:!0,max:100}).controller("UibProgressController",["$scope","$attrs","uibProgressConfig",function(a,b,c){function d(){return angular.isDefined(a.maxParam)?a.maxParam:c.max}var e=this,f=angular.isDefined(b.animate)?a.$parent.$eval(b.animate):c.animate;this.bars=[],a.max=d(),this.addBar=function(a,b,c){f||b.css({transition:"none"}),this.bars.push(a),a.max=d(),a.title=c&&angular.isDefined(c.title)?c.title:"progressbar",a.$watch("value",function(b){a.recalculatePercentage()}),a.recalculatePercentage=function(){var b=e.bars.reduce(function(a,b){return b.percent=+(100*b.value/b.max).toFixed(2),a+b.percent},0);b>100&&(a.percent-=b-100)},a.$on("$destroy",function(){b=null,e.removeBar(a)})},this.removeBar=function(a){this.bars.splice(this.bars.indexOf(a),1),this.bars.forEach(function(a){a.recalculatePercentage()})},a.$watch("maxParam",function(a){e.bars.forEach(function(a){a.max=d(),a.recalculatePercentage()})})}]).directive("uibProgress",function(){return{replace:!0,transclude:!0,controller:"UibProgressController",require:"uibProgress",scope:{maxParam:"=?max"},templateUrl:"uib/template/progressbar/progress.html"}}).directive("uibBar",function(){return{replace:!0,transclude:!0,require:"^uibProgress",scope:{value:"=",type:"@"},templateUrl:"uib/template/progressbar/bar.html",link:function(a,b,c,d){d.addBar(a,b,c)}}}).directive("uibProgressbar",function(){return{replace:!0,transclude:!0,controller:"UibProgressController",scope:{value:"=",maxParam:"=?max",type:"@"},templateUrl:"uib/template/progressbar/progressbar.html",link:function(a,b,c,d){d.addBar(a,angular.element(b.children()[0]),{title:c.title})}}}),angular.module("ui.bootstrap.rating",[]).constant("uibRatingConfig",{max:5,stateOn:null,stateOff:null,enableReset:!0,titles:["one","two","three","four","five"]}).controller("UibRatingController",["$scope","$attrs","uibRatingConfig",function(a,b,c){var d={$setViewValue:angular.noop},e=this;this.init=function(e){d=e,d.$render=this.render,d.$formatters.push(function(a){return angular.isNumber(a)&&a<<0!==a&&(a=Math.round(a)),a}),this.stateOn=angular.isDefined(b.stateOn)?a.$parent.$eval(b.stateOn):c.stateOn,this.stateOff=angular.isDefined(b.stateOff)?a.$parent.$eval(b.stateOff):c.stateOff,this.enableReset=angular.isDefined(b.enableReset)?a.$parent.$eval(b.enableReset):c.enableReset;var f=angular.isDefined(b.titles)?a.$parent.$eval(b.titles):c.titles;this.titles=angular.isArray(f)&&f.length>0?f:c.titles;var g=angular.isDefined(b.ratingStates)?a.$parent.$eval(b.ratingStates):new Array(angular.isDefined(b.max)?a.$parent.$eval(b.max):c.max);a.range=this.buildTemplateObjects(g)},this.buildTemplateObjects=function(a){for(var b=0,c=a.length;c>b;b++)a[b]=angular.extend({index:b},{stateOn:this.stateOn,stateOff:this.stateOff,title:this.getTitle(b)},a[b]);return a},this.getTitle=function(a){return a>=this.titles.length?a+1:this.titles[a]},a.rate=function(b){if(!a.readonly&&b>=0&&b<=a.range.length){var c=e.enableReset&&d.$viewValue===b?0:b;d.$setViewValue(c),d.$render()}},a.enter=function(b){a.readonly||(a.value=b),a.onHover({value:b})},a.reset=function(){a.value=d.$viewValue,a.onLeave()},a.onKeydown=function(b){/(37|38|39|40)/.test(b.which)&&(b.preventDefault(),b.stopPropagation(),a.rate(a.value+(38===b.which||39===b.which?1:-1)))},this.render=function(){a.value=d.$viewValue,a.title=e.getTitle(a.value-1)}}]).directive("uibRating",function(){return{require:["uibRating","ngModel"],restrict:"A",scope:{readonly:"=?readOnly",onHover:"&",onLeave:"&"},controller:"UibRatingController",templateUrl:"uib/template/rating/rating.html",link:function(a,b,c,d){var e=d[0],f=d[1];e.init(f)}}}),angular.module("ui.bootstrap.tabs",[]).controller("UibTabsetController",["$scope",function(a){function b(a){for(var b=0;b<d.tabs.length;b++)if(d.tabs[b].index===a)return b}var c,d=this;d.tabs=[],d.select=function(a,f){if(!e){var g=b(c),h=d.tabs[g];if(h){if(h.tab.onDeselect({$event:f,$selectedIndex:a}),f&&f.isDefaultPrevented())return;h.tab.active=!1}var i=d.tabs[a];i?(i.tab.onSelect({$event:f}),i.tab.active=!0,d.active=i.index,c=i.index):!i&&angular.isDefined(c)&&(d.active=null,c=null)}},d.addTab=function(a){if(d.tabs.push({tab:a,index:a.index}),d.tabs.sort(function(a,b){return a.index>b.index?1:a.index<b.index?-1:0}),a.index===d.active||!angular.isDefined(d.active)&&1===d.tabs.length){var c=b(a.index);d.select(c)}},d.removeTab=function(a){for(var b,c=0;c<d.tabs.length;c++)if(d.tabs[c].tab===a){b=c;break}if(d.tabs[b].index===d.active){var e=b===d.tabs.length-1?b-1:b+1%d.tabs.length;d.select(e)}d.tabs.splice(b,1)},a.$watch("tabset.active",function(a){angular.isDefined(a)&&a!==c&&d.select(b(a))});var e;a.$on("$destroy",function(){e=!0})}]).directive("uibTabset",function(){return{transclude:!0,replace:!0,scope:{},bindToController:{active:"=?",type:"@"},controller:"UibTabsetController",controllerAs:"tabset",templateUrl:function(a,b){return b.templateUrl||"uib/template/tabs/tabset.html"},link:function(a,b,c){a.vertical=!!angular.isDefined(c.vertical)&&a.$parent.$eval(c.vertical),a.justified=!!angular.isDefined(c.justified)&&a.$parent.$eval(c.justified)}}}).directive("uibTab",["$parse",function(a){return{require:"^uibTabset",replace:!0,templateUrl:function(a,b){return b.templateUrl||"uib/template/tabs/tab.html"},transclude:!0,scope:{heading:"@",index:"=?",classes:"@?",onSelect:"&select",onDeselect:"&deselect"},controller:function(){},controllerAs:"tab",link:function(b,c,d,e,f){b.disabled=!1,d.disable&&b.$parent.$watch(a(d.disable),function(a){b.disabled=!!a}),angular.isUndefined(d.index)&&(e.tabs&&e.tabs.length?b.index=Math.max.apply(null,e.tabs.map(function(a){return a.index}))+1:b.index=0),angular.isUndefined(d.classes)&&(b.classes=""),b.select=function(a){if(!b.disabled){for(var c,d=0;d<e.tabs.length;d++)if(e.tabs[d].tab===b){c=d;break}e.select(c,a)}},e.addTab(b),b.$on("$destroy",function(){e.removeTab(b)}),b.$transcludeFn=f}}}]).directive("uibTabHeadingTransclude",function(){return{restrict:"A",require:"^uibTab",link:function(a,b){a.$watch("headingElement",function(a){a&&(b.html(""),b.append(a))})}}}).directive("uibTabContentTransclude",function(){function a(a){return a.tagName&&(a.hasAttribute("uib-tab-heading")||a.hasAttribute("data-uib-tab-heading")||a.hasAttribute("x-uib-tab-heading")||"uib-tab-heading"===a.tagName.toLowerCase()||"data-uib-tab-heading"===a.tagName.toLowerCase()||"x-uib-tab-heading"===a.tagName.toLowerCase()||"uib:tab-heading"===a.tagName.toLowerCase())}return{restrict:"A",require:"^uibTabset",link:function(b,c,d){var e=b.$eval(d.uibTabContentTransclude).tab;e.$transcludeFn(e.$parent,function(b){angular.forEach(b,function(b){a(b)?e.headingElement=b:c.append(b)})})}}}),angular.module("ui.bootstrap.timepicker",[]).constant("uibTimepickerConfig",{hourStep:1,minuteStep:1,secondStep:1,showMeridian:!0,showSeconds:!1,meridians:null,readonlyInput:!1,mousewheel:!0,arrowkeys:!0,showSpinners:!0,templateUrl:"uib/template/timepicker/timepicker.html"}).controller("UibTimepickerController",["$scope","$element","$attrs","$parse","$log","$locale","uibTimepickerConfig",function(a,b,c,d,e,f,g){function h(){var b=+a.hours;return(a.showMeridian?b>0&&13>b:b>=0&&24>b)&&""!==a.hours?(a.showMeridian&&(12===b&&(b=0),a.meridian===y[1]&&(b+=12)),b):void 0}function i(){var b=+a.minutes;return b>=0&&60>b&&""!==a.minutes?b:void 0}function j(){var b=+a.seconds;return b>=0&&60>b?b:void 0}function k(a,b){return null===a?"":angular.isDefined(a)&&a.toString().length<2&&!b?"0"+a:a.toString()}function l(a){m(),x.$setViewValue(new Date(v)),n(a)}function m(){s&&s.$setValidity("hours",!0),t&&t.$setValidity("minutes",!0),u&&u.$setValidity("seconds",!0),x.$setValidity("time",!0),a.invalidHours=!1,a.invalidMinutes=!1,a.invalidSeconds=!1}function n(b){if(x.$modelValue){var c=v.getHours(),d=v.getMinutes(),e=v.getSeconds();a.showMeridian&&(c=0===c||12===c?12:c%12),a.hours="h"===b?c:k(c,!z),"m"!==b&&(a.minutes=k(d)),a.meridian=v.getHours()<12?y[0]:y[1],"s"!==b&&(a.seconds=k(e)),a.meridian=v.getHours()<12?y[0]:y[1]}else a.hours=null,a.minutes=null,a.seconds=null,a.meridian=y[0]}function o(a){v=q(v,a),l()}function p(a,b){return q(a,60*b)}function q(a,b){var c=new Date(a.getTime()+1e3*b),d=new Date(a);return d.setHours(c.getHours(),c.getMinutes(),c.getSeconds()),d}function r(){return(null===a.hours||""===a.hours)&&(null===a.minutes||""===a.minutes)&&(!a.showSeconds||a.showSeconds&&(null===a.seconds||""===a.seconds))}var s,t,u,v=new Date,w=[],x={$setViewValue:angular.noop},y=angular.isDefined(c.meridians)?a.$parent.$eval(c.meridians):g.meridians||f.DATETIME_FORMATS.AMPMS,z=!angular.isDefined(c.padHours)||a.$parent.$eval(c.padHours);a.tabindex=angular.isDefined(c.tabindex)?c.tabindex:0,b.removeAttr("tabindex"),this.init=function(b,d){x=b,x.$render=this.render,x.$formatters.unshift(function(a){return a?new Date(a):null});var e=d.eq(0),f=d.eq(1),h=d.eq(2);s=e.controller("ngModel"),t=f.controller("ngModel"),u=h.controller("ngModel"),(angular.isDefined(c.mousewheel)?a.$parent.$eval(c.mousewheel):g.mousewheel)&&this.setupMousewheelEvents(e,f,h),(angular.isDefined(c.arrowkeys)?a.$parent.$eval(c.arrowkeys):g.arrowkeys)&&this.setupArrowkeyEvents(e,f,h),a.readonlyInput=angular.isDefined(c.readonlyInput)?a.$parent.$eval(c.readonlyInput):g.readonlyInput,this.setupInputEvents(e,f,h)};var A=g.hourStep;c.hourStep&&w.push(a.$parent.$watch(d(c.hourStep),function(a){A=+a}));var B=g.minuteStep;c.minuteStep&&w.push(a.$parent.$watch(d(c.minuteStep),function(a){B=+a}));var C;w.push(a.$parent.$watch(d(c.min),function(a){var b=new Date(a);C=isNaN(b)?void 0:b}));var D;w.push(a.$parent.$watch(d(c.max),function(a){var b=new Date(a);D=isNaN(b)?void 0:b}));var E=!1;c.ngDisabled&&w.push(a.$parent.$watch(d(c.ngDisabled),function(a){E=a})),a.noIncrementHours=function(){var a=p(v,60*A);return E||a>D||v>a&&C>a},a.noDecrementHours=function(){var a=p(v,60*-A);return E||C>a||a>v&&a>D},a.noIncrementMinutes=function(){var a=p(v,B);return E||a>D||v>a&&C>a},a.noDecrementMinutes=function(){var a=p(v,-B);return E||C>a||a>v&&a>D},a.noIncrementSeconds=function(){var a=q(v,F);return E||a>D||v>a&&C>a},a.noDecrementSeconds=function(){var a=q(v,-F);return E||C>a||a>v&&a>D},a.noToggleMeridian=function(){return v.getHours()<12?E||p(v,720)>D:E||p(v,-720)<C};var F=g.secondStep;c.secondStep&&w.push(a.$parent.$watch(d(c.secondStep),function(a){F=+a})),a.showSeconds=g.showSeconds,c.showSeconds&&w.push(a.$parent.$watch(d(c.showSeconds),function(b){a.showSeconds=!!b})),a.showMeridian=g.showMeridian,c.showMeridian&&w.push(a.$parent.$watch(d(c.showMeridian),function(b){if(a.showMeridian=!!b,x.$error.time){var c=h(),d=i();angular.isDefined(c)&&angular.isDefined(d)&&(v.setHours(c),l())}else n()})),this.setupMousewheelEvents=function(b,c,d){var e=function(a){a.originalEvent&&(a=a.originalEvent);var b=a.wheelDelta?a.wheelDelta:-a.deltaY;return a.detail||b>0};b.on("mousewheel wheel",function(b){E||a.$apply(e(b)?a.incrementHours():a.decrementHours()),b.preventDefault()}),c.on("mousewheel wheel",function(b){E||a.$apply(e(b)?a.incrementMinutes():a.decrementMinutes()),b.preventDefault()}),d.on("mousewheel wheel",function(b){E||a.$apply(e(b)?a.incrementSeconds():a.decrementSeconds()),b.preventDefault()})},this.setupArrowkeyEvents=function(b,c,d){b.on("keydown",function(b){E||(38===b.which?(b.preventDefault(),a.incrementHours(),a.$apply()):40===b.which&&(b.preventDefault(),a.decrementHours(),a.$apply()))}),c.on("keydown",function(b){E||(38===b.which?(b.preventDefault(),a.incrementMinutes(),a.$apply()):40===b.which&&(b.preventDefault(),a.decrementMinutes(),a.$apply()))}),d.on("keydown",function(b){E||(38===b.which?(b.preventDefault(),a.incrementSeconds(),a.$apply()):40===b.which&&(b.preventDefault(),a.decrementSeconds(),a.$apply()))})},this.setupInputEvents=function(b,c,d){if(a.readonlyInput)return a.updateHours=angular.noop,a.updateMinutes=angular.noop,void(a.updateSeconds=angular.noop);var e=function(b,c,d){x.$setViewValue(null),x.$setValidity("time",!1),angular.isDefined(b)&&(a.invalidHours=b,s&&s.$setValidity("hours",!1)),angular.isDefined(c)&&(a.invalidMinutes=c,t&&t.$setValidity("minutes",!1)),angular.isDefined(d)&&(a.invalidSeconds=d,u&&u.$setValidity("seconds",!1))};a.updateHours=function(){var a=h(),b=i();x.$setDirty(),angular.isDefined(a)&&angular.isDefined(b)?(v.setHours(a),v.setMinutes(b),C>v||v>D?e(!0):l("h")):e(!0)},b.on("blur",function(b){x.$setTouched(),r()?m():null===a.hours||""===a.hours?e(!0):!a.invalidHours&&a.hours<10&&a.$apply(function(){a.hours=k(a.hours,!z)})}),a.updateMinutes=function(){var a=i(),b=h();x.$setDirty(),angular.isDefined(a)&&angular.isDefined(b)?(v.setHours(b),v.setMinutes(a),C>v||v>D?e(void 0,!0):l("m")):e(void 0,!0)},c.on("blur",function(b){x.$setTouched(),r()?m():null===a.minutes?e(void 0,!0):!a.invalidMinutes&&a.minutes<10&&a.$apply(function(){a.minutes=k(a.minutes)})}),a.updateSeconds=function(){var a=j();x.$setDirty(),angular.isDefined(a)?(v.setSeconds(a),l("s")):e(void 0,void 0,!0)},d.on("blur",function(b){r()?m():!a.invalidSeconds&&a.seconds<10&&a.$apply(function(){a.seconds=k(a.seconds)})})},this.render=function(){var b=x.$viewValue;isNaN(b)?(x.$setValidity("time",!1),e.error('Timepicker directive: "ng-model" value must be a Date object, a number of milliseconds since 01.01.1970 or a string representing an RFC2822 or ISO 8601 date.')):(b&&(v=b),C>v||v>D?(x.$setValidity("time",!1),a.invalidHours=!0,a.invalidMinutes=!0):m(),n())},a.showSpinners=angular.isDefined(c.showSpinners)?a.$parent.$eval(c.showSpinners):g.showSpinners,a.incrementHours=function(){a.noIncrementHours()||o(60*A*60)},a.decrementHours=function(){a.noDecrementHours()||o(60*-A*60)},a.incrementMinutes=function(){a.noIncrementMinutes()||o(60*B)},a.decrementMinutes=function(){a.noDecrementMinutes()||o(60*-B)},a.incrementSeconds=function(){a.noIncrementSeconds()||o(F)},a.decrementSeconds=function(){a.noDecrementSeconds()||o(-F)},a.toggleMeridian=function(){var b=i(),c=h();a.noToggleMeridian()||(angular.isDefined(b)&&angular.isDefined(c)?o(720*(v.getHours()<12?60:-60)):a.meridian=a.meridian===y[0]?y[1]:y[0])},a.blur=function(){x.$setTouched()},a.$on("$destroy",function(){for(;w.length;)w.shift()()})}]).directive("uibTimepicker",["uibTimepickerConfig",function(a){return{require:["uibTimepicker","?^ngModel"],restrict:"A",controller:"UibTimepickerController",controllerAs:"timepicker",scope:{},templateUrl:function(b,c){return c.templateUrl||a.templateUrl},link:function(a,b,c,d){var e=d[0],f=d[1];f&&e.init(f,b.find("input"))}}}]),angular.module("ui.bootstrap.typeahead",["ui.bootstrap.debounce","ui.bootstrap.position"]).factory("uibTypeaheadParser",["$parse",function(a){var b=/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w\d]*))\s+in\s+([\s\S]+?)$/;return{parse:function(c){var d=c.match(b);if(!d)throw new Error('Expected typeahead specification in form of "_modelValue_ (as _label_)? for _item_ in _collection_" but got "'+c+'".');return{itemName:d[3],source:a(d[4]),viewMapper:a(d[2]||d[1]),modelMapper:a(d[1])}}}}]).controller("UibTypeaheadController",["$scope","$element","$attrs","$compile","$parse","$q","$timeout","$document","$window","$rootScope","$$debounce","$uibPosition","uibTypeaheadParser",function(a,b,c,d,e,f,g,h,i,j,k,l,m){function n(){O.moveInProgress||(O.moveInProgress=!0,O.$digest()),Z()}function o(){O.position=E?l.offset(b):l.position(b),O.position.top+=b.prop("offsetHeight")}function p(a){var b;return angular.version.minor<6?(b=a.$options||{},b.getOption=function(a){return b[a]}):b=a.$options,b}var q,r,s=[9,13,27,38,40],t=a.$eval(c.typeaheadMinLength);t||0===t||(t=1),a.$watch(c.typeaheadMinLength,function(a){t=a||0===a?a:1});var u=a.$eval(c.typeaheadWaitMs)||0,v=!1!==a.$eval(c.typeaheadEditable);a.$watch(c.typeaheadEditable,function(a){v=!1!==a});var w,x,y=e(c.typeaheadLoading).assign||angular.noop,z=c.typeaheadShouldSelect?e(c.typeaheadShouldSelect):function(a,b){var c=b.$event;return 13===c.which||9===c.which},A=e(c.typeaheadOnSelect),B=!!angular.isDefined(c.typeaheadSelectOnBlur)&&a.$eval(c.typeaheadSelectOnBlur),C=e(c.typeaheadNoResults).assign||angular.noop,D=c.typeaheadInputFormatter?e(c.typeaheadInputFormatter):void 0,E=!!c.typeaheadAppendToBody&&a.$eval(c.typeaheadAppendToBody),F=c.typeaheadAppendTo?a.$eval(c.typeaheadAppendTo):null,G=!1!==a.$eval(c.typeaheadFocusFirst),H=!!c.typeaheadSelectOnExact&&a.$eval(c.typeaheadSelectOnExact),I=e(c.typeaheadIsOpen).assign||angular.noop,J=a.$eval(c.typeaheadShowHint)||!1,K=e(c.ngModel),L=e(c.ngModel+"($$$p)"),M=function(b,c){return angular.isFunction(K(a))&&r.getOption("getterSetter")?L(b,{$$$p:c}):K.assign(b,c)},N=m.parse(c.uibTypeahead),O=a.$new(),P=a.$on("$destroy",function(){O.$destroy()});O.$on("$destroy",P);var Q="typeahead-"+O.$id+"-"+Math.floor(1e4*Math.random());b.attr({"aria-autocomplete":"list","aria-expanded":!1,"aria-owns":Q});var R,S;J&&(R=angular.element("<div></div>"),R.css("position","relative"),b.after(R),S=b.clone(),S.attr("placeholder",""),S.attr("tabindex","-1"),S.val(""),S.css({position:"absolute",top:"0px",left:"0px","border-color":"transparent","box-shadow":"none",opacity:1,background:"none 0% 0% / auto repeat scroll padding-box border-box rgb(255, 255, 255)",color:"#999"}),b.css({position:"relative","vertical-align":"top","background-color":"transparent"}),S.attr("id")&&S.removeAttr("id"),R.append(S),S.after(b));var T=angular.element("<div uib-typeahead-popup></div>");T.attr({id:Q,matches:"matches",active:"activeIdx",select:"select(activeIdx, evt)","move-in-progress":"moveInProgress",query:"query",position:"position","assign-is-open":"assignIsOpen(isOpen)",debounce:"debounceUpdate"}),angular.isDefined(c.typeaheadTemplateUrl)&&T.attr("template-url",c.typeaheadTemplateUrl),angular.isDefined(c.typeaheadPopupTemplateUrl)&&T.attr("popup-template-url",c.typeaheadPopupTemplateUrl);var U=function(){J&&S.val("")},V=function(){O.matches=[],O.activeIdx=-1,b.attr("aria-expanded",!1),U()},W=function(a){return Q+"-option-"+a};O.$watch("activeIdx",function(a){0>a?b.removeAttr("aria-activedescendant"):b.attr("aria-activedescendant",W(a))});var X=function(a,b){return!!(O.matches.length>b&&a)&&a.toUpperCase()===O.matches[b].label.toUpperCase()},Y=function(c,d){var e={$viewValue:c};y(a,!0),C(a,!1),f.when(N.source(a,e)).then(function(f){var g=c===q.$viewValue;if(g&&w)if(f&&f.length>0){O.activeIdx=G?0:-1,C(a,!1),O.matches.length=0;for(var h=0;h<f.length;h++)e[N.itemName]=f[h],O.matches.push({id:W(h),label:N.viewMapper(O,e),model:f[h]});if(O.query=c,o(),b.attr("aria-expanded",!0),H&&1===O.matches.length&&X(c,0)&&(angular.isNumber(O.debounceUpdate)||angular.isObject(O.debounceUpdate)?k(function(){O.select(0,d)},angular.isNumber(O.debounceUpdate)?O.debounceUpdate:O.debounceUpdate.default):O.select(0,d)),J){var i=O.matches[0].label;angular.isString(c)&&c.length>0&&i.slice(0,c.length).toUpperCase()===c.toUpperCase()?S.val(c+i.slice(c.length)):S.val("")}}else V(),C(a,!0);g&&y(a,!1)},function(){V(),y(a,!1),C(a,!0)})};E&&(angular.element(i).on("resize",n),h.find("body").on("scroll",n));var Z=k(function(){O.matches.length&&o(),O.moveInProgress=!1},200);O.moveInProgress=!1,O.query=void 0;var $,_=function(a){$=g(function(){Y(a)},u)},aa=function(){$&&g.cancel($)};V(),O.assignIsOpen=function(b){I(a,b)},O.select=function(d,e){var f,h,i={};x=!0,i[N.itemName]=h=O.matches[d].model,f=N.modelMapper(a,i),M(a,f),q.$setValidity("editable",!0),q.$setValidity("parse",!0),A(a,{$item:h,$model:f,$label:N.viewMapper(a,i),$event:e}),V(),!1!==O.$eval(c.typeaheadFocusOnSelect)&&g(function(){b[0].focus()},0,!1)},b.on("keydown",function(b){if(0!==O.matches.length&&-1!==s.indexOf(b.which)){var c=z(a,{$event:b});if(-1===O.activeIdx&&c||9===b.which&&b.shiftKey)return V(),void O.$digest();b.preventDefault();var d;switch(b.which){case 27:b.stopPropagation(),V(),a.$digest();break;case 38:O.activeIdx=(O.activeIdx>0?O.activeIdx:O.matches.length)-1,O.$digest(),d=T[0].querySelectorAll(".uib-typeahead-match")[O.activeIdx],d.parentNode.scrollTop=d.offsetTop;break;case 40:O.activeIdx=(O.activeIdx+1)%O.matches.length,O.$digest(),d=T[0].querySelectorAll(".uib-typeahead-match")[O.activeIdx],d.parentNode.scrollTop=d.offsetTop;break;default:c&&O.$apply(function(){angular.isNumber(O.debounceUpdate)||angular.isObject(O.debounceUpdate)?k(function(){O.select(O.activeIdx,b)},angular.isNumber(O.debounceUpdate)?O.debounceUpdate:O.debounceUpdate.default):O.select(O.activeIdx,b)})}}}),b.on("focus",function(a){w=!0,0!==t||q.$viewValue||g(function(){Y(q.$viewValue,a)},0)}),b.on("blur",function(a){B&&O.matches.length&&-1!==O.activeIdx&&!x&&(x=!0,O.$apply(function(){angular.isObject(O.debounceUpdate)&&angular.isNumber(O.debounceUpdate.blur)?k(function(){O.select(O.activeIdx,a)},O.debounceUpdate.blur):O.select(O.activeIdx,a)})),!v&&q.$error.editable&&(q.$setViewValue(),O.$apply(function(){q.$setValidity("editable",!0),q.$setValidity("parse",!0)}),b.val("")),w=!1,x=!1});var ba=function(c){b[0]!==c.target&&3!==c.which&&0!==O.matches.length&&(V(),j.$$phase||a.$digest())};h.on("click",ba),a.$on("$destroy",function(){h.off("click",ba),(E||F)&&ca.remove(),E&&(angular.element(i).off("resize",n),h.find("body").off("scroll",n)),T.remove(),J&&R.remove()});var ca=d(T)(O);E?h.find("body").append(ca):F?angular.element(F).eq(0).append(ca):b.after(ca),this.init=function(b){q=b,r=p(q),O.debounceUpdate=e(r.getOption("debounce"))(a),q.$parsers.unshift(function(b){return w=!0,0===t||b&&b.length>=t?u>0?(aa(),_(b)):Y(b):(y(a,!1),aa(),V()),v?b:b?void q.$setValidity("editable",!1):(q.$setValidity("editable",!0),null)}),q.$formatters.push(function(b){var c,d,e={};return v||q.$setValidity("editable",!0),D?(e.$model=b,D(a,e)):(e[N.itemName]=b,c=N.viewMapper(a,e),e[N.itemName]=void 0,d=N.viewMapper(a,e),c!==d?c:b)})}}]).directive("uibTypeahead",function(){return{controller:"UibTypeaheadController",require:["ngModel","uibTypeahead"],link:function(a,b,c,d){d[1].init(d[0])}}}).directive("uibTypeaheadPopup",["$$debounce",function(a){return{scope:{matches:"=",query:"=",active:"=",position:"&",moveInProgress:"=",select:"&",assignIsOpen:"&",debounce:"&"},replace:!0,templateUrl:function(a,b){return b.popupTemplateUrl||"uib/template/typeahead/typeahead-popup.html"},link:function(b,c,d){b.templateUrl=d.templateUrl,b.isOpen=function(){var a=b.matches.length>0;return b.assignIsOpen({isOpen:a}),a},b.isActive=function(a){return b.active===a},b.selectActive=function(a){b.active=a},b.selectMatch=function(c,d){var e=b.debounce();angular.isNumber(e)||angular.isObject(e)?a(function(){b.select({activeIdx:c,evt:d})},angular.isNumber(e)?e:e.default):b.select({activeIdx:c,evt:d})}}}}]).directive("uibTypeaheadMatch",["$templateRequest","$compile","$parse",function(a,b,c){return{scope:{index:"=",match:"=",query:"="},link:function(d,e,f){var g=c(f.templateUrl)(d.$parent)||"uib/template/typeahead/typeahead-match.html";a(g).then(function(a){var c=angular.element(a.trim());e.replaceWith(c),b(c)(d)})}}}]).filter("uibTypeaheadHighlight",["$sce","$injector","$log",function(a,b,c){function d(a){return a.replace(/([.?*+^$[\]\\(){}|-])/g,"\\$1")}function e(a){return/<.*>/g.test(a)}var f;return f=b.has("$sanitize"),function(b,g){return!f&&e(b)&&c.warn("Unsafe use of typeahead please use ngSanitize"),b=g?(""+b).replace(new RegExp(d(g),"gi"),"<strong>$&</strong>"):b,f||(b=a.trustAsHtml(b)),b}}]),angular.module("uib/template/accordion/accordion-group.html",[]).run(["$templateCache",function(a){
a.put("uib/template/accordion/accordion-group.html",'<div role="tab" id="{{::headingId}}" aria-selected="{{isOpen}}" class="panel-heading" ng-keypress="toggleOpen($event)">\n  <h4 class="panel-title">\n    <a role="button" data-toggle="collapse" href aria-expanded="{{isOpen}}" aria-controls="{{::panelId}}" tabindex="0" class="accordion-toggle" ng-click="toggleOpen()" uib-accordion-transclude="heading" ng-disabled="isDisabled" uib-tabindex-toggle><span uib-accordion-header ng-class="{\'text-muted\': isDisabled}">{{heading}}</span></a>\n  </h4>\n</div>\n<div id="{{::panelId}}" aria-labelledby="{{::headingId}}" aria-hidden="{{!isOpen}}" role="tabpanel" class="panel-collapse collapse" uib-collapse="!isOpen">\n  <div class="panel-body" ng-transclude></div>\n</div>\n')}]),angular.module("uib/template/accordion/accordion.html",[]).run(["$templateCache",function(a){a.put("uib/template/accordion/accordion.html",'<div role="tablist" class="panel-group" ng-transclude></div>')}]),angular.module("uib/template/alert/alert.html",[]).run(["$templateCache",function(a){a.put("uib/template/alert/alert.html",'<button ng-show="closeable" type="button" class="close" ng-click="close({$event: $event})">\n  <span aria-hidden="true">&times;</span>\n  <span class="sr-only">Close</span>\n</button>\n<div ng-transclude></div>\n')}]),angular.module("uib/template/carousel/carousel.html",[]).run(["$templateCache",function(a){a.put("uib/template/carousel/carousel.html",'<div class="carousel-inner" ng-transclude></div>\n<a role="button" href class="left carousel-control" ng-click="prev()" ng-class="{ disabled: isPrevDisabled() }" ng-show="slides.length > 1">\n  <span aria-hidden="true" class="glyphicon glyphicon-chevron-left"></span>\n  <span class="sr-only">previous</span>\n</a>\n<a role="button" href class="right carousel-control" ng-click="next()" ng-class="{ disabled: isNextDisabled() }" ng-show="slides.length > 1">\n  <span aria-hidden="true" class="glyphicon glyphicon-chevron-right"></span>\n  <span class="sr-only">next</span>\n</a>\n<ol class="carousel-indicators" ng-show="slides.length > 1">\n  <li ng-repeat="slide in slides | orderBy:indexOfSlide track by $index" ng-class="{ active: isActive(slide) }" ng-click="select(slide)">\n    <span class="sr-only">slide {{ $index + 1 }} of {{ slides.length }}<span ng-if="isActive(slide)">, currently active</span></span>\n  </li>\n</ol>\n')}]),angular.module("uib/template/carousel/slide.html",[]).run(["$templateCache",function(a){a.put("uib/template/carousel/slide.html",'<div class="text-center" ng-transclude></div>\n')}]),angular.module("uib/template/datepicker/datepicker.html",[]).run(["$templateCache",function(a){a.put("uib/template/datepicker/datepicker.html",'<div ng-switch="datepickerMode">\n  <div uib-daypicker ng-switch-when="day" tabindex="0" class="uib-daypicker"></div>\n  <div uib-monthpicker ng-switch-when="month" tabindex="0" class="uib-monthpicker"></div>\n  <div uib-yearpicker ng-switch-when="year" tabindex="0" class="uib-yearpicker"></div>\n</div>\n')}]),angular.module("uib/template/datepicker/day.html",[]).run(["$templateCache",function(a){a.put("uib/template/datepicker/day.html",'<table role="grid" aria-labelledby="{{::uniqueId}}-title" aria-activedescendant="{{activeDateId}}">\n  <thead>\n    <tr>\n      <th><button type="button" class="btn btn-default btn-sm pull-left uib-left" ng-click="move(-1)" tabindex="-1"><i aria-hidden="true" class="glyphicon glyphicon-chevron-left"></i><span class="sr-only">previous</span></button></th>\n      <th colspan="{{::5 + showWeeks}}"><button id="{{::uniqueId}}-title" role="heading" aria-live="assertive" aria-atomic="true" type="button" class="btn btn-default btn-sm uib-title" ng-click="toggleMode()" ng-disabled="datepickerMode === maxMode" tabindex="-1"><strong>{{title}}</strong></button></th>\n      <th><button type="button" class="btn btn-default btn-sm pull-right uib-right" ng-click="move(1)" tabindex="-1"><i aria-hidden="true" class="glyphicon glyphicon-chevron-right"></i><span class="sr-only">next</span></button></th>\n    </tr>\n    <tr>\n      <th ng-if="showWeeks" class="text-center"></th>\n      <th ng-repeat="label in ::labels track by $index" class="text-center"><small aria-label="{{::label.full}}">{{::label.abbr}}</small></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr class="uib-weeks" ng-repeat="row in rows track by $index" role="row">\n      <td ng-if="showWeeks" class="text-center h6"><em>{{ weekNumbers[$index] }}</em></td>\n      <td ng-repeat="dt in row" class="uib-day text-center" role="gridcell"\n        id="{{::dt.uid}}"\n        ng-class="::dt.customClass">\n        <button type="button" class="btn btn-default btn-sm"\n          uib-is-class="\n            \'btn-info\' for selectedDt,\n            \'active\' for activeDt\n            on dt"\n          ng-click="select(dt.date)"\n          ng-disabled="::dt.disabled"\n          tabindex="-1"><span ng-class="::{\'text-muted\': dt.secondary, \'text-info\': dt.current}">{{::dt.label}}</span></button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n')}]),angular.module("uib/template/datepicker/month.html",[]).run(["$templateCache",function(a){a.put("uib/template/datepicker/month.html",'<table role="grid" aria-labelledby="{{::uniqueId}}-title" aria-activedescendant="{{activeDateId}}">\n  <thead>\n    <tr>\n      <th><button type="button" class="btn btn-default btn-sm pull-left uib-left" ng-click="move(-1)" tabindex="-1"><i aria-hidden="true" class="glyphicon glyphicon-chevron-left"></i><span class="sr-only">previous</span></button></th>\n      <th colspan="{{::yearHeaderColspan}}"><button id="{{::uniqueId}}-title" role="heading" aria-live="assertive" aria-atomic="true" type="button" class="btn btn-default btn-sm uib-title" ng-click="toggleMode()" ng-disabled="datepickerMode === maxMode" tabindex="-1"><strong>{{title}}</strong></button></th>\n      <th><button type="button" class="btn btn-default btn-sm pull-right uib-right" ng-click="move(1)" tabindex="-1"><i aria-hidden="true" class="glyphicon glyphicon-chevron-right"></i><span class="sr-only">next</span></i></button></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr class="uib-months" ng-repeat="row in rows track by $index" role="row">\n      <td ng-repeat="dt in row" class="uib-month text-center" role="gridcell"\n        id="{{::dt.uid}}"\n        ng-class="::dt.customClass">\n        <button type="button" class="btn btn-default"\n          uib-is-class="\n            \'btn-info\' for selectedDt,\n            \'active\' for activeDt\n            on dt"\n          ng-click="select(dt.date)"\n          ng-disabled="::dt.disabled"\n          tabindex="-1"><span ng-class="::{\'text-info\': dt.current}">{{::dt.label}}</span></button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n')}]),angular.module("uib/template/datepicker/year.html",[]).run(["$templateCache",function(a){a.put("uib/template/datepicker/year.html",'<table role="grid" aria-labelledby="{{::uniqueId}}-title" aria-activedescendant="{{activeDateId}}">\n  <thead>\n    <tr>\n      <th><button type="button" class="btn btn-default btn-sm pull-left uib-left" ng-click="move(-1)" tabindex="-1"><i aria-hidden="true" class="glyphicon glyphicon-chevron-left"></i><span class="sr-only">previous</span></button></th>\n      <th colspan="{{::columns - 2}}"><button id="{{::uniqueId}}-title" role="heading" aria-live="assertive" aria-atomic="true" type="button" class="btn btn-default btn-sm uib-title" ng-click="toggleMode()" ng-disabled="datepickerMode === maxMode" tabindex="-1"><strong>{{title}}</strong></button></th>\n      <th><button type="button" class="btn btn-default btn-sm pull-right uib-right" ng-click="move(1)" tabindex="-1"><i aria-hidden="true" class="glyphicon glyphicon-chevron-right"></i><span class="sr-only">next</span></button></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr class="uib-years" ng-repeat="row in rows track by $index" role="row">\n      <td ng-repeat="dt in row" class="uib-year text-center" role="gridcell"\n        id="{{::dt.uid}}"\n        ng-class="::dt.customClass">\n        <button type="button" class="btn btn-default"\n          uib-is-class="\n            \'btn-info\' for selectedDt,\n            \'active\' for activeDt\n            on dt"\n          ng-click="select(dt.date)"\n          ng-disabled="::dt.disabled"\n          tabindex="-1"><span ng-class="::{\'text-info\': dt.current}">{{::dt.label}}</span></button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n')}]),angular.module("uib/template/datepickerPopup/popup.html",[]).run(["$templateCache",function(a){a.put("uib/template/datepickerPopup/popup.html",'<ul role="presentation" class="uib-datepicker-popup dropdown-menu uib-position-measure" dropdown-nested ng-if="isOpen" ng-keydown="keydown($event)" ng-click="$event.stopPropagation()">\n  <li ng-transclude></li>\n  <li ng-if="showButtonBar" class="uib-button-bar">\n    <span class="btn-group pull-left">\n      <button type="button" class="btn btn-sm btn-info uib-datepicker-current" ng-click="select(\'today\', $event)" ng-disabled="isDisabled(\'today\')">{{ getText(\'current\') }}</button>\n      <button type="button" class="btn btn-sm btn-danger uib-clear" ng-click="select(null, $event)">{{ getText(\'clear\') }}</button>\n    </span>\n    <button type="button" class="btn btn-sm btn-success pull-right uib-close" ng-click="close($event)">{{ getText(\'close\') }}</button>\n  </li>\n</ul>\n')}]),angular.module("uib/template/modal/window.html",[]).run(["$templateCache",function(a){a.put("uib/template/modal/window.html","<div class=\"modal-dialog {{size ? 'modal-' + size : ''}}\"><div class=\"modal-content\" uib-modal-transclude></div></div>\n")}]),angular.module("uib/template/pager/pager.html",[]).run(["$templateCache",function(a){a.put("uib/template/pager/pager.html",'<li ng-class="{disabled: noPrevious()||ngDisabled, previous: align}"><a href ng-click="selectPage(page - 1, $event)" ng-disabled="noPrevious()||ngDisabled" uib-tabindex-toggle>{{::getText(\'previous\')}}</a></li>\n<li ng-class="{disabled: noNext()||ngDisabled, next: align}"><a href ng-click="selectPage(page + 1, $event)" ng-disabled="noNext()||ngDisabled" uib-tabindex-toggle>{{::getText(\'next\')}}</a></li>\n')}]),angular.module("uib/template/pagination/pagination.html",[]).run(["$templateCache",function(a){a.put("uib/template/pagination/pagination.html",'<li role="menuitem" ng-if="::boundaryLinks" ng-class="{disabled: noPrevious()||ngDisabled}" class="pagination-first"><a href ng-click="selectPage(1, $event)" ng-disabled="noPrevious()||ngDisabled" uib-tabindex-toggle>{{::getText(\'first\')}}</a></li>\n<li role="menuitem" ng-if="::directionLinks" ng-class="{disabled: noPrevious()||ngDisabled}" class="pagination-prev"><a href ng-click="selectPage(page - 1, $event)" ng-disabled="noPrevious()||ngDisabled" uib-tabindex-toggle>{{::getText(\'previous\')}}</a></li>\n<li role="menuitem" ng-repeat="page in pages track by $index" ng-class="{active: page.active,disabled: ngDisabled&&!page.active}" class="pagination-page"><a href ng-click="selectPage(page.number, $event)" ng-disabled="ngDisabled&&!page.active" uib-tabindex-toggle>{{page.text}}</a></li>\n<li role="menuitem" ng-if="::directionLinks" ng-class="{disabled: noNext()||ngDisabled}" class="pagination-next"><a href ng-click="selectPage(page + 1, $event)" ng-disabled="noNext()||ngDisabled" uib-tabindex-toggle>{{::getText(\'next\')}}</a></li>\n<li role="menuitem" ng-if="::boundaryLinks" ng-class="{disabled: noNext()||ngDisabled}" class="pagination-last"><a href ng-click="selectPage(totalPages, $event)" ng-disabled="noNext()||ngDisabled" uib-tabindex-toggle>{{::getText(\'last\')}}</a></li>\n')}]),angular.module("uib/template/tooltip/tooltip-html-popup.html",[]).run(["$templateCache",function(a){a.put("uib/template/tooltip/tooltip-html-popup.html",'<div class="tooltip-arrow"></div>\n<div class="tooltip-inner" ng-bind-html="contentExp()"></div>\n')}]),angular.module("uib/template/tooltip/tooltip-popup.html",[]).run(["$templateCache",function(a){a.put("uib/template/tooltip/tooltip-popup.html",'<div class="tooltip-arrow"></div>\n<div class="tooltip-inner" ng-bind="content"></div>\n')}]),angular.module("uib/template/tooltip/tooltip-template-popup.html",[]).run(["$templateCache",function(a){a.put("uib/template/tooltip/tooltip-template-popup.html",'<div class="tooltip-arrow"></div>\n<div class="tooltip-inner"\n  uib-tooltip-template-transclude="contentExp()"\n  tooltip-template-transclude-scope="originScope()"></div>\n')}]),angular.module("uib/template/popover/popover-html.html",[]).run(["$templateCache",function(a){a.put("uib/template/popover/popover-html.html",'<div class="arrow"></div>\n\n<div class="popover-inner">\n    <h3 class="popover-title" ng-bind="uibTitle" ng-if="uibTitle"></h3>\n    <div class="popover-content" ng-bind-html="contentExp()"></div>\n</div>\n')}]),angular.module("uib/template/popover/popover-template.html",[]).run(["$templateCache",function(a){a.put("uib/template/popover/popover-template.html",'<div class="arrow"></div>\n\n<div class="popover-inner">\n    <h3 class="popover-title" ng-bind="uibTitle" ng-if="uibTitle"></h3>\n    <div class="popover-content"\n      uib-tooltip-template-transclude="contentExp()"\n      tooltip-template-transclude-scope="originScope()"></div>\n</div>\n')}]),angular.module("uib/template/popover/popover.html",[]).run(["$templateCache",function(a){a.put("uib/template/popover/popover.html",'<div class="arrow"></div>\n\n<div class="popover-inner">\n    <h3 class="popover-title" ng-bind="uibTitle" ng-if="uibTitle"></h3>\n    <div class="popover-content" ng-bind="content"></div>\n</div>\n')}]),angular.module("uib/template/progressbar/bar.html",[]).run(["$templateCache",function(a){a.put("uib/template/progressbar/bar.html",'<div class="progress-bar" ng-class="type && \'progress-bar-\' + type" role="progressbar" aria-valuenow="{{value}}" aria-valuemin="0" aria-valuemax="{{max}}" ng-style="{width: (percent < 100 ? percent : 100) + \'%\'}" aria-valuetext="{{percent | number:0}}%" aria-labelledby="{{::title}}" ng-transclude></div>\n')}]),angular.module("uib/template/progressbar/progress.html",[]).run(["$templateCache",function(a){a.put("uib/template/progressbar/progress.html",'<div class="progress" ng-transclude aria-labelledby="{{::title}}"></div>')}]),angular.module("uib/template/progressbar/progressbar.html",[]).run(["$templateCache",function(a){a.put("uib/template/progressbar/progressbar.html",'<div class="progress">\n  <div class="progress-bar" ng-class="type && \'progress-bar-\' + type" role="progressbar" aria-valuenow="{{value}}" aria-valuemin="0" aria-valuemax="{{max}}" ng-style="{width: (percent < 100 ? percent : 100) + \'%\'}" aria-valuetext="{{percent | number:0}}%" aria-labelledby="{{::title}}" ng-transclude></div>\n</div>\n')}]),angular.module("uib/template/rating/rating.html",[]).run(["$templateCache",function(a){a.put("uib/template/rating/rating.html",'<span ng-mouseleave="reset()" ng-keydown="onKeydown($event)" tabindex="0" role="slider" aria-valuemin="0" aria-valuemax="{{range.length}}" aria-valuenow="{{value}}" aria-valuetext="{{title}}">\n    <span ng-repeat-start="r in range track by $index" class="sr-only">({{ $index < value ? \'*\' : \' \' }})</span>\n    <i ng-repeat-end ng-mouseenter="enter($index + 1)" ng-click="rate($index + 1)" class="glyphicon" ng-class="$index < value && (r.stateOn || \'glyphicon-star\') || (r.stateOff || \'glyphicon-star-empty\')" ng-attr-title="{{r.title}}"></i>\n</span>\n')}]),angular.module("uib/template/tabs/tab.html",[]).run(["$templateCache",function(a){a.put("uib/template/tabs/tab.html",'<li ng-class="[{active: active, disabled: disabled}, classes]" class="uib-tab nav-item">\n  <a href ng-click="select($event)" class="nav-link" uib-tab-heading-transclude>{{heading}}</a>\n</li>\n')}]),angular.module("uib/template/tabs/tabset.html",[]).run(["$templateCache",function(a){a.put("uib/template/tabs/tabset.html",'<div>\n  <ul class="nav nav-{{tabset.type || \'tabs\'}}" ng-class="{\'nav-stacked\': vertical, \'nav-justified\': justified}" ng-transclude></ul>\n  <div class="tab-content">\n    <div class="tab-pane"\n         ng-repeat="tab in tabset.tabs"\n         ng-class="{active: tabset.active === tab.index}"\n         uib-tab-content-transclude="tab">\n    </div>\n  </div>\n</div>\n')}]),angular.module("uib/template/timepicker/timepicker.html",[]).run(["$templateCache",function(a){a.put("uib/template/timepicker/timepicker.html",'<table class="uib-timepicker">\n  <tbody>\n    <tr class="text-center" ng-show="::showSpinners">\n      <td class="uib-increment hours"><a ng-click="incrementHours()" ng-class="{disabled: noIncrementHours()}" class="btn btn-link" ng-disabled="noIncrementHours()" tabindex="-1"><span class="glyphicon glyphicon-chevron-up"></span></a></td>\n      <td>&nbsp;</td>\n      <td class="uib-increment minutes"><a ng-click="incrementMinutes()" ng-class="{disabled: noIncrementMinutes()}" class="btn btn-link" ng-disabled="noIncrementMinutes()" tabindex="-1"><span class="glyphicon glyphicon-chevron-up"></span></a></td>\n      <td ng-show="showSeconds">&nbsp;</td>\n      <td ng-show="showSeconds" class="uib-increment seconds"><a ng-click="incrementSeconds()" ng-class="{disabled: noIncrementSeconds()}" class="btn btn-link" ng-disabled="noIncrementSeconds()" tabindex="-1"><span class="glyphicon glyphicon-chevron-up"></span></a></td>\n      <td ng-show="showMeridian"></td>\n    </tr>\n    <tr>\n      <td class="form-group uib-time hours" ng-class="{\'has-error\': invalidHours}">\n        <input type="text" placeholder="HH" ng-model="hours" ng-change="updateHours()" class="form-control text-center" ng-readonly="::readonlyInput" maxlength="2" tabindex="{{::tabindex}}" ng-disabled="noIncrementHours()" ng-blur="blur()">\n      </td>\n      <td class="uib-separator">:</td>\n      <td class="form-group uib-time minutes" ng-class="{\'has-error\': invalidMinutes}">\n        <input type="text" placeholder="MM" ng-model="minutes" ng-change="updateMinutes()" class="form-control text-center" ng-readonly="::readonlyInput" maxlength="2" tabindex="{{::tabindex}}" ng-disabled="noIncrementMinutes()" ng-blur="blur()">\n      </td>\n      <td ng-show="showSeconds" class="uib-separator">:</td>\n      <td class="form-group uib-time seconds" ng-class="{\'has-error\': invalidSeconds}" ng-show="showSeconds">\n        <input type="text" placeholder="SS" ng-model="seconds" ng-change="updateSeconds()" class="form-control text-center" ng-readonly="readonlyInput" maxlength="2" tabindex="{{::tabindex}}" ng-disabled="noIncrementSeconds()" ng-blur="blur()">\n      </td>\n      <td ng-show="showMeridian" class="uib-time am-pm"><button type="button" ng-class="{disabled: noToggleMeridian()}" class="btn btn-default text-center" ng-click="toggleMeridian()" ng-disabled="noToggleMeridian()" tabindex="{{::tabindex}}">{{meridian}}</button></td>\n    </tr>\n    <tr class="text-center" ng-show="::showSpinners">\n      <td class="uib-decrement hours"><a ng-click="decrementHours()" ng-class="{disabled: noDecrementHours()}" class="btn btn-link" ng-disabled="noDecrementHours()" tabindex="-1"><span class="glyphicon glyphicon-chevron-down"></span></a></td>\n      <td>&nbsp;</td>\n      <td class="uib-decrement minutes"><a ng-click="decrementMinutes()" ng-class="{disabled: noDecrementMinutes()}" class="btn btn-link" ng-disabled="noDecrementMinutes()" tabindex="-1"><span class="glyphicon glyphicon-chevron-down"></span></a></td>\n      <td ng-show="showSeconds">&nbsp;</td>\n      <td ng-show="showSeconds" class="uib-decrement seconds"><a ng-click="decrementSeconds()" ng-class="{disabled: noDecrementSeconds()}" class="btn btn-link" ng-disabled="noDecrementSeconds()" tabindex="-1"><span class="glyphicon glyphicon-chevron-down"></span></a></td>\n      <td ng-show="showMeridian"></td>\n    </tr>\n  </tbody>\n</table>\n')}]),angular.module("uib/template/typeahead/typeahead-match.html",[]).run(["$templateCache",function(a){a.put("uib/template/typeahead/typeahead-match.html",'<a href\n   tabindex="-1"\n   ng-bind-html="match.label | uibTypeaheadHighlight:query"\n   ng-attr-title="{{match.label}}"></a>\n')}]),angular.module("uib/template/typeahead/typeahead-popup.html",[]).run(["$templateCache",function(a){a.put("uib/template/typeahead/typeahead-popup.html",'<ul class="dropdown-menu" ng-show="isOpen() && !moveInProgress" ng-style="{top: position().top+\'px\', left: position().left+\'px\'}" role="listbox" aria-hidden="{{!isOpen()}}">\n    <li class="uib-typeahead-match" ng-repeat="match in matches track by $index" ng-class="{active: isActive($index) }" ng-mouseenter="selectActive($index)" ng-click="selectMatch($index, $event)" role="option" id="{{::match.id}}">\n        <div uib-typeahead-match index="$index" match="match" query="query" template-url="templateUrl"></div>\n    </li>\n</ul>\n')}]),angular.module("ui.bootstrap.carousel").run(function(){!angular.$$csp().noInlineStyle&&!angular.$$uibCarouselCss&&angular.element(document).find("head").prepend('<style type="text/css">.ng-animate.item:not(.left):not(.right){-webkit-transition:0s ease-in-out left;transition:0s ease-in-out left}</style>'),angular.$$uibCarouselCss=!0}),angular.module("ui.bootstrap.datepicker").run(function(){!angular.$$csp().noInlineStyle&&!angular.$$uibDatepickerCss&&angular.element(document).find("head").prepend('<style type="text/css">.uib-datepicker .uib-title{width:100%;}.uib-day button,.uib-month button,.uib-year button{min-width:100%;}.uib-left,.uib-right{width:100%}</style>'),angular.$$uibDatepickerCss=!0}),angular.module("ui.bootstrap.position").run(function(){!angular.$$csp().noInlineStyle&&!angular.$$uibPositionCss&&angular.element(document).find("head").prepend('<style type="text/css">.uib-position-measure{display:block !important;visibility:hidden !important;position:absolute !important;top:-9999px !important;left:-9999px !important;}.uib-position-scrollbar-measure{position:absolute !important;top:-9999px !important;width:50px !important;height:50px !important;overflow:scroll !important;}.uib-position-body-scrollbar-measure{overflow:scroll !important;}</style>'),angular.$$uibPositionCss=!0}),angular.module("ui.bootstrap.datepickerPopup").run(function(){!angular.$$csp().noInlineStyle&&!angular.$$uibDatepickerpopupCss&&angular.element(document).find("head").prepend('<style type="text/css">.uib-datepicker-popup.dropdown-menu{display:block;float:none;margin:0;}.uib-button-bar{padding:10px 9px 2px;}</style>'),angular.$$uibDatepickerpopupCss=!0}),angular.module("ui.bootstrap.tooltip").run(function(){!angular.$$csp().noInlineStyle&&!angular.$$uibTooltipCss&&angular.element(document).find("head").prepend('<style type="text/css">[uib-tooltip-popup].tooltip.top-left > .tooltip-arrow,[uib-tooltip-popup].tooltip.top-right > .tooltip-arrow,[uib-tooltip-popup].tooltip.bottom-left > .tooltip-arrow,[uib-tooltip-popup].tooltip.bottom-right > .tooltip-arrow,[uib-tooltip-popup].tooltip.left-top > .tooltip-arrow,[uib-tooltip-popup].tooltip.left-bottom > .tooltip-arrow,[uib-tooltip-popup].tooltip.right-top > .tooltip-arrow,[uib-tooltip-popup].tooltip.right-bottom > .tooltip-arrow,[uib-tooltip-html-popup].tooltip.top-left > .tooltip-arrow,[uib-tooltip-html-popup].tooltip.top-right > .tooltip-arrow,[uib-tooltip-html-popup].tooltip.bottom-left > .tooltip-arrow,[uib-tooltip-html-popup].tooltip.bottom-right > .tooltip-arrow,[uib-tooltip-html-popup].tooltip.left-top > .tooltip-arrow,[uib-tooltip-html-popup].tooltip.left-bottom > .tooltip-arrow,[uib-tooltip-html-popup].tooltip.right-top > .tooltip-arrow,[uib-tooltip-html-popup].tooltip.right-bottom > .tooltip-arrow,[uib-tooltip-template-popup].tooltip.top-left > .tooltip-arrow,[uib-tooltip-template-popup].tooltip.top-right > .tooltip-arrow,[uib-tooltip-template-popup].tooltip.bottom-left > .tooltip-arrow,[uib-tooltip-template-popup].tooltip.bottom-right > .tooltip-arrow,[uib-tooltip-template-popup].tooltip.left-top > .tooltip-arrow,[uib-tooltip-template-popup].tooltip.left-bottom > .tooltip-arrow,[uib-tooltip-template-popup].tooltip.right-top > .tooltip-arrow,[uib-tooltip-template-popup].tooltip.right-bottom > .tooltip-arrow,[uib-popover-popup].popover.top-left > .arrow,[uib-popover-popup].popover.top-right > .arrow,[uib-popover-popup].popover.bottom-left > .arrow,[uib-popover-popup].popover.bottom-right > .arrow,[uib-popover-popup].popover.left-top > .arrow,[uib-popover-popup].popover.left-bottom > .arrow,[uib-popover-popup].popover.right-top > .arrow,[uib-popover-popup].popover.right-bottom > .arrow,[uib-popover-html-popup].popover.top-left > .arrow,[uib-popover-html-popup].popover.top-right > .arrow,[uib-popover-html-popup].popover.bottom-left > .arrow,[uib-popover-html-popup].popover.bottom-right > .arrow,[uib-popover-html-popup].popover.left-top > .arrow,[uib-popover-html-popup].popover.left-bottom > .arrow,[uib-popover-html-popup].popover.right-top > .arrow,[uib-popover-html-popup].popover.right-bottom > .arrow,[uib-popover-template-popup].popover.top-left > .arrow,[uib-popover-template-popup].popover.top-right > .arrow,[uib-popover-template-popup].popover.bottom-left > .arrow,[uib-popover-template-popup].popover.bottom-right > .arrow,[uib-popover-template-popup].popover.left-top > .arrow,[uib-popover-template-popup].popover.left-bottom > .arrow,[uib-popover-template-popup].popover.right-top > .arrow,[uib-popover-template-popup].popover.right-bottom > .arrow{top:auto;bottom:auto;left:auto;right:auto;margin:0;}[uib-popover-popup].popover,[uib-popover-html-popup].popover,[uib-popover-template-popup].popover{display:block !important;}</style>'),angular.$$uibTooltipCss=!0}),angular.module("ui.bootstrap.timepicker").run(function(){!angular.$$csp().noInlineStyle&&!angular.$$uibTimepickerCss&&angular.element(document).find("head").prepend('<style type="text/css">.uib-time input{width:50px;}</style>'),angular.$$uibTimepickerCss=!0}),angular.module("ui.bootstrap.typeahead").run(function(){!angular.$$csp().noInlineStyle&&!angular.$$uibTypeaheadCss&&angular.element(document).find("head").prepend('<style type="text/css">[uib-typeahead-popup].dropdown-menu{display:block;}</style>'),angular.$$uibTypeaheadCss=!0}),function(){"use strict";function a(a,b,c){return{restrict:"A",link:function(d,e,f){c(function(){function g(a){var g,h,k,l,m,n;if(!angular.element(e).hasClass("ng-hide")&&a&&a.target){for(h=a.target;h;h=h.parentNode){if(h===e[0])return;if(l=h.id,m=h.className,n=j.length,m&&void 0!==m.baseVal&&(m=m.baseVal),m||l)for(g=0;g<n;g++)if(k=new RegExp("\\b"+j[g]+"\\b"),void 0!==l&&l===j[g]||m&&k.test(m))return}c(function(){(i=b(f.clickOutside))(d,{event:a})})}}function h(){return"ontouchstart"in window||navigator.maxTouchPoints}var i,j=void 0!==f.outsideIfNot?f.outsideIfNot.split(/[ ,]+/):[];h()&&a.on("touchstart",g),a.on("click",g),d.$on("$destroy",function(){h()&&a.off("touchstart",g),a.off("click",g)})})}}}angular.module("angular-click-outside",[]).directive("clickOutside",["$document","$parse","$timeout",a])}(),function(){angular.module("restangular",[]).provider("Restangular",function(){var a={};a.init=function(a,b){function c(a,b,c,d){var e={};return _.each(_.keys(d),function(f){var g=d[f];g.params=_.extend({},g.params,a.defaultRequestParams[g.method.toLowerCase()]),_.isEmpty(g.params)&&delete g.params,e[f]=a.isSafe(g.method)?function(){return b(_.extend(g,{url:c}))}:function(a){return b(_.extend(g,{url:c,data:a}))}}),e}a.configuration=b;var d=["get","head","options","trace","getlist"];b.isSafe=function(a){return _.contains(d,a.toLowerCase())};var e=/^https?:\/\//i;b.isAbsoluteUrl=function(a){return _.isUndefined(b.absoluteUrl)||_.isNull(b.absoluteUrl)?a&&e.test(a):b.absoluteUrl},b.absoluteUrl=!_.isUndefined(b.absoluteUrl),a.setSelfLinkAbsoluteUrl=function(a){b.absoluteUrl=a},b.baseUrl=_.isUndefined(b.baseUrl)?"":b.baseUrl,a.setBaseUrl=function(a){return b.baseUrl=/\/$/.test(a)?a.substring(0,a.length-1):a,this},b.extraFields=b.extraFields||[],a.setExtraFields=function(a){return b.extraFields=a,this},b.defaultHttpFields=b.defaultHttpFields||{},a.setDefaultHttpFields=function(a){return b.defaultHttpFields=a,this},b.withHttpValues=function(a,c){return _.defaults(c,a,b.defaultHttpFields)},b.encodeIds=!!_.isUndefined(b.encodeIds)||b.encodeIds,a.setEncodeIds=function(a){b.encodeIds=a},b.defaultRequestParams=b.defaultRequestParams||{get:{},post:{},put:{},remove:{},common:{}},a.setDefaultRequestParams=function(a,c){var d=[],e=c||a;return _.isUndefined(c)?d.push("common"):_.isArray(a)?d=a:d.push(a),_.each(d,function(a){b.defaultRequestParams[a]=e}),this},a.requestParams=b.defaultRequestParams,b.defaultHeaders=b.defaultHeaders||{},a.setDefaultHeaders=function(c){return b.defaultHeaders=c,a.defaultHeaders=b.defaultHeaders,this},a.defaultHeaders=b.defaultHeaders,b.methodOverriders=b.methodOverriders||[],a.setMethodOverriders=function(a){var c=_.extend([],a);return b.isOverridenMethod("delete",c)&&c.push("remove"),b.methodOverriders=c,this},b.jsonp=!_.isUndefined(b.jsonp)&&b.jsonp,a.setJsonp=function(a){b.jsonp=a},b.isOverridenMethod=function(a,c){var d=c||b.methodOverriders;return!_.isUndefined(_.find(d,function(b){return b.toLowerCase()===a.toLowerCase()}))},b.urlCreator=b.urlCreator||"path",a.setUrlCreator=function(a){if(!_.has(b.urlCreatorFactory,a))throw new Error("URL Path selected isn't valid");return b.urlCreator=a,this},b.restangularFields=b.restangularFields||{id:"id",route:"route",parentResource:"parentResource",restangularCollection:"restangularCollection",cannonicalId:"__cannonicalId",etag:"restangularEtag",selfLink:"href",get:"get",getList:"getList",put:"put",post:"post",remove:"remove",head:"head",trace:"trace",options:"options",patch:"patch",getRestangularUrl:"getRestangularUrl",getRequestedUrl:"getRequestedUrl",putElement:"putElement",addRestangularMethod:"addRestangularMethod",getParentList:"getParentList",clone:"clone",ids:"ids",httpConfig:"_$httpConfig",reqParams:"reqParams",one:"one",all:"all",several:"several",oneUrl:"oneUrl",allUrl:"allUrl",customPUT:"customPUT",customPOST:"customPOST",customDELETE:"customDELETE",customGET:"customGET",customGETLIST:"customGETLIST",customOperation:"customOperation",doPUT:"doPUT",doPOST:"doPOST",doDELETE:"doDELETE",doGET:"doGET",doGETLIST:"doGETLIST",fromServer:"$fromServer",withConfig:"withConfig",withHttpConfig:"withHttpConfig"},a.setRestangularFields=function(a){return b.restangularFields=_.extend(b.restangularFields,a),this},b.isRestangularized=function(a){return!!a[b.restangularFields.one]||!!a[b.restangularFields.all]},b.setFieldToElem=function(a,b,c){var d=a.split("."),e=b;return _.each(_.initial(d),function(a){e[a]={},e=e[a]}),e[_.last(d)]=c,this},b.getFieldFromElem=function(a,b){var c=a.split("."),d=b;return _.each(c,function(a){d&&(d=d[a])}),angular.copy(d)},b.setIdToElem=function(a,c){return b.setFieldToElem(b.restangularFields.id,a,c),this},b.getIdFromElem=function(a){return b.getFieldFromElem(b.restangularFields.id,a)},b.isValidId=function(a){return""!==a&&!_.isUndefined(a)&&!_.isNull(a)},b.setUrlToElem=function(a,c){return b.setFieldToElem(b.restangularFields.selfLink,a,c),this},b.getUrlFromElem=function(a){return b.getFieldFromElem(b.restangularFields.selfLink,a)},b.useCannonicalId=!_.isUndefined(b.useCannonicalId)&&b.useCannonicalId,a.setUseCannonicalId=function(a){return b.useCannonicalId=a,this},b.getCannonicalIdFromElem=function(a){var c=a[b.restangularFields.cannonicalId];return b.isValidId(c)?c:b.getIdFromElem(a)},b.responseInterceptors=b.responseInterceptors||[],b.defaultResponseInterceptor=function(a){return a},b.responseExtractor=function(a,c,d,e,f,g){var h=angular.copy(b.responseInterceptors);h.push(b.defaultResponseInterceptor);var i=a;return _.each(h,function(a){i=a(i,c,d,e,f,g)}),i},a.addResponseInterceptor=function(a){return b.responseInterceptors.push(a),this},a.setResponseInterceptor=a.addResponseInterceptor,a.setResponseExtractor=a.addResponseInterceptor,b.requestInterceptors=b.requestInterceptors||[],
b.defaultInterceptor=function(a,b,c,d,e,f,g){return{element:a,headers:e,params:f,httpConfig:g}},b.fullRequestInterceptor=function(a,c,d,e,f,g,h){var i=angular.copy(b.requestInterceptors);return i.push(b.defaultInterceptor),_.reduce(i,function(b,i){return _.defaults(b,i(a,c,d,e,f,g,h))},{})},a.addRequestInterceptor=function(a){return b.requestInterceptors.push(function(b,c,d,e,f,g,h){return{headers:f,params:g,element:a(b,c,d,e),httpConfig:h}}),this},a.setRequestInterceptor=a.addRequestInterceptor,a.addFullRequestInterceptor=function(a){return b.requestInterceptors.push(a),this},a.setFullRequestInterceptor=a.addFullRequestInterceptor,b.errorInterceptor=b.errorInterceptor||function(){},a.setErrorInterceptor=function(a){return b.errorInterceptor=a,this},b.onBeforeElemRestangularized=b.onBeforeElemRestangularized||function(a){return a},a.setOnBeforeElemRestangularized=function(a){return b.onBeforeElemRestangularized=a,this},b.onElemRestangularized=b.onElemRestangularized||function(a){return a},a.setOnElemRestangularized=function(a){return b.onElemRestangularized=a,this},b.shouldSaveParent=b.shouldSaveParent||function(){return!0},a.setParentless=function(a){return _.isArray(a)?b.shouldSaveParent=function(b){return!_.contains(a,b)}:_.isBoolean(a)&&(b.shouldSaveParent=function(){return!a}),this},b.suffix=_.isUndefined(b.suffix)?null:b.suffix,a.setRequestSuffix=function(a){return b.suffix=a,this},b.transformers=b.transformers||{},a.addElementTransformer=function(a,c,d){var e=null,f=null;2===arguments.length?f=c:(f=d,e=c);var g=b.transformers[a];g||(g=b.transformers[a]=[]),g.push(function(a,b){return _.isNull(e)||a==e?f(b):b})},a.extendCollection=function(b,c){return a.addElementTransformer(b,!0,c)},a.extendModel=function(b,c){return a.addElementTransformer(b,!1,c)},b.transformElem=function(a,c,d,e){if(!b.transformLocalElements&&!a[b.restangularFields.fromServer])return a;var f=b.transformers[d],g=a;return f&&_.each(f,function(a){g=a(c,g)}),b.onElemRestangularized(g,c,d,e)},b.transformLocalElements=!!_.isUndefined(b.transformLocalElements)||b.transformLocalElements,a.setTransformOnlyServerElements=function(a){b.transformLocalElements=!a},b.fullResponse=!_.isUndefined(b.fullResponse)&&b.fullResponse,a.setFullResponse=function(a){return b.fullResponse=a,this},b.urlCreatorFactory={};var f=function(){};f.prototype.setConfig=function(a){return this.config=a,this},f.prototype.parentsArray=function(a){for(var b=[];a;)b.push(a),a=a[this.config.restangularFields.parentResource];return b.reverse()},f.prototype.resource=function(a,d,e,f,g,h,i,j){var k=_.defaults(g||{},this.config.defaultRequestParams.common),l=_.defaults(f||{},this.config.defaultHeaders);i&&(b.isSafe(j)?l["If-None-Match"]=i:l["If-Match"]=i);var m=this.base(a);if(h){var n="";/\/$/.test(m)||(n+="/"),n+=h,m+=n}return this.config.suffix&&-1===m.indexOf(this.config.suffix,m.length-this.config.suffix.length)&&!this.config.getUrlFromElem(a)&&(m+=this.config.suffix),a[this.config.restangularFields.httpConfig]=void 0,c(this.config,d,m,{getList:this.config.withHttpValues(e,{method:"GET",params:k,headers:l}),get:this.config.withHttpValues(e,{method:"GET",params:k,headers:l}),jsonp:this.config.withHttpValues(e,{method:"jsonp",params:k,headers:l}),put:this.config.withHttpValues(e,{method:"PUT",params:k,headers:l}),post:this.config.withHttpValues(e,{method:"POST",params:k,headers:l}),remove:this.config.withHttpValues(e,{method:"DELETE",params:k,headers:l}),head:this.config.withHttpValues(e,{method:"HEAD",params:k,headers:l}),trace:this.config.withHttpValues(e,{method:"TRACE",params:k,headers:l}),options:this.config.withHttpValues(e,{method:"OPTIONS",params:k,headers:l}),patch:this.config.withHttpValues(e,{method:"PATCH",params:k,headers:l})})};var g=function(){};g.prototype=new f,g.prototype.base=function(a){var c=this;return _.reduce(this.parentsArray(a),function(a,d){var e,f=c.config.getUrlFromElem(d);if(f){if(c.config.isAbsoluteUrl(f))return f;e=f}else if(e=d[c.config.restangularFields.route],d[c.config.restangularFields.restangularCollection]){var g=d[c.config.restangularFields.ids];g&&(e+="/"+g.join(","))}else{var h;h=c.config.useCannonicalId?c.config.getCannonicalIdFromElem(d):c.config.getIdFromElem(d),b.isValidId(h)&&(e+="/"+(c.config.encodeIds?encodeURIComponent(h):h))}return a.replace(/\/$/,"")+"/"+e},this.config.baseUrl)},g.prototype.fetchUrl=function(a,b){var c=this.base(a);return b&&(c+="/"+b),c},g.prototype.fetchRequestedUrl=function(a,c){function d(a){var b=[];for(var c in a)a.hasOwnProperty(c)&&b.push(c);return b.sort()}function e(a,b){return encodeURIComponent(a).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,b?"%20":"+")}var f=this.fetchUrl(a,c),g=a[b.restangularFields.reqParams];if(!g)return f;var h=[];return function(a,b,c){for(var e=d(a),f=0;f<e.length;f++)b.call(c,a[e[f]],e[f])}(g,function(a,b){null!=a&&void 0!=a&&(angular.isArray(a)||(a=[a]),angular.forEach(a,function(a){angular.isObject(a)&&(a=angular.toJson(a)),h.push(e(b)+"="+e(a))}))}),f+(this.config.suffix||"")+(-1===f.indexOf("?")?"?":"&")+h.join("&")},b.urlCreatorFactory.path=g};var b={};a.init(this,b),this.$get=["$http","$q",function(c,d){function e(b){function f(a,c,d,e,f){if(c[b.restangularFields.route]=d,c[b.restangularFields.getRestangularUrl]=_.bind(N.fetchUrl,N,c),c[b.restangularFields.getRequestedUrl]=_.bind(N.fetchRequestedUrl,N,c),c[b.restangularFields.addRestangularMethod]=_.bind(K,c),c[b.restangularFields.clone]=_.bind(r,c,c),c[b.restangularFields.reqParams]=_.isEmpty(e)?null:e,c[b.restangularFields.withHttpConfig]=_.bind(z,c),c[b.restangularFields.one]=_.bind(g,c,c),c[b.restangularFields.all]=_.bind(h,c,c),c[b.restangularFields.several]=_.bind(i,c,c),c[b.restangularFields.oneUrl]=_.bind(j,c,c),c[b.restangularFields.allUrl]=_.bind(k,c,c),c[b.restangularFields.fromServer]=!!f,a&&b.shouldSaveParent(d)){var l=b.getIdFromElem(a),m=b.getUrlFromElem(a),n=_.union(_.values(_.pick(b.restangularFields,["route","parentResource"])),b.extraFields),o=_.pick(a,n);b.isValidId(l)&&b.setIdToElem(o,l),b.isValidId(m)&&b.setUrlToElem(o,m),c[b.restangularFields.parentResource]=o}else c[b.restangularFields.parentResource]=null;return c}function g(a,c,d){if(_.isNumber(c)||_.isNumber(a)){var e="You're creating a Restangular entity with the number ";throw e+="instead of the route or the parent. You can't call .one(12)",new Error(e)}var f={};return b.setIdToElem(f,d),s(a,f,c,!1)}function h(a,b){return t(a,[],b,!1)}function i(a,c){var d=[];return d[b.restangularFields.ids]=Array.prototype.splice.call(arguments,2),t(a,d,c,!1)}function j(a,c,d){if(!c)throw new Error("Route is mandatory when creating new Restangular objects.");var e={};return b.setUrlToElem(e,d),s(a,e,c,!1)}function k(a,c,d){if(!c)throw new Error("Route is mandatory when creating new Restangular objects.");var e={};return b.setUrlToElem(e,d),t(a,e,c,!1)}function l(a,c,d){return a.call=_.bind(m,a),a.get=_.bind(n,a),a[b.restangularFields.restangularCollection]=c,c&&(a.push=_.bind(m,a,"push")),a.$object=d,a}function m(a){var c=d.defer(),e=arguments,f={};return this.then(function(b){var d=Array.prototype.slice.call(e,1);b[a].apply(b,d),f=b,c.resolve(b)}),l(c.promise,this[b.restangularFields.restangularCollection],f)}function n(a){var c=d.defer(),e={};return this.then(function(b){e=b[a],c.resolve(e)}),l(c.promise,this[b.restangularFields.restangularCollection],e)}function o(a,c,d,e){return _.extend(e,d),b.fullResponse?a.resolve(_.extend(c,{data:d})):void a.resolve(d)}function p(a){if(_.isArray(a)){var c=[];return _.each(a,function(a){c.push(p(a))}),c}return _.omit(a,_.values(_.omit(b.restangularFields,"id")))}function q(a){a[b.restangularFields.customOperation]=_.bind(J,a),_.each(["put","post","get","delete"],function(b){_.each(["do","custom"],function(c){var d,e="delete"===b?"remove":b,f=c+b.toUpperCase();d="put"!==e&&"post"!==e?J:function(a,b,c,d,e){return _.bind(J,this)(a,c,d,e,b)},a[f]=_.bind(d,a,e)})}),a[b.restangularFields.customGETLIST]=_.bind(y,a),a[b.restangularFields.doGETLIST]=a[b.restangularFields.customGETLIST]}function r(a){var c=angular.copy(a);return s(c[b.restangularFields.parentResource],c,c[b.restangularFields.route],!0)}function s(a,c,d,e,g,h){var i=b.onBeforeElemRestangularized(c,!1,d),j=f(a,i,d,h,e);return b.useCannonicalId&&(j[b.restangularFields.cannonicalId]=b.getIdFromElem(j)),g&&(j[b.restangularFields.getParentList]=function(){return g}),j[b.restangularFields.restangularCollection]=!1,j[b.restangularFields.get]=_.bind(B,j),j[b.restangularFields.getList]=_.bind(y,j),j[b.restangularFields.put]=_.bind(D,j),j[b.restangularFields.post]=_.bind(E,j),j[b.restangularFields.remove]=_.bind(C,j),j[b.restangularFields.head]=_.bind(F,j),j[b.restangularFields.trace]=_.bind(G,j),j[b.restangularFields.options]=_.bind(H,j),j[b.restangularFields.patch]=_.bind(I,j),q(j),b.transformElem(j,!1,d,M)}function t(a,c,d,e,g){var h=b.onBeforeElemRestangularized(c,!0,d),i=f(a,h,d,g,e);return i[b.restangularFields.restangularCollection]=!0,i[b.restangularFields.post]=_.bind(E,i,null),i[b.restangularFields.remove]=_.bind(C,i),i[b.restangularFields.head]=_.bind(F,i),i[b.restangularFields.trace]=_.bind(G,i),i[b.restangularFields.putElement]=_.bind(w,i),i[b.restangularFields.options]=_.bind(H,i),i[b.restangularFields.patch]=_.bind(I,i),i[b.restangularFields.get]=_.bind(v,i),i[b.restangularFields.getList]=_.bind(y,i,null),q(i),b.transformElem(i,!0,d,M)}function u(a,b,c){var d=t(a,b,c,!1);return _.each(d,function(b){s(a,b,c,!1)}),d}function v(a,b,c){return this.customGET(a.toString(),b,c)}function w(a,c,e){var f=this,g=this[a],h=d.defer(),i=[];return i=b.transformElem(i,!0,whatFetched,M),g.put(c,e).then(function(b){var c=r(f);c[a]=b,i=c,h.resolve(c)},function(a){h.reject(a)}),l(h.promise,!0,i)}function x(a,c,d,e,f,g){var h=b.responseExtractor(a,c,d,e,f,g),i=f.headers("ETag");return h&&i&&(h[b.restangularFields.etag]=i),h}function y(a,e,f){var g=this,h=d.defer(),i="getList",j=N.fetchUrl(this,a),k=a||g[b.restangularFields.route],m=b.fullRequestInterceptor(null,i,k,j,f||{},e||{},this[b.restangularFields.httpConfig]||{}),n=[];n=b.transformElem(n,!0,k,M);var p="getList";return b.jsonp&&(p="jsonp"),N.resource(this,c,m.httpConfig,m.headers,m.params,a,this[b.restangularFields.etag],i)[p]().then(function(c){var d=c.data,e=c.config.params,f=x(d,i,k,j,c,h);if(!_.isArray(f))throw new Error("Response for getList SHOULD be an array and not an object or something else");var l=_.map(f,function(c){return g[b.restangularFields.restangularCollection]?s(g[b.restangularFields.parentResource],c,g[b.restangularFields.route],!0,f):s(g,c,a,!0,f)});l=_.extend(f,l),g[b.restangularFields.restangularCollection]?o(h,c,t(g[b.restangularFields.parentResource],l,g[b.restangularFields.route],!0,e),n):o(h,c,t(g,l,a,!0,e),n)},function(a){304===a.status&&g[b.restangularFields.restangularCollection]?o(h,a,g,n):!1!==b.errorInterceptor(a,h)&&h.reject(a)}),l(h.promise,!0,n)}function z(a){return this[b.restangularFields.httpConfig]=a,this}function A(a,e,f,g,h){var i=this,j=d.defer(),k=f||{},m=e||this[b.restangularFields.route],n=N.fetchUrl(this,e),q=g||this,r=q[b.restangularFields.etag]||("post"!=a?this[b.restangularFields.etag]:null);_.isObject(q)&&b.isRestangularized(q)&&(q=p(q));var t=b.fullRequestInterceptor(q,a,m,n,h||{},k||{},this[b.restangularFields.httpConfig]||{}),u={};u=b.transformElem(u,!1,m,M);var v=function(c){var d=c.data,f=c.config.params,g=x(d,a,m,n,c,j);g?"post"!==a||i[b.restangularFields.restangularCollection]?o(j,c,s(i[b.restangularFields.parentResource],g,i[b.restangularFields.route],!0,null,f),u):o(j,c,s(i,g,e,!0,null,f),u):o(j,c,void 0,u)},w=function(c){304===c.status&&b.isSafe(a)?o(j,c,i,u):!1!==b.errorInterceptor(c,j)&&j.reject(c)},y=a,z=_.extend({},t.headers),A=b.isOverridenMethod(a);return A?(y="post",z=_.extend(z,{"X-HTTP-Method-Override":"remove"===a?"DELETE":a})):b.jsonp&&"get"===y&&(y="jsonp"),b.isSafe(a)?A?N.resource(this,c,t.httpConfig,z,t.params,e,r,y)[y]({}).then(v,w):N.resource(this,c,t.httpConfig,z,t.params,e,r,y)[y]().then(v,w):N.resource(this,c,t.httpConfig,z,t.params,e,r,y)[y](t.element).then(v,w),l(j.promise,!1,u)}function B(a,b){return _.bind(A,this)("get",void 0,a,void 0,b)}function C(a,b){return _.bind(A,this)("remove",void 0,a,void 0,b)}function D(a,b){return _.bind(A,this)("put",void 0,a,void 0,b)}function E(a,b,c,d){return _.bind(A,this)("post",a,c,b,d)}function F(a,b){return _.bind(A,this)("head",void 0,a,void 0,b)}function G(a,b){return _.bind(A,this)("trace",void 0,a,void 0,b)}function H(a,b){return _.bind(A,this)("options",void 0,a,void 0,b)}function I(a,b,c){return _.bind(A,this)("patch",void 0,b,a,c)}function J(a,b,c,d,e){return _.bind(A,this)(a,b,c,e,d)}function K(a,c,d,e,f,g){var h;h="getList"===c?_.bind(y,this,d):_.bind(J,this,c,d);var i=function(a,b,c){var d=_.defaults({params:a,headers:b,elem:c},{params:e,headers:f,elem:g});return h(d.params,d.headers,d.elem)};this[a]=b.isSafe(c)?i:function(a,b,c){return i(b,c,a)}}function L(c){var d=angular.copy(_.omit(b,"configuration"));return a.init(d,d),c(d),e(d)}var M={},N=new b.urlCreatorFactory[b.urlCreator];return N.setConfig(b),a.init(M,b),M.copy=_.bind(r,M),M.withConfig=_.bind(L,M),M.one=_.bind(g,M,null),M.all=_.bind(h,M,null),M.several=_.bind(i,M,null),M.oneUrl=_.bind(j,M,null),M.allUrl=_.bind(k,M,null),M.stripRestangular=_.bind(p,M),M.restangularizeElement=_.bind(s,M),M.restangularizeCollection=_.bind(u,M),M}return e(b)}]})}(),function(a,b,c){b.module("App",["angular-click-outside","ui.bootstrap","ngCookies","services","resources","directive","theme","templates-app","templates-common","app.utils","app.dlgVideo","app.dlgInfo","app.dlgMap","app.dlgDocument","app.dlgInfoDownload","app.dlgRecruit","app.modals","app.modules","app.dlgReview"]).controller("AppCtrl",["$scope","$rootScope","$window","$uibModal","resources","utils","dlgVideo","dlgInfo","dlgMap","dlgDocument","dlgRecruit","dlgReview",function(a,b,c,e,f,g,h,i,j,k,l,m){a.PATTERNS=d,b.openAlert=function(b){return a.modal=e.open({animation:!1,controller:"AlertCtrl",templateUrl:"modals/alert/alert.tpl.html",size:"dialog-centered modal-sm",resolve:{data:function(){return b}}}),a.modal},b.openWarning=function(b,c){return a.modal=e.open({animation:!1,backdrop:"static",controller:"WarningCtrl",templateUrl:"modals/warning/warning.tpl.html",size:"dialog-centered modal-sm "+(c||""),resolve:{message:function(){return b}}}),a.modal},b.openError=function(b){return a.modal=e.open({animation:!1,backdrop:"static",controller:"ErrorCtrl",templateUrl:"modals/error/error.tpl.html",size:"dialog-centered modal-sm",resolve:{message:function(){return b}}}),a.modal},a.params={email:""},a.addSubscription=function(b){b.$valid&&f.addSubscription(b.email.$modelValue).then(function(){g.resetForm(b),a.params.email="",alert("Bạn đã đăng ký thành công!")},function(){alert("Bạn đã đăng ký không thành công!")})},a.openReview=function(a){console.log(a),m.show(function(a){console.log(a)},a)}}]).controller("DlgRecruitCtrl",["$scope","utils","apiService",function(b,c,e){b.downloadForm=a.data.form,b.langText=a.langtext,b.PATTERNS=d,b.envData={showValid:!1,submitted:!1,changeFile:!1},b.params={categories:"",name:"",email:"",phone:"",birthday:"",gender:"1",portfolio:"",file:"",filename:" Choose file"},b.change=function(a){return console.log(a),a.files.length?(b.params.file=a.files[0],b.params.filename=b.params.file.name):b.params.filename=" Choose file",b.$apply()},b.submit=function(a){b.envData.showValid=!0;var d=document.querySelector('input[name="file"]');if(console.log(a),console.log(b.params),a.$valid&&1==d.files.length){b.envData.submitted=!0;var f=new FormData;f.append("name",b.params.name),f.append("email",b.params.email),f.append("phone",b.params.phone),f.append("company",b.params.birthday),f.append("gender",b.params.gender),f.append("categories",b.params.categories),f.append("message",b.params.portfolio),f.append("file",b.params.file,b.params.filename),e.postFormDataViaApi("system_recruits",f).then(function(){b.envData.showValid=!1,b.envData.submitted=!1,c.resetForm(a),b.params.name="",b.params.email="",b.params.phone="",b.params.birthday="",b.params.gender="1",b.params.portfolio="",b.params.file="",alert("Bạn đã gửi thành công!")},function(a){alert("Bạn đã gửi không thành công!")})}else alert("Xin nhập đầy đủ thông tin!")}}]).controller("SearchBoxCtrl",["$scope","$window",function(a,c){a.isOpen=!1,a.open=function(){a.isOpen=!a.isOpen},a.outside=function(){a.isOpen=!1},a.filterLang=b.extend({lang:[]},c.filterLang),a.params={q:""},a.search=function(){console.log("search fn"),a.params.q&&(location.href=a.filterLang.lang+"/tim-kiem?q="+a.params.q)}}]).controller("AdvisoryBoxCtrl",["$scope","utils","apiService",function(b,c,e){var f=this;b.PATTERNS=d,b.langText=a.langtext,b.envData={showValid:!1,submitted:!1,isHidden:!1},b.typeProduct=a.type_product,b.arr_style=a.arr_style,b.feedback=a.feedback,b.selectedFeedbacks={},b.params={name:"",email:"",address:"",company_name:"",mobile_phone:"",website:"",message:"",country_region:"",birthday:"",file:"",filename:"",type:"",table_content:{},arr_type_product:{},arr_feedback:{},selected_feedback:"",selected_product:""},b.change=function(a){return console.log(a),a.files.length?(b.params.file=a.files[0],b.params.filename=b.params.file.name):b.params.filename="",b.$apply()},f.resetForm=function(a){b.envData.showValid=!1;for(var d in b.params)b.params.hasOwnProperty(d)&&(b.params[d]="");return c.resetForm(a),b.$$phase||b.$apply()},b.changeInput=function(){b.selectedTypes=[];for(var a in b.params.arr_type_product)if(b.params.arr_type_product.hasOwnProperty(a)&&b.params.arr_type_product[a])for(var c=parseInt(a),d=0;d<b.typeProduct.length;d++)if(b.typeProduct[d].id===c){b.selectedTypes.push(b.typeProduct[d].option);break}b.params.selected_product=b.selectedTypes.join(", ")},b.changeFeedback=function(){b.selectedFeedbacks={};var a=Array.isArray(b.feedback)?b.feedback:Object.values(b.feedback);Object.keys(b.params.arr_feedback).forEach(function(c){var d=a.find(function(a){return a.id===parseInt(c)});d&&(b.selectedFeedbacks[d.option]=b.params.arr_feedback[c])}),b.params.selected_feedback=JSON.stringify(b.selectedFeedbacks)},b.selectedStyle=function(){console.log(b.params.table_content)},b.submit=function(a){if(b.envData.showValid=!0,a.$valid){var c=new FormData,d=JSON.stringify(b.params.table_content);d=JSON.parse(d),b.envData.submitted=!0,b.params.preferred_date&&(d["Preferred Date: "]=document.querySelector('input[name="preferred_date"]').value),d["Preferred Time: "]=b.params.preferred_time,d["Type of Enquiry: "]=b.params.type_enquiry,d["How you found us?: "]=b.params.how_you_found_us,d["If Others, please specify: "]=b.params.if_others,d["Type of Industry: "]=b.params.type_industry,d["Is this for a project or for your own use?: "]=b.params.project_private_use,b.params.selected_product&&(d["Type of Product: "]=b.params.selected_product),d.Specifications=b.params.specifications,b.params.selected_feedback&&(d["Feedback: "]=b.params.selected_feedback),c.append("name",b.params.name),c.append("email",b.params.email),c.append("phone",b.params.mobile_phone),c.append("company",b.params.company_name),c.append("address",b.params.address),c.append("country",b.params.country_region),c.append("table_content",JSON.stringify(d)),b.params.birthday&&c.append("birthday",document.querySelector('input[name="birthday"]').value),b.params.type&&c.append("type",b.params.type),b.params.website&&c.append("website",b.params.website),b.params.file&&c.append("file",b.params.file,b.params.filename),c.append("message",b.params.message?b.params.message:""),e.postFormDataViaApi("system_contacts",c).then(function(){b.envData.submitted=!1,f.resetForm(a),b.envData.isHidden=!0,alert(b.langText.text_send_success?b.langText.text_send_success:"text_send_success")},function(a){alert(b.langText.text_send_unsuccess?b.langText.text_send_unsuccess:"text_send_unsuccess")})}else alert(b.langText.text_enter_all_information?b.langText.text_enter_all_information:"text_enter_all_information")}}]).controller("RecruitBoxCtrl",["$scope","utils","apiService",function(a,b,c){a.PATTERNS=d,a.envData={showValid:!1,submitted:!1,changeFile:!1},a.params={name:"",email:"",phone:"",company:"",birthday:"",categories:"",message:"",type:"",gender:"",file:"",filename:" Choose file"},a.change=function(b){return console.log(b),b.files.length?(a.params.file=b.files[0],a.params.filename=a.params.file.name):a.params.filename=" Choose file",a.$apply()},a.submit=function(d){if(a.envData.showValid=!0,console.log(d),d.$valid){a.envData.submitted=!0;var e=new FormData;e.append("name",a.params.name),e.append("email",a.params.email),e.append("phone",a.params.phone),e.append("company",a.params.birthday),e.append("gender",a.params.gender),e.append("categories",a.params.categories),e.append("type",a.params.type),e.append("message",a.params.message),a.params.file?e.append("file",a.params.file,a.params.filename):(alert("Xin nhập đầy đủ thông tin!"),a.envData.submitted=!1),c.postFormDataViaApi("recruit_contacts",e).then(function(){a.envData.showValid=!1,a.envData.submitted=!1,b.resetForm(d),a.params.name="",a.params.email="",a.params.phone="",a.params.birthday="",a.params.gender="",a.params.file="",alert("Bạn đã gửi thành công!")},function(a){alert("Bạn đã gửi không thành công!")})}else alert("Xin nhập đầy đủ thông tin!")}}]).controller("RecruitRegisterBoxCtrl",["$scope","utils","apiService",function(a,b,c){a.PATTERNS=d,a.envData={showValid:!1,submitted:!1},a.params={name:"",email:"",phone:"",company:"",birthday:"",categories:"",message:"",type:"",gender:"",file:"",filename:" Choose file"},a.submit=function(d){a.envData.showValid=!0,d.$valid?(a.envData.submitted=!0,c.postViaApi("recruit_register_contacts",a.params).then(function(){a.envData.submitted=!1,b.resetForm(d),a.params.name="",a.params.company="",a.params.email="",a.params.phone="",a.params.website="",a.params.message="",a.params.type="",a.params.gender="",a.params.file="",alert("Bạn đã gửi thành công!")},function(a){alert("Bạn đã gửi không thành công!")})):alert("Xin nhập đầy đủ thông tin!")}}]).controller("LandAdvisoryBoxCtrl",["$rootScope","$window","$scope","utils","apiService",function(c,e,f,g,h){var i=this;i.settings=b.extend({code:""},e.lead_settings),f.PATTERNS=d,f.envData={showValid:!1,submitted:!1,sent:!1},f.genderList=[{id:1,name:"Mr"},{id:2,name:"Ms"},{id:3,name:"Miss"},{id:4,name:"Mrs"},{id:5,name:"Dr"},{id:6,name:"Prof"}],f.params={first_name:"",gender:f.genderList[0].name,company:"",email:"",phone_number:"",interested:"",file:"",filename:"",description:""},f.change=function(a){return console.log(a),a.files.length?(f.params.file=a.files[0],f.params.filename=f.params.file.name):f.params.filename="",f.$apply()},i.resetForm=function(a){f.envData.showValid=!1;for(var b in f.params)f.params.hasOwnProperty(b)&&(f.params[b]="");return f.params.gender=f.genderList[0].name,g.resetForm(a),f.$$phase||f.$apply()},f.submit=function(b){if(f.envData.showValid=!0,console.log(b),b.$valid){f.envData.submitted=!0;var d=new FormData;d.append("first_name",f.params.first_name),d.append("email",f.params.email),d.append("phone_number",f.params.phone_number),d.append("company",f.params.company),d.append("gender",f.params.gender),d.append("interested",f.params.interested),d.append("description",f.params.description),d.append("file",f.params.file,f.params.filename),d.append("campaign",i.settings.code),d.append("source",a.location.hostname),h.postFormDataViaApi("mkt_leads_create?loadingSpinner",d).then(function(a){console.log(a.data.data.data),f.envData.submitted=!1,f.envData.sent=!0,i.resetForm(b),c.openAlert({message:"Bạn đã gửi thành công!",timeout:4e3})},function(a){c.openError(a[0].errorMessage)})}else alert("Xin nhập đầy đủ thông tin!")}}]).controller("DownloadBoxCtrl",["$scope","utils","apiService","storageService",function(b,c,e,f){var g=this;b.PATTERNS=d,b.langText=a.langtext,b.envData={showValid:!1,submitted:!1},b.params={name:"",company:"",categories:"",email:"",phone:"",message:"",file:"",filename:"",type:"",website:"",table_content:{},link:""},b.change=function(a){return console.log(a),a.files.length?(b.params.file=a.files[0],b.params.filename=b.params.file.name):b.params.filename="",b.$apply()},g.resetForm=function(a){b.envData.showValid=!1;for(var d in b.params)b.params.hasOwnProperty(d)&&(b.params[d]="");return c.resetForm(a),b.$$phase||b.$apply()},b.submit=function(c){if(b.envData.showValid=!0,c.$valid){var d=JSON.stringify(b.params.table_content);console.log(b.params.table_content),b.envData.submitted=!0;var h=new FormData;h.append("name",b.params.name),h.append("email",b.params.email),h.append("phone",b.params.phone),h.append("company",b.params.company),b.params.message&&h.append("message",b.params.message),b.params.categories&&h.append("categories",b.params.categories),b.params.type&&h.append("type",b.params.type),b.params.website&&h.append("website",b.params.website),b.params.table_content&&h.append("table_content",d),b.params.file&&h.append("file",b.params.file,b.params.filename),e.postFormDataViaApi("system_contacts",h).then(function(){console.log(b.params.table_content),b.envData.submitted=!1,f.setItem("info",b.params);document.cookie="info=1; max-age="+Math.floor(86400),a.open(b.params.link),g.resetForm(c),$('[class*="form_"]').removeClass("active")},function(a){alert(b.langText.text_send_unsuccess?b.langText.text_send_unsuccess:"text_send_unsuccess")})}else alert(b.langText.text_enter_all_information?b.langText.text_enter_all_information:"text_enter_all_information")}}]).controller("ContactBoxCtrl",["$scope","utils",function(b,c){var e=this;b.PATTERNS=d,b.langText=a.langtext,b.envData={showValid:!1,submitted:!1},b.all_locations=a.all_locations,b.params={location:"",country_id:"",obj_location:{},obj_country:{},mark_location:""},b.searchLocation=function(){var a=document.getElementById("locationInput"),c={types:["geocode"]},d=new google.maps.places.Autocomplete(a,c);d.addListener("place_changed",function(){var a=d.getPlace();console.log(a),b.params.obj_location=a}),b.params.location=b.params.obj_location.formatted_address},b.selectCountry=function(){var a,c=b.params.country_id;a=""===c?b.all_locations:b.all_locations.filter(function(a){return a.country_id===c}),b.params.obj_country=a},e.resetForm=function(a){b.envData.showValid=!1;for(var d in b.params)b.params.hasOwnProperty(d)&&(b.params[d]="");return c.resetForm(a),b.$$phase||b.$apply()},b.submit=function(a){b.envData.showValid=!0,b.params.location=b.params.obj_location.formatted_address,console.log(b.params),b.params.mark_location=""===b.params.country_id?b.all_locations:b.params.obj_country,console.log(b.params.mark_location),map=new google.maps.Map(document.getElementById("map"),{center:{lat:0,lng:0},zoom:2});var c=new google.maps.LatLngBounds;b.params.mark_location.forEach(function(a){var b=new google.maps.Marker({position:{lat:a.latitude,lng:a.longitude},map:map,title:a.name}),d=new google.maps.InfoWindow;b.addListener("click",function(){d.setContent("<div><h5>"+a.name+"</h5><p>"+a.address+"</p><p>"+a.telephone+"</p><p>"+a.open+'</p><a href="'+a.link_map+'">Get Directions</a></div>'),d.open(map,b),google.maps.event.addListener(map,"click",function(){d.close()})}),c.extend(b.getPosition())}),map.fitBounds(c)}}]).controller("SurveyFormCtrl",["$scope","utils","apiService",function(c,e,f){var g=this;c.PATTERNS=d,c.langText=a.langtext,c.envData={showValid:!1,submitted:!1,isHidden:!1},c.data={loading:!1},c.params={field:[],files:{},category_ids:[]},c.requiredFields={},c.params.isFileChosen={},c.uploadFile=function(a,b,d){a.files.length&&(c.params.files[b]=a.files[0],c.params.isFileChosen[b]={file:!0,required:d})},console.log(c.params.isFileChosen),g.resetForm=function(a){return c.envData.showValid=!1,c.params.field=[],c.params.files={},c.requiredFields={},c.isSubmit=!1,c.envData={showValid:!1,submitted:!1,isHidden:!1},c.params.checkbox=[],c.params.isFileChosen=[],e.resetForm(a),a.$setPristine(),a.$setUntouched(),c.$$phase||c.$apply()},c.params.checkbox=[],c.toggleCheckboxSelection=function(a){var b=c.params.field[a],d=!1;for(var e in b){if(1==b[e]){d=!0;break}d=!1}c.params.checkbox[a]=d},c.params.radio=[],c.toggleRadioSelection=function(a){var b=c.params.field[a];console.log(b);var d=!1;d=!!b,c.params.radio[a]=d},c.submit=function(a){c.isSubmit=!0,c.envData.showValid=!0;var d=!0;b.forEach(a.$error.required,function(a){a.$setDirty(),d&&(d=!1)});var h=!0;for(var i in c.params.checkbox){if(0==c.params.checkbox[i]){h=!1;break}h=!0}var j=!0;for(var k in c.params.radio){if(0==c.params.radio[k]){j=!1;break}j=!0}var l=!0;for(var m in c.params.isFileChosen)if(c.params.isFileChosen[m].required&&!c.params.isFileChosen[m].file){l=!1;break}if(a.$valid&&d&&h&&j&&l){console.log(c.params.field);var n=[],o=c.params.category_ids.map(function(a,b){return 1===b?a:", "+a}).join("");_.forEach(c.params.field,function(a,b){if(/^[A-Z][a-z]{2} \w{3} \d{2} \d{4} \d{2}:\d{2}:\d{2} GMT[+-]\d{4} \([^\)]+\)$/.test(a)&&(a=a.format("yyyy-mm-dd")),a)if(_.isObject(a)){var c=[];_.each(a,function(a,b){if(_.isBoolean(a))!0===a&&c.push(parseInt(b));else if(_.isString(a))c.push({id:parseInt(b),values:a});else if(_.isNumber(a))c.push({id:parseInt(b),values:parseInt(a)});else{var d=[];_.each(a,function(a,b){d.push(parseInt(b))}),c.push({id:parseInt(b),values:d})}}),n.push({id:parseInt(b),values:c})}else n.push({id:parseInt(b),values:a})});var p=[];_.each(c.params.files,function(a,b){a.name=b+"__"+a.name,a.name2=b+"__"+a.name,p.push(a)}),c.envData.showValid=!0,c.envData.submitted=!0,f.postFormDataViaApi("srv_contacts",e.toFormData({fields:n,files:p,category_ids:o})).then(function(){c.envData.isHidden=!0,c.envData.submitted=!1,g.resetForm(a),alert(c.langText.text_send_success?c.langText.text_send_success:"text_send_success")},function(a){c.envData.submitted=!1,alert(c.langText.text_send_unsuccess?c.langText.text_send_unsuccess:"text_send_unsuccess")})}else alert(c.langText.text_enter_all_information?c.langText.text_enter_all_information:"text_enter_all_information")},c.changeField=function(a){console.log(a)}}]).controller("TestFormCtrl",["$scope","utils","apiService",function(b,c,e){var f=this;b.PATTERNS=d,b.envData={showValid:!1,submitted:!1,isHidden:!1},b.data={loading:!1},b.params={category_ids:[],field:"",files:{}},e.getViaApi("loc_districts/withfilter/2").then(function(a){var b=a.data.data;console.log(b);var c=document.getElementById("district");b.data.forEach(function(a,b){var d=document.createElement("li");d.classList.add("option"),d.dataset.value=a.id,d.dataset.displayText="",d.tabIndex=0,d.textContent=a.name,c.querySelector(".list ul").appendChild(d)})}),b.handleOptionClick=function(a){if(null!==a&&""!=a)e.getViaApi("loc_wards/withfilter/"+a).then(function(a){var b=a.data.data;console.log(b);var c=document.getElementById("ward");$("#ward .list ul").empty(),b.data.forEach(function(a,b){var d=document.createElement("li");d.classList.add("option"),d.dataset.value=a.id,d.dataset.point=a.point,d.dataset.displayText="",d.tabIndex=0,d.textContent=a.name,c.querySelector(".list ul").appendChild(d)})});else{var b=document.getElementById("ward");$("#ward .list ul").empty();var c=document.createElement("li");c.classList.add("option"),c.dataset.value="",c.textContent="Vui lòng chọn quận",c.classList.add("selected"),b.querySelector(".list ul").appendChild(c)}},b.handleOptionClick1=function(a){null!==a&&""!=a&&e.getViaApi("loc_streets/withfilter/"+a).then(function(a){var b=a.data.data;console.log(b);var c=document.getElementById("street");$("#street .list ul").empty(),b.data.forEach(function(a,b){var d=document.createElement("li");d.classList.add("option"),d.dataset.value=a.id,d.dataset.displayText="",d.tabIndex=0,d.textContent=a.name,c.querySelector(".list ul").appendChild(d)})})},b.uploadFile=function(a,c){console.log(a,c),a.files.length&&(b.params.files[c]=a.files[0])},f.resetForm=function(a){b.envData.showValid=!1;for(var d in b.params)b.params.hasOwnProperty(d)&&(b.params[d]="")
;return c.resetForm(a),b.$$phase||b.$apply()},b.submit=function(d){2==a.propertyType&&(b.params.field.number_floor=5),b.params.field.description=a.description?a.description:"",b.params.field.kind_finance=a.kindFinance?a.kindFinance:0,b.params.field.kind_property=a.propertyType?a.propertyType:0,b.params.field.from_front=a.from_front?a.from_front:0,b.params.field.acreage=a.acreage?a.acreage:0,b.params.field.use_acreage=a.use_acreage?a.use_acreage:0,b.params.field.revenue=a.revenue?a.revenue:"",b.params.field.goodfee=a.checkgoodfee?a.checkgoodfee:0,b.params.field.paramszone=a.paramszone?a.paramszone:0,b.params.field.paramsfront=a.paramsfront?a.paramsfront:0,b.params.field.paramspointRoadIn=a.paramspointRoadIn?a.paramspointRoadIn:0,b.params.field.paramsacreage=a.paramsacreage?a.paramsacreage:0,b.params.field.paramspointHost=a.paramspointHost?a.paramspointHost:0,b.params.field.paramsfloor=a.paramsfloor?a.paramsfloor:0,b.params.field.paramspointEle=a.paramspointEle?a.paramspointEle:0,b.params.field.paramspointdttc=a.paramsdttc?a.paramsdttc:0,b.params.field.paramspe=a.paramspe?a.paramspe:0,b.params.field.paramssan=a.paramssan?a.paramssan:0,b.params.field.paramsdt=a.paramsdt?a.paramsdt:0,b.params.field.paramsph=a.paramsph?a.paramsph:0,b.params.field.paramspr=a.paramspr?a.paramspr:0,b.params.field.paramswi=a.paramswi?a.paramswi:0,b.params.field.paramspz=a.paramspz?a.paramspz:0,b.params.field.paramstotal=a.paramstotal?a.paramstotal:0,console.log(a.propertyType);var f=!1;if(1==a.propertyType&&b.params.field.resource&&b.params.field.code&&b.params.field.dateInput&&b.params.field.district&&b.params.field.ward&&b.params.field.number_house&&b.params.field.street&&b.params.field.number_floor&&a.checkfrontwidth&&a.checkgoodfee&&a.checkacreage&&b.params.field.image&&(f=!0),2==a.propertyType&&b.params.field.resource&&b.params.field.code&&b.params.field.dateInput&&b.params.field.district&&b.params.field.ward&&b.params.field.number_house&&b.params.field.street&&a.checkfrontwidth&&a.checkgoodfee&&a.checkacreage&&b.params.field.image&&(f=!0),f){var g=[],h=b.params.category_ids.map(function(a,b){return 1===b?a:", "+a}).join("");_.forEach(b.params.field,function(a,b){if(/^[A-Z][a-z]{2} \w{3} \d{2} \d{4} \d{2}:\d{2}:\d{2} GMT[+-]\d{4} \([^\)]+\)$/.test(a)&&(a=a.format("yyyy-mm-dd")),a)if(_.isObject(a)){var c=[];_.each(a,function(a,b){if(_.isBoolean(a))!0===a&&c.push(parseInt(b));else if(_.isString(a))c.push({id:parseInt(b),values:a});else if(_.isNumber(a))c.push({id:parseInt(b),values:parseInt(a)});else{var d=[];_.each(a,function(a,b){d.push(parseInt(b))}),c.push({id:b,values:d})}}),g.push({id:b,values:c})}else g.push({id:b,values:a})});var i=[];_.each(b.params.files,function(a,b){a.name=b+"__"+a.name,a.name2=b+"__"+a.name,i.push(a)}),g.push({id:"type",values:"fixed"}),console.log(g);var j=a.status?a.status:-1;b.envData.showValid=!0,b.envData.submitted=!0,e.postFormDataViaApi("srv_contacts",c.toFormData({fields:g,files:i,category_ids:h,form_status:j})).then(function(){b.envData.isHidden=!0,b.envData.submitted=!1,c.resetForm(d),alert("Bạn đã gửi thành công!")},function(a){b.envData.submitted=!1,alert("Bạn đã gửi không thành công!")})}else alert("Vui lòng nhập đầy đủ thông tin!")},b.changeField=function(a){console.log(a)}}]),a.location.origin||(a.location.origin=a.location.protocol+"//"+a.location.hostname+(a.location.port?":"+a.location.port:""));var d=(function(){var b=a.getComputedStyle(document.documentElement,""),c=(Array.prototype.slice.call(b).join("").match(/-(moz|webkit|ms)-/)||""===b.OLink&&["","o"])[1];"WebKit|Moz|MS|O".match(new RegExp("("+c+")","i"))[1],c[0].toUpperCase(),c.substr(1)}(),function(){var a={},b=navigator.userAgent;-1!==b.indexOf("Chrome")?a.chrome=!0:-1!==b.indexOf("Firefox")?a.firefox=!0:-1!==b.indexOf("Safari")?a.safari=!0:-1!==b.indexOf("MSIE")&&(a.msie=!0,-1!==b.indexOf("6.0")?a.version="6.0":-1!==b.indexOf("7.0")?a.version="7.0":-1!==b.indexOf("8.0")?a.version="8.0":-1!==b.indexOf("9.0")?a.version="9.0":a.version="10.0")}(),function(){navigator.platform.toUpperCase().indexOf("MAC"),navigator.platform.toUpperCase().indexOf("WIN"),navigator.platform.toUpperCase().indexOf("X11"),navigator.platform.toUpperCase().indexOf("Linux")}(),function(){var b=navigator.userAgent||navigator.vendor||a.opera;!/android|android.+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(b)&&/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|e\-|e\/|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(di|rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|xda(\-|2|g)|yas\-|your|zeto|zte\-/i.test(b.substr(0,4))}(),{EMAIL:/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,PHONE:/^(0|84)+([1-9])+([0-9]{8})$/,AGE:/^[0-9]{1,2}$/});b.module("app.dlgDocument",[]).controller("DlgDocumentCtrl",["$scope","$uibModalInstance","$data","dlgInfoDownload","storageService","apiService",function(b,c,d,e,f,g){var h=this;h.category_info=_.extend([],a.data.info),h.category_id=d.category_id,h.categories=_.extend([],a.data.categories),h.info=_.find(h.categories,{id:h.category_id}),b.langText=a.langtext,b.titleDocument=b.langText.titlebrochure+" "+h.category_info.name,b.close=function(){console.log("close"),c.dismiss("cancel")},b.submit=function(a){console.log(a),c.close(b.data)},b.saveInfo=function(b){console.log(b),f.getItem("info")?a.open(b.download_url):e.show(function(c){console.log(c),f.setItem("info",c);var d={email:c.email,phone:c.phone_number,type:"download",message:h.category_info.name};g.postViaApi("system_register_download",d).then(function(a){console.log(a)},function(a){console.log(a)}),a.open(b.download_url)})},console.log(h.category_id)}]).factory("dlgDocument",["$uibModal","helper",function(a,b){return{show:function(c,d){return a.open({animation:!0,templateUrl:"dlgDocument/dlgDocument.tpl.html",controller:"DlgDocumentCtrl",controllerAs:"vm",size:"lg custom-modal-document modal-dialog-centered",resolve:{$data:function(){return{info:d.info,category_id:d.category_id}}}}).result.then(function(a){b.runFnc(c,a)},function(a){console.log(a)})}}}]),b.module("app.dlgInfoDownload",[]).controller("DlgInfoDownloadCtrl",["$scope","$uibModalInstance",function(b,c){b.langText=a.langtext,b.params={email:"",phone_number:""},b.close=function(){console.log("close"),c.dismiss("cancel")},b.submit=function(a){console.log(b.params),a.$valid&&c.close(b.params)}}]).factory("dlgInfoDownload",["$uibModal","helper",function(a,b){return{show:function(c){return a.open({animation:!0,templateUrl:"dlgDocument/dlgInfoDownload.tpl.html",controller:"DlgInfoDownloadCtrl",controllerAs:"vm",size:"lg modal-info-doc modal-dialog-centered"}).result.then(function(a){b.runFnc(c,a)},function(a){console.log(a)})}}}]),b.module("app.dlgInfo",[]).controller("DlgInfoCtrl",["$scope","$uibModalInstance","$data",function(a,b,c){a.close=function(){console.log("close"),b.dismiss("cancel")},a.submit=function(c){console.log(c),b.close(a.data)},console.log(c),a.info=c}]).factory("dlgInfo",["$uibModal","helper",function(a,b){return{show:function(c,d){return a.open({animation:!0,templateUrl:"dlgInfo/dlgInfo.tpl.html",controller:"DlgInfoCtrl",size:"lg custom-modal modal-dialog-centered",resolve:{$data:function(){return{name:d.name,youtubeId:d.youtubeId,description:d.description}}}}).result.then(function(a){b.runFnc(c,a)},function(a){console.log(a)})}}}]),b.module("app.dlgMap",[]).controller("DlgMapCtrl",["$scope","$window","$uibModalInstance","$data",function(a,b,c,d){console.log(d),a.close=function(){console.log("close"),c.dismiss("cancel")},a.submit=function(b){console.log(b),c.close(a.data)},a.info=d}]).factory("dlgMap",["$uibModal","helper",function(a,b){return{show:function(c,d){return a.open({animation:!0,templateUrl:"dlgMap/dlgMap.tpl.html",controller:"DlgMapCtrl",size:"lg modal-dialog-centered modal-map",resolve:{$data:function(){return{lat:d.lat,long:d.lng}}}}).result.then(function(a){b.runFnc(c,a)},function(a){console.log(a)})}}}]).directive("googleMap",function(){return{restrict:"EA",scope:{opt:"=googleMap"},link:function(b,c,d){if(b.opt.lat&&b.opt.long){var e=new google.maps.LatLng(b.opt.lat,b.opt.long),f={zoom:15,center:e,mapTypeId:google.maps.MapTypeId.ROADMAP,draggable:!0,zoomControl:!0,mapTypeControl:!1,streetViewControl:!1,scrollwheel:!1},g=new google.maps.Map(c[0],f);new google.maps.Marker({position:e,icon:"/assets/demo/images/icons/marker.png",map:g}),$(a).width()<=576&&c.css("height","300px")}}}}),b.module("app.dlgRecruit",[]).controller("DlgRecruitCtrl",["$scope","$uibModalInstance","utils","apiService",function(b,c,e,f){b.downloadForm=a.data.form,b.langText=a.langtext,b.PATTERNS=d,b.envData={showValid:!1,submitted:!1,changeFile:!1},b.params={name:"",email:"",phone:"",birthday:"",gender:"1",portfolio:"",file:"",filename:" Choose file"},b.change=function(a){return console.log(a),a.files.length?(b.params.file=a.files[0],b.params.filename=b.params.file.name):b.params.filename=" Choose file",b.$apply()},b.submit=function(a){if(b.envData.showValid=!0,console.log(a),a.$valid){b.envData.submitted=!0;var c=new FormData;c.append("name",b.params.name),c.append("email",b.params.email),c.append("phone",b.params.phone),c.append("company",b.params.birthday),c.append("gender",b.params.gender),c.append("categories",b.info.name),c.append("message",b.params.portfolio),c.append("file",b.params.file,b.params.filename),f.postFormDataViaApi("system_recruits",c).then(function(){b.envData.showValid=!1,b.envData.submitted=!1,e.resetForm(a),b.params.name="",b.params.email="",b.params.phone="",b.params.birthday="",b.params.gender="1",b.params.portfolio="",b.params.file="",alert("Bạn đã gửi thành công!")},function(a){alert("Bạn đã gửi không thành công!")})}else alert("Xin nhập đầy đủ thông tin!")},b.close=function(){console.log("close"),c.dismiss("cancel")}}]).factory("dlgRecruit",["$uibModal","helper",function(a,b){return{show:function(c,d){return a.open({animation:!0,templateUrl:"dlgRecruit/dlgRecruit.tpl.html",controller:"DlgRecruitCtrl",size:"md modal-recruit modal-dialog-centered",resolve:{$data:function(){return{id:d.id,name:d.name}}}}).result.then(function(a){b.runFnc(c,a)},function(a){console.log(a)})}}}]),b.module("app.dlgReview",[]).controller("DlgReviewCtrl",["$scope","$uibModalInstance","utils","apiService",function(b,c,e,f){b.info=a.info,b.PATTERNS=d,b.envData={showValid:!1,submitted:!1,changeFile:!1},b.params={ratingStar:"",ratingComment:"",file:"",filename:" Choose file"},b.change=function(a){return console.log(a),a.file.length?(b.params.file=a.files[0],b.params.filename=b.params.file.name):b.params.filename=" Choose file",b.$apply()},b.submit=function(a){if(b.envData.showValid=!0,console.log(a),a.$valid){b.envData.submitted=!0;var c=new FormData;c.append("ratingStar",b.params.ratingStar),c.append("ratingComment",b.params.ratingComment),c.append("file",b.params.file,b.params.filename),f.postFormDataViaApi("system_review",c).then(function(){b.envData.showValid=!1,b.envData.submitted=!1,e.resetForm(a),b.params.ratingStar="",b.params.ratingComment="",b.params.portfolio="",b.params.file="",alert("Bạn đã gửi thành công!")},function(a){alert("Bạn đã gửi không thành công!")})}else alert("Xin nhập đầy đủ thông tin!")},b.close=function(){console.log("close"),c.dismiss("cancel")}}]).factory("dlgReview",["$uibModal","helper",function(a,b){return{show:function(c,d){return a.open({animation:!0,templateUrl:"dlgReview/dlgReview.tpl.html",controller:"DlgReviewCtrl",size:"md custom-modal",resolve:{$data:function(){return{id:d}}}}).result.then(function(a){b.runFnc(c,a)},function(a){console.log(a)})}}}]),b.module("app.dlgVideo",[]).controller("DlgVideoCtrl",["$scope","$window","$uibModalInstance","$data",function(a,b,c,d){a.data={},a.close=function(){console.log("close"),c.dismiss("cancel")},a.submit=function(b){console.log(b),c.close(a.data)},a.info=d}]).factory("dlgVideo",["$uibModal","helper",function(a,b){return{show:function(c,d){return a.open({animation:!0,templateUrl:"dlgVideo/dlgVideo.tpl.html",controller:"DlgVideoCtrl",size:"md modal-dialog-centered",resolve:{$data:function(){return{name:d.name,youtubeId:d.youtubeId}}}}).result.then(function(a){b.runFnc(c,a)},function(a){console.log(a)})}}}]).directive("youtubeIframe",function(){return{restrict:"EA",scope:{yid:"="},template:'<div class="embed-responsive embed-responsive-16by9"><iframe id="iframe" width="100%" height="100%" src="" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>',link:function(a,b,c){console.log(a),b.find("iframe")[0].src="https://www.youtube.com/embed/"+a.yid}}}),b.module("app.modals.alert",[]).controller("AlertCtrl",["$scope","$timeout","$uibModalInstance","data",function(a,c,d,e){a.data=b.extend({},e),a.ok=function(){d.close(!0)},a.cancel=function(){d.close(!1)},a.data.timeout&&c(function(){a.cancel()},parseInt(a.data.timeout))}]),b.module("app.modals.error",[]).controller("ErrorCtrl",["$scope","$uibModalInstance","message",function(a,b,c){a.error=c,a.ok=function(){b.dismiss("cancel")},a.cancel=function(){b.dismiss("cancel")}}]),b.module("app.modals",["app.modals.alert","app.modals.error","app.modals.warning"]),b.module("app.modals.warning",[]).controller("WarningCtrl",["$scope","$uibModalInstance","message",function(a,b,c){a.title="",a.message="","string"==typeof c?(a.title="Cảnh báo!",a.message=c):"object"==typeof c&&(a.title=c.title,a.message=c.content),a.ok=function(){b.close(!0)},a.cancel=function(){b.close(!1)}}]),b.module("app.modules.advisory",[]).controller("LeadBoxCtrl",["$rootScope","$scope","$window","utils","apiService",function(c,e,f,g,h){var i=this;i.settings=b.extend({code:""},f.lead_settings),console.log(i.settings),e.PATTERNS=d,e.envData={showValid:!1,submitted:!1,sent:!1},e.genderList=[{id:1,name:"Mr"},{id:2,name:"Ms"},{id:3,name:"Miss"},{id:4,name:"Mrs"},{id:5,name:"Dr"},{id:6,name:"Prof"}],e.params={first_name:"",gender:e.genderList[0].id,company:"",email:"",phone_number:"",careers:""},i.resetForm=function(a){e.envData.showValid=!1;for(var b in e.params)e.params.hasOwnProperty(b)&&(e.params[b]="");return e.params.gender=e.genderList[0].id,g.resetForm(a),e.$$phase||e.$apply()},e.submit=function(d){if(e.envData.showValid=!0,console.log(d),d.$valid){e.envData.submitted=!0;var f=b.copy(e.params);f.campaign=i.settings.code,f.source=a.location.hostname,h.postViaApi("mkt_leads_create?loadingSpinner",f).then(function(a){console.log(a.data.data.data),e.envData.submitted=!1,e.envData.sent=!0,i.resetForm(d),c.openAlert({message:"Bạn đã gửi thành công!",timeout:5e3})},function(a){c.openError(a[0].errorMessage)})}else alert("Xin nhập đầy đủ thông tin!")}}]),b.module("app.modules",["app.modules.advisory"]),b.module("directive",[]).directive("imgDef",function(){return{restrict:"A",link:function(a,b,c){function d(a,b,c){var e=document.createElement("img");e.src=b,e.onload=function(){},e.onerror=function(){b&&b.indexOf("/thumb/")>-1?d(a,b.replace("/thumb/","/"),c):a.attr("src",c)}}var e=c.imgDef?c.imgDef:"image/l640x400.png";d(b,b.attr("src")||c.ngSrc,e)}}}).directive("goToElement",["$window",function(a){return{restrict:"A",link:function(b,c,d){c.click(function(){if(d.goToElement&&$(d.goToElement)){var b=$(d.goToElement).offset().top;$(a).scrollTop(b)}})}}}]).directive("keyEnter",function(){return function(a,b,c){b.bind("keydown keypress",function(b){13===b.which&&(a.$apply(function(){a.$eval(c.keyEnter)}),b.preventDefault())})}}).directive("numbersOnly",function(){return{require:"ngModel",link:function(a,b,d,e){function f(a){if(a){var b=a.replace(/[^0-9-]/g,"");return b!==a&&(e.$setViewValue(b),e.$render()),b}return c}e.$parsers.push(f)}}}).directive("mainNav",["$window",function(a){return{restrict:"A",link:function(b,c,d){function e(){a.isDesktop=a.innerWidth>=f}var f=1012;a.isDesktop=a.innerWidth>=f,c.find("li.has-dropdown").not(".nav__item-search").each(function(){var b=$(this),d=$("> .nav__link",b);d.hover(function(c){a.isDesktop&&b.addClass("is-open")},function(a){}),b.hover(function(a){},function(c){a.isDesktop&&b.removeClass("is-open")}),d.click(function(d){c.find("li.has-dropdown.is-open").each(function(){$(this).attr("id")!==b.attr("id")&&$(this).removeClass("is-open")}),a.isDesktop||(b.hasClass("is-open")?b.removeClass("is-open"):b.addClass("is-open"))})}),e(),$(a).on("resize",function(){e()})}}}]).directive("openNav",["$window",function(a){return{restrict:"A",link:function(b,c,d){function e(){$("[open-nav]").removeClass("is-open"),$(".navbar__menu").removeClass("is-open")}var f=$(d.openNav);e(),c.click(function(){var a=c.hasClass("is-open");$("[open-nav]").removeClass("is-open"),$(".navbar__menu").removeClass("is-open"),a?(c.removeClass("is-open"),f.removeClass("is-open")):(c.addClass("is-open"),f.addClass("is-open"))}),$(a).on("resize",function(){e()})}}}]),b.module("resources",[]).factory("resources",["$rootScope","$q","apiService",function(a,b,c){return{addSubscription:function(a){var d=b.defer();return c.post("api/subscription",{email:a}).then(function(a){d.resolve(a.data.data)},function(a){d.reject(a.data.errors)}),d.promise},addContact:function(a){var d=b.defer();return c.post("api/contact",a).then(function(a){d.resolve(a.data.data)},function(a){d.reject(a.data.errors)}),d.promise}}}]),b.module("services.api",["restangular"]).factory("apiService",["Restangular","$rootScope",function(a,d){a.setBaseUrl("/"),a.setFullResponse(!1),a.setDefaultHttpFields({withCredentials:!1,cache:!0,timeout:2e4}),a.addResponseInterceptor(function(a,b){d.$broadcast("API:loading:ended");var c=[];return c.data=a,c}),a.addRequestInterceptor(function(a,b,c,e){var f={element:a,operation:b,what:c,url:e};-1===c.indexOf("loadingSpinnerNotShowing")&&d.$broadcast("API:loading:started",f)}),a.setErrorInterceptor(function(a,b,c){return d.$broadcast("API:loading:ended"),console.log("Response received with HTTP error code: "+a.status),!0});var e={authToken:c,all:function(b,d){return d===c?a.all(b).getList():a.all(b).getList(d)},find:function(b,c){return a.one(b,c).get()},post:function(b,c,d){return a.all(b).post(c,d)},postFormData:function(d,e){return a.all(d).withHttpConfig({transformRequest:b.identity}).post(e,c,{"Content-Type":c})},download:function(b,d,e){return e===c?(e=d,a.withConfig(function(a){a.setFullResponse(!0)}).one(b).withHttpConfig({responseType:"arraybuffer"}).get(e)):a.withConfig(function(a){a.setFullResponse(!0)}).all(b).withHttpConfig({responseType:"arraybuffer"}).customGET(d,e)},get:function(b,d,e){return e===c?(e=d,e&&!_.isObject(e.data)&&(e.data=encodeURIComponent(JSON.stringify(e.data))),a.one(b).get(e)):(e&&!_.isObject(e.data)&&(e.data=encodeURIComponent(JSON.stringify(e.data))),a.all(b).customGET(d,e))},put:function(b,c,d,e,f){return a.one(b).customPUT(c,d,e,f)},putFormData:function(c,d){return a.all(c).withHttpConfig({transformRequest:b.identity}).customPUT(d)},patch:function(b,c,d,e){return a.one(b).patch(c,d,e)},remove:function(b,c,d,e){return a.one(b,c).remove(d,e)},postViaApi:function(b,c,d){return a.withConfig(function(a){a.setBaseUrl("/api/v1")}).all(b).post(c,d)},postFormDataViaApi:function(d,e){return a.withConfig(function(a){a.setBaseUrl("/api/v1")}).all(d).withHttpConfig({transformRequest:b.identity}).post(e,c,{"Content-Type":c})},getViaApi:function(b,d,e){return e===c?(e=d,e&&!_.isObject(e.data)&&(e.data=encodeURIComponent(JSON.stringify(e.data))),a.withConfig(function(a){a.setBaseUrl("/api/v1")}).one(b).get(e)):(e&&!_.isObject(e.data)&&(e.data=encodeURIComponent(JSON.stringify(e.data))),a.withConfig(function(a){a.setBaseUrl("/api/v1")}).all(b).customGET(d,e))},setAuthTokenHeader:function(b){e.authToken=b,a.setDefaultHeaders({Authorization:b})}};return e}]),b.module("services.helper",[]).factory("helper",function(){return{runFnc:function(a,b){"function"==typeof a&&a(b)},getParamRnd:function(a){var b=(new Date).getTime();return(a?a.indexOf("?")>-1?"&":"?":"")+"t="+b},log:function(a,b){console.log(a)},getUrlParams:function(a){var b="";for(var d in a)d&&a[d]!==c&&null!==a[d]&&(b+=(""!==b?"&":"")+d+"="+a[d]);return b},fromNow:function(a){var b=Math.floor((new Date-new Date(a))/1e3),c=Math.floor(b/31536e3);return c>1?c+" năm":(c=Math.floor(b/2592e3))>1?c+" tháng":(c=Math.floor(b/86400))>1?c+" ngày":(c=Math.floor(b/3600))>1?c+" giờ":(c=Math.floor(b/60),c>1?c+" phút":Math.floor(b)+" giây")}}}),b.module("services",["services.api","services.storage","services.helper"]),b.module("app.spinner",[]).factory("loadingSpinnerService",["$rootScope",function(a){return{spin:function(b){a.$broadcast("loading-spinner:spin",b)},stop:function(b){a.$broadcast("loading-spinner:stop",b)}}}]).directive("loadingSpinner",["$window",function(a){return{scope:!0,link:function(c,d,e){c.spinner=null;c.key=!!b.isDefined(e.spinnerKey)&&e.spinnerKey,c.startActive=b.isDefined(e.spinnerStartActive)?e.spinnerStartActive:!c.key,c.spin=function(){c.spinner&&($(".spinner-background").show(),c.spinner.spin(d[0]))},c.stop=function(){c.spinner&&($(".spinner-background").hide(),c.spinner.stop())},c.$watch(e.loadingSpinner,function(b){c.stop(),b={lines:12,length:8,width:3,radius:15,corners:1,rotate:0,direction:1,color:"#fff",speed:1.5,trail:50,shadow:!1,hwaccel:!0,top:"50%",left:"50%"},c.spinner=new a.Spinner(b),c.key&&!c.startActive||c.spinner.spin(d[0])},!0),c.$on("loading-spinner:spin",function(a,b){b===c.key&&c.spin()}),c.$on("loading-spinner:stop",function(a,b){b===c.key&&c.stop()}),c.$on("$destroy",function(){c.stop(),c.spinner=null})}}}]),b.module("services.storage",[]).factory("storageService",["$cookies",function(a){return{getItem:function(a,b){var d,e=localStorage.getItem(a);if(e&&"string"!==b)try{e=JSON.parse(e)}catch(a){e=c}return e&&(d=e.o&&e.o.expires&&new Date(e.o.expires).getTime()<(new Date).getTime()?c:e.d),d},setItem:function(a,b,c){return b=JSON.stringify({d:b,o:c}),localStorage.setItem(a,b)},removeItem:function(a,b){return localStorage.removeItem(a)},clear:function(){return localStorage.clear()}}}]),b.module("app.utils",[]).factory("utils",["$filter","$q",function(d,e){var f={_:{remove:function(a,b){return _.without(a,_.findWhere(a,b))}},dateToUTC:function(a){var b=a.split(" ");return b[0]+"T"+b[1]},dateToShort:function(a){if(a){return a.split(" ")[0]}return""},checkDay:function(a){var b=new Date,c=new Date(a);return b.getYear()===c.getYear()&&b.getMonth()===c.getMonth()&&b.getDate()===c.getDate()},checkWeek:function(a){var b=new Date,c=b.getDay(),d=b.getDate()-c+(0===c?-6:1),e=new Date(b.setDate(d)),f=new Date(a),g=new Date(f.getYear(),f.getMonth(),f.getDate())-new Date(e.getYear(),e.getMonth(),e.getDate()),h=Math.ceil(g/864e5);return h>=0&&h<7},checkMonth:function(a){var b=new Date,c=new Date(a);return c.getYear()===b.getYear()&&c.getMonth()===b.getMonth()},checkYear:function(a){var b=new Date;return new Date(a).getYear()===b.getYear()},sort:function(a,e){if(b.isArray(a)){return d("orderBy")(a,e).filter(function(a){return a!==c})}return[]},sort2:function(a,b,c){a.sort(function(a,c){return a[b]>c[b]?1:-1}),c&&a.reverse()},sortAdvance:function(a,c,d){var e=[];return b.forEach(a,function(a){e.push(a)}),e.sort(function(a,b){return a[c]>b[c]?1:-1}),d&&e.reverse(),e},formatDate:function(a){return a.getFullYear()+"-"+f.Lz(a.getMonth()+1)+"-"+f.Lz(a.getDate())},modified:function(a){if(!a)return"";var b=new Date(a),c=new Date,d="";if(b.getYear()<c.getYear()){var e=c.getYear()-b.getYear();d=e+" year"+(e>1?"s":"")}else if(b.getMonth()<c.getMonth()){var f=c.getMonth()-b.getMonth();d=f+" month"+(f>1?"s":"")}else if(b.getDate()<c.getDate()){var g=c.getDate()-b.getDate();d=g+" day"+(g>1?"s":"")}else if(b.getHours()<c.getHours()){var h=c.getHours()-b.getHours();d=h+" hour"+(h>1?"s":"")}else if(b.getMinutes()<c.getMinutes()){var i=c.getMinutes()-b.getMinutes();d=i+" minute"+(i>1?"s":"")}else{var j=c.getSeconds()-c.getSeconds();d=j+" second"+(j>1?"s":"")}return d+" ago"},Lz:function(a){return(a<0||a>=10?"":"0")+a},getWeekNumber:function(a){a=new Date(+a),a.setHours(0,0,0),a.setDate(a.getDate()+4-(a.getDay()||7));var b=new Date(a.getFullYear(),0,1);return Math.ceil(((a-b)/864e5+1)/7)},getDateFormYWD:function(a,b,c){var d=new Date(+a,0,4);if(isNaN(d))return!1;var e=d.getDay()||7;return d.setDate(d.getDate()+7*(b-1)+(c-e)),d},getDateName:function(a){return["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"][new Date(a).getDay()]},getMonthName:function(a){return["January","February","March","April","May","June","July","August","September","October","November","December"][new Date(a).getMonth()]},isInteger:function(a){return"[object Array]"!==Object.prototype.toString.call(a)&&/^[\d]+$/.test(a)},clone:function(a){function b(a,d){for(var e in d)"object"==typeof d[e]?null===d[e]?a[e]=null:(d[e].length!==c?a[e]=[]:a[e]={},b(a[e],d[e])):a[e]=d[e]}var d={};return b(d,a),d},fileTypes:["JPG","JPEG","PNG","GIF","TIF","PDF","DOC","DOCX","XLS","XLSX"],checkFileType:function(a){for(var b=["jpg","jpeg","png","gif","tif"],c=0;c<b.length;c++)if(-1!==a.name.toLowerCase().indexOf(b[c].toLowerCase()))return"picture";return"doc"},base64Encode:function(a){for(var b,c,d,e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",f="",g=0,h=a.length;g<h;){if(b=255&a.charCodeAt(g++),g==h){f+=e.charAt(b>>2),f+=e.charAt((3&b)<<4),f+="==";break}if(c=a.charCodeAt(g++),g==h){f+=e.charAt(b>>2),f+=e.charAt((3&b)<<4|(240&c)>>4),f+=e.charAt((15&c)<<2),f+="=";break}d=a.charCodeAt(g++),f+=e.charAt(b>>2),f+=e.charAt((3&b)<<4|(240&c)>>4),f+=e.charAt((15&c)<<2|(192&d)>>6),f+=e.charAt(63&d)}return f},formatNumber:function(a){return null!==a&&a?(a=parseFloat(a),a<10?"0"+a:a):"00"},getYears:function(){for(var a=(new Date).getFullYear()+3,b=[],c=2003;c<=a;c++)b.push({year:c.toString()});return b},isNullOrUndefined:function(a){return!(!b.isUndefined(a)&&null!==a)},convertTime:function(a){var b=Math.floor(a/60),c=a%60,d="AM";return b>12&&(b-=12,d="PM"),0===b&&(b=12,d="AM"),1===c.toString().length&&(c="0"+c.toString()),b.toString()+":"+c.toString()+" "+d.toString()},revertTime:function(a){var b=a.split(/[.: ]/),c=parseInt(b[0]),d=parseInt(b[1]),e=b[2];return"PM"===e&&(c+=12),12===c&&"AM"===e&&(c=0),60*c+d},validateEmail:function(a){return/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(a)},encodeURIComponent:function(a){if("string"==typeof a)return encodeURIComponent(a);if("object"==typeof a){if(b.isArray(a)){for(var c=[],d=0;d<a.length;d++)c.push(f.encodeURIComponent(a[d]));return c}for(var e in a)a[e]=f.encodeURIComponent(a[e]);return a}return a},dataURItoBlob:function(a){var b;b=a.split(",")[0].indexOf("base64")>=0?atob(a.split(",")[1]):unescape(a.split(",")[1]);for(var c=a.split(",")[0].split(":")[1].split(";")[0],d=new Uint8Array(b.length),e=0;e<b.length;e++)d[e]=b.charCodeAt(e);return new Blob([d],{type:c})},resizeImage:function(b,c){var d=e.defer();if(c=c||1170,a.File&&a.FileReader&&a.FileList&&a.Blob){var g=b.type,h=new FileReader;h.onloadend=function(){var a=new Image;a.src=h.result,a.onload=function(){var b=a.width,e=a.height;b>e?b>c&&(e*=c/b,b=c):e>c&&(b*=c/e,e=c);var h=document.createElement("canvas");h.width=b,h.height=e,h.getContext("2d").drawImage(this,0,0,b,e);var i=h.toDataURL(g),j=f.dataURItoBlob(i);d.resolve(j)}},h.readAsDataURL(b)}else d.resolve(b);return d.promise},replaceSpace:function(a){return a.replace(/ +(?= )/g,"").replace(/ /g,"-")},revertSpace:function(a){return a.replace(/-/g," ")},replaceFolderName:function(a){return this.replaceSpace(a).toLowerCase()},toFormData:function(a){var b=new FormData;for(var c in a)if(a.hasOwnProperty(c)){var d=a[c];if("file"===c&&d)b.append(c,d,d.name);else if("files"===c)for(var e=0;e<d.length;e++)d[e]&&b.append("files[]",d[e],d[e].name2?d[e].name2:d[e].name);else _.isArray(d)?b.append(c,JSON.stringify(d)):_.isObject(d)?b.append(c,JSON.stringify(d)):_.isBoolean(d)?b.append(c,d?"1":"0"):b.append(c,d)}return b},timeRanges:function(){for(var a=[],b=0;b<=23;b++)for(var c=0;c<=59;c+=15){var d=b.toString(),e=c.toString();b<10&&(d="0"+d),c<10&&(e="0"+e),a.push(d+":"+e)}return a},fallbackCopyTextToClipboard:function(a){var b=document.createElement("textarea");b.value=a,document.body.appendChild(b),b.focus(),b.select();try{document.execCommand("copy")}catch(a){}document.body.removeChild(b)},copyTextToClipboard:function(a){if(!navigator.clipboard)return void this.fallbackCopyTextToClipboard(a);navigator.clipboard.writeText(a).then(function(){},function(a){})},joinText:function(a,b){var c=[];return b=b||"name",_.forEach(a,function(a){c.push(a[b])}),c.join(", ")},resetForm:function(a){for(var b in a.$error)a.$error.hasOwnProperty(b)&&a.$setValidity(b,!0);a.$setPristine(!0)}};return f}]),b.module("theme.directives",[]).directive("passwordVerify",function(){return{require:"ngModel",scope:{passwordVerify:"="},link:function(a,b,d,e){a.$watch(function(){var b;return(a.passwordVerify||e.$viewValue)&&(b=a.passwordVerify+"_"+e.$viewValue),b},function(b){return b?a.passwordVerify!==e.$viewValue?(e.$setValidity("passwordVerify",!1),c):(e.$setValidity("passwordVerify",!0),e.$viewValue):(e.$setValidity("passwordVerify",!0),c)})}}}).directive("ngCompare",function(){return{require:"ngModel",link:function(a,c,d,e){var f=document.getElementsByName(d.ngCompare)[0];compareEl=b.element(f),c.on("keyup",function(){if(""!==compareEl.val()){var b=c.val()===compareEl.val();e.$setValidity("compare",b),a.$digest()}}),compareEl.on("keyup",function(){if(""!==c.val()){var b=c.val()===compareEl.val();e.$setValidity("compare",b),a.$digest()}})}}}).directive("backToTop",function(){return{restrict:"AE",link:function(a,b,c){b.click(function(a){$("body").scrollTop(0)})}}}).directive("icheck",["$timeout",function(a){return{require:"?ngModel",link:function(b,c,d,e){return a(function(){var a=c.parent("label");a.length&&a.addClass("icheck-label");var f;return f=d.value,b.$watch(d.ngModel,function(a){$(c).iCheck("update")}),$(c).iCheck({checkboxClass:"icheckbox_minimal",radioClass:"iradio_minimal"}).on("ifChanged",function(a){if("checkbox"===$(c).attr("type")&&d.ngModel&&b.$apply(function(){return e.$setViewValue(a.target.checked)}),"radio"===$(c).attr("type")&&d.ngModel)return b.$apply(function(){return e.$setViewValue(f)})})})}}}]),
b.module("theme.services",[]).value("fileScripts",[]).service("lazyLoad",["$q","fileScripts",function(a,c){var d=a.defer();this.load=function(a){var e=[];return b.forEach(a,function(a){a.indexOf(".js")>-1&&-1===c.indexOf(a)&&e.push(new Promise(function(b){!function(d,e){e=d.createElement("script"),e.type="text/javascript",e.async=!0,e.onload=function(){b("success")},e.onerror=function(){b("fail")},e.src=a,d.getElementsByTagName("head")[0].appendChild(e),c.push(a)}(document)}))}),e.length?Promise.all(e).then(function(a){d.resolve(a)}):d.resolve([]),d.promise}}]).filter("safe_html",["$sce",function(a){return function(b){return a.trustAsHtml(b)}}]).filter("trustedUrl",["$sce",function(a){return function(b){return b?a.trustAsResourceUrl(b):""}}]).filter("firstLetter",function(){return function(a){return a?a.charAt(0).toUpperCase()+a.substr(1).toLowerCase():""}}).filter("formatN",function(){return function(b,c){return c*=1,b*=1,a.isNaN(b)?"":(a.isNaN(c)&&(c=0),b.format("n"+c))}}).filter("numberLg",["$filter",function(b){return function(c){if(a.isNaN(c))return"";return b("number")(c,0)}}]).filter("numberPrice",["$filter",function(b){return function(c){if(a.isNaN(c))return"";"string"==typeof c&&(c=parseFloat(c));var d="";return c>=1e9?(c=Math.floor(c/1e9),d="Tỷ"):c>=1e8&&(c=Math.floor(c/1e8),d="Tr"),b("number")(c,0).toString()+d}}]).filter("formatNUnit",function(){return function(b,c,d){return c*=1,b*=1,a.isNaN(b)?"":(a.isNaN(c)&&(c=0),b.format("n"+c)+d)}}).filter("formatNK",function(){return function(b,c){var d,e=["k","M","G","T","P","E"];return a.isNaN(b)?"":b<1e3?b:(d=Math.floor(Math.log(b)/Math.log(1e3)),(b/Math.pow(1e3,d)).toFixed(c)+e[d-1])}}).filter("formatPoint",function(){return function(b){return b*=1,a.isNaN(b)?"":b>=10?"10":b>0?b.format("n1"):"_._"}}).filter("formatDistance",function(){return function(b){if(null===b||!b)return"";var c=1*b;return a.isNaN(c)||!c?"":c.toFixed(1)+"km"}}).filter("formatCategories",function(){return function(a){if(!a||!_.isArray(a)||_.isArray(a)&&0===a.length)return"";var b=a[0].name;return a.length>1&&(b+=", "+a[1].name),b}}),b.module("theme",["theme.services","theme.directives"]);var e=function(){var a=/d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZ]|[W]|"[^"]*"|'[^']*'/g,b=/\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,d=/[^-+\dA-Z]/g,f=function(a,b){for(a=String(a),b=b||2;a.length<b;)a="0"+a;return a};return function(g,h,i){var j=e;if(1!=arguments.length||"[object String]"!=Object.prototype.toString.call(g)||/\d/.test(g)||(h=g,g=c),g=g?new Date(g):new Date,isNaN(g))throw new SyntaxError("invalid date");h=String(j.masks[h]||h||j.masks.default),"UTC:"===h.slice(0,4)&&(h=h.slice(4),i=!0);var k=i?"getUTC":"get",l=g[k+"Date"](),m=g[k+"Day"](),n=g[k+"Month"](),o=g[k+"FullYear"](),p=g[k+"Hours"](),q=g[k+"Minutes"](),r=g[k+"Seconds"](),s=g[k+"Milliseconds"](),t=i?0:g.getTimezoneOffset(),u={d:l,dd:f(l),ddd:j.i18n.dayNames[m],dddd:j.i18n.dayNames[m+7],m:n+1,mm:f(n+1),mmm:j.i18n.monthNames[n],mmmm:j.i18n.monthNames[n+12],yy:String(o).slice(2),yyyy:o,h:p%12||12,hh:f(p%12||12),H:p,HH:f(p),M:q,MM:f(q),s:r,ss:f(r),l:f(s,3),L:f(s>99?Math.round(s/10):s),t:p<12?"a":"p",tt:p<12?"am":"pm",T:p<12?"A":"P",TT:p<12?"AM":"PM",Z:i?"UTC":(String(g).match(b)||[""]).pop().replace(d,""),o:(t>0?"-":"+")+f(100*Math.floor(Math.abs(t)/60)+Math.abs(t)%60,4),S:["th","st","nd","rd"][l%10>3?0:(l%100-l%10!=10)*l%10],W:g.getWeekNumber()};return h.replace(a,function(a){return a in u?u[a]:a.slice(1,a.length-1)})}}();e.masks={default:"ddd mmm dd yyyy HH:MM:ss",shortDate:"dd/mm/yyyy",mediumDate:"mmm d, yyyy",longDate:"mmmm d, yyyy",fullDate:"dddd, mmmm d, yyyy",shortTime:"h:MM TT",mediumTime:"h:MM:ss TT",longTime:"h:MM:ss TT Z",isoDate:"yyyy-mm-dd",isoTime:"HH:MM:ss",isoDateTime:"yyyy-mm-dd'T'HH:MM:ss",isoUtcDateTime:"UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"},e.i18n={dayNames:["CN","T2","T3","T4","T5","T6","T7","Chủ Nhật","Thứ 2","Thứ 3","Thứ 4","Thứ 5","Thứ 6","Thứ 7"],monthNames:["Thg1","Thg2","Thg3","Thg4","Thg5","Thg6","Thg7","Thg8","Thg9","Thg10","Thg11","Thg12","Tháng 1","Tháng 2","Tháng 3","Tháng 4","Tháng 5","Tháng 6","Tháng 7","Tháng 8","Tháng 9","Tháng 10","Tháng 11","Tháng 12"]},Date.prototype.format=function(a,b){return e(this,a,b)},Date.prototype.getWeekNumber=function(){var a=new Date(Date.UTC(this.getFullYear(),this.getMonth(),this.getDate())),b=a.getUTCDay()||7;a.setUTCDate(a.getUTCDate()+4-b);var c=new Date(Date.UTC(a.getUTCFullYear(),0,1));return Math.ceil(((a-c)/864e5+1)/7)},b.module("templates-app",["dlgDocument/dlgDocument.tpl.html","dlgDocument/dlgInfoDownload.tpl.html","dlgInfo/dlgInfo.tpl.html","dlgMap/dlgMap.tpl.html","dlgRecruit/dlgRecruit.tpl.html","dlgReview/dlgReview.tpl.html","dlgVideo/dlgVideo.tpl.html","modals/alert/alert.tpl.html","modals/error/error.tpl.html","modals/warning/warning.tpl.html"]),b.module("dlgDocument/dlgDocument.tpl.html",[]).run(["$templateCache",function(a){a.put("dlgDocument/dlgDocument.tpl.html",'<div class="modal-header border-bottom-0">\n  \x3c!--<h5 class="modal-title text-center text-primary" ng-bind-html="info.name|safe_html"></h5>--\x3e\n  <div class="modal-title text-center" ng-bind-html="titleDocument|safe_html"></div>\n  <button type="button" class="close cus-close" data-dismiss="modal" aria-label="Close">\n    <span aria-hidden="true" ng-click="close()">&times;</span>\n  </button>\n</div>\n<div class="modal-body">\n  <div class="row justify-content-center">\n    <div class="col-6 col-md-4 px-2 px-lg-5" ng-repeat="item in vm.info.documents">\n      <div class="block-document mb-5">\n        <a ng-click="saveInfo(item)">\n          <span class="block-img img-document  border-radius-3">\n            <span class="img"><span class="embed-responsive embed-responsive-1by1 bg-center" style="background-image: url(\'{{ item.thumb_url }}\')"><span class="embed-responsive-item"></span></span></span>\n          </span>\n          <span class="name-product text-center mt-4"><h5 class=" limit-text-2" ng-bind-html="item.name|safe_html"></h5></span>\n        </a>\n      </div>\n    </div>\n  </div>\n</div>')}]),b.module("dlgDocument/dlgInfoDownload.tpl.html",[]).run(["$templateCache",function(a){a.put("dlgDocument/dlgInfoDownload.tpl.html",'<div class="modal-header border-bottom-0">\n  \x3c!--<h5 class="modal-title text-center text-primary" ng-bind-html="info.name|safe_html"></h5>--\x3e\n  <div class="modal-title text-center w-100 font-weight-bold">{{ langText.fillform }}</div>\n</div>\n<div class="modal-body">\n  <div class="d-flex justify-content-center">\n    <form name="form" novalidate>\n      <div class="form-group" ng-class="{\'has-error\': form.phone_number.$invalid && form.phone_number.$touched}">\n        <input name="phone_number" type="number" ng-model="params.phone_number" class="form-control" placeholder="Phone" required>\n      </div>\n      <div class="form-group" ng-class="{\'has-error\': form.email.$invalid && form.email.$touched}">\n        <input name="email" type="email" ng-model="params.email" class="form-control" placeholder="Email" required>\n      </div>\n      <div class="row">\n        <div class="form-group col-6">\n          <button type="button" class="close btn btn-success text-center" ng-click="close()"><span class="icon back"></span>{{ langText.backform }}</button>\n        </div>\n        <div class="form-group col-6">\n          <button type="button" class="close btn btn-primary text-center" ng-click="submit(form)"><span>{{ langText.download }}</span><span class="icon icon-download"></span></button>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>')}]),b.module("dlgInfo/dlgInfo.tpl.html",[]).run(["$templateCache",function(a){a.put("dlgInfo/dlgInfo.tpl.html",'<div class="modal-header">\n  <h5 class="modal-title" ng-bind-html="info.name|safe_html"></h5>\n  <button type="button" class="close cus-close" data-dismiss="modal" aria-label="Close">\n    <span aria-hidden="true" ng-click="close()">&times;</span>\n  </button>\n</div>\n<div class="modal-body">\n  <youtube-iframe ng-if="info.youtubeId" yid="info.youtubeId"></youtube-iframe>\n  <div class="desc-modal" ng-if="info.description" ng-bind-html="info.description|safe_html"></div>\n</div>')}]),b.module("dlgMap/dlgMap.tpl.html",[]).run(["$templateCache",function(a){a.put("dlgMap/dlgMap.tpl.html",'<div class="modal-body">\n  <a class="close cus-close"><span ng-click="close()">&times;</span></a>\n  <div class="column_attr clearfix" style="">\n    <div class="google-map-wrapper no_border">\n      <div class="google-map" style="width:100%; height:400px;" google-map="info">&nbsp;</div>\n    </div>\n  </div>\n</div>')}]),b.module("dlgRecruit/dlgRecruit.tpl.html",[]).run(["$templateCache",function(a){a.put("dlgRecruit/dlgRecruit.tpl.html",'<div class="modal-header border-bottom-0 text-center pt-5">\n  <h3 class="modal-title text-center text-primary w-100 font-weight-bold">{{ langText.applyform }}</h3>\n</div>\n<div class="modal-body">\n  <div class="d-flex justify-content-center">\n    <form name="form" novalidate class="w-100" enctype="multipart/form-data" role="form"  accept-charset="utf-8">\n      <input type="hidden" name="recruit_id" ng-model="info.id">\n      <div class="form-group row">\n      <label class="d-flex align-items-center col-3 mb-0">Vị trí</label>\n      <div class="col-9">\n        <input type="text" value="{{ info.name }}" disabled class="form-control">\n      </div>\n      </div>\n      <div class="form-group row" ng-class="{\'has-error\': form.name.$invalid&&envData.showValid}">\n        <label class="d-flex align-items-center col-3 mb-0">{{ langText.fullname }}</label>\n        <div class="col-9">\n        <input name="name" type="text" ng-model="params.name" class="form-control" required>\n        </div>\n      </div>\n      <div class="form-group row" ng-class="{\'has-error\': form.email.$invalid&&envData.showValid}">\n        <label class="d-flex align-items-center col-3 mb-0">{{ langText.email }}</label>\n        <div class="col-9">\n        <input name="email" type="email" ng-model="params.email" class="form-control" required>\n        </div>\n      </div>\n      <div class="form-group row" ng-class="{\'has-error\': form.phone.$invalid &&envData.showValid}">\n        <label class="d-flex align-items-center col-3 mb-0">{{ langText.phone }}</label>\n        <div class="col-9">\n        <input name="phone" type="number" ng-model="params.phone" class="form-control" required>\n        </div>\n      </div>\n      <div class="form-group row">\n        <label class="d-flex align-items-center col-3 mb-0">{{ langText.birthday }}</label>\n        <span class="col-9 col-md-5" ng-class="{\'has-error\': form.birthday.$invalid&&envData.showValid}">\n        <input name="birthday" type="date" ng-model="params.birthday" class="form-control w-100" required>\n        </span>\n        <label class="d-flex align-items-center col-3 col-md-2 mb-0 justify-content-md-end mt-4 mt-md-0">{{ langText.gender }}</label>\n        <div class="col-9 col-md-2 pl-md-0 mt-4 mt-md-0">\n        <select name="gender" id="" class="form-control pr-0" ng-model="params.gender" required>\n          <option value="1">{{ langText.male }}</option>\n          <option value="2">{{ langText.female }}</option>\n        </select>\n        </div>\n      </div>\n      <div class="form-group row">\n        <label class="d-flex align-items-center col-3 mb-0">{{ langText.linkportfolio }}</label>\n        <div class="col-9">\n        <input name="portfolio" type="text" ng-model="params.portfolio" class="form-control">\n        </div>\n      </div>\n      <div class="form-group row" ng-class="{\'has-error\': form.filename.$invalid&&envData.showValid}">\n        <input type="hidden" name="filename" ng-model="params.filename" required>\n        <label class="d-flex align-items-center col-3 mb-0">{{ langText.filecv }}</label>\n        <div class="col-9">\n          <div class="custom-input-file">\n            <input name="file" type="file" onchange="angular.element(this).scope().change(this)" class="form-control" accept=\'.doc,.docx,.pdf,.png,.jpg,.svg\'>\n            <i class="fa fa-paperclip"></i> <span class="name-file" ng-bind-html="params.filename|safe_html"></span>\n          </div>\n        </div>\n      </div>\n      <div class="row justify-content-between no-gutters">\n        <div class="form-group col">\n          <a href="{{ downloadForm }}" target="_blank" class="download-form btn btn-primary text-center"><span class="pr-3">{{ langText.downform }}</span><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" version="1.1" width="25" height="25" x="0" y="0" viewBox="0 0 488 488" style="enable-background:new 0 0 25 25" xml:space="preserve" class=""><g><g xmlns="http://www.w3.org/2000/svg"><g><g><path d="M460,319.392c-4.418,0-8,3.582-8,8V472H36V327.392c0-4.418-3.582-8-8-8s-8,3.582-8,8V480c0,4.418,3.582,8,8,8h432     c4.418,0,8-3.582,8-8V327.392C468,322.974,464.418,319.392,460,319.392z" fill="#ffffff" data-original="#000000" style="" class=""/><path d="M238.344,405.656c3.12,3.128,8.186,3.135,11.314,0.014c0.005-0.005,0.01-0.01,0.014-0.014l104-104     c3.07-3.178,2.982-8.242-0.196-11.312c-3.1-2.995-8.016-2.995-11.116,0L252,380.688V8c0-4.418-3.582-8-8-8s-8,3.582-8,8v372.688     l-90.344-90.344c-3.178-3.07-8.242-2.982-11.312,0.196c-2.994,3.1-2.994,8.015,0,11.116L238.344,405.656z" fill="#ffffff" data-original="#000000" style="" class=""/></g></g></g></a>\n        </div>\n        <div class="form-group col text-right">\n          <button type="button" class="close btn btn-primary text-center px-4" ng-click="submit(form)" ng-disabled="envData.submitted"><span><span class="spinner-border spinner-border-sm" ng-if="envData.submitted"></span>{{ langText.btnapply }}</span></button>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>')}]),b.module("dlgReview/dlgReview.tpl.html",[]).run(["$templateCache",function(a){a.put("dlgReview/dlgReview.tpl.html",'<style>\n  .modal-content {\n    z-index: -2;\n  }\n  /*.rate:not(:checked) > input {*/\n    /*position: absolute;*/\n    /*top: -9999px;*/\n  /*}*/\n  /*.rate:not(:checked) > label {*/\n    /*float: right;*/\n    /*width: 1em;*/\n    /*overflow: hidden;*/\n    /*white-space: nowrap;*/\n    /*cursor: pointer;*/\n    /*font-size: 45px;*/\n    /*color: #ccc;*/\n  /*}*/\n  /*.rate:not(:checked) > label:before {*/\n    /*content: \'★ \';*/\n  /*}*/\n  /*.rate > input:checked ~ label {*/\n    /*color: #ffc700;*/\n  /*}*/\n  /*.rate:not(:checked) > label:hover,*/\n  /*.rate:not(:checked) > label:hover ~ label {*/\n    /*color: #deb217;*/\n  /*}*/\n  /*.rate > input:checked + label:hover,*/\n  /*.rate > input:checked + label:hover ~ label,*/\n  /*.rate > input:checked ~ label:hover,*/\n  /*.rate > input:checked ~ label:hover ~ label,*/\n  /*.rate > label:hover ~ input:checked ~ label {*/\n    /*color: #c59b08;*/\n  /*}*/\n\n  .image-upload {\n    width: 100px;\n    height: 100px;\n  }\n  .image-upload>input {\n    display: none;\n  }\n  .image-upload>label, .upload-icon {\n    width: 100px;\n    height: 100px;\n  }\n  .upload-icon {\n    border: 1px solid #E5E5E5;\n    background: #E5E5E5;\n  }\n  .upload-icon .icon {\n    width: 60px;\n    height: 60px;\n    margin: 19px;\n    cursor: pointer;\n  }\n\n  .warning-note {\n    font-size: 11px;\n    color: #A5A5A5;\n  }\n  .close {\n    padding: 0 10px 0 0 !important;\n  }\n  @media (max-width: 767px) {\n    .product-info {\n      display: none;\n    }\n  }\n</style>\n<div class="modal-header border-bottom-0 text-center pt-5">\n  <h3 class="modal-title text-center w-100 font-weight-bold text-uppercase">{{ text_product_review?text_product_review:\'Đánh giá sản phẩm\' }}</h3>\n  <button type="button" class="close btn" data-dismiss="modal" aria-label="Close" ng-click="close()" style="font-size: 25px">\n    <span aria-hidden="true">&times;</span>\n  </button>\n</div>\n<div class="modal-body">\n  <div class="d-flex justify-content-center">\n    <form name="form" novalidate class="w-100" enctype="multipart/form-data" role="form"  accept-charset="utf-8">\n      <input type="hidden" name="product_id" ng-model="info.id">\n      <div class="row justify-content-center flex-column align-items-center product-info">\n        <div class="item_img" style="width: 200px;">\n          <div class="embed-responsive embed-responsive-{{ properties.imgFrame?properties.imgFrame:\'1by1\' }} bg-cover" data-src="{{ info.raw_url }}" style="background-image: url(\'{{ info.raw_url }}\');"></div>\n        </div>\n        <span class="mt-3">{{ info.name }}</span>\n      </div>\n      <div class="form-group row justify-content-center" ng-class="{\'has-error\': form.ratingStar.$invalid &&envData.showValid}">\n        <div class="rating" style="--percent: 0%; font-size: 40px">\n          <div class="percent">\n            <span class="fa fa-star"></span>\n            <span class="fa fa-star"></span>\n            <span class="fa fa-star"></span>\n            <span class="fa fa-star"></span>\n            <span class="fa fa-star"></span>\n          </div>\n          <div>\n            <span class="fa fa-star-o"></span>\n            <span class="fa fa-star-o"></span>\n            <span class="fa fa-star-o"></span>\n            <span class="fa fa-star-o"></span>\n            <span class="fa fa-star-o"></span>\n          </div>\n        </div>\n        \x3c!--<div class="rate">--\x3e\n        \x3c!--<input type="radio" id="star5" name="rate" value="5" />--\x3e\n        \x3c!--<label for="star5" title="text">5 stars</label>--\x3e\n        \x3c!--<input type="radio" id="star4" name="rate" value="4" />--\x3e\n        \x3c!--<label for="star4" title="text">4 stars</label>--\x3e\n        \x3c!--<input type="radio" id="star3" name="rate" value="3" />--\x3e\n        \x3c!--<label for="star3" title="text">3 stars</label>--\x3e\n        \x3c!--<input type="radio" id="star2" name="rate" value="2" />--\x3e\n        \x3c!--<label for="star2" title="text">2 stars</label>--\x3e\n        \x3c!--<input type="radio" id="star1" name="rate" value="1" />--\x3e\n        \x3c!--<label for="star1" title="text">1 star</label>--\x3e\n        \x3c!--</div>--\x3e\n      </div>\n      <div class="form-group flex-column" ng-class="{\'has-error\': form.ratingComment.$invalid &&envData.showValid}">\n        <label class="font-weight-bold">Đánh giá của bạn</label>\n        <div class="">\n          <textarea name="ratingComment" ng-model="params.ratingComment" class="form-control" placeholder="Sản phẩm tuyệt vời, giao hàng nhanh, đóng gói cẩn thận" required rows="6"></textarea>\n        </div>\n      </div>\n      <div class="form-group flex-column" ng-class="{\'has-error\': form.filename.$invalid &&envData.showValid}">\n        <label class="font-weight-bold">Hình ảnh (Chọn tối đa 10 hình)</label>\n          <input type="hidden" name="filename" ng-model="params.filename" required>\n          <div class="image-upload d-flex justify-content-between">\n            <label for="file-input" class="order-last">\n              <div class="upload-icon d-flex justify-content-center align-items-center">\n                <span class="fa fa-plus" style="color: #8f8f8f"></span>\n              </div>\n            </label>\n            <input name="file" onchange="angular.element(this).scope().change(this)" id="file-input" type="file" accept=\'.png,.jpg\' />\n          </div>\n        <span class="warning-note">*Miharu Beauty không chấp nhãn đánh giá có chứa mã giới thiệu bạn bè (Referral Code).</span>\n      </div>\n      <div class="row justify-content-center no-gutters">\n        <button type="button" class="button button-submit-form text-uppercase font-weight-bold" ng-click="submit(form)" ng-disabled="envData.submitted"><span><span class="spinner-border spinner-border-sm" ng-if="envData.submitted"></span></span>Hoàn tất</button>\n      </div>\n    </form>\n  </div>\n</div>\n')}]),b.module("dlgVideo/dlgVideo.tpl.html",[]).run(["$templateCache",function(a){a.put("dlgVideo/dlgVideo.tpl.html",'<div class="modal-header">\n  <h5 class="modal-title" ng-bind="info.name"></h5>\n  \x3c!--<button type="button" class="close" data-dismiss="modal" aria-label="Close">\n    <span aria-hidden="true" ng-click="close()">&times;</span>\n  </button>--\x3e\n</div>\n<div class="modal-body">\n  <youtube-iframe ng-if="info.youtubeId" yid="info.youtubeId"></youtube-iframe>\n</div>')}]),b.module("modals/alert/alert.tpl.html",[]).run(["$templateCache",function(a){a.put("modals/alert/alert.tpl.html",'<div class="modal-header" ng-if="data.title"><h4 class="modal-title">{{ data.title }}</h4></div>\n<div class="modal-body text-center">\n  <style>\n    .success svg {width: 50px;display: block;margin: auto;}\n    .success .path {stroke-dasharray: 1000;stroke-dashoffset: 0;}\n    .success .path.circle {-webkit-animation: dash 0.9s ease-in-out;animation: dash 0.9s ease-in-out;}\n    .success .path.line {stroke-dashoffset: 1000;-webkit-animation: dash 0.9s 0.35s ease-in-out forwards;animation: dash 0.9s 0.35s ease-in-out forwards;}\n    .success .path.check {stroke-dashoffset: -100;-webkit-animation: dash-check 1.2s 0.5s ease-in-out forwards;animation: dash-check 1.2s 0.5s ease-in-out forwards;}\n    @-webkit-keyframes dash { 0% {stroke-dashoffset: 1000;} 100% {stroke-dashoffset: 0;} }\n    @-webkit-keyframes dash-check { 0% {stroke-dashoffset: -100;} 100% {stroke-dashoffset: 900;} }\n    @keyframes dash-check { 0% {stroke-dashoffset: -100;} 100% {stroke-dashoffset: 900;} }\n\n  </style>\n  <div ng-if="data.summary" class="modal-summary" ng-class="{\'mb-1\':data.message||data.style}">{{ data.summary }}</div>\n  \x3c!--<div ng-if="data.message" class="font-18 font-bold" ng-class="{\'mb-3\':data.style}" ng-bind-html="data.message|safe_html"></div>--\x3e\n  <div class="success">\n    <svg width="50" height="50" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.2 130.2">\n      <circle class="path circle" fill="none" stroke="#73AF55" stroke-width="8" stroke-miterlimit="10" cx="65.1" cy="65.1" r="61"/>\n      <polyline class="path check" fill="none" stroke="#73AF55" stroke-width="8" stroke-linecap="round" stroke-miterlimit="10" points="100.2,40.2 51.5,88.8 29.8,67.5 "/>\n    </svg>\n  </div>\n  <div ng-if="data.style" class="clearfix">\n    <div class="float-right" ng-if="data.style == \'ok\'"><button class="btn btn-primary" ng-click="ok()">Ok</button></div>\n    <div class="float-right" ng-if="data.style == \'yesNo\'">\n      <button class="btn btn-danger" ng-click="ok()">Yes</button>\n      <button class="btn btn-light" ng-click="cancel()">No</button>\n    </div>\n  </div>\n</div>\n')}]),b.module("modals/error/error.tpl.html",[]).run(["$templateCache",function(a){a.put("modals/error/error.tpl.html",'<div class="modal-header">\n  <h4 class="modal-title">Lỗi</h4>\n</div>\n<div class="modal-body">\n  <div class="form-group text-center">\n    <strong>{{ error }}</strong>\n  </div>\n</div>\n<div class="modal-footer">\n  <div class="float-right">\n    <button class="btn btn-primary" data-ng-click="ok()">OK</button>\n  </div>\n</div>\n')}]),b.module("modals/warning/warning.tpl.html",[]).run(["$templateCache",function(a){a.put("modals/warning/warning.tpl.html",'<div class="modal-header" ng-if="title"><h4 class="modal-title">{{ title }}</h4></div>\n<div class="modal-body text-center">\n  <div class="font-18 mb-3 font-bold text-gray" ng-bind-html="message|safe_html"></div>\n  <div class="clearfix">\n    <div class="float-left"><button class="btn btn-light" ng-click="cancel()">Hủy</button></div>\n    <div class="float-right"><button class="btn btn-primary" ng-click="ok()">Xác nhận</button></div>\n  </div>\n</div>\n')}]),b.module("templates-common",[])}(window,window.angular);
/**
 * Swiper 8.0.7
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * https://swiperjs.com
 *
 * Copyright 2014-2022 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: March 4, 2022
 */

!function(e, t) {
  "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).Swiper = t()
}(this, (function() {
  "use strict";

  function e(e) {
    return null !== e && "object" == typeof e && "constructor" in e && e.constructor === Object
  }

  function t(s, a) {
    void 0 === s && (s = {}), void 0 === a && (a = {}), Object.keys(a).forEach((i => {
      void 0 === s[i] ? s[i] = a[i] : e(a[i]) && e(s[i]) && Object.keys(a[i]).length > 0 && t(s[i], a[i])
    }))
  }

  const s = {
    body: {}, addEventListener() {
    }, removeEventListener() {
    }, activeElement: {
      blur() {
      }, nodeName: ""
    }, querySelector: () => null, querySelectorAll: () => [], getElementById: () => null, createEvent: () => ({
      initEvent() {
      }
    }), createElement: () => ({
      children: [], childNodes: [], style: {}, setAttribute() {
      }, getElementsByTagName: () => []
    }), createElementNS: () => ({}), importNode: () => null, location: {hash: "", host: "", hostname: "", href: "", origin: "", pathname: "", protocol: "", search: ""}
  };

  function a() {
    const e = "undefined" != typeof document ? document : {};
    return t(e, s), e
  }

  const i = {
    document: s, navigator: {userAgent: ""}, location: {hash: "", host: "", hostname: "", href: "", origin: "", pathname: "", protocol: "", search: ""}, history: {
      replaceState() {
      }, pushState() {
      }, go() {
      }, back() {
      }
    }, CustomEvent: function() {
      return this
    }, addEventListener() {
    }, removeEventListener() {
    }, getComputedStyle: () => ({getPropertyValue: () => ""}), Image() {
    }, Date() {
    }, screen: {}, setTimeout() {
    }, clearTimeout() {
    }, matchMedia: () => ({}), requestAnimationFrame: e => "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0), cancelAnimationFrame(e) {
      "undefined" != typeof setTimeout && clearTimeout(e)
    }
  };

  function r() {
    const e = "undefined" != typeof window ? window : {};
    return t(e, i), e
  }

  class n extends Array {
    constructor(e) {
      "number" == typeof e ? super(e) : (super(...e || []), function(e) {
        const t = e.__proto__;
        Object.defineProperty(e, "__proto__", {
          get: () => t, set(e) {
            t.__proto__ = e
          }
        })
      }(this))
    }
  }

  function l(e) {
    void 0 === e && (e = []);
    const t = [];
    return e.forEach((e => {
      Array.isArray(e) ? t.push(...l(e)) : t.push(e)
    })), t
  }

  function o(e, t) {
    return Array.prototype.filter.call(e, t)
  }

  function d(e, t) {
    const s = r(), i = a();
    let l = [];
    if (!t && e instanceof n) return e;
    if (!e) return new n(l);
    if ("string" == typeof e) {
      const s = e.trim();
      if (s.indexOf("<") >= 0 && s.indexOf(">") >= 0) {
        let e = "div";
        0 === s.indexOf("<li") && (e = "ul"), 0 === s.indexOf("<tr") && (e = "tbody"), 0 !== s.indexOf("<td") && 0 !== s.indexOf("<th") || (e = "tr"), 0 === s.indexOf("<tbody") && (e = "table"), 0 === s.indexOf("<option") && (e = "select");
        const t = i.createElement(e);
        t.innerHTML = s;
        for (let e = 0; e < t.childNodes.length; e += 1) l.push(t.childNodes[e])
      } else l = function(e, t) {
        if ("string" != typeof e) return [e];
        const s = [], a = t.querySelectorAll(e);
        for (let e = 0; e < a.length; e += 1) s.push(a[e]);
        return s
      }(e.trim(), t || i)
    } else if (e.nodeType || e === s || e === i) l.push(e); else if (Array.isArray(e)) {
      if (e instanceof n) return e;
      l = e
    }
    return new n(function(e) {
      const t = [];
      for (let s = 0; s < e.length; s += 1) -1 === t.indexOf(e[s]) && t.push(e[s]);
      return t
    }(l))
  }

  d.fn = n.prototype;
  const c = {
    addClass: function() {
      for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++) t[s] = arguments[s];
      const a = l(t.map((e => e.split(" "))));
      return this.forEach((e => {
        e.classList.add(...a)
      })), this
    }, removeClass: function() {
      for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++) t[s] = arguments[s];
      const a = l(t.map((e => e.split(" "))));
      return this.forEach((e => {
        e.classList.remove(...a)
      })), this
    }, hasClass: function() {
      for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++) t[s] = arguments[s];
      const a = l(t.map((e => e.split(" "))));
      return o(this, (e => a.filter((t => e.classList.contains(t))).length > 0)).length > 0
    }, toggleClass: function() {
      for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++) t[s] = arguments[s];
      const a = l(t.map((e => e.split(" "))));
      this.forEach((e => {
        a.forEach((t => {
          e.classList.toggle(t)
        }))
      }))
    }, attr: function(e, t) {
      if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;
      for (let s = 0; s < this.length; s += 1) if (2 === arguments.length) this[s].setAttribute(e, t); else for (const t in e) this[s][t] = e[t], this[s].setAttribute(t, e[t]);
      return this
    }, removeAttr: function(e) {
      for (let t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
      return this
    }, transform: function(e) {
      for (let t = 0; t < this.length; t += 1) this[t].style.transform = e;
      return this
    }, transition: function(e) {
      for (let t = 0; t < this.length; t += 1) this[t].style.transitionDuration = "string" != typeof e ? `${e}ms` : e;
      return this
    }, on: function() {
      for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++) t[s] = arguments[s];
      let [a, i, r, n] = t;

      function l(e) {
        const t = e.target;
        if (!t) return;
        const s = e.target.dom7EventData || [];
        if (s.indexOf(e) < 0 && s.unshift(e), d(t).is(i)) r.apply(t, s); else {
          const e = d(t).parents();
          for (let t = 0; t < e.length; t += 1) d(e[t]).is(i) && r.apply(e[t], s)
        }
      }

      function o(e) {
        const t = e && e.target && e.target.dom7EventData || [];
        t.indexOf(e) < 0 && t.unshift(e), r.apply(this, t)
      }

      "function" == typeof t[1] && ([a, r, n] = t, i = void 0), n || (n = !1);
      const c = a.split(" ");
      let p;
      for (let e = 0; e < this.length; e += 1) {
        const t = this[e];
        if (i) for (p = 0; p < c.length; p += 1) {
          const e = c[p];
          t.dom7LiveListeners || (t.dom7LiveListeners = {}), t.dom7LiveListeners[e] || (t.dom7LiveListeners[e] = []), t.dom7LiveListeners[e].push({listener: r, proxyListener: l}), t.addEventListener(e, l, n)
        } else for (p = 0; p < c.length; p += 1) {
          const e = c[p];
          t.dom7Listeners || (t.dom7Listeners = {}), t.dom7Listeners[e] || (t.dom7Listeners[e] = []), t.dom7Listeners[e].push({listener: r, proxyListener: o}), t.addEventListener(e, o, n)
        }
      }
      return this
    }, off: function() {
      for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++) t[s] = arguments[s];
      let [a, i, r, n] = t;
      "function" == typeof t[1] && ([a, r, n] = t, i = void 0), n || (n = !1);
      const l = a.split(" ");
      for (let e = 0; e < l.length; e += 1) {
        const t = l[e];
        for (let e = 0; e < this.length; e += 1) {
          const s = this[e];
          let a;
          if (!i && s.dom7Listeners ? a = s.dom7Listeners[t] : i && s.dom7LiveListeners && (a = s.dom7LiveListeners[t]), a && a.length) for (let e = a.length - 1; e >= 0; e -= 1) {
            const i = a[e];
            r && i.listener === r || r && i.listener && i.listener.dom7proxy && i.listener.dom7proxy === r ? (s.removeEventListener(t, i.proxyListener, n), a.splice(e, 1)) : r || (s.removeEventListener(t, i.proxyListener, n), a.splice(e, 1))
          }
        }
      }
      return this
    }, trigger: function() {
      const e = r();
      for (var t = arguments.length, s = new Array(t), a = 0; a < t; a++) s[a] = arguments[a];
      const i = s[0].split(" "), n = s[1];
      for (let t = 0; t < i.length; t += 1) {
        const a = i[t];
        for (let t = 0; t < this.length; t += 1) {
          const i = this[t];
          if (e.CustomEvent) {
            const t = new e.CustomEvent(a, {detail: n, bubbles: !0, cancelable: !0});
            i.dom7EventData = s.filter(((e, t) => t > 0)), i.dispatchEvent(t), i.dom7EventData = [], delete i.dom7EventData
          }
        }
      }
      return this
    }, transitionEnd: function(e) {
      const t = this;
      return e && t.on("transitionend", (function s(a) {
        a.target === this && (e.call(this, a), t.off("transitionend", s))
      })), this
    }, outerWidth: function(e) {
      if (this.length > 0) {
        if (e) {
          const e = this.styles();
          return this[0].offsetWidth + parseFloat(e.getPropertyValue("margin-right")) + parseFloat(e.getPropertyValue("margin-left"))
        }
        return this[0].offsetWidth
      }
      return null
    }, outerHeight: function(e) {
      if (this.length > 0) {
        if (e) {
          const e = this.styles();
          return this[0].offsetHeight + parseFloat(e.getPropertyValue("margin-top")) + parseFloat(e.getPropertyValue("margin-bottom"))
        }
        return this[0].offsetHeight
      }
      return null
    }, styles: function() {
      const e = r();
      return this[0] ? e.getComputedStyle(this[0], null) : {}
    }, offset: function() {
      if (this.length > 0) {
        const e = r(), t = a(), s = this[0], i = s.getBoundingClientRect(), n = t.body, l = s.clientTop || n.clientTop || 0, o = s.clientLeft || n.clientLeft || 0, d = s === e ? e.scrollY : s.scrollTop, c = s === e ? e.scrollX : s.scrollLeft;
        return {top: i.top + d - l, left: i.left + c - o}
      }
      return null
    }, css: function(e, t) {
      const s = r();
      let a;
      if (1 === arguments.length) {
        if ("string" != typeof e) {
          for (a = 0; a < this.length; a += 1) for (const t in e) this[a].style[t] = e[t];
          return this
        }
        if (this[0]) return s.getComputedStyle(this[0], null).getPropertyValue(e)
      }
      if (2 === arguments.length && "string" == typeof e) {
        for (a = 0; a < this.length; a += 1) this[a].style[e] = t;
        return this
      }
      return this
    }, each: function(e) {
      return e ? (this.forEach(((t, s) => {
        e.apply(t, [t, s])
      })), this) : this
    }, html: function(e) {
      if (void 0 === e) return this[0] ? this[0].innerHTML : null;
      for (let t = 0; t < this.length; t += 1) this[t].innerHTML = e;
      return this
    }, text: function(e) {
      if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
      for (let t = 0; t < this.length; t += 1) this[t].textContent = e;
      return this
    }, is: function(e) {
      const t = r(), s = a(), i = this[0];
      let l, o;
      if (!i || void 0 === e) return !1;
      if ("string" == typeof e) {
        if (i.matches) return i.matches(e);
        if (i.webkitMatchesSelector) return i.webkitMatchesSelector(e);
        if (i.msMatchesSelector) return i.msMatchesSelector(e);
        for (l = d(e), o = 0; o < l.length; o += 1) if (l[o] === i) return !0;
        return !1
      }
      if (e === s) return i === s;
      if (e === t) return i === t;
      if (e.nodeType || e instanceof n) {
        for (l = e.nodeType ? [e] : e, o = 0; o < l.length; o += 1) if (l[o] === i) return !0;
        return !1
      }
      return !1
    }, index: function() {
      let e, t = this[0];
      if (t) {
        for (e = 0; null !== (t = t.previousSibling);) 1 === t.nodeType && (e += 1);
        return e
      }
    }, eq: function(e) {
      if (void 0 === e) return this;
      const t = this.length;
      if (e > t - 1) return d([]);
      if (e < 0) {
        const s = t + e;
        return d(s < 0 ? [] : [this[s]])
      }
      return d([this[e]])
    }, append: function() {
      let e;
      const t = a();
      for (let s = 0; s < arguments.length; s += 1) {
        e = s < 0 || arguments.length <= s ? void 0 : arguments[s];
        for (let s = 0; s < this.length; s += 1) if ("string" == typeof e) {
          const a = t.createElement("div");
          for (a.innerHTML = e; a.firstChild;) this[s].appendChild(a.firstChild)
        } else if (e instanceof n) for (let t = 0; t < e.length; t += 1) this[s].appendChild(e[t]); else this[s].appendChild(e)
      }
      return this
    }, prepend: function(e) {
      const t = a();
      let s, i;
      for (s = 0; s < this.length; s += 1) if ("string" == typeof e) {
        const a = t.createElement("div");
        for (a.innerHTML = e, i = a.childNodes.length - 1; i >= 0; i -= 1) this[s].insertBefore(a.childNodes[i], this[s].childNodes[0])
      } else if (e instanceof n) for (i = 0; i < e.length; i += 1) this[s].insertBefore(e[i], this[s].childNodes[0]); else this[s].insertBefore(e, this[s].childNodes[0]);
      return this
    }, next: function(e) {
      return this.length > 0 ? e ? this[0].nextElementSibling && d(this[0].nextElementSibling).is(e) ? d([this[0].nextElementSibling]) : d([]) : this[0].nextElementSibling ? d([this[0].nextElementSibling]) : d([]) : d([])
    }, nextAll: function(e) {
      const t = [];
      let s = this[0];
      if (!s) return d([]);
      for (; s.nextElementSibling;) {
        const a = s.nextElementSibling;
        e ? d(a).is(e) && t.push(a) : t.push(a), s = a
      }
      return d(t)
    }, prev: function(e) {
      if (this.length > 0) {
        const t = this[0];
        return e ? t.previousElementSibling && d(t.previousElementSibling).is(e) ? d([t.previousElementSibling]) : d([]) : t.previousElementSibling ? d([t.previousElementSibling]) : d([])
      }
      return d([])
    }, prevAll: function(e) {
      const t = [];
      let s = this[0];
      if (!s) return d([]);
      for (; s.previousElementSibling;) {
        const a = s.previousElementSibling;
        e ? d(a).is(e) && t.push(a) : t.push(a), s = a
      }
      return d(t)
    }, parent: function(e) {
      const t = [];
      for (let s = 0; s < this.length; s += 1) null !== this[s].parentNode && (e ? d(this[s].parentNode).is(e) && t.push(this[s].parentNode) : t.push(this[s].parentNode));
      return d(t)
    }, parents: function(e) {
      const t = [];
      for (let s = 0; s < this.length; s += 1) {
        let a = this[s].parentNode;
        for (; a;) e ? d(a).is(e) && t.push(a) : t.push(a), a = a.parentNode
      }
      return d(t)
    }, closest: function(e) {
      let t = this;
      return void 0 === e ? d([]) : (t.is(e) || (t = t.parents(e).eq(0)), t)
    }, find: function(e) {
      const t = [];
      for (let s = 0; s < this.length; s += 1) {
        const a = this[s].querySelectorAll(e);
        for (let e = 0; e < a.length; e += 1) t.push(a[e])
      }
      return d(t)
    }, children: function(e) {
      const t = [];
      for (let s = 0; s < this.length; s += 1) {
        const a = this[s].children;
        for (let s = 0; s < a.length; s += 1) e && !d(a[s]).is(e) || t.push(a[s])
      }
      return d(t)
    }, filter: function(e) {
      return d(o(this, e))
    }, remove: function() {
      for (let e = 0; e < this.length; e += 1) this[e].parentNode && this[e].parentNode.removeChild(this[e]);
      return this
    }
  };

  function p(e, t) {
    return void 0 === t && (t = 0), setTimeout(e, t)
  }

  function u() {
    return Date.now()
  }

  function h(e, t) {
    void 0 === t && (t = "x");
    const s = r();
    let a, i, n;
    const l = function(e) {
      const t = r();
      let s;
      return t.getComputedStyle && (s = t.getComputedStyle(e, null)), !s && e.currentStyle && (s = e.currentStyle), s || (s = e.style), s
    }(e);
    return s.WebKitCSSMatrix ? (i = l.transform || l.webkitTransform, i.split(",").length > 6 && (i = i.split(", ").map((e => e.replace(",", "."))).join(", ")), n = new s.WebKitCSSMatrix("none" === i ? "" : i)) : (n = l.MozTransform || l.OTransform || l.MsTransform || l.msTransform || l.transform || l.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), a = n.toString().split(",")), "x" === t && (i = s.WebKitCSSMatrix ? n.m41 : 16 === a.length ? parseFloat(a[12]) : parseFloat(a[4])), "y" === t && (i = s.WebKitCSSMatrix ? n.m42 : 16 === a.length ? parseFloat(a[13]) : parseFloat(a[5])), i || 0
  }

  function m(e) {
    return "object" == typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1)
  }

  function f(e) {
    return "undefined" != typeof window && void 0 !== window.HTMLElement ? e instanceof HTMLElement : e && (1 === e.nodeType || 11 === e.nodeType)
  }

  function g() {
    const e = Object(arguments.length <= 0 ? void 0 : arguments[0]), t = ["__proto__", "constructor", "prototype"];
    for (let s = 1; s < arguments.length; s += 1) {
      const a = s < 0 || arguments.length <= s ? void 0 : arguments[s];
      if (null != a && !f(a)) {
        const s = Object.keys(Object(a)).filter((e => t.indexOf(e) < 0));
        for (let t = 0, i = s.length; t < i; t += 1) {
          const i = s[t], r = Object.getOwnPropertyDescriptor(a, i);
          void 0 !== r && r.enumerable && (m(e[i]) && m(a[i]) ? a[i].__swiper__ ? e[i] = a[i] : g(e[i], a[i]) : !m(e[i]) && m(a[i]) ? (e[i] = {}, a[i].__swiper__ ? e[i] = a[i] : g(e[i], a[i])) : e[i] = a[i])
        }
      }
    }
    return e
  }

  function v(e, t, s) {
    e.style.setProperty(t, s)
  }

  function w(e) {
    let {swiper: t, targetPosition: s, side: a} = e;
    const i = r(), n = -t.translate;
    let l, o = null;
    const d = t.params.speed;
    t.wrapperEl.style.scrollSnapType = "none", i.cancelAnimationFrame(t.cssModeFrameID);
    const c = s > n ? "next" : "prev", p = (e, t) => "next" === c && e >= t || "prev" === c && e <= t, u = () => {
      l = (new Date).getTime(), null === o && (o = l);
      const e = Math.max(Math.min((l - o) / d, 1), 0), r = .5 - Math.cos(e * Math.PI) / 2;
      let c = n + r * (s - n);
      if (p(c, s) && (c = s), t.wrapperEl.scrollTo({[a]: c}), p(c, s)) return t.wrapperEl.style.overflow = "hidden", t.wrapperEl.style.scrollSnapType = "", setTimeout((() => {
        t.wrapperEl.style.overflow = "", t.wrapperEl.scrollTo({[a]: c})
      })), void i.cancelAnimationFrame(t.cssModeFrameID);
      t.cssModeFrameID = i.requestAnimationFrame(u)
    };
    u()
  }

  let b, x, y;

  function E() {
    return b || (b = function() {
      const e = r(), t = a();
      return {
        smoothScroll: t.documentElement && "scrollBehavior" in t.documentElement.style, touch: !!("ontouchstart" in e || e.DocumentTouch && t instanceof e.DocumentTouch), passiveListener: function() {
          let t = !1;
          try {
            const s = Object.defineProperty({}, "passive", {
              get() {
                t = !0
              }
            });
            e.addEventListener("testPassiveListener", null, s)
          } catch (e) {
          }
          return t
        }(), gestures: "ongesturestart" in e
      }
    }()), b
  }

  function T(e) {
    return void 0 === e && (e = {}), x || (x = function(e) {
      let {userAgent: t} = void 0 === e ? {} : e;
      const s = E(), a = r(), i = a.navigator.platform, n = t || a.navigator.userAgent, l = {ios: !1, android: !1}, o = a.screen.width, d = a.screen.height, c = n.match(/(Android);?[\s\/]+([\d.]+)?/);
      let p = n.match(/(iPad).*OS\s([\d_]+)/);
      const u = n.match(/(iPod)(.*OS\s([\d_]+))?/), h = !p && n.match(/(iPhone\sOS|iOS)\s([\d_]+)/), m = "Win32" === i;
      let f = "MacIntel" === i;
      return !p && f && s.touch && ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf(`${o}x${d}`) >= 0 && (p = n.match(/(Version)\/([\d.]+)/), p || (p = [0, 1, "13_0_0"]), f = !1), c && !m && (l.os = "android", l.android = !0), (p || h || u) && (l.os = "ios", l.ios = !0), l
    }(e)), x
  }

  function C() {
    return y || (y = function() {
      const e = r();
      return {
        isSafari: function() {
          const t = e.navigator.userAgent.toLowerCase();
          return t.indexOf("safari") >= 0 && t.indexOf("chrome") < 0 && t.indexOf("android") < 0
        }(), isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent)
      }
    }()), y
  }

  Object.keys(c).forEach((e => {
    Object.defineProperty(d.fn, e, {value: c[e], writable: !0})
  }));
  var $ = {
    on(e, t, s) {
      const a = this;
      if ("function" != typeof t) return a;
      const i = s ? "unshift" : "push";
      return e.split(" ").forEach((e => {
        a.eventsListeners[e] || (a.eventsListeners[e] = []), a.eventsListeners[e][i](t)
      })), a
    }, once(e, t, s) {
      const a = this;
      if ("function" != typeof t) return a;

      function i() {
        a.off(e, i), i.__emitterProxy && delete i.__emitterProxy;
        for (var s = arguments.length, r = new Array(s), n = 0; n < s; n++) r[n] = arguments[n];
        t.apply(a, r)
      }

      return i.__emitterProxy = t, a.on(e, i, s)
    }, onAny(e, t) {
      const s = this;
      if ("function" != typeof e) return s;
      const a = t ? "unshift" : "push";
      return s.eventsAnyListeners.indexOf(e) < 0 && s.eventsAnyListeners[a](e), s
    }, offAny(e) {
      const t = this;
      if (!t.eventsAnyListeners) return t;
      const s = t.eventsAnyListeners.indexOf(e);
      return s >= 0 && t.eventsAnyListeners.splice(s, 1), t
    }, off(e, t) {
      const s = this;
      return s.eventsListeners ? (e.split(" ").forEach((e => {
        void 0 === t ? s.eventsListeners[e] = [] : s.eventsListeners[e] && s.eventsListeners[e].forEach(((a, i) => {
          (a === t || a.__emitterProxy && a.__emitterProxy === t) && s.eventsListeners[e].splice(i, 1)
        }))
      })), s) : s
    }, emit() {
      const e = this;
      if (!e.eventsListeners) return e;
      let t, s, a;
      for (var i = arguments.length, r = new Array(i), n = 0; n < i; n++) r[n] = arguments[n];
      "string" == typeof r[0] || Array.isArray(r[0]) ? (t = r[0], s = r.slice(1, r.length), a = e) : (t = r[0].events, s = r[0].data, a = r[0].context || e), s.unshift(a);
      return (Array.isArray(t) ? t : t.split(" ")).forEach((t => {
        e.eventsAnyListeners && e.eventsAnyListeners.length && e.eventsAnyListeners.forEach((e => {
          e.apply(a, [t, ...s])
        })), e.eventsListeners && e.eventsListeners[t] && e.eventsListeners[t].forEach((e => {
          e.apply(a, s)
        }))
      })), e
    }
  };
  var S = {
    updateSize: function() {
      const e = this;
      let t, s;
      const a = e.$el;
      t = void 0 !== e.params.width && null !== e.params.width ? e.params.width : a[0].clientWidth, s = void 0 !== e.params.height && null !== e.params.height ? e.params.height : a[0].clientHeight, 0 === t && e.isHorizontal() || 0 === s && e.isVertical() || (t = t - parseInt(a.css("padding-left") || 0, 10) - parseInt(a.css("padding-right") || 0, 10), s = s - parseInt(a.css("padding-top") || 0, 10) - parseInt(a.css("padding-bottom") || 0, 10), Number.isNaN(t) && (t = 0), Number.isNaN(s) && (s = 0), Object.assign(e, {width: t, height: s, size: e.isHorizontal() ? t : s}))
    }, updateSlides: function() {
      const e = this;

      function t(t) {
        return e.isHorizontal() ? t : {width: "height", "margin-top": "margin-left", "margin-bottom ": "margin-right", "margin-left": "margin-top", "margin-right": "margin-bottom", "padding-left": "padding-top", "padding-right": "padding-bottom", marginRight: "marginBottom"}[t]
      }

      function s(e, s) {
        return parseFloat(e.getPropertyValue(t(s)) || 0)
      }

      const a = e.params, {$wrapperEl: i, size: r, rtlTranslate: n, wrongRTL: l} = e, o = e.virtual && a.virtual.enabled, d = o ? e.virtual.slides.length : e.slides.length, c = i.children(`.${e.params.slideClass}`), p = o ? e.virtual.slides.length : c.length;
      let u = [];
      const h = [], m = [];
      let f = a.slidesOffsetBefore;
      "function" == typeof f && (f = a.slidesOffsetBefore.call(e));
      let g = a.slidesOffsetAfter;
      "function" == typeof g && (g = a.slidesOffsetAfter.call(e));
      const w = e.snapGrid.length, b = e.slidesGrid.length;
      let x = a.spaceBetween, y = -f, E = 0, T = 0;
      if (void 0 === r) return;
      "string" == typeof x && x.indexOf("%") >= 0 && (x = parseFloat(x.replace("%", "")) / 100 * r), e.virtualSize = -x, n ? c.css({marginLeft: "", marginBottom: "", marginTop: ""}) : c.css({marginRight: "", marginBottom: "", marginTop: ""}), a.centeredSlides && a.cssMode && (v(e.wrapperEl, "--swiper-centered-offset-before", ""), v(e.wrapperEl, "--swiper-centered-offset-after", ""));
      const C = a.grid && a.grid.rows > 1 && e.grid;
      let $;
      C && e.grid.initSlides(p);
      const S = "auto" === a.slidesPerView && a.breakpoints && Object.keys(a.breakpoints).filter((e => void 0 !== a.breakpoints[e].slidesPerView)).length > 0;
      for (let i = 0; i < p; i += 1) {
        $ = 0;
        const n = c.eq(i);
        if (C && e.grid.updateSlide(i, n, p, t), "none" !== n.css("display")) {
          if ("auto" === a.slidesPerView) {
            S && (c[i].style[t("width")] = "");
            const r = getComputedStyle(n[0]), l = n[0].style.transform, o = n[0].style.webkitTransform;
            if (l && (n[0].style.transform = "none"), o && (n[0].style.webkitTransform = "none"), a.roundLengths) $ = e.isHorizontal() ? n.outerWidth(!0) : n.outerHeight(!0); else {
              const e = s(r, "width"), t = s(r, "padding-left"), a = s(r, "padding-right"), i = s(r, "margin-left"), l = s(r, "margin-right"), o = r.getPropertyValue("box-sizing");
              if (o && "border-box" === o) $ = e + i + l; else {
                const {clientWidth: s, offsetWidth: r} = n[0];
                $ = e + t + a + i + l + (r - s)
              }
            }
            l && (n[0].style.transform = l), o && (n[0].style.webkitTransform = o), a.roundLengths && ($ = Math.floor($))
          } else $ = (r - (a.slidesPerView - 1) * x) / a.slidesPerView, a.roundLengths && ($ = Math.floor($)), c[i] && (c[i].style[t("width")] = `${$}px`);
          c[i] && (c[i].swiperSlideSize = $), m.push($), a.centeredSlides ? (y = y + $ / 2 + E / 2 + x, 0 === E && 0 !== i && (y = y - r / 2 - x), 0 === i && (y = y - r / 2 - x), Math.abs(y) < .001 && (y = 0), a.roundLengths && (y = Math.floor(y)), T % a.slidesPerGroup == 0 && u.push(y), h.push(y)) : (a.roundLengths && (y = Math.floor(y)), (T - Math.min(e.params.slidesPerGroupSkip, T)) % e.params.slidesPerGroup == 0 && u.push(y), h.push(y), y = y + $ + x), e.virtualSize += $ + x, E = $, T += 1
        }
      }
      if (e.virtualSize = Math.max(e.virtualSize, r) + g, n && l && ("slide" === a.effect || "coverflow" === a.effect) && i.css({width: `${e.virtualSize + a.spaceBetween}px`}), a.setWrapperSize && i.css({[t("width")]: `${e.virtualSize + a.spaceBetween}px`}), C && e.grid.updateWrapperSize($, u, t), !a.centeredSlides) {
        const t = [];
        for (let s = 0; s < u.length; s += 1) {
          let i = u[s];
          a.roundLengths && (i = Math.floor(i)), u[s] <= e.virtualSize - r && t.push(i)
        }
        u = t, Math.floor(e.virtualSize - r) - Math.floor(u[u.length - 1]) > 1 && u.push(e.virtualSize - r)
      }
      if (0 === u.length && (u = [0]), 0 !== a.spaceBetween) {
        const s = e.isHorizontal() && n ? "marginLeft" : t("marginRight");
        c.filter(((e, t) => !a.cssMode || t !== c.length - 1)).css({[s]: `${x}px`})
      }
      if (a.centeredSlides && a.centeredSlidesBounds) {
        let e = 0;
        m.forEach((t => {
          e += t + (a.spaceBetween ? a.spaceBetween : 0)
        })), e -= a.spaceBetween;
        const t = e - r;
        u = u.map((e => e < 0 ? -f : e > t ? t + g : e))
      }
      if (a.centerInsufficientSlides) {
        let e = 0;
        if (m.forEach((t => {
          e += t + (a.spaceBetween ? a.spaceBetween : 0)
        })), e -= a.spaceBetween, e < r) {
          const t = (r - e) / 2;
          u.forEach(((e, s) => {
            u[s] = e - t
          })), h.forEach(((e, s) => {
            h[s] = e + t
          }))
        }
      }
      if (Object.assign(e, {slides: c, snapGrid: u, slidesGrid: h, slidesSizesGrid: m}), a.centeredSlides && a.cssMode && !a.centeredSlidesBounds) {
        v(e.wrapperEl, "--swiper-centered-offset-before", -u[0] + "px"), v(e.wrapperEl, "--swiper-centered-offset-after", e.size / 2 - m[m.length - 1] / 2 + "px");
        const t = -e.snapGrid[0], s = -e.slidesGrid[0];
        e.snapGrid = e.snapGrid.map((e => e + t)), e.slidesGrid = e.slidesGrid.map((e => e + s))
      }
      if (p !== d && e.emit("slidesLengthChange"), u.length !== w && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), h.length !== b && e.emit("slidesGridLengthChange"), a.watchSlidesProgress && e.updateSlidesOffset(), !(o || a.cssMode || "slide" !== a.effect && "fade" !== a.effect)) {
        const t = `${a.containerModifierClass}backface-hidden`, s = e.$el.hasClass(t);
        p <= a.maxBackfaceHiddenSlides ? s || e.$el.addClass(t) : s && e.$el.removeClass(t)
      }
    }, updateAutoHeight: function(e) {
      const t = this, s = [], a = t.virtual && t.params.virtual.enabled;
      let i, r = 0;
      "number" == typeof e ? t.setTransition(e) : !0 === e && t.setTransition(t.params.speed);
      const n = e => a ? t.slides.filter((t => parseInt(t.getAttribute("data-swiper-slide-index"), 10) === e))[0] : t.slides.eq(e)[0];
      if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1) if (t.params.centeredSlides) t.visibleSlides.each((e => {
        s.push(e)
      })); else for (i = 0; i < Math.ceil(t.params.slidesPerView); i += 1) {
        const e = t.activeIndex + i;
        if (e > t.slides.length && !a) break;
        s.push(n(e))
      } else s.push(n(t.activeIndex));
      for (i = 0; i < s.length; i += 1) if (void 0 !== s[i]) {
        const e = s[i].offsetHeight;
        r = e > r ? e : r
      }
      (r || 0 === r) && t.$wrapperEl.css("height", `${r}px`)
    }, updateSlidesOffset: function() {
      const e = this, t = e.slides;
      for (let s = 0; s < t.length; s += 1) t[s].swiperSlideOffset = e.isHorizontal() ? t[s].offsetLeft : t[s].offsetTop
    }, updateSlidesProgress: function(e) {
      void 0 === e && (e = this && this.translate || 0);
      const t = this, s = t.params, {slides: a, rtlTranslate: i, snapGrid: r} = t;
      if (0 === a.length) return;
      void 0 === a[0].swiperSlideOffset && t.updateSlidesOffset();
      let n = -e;
      i && (n = e), a.removeClass(s.slideVisibleClass), t.visibleSlidesIndexes = [], t.visibleSlides = [];
      for (let e = 0; e < a.length; e += 1) {
        const l = a[e];
        let o = l.swiperSlideOffset;
        s.cssMode && s.centeredSlides && (o -= a[0].swiperSlideOffset);
        const d = (n + (s.centeredSlides ? t.minTranslate() : 0) - o) / (l.swiperSlideSize + s.spaceBetween), c = (n - r[0] + (s.centeredSlides ? t.minTranslate() : 0) - o) / (l.swiperSlideSize + s.spaceBetween), p = -(n - o), u = p + t.slidesSizesGrid[e];
        (p >= 0 && p < t.size - 1 || u > 1 && u <= t.size || p <= 0 && u >= t.size) && (t.visibleSlides.push(l), t.visibleSlidesIndexes.push(e), a.eq(e).addClass(s.slideVisibleClass)), l.progress = i ? -d : d, l.originalProgress = i ? -c : c
      }
      t.visibleSlides = d(t.visibleSlides)
    }, updateProgress: function(e) {
      const t = this;
      if (void 0 === e) {
        const s = t.rtlTranslate ? -1 : 1;
        e = t && t.translate && t.translate * s || 0
      }
      const s = t.params, a = t.maxTranslate() - t.minTranslate();
      let {progress: i, isBeginning: r, isEnd: n} = t;
      const l = r, o = n;
      0 === a ? (i = 0, r = !0, n = !0) : (i = (e - t.minTranslate()) / a, r = i <= 0, n = i >= 1), Object.assign(t, {progress: i, isBeginning: r, isEnd: n}), (s.watchSlidesProgress || s.centeredSlides && s.autoHeight) && t.updateSlidesProgress(e), r && !l && t.emit("reachBeginning toEdge"), n && !o && t.emit("reachEnd toEdge"), (l && !r || o && !n) && t.emit("fromEdge"), t.emit("progress", i)
    }, updateSlidesClasses: function() {
      const e = this, {slides: t, params: s, $wrapperEl: a, activeIndex: i, realIndex: r} = e, n = e.virtual && s.virtual.enabled;
      let l;
      t.removeClass(`${s.slideActiveClass} ${s.slideNextClass} ${s.slidePrevClass} ${s.slideDuplicateActiveClass} ${s.slideDuplicateNextClass} ${s.slideDuplicatePrevClass}`), l = n ? e.$wrapperEl.find(`.${s.slideClass}[data-swiper-slide-index="${i}"]`) : t.eq(i), l.addClass(s.slideActiveClass), s.loop && (l.hasClass(s.slideDuplicateClass) ? a.children(`.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${r}"]`).addClass(s.slideDuplicateActiveClass) : a.children(`.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${r}"]`).addClass(s.slideDuplicateActiveClass));
      let o = l.nextAll(`.${s.slideClass}`).eq(0).addClass(s.slideNextClass);
      s.loop && 0 === o.length && (o = t.eq(0), o.addClass(s.slideNextClass));
      let d = l.prevAll(`.${s.slideClass}`).eq(0).addClass(s.slidePrevClass);
      s.loop && 0 === d.length && (d = t.eq(-1), d.addClass(s.slidePrevClass)), s.loop && (o.hasClass(s.slideDuplicateClass) ? a.children(`.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${o.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicateNextClass) : a.children(`.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${o.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicateNextClass), d.hasClass(s.slideDuplicateClass) ? a.children(`.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${d.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicatePrevClass) : a.children(`.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${d.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicatePrevClass)), e.emitSlidesClasses()
    }, updateActiveIndex: function(e) {
      const t = this, s = t.rtlTranslate ? t.translate : -t.translate, {slidesGrid: a, snapGrid: i, params: r, activeIndex: n, realIndex: l, snapIndex: o} = t;
      let d, c = e;
      if (void 0 === c) {
        for (let e = 0; e < a.length; e += 1) void 0 !== a[e + 1] ? s >= a[e] && s < a[e + 1] - (a[e + 1] - a[e]) / 2 ? c = e : s >= a[e] && s < a[e + 1] && (c = e + 1) : s >= a[e] && (c = e);
        r.normalizeSlideIndex && (c < 0 || void 0 === c) && (c = 0)
      }
      if (i.indexOf(s) >= 0) d = i.indexOf(s); else {
        const e = Math.min(r.slidesPerGroupSkip, c);
        d = e + Math.floor((c - e) / r.slidesPerGroup)
      }
      if (d >= i.length && (d = i.length - 1), c === n) return void (d !== o && (t.snapIndex = d, t.emit("snapIndexChange")));
      const p = parseInt(t.slides.eq(c).attr("data-swiper-slide-index") || c, 10);
      Object.assign(t, {snapIndex: d, realIndex: p, previousIndex: n, activeIndex: c}), t.emit("activeIndexChange"), t.emit("snapIndexChange"), l !== p && t.emit("realIndexChange"), (t.initialized || t.params.runCallbacksOnInit) && t.emit("slideChange")
    }, updateClickedSlide: function(e) {
      const t = this, s = t.params, a = d(e).closest(`.${s.slideClass}`)[0];
      let i, r = !1;
      if (a) for (let e = 0; e < t.slides.length; e += 1) if (t.slides[e] === a) {
        r = !0, i = e;
        break
      }
      if (!a || !r) return t.clickedSlide = void 0, void (t.clickedIndex = void 0);
      t.clickedSlide = a, t.virtual && t.params.virtual.enabled ? t.clickedIndex = parseInt(d(a).attr("data-swiper-slide-index"), 10) : t.clickedIndex = i, s.slideToClickedSlide && void 0 !== t.clickedIndex && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide()
    }
  };
  var M = {
    getTranslate: function(e) {
      void 0 === e && (e = this.isHorizontal() ? "x" : "y");
      const {params: t, rtlTranslate: s, translate: a, $wrapperEl: i} = this;
      if (t.virtualTranslate) return s ? -a : a;
      if (t.cssMode) return a;
      let r = h(i[0], e);
      return s && (r = -r), r || 0
    }, setTranslate: function(e, t) {
      const s = this, {rtlTranslate: a, params: i, $wrapperEl: r, wrapperEl: n, progress: l} = s;
      let o, d = 0, c = 0;
      s.isHorizontal() ? d = a ? -e : e : c = e, i.roundLengths && (d = Math.floor(d), c = Math.floor(c)), i.cssMode ? n[s.isHorizontal() ? "scrollLeft" : "scrollTop"] = s.isHorizontal() ? -d : -c : i.virtualTranslate || r.transform(`translate3d(${d}px, ${c}px, 0px)`), s.previousTranslate = s.translate, s.translate = s.isHorizontal() ? d : c;
      const p = s.maxTranslate() - s.minTranslate();
      o = 0 === p ? 0 : (e - s.minTranslate()) / p, o !== l && s.updateProgress(e), s.emit("setTranslate", s.translate, t)
    }, minTranslate: function() {
      return -this.snapGrid[0]
    }, maxTranslate: function() {
      return -this.snapGrid[this.snapGrid.length - 1]
    }, translateTo: function(e, t, s, a, i) {
      void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === s && (s = !0), void 0 === a && (a = !0);
      const r = this, {params: n, wrapperEl: l} = r;
      if (r.animating && n.preventInteractionOnTransition) return !1;
      const o = r.minTranslate(), d = r.maxTranslate();
      let c;
      if (c = a && e > o ? o : a && e < d ? d : e, r.updateProgress(c), n.cssMode) {
        const e = r.isHorizontal();
        if (0 === t) l[e ? "scrollLeft" : "scrollTop"] = -c; else {
          if (!r.support.smoothScroll) return w({swiper: r, targetPosition: -c, side: e ? "left" : "top"}), !0;
          l.scrollTo({[e ? "left" : "top"]: -c, behavior: "smooth"})
        }
        return !0
      }
      return 0 === t ? (r.setTransition(0), r.setTranslate(c), s && (r.emit("beforeTransitionStart", t, i), r.emit("transitionEnd"))) : (r.setTransition(t), r.setTranslate(c), s && (r.emit("beforeTransitionStart", t, i), r.emit("transitionStart")), r.animating || (r.animating = !0, r.onTranslateToWrapperTransitionEnd || (r.onTranslateToWrapperTransitionEnd = function(e) {
        r && !r.destroyed && e.target === this && (r.$wrapperEl[0].removeEventListener("transitionend", r.onTranslateToWrapperTransitionEnd), r.$wrapperEl[0].removeEventListener("webkitTransitionEnd", r.onTranslateToWrapperTransitionEnd), r.onTranslateToWrapperTransitionEnd = null, delete r.onTranslateToWrapperTransitionEnd, s && r.emit("transitionEnd"))
      }), r.$wrapperEl[0].addEventListener("transitionend", r.onTranslateToWrapperTransitionEnd), r.$wrapperEl[0].addEventListener("webkitTransitionEnd", r.onTranslateToWrapperTransitionEnd))), !0
    }
  };

  function P(e) {
    let {swiper: t, runCallbacks: s, direction: a, step: i} = e;
    const {activeIndex: r, previousIndex: n} = t;
    let l = a;
    if (l || (l = r > n ? "next" : r < n ? "prev" : "reset"), t.emit(`transition${i}`), s && r !== n) {
      if ("reset" === l) return void t.emit(`slideResetTransition${i}`);
      t.emit(`slideChangeTransition${i}`), "next" === l ? t.emit(`slideNextTransition${i}`) : t.emit(`slidePrevTransition${i}`)
    }
  }

  var k = {
    slideTo: function(e, t, s, a, i) {
      if (void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === s && (s = !0), "number" != typeof e && "string" != typeof e) throw new Error(`The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e}] given.`);
      if ("string" == typeof e) {
        const t = parseInt(e, 10);
        if (!isFinite(t)) throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`);
        e = t
      }
      const r = this;
      let n = e;
      n < 0 && (n = 0);
      const {params: l, snapGrid: o, slidesGrid: d, previousIndex: c, activeIndex: p, rtlTranslate: u, wrapperEl: h, enabled: m} = r;
      if (r.animating && l.preventInteractionOnTransition || !m && !a && !i) return !1;
      const f = Math.min(r.params.slidesPerGroupSkip, n);
      let g = f + Math.floor((n - f) / r.params.slidesPerGroup);
      g >= o.length && (g = o.length - 1), (p || l.initialSlide || 0) === (c || 0) && s && r.emit("beforeSlideChangeStart");
      const v = -o[g];
      if (r.updateProgress(v), l.normalizeSlideIndex) for (let e = 0; e < d.length; e += 1) {
        const t = -Math.floor(100 * v), s = Math.floor(100 * d[e]), a = Math.floor(100 * d[e + 1]);
        void 0 !== d[e + 1] ? t >= s && t < a - (a - s) / 2 ? n = e : t >= s && t < a && (n = e + 1) : t >= s && (n = e)
      }
      if (r.initialized && n !== p) {
        if (!r.allowSlideNext && v < r.translate && v < r.minTranslate()) return !1;
        if (!r.allowSlidePrev && v > r.translate && v > r.maxTranslate() && (p || 0) !== n) return !1
      }
      let b;
      if (b = n > p ? "next" : n < p ? "prev" : "reset", u && -v === r.translate || !u && v === r.translate) return r.updateActiveIndex(n), l.autoHeight && r.updateAutoHeight(), r.updateSlidesClasses(), "slide" !== l.effect && r.setTranslate(v), "reset" !== b && (r.transitionStart(s, b), r.transitionEnd(s, b)), !1;
      if (l.cssMode) {
        const e = r.isHorizontal(), s = u ? v : -v;
        if (0 === t) {
          const t = r.virtual && r.params.virtual.enabled;
          t && (r.wrapperEl.style.scrollSnapType = "none", r._immediateVirtual = !0), h[e ? "scrollLeft" : "scrollTop"] = s, t && requestAnimationFrame((() => {
            r.wrapperEl.style.scrollSnapType = "", r._swiperImmediateVirtual = !1
          }))
        } else {
          if (!r.support.smoothScroll) return w({swiper: r, targetPosition: s, side: e ? "left" : "top"}), !0;
          h.scrollTo({[e ? "left" : "top"]: s, behavior: "smooth"})
        }
        return !0
      }
      return r.setTransition(t), r.setTranslate(v), r.updateActiveIndex(n), r.updateSlidesClasses(), r.emit("beforeTransitionStart", t, a), r.transitionStart(s, b), 0 === t ? r.transitionEnd(s, b) : r.animating || (r.animating = !0, r.onSlideToWrapperTransitionEnd || (r.onSlideToWrapperTransitionEnd = function(e) {
        r && !r.destroyed && e.target === this && (r.$wrapperEl[0].removeEventListener("transitionend", r.onSlideToWrapperTransitionEnd), r.$wrapperEl[0].removeEventListener("webkitTransitionEnd", r.onSlideToWrapperTransitionEnd), r.onSlideToWrapperTransitionEnd = null, delete r.onSlideToWrapperTransitionEnd, r.transitionEnd(s, b))
      }), r.$wrapperEl[0].addEventListener("transitionend", r.onSlideToWrapperTransitionEnd), r.$wrapperEl[0].addEventListener("webkitTransitionEnd", r.onSlideToWrapperTransitionEnd)), !0
    }, slideToLoop: function(e, t, s, a) {
      void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === s && (s = !0);
      const i = this;
      let r = e;
      return i.params.loop && (r += i.loopedSlides), i.slideTo(r, t, s, a)
    }, slideNext: function(e, t, s) {
      void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
      const a = this, {animating: i, enabled: r, params: n} = a;
      if (!r) return a;
      let l = n.slidesPerGroup;
      "auto" === n.slidesPerView && 1 === n.slidesPerGroup && n.slidesPerGroupAuto && (l = Math.max(a.slidesPerViewDynamic("current", !0), 1));
      const o = a.activeIndex < n.slidesPerGroupSkip ? 1 : l;
      if (n.loop) {
        if (i && n.loopPreventsSlide) return !1;
        a.loopFix(), a._clientLeft = a.$wrapperEl[0].clientLeft
      }
      return n.rewind && a.isEnd ? a.slideTo(0, e, t, s) : a.slideTo(a.activeIndex + o, e, t, s)
    }, slidePrev: function(e, t, s) {
      void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
      const a = this, {params: i, animating: r, snapGrid: n, slidesGrid: l, rtlTranslate: o, enabled: d} = a;
      if (!d) return a;
      if (i.loop) {
        if (r && i.loopPreventsSlide) return !1;
        a.loopFix(), a._clientLeft = a.$wrapperEl[0].clientLeft
      }

      function c(e) {
        return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
      }

      const p = c(o ? a.translate : -a.translate), u = n.map((e => c(e)));
      let h = n[u.indexOf(p) - 1];
      if (void 0 === h && i.cssMode) {
        let e;
        n.forEach(((t, s) => {
          p >= t && (e = s)
        })), void 0 !== e && (h = n[e > 0 ? e - 1 : e])
      }
      let m = 0;
      if (void 0 !== h && (m = l.indexOf(h), m < 0 && (m = a.activeIndex - 1), "auto" === i.slidesPerView && 1 === i.slidesPerGroup && i.slidesPerGroupAuto && (m = m - a.slidesPerViewDynamic("previous", !0) + 1, m = Math.max(m, 0))), i.rewind && a.isBeginning) {
        const i = a.params.virtual && a.params.virtual.enabled && a.virtual ? a.virtual.slides.length - 1 : a.slides.length - 1;
        return a.slideTo(i, e, t, s)
      }
      return a.slideTo(m, e, t, s)
    }, slideReset: function(e, t, s) {
      return void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), this.slideTo(this.activeIndex, e, t, s)
    }, slideToClosest: function(e, t, s, a) {
      void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), void 0 === a && (a = .5);
      const i = this;
      let r = i.activeIndex;
      const n = Math.min(i.params.slidesPerGroupSkip, r), l = n + Math.floor((r - n) / i.params.slidesPerGroup), o = i.rtlTranslate ? i.translate : -i.translate;
      if (o >= i.snapGrid[l]) {
        const e = i.snapGrid[l];
        o - e > (i.snapGrid[l + 1] - e) * a && (r += i.params.slidesPerGroup)
      } else {
        const e = i.snapGrid[l - 1];
        o - e <= (i.snapGrid[l] - e) * a && (r -= i.params.slidesPerGroup)
      }
      return r = Math.max(r, 0), r = Math.min(r, i.slidesGrid.length - 1), i.slideTo(r, e, t, s)
    }, slideToClickedSlide: function() {
      const e = this, {params: t, $wrapperEl: s} = e, a = "auto" === t.slidesPerView ? e.slidesPerViewDynamic() : t.slidesPerView;
      let i, r = e.clickedIndex;
      if (t.loop) {
        if (e.animating) return;
        i = parseInt(d(e.clickedSlide).attr("data-swiper-slide-index"), 10), t.centeredSlides ? r < e.loopedSlides - a / 2 || r > e.slides.length - e.loopedSlides + a / 2 ? (e.loopFix(), r = s.children(`.${t.slideClass}[data-swiper-slide-index="${i}"]:not(.${t.slideDuplicateClass})`).eq(0).index(), p((() => {
          e.slideTo(r)
        }))) : e.slideTo(r) : r > e.slides.length - a ? (e.loopFix(), r = s.children(`.${t.slideClass}[data-swiper-slide-index="${i}"]:not(.${t.slideDuplicateClass})`).eq(0).index(), p((() => {
          e.slideTo(r)
        }))) : e.slideTo(r)
      } else e.slideTo(r)
    }
  };
  var z = {
    loopCreate: function() {
      const e = this, t = a(), {params: s, $wrapperEl: i} = e, r = i.children().length > 0 ? d(i.children()[0].parentNode) : i;
      r.children(`.${s.slideClass}.${s.slideDuplicateClass}`).remove();
      let n = r.children(`.${s.slideClass}`);
      if (s.loopFillGroupWithBlank) {
        const e = s.slidesPerGroup - n.length % s.slidesPerGroup;
        if (e !== s.slidesPerGroup) {
          for (let a = 0; a < e; a += 1) {
            const e = d(t.createElement("div")).addClass(`${s.slideClass} ${s.slideBlankClass}`);
            r.append(e)
          }
          n = r.children(`.${s.slideClass}`)
        }
      }
      "auto" !== s.slidesPerView || s.loopedSlides || (s.loopedSlides = n.length), e.loopedSlides = Math.ceil(parseFloat(s.loopedSlides || s.slidesPerView, 10)), e.loopedSlides += s.loopAdditionalSlides, e.loopedSlides > n.length && (e.loopedSlides = n.length);
      const l = [], o = [];
      n.each(((t, s) => {
        const a = d(t);
        s < e.loopedSlides && o.push(t), s < n.length && s >= n.length - e.loopedSlides && l.push(t), a.attr("data-swiper-slide-index", s)
      }));
      for (let e = 0; e < o.length; e += 1) r.append(d(o[e].cloneNode(!0)).addClass(s.slideDuplicateClass));
      for (let e = l.length - 1; e >= 0; e -= 1) r.prepend(d(l[e].cloneNode(!0)).addClass(s.slideDuplicateClass))
    }, loopFix: function() {
      const e = this;
      e.emit("beforeLoopFix");
      const {activeIndex: t, slides: s, loopedSlides: a, allowSlidePrev: i, allowSlideNext: r, snapGrid: n, rtlTranslate: l} = e;
      let o;
      e.allowSlidePrev = !0, e.allowSlideNext = !0;
      const d = -n[t] - e.getTranslate();
      if (t < a) {
        o = s.length - 3 * a + t, o += a;
        e.slideTo(o, 0, !1, !0) && 0 !== d && e.setTranslate((l ? -e.translate : e.translate) - d)
      } else if (t >= s.length - a) {
        o = -s.length + t + a, o += a;
        e.slideTo(o, 0, !1, !0) && 0 !== d && e.setTranslate((l ? -e.translate : e.translate) - d)
      }
      e.allowSlidePrev = i, e.allowSlideNext = r, e.emit("loopFix")
    }, loopDestroy: function() {
      const {$wrapperEl: e, params: t, slides: s} = this;
      e.children(`.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`).remove(), s.removeAttr("data-swiper-slide-index")
    }
  };

  function O(e) {
    const t = this, s = a(), i = r(), n = t.touchEventsData, {params: l, touches: o, enabled: c} = t;
    if (!c) return;
    if (t.animating && l.preventInteractionOnTransition) return;
    !t.animating && l.cssMode && l.loop && t.loopFix();
    let p = e;
    p.originalEvent && (p = p.originalEvent);
    let h = d(p.target);
    if ("wrapper" === l.touchEventsTarget && !h.closest(t.wrapperEl).length) return;
    if (n.isTouchEvent = "touchstart" === p.type, !n.isTouchEvent && "which" in p && 3 === p.which) return;
    if (!n.isTouchEvent && "button" in p && p.button > 0) return;
    if (n.isTouched && n.isMoved) return;
    !!l.noSwipingClass && "" !== l.noSwipingClass && p.target && p.target.shadowRoot && e.path && e.path[0] && (h = d(e.path[0]));
    const m = l.noSwipingSelector ? l.noSwipingSelector : `.${l.noSwipingClass}`, f = !(!p.target || !p.target.shadowRoot);
    if (l.noSwiping && (f ? function(e, t) {
      return void 0 === t && (t = this), function t(s) {
        return s && s !== a() && s !== r() ? (s.assignedSlot && (s = s.assignedSlot), s.closest(e) || t(s.getRootNode().host)) : null
      }(t)
    }(m, p.target) : h.closest(m)[0])) return void (t.allowClick = !0);
    if (l.swipeHandler && !h.closest(l.swipeHandler)[0]) return;
    o.currentX = "touchstart" === p.type ? p.targetTouches[0].pageX : p.pageX, o.currentY = "touchstart" === p.type ? p.targetTouches[0].pageY : p.pageY;
    const g = o.currentX, v = o.currentY, w = l.edgeSwipeDetection || l.iOSEdgeSwipeDetection, b = l.edgeSwipeThreshold || l.iOSEdgeSwipeThreshold;
    if (w && (g <= b || g >= i.innerWidth - b)) {
      if ("prevent" !== w) return;
      e.preventDefault()
    }
    if (Object.assign(n, {isTouched: !0, isMoved: !1, allowTouchCallbacks: !0, isScrolling: void 0, startMoving: void 0}), o.startX = g, o.startY = v, n.touchStartTime = u(), t.allowClick = !0, t.updateSize(), t.swipeDirection = void 0, l.threshold > 0 && (n.allowThresholdMove = !1), "touchstart" !== p.type) {
      let e = !0;
      h.is(n.focusableElements) && (e = !1, "SELECT" === h[0].nodeName && (n.isTouched = !1)), s.activeElement && d(s.activeElement).is(n.focusableElements) && s.activeElement !== h[0] && s.activeElement.blur();
      const a = e && t.allowTouchMove && l.touchStartPreventDefault;
      !l.touchStartForcePreventDefault && !a || h[0].isContentEditable || p.preventDefault()
    }
    t.params.freeMode && t.params.freeMode.enabled && t.freeMode && t.animating && !l.cssMode && t.freeMode.onTouchStart(), t.emit("touchStart", p)
  }

  function I(e) {
    const t = a(), s = this, i = s.touchEventsData, {params: r, touches: n, rtlTranslate: l, enabled: o} = s;
    if (!o) return;
    let c = e;
    if (c.originalEvent && (c = c.originalEvent), !i.isTouched) return void (i.startMoving && i.isScrolling && s.emit("touchMoveOpposite", c));
    if (i.isTouchEvent && "touchmove" !== c.type) return;
    const p = "touchmove" === c.type && c.targetTouches && (c.targetTouches[0] || c.changedTouches[0]), h = "touchmove" === c.type ? p.pageX : c.pageX, m = "touchmove" === c.type ? p.pageY : c.pageY;
    if (c.preventedByNestedSwiper) return n.startX = h, void (n.startY = m);
    if (!s.allowTouchMove) return d(c.target).is(i.focusableElements) || (s.allowClick = !1), void (i.isTouched && (Object.assign(n, {startX: h, startY: m, currentX: h, currentY: m}), i.touchStartTime = u()));
    if (i.isTouchEvent && r.touchReleaseOnEdges && !r.loop) if (s.isVertical()) {
      if (m < n.startY && s.translate <= s.maxTranslate() || m > n.startY && s.translate >= s.minTranslate()) return i.isTouched = !1, void (i.isMoved = !1)
    } else if (h < n.startX && s.translate <= s.maxTranslate() || h > n.startX && s.translate >= s.minTranslate()) return;
    if (i.isTouchEvent && t.activeElement && c.target === t.activeElement && d(c.target).is(i.focusableElements)) return i.isMoved = !0, void (s.allowClick = !1);
    if (i.allowTouchCallbacks && s.emit("touchMove", c), c.targetTouches && c.targetTouches.length > 1) return;
    n.currentX = h, n.currentY = m;
    const f = n.currentX - n.startX, g = n.currentY - n.startY;
    if (s.params.threshold && Math.sqrt(f ** 2 + g ** 2) < s.params.threshold) return;
    if (void 0 === i.isScrolling) {
      let e;
      s.isHorizontal() && n.currentY === n.startY || s.isVertical() && n.currentX === n.startX ? i.isScrolling = !1 : f * f + g * g >= 25 && (e = 180 * Math.atan2(Math.abs(g), Math.abs(f)) / Math.PI, i.isScrolling = s.isHorizontal() ? e > r.touchAngle : 90 - e > r.touchAngle)
    }
    if (i.isScrolling && s.emit("touchMoveOpposite", c), void 0 === i.startMoving && (n.currentX === n.startX && n.currentY === n.startY || (i.startMoving = !0)), i.isScrolling) return void (i.isTouched = !1);
    if (!i.startMoving) return;
    s.allowClick = !1, !r.cssMode && c.cancelable && c.preventDefault(), r.touchMoveStopPropagation && !r.nested && c.stopPropagation(), i.isMoved || (r.loop && !r.cssMode && s.loopFix(), i.startTranslate = s.getTranslate(), s.setTransition(0), s.animating && s.$wrapperEl.trigger("webkitTransitionEnd transitionend"), i.allowMomentumBounce = !1, !r.grabCursor || !0 !== s.allowSlideNext && !0 !== s.allowSlidePrev || s.setGrabCursor(!0), s.emit("sliderFirstMove", c)), s.emit("sliderMove", c), i.isMoved = !0;
    let v = s.isHorizontal() ? f : g;
    n.diff = v, v *= r.touchRatio, l && (v = -v), s.swipeDirection = v > 0 ? "prev" : "next", i.currentTranslate = v + i.startTranslate;
    let w = !0, b = r.resistanceRatio;
    if (r.touchReleaseOnEdges && (b = 0), v > 0 && i.currentTranslate > s.minTranslate() ? (w = !1, r.resistance && (i.currentTranslate = s.minTranslate() - 1 + (-s.minTranslate() + i.startTranslate + v) ** b)) : v < 0 && i.currentTranslate < s.maxTranslate() && (w = !1, r.resistance && (i.currentTranslate = s.maxTranslate() + 1 - (s.maxTranslate() - i.startTranslate - v) ** b)), w && (c.preventedByNestedSwiper = !0), !s.allowSlideNext && "next" === s.swipeDirection && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate), !s.allowSlidePrev && "prev" === s.swipeDirection && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate), s.allowSlidePrev || s.allowSlideNext || (i.currentTranslate = i.startTranslate), r.threshold > 0) {
      if (!(Math.abs(v) > r.threshold || i.allowThresholdMove)) return void (i.currentTranslate = i.startTranslate);
      if (!i.allowThresholdMove) return i.allowThresholdMove = !0, n.startX = n.currentX, n.startY = n.currentY, i.currentTranslate = i.startTranslate, void (n.diff = s.isHorizontal() ? n.currentX - n.startX : n.currentY - n.startY)
    }
    r.followFinger && !r.cssMode && ((r.freeMode && r.freeMode.enabled && s.freeMode || r.watchSlidesProgress) && (s.updateActiveIndex(), s.updateSlidesClasses()), s.params.freeMode && r.freeMode.enabled && s.freeMode && s.freeMode.onTouchMove(), s.updateProgress(i.currentTranslate), s.setTranslate(i.currentTranslate))
  }

  function L(e) {
    const t = this, s = t.touchEventsData, {params: a, touches: i, rtlTranslate: r, slidesGrid: n, enabled: l} = t;
    if (!l) return;
    let o = e;
    if (o.originalEvent && (o = o.originalEvent), s.allowTouchCallbacks && t.emit("touchEnd", o), s.allowTouchCallbacks = !1, !s.isTouched) return s.isMoved && a.grabCursor && t.setGrabCursor(!1), s.isMoved = !1, void (s.startMoving = !1);
    a.grabCursor && s.isMoved && s.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
    const d = u(), c = d - s.touchStartTime;
    if (t.allowClick) {
      const e = o.path || o.composedPath && o.composedPath();
      t.updateClickedSlide(e && e[0] || o.target), t.emit("tap click", o), c < 300 && d - s.lastClickTime < 300 && t.emit("doubleTap doubleClick", o)
    }
    if (s.lastClickTime = u(), p((() => {
      t.destroyed || (t.allowClick = !0)
    })), !s.isTouched || !s.isMoved || !t.swipeDirection || 0 === i.diff || s.currentTranslate === s.startTranslate) return s.isTouched = !1, s.isMoved = !1, void (s.startMoving = !1);
    let h;
    if (s.isTouched = !1, s.isMoved = !1, s.startMoving = !1, h = a.followFinger ? r ? t.translate : -t.translate : -s.currentTranslate, a.cssMode) return;
    if (t.params.freeMode && a.freeMode.enabled) return void t.freeMode.onTouchEnd({currentPos: h});
    let m = 0, f = t.slidesSizesGrid[0];
    for (let e = 0; e < n.length; e += e < a.slidesPerGroupSkip ? 1 : a.slidesPerGroup) {
      const t = e < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
      void 0 !== n[e + t] ? h >= n[e] && h < n[e + t] && (m = e, f = n[e + t] - n[e]) : h >= n[e] && (m = e, f = n[n.length - 1] - n[n.length - 2])
    }
    let g = null, v = null;
    a.rewind && (t.isBeginning ? v = t.params.virtual && t.params.virtual.enabled && t.virtual ? t.virtual.slides.length - 1 : t.slides.length - 1 : t.isEnd && (g = 0));
    const w = (h - n[m]) / f, b = m < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
    if (c > a.longSwipesMs) {
      if (!a.longSwipes) return void t.slideTo(t.activeIndex);
      "next" === t.swipeDirection && (w >= a.longSwipesRatio ? t.slideTo(a.rewind && t.isEnd ? g : m + b) : t.slideTo(m)), "prev" === t.swipeDirection && (w > 1 - a.longSwipesRatio ? t.slideTo(m + b) : null !== v && w < 0 && Math.abs(w) > a.longSwipesRatio ? t.slideTo(v) : t.slideTo(m))
    } else {
      if (!a.shortSwipes) return void t.slideTo(t.activeIndex);
      t.navigation && (o.target === t.navigation.nextEl || o.target === t.navigation.prevEl) ? o.target === t.navigation.nextEl ? t.slideTo(m + b) : t.slideTo(m) : ("next" === t.swipeDirection && t.slideTo(null !== g ? g : m + b), "prev" === t.swipeDirection && t.slideTo(null !== v ? v : m))
    }
  }

  function A() {
    const e = this, {params: t, el: s} = e;
    if (s && 0 === s.offsetWidth) return;
    t.breakpoints && e.setBreakpoint();
    const {allowSlideNext: a, allowSlidePrev: i, snapGrid: r} = e;
    e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), e.updateSlidesClasses(), ("auto" === t.slidesPerView || t.slidesPerView > 1) && e.isEnd && !e.isBeginning && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0), e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.run(), e.allowSlidePrev = i, e.allowSlideNext = a, e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow()
  }

  function D(e) {
    const t = this;
    t.enabled && (t.allowClick || (t.params.preventClicks && e.preventDefault(), t.params.preventClicksPropagation && t.animating && (e.stopPropagation(), e.stopImmediatePropagation())))
  }

  function G() {
    const e = this, {wrapperEl: t, rtlTranslate: s, enabled: a} = e;
    if (!a) return;
    let i;
    e.previousTranslate = e.translate, e.isHorizontal() ? e.translate = -t.scrollLeft : e.translate = -t.scrollTop, -0 === e.translate && (e.translate = 0), e.updateActiveIndex(), e.updateSlidesClasses();
    const r = e.maxTranslate() - e.minTranslate();
    i = 0 === r ? 0 : (e.translate - e.minTranslate()) / r, i !== e.progress && e.updateProgress(s ? -e.translate : e.translate), e.emit("setTranslate", e.translate, !1)
  }

  let B = !1;

  function N() {
  }

  const H = (e, t) => {
    const s = a(), {params: i, touchEvents: r, el: n, wrapperEl: l, device: o, support: d} = e, c = !!i.nested, p = "on" === t ? "addEventListener" : "removeEventListener", u = t;
    if (d.touch) {
      const t = !("touchstart" !== r.start || !d.passiveListener || !i.passiveListeners) && {passive: !0, capture: !1};
      n[p](r.start, e.onTouchStart, t), n[p](r.move, e.onTouchMove, d.passiveListener ? {passive: !1, capture: c} : c), n[p](r.end, e.onTouchEnd, t), r.cancel && n[p](r.cancel, e.onTouchEnd, t)
    } else n[p](r.start, e.onTouchStart, !1), s[p](r.move, e.onTouchMove, c), s[p](r.end, e.onTouchEnd, !1);
    (i.preventClicks || i.preventClicksPropagation) && n[p]("click", e.onClick, !0), i.cssMode && l[p]("scroll", e.onScroll), i.updateOnWindowResize ? e[u](o.ios || o.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", A, !0) : e[u]("observerUpdate", A, !0)
  };
  var X = {
    attachEvents: function() {
      const e = this, t = a(), {params: s, support: i} = e;
      e.onTouchStart = O.bind(e), e.onTouchMove = I.bind(e), e.onTouchEnd = L.bind(e), s.cssMode && (e.onScroll = G.bind(e)), e.onClick = D.bind(e), i.touch && !B && (t.addEventListener("touchstart", N), B = !0), H(e, "on")
    }, detachEvents: function() {
      H(this, "off")
    }
  };
  const Y = (e, t) => e.grid && t.grid && t.grid.rows > 1;
  var R = {
    addClasses: function() {
      const e = this, {classNames: t, params: s, rtl: a, $el: i, device: r, support: n} = e, l = function(e, t) {
        const s = [];
        return e.forEach((e => {
          "object" == typeof e ? Object.keys(e).forEach((a => {
            e[a] && s.push(t + a)
          })) : "string" == typeof e && s.push(t + e)
        })), s
      }(["initialized", s.direction, {"pointer-events": !n.touch}, {"free-mode": e.params.freeMode && s.freeMode.enabled}, {autoheight: s.autoHeight}, {rtl: a}, {grid: s.grid && s.grid.rows > 1}, {"grid-column": s.grid && s.grid.rows > 1 && "column" === s.grid.fill}, {android: r.android}, {ios: r.ios}, {"css-mode": s.cssMode}, {centered: s.cssMode && s.centeredSlides}], s.containerModifierClass);
      t.push(...l), i.addClass([...t].join(" ")), e.emitContainerClasses()
    }, removeClasses: function() {
      const {$el: e, classNames: t} = this;
      e.removeClass(t.join(" ")), this.emitContainerClasses()
    }
  };
  var W = {
    init: !0,
    direction: "horizontal",
    touchEventsTarget: "wrapper",
    initialSlide: 0,
    speed: 300,
    cssMode: !1,
    updateOnWindowResize: !0,
    resizeObserver: !0,
    nested: !1,
    createElements: !1,
    enabled: !0,
    focusableElements: "input, select, option, textarea, button, video, label",
    width: null,
    height: null,
    preventInteractionOnTransition: !1,
    userAgent: null,
    url: null,
    edgeSwipeDetection: !1,
    edgeSwipeThreshold: 20,
    autoHeight: !1,
    setWrapperSize: !1,
    virtualTranslate: !1,
    effect: "slide",
    breakpoints: void 0,
    breakpointsBase: "window",
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    slidesPerGroupAuto: !1,
    centeredSlides: !1,
    centeredSlidesBounds: !1,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    normalizeSlideIndex: !0,
    centerInsufficientSlides: !1,
    watchOverflow: !0,
    roundLengths: !1,
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: !0,
    shortSwipes: !0,
    longSwipes: !0,
    longSwipesRatio: .5,
    longSwipesMs: 300,
    followFinger: !0,
    allowTouchMove: !0,
    threshold: 0,
    touchMoveStopPropagation: !1,
    touchStartPreventDefault: !0,
    touchStartForcePreventDefault: !1,
    touchReleaseOnEdges: !1,
    uniqueNavElements: !0,
    resistance: !0,
    resistanceRatio: .85,
    watchSlidesProgress: !1,
    grabCursor: !1,
    preventClicks: !0,
    preventClicksPropagation: !0,
    slideToClickedSlide: !1,
    preloadImages: !0,
    updateOnImagesReady: !0,
    loop: !1,
    loopAdditionalSlides: 0,
    loopedSlides: null,
    loopFillGroupWithBlank: !1,
    loopPreventsSlide: !0,
    rewind: !1,
    allowSlidePrev: !0,
    allowSlideNext: !0,
    swipeHandler: null,
    noSwiping: !0,
    noSwipingClass: "swiper-no-swiping",
    noSwipingSelector: null,
    passiveListeners: !0,
    maxBackfaceHiddenSlides: 10,
    containerModifierClass: "swiper-",
    slideClass: "swiper-slide",
    slideBlankClass: "swiper-slide-invisible-blank",
    slideActiveClass: "swiper-slide-active",
    slideDuplicateActiveClass: "swiper-slide-duplicate-active",
    slideVisibleClass: "swiper-slide-visible",
    slideDuplicateClass: "swiper-slide-duplicate",
    slideNextClass: "swiper-slide-next",
    slideDuplicateNextClass: "swiper-slide-duplicate-next",
    slidePrevClass: "swiper-slide-prev",
    slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
    wrapperClass: "swiper-wrapper",
    runCallbacksOnInit: !0,
    _emitClasses: !1
  };

  function j(e, t) {
    return function(s) {
      void 0 === s && (s = {});
      const a = Object.keys(s)[0], i = s[a];
      "object" == typeof i && null !== i ? (["navigation", "pagination", "scrollbar"].indexOf(a) >= 0 && !0 === e[a] && (e[a] = {auto: !0}), a in e && "enabled" in i ? (!0 === e[a] && (e[a] = {enabled: !0}), "object" != typeof e[a] || "enabled" in e[a] || (e[a].enabled = !0), e[a] || (e[a] = {enabled: !1}), g(t, s)) : g(t, s)) : g(t, s)
    }
  }

  const _ = {
    eventsEmitter: $, update: S, translate: M, transition: {
      setTransition: function(e, t) {
        const s = this;
        s.params.cssMode || s.$wrapperEl.transition(e), s.emit("setTransition", e, t)
      }, transitionStart: function(e, t) {
        void 0 === e && (e = !0);
        const s = this, {params: a} = s;
        a.cssMode || (a.autoHeight && s.updateAutoHeight(), P({swiper: s, runCallbacks: e, direction: t, step: "Start"}))
      }, transitionEnd: function(e, t) {
        void 0 === e && (e = !0);
        const s = this, {params: a} = s;
        s.animating = !1, a.cssMode || (s.setTransition(0), P({swiper: s, runCallbacks: e, direction: t, step: "End"}))
      }
    }, slide: k, loop: z, grabCursor: {
      setGrabCursor: function(e) {
        const t = this;
        if (t.support.touch || !t.params.simulateTouch || t.params.watchOverflow && t.isLocked || t.params.cssMode) return;
        const s = "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
        s.style.cursor = "move", s.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab", s.style.cursor = e ? "-moz-grabbin" : "-moz-grab", s.style.cursor = e ? "grabbing" : "grab"
      }, unsetGrabCursor: function() {
        const e = this;
        e.support.touch || e.params.watchOverflow && e.isLocked || e.params.cssMode || (e["container" === e.params.touchEventsTarget ? "el" : "wrapperEl"].style.cursor = "")
      }
    }, events: X, breakpoints: {
      setBreakpoint: function() {
        const e = this, {activeIndex: t, initialized: s, loopedSlides: a = 0, params: i, $el: r} = e, n = i.breakpoints;
        if (!n || n && 0 === Object.keys(n).length) return;
        const l = e.getBreakpoint(n, e.params.breakpointsBase, e.el);
        if (!l || e.currentBreakpoint === l) return;
        const o = (l in n ? n[l] : void 0) || e.originalParams, d = Y(e, i), c = Y(e, o), p = i.enabled;
        d && !c ? (r.removeClass(`${i.containerModifierClass}grid ${i.containerModifierClass}grid-column`), e.emitContainerClasses()) : !d && c && (r.addClass(`${i.containerModifierClass}grid`), (o.grid.fill && "column" === o.grid.fill || !o.grid.fill && "column" === i.grid.fill) && r.addClass(`${i.containerModifierClass}grid-column`), e.emitContainerClasses());
        const u = o.direction && o.direction !== i.direction, h = i.loop && (o.slidesPerView !== i.slidesPerView || u);
        u && s && e.changeDirection(), g(e.params, o);
        const m = e.params.enabled;
        Object.assign(e, {allowTouchMove: e.params.allowTouchMove, allowSlideNext: e.params.allowSlideNext, allowSlidePrev: e.params.allowSlidePrev}), p && !m ? e.disable() : !p && m && e.enable(), e.currentBreakpoint = l, e.emit("_beforeBreakpoint", o), h && s && (e.loopDestroy(), e.loopCreate(), e.updateSlides(), e.slideTo(t - a + e.loopedSlides, 0, !1)), e.emit("breakpoint", o)
      }, getBreakpoint: function(e, t, s) {
        if (void 0 === t && (t = "window"), !e || "container" === t && !s) return;
        let a = !1;
        const i = r(), n = "window" === t ? i.innerHeight : s.clientHeight, l = Object.keys(e).map((e => {
          if ("string" == typeof e && 0 === e.indexOf("@")) {
            const t = parseFloat(e.substr(1));
            return {value: n * t, point: e}
          }
          return {value: e, point: e}
        }));
        l.sort(((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10)));
        for (let e = 0; e < l.length; e += 1) {
          const {point: r, value: n} = l[e];
          "window" === t ? i.matchMedia(`(min-width: ${n}px)`).matches && (a = r) : n <= s.clientWidth && (a = r)
        }
        return a || "max"
      }
    }, checkOverflow: {
      checkOverflow: function() {
        const e = this, {isLocked: t, params: s} = e, {slidesOffsetBefore: a} = s;
        if (a) {
          const t = e.slides.length - 1, s = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * a;
          e.isLocked = e.size > s
        } else e.isLocked = 1 === e.snapGrid.length;
        !0 === s.allowSlideNext && (e.allowSlideNext = !e.isLocked), !0 === s.allowSlidePrev && (e.allowSlidePrev = !e.isLocked), t && t !== e.isLocked && (e.isEnd = !1), t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock")
      }
    }, classes: R, images: {
      loadImage: function(e, t, s, a, i, n) {
        const l = r();
        let o;

        function c() {
          n && n()
        }

        d(e).parent("picture")[0] || e.complete && i ? c() : t ? (o = new l.Image, o.onload = c, o.onerror = c, a && (o.sizes = a), s && (o.srcset = s), t && (o.src = t)) : c()
      }, preloadImages: function() {
        const e = this;

        function t() {
          null != e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")))
        }

        e.imagesToLoad = e.$el.find("img");
        for (let s = 0; s < e.imagesToLoad.length; s += 1) {
          const a = e.imagesToLoad[s];
          e.loadImage(a, a.currentSrc || a.getAttribute("src"), a.srcset || a.getAttribute("srcset"), a.sizes || a.getAttribute("sizes"), !0, t)
        }
      }
    }
  }, q = {};

  class V {
    constructor() {
      let e, t;
      for (var s = arguments.length, a = new Array(s), i = 0; i < s; i++) a[i] = arguments[i];
      if (1 === a.length && a[0].constructor && "Object" === Object.prototype.toString.call(a[0]).slice(8, -1) ? t = a[0] : [e, t] = a, t || (t = {}), t = g({}, t), e && !t.el && (t.el = e), t.el && d(t.el).length > 1) {
        const e = [];
        return d(t.el).each((s => {
          const a = g({}, t, {el: s});
          e.push(new V(a))
        })), e
      }
      const r = this;
      r.__swiper__ = !0, r.support = E(), r.device = T({userAgent: t.userAgent}), r.browser = C(), r.eventsListeners = {}, r.eventsAnyListeners = [], r.modules = [...r.__modules__], t.modules && Array.isArray(t.modules) && r.modules.push(...t.modules);
      const n = {};
      r.modules.forEach((e => {
        e({swiper: r, extendParams: j(t, n), on: r.on.bind(r), once: r.once.bind(r), off: r.off.bind(r), emit: r.emit.bind(r)})
      }));
      const l = g({}, W, n);
      return r.params = g({}, l, q, t), r.originalParams = g({}, r.params), r.passedParams = g({}, t), r.params && r.params.on && Object.keys(r.params.on).forEach((e => {
        r.on(e, r.params.on[e])
      })), r.params && r.params.onAny && r.onAny(r.params.onAny), r.$ = d, Object.assign(r, {
        enabled: r.params.enabled, el: e, classNames: [], slides: d(), slidesGrid: [], snapGrid: [], slidesSizesGrid: [], isHorizontal: () => "horizontal" === r.params.direction, isVertical: () => "vertical" === r.params.direction, activeIndex: 0, realIndex: 0, isBeginning: !0, isEnd: !1, translate: 0, previousTranslate: 0, progress: 0, velocity: 0, animating: !1, allowSlideNext: r.params.allowSlideNext, allowSlidePrev: r.params.allowSlidePrev, touchEvents: function() {
          const e = ["touchstart", "touchmove", "touchend", "touchcancel"], t = ["pointerdown", "pointermove", "pointerup"];
          return r.touchEventsTouch = {start: e[0], move: e[1], end: e[2], cancel: e[3]}, r.touchEventsDesktop = {start: t[0], move: t[1], end: t[2]}, r.support.touch || !r.params.simulateTouch ? r.touchEventsTouch : r.touchEventsDesktop
        }(), touchEventsData: {isTouched: void 0, isMoved: void 0, allowTouchCallbacks: void 0, touchStartTime: void 0, isScrolling: void 0, currentTranslate: void 0, startTranslate: void 0, allowThresholdMove: void 0, focusableElements: r.params.focusableElements, lastClickTime: u(), clickTimeout: void 0, velocities: [], allowMomentumBounce: void 0, isTouchEvent: void 0, startMoving: void 0}, allowClick: !0, allowTouchMove: r.params.allowTouchMove, touches: {startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0}, imagesToLoad: [], imagesLoaded: 0
      }), r.emit("_swiper"), r.params.init && r.init(), r
    }

    enable() {
      const e = this;
      e.enabled || (e.enabled = !0, e.params.grabCursor && e.setGrabCursor(), e.emit("enable"))
    }

    disable() {
      const e = this;
      e.enabled && (e.enabled = !1, e.params.grabCursor && e.unsetGrabCursor(), e.emit("disable"))
    }

    setProgress(e, t) {
      const s = this;
      e = Math.min(Math.max(e, 0), 1);
      const a = s.minTranslate(), i = (s.maxTranslate() - a) * e + a;
      s.translateTo(i, void 0 === t ? 0 : t), s.updateActiveIndex(), s.updateSlidesClasses()
    }

    emitContainerClasses() {
      const e = this;
      if (!e.params._emitClasses || !e.el) return;
      const t = e.el.className.split(" ").filter((t => 0 === t.indexOf("swiper") || 0 === t.indexOf(e.params.containerModifierClass)));
      e.emit("_containerClasses", t.join(" "))
    }

    getSlideClasses(e) {
      const t = this;
      return e.className.split(" ").filter((e => 0 === e.indexOf("swiper-slide") || 0 === e.indexOf(t.params.slideClass))).join(" ")
    }

    emitSlidesClasses() {
      const e = this;
      if (!e.params._emitClasses || !e.el) return;
      const t = [];
      e.slides.each((s => {
        const a = e.getSlideClasses(s);
        t.push({slideEl: s, classNames: a}), e.emit("_slideClass", s, a)
      })), e.emit("_slideClasses", t)
    }

    slidesPerViewDynamic(e, t) {
      void 0 === e && (e = "current"), void 0 === t && (t = !1);
      const {params: s, slides: a, slidesGrid: i, slidesSizesGrid: r, size: n, activeIndex: l} = this;
      let o = 1;
      if (s.centeredSlides) {
        let e, t = a[l].swiperSlideSize;
        for (let s = l + 1; s < a.length; s += 1) a[s] && !e && (t += a[s].swiperSlideSize, o += 1, t > n && (e = !0));
        for (let s = l - 1; s >= 0; s -= 1) a[s] && !e && (t += a[s].swiperSlideSize, o += 1, t > n && (e = !0))
      } else if ("current" === e) for (let e = l + 1; e < a.length; e += 1) {
        (t ? i[e] + r[e] - i[l] < n : i[e] - i[l] < n) && (o += 1)
      } else for (let e = l - 1; e >= 0; e -= 1) {
        i[l] - i[e] < n && (o += 1)
      }
      return o
    }

    update() {
      const e = this;
      if (!e || e.destroyed) return;
      const {snapGrid: t, params: s} = e;

      function a() {
        const t = e.rtlTranslate ? -1 * e.translate : e.translate, s = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
        e.setTranslate(s), e.updateActiveIndex(), e.updateSlidesClasses()
      }

      let i;
      s.breakpoints && e.setBreakpoint(), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.params.freeMode && e.params.freeMode.enabled ? (a(), e.params.autoHeight && e.updateAutoHeight()) : (i = ("auto" === e.params.slidesPerView || e.params.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0), i || a()), s.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update")
    }

    changeDirection(e, t) {
      void 0 === t && (t = !0);
      const s = this, a = s.params.direction;
      return e || (e = "horizontal" === a ? "vertical" : "horizontal"), e === a || "horizontal" !== e && "vertical" !== e || (s.$el.removeClass(`${s.params.containerModifierClass}${a}`).addClass(`${s.params.containerModifierClass}${e}`), s.emitContainerClasses(), s.params.direction = e, s.slides.each((t => {
        "vertical" === e ? t.style.width = "" : t.style.height = ""
      })), s.emit("changeDirection"), t && s.update()), s
    }

    mount(e) {
      const t = this;
      if (t.mounted) return !0;
      const s = d(e || t.params.el);
      if (!(e = s[0])) return !1;
      e.swiper = t;
      const i = () => `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
      let r = (() => {
        if (e && e.shadowRoot && e.shadowRoot.querySelector) {
          const t = d(e.shadowRoot.querySelector(i()));
          return t.children = e => s.children(e), t
        }
        return s.children(i())
      })();
      if (0 === r.length && t.params.createElements) {
        const e = a().createElement("div");
        r = d(e), e.className = t.params.wrapperClass, s.append(e), s.children(`.${t.params.slideClass}`).each((e => {
          r.append(e)
        }))
      }
      return Object.assign(t, {$el: s, el: e, $wrapperEl: r, wrapperEl: r[0], mounted: !0, rtl: "rtl" === e.dir.toLowerCase() || "rtl" === s.css("direction"), rtlTranslate: "horizontal" === t.params.direction && ("rtl" === e.dir.toLowerCase() || "rtl" === s.css("direction")), wrongRTL: "-webkit-box" === r.css("display")}), !0
    }

    init(e) {
      const t = this;
      if (t.initialized) return t;
      return !1 === t.mount(e) || (t.emit("beforeInit"), t.params.breakpoints && t.setBreakpoint(), t.addClasses(), t.params.loop && t.loopCreate(), t.updateSize(), t.updateSlides(), t.params.watchOverflow && t.checkOverflow(), t.params.grabCursor && t.enabled && t.setGrabCursor(), t.params.preloadImages && t.preloadImages(), t.params.loop ? t.slideTo(t.params.initialSlide + t.loopedSlides, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0), t.attachEvents(), t.initialized = !0, t.emit("init"), t.emit("afterInit")), t
    }

    destroy(e, t) {
      void 0 === e && (e = !0), void 0 === t && (t = !0);
      const s = this, {params: a, $el: i, $wrapperEl: r, slides: n} = s;
      return void 0 === s.params || s.destroyed || (s.emit("beforeDestroy"), s.initialized = !1, s.detachEvents(), a.loop && s.loopDestroy(), t && (s.removeClasses(), i.removeAttr("style"), r.removeAttr("style"), n && n.length && n.removeClass([a.slideVisibleClass, a.slideActiveClass, a.slideNextClass, a.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")), s.emit("destroy"), Object.keys(s.eventsListeners).forEach((e => {
        s.off(e)
      })), !1 !== e && (s.$el[0].swiper = null, function(e) {
        const t = e;
        Object.keys(t).forEach((e => {
          try {
            t[e] = null
          } catch (e) {
          }
          try {
            delete t[e]
          } catch (e) {
          }
        }))
      }(s)), s.destroyed = !0), null
    }

    static extendDefaults(e) {
      g(q, e)
    }

    static get extendedDefaults() {
      return q
    }

    static get defaults() {
      return W
    }

    static installModule(e) {
      V.prototype.__modules__ || (V.prototype.__modules__ = []);
      const t = V.prototype.__modules__;
      "function" == typeof e && t.indexOf(e) < 0 && t.push(e)
    }

    static use(e) {
      return Array.isArray(e) ? (e.forEach((e => V.installModule(e))), V) : (V.installModule(e), V)
    }
  }

  function F(e, t, s, i) {
    const r = a();
    return e.params.createElements && Object.keys(i).forEach((a => {
      if (!s[a] && !0 === s.auto) {
        let n = e.$el.children(`.${i[a]}`)[0];
        n || (n = r.createElement("div"), n.className = i[a], e.$el.append(n)), s[a] = n, t[a] = n
      }
    })), s
  }

  function U(e) {
    return void 0 === e && (e = ""), `.${e.trim().replace(/([\.:!\/])/g, "\\$1").replace(/ /g, ".")}`
  }

  function K(e) {
    const t = this, {$wrapperEl: s, params: a} = t;
    if (a.loop && t.loopDestroy(), "object" == typeof e && "length" in e) for (let t = 0; t < e.length; t += 1) e[t] && s.append(e[t]); else s.append(e);
    a.loop && t.loopCreate(), a.observer || t.update()
  }

  function Z(e) {
    const t = this, {params: s, $wrapperEl: a, activeIndex: i} = t;
    s.loop && t.loopDestroy();
    let r = i + 1;
    if ("object" == typeof e && "length" in e) {
      for (let t = 0; t < e.length; t += 1) e[t] && a.prepend(e[t]);
      r = i + e.length
    } else a.prepend(e);
    s.loop && t.loopCreate(), s.observer || t.update(), t.slideTo(r, 0, !1)
  }

  function J(e, t) {
    const s = this, {$wrapperEl: a, params: i, activeIndex: r} = s;
    let n = r;
    i.loop && (n -= s.loopedSlides, s.loopDestroy(), s.slides = a.children(`.${i.slideClass}`));
    const l = s.slides.length;
    if (e <= 0) return void s.prependSlide(t);
    if (e >= l) return void s.appendSlide(t);
    let o = n > e ? n + 1 : n;
    const d = [];
    for (let t = l - 1; t >= e; t -= 1) {
      const e = s.slides.eq(t);
      e.remove(), d.unshift(e)
    }
    if ("object" == typeof t && "length" in t) {
      for (let e = 0; e < t.length; e += 1) t[e] && a.append(t[e]);
      o = n > e ? n + t.length : n
    } else a.append(t);
    for (let e = 0; e < d.length; e += 1) a.append(d[e]);
    i.loop && s.loopCreate(), i.observer || s.update(), i.loop ? s.slideTo(o + s.loopedSlides, 0, !1) : s.slideTo(o, 0, !1)
  }

  function Q(e) {
    const t = this, {params: s, $wrapperEl: a, activeIndex: i} = t;
    let r = i;
    s.loop && (r -= t.loopedSlides, t.loopDestroy(), t.slides = a.children(`.${s.slideClass}`));
    let n, l = r;
    if ("object" == typeof e && "length" in e) {
      for (let s = 0; s < e.length; s += 1) n = e[s], t.slides[n] && t.slides.eq(n).remove(), n < l && (l -= 1);
      l = Math.max(l, 0)
    } else n = e, t.slides[n] && t.slides.eq(n).remove(), n < l && (l -= 1), l = Math.max(l, 0);
    s.loop && t.loopCreate(), s.observer || t.update(), s.loop ? t.slideTo(l + t.loopedSlides, 0, !1) : t.slideTo(l, 0, !1)
  }

  function ee() {
    const e = this, t = [];
    for (let s = 0; s < e.slides.length; s += 1) t.push(s);
    e.removeSlide(t)
  }

  function te(e) {
    const {effect: t, swiper: s, on: a, setTranslate: i, setTransition: r, overwriteParams: n, perspective: l} = e;
    let o;
    a("beforeInit", (() => {
      if (s.params.effect !== t) return;
      s.classNames.push(`${s.params.containerModifierClass}${t}`), l && l() && s.classNames.push(`${s.params.containerModifierClass}3d`);
      const e = n ? n() : {};
      Object.assign(s.params, e), Object.assign(s.originalParams, e)
    })), a("setTranslate", (() => {
      s.params.effect === t && i()
    })), a("setTransition", ((e, a) => {
      s.params.effect === t && r(a)
    })), a("virtualUpdate", (() => {
      s.slides.length || (o = !0), requestAnimationFrame((() => {
        o && s.slides.length && (i(), o = !1)
      }))
    }))
  }

  function se(e, t) {
    return e.transformEl ? t.find(e.transformEl).css({"backface-visibility": "hidden", "-webkit-backface-visibility": "hidden"}) : t
  }

  function ae(e) {
    let {swiper: t, duration: s, transformEl: a, allSlides: i} = e;
    const {slides: r, activeIndex: n, $wrapperEl: l} = t;
    if (t.params.virtualTranslate && 0 !== s) {
      let e, s = !1;
      e = i ? a ? r.find(a) : r : a ? r.eq(n).find(a) : r.eq(n), e.transitionEnd((() => {
        if (s) return;
        if (!t || t.destroyed) return;
        s = !0, t.animating = !1;
        const e = ["webkitTransitionEnd", "transitionend"];
        for (let t = 0; t < e.length; t += 1) l.trigger(e[t])
      }))
    }
  }

  function ie(e, t, s) {
    const a = "swiper-slide-shadow" + (s ? `-${s}` : ""), i = e.transformEl ? t.find(e.transformEl) : t;
    let r = i.children(`.${a}`);
    return r.length || (r = d(`<div class="swiper-slide-shadow${s ? `-${s}` : ""}"></div>`), i.append(r)), r
  }

  Object.keys(_).forEach((e => {
    Object.keys(_[e]).forEach((t => {
      V.prototype[t] = _[e][t]
    }))
  })), V.use([function(e) {
    let {swiper: t, on: s, emit: a} = e;
    const i = r();
    let n = null, l = null;
    const o = () => {
      t && !t.destroyed && t.initialized && (a("beforeResize"), a("resize"))
    }, d = () => {
      t && !t.destroyed && t.initialized && a("orientationchange")
    };
    s("init", (() => {
      t.params.resizeObserver && void 0 !== i.ResizeObserver ? t && !t.destroyed && t.initialized && (n = new ResizeObserver((e => {
        l = i.requestAnimationFrame((() => {
          const {width: s, height: a} = t;
          let i = s, r = a;
          e.forEach((e => {
            let {contentBoxSize: s, contentRect: a, target: n} = e;
            n && n !== t.el || (i = a ? a.width : (s[0] || s).inlineSize, r = a ? a.height : (s[0] || s).blockSize)
          })), i === s && r === a || o()
        }))
      })), n.observe(t.el)) : (i.addEventListener("resize", o), i.addEventListener("orientationchange", d))
    })), s("destroy", (() => {
      l && i.cancelAnimationFrame(l), n && n.unobserve && t.el && (n.unobserve(t.el), n = null), i.removeEventListener("resize", o), i.removeEventListener("orientationchange", d)
    }))
  }, function(e) {
    let {swiper: t, extendParams: s, on: a, emit: i} = e;
    const n = [], l = r(), o = function(e, t) {
      void 0 === t && (t = {});
      const s = new (l.MutationObserver || l.WebkitMutationObserver)((e => {
        if (1 === e.length) return void i("observerUpdate", e[0]);
        const t = function() {
          i("observerUpdate", e[0])
        };
        l.requestAnimationFrame ? l.requestAnimationFrame(t) : l.setTimeout(t, 0)
      }));
      s.observe(e, {attributes: void 0 === t.attributes || t.attributes, childList: void 0 === t.childList || t.childList, characterData: void 0 === t.characterData || t.characterData}), n.push(s)
    };
    s({observer: !1, observeParents: !1, observeSlideChildren: !1}), a("init", (() => {
      if (t.params.observer) {
        if (t.params.observeParents) {
          const e = t.$el.parents();
          for (let t = 0; t < e.length; t += 1) o(e[t])
        }
        o(t.$el[0], {childList: t.params.observeSlideChildren}), o(t.$wrapperEl[0], {attributes: !1})
      }
    })), a("destroy", (() => {
      n.forEach((e => {
        e.disconnect()
      })), n.splice(0, n.length)
    }))
  }]);
  const re = [function(e) {
    let t, {swiper: s, extendParams: a, on: i, emit: r} = e;

    function n(e, t) {
      const a = s.params.virtual;
      if (a.cache && s.virtual.cache[t]) return s.virtual.cache[t];
      const i = a.renderSlide ? d(a.renderSlide.call(s, e, t)) : d(`<div class="${s.params.slideClass}" data-swiper-slide-index="${t}">${e}</div>`);
      return i.attr("data-swiper-slide-index") || i.attr("data-swiper-slide-index", t), a.cache && (s.virtual.cache[t] = i), i
    }

    function l(e) {
      const {slidesPerView: t, slidesPerGroup: a, centeredSlides: i} = s.params, {addSlidesBefore: l, addSlidesAfter: o} = s.params.virtual, {from: d, to: c, slides: p, slidesGrid: u, offset: h} = s.virtual;
      s.params.cssMode || s.updateActiveIndex();
      const m = s.activeIndex || 0;
      let f, g, v;
      f = s.rtlTranslate ? "right" : s.isHorizontal() ? "left" : "top", i ? (g = Math.floor(t / 2) + a + o, v = Math.floor(t / 2) + a + l) : (g = t + (a - 1) + o, v = a + l);
      const w = Math.max((m || 0) - v, 0), b = Math.min((m || 0) + g, p.length - 1), x = (s.slidesGrid[w] || 0) - (s.slidesGrid[0] || 0);

      function y() {
        s.updateSlides(), s.updateProgress(), s.updateSlidesClasses(), s.lazy && s.params.lazy.enabled && s.lazy.load(), r("virtualUpdate")
      }

      if (Object.assign(s.virtual, {from: w, to: b, offset: x, slidesGrid: s.slidesGrid}), d === w && c === b && !e) return s.slidesGrid !== u && x !== h && s.slides.css(f, `${x}px`), s.updateProgress(), void r("virtualUpdate");
      if (s.params.virtual.renderExternal) return s.params.virtual.renderExternal.call(s, {
        offset: x, from: w, to: b, slides: function() {
          const e = [];
          for (let t = w; t <= b; t += 1) e.push(p[t]);
          return e
        }()
      }), void (s.params.virtual.renderExternalUpdate ? y() : r("virtualUpdate"));
      const E = [], T = [];
      if (e) s.$wrapperEl.find(`.${s.params.slideClass}`).remove(); else for (let e = d; e <= c; e += 1) (e < w || e > b) && s.$wrapperEl.find(`.${s.params.slideClass}[data-swiper-slide-index="${e}"]`).remove();
      for (let t = 0; t < p.length; t += 1) t >= w && t <= b && (void 0 === c || e ? T.push(t) : (t > c && T.push(t), t < d && E.push(t)));
      T.forEach((e => {
        s.$wrapperEl.append(n(p[e], e))
      })), E.sort(((e, t) => t - e)).forEach((e => {
        s.$wrapperEl.prepend(n(p[e], e))
      })), s.$wrapperEl.children(".swiper-slide").css(f, `${x}px`), y()
    }

    a({virtual: {enabled: !1, slides: [], cache: !0, renderSlide: null, renderExternal: null, renderExternalUpdate: !0, addSlidesBefore: 0, addSlidesAfter: 0}}), s.virtual = {cache: {}, from: void 0, to: void 0, slides: [], offset: 0, slidesGrid: []}, i("beforeInit", (() => {
      s.params.virtual.enabled && (s.virtual.slides = s.params.virtual.slides, s.classNames.push(`${s.params.containerModifierClass}virtual`), s.params.watchSlidesProgress = !0, s.originalParams.watchSlidesProgress = !0, s.params.initialSlide || l())
    })), i("setTranslate", (() => {
      s.params.virtual.enabled && (s.params.cssMode && !s._immediateVirtual ? (clearTimeout(t), t = setTimeout((() => {
        l()
      }), 100)) : l())
    })), i("init update resize", (() => {
      s.params.virtual.enabled && s.params.cssMode && v(s.wrapperEl, "--swiper-virtual-size", `${s.virtualSize}px`)
    })), Object.assign(s.virtual, {
      appendSlide: function(e) {
        if ("object" == typeof e && "length" in e) for (let t = 0; t < e.length; t += 1) e[t] && s.virtual.slides.push(e[t]); else s.virtual.slides.push(e);
        l(!0)
      }, prependSlide: function(e) {
        const t = s.activeIndex;
        let a = t + 1, i = 1;
        if (Array.isArray(e)) {
          for (let t = 0; t < e.length; t += 1) e[t] && s.virtual.slides.unshift(e[t]);
          a = t + e.length, i = e.length
        } else s.virtual.slides.unshift(e);
        if (s.params.virtual.cache) {
          const e = s.virtual.cache, t = {};
          Object.keys(e).forEach((s => {
            const a = e[s], r = a.attr("data-swiper-slide-index");
            r && a.attr("data-swiper-slide-index", parseInt(r, 10) + i), t[parseInt(s, 10) + i] = a
          })), s.virtual.cache = t
        }
        l(!0), s.slideTo(a, 0)
      }, removeSlide: function(e) {
        if (null == e) return;
        let t = s.activeIndex;
        if (Array.isArray(e)) for (let a = e.length - 1; a >= 0; a -= 1) s.virtual.slides.splice(e[a], 1), s.params.virtual.cache && delete s.virtual.cache[e[a]], e[a] < t && (t -= 1), t = Math.max(t, 0); else s.virtual.slides.splice(e, 1), s.params.virtual.cache && delete s.virtual.cache[e], e < t && (t -= 1), t = Math.max(t, 0);
        l(!0), s.slideTo(t, 0)
      }, removeAllSlides: function() {
        s.virtual.slides = [], s.params.virtual.cache && (s.virtual.cache = {}), l(!0), s.slideTo(0, 0)
      }, update: l
    })
  }, function(e) {
    let {swiper: t, extendParams: s, on: i, emit: n} = e;
    const l = a(), o = r();

    function c(e) {
      if (!t.enabled) return;
      const {rtlTranslate: s} = t;
      let a = e;
      a.originalEvent && (a = a.originalEvent);
      const i = a.keyCode || a.charCode, r = t.params.keyboard.pageUpDown, d = r && 33 === i, c = r && 34 === i, p = 37 === i, u = 39 === i, h = 38 === i, m = 40 === i;
      if (!t.allowSlideNext && (t.isHorizontal() && u || t.isVertical() && m || c)) return !1;
      if (!t.allowSlidePrev && (t.isHorizontal() && p || t.isVertical() && h || d)) return !1;
      if (!(a.shiftKey || a.altKey || a.ctrlKey || a.metaKey || l.activeElement && l.activeElement.nodeName && ("input" === l.activeElement.nodeName.toLowerCase() || "textarea" === l.activeElement.nodeName.toLowerCase()))) {
        if (t.params.keyboard.onlyInViewport && (d || c || p || u || h || m)) {
          let e = !1;
          if (t.$el.parents(`.${t.params.slideClass}`).length > 0 && 0 === t.$el.parents(`.${t.params.slideActiveClass}`).length) return;
          const a = t.$el, i = a[0].clientWidth, r = a[0].clientHeight, n = o.innerWidth, l = o.innerHeight, d = t.$el.offset();
          s && (d.left -= t.$el[0].scrollLeft);
          const c = [[d.left, d.top], [d.left + i, d.top], [d.left, d.top + r], [d.left + i, d.top + r]];
          for (let t = 0; t < c.length; t += 1) {
            const s = c[t];
            if (s[0] >= 0 && s[0] <= n && s[1] >= 0 && s[1] <= l) {
              if (0 === s[0] && 0 === s[1]) continue;
              e = !0
            }
          }
          if (!e) return
        }
        t.isHorizontal() ? ((d || c || p || u) && (a.preventDefault ? a.preventDefault() : a.returnValue = !1), ((c || u) && !s || (d || p) && s) && t.slideNext(), ((d || p) && !s || (c || u) && s) && t.slidePrev()) : ((d || c || h || m) && (a.preventDefault ? a.preventDefault() : a.returnValue = !1), (c || m) && t.slideNext(), (d || h) && t.slidePrev()), n("keyPress", i)
      }
    }

    function p() {
      t.keyboard.enabled || (d(l).on("keydown", c), t.keyboard.enabled = !0)
    }

    function u() {
      t.keyboard.enabled && (d(l).off("keydown", c), t.keyboard.enabled = !1)
    }

    t.keyboard = {enabled: !1}, s({keyboard: {enabled: !1, onlyInViewport: !0, pageUpDown: !0}}), i("init", (() => {
      t.params.keyboard.enabled && p()
    })), i("destroy", (() => {
      t.keyboard.enabled && u()
    })), Object.assign(t.keyboard, {enable: p, disable: u})
  }, function(e) {
    let {swiper: t, extendParams: s, on: a, emit: i} = e;
    const n = r();
    let l;
    s({mousewheel: {enabled: !1, releaseOnEdges: !1, invert: !1, forceToAxis: !1, sensitivity: 1, eventsTarget: "container", thresholdDelta: null, thresholdTime: null}}), t.mousewheel = {enabled: !1};
    let o, c = u();
    const h = [];

    function m() {
      t.enabled && (t.mouseEntered = !0)
    }

    function f() {
      t.enabled && (t.mouseEntered = !1)
    }

    function g(e) {
      return !(t.params.mousewheel.thresholdDelta && e.delta < t.params.mousewheel.thresholdDelta) && (!(t.params.mousewheel.thresholdTime && u() - c < t.params.mousewheel.thresholdTime) && (e.delta >= 6 && u() - c < 60 || (e.direction < 0 ? t.isEnd && !t.params.loop || t.animating || (t.slideNext(), i("scroll", e.raw)) : t.isBeginning && !t.params.loop || t.animating || (t.slidePrev(), i("scroll", e.raw)), c = (new n.Date).getTime(), !1)))
    }

    function v(e) {
      let s = e, a = !0;
      if (!t.enabled) return;
      const r = t.params.mousewheel;
      t.params.cssMode && s.preventDefault();
      let n = t.$el;
      if ("container" !== t.params.mousewheel.eventsTarget && (n = d(t.params.mousewheel.eventsTarget)), !t.mouseEntered && !n[0].contains(s.target) && !r.releaseOnEdges) return !0;
      s.originalEvent && (s = s.originalEvent);
      let c = 0;
      const m = t.rtlTranslate ? -1 : 1, f = function(e) {
        let t = 0, s = 0, a = 0, i = 0;
        return "detail" in e && (s = e.detail), "wheelDelta" in e && (s = -e.wheelDelta / 120), "wheelDeltaY" in e && (s = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = s, s = 0), a = 10 * t, i = 10 * s, "deltaY" in e && (i = e.deltaY), "deltaX" in e && (a = e.deltaX), e.shiftKey && !a && (a = i, i = 0), (a || i) && e.deltaMode && (1 === e.deltaMode ? (a *= 40, i *= 40) : (a *= 800, i *= 800)), a && !t && (t = a < 1 ? -1 : 1), i && !s && (s = i < 1 ? -1 : 1), {spinX: t, spinY: s, pixelX: a, pixelY: i}
      }(s);
      if (r.forceToAxis) if (t.isHorizontal()) {
        if (!(Math.abs(f.pixelX) > Math.abs(f.pixelY))) return !0;
        c = -f.pixelX * m
      } else {
        if (!(Math.abs(f.pixelY) > Math.abs(f.pixelX))) return !0;
        c = -f.pixelY
      } else c = Math.abs(f.pixelX) > Math.abs(f.pixelY) ? -f.pixelX * m : -f.pixelY;
      if (0 === c) return !0;
      r.invert && (c = -c);
      let v = t.getTranslate() + c * r.sensitivity;
      if (v >= t.minTranslate() && (v = t.minTranslate()), v <= t.maxTranslate() && (v = t.maxTranslate()), a = !!t.params.loop || !(v === t.minTranslate() || v === t.maxTranslate()), a && t.params.nested && s.stopPropagation(), t.params.freeMode && t.params.freeMode.enabled) {
        const e = {time: u(), delta: Math.abs(c), direction: Math.sign(c)}, a = o && e.time < o.time + 500 && e.delta <= o.delta && e.direction === o.direction;
        if (!a) {
          o = void 0, t.params.loop && t.loopFix();
          let n = t.getTranslate() + c * r.sensitivity;
          const d = t.isBeginning, u = t.isEnd;
          if (n >= t.minTranslate() && (n = t.minTranslate()), n <= t.maxTranslate() && (n = t.maxTranslate()), t.setTransition(0), t.setTranslate(n), t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses(), (!d && t.isBeginning || !u && t.isEnd) && t.updateSlidesClasses(), t.params.freeMode.sticky) {
            clearTimeout(l), l = void 0, h.length >= 15 && h.shift();
            const s = h.length ? h[h.length - 1] : void 0, a = h[0];
            if (h.push(e), s && (e.delta > s.delta || e.direction !== s.direction)) h.splice(0); else if (h.length >= 15 && e.time - a.time < 500 && a.delta - e.delta >= 1 && e.delta <= 6) {
              const s = c > 0 ? .8 : .2;
              o = e, h.splice(0), l = p((() => {
                t.slideToClosest(t.params.speed, !0, void 0, s)
              }), 0)
            }
            l || (l = p((() => {
              o = e, h.splice(0), t.slideToClosest(t.params.speed, !0, void 0, .5)
            }), 500))
          }
          if (a || i("scroll", s), t.params.autoplay && t.params.autoplayDisableOnInteraction && t.autoplay.stop(), n === t.minTranslate() || n === t.maxTranslate()) return !0
        }
      } else {
        const s = {time: u(), delta: Math.abs(c), direction: Math.sign(c), raw: e};
        h.length >= 2 && h.shift();
        const a = h.length ? h[h.length - 1] : void 0;
        if (h.push(s), a ? (s.direction !== a.direction || s.delta > a.delta || s.time > a.time + 150) && g(s) : g(s), function(e) {
          const s = t.params.mousewheel;
          if (e.direction < 0) {
            if (t.isEnd && !t.params.loop && s.releaseOnEdges) return !0
          } else if (t.isBeginning && !t.params.loop && s.releaseOnEdges) return !0;
          return !1
        }(s)) return !0
      }
      return s.preventDefault ? s.preventDefault() : s.returnValue = !1, !1
    }

    function w(e) {
      let s = t.$el;
      "container" !== t.params.mousewheel.eventsTarget && (s = d(t.params.mousewheel.eventsTarget)), s[e]("mouseenter", m), s[e]("mouseleave", f), s[e]("wheel", v)
    }

    function b() {
      return t.params.cssMode ? (t.wrapperEl.removeEventListener("wheel", v), !0) : !t.mousewheel.enabled && (w("on"), t.mousewheel.enabled = !0, !0)
    }

    function x() {
      return t.params.cssMode ? (t.wrapperEl.addEventListener(event, v), !0) : !!t.mousewheel.enabled && (w("off"), t.mousewheel.enabled = !1, !0)
    }

    a("init", (() => {
      !t.params.mousewheel.enabled && t.params.cssMode && x(), t.params.mousewheel.enabled && b()
    })), a("destroy", (() => {
      t.params.cssMode && b(), t.mousewheel.enabled && x()
    })), Object.assign(t.mousewheel, {enable: b, disable: x})
  }, function(e) {
    let {swiper: t, extendParams: s, on: a, emit: i} = e;

    function r(e) {
      let s;
      return e && (s = d(e), t.params.uniqueNavElements && "string" == typeof e && s.length > 1 && 1 === t.$el.find(e).length && (s = t.$el.find(e))), s
    }

    function n(e, s) {
      const a = t.params.navigation;
      e && e.length > 0 && (e[s ? "addClass" : "removeClass"](a.disabledClass), e[0] && "BUTTON" === e[0].tagName && (e[0].disabled = s), t.params.watchOverflow && t.enabled && e[t.isLocked ? "addClass" : "removeClass"](a.lockClass))
    }

    function l() {
      if (t.params.loop) return;
      const {$nextEl: e, $prevEl: s} = t.navigation;
      n(s, t.isBeginning && !t.params.rewind), n(e, t.isEnd && !t.params.rewind)
    }

    function o(e) {
      e.preventDefault(), (!t.isBeginning || t.params.loop || t.params.rewind) && t.slidePrev()
    }

    function c(e) {
      e.preventDefault(), (!t.isEnd || t.params.loop || t.params.rewind) && t.slideNext()
    }

    function p() {
      const e = t.params.navigation;
      if (t.params.navigation = F(t, t.originalParams.navigation, t.params.navigation, {nextEl: "swiper-button-next", prevEl: "swiper-button-prev"}), !e.nextEl && !e.prevEl) return;
      const s = r(e.nextEl), a = r(e.prevEl);
      s && s.length > 0 && s.on("click", c), a && a.length > 0 && a.on("click", o), Object.assign(t.navigation, {$nextEl: s, nextEl: s && s[0], $prevEl: a, prevEl: a && a[0]}), t.enabled || (s && s.addClass(e.lockClass), a && a.addClass(e.lockClass))
    }

    function u() {
      const {$nextEl: e, $prevEl: s} = t.navigation;
      e && e.length && (e.off("click", c), e.removeClass(t.params.navigation.disabledClass)), s && s.length && (s.off("click", o), s.removeClass(t.params.navigation.disabledClass))
    }

    s({navigation: {nextEl: null, prevEl: null, hideOnClick: !1, disabledClass: "swiper-button-disabled", hiddenClass: "swiper-button-hidden", lockClass: "swiper-button-lock"}}), t.navigation = {nextEl: null, $nextEl: null, prevEl: null, $prevEl: null}, a("init", (() => {
      p(), l()
    })), a("toEdge fromEdge lock unlock", (() => {
      l()
    })), a("destroy", (() => {
      u()
    })), a("enable disable", (() => {
      const {$nextEl: e, $prevEl: s} = t.navigation;
      e && e[t.enabled ? "removeClass" : "addClass"](t.params.navigation.lockClass), s && s[t.enabled ? "removeClass" : "addClass"](t.params.navigation.lockClass)
    })), a("click", ((e, s) => {
      const {$nextEl: a, $prevEl: r} = t.navigation, n = s.target;
      if (t.params.navigation.hideOnClick && !d(n).is(r) && !d(n).is(a)) {
        if (t.pagination && t.params.pagination && t.params.pagination.clickable && (t.pagination.el === n || t.pagination.el.contains(n))) return;
        let e;
        a ? e = a.hasClass(t.params.navigation.hiddenClass) : r && (e = r.hasClass(t.params.navigation.hiddenClass)), i(!0 === e ? "navigationShow" : "navigationHide"), a && a.toggleClass(t.params.navigation.hiddenClass), r && r.toggleClass(t.params.navigation.hiddenClass)
      }
    })), Object.assign(t.navigation, {update: l, init: p, destroy: u})
  }, function(e) {
    let {swiper: t, extendParams: s, on: a, emit: i} = e;
    const r = "swiper-pagination";
    let n;
    s({pagination: {el: null, bulletElement: "span", clickable: !1, hideOnClick: !1, renderBullet: null, renderProgressbar: null, renderFraction: null, renderCustom: null, progressbarOpposite: !1, type: "bullets", dynamicBullets: !1, dynamicMainBullets: 1, formatFractionCurrent: e => e, formatFractionTotal: e => e, bulletClass: `${r}-bullet`, bulletActiveClass: `${r}-bullet-active`, modifierClass: `${r}-`, currentClass: `${r}-current`, totalClass: `${r}-total`, hiddenClass: `${r}-hidden`, progressbarFillClass: `${r}-progressbar-fill`, progressbarOppositeClass: `${r}-progressbar-opposite`, clickableClass: `${r}-clickable`, lockClass: `${r}-lock`, horizontalClass: `${r}-horizontal`, verticalClass: `${r}-vertical`}}), t.pagination = {el: null, $el: null, bullets: []};
    let l = 0;

    function o() {
      return !t.params.pagination.el || !t.pagination.el || !t.pagination.$el || 0 === t.pagination.$el.length
    }

    function c(e, s) {
      const {bulletActiveClass: a} = t.params.pagination;
      e[s]().addClass(`${a}-${s}`)[s]().addClass(`${a}-${s}-${s}`)
    }

    function p() {
      const e = t.rtl, s = t.params.pagination;
      if (o()) return;
      const a = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.slides.length, r = t.pagination.$el;
      let p;
      const u = t.params.loop ? Math.ceil((a - 2 * t.loopedSlides) / t.params.slidesPerGroup) : t.snapGrid.length;
      if (t.params.loop ? (p = Math.ceil((t.activeIndex - t.loopedSlides) / t.params.slidesPerGroup), p > a - 1 - 2 * t.loopedSlides && (p -= a - 2 * t.loopedSlides), p > u - 1 && (p -= u), p < 0 && "bullets" !== t.params.paginationType && (p = u + p)) : p = void 0 !== t.snapIndex ? t.snapIndex : t.activeIndex || 0, "bullets" === s.type && t.pagination.bullets && t.pagination.bullets.length > 0) {
        const a = t.pagination.bullets;
        let i, o, u;
        if (s.dynamicBullets && (n = a.eq(0)[t.isHorizontal() ? "outerWidth" : "outerHeight"](!0), r.css(t.isHorizontal() ? "width" : "height", n * (s.dynamicMainBullets + 4) + "px"), s.dynamicMainBullets > 1 && void 0 !== t.previousIndex && (l += p - (t.previousIndex - t.loopedSlides || 0), l > s.dynamicMainBullets - 1 ? l = s.dynamicMainBullets - 1 : l < 0 && (l = 0)), i = Math.max(p - l, 0), o = i + (Math.min(a.length, s.dynamicMainBullets) - 1), u = (o + i) / 2), a.removeClass(["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map((e => `${s.bulletActiveClass}${e}`)).join(" ")), r.length > 1) a.each((e => {
          const t = d(e), a = t.index();
          a === p && t.addClass(s.bulletActiveClass), s.dynamicBullets && (a >= i && a <= o && t.addClass(`${s.bulletActiveClass}-main`), a === i && c(t, "prev"), a === o && c(t, "next"))
        })); else {
          const e = a.eq(p), r = e.index();
          if (e.addClass(s.bulletActiveClass), s.dynamicBullets) {
            const e = a.eq(i), n = a.eq(o);
            for (let e = i; e <= o; e += 1) a.eq(e).addClass(`${s.bulletActiveClass}-main`);
            if (t.params.loop) if (r >= a.length) {
              for (let e = s.dynamicMainBullets; e >= 0; e -= 1) a.eq(a.length - e).addClass(`${s.bulletActiveClass}-main`);
              a.eq(a.length - s.dynamicMainBullets - 1).addClass(`${s.bulletActiveClass}-prev`)
            } else c(e, "prev"), c(n, "next"); else c(e, "prev"), c(n, "next")
          }
        }
        if (s.dynamicBullets) {
          const i = Math.min(a.length, s.dynamicMainBullets + 4), r = (n * i - n) / 2 - u * n, l = e ? "right" : "left";
          a.css(t.isHorizontal() ? l : "top", `${r}px`)
        }
      }
      if ("fraction" === s.type && (r.find(U(s.currentClass)).text(s.formatFractionCurrent(p + 1)), r.find(U(s.totalClass)).text(s.formatFractionTotal(u))), "progressbar" === s.type) {
        let e;
        e = s.progressbarOpposite ? t.isHorizontal() ? "vertical" : "horizontal" : t.isHorizontal() ? "horizontal" : "vertical";
        const a = (p + 1) / u;
        let i = 1, n = 1;
        "horizontal" === e ? i = a : n = a, r.find(U(s.progressbarFillClass)).transform(`translate3d(0,0,0) scaleX(${i}) scaleY(${n})`).transition(t.params.speed)
      }
      "custom" === s.type && s.renderCustom ? (r.html(s.renderCustom(t, p + 1, u)), i("paginationRender", r[0])) : i("paginationUpdate", r[0]), t.params.watchOverflow && t.enabled && r[t.isLocked ? "addClass" : "removeClass"](s.lockClass)
    }

    function u() {
      const e = t.params.pagination;
      if (o()) return;
      const s = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.slides.length, a = t.pagination.$el;
      let r = "";
      if ("bullets" === e.type) {
        let i = t.params.loop ? Math.ceil((s - 2 * t.loopedSlides) / t.params.slidesPerGroup) : t.snapGrid.length;
        t.params.freeMode && t.params.freeMode.enabled && !t.params.loop && i > s && (i = s);
        for (let s = 0; s < i; s += 1) e.renderBullet ? r += e.renderBullet.call(t, s, e.bulletClass) : r += `<${e.bulletElement} class="${e.bulletClass}"></${e.bulletElement}>`;
        a.html(r), t.pagination.bullets = a.find(U(e.bulletClass))
      }
      "fraction" === e.type && (r = e.renderFraction ? e.renderFraction.call(t, e.currentClass, e.totalClass) : `<span class="${e.currentClass}"></span> / <span class="${e.totalClass}"></span>`, a.html(r)), "progressbar" === e.type && (r = e.renderProgressbar ? e.renderProgressbar.call(t, e.progressbarFillClass) : `<span class="${e.progressbarFillClass}"></span>`, a.html(r)), "custom" !== e.type && i("paginationRender", t.pagination.$el[0])
    }

    function h() {
      t.params.pagination = F(t, t.originalParams.pagination, t.params.pagination, {el: "swiper-pagination"});
      const e = t.params.pagination;
      if (!e.el) return;
      let s = d(e.el);
      0 !== s.length && (t.params.uniqueNavElements && "string" == typeof e.el && s.length > 1 && (s = t.$el.find(e.el), s.length > 1 && (s = s.filter((e => d(e).parents(".swiper")[0] === t.el)))), "bullets" === e.type && e.clickable && s.addClass(e.clickableClass), s.addClass(e.modifierClass + e.type), s.addClass(t.isHorizontal() ? e.horizontalClass : e.verticalClass), "bullets" === e.type && e.dynamicBullets && (s.addClass(`${e.modifierClass}${e.type}-dynamic`), l = 0, e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)), "progressbar" === e.type && e.progressbarOpposite && s.addClass(e.progressbarOppositeClass), e.clickable && s.on("click", U(e.bulletClass), (function(e) {
        e.preventDefault();
        let s = d(this).index() * t.params.slidesPerGroup;
        t.params.loop && (s += t.loopedSlides), t.slideTo(s)
      })), Object.assign(t.pagination, {$el: s, el: s[0]}), t.enabled || s.addClass(e.lockClass))
    }

    function m() {
      const e = t.params.pagination;
      if (o()) return;
      const s = t.pagination.$el;
      s.removeClass(e.hiddenClass), s.removeClass(e.modifierClass + e.type), s.removeClass(t.isHorizontal() ? e.horizontalClass : e.verticalClass), t.pagination.bullets && t.pagination.bullets.removeClass && t.pagination.bullets.removeClass(e.bulletActiveClass), e.clickable && s.off("click", U(e.bulletClass))
    }

    a("init", (() => {
      h(), u(), p()
    })), a("activeIndexChange", (() => {
      (t.params.loop || void 0 === t.snapIndex) && p()
    })), a("snapIndexChange", (() => {
      t.params.loop || p()
    })), a("slidesLengthChange", (() => {
      t.params.loop && (u(), p())
    })), a("snapGridLengthChange", (() => {
      t.params.loop || (u(), p())
    })), a("destroy", (() => {
      m()
    })), a("enable disable", (() => {
      const {$el: e} = t.pagination;
      e && e[t.enabled ? "removeClass" : "addClass"](t.params.pagination.lockClass)
    })), a("lock unlock", (() => {
      p()
    })), a("click", ((e, s) => {
      const a = s.target, {$el: r} = t.pagination;
      if (t.params.pagination.el && t.params.pagination.hideOnClick && r.length > 0 && !d(a).hasClass(t.params.pagination.bulletClass)) {
        if (t.navigation && (t.navigation.nextEl && a === t.navigation.nextEl || t.navigation.prevEl && a === t.navigation.prevEl)) return;
        const e = r.hasClass(t.params.pagination.hiddenClass);
        i(!0 === e ? "paginationShow" : "paginationHide"), r.toggleClass(t.params.pagination.hiddenClass)
      }
    })), Object.assign(t.pagination, {render: u, update: p, init: h, destroy: m})
  }, function(e) {
    let {swiper: t, extendParams: s, on: i, emit: r} = e;
    const n = a();
    let l, o, c, u, h = !1, m = null, f = null;

    function g() {
      if (!t.params.scrollbar.el || !t.scrollbar.el) return;
      const {scrollbar: e, rtlTranslate: s, progress: a} = t, {$dragEl: i, $el: r} = e, n = t.params.scrollbar;
      let l = o, d = (c - o) * a;
      s ? (d = -d, d > 0 ? (l = o - d, d = 0) : -d + o > c && (l = c + d)) : d < 0 ? (l = o + d, d = 0) : d + o > c && (l = c - d), t.isHorizontal() ? (i.transform(`translate3d(${d}px, 0, 0)`), i[0].style.width = `${l}px`) : (i.transform(`translate3d(0px, ${d}px, 0)`), i[0].style.height = `${l}px`), n.hide && (clearTimeout(m), r[0].style.opacity = 1, m = setTimeout((() => {
        r[0].style.opacity = 0, r.transition(400)
      }), 1e3))
    }

    function v() {
      if (!t.params.scrollbar.el || !t.scrollbar.el) return;
      const {scrollbar: e} = t, {$dragEl: s, $el: a} = e;
      s[0].style.width = "", s[0].style.height = "", c = t.isHorizontal() ? a[0].offsetWidth : a[0].offsetHeight, u = t.size / (t.virtualSize + t.params.slidesOffsetBefore - (t.params.centeredSlides ? t.snapGrid[0] : 0)), o = "auto" === t.params.scrollbar.dragSize ? c * u : parseInt(t.params.scrollbar.dragSize, 10), t.isHorizontal() ? s[0].style.width = `${o}px` : s[0].style.height = `${o}px`, a[0].style.display = u >= 1 ? "none" : "", t.params.scrollbar.hide && (a[0].style.opacity = 0), t.params.watchOverflow && t.enabled && e.$el[t.isLocked ? "addClass" : "removeClass"](t.params.scrollbar.lockClass)
    }

    function w(e) {
      return t.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].clientX : e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].clientY : e.clientY
    }

    function b(e) {
      const {scrollbar: s, rtlTranslate: a} = t, {$el: i} = s;
      let r;
      r = (w(e) - i.offset()[t.isHorizontal() ? "left" : "top"] - (null !== l ? l : o / 2)) / (c - o), r = Math.max(Math.min(r, 1), 0), a && (r = 1 - r);
      const n = t.minTranslate() + (t.maxTranslate() - t.minTranslate()) * r;
      t.updateProgress(n), t.setTranslate(n), t.updateActiveIndex(), t.updateSlidesClasses()
    }

    function x(e) {
      const s = t.params.scrollbar, {scrollbar: a, $wrapperEl: i} = t, {$el: n, $dragEl: o} = a;
      h = !0, l = e.target === o[0] || e.target === o ? w(e) - e.target.getBoundingClientRect()[t.isHorizontal() ? "left" : "top"] : null, e.preventDefault(), e.stopPropagation(), i.transition(100), o.transition(100), b(e), clearTimeout(f), n.transition(0), s.hide && n.css("opacity", 1), t.params.cssMode && t.$wrapperEl.css("scroll-snap-type", "none"), r("scrollbarDragStart", e)
    }

    function y(e) {
      const {scrollbar: s, $wrapperEl: a} = t, {$el: i, $dragEl: n} = s;
      h && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, b(e), a.transition(0), i.transition(0), n.transition(0), r("scrollbarDragMove", e))
    }

    function E(e) {
      const s = t.params.scrollbar, {scrollbar: a, $wrapperEl: i} = t, {$el: n} = a;
      h && (h = !1, t.params.cssMode && (t.$wrapperEl.css("scroll-snap-type", ""), i.transition("")), s.hide && (clearTimeout(f), f = p((() => {
        n.css("opacity", 0), n.transition(400)
      }), 1e3)), r("scrollbarDragEnd", e), s.snapOnRelease && t.slideToClosest())
    }

    function T(e) {
      const {scrollbar: s, touchEventsTouch: a, touchEventsDesktop: i, params: r, support: l} = t, o = s.$el[0], d = !(!l.passiveListener || !r.passiveListeners) && {passive: !1, capture: !1}, c = !(!l.passiveListener || !r.passiveListeners) && {passive: !0, capture: !1};
      if (!o) return;
      const p = "on" === e ? "addEventListener" : "removeEventListener";
      l.touch ? (o[p](a.start, x, d), o[p](a.move, y, d), o[p](a.end, E, c)) : (o[p](i.start, x, d), n[p](i.move, y, d), n[p](i.end, E, c))
    }

    function C() {
      const {scrollbar: e, $el: s} = t;
      t.params.scrollbar = F(t, t.originalParams.scrollbar, t.params.scrollbar, {el: "swiper-scrollbar"});
      const a = t.params.scrollbar;
      if (!a.el) return;
      let i = d(a.el);
      t.params.uniqueNavElements && "string" == typeof a.el && i.length > 1 && 1 === s.find(a.el).length && (i = s.find(a.el));
      let r = i.find(`.${t.params.scrollbar.dragClass}`);
      0 === r.length && (r = d(`<div class="${t.params.scrollbar.dragClass}"></div>`), i.append(r)), Object.assign(e, {$el: i, el: i[0], $dragEl: r, dragEl: r[0]}), a.draggable && t.params.scrollbar.el && T("on"), i && i[t.enabled ? "removeClass" : "addClass"](t.params.scrollbar.lockClass)
    }

    function $() {
      t.params.scrollbar.el && T("off")
    }

    s({scrollbar: {el: null, dragSize: "auto", hide: !1, draggable: !1, snapOnRelease: !0, lockClass: "swiper-scrollbar-lock", dragClass: "swiper-scrollbar-drag"}}), t.scrollbar = {el: null, dragEl: null, $el: null, $dragEl: null}, i("init", (() => {
      C(), v(), g()
    })), i("update resize observerUpdate lock unlock", (() => {
      v()
    })), i("setTranslate", (() => {
      g()
    })), i("setTransition", ((e, s) => {
      !function(e) {
        t.params.scrollbar.el && t.scrollbar.el && t.scrollbar.$dragEl.transition(e)
      }(s)
    })), i("enable disable", (() => {
      const {$el: e} = t.scrollbar;
      e && e[t.enabled ? "removeClass" : "addClass"](t.params.scrollbar.lockClass)
    })), i("destroy", (() => {
      $()
    })), Object.assign(t.scrollbar, {updateSize: v, setTranslate: g, init: C, destroy: $})
  }, function(e) {
    let {swiper: t, extendParams: s, on: a} = e;
    s({parallax: {enabled: !1}});
    const i = (e, s) => {
      const {rtl: a} = t, i = d(e), r = a ? -1 : 1, n = i.attr("data-swiper-parallax") || "0";
      let l = i.attr("data-swiper-parallax-x"), o = i.attr("data-swiper-parallax-y");
      const c = i.attr("data-swiper-parallax-scale"), p = i.attr("data-swiper-parallax-opacity");
      if (l || o ? (l = l || "0", o = o || "0") : t.isHorizontal() ? (l = n, o = "0") : (o = n, l = "0"), l = l.indexOf("%") >= 0 ? parseInt(l, 10) * s * r + "%" : l * s * r + "px", o = o.indexOf("%") >= 0 ? parseInt(o, 10) * s + "%" : o * s + "px", null != p) {
        const e = p - (p - 1) * (1 - Math.abs(s));
        i[0].style.opacity = e
      }
      if (null == c) i.transform(`translate3d(${l}, ${o}, 0px)`); else {
        const e = c - (c - 1) * (1 - Math.abs(s));
        i.transform(`translate3d(${l}, ${o}, 0px) scale(${e})`)
      }
    }, r = () => {
      const {$el: e, slides: s, progress: a, snapGrid: r} = t;
      e.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((e => {
        i(e, a)
      })), s.each(((e, s) => {
        let n = e.progress;
        t.params.slidesPerGroup > 1 && "auto" !== t.params.slidesPerView && (n += Math.ceil(s / 2) - a * (r.length - 1)), n = Math.min(Math.max(n, -1), 1), d(e).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((e => {
          i(e, n)
        }))
      }))
    };
    a("beforeInit", (() => {
      t.params.parallax.enabled && (t.params.watchSlidesProgress = !0, t.originalParams.watchSlidesProgress = !0)
    })), a("init", (() => {
      t.params.parallax.enabled && r()
    })), a("setTranslate", (() => {
      t.params.parallax.enabled && r()
    })), a("setTransition", ((e, s) => {
      t.params.parallax.enabled && function(e) {
        void 0 === e && (e = t.params.speed);
        const {$el: s} = t;
        s.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((t => {
          const s = d(t);
          let a = parseInt(s.attr("data-swiper-parallax-duration"), 10) || e;
          0 === e && (a = 0), s.transition(a)
        }))
      }(s)
    }))
  }, function(e) {
    let {swiper: t, extendParams: s, on: a, emit: i} = e;
    const n = r();
    s({zoom: {enabled: !1, maxRatio: 3, minRatio: 1, toggle: !0, containerClass: "swiper-zoom-container", zoomedSlideClass: "swiper-slide-zoomed"}}), t.zoom = {enabled: !1};
    let l, o, c, p = 1, u = !1;
    const m = {$slideEl: void 0, slideWidth: void 0, slideHeight: void 0, $imageEl: void 0, $imageWrapEl: void 0, maxRatio: 3}, f = {isTouched: void 0, isMoved: void 0, currentX: void 0, currentY: void 0, minX: void 0, minY: void 0, maxX: void 0, maxY: void 0, width: void 0, height: void 0, startX: void 0, startY: void 0, touchesStart: {}, touchesCurrent: {}}, g = {x: void 0, y: void 0, prevPositionX: void 0, prevPositionY: void 0, prevTime: void 0};
    let v = 1;

    function w(e) {
      if (e.targetTouches.length < 2) return 1;
      const t = e.targetTouches[0].pageX, s = e.targetTouches[0].pageY, a = e.targetTouches[1].pageX, i = e.targetTouches[1].pageY;
      return Math.sqrt((a - t) ** 2 + (i - s) ** 2)
    }

    function b(e) {
      const s = t.support, a = t.params.zoom;
      if (o = !1, c = !1, !s.gestures) {
        if ("touchstart" !== e.type || "touchstart" === e.type && e.targetTouches.length < 2) return;
        o = !0, m.scaleStart = w(e)
      }
      m.$slideEl && m.$slideEl.length || (m.$slideEl = d(e.target).closest(`.${t.params.slideClass}`), 0 === m.$slideEl.length && (m.$slideEl = t.slides.eq(t.activeIndex)), m.$imageEl = m.$slideEl.find(`.${a.containerClass}`).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0), m.$imageWrapEl = m.$imageEl.parent(`.${a.containerClass}`), m.maxRatio = m.$imageWrapEl.attr("data-swiper-zoom") || a.maxRatio, 0 !== m.$imageWrapEl.length) ? (m.$imageEl && m.$imageEl.transition(0), u = !0) : m.$imageEl = void 0
    }

    function x(e) {
      const s = t.support, a = t.params.zoom, i = t.zoom;
      if (!s.gestures) {
        if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2) return;
        c = !0, m.scaleMove = w(e)
      }
      m.$imageEl && 0 !== m.$imageEl.length ? (s.gestures ? i.scale = e.scale * p : i.scale = m.scaleMove / m.scaleStart * p, i.scale > m.maxRatio && (i.scale = m.maxRatio - 1 + (i.scale - m.maxRatio + 1) ** .5), i.scale < a.minRatio && (i.scale = a.minRatio + 1 - (a.minRatio - i.scale + 1) ** .5), m.$imageEl.transform(`translate3d(0,0,0) scale(${i.scale})`)) : "gesturechange" === e.type && b(e)
    }

    function y(e) {
      const s = t.device, a = t.support, i = t.params.zoom, r = t.zoom;
      if (!a.gestures) {
        if (!o || !c) return;
        if ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2 && !s.android) return;
        o = !1, c = !1
      }
      m.$imageEl && 0 !== m.$imageEl.length && (r.scale = Math.max(Math.min(r.scale, m.maxRatio), i.minRatio), m.$imageEl.transition(t.params.speed).transform(`translate3d(0,0,0) scale(${r.scale})`), p = r.scale, u = !1, 1 === r.scale && (m.$slideEl = void 0))
    }

    function E(e) {
      const s = t.zoom;
      if (!m.$imageEl || 0 === m.$imageEl.length) return;
      if (t.allowClick = !1, !f.isTouched || !m.$slideEl) return;
      f.isMoved || (f.width = m.$imageEl[0].offsetWidth, f.height = m.$imageEl[0].offsetHeight, f.startX = h(m.$imageWrapEl[0], "x") || 0, f.startY = h(m.$imageWrapEl[0], "y") || 0, m.slideWidth = m.$slideEl[0].offsetWidth, m.slideHeight = m.$slideEl[0].offsetHeight, m.$imageWrapEl.transition(0));
      const a = f.width * s.scale, i = f.height * s.scale;
      if (!(a < m.slideWidth && i < m.slideHeight)) {
        if (f.minX = Math.min(m.slideWidth / 2 - a / 2, 0), f.maxX = -f.minX, f.minY = Math.min(m.slideHeight / 2 - i / 2, 0), f.maxY = -f.minY, f.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, f.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, !f.isMoved && !u) {
          if (t.isHorizontal() && (Math.floor(f.minX) === Math.floor(f.startX) && f.touchesCurrent.x < f.touchesStart.x || Math.floor(f.maxX) === Math.floor(f.startX) && f.touchesCurrent.x > f.touchesStart.x)) return void (f.isTouched = !1);
          if (!t.isHorizontal() && (Math.floor(f.minY) === Math.floor(f.startY) && f.touchesCurrent.y < f.touchesStart.y || Math.floor(f.maxY) === Math.floor(f.startY) && f.touchesCurrent.y > f.touchesStart.y)) return void (f.isTouched = !1)
        }
        e.cancelable && e.preventDefault(), e.stopPropagation(), f.isMoved = !0, f.currentX = f.touchesCurrent.x - f.touchesStart.x + f.startX, f.currentY = f.touchesCurrent.y - f.touchesStart.y + f.startY, f.currentX < f.minX && (f.currentX = f.minX + 1 - (f.minX - f.currentX + 1) ** .8), f.currentX > f.maxX && (f.currentX = f.maxX - 1 + (f.currentX - f.maxX + 1) ** .8), f.currentY < f.minY && (f.currentY = f.minY + 1 - (f.minY - f.currentY + 1) ** .8), f.currentY > f.maxY && (f.currentY = f.maxY - 1 + (f.currentY - f.maxY + 1) ** .8), g.prevPositionX || (g.prevPositionX = f.touchesCurrent.x), g.prevPositionY || (g.prevPositionY = f.touchesCurrent.y), g.prevTime || (g.prevTime = Date.now()), g.x = (f.touchesCurrent.x - g.prevPositionX) / (Date.now() - g.prevTime) / 2, g.y = (f.touchesCurrent.y - g.prevPositionY) / (Date.now() - g.prevTime) / 2, Math.abs(f.touchesCurrent.x - g.prevPositionX) < 2 && (g.x = 0), Math.abs(f.touchesCurrent.y - g.prevPositionY) < 2 && (g.y = 0), g.prevPositionX = f.touchesCurrent.x, g.prevPositionY = f.touchesCurrent.y, g.prevTime = Date.now(), m.$imageWrapEl.transform(`translate3d(${f.currentX}px, ${f.currentY}px,0)`)
      }
    }

    function T() {
      const e = t.zoom;
      m.$slideEl && t.previousIndex !== t.activeIndex && (m.$imageEl && m.$imageEl.transform("translate3d(0,0,0) scale(1)"), m.$imageWrapEl && m.$imageWrapEl.transform("translate3d(0,0,0)"), e.scale = 1, p = 1, m.$slideEl = void 0, m.$imageEl = void 0, m.$imageWrapEl = void 0)
    }

    function C(e) {
      const s = t.zoom, a = t.params.zoom;
      if (m.$slideEl || (e && e.target && (m.$slideEl = d(e.target).closest(`.${t.params.slideClass}`)), m.$slideEl || (t.params.virtual && t.params.virtual.enabled && t.virtual ? m.$slideEl = t.$wrapperEl.children(`.${t.params.slideActiveClass}`) : m.$slideEl = t.slides.eq(t.activeIndex)), m.$imageEl = m.$slideEl.find(`.${a.containerClass}`).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0), m.$imageWrapEl = m.$imageEl.parent(`.${a.containerClass}`)), !m.$imageEl || 0 === m.$imageEl.length || !m.$imageWrapEl || 0 === m.$imageWrapEl.length) return;
      let i, r, l, o, c, u, h, g, v, w, b, x, y, E, T, C, $, S;
      t.params.cssMode && (t.wrapperEl.style.overflow = "hidden", t.wrapperEl.style.touchAction = "none"), m.$slideEl.addClass(`${a.zoomedSlideClass}`), void 0 === f.touchesStart.x && e ? (i = "touchend" === e.type ? e.changedTouches[0].pageX : e.pageX, r = "touchend" === e.type ? e.changedTouches[0].pageY : e.pageY) : (i = f.touchesStart.x, r = f.touchesStart.y), s.scale = m.$imageWrapEl.attr("data-swiper-zoom") || a.maxRatio, p = m.$imageWrapEl.attr("data-swiper-zoom") || a.maxRatio, e ? ($ = m.$slideEl[0].offsetWidth, S = m.$slideEl[0].offsetHeight, l = m.$slideEl.offset().left + n.scrollX, o = m.$slideEl.offset().top + n.scrollY, c = l + $ / 2 - i, u = o + S / 2 - r, v = m.$imageEl[0].offsetWidth, w = m.$imageEl[0].offsetHeight, b = v * s.scale, x = w * s.scale, y = Math.min($ / 2 - b / 2, 0), E = Math.min(S / 2 - x / 2, 0), T = -y, C = -E, h = c * s.scale, g = u * s.scale, h < y && (h = y), h > T && (h = T), g < E && (g = E), g > C && (g = C)) : (h = 0, g = 0), m.$imageWrapEl.transition(300).transform(`translate3d(${h}px, ${g}px,0)`), m.$imageEl.transition(300).transform(`translate3d(0,0,0) scale(${s.scale})`)
    }

    function $() {
      const e = t.zoom, s = t.params.zoom;
      m.$slideEl || (t.params.virtual && t.params.virtual.enabled && t.virtual ? m.$slideEl = t.$wrapperEl.children(`.${t.params.slideActiveClass}`) : m.$slideEl = t.slides.eq(t.activeIndex), m.$imageEl = m.$slideEl.find(`.${s.containerClass}`).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0), m.$imageWrapEl = m.$imageEl.parent(`.${s.containerClass}`)), m.$imageEl && 0 !== m.$imageEl.length && m.$imageWrapEl && 0 !== m.$imageWrapEl.length && (t.params.cssMode && (t.wrapperEl.style.overflow = "", t.wrapperEl.style.touchAction = ""), e.scale = 1, p = 1, m.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"), m.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"), m.$slideEl.removeClass(`${s.zoomedSlideClass}`), m.$slideEl = void 0)
    }

    function S(e) {
      const s = t.zoom;
      s.scale && 1 !== s.scale ? $() : C(e)
    }

    function M() {
      const e = t.support;
      return {passiveListener: !("touchstart" !== t.touchEvents.start || !e.passiveListener || !t.params.passiveListeners) && {passive: !0, capture: !1}, activeListenerWithCapture: !e.passiveListener || {passive: !1, capture: !0}}
    }

    function P() {
      return `.${t.params.slideClass}`
    }

    function k(e) {
      const {passiveListener: s} = M(), a = P();
      t.$wrapperEl[e]("gesturestart", a, b, s), t.$wrapperEl[e]("gesturechange", a, x, s), t.$wrapperEl[e]("gestureend", a, y, s)
    }

    function z() {
      l || (l = !0, k("on"))
    }

    function O() {
      l && (l = !1, k("off"))
    }

    function I() {
      const e = t.zoom;
      if (e.enabled) return;
      e.enabled = !0;
      const s = t.support, {passiveListener: a, activeListenerWithCapture: i} = M(), r = P();
      s.gestures ? (t.$wrapperEl.on(t.touchEvents.start, z, a), t.$wrapperEl.on(t.touchEvents.end, O, a)) : "touchstart" === t.touchEvents.start && (t.$wrapperEl.on(t.touchEvents.start, r, b, a), t.$wrapperEl.on(t.touchEvents.move, r, x, i), t.$wrapperEl.on(t.touchEvents.end, r, y, a), t.touchEvents.cancel && t.$wrapperEl.on(t.touchEvents.cancel, r, y, a)), t.$wrapperEl.on(t.touchEvents.move, `.${t.params.zoom.containerClass}`, E, i)
    }

    function L() {
      const e = t.zoom;
      if (!e.enabled) return;
      const s = t.support;
      e.enabled = !1;
      const {passiveListener: a, activeListenerWithCapture: i} = M(), r = P();
      s.gestures ? (t.$wrapperEl.off(t.touchEvents.start, z, a), t.$wrapperEl.off(t.touchEvents.end, O, a)) : "touchstart" === t.touchEvents.start && (t.$wrapperEl.off(t.touchEvents.start, r, b, a), t.$wrapperEl.off(t.touchEvents.move, r, x, i), t.$wrapperEl.off(t.touchEvents.end, r, y, a), t.touchEvents.cancel && t.$wrapperEl.off(t.touchEvents.cancel, r, y, a)), t.$wrapperEl.off(t.touchEvents.move, `.${t.params.zoom.containerClass}`, E, i)
    }

    Object.defineProperty(t.zoom, "scale", {
      get: () => v, set(e) {
        if (v !== e) {
          const t = m.$imageEl ? m.$imageEl[0] : void 0, s = m.$slideEl ? m.$slideEl[0] : void 0;
          i("zoomChange", e, t, s)
        }
        v = e
      }
    }), a("init", (() => {
      t.params.zoom.enabled && I()
    })), a("destroy", (() => {
      L()
    })), a("touchStart", ((e, s) => {
      t.zoom.enabled && function(e) {
        const s = t.device;
        m.$imageEl && 0 !== m.$imageEl.length && (f.isTouched || (s.android && e.cancelable && e.preventDefault(), f.isTouched = !0, f.touchesStart.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX, f.touchesStart.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY))
      }(s)
    })), a("touchEnd", ((e, s) => {
      t.zoom.enabled && function() {
        const e = t.zoom;
        if (!m.$imageEl || 0 === m.$imageEl.length) return;
        if (!f.isTouched || !f.isMoved) return f.isTouched = !1, void (f.isMoved = !1);
        f.isTouched = !1, f.isMoved = !1;
        let s = 300, a = 300;
        const i = g.x * s, r = f.currentX + i, n = g.y * a, l = f.currentY + n;
        0 !== g.x && (s = Math.abs((r - f.currentX) / g.x)), 0 !== g.y && (a = Math.abs((l - f.currentY) / g.y));
        const o = Math.max(s, a);
        f.currentX = r, f.currentY = l;
        const d = f.width * e.scale, c = f.height * e.scale;
        f.minX = Math.min(m.slideWidth / 2 - d / 2, 0), f.maxX = -f.minX, f.minY = Math.min(m.slideHeight / 2 - c / 2, 0), f.maxY = -f.minY, f.currentX = Math.max(Math.min(f.currentX, f.maxX), f.minX), f.currentY = Math.max(Math.min(f.currentY, f.maxY), f.minY), m.$imageWrapEl.transition(o).transform(`translate3d(${f.currentX}px, ${f.currentY}px,0)`)
      }()
    })), a("doubleTap", ((e, s) => {
      !t.animating && t.params.zoom.enabled && t.zoom.enabled && t.params.zoom.toggle && S(s)
    })), a("transitionEnd", (() => {
      t.zoom.enabled && t.params.zoom.enabled && T()
    })), a("slideChange", (() => {
      t.zoom.enabled && t.params.zoom.enabled && t.params.cssMode && T()
    })), Object.assign(t.zoom, {enable: I, disable: L, in: C, out: $, toggle: S})
  }, function(e) {
    let {swiper: t, extendParams: s, on: a, emit: i} = e;
    s({lazy: {checkInView: !1, enabled: !1, loadPrevNext: !1, loadPrevNextAmount: 1, loadOnTransitionStart: !1, scrollingElement: "", elementClass: "swiper-lazy", loadingClass: "swiper-lazy-loading", loadedClass: "swiper-lazy-loaded", preloaderClass: "swiper-lazy-preloader"}}), t.lazy = {};
    let n = !1, l = !1;

    function o(e, s) {
      void 0 === s && (s = !0);
      const a = t.params.lazy;
      if (void 0 === e) return;
      if (0 === t.slides.length) return;
      const r = t.virtual && t.params.virtual.enabled ? t.$wrapperEl.children(`.${t.params.slideClass}[data-swiper-slide-index="${e}"]`) : t.slides.eq(e), n = r.find(`.${a.elementClass}:not(.${a.loadedClass}):not(.${a.loadingClass})`);
      !r.hasClass(a.elementClass) || r.hasClass(a.loadedClass) || r.hasClass(a.loadingClass) || n.push(r[0]), 0 !== n.length && n.each((e => {
        const n = d(e);
        n.addClass(a.loadingClass);
        const l = n.attr("data-background"), c = n.attr("data-src"), p = n.attr("data-srcset"), u = n.attr("data-sizes"), h = n.parent("picture");
        t.loadImage(n[0], c || l, p, u, !1, (() => {
          if (null != t && t && (!t || t.params) && !t.destroyed) {
            if (l ? (n.css("background-image", `url("${l}")`), n.removeAttr("data-background")) : (p && (n.attr("srcset", p), n.removeAttr("data-srcset")), u && (n.attr("sizes", u), n.removeAttr("data-sizes")), h.length && h.children("source").each((e => {
              const t = d(e);
              t.attr("data-srcset") && (t.attr("srcset", t.attr("data-srcset")), t.removeAttr("data-srcset"))
            })), c && (n.attr("src", c), n.removeAttr("data-src"))), n.addClass(a.loadedClass).removeClass(a.loadingClass), r.find(`.${a.preloaderClass}`).remove(), t.params.loop && s) {
              const e = r.attr("data-swiper-slide-index");
              if (r.hasClass(t.params.slideDuplicateClass)) {
                o(t.$wrapperEl.children(`[data-swiper-slide-index="${e}"]:not(.${t.params.slideDuplicateClass})`).index(), !1)
              } else {
                o(t.$wrapperEl.children(`.${t.params.slideDuplicateClass}[data-swiper-slide-index="${e}"]`).index(), !1)
              }
            }
            i("lazyImageReady", r[0], n[0]), t.params.autoHeight && t.updateAutoHeight()
          }
        })), i("lazyImageLoad", r[0], n[0])
      }))
    }

    function c() {
      const {$wrapperEl: e, params: s, slides: a, activeIndex: i} = t, r = t.virtual && s.virtual.enabled, n = s.lazy;
      let c = s.slidesPerView;

      function p(t) {
        if (r) {
          if (e.children(`.${s.slideClass}[data-swiper-slide-index="${t}"]`).length) return !0
        } else if (a[t]) return !0;
        return !1
      }

      function u(e) {
        return r ? d(e).attr("data-swiper-slide-index") : d(e).index()
      }

      if ("auto" === c && (c = 0), l || (l = !0), t.params.watchSlidesProgress) e.children(`.${s.slideVisibleClass}`).each((e => {
        o(r ? d(e).attr("data-swiper-slide-index") : d(e).index())
      })); else if (c > 1) for (let e = i; e < i + c; e += 1) p(e) && o(e); else o(i);
      if (n.loadPrevNext) if (c > 1 || n.loadPrevNextAmount && n.loadPrevNextAmount > 1) {
        const e = n.loadPrevNextAmount, t = c, s = Math.min(i + t + Math.max(e, t), a.length), r = Math.max(i - Math.max(t, e), 0);
        for (let e = i + c; e < s; e += 1) p(e) && o(e);
        for (let e = r; e < i; e += 1) p(e) && o(e)
      } else {
        const t = e.children(`.${s.slideNextClass}`);
        t.length > 0 && o(u(t));
        const a = e.children(`.${s.slidePrevClass}`);
        a.length > 0 && o(u(a))
      }
    }

    function p() {
      const e = r();
      if (!t || t.destroyed) return;
      const s = t.params.lazy.scrollingElement ? d(t.params.lazy.scrollingElement) : d(e), a = s[0] === e, i = a ? e.innerWidth : s[0].offsetWidth, l = a ? e.innerHeight : s[0].offsetHeight, o = t.$el.offset(), {rtlTranslate: u} = t;
      let h = !1;
      u && (o.left -= t.$el[0].scrollLeft);
      const m = [[o.left, o.top], [o.left + t.width, o.top], [o.left, o.top + t.height], [o.left + t.width, o.top + t.height]];
      for (let e = 0; e < m.length; e += 1) {
        const t = m[e];
        if (t[0] >= 0 && t[0] <= i && t[1] >= 0 && t[1] <= l) {
          if (0 === t[0] && 0 === t[1]) continue;
          h = !0
        }
      }
      const f = !("touchstart" !== t.touchEvents.start || !t.support.passiveListener || !t.params.passiveListeners) && {passive: !0, capture: !1};
      h ? (c(), s.off("scroll", p, f)) : n || (n = !0, s.on("scroll", p, f))
    }

    a("beforeInit", (() => {
      t.params.lazy.enabled && t.params.preloadImages && (t.params.preloadImages = !1)
    })), a("init", (() => {
      t.params.lazy.enabled && (t.params.lazy.checkInView ? p() : c())
    })), a("scroll", (() => {
      t.params.freeMode && t.params.freeMode.enabled && !t.params.freeMode.sticky && c()
    })), a("scrollbarDragMove resize _freeModeNoMomentumRelease", (() => {
      t.params.lazy.enabled && (t.params.lazy.checkInView ? p() : c())
    })), a("transitionStart", (() => {
      t.params.lazy.enabled && (t.params.lazy.loadOnTransitionStart || !t.params.lazy.loadOnTransitionStart && !l) && (t.params.lazy.checkInView ? p() : c())
    })), a("transitionEnd", (() => {
      t.params.lazy.enabled && !t.params.lazy.loadOnTransitionStart && (t.params.lazy.checkInView ? p() : c())
    })), a("slideChange", (() => {
      const {lazy: e, cssMode: s, watchSlidesProgress: a, touchReleaseOnEdges: i, resistanceRatio: r} = t.params;
      e.enabled && (s || a && (i || 0 === r)) && c()
    })), Object.assign(t.lazy, {load: c, loadInSlide: o})
  }, function(e) {
    let {swiper: t, extendParams: s, on: a} = e;

    function i(e, t) {
      const s = function() {
        let e, t, s;
        return (a, i) => {
          for (t = -1, e = a.length; e - t > 1;) s = e + t >> 1, a[s] <= i ? t = s : e = s;
          return e
        }
      }();
      let a, i;
      return this.x = e, this.y = t, this.lastIndex = e.length - 1, this.interpolate = function(e) {
        return e ? (i = s(this.x, e), a = i - 1, (e - this.x[a]) * (this.y[i] - this.y[a]) / (this.x[i] - this.x[a]) + this.y[a]) : 0
      }, this
    }

    function r() {
      t.controller.control && t.controller.spline && (t.controller.spline = void 0, delete t.controller.spline)
    }

    s({controller: {control: void 0, inverse: !1, by: "slide"}}), t.controller = {control: void 0}, a("beforeInit", (() => {
      t.controller.control = t.params.controller.control
    })), a("update", (() => {
      r()
    })), a("resize", (() => {
      r()
    })), a("observerUpdate", (() => {
      r()
    })), a("setTranslate", ((e, s, a) => {
      t.controller.control && t.controller.setTranslate(s, a)
    })), a("setTransition", ((e, s, a) => {
      t.controller.control && t.controller.setTransition(s, a)
    })), Object.assign(t.controller, {
      setTranslate: function(e, s) {
        const a = t.controller.control;
        let r, n;
        const l = t.constructor;

        function o(e) {
          const s = t.rtlTranslate ? -t.translate : t.translate;
          "slide" === t.params.controller.by && (!function(e) {
            t.controller.spline || (t.controller.spline = t.params.loop ? new i(t.slidesGrid, e.slidesGrid) : new i(t.snapGrid, e.snapGrid))
          }(e), n = -t.controller.spline.interpolate(-s)), n && "container" !== t.params.controller.by || (r = (e.maxTranslate() - e.minTranslate()) / (t.maxTranslate() - t.minTranslate()), n = (s - t.minTranslate()) * r + e.minTranslate()), t.params.controller.inverse && (n = e.maxTranslate() - n), e.updateProgress(n), e.setTranslate(n, t), e.updateActiveIndex(), e.updateSlidesClasses()
        }

        if (Array.isArray(a)) for (let e = 0; e < a.length; e += 1) a[e] !== s && a[e] instanceof l && o(a[e]); else a instanceof l && s !== a && o(a)
      }, setTransition: function(e, s) {
        const a = t.constructor, i = t.controller.control;
        let r;

        function n(s) {
          s.setTransition(e, t), 0 !== e && (s.transitionStart(), s.params.autoHeight && p((() => {
            s.updateAutoHeight()
          })), s.$wrapperEl.transitionEnd((() => {
            i && (s.params.loop && "slide" === t.params.controller.by && s.loopFix(), s.transitionEnd())
          })))
        }

        if (Array.isArray(i)) for (r = 0; r < i.length; r += 1) i[r] !== s && i[r] instanceof a && n(i[r]); else i instanceof a && s !== i && n(i)
      }
    })
  }, function(e) {
    let {swiper: t, extendParams: s, on: a} = e;
    s({a11y: {enabled: !0, notificationClass: "swiper-notification", prevSlideMessage: "Previous slide", nextSlideMessage: "Next slide", firstSlideMessage: "This is the first slide", lastSlideMessage: "This is the last slide", paginationBulletMessage: "Go to slide {{index}}", slideLabelMessage: "{{index}} / {{slidesLength}}", containerMessage: null, containerRoleDescriptionMessage: null, itemRoleDescriptionMessage: null, slideRole: "group"}});
    let i = null;

    function r(e) {
      const t = i;
      0 !== t.length && (t.html(""), t.html(e))
    }

    function n(e) {
      e.attr("tabIndex", "0")
    }

    function l(e) {
      e.attr("tabIndex", "-1")
    }

    function o(e, t) {
      e.attr("role", t)
    }

    function c(e, t) {
      e.attr("aria-roledescription", t)
    }

    function p(e, t) {
      e.attr("aria-label", t)
    }

    function u(e) {
      e.attr("aria-disabled", !0)
    }

    function h(e) {
      e.attr("aria-disabled", !1)
    }

    function m(e) {
      if (13 !== e.keyCode && 32 !== e.keyCode) return;
      const s = t.params.a11y, a = d(e.target);
      t.navigation && t.navigation.$nextEl && a.is(t.navigation.$nextEl) && (t.isEnd && !t.params.loop || t.slideNext(), t.isEnd ? r(s.lastSlideMessage) : r(s.nextSlideMessage)), t.navigation && t.navigation.$prevEl && a.is(t.navigation.$prevEl) && (t.isBeginning && !t.params.loop || t.slidePrev(), t.isBeginning ? r(s.firstSlideMessage) : r(s.prevSlideMessage)), t.pagination && a.is(U(t.params.pagination.bulletClass)) && a[0].click()
    }

    function f() {
      return t.pagination && t.pagination.bullets && t.pagination.bullets.length
    }

    function g() {
      return f() && t.params.pagination.clickable
    }

    const v = (e, t, s) => {
      n(e), "BUTTON" !== e[0].tagName && (o(e, "button"), e.on("keydown", m)), p(e, s), function(e, t) {
        e.attr("aria-controls", t)
      }(e, t)
    }, w = e => {
      const s = e.target.closest(`.${t.params.slideClass}`);
      if (!s || !t.slides.includes(s)) return;
      const a = t.slides.indexOf(s) === t.activeIndex, i = t.params.watchSlidesProgress && t.visibleSlides && t.visibleSlides.includes(s);
      a || i || t.slideTo(t.slides.indexOf(s), 0)
    };

    function b() {
      const e = t.params.a11y;
      t.$el.append(i);
      const s = t.$el;
      e.containerRoleDescriptionMessage && c(s, e.containerRoleDescriptionMessage), e.containerMessage && p(s, e.containerMessage);
      const a = t.$wrapperEl, r = a.attr("id") || `swiper-wrapper-${n = 16,void 0===n&&(n=16),"x".repeat(n).replace(/x/g,(()=>Math.round(16*Math.random()).toString(16)))}`;
      var n;
      const l = t.params.autoplay && t.params.autoplay.enabled ? "off" : "polite";
      var u;
      u = r, a.attr("id", u), function(e, t) {
        e.attr("aria-live", t)
      }(a, l), e.itemRoleDescriptionMessage && c(d(t.slides), e.itemRoleDescriptionMessage), o(d(t.slides), e.slideRole);
      const h = t.params.loop ? t.slides.filter((e => !e.classList.contains(t.params.slideDuplicateClass))).length : t.slides.length;
      let f, b;
      t.slides.each(((s, a) => {
        const i = d(s), r = t.params.loop ? parseInt(i.attr("data-swiper-slide-index"), 10) : a;
        p(i, e.slideLabelMessage.replace(/\{\{index\}\}/, r + 1).replace(/\{\{slidesLength\}\}/, h))
      })), t.navigation && t.navigation.$nextEl && (f = t.navigation.$nextEl), t.navigation && t.navigation.$prevEl && (b = t.navigation.$prevEl), f && f.length && v(f, r, e.nextSlideMessage), b && b.length && v(b, r, e.prevSlideMessage), g() && t.pagination.$el.on("keydown", U(t.params.pagination.bulletClass), m), t.$el.on("focus", w, !0)
    }

    a("beforeInit", (() => {
      i = d(`<span class="${t.params.a11y.notificationClass}" aria-live="assertive" aria-atomic="true"></span>`)
    })), a("afterInit", (() => {
      t.params.a11y.enabled && b()
    })), a("fromEdge toEdge afterInit lock unlock", (() => {
      t.params.a11y.enabled && function() {
        if (t.params.loop || t.params.rewind || !t.navigation) return;
        const {$nextEl: e, $prevEl: s} = t.navigation;
        s && s.length > 0 && (t.isBeginning ? (u(s), l(s)) : (h(s), n(s))), e && e.length > 0 && (t.isEnd ? (u(e), l(e)) : (h(e), n(e)))
      }()
    })), a("paginationUpdate", (() => {
      t.params.a11y.enabled && function() {
        const e = t.params.a11y;
        f() && t.pagination.bullets.each((s => {
          const a = d(s);
          t.params.pagination.clickable && (n(a), t.params.pagination.renderBullet || (o(a, "button"), p(a, e.paginationBulletMessage.replace(/\{\{index\}\}/, a.index() + 1)))), a.is(`.${t.params.pagination.bulletActiveClass}`) ? a.attr("aria-current", "true") : a.removeAttr("aria-current")
        }))
      }()
    })), a("destroy", (() => {
      t.params.a11y.enabled && function() {
        let e, s;
        i && i.length > 0 && i.remove(), t.navigation && t.navigation.$nextEl && (e = t.navigation.$nextEl), t.navigation && t.navigation.$prevEl && (s = t.navigation.$prevEl), e && e.off("keydown", m), s && s.off("keydown", m), g() && t.pagination.$el.off("keydown", U(t.params.pagination.bulletClass), m), t.$el.off("focus", w, !0)
      }()
    }))
  }, function(e) {
    let {swiper: t, extendParams: s, on: a} = e;
    s({history: {enabled: !1, root: "", replaceState: !1, key: "slides"}});
    let i = !1, n = {};
    const l = e => e.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, ""), o = e => {
      const t = r();
      let s;
      s = e ? new URL(e) : t.location;
      const a = s.pathname.slice(1).split("/").filter((e => "" !== e)), i = a.length;
      return {key: a[i - 2], value: a[i - 1]}
    }, d = (e, s) => {
      const a = r();
      if (!i || !t.params.history.enabled) return;
      let n;
      n = t.params.url ? new URL(t.params.url) : a.location;
      const o = t.slides.eq(s);
      let d = l(o.attr("data-history"));
      if (t.params.history.root.length > 0) {
        let s = t.params.history.root;
        "/" === s[s.length - 1] && (s = s.slice(0, s.length - 1)), d = `${s}/${e}/${d}`
      } else n.pathname.includes(e) || (d = `${e}/${d}`);
      const c = a.history.state;
      c && c.value === d || (t.params.history.replaceState ? a.history.replaceState({value: d}, null, d) : a.history.pushState({value: d}, null, d))
    }, c = (e, s, a) => {
      if (s) for (let i = 0, r = t.slides.length; i < r; i += 1) {
        const r = t.slides.eq(i);
        if (l(r.attr("data-history")) === s && !r.hasClass(t.params.slideDuplicateClass)) {
          const s = r.index();
          t.slideTo(s, e, a)
        }
      } else t.slideTo(0, e, a)
    }, p = () => {
      n = o(t.params.url), c(t.params.speed, t.paths.value, !1)
    };
    a("init", (() => {
      t.params.history.enabled && (() => {
        const e = r();
        if (t.params.history) {
          if (!e.history || !e.history.pushState) return t.params.history.enabled = !1, void (t.params.hashNavigation.enabled = !0);
          i = !0, n = o(t.params.url), (n.key || n.value) && (c(0, n.value, t.params.runCallbacksOnInit), t.params.history.replaceState || e.addEventListener("popstate", p))
        }
      })()
    })), a("destroy", (() => {
      t.params.history.enabled && (() => {
        const e = r();
        t.params.history.replaceState || e.removeEventListener("popstate", p)
      })()
    })), a("transitionEnd _freeModeNoMomentumRelease", (() => {
      i && d(t.params.history.key, t.activeIndex)
    })), a("slideChange", (() => {
      i && t.params.cssMode && d(t.params.history.key, t.activeIndex)
    }))
  }, function(e) {
    let {swiper: t, extendParams: s, emit: i, on: n} = e, l = !1;
    const o = a(), c = r();
    s({hashNavigation: {enabled: !1, replaceState: !1, watchState: !1}});
    const p = () => {
      i("hashChange");
      const e = o.location.hash.replace("#", "");
      if (e !== t.slides.eq(t.activeIndex).attr("data-hash")) {
        const s = t.$wrapperEl.children(`.${t.params.slideClass}[data-hash="${e}"]`).index();
        if (void 0 === s) return;
        t.slideTo(s)
      }
    }, u = () => {
      if (l && t.params.hashNavigation.enabled) if (t.params.hashNavigation.replaceState && c.history && c.history.replaceState) c.history.replaceState(null, null, `#${t.slides.eq(t.activeIndex).attr("data-hash")}` || ""), i("hashSet"); else {
        const e = t.slides.eq(t.activeIndex), s = e.attr("data-hash") || e.attr("data-history");
        o.location.hash = s || "", i("hashSet")
      }
    };
    n("init", (() => {
      t.params.hashNavigation.enabled && (() => {
        if (!t.params.hashNavigation.enabled || t.params.history && t.params.history.enabled) return;
        l = !0;
        const e = o.location.hash.replace("#", "");
        if (e) {
          const s = 0;
          for (let a = 0, i = t.slides.length; a < i; a += 1) {
            const i = t.slides.eq(a);
            if ((i.attr("data-hash") || i.attr("data-history")) === e && !i.hasClass(t.params.slideDuplicateClass)) {
              const e = i.index();
              t.slideTo(e, s, t.params.runCallbacksOnInit, !0)
            }
          }
        }
        t.params.hashNavigation.watchState && d(c).on("hashchange", p)
      })()
    })), n("destroy", (() => {
      t.params.hashNavigation.enabled && t.params.hashNavigation.watchState && d(c).off("hashchange", p)
    })), n("transitionEnd _freeModeNoMomentumRelease", (() => {
      l && u()
    })), n("slideChange", (() => {
      l && t.params.cssMode && u()
    }))
  }, function(e) {
    let t, {swiper: s, extendParams: i, on: r, emit: n} = e;

    function l() {
      const e = s.slides.eq(s.activeIndex);
      let a = s.params.autoplay.delay;
      e.attr("data-swiper-autoplay") && (a = e.attr("data-swiper-autoplay") || s.params.autoplay.delay), clearTimeout(t), t = p((() => {
        let e;
        s.params.autoplay.reverseDirection ? s.params.loop ? (s.loopFix(), e = s.slidePrev(s.params.speed, !0, !0), n("autoplay")) : s.isBeginning ? s.params.autoplay.stopOnLastSlide ? d() : (e = s.slideTo(s.slides.length - 1, s.params.speed, !0, !0), n("autoplay")) : (e = s.slidePrev(s.params.speed, !0, !0), n("autoplay")) : s.params.loop ? (s.loopFix(), e = s.slideNext(s.params.speed, !0, !0), n("autoplay")) : s.isEnd ? s.params.autoplay.stopOnLastSlide ? d() : (e = s.slideTo(0, s.params.speed, !0, !0), n("autoplay")) : (e = s.slideNext(s.params.speed, !0, !0), n("autoplay")), (s.params.cssMode && s.autoplay.running || !1 === e) && l()
      }), a)
    }

    function o() {
      return void 0 === t && (!s.autoplay.running && (s.autoplay.running = !0, n("autoplayStart"), l(), !0))
    }

    function d() {
      return !!s.autoplay.running && (void 0 !== t && (t && (clearTimeout(t), t = void 0), s.autoplay.running = !1, n("autoplayStop"), !0))
    }

    function c(e) {
      s.autoplay.running && (s.autoplay.paused || (t && clearTimeout(t), s.autoplay.paused = !0, 0 !== e && s.params.autoplay.waitForTransition ? ["transitionend", "webkitTransitionEnd"].forEach((e => {
        s.$wrapperEl[0].addEventListener(e, h)
      })) : (s.autoplay.paused = !1, l())))
    }

    function u() {
      const e = a();
      "hidden" === e.visibilityState && s.autoplay.running && c(), "visible" === e.visibilityState && s.autoplay.paused && (l(), s.autoplay.paused = !1)
    }

    function h(e) {
      s && !s.destroyed && s.$wrapperEl && e.target === s.$wrapperEl[0] && (["transitionend", "webkitTransitionEnd"].forEach((e => {
        s.$wrapperEl[0].removeEventListener(e, h)
      })), s.autoplay.paused = !1, s.autoplay.running ? l() : d())
    }

    function m() {
      s.params.autoplay.disableOnInteraction ? d() : (n("autoplayPause"), c()), ["transitionend", "webkitTransitionEnd"].forEach((e => {
        s.$wrapperEl[0].removeEventListener(e, h)
      }))
    }

    function f() {
      s.params.autoplay.disableOnInteraction || (s.autoplay.paused = !1, n("autoplayResume"), l())
    }

    s.autoplay = {running: !1, paused: !1}, i({autoplay: {enabled: !1, delay: 3e3, waitForTransition: !0, disableOnInteraction: !0, stopOnLastSlide: !1, reverseDirection: !1, pauseOnMouseEnter: !1}}), r("init", (() => {
      if (s.params.autoplay.enabled) {
        o();
        a().addEventListener("visibilitychange", u), s.params.autoplay.pauseOnMouseEnter && (s.$el.on("mouseenter", m), s.$el.on("mouseleave", f))
      }
    })), r("beforeTransitionStart", ((e, t, a) => {
      s.autoplay.running && (a || !s.params.autoplay.disableOnInteraction ? s.autoplay.pause(t) : d())
    })), r("sliderFirstMove", (() => {
      s.autoplay.running && (s.params.autoplay.disableOnInteraction ? d() : c())
    })), r("touchEnd", (() => {
      s.params.cssMode && s.autoplay.paused && !s.params.autoplay.disableOnInteraction && l()
    })), r("destroy", (() => {
      s.$el.off("mouseenter", m), s.$el.off("mouseleave", f), s.autoplay.running && d();
      a().removeEventListener("visibilitychange", u)
    })), Object.assign(s.autoplay, {pause: c, run: l, start: o, stop: d})
  }, function(e) {
    let {swiper: t, extendParams: s, on: a} = e;
    s({thumbs: {swiper: null, multipleActiveThumbs: !0, autoScrollOffset: 0, slideThumbActiveClass: "swiper-slide-thumb-active", thumbsContainerClass: "swiper-thumbs"}});
    let i = !1, r = !1;

    function n() {
      const e = t.thumbs.swiper;
      if (!e) return;
      const s = e.clickedIndex, a = e.clickedSlide;
      if (a && d(a).hasClass(t.params.thumbs.slideThumbActiveClass)) return;
      if (null == s) return;
      let i;
      if (i = e.params.loop ? parseInt(d(e.clickedSlide).attr("data-swiper-slide-index"), 10) : s, t.params.loop) {
        let e = t.activeIndex;
        t.slides.eq(e).hasClass(t.params.slideDuplicateClass) && (t.loopFix(), t._clientLeft = t.$wrapperEl[0].clientLeft, e = t.activeIndex);
        const s = t.slides.eq(e).prevAll(`[data-swiper-slide-index="${i}"]`).eq(0).index(), a = t.slides.eq(e).nextAll(`[data-swiper-slide-index="${i}"]`).eq(0).index();
        i = void 0 === s ? a : void 0 === a ? s : a - e < e - s ? a : s
      }
      t.slideTo(i)
    }

    function l() {
      const {thumbs: e} = t.params;
      if (i) return !1;
      i = !0;
      const s = t.constructor;
      if (e.swiper instanceof s) t.thumbs.swiper = e.swiper, Object.assign(t.thumbs.swiper.originalParams, {watchSlidesProgress: !0, slideToClickedSlide: !1}), Object.assign(t.thumbs.swiper.params, {watchSlidesProgress: !0, slideToClickedSlide: !1}); else if (m(e.swiper)) {
        const a = Object.assign({}, e.swiper);
        Object.assign(a, {watchSlidesProgress: !0, slideToClickedSlide: !1}), t.thumbs.swiper = new s(a), r = !0
      }
      return t.thumbs.swiper.$el.addClass(t.params.thumbs.thumbsContainerClass), t.thumbs.swiper.on("tap", n), !0
    }

    function o(e) {
      const s = t.thumbs.swiper;
      if (!s) return;
      const a = "auto" === s.params.slidesPerView ? s.slidesPerViewDynamic() : s.params.slidesPerView, i = t.params.thumbs.autoScrollOffset, r = i && !s.params.loop;
      if (t.realIndex !== s.realIndex || r) {
        let n, l, o = s.activeIndex;
        if (s.params.loop) {
          s.slides.eq(o).hasClass(s.params.slideDuplicateClass) && (s.loopFix(), s._clientLeft = s.$wrapperEl[0].clientLeft, o = s.activeIndex);
          const e = s.slides.eq(o).prevAll(`[data-swiper-slide-index="${t.realIndex}"]`).eq(0).index(), a = s.slides.eq(o).nextAll(`[data-swiper-slide-index="${t.realIndex}"]`).eq(0).index();
          n = void 0 === e ? a : void 0 === a ? e : a - o == o - e ? s.params.slidesPerGroup > 1 ? a : o : a - o < o - e ? a : e, l = t.activeIndex > t.previousIndex ? "next" : "prev"
        } else n = t.realIndex, l = n > t.previousIndex ? "next" : "prev";
        r && (n += "next" === l ? i : -1 * i), s.visibleSlidesIndexes && s.visibleSlidesIndexes.indexOf(n) < 0 && (s.params.centeredSlides ? n = n > o ? n - Math.floor(a / 2) + 1 : n + Math.floor(a / 2) - 1 : n > o && s.params.slidesPerGroup, s.slideTo(n, e ? 0 : void 0))
      }
      let n = 1;
      const l = t.params.thumbs.slideThumbActiveClass;
      if (t.params.slidesPerView > 1 && !t.params.centeredSlides && (n = t.params.slidesPerView), t.params.thumbs.multipleActiveThumbs || (n = 1), n = Math.floor(n), s.slides.removeClass(l), s.params.loop || s.params.virtual && s.params.virtual.enabled) for (let e = 0; e < n; e += 1) s.$wrapperEl.children(`[data-swiper-slide-index="${t.realIndex + e}"]`).addClass(l); else for (let e = 0; e < n; e += 1) s.slides.eq(t.realIndex + e).addClass(l)
    }

    t.thumbs = {swiper: null}, a("beforeInit", (() => {
      const {thumbs: e} = t.params;
      e && e.swiper && (l(), o(!0))
    })), a("slideChange update resize observerUpdate", (() => {
      t.thumbs.swiper && o()
    })), a("setTransition", ((e, s) => {
      const a = t.thumbs.swiper;
      a && a.setTransition(s)
    })), a("beforeDestroy", (() => {
      const e = t.thumbs.swiper;
      e && r && e && e.destroy()
    })), Object.assign(t.thumbs, {init: l, update: o})
  }, function(e) {
    let {swiper: t, extendParams: s, emit: a, once: i} = e;
    s({freeMode: {enabled: !1, momentum: !0, momentumRatio: 1, momentumBounce: !0, momentumBounceRatio: 1, momentumVelocityRatio: 1, sticky: !1, minimumVelocity: .02}}), Object.assign(t, {
      freeMode: {
        onTouchStart: function() {
          const e = t.getTranslate();
          t.setTranslate(e), t.setTransition(0), t.touchEventsData.velocities.length = 0, t.freeMode.onTouchEnd({currentPos: t.rtl ? t.translate : -t.translate})
        }, onTouchMove: function() {
          const {touchEventsData: e, touches: s} = t;
          0 === e.velocities.length && e.velocities.push({position: s[t.isHorizontal() ? "startX" : "startY"], time: e.touchStartTime}), e.velocities.push({position: s[t.isHorizontal() ? "currentX" : "currentY"], time: u()})
        }, onTouchEnd: function(e) {
          let {currentPos: s} = e;
          const {params: r, $wrapperEl: n, rtlTranslate: l, snapGrid: o, touchEventsData: d} = t, c = u() - d.touchStartTime;
          if (s < -t.minTranslate()) t.slideTo(t.activeIndex); else if (s > -t.maxTranslate()) t.slides.length < o.length ? t.slideTo(o.length - 1) : t.slideTo(t.slides.length - 1); else {
            if (r.freeMode.momentum) {
              if (d.velocities.length > 1) {
                const e = d.velocities.pop(), s = d.velocities.pop(), a = e.position - s.position, i = e.time - s.time;
                t.velocity = a / i, t.velocity /= 2, Math.abs(t.velocity) < r.freeMode.minimumVelocity && (t.velocity = 0), (i > 150 || u() - e.time > 300) && (t.velocity = 0)
              } else t.velocity = 0;
              t.velocity *= r.freeMode.momentumVelocityRatio, d.velocities.length = 0;
              let e = 1e3 * r.freeMode.momentumRatio;
              const s = t.velocity * e;
              let c = t.translate + s;
              l && (c = -c);
              let p, h = !1;
              const m = 20 * Math.abs(t.velocity) * r.freeMode.momentumBounceRatio;
              let f;
              if (c < t.maxTranslate()) r.freeMode.momentumBounce ? (c + t.maxTranslate() < -m && (c = t.maxTranslate() - m), p = t.maxTranslate(), h = !0, d.allowMomentumBounce = !0) : c = t.maxTranslate(), r.loop && r.centeredSlides && (f = !0); else if (c > t.minTranslate()) r.freeMode.momentumBounce ? (c - t.minTranslate() > m && (c = t.minTranslate() + m), p = t.minTranslate(), h = !0, d.allowMomentumBounce = !0) : c = t.minTranslate(), r.loop && r.centeredSlides && (f = !0); else if (r.freeMode.sticky) {
                let e;
                for (let t = 0; t < o.length; t += 1) if (o[t] > -c) {
                  e = t;
                  break
                }
                c = Math.abs(o[e] - c) < Math.abs(o[e - 1] - c) || "next" === t.swipeDirection ? o[e] : o[e - 1], c = -c
              }
              if (f && i("transitionEnd", (() => {
                t.loopFix()
              })), 0 !== t.velocity) {
                if (e = l ? Math.abs((-c - t.translate) / t.velocity) : Math.abs((c - t.translate) / t.velocity), r.freeMode.sticky) {
                  const s = Math.abs((l ? -c : c) - t.translate), a = t.slidesSizesGrid[t.activeIndex];
                  e = s < a ? r.speed : s < 2 * a ? 1.5 * r.speed : 2.5 * r.speed
                }
              } else if (r.freeMode.sticky) return void t.slideToClosest();
              r.freeMode.momentumBounce && h ? (t.updateProgress(p), t.setTransition(e), t.setTranslate(c), t.transitionStart(!0, t.swipeDirection), t.animating = !0, n.transitionEnd((() => {
                t && !t.destroyed && d.allowMomentumBounce && (a("momentumBounce"), t.setTransition(r.speed), setTimeout((() => {
                  t.setTranslate(p), n.transitionEnd((() => {
                    t && !t.destroyed && t.transitionEnd()
                  }))
                }), 0))
              }))) : t.velocity ? (a("_freeModeNoMomentumRelease"), t.updateProgress(c), t.setTransition(e), t.setTranslate(c), t.transitionStart(!0, t.swipeDirection), t.animating || (t.animating = !0, n.transitionEnd((() => {
                t && !t.destroyed && t.transitionEnd()
              })))) : t.updateProgress(c), t.updateActiveIndex(), t.updateSlidesClasses()
            } else {
              if (r.freeMode.sticky) return void t.slideToClosest();
              r.freeMode && a("_freeModeNoMomentumRelease")
            }
            (!r.freeMode.momentum || c >= r.longSwipesMs) && (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses())
          }
        }
      }
    })
  }, function(e) {
    let t, s, a, {swiper: i, extendParams: r} = e;
    r({grid: {rows: 1, fill: "column"}}), i.grid = {
      initSlides: e => {
        const {slidesPerView: r} = i.params, {rows: n, fill: l} = i.params.grid;
        s = t / n, a = Math.floor(e / n), t = Math.floor(e / n) === e / n ? e : Math.ceil(e / n) * n, "auto" !== r && "row" === l && (t = Math.max(t, r * n))
      }, updateSlide: (e, r, n, l) => {
        const {slidesPerGroup: o, spaceBetween: d} = i.params, {rows: c, fill: p} = i.params.grid;
        let u, h, m;
        if ("row" === p && o > 1) {
          const s = Math.floor(e / (o * c)), a = e - c * o * s, i = 0 === s ? o : Math.min(Math.ceil((n - s * c * o) / c), o);
          m = Math.floor(a / i), h = a - m * i + s * o, u = h + m * t / c, r.css({"-webkit-order": u, order: u})
        } else "column" === p ? (h = Math.floor(e / c), m = e - h * c, (h > a || h === a && m === c - 1) && (m += 1, m >= c && (m = 0, h += 1))) : (m = Math.floor(e / s), h = e - m * s);
        r.css(l("margin-top"), 0 !== m ? d && `${d}px` : "")
      }, updateWrapperSize: (e, s, a) => {
        const {spaceBetween: r, centeredSlides: n, roundLengths: l} = i.params, {rows: o} = i.params.grid;
        if (i.virtualSize = (e + r) * t, i.virtualSize = Math.ceil(i.virtualSize / o) - r, i.$wrapperEl.css({[a("width")]: `${i.virtualSize + r}px`}), n) {
          s.splice(0, s.length);
          const e = [];
          for (let t = 0; t < s.length; t += 1) {
            let a = s[t];
            l && (a = Math.floor(a)), s[t] < i.virtualSize + s[0] && e.push(a)
          }
          s.push(...e)
        }
      }
    }
  }, function(e) {
    let {swiper: t} = e;
    Object.assign(t, {appendSlide: K.bind(t), prependSlide: Z.bind(t), addSlide: J.bind(t), removeSlide: Q.bind(t), removeAllSlides: ee.bind(t)})
  }, function(e) {
    let {swiper: t, extendParams: s, on: a} = e;
    s({fadeEffect: {crossFade: !1, transformEl: null}}), te({
      effect: "fade", swiper: t, on: a, setTranslate: () => {
        const {slides: e} = t, s = t.params.fadeEffect;
        for (let a = 0; a < e.length; a += 1) {
          const e = t.slides.eq(a);
          let i = -e[0].swiperSlideOffset;
          t.params.virtualTranslate || (i -= t.translate);
          let r = 0;
          t.isHorizontal() || (r = i, i = 0);
          const n = t.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(e[0].progress), 0) : 1 + Math.min(Math.max(e[0].progress, -1), 0);
          se(s, e).css({opacity: n}).transform(`translate3d(${i}px, ${r}px, 0px)`)
        }
      }, setTransition: e => {
        const {transformEl: s} = t.params.fadeEffect;
        (s ? t.slides.find(s) : t.slides).transition(e), ae({swiper: t, duration: e, transformEl: s, allSlides: !0})
      }, overwriteParams: () => ({slidesPerView: 1, slidesPerGroup: 1, watchSlidesProgress: !0, spaceBetween: 0, virtualTranslate: !t.params.cssMode})
    })
  }, function(e) {
    let {swiper: t, extendParams: s, on: a} = e;
    s({cubeEffect: {slideShadows: !0, shadow: !0, shadowOffset: 20, shadowScale: .94}}), te({
      effect: "cube", swiper: t, on: a, setTranslate: () => {
        const {$el: e, $wrapperEl: s, slides: a, width: i, height: r, rtlTranslate: n, size: l, browser: o} = t, c = t.params.cubeEffect, p = t.isHorizontal(), u = t.virtual && t.params.virtual.enabled;
        let h, m = 0;
        c.shadow && (p ? (h = s.find(".swiper-cube-shadow"), 0 === h.length && (h = d('<div class="swiper-cube-shadow"></div>'), s.append(h)), h.css({height: `${i}px`})) : (h = e.find(".swiper-cube-shadow"), 0 === h.length && (h = d('<div class="swiper-cube-shadow"></div>'), e.append(h))));
        for (let e = 0; e < a.length; e += 1) {
          const t = a.eq(e);
          let s = e;
          u && (s = parseInt(t.attr("data-swiper-slide-index"), 10));
          let i = 90 * s, r = Math.floor(i / 360);
          n && (i = -i, r = Math.floor(-i / 360));
          const o = Math.max(Math.min(t[0].progress, 1), -1);
          let h = 0, f = 0, g = 0;
          s % 4 == 0 ? (h = 4 * -r * l, g = 0) : (s - 1) % 4 == 0 ? (h = 0, g = 4 * -r * l) : (s - 2) % 4 == 0 ? (h = l + 4 * r * l, g = l) : (s - 3) % 4 == 0 && (h = -l, g = 3 * l + 4 * l * r), n && (h = -h), p || (f = h, h = 0);
          const v = `rotateX(${p ? 0 : -i}deg) rotateY(${p ? i : 0}deg) translate3d(${h}px, ${f}px, ${g}px)`;
          if (o <= 1 && o > -1 && (m = 90 * s + 90 * o, n && (m = 90 * -s - 90 * o)), t.transform(v), c.slideShadows) {
            let e = p ? t.find(".swiper-slide-shadow-left") : t.find(".swiper-slide-shadow-top"), s = p ? t.find(".swiper-slide-shadow-right") : t.find(".swiper-slide-shadow-bottom");
            0 === e.length && (e = d(`<div class="swiper-slide-shadow-${p ? "left" : "top"}"></div>`), t.append(e)), 0 === s.length && (s = d(`<div class="swiper-slide-shadow-${p ? "right" : "bottom"}"></div>`), t.append(s)), e.length && (e[0].style.opacity = Math.max(-o, 0)), s.length && (s[0].style.opacity = Math.max(o, 0))
          }
        }
        if (s.css({"-webkit-transform-origin": `50% 50% -${l / 2}px`, "transform-origin": `50% 50% -${l / 2}px`}), c.shadow) if (p) h.transform(`translate3d(0px, ${i / 2 + c.shadowOffset}px, ${-i / 2}px) rotateX(90deg) rotateZ(0deg) scale(${c.shadowScale})`); else {
          const e = Math.abs(m) - 90 * Math.floor(Math.abs(m) / 90), t = 1.5 - (Math.sin(2 * e * Math.PI / 360) / 2 + Math.cos(2 * e * Math.PI / 360) / 2), s = c.shadowScale, a = c.shadowScale / t, i = c.shadowOffset;
          h.transform(`scale3d(${s}, 1, ${a}) translate3d(0px, ${r / 2 + i}px, ${-r / 2 / a}px) rotateX(-90deg)`)
        }
        const f = o.isSafari || o.isWebView ? -l / 2 : 0;
        s.transform(`translate3d(0px,0,${f}px) rotateX(${t.isHorizontal() ? 0 : m}deg) rotateY(${t.isHorizontal() ? -m : 0}deg)`)
      }, setTransition: e => {
        const {$el: s, slides: a} = t;
        a.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), t.params.cubeEffect.shadow && !t.isHorizontal() && s.find(".swiper-cube-shadow").transition(e)
      }, perspective: () => !0, overwriteParams: () => ({slidesPerView: 1, slidesPerGroup: 1, watchSlidesProgress: !0, resistanceRatio: 0, spaceBetween: 0, centeredSlides: !1, virtualTranslate: !0})
    })
  }, function(e) {
    let {swiper: t, extendParams: s, on: a} = e;
    s({flipEffect: {slideShadows: !0, limitRotation: !0, transformEl: null}}), te({
      effect: "flip", swiper: t, on: a, setTranslate: () => {
        const {slides: e, rtlTranslate: s} = t, a = t.params.flipEffect;
        for (let i = 0; i < e.length; i += 1) {
          const r = e.eq(i);
          let n = r[0].progress;
          t.params.flipEffect.limitRotation && (n = Math.max(Math.min(r[0].progress, 1), -1));
          const l = r[0].swiperSlideOffset;
          let o = -180 * n, d = 0, c = t.params.cssMode ? -l - t.translate : -l, p = 0;
          if (t.isHorizontal() ? s && (o = -o) : (p = c, c = 0, d = -o, o = 0), r[0].style.zIndex = -Math.abs(Math.round(n)) + e.length, a.slideShadows) {
            let e = t.isHorizontal() ? r.find(".swiper-slide-shadow-left") : r.find(".swiper-slide-shadow-top"), s = t.isHorizontal() ? r.find(".swiper-slide-shadow-right") : r.find(".swiper-slide-shadow-bottom");
            0 === e.length && (e = ie(a, r, t.isHorizontal() ? "left" : "top")), 0 === s.length && (s = ie(a, r, t.isHorizontal() ? "right" : "bottom")), e.length && (e[0].style.opacity = Math.max(-n, 0)), s.length && (s[0].style.opacity = Math.max(n, 0))
          }
          const u = `translate3d(${c}px, ${p}px, 0px) rotateX(${d}deg) rotateY(${o}deg)`;
          se(a, r).transform(u)
        }
      }, setTransition: e => {
        const {transformEl: s} = t.params.flipEffect;
        (s ? t.slides.find(s) : t.slides).transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), ae({swiper: t, duration: e, transformEl: s})
      }, perspective: () => !0, overwriteParams: () => ({slidesPerView: 1, slidesPerGroup: 1, watchSlidesProgress: !0, spaceBetween: 0, virtualTranslate: !t.params.cssMode})
    })
  }, function(e) {
    let {swiper: t, extendParams: s, on: a} = e;
    s({coverflowEffect: {rotate: 50, stretch: 0, depth: 100, scale: 1, modifier: 1, slideShadows: !0, transformEl: null}}), te({
      effect: "coverflow", swiper: t, on: a, setTranslate: () => {
        const {width: e, height: s, slides: a, slidesSizesGrid: i} = t, r = t.params.coverflowEffect, n = t.isHorizontal(), l = t.translate, o = n ? e / 2 - l : s / 2 - l, d = n ? r.rotate : -r.rotate, c = r.depth;
        for (let e = 0, t = a.length; e < t; e += 1) {
          const t = a.eq(e), s = i[e], l = (o - t[0].swiperSlideOffset - s / 2) / s, p = "function" == typeof r.modifier ? r.modifier(l) : l * r.modifier;
          let u = n ? d * p : 0, h = n ? 0 : d * p, m = -c * Math.abs(p), f = r.stretch;
          "string" == typeof f && -1 !== f.indexOf("%") && (f = parseFloat(r.stretch) / 100 * s);
          let g = n ? 0 : f * p, v = n ? f * p : 0, w = 1 - (1 - r.scale) * Math.abs(p);
          Math.abs(v) < .001 && (v = 0), Math.abs(g) < .001 && (g = 0), Math.abs(m) < .001 && (m = 0), Math.abs(u) < .001 && (u = 0), Math.abs(h) < .001 && (h = 0), Math.abs(w) < .001 && (w = 0);
          const b = `translate3d(${v}px,${g}px,${m}px)  rotateX(${h}deg) rotateY(${u}deg) scale(${w})`;
          if (se(r, t).transform(b), t[0].style.zIndex = 1 - Math.abs(Math.round(p)), r.slideShadows) {
            let e = n ? t.find(".swiper-slide-shadow-left") : t.find(".swiper-slide-shadow-top"), s = n ? t.find(".swiper-slide-shadow-right") : t.find(".swiper-slide-shadow-bottom");
            0 === e.length && (e = ie(r, t, n ? "left" : "top")), 0 === s.length && (s = ie(r, t, n ? "right" : "bottom")), e.length && (e[0].style.opacity = p > 0 ? p : 0), s.length && (s[0].style.opacity = -p > 0 ? -p : 0)
          }
        }
      }, setTransition: e => {
        const {transformEl: s} = t.params.coverflowEffect;
        (s ? t.slides.find(s) : t.slides).transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)
      }, perspective: () => !0, overwriteParams: () => ({watchSlidesProgress: !0})
    })
  }, function(e) {
    let {swiper: t, extendParams: s, on: a} = e;
    s({creativeEffect: {transformEl: null, limitProgress: 1, shadowPerProgress: !1, progressMultiplier: 1, perspective: !0, prev: {translate: [0, 0, 0], rotate: [0, 0, 0], opacity: 1, scale: 1}, next: {translate: [0, 0, 0], rotate: [0, 0, 0], opacity: 1, scale: 1}}});
    const i = e => "string" == typeof e ? e : `${e}px`;
    te({
      effect: "creative", swiper: t, on: a, setTranslate: () => {
        const {slides: e, $wrapperEl: s, slidesSizesGrid: a} = t, r = t.params.creativeEffect, {progressMultiplier: n} = r, l = t.params.centeredSlides;
        if (l) {
          const e = a[0] / 2 - t.params.slidesOffsetBefore || 0;
          s.transform(`translateX(calc(50% - ${e}px))`)
        }
        for (let s = 0; s < e.length; s += 1) {
          const a = e.eq(s), o = a[0].progress, d = Math.min(Math.max(a[0].progress, -r.limitProgress), r.limitProgress);
          let c = d;
          l || (c = Math.min(Math.max(a[0].originalProgress, -r.limitProgress), r.limitProgress));
          const p = a[0].swiperSlideOffset, u = [t.params.cssMode ? -p - t.translate : -p, 0, 0], h = [0, 0, 0];
          let m = !1;
          t.isHorizontal() || (u[1] = u[0], u[0] = 0);
          let f = {translate: [0, 0, 0], rotate: [0, 0, 0], scale: 1, opacity: 1};
          d < 0 ? (f = r.next, m = !0) : d > 0 && (f = r.prev, m = !0), u.forEach(((e, t) => {
            u[t] = `calc(${e}px + (${i(f.translate[t])} * ${Math.abs(d * n)}))`
          })), h.forEach(((e, t) => {
            h[t] = f.rotate[t] * Math.abs(d * n)
          })), a[0].style.zIndex = -Math.abs(Math.round(o)) + e.length;
          const g = u.join(", "), v = `rotateX(${h[0]}deg) rotateY(${h[1]}deg) rotateZ(${h[2]}deg)`, w = c < 0 ? `scale(${1 + (1 - f.scale) * c * n})` : `scale(${1 - (1 - f.scale) * c * n})`, b = c < 0 ? 1 + (1 - f.opacity) * c * n : 1 - (1 - f.opacity) * c * n, x = `translate3d(${g}) ${v} ${w}`;
          if (m && f.shadow || !m) {
            let e = a.children(".swiper-slide-shadow");
            if (0 === e.length && f.shadow && (e = ie(r, a)), e.length) {
              const t = r.shadowPerProgress ? d * (1 / r.limitProgress) : d;
              e[0].style.opacity = Math.min(Math.max(Math.abs(t), 0), 1)
            }
          }
          const y = se(r, a);
          y.transform(x).css({opacity: b}), f.origin && y.css("transform-origin", f.origin)
        }
      }, setTransition: e => {
        const {transformEl: s} = t.params.creativeEffect;
        (s ? t.slides.find(s) : t.slides).transition(e).find(".swiper-slide-shadow").transition(e), ae({swiper: t, duration: e, transformEl: s, allSlides: !0})
      }, perspective: () => t.params.creativeEffect.perspective, overwriteParams: () => ({watchSlidesProgress: !0, virtualTranslate: !t.params.cssMode})
    })
  }, function(e) {
    let {swiper: t, extendParams: s, on: a} = e;
    s({cardsEffect: {slideShadows: !0, transformEl: null}}), te({
      effect: "cards", swiper: t, on: a, setTranslate: () => {
        const {slides: e, activeIndex: s} = t, a = t.params.cardsEffect, {startTranslate: i, isTouched: r} = t.touchEventsData, n = t.translate;
        for (let l = 0; l < e.length; l += 1) {
          const o = e.eq(l), d = o[0].progress, c = Math.min(Math.max(d, -4), 4);
          let p = o[0].swiperSlideOffset;
          t.params.centeredSlides && !t.params.cssMode && t.$wrapperEl.transform(`translateX(${t.minTranslate()}px)`), t.params.centeredSlides && t.params.cssMode && (p -= e[0].swiperSlideOffset);
          let u = t.params.cssMode ? -p - t.translate : -p, h = 0;
          const m = -100 * Math.abs(c);
          let f = 1, g = -2 * c, v = 8 - .75 * Math.abs(c);
          const w = t.virtual && t.params.virtual.enabled ? t.virtual.from + l : l, b = (w === s || w === s - 1) && c > 0 && c < 1 && (r || t.params.cssMode) && n < i, x = (w === s || w === s + 1) && c < 0 && c > -1 && (r || t.params.cssMode) && n > i;
          if (b || x) {
            const e = (1 - Math.abs((Math.abs(c) - .5) / .5)) ** .5;
            g += -28 * c * e, f += -.5 * e, v += 96 * e, h = -25 * e * Math.abs(c) + "%"
          }
          if (u = c < 0 ? `calc(${u}px + (${v * Math.abs(c)}%))` : c > 0 ? `calc(${u}px + (-${v * Math.abs(c)}%))` : `${u}px`, !t.isHorizontal()) {
            const e = h;
            h = u, u = e
          }
          const y = `\n        translate3d(${u}, ${h}, ${m}px)\n        rotateZ(${g}deg)\n        scale(${c < 0 ? "" + (1 + (1 - f) * c) : "" + (1 - (1 - f) * c)})\n      `;
          if (a.slideShadows) {
            let e = o.find(".swiper-slide-shadow");
            0 === e.length && (e = ie(a, o)), e.length && (e[0].style.opacity = Math.min(Math.max((Math.abs(c) - .5) / .5, 0), 1))
          }
          o[0].style.zIndex = -Math.abs(Math.round(d)) + e.length;
          se(a, o).transform(y)
        }
      }, setTransition: e => {
        const {transformEl: s} = t.params.cardsEffect;
        (s ? t.slides.find(s) : t.slides).transition(e).find(".swiper-slide-shadow").transition(e), ae({swiper: t, duration: e, transformEl: s})
      }, perspective: () => !0, overwriteParams: () => ({watchSlidesProgress: !0, virtualTranslate: !t.params.cssMode})
    })
  }, function(e) {
    let {swiper: t, extendParams: s, on: a} = e;
    s({cards1Effect: {slideShadows: !0, transformEl: null}}), te({
      effect: "cards1", swiper: t, on: a, setTranslate: () => {
        const {slides: e, activeIndex: s} = t, a = t.params.cards1Effect, {startTranslate: i, isTouched: r} = t.touchEventsData, n = t.translate;
        for (let l = 0; l < e.length; l += 1) {
          const o = e.eq(l), d = o[0].progress, c = Math.min(Math.max(d, -4), 4);
          let p = o[0].swiperSlideOffset;
          t.params.centeredSlides && !t.params.cssMode && t.$wrapperEl.transform(`translateX(${t.minTranslate()}px)`), t.params.centeredSlides && t.params.cssMode && (p -= e[0].swiperSlideOffset);
          let u = t.params.cssMode ? -p - t.translate : -p, h = 0;
          const m = -100 * Math.abs(c);
          let f = 1, g = -2 * c, v = 50 - .75 * Math.abs(c);
          const w = t.virtual && t.params.virtual.enabled ? t.virtual.from + l : l, b = (w === s || w === s - 1) && c > 0 && c < 1 && (r || t.params.cssMode) && n < i, x = (w === s || w === s + 1) && c < 0 && c > -1 && (r || t.params.cssMode) && n > i;
          if (b || x) {
            const e = (1 - Math.abs((Math.abs(c) - .5) / .5)) ** .5;
            g += -28 * c * e, f += -.1 * e, v += 30 * e, h = 0 * e * Math.abs(c) + "%"
          }
          if (u = c < 0 ? `calc(${u}px + (${v * Math.abs(c)}%))` : c > 0 ? `calc(${u}px + (-${v * Math.abs(c)}%))` : `${u}px`, !t.isHorizontal()) {
            const e = h;
            h = u, u = e
          }
          const y = `\n        translate3d(${u}, ${h}, ${m}px)\n        rotateZ(0deg)\n        scale(${c < 0 ? "" + (1 + (1 - f) * c) : "" + (1 - (1 - f) * c)})\n      `;
          if (a.slideShadows) {
            let e = o.find(".swiper-slide-shadow");
            0 === e.length && (e = ie(a, o)), e.length && (e[0].style.opacity = Math.min(Math.max((Math.abs(c) - .5) / .5, 0), 1))
          }
          o[0].style.zIndex = -Math.abs(Math.round(d)) + e.length;
          se(a, o).transform(y)
        }
      }, setTransition: e => {
        const {transformEl: s} = t.params.cards1Effect;
        (s ? t.slides.find(s) : t.slides).transition(e).find(".swiper-slide-shadow").transition(e), ae({swiper: t, duration: e, transformEl: s})
      }, perspective: () => !0, overwriteParams: () => ({watchSlidesProgress: !0, virtualTranslate: !t.params.cssMode})
    })
  }, function(e) {
    let {swiper: t, extendParams: s, on: a} = e;
    s({cards2Effect: {slideShadows: !0, transformEl: null}}), te({
      effect: "cards2", swiper: t, on: a, setTranslate: () => {
        const {slides: e, activeIndex: s} = t, a = t.params.cards2Effect, {startTranslate: i, isTouched: r} = t.touchEventsData, n = t.translate;
        for (let l = 0; l < e.length; l += 1) {
          const o = e.eq(l), d = o[0].progress, c = Math.min(Math.max(d, -4), 4);
          let p = o[0].swiperSlideOffset;
          t.params.centeredSlides && !t.params.cssMode && t.$wrapperEl.transform(`translateX(${t.minTranslate()}px)`), t.params.centeredSlides && t.params.cssMode && (p -= e[0].swiperSlideOffset);
          let u = t.params.cssMode ? -p - t.translate : -p, h = 0;
          const m = -100 * Math.abs(c);
          let f = 1, g = -2 * c, v = 110 - .75 * Math.abs(c);
          const w = t.virtual && t.params.virtual.enabled ? t.virtual.from + l : l, b = (w === s || w === s - 1) && c > 0 && c < 1 && (r || t.params.cssMode) && n < i, x = (w === s || w === s + 1) && c < 0 && c > -1 && (r || t.params.cssMode) && n > i;
          if (b || x) {
            const e = (1 - Math.abs((Math.abs(c) - .5) / .5)) ** .5;
            g += -28 * c * e, f += -.1 * e, v += 30 * e, h = 0 * e * Math.abs(c) + "%"
          }
          if (u = c < 0 ? `calc(${u}px + (${v * Math.abs(c)}%))` : c > 0 ? `calc(${u}px + (-${v * Math.abs(c)}%))` : `${u}px`, !t.isHorizontal()) {
            const e = h;
            h = u, u = e
          }
          const y = `\n        translate3d(${u}, ${h}, ${m}px)\n        rotateZ(0deg)\n        scale(${c < 0 ? "" + (1 + (1 - f) * c) : "" + (1 - (1 - f) * c)})\n      `;
          if (a.slideShadows) {
            let e = o.find(".swiper-slide-shadow");
            0 === e.length && (e = ie(a, o)), e.length && (e[0].style.opacity = Math.min(Math.max((Math.abs(c) - 0.5) / 0.1, 0), 1))
          }
          o[0].style.zIndex = -Math.abs(Math.round(d)) + e.length;
          se(a, o).transform(y)
        }
      }, setTransition: e => {
        const {transformEl: s} = t.params.cards2Effect;
        (s ? t.slides.find(s) : t.slides).transition(e).find(".swiper-slide-shadow").transition(e), ae({swiper: t, duration: e, transformEl: s})
      }, perspective: () => !0, overwriteParams: () => ({watchSlidesProgress: !0, virtualTranslate: !t.params.cssMode})
    })
  }];
  return V.use(re), V
}));
//# sourceMappingURL=swiper-bundle.min.js.map