(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5276],{79177:function(e,n,o){"use strict";o.r(n);var r=o(52322),c=o(45392),i=o(67622),s=o(73645),t=o(50397);function a(e){var n=Object.assign({div:"div",h1:"h1",p:"p",h2:"h2",a:"a",svg:"svg",use:"use",h3:"h3",blockquote:"blockquote",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",code:"code",pre:"pre"},(0,c.ah)(),e.components);return(0,r.jsxs)(n.div,{className:"main-content",id:"main-content",children:["\n",(0,r.jsx)(n.h1,{id:"migration-from-v1-to-v2",children:"Migration From v1 to v2"}),"\n",(0,r.jsx)(n.p,{children:"⚠️ This guide outlines the necessary steps to migrate from Tonic UI v1 to v2. Please review the breaking changes and assess the compatibility with your current setup before proceeding with the upgrade."}),"\n",(0,r.jsxs)(n.h2,{id:"color-style",children:["Color Style",(0,r.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#color-style",children:(0,r.jsx)(n.svg,{children:(0,r.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,r.jsxs)(n.h3,{id:"whats-changed",children:["What's changed",(0,r.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#whats-changed",children:(0,r.jsx)(n.svg,{children:(0,r.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(i.Z,{children:(0,r.jsxs)(s.Z,{alignItems:"center",columnGap:"2x",mb:"2x",children:[(0,r.jsx)(t.Z,{})," DEPRECATION NOTICE"]})}),"\nThe following keys in the color style are deprecated and will be removed in the next major release. Please update your code with the ",(0,r.jsx)(n.a,{href:"#recommended-configuration",children:"recommended configuration"})," to avoid encountering breaking changes in the future."]}),"\n"]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{align:"left",children:"Type"}),(0,r.jsx)(n.th,{align:"left",children:"Key"}),(0,r.jsx)(n.th,{align:"left",children:"Configuration"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{align:"left",children:(0,r.jsx)(n.a,{href:"../components/color-style#severity-deprecated",children:"Severity (deprecated)"})}),(0,r.jsx)(n.td,{align:"left",children:(0,r.jsx)(n.code,{children:"colorStyle.severity.*"})}),(0,r.jsx)(n.td,{align:"left",children:(0,r.jsx)(n.a,{href:"../components/color-style#severity-deprecated",children:"View"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{align:"left",children:(0,r.jsx)(n.a,{href:"../components/color-style#chart-deprecated",children:"Chart (deprecated)"})}),(0,r.jsx)(n.td,{align:"left",children:(0,r.jsx)(n.code,{children:"colorStyle.chart.classic.colors[]"})}),(0,r.jsx)(n.td,{align:"left",children:(0,r.jsx)(n.a,{href:"../components/color-style#chart-deprecated",children:"View"})})]})]})]}),"\n",(0,r.jsx)(n.p,{children:"Let's see an example here:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",children:"const [colorStyle] = useColorStyle()\n\n// These will cause exceptions in next major release (e.g. v3 or later)\nconsole.log(colorStyle.severity.info);\nconsole.log(colorStyle.chart.classic.colors[0]);\n"})}),"\n",(0,r.jsxs)(n.p,{children:["To use previously defined ",(0,r.jsx)(n.code,{children:"severity"})," and ",(0,r.jsx)(n.code,{children:"chart"})," colors, you need to pass a custom color style to ",(0,r.jsx)(n.code,{children:"TonicProvider"}),". Follow the setup below to use previous ",(0,r.jsx)(n.code,{children:"severity"})," and ",(0,r.jsx)(n.code,{children:"chart"})," colors:"]}),"\n",(0,r.jsx)(n.pre,{disabled:!0,children:(0,r.jsx)(n.code,{className:"language-jsx",children:"import React from 'react';\nimport { Box, TonicProvider, colorStyle } from '@tonic-ui/react';\n\nconst customColorStyle = {\n  ...colorStyle,\n   dark: {\n    ...colorStyle.dark,\n\n    // deprecated\n    severity: {\n      critical: 'magenta:60',\n      high: 'red:50',\n      medium: 'orange:50',\n      low: 'yellow:50',\n      safe: 'green:40',\n      info: 'gray:50',\n      unknown: 'gray:50',\n    },\n\n    // deprecated\n    chart: {\n      classic: {\n        colors: [\n          'gray:50',\n          'blue:50',\n          'green:40',\n          'orange:50',\n          'cyan:40',\n          'red:50',\n          'purple:50',\n          'teal:40',\n          'magenta:40',\n          'green:30',\n          'yellow:50',\n        ],\n      },\n    },\n  },\n  light: {\n    ...colorStyle.light,\n\n    // deprecated\n    severity: {\n      critical: 'magenta:60',\n      high: 'red:60',\n      medium: 'orange:50',\n      low: 'yellow:50',\n      safe: 'green:50',\n      info: 'gray:50',\n      unknown: 'gray:50',\n    },\n\n    // deprecated\n    chart: {\n      classic: {\n        colors: [\n          'gray:50',\n          'blue:60',\n          'green:50',\n          'orange:50',\n          'cyan:40',\n          'red:60',\n          'purple:60',\n          'teal:40',\n          'magenta:50',\n          'green:30',\n          'yellow:50',\n        ],\n      },\n    },\n  },\n};\n\nconst App = (props) => (\n  <TonicProvider\n    colorStyle={{\n      defaultValue: customColorStyle,\n    }}\n  >\n    <Box {...props} />\n  </TonicProvider>\n);\n\nexport default App;\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"recommended-configuration",children:["Recommended configuration",(0,r.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#recommended-configuration",children:(0,r.jsx)(n.svg,{children:(0,r.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,r.jsxs)(n.p,{children:["Here is the recommended configuration for utilizing the ",(0,r.jsx)(n.code,{children:"risk"})," and ",(0,r.jsx)(n.code,{children:"severity"})," colors. Please note that some old keys, such as ",(0,r.jsx)(n.code,{children:"severity.safe"})," and ",(0,r.jsx)(n.code,{children:"severity.unknown"}),", are no longer available here. You may need to adjust your code accordingly."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"import { colorStyle } from '@tonic-ui/react';\n\n// Let's say you want to define color style for your components\nconst customColorStyle = {\n  ...colorStyle,\n  dark: {\n    ...colorStyle.dark,\n    risk: {\n      high: 'red:50',\n      medium: 'yellow:50',\n      low: 'green:40',\n      none: 'gray:50',\n    },\n    severity: {\n      critical: 'magenta:60',\n      high: 'red:50',\n      medium: 'orange:50',\n      low: 'yellow:50',\n      info: 'gray:50',\n    },\n  },\n  light: {\n    ...colorStyle.light,\n    risk: {\n      high: 'red:60',\n      medium: 'yellow:50',\n      low: 'green:50',\n      none: 'gray:50',\n    },\n    severity: {\n      critical: 'magenta:60',\n      high: 'red:60',\n      medium: 'orange:50',\n      low: 'yellow:50',\n      info: 'gray:50',\n    },\n  },\n};\n"})}),"\n",(0,r.jsxs)(n.h2,{id:"icons",children:["Icons",(0,r.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#icons",children:(0,r.jsx)(n.svg,{children:(0,r.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,r.jsxs)(n.p,{children:["In Tonic UI v2, icon components must be imported separately from the ",(0,r.jsx)(n.code,{children:"@tonic-ui/react-icons"})," package. Here are the steps to ensure a smooth migration process."]}),"\n",(0,r.jsxs)(n.h3,{id:"step-1-update-the-dependencies",children:["Step 1: Update the dependencies",(0,r.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#step-1-update-the-dependencies",children:(0,r.jsx)(n.svg,{children:(0,r.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,r.jsxs)(n.p,{children:["Make sure your ",(0,r.jsx)(n.code,{children:"package.json"})," file includes the latest versions of Tonic UI packages:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-diff",children:'  "dependencies": {\n+   "@tonic-ui/react": "^2.0.0",\n+   "@tonic-ui/react-icons": "^2.0.0",\n+   "@trendmicro/tmicon": "^1.0.0"\n  }\n'})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"@trendmicro/tmicon"})," package is only necessary for step 2 if you've used the ",(0,r.jsx)(n.a,{href:"../components/icon",children:"Icon"})," component in v1 and don't want to too much changes. Proceed to step 3 if you prefer to make modifications during the upgrade."]}),"\n"]}),"\n",(0,r.jsxs)(n.h3,{id:"step-2-import-svg-icons-and-generate-icons-for-the-theme",children:["Step 2: Import SVG icons and generate icons for the theme",(0,r.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#step-2-import-svg-icons-and-generate-icons-for-the-theme",children:(0,r.jsx)(n.svg,{children:(0,r.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,r.jsx)(n.p,{children:"Manually generate icons and pass them to the theme. This step ensures your app displays icons properly after the upgrade."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",children:"import {\n  TonicProvider,\n  theme,\n} from '@tonic-ui/react';\nimport * as tmicon from '@trendmicro/tmicon';\nimport React from 'react';\n\nconst icons = tmicon.icons.reduce((acc, { name, paths, viewBox }) => {\n  return [\n    ...acc,\n    [\n      name,\n      <svg viewBox={viewBox}>\n        {paths.map((path, index) => (\n          <path\n            key={`${name}-${index}`}\n            d={path}\n          />\n        ))}\n      </svg>\n    ],\n  ];\n}, []);\n\ntheme.icons = icons; // custom icons\n\nexport default () => (\n  <TonicProvider theme={theme}>\n    <App />\n  </TonicProvider>\n);\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"step-3-update-import-location-for-icon-components",children:["Step 3: Update import location for icon components",(0,r.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#step-3-update-import-location-for-icon-components",children:(0,r.jsx)(n.svg,{children:(0,r.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,r.jsx)(n.p,{children:"This step updates the import locations for icon components within Tonic UI v2."}),"\n",(0,r.jsxs)(n.p,{children:["In Tonic UI v2, icon components must be imported separately from the ",(0,r.jsx)(n.code,{children:"@tonic-ui/react-icons"})," package. The diff should look like this:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-diff",children:'  import { Badge, Icon } from \'@tonic-ui/react\';\n+ import { AlertIcon } from \'@tonic-ui/react-icons\';\n  import React from \'react\';\n\n  export default () => (\n    <Badge variant="dot">\n-     <Icon icon="alert" size="4x" />\n+     <Icon as={AlertIcon} size="4x" />\n    </Badge>\n  );\n'})}),"\n",(0,r.jsx)(n.p,{children:"To apply this change across your project, run the provided codemod to update your code accordingly:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npx @tonic-ui/codemod@latest react/v2.0.0/import-react-icons <path>\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"step-4-remove-unnecessary-icons-and-dependencies",children:["Step 4: Remove unnecessary icons and dependencies",(0,r.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#step-4-remove-unnecessary-icons-and-dependencies",children:(0,r.jsx)(n.svg,{children:(0,r.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,r.jsxs)(n.p,{children:["After updating the icon imports, you can safely remove the unnecessary ",(0,r.jsx)(n.code,{children:"@trendmicro/tmicon"})," dependency from the theme in your ",(0,r.jsx)(n.code,{children:"app.js"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-diff",children:"- import * as tmicon from '@trendmicro/tmicon';\n- const icons = tmicon.icons.reduce((acc, { name, paths, viewBox }) => {\n-   return [\n-     ...acc,\n-     [\n-       name,\n-       <svg viewBox={viewBox}>\n-         {paths.map((path, index) => (\n-           <path\n-             key={`${name}-${index}`}\n-             d={path}\n-           />\n-         ))}\n-       </svg>\n-     ],\n-   ];\n- }, []);\n- theme.icons = icons; // custom icons\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"tmicon"})," package is no longer required to be listed in ",(0,r.jsx)(n.code,{children:"package.json"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-diff",children:'  "dependencies": {\n    "@tonic-ui/react": "^2.0.0",\n    "@tonic-ui/react-icons": "^2.0.0",\n-   "@trendmicro/tmicon": "^1.0.0"\n  }\n'})})]})}n.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,c.ah)(),e.components).wrapper;return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(a,e)})):a(e)}},19758:function(e,n,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/getting-started/migration-v1-to-v2",function(){return o(79177)}])},50397:function(e,n,o){"use strict";o.d(n,{Z:function(){return i}}),o(2784);var r=o(75928),c=o(52903),i=(0,r.Z)((0,c.tZ)("path",{d:"M6 14h4c0 1.105-0.895 2-2 2s-2-0.895-2-2v0zM15 12c-1.237-1.248-2.001-2.967-2.001-4.863 0-0.048 0-0.096 0.001-0.144l-0 0.007v-1c0-0 0-0.001 0-0.001 0-2.407-1.701-4.417-3.967-4.893l-0.033-0.006s0-0.1 0-0.1c0-0.552-0.448-1-1-1s-1 0.448-1 1v0s0 0.070 0 0.1c-2.299 0.482-4 2.492-4 4.899 0 0 0 0.001 0 0.001v-0 1c0.001 0.041 0.001 0.089 0.001 0.137 0 1.897-0.764 3.615-2.002 4.864l0.001-0.001v1h14v-1z"}),"AlertIcon")},67622:function(e,n,o){"use strict";o.d(n,{Z:function(){return l}});var r=o(53860),c=o(2784),i=o(70758),s=o(91334),t=o(52903),a=["size"],d=(0,c.forwardRef)(function(e,n){var o=e.size,c=(0,r.Kd)(e,a),d=(0,s.w)({size:o});return(0,t.tZ)(i.Z,(0,r.Zj)((0,r.Zj)({as:"label",ref:n},d),c))});d.displayName="TextLabel";var l=d}},function(e){e.O(0,[2888,9774,179],function(){return e(e.s=19758)}),_N_E=e.O()}]);