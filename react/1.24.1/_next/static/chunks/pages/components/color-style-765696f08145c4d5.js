(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5545],{82650:function(e,r){"use strict";r.Z=function(e){return JSON.stringify(e,null,2).replace(/"/g,"'").replace(/'(\d+|[a-z]+)':/g,"$1:")}},51340:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return D}});var l=n(52322),o=n(45392),i=n(67569),t=n(81952),s=n(5081),c=n(72579),a=n.n(c),d=n(93352),h=n.n(d),x=n(2784),u=["colorLabel","colorType","colorKey","colorTokens","colorValues"];function j(){return(j=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e}).apply(this,arguments)}function y(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var n,l,o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var i=[],t=!0,s=!1;try{for(o=o.call(e);!(t=(n=o.next()).done)&&(i.push(n.value),!r||i.length!==r);t=!0);}catch(e){s=!0,l=e}finally{try{t||null==o.return||o.return()}finally{if(s)throw l}}return i}}(e,r)||function(e,r){if(e){if("string"==typeof e)return g(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return g(e,r)}}(e,r)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(e,r){(null==r||r>e.length)&&(r=e.length);for(var n=0,l=Array(r);n<r;n++)l[n]=e[n];return l}var f=function(e){var r,n,l=e.colorLabel,o=e.colorType,t=(e.colorKey,e.colorTokens),s=e.colorValues,c=function(e,r){if(null==e)return{};var n,l,o=function(e,r){if(null==e)return{};var n,l,o={},i=Object.keys(e);for(l=0;l<i.length;l++)n=i[l],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(l=0;l<i.length;l++)n=i[l],!(r.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(e,u),a=y((0,i.useColorMode)(),1)[0],d=y((0,i.useColorStyle)({colorMode:a}),1)[0],h=null==d?void 0:null===(r=d.color)||void 0===r?void 0:r.primary,g=null==d?void 0:null===(n=d.color)||void 0===n?void 0:n.secondary,f=function(){var e={};if("gradient"===o){var r=y(s,2),n=r[0],l=r[1];return e.background="linear-gradient(45deg, ".concat(n,", ").concat(l,")"),e}return"shadow"===o?(e.backgroundColor=({dark:"gray:90",light:"white"})[a],e.boxShadow=s[0]):(e.backgroundColor=s[0],({dark:"gray:100",light:"white:emphasis"})[a]===t[0]&&(e.border=1,e.borderColor=({dark:"gray:70",light:"gray:20"})[a])),e}();return x.createElement(i.Box,c,x.createElement(i.Box,j({maxWidth:120,height:120,px:"3x",mb:"4x"},f)),x.createElement(i.Box,{mb:"3x"},l&&x.createElement(i.Text,{color:h,fontSize:"md",lineHeight:"md",fontWeight:"semibold"},l)),t.length>0&&x.createElement(x.Fragment,null,x.createElement(i.Stack,{direction:"row",spacing:"2x"},t.map(function(e){return e?x.createElement(i.Tag,{key:e,variant:"solid",fontFamily:"mono",fontSize:"sm",lineHeight:"sm",mb:"1x"},e):null})),x.createElement(i.Stack,{direction:"row",spacing:"2x",mb:"1x"},s.map(function(e){return x.createElement(i.Text,{key:e,color:g,fontFamily:"mono",fontSize:"sm",lineHeight:"sm"},e)}))))},p=["colorStyle","colorType"];function m(){return(m=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e}).apply(this,arguments)}function v(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var n,l,o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var i=[],t=!0,s=!1;try{for(o=o.call(e);!(t=(n=o.next()).done)&&(i.push(n.value),!r||i.length!==r);t=!0);}catch(e){s=!0,l=e}finally{try{t||null==o.return||o.return()}finally{if(s)throw l}}return i}}(e,r)||function(e,r){if(e){if("string"==typeof e)return b(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return b(e,r)}}(e,r)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(e,r){(null==r||r>e.length)&&(r=e.length);for(var n=0,l=Array(r);n<r;n++)l[n]=e[n];return l}var k=function(e){var r,n=e.colorStyle,l=void 0===n?{}:n,o=e.colorType,t=function(e,r){if(null==e)return{};var n,l,o=function(e,r){if(null==e)return{};var n,l,o={},i=Object.keys(e);for(l=0;l<i.length;l++)n=i[l],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(l=0;l<i.length;l++)n=i[l],!(r.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(e,p),c=(0,i.useTheme)(),d=v((0,i.useColorMode)(),1)[0],u=v((0,i.useColorStyle)({colorMode:d}),1)[0],j=null!==(r=a()(l,o))&&void 0!==r?r:a()(u,o),y=Object.keys(j).map(function(e){var r,n,i=Array.isArray(j)?"":(r=e,(r=(0,s.Zs)(r)).charAt(0).toUpperCase()+r.slice(1)),t=null!==(n=a()(l,"".concat(o,".").concat(e)))&&void 0!==n?n:a()(u,"".concat(o,".").concat(e)),d=(0,s.rY)(t).map(function(e){return h()(c,["colors",e])?e:null}),x=(0,s.rY)(t).map(function(e){var r;return null!==(r=a()(c,["colors",e]))&&void 0!==r?r:e});return Array.isArray(j)&&(e="#"+(Number(e)+1)),{colorLabel:i,colorType:o,colorKey:e,colorTokens:d,colorValues:x}});return x.createElement(i.Grid,m({rowGap:"8x",columnGap:"12x",templateColumns:"repeat(auto-fill, minmax(".concat(120,"px, 1fr))")},t),y.map(function(e){var r=e.colorLabel,n=e.colorType,l=e.colorKey,o=e.colorTokens,i=e.colorValues;return x.createElement(f,{key:l,colorLabel:r,colorType:n,colorKey:l,colorTokens:o,colorValues:i})}))};function S(){return(S=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e}).apply(this,arguments)}function w(e,r){(null==r||r>e.length)&&(r=e.length);for(var n=0,l=Array(r);n<r;n++)l[n]=e[n];return l}var T=function(e){var r=(0,i.useColorMode)(),n=(function(e){if(Array.isArray(e))return e}(r)||function(e,r){var n,l,o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var i=[],t=!0,s=!1;try{for(o=o.call(e);!(t=(n=o.next()).done)&&(i.push(n.value),!r||i.length!==r);t=!0);}catch(e){s=!0,l=e}finally{try{t||null==o.return||o.return()}finally{if(s)throw l}}return i}}(r,1)||function(e,r){if(e){if("string"==typeof e)return w(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return w(e,r)}}(r,1)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())[0];return x.createElement(i.Box,S({px:"10x",py:"8x"},{dark:{backgroundColor:"gray:100",border:1,borderColor:"gray:70"},light:{backgroundColor:"white:emphasis",border:1,borderColor:"gray:20"}}[n],e))};function I(){return(I=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e}).apply(this,arguments)}function O(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var n,l,o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var i=[],t=!0,s=!1;try{for(o=o.call(e);!(t=(n=o.next()).done)&&(i.push(n.value),!r||i.length!==r);t=!0);}catch(e){s=!0,l=e}finally{try{t||null==o.return||o.return()}finally{if(s)throw l}}return i}}(e,r)||function(e,r){if(e){if("string"==typeof e)return C(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return C(e,r)}}(e,r)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function C(e,r){(null==r||r>e.length)&&(r=e.length);for(var n=0,l=Array(r);n<r;n++)l[n]=e[n];return l}var H=function(e){var r,n=O((0,i.useColorMode)(),1)[0],l=O((0,i.useColorStyle)({colorMode:n}),1)[0],o=null==l?void 0:null===(r=l.color)||void 0===r?void 0:r.primary;return x.createElement(i.Box,I({mb:"5x",color:o},e))},M=n(82650);function z(e){var r=Object.assign({div:"div",h1:"h1",p:"p",h2:"h2",a:"a",svg:"svg",use:"use",code:"code",pre:"pre",h3:"h3",ul:"ul",li:"li"},(0,o.ah)(),e.components);return(0,l.jsxs)(r.div,{className:"main-content",id:"main-content",children:["\n",(0,l.jsx)(r.h1,{id:"colorstyleprovider",children:"ColorStyleProvider"}),"\n",(0,l.jsx)(r.p,{children:"Tonic UI comes with a color style system that defines functional color values."}),"\n",(0,l.jsxs)(r.h2,{id:"setup",children:["Setup",(0,l.jsx)(r.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#setup",children:(0,l.jsx)(r.svg,{children:(0,l.jsx)(r.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,l.jsxs)(r.p,{children:["By using ",(0,l.jsx)(r.code,{children:"TonicProvider"})," at root of your application, it will add ",(0,l.jsx)(r.code,{children:"ColorStyleProvider"})," internally to provide the color style context to all components. The default color style will be added automatically."]}),"\n",(0,l.jsx)(r.pre,{disabled:!0,children:(0,l.jsx)(r.code,{className:"language-jsx",children:"import React from 'react';\nimport { Box, TonicProvider } from '@tonic-ui/react';\n\nfunction App(props) {\n  return (\n    <TonicProvider\n      /**\n       * The `colorStyle` config\n       * @param {object} defaultValue\n       * @param {object} value\n       * @param {function} onChange\n       */\n      colorStyle={{\n        // You can omit color style settings if using the default values\n      }}\n    >\n      <Box {...props} />\n    </TonicProvider>\n  );\n}\n"})}),"\n",(0,l.jsx)(r.p,{children:"The above setup is equivalent to:"}),"\n",(0,l.jsx)(r.pre,{disabled:!0,children:(0,l.jsx)(r.code,{className:"language-jsx",children:"<ColorStyleProvider>\n  <Box {...props} />\n</ColorStyleProvider>\n"})}),"\n",(0,l.jsxs)(r.h3,{id:"the-colorstyle-config",children:["The ",(0,l.jsx)(r.code,{children:"colorStyle"})," config",(0,l.jsx)(r.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#the-colorstyle-config",children:(0,l.jsx)(r.svg,{children:(0,l.jsx)(r.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,l.jsxs)(r.p,{children:["The ",(0,l.jsx)(r.code,{children:"colorStyle"})," config has the following options:"]}),"\n",(0,l.jsxs)(r.ul,{children:["\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.code,{children:"defaultValue"}),": The default value for the color style."]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.code,{children:"value"}),": The current value for the color style."]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.code,{children:"onChange(colorStyle)"}),": A function that is called when the color style is changed."]}),"\n"]}),"\n",(0,l.jsxs)(r.h2,{id:"default-color-style",children:["Default Color Style",(0,l.jsx)(r.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#default-color-style",children:(0,l.jsx)(r.svg,{children:(0,l.jsx)(r.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,l.jsxs)(r.h3,{id:"import",children:["Import",(0,l.jsx)(r.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#import",children:(0,l.jsx)(r.svg,{children:(0,l.jsx)(r.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:"language-js",children:"import { colorStyle } from '@tonic-ui/react';\n"})}),"\n",(0,l.jsxs)(r.h3,{id:"color-style-settings",children:["Color style settings",(0,l.jsx)(r.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#color-style-settings",children:(0,l.jsx)(r.svg,{children:(0,l.jsx)(r.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,l.jsx)(i.Box,{mb:"6x",children:(0,l.jsx)(t.Z,{children:(0,M.Z)(i.colorStyle)})}),"\n",(0,l.jsxs)(r.h2,{id:"override-default-color-style",children:["Override Default Color Style",(0,l.jsx)(r.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#override-default-color-style",children:(0,l.jsx)(r.svg,{children:(0,l.jsx)(r.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,l.jsxs)(r.p,{children:["To override default color style, you can create a color style object in accordance to the color mode, and pass the object to ",(0,l.jsx)(r.code,{children:"TonicProvider"})," with either the ",(0,l.jsx)(r.code,{children:"value"})," or the ",(0,l.jsx)(r.code,{children:"defaultValue"})," property."]}),"\n",(0,l.jsx)(r.pre,{disabled:!0,children:(0,l.jsx)(r.code,{className:"language-jsx",children:"import React from 'react';\nimport { Box, TonicProvider, colorStyle } from '@tonic-ui/react';\n\nfunction App(props) {\n  return (\n    <TonicProvider\n      colorStyle={{\n        value: customColorStyle,\n      }}\n    >\n      <Box {...props} />\n    </TonicProvider>\n  );\n}\n\nconst customColorStyle = {\n  ...colorStyle,\n   dark: {\n    ...colorStyle.dark,\n    color: {\n      emphasis: 'white:emphasis',\n      primary: 'white:primary',\n      secondary: 'white:secondary',\n      tertiary: 'white:tertiary',\n      disabled: 'white:disabled',\n      success: 'green:40',\n      info: 'blue:40',\n      warning: 'orange:50',\n      error: 'red:50',\n    },\n  },\n  light: {\n    ...colorStyle.light,\n    color: {\n      emphasis: 'black:emphasis',\n      primary: 'black:primary',\n      secondary: 'black:secondary',\n      tertiary: 'black:tertiary',\n      disabled: 'black:disabled',\n      success: 'green:50',\n      info: 'blue:60',\n      warning: 'orange:50',\n      error: 'red:60',\n    },\n  },\n};\n"})}),"\n",(0,l.jsxs)(r.h2,{id:"managing-color-style",children:["Managing Color Style",(0,l.jsx)(r.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#managing-color-style",children:(0,l.jsx)(r.svg,{children:(0,l.jsx)(r.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,l.jsxs)(r.p,{children:["To manage color style in your application, you can use the ",(0,l.jsx)(r.a,{href:"color-style/useColorStyle",children:"useColorStyle"})," hook."]}),"\n",(0,l.jsxs)(r.h2,{id:"color-values",children:["Color Values",(0,l.jsx)(r.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#color-values",children:(0,l.jsx)(r.svg,{children:(0,l.jsx)(r.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,l.jsxs)(r.h3,{id:"background",children:["Background",(0,l.jsx)(r.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#background",children:(0,l.jsx)(r.svg,{children:(0,l.jsx)(r.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i.DarkMode,{children:(0,l.jsxs)(T,{children:[(0,l.jsxs)(H,{children:[(0,l.jsxs)(i.Flex,{alignItems:"center",children:[(0,l.jsx)(i.Icon,{icon:"moon",size:"6x",color:"yellow:50"}),(0,l.jsx)(i.Space,{width:"2x"}),(0,l.jsx)(i.Text,{fontSize:"lg",lineHeight:"lg",children:(0,l.jsx)(r.p,{children:"Dark Mode"})})]}),(0,l.jsx)(i.Divider,{my:"2x"})]}),(0,l.jsx)(k,{colorType:"background"})]})}),(0,l.jsx)(i.LightMode,{children:(0,l.jsxs)(T,{children:[(0,l.jsxs)(H,{children:[(0,l.jsxs)(i.Flex,{alignItems:"center",children:[(0,l.jsx)(i.Icon,{icon:"sun",size:"6x",color:"yellow:50"}),(0,l.jsx)(i.Space,{width:"2x"}),(0,l.jsx)(i.Text,{fontSize:"lg",lineHeight:"lg",children:(0,l.jsx)(r.p,{children:"Light Mode"})})]}),(0,l.jsx)(i.Divider,{my:"2x"})]}),(0,l.jsx)(k,{colorType:"background"})]})})]}),"\n",(0,l.jsxs)(r.h3,{id:"color",children:["Color",(0,l.jsx)(r.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#color",children:(0,l.jsx)(r.svg,{children:(0,l.jsx)(r.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i.DarkMode,{children:(0,l.jsxs)(T,{children:[(0,l.jsxs)(H,{children:[(0,l.jsxs)(i.Flex,{alignItems:"center",children:[(0,l.jsx)(i.Icon,{icon:"moon",size:"6x",color:"yellow:50"}),(0,l.jsx)(i.Space,{width:"2x"}),(0,l.jsx)(i.Text,{fontSize:"lg",lineHeight:"lg",children:(0,l.jsx)(r.p,{children:"Dark Mode"})})]}),(0,l.jsx)(i.Divider,{my:"2x"})]}),(0,l.jsx)(k,{colorType:"color"})]})}),(0,l.jsx)(i.LightMode,{children:(0,l.jsxs)(T,{children:[(0,l.jsxs)(H,{children:[(0,l.jsxs)(i.Flex,{alignItems:"center",children:[(0,l.jsx)(i.Icon,{icon:"sun",size:"6x",color:"yellow:50"}),(0,l.jsx)(i.Space,{width:"2x"}),(0,l.jsx)(i.Text,{fontSize:"lg",lineHeight:"lg",children:(0,l.jsx)(r.p,{children:"Light Mode"})})]}),(0,l.jsx)(i.Divider,{my:"2x"})]}),(0,l.jsx)(k,{colorType:"color"})]})})]}),"\n",(0,l.jsxs)(r.h3,{id:"text",children:["Text",(0,l.jsx)(r.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#text",children:(0,l.jsx)(r.svg,{children:(0,l.jsx)(r.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i.DarkMode,{children:(0,l.jsxs)(T,{children:[(0,l.jsxs)(H,{children:[(0,l.jsxs)(i.Flex,{alignItems:"center",children:[(0,l.jsx)(i.Icon,{icon:"moon",size:"6x",color:"yellow:50"}),(0,l.jsx)(i.Space,{width:"2x"}),(0,l.jsx)(i.Text,{fontSize:"lg",lineHeight:"lg",children:(0,l.jsx)(r.p,{children:"Dark Mode"})})]}),(0,l.jsx)(i.Divider,{my:"2x"})]}),(0,l.jsx)(k,{colorType:"text"})]})}),(0,l.jsx)(i.LightMode,{children:(0,l.jsxs)(T,{children:[(0,l.jsxs)(H,{children:[(0,l.jsxs)(i.Flex,{alignItems:"center",children:[(0,l.jsx)(i.Icon,{icon:"sun",size:"6x",color:"yellow:50"}),(0,l.jsx)(i.Space,{width:"2x"}),(0,l.jsx)(i.Text,{fontSize:"lg",lineHeight:"lg",children:(0,l.jsx)(r.p,{children:"Light Mode"})})]}),(0,l.jsx)(i.Divider,{my:"2x"})]}),(0,l.jsx)(k,{colorType:"text"})]})})]}),"\n",(0,l.jsxs)(r.h3,{id:"shadow",children:["Shadow",(0,l.jsx)(r.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#shadow",children:(0,l.jsx)(r.svg,{children:(0,l.jsx)(r.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i.DarkMode,{children:(0,l.jsxs)(T,{children:[(0,l.jsxs)(H,{children:[(0,l.jsxs)(i.Flex,{alignItems:"center",children:[(0,l.jsx)(i.Icon,{icon:"moon",size:"6x",color:"yellow:50"}),(0,l.jsx)(i.Space,{width:"2x"}),(0,l.jsx)(i.Text,{fontSize:"lg",lineHeight:"lg",children:(0,l.jsx)(r.p,{children:"Dark Mode"})})]}),(0,l.jsx)(i.Divider,{my:"2x"})]}),(0,l.jsx)(k,{colorType:"shadow",templateColumns:"repeat(auto-fill, minmax(240px, 1fr))"})]})}),(0,l.jsx)(i.LightMode,{children:(0,l.jsxs)(T,{children:[(0,l.jsxs)(H,{children:[(0,l.jsxs)(i.Flex,{alignItems:"center",children:[(0,l.jsx)(i.Icon,{icon:"sun",size:"6x",color:"yellow:50"}),(0,l.jsx)(i.Space,{width:"2x"}),(0,l.jsx)(i.Text,{fontSize:"lg",lineHeight:"lg",children:(0,l.jsx)(r.p,{children:"Light Mode"})})]}),(0,l.jsx)(i.Divider,{my:"2x"})]}),(0,l.jsx)(k,{colorType:"shadow",templateColumns:"repeat(auto-fill, minmax(240px, 1fr))"})]})})]}),"\n",(0,l.jsxs)(r.h3,{id:"severity",children:["Severity",(0,l.jsx)(r.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#severity",children:(0,l.jsx)(r.svg,{children:(0,l.jsx)(r.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i.DarkMode,{children:(0,l.jsxs)(T,{children:[(0,l.jsxs)(H,{children:[(0,l.jsxs)(i.Flex,{alignItems:"center",children:[(0,l.jsx)(i.Icon,{icon:"moon",size:"6x",color:"yellow:50"}),(0,l.jsx)(i.Space,{width:"2x"}),(0,l.jsx)(i.Text,{fontSize:"lg",lineHeight:"lg",children:(0,l.jsx)(r.p,{children:"Dark Mode"})})]}),(0,l.jsx)(i.Divider,{my:"2x"})]}),(0,l.jsx)(k,{colorType:"severity"})]})}),(0,l.jsx)(i.LightMode,{children:(0,l.jsxs)(T,{children:[(0,l.jsxs)(H,{children:[(0,l.jsxs)(i.Flex,{alignItems:"center",children:[(0,l.jsx)(i.Icon,{icon:"sun",size:"6x",color:"yellow:50"}),(0,l.jsx)(i.Space,{width:"2x"}),(0,l.jsx)(i.Text,{fontSize:"lg",lineHeight:"lg",children:(0,l.jsx)(r.p,{children:"Light Mode"})})]}),(0,l.jsx)(i.Divider,{my:"2x"})]}),(0,l.jsx)(k,{colorType:"severity"})]})})]}),"\n",(0,l.jsxs)(r.h3,{id:"chart",children:["Chart",(0,l.jsx)(r.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#chart",children:(0,l.jsx)(r.svg,{children:(0,l.jsx)(r.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i.DarkMode,{children:(0,l.jsxs)(T,{children:[(0,l.jsxs)(H,{children:[(0,l.jsxs)(i.Flex,{alignItems:"center",children:[(0,l.jsx)(i.Icon,{icon:"moon",size:"6x",color:"yellow:50"}),(0,l.jsx)(i.Space,{width:"2x"}),(0,l.jsx)(i.Text,{fontSize:"lg",lineHeight:"lg",children:(0,l.jsx)(r.p,{children:"Dark Mode"})})]}),(0,l.jsx)(i.Divider,{my:"2x"})]}),(0,l.jsx)(k,{colorType:"chart.classic.colors"})]})}),(0,l.jsx)(i.LightMode,{children:(0,l.jsxs)(T,{children:[(0,l.jsxs)(H,{children:[(0,l.jsxs)(i.Flex,{alignItems:"center",children:[(0,l.jsx)(i.Icon,{icon:"sun",size:"6x",color:"yellow:50"}),(0,l.jsx)(i.Space,{width:"2x"}),(0,l.jsx)(i.Text,{fontSize:"lg",lineHeight:"lg",children:(0,l.jsx)(r.p,{children:"Light Mode"})})]}),(0,l.jsx)(i.Divider,{my:"2x"})]}),(0,l.jsx)(k,{colorType:"chart.classic.colors"})]})})]}),"\n",(0,l.jsxs)(r.h2,{id:"gradient-color-values",children:["Gradient Color Values",(0,l.jsx)(r.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#gradient-color-values",children:(0,l.jsx)(r.svg,{children:(0,l.jsx)(r.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,l.jsxs)(r.p,{children:["Gradient color values are not defined in the color style system, you can set ",(0,l.jsx)(r.code,{children:"gradient"})," with below values when necessary."]}),"\n",(0,l.jsx)(t.Z,{children:(0,M.Z)({gradient:{severity:{high:["purple:60","red:50"],medium:["red:50","orange:50"],low:["orange:50","yellow:50"],safe:["teal:50","green:40"]},others:{1:["purple:50","magenta:40"],2:["purple:60","blue:50"],3:["blue:50","teal:40"],4:["cyan:40","teal:30"],5:["blue:60","teal:40"],6:["green:40","cyan:30"],7:["magenta:60","red:40"],8:["magenta:50","blue:60"]}}})}),"\n",(0,l.jsxs)(T,{display:"flex",flexDirection:"column",rowGap:"8x",children:[(0,l.jsxs)(i.Box,{children:[(0,l.jsxs)(H,{children:[(0,l.jsx)(i.Text,{fontSize:"lg",lineHeight:"lg",children:(0,l.jsx)(r.p,{children:"Gradient - Severity"})}),(0,l.jsx)(i.Divider,{my:"2x"})]}),(0,l.jsx)(k,{colorStyle:{gradient:{high:["purple:60","red:50"],medium:["red:50","orange:50"],low:["orange:50","yellow:50"],safe:["teal:50","green:40"]}},colorType:"gradient",templateColumns:"repeat(auto-fill, minmax(240px, 1fr))"})]}),(0,l.jsxs)(i.Box,{children:[(0,l.jsxs)(H,{children:[(0,l.jsx)(i.Text,{fontSize:"lg",lineHeight:"lg",children:(0,l.jsx)(r.p,{children:"Gradient - Others"})}),(0,l.jsx)(i.Divider,{my:"2x"})]}),(0,l.jsx)(k,{colorStyle:{gradient:{1:["purple:50","magenta:40"],2:["purple:60","blue:50"],3:["blue:50","teal:40"],4:["cyan:40","teal:30"],5:["blue:60","teal:40"],6:["green:40","cyan:30"],7:["magenta:60","red:40"],8:["magenta:50","blue:60"]}},colorType:"gradient",templateColumns:"repeat(auto-fill, minmax(240px, 1fr))"})]})]}),"\n",(0,l.jsxs)(r.h2,{id:"blindness-color-values",children:["Blindness Color Values",(0,l.jsx)(r.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#blindness-color-values",children:(0,l.jsx)(r.svg,{children:(0,l.jsx)(r.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,l.jsxs)(r.p,{children:["Blindness color values are not defined in the color style system, you can set ",(0,l.jsx)(r.code,{children:"blindness"})," with below values when necessary."]}),"\n",(0,l.jsx)(t.Z,{children:(0,M.Z)({blindness:{severity:{high:"magenta:60",medium:"orange:50",low:"yellow:50",safe:"green:30",info:"gray:50",unknown:"gray:50"},chart:{classic:{colors:["gray:50","blue:30","green:30","orange:50","cyan:30","magenta:60","purple:50","teal:40","purple:30","cyan:70","yellow:50"]}},gradient:{severity:{high:["purple:60","magenta:60"],medium:["magenta:60","orange:50"],low:["orange:50","yellow:50"],safe:["teal:50","green:30"]}}}})}),"\n",(0,l.jsxs)(T,{display:"flex",flexDirection:"column",rowGap:"8x",children:[(0,l.jsxs)(i.Box,{children:[(0,l.jsxs)(H,{children:[(0,l.jsx)(i.Text,{fontSize:"lg",lineHeight:"lg",children:(0,l.jsx)(r.p,{children:"Blindness - Severity"})}),(0,l.jsx)(i.Divider,{my:"2x"})]}),(0,l.jsx)(k,{colorStyle:{severity:{high:"magenta:60",medium:"orange:50",low:"yellow:50",safe:"green:30",info:"gray:50",unknown:"gray:50"}},colorType:"severity"})]}),(0,l.jsxs)(i.Box,{children:[(0,l.jsxs)(H,{children:[(0,l.jsx)(i.Text,{fontSize:"lg",lineHeight:"lg",children:(0,l.jsx)(r.p,{children:"Blindness - Chart"})}),(0,l.jsx)(i.Divider,{my:"2x"})]}),(0,l.jsx)(k,{colorStyle:{chart:{classic:{colors:["gray:50","blue:30","green:30","orange:50","cyan:30","magenta:60","purple:50","teal:40","purple:30","cyan:70","yellow:50"]}}},colorType:"chart.classic.colors"})]}),(0,l.jsxs)(i.Box,{children:[(0,l.jsxs)(H,{children:[(0,l.jsx)(i.Text,{fontSize:"lg",lineHeight:"lg",children:(0,l.jsx)(r.p,{children:"Blindness - Gradient"})}),(0,l.jsx)(i.Divider,{my:"2x"})]}),(0,l.jsx)(k,{colorStyle:{gradient:{high:["purple:60","magenta:60"],medium:["magenta:60","orange:50"],low:["orange:50","yellow:50"],safe:["teal:50","green:30"]}},colorType:"gradient",templateColumns:"repeat(auto-fill, minmax(240px, 1fr))"})]})]})]})}var D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=Object.assign({},(0,o.ah)(),e.components).wrapper;return r?(0,l.jsx)(r,Object.assign({},e,{children:(0,l.jsx)(z,e)})):z(e)}},35400:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/color-style",function(){return n(51340)}])}},function(e){e.O(0,[6123,9774,2888,179],function(){return e(e.s=35400)}),_N_E=e.O()}]);