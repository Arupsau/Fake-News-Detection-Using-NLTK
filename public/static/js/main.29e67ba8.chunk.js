(this.webpackJsonpwebapp=this.webpackJsonpwebapp||[]).push([[0],
{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(1),i=n(2),r=n(4),s=n(3),o=n(5),l=n(0),c=n.n(l),d=n(7),p=n.n(d),u=function(e){function t()
{var e,n;Object(a.a)(this,t);for(var i=arguments.length,o=new Array(i),l=0;l<i;l++)o[l]=arguments[l];return(n=Object(r.a)
(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(o)))).state={hidden:!0},n.toggle=function(){n.setState((function(e)
{return{hidden:!e.hidden}}))},n}return Object(o.a)(t,e),Object(i.a)(t,[{key:"render",value:function()
{return this.props.prediction?c.a.createElement("div",{className:"pipeline"},c.a.createElement("p",
{className:"show",onClick:this.toggle},this.state.hidden?"Show":"Hide"," text processing pipeline ",
c.a.createElement("span",{role:"img","aria-label":"Show pipeline"},"\u2b07\ufe0f")),
c.a.createElement("div",{className:"output",hidden:this.state.hidden},c.a.createElement("div",null,
c.a.createElement("h2",null,"Original text"),this.props.original),c.a.createElement("div",null,c.a.createElement("h2",null,"Preprocessed text"),
this.props.preprocessed),c.a.createElement("div",null,c.a.createElement("h2",null,"Pos-tagged text"),this.props.pos_tagged))):null}}]),t}
(c.a.Component),h=(n(13),function(e){function t(){var e,n;Object(a.a)(this,t);for(var i=arguments.length,o=new Array(i),l=0;l<i;l++)o[l]=arguments[l];
return(n=Object(r.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(o)))).MIN_WORDS=25,n.MAX_WORDS=3500,
n.state={text:"",wordsHint:"You have to write at least ".concat(n.MIN_WORDS," words"),
loading:!1,error:!1,prediction:null,original:null,pos_tagged:null,preprocessed:null,emoji:!0},n.random=function()
{return fetch("/random").then((function(e){return e.json()})).then((function(e){return e.title+"\n\n"+e.text})).then((function(e)
{return n.setState({text:e,wordsHint:n.getWordsHint(e),prediction:null,original:null,pos_tagged:null,preprocessed:null,emoji:!1})})).catch((function(e)
{return n.setState({error:!0,emoji:!1})}))},n.updateInput=function(e){var t=e.target.value;
return n.setState({text:t,prediction:null,wordsHint:n.getWordsHint(t)})},n.getWordsHint=function(e)
{var t=e.split(/\s/).length;return t<n.MIN_WORDS?"You have to write ".concat(n.MIN_WORDS-t," more words"):t>=n.MIN_WORDS?"You can write up to ".concat(n.MAX_WORDS-t," more words"):void 0}
,n.predict=function(){n.MAX_WORDS-n.state.text.split(/\s/).length<0||(n.setState({loading:!0,prediction:null}),fetch("/predict",{method:"POST",headers:
{"Content-Type":"application/json"},body:JSON.stringify(n.state.text)}).then((function(e){return e.json()})).then((function(e)
{var t=e.original,a=e.pos_tagged,i=e.preprocessed,r=e.prediction;n.setState({loading:!1,prediction:r,original:t,pos_tagged:a,preprocessed:i})})).catch((function(e)
{return n.setState({loading:!1,error:!0})})))},n}return Object(o.a)(t,e),Object(i.a)(t,[{key:"render",value:function()
{return c.a.createElement("div",{className:"container"},c.a.createElement("h1",null,"NLP Fake News Detection By Arup & Aratrik"),
c.a.createElement("textarea",{autoFocus:!0,disabled:this.state.loading,value:this.state.text,onChange:this.updateInput}),
c.a.createElement("span",{className:"hint"}," ",this.state.wordsHint),c.a.createElement("button",{disabled:this.state.loading,className:"random",
onClick:this.random},"Load random News from test dataset ? ",c.a.createElement("span",null,"Click here"),".",
c.a.createElement("span",{role:"img",className:"emoji bounce"},this.state.emoji?"\ud83d\udc46\ud83c\udffc":"")),
c.a.createElement("button",{disabled:this.state.loading||this.MIN_WORDS-this.state.text.split(/\s/).length>0||this.MAX_WORDS-this.state.text.split(/\s/).length<0,className:"cta",onClick:this.predict}," Predict "),
this.state.loading?c.a.createElement("h1",null,"Classifying ..."):"",this.state.error?c.a.createElement("h1",null,"ERROR"):"",
c.a.createElement("h1",{className:this.state.prediction},this.state.prediction),
c.a.createElement(u,{prediction:this.state.prediction,original:this.state.original,pos_tagged:this.state.pos_tagged,preprocessed:this.state.preprocessed}))}}]),
t}(c.a.Component));p.a.render(c.a.createElement(h,null),document.getElementById("root"))},8:function(e,t,n){e.exports=n(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.29e67ba8.chunk.js.map