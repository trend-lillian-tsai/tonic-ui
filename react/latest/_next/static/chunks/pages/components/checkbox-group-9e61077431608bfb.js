(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3821],{86832:function(e,n,a){"use strict";a.r(n),a.d(n,{default:function(){return index_page}});var t=a(52322),o=a(45392),r=a(83449),c=a(67569),l=a(2784);function ownKeys(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),a.push.apply(a,t)}return a}function _objectSpread(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?ownKeys(Object(a),!0).forEach(function(n){var t;t=a[n],n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ownKeys(Object(a)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))})}return e}function _arrayLikeToArray(e,n){(null==n||n>e.length)&&(n=e.length);for(var a=0,t=Array(n);a<n;a++)t[a]=e[a];return t}var asynchronous_data_loading=function(){var e,n=function(e){if(Array.isArray(e))return e}(e=(0,l.useState)({state:"idle",fruits:[]}))||function(e,n){var a,t,o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var r=[],c=!0,l=!1;try{for(o=o.call(e);!(c=(a=o.next()).done)&&(r.push(a.value),!n||r.length!==n);c=!0);}catch(e){l=!0,t=e}finally{try{c||null==o.return||o.return()}finally{if(l)throw t}}return r}}(e,2)||function(e,n){if(e){if("string"==typeof e)return _arrayLikeToArray(e,n);var a=Object.prototype.toString.call(e).slice(8,-1);if("Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return _arrayLikeToArray(e,n)}}(e,2)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),a=n[0],t=n[1],o=(0,l.useRef)(null),r=(0,l.useCallback)(function(){t(function(e){return _objectSpread(_objectSpread({},e),{},{state:"loading"})}),o.current&&(clearTimeout(o.current),o.current=null),o.current=setTimeout(function(){t({state:"success",fruits:["apple"]}),o.current=null},2e3)},[]);return(0,l.useEffect)(function(){r()},[r]),l.createElement(l.Fragment,null,l.createElement(c.Box,{mb:"4x"},l.createElement(c.LinkButton,{onClick:function(){return r()}},l.createElement(c.Flex,{alignItems:"center"},l.createElement(c.Icon,{icon:"redo",spin:!0,animationPlayState:"loading"===a.state?"running":"paused"}),l.createElement(c.Space,{width:"2x"}),"Reload"))),l.createElement(c.CheckboxGroup,{value:a.fruits,disabled:"loading"===a.state,onChange:function(e){t(function(n){return _objectSpread(_objectSpread({},n),{},{fruits:e})})}},l.createElement(c.Stack,{direction:"row",spacing:"3x"},l.createElement(c.Checkbox,{value:"apple"},"Apple"),l.createElement(c.Checkbox,{value:"orange"},"Orange"),l.createElement(c.Checkbox,{value:"papaya"},"Papaya"))))},states=function(){return l.createElement(c.Stack,{direction:"column",spacing:"2x",shouldWrapChildren:!0},l.createElement(c.CheckboxGroup,{defaultValue:["apple"]},l.createElement(c.Stack,{direction:"row",spacing:"3x"},l.createElement(c.Checkbox,{value:"apple"},"Apple"),l.createElement(c.Checkbox,{value:"orange"},"Orange"),l.createElement(c.Checkbox,{value:"papaya"},"Papaya"))),l.createElement(c.CheckboxGroup,{disabled:!0,defaultValue:["apple"]},l.createElement(c.Stack,{direction:"row",spacing:"3x"},l.createElement(c.Checkbox,{value:"apple"},"Apple"),l.createElement(c.Checkbox,{value:"orange"},"Orange"),l.createElement(c.Checkbox,{value:"papaya"},"Papaya"))))},sizes=function(){return l.createElement(c.Stack,{direction:"column",spacing:"1x",shouldWrapChildren:!0},l.createElement(c.CheckboxGroup,{size:"sm",defaultValue:["apple"]},l.createElement(c.Stack,{direction:"row",spacing:"3x"},l.createElement(c.Checkbox,{value:"apple"},"Apple"),l.createElement(c.Checkbox,{value:"orange"},"Orange"),l.createElement(c.Checkbox,{value:"papaya"},"Papaya"))),l.createElement(c.CheckboxGroup,{size:"md",defaultValue:["apple"]},l.createElement(c.Stack,{direction:"row",spacing:"3x"},l.createElement(c.Checkbox,{value:"apple"},"Apple"),l.createElement(c.Checkbox,{value:"orange"},"Orange"),l.createElement(c.Checkbox,{value:"papaya"},"Papaya"))),l.createElement(c.CheckboxGroup,{size:"lg",defaultValue:["apple"]},l.createElement(c.Stack,{direction:"row",spacing:"3x"},l.createElement(c.Checkbox,{value:"apple"},"Apple"),l.createElement(c.Checkbox,{value:"orange"},"Orange"),l.createElement(c.Checkbox,{value:"papaya"},"Papaya"))))},colors=function(){return l.createElement(c.CheckboxGroup,{variantColor:"green",defaultValue:["apple"]},l.createElement(c.Stack,{direction:"row",spacing:"3x"},l.createElement(c.Checkbox,{value:"apple"},"Apple"),l.createElement(c.Checkbox,{value:"orange"},"Orange"),l.createElement(c.Checkbox,{value:"papaya"},"Papaya")))},group_orientation=function(){return l.createElement(c.CheckboxGroup,{defaultValue:["apple"]},l.createElement(c.Stack,{direction:"row",spacing:"3x"},l.createElement(c.Checkbox,{value:"apple"},"Apple"),l.createElement(c.Checkbox,{value:"orange"},"Orange"),l.createElement(c.Checkbox,{value:"papaya"},"Papaya")))};function controlled_checkbox_group_arrayLikeToArray(e,n){(null==n||n>e.length)&&(n=e.length);for(var a=0,t=Array(n);a<n;a++)t[a]=e[a];return t}var controlled_checkbox_group=function(){var e,n=function(e){if(Array.isArray(e))return e}(e=(0,l.useState)(["apple"]))||function(e,n){var a,t,o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var r=[],c=!0,l=!1;try{for(o=o.call(e);!(c=(a=o.next()).done)&&(r.push(a.value),!n||r.length!==n);c=!0);}catch(e){l=!0,t=e}finally{try{c||null==o.return||o.return()}finally{if(l)throw t}}return r}}(e,2)||function(e,n){if(e){if("string"==typeof e)return controlled_checkbox_group_arrayLikeToArray(e,n);var a=Object.prototype.toString.call(e).slice(8,-1);if("Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return controlled_checkbox_group_arrayLikeToArray(e,n)}}(e,2)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),a=n[0],t=n[1];return l.createElement(c.CheckboxGroup,{value:a,onChange:function(e){return t(e)}},l.createElement(c.Stack,{direction:"column",spacing:"1x",shouldWrapChildren:!0},l.createElement(c.Checkbox,{value:"apple"},"Apple"),l.createElement(c.Checkbox,{value:"orange"},"Orange"),l.createElement(c.Checkbox,{value:"papaya"},"Papaya")))},uncontrolled_checkbox_group=function(){return l.createElement(c.CheckboxGroup,{defaultValue:["apple"]},l.createElement(c.Stack,{direction:"column",spacing:"1x",shouldWrapChildren:!0},l.createElement(c.Checkbox,{value:"apple"},"Apple"),l.createElement(c.Checkbox,{value:"orange"},"Orange"),l.createElement(c.Checkbox,{value:"papaya"},"Papaya")))};function _createMdxContent(e){var n=Object.assign({div:"div",h1:"h1",p:"p",code:"code",h2:"h2",a:"a",svg:"svg",use:"use",pre:"pre",h3:"h3",h4:"h4",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,o.ah)(),e.components);return(0,t.jsxs)(n.div,{className:"main-content",id:"main-content",children:["\n","\n","\n","\n","\n","\n","\n","\n",(0,t.jsx)(n.h1,{id:"checkboxgroup",children:"CheckboxGroup"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"CheckboxGroup"})," is used to group related checkboxes."]}),"\n",(0,t.jsxs)(n.h2,{id:"import",children:["Import",(0,t.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#import",children:(0,t.jsx)(n.svg,{children:(0,t.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"import { CheckboxGroup } from '@tonic-ui/react';\n"})}),"\n",(0,t.jsxs)(n.h3,{id:"usage",children:["Usage",(0,t.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#usage",children:(0,t.jsx)(n.svg,{children:(0,t.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,t.jsxs)(n.h4,{id:"uncontrolled-checkbox-group",children:["Uncontrolled checkbox group",(0,t.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#uncontrolled-checkbox-group",children:(0,t.jsx)(n.svg,{children:(0,t.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,t.jsx)(r.Z,{component:uncontrolled_checkbox_group,file:{data:'import { Checkbox, CheckboxGroup, Stack } from \'@tonic-ui/react\';\nimport React from \'react\';\n\nconst App = () => (\n  <CheckboxGroup defaultValue={["apple"]}>\n    <Stack direction="column" spacing="1x" shouldWrapChildren>\n      <Checkbox value="apple">Apple</Checkbox>\n      <Checkbox value="orange">Orange</Checkbox>\n      <Checkbox value="papaya">Papaya</Checkbox>\n    </Stack>\n  </CheckboxGroup>\n);\n\nexport default App;',path:"pages/components/checkbox-group/index.page.mdx"},sandbox:{files:{},raw:'import { Checkbox, CheckboxGroup, Stack } from \'@tonic-ui/react\';\nimport React from \'react\';\n\nconst App = () => (\n  <CheckboxGroup defaultValue={["apple"]}>\n    <Stack direction="column" spacing="1x" shouldWrapChildren>\n      <Checkbox value="apple">Apple</Checkbox>\n      <Checkbox value="orange">Orange</Checkbox>\n      <Checkbox value="papaya">Papaya</Checkbox>\n    </Stack>\n  </CheckboxGroup>\n);\n\nexport default App;',title:"Tonic UI"}}),"\n",(0,t.jsxs)(n.h4,{id:"controlled-checkbox-group",children:["Controlled checkbox group",(0,t.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#controlled-checkbox-group",children:(0,t.jsx)(n.svg,{children:(0,t.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,t.jsx)(r.Z,{component:controlled_checkbox_group,file:{data:'import { Checkbox, CheckboxGroup, Stack } from \'@tonic-ui/react\';\nimport React, { useState } from \'react\';\n\nconst App = () => {\n  const [value, setValue] = useState([\'apple\']);\n\n  return (\n    <CheckboxGroup value={value} onChange={value => setValue(value)}>\n      <Stack direction="column" spacing="1x" shouldWrapChildren>\n        <Checkbox value="apple">Apple</Checkbox>\n        <Checkbox value="orange">Orange</Checkbox>\n        <Checkbox value="papaya">Papaya</Checkbox>\n      </Stack>\n    </CheckboxGroup>\n  );\n};\n\nexport default App;',path:"pages/components/checkbox-group/index.page.mdx"},sandbox:{files:{},raw:'import { Checkbox, CheckboxGroup, Stack } from \'@tonic-ui/react\';\nimport React, { useState } from \'react\';\n\nconst App = () => {\n  const [value, setValue] = useState([\'apple\']);\n\n  return (\n    <CheckboxGroup value={value} onChange={value => setValue(value)}>\n      <Stack direction="column" spacing="1x" shouldWrapChildren>\n        <Checkbox value="apple">Apple</Checkbox>\n        <Checkbox value="orange">Orange</Checkbox>\n        <Checkbox value="papaya">Papaya</Checkbox>\n      </Stack>\n    </CheckboxGroup>\n  );\n};\n\nexport default App;',title:"Tonic UI"}}),"\n",(0,t.jsxs)(n.h3,{id:"group-orientation",children:["Group orientation",(0,t.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#group-orientation",children:(0,t.jsx)(n.svg,{children:(0,t.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,t.jsxs)(n.p,{children:["Make a set of checkboxes appear horizontal stacked rather than vertically, by adding ",(0,t.jsx)(n.code,{children:'flexDirection="row"'})," to the ",(0,t.jsx)(n.code,{children:"Stack"})," component."]}),"\n",(0,t.jsx)(r.Z,{component:group_orientation,file:{data:'import { Checkbox, CheckboxGroup, Stack } from \'@tonic-ui/react\';\nimport React from \'react\';\n\nconst App = () => (\n  <CheckboxGroup defaultValue={[\'apple\']}>\n    <Stack direction="row" spacing="3x">\n      <Checkbox value="apple">Apple</Checkbox>\n      <Checkbox value="orange">Orange</Checkbox>\n      <Checkbox value="papaya">Papaya</Checkbox>\n    </Stack>\n  </CheckboxGroup>\n);\n\nexport default App;',path:"pages/components/checkbox-group/index.page.mdx"},sandbox:{files:{},raw:'import { Checkbox, CheckboxGroup, Stack } from \'@tonic-ui/react\';\nimport React from \'react\';\n\nconst App = () => (\n  <CheckboxGroup defaultValue={[\'apple\']}>\n    <Stack direction="row" spacing="3x">\n      <Checkbox value="apple">Apple</Checkbox>\n      <Checkbox value="orange">Orange</Checkbox>\n      <Checkbox value="papaya">Papaya</Checkbox>\n    </Stack>\n  </CheckboxGroup>\n);\n\nexport default App;',title:"Tonic UI"}}),"\n",(0,t.jsxs)(n.h3,{id:"colors",children:["Colors",(0,t.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#colors",children:(0,t.jsx)(n.svg,{children:(0,t.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,t.jsxs)(n.p,{children:["Use the ",(0,t.jsx)(n.code,{children:"variantColor"})," prop to change the color scheme of the Radio. ",(0,t.jsx)(n.code,{children:"variantColor"})," can be any color key with key ",(0,t.jsx)(n.code,{children:"50"}),"(hover), ",(0,t.jsx)(n.code,{children:"60"}),"(checked) that exist in the ",(0,t.jsx)(n.code,{children:"theme.colors"}),"."]}),"\n",(0,t.jsx)(r.Z,{component:colors,file:{data:'import { Checkbox, CheckboxGroup, Stack } from \'@tonic-ui/react\';\nimport React from \'react\';\n\nconst App = () => (\n  <CheckboxGroup variantColor="green" defaultValue={[\'apple\']}>\n    <Stack direction="row" spacing="3x">\n      <Checkbox value="apple">Apple</Checkbox>\n      <Checkbox value="orange">Orange</Checkbox>\n      <Checkbox value="papaya">Papaya</Checkbox>\n    </Stack>\n  </CheckboxGroup>\n);\n\nexport default App;',path:"pages/components/checkbox-group/index.page.mdx"},sandbox:{files:{},raw:'import { Checkbox, CheckboxGroup, Stack } from \'@tonic-ui/react\';\nimport React from \'react\';\n\nconst App = () => (\n  <CheckboxGroup variantColor="green" defaultValue={[\'apple\']}>\n    <Stack direction="row" spacing="3x">\n      <Checkbox value="apple">Apple</Checkbox>\n      <Checkbox value="orange">Orange</Checkbox>\n      <Checkbox value="papaya">Papaya</Checkbox>\n    </Stack>\n  </CheckboxGroup>\n);\n\nexport default App;',title:"Tonic UI"}}),"\n",(0,t.jsxs)(n.h3,{id:"sizes",children:["Sizes",(0,t.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#sizes",children:(0,t.jsx)(n.svg,{children:(0,t.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,t.jsxs)(n.p,{children:["Use the ",(0,t.jsx)(n.code,{children:"size"})," prop to change the size of the ",(0,t.jsx)(n.code,{children:"CheckboxGroup"}),". You can set the value to ",(0,t.jsx)(n.code,{children:"sm"}),", ",(0,t.jsx)(n.code,{children:"md"}),", or ",(0,t.jsx)(n.code,{children:"lg"}),"."]}),"\n",(0,t.jsx)(r.Z,{component:sizes,file:{data:'import { Checkbox, CheckboxGroup, Stack } from \'@tonic-ui/react\';\nimport React from \'react\';\n\nconst App = () => (\n  <Stack direction="column" spacing="1x" shouldWrapChildren>\n    <CheckboxGroup size="sm" defaultValue={[\'apple\']}>\n      <Stack direction="row" spacing="3x">\n        <Checkbox value="apple">Apple</Checkbox>\n        <Checkbox value="orange">Orange</Checkbox>\n        <Checkbox value="papaya">Papaya</Checkbox>\n      </Stack>\n    </CheckboxGroup>\n    <CheckboxGroup size="md" defaultValue={[\'apple\']}>\n      <Stack direction="row" spacing="3x">\n        <Checkbox value="apple">Apple</Checkbox>\n        <Checkbox value="orange">Orange</Checkbox>\n        <Checkbox value="papaya">Papaya</Checkbox>\n      </Stack>\n    </CheckboxGroup>\n    <CheckboxGroup size="lg" defaultValue={[\'apple\']}>\n      <Stack direction="row" spacing="3x">\n        <Checkbox value="apple">Apple</Checkbox>\n        <Checkbox value="orange">Orange</Checkbox>\n        <Checkbox value="papaya">Papaya</Checkbox>\n      </Stack>\n    </CheckboxGroup>\n  </Stack>\n);\n\nexport default App;',path:"pages/components/checkbox-group/index.page.mdx"},sandbox:{files:{},raw:'import { Checkbox, CheckboxGroup, Stack } from \'@tonic-ui/react\';\nimport React from \'react\';\n\nconst App = () => (\n  <Stack direction="column" spacing="1x" shouldWrapChildren>\n    <CheckboxGroup size="sm" defaultValue={[\'apple\']}>\n      <Stack direction="row" spacing="3x">\n        <Checkbox value="apple">Apple</Checkbox>\n        <Checkbox value="orange">Orange</Checkbox>\n        <Checkbox value="papaya">Papaya</Checkbox>\n      </Stack>\n    </CheckboxGroup>\n    <CheckboxGroup size="md" defaultValue={[\'apple\']}>\n      <Stack direction="row" spacing="3x">\n        <Checkbox value="apple">Apple</Checkbox>\n        <Checkbox value="orange">Orange</Checkbox>\n        <Checkbox value="papaya">Papaya</Checkbox>\n      </Stack>\n    </CheckboxGroup>\n    <CheckboxGroup size="lg" defaultValue={[\'apple\']}>\n      <Stack direction="row" spacing="3x">\n        <Checkbox value="apple">Apple</Checkbox>\n        <Checkbox value="orange">Orange</Checkbox>\n        <Checkbox value="papaya">Papaya</Checkbox>\n      </Stack>\n    </CheckboxGroup>\n  </Stack>\n);\n\nexport default App;',title:"Tonic UI"}}),"\n",(0,t.jsxs)(n.h3,{id:"states",children:["States",(0,t.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#states",children:(0,t.jsx)(n.svg,{children:(0,t.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,t.jsx)(r.Z,{component:states,file:{data:'import { Checkbox, CheckboxGroup, Stack } from \'@tonic-ui/react\';\nimport React from \'react\';\n\nconst App = () => (\n  <Stack direction="column" spacing="2x" shouldWrapChildren>\n    <CheckboxGroup defaultValue={[\'apple\']}>\n      <Stack direction="row" spacing="3x">\n        <Checkbox value="apple">Apple</Checkbox>\n        <Checkbox value="orange">Orange</Checkbox>\n        <Checkbox value="papaya">Papaya</Checkbox>\n      </Stack>\n    </CheckboxGroup>\n    <CheckboxGroup disabled defaultValue={[\'apple\']}>\n      <Stack direction="row" spacing="3x">\n        <Checkbox value="apple">Apple</Checkbox>\n        <Checkbox value="orange">Orange</Checkbox>\n        <Checkbox value="papaya">Papaya</Checkbox>\n      </Stack>\n    </CheckboxGroup>\n  </Stack>\n);\n\nexport default App;',path:"pages/components/checkbox-group/index.page.mdx"},sandbox:{files:{},raw:'import { Checkbox, CheckboxGroup, Stack } from \'@tonic-ui/react\';\nimport React from \'react\';\n\nconst App = () => (\n  <Stack direction="column" spacing="2x" shouldWrapChildren>\n    <CheckboxGroup defaultValue={[\'apple\']}>\n      <Stack direction="row" spacing="3x">\n        <Checkbox value="apple">Apple</Checkbox>\n        <Checkbox value="orange">Orange</Checkbox>\n        <Checkbox value="papaya">Papaya</Checkbox>\n      </Stack>\n    </CheckboxGroup>\n    <CheckboxGroup disabled defaultValue={[\'apple\']}>\n      <Stack direction="row" spacing="3x">\n        <Checkbox value="apple">Apple</Checkbox>\n        <Checkbox value="orange">Orange</Checkbox>\n        <Checkbox value="papaya">Papaya</Checkbox>\n      </Stack>\n    </CheckboxGroup>\n  </Stack>\n);\n\nexport default App;',title:"Tonic UI"}}),"\n",(0,t.jsxs)(n.h3,{id:"asynchronous-data-loading",children:["Asynchronous data loading",(0,t.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#asynchronous-data-loading",children:(0,t.jsx)(n.svg,{children:(0,t.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,t.jsx)(r.Z,{component:asynchronous_data_loading,file:{data:"import { Box, Checkbox, CheckboxGroup, Flex, Icon, LinkButton, Space, Stack } from '@tonic-ui/react';\nimport React, { useCallback, useEffect, useRef, useState } from 'react';\n\nconst App = () => {\n  const [state, setState] = useState({\n    state: 'idle',\n    fruits: [],\n  });\n  const timerRef = useRef(null);\n  const fetchData = useCallback(() => {\n    setState(prevState => ({ ...prevState, state: 'loading' }));\n\n    if (timerRef.current) {\n      clearTimeout(timerRef.current);\n      timerRef.current = null;\n    }\n    timerRef.current = setTimeout(() => {\n      setState({\n        state: 'success',\n        fruits: ['apple'],\n      });\n\n      timerRef.current = null;\n    }, 2000);\n  }, []);\n\n  useEffect(() => {\n    fetchData();\n  }, [fetchData]);\n\n  return (\n    <>\n      <Box mb=\"4x\">\n        <LinkButton onClick={() => fetchData()}>\n          <Flex alignItems=\"center\">\n            <Icon icon=\"redo\" spin={true} animationPlayState={state.state === 'loading' ? 'running' : 'paused'} />\n            <Space width=\"2x\" />\n            Reload\n          </Flex>\n        </LinkButton>\n      </Box>\n      <CheckboxGroup\n        value={state.fruits}\n        disabled={state.state === 'loading'}\n        onChange={value => {\n          setState(prevState => ({ ...prevState, fruits: value }));\n        }}\n      >\n        <Stack direction=\"row\" spacing=\"3x\">\n          <Checkbox value=\"apple\">Apple</Checkbox>\n          <Checkbox value=\"orange\">Orange</Checkbox>\n          <Checkbox value=\"papaya\">Papaya</Checkbox>\n        </Stack>\n      </CheckboxGroup>\n    </>\n  );\n};\n\nexport default App;",path:"pages/components/checkbox-group/index.page.mdx"},sandbox:{files:{},raw:"import { Box, Checkbox, CheckboxGroup, Flex, Icon, LinkButton, Space, Stack } from '@tonic-ui/react';\nimport React, { useCallback, useEffect, useRef, useState } from 'react';\n\nconst App = () => {\n  const [state, setState] = useState({\n    state: 'idle',\n    fruits: [],\n  });\n  const timerRef = useRef(null);\n  const fetchData = useCallback(() => {\n    setState(prevState => ({ ...prevState, state: 'loading' }));\n\n    if (timerRef.current) {\n      clearTimeout(timerRef.current);\n      timerRef.current = null;\n    }\n    timerRef.current = setTimeout(() => {\n      setState({\n        state: 'success',\n        fruits: ['apple'],\n      });\n\n      timerRef.current = null;\n    }, 2000);\n  }, []);\n\n  useEffect(() => {\n    fetchData();\n  }, [fetchData]);\n\n  return (\n    <>\n      <Box mb=\"4x\">\n        <LinkButton onClick={() => fetchData()}>\n          <Flex alignItems=\"center\">\n            <Icon icon=\"redo\" spin={true} animationPlayState={state.state === 'loading' ? 'running' : 'paused'} />\n            <Space width=\"2x\" />\n            Reload\n          </Flex>\n        </LinkButton>\n      </Box>\n      <CheckboxGroup\n        value={state.fruits}\n        disabled={state.state === 'loading'}\n        onChange={value => {\n          setState(prevState => ({ ...prevState, fruits: value }));\n        }}\n      >\n        <Stack direction=\"row\" spacing=\"3x\">\n          <Checkbox value=\"apple\">Apple</Checkbox>\n          <Checkbox value=\"orange\">Orange</Checkbox>\n          <Checkbox value=\"papaya\">Papaya</Checkbox>\n        </Stack>\n      </CheckboxGroup>\n    </>\n  );\n};\n\nexport default App;",title:"Tonic UI"}}),"\n",(0,t.jsxs)(n.h2,{id:"props",children:["Props",(0,t.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#props",children:(0,t.jsx)(n.svg,{children:(0,t.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,t.jsxs)(n.h3,{id:"checkboxgroup-1",children:["CheckboxGroup",(0,t.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#checkboxgroup-1",children:(0,t.jsx)(n.svg,{children:(0,t.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{align:"left",children:"Name"}),(0,t.jsx)(n.th,{align:"left",children:"Type"}),(0,t.jsx)(n.th,{align:"left",children:"Default"}),(0,t.jsx)(n.th,{align:"left",children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{align:"left",children:"children"}),(0,t.jsxs)(n.td,{align:"left",children:["ReactNode | ",(0,t.jsx)(n.code,{children:"(context) => ReactNode"})]}),(0,t.jsx)(n.td,{align:"left"}),(0,t.jsx)(n.td,{align:"left",children:"A function child can be used intead of a React element. This function is called with the context object."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{align:"left",children:"defaultValue"}),(0,t.jsx)(n.td,{align:"left",children:"(string|number)[]"}),(0,t.jsx)(n.td,{align:"left"}),(0,t.jsx)(n.td,{align:"left",children:"The initial value of the checkbox group."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{align:"left",children:"disabled"}),(0,t.jsx)(n.td,{align:"left",children:"boolean"}),(0,t.jsx)(n.td,{align:"left",children:"false"}),(0,t.jsxs)(n.td,{align:"left",children:["If ",(0,t.jsx)(n.code,{children:"true"}),", all checkboxes will be disabled."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{align:"left",children:"name"}),(0,t.jsx)(n.td,{align:"left",children:"string"}),(0,t.jsx)(n.td,{align:"left"}),(0,t.jsx)(n.td,{align:"left",children:"The name used to reference the value of the control. If you don't provide this prop, it falls back to a randomly generated name."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{align:"left",children:"onChange"}),(0,t.jsx)(n.td,{align:"left",children:"(event) => void"}),(0,t.jsx)(n.td,{align:"left"}),(0,t.jsxs)(n.td,{align:"left",children:["A callback fired when any descendant ",(0,t.jsx)(n.code,{children:"Checkbox"})," is checked or unchecked."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{align:"left",children:"size"}),(0,t.jsx)(n.td,{align:"left",children:"string"}),(0,t.jsx)(n.td,{align:"left",children:"'md'"}),(0,t.jsx)(n.td,{align:"left",children:"The size (width and height) of the checkbox. One of: 'sm', 'md', 'lg'"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{align:"left",children:"value"}),(0,t.jsx)(n.td,{align:"left",children:"(string|number)[]"}),(0,t.jsx)(n.td,{align:"left"}),(0,t.jsx)(n.td,{align:"left",children:"The value of the checkbox group."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{align:"left",children:"variantColor"}),(0,t.jsx)(n.td,{align:"left",children:"string"}),(0,t.jsx)(n.td,{align:"left"}),(0,t.jsx)(n.td,{align:"left",children:"The color of the checkbox when it's checked. This should be one of the color keys in the theme (e.g. 'green', 'red')"})]})]})]})]})}var index_page=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,o.ah)(),e.components).wrapper;return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(_createMdxContent,e)})):_createMdxContent(e)}},83449:function(e,n,a){"use strict";a.d(n,{Z:function(){return b}});var t=a(67569),o=a(49427),r=a(5632),c=a(2784),l=a(85175),i=a(82821),p=a(90622),u=a(52057),s=a(63651),h=["size"];function _extends(){return(_extends=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var a=arguments[n];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e}).apply(this,arguments)}var x=(0,c.forwardRef)(function(e,n){var a=e.size,o=function(e,n){if(null==e)return{};var a,t,o=function(e,n){if(null==e)return{};var a,t,o={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(o[a]=e[a]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],!(n.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}(e,h);return c.createElement(t.SVGIcon,_extends({size:a,viewBox:"0 0 1024 1024"},o),c.createElement("path",{d:"M755 140.3l0.5-0.3h0.3L512 0 268.3 140h-0.3l0.8 0.4L68.6 256v512L512 1024l443.4-256V256L755 140.3z m-30 506.4v171.2L548 920.1V534.7L883.4 341v215.7l-158.4 90z m-584.4-90.6V340.8L476 534.4v385.7L300 818.5V646.7l-159.4-90.6zM511.7 280l171.1-98.3 166.3 96-336.9 194.5-337-194.6 165.7-95.7L511.7 280z"}))});x.displayName="CodeSandboxIcon";var d=a(94981);function _slicedToArray(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var a,t,o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var r=[],c=!0,l=!1;try{for(o=o.call(e);!(c=(a=o.next()).done)&&(r.push(a.value),!n||r.length!==n);c=!0);}catch(e){l=!0,t=e}finally{try{c||null==o.return||o.return()}finally{if(l)throw t}}return r}}(e,n)||function(e,n){if(e){if("string"==typeof e)return _arrayLikeToArray(e,n);var a=Object.prototype.toString.call(e).slice(8,-1);if("Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return _arrayLikeToArray(e,n)}}(e,n)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(e,n){(null==n||n>e.length)&&(n=e.length);for(var a=0,t=Array(n);a<n;a++)t[a]=e[a];return t}var k={fontFamily:'"SFMono-Medium", "SF Mono", "Segoe UI Mono", Menlo, Consolas, Courier, monospace',fontSize:14,overflowX:"auto"},Demo=function(e){var n=e.component,a=e.file,h=e.sandbox,b=(0,r.useRouter)(),f=_slicedToArray((0,c.useReducer)(function(e){return!e},!1),2),m=f[0],C=f[1],g=_slicedToArray((0,t.useColorMode)(),1)[0],v={dark:p.y,light:p.q}[g],y=_slicedToArray((0,o.useToggle)(!1),2),j=y[0],S=y[1],E=(0,i.Z)(null==a?void 0:a.data),A=E.onCopy,O=E.hasCopied,w=(0,c.useCallback)(function(){A()},[A]),G=(0,c.useCallback)(function(){(0,u.b)(h)},[h]),_=(0,c.useCallback)(function(){C(),S(!1)},[C,S]);return c.createElement(l.nu,{code:null==a?void 0:a.data,disabled:!0,language:"jsx",theme:v},c.createElement(t.Box,{border:1,borderColor:{dark:"gray:70",light:"gray:30"}[g],p:"4x"},c.createElement(t.Box,{fontSize:"sm",lineHeight:"sm"},c.createElement(c.Fragment,{key:m},c.createElement(n,null)))),c.createElement(t.Flex,{columnGap:"2x",justifyContent:"flex-end",mb:"4x"},c.createElement(d.Z,{"data-track":j?"CodeBlock|hide_source|".concat((0,s.Z)({path:b.pathname})):"CodeBlock|show_source|".concat((0,s.Z)({path:b.pathname})),onClick:S},c.createElement(t.Tooltip,{label:j?"Hide the source":"Show the source"},c.createElement(t.Icon,{icon:"code",size:{sm:"5x",md:"4x"}}))),c.createElement(d.Z,{"data-track":"CodeBlock|copy_source|".concat((0,s.Z)({path:b.pathname})),onClick:w},c.createElement(t.Tooltip,{label:O?"Copied":"Copy the source"},c.createElement(t.Icon,{icon:"file-copy-o",size:{sm:"5x",md:"4x"}}))),c.createElement(d.Z,{"data-track":"CodeBlock|edit_in_codesandbox|".concat(b.pathname),onClick:G},c.createElement(t.Tooltip,{label:"Edit in CodeSandbox"},c.createElement(x,{size:{sm:"5x",md:"4x"}}))),c.createElement(d.Z,{"data-track":"CodeBlock|reset|".concat(b.pathname),onClick:_},c.createElement(t.Tooltip,{label:"Reset the demo"},c.createElement(t.Icon,{icon:"redo",size:{sm:"5x",md:"4x"}})))),c.createElement(t.Fade,{in:j},c.createElement(t.Collapse,{in:j,unmountOnExit:!0},c.createElement(l.uz,{style:k}))))};Demo.displayName="Demo";var b=Demo},43599:function(e,n,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/checkbox-group",function(){return a(86832)}])}},function(e){e.O(0,[9774,2888,179],function(){return e(e.s=43599)}),_N_E=e.O()}]);