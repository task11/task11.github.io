"use strict";(self.webpackChunktask11_github_io=self.webpackChunktask11_github_io||[]).push([[358],{4765:function(e,n,t){t.d(n,{F:function(){return E},Z:function(){return p}});var l=t(7294),r=t(8733),a=t(795),i=t(6920),o=t(6799),c=t(8871);var m=e=>{let{post:n}=e;return null};const u=["16px","8px","4px"].map((e=>"rgba(0, 0, 0, 0.1) 0px "+e+" "+e+" 0px"));var s=e=>{let{data:{post:n},children:t}=e;return(0,r.tZ)(i.Z,null,(0,r.tZ)(a.X6,{as:"h1",variant:"styles.h1"},n.title),(0,r.tZ)("p",{sx:{color:"secondary",mt:3,a:{color:"secondary"},fontSize:[1,1,2]}},(0,r.tZ)("time",null,n.date),n.tags&&(0,r.tZ)(l.Fragment,null," — ",(0,r.tZ)(o.Z,{tags:n.tags})),n.timeToRead&&" — ",n.timeToRead&&(0,r.tZ)("span",null,n.timeToRead," min read")),(0,r.tZ)("section",{sx:{my:5,".gatsby-resp-image-wrapper":{my:[4,4,5],borderRadius:"4px",boxShadow:u.join(", "),".gatsby-resp-image-image":{borderRadius:"4px"}},variant:"layout.content"}},t),(0,r.tZ)(m,{post:n}))};const E=e=>{var n,t,l;let{data:{post:a}}=e;return(0,r.tZ)(c.Z,{title:a.title,description:a.description?a.description:a.excerpt,image:a.banner?null===(n=a.banner)||void 0===n||null===(t=n.childImageSharp)||void 0===t||null===(l=t.resize)||void 0===l?void 0:l.src:void 0,pathname:a.slug,canonicalUrl:a.canonicalUrl})};function p(e){let{...n}=e;return l.createElement(s,n)}},6799:function(e,n,t){var l=t(8733),r=t(7294),a=t(1883),i=t(3494),o=t(9706);n.Z=e=>{let{tags:n}=e;const{tagsPath:t,basePath:c}=(0,i.Z)();return(0,l.tZ)(r.Fragment,null,n.map(((e,n)=>(0,l.tZ)(r.Fragment,{key:e.slug},!!n&&", ",(0,l.tZ)(a.Link,{sx:e=>{var n;return{...null===(n=e.styles)||void 0===n?void 0:n.a}},to:(0,o.Z)("/"+c+"/"+t+"/"+e.slug)},e.name)))))}},8871:function(e,n,t){var l=t(7294),r=t(1883),a=t(4232);n.Z=e=>{let{title:n="",description:t="",pathname:i="",image:o="",children:c=null,canonicalUrl:m=""}=e;const u=(0,a.Z)(),{siteTitle:s,siteTitleAlt:E,siteUrl:p,siteDescription:d,siteImage:g,author:h,siteLanguage:f}=u,y={title:n?n+" | "+s:E,description:t||d,url:""+p+(i||""),image:""+p+(o||g)};return l.createElement(l.Fragment,null,l.createElement("html",{lang:f}),l.createElement("title",null,y.title),l.createElement("meta",{name:"description",content:y.description}),l.createElement("meta",{name:"image",content:y.image}),l.createElement("meta",{property:"og:title",content:y.title}),l.createElement("meta",{property:"og:url",content:y.url}),l.createElement("meta",{property:"og:description",content:y.description}),l.createElement("meta",{property:"og:image",content:y.image}),l.createElement("meta",{property:"og:type",content:"website"}),l.createElement("meta",{property:"og:image:alt",content:y.description}),l.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),l.createElement("meta",{name:"twitter:title",content:y.title}),l.createElement("meta",{name:"twitter:url",content:y.url}),l.createElement("meta",{name:"twitter:description",content:y.description}),l.createElement("meta",{name:"twitter:image",content:y.image}),l.createElement("meta",{name:"twitter:image:alt",content:y.description}),l.createElement("meta",{name:"twitter:creator",content:h}),l.createElement("meta",{name:"gatsby-theme",content:"@lekoarts/gatsby-theme-minimal-blog"}),l.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:(0,r.withPrefix)("/favicon-32x32.png")}),l.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:(0,r.withPrefix)("/favicon-16x16.png")}),l.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:(0,r.withPrefix)("/apple-touch-icon.png")}),m?l.createElement("link",{rel:"canonical",href:m}):null,c)}},9557:function(e,n,t){t.r(n),t.d(n,{Head:function(){return o.F},default:function(){return c}});var l=t(7294),r=t(1151);function a(e){const n=Object.assign({blockquote:"blockquote",p:"p",h1:"h1",hr:"hr",h2:"h2",h3:"h3",ul:"ul",li:"li",pre:"pre",code:"code",strong:"strong",em:"em",ol:"ol"},(0,r.ah)(),e.components);return l.createElement(l.Fragment,null,l.createElement(n.blockquote,null,"\n",l.createElement(n.p,null,"💡 CSS의 Transition, Transform, Animation 예제 정리"),"\n"),"\n",l.createElement(n.h1,null,"개요 🛫"),"\n",l.createElement(n.hr),"\n",l.createElement(n.blockquote,null,"\n",l.createElement(n.p,null,"Interative 한 웹 페이지를 만들기 위한 기초인 CSS Transition, Animation을 정리해보자."),"\n"),"\n",l.createElement(n.p,null,"사용자의 상호작용에 따라 화려하게 움직이는 웹 사이트를 만들기 위해서는 Javascript 지식이 상당히 필요하지만, 기본적으로 Transition과 Animation을 아는 것만으로도 어느 정도 구현이 가능하다."),"\n",l.createElement(n.p,null,"이번 포스트에서는 Transition과 Animation의 속성들을 다뤄보도록 하겠다."),"\n",l.createElement(n.h1,null,"학습 내용 📖"),"\n",l.createElement(n.hr),"\n",l.createElement(n.h2,null,"Transition"),"\n",l.createElement(n.blockquote,null,"\n",l.createElement(n.p,null,"CSS transitions는 여러분이 (명시적으로 목록을 작성해서) 어떤 속성을 움직이게 할지, (딜레이를 설정해서) 언제 애니메이션이 시작할지, (지속 시간을 설정해서) 트랜지션을 얼마나 지속할지, 그리고 (예를 들면, 선형이거나 초기 빠름, 종료 느림과 같은 타이밍 함수를 정의해서) 어떻게 트랜지션을 실행하는지 결정하게 합니다."),"\n"),"\n",l.createElement(n.hr),"\n",l.createElement(n.h3,null,"Transition의 속성"),"\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,"property"),"\n",l.createElement(n.li,null,"duration"),"\n"),"\n",l.createElement(n.pre,null,l.createElement(n.code,null,"<style>\n    .transition {\n        transition-property: width;\n        transition-duration: 2s;\n    }\n</style>\n\n")),"\n",l.createElement(n.p,null,l.createElement(n.strong,null,l.createElement(n.code,null,".property")),": 효과를 적용하고자 하는 css 속성\n",l.createElement(n.strong,null,l.createElement(n.code,null,".duration")),": 효과가 나타나는데 걸리는 시간"),"\n",l.createElement(n.hr),"\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,"timing-function"),"\n",l.createElement(n.li,null,"delay"),"\n"),"\n",l.createElement(n.pre,null,l.createElement(n.code,null,"<style>\n    .transition {\n        transition-timing-function: linear;\n        transition-delay: 1s;\n    }\n</style>\n\n")),"\n",l.createElement(n.p,null,l.createElement(n.strong,null,l.createElement(n.code,null,".timing-function")),": 효과의 속도 (linear는 ‘일정하게’라는 의미)\n",l.createElement(n.strong,null,l.createElement(n.code,null,".delay")),": 특정 조건 하에서 효과 발동 (1s는 ‘1초 후’라는 의미)"),"\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,"hover"),"\n"),"\n",l.createElement(n.pre,null,l.createElement(n.code,null,"<style>\n    .transition:hover { width: 300px; }\n</style>\n\n")),"\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,"css에서 미리 만들어 놓은 클래스로, ",l.createElement(n.strong,null,"마우스를 올렸을 때"),"라는 조건"),"\n",l.createElement(n.li,null,l.createElement(n.em,null,"Note"),": **",l.createElement(n.code,null,".transition:hover"),"**를 띄어쓰기 없이 작성해야 함"),"\n"),"\n",l.createElement(n.p,null,"종합 예시"),"\n",l.createElement(n.pre,null,l.createElement(n.code,null,"<style>\n    .transition {\n        transition: width 2s linear 1s;\n    }\n    .transition:hover { width: 300px; }\n</style>\n\n")),"\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,"마우스를 올리면 ",l.createElement(n.strong,null,"1초 후"),"에 width 값이 ",l.createElement(n.strong,null,"300px"),"로, ",l.createElement(n.strong,null,"2초 동안 속도 일정"),"하게 변하는 애니매이션 효과 발동"),"\n"),"\n",l.createElement(n.h2,null,"Transform"),"\n",l.createElement(n.blockquote,null,"\n",l.createElement(n.p,null,"CSS 속성을 변경할 때 애니메이션 속도를 조절할 수 있게 한다."),"\n"),"\n",l.createElement(n.p,null,"CSS의 속성 변화가 지정한 설정에따라 일어날 수 있게 만들어 준다."),"\n",l.createElement(n.h3,null,"예제"),"\n",l.createElement(n.pre,null,l.createElement(n.code,null,"<style>\n    .transition {\n        transfrom: rotate(45deg);/* 회전 */transform: scale(2,3);/* 확대 축소 */\n    }\n</style>\n\n")),"\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,l.createElement(n.strong,null,l.createElement(n.code,null,".rotate(angle)")),": 입력한 각도만큼 회전하며, 음수도 입력 가능"),"\n",l.createElement(n.li,null,l.createElement(n.strong,null,l.createElement(n.code,null,".scale(x, y)")),": 숫자는 비율의 의미하며 width를 x배, height를 y배 만큼 확대"),"\n"),"\n",l.createElement(n.p,null,l.createElement(n.strong,null,"Point II"),"skew, translate"),"\n",l.createElement(n.pre,null,l.createElement(n.code,null,"<style>\n    .transition {\n        transform: skew(10deg, 20deg);/* 각도 변경 */transform: translate(100px; 200px);/* 위치 변경 */\n    }\n</style>\n\n")),"\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,l.createElement(n.strong,null,l.createElement(n.code,null,".skew(x, y)")),": x축, y축을 기준으로 입력한 각도만큼 비틂"),"\n",l.createElement(n.li,null,l.createElement(n.strong,null,l.createElement(n.code,null,".translate(x, y)")),": 선택한 오브젝트의 좌표 변경"),"\n"),"\n",l.createElement(n.p,null,l.createElement(n.strong,null,"Point III"),"prefix 접두사"),"\n",l.createElement(n.pre,null,l.createElement(n.code,null,"<style>\n    .transition {\n        -webkit-transform: translate(100px, 200px);/* 크롬, 사파리 */\n        -mox-transform: translate(100px, 200px);/* 파이어폭스 */\n        -ms-transform: translate(100px, 200px ;/* 익스플로러 9.0 */\n        -o-transform: translate(100px, 200px);/* 오페라 */\n    }\n</style>\n\n")),"\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,"Transform은 CSS의 최신 버전에서만 실행 가능한 키워드이지만, prefix를 추가하면 하위 버전의 브라우저에서도 실행 가능"),"\n"),"\n",l.createElement(n.h2,null,"Animation"),"\n",l.createElement(n.blockquote,null,"\n",l.createElement(n.p,null,"CSS Selector의 종류를 알아보고 예제를 통해 어떻게 적용되는지 확인해보겠다."),"\n"),"\n",l.createElement(n.hr),"\n",l.createElement(n.h3,null,"예제"),"\n",l.createElement(n.pre,null,l.createElement(n.code,null,".animation {\n    animation-name: changeWidth;/* 애니매이션 이름 */animation-duration: 3s;\n    animation-timing-function: linear;\n    animation-delay: 1s;\n    animation-iteration-count: 6;\n    animation-direction: alternate;\n}\n\n@keyframes changeWidth {\n    from { width: 300px; }\n    to {width: 600px; ]\n}\n\n")),"\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,l.createElement(n.strong,null,l.createElement(n.code,null,".iteration-count")),": 애니메이션 반복 횟수"),"\n",l.createElement(n.li,null,l.createElement(n.strong,null,l.createElement(n.code,null,".direction")),": 애니매이션 진행 방향","\n",l.createElement(n.ol,null,"\n",l.createElement(n.li,null,l.createElement(n.strong,null,l.createElement(n.code,null,"alternate")),": from → to → from"),"\n",l.createElement(n.li,null,l.createElement(n.strong,null,l.createElement(n.code,null,"normal")),": from → to, from → to"),"\n",l.createElement(n.li,null,l.createElement(n.strong,null,l.createElement(n.code,null,"reverse")),": to → from, to → from"),"\n"),"\n"),"\n"),"\n",l.createElement(n.hr),"\n",l.createElement(n.h2,null,l.createElement(n.strong,null,"4. 애니메이션 응용")),"\n",l.createElement(n.p,null,l.createElement(n.strong,null,"Point I"),"Transform & Animation"),"\n",l.createElement(n.pre,null,l.createElement(n.code,null,".box1 {\n    animation: rotation 1500ms linear infinite alternate;\n}\n\n@keyframes rotation {\n    from { transform: rotate(-10deg); }\n    to { transform: rotate(10deg); }\n}\n\n")),"\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,"애니메이션 코드를 한 줄로 작성시, 먼저 나오는 숫자가 **",l.createElement(n.code,null,".duration"),"**이고, 나중에 나오는 숫자가 ",l.createElement(n.strong,null,l.createElement(n.code,null,".delay"))),"\n"),"\n",l.createElement(n.p,null,l.createElement(n.strong,null,"Point II"),"prefix 작성시 유의사항"),"\n",l.createElement(n.pre,null,l.createElement(n.code,null,".box1 {\n    -webkit-animation: rotation 3s linear 1s 6 alternate;\n}\n\n@-webkit-keyframes rotation {\n    from {-webkit-transform: rotate(-10deg); }\n    to {-webkit-transform: rotate(10deg); }\n}\n\n")),"\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,"prefix가 같은 애니메이션끼리 연동"),"\n"),"\n",l.createElement(n.hr),"\n",l.createElement(n.h1,null,"Review 💡"),"\n",l.createElement(n.p,null,"CSS의 transition & transform & animation을 잘 사용하면 많은 방식의 이미지나 UI를 구현할 수 있을 것 같다."))}var i=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?l.createElement(n,e,l.createElement(a,e)):a(e)},o=t(4765);function c(e){return l.createElement(o.Z,e,l.createElement(i,e))}o.Z}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-post-query-tsx-content-file-path-content-posts-transition-animation-index-mdx-670e09bb44933fed3bf4.js.map