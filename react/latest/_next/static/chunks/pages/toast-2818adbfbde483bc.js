(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9674],{11328:function(t,n,e){"use strict";e.r(n),e.d(n,{default:function(){return r}});var o=e(7896),a=e(59740),l=(e(2784),e(30876)),i=["components"],s={};function r(t){var n=t.components,e=(0,a.Z)(t,i);return(0,l.kt)("wrapper",(0,o.Z)({},s,e,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",null,"Toast"),(0,l.kt)("p",null,"A toast notification is a small popup that appears at either side of the screen, and disappears after a short time. The toast notification is used to notify the user of something that has happened, but it is not intended to be used as a permanent message."),(0,l.kt)("h2",null,"Import"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"import {\n  Toast,\n  ToastProvider,\n  useToast,\n} from '@trendmicro/react-styled-ui';\n")),(0,l.kt)("h2",null,"Usage"),(0,l.kt)("p",null,"Add ",(0,l.kt)("inlineCode",{parentName:"p"},"ToastProvider")," to the root."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"disabled",disabled:!0},'<ToastProvider placement="bottom-right">\n  <App />\n</ToastProvider>\n')),(0,l.kt)("p",null,"For the Hook version, use the ",(0,l.kt)("inlineCode",{parentName:"p"},"useToast")," Hook to get all the methods, properties, and state. See the ",(0,l.kt)("b",null,"useToast Hook")," section for detailed usage."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"disabled",disabled:!0},"function Example() {\n  const toast = useToast();\n  const handleClick = () => {\n    toast(({ onClose, placement }) => (\n      <Box>toast</Box>\n    ));\n  };\n\n  return (\n    <Button onClick={handleClick}>\n      Trigger Toast\n    </Button>\n  );\n}\n")),(0,l.kt)("h3",null,"Layout"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Increase the vertical padding space to ",(0,l.kt)("inlineCode",{parentName:"li"},"4x")," (or ",(0,l.kt)("inlineCode",{parentName:"li"},"1rem"),") for a multiline paragraph."),(0,l.kt)("li",{parentName:"ul"},"Set the minimum horizontal margin space to ",(0,l.kt)("inlineCode",{parentName:"li"},"4x")," (or ",(0,l.kt)("inlineCode",{parentName:"li"},"1rem"),") before the close button."),(0,l.kt)("li",{parentName:"ul"},"Set the minimum horizontal margin space to ",(0,l.kt)("inlineCode",{parentName:"li"},"4x")," (or ",(0,l.kt)("inlineCode",{parentName:"li"},"1rem"),") between the icon and the content."),(0,l.kt)("li",{parentName:"ul"},"Apply vertical margin space with ",(0,l.kt)("inlineCode",{parentName:"li"},"2x")," (or ",(0,l.kt)("inlineCode",{parentName:"li"},".5rem"),") between the title and its content."),(0,l.kt)("li",{parentName:"ul"},"Apply vertical margin space with ",(0,l.kt)("inlineCode",{parentName:"li"},"6x")," (or ",(0,l.kt)("inlineCode",{parentName:"li"},"1.5rem"),") between the end of the content and the action button (or action link).")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"noInline",noInline:!0},'const ToastSimple = ({ onClose }) => (\n  <Toast isClosable onClose={onClose}>\n    <Text>This is a toast notification.</Text>\n  </Toast>\n);\n\nconst ToastWithIcon = ({ onClose }) => (\n  <Toast isClosable onClose={onClose} py="4x">\n    <Flex align="flex-start">\n      <Box\n        bg="gray:40"\n        height={48}\n        minWidth={48}\n      />\n      <Space minWidth="4x" />\n      <Text>This is a toast notification.</Text>\n    </Flex>\n  </Toast>\n);\n\nconst ToastWithTitle = ({ onClose }) => (\n  <Toast isClosable onClose={onClose} py="4x">\n    <Box mb="2x">\n      <Text fontWeight="bold">Notification Title</Text>\n    </Box>\n    <Box mr={-36}>\n      <Text>This is a toast notification.</Text>\n    </Box>\n  </Toast>\n);\n\nconst ToastWithActionButton = ({ onClose }) => (\n  <Toast isClosable onClose={onClose} py="4x">\n    <Box mb="6x">\n      <Text>This is a toast notification.</Text>\n    </Box>\n    <Flex justify="flex-end" mr={-36}>\n      <FlatButton variant="outline" color="black:primary" size="sm">\n        Action Button\n      </FlatButton>\n    </Flex>\n  </Toast>\n);\n\nconst ToastWithActionLink = ({ onClose }) => (\n  <Toast isClosable onClose={onClose} py="4x">\n    <Box mb="6x">\n      <Text>This is a toast notification.</Text>\n    </Box>\n    <Flex justify="flex-end" mr={-36}>\n      <Link>Action Link</Link>\n    </Flex>\n  </Toast>\n);\n\nconst ToastWithAllTogether = ({ onClose }) => (\n  <Toast isClosable onClose={onClose} py="4x">\n    <Box mb="2x">\n      <Text fontWeight="bold">Notification Title</Text>\n    </Box>\n    <Flex align="flex-start" mb="6x">\n      <Box\n        bg="gray:40"\n        height={48}\n        minWidth={48}\n      />\n      <Space minWidth="4x" />\n      <Text>This is a toast notification.</Text>\n    </Flex>\n    <Flex justify="flex-end" mr={-36}>\n      <FlatButton variant="outline" color="black:primary" size="sm">\n        Action Button\n      </FlatButton>\n    </Flex>\n  </Toast>\n);\n\nconst ToastLayout = (props) => {\n  const [colorMode] = useColorMode();\n  const [colorStyle] = useColorStyle({ colorMode });\n  const boxShadow = colorStyle.shadow.thin;\n\n  return (\n    <Box\n      fontSize="sm"\n      lineHeight="sm"\n      textAlign="left"\n      boxShadow={boxShadow}\n      width={320}\n      {...props}\n    />\n  );\n};\n\nfunction Example() {\n  const toast = useToast();\n  const handleClickBy = (ToastNotification) => () => {\n    toast(({ onClose, placement }) => {\n      const styleProps = {\n        \'top-left\': { mt: \'2x\', mx: \'4x\' },\n        \'top\': { mt: \'2x\', mx: \'4x\' },\n        \'top-right\': { mt: \'2x\', mx: \'4x\' },\n        \'bottom-left\': { mb: \'2x\', mx: \'4x\' },\n        \'bottom\': { mb: \'2x\', mx: \'4x\' },\n        \'bottom-right\': { mb: \'2x\', mx: \'4x\' },\n      }[placement];\n\n      return (\n        <ToastLayout {...styleProps}>\n          <ToastNotification onClose={onClose} />\n        </ToastLayout>\n      );\n    }, {\n      placement: \'bottom-right\',\n      duration: 5000,\n    });\n  };\n\n  return (\n    <>\n      <Stack direction="column" spacing="6x">\n        <Box>\n          <Button\n            variant="secondary"\n            onClick={handleClickBy(ToastSimple)}\n          >\n            Show\n          </Button>\n          <ToastLayout mt="4x">\n            <ToastSimple />\n          </ToastLayout>\n        </Box>\n        <Box>\n          <Button\n            variant="secondary"\n            onClick={handleClickBy(ToastWithIcon)}\n          >\n            Show\n          </Button>\n          <ToastLayout mt="4x">\n            <ToastWithIcon />\n          </ToastLayout>\n        </Box>\n        <Box>\n          <Button\n            variant="secondary"\n            onClick={handleClickBy(ToastWithTitle)}\n          >\n            Show\n          </Button>\n          <ToastLayout mt="4x">\n            <ToastWithTitle />\n          </ToastLayout>\n        </Box>\n        <Box>\n          <Button\n            variant="secondary"\n            onClick={handleClickBy(ToastWithActionButton)}\n          >\n            Show\n          </Button>\n          <ToastLayout mt="4x">\n            <ToastWithActionButton />\n          </ToastLayout>\n        </Box>\n        <Box>\n          <Button\n            variant="secondary"\n            onClick={handleClickBy(ToastWithActionLink)}\n          >\n            Show\n          </Button>\n          <ToastLayout mt="4x">\n            <ToastWithActionLink />\n          </ToastLayout>\n        </Box>\n        <Box>\n          <Button\n            variant="secondary"\n            onClick={handleClickBy(ToastWithAllTogether)}\n          >\n            Show\n          </Button>\n          <ToastLayout mt="4x">\n            <ToastWithAllTogether />\n          </ToastLayout>\n        </Box>\n      </Stack>\n    </>\n  );\n}\n\nrender(<Example />);\n')),(0,l.kt)("h3",null,"Appearances"),(0,l.kt)("p",null,"You can control the appearance of a toast notification. If specified, the value can be one of ",(0,l.kt)("inlineCode",{parentName:"p"},"success"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"info"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"warning"),", or ",(0,l.kt)("inlineCode",{parentName:"p"},"error"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"noInline",noInline:!0},"const ToastSuccess = ({ onClose }) => (\n  <Toast\n    isClosable\n    onClose={onClose}\n    appearance=\"success\"\n  >\n    This is a success toast alert.\n  </Toast>\n);\n\nconst ToastInfo = ({ onClose }) => (\n  <Toast\n    isClosable\n    onClose={onClose}\n    appearance=\"info\"\n  >\n    This is an info toast alert.\n  </Toast>\n);\n\nconst ToastWarning = ({ onClose }) => (\n  <Toast\n    isClosable\n    onClose={onClose}\n    appearance=\"warning\"\n  >\n    This is a warning toast alert.\n  </Toast>\n);\n\nconst ToastError = ({ onClose }) => (\n  <Toast\n    isClosable\n    onClose={onClose}\n    appearance=\"error\"\n  >\n    This is an error toast alert.\n  </Toast>\n);\n\nconst ToastLayout = (props) => {\n  const [colorMode] = useColorMode();\n  const [colorStyle] = useColorStyle({ colorMode });\n  const boxShadow = colorStyle.shadow.thin;\n\n  return (\n    <Box\n      fontSize=\"sm\"\n      lineHeight=\"sm\"\n      textAlign=\"left\"\n      boxShadow={boxShadow}\n      width={320}\n      {...props}\n    />\n  );\n};\n\nfunction Example() {\n  const toast = useToast();\n  const handleClickBy = (ToastNotification) => () => {\n    toast(({ onClose, placement }) => {\n      const styleProps = {\n        'top-left': { mt: '2x', mx: '4x' },\n        'top': { mt: '2x', mx: '4x' },\n        'top-right': { mt: '2x', mx: '4x' },\n        'bottom-left': { mb: '2x', mx: '4x' },\n        'bottom': { mb: '2x', mx: '4x' },\n        'bottom-right': { mb: '2x', mx: '4x' },\n      }[placement];\n\n      return (\n        <ToastLayout {...styleProps}>\n          <ToastNotification onClose={onClose} />\n        </ToastLayout>\n      );\n    }, {\n      placement: 'bottom-right',\n      duration: 5000,\n    });\n  };\n  const toastComponents = [\n    ToastSuccess,\n    ToastInfo,\n    ToastWarning,\n    ToastError,\n  ];\n\n  return (\n    <Stack direction=\"column\" spacing=\"6x\">\n      {toastComponents.map((ToastNotification, idx) => (\n        <Box key={idx}>\n          <Button variant=\"secondary\" onClick={handleClickBy(ToastNotification)}>\n            Show\n          </Button>\n          <ToastLayout mt=\"4x\">\n            <ToastNotification />\n          </ToastLayout>\n        </Box>\n      ))}\n    </Stack>\n  );\n}\n\nrender(<Example />);\n")),(0,l.kt)("h3",null,"Icons"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"icon")," prop allows you to override the default icon for the specified appearance."),(0,l.kt)("p",null,"Setting the ",(0,l.kt)("inlineCode",{parentName:"p"},"icon")," prop to ",(0,l.kt)("inlineCode",{parentName:"p"},"false")," will remove the icon altogether."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"noInline",noInline:!0},"const ToastWithDefaultIcon = ({ onClose }) => (\n  <Toast\n    isClosable\n    onClose={onClose}\n    appearance=\"success\"\n  >\n    This is a success toast alert.\n  </Toast>\n);\n\nconst ToastWithAnotherIcon = ({ onClose }) => (\n  <Toast\n    isClosable\n    onClose={onClose}\n    appearance=\"success\"\n    icon=\"success\"\n  >\n    This is a success toast alert.\n  </Toast>\n);\n\nconst ToastWithProprietaryIcon = ({ onClose }) => (\n  <Toast\n    isClosable\n    onClose={onClose}\n    appearance=\"success\"\n    icon={<Icon icon=\"check-circle-o\" color=\"gray:80\" />}\n  >\n    This is a success toast alert.\n  </Toast>\n);\n\nconst ToastWithoutIcon = ({ onClose }) => (\n  <Toast\n    isClosable\n    onClose={onClose}\n    appearance=\"success\"\n    icon={false}\n  >\n    This is a success toast alert.\n  </Toast>\n);\n\nconst ToastLayout = (props) => {\n  const [colorMode] = useColorMode();\n  const [colorStyle] = useColorStyle({ colorMode });\n  const boxShadow = colorStyle.shadow.thin;\n\n  return (\n    <Box\n      fontSize=\"sm\"\n      lineHeight=\"sm\"\n      textAlign=\"left\"\n      boxShadow={boxShadow}\n      width={320}\n      {...props}\n    />\n  );\n};\n\nfunction Example() {\n  const toast = useToast();\n  const handleClickBy = (ToastNotification) => () => {\n    toast(({ onClose, placement }) => {\n      const styleProps = {\n        'top-left': { mt: '2x', mx: '4x' },\n        'top': { mt: '2x', mx: '4x' },\n        'top-right': { mt: '2x', mx: '4x' },\n        'bottom-left': { mb: '2x', mx: '4x' },\n        'bottom': { mb: '2x', mx: '4x' },\n        'bottom-right': { mb: '2x', mx: '4x' },\n      }[placement];\n\n      return (\n        <ToastLayout {...styleProps}>\n          <ToastNotification onClose={onClose} />\n        </ToastLayout>\n      );\n    }, {\n      placement: 'bottom-right',\n      duration: 5000,\n    });\n  };\n  const alertToasts = [\n    ToastWithDefaultIcon,\n    ToastWithAnotherIcon,\n    ToastWithProprietaryIcon,\n    ToastWithoutIcon,\n  ];\n\n  return (\n    <Stack direction=\"column\" spacing=\"6x\">\n      {alertToasts.map((ToastNotification, idx) => (\n        <Box key={idx}>\n          <Button variant=\"secondary\" onClick={handleClickBy(ToastNotification)}>\n            Show\n          </Button>\n          <ToastLayout mt=\"4x\">\n            <ToastNotification />\n          </ToastLayout>\n        </Box>\n      ))}\n    </Stack>\n  );\n}\n\nrender(<Example />);\n")),(0,l.kt)("h2",null,"Toast"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"isClosable"),(0,l.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"If ",(0,l.kt)("inlineCode",{parentName:"td"},"true"),", a close button will appear on the right side.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"onClose"),(0,l.kt)("td",{parentName:"tr",align:"left"},"function"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"A callback called when the close button is clicked.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"appearance"),(0,l.kt)("td",{parentName:"tr",align:"left"},"string"),(0,l.kt)("td",{parentName:"tr",align:"left"},"'none'"),(0,l.kt)("td",{parentName:"tr",align:"left"},"One of: ",(0,l.kt)("inlineCode",{parentName:"td"},"'none'"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"'success'"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"'info'"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"'warning'"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"'error'"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"icon"),(0,l.kt)("td",{parentName:"tr",align:"left"},"string ","|"," ReactNode ","|"," false"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"Override the icon displayed before the children. Unless provided, the icon is mapped to the value of the ",(0,l.kt)("inlineCode",{parentName:"td"},"appearance")," prop.")))),(0,l.kt)("h2",null,"ToastProvider"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"children"),(0,l.kt)("td",{parentName:"tr",align:"left"},"ReactNode"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"container"),(0,l.kt)("td",{parentName:"tr",align:"left"},"DOM element"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"placement"),(0,l.kt)("td",{parentName:"tr",align:"left"},"string"),(0,l.kt)("td",{parentName:"tr",align:"left"},"'bottom-right'"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Set the default placement to place toasts. One of: ",(0,l.kt)("inlineCode",{parentName:"td"},"'top'"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"'top-right'"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"'top-left'"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"'bottom'"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"'bottom-left'"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"'bottom-right'"))))),(0,l.kt)("h2",null,"useToast Hook"),(0,l.kt)("p",null,"The useToast hook has the following signature:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const {\n  // Methods\n  close,\n  closeAll,\n  find,\n  findIndex,\n  notify,\n  update,\n\n  // Properties\n  placement,\n\n  // State\n  state,\n} = useToast();\n")),(0,l.kt)("h3",null,"toast.close(id)"),(0,l.kt)("p",null,"Close a toast at its placement."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"id")," ",(0,l.kt)("em",{parentName:"li"},"(string)"),": The id to close the toast.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns")),(0,l.kt)("p",null,"This method returns ",(0,l.kt)("inlineCode",{parentName:"p"},"undefined"),"."),(0,l.kt)("h3",null,"toast.closeAll(","[options={}]",")"),(0,l.kt)("p",null,"Close all toasts at once with the given placements, including ",(0,l.kt)("inlineCode",{parentName:"p"},"top"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"top-left"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"top-right"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"bottom"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"bottom-left"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"bottom-right"),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"[options={}]")," ",(0,l.kt)("em",{parentName:"li"},"(Object)"),": The options object."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"[options.placements=[]]")," ",(0,l.kt)("em",{parentName:"li"},"(Array)"),": An array of placements to close toasts.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns")),(0,l.kt)("p",null,"This method returns ",(0,l.kt)("inlineCode",{parentName:"p"},"undefined"),"."),(0,l.kt)("h3",null,"toast.find(id)"),(0,l.kt)("p",null,"Find the first toast in the array that matches the provided toast id. Otherwise, ",(0,l.kt)("inlineCode",{parentName:"p"},"undefined")," is returned if not found.\nIf no values satisfy the testing function, undefined is returned."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"id")," ",(0,l.kt)("em",{parentName:"li"},"(string)"),": The id to find the toast.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"(Object)"),": Returns the toast object."),(0,l.kt)("h3",null,"toast.findIndex(id)"),(0,l.kt)("p",null,"Find the first toast in the array that matches the provided toast id. Otherwise, -1 is returned if not found."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"id")," ",(0,l.kt)("em",{parentName:"li"},"(string)"),": The id to find the toast.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"(number)"),": Returns the array index."),(0,l.kt)("h3",null,"toast.notify(message, ","[options={}]",")"),(0,l.kt)("p",null,"Create a toast at the specified placement and return the toast id."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"message")," ",(0,l.kt)("em",{parentName:"li"},"(Function|string)"),": The toast message to render."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"[options={}]")," ",(0,l.kt)("em",{parentName:"li"},"(Object)"),": The options object."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"[options.duration=null]")," ",(0,l.kt)("em",{parentName:"li"},"(number)"),": The duration (in milliseconds) that the toast should remain on the screen. If set to null, toast will never dismiss."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"[options.id]")," ",(0,l.kt)("em",{parentName:"li"},"(string)"),": A unique ID of the toast."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"[options.placement]")," ",(0,l.kt)("em",{parentName:"li"},"(string)"),": The placement of the toast.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Aliases")),(0,l.kt)("p",null,"toast(message, ","[options={}]",")"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"(string)"),": Returns the toast id."),(0,l.kt)("h3",null,"toast.update(id, ","[options={}]",")"),(0,l.kt)("p",null,"Update a specific toast with new options based on the given toast id."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"id")," ",(0,l.kt)("em",{parentName:"li"},"(string)"),": The id to update the toast."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"[options={}]")," ",(0,l.kt)("em",{parentName:"li"},"(Object)"),": The options object."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"[options.duration=null]")," ",(0,l.kt)("em",{parentName:"li"},"(number)"),": The duration (in milliseconds) that the toast should remain on the screen. If set to null, toast will never dismiss."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"[options.message]")," ",(0,l.kt)("em",{parentName:"li"},"(Function|string)"),": The toast message to render.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns")),(0,l.kt)("p",null,"Returns ",(0,l.kt)("inlineCode",{parentName:"p"},"true")," if the toast exists, else ",(0,l.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,l.kt)("h3",null,"toast.placement"),(0,l.kt)("p",null,"Specify the placement to place the toast. The default placement will be used if the placement option is not explicitly specified."),(0,l.kt)("h3",null,"toast.state"),(0,l.kt)("p",null,"The toast state is a placement object, each placement contains an array of objects representing the current toasts."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"{\n  'top': [\n    {\n      id: '1', // A unique identifier that represents the toast message\n      message: ({ id, onClose, placement }) => <Toast />, // The toast message to render\n      placement: 'top', // The placement of the toast\n      duration: null, // The duration (in milliseconds) that the toast should remain on the screen. If set to null, toast will never dismiss.\n      onClose: () => toast.close(id, placement), // The function to close the toast\n    },\n  ],\n  'top-left': [],\n  'top-right': [],\n  'bottom': [],\n  'bottom-left': [],\n  'bottom-right': [],\n}\n")))}r.isMDXComponent=!0},37534:function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/toast",function(){return e(11328)}])}},function(t){t.O(0,[9774,2888,179],(function(){return n=37534,t(t.s=n);var n}));var n=t.O();_N_E=n}]);