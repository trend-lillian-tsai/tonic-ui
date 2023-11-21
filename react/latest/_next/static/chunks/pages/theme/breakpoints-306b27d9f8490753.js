(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9145],{68673:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return index_page}});var r=t(52322),o=t(45392),i=t(83449),a=t(67569),l=t(2784),breakpoints=function(){return l.createElement(a.Box,{fontSize:{_:"md",sm:"sm",md:"md",lg:"lg",xl:"xl","2xl":"2xl"},lineHeight:{_:"md",sm:"sm",md:"md",lg:"lg",xl:"xl","2xl":"2xl"}},l.createElement(a.Box,{display:{_:"none",sm:"block",md:"none"}},l.createElement(a.Box,{mb:"1x"},l.createElement("code",null,"@media screen and (min-width: 320px)")),"Small Text"),l.createElement(a.Box,{display:{_:"none",md:"block",lg:"none"}},l.createElement(a.Box,{mb:"1x"},l.createElement("code",null,"@media screen and (min-width: 640px)")),"Medium Text"),l.createElement(a.Box,{display:{_:"none",lg:"block",xl:"none"}},l.createElement(a.Box,{mb:"1x"},l.createElement("code",null,"@media screen and (min-width: 1024px)")),"Large Text"),l.createElement(a.Box,{display:{_:"none",xl:"block","2xl":"none"}},l.createElement(a.Box,{mb:"1x"},l.createElement("code",null,"@media screen and (min-width: 1280px)")),"Extra Large Text"),l.createElement(a.Box,{display:{_:"none","2xl":"block"}},l.createElement(a.Box,{mb:"1x"},l.createElement("code",null,"@media screen and (min-width: 1680px)")),"Double Extra Large Text"))},d=t(401);function _createMdxContent(e){var n=Object.assign({div:"div",h1:"h1",h2:"h2",a:"a",svg:"svg",use:"use",p:"p",pre:"pre",code:"code",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,o.ah)(),e.components);return(0,r.jsxs)(n.div,{className:"main-content",id:"main-content",children:["\n","\n","\n",(0,r.jsx)(n.h1,{id:"breakpoints",children:"Breakpoints"}),"\n",(0,r.jsxs)(n.h2,{id:"design-tokens",children:["Design Tokens",(0,r.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#design-tokens",children:(0,r.jsx)(n.svg,{children:(0,r.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,r.jsx)(d.Z,{theme:"breakpoints"}),"\n",(0,r.jsx)(n.p,{children:"The default breakpoints is an array of the following values:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"[\n  '320px', // sm\n  '640px', // md\n  '1024px', // lg\n  '1280px', // xl\n  '1680px', // 2xl\n]\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The first value in the array is the smallest breakpoint, and the last value is the largest. You can also use ",(0,r.jsx)(n.code,{children:"sm"}),", ",(0,r.jsx)(n.code,{children:"md"}),", ",(0,r.jsx)(n.code,{children:"lg"}),", ",(0,r.jsx)(n.code,{children:"xl"}),", and ",(0,r.jsx)(n.code,{children:"xxl"})," as breakpoint names to reference the breakpoints in the array."]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{align:"left",children:"Breakpoint"}),(0,r.jsx)(n.th,{align:"left",children:"Media Query"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{align:"left",children:(0,r.jsx)(n.code,{children:"sm"})}),(0,r.jsx)(n.td,{align:"left",children:(0,r.jsx)(n.code,{children:"@media screen and (min-width: 320px)"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{align:"left",children:(0,r.jsx)(n.code,{children:"md"})}),(0,r.jsx)(n.td,{align:"left",children:(0,r.jsx)(n.code,{children:"@media screen and (min-width: 640px)"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{align:"left",children:(0,r.jsx)(n.code,{children:"lg"})}),(0,r.jsx)(n.td,{align:"left",children:(0,r.jsx)(n.code,{children:"@media screen and (min-width: 1024px)"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{align:"left",children:(0,r.jsx)(n.code,{children:"xl"})}),(0,r.jsx)(n.td,{align:"left",children:(0,r.jsx)(n.code,{children:"@media screen and (min-width: 1280px)"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{align:"left",children:(0,r.jsx)(n.code,{children:"2xl"})}),(0,r.jsx)(n.td,{align:"left",children:(0,r.jsx)(n.code,{children:"@media screen and (min-width: 1680px)"})})]})]})]}),"\n",(0,r.jsxs)(n.h2,{id:"examples",children:["Examples",(0,r.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#examples",children:(0,r.jsx)(n.svg,{children:(0,r.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,r.jsx)(n.p,{children:"Try resizing your browser window to see the effect of the responsive styles."}),"\n",(0,r.jsx)(i.Z,{component:breakpoints,file:{data:"import { Box } from '@tonic-ui/react';\nimport React from 'react';\n\nconst App = () => (\n  <Box\n    fontSize={{\n      _: 'md', // default\n      sm: 'sm', // @media screen and (min-width: 320px)\n      md: 'md', // @media screen and (min-width: 640px)\n      lg: 'lg', // @media screen and (min-width: 1024px)\n      xl: 'xl', // @media screen and (min-width: 1280px)\n      '2xl': '2xl', // @media screen and (min-width: 1680px)\n    }}\n    lineHeight={{\n      _: 'md', // default\n      sm: 'sm', // @media screen and (min-width: 320px)\n      md: 'md', // @media screen and (min-width: 640px)\n      lg: 'lg', // @media screen and (min-width: 1024px)\n      xl: 'xl', // @media screen and (min-width: 1280px)\n      '2xl': '2xl', // @media screen and (min-width: 1680px)\n    }}\n  >\n    <Box display={{ _: 'none', sm: 'block', md: 'none' }}>\n      <Box mb=\"1x\"><code>@media screen and (min-width: 320px)</code></Box>\n      Small Text\n    </Box>\n    <Box display={{ _: 'none', md: 'block', lg: 'none' }}>\n      <Box mb=\"1x\"><code>@media screen and (min-width: 640px)</code></Box>\n      Medium Text\n    </Box>\n    <Box display={{ _: 'none', lg: 'block', xl: 'none' }}>\n      <Box mb=\"1x\"><code>@media screen and (min-width: 1024px)</code></Box>\n      Large Text\n    </Box>\n    <Box display={{ _: 'none', xl: 'block', '2xl': 'none' }}>\n      <Box mb=\"1x\"><code>@media screen and (min-width: 1280px)</code></Box>\n      Extra Large Text\n    </Box>\n    <Box display={{ _: 'none', '2xl': 'block' }}>\n      <Box mb=\"1x\"><code>@media screen and (min-width: 1680px)</code></Box>\n      Double Extra Large Text\n    </Box>\n  </Box>\n);\n\nexport default App;",path:"pages/theme/breakpoints/index.page.mdx"},sandbox:{files:{},raw:"import { Box } from '@tonic-ui/react';\nimport React from 'react';\n\nconst App = () => (\n  <Box\n    fontSize={{\n      _: 'md', // default\n      sm: 'sm', // @media screen and (min-width: 320px)\n      md: 'md', // @media screen and (min-width: 640px)\n      lg: 'lg', // @media screen and (min-width: 1024px)\n      xl: 'xl', // @media screen and (min-width: 1280px)\n      '2xl': '2xl', // @media screen and (min-width: 1680px)\n    }}\n    lineHeight={{\n      _: 'md', // default\n      sm: 'sm', // @media screen and (min-width: 320px)\n      md: 'md', // @media screen and (min-width: 640px)\n      lg: 'lg', // @media screen and (min-width: 1024px)\n      xl: 'xl', // @media screen and (min-width: 1280px)\n      '2xl': '2xl', // @media screen and (min-width: 1680px)\n    }}\n  >\n    <Box display={{ _: 'none', sm: 'block', md: 'none' }}>\n      <Box mb=\"1x\"><code>@media screen and (min-width: 320px)</code></Box>\n      Small Text\n    </Box>\n    <Box display={{ _: 'none', md: 'block', lg: 'none' }}>\n      <Box mb=\"1x\"><code>@media screen and (min-width: 640px)</code></Box>\n      Medium Text\n    </Box>\n    <Box display={{ _: 'none', lg: 'block', xl: 'none' }}>\n      <Box mb=\"1x\"><code>@media screen and (min-width: 1024px)</code></Box>\n      Large Text\n    </Box>\n    <Box display={{ _: 'none', xl: 'block', '2xl': 'none' }}>\n      <Box mb=\"1x\"><code>@media screen and (min-width: 1280px)</code></Box>\n      Extra Large Text\n    </Box>\n    <Box display={{ _: 'none', '2xl': 'block' }}>\n      <Box mb=\"1x\"><code>@media screen and (min-width: 1680px)</code></Box>\n      Double Extra Large Text\n    </Box>\n  </Box>\n);\n\nexport default App;",title:"Tonic UI"}}),"\n",(0,r.jsxs)(n.h2,{id:"customizing-breakpoints",children:["Customizing Breakpoints",(0,r.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#customizing-breakpoints",children:(0,r.jsx)(n.svg,{children:(0,r.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,r.jsx)(n.p,{children:"For more control over the breakpoints, you can define custom breakpoints for your application."}),"\n",(0,r.jsxs)(n.p,{children:["To do this, add a ",(0,r.jsx)(n.code,{children:"breakpoints"})," array with additional aliases (e.g. ",(0,r.jsx)(n.code,{children:"sm"}),", ",(0,r.jsx)(n.code,{children:"md"}),", ",(0,r.jsx)(n.code,{children:"lg"}),", ",(0,r.jsx)(n.code,{children:"xl"}),", and ",(0,r.jsx)(n.code,{children:"2xl"}),") to your theme."]}),"\n",(0,r.jsx)(n.pre,{disabled:!0,children:(0,r.jsx)(n.code,{className:"language-jsx",children:"// 1. Import the theme\nimport { ThemeProvider, theme } from '@tonic-ui/react';\n\n// 2. Update the breakpoints\nconst breakpoints = [\n  '320px',\n  '768px',\n  '960px',\n  '1200px',\n  '1440px',\n];\nbreakpoints.sm = breakpoints[0];\nbreakpoints.md = breakpoints[1];\nbreakpoints.lg = breakpoints[2];\nbreakpoints.xl = breakpoints[3];\nbreakpoints['2xl'] = breakpoints[4];\n\n// 3. Extend the theme\nconst customTheme = {\n  ...theme,\n  breakpoints,\n};\n\n// 4. Pass the custom theme to the theme provider\nfunction App() {\n  return (\n    <ThemeProvider theme={customTheme}>\n      {children}\n    </ThemeProvider>\n  );\n}\n"})})]})}var index_page=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,o.ah)(),e.components).wrapper;return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(_createMdxContent,e)})):_createMdxContent(e)}},83449:function(e,n,t){"use strict";t.d(n,{Z:function(){return f}});var r=t(67569),o=t(49427),i=t(5632),a=t(2784),l=t(85175),d=t(82821),c=t(90622),s=t(52057),x=t(63651),m=["size"];function _extends(){return(_extends=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var h=(0,a.forwardRef)(function(e,n){var t=e.size,o=function(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],!(n.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}(e,m);return a.createElement(r.SVGIcon,_extends({size:t,viewBox:"0 0 1024 1024"},o),a.createElement("path",{d:"M755 140.3l0.5-0.3h0.3L512 0 268.3 140h-0.3l0.8 0.4L68.6 256v512L512 1024l443.4-256V256L755 140.3z m-30 506.4v171.2L548 920.1V534.7L883.4 341v215.7l-158.4 90z m-584.4-90.6V340.8L476 534.4v385.7L300 818.5V646.7l-159.4-90.6zM511.7 280l171.1-98.3 166.3 96-336.9 194.5-337-194.6 165.7-95.7L511.7 280z"}))});h.displayName="CodeSandboxIcon";var p=t(94981);function _slicedToArray(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t,r,o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var i=[],a=!0,l=!1;try{for(o=o.call(e);!(a=(t=o.next()).done)&&(i.push(t.value),!n||i.length!==n);a=!0);}catch(e){l=!0,r=e}finally{try{a||null==o.return||o.return()}finally{if(l)throw r}}return i}}(e,n)||function(e,n){if(e){if("string"==typeof e)return _arrayLikeToArray(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if("Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return _arrayLikeToArray(e,n)}}(e,n)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=Array(n);t<n;t++)r[t]=e[t];return r}var u={fontFamily:'"SFMono-Medium", "SF Mono", "Segoe UI Mono", Menlo, Consolas, Courier, monospace',fontSize:14,overflowX:"auto"},Demo=function(e){var n=e.component,t=e.file,m=e.sandbox,f=(0,i.useRouter)(),b=_slicedToArray((0,a.useReducer)(function(e){return!e},!1),2),g=b[0],y=b[1],j=_slicedToArray((0,r.useColorMode)(),1)[0],k={dark:c.y,light:c.q}[j],B=_slicedToArray((0,o.useToggle)(!1),2),w=B[0],v=B[1],E=(0,d.Z)(null==t?void 0:t.data),_=E.onCopy,T=E.hasCopied,C=(0,a.useCallback)(function(){_()},[_]),A=(0,a.useCallback)(function(){(0,s.b)(m)},[m]),S=(0,a.useCallback)(function(){y(),v(!1)},[y,v]);return a.createElement(l.nu,{code:null==t?void 0:t.data,disabled:!0,language:"jsx",theme:k},a.createElement(r.Box,{border:1,borderColor:{dark:"gray:70",light:"gray:30"}[j],p:"4x"},a.createElement(r.Box,{fontSize:"sm",lineHeight:"sm"},a.createElement(a.Fragment,{key:g},a.createElement(n,null)))),a.createElement(r.Flex,{columnGap:"2x",justifyContent:"flex-end",mb:"4x"},a.createElement(p.Z,{"data-track":w?"CodeBlock|hide_source|".concat((0,x.Z)({path:f.pathname})):"CodeBlock|show_source|".concat((0,x.Z)({path:f.pathname})),onClick:v},a.createElement(r.Tooltip,{label:w?"Hide the source":"Show the source"},a.createElement(r.Icon,{icon:"code",size:{sm:"5x",md:"4x"}}))),a.createElement(p.Z,{"data-track":"CodeBlock|copy_source|".concat((0,x.Z)({path:f.pathname})),onClick:C},a.createElement(r.Tooltip,{label:T?"Copied":"Copy the source"},a.createElement(r.Icon,{icon:"file-copy-o",size:{sm:"5x",md:"4x"}}))),a.createElement(p.Z,{"data-track":"CodeBlock|edit_in_codesandbox|".concat(f.pathname),onClick:A},a.createElement(r.Tooltip,{label:"Edit in CodeSandbox"},a.createElement(h,{size:{sm:"5x",md:"4x"}}))),a.createElement(p.Z,{"data-track":"CodeBlock|reset|".concat(f.pathname),onClick:S},a.createElement(r.Tooltip,{label:"Reset the demo"},a.createElement(r.Icon,{icon:"redo",size:{sm:"5x",md:"4x"}})))),a.createElement(r.Fade,{in:w},a.createElement(r.Collapse,{in:w,unmountOnExit:!0},a.createElement(l.uz,{style:u}))))};Demo.displayName="Demo";var f=Demo},401:function(e,n,t){"use strict";var r=t(67569),o=t(2784),i=t(30169),a=t(53733);function _slicedToArray(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t,r,o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var i=[],a=!0,l=!1;try{for(o=o.call(e);!(a=(t=o.next()).done)&&(i.push(t.value),!n||i.length!==n);a=!0);}catch(e){l=!0,r=e}finally{try{a||null==o.return||o.return()}finally{if(l)throw r}}return i}}(e,n)||function(e,n){if(e){if("string"==typeof e)return _arrayLikeToArray(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if("Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return _arrayLikeToArray(e,n)}}(e,n)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=Array(n);t<n;t++)r[t]=e[t];return r}n.Z=function(e){var n,t=e.theme,l=(0,r.useTheme)(),d=_slicedToArray((0,r.useColorMode)(),1)[0],c=null!==(n=_slicedToArray((0,r.useColorStyle)({colorMode:d}),1)[0][t])&&void 0!==n?n:l[t];return c?(("space"===t||"sizes"===t)&&(c=Object.keys(c).filter(function(e){return!e.toString().match(/[qh]$/)}).reduce(function(e,n){return e[n]=c[n],e},{})),o.createElement(r.Box,{mb:"6x"},o.createElement(i.Z,null,o.createElement("div",{className:"js"},"const ".concat(t," = ").concat((0,a.Z)(c,!1)))))):"Theme field not found"}},53733:function(e,n){"use strict";n.Z=function(e){return JSON.stringify(e,null,2).replace(/"/g,"'").replace(/'(\d+|[a-z]+)':/g,"$1:")}},67009:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/theme/breakpoints",function(){return t(68673)}])}},function(e){e.O(0,[9774,2888,179],function(){return e(e.s=67009)}),_N_E=e.O()}]);