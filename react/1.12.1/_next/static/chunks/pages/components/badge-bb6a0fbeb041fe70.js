(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3899],{12907:function(n,e,t){"use strict";t.r(e);var a=t(52322),i=t(45392);function d(n){var e=Object.assign({div:"div",h1:"h1",p:"p",h2:"h2",a:"a",svg:"svg",use:"use",pre:"pre",code:"code",h3:"h3",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,i.ah)(),n.components);return(0,a.jsxs)(e.div,{className:"main-content",id:"main-content",children:[(0,a.jsx)(e.h1,{id:"badge",children:"Badge"}),"\n",(0,a.jsx)(e.p,{children:"Badges are used to highlight an item's status for quick recognition."}),"\n",(0,a.jsxs)(e.h2,{id:"import",children:["Import",(0,a.jsx)(e.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#import",children:(0,a.jsx)(e.svg,{children:(0,a.jsx)(e.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-js",children:"import { Badge } from '@tonic-ui/react';\n"})}),"\n",(0,a.jsxs)(e.h2,{id:"usage",children:["Usage",(0,a.jsx)(e.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#usage",children:(0,a.jsx)(e.svg,{children:(0,a.jsx)(e.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,a.jsxs)(e.h3,{id:"basic-badge",children:["Basic badge",(0,a.jsx)(e.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#basic-badge",children:(0,a.jsx)(e.svg,{children:(0,a.jsx)(e.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,a.jsxs)(e.p,{children:["To display the badge on the top-right corner of the wrapped component, specify the ",(0,a.jsx)(e.code,{children:"badgeContent"})," prop with the desired content."]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-jsx",children:'<Grid\n  mt="2x"\n  columnGap="8x"\n  justifyItems="center"\n  rowGap="8x"\n  templateColumns="repeat(5,1fr)"\n  width="min-content"\n>\n  <Badge>\n    <Icon icon="alert" />\n  </Badge>\n  <Badge badgeContent={0}>\n    <Icon icon="alert" />\n  </Badge>\n  <Badge badgeContent={5}>\n    <Icon icon="alert" />\n  </Badge>\n  <Badge badgeContent="99+">\n    <Icon icon="alert" />\n  </Badge>\n  <Badge\n    badgeContent={<Text fontFamily="mono" fontSize="xs">!</Text>}\n  >\n    <Icon icon="alert" />\n  </Badge>\n  <Badge>\n    <Skeleton variant="rectangle" borderRadius="sm" width="8x" height="8x" />\n  </Badge>\n  <Badge badgeContent={0}>\n    <Skeleton variant="rectangle" borderRadius="sm" width="8x" height="8x" />\n  </Badge>\n  <Badge badgeContent={5}>\n    <Skeleton variant="rectangle" borderRadius="sm" width="8x" height="8x" />\n  </Badge>\n  <Badge badgeContent="99+">\n    <Skeleton variant="rectangle" borderRadius="sm" width="8x" height="8x" />\n  </Badge>\n  <Badge\n    badgeContent={<Text fontFamily="mono" fontSize="xs">!</Text>}\n  >\n    <Skeleton variant="rectangle" borderRadius="sm" width="8x" height="8x" />\n  </Badge>\n</Grid>\n'})}),"\n",(0,a.jsxs)(e.h3,{id:"dot-badge",children:["Dot badge",(0,a.jsx)(e.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#dot-badge",children:(0,a.jsx)(e.svg,{children:(0,a.jsx)(e.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,a.jsxs)(e.p,{children:["Use ",(0,a.jsx)(e.code,{children:'variant="dot"'})," to change a badge into a small dot. This can be used as a notification that something has changed without giving a count."]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-jsx",children:'<Stack mt="2x" direction="row" spacing="8x" shouldWrapChildren>\n  // Pass `isInvisible` to make it invisible\n  <Badge variant="dot" isInvisible>\n    <Icon icon="alert" />\n  </Badge>\n  <Badge variant="dot">\n    <Icon icon="alert" />\n  </Badge>\n  <Badge variant="dot" width="3x" height="3x">\n    <Icon icon="alert" />\n  </Badge>\n</Stack>\n'})}),"\n",(0,a.jsxs)(e.h3,{id:"standalone-badge",children:["Standalone badge",(0,a.jsx)(e.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#standalone-badge",children:(0,a.jsx)(e.svg,{children:(0,a.jsx)(e.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,a.jsx)(e.p,{children:"The badge can be used as a standalone component. This can be useful for displaying a badge without a surrounding element."}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-jsx",children:'<Stack direction="row" spacing="8x" alignItems="center">\n  <Badge variant="dot" />\n  <Badge variant="solid" badgeContent={0} />\n  <Badge variant="solid" badgeContent={5} />\n  <Badge variant="solid" badgeContent="99+" />\n  <Badge variant="solid" badgeContent={<Icon icon="virus" size="4x" />} height="6x" />\n</Stack>\n'})}),"\n",(0,a.jsxs)(e.h3,{id:"badge-alignment",children:["Badge alignment",(0,a.jsx)(e.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#badge-alignment",children:(0,a.jsx)(e.svg,{children:(0,a.jsx)(e.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,a.jsxs)(e.p,{children:["You can use the ",(0,a.jsx)(e.code,{children:"placement"})," prop to move the badge to any corner of the wrapped element. The default placement is ",(0,a.jsx)(e.code,{children:"top-right"}),". The ",(0,a.jsx)(e.code,{children:"placement"})," prop can be one of ",(0,a.jsx)(e.code,{children:"top-left"}),", ",(0,a.jsx)(e.code,{children:"top-right"}),", ",(0,a.jsx)(e.code,{children:"bottom-left"}),", ",(0,a.jsx)(e.code,{children:"bottom-right"}),"."]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-jsx",children:'<Grid\n  m="2x"\n  columnGap="8x"\n  rowGap="8x"\n  templateColumns="1fr 1fr"\n  width="min-content"\n>\n  <Badge placement="top-left" badgeContent={1}>\n    <Icon icon="alert" />\n  </Badge>\n  <Badge placement="top-right" badgeContent={1}>\n    <Icon icon="alert" />\n  </Badge>\n  <Badge placement="bottom-left" badgeContent={1}>\n    <Icon icon="alert" />\n  </Badge>\n  <Badge placement="bottom-right" badgeContent={1}>\n    <Icon icon="alert" />\n  </Badge>\n</Grid>\n'})}),"\n",(0,a.jsxs)(e.h3,{id:"badge-visibility",children:["Badge visibility",(0,a.jsx)(e.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#badge-visibility",children:(0,a.jsx)(e.svg,{children:(0,a.jsx)(e.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,a.jsxs)(e.p,{children:["The badge visibility can be controlled using the ",(0,a.jsx)(e.code,{children:"isInvisible"})," prop."]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-jsx",children:'function Example() {\n  const [count, setCount] = React.useState(1);\n  const [isInvisible, setIsInvisible] = React.useState(false);\n\n  return (\n    <Stack mt="1x" direction="column" spacing="8x">\n      <Flex alignItems="center">\n        <Box mr="8x">\n          <Badge badgeContent={count} isInvisible={!(count > 0)}>\n            <Icon icon="alert" />\n          </Badge>\n        </Box>\n        <ButtonGroup\n          variant="secondary"\n        >\n          <Button\n            aria-label="decrease"\n            onClick={() => {\n              setCount(Math.max(count - 1, 0));\n            }}\n          >\n            <Icon icon="minus" />\n          </Button>\n          <Button\n            aria-label="increase"\n            onClick={() => {\n              setCount(Math.max(count + 1, 0));\n            }}\n          >\n            <Icon icon="add" />\n          </Button>\n        </ButtonGroup>\n      </Flex>\n      <Flex alignItems="center">\n        <Box mr="8x">\n          <Badge\n            variant="dot"\n            isInvisible={isInvisible}\n          >\n            <Icon icon="alert" />\n          </Badge>\n        </Box>\n        <TextLabel cursor="pointer">\n          <Flex alignItems="center">\n            <Switch\n              size="md"\n              checked={!isInvisible}\n              onChange={() => {\n                setIsInvisible(!isInvisible);\n              }}\n            />\n            <Space width="2x" />\n            <Text userSelect="none">Show Badge</Text>\n          </Flex>\n        </TextLabel>\n      </Flex>\n    </Stack>\n  );\n}\n'})}),"\n",(0,a.jsxs)(e.h3,{id:"color",children:["Color",(0,a.jsx)(e.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#color",children:(0,a.jsx)(e.svg,{children:(0,a.jsx)(e.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,a.jsxs)(e.p,{children:["The color of the badge can be changed by passing the ",(0,a.jsx)(e.code,{children:"backgroundColor"})," prop. See the ",(0,a.jsx)(e.a,{href:"../theme/colors",children:"colors"})," section to learn more about colors."]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-jsx",children:"function Example() {\n  const colors = [\n    'red:60',\n    'orange:50',\n    'yellow:50',\n    'green:60',\n    'blue:60',\n    'gray:60',\n    'magenta:60',\n    'purple:60',\n    'teal:60',\n    'cyan:60',\n  ];\n\n  return (\n    <Grid\n      mt=\"2x\"\n      columnGap=\"8x\"\n      rowGap=\"8x\"\n      templateColumns=\"repeat(auto-fill, minmax(40px, 1fr))\"\n    >\n      {colors.map(color => (\n        <Badge key={color} backgroundColor={color} badgeContent={5}>\n          <Skeleton variant=\"rectangle\" borderRadius=\"sm\" width=\"8x\" height=\"8x\" />\n        </Badge>\n      ))}\n    </Grid>\n  );\n}\n"})}),"\n",(0,a.jsxs)(e.h3,{id:"size",children:["Size",(0,a.jsx)(e.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#size",children:(0,a.jsx)(e.svg,{children:(0,a.jsx)(e.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,a.jsxs)(e.p,{children:["The size of the badge can be changed by passing the ",(0,a.jsx)(e.code,{children:"height"})," and ",(0,a.jsx)(e.code,{children:"minWidth"})," props."]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-jsx",children:'<Stack mt="3x" direction="row" spacing="8x" shouldWrapChildren>\n  <Badge badgeContent={5} height="4x" minWidth="4x" fontSize="xs">\n    <Skeleton variant="rectangle" borderRadius="sm" width="8x" height="8x" />\n  </Badge>\n  <Badge badgeContent={5} height="5x" minWidth="5x" fontSize="sm">\n    <Skeleton variant="rectangle" borderRadius="sm" width="8x" height="8x" />\n  </Badge>\n  <Badge badgeContent={5} height="6x" minWidth="6x" fontSize="md">\n    <Skeleton variant="rectangle" borderRadius="sm" width="8x" height="8x" />\n  </Badge>\n</Stack>\n'})}),"\n",(0,a.jsxs)(e.h3,{id:"customization",children:["Customization",(0,a.jsx)(e.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#customization",children:(0,a.jsx)(e.svg,{children:(0,a.jsx)(e.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,a.jsx)(e.p,{children:"You can customize the badge style by passing style props. See the following example to learn how to create a outline badge."}),"\n",(0,a.jsx)(e.pre,{noInline:!0,children:(0,a.jsx)(e.code,{className:"language-jsx",children:'const OutlineBadge = React.forwardRef((props, ref) => {\n  const [colorMode] = useColorMode();\n  const backgroundColor = {\n    dark: \'gray:100\',\n    light: \'white\',\n  }[colorMode];\n  const borderColor = {\n    dark: \'yellow:50\',\n    light: \'yellow:50\',\n  }[colorMode];\n  const borderStyle = \'solid\';\n  const borderWidth = \'2px\';\n  const color = {\n    dark: \'white:primary\',\n    light: \'black:primary\',\n  }[colorMode];\n  const height = \'5x\';\n  const minWidth = \'5x\';\n\n  return (\n    <Badge\n      ref={ref}\n      backgroundColor={backgroundColor}\n      borderColor={borderColor}\n      borderStyle={borderStyle}\n      borderWidth={borderWidth}\n      color={color}\n      height={height}\n      minWidth={minWidth}\n      {...props}\n    />\n  );\n});\n\nfunction Example() {\n  return (\n    <Grid\n      mt="3x"\n      columnGap="8x"\n      justifyItems="center"\n      rowGap="8x"\n      templateColumns="repeat(3,1fr)"\n      width="min-content"\n    >\n      <OutlineBadge badgeContent={0}>\n        <Skeleton variant="rectangle" borderRadius="sm" width="8x" height="8x" />\n      </OutlineBadge>\n      <OutlineBadge badgeContent="99+">\n        <Skeleton variant="rectangle" borderRadius="sm" width="8x" height="8x" />\n      </OutlineBadge>\n      <OutlineBadge\n        badgeContent={<Text fontFamily="mono" fontSize="xs">!</Text>}\n      >\n        <Skeleton variant="rectangle" borderRadius="sm" width="8x" height="8x" />\n      </OutlineBadge>\n    </Grid>\n  );\n}\n\nrender(<Example />);\n'})}),"\n",(0,a.jsxs)(e.h2,{id:"props",children:["Props",(0,a.jsx)(e.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#props",children:(0,a.jsx)(e.svg,{children:(0,a.jsx)(e.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,a.jsxs)(e.h3,{id:"badge-1",children:["Badge",(0,a.jsx)(e.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#badge-1",children:(0,a.jsx)(e.svg,{children:(0,a.jsx)(e.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,a.jsxs)(e.table,{children:[(0,a.jsx)(e.thead,{children:(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.th,{align:"left",children:"Name"}),(0,a.jsx)(e.th,{align:"left",children:"Type"}),(0,a.jsx)(e.th,{align:"left",children:"Default"}),(0,a.jsx)(e.th,{align:"left",children:"Description"})]})}),(0,a.jsxs)(e.tbody,{children:[(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.td,{align:"left",children:"children"}),(0,a.jsx)(e.td,{align:"left",children:"ReactNode"}),(0,a.jsx)(e.td,{align:"left"}),(0,a.jsx)(e.td,{align:"left"})]}),(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.td,{align:"left",children:"badgeContent"}),(0,a.jsx)(e.td,{align:"left",children:"ReactNode | number | string"}),(0,a.jsx)(e.td,{align:"left"}),(0,a.jsx)(e.td,{align:"left",children:"The badge content."})]}),(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.td,{align:"left",children:"isInvisible"}),(0,a.jsx)(e.td,{align:"left",children:"boolean"}),(0,a.jsx)(e.td,{align:"left"}),(0,a.jsx)(e.td,{align:"left",children:"Whether the badge is invisible."})]}),(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.td,{align:"left",children:"placement"}),(0,a.jsx)(e.td,{align:"left",children:"string"}),(0,a.jsx)(e.td,{align:"left",children:"'top-right'"}),(0,a.jsx)(e.td,{align:"left",children:"The placement of the badge. One of: 'top-left', 'top-right', 'bottom-left', 'bottom-right'."})]}),(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.td,{align:"left",children:"variant"}),(0,a.jsx)(e.td,{align:"left",children:"string"}),(0,a.jsx)(e.td,{align:"left",children:"'solid'"}),(0,a.jsx)(e.td,{align:"left",children:"One of: 'solid', 'dot'"})]})]})]})]})}e.default=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=Object.assign({},(0,i.ah)(),n.components).wrapper;return e?(0,a.jsx)(e,Object.assign({},n,{children:(0,a.jsx)(d,n)})):d(n)}},9228:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/badge",function(){return t(12907)}])}},function(n){n.O(0,[9774,2888,179],function(){return n(n.s=9228)}),_N_E=n.O()}]);