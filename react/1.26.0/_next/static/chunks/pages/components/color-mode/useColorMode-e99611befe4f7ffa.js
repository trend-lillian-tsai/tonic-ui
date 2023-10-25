(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2153],{49791:function(e,o,n){"use strict";n.r(o),n.d(o,{default:function(){return useColorMode_page}});var r=n(52322),t=n(45392),l=n(83449),a=n(28165),c=n(67569),i=n(2784);function _arrayLikeToArray(e,o){(null==o||o>e.length)&&(o=e.length);for(var n=0,r=Array(o);n<o;n++)r[n]=e[n];return r}var useColorMode=function(){var e,o=function(e){if(Array.isArray(e))return e}(e=(0,c.useColorMode)())||function(e,o){var n,r,t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var l=[],a=!0,c=!1;try{for(t=t.call(e);!(a=(n=t.next()).done)&&(l.push(n.value),!o||l.length!==o);a=!0);}catch(e){c=!0,r=e}finally{try{a||null==t.return||t.return()}finally{if(c)throw r}}return l}}(e,2)||function(e,o){if(e){if("string"==typeof e)return _arrayLikeToArray(e,o);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(e,o)}}(e,2)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),n=o[0],r=o[1];return i.createElement(i.Fragment,null,i.createElement(a.xB,{styles:(0,a.iv)(":root,:host{color-scheme:",n,";}","")}),i.createElement(c.Button,{onClick:function(){r({dark:"light",light:"dark"}[n])}},"Toggle Color Mode"))};function _createMdxContent(e){var o=Object.assign({div:"div",h1:"h1",p:"p",code:"code",h2:"h2",a:"a",svg:"svg",use:"use",pre:"pre",h3:"h3"},(0,t.ah)(),e.components);return(0,r.jsxs)(o.div,{className:"main-content",id:"main-content",children:["\n","\n",(0,r.jsx)(o.h1,{id:"usecolormode",children:"useColorMode"}),"\n",(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.code,{children:"useColorMode"})," is a custom Hook that gives you access to the current color mode, and a function to change the color mode."]}),"\n",(0,r.jsxs)(o.h2,{id:"import",children:["Import",(0,r.jsx)(o.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#import",children:(0,r.jsx)(o.svg,{children:(0,r.jsx)(o.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-js",children:"import { useColorStyle } from '@tonic-ui/react';\n"})}),"\n",(0,r.jsxs)(o.h2,{id:"usage",children:["Usage",(0,r.jsx)(o.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#usage",children:(0,r.jsx)(o.svg,{children:(0,r.jsx)(o.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,r.jsx)(o.pre,{disabled:!0,children:(0,r.jsx)(o.code,{className:"language-jsx",children:"import { Global, css } from '@emotion/react';\nimport {\n  Button,\n  useColorMode,\n} from '@tonic-ui/react';\nimport React from 'react';\n\nconst App = () => {\n  const [colorMode, setColorMode] = useColorMode(); // One of: 'dark', 'light'\n  const toggleColorMode = () => {\n    const nextColorMode = {\n      'dark': 'light',\n      'light': 'dark',\n    }[colorMode];\n    setColorMode(nextColorMode);\n  };\n\n  return (\n    <>\n      <Global\n        styles={css`\n          :root, :host {\n            color-scheme: ${colorMode};\n          }\n        `}\n      />\n      <Button onClick={toggleColorMode}>\n        Toggle Color Mode\n      </Button>\n    </>\n  );\n};\n\nexport default App;\n"})}),"\n",(0,r.jsxs)(o.h3,{id:"returns",children:["Returns",(0,r.jsx)(o.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#returns",children:(0,r.jsx)(o.svg,{children:(0,r.jsx)(o.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,r.jsx)(o.p,{children:"Returns an array with the current color mode and a function to change the color mode."}),"\n",(0,r.jsxs)(o.h2,{id:"demos",children:["Demos",(0,r.jsx)(o.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#demos",children:(0,r.jsx)(o.svg,{children:(0,r.jsx)(o.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,r.jsx)(l.Z,{component:useColorMode,file:{data:"import { Global, css } from '@emotion/react';\nimport {\n  Button,\n  useColorMode,\n} from '@tonic-ui/react';\nimport React from 'react';\n\nconst App = () => {\n  const [colorMode, setColorMode] = useColorMode(); // One of: 'dark', 'light'\n  const toggleColorMode = () => {\n    const nextColorMode = {\n      'dark': 'light',\n      'light': 'dark',\n    }[colorMode];\n    setColorMode(nextColorMode);\n  };\n\n  return (\n    <>\n      <Global\n        styles={css`\n          :root, :host {\n            color-scheme: ${colorMode};\n          }\n        `}\n      />\n      <Button onClick={toggleColorMode}>\n        Toggle Color Mode\n      </Button>\n    </>\n  );\n};\n\nexport default App;",path:"pages/components/color-mode/useColorMode.page.mdx"},sandbox:{files:{},raw:"import { Global, css } from '@emotion/react';\nimport {\n  Button,\n  useColorMode,\n} from '@tonic-ui/react';\nimport React from 'react';\n\nconst App = () => {\n  const [colorMode, setColorMode] = useColorMode(); // One of: 'dark', 'light'\n  const toggleColorMode = () => {\n    const nextColorMode = {\n      'dark': 'light',\n      'light': 'dark',\n    }[colorMode];\n    setColorMode(nextColorMode);\n  };\n\n  return (\n    <>\n      <Global\n        styles={css`\n          :root, :host {\n            color-scheme: ${colorMode};\n          }\n        `}\n      />\n      <Button onClick={toggleColorMode}>\n        Toggle Color Mode\n      </Button>\n    </>\n  );\n};\n\nexport default App;",title:"Tonic UI"}})]})}var useColorMode_page=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=Object.assign({},(0,t.ah)(),e.components).wrapper;return o?(0,r.jsx)(o,Object.assign({},e,{children:(0,r.jsx)(_createMdxContent,e)})):_createMdxContent(e)}},83449:function(e,o,n){"use strict";n.d(o,{Z:function(){return g}});var r=n(67569),t=n(49427),l=n(5632),a=n(2784),c=n(85175),i=n(82821),s=n(90622),d=n(52057),u=n(63651),m=["size"];function _extends(){return(_extends=Object.assign?Object.assign.bind():function(e){for(var o=1;o<arguments.length;o++){var n=arguments[o];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var h=(0,a.forwardRef)(function(e,o){var n=e.size,t=function(e,o){if(null==e)return{};var n,r,t=function(e,o){if(null==e)return{};var n,r,t={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],o.indexOf(n)>=0||(t[n]=e[n]);return t}(e,o);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],!(o.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}(e,m);return a.createElement(r.SVGIcon,_extends({size:n,viewBox:"0 0 1024 1024"},t),a.createElement("path",{d:"M755 140.3l0.5-0.3h0.3L512 0 268.3 140h-0.3l0.8 0.4L68.6 256v512L512 1024l443.4-256V256L755 140.3z m-30 506.4v171.2L548 920.1V534.7L883.4 341v215.7l-158.4 90z m-584.4-90.6V340.8L476 534.4v385.7L300 818.5V646.7l-159.4-90.6zM511.7 280l171.1-98.3 166.3 96-336.9 194.5-337-194.6 165.7-95.7L511.7 280z"}))});h.displayName="CodeSandboxIcon";var f=n(94981);function _slicedToArray(e,o){return function(e){if(Array.isArray(e))return e}(e)||function(e,o){var n,r,t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var l=[],a=!0,c=!1;try{for(t=t.call(e);!(a=(n=t.next()).done)&&(l.push(n.value),!o||l.length!==o);a=!0);}catch(e){c=!0,r=e}finally{try{a||null==t.return||t.return()}finally{if(c)throw r}}return l}}(e,o)||function(e,o){if(e){if("string"==typeof e)return _arrayLikeToArray(e,o);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(e,o)}}(e,o)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(e,o){(null==o||o>e.length)&&(o=e.length);for(var n=0,r=Array(o);n<o;n++)r[n]=e[n];return r}var p={fontFamily:'"SFMono-Medium", "SF Mono", "Segoe UI Mono", Menlo, Consolas, Courier, monospace',fontSize:14,overflowX:"auto"},Demo=function(e){var o=e.component,n=e.file,m=e.sandbox,g=(0,l.useRouter)(),x=_slicedToArray((0,a.useReducer)(function(e){return!e},!1),2),y=x[0],C=x[1],b=_slicedToArray((0,r.useColorMode)(),1)[0],M={dark:s.y,light:s.q}[b],k=_slicedToArray((0,t.useToggle)(!1),2),v=k[0],j=k[1],E=(0,i.Z)(null==n?void 0:n.data),_=E.onCopy,A=E.hasCopied,O=(0,a.useCallback)(function(){_()},[_]),T=(0,a.useCallback)(function(){(0,d.b)(m)},[m]),S=(0,a.useCallback)(function(){C(),j(!1)},[C,j]);return a.createElement(c.nu,{code:null==n?void 0:n.data,disabled:!0,language:"jsx",theme:M},a.createElement(r.Box,{border:1,borderColor:{dark:"gray:70",light:"gray:30"}[b],p:"4x"},a.createElement(r.Box,{fontSize:"sm",lineHeight:"sm"},a.createElement(a.Fragment,{key:y},a.createElement(o,null)))),a.createElement(r.Flex,{columnGap:"2x",justifyContent:"flex-end",mb:"4x"},a.createElement(f.Z,{"data-track":v?"CodeBlock|hide_source|".concat((0,u.Z)({path:g.pathname})):"CodeBlock|show_source|".concat((0,u.Z)({path:g.pathname})),onClick:j},a.createElement(r.Tooltip,{label:v?"Hide the source":"Show the source"},a.createElement(r.Icon,{icon:"code",size:{sm:"5x",md:"4x"}}))),a.createElement(f.Z,{"data-track":"CodeBlock|copy_source|".concat((0,u.Z)({path:g.pathname})),onClick:O},a.createElement(r.Tooltip,{label:A?"Copied":"Copy the source"},a.createElement(r.Icon,{icon:"file-copy-o",size:{sm:"5x",md:"4x"}}))),a.createElement(f.Z,{"data-track":"CodeBlock|edit_in_codesandbox|".concat(g.pathname),onClick:T},a.createElement(r.Tooltip,{label:"Edit in CodeSandbox"},a.createElement(h,{size:{sm:"5x",md:"4x"}}))),a.createElement(f.Z,{"data-track":"CodeBlock|reset|".concat(g.pathname),onClick:S},a.createElement(r.Tooltip,{label:"Reset the demo"},a.createElement(r.Icon,{icon:"redo",size:{sm:"5x",md:"4x"}})))),a.createElement(r.Fade,{in:v},a.createElement(r.Collapse,{in:v,unmountOnExit:!0},a.createElement(c.uz,{style:p}))))};Demo.displayName="Demo";var g=Demo},39261:function(e,o,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/color-mode/useColorMode",function(){return n(49791)}])}},function(e){e.O(0,[9774,2888,179],function(){return e(e.s=39261)}),_N_E=e.O()}]);