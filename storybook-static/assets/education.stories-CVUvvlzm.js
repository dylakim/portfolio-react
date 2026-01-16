import{j as e}from"./jsx-runtime-DoEZbXM1.js";import{F as j,f as D}from"./index-2Jcv12mt.js";import{c as n}from"./index-FGJkmGnF.js";import"./jsx-runtime-Bw5QeaCk.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-DDr4uD8U.js";import"./index-Za3YRiuF.js";const E="_education_148p0_1",Y="_educationHeader_148p0_5",v="_educationMeta_148p0_9",y="_location_148p0_13",F="_completionYear_148p0_19",o={education:E,educationHeader:Y,educationMeta:v,location:y,completionYear:F};function f({completionYear:N,location:r,title:h,description:s}){return e.jsxs("article",{className:n(o.education,"verticalFlex"),children:[e.jsxs("div",{className:n(o.educationHeader,"verticalFlex"),children:[e.jsxs("div",{className:n(o.educationMeta,"horizontalFlex"),children:[e.jsx("h3",{className:"heading4",children:h}),e.jsx("p",{className:o.completionYear,children:N})]}),r?e.jsxs("p",{className:n(o.location,"horizontalFlex"),children:[e.jsx(j,{icon:D})," ",r]}):null]}),s?e.jsx("p",{children:s}):null]})}f.__docgenInfo={description:"",methods:[],displayName:"Education",props:{completionYear:{required:!0,tsType:{name:"string"},description:""},location:{required:!1,tsType:{name:"string"},description:""},title:{required:!0,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"string"},description:""}}};const z={component:f},t={args:{title:"Education title",location:"Location",completionYear:"2025",description:"Education description"}},a={args:{...t.args,description:void 0}},i={args:{...a.args,location:void 0}};var c,d,p;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    title: 'Education title',
    location: 'Location',
    completionYear: '2025',
    description: 'Education description'
  }
}`,...(p=(d=t.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var l,m,u;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    description: undefined
  }
}`,...(u=(m=a.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var g,_,x;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    ...NoDescription.args,
    location: undefined
  }
}`,...(x=(_=i.parameters)==null?void 0:_.docs)==null?void 0:x.source}}};const I=["Default","NoDescription","NoDescriptionOrLocation"];export{t as Default,a as NoDescription,i as NoDescriptionOrLocation,I as __namedExportsOrder,z as default};
