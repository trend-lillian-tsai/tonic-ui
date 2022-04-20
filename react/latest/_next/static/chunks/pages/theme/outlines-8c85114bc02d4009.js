(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8402],{16395:function(e,n,t){"use strict";var o=t(12215),l=t(81292),i=(t(2784),t(5462)),r=t(70018),u=t(28165);n.Z=function(e){var n,t=e.theme,a=(0,l.useTheme)(),s=(0,l.useColorMode)(),c=(0,o.Z)(s,1)[0],d=(0,l.useColorStyle)({colorMode:c}),h=null!==(n=(0,o.Z)(d,1)[0][t])&&void 0!==n?n:a[t];if(!h)return"Theme field not found";"space"!==t&&"sizes"!==t||(h=Object.keys(h).filter((function(e){return!e.toString().match(/[qh]$/)})).reduce((function(e,n){return e[n]=h[n],e}),{}));return(0,u.tZ)(l.Box,{mb:"6x"},(0,u.tZ)(i.Z,null,"const ".concat(t," = ").concat((0,r.Z)(h,!1))))}},70018:function(e,n){"use strict";n.Z=function(e){return JSON.stringify(e,null,2).replace(/"/g,"'").replace(/'(\d+|[a-z]+)':/g,"$1:")}},32320:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return s}});var o=t(7896),l=t(59740),i=(t(2784),t(30876)),r=(t(81292),t(16395)),u=["components"],a={};function s(e){var n=e.components,t=(0,l.Z)(e,u);return(0,i.kt)("wrapper",(0,o.Z)({},a,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",null,"Outlines"),(0,i.kt)("h2",null,"Design Tokens"),(0,i.kt)(r.Z,{theme:"outlines",mdxType:"ThemeParser"}),(0,i.kt)("h2",null,"Examples"),(0,i.kt)("p",null,"The outline shorthand property sets all the outline properties in one declaration."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'/* style */\noutline="solid"\n\n/* color | style */\noutline="#f66 dashed"\n\n/* style | width */\noutline="inset thick"\n\n/* color | style | width */\noutline="green solid 3px"\n\n/* Global values */\noutline="inherit"\noutline="initial"\noutline="revert"\noutline="unset"\n')),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"outline")," property may be specified using one, two, or three of the values listed below. The order of the value does not matter. See ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/outline"},"outline")," in MDN for more details."),(0,i.kt)("p",null,"Note: The outline will be invisible if its style is not defined. This is because the style defaults to ",(0,i.kt)("inlineCode",{parentName:"p"},"none"),". A notable exception is ",(0,i.kt)("inlineCode",{parentName:"p"},"input")," elements, which are given default styling by browsers."),(0,i.kt)("h3",null,"Values"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"<outline-color>"),"\nSets the color of the outline. Defaults to ",(0,i.kt)("inlineCode",{parentName:"p"},"currentcolor")," if absent."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"<outline-style>"),"\nSets the style of the outline. Defaults to ",(0,i.kt)("inlineCode",{parentName:"p"},"none")," if absent."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"<outline-width>"),"\nSets the thickness of the outline. Defaults to ",(0,i.kt)("inlineCode",{parentName:"p"},"medium")," if absent."),(0,i.kt)("h3",null,"Nonnegative length"),(0,i.kt)("p",null,"If the outline is a numeric value defined in the theme, the ",(0,i.kt)("inlineCode",{parentName:"p"},"solid")," outline style will be applied as a shorthand for the ",(0,i.kt)("inlineCode",{parentName:"p"},"outlineWidth")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"outlineStyle")," properties."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"noInline",noInline:!0},'const Block = (props) => {\n  const [colorMode] = useColorMode();\n  const [colorStyle] = useColorStyle({ colorMode });\n\n  return (\n    <Flex\n      px="4x"\n      py="3x"\n      alignItems="flex-start"\n      justifyContent="center"\n      flexDirection="column"\n      backgroundColor={colorStyle.background.secondary}\n      {...props}\n    />\n  );\n};\n\nfunction Example() {\n  const theme = useTheme();\n  const [colorMode] = useColorMode();\n  const outlineColor = {\n    dark: \'gray:60\',\n    light: \'gray:30\',\n  }[colorMode];\n  const outlineWidths = [1, 2, 3, 4, 5];\n  const [outlineWidth, setOutlineWidth] = React.useState(outlineWidths[0]);\n  const outlineValue = theme.outlines[outlineWidth] || outlineWidth;\n  const outlineColorValue = theme.colors[outlineColor] || outlineColor;\n\n  return (\n    <>\n      <Flex alignItems="center" mb="5x">\n        <TextLabel>outline =</TextLabel>\n        <Space width="2x" />\n        <Stack direction="row" spacing="2x">\n          {outlineWidths.map((width) => (\n            <Button\n              key={width}\n              onClick={() => setOutlineWidth(width)}\n              variant={width === outlineWidth ? \'primary\' : \'secondary\'}\n            >\n              <Text fontFamily="mono">{width}</Text>\n            </Button>\n          ))}\n        </Stack>\n      </Flex>\n      <Flex>\n        <Block\n          outline={outlineWidth}\n          outlineColor={outlineColor}\n        >\n          <Text>outline="{outlineValue}"</Text>\n          <Text>outlineColor="{outlineColorValue}"</Text>\n        </Block>\n      </Flex>\n    </>\n  );\n}\n\nrender(<Example />);\n')),(0,i.kt)("h3",null,"Keyword"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"thin"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"medium"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"thick")," are keywords that indicate the outline width. You can use them in the ",(0,i.kt)("inlineCode",{parentName:"p"},"outline")," property, but you have to set the ",(0,i.kt)("inlineCode",{parentName:"p"},"outlineStyle")," property to ",(0,i.kt)("inlineCode",{parentName:"p"},"solid")," as well."),(0,i.kt)("p",null,"Note: Because the specification doesn't define the exact thickness denoted by each keyword, the precise result when using one of them is implementation-specific. Nevertheless, they always follow the pattern ",(0,i.kt)("inlineCode",{parentName:"p"},"thin \u2264 medium \u2264 thick"),", and the values are constant within a single document."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"noInline",noInline:!0},'const Block = (props) => {\n  const [colorMode] = useColorMode();\n  const [colorStyle] = useColorStyle({ colorMode });\n\n  return (\n    <Flex\n      px="4x"\n      py="3x"\n      alignItems="flex-start"\n      justifyContent="center"\n      flexDirection="column"\n      backgroundColor={colorStyle.background.secondary}\n      {...props}\n    />\n  );\n};\n\nfunction Example() {\n  const theme = useTheme();\n  const [colorMode] = useColorMode();\n  const outlineColor = {\n    dark: \'gray:60\',\n    light: \'gray:30\',\n  }[colorMode];\n  const outlineStyle = \'solid\';\n  const outlineWidths = [\'thin\', \'medium\', \'thick\'];\n  const [outlineWidth, setOutlineWidth] = React.useState(outlineWidths[0]);\n  const outlineValue = theme.outlines[outlineWidth] || outlineWidth;\n  const outlineColorValue = theme.colors[outlineColor] || outlineColor;\n\n  return (\n    <>\n      <Flex alignItems="center" mb="5x">\n        <TextLabel>outline =</TextLabel>\n        <Space width="2x" />\n        <Stack direction="row" spacing="2x">\n          {outlineWidths.map((width) => (\n            <Button\n              key={width}\n              onClick={() => setOutlineWidth(width)}\n              variant={width === outlineWidth ? \'primary\' : \'secondary\'}\n            >\n              <Text fontFamily="mono">{width}</Text>\n            </Button>\n          ))}\n        </Stack>\n      </Flex>\n      <Flex>\n        <Block\n          outline={outlineWidth}\n          outlineColor={outlineColor}\n          outlineStyle={outlineStyle}\n        >\n          <Text>outline="{outlineValue}"</Text>\n          <Text>outlineColor="{outlineColorValue}"</Text>\n          <Text>outlineStyle="{outlineStyle}"</Text>\n        </Block>\n      </Flex>\n    </>\n  );\n}\n\nrender(<Example />);\n')),(0,i.kt)("h2",null,"Borders vs. outlines"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"./borders"},"Borders")," and outlines are very similar. However, outlines differ from borders in the following ways:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Outlines never take up space, as they are drawn outside of an element's content."),(0,i.kt)("li",{parentName:"ul"},"According to the spec, outlines don't have to be rectangular, although they usually are.")))}s.isMDXComponent=!0},6247:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/theme/outlines",function(){return t(32320)}])}},function(e){e.O(0,[9774,2888,179],(function(){return n=6247,e(e.s=n);var n}));var n=e.O();_N_E=n}]);