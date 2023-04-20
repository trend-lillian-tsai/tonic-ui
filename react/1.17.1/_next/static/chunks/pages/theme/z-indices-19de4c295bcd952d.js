(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7634],{75073:function(n,e,r){"use strict";var t=r(98922),o=r(2784),i=r(99566),a=r(82650);function c(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var r,t,o=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=o){var i=[],a=!0,c=!1;try{for(o=o.call(n);!(a=(r=o.next()).done)&&(i.push(r.value),!e||i.length!==e);a=!0);}catch(n){c=!0,t=n}finally{try{a||null==o.return||o.return()}finally{if(c)throw t}}return i}}(n,e)||function(n,e){if(n){if("string"==typeof n)return s(n,e);var r=Object.prototype.toString.call(n).slice(8,-1);if("Object"===r&&n.constructor&&(r=n.constructor.name),"Map"===r||"Set"===r)return Array.from(n);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return s(n,e)}}(n,e)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(n,e){(null==e||e>n.length)&&(e=n.length);for(var r=0,t=Array(e);r<e;r++)t[r]=n[r];return t}e.Z=function(n){var e,r=n.theme,s=(0,t.useTheme)(),l=c((0,t.useColorMode)(),1)[0],u=null!==(e=c((0,t.useColorStyle)({colorMode:l}),1)[0][r])&&void 0!==e?e:s[r];return u?(("space"===r||"sizes"===r)&&(u=Object.keys(u).filter(function(n){return!n.toString().match(/[qh]$/)}).reduce(function(n,e){return n[e]=u[e],n},{})),o.createElement(t.Box,{mb:"6x"},o.createElement(i.Z,null,o.createElement("div",{className:"js"},"const ".concat(r," = ").concat((0,a.Z)(u,!1)))))):"Theme field not found"}},82650:function(n,e){"use strict";e.Z=function(n){return JSON.stringify(n,null,2).replace(/"/g,"'").replace(/'(\d+|[a-z]+)':/g,"$1:")}},72683:function(n,e,r){"use strict";r.r(e);var t=r(52322),o=r(45392);r(98922);var i=r(75073);function a(n){var e=Object.assign({div:"div",h1:"h1",h2:"h2",a:"a",svg:"svg",use:"use",pre:"pre",code:"code"},(0,o.ah)(),n.components);return(0,t.jsxs)(e.div,{className:"main-content",id:"main-content",children:["\n",(0,t.jsx)(e.h1,{id:"zindices",children:"zIndices"}),"\n",(0,t.jsxs)(e.h2,{id:"design-tokens",children:["Design Tokens",(0,t.jsx)(e.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#design-tokens",children:(0,t.jsx)(e.svg,{children:(0,t.jsx)(e.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,t.jsx)(i.Z,{theme:"zIndices"}),"\n",(0,t.jsxs)(e.h2,{id:"examples",children:["Examples",(0,t.jsx)(e.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#examples",children:(0,t.jsx)(e.svg,{children:(0,t.jsx)(e.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-jsx",children:"function Example() {\n  const [colorMode] = useColorMode();\n  const [colorStyle] = useColorStyle({ colorMode });\n\n  return (\n    <Box position=\"relative\" py=\"3x\" px=\"4x\" height={360}>\n      {['dropdown', 'sticky', 'fixed', 'overlay', 'drawer', 'modal', 'popover', 'toast', 'tooltip'].map((name, index) => {\n        const zIndexValue = 1000 + index * 100;\n\n        return (\n          <Box\n            key={name}\n            backgroundColor={colorStyle.background.secondary}\n            boxShadow={colorStyle.shadow.thin}\n            color={colorStyle.color.secondary}\n            position=\"absolute\"\n            top={12 + index * 36}\n            left={12 + index * 16}\n            zIndex={name}\n            width={150}\n            px=\"4x\"\n            py=\"3x\"\n            textAlign=\"center\"\n            transition=\"transform 0.2s ease-in-out\"\n            _hover={{\n              color: colorStyle.color.primary,\n              transform: 'scale(1.1)',\n            }}\n          >\n            {name}={zIndexValue}\n          </Box>\n        );\n      })}\n    </Box>\n  );\n}\n"})})]})}e.default=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=Object.assign({},(0,o.ah)(),n.components).wrapper;return e?(0,t.jsx)(e,Object.assign({},n,{children:(0,t.jsx)(a,n)})):a(n)}},33522:function(n,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/theme/z-indices",function(){return r(72683)}])}},function(n){n.O(0,[9774,2888,179],function(){return n(n.s=33522)}),_N_E=n.O()}]);