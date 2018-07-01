!function(t,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports.tvsLibs=n():t.tvsLibs=n()}(window,function(){return function(t){var n={};function r(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=n,r.d=function(t,n,e){r.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,n){if(1&n&&(t=r(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)r.d(e,o,function(n){return t[n]}.bind(null,o));return e},r.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(n,"a",n),n},r.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},r.p="",r(r.s=0)}([function(t,n,r){"use strict";r.r(n);var e={};r.r(e),r.d(e,"sign",function(){return C}),r.d(e,"lerp",function(){return L}),r.d(e,"clamp",function(){return O}),r.d(e,"DEG_TO_RAD_FACTOR",function(){return N}),r.d(e,"degToRad",function(){return _});var o={};r.r(o),r.d(o,"and",function(){return b}),r.d(o,"not",function(){return w}),r.d(o,"defined",function(){return R}),r.d(o,"notEmpty",function(){return S}),r.d(o,"unequal",function(){return U}),r.d(o,"equal",function(){return x}),r.d(o,"equalArray",function(){return G}),r.d(o,"equalObject",function(){return k});var u={};r.r(u),r.d(u,"vec",function(){return B}),r.d(u,"add",function(){return j}),r.d(u,"sub",function(){return K}),r.d(u,"mul",function(){return H}),r.d(u,"div",function(){return q}),r.d(u,"length",function(){return Y}),r.d(u,"normalize",function(){return z}),r.d(u,"limit",function(){return Q}),r.d(u,"dot",function(){return X}),r.d(u,"cross",function(){return W}),r.d(u,"cross2D",function(){return V}),r.d(u,"isEqual",function(){return J});var i={};r.r(i),r.d(i,"cartesianToPolar2D",function(){return Z}),r.d(i,"polarToCartesian2D",function(){return $});var a={};r.r(a),r.d(a,"noise1d",function(){return et}),r.d(a,"noise2d",function(){return gt}),r.d(a,"noise3d",function(){return mt}),r.d(a,"noise4d",function(){return At}),r.d(a,"tileNoise",function(){return yt});var f={};r.r(f),r.d(f,"planeFromNormalAndCoplanarPoint",function(){return Mt}),r.d(f,"planeFromThreeCoplanarPoints",function(){return Et}),r.d(f,"normalFromThreeCoplanarPoints",function(){return It}),r.d(f,"mirrorMatrixFromPlane",function(){return Tt}),r.d(f,"getYawQuat",function(){return Pt}),r.d(f,"getPitchQuat",function(){return Dt}),r.d(f,"getRollQuat",function(){return Ft});var c={};r.r(c),r.d(c,"randInt",function(){return Ct}),r.d(c,"randIntInRange",function(){return Lt}),r.d(c,"normalRand",function(){return Ot});var d={};r.r(d),r.d(d,"windowSize",function(){return Nt}),r.d(d,"windowSizeObserver",function(){return _t});var l={};r.r(l),r.d(l,"Keys",function(){return st}),r.d(l,"keyboard",function(){return bt}),r.d(l,"keyboardObserver",function(){return wt});var h={};r.r(h),r.d(h,"Buttons",function(){return Rt}),r.d(h,"mouse",function(){return St}),r.d(h,"mouseObserver",function(){return Ut});var s={};r.r(s),r.d(s,"animateWithTPF",function(){return xt}),r.d(s,"animate",function(){return Gt}),r.d(s,"createAnimator",function(){return kt});var v={};r.r(v),r.d(v,"v4",function(){return qt});var p={};r.r(p),r.d(p,"pickRandom",function(){return Yt}),r.d(p,"doTimes",function(){return zt}),r.d(p,"times",function(){return Qt}),r.d(p,"zip",function(){return Xt}),r.d(p,"flatten",function(){return Wt}),r.d(p,"mapcat",function(){return Vt}),r.d(p,"shuffle",function(){return Jt}),r.d(p,"map",function(){return Zt}),r.d(p,"each",function(){return $t});var g={};r.r(g),r.d(g,"deepmerge",function(){return nn});var m={};r.r(m),r.d(m,"curry",function(){return rn}),r.d(m,"partial",function(){return en});var A={};r.r(A),r.d(A,"BLACK",function(){return on}),r.d(A,"WHITE",function(){return un}),r.d(A,"mixColors",function(){return an}),r.d(A,"grey",function(){return fn}),r.d(A,"colorRgbaToCSS",function(){return cn}),r.d(A,"intToFloat",function(){return dn}),r.d(A,"floatToInt",function(){return ln}),r.d(A,"hexToRgb",function(){return hn}),r.d(A,"hexStringToRgb",function(){return sn});var y={};r.r(y),r.d(y,"drawTileNoiseTexture",function(){return pn});var M={};r.r(M),r.d(M,"repeatedPosition",function(){return gn}),r.d(M,"closedPosition",function(){return mn}),r.d(M,"createPixelContext",function(){return An}),r.d(M,"createImgDataFromImage",function(){return yn});var E={};r.r(E),r.d(E,"numericalCompare",function(){return Mn}),r.d(E,"stringCompare",function(){return En});var I={};r.r(I),r.d(I,"Node",function(){return In}),r.d(I,"nil",function(){return Tn}),r.d(I,"walkInOrder",function(){return Pn}),r.d(I,"next",function(){return Dn}),r.d(I,"prev",function(){return Fn}),r.d(I,"insert",function(){return Cn}),r.d(I,"search",function(){return Ln}),r.d(I,"transplant",function(){return On}),r.d(I,"remove",function(){return Nn}),r.d(I,"min",function(){return _n}),r.d(I,"max",function(){return bn}),r.d(I,"rotateLeft",function(){return wn}),r.d(I,"rotateRight",function(){return Rn}),r.d(I,"walkToRoot",function(){return Sn}),r.d(I,"BinaryTree",function(){return xn});var T={};r.r(T),r.d(T,"RBNode",function(){return Bn}),r.d(T,"rbNil",function(){return jn}),r.d(T,"insertFixup",function(){return Kn}),r.d(T,"remove",function(){return Hn}),r.d(T,"RBTree",function(){return qn});var P={};r.r(P),r.d(P,"parentIndex",function(){return Yn}),r.d(P,"rightIndex",function(){return zn}),r.d(P,"leftIndex",function(){return Qn}),r.d(P,"heapifyAt",function(){return Wn}),r.d(P,"heapify",function(){return Vn}),r.d(P,"insert",function(){return Jn}),r.d(P,"createHeap",function(){return Zn});var D={};r.r(D),r.d(D,"interpolate",function(){return $n}),r.d(D,"lerpVecs",function(){return tr}),r.d(D,"split",function(){return nr}),r.d(D,"translate",function(){return rr}),r.d(D,"rotateLeftInPlace",function(){return er}),r.d(D,"rotateRightInPlace",function(){return or}),r.d(D,"rotateLeft",function(){return ur}),r.d(D,"rotateRight",function(){return ir}),r.d(D,"normal",function(){return ar}),r.d(D,"side",function(){return fr});var F={};function C(t){return t>0?1:t<0?-1:0}function L(t,n,r){return n+t*(r-n)}function O(t,n,r){return Math.max(t,Math.min(r,n))}r.r(F),r.d(F,"top",function(){return cr}),r.d(F,"right",function(){return dr}),r.d(F,"bottom",function(){return lr}),r.d(F,"left",function(){return hr}),r.d(F,"combineEdges",function(){return sr}),r.d(F,"extrudeTop",function(){return vr}),r.d(F,"extrudeRight",function(){return pr}),r.d(F,"extrudeBottom",function(){return gr}),r.d(F,"extrudeLeft",function(){return mr}),r.d(F,"divideHorizontal",function(){return Ar}),r.d(F,"divideVertical",function(){return yr}),r.d(F,"quadTriangles",function(){return Mr}),r.d(F,"triangulate",function(){return Er});var N=Math.PI/180;function _(t){return t*N}var b=function(t,n){return function(r,e){return t(r,e)&&n(r,e)}},w=function(t){return function(n,r){return!t(n,r)}},R=function(t){return null!=t},S=function(t){return t&&t.length},U=function(t,n){return t!==n},x=function(t,n){return t===n};function G(t,n){if(t===n)return!0;if(!n)return!1;if(t.length!==n.length)return!1;for(var r=0;r<t.length;r++)if(t[r]!==n[r])return!1;return!0}function k(t,n){if(t===n)return!0;if(!n)return!1;var r=Object.keys(t);if(!G(r,Object.keys(n)))return!1;for(var e=0,o=r;e<o.length;e++){var u=o[e];if(t[u]!==n[u])return!1}return!0}function B(t){return new Float32Array(t)}function j(t,n,r){void 0===r&&(r=[]);for(var e=0;e<t.length;e++)r[e]=t[e]+n[e];return r}function K(t,n,r){void 0===r&&(r=[]);for(var e=0;e<t.length;e++)r[e]=t[e]-n[e];return r}function H(t,n,r){void 0===r&&(r=[]);for(var e=0;e<n.length;e++)r[e]=n[e]*t;return r}function q(t,n,r){void 0===r&&(r=[]);for(var e=0;e<n.length;e++)r[e]=n[e]/t;return r}function Y(t){for(var n=0,r=0;r<t.length;r++){var e=t[r];n+=e*e}return Math.sqrt(n)}function z(t,n){return void 0===n&&(n=[]),q(Y(t),t,n)}function Q(t,n){var r=Y(n);return t<r?H(t/r,n):n}function X(t,n){for(var r=0,e=0;e<t.length;e++)r+=t[e]*n[e];return r}function W(t,n,r){return void 0===r&&(r=[]),r[0]=t[1]*n[2]-t[2]*n[1],r[1]=t[2]*n[0]-t[0]*n[2],r[2]=t[0]*n[1]-t[1]*n[0],r}function V(t,n){return t[0]*n[1]-t[1]*n[0]}var J=G;function Z(t){return[Y(t),Math.atan2(t[1],t[0])]}function $(t){var n=t[0],r=t[1];return[n*Math.cos(r),n*Math.sin(r)]}for(var tt=[151,160,137,91,90,15,131,13,201,95,96,53,194,233,7,225,140,36,103,30,69,142,8,99,37,240,21,10,23,190,6,148,247,120,234,75,0,26,197,62,94,252,219,203,117,35,11,32,57,177,33,88,237,149,56,87,174,20,125,136,171,168,68,175,74,165,71,134,139,48,27,166,77,146,158,231,83,111,229,122,60,211,133,230,220,105,92,41,55,46,245,40,244,102,143,54,65,25,63,161,1,216,80,73,209,76,132,187,208,89,18,169,200,196,135,130,116,188,159,86,164,100,109,198,173,186,3,64,52,217,226,250,124,123,5,202,38,147,118,126,255,82,85,212,207,206,59,227,47,16,58,17,182,189,28,42,223,183,170,213,119,248,152,2,44,154,163,70,221,153,101,155,167,43,172,9,129,22,39,253,19,98,108,110,79,113,224,232,178,185,112,104,218,246,97,228,251,34,242,193,238,210,144,12,191,179,162,241,81,51,145,235,249,14,239,107,49,192,214,31,181,199,106,157,184,84,204,176,115,121,50,45,127,4,150,254,138,236,205,93,222,114,67,29,24,72,243,141,128,195,78,66,215,61,156,180],nt=0;nt<=256;nt++)tt[256+nt]=tt[nt];function rt(t,n){return 0==(1&t)?n:-n}function et(t){var n,r,e;return L((e=t-=r=~~t)*e*e*(e*(6*e-15)+10),rt(tt[n=255&r],t),rt(tt[n+1],t-1))}var ot=.5*(Math.sqrt(3)-1),ut=(3-Math.sqrt(3))/6,it=1/3,at=1/6,ft=(Math.sqrt(5)-1)/4,ct=(5-Math.sqrt(5))/20,dt=new Uint8Array(256),lt=new Uint8Array(512),ht=new Uint8Array(512);for(nt=0;nt<256;nt++)dt[nt]=256*Math.random();for(nt=0;nt<512;nt++)lt[nt]=dt[255&nt],ht[nt]=lt[nt]%12;var st,vt=new Float32Array([1,1,0,-1,1,0,1,-1,0,-1,-1,0,1,0,1,-1,0,1,1,0,-1,-1,0,-1,0,1,1,0,-1,1,0,1,-1,0,-1,-1]),pt=new Float32Array([0,1,1,1,0,1,1,-1,0,1,-1,1,0,1,-1,-1,0,-1,1,1,0,-1,1,-1,0,-1,-1,1,0,-1,-1,-1,1,0,1,1,1,0,1,-1,1,0,-1,1,1,0,-1,-1,-1,0,1,1,-1,0,1,-1,-1,0,-1,1,-1,0,-1,-1,1,1,0,1,1,1,0,-1,1,-1,0,1,1,-1,0,-1,-1,1,0,1,-1,1,0,-1,-1,-1,0,1,-1,-1,0,-1,1,1,1,0,1,1,-1,0,1,-1,1,0,1,-1,-1,0,-1,1,1,0,-1,1,-1,0,-1,-1,1,0,-1,-1,-1,0]);function gt(t,n){var r,e,o=0,u=0,i=0,a=(t+n)*ot,f=Math.floor(t+a),c=Math.floor(n+a),d=(f+c)*ut,l=t-(f-d),h=n-(c-d);l>h?(r=1,e=0):(r=0,e=1);var s=l-r+ut,v=h-e+ut,p=l-1+2*ut,g=h-1+2*ut,m=255&f,A=255&c,y=.5-l*l-h*h;if(y>=0){var M=3*ht[m+lt[A]];o=(y*=y)*y*(vt[M]*l+vt[M+1]*h)}var E=.5-s*s-v*v;if(E>=0){var I=3*ht[m+r+lt[A+e]];u=(E*=E)*E*(vt[I]*s+vt[I+1]*v)}var T=.5-p*p-g*g;if(T>=0){var P=3*ht[m+1+lt[A+1]];i=(T*=T)*T*(vt[P]*p+vt[P+1]*g)}return 70*(o+u+i)}function mt(t,n,r){var e,o,u,i,a,f,c,d,l,h,s=(t+n+r)*it,v=Math.floor(t+s),p=Math.floor(n+s),g=Math.floor(r+s),m=(v+p+g)*at,A=t-(v-m),y=n-(p-m),M=r-(g-m);A>=y?y>=M?(a=1,f=0,c=0,d=1,l=1,h=0):A>=M?(a=1,f=0,c=0,d=1,l=0,h=1):(a=0,f=0,c=1,d=1,l=0,h=1):y<M?(a=0,f=0,c=1,d=0,l=1,h=1):A<M?(a=0,f=1,c=0,d=0,l=1,h=1):(a=0,f=1,c=0,d=1,l=1,h=0);var E=A-a+at,I=y-f+at,T=M-c+at,P=A-d+2*at,D=y-l+2*at,F=M-h+2*at,C=A-1+3*at,L=y-1+3*at,O=M-1+3*at,N=255&v,_=255&p,b=255&g,w=.6-A*A-y*y-M*M;if(w<0)e=0;else{var R=3*ht[N+lt[_+lt[b]]];e=(w*=w)*w*(vt[R]*A+vt[R+1]*y+vt[R+2]*M)}var S=.6-E*E-I*I-T*T;if(S<0)o=0;else{var U=3*ht[N+a+lt[_+f+lt[b+c]]];o=(S*=S)*S*(vt[U]*E+vt[U+1]*I+vt[U+2]*T)}var x=.6-P*P-D*D-F*F;if(x<0)u=0;else{var G=3*ht[N+d+lt[_+l+lt[b+h]]];u=(x*=x)*x*(vt[G]*P+vt[G+1]*D+vt[G+2]*F)}var k=.6-C*C-L*L-O*O;if(k<0)i=0;else{var B=3*ht[N+1+lt[_+1+lt[b+1]]];i=(k*=k)*k*(vt[B]*C+vt[B+1]*L+vt[B+2]*O)}return 32*(e+o+u+i)}function At(t,n,r,e){var o,u,i,a,f,c,d,l,h,s,v,p,g,m,A,y,M,E=(t+n+r+e)*ft,I=Math.floor(t+E),T=Math.floor(n+E),P=Math.floor(r+E),D=Math.floor(e+E),F=(I+T+P+D)*ct,C=t-(I-F),L=n-(T-F),O=r-(P-F),N=e-(D-F),_=0,b=0,w=0,R=0;C>L?_++:b++,C>O?_++:w++,C>N?_++:R++,L>O?b++:w++,L>N?b++:R++,O>N?w++:R++;var S=C-(c=_>=3?1:0)+ct,U=L-(d=b>=3?1:0)+ct,x=O-(l=w>=3?1:0)+ct,G=N-(h=R>=3?1:0)+ct,k=C-(s=_>=2?1:0)+2*ct,B=L-(v=b>=2?1:0)+2*ct,j=O-(p=w>=2?1:0)+2*ct,K=N-(g=R>=2?1:0)+2*ct,H=C-(m=_>=1?1:0)+3*ct,q=L-(A=b>=1?1:0)+3*ct,Y=O-(y=w>=1?1:0)+3*ct,z=N-(M=R>=1?1:0)+3*ct,Q=C-1+4*ct,X=L-1+4*ct,W=O-1+4*ct,V=N-1+4*ct,J=255&I,Z=255&T,$=255&P,tt=255&D,nt=.6-C*C-L*L-O*O-N*N;if(nt<0)o=0;else{var rt=lt[J+lt[Z+lt[$+lt[tt]]]]%32*4;o=(nt*=nt)*nt*(pt[rt]*C+pt[rt+1]*L+pt[rt+2]*O+pt[rt+3]*N)}var et=.6-S*S-U*U-x*x-G*G;if(et<0)u=0;else{var ot=lt[J+c+lt[Z+d+lt[$+l+lt[tt+h]]]]%32*4;u=(et*=et)*et*(pt[ot]*S+pt[ot+1]*U+pt[ot+2]*x+pt[ot+3]*G)}var ut=.6-k*k-B*B-j*j-K*K;if(ut<0)i=0;else{var it=lt[J+s+lt[Z+v+lt[$+p+lt[tt+g]]]]%32*4;i=(ut*=ut)*ut*(pt[it]*k+pt[it+1]*B+pt[it+2]*j+pt[it+3]*K)}var at=.6-H*H-q*q-Y*Y-z*z;if(at<0)a=0;else{var dt=lt[J+m+lt[Z+A+lt[$+y+lt[tt+M]]]]%32*4;a=(at*=at)*at*(pt[dt]*H+pt[dt+1]*q+pt[dt+2]*Y+pt[dt+3]*z)}var ht=.6-Q*Q-X*X-W*W-V*V;if(ht<0)f=0;else{var st=lt[J+1+lt[Z+1+lt[$+1+lt[tt+1]]]]%32*4;f=(ht*=ht)*ht*(pt[st]*Q+pt[st+1]*X+pt[st+2]*W+pt[st+3]*V)}return 27*(o+u+i+a+f)}function yt(t,n,r,e){for(var o=[],u=0;u<n;u++)for(var i=0;i<t;i++){var a=i/t,f=u/n,c=Math.cos(2*a*Math.PI)*r/(2*Math.PI),d=Math.cos(2*f*Math.PI)*e/(2*Math.PI),l=Math.sin(2*a*Math.PI)*r/(2*Math.PI),h=Math.sin(2*f*Math.PI)*e/(2*Math.PI);o.push(At(c,d,l,h))}return o}function Mt(t,n){var r=X(t,n);return[t[0],t[1],t[2],-r]}function Et(t,n,r){return Mt(It(t,n,r),t)}function It(t,n,r){return z(W(K(r,n),K(t,n)))}function Tt(t){var n=t,r=n[0],e=n[1],o=n[2],u=n[3];return[1-2*r*r,-2*r*e,-2*r*o,0,-2*r*e,1-2*e*e,-2*e*o,0,-2*r*o,-2*e*o,1-2*o*o,0,-2*r*u,-2*e*u,-2*o*u,1]}function Pt(t){return t*=.5,[0,Math.sin(t),0,Math.cos(t)]}function Dt(t){return t*=.5,[Math.sin(t),0,0,Math.cos(t)]}function Ft(t){return t*=.5,[0,0,Math.sin(t),Math.cos(t)]}function Ct(t){return Math.floor(Math.random()*t)}function Lt(t,n){return Ct(n-t)+t}function Ot(){return(Math.random()+Math.random()+Math.random())/3}function Nt(t){function n(){t({width:window.innerWidth,height:window.innerHeight})}return window.addEventListener("resize",n),n(),function(){window.removeEventListener("resize",n)}}function _t(){var t={size:{width:0,height:0}},n=Nt(function(n){return t.size=n});return{state:t,destroy:n}}function bt(t,n){var r=n||t,e=t.element,o=void 0===e?window:e,u={};function i(t){u[t.keyCode]=Date.now(),r(u)}function a(t){delete u[t.keyCode],r(u)}return o.addEventListener("keyup",a,!1),o.addEventListener("keydown",i,!1),r(u),function(){o.removeEventListener("keyup",a),o.removeEventListener("keydown",i)}}function wt(t){var n={Keys:st,state:{pressed:{}},destroy:function(){}};return n.destroy=bt(function(t){n.state.pressed=t},t),n}!function(t){t[t.CANCEL=3]="CANCEL",t[t.HELP=6]="HELP",t[t.BACK_SPACE=8]="BACK_SPACE",t[t.TAB=9]="TAB",t[t.CLEAR=12]="CLEAR",t[t.RETURN=13]="RETURN",t[t.ENTER=14]="ENTER",t[t.SHIFT=16]="SHIFT",t[t.CONTROL=17]="CONTROL",t[t.ALT=18]="ALT",t[t.PAUSE=19]="PAUSE",t[t.CAPS_LOCK=20]="CAPS_LOCK",t[t.ESCAPE=27]="ESCAPE",t[t.SPACE=32]="SPACE",t[t.PAGE_UP=33]="PAGE_UP",t[t.PAGE_DOWN=34]="PAGE_DOWN",t[t.END=35]="END",t[t.HOME=36]="HOME",t[t.LEFT=37]="LEFT",t[t.UP=38]="UP",t[t.RIGHT=39]="RIGHT",t[t.DOWN=40]="DOWN",t[t.PRINTSCREEN=44]="PRINTSCREEN",t[t.INSERT=45]="INSERT",t[t.DELETE=46]="DELETE",t[t.DIGIT_0=48]="DIGIT_0",t[t.DIGIT_1=49]="DIGIT_1",t[t.DIGIT_2=50]="DIGIT_2",t[t.DIGIT_3=51]="DIGIT_3",t[t.DIGIT_4=52]="DIGIT_4",t[t.DIGIT_5=53]="DIGIT_5",t[t.DIGIT_6=54]="DIGIT_6",t[t.DIGIT_7=55]="DIGIT_7",t[t.DIGIT_8=56]="DIGIT_8",t[t.DIGIT_9=57]="DIGIT_9",t[t.SEMICOLON=59]="SEMICOLON",t[t.EQUALS=61]="EQUALS",t[t.A=65]="A",t[t.B=66]="B",t[t.C=67]="C",t[t.D=68]="D",t[t.E=69]="E",t[t.F=70]="F",t[t.G=71]="G",t[t.H=72]="H",t[t.I=73]="I",t[t.J=74]="J",t[t.K=75]="K",t[t.L=76]="L",t[t.M=77]="M",t[t.N=78]="N",t[t.O=79]="O",t[t.P=80]="P",t[t.Q=81]="Q",t[t.R=82]="R",t[t.S=83]="S",t[t.T=84]="T",t[t.U=85]="U",t[t.V=86]="V",t[t.W=87]="W",t[t.X=88]="X",t[t.Y=89]="Y",t[t.Z=90]="Z",t[t.CONTEXT_MENU=93]="CONTEXT_MENU",t[t.NUMPAD0=96]="NUMPAD0",t[t.NUMPAD1=97]="NUMPAD1",t[t.NUMPAD2=98]="NUMPAD2",t[t.NUMPAD3=99]="NUMPAD3",t[t.NUMPAD4=100]="NUMPAD4",t[t.NUMPAD5=101]="NUMPAD5",t[t.NUMPAD6=102]="NUMPAD6",t[t.NUMPAD7=103]="NUMPAD7",t[t.NUMPAD8=104]="NUMPAD8",t[t.NUMPAD9=105]="NUMPAD9",t[t.MULTIPLY=106]="MULTIPLY",t[t.ADD=107]="ADD",t[t.SEPARATOR=108]="SEPARATOR",t[t.SUBTRACT=109]="SUBTRACT",t[t.DECIMAL=110]="DECIMAL",t[t.DIVIDE=111]="DIVIDE",t[t.F1=112]="F1",t[t.F2=113]="F2",t[t.F3=114]="F3",t[t.F4=115]="F4",t[t.F5=116]="F5",t[t.F6=117]="F6",t[t.F7=118]="F7",t[t.F8=119]="F8",t[t.F9=120]="F9",t[t.F10=121]="F10",t[t.F11=122]="F11",t[t.F12=123]="F12",t[t.F13=124]="F13",t[t.F14=125]="F14",t[t.F15=126]="F15",t[t.F16=127]="F16",t[t.F17=128]="F17",t[t.F18=129]="F18",t[t.F19=130]="F19",t[t.F20=131]="F20",t[t.F21=132]="F21",t[t.F22=133]="F22",t[t.F23=134]="F23",t[t.F24=135]="F24",t[t.NUM_LOCK=144]="NUM_LOCK",t[t.SCROLL_LOCK=145]="SCROLL_LOCK",t[t.COMMA=188]="COMMA",t[t.PERIOD=190]="PERIOD",t[t.SLASH=191]="SLASH",t[t.BACK_QUOTE=192]="BACK_QUOTE",t[t.OPEN_BRACKET=219]="OPEN_BRACKET",t[t.BACK_SLASH=220]="BACK_SLASH",t[t.CLOSE_BRACKET=221]="CLOSE_BRACKET",t[t.QUOTE=222]="QUOTE",t[t.META=224]="META"}(st||(st={}));var Rt={LEFT:0,MIDDLE:1,RIGHT:2};function St(t,n){var r=n||t,e=t,o=e.element,u=void 0===o?document:o,i=e.enableRightButton,a={pressed:{},drag:{x:0,y:0,dX:0,dY:0},dragging:!1},f=0,c=0,d=0,l=0;function h(t){a.pressed[t.button]=t,t.button===Rt.LEFT&&(f=d=t.clientX,c=l=t.clientY,a.dragging=!0),r(a)}function s(t){delete a.pressed[t.button],delete a.drag.event,a.drag.x=0,a.drag.y=0,a.drag.dX=0,a.drag.dY=0,a.dragging=!1,r(a)}function v(t){a.dragging&&(a.drag.event=t,a.drag.x=f-t.clientX,a.drag.y=c-t.clientY,a.drag.dX=d-t.clientX,a.drag.dY=l-t.clientY,d=t.clientX,l=t.clientY,r(a))}function p(t){t.preventDefault()}return u.addEventListener("mousedown",h),document.addEventListener("mouseup",s),document.addEventListener("mousemove",v),i&&u.addEventListener("contextmenu",p),r(a),function(){u.removeEventListener("mousedown",h),document.removeEventListener("mousemove",v),document.removeEventListener("mouseup",s),i&&u.removeEventListener("contextmenu",p)}}function Ut(t){void 0===t&&(t={});var n={Buttons:Rt,state:{},destroy:function(){}};return n.destroy=St(t,function(t){n.state=t}),n}function xt(t){var n,r=!0;return requestAnimationFrame(function e(o){r&&(t(o-(n||o)),n=o,requestAnimationFrame(e))}),function(){r=!1}}function Gt(t){var n=!0;return requestAnimationFrame(function r(e){n&&(t(e),requestAnimationFrame(r))}),function(){n=!1}}function kt(t){void 0===t&&(t=xt);var n=[];function r(){for(var t in n)n[t].apply(null,arguments)}return{start:function(){this.stop=t(r)},stop:function(){},step:r,addUpdate:function(t){n.push(t)},removeUpdate:function(t){n=n.filter(function(n){return n!==t})}}}var Bt=new Array(16);for(var jt=[],Kt={},Ht=0;Ht<256;Ht++)jt[Ht]=(Ht+256).toString(16).substr(1),Kt[jt[Ht]]=Ht;function qt(){var t,n,r,e=function(){for(var t=0,n=void 0;t<16;t++)0==(3&t)&&(n=4294967296*Math.random(),Bt[t]=n>>>((3&t)<<3)&255);return Bt}();return e[6]=15&e[6]|64,e[8]=63&e[8]|128,r=0,(n=jt)[(t=e)[r++]]+n[t[r++]]+n[t[r++]]+n[t[r++]]+"-"+n[t[r++]]+n[t[r++]]+"-"+n[t[r++]]+n[t[r++]]+"-"+n[t[r++]]+n[t[r++]]+"-"+n[t[r++]]+n[t[r++]]+n[t[r++]]+n[t[r++]]+n[t[r++]]+n[t[r++]]}function Yt(t){return t[Ct(t.length)]}function zt(t,n){for(var r=0;r<n;r++)t(r)}function Qt(t,n,r){void 0===r&&(r=[]);for(var e=0;e<n;e++)r[e]=t(e);return r}function Xt(t,n,r,e){void 0===e&&(e=[]);for(var o=Math.min(n.length,r.length),u=0;u<o;u++)e[u]=t(n[u],r[u]);return e}function Wt(t,n){void 0===n&&(n=[]);for(var r=0,e=t;r<e.length;r++)for(var o=e[r],u=n.length,i=0;i<o.length;i++)n[i+u]=o[i];return n}function Vt(t,n,r){return void 0===r&&(r=[]),Wt(n.map(t),r)}function Jt(t){for(var n=[],r=0;r<t.length;r++){var e=Lt(r,t.length),o=void 0!==n[r]?n[r]:t[r];n[r]=void 0!==n[e]?n[e]:t[e],n[e]=o}return n}function Zt(t,n){if(Array.isArray(n))return n.map(t);var r={};for(var e in n)r[e]=t(n[e],e);return r}function $t(t,n){for(var r in n)t(n[r],r)}var tn=Object.assign||function(t){for(var n,r=1,e=arguments.length;r<e;r++)for(var o in n=arguments[r])Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t};function nn(t,n){if("object"==typeof t&&"object"==typeof n&&!Array.isArray(t)&&!Array.isArray(n)&&t!==n){var r=tn({},t);for(var e in n){var o=t[e],u=n[e];void 0!==u?r[e]=nn(o,u):delete r[e]}return r}return n}function rn(t){return function(n,r){return void 0!==r?t(n,r):function(r){return t(n,r)}}}function en(t){for(var n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];return t.bind.apply(t,[null].concat(n))}var on=[0,0,0,255],un=[255,255,255,255];function an(t,n){var r=t[0],e=t[1],o=t[2],u=t[3],i=n[0],a=n[1],f=n[2],c=n[3]/255;return[Math.floor(L(c,r,i)),Math.floor(L(c,e,a)),Math.floor(L(c,o,f)),u]}function fn(t,n){return null==n&&(n=255),[t,t,t,n]}function cn(t){return"rgba("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]/255+")"}function dn(t){return t.map(function(t){return t/255})}function ln(t){return t.map(function(t){return Math.floor(255*t)})}function hn(t){return[(t=Math.floor(t))>>16&255,t>>8&255,255&t]}function sn(t){var n=t.split("#");return hn(parseInt(n[n.length-1],16))}function vn(t){return Math.floor(127*(t+1))}function pn(t,n,r){for(var e=r.canvas.width,o=r.canvas.height,u=yt(e,o,t,n),i=yt(e,o,2.1*t,2.1*n),a=yt(e,o,4.2*t,4.2*n),f=yt(e,o,8.3*t,8.3*n),c=r.getImageData(0,0,e,o),d=0;d<u.length-1;d++){var l=4*d;c.data[l]=vn(u[d]),c.data[l+1]=vn(i[d]),c.data[l+2]=vn(a[d]),c.data[l+3]=vn(f[d])}r.putImageData(c,0,0)}function gn(t,n){var r=t[0],e=t[1],o=n.width,u=n.height;return r>=o&&(r-=o),e>=u&&(e-=u),r<0&&(r+=o),e<0&&(e+=u),[r,e]}function mn(t,n){var r=t[0],e=t[1],o=n.width,u=n.height;return r<0&&(r=0),e<0&&(e=0),r>=o&&(r=o),e>=u&&(e=u),[r,e]}function An(t){function n(n,r){var e=t(r,n),o=e[0];return 4*(e[1]*n.height+o)}function r(t,r){var e=n(t,r);return[t.data[e],t.data[e+1],t.data[e+2],t.data[e+3]]}function e(t,r,e){var o=n(t,r);t.data[o]=e[0],t.data[o+1]=e[1],t.data[o+2]=e[2],t.data[o+3]=e[3]}return t=t||mn,{getPixelIndex:n,getColorAt:r,setColorAt:e,increaseAllBy:function(t,n){for(var r=n[0],e=n[1],o=n[2],u=n[3],i=t.data,a=0;a<i.length;a+=4)i[a]+r<256&&(i[a]+=r),i[a+1]+e<256&&(i[a+1]+=e),i[a+2]+o<256&&(i[a+2]+=o),i[a+3]+u<256&&(i[a+3]+=u)},decreaseAllBy:function(t,n){for(var r=n[0],e=n[1],o=n[2],u=n[3],i=t.data,a=0;a<=i.length;a+=4)r<=i[a]&&(i[a]-=r),e<=i[a+1]&&(i[a+1]-=e),o<=i[a+2]&&(i[a+2]-=o),u<=i[a+3]&&(i[a+3]-=u)},mixinColor:function(t,n){for(var o=0;o<t.width;o++)for(var u=0;o<t.height;u++)e(t,[o,u],an(r(t,[o,u]),n))},replaceWithImageDataAt:function(t,n,o){for(var u=o[0],i=o[1],a=n.width-1,f=n.height-1,c=0;c<f;c++)for(var d=0;d<a;d++)e(t,[u+d,i+c],r(n,[d,c]))},drawImageAt:function(t,n,o){for(var u=o[0],i=o[1],a=n.width-1,f=n.height-1,c=0;c<f;c++)for(var d=0;d<a;d++)e(t,[u+d,i+c],an(r(t,[u+d,i+c]),r(n,[d,c])))}}}function yn(t){var n=document.createElement("canvas");n.width=t.width,n.height=t.height;var r=n.getContext("2d");if(r)return r.drawImage(t,0,0,t.width,t.height),r.getImageData(0,0,t.width,t.height)}var Mn=function(t,n){return t-n},En=function(t,n){return t.localeCompare(n)},In=function(){return function(t,n,r){this.parent=t,this.left=t,this.right=t,this.key=n,this.value=r}}(),Tn=function(){var t={parent:null,left:null,right:null,key:null};return t.parent=t,t.left=t,t.right=t,t}();function Pn(t,n,r){n!==t.nil&&(Pn(t,n.left,r),r(n),Pn(t,n.right,r))}function Dn(t,n){if(n.right!==t.nil)return _n(t,n.right);for(var r=n.parent;r!==t.nil&&n===r.right;)n=r,r=r.parent;return r}function Fn(t,n){if(n.left!==t.nil)return bn(t,n.right);for(var r=n.parent;r!==t.nil&&n===r.left;)n=r,r=r.parent;return r}function Cn(t,n){for(var r=t.nil,e=t.root;e!==t.nil;)r=e,e=t.compare(n.key,e.key)<0?e.left:e.right;n.parent=r,r===t.nil?t.root=n:t.compare(n.key,r.key)<0?r.left=n:r.right=n}function Ln(t,n,r){for(;n!==t.nil&&n.key!==r;)n=t.compare(r,n.key)<0?n.left:n.right;return n}function On(t,n,r){n.parent===t.nil?t.root=r:n===n.parent.left?n.parent.left=r:n.parent.right=r,r.parent=n.parent}function Nn(t,n){if(n.left===t.nil)On(t,n,n.right);else if(n.right===t.nil)On(t,n,n.left);else{var r=_n(t,n.right);r.parent!==n&&(On(t,r,r.right),r.right=n.right,r.right.parent=r),On(t,n,r),r.left=n.left,r.left.parent=r}}function _n(t,n){for(;n!==t.nil&&n.left!==t.nil;)n=n.left;return n}function bn(t,n){for(;n.right!==t.nil;)n=n.right;return n}function wn(t,n){var r=n.right;n.right=r.left,r.left!==t.nil&&(r.left.parent=n),r.parent=n.parent,n.parent===t.nil?t.root=r:n===n.parent.left?n.parent.left=r:n.parent.right=r,r.left=n,n.parent=r}function Rn(t,n){var r=n.left;n.left=r.right,r.right!==t.nil&&(r.right.parent=n),r.parent=n.parent,n.parent===t.nil?t.root=r:n===n.parent.right?n.parent.right=r:n.parent.left=r,r.right=n,n.parent=r}function Sn(t,n,r){if(n&&n!==t.nil)for(;n!==t.nil;)r(n),n=n.parent}var Un,xn=function(){function t(t,n){void 0===n&&(n=Tn),this.count=0,this.compare=t,this.root=n,this.nil=n}return t.prototype.createNode=function(t,n){return new In(this.nil,t,n)},t.prototype.insert=function(t,n){var r=this.createNode(t,n);return Cn(this,r),this.count++,r},t.prototype.getNode=function(t){return Ln(this,this.root,t)},t.prototype.get=function(t){var n=this.getNode(t);return n===this.nil?n:n.value},t.prototype.keys=function(){var t=[];return Pn(this,this.root,function(n){return t.push(n.key)}),t},t.prototype.min=function(){return _n(this,this.root).key},t.prototype.max=function(){return bn(this,this.root).key},t.prototype.remove=function(t){var n=Ln(this,this.root,t);n!==this.nil&&(Nn(this,n),this.count--)},t.prototype.size=function(){return this.count},t}(),Gn=(Un=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var r in n)n.hasOwnProperty(r)&&(t[r]=n[r])},function(t,n){function r(){this.constructor=t}Un(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}),kn=Object.assign||function(t){for(var n,r=1,e=arguments.length;r<e;r++)for(var o in n=arguments[r])Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},Bn=function(t){function n(n,r,e){var o=t.call(this,n,r,e)||this;return o.red=!0,o}return Gn(n,t),n}(In),jn=kn({},Tn,{red:!1});function Kn(t,n){for(;n.parent.red;){var r;if(n.parent===n.parent.parent.left)(r=n.parent.parent.right).red?(n.parent.red=!1,r.red=!1,n.parent.parent.red=!0,n=n.parent.parent):(n===n.parent.right&&wn(t,n=n.parent),n.parent.red=!1,n.parent.parent.red=!0,Rn(t,n.parent.parent));else(r=n.parent.parent.left).red?(n.parent.red=!1,r.red=!1,n.parent.parent.red=!0,n=n.parent.parent):(n===n.parent.left&&Rn(t,n=n.parent),n.parent.red=!1,n.parent.parent.red=!0,wn(t,n.parent.parent))}t.root.red=!1}function Hn(t,n){var r,e=n,o=n.red;if(n.left===t.nil?(r=n.right,On(t,n,n.right)):n.right===t.nil?(r=n.left,On(t,n,n.left)):(o=(e=_n(t,n.right)).red,r=e.right,e.parent===n?r.parent=e:(On(t,e,e.right),e.right=n.right,e.right.parent=e),On(t,n,e),e.left=n.left,e.left.parent=e,e.red=n.red),!o){for(;r!==t.root&&!r.red;){var u;if(r===r.parent.left)(u=r.parent.right).red&&(u.red=!1,r.parent.red=!0,wn(t,r.parent),u=r.parent.right),u.left.red||u.right.red?(u.right.red||(u.left.red=!1,u.red=!0,Rn(t,u),u=r.parent.right),u.red=r.parent.red,r.parent.red=!1,u.right.red=!1,wn(t,r.parent),r=t.root):(u.red=!0,r=r.parent);else(u=r.parent.left).red&&(u.red=!1,r.parent.red=!0,Rn(t,r.parent),u=r.parent.left),u.left.red||u.right.red?(u.left.red||(u.right.red=!1,u.red=!0,wn(t,u),u=r.parent.left),u.red=r.parent.red,r.parent.red=!1,u.left.red=!1,Rn(t,r.parent),r=t.root):(u.red=!0,r=r.parent)}r.red=!1}}var qn=function(t){function n(n,r){return void 0===r&&(r=jn),t.call(this,n,r)||this}return Gn(n,t),n.prototype.createNode=function(t,n){return new Bn(this.nil,t,n)},n.prototype.insert=function(t,n){var r=this.createNode(t,n);return Cn(this,r),Kn(this,r),this.count++,r},n.prototype.remove=function(t){var n=Ln(this,this.root,t);n!==this.nil&&(Hn(this,n),this.count--)},n}(xn);function Yn(t){return Math.floor(t/2)}function zn(t){return 2*t+1}function Qn(t){return 2*t}function Xn(t,n,r){var e=r[t];r[t]=r[n],r[n]=e}function Wn(t,n,r){var e=Qn(r),o=zn(r),u=r;e<n.length&&t(n[u],n[e])<0&&(u=e),o<n.length&&t(n[u],n[o])<0&&(u=o),u!==r&&(Xn(r,u,n),Wn(t,n,u))}function Vn(t,n){for(var r=Math.floor((n.length-1)/2);r>=0;r--)Wn(t,n,r)}function Jn(t,n,r){if(n.push(r),n.length>1)for(var e=n.length-1,o=Yn(e);e>0&&t(n[o],n[e])<0;)Xn(o,e,n),o=Yn(e=o)}function Zn(t){var n=[];return{size:function(){return n.length},fromArray:function(r){n=r.concat(),Vn(t,n)},pull:function(){var r=n.shift();return Wn(t,n,0),r},getTop:function(){return n[0]},insert:function(r){return Jn(t,n,r)}}}function $n(t,n,r,e){return Xt(en(t,n),r,e)}var tr=en($n,L);function nr(t,n){var r=n[0],e=n[1],o=tr(t,r,e);return[[r,o],[o,e]]}function rr(t,n){return n.map(function(n){return j(t,n)})}function er(t){return t.unshift(t.pop()),t}function or(t){return t.push(t.shift()),t}function ur(t){return er(t.concat())}function ir(t){return or(t.concat())}function ar(t){return z(W(K(t[0],t[1]),K(t[2],t[1])))}function fr(t,n){return V(K(n,t[0]),K(t[1],t[0]))}function cr(t){return[t[0],t[1]]}function dr(t){return[t[1],t[2]]}function lr(t){return[t[2],t[3]]}function hr(t){return[t[3],t[0]]}function sr(t,n){return t.concat(ur(n))}function vr(t,n){return sr(rr(t,n),n)}function pr(t,n){return ur(vr(t,n))}function gr(t,n){return sr(n,rr(t,n))}function mr(t,n){return ur(gr(t,n))}function Ar(t,n,r){var e=r[0],o=r[1],u=r[2],i=r[3],a=tr(t,e,i),f=tr(n,o,u);return[[e,o,f,a],[a,f,u,i]]}function yr(t,n,r){var e=r[0],o=r[1],u=r[2],i=r[3],a=tr(t,e,o),f=tr(n,i,u);return[[e,a,f,i],[a,o,u,f]]}var Mr=[[0,2,1],[0,3,2]];function Er(t){return Wt(Qt(function(t){return Mr.map(function(n){return n.map(function(n){return 4*t+n})})},t))}r.d(n,"math",function(){return Ir}),r.d(n,"events",function(){return Tr}),r.d(n,"utils",function(){return Pr}),r.d(n,"fp",function(){return Dr}),r.d(n,"graphics",function(){return Fr}),r.d(n,"geometry",function(){return Cr}),r.d(n,"algorithms",function(){return Lr}),r.d(n,"datastructures",function(){return Or});var Ir={core:e,noise:a,coords:i,vectors:u,geometry:f,random:c},Tr={dom:d,mouse:h,keyboard:l,animation:s},Pr={uuid:v,seq:p,predicates:o,object:g},Dr={core:m},Fr={colors:A,pixels:M,textures:y},Cr={primitives:D,quad:F},Lr={base:E},Or={bintree:I,rbtree:T,heap:P};n.default={math:Ir,events:Tr,utils:Pr,graphics:Fr,fp:Dr,geometry:Cr,datastructures:Or,algorithms:Lr}}])});