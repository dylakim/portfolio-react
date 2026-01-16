import{j as e}from"./jsx-runtime-DoEZbXM1.js";import{c as g}from"./index-FGJkmGnF.js";import{n as v}from"./image-Bsf1eCQ8.js";import{r as x}from"./index-DDr4uD8U.js";import{B as F}from"./buttonGroup-D_1yJ58R.js";import{F as L}from"./index-2Jcv12mt.js";import{S as T}from"./skillGroup-C1WtY29U.js";import{a as d}from"./atd-BZE1P51Y.js";import"./jsx-runtime-Bw5QeaCk.js";import"./_commonjsHelpers-CqkleIqs.js";import"./router-context.shared-runtime-JvAHygqe.js";import"./index-Za3YRiuF.js";import"./index-DqQFE8CJ.js";import"./image-context-7lgQhHJj.js";import"./use-merged-ref-vu_KmdPm.js";import"./buttonLink-NsrMYIov.js";import"./skill-C9brxfV5.js";var j={},C;function P(){return C||(C=1,function(a){Object.defineProperty(a,"__esModule",{value:!0});var i="fas",n="xmark",c=384,t=512,r=[128473,10005,10006,10060,215,"close","multiply","remove","times"],o="f00d",l="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z";a.definition={prefix:i,iconName:n,icon:[c,t,r,o,l]},a.faXmark=a.definition,a.prefix=i,a.iconName=n,a.width=c,a.height=t,a.ligatures=r,a.unicode=o,a.svgPathData=l,a.aliases=r}(j)),j}var q=P();const E="_imageOverlayDialog_1xo5f_1",M="_imageOverlayContainer_1xo5f_13",X="_closeButtonContainer_1xo5f_21",R="_closeButton_1xo5f_21",S="_closeIcon_1xo5f_31",H="_image_1xo5f_1",u={imageOverlayDialog:E,imageOverlayContainer:M,closeButtonContainer:X,closeButton:R,closeIcon:S,image:H};function D({ref:a,image:i}){const{src:n,alt:c}=i||{};function t(){a.current&&a.current.close()}return e.jsx("dialog",{ref:a,closedby:"any",className:g(u.imageOverlayDialog),children:e.jsxs("div",{className:u.imageOverlayContainer,children:[e.jsx("div",{className:u.closeButtonContainer,children:e.jsx("button",{onClick:t,className:u.closeButton,"aria-label":"Close",children:e.jsx(L,{icon:q.faXmark,className:u.closeIcon})})}),n&&e.jsx(v,{src:n,alt:c||"",className:u.image})]})})}D.__docgenInfo={description:"",methods:[],displayName:"ImageOverlay",props:{ref:{required:!0,tsType:{name:"RefObject",elements:[{name:"union",raw:"HTMLDialogElement | null",elements:[{name:"HTMLDialogElement"},{name:"null"}]}],raw:"RefObject<HTMLDialogElement | null>"},description:""},image:{required:!1,tsType:{name:"ImageType"},description:""}}};const V="_projectDetailContainer_7ldfp_1",$="_header_7ldfp_5",G="_mainContent_7ldfp_6",z="_image_7ldfp_10",A="_imageButton_7ldfp_16",s={projectDetailContainer:V,header:$,mainContent:G,image:z,imageButton:A};function I({title:a,role:i,company:n,description:c,skills:t,buttons:r,primaryImages:o,secondaryImages:l}){const f=x.useRef(null),[O,B]=x.useState();function k(m){B(m),f.current&&f.current.showModal()}return e.jsxs(e.Fragment,{children:[e.jsx("article",{className:g(s.projectDetail,"verticalFlex"),children:e.jsxs("div",{className:g(s.projectDetailContainer,"verticalFlex"),children:[e.jsxs("div",{className:g(s.header,"verticalFlex"),children:[e.jsx("h2",{children:a}),e.jsxs("div",{children:[i&&e.jsx("p",{children:i}),n&&e.jsx("p",{children:n})]})]}),e.jsxs("div",{className:"gridTwoColumn",children:[e.jsxs("div",{className:g(s.mainContent,"verticalFlex"),children:[(t==null?void 0:t.length)&&e.jsx(T,{skills:t}),e.jsx("p",{dangerouslySetInnerHTML:{__html:c}}),(r==null?void 0:r.length)&&e.jsx(F,{buttons:r})]}),(o==null?void 0:o.length)&&e.jsx("div",{className:"verticalFlex",children:o.map((m,_)=>{const{src:h,alt:w}=m;return e.jsx("button",{onClick:()=>k(m),className:s.imageButton,children:e.jsx(v,{src:h,alt:w,className:s.image})},`primary-image-${_}`)})})]}),(l==null?void 0:l.length)&&e.jsx("div",{className:"gridTwoColumn",children:l.map(({src:m,alt:_},h)=>e.jsx(v,{src:m,alt:_,className:s.image},`secondary-image-${h}`))})]})}),e.jsx(D,{ref:f,image:O})]})}I.__docgenInfo={description:"",methods:[],displayName:"ProjectDetail"};const me={component:I},p={args:{title:"Project Title",role:"Frontend Developer",company:"Company Name",description:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      <br><br>
      Lorem ipsum dolor sit amet, <a href="/">consectetur adipiscing</a> elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      `,skills:["react","typescript","nextjs"],buttons:[{label:"View Project",href:"#",target:"_blank"},{label:"View Code",href:"#",target:"_blank"}],primaryImages:[{src:d,alt:""}],secondaryImages:[{src:d,alt:""},{src:d,alt:""},{src:d,alt:""},{src:d,alt:""},{src:d,alt:""}]}};var y,N,b;p.parameters={...p.parameters,docs:{...(y=p.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    title: 'Project Title',
    role: 'Frontend Developer',
    company: 'Company Name',
    description: \`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      <br><br>
      Lorem ipsum dolor sit amet, <a href="/">consectetur adipiscing</a> elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      \`,
    skills: ['react', 'typescript', 'nextjs'],
    buttons: [{
      label: 'View Project',
      href: '#',
      target: '_blank'
    }, {
      label: 'View Code',
      href: '#',
      target: '_blank'
    }],
    primaryImages: [{
      src: atdImage,
      alt: ''
    }],
    secondaryImages: [{
      src: atdImage,
      alt: ''
    }, {
      src: atdImage,
      alt: ''
    }, {
      src: atdImage,
      alt: ''
    }, {
      src: atdImage,
      alt: ''
    }, {
      src: atdImage,
      alt: ''
    }]
  }
}`,...(b=(N=p.parameters)==null?void 0:N.docs)==null?void 0:b.source}}};const de=["Default"];export{p as Default,de as __namedExportsOrder,me as default};
