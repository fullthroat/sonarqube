(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{478:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var r=n(365),c=n(370);function o(e){let t=e.className,n=e.fill,o=void 0===n?"currentColor":n,s=e.size;return r.createElement(c.a,{className:t,size:s},r.createElement("path",{d:"M12 9.25v2.5A2.25 2.25 0 0 1 9.75 14h-6.5A2.25 2.25 0 0 1 1 11.75v-6.5A2.25 2.25 0 0 1 3.25 3h5.5c.14 0 .25.11.25.25v.5c0 .14-.11.25-.25.25h-5.5C2.562 4 2 4.563 2 5.25v6.5c0 .688.563 1.25 1.25 1.25h6.5c.688 0 1.25-.563 1.25-1.25v-2.5c0-.14.11-.25.25-.25h.5c.14 0 .25.11.25.25zm3-6.75v4c0 .273-.227.5-.5.5a.497.497 0 0 1-.352-.148l-1.375-1.375L7.68 10.57a.27.27 0 0 1-.18.078.27.27 0 0 1-.18-.078l-.89-.89a.27.27 0 0 1-.078-.18.27.27 0 0 1 .078-.18l5.093-5.093-1.375-1.375A.497.497 0 0 1 10 2.5c0-.273.227-.5.5-.5h4c.273 0 .5.227.5.5z",style:{fill:o}}))}},483:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var r=n(365),c=n(370);function o(e){let t=e.className,n=e.fill,o=void 0===n?"currentColor":n,s=e.size;return r.createElement(c.a,{className:t,size:s},r.createElement("path",{d:"M7.72 11.596L3.119 6.992A.382.382 0 0 1 3 6.713c0-.108.04-.2.118-.279l1.03-1.03a.382.382 0 0 1 .278-.117c.108 0 .201.04.28.117L8 8.7l3.294-3.295a.382.382 0 0 1 .28-.117c.108 0 .2.04.279.117l1.03 1.03a.382.382 0 0 1 .117.28c0 .107-.04.2-.118.278L8.28 11.596a.382.382 0 0 1-.279.117.382.382 0 0 1-.28-.117z",style:{fill:o}}))}},485:function(e,t,n){"use strict";n.r(t);var r=n(365),c=n(366),o=n(704),s=n.n(o),a=n(755),l=n.n(a),i=n(757),u=n.n(i),h=n(1036),p=n.n(h),d=n(371),f=n(478),m=n(14),g=n(506),b=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var c=0;for(r=Object.getOwnPropertySymbols(e);c<r.length;c++)t.indexOf(r[c])<0&&(n[r[c]]=e[r[c]])}return n};const O="/#sonarcloud#/",v="/#sonarqube#/",y="/#sonarqube-admin#/";var E=Object(g.a)(class extends r.PureComponent{constructor(){super(...arguments),this.handleClickOnAnchor=e=>{const t=this.props,n=t.customProps,r=t.href,c=void 0===r?"#":r;n&&n.onAnchorClick&&n.onAnchorClick(c,e)}}render(){const e=this.props,t=e.children,n=e.href,c=(e.customProps,b(e,["children","href","customProps"]));if(n&&n.startsWith("#"))return r.createElement("a",{href:"#",onClick:this.handleClickOnAnchor},t);if(n&&n.startsWith("/")){if(n.startsWith(O))return r.createElement(k,{url:n},t);if(n.startsWith(v))return r.createElement(w,{url:n},t);if(n.startsWith(y))return r.createElement(j,{canAdmin:this.props.appState.canAdmin,url:n},t);{const e="/documentation"+n;return r.createElement(d.Link,Object.assign({to:e},c),t)}}return r.createElement(r.Fragment,null,r.createElement("a",Object.assign({href:n,rel:"noopener noreferrer",target:"_blank"},c),t),r.createElement(f.a,{className:"text-muted little-spacer-left little-spacer-right text-baseline",size:12}))}});function k(e){let t=e.children,n=e.url;if(Object(m.isSonarCloud)()){const e="/".concat(n.substr(O.length));return r.createElement(d.Link,{to:e},t)}return r.createElement(r.Fragment,null,t)}function w(e){let t=e.children,n=e.url;if(Object(m.isSonarCloud)())return r.createElement(r.Fragment,null,t);{const e="/".concat(n.substr(v.length));return r.createElement(d.Link,{target:"_blank",to:e},t)}}function j(e){let t=e.canAdmin,n=e.children,c=e.url;if(Object(m.isSonarCloud)()||!t)return r.createElement(r.Fragment,null,n);{const e="/".concat(c.substr(y.length));return r.createElement(d.Link,{target:"_blank",to:e},n)}}var x=n(372),C=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var c=0;for(r=Object.getOwnPropertySymbols(e);c<r.length;c++)t.indexOf(r[c])<0&&(n[r[c]]=e[r[c]])}return n};function S(e){const t=e.alt,n=e.src,c=C(e,["alt","src"]);return r.createElement("img",Object.assign({alt:t,className:"max-width-100",src:Object(x.b)()+"/images/embed-doc"+n},c))}var A=n(16),N=n.n(A),P=n(425),L=n.n(P),z=n(500),F=n(1037),H=n.n(F);function W(){return this.use(u.a),function(e){const t=H()(e,{heading:"doctoc",maxDepth:2});null!==t.index&&-1!==t.index&&t.map?e.children=[t.map]:e.children=[]}}var M=n(0);class _ extends r.PureComponent{constructor(e){super(e),this.node=null,this.state={anchors:[]},this.scrollHandler=()=>{const e=Object(z.findDOMNode)(this);if(!e||!e.parentNode)return;const t=e.parentNode.querySelectorAll("h2[id]"),n=window.pageYOffset||document.body.scrollTop;let r;for(let e=0,c=t.length;e<c&&!(t.item(e).offsetTop>n+120);e++)r="#".concat(t.item(e).id);this.setState({highlightAnchor:r})},this.debouncedScrollHandler=L()(this.scrollHandler)}static getDerivedStateFromProps(e){const t=e.content;return{anchors:_.getAnchors(t)}}componentDidMount(){window.addEventListener("scroll",this.debouncedScrollHandler,!0),this.scrollHandler()}componentWillUnmount(){window.removeEventListener("scroll",this.debouncedScrollHandler,!0)}render(){const e=this.state,t=e.anchors,n=e.highlightAnchor;return 0===t.length?null:r.createElement("div",{className:"markdown-toc"},r.createElement("div",{className:"markdown-toc-content"},r.createElement("h4",null,Object(M.l)("documentation.on_this_page")),t.map(e=>r.createElement("a",{className:c({active:n===e.href}),href:e.href,key:e.title,onClick:t=>{this.props.onAnchorClick(e.href,t)}},e.title))))}}_.getAnchors=N()(e=>{const t=s()().use(l.a).use(W).processSync("\n## doctoc\n"+e);if(t&&t.contents.props.children){let e=t.contents,n=10;for(;n&&e.props.children.length&&"ul"!==e.type;)e=e.props.children[0],n--;if("ul"===e.type&&e.props.children.length)return e.props.children.map(e=>{if("string"==typeof e)return null;const t=e.props.children[0];return{href:t.props.href,title:t.props.children[0]}}).filter(e=>e)}return[]});var q=n(752),D=n.n(q),T=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var c=0;for(r=Object.getOwnPropertySymbols(e);c<r.length;c++)t.indexOf(r[c])<0&&(n[r[c]]=e[r[c]])}return n};const R="/#sonarcloud#/";function I(e){var t=e.children,n=e.customProps,c=e.href,o=T(e,["children","customProps","href"]);return n&&D()(n,(e,t)=>{c&&(c=c.replace("#".concat(t,"#"),encodeURIComponent(e)))}),c&&c.startsWith("/")?(c=c.startsWith(R)?"/".concat(c.substr(R.length)):"/documentation/".concat(c.substr(1)),r.createElement(d.Link,Object.assign({rel:"noopener noreferrer",target:"_blank",to:c},o),t)):r.createElement(r.Fragment,null,r.createElement("a",Object.assign({href:c,rel:"noopener noreferrer",target:"_blank"},o),t),r.createElement(f.a,{className:"little-spacer-left little-spacer-right text-baseline",size:12}))}var J=n(496);class U extends r.PureComponent{constructor(){super(...arguments),this.state={open:!1},this.handleClick=e=>{this.setState(e=>({open:!e.open})),e.stopPropagation(),e.preventDefault()}}renderTitle(e){return r.createElement("a",{"aria-expanded":this.state.open,"aria-haspopup":!0,className:"link-no-underline",href:"#",onClick:this.handleClick},r.createElement(J.a,{className:"text-middle little-spacer-right",open:this.state.open}),e.props?e.props.children:e)}render(){const e=r.Children.toArray(this.props.children);if(e.length<1)return null;const t=r.Children.toArray(e[0].props.children);return t.length<2?null:r.createElement("div",{className:"collapse-container"},this.renderTitle(t[0]),this.state.open&&t.slice(1))}}var Y=n(754),$=n(488);n.d(t,"default",function(){return B});class B extends r.PureComponent{constructor(){super(...arguments),this.node=null,this.handleAnchorClick=(e,t)=>{if(this.node){const n=this.node.querySelector(e);n&&(t.preventDefault(),Object($.b)(n,{bottomOffset:window.innerHeight-80}),history.pushState&&history.pushState(null,"",e))}}}render(){const e=this.props,t=e.childProps,n=e.content,o=e.className,a=e.displayH1,i=e.stickyToc,h=e.isTooltip,d=Object(Y.separateFrontMatter)(n||""),f=Object(Y.filterContent)(d.content),m=s()();return m.use(p.a,{danger:{classes:"alert alert-danger"},warning:{classes:"alert alert-warning"},info:{classes:"alert alert-info"},success:{classes:"alert alert-success"},collapse:{classes:"collapse"}}).use(l.a,{remarkReactComponents:{div:K,a:h?G(I,t):G(E,{onAnchorClick:this.handleAnchorClick}),img:S},toHast:{},sanitize:!1}).use(u.a),r.createElement("div",{className:c("markdown",o,{"has-toc":i}),ref:e=>this.node=e},r.createElement("div",{className:"markdown-content"},a&&r.createElement("h1",{className:"documentation-title"},d.frontmatter.title),m.processSync(f).contents),i&&r.createElement(_,{content:f,onAnchorClick:this.handleAnchorClick}))}}function G(e,t){return function(n){return r.createElement(e,Object.assign({customProps:t},n))}}function K(e){return e.className?e.className.includes("collapse")?r.createElement(U,null,e.children):r.createElement("div",{className:c("cut-margins",e.className)},e.children):e.children}},496:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var r=n(365),c=n(483),o=n(504),s=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var c=0;for(r=Object.getOwnPropertySymbols(e);c<r.length;c++)t.indexOf(r[c])<0&&(n[r[c]]=e[r[c]])}return n};function a(e){var t=e.open,n=s(e,["open"]);return t?r.createElement(c.a,Object.assign({},n)):r.createElement(o.a,Object.assign({},n))}},506:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var r=n(365),c=n(377),o=n(454),s=n(379);function a(e){class t extends r.Component{render(){return r.createElement(e,Object.assign({},this.props))}}return t.displayName=Object(o.a)(e,"withAppState"),Object(c.connect)(function(e){return{appState:Object(s.getAppState)(e)}})(t)}},754:function(e,t,n){"use strict";function r(e){let t,n;for(let r=0;r<e.length;r++){if("---"===e[r].trim()){if(void 0!==t){n=r;break}t=r}}return void 0!==n?{firstLine:t,lastLine:n}:void 0}function c(e){const t={};for(let n=0;n<e.length;n++){const r=e[n].split(":").map(e=>e.trim());2===r.length&&(t[r[0]]=r[1])}return t}function o(e,t){const n="\x3c!-- ".concat(t," --\x3e"),r="\x3c!-- /".concat(t," --\x3e");let c=e,o=c.indexOf(n),s=c.indexOf(r);for(;-1!==o&&-1!==s;)o=(c=c.substring(0,o)+c.substring(s+r.length)).indexOf(n),s=c.indexOf(r);return c}e.exports={getFrontMatter:function(e){const t=e.split("\n"),n=r(t);return n?c(t.slice(n.firstLine+1,n.lastLine)):{}},separateFrontMatter:function(e){const t=e.split("\n"),n=r(t);if(n){const e=c(t.slice(n.firstLine+1,n.lastLine)),r=t.slice(n.lastLine+1).join("\n");return{frontmatter:e,content:r}}return{frontmatter:{},content:e}},filterContent:function(e){const t="\x3c!-- \\/?(sonarqube|sonarcloud|static) --\x3e",r=n(14),c=r.isSonarCloud,s=r.getInstance,a=o(e.replace(/{instance}/gi,s()),"static");return(c()?o(a,"sonarqube"):o(a,"sonarcloud")).replace(new RegExp("^".concat(t,"(\n|\r|\r\n|$)"),"gm"),"").replace(new RegExp("".concat(t),"g"),"")}}}}]);
//# sourceMappingURL=20.m.b6592225.chunk.js.map