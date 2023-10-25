(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3578],{34708:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return index_page}});var a=t(52322),o=t(45392),r=t(83449),l=t(28165),i=t(67569),s=t(24704),d=t(4478),c=t(97361),u=t(94960),m=t(2784);function _extends(){return(_extends=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}function _slicedToArray(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t,a,o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var r=[],l=!0,i=!1;try{for(o=o.call(e);!(l=(t=o.next()).done)&&(r.push(t.value),!n||r.length!==n);l=!0);}catch(e){i=!0,a=e}finally{try{l||null==o.return||o.return()}finally{if(i)throw a}}return r}}(e,n)||function(e,n){if(e){if("string"==typeof e)return _arrayLikeToArray(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if("Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return _arrayLikeToArray(e,n)}}(e,n)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,a=Array(n);t<n;t++)a[t]=e[t];return a}var CodeBlock=function(e){var n=_slicedToArray((0,i.useColorMode)(),1)[0],t=_slicedToArray((0,i.useColorStyle)({colorMode:n}),1)[0];return m.createElement(i.Box,_extends({backgroundColor:t.background.secondary,border:1,borderColor:t.divider,fontFamily:"mono",py:"3x",px:"3x",whiteSpace:"pre"},e))},FormGroup=function(e){return m.createElement(i.Box,_extends({mb:"4x"},e))},f=[0,1,2,3,4,5,6],useSelection=function(e){var n=_slicedToArray((0,m.useState)(e),2),t=n[0],a=n[1];return[t,function(e){return function(){return a(e)}}]},mapDateOptionToDateObject=function(e){return({none:null,today:new Date,invalid:new Date("")})[e]},disableWeekdays=function(e){var n=e.getDay();return n>0&&n<6},disableWeekends=function(e){var n=e.getDay();return 0===n||6===n},usage=function(){var e=_slicedToArray((0,m.useState)(),2),n=e[0],t=e[1],a=_slicedToArray((0,m.useState)("enUS"),2),o=a[0],r=a[1],x=_slicedToArray(useSelection(0),2),p=x[0],h=x[1],y=_slicedToArray(useSelection("none"),2),b=y[0],D=y[1],g=_slicedToArray((0,m.useState)(mapDateOptionToDateObject(b)),2),v=g[0],k=g[1],j=_slicedToArray((0,m.useState)(""),2),T=j[0],L=j[1],B=_slicedToArray((0,m.useState)(""),2),C=B[0],O=B[1],E=_slicedToArray(useSelection("none"),2),S=E[0],F=E[1],w=d.Z(v)?c.Z(v,"yyyy-MM-dd"):"";return(0,m.useEffect)(function(){k(mapDateOptionToDateObject(b))},[b]),m.createElement(m.Fragment,null,m.createElement(FormGroup,null,m.createElement(i.Flex,{alignItems:"center",columnGap:"2x"},m.createElement(i.TextLabel,null,"Selected date:"),n&&m.createElement(i.Text,{color:"red:50"},n),!n&&m.createElement(i.Text,null,w))),m.createElement(s.Calendar,{date:v,firstDayOfWeek:p,formatDate:function(e,n){var t={locale:o&&u[o]};return c.Z(e,n,t)},maxDate:C?new Date(C):void 0,minDate:T?new Date(T):void 0,onChange:function(e){console.log("onChange:",e),k(e)},onError:function(e,n){console.log("onError:",e),t(e)},shouldDisableDate:function(e){return"weekdays"===S?disableWeekdays(e):"weekends"===S&&disableWeekends(e)}}),m.createElement(i.Divider,{my:"4x"}),m.createElement(i.Box,{mb:"4x"},m.createElement(i.Text,{fontSize:"lg",lineHeight:"lg"},"Localization")),m.createElement(FormGroup,null,m.createElement(i.Flex,{alignItems:"center",columnGap:"2x"},m.createElement(i.TextLabel,null,"Locale:"),m.createElement(i.Menu,null,m.createElement(i.MenuButton,{variant:"secondary",minWidth:100},o&&u[o].code),m.createElement(i.MenuList,{onClick:function(e){r(e.target.getAttribute("value"))},maxHeight:240,minWidth:100,overflowY:"auto"},Object.keys(u).map(function(e){return m.createElement(i.MenuItem,{key:e,value:e},u[e].code)}))),m.createElement(i.LinkButton,{onClick:function(){return r("enUS")}},"Reset"))),m.createElement(i.Flex,{direction:"column",mb:"4x",rowGap:"3x"},m.createElement(i.TextLabel,null,"You can use the ",m.createElement(i.Code,null,"formatDate")," prop to return a formatted date string in the given format and locale."),m.createElement(CodeBlock,null,"// format\nimport format from 'date-fns/format';\n\n// locale\nimport enLocale from 'date-fns/locale/en-US'; // English (United States)\nimport deLocale from 'date-fns/locale/de'; // Deutsch\nimport esLocale from 'date-fns/locale/es'; // Espa\xf1ol\nimport frLocale from 'date-fns/locale/fr'; // Fran\xe7ais\nimport itLocale from 'date-fns/locale/it'; // Italiano\nimport jaLocale from 'date-fns/locale/ja'; // 日本語\nimport koLocale from 'date-fns/locale/ko'; // 한국어\nimport zhCNLocale from 'date-fns/locale/zh-CN'; // 简体中文\nimport zhTWLocale from 'date-fns/locale/zh-TW'; // 繁體中文"),m.createElement(CodeBlock,null,"// Calendar component\nformatDate={(date, format, options) => {\n  return format(date, format, { locale: enLocale });\n}}")),m.createElement(i.Divider,{my:"4x"}),m.createElement(i.Box,{mb:"4x"},m.createElement(i.Text,{fontSize:"lg",lineHeight:"lg"},"Calendar props")),m.createElement(FormGroup,null,m.createElement(i.Box,{mb:"2x"},m.createElement(i.TextLabel,null,"firstDayOfWeek")),m.createElement(i.ButtonGroup,{variant:"secondary",css:(0,l.iv)({"> *:not(:first-of-type)":{marginLeft:-1}},"","")},f.map(function(e){return m.createElement(i.Button,{key:e,selected:e===p,onClick:h(e),minWidth:"15x"},e)}))),m.createElement(FormGroup,null,m.createElement(i.Box,{mb:"2x"},m.createElement(i.TextLabel,null,"none"===b&&"date={null}","today"===b&&"date={new Date()}","invalid"===b&&"date={new Date('')}")),m.createElement(i.ButtonGroup,{variant:"secondary",css:(0,l.iv)({"> *:not(:first-of-type)":{marginLeft:-1}},"","")},["none","today","invalid"].map(function(e){return m.createElement(i.Button,{key:e,selected:e===b,onClick:D(e),minWidth:"15x"},{none:"None",today:"Today",invalid:"Invalid Date"}[e])}))),m.createElement(FormGroup,null,m.createElement(i.Box,{mb:"2x"},m.createElement(i.TextLabel,null,"minDate=",T?"{new Date('".concat(T,"'}}"):"")),m.createElement(i.Input,{type:"date",value:T,onChange:function(e){return L(e.target.value)},width:"auto"})),m.createElement(FormGroup,null,m.createElement(i.Box,{mb:"2x"},m.createElement(i.TextLabel,null,"maxDate=",C?"{new Date('".concat(C,"'}}"):"")),m.createElement(i.Input,{type:"date",value:C,onChange:function(e){return O(e.target.value)},width:"auto"})),m.createElement(FormGroup,null,m.createElement(i.Box,{mb:"2x"},m.createElement(i.TextLabel,null,"shouldDisableDate")),m.createElement(i.ButtonGroup,{variant:"secondary",css:(0,l.iv)({"> *:not(:first-of-type)":{marginLeft:-1}},"","")},["none","weekdays","weekends"].map(function(e){return m.createElement(i.Button,{key:e,selected:e===S,onClick:F(e),minWidth:"15x"},{none:"None",weekdays:"Disable Weekdays",weekends:"Disable Weekends"}[e])}))))};function _createMdxContent(e){var n=Object.assign({div:"div",h1:"h1",h2:"h2",a:"a",svg:"svg",use:"use",pre:"pre",code:"code",h3:"h3",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",em:"em"},(0,o.ah)(),e.components);return(0,a.jsxs)(n.div,{className:"main-content",id:"main-content",children:["\n","\n",(0,a.jsx)(n.h1,{id:"calendar",children:"Calendar"}),"\n",(0,a.jsxs)(n.h2,{id:"import",children:["Import",(0,a.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#import",children:(0,a.jsx)(n.svg,{children:(0,a.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"import {\n  Calendar,\n} from '@tonic-ui/react-lab';\n"})}),"\n",(0,a.jsxs)(n.h2,{id:"usage",children:["Usage",(0,a.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#usage",children:(0,a.jsx)(n.svg,{children:(0,a.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,a.jsx)(r.Z,{component:usage,file:{data:"import {\n  Box,\n  Button,\n  ButtonGroup,\n  Code,\n  Divider,\n  Flex,\n  Input,\n  LinkButton,\n  Menu,\n  MenuButton,\n  MenuItem,\n  MenuList,\n  Text,\n  TextLabel,\n  useColorMode,\n  useColorStyle,\n} from '@tonic-ui/react';\nimport {\n  Calendar,\n} from '@tonic-ui/react-lab';\nimport * as dateFns from 'date-fns'\nimport * as dateFnsLocale from 'date-fns/locale'\nimport React, { useEffect, useState } from 'react';\n\nconst CodeBlock = (props) => {\n  const [colorMode] = useColorMode();\n  const [colorStyle] = useColorStyle({ colorMode });\n\n  return (\n    <Box\n      backgroundColor={colorStyle.background.secondary}\n      border={1}\n      borderColor={colorStyle.divider}\n      fontFamily=\"mono\"\n      py=\"3x\"\n      px=\"3x\"\n      whiteSpace=\"pre\"\n      {...props}\n    />\n  );\n};\n\nconst FormGroup = (props) => (\n  <Box mb=\"4x\" {...props} />\n);\n\nconst firstDayOfWeekOptions = [\n  0, // Sunday\n  1, // Monday\n  2, // Tuesday\n  3, // Wednesday\n  4, // Thursday\n  5, // Friday\n  6, // Saturday\n];\n\nconst useSelection = (defaultValue) => {\n  const [value, setValue] = useState(defaultValue);\n  const changeBy = (value) => () => setValue(value);\n  return [value, changeBy];\n};\n\nconst mapDateOptionToDateObject = (dateOption) => ({\n  'none': null,\n  'today': new Date(),\n  'invalid': new Date(''),\n}[dateOption]);\n\nconst disableWeekdays = (date) => {\n  const day = date.getDay();\n  return (day > 0) && (day < 6);\n};\n\nconst disableWeekends = (date) => {\n  const day = date.getDay();\n  return (day === 0) || (day === 6);\n};\n\nconst App = () => {\n  const [error, setError] = useState();\n  const [locale, setLocale] = useState('enUS');\n  const [firstDayOfWeek, changeFirstDayOfWeekBy] = useSelection(0);\n  const [dateOption, changeDateOptionBy] = useSelection('none');\n  const [date, setDate] = useState(mapDateOptionToDateObject(dateOption));\n  const [minDate, setMinDate] = useState('');\n  const [maxDate, setMaxDate] = useState('');\n  const [shouldDisableDateOption, changeShouldDisableDateOptionBy] = useSelection('none');\n  const dateFormat = 'yyyy-MM-dd';\n  const displayDate = dateFns.isValid(date) ? dateFns.format(date, dateFormat) : '';\n\n  useEffect(() => {\n    setDate(mapDateOptionToDateObject(dateOption));\n  }, [dateOption]);\n\n  return (\n    <>\n      <FormGroup>\n        <Flex\n          alignItems=\"center\"\n          columnGap=\"2x\"\n        >\n          <TextLabel>\n            Selected date:\n          </TextLabel>\n          {error && (\n            <Text color=\"red:50\">{error}</Text>\n          )}\n          {!error && (\n            <Text>{displayDate}</Text>\n          )}\n        </Flex>\n      </FormGroup>\n      <Calendar\n        date={date}\n        firstDayOfWeek={firstDayOfWeek}\n        formatDate={(date, format) => {\n          const options = {\n            locale: locale && dateFnsLocale[locale],\n          };\n          return dateFns.format(date, format, options);\n        }}\n        maxDate={maxDate ? new Date(maxDate) : undefined}\n        minDate={minDate ? new Date(minDate) : undefined}\n        onChange={(nextDate) => {\n          console.log('onChange:', nextDate);\n          setDate(nextDate);\n        }}\n        onError={(error, value) => {\n          console.log('onError:', error);\n          setError(error);\n        }}\n        shouldDisableDate={(date) => {\n          if (shouldDisableDateOption === 'weekdays') {\n            return disableWeekdays(date);\n          }\n          if (shouldDisableDateOption === 'weekends') {\n            return disableWeekends(date);\n          }\n          return false;\n        }}\n      />\n      <Divider my=\"4x\" />\n      <Box mb=\"4x\">\n        <Text fontSize=\"lg\" lineHeight=\"lg\">\n          Localization\n        </Text>\n      </Box>\n      <FormGroup>\n        <Flex\n          alignItems=\"center\"\n          columnGap=\"2x\"\n        >\n          <TextLabel>\n            Locale:\n          </TextLabel>\n          <Menu>\n            <MenuButton variant=\"secondary\" minWidth={100}>\n              {locale && dateFnsLocale[locale].code}\n            </MenuButton>\n            <MenuList\n              onClick={(event) => {\n                const value = event.target.getAttribute('value');\n                setLocale(value);\n              }}\n              maxHeight={240}\n              minWidth={100}\n              overflowY=\"auto\"\n            >\n              {Object.keys(dateFnsLocale).map((locale) => (\n                <MenuItem key={locale} value={locale}>\n                  {dateFnsLocale[locale].code}\n                </MenuItem>\n              ))}\n            </MenuList>\n          </Menu>\n          <LinkButton onClick={() => setLocale('enUS')}>\n            Reset\n          </LinkButton>\n        </Flex>\n      </FormGroup>\n      <Flex\n        direction=\"column\"\n        mb=\"4x\"\n        rowGap=\"3x\"\n      >\n        <TextLabel>\n          You can use the <Code>formatDate</Code> prop to return a formatted date string in the given format and locale.\n        </TextLabel>\n        <CodeBlock>\n          {`// format\\nimport format from 'date-fns/format';\\n\\n// locale\\nimport enLocale from 'date-fns/locale/en-US'; // English (United States)\\nimport deLocale from 'date-fns/locale/de'; // Deutsch\\nimport esLocale from 'date-fns/locale/es'; // Espa\xf1ol\\nimport frLocale from 'date-fns/locale/fr'; // Fran\xe7ais\\nimport itLocale from 'date-fns/locale/it'; // Italiano\\nimport jaLocale from 'date-fns/locale/ja'; // 日本語\\nimport koLocale from 'date-fns/locale/ko'; // 한국어\\nimport zhCNLocale from 'date-fns/locale/zh-CN'; // 简体中文\\nimport zhTWLocale from 'date-fns/locale/zh-TW'; // 繁體中文`}\n        </CodeBlock>\n        <CodeBlock>\n          {`// Calendar component\\nformatDate={(date, format, options) => {\\n  return format(date, format, { locale: enLocale });\\n}}`}\n        </CodeBlock>\n      </Flex>\n      <Divider my=\"4x\" />\n      <Box mb=\"4x\">\n        <Text fontSize=\"lg\" lineHeight=\"lg\">\n          Calendar props\n        </Text>\n      </Box>\n      <FormGroup>\n        <Box mb=\"2x\">\n          <TextLabel>\n            firstDayOfWeek\n          </TextLabel>\n        </Box>\n        <ButtonGroup\n          variant=\"secondary\"\n          css={{\n            '> *:not(:first-of-type)': {\n              marginLeft: -1\n            }\n          }}\n        >\n          {firstDayOfWeekOptions.map(value => (\n            <Button\n              key={value}\n              selected={value === firstDayOfWeek}\n              onClick={changeFirstDayOfWeekBy(value)}\n              minWidth=\"15x\"\n            >\n              {value}\n            </Button>\n          ))}\n        </ButtonGroup>\n      </FormGroup>\n      <FormGroup>\n        <Box mb=\"2x\">\n          <TextLabel>\n            {dateOption === 'none' && `date={null}`}\n            {dateOption === 'today' && `date={new Date()}`}\n            {dateOption === 'invalid' && `date={new Date('')}`}\n          </TextLabel>\n        </Box>\n        <ButtonGroup\n          variant=\"secondary\"\n          css={{\n            '> *:not(:first-of-type)': {\n              marginLeft: -1\n            }\n          }}\n        >\n          {['none', 'today', 'invalid'].map(value => (\n            <Button\n              key={value}\n              selected={value === dateOption}\n              onClick={changeDateOptionBy(value)}\n              minWidth=\"15x\"\n            >\n              {{\n                'none': 'None',\n                'today': 'Today',\n                'invalid': 'Invalid Date',\n              }[value]}\n            </Button>\n          ))}\n        </ButtonGroup>\n      </FormGroup>\n      <FormGroup>\n        <Box mb=\"2x\">\n          <TextLabel>\n            minDate={minDate ? `{new Date('${minDate}'}}` : ''}\n          </TextLabel>\n        </Box>\n        <Input\n          type=\"date\"\n          value={minDate}\n          onChange={(e) => setMinDate(e.target.value)}\n          width=\"auto\"\n        />\n      </FormGroup>\n      <FormGroup>\n        <Box mb=\"2x\">\n          <TextLabel>\n            maxDate={maxDate ? `{new Date('${maxDate}'}}` : ''}\n          </TextLabel>\n        </Box>\n        <Input\n          type=\"date\"\n          value={maxDate}\n          onChange={(e) => setMaxDate(e.target.value)}\n          width=\"auto\"\n        />\n      </FormGroup>\n      <FormGroup>\n        <Box mb=\"2x\">\n          <TextLabel>\n            shouldDisableDate\n          </TextLabel>\n        </Box>\n        <ButtonGroup\n          variant=\"secondary\"\n          css={{\n            '> *:not(:first-of-type)': {\n              marginLeft: -1\n            }\n          }}\n        >\n          {['none', 'weekdays', 'weekends'].map(value => (\n            <Button\n              key={value}\n              selected={value === shouldDisableDateOption}\n              onClick={changeShouldDisableDateOptionBy(value)}\n              minWidth=\"15x\"\n            >\n              {{\n                'none': 'None',\n                'weekdays': 'Disable Weekdays',\n                'weekends': 'Disable Weekends',\n              }[value]}\n            </Button>\n          ))}\n        </ButtonGroup>\n      </FormGroup>\n    </>\n  );\n};\n\nexport default App;",path:"pages/lab/date-pickers/calendar/index.page.mdx"},sandbox:{files:{},raw:"import {\n  Box,\n  Button,\n  ButtonGroup,\n  Code,\n  Divider,\n  Flex,\n  Input,\n  LinkButton,\n  Menu,\n  MenuButton,\n  MenuItem,\n  MenuList,\n  Text,\n  TextLabel,\n  useColorMode,\n  useColorStyle,\n} from '@tonic-ui/react';\nimport {\n  Calendar,\n} from '@tonic-ui/react-lab';\nimport * as dateFns from 'date-fns'\nimport * as dateFnsLocale from 'date-fns/locale'\nimport React, { useEffect, useState } from 'react';\n\nconst CodeBlock = (props) => {\n  const [colorMode] = useColorMode();\n  const [colorStyle] = useColorStyle({ colorMode });\n\n  return (\n    <Box\n      backgroundColor={colorStyle.background.secondary}\n      border={1}\n      borderColor={colorStyle.divider}\n      fontFamily=\"mono\"\n      py=\"3x\"\n      px=\"3x\"\n      whiteSpace=\"pre\"\n      {...props}\n    />\n  );\n};\n\nconst FormGroup = (props) => (\n  <Box mb=\"4x\" {...props} />\n);\n\nconst firstDayOfWeekOptions = [\n  0, // Sunday\n  1, // Monday\n  2, // Tuesday\n  3, // Wednesday\n  4, // Thursday\n  5, // Friday\n  6, // Saturday\n];\n\nconst useSelection = (defaultValue) => {\n  const [value, setValue] = useState(defaultValue);\n  const changeBy = (value) => () => setValue(value);\n  return [value, changeBy];\n};\n\nconst mapDateOptionToDateObject = (dateOption) => ({\n  'none': null,\n  'today': new Date(),\n  'invalid': new Date(''),\n}[dateOption]);\n\nconst disableWeekdays = (date) => {\n  const day = date.getDay();\n  return (day > 0) && (day < 6);\n};\n\nconst disableWeekends = (date) => {\n  const day = date.getDay();\n  return (day === 0) || (day === 6);\n};\n\nconst App = () => {\n  const [error, setError] = useState();\n  const [locale, setLocale] = useState('enUS');\n  const [firstDayOfWeek, changeFirstDayOfWeekBy] = useSelection(0);\n  const [dateOption, changeDateOptionBy] = useSelection('none');\n  const [date, setDate] = useState(mapDateOptionToDateObject(dateOption));\n  const [minDate, setMinDate] = useState('');\n  const [maxDate, setMaxDate] = useState('');\n  const [shouldDisableDateOption, changeShouldDisableDateOptionBy] = useSelection('none');\n  const dateFormat = 'yyyy-MM-dd';\n  const displayDate = dateFns.isValid(date) ? dateFns.format(date, dateFormat) : '';\n\n  useEffect(() => {\n    setDate(mapDateOptionToDateObject(dateOption));\n  }, [dateOption]);\n\n  return (\n    <>\n      <FormGroup>\n        <Flex\n          alignItems=\"center\"\n          columnGap=\"2x\"\n        >\n          <TextLabel>\n            Selected date:\n          </TextLabel>\n          {error && (\n            <Text color=\"red:50\">{error}</Text>\n          )}\n          {!error && (\n            <Text>{displayDate}</Text>\n          )}\n        </Flex>\n      </FormGroup>\n      <Calendar\n        date={date}\n        firstDayOfWeek={firstDayOfWeek}\n        formatDate={(date, format) => {\n          const options = {\n            locale: locale && dateFnsLocale[locale],\n          };\n          return dateFns.format(date, format, options);\n        }}\n        maxDate={maxDate ? new Date(maxDate) : undefined}\n        minDate={minDate ? new Date(minDate) : undefined}\n        onChange={(nextDate) => {\n          console.log('onChange:', nextDate);\n          setDate(nextDate);\n        }}\n        onError={(error, value) => {\n          console.log('onError:', error);\n          setError(error);\n        }}\n        shouldDisableDate={(date) => {\n          if (shouldDisableDateOption === 'weekdays') {\n            return disableWeekdays(date);\n          }\n          if (shouldDisableDateOption === 'weekends') {\n            return disableWeekends(date);\n          }\n          return false;\n        }}\n      />\n      <Divider my=\"4x\" />\n      <Box mb=\"4x\">\n        <Text fontSize=\"lg\" lineHeight=\"lg\">\n          Localization\n        </Text>\n      </Box>\n      <FormGroup>\n        <Flex\n          alignItems=\"center\"\n          columnGap=\"2x\"\n        >\n          <TextLabel>\n            Locale:\n          </TextLabel>\n          <Menu>\n            <MenuButton variant=\"secondary\" minWidth={100}>\n              {locale && dateFnsLocale[locale].code}\n            </MenuButton>\n            <MenuList\n              onClick={(event) => {\n                const value = event.target.getAttribute('value');\n                setLocale(value);\n              }}\n              maxHeight={240}\n              minWidth={100}\n              overflowY=\"auto\"\n            >\n              {Object.keys(dateFnsLocale).map((locale) => (\n                <MenuItem key={locale} value={locale}>\n                  {dateFnsLocale[locale].code}\n                </MenuItem>\n              ))}\n            </MenuList>\n          </Menu>\n          <LinkButton onClick={() => setLocale('enUS')}>\n            Reset\n          </LinkButton>\n        </Flex>\n      </FormGroup>\n      <Flex\n        direction=\"column\"\n        mb=\"4x\"\n        rowGap=\"3x\"\n      >\n        <TextLabel>\n          You can use the <Code>formatDate</Code> prop to return a formatted date string in the given format and locale.\n        </TextLabel>\n        <CodeBlock>\n          {`// format\\nimport format from 'date-fns/format';\\n\\n// locale\\nimport enLocale from 'date-fns/locale/en-US'; // English (United States)\\nimport deLocale from 'date-fns/locale/de'; // Deutsch\\nimport esLocale from 'date-fns/locale/es'; // Espa\xf1ol\\nimport frLocale from 'date-fns/locale/fr'; // Fran\xe7ais\\nimport itLocale from 'date-fns/locale/it'; // Italiano\\nimport jaLocale from 'date-fns/locale/ja'; // 日本語\\nimport koLocale from 'date-fns/locale/ko'; // 한국어\\nimport zhCNLocale from 'date-fns/locale/zh-CN'; // 简体中文\\nimport zhTWLocale from 'date-fns/locale/zh-TW'; // 繁體中文`}\n        </CodeBlock>\n        <CodeBlock>\n          {`// Calendar component\\nformatDate={(date, format, options) => {\\n  return format(date, format, { locale: enLocale });\\n}}`}\n        </CodeBlock>\n      </Flex>\n      <Divider my=\"4x\" />\n      <Box mb=\"4x\">\n        <Text fontSize=\"lg\" lineHeight=\"lg\">\n          Calendar props\n        </Text>\n      </Box>\n      <FormGroup>\n        <Box mb=\"2x\">\n          <TextLabel>\n            firstDayOfWeek\n          </TextLabel>\n        </Box>\n        <ButtonGroup\n          variant=\"secondary\"\n          css={{\n            '> *:not(:first-of-type)': {\n              marginLeft: -1\n            }\n          }}\n        >\n          {firstDayOfWeekOptions.map(value => (\n            <Button\n              key={value}\n              selected={value === firstDayOfWeek}\n              onClick={changeFirstDayOfWeekBy(value)}\n              minWidth=\"15x\"\n            >\n              {value}\n            </Button>\n          ))}\n        </ButtonGroup>\n      </FormGroup>\n      <FormGroup>\n        <Box mb=\"2x\">\n          <TextLabel>\n            {dateOption === 'none' && `date={null}`}\n            {dateOption === 'today' && `date={new Date()}`}\n            {dateOption === 'invalid' && `date={new Date('')}`}\n          </TextLabel>\n        </Box>\n        <ButtonGroup\n          variant=\"secondary\"\n          css={{\n            '> *:not(:first-of-type)': {\n              marginLeft: -1\n            }\n          }}\n        >\n          {['none', 'today', 'invalid'].map(value => (\n            <Button\n              key={value}\n              selected={value === dateOption}\n              onClick={changeDateOptionBy(value)}\n              minWidth=\"15x\"\n            >\n              {{\n                'none': 'None',\n                'today': 'Today',\n                'invalid': 'Invalid Date',\n              }[value]}\n            </Button>\n          ))}\n        </ButtonGroup>\n      </FormGroup>\n      <FormGroup>\n        <Box mb=\"2x\">\n          <TextLabel>\n            minDate={minDate ? `{new Date('${minDate}'}}` : ''}\n          </TextLabel>\n        </Box>\n        <Input\n          type=\"date\"\n          value={minDate}\n          onChange={(e) => setMinDate(e.target.value)}\n          width=\"auto\"\n        />\n      </FormGroup>\n      <FormGroup>\n        <Box mb=\"2x\">\n          <TextLabel>\n            maxDate={maxDate ? `{new Date('${maxDate}'}}` : ''}\n          </TextLabel>\n        </Box>\n        <Input\n          type=\"date\"\n          value={maxDate}\n          onChange={(e) => setMaxDate(e.target.value)}\n          width=\"auto\"\n        />\n      </FormGroup>\n      <FormGroup>\n        <Box mb=\"2x\">\n          <TextLabel>\n            shouldDisableDate\n          </TextLabel>\n        </Box>\n        <ButtonGroup\n          variant=\"secondary\"\n          css={{\n            '> *:not(:first-of-type)': {\n              marginLeft: -1\n            }\n          }}\n        >\n          {['none', 'weekdays', 'weekends'].map(value => (\n            <Button\n              key={value}\n              selected={value === shouldDisableDateOption}\n              onClick={changeShouldDisableDateOptionBy(value)}\n              minWidth=\"15x\"\n            >\n              {{\n                'none': 'None',\n                'weekdays': 'Disable Weekdays',\n                'weekends': 'Disable Weekends',\n              }[value]}\n            </Button>\n          ))}\n        </ButtonGroup>\n      </FormGroup>\n    </>\n  );\n};\n\nexport default App;",title:"Tonic UI"}}),"\n",(0,a.jsxs)(n.h2,{id:"props",children:["Props",(0,a.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#props",children:(0,a.jsx)(n.svg,{children:(0,a.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,a.jsxs)(n.h3,{id:"calendar-1",children:["Calendar",(0,a.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#calendar-1",children:(0,a.jsx)(n.svg,{children:(0,a.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{align:"left",children:"Name"}),(0,a.jsx)(n.th,{align:"left",children:"Type"}),(0,a.jsx)(n.th,{align:"left",children:"Default"}),(0,a.jsx)(n.th,{align:"left",children:"Description"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{align:"left",children:"date"}),(0,a.jsx)(n.td,{align:"left",children:"Date"}),(0,a.jsx)(n.td,{align:"left"}),(0,a.jsx)(n.td,{align:"left",children:"The selected date."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{align:"left",children:"defaultDate"}),(0,a.jsx)(n.td,{align:"left",children:"Date"}),(0,a.jsx)(n.td,{align:"left"}),(0,a.jsx)(n.td,{align:"left",children:"The default selected date."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{align:"left",children:"firstDayOfWeek"}),(0,a.jsx)(n.td,{align:"left",children:"number"}),(0,a.jsx)(n.td,{align:"left",children:"0"}),(0,a.jsxs)(n.td,{align:"left",children:["The first day of the week.",(0,a.jsx)("br",{}),"0 = Sunday",(0,a.jsx)("br",{}),"1 = Monday",(0,a.jsx)("br",{}),"2 = Tuesday",(0,a.jsx)("br",{}),"3 = Wednesday",(0,a.jsx)("br",{}),"4 = Thursday",(0,a.jsx)("br",{}),"5 = Friday",(0,a.jsx)("br",{}),"6 = Saturday"]})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{align:"left",children:"formatDate"}),(0,a.jsx)(n.td,{align:"left",children:"function"}),(0,a.jsx)(n.td,{align:"left"}),(0,a.jsxs)(n.td,{align:"left",children:["A callback called to return the formatted date string in the given format.",(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),(0,a.jsx)("b",{children:"Signature"}),(0,a.jsx)("br",{}),(0,a.jsx)(n.code,{children:"function(date, format, options) => void"}),(0,a.jsx)("br",{}),(0,a.jsx)(n.em,{children:"date"}),": The original date.",(0,a.jsx)("br",{}),(0,a.jsx)(n.em,{children:"format"}),": The string of ",(0,a.jsx)(n.a,{href:"https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table",children:"format tokens"}),".",(0,a.jsx)("br",{}),(0,a.jsx)(n.em,{children:"options"}),": An object with options."]})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{align:"left",children:"minDate"}),(0,a.jsx)(n.td,{align:"left",children:"Date"}),(0,a.jsx)(n.td,{align:"left"}),(0,a.jsx)(n.td,{align:"left",children:"The minimum date that can be selected."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{align:"left",children:"maxDate"}),(0,a.jsx)(n.td,{align:"left",children:"Date"}),(0,a.jsx)(n.td,{align:"left"}),(0,a.jsx)(n.td,{align:"left",children:"The maximum date that can be selected."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{align:"left",children:"onChange"}),(0,a.jsx)(n.td,{align:"left",children:"function"}),(0,a.jsx)(n.td,{align:"left"}),(0,a.jsxs)(n.td,{align:"left",children:["A callback called when the value (the selected date) changes.",(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),(0,a.jsx)("b",{children:"Signature:"}),(0,a.jsx)("br",{}),(0,a.jsx)(n.code,{children:"function(value) => void"}),(0,a.jsx)("br",{}),(0,a.jsx)(n.em,{children:"value"}),": The selected date."]})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{align:"left",children:"onError"}),(0,a.jsx)(n.td,{align:"left",children:"function"}),(0,a.jsx)(n.td,{align:"left"}),(0,a.jsxs)(n.td,{align:"left",children:["An error-first callback called when the date validation returns an error (or the date is valid after error).",(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),(0,a.jsx)("b",{children:"Signature"}),(0,a.jsx)("br",{}),(0,a.jsx)(n.code,{children:"function(error, value) => void"}),(0,a.jsx)("br",{}),(0,a.jsx)(n.em,{children:"error"}),": The error message. It will be ",(0,a.jsx)(n.code,{children:"undefined"})," if the date is valid after error.",(0,a.jsx)("br",{}),(0,a.jsx)(n.em,{children:"value"}),": The selected date."]})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{align:"left",children:"shouldDisableDate"}),(0,a.jsx)(n.td,{align:"left",children:"function"}),(0,a.jsx)(n.td,{align:"left"}),(0,a.jsxs)(n.td,{align:"left",children:["Disable specific date.",(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),(0,a.jsx)("b",{children:"Signature:"}),(0,a.jsx)("br",{}),(0,a.jsx)(n.code,{children:"function(date) => boolean"}),(0,a.jsx)("br",{}),(0,a.jsx)(n.em,{children:"date"}),": The date to check.",(0,a.jsx)("br",{}),(0,a.jsx)(n.em,{children:"returns (boolean)"}),": Return ",(0,a.jsx)(n.code,{children:"true"})," if the date will be disabled."]})]})]})]})]})}var index_page=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,o.ah)(),e.components).wrapper;return n?(0,a.jsx)(n,Object.assign({},e,{children:(0,a.jsx)(_createMdxContent,e)})):_createMdxContent(e)}},83449:function(e,n,t){"use strict";t.d(n,{Z:function(){return h}});var a=t(67569),o=t(49427),r=t(5632),l=t(2784),i=t(85175),s=t(82821),d=t(90622),c=t(52057),u=t(63651),m=["size"];function _extends(){return(_extends=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}var f=(0,l.forwardRef)(function(e,n){var t=e.size,o=function(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],!(n.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}(e,m);return l.createElement(a.SVGIcon,_extends({size:t,viewBox:"0 0 1024 1024"},o),l.createElement("path",{d:"M755 140.3l0.5-0.3h0.3L512 0 268.3 140h-0.3l0.8 0.4L68.6 256v512L512 1024l443.4-256V256L755 140.3z m-30 506.4v171.2L548 920.1V534.7L883.4 341v215.7l-158.4 90z m-584.4-90.6V340.8L476 534.4v385.7L300 818.5V646.7l-159.4-90.6zM511.7 280l171.1-98.3 166.3 96-336.9 194.5-337-194.6 165.7-95.7L511.7 280z"}))});f.displayName="CodeSandboxIcon";var x=t(94981);function _slicedToArray(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t,a,o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var r=[],l=!0,i=!1;try{for(o=o.call(e);!(l=(t=o.next()).done)&&(r.push(t.value),!n||r.length!==n);l=!0);}catch(e){i=!0,a=e}finally{try{l||null==o.return||o.return()}finally{if(i)throw a}}return r}}(e,n)||function(e,n){if(e){if("string"==typeof e)return _arrayLikeToArray(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if("Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return _arrayLikeToArray(e,n)}}(e,n)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,a=Array(n);t<n;t++)a[t]=e[t];return a}var p={fontFamily:'"SFMono-Medium", "SF Mono", "Segoe UI Mono", Menlo, Consolas, Courier, monospace',fontSize:14,overflowX:"auto"},Demo=function(e){var n=e.component,t=e.file,m=e.sandbox,h=(0,r.useRouter)(),y=_slicedToArray((0,l.useReducer)(function(e){return!e},!1),2),b=y[0],D=y[1],g=_slicedToArray((0,a.useColorMode)(),1)[0],v={dark:d.y,light:d.q}[g],k=_slicedToArray((0,o.useToggle)(!1),2),j=k[0],T=k[1],L=(0,s.Z)(null==t?void 0:t.data),B=L.onCopy,C=L.hasCopied,O=(0,l.useCallback)(function(){B()},[B]),E=(0,l.useCallback)(function(){(0,c.b)(m)},[m]),S=(0,l.useCallback)(function(){D(),T(!1)},[D,T]);return l.createElement(i.nu,{code:null==t?void 0:t.data,disabled:!0,language:"jsx",theme:v},l.createElement(a.Box,{border:1,borderColor:{dark:"gray:70",light:"gray:30"}[g],p:"4x"},l.createElement(a.Box,{fontSize:"sm",lineHeight:"sm"},l.createElement(l.Fragment,{key:b},l.createElement(n,null)))),l.createElement(a.Flex,{columnGap:"2x",justifyContent:"flex-end",mb:"4x"},l.createElement(x.Z,{"data-track":j?"CodeBlock|hide_source|".concat((0,u.Z)({path:h.pathname})):"CodeBlock|show_source|".concat((0,u.Z)({path:h.pathname})),onClick:T},l.createElement(a.Tooltip,{label:j?"Hide the source":"Show the source"},l.createElement(a.Icon,{icon:"code",size:{sm:"5x",md:"4x"}}))),l.createElement(x.Z,{"data-track":"CodeBlock|copy_source|".concat((0,u.Z)({path:h.pathname})),onClick:O},l.createElement(a.Tooltip,{label:C?"Copied":"Copy the source"},l.createElement(a.Icon,{icon:"file-copy-o",size:{sm:"5x",md:"4x"}}))),l.createElement(x.Z,{"data-track":"CodeBlock|edit_in_codesandbox|".concat(h.pathname),onClick:E},l.createElement(a.Tooltip,{label:"Edit in CodeSandbox"},l.createElement(f,{size:{sm:"5x",md:"4x"}}))),l.createElement(x.Z,{"data-track":"CodeBlock|reset|".concat(h.pathname),onClick:S},l.createElement(a.Tooltip,{label:"Reset the demo"},l.createElement(a.Icon,{icon:"redo",size:{sm:"5x",md:"4x"}})))),l.createElement(a.Fade,{in:j},l.createElement(a.Collapse,{in:j,unmountOnExit:!0},l.createElement(i.uz,{style:p}))))};Demo.displayName="Demo";var h=Demo},27003:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/lab/date-pickers/calendar",function(){return t(34708)}])}},function(e){e.O(0,[4960,9774,2888,179],function(){return e(e.s=27003)}),_N_E=e.O()}]);