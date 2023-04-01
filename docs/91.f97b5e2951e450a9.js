"use strict";(self.webpackChunkuser=self.webpackChunkuser||[]).push([[91],{3851:(Z,u,e)=>{e.d(u,{v:()=>f});var l=e(529),r=e(2340),t=e(4650);let f=(()=>{class s{constructor(o){this.http=o}getAllCustomers(){return this.http.get(`${r.N.baseApi}allcustomers`)}getAllCustomersSearch(o){let d=new l.LE;return(o?.name||0==o?.active||1==o?.active)&&Object.entries(o).forEach(([v,c])=>{c&&(d=d.append(v,c)),"active"==v&&0==c&&(d=d.append("active",0))}),this.http.get(`${r.N.baseApi}searchCustomer`,{params:d})}deleteCustomer(o){return this.http.delete(`${r.N.baseApi}deleteCustomer/${o}`)}updateCustomer(o,d){return this.http.put(`${r.N.baseApi}updateCustomer/${o}`,d)}addCustomer(o){return this.http.post(`${r.N.baseApi}addCustomer`,o)}}return s.\u0275fac=function(o){return new(o||s)(t.LFG(l.eN))},s.\u0275prov=t.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s})()},3091:(Z,u,e)=>{e.r(u),e.d(u,{DashboardModule:()=>T});var l=e(6895),r=e(9299),t=e(4650),f=e(5076),s=e(3851);const o=[{path:"",redirectTo:"home",pathMatch:"full"},{path:"home",component:(()=>{class n{constructor(i,a){this._TransactionsService=i,this._CustomersService=a,this.pettyCash=0,this.detailsProfite={},this.count=0,this.detailsProfiteMonthly={},this.countMonthly=0,this.amountCash=0,this.dateToday=new Date;var g=new Date;g.setUTCHours(0,0,0,0);var p=new Date;p.setUTCHours(23,59,59,999),this.filteration={date:!0,startedDate:g.toISOString(),endDate:p.toISOString()},this.getPettyCash()}ngOnInit(){this.getAllTransactions(),this.getAllTransactionsMonthly()}getAllTransactions(){this.filteration.offset=this.filteration.offset>0?this.filteration.offset-1:0,this._TransactionsService.getAllTransactions(this.filteration).subscribe({next:i=>{this.count=i.result.count,this.detailsProfite={...i.allProfite[0]}}})}startOfMonth(i){return new Date(i.getFullYear(),i.getMonth(),1)}getAllTransactionsMonthly(){let i=new Date,a=this.startOfMonth(i).toISOString();var g=new Date;g.setUTCHours(23,59,59,999),this.filteration={date:!0,startedDate:a,endDate:g.toISOString()},this.filteration.offset=this.filteration.offset>0?this.filteration.offset-1:0,this._TransactionsService.getAllTransactions(this.filteration).subscribe({next:p=>{this.countMonthly=p.result.count,this.detailsProfiteMonthly={...p.allProfite[0]},this.amountCash=this.detailsProfiteMonthly.paymentAmount-this.detailsProfiteMonthly.total_price_without_profite}})}getPettyCash(){this._CustomersService.getAllCustomersSearch({name:"petty Cash"}).subscribe({next:i=>{console.log(i),this.pettyCash=i.result[0]?.transactions[0]?.paymentAmount||0}})}}return n.\u0275fac=function(i){return new(i||n)(t.Y36(f.v),t.Y36(s.v))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-home-dashboard"]],decls:139,vars:50,consts:[[1,"container"],[1,"row","my-3"],[1,"text-info"],[1,"row","my-2"],[1,"col-md-12","col-xl-6"],[1,"card","comp-card"],[1,"card-body"],[1,"row","align-items-center"],[1,"col"],[1,"m-b-25"],[1,"f-w-700","text-c-blue"],[1,"m-b-0"],[1,"col-auto"],[1,"fas","fa-eye","bg-c-blue"],[1,"f-w-700","text-c-green"],[1,"fas","fa-bullseye","bg-c-green"],[1,"f-w-700","text-c-yellow"],[1,"fas","fa-hand-paper","bg-c-yellow"],[1,"fas","fa-hashtag","bg-c-blue"],[1,"fas","fa-eye","bg-c-yellow"]],template:function(i,a){1&i&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h3",2),t._uU(3,"Summary Of Day"),t.qZA()(),t.TgZ(4,"div",3)(5,"div",4)(6,"div",5)(7,"div",6)(8,"div",7)(9,"div",8)(10,"h6",9),t._uU(11,"Total Profite"),t.qZA(),t.TgZ(12,"h3",10),t._uU(13),t.ALo(14,"currency"),t.qZA(),t.TgZ(15,"p",11),t._uU(16),t.ALo(17,"date"),t.qZA()(),t.TgZ(18,"div",12),t._UZ(19,"i",13),t.qZA()()()()(),t.TgZ(20,"div",4)(21,"div",5)(22,"div",6)(23,"div",7)(24,"div",8)(25,"h6",9),t._uU(26,"Total Balance"),t.qZA(),t.TgZ(27,"h3",14),t._uU(28),t.ALo(29,"currency"),t.qZA(),t.TgZ(30,"p",11),t._uU(31),t.ALo(32,"date"),t.qZA()(),t.TgZ(33,"div",12),t._UZ(34,"i",15),t.qZA()()()()(),t.TgZ(35,"div",4)(36,"div",5)(37,"div",6)(38,"div",7)(39,"div",8)(40,"h6",9),t._uU(41,"Total Payment Amount"),t.qZA(),t.TgZ(42,"h3",16),t._uU(43),t.ALo(44,"currency"),t.qZA(),t.TgZ(45,"p",11),t._uU(46),t.ALo(47,"date"),t.qZA()(),t.TgZ(48,"div",12),t._UZ(49,"i",17),t.qZA()()()()(),t.TgZ(50,"div",4)(51,"div",5)(52,"div",6)(53,"div",7)(54,"div",8)(55,"h6",9),t._uU(56,"Numbers of Transactions"),t.qZA(),t.TgZ(57,"h3",10),t._uU(58),t.qZA(),t.TgZ(59,"p",11),t._uU(60),t.ALo(61,"date"),t.qZA()(),t.TgZ(62,"div",12),t._UZ(63,"i",18),t.qZA()()()()()(),t.TgZ(64,"div",1)(65,"h3",2),t._uU(66,"Summary Of Month"),t.qZA()(),t.TgZ(67,"div",3)(68,"div",4)(69,"div",5)(70,"div",6)(71,"div",7)(72,"div",8)(73,"h6",9),t._uU(74,"Total Profite"),t.qZA(),t.TgZ(75,"h3",10),t._uU(76),t.ALo(77,"currency"),t.qZA(),t.TgZ(78,"p",11),t._uU(79,"from "),t.TgZ(80,"span"),t._uU(81),t.ALo(82,"date"),t.qZA(),t._uU(83," to Now"),t.qZA()(),t.TgZ(84,"div",12),t._UZ(85,"i",13),t.qZA()()()()(),t.TgZ(86,"div",4)(87,"div",5)(88,"div",6)(89,"div",7)(90,"div",8)(91,"h6",9),t._uU(92,"Total Balance"),t.qZA(),t.TgZ(93,"h3",14),t._uU(94),t.ALo(95,"currency"),t.qZA(),t.TgZ(96,"p",11),t._uU(97,"from "),t.TgZ(98,"span"),t._uU(99),t.ALo(100,"date"),t.qZA(),t._uU(101," to Now"),t.qZA()(),t.TgZ(102,"div",12),t._UZ(103,"i",15),t.qZA()()()()(),t.TgZ(104,"div",4)(105,"div",5)(106,"div",6)(107,"div",7)(108,"div",8)(109,"h6",9),t._uU(110,"Total Current Cash"),t.qZA(),t.TgZ(111,"h3",16),t._uU(112),t.ALo(113,"currency"),t.qZA(),t.TgZ(114,"p",11),t._uU(115,"from "),t.TgZ(116,"span"),t._uU(117),t.ALo(118,"date"),t.qZA(),t._uU(119," to Now"),t.qZA()(),t.TgZ(120,"div",12),t._UZ(121,"i",19),t.qZA()()()()(),t.TgZ(122,"div",4)(123,"div",5)(124,"div",6)(125,"div",7)(126,"div",8)(127,"h6",9),t._uU(128,"Petty Cash"),t.qZA(),t.TgZ(129,"h3",10),t._uU(130),t.qZA(),t.TgZ(131,"p",11),t._uU(132,"from "),t.TgZ(133,"span"),t._uU(134),t.ALo(135,"date"),t.qZA(),t._uU(136," to Now"),t.qZA()(),t.TgZ(137,"div",12),t._UZ(138,"i",18),t.qZA()()()()()()()),2&i&&(t.xp6(13),t.Oqu(a.detailsProfite.total_profite?a.detailsProfite.total_profite:t.xi3(14,16,0," AED ")),t.xp6(3),t.Oqu(t.lcZ(17,19,a.dateToday)),t.xp6(12),t.Oqu(a.detailsProfite.balanceDue?a.detailsProfite.balanceDue:t.xi3(29,21,0," AED ")),t.xp6(3),t.Oqu(t.lcZ(32,24,a.dateToday)),t.xp6(12),t.Oqu(a.detailsProfite.paymentAmount?a.detailsProfite.paymentAmount:t.xi3(44,26,0," AED ")),t.xp6(3),t.Oqu(t.lcZ(47,29,a.dateToday)),t.xp6(12),t.Oqu(a.detailsProfite.quantity?a.detailsProfite.quantity:0),t.xp6(2),t.Oqu(t.lcZ(61,31,a.dateToday)),t.xp6(16),t.Oqu(t.xi3(77,33,a.detailsProfiteMonthly.total_profite," AED ")),t.xp6(5),t.Oqu(t.lcZ(82,36,a.filteration.startedDate)),t.xp6(13),t.Oqu(t.xi3(95,38,a.detailsProfiteMonthly.balanceDue," AED ")),t.xp6(5),t.Oqu(t.lcZ(100,41,a.filteration.startedDate)),t.xp6(13),t.Oqu(t.xi3(113,43,a.amountCash," AED ")),t.xp6(5),t.Oqu(t.lcZ(118,46,a.filteration.startedDate)),t.xp6(13),t.Oqu(a.pettyCash),t.xp6(4),t.Oqu(t.lcZ(135,48,a.filteration.startedDate)))},dependencies:[l.H9,l.uU],styles:[".card[_ngcontent-%COMP%]{border-radius:5px;box-shadow:0 0 5px #2b2b2b1a,0 11px 6px -7px #2b2b2b1a;border:none;margin-bottom:30px;transition:all .3s ease-in-out;position:relative;display:flex;flex-direction:column;min-width:0;word-wrap:break-word;background-color:#fff;background-clip:border-box}.card-body[_ngcontent-%COMP%]{flex:1 1 auto;padding:1.25rem}.col[_ngcontent-%COMP%]{flex-basis:0;flex-grow:1;max-width:100%}.m-b-25[_ngcontent-%COMP%]{margin-bottom:25px}h6[_ngcontent-%COMP%]{font-size:16px}h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{font-weight:500;font-family:quicksand,sans-serif}.text-c-blue[_ngcontent-%COMP%]{color:#4099ff}.f-w-700[_ngcontent-%COMP%]{font-weight:700}h3[_ngcontent-%COMP%]{font-size:24px}.m-b-0[_ngcontent-%COMP%]{margin-bottom:0}p[_ngcontent-%COMP%]{font-size:14px}.comp-card[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#fff;width:50px;height:50px;border-radius:5px;text-align:center;padding:17px;font-size:18px;text-shadow:0 6px 8px rgba(62,57,107,.18);transition:all .3s ease-in-out}.bg-c-blue[_ngcontent-%COMP%]{background:#4099ff}.fa[_ngcontent-%COMP%], .fas[_ngcontent-%COMP%]{font-weight:900}.text-c-green[_ngcontent-%COMP%]{color:#2ed8b6}.text-c-yellow[_ngcontent-%COMP%]{color:#ffb64d}.comp-card[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#fff;width:50px;height:50px;border-radius:5px;text-align:center;padding:17px 0;font-size:18px;text-shadow:0 6px 8px rgba(62,57,107,.18);transition:all .3s ease-in-out}.card-body[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%]{border-radius:50%}.bg-c-yellow[_ngcontent-%COMP%]{background:#ffb64d}.bg-c-green[_ngcontent-%COMP%]{background:#2ed8b6}"]}),n})()},{path:"transactions",loadChildren:()=>Promise.all([e.e(578),e.e(592),e.e(270)]).then(e.bind(e,2270)).then(n=>n.TransactionsModule)},{path:"services",loadChildren:()=>Promise.all([e.e(578),e.e(592),e.e(83)]).then(e.bind(e,83)).then(n=>n.ServiceModule)},{path:"customers",loadChildren:()=>Promise.all([e.e(578),e.e(413)]).then(e.bind(e,9413)).then(n=>n.CustomerModule)}];let d=(()=>{class n{}return n.\u0275fac=function(i){return new(i||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[r.Bz.forChild(o),r.Bz]}),n})();var v=e(805),c=e(4006),A=e(3870);let T=(()=>{class n{}return n.\u0275fac=function(i){return new(i||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[l.ez,d,v.m8,c.UX,c.u5,A.q]}),n})()},5076:(Z,u,e)=>{e.d(u,{v:()=>f});var l=e(2340),r=e(4650),t=e(529);let f=(()=>{class s{constructor(o){this.http=o,this.baseURL=l.N.baseApi}getAllTransactions(o){return this.http.post(`${this.baseURL}allTransactions`,o)}addTransaction(o){return this.http.post(`${this.baseURL}addTransaction`,o)}deleteTransaction(o){return this.http.patch(`${this.baseURL}deleteTransactionSoft/${o}`,{})}updateTransaction(o,d){return this.http.put(`${this.baseURL}updateTransaction/${o}`,d)}}return s.\u0275fac=function(o){return new(o||s)(r.LFG(t.eN))},s.\u0275prov=r.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s})()}}]);