"use strict";(self["webpackChunkextremesolutions_project"]=self["webpackChunkextremesolutions_project"]||[]).push([[713],{9713:function(t,a,i){i.r(a),i.d(a,{default:function(){return k}});var e=i(6252),n=i(3577);const o=t=>((0,e.dD)("data-v-7360125e"),t=t(),(0,e.Cn)(),t),l={class:"container"},r={class:"columns"},u={class:"column"},s={class:"table"},c=o((()=>(0,e._)("thead",null,[(0,e._)("tr",null,[(0,e._)("th",null,"ID"),(0,e._)("th",null,"First Name"),(0,e._)("th",null,"Last Name")])],-1))),p={colspan:"3"},g={class:"pagination"},h=["onClick"],_=["onClick"];function v(t,a,i,o,v,D){return(0,e.wg)(),(0,e.iD)("div",l,[(0,e._)("div",r,[(0,e._)("div",u,[(0,e._)("table",s,[c,(0,e._)("tbody",null,[((0,e.wg)(!0),(0,e.iD)(e.HY,null,(0,e.Ko)(v.Tutorial_Data_Array,(t=>((0,e.wg)(),(0,e.iD)("tr",{key:t.id},[(0,e._)("td",null,(0,n.zw)(t.id),1),(0,e._)("td",null,(0,n.zw)(t.title),1)])))),128))]),(0,e._)("tfoot",null,[(0,e._)("tr",null,[(0,e._)("td",p,[(0,e._)("nav",g,[(0,e._)("ul",null,[(0,e._)("li",null,[(0,e._)("a",{onClick:a[0]||(a[0]=t=>D.prev()),class:"button"},"Previous")]),((0,e.wg)(!0),(0,e.iD)(e.HY,null,(0,e.Ko)(v.pageCount,(t=>((0,e.wg)(),(0,e.iD)("li",{key:t.id},[v.pageNo==t?((0,e.wg)(),(0,e.iD)("a",{key:0,onClick:a=>D.page(t),class:"button is-primary"},(0,n.zw)(t),9,h)):((0,e.wg)(),(0,e.iD)("a",{key:1,onClick:a=>D.page(t),class:"button"},(0,n.zw)(t),9,_))])))),128)),(0,e._)("li",null,[(0,e._)("a",{onClick:a[1]||(a[1]=t=>D.next()),class:"button"},"Next page")])])])])])])])])])])}var D=i(1080);const d=D.T;var f={data(){return{Tutorial_Data:d,Tutorial_Data_Array:[],pageNo:1,pageSize:5,pageCount:0}},methods:{init:function(){this.virtualService({pageNo:this.pageNo,pageSize:this.pageSize})},page:function(t){this.virtualService({pageNo:t,pageSize:this.pageSize})},prev:function(){this.pageNo>1&&(this.pageNo-=1,this.virtualService({pageNo:this.pageNo,pageSize:this.pageSize}))},next:function(){this.pageNo<this.pageCount&&(this.pageNo+=1,this.virtualService({pageNo:this.pageNo,pageSize:this.pageSize}))},virtualDataFromDb:function(){return this.Tutorial_Data_Array=d,this.Tutorial_Data_Array},count:function(){return this.virtualDataFromDb().length},queryFromVirtualDB:function(t,a,i){var e=[];t={};for(var n=this.virtualDataFromDb(),o=this.count(t),l=a-1;l<i;l++)l<o&&e.push(n[l]);return e},virtualService:function(t){var a={},i=t.pageNo,e=t.pageSize,n=Math.ceil(this.count(a)/e);0==i&&(i=1),(i<0||i>n)&&(i=n);var o=(i-1)*e+1,l=o+e-1,r=this.queryFromVirtualDB(a,o,l);this.Tutorial_Data_Array=r,this.pageNo=i,this.pageCount=n}},created:function(){},mounted:function(){this.init()}},N=i(3744);const S=(0,N.Z)(f,[["render",v],["__scopeId","data-v-7360125e"]]);var k=S}}]);
//# sourceMappingURL=713.efe31e30.js.map