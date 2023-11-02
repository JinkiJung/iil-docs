"use strict";(self.webpackChunkiil_docs=self.webpackChunkiil_docs||[]).push([[599],{5715:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>a,frontMatter:()=>r,metadata:()=>d,toc:()=>l});var t=i(5893),s=i(1151);const r={sidebar_position:2},o="Model - v1.0.0",d={id:"model",title:"Model - v1.0.0",description:"iil is defined with the attributes below:",source:"@site/docs/model.md",sourceDirName:".",slug:"/model",permalink:"/docs/model",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/intro"},next:{title:"State",permalink:"/docs/state"}},c={},l=[{value:"for work description",id:"for-work-description",level:2},{value:"for meta data",id:"for-meta-data",level:2},{value:"for interaction handling",id:"for-interaction-handling",level:2},{value:"for exception handling",id:"for-exception-handling",level:2}];function h(e){const n={code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"model---v100",children:"Model - v1.0.0"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"iil"})," is defined with the attributes below:"]}),"\n",(0,t.jsx)(n.h2,{id:"for-work-description",children:"for work description"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"UUID goal;"})," : Unique identifier for the goal that the task is associated with."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"ConditionDto activateIf;"})," : The condition under which the task is activated."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"ActionDto act;"})," : The action that the task performs."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"ActorDto actor;"})," : The actor who performs the task."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"ConditionDto finishIf;"})," : The condition under which the task is completed."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Map<String, Object> input;"})," : The input required for the task."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Map<String, Object> output;"})," : The output produced by the task."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Map<String, Object> next;"})," : The next task to be performed after the current task."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Map<String, Object> variable;"})," : Variables associated with the task."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"for-meta-data",children:"for meta data"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"UUID id;"})," : Unique identifier for the task."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"String namespace;"})," : The namespace under which the task is categorized."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"String version;"})," : Version number of the task."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"String maintainer;"})," : The person or entity responsible for maintaining the task."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"String owner;"})," : The owner of the task."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"IilState state;"})," : The current state of the task."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"LocalDateTime updatedAt;"})," : The timestamp of when the task was last updated."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Map<String, Object> about;"})," : Description of the task."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"for-interaction-handling",children:"for interaction handling"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Map<String, Object> help;"})," : Information that is provided when user requests for help."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"for-exception-handling",children:"for exception handling"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"ConditionDto abortIf;"})," : The condition under which the task is aborted."]}),"\n"]})]})}function a(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>d,a:()=>o});var t=i(7294);const s={},r=t.createContext(s);function o(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);