(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1186],{12221:function(n,t,o){"use strict";o.r(t),o.d(t,{default:function(){return s}});var e=o(7896),r=o(59740),a=(o(2784),o(30876)),l=["components"],i={};function s(n){var t=n.components,o=(0,r.Z)(n,l);return(0,a.kt)("wrapper",(0,e.Z)({},i,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",null,"ButtonBase"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ButtonBase")," does not have appearance settings including default border, color, outline, and padding. It aims to be a simple building block for creating a button."),(0,a.kt)("h2",null,"Import"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import { ButtonBase } from '@tonic-ui/react';\n")),(0,a.kt)("h2",null,"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"<ButtonBase>Click Me</ButtonBase>\n")),(0,a.kt)("h3",null,"Attributes"),(0,a.kt)("p",null,"Standard button attributes are supported, e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"type"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"disabled"),", etc."),(0,a.kt)("h4",null,(0,a.kt)("inlineCode",{parentName:"h4"},"disabled")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"<ButtonBase\n  disabled\n  _disabled={{\n    opacity: 0.28, // dark: 0.28, light: 0.3\n    cursor: 'not-allowed',\n  }}\n>\n  Button is disabled\n</ButtonBase>\n")),(0,a.kt)("h3",null,"Icon button"),(0,a.kt)("p",null,"You can use ",(0,a.kt)("inlineCode",{parentName:"p"},"ButtonBase")," to compose an icon button. An icon button is a button that contains only an icon."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"noInline",noInline:!0},"const IconButton = React.forwardRef((props, ref) => {\n  const [colorMode] = useColorMode();\n  const { colors } = useTheme();\n  const color = {\n    dark: 'white:secondary',\n    light: 'black:secondary',\n  }[colorMode];\n  const hoverColor = {\n    dark: 'white:primary',\n    light: 'black:primary',\n  }[colorMode];\n  const activeColor = color;\n  const focusColor = color;\n  const focusHoverColor = hoverColor;\n  const focusActiveColor = activeColor;\n  const focusBorderColor = colors['blue:60'];\n\n  return (\n    <ButtonBase\n      ref={ref}\n      border={1}\n      borderColor=\"transparent\"\n      color={color}\n      transition=\"all .2s\"\n      lineHeight={1}\n      px=\"2x\"\n      py=\"2x\"\n      _hover={{\n        color: hoverColor,\n      }}\n      _active={{\n        color: activeColor,\n      }}\n      _focus={{\n        borderColor: focusBorderColor,\n        boxShadow: `inset 0 0 0 1px ${focusBorderColor}`,\n        color: focusColor,\n      }}\n      _focusHover={{\n        color: focusHoverColor,\n      }}\n      _focusActive={{\n        borderColor: focusBorderColor,\n        boxShadow: `inset 0 0 0 1px ${focusBorderColor}`,\n        color: focusActiveColor,\n      }}\n      {...props}\n    />\n  );\n});\n\nfunction Example() {\n  return (\n    <IconButton>\n      <Icon icon=\"close\" />\n    </IconButton>\n  );\n}\n\nrender(<Example />);\n")),(0,a.kt)("h3",null,"Notification action button"),(0,a.kt)("p",null,"To perform an action on an alert or toast notification, you can use ",(0,a.kt)("inlineCode",{parentName:"p"},"ButtonBase")," to compose an action button using style props, or override ",(0,a.kt)("inlineCode",{parentName:"p"},"Button")," with the ",(0,a.kt)("inlineCode",{parentName:"p"},"css")," prop to customize the appearance."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// import\nimport { sx } from '@tonic-ui/styled-system';\n\n// example\nconst ActionButton = forwardRef((props, ref) => (\n  <Button\n    ref={ref}\n    variant=\"secondary\"\n    borderColor=\"black:primary\"\n    color=\"black:primary\"\n    css={sx({\n      ':active': {\n        color: 'black:primary',\n      },\n      ':focus': {\n        color: 'black:primary',\n      },\n      ':hover': {\n        background: 'rgba(0, 0, 0, 0.12)',\n        color: 'black:primary',\n      },\n      ':hover:not(:focus)': {\n        boxShadow: 'none',\n      },\n    })}\n    {...props}\n  />\n));\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("inlineCode",{parentName:"p"},"sx")," is a utility function provided by ",(0,a.kt)("inlineCode",{parentName:"p"},"@tonic-ui/styled-system")," that can specify style prop value with theme tokens when using the ",(0,a.kt)("inlineCode",{parentName:"p"},"css")," prop on a styled component.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"noInline",noInline:!0},"const ActionButton = React.forwardRef((props, ref) => (\n  <Button\n    ref={ref}\n    variant=\"secondary\"\n    borderColor=\"black:primary\"\n    color=\"black:primary\"\n    css={sx({\n      ':active': {\n        color: 'black:primary',\n      },\n      ':focus': {\n        color: 'black:primary',\n      },\n      ':hover': {\n        background: 'rgba(0, 0, 0, 0.12)',\n        color: 'black:primary',\n      },\n      ':hover:not(:focus)': {\n        boxShadow: 'none',\n      },\n    })}\n    {...props}\n  />\n));\n\nfunction Example() {\n  return (\n    <Alert variant=\"solid\" severity=\"error\" isClosable>\n      <Flex justifyContent=\"space-between\">\n        <Text>\n          This is an alert notification with an action button.\n        </Text>\n        <ActionButton size=\"sm\">\n          Action Button\n        </ActionButton>\n      </Flex>\n    </Alert>\n  );\n}\n\nrender(<Example />);\n")),(0,a.kt)("h2",null,"Props"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"disabled"),(0,a.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"If ",(0,a.kt)("inlineCode",{parentName:"td"},"true"),", the button will be disabled. This sets ",(0,a.kt)("inlineCode",{parentName:"td"},"aria-disabled=true")," and you can style this state by passing the ",(0,a.kt)("inlineCode",{parentName:"td"},"_disabled")," prop.")))))}s.isMDXComponent=!0},52050:function(n,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/buttonbase",function(){return o(12221)}])}},function(n){n.O(0,[9774,2888,179],(function(){return t=52050,n(n.s=t);var t}));var t=n.O();_N_E=t}]);