"use strict";(self.webpackChunkparfay=self.webpackChunkparfay||[]).push([[224],{3224:(J,p,s)=>{s.r(p),s.d(p,{SettingsModule:()=>M});var f=s(8583),c=s(4655),Z=s(8239),a=s(171),e=s(7716),T=s(4795),v=s(3514),A=s(1552),r=s(8295),U=s(3166),g=s(3679),y=s(1095),d=s(7746),h=s(3220);const S=[{path:"",component:(()=>{class n{constructor(t,i){this.settingsService=t,this.ogreService=i,this.myUserName="",this.myUserNumber="",this.oldUserName="",this.usingDarkTheme=!0,this.usingDarkTheme="dark"===this.settingsService.getPreferences().theme}ngOnInit(){var t=this;return(0,Z.Z)(function*(){console.log("settings component initialized"),t.myUser=yield t.ogreService.getUser();const i=t.myUser.alias.split("#");t.myUserName=i[0],t.oldUserName=i[0],t.myUserNumber=i[1]})()}themeRadioButtonChanged(t){"light"===t.options[0].value&&this.lightTheme(),"dark"===t.options[0].value&&this.darkTheme()}saveProfileSettings(){this.saveProfileName()}saveProfileName(){var t=this;return(0,Z.Z)(function*(){if(t.myUserName===t.oldUserName)return;const i=yield t.ogreService.ogre.updateAlias(t.myUserName);console.log(i)})()}lightTheme(){this.settingsService.lightTheme()}darkTheme(){this.settingsService.darkTheme()}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(T.g),e.Y36(v.B))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-settings"]],viewQuery:function(t,i){if(1&t&&e.Gf(a.pp,5),2&t){let l;e.iGM(l=e.CRH())&&(i.accordion=l.first)}},decls:57,vars:7,consts:[["multi",""],[1,"justify-content-between"],[1,"row","justify-content-between","align-items-baseline"],[1,"col"],["appearance","fill"],["matPrefix",""],["matInput","",3,"ngModel","ngModelChange"],["matSuffix",""],[1,"col-auto"],[1,"row"],["mat-flat-button","","color","primary",3,"click"],[3,"multiple","selectionChange"],["themeSelectionList",""],["value","dark",3,"selected"],["value","light",3,"selected"],["matInput","","readonly","",3,"matDatepicker","focus"],["picker",""]],template:function(t,i){if(1&t){const l=e.EpF();e.TgZ(0,"h1"),e._uU(1," Settings "),e.qZA(),e.TgZ(2,"mat-accordion",0),e.TgZ(3,"mat-expansion-panel"),e.TgZ(4,"mat-expansion-panel-header"),e.TgZ(5,"mat-panel-title"),e._uU(6," Profile "),e.qZA(),e.TgZ(7,"mat-panel-description",1),e._uU(8," Modify profile information "),e.TgZ(9,"mat-icon"),e._uU(10,"account_circle"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(11,"div",2),e.TgZ(12,"div",3),e.TgZ(13,"mat-form-field",4),e.TgZ(14,"span",5),e.TgZ(15,"i"),e._uU(16,"Alias:\xa0"),e.qZA(),e.qZA(),e.TgZ(17,"input",6),e.NdJ("ngModelChange",function(m){return i.myUserName=m}),e.qZA(),e.TgZ(18,"span",7),e.TgZ(19,"i"),e._uU(20),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(21,"div",8),e.TgZ(22,"i"),e._uU(23),e.qZA(),e.qZA(),e.qZA(),e.TgZ(24,"div",9),e._UZ(25,"div",3),e.TgZ(26,"div",8),e.TgZ(27,"button",10),e.NdJ("click",function(){return i.saveProfileSettings()}),e._uU(28,"Save"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(29,"mat-expansion-panel"),e.TgZ(30,"mat-expansion-panel-header"),e.TgZ(31,"mat-panel-title"),e._uU(32," Appearance "),e.qZA(),e.TgZ(33,"mat-panel-description",1),e._uU(34," Appearance of Parfay "),e.TgZ(35,"mat-icon"),e._uU(36,"visibility"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(37,"mat-selection-list",11,12),e.NdJ("selectionChange",function(m){return i.themeRadioButtonChanged(m)}),e.TgZ(39,"mat-list-option",13),e._uU(40,"Dark Theme"),e.qZA(),e.TgZ(41,"mat-list-option",14),e._uU(42,"Light Theme"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(43,"mat-expansion-panel"),e.TgZ(44,"mat-expansion-panel-header"),e.TgZ(45,"mat-panel-title"),e._uU(46," Router "),e.qZA(),e.TgZ(47,"mat-panel-description",1),e._uU(48," Ogre Router Settings "),e.TgZ(49,"mat-icon"),e._uU(50,"router"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(51,"mat-form-field",4),e.TgZ(52,"mat-label"),e._uU(53,"Date"),e.qZA(),e.TgZ(54,"input",15),e.NdJ("focus",function(){return e.CHM(l),e.MAs(56).open()}),e.qZA(),e.qZA(),e._UZ(55,"mat-datepicker",null,16),e.qZA(),e.qZA()}if(2&t){const l=e.MAs(56);e.xp6(17),e.Q6J("ngModel",i.myUserName),e.xp6(3),e.hij("#",i.myUserNumber,""),e.xp6(3),e.Oqu(null==i.myUser?null:i.myUser.id),e.xp6(14),e.Q6J("multiple",!1),e.xp6(2),e.Q6J("selected",i.usingDarkTheme),e.xp6(2),e.Q6J("selected",!i.usingDarkTheme),e.xp6(13),e.Q6J("matDatepicker",l)}},directives:[a.pp,a.ib,a.yz,a.yK,a.u4,A.Hw,r.KE,r.qo,U.Nt,g.Fj,g.JJ,g.On,r.R9,y.lW,d.Ub,d.vS,r.hX,h.hl,h.Mq],styles:[""]}),n})()}];let q=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[c.Bz.forChild(S)],c.Bz]}),n})();var C=s(4466),N=s(3480);let M=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[f.ez,q,C.m,N.q]]}),n})()}}]);