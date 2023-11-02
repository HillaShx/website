"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6341],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(a),u=o,h=m["".concat(l,".").concat(u)]||m[u]||d[u]||r;return a?n.createElement(h,i(i({ref:t},c),{},{components:a})):n.createElement(h,i({ref:t},c))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},3158:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var n=a(7462),o=(a(7294),a(3905));const r={slug:"for-data-teams",title:"Data teams can deliver 10x better to the rest of us",authors:["moshe"],tags:["opensource","productivity"]},i=void 0,s={permalink:"/blog/for-data-teams",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2023-10-29/index.md",source:"@site/blog/2023-10-29/index.md",title:"Data teams can deliver 10x better to the rest of us",description:"TLDR",date:"2023-10-29T00:00:00.000Z",formattedDate:"October 29, 2023",tags:[{label:"opensource",permalink:"/blog/tags/opensource"},{label:"productivity",permalink:"/blog/tags/productivity"}],readingTime:3.185,hasTruncateMarker:!1,authors:[{name:"Moshe Roth",title:"CoCMD",url:"https://www.linkedin.com/in/mosherot/",imageURL:"https://media.licdn.com/dms/image/C5603AQEh7IGVERPRJg/profile-displayphoto-shrink_200_200/0/1516494237131?e=1704326400&v=beta&t=OPIydfwtlpmVSOKhxNvBZWj6-wiyDC4mCJHNKRp42PU",key:"moshe"}],frontMatter:{slug:"for-data-teams",title:"Data teams can deliver 10x better to the rest of us",authors:["moshe"],tags:["opensource","productivity"]},nextItem:{title:'New opensource to replace long "Getting Started"s forever',permalink:"/blog/new-opensource"}},l={authorsImageUrls:[void 0]},p=[{value:"TLDR",id:"tldr",level:2},{value:"Setting the stage",id:"setting-the-stage",level:2},{value:"The Challenges Data Teams Face",id:"the-challenges-data-teams-face",level:2},{value:"How CoCMD Can Help",id:"how-cocmd-can-help",level:2},{value:"Streamlined Toolchain Setup",id:"streamlined-toolchain-setup",level:3},{value:"Effortless Onboarding",id:"effortless-onboarding",level:3},{value:"Automation of Repetitive Tasks",id:"automation-of-repetitive-tasks",level:3},{value:"Enhanced Collaboration",id:"enhanced-collaboration",level:3},{value:"Getting Started with CoCMD for Data Teams",id:"getting-started-with-cocmd-for-data-teams",level:2}],c={toc:p},m="wrapper";function d(e){let{components:t,...a}=e;return(0,o.kt)(m,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"tldr"},"TLDR"),(0,o.kt)("p",null,"This is a standard DBT project ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/dbt-labs/jaffle_shop"},"example data project"),' "Getting Started",\n',(0,o.kt)("strong",{parentName:"p"},"long long long list of instructions on how to setup and run everything. familiar right?")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://dev-to-uploads.s3.amazonaws.com/uploads/articles/assyk4ugux0trxg33ld4.png",alt:"Image description"})),(0,o.kt)("p",null,"with ",(0,o.kt)("a",{parentName:"p",href:"https://cocmd.org"},"CoCMD")," you could install all dependancies, setup and run it with one line, for any operating system:\n",(0,o.kt)("inlineCode",{parentName:"p"},"datateam.onboarding")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://dev-to-uploads.s3.amazonaws.com/uploads/articles/22ixemjtqzozfnd63uo1.png",alt:"Image description"})),(0,o.kt)("p",null,"behind the scenes, just one yaml and an awesome hub:\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/cocmd/cocmd/blob/master/examples/onboarding/data_team/cocmd.yaml"},"code")),(0,o.kt)("h2",{id:"setting-the-stage"},"Setting the stage"),(0,o.kt)("p",null,"Data teams are instrumental in data-driven organizations. "),(0,o.kt)("p",null,"A significant aspect of their role involves conveying to others how to manage data operations and services."),(0,o.kt)("p",null,"A key facet of their responsibilities entails effectively imparting knowledge on managing data operations and services to others. This often takes the form of "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"extensive how-to guides, "),(0,o.kt)("li",{parentName:"ul"},"documentation, "),(0,o.kt)("li",{parentName:"ul"},"archived Slack conversations, "),(0,o.kt)("li",{parentName:"ul"},"and the sharing of internal knowledge.\nThey guide teams on various tasks, such as setting up machines for data operations, conducting queries, establishing connections, and more.")),(0,o.kt)("h2",{id:"the-challenges-data-teams-face"},"The Challenges Data Teams Face"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Complex Toolchains:")," Data professionals often use a range of tools for data collection, data processing, and analysis. Coordinating these tools and ensuring their proper setup can be a daunting task.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Onboarding:")," New members joining the data team need to quickly adapt to the toolchains and workflows. A smooth onboarding process is crucial for their productivity.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Repetitive Tasks:")," Data teams frequently deal with repetitive tasks, such as data preprocessing, model training, and report generation. Automating these tasks can save valuable time.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Collaboration:")," Effective collaboration within the data team and across departments is essential for sharing insights and results. This requires streamlined processes for sharing code, data, and documentation."))),(0,o.kt)("h2",{id:"how-cocmd-can-help"},"How CoCMD Can Help"),(0,o.kt)("p",null,"CoCMD offers a simple and open command-line interface to address these challenges. Here's how data teams can benefit:"),(0,o.kt)("h3",{id:"streamlined-toolchain-setup"},"Streamlined Toolchain Setup"),(0,o.kt)("p",null,"CoCMD can automate the setup of the various tools and packages needed by data teams. With a single command, team members can have their development environments configured consistently."),(0,o.kt)("h3",{id:"effortless-onboarding"},"Effortless Onboarding"),(0,o.kt)("p",null,"New team members can be onboarded seamlessly using CoCMD. By following predefined onboarding playbooks, they can quickly become productive, eliminating the time-consuming process of manual setup and configuration."),(0,o.kt)("h3",{id:"automation-of-repetitive-tasks"},"Automation of Repetitive Tasks"),(0,o.kt)("p",null,"CoCMD allows data teams to create playbooks for automating repetitive data-related tasks. Whether it's data preprocessing, model training, or report generation, these tasks can be turned into repeatable, one-click processes."),(0,o.kt)("h3",{id:"enhanced-collaboration"},"Enhanced Collaboration"),(0,o.kt)("p",null,"CoCMD playbooks and routines can be easily shared within the team and with other departments. This ensures that everyone is using the same tools and processes, leading to improved collaboration and consistent results."),(0,o.kt)("h2",{id:"getting-started-with-cocmd-for-data-teams"},"Getting Started with CoCMD for Data Teams"),(0,o.kt)("p",null,"To get started with CoCMD for your data team, follow these simple steps:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Install CoCMD:")," If you haven't already, install CoCMD using the installation command provided on the ",(0,o.kt)("a",{parentName:"p",href:"https://cocmd.org"},"CoCMD website"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Select Data Packages:")," Choose the data-related packages you need from the CoCMD-Hub, which includes packages for data analysis tools, libraries, and more.\nFind in the hub what you need\n",(0,o.kt)("a",{parentName:"p",href:"https://cocmd.org/docs/packages/from_hub/"},"https://cocmd.org/docs/packages/from_hub/"),"\nor write your own ",(0,o.kt)("a",{parentName:"p",href:"https://cocmd.org/docs/intro"},"https://cocmd.org/docs/intro"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Create Data Playbooks:")," Develop playbooks and routines specific to your data tasks. These can include data preprocessing, machine learning model training, and report generation.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Share with Your Team:")," Share your playbooks with your data team, making it easy for everyone to access and use them."))),(0,o.kt)("p",null,"With CoCMD, data teams can deliver 10 times more effectively, providing insights and solutions to the rest of the organization faster and with greater consistency:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"great dev experience with cocmd cli"),(0,o.kt)("li",{parentName:"ul"},"private and secure"),(0,o.kt)("li",{parentName:"ul"},"re-use community knowledge"),(0,o.kt)("li",{parentName:"ul"},"automatic Docs generation"),(0,o.kt)("li",{parentName:"ul"},"automatic notifications system"),(0,o.kt)("li",{parentName:"ul"},"automatic recommendation system"),(0,o.kt)("li",{parentName:"ul"},"ready distributions to all operating systems")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://dev-to-uploads.s3.amazonaws.com/uploads/articles/8vhvbx12f5furrb574d7.png",alt:"Image description"})),(0,o.kt)("p",null,"Visit the ",(0,o.kt)("a",{parentName:"p",href:"https://cocmd.org"},"CoCMD website")," to learn more about CoCMD and how it can revolutionize your data team's processes."),(0,o.kt)("p",null,"Contact the CoCMD team at ",(0,o.kt)("a",{parentName:"p",href:"mailto:mzsrtgzr2@gmail.com"},"mzsrtgzr2@gmail.com")," for any questions or assistance."))}d.isMDXComponent=!0}}]);