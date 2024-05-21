(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7366],{40609:function(e,n,i){"use strict";i.r(n);var l=i(52322),d=i(45392);function s(e){var n=Object.assign({div:"div",h1:"h1",p:"p",h2:"h2",a:"a",svg:"svg",use:"use",h3:"h3",ul:"ul",li:"li",code:"code",pre:"pre",strong:"strong",blockquote:"blockquote",h4:"h4",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,d.ah)(),e.components);return(0,l.jsxs)(n.div,{className:"main-content",id:"main-content",children:[(0,l.jsx)(n.h1,{id:"migration-from-v0-to-v1",children:"Migration From v0 to v1"}),"\n",(0,l.jsx)(n.p,{children:"⚠️ This guide outlines the necessary steps to migrate from Tonic UI v0 to v1. Please review the breaking changes and assess the compatibility with your current setup before proceeding with the upgrade."}),"\n",(0,l.jsxs)(n.h2,{id:"fundamental-updates",children:["Fundamental Updates",(0,l.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#fundamental-updates",children:(0,l.jsx)(n.svg,{children:(0,l.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,l.jsxs)(n.h3,{id:"1-update-the-dependencies",children:["1. Update the dependencies",(0,l.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#1-update-the-dependencies",children:(0,l.jsx)(n.svg,{children:(0,l.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Rename the ",(0,l.jsx)(n.code,{children:"@trendmicro/react-styled-ui"})," package to ",(0,l.jsx)(n.code,{children:"@tonic-ui/react"})]}),"\n",(0,l.jsxs)(n.li,{children:["Rename the ",(0,l.jsx)(n.code,{children:"@trendmicro/styled-ui-theme"})," package to ",(0,l.jsx)(n.code,{children:"@tonic-ui/theme"})]}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-diff",children:'"dependencies": {\n- "@trendmicro/react-styled-ui": "0.x",\n- "@trendmicro/styled-ui-theme": "0.x",\n+ "@tonic-ui/react": "^1.0.0"\n}\n'})}),"\n",(0,l.jsx)(n.p,{children:"To make v0.x and v1 coexist, do the following:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-diff",children:'"dependencies": {\n  "@trendmicro/react-styled-ui": "0.x",\n  "@trendmicro/styled-ui-theme": "0.x",\n+ "@tonic-ui/react": "^1.0.0"\n}\n'})}),"\n",(0,l.jsx)(n.p,{children:"You can keep v0.x packages until you are ready to remove them."}),"\n",(0,l.jsxs)(n.h3,{id:"2-update-the-providers",children:["2. Update the providers",(0,l.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#2-update-the-providers",children:(0,l.jsx)(n.svg,{children:(0,l.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,l.jsxs)(n.p,{children:["A ",(0,l.jsx)(n.code,{children:"TonicProvider"})," is provided by the ",(0,l.jsx)(n.code,{children:"@tonic-ui/react"})," package. It includes the following providers:"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"ThemeProvider"}),": Provides the theming context for all components."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"ColorModeProvider"}),": Provides color mode context to all components. ",(0,l.jsx)(n.a,{href:"../components/color-mode",children:"Learn more"})]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"ColorStyleProvider"}),": Provides the color style context to all components. ",(0,l.jsx)(n.a,{href:"../components/color-style",children:"Learn more"})]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"Optionally via prop:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"useCSSBaseline"}),": To omit the recommended ",(0,l.jsx)(n.code,{children:"CSSBaseline"}),", pass ",(0,l.jsx)(n.code,{children:"useCSSBaseline={false}"}),"."]}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-diff",children:"+ <TonicProvider\n+   colorMode={{ defaultValue: 'dark' }}\n+   useCSSBaseline={true}\n+ >\n- <ThemeProvider>\n-   <ColorModeProvider value=\"dark\">\n-     <ColorStyleProvider>\n-       <CSSBaseline />\n-       <App />\n+   <App />\n-     </ColorStyleProvider>\n-   </ColorModeProvider>\n- </ThemeProvider>\n+ </TonicProvider>\n"})}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsxs)(n.p,{children:["See ",(0,l.jsx)(n.a,{href:"../getting-started/usage",children:"Getting Started"})," to learn more about the providers."]}),"\n"]}),"\n",(0,l.jsxs)(n.h3,{id:"3-replace-deprecated-components-and-hooks",children:["3. Replace deprecated components and Hooks",(0,l.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#3-replace-deprecated-components-and-hooks",children:(0,l.jsx)(n.svg,{children:(0,l.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,l.jsxs)(n.h4,{id:"flatbutton-component",children:["FlatButton component",(0,l.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#flatbutton-component",children:(0,l.jsx)(n.svg,{children:(0,l.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,l.jsxs)(n.p,{children:["\uD83D\uDCA3 ",(0,l.jsx)(n.code,{children:"FlatButton"})," is deprecated and will be removed in the next major release. Use ",(0,l.jsx)(n.a,{href:"../components/button",children:"Button"})," or ",(0,l.jsx)(n.a,{href:"../components/button-base",children:"ButtonBase"})," instead."]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-diff",children:'- <FlatButton variant="solid"/>\n+ <Button variant="default"/>\n'})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-diff",children:'- <FlatButton variant="outline"/>\n+ <Button variant="secondary"/>\n'})}),"\n",(0,l.jsxs)(n.p,{children:["For alert or toast notifications, you may use the code below to replace the deprecated ",(0,l.jsx)(n.code,{children:"FlatButton"})," while rendering action buttons on a bright background:"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:"const ActionButton = forwardRef((props, ref) => (\n  <Button\n    ref={ref}\n    variant=\"secondary\"\n    borderColor=\"black:primary\"\n    color=\"black:primary\"\n    css={{\n      '&:active': {\n        color: 'black',\n      },\n      '&:focus': {\n        color: 'black',\n      },\n      '&:hover': {\n        background: 'rgba(0, 0, 0, 0.12)',\n        color: 'black',\n      },\n      '&:hover:not(:focus)': {\n        boxShadow: 'none',\n      },\n    }}\n    {...props}\n  />\n));\n"})}),"\n",(0,l.jsxs)(n.h4,{id:"pseudobox-component",children:["PseudoBox component",(0,l.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#pseudobox-component",children:(0,l.jsx)(n.svg,{children:(0,l.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,l.jsxs)(n.p,{children:["\uD83D\uDCA3 ",(0,l.jsx)(n.code,{children:"PseudoBox"})," is deprecated and its props can now be passed to ",(0,l.jsx)(n.code,{children:"Box"})," directly. Use ",(0,l.jsx)(n.a,{href:"../components/box",children:"Box"})," instead."]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-diff",children:"- <PseudoBox\n+ <Box\n    _hover={{ fontWeight: 'semibold' }}\n  >\n    Hover Me\n- </PseudoBox>\n+ </Box>\n"})}),"\n",(0,l.jsxs)(n.h4,{id:"toggleswitch-component",children:["ToggleSwitch component",(0,l.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#toggleswitch-component",children:(0,l.jsx)(n.svg,{children:(0,l.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,l.jsxs)(n.p,{children:["\uD83D\uDCA3 ",(0,l.jsx)(n.code,{children:"ToggleSwitch"})," is deprecated and will be removed in the next major release. Use ",(0,l.jsx)(n.a,{href:"../components/switch",children:"Switch"})," instead."]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-diff",children:"- <ToggleSwitch />\n+ <Switch />\n"})}),"\n",(0,l.jsxs)(n.h4,{id:"usedisclosure-hook",children:["useDisclosure Hook",(0,l.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#usedisclosure-hook",children:(0,l.jsx)(n.svg,{children:(0,l.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,l.jsxs)(n.p,{children:["\uD83D\uDCA3 ",(0,l.jsx)(n.code,{children:"useDisclosure"})," is deprecated and will be removed in the next major release. Use ",(0,l.jsx)(n.a,{href:"../hooks/use-toggle",children:"useToggle"})," instead."]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:"const [value, toggleValue] = useToggle(false);\ntoggleValue(); // toggle the value between true and false\ntoggleValue(true); // set the value to true\ntoggleValue(false); // set the value to false\n"})}),"\n",(0,l.jsxs)(n.h4,{id:"withtheme-hoc",children:["withTheme HoC",(0,l.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#withtheme-hoc",children:(0,l.jsx)(n.svg,{children:(0,l.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,l.jsxs)(n.p,{children:["\uD83D\uDCA3 ",(0,l.jsx)(n.code,{children:"withTheme"})," is deprecated and will be removed in the next major release. Use the ",(0,l.jsx)(n.code,{children:"useTheme"})," Hook instead."]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:"const theme = useTheme();\n"})}),"\n",(0,l.jsxs)(n.h3,{id:"4-examine-breaking-changes",children:["4. Examine breaking changes",(0,l.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#4-examine-breaking-changes",children:(0,l.jsx)(n.svg,{children:(0,l.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,l.jsxs)(n.p,{children:["The following components changed the ",(0,l.jsx)(n.code,{children:"display"})," property internally. Check whether you have to do corresponding layout change."]}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{align:"left",children:"Component"}),(0,l.jsx)(n.th,{align:"left",children:"Previous"}),(0,l.jsx)(n.th,{align:"left",children:"Current"}),(0,l.jsx)(n.th,{align:"left",children:"Note"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{align:"left",children:(0,l.jsx)(n.code,{children:"Button"})}),(0,l.jsx)(n.td,{align:"left",children:(0,l.jsx)(n.code,{children:"inline-block"})}),(0,l.jsx)(n.td,{align:"left",children:(0,l.jsx)(n.code,{children:"inline-flex"})}),(0,l.jsx)(n.td,{align:"left"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{align:"left",children:(0,l.jsx)(n.code,{children:"Menu"})}),(0,l.jsx)(n.td,{align:"left",children:(0,l.jsx)(n.code,{children:"inline-block"})}),(0,l.jsx)(n.td,{align:"left",children:(0,l.jsx)(n.code,{children:"inline-flex"})}),(0,l.jsx)(n.td,{align:"left"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{align:"left",children:(0,l.jsx)(n.code,{children:"SVGIcon"})}),(0,l.jsx)(n.td,{align:"left",children:(0,l.jsx)(n.code,{children:"inline-block"})}),(0,l.jsx)(n.td,{align:"left",children:(0,l.jsx)(n.code,{children:"inline-flex"})}),(0,l.jsx)(n.td,{align:"left",children:"It might affect the layout according to your usage"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{align:"left",children:(0,l.jsx)(n.code,{children:"Space"})}),(0,l.jsx)(n.td,{align:"left",children:(0,l.jsx)(n.code,{children:"inline-block"})}),(0,l.jsx)(n.td,{align:"left",children:(0,l.jsx)(n.code,{children:"inline-flex"})}),(0,l.jsx)(n.td,{align:"left",children:"It might affect the layout according to your usage"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{align:"left",children:(0,l.jsx)(n.code,{children:"Stack"})}),(0,l.jsx)(n.td,{align:"left",children:(0,l.jsx)(n.code,{children:"inline-block"})}),(0,l.jsx)(n.td,{align:"left",children:(0,l.jsx)(n.code,{children:"inline-flex"})}),(0,l.jsx)(n.td,{align:"left",children:"It might affect the layout according to your usage"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{align:"left",children:(0,l.jsx)(n.code,{children:"Tag"})}),(0,l.jsx)(n.td,{align:"left",children:(0,l.jsx)(n.code,{children:"inline-block"})}),(0,l.jsx)(n.td,{align:"left",children:(0,l.jsx)(n.code,{children:"inline-flex"})}),(0,l.jsx)(n.td,{align:"left"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{align:"left",children:(0,l.jsx)(n.code,{children:"Text"})}),(0,l.jsx)(n.td,{align:"left",children:(0,l.jsx)(n.code,{children:"inline-block"})}),(0,l.jsx)(n.td,{align:"left",children:(0,l.jsx)(n.code,{children:"block"})}),(0,l.jsxs)(n.td,{align:"left",children:["It might affect the layout according to your usage",(0,l.jsx)("br",{}),"- To make inline text, use ",(0,l.jsx)(n.code,{children:'<Text display="inline" />'}),(0,l.jsx)("br",{}),"- To make inline block text, use ",(0,l.jsx)(n.code,{children:'<Text display="inline-block" />'}),(0,l.jsx)("br",{}),"- To make inline flex text, use ",(0,l.jsx)(n.code,{children:'<Text display="inline-flex" />'}),(0,l.jsx)("br",{}),"- Use ",(0,l.jsx)(n.code,{children:'<Flex direction="row" />'})," or ",(0,l.jsx)(n.code,{children:'<Flex direction="column" />'})," if you need to render multiple components in the same row or column."]})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{align:"left",children:(0,l.jsx)(n.code,{children:"TextLabel"})}),(0,l.jsx)(n.td,{align:"left",children:(0,l.jsx)(n.code,{children:"inline"})}),(0,l.jsx)(n.td,{align:"left",children:(0,l.jsx)(n.code,{children:"block"})}),(0,l.jsxs)(n.td,{align:"left",children:["It might affect the layout according to your usage",(0,l.jsx)("br",{}),"- To make inline text, use ",(0,l.jsx)(n.code,{children:'<TextLabel display="inline" />'}),(0,l.jsx)("br",{}),"- To make inline block text, use ",(0,l.jsx)(n.code,{children:'<TextLabel display="inline-block" />'}),(0,l.jsx)("br",{}),"- To make inline flex text, use ",(0,l.jsx)(n.code,{children:'<TextLabel display="inline-flex" />'}),(0,l.jsx)("br",{}),"- Use ",(0,l.jsx)(n.code,{children:'<Flex direction="row" />'})," or ",(0,l.jsx)(n.code,{children:'<Flex direction="column" />'})," if you need to render multiple components in the same row or column."]})]})]})]}),"\n",(0,l.jsxs)(n.h2,{id:"system-updates",children:["System Updates",(0,l.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#system-updates",children:(0,l.jsx)(n.svg,{children:(0,l.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,l.jsxs)(n.h3,{id:"theme",children:["Theme",(0,l.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#theme",children:(0,l.jsx)(n.svg,{children:(0,l.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,l.jsxs)(n.p,{children:["Removed dark and light shadows from the ",(0,l.jsx)(n.code,{children:"theme.shadows"})," object in favor of ",(0,l.jsx)(n.code,{children:"colorStyle.shadow"}),". See ",(0,l.jsx)(n.a,{href:"../theme/shadows",children:"shadows"})," to learn more."]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-diff",children:"{\n  shadows: {\n    none: 'none',\n-   dark: {\n-     sm: '0 2px 8px 0 rgba(0, 0, 0, 0.48), 0 1px 2px 0 rgba(0, 0, 0, 0.16)',\n-     md: '0 4px 16px 0 rgba(0, 0, 0, 0.48), 0 2px 4px 0 rgba(0, 0, 0, 0.16)',\n-     lg: '0 8px 32px 0 rgba(0, 0, 0, 0.48), 0 4px 8px 0 rgba(0, 0, 0, 0.16)',\n-   },\n-   light: {\n-     sm: '0 2px 8px 0 rgba(0, 0, 0, 0.16), 0 1px 2px 0 rgba(0, 0, 0, 0.08)',\n-     md: '0 4px 16px 0 rgba(0, 0, 0, 0.16), 0 2px 4px 0 rgba(0, 0, 0, 0.08)',\n-     lg: '0 8px 32px 0 rgba(0, 0, 0, 0.16), 0 4px 8px 0 rgba(0, 0, 0, 0.08)',\n-   },\n  },\n}\n"})}),"\n",(0,l.jsxs)(n.p,{children:["You can use ",(0,l.jsx)(n.code,{children:"useColorStyle"})," Hook to get the shadow value:"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:"const [colorMode] = useColorMode();\nconst [colorStyle] = useColorStyle({ colorMode });\n\nconsole.log(colorStyle.shadow.thin);\nconsole.log(colorStyle.shadow.medium);\nconsole.log(colorStyle.shadow.thick);\n"})}),"\n",(0,l.jsxs)(n.h3,{id:"color-style",children:["Color Style",(0,l.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#color-style",children:(0,l.jsx)(n.svg,{children:(0,l.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,l.jsxs)(n.p,{children:["Moved ",(0,l.jsx)(n.code,{children:"selected"})," and ",(0,l.jsx)(n.code,{children:"marked"})," tokens from ",(0,l.jsx)(n.code,{children:"background"})," to ",(0,l.jsx)(n.code,{children:"text"}),"."]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-diff",children:"{ // Dark mode\n  background: {\n    primary: 'gray:100',\n    secondary: 'gray:90',\n    tertiary: 'gray:80',\n    inverse: 'gray:10',\n-   selected: 'blue:60', // replaced with text.selection in the v1 release\n-   marked: '#fce79e', // replaced with text.highlight in the v1 release\n  },\n+ color: {\n+   emphasis: 'white:emphasis',\n+   primary: 'white:primary',\n+   secondary: 'white:secondary',\n+   tertiary: 'white:tertiary',\n+   disabled: 'white:disabled',\n+   success: 'green:40',\n+   info: 'blue:40',\n+   warning: 'orange:50',\n+   error: 'red:50',\n+ },\n  text: {\n-   emphasis: 'white:emphasis',\n-   primary: 'white:primary',\n-   secondary: 'white:secondary',\n-   tertiary: 'white:tertiary',\n-   disabled: 'white:disabled',\n-   link: 'blue:40',\n-   warning: 'orange:50',\n-   error: 'red:50',\n    selection: 'blue:60',\n    highlight: '#fce79e',\n  },\n}\n"})}),"\n",(0,l.jsxs)(n.h3,{id:"usecolormode-hook",children:["useColorMode Hook",(0,l.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#usecolormode-hook",children:(0,l.jsx)(n.svg,{children:(0,l.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,l.jsxs)(n.p,{children:["The ",(0,l.jsx)(n.code,{children:"useColorMode"})," Hook now returns ",(0,l.jsx)(n.code,{children:"[colorMode, setColorMode]"})," not the object ",(0,l.jsx)(n.code,{children:"{ colorMode, setColorMode, toggleColorMode }"})]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-diff",children:"- const { colorMode, setColorMode, toggleColorMode } = useColorMode();\n+ const [colorMode, setColorMode] = useColorMode();\n"})}),"\n",(0,l.jsxs)(n.h2,{id:"component-updates",children:["Component Updates",(0,l.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#component-updates",children:(0,l.jsx)(n.svg,{children:(0,l.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,l.jsxs)(n.h3,{id:"accordion",children:[(0,l.jsx)(n.code,{children:"Accordion"}),(0,l.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#accordion",children:(0,l.jsx)(n.svg,{children:(0,l.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Removed ",(0,l.jsx)(n.code,{children:"allowMultiple"})," and ",(0,l.jsx)(n.code,{children:"allowToggle"})," props in favor of controling state from the parent"]}),"\n",(0,l.jsxs)(n.li,{children:["Removed ",(0,l.jsx)(n.code,{children:"index"})," and ",(0,l.jsx)(n.code,{children:"defaultIndex"})," props"]}),"\n",(0,l.jsxs)(n.li,{children:["Removed the ",(0,l.jsx)(n.code,{children:"onChange"})," prop. Use ",(0,l.jsx)(n.code,{children:"onToggle"})," on ",(0,l.jsx)(n.code,{children:"AccordionItem"})," instead"]}),"\n",(0,l.jsxs)(n.li,{children:["Added ",(0,l.jsx)(n.code,{children:"AccordionToggle"}),", ",(0,l.jsx)(n.code,{children:"AccordionToggleIcon"}),", and ",(0,l.jsx)(n.code,{children:"AccordionCollapse"})," components for unstyled toggle and collapse"]}),"\n"]}),"\n",(0,l.jsxs)(n.h3,{id:"accordionitem",children:[(0,l.jsx)(n.code,{children:"AccordionItem"}),(0,l.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#accordionitem",children:(0,l.jsx)(n.svg,{children:(0,l.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Renamed the ",(0,l.jsx)(n.code,{children:"isOpen"})," prop to ",(0,l.jsx)(n.code,{children:"isExpanded"})]}),"\n",(0,l.jsxs)(n.li,{children:["Renamed the ",(0,l.jsx)(n.code,{children:"defaultIsOpen"})," prop to ",(0,l.jsx)(n.code,{children:"defaultIsExpanded"})]}),"\n",(0,l.jsxs)(n.li,{children:["Renamed the ",(0,l.jsx)(n.code,{children:"onChange"})," prop to ",(0,l.jsx)(n.code,{children:"onToggle"})]}),"\n",(0,l.jsxs)(n.li,{children:["Renamed the ",(0,l.jsx)(n.code,{children:"isDisabled"})," prop to ",(0,l.jsx)(n.code,{children:"disabled"})]}),"\n"]}),"\n",(0,l.jsxs)(n.h3,{id:"alert",children:[(0,l.jsx)(n.code,{children:"Alert"}),(0,l.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#alert",children:(0,l.jsx)(n.svg,{children:(0,l.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Renamed the ",(0,l.jsx)(n.code,{children:"isCloseButtonVisible"})," prop to ",(0,l.jsx)(n.code,{children:"isClosable"})]}),"\n"]}),"\n",(0,l.jsxs)(n.h3,{id:"badge",children:[(0,l.jsx)(n.code,{children:"Badge"}),(0,l.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#badge",children:(0,l.jsx)(n.svg,{children:(0,l.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Changed the ",(0,l.jsx)(n.code,{children:"dotSize"})," prop to ",(0,l.jsx)(n.code,{children:"width"})," or ",(0,l.jsx)(n.code,{children:"w"})," and ",(0,l.jsx)(n.code,{children:"height"})," or ",(0,l.jsx)(n.code,{children:"h"})]}),"\n",(0,l.jsxs)(n.li,{children:["Changed the ",(0,l.jsx)(n.code,{children:"isHidden"})," prop to ",(0,l.jsx)(n.code,{children:"isInvisible"})]}),"\n",(0,l.jsxs)(n.li,{children:["Changed the ",(0,l.jsx)(n.code,{children:"offset"})," prop to ",(0,l.jsx)(n.code,{children:"right"})," and ",(0,l.jsx)(n.code,{children:"top"})]}),"\n",(0,l.jsxs)(n.li,{children:["Changed the ",(0,l.jsx)(n.code,{children:"variantColor"})," prop to ",(0,l.jsx)(n.code,{children:"backgroundColor"})]}),"\n",(0,l.jsxs)(n.li,{children:["Renamed ",(0,l.jsx)(n.code,{children:'variant="badge"'})," to ",(0,l.jsx)(n.code,{children:'variant="solid"'})]}),"\n"]}),"\n",(0,l.jsxs)(n.h3,{id:"checkboxgroup",children:[(0,l.jsx)(n.code,{children:"CheckboxGroup"}),(0,l.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#checkboxgroup",children:(0,l.jsx)(n.svg,{children:(0,l.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Changed ",(0,l.jsx)(n.code,{children:"onChange(value, event)"})," to ",(0,l.jsx)(n.code,{children:"onChange(value)"})]}),"\n"]}),"\n",(0,l.jsxs)(n.h3,{id:"drawer",children:[(0,l.jsx)(n.code,{children:"Drawer"}),(0,l.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#drawer",children:(0,l.jsx)(n.svg,{children:(0,l.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Renamed the ",(0,l.jsx)(n.code,{children:"isCloseButtonVisible"})," prop to ",(0,l.jsx)(n.code,{children:"isClosable"})]}),"\n",(0,l.jsxs)(n.li,{children:["Added ",(0,l.jsx)(n.code,{children:"scrollBehavior"})," prop to control the scroll behavior of the drawer"]}),"\n",(0,l.jsxs)(n.li,{children:["Added support for passing style props to ",(0,l.jsx)(n.code,{children:"Drawer"})]}),"\n"]}),"\n",(0,l.jsxs)(n.h3,{id:"modal",children:[(0,l.jsx)(n.code,{children:"Modal"}),(0,l.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#modal",children:(0,l.jsx)(n.svg,{children:(0,l.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Renamed the ",(0,l.jsx)(n.code,{children:"isCloseButtonVisible"})," prop to ",(0,l.jsx)(n.code,{children:"isClosable"})]}),"\n",(0,l.jsxs)(n.li,{children:["Added ",(0,l.jsx)(n.code,{children:"scrollBehavior"})," prop to control the scroll behavior of the modal"]}),"\n",(0,l.jsxs)(n.li,{children:["Added support for passing style props to ",(0,l.jsx)(n.code,{children:"Modal"})]}),"\n"]}),"\n",(0,l.jsxs)(n.h3,{id:"popover",children:[(0,l.jsx)(n.code,{children:"Popover"}),(0,l.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#popover",children:(0,l.jsx)(n.svg,{children:(0,l.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Removed the ",(0,l.jsx)(n.code,{children:"shouldWrapChildren"})," prop. Use Function as Child Component (FaCC) to render the tooltip trigger instead."]}),"\n"]}),"\n",(0,l.jsxs)(n.h3,{id:"radiogroup",children:[(0,l.jsx)(n.code,{children:"RadioGroup"}),(0,l.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#radiogroup",children:(0,l.jsx)(n.svg,{children:(0,l.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Changed ",(0,l.jsx)(n.code,{children:"onChange(value, event)"})," to ",(0,l.jsx)(n.code,{children:"onChange(value)"})]}),"\n"]}),"\n",(0,l.jsxs)(n.h3,{id:"scrollbar",children:[(0,l.jsx)(n.code,{children:"Scrollbar"}),(0,l.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#scrollbar",children:(0,l.jsx)(n.svg,{children:(0,l.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Changed the ",(0,l.jsx)(n.code,{children:"disabled"})," prop to ",(0,l.jsx)(n.code,{children:'overflow="hidden"'})]}),"\n",(0,l.jsxs)(n.li,{children:["Changed the ",(0,l.jsx)(n.code,{children:"minThumbSize"})," prop to ",(0,l.jsx)(n.code,{children:"minThumbWidth"})," and ",(0,l.jsx)(n.code,{children:"minThumbHeight"})]}),"\n",(0,l.jsxs)(n.li,{children:["Changed the ",(0,l.jsx)(n.code,{children:"visibility"})," prop to ",(0,l.jsx)(n.code,{children:"overflow"})]}),"\n",(0,l.jsxs)(n.li,{children:["Removed the ",(0,l.jsx)(n.code,{children:"renderView"})," prop. Use Function as Child Component (FaCC) to render the scroll view instead."]}),"\n",(0,l.jsxs)(n.li,{children:["Removed the ",(0,l.jsx)(n.code,{children:"renderHorizontalTrack"})," prop. Use Function as Child Component (FaCC) to render the horizontal track instead."]}),"\n",(0,l.jsxs)(n.li,{children:["Removed the ",(0,l.jsx)(n.code,{children:"renderHorizontalThumb"})," prop. Use Function as Child Component (FaCC) to render the horizontal thumb instead."]}),"\n",(0,l.jsxs)(n.li,{children:["Removed the ",(0,l.jsx)(n.code,{children:"renderVerticalTrack"})," prop. Use Function as Child Component (FaCC) to render the vertical track instead."]}),"\n",(0,l.jsxs)(n.li,{children:["Removed the ",(0,l.jsx)(n.code,{children:"renderVerticalThumb"})," prop. Use Function as Child Component (FaCC) to render the vertical thumb instead."]}),"\n",(0,l.jsxs)(n.li,{children:["Changed the ",(0,l.jsx)(n.code,{children:"thumbSize"})," prop to ",(0,l.jsx)(n.code,{children:"minThumbWidth"})," and ",(0,l.jsx)(n.code,{children:"minThumbHeight"})]}),"\n"]}),"\n",(0,l.jsxs)(n.h3,{id:"spinner",children:[(0,l.jsx)(n.code,{children:"Spinner"}),(0,l.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#spinner",children:(0,l.jsx)(n.svg,{children:(0,l.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Renamed the ",(0,l.jsx)(n.code,{children:"color"})," prop to ",(0,l.jsx)(n.code,{children:"lineColor"})]}),"\n",(0,l.jsxs)(n.li,{children:["Renamed the ",(0,l.jsx)(n.code,{children:"strokeWidth"})," prop to ",(0,l.jsx)(n.code,{children:"lineWidth"})," and ",(0,l.jsx)(n.code,{children:"trackWidth"})]}),"\n",(0,l.jsxs)(n.li,{children:["Remove the ",(0,l.jsx)(n.code,{children:"speed"})," prop"]}),"\n"]}),"\n",(0,l.jsxs)(n.h3,{id:"stack",children:[(0,l.jsx)(n.code,{children:"Stack"}),(0,l.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#stack",children:(0,l.jsx)(n.svg,{children:(0,l.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Removed the use of ",(0,l.jsx)(n.code,{children:"cloneElement"})," in favor of the ",(0,l.jsx)(n.code,{children:"gap"}),", ",(0,l.jsx)(n.code,{children:"columnGap"}),", and ",(0,l.jsx)(n.code,{children:"rowGap"})," props"]}),"\n"]}),"\n",(0,l.jsxs)(n.h3,{id:"tab",children:[(0,l.jsx)(n.code,{children:"Tab"}),(0,l.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#tab",children:(0,l.jsx)(n.svg,{children:(0,l.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Renamed the ",(0,l.jsx)(n.code,{children:"isActive"})," prop to ",(0,l.jsx)(n.code,{children:"isSelected"})]}),"\n"]}),"\n",(0,l.jsxs)(n.h3,{id:"tabs",children:[(0,l.jsx)(n.code,{children:"Tabs"}),(0,l.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#tabs",children:(0,l.jsx)(n.svg,{children:(0,l.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Removed ",(0,l.jsx)(n.code,{children:"activateOnKeyPress"}),", ",(0,l.jsx)(n.code,{children:"isFitted"}),", and ",(0,l.jsx)(n.code,{children:"isManual"})," props"]}),"\n",(0,l.jsxs)(n.li,{children:["Renamed ",(0,l.jsx)(n.code,{children:'variant="line"'})," to ",(0,l.jsx)(n.code,{children:'variant="default"'})]}),"\n",(0,l.jsxs)(n.li,{children:["Renamed ",(0,l.jsx)(n.code,{children:'variant="enclosed"'})," to ",(0,l.jsx)(n.code,{children:'variant="filled"'})]}),"\n"]}),"\n",(0,l.jsxs)(n.h3,{id:"tabpanel",children:[(0,l.jsx)(n.code,{children:"TabPanel"}),(0,l.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#tabpanel",children:(0,l.jsx)(n.svg,{children:(0,l.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Renamed the ",(0,l.jsx)(n.code,{children:"isActive"})," prop to ",(0,l.jsx)(n.code,{children:"isSelected"})]}),"\n"]}),"\n",(0,l.jsxs)(n.h3,{id:"table",children:[(0,l.jsx)(n.code,{children:"Table"}),(0,l.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#table",children:(0,l.jsx)(n.svg,{children:(0,l.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Removed the ",(0,l.jsx)(n.code,{children:"isHoverable"})," prop. Use the ",(0,l.jsx)(n.code,{children:"_hover"})," prop on the ",(0,l.jsx)(n.code,{children:"TableRow"})," component instead."]}),"\n"]}),"\n",(0,l.jsxs)(n.h3,{id:"tag",children:[(0,l.jsx)(n.code,{children:"Tag"}),(0,l.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#tag",children:(0,l.jsx)(n.svg,{children:(0,l.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Renamed the ",(0,l.jsx)(n.code,{children:"isCloseButtonVisible"})," prop to ",(0,l.jsx)(n.code,{children:"isClosable"})]}),"\n"]}),"\n",(0,l.jsxs)(n.h3,{id:"toast",children:[(0,l.jsx)(n.code,{children:"Toast"}),(0,l.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#toast",children:(0,l.jsx)(n.svg,{children:(0,l.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Renamed the ",(0,l.jsx)(n.code,{children:"isCloseButtonVisible"})," prop to ",(0,l.jsx)(n.code,{children:"isClosable"})]}),"\n"]}),"\n",(0,l.jsxs)(n.h3,{id:"tooltip",children:[(0,l.jsx)(n.code,{children:"Tooltip"}),(0,l.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#tooltip",children:(0,l.jsx)(n.svg,{children:(0,l.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Renamed the ",(0,l.jsx)(n.code,{children:"showDelay"})," prop to ",(0,l.jsx)(n.code,{children:"enterDelay"})]}),"\n",(0,l.jsxs)(n.li,{children:["Renamed the ",(0,l.jsx)(n.code,{children:"hideDelay"})," prop to ",(0,l.jsx)(n.code,{children:"leaveDelay"})]}),"\n",(0,l.jsxs)(n.li,{children:["Removed the ",(0,l.jsx)(n.code,{children:"shouldWrapChildren"})," prop. Use Function as Child Component (FaCC) to render the tooltip trigger instead."]}),"\n"]}),"\n",(0,l.jsxs)(n.h2,{id:"transition-updates",children:["Transition Updates",(0,l.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#transition-updates",children:(0,l.jsx)(n.svg,{children:(0,l.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,l.jsx)(n.p,{children:"The following components now have built-in transitions. Remember to remove all transitions from the following components:"}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{align:"left",children:"Component"}),(0,l.jsx)(n.th,{align:"left",children:"Composed Transition"}),(0,l.jsxs)(n.th,{align:"left",children:["The ",(0,l.jsx)(n.code,{children:"appear"})," Prop"]})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{align:"left",children:(0,l.jsx)(n.code,{children:"AccordionCollapse"})}),(0,l.jsx)(n.td,{align:"left",children:(0,l.jsx)(n.code,{children:"Collapse"})}),(0,l.jsx)(n.td,{align:"left",children:"false"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{align:"left",children:(0,l.jsx)(n.code,{children:"AccordionToggleIcon"})}),(0,l.jsx)(n.td,{align:"left",children:"built-in"}),(0,l.jsx)(n.td,{align:"left",children:"false"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{align:"left",children:(0,l.jsx)(n.code,{children:"DrawerContent"})}),(0,l.jsx)(n.td,{align:"left",children:(0,l.jsx)(n.code,{children:"Slide"})}),(0,l.jsx)(n.td,{align:"left",children:"true"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{align:"left",children:(0,l.jsx)(n.code,{children:"DrawerOverlay"})}),(0,l.jsx)(n.td,{align:"left",children:(0,l.jsx)(n.code,{children:"Fade"})}),(0,l.jsx)(n.td,{align:"left",children:"true"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{align:"left",children:(0,l.jsx)(n.code,{children:"MenuList"})}),(0,l.jsx)(n.td,{align:"left",children:(0,l.jsx)(n.code,{children:"Collapse"})}),(0,l.jsx)(n.td,{align:"left",children:"true"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{align:"left",children:(0,l.jsx)(n.code,{children:"MenuToggleIcon"})}),(0,l.jsx)(n.td,{align:"left",children:"built-in"}),(0,l.jsx)(n.td,{align:"left",children:"false"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{align:"left",children:(0,l.jsx)(n.code,{children:"ModalContent"})}),(0,l.jsx)(n.td,{align:"left",children:(0,l.jsx)(n.code,{children:"Fade"})}),(0,l.jsx)(n.td,{align:"left",children:"true"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{align:"left",children:(0,l.jsx)(n.code,{children:"ModalOverlay"})}),(0,l.jsx)(n.td,{align:"left",children:(0,l.jsx)(n.code,{children:"Fade"})}),(0,l.jsx)(n.td,{align:"left",children:"true"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{align:"left",children:(0,l.jsx)(n.code,{children:"PopoverContent"})}),(0,l.jsx)(n.td,{align:"left",children:(0,l.jsx)(n.code,{children:"Grow"})}),(0,l.jsx)(n.td,{align:"left",children:"true"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{align:"left",children:(0,l.jsx)(n.code,{children:"ToastTransition"})}),(0,l.jsx)(n.td,{align:"left",children:"built-in"}),(0,l.jsx)(n.td,{align:"left",children:"false"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{align:"left",children:(0,l.jsx)(n.code,{children:"Tooltip"})}),(0,l.jsx)(n.td,{align:"left",children:(0,l.jsx)(n.code,{children:"Grow"})}),(0,l.jsx)(n.td,{align:"left",children:"false"})]})]})]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"../components/transitions",children:"Transitions"})}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"../components/transitions/collapse",children:"Collapse"})," - internally used in ",(0,l.jsx)(n.code,{children:"Accordion"})," and ",(0,l.jsx)(n.code,{children:"Menu"})]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"../components/transitions/fade",children:"Fade"})," - internally used in ",(0,l.jsx)(n.code,{children:"Modal"})]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"../components/transitions/grow",children:"Grow"})," - internally used in ",(0,l.jsx)(n.code,{children:"Popover"})," and ",(0,l.jsx)(n.code,{children:"Tooltip"})]}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"../components/transitions/scale",children:"Scale"})}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"../components/transitions/slide",children:"Slide"})," - internally used in ",(0,l.jsx)(n.code,{children:"Drawer"})]}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"../components/transitions/zoom",children:"Zoom"})}),"\n"]}),"\n",(0,l.jsxs)(n.h3,{id:"drawer-1",children:["Drawer",(0,l.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#drawer-1",children:(0,l.jsx)(n.svg,{children:(0,l.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,l.jsxs)(n.p,{children:["The ",(0,l.jsx)(n.code,{children:"Drawer"})," component now has built-in transitions. Follow the diff below to remove transitions if present."]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-diff",children:'- <Slide\n-  in={isOpen}\n-  duration={250}\n-  from={placement}\n-  finalHeight="100vh"\n- >\n-   {styles => (\n      <Drawer\n        isClosable\n        isOpen={isOpen}\n      >\n-       <DrawerOverlay opacity={styles.opacity} />\n+       <DrawerOverlay />\n-       <DrawerContent {...styles}>\n+       <DrawerContent>\n          <DrawerBody>\n            Drawer body\n          </DrawerBody>\n        </DrawerContent>\n      </Drawer>\n-   )}\n- </Slide>\n'})}),"\n",(0,l.jsxs)(n.h3,{id:"modal-1",children:["Modal",(0,l.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#modal-1",children:(0,l.jsx)(n.svg,{children:(0,l.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,l.jsxs)(n.p,{children:["The ",(0,l.jsx)(n.code,{children:"Modal"})," component now has built-in transitions. Follow the diff below to remove transitions if present."]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-diff",children:"- <Scale\n-   in={isOpen}\n-   duration={150}\n- >\n-   {styles => (\n      <Modal\n        isClosable\n        isOpen={isOpen}\n      >\n-       <ModalOverlay opacity={styles.opacity} />\n+       <ModalOverlay />\n-       <ModalContent {...styles}>\n+       <ModalContent>\n          <ModalBody>\n            Modal body\n          <ModalBody>\n        </ModalContent>\n      </Modal>\n-   )}\n- </Scale>\n"})})]})}n.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,d.ah)(),e.components).wrapper;return n?(0,l.jsx)(n,Object.assign({},e,{children:(0,l.jsx)(s,e)})):s(e)}},84629:function(e,n,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/getting-started/migration-v0-to-v1",function(){return i(40609)}])}},function(e){e.O(0,[2888,9774,179],function(){return e(e.s=84629)}),_N_E=e.O()}]);