"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[995],{5606:(e,s,t)=>{t.r(s),t.d(s,{default:()=>N});var a=t(2791),n=t(3109),r=t(7352),i=t(7790),c=t(7689),l=(t(5462),t(9906)),o=t(6669),d=t(1927);const _={main_container:"profileContent_main_container__8RQV8",about_section:"profileContent_about_section__os05R",about_box:"profileContent_about_box__8sUC7",textbox:"profileContent_textbox__zoQJI",save_btn:"profileContent_save_btn__NLdlF",hobbies_section:"profileContent_hobbies_section__lCgSG",interest:"profileContent_interest__fz9sL",points:"profileContent_points__HLJe-",edit_profile:"profileContent_edit_profile__D5NqD"};var h=t(3963),p=t(8820);const u="userPanel_wrapper__8K-5T",x="userPanel_user_content__ud3CD",j="userPanel_user_avatar__lozTc",m="userPanel_profile_name_email__JUDDg",v="userPanel_points__WYBCr",b=t.p+"static/media/points_icon.23d1c04cbc14782495f7.png";var f=t(184);const g=e=>{let{user:s}=e;(0,a.useContext)(r.V).authenticatedUser;if(s&&s.name)return(0,f.jsxs)("div",{className:u,children:[(0,f.jsxs)("div",{className:x,children:[(0,f.jsx)("div",{className:j,children:(0,f.jsx)("img",{src:s.avatar,alt:"Profile"})}),(0,f.jsxs)("div",{className:m,children:[(0,f.jsx)("h1",{children:s.name}),(0,f.jsx)("p",{children:s.email})]})]}),(0,f.jsxs)("div",{className:v,children:[(0,f.jsx)("img",{src:b,alt:""}),(0,f.jsxs)("h1",{children:["Active Points ",(0,f.jsx)("span",{children:s.points})]})]})]})},C=e=>{const[s,t]=(0,a.useState)("The user has not provided an introduction yet"),[n,r]=(0,a.useState)(!1),i=e.Auth&&e.Auth.data;if(!i)return;const c=e=>{e.preventDefault();const s=e.target.elements.description.value;t(s),r(!1)};return(0,f.jsxs)("div",{className:_.main_container,children:[(0,f.jsx)(h.Z,{header:"Profile"}),(0,f.jsx)(g,{user:e.Auth.data}),(0,f.jsxs)("div",{className:_.about_section,children:[(0,f.jsxs)("div",{className:_.about_box,children:[(0,f.jsx)("h1",{children:"About"}),(0,f.jsx)("span",{onClick:()=>{r(!n)},children:(0,f.jsx)(p.QML,{})})]}),n?(0,f.jsxs)("form",{onSubmit:c,children:[(0,f.jsx)("textarea",{className:_.textbox,name:"description",placeholder:"description",value:s,onChange:e=>t(e.target.value),required:!0}),(0,f.jsx)("div",{className:_.save_btn,children:(0,f.jsx)(d.Z,{color:"#EE7D15",height:"auto",onSubmit:c,children:(0,f.jsx)("h1",{children:"Save"})})})]}):(0,f.jsx)("p",{style:{color:"#EE7D15",fontSize:"17px"},children:s})]}),(0,f.jsx)("div",{className:_.living_place,children:(0,f.jsxs)("h1",{style:{fontSize:"22px",color:"#4a4a4a"},children:["Living in ",(0,f.jsxs)("span",{style:{display:"flex",color:"#EE7D15",fontSize:"17px",paddingTop:"10px"},children:[(0,f.jsx)("img",{style:{borderRadius:"11px",width:"40px",marginRight:"1rem"},src:i.country.flag,alt:""}),i.country.name]})]})}),(0,f.jsxs)("div",{className:_.hobbies_section,children:[(0,f.jsx)("h1",{children:"Hobbies"}),(0,f.jsx)("div",{className:_.interest,children:i.interests&&i.interests.interests.map((e=>(0,f.jsx)("p",{children:e.value},e._id)))})]})]})},N=()=>{const e=(0,a.useContext)(r.V),[s,t]=(0,a.useState)(null),[d,_]=(0,a.useState)(!0),h=(0,c.s0)();return(0,a.useEffect)((()=>{(async()=>{if(!e.authenticatedUser||!e.authenticatedUser||!e.authenticatedUser.token)return h("/");const s=await(0,o.l)(e.authenticatedUser.token.access_token);if(!s.status)return(0,l.h)(s.message,"error"),e.logout(),h("/");t(s.data),_(!1)})()}),[]),(0,f.jsx)(f.Fragment,{children:s&&!d?(0,f.jsx)(n.Z,{children:(0,f.jsx)(C,{Auth:e.authenticatedUser})}):(0,f.jsx)(i.Z,{})})}},3109:(e,s,t)=>{t.d(s,{Z:()=>r});t(2791);const a="Card_card__PbbGZ";var n=t(184);const r=e=>(0,n.jsx)("div",{className:a,style:e.style,children:e.children})},3963:(e,s,t)=>{t.d(s,{Z:()=>l});t(2791);const a="pagesHeaders_wrapper__7yCMD",n="pagesHeaders_header_container__4SzzX",r="pagesHeaders_main_header__itQWR",i="pagesHeaders_header_paragraph__oO9pt";var c=t(184);const l=e=>(0,c.jsx)("div",{className:a,children:(0,c.jsxs)("div",{className:n,children:[(0,c.jsxs)("div",{className:r,children:[(0,c.jsx)("h1",{children:e.header||"Your header"}),(0,c.jsx)("hr",{})]}),e.paragraph&&(0,c.jsx)("div",{className:i,children:(0,c.jsx)("p",{children:e.paragraph||"your paragraph"})})]})})},6669:(e,s,t)=>{t.d(s,{M:()=>r,l:()=>n});var a=t(544);const n=async e=>{if(!e)return{status:!1,error:"Access token is missing"};const s="".concat("https://backendserver-production-3c30.up.railway.app/","api/v1/user/places/get_all");return await(0,a.D)(s,"GET",null,e)},r=async()=>{const e="".concat("https://backendserver-production-3c30.up.railway.app/","api/v1/client/places/all");return await(0,a.D)(e,"GET")}}}]);
//# sourceMappingURL=995.7e9b2260.chunk.js.map