!function(t,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports.tvsLibs=n():t.tvsLibs=n()}(self,(function(){return(()=>{"use strict";var t={d:(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},o:(t,n)=>Object.prototype.hasOwnProperty.call(t,n),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},n={};t.r(n),t.d(n,{algorithms:()=>qe,datastructures:()=>Ye,default:()=>ze,defined:()=>_e,events:()=>Be,fp:()=>ke,geometry:()=>Ke,graphics:()=>He,math:()=>Ge,truthy:()=>xe,utils:()=>je});var e={};t.r(e),t.d(e,{numericalCompare:()=>F,stringCompare:()=>C});var r={};t.r(r),t.d(r,{BinaryTree:()=>H,Node:()=>L,insert:()=>S,max:()=>G,min:()=>x,next:()=>b,nil:()=>O,prev:()=>R,remove:()=>_,rotateLeft:()=>B,rotateRight:()=>j,search:()=>w,transplant:()=>U,walkInOrder:()=>N,walkToRoot:()=>k});var o={};t.r(o),t.d(o,{createHeap:()=>V,heapify:()=>X,heapifyAt:()=>Q,insert:()=>W,leftIndex:()=>Y,parentIndex:()=>K,rightIndex:()=>q});var i={};t.r(i),t.d(i,{RBNode:()=>$,RBTree:()=>nt,insertFixup:()=>Z,rbNil:()=>J,remove:()=>tt});var a={};t.r(a),t.d(a,{animate:()=>rt,animateWithTPF:()=>et,createAnimator:()=>ot});var u={};t.r(u),t.d(u,{windowSize:()=>it,windowSizeObserver:()=>at});var c={};t.r(c),t.d(c,{KeyCodes:()=>ut,keyboard:()=>ct,keyboardObserver:()=>st});var s={};t.r(s),t.d(s,{Buttons:()=>ft,mouse:()=>lt,mouseObserver:()=>ht});var f={};t.r(f),t.d(f,{curry:()=>dt,partial:()=>pt,pipe:()=>gt});var l={};t.r(l),t.d(l,{DEG_TO_RAD_FACTOR:()=>Et,clamp:()=>At,degToRad:()=>Tt,lerp:()=>Mt,sign:()=>mt});var h={};t.r(h),t.d(h,{and:()=>It,equal:()=>Dt,equalArray:()=>Ft,equalObject:()=>Ct,not:()=>vt,notEmpty:()=>yt,unequal:()=>Pt});var d={};t.r(d),t.d(d,{add:()=>Nt,cross:()=>Gt,cross2D:()=>Bt,div:()=>St,dot:()=>xt,isEqual:()=>jt,length:()=>wt,limit:()=>_t,mul:()=>Rt,normalize:()=>Ut,sub:()=>bt,vec:()=>Lt,vecDouble:()=>Ot});var p={};t.r(p),t.d(p,{normalRand:()=>Kt,randInt:()=>kt,randIntInRange:()=>Ht});var g={};t.r(g),t.d(g,{concat:()=>Xt,doTimes:()=>Yt,each:()=>en,flatMap:()=>Jt,flatten:()=>Vt,fold:()=>on,last:()=>an,map:()=>nn,mapcat:()=>$t,pickRandom:()=>qt,reduce:()=>rn,repeat:()=>Qt,reverse:()=>Zt,shuffle:()=>tn,times:()=>zt,zip:()=>Wt});var m={};t.r(m),t.d(m,{interpolate:()=>un,lerpVecs:()=>cn,normal:()=>gn,rotateLeft:()=>dn,rotateLeftInPlace:()=>ln,rotateRight:()=>pn,rotateRightInPlace:()=>hn,side:()=>mn,split:()=>sn,translate:()=>fn});var M={};t.r(M),t.d(M,{bottom:()=>En,combineEdges:()=>In,divideHorizontal:()=>Fn,divideVertical:()=>Cn,extrudeBottom:()=>Pn,extrudeLeft:()=>Dn,extrudeRight:()=>yn,extrudeTop:()=>vn,left:()=>Tn,quadTriangles:()=>Ln,right:()=>An,top:()=>Mn,triangulate:()=>On});var A={};t.r(A),t.d(A,{BLACK:()=>bn,WHITE:()=>Rn,adjustHue:()=>Kn,colorRgbaToCSS:()=>Un,floatToInt:()=>xn,grey:()=>wn,hexStringToRgb:()=>jn,hexToRgb:()=>Gn,hsl:()=>Nn,hslToRGB:()=>Hn,intToFloat:()=>_n,mixColors:()=>Sn,rgbToHSL:()=>kn,rgbToHexString:()=>Bn,updateHue:()=>qn,updateLightness:()=>zn,updateSaturation:()=>Yn});var E={};t.r(E),t.d(E,{closedPosition:()=>Xn,createImgDataFromImage:()=>Vn,createPixelContext:()=>Wn,repeatedPosition:()=>Qn});var T={};t.r(T),t.d(T,{noise1d:()=>Zn,noise2d:()=>fe,noise3d:()=>le,noise4d:()=>he,tileNoise:()=>de});var I={};t.r(I),t.d(I,{drawTileNoiseTexture:()=>ge});var v={};t.r(v),t.d(v,{cartesianToPolar2D:()=>Me,cartesianToSphere3D:()=>Te,polarCoord:()=>me,polarToCartesian2D:()=>Ae,sphereCoord:()=>Ee,sphereToCartesian3D:()=>Ie});var y={};t.r(y),t.d(y,{getPitchQuat:()=>Ce,getRollQuat:()=>Le,getYawQuat:()=>Fe,mirrorMatrixFromPlane:()=>De,normalFromThreeCoplanarPoints:()=>Pe,planeFromNormalAndCoplanarPoint:()=>ve,planeFromThreeCoplanarPoints:()=>ye});var P={};t.r(P),t.d(P,{deepOverride:()=>Ne,deepmerge:()=>Oe,mapObj:()=>be});var D={};t.r(D),t.d(D,{v4:()=>Ue});const F=(t,n)=>t-n,C=(t,n)=>t.localeCompare(n);class L{constructor(t,n,e){this.parent=t,this.left=t,this.right=t,this.key=n,this.value=e}}const O=function(){const t={parent:null,left:null,right:null,key:null};return t.parent=t,t.left=t,t.right=t,t}();function N(t,n,e){n!==t.nil&&(N(t,n.left,e),e(n),N(t,n.right,e))}function b(t,n){if(n.right!==t.nil)return x(t,n.right);let e=n.parent;for(;e!==t.nil&&n===e.right;)n=e,e=e.parent;return e}function R(t,n){if(n.left!==t.nil)return G(t,n.right);let e=n.parent;for(;e!==t.nil&&n===e.left;)n=e,e=e.parent;return e}function S(t,n){let e=t.nil,r=t.root;for(;r!==t.nil;)e=r,r=t.compare(n.key,r.key)<0?r.left:r.right;n.parent=e,e===t.nil?t.root=n:t.compare(n.key,e.key)<0?e.left=n:e.right=n}function w(t,n,e){for(;n!==t.nil&&n.key!==e;)n=t.compare(e,n.key)<0?n.left:n.right;return n}function U(t,n,e){n.parent===t.nil?t.root=e:n===n.parent.left?n.parent.left=e:n.parent.right=e,e.parent=n.parent}function _(t,n){if(n.left===t.nil)U(t,n,n.right);else if(n.right===t.nil)U(t,n,n.left);else{const e=x(t,n.right);e.parent!==n&&(U(t,e,e.right),e.right=n.right,e.right.parent=e),U(t,n,e),e.left=n.left,e.left.parent=e}}function x(t,n){for(;n!==t.nil&&n.left!==t.nil;)n=n.left;return n}function G(t,n){for(;n.right!==t.nil;)n=n.right;return n}function B(t,n){const e=n.right;n.right=e.left,e.left!==t.nil&&(e.left.parent=n),e.parent=n.parent,n.parent===t.nil?t.root=e:n===n.parent.left?n.parent.left=e:n.parent.right=e,e.left=n,n.parent=e}function j(t,n){const e=n.left;n.left=e.right,e.right!==t.nil&&(e.right.parent=n),e.parent=n.parent,n.parent===t.nil?t.root=e:n===n.parent.right?n.parent.right=e:n.parent.left=e,e.right=n,n.parent=e}function k(t,n,e){if(n&&n!==t.nil)for(;n!==t.nil;)e(n),n=n.parent}class H{constructor(t,n=O){this.count=0,this.compare=t,this.root=n,this.nil=n}createNode(t,n){return new L(this.nil,t,n)}insert(t,n){const e=this.createNode(t,n);return S(this,e),this.count++,e}getNode(t){return w(this,this.root,t)}get(t){const n=this.getNode(t);return n===this.nil?n:n.value}keys(){const t=[];return N(this,this.root,(n=>t.push(n.key))),t}min(){return x(this,this.root).key}max(){return G(this,this.root).key}remove(t){const n=w(this,this.root,t);n!==this.nil&&(_(this,n),this.count--)}size(){return this.count}}function K(t){return Math.floor(t/2)}function q(t){return 2*t+1}function Y(t){return 2*t}function z(t,n,e){const r=e[t];e[t]=e[n],e[n]=r}function Q(t,n,e){const r=Y(e),o=q(e);let i=e;r<n.length&&t(n[i],n[r])<0&&(i=r),o<n.length&&t(n[i],n[o])<0&&(i=o),i!==e&&(z(e,i,n),Q(t,n,i))}function X(t,n){for(let e=Math.floor((n.length-1)/2);e>=0;e--)Q(t,n,e)}function W(t,n,e){if(n.push(e),n.length>1){let e=n.length-1,r=K(e);for(;e>0&&t(n[r],n[e])<0;)z(r,e,n),e=r,r=K(e)}}function V(t){let n=[];return{size:function(){return n.length},fromArray:function(e){n=e.concat(),X(t,n)},pull:function(){const e=n.shift();return Q(t,n,0),e},getTop:function(){return n[0]},insert:e=>W(t,n,e)}}class $ extends L{constructor(t,n,e){super(t,n,e),this.red=!0}}const J=Object.assign(Object.assign({},O),{red:!1});function Z(t,n){for(;n.parent.red;)if(n.parent===n.parent.parent.left){const e=n.parent.parent.right;e.red?(n.parent.red=!1,e.red=!1,n.parent.parent.red=!0,n=n.parent.parent):(n===n.parent.right&&B(t,n=n.parent),n.parent.red=!1,n.parent.parent.red=!0,j(t,n.parent.parent))}else{const e=n.parent.parent.left;e.red?(n.parent.red=!1,e.red=!1,n.parent.parent.red=!0,n=n.parent.parent):(n===n.parent.left&&j(t,n=n.parent),n.parent.red=!1,n.parent.parent.red=!0,B(t,n.parent.parent))}t.root.red=!1}function tt(t,n){let e,r=n,o=n.red;if(n.left===t.nil?(e=n.right,U(t,n,n.right)):n.right===t.nil?(e=n.left,U(t,n,n.left)):(r=x(t,n.right),o=r.red,e=r.right,r.parent===n?e.parent=r:(U(t,r,r.right),r.right=n.right,r.right.parent=r),U(t,n,r),r.left=n.left,r.left.parent=r,r.red=n.red),!o){for(;e!==t.root&&!e.red;)if(e===e.parent.left){let n=e.parent.right;n.red&&(n.red=!1,e.parent.red=!0,B(t,e.parent),n=e.parent.right),n.left.red||n.right.red?(n.right.red||(n.left.red=!1,n.red=!0,j(t,n),n=e.parent.right),n.red=e.parent.red,e.parent.red=!1,n.right.red=!1,B(t,e.parent),e=t.root):(n.red=!0,e=e.parent)}else{let n=e.parent.left;n.red&&(n.red=!1,e.parent.red=!0,j(t,e.parent),n=e.parent.left),n.left.red||n.right.red?(n.left.red||(n.right.red=!1,n.red=!0,B(t,n),n=e.parent.left),n.red=e.parent.red,e.parent.red=!1,n.left.red=!1,j(t,e.parent),e=t.root):(n.red=!0,e=e.parent)}e.red=!1}}class nt extends H{constructor(t,n=J){super(t,n)}createNode(t,n){return new $(this.nil,t,n)}insert(t,n){const e=this.createNode(t,n);return S(this,e),Z(this,e),this.count++,e}remove(t){const n=w(this,this.root,t);n!==this.nil&&(tt(this,n),this.count--)}}function et(t){let n,e=!0;return requestAnimationFrame((function r(o){e&&(t(o-(n||o)),n=o,requestAnimationFrame(r))})),function(){e=!1}}function rt(t){let n=!0;return requestAnimationFrame((function e(r){n&&(t(r),requestAnimationFrame(e))})),function(){n=!1}}function ot(t=et){let n=[];function e(){for(const t in n)n[t].apply(null,arguments)}return{start:function(){this.stop=t(e)},stop:()=>{},step:e,addUpdate:function(t){n.push(t)},removeUpdate:function(t){n=n.filter((n=>n!==t))}}}function it(t){function n(){t({width:window.innerWidth,height:window.innerHeight})}return window.addEventListener("resize",n),n(),function(){window.removeEventListener("resize",n)}}function at(){const t={size:{width:0,height:0}},n=it((n=>t.size=n));return{state:t,destroy:n}}var ut;function ct(t,n){const e=n||t,{element:r=window}=t,o={};function i(t){o[t.keyCode]=Date.now(),e(o)}function a(t){delete o[t.keyCode],e(o)}return r.addEventListener("keyup",a,!1),r.addEventListener("keydown",i,!1),e(o),function(){r.removeEventListener("keyup",a),r.removeEventListener("keydown",i)}}function st(t){const n={Keys:ut,state:{pressed:{}},destroy:()=>{}};return n.destroy=ct((function(t){n.state.pressed=t}),t),n}!function(t){t[t.CANCEL=3]="CANCEL",t[t.HELP=6]="HELP",t[t.BACK_SPACE=8]="BACK_SPACE",t[t.TAB=9]="TAB",t[t.CLEAR=12]="CLEAR",t[t.RETURN=13]="RETURN",t[t.ENTER=14]="ENTER",t[t.SHIFT=16]="SHIFT",t[t.CONTROL=17]="CONTROL",t[t.ALT=18]="ALT",t[t.PAUSE=19]="PAUSE",t[t.CAPS_LOCK=20]="CAPS_LOCK",t[t.ESCAPE=27]="ESCAPE",t[t.SPACE=32]="SPACE",t[t.PAGE_UP=33]="PAGE_UP",t[t.PAGE_DOWN=34]="PAGE_DOWN",t[t.END=35]="END",t[t.HOME=36]="HOME",t[t.LEFT=37]="LEFT",t[t.UP=38]="UP",t[t.RIGHT=39]="RIGHT",t[t.DOWN=40]="DOWN",t[t.PRINTSCREEN=44]="PRINTSCREEN",t[t.INSERT=45]="INSERT",t[t.DELETE=46]="DELETE",t[t.DIGIT_0=48]="DIGIT_0",t[t.DIGIT_1=49]="DIGIT_1",t[t.DIGIT_2=50]="DIGIT_2",t[t.DIGIT_3=51]="DIGIT_3",t[t.DIGIT_4=52]="DIGIT_4",t[t.DIGIT_5=53]="DIGIT_5",t[t.DIGIT_6=54]="DIGIT_6",t[t.DIGIT_7=55]="DIGIT_7",t[t.DIGIT_8=56]="DIGIT_8",t[t.DIGIT_9=57]="DIGIT_9",t[t.SEMICOLON=59]="SEMICOLON",t[t.EQUALS=61]="EQUALS",t[t.A=65]="A",t[t.B=66]="B",t[t.C=67]="C",t[t.D=68]="D",t[t.E=69]="E",t[t.F=70]="F",t[t.G=71]="G",t[t.H=72]="H",t[t.I=73]="I",t[t.J=74]="J",t[t.K=75]="K",t[t.L=76]="L",t[t.M=77]="M",t[t.N=78]="N",t[t.O=79]="O",t[t.P=80]="P",t[t.Q=81]="Q",t[t.R=82]="R",t[t.S=83]="S",t[t.T=84]="T",t[t.U=85]="U",t[t.V=86]="V",t[t.W=87]="W",t[t.X=88]="X",t[t.Y=89]="Y",t[t.Z=90]="Z",t[t.CONTEXT_MENU=93]="CONTEXT_MENU",t[t.NUMPAD0=96]="NUMPAD0",t[t.NUMPAD1=97]="NUMPAD1",t[t.NUMPAD2=98]="NUMPAD2",t[t.NUMPAD3=99]="NUMPAD3",t[t.NUMPAD4=100]="NUMPAD4",t[t.NUMPAD5=101]="NUMPAD5",t[t.NUMPAD6=102]="NUMPAD6",t[t.NUMPAD7=103]="NUMPAD7",t[t.NUMPAD8=104]="NUMPAD8",t[t.NUMPAD9=105]="NUMPAD9",t[t.MULTIPLY=106]="MULTIPLY",t[t.ADD=107]="ADD",t[t.SEPARATOR=108]="SEPARATOR",t[t.SUBTRACT=109]="SUBTRACT",t[t.DECIMAL=110]="DECIMAL",t[t.DIVIDE=111]="DIVIDE",t[t.F1=112]="F1",t[t.F2=113]="F2",t[t.F3=114]="F3",t[t.F4=115]="F4",t[t.F5=116]="F5",t[t.F6=117]="F6",t[t.F7=118]="F7",t[t.F8=119]="F8",t[t.F9=120]="F9",t[t.F10=121]="F10",t[t.F11=122]="F11",t[t.F12=123]="F12",t[t.F13=124]="F13",t[t.F14=125]="F14",t[t.F15=126]="F15",t[t.F16=127]="F16",t[t.F17=128]="F17",t[t.F18=129]="F18",t[t.F19=130]="F19",t[t.F20=131]="F20",t[t.F21=132]="F21",t[t.F22=133]="F22",t[t.F23=134]="F23",t[t.F24=135]="F24",t[t.NUM_LOCK=144]="NUM_LOCK",t[t.SCROLL_LOCK=145]="SCROLL_LOCK",t[t.COMMA=188]="COMMA",t[t.PERIOD=190]="PERIOD",t[t.SLASH=191]="SLASH",t[t.BACK_QUOTE=192]="BACK_QUOTE",t[t.OPEN_BRACKET=219]="OPEN_BRACKET",t[t.BACK_SLASH=220]="BACK_SLASH",t[t.CLOSE_BRACKET=221]="CLOSE_BRACKET",t[t.QUOTE=222]="QUOTE",t[t.META=224]="META"}(ut||(ut={}));const ft={LEFT:0,MIDDLE:1,RIGHT:2};function lt(t,n){const e=n||t,{element:r=document,enableRightButton:o}=t,i={pressed:{},drag:{x:0,y:0,dX:0,dY:0},dragging:!1};let a=0,u=0,c=0,s=0;function f(t){i.pressed[t.button]=t,t.button===ft.LEFT&&(a=c=t.clientX,u=s=t.clientY,i.dragging=!0),e(i)}function l(t){delete i.pressed[t.button],delete i.drag.event,i.drag.x=0,i.drag.y=0,i.drag.dX=0,i.drag.dY=0,i.dragging=!1,e(i)}function h(t){i.dragging&&(i.drag.event=t,i.drag.x=a-t.clientX,i.drag.y=u-t.clientY,i.drag.dX=c-t.clientX,i.drag.dY=s-t.clientY,c=t.clientX,s=t.clientY,e(i))}function d(t){t.preventDefault()}return r.addEventListener("mousedown",f),document.addEventListener("mouseup",l),document.addEventListener("mousemove",h),o&&r.addEventListener("contextmenu",d),e(i),function(){r.removeEventListener("mousedown",f),document.removeEventListener("mousemove",h),document.removeEventListener("mouseup",l),o&&r.removeEventListener("contextmenu",d)}}function ht(t={}){const n={Buttons:ft,state:{},destroy:()=>{}};return n.destroy=lt(t,(function(t){n.state=t})),n}function dt(t){return function(n,e){return void 0!==e?t(n,e):e=>t(n,e)}}function pt(t,...n){return t.bind(null,...n)}function gt(t,n,e,r,o,i){return(...a)=>{let u=n(t(...a));return e&&(u=e(u)),r&&(u=r(u)),o&&(u=o(u)),i&&(u=i(u)),u}}function mt(t){return t>0?1:t<0?-1:0}function Mt(t,n,e){return n+t*(e-n)}function At(t,n,e){return Math.max(t,Math.min(e,n))}const Et=Math.PI/180;function Tt(t){return t*Et}const It=(t,n)=>(e,r)=>t(e,r)&&n(e,r),vt=t=>(...n)=>!t(...n),yt=t=>t&&t.length,Pt=(t,n)=>t!==n,Dt=(t,n)=>t===n;function Ft(t,n){if(t===n)return!0;if(!n||!t)return!1;if(t.length!==n.length)return!1;for(let e=0;e<t.length;e++)if(t[e]!==n[e])return!1;return!0}function Ct(t,n){if(t===n)return!0;if(!n)return!1;const e=Object.keys(t);if(!Ft(e,Object.keys(n)))return!1;for(const r of e)if(t[r]!==n[r])return!1;return!0}function Lt(t){return new Float32Array(t)}function Ot(t){return new Float64Array(t)}function Nt(t,n,e=[]){for(let r=0;r<t.length;r++)e[r]=t[r]+n[r];return e}function bt(t,n,e=[]){for(let r=0;r<t.length;r++)e[r]=t[r]-n[r];return e}function Rt(t,n,e=[]){for(let r=0;r<n.length;r++)e[r]=n[r]*t;return e}function St(t,n,e=[]){for(let r=0;r<n.length;r++)e[r]=n[r]/t;return e}function wt(t){let n=0;for(let e=0;e<t.length;e++){const r=t[e];n+=r*r}return Math.sqrt(n)}function Ut(t,n=[]){return St(wt(t),t,n)}function _t(t,n){const e=wt(n);return t<e?Rt(t/e,n):n}function xt(t,n){let e=0;for(let r=0;r<t.length;r++)e+=t[r]*n[r];return e}function Gt(t,n,e=[]){return e[0]=t[1]*n[2]-t[2]*n[1],e[1]=t[2]*n[0]-t[0]*n[2],e[2]=t[0]*n[1]-t[1]*n[0],e}function Bt(t,n){return t[0]*n[1]-t[1]*n[0]}const jt=Ft;function kt(t){return Math.floor(Math.random()*t)}function Ht(t,n){return kt(n-t)+t}function Kt(){return(Math.random()+Math.random()+Math.random())/3}function qt(t){return t[kt(t.length)]}function Yt(t,n){for(let e=0;e<n;e++)t(e)}function zt(t,n,e=[]){for(let r=0;r<n;r++)e[r]=t(r);return e}function Qt(t,n){return zt((()=>n),t)}function Xt(t,...n){return t.concat(...n)}function Wt(t,n,e,r=[]){const o=Math.min(n.length,e.length);for(let i=0;i<o;i++)r[i]=t(n[i],e[i]);return r}function Vt(t,n=[]){for(const e of t){const t=n.length;for(let r=0;r<e.length;r++)n[r+t]=e[r]}return n}function $t(t,n,e=[]){return Vt(nn(t,n,e))}const Jt=$t;function Zt(t,n=[]){for(let e=0;e<t.length;e++)n[e]=t[t.length-1-e];return n}function tn(t,n=[]){for(let e=0;e<t.length;e++){const r=Ht(e,t.length),o=void 0!==n[e]?n[e]:t[e];n[e]=void 0!==n[r]?n[r]:t[r],n[r]=o}return n}function nn(t,n,e=[]){for(let r=0;r<n.length;r++)e[r]=t(n[r],r);return e}function en(t,n){for(const e in n)t(n[e],e)}function rn(t,n,e){for(let r=0;r<e.length;r++)n=t(n,e[r]);return n}function on(t,n){const[e,...r]=n;return rn(t,e,r)}const an=t=>t[t.length-1];function un(t,n,e,r){return Wt(pt(t,n),e,r)}const cn=pt(un,Mt);function sn(t,[n,e]){const r=cn(t,n,e);return[[n,r],[r,e]]}function fn(t,n){return n.map((n=>Nt(t,n)))}function ln(t){return t.unshift(t.pop()),t}function hn(t){return t.push(t.shift()),t}function dn(t){return ln(t.concat())}function pn(t){return hn(t.concat())}function gn(t){return Ut(Gt(bt(t[0],t[1]),bt(t[2],t[1])))}function mn(t,n){return Bt(bt(n,t[0]),bt(t[1],t[0]))}function Mn(t){return[t[0],t[1]]}function An(t){return[t[1],t[2]]}function En(t){return[t[2],t[3]]}function Tn(t){return[t[3],t[0]]}function In(t,n){return t.concat(dn(n))}function vn(t,n){return In(fn(t,n),n)}function yn(t,n){return dn(vn(t,n))}function Pn(t,n){return In(n,fn(t,n))}function Dn(t,n){return dn(Pn(t,n))}function Fn(t,n,[e,r,o,i]){const a=cn(t,e,i),u=cn(n,r,o);return[[e,r,u,a],[a,u,o,i]]}function Cn(t,n,[e,r,o,i]){const a=cn(t,e,r),u=cn(n,i,o);return[[e,a,u,i],[a,r,o,u]]}const Ln=[[0,2,1],[0,3,2]];function On(t){return Vt(zt((t=>Ln.map((n=>n.map((n=>4*t+n))))),t))}const Nn=(t,n,e)=>({h:t,s:n,l:e}),bn=[0,0,0,255],Rn=[255,255,255,255];function Sn([t,n,e,r],[o,i,a,u]){const c=u/255;return[Math.floor(Mt(c,t,o)),Math.floor(Mt(c,n,i)),Math.floor(Mt(c,e,a)),r]}function wn(t,n){return null==n&&(n=255),[t,t,t,n]}function Un([t,n,e,r]){return"rgba("+t+", "+n+", "+e+", "+r/255+")"}function _n(t){return t.map((t=>t/255))}function xn(t){return t.map((t=>Math.floor(255*t)))}function Gn(t){return[(t=Math.floor(t))>>16&255,t>>8&255,255&t]}function Bn([t,n,e]){return"#"+((1<<24)+(t<<16)+(n<<8)+e).toString(16).slice(1)}function jn(t){return 3===(t=t.replace(/^\s*#|\s*$/g,"")).length&&(t=t.replace(/(.)/g,"$1$1")),Gn(parseInt(t,16))}function kn([t,n,e]){const r=Math.max(t,n,e),o=Math.min(t,n,e),i=r-o,a=(r+o)/2;let u=0,c=0;return u=0===i?0:r===t?(n-e)/i%6/6:r===n?((e-t)/i+2)/6:((t-n)/i+4)/6,c=0===i?0:i/(1-Math.abs(2*a-1)),{h:Kn(u),s:c,l:a}}function Hn({h:t,s:n,l:e}){const r=(1-Math.abs(2*e-1))*n,o=r*(1-Math.abs(6*t%2-1)),i=e-r/2;let a,u,c;return t<1/6?(a=r,u=o,c=0):t<2/6?(a=o,u=r,c=0):t<.5?(a=0,u=r,c=o):t<4/6?(a=0,u=o,c=r):t<5/6?(a=o,u=0,c=r):(a=r,u=0,c=o),a=At(0,1,a+i),u=At(0,1,u+i),c=At(0,1,c+i),[a,u,c]}function Kn(t){return t>=1?t-1:t<0?t+1:t}function qn(t,n){return Object.assign(Object.assign({},t),{h:Kn(t.h+n)})}function Yn(t,n){return Object.assign(Object.assign({},t),{s:At(0,1,t.s+n)})}function zn(t,n){return Object.assign(Object.assign({},t),{l:At(0,1,t.l+n)})}function Qn([t,n],e){const r=e.width,o=e.height;return t>=r&&(t-=r),n>=o&&(n-=o),t<0&&(t+=r),n<0&&(n+=o),[t,n]}function Xn([t,n],e){const r=e.width,o=e.height;return t<0&&(t=0),n<0&&(n=0),t>=r&&(t=r),n>=o&&(n=o),[t,n]}function Wn(t){function n(n,e){const[r,o]=t(e,n);return 4*(o*n.height+r)}function e(t,e){const r=n(t,e);return[t.data[r],t.data[r+1],t.data[r+2],t.data[r+3]]}function r(t,e,r){const o=n(t,e);t.data[o]=r[0],t.data[o+1]=r[1],t.data[o+2]=r[2],t.data[o+3]=r[3]}return t=t||Xn,{getPixelIndex:n,getColorAt:e,setColorAt:r,increaseAllBy:function(t,[n,e,r,o]){const i=t.data;for(let t=0;t<i.length;t+=4)i[t]+n<256&&(i[t]+=n),i[t+1]+e<256&&(i[t+1]+=e),i[t+2]+r<256&&(i[t+2]+=r),i[t+3]+o<256&&(i[t+3]+=o)},decreaseAllBy:function(t,[n,e,r,o]){const i=t.data;for(let t=0;t<=i.length;t+=4)n<=i[t]&&(i[t]-=n),e<=i[t+1]&&(i[t+1]-=e),r<=i[t+2]&&(i[t+2]-=r),o<=i[t+3]&&(i[t+3]-=o)},mixinColor:function(t,n){for(let o=0;o<t.width;o++)for(let i=0;o<t.height;i++)r(t,[o,i],Sn(e(t,[o,i]),n))},replaceWithImageDataAt:function(t,n,[o,i]){const a=n.width-1,u=n.height-1;for(let c=0;c<u;c++)for(let u=0;u<a;u++)r(t,[o+u,i+c],e(n,[u,c]))},drawImageAt:function(t,n,[o,i]){const a=n.width-1,u=n.height-1;for(let c=0;c<u;c++)for(let u=0;u<a;u++)r(t,[o+u,i+c],Sn(e(t,[o+u,i+c]),e(n,[u,c])))}}}function Vn(t){const n=document.createElement("canvas");n.width=t.width,n.height=t.height;const e=n.getContext("2d");if(e)return e.drawImage(t,0,0,t.width,t.height),e.getImageData(0,0,t.width,t.height)}const $n=[151,160,137,91,90,15,131,13,201,95,96,53,194,233,7,225,140,36,103,30,69,142,8,99,37,240,21,10,23,190,6,148,247,120,234,75,0,26,197,62,94,252,219,203,117,35,11,32,57,177,33,88,237,149,56,87,174,20,125,136,171,168,68,175,74,165,71,134,139,48,27,166,77,146,158,231,83,111,229,122,60,211,133,230,220,105,92,41,55,46,245,40,244,102,143,54,65,25,63,161,1,216,80,73,209,76,132,187,208,89,18,169,200,196,135,130,116,188,159,86,164,100,109,198,173,186,3,64,52,217,226,250,124,123,5,202,38,147,118,126,255,82,85,212,207,206,59,227,47,16,58,17,182,189,28,42,223,183,170,213,119,248,152,2,44,154,163,70,221,153,101,155,167,43,172,9,129,22,39,253,19,98,108,110,79,113,224,232,178,185,112,104,218,246,97,228,251,34,242,193,238,210,144,12,191,179,162,241,81,51,145,235,249,14,239,107,49,192,214,31,181,199,106,157,184,84,204,176,115,121,50,45,127,4,150,254,138,236,205,93,222,114,67,29,24,72,243,141,128,195,78,66,215,61,156,180];for(let t=0;t<=256;t++)$n[256+t]=$n[t];function Jn(t,n){return 0==(1&t)?n:-n}function Zn(t){let n,e,r;var o;return e=~~t,n=255&e,r=(o=t-=e)*o*o*(o*(6*o-15)+10),Mt(r,Jn($n[n],t),Jn($n[n+1],t-1))}const te=.5*(Math.sqrt(3)-1),ne=(3-Math.sqrt(3))/6,ee=1/6,re=(Math.sqrt(5)-1)/4,oe=(5-Math.sqrt(5))/20,ie=new Uint8Array(256),ae=new Uint8Array(512),ue=new Uint8Array(512);for(let t=0;t<256;t++)ie[t]=256*Math.random();for(let t=0;t<512;t++)ae[t]=ie[255&t],ue[t]=ae[t]%12;const ce=new Float32Array([1,1,0,-1,1,0,1,-1,0,-1,-1,0,1,0,1,-1,0,1,1,0,-1,-1,0,-1,0,1,1,0,-1,1,0,1,-1,0,-1,-1]),se=new Float32Array([0,1,1,1,0,1,1,-1,0,1,-1,1,0,1,-1,-1,0,-1,1,1,0,-1,1,-1,0,-1,-1,1,0,-1,-1,-1,1,0,1,1,1,0,1,-1,1,0,-1,1,1,0,-1,-1,-1,0,1,1,-1,0,1,-1,-1,0,-1,1,-1,0,-1,-1,1,1,0,1,1,1,0,-1,1,-1,0,1,1,-1,0,-1,-1,1,0,1,-1,1,0,-1,-1,-1,0,1,-1,-1,0,-1,1,1,1,0,1,1,-1,0,1,-1,1,0,1,-1,-1,0,-1,1,1,0,-1,1,-1,0,-1,-1,1,0,-1,-1,-1,0]);function fe(t,n){let e=0,r=0,o=0;const i=(t+n)*te,a=Math.floor(t+i),u=Math.floor(n+i),c=(a+u)*ne,s=t-(a-c),f=n-(u-c);let l,h;s>f?(l=1,h=0):(l=0,h=1);const d=s-l+ne,p=f-h+ne,g=s-1+2*ne,m=f-1+2*ne,M=255&a,A=255&u;let E=.5-s*s-f*f;if(E>=0){const t=3*ue[M+ae[A]];E*=E,e=E*E*(ce[t]*s+ce[t+1]*f)}let T=.5-d*d-p*p;if(T>=0){const t=3*ue[M+l+ae[A+h]];T*=T,r=T*T*(ce[t]*d+ce[t+1]*p)}let I=.5-g*g-m*m;if(I>=0){const t=3*ue[M+1+ae[A+1]];I*=I,o=I*I*(ce[t]*g+ce[t+1]*m)}return 70*(e+r+o)}function le(t,n,e){let r,o,i,a;const u=.3333333333333333*(t+n+e),c=Math.floor(t+u),s=Math.floor(n+u),f=Math.floor(e+u),l=(c+s+f)*ee,h=t-(c-l),d=n-(s-l),p=e-(f-l);let g,m,M,A,E,T;h>=d?d>=p?(g=1,m=0,M=0,A=1,E=1,T=0):h>=p?(g=1,m=0,M=0,A=1,E=0,T=1):(g=0,m=0,M=1,A=1,E=0,T=1):d<p?(g=0,m=0,M=1,A=0,E=1,T=1):h<p?(g=0,m=1,M=0,A=0,E=1,T=1):(g=0,m=1,M=0,A=1,E=1,T=0);const I=h-g+ee,v=d-m+ee,y=p-M+ee,P=h-A+2*ee,D=d-E+2*ee,F=p-T+2*ee,C=h-1+.5,L=d-1+.5,O=p-1+.5,N=255&c,b=255&s,R=255&f;let S=.6-h*h-d*d-p*p;if(S<0)r=0;else{const t=3*ue[N+ae[b+ae[R]]];S*=S,r=S*S*(ce[t]*h+ce[t+1]*d+ce[t+2]*p)}let w=.6-I*I-v*v-y*y;if(w<0)o=0;else{const t=3*ue[N+g+ae[b+m+ae[R+M]]];w*=w,o=w*w*(ce[t]*I+ce[t+1]*v+ce[t+2]*y)}let U=.6-P*P-D*D-F*F;if(U<0)i=0;else{const t=3*ue[N+A+ae[b+E+ae[R+T]]];U*=U,i=U*U*(ce[t]*P+ce[t+1]*D+ce[t+2]*F)}let _=.6-C*C-L*L-O*O;if(_<0)a=0;else{const t=3*ue[N+1+ae[b+1+ae[R+1]]];_*=_,a=_*_*(ce[t]*C+ce[t+1]*L+ce[t+2]*O)}return 32*(r+o+i+a)}function he(t,n,e,r){let o,i,a,u,c;const s=(t+n+e+r)*re,f=Math.floor(t+s),l=Math.floor(n+s),h=Math.floor(e+s),d=Math.floor(r+s),p=(f+l+h+d)*oe,g=t-(f-p),m=n-(l-p),M=e-(h-p),A=r-(d-p);let E,T,I,v,y,P,D,F,C,L,O,N,b=0,R=0,S=0,w=0;g>m?b++:R++,g>M?b++:S++,g>A?b++:w++,m>M?R++:S++,m>A?R++:w++,M>A?S++:w++,E=b>=3?1:0,T=R>=3?1:0,I=S>=3?1:0,v=w>=3?1:0,y=b>=2?1:0,P=R>=2?1:0,D=S>=2?1:0,F=w>=2?1:0,C=b>=1?1:0,L=R>=1?1:0,O=S>=1?1:0,N=w>=1?1:0;const U=g-E+oe,_=m-T+oe,x=M-I+oe,G=A-v+oe,B=g-y+2*oe,j=m-P+2*oe,k=M-D+2*oe,H=A-F+2*oe,K=g-C+3*oe,q=m-L+3*oe,Y=M-O+3*oe,z=A-N+3*oe,Q=g-1+4*oe,X=m-1+4*oe,W=M-1+4*oe,V=A-1+4*oe,$=255&f,J=255&l,Z=255&h,tt=255&d;let nt=.6-g*g-m*m-M*M-A*A;if(nt<0)o=0;else{const t=ae[$+ae[J+ae[Z+ae[tt]]]]%32*4;nt*=nt,o=nt*nt*(se[t]*g+se[t+1]*m+se[t+2]*M+se[t+3]*A)}let et=.6-U*U-_*_-x*x-G*G;if(et<0)i=0;else{const t=ae[$+E+ae[J+T+ae[Z+I+ae[tt+v]]]]%32*4;et*=et,i=et*et*(se[t]*U+se[t+1]*_+se[t+2]*x+se[t+3]*G)}let rt=.6-B*B-j*j-k*k-H*H;if(rt<0)a=0;else{const t=ae[$+y+ae[J+P+ae[Z+D+ae[tt+F]]]]%32*4;rt*=rt,a=rt*rt*(se[t]*B+se[t+1]*j+se[t+2]*k+se[t+3]*H)}let ot=.6-K*K-q*q-Y*Y-z*z;if(ot<0)u=0;else{const t=ae[$+C+ae[J+L+ae[Z+O+ae[tt+N]]]]%32*4;ot*=ot,u=ot*ot*(se[t]*K+se[t+1]*q+se[t+2]*Y+se[t+3]*z)}let it=.6-Q*Q-X*X-W*W-V*V;if(it<0)c=0;else{const t=ae[$+1+ae[J+1+ae[Z+1+ae[tt+1]]]]%32*4;it*=it,c=it*it*(se[t]*Q+se[t+1]*X+se[t+2]*W+se[t+3]*V)}return 27*(o+i+a+u+c)}function de(t,n,e,r){const o=[];for(let i=0;i<n;i++)for(let a=0;a<t;a++){const u=a/t,c=i/n,s=Math.cos(2*u*Math.PI)*e/(2*Math.PI),f=Math.cos(2*c*Math.PI)*r/(2*Math.PI),l=Math.sin(2*u*Math.PI)*e/(2*Math.PI),h=Math.sin(2*c*Math.PI)*r/(2*Math.PI);o.push(he(s,f,l,h))}return o}function pe(t){return Math.floor(127*(t+1))}function ge(t,n,e){const r=e.canvas.width,o=e.canvas.height,i=de(r,o,t,n),a=de(r,o,2.1*t,2.1*n),u=de(r,o,4.2*t,4.2*n),c=de(r,o,8.3*t,8.3*n),s=e.getImageData(0,0,r,o);for(let t=0;t<i.length-1;t++){const n=4*t;s.data[n]=pe(i[t]),s.data[n+1]=pe(a[t]),s.data[n+2]=pe(u[t]),s.data[n+3]=pe(c[t])}e.putImageData(s,0,0)}function me(t,n){return[t,n]}function Me(t){return me(wt(t),Math.atan2(t[1],t[0]))}function Ae([t,n]){return[t*Math.cos(n),t*Math.sin(n)]}function Ee(t,n,e){return[t,n,e]}function Te([t,n,e]){const r=Math.sqrt(t*t+n*n+e*e);if(0===r)return Ee(0,0,0);let o=0===t?n>=0?0:Math.PI:Math.atan2(n,t),i=Math.acos(e/r);return o<0&&(o+=2*Math.PI),Ee(r,i,o)}function Ie(t){const n=t[0],e=t[1],r=t[2];return 0===n?[0,0,0]:[n*Math.sin(e)*Math.cos(r),n*Math.sin(e)*Math.sin(r),n*Math.cos(e)]}function ve(t,n){const e=xt(t,n);return[t[0],t[1],t[2],-e]}function ye(t,n,e){return ve(Pe(t,n,e),t)}function Pe(t,n,e){return Ut(Gt(bt(e,n),bt(t,n)))}function De(t){const[n,e,r,o]=t;return[1-2*n*n,-2*n*e,-2*n*r,0,-2*n*e,1-2*e*e,-2*e*r,0,-2*n*r,-2*e*r,1-2*r*r,0,-2*n*o,-2*e*o,-2*r*o,1]}function Fe(t){return t*=.5,[0,Math.sin(t),0,Math.cos(t)]}function Ce(t){return t*=.5,[Math.sin(t),0,0,Math.cos(t)]}function Le(t){return t*=.5,[0,0,Math.sin(t),Math.cos(t)]}function Oe(t,n){if("object"==typeof t&&"object"==typeof n&&!Array.isArray(t)&&!Array.isArray(n)&&t!==n){const e=Object.assign({},t);for(const r in n){const o=t[r],i=n[r];void 0!==i?e[r]=Oe(o,i):delete e[r]}return e}return n}function Ne(t,n,e){const r=e&&e.ignore;if("object"==typeof t&&"object"==typeof n&&!Array.isArray(t)&&!Array.isArray(n)&&t!==n){for(const e in t)if(t.hasOwnProperty(e)&&(!r||!(e in r)||!0!==r[e])){const o=t[e],i=n[e];void 0!==i&&(t[e]=Ne(o,i,{ignore:r&&r[e]}))}return t}return n}function be(t,n,e={}){for(const r in n)e[r]=t(n[r],r);return e}const Re=new Array(16),Se=[],we={};for(let t=0;t<256;t++)Se[t]=(t+256).toString(16).substr(1),we[Se[t]]=t;function Ue(){const t=function(){for(let t,n=0;n<16;n++)0==(3&n)&&(t=4294967296*Math.random(),Re[n]=t>>>((3&n)<<3)&255);return Re}();return t[6]=15&t[6]|64,t[8]=63&t[8]|128,function(t){const n=Se;let e=0;return n[t[e++]]+n[t[e++]]+n[t[e++]]+n[t[e++]]+"-"+n[t[e++]]+n[t[e++]]+"-"+n[t[e++]]+n[t[e++]]+"-"+n[t[e++]]+n[t[e++]]+"-"+n[t[e++]]+n[t[e++]]+n[t[e++]]+n[t[e++]]+n[t[e++]]+n[t[e++]]}(t)}function _e(t){return null!=t}function xe(t){return!!t}const Ge={core:l,noise:T,coords:v,vectors:d,geometry:y,random:p},Be={dom:u,mouse:s,keyboard:c,animation:a},je={uuid:D,seq:g,predicates:h,object:P},ke={core:f},He={colors:A,pixels:E,textures:I},Ke={primitives:m,quad:M},qe={base:e},Ye={bintree:r,rbtree:i,heap:o},ze={math:Ge,events:Be,utils:je,graphics:He,fp:ke,geometry:Ke,datastructures:Ye,algorithms:qe};return n})()}));