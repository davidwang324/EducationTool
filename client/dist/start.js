!function(t){function e(e){for(var i,r,a=e[0],l=e[1],c=e[2],p=0,d=[];p<a.length;p++)r=a[p],n[r]&&d.push(n[r][0]),n[r]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);for(h&&h(e);d.length;)d.shift()();return o.push.apply(o,c||[]),s()}function s(){for(var t,e=0;e<o.length;e++){for(var s=o[e],i=!0,a=1;a<s.length;a++){var l=s[a];0!==n[l]&&(i=!1)}i&&(o.splice(e--,1),t=r(r.s=s[0]))}return t}var i={},n={0:0},o=[];function r(e){if(i[e])return i[e].exports;var s=i[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=t,r.c=i,r.d=function(t,e,s){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(s,i,function(e){return t[e]}.bind(null,i));return s},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="";var a=window.webpackJsonp=window.webpackJsonp||[],l=a.push.bind(a);a.push=e,a=a.slice();for(var c=0;c<a.length;c++)e(a[c]);var h=l;o.push([12,1]),s()}([,,,,,,,,function(t,e,s){},function(t,e,s){t.exports=s.p+"index.html"},function(t,e,s){var i={"./gpt-2-small_examples.json":11};function n(t){var e=o(t);return s(e)}function o(t){var e=i[t];if(!(e+1)){var s=new Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}return e}n.keys=function(){return Object.keys(i)},n.resolve=o,t.exports=n,n.id=10},function(t){t.exports=[{file:"gpt2_small_top5_uncond.json",description:"machine: GPT-2 small top_k 5 temp 1"},{file:"gpt_2_small_top40_t0.7.json",description:"machine: GPT-2 small top_k 40 temp .7"},{file:"unicorn.json",description:"machine*: unicorn text (GPT2 large)"},{file:"NYTimes.json",description:"human: NYTimes article"},{file:"paper_gan.json",description:"human: academic text"},{file:"woodchuck.json",description:"human: woodchuck :)"}]},function(t,e,s){"use strict";s.r(e);var i=s(1);s(13),s(8),s(9);class n{constructor(t){this.element=t,this.eventListeners=[]}bind(t,e){for(const s of t.split(" ")){this.eventListeners.push({eventName:s,eventFunction:e});const t=t=>e(t.detail,t);this.element.addEventListener(s,t,!1)}}getListeners(){return this.eventListeners}trigger(t,e){this.element.dispatchEvent(new CustomEvent(t,{detail:e}))}}class o{static basicURL(){const t=window.location.pathname.split("/").slice(0,-2).join("/");return window.location.origin+(t.length?t:"")}static get parameters(){const t=window.location.search.substring(1).split("&");console.log(t,"--- vars");const e={},s=t=>(t=>/^[0-9]+$/.test(t))(t)?Number.parseInt(t,10):(t=>/^[0-9]+\.[0-9]*$/.test(t))(t)?Number.parseFloat(t):t;return t.forEach(t=>{if(t.length>0){const i=t.split("="),n=decodeURIComponent(i[0]);let o=decodeURIComponent(i[1]);const r=o.startsWith("..");r&&(o=o.slice(2)),o.length<1?e[n]=r?[]:"":e[n]=r?o.split(",").map(t=>s(t)):s(o)}}),e}static urlString(t){const e=[];Object.keys(t).forEach(s=>{const i=t[s];if(void 0!==i){let t=i;Array.isArray(i)&&(t=".."+i.join(",")),e.push(encodeURI(s+"="+t))}});const s=window.location.pathname;let i=s.substring(s.lastIndexOf("/")+1);return e.length>0&&(i+="?"+e.join("&")),i}static updateURLParam(t,e,s=!0){const i=o.parameters;i[t]=e,o.updateUrl(i,s)}static updateUrl(t,e=!0){e?window.history.pushState(t,"",o.urlString(t)):window.history.replaceState(t,"",o.urlString(t))}}let r=0;class a{static simpleUId({prefix:t=""}){return t+(r+=1)}}function l(t){t=t.startsWith("Ġ")?t.slice(1):t.startsWith("Ċ")||t.startsWith("â")?" ":t;try{t=decodeURIComponent(escape(t))}catch(e){console.log(t,"-- token is hard")}return t}class c{static translate({x:t,y:e}){return"translate("+t+","+e+")"}static group(t,e,s={x:0,y:0}){return t.append("g").attrs({class:e,transform:c.translate(s)})}}class h{constructor(t,e){this.id=a.simpleUId({}),this.parent=t,this.eventHandler=e||new n(this.parent.node()),this._visibility={hidden:!1}}superInitHTML(t={}){Object.keys(t).forEach(e=>this.options[e]=t[e]),this.base=this.parent.append("div").classed(this.css_name,!0)}superInitSVG(t={},e=["bg","main","fg"]){Object.keys(t).forEach(e=>this.options[e]=t[e]),this.layers={},this.base=c.group(this.parent,this.css_name+" ID"+this.id,this.options.pos),e&&e.forEach(t=>{this.layers[t]=c.group(this.base,t)})}update(t){this.data=t,this._visibility.hidden||(this.renderData=this._wrangle(t),this._render(this.renderData))}updateOptions(t,e=!1){Object.keys(t).forEach(e=>this.options[e]=t[e]),e&&this._render(this.renderData)}setHideElement(t){this._visibility.hideElement=t}hideView(){if(!this._visibility.hidden){(this._visibility.hideElement||this.parent).transition().styles({opacity:0,"pointer-events":"none"}).style("display","none"),this._visibility.hidden=!0}}unhideView(){if(this._visibility.hidden){(this._visibility.hideElement||this.parent).transition().styles({opacity:1,"pointer-events":null,display:null}),this._visibility.hidden=!1}}destroy(){this.base.remove()}}var p;h.events={noEvent:"VComponent_noEvent"},function(t){t[t.topk=0]="topk",t[t.diff_p=1]="diff_p",t[t.fract_p=2]="fract_p"}(p||(p={}));class d extends h{constructor(t,e,s={}){super(t,e),this._current={maxValue:-1},this.css_name="LMF",this.options={gltrMode:p.topk,diffScale:i.k().exponent(.3).range(["#b4e876","#fff"]),fracScale:i.j().range(["#fff","#b4e876"]),topkScale:i.l().domain([10,100,1e3]).range(["#ADFF80","#FFEA80","#FF9280","#E5B0FF"])},this.superInitHTML(s),this._init()}_init(){}_render(t=this.renderData){if(!t)return;const e=this.options,s=(this._current,t.bpe_strings.slice(1)),i=t.real_topk,n=s.map((e,s)=>({token:e,top:i[s][0],prop:i[s][1],others:t.pred_topk[s]}));n.forEach(t=>{console.log("-hen--",t.token,t.token.charCodeAt(0))}),this.base.selectAll(".token").data(n,(t,e)=>t.token+"__"+e).join("div").attr("class",t=>`token ${t.token.startsWith("Ġ")?"spaceLeft":""} ${t.token.startsWith("Ċ")?"newLine":""}`).style("background-color",t=>{if(e.gltrMode===p.topk)return e.topkScale(t.top);if(e.gltrMode===p.diff_p){const s=t.others[0][1]-t.prop;return console.log(s,e.diffScale(s),e.diffScale.domain(),"--- diff, cur.diffScale(diff), cur.diffScale.domain()"),e.diffScale(s)}if(e.gltrMode===p.fract_p){const s=t.prop/t.others[0][1];return e.fracScale(s)}}).text(t=>l(t.token)).on("mousemove",t=>this.eventHandler.trigger(d.events.tokenHovered,{hovered:!0,d:t})).on("mouseleave",t=>this.eventHandler.trigger(d.events.tokenHovered,{hovered:!1,d:t}))}_wrangle(t){const e=t.pred_topk.map(t=>t[0][1]);return this._current.maxValue=i.g(e),this.options.diffScale.domain([0,this._current.maxValue]),t}updateThresholdValues(t){this.options.topkScale.domain(t),this._render()}get colorStats(){const t={};return this.options.topkScale.range().forEach(e=>t[e]=0),this.data.real_topk.map(t=>t[0]).forEach(e=>{const s=this.options.topkScale(e);t[s]+=1}),{colors:this.options.topkScale.range(),values:this.options.topkScale.range().map(e=>t[e])}}}d.events={tokenHovered:"lmf-view-token-hovered"};class u extends h{constructor(t,e,s={}){super(t,e),this._current={},this.css_name="HistogramX",this.options={width:200,height:150,margin_top:10,numberFormat:i.d(".3")},this.superInitSVG(s,["bg","main","box","fg"]),this._init()}_init(){const t=this.options;this.parent.attrs({width:t.width,height:t.height}),this.layers.bg.append("g").attr("class","y-axis").attr("transform",`translate(${t.width-33},0)`),this.layers.bg.append("g").attr("class","x-axis").attr("transform",`translate(0,${t.height-21})`),this.highlightLabel=this.layers.fg.append("text").attr("class","highlightLabel sizeLabel")}_render(t){const e=this.options,s=t.data.map(t=>+t).sort((t,e)=>t-e),n=t.extent||i.c(s);let o=i.j().domain(n).range([5,e.width-35]);const r=t.no_bins||Math.min(i.o(s,n[0],n[1]),20),a=(o=o.nice(r)).ticks(r);a[a.length-1]==n[1]&&a.pop();const l=i.e().domain(o.domain()).thresholds(a)(s);console.log(l,"-- histo");const c=i.j().domain([0,i.g(l,t=>t.length)]).nice().range([e.height-35,e.margin_top]),h=t=>t>5?t-1:.9*t;this.layers.main.selectAll(".bar").data(l).join("rect").attr("class","bar").attrs({x:t=>o(t.x0),y:t=>c(t.length),width:t=>h(o(t.x1)-o(t.x0)),height:t=>e.height-35-c(t.length)}).on("mouseenter",t=>{const e=o(t.x0)+.5*h(o(t.x1)-o(t.x0)),s=c(t.length)-2;this.highlightLabel.attr("transform",`translate(${e},${s})`).style("visibility",null).text(()=>t.length)}).on("mouseleave",()=>this.highlightLabel.style("visibility","hidden"));this.layers.bg.select(".y-axis").call(i.b(c).tickFormat(e.numberFormat)),this.layers.bg.select(".x-axis").call(i.a(o).tickFormat(e.numberFormat).ticks(a.length));const p=i.i(s,.5),d=[.25,.75].map(t=>i.i(s,t));this.layers.box.selectAll(".quantiles").data([d.map(t=>o(t))]).join("rect").attr("class","quantiles").attrs({x:t=>t[0],width:t=>t[1]-t[0],y:e.height-33,height:10});this.layers.box.selectAll(".median").data([p]).join("g").attr("class","median").attr("transform",t=>`translate(${o(t)},${e.height-28})`).html(t=>'<line x1="-3" y1="0" x2="3" y2="0"/><line x1="0" y1="-3" x2="0" y2="3"/>'+`<text x="6">${e.numberFormat(t)}</text>`)}_wrangle(t){return t}}const m={sidebar:{width:400,visible:!1},demo:!0,entropyThreshold:10,project_name:"gpt-2-small"},f={mode_topk:p.topk,mode_diff_p:p.diff_p,mode_frac_p:p.fract_p};window.onload=(()=>{const t=new n(i.m("body").node());o.parameters.nodemo&&(m.demo=!1);const e=i.m(".side_bar");e.style("width",`${m.sidebar.width}px`);const r=new class{constructor(t=null){this.baseURL=t,null==this.baseURL&&(this.baseURL=o.basicURL())}all_projects(){return i.f(this.baseURL+"/api/all_projects")}analyze(t,e,s=null){const n={project:t,text:e};return s&&(n.bitmask=s),i.f(this.baseURL+"/api/analyze",{method:"POST",body:JSON.stringify(n),headers:{"Content-type":"application/json; charset=UTF-8"}})}}(o.parameters.api||""),a=new class{constructor(t,e){this.parent=t,this.eh=e,this._init()}_init(){this.predictions=this.parent.select(".predictions"),this.myDetail=this.parent.select(".myDetail")}set visility(t){1==t?this.parent.style("opacity",1):this.parent.style("opacity",0)}updateData(t){this.visility=!0;const e=t.others[0][1],s=i.j().domain([0,e]).range([0,60]),n=i.d(".3f");let[o,r]=i.h(i.m("body").node());o=o>window.innerWidth/2?o-200:o,this.parent.styles({top:r+30+"px",left:o+"px"}),this.predictions.selectAll(".row").data(t.others.slice(0,5)).join("div").attr("class","row").style("display","table-row").html(e=>{const i=t.token!=e[0]?"#333":"#933";return`${'<div style="display: table-cell; width:110px;padding-left:5px;">'+`<div style="display:inline-block;width: ${s(e[1])}px;background-color:${i};height: 10px;"></div>`+` <div style="display:inline-block;color: ${i};">${n(e[1])}</div>`+"</div>"} ${`<div style="display: table-cell;color: ${i}">${l(e[0])}</div>`}`}),this.myDetail.html(()=>{t.others[0][1],t.prop;const e=t.prop/t.others[0][1];return`${`<span style="color: #666">top_k pos:</span> <span style="color: #333">${t.top}</span>`} ${`<span style="color: #666666">prob:</span> <span style="color: #333">${n(t.prop)}</span>`} <br/>${`<span style="color: #666">frac(p):</span> <span style="color: #333">${n(e)}</span>`}`})}}(i.m("#major_tooltip"),t),c=i.m("#submit_text_btn"),p=i.m("#test_text"),y=i.n(".btn_mode"),g=new class extends h{constructor(t,e,s={}){super(t,e),this.options={width:200,height:150,margin_top:10,numberFormat:i.d(".3")},this.css_name="barchartX",this._current={},this.superInitSVG(s),this._init()}_init(){const t=this.options;this.parent.attrs({width:t.width,height:t.height}),this.layers.bg.append("g").attr("class","y-axis").attr("transform",`translate(${t.width-33},0)`),this.highlightLabel=this.layers.fg.append("text").attr("class","highlightLabel sizeLabel")}_wrangle(t){return t}_render(t){const e=this.options,s=i.j().domain([0,t.values.length]).range([5,e.width-35]),n=t.extent||[0,i.g(t.values)],o=i.j().domain(n).nice(10).range([e.height-35,e.margin_top]),r=(t=>t>5?t-1:.9*t)(s(1)-s(0)),a=t.values.map((e,s)=>({v:e,c:(e=>t.colors?t.colors[e%t.colors.length]:null)(s)}));this.layers.main.selectAll(".bar").data(a).join("rect").attr("class","bar").attrs({x:(t,e)=>s(e),y:t=>o(t.v),width:t=>r,height:t=>e.height-35-o(t.v)}).style("fill",t=>t.c).style("opacity",1).on("mouseenter",(t,e)=>{const i=s(e)+.5*r,n=o(t.v)-2;this.highlightLabel.attr("transform",`translate(${i},${n})`).style("visibility",null).text(()=>t.v)}).on("mouseleave",()=>this.highlightLabel.style("visibility","hidden")),this.layers.bg.select(".y-axis").call(i.b(o).tickFormat(e.numberFormat))}}(i.m("#stats_top_k"),t),b=new u(i.m("#stats_frac"),t),_=new u(i.m("#stats_entropy"),t),v=()=>[+i.m("#color1").property("value"),+i.m("#color2").property("value"),+i.m("#color3").property("value")],w=()=>{const t=y.filter(function(){return i.m(this).classed("selected")}).property("id");return f[t]},x=new d(i.m("#results"),t,{color_thresholds:v()}),k=()=>{i.m("#model_name").text(m.project_name),i.m("#loader").style("opacity",0),i.n(".main_frame").style("opacity",1)};if(m.demo){const t=s(10)("./"+m.project_name+"_examples.json"),e=t=>{S(t.api),p.property("value",t.api.request.text)};i.m(".demos").selectAll(".demoBtn").data(t).join("div").attr("class","demoBtn").html(t=>t.description).on("click",t=>{c.classed("inactive",!0),t.api?e(t):(i.n(".loadersmall").style("display",null),i.f("demo/"+t.file).then(s=>{t.api=s,e(t)}))}),k()}else r.all_projects().then(t=>{m.project_name=Object.keys(t)[0],i.n(".demo").remove(),k()});const j=()=>{const t=x.colorStats;g.update(t)},S=t=>{console.log(t,"--- data"),i.m("#all_result").style("opacity",1).style("display",null),i.n(".loadersmall").style("display","none"),x.update(t.result),j(),(t=>{const e=t.result.pred_topk.map(t=>{const e=t.slice(0,m.entropyThreshold).map(t=>t[1]),s=e.reduce((t,e)=>t+e);return-1*e.map(t=>t/s).map(t=>0==t?0:t*Math.log(t)).reduce((t,e)=>t+e,0)});_.update({data:e,no_bins:8})})(t);const e=t.result.real_topk.map((e,s)=>e[1]/t.result.pred_topk[s][0][1]);b.update({data:e,label:"frac",no_bins:10,extent:[0,1]}),c.classed("inactive",!1)};c.on("click",()=>{const t=p.property("value");i.n(".loadersmall").style("display",null),c.classed("inactive",!0),r.analyze(m.project_name,t).then(S)}),y.on("click",function(){const t=this;y.classed("selected",function(){return this===t}),x.updateOptions({gltrMode:w()},!0)}),i.n(".colorThreshold").on("input",()=>{x.updateThresholdValues(v()),j()}),t.bind(d.events.tokenHovered,t=>{t.hovered?a.updateData(t.d):a.visility=!1}),i.m("body").on("touchstart",()=>{a.visility=!1});!function(){function t(t=window.innerWidth,e=window.innerHeight){i.n(".sidenav").style("height",e-53+"px");const s=m.sidebar,n=t-(s.visible?s.width:0);i.n(".main_frame").style("height",e-53+"px").style("width",n+"px")}i.m("#sidebar_btn").on("click",function(){const s=m.sidebar;s.visible=!s.visible,i.m(this).classed("on",s.visible),e.classed("hidden",!s.visible),e.style("right",s.visible?null:`-${m.sidebar.width}px`),t()}),window.onresize=(()=>{t(window.innerWidth,window.innerHeight)}),t(window.innerWidth,window.innerHeight)}()})}]);