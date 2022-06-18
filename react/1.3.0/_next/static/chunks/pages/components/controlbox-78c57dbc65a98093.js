(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5738],{79403:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return o}});var a=n(7896),i=n(59740),r=(n(2784),n(30876)),d=["components"],l={};function o(e){var t=e.components,n=(0,i.Z)(e,d);return(0,r.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",null,"ControlBox"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ControlBox")," provides style props to change it's styles based on a sibling ",(0,r.kt)("inlineCode",{parentName:"p"},"checkbox")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"radio")," input. It relies on a ",(0,r.kt)("a",{parentName:"p",href:"https://dev.to/lkopacz/create-custom-keyboard-accessible-checkboxes-2036"},"common CSS technique")," for styling custom controls."),(0,r.kt)("p",null,"For this component to work, it should have a sibling ",(0,r.kt)("inlineCode",{parentName:"p"},"input")," and be contained in a ",(0,r.kt)("inlineCode",{parentName:"p"},"label"),"."),(0,r.kt)("h2",null,"Usage"),(0,r.kt)("h3",null,"Creating a custom checkbox"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'<Flex\n  as="label"\n  alignItems="center"\n>\n  <VisuallyHidden\n    as="input"\n    type="checkbox"\n    defaultChecked={false}\n  />\n  <ControlBox\n    border="1"\n    borderRadius="sm"\n    width="6x"\n    height="6x"\n    verticalAlign="middle"\n    _checked={{\n      backgroundColor: \'green:50\',\n      borderColor: \'green:50\',\n      color: \'white\',\n    }}\n    _focus={{\n      borderColor: \'green:60\',\n      boxShadow: \'rgba(66, 153, 225, 0.6) 0px 0px 0px 3px\',\n    }}\n    _disabled={{\n      opacity: \'.3\',\n    }}\n  >\n    <Icon icon="check-s" size="4x" />\n  </ControlBox>\n  <Space width="2x" />\n  <Text userSelect="none">\n    Checkbox\n  </Text>\n</Flex>\n')),(0,r.kt)("h3",null,"Creating a custom radio button"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'<Flex\n  as="label"\n  alignItems="center"\n>\n  <VisuallyHidden\n    as="input"\n    type="radio"\n    defaultChecked={false}\n  />\n  <ControlBox\n    type="radio"\n    border="2"\n    borderRadius="circle"\n    borderColor="inherit"\n    bg="inherit"\n    width="6x"\n    height="6x"\n    verticalAlign="middle"\n    _checked={{\n      backgroundColor: \'green:50\',\n      borderColor: \'green:50\',\n    }}\n    _focus={{\n      boxShadow: \'rgba(66, 153, 225, 0.6) 0px 0px 0px 3px\',\n    }}\n    _hover={{\n      borderColor: \'gray:30\',\n    }}\n    _disabled={{\n      opacity: \'.3\',\n    }}\n  >\n    <Icon icon="circle-o" size="4x" />\n  </ControlBox>\n  <Space width="2x" />\n  <Text userSelect="none">\n    Radio Button\n  </Text>\n</Flex>\n')),(0,r.kt)("h2",null,"Props"),(0,r.kt)("p",null,"By default, it toggles the opacity of the ",(0,r.kt)("inlineCode",{parentName:"p"},"ControlBox")," children by setting ",(0,r.kt)("inlineCode",{parentName:"p"},"_child")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"{ opacity: 0 }")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"_checkedAndChild")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"{ opacity: 1 }"),"."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Selector"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"_","child"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"[input] + & > *")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Styles for the child of the ",(0,r.kt)("inlineCode",{parentName:"td"},"ControlBox"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"_","disabled"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"[input]:disabled + &")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Styles for when the sibling ",(0,r.kt)("inlineCode",{parentName:"td"},"input")," is disabled.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"_","focus"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"[input]:focus + &")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Styles for when the sibling ",(0,r.kt)("inlineCode",{parentName:"td"},"input")," is focused.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"_","hover"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"[input]:hover:not(:disabled):not(:checked):not(:focus) + &")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Styles for when the sibling ",(0,r.kt)("inlineCode",{parentName:"td"},"input")," is hovered.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"_","checked"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"[input]:checked + &")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Styles for when the sibling ",(0,r.kt)("inlineCode",{parentName:"td"},"input")," is checked.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"_","checkedAndActive"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"[input]:checked:active:not(:disabled):not(:focus) + &")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Styles for when the sibling ",(0,r.kt)("inlineCode",{parentName:"td"},"input")," is checked and actived.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"_","checkedAndChild"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"[input]:checked + & > *")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Styles for the child of the ",(0,r.kt)("inlineCode",{parentName:"td"},"ControlBox")," when the sibling ",(0,r.kt)("inlineCode",{parentName:"td"},"input")," is checked.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"_","checkedAndDisabled"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"[input]:checked:disabled + &")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Styles for when the sibling ",(0,r.kt)("inlineCode",{parentName:"td"},"input")," is checked and disabled.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"_","checkedAndFocus"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"[input]:checked:focus + &")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Styles for when the sibling ",(0,r.kt)("inlineCode",{parentName:"td"},"input")," is checked and focused.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"_","checkedAndHover"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"[input]:checked:hover:not(:disabled):not(:focus) + &")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Styles for when the sibling ",(0,r.kt)("inlineCode",{parentName:"td"},"input")," is checked and hovered.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"_","indeterminate"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"[input][data-indeterminate=true] + &")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Styles for when the sibling ",(0,r.kt)("inlineCode",{parentName:"td"},"input")," is indeterminate.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"_","indeterminateAndActive"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"[input][data-indeterminate=true]:active:not(:disabled):not(:focus) + &")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Styles for when the sibling ",(0,r.kt)("inlineCode",{parentName:"td"},"input")," is indeterminate and actived.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"_","indeterminateAndChild"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"[input][data-indeterminate=true] + & > *")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Styles for the child of the ",(0,r.kt)("inlineCode",{parentName:"td"},"ControlBox")," when the sibling ",(0,r.kt)("inlineCode",{parentName:"td"},"input")," is indeterminate.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"_","indeterminateAndDisabled"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"[input][data-indeterminate=true]:disabled + &")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Styles for when the sibling ",(0,r.kt)("inlineCode",{parentName:"td"},"input")," is indeterminate and disabled.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"_","indeterminateAndFocus"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"[input][data-indeterminate=true]:focus + &")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Styles for when the sibling ",(0,r.kt)("inlineCode",{parentName:"td"},"input")," is indeterminate and focused.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"_","indeterminateAndHover"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"[input][data-indeterminate=true]:hover:not(:disabled):not(:focus) + &")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Styles for when the sibling ",(0,r.kt)("inlineCode",{parentName:"td"},"input")," is indeterminate and hovered.")))))}o.isMDXComponent=!0},10338:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/controlbox",function(){return n(79403)}])}},function(e){e.O(0,[9774,2888,179],(function(){return t=10338,e(e.s=t);var t}));var t=e.O();_N_E=t}]);