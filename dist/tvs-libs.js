!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.tvsLibs=e():t.tvsLibs=e()}(this,function(){return function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=5)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.sign=function(t){return t>0?1:t<0?-1:0},e.lerp=function(t,e,n){return t+n*(e-t)},e.clamp=function(t,e,n){return Math.max(t,Math.min(n,e))},n.d(e,"DEG_TO_RAD_FACTOR",function(){return r}),e.degToRad=function(t){return t*r};var r=Math.PI/180},function(t,e,n){"use strict";function r(t,e){for(var n=[],r=0;r<e.length;r++)n[r]=e[r]*t;return n}function o(t,e){for(var n=[],r=0;r<e.length;r++)n[r]=e[r]/t;return n}function u(t){for(var e=0,n=0;n<t.length;n++){var r=t[n];e+=r*r}return Math.sqrt(e)}Object.defineProperty(e,"__esModule",{value:!0}),e.add=function(t,e){for(var n=[],r=0;r<t.length;r++)n[r]=t[r]+e[r];return n},e.sub=function(t,e){for(var n=[],r=0;r<t.length;r++)n[r]=t[r]-e[r];return n},e.mul=r,e.div=o,e.length=u,e.normalize=function(t){return o(u(t),t)},e.limit=function(t,e){var n=u(e);return t<n?r(t/n,e):e},e.dot=function(t,e){for(var n=0,r=0;r<t.length;r++)n+=t[r]+e[r];return n},e.cross=function(t,e){return[t[1]*e[2]-t[2]*e[1],t[2]*e[0]-t[0]*e[2],t[0]*e[1]-t[1]*e[0]]},n.d(e,"isEqual",function(){return i});var i=n(2).equalArray},function(t,e,n){"use strict";function r(t,e){if(t===e)return!0;if(!e)return!1;if(t.length!==e.length)return!1;for(var n=0;n<t.length;n++)if(t[n]!==e[n])return!1;return!0}Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"and",function(){return o}),n.d(e,"not",function(){return u}),n.d(e,"defined",function(){return i}),n.d(e,"notEmpty",function(){return a}),n.d(e,"unequal",function(){return c}),n.d(e,"equal",function(){return f}),e.equalArray=r,e.equalObject=function(t,e){if(t===e)return!0;if(!e)return!1;var n=Object.keys(t);if(!r(n,Object.keys(e)))return!1;for(var o=0,u=n;o<u.length;o++){var i=u[o];if(t[i]!==e[i])return!1}return!0};var o=function(t,e){return function(n,r){return t(n,r)&&e(n,r)}},u=function(t){return function(e,n){return!t(e,n)}},i=function(t){return null!=t},a=function(t){return t&&t.length},c=function(t,e){return t!==e},f=function(t,e){return t===e}},function(t,e,n){"use strict";function r(t,e){return 0==(1&t)?e:-e}function o(t,e,n,r){var o,u,i,a,c,f=(t+e+n+r)*l,s=Math.floor(t+f),d=Math.floor(e+f),h=Math.floor(n+f),E=Math.floor(r+f),A=(s+d+h+E)*v,m=t-(s-A),p=e-(d-A),O=n-(h-A),T=r-(E-A),I=0,_=0,g=0,D=0;m>p?I++:_++,m>O?I++:g++,m>T?I++:D++,p>O?_++:g++,p>T?_++:D++,O>T?g++:D++;var F,b,C,L,y,N,U,R,S,j,w,x,G=m-(F=I>=3?1:0)+v,B=p-(b=_>=3?1:0)+v,K=O-(C=g>=3?1:0)+v,H=T-(L=D>=3?1:0)+v,q=m-(y=I>=2?1:0)+2*v,k=p-(N=_>=2?1:0)+2*v,Q=O-(U=g>=2?1:0)+2*v,W=T-(R=D>=2?1:0)+2*v,z=m-(S=I>=1?1:0)+3*v,Y=p-(j=_>=1?1:0)+3*v,X=O-(w=g>=1?1:0)+3*v,V=T-(x=D>=1?1:0)+3*v,J=m-1+4*v,Z=p-1+4*v,$=O-1+4*v,tt=T-1+4*v,et=255&s,nt=255&d,rt=255&h,ot=255&E,ut=.6-m*m-p*p-O*O-T*T;if(ut<0)o=0;else{var it=M[et+M[nt+M[rt+M[ot]]]]%32*4;o=(ut*=ut)*ut*(P[it]*m+P[it+1]*p+P[it+2]*O+P[it+3]*T)}var at=.6-G*G-B*B-K*K-H*H;if(at<0)u=0;else{var ct=M[et+F+M[nt+b+M[rt+C+M[ot+L]]]]%32*4;u=(at*=at)*at*(P[ct]*G+P[ct+1]*B+P[ct+2]*K+P[ct+3]*H)}var ft=.6-q*q-k*k-Q*Q-W*W;if(ft<0)i=0;else{var st=M[et+y+M[nt+N+M[rt+U+M[ot+R]]]]%32*4;i=(ft*=ft)*ft*(P[st]*q+P[st+1]*k+P[st+2]*Q+P[st+3]*W)}var dt=.6-z*z-Y*Y-X*X-V*V;if(dt<0)a=0;else{var lt=M[et+S+M[nt+j+M[rt+w+M[ot+x]]]]%32*4;a=(dt*=dt)*dt*(P[lt]*z+P[lt+1]*Y+P[lt+2]*X+P[lt+3]*V)}var vt=.6-J*J-Z*Z-$*$-tt*tt;if(vt<0)c=0;else{var ht=M[et+1+M[nt+1+M[rt+1+M[ot+1]]]]%32*4;c=(vt*=vt)*vt*(P[ht]*J+P[ht+1]*Z+P[ht+2]*$+P[ht+3]*tt)}return 27*(o+u+i+a+c)}Object.defineProperty(e,"__esModule",{value:!0}),e.noise1d=function(t){var e,n,o;return n=~~t,e=255&n,t-=n,o=t*t*t*(t*(6*t-15)+10),Object(u.lerp)(r(i[e],t),r(i[e+1],t-1),o)},e.noise2d=function(t,e){var n,r,o=0,u=0,i=0,a=(t+e)*c,s=Math.floor(t+a),d=Math.floor(e+a),l=(s+d)*f,v=t-(s-l),h=e-(d-l);v>h?(n=1,r=0):(n=0,r=1);var P=v-n+f,m=h-r+f,p=v-1+2*f,O=h-1+2*f,T=255&s,I=255&d,_=.5-v*v-h*h;if(_>=0){var g=3*E[T+M[I]];o=(_*=_)*_*(A[g]*v+A[g+1]*h)}var D=.5-P*P-m*m;if(D>=0){var F=3*E[T+n+M[I+r]];u=(D*=D)*D*(A[F]*P+A[F+1]*m)}var b=.5-p*p-O*O;if(b>=0){var C=3*E[T+1+M[I+1]];i=(b*=b)*b*(A[C]*p+A[C+1]*O)}return 70*(o+u+i)},e.noise3d=function(t,e,n){var r,o,u,i,a,c,f,l,v,h,P=(t+e+n)*s,m=Math.floor(t+P),p=Math.floor(e+P),O=Math.floor(n+P),T=(m+p+O)*d,I=t-(m-T),_=e-(p-T),g=n-(O-T);I>=_?_>=g?(a=1,c=0,f=0,l=1,v=1,h=0):I>=g?(a=1,c=0,f=0,l=1,v=0,h=1):(a=0,c=0,f=1,l=1,v=0,h=1):_<g?(a=0,c=0,f=1,l=0,v=1,h=1):I<g?(a=0,c=1,f=0,l=0,v=1,h=1):(a=0,c=1,f=0,l=1,v=1,h=0);var D=I-a+d,F=_-c+d,b=g-f+d,C=I-l+2*d,L=_-v+2*d,y=g-h+2*d,N=I-1+3*d,U=_-1+3*d,R=g-1+3*d,S=255&m,j=255&p,w=255&O,x=.6-I*I-_*_-g*g;if(x<0)r=0;else{var G=3*E[S+M[j+M[w]]];r=(x*=x)*x*(A[G]*I+A[G+1]*_+A[G+2]*g)}var B=.6-D*D-F*F-b*b;if(B<0)o=0;else{var K=3*E[S+a+M[j+c+M[w+f]]];o=(B*=B)*B*(A[K]*D+A[K+1]*F+A[K+2]*b)}var H=.6-C*C-L*L-y*y;if(H<0)u=0;else{var q=3*E[S+l+M[j+v+M[w+h]]];u=(H*=H)*H*(A[q]*C+A[q+1]*L+A[q+2]*y)}var k=.6-N*N-U*U-R*R;if(k<0)i=0;else{var Q=3*E[S+1+M[j+1+M[w+1]]];i=(k*=k)*k*(A[Q]*N+A[Q+1]*U+A[Q+2]*R)}return 32*(r+o+u+i)},e.noise4d=o,e.tileNoise=function(t,e,n,r){for(var u=[],i=0;i<e;i++)for(var a=0;a<t;a++){var c=a/t,f=i/e,s=Math.cos(2*c*Math.PI)*n/(2*Math.PI),d=Math.cos(2*f*Math.PI)*r/(2*Math.PI),l=Math.sin(2*c*Math.PI)*n/(2*Math.PI),v=Math.sin(2*f*Math.PI)*r/(2*Math.PI);u.push(o(s,d,l,v))}return u};for(var u=n(0),i=[151,160,137,91,90,15,131,13,201,95,96,53,194,233,7,225,140,36,103,30,69,142,8,99,37,240,21,10,23,190,6,148,247,120,234,75,0,26,197,62,94,252,219,203,117,35,11,32,57,177,33,88,237,149,56,87,174,20,125,136,171,168,68,175,74,165,71,134,139,48,27,166,77,146,158,231,83,111,229,122,60,211,133,230,220,105,92,41,55,46,245,40,244,102,143,54,65,25,63,161,1,216,80,73,209,76,132,187,208,89,18,169,200,196,135,130,116,188,159,86,164,100,109,198,173,186,3,64,52,217,226,250,124,123,5,202,38,147,118,126,255,82,85,212,207,206,59,227,47,16,58,17,182,189,28,42,223,183,170,213,119,248,152,2,44,154,163,70,221,153,101,155,167,43,172,9,129,22,39,253,19,98,108,110,79,113,224,232,178,185,112,104,218,246,97,228,251,34,242,193,238,210,144,12,191,179,162,241,81,51,145,235,249,14,239,107,49,192,214,31,181,199,106,157,184,84,204,176,115,121,50,45,127,4,150,254,138,236,205,93,222,114,67,29,24,72,243,141,128,195,78,66,215,61,156,180],a=0;a<=256;a++)i[256+a]=i[a];for(var c=.5*(Math.sqrt(3)-1),f=(3-Math.sqrt(3))/6,s=1/3,d=1/6,l=(Math.sqrt(5)-1)/4,v=(5-Math.sqrt(5))/20,h=new Uint8Array(256),M=new Uint8Array(512),E=new Uint8Array(512),a=0;a<256;a++)h[a]=256*Math.random();for(a=0;a<512;a++)M[a]=h[255&a],E[a]=M[a]%12;var A=new Float32Array([1,1,0,-1,1,0,1,-1,0,-1,-1,0,1,0,1,-1,0,1,1,0,-1,-1,0,-1,0,1,1,0,-1,1,0,1,-1,0,-1,-1]),P=new Float32Array([0,1,1,1,0,1,1,-1,0,1,-1,1,0,1,-1,-1,0,-1,1,1,0,-1,1,-1,0,-1,-1,1,0,-1,-1,-1,1,0,1,1,1,0,1,-1,1,0,-1,1,1,0,-1,-1,-1,0,1,1,-1,0,1,-1,-1,0,-1,1,-1,0,-1,-1,1,1,0,1,1,1,0,-1,1,-1,0,1,1,-1,0,-1,-1,1,0,1,-1,1,0,-1,-1,-1,0,1,-1,-1,0,-1,1,1,1,0,1,1,-1,0,1,-1,1,0,1,-1,-1,0,-1,1,1,0,-1,1,-1,0,-1,-1,1,0,-1,-1,-1,0])},function(t,e,n){"use strict";function r(t){return[(t=Math.floor(t))>>16&255,t>>8&255,255&t]}Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"BLACK",function(){return u}),n.d(e,"WHITE",function(){return i}),e.mixColors=function(t,e){var n=t[0],r=t[1],u=t[2],i=t[3],a=e[0],c=e[1],f=e[2],s=e[3]/255;return[Math.floor(Object(o.lerp)(n,a,s)),Math.floor(Object(o.lerp)(r,c,s)),Math.floor(Object(o.lerp)(u,f,s)),i]},e.grey=function(t,e){return null==e&&(e=255),[t,t,t,e]},e.colorRgbaToCSS=function(t){return"rgba("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]/255+")"},e.intToFloat=function(t){return t.map(function(t){return t/255})},e.floatToInt=function(t){return t.map(function(t){return Math.floor(255*t)})},e.hexToRgb=r,e.hexStringToRgb=function(t){var e=t.split("#");return r(parseInt(e[e.length-1],16))};var o=n(0),u=[0,0,0,255],i=[255,255,255,255]},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"math",function(){return P}),n.d(e,"events",function(){return m}),n.d(e,"utils",function(){return p}),n.d(e,"fp",function(){return O}),n.d(e,"graphics",function(){return T});var r=n(0),o=n(6),u=n(3),i=n(1),a=n(7),c=n(8),f=n(9),s=n(10),d=n(11),l=n(12),v=n(13),h=n(2),M=n(15),E=n(4),A=n(16),P={core:r,noise:u,coords:o,vectors:i,geometry:a},m={dom:c,mouse:s,keyboard:f,animation:d},p={uuid:l,seq:v,predicates:h},O={core:M},T={colors:E,pixels:n(17),textures:A};e.default={math:P,events:m,utils:p,graphics:T,fp:O}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.cartesianToPolar2D=function(t){return[Object(r.length)(t),Math.atan2(t[1],t[0])]},e.polarToCartesian2D=function(t){var e=t[0],n=t[1];return[e*Math.cos(n),e*Math.sin(n)]};var r=n(1)},function(t,e,n){"use strict";function r(t,e){var n=Object(u.dot)(t,e);return[t[0],t[1],t[2],n]}function o(t,e,n){return Object(u.normalize)(Object(u.cross)(Object(u.sub)(n,e),Object(u.sub)(t,e)))}Object.defineProperty(e,"__esModule",{value:!0}),e.planeFromNormalAndCoplanarPoint=r,e.planeFromThreeCoplanarPoints=function(t,e,n){return r(o(t,e,n),t)},e.normalFromThreeCoplanarPoints=o,e.mirrorMatrixFromPlane=function(t){var e=t,n=e[0],r=e[1],o=e[2],u=e[3];return[1-2*n*n,-2*n*r,-2*n*o,0,-2*n*r,1-2*r*r,-2*r*o,0,-2*n*o,-2*r*o,1-2*o*o,0,-2*n*u,-2*r*u,-2*o*u,1]},e.getYawQuat=function(t){return t*=.5,[0,Math.sin(t),0,Math.cos(t)]},e.getPitchQuat=function(t){return t*=.5,[Math.sin(t),0,0,Math.cos(t)]},e.getRollQuat=function(t){return t*=.5,[0,0,Math.sin(t),Math.cos(t)]};var u=n(1)},function(t,e,n){"use strict";function r(t){function e(){t({width:window.innerWidth,height:window.innerHeight})}return window.addEventListener("resize",e),e(),function(){window.removeEventListener("resize",e)}}Object.defineProperty(e,"__esModule",{value:!0}),e.windowSize=r,e.windowSizeObserver=function(){var t={size:{width:0,height:0}},e=r(function(e){return t.size=e});return{state:t,destroy:e}}},function(t,e,n){"use strict";function r(t,e){function n(t){a[t.keyCode]=Date.now(),o(a)}function r(t){delete a[t.keyCode],o(a)}var o=e||t,u=t.element,i=void 0===u?window:u,a={};return i.addEventListener("keyup",r,!1),i.addEventListener("keydown",n,!1),o(a),function(){i.removeEventListener("keyup",r),i.removeEventListener("keydown",n)}}Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"Keys",function(){return o}),e.keyboard=r,e.keyboardObserver=function(t){var e={Keys:o,state:{pressed:{}},destroy:function(){}};return e.destroy=r(function(t){e.state.pressed=t},t),e};var o;!function(t){t[t.CANCEL=3]="CANCEL",t[t.HELP=6]="HELP",t[t.BACK_SPACE=8]="BACK_SPACE",t[t.TAB=9]="TAB",t[t.CLEAR=12]="CLEAR",t[t.RETURN=13]="RETURN",t[t.ENTER=14]="ENTER",t[t.SHIFT=16]="SHIFT",t[t.CONTROL=17]="CONTROL",t[t.ALT=18]="ALT",t[t.PAUSE=19]="PAUSE",t[t.CAPS_LOCK=20]="CAPS_LOCK",t[t.ESCAPE=27]="ESCAPE",t[t.SPACE=32]="SPACE",t[t.PAGE_UP=33]="PAGE_UP",t[t.PAGE_DOWN=34]="PAGE_DOWN",t[t.END=35]="END",t[t.HOME=36]="HOME",t[t.LEFT=37]="LEFT",t[t.UP=38]="UP",t[t.RIGHT=39]="RIGHT",t[t.DOWN=40]="DOWN",t[t.PRINTSCREEN=44]="PRINTSCREEN",t[t.INSERT=45]="INSERT",t[t.DELETE=46]="DELETE",t[t.DIGIT_0=48]="DIGIT_0",t[t.DIGIT_1=49]="DIGIT_1",t[t.DIGIT_2=50]="DIGIT_2",t[t.DIGIT_3=51]="DIGIT_3",t[t.DIGIT_4=52]="DIGIT_4",t[t.DIGIT_5=53]="DIGIT_5",t[t.DIGIT_6=54]="DIGIT_6",t[t.DIGIT_7=55]="DIGIT_7",t[t.DIGIT_8=56]="DIGIT_8",t[t.DIGIT_9=57]="DIGIT_9",t[t.SEMICOLON=59]="SEMICOLON",t[t.EQUALS=61]="EQUALS",t[t.A=65]="A",t[t.B=66]="B",t[t.C=67]="C",t[t.D=68]="D",t[t.E=69]="E",t[t.F=70]="F",t[t.G=71]="G",t[t.H=72]="H",t[t.I=73]="I",t[t.J=74]="J",t[t.K=75]="K",t[t.L=76]="L",t[t.M=77]="M",t[t.N=78]="N",t[t.O=79]="O",t[t.P=80]="P",t[t.Q=81]="Q",t[t.R=82]="R",t[t.S=83]="S",t[t.T=84]="T",t[t.U=85]="U",t[t.V=86]="V",t[t.W=87]="W",t[t.X=88]="X",t[t.Y=89]="Y",t[t.Z=90]="Z",t[t.CONTEXT_MENU=93]="CONTEXT_MENU",t[t.NUMPAD0=96]="NUMPAD0",t[t.NUMPAD1=97]="NUMPAD1",t[t.NUMPAD2=98]="NUMPAD2",t[t.NUMPAD3=99]="NUMPAD3",t[t.NUMPAD4=100]="NUMPAD4",t[t.NUMPAD5=101]="NUMPAD5",t[t.NUMPAD6=102]="NUMPAD6",t[t.NUMPAD7=103]="NUMPAD7",t[t.NUMPAD8=104]="NUMPAD8",t[t.NUMPAD9=105]="NUMPAD9",t[t.MULTIPLY=106]="MULTIPLY",t[t.ADD=107]="ADD",t[t.SEPARATOR=108]="SEPARATOR",t[t.SUBTRACT=109]="SUBTRACT",t[t.DECIMAL=110]="DECIMAL",t[t.DIVIDE=111]="DIVIDE",t[t.F1=112]="F1",t[t.F2=113]="F2",t[t.F3=114]="F3",t[t.F4=115]="F4",t[t.F5=116]="F5",t[t.F6=117]="F6",t[t.F7=118]="F7",t[t.F8=119]="F8",t[t.F9=120]="F9",t[t.F10=121]="F10",t[t.F11=122]="F11",t[t.F12=123]="F12",t[t.F13=124]="F13",t[t.F14=125]="F14",t[t.F15=126]="F15",t[t.F16=127]="F16",t[t.F17=128]="F17",t[t.F18=129]="F18",t[t.F19=130]="F19",t[t.F20=131]="F20",t[t.F21=132]="F21",t[t.F22=133]="F22",t[t.F23=134]="F23",t[t.F24=135]="F24",t[t.NUM_LOCK=144]="NUM_LOCK",t[t.SCROLL_LOCK=145]="SCROLL_LOCK",t[t.COMMA=188]="COMMA",t[t.PERIOD=190]="PERIOD",t[t.SLASH=191]="SLASH",t[t.BACK_QUOTE=192]="BACK_QUOTE",t[t.OPEN_BRACKET=219]="OPEN_BRACKET",t[t.BACK_SLASH=220]="BACK_SLASH",t[t.CLOSE_BRACKET=221]="CLOSE_BRACKET",t[t.QUOTE=222]="QUOTE",t[t.META=224]="META"}(o||(o={}))},function(t,e,n){"use strict";function r(t,e){function n(t){l.pressed[t.button]=t,t.button===o.LEFT&&(v=t.clientX,h=t.clientY,M=!0),a(l)}function r(t){delete l.pressed[t.button],delete l.drag.event,l.drag.x=0,l.drag.y=0,M=!1,a(l)}function u(t){M&&(l.drag.event=t,l.drag.x=v-t.clientX,l.drag.y=h-t.clientY,a(l))}function i(t){t.preventDefault()}var a=e||t,c=t,f=c.element,s=void 0===f?document:f,d=c.enableRightButton,l={pressed:{},drag:{x:0,y:0}},v=0,h=0,M=!1;return s.addEventListener("mousedown",n),document.addEventListener("mouseup",r),document.addEventListener("mousemove",u),d&&s.addEventListener("contextmenu",i),a(l),function(){s.removeEventListener("mousedown",n),document.removeEventListener("mousemove",u),document.removeEventListener("mouseup",r),d&&s.removeEventListener("contextmenu",i)}}Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"Buttons",function(){return o}),e.mouse=r,e.mouseObserver=function(t){void 0===t&&(t={});var e={Buttons:o,state:{},destroy:function(){}};return e.destroy=r(t,function(t){e.state=t}),e};var o={LEFT:0,MIDDLE:1,RIGHT:2}},function(t,e,n){"use strict";function r(t){function e(o){r&&(t(o-(n||o)),n=o,requestAnimationFrame(e))}var n,r=!0;return requestAnimationFrame(e),function(){r=!1}}Object.defineProperty(e,"__esModule",{value:!0}),e.animateWithTPF=r,e.animate=function(t){function e(r){n&&(t(r),requestAnimationFrame(e))}var n=!0;return requestAnimationFrame(e),function(){n=!1}},e.createAnimator=function(t){function e(){for(var t in n)n[t].apply(null,arguments)}void 0===t&&(t=r);var n=[];return{start:function(){this.stop=t(e)},stop:function(){},step:e,addUpdate:function(t){n.push(t)},removeUpdate:function(t){n=n.filter(function(e){return e!==t})}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.v4=function(){var t=function(){for(var t=0,e=void 0;t<16;t++)0==(3&t)&&(e=4294967296*Math.random(),r[t]=e>>>((3&t)<<3)&255);return r}();return t[6]=15&t[6]|64,t[8]=63&t[8]|128,function(t){var e=o,n=0;return e[t[n++]]+e[t[n++]]+e[t[n++]]+e[t[n++]]+"-"+e[t[n++]]+e[t[n++]]+"-"+e[t[n++]]+e[t[n++]]+"-"+e[t[n++]]+e[t[n++]]+"-"+e[t[n++]]+e[t[n++]]+e[t[n++]]+e[t[n++]]+e[t[n++]]+e[t[n++]]}(t)};for(var r=new Array(16),o=[],u={},i=0;i<256;i++)o[i]=(i+256).toString(16).substr(1),u[o[i]]=i},function(t,e,n){"use strict";function r(t){for(var e=[],n=0,r=t;n<r.length;n++)for(var o=0,u=r[n];o<u.length;o++){var i=u[o];e.push(i)}return e}Object.defineProperty(e,"__esModule",{value:!0}),e.pickRandom=function(t){return t[Object(o.a)(t.length)]},e.doTimes=function(t,e){for(var n=0;n<e;n++)t(n)},e.times=function(t,e){for(var n=[],r=0;r<e;r++)n.push(t(r));return n},e.zip=function(t,e,n){for(var r=Math.min(e.length,n.length),o=[],u=0;u<r;u++)o.push(t(e[u],n[u]));return o},e.flatten=r,e.mapcat=function(t,e){return r(e.map(t))},e.shuffle=function(t){for(var e=[],n=0;n<t.length;n++){var r=Object(o.b)(n,t.length),u=void 0!==e[n]?e[n]:t[n];e[n]=void 0!==e[r]?e[r]:t[r],e[r]=u}return e};var o=n(14)},function(t,e,n){"use strict";function r(t){return Math.floor(Math.random()*t)}e.a=r,e.b=function(t,e){return r(e-t)+t}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.curry=function(t){return function(e,n){return void 0!==n?t(e,n):function(n){return t(e,n)}}},e.partial=function(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return t.bind.apply(t,[null].concat(e))}},function(t,e,n){"use strict";function r(t){return Math.floor(127*(t+1))}Object.defineProperty(e,"__esModule",{value:!0}),e.drawTileNoiseTexture=function(t,e,n){for(var u=n.canvas.width,i=n.canvas.height,a=Object(o.tileNoise)(u,i,t,e),c=Object(o.tileNoise)(u,i,2.1*t,2.1*e),f=Object(o.tileNoise)(u,i,4.2*t,4.2*e),s=Object(o.tileNoise)(u,i,8.3*t,8.3*e),d=n.getImageData(0,0,u,i),l=0;l<a.length-1;l++){var v=4*l;d.data[v]=r(a[l]),d.data[v+1]=r(c[l]),d.data[v+2]=r(f[l]),d.data[v+3]=r(s[l])}n.putImageData(d,0,0)};var o=n(3)},function(t,e,n){"use strict";function r(t,e){var n=t[0],r=t[1],o=e.width,u=e.height;return n<0&&(n=0),r<0&&(r=0),n>=o&&(n=o),r>=u&&(r=u),[n,r]}Object.defineProperty(e,"__esModule",{value:!0}),e.repeatedPosition=function(t,e){var n=t[0],r=t[1],o=e.width,u=e.height;return n>=o&&(n-=o),r>=u&&(r-=u),n<0&&(n+=o),r<0&&(r+=u),[n,r]},e.closedPosition=r,e.createPixelContext=function(t){function e(e,n){var r=t(n,e),o=r[0];return 4*(r[1]*e.height+o)}function n(t,n){var r=e(t,n);return[t.data[r],t.data[r+1],t.data[r+2],t.data[r+3]]}function u(t,n,r){var o=e(t,n);t.data[o]=r[0],t.data[o+1]=r[1],t.data[o+2]=r[2],t.data[o+3]=r[3]}return t=t||r,{getPixelIndex:e,getColorAt:n,setColorAt:u,increaseAllBy:function(t,e){for(var n=e[0],r=e[1],o=e[2],u=e[3],i=t.data,a=0;a<i.length;a+=4)i[a]+n<256&&(i[a]+=n),i[a+1]+r<256&&(i[a+1]+=r),i[a+2]+o<256&&(i[a+2]+=o),i[a+3]+u<256&&(i[a+3]+=u)},decreaseAllBy:function(t,e){for(var n=e[0],r=e[1],o=e[2],u=e[3],i=t.data,a=0;a<=i.length;a+=4)n<=i[a]&&(i[a]-=n),r<=i[a+1]&&(i[a+1]-=r),o<=i[a+2]&&(i[a+2]-=o),u<=i[a+3]&&(i[a+3]-=u)},mixinColor:function(t,e){for(var r=0;r<t.width;r++)for(var i=0;r<t.height;i++)u(t,[r,i],Object(o.mixColors)(n(t,[r,i]),e))},replaceWithImageDataAt:function(t,e,r){for(var o=r[0],i=r[1],a=e.width-1,c=e.height-1,f=0;f<c;f++)for(var s=0;s<a;s++)u(t,[o+s,i+f],n(e,[s,f]))},drawImageAt:function(t,e,r){for(var i=r[0],a=r[1],c=e.width-1,f=e.height-1,s=0;s<f;s++)for(var d=0;d<c;d++)u(t,[i+d,a+s],Object(o.mixColors)(n(t,[i+d,a+s]),n(e,[d,s])))}}},e.createImgDataFromImage=function(t){var e=document.createElement("canvas");e.width=t.width,e.height=t.height;var n=e.getContext("2d");if(n)return n.drawImage(t,0,0,t.width,t.height),n.getImageData(0,0,t.width,t.height)};var o=n(4)}])});