(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7859],{16395:function(e,n,t){"use strict";var l=t(98922),r=t(2784),i=t(2773),s=t(70018);function o(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t,l,r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var i=[],s=!0,o=!1;try{for(r=r.call(e);!(s=(t=r.next()).done)&&(i.push(t.value),!n||i.length!==n);s=!0);}catch(c){o=!0,l=c}finally{try{s||null==r.return||r.return()}finally{if(o)throw l}}return i}}(e,n)||function(e,n){if(e){if("string"==typeof e)return c(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if("Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return c(e,n)}}(e,n)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,l=Array(n);t<n;t++)l[t]=e[t];return l}n.Z=function(e){var n,t=e.theme,c=(0,l.useTheme)(),x=o((0,l.useColorMode)(),1)[0],d=null!==(n=o((0,l.useColorStyle)({colorMode:x}),1)[0][t])&&void 0!==n?n:c[t];return d?(("space"===t||"sizes"===t)&&(d=Object.keys(d).filter(function(e){return!e.toString().match(/[qh]$/)}).reduce(function(e,n){return e[n]=d[n],e},{})),r.createElement(l.Box,{mb:"6x"},r.createElement(i.Z,null,r.createElement("div",{className:"js"},"const ".concat(t," = ").concat((0,s.Z)(d,!1)))))):"Theme field not found"}},70018:function(e,n){"use strict";n.Z=function(e){return JSON.stringify(e,null,2).replace(/"/g,"'").replace(/'(\d+|[a-z]+)':/g,"$1:")}},49434:function(e,n,t){"use strict";t.r(n);var l=t(52322),r=t(45392);t(98922);var i=t(16395);function s(e){var n=Object.assign({h1:"h1",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",pre:"pre",code:"code"},(0,r.ah)(),e.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h1,{children:"Font Sizes"}),"\n",(0,l.jsx)(n.h2,{children:"Design Tokens"}),"\n",(0,l.jsx)(i.Z,{theme:"fontSizes"}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{align:"left",children:"Name"}),(0,l.jsx)(n.th,{align:"left",children:"Size"}),(0,l.jsx)(n.th,{align:"left",children:"Pixels"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{align:"left",children:"xs"}),(0,l.jsx)(n.td,{align:"left",children:".75rem"}),(0,l.jsx)(n.td,{align:"left",children:"12px"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{align:"left",children:"sm"}),(0,l.jsx)(n.td,{align:"left",children:".875rem"}),(0,l.jsx)(n.td,{align:"left",children:"14px"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{align:"left",children:"md"}),(0,l.jsx)(n.td,{align:"left",children:"1rem"}),(0,l.jsx)(n.td,{align:"left",children:"16px"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{align:"left",children:"lg"}),(0,l.jsx)(n.td,{align:"left",children:"1.125rem"}),(0,l.jsx)(n.td,{align:"left",children:"18px"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{align:"left",children:"xl"}),(0,l.jsx)(n.td,{align:"left",children:"1.25rem"}),(0,l.jsx)(n.td,{align:"left",children:"20px"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{align:"left",children:"2xl"}),(0,l.jsx)(n.td,{align:"left",children:"1.5rem"}),(0,l.jsx)(n.td,{align:"left",children:"24px"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{align:"left",children:"3xl"}),(0,l.jsx)(n.td,{align:"left",children:"1.75rem"}),(0,l.jsx)(n.td,{align:"left",children:"28px"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{align:"left",children:"4xl"}),(0,l.jsx)(n.td,{align:"left",children:"2rem"}),(0,l.jsx)(n.td,{align:"left",children:"32px"})]})]})]}),"\n",(0,l.jsx)(n.h2,{children:"Examples"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-jsx",children:'<Flex flexDirection="column" rowGap="3x">\n  <Box fontSize="xs" lineHeight="xs">Font Size 12px</Box>\n  <Box fontSize="sm" lineHeight="sm">Font Size 14px</Box>\n  <Box fontSize="md" lineHeight="md">Font Size 16px</Box>\n  <Box fontSize="lg" lineHeight="lg">Font Size 18px</Box>\n  <Box fontSize="xl" lineHeight="xl">Font Size 20px</Box>\n  <Box fontSize="2xl" lineHeight="2xl">Font Size 24px</Box>\n  <Box fontSize="3xl" lineHeight="3xl">Font Size 28px</Box>\n  <Box fontSize="4xl" lineHeight="4xl">Font Size 32px</Box>\n</Flex>\n'})})]})}n.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,r.ah)(),e.components).wrapper;return n?(0,l.jsx)(n,Object.assign({},e,{children:(0,l.jsx)(s,e)})):s(e)}},57152:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/theme/font-sizes",function(){return t(49434)}])}},function(e){e.O(0,[9774,2888,179],function(){return e(e.s=57152)}),_N_E=e.O()}]);