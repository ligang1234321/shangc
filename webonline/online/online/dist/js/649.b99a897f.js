"use strict";(self["webpackChunkproject"]=self["webpackChunkproject"]||[]).push([[649],{2649:function(t,s,e){e.r(s),e.d(s,{default:function(){return r}});var n=function(){var t=this,s=t._self._c;return s("div",{staticClass:"Daifuk"},[s("div",{staticClass:"index"},[s("p",{on:{click:function(s){return t.back1()}}},[t._v("<返回")]),s("h2",[t._v("商品订单")]),s("img",{attrs:{src:e(5462),alt:""},on:{click:function(s){return t.cars()}}})]),t._l(t.msg,(function(e,n){return s("div",{staticClass:"conten"},[s("div",{staticClass:"time"},[s("p",[t._v("时间："+t._s(e.time))]),s("p",[t._v("状态："+t._s(e.states))])]),t._l(e.info,(function(e,n){return s("ul",{staticClass:"myshops"},[s("li",[s("img",{attrs:{src:e.src,alt:""}}),s("p",[t._v(t._s(e.shopname))]),s("p",[t._v("x"+t._s(e.num))]),s("p",[t._v(t._s(e.pic)+"元")])])])})),s("p",[t._v("实付金额："+t._s(e.allpic)+"元")]),s("button",[t._v("查看物流")])],2)}))],2)},a=[],o=(e(7658),{name:"Daifuk",data(){return{msg:[]}},methods:{back1(){history.back()},cars(){this.$router.push({name:"shopcar"})}},beforeMount(){this.$http.get("/orders",{name:window.localStorage.getItem("user")}).then((t=>{var s=[];let e=[],n=t.data.data;console.log(n);for(var a=0;a<n.length;a++)console.log(n[a]),"未付款"==n[a].states&&e.push(n[a]);for(var o=0;o<e.length;o++){let t={time:"",states:"",info:[]},n=0,a=0;for(var i=0;i<e.length;i++)e[o].time==e[i].time&&(n+=e[i].pic*e[i].num,t.time=e[i].time,t.states=e[i].states,t.info[a]=e[i],a++);t.allpic=n,s[o]=t}console.log(s);for(o=0;o<s.length;o++){let t=0;for(i=0;i<s.length;i++)s[o].time==s[i].time&&(t++,t>1&&s.splice(i,1))}this.msg=s,console.log(s)})).catch((t=>{console.log(t)}))}}),i=o,c=e(1001),l=(0,c.Z)(i,n,a,!1,null,"3932a9c8",null),r=l.exports}}]);
//# sourceMappingURL=649.b99a897f.js.map