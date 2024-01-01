(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6857],{32005:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return useIsomorphicEffect_page}});var o=n(52322),r=n(45392),c=n(83449),a=n(67569),s=n(49427),i=n(2784),useIsomorphicEffect=function(){return(0,s.useIsomorphicEffect)(function(){console.log("useIsomorphicEffect executed")},[]),i.createElement(a.Text,null,i.createElement(a.Code,null,"useIsomorphicEffect()")," resolves to ",i.createElement(a.Code,null,s.useIsomorphicEffect===i.useEffect?"useEffect()":"useLayoutEffect()"))};function _createMdxContent(e){var t=Object.assign({div:"div",h1:"h1",p:"p",code:"code",h2:"h2",a:"a",svg:"svg",use:"use",pre:"pre",h3:"h3",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,r.ah)(),e.components);return(0,o.jsxs)(t.div,{className:"main-content",id:"main-content",children:["\n","\n",(0,o.jsx)(t.h1,{id:"useisomorphiceffect",children:"useIsomorphicEffect"}),"\n",(0,o.jsxs)(t.p,{children:["A custom Hook that resolves to ",(0,o.jsx)(t.code,{children:"useEffect"}),' when "window" is not in scope and ',(0,o.jsx)(t.code,{children:"useLayoutEffect"})," in the browser."]}),"\n",(0,o.jsxs)(t.h2,{id:"import",children:["Import",(0,o.jsx)(t.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#import",children:(0,o.jsx)(t.svg,{children:(0,o.jsx)(t.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:"import { useIsomorphicEffect } from '@tonic-ui/react-hooks';\n"})}),"\n",(0,o.jsxs)(t.h2,{id:"usage",children:["Usage",(0,o.jsx)(t.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#usage",children:(0,o.jsx)(t.svg,{children:(0,o.jsx)(t.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:"useIsomorphicEffect(effect, [dependencies]);\n"})}),"\n",(0,o.jsxs)(t.h3,{id:"parameters",children:["Parameters",(0,o.jsx)(t.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#parameters",children:(0,o.jsx)(t.svg,{children:(0,o.jsx)(t.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{align:"left",children:"Name"}),(0,o.jsx)(t.th,{align:"left",children:"Type"}),(0,o.jsx)(t.th,{align:"left",children:"Default"}),(0,o.jsx)(t.th,{align:"left",children:"Description"})]})}),(0,o.jsxs)(t.tbody,{children:[(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{align:"left",children:"effect"}),(0,o.jsx)(t.td,{align:"left",children:(0,o.jsx)(t.code,{children:"() => void"})}),(0,o.jsx)(t.td,{align:"left"}),(0,o.jsx)(t.td,{align:"left",children:"The effect to run."})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{align:"left",children:"dependencies?"}),(0,o.jsx)(t.td,{align:"left",children:"any[]"}),(0,o.jsx)(t.td,{align:"left"}),(0,o.jsx)(t.td,{align:"left",children:"The dependencies to watch."})]})]})]}),"\n",(0,o.jsxs)(t.h2,{id:"demos",children:["Demos",(0,o.jsx)(t.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#demos",children:(0,o.jsx)(t.svg,{children:(0,o.jsx)(t.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,o.jsx)(c.Z,{component:useIsomorphicEffect,file:{data:"import { Code, Text } from '@tonic-ui/react';\nimport { useIsomorphicEffect } from '@tonic-ui/react-hooks';\nimport React from 'react';\n\nconst App = () => {\n  useIsomorphicEffect(() => {\n    console.log('useIsomorphicEffect executed');\n  }, []);\n\n  return (\n    <Text>\n      <Code>useIsomorphicEffect()</Code> resolves to <Code>{useIsomorphicEffect === React.useEffect ? 'useEffect()' : 'useLayoutEffect()'}</Code>\n    </Text>\n  );\n};\n\nexport default App;",path:"pages/hooks/useIsomorphicEffect.page.mdx"},sandbox:{files:{},raw:"import { Code, Text } from '@tonic-ui/react';\nimport { useIsomorphicEffect } from '@tonic-ui/react-hooks';\nimport React from 'react';\n\nconst App = () => {\n  useIsomorphicEffect(() => {\n    console.log('useIsomorphicEffect executed');\n  }, []);\n\n  return (\n    <Text>\n      <Code>useIsomorphicEffect()</Code> resolves to <Code>{useIsomorphicEffect === React.useEffect ? 'useEffect()' : 'useLayoutEffect()'}</Code>\n    </Text>\n  );\n};\n\nexport default App;",title:"Tonic UI"}})]})}var useIsomorphicEffect_page=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object.assign({},(0,r.ah)(),e.components).wrapper;return t?(0,o.jsx)(t,Object.assign({},e,{children:(0,o.jsx)(_createMdxContent,e)})):_createMdxContent(e)}},83449:function(e,t,n){"use strict";n.d(t,{Z:function(){return x}});var o=n(67569),r=n(49427),c=n(5632),a=n(2784),s=n(65245),i=n(82821),l=n(90622),d=n(52057),f=n(63651),u=["size"];function _extends(){return(_extends=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}var h=(0,a.forwardRef)(function(e,t){var n=e.size,r=function(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},c=Object.keys(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)n=c[o],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}(e,u);return a.createElement(o.SVGIcon,_extends({size:n,viewBox:"0 0 1024 1024"},r),a.createElement("path",{d:"M755 140.3l0.5-0.3h0.3L512 0 268.3 140h-0.3l0.8 0.4L68.6 256v512L512 1024l443.4-256V256L755 140.3z m-30 506.4v171.2L548 920.1V534.7L883.4 341v215.7l-158.4 90z m-584.4-90.6V340.8L476 534.4v385.7L300 818.5V646.7l-159.4-90.6zM511.7 280l171.1-98.3 166.3 96-336.9 194.5-337-194.6 165.7-95.7L511.7 280z"}))});h.displayName="CodeSandboxIcon";var m=n(94981);function _slicedToArray(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n,o,r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var c=[],a=!0,s=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(c.push(n.value),!t||c.length!==t);a=!0);}catch(e){s=!0,o=e}finally{try{a||null==r.return||r.return()}finally{if(s)throw o}}return c}}(e,t)||function(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(e,t)}}(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=Array(t);n<t;n++)o[n]=e[n];return o}var p={fontFamily:'"SFMono-Medium", "SF Mono", "Segoe UI Mono", Menlo, Consolas, Courier, monospace',fontSize:14,overflowX:"auto"},Demo=function(e){var t=e.component,n=e.file,u=e.sandbox,x=(0,c.useRouter)(),E=_slicedToArray((0,a.useReducer)(function(e){return!e},!1),2),j=E[0],g=E[1],y=_slicedToArray((0,o.useColorMode)(),1)[0],b={dark:l.y,light:l.q}[y],v=_slicedToArray((0,r.useToggle)(!1),2),k=v[0],C=v[1],I=(0,i.Z)(null==n?void 0:n.data),_=I.onCopy,T=I.hasCopied,w=(0,a.useCallback)(function(){_()},[_]),O=(0,a.useCallback)(function(){(0,d.b)(u)},[u]),A=(0,a.useCallback)(function(){g(),C(!1)},[g,C]);return a.createElement(s.nu,{code:null==n?void 0:n.data,disabled:!0,language:"jsx",theme:b},a.createElement(o.Box,{border:1,borderColor:{dark:"gray:70",light:"gray:30"}[y],p:"4x"},a.createElement(o.Box,{fontSize:"sm",lineHeight:"sm"},a.createElement(a.Fragment,{key:j},a.createElement(t,null)))),a.createElement(o.Flex,{columnGap:"2x",justifyContent:"flex-end",mb:"4x"},a.createElement(m.Z,{"data-track":k?"CodeBlock|hide_source|".concat((0,f.Z)({path:x.pathname})):"CodeBlock|show_source|".concat((0,f.Z)({path:x.pathname})),onClick:C},a.createElement(o.Tooltip,{label:k?"Hide the source":"Show the source"},a.createElement(o.Icon,{icon:"code",size:{sm:"5x",md:"4x"}}))),a.createElement(m.Z,{"data-track":"CodeBlock|copy_source|".concat((0,f.Z)({path:x.pathname})),onClick:w},a.createElement(o.Tooltip,{label:T?"Copied":"Copy the source"},a.createElement(o.Icon,{icon:"file-copy-o",size:{sm:"5x",md:"4x"}}))),a.createElement(m.Z,{"data-track":"CodeBlock|edit_in_codesandbox|".concat(x.pathname),onClick:O},a.createElement(o.Tooltip,{label:"Edit in CodeSandbox"},a.createElement(h,{size:{sm:"5x",md:"4x"}}))),a.createElement(m.Z,{"data-track":"CodeBlock|reset|".concat(x.pathname),onClick:A},a.createElement(o.Tooltip,{label:"Reset the demo"},a.createElement(o.Icon,{icon:"redo",size:{sm:"5x",md:"4x"}})))),a.createElement(o.Fade,{in:k},a.createElement(o.Collapse,{in:k,unmountOnExit:!0},a.createElement(s.uz,{style:p}))))};Demo.displayName="Demo";var x=Demo},48413:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/hooks/useIsomorphicEffect",function(){return n(32005)}])}},function(e){e.O(0,[9774,2888,179],function(){return e(e.s=48413)}),_N_E=e.O()}]);