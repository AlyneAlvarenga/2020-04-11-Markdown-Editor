(this["webpackJsonpmarkdown-editor"]=this["webpackJsonpmarkdown-editor"]||[]).push([[0],{19:function(e,t,a){e.exports=a(40)},24:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(8),i=a.n(o),s=(a(24),a(14)),c=a(15),l=a(18),m=a(17),d=a(16),u=a.n(d),h=(a(37),a(5)),p=a.n(h),w=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).updateCode=function(t){e.setState({code:t})},e.rawMarkup=function(){return p.a.setOptions({renderer:new p.a.Renderer,gfm:!0,tables:!0,breaks:!1,pedantic:!1,sanitize:!0,smartLists:!0,smartypants:!1}),{__html:p()(e.state.code,{sanitize:!0})}},e.state={code:"## Code goes here"},e}return Object(c.a)(a,[{key:"render",value:function(){var e={lineNumbers:!0,mode:"markdown",viewportMargin:1/0};return r.a.createElement("main",null,r.a.createElement("div",{className:"wrapper"},r.a.createElement("h1",{className:"alignCenter"},"Welcome to the Markdown Editor"),r.a.createElement("p",{className:"alignCenter"},"Start typing your markdown text on the editor. See the output in HTML on the right."),r.a.createElement("section",null,r.a.createElement("div",{className:"editorContainer"},r.a.createElement("h2",{className:"sectionTitles"},"Editor"),r.a.createElement(u.a,{value:this.state.code,onChange:this.updateCode,options:e})),r.a.createElement("div",{className:"outputContainer"},r.a.createElement("h2",{className:"sectionTitles"},"Output"),r.a.createElement("div",{id:"outputText",dangerouslySetInnerHTML:this.rawMarkup()})))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[19,1,2]]]);
//# sourceMappingURL=main.8a3148b2.chunk.js.map