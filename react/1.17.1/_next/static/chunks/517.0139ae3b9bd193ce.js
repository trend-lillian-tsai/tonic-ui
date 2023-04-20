(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[517],{80517:function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,t){return(a=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function i(e){return(i=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=n(23903).Z,l=u(n(2784)),c=u(n(79132)),f={400:"Bad Request",404:"This page could not be found",405:"Method Not Allowed",500:"Internal Server Error"};function d(e){var t=e.res,n=e.err;return{statusCode:t&&t.statusCode?t.statusCode:n?n.statusCode:404}}var s={error:{fontFamily:'system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',height:"100vh",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},desc:{display:"inline-block",textAlign:"left"},h1:{display:"inline-block",margin:"0 20px 0 0",paddingRight:23,fontSize:24,fontWeight:500,verticalAlign:"top",lineHeight:"49px"},h2:{fontSize:14,fontWeight:400,lineHeight:"49px",margin:0}},p=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&a(e,t)}(d,e);var t,n,u=(t=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}(),function(){var e,n=i(d);if(t){var o=i(this).constructor;e=Reflect.construct(n,arguments,o)}else e=n.apply(this,arguments);return function(e,t){if(t&&("object"===r(t)||"function"==typeof t))return t;if(void 0!==t)throw TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function d(){return!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,d),u.apply(this,arguments)}return o(d.prototype,[{key:"render",value:function(){var e=this.props,t=e.statusCode,n=e.withDarkMode,r=this.props.title||f[t]||"An unexpected error has occurred";return l.default.createElement("div",{style:s.error},l.default.createElement(c.default,null,l.default.createElement("title",null,t?"".concat(t,": ").concat(r):"Application error: a client-side exception has occurred")),l.default.createElement("div",null,l.default.createElement("style",{dangerouslySetInnerHTML:{__html:"body{color:#000;background:#fff;margin:0}.next-error-h1{border-right:1px solid rgba(0,0,0,.3)}".concat(void 0===n||n?"@media (prefers-color-scheme:dark){body{color:#fff;background:#000}.next-error-h1{border-right:1px solid rgba(255,255,255,.3)}}":"")}}),t?l.default.createElement("h1",{className:"next-error-h1",style:s.h1},t):null,l.default.createElement("div",{style:s.desc},l.default.createElement("h2",{style:s.h2},this.props.title||t?r:l.default.createElement(l.default.Fragment,null,"Application error: a client-side exception has occurred (see the browser console for more information)"),"."))))}}]),n&&o(d,n),Object.defineProperty(d,"prototype",{writable:!1}),d}(l.default.Component);p.displayName="ErrorPage",p.getInitialProps=d,p.origGetInitialProps=d,t.default=p,("function"==typeof t.default||"object"===r(t.default)&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},91237:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.AmpStateContext=void 0;var r=(0,n(23903).Z)(n(2784)).default.createContext({});t.AmpStateContext=r},79075:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isInAmpMode=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=e.hybrid,r=e.hasQuery;return void 0!==t&&t||void 0!==n&&n&&void 0!==r&&r}},79132:function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.defaultHead=d,t.default=void 0;var o=n(59419).Z,a=n(23903).Z,i=(0,n(30199).Z)(n(2784)),u=a(n(63193)),l=n(91237),c=n(75459),f=n(79075);function d(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[i.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(i.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function s(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===i.default.Fragment?e.concat(i.default.Children.toArray(t.props.children).reduce(function(e,t){return"string"==typeof t||"number"==typeof t?e:e.concat(t)},[])):e.concat(t)}n(25008);var p=["name","httpEquiv","charSet","itemProp"];function y(e,t){var n,r,a,u,l=t.inAmpMode;return e.reduce(s,[]).reverse().concat(d(l).reverse()).filter((n=new Set,r=new Set,a=new Set,u={},function(e){var t=!0,o=!1;if(e.key&&"number"!=typeof e.key&&e.key.indexOf("$")>0){o=!0;var i=e.key.slice(e.key.indexOf("$")+1);n.has(i)?t=!1:n.add(i)}switch(e.type){case"title":case"base":r.has(e.type)?t=!1:r.add(e.type);break;case"meta":for(var l=0,c=p.length;l<c;l++){var f=p[l];if(e.props.hasOwnProperty(f)){if("charSet"===f)a.has(f)?t=!1:a.add(f);else{var d=e.props[f],s=u[f]||new Set;("name"!==f||!o)&&s.has(d)?t=!1:(s.add(d),u[f]=s)}}}}return t})).reverse().map(function(e,t){var n=e.key||t;if(!l&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(function(t){return e.props.href.startsWith(t)})){var r=o({},e.props||{});return r["data-href"]=r.href,r.href=void 0,r["data-optimized-fonts"]=!0,i.default.cloneElement(e,r)}return i.default.cloneElement(e,{key:n})})}t.default=function(e){var t=e.children,n=i.useContext(l.AmpStateContext),r=i.useContext(c.HeadManagerContext);return i.default.createElement(u.default,{reduceComponentsToState:y,headManager:r,inAmpMode:f.isInAmpMode(n)},t)},("function"==typeof t.default||"object"===r(t.default)&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},63193:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t,n=e.headManager,u=e.reduceComponentsToState;function l(){if(n&&n.mountedInstances){var t=r.Children.toArray(Array.from(n.mountedInstances).filter(Boolean));n.updateHead(u(t,e))}}return o&&(null==n||null==(t=n.mountedInstances)||t.add(e.children),l()),a(function(){var t;return null==n||null==(t=n.mountedInstances)||t.add(e.children),function(){var t;null==n||null==(t=n.mountedInstances)||t.delete(e.children)}}),a(function(){return n&&(n._pendingUpdate=l),function(){n&&(n._pendingUpdate=l)}}),i(function(){return n&&n._pendingUpdate&&(n._pendingUpdate(),n._pendingUpdate=null),function(){n&&n._pendingUpdate&&(n._pendingUpdate(),n._pendingUpdate=null)}}),null};var r=(0,n(30199).Z)(n(2784)),o=!1,a=r.useLayoutEffect,i=o?function(){}:r.useEffect},25008:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.warnOnce=void 0,t.warnOnce=function(e){}}}]);