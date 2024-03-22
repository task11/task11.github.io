"use strict";(self.webpackChunktask11_github_io=self.webpackChunktask11_github_io||[]).push([[804],{4765:function(e,n,t){t.d(n,{F:function(){return g},Z:function(){return d}});var a=t(7294),l=t(8733),c=t(795),i=t(6920),r=t(6799),s=t(8871);var m=e=>{let{post:n}=e;return null};const o=["16px","8px","4px"].map((e=>"rgba(0, 0, 0, 0.1) 0px "+e+" "+e+" 0px"));var p=e=>{let{data:{post:n},children:t}=e;return(0,l.tZ)(i.Z,null,(0,l.tZ)(c.X6,{as:"h1",variant:"styles.h1"},n.title),(0,l.tZ)("p",{sx:{color:"secondary",mt:3,a:{color:"secondary"},fontSize:[1,1,2]}},(0,l.tZ)("time",null,n.date),n.tags&&(0,l.tZ)(a.Fragment,null," — ",(0,l.tZ)(r.Z,{tags:n.tags})),n.timeToRead&&" — ",n.timeToRead&&(0,l.tZ)("span",null,n.timeToRead," min read")),(0,l.tZ)("section",{sx:{my:5,".gatsby-resp-image-wrapper":{my:[4,4,5],borderRadius:"4px",boxShadow:o.join(", "),".gatsby-resp-image-image":{borderRadius:"4px"}},variant:"layout.content"}},t),(0,l.tZ)(m,{post:n}))};const g=e=>{var n,t,a;let{data:{post:c}}=e;return(0,l.tZ)(s.Z,{title:c.title,description:c.description?c.description:c.excerpt,image:c.banner?null===(n=c.banner)||void 0===n||null===(t=n.childImageSharp)||void 0===t||null===(a=t.resize)||void 0===a?void 0:a.src:void 0,pathname:c.slug,canonicalUrl:c.canonicalUrl})};function d(e){let{...n}=e;return a.createElement(p,n)}},6799:function(e,n,t){var a=t(8733),l=t(7294),c=t(1883),i=t(3494),r=t(9706);n.Z=e=>{let{tags:n}=e;const{tagsPath:t,basePath:s}=(0,i.Z)();return(0,a.tZ)(l.Fragment,null,n.map(((e,n)=>(0,a.tZ)(l.Fragment,{key:e.slug},!!n&&", ",(0,a.tZ)(c.Link,{sx:e=>{var n;return{...null===(n=e.styles)||void 0===n?void 0:n.a}},to:(0,r.Z)("/"+s+"/"+t+"/"+e.slug)},e.name)))))}},8871:function(e,n,t){var a=t(7294),l=t(1883),c=t(4232);n.Z=e=>{let{title:n="",description:t="",pathname:i="",image:r="",children:s=null,canonicalUrl:m=""}=e;const o=(0,c.Z)(),{siteTitle:p,siteTitleAlt:g,siteUrl:d,siteDescription:u,siteImage:b,author:A,siteLanguage:E}=o,h={title:n?n+" | "+p:g,description:t||u,url:""+d+(i||""),image:""+d+(r||b)};return a.createElement(a.Fragment,null,a.createElement("html",{lang:E}),a.createElement("title",null,h.title),a.createElement("meta",{name:"description",content:h.description}),a.createElement("meta",{name:"image",content:h.image}),a.createElement("meta",{property:"og:title",content:h.title}),a.createElement("meta",{property:"og:url",content:h.url}),a.createElement("meta",{property:"og:description",content:h.description}),a.createElement("meta",{property:"og:image",content:h.image}),a.createElement("meta",{property:"og:type",content:"website"}),a.createElement("meta",{property:"og:image:alt",content:h.description}),a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),a.createElement("meta",{name:"twitter:title",content:h.title}),a.createElement("meta",{name:"twitter:url",content:h.url}),a.createElement("meta",{name:"twitter:description",content:h.description}),a.createElement("meta",{name:"twitter:image",content:h.image}),a.createElement("meta",{name:"twitter:image:alt",content:h.description}),a.createElement("meta",{name:"twitter:creator",content:A}),a.createElement("meta",{name:"gatsby-theme",content:"@lekoarts/gatsby-theme-minimal-blog"}),a.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:(0,l.withPrefix)("/favicon-32x32.png")}),a.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:(0,l.withPrefix)("/favicon-16x16.png")}),a.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:(0,l.withPrefix)("/apple-touch-icon.png")}),m?a.createElement("link",{rel:"canonical",href:m}):null,s)}},7813:function(e,n,t){t.r(n),t.d(n,{Head:function(){return r.F},default:function(){return s}});var a=t(7294),l=t(1151);function c(e){const n=Object.assign({blockquote:"blockquote",p:"p",h1:"h1",hr:"hr",h2:"h2",h3:"h3",code:"code",ol:"ol",li:"li",pre:"pre",span:"span"},(0,l.ah)(),e.components);return a.createElement(a.Fragment,null,a.createElement(n.blockquote,null,"\n",a.createElement(n.p,null,"💡 반응형 이미지 태그에 대해 알아보자."),"\n"),"\n",a.createElement(n.h1,null,"개요 🛫"),"\n",a.createElement(n.hr),"\n",a.createElement(n.blockquote,null,"\n",a.createElement(n.p,null,"이번 포스트에서는 HTML로 반응형 이미지 처리를 어떻게 하는지에 대해 알아보겠다."),"\n"),"\n",a.createElement(n.p,null,"HTML에서 제공하는 반응형 이미지 처리 방식은 CSS로 처리하는 반응형 웹 디자인의 일부분으로 개념을 학습해두겠다."),"\n",a.createElement(n.h1,null,"학습 내용 📖"),"\n",a.createElement(n.hr),"\n",a.createElement(n.h2,null,"반응형 이미지란"),"\n",a.createElement(n.h3,null,"사용하는 이유"),"\n",a.createElement(n.p,null,"사용자의 ",a.createElement(n.code,null,"viewport")," 즉 지금 화면을 보고있는 기기의 화면 넓이가 다를텐데, 모두 동일한 사이즈의 이미지가 보여진다면, 아래의 두 가지 문제가 발생한다."),"\n",a.createElement(n.p,null,"ex) 랩탑,데스크탑 용 고해상도 이미지를 모바일에서 볼 때"),"\n",a.createElement(n.ol,null,"\n",a.createElement(n.li,null,"잘린 이미지가 보여진다."),"\n",a.createElement(n.li,null,"모바일 사용자가 기기에 맞는 작은 사이즈의 이미지 대신 커다란 이미지를 다운받는 것의 대역폭 낭비가 있다."),"\n"),"\n",a.createElement(n.p,null,"이에 대한 해결책 중 하나로 HTML 반응형 이미지 기법을 사용할 수 있다."),"\n",a.createElement(n.h3,null,"어떻게 사용할까"),"\n",a.createElement(n.blockquote,null,"\n",a.createElement(n.p,null,a.createElement(n.code,null,"srcset")," 과 ",a.createElement(n.code,null,"sizes"),"라는 두 가지 새로운 속성을 사용해 브라우저가 올바른 선택을 할 수 있게 만든다."),"\n"),"\n",a.createElement(n.p,null,a.createElement(n.code,null,"srcset")," 속성에는 브라우저에게 보여줄 다양한 크기의 이미지 목록과 그 크기를 정의해준다.\n속성은 아래와 같은 문자열로 구성된다."),"\n",a.createElement(n.ol,null,"\n",a.createElement(n.li,null,"이미지의 URL"),"\n",a.createElement(n.li,null,"너비 서술자(w), 픽셀 밀도 서술자(x) ",a.createElement(n.code,null,"한개만 유효")),"\n"),"\n",a.createElement(n.blockquote,null,"\n",a.createElement(n.p,null,a.createElement(n.code,null,"srcset"),"은 viewport에 따라 다른 이미지를 준다."),"\n"),"\n",a.createElement(n.p,null,a.createElement(n.code,null,"sizes")," 속성에는 미디어 조건문을 정의하고 이 조건문이 참일 때 어떤 이미지 크기가 최적인지 보여준다."),"\n",a.createElement(n.ol,null,"\n",a.createElement(n.li,null,"미디어 조건문"),"\n",a.createElement(n.li,null,"조건문이 참인 경우 보여줄 이미지 너비"),"\n"),"\n",a.createElement(n.blockquote,null,"\n",a.createElement(n.p,null,a.createElement(n.code,null,"sizes")," 속성을 넣으면 특정 크기 이상 너비를 가진 viewport의 사용자들에게 일정한 크기의 이미지를 보여줄 수 있다."),"\n"),"\n",a.createElement(n.hr),"\n",a.createElement(n.h2,null,"예제로 보는 반응형 이미지 처리"),"\n",a.createElement(n.blockquote,null,"\n",a.createElement(n.p,null,"HTML 반응형 이미지 기법"),"\n"),"\n",a.createElement(n.h3,null,"srcset"),"\n",a.createElement(n.p,null,"캐시를 disabled로 변경하고 테스트해야한다."),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-HTML"},'<!DOCTYPE html>\n<html lang="en">\n\n<head>\n  <meta charset="UTF-8">\n  <meta http-equiv="X-UA-Compatible" content="IE=edge">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Document</title>\n</head>\n\n<body>\n  <h2>반응형 이미지</h2>\n\n  <img src="src/600mock.png"\n       srcset="src/300mock.png 300w,\n               src/450mock.png 450w,\n               src/600mock.png 600w"\n       alt="responsive images"\n  />\n</body>\n\n</html>\n')),"\n",a.createElement(n.blockquote,null,"\n",a.createElement(n.p,null,"300w로 화면 너비를 조정할 때 나오는 이미지"),"\n"),"\n",a.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 960px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 47.91666666666667%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAABYlAAAWJQFJUiTwAAABqUlEQVR42qWR247aMBRF8///Vcg8IM2oMBfKEMdxbo4DuUDiXGBVMa00qtSHqltaOseWbe3t41lruVyu6MKQpDkqTvg8BgQiJAwloYxcv3AMxGMdCISMEFK5PeHOKWQY4PV9R920dF1H0154e38nSVO0LihPJ6qqIs81aZJQliVN22KMoTzXyDTD6BytNVXd0ZfPeJvNhv1+72jPFVKEmMIQRYrCnIhUQmFKZFKQZBptliQZKiv4IWJycyZOUnJdUBiD9/r6SiiWKJJzHJMIQXM6Uy/umpY4zTiKkDdZsv0IOCzfISM+Dkf2n4IwiglC6ZAqwdvtdmy3W15eXhBSMs4zwzhx7XputzvjOKFNSdu2Lm6mC6qqpu+tc3Q6nblcr1R1TZbleL7v8/T0xGq1QinF7XZjGAZXf2ueZ5qrZZ4nhnFk6nv+Jm95zOH7bqqLo4Xloh0GemsdbWexdsAOI93lQtf19HZwTh32Ub31eo3vLw6/8fz9nUMgkZFChBFZpl3Mumn+oP3F1/6BF8cxSsXIZShVzTw/Ii/upmly0f8F72v++/3G/+onvj3z3GasjWMAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="ri_1.png"\n        title=""\n        src="/static/4552fb87c6dd91fcf5c7f25001db4d48/7d769/ri_1.png"\n        srcset="/static/4552fb87c6dd91fcf5c7f25001db4d48/5243c/ri_1.png 240w,\n/static/4552fb87c6dd91fcf5c7f25001db4d48/ab158/ri_1.png 480w,\n/static/4552fb87c6dd91fcf5c7f25001db4d48/7d769/ri_1.png 960w,\n/static/4552fb87c6dd91fcf5c7f25001db4d48/9e763/ri_1.png 1426w"\n        sizes="(max-width: 960px) 100vw, 960px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>'}}),"\n",a.createElement(n.blockquote,null,"\n",a.createElement(n.p,null,"450w로 화면 너비를 조정할 때 나오는 이미지"),"\n"),"\n",a.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 960px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 53.75%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAABYlAAAWJQFJUiTwAAABsUlEQVR42p2TaY+iQBRF+f+/yzaK+xa3ZhWl2GQRFEb0TKqMnZ75MJn0S064Dyo3lxvQfjUNVVWRZTm+CDj5AsO0MC0by3ZwDx624774tjuHI7ZzUOcc18PzDriOiUbbUJYlVXXldqvxhcA0TbI8J4pj8jxHBCFBEBAnCUVRcI4jojTnFASEYUhyzqhynyLaok0mEySz2QwhBO9p65qT4yBEwPHgEcYJ3tEnCGPGO8FRBIgwxA8i9vYJ9xQprck0hmHgeR6+75NnmUqXyES+T3kpyc8pZXUlCCN2hsXsU7DZm+wNC8N22H5a2K6HYdloy+WS0WikGA6H6LpOv99jPl/Qtg+ezyfV9Ubbtip5WVbcm5rH46Eqkrt81jQNeVGgTadTZSLNJNJYH+gs5kvuzf2rAmks+Vu/9/dosrtXqv7XdTAYMJnMcA4+5zQlTs6kaUZxKSmKywupLxfyb1reV4bSpNPp8PHxoRjoOovlmjgtiONYdSd7reuGuq7/iTKUid49qlfWdTabDT8ZbTwe0+v1VMo33W6X1Wr1R1//i/psttstu91OIfV6vVZ/xU8MfwO5xTW2SakzDAAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="ri_2.png"\n        title=""\n        src="/static/bcd755eb997a32a8aa29436c6daf67c7/7d769/ri_2.png"\n        srcset="/static/bcd755eb997a32a8aa29436c6daf67c7/5243c/ri_2.png 240w,\n/static/bcd755eb997a32a8aa29436c6daf67c7/ab158/ri_2.png 480w,\n/static/bcd755eb997a32a8aa29436c6daf67c7/7d769/ri_2.png 960w,\n/static/bcd755eb997a32a8aa29436c6daf67c7/87339/ri_2.png 1440w,\n/static/bcd755eb997a32a8aa29436c6daf67c7/ba05f/ri_2.png 1502w"\n        sizes="(max-width: 960px) 100vw, 960px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>'}}),"\n",a.createElement(n.blockquote,null,"\n",a.createElement(n.p,null,"600w로 화면 너비를 조정할 때 나오는 이미지"),"\n"),"\n",a.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 960px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 62.5%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAABYlAAAWJQFJUiTwAAABl0lEQVR42pWTe2+CMBTF+f5fyhjfCsx/jLqxqbS80cmztqBnaQ3KsrnHTX65tyU9nHspGmMMxySF6/l4ebGw29kghKq82WxhEwrquKCujx1xQIgD36MI3A2o4yFJEmRZhjTNUJYMGqUUfhCAc448z3E+nxV1XaOqKpzrGod4jzCK4IchwmiPwyGG51PsD+8Iwgi2E8APY0RxDG2xWMCyLBRFAelW5rKBMeRpCt+2sQ9CvB8TeEGA1SuBsaR4tl7xtrWxtt6w2RFVa/P5HBJd178wm81gmk/IsgJVXasuuBA4nRj4iaEomTJRlqV6uUSbTCbq4CN03cDxmKgxyBEIISBEpVDr6p4l2vWQ/o3Qdc8wn7AlrpqVJM1y5HnxEG06narDhmHcclPLZ3IcJ86vDusal8sFP4XWOOp0OhgMBuj1euh2uzenUlC22Q4pKnW/4ybY7/cxGo0wHA5V3RbkXLSEfuZPLXNxF/wtbh/l0bVpt/wnwfF4rJzI69Om2TNN81PLvwoul0usVivI3NCs5V+0Xq//5fAD8VjD6qGAi1gAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="ri_3.png"\n        title=""\n        src="/static/0c8b00b0c935a641af7a695de141f797/7d769/ri_3.png"\n        srcset="/static/0c8b00b0c935a641af7a695de141f797/5243c/ri_3.png 240w,\n/static/0c8b00b0c935a641af7a695de141f797/ab158/ri_3.png 480w,\n/static/0c8b00b0c935a641af7a695de141f797/7d769/ri_3.png 960w,\n/static/0c8b00b0c935a641af7a695de141f797/87339/ri_3.png 1440w,\n/static/0c8b00b0c935a641af7a695de141f797/88b03/ri_3.png 1920w,\n/static/0c8b00b0c935a641af7a695de141f797/d9ada/ri_3.png 1964w"\n        sizes="(max-width: 960px) 100vw, 960px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>'}}),"\n",a.createElement(n.blockquote,null,"\n",a.createElement(n.p,null,"브라우저가 크기에 따른 이미지를 골라서 뿌려준다. + 600w가 최대 크기인데, 화면을 늘릴수록 이미지 크기는 무제한으로 늘어난다. 이것을 해결하기 위해 ",a.createElement(n.code,null,"sizes"),"를 사용해줘야한다."),"\n"),"\n",a.createElement(n.h3,null,"sizes"),"\n",a.createElement(n.blockquote,null,"\n",a.createElement(n.p,null,"미디어 조건문은 먼저 작성한 순서대로 적용된다."),"\n"),"\n",a.createElement(n.p,null,"아래 미디어 조건문은 이와 같다."),"\n",a.createElement(n.ol,null,"\n",a.createElement(n.li,null,"if (min-width: 600px 이상) 이미지 600px 고정"),"\n",a.createElement(n.li,null,"else if (min-width: 450px 이상) 이미지 450px 고정"),"\n",a.createElement(n.li,null,"else 이미지 300px 고정"),"\n"),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-HTML"},'<!DOCTYPE html>\n<html lang="en">\n\n<head>\n  <meta charset="UTF-8">\n  <meta http-equiv="X-UA-Compatible" content="IE=edge">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Document</title>\n</head>\n\n<body>\n  <h2>반응형 이미지</h2>\n\n  <img\n      src="src/600mock.png"\n      srcset="src/300mock.png 300w,\n            src/450mock.png 450w,\n            src/600mock.png 600w"\n      sizes="(min-width: 600px) 600px,\n            (min-width: 450px) 450px,\n            300px"\n      alt="responsive images" />\n</body>\n\n</html>\n')),"\n",a.createElement(n.blockquote,null,"\n",a.createElement(n.p,null,"600px이상으로 화면을 늘려도 이미지는 늘어나지 않는다."),"\n"),"\n",a.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 960px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 45.416666666666664%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAYAAAAywQxIAAAACXBIWXMAABYlAAAWJQFJUiTwAAAA6klEQVR42qWSa2vDIBiF/f+/KyH3C+vXhMDWbmuMmruBQE7xXQ1r2UbLhIejH3z0oKzvOyjVQgiJrushlaJUbQchBaSoaT2MI/phwDRrzFemeSZmm3oBOxxeUJYl6rq+gXOOdV1hh5nzDw7VjlfZcoeG1hosz3NEUYQgCHZ830cYhpim6UZ4Pp3x+tbgeOR4/1TgTYu6acHFF1JIsDRNSZgkyU4cx5RWuG0b8chgWZaR0PM8uplJe8C98BF2oeM4cF2X8t9CU9FUNxKTv1W2tf+qz8xmU9Xy06M8Jayqir7Nd4qioFyW5WnhBcX3pyEcevoEAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="ri_4.png"\n        title=""\n        src="/static/20aa0ad0d8a78cc7816af6c027ee5605/7d769/ri_4.png"\n        srcset="/static/20aa0ad0d8a78cc7816af6c027ee5605/5243c/ri_4.png 240w,\n/static/20aa0ad0d8a78cc7816af6c027ee5605/ab158/ri_4.png 480w,\n/static/20aa0ad0d8a78cc7816af6c027ee5605/7d769/ri_4.png 960w,\n/static/20aa0ad0d8a78cc7816af6c027ee5605/87339/ri_4.png 1440w,\n/static/20aa0ad0d8a78cc7816af6c027ee5605/88b03/ri_4.png 1920w,\n/static/20aa0ad0d8a78cc7816af6c027ee5605/70ac7/ri_4.png 3392w"\n        sizes="(max-width: 960px) 100vw, 960px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>'}}),"\n",a.createElement(n.blockquote,null,"\n",a.createElement(n.p,null,"브라우저가 미디어 조건문에 맞는 이미지를 뿌려준다."),"\n"),"\n",a.createElement(n.hr),"\n",a.createElement(n.h1,null,"Review 💡"),"\n",a.createElement(n.p,null,"이번 포스트에는 반응형 이미지를 HTML 기법으로 구현해 보았다."),"\n",a.createElement(n.p,null,"반응형 웹 디자인을 처리할 때 사용할 수 있겠다."))}var i=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,l.ah)(),e.components);return n?a.createElement(n,e,a.createElement(c,e)):c(e)},r=t(4765);function s(e){return a.createElement(r.Z,e,a.createElement(i,e))}r.Z}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-post-query-tsx-content-file-path-content-posts-reponsive-image-index-mdx-e1e5dabe3e72c6eeec12.js.map