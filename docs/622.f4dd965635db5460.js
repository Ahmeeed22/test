"use strict";(self.webpackChunkuser=self.webpackChunkuser||[]).push([[622],{7622:(O,g,e)=>{e.r(g),e.d(g,{AuthModule:()=>w});var p=e(6895),d=e(9299),i=e(4006),t=e(4650),c=e(9298),h=e(7185),f=e(4859),v=e(7392),s=e(9549),A=e(4144);function C(o,a){1&o&&(t.TgZ(0,"mat-error"),t._uU(1,"required"),t.qZA())}function Z(o,a){1&o&&(t.TgZ(0,"mat-error"),t._uU(1,"Please provide a valid email address"),t.qZA())}function x(o,a){1&o&&(t.TgZ(0,"mat-error"),t._uU(1,"please enter password is required "),t.qZA())}const y=[{path:"",component:(()=>{class o{constructor(n,r,l,m){this._formBuilder=n,this._AuthService=r,this._Router=l,this.toaster=m,this.loginFormGroup=this._formBuilder.group({email:["",[i.kI.required,i.kI.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],password:["",i.kI.required]}),this.hide=!0,setInterval(()=>{this.hiA()},6e3)}onSubmit(){this.loginFormGroup.valid?this._AuthService.login(this.loginFormGroup.value).subscribe({next:n=>{localStorage.setItem("token",n.token),this._AuthService.saveUserCurrent(),this._Router.navigate(["./main"]),this.toaster.success("Login Succesfully","Success")}}):this.loginFormGroup.markAllAsTouched()}hiA(){var n=document.getElementById("pathA");n?.classList?.toggle("hiA"),setTimeout(function(){n?.classList?.toggle("hiA")},3e3)}}return o.\u0275fac=function(n){return new(n||o)(t.Y36(i.qu),t.Y36(c.e),t.Y36(d.F0),t.Y36(h._W))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-login"]],decls:34,vars:6,consts:[[1,"card","border-0","overf"],[1,"row","d-flex"],[1,"col-lg-6"],[1,"card1","pb-5"],[1,"row"],["src","assets/logo-PhotoRoom.png-PhotoRoom.png",1,"logo"],[1,"row","px-3","justify-content-center","mt-4","mb-5","border-line"],["src","assets/loginpage.png",1,"image"],[1,"imgRamadan","d-flex","justify-content-end"],["id","pathA","src","https://ik.imagekit.io/2cvha6t2l9/25140727_7079.jpg?updatedAt=1679554936354","alt","","srcset","",1,"ramadan","hiA"],[1,"d-flex","align-items-center","justify-content-center"],[1,"w-75",3,"formGroup","ngSubmit"],[1,"m-left-auto","my-3","font-weight-bold"],[1,"col-md-12"],["appearance","outline",1,"w-100","my-2"],["matInput","","formControlName","email","placeholder","aaa@aaa.com","required",""],[4,"ngIf"],[1,"col-md-12","my-2"],["appearance","outline",1,"w-100"],["matInput","","formControlName","password","type","password","required","",3,"type"],["matSuffix","",3,"click"],["mat-raised-button","","color","primary"]],template:function(n,r){if(1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4),t._UZ(5,"img",5),t.qZA(),t.TgZ(6,"div",6),t._UZ(7,"img",7),t.qZA()()(),t.TgZ(8,"div",2)(9,"div",8),t._UZ(10,"img",9),t.qZA(),t.TgZ(11,"div",10)(12,"form",11),t.NdJ("ngSubmit",function(){return r.onSubmit()}),t.TgZ(13,"div",4)(14,"h2",12),t._uU(15,"Log into your account"),t.qZA(),t.TgZ(16,"div",13)(17,"mat-form-field",14)(18,"mat-label"),t._uU(19,"Email"),t.qZA(),t._UZ(20,"input",15),t.YNc(21,C,2,0,"mat-error",16),t.YNc(22,Z,2,0,"mat-error",16),t.qZA()(),t.TgZ(23,"div",17)(24,"mat-form-field",18)(25,"mat-label"),t._uU(26,"Password"),t.qZA(),t._UZ(27,"input",19),t.TgZ(28,"mat-icon",20),t.NdJ("click",function(){return r.hide=!r.hide}),t._uU(29),t.qZA(),t.YNc(30,x,2,0,"mat-error",16),t.qZA()(),t.TgZ(31,"div",17)(32,"button",21),t._uU(33,"Login"),t.qZA()()()()()()()()),2&n){let l,m,u;t.xp6(12),t.Q6J("formGroup",r.loginFormGroup),t.xp6(9),t.Q6J("ngIf",(null==(l=r.loginFormGroup.get("email"))?null:l.touched)&&(null==(l=r.loginFormGroup.get("email"))?null:l.hasError("required"))),t.xp6(1),t.Q6J("ngIf",(null==(m=r.loginFormGroup.get("email"))?null:m.touched)&&(null==(m=r.loginFormGroup.get("email"))?null:m.hasError("pattern"))),t.xp6(5),t.Q6J("type",r.hide?"password":"text"),t.xp6(2),t.Oqu(r.hide?"visibility_off":"visibility"),t.xp6(1),t.Q6J("ngIf",(null==(u=r.loginFormGroup.get("password"))?null:u.touched)&&(null==(u=r.loginFormGroup.get("password"))?null:u.hasError("required")))}},dependencies:[p.O5,f.lW,v.Hw,s.TO,s.KE,s.hX,s.R9,A.Nt,i._Y,i.Fj,i.JJ,i.JL,i.Q7,i.sg,i.u],styles:[".overf[_ngcontent-%COMP%]{overflow-x:hidden}.card0[_ngcontent-%COMP%]{box-shadow:0 4px 8px #757575;border-radius:0;height:70vh}h2[_ngcontent-%COMP%]{text-align:center;color:#3f51b5;padding:20px}.logo[_ngcontent-%COMP%]{width:200px;height:100px;margin-top:20px;margin-left:35px}.image[_ngcontent-%COMP%]{width:80%;height:80%}.border-line[_ngcontent-%COMP%]{border-right:1px solid #EEEEEE}.line[_ngcontent-%COMP%]{height:1px;width:54%;background-color:#e0e0e0;margin-top:10px}.or[_ngcontent-%COMP%]{width:10%;font-weight:700}@media screen and (max-width: 991px){.logo[_ngcontent-%COMP%]{margin-left:0}.image[_ngcontent-%COMP%]{width:300px;height:220px}.border-line[_ngcontent-%COMP%]{border-right:none}.card2[_ngcontent-%COMP%]{border-top:1px solid #EEEEEE!important;margin:0 15px}}.ramadan[_ngcontent-%COMP%]{width:340px;height:240px}@keyframes example{0%{transform:scale(.5)}25%{transform:scale(1)}50%{transform:scale(0)}75%{transform:scale(.5)}to{transform:scale(1)}}.hiA[_ngcontent-%COMP%]{animation:example 3s}"]}),o})()}];let M=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[d.Bz.forChild(y),d.Bz]}),o})();var T=e(259),E=e(3870),P=e(2575);let w=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[p.ez,M,T.m,E.q,i.UX,i.u5,P.I]}),o})()}}]);