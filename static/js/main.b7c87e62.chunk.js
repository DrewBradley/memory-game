(this["webpackJsonpmemory-game"]=this["webpackJsonpmemory-game"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},,function(e,t,i){"use strict";i.r(t);var n=i(1),c=i.n(n),s=i(4),d=i.n(s),a=(i(13),i(14),i(3)),l=i(5),o=i(6),r=i(8),p=i(7),f=(i(15),i(16),i(0)),m=function(e){var t=e.flipped?180:0;return Object(f.jsxs)("article",{className:"card",style:{transform:"rotateY(".concat(t,"deg)")},onClick:function(){return e.pickCard(e)},children:[Object(f.jsx)("div",{className:"card-front"}),Object(f.jsx)("div",{className:"card-back",children:Object(f.jsx)("p",{className:"card-symbol",children:e.symbol})})]})},b=function(e){return Object(f.jsxs)("header",{children:[Object(f.jsx)("h1",{children:"Memory!"}),Object(f.jsx)("button",{onClick:e.shuffle,children:"New Game"}),Object(f.jsxs)("p",{className:"match-title",children:[e.count," Matches!!!"]})]})},u=function(){return Object(f.jsxs)("div",{className:"winner",children:[Object(f.jsx)("h1",{className:"winner-title",children:"YOU WIN!"}),Object(f.jsx)("p",{children:"\ud83e\udd73 \ud83c\udf89 \ud83e\udd73 \ud83c\udf89 \ud83e\udd73"})]})},h=[{id:1,symbol:"\u2764\ufe0f",flipped:!1},{id:2,symbol:"\u2764\ufe0f",flipped:!1},{id:3,symbol:"\u2666\ufe0f",flipped:!1},{id:4,symbol:"\u2666\ufe0f",flipped:!1},{id:5,symbol:"\u2663\ufe0f",flipped:!1},{id:6,symbol:"\u2663\ufe0f",flipped:!1},{id:7,symbol:"\u2660\ufe0f",flipped:!1},{id:8,symbol:"\u2660\ufe0f",flipped:!1},{id:9,symbol:"\ud83d\udd34",flipped:!1},{id:10,symbol:"\ud83d\udd34",flipped:!1},{id:11,symbol:"\ud83d\udfea",flipped:!1},{id:12,symbol:"\ud83d\udfea",flipped:!1},{id:13,symbol:"\u2602\ufe0e",flipped:!1},{id:14,symbol:"\u2602\ufe0e",flipped:!1},{id:15,symbol:"\u2605",flipped:!1},{id:16,symbol:"\u2605",flipped:!1}],j=function(e){Object(r.a)(i,e);var t=Object(p.a)(i);function i(){var e;return Object(l.a)(this,i),(e=t.call(this)).shuffleDeck=function(){e.setState({deck:h.sort((function(){return Math.random()-.5})),flipped:[],match:[]})},e.pickCard=function(t){var i=t.id,n=t.symbol;e.setState({flipped:[].concat(Object(a.a)(e.state.flipped),[{symbol:n,id:i,flipped:!0}])})},e.findMatch=function(){var t=e.state.flipped[0],i=e.state.flipped[1];e.state.flipped.length>1&&(t.symbol===i.symbol?e.itsAMatch(t,i):e.resetCards()),e.state.match.length>15&&e.showWin()},e.showWin=function(){setTimeout((function(){e.shuffleDeck()}),4e3)},e.itsAMatch=function(t,i){e.setState({match:[].concat(Object(a.a)(e.state.match),[t,i]),flipped:[]})},e.resetCards=function(){setTimeout((function(){e.setState({flipped:[]})}),1e3)},e.state={cards:h.sort((function(){return Math.random()-.5})),flipped:[],match:[]},e}return Object(o.a)(i,[{key:"componentDidUpdate",value:function(){this.findMatch()}},{key:"render",value:function(){var e=this,t=this.state.cards.map((function(t){return e.state.flipped.find((function(e){return e.id===t.id}))||e.state.match.find((function(e){return e.id===t.id}))?Object(f.jsx)(m,{id:t.id,symbol:t.symbol,flipped:!0,pickCard:e.pickCard},t.id):Object(f.jsx)(m,{id:t.id,symbol:t.symbol,flipped:!1,pickCard:e.pickCard},t.id)}));return Object(f.jsxs)("div",{className:"game-container",children:[Object(f.jsx)(b,{shuffle:this.shuffleDeck,count:this.state.match.length/2}),this.state.match.length>15&&Object(f.jsx)(u,{}),Object(f.jsx)("section",{className:"game-board",children:t})]})}}]),i}(n.Component),y=function(){return Object(f.jsx)("div",{className:"App",children:Object(f.jsx)(j,{})})},O=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,19)).then((function(t){var i=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,d=t.getTTFB;i(e),n(e),c(e),s(e),d(e)}))};d.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(y,{})}),document.getElementById("root")),O()}],[[18,1,2]]]);
//# sourceMappingURL=main.b7c87e62.chunk.js.map