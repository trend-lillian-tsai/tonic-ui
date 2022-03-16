(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2823],{96902:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return i}});var r=n(7896),a=n(59740),o=(n(2784),n(30876)),l=["components"],m={};function i(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",null,"Stack"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Stack")," is a layout utility component that makes it easy to stack items together and apply a space between them."),(0,o.kt)("h2",null,"Import"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { Stack } from '@trendmicro/react-styled-ui';\n")),(0,o.kt)("h2",null,"Usage"),(0,o.kt)("p",null,"By default, each item is stacked vertically. Stack clones it's children and passes the spacing to them using the margin property."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"th"},"direction")," Prop"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Item Spacing"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"column"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"margin-bottom"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"column-reverse"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"margin-top"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"row"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"margin-right"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"row-reverse"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"margin-left"))))),(0,o.kt)("h3",null,"Vertically stacked items"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"noInline",noInline:!0},"const Item = (props) => {\n  const [colorMode] = useColorMode();\n  const [colorStyle] = useColorStyle({ colorMode });\n  const boxShadow = colorStyle.shadow.thin;\n  const borderColor = colorMode === 'dark' ? 'gray:70' : 'gray:20';\n  return (\n    <Box p=\"2x\" boxShadow={boxShadow} border={1} borderColor={borderColor} {...props} />\n  );\n};\n\nfunction Example() {\n  return (\n    <Stack direction=\"column\" spacing=\"1rem\">\n      <Item>Item 1</Item>\n      <Item>Item 2</Item>\n      <Item>Item 3</Item>\n    </Stack>\n  );\n}\n\nrender(<Example />);\n")),(0,o.kt)("h3",null,"Vertically stacked items in reverse order"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"noInline",noInline:!0},"const Item = (props) => {\n  const [colorMode] = useColorMode();\n  const [colorStyle] = useColorStyle({ colorMode });\n  const boxShadow = colorStyle.shadow.thin;\n  const borderColor = colorMode === 'dark' ? 'gray:70' : 'gray:20';\n  return (\n    <Box p=\"2x\" boxShadow={boxShadow} border={1} borderColor={borderColor} {...props} />\n  );\n};\n\nfunction Example() {\n  return (\n    <Stack direction=\"column-reverse\" spacing=\"1rem\">\n      <Item>Item 1</Item>\n      <Item>Item 2</Item>\n      <Item>Item 3</Item>\n    </Stack>\n  );\n}\n\nrender(<Example />);\n")),(0,o.kt)("h3",null,"Horizontally stacked items"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"noInline",noInline:!0},"const Item = (props) => {\n  const [colorMode] = useColorMode();\n  const [colorStyle] = useColorStyle({ colorMode });\n  const boxShadow = colorStyle.shadow.thin;\n  const borderColor = colorMode === 'dark' ? 'gray:70' : 'gray:20';\n  return (\n    <Box p=\"2x\" boxShadow={boxShadow} border={1} borderColor={borderColor} {...props} />\n  );\n};\n\nfunction Example() {\n  return (\n    <Stack direction=\"row\" spacing=\"1rem\">\n      <Item>Item 1</Item>\n      <Item>Item 2</Item>\n      <Item>Item 3</Item>\n    </Stack>\n  );\n}\n\nrender(<Example />);\n")),(0,o.kt)("h3",null,"Horizontally stacked items in reverse order"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"noInline",noInline:!0},"const Item = (props) => {\n  const [colorMode] = useColorMode();\n  const [colorStyle] = useColorStyle({ colorMode });\n  const boxShadow = colorStyle.shadow.thin;\n  const borderColor = colorMode === 'dark' ? 'gray:70' : 'gray:20';\n  return (\n    <Box p=\"2x\" boxShadow={boxShadow} border={1} borderColor={borderColor} {...props} />\n  );\n};\n\nfunction Example() {\n  return (\n    <Stack direction=\"row-reverse\" spacing=\"1rem\">\n      <Item>Item 1</Item>\n      <Item>Item 2</Item>\n      <Item>Item 3</Item>\n    </Stack>\n  );\n}\n\nrender(<Example />);\n")),(0,o.kt)("h2",null,"Props"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"direction"),(0,o.kt)("td",{parentName:"tr",align:"left"},"string"),(0,o.kt)("td",{parentName:"tr",align:"left"},"'column'"),(0,o.kt)("td",{parentName:"tr",align:"left"},"The direction to stack the items. One of: ",(0,o.kt)("inlineCode",{parentName:"td"},"'column'"),", ",(0,o.kt)("inlineCode",{parentName:"td"},"'column-reverse'"),", ",(0,o.kt)("inlineCode",{parentName:"td"},"'row'"),", ",(0,o.kt)("inlineCode",{parentName:"td"},"'row-reverse'"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"spacing"),(0,o.kt)("td",{parentName:"tr",align:"left"},"number ","|"," string"),(0,o.kt)("td",{parentName:"tr",align:"left"},"0"),(0,o.kt)("td",{parentName:"tr",align:"left"},"The space between each stack item.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"shouldWrapChildren"),(0,o.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,o.kt)("td",{parentName:"tr",align:"left"},"false"),(0,o.kt)("td",{parentName:"tr",align:"left"},"If ",(0,o.kt)("inlineCode",{parentName:"td"},"true"),", the children will be wrapped in a ",(0,o.kt)("inlineCode",{parentName:"td"},"Box")," with ",(0,o.kt)("inlineCode",{parentName:"td"},"display: inline-block"),", and the ",(0,o.kt)("inlineCode",{parentName:"td"},"Box")," will take the ",(0,o.kt)("inlineCode",{parentName:"td"},"spacing")," props.")))))}i.isMDXComponent=!0},75955:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/stack",function(){return n(96902)}])}},function(e){e.O(0,[9774,2888,179],(function(){return t=75955,e(e.s=t);var t}));var t=e.O();_N_E=t}]);