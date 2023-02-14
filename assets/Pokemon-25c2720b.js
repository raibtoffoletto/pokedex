import{i as m,j as t,F as v,U as b,y as w}from"./@mui/icons-material-aab717a7.js";import{u as P,P as F,b as y,A,F as $}from"./index-d07d48a4.js";import{g as E,P as k}from"./Card-2cd3ffad.js";import{b as h,d as f,F as _,c as I,A as T}from"./@mui/material-a63b5765.js";import{u as S,r as p,d as W}from"./vendor-6650abbe.js";import"./@emotion/react-8ec11beb.js";import"./@emotion/styled-672b89e3.js";function n({title:e,value:s,fullWidth:r}){return m(h,{sx:{display:"flex",gap:{xs:1,sm:0},flexBasis:r?"100%":void 0,flexDirection:{xs:r?"column":"row",sm:"column"}},children:[t(f,{fontWeight:500,textTransform:"capitalize",sx:{textAlign:{xs:"center",sm:"left"}},children:`${e}: `}),t(f,{textTransform:"capitalize",children:s})]})}function g({...e}){return t(h,{...e,sx:{gap:{xs:1,sm:4},flexWrap:"wrap",p:{xs:0,sm:2},flexGrow:{xs:0,sm:1},width:{xs:"100%",sm:"auto"},...e?.sx}})}function j({name:e,id:s}){const{isFavorite:r,toggleFavorite:c}=P(),i=r(s);return m(_,{color:"error","aria-label":`toggle favorite ${e}`,variant:"extended",sx:{right:{xs:"unset",sm:32,md:64,lg:128,xl:256},bottom:{xs:16,sm:32},position:{xs:"sticky",sm:"fixed"},"& svg":{width:{xs:24,sm:32},height:{xs:24,sm:32}}},onClick:()=>{c({name:e,id:s})},children:[t(f,{sx:{mr:1,fontWeight:500,fontSize:{xs:"1rem",sm:"1.2rem"}},children:i?"saved":"add"}),i?t(v,{}):t(b,{})]})}const u={display:"flex",flexDirection:{xs:"column",sm:"row"},alignItems:{xs:"center",sm:"flex-start"}};function z({id:e,name:s,height:r,weight:c,base_experience:i,abilities:x,types:d,stats:o}){return m(I,{maxWidth:"sm",disableGutters:!0,sx:{...u},children:[t(h,{sx:{...u,width:{xs:"100%",sm:"auto"}},children:t(T,{alt:s,src:`${F}/${e}.png`,sx:{width:256,height:256,fontSize:"3rem"}})}),m(g,{sx:{...u,mb:8},children:[t(n,{title:"Id",value:E(e)}),t(n,{title:"Height",value:`${r}`}),t(n,{title:"Weight",value:`${c}`}),t(n,{title:"Base Experience",value:`${i}`}),t(n,{title:"Types",value:d.join(", ")}),t(n,{title:"Abilities",value:x.join(", "),fullWidth:!0}),m(g,{sx:{...u,width:"100%",p:0},children:[t(f,{sx:{mt:{xs:3,sm:0},width:{xs:"auto",sm:"100%"},fontWeight:500,fontSize:"1.1rem",borderBottom:"1px solid #333"},children:"Stats:"}),o.map(a=>t(n,{title:a.stat,value:`${a.value}`},a.stat))]})]}),t(j,{name:s,id:e})]})}function R(e=""){const s=S(),[r,c]=p.useState(void 0);return p.useEffect(()=>{let i=!1;const x=new AbortController;async function d(){try{if(i||!e)return;i=!0;const o=await fetch(`${y}/pokemon/${e}`,{signal:x.signal});if(i=!1,o.status>=400)throw new Error(o.statusText);const a=await o.json();c({id:a.id,name:e,height:a.height,weight:a.weight,base_experience:a.base_experience,abilities:a.abilities.map(l=>l.ability.name),types:a.types.map(l=>l.type.name),stats:a.stats.map(l=>({stat:l.stat.name,value:l.base_stat}))})}catch(o){console.error(o),s(A[404])}}return d(),()=>{i&&x.abort()}},[s,e]),r}function K(){const{pokemon:e}=W(),s=R(e);return m(w,{children:[t(k,{withReturn:!0,title:`${e}`}),s?t(z,{...s}):t($,{})]})}export{K as default};
