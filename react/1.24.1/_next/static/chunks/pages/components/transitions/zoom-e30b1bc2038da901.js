(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8722],{58775:function(e,n,t){"use strict";t.d(n,{Z:function(){return b}});var o=t(67569),r=t(49427),i=t(5632),l=t(2784),a=t(87805),c=t(98485),s=t(71561),d=t(57431),u=t(66824),h=["size"];function m(){return(m=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e}).apply(this,arguments)}var f=(0,l.forwardRef)(function(e,n){var t=e.size,r=function(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],!(n.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}(e,h);return l.createElement(o.SVGIcon,m({size:t,viewBox:"0 0 1024 1024"},r),l.createElement("path",{d:"M755 140.3l0.5-0.3h0.3L512 0 268.3 140h-0.3l0.8 0.4L68.6 256v512L512 1024l443.4-256V256L755 140.3z m-30 506.4v171.2L548 920.1V534.7L883.4 341v215.7l-158.4 90z m-584.4-90.6V340.8L476 534.4v385.7L300 818.5V646.7l-159.4-90.6zM511.7 280l171.1-98.3 166.3 96-336.9 194.5-337-194.6 165.7-95.7L511.7 280z"}))});f.displayName="CodeSandboxIcon";var p=t(30462);function x(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t,o,r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var i=[],l=!0,a=!1;try{for(r=r.call(e);!(l=(t=r.next()).done)&&(i.push(t.value),!n||i.length!==n);l=!0);}catch(e){a=!0,o=e}finally{try{l||null==r.return||r.return()}finally{if(a)throw o}}return i}}(e,n)||function(e,n){if(e){if("string"==typeof e)return g(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if("Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return g(e,n)}}(e,n)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,o=Array(n);t<n;t++)o[t]=e[t];return o}var y={fontFamily:'"SFMono-Medium", "SF Mono", "Segoe UI Mono", Menlo, Consolas, Courier, monospace',fontSize:14,overflowX:"auto"},j=function(e){var n=e.component,t=e.file,h=e.sandbox,m=(0,i.useRouter)(),g=x((0,l.useReducer)(function(e){return!e},!1),2),j=g[0],b=g[1],k=x((0,o.useColorMode)(),1)[0],S={dark:s.y,light:s.q}[k],v=x((0,r.useToggle)(!1),2),w=v[0],E=v[1],C=(0,c.Z)(null==t?void 0:t.data),T=C.onCopy,O=C.hasCopied,I=(0,l.useCallback)(function(){T()},[T]),z=(0,l.useCallback)(function(){(0,d.b)(h)},[h]),Z=(0,l.useCallback)(function(){b(),E(!1)},[b,E]);return l.createElement(a.nu,{code:null==t?void 0:t.data,disabled:!0,language:"jsx",theme:S},l.createElement(o.Box,{border:1,borderColor:{dark:"gray:70",light:"gray:30"}[k],p:"4x"},l.createElement(o.Box,{fontSize:"sm",lineHeight:"sm"},l.createElement(l.Fragment,{key:j},l.createElement(n,null)))),l.createElement(o.Flex,{columnGap:"2x",justifyContent:"flex-end",mb:"4x"},l.createElement(p.Z,{"data-track":w?"CodeBlock|hide_source|".concat((0,u.Z)({path:m.pathname})):"CodeBlock|show_source|".concat((0,u.Z)({path:m.pathname})),onClick:E},l.createElement(o.Tooltip,{label:w?"Hide the source":"Show the source"},l.createElement(o.Icon,{icon:"code",size:{sm:"5x",md:"4x"}}))),l.createElement(p.Z,{"data-track":"CodeBlock|copy_source|".concat((0,u.Z)({path:m.pathname})),onClick:I},l.createElement(o.Tooltip,{label:O?"Copied":"Copy the source"},l.createElement(o.Icon,{icon:"file-copy-o",size:{sm:"5x",md:"4x"}}))),l.createElement(p.Z,{"data-track":"CodeBlock|edit_in_codesandbox|".concat(m.pathname),onClick:z},l.createElement(o.Tooltip,{label:"Edit in CodeSandbox"},l.createElement(f,{size:{sm:"5x",md:"4x"}}))),l.createElement(p.Z,{"data-track":"CodeBlock|reset|".concat(m.pathname),onClick:Z},l.createElement(o.Tooltip,{label:"Reset the demo"},l.createElement(o.Icon,{icon:"redo",size:{sm:"5x",md:"4x"}})))),l.createElement(o.Fade,{in:w},l.createElement(o.Collapse,{in:w,unmountOnExit:!0},l.createElement(a.uz,{style:y}))))};j.displayName="Demo";var b=j},43904:function(e,n,t){"use strict";var o=t(67569),r=t(2784);n.Z=function(e){return r.createElement(o.Flex,e,r.createElement(o.Flex,{flex:"none",mr:"4x",alignItems:"center"},r.createElement(o.Skeleton,{variant:"circle",width:"10x",height:"10x"})),r.createElement(o.Flex,{flex:"auto",flexDirection:"column",rowGap:"2x"},r.createElement(o.Skeleton,null),r.createElement(o.Skeleton,null),r.createElement(o.Skeleton,null)))}},4073:function(e,n,t){"use strict";var o=t(67569),r=t(2784);function i(){return(i=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e}).apply(this,arguments)}function l(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t,o,r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var i=[],l=!0,a=!1;try{for(r=r.call(e);!(l=(t=r.next()).done)&&(i.push(t.value),!n||i.length!==n);l=!0);}catch(e){a=!0,o=e}finally{try{l||null==r.return||r.return()}finally{if(a)throw o}}return i}}(e,n)||function(e,n){if(e){if("string"==typeof e)return a(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if("Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return a(e,n)}}(e,n)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,o=Array(n);t<n;t++)o[t]=e[t];return o}n.Z=function(e){var n,t,a=l((0,o.useColorMode)(),1)[0],c=l((0,o.useColorStyle)({colorMode:a}),1)[0],s={light:{color:"black:primary",bg:"white",borderWidth:1,borderStyle:"solid",borderColor:"gray:20",boxShadow:null==c?void 0:null===(n=c.shadow)||void 0===n?void 0:n.thick},dark:{color:"white:primary",bg:"gray:90",borderWidth:1,borderStyle:"solid",borderColor:"gray:80",boxShadow:null==c?void 0:null===(t=c.shadow)||void 0===t?void 0:t.thick}}[a];return r.createElement(o.Box,i({p:"4x"},s,e))}},89657:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return f}});var o=t(52322),r=t(45392),i=t(58775),l=t(67569),a=t(49427),c=t(2784),s=t(43904),d=t(4073);function u(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,o=Array(n);t<n;t++)o[t]=e[t];return o}var h=function(){var e=(0,a.useToggle)(!1),n=function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t,o,r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var i=[],l=!0,a=!1;try{for(r=r.call(e);!(l=(t=r.next()).done)&&(i.push(t.value),!n||i.length!==n);l=!0);}catch(e){a=!0,o=e}finally{try{l||null==r.return||r.return()}finally{if(a)throw o}}return i}}(e,2)||function(e,n){if(e){if("string"==typeof e)return u(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if("Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return u(e,n)}}(e,2)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),t=n[0],o=n[1];return c.createElement(l.Flex,{direction:"column",rowGap:"4x"},c.createElement(l.TextLabel,{display:"inline-flex",alignItems:"center"},c.createElement(l.Switch,{checked:t,onChange:function(){return o()},size:"md"}),c.createElement(l.Space,{width:"2x"}),c.createElement(l.Text,null,"Show")),c.createElement(l.Zoom,{in:t,unmountOnExit:!1},c.createElement(d.Z,null,c.createElement(s.Z,null))))};function m(e){var n=Object.assign({div:"div",h1:"h1",p:"p",code:"code",a:"a",h2:"h2",svg:"svg",use:"use",pre:"pre",h3:"h3",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,r.ah)(),e.components);return(0,o.jsxs)(n.div,{className:"main-content",id:"main-content",children:["\n","\n",(0,o.jsx)(n.h1,{id:"transitions--zoom",children:"Transitions / Zoom"}),"\n",(0,o.jsx)(n.p,{children:"Transition helps make a UI expressive and easy to use."}),"\n",(0,o.jsxs)(n.p,{children:["The transition components use ",(0,o.jsx)(n.code,{children:"react-transition-group"})," internally to perform animation effects and manage component states (including mounting and unmounting) over time. You can check out all the transition props at ",(0,o.jsx)(n.a,{href:"https://reactcommunity.org/react-transition-group/transition/#Transition-props",children:"https://reactcommunity.org/react-transition-group/transition/#Transition-props"}),". For more information, visit ",(0,o.jsx)(n.a,{href:"http://reactcommunity.org/react-transition-group/transition",children:"http://reactcommunity.org/react-transition-group/transition"})," for detailed usage."]}),"\n",(0,o.jsxs)(n.h2,{id:"import",children:["Import",(0,o.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#import",children:(0,o.jsx)(n.svg,{children:(0,o.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"import {\n  Zoom,\n} from '@tonic-ui/react';\n"})}),"\n",(0,o.jsxs)(n.h2,{id:"usage",children:["Usage",(0,o.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#usage",children:(0,o.jsx)(n.svg,{children:(0,o.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,o.jsxs)(n.h3,{id:"zoom",children:["Zoom",(0,o.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#zoom",children:(0,o.jsx)(n.svg,{children:(0,o.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"Zoom"})," transition is used to zoom in and out of a component."]}),"\n",(0,o.jsx)(i.Z,{component:h,file:{data:'import {\n  Flex,\n  Space,\n  Switch,\n  Text,\n  TextLabel,\n  Zoom,\n} from \'@tonic-ui/react\';\nimport { useToggle } from \'@tonic-ui/react-hooks\';\nimport React from \'react\';\nimport SkeletonBlock from \'@/components/SkeletonBlock\';\nimport SkeletonContent from \'@/components/SkeletonContent\';\n\nconst App = () => {\n  const [isOpen, onToggle] = useToggle(false);\n\n  return (\n    <Flex direction="column" rowGap="4x">\n      <TextLabel display="inline-flex" alignItems="center">\n        <Switch checked={isOpen} onChange={() => onToggle()} size="md" />\n        <Space width="2x" />\n        <Text>Show</Text>\n      </TextLabel>\n      <Zoom\n        in={isOpen}\n        unmountOnExit={false}\n      >\n        <SkeletonContent>\n          <SkeletonBlock />\n        </SkeletonContent>\n      </Zoom>\n    </Flex>\n  );\n};\n\nexport default App;',path:"pages/components/transitions/zoom/index.page.mdx"},sandbox:{files:{"src/components/SkeletonBlock.js":'import {\n  Flex,\n  Skeleton,\n} from \'@tonic-ui/react\';\nimport React from \'react\';\n\nconst SkeletonBlock = (props) => (\n  <Flex {...props}>\n    <Flex flex="none" mr="4x" alignItems="center">\n      <Skeleton variant="circle" width="10x" height="10x" />\n    </Flex>\n    <Flex flex="auto" flexDirection="column" rowGap="2x">\n      <Skeleton />\n      <Skeleton />\n      <Skeleton />\n    </Flex>\n  </Flex>\n);\n\nexport default SkeletonBlock;',"src/components/SkeletonContent.js":"import {\n  Box,\n  useColorMode,\n  useColorStyle,\n} from '@tonic-ui/react';\nimport React from 'react';\n\nconst SkeletonContent = (props) => {\n  const [colorMode] = useColorMode();\n  const [colorStyle] = useColorStyle({ colorMode });\n  const styleProps = {\n    light: {\n      color: 'black:primary',\n      bg: 'white',\n      borderWidth: 1,\n      borderStyle: 'solid',\n      borderColor: 'gray:20',\n      boxShadow: colorStyle?.shadow?.thick,\n    },\n    dark: {\n      color: 'white:primary',\n      bg: 'gray:90',\n      borderWidth: 1,\n      borderStyle: 'solid',\n      borderColor: 'gray:80',\n      boxShadow: colorStyle?.shadow?.thick,\n    },\n  }[colorMode];\n\n  return (\n    <Box p=\"4x\" {...styleProps} {...props} />\n  );\n};\n\nexport default SkeletonContent;"},raw:'import {\n  Flex,\n  Space,\n  Switch,\n  Text,\n  TextLabel,\n  Zoom,\n} from \'@tonic-ui/react\';\nimport { useToggle } from \'@tonic-ui/react-hooks\';\nimport React from \'react\';\nimport SkeletonBlock from \'@/components/SkeletonBlock\';\nimport SkeletonContent from \'@/components/SkeletonContent\';\n\nconst App = () => {\n  const [isOpen, onToggle] = useToggle(false);\n\n  return (\n    <Flex direction="column" rowGap="4x">\n      <TextLabel display="inline-flex" alignItems="center">\n        <Switch checked={isOpen} onChange={() => onToggle()} size="md" />\n        <Space width="2x" />\n        <Text>Show</Text>\n      </TextLabel>\n      <Zoom\n        in={isOpen}\n        unmountOnExit={false}\n      >\n        <SkeletonContent>\n          <SkeletonBlock />\n        </SkeletonContent>\n      </Zoom>\n    </Flex>\n  );\n};\n\nexport default App;',title:"Tonic UI"}}),"\n",(0,o.jsxs)(n.h2,{id:"props",children:["Props",(0,o.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#props",children:(0,o.jsx)(n.svg,{children:(0,o.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,o.jsxs)(n.h3,{id:"zoom-1",children:["Zoom",(0,o.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#zoom-1",children:(0,o.jsx)(n.svg,{children:(0,o.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{align:"left",children:"Name"}),(0,o.jsx)(n.th,{align:"left",children:"Type"}),(0,o.jsx)(n.th,{align:"left",children:"Default"}),(0,o.jsx)(n.th,{align:"left",children:"Description"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{align:"left",children:"appear"}),(0,o.jsx)(n.td,{align:"left",children:"boolean"}),(0,o.jsx)(n.td,{align:"left",children:"false"}),(0,o.jsxs)(n.td,{align:"left",children:["By default the child component does not perform the enter transition when it first mounts, regardless of the value of ",(0,o.jsx)(n.code,{children:"in"}),". If you want this behavior, set both ",(0,o.jsx)(n.code,{children:"appear"})," and ",(0,o.jsx)(n.code,{children:"in"})," to true."]})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{align:"left",children:"children"}),(0,o.jsxs)(n.td,{align:"left",children:["ReactNode | ",(0,o.jsx)(n.code,{children:"(state, props) => ReactNode"})]}),(0,o.jsx)(n.td,{align:"left"}),(0,o.jsx)(n.td,{align:"left",children:"A function child can be used instead of a React element. This function is called with the current transition state ('entering', 'entered', 'exiting', 'exited'), ref, style, and context specific props for a component."})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{align:"left",children:"easing"}),(0,o.jsxs)(n.td,{align:"left",children:["string | ",(0,o.jsx)(n.code,{children:"{ enter?: string, exit?: string }"})]}),(0,o.jsx)(n.td,{align:"left",children:(0,o.jsx)(n.code,{children:"{ enter: easing.easeInOut, exit: easing.easeInOut }"})}),(0,o.jsx)(n.td,{align:"left",children:"The timing function that describes how intermediate values are calculated during a transition. You may specify a single timing function for all transitions, or individually with an object."})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{align:"left",children:"in"}),(0,o.jsx)(n.td,{align:"left",children:"boolean"}),(0,o.jsx)(n.td,{align:"left"}),(0,o.jsxs)(n.td,{align:"left",children:["If ",(0,o.jsx)(n.code,{children:"true"}),", the component will transition in."]})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{align:"left",children:"mountOnEnter"}),(0,o.jsx)(n.td,{align:"left",children:"boolean"}),(0,o.jsx)(n.td,{align:"left"}),(0,o.jsxs)(n.td,{align:"left",children:["If ",(0,o.jsx)(n.code,{children:"true"}),', it will "lazy mount" the component on the first ',(0,o.jsx)(n.code,{children:"in={true}"}),". After the first enter transition the component will stay mounted, even on the 'exited' state, unless you also specify ",(0,o.jsx)(n.code,{children:"unmountOnExit"}),". By default the child component is mounted immediately along with the parent transition component."]})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{align:"left",children:"timeout"}),(0,o.jsxs)(n.td,{align:"left",children:["number | ",(0,o.jsx)(n.code,{children:"{ appear?: number, enter?: number, exit?: number }"})]}),(0,o.jsx)(n.td,{align:"left",children:(0,o.jsx)(n.code,{children:"{ enter: duration.enterScreen, exit: duration.levingScreen }"})}),(0,o.jsx)(n.td,{align:"left",children:"The duration for the transition, in milliseconds. You may specify a single timeout for all transitions, or individually with an object."})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{align:"left",children:"unmountOnExit"}),(0,o.jsx)(n.td,{align:"left",children:"boolean"}),(0,o.jsx)(n.td,{align:"left"}),(0,o.jsxs)(n.td,{align:"left",children:["If ",(0,o.jsx)(n.code,{children:"true"}),", it will unmount the child component when ",(0,o.jsx)(n.code,{children:"in={false}"})," and the animation has finished. By default the child component stays mounted after it reaches the 'exited' state."]})]})]})]})]})}var f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,r.ah)(),e.components).wrapper;return n?(0,o.jsx)(n,Object.assign({},e,{children:(0,o.jsx)(m,e)})):m(e)}},47133:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/transitions/zoom",function(){return t(89657)}])}},function(e){e.O(0,[9774,2888,179],function(){return e(e.s=47133)}),_N_E=e.O()}]);