(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{4860:function(l,e,n){"use strict";n.d(e,{o:function(){return H}});var s=n(4052),r=n(975),i=n(6717),t=n(1194),x=n(4421),c=n(1958),a=n(5217),j=n(8560),o=n(5009),d=n(7670),h=n(4851),u=n(2210),m=n(8288),b=n(871),p=n(5224),f=n(1664),g=n.n(f),w=n(7294),k=n(4901),O=n(6761),P=n(3952),y=n(3313),C=n(4289),v=n(5893);function S(){return(0,v.jsx)(r.x,{pad:"small",width:"medium",children:(0,v.jsxs)(k.U,{children:[(0,v.jsx)(O.H,{label:"摄像机",children:(0,v.jsx)(r.x,{pad:"small",gap:"small",children:(0,v.jsx)(g(),{href:"/",children:(0,v.jsx)(P.e,{icon:(0,v.jsx)(y.r,{}),label:"实时视频流"})})})}),(0,v.jsx)(O.H,{label:"录像",children:(0,v.jsx)(r.x,{pad:"small",gap:"small",children:(0,v.jsx)(g(),{href:"/recordmanagement",children:(0,v.jsx)(P.e,{icon:(0,v.jsx)(C.g,{}),label:"录像管理"})})})})]})})}var W=n(4168);function _(){let{0:l,1:e}=(0,w.useState)(!1);return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)(t.h,{background:"brand",children:[(0,v.jsxs)(r.x,{direction:"row",gap:"small",align:"center",border:"between",children:[(0,v.jsx)(x.h,{tip:(0,W.w)("基本功能"),margin:"small",icon:(0,v.jsx)(h.v,{}),dropContent:(0,v.jsx)(S,{}),dropProps:{align:{top:"bottom",left:"left"}}}),(0,v.jsx)(g(),{href:"/",children:(0,v.jsx)(c.z,{plain:!0,icon:(0,v.jsx)(u.H,{}),label:"大晓视觉SaaS平台",margin:"small"})})]}),(0,v.jsx)(a.P,{options:["简体中文","English"],value:"简体中文"}),(0,v.jsx)(j.v,{label:(0,v.jsx)(m.n,{}),items:[{label:"二维码",icon:(0,v.jsx)(b.Qr,{}),gap:"small",onClick:()=>e(!l)},{label:"退出登录",icon:(0,v.jsx)(p.R,{}),gap:"small"}]})]}),l&&(0,v.jsx)(o.m,{position:"top",onEsc:()=>e(!1),onClickOutside:()=>e(!1),children:(0,v.jsxs)(r.x,{background:"white",pad:"small",children:[(0,v.jsx)(d.X,{children:"使用二维码绑定设备"}),(0,v.jsx)(b.Qr,{size:"xxlarge",color:"plain"})]})})]})}function H(l){return(0,v.jsx)(s.p,{full:!0,theme:i.Nw,children:(0,v.jsxs)(r.x,{fill:!0,width:{min:"xlarge"},children:[(0,v.jsx)(_,{}),l]})})}},4168:function(l,e,n){"use strict";n.d(e,{w:function(){return i}});var s=n(975),r=n(5893);let i=l=>({content:(0,r.jsx)(s.x,{background:"light-5",pad:"small",round:"small",children:l}),plain:!0})},7476:function(l,e,n){"use strict";n.r(e),n.d(e,{default:function(){return lu}});var s=n(975),r=n(5009),i=n(7294),t=n(804),x=n(1958),c=n(4739),a=n(4901),j=n(6761),o=n(2273),d=n(4370),h=n(8967),u=n(8871),m=n(5893);function b({disabled:l,isNew:e,checked:n,label:s}){return(0,m.jsx)(d.J,{disabled:l,checked:n,label:(0,m.jsx)(x.z,{plain:!0,label:s,icon:e?(0,m.jsx)(h.b,{}):(0,m.jsx)(u.n,{})})})}var p=n(4168);let f=[{label:"客厅"},{label:"走廊"},{label:"厨房",disabled:!0}],g=[{label:"192.168.100.10"},{label:"192.168.100.11"},{label:"192.168.100.12"}],w=[{label:"192.168.200.10"},{label:"192.168.200.11"},{label:"192.168.200.12"}];function k({isNew:l,data:e,onClickCameraSetting:n}){return(0,m.jsx)(t.a,{data:e,border:!1,itemKey:"label",action:l=>(0,m.jsx)(x.z,{disabled:l.disabled,plain:!0,tip:(0,p.w)("设置"),icon:(0,m.jsx)(o.X,{}),onClick:()=>n(l.label)},l.label),children:e=>(0,m.jsx)(b,{disabled:e.disabled,isNew:l,label:e.label},e.label)})}function O({onClickCameraSetting:l}){return(0,m.jsx)(c.Y,{width:"medium",border:"right",children:(0,m.jsxs)(a.U,{children:[(0,m.jsx)(j.H,{label:"IPC Proxy 1",children:(0,m.jsx)(k,{data:g,onClickCameraSetting:l})}),(0,m.jsx)(j.H,{label:"IPC Proxy 2",children:(0,m.jsx)(k,{data:w,onClickCameraSetting:l})}),(0,m.jsx)(k,{isNew:!0,data:f,onClickCameraSetting:l})]})})}var P=n(5631),y=n(9499),C=n(4730),v=n(1276),S=n(6281),W=n(5584),_=n(4502),H=n(8853),N=n(1114),D=n(1816),z=n(5709),E=n(535);let I=["content","icon"];function F(l,e){var n=Object.keys(l);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(l);e&&(s=s.filter(function(e){return Object.getOwnPropertyDescriptor(l,e).enumerable})),n.push.apply(n,s)}return n}function X(l){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?F(Object(n),!0).forEach(function(e){(0,y.Z)(l,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(l,Object.getOwnPropertyDescriptors(n)):F(Object(n)).forEach(function(e){Object.defineProperty(l,e,Object.getOwnPropertyDescriptor(n,e))})}return l}function A(l){let{content:e,icon:n}=l,s=(0,C.Z)(l,I);return(0,m.jsx)(x.z,X({plain:!0,tip:(0,p.w)(e),icon:n},s))}let K={gridColumn:"span 2",gridRow:"span 2"};function T(l){let e=Object.assign({},l),{0:n,1:r}=(0,i.useState)();return(0,m.jsx)(s.x,X(X({fill:!0,background:"dark-6"},e),{},{style:n,children:(0,m.jsxs)(v.K,{fill:!0,interactiveChild:"last",children:[(0,m.jsx)(S.n,{controls:!1}),(0,m.jsxs)(v.K,{anchor:"bottom",fill:!0,children:[(0,m.jsx)(s.x,{fill:!0}),(0,m.jsxs)(s.x,{round:{corner:"top",size:"small"},direction:"row",pad:"small",gap:"medium",background:"dark-1",children:[(0,m.jsx)(A,{content:"抓图",icon:(0,m.jsx)(W.V,{})},0),(0,m.jsx)(A,{content:"放大",icon:(0,m.jsx)(_.D,{})},1),(0,m.jsx)(A,{content:"扬声器静音",icon:(0,m.jsx)(H.w,{})},2),(0,m.jsx)(A,{content:"开始通话",icon:(0,m.jsx)(N.P,{})},3),(0,m.jsx)(A,{content:"全屏",icon:(0,m.jsx)(D.M,{})},4)]})]}),(0,m.jsxs)(v.K,{anchor:"top-right",fill:!0,children:[(0,m.jsx)(s.x,{fill:!0}),(0,m.jsx)(s.x,{pad:"small",gap:"medium",background:"dark-1",children:(0,m.jsx)(A,{content:"关闭",icon:(0,m.jsx)(z.x,{})},5)})]}),(0,m.jsxs)(v.K,{anchor:"top",fill:!0,children:[(0,m.jsx)(s.x,{fill:!0}),(0,m.jsx)(s.x,{pad:"small",gap:"medium",background:"dark-1",children:(0,m.jsx)(A,{content:"窗口放大",icon:(0,m.jsx)(E.e,{}),onClick:()=>void(n?r(void 0):r(K))})})]})]})}))}function R({number:l}){return(0,m.jsx)(s.x,{flex:!0,overflow:"auto",children:(0,m.jsx)(P.r,{fill:!0,columns:"640px",gap:"small",align:"center",justify:"center",style:{gridAutoFlow:"row dense",gridAutoRows:"480px"},children:Array.from({length:l},(l,e)=>e).map(l=>(0,m.jsx)(T,{},l))})})}var U=n(9019),B=n(8792),V=n(9459),Z=n(8087),M=n(7670),Q=n(9213),G=n(6184),J=n(2540),Y=n(6145),q=n(4941),L=n(4927),$=n(1244),ll=n(5217);function le(){let{0:l,1:e}=(0,i.useState)("变码率");return(0,m.jsxs)(B.W,{label:"码率",children:[(0,m.jsx)($.S,{options:["变码率","定码率"],value:l,onChange:l=>e(l.target.value)}),"定码率"===l&&(0,m.jsx)(V.o,{placeholder:"128 ~ 131072 kbps"})]})}function ln(){let{0:l,1:e}=(0,i.useState)("自动(DHCP)");return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(B.W,{label:"IP分配",children:(0,m.jsx)(ll.P,{options:["自动(DHCP)","手动"],value:l,onChange:l=>e(l.target.value)})}),"手动"===l&&(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(B.W,{label:"IP地址",children:(0,m.jsx)(V.o,{})}),(0,m.jsx)(B.W,{label:"子网掩码",children:(0,m.jsx)(V.o,{})}),(0,m.jsx)(B.W,{label:"默认网关",children:(0,m.jsx)(V.o,{})}),(0,m.jsx)(B.W,{label:"首选DNS",children:(0,m.jsx)(V.o,{})}),(0,m.jsx)(B.W,{label:"备选DNS",children:(0,m.jsx)(V.o,{})})]})]})}function ls(){return(0,m.jsxs)(U.l,{children:[(0,m.jsxs)(a.U,{children:[(0,m.jsxs)(j.H,{label:"视频设置",children:[(0,m.jsx)(B.W,{label:"分辨率",children:(0,m.jsx)($.S,{options:["4K(3840x2160)","1080p(1920x1080)","720p(1280x720)"]})}),(0,m.jsx)(B.W,{label:"帧率",children:(0,m.jsx)($.S,{options:["25fps","30fps","50fps","60fps"]})}),(0,m.jsx)(B.W,{label:"编码",children:(0,m.jsx)($.S,{options:["H.264","H.265"]})}),(0,m.jsx)(le,{})]}),(0,m.jsx)(j.H,{label:"网络设置",children:(0,m.jsx)(ln,{})})]}),(0,m.jsx)(x.z,{primary:!0,type:"submit",label:"保存",margin:"small"})]})}function lr(){return(0,m.jsxs)(U.l,{children:[(0,m.jsx)(B.W,{label:"用户名",children:(0,m.jsx)(V.o,{})}),(0,m.jsx)(B.W,{label:"密码",children:(0,m.jsx)(V.o,{})}),(0,m.jsx)(x.z,{primary:!0,type:"submit",label:"保存",margin:"small"})]})}function li(){return(0,m.jsxs)(s.x,{gap:"small",align:"start",children:[(0,m.jsx)(Z.x,{children:"检测到新固件。"}),(0,m.jsx)(x.z,{primary:!0,label:"开始升级"})]})}function lt(){return(0,m.jsxs)(U.l,{children:[(0,m.jsx)(B.W,{label:"摄像机名称",children:(0,m.jsx)(V.o,{})}),(0,m.jsx)(x.z,{primary:!0,type:"submit",label:"保存",margin:"small"})]})}function lx(){return(0,m.jsxs)(P.r,{columns:["auto","auto"],gap:"small",align:"center",children:[(0,m.jsx)(Z.x,{children:"制造商"}),(0,m.jsx)(Z.x,{children:"大晓智能"}),(0,m.jsx)(Z.x,{children:"型号"}),(0,m.jsx)(Z.x,{children:"金乌1号"}),(0,m.jsx)(Z.x,{children:"统一SN"}),(0,m.jsx)(s.x,{width:"small",children:(0,m.jsx)(Z.x,{wordBreak:"break-all",children:"daxiaocloud.af9d40a5-7a36-5c07-b23a-851cd99fbfa5.1658472806.V1StGXR8_Z5jdHi6B-myT"})}),(0,m.jsx)(Z.x,{children:"设备SN"}),(0,m.jsx)(Z.x,{children:"SDP37481934"}),(0,m.jsx)(Z.x,{children:"IP地址"}),(0,m.jsxs)(s.x,{children:[(0,m.jsx)(Z.x,{children:"192.168.100.127"}),(0,m.jsx)(Z.x,{children:"fe80::64a6:2309:8880:7903"})]}),(0,m.jsx)(Z.x,{children:"MAC地址"}),(0,m.jsx)(Z.x,{children:"6c:f1:7e:9f:83:a2"}),(0,m.jsx)(Z.x,{children:"版本号"}),(0,m.jsx)(Z.x,{children:"1.0.3.15"}),(0,m.jsx)(Z.x,{children:"已开机"}),(0,m.jsx)(Z.x,{children:"158:12:05"})]})}function lc(){return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(M.X,{children:"摄像机详情"}),(0,m.jsxs)(Q.m,{children:[(0,m.jsx)(G.O,{title:"信息",icon:(0,m.jsx)(J.k,{}),children:(0,m.jsx)(s.x,{margin:{top:"small"},children:(0,m.jsx)(lx,{})})}),(0,m.jsx)(G.O,{title:"名称",icon:(0,m.jsx)(Y.V,{}),children:(0,m.jsx)(s.x,{margin:{top:"small"},children:(0,m.jsx)(lt,{})})}),(0,m.jsx)(G.O,{title:"设置",icon:(0,m.jsx)(q.T,{}),children:(0,m.jsx)(s.x,{margin:{top:"small"},children:(0,m.jsx)(ls,{})})}),(0,m.jsx)(G.O,{title:"升级",icon:(0,m.jsx)(L.c,{}),children:(0,m.jsx)(s.x,{margin:{top:"small"},children:(0,m.jsx)(li,{})})})]})]})}function la(){return(0,m.jsxs)(P.r,{columns:["auto","auto"],gap:"small",align:"center",children:[(0,m.jsx)(Z.x,{children:"制造商"}),(0,m.jsx)(Z.x,{children:"宇视科技"}),(0,m.jsx)(Z.x,{children:"型号"}),(0,m.jsx)(Z.x,{children:"IPC2A5I-IR6-AUPF40-B-DT"}),(0,m.jsx)(Z.x,{children:"IP地址"}),(0,m.jsx)(Z.x,{children:"192.168.100.127"})]})}function lj(){return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(M.X,{children:"摄像机详情"}),(0,m.jsxs)(Q.m,{children:[(0,m.jsx)(G.O,{title:"信息",icon:(0,m.jsx)(J.k,{}),children:(0,m.jsx)(s.x,{margin:{top:"small"},children:(0,m.jsx)(la,{})})}),(0,m.jsx)(G.O,{title:"设置",icon:(0,m.jsx)(q.T,{}),children:(0,m.jsx)(s.x,{margin:{top:"small"},children:(0,m.jsx)(lr,{})})})]})]})}function lo({name:l}){return l.includes(".")?(0,m.jsx)(lj,{}):(0,m.jsx)(lc,{})}function ld(){let{0:l,1:e}=(0,i.useState)(!1);return(0,m.jsxs)(s.x,{direction:"row",fill:!0,children:[(0,m.jsx)(O,{onClickCameraSetting:l=>e(l)}),(0,m.jsx)(R,{number:12}),l&&(0,m.jsx)(r.m,{position:"right",full:"vertical",onClickOutside:()=>e(!1),onEsc:()=>e(!1),children:(0,m.jsx)(s.x,{pad:"small",width:{min:"medium"},children:(0,m.jsx)(lo,{name:l})})})]})}var lh=n(4860),lu=()=>(0,lh.o)((0,m.jsx)(ld,{}))},5557:function(l,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(7476)}])}},function(l){l.O(0,[774,994,528,888,179],function(){return l(l.s=5557)}),_N_E=l.O()}]);