(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7390],{40606:function(e,o,n){"use strict";n.r(o),n.d(o,{default:function(){return i}});var t=n(7896),r=n(59740),l=(n(2784),n(30876)),a=["components"],s={};function i(e){var o=e.components,n=(0,r.Z)(e,a);return(0,l.kt)("wrapper",(0,t.Z)({},s,n,{components:o,mdxType:"MDXLayout"}),(0,l.kt)("h1",null,"Usage"),(0,l.kt)("p",null,"Get started with React and Tonic UI in no time."),(0,l.kt)("p",null,"You can use any of the components as demonstrated in the documentation. Please refer to each component's ",(0,l.kt)("a",{parentName:"p",href:"../components/button"},"demo page")," to see how they work."),(0,l.kt)("h2",null,"Quick Start"),(0,l.kt)("p",null,"Here is a quick example to get you started:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'<Button variant="primary">\n  Button\n</Button>\n')),(0,l.kt)("h2",null,"Setup Provider"),(0,l.kt)("p",null,"For Tonic UI to work, you will need to setup the ",(0,l.kt)("inlineCode",{parentName:"p"},"TonicProvder")," at the root of your application."),(0,l.kt)("p",null,"Go to the root of your application and do the following:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"disabled",disabled:!0},"import React from 'react';\nimport {\n  Box,\n  TonicProvider,\n  colorStyle, // [optional] It's required only when you want to customize the color style\n} from '@tonic-ui/react';\n\nfunction App(props) {\n  return (\n    <TonicProvider\n      colorMode={{\n        defaultValue: 'dark', // One of: 'dark', 'light'\n      }}\n      colorStyle={{\n        defaultValue: colorStyle, // Custom color style\n      }}\n      useCSSBaseline={true} // If `true`, apply CSS reset and base styles\n    >\n      <Box {...props} />\n    </TonicProvider>\n  );\n}\n")),(0,l.kt)("p",null,"See below for a more complete example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"disabled",disabled:!0},"import React from 'react';\nimport {\n  Box,\n  ToastProvider, // [optional] It's required only when you want to use toast notification globally\n  TonicProvider,\n  colorStyle, // [optional] It's required only when you want to customize the color style\n  useColorMode,\n  useTheme,\n} from '@tonic-ui/react';\n\nfunction App(props) {\n  return (\n    <TonicProvider\n      colorMode={{\n        defaultValue: 'dark', // One of: 'dark', 'light'\n      }}\n      colorStyle={{\n        defaultValue: colorStyle, // Custom color style\n      }}\n      useCSSBaseline={true} // If `true`, apply CSS reset and base styles\n    >\n      <ToastProvider>\n        <Layout>\n          <Box {...props} />\n        </Layout>\n      </ToastProvider>\n    </TonicProvider>\n  );\n}\n\nfunction Layout(props) {\n  const [colorMode] = useColorMode();\n  const [colorStyle] = useColorStyle({ colorMode });\n  const { fontSizes, lineHeights } = useTheme();\n  const backgroundColor = colorStyle.background.primary;\n  const color = colorStyle.color.primary;\n\n  return (\n    <>\n      <Global\n        styles={css`\n          :root {\n            color-scheme: ${colorMode};\n          }\n          :focus:not(:focus-visible) {\n            outline: none;\n          }\n          body {\n            font-size: ${fontSizes.sm};\n            line-height: ${lineHeights.sm};\n          }\n        `}\n      />\n      <Box\n        backgroundColor={backgroundColor}\n        color={color}\n        fontSize=\"sm\"\n        lineHeight=\"sm\"\n        height=\"100vh\"\n        {...props}\n      />\n    </>\n  );\n}\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Learn more about ",(0,l.kt)("a",{parentName:"p",href:"../components/color-mode"},"Color Mode")," in the documentation.")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Learn more about ",(0,l.kt)("a",{parentName:"p",href:"../components/color-style"},"Color Style")," in the documentation.")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"For the ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"color-scheme"))," CSS property, see ",(0,l.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/color-scheme"},"MDN")," for more information.")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"For the ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},":focus-visible"))," pseudo-class, see ",(0,l.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-visible"},"MDN")," for more information.")),(0,l.kt)("h2",null,"CSSBaseline"),(0,l.kt)("p",null,"Sometimes you may need to apply base CSS styles to your application. Tonic UI provides an optional ",(0,l.kt)("inlineCode",{parentName:"p"},"CSSBaseline")," component that fixes some inconsistencies across browsers and devices while providing slightly more opinionated resets to common HTML elements. ",(0,l.kt)("inlineCode",{parentName:"p"},"CSSBaseline")," is recommended to add at the root to ensure all components work correctly."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"disabled",disabled:!0},"<TonicProvider useCSSBaseline={true}>\n  <App />\n</TonicProvider>\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"If you are not writing an application, you may want to set ",(0,l.kt)("inlineCode",{parentName:"p"},"useCSSBaseline")," to ",(0,l.kt)("inlineCode",{parentName:"p"},"false")," (or not set it at all) to prevent global styles pollution.")),(0,l.kt)("h2",null,"Extending the Color Style"),(0,l.kt)("p",null,"Optionally, you can extend the color style by providing a custom color style. This is not required if you are using the default color style."),(0,l.kt)("h3",null,"1. Customizing the color style"),(0,l.kt)("p",null,"To override default color style, you can create a color style object according to the color mode, and pass the object to ",(0,l.kt)("inlineCode",{parentName:"p"},"TonicProvider")," with either the ",(0,l.kt)("inlineCode",{parentName:"p"},"value")," or the ",(0,l.kt)("inlineCode",{parentName:"p"},"defaultValue")," property."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"import { colorStyle } from '@tonic-ui/react';\n\n// Let's say you want to define color style for your components\nconst customColorStyle = {\n  ...colorStyle,\n  dark: {\n    ...colorStyle.dark,\n    component: {\n      header: {},\n      sidebar: {},\n    },\n  },\n  light: {\n    ...colorStyle.light,\n    component: {\n      header: {},\n      sidebar: {},\n    },\n  },\n};\n")),(0,l.kt)("h3",null,"2. Setting up the provider"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"disabled",disabled:!0},"<TonicProvider\n  colorMode={{\n    defaultValue: 'dark',\n  }}\n  colorStyle={{\n    defaultValue: customColorStyle,\n  }}\n  useCSSBaseline={true}\n>\n  {children}\n</TonicProvider>\n")),(0,l.kt)("h3",null,"3. Using the color style"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"disabled",disabled:!0},"const [colorMode] = useColorMode();\nconst [colorStyle] = useColorStyle({ colorMode });\nconst headerStyle = colorStyle?.component?.header;\nconst sidebarStyle = colorStyle?.component?.sidebar;\n")),(0,l.kt)("h2",null,"Extending the Theme"),(0,l.kt)("p",null,"Optionally, you can extend the theme object to override the defaults with custom colors, fonts, styles, etc. This is not required if you are using the default theme."),(0,l.kt)("h3",null,"1. Overriding the theme"),(0,l.kt)("p",null,"Override the theme object and pass it to the ",(0,l.kt)("inlineCode",{parentName:"p"},"<ThemeProvider>")," component."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'import { theme } from \'@tonic-ui/react\';\n\n// Let\'s say you want to add more colors\nconst customTheme = {\n  ...theme,\n  colors: {\n    ...theme.colors,\n    brand: {\n      90: "#1a365d",\n      80: "#153e75",\n      70: "#2a69ac",\n    },\n  },\n};\n')),(0,l.kt)("h3",null,"2. Setting up the provider"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"disabled",disabled:!0},"<TonicProvider theme={customTheme}>\n  {children}\n</TonicProvider>\n")),(0,l.kt)("h3",null,"3. Using the theme"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"disabled",disabled:!0},"const theme = useTheme();\nconst brandColor = theme?.colors?.brand?.[90];\n")),(0,l.kt)("h2",null,"Versioned Documentation"),(0,l.kt)("p",null,"This documentation always reflects the latest version of Tonic UI. You can find older versions of the documentation ",(0,l.kt)("a",{parentName:"p",href:"versions"},"here"),"."))}i.isMDXComponent=!0},41710:function(e,o,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/getting-started/usage",function(){return n(40606)}])}},function(e){e.O(0,[9774,2888,179],(function(){return o=41710,e(e.s=o);var o}));var o=e.O();_N_E=o}]);