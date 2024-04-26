"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2465],{95:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var s=t(4848),o=t(8453);const r={sidebar_label:"prompts",title:"agenthub.monologue_agent.utils.prompts"},i=void 0,l={id:"python/agenthub/monologue_agent/utils/prompts",title:"agenthub.monologue_agent.utils.prompts",description:"get\\summarize\\monologue\\_prompt",source:"@site/docs/python/agenthub/monologue_agent/utils/prompts.md",sourceDirName:"python/agenthub/monologue_agent/utils",slug:"/python/agenthub/monologue_agent/utils/prompts",permalink:"/OpenDevin/docs/python/agenthub/monologue_agent/utils/prompts",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{sidebar_label:"prompts",title:"agenthub.monologue_agent.utils.prompts"},sidebar:"apiSidebar",previous:{title:"monologue",permalink:"/OpenDevin/docs/python/agenthub/monologue_agent/utils/monologue"},next:{title:"agent",permalink:"/OpenDevin/docs/python/agenthub/monologue_agent/agent"}},a={},p=[{value:"get_summarize_monologue_prompt",id:"get_summarize_monologue_prompt",level:4},{value:"get_request_action_prompt",id:"get_request_action_prompt",level:4},{value:"parse_action_response",id:"parse_action_response",level:4},{value:"parse_summary_response",id:"parse_summary_response",level:4}];function u(e){const n={code:"code",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h4,{id:"get_summarize_monologue_prompt",children:"get_summarize_monologue_prompt"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"def get_summarize_monologue_prompt(thoughts: List[dict])\n"})}),"\n",(0,s.jsx)(n.p,{children:"Gets the prompt for summarizing the monologue"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"str: A formatted string with the current monologue within the prompt"}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"get_request_action_prompt",children:"get_request_action_prompt"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"def get_request_action_prompt(\n        task: str,\n        thoughts: List[dict],\n        background_commands_obs: List[CmdOutputObservation] = [])\n"})}),"\n",(0,s.jsx)(n.p,{children:"Gets the action prompt formatted with appropriate values."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"task (str): The current task the agent is trying to accomplish"}),"\n",(0,s.jsx)(n.li,{children:"thoughts (List[dict]): The agent's current thoughts"}),"\n",(0,s.jsx)(n.li,{children:"background_commands_obs (List[CmdOutputObservation]): List of all observed background commands running"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"str: Formatted prompt string with hint, task, monologue, and background included"}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"parse_action_response",children:"parse_action_response"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"def parse_action_response(response: str) -> Action\n"})}),"\n",(0,s.jsx)(n.p,{children:"Parses a string to find an action within it"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"response (str): The string to be parsed"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Action: The action that was found in the response string"}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"parse_summary_response",children:"parse_summary_response"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"def parse_summary_response(response: str) -> List[dict]\n"})}),"\n",(0,s.jsx)(n.p,{children:"Parses a summary of the monologue"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"response (str): The response string to be parsed"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"List[dict]: The list of summaries output by the model"}),"\n"]})]})}function c(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>l});var s=t(6540);const o={},r=s.createContext(o);function i(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);