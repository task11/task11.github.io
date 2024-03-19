"use strict";(self.webpackChunktask11_github_io=self.webpackChunktask11_github_io||[]).push([[415],{4765:function(e,n,t){t.d(n,{F:function(){return p},Z:function(){return d}});var l=t(7294),a=t(8733),r=t(795),i=t(6920),c=t(6799),o=t(8871);var u=e=>{let{post:n}=e;return null};const s=["16px","8px","4px"].map((e=>"rgba(0, 0, 0, 0.1) 0px "+e+" "+e+" 0px"));var m=e=>{let{data:{post:n},children:t}=e;return(0,a.tZ)(i.Z,null,(0,a.tZ)(r.X6,{as:"h1",variant:"styles.h1"},n.title),(0,a.tZ)("p",{sx:{color:"secondary",mt:3,a:{color:"secondary"},fontSize:[1,1,2]}},(0,a.tZ)("time",null,n.date),n.tags&&(0,a.tZ)(l.Fragment,null," — ",(0,a.tZ)(c.Z,{tags:n.tags})),n.timeToRead&&" — ",n.timeToRead&&(0,a.tZ)("span",null,n.timeToRead," min read")),(0,a.tZ)("section",{sx:{my:5,".gatsby-resp-image-wrapper":{my:[4,4,5],borderRadius:"4px",boxShadow:s.join(", "),".gatsby-resp-image-image":{borderRadius:"4px"}},variant:"layout.content"}},t),(0,a.tZ)(u,{post:n}))};const p=e=>{var n,t,l;let{data:{post:r}}=e;return(0,a.tZ)(o.Z,{title:r.title,description:r.description?r.description:r.excerpt,image:r.banner?null===(n=r.banner)||void 0===n||null===(t=n.childImageSharp)||void 0===t||null===(l=t.resize)||void 0===l?void 0:l.src:void 0,pathname:r.slug,canonicalUrl:r.canonicalUrl})};function d(e){let{...n}=e;return l.createElement(m,n)}},6799:function(e,n,t){var l=t(8733),a=t(7294),r=t(1883),i=t(3494),c=t(9706);n.Z=e=>{let{tags:n}=e;const{tagsPath:t,basePath:o}=(0,i.Z)();return(0,l.tZ)(a.Fragment,null,n.map(((e,n)=>(0,l.tZ)(a.Fragment,{key:e.slug},!!n&&", ",(0,l.tZ)(r.Link,{sx:e=>{var n;return{...null===(n=e.styles)||void 0===n?void 0:n.a}},to:(0,c.Z)("/"+o+"/"+t+"/"+e.slug)},e.name)))))}},8871:function(e,n,t){var l=t(7294),a=t(1883),r=t(4232);n.Z=e=>{let{title:n="",description:t="",pathname:i="",image:c="",children:o=null,canonicalUrl:u=""}=e;const s=(0,r.Z)(),{siteTitle:m,siteTitleAlt:p,siteUrl:d,siteDescription:h,siteImage:g,author:E,siteLanguage:v}=s,f={title:n?n+" | "+m:p,description:t||h,url:""+d+(i||""),image:""+d+(c||g)};return l.createElement(l.Fragment,null,l.createElement("html",{lang:v}),l.createElement("title",null,f.title),l.createElement("meta",{name:"description",content:f.description}),l.createElement("meta",{name:"image",content:f.image}),l.createElement("meta",{property:"og:title",content:f.title}),l.createElement("meta",{property:"og:url",content:f.url}),l.createElement("meta",{property:"og:description",content:f.description}),l.createElement("meta",{property:"og:image",content:f.image}),l.createElement("meta",{property:"og:type",content:"website"}),l.createElement("meta",{property:"og:image:alt",content:f.description}),l.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),l.createElement("meta",{name:"twitter:title",content:f.title}),l.createElement("meta",{name:"twitter:url",content:f.url}),l.createElement("meta",{name:"twitter:description",content:f.description}),l.createElement("meta",{name:"twitter:image",content:f.image}),l.createElement("meta",{name:"twitter:image:alt",content:f.description}),l.createElement("meta",{name:"twitter:creator",content:E}),l.createElement("meta",{name:"gatsby-theme",content:"@lekoarts/gatsby-theme-minimal-blog"}),l.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:(0,a.withPrefix)("/favicon-32x32.png")}),l.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:(0,a.withPrefix)("/favicon-16x16.png")}),l.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:(0,a.withPrefix)("/apple-touch-icon.png")}),u?l.createElement("link",{rel:"canonical",href:u}):null,o)}},2451:function(e,n,t){t.r(n),t.d(n,{Head:function(){return c.F},default:function(){return o}});var l=t(7294),a=t(1151);function r(e){const n=Object.assign({blockquote:"blockquote",p:"p",h1:"h1",hr:"hr",ul:"ul",li:"li",h2:"h2",h3:"h3",span:"span",code:"code",pre:"pre"},(0,a.ah)(),e.components);return l.createElement(l.Fragment,null,l.createElement(n.blockquote,null,"\n",l.createElement(n.p,null,"💡 자바스크립트로 이중 연결 리스트를 구현해보자."),"\n"),"\n",l.createElement(n.h1,null,"개요 🛫"),"\n",l.createElement(n.hr),"\n",l.createElement(n.blockquote,null,"\n",l.createElement(n.p,null,"이번 포스트에서는 자바스크립트의 프로토타입 개념을 활용해서 이중 연결리스트를 구현할 것이다."),"\n"),"\n",l.createElement(n.p,null,"저번 포스트에서 연결리스트의 정의와 동작원리를 이해하고 메서드를 구현해보았는데, 이전 노드의 위치라는 개념이 더해진 이중 연결리스트를 이해해보고 동일하게 메서드를 구현해보았다."),"\n",l.createElement(n.p,null,"이중 연결리스트 기능은"),"\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,"노드 출력(정/역방향)"),"\n",l.createElement(n.li,null,"노드 추가"),"\n",l.createElement(n.li,null,"특정 인덱스 노드 추가"),"\n",l.createElement(n.li,null,"노드 삭제"),"\n",l.createElement(n.li,null,"특정 인덱스 노드 삭제"),"\n",l.createElement(n.li,null,"특정 노드 인덱스 출력"),"\n"),"\n",l.createElement(n.p,null,"정도로 구현하고자 한다."),"\n",l.createElement(n.h1,null,"학습 내용 📖"),"\n",l.createElement(n.hr),"\n",l.createElement(n.h2,null,"이중 연결 리스트란"),"\n",l.createElement(n.h3,null,"연결 리스트의 정의"),"\n",l.createElement(n.p,null,"추상적 자료형인 리스트를 구현한 자료구조로, Linked List라는 말 그대로 어떤 데이터 덩어리(이하 노드Node)를 저장할 때 그 다음 순서의 자료가 있는 위치를 데이터에 포함시키는 방식으로 자료를 저장한다."),"\n",l.createElement(n.blockquote,null,"\n",l.createElement(n.p,null,"이중 연결 리스트는 위와 같은 연결리스트의 개념에 더해 그 다음 순서의 자료 뿐만아니라 이전 자료의 위치를 데이터에 포함시킨다."),"\n"),"\n",l.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 400px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 32.08333333333333%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAGCAYAAADDl76dAAAACXBIWXMAABJ2AAASdgGhmNzxAAAA4ElEQVR42n2QwU6EMBCGef8n0ZvxqDGR7GnjwQRZVm+ezOJSKBRKobSfgU1XNpr9k+k0X2eamT8CsNbyK7+E96dY6z8WeFA0H845SlHSSk3XGMZhOhdoZehqg9HjmfXdsLD5LXwWchQuh1wQJ4o4tbx+fDOajkKUbJKKeDfxkgnaVlHXku1O8JxatvuGybmL6ZcJvXNUSnOXam6Sgc0+x/Ytx6LkPpHcvo08ZQLVSKSseMzKpe7hXdH3PdPKsqhoWvJjceHfX11ngzF8fh2Y5gnXhjrvcf6UwwrX2Lo3rPwDt7PRfQSPnKwAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="doubly_linked_list"\n        title=""\n        src="/static/5a1ca354630aa85fae91d1181c6af97e/6a8a8/dll_1.png"\n        srcset="/static/5a1ca354630aa85fae91d1181c6af97e/5243c/dll_1.png 240w,\n/static/5a1ca354630aa85fae91d1181c6af97e/6a8a8/dll_1.png 400w"\n        sizes="(max-width: 400px) 100vw, 400px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>'}}),"\n",l.createElement(n.h3,null,"이중 연결 리스트의 장점"),"\n",l.createElement(n.blockquote,null,"\n",l.createElement(n.p,null,"이중 연결 리스트는 단일 연결 리스트의 단점인 손상을 방지할 수 있다."),"\n"),"\n",l.createElement(n.p,null,"배열 대비 ",l.createElement(n.code,null,"이중 연결 리스트"),"가 가진 장점은 이전 포스트에서 다룬 내용과 동일하고, 추가적으로 아래같은 손상에 강하다는 장점이 있다."),"\n",l.createElement(n.blockquote,null,"\n",l.createElement(n.p,null,l.createElement(n.code,null,"이중 연결 리스트는")," Head와 Tail노드를 갖고 있다면 둘 중 하나를 가지고 전체 리스트를 순회할 수 있기 때문에 끊어진 체인을 복구하는 게 가능하다. 단일 연결 리스트는 Tail노드로는 리스트 순회가 불가능하고 Head노드 유실시 전체 자료를 다 잃어버린다."),"\n"),"\n",l.createElement(n.hr),"\n",l.createElement(n.h2,null,"이중 연결리스트 구현 with javascript"),"\n",l.createElement(n.blockquote,null,"\n",l.createElement(n.p,null,"개요에서 설명한대로 자바스크립트로 연결리스트와 메서드들을 구현한다."),"\n"),"\n",l.createElement(n.h3,null,"1. 이중 연결리스트 구현"),"\n",l.createElement(n.p,null,"Node와 LinkedList 객체를 함수로 구현하고, 프로토타입 메서드들을 선언한다."),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-javascript"},"// Data와 pointer인 next, prev를 가지고 있는 Node 객체\nfunction Node(data) {\n  this.data = data;\n  this.next = null;\n  this.prev = null;\n}\n\n// Head, tail, length를 가지고 있는 DoublyLinkedList 객체\nfunction DoublyLinkedList() {\n  this.head = null;\n  this.tail = null;\n  this.length = 0;\n}\n")),"\n",l.createElement(n.h3,null,"2. Size 메서드"),"\n",l.createElement(n.p,null,"연결 리스트 내에 노드의 개수를 출력하는 Size 메서드"),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-javascript"},"// 연결 리스트 내 노드 개수 확인\nDoublyLinkedList.prototype.size = function () {\n  return this.length;\n};\n")),"\n",l.createElement(n.h3,null,"3. isEmpty 메서드"),"\n",l.createElement(n.p,null,"연결 리스트 내에 노드 존재 여부를 파악하는 isEmpty 메서드"),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-javascript"},"// 객체 내 노드 존재 여부 파악\nDoublyLinkedList.prototype.isEmpty = function () {\n  return this.length === 0;\n};\n")),"\n",l.createElement(n.h3,null,"4. printNode 메서드"),"\n",l.createElement(n.p,null,"이중 연결 리스트 내에 노드를 정방향으로 출력하는 printNode 메서드"),"\n",l.createElement(n.p,null,l.createElement(n.code,null,"data -> data -> data -> ... -> null")),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-javascript"},'// 노드 정방향 출력\nDoublyLinkedList.prototype.printNode = function () {\n  process.stdout.write("head -> ");\n  for (let node = this.head; node != null; node = node.next) {\n    process.stdout.write(`${node.data} ->`);\n  }\n  console.log("null");\n};\n')),"\n",l.createElement(n.h3,null,"5. printNodeInverse 메서드"),"\n",l.createElement(n.p,null,"이중 연결 리스트 내에 노드를 역방향으로 출력하는 printNode 메서드"),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-javascript"},'// 노드 역방향 출력\nDoublyLinkedList.prototype.printNodeInverse = function () {\n  let temp = [];\n  process.stdout.write("null <- ");\n  for (let node = this.tail; node != null; node = node.prev) {\n    temp.push(node.data);\n  }\n  for (let i = temp.length - 1; i >= 0; i--) {\n    process.stdout.write(`${temp[i]} <-`);\n  }\n  console.log("tail");\n};\n')),"\n",l.createElement(n.h3,null,"6. append 메서드"),"\n",l.createElement(n.p,null,"연결 리스트 가장 끝에 노드를 추가하는 append 메서드"),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-javascript"},"// 연결리스트의 마지막에 노드 추가\nDoublyLinkedList.prototype.append = function (value) {\n  let node = new Node(value);\n\n  if (this.head === null) {\n    this.head = node;\n    this.tail = node;\n  } else {\n    this.tail.next = node;\n    node.prev = this.tail;\n    this.tail = node;\n  }\n\n  this.length++;\n};\n")),"\n",l.createElement(n.h3,null,"7. insert 메서드"),"\n",l.createElement(n.p,null,"연결 리스트의 특정 index(position)에 노드를 추가하는 insert 메서드"),"\n",l.createElement(n.p,null,"두 번째 인자를 비우면 0번, 즉 맨 앞에 노드를 추가한다."),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-javascript"},"// position 위치에 노드 추가\nDoublyLinkedList.prototype.insert = function (value, position = 0) {\n  if (position < 0 || position > this.length) {\n    return false;\n  }\n\n  let node = new Node(value);\n  let current = this.head;\n  let index = 0;\n  let prev; // 이전 노드 값 저장\n\n  if (position === 0) {\n    if (this.head === null) {\n      this.head = node;\n      this.tail = node;\n    } else {\n      node.next = current;\n      current.prev = node;\n      this.head = node;\n    }\n  } else if (position === this.length) {\n    current = this.tail;\n    current.next = node;\n    node.prev = current;\n    this.tail = node;\n  } else {\n    while (index++ < position) {\n      prev = current;\n      current = current.next;\n    }\n    node.next = current;\n    prev.next = node;\n\n    current.prev = node;\n    node.prev = prev;\n  }\n  this.length++;\n\n  return true;\n};\n")),"\n",l.createElement(n.h3,null,"8. remove 메서드"),"\n",l.createElement(n.p,null,"연결 리스트 내에 value 데이터를 찾아 노드를 삭제하는 remove 메서드"),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-javascript"},"// value 값 노드 remove\nDoublyLinkedList.prototype.remove = function (value) {\n  let current = this.head;\n  let prev = current;\n\n  while (current.data != value && current.next != null) {\n    prev = current;\n    current = current.next;\n  }\n\n  if (current.data != value) {\n    return null;\n  }\n\n  if (current === this.head) {\n    this.head = current.next;\n    if (this.length === 1) this.tail = null;\n    else this.head.prev = null;\n  } else if (current === this.tail) {\n    this.tail = current.prev;\n    this.tail.next = null;\n  } else {\n    prev.next = current.next;\n    current.next.prev = prev;\n  }\n\n  this.length--;\n\n  return current.data;\n};\n")),"\n",l.createElement(n.h3,null,"9. removeAt 메서드"),"\n",l.createElement(n.p,null,"연결 리스트 내에 해당 index(position)의 노드를 삭제하는 removeAt 메서드"),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-javascript"},"// removeAt() : position 위치 노드 삭제\nDoublyLinkedList.prototype.removeAt = function (position = 0) {\n  if (position < 0 || position >= this.length) {\n    return null;\n  }\n\n  let current = this.head;\n  let index = 0;\n  let prev;\n\n  if (position === 0) {\n    this.head = current.next;\n    if (this.length === 1) this.tail = null;\n    else this.head.prev = null;\n  } else if (position === this.length - 1) {\n    current = this.tail;\n    this.tail = current.prev;\n    this.tail.next = null;\n  } else {\n    while (index++ < position) {\n      prev = current;\n      current = current.next;\n    }\n    prev.next = current.next;\n    current.next.prev = prev;\n  }\n\n  this.length--;\n\n  return current.data;\n};\n")),"\n",l.createElement(n.h3,null,"10. indexOf 메서드"),"\n",l.createElement(n.p,null,"연결 리스트 내에 value 데이터 값의 index를 찾아주는 indexOf 메서드"),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-javascript"},"// value 값을 갖는 노드의 index 반환\nDoublyLinkedList.prototype.indexOf = function (value) {\n  let current = this.head;\n  let index = 0;\n\n  while (current != null) {\n    if (current.data === value) {\n      return index;\n    }\n\n    index++;\n    current = current.next;\n  }\n\n  return -1;\n};\n")),"\n",l.createElement(n.hr),"\n",l.createElement(n.h1,null,"Review 💡"),"\n",l.createElement(n.p,null,"이번 포스트에는 이중 연결 리스트의 정의와 장/단점을 알아보고, 자바스크립트로 구현까지 해보았다."),"\n",l.createElement(n.p,null,"다음은 원형 연결 리스트를 구현해볼 예정이다."))}var i=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,a.ah)(),e.components);return n?l.createElement(n,e,l.createElement(r,e)):r(e)},c=t(4765);function o(e){return l.createElement(c.Z,e,l.createElement(i,e))}c.Z}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-post-query-tsx-content-file-path-content-posts-doubly-linked-list-index-mdx-2ab0a2a19f39003c39e0.js.map