(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5388],{57320:function(e,n,s){"use strict";s.r(n);var c=s(52322),l=s(45392);function _createMdxContent(e){var n=Object.assign({div:"div",h1:"h1",p:"p",h2:"h2",a:"a",svg:"svg",use:"use",pre:"pre",code:"code",h3:"h3",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,l.ah)(),e.components);return(0,c.jsxs)(n.div,{className:"main-content",id:"main-content",children:[(0,c.jsx)(n.h1,{id:"useoncewhen",children:"useOnceWhen"}),"\n",(0,c.jsx)(n.p,{children:"A custom Hook that runs a callback at most once when a condition becomes true."}),"\n",(0,c.jsxs)(n.h2,{id:"import",children:["Import",(0,c.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#import",children:(0,c.jsx)(n.svg,{children:(0,c.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-js",children:"import { useOnceWhen } from '@tonic-ui/react-hooks';\n"})}),"\n",(0,c.jsxs)(n.h2,{id:"usage",children:["Usage",(0,c.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#usage",children:(0,c.jsx)(n.svg,{children:(0,c.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-js",children:"useOnceWhen(callback, when);\n"})}),"\n",(0,c.jsxs)(n.h3,{id:"parameters",children:["Parameters",(0,c.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#parameters",children:(0,c.jsx)(n.svg,{children:(0,c.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,c.jsxs)(n.table,{children:[(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.th,{align:"left",children:"Name"}),(0,c.jsx)(n.th,{align:"left",children:"Type"}),(0,c.jsx)(n.th,{align:"left",children:"Default"}),(0,c.jsx)(n.th,{align:"left",children:"Description"})]})}),(0,c.jsxs)(n.tbody,{children:[(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{align:"left",children:"callback"}),(0,c.jsx)(n.td,{align:"left",children:(0,c.jsx)(n.code,{children:"() => void"})}),(0,c.jsx)(n.td,{align:"left"}),(0,c.jsx)(n.td,{align:"left",children:"The callback to run."})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{align:"left",children:"when"}),(0,c.jsx)(n.td,{align:"left",children:"boolean"}),(0,c.jsx)(n.td,{align:"left",children:"false"}),(0,c.jsx)(n.td,{align:"left",children:"The condition to run the callback."})]})]})]}),"\n",(0,c.jsxs)(n.h2,{id:"demos",children:["Demos",(0,c.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#demos",children:(0,c.jsx)(n.svg,{children:(0,c.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-jsx",children:"function Component() {\n  const [value, setValue] = React.useState(0);\n  const ref = React.useRef(0);\n\n  useOnceWhen(() => {\n    console.log('This will run only once when clicked');\n    ref.current++;\n  }, (value > 0));\n\n  return (\n    <>\n      <Box mb=\"4x\">\n        Callback called: {ref.current}\n      </Box>\n      <Button onClick={() => setValue(value => value + 1)}>\n        Click Me\n      </Button>\n    </>\n  );\n}\n"})})]})}n.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,l.ah)(),e.components).wrapper;return n?(0,c.jsx)(n,Object.assign({},e,{children:(0,c.jsx)(_createMdxContent,e)})):_createMdxContent(e)}},45641:function(e,n,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/hooks/useOnceWhen",function(){return s(57320)}])}},function(e){e.O(0,[9774,2888,179],function(){return e(e.s=45641)}),_N_E=e.O()}]);