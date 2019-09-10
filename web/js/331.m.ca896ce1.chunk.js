(window.webpackJsonp=window.webpackJsonp||[]).push([[331],{1407:function(t,e,n){var r=n(1408);"string"==typeof r&&(r=[[t.i,r,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n(369)(r,i);r.locals&&(t.exports=r.locals)},1408:function(t,e,n){(t.exports=n(368)(!1)).push([t.i,".quality-profiles-table{padding-top:7px}.quality-profiles-table-inheritance{width:280px}.quality-profiles-table-date,.quality-profiles-table-projects,.quality-profiles-table-rules{min-width:80px}.quality-profiles-list-header{line-height:24px;margin-bottom:20px;padding:5px 10px;border-bottom:1px solid #e6e6e6}.quality-profile-grid{display:flex;justify-content:space-between;align-items:flex-start}.quality-profile-grid-left{width:340px;flex-shrink:0}.quality-profile-grid-right{flex-grow:1;margin-left:20px}.quality-profile-rules-distribution{margin-bottom:15px;padding:7px 20px 0}.quality-profile-rules-deprecated{margin-top:20px;padding:15px 20px;background-color:#f2dede}.quality-profile-rules-sonarway-missing{margin-top:20px;padding:15px 20px;background-color:#fcf8e3}.quality-profile-not-found{padding-top:100px;text-align:center}.quality-profiles-evolution{padding-top:55px}.quality-profiles-evolution-deprecated{border-color:#ebccd1;background-color:#f2dede}.quality-profiles-evolution-stagnant{border-color:#faebcc;background-color:#fcf8e3}.quality-profile-comparison-table{table-layout:fixed}.quality-profile-changelog-rule-cell{line-height:1.5}.quality-profile-changelog-parameter{max-width:270px;word-break:break-word}",""])},1722:function(t,e,n){"use strict";n.r(e);var r=n(377),i=n(365),o=n(410),a=n(389),u=n(476),s=n(670),c=n(0);n(1407);function l(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=[],r=!0,i=!1,o=void 0;try{for(var a,u=t[Symbol.iterator]();!(r=(a=u.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){i=!0,o=t}finally{try{r||null==u.return||u.return()}finally{if(i)throw o}}return n}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var p=n(379);e.default=Object(r.connect)((t,e)=>({languages:Object(p.getLanguages)(t),organization:e.params.organizationKey?Object(p.getOrganizationByKey)(t,e.params.organizationKey):void 0}))(class extends i.PureComponent{constructor(){super(...arguments),this.mounted=!1,this.state={loading:!0},this.updateProfiles=()=>this.fetchProfiles().then(t=>{this.mounted&&this.setState({profiles:Object(u.g)(t.profiles)})})}componentDidMount(){this.mounted=!0,this.loadData()}componentWillUnmount(){this.mounted=!1}fetchProfiles(){const t=this.props.organization,e=t?{organization:t.key}:{};return Object(o.y)(e)}loadData(){this.setState({loading:!0}),Promise.all([Object(o.n)(),this.fetchProfiles()]).then(t=>{if(this.mounted){const e=l(t,2),n=e[0],r=e[1];this.setState({actions:r.actions,exporters:n,profiles:Object(u.g)(r.profiles),loading:!1})}},()=>{this.mounted&&this.setState({loading:!1})})}renderChild(){if(this.state.loading)return i.createElement("i",{className:"spinner"});const t=this.props.organization,e=Object.values(this.props.languages);return i.cloneElement(this.props.children,{actions:this.state.actions||{},profiles:this.state.profiles||[],languages:e,exporters:this.state.exporters,updateProfiles:this.updateProfiles,organization:t?t.key:null})}render(){return i.createElement("div",{className:"page page-limited"},i.createElement(a.a,{suggestions:"quality_profiles"}),i.createElement(s.a,{organization:this.props.organization,title:Object(c.l)("quality_profiles.page")}),this.renderChild())}})},389:function(t,e,n){"use strict";n.d(e,"a",function(){return o});var r=n(365),i=n(411);function o(t){let e=t.suggestions;return r.createElement(i.a.Consumer,null,t=>{let n=t.addSuggestions,i=t.removeSuggestions;return r.createElement(a,{addSuggestions:n,removeSuggestions:i,suggestions:e})})}class a extends r.PureComponent{componentDidMount(){this.props.addSuggestions(this.props.suggestions)}componentDidUpdate(t){t.suggestions!==this.props.suggestions&&(this.props.removeSuggestions(this.props.suggestions),this.props.addSuggestions(t.suggestions))}componentWillUnmount(){this.props.removeSuggestions(this.props.suggestions)}render(){return null}}},410:function(t,e,n){"use strict";n.d(e,"y",function(){return s}),n.d(e,"s",function(){return c}),n.d(e,"j",function(){return l}),n.d(e,"w",function(){return p}),n.d(e,"r",function(){return f}),n.d(e,"q",function(){return d}),n.d(e,"A",function(){return g}),n.d(e,"v",function(){return h}),n.d(e,"i",function(){return y}),n.d(e,"l",function(){return m}),n.d(e,"g",function(){return b}),n.d(e,"o",function(){return O}),n.d(e,"n",function(){return q}),n.d(e,"p",function(){return j}),n.d(e,"h",function(){return x}),n.d(e,"d",function(){return v}),n.d(e,"m",function(){return S}),n.d(e,"z",function(){return w}),n.d(e,"x",function(){return N}),n.d(e,"c",function(){return k}),n.d(e,"u",function(){return J}),n.d(e,"b",function(){return _}),n.d(e,"t",function(){return z}),n.d(e,"e",function(){return K}),n.d(e,"f",function(){return E}),n.d(e,"a",function(){return P}),n.d(e,"k",function(){return D});var r=n(415),i=n.n(r),o=n(495),a=n(4),u=n(383);function s(t){return Object(a.getJSON)("/api/qualityprofiles/search",t).catch(u.a)}function c(t){return Object(a.getJSON)("/api/qualityprofiles/show",t)}function l(t){return Object(a.request)("/api/qualityprofiles/create").setMethod("post").setData(t).submit().then(a.checkStatus).then(a.parseJSON).catch(u.a)}function p(t){return Object(a.request)("/api/qualityprofiles/restore").setMethod("post").setData(t).submit().then(a.checkStatus).then(a.parseJSON).catch(u.a)}function f(t){return Object(a.getJSON)("/api/qualityprofiles/projects",t).catch(u.a)}function d(t){return Object(a.getJSON)("/api/qualityprofiles/inheritance",{profileKey:t}).catch(u.a)}function g(t){return Object(a.post)("/api/qualityprofiles/set_default",{profileKey:t})}function h(t,e){return Object(a.post)("/api/qualityprofiles/rename",{key:t,name:e}).catch(u.a)}function y(t,e){return Object(a.postJSON)("/api/qualityprofiles/copy",{fromKey:t,toName:e}).catch(u.a)}function m(t){return Object(a.post)("/api/qualityprofiles/delete",{profileKey:t}).catch(u.a)}function b(t,e){return Object(a.post)("/api/qualityprofiles/change_parent",{profileKey:t,parentKey:e}).catch(u.a)}function O(){return Object(a.getJSON)("/api/qualityprofiles/importers").then(t=>t.importers,u.a)}function q(){return Object(a.getJSON)("/api/qualityprofiles/exporters").then(t=>t.exporters)}function j(t){return Object(a.getJSON)("/api/qualityprofiles/changelog",t)}function x(t,e){return Object(a.getJSON)("/api/qualityprofiles/compare",{leftKey:t,rightKey:e})}function v(t,e){return Object(a.post)("/api/qualityprofiles/add_project",{key:t,project:e}).catch(u.a)}function S(t,e){return Object(a.post)("/api/qualityprofiles/remove_project",{key:t,project:e}).catch(u.a)}function w(t){return Object(a.getJSON)("/api/qualityprofiles/search_users",t).catch(u.a)}function N(t){return Object(a.getJSON)("/api/qualityprofiles/search_groups",t).catch(u.a)}function k(t){return Object(a.post)("/api/qualityprofiles/add_user",t).catch(u.a)}function J(t){return Object(a.post)("/api/qualityprofiles/remove_user",t).catch(u.a)}function _(t){return Object(a.post)("/api/qualityprofiles/add_group",t).catch(u.a)}function z(t){return Object(a.post)("/api/qualityprofiles/remove_group",t).catch(u.a)}function K(t){return Object(a.postJSON)("/api/qualityprofiles/activate_rules",t)}function E(t){return Object(a.postJSON)("/api/qualityprofiles/deactivate_rules",t)}function P(t){const e=t.params&&i()(t.params,(t,e)=>"".concat(e,"=").concat(Object(o.a)(t))).join(";");return Object(a.post)("/api/qualityprofiles/activate_rule",Object.assign({},t,{params:e})).catch(u.a)}function D(t){return Object(a.post)("/api/qualityprofiles/deactivate_rule",t).catch(u.a)}},415:function(t,e,n){var r=n(51),i=n(15),o=n(472),a=n(6);t.exports=function(t,e){return(a(t)?r:o)(t,i(e,3))}},495:function(t,e,n){"use strict";function r(t){const e=t.replace(/"/g,'\\"');return'"'.concat(e,'"')}n.d(e,"a",function(){return r})},670:function(t,e,n){"use strict";n.d(e,"a",function(){return a});var r=n(365),i=n(381),o=n.n(i);function a(t){let e=t.title,n=t.organization;const i=e+(n?" - "+n.name:"");return r.createElement(o.a,{defaultTitle:i,titleTemplate:"%s - "+i})}}}]);
//# sourceMappingURL=331.m.ca896ce1.chunk.js.map