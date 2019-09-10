(window.webpackJsonp=window.webpackJsonp||[]).push([[302],{1000:function(e,t,n){"use strict";n.d(t,"b",function(){return s}),n.d(t,"e",function(){return u}),n.d(t,"c",function(){return m}),n.d(t,"d",function(){return g}),n.d(t,"f",function(){return f}),n.d(t,"g",function(){return h}),n.d(t,"h",function(){return v}),n.d(t,"i",function(){return b}),n.d(t,"a",function(){return y});var r=n(1001),a=n.n(r),l=n(38),i=n(713),o=n(853),c=function(){return(c=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)};function s(){return Object(l.getJSON)("/api/plugins/available").catch(i.a)}function u(){return Object(l.getJSON)("/api/plugins/pending").catch(i.a)}function p(e){return e?["COMPATIBLE","REQUIRES_SYSTEM_UPGRADE","DEPS_REQUIRE_SYSTEM_UPGRADE"].map(function(t){var n=a()(e,function(e){return e.status===t});return n>-1?e[n]:void 0}).filter(o.a):[]}function d(e,t){if(!t)return e;var n=t.indexOf(e),r=n>0?t.slice(0,n):[];return c({},e,{previousUpdates:r})}function m(){return Object(l.getJSON)("/api/plugins/installed",{f:"category"}).then(function(e){return e.plugins},i.a)}function g(){return Promise.all([Object(l.getJSON)("/api/plugins/installed",{f:"category"}),Object(l.getJSON)("/api/plugins/updates")]).then(function(e){var t=e[0],n=e[1];return t.plugins.map(function(e){var t=n.plugins.find(function(t){return t.key===e.key});return t?c({},t,e,{updates:p(t.updates).map(function(e){return d(e,t.updates)})}):e})}).catch(i.a)}function f(){return Promise.all([Object(l.getJSON)("/api/plugins/updates"),Object(l.getJSON)("/api/plugins/installed")]).then(function(e){var t=e[0],n=e[1];return t.plugins.map(function(e){var t=p(e.updates).map(function(t){return d(t,e.updates)}),r=n.plugins.find(function(t){return t.key===e.key});return r?c({},r,e,{updates:t}):c({},e,{updates:t})})}).catch(i.a)}function h(e){return Object(l.post)("/api/plugins/install",e).catch(i.a)}function v(e){return Object(l.post)("/api/plugins/uninstall",e).catch(i.a)}function b(e){return Object(l.post)("/api/plugins/update",e).catch(i.a)}function y(){return Object(l.post)("/api/plugins/cancel_all").catch(i.a)}},1001:function(e,t,n){var r=n(817),a=n(111),l=n(788),i=Math.max,o=Math.min;e.exports=function(e,t,n){var c=null==e?0:e.length;if(!c)return-1;var s=c-1;return void 0!==n&&(s=l(n),s=n<0?i(c+s,0):o(s,c-1)),r(e,a(t,3),s,!0)}},1706:function(e,t,n){var r=n(1707);"string"==typeof r&&(r=[[e.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};n(699)(r,a);r.locals&&(e.exports=r.locals)},1707:function(e,t,n){(e.exports=n(698)(!1)).push([e.i,".marketplace-editions{display:flex;flex-direction:row;margin-left:-8px;margin-right:-8px}.marketplace-edition{position:relative;flex:1;display:flex;flex-direction:column;justify-content:space-between;margin-left:8px;margin-right:8px;max-width:50%}.marketplace-edition .markdown img{width:16px}.marketplace-edition .markdown h3{font-size:14px;margin-top:0}.marketplace-edition-badge{position:absolute;right:-1px;top:16px;padding:4px 8px;border-radius:2px 0 0 2px;height:inherit;line-height:inherit}.marketplace-edition-action{display:flex;align-items:baseline;justify-content:space-between}.marketplace-plugin-table{table-layout:fixed;width:100%}.marketplace-plugin-license{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}",""])},2003:function(e,t,n){"use strict";n.r(t);var r=n(695),a=n(705),l=n(874),i=n.n(l),o=n(712),c=n.n(o),s=n(711),u=n.n(s),p=n(28);function d(e){var t=e.currentEdition;return r.createElement("header",{className:"page-header",id:"marketplace-header"},r.createElement("h1",{className:"page-title"},Object(p.l)("marketplace.page")),t&&r.createElement("h3",{className:"page-description"},Object(p.l)("marketplace.page.you_are_running",t)),r.createElement("p",{className:"page-description"},"datacenter"===t?Object(p.l)("marketplace.page.description_best_edition"):Object(p.l)("marketplace.page.description")))}var m="### ![SonarSource logo](/images/sonarsource-icon.png) Data Center Edition\n\nSupport for High-Availability. Allow every node of SonarQube to be redundant, in order to keep the service up at all times without worrying about downtime or interruption.\n",g="### ![SonarSource logo](/images/sonarsource-icon.png) Developer Edition\n\n* Branch and Pull Requests analysis\n* Analysis of additional languages: C/C++, Objective-C, PL/SQL, ABAP , TSQL , Swift\n* Detection of security vulnerabilities\n* SonarLint notifications\n\n",f="### ![SonarSource logo](/images/sonarsource-icon.png) Enterprise Edition\n\n* Portfolio management\n* Executive reporting\n* Analysis of additional languages: Apex, COBOL, PL/I, RPG & VB6\n* Parallel processing of analysis reports\n* Project transfer\n",h=n(932),v=n(710),b=Object(v.a)(function(){return Promise.all([n.e(8),n.e(10)]).then(n.bind(null,824))});function y(e){var t=e.edition,n=e.ncloc,a=e.serverId,l=e.currentEdition;return r.createElement("div",{className:"boxed-group boxed-group-inner marketplace-edition"},"datacenter"===t.key&&r.createElement(b,{content:m}),"developer"===t.key&&r.createElement(b,{content:g}),"enterprise"===t.key&&r.createElement(b,{content:f}),r.createElement("div",{className:"marketplace-edition-action spacer-top"},r.createElement("a",{href:Object(h.d)(t,{ncloc:n,serverId:a,sourceEdition:l}),rel:"noopener noreferrer",target:"_blank"},Object(p.l)("marketplace.ask_for_information"))))}var E,O=n(898),k=(E=function(e,t){return(E=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}E(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),_=function(){return(_=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},j=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.mounted=!1,t.state={},t.fetchData=function(){Object(O.b)().then(function(e){t.mounted&&t.setState(_({},e))},function(){})},t}return k(t,e),t.prototype.componentDidMount=function(){this.mounted=!0,this.fetchData()},t.prototype.componentWillUnmount=function(){this.mounted=!1},t.prototype.render=function(){var e=this.props.currentEdition,t=this.state,n=t.serverId,a=t.ncloc,l=h.a.findIndex(function(t){return t.key===e}),i=h.a.slice(l+1);return i.length<=0?null:r.createElement("div",{className:"spacer-bottom marketplace-editions"},i.map(function(t){return r.createElement(y,{currentEdition:e,edition:t,key:t.key,ncloc:a,serverId:n})}))},t}(r.PureComponent);function P(e){var t=e.total;return r.createElement("footer",{className:"spacer-top note text-center"},Object(p.m)("x_show",t))}var N=n(729),x=n(704);function w(e){var t=e.release,n=e.update;return r.createElement("li",{className:"big-spacer-bottom"},r.createElement("div",{className:"little-spacer-bottom"},"COMPATIBLE"!==n.status&&n.status?r.createElement(x.a,{overlay:Object(p.l)("marketplace.update_status",n.status)},r.createElement("span",{className:"js-plugin-changelog-version badge badge-warning spacer-right"},t.version)):r.createElement("span",{className:"js-plugin-changelog-version badge badge-success spacer-right"},t.version),r.createElement("span",{className:"js-plugin-changelog-date note spacer-right"},r.createElement(N.a,{date:t.date})),t.changeLogUrl&&r.createElement("a",{className:"js-plugin-changelog-link",href:t.changeLogUrl,target:"_blank"},Object(p.l)("marketplace.release_notes"))),r.createElement("div",{className:"js-plugin-changelog-description"},t.description))}function C(e){var t=e.release,n=e.update;return r.createElement("div",{className:"abs-width-300"},r.createElement("h6",null,Object(p.l)("changelog")),r.createElement("ul",{className:"js-plugin-changelog-list"},n.previousUpdates&&n.previousUpdates.map(function(e){return e.release?r.createElement(w,{key:e.release.version,release:e.release,update:e}):null}),r.createElement(w,{release:t,update:n})))}var S=n(717),A=n(700);function U(e){var t=e.className,n=e.fill,a=void 0===n?"currentColor":n,l=e.size;return r.createElement(A.a,{className:t,size:l},r.createElement("path",{d:"M5.273 7.182v1.636a.818.818 0 0 1-.818.818H2.818A.818.818 0 0 1 2 8.818V7.182c0-.452.366-.818.818-.818h1.637c.451 0 .818.366.818.818zm4.363 0v1.636a.818.818 0 0 1-.818.818H7.182a.818.818 0 0 1-.818-.818V7.182c0-.452.366-.818.818-.818h1.636c.452 0 .818.366.818.818zm4.364 0v1.636a.818.818 0 0 1-.818.818h-1.637a.818.818 0 0 1-.818-.818V7.182c0-.452.367-.818.818-.818h1.637c.452 0 .818.366.818.818z",style:{fill:a}}))}var M=n(697);function T(e){var t=e.release,n=e.update;return r.createElement(S.b,{className:"display-inline-block little-spacer-left",overlay:r.createElement(C,{release:t,update:n})},r.createElement(M.c,{className:"js-changelog"},r.createElement(U,null)))}var q=function(e){return r.createElement("td",{className:"text-top width-25 big-spacer-right"},r.createElement("div",null,r.createElement("strong",{className:"js-plugin-name"},e.plugin.name),e.plugin.category&&r.createElement("span",{className:"js-plugin-category badge spacer-left"},e.plugin.category)),r.createElement("div",{className:"js-plugin-description little-spacer-top"},e.plugin.description))},z=n(689);function D(e){var t=e.license;return t?r.createElement(x.a,{overlay:t},r.createElement("li",{className:"little-spacer-bottom marketplace-plugin-license"},r.createElement(z.FormattedMessage,{defaultMessage:Object(p.l)("marketplace.licensed_under_x"),id:"marketplace.licensed_under_x",values:{license:r.createElement("span",{className:"js-plugin-license"},t)}}))):null}function I(e){var t=e.plugin;return t.organizationName?r.createElement("li",{className:"little-spacer-bottom"},r.createElement(z.FormattedMessage,{defaultMessage:Object(p.l)("marketplace.developed_by_x"),id:"marketplace.developed_by_x",values:{organization:t.organizationUrl?r.createElement("a",{className:"js-plugin-organization",href:t.organizationUrl,target:"_blank"},t.organizationName):r.createElement("span",{className:"js-plugin-organization"},t.organizationName)}})):null}var L=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),B=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.handleClick=function(){t.props.onClick(t.props.update)},t}return L(t,e),t.prototype.render=function(){var e=this.props,t=e.disabled,n=e.update;return"COMPATIBLE"===n.status&&n.release?r.createElement(M.a,{className:"js-update little-spacer-bottom",disabled:t,onClick:this.handleClick},Object(p.m)("marketplace.update_to_x",n.release.version)):null},t}(r.PureComponent),Q=n(1e3),J=n(745),R=n(916),F=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),V=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.mounted=!1,t.state={acceptTerms:!1,loading:!1},t.doPluginAction=function(e){t.setState({loading:!0}),e({key:t.props.plugin.key}).then(function(){t.props.refreshPending(),t.mounted&&t.setState({loading:!1})},function(){t.mounted&&t.setState({loading:!1})})},t.handleInstall=function(){return t.doPluginAction(Q.g)},t.handleUpdate=function(){return t.doPluginAction(Q.i)},t.handleUninstall=function(){return t.doPluginAction(Q.h)},t.handleTermsCheck=function(e){return t.setState({acceptTerms:e})},t}return F(t,e),t.prototype.componentDidMount=function(){this.mounted=!0},t.prototype.componentWillUnmount=function(){this.mounted=!1},t.prototype.renderBundled=function(){var e=this,t=this.props.plugin;return r.createElement("div",{className:"js-actions"},Object(h.e)(t)&&r.createElement("div",null,r.createElement("p",{className:"little-spacer-bottom"},Object(p.l)("marketplace.available_under_commercial_license")),r.createElement("a",{href:t.homepageUrl,target:"_blank"},Object(p.l)("marketplace.learn_more"))),Object(h.f)(t)&&r.createElement("p",null,r.createElement(R.a,{className:"little-spacer-right"}),Object(p.l)("marketplace.installed")),Object(h.f)(t)&&t.updates&&t.updates.length>0&&r.createElement("div",{className:"spacer-top"},t.updates.map(function(t,n){return r.createElement(B,{disabled:e.state.loading,key:n,onClick:e.handleUpdate,update:t})})))},t.prototype.render=function(){var e=this,t=this.props.plugin;if(t.editionBundled)return this.renderBundled();var n=this.state.loading;return r.createElement("div",{className:"js-actions"},Object(h.e)(t)&&t.termsAndConditionsUrl&&r.createElement("p",{className:"little-spacer-bottom"},r.createElement(J.a,{checked:this.state.acceptTerms,className:"js-terms",id:"plugin-terms-"+t.key,onCheck:this.handleTermsCheck},r.createElement("label",{className:"little-spacer-left",htmlFor:"plugin-terms-"+t.key},Object(p.l)("marketplace.i_accept_the"))),r.createElement("a",{className:"js-plugin-terms nowrap little-spacer-left",href:t.termsAndConditionsUrl,target:"_blank"},Object(p.l)("marketplace.terms_and_conditions"))),n&&r.createElement("i",{className:"spinner spacer-right little-spacer-top little-spacer-bottom"}),Object(h.f)(t)&&r.createElement("div",{className:"display-inlin-block"},t.updates&&t.updates.map(function(t,a){return r.createElement(B,{disabled:n,key:a,onClick:e.handleUpdate,update:t})}),r.createElement(M.a,{className:"js-uninstall button-red little-spacer-left",disabled:n,onClick:this.handleUninstall},Object(p.l)("marketplace.uninstall"))),Object(h.e)(t)&&r.createElement(M.a,{className:"js-install",disabled:n||null!=t.termsAndConditionsUrl&&!this.state.acceptTerms,onClick:this.handleInstall},Object(p.l)("marketplace.install")))},t}(r.PureComponent);function G(e){var t=e.plugin,n=e.refreshPending,a=e.status;return r.createElement("td",{className:"text-top text-right width-20 little-spacer-left"},"installing"===a&&r.createElement("p",{className:"text-success"},Object(p.l)("marketplace.install_pending")),"updating"===a&&r.createElement("p",{className:"text-success"},Object(p.l)("marketplace.update_pending")),"removing"===a&&r.createElement("p",{className:"text-danger"},Object(p.l)("marketplace.uninstall_pending")),null==a&&r.createElement(V,{plugin:t,refreshPending:n}))}function W(e){var t=e.plugin;return t.homepageUrl||t.issueTrackerUrl?r.createElement("li",{className:"little-spacer-bottom"},r.createElement("ul",{className:"list-inline"},t.homepageUrl&&r.createElement("li",null,r.createElement("a",{className:"js-plugin-homepage",href:t.homepageUrl,target:"_blank"},Object(p.l)("marketplace.homepage"))),t.issueTrackerUrl&&r.createElement("li",null,r.createElement("a",{className:"js-plugin-issues",href:t.issueTrackerUrl,target:"_blank"},Object(p.l)("marketplace.issue_tracker"))))):null}function H(e){var t=e.plugin,n=e.readOnly,a=e.refreshPending,l=e.status;return r.createElement("tr",null,r.createElement(q,{plugin:t}),r.createElement("td",{className:"text-top big-spacer-right"},r.createElement("ul",null,r.createElement("li",{className:"display-flex-row little-spacer-bottom"},r.createElement("div",{className:"pull-left spacer-right"},r.createElement("span",{className:"badge badge-success"},t.release.version)),r.createElement("div",null,t.release.description,r.createElement(T,{release:t.release,update:t.update}),t.update.requires.length>0&&r.createElement("p",{className:"little-spacer-top"},r.createElement("strong",null,Object(p.m)("marketplace.installing_this_plugin_will_also_install_x",t.update.requires.map(function(e){return e.name}).join(", ")))))))),r.createElement("td",{className:"text-top width-20"},r.createElement("ul",null,r.createElement(W,{plugin:t}),r.createElement(D,{license:t.license}),r.createElement(I,{plugin:t}))),!n&&r.createElement(G,{plugin:t,refreshPending:a,status:l}))}var Y=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),K=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={changelogOpen:!1},t.handleChangelogClick=function(e){e.preventDefault(),e.stopPropagation(),t.toggleChangelog()},t.toggleChangelog=function(e){void 0!==e?t.setState({changelogOpen:e}):t.setState(function(e){return{changelogOpen:!e.changelogOpen}})},t}return Y(t,e),t.prototype.render=function(){var e=this.props,t=e.release,n=e.update;return r.createElement("li",{className:"display-flex-row little-spacer-bottom",key:t.version},r.createElement("div",{className:"pull-left spacer-right"},"COMPATIBLE"===n.status?r.createElement("span",{className:"js-update-version badge badge-success"},t.version):r.createElement(x.a,{overlay:Object(p.l)("marketplace.update_status",n.status)},r.createElement("span",{className:"js-update-version badge badge-warning"},t.version))),r.createElement("div",null,t.description,r.createElement(T,{release:t,update:n})))},t}(r.PureComponent);function X(e){var t=e.updates;return!t||t.length<=0?null:r.createElement("li",{className:"spacer-top"},r.createElement("strong",null,Object(p.l)("marketplace.updates"),":"),r.createElement("ul",{className:"little-spacer-top"},t.map(function(e){return e.release?r.createElement(K,{key:e.release.version,release:e.release,update:e}):null})))}function Z(e){var t=e.plugin,n=e.readOnly,a=e.refreshPending,l=e.status;return r.createElement("tr",null,r.createElement(q,{plugin:t}),r.createElement("td",{className:"text-top big-spacer-right"},r.createElement("ul",null,r.createElement("li",{className:"little-spacer-bottom"},r.createElement("strong",{className:"js-plugin-installed-version little-spacer-right"},t.version),Object(p.l)("marketplace._installed")),r.createElement(X,{updates:t.updates}))),r.createElement("td",{className:"text-top width-20"},r.createElement("ul",null,r.createElement(W,{plugin:t}),r.createElement(D,{license:t.license}),r.createElement(I,{plugin:t}))),!n&&r.createElement(G,{plugin:t,refreshPending:a,status:l}))}var $=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),ee=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.getPluginStatus=function(e){var n=t.props.pending,r=n.installing,a=n.updating,l=n.removing;return r.find(function(t){return t.key===e.key})?"installing":a.find(function(t){return t.key===e.key})?"updating":l.find(function(t){return t.key===e.key})?"removing":void 0},t.renderPlugin=function(e){var n=t.getPluginStatus(e);return Object(h.f)(e)?r.createElement(Z,{plugin:e,readOnly:t.props.readOnly,refreshPending:t.props.refreshPending,status:n}):Object(h.e)(e)?r.createElement(H,{plugin:e,readOnly:t.props.readOnly,refreshPending:t.props.refreshPending,status:n}):null},t}return $(t,e),t.prototype.render=function(){var e=this;return r.createElement("div",{className:"boxed-group boxed-group-inner",id:"marketplace-plugins"},r.createElement("ul",null,this.props.plugins.map(function(t){return r.createElement("li",{className:"panel panel-vertical",key:t.key},r.createElement("table",{className:"marketplace-plugin-table"},r.createElement("tbody",null,e.renderPlugin(t))))})))},t}(r.PureComponent),te=n(857),ne=n(755),re=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),ae=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.handleSearch=function(e){t.props.updateQuery({search:e})},t.handleFilterChange=function(e){return t.props.updateQuery({filter:e})},t}return re(t,e),t.prototype.render=function(){var e=this.props,t=e.query,n=e.updateCenterActive,a=[{label:Object(p.l)("marketplace.all"),value:"all"},{label:Object(p.l)("marketplace.installed"),value:"installed"},{disabled:!n,label:Object(p.l)("marketplace.updates_only"),tooltip:n?void 0:Object(p.l)("marketplace.not_activated"),value:"updates"}];return r.createElement("div",{className:"big-spacer-bottom",id:"marketplace-search"},r.createElement("div",{className:"display-inline-block text-top nowrap abs-width-240 spacer-right"},r.createElement(te.a,{name:"marketplace-filter",onCheck:this.handleFilterChange,options:a,value:t.filter})),r.createElement(ne.a,{onChange:this.handleSearch,placeholder:Object(p.l)("marketplace.search"),value:t.search}))},t}(r.PureComponent),le=n(718),ie=n(735),oe=(n(1706),function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}()),ce=function(){return(ce=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},se=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.mounted=!1,t.state={loadingPlugins:!0,plugins:[]},t.fetchQueryPlugins=function(){var e=Object(h.g)(t.props.location.query),n=t.fetchAllPlugins;"updates"===e.filter?n=Q.f:"installed"===e.filter&&(n=Q.c),t.setState({loadingPlugins:!0}),n().then(function(e){t.mounted&&t.setState({loadingPlugins:!1,plugins:c()(e,"name")})},t.stopLoadingPlugins)},t.fetchAllPlugins=function(){return Promise.all([Object(Q.d)(),Object(Q.b)()]).then(function(e){var t=e[0],n=e[1];return i()(t.concat(n.plugins),"key")},t.stopLoadingPlugins)},t.updateQuery=function(e){var n=Object(h.h)(ce({},Object(h.g)(t.props.location.query),e));t.props.router.push({pathname:t.props.location.pathname,query:n})},t.stopLoadingPlugins=function(){t.mounted&&t.setState({loadingPlugins:!1})},t}return oe(t,e),t.prototype.componentDidMount=function(){this.mounted=!0,this.fetchQueryPlugins()},t.prototype.componentDidUpdate=function(e){e.location.query.filter!==this.props.location.query.filter&&this.fetchQueryPlugins()},t.prototype.componentWillUnmount=function(){this.mounted=!1},t.prototype.render=function(){var e=this.props,t=e.currentEdition,n=e.standaloneMode,a=e.pendingPlugins,l=this.state,i=l.loadingPlugins,o=l.plugins,c=Object(h.g)(this.props.location.query),s=Object(h.c)(o,c.search);return r.createElement("div",{className:"page page-limited",id:"marketplace-page"},r.createElement(le.a,{suggestions:"marketplace"}),r.createElement(u.a,{title:Object(p.l)("marketplace.page")}),r.createElement(d,{currentEdition:t}),r.createElement(j,{currentEdition:t}),r.createElement("header",{className:"page-header"},r.createElement("h1",{className:"page-title"},Object(p.l)("marketplace.page.open_source_plugins"))),r.createElement(ae,{query:c,updateCenterActive:this.props.updateCenterActive,updateQuery:this.updateQuery}),i&&r.createElement("i",{className:"spinner"}),!i&&r.createElement(ee,{pending:a,plugins:s,readOnly:!n,refreshPending:this.props.fetchPendingPlugins}),!i&&r.createElement(P,{total:s.length}))},t}(r.PureComponent),ue=Object(ie.a)(se),pe=n(708),de=n(999),me=function(){return(me=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)};t.default=Object(a.connect)(function(e){var t=Object(pe.getGlobalSettingValue)(e,"sonar.updatecenter.activate");return{currentEdition:Object(pe.getAppState)(e).edition,standaloneMode:Object(pe.getAppState)(e).standalone,updateCenterActive:Boolean(t&&"true"===t.value)}})(function(e){return r.createElement(de.a.Consumer,null,function(t){var n=t.fetchPendingPlugins,a=t.pendingPlugins;return r.createElement(ue,me({fetchPendingPlugins:n,pendingPlugins:a},e))})})},718:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var r,a=n(695),l=n(739),i=(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});function o(e){var t=e.suggestions;return a.createElement(l.a.Consumer,null,function(e){var n=e.addSuggestions,r=e.removeSuggestions;return a.createElement(c,{addSuggestions:n,removeSuggestions:r,suggestions:t})})}var c=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return i(t,e),t.prototype.componentDidMount=function(){this.props.addSuggestions(this.props.suggestions)},t.prototype.componentDidUpdate=function(e){e.suggestions!==this.props.suggestions&&(this.props.removeSuggestions(this.props.suggestions),this.props.addSuggestions(e.suggestions))},t.prototype.componentWillUnmount=function(){this.props.removeSuggestions(this.props.suggestions)},t.prototype.render=function(){return null},t}(a.PureComponent)},729:function(e,t,n){"use strict";n.d(t,"b",function(){return c}),n.d(t,"a",function(){return s});var r=n(695),a=n(689),l=n(109),i=function(){return(i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},o={year:"numeric",month:"short",day:"2-digit"},c={year:"numeric",month:"long",day:"numeric"};function s(e){var t=e.children,n=e.date,s=e.long;return r.createElement(a.FormattedDate,i({value:Object(l.g)(n)},s?c:o),t)}},745:function(e,t,n){"use strict";var r,a=n(695),l=n(696),i=n(707),o=(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),c=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.handleClick=function(e){e.preventDefault(),e.currentTarget.blur(),t.props.disabled||t.props.onCheck(!t.props.checked,t.props.id)},t}return o(t,e),t.prototype.render=function(){var e=this.props,t=e.checked,n=e.children,r=e.disabled,o=e.id,c=e.loading,s=e.right,u=e.thirdState,p=e.title,d=l("icon-checkbox",{"icon-checkbox-checked":t,"icon-checkbox-single":u,"icon-checkbox-disabled":r});return n?a.createElement("a",{"aria-checked":t,className:l("link-checkbox",this.props.className,{note:r,disabled:r}),href:"#",id:o,onClick:this.handleClick,role:"checkbox",title:p},s&&n,a.createElement(i.a,{loading:Boolean(c)},a.createElement("i",{className:d})),!s&&n):c?a.createElement(i.a,null):a.createElement("a",{"aria-checked":t,className:l(d,this.props.className),href:"#",id:o,onClick:this.handleClick,role:"checkbox",title:p})},t.defaultProps={thirdState:!1},t}(a.PureComponent);t.a=c},749:function(e,t,n){var r=n(772),a=1/0,l=1.7976931348623157e308;e.exports=function(e){return e?(e=r(e))===a||e===-a?(e<0?-1:1)*l:e==e?e:0:0===e?e:0}},788:function(e,t,n){var r=n(749);e.exports=function(e){var t=r(e),n=t%1;return t==t?n?t-n:t:0}},817:function(e,t){e.exports=function(e,t,n,r){for(var a=e.length,l=n+(r?1:-1);r?l--:++l<a;)if(t(e[l],l,e))return l;return-1}},857:function(e,t,n){"use strict";var r,a=n(695),l=n(696),i=n(704),o=(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),c=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.handleChange=function(e){var n=e.currentTarget.value;t.props.onCheck(n)},t.renderOption=function(e){var n=e.value===t.props.value,r=t.props.name+"__"+e.value;return a.createElement("li",{key:e.value},a.createElement("input",{checked:n,disabled:e.disabled,id:r,name:t.props.name,onChange:t.handleChange,type:"radio",value:e.value}),a.createElement(i.a,{overlay:e.tooltip||void 0},a.createElement("label",{htmlFor:r},e.label)))},t}return o(t,e),t.prototype.render=function(){return a.createElement("ul",{className:l("radio-toggle",this.props.className)},this.props.options.map(this.renderOption))},t.defaultProps={disabled:!1,value:null},t}(a.PureComponent);t.a=c},898:function(e,t,n){"use strict";n.d(t,"a",function(){return l}),n.d(t,"b",function(){return i}),n.d(t,"c",function(){return o});var r=n(38),a=n(713);function l(e){return Object(r.getJSON)("/api/navigation/component",e).catch(a.a)}function i(){return Object(r.getJSON)("/api/navigation/marketplace").catch(a.a)}function o(){return Object(r.getJSON)("/api/navigation/settings").catch(a.a)}},916:function(e,t,n){"use strict";n.d(t,"a",function(){return l});var r=n(695),a=n(700);function l(e){var t=e.className,n=e.fill,l=void 0===n?"currentColor":n,i=e.size;return r.createElement(a.a,{className:t,size:i},r.createElement("path",{d:"M14.92 4.804q0 0.357-0.25 0.607l-7.679 7.679q-0.25 0.25-0.607 0.25t-0.607-0.25l-4.446-4.446q-0.25-0.25-0.25-0.607t0.25-0.607l1.214-1.214q0.25-0.25 0.607-0.25t0.607 0.25l2.625 2.634 5.857-5.866q0.25-0.25 0.607-0.25t0.607 0.25l1.214 1.214q0.25 0.25 0.25 0.607z",style:{fill:l}}))}},999:function(e,t,n){"use strict";n.d(t,"b",function(){return a}),n.d(t,"c",function(){return l});var r=n(695),a={installing:[],removing:[],updating:[]},l="UP",i=r.createContext({fetchSystemStatus:function(){},fetchPendingPlugins:function(){},pendingPlugins:a,systemStatus:l});t.a=i}}]);
//# sourceMappingURL=302.1562761687107.chunk.js.map