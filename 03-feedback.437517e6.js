function t(t){return t&&t.__esModule?t.default:t}var e,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,u=/^0o[0-7]+$/i,f=parseInt,a="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=a||c||Function("return this")(),s=Object.prototype.toString,d=Math.max,p=Math.min,m=function(){return l.Date.now()};function v(t,e,n){var r,o,i,u,f,a,c=0,l=!1,s=!1,v=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function b(e){var n=r,i=o;return r=o=void 0,c=e,u=t.apply(i,n)}function j(t){return c=t,f=setTimeout(T,e),l?b(t):u}function x(t){var n=t-a;return void 0===a||n>=e||n<0||s&&t-c>=i}function T(){var t=m();if(x(t))return h(t);f=setTimeout(T,function(t){var n=e-(t-a);return s?p(n,i-(t-c)):n}(t))}function h(t){return f=void 0,v&&r?b(t):(r=o=void 0,u)}function w(){var t=m(),n=x(t);if(r=arguments,o=this,a=t,n){if(void 0===f)return j(a);if(s)return f=setTimeout(T,e),b(a)}return void 0===f&&(f=setTimeout(T,e)),u}return e=y(e)||0,g(n)&&(l=!!n.leading,i=(s="maxWait"in n)?d(y(n.maxWait)||0,e):i,v="trailing"in n?!!n.trailing:v),w.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=a=o=f=void 0},w.flush=function(){return void 0===f?u:h(m())},w}function g(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function y(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==s.call(t)}(t))return NaN;if(g(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=g(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(r,"");var n=i.test(t);return n||u.test(t)?f(t.slice(2),n?2:8):o.test(t)?NaN:+t}e=function(t,e,n){var r=!0,o=!0;if("function"!=typeof t)throw new TypeError("Expected a function");return g(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),v(t,e,{leading:r,maxWait:e,trailing:o})};const b={form:document.querySelector(".feedback-form"),textarea:document.querySelector(".feedback-form textarea"),input:document.querySelector("input")};function j(){return JSON.parse(localStorage.getItem("feedback-form-state"))||{}}function x(t){localStorage.setItem("feedback-form-state",JSON.stringify(t))}!function(){const t=j();b.textarea.value=t.message||"",b.input.value=t.email||""}(),b.form.addEventListener("input",t(e)((function(t){const e=j();e[t.target.name]=t.target.value,x(e)}),500)),b.form.addEventListener("submit",(function(t){t.preventDefault(),t.currentTarget.reset();const e=j();x({}),console.log(e)}));
//# sourceMappingURL=03-feedback.437517e6.js.map
