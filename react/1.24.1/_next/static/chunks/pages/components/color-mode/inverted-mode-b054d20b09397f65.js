(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1085],{34693:function(e,n,r){"use strict";r.r(n);var i=r(52322),d=r(45392);function o(e){var n=Object.assign({div:"div",h1:"h1",p:"p",code:"code",h2:"h2",a:"a",svg:"svg",use:"use",pre:"pre",h3:"h3",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,d.ah)(),e.components);return(0,i.jsxs)(n.div,{className:"main-content",id:"main-content",children:[(0,i.jsx)(n.h1,{id:"invertedmode",children:"InvertedMode"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"InvertedMode"})," component is used to invert the color mode of its children."]}),"\n",(0,i.jsxs)(n.h2,{id:"import",children:["Import",(0,i.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#import",children:(0,i.jsx)(n.svg,{children:(0,i.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"import { InvertedMode } from '@tonic-ui/react';\n"})}),"\n",(0,i.jsxs)(n.h2,{id:"usage",children:["Usage",(0,i.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#usage",children:(0,i.jsx)(n.svg,{children:(0,i.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,i.jsx)(n.pre,{noInline:!0,children:(0,i.jsx)(n.code,{className:"language-jsx",children:'function Example() {\n  const [colorMode] = useColorMode();\n  const [colorStyle] = useColorStyle({ colorMode });\n\n  return (\n    <Box\n      backgroundColor={colorStyle.background.secondary}\n      color={colorStyle.color.primary}\n    >\n      <Text px="4x" py="3x">\n        The current color mode is inverted to {colorMode} mode\n      </Text>\n    </Box>\n  );\n}\n\nrender(\n  <InvertedMode>\n    <Example />\n  </InvetedMode>\n);\n'})}),"\n",(0,i.jsxs)(n.h3,{id:"rendering-tooltip-label",children:["Rendering tooltip label",(0,i.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#rendering-tooltip-label",children:(0,i.jsx)(n.svg,{children:(0,i.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"InvertedMode"})," component is useful when you want to render a tooltip label in inverted mode."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",children:'<Tooltip\n  label={(\n    <InvertedMode width={80} py="1x">\n      <Text>Title</Text>\n      <Divider my="2x" />\n      <Text>Content</Text>\n    </InvertedMode>\n  )}\n>\n  <Text display="inline-block">Hover Me</Text>\n</Tooltip>\n'})}),"\n",(0,i.jsxs)(n.h2,{id:"props",children:["Props",(0,i.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#props",children:(0,i.jsx)(n.svg,{children:(0,i.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,i.jsxs)(n.h3,{id:"invertedmode-1",children:["InvertedMode",(0,i.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#invertedmode-1",children:(0,i.jsx)(n.svg,{children:(0,i.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{align:"left",children:"Name"}),(0,i.jsx)(n.th,{align:"left",children:"Type"}),(0,i.jsx)(n.th,{align:"left",children:"Default"}),(0,i.jsx)(n.th,{align:"left",children:"Description"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{align:"left",children:"children"}),(0,i.jsx)(n.td,{align:"left",children:"ReactNode"}),(0,i.jsx)(n.td,{align:"left"}),(0,i.jsx)(n.td,{align:"left"})]})})]})]})}n.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,d.ah)(),e.components).wrapper;return n?(0,i.jsx)(n,Object.assign({},e,{children:(0,i.jsx)(o,e)})):o(e)}},33870:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/color-mode/inverted-mode",function(){return r(34693)}])}},function(e){e.O(0,[9774,2888,179],function(){return e(e.s=33870)}),_N_E=e.O()}]);