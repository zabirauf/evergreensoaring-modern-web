(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[953],{7904:(e,r,a)=>{Promise.resolve().then(a.t.bind(a,7970,23)),Promise.resolve().then(a.bind(a,5055))},5055:(e,r,a)=>{"use strict";a.d(r,{Avatar:()=>d,AvatarFallback:()=>o,AvatarImage:()=>i});var l=a(5155),t=a(2115),s=a(4920),n=a(1567);let d=t.forwardRef((e,r)=>{let{className:a,...t}=e;return(0,l.jsx)(s.bL,{ref:r,className:(0,n.cn)("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",a),...t})});d.displayName=s.bL.displayName;let i=t.forwardRef((e,r)=>{let{className:a,...t}=e;return(0,l.jsx)(s._V,{ref:r,className:(0,n.cn)("aspect-square h-full w-full",a),...t})});i.displayName=s._V.displayName;let o=t.forwardRef((e,r)=>{let{className:a,...t}=e;return(0,l.jsx)(s.H4,{ref:r,className:(0,n.cn)("flex h-full w-full items-center justify-center rounded-full bg-muted",a),...t})});o.displayName=s.H4.displayName},1567:(e,r,a)=>{"use strict";a.d(r,{cn:()=>s});var l=a(3463),t=a(9795);function s(){for(var e=arguments.length,r=Array(e),a=0;a<e;a++)r[a]=arguments[a];return(0,t.QP)((0,l.$)(r))}},4920:(e,r,a)=>{"use strict";a.d(r,{H4:()=>b,_V:()=>y,bL:()=>h});var l=a(2115),t=a(8166),s=a(1524),n=a(6611),d=a(3360),i=a(5155),o="Avatar",[u,f]=(0,t.A)(o),[c,m]=u(o),v=l.forwardRef((e,r)=>{let{__scopeAvatar:a,...t}=e,[s,n]=l.useState("idle");return(0,i.jsx)(c,{scope:a,imageLoadingStatus:s,onImageLoadingStatusChange:n,children:(0,i.jsx)(d.sG.span,{...t,ref:r})})});v.displayName=o;var w="AvatarImage",N=l.forwardRef((e,r)=>{let{__scopeAvatar:a,src:t,onLoadingStatusChange:o=()=>{},...u}=e,f=m(w,a),c=function(e,r){let[a,t]=l.useState("idle");return(0,n.N)(()=>{if(!e){t("error");return}let a=!0,l=new window.Image,s=e=>()=>{a&&t(e)};return t("loading"),l.onload=s("loaded"),l.onerror=s("error"),l.src=e,r&&(l.referrerPolicy=r),()=>{a=!1}},[e,r]),a}(t,u.referrerPolicy),v=(0,s.c)(e=>{o(e),f.onImageLoadingStatusChange(e)});return(0,n.N)(()=>{"idle"!==c&&v(c)},[c,v]),"loaded"===c?(0,i.jsx)(d.sG.img,{...u,ref:r,src:t}):null});N.displayName=w;var p="AvatarFallback",g=l.forwardRef((e,r)=>{let{__scopeAvatar:a,delayMs:t,...s}=e,n=m(p,a),[o,u]=l.useState(void 0===t);return l.useEffect(()=>{if(void 0!==t){let e=window.setTimeout(()=>u(!0),t);return()=>window.clearTimeout(e)}},[t]),o&&"loaded"!==n.imageLoadingStatus?(0,i.jsx)(d.sG.span,{...s,ref:r}):null});g.displayName=p;var h=v,y=N,b=g}},e=>{var r=r=>e(e.s=r);e.O(0,[655,970,441,517,358],()=>r(7904)),_N_E=e.O()}]);