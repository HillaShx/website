(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2950],{3905:(e,t,o)=>{"use strict";o.d(t,{Zo:()=>d,kt:()=>b});var r=o(7294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,r,a=function(e,t){if(null==e)return{};var o,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var c=r.createContext({}),i=function(e){var t=r.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},d=function(e){var t=i(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var o=e.components,a=e.mdxType,n=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=i(o),m=a,b=p["".concat(c,".").concat(m)]||p[m]||u[m]||n;return o?r.createElement(b,l(l({ref:t},d),{},{components:o})):r.createElement(b,l({ref:t},d))}));function b(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=o.length,l=new Array(n);l[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:a,l[1]=s;for(var i=2;i<n;i++)l[i]=o[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,o)}m.displayName="MDXCreateElement"},1410:(e,t,o)=>{const r=o(7694),a=o(3618),n={title:"CoCMD",tagline:"community powered cmd shortcuts and automations",favicon:"img/coding_color.png",url:"https://cocmd.org",baseUrl:"/",organizationName:"cocmd",projectName:"website",onBrokenLinks:"ignore",onBrokenMarkdownLinks:"warn",i18n:{defaultLocale:"en",locales:["en"]},presets:[["classic",{docs:{sidebarPath:6679,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/"},blog:{showReadingTime:!0,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/"},theme:{customCss:2295}}]],customFields:{CURRENT_STABLE_VERSION:"v1.2.3.4",LINUX_X11_APP_IMAGE_DOWNLOAD_URL:"https://github.com/cocmd/cocmd/releases/download/{{{VERSION}}}/Cocmd-X11.AppImage",LINUX_X11_DEB_DOWNLOAD_URL:"https://github.com/cocmd/cocmd/releases/download/{{{VERSION}}}/cocmd-debian-x11-amd64.deb",LINUX_WAYLAND_DEB_DOWNLOAD_URL:"https://github.com/cocmd/cocmd/releases/download/{{{VERSION}}}/cocmd-debian-wayland-amd64.deb",MAC_INTEL_DOWNLOAD_URL:"https://github.com/cocmd/cocmd/releases/download/{{{VERSION}}}/Cocmd-Mac-Intel.zip",MAC_M1_DOWNLOAD_URL:"https://github.com/cocmd/cocmd/releases/download/{{{VERSION}}}/Cocmd-Mac-M1.zip",WIN_INSTALLER_DOWNLOAD_URL:"https://github.com/cocmd/cocmd/releases/download/{{{VERSION}}}/Cocmd-Win-Installer-x86_64.exe",WIN_PORTABLE_DOWNLOAD_URL:"https://github.com/cocmd/cocmd/releases/download/{{{VERSION}}}/Cocmd-Win-Portable-x86_64.zip"},themeConfig:{image:"img/docusaurus-social-card.jpg",colorMode:{disableSwitch:!0},navbar:{title:"CoCMD",logo:{alt:"My Site Logo",src:"img/coding.png"},items:[{to:"/install",sidebarId:"installSidebar",position:"left",label:"Install"},{type:"docSidebar",sidebarId:"tutorialSidebar",position:"left",label:"Docs"},{to:"/blog",label:"Blog",position:"left"},{href:"https://github.com/cocmd/cocmd",label:"GitHub",position:"left"}]},footer:{style:"dark",links:[{title:"Docs",items:[{label:"Tutorial",to:"/docs/intro"}]},{title:"Community",items:[{label:"Stack Overflow",href:"https://stackoverflow.com/questions/tagged/docusaurus"},{label:"Discord",href:"https://discordapp.com/invite/docusaurus"},{label:"Twitter",href:"https://twitter.com/docusaurus"}]},{title:"More",items:[{label:"Blog",to:"/blog"},{label:"GitHub",href:"https://github.com/facebook/docusaurus"}]}],copyright:`Copyright \xa9 ${(new Date).getFullYear()} My Project, Inc. Built with Docusaurus.`},prism:{theme:r,darkTheme:a}}};e.exports=n},6679:e=>{e.exports={tutorialSidebar:[{type:"autogenerated",dirName:"."}]}},1946:(e,t,o)=>{"use strict";o.d(t,{k:()=>l,s:()=>n});var r=o(1410),a=o.n(r);const n=()=>a().customFields.CURRENT_STABLE_VERSION,l=e=>a().customFields[e].replace("{{{VERSION}}}",n())},3954:(e,t,o)=>{"use strict";o.r(t),o.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var r=o(7462),a=(o(7294),o(3905)),n=o(1946);const l={title:"Install on macOS",layout:"docs"},s=void 0,c={unversionedId:"install/mac",id:"install/mac",title:"Install on macOS",description:"Cocmd currently support macOS 10.13 or greater on both Intel and Apple Silicon (M1) architectures.",source:"@site/docs/install/mac.mdx",sourceDirName:"install",slug:"/install/mac",permalink:"/docs/install/mac",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/install/mac.mdx",tags:[],version:"current",frontMatter:{title:"Install on macOS",layout:"docs"},sidebar:"tutorialSidebar",previous:{title:"Install on Linux",permalink:"/docs/install/linux"},next:{title:"Install on Windows",permalink:"/docs/install/win"}},i={},d=[{value:"Install as App Bundle",id:"install-as-app-bundle",level:2},{value:"Install using Homebrew",id:"install-using-homebrew",level:2}],p={toc:d},u="wrapper";function m(e){let{components:t,...o}=e;return(0,a.kt)(u,(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Cocmd currently support macOS 10.13 or greater on both Intel and Apple Silicon (M1) architectures.\nYou can install Cocmd both as a traditional app bundle or by using ",(0,a.kt)("a",{parentName:"p",href:"https://brew.sh/"},"Homebrew"),"."),(0,a.kt)("h2",{id:"install-as-app-bundle"},"Install as App Bundle"),(0,a.kt)("p",null,"The easiest way to install Cocmd is by downloading the appropriate app bundle.\nMake sure to choose the right version based on your processor."),(0,a.kt)("div",{className:""},(0,a.kt)("a",{className:"btn btn-lg mybtn mb-4",href:(0,n.k)("MAC_INTEL_DOWNLOAD_URL"),role:"button"},"Download Cocmd (Intel)"),(0,a.kt)("a",{className:"btn btn-lg mybtn mb-4",href:(0,n.k)("MAC_M1_DOWNLOAD_URL"),role:"button"},"Download Cocmd (Apple Silicon M1)")),(0,a.kt)("p",null,"After you've downloaded the archive, uncompress it and move it into your ",(0,a.kt)("inlineCode",{parentName:"p"},"/Applications")," folder."),(0,a.kt)("h2",{id:"install-using-homebrew"},"Install using Homebrew"),(0,a.kt)("p",null,"Cocmd can also be installed through ",(0,a.kt)("a",{parentName:"p",href:"https://brew.sh/"},"Homebrew"),", a popular macOS package manager."),(0,a.kt)("p",null,"Because Cocmd is hosted outside the core homebrew repository, you'll first need to add the appropriate\n",(0,a.kt)("em",{parentName:"p"},"tap")," by running the following command inside a terminal:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"brew tap cocmd/cocmd\n")),(0,a.kt)("p",null,"Then, you can install Cocmd by running the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"brew install cocmd\n")),(0,a.kt)("p",null,"If the process succeeded, you'll find an Cocmd app inside your ",(0,a.kt)("inlineCode",{parentName:"p"},"/Applications")," folder."),(0,a.kt)("admonition",{title:"Users coming from version 0.7.3",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"If you're coming from version 0.7.3 or earlier, you'll need to remove the previous Homebrew tap\nfirst with the following command:"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre"},"brew untap cocmd/cocmd\n"))))}m.isMDXComponent=!0},3618:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>r});const r={plain:{color:"#F8F8F2",backgroundColor:"#282A36"},styles:[{types:["prolog","constant","builtin"],style:{color:"rgb(189, 147, 249)"}},{types:["inserted","function"],style:{color:"rgb(80, 250, 123)"}},{types:["deleted"],style:{color:"rgb(255, 85, 85)"}},{types:["changed"],style:{color:"rgb(255, 184, 108)"}},{types:["punctuation","symbol"],style:{color:"rgb(248, 248, 242)"}},{types:["string","char","tag","selector"],style:{color:"rgb(255, 121, 198)"}},{types:["keyword","variable"],style:{color:"rgb(189, 147, 249)",fontStyle:"italic"}},{types:["comment"],style:{color:"rgb(98, 114, 164)"}},{types:["attr-name"],style:{color:"rgb(241, 250, 140)"}}]}},7694:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>r});const r={plain:{color:"#393A34",backgroundColor:"#f6f8fa"},styles:[{types:["comment","prolog","doctype","cdata"],style:{color:"#999988",fontStyle:"italic"}},{types:["namespace"],style:{opacity:.7}},{types:["string","attr-value"],style:{color:"#e3116c"}},{types:["punctuation","operator"],style:{color:"#393A34"}},{types:["entity","url","symbol","number","boolean","variable","constant","property","regex","inserted"],style:{color:"#36acaa"}},{types:["atrule","keyword","attr-name","selector"],style:{color:"#00a4db"}},{types:["function","deleted","tag"],style:{color:"#d73a49"}},{types:["function-variable"],style:{color:"#6f42c1"}},{types:["tag","selector","keyword"],style:{color:"#00009f"}}]}}}]);