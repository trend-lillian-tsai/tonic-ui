(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9283],{2251:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return MDXContent}}),t(2784);var a=t(30876),o=["components"];function _extends(){return(_extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(n[a]=t[a])}return n}).apply(this,arguments)}var r={};function MDXContent(n){var e=n.components,t=function(n,e){if(null==n)return{};var t,a,o=function(n,e){if(null==n)return{};var t,a,o={},r=Object.keys(n);for(a=0;a<r.length;a++)t=r[a],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);for(a=0;a<r.length;a++)t=r[a],!(e.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}(n,o);return(0,a.kt)("wrapper",_extends({},r,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",null,"Badge"),(0,a.kt)("p",null,"Badges are used to highlight an item's status for quick recognition."),(0,a.kt)("h2",null,"Import"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import { Badge } from '@trendmicro/react-styled-ui';\n")),(0,a.kt)("h2",null,"Usage"),(0,a.kt)("h3",null,"Basic badge"),(0,a.kt)("p",null,"To display the badge on the top-right corner of the wrapped component, specify the ",(0,a.kt)("inlineCode",{parentName:"p"},"badgeContent")," prop with the desired content."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'<Grid\n  columnGap="8x"\n  justifyItems="center"\n  rowGap="8x"\n  templateColumns="repeat(5,1fr)"\n  width="min-content"\n>\n  <Badge>\n    <Icon icon="alert" />\n  </Badge>\n  <Badge badgeContent={0}>\n    <Icon icon="alert" />\n  </Badge>\n  <Badge badgeContent={5}>\n    <Icon icon="alert" />\n  </Badge>\n  <Badge badgeContent="99+">\n    <Icon icon="alert" />\n  </Badge>\n  <Badge\n    badgeContent={<Text fontFamily="mono" fontSize="xs">!</Text>}\n  >\n    <Icon icon="alert" />\n  </Badge>\n  <Badge>\n    <Skeleton variant="rect" borderRadius="sm" width="8x" height="8x" />\n  </Badge>\n  <Badge badgeContent={0}>\n    <Skeleton variant="rect" borderRadius="sm" width="8x" height="8x" />\n  </Badge>\n  <Badge badgeContent={5}>\n    <Skeleton variant="rect" borderRadius="sm" width="8x" height="8x" />\n  </Badge>\n  <Badge badgeContent="99+">\n    <Skeleton variant="rect" borderRadius="sm" width="8x" height="8x" />\n  </Badge>\n  <Badge\n    badgeContent={<Text fontFamily="mono" fontSize="xs">!</Text>}\n  >\n    <Skeleton variant="rect" borderRadius="sm" width="8x" height="8x" />\n  </Badge>\n</Grid>\n')),(0,a.kt)("h3",null,"Dot badge"),(0,a.kt)("p",null,"Use ",(0,a.kt)("inlineCode",{parentName:"p"},'variant="dot"')," to change a badge into a small dot. This can be used as a notification that something has changed without giving a count."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'<Stack direction="row" spacing="8x" shouldWrapChildren>\n  // Pass `isInvisible` to make it invisible\n  <Badge variant="dot" isInvisible>\n    <Icon icon="alert" />\n  </Badge>\n  <Badge variant="dot">\n    <Icon icon="alert" />\n  </Badge>\n  <Badge variant="dot" width="3x" height="3x">\n    <Icon icon="alert" />\n  </Badge>\n</Stack>\n')),(0,a.kt)("h3",null,"Standalone badge"),(0,a.kt)("p",null,"The badge can be used as a standalone component. This can be useful for displaying a badge without a surrounding element."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'<Stack direction="row" spacing="8x" alignItems="center">\n  <Badge variant="dot" />\n  <Badge variant="solid" badgeContent={0} />\n  <Badge variant="solid" badgeContent={5} />\n  <Badge variant="solid" badgeContent="99+" />\n  <Badge variant="solid" badgeContent={<Icon icon="virus" size="4x" />} height="6x" />\n</Stack>\n')),(0,a.kt)("h3",null,"Badge alignment"),(0,a.kt)("p",null,"You can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"placement")," prop to move the badge to any corner of the wrapped element. The default placement is ",(0,a.kt)("inlineCode",{parentName:"p"},"top-right"),". The ",(0,a.kt)("inlineCode",{parentName:"p"},"placement")," prop can be one of ",(0,a.kt)("inlineCode",{parentName:"p"},"top-left"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"top-right"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"bottom-left"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"bottom-right"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'<Grid\n  columnGap="8x"\n  rowGap="8x"\n  templateColumns="1fr 1fr"\n  width="min-content"\n>\n  <Badge placement="top-left" badgeContent={1}>\n    <Icon icon="alert" />\n  </Badge>\n  <Badge placement="top-right" badgeContent={1}>\n    <Icon icon="alert" />\n  </Badge>\n  <Badge placement="bottom-left" badgeContent={1}>\n    <Icon icon="alert" />\n  </Badge>\n  <Badge placement="bottom-right" badgeContent={1}>\n    <Icon icon="alert" />\n  </Badge>\n</Grid>\n')),(0,a.kt)("h3",null,"Badge visibility"),(0,a.kt)("p",null,"The badge visibility can be controlled using the ",(0,a.kt)("inlineCode",{parentName:"p"},"isInvisible")," prop."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'function Example() {\n  const [count, setCount] = React.useState(1);\n  const [isInvisible, setIsInvisible] = React.useState(false);\n\n  return (\n    <Stack direction="column" spacing="8x">\n      <Flex align="center">\n        <Box mr="8x">\n          <Badge badgeContent={count} isInvisible={!(count > 0)}>\n            <Icon icon="alert" />\n          </Badge>\n        </Box>\n        <ButtonGroup\n          variant="secondary"\n        >\n          <Button\n            aria-label="decrease"\n            onClick={() => {\n              setCount(Math.max(count - 1, 0));\n            }}\n          >\n            <Icon icon="minus" />\n          </Button>\n          <Button\n            aria-label="increase"\n            onClick={() => {\n              setCount(Math.max(count + 1, 0));\n            }}\n          >\n            <Icon icon="add" />\n          </Button>\n        </ButtonGroup>\n      </Flex>\n      <Flex alignItems="center">\n        <Box mr="8x">\n          <Badge\n            variant="dot"\n            isInvisible={isInvisible}\n          >\n            <Icon icon="alert" />\n          </Badge>\n        </Box>\n        <TextLabel cursor="pointer">\n          <Flex align="center">\n            <Switch\n              size="md"\n              checked={!isInvisible}\n              onChange={() => {\n                setIsInvisible(!isInvisible);\n              }}\n            />\n            <Space width="2x" />\n            <Text userSelect="none">Show Badge</Text>\n          </Flex>\n        </TextLabel>\n      </Flex>\n    </Stack>\n  );\n}\n')),(0,a.kt)("h3",null,"Color"),(0,a.kt)("p",null,"The color of the badge can be changed by passing the ",(0,a.kt)("inlineCode",{parentName:"p"},"backgroundColor")," prop. See the ",(0,a.kt)("a",{parentName:"p",href:"./colors"},"colors")," section to learn more about colors."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"function Example() {\n  const colors = [\n    'red:60',\n    'orange:50',\n    'yellow:50',\n    'green:60',\n    'blue:60',\n    'gray:60',\n    'magenta:60',\n    'purple:60',\n    'teal:60',\n    'cyan:60',\n  ];\n\n  return (\n    <Stack direction=\"row\" spacing=\"8x\" shouldWrapChildren>\n      {colors.map(color => (\n        <Badge key={color} backgroundColor={color} badgeContent={5}>\n          <Skeleton variant=\"rect\" borderRadius=\"sm\" width=\"8x\" height=\"8x\" />\n        </Badge>\n      ))}\n    </Stack>\n  );\n}\n")),(0,a.kt)("h3",null,"Size"),(0,a.kt)("p",null,"The size of the badge can be changed by passing the ",(0,a.kt)("inlineCode",{parentName:"p"},"height")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"minWidth")," props."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'<Stack direction="row" spacing="8x" shouldWrapChildren>\n  <Badge badgeContent={5} height="4x" minWidth="4x" fontSize="xs">\n    <Skeleton variant="rect" borderRadius="sm" width="8x" height="8x" />\n  </Badge>\n  <Badge badgeContent={5} height="5x" minWidth="5x" fontSize="sm">\n    <Skeleton variant="rect" borderRadius="sm" width="8x" height="8x" />\n  </Badge>\n  <Badge badgeContent={5} height="6x" minWidth="6x" fontSize="md">\n    <Skeleton variant="rect" borderRadius="sm" width="8x" height="8x" />\n  </Badge>\n</Stack>\n')),(0,a.kt)("h3",null,"Customization"),(0,a.kt)("p",null,"You can customize the badge style by passing style props. See the following example to learn how to create a outline badge."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"noInline",noInline:!0},'const OutlineBadge = React.forwardRef((props, ref) => {\n  const [colorMode] = useColorMode();\n  const backgroundColor = {\n    dark: \'gray:100\',\n    light: \'white\',\n  }[colorMode];\n  const borderColor = {\n    dark: \'yellow:50\',\n    light: \'yellow:50\',\n  }[colorMode];\n  const borderStyle = \'solid\';\n  const borderWidth = \'2px\';\n  const color = {\n    dark: \'white:primary\',\n    light: \'black:primary\',\n  }[colorMode];\n  const height = \'5x\';\n  const minWidth = \'5x\';\n\n  return (\n    <Badge\n      ref={ref}\n      backgroundColor={backgroundColor}\n      borderColor={borderColor}\n      borderStyle={borderStyle}\n      borderWidth={borderWidth}\n      color={color}\n      height={height}\n      minWidth={minWidth}\n      {...props}\n    />\n  );\n});\n\nfunction Example() {\n  return (\n    <Grid\n      columnGap="8x"\n      justifyItems="center"\n      rowGap="8x"\n      templateColumns="repeat(3,1fr)"\n      width="min-content"\n    >\n      <OutlineBadge badgeContent={0}>\n        <Skeleton variant="rect" borderRadius="sm" width="8x" height="8x" />\n      </OutlineBadge>\n      <OutlineBadge badgeContent="99+">\n        <Skeleton variant="rect" borderRadius="sm" width="8x" height="8x" />\n      </OutlineBadge>\n      <OutlineBadge\n        badgeContent={<Text fontFamily="mono" fontSize="xs">!</Text>}\n      >\n        <Skeleton variant="rect" borderRadius="sm" width="8x" height="8x" />\n      </OutlineBadge>\n    </Grid>\n  );\n}\n\nrender(<Example />);\n')),(0,a.kt)("h2",null,"Props"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"badgeContent"),(0,a.kt)("td",{parentName:"tr",align:"left"},"node ","|"," number ","|"," string"),(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"The badge content.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"isInvisible"),(0,a.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"Whether the badge is invisible.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"placement"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:"left"},"'top-right'"),(0,a.kt)("td",{parentName:"tr",align:"left"},"The placement of the badge. One of: 'top-left', 'top-right', 'bottom-left', 'bottom-right'.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"variant"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:"left"},"'solid'"),(0,a.kt)("td",{parentName:"tr",align:"left"},"One of: 'solid', 'dot'")))))}MDXContent.isMDXComponent=!0},63638:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/badge",function(){return t(2251)}])}},function(n){n.O(0,[9774,2888,179],function(){return n(n.s=63638)}),_N_E=n.O()}]);