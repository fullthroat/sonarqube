(window.webpackJsonp=window.webpackJsonp||[]).push([[363],{1618:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return c});var a=n(365),s=n(375),l=n(378),o=n(367),i=n(0),r=n(726),m=n(567);class c extends a.PureComponent{constructor(e){super(e),this.mounted=!1,this.keepLineBreaks=e=>{if(e.includes("\n")){const t=e.split("\n");return a.createElement(a.Fragment,null,t.map((e,n)=>a.createElement(a.Fragment,{key:n},e,n<t.length-1&&a.createElement("br",null))))}return e},this.state={loading:!e.warnings,warnings:e.warnings||[]}}componentDidMount(){this.mounted=!0,!this.props.warnings&&this.props.taskId&&this.loadWarnings(this.props.taskId)}componentDidUpdate(e){const t=this.props,n=t.taskId,a=t.warnings;!a&&n&&e.taskId!==n?this.loadWarnings(n):a&&e.warnings!==a&&this.setState({warnings:a})}componentWillUnmount(){this.mounted=!1}loadWarnings(e){this.setState({loading:!0}),Object(m.f)(e,["warnings"]).then(e=>{let t=e.warnings,n=void 0===t?[]:t;this.mounted&&this.setState({loading:!1,warnings:n})},()=>{this.mounted&&this.setState({loading:!1})})}render(){const e=Object(i.l)("warnings");return a.createElement(l.a,{contentLabel:e,onRequestClose:this.props.onClose},a.createElement("header",{className:"modal-head"},a.createElement("h2",null,e)),a.createElement("div",{className:"modal-body modal-container js-analysis-warnings"},a.createElement(s.a,{loading:this.state.loading},this.state.warnings.map((e,t)=>a.createElement("div",{className:"panel panel-vertical",key:t},a.createElement(r.a,{className:"pull-left spacer-right"}),a.createElement("div",{className:"overflow-hidden markdown"},this.keepLineBreaks(e)))))),a.createElement("footer",{className:"modal-foot"},a.createElement(o.h,{className:"js-modal-close",onClick:this.props.onClose},Object(i.l)("close"))))}}},378:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var a=n(365),s=n(405),l=n(366);function o(e){return a.createElement(s,Object.assign({className:l("modal",{"modal-small":"small"===e.size,"modal-medium":"medium"===e.size,"modal-large":"large"===e.size}),isOpen:!0,overlayClassName:l("modal-overlay",{"modal-no-backdrop":e.noBackdrop})},e))}s.setAppElement("#content")}}]);
//# sourceMappingURL=363.m.6bc26e0f.chunk.js.map