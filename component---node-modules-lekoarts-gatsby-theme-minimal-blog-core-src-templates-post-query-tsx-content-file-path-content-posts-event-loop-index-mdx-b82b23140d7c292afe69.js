"use strict";(self.webpackChunktask11_github_io=self.webpackChunktask11_github_io||[]).push([[267],{4765:function(e,t,n){n.d(t,{F:function(){return p},Z:function(){return d}});var l=n(7294),a=n(8733),c=n(795),r=n(6920),o=n(6799),i=n(8871);var m=e=>{let{post:t}=e;return null};const s=["16px","8px","4px"].map((e=>"rgba(0, 0, 0, 0.1) 0px "+e+" "+e+" 0px"));var u=e=>{let{data:{post:t},children:n}=e;return(0,a.tZ)(r.Z,null,(0,a.tZ)(c.X6,{as:"h1",variant:"styles.h1"},t.title),(0,a.tZ)("p",{sx:{color:"secondary",mt:3,a:{color:"secondary"},fontSize:[1,1,2]}},(0,a.tZ)("time",null,t.date),t.tags&&(0,a.tZ)(l.Fragment,null," — ",(0,a.tZ)(o.Z,{tags:t.tags})),t.timeToRead&&" — ",t.timeToRead&&(0,a.tZ)("span",null,t.timeToRead," min read")),(0,a.tZ)("section",{sx:{my:5,".gatsby-resp-image-wrapper":{my:[4,4,5],borderRadius:"4px",boxShadow:s.join(", "),".gatsby-resp-image-image":{borderRadius:"4px"}},variant:"layout.content"}},n),(0,a.tZ)(m,{post:t}))};const p=e=>{var t,n,l;let{data:{post:c}}=e;return(0,a.tZ)(i.Z,{title:c.title,description:c.description?c.description:c.excerpt,image:c.banner?null===(t=c.banner)||void 0===t||null===(n=t.childImageSharp)||void 0===n||null===(l=n.resize)||void 0===l?void 0:l.src:void 0,pathname:c.slug,canonicalUrl:c.canonicalUrl})};function d(e){let{...t}=e;return l.createElement(u,t)}},6799:function(e,t,n){var l=n(8733),a=n(7294),c=n(1883),r=n(3494),o=n(9706);t.Z=e=>{let{tags:t}=e;const{tagsPath:n,basePath:i}=(0,r.Z)();return(0,l.tZ)(a.Fragment,null,t.map(((e,t)=>(0,l.tZ)(a.Fragment,{key:e.slug},!!t&&", ",(0,l.tZ)(c.Link,{sx:e=>{var t;return{...null===(t=e.styles)||void 0===t?void 0:t.a}},to:(0,o.Z)("/"+i+"/"+n+"/"+e.slug)},e.name)))))}},8871:function(e,t,n){var l=n(7294),a=n(1883),c=n(4232);t.Z=e=>{let{title:t="",description:n="",pathname:r="",image:o="",children:i=null,canonicalUrl:m=""}=e;const s=(0,c.Z)(),{siteTitle:u,siteTitleAlt:p,siteUrl:d,siteDescription:g,siteImage:E,author:b,siteLanguage:A}=s,k={title:t?t+" | "+u:p,description:n||g,url:""+d+(r||""),image:""+d+(o||E)};return l.createElement(l.Fragment,null,l.createElement("html",{lang:A}),l.createElement("title",null,k.title),l.createElement("meta",{name:"description",content:k.description}),l.createElement("meta",{name:"image",content:k.image}),l.createElement("meta",{property:"og:title",content:k.title}),l.createElement("meta",{property:"og:url",content:k.url}),l.createElement("meta",{property:"og:description",content:k.description}),l.createElement("meta",{property:"og:image",content:k.image}),l.createElement("meta",{property:"og:type",content:"website"}),l.createElement("meta",{property:"og:image:alt",content:k.description}),l.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),l.createElement("meta",{name:"twitter:title",content:k.title}),l.createElement("meta",{name:"twitter:url",content:k.url}),l.createElement("meta",{name:"twitter:description",content:k.description}),l.createElement("meta",{name:"twitter:image",content:k.image}),l.createElement("meta",{name:"twitter:image:alt",content:k.description}),l.createElement("meta",{name:"twitter:creator",content:b}),l.createElement("meta",{name:"gatsby-theme",content:"@lekoarts/gatsby-theme-minimal-blog"}),l.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:(0,a.withPrefix)("/favicon-32x32.png")}),l.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:(0,a.withPrefix)("/favicon-16x16.png")}),l.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:(0,a.withPrefix)("/apple-touch-icon.png")}),m?l.createElement("link",{rel:"canonical",href:m}):null,i)}},1507:function(e,t,n){n.r(t),n.d(t,{Head:function(){return o.F},default:function(){return i}});var l=n(7294),a=n(1151);function c(e){const t=Object.assign({blockquote:"blockquote",p:"p",h1:"h1",hr:"hr",code:"code",strong:"strong",span:"span",a:"a",h2:"h2",ul:"ul",li:"li",img:"img",ol:"ol"},(0,a.ah)(),e.components);return l.createElement(l.Fragment,null,l.createElement(t.blockquote,null,"\n",l.createElement(t.p,null,"💡 이 포스팅은 자바스크립트의 이벤트 루프에대해 공부하며 정리한 내용입니다. 혹여나 일부 올바르지 않은 정보가 있을 시에 지적해주시면 정정토록하겠습니다."),"\n"),"\n",l.createElement(t.h1,null,"개요 🛫"),"\n",l.createElement(t.blockquote,null,"\n",l.createElement(t.p,null,"이벤트 루프에대해 공부하고 정리합니다."),"\n"),"\n",l.createElement(t.p,null,"이번 포스팅에서는 브라우저의 싱글 스레드 동작이 정확히 어떻게 이루어지는지 이해하고. 이벤트 루프, 콜 스택, 테스크 큐 등 자바스크립트가 코드를 처리하는 동작들에대해 정리해봅니다."),"\n",l.createElement(t.hr),"\n",l.createElement(t.h1,null,"Event Loop ➰"),"\n",l.createElement(t.blockquote,null,"\n",l.createElement(t.p,null,l.createElement(t.code,null,"이벤트 루프(event loop)"),"는 task가 들어오길 기다렸다가 태스크가 들어오면 이를 처리하고, 처리할 task가 없는 경우엔 잠드는, 끊임없이 돌아가는 자바스크립트 내 루프이다."),"\n"),"\n",l.createElement(t.p,null,"위 정의만 보면 프로그램의 task가 어디로 들어가서 어떻게 처리된다는건지 이해하기가 힘들다."),"\n",l.createElement(t.p,null,l.createElement(t.strong,null,"이벤트 루프"),"를 이해하기 위해서는 자바스크립트라는 코드가 어떻게 동작되는지부터 이해해야한다."),"\n",l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 960px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 75%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAYAAADkmO9VAAAACXBIWXMAAAsTAAALEwEAmpwYAAAClUlEQVR42pWTS2/TQBSF/e9gwYYtLBBC3RZWqCwQqgSLLhALKH+ATRdlAUKtkNqEPGzn4TiNnaZJStOitmqc2G7iR+I49hx0J4mbglgw0tXMXI++Odf3jID/GIyxW+vFluY4ZjwnhGGI6+vrpRjAtgd8Xs7TuRvQAhwDjPJRcpFQLBYhiiJqtRpUVUVVVaDVynym/cHBAQqFAsrl8gwRx4SFPWT4eepAb1zh5MxBt8/gj2IIpVIJQRAkN8TWBrraHUT2ZpKLoigBLsardz7uPRni4TMXD1Zd3H00xJ4YQqCDjjNMDp6p9/FxXcBJ5fFcUQTf91GpVGCaJq+kZ1xi69sUaxseXr/38eaDj5dvfVQPpzOg67oJMLC24Px6jnDw5SYXBFwhlTseUzVTbH4aY2XNxeq6h6frHlZeuJDVEALd3O/3YBhdnF+cw/UmM8iE4fj4GJ1OB47jcIXLI1sK8Xk3wNe9CY/tnQCn5xEERVHwI5NBXi5DVzVI+TxGIw/FYoGXp2kaMplMArzd5b+HIEki9tIZNK6A78M0duUdWD0b9Xr9Rk02C2reshejmCGKbkdMPhTzeUiKAlxcwm4UUGrUYPVMVKtV9Hr0Kwyk02lGlcx4MyL7Q+ZCuUAelIsF+JYHeCH0+iH6/T4HEmwOpKawhQ8XsOl0yvdkqwSYy4tQyiJyFcD2gLo+A5GpySYET6VSjMxtmiYzDIPNXw2j73S22+1yayUvhf7R0VEDrWYTsixzm9BMVqEgICnudDpM0zRGilqtFmu326zZbHI36LrOBfAuUxcpUqkUf2bUXUmSsL+/z3O5XI4DHcdhlmVxIKmloAosy+JKSaVA/4EW4/GYB63J6KPRiCuloFxEbVzqwb9s8xt8yU0IhX/96QAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="Event loop"\n        title=""\n        src="/static/cf0005dd914581649c924601818d9660/7d769/event_loop.png"\n        srcset="/static/cf0005dd914581649c924601818d9660/5243c/event_loop.png 240w,\n/static/cf0005dd914581649c924601818d9660/ab158/event_loop.png 480w,\n/static/cf0005dd914581649c924601818d9660/7d769/event_loop.png 960w,\n/static/cf0005dd914581649c924601818d9660/f1720/event_loop.png 1024w"\n        sizes="(max-width: 960px) 100vw, 960px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>'}}),"\n",l.createElement(t.blockquote,null,"\n",l.createElement(t.p,null,"이미지 출처: ",l.createElement(t.a,{href:"https://blog.sessionstack.com/how-does-javascript-actually-work-part-1-b0bacc073cf"},"https://blog.sessionstack.com/how-does-javascript-actually-work-part-1-b0bacc073cf")),"\n"),"\n",l.createElement(t.p,null,"위 이미지를 참고로하여 정리해보겠다."),"\n",l.createElement(t.h2,null,"Javascript Engine"),"\n",l.createElement(t.blockquote,null,"\n",l.createElement(t.p,null,"자바스크립트 엔진은 ",l.createElement(t.code,null,"Call Stack"),"과 ",l.createElement(t.code,null,"Memory Heap"),"으로 구성되어있다."),"\n"),"\n",l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 536px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 117.5%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAYCAIAAAB1KUohAAAACXBIWXMAAAsTAAALEwEAmpwYAAADWklEQVR42o2SS3PaVhzF2XXZbDppZjKdLDrTR75EP0Y/Q5fddtNVu2h3LnXQeBDGLxiMY1u2RUECxEugOG5jXNcgHMcWQsIYCfyQ9bjSvyOJYEy8yG/u3M25R+f+j27g+PiYZdnaA1Qn1jQsy7bb7UAwGEwkEplMJnUHmfqLTqWLqXRhtFLpO40kaZrGcXxxcTEQiUQURQEAx3HAxd9lgBrAa4BX3tLGkn+s1WrF4/EAjuMXFxcAgBCybdtGpg2g9/4c7j9SD55Ju18M9h8jrW4D2MhydYQAoNlsuubpZMfVkBoaHnyG/fbN7z9/LXJPwTr0JHs6+UGzM8SY1Sd//Pr8l5++Lb98BnDofLwZqTP/UZ+clD8/pB+f730KxsFHJfu7rfO2lnQ0Am430dW6g4YPFzY2m6ZpeSBkIWRPVm9alu5hmqZhGPfaHgwGqqryPH92diaKoiAIzWbDNHUA23EsANA0rdlsCoLA87wsywDA8/woud/vMwwTi8WSyWQikVhNri4tLbVaLS8VqtUqhmG4RzgcDoVCmUxmZI7FYizLLi8vd2Xp9N3b03envXavcdR4EXrhz4JhmKIo/u1UVdU0LZFIZLPZ9fX1QDweLxSKZYautGFpFxBcZy/zqq5G8SgAGIYRiUTuirTdwlOpFEVRGxsbrrlYLDE56mQA/5zC8W3jy9JXb5T92HxsbHYcxysSmaYJACRJTpqLVIZyPyx37VJFs250y8Bx3DfPz8/3+31RFCVJEkVRVVWCIGiaHl3bNafT7oSlGvzwI1jIRAgPh8fJiqLIstztdiVJGg6HW1tbFEVNmClqPJLf0zjZ/x2SJMmy3Ol0BoPBtJmmXXNPQab1gHkqmSCISXMpm83cGvDd9xfVPR3Aubm5nZy51+uJotjpdNrttqIom5ub92b2kxsn9o02eo+TybquX11dXV9fX15eIoR2dnZGba+srHAcNzc39/fe3r/12uvdGse9YhgGwzAAsCwrGAxuvYcgCJIkQ6FQoVBYW1tzn6eqqkdHR5VKhWVr1WqN47hyuXJ+fu6XJwhCuVzmOK5W86XyWw/3ec7MzESj0Vwul5+AYZjt7e2XHiRJ5vP53AT5fH52dnZhYSEgCMK+x5v71Ov1A48PJf+8LMv/A5PYq2sB6e8fAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="Javascript engine"\n        title=""\n        src="/static/49fed1be6d62db53e7e530602ec9f15a/56468/js_engine.png"\n        srcset="/static/49fed1be6d62db53e7e530602ec9f15a/5243c/js_engine.png 240w,\n/static/49fed1be6d62db53e7e530602ec9f15a/ab158/js_engine.png 480w,\n/static/49fed1be6d62db53e7e530602ec9f15a/56468/js_engine.png 536w"\n        sizes="(max-width: 536px) 100vw, 536px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>'}}),"\n",l.createElement(t.p,null,"구글의 V8 Engine과 같은 ",l.createElement(t.strong,null,"자바스크립트 엔진"),"은 ",l.createElement(t.code,null,"Call Stack"),"과 ",l.createElement(t.code,null,"Memory Heap"),"으로 구성되어있다."),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,l.createElement(t.strong,null,"Memory Heap")," : 변수, 함수등이 담기고 메모리가 할당되는 공간."),"\n",l.createElement(t.li,null,l.createElement(t.strong,null,"Call Stack")," : ",l.createElement(t.code,null,"Task"),"들이 쌓이는 Stack"),"\n"),"\n",l.createElement(t.p,null,"자바스크립트는 한 번에 하나의 작업만 처리하는 ",l.createElement(t.code,null,"싱글 스레드 언어"),"이다."),"\n",l.createElement(t.p,null,"이것은 하나의 ",l.createElement(t.code,null,"Call Stack"),"을 가졌다는 의미이기도 한데, 엔진은 이벤트 루프를 통해 ",l.createElement(t.code,null,"동시성"),"을 지원할 수 있는 것이다."),"\n",l.createElement(t.h2,null,"Web APIs"),"\n",l.createElement(t.blockquote,null,"\n",l.createElement(t.p,null,"Web APIs는 자바스크립트 엔진과 별도로 존재한다. (브라우저 지원)"),"\n"),"\n",l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 896px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 55.41666666666667%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAABYlAAAWJQFJUiTwAAACIklEQVR42oWSS2gTURiFB9y7c+falejG4qNYkYpYWlstKkiRKoLgo2rV+upD1FpaHyClKhFtcaHVlUu7LVnFCqalTSDxkaRtMpMmk6Rpmsx0Zj65d1JoxOKBw3/PD/dw//9chb/gOI6kgGU7WBYYpkU0NkckMktyIU0o9BNNS2HbsLLiSFqWe09hHdhl01Uktd/EokFy2ThJ9RfZzPw/7ylrX7ZaxcsEPn8pcLNXp28wxzPPMk89RQZeLDHwcpn+oSV6n2fpG8zS2Z9haGQRw3RQhIFt2xU0TVsatnWl2bA5yrbaOHuPJNhZH2d3Q4Kqujg7DomeSlVdgo1bZqluUiks2+uPLOD1lXj1bpGRT3mGR/O8Hc1XnIc/uvr1+7ycRuxSyeVyhEIhwuEwkUiEsbExYrE5afjmwyJnr6W43K1z4U6aqz0652+npW6/p9PWmZb9cx1pep5kKBYdFE3TGB8fx+v14vP58Hg8TM8EpWH3Y51dDQkOntTYf0ylrkWj9oRK0+kkja1J6k9pHG5NUntcpeXSAkuF/4w8r1r4pw0mAwZTAYPJGYOpoCF7/pmyDrjnHxET2y6HYlmWDENUV7spix2daU9x61GG6/fdMQU7Hrq88UCX/Yt3xchZSkbZcO1nFlUsV+BKt86mrbPsa1bZ05iQFCsQ6Yq0qxsT1BxV2X4gTk3zOimvNY/OrfD1e4lvk0YFJ/wlJvyVOhg25f/9A99W9DbY/YgNAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="Web APIs"\n        title=""\n        src="/static/4fd09f83d7b472a1af1e2093758db01a/1c68e/web_apis.png"\n        srcset="/static/4fd09f83d7b472a1af1e2093758db01a/5243c/web_apis.png 240w,\n/static/4fd09f83d7b472a1af1e2093758db01a/ab158/web_apis.png 480w,\n/static/4fd09f83d7b472a1af1e2093758db01a/1c68e/web_apis.png 896w"\n        sizes="(max-width: 896px) 100vw, 896px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>'}}),"\n",l.createElement(t.p,null,l.createElement(t.strong,null,"Web APIs")," 는 브라우저에서 지원하는 API의 집합이다.\n흔히 사용하는 ",l.createElement(t.code,null,"Ajax"),", ",l.createElement(t.code,null,"Fetch"),", ",l.createElement(t.code,null,"setTimeout")," 등이 그것이다."),"\n",l.createElement(t.p,null,l.createElement(t.code,null,"Call Stack"),"에서 실행된 비동기 함수는 Web API를 호출하고, Web API는 콜백함수를 ",l.createElement(t.code,null,"콜백 큐"),"에 보관한다."),"\n",l.createElement(t.h2,null,"Callback Queue (=== Event === Macrotask)"),"\n",l.createElement(t.blockquote,null,"\n",l.createElement(t.p,null,"Callback Queue, Event Queue, Macrotask Queue 등으로 불린다. Queue 자료구조로 구현되어있다."),"\n"),"\n",l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 598px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 49.16666666666667%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAABYlAAAWJQFJUiTwAAABXElEQVR42rVSyYrCQBT0//9Do3hREYIgSE6SgytxQURN3HdNVNxrqBpaZu4zgeItXe91pZIYALzfb5gYhiHu9zt2ux0ulwuezyfO5zNut5vOXq8XHo+H+oSZMztiPwsSXddFqVRCNptFLpdDoVCA4zjo9XrI5/M6Y10sFtHv9zXHS8yez0IDqjocDlJFRfv9XjlVL5dLHI9Hgf3r9fpLoRbij59YFEXwfR/j8RiTyUQxCAKpYByNRgI5g8EA6/VaStkzfJ7NZrNvhTTf8zyhUqmg2Wyi1Wphs9nIN/bb7TY6nQ4ajYYGuYz9Wq2mSD791EIqodGpVAqZTAbxeBzlcln+kWxZFmzbRiKRUE6Fw+EQ6XRaM4zJZFJL9cpUyJupjGDORdvtFt1uV3W9Xheq1epHIWszw5xvI4Wn00lekGgwnU5Bb1erFRaLhTwj5vO5/gDaQQ5rw+f5v3zlL2u85oS1fL41AAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="Callback Queue"\n        title=""\n        src="/static/08791876ff39699d37bb4f4d5c904e21/89d5f/callback_queue.png"\n        srcset="/static/08791876ff39699d37bb4f4d5c904e21/5243c/callback_queue.png 240w,\n/static/08791876ff39699d37bb4f4d5c904e21/ab158/callback_queue.png 480w,\n/static/08791876ff39699d37bb4f4d5c904e21/89d5f/callback_queue.png 598w"\n        sizes="(max-width: 598px) 100vw, 598px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>'}}),"\n",l.createElement(t.p,null,l.createElement(t.strong,null,"Callback Queue"),"는 비동기적으로 실행되는 콜백함수가 보관되는 영역이다."),"\n",l.createElement(t.p,null,l.createElement(t.code,null,"Web APIs"),"에서 호출되는 비동기 함수들은 ",l.createElement(t.code,null,"Callback Queue"),"에 보관된다. (ex ",l.createElement(t.code,null,"setTimeout(cb, 0)"),", ",l.createElement(t.code,null,"addEventListener('onClick', cb)"),")"),"\n",l.createElement(t.h2,null,"Job Queue (=== Microtask)"),"\n",l.createElement(t.blockquote,null,"\n",l.createElement(t.p,null,"Job Queue, Microtask Queue 등으로 불린다."),"\n"),"\n",l.createElement(t.p,null,"위 그림에는 나와있지 않지만. ECMA 2015에서 나온 ",l.createElement(t.strong,null,"Job Queue"),"라는 영역도 존재한다."),"\n",l.createElement(t.p,null,"이것은 ",l.createElement(t.code,null,"Callback Queue"),"와 동일한 역할을 하지만, Promise에 의해 사용된다는 차이점이 있다."),"\n",l.createElement(t.p,null,"쉽게 이해하자면, Promise의 then()의 콜백은 ",l.createElement(t.code,null,"Callback Queue"),"가 아닌 ",l.createElement(t.code,null,"Job Queue"),"에 보관되며, 콜백 큐보다 높은 우선순위로 실행된다."),"\n",l.createElement(t.h2,null,"Event Loop"),"\n",l.createElement(t.blockquote,null,"\n",l.createElement(t.p,null,l.createElement(t.code,null,"Callback Queue"),"와 ",l.createElement(t.code,null,"Job Queue"),"에 보관되어 있는 비동기 콜백 함수들을 자바스크립트 엔진의 ",l.createElement(t.code,null,"Call Stack"),"에 넣어준다."),"\n"),"\n",l.createElement(t.p,null,l.createElement(t.strong,null,"Event Loop"),"에서 Loop의 사전적인 의미는 '반복, 순환'이다."),"\n",l.createElement(t.p,null,"Event Loop는 사전적인 의미처럼 계속 반복해서 ",l.createElement(t.code,null,"Call Stack"),"과 ",l.createElement(t.code,null,"Queue"),"(",l.createElement(t.code,null,"Callback Queue")," or ",l.createElement(t.code,null,"Job Queue"),") 사이의 상태를 확인하고, ",l.createElement(t.code,null,"Call Stack"),"이 비워있는 경우 ",l.createElement(t.code,null,"Queue"),"에서 ",l.createElement(t.code,null,"task"),"를 꺼내어 ",l.createElement(t.code,null,"Call stack"),"에 넣는다."),"\n",l.createElement(t.p,null,"쉽게 이해하자면, Web API나 Promise로 비동기 동작을하는 콜백 함수가 ",l.createElement(t.code,null,"Callback Queue"),"나 ",l.createElement(t.code,null,"Job Queue"),"에 들어와 있고, 자바스크립트 엔진의 ",l.createElement(t.code,null,"Call Stack"),"이 빈 상태가 되면 ",l.createElement(t.code,null,"task"),"를 넣어주는 역할을 한다."),"\n",l.createElement(t.p,null,"이런 ",l.createElement(t.code,null,"Loop"),". 즉, 반복적인 행동을 이벤트 루프의 ",l.createElement(t.strong,null,"틱(tick)")," 이라 부른다."),"\n",l.createElement(t.hr),"\n",l.createElement(t.h1,null,"Event Loop의 동작"),"\n",l.createElement(t.blockquote,null,"\n",l.createElement(t.p,null,"코드가 실행될 때 위 설명한 영역들이 어떤 역할을 하며, 어떻게 동작하는지 정리한다."),"\n"),"\n",l.createElement(t.img,{src:"./event_loop_operation.gif",alt:"Event loop operation"}),"\n",l.createElement(t.ol,null,"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,l.createElement(t.strong,null,"V8 엔진"),"에서 코드가 실행되면, ",l.createElement(t.code,null,"Call Stack"),"에 task가 쌓인다."),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,l.createElement(t.code,null,"Call Stack"),"에서는 순차적으로 Stack을 Pop하며 함수들이 실행된다."),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Call Stack에 쌓인 task 중에 비동기함수가 실행된다면, ",l.createElement(t.code,null,"Web API"),"가 호출된다."),"\n",l.createElement(t.p,null,"3-1. 이 중 Promise로 구현된 task는 ",l.createElement(t.code,null,"Job Queue"),"로 이동한다."),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,l.createElement(t.code,null,"Web API"),"는 비동기함수의 콜백함수를 바로 실행시키지 않고, 특정 조건(ex setTimeout)이 달성되면 ",l.createElement(t.code,null,"Callback Queue"),"로 이동시킨다."),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Event Loop는 ",l.createElement(t.code,null,"Call Stack"),"의 상태를 확인하고, Call Stack이 비어있다면 ",l.createElement(t.code,null,"Callback Queue"),"에 있는 첫번째 콜백을 ",l.createElement(t.code,null,"Call Stack"),"으로 이동시킨다."),"\n",l.createElement(t.p,null,"5-1. Event Loop는 ",l.createElement(t.code,null,"Callback Queue")," 보다 ",l.createElement(t.code,null,"Job Queue"),"의 상태를 우선적으로 확인하고, 먼저 ",l.createElement(t.code,null,"Call Stack"),"으로 이동시킨다."),"\n"),"\n"),"\n",l.createElement(t.blockquote,null,"\n",l.createElement(t.p,null,"이러한 동작 방식이 자바스크립트가 단일 스레드 언어임에도 불구하고 멀티 스레드 언어처럼 보이게 되는 것이다."),"\n"),"\n",l.createElement(t.p,null,"시각적으로 이벤트 루프의 동작 원리를 확인하고 싶다면 아래 링크에서 코드를 작성하고 실행해보자."),"\n",l.createElement(t.p,null,l.createElement(t.a,{href:"http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D"},"Loupe - Philip Roberts")),"\n",l.createElement(t.hr),"\n",l.createElement(t.h1,null,"References 🙏🏽"),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,l.createElement(t.a,{href:"https://developer.mozilla.org/ko/docs/Web/API/Document_Object_Model/Introduction"},"MDN web docs")),"\n",l.createElement(t.li,null,l.createElement(t.a,{href:"https://ko.javascript.info/"},"The Modern javaScript Tutorial")),"\n",l.createElement(t.li,null,l.createElement(t.a,{href:"https://blog.sessionstack.com/how-does-javascript-actually-work-part-1-b0bacc073cf"},"How JavaScript works: an overview of the engine, the runtime, and the call stack")),"\n",l.createElement(t.li,null,l.createElement(t.a,{href:"https://www.youtube.com/watch?v=8aGhZQkoFbQ&t=1097s"},"What the heck is the event loop anyway? | Philip Roberts | JSConf EU")),"\n"))}var r=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?l.createElement(t,e,l.createElement(c,e)):c(e)},o=n(4765);function i(e){return l.createElement(o.Z,e,l.createElement(r,e))}o.Z}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-post-query-tsx-content-file-path-content-posts-event-loop-index-mdx-b82b23140d7c292afe69.js.map