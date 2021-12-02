(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6050],{90467:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return g}});var a=n(7896),l=n(59740),r=(n(2784),n(30876)),i=["components"],o={};function g(e){var t=e.components,n=(0,l.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",null,"Pagination"),(0,r.kt)("p",null,"Pagination"),(0,r.kt)("h2",null,"Import"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { Pagination } from '@trendmicro/react-styled-ui';\n")),(0,r.kt)("h2",null,"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"<Pagination count={10} />\n")),(0,r.kt)("h3",null,"Disable"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"<Pagination count={10} disabled />\n")),(0,r.kt)("h3",null,"Default page"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"<Pagination count={10} defaultPage={5} />\n")),(0,r.kt)("h3",null,"On page change"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"<Pagination\n  count={10}\n  onChange={(event, value) => console.log(event, value)}\n/>\n")),(0,r.kt)("h3",null,"Boundary count"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"<Pagination count={20} boundaryCount={2} />\n")),(0,r.kt)("h3",null,"Sibling count"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"<Pagination\n  count={20}\n  siblingCount={2}\n  defaultPage={10}\n/>\n")),(0,r.kt)("h3",null,"Full mode"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'function Minor() {\n  const [page, setPage] = React.useState(3);\n  const totalPages = 20;\n\n  return (\n    <Flex>\n      <Flex mr="3x" alignItems="center">\n        <Text>\n          Total: 400\n        </Text>\n        <Divider orientation="vertical" height="6x" ml="3x" />\n        <Menu>\n          <MenuButton variant="ghost">10 per page</MenuButton>\n          <MenuList>\n            <MenuItem>10</MenuItem>\n            <MenuItem>50</MenuItem>\n            <MenuItem>100</MenuItem>\n          </MenuList>\n        </Menu>\n        <Divider orientation="vertical" height="6x" />\n      </Flex>\n      <Pagination count={totalPages} page={page} onChange={(_, value) => setPage(value)} />\n    </Flex>\n  );\n}\n')),(0,r.kt)("h3",null,"Reduced mode"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'function Minor() {\n  const [page, setPage] = React.useState(1);\n  const totalPages = 40;\n  const prevPageDisabled = (page <= 1);\n  const nextPageDisabled = (page >= totalPages);\n  const onInputChange = (e) => {\n    const value = e.target.value;\n    if (value <= 1) {\n      setPage(1);\n    } else if (value >= totalPages) {\n      setPage(totalPages);\n    } else if (!isNaN(value)) {\n      setPage(e.target.value);\n    }\n  }\n\n  return (\n    <Flex>\n      <Flex mr="3x" alignItems="center">\n        <Text>\n          Total: 400\n        </Text>\n        <Divider orientation="vertical" height="6x" ml="3x" />\n        <Menu>\n          <MenuButton variant="ghost">50 per page</MenuButton>\n          <MenuList>\n            <MenuItem>10</MenuItem>\n            <MenuItem>50</MenuItem>\n            <MenuItem>100</MenuItem>\n          </MenuList>\n        </Menu>\n        <Input width={32} px={0} textAlign="center" onChange={onInputChange} value={page} />\n        <Space width="2x" />\n        <Text>/</Text>\n        <Space width="2x" />\n        <Text>{totalPages}</Text>\n      </Flex>\n      <ButtonGroup\n        variant="secondary"\n        css={{\n          \'> *:not(:first-of-type)\': {\n            marginLeft: -1\n          }\n        }}\n      >\n        <Button\n          disabled={prevPageDisabled}\n          onClick={(event) => {\n            const prevPage = page > 1 ? page - 1 : page;\n            if (prevPage !== page) {\n              setPage(prevPage);\n            }\n          }}\n        >\n          <Icon icon="angle-left" />\n        </Button>\n        <Button\n          disabled={nextPageDisabled}\n          onClick={(event) => {\n            const nextPage = page < totalPages ? page + 1 : page;\n            if (nextPage !== page) {\n              setPage(nextPage);\n            }\n          }}\n        >\n          <Icon icon="angle-right" />\n        </Button>\n      </ButtonGroup>\n    </Flex>\n  );\n}\n')),(0,r.kt)("h3",null,"Minor mode"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'function Minor() {\n  const [page, setPage] = React.useState(1);\n  const totalPages = 40;\n  const prevPageDisabled = (page <= 1);\n  const nextPageDisabled = (page >= totalPages);\n\n  return (\n    <Flex>\n      <Flex mr="3x" alignItems="center">\n        <Text>\n          Total: 400\n        </Text>\n        <Divider orientation="vertical" height="6x" mx="3x" />\n        <Text>\n          100 per page\n        </Text>\n        <Divider orientation="vertical" height="6x" mx="3x" />\n        <Text>{page}</Text>\n        <Space width="2x" />\n        <Text>/</Text>\n        <Space width="2x" />\n        <Text>{totalPages}</Text>\n      </Flex>\n      <ButtonGroup\n        variant="secondary"\n        css={{\n          \'> *:not(:first-of-type)\': {\n            marginLeft: -1\n          }\n        }}\n      >\n        <Button\n          disabled={prevPageDisabled}\n          onClick={(event) => {\n            const prevPage = page > 1 ? page - 1 : page;\n            if (prevPage !== page) {\n              setPage(prevPage);\n            }\n          }}\n        >\n          <Icon icon="angle-left" />\n        </Button>\n        <Button\n          disabled={nextPageDisabled}\n          onClick={(event) => {\n            const nextPage = page < totalPages ? page + 1 : page;\n            if (nextPage !== page) {\n              setPage(nextPage);\n            }\n          }}\n        >\n          <Icon icon="angle-right" />\n        </Button>\n      </ButtonGroup>\n    </Flex>\n  );\n}\n')),(0,r.kt)("h2",null,"Props"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"count"),(0,r.kt)("td",{parentName:"tr",align:"left"},"number"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"1")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The total number of pages.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"disabled"),(0,r.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:"left"},"If ",(0,r.kt)("inlineCode",{parentName:"td"},"true"),", the pagination component will be disabled.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"defaultPage"),(0,r.kt)("td",{parentName:"tr",align:"left"},"number"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"1")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The page selected by default when the component is uncontrolled.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"page"),(0,r.kt)("td",{parentName:"tr",align:"left"},"number"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"The current page. when the component is controlled.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"prevLabel"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string or react element"),(0,r.kt)("td",{parentName:"tr",align:"left"},"'<'"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The previous button label")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"nextLabel"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string or react element"),(0,r.kt)("td",{parentName:"tr",align:"left"},"'>'"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The next button label")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"ellipsisLabel"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string or react element"),(0,r.kt)("td",{parentName:"tr",align:"left"},"'...'"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The next button label")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"boundaryCount"),(0,r.kt)("td",{parentName:"tr",align:"left"},"number"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"1")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Number of always visible pages at the beginning and end.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"siblingCount"),(0,r.kt)("td",{parentName:"tr",align:"left"},"number"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"1")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Number of always visible pages before and after the current page.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"onChange"),(0,r.kt)("td",{parentName:"tr",align:"left"},"function"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"Callback fired when the page is changed. ",(0,r.kt)("br",null),(0,r.kt)("br",null)," Signature: ",(0,r.kt)("br",null)," ",(0,r.kt)("inlineCode",{parentName:"td"},"function(event: object, page: number) => void")," ",(0,r.kt)("br",null),"event: The event source of the callback. ",(0,r.kt)("br",null),"page: The page selected.")))))}g.isMDXComponent=!0},156:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/pagination",function(){return n(90467)}])}},function(e){e.O(0,[9774,2888,179],(function(){return t=156,e(e.s=t);var t}));var t=e.O();_N_E=t}]);