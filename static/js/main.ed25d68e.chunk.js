(this.webpackJsonpreact_carousel=this.webpackJsonpreact_carousel||[]).push([[0],[,,,,,,,,,function(t,e,n){},function(t,e,n){},,function(t,e,n){},function(t,e,n){"use strict";n.r(e);var i=n(4),a=n.n(i),s=n(2),c=n(1),o=(n(9),n(10),n(0)),r=function(t){var e=t.images,n=t.step,i=t.frameSize,a=t.itemWidth,r=t.animationDuration,l=t.infinite,m=Object(c.useState)(0),u=Object(s.a)(m,2),b=u[0],p=u[1],j=e.length-i;return Object(o.jsxs)("div",{className:"Carousel",style:{width:"".concat(i*a,"px"),transition:"".concat(r,"ms")},children:[Object(o.jsx)("ul",{className:"Carousel__list",children:e.map((function(t,e){return Object(o.jsx)("li",{className:"Carousel__item",style:{transform:"translateX(".concat(-b*a,"px)"),transition:"".concat(r,"ms")},children:Object(o.jsx)("img",{src:t,alt:(e+1).toString(),width:a})},t)}))}),Object(o.jsxs)("div",{className:"Carousel__buttons",children:[Object(o.jsx)("button",{type:"button",onClick:function(){p(0!==b?function(t){return Math.max(t-n,0)}:j)},disabled:0===b&&!l,children:"Prev"}),Object(o.jsx)("button",{"data-cy":"next",type:"button",onClick:function(){p(b!==j?function(t){return Math.min(t+n,j)}:0)},disabled:b===j&&!l,children:"Next"})]})]})},l=(n(12),function(t){var e=t.itemWidth,n=t.setItemWidth,i=t.frameSize,a=t.setFrameSize,s=t.images,c=t.step,r=t.setStep,l=t.animationDuration,m=t.setAnimationDuration,u=t.setInfinite;return Object(o.jsxs)("div",{className:"options",children:[Object(o.jsxs)("label",{htmlFor:"itemId",className:"options__label",children:["Item Width:",Object(o.jsx)("input",{className:"options__input",type:"number",id:"itemId",value:e,min:130,max:260,step:10,onChange:function(t){return n(+t.target.value)}})]}),Object(o.jsxs)("label",{htmlFor:"frameId",className:"options__label",children:["Frame Size:",Object(o.jsx)("input",{className:"options__input",type:"number",id:"frameId",value:i,min:1,max:s.length,step:1,onChange:function(t){return a(+t.target.value)}})]}),Object(o.jsxs)("label",{htmlFor:"stepId",className:"options__label",children:["Step:",Object(o.jsx)("input",{className:"options__input",type:"number",id:"stepId",value:c,min:1,max:s.length,step:1,onChange:function(t){return r(+t.target.value)}})]}),Object(o.jsxs)("label",{htmlFor:"animationId",className:"options__label",children:["AnimationDuration:",Object(o.jsx)("input",{className:"options__input",type:"number",id:"animationId",value:l,min:500,max:5e3,step:500,onChange:function(t){return m(+t.target.value)}})]}),Object(o.jsxs)("label",{htmlFor:"infinityId",className:"options__label",children:["Infinite:",Object(o.jsx)("input",{type:"checkbox",id:"infinityId",onChange:function(){return u(!0)}})]})]})}),m=["./img/1.png","./img/2.png","./img/3.png","./img/4.png","./img/5.png","./img/6.png","./img/7.png","./img/8.png","./img/9.png","./img/10.png"],u=function(){var t=Object(c.useState)(3),e=Object(s.a)(t,2),n=e[0],i=e[1],a=Object(c.useState)(3),u=Object(s.a)(a,2),b=u[0],p=u[1],j=Object(c.useState)(130),d=Object(s.a)(j,2),h=d[0],g=d[1],O=Object(c.useState)(1e3),x=Object(s.a)(O,2),f=x[0],_=x[1],v=Object(c.useState)(!1),I=Object(s.a)(v,2),S=I[0],N=I[1];return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsxs)("h1",{"data-cy":"title",children:["Carousel with",m.length,"images"]}),Object(o.jsx)(r,{images:m,step:n,frameSize:b,itemWidth:h,animationDuration:f,infinite:S}),Object(o.jsx)(l,{itemWidth:h,setItemWidth:g,frameSize:b,setFrameSize:p,images:m,step:n,setStep:i,animationDuration:f,setAnimationDuration:_,setInfinite:N})]})};a.a.render(Object(o.jsx)(u,{}),document.getElementById("root"))}],[[13,1,2]]]);
//# sourceMappingURL=main.ed25d68e.chunk.js.map