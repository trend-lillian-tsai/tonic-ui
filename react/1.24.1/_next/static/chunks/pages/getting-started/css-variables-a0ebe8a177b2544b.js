(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9682],{9608:function(e,n,o){"use strict";o.r(n);var s=o(52322),a=o(45392);function r(e){var n=Object.assign({div:"div",h1:"h1",h2:"h2",a:"a",svg:"svg",use:"use",p:"p",pre:"pre",code:"code",strong:"strong"},(0,a.ah)(),e.components);return(0,s.jsxs)(n.div,{className:"main-content",id:"main-content",children:[(0,s.jsx)(n.h1,{id:"css-variables",children:"CSS Variables"}),"\n",(0,s.jsxs)(n.h2,{id:"overview",children:["Overview",(0,s.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#overview",children:(0,s.jsx)(n.svg,{children:(0,s.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,s.jsx)(n.p,{children:"Tonic UI has a default behavior of internally converting theme tokens defined in the theme to CSS variables."}),"\n",(0,s.jsx)(n.p,{children:"For example, consider a theme object that looks like this:"}),"\n",(0,s.jsx)(n.pre,{disabled:!0,children:(0,s.jsx)(n.code,{className:"language-js",children:"const theme = {\n  colors: {\n    'gray:10': '#fafafa',\n    'gray:20': '#f7f7f7',\n  },\n};\n"})}),"\n",(0,s.jsxs)(n.p,{children:["When this theme is passed to ",(0,s.jsx)(n.code,{children:"TonicProvider"}),", Tonic UI will generate CSS variables automatically, as shown below:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-css",children:":root {\n  --tonic-colors-gray-10: #fafafa;\n  --tonic-colors-gray-20: #f7f7f7;\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"These CSS variables can then be used to style components, providing a consistent look and feel throughout the application."}),"\n",(0,s.jsxs)(n.h2,{id:"default-css-variables",children:["Default CSS Variables",(0,s.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#default-css-variables",children:(0,s.jsx)(n.svg,{children:(0,s.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,s.jsxs)(n.p,{children:["If you want to see all the CSS variables being used on the webpage, you can open the ",(0,s.jsx)(n.strong,{children:"Developer Tools"})," and go to the ",(0,s.jsx)(n.strong,{children:"Elements"})," tab. There, you will be able to view all the default CSS variables."]}),"\n",(0,s.jsx)(n.pre,{noInline:!0,children:(0,s.jsx)(n.code,{className:"language-jsx",children:"const isColorCode = value => String(value).startsWith('#') || String(value).startsWith('rgb(') || String(value).startsWith('rgba(');\n\nrender(() => {\n  const theme = useTheme();\n  const [colorMode] = useColorMode();\n  const [colorStyle] = useColorStyle({ colorMode });\n  const cssVariableMap = theme.__cssVariableMap;\n  const borderColor = {         \n    dark: 'gray:60',\n    light: 'gray:30',                                  \n  }[colorMode]; \n  const tokenColor = {\n    dark: 'red:50',\n    light: 'red:60',\n  }[colorMode];\n\n  return (\n    <Box fontFamily=\"mono\">\n      {Object.entries(cssVariableMap).map(([name, value]) => {\n        return (\n          <Flex columnGap=\"2x\">\n            <Text color={tokenColor}>{name}:</Text>\n            <Flex alignItems=\"center\" columnGap=\"1x\">\n              {isColorCode(value) && (\n                <Box backgroundColor={value} border={1} borderColor={borderColor} width=\"3x\" height=\"3x\" />\n              )}\n              <Text>{value};</Text>\n            </Flex>\n          </Flex>\n        );\n      })}\n    </Box>\n  );\n});\n"})})]})}n.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,a.ah)(),e.components).wrapper;return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(r,e)})):r(e)}},11162:function(e,n,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/getting-started/css-variables",function(){return o(9608)}])}},function(e){e.O(0,[9774,2888,179],function(){return e(e.s=11162)}),_N_E=e.O()}]);