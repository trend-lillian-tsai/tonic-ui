(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9729],{57944:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return index_page}});var t=r(52322),i=r(45392),l=r(83449),o=r(67569),a=r(2784);function _slicedToArray(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r,t,i=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=i){var l=[],o=!0,a=!1;try{for(i=i.call(e);!(o=(r=i.next()).done)&&(l.push(r.value),!n||l.length!==n);o=!0);}catch(e){a=!0,t=e}finally{try{o||null==i.return||i.return()}finally{if(a)throw t}}return l}}(e,n)||function(e,n){if(e){if("string"==typeof e)return _arrayLikeToArray(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return _arrayLikeToArray(e,n)}}(e,n)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=Array(n);r<n;r++)t[r]=e[r];return t}var customization=function(){var e=_slicedToArray((0,o.useColorMode)(),1)[0],n=_slicedToArray((0,o.useColorStyle)({colorMode:e}),1)[0].divider;return a.createElement(o.Flex,{alignItems:"center",columnGap:"6x"},a.createElement(o.Spinner,{lineColor:"transparent"}),a.createElement(o.Spinner,{lineColor:"red:50",trackColor:"transparent"}),a.createElement(o.Spinner,{lineColor:"red:50",lineWidth:6,trackColor:n,trackWidth:6}))},sizes=function(){return a.createElement(o.Flex,{alignItems:"center",columnGap:"6x"},a.createElement(o.Spinner,{size:"xs"}),a.createElement(o.Spinner,{size:"sm"}),a.createElement(o.Spinner,{size:"md"}),a.createElement(o.Spinner,{size:"lg"}),a.createElement(o.Spinner,{size:"xl"}))},basic=function(){return a.createElement(o.Spinner,null)};function _createMdxContent(e){var n=Object.assign({div:"div",h1:"h1",p:"p",h2:"h2",a:"a",svg:"svg",use:"use",pre:"pre",code:"code",h3:"h3",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",ul:"ul",li:"li"},(0,i.ah)(),e.components);return(0,t.jsxs)(n.div,{className:"main-content",id:"main-content",children:["\n","\n","\n","\n",(0,t.jsx)(n.h1,{id:"spinner",children:"Spinner"}),"\n",(0,t.jsx)(n.p,{children:"A spinner can be used to display the loading state when the part of the page is waiting for action results."}),"\n",(0,t.jsxs)(n.h2,{id:"import",children:["Import",(0,t.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#import",children:(0,t.jsx)(n.svg,{children:(0,t.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"import { Spinner } from '@tonic-ui/react';\n"})}),"\n",(0,t.jsxs)(n.h2,{id:"usage",children:["Usage",(0,t.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#usage",children:(0,t.jsx)(n.svg,{children:(0,t.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,t.jsx)(l.Z,{component:basic,file:{data:"import { Spinner } from '@tonic-ui/react';\nimport React from 'react';\n\nconst App = () => (\n<Spinner />\n);\n\nexport default App;",path:"pages/components/spinner/index.page.mdx"},sandbox:{files:{},raw:"import { Spinner } from '@tonic-ui/react';\nimport React from 'react';\n\nconst App = () => (\n<Spinner />\n);\n\nexport default App;",title:"Tonic UI"}}),"\n",(0,t.jsxs)(n.h3,{id:"sizes",children:["Sizes",(0,t.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#sizes",children:(0,t.jsx)(n.svg,{children:(0,t.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,t.jsxs)(n.p,{children:["You can use the ",(0,t.jsx)(n.code,{children:"size"})," prop to change the size of the spinner. Each size has a cooresponding dimension and stroke width as shown below. If the ",(0,t.jsx)(n.code,{children:"size"})," prop is not provided, it will default to ",(0,t.jsx)(n.code,{children:"md"}),"."]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{align:"left",children:"Size"}),(0,t.jsx)(n.th,{align:"left",children:"Dimension (px)"}),(0,t.jsx)(n.th,{align:"left",children:"Outer Radius (px)"}),(0,t.jsx)(n.th,{align:"left",children:"Stroke Width (px)"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{align:"left",children:"xs"}),(0,t.jsx)(n.td,{align:"left",children:"16 x 16"}),(0,t.jsx)(n.td,{align:"left",children:"8"}),(0,t.jsx)(n.td,{align:"left",children:"2"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{align:"left",children:"sm"}),(0,t.jsx)(n.td,{align:"left",children:"32 x 32"}),(0,t.jsx)(n.td,{align:"left",children:"16"}),(0,t.jsx)(n.td,{align:"left",children:"2"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{align:"left",children:"md"}),(0,t.jsx)(n.td,{align:"left",children:"48 x 48"}),(0,t.jsx)(n.td,{align:"left",children:"24"}),(0,t.jsx)(n.td,{align:"left",children:"4"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{align:"left",children:"lg"}),(0,t.jsx)(n.td,{align:"left",children:"64 x 64"}),(0,t.jsx)(n.td,{align:"left",children:"32"}),(0,t.jsx)(n.td,{align:"left",children:"4"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{align:"left",children:"xl"}),(0,t.jsx)(n.td,{align:"left",children:"80 x 80"}),(0,t.jsx)(n.td,{align:"left",children:"40"}),(0,t.jsx)(n.td,{align:"left",children:"4"})]})]})]}),"\n",(0,t.jsx)(l.Z,{component:sizes,file:{data:'import { Flex, Spinner } from \'@tonic-ui/react\';\nimport React from \'react\';\n\nconst App = () => (\n  <Flex alignItems="center" columnGap="6x">\n    <Spinner size="xs" />\n    <Spinner size="sm" />\n    <Spinner size="md" />\n    <Spinner size="lg" />\n    <Spinner size="xl" />\n  </Flex>\n);\n\nexport default App;',path:"pages/components/spinner/index.page.mdx"},sandbox:{files:{},raw:'import { Flex, Spinner } from \'@tonic-ui/react\';\nimport React from \'react\';\n\nconst App = () => (\n  <Flex alignItems="center" columnGap="6x">\n    <Spinner size="xs" />\n    <Spinner size="sm" />\n    <Spinner size="md" />\n    <Spinner size="lg" />\n    <Spinner size="xl" />\n  </Flex>\n);\n\nexport default App;',title:"Tonic UI"}}),"\n",(0,t.jsxs)(n.h3,{id:"customization",children:["Customization",(0,t.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#customization",children:(0,t.jsx)(n.svg,{children:(0,t.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,t.jsx)(n.p,{children:"The following props are provided for customization:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"lineColor"})," - The line color of the spinner. Set ",(0,t.jsx)(n.code,{children:"lineColor"})," to ",(0,t.jsx)(n.code,{children:"none"})," or ",(0,t.jsx)(n.code,{children:"transparet"})," to remove the line."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"lineWidth"})," - The line width of the spinner."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"trackColor"})," - The track color of the spinner. Set ",(0,t.jsx)(n.code,{children:"trackColor"})," to ",(0,t.jsx)(n.code,{children:"none"})," or ",(0,t.jsx)(n.code,{children:"transparent"})," to remove the track."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"trackWidth"})," - The track width of the spinner."]}),"\n"]}),"\n",(0,t.jsx)(l.Z,{component:customization,file:{data:'import { Flex, Spinner, useColorMode, useColorStyle } from \'@tonic-ui/react\';\nimport React from \'react\';\n\nconst App = () => {\n  const [colorMode] = useColorMode();\n  const [colorStyle] = useColorStyle({ colorMode });\n  const trackColor = colorStyle.divider;\n\n  return (\n    <Flex alignItems="center" columnGap="6x">\n      <Spinner lineColor="transparent" />\n      <Spinner lineColor="red:50" trackColor="transparent" />\n      <Spinner lineColor="red:50" lineWidth={6} trackColor={trackColor} trackWidth={6} />\n    </Flex>\n  );\n};\n\nexport default App;',path:"pages/components/spinner/index.page.mdx"},sandbox:{files:{},raw:'import { Flex, Spinner, useColorMode, useColorStyle } from \'@tonic-ui/react\';\nimport React from \'react\';\n\nconst App = () => {\n  const [colorMode] = useColorMode();\n  const [colorStyle] = useColorStyle({ colorMode });\n  const trackColor = colorStyle.divider;\n\n  return (\n    <Flex alignItems="center" columnGap="6x">\n      <Spinner lineColor="transparent" />\n      <Spinner lineColor="red:50" trackColor="transparent" />\n      <Spinner lineColor="red:50" lineWidth={6} trackColor={trackColor} trackWidth={6} />\n    </Flex>\n  );\n};\n\nexport default App;',title:"Tonic UI"}}),"\n",(0,t.jsxs)(n.h2,{id:"props",children:["Props",(0,t.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#props",children:(0,t.jsx)(n.svg,{children:(0,t.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,t.jsxs)(n.h3,{id:"spinner-1",children:["Spinner",(0,t.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#spinner-1",children:(0,t.jsx)(n.svg,{children:(0,t.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{align:"left",children:"Name"}),(0,t.jsx)(n.th,{align:"left",children:"Type"}),(0,t.jsx)(n.th,{align:"left",children:"Default"}),(0,t.jsx)(n.th,{align:"left",children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{align:"left",children:"size"}),(0,t.jsx)(n.td,{align:"left",children:"string"}),(0,t.jsx)(n.td,{align:"left",children:"'md'"}),(0,t.jsx)(n.td,{align:"left",children:"The size of the spinner. One of: 'xl', 'lg', 'md', 'sm', 'xs'."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{align:"left",children:"lineColor"}),(0,t.jsx)(n.td,{align:"left",children:"string"}),(0,t.jsx)(n.td,{align:"left",children:"'blue:60'"}),(0,t.jsx)(n.td,{align:"left",children:"The line color of the spinner."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{align:"left",children:"lineWidth"}),(0,t.jsx)(n.td,{align:"left",children:"number"}),(0,t.jsx)(n.td,{align:"left"}),(0,t.jsx)(n.td,{align:"left",children:"The line tickness of the spinner."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{align:"left",children:"trackColor"}),(0,t.jsx)(n.td,{align:"left",children:"string"}),(0,t.jsxs)(n.td,{align:"left",children:["'rgba(255, 255, 255, .12)' ",(0,t.jsx)(n.code,{children:"dark"}),(0,t.jsx)("br",{}),"'rgba(0, 0, 0, .12)' ",(0,t.jsx)(n.code,{children:"light"})]}),(0,t.jsx)(n.td,{align:"left",children:"The track color of the spinner."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{align:"left",children:"trackWidth"}),(0,t.jsx)(n.td,{align:"left",children:"number"}),(0,t.jsx)(n.td,{align:"left"}),(0,t.jsx)(n.td,{align:"left",children:"The track tickness of the spinner."})]})]})]})]})}var index_page=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,i.ah)(),e.components).wrapper;return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(_createMdxContent,e)})):_createMdxContent(e)}},83449:function(e,n,r){"use strict";r.d(n,{Z:function(){return m}});var t=r(67569),i=r(49427),l=r(5632),o=r(2784),a=r(85175),c=r(82821),s=r(90622),d=r(52057),h=r(63651),p=["size"];function _extends(){return(_extends=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e}).apply(this,arguments)}var x=(0,o.forwardRef)(function(e,n){var r=e.size,i=function(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},l=Object.keys(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)r=l[t],!(n.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}(e,p);return o.createElement(t.SVGIcon,_extends({size:r,viewBox:"0 0 1024 1024"},i),o.createElement("path",{d:"M755 140.3l0.5-0.3h0.3L512 0 268.3 140h-0.3l0.8 0.4L68.6 256v512L512 1024l443.4-256V256L755 140.3z m-30 506.4v171.2L548 920.1V534.7L883.4 341v215.7l-158.4 90z m-584.4-90.6V340.8L476 534.4v385.7L300 818.5V646.7l-159.4-90.6zM511.7 280l171.1-98.3 166.3 96-336.9 194.5-337-194.6 165.7-95.7L511.7 280z"}))});x.displayName="CodeSandboxIcon";var u=r(94981);function _slicedToArray(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r,t,i=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=i){var l=[],o=!0,a=!1;try{for(i=i.call(e);!(o=(r=i.next()).done)&&(l.push(r.value),!n||l.length!==n);o=!0);}catch(e){a=!0,t=e}finally{try{o||null==i.return||i.return()}finally{if(a)throw t}}return l}}(e,n)||function(e,n){if(e){if("string"==typeof e)return _arrayLikeToArray(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return _arrayLikeToArray(e,n)}}(e,n)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=Array(n);r<n;r++)t[r]=e[r];return t}var f={fontFamily:'"SFMono-Medium", "SF Mono", "Segoe UI Mono", Menlo, Consolas, Courier, monospace',fontSize:14,overflowX:"auto"},Demo=function(e){var n=e.component,r=e.file,p=e.sandbox,m=(0,l.useRouter)(),j=_slicedToArray((0,o.useReducer)(function(e){return!e},!1),2),g=j[0],y=j[1],b=_slicedToArray((0,t.useColorMode)(),1)[0],k={dark:s.y,light:s.q}[b],S=_slicedToArray((0,i.useToggle)(!1),2),C=S[0],v=S[1],z=(0,c.Z)(null==r?void 0:r.data),E=z.onCopy,A=z.hasCopied,_=(0,o.useCallback)(function(){E()},[E]),T=(0,o.useCallback)(function(){(0,d.b)(p)},[p]),w=(0,o.useCallback)(function(){y(),v(!1)},[y,v]);return o.createElement(a.nu,{code:null==r?void 0:r.data,disabled:!0,language:"jsx",theme:k},o.createElement(t.Box,{border:1,borderColor:{dark:"gray:70",light:"gray:30"}[b],p:"4x"},o.createElement(t.Box,{fontSize:"sm",lineHeight:"sm"},o.createElement(o.Fragment,{key:g},o.createElement(n,null)))),o.createElement(t.Flex,{columnGap:"2x",justifyContent:"flex-end",mb:"4x"},o.createElement(u.Z,{"data-track":C?"CodeBlock|hide_source|".concat((0,h.Z)({path:m.pathname})):"CodeBlock|show_source|".concat((0,h.Z)({path:m.pathname})),onClick:v},o.createElement(t.Tooltip,{label:C?"Hide the source":"Show the source"},o.createElement(t.Icon,{icon:"code",size:{sm:"5x",md:"4x"}}))),o.createElement(u.Z,{"data-track":"CodeBlock|copy_source|".concat((0,h.Z)({path:m.pathname})),onClick:_},o.createElement(t.Tooltip,{label:A?"Copied":"Copy the source"},o.createElement(t.Icon,{icon:"file-copy-o",size:{sm:"5x",md:"4x"}}))),o.createElement(u.Z,{"data-track":"CodeBlock|edit_in_codesandbox|".concat(m.pathname),onClick:T},o.createElement(t.Tooltip,{label:"Edit in CodeSandbox"},o.createElement(x,{size:{sm:"5x",md:"4x"}}))),o.createElement(u.Z,{"data-track":"CodeBlock|reset|".concat(m.pathname),onClick:w},o.createElement(t.Tooltip,{label:"Reset the demo"},o.createElement(t.Icon,{icon:"redo",size:{sm:"5x",md:"4x"}})))),o.createElement(t.Fade,{in:C},o.createElement(t.Collapse,{in:C,unmountOnExit:!0},o.createElement(a.uz,{style:f}))))};Demo.displayName="Demo";var m=Demo},36881:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/spinner",function(){return r(57944)}])}},function(e){e.O(0,[9774,2888,179],function(){return e(e.s=36881)}),_N_E=e.O()}]);