"use strict";(self.webpackChunkuser=self.webpackChunkuser||[]).push([[519],{3519:(ce,C,a)=>{a.r(C),a.d(C,{ReminderModule:()=>le});var p=a(6895),g=a(9299),d=a(4006),f=a(5938),R=a(5976),e=a(4650),Z=a(7185),b=a(8629),w=a(5009),A=a(4859),M=a(7392),h=a(9549),T=a(4144),m=a(9602),k=a(9241);const y=["services"],U=["status"];function N(t,s){if(1&t&&e._UZ(0,"app-ddl-searchable",23,24),2&t){const n=e.oxw();e.Q6J("objData",n.servicesObj)}}function D(t,s){if(1&t&&e._UZ(0,"app-ddl-searchable",23,25),2&t){const n=e.oxw();e.Q6J("objData",n.statusObj)}}function O(t,s){if(1&t){const n=e.EpF();e.TgZ(0,"button",26),e.NdJ("click",function(){e.CHM(n);const o=e.oxw(),r=e.MAs(34);return e.KtG(o.createReminder(r.value))}),e._uU(1,"Create"),e.qZA()}}function q(t,s){if(1&t){const n=e.EpF();e.TgZ(0,"button",26),e.NdJ("click",function(){e.CHM(n);const o=e.oxw(),r=e.MAs(34);return e.KtG(o.updateReminder(r.value))}),e._uU(1,"Update"),e.qZA()}}let _=(()=>{class t{constructor(n,i,o,r,c,u,v,x){this.fb=n,this._Router=i,this.toaster=o,this._ReminderService=r,this.dialog=c,this.dialogpublic=u,this.data=v,this._ServicesService=x,this.getStatus(),this.getServices(),this.createForm()}ngOnInit(){}getStatus(){console.log(this?.data?.status,"this?.data?.active"),console.log(this.data,"this.data");let n="new"==this?.data?.status&&this.data?{id:"new",name:" Processed"}:{id:"pending",name:"Not Processed"};console.log(n,"oldSelected"),this.statusObj={staticArray:[{id:"new",name:" Processed"},{id:"pending",name:"Not Processed"}],placeholder:"\u0627\u0644\u062d\u0627\u0644\u0629 ",placeholderEn:"Status",required:!0,searachable:!1,multiSelect:!1,oldSelectedItems:this.data?n:null}}getServices(){this._ServicesService.getAllServices().subscribe({next:n=>{this.servicesObj={staticArray:n.result.rows,placeholder:"\u0627\u0644\u062e\u062f\u0645\u0629",placeholderEn:"Service",required:!0,searachable:!0,multiSelect:!1,oldSelectedItems:this?.data?.service}}})}createForm(){this.minDate=this.data?.dateExpire||new Date(1/2015),this.newServiceForm=this.fb.group({companyName:[this.data?.companyName||"",d.kI.required],sponsored:[this.data?.sponsored||"",d.kI.required],message:[this.data?.message||"",d.kI.required],dateExpire:[this.data?.dateExpire||null,d.kI.min(0)]}),this.formValues={...this.newServiceForm.value}}createReminder(n){console.log(n);let i={...this.newServiceForm.value,dateExpire:new Date(n.split("-").reverse().join("-")).toISOString(),status:this.status?.gettingResult()?.id,service_id:this.services?.gettingResult()?.id};console.log(i),this.newServiceForm.valid&&this.services?.validate()&&this.status.validate()?this._ReminderService.addReminder(i).subscribe({next:o=>{console.log(o),this.toaster.success("success add transaction","success"),this.dialog.close(!0)},error:o=>{this.newServiceForm.markAllAsTouched()}}):(this.newServiceForm.markAllAsTouched(),this.status.validate(),this.services.validate())}updateReminder(n){if(this.testChange()&&this.newServiceForm.valid){let i={...this.newServiceForm.value,dateExpire:new Date(n.split("-").reverse().join("-")).toISOString(),status:this.status?.gettingResult()?.id,service_id:this.services?.gettingResult()?.id};console.log(i),console.log(this.services?.gettingResult()),this._ReminderService.updateRemider(this.data.id,i).subscribe({next:o=>{this.toaster.success("success update Reminder","success"),this.dialog.close(!0)},error:o=>{this.newServiceForm.markAllAsTouched(),this.status.validate()}})}else this.toaster.info("No Data Edited","info")}testChange(){let n=!1;return Object.keys(this.formValues).forEach(i=>{this.formValues[i]!==this.newServiceForm.value[i]&&(n=!0)}),!n&&this?.data?.active!=this.status.gettingResult()?.id&&(n=!0),n}close(){let n;this.testChange()?(n=this.dialogpublic.open(R.P,{width:"750px",disableClose:!0}),n?.afterClosed().subscribe(i=>{"no"!==i&&this.dialog.close()})):this.dialog.close()}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(d.qu),e.Y36(g.F0),e.Y36(Z._W),e.Y36(b.Z),e.Y36(f.so),e.Y36(f.uw),e.Y36(f.WI),e.Y36(w.r))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-add-reminder"]],viewQuery:function(n,i){if(1&n&&(e.Gf(y,5),e.Gf(U,5)),2&n){let o;e.iGM(o=e.CRH())&&(i.services=o.first),e.iGM(o=e.CRH())&&(i.status=o.first)}},decls:44,vars:9,consts:[[1,"p-2"],[1,"d-flex","justify-content-between","align-items-center"],[1,"m-0"],["mat-flat-button","",1,"text-danger",3,"click"],[3,"formGroup"],[1,"row","mt-1"],[1,"col-md-12"],["appearance","outline",1,"w-100","rounded",2,"border-radius","20px !important"],["matInput","","currencyMask","","type","text","formControlName","companyName","placeholder","Company Name"],["matInput","","currencyMask","","type","text","formControlName","sponsored","placeholder","Sponsored"],[1,"col-md-12","my-2"],[3,"objData",4,"ngIf"],["matInput","","currencyMask","","type","text","formControlName","message","placeholder","Message"],["appearance","outline",1,"w-100","p-0","m-0"],[1,"d-flex","w-100"],["matInput","","formControlName","dateExpire",3,"min","matDatepicker"],["start",""],["matIconSuffix","",3,"for"],["pickerstart",""],[1,"tw-p-3"],[1,"d-flex","justify-content-center","align-items-center"],["mat-flat-button","","class","btn btn-success py-1 px-5 mx-2",3,"click",4,"ngIf"],["mat-flat-button","",1,"btn","btn-danger","py-1","px-5",3,"click"],[3,"objData"],["services",""],["status",""],["mat-flat-button","",1,"btn","btn-success","py-1","px-5","mx-2",3,"click"]],template:function(n,i){if(1&n&&(e.TgZ(0,"div",0)(1,"header",1)(2,"h1",2),e._uU(3),e.qZA(),e.TgZ(4,"button",3),e.NdJ("click",function(){return i.close()}),e.TgZ(5,"mat-icon"),e._uU(6,"close"),e.qZA()()(),e.TgZ(7,"form",4)(8,"div",5)(9,"div",6)(10,"mat-form-field",7)(11,"mat-label"),e._uU(12,"Company Name"),e.qZA(),e._UZ(13,"input",8),e.qZA()(),e.TgZ(14,"div",6)(15,"mat-form-field",7)(16,"mat-label"),e._uU(17,"Sponsored"),e.qZA(),e._UZ(18,"input",9),e.qZA()(),e.TgZ(19,"div",10),e.YNc(20,N,2,1,"app-ddl-searchable",11),e.qZA(),e.TgZ(21,"div",10),e.YNc(22,D,2,1,"app-ddl-searchable",11),e.qZA(),e.TgZ(23,"div",6)(24,"mat-form-field",7)(25,"mat-label"),e._uU(26,"Message"),e.qZA(),e._UZ(27,"input",12),e.qZA()(),e.TgZ(28,"div",6)(29,"mat-form-field",13)(30,"mat-label"),e._uU(31,"Choose a Expire Date"),e.qZA(),e.TgZ(32,"div",14),e._UZ(33,"input",15,16)(35,"mat-datepicker-toggle",17),e.qZA(),e._UZ(36,"mat-datepicker",null,18),e.qZA()()()(),e.TgZ(38,"footer",19)(39,"div",20),e.YNc(40,O,2,0,"button",21),e.YNc(41,q,2,0,"button",21),e.TgZ(42,"button",22),e.NdJ("click",function(){return i.close()}),e._uU(43,"Close"),e.qZA()()()()),2&n){const o=e.MAs(37);e.xp6(3),e.Oqu(i.data?"Update Reminder":"Add New Reminder"),e.xp6(4),e.Q6J("formGroup",i.newServiceForm),e.xp6(13),e.Q6J("ngIf",i.servicesObj),e.xp6(2),e.Q6J("ngIf",i.statusObj),e.xp6(11),e.Q6J("min",i.minDate)("matDatepicker",o),e.xp6(2),e.Q6J("for",o),e.xp6(5),e.Q6J("ngIf",!i.data),e.xp6(1),e.Q6J("ngIf",i.data)}},dependencies:[p.O5,A.lW,M.Hw,h.KE,h.hX,T.Nt,m.Mq,m.hl,m.nW,d._Y,d.Fj,d.JJ,d.JL,d.sg,d.u,k.g]}),t})();var S=a(7974),l=a(671);const I=["start"],L=["end"],Y=["name"];function J(t,s){1&t&&(e.TgZ(0,"th",50),e._uU(1," Index "),e.qZA())}function j(t,s){if(1&t&&(e.TgZ(0,"td",51),e._uU(1),e.qZA()),2&t){const n=s.index;e.xp6(1),e.hij("",n+1," ")}}function P(t,s){1&t&&(e.TgZ(0,"th",50),e._uU(1,"Company Name "),e.qZA())}function Q(t,s){if(1&t&&(e.TgZ(0,"td",51),e._uU(1),e.qZA()),2&t){const n=s.$implicit;e.xp6(1),e.hij(" ",n.companyName," ")}}function E(t,s){1&t&&(e.TgZ(0,"th",50),e._uU(1,"Sponsored "),e.qZA())}function F(t,s){if(1&t&&(e.TgZ(0,"td",51),e._uU(1),e.qZA()),2&t){const n=s.$implicit;e.xp6(1),e.hij(" ",n.sponsored," ")}}function G(t,s){1&t&&(e.TgZ(0,"th",50),e._uU(1," Service "),e.qZA())}function H(t,s){if(1&t&&(e.TgZ(0,"td",51),e._uU(1),e.qZA()),2&t){const n=s.$implicit;e.xp6(1),e.hij(" ",n.service.name||"-"," ")}}function B(t,s){1&t&&(e.TgZ(0,"th",50),e._uU(1," Message "),e.qZA())}function z(t,s){if(1&t&&(e.TgZ(0,"td",51),e._uU(1),e.qZA()),2&t){const n=s.$implicit;e.xp6(1),e.hij(" ",n.message," ")}}function W(t,s){1&t&&(e.TgZ(0,"th",50),e._uU(1," Expire Date"),e.qZA())}function K(t,s){if(1&t&&(e.TgZ(0,"td",51),e._uU(1),e.ALo(2,"date"),e.qZA()),2&t){const n=s.$implicit;e.xp6(1),e.hij(" ",e.lcZ(2,1,n.dateExpire)," ")}}function $(t,s){1&t&&(e.TgZ(0,"th",50),e._uU(1," Status "),e.qZA())}function V(t,s){if(1&t&&(e.TgZ(0,"td",51),e._UZ(1,"div",52),e.qZA()),2&t){const n=s.$implicit;e.xp6(1),e.Q6J("ngClass","new"==n.status?"active":"disactive")}}function X(t,s){1&t&&(e.TgZ(0,"th",50),e._uU(1," Action "),e.qZA()),2&t&&e.uIk("rowspan",2)}function ee(t,s){if(1&t){const n=e.EpF();e.TgZ(0,"td",53)(1,"button",54),e.NdJ("click",function(o){const c=e.CHM(n).$implicit,u=e.oxw();return e.KtG(u.updateReminder(o,c))}),e._uU(2,"Update"),e.qZA(),e.TgZ(3,"button",55),e.NdJ("click",function(){const r=e.CHM(n).$implicit,c=e.oxw();return e.KtG(c.deleteReminder(r.id))}),e._uU(4,"Delete"),e.qZA()()}}function te(t,s){1&t&&e._UZ(0,"tr",56)}function ne(t,s){1&t&&e._UZ(0,"tr",57)}const ie=function(){return[5,10,20]},oe=[{path:"",redirectTo:"List",pathMatch:"full"},{path:"List",component:(()=>{class t{constructor(n,i,o){this._ReminderService=n,this.toaster=i,this.dialog=o,this.displayedColumns=["index","companyName","sponsored","message","service","status","dateExpire","action"],this.minDate=new Date(1990,0,1),this.filter={},this.getAllReminders()}ngOnInit(){}makeValidationMax(n){console.log("test",n),this.minDate=new Date(n)}getAllReminders(n){this._ReminderService.getAllReminders(n).subscribe({next:i=>{console.log(i.result.rows),!n&&i.result.rows.length>0&&this._ReminderService.IsReminder.next(!0),!n&&0==i.result.rows.length&&this._ReminderService.IsReminder.next(!1),this._ReminderService.IsReminder.subscribe(()=>{console.log(this._ReminderService.IsReminder.getValue(),"test reminder exist")}),this.dataSource=new l.by(i.result.rows),this.dataSource.paginator=this.paginator,this.toaster.success("success get Reminders","success")}})}addReminder(){this.dialog.open(_,{width:"60%",disableClose:!0}).afterClosed().subscribe(i=>{this.getAllReminders()})}search(n,i,o,r){console.log(r),i||o||r?(i&&(this.filter.dateExpire=new Date(i.split("-").reverse().join("-")).toISOString()),o&&(this.filter.endExpire=new Date(o.split("-").reverse().join("-")).toISOString()),r&&(this.filter.companyName=r),this.getAllReminders(this.filter)):this.toaster.info("please select search criteria","Info")}resetSearch(){this.start.nativeElement.value=null,this.end.nativeElement.value=null,this.name.nativeElement.value=null,this.filter={},this.getAllReminders()}updateReminder(n,i){this.dialog.open(_,{width:"60%",disableClose:!0,data:i}).afterClosed().subscribe(r=>{this.getAllReminders()})}deleteReminder(n){this.dialog.open(R.P,{width:"750px",disableClose:!0,data:{message:"Are You Sure to Delete ? "}}).afterClosed().subscribe(o=>{"no"!==o?this._ReminderService.deleteReminder(n).subscribe({next:()=>{this.toaster.success("Reminder Deleted Succesfully","Success"),this.getAllReminders()}}):this.toaster.warning("Reminder not deleted","Warning")})}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(b.Z),e.Y36(Z._W),e.Y36(f.uw))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-list-reminder"]],viewQuery:function(n,i){if(1&n&&(e.Gf(S.NW,5),e.Gf(I,5),e.Gf(L,5),e.Gf(Y,5)),2&n){let o;e.iGM(o=e.CRH())&&(i.paginator=o.first),e.iGM(o=e.CRH())&&(i.start=o.first),e.iGM(o=e.CRH())&&(i.end=o.first),e.iGM(o=e.CRH())&&(i.name=o.first)}},decls:81,vars:10,consts:[[1,"m-4"],[1,"d-flex","justify-content-end","align-items-center","mx-auto","my-3"],["mat-raised-button","",1,"addService",2,"margin-right","9%",3,"click"],[1,"d-flex","justify-content-center","p-2","m-2"],[1,"border","p-2","m-2",2,"background-color","rgb(255, 254, 254)","border-radius","30px"],[1,"text-info","font-weight-bolder",2,"font-size","22px","padding-left","20px"],[1,"row","m-2"],[1,"col-md-4","mt-lg-2"],["appearance","outline",1,"w-100","p-0","m-0"],[1,"d-flex","w-100"],["matInput","",3,"matDatepicker","dateChange"],["start",""],["matIconSuffix","",3,"for"],["pickerstart",""],["appearance","outline",1,"w-100"],[1,"d-flex"],["matInput","",3,"min","matDatepicker"],["end",""],["pickerEnd",""],[1,"col-md-4","mt-2"],["appearance","outline",1,"w-100","rounded",2,"border-radius","20px !important"],["matInput","","currencyMask","","type","text","placeholder","Company Name"],["name",""],[1,"col-12","my-2","text-right"],[1,"btns","d-flex","justify-content-end","align-items-end"],[1,"btn",2,"background","#1746A2",3,"click"],[1,"btn",2,"background-color","#ffb64d",3,"click"],[1,""],[1,"parennt","shadow","m-auto",2,"width","82%"],[1,"pt-2","mx-auto","d-flex","justify-content-end"],[1,"active"],[1,"px-2"],[1,"disactive"],[1,"table-responsive"],["mat-table","",1,"text-center",3,"dataSource"],["matColumnDef","index"],["class","text-center","mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","companyName"],["matColumnDef","sponsored"],["matColumnDef","service"],["matColumnDef","message"],["matColumnDef","dateExpire"],["matColumnDef","status"],["matColumnDef","action"],["mat-cell","","class","action-link",4,"matCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],[1,"d-flex","justify-content-center"],["showFirstLastButtons","","aria-label","Select page of periodic elements",3,"pageSizeOptions"],["mat-header-cell","",1,"text-center"],["mat-cell",""],[1,"m-auto",3,"ngClass"],["mat-cell","",1,"action-link"],[1,"btn","btn-info","mx-2",3,"click"],[1,"btn","btn-danger","mx-2",3,"click"],["mat-header-row",""],["mat-row",""]],template:function(n,i){if(1&n){const o=e.EpF();e.TgZ(0,"div",0)(1,"div",1)(2,"button",2),e.NdJ("click",function(){return i.addReminder()}),e._uU(3,"Add Reminder"),e.qZA()(),e.TgZ(4,"div",3)(5,"form",4)(6,"h3",5),e._uU(7,"Search"),e.qZA(),e.TgZ(8,"div",6)(9,"div",7)(10,"mat-form-field",8)(11,"mat-label"),e._uU(12,"Choose a Start Date"),e.qZA(),e.TgZ(13,"div",9)(14,"input",10,11),e.NdJ("dateChange",function(){e.CHM(o);const c=e.MAs(15);return e.KtG(i.makeValidationMax(c.value))}),e.qZA(),e._UZ(16,"mat-datepicker-toggle",12),e.qZA(),e._UZ(17,"mat-datepicker",null,13),e.qZA()(),e.TgZ(19,"div",7)(20,"mat-form-field",14)(21,"mat-label"),e._uU(22,"Choose a End date"),e.qZA(),e.TgZ(23,"div",15),e._UZ(24,"input",16,17)(26,"mat-datepicker-toggle",12),e.qZA(),e._UZ(27,"mat-datepicker",null,18),e.qZA()(),e.TgZ(29,"div",19)(30,"mat-form-field",20)(31,"mat-label"),e._uU(32,"Company Name"),e.qZA(),e._UZ(33,"input",21,22),e.qZA()(),e.TgZ(35,"div",23)(36,"div",24)(37,"button",25),e.NdJ("click",function(c){e.CHM(o);const u=e.MAs(15),v=e.MAs(25),x=e.MAs(34);return e.KtG(i.search(c,u.value,v.value,x.value))}),e._uU(38,"Search"),e.qZA(),e.TgZ(39,"button",26),e.NdJ("click",function(){return i.resetSearch()}),e._uU(40,"Reset"),e.qZA()()()()()(),e.TgZ(41,"div",27)(42,"div",28)(43,"div",29),e._UZ(44,"div",30),e.TgZ(45,"span",31),e._uU(46," Processed"),e.qZA(),e._UZ(47,"div",32),e.TgZ(48,"span",31),e._uU(49,"Not Processed"),e.qZA()(),e.TgZ(50,"div",33)(51,"table",34),e.ynx(52,35),e.YNc(53,J,2,0,"th",36),e.YNc(54,j,2,1,"td",37),e.BQk(),e.ynx(55,38),e.YNc(56,P,2,0,"th",36),e.YNc(57,Q,2,1,"td",37),e.BQk(),e.ynx(58,39),e.YNc(59,E,2,0,"th",36),e.YNc(60,F,2,1,"td",37),e.BQk(),e.ynx(61,40),e.YNc(62,G,2,0,"th",36),e.YNc(63,H,2,1,"td",37),e.BQk(),e.ynx(64,41),e.YNc(65,B,2,0,"th",36),e.YNc(66,z,2,1,"td",37),e.BQk(),e.ynx(67,42),e.YNc(68,W,2,0,"th",36),e.YNc(69,K,3,3,"td",37),e.BQk(),e.ynx(70,43),e.YNc(71,$,2,0,"th",36),e.YNc(72,V,2,1,"td",37),e.BQk(),e.ynx(73,44),e.YNc(74,X,2,1,"th",36),e.YNc(75,ee,5,0,"td",45),e.BQk(),e._uU(76,"> "),e.YNc(77,te,1,0,"tr",46),e.YNc(78,ne,1,0,"tr",47),e.qZA()(),e.TgZ(79,"div",48),e._UZ(80,"mat-paginator",49),e.qZA()()()()}if(2&n){const o=e.MAs(18),r=e.MAs(28);e.xp6(14),e.Q6J("matDatepicker",o),e.xp6(2),e.Q6J("for",o),e.xp6(8),e.Q6J("min",i.minDate)("matDatepicker",r),e.xp6(2),e.Q6J("for",r),e.xp6(25),e.Q6J("dataSource",i.dataSource),e.xp6(26),e.Q6J("matHeaderRowDef",i.displayedColumns),e.xp6(1),e.Q6J("matRowDefColumns",i.displayedColumns),e.xp6(2),e.Q6J("pageSizeOptions",e.DdM(9,ie))}},dependencies:[p.mk,A.lW,h.KE,h.hX,T.Nt,m.Mq,m.hl,m.nW,l.BZ,l.fO,l.as,l.w1,l.Dz,l.nj,l.ge,l.ev,l.XQ,l.Gk,S.NW,d._Y,d.JL,d.F,p.uU],styles:["button[_ngcontent-%COMP%]{color:#fff;margin:0 5px}button.addService[_ngcontent-%COMP%]{background-color:#63e38a!important;color:#fff;padding:2px 23px;font-size:20px}table[_ngcontent-%COMP%]{width:100%;margin:20px auto}[_nghost-%COMP%]     table thead{background-color:#7e807e!important}[_nghost-%COMP%]     table thead .mat-header-cell{color:#fff}button[_ngcontent-%COMP%]{transition:all .4s;border-radius:13px}button[_ngcontent-%COMP%]:hover{border-radius:30px}th[_ngcontent-%COMP%]{font-size:16px;font-weight:500}.active[_ngcontent-%COMP%]{width:24px;height:24px;border-radius:50%;background-color:#00ff00e6}.disactive[_ngcontent-%COMP%]{width:20px;height:20px;background-color:#ff0000e6}form[_ngcontent-%COMP%]{width:82%;margin:auto}@media only screen and (max-width: 993px){bottom[_ngcontent-%COMP%]{margin:5px}form[_ngcontent-%COMP%]{width:90%}}.mat-elevation-z8[_ngcontent-%COMP%]{box-shadow:0 5px 5px -3px #0003,0 8px 10px 1px #00000024,0 3px 14px 2px #0000001f}.mat-form-field-appearance-outline[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%]{padding:0!important}[_nghost-%COMP%]     .mat-form-field-infix{display:block;position:relative;flex:auto;min-width:0}[_nghost-%COMP%]     .mat-form-field-infix{padding:0!important}[_nghost-%COMP%]     .mat-form-field-appearance-outline .mat-form-field-outline{display:flex;position:absolute;inset:.25em 0 0;pointer-events:none;height:53px}[_nghost-%COMP%]   input.mat-input-element[_ngcontent-%COMP%]{margin-top:.9375em}.mat-row[_ngcontent-%COMP%]:hover   .mat-cell[_ngcontent-%COMP%]{background-color:#fff5a2}"]}),t})()},{path:"Add",component:_}];let se=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[g.Bz.forChild(oe),g.Bz]}),t})();var ae=a(259),re=a(2575),de=a(3870);let le=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[p.ez,se,de.q,d.u5,d.UX,re.I,ae.m]}),t})()}}]);