import{i,j as r,R as u,F as d,U as f}from"./@mui/icons-material-aab717a7.js";import{A as l,u as m,P as g}from"./index-d07d48a4.js";import{d as s,I as c,M as h,e as x,f as v,A}from"./@mui/material-a63b5765.js";import{u as p}from"./vendor-6650abbe.js";function C({returnHome:t}){const e=p();return r(c,{size:"large","aria-label":t?"return home":"return to previous page",sx:{top:0,left:0,position:"absolute"},onClick:()=>{if(t){e(l.BASE);return}e(-1)},children:r(u,{sx:{width:{xs:24,sm:36,md:48},height:{xs:24,sm:36,md:48}}})})}function R({title:t,withReturn:e,returnHome:a}){return i(s,{component:"h1",align:"center",sx:{position:"relative",textTransform:"capitalize",fontSize:{xs:"2rem",sm:"3rem",md:"4rem"}},children:[!!e&&r(C,{returnHome:a}),t]})}function I({name:t,id:e}){const{isFavorite:a,toggleFavorite:n}=m();return r(c,{color:"error","aria-label":`toggle favorite for ${t}`,sx:{p:1.5,mt:-.5,mr:-.5,top:0,right:0,zIndex:100,position:"absolute"},onClick:o=>{o.preventDefault(),o.stopPropagation(),n({name:t,id:e})},children:a(e)?r(d,{}):r(f,{})})}function P(t){return`#${`${t}`.padStart(5,"0")}`}function S({name:t,id:e}){const a=p(),n=`${l.BASE}${t}`;return i(h,{sx:{position:"relative"},children:[r(I,{name:t,id:e}),r(x,{component:"a",href:n,"aria-label":t,onClick:o=>{o.preventDefault(),o.stopPropagation(),a(n)},sx:{px:2,py:1},children:i(v,{sx:{p:0,display:"flex",flexDirection:"column",alignItems:"center"},children:[r(A,{alt:t,src:`${g}/${e}.png`,sx:{width:112,height:112,fontSize:"3rem"}}),r(s,{variant:"caption",component:"div",sx:{width:"100%"},children:P(e)}),r(s,{noWrap:!0,variant:"h6",component:"div",sx:{width:"100%",textTransform:"capitalize"},children:t})]})})]})}export{S as C,R as P,P as g};
