"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3737],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>k});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),c=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(a),m=r,k=u["".concat(i,".").concat(m)]||u[m]||d[m]||s;return a?n.createElement(k,o(o({ref:t},p),{},{components:a})):n.createElement(k,o({ref:t},p))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,o=new Array(s);o[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<s;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},3961:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const s={},o="aws-s3",l={unversionedId:"packages/from_hub/aws-s3",id:"packages/from_hub/aws-s3",title:"aws-s3",description:"Visit the package  Source Code",source:"@site/docs/packages/from_hub/aws-s3.md",sourceDirName:"packages/from_hub",slug:"/packages/from_hub/aws-s3",permalink:"/docs/packages/from_hub/aws-s3",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/packages/from_hub/aws-s3.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"From Hub",permalink:"/docs/packages/from_hub/"},next:{title:"docker",permalink:"/docs/packages/from_hub/docker"}},i={},c=[{value:"Visit the package  Source Code ",id:"visit-the-package--source-code-",level:3},{value:"automations (4)",id:"automations-4",level:2},{value:"aliases (7):",id:"aliases-7",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"aws-s3"},"aws-s3"),(0,r.kt)("h3",{id:"visit-the-package--source-code-"},"Visit the package ",(0,r.kt)("a",{parentName:"h3",href:"https://github.com/cocmd/hub/tree/master/packages/aws-s3"}," Source Code ")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Please contribute your aws-s3 scripts and shortcuts\nHow to contribute? -")),(0,r.kt)("admonition",{title:"How To Install?",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"run in terminal:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cocmd install -y aws-s3\n"))),(0,r.kt)("h2",{id:"automations-4"},"automations (4)"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"command"),(0,r.kt)("th",{parentName:"tr",align:null},"env"),(0,r.kt)("th",{parentName:"tr",align:null},"description"),(0,r.kt)("th",{parentName:"tr",align:null},"how to run?"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"aws-s3.s3-upload"),(0,r.kt)("td",{parentName:"tr",align:null},"Any"),(0,r.kt)("td",{parentName:"tr",align:null},"Upload a file to an S3 bucket"),(0,r.kt)("td",{parentName:"tr",align:null},"run ",(0,r.kt)("inlineCode",{parentName:"td"},"aws-s3.s3-upload")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"cocmd run aws-s3.s3-upload"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"aws-s3.s3-download"),(0,r.kt)("td",{parentName:"tr",align:null},"Any"),(0,r.kt)("td",{parentName:"tr",align:null},"Download a file from an S3 bucket"),(0,r.kt)("td",{parentName:"tr",align:null},"run ",(0,r.kt)("inlineCode",{parentName:"td"},"aws-s3.s3-download")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"cocmd run aws-s3.s3-download"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"aws-s3.s3-list"),(0,r.kt)("td",{parentName:"tr",align:null},"Any"),(0,r.kt)("td",{parentName:"tr",align:null},"List all files in an S3 bucket"),(0,r.kt)("td",{parentName:"tr",align:null},"run ",(0,r.kt)("inlineCode",{parentName:"td"},"aws-s3.s3-list")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"cocmd run aws-s3.s3-list"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"aws-s3.s3-delete"),(0,r.kt)("td",{parentName:"tr",align:null},"Any"),(0,r.kt)("td",{parentName:"tr",align:null},"Delete a file from an S3 bucket"),(0,r.kt)("td",{parentName:"tr",align:null},"run ",(0,r.kt)("inlineCode",{parentName:"td"},"aws-s3.s3-delete")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"cocmd run aws-s3.s3-delete"))))),(0,r.kt)("h2",{id:"aliases-7"},"aliases (7):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"alias aws='aws'\nalias s3ls='aws s3 ls'\nalias s3cp='aws s3 cp'\nalias s3mv='aws s3 mv'\nalias s3rm='aws s3 rm'\nalias s3sync='aws s3 sync'\n\n")))}d.isMDXComponent=!0}}]);