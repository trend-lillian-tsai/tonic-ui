(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6565],{9832:function(e,n,i){"use strict";i.r(n);var l=i(52322),t=i(45392);function _createMdxContent(e){var n=Object.assign({div:"div",h1:"h1",p:"p",h2:"h2",a:"a",svg:"svg",use:"use",pre:"pre",code:"code",h3:"h3",ul:"ul",li:"li",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,t.ah)(),e.components);return(0,l.jsxs)(n.div,{className:"main-content",id:"main-content",children:[(0,l.jsx)(n.h1,{id:"radio",children:"Radio"}),"\n",(0,l.jsx)(n.p,{children:"Radio buttons are used when only one choice may be selected in a series of options."}),"\n",(0,l.jsxs)(n.h2,{id:"import",children:["Import",(0,l.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#import",children:(0,l.jsx)(n.svg,{children:(0,l.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:"import { Radio } from '@tonic-ui/react';\n"})}),"\n",(0,l.jsxs)(n.h2,{id:"usage",children:["Usage",(0,l.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#usage",children:(0,l.jsx)(n.svg,{children:(0,l.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-jsx",children:"<Radio>\n  Label\n</Radio>\n"})}),"\n",(0,l.jsx)(n.p,{children:"You can use a flex container to align a radio button with other components. This allows you to easily control the positioning and spacing of all elements within the container."}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-jsx",children:'<Flex alignItems="flex-start" columnGap="2x">\n  <Box py="1h">\n    <Radio id="form-control" />\n  </Box>\n  <Box\n    as="label"\n    htmlFor="form-control"\n    sx={{\n      cursor: \'pointer\',\n      userSelect: \'none\',\n    }}\n  >\n    <Text>Label</Text>\n    <Text fontSize="xs" lineHeight="xs">Helper text</Text>\n  </Box>\n</Flex>\n'})}),"\n",(0,l.jsxs)(n.h3,{id:"colors",children:["Colors",(0,l.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#colors",children:(0,l.jsx)(n.svg,{children:(0,l.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,l.jsxs)(n.p,{children:["Use the ",(0,l.jsx)(n.code,{children:"variantColor"})," prop to change the color scheme of a radio button. ",(0,l.jsx)(n.code,{children:"variantColor"})," can be any color key with key ",(0,l.jsx)(n.code,{children:"50"})," (hover) or ",(0,l.jsx)(n.code,{children:"60"})," (checked) that exist in ",(0,l.jsx)(n.code,{children:"theme.colors"}),"."]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-jsx",children:'<Flex columnGap="6x">\n  <Radio variantColor="red" defaultChecked>\n    Label\n  </Radio>\n  <Radio variantColor="green" defaultChecked>\n    Label\n  </Radio>\n</Flex>\n'})}),"\n",(0,l.jsxs)(n.h3,{id:"sizes",children:["Sizes",(0,l.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#sizes",children:(0,l.jsx)(n.svg,{children:(0,l.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,l.jsxs)(n.p,{children:["Use the ",(0,l.jsx)(n.code,{children:"size"})," prop to change the radio button size. You can set the value to ",(0,l.jsx)(n.code,{children:"sm"}),", ",(0,l.jsx)(n.code,{children:"md"}),", or ",(0,l.jsx)(n.code,{children:"lg"}),"."]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-jsx",children:'<Flex columnGap="6x">\n  <Radio size="sm" name="1">\n    Label\n  </Radio>\n  <Radio size="md" name="1">\n    Label\n  </Radio>\n  <Radio size="lg" name="1">\n    Label\n  </Radio>\n</Flex>\n'})}),"\n",(0,l.jsxs)(n.h3,{id:"states",children:["States",(0,l.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#states",children:(0,l.jsx)(n.svg,{children:(0,l.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-jsx",children:'<Stack spacing="6x">\n  <Flex columnGap="6x">\n    <Radio>\n      Label\n    </Radio>\n    <Radio defaultChecked>\n      Label\n    </Radio>\n  </Flex>\n  <Flex columnGap="6x">\n    <Radio disabled>\n      Label\n    </Radio>\n    <Radio disabled defaultChecked>\n      Label\n    </Radio>\n  </Flex>\n</Stack>\n'})}),"\n",(0,l.jsxs)(n.h2,{id:"accessibility",children:["Accessibility",(0,l.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#accessibility",children:(0,l.jsx)(n.svg,{children:(0,l.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,l.jsxs)(n.p,{children:["WAI-ARIA: ",(0,l.jsx)(n.a,{href:"https://www.w3.org/WAI/ARIA/apg/patterns/radio/",children:"https://www.w3.org/WAI/ARIA/apg/patterns/radio/"})]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["All form controls should have labels, and this includes radio buttons, checkboxes, and switches. In most cases, this is done by using the ",(0,l.jsx)(n.code,{children:"<label>"})," element."]}),"\n",(0,l.jsxs)(n.li,{children:["When a label can't be used, it's necessary to add an attribute directly to the input component. In this case, you can apply the additional attribute (e.g. ",(0,l.jsx)(n.code,{children:"aria-label"}),", ",(0,l.jsx)(n.code,{children:"aria-labelledby"}),", ",(0,l.jsx)(n.code,{children:"title"}),") via the ",(0,l.jsx)(n.code,{children:"inputProps"})," prop."]}),"\n"]}),"\n",(0,l.jsx)(n.pre,{disabled:!0,children:(0,l.jsx)(n.code,{className:"language-jsx",children:"<Radio\n  inputProps={{\n    'aria-label': 'Label',\n  }}\n/>\n"})}),"\n",(0,l.jsxs)(n.h2,{id:"commonly-asked-questions",children:["Commonly Asked Questions",(0,l.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#commonly-asked-questions",children:(0,l.jsx)(n.svg,{children:(0,l.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,l.jsxs)(n.h3,{id:"how-to-obtain-and-interact-with-the-input-element",children:["How to obtain and interact with the input element?",(0,l.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#how-to-obtain-and-interact-with-the-input-element",children:(0,l.jsx)(n.svg,{children:(0,l.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,l.jsxs)(n.p,{children:["To access the input element within the ",(0,l.jsx)(n.code,{children:"Radio"})," component, you can make use of the ",(0,l.jsx)(n.code,{children:"inputRef"})," prop. This prop allows you to acquire a reference to the input element, enabling you to interact with it."]}),"\n",(0,l.jsxs)(n.p,{children:["Once you have obtained the reference to the input element, you can access its properties and methods. For instance, you can use the ",(0,l.jsx)(n.code,{children:"checked"})," property to retrieve the current checked state of the input element. Additionally, if you need to focus on the input element programmatically, you can utilize the ",(0,l.jsx)(n.code,{children:"focus()"})," method available on the input element reference."]}),"\n",(0,l.jsxs)(n.p,{children:["Here's an example of how you can utilize the ",(0,l.jsx)(n.code,{children:"inputRef"})," prop to access the input element and perform actions:"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-jsx",children:'function Example() {\n  const inputRef = React.useRef();\n\n  const handleClick = () => {\n    inputRef.current.focus();\n    console.log(inputRef.current.checked); // => true\n  };\n\n  return (\n    <Flex alignItems="center" columnGap="6x">\n      <Radio defaultChecked inputRef={inputRef}>\n        Label\n      </Radio>\n      <Button onClick={handleClick}>\n        Click Me\n      </Button>\n    </Flex>\n  );\n}\n'})}),"\n",(0,l.jsxs)(n.h2,{id:"props",children:["Props",(0,l.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#props",children:(0,l.jsx)(n.svg,{children:(0,l.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,l.jsxs)(n.h3,{id:"radio-1",children:["Radio",(0,l.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#radio-1",children:(0,l.jsx)(n.svg,{children:(0,l.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{align:"left",children:"Name"}),(0,l.jsx)(n.th,{align:"left",children:"Type"}),(0,l.jsx)(n.th,{align:"left",children:"Default"}),(0,l.jsx)(n.th,{align:"left",children:"Description"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{align:"left",children:"checked"}),(0,l.jsx)(n.td,{align:"left",children:"boolean"}),(0,l.jsx)(n.td,{align:"left"}),(0,l.jsxs)(n.td,{align:"left",children:["If ",(0,l.jsx)(n.code,{children:"true"}),", the radio button will be selected. Use the ",(0,l.jsx)(n.code,{children:"onChange"})," prop to update the state for a controlled component."]})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{align:"left",children:"children"}),(0,l.jsx)(n.td,{align:"left",children:"ReactNode"}),(0,l.jsx)(n.td,{align:"left"}),(0,l.jsx)(n.td,{align:"left",children:"The content within the radio button component."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{align:"left",children:"defaultChecked"}),(0,l.jsx)(n.td,{align:"left",children:"boolean"}),(0,l.jsx)(n.td,{align:"left"}),(0,l.jsxs)(n.td,{align:"left",children:["If ",(0,l.jsx)(n.code,{children:"true"}),", the radio button will be selected initially."]})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{align:"left",children:"disabled"}),(0,l.jsx)(n.td,{align:"left",children:"boolean"}),(0,l.jsx)(n.td,{align:"left"}),(0,l.jsxs)(n.td,{align:"left",children:["If ",(0,l.jsx)(n.code,{children:"true"}),", disables the radio button and prevents user interaction."]})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{align:"left",children:"id"}),(0,l.jsx)(n.td,{align:"left",children:"string"}),(0,l.jsx)(n.td,{align:"left"}),(0,l.jsxs)(n.td,{align:"left",children:["The ",(0,l.jsx)(n.code,{children:"id"})," attribute of the input field."]})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{align:"left",children:"inputProps"}),(0,l.jsx)(n.td,{align:"left",children:"object"}),(0,l.jsx)(n.td,{align:"left"}),(0,l.jsx)(n.td,{align:"left",children:"Additional props to be applied to the input element."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{align:"left",children:"inputRef"}),(0,l.jsx)(n.td,{align:"left",children:"RefObject"}),(0,l.jsx)(n.td,{align:"left"}),(0,l.jsx)(n.td,{align:"left",children:"A ref object to access the input element."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{align:"left",children:"name"}),(0,l.jsx)(n.td,{align:"left",children:"string"}),(0,l.jsx)(n.td,{align:"left"}),(0,l.jsx)(n.td,{align:"left",children:"The name of the input field in a series of radio buttons. The name is useful for form submissions."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{align:"left",children:"onBlur"}),(0,l.jsx)(n.td,{align:"left",children:"function"}),(0,l.jsx)(n.td,{align:"left"}),(0,l.jsx)(n.td,{align:"left",children:"A callback function invoked when the radio button loses focus."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{align:"left",children:"onChange"}),(0,l.jsx)(n.td,{align:"left",children:"function"}),(0,l.jsx)(n.td,{align:"left"}),(0,l.jsx)(n.td,{align:"left",children:"A callback function invoked when the state of the radio button changes."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{align:"left",children:"onClick"}),(0,l.jsx)(n.td,{align:"left",children:"function"}),(0,l.jsx)(n.td,{align:"left"}),(0,l.jsx)(n.td,{align:"left",children:"A callback function invoked when the radio button is clicked."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{align:"left",children:"onFocus"}),(0,l.jsx)(n.td,{align:"left",children:"function"}),(0,l.jsx)(n.td,{align:"left"}),(0,l.jsx)(n.td,{align:"left",children:"A callback function invoked when the radio button receives focus."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{align:"left",children:"size"}),(0,l.jsx)(n.td,{align:"left",children:"string"}),(0,l.jsx)(n.td,{align:"left",children:"'md'"}),(0,l.jsx)(n.td,{align:"left",children:"The size of the radio button. One of: 'sm', 'md', 'lg'"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{align:"left",children:"value"}),(0,l.jsx)(n.td,{align:"left",children:"string | number"}),(0,l.jsx)(n.td,{align:"left"}),(0,l.jsx)(n.td,{align:"left",children:"The value of the radio button input. This is the return value for form submissions."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{align:"left",children:"variantColor"}),(0,l.jsx)(n.td,{align:"left",children:"string"}),(0,l.jsx)(n.td,{align:"left",children:"'blue'"}),(0,l.jsx)(n.td,{align:"left",children:"The color of the radio button when it is selected. The color should be one of the color keys in the theme (for example, 'green', 'red')"})]})]})]})]})}n.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,t.ah)(),e.components).wrapper;return n?(0,l.jsx)(n,Object.assign({},e,{children:(0,l.jsx)(_createMdxContent,e)})):_createMdxContent(e)}},97637:function(e,n,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/radio",function(){return i(9832)}])}},function(e){e.O(0,[9774,2888,179],function(){return e(e.s=97637)}),_N_E=e.O()}]);