(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3637],{14545:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return d}});var a=t(7896),i=t(59740),o=(t(2784),t(30876)),r=["components"],l={};function d(e){var n=e.components,t=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",null,"Accordion"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Accordion")," is used to display a list of high-level options that can expand/collapse to reveal more information."),(0,o.kt)("h3",null,"Accordion components"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Accordion"),": The wrapper that uses cloneElement to pass its prop to ",(0,o.kt)("inlineCode",{parentName:"li"},"AccordionItem"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"AccordionItem"),": A single accordion item."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"AccordionHeader"),": It is used to toggle the expand/collapse state of the accordion item."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"AccordionPanel"),": The container for the details to be revealed."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"AccordionIcon"),": A ",(0,o.kt)("inlineCode",{parentName:"li"},"chevron-down")," icon that rotates based on the expand/collapse state.")),(0,o.kt)("h2",null,"Import"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import {\n  Accordion,\n  AccordionItem,\n  AccordionHeader,\n  AccordionPanel,\n  AccordionIcon,\n} from '@tonic-ui/react';\n")),(0,o.kt)("h2",null,"Usage"),(0,o.kt)("p",null,"By default, only one item may be expanded and it can only be collapsed again by\nexpanding another."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'<Accordion>\n  <AccordionItem>\n    <AccordionHeader>\n      <Flex justifyContent="space-between">\n        Section 1\n        <AccordionIcon />\n      </Flex>\n    </AccordionHeader>\n    <AccordionPanel>\n      <Text whiteSpace="pre-wrap" p="3x">\n        Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.\n      </Text>\n    </AccordionPanel>\n  </AccordionItem>\n  <AccordionItem>\n    <AccordionHeader>\n      <Flex justifyContent="space-between">\n        Section 2\n        <AccordionIcon />\n      </Flex>\n    </AccordionHeader>\n    <AccordionPanel>\n      <Text whiteSpace="pre-wrap" p="3x">\n        Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.\n      </Text>\n    </AccordionPanel>\n  </AccordionItem>\n</Accordion>\n')),(0,o.kt)("h3",null,"Expand multiple items at once"),(0,o.kt)("p",null,"If you set ",(0,o.kt)("inlineCode",{parentName:"p"},"allowMultiple")," to true, then the accordion will permit multiple items to be expanded at once."),(0,o.kt)("p",null,"If you pass this prop, ensure that the ",(0,o.kt)("inlineCode",{parentName:"p"},"index")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"defaultIndex")," prop is an array."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'<Accordion\n  defaultIndex={[0]}\n  allowMultiple\n>\n  <AccordionItem>\n    <AccordionHeader>\n      <Flex justifyContent="space-between">\n        Section 1\n        <AccordionIcon />\n      </Flex>\n    </AccordionHeader>\n    <AccordionPanel>\n      <Text whiteSpace="pre-wrap" p="3x">\n        Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.\n      </Text>\n    </AccordionPanel>\n  </AccordionItem>\n  <AccordionItem>\n    <AccordionHeader>\n      <Flex justifyContent="space-between">\n        Section 2\n        <AccordionIcon />\n      </Flex>\n    </AccordionHeader>\n    <AccordionPanel>\n      <Text whiteSpace="pre-wrap" p="3x">\n        Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.\n      </Text>\n    </AccordionPanel>\n  </AccordionItem>\n</Accordion>\n')),(0,o.kt)("h3",null,"Toggle each accordion item"),(0,o.kt)("p",null,"If you set ",(0,o.kt)("inlineCode",{parentName:"p"},"allowToggle")," to true, any expanded item may be collapsed again."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'<Accordion allowToggle>\n  <AccordionItem>\n    <AccordionHeader>\n      <Flex justifyContent="space-between">\n        Section 1\n        <AccordionIcon />\n      </Flex>\n    </AccordionHeader>\n    <AccordionPanel>\n      <Text whiteSpace="pre-wrap" p="3x">\n        Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.\n      </Text>\n    </AccordionPanel>\n  </AccordionItem>\n  <AccordionItem>\n    <AccordionHeader>\n      <Flex justifyContent="space-between">\n        Section 2\n        <AccordionIcon />\n      </Flex>\n    </AccordionHeader>\n    <AccordionPanel>\n      <Text whiteSpace="pre-wrap" p="3x">\n        Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.\n      </Text>\n    </AccordionPanel>\n  </AccordionItem>\n</Accordion>\n')),(0,o.kt)("h3",null,"Styling the expanded state"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"AccordionItem")," component has the render prop ",(0,o.kt)("inlineCode",{parentName:"p"},"isExpanded")," set to ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"<AccordionItem>\n  {({ isExpanded }) => (\n    <>\n      <AccordionHeader\n        bg={isExpanded ? 'blue:80': 'blue:60'}\n        _hover={{ bg: 'blue:70' }}\n        _active={{ bg: 'blue:80' }}\n        p=\"3x\"\n      >\n        <Flex justifyContent=\"space-between\">\n          Click Me\n          <AccordionIcon />\n        </Flex>\n      </AccordionHeader>\n      <AccordionPanel>\n        <Text whiteSpace=\"pre-wrap\" p=\"3x\">\n          Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.\n        </Text>\n      </AccordionPanel>\n    </>\n  )}\n</AccordionItem>\n")),(0,o.kt)("h3",null,"Accessing the internal state"),(0,o.kt)("p",null,"If you need access to the internal state of each accordion item, you can use a\nrender prop. It provides 2 internal state: ",(0,o.kt)("inlineCode",{parentName:"p"},"isDisabled and "),"isExpanded`."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'<Accordion allowMultiple>\n  <AccordionItem>\n    <AccordionHeader>\n      <Flex justifyContent="space-between">\n        Section 1\n        <AccordionIcon />\n      </Flex>\n    </AccordionHeader>\n    <AccordionPanel>\n      <Text whiteSpace="pre-wrap" p="3x">\n        Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.\n      </Text>\n    </AccordionPanel>\n  </AccordionItem>\n  <AccordionItem>\n    {({ isDisabled, isExpanded }) => (\n      <>\n        <AccordionHeader>\n          <Flex justifyContent="space-between">\n            Section 2\n            <Icon\n              icon={isExpanded ? \'minus\' : \'add\'}\n              style={{\n                opacity: isDisabled ? .4 : 1,\n                transform: isExpanded ? null : \'rotate(-90deg)\',\n                transition: \'transform 0.2s\',\n                transformOrigin: \'center\',\n              }}\n            />\n          </Flex>\n        </AccordionHeader>\n        <AccordionPanel>\n          <Text whiteSpace="pre-wrap" p="3x">\n            Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.\n          </Text>\n        </AccordionPanel>\n      </>\n    )}\n  </AccordionItem>\n</Accordion>\n')),(0,o.kt)("h2",null,"Accessibility"),(0,o.kt)("p",null,"Pressing ",(0,o.kt)("inlineCode",{parentName:"p"},"space")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"enter")," when focus is on the accordion panel header will\ntoggle (expand or collapse) the accordion."),(0,o.kt)("h2",null,"Props"),(0,o.kt)("h3",null,"Accordion"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"allowMultiple"),(0,o.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,o.kt)("td",{parentName:"tr",align:"left"},"false"),(0,o.kt)("td",{parentName:"tr",align:"left"},"If ",(0,o.kt)("inlineCode",{parentName:"td"},"true"),", multiple accordion items can be expanded at once.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"allowToggle"),(0,o.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,o.kt)("td",{parentName:"tr",align:"left"},"false"),(0,o.kt)("td",{parentName:"tr",align:"left"},"If ",(0,o.kt)("inlineCode",{parentName:"td"},"true"),", any expanded accordion item can be collapsed again.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"index"),(0,o.kt)("td",{parentName:"tr",align:"left"},"number ","|"," array"),(0,o.kt)("td",{parentName:"tr",align:"left"}),(0,o.kt)("td",{parentName:"tr",align:"left"},"The index(es) of the expanded accordion item.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"defaultIndex"),(0,o.kt)("td",{parentName:"tr",align:"left"},"number ","|"," array"),(0,o.kt)("td",{parentName:"tr",align:"left"}),(0,o.kt)("td",{parentName:"tr",align:"left"},"The initial index(es) of the expanded accordion item.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"onChange"),(0,o.kt)("td",{parentName:"tr",align:"left"},"function"),(0,o.kt)("td",{parentName:"tr",align:"left"}),(0,o.kt)("td",{parentName:"tr",align:"left"},"A callback invoked when accordion items are expanded or collapsed.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"children"),(0,o.kt)("td",{parentName:"tr",align:"left"},"ReactNode"),(0,o.kt)("td",{parentName:"tr",align:"left"}),(0,o.kt)("td",{parentName:"tr",align:"left"},"The content of the accordion. The children must be one of the ",(0,o.kt)("inlineCode",{parentName:"td"},"AccordionHeader")," and ",(0,o.kt)("inlineCode",{parentName:"td"},"AccordionPanel")," components.")))),(0,o.kt)("h3",null,"AccordionItem"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"id"),(0,o.kt)("td",{parentName:"tr",align:"left"},"string"),(0,o.kt)("td",{parentName:"tr",align:"left"}),(0,o.kt)("td",{parentName:"tr",align:"left"},"A unique id for the accordion item.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"isOpen"),(0,o.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,o.kt)("td",{parentName:"tr",align:"left"},"false"),(0,o.kt)("td",{parentName:"tr",align:"left"},"If ",(0,o.kt)("inlineCode",{parentName:"td"},"true"),", expands the accordion in the controlled mode.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"defaultIsOpen"),(0,o.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,o.kt)("td",{parentName:"tr",align:"left"},"false"),(0,o.kt)("td",{parentName:"tr",align:"left"},"If ",(0,o.kt)("inlineCode",{parentName:"td"},"true"),", expands the accordion by on initial mount.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"isDisabled"),(0,o.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,o.kt)("td",{parentName:"tr",align:"left"},"false"),(0,o.kt)("td",{parentName:"tr",align:"left"},"If ",(0,o.kt)("inlineCode",{parentName:"td"},"true"),", the accordion header will be disabled.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"onChange"),(0,o.kt)("td",{parentName:"tr",align:"left"},"function"),(0,o.kt)("td",{parentName:"tr",align:"left"}),(0,o.kt)("td",{parentName:"tr",align:"left"},"A callback fired when the accordion is expanded/collapsed.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"children"),(0,o.kt)("td",{parentName:"tr",align:"left"},"ReactNode ","|"," (RenderProps) => ReactNode"),(0,o.kt)("td",{parentName:"tr",align:"left"}),(0,o.kt)("td",{parentName:"tr",align:"left"},"The content of the accordion. The children must be one of the ",(0,o.kt)("inlineCode",{parentName:"td"},"AccordionHeader")," and ",(0,o.kt)("inlineCode",{parentName:"td"},"AccordionPanel")," components.")))),(0,o.kt)("h3",null,"AccordionHeader"),(0,o.kt)("h3",null,"AccordionPanel"))}d.isMDXComponent=!0},82684:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/accordion",function(){return t(14545)}])}},function(e){e.O(0,[9774,2888,179],(function(){return n=82684,e(e.s=n);var n}));var n=e.O();_N_E=n}]);