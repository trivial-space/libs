!function(n,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.tvsLibs=t():n.tvsLibs=t()}(window,function(){return function(n){var t={};function r(e){if(t[e])return t[e].exports;var o=t[e]={i:e,l:!1,exports:{}};return n[e].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=n,r.c=t,r.d=function(n,t,e){r.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:e})},r.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},r.t=function(n,t){if(1&t&&(n=r(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var o in n)r.d(e,o,function(t){return n[t]}.bind(null,o));return e},r.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return r.d(t,"a",t),t},r.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},r.p="",r(r.s=0)}([function(n,t,r){"use strict";r.r(t);var e={};r.r(e),r.d(e,"sign",function(){return O}),r.d(e,"lerp",function(){return C}),r.d(e,"clamp",function(){return L}),r.d(e,"DEG_TO_RAD_FACTOR",function(){return N}),r.d(e,"degToRad",function(){return b});var o={};r.r(o),r.d(o,"and",function(){return _}),r.d(o,"not",function(){return w}),r.d(o,"defined",function(){return R}),r.d(o,"notEmpty",function(){return S}),r.d(o,"unequal",function(){return U}),r.d(o,"equal",function(){return x}),r.d(o,"equalArray",function(){return G}),r.d(o,"equalObject",function(){return j});var u={};r.r(u),r.d(u,"vec",function(){return B}),r.d(u,"add",function(){return k}),r.d(u,"sub",function(){return H}),r.d(u,"mul",function(){return K}),r.d(u,"div",function(){return q}),r.d(u,"length",function(){return Y}),r.d(u,"normalize",function(){return z}),r.d(u,"limit",function(){return Q}),r.d(u,"dot",function(){return X}),r.d(u,"cross",function(){return W}),r.d(u,"cross2D",function(){return V}),r.d(u,"isEqual",function(){return $});var i={};r.r(i),r.d(i,"cartesianToPolar2D",function(){return J}),r.d(i,"polarToCartesian2D",function(){return Z});var a={};r.r(a),r.d(a,"noise1d",function(){return en}),r.d(a,"noise2d",function(){return mn}),r.d(a,"noise3d",function(){return yn}),r.d(a,"noise4d",function(){return An}),r.d(a,"tileNoise",function(){return Mn});var f={};r.r(f),r.d(f,"planeFromNormalAndCoplanarPoint",function(){return En}),r.d(f,"planeFromThreeCoplanarPoints",function(){return Tn}),r.d(f,"normalFromThreeCoplanarPoints",function(){return In}),r.d(f,"mirrorMatrixFromPlane",function(){return Pn}),r.d(f,"getYawQuat",function(){return Dn}),r.d(f,"getPitchQuat",function(){return Fn}),r.d(f,"getRollQuat",function(){return On});var c={};r.r(c),r.d(c,"randInt",function(){return Cn}),r.d(c,"randIntInRange",function(){return Ln}),r.d(c,"normalRand",function(){return Nn});var d={};r.r(d),r.d(d,"windowSize",function(){return bn}),r.d(d,"windowSizeObserver",function(){return _n});var l={};r.r(l),r.d(l,"Keys",function(){return vn}),r.d(l,"keyboard",function(){return wn}),r.d(l,"keyboardObserver",function(){return Rn});var s={};r.r(s),r.d(s,"Buttons",function(){return Sn}),r.d(s,"mouse",function(){return Un}),r.d(s,"mouseObserver",function(){return xn});var h={};r.r(h),r.d(h,"animateWithTPF",function(){return Gn}),r.d(h,"animate",function(){return jn}),r.d(h,"createAnimator",function(){return Bn});var v={};r.r(v),r.d(v,"v4",function(){return Yn});var p={};r.r(p),r.d(p,"pickRandom",function(){return zn}),r.d(p,"doTimes",function(){return Qn}),r.d(p,"times",function(){return Xn}),r.d(p,"zip",function(){return Wn}),r.d(p,"flatten",function(){return Vn}),r.d(p,"mapcat",function(){return $n}),r.d(p,"shuffle",function(){return Jn}),r.d(p,"map",function(){return Zn}),r.d(p,"each",function(){return nt});var g={};r.r(g),r.d(g,"deepmerge",function(){return rt}),r.d(g,"deepOverride",function(){return et});var m={};r.r(m),r.d(m,"curry",function(){return ot}),r.d(m,"partial",function(){return ut});var y={};r.r(y),r.d(y,"BLACK",function(){return at}),r.d(y,"WHITE",function(){return ft}),r.d(y,"mixColors",function(){return ct}),r.d(y,"grey",function(){return dt}),r.d(y,"colorRgbaToCSS",function(){return lt}),r.d(y,"intToFloat",function(){return st}),r.d(y,"floatToInt",function(){return ht}),r.d(y,"hexToRgb",function(){return vt}),r.d(y,"rgbToHexString",function(){return pt}),r.d(y,"hexStringToRgb",function(){return gt}),r.d(y,"rgbToHSL",function(){return mt}),r.d(y,"hslToRGB",function(){return yt}),r.d(y,"adjustHue",function(){return At}),r.d(y,"updateHue",function(){return Mt}),r.d(y,"updateSaturation",function(){return Et}),r.d(y,"updateLightness",function(){return Tt});var A={};r.r(A),r.d(A,"drawTileNoiseTexture",function(){return Pt});var M={};r.r(M),r.d(M,"repeatedPosition",function(){return Dt}),r.d(M,"closedPosition",function(){return Ft}),r.d(M,"createPixelContext",function(){return Ot}),r.d(M,"createImgDataFromImage",function(){return Ct});var E={};r.r(E),r.d(E,"numericalCompare",function(){return Lt}),r.d(E,"stringCompare",function(){return Nt});var T={};r.r(T),r.d(T,"Node",function(){return bt}),r.d(T,"nil",function(){return _t}),r.d(T,"walkInOrder",function(){return wt}),r.d(T,"next",function(){return Rt}),r.d(T,"prev",function(){return St}),r.d(T,"insert",function(){return Ut}),r.d(T,"search",function(){return xt}),r.d(T,"transplant",function(){return Gt}),r.d(T,"remove",function(){return jt}),r.d(T,"min",function(){return Bt}),r.d(T,"max",function(){return kt}),r.d(T,"rotateLeft",function(){return Ht}),r.d(T,"rotateRight",function(){return Kt}),r.d(T,"walkToRoot",function(){return qt}),r.d(T,"BinaryTree",function(){return zt});var I={};r.r(I),r.d(I,"RBNode",function(){return Wt}),r.d(I,"rbNil",function(){return Vt}),r.d(I,"insertFixup",function(){return $t}),r.d(I,"remove",function(){return Jt}),r.d(I,"RBTree",function(){return Zt});var P={};r.r(P),r.d(P,"parentIndex",function(){return nr}),r.d(P,"rightIndex",function(){return tr}),r.d(P,"leftIndex",function(){return rr}),r.d(P,"heapifyAt",function(){return or}),r.d(P,"heapify",function(){return ur}),r.d(P,"insert",function(){return ir}),r.d(P,"createHeap",function(){return ar});var D={};r.r(D),r.d(D,"interpolate",function(){return fr}),r.d(D,"lerpVecs",function(){return cr}),r.d(D,"split",function(){return dr}),r.d(D,"translate",function(){return lr}),r.d(D,"rotateLeftInPlace",function(){return sr}),r.d(D,"rotateRightInPlace",function(){return hr}),r.d(D,"rotateLeft",function(){return vr}),r.d(D,"rotateRight",function(){return pr}),r.d(D,"normal",function(){return gr}),r.d(D,"side",function(){return mr});var F={};function O(n){return n>0?1:n<0?-1:0}function C(n,t,r){return t+n*(r-t)}function L(n,t,r){return Math.max(n,Math.min(r,t))}r.r(F),r.d(F,"top",function(){return yr}),r.d(F,"right",function(){return Ar}),r.d(F,"bottom",function(){return Mr}),r.d(F,"left",function(){return Er}),r.d(F,"combineEdges",function(){return Tr}),r.d(F,"extrudeTop",function(){return Ir}),r.d(F,"extrudeRight",function(){return Pr}),r.d(F,"extrudeBottom",function(){return Dr}),r.d(F,"extrudeLeft",function(){return Fr}),r.d(F,"divideHorizontal",function(){return Or}),r.d(F,"divideVertical",function(){return Cr}),r.d(F,"quadTriangles",function(){return Lr}),r.d(F,"triangulate",function(){return Nr});var N=Math.PI/180;function b(n){return n*N}var _=function(n,t){return function(r,e){return n(r,e)&&t(r,e)}},w=function(n){return function(t,r){return!n(t,r)}},R=function(n){return null!=n},S=function(n){return n&&n.length},U=function(n,t){return n!==t},x=function(n,t){return n===t};function G(n,t){if(n===t)return!0;if(!t)return!1;if(n.length!==t.length)return!1;for(var r=0;r<n.length;r++)if(n[r]!==t[r])return!1;return!0}function j(n,t){if(n===t)return!0;if(!t)return!1;var r=Object.keys(n);if(!G(r,Object.keys(t)))return!1;for(var e=0,o=r;e<o.length;e++){var u=o[e];if(n[u]!==t[u])return!1}return!0}function B(n){return new Float32Array(n)}function k(n,t,r){void 0===r&&(r=[]);for(var e=0;e<n.length;e++)r[e]=n[e]+t[e];return r}function H(n,t,r){void 0===r&&(r=[]);for(var e=0;e<n.length;e++)r[e]=n[e]-t[e];return r}function K(n,t,r){void 0===r&&(r=[]);for(var e=0;e<t.length;e++)r[e]=t[e]*n;return r}function q(n,t,r){void 0===r&&(r=[]);for(var e=0;e<t.length;e++)r[e]=t[e]/n;return r}function Y(n){for(var t=0,r=0;r<n.length;r++){var e=n[r];t+=e*e}return Math.sqrt(t)}function z(n,t){return void 0===t&&(t=[]),q(Y(n),n,t)}function Q(n,t){var r=Y(t);return n<r?K(n/r,t):t}function X(n,t){for(var r=0,e=0;e<n.length;e++)r+=n[e]*t[e];return r}function W(n,t,r){return void 0===r&&(r=[]),r[0]=n[1]*t[2]-n[2]*t[1],r[1]=n[2]*t[0]-n[0]*t[2],r[2]=n[0]*t[1]-n[1]*t[0],r}function V(n,t){return n[0]*t[1]-n[1]*t[0]}var $=G;function J(n){return[Y(n),Math.atan2(n[1],n[0])]}function Z(n){var t=n[0],r=n[1];return[t*Math.cos(r),t*Math.sin(r)]}for(var nn=[151,160,137,91,90,15,131,13,201,95,96,53,194,233,7,225,140,36,103,30,69,142,8,99,37,240,21,10,23,190,6,148,247,120,234,75,0,26,197,62,94,252,219,203,117,35,11,32,57,177,33,88,237,149,56,87,174,20,125,136,171,168,68,175,74,165,71,134,139,48,27,166,77,146,158,231,83,111,229,122,60,211,133,230,220,105,92,41,55,46,245,40,244,102,143,54,65,25,63,161,1,216,80,73,209,76,132,187,208,89,18,169,200,196,135,130,116,188,159,86,164,100,109,198,173,186,3,64,52,217,226,250,124,123,5,202,38,147,118,126,255,82,85,212,207,206,59,227,47,16,58,17,182,189,28,42,223,183,170,213,119,248,152,2,44,154,163,70,221,153,101,155,167,43,172,9,129,22,39,253,19,98,108,110,79,113,224,232,178,185,112,104,218,246,97,228,251,34,242,193,238,210,144,12,191,179,162,241,81,51,145,235,249,14,239,107,49,192,214,31,181,199,106,157,184,84,204,176,115,121,50,45,127,4,150,254,138,236,205,93,222,114,67,29,24,72,243,141,128,195,78,66,215,61,156,180],tn=0;tn<=256;tn++)nn[256+tn]=nn[tn];function rn(n,t){return 0==(1&n)?t:-t}function en(n){var t,r,e;return C((e=n-=r=~~n)*e*e*(e*(6*e-15)+10),rn(nn[t=255&r],n),rn(nn[t+1],n-1))}var on=.5*(Math.sqrt(3)-1),un=(3-Math.sqrt(3))/6,an=1/3,fn=1/6,cn=(Math.sqrt(5)-1)/4,dn=(5-Math.sqrt(5))/20,ln=new Uint8Array(256),sn=new Uint8Array(512),hn=new Uint8Array(512);for(tn=0;tn<256;tn++)ln[tn]=256*Math.random();for(tn=0;tn<512;tn++)sn[tn]=ln[255&tn],hn[tn]=sn[tn]%12;var vn,pn=new Float32Array([1,1,0,-1,1,0,1,-1,0,-1,-1,0,1,0,1,-1,0,1,1,0,-1,-1,0,-1,0,1,1,0,-1,1,0,1,-1,0,-1,-1]),gn=new Float32Array([0,1,1,1,0,1,1,-1,0,1,-1,1,0,1,-1,-1,0,-1,1,1,0,-1,1,-1,0,-1,-1,1,0,-1,-1,-1,1,0,1,1,1,0,1,-1,1,0,-1,1,1,0,-1,-1,-1,0,1,1,-1,0,1,-1,-1,0,-1,1,-1,0,-1,-1,1,1,0,1,1,1,0,-1,1,-1,0,1,1,-1,0,-1,-1,1,0,1,-1,1,0,-1,-1,-1,0,1,-1,-1,0,-1,1,1,1,0,1,1,-1,0,1,-1,1,0,1,-1,-1,0,-1,1,1,0,-1,1,-1,0,-1,-1,1,0,-1,-1,-1,0]);function mn(n,t){var r,e,o=0,u=0,i=0,a=(n+t)*on,f=Math.floor(n+a),c=Math.floor(t+a),d=(f+c)*un,l=n-(f-d),s=t-(c-d);l>s?(r=1,e=0):(r=0,e=1);var h=l-r+un,v=s-e+un,p=l-1+2*un,g=s-1+2*un,m=255&f,y=255&c,A=.5-l*l-s*s;if(A>=0){var M=3*hn[m+sn[y]];o=(A*=A)*A*(pn[M]*l+pn[M+1]*s)}var E=.5-h*h-v*v;if(E>=0){var T=3*hn[m+r+sn[y+e]];u=(E*=E)*E*(pn[T]*h+pn[T+1]*v)}var I=.5-p*p-g*g;if(I>=0){var P=3*hn[m+1+sn[y+1]];i=(I*=I)*I*(pn[P]*p+pn[P+1]*g)}return 70*(o+u+i)}function yn(n,t,r){var e,o,u,i,a,f,c,d,l,s,h=(n+t+r)*an,v=Math.floor(n+h),p=Math.floor(t+h),g=Math.floor(r+h),m=(v+p+g)*fn,y=n-(v-m),A=t-(p-m),M=r-(g-m);y>=A?A>=M?(a=1,f=0,c=0,d=1,l=1,s=0):y>=M?(a=1,f=0,c=0,d=1,l=0,s=1):(a=0,f=0,c=1,d=1,l=0,s=1):A<M?(a=0,f=0,c=1,d=0,l=1,s=1):y<M?(a=0,f=1,c=0,d=0,l=1,s=1):(a=0,f=1,c=0,d=1,l=1,s=0);var E=y-a+fn,T=A-f+fn,I=M-c+fn,P=y-d+2*fn,D=A-l+2*fn,F=M-s+2*fn,O=y-1+3*fn,C=A-1+3*fn,L=M-1+3*fn,N=255&v,b=255&p,_=255&g,w=.6-y*y-A*A-M*M;if(w<0)e=0;else{var R=3*hn[N+sn[b+sn[_]]];e=(w*=w)*w*(pn[R]*y+pn[R+1]*A+pn[R+2]*M)}var S=.6-E*E-T*T-I*I;if(S<0)o=0;else{var U=3*hn[N+a+sn[b+f+sn[_+c]]];o=(S*=S)*S*(pn[U]*E+pn[U+1]*T+pn[U+2]*I)}var x=.6-P*P-D*D-F*F;if(x<0)u=0;else{var G=3*hn[N+d+sn[b+l+sn[_+s]]];u=(x*=x)*x*(pn[G]*P+pn[G+1]*D+pn[G+2]*F)}var j=.6-O*O-C*C-L*L;if(j<0)i=0;else{var B=3*hn[N+1+sn[b+1+sn[_+1]]];i=(j*=j)*j*(pn[B]*O+pn[B+1]*C+pn[B+2]*L)}return 32*(e+o+u+i)}function An(n,t,r,e){var o,u,i,a,f,c,d,l,s,h,v,p,g,m,y,A,M,E=(n+t+r+e)*cn,T=Math.floor(n+E),I=Math.floor(t+E),P=Math.floor(r+E),D=Math.floor(e+E),F=(T+I+P+D)*dn,O=n-(T-F),C=t-(I-F),L=r-(P-F),N=e-(D-F),b=0,_=0,w=0,R=0;O>C?b++:_++,O>L?b++:w++,O>N?b++:R++,C>L?_++:w++,C>N?_++:R++,L>N?w++:R++;var S=O-(c=b>=3?1:0)+dn,U=C-(d=_>=3?1:0)+dn,x=L-(l=w>=3?1:0)+dn,G=N-(s=R>=3?1:0)+dn,j=O-(h=b>=2?1:0)+2*dn,B=C-(v=_>=2?1:0)+2*dn,k=L-(p=w>=2?1:0)+2*dn,H=N-(g=R>=2?1:0)+2*dn,K=O-(m=b>=1?1:0)+3*dn,q=C-(y=_>=1?1:0)+3*dn,Y=L-(A=w>=1?1:0)+3*dn,z=N-(M=R>=1?1:0)+3*dn,Q=O-1+4*dn,X=C-1+4*dn,W=L-1+4*dn,V=N-1+4*dn,$=255&T,J=255&I,Z=255&P,nn=255&D,tn=.6-O*O-C*C-L*L-N*N;if(tn<0)o=0;else{var rn=sn[$+sn[J+sn[Z+sn[nn]]]]%32*4;o=(tn*=tn)*tn*(gn[rn]*O+gn[rn+1]*C+gn[rn+2]*L+gn[rn+3]*N)}var en=.6-S*S-U*U-x*x-G*G;if(en<0)u=0;else{var on=sn[$+c+sn[J+d+sn[Z+l+sn[nn+s]]]]%32*4;u=(en*=en)*en*(gn[on]*S+gn[on+1]*U+gn[on+2]*x+gn[on+3]*G)}var un=.6-j*j-B*B-k*k-H*H;if(un<0)i=0;else{var an=sn[$+h+sn[J+v+sn[Z+p+sn[nn+g]]]]%32*4;i=(un*=un)*un*(gn[an]*j+gn[an+1]*B+gn[an+2]*k+gn[an+3]*H)}var fn=.6-K*K-q*q-Y*Y-z*z;if(fn<0)a=0;else{var ln=sn[$+m+sn[J+y+sn[Z+A+sn[nn+M]]]]%32*4;a=(fn*=fn)*fn*(gn[ln]*K+gn[ln+1]*q+gn[ln+2]*Y+gn[ln+3]*z)}var hn=.6-Q*Q-X*X-W*W-V*V;if(hn<0)f=0;else{var vn=sn[$+1+sn[J+1+sn[Z+1+sn[nn+1]]]]%32*4;f=(hn*=hn)*hn*(gn[vn]*Q+gn[vn+1]*X+gn[vn+2]*W+gn[vn+3]*V)}return 27*(o+u+i+a+f)}function Mn(n,t,r,e){for(var o=[],u=0;u<t;u++)for(var i=0;i<n;i++){var a=i/n,f=u/t,c=Math.cos(2*a*Math.PI)*r/(2*Math.PI),d=Math.cos(2*f*Math.PI)*e/(2*Math.PI),l=Math.sin(2*a*Math.PI)*r/(2*Math.PI),s=Math.sin(2*f*Math.PI)*e/(2*Math.PI);o.push(An(c,d,l,s))}return o}function En(n,t){var r=X(n,t);return[n[0],n[1],n[2],-r]}function Tn(n,t,r){return En(In(n,t,r),n)}function In(n,t,r){return z(W(H(r,t),H(n,t)))}function Pn(n){var t=n,r=t[0],e=t[1],o=t[2],u=t[3];return[1-2*r*r,-2*r*e,-2*r*o,0,-2*r*e,1-2*e*e,-2*e*o,0,-2*r*o,-2*e*o,1-2*o*o,0,-2*r*u,-2*e*u,-2*o*u,1]}function Dn(n){return n*=.5,[0,Math.sin(n),0,Math.cos(n)]}function Fn(n){return n*=.5,[Math.sin(n),0,0,Math.cos(n)]}function On(n){return n*=.5,[0,0,Math.sin(n),Math.cos(n)]}function Cn(n){return Math.floor(Math.random()*n)}function Ln(n,t){return Cn(t-n)+n}function Nn(){return(Math.random()+Math.random()+Math.random())/3}function bn(n){function t(){n({width:window.innerWidth,height:window.innerHeight})}return window.addEventListener("resize",t),t(),function(){window.removeEventListener("resize",t)}}function _n(){var n={size:{width:0,height:0}},t=bn(function(t){return n.size=t});return{state:n,destroy:t}}function wn(n,t){var r=t||n,e=n.element,o=void 0===e?window:e,u={};function i(n){u[n.keyCode]=Date.now(),r(u)}function a(n){delete u[n.keyCode],r(u)}return o.addEventListener("keyup",a,!1),o.addEventListener("keydown",i,!1),r(u),function(){o.removeEventListener("keyup",a),o.removeEventListener("keydown",i)}}function Rn(n){var t={Keys:vn,state:{pressed:{}},destroy:function(){}};return t.destroy=wn(function(n){t.state.pressed=n},n),t}!function(n){n[n.CANCEL=3]="CANCEL",n[n.HELP=6]="HELP",n[n.BACK_SPACE=8]="BACK_SPACE",n[n.TAB=9]="TAB",n[n.CLEAR=12]="CLEAR",n[n.RETURN=13]="RETURN",n[n.ENTER=14]="ENTER",n[n.SHIFT=16]="SHIFT",n[n.CONTROL=17]="CONTROL",n[n.ALT=18]="ALT",n[n.PAUSE=19]="PAUSE",n[n.CAPS_LOCK=20]="CAPS_LOCK",n[n.ESCAPE=27]="ESCAPE",n[n.SPACE=32]="SPACE",n[n.PAGE_UP=33]="PAGE_UP",n[n.PAGE_DOWN=34]="PAGE_DOWN",n[n.END=35]="END",n[n.HOME=36]="HOME",n[n.LEFT=37]="LEFT",n[n.UP=38]="UP",n[n.RIGHT=39]="RIGHT",n[n.DOWN=40]="DOWN",n[n.PRINTSCREEN=44]="PRINTSCREEN",n[n.INSERT=45]="INSERT",n[n.DELETE=46]="DELETE",n[n.DIGIT_0=48]="DIGIT_0",n[n.DIGIT_1=49]="DIGIT_1",n[n.DIGIT_2=50]="DIGIT_2",n[n.DIGIT_3=51]="DIGIT_3",n[n.DIGIT_4=52]="DIGIT_4",n[n.DIGIT_5=53]="DIGIT_5",n[n.DIGIT_6=54]="DIGIT_6",n[n.DIGIT_7=55]="DIGIT_7",n[n.DIGIT_8=56]="DIGIT_8",n[n.DIGIT_9=57]="DIGIT_9",n[n.SEMICOLON=59]="SEMICOLON",n[n.EQUALS=61]="EQUALS",n[n.A=65]="A",n[n.B=66]="B",n[n.C=67]="C",n[n.D=68]="D",n[n.E=69]="E",n[n.F=70]="F",n[n.G=71]="G",n[n.H=72]="H",n[n.I=73]="I",n[n.J=74]="J",n[n.K=75]="K",n[n.L=76]="L",n[n.M=77]="M",n[n.N=78]="N",n[n.O=79]="O",n[n.P=80]="P",n[n.Q=81]="Q",n[n.R=82]="R",n[n.S=83]="S",n[n.T=84]="T",n[n.U=85]="U",n[n.V=86]="V",n[n.W=87]="W",n[n.X=88]="X",n[n.Y=89]="Y",n[n.Z=90]="Z",n[n.CONTEXT_MENU=93]="CONTEXT_MENU",n[n.NUMPAD0=96]="NUMPAD0",n[n.NUMPAD1=97]="NUMPAD1",n[n.NUMPAD2=98]="NUMPAD2",n[n.NUMPAD3=99]="NUMPAD3",n[n.NUMPAD4=100]="NUMPAD4",n[n.NUMPAD5=101]="NUMPAD5",n[n.NUMPAD6=102]="NUMPAD6",n[n.NUMPAD7=103]="NUMPAD7",n[n.NUMPAD8=104]="NUMPAD8",n[n.NUMPAD9=105]="NUMPAD9",n[n.MULTIPLY=106]="MULTIPLY",n[n.ADD=107]="ADD",n[n.SEPARATOR=108]="SEPARATOR",n[n.SUBTRACT=109]="SUBTRACT",n[n.DECIMAL=110]="DECIMAL",n[n.DIVIDE=111]="DIVIDE",n[n.F1=112]="F1",n[n.F2=113]="F2",n[n.F3=114]="F3",n[n.F4=115]="F4",n[n.F5=116]="F5",n[n.F6=117]="F6",n[n.F7=118]="F7",n[n.F8=119]="F8",n[n.F9=120]="F9",n[n.F10=121]="F10",n[n.F11=122]="F11",n[n.F12=123]="F12",n[n.F13=124]="F13",n[n.F14=125]="F14",n[n.F15=126]="F15",n[n.F16=127]="F16",n[n.F17=128]="F17",n[n.F18=129]="F18",n[n.F19=130]="F19",n[n.F20=131]="F20",n[n.F21=132]="F21",n[n.F22=133]="F22",n[n.F23=134]="F23",n[n.F24=135]="F24",n[n.NUM_LOCK=144]="NUM_LOCK",n[n.SCROLL_LOCK=145]="SCROLL_LOCK",n[n.COMMA=188]="COMMA",n[n.PERIOD=190]="PERIOD",n[n.SLASH=191]="SLASH",n[n.BACK_QUOTE=192]="BACK_QUOTE",n[n.OPEN_BRACKET=219]="OPEN_BRACKET",n[n.BACK_SLASH=220]="BACK_SLASH",n[n.CLOSE_BRACKET=221]="CLOSE_BRACKET",n[n.QUOTE=222]="QUOTE",n[n.META=224]="META"}(vn||(vn={}));var Sn={LEFT:0,MIDDLE:1,RIGHT:2};function Un(n,t){var r=t||n,e=n,o=e.element,u=void 0===o?document:o,i=e.enableRightButton,a={pressed:{},drag:{x:0,y:0,dX:0,dY:0},dragging:!1},f=0,c=0,d=0,l=0;function s(n){a.pressed[n.button]=n,n.button===Sn.LEFT&&(f=d=n.clientX,c=l=n.clientY,a.dragging=!0),r(a)}function h(n){delete a.pressed[n.button],delete a.drag.event,a.drag.x=0,a.drag.y=0,a.drag.dX=0,a.drag.dY=0,a.dragging=!1,r(a)}function v(n){a.dragging&&(a.drag.event=n,a.drag.x=f-n.clientX,a.drag.y=c-n.clientY,a.drag.dX=d-n.clientX,a.drag.dY=l-n.clientY,d=n.clientX,l=n.clientY,r(a))}function p(n){n.preventDefault()}return u.addEventListener("mousedown",s),document.addEventListener("mouseup",h),document.addEventListener("mousemove",v),i&&u.addEventListener("contextmenu",p),r(a),function(){u.removeEventListener("mousedown",s),document.removeEventListener("mousemove",v),document.removeEventListener("mouseup",h),i&&u.removeEventListener("contextmenu",p)}}function xn(n){void 0===n&&(n={});var t={Buttons:Sn,state:{},destroy:function(){}};return t.destroy=Un(n,function(n){t.state=n}),t}function Gn(n){var t,r=!0;return requestAnimationFrame(function e(o){r&&(n(o-(t||o)),t=o,requestAnimationFrame(e))}),function(){r=!1}}function jn(n){var t=!0;return requestAnimationFrame(function r(e){t&&(n(e),requestAnimationFrame(r))}),function(){t=!1}}function Bn(n){void 0===n&&(n=Gn);var t=[];function r(){for(var n in t)t[n].apply(null,arguments)}return{start:function(){this.stop=n(r)},stop:function(){},step:r,addUpdate:function(n){t.push(n)},removeUpdate:function(n){t=t.filter(function(t){return t!==n})}}}var kn=new Array(16);for(var Hn=[],Kn={},qn=0;qn<256;qn++)Hn[qn]=(qn+256).toString(16).substr(1),Kn[Hn[qn]]=qn;function Yn(){var n,t,r,e=function(){for(var n=0,t=void 0;n<16;n++)0==(3&n)&&(t=4294967296*Math.random(),kn[n]=t>>>((3&n)<<3)&255);return kn}();return e[6]=15&e[6]|64,e[8]=63&e[8]|128,r=0,(t=Hn)[(n=e)[r++]]+t[n[r++]]+t[n[r++]]+t[n[r++]]+"-"+t[n[r++]]+t[n[r++]]+"-"+t[n[r++]]+t[n[r++]]+"-"+t[n[r++]]+t[n[r++]]+"-"+t[n[r++]]+t[n[r++]]+t[n[r++]]+t[n[r++]]+t[n[r++]]+t[n[r++]]}function zn(n){return n[Cn(n.length)]}function Qn(n,t){for(var r=0;r<t;r++)n(r)}function Xn(n,t,r){void 0===r&&(r=[]);for(var e=0;e<t;e++)r[e]=n(e);return r}function Wn(n,t,r,e){void 0===e&&(e=[]);for(var o=Math.min(t.length,r.length),u=0;u<o;u++)e[u]=n(t[u],r[u]);return e}function Vn(n,t){void 0===t&&(t=[]);for(var r=0,e=n;r<e.length;r++)for(var o=e[r],u=t.length,i=0;i<o.length;i++)t[i+u]=o[i];return t}function $n(n,t,r){return void 0===r&&(r=[]),Vn(t.map(n),r)}function Jn(n){for(var t=[],r=0;r<n.length;r++){var e=Ln(r,n.length),o=void 0!==t[r]?t[r]:n[r];t[r]=void 0!==t[e]?t[e]:n[e],t[e]=o}return t}function Zn(n,t){if(Array.isArray(t))return t.map(n);var r={};for(var e in t)r[e]=n(t[e],e);return r}function nt(n,t){for(var r in t)n(t[r],r)}var tt=Object.assign||function(n){for(var t,r=1,e=arguments.length;r<e;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o]);return n};function rt(n,t){if("object"==typeof n&&"object"==typeof t&&!Array.isArray(n)&&!Array.isArray(t)&&n!==t){var r=tt({},n);for(var e in t){var o=n[e],u=t[e];void 0!==u?r[e]=rt(o,u):delete r[e]}return r}return t}function et(n,t,r){var e=r&&r.ignore;if("object"==typeof n&&"object"==typeof t&&!Array.isArray(n)&&!Array.isArray(t)&&n!==t){for(var o in n)if(n.hasOwnProperty(o)&&!(e&&o in e&&!0===e[o])){var u=n[o],i=t[o];void 0!==i&&(n[o]=et(u,i,{ignore:e&&e[o]}))}return n}return t}function ot(n){return function(t,r){return void 0!==r?n(t,r):function(r){return n(t,r)}}}function ut(n){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];return n.bind.apply(n,[null].concat(t))}var it=Object.assign||function(n){for(var t,r=1,e=arguments.length;r<e;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o]);return n},at=[0,0,0,255],ft=[255,255,255,255];function ct(n,t){var r=n[0],e=n[1],o=n[2],u=n[3],i=t[0],a=t[1],f=t[2],c=t[3]/255;return[Math.floor(C(c,r,i)),Math.floor(C(c,e,a)),Math.floor(C(c,o,f)),u]}function dt(n,t){return null==t&&(t=255),[n,n,n,t]}function lt(n){return"rgba("+n[0]+", "+n[1]+", "+n[2]+", "+n[3]/255+")"}function st(n){return n.map(function(n){return n/255})}function ht(n){return n.map(function(n){return Math.floor(255*n)})}function vt(n){return[(n=Math.floor(n))>>16&255,n>>8&255,255&n]}function pt(n){return"#"+((1<<24)+(n[0]<<16)+(n[1]<<8)+n[2]).toString(16).slice(1)}function gt(n){return 3===(n=n.replace(/^\s*#|\s*$/g,"")).length&&(n=n.replace(/(.)/g,"$1$1")),vt(parseInt(n,16))}function mt(n){var t=n[0],r=n[1],e=n[2],o=Math.max(t,r,e),u=Math.min(t,r,e),i=o-u,a=(o+u)/2,f=0,c=0;return f=0===i?0:o===t?(r-e)/i%6/6:o===r?((e-t)/i+2)/6:((t-r)/i+4)/6,c=0===i?0:i/(1-Math.abs(2*a-1)),{h:At(f),s:c,l:a}}function yt(n){var t,r,e,o=n.h,u=n.s,i=n.l,a=(1-Math.abs(2*i-1))*u,f=a*(1-Math.abs(6*o%2-1)),c=i-a/2;return o<1/6?(t=a,r=f,e=0):o<2/6?(t=f,r=a,e=0):o<.5?(t=0,r=a,e=f):o<4/6?(t=0,r=f,e=a):o<5/6?(t=f,r=0,e=a):(t=a,r=0,e=f),[t=L(0,1,t+c),r=L(0,1,r+c),e=L(0,1,e+c)]}function At(n){return n>=1?n-1:n<0?n+1:n}function Mt(n,t){return it({},n,{h:At(n.h+t)})}function Et(n,t){return it({},n,{s:L(0,1,n.s+t)})}function Tt(n,t){return it({},n,{l:L(0,1,n.l+t)})}function It(n){return Math.floor(127*(n+1))}function Pt(n,t,r){for(var e=r.canvas.width,o=r.canvas.height,u=Mn(e,o,n,t),i=Mn(e,o,2.1*n,2.1*t),a=Mn(e,o,4.2*n,4.2*t),f=Mn(e,o,8.3*n,8.3*t),c=r.getImageData(0,0,e,o),d=0;d<u.length-1;d++){var l=4*d;c.data[l]=It(u[d]),c.data[l+1]=It(i[d]),c.data[l+2]=It(a[d]),c.data[l+3]=It(f[d])}r.putImageData(c,0,0)}function Dt(n,t){var r=n[0],e=n[1],o=t.width,u=t.height;return r>=o&&(r-=o),e>=u&&(e-=u),r<0&&(r+=o),e<0&&(e+=u),[r,e]}function Ft(n,t){var r=n[0],e=n[1],o=t.width,u=t.height;return r<0&&(r=0),e<0&&(e=0),r>=o&&(r=o),e>=u&&(e=u),[r,e]}function Ot(n){function t(t,r){var e=n(r,t),o=e[0];return 4*(e[1]*t.height+o)}function r(n,r){var e=t(n,r);return[n.data[e],n.data[e+1],n.data[e+2],n.data[e+3]]}function e(n,r,e){var o=t(n,r);n.data[o]=e[0],n.data[o+1]=e[1],n.data[o+2]=e[2],n.data[o+3]=e[3]}return n=n||Ft,{getPixelIndex:t,getColorAt:r,setColorAt:e,increaseAllBy:function(n,t){for(var r=t[0],e=t[1],o=t[2],u=t[3],i=n.data,a=0;a<i.length;a+=4)i[a]+r<256&&(i[a]+=r),i[a+1]+e<256&&(i[a+1]+=e),i[a+2]+o<256&&(i[a+2]+=o),i[a+3]+u<256&&(i[a+3]+=u)},decreaseAllBy:function(n,t){for(var r=t[0],e=t[1],o=t[2],u=t[3],i=n.data,a=0;a<=i.length;a+=4)r<=i[a]&&(i[a]-=r),e<=i[a+1]&&(i[a+1]-=e),o<=i[a+2]&&(i[a+2]-=o),u<=i[a+3]&&(i[a+3]-=u)},mixinColor:function(n,t){for(var o=0;o<n.width;o++)for(var u=0;o<n.height;u++)e(n,[o,u],ct(r(n,[o,u]),t))},replaceWithImageDataAt:function(n,t,o){for(var u=o[0],i=o[1],a=t.width-1,f=t.height-1,c=0;c<f;c++)for(var d=0;d<a;d++)e(n,[u+d,i+c],r(t,[d,c]))},drawImageAt:function(n,t,o){for(var u=o[0],i=o[1],a=t.width-1,f=t.height-1,c=0;c<f;c++)for(var d=0;d<a;d++)e(n,[u+d,i+c],ct(r(n,[u+d,i+c]),r(t,[d,c])))}}}function Ct(n){var t=document.createElement("canvas");t.width=n.width,t.height=n.height;var r=t.getContext("2d");if(r)return r.drawImage(n,0,0,n.width,n.height),r.getImageData(0,0,n.width,n.height)}var Lt=function(n,t){return n-t},Nt=function(n,t){return n.localeCompare(t)},bt=function(){return function(n,t,r){this.parent=n,this.left=n,this.right=n,this.key=t,this.value=r}}(),_t=function(){var n={parent:null,left:null,right:null,key:null};return n.parent=n,n.left=n,n.right=n,n}();function wt(n,t,r){t!==n.nil&&(wt(n,t.left,r),r(t),wt(n,t.right,r))}function Rt(n,t){if(t.right!==n.nil)return Bt(n,t.right);for(var r=t.parent;r!==n.nil&&t===r.right;)t=r,r=r.parent;return r}function St(n,t){if(t.left!==n.nil)return kt(n,t.right);for(var r=t.parent;r!==n.nil&&t===r.left;)t=r,r=r.parent;return r}function Ut(n,t){for(var r=n.nil,e=n.root;e!==n.nil;)r=e,e=n.compare(t.key,e.key)<0?e.left:e.right;t.parent=r,r===n.nil?n.root=t:n.compare(t.key,r.key)<0?r.left=t:r.right=t}function xt(n,t,r){for(;t!==n.nil&&t.key!==r;)t=n.compare(r,t.key)<0?t.left:t.right;return t}function Gt(n,t,r){t.parent===n.nil?n.root=r:t===t.parent.left?t.parent.left=r:t.parent.right=r,r.parent=t.parent}function jt(n,t){if(t.left===n.nil)Gt(n,t,t.right);else if(t.right===n.nil)Gt(n,t,t.left);else{var r=Bt(n,t.right);r.parent!==t&&(Gt(n,r,r.right),r.right=t.right,r.right.parent=r),Gt(n,t,r),r.left=t.left,r.left.parent=r}}function Bt(n,t){for(;t!==n.nil&&t.left!==n.nil;)t=t.left;return t}function kt(n,t){for(;t.right!==n.nil;)t=t.right;return t}function Ht(n,t){var r=t.right;t.right=r.left,r.left!==n.nil&&(r.left.parent=t),r.parent=t.parent,t.parent===n.nil?n.root=r:t===t.parent.left?t.parent.left=r:t.parent.right=r,r.left=t,t.parent=r}function Kt(n,t){var r=t.left;t.left=r.right,r.right!==n.nil&&(r.right.parent=t),r.parent=t.parent,t.parent===n.nil?n.root=r:t===t.parent.right?t.parent.right=r:t.parent.left=r,r.right=t,t.parent=r}function qt(n,t,r){if(t&&t!==n.nil)for(;t!==n.nil;)r(t),t=t.parent}var Yt,zt=function(){function n(n,t){void 0===t&&(t=_t),this.count=0,this.compare=n,this.root=t,this.nil=t}return n.prototype.createNode=function(n,t){return new bt(this.nil,n,t)},n.prototype.insert=function(n,t){var r=this.createNode(n,t);return Ut(this,r),this.count++,r},n.prototype.getNode=function(n){return xt(this,this.root,n)},n.prototype.get=function(n){var t=this.getNode(n);return t===this.nil?t:t.value},n.prototype.keys=function(){var n=[];return wt(this,this.root,function(t){return n.push(t.key)}),n},n.prototype.min=function(){return Bt(this,this.root).key},n.prototype.max=function(){return kt(this,this.root).key},n.prototype.remove=function(n){var t=xt(this,this.root,n);t!==this.nil&&(jt(this,t),this.count--)},n.prototype.size=function(){return this.count},n}(),Qt=(Yt=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var r in t)t.hasOwnProperty(r)&&(n[r]=t[r])},function(n,t){function r(){this.constructor=n}Yt(n,t),n.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),Xt=Object.assign||function(n){for(var t,r=1,e=arguments.length;r<e;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o]);return n},Wt=function(n){function t(t,r,e){var o=n.call(this,t,r,e)||this;return o.red=!0,o}return Qt(t,n),t}(bt),Vt=Xt({},_t,{red:!1});function $t(n,t){for(;t.parent.red;){var r;if(t.parent===t.parent.parent.left)(r=t.parent.parent.right).red?(t.parent.red=!1,r.red=!1,t.parent.parent.red=!0,t=t.parent.parent):(t===t.parent.right&&Ht(n,t=t.parent),t.parent.red=!1,t.parent.parent.red=!0,Kt(n,t.parent.parent));else(r=t.parent.parent.left).red?(t.parent.red=!1,r.red=!1,t.parent.parent.red=!0,t=t.parent.parent):(t===t.parent.left&&Kt(n,t=t.parent),t.parent.red=!1,t.parent.parent.red=!0,Ht(n,t.parent.parent))}n.root.red=!1}function Jt(n,t){var r,e=t,o=t.red;if(t.left===n.nil?(r=t.right,Gt(n,t,t.right)):t.right===n.nil?(r=t.left,Gt(n,t,t.left)):(o=(e=Bt(n,t.right)).red,r=e.right,e.parent===t?r.parent=e:(Gt(n,e,e.right),e.right=t.right,e.right.parent=e),Gt(n,t,e),e.left=t.left,e.left.parent=e,e.red=t.red),!o){for(;r!==n.root&&!r.red;){var u;if(r===r.parent.left)(u=r.parent.right).red&&(u.red=!1,r.parent.red=!0,Ht(n,r.parent),u=r.parent.right),u.left.red||u.right.red?(u.right.red||(u.left.red=!1,u.red=!0,Kt(n,u),u=r.parent.right),u.red=r.parent.red,r.parent.red=!1,u.right.red=!1,Ht(n,r.parent),r=n.root):(u.red=!0,r=r.parent);else(u=r.parent.left).red&&(u.red=!1,r.parent.red=!0,Kt(n,r.parent),u=r.parent.left),u.left.red||u.right.red?(u.left.red||(u.right.red=!1,u.red=!0,Ht(n,u),u=r.parent.left),u.red=r.parent.red,r.parent.red=!1,u.left.red=!1,Kt(n,r.parent),r=n.root):(u.red=!0,r=r.parent)}r.red=!1}}var Zt=function(n){function t(t,r){return void 0===r&&(r=Vt),n.call(this,t,r)||this}return Qt(t,n),t.prototype.createNode=function(n,t){return new Wt(this.nil,n,t)},t.prototype.insert=function(n,t){var r=this.createNode(n,t);return Ut(this,r),$t(this,r),this.count++,r},t.prototype.remove=function(n){var t=xt(this,this.root,n);t!==this.nil&&(Jt(this,t),this.count--)},t}(zt);function nr(n){return Math.floor(n/2)}function tr(n){return 2*n+1}function rr(n){return 2*n}function er(n,t,r){var e=r[n];r[n]=r[t],r[t]=e}function or(n,t,r){var e=rr(r),o=tr(r),u=r;e<t.length&&n(t[u],t[e])<0&&(u=e),o<t.length&&n(t[u],t[o])<0&&(u=o),u!==r&&(er(r,u,t),or(n,t,u))}function ur(n,t){for(var r=Math.floor((t.length-1)/2);r>=0;r--)or(n,t,r)}function ir(n,t,r){if(t.push(r),t.length>1)for(var e=t.length-1,o=nr(e);e>0&&n(t[o],t[e])<0;)er(o,e,t),o=nr(e=o)}function ar(n){var t=[];return{size:function(){return t.length},fromArray:function(r){t=r.concat(),ur(n,t)},pull:function(){var r=t.shift();return or(n,t,0),r},getTop:function(){return t[0]},insert:function(r){return ir(n,t,r)}}}function fr(n,t,r,e){return Wn(ut(n,t),r,e)}var cr=ut(fr,C);function dr(n,t){var r=t[0],e=t[1],o=cr(n,r,e);return[[r,o],[o,e]]}function lr(n,t){return t.map(function(t){return k(n,t)})}function sr(n){return n.unshift(n.pop()),n}function hr(n){return n.push(n.shift()),n}function vr(n){return sr(n.concat())}function pr(n){return hr(n.concat())}function gr(n){return z(W(H(n[0],n[1]),H(n[2],n[1])))}function mr(n,t){return V(H(t,n[0]),H(n[1],n[0]))}function yr(n){return[n[0],n[1]]}function Ar(n){return[n[1],n[2]]}function Mr(n){return[n[2],n[3]]}function Er(n){return[n[3],n[0]]}function Tr(n,t){return n.concat(vr(t))}function Ir(n,t){return Tr(lr(n,t),t)}function Pr(n,t){return vr(Ir(n,t))}function Dr(n,t){return Tr(t,lr(n,t))}function Fr(n,t){return vr(Dr(n,t))}function Or(n,t,r){var e=r[0],o=r[1],u=r[2],i=r[3],a=cr(n,e,i),f=cr(t,o,u);return[[e,o,f,a],[a,f,u,i]]}function Cr(n,t,r){var e=r[0],o=r[1],u=r[2],i=r[3],a=cr(n,e,o),f=cr(t,i,u);return[[e,a,f,i],[a,o,u,f]]}var Lr=[[0,2,1],[0,3,2]];function Nr(n){return Vn(Xn(function(n){return Lr.map(function(t){return t.map(function(t){return 4*n+t})})},n))}r.d(t,"math",function(){return br}),r.d(t,"events",function(){return _r}),r.d(t,"utils",function(){return wr}),r.d(t,"fp",function(){return Rr}),r.d(t,"graphics",function(){return Sr}),r.d(t,"geometry",function(){return Ur}),r.d(t,"algorithms",function(){return xr}),r.d(t,"datastructures",function(){return Gr});var br={core:e,noise:a,coords:i,vectors:u,geometry:f,random:c},_r={dom:d,mouse:s,keyboard:l,animation:h},wr={uuid:v,seq:p,predicates:o,object:g},Rr={core:m},Sr={colors:y,pixels:M,textures:A},Ur={primitives:D,quad:F},xr={base:E},Gr={bintree:T,rbtree:I,heap:P};t.default={math:br,events:_r,utils:wr,graphics:Sr,fp:Rr,geometry:Ur,datastructures:Gr,algorithms:xr}}])});