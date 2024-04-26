"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1727],{3105:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>r,toc:()=>a});var o=t(4848),s=t(8453);const l={sidebar_label:"monologue",title:"agenthub.monologue_agent.utils.monologue"},i=void 0,r={id:"python/agenthub/monologue_agent/utils/monologue",title:"agenthub.monologue_agent.utils.monologue",description:"Monologue Objects",source:"@site/docs/python/agenthub/monologue_agent/utils/monologue.md",sourceDirName:"python/agenthub/monologue_agent/utils",slug:"/python/agenthub/monologue_agent/utils/monologue",permalink:"/OpenDevin/docs/python/agenthub/monologue_agent/utils/monologue",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{sidebar_label:"monologue",title:"agenthub.monologue_agent.utils.monologue"},sidebar:"apiSidebar",previous:{title:"memory",permalink:"/OpenDevin/docs/python/agenthub/monologue_agent/utils/memory"},next:{title:"prompts",permalink:"/OpenDevin/docs/python/agenthub/monologue_agent/utils/prompts"}},h={},a=[{value:"Monologue Objects",id:"monologue-objects",level:2},{value:"__init__",id:"__init__",level:4},{value:"add_event",id:"add_event",level:4},{value:"get_thoughts",id:"get_thoughts",level:4},{value:"get_total_length",id:"get_total_length",level:4},{value:"condense",id:"condense",level:4}];function c(e){const n={code:"code",h2:"h2",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"monologue-objects",children:"Monologue Objects"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"class Monologue()\n"})}),"\n",(0,o.jsx)(n.p,{children:"The monologue is a representation for the agent's internal monologue where it can think.\nThe agent has the capability of using this monologue for whatever it wants."}),"\n",(0,o.jsx)(n.h4,{id:"__init__",children:"__init__"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"def __init__()\n"})}),"\n",(0,o.jsx)(n.p,{children:"Initialize the empty list of thoughts"}),"\n",(0,o.jsx)(n.h4,{id:"add_event",children:"add_event"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"def add_event(t: dict)\n"})}),"\n",(0,o.jsx)(n.p,{children:"Adds an event to memory if it is a valid event."}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"t (dict): The thought that we want to add to memory"}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Raises"}),":"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"AgentEventTypeError: If t is not a dict"}),"\n"]}),"\n",(0,o.jsx)(n.h4,{id:"get_thoughts",children:"get_thoughts"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"def get_thoughts()\n"})}),"\n",(0,o.jsx)(n.p,{children:"Get the current thoughts of the agent."}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"List: The list of thoughts that the agent has."}),"\n"]}),"\n",(0,o.jsx)(n.h4,{id:"get_total_length",children:"get_total_length"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"def get_total_length()\n"})}),"\n",(0,o.jsx)(n.p,{children:"Gives the total number of characters in all thoughts"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Int: Total number of chars in thoughts."}),"\n"]}),"\n",(0,o.jsx)(n.h4,{id:"condense",children:"condense"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"def condense(llm: LLM)\n"})}),"\n",(0,o.jsx)(n.p,{children:"Attempts to condense the monologue by using the llm"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"llm (LLM): llm to be used for summarization"}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Raises"}),":"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Exception: the same exception as it got from the llm or processing the response"}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>r});var o=t(6540);const s={},l=o.createContext(s);function i(e){const n=o.useContext(l);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(l.Provider,{value:n},e.children)}}}]);