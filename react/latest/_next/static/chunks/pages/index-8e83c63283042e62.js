(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5405],{13419:function(e,t,n){"use strict";n.r(t);var l=n(98922),r=n(5081),a=n(39097),o=n.n(a),c=n(2784),i=n(71233),m=n(12640),u=n(62395),d=n(26700),x=n(15715),s=n(40001),E=n(73193);function h(){return(h=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e}).apply(this,arguments)}function p(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n,l,r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var a=[],o=!0,c=!1;try{for(r=r.call(e);!(o=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);o=!0);}catch(i){c=!0,l=i}finally{try{o||null==r.return||r.return()}finally{if(c)throw l}}return a}}(e,t)||function(e,t){if(e){if("string"==typeof e)return g(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return g(e,t)}}(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,l=Array(t);n<t;n++)l[n]=e[n];return l}var f=(0,r.Zs)("/tonic-ui/react/latest"),b="https://github.com/trendmicro-frontend/tonic-ui",y=(0,c.forwardRef)(function(e,t){var n=(0,u.v)(),r=p((0,l.useColorMode)(),2),a=r[0],x=r[1],g=p((0,l.useColorStyle)({colorMode:a}),1)[0],y=(0,s.Z)(),v=(0,c.useCallback)(function(){n.add(function(e){return c.createElement(m.Z,{onClose:function(){y("InstantSearch","close_instant_search_modal"),e()}})})},[n]);return(0,c.useEffect)(function(){(0,E.Z)(a)},[a]),c.createElement(l.Box,h({as:"header",ref:t,position:"fixed",top:0,zIndex:"fixed",height:"12x",width:"100%",backdropFilter:"blur(20px)",backgroundColor:g.background.primary,boxShadow:"0px -1px 1px inset ".concat({light:"rgba(0, 0, 0, 0.12)",dark:"rgba(255, 255, 255, 0.12)"}[a]),transition:"all 0.2s"},e),c.createElement(l.Box,{display:"flex",position:"relative",height:"100%",alignItems:"center",justifyContent:"space-between"},c.createElement(l.Box,null,c.createElement(o(),{href:"/",legacyBehavior:!0,passHref:!0},c.createElement(l.Link,{"data-track":"Header|click_landing_page",background:"transparent",color:g.color.primary,fontSize:"xl",lineHeight:"lg",outline:"none",px:"4x",py:"2x",textDecoration:"none",_active:{color:g.color.emphasis},_hover:{color:g.color.emphasis},_visited:{color:g.color.primary}},c.createElement(l.Image,{alt:"",src:"".concat(f,"/images/").concat({light:"tonic-logo-light.svg",dark:"tonic-logo-dark.svg"}[a]),height:"8x",marginRight:"2x"}),c.createElement(l.Text,null,"Tonic UI")))),c.createElement(l.Box,{display:"flex",flex:"none",width:"auto",alignItems:"center",columnGap:"4x",px:"4x"},c.createElement(d.Z,{"data-track":"Header|open_instant_search_modal",onClick:v},"Search..."),c.createElement(l.Box,{"data-track":"Header|click_toggle_color_mode|".concat("light"===a?"dark":"light"),as:"a",color:g.color.secondary,_hover:{color:g.color.primary,cursor:"pointer"},onClick:function(){return x()},display:"inline-flex",textDecoration:"none"},"light"===a&&c.createElement(l.Icon,{icon:"moon",size:24}),"dark"===a&&c.createElement(l.Icon,{icon:"sun",size:24})),c.createElement(l.Box,{"data-track":"Header|click_github_repo_url|".concat(b),as:"a",href:b,color:g.color.secondary,_hover:{color:g.color.primary,cursor:"pointer"},_visited:{color:g.color.secondary},display:"inline-flex",textDecoration:"none"},c.createElement(i.Z,{icon:["fab","github"],style:{width:24,height:24}}),c.createElement(l.Space,{width:"2x"}),c.createElement(l.Text,null,"GitHub")))))});y.displayName="DefaultPageHeader";var v=function(e){var t=p((0,l.useColorMode)(),1)[0];return c.createElement(l.Box,h({borderWidth:1,borderColor:{dark:"gray:60",light:"gray:30"}[t],borderStyle:"solid",borderRadius:"md",height:"fit-content"},e))};v.displayName="Round",t.default=function(e){var t=p((0,l.useColorMode)(),1)[0],n=p((0,l.useColorStyle)({colorMode:t}),1)[0],r={dark:"gray:70",light:"gray:30"}[t];return c.createElement(l.Box,h({backgroundColor:n.background.primary,color:n.color.primary,fontSize:"md",lineHeight:"md",height:"100vh"},e),c.createElement(y,null),c.createElement(l.Box,{maxWidth:{lg:"1024px",xl:"1280px","2xl":"1680px"},pt:"20x",px:"6x",mx:"auto"},c.createElement(l.Box,{display:"flex",flexDirection:{_:"column",xl:"row"},gap:"8x",alignItems:"center"},c.createElement(l.Box,{flex:"1"},c.createElement(l.Box,{mb:"5x"},c.createElement(l.Text,{fontSize:"4rem",fontWeight:"semibold",lineHeight:"1.25"},"Start building with Tonic UI today!")),c.createElement(l.Box,{mb:"5x"},c.createElement(l.Text,{color:n.color.tertiary},"Tonic UI is a UI component library for React, built with Emotion and Styled System. It is designed to be easy to use and easy to customize.")),c.createElement(l.Box,{display:"inline-flex"},c.createElement(l.Grid,{templateColumns:"1fr 1fr",gap:"4x"},c.createElement(o(),{href:"/getting-started",legacyBehavior:!0,passHref:!0},c.createElement(l.ButtonLink,{"data-track":"ClickThrough|click_get_started_link|/getting-started",variant:"primary",fontSize:"lg",lineHeight:"lg",px:"4x",py:"3x",textDecoration:"none"},"Get Started",c.createElement(l.Space,{width:"2x"}),c.createElement(l.Icon,{icon:"chevron-right"}))),c.createElement(o(),{href:b,legacyBehavior:!0,passHref:!0},c.createElement(l.ButtonLink,{target:"_blank","data-track":"ClickThrough|click_github_repo_url|".concat(b),variant:"secondary",fontSize:"lg",lineHeight:"lg",px:"4x",py:"3x",textDecoration:"none"},c.createElement(i.Z,{icon:["fab","github"],style:{width:24,height:24}}),c.createElement(l.Space,{width:"2x"}),c.createElement(l.Text,null,"GitHub")))))),c.createElement(l.Box,{flex:"1",p:"6x",backgroundColor:{light:"white",dark:"black"}[t],boxShadow:n.shadow.thick,width:"100%",fontSize:"sm",lineHeight:"sm"},c.createElement(l.Grid,{templateColumns:{sm:"1fr",md:"1fr",lg:"1fr",xl:"1fr 1fr"},gap:"6x"},c.createElement(l.Box,{display:"flex",flexDirection:"column",rowGap:"6x",whiteSpace:"nowrap"},c.createElement(l.Flex,{alignItems:"center",columnGap:"6x"},c.createElement(l.Badge,{variant:"dot",isInvisible:!0},c.createElement(l.Icon,{icon:"alert"})),c.createElement(l.Badge,{variant:"dot"},c.createElement(l.Icon,{icon:"alert"})),c.createElement(l.Badge,{variant:"dot",width:"3x",height:"3x"},c.createElement(l.Icon,{icon:"alert"})),c.createElement(l.Badge,{badgeContent:"99+"},c.createElement(l.Icon,{icon:"alert"})),c.createElement(l.Badge,{badgeContent:c.createElement(l.Text,{fontFamily:"mono",fontSize:"xs"},"!")},c.createElement(l.Icon,{icon:"alert"})),c.createElement(l.Badge,{badgeContent:"99+"},c.createElement(l.Skeleton,{variant:"rectangle",borderRadius:"sm",width:"8x",height:"8x"})),c.createElement(l.Badge,{badgeContent:c.createElement(l.Text,{fontFamily:"mono",fontSize:"xs"},"!")},c.createElement(l.Skeleton,{variant:"rectangle",borderRadius:"sm",width:"8x",height:"8x"}))),c.createElement(l.Box,null,c.createElement(l.Box,{display:"inline-flex",alignItems:"center",columnGap:"4x"},c.createElement(l.Flex,{columnGap:"2x"},c.createElement(l.Checkbox,{defaultChecked:!1}),c.createElement(l.Checkbox,{defaultChecked:!0})),c.createElement(l.Flex,{columnGap:"2x"},c.createElement(l.Switch,{size:"sm",defaultChecked:!1}),c.createElement(l.Switch,{size:"sm",defaultChecked:!0})),c.createElement(l.Flex,{columnGap:"2x"},c.createElement(l.Tag,{variant:"solid"},"Solid Tag"),c.createElement(l.Tag,{variant:"outline"},"Outline Tag")))),c.createElement(l.Box,null,c.createElement(l.Box,{display:"inline-flex",alignItems:"center",columnGap:"4x"},c.createElement(l.Flex,{columnGap:"2x"},c.createElement(l.Button,{variant:"primary"},"Primary"),c.createElement(l.Button,{variant:"secondary"},"Secondary")),c.createElement(l.ButtonGroup,null,c.createElement(l.Button,null,c.createElement(l.Icon,{icon:"chart-area"})),c.createElement(l.Divider,{orientation:"vertical",color:r}),c.createElement(l.Button,null,c.createElement(l.Icon,{icon:"chart-bar"})),c.createElement(l.Divider,{orientation:"vertical",color:r}),c.createElement(l.Button,null,c.createElement(l.Icon,{icon:"chart-pie"}))))),c.createElement(l.Box,null,c.createElement(l.InputGroup,null,c.createElement(l.InputGroupPrepend,null,c.createElement(l.InputGroupAddon,{variant:"filled"},"@")),c.createElement(l.Input,{placeholder:"Username"}))),c.createElement(l.Box,null,c.createElement(l.InputGroup,null,c.createElement(l.InputGroupPrepend,null,c.createElement(l.InputGroupAddon,{variant:"filled"},"$")),c.createElement(l.Input,null),c.createElement(l.InputGroupAppend,null,c.createElement(l.InputGroupAddon,{variant:"filled"},".00")))),c.createElement(l.Box,null,c.createElement(l.SearchInput,{placeholder:"Search"}))),c.createElement(l.Box,null,c.createElement(l.ModalContent,{height:"100%"},c.createElement(l.ModalHeader,null,"Modal Title"),c.createElement(l.ModalBody,null,c.createElement(l.Alert,{variant:"outline",severity:"warning",mb:"4x"},c.createElement(l.Text,null,"This is a warning alert")),c.createElement(l.Text,{mb:"4x"},"Modal body text goes here."),c.createElement(x.Z,null)),c.createElement(l.ModalFooter,null,c.createElement(l.Button,{variant:"primary",minWidth:"20x"},"Save Changes"),c.createElement(l.Space,{width:"2x"}),c.createElement(l.Button,{minWidth:"20x"},"Cancel")))),c.createElement(v,{p:"3x"},c.createElement(l.MenuItem,{value:"general"},c.createElement(l.Icon,{icon:"settings",mr:"2x"}),c.createElement(l.Text,null,"General")),c.createElement(l.MenuItem,{value:"accounts"},c.createElement(l.Icon,{icon:"user-team",mr:"2x"}),c.createElement(l.Text,null,"Accounts")),c.createElement(l.MenuItem,{value:"privacy"},c.createElement(l.Icon,{icon:"lock",mr:"2x"}),c.createElement(l.Text,null,"Privacy")),c.createElement(l.MenuDivider,null),c.createElement(l.MenuItem,{disabled:!0,value:"restore-defaults"},c.createElement(l.Icon,{icon:"undo",mr:"2x"}),c.createElement(l.Text,null,"Restore Defaults"))),c.createElement(v,null,c.createElement(l.Table,{variant:"default",pb:"3x"},c.createElement(l.TableHeader,null,c.createElement(l.TableHeaderRow,null,c.createElement(l.TableHeaderCell,{width:"240px"},c.createElement(l.Box,{display:"inline-flex",alignItems:"center"},"Name",c.createElement(l.Space,{width:"2x"}),c.createElement(l.Icon,{icon:"arrow-up",size:"3x"}))),c.createElement(l.TableHeaderCell,{width:"136px",textAlign:"right"},"Size"))),c.createElement(l.TableBody,null,c.createElement(l.TableRow,null,c.createElement(l.TableCell,{width:"240px"},"assets"),c.createElement(l.TableCell,{width:"136px",textAlign:"right"},"11 MB")),c.createElement(l.TableRow,null,c.createElement(l.TableCell,{width:"240px"},"build"),c.createElement(l.TableCell,{width:"136px",textAlign:"right"},"20 MB")),c.createElement(l.TableRow,null,c.createElement(l.TableCell,{width:"240px"},"src"),c.createElement(l.TableCell,{width:"136px",textAlign:"right"},"2 MB")),c.createElement(l.TableRow,null,c.createElement(l.TableCell,{width:"240px"},"test"),c.createElement(l.TableCell,{width:"136px",textAlign:"right"},"125.4 KB"))))))))))}},85356:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(13419)}])}},function(e){e.O(0,[9774,2888,179],function(){return e(e.s=85356)}),_N_E=e.O()}]);