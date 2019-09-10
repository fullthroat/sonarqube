(window.webpackJsonp=window.webpackJsonp||[]).push([[294],{1000:function(e,t,n){"use strict";n.r(t),n.d(t,"OrganizationDelete",function(){return h});var a=n(365),r=n(377),i=n(412),s=n(431),o=n(0),l=n(637),c=n(367),d=n(452),u=n(14),m=n(385),b=n(408),p=n(446);class h extends a.PureComponent{constructor(){super(...arguments),this.mounted=!1,this.state={verify:""},this.fetchOrganizationPlanInfo=()=>{Object(u.isSonarCloud)()&&Object(d.e)(this.props.organization.key).then(e=>{this.mounted&&this.setState({hasPaidPlan:"inactive"!==e.subscription.status})},()=>{this.mounted&&this.setState({hasPaidPlan:!1})})},this.handleInput=e=>{this.setState({verify:e.currentTarget.value})},this.isVerified=()=>this.state.verify.toLowerCase()===this.props.organization.name.toLowerCase(),this.onDelete=()=>{const e=this.props.organization;return this.props.deleteOrganization(e.key).then(()=>{this.state.hasPaidPlan?this.props.router.replace({pathname:"/feedback/downgrade",state:{confirmationMessage:Object(o.m)("organization.deleted_x",e.name),organization:e,title:Object(o.l)("billing.downgrade.reason.title_deleted")}}):(Object(p.a)(Object(o.l)("organization.deleted")),this.props.router.replace("/"))})}}componentDidMount(){this.mounted=!0,this.fetchOrganizationPlanInfo()}componentWillUnmount(){this.mounted=!1}render(){const e=this.state.hasPaidPlan;return a.createElement("div",{className:"boxed-group boxed-group-inner"},a.createElement("h2",{className:"boxed-title"},Object(o.l)("organization.delete")),a.createElement("p",{className:"big-spacer-bottom width-50"},a.createElement(s.a,{message:Object(o.l)("organization.delete.description")})),a.createElement(i.a,{confirmButtonText:Object(o.l)("delete"),confirmDisable:!this.isVerified(),isDestructive:!0,modalBody:a.createElement("div",null,e&&a.createElement(m.a,{variant:"warning"},Object(o.l)("organization.delete.sonarcloud.paid_plan_info")),a.createElement("p",null,Object(o.l)("organization.delete.question")),a.createElement("div",{className:"spacer-top"},a.createElement("label",{htmlFor:"downgrade-organization-name"},Object(o.l)("billing.downgrade.modal.type_to_proceed")),a.createElement("div",{className:"little-spacer-top"},a.createElement("input",{autoFocus:!0,className:"input-super-large",id:"downgrade-organization-name",onChange:this.handleInput,type:"text",value:this.state.verify})))),modalHeader:Object(o.m)("organization.delete_x",this.props.organization.name),onConfirm:this.onDelete},e=>{let t=e.onClick;return a.createElement(c.a,{className:"js-custom-measure-delete button-red",onClick:t},Object(o.l)("delete"))}))}}const g={deleteOrganization:l.a};t.default=Object(b.a)(Object(r.connect)(null,g)(h))},1724:function(e,t,n){"use strict";n.r(t);var a=n(425),r=n.n(a),i=n(365),s=n(381),o=n.n(s),l=n(377),c=n(490),d=n(635),u=n(548),m=n(424),b=n(0),p=n(1),h=n(372);class g extends i.PureComponent{constructor(){super(...arguments),this.mounted=!1,this.state={},this.fetchAlmApplication=()=>Object(u.b)().then(e=>{let t=e.application;this.mounted&&this.setState({almApplication:t})}),this.handleInstallAppClick=()=>{Object(p.c)(c.a,this.props.organization.key),Object(p.c)(c.b,Date.now().toString())}}componentDidMount(){this.mounted=!0,this.fetchAlmApplication()}componentWillUnmount(){this.mounted=!1}render(){const e=this.props,t=e.currentUser,n=e.organization,a=this.state.almApplication,r=Object(m.h)(t.externalProvider||""),s=n.alm?Object(m.h)(n.alm.key):"";return i.createElement("div",{className:"boxed-group boxed-group-inner"},i.createElement("h2",{className:"boxed-title"},Object(b.m)("organization.bind_to_x",Object(b.l)(r))),n.alm?i.createElement(i.Fragment,null,i.createElement("span",null,Object(b.l)("organization.bound")),i.createElement("a",{className:"link-no-underline big-spacer-left",href:n.alm.url,rel:"noopener noreferrer",target:"_blank"},i.createElement("img",{alt:Object(b.l)(s),className:"text-text-top little-spacer-right",height:16,src:"".concat(Object(h.b)(),"/images/sonarcloud/").concat(s,".svg"),width:16}),Object(b.m)("organization.see_on_x",Object(b.l)(s)))):i.createElement(i.Fragment,null,i.createElement("p",{className:"spacer-bottom"},Object(b.m)("organization.binding_with_x_easy_sync",Object(b.l)(r))),i.createElement("p",{className:"big-spacer-bottom"},Object(b.m)("organization.app_will_be_installed_on_x",Object(b.l)(r))),a&&i.createElement(d.a,{className:"display-inline-block",identityProvider:a,onClick:this.handleInstallAppClick,small:!0,url:a.installationUrl},Object(b.l)("onboarding.import_organization.choose_the_organization_button",a.key))))}}var f=n(1e3),v=n(637),O=n(526),j=n(529),z=n(367);n.d(t,"OrganizationEdit",function(){return E});class E extends i.PureComponent{constructor(e){super(e),this.mounted=!1,this.handleAvatarInputChange=e=>{const t=e.target.value;this.setState({avatar:t}),this.changeAvatarImage(t)},this.changeAvatarImage=e=>{this.setState({avatarImage:e})},this.handleSubmit=e=>{e.preventDefault();const t={avatar:this.state.avatar,description:this.state.description,name:this.state.name,url:this.state.url};this.setState({loading:!0}),this.props.updateOrganization(this.props.organization.key,t).then(this.stopLoading,this.stopLoading)},this.stopLoading=()=>{this.mounted&&this.setState({loading:!1})},this.state={loading:!1,avatar:e.organization.avatar||"",avatarImage:e.organization.avatar||"",description:e.organization.description||"",name:e.organization.name,url:e.organization.url||""},this.changeAvatarImage=r()(this.changeAvatarImage,500)}componentDidMount(){this.mounted=!0}componentWillUnmount(){this.mounted=!1}render(){const e=this.props,t=e.currentUser,n=e.organization,a=Object(b.l)("organization.settings"),r=Object(m.c)(t),s=n.actions&&n.actions.delete;return i.createElement("div",{className:"page page-limited"},i.createElement(o.a,{title:a}),i.createElement("header",{className:"page-header"},i.createElement("h1",{className:"page-title"},a)),i.createElement("div",{className:"boxed-group boxed-group-inner"},i.createElement("h2",{className:"boxed-title"},Object(b.l)("organization.details")),i.createElement("form",{onSubmit:this.handleSubmit},i.createElement("div",{className:"form-field"},i.createElement("label",{htmlFor:"organization-name"},Object(b.l)("organization.name"),i.createElement("em",{className:"mandatory"},"*")),i.createElement("input",{className:"input-super-large",disabled:this.state.loading,id:"organization-name",maxLength:255,name:"name",onChange:e=>this.setState({name:e.target.value}),required:!0,type:"text",value:this.state.name}),i.createElement("div",{className:"form-field-description"},Object(b.l)("organization.name.description"))),i.createElement("div",{className:"form-field"},i.createElement("label",{htmlFor:"organization-avatar"},Object(b.l)("organization.avatar")),i.createElement("input",{className:"input-super-large",disabled:this.state.loading,id:"organization-avatar",maxLength:256,name:"avatar",onChange:this.handleAvatarInputChange,placeholder:Object(b.l)("onboarding.create_organization.avatar.placeholder"),type:"text",value:this.state.avatar}),i.createElement("div",{className:"form-field-description"},Object(b.l)("organization.avatar.description")),(this.state.avatarImage||this.state.name)&&i.createElement("div",{className:"spacer-top"},i.createElement("div",{className:"little-spacer-bottom"},Object(b.l)("organization.avatar.preview"),":"),i.createElement(O.a,{organization:{avatar:this.state.avatarImage||void 0,name:this.state.name||""}}))),i.createElement("div",{className:"form-field"},i.createElement("label",{htmlFor:"organization-description"},Object(b.l)("description")),i.createElement("textarea",{className:"input-super-large",disabled:this.state.loading,id:"organization-description",maxLength:256,name:"description",onChange:e=>this.setState({description:e.target.value}),rows:3,value:this.state.description}),i.createElement("div",{className:"form-field-description"},Object(b.l)("organization.description.description"))),i.createElement("div",{className:"form-field"},i.createElement("label",{htmlFor:"organization-url"},Object(b.l)("organization.url")),i.createElement("input",{className:"input-super-large",disabled:this.state.loading,id:"organization-url",maxLength:256,name:"url",onChange:e=>this.setState({url:e.target.value}),type:"text",value:this.state.url}),i.createElement("div",{className:"form-field-description"},Object(b.l)("organization.url.description"))),i.createElement(z.i,{disabled:this.state.loading},Object(b.l)("save")),this.state.loading&&i.createElement("i",{className:"spinner spacer-left"}))),r&&i.createElement(g,{currentUser:t,organization:n}),s&&i.createElement(f.default,{organization:n}))}}const x={updateOrganization:v.b};t.default=Object(l.connect)(null,x)(Object(j.a)(E))},360:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return r});var a=n(466);function r(){const e=Object(a.a)(),t=window.location.pathname+window.location.search+window.location.hash;e.replace({pathname:"/sessions/new",query:{return_to:t}})}},378:function(e,t,n){"use strict";n.d(t,"a",function(){return s});var a=n(365),r=n(405),i=n(366);function s(e){return a.createElement(r,Object.assign({className:i("modal",{"modal-small":"small"===e.size,"modal-medium":"medium"===e.size,"modal-large":"large"===e.size}),isOpen:!0,overlayClassName:i("modal-overlay",{"modal-no-backdrop":e.noBackdrop})},e))}r.setAppElement("#content")},387:function(e,t,n){"use strict";n.d(t,"a",function(){return s});var a=n(365),r=n(378),i=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&(n[a[r]]=e[a[r]])}return n};class s extends a.Component{constructor(){super(...arguments),this.mounted=!1,this.state={submitting:!1},this.stopSubmitting=()=>{this.mounted&&this.setState({submitting:!1})},this.handleCloseClick=e=>{e&&(e.preventDefault(),e.currentTarget.blur()),this.props.onClose()},this.handleFormSubmit=e=>{e.preventDefault(),this.submit()},this.handleSubmitClick=e=>{e&&(e.preventDefault(),e.currentTarget.blur()),this.submit()},this.submit=()=>{const e=this.props.onSubmit();e&&(this.setState({submitting:!0}),e.then(this.stopSubmitting,this.stopSubmitting))}}componentDidMount(){this.mounted=!0}componentWillUnmount(){this.mounted=!1}render(){const e=this.props,t=e.children,n=e.header,s=e.onClose,o=(e.onSubmit,i(e,["children","header","onClose","onSubmit"]));return a.createElement(r.a,Object.assign({contentLabel:n,onRequestClose:s},o),t({onCloseClick:this.handleCloseClick,onFormSubmit:this.handleFormSubmit,onSubmitClick:this.handleSubmitClick,submitting:this.state.submitting}))}}},396:function(e,t,n){"use strict";n.d(t,"a",function(){return l});var a=n(365),r=n(387),i=n(375),s=n(367),o=n(0);class l extends a.PureComponent{constructor(){super(...arguments),this.mounted=!1,this.handleSubmit=()=>{const e=this.props.onConfirm(this.props.confirmData);return e?e.then(this.props.onClose,()=>{}):void this.props.onClose()},this.renderModalContent=e=>{let t=e.onCloseClick,n=e.onFormSubmit,r=e.submitting;const l=this.props,c=l.children,d=l.confirmButtonText,u=l.confirmDisable,m=l.header,b=l.headerDescription,p=l.isDestructive,h=l.cancelButtonText,g=void 0===h?Object(o.l)("cancel"):h;return a.createElement("form",{onSubmit:n},a.createElement("header",{className:"modal-head"},a.createElement("h2",null,m),b),a.createElement("div",{className:"modal-body"},c),a.createElement("footer",{className:"modal-foot"},a.createElement(i.a,{className:"spacer-right",loading:r}),a.createElement(s.i,{autoFocus:!0,className:p?"button-red":void 0,disabled:r||u},d),a.createElement(s.h,{disabled:r,onClick:t},g)))}}componentDidMount(){this.mounted=!0}componentWillUnmount(){this.mounted=!1}render(){const e=this.props,t={header:e.header,onClose:e.onClose,noBackdrop:e.noBackdrop,size:e.size};return a.createElement(r.a,Object.assign({onSubmit:this.handleSubmit},t),this.renderModalContent)}}},412:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var a=n(365),r=n(396),i=n(413),s=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&(n[a[r]]=e[a[r]])}return n};class o extends a.PureComponent{constructor(){super(...arguments),this.renderConfirmModal=e=>{let t=e.onClose;const n=this.props,i=(n.children,n.modalBody),o=n.modalHeader,l=n.modalHeaderDescription,c=s(n,["children","modalBody","modalHeader","modalHeaderDescription"]);return a.createElement(r.a,Object.assign({header:o,headerDescription:l,onClose:t},c),i)}}render(){return a.createElement(i.a,{modal:this.renderConfirmModal},this.props.children)}}},413:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var a=n(365);class r extends a.PureComponent{constructor(){super(...arguments),this.mounted=!1,this.state={modal:!1},this.handleButtonClick=()=>{this.setState({modal:!0})},this.handleFormSubmit=e=>{e&&e.preventDefault(),this.setState({modal:!0})},this.handleCloseModal=()=>{this.mounted&&this.setState({modal:!1})}}componentDidMount(){this.mounted=!0}componentWillUnmount(){this.mounted=!1}render(){return a.createElement(a.Fragment,null,this.props.children({onClick:this.handleButtonClick,onFormSubmit:this.handleFormSubmit}),this.state.modal&&this.props.modal({onClose:this.handleCloseModal}))}}},424:function(e,t,n){"use strict";n.d(t,"a",function(){return r}),n.d(t,"b",function(){return i}),n.d(t,"c",function(){return s}),n.d(t,"d",function(){return o}),n.d(t,"e",function(){return l}),n.d(t,"g",function(){return c}),n.d(t,"f",function(){return d}),n.d(t,"h",function(){return u});var a=n(392);function r(e,t){return t.endsWith("/")||(t+="/"),l(e)?t.replace("github.com/","github.com/orgs/")+"people":t+"profile/members"}function i(e){return Object(a.b)(e)&&e.externalProvider?u(e.externalProvider):void 0}function s(e){return Object(a.b)(e)&&(o(e.externalProvider)||l(e.externalProvider))}function o(e){return!!e&&e.startsWith("bitbucket")}function l(e){return"github"===e}function c(e){return"microsoft"===e}function d(e){return Boolean(e&&e.personal)}function u(e){return o(e)?"bitbucket":e}},446:function(e,t,n){"use strict";n.d(t,"a",function(){return i});var a=n(428),r=n(422);function i(e){Object(a.default)().dispatch(r.b(e))}},490:function(e,t,n){"use strict";n.d(t,"c",function(){return d}),n.d(t,"d",function(){return u}),n.d(t,"a",function(){return m}),n.d(t,"b",function(){return b}),n.d(t,"e",function(){return p}),n.d(t,"f",function(){return h}),n.d(t,"g",function(){return g}),n.d(t,"h",function(){return f});var a=n(16),r=n.n(a),i=n(0),s=n(376),o=n(486),l=n(424),c=n(634);const d="sonarcloud.import_org.binding_in_progress",u="sonarcloud.import_org.redirect_to_projects",m="sonarcloud.bind_org.key",b="sonarcloud.bind_org.redirect_to_org";var p;function h(e,t){const n=Object(s.formatMeasure)(e,"FLOAT").replace(/[.|,]0$/,"").replace(/([.|,]\d)$/,"$10");return t?n:Object(i.m)("billing.price_format",n)}!function(e){e[e.OrganizationDetails=0]="OrganizationDetails",e[e.Plan=1]="Plan"}(p||(p={}));const g=r()(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=void 0,n=void 0;if(e.installation_id)n="github",t=Object(o.f)(e.installation_id);else if(e.clientKey)n="bitbucket",t=Object(o.f)(e.clientKey);else if(e.jwt){const a=Object(c.a)(e.jwt);a&&a.iss&&(n="bitbucket",t=a.iss)}return{almInstallId:t,almKey:n}}),f=e=>Object(o.a)({installation_id:Object(l.e)(e.almKey)?Object(o.l)(e.almInstallId):void 0,clientKey:Object(l.d)(e.almKey)?Object(o.l)(e.almInstallId):void 0})},529:function(e,t,n){"use strict";n.d(t,"a",function(){return l});var a=n(365),r=n(454),i=n(516),s=n(392),o=n(360);function l(e){class t extends a.Component{componentDidMount(){Object(s.b)(this.props.currentUser)||Object(o.default)()}render(){return Object(s.b)(this.props.currentUser)?a.createElement(e,Object.assign({},this.props)):null}}return t.displayName=Object(r.a)(e,"whenLoggedIn"),Object(i.a)(t)}},548:function(e,t,n){"use strict";n.d(t,"a",function(){return i}),n.d(t,"b",function(){return s}),n.d(t,"c",function(){return o}),n.d(t,"e",function(){return l}),n.d(t,"f",function(){return c}),n.d(t,"g",function(){return d}),n.d(t,"d",function(){return u});var a=n(4),r=n(383);function i(e){return Object(a.post)("/api/alm_integration/bind_organization",e).catch(r.a)}function s(){return Object(a.getJSON)("/api/alm_integration/show_app_info").catch(r.a)}function o(e){return Object(a.requestTryAndRepeatUntil)(()=>Object(a.getJSON)("/api/alm_integration/show_organization",e),{max:25,slowThreshold:20},()=>!0,[404]).catch(r.a).then(e=>{let t=e.almOrganization,n=e.boundOrganization;return{almOrganization:Object.assign({},t,{name:t.name||t.key}),boundOrganization:n}})}function l(e){return Object(a.getJSON)("/api/alm_integration/list_repositories",e).catch(r.a)}function c(){return Object(a.getJSON)("/api/alm_integration/list_unbound_applications").then(e=>{return e.applications.map(e=>Object.assign({},e,{name:e.name||e.key}))},r.a)}function d(e){return Object(a.postJSON)("/api/alm_integration/provision_projects",Object.assign({},e,{installationKeys:e.installationKeys.join(",")})).catch(r.a)}function u(e){const t=e.replace("https://github.com/","https://api.github.com/repos/");return Object(a.getCorsJSON)("".concat(t,"/languages"))}},634:function(e,t,n){"use strict";n.d(t,"b",function(){return r}),n.d(t,"c",function(){return i}),n.d(t,"a",function(){return s});const a={};function r(e){return e.replace(/[^\u0000-\u007E]/g,e=>a[e]||e)}function i(e){return r(e.trim().toLowerCase()).replace(/&/g,"-and-").replace(/[^\w-]+/g,"-").replace(/\s+/g,"-").replace(/[·\/_,:;]/g,"-").replace(/--+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}function s(e){const t=e.split("."),n=(t.length>1?t[1]:t[0]).replace(/-/g,"+").replace(/_/g,"/");return JSON.parse(window.atob(n))}[{base:"A",letters:"AⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ"},{base:"AA",letters:"Ꜳ"},{base:"AE",letters:"ÆǼǢ"},{base:"AO",letters:"Ꜵ"},{base:"AU",letters:"Ꜷ"},{base:"AV",letters:"ꜸꜺ"},{base:"AY",letters:"Ꜽ"},{base:"B",letters:"BⒷＢḂḄḆɃƂƁ"},{base:"C",letters:"CⒸＣĆĈĊČÇḈƇȻꜾ"},{base:"D",letters:"DⒹＤḊĎḌḐḒḎĐƋƊƉꝹ"},{base:"DZ",letters:"ǱǄ"},{base:"Dz",letters:"ǲǅ"},{base:"E",letters:"EⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎ"},{base:"F",letters:"FⒻＦḞƑꝻ"},{base:"G",letters:"GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ"},{base:"H",letters:"HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ"},{base:"I",letters:"IⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ"},{base:"J",letters:"JⒿＪĴɈ"},{base:"K",letters:"KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ"},{base:"L",letters:"LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ"},{base:"LJ",letters:"Ǉ"},{base:"Lj",letters:"ǈ"},{base:"M",letters:"MⓂＭḾṀṂⱮƜ"},{base:"N",letters:"NⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ"},{base:"NJ",letters:"Ǌ"},{base:"Nj",letters:"ǋ"},{base:"O",letters:"OⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ"},{base:"OI",letters:"Ƣ"},{base:"OO",letters:"Ꝏ"},{base:"OU",letters:"Ȣ"},{base:"OE",letters:"Œ"},{base:"oe",letters:"œ"},{base:"P",letters:"PⓅＰṔṖƤⱣꝐꝒꝔ"},{base:"Q",letters:"QⓆＱꝖꝘɊ"},{base:"R",letters:"RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ"},{base:"S",letters:"SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ"},{base:"T",letters:"TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ"},{base:"TZ",letters:"Ꜩ"},{base:"U",letters:"UⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ"},{base:"V",letters:"VⓋＶṼṾƲꝞɅ"},{base:"VY",letters:"Ꝡ"},{base:"W",letters:"WⓌＷẀẂŴẆẄẈⱲ"},{base:"X",letters:"XⓍＸẊẌ"},{base:"Y",letters:"YⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ"},{base:"Z",letters:"ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ"},{base:"a",letters:"aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐ"},{base:"aa",letters:"ꜳ"},{base:"ae",letters:"æǽǣ"},{base:"ao",letters:"ꜵ"},{base:"au",letters:"ꜷ"},{base:"av",letters:"ꜹꜻ"},{base:"ay",letters:"ꜽ"},{base:"b",letters:"bⓑｂḃḅḇƀƃɓ"},{base:"c",letters:"cⓒｃćĉċčçḉƈȼꜿↄ"},{base:"d",letters:"dⓓｄḋďḍḑḓḏđƌɖɗꝺ"},{base:"dz",letters:"ǳǆ"},{base:"e",letters:"eⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ"},{base:"f",letters:"fⓕｆḟƒꝼ"},{base:"g",letters:"gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ"},{base:"h",letters:"hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ"},{base:"hv",letters:"ƕ"},{base:"i",letters:"iⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı"},{base:"j",letters:"jⓙｊĵǰɉ"},{base:"k",letters:"kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ"},{base:"l",letters:"lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ"},{base:"lj",letters:"ǉ"},{base:"m",letters:"mⓜｍḿṁṃɱɯ"},{base:"n",letters:"nⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥ"},{base:"nj",letters:"ǌ"},{base:"o",letters:"oⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ"},{base:"oi",letters:"ƣ"},{base:"ou",letters:"ȣ"},{base:"oo",letters:"ꝏ"},{base:"p",letters:"pⓟｐṕṗƥᵽꝑꝓꝕ"},{base:"q",letters:"qⓠｑɋꝗꝙ"},{base:"r",letters:"rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ"},{base:"s",letters:"sⓢｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ"},{base:"t",letters:"tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ"},{base:"tz",letters:"ꜩ"},{base:"u",letters:"uⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ"},{base:"v",letters:"vⓥｖṽṿʋꝟʌ"},{base:"vy",letters:"ꝡ"},{base:"w",letters:"wⓦｗẁẃŵẇẅẘẉⱳ"},{base:"x",letters:"xⓧｘẋẍ"},{base:"y",letters:"yⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ"},{base:"z",letters:"zⓩｚźẑżžẓẕƶȥɀⱬꝣ"}].forEach(e=>e.letters.split("").forEach(t=>{a[t]=e.base}))},635:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var a=n(365),r=n(366),i=n(588),s=n(372);n(666);function o(e){let t=e.children,n=e.className,o=e.identityProvider,l=e.onClick,c=e.small,d=e.url;const u=c?14:20;return a.createElement("a",{className:r("identity-provider-link",{"dark-text":!Object(i.b)(o.backgroundColor),small:c},n),href:d,onClick:l,style:{backgroundColor:o.backgroundColor}},a.createElement("img",{alt:o.name,height:u,src:Object(s.b)()+o.iconPath,width:u}),t)}},637:function(e,t,n){"use strict";n.d(t,"b",function(){return o}),n.d(t,"a",function(){return l});var a=n(452),r=n(561),i=n(422),s=n(0);function o(e,t){return n=>a.l(e,t).then(()=>{n(r.h(e,t)),n(Object(i.b)(Object(s.l)("organization.updated")))})}function l(e){return t=>a.c(e).then(()=>{t(r.c(e))})}},666:function(e,t,n){var a=n(667);"string"==typeof a&&(a=[[e.i,a,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(369)(a,r);a.locals&&(e.exports=a.locals)},667:function(e,t,n){(e.exports=n(368)(!1)).push([e.i,'a.identity-provider-link{display:block;width:auto;line-height:22px;padding:8px 12px;border:1px solid rgba(0,0,0,.15);border-radius:2px;box-sizing:border-box;background-color:#236a97;color:#fff;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}a.identity-provider-link.small{line-height:14px;padding:4px 8px}a.identity-provider-link:focus,a.identity-provider-link:hover{box-shadow:inset 0 0 0 100px hsla(0,0%,100%,.1)}a.identity-provider-link.dark-text{color:#777}a.identity-provider-link.dark-text:focus,a.identity-provider-link.dark-text:hover{box-shadow:inset 0 0 0 100px rgba(0,0,0,.1)}a.identity-provider-link>img{padding-right:12px}a.identity-provider-link.small>img{padding-right:8px}a.identity-provider-link>span:before{content:"";opacity:.4;border-left:1px solid #b4b4b4;margin-right:12px}',""])}}]);
//# sourceMappingURL=294.m.7ad4ff8e.chunk.js.map