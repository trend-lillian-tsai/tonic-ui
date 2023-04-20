(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8599],{20914:function(e,n,l){"use strict";l.r(n);var i=l(52322),s=l(45392);function d(e){var n=Object.assign({div:"div",h1:"h1",p:"p",a:"a",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",code:"code",h2:"h2",svg:"svg",use:"use",pre:"pre",ul:"ul",li:"li",blockquote:"blockquote"},(0,s.ah)(),e.components);return(0,i.jsxs)(n.div,{className:"main-content",id:"main-content",children:[(0,i.jsx)(n.h1,{id:"responsive-styles",children:"Responsive Styles"}),"\n",(0,i.jsxs)(n.p,{children:["The responsive styles rely on the ",(0,i.jsx)(n.a,{href:"../theme/breakpoints",children:"breakpoints"})," defined in the theme configuration. The breakpoints are used to generate the media queries that make the theme responsive."]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{align:"left",children:"Breakpoint"}),(0,i.jsx)(n.th,{align:"left",children:"Media Query"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{align:"left",children:(0,i.jsx)(n.code,{children:"sm"})}),(0,i.jsx)(n.td,{align:"left",children:(0,i.jsx)(n.code,{children:"@media screen and (min-width: 320px)"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{align:"left",children:(0,i.jsx)(n.code,{children:"md"})}),(0,i.jsx)(n.td,{align:"left",children:(0,i.jsx)(n.code,{children:"@media screen and (min-width: 640px)"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{align:"left",children:(0,i.jsx)(n.code,{children:"lg"})}),(0,i.jsx)(n.td,{align:"left",children:(0,i.jsx)(n.code,{children:"@media screen and (min-width: 1024px)"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{align:"left",children:(0,i.jsx)(n.code,{children:"xl"})}),(0,i.jsx)(n.td,{align:"left",children:(0,i.jsx)(n.code,{children:"@media screen and (min-width: 1280px)"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{align:"left",children:(0,i.jsx)(n.code,{children:"2xl"})}),(0,i.jsx)(n.td,{align:"left",children:(0,i.jsx)(n.code,{children:"@media screen and (min-width: 1680px)"})})]})]})]}),"\n",(0,i.jsx)(n.p,{children:"To use the responsive styles, you can use either the array or object syntax."}),"\n",(0,i.jsxs)(n.h2,{id:"array-syntax",children:["Array Syntax",(0,i.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#array-syntax",children:(0,i.jsx)(n.svg,{children:(0,i.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,i.jsxs)(n.p,{children:["Let's say you have a ",(0,i.jsx)(n.code,{children:"Box"})," component that looks like this:"]}),"\n",(0,i.jsx)(n.pre,{disabled:!0,children:(0,i.jsx)(n.code,{className:"language-jsx",children:'<Box backgroundColor="red:50" width="50%">\n  This is a box\n</Box>\n'})}),"\n",(0,i.jsxs)(n.p,{children:["To make the ",(0,i.jsx)(n.code,{children:"width"})," responsive, you can use the array syntax as follows:"]}),"\n",(0,i.jsx)(n.pre,{disabled:!0,children:(0,i.jsx)(n.code,{className:"language-jsx",children:'<Box backgroundColor="red:50" width={["25%","50%","75%","100%"]}>\n  This is a box\n</Box>\n'})}),"\n",(0,i.jsx)(n.p,{children:"Here is how to interpret the array syntax:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["On a ",(0,i.jsx)(n.code,{children:"sm"})," breakpoint (",(0,i.jsx)(n.code,{children:"≥ 320px"}),"), the ",(0,i.jsx)(n.code,{children:"width"})," will be ",(0,i.jsx)(n.code,{children:"25%"})]}),"\n",(0,i.jsxs)(n.li,{children:["On a ",(0,i.jsx)(n.code,{children:"md"})," breakpoint (",(0,i.jsx)(n.code,{children:"≥ 640px"}),"), the ",(0,i.jsx)(n.code,{children:"width"})," will be ",(0,i.jsx)(n.code,{children:"50%"})]}),"\n",(0,i.jsxs)(n.li,{children:["On a ",(0,i.jsx)(n.code,{children:"lg"})," breakpoint (",(0,i.jsx)(n.code,{children:"≥ 1024px"}),"), the ",(0,i.jsx)(n.code,{children:"width"})," will be ",(0,i.jsx)(n.code,{children:"75%"})]}),"\n",(0,i.jsxs)(n.li,{children:["On a ",(0,i.jsx)(n.code,{children:"xl"})," breakpoint (",(0,i.jsx)(n.code,{children:"≥ 1280px"}),"), the ",(0,i.jsx)(n.code,{children:"width"})," will be ",(0,i.jsx)(n.code,{children:"100%"})]}),"\n"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["To skip certain breakpoints, you can pass ",(0,i.jsx)(n.code,{children:"null"})," to any position in the array."]}),"\n"]}),"\n",(0,i.jsxs)(n.h2,{id:"object-syntax-recommended",children:["Object Syntax (Recommended)",(0,i.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#object-syntax-recommended",children:(0,i.jsx)(n.svg,{children:(0,i.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,i.jsx)(n.p,{children:"You can also use the object syntax to define responsive styles. It's also the recommended syntax to use the responsive styles."}),"\n",(0,i.jsxs)(n.p,{children:["Let's say you have a ",(0,i.jsx)(n.code,{children:"Text"})," component that looks like this:"]}),"\n",(0,i.jsx)(n.pre,{disabled:!0,children:(0,i.jsx)(n.code,{className:"language-jsx",children:"<Text fontSize={32}>\n  This is a text\n</Text>\n"})}),"\n",(0,i.jsxs)(n.p,{children:["To make the ",(0,i.jsx)(n.code,{children:"fontSize"})," responsive, you can use the object syntax as follows:"]}),"\n",(0,i.jsx)(n.pre,{disabled:!0,children:(0,i.jsx)(n.code,{className:"language-jsx",children:"<Text fontSize={{ _: 24, md: 32, lg: 40, xl: 48 }}>\n  This is a text\n</Text>\n"})}),"\n",(0,i.jsx)(n.p,{children:"Here is how to interpret the object syntax:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["On a ",(0,i.jsx)(n.code,{children:"sm"})," breakpoint (",(0,i.jsx)(n.code,{children:"≥ 320px"}),"), the ",(0,i.jsx)(n.code,{children:"fontSize"})," will be ",(0,i.jsx)(n.code,{children:"24px"})]}),"\n",(0,i.jsxs)(n.li,{children:["On a ",(0,i.jsx)(n.code,{children:"md"})," breakpoint (",(0,i.jsx)(n.code,{children:"≥ 640px"}),"), the ",(0,i.jsx)(n.code,{children:"fontSize"})," will be ",(0,i.jsx)(n.code,{children:"32px"})]}),"\n",(0,i.jsxs)(n.li,{children:["On a ",(0,i.jsx)(n.code,{children:"lg"})," breakpoint (",(0,i.jsx)(n.code,{children:"≥ 1024px"}),"), the ",(0,i.jsx)(n.code,{children:"fontSize"})," will be ",(0,i.jsx)(n.code,{children:"40px"})]}),"\n",(0,i.jsxs)(n.li,{children:["On a ",(0,i.jsx)(n.code,{children:"xl"})," breakpoint (",(0,i.jsx)(n.code,{children:"≥ 1280px"}),"), the ",(0,i.jsx)(n.code,{children:"fontSize"})," will be ",(0,i.jsx)(n.code,{children:"48px"})]}),"\n"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["You can use the ",(0,i.jsx)(n.code,{children:"_"})," key to define a default value for all breakpoints."]}),"\n"]}),"\n",(0,i.jsxs)(n.h2,{id:"under-the-hood",children:["Under the Hood",(0,i.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#under-the-hood",children:(0,i.jsx)(n.svg,{children:(0,i.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,i.jsx)(n.p,{children:"Given the following example:"}),"\n",(0,i.jsx)(n.pre,{disabled:!0,children:(0,i.jsx)(n.code,{className:"language-jsx",children:"<Box width={{ _: '100%', sm: '50%', md: '25%' }}>\n  This is a box\n</Box>\n"})}),"\n",(0,i.jsx)(n.p,{children:"It will generate the following CSS:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-css",children:".Box {\n  width: 100%;\n}\n\n@media screen and (min-width: 320px) {\n  .Box {\n    width: 50%;\n  }\n}\n\n@media screen and (min-width: 640px) {\n  .Box {\n    width: 25%;\n  }\n}\n"})}),"\n",(0,i.jsxs)(n.h2,{id:"demo",children:["Demo",(0,i.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#demo",children:(0,i.jsx)(n.svg,{children:(0,i.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,i.jsx)(n.p,{children:"Here is an actual example of the responsive styles in action:"}),"\n",(0,i.jsx)(n.pre,{noInline:!0,children:(0,i.jsx)(n.code,{className:"language-jsx",children:"const Ellipsis = (props) => (\n  <Box whiteSpace=\"nowrap\" overflow=\"hidden\" textOverflow=\"ellipsis\" {...props} />\n);\n\nconst Light = ({ on, ...rest }) => (\n  <Box\n    display=\"inline-block\"\n    borderRadius=\"50%\"\n    bg={on ? '#00ff00' : '#666'}\n    boxShadow={on ? '0 0 1px 2px rgba(0, 255, 0, .8)' : 'none'}\n    height={16}\n    width={16}\n    verticalAlign=\"middle\"\n    {...rest}\n  />\n);\n\nfunction Example() {\n  const laneColor = {\n    1: '#389efc',\n    2: '#ff7332',\n    3: '#00b449',\n    4: '#fdf133',\n    5: '#fc74cf',\n  };\n\n  const players = [\n    { id: '240', lane: 1, name: 'Taiwan Leave System', laps: 2, raceTime: '01:20.592', gates: [1, 1, 1] },\n    { id: '339', lane: 2, name: '404 Not Found', laps: 2, raceTime: '01:24.036', gates: [1, 1, 1] },\n    { id: '003', lane: 3, name: 'ShowMeThe$$', laps: 2, raceTime: '01:37.890', gates: [1, 1, 0] },\n    { id: '207', lane: 4, name: 'Dragon Rider', laps: 1, raceTime: '00:49.211', gates: [1, 1, 0] },\n    { id: '456', lane: 5, name: 'BumbleBee', laps: 0, raceTime: '00:00.000', gates: [1, 1, 1] },\n  ];\n\n  return (\n    <Box position=\"relative\" mx=\"auto\">\n      {players.map((player, index) => (\n        <Box\n          key={player.id}\n          display=\"flex\"\n          minWidth={360}\n        >\n          <Box\n            flexBasis=\"auto\"\n            flexGrow={0}\n            minWidth=\"2x\"\n            width=\"2x\"\n            bg={laneColor[player.lane]}\n          />\n          <Box\n            bg={index % 2 ? 'gray:100' : 'gray:80'}\n            color=\"white:primary\"\n            flexBasis={0}\n            flexGrow={1}\n            maxWidth=\"calc(100% - .5rem)\"\n            py=\"2x\"\n            px=\"6x\"\n          >\n            <Box\n              display=\"flex\"\n              alignItems=\"flex-end\"\n            >\n              <Box\n                flexBasis={0}\n                flexGrow={1}\n                maxWidth=\"100%\"\n              >\n                <Text\n                  color=\"#6fffff\"\n                  fontWeight=\"bold\"\n                  fontSize={['4xl', null, null, 48]}\n                  lineHeights={['4xl', null, null, '1.5']}\n                >\n                  {player.id}\n                </Text>\n              </Box>\n              <Box\n                flexBasis=\"auto\"\n                flexGrow={0}\n                width=\"auto\"\n              >\n                <Text\n                  fontSize={['3xl', null, null, '4xl']}\n                  lineHeight={['3xl', null, null, '4xl']}\n                >\n                  {player.laps} / {player.raceTime}\n                </Text>\n              </Box>\n            </Box>\n            <Box\n              display=\"flex\"\n              alignItems=\"center\"\n              pt=\"2x\"\n            >\n              <Box\n                flexBasis={0}\n                flexGrow={1}\n                maxWidth=\"100%\"\n                width={0}\n              >\n                <Ellipsis>\n                  <Text\n                    fontSize={['2xl', null, null, '3xl']}\n                    lineHeight={['2xl', null, null, '3xl']}\n                  >\n                    {player.name}\n                  </Text>\n                </Ellipsis>\n              </Box>\n              <Flex\n                flexBasis=\"auto\"\n                flexGrow={0}\n                width=\"auto\"\n                fontSize={['xl', null, null, '2xl']}\n                lineHeight={['xl', null, null, '2xl']}\n              >\n                <Light on={player.gates[0]} m=\"2x\" />\n                <Text pr=\"2x\">REC</Text>\n                <Light on={player.gates[1]} m=\"2x\" />\n                <Text pr=\"2x\">A</Text>\n                <Light on={player.gates[2]} m=\"2x\" />\n                <Text pr=\"2x\">B</Text>\n              </Flex>\n            </Box>\n          </Box>\n        </Box>\n      ))}\n    </Box>\n  );\n}\n\nrender(<Example />);\n"})})]})}n.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,s.ah)(),e.components).wrapper;return n?(0,i.jsx)(n,Object.assign({},e,{children:(0,i.jsx)(d,e)})):d(e)}},72559:function(e,n,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/styled-system/responsive-styles",function(){return l(20914)}])}},function(e){e.O(0,[9774,2888,179],function(){return e(e.s=72559)}),_N_E=e.O()}]);