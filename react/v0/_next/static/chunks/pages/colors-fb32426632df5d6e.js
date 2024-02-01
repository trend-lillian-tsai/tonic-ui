(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6338],{68624:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return MDXContent}});var n=r(2784),o=r(30876),a=r(58693),l=r(5081);function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}var components_ColorPalette=function(e){var t=e.hue,r=(0,a.useTheme)(),o=RegExp(t,"g"),i=Object.keys(r.colors).filter(function(e){return e.match(o)}).reduce(function(e,t){return e[t]=r.colors[t],e},{});return n.createElement(a.Flex,{align:"center"},n.createElement(a.Stack,{direction:"column"},Object.keys(i).map(function(e){var t,r=function(e){if(Array.isArray(e))return e}(t=(0,l.ensureString)(e).split(":"))||function(e,t){var r,n,o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var a=[],l=!0,i=!1;try{for(o=o.call(e);!(l=(r=o.next()).done)&&(a.push(r.value),!t||a.length!==t);l=!0);}catch(e){i=!0,n=e}finally{try{l||null==o.return||o.return()}finally{if(i)throw n}}return a}}(t,2)||function(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return _arrayLikeToArray(e,t)}}(t,2)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),o=r[0],c=r[1],u=i[e],s=c<=50?"black":"white";return n.createElement(a.Flex,{key:e,justify:"space-between",fontSize:"sm",width:"300px",height:"12x",py:"3x",px:"4x",lineHeight:"lg",fontFamily:"mono",backgroundColor:u,color:s},n.createElement(a.Box,null,"".concat(o.charAt(0).toUpperCase()).concat(o.slice(1))," ",c),n.createElement(a.Box,null,s))})))},i=r(90925),c=["components"];function _extends(){return(_extends=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var u={};function MDXContent(e){var t=e.components,r=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,c);return(0,o.kt)("wrapper",_extends({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",null,"Colors"),(0,o.kt)("p",null,"Add a ",(0,o.kt)("inlineCode",{parentName:"p"},"theme.colors")," object to provide colors for your project. By default these colors can be referenced by ",(0,o.kt)("inlineCode",{parentName:"p"},"color"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"borderColor"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"backgroundColor"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"fill"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"stroke"),", and styles."),(0,o.kt)("p",null,"We recommend adding a palette that go from ",(0,o.kt)("inlineCode",{parentName:"p"},"10")," (lightest color) to ",(0,o.kt)("inlineCode",{parentName:"p"},"100")," (darkest color). You can use a name (such as Red 10 or Red 70) to indicate that Red 10 is a light red color and Red 70 is a dark red color."),(0,o.kt)("p",null,"The color palette  is defined for both Light Theme and Dark Theme where ",(0,o.kt)("inlineCode",{parentName:"p"},"10")," - ",(0,o.kt)("inlineCode",{parentName:"p"},"50")," means to pass AA contrast with black text and  ",(0,o.kt)("inlineCode",{parentName:"p"},"60")," - ",(0,o.kt)("inlineCode",{parentName:"p"},"100")," means to pass AA contrast with white text."),(0,o.kt)(i.Z,{theme:"colors",mdxType:"ThemeParser"}),(0,o.kt)("h3",null,"Color palette"),(0,o.kt)(a.Grid,{gap:"6x",templateColumns:"repeat(auto-fit, 300px)",mb:"6x",mdxType:"Grid"},(0,o.kt)(components_ColorPalette,{hue:"red",mdxType:"ColorPalette"}),(0,o.kt)(components_ColorPalette,{hue:"magenta",mdxType:"ColorPalette"}),(0,o.kt)(components_ColorPalette,{hue:"purple",mdxType:"ColorPalette"}),(0,o.kt)(components_ColorPalette,{hue:"blue",mdxType:"ColorPalette"}),(0,o.kt)(components_ColorPalette,{hue:"green",mdxType:"ColorPalette"}),(0,o.kt)(components_ColorPalette,{hue:"teal",mdxType:"ColorPalette"}),(0,o.kt)(components_ColorPalette,{hue:"cyan",mdxType:"ColorPalette"}),(0,o.kt)(components_ColorPalette,{hue:"gray",mdxType:"ColorPalette"})))}MDXContent.isMDXComponent=!0},90925:function(e,t,r){"use strict";var n=r(58693),o=r(2784),a=r(2981),l=r(62112);function _slicedToArray(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r,n,o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var a=[],l=!0,i=!1;try{for(o=o.call(e);!(l=(r=o.next()).done)&&(a.push(r.value),!t||a.length!==t);l=!0);}catch(e){i=!0,n=e}finally{try{l||null==o.return||o.return()}finally{if(i)throw n}}return a}}(e,t)||function(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return _arrayLikeToArray(e,t)}}(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}t.Z=function(e){var t,r=e.theme,i=(0,n.useTheme)(),c=_slicedToArray((0,n.useColorMode)(),1)[0],u=null!==(t=_slicedToArray((0,n.useColorStyle)({colorMode:c}),1)[0][r])&&void 0!==t?t:i[r];return u?(("space"===r||"sizes"===r)&&(u=Object.keys(u).filter(function(e){return!e.toString().match(/[qh]$/)}).reduce(function(e,t){return e[t]=u[t],e},{})),o.createElement(n.Box,{mb:"6x"},o.createElement(a.Z,null,"export const ".concat(r," = ").concat((0,l.Z)(u,!1))))):"Theme field not found"}},62112:function(e,t){"use strict";t.Z=function(e){return JSON.stringify(e,null,2).replace(/"/g,"'").replace(/'(\d+|[a-z]+)':/g,"$1:")}},26327:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/colors",function(){return r(68624)}])}},function(e){e.O(0,[9774,2888,179],function(){return e(e.s=26327)}),_N_E=e.O()}]);