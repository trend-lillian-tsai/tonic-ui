(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5929],{57332:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return useConst_page}});var r=t(52322),o=t(45392),a=t(83449),i=t(67569),l=t(49427),s=t(2784),useConst=function(){var e=(0,l.useConst)(function(){return new Date().toTimeString()}),n=(0,l.useConst)(Math.random());return s.createElement(i.Box,{display:"flex",flexDirection:"column",rowGap:"2x"},s.createElement(i.Box,null,"Mount time: ",e),s.createElement(i.Box,null,"Random value: ",n))};function _createMdxContent(e){var n=Object.assign({div:"div",h1:"h1",p:"p",code:"code",h2:"h2",a:"a",svg:"svg",use:"use",pre:"pre",h3:"h3",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,o.ah)(),e.components);return(0,r.jsxs)(n.div,{className:"main-content",id:"main-content",children:["\n","\n",(0,r.jsx)(n.h1,{id:"useconst",children:"useConst"}),"\n",(0,r.jsx)(n.p,{children:"A custom Hook that creates a constant value over the lifecycle of a component."}),"\n",(0,r.jsxs)(n.p,{children:["Unlike ",(0,r.jsx)(n.code,{children:"React.useMemo"}),", this is guaranteed to always return the same value (and if the initializer is a function, only call it once). This is similar to setting a private member in a class constructor."]}),"\n",(0,r.jsxs)(n.p,{children:["If the value should ever change based on dependencies, use ",(0,r.jsx)(n.code,{children:"React.useMemo"})," instead."]}),"\n",(0,r.jsxs)(n.h2,{id:"import",children:["Import",(0,r.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#import",children:(0,r.jsx)(n.svg,{children:(0,r.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"import { useConst } from '@tonic-ui/react-hooks';\n"})}),"\n",(0,r.jsxs)(n.h2,{id:"usage",children:["Usage",(0,r.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#usage",children:(0,r.jsx)(n.svg,{children:(0,r.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"const value = useConst(initialValue);\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"parameters",children:["Parameters",(0,r.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#parameters",children:(0,r.jsx)(n.svg,{children:(0,r.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{align:"left",children:"Name"}),(0,r.jsx)(n.th,{align:"left",children:"Type"}),(0,r.jsx)(n.th,{align:"left",children:"Default"}),(0,r.jsx)(n.th,{align:"left",children:"Description"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{align:"left",children:"initialValue"}),(0,r.jsxs)(n.td,{align:"left",children:["any | ",(0,r.jsx)(n.code,{children:"() => any"})]}),(0,r.jsx)(n.td,{align:"left"}),(0,r.jsxs)(n.td,{align:"left",children:["Initial value, or function to get the initial value. Similar to ",(0,r.jsx)(n.code,{children:"useState"}),", only the value/function passed in the first time this is called is respected."]})]})})]}),"\n",(0,r.jsxs)(n.h3,{id:"returns",children:["Returns",(0,r.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#returns",children:(0,r.jsx)(n.svg,{children:(0,r.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,r.jsx)(n.p,{children:"The value. This is the same value that is returned by the initializer."}),"\n",(0,r.jsxs)(n.h2,{id:"demos",children:["Demos",(0,r.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#demos",children:(0,r.jsx)(n.svg,{children:(0,r.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,r.jsx)(a.Z,{component:useConst,file:{data:"import { Box } from '@tonic-ui/react';\nimport { useConst } from '@tonic-ui/react-hooks';\nimport React from 'react';\n\nconst App = () => {\n  const mountTime = useConst(() => new Date().toTimeString());\n  const randomValue = useConst(Math.random());\n\n  return (\n    <Box display=\"flex\" flexDirection=\"column\" rowGap=\"2x\">\n      <Box>Mount time: {mountTime}</Box>\n      <Box>Random value: {randomValue}</Box>\n    </Box>\n  )\n};\n\nexport default App;",path:"pages/hooks/useConst.page.mdx"},sandbox:{files:{},raw:"import { Box } from '@tonic-ui/react';\nimport { useConst } from '@tonic-ui/react-hooks';\nimport React from 'react';\n\nconst App = () => {\n  const mountTime = useConst(() => new Date().toTimeString());\n  const randomValue = useConst(Math.random());\n\n  return (\n    <Box display=\"flex\" flexDirection=\"column\" rowGap=\"2x\">\n      <Box>Mount time: {mountTime}</Box>\n      <Box>Random value: {randomValue}</Box>\n    </Box>\n  )\n};\n\nexport default App;",title:"Tonic UI"}})]})}var useConst_page=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,o.ah)(),e.components).wrapper;return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(_createMdxContent,e)})):_createMdxContent(e)}},83449:function(e,n,t){"use strict";t.d(n,{Z:function(){return p}});var r=t(67569),o=t(49427),a=t(5632),i=t(2784),l=t(85175),s=t(82821),c=t(90622),d=t(52057),u=t(63651),h=["size"];function _extends(){return(_extends=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var m=(0,i.forwardRef)(function(e,n){var t=e.size,o=function(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],!(n.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}(e,h);return i.createElement(r.SVGIcon,_extends({size:t,viewBox:"0 0 1024 1024"},o),i.createElement("path",{d:"M755 140.3l0.5-0.3h0.3L512 0 268.3 140h-0.3l0.8 0.4L68.6 256v512L512 1024l443.4-256V256L755 140.3z m-30 506.4v171.2L548 920.1V534.7L883.4 341v215.7l-158.4 90z m-584.4-90.6V340.8L476 534.4v385.7L300 818.5V646.7l-159.4-90.6zM511.7 280l171.1-98.3 166.3 96-336.9 194.5-337-194.6 165.7-95.7L511.7 280z"}))});m.displayName="CodeSandboxIcon";var x=t(94981);function _slicedToArray(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t,r,o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var a=[],i=!0,l=!1;try{for(o=o.call(e);!(i=(t=o.next()).done)&&(a.push(t.value),!n||a.length!==n);i=!0);}catch(e){l=!0,r=e}finally{try{i||null==o.return||o.return()}finally{if(l)throw r}}return a}}(e,n)||function(e,n){if(e){if("string"==typeof e)return _arrayLikeToArray(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if("Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return _arrayLikeToArray(e,n)}}(e,n)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=Array(n);t<n;t++)r[t]=e[t];return r}var f={fontFamily:'"SFMono-Medium", "SF Mono", "Segoe UI Mono", Menlo, Consolas, Courier, monospace',fontSize:14,overflowX:"auto"},Demo=function(e){var n=e.component,t=e.file,h=e.sandbox,p=(0,a.useRouter)(),j=_slicedToArray((0,i.useReducer)(function(e){return!e},!1),2),y=j[0],g=j[1],v=_slicedToArray((0,r.useColorMode)(),1)[0],b={dark:c.y,light:c.q}[v],k=_slicedToArray((0,o.useToggle)(!1),2),C=k[0],E=k[1],_=(0,s.Z)(null==t?void 0:t.data),T=_.onCopy,w=_.hasCopied,B=(0,i.useCallback)(function(){T()},[T]),S=(0,i.useCallback)(function(){(0,d.b)(h)},[h]),M=(0,i.useCallback)(function(){g(),E(!1)},[g,E]);return i.createElement(l.nu,{code:null==t?void 0:t.data,disabled:!0,language:"jsx",theme:b},i.createElement(r.Box,{border:1,borderColor:{dark:"gray:70",light:"gray:30"}[v],p:"4x"},i.createElement(r.Box,{fontSize:"sm",lineHeight:"sm"},i.createElement(i.Fragment,{key:y},i.createElement(n,null)))),i.createElement(r.Flex,{columnGap:"2x",justifyContent:"flex-end",mb:"4x"},i.createElement(x.Z,{"data-track":C?"CodeBlock|hide_source|".concat((0,u.Z)({path:p.pathname})):"CodeBlock|show_source|".concat((0,u.Z)({path:p.pathname})),onClick:E},i.createElement(r.Tooltip,{label:C?"Hide the source":"Show the source"},i.createElement(r.Icon,{icon:"code",size:{sm:"5x",md:"4x"}}))),i.createElement(x.Z,{"data-track":"CodeBlock|copy_source|".concat((0,u.Z)({path:p.pathname})),onClick:B},i.createElement(r.Tooltip,{label:w?"Copied":"Copy the source"},i.createElement(r.Icon,{icon:"file-copy-o",size:{sm:"5x",md:"4x"}}))),i.createElement(x.Z,{"data-track":"CodeBlock|edit_in_codesandbox|".concat(p.pathname),onClick:S},i.createElement(r.Tooltip,{label:"Edit in CodeSandbox"},i.createElement(m,{size:{sm:"5x",md:"4x"}}))),i.createElement(x.Z,{"data-track":"CodeBlock|reset|".concat(p.pathname),onClick:M},i.createElement(r.Tooltip,{label:"Reset the demo"},i.createElement(r.Icon,{icon:"redo",size:{sm:"5x",md:"4x"}})))),i.createElement(r.Fade,{in:C},i.createElement(r.Collapse,{in:C,unmountOnExit:!0},i.createElement(l.uz,{style:f}))))};Demo.displayName="Demo";var p=Demo},87364:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/hooks/useConst",function(){return t(57332)}])}},function(e){e.O(0,[9774,2888,179],function(){return e(e.s=87364)}),_N_E=e.O()}]);