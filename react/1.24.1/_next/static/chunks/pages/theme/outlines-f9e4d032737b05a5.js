(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8402],{41790:function(e,n,t){"use strict";var o=t(67569),i=t(2784),l=t(81952),r=t(82650);function s(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t,o,i=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=i){var l=[],r=!0,s=!1;try{for(i=i.call(e);!(r=(t=i.next()).done)&&(l.push(t.value),!n||l.length!==n);r=!0);}catch(e){s=!0,o=e}finally{try{r||null==i.return||i.return()}finally{if(s)throw o}}return l}}(e,n)||function(e,n){if(e){if("string"==typeof e)return c(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if("Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return c(e,n)}}(e,n)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,o=Array(n);t<n;t++)o[t]=e[t];return o}n.Z=function(e){var n,t=e.theme,c=(0,o.useTheme)(),a=s((0,o.useColorMode)(),1)[0],d=null!==(n=s((0,o.useColorStyle)({colorMode:a}),1)[0][t])&&void 0!==n?n:c[t];return d?(("space"===t||"sizes"===t)&&(d=Object.keys(d).filter(function(e){return!e.toString().match(/[qh]$/)}).reduce(function(e,n){return e[n]=d[n],e},{})),i.createElement(o.Box,{mb:"6x"},i.createElement(l.Z,null,i.createElement("div",{className:"js"},"const ".concat(t," = ").concat((0,r.Z)(d,!1)))))):"Theme field not found"}},82650:function(e,n){"use strict";n.Z=function(e){return JSON.stringify(e,null,2).replace(/"/g,"'").replace(/'(\d+|[a-z]+)':/g,"$1:")}},41664:function(e,n,t){"use strict";t.r(n);var o=t(52322),i=t(45392);t(67569);var l=t(41790);function r(e){var n=Object.assign({div:"div",h1:"h1",h2:"h2",a:"a",svg:"svg",use:"use",p:"p",pre:"pre",code:"code",h3:"h3",ul:"ul",li:"li"},(0,i.ah)(),e.components);return(0,o.jsxs)(n.div,{className:"main-content",id:"main-content",children:["\n",(0,o.jsx)(n.h1,{id:"outlines",children:"Outlines"}),"\n",(0,o.jsxs)(n.h2,{id:"design-tokens",children:["Design Tokens",(0,o.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#design-tokens",children:(0,o.jsx)(n.svg,{children:(0,o.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,o.jsx)(l.Z,{theme:"outlines"}),"\n",(0,o.jsxs)(n.h2,{id:"examples",children:["Examples",(0,o.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#examples",children:(0,o.jsx)(n.svg,{children:(0,o.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,o.jsx)(n.p,{children:"The outline shorthand property sets all the outline properties in one declaration."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'/* style */\noutline="solid"\n\n/* color | style */\noutline="#f66 dashed"\n\n/* style | width */\noutline="inset thick"\n\n/* color | style | width */\noutline="green solid 3px"\n\n/* Global values */\noutline="inherit"\noutline="initial"\noutline="revert"\noutline="unset"\n'})}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"outline"})," property may be specified using one, two, or three of the values listed below. The order of the value does not matter. See ",(0,o.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/outline",children:"outline"})," in MDN for more details."]}),"\n",(0,o.jsxs)(n.p,{children:["Note: The outline will be invisible if its style is not defined. This is because the style defaults to ",(0,o.jsx)(n.code,{children:"none"}),". A notable exception is ",(0,o.jsx)(n.code,{children:"input"})," elements, which are given default styling by browsers."]}),"\n",(0,o.jsxs)(n.h3,{id:"values",children:["Values",(0,o.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#values",children:(0,o.jsx)(n.svg,{children:(0,o.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"<outline-color>"}),"\nSets the color of the outline. Defaults to ",(0,o.jsx)(n.code,{children:"currentcolor"})," if absent."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"<outline-style>"}),"\nSets the style of the outline. Defaults to ",(0,o.jsx)(n.code,{children:"none"})," if absent."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"<outline-width>"}),"\nSets the thickness of the outline. Defaults to ",(0,o.jsx)(n.code,{children:"medium"})," if absent."]}),"\n",(0,o.jsxs)(n.h3,{id:"nonnegative-length",children:["Nonnegative length",(0,o.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#nonnegative-length",children:(0,o.jsx)(n.svg,{children:(0,o.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,o.jsxs)(n.p,{children:["If the outline is a numeric value defined in the theme, the ",(0,o.jsx)(n.code,{children:"solid"})," outline style will be applied as a shorthand for the ",(0,o.jsx)(n.code,{children:"outlineWidth"})," and ",(0,o.jsx)(n.code,{children:"outlineStyle"})," properties."]}),"\n",(0,o.jsx)(n.pre,{noInline:!0,children:(0,o.jsx)(n.code,{className:"language-jsx",children:'const Block = (props) => {\n  const [colorMode] = useColorMode();\n  const [colorStyle] = useColorStyle({ colorMode });\n\n  return (\n    <Flex\n      px="4x"\n      py="3x"\n      alignItems="flex-start"\n      justifyContent="center"\n      flexDirection="column"\n      backgroundColor={colorStyle.background.secondary}\n      {...props}\n    />\n  );\n};\n\nfunction Example() {\n  const theme = useTheme();\n  const [colorMode] = useColorMode();\n  const outlineColor = {\n    dark: \'gray:60\',\n    light: \'gray:30\',\n  }[colorMode];\n  const outlineWidths = [1, 2, 3, 4, 5];\n  const [outlineWidth, setOutlineWidth] = React.useState(outlineWidths[0]);\n  const outlineValue = theme.outlines[outlineWidth] || outlineWidth;\n  const outlineColorValue = theme.colors[outlineColor] || outlineColor;\n\n  return (\n    <>\n      <Flex alignItems="center" mb="5x">\n        <TextLabel>outline =</TextLabel>\n        <Space width="2x" />\n        <Stack direction="row" spacing="2x">\n          {outlineWidths.map((width) => (\n            <Button\n              key={width}\n              onClick={() => setOutlineWidth(width)}\n              variant={width === outlineWidth ? \'primary\' : \'secondary\'}\n            >\n              <Text fontFamily="mono">{width}</Text>\n            </Button>\n          ))}\n        </Stack>\n      </Flex>\n      <Flex>\n        <Block\n          outline={outlineWidth}\n          outlineColor={outlineColor}\n        >\n          <Text>outline="{outlineValue}"</Text>\n          <Text>outlineColor="{outlineColorValue}"</Text>\n        </Block>\n      </Flex>\n    </>\n  );\n}\n\nrender(<Example />);\n'})}),"\n",(0,o.jsxs)(n.h3,{id:"keyword",children:["Keyword",(0,o.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#keyword",children:(0,o.jsx)(n.svg,{children:(0,o.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"thin"}),", ",(0,o.jsx)(n.code,{children:"medium"}),", and ",(0,o.jsx)(n.code,{children:"thick"})," are keywords that indicate the outline width. You can use them in the ",(0,o.jsx)(n.code,{children:"outline"})," property, but you have to set the ",(0,o.jsx)(n.code,{children:"outlineStyle"})," property to ",(0,o.jsx)(n.code,{children:"solid"})," as well."]}),"\n",(0,o.jsxs)(n.p,{children:["Note: Because the specification doesn't define the exact thickness denoted by each keyword, the precise result when using one of them is implementation-specific. Nevertheless, they always follow the pattern ",(0,o.jsx)(n.code,{children:"thin ≤ medium ≤ thick"}),", and the values are constant within a single document."]}),"\n",(0,o.jsx)(n.pre,{noInline:!0,children:(0,o.jsx)(n.code,{className:"language-jsx",children:'const Block = (props) => {\n  const [colorMode] = useColorMode();\n  const [colorStyle] = useColorStyle({ colorMode });\n\n  return (\n    <Flex\n      px="4x"\n      py="3x"\n      alignItems="flex-start"\n      justifyContent="center"\n      flexDirection="column"\n      backgroundColor={colorStyle.background.secondary}\n      {...props}\n    />\n  );\n};\n\nfunction Example() {\n  const theme = useTheme();\n  const [colorMode] = useColorMode();\n  const outlineColor = {\n    dark: \'gray:60\',\n    light: \'gray:30\',\n  }[colorMode];\n  const outlineStyle = \'solid\';\n  const outlineWidths = [\'thin\', \'medium\', \'thick\'];\n  const [outlineWidth, setOutlineWidth] = React.useState(outlineWidths[0]);\n  const outlineValue = theme.outlines[outlineWidth] || outlineWidth;\n  const outlineColorValue = theme.colors[outlineColor] || outlineColor;\n\n  return (\n    <>\n      <Flex alignItems="center" mb="5x">\n        <TextLabel>outline =</TextLabel>\n        <Space width="2x" />\n        <Stack direction="row" spacing="2x">\n          {outlineWidths.map((width) => (\n            <Button\n              key={width}\n              onClick={() => setOutlineWidth(width)}\n              variant={width === outlineWidth ? \'primary\' : \'secondary\'}\n            >\n              <Text fontFamily="mono">{width}</Text>\n            </Button>\n          ))}\n        </Stack>\n      </Flex>\n      <Flex>\n        <Block\n          outline={outlineWidth}\n          outlineColor={outlineColor}\n          outlineStyle={outlineStyle}\n        >\n          <Text>outline="{outlineValue}"</Text>\n          <Text>outlineColor="{outlineColorValue}"</Text>\n          <Text>outlineStyle="{outlineStyle}"</Text>\n        </Block>\n      </Flex>\n    </>\n  );\n}\n\nrender(<Example />);\n'})}),"\n",(0,o.jsxs)(n.h2,{id:"borders-vs-outlines",children:["Borders vs. outlines",(0,o.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#borders-vs-outlines",children:(0,o.jsx)(n.svg,{children:(0,o.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"./borders",children:"Borders"})," and outlines are very similar. However, outlines differ from borders in the following ways:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Outlines never take up space, as they are drawn outside of an element's content."}),"\n",(0,o.jsx)(n.li,{children:"According to the spec, outlines don't have to be rectangular, although they usually are."}),"\n"]})]})}n.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,i.ah)(),e.components).wrapper;return n?(0,o.jsx)(n,Object.assign({},e,{children:(0,o.jsx)(r,e)})):r(e)}},39639:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/theme/outlines",function(){return t(41664)}])}},function(e){e.O(0,[9774,2888,179],function(){return e(e.s=39639)}),_N_E=e.O()}]);