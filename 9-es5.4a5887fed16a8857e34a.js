!function(){function i(i,b){if(!(i instanceof b))throw new TypeError("Cannot call a class as a function")}function b(i,b){for(var t=0;t<b.length;t++){var c=b[t];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(i,c.key,c)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{LKzx:function(t,c,o){"use strict";o.r(c),o.d(c,"FxLayoutExampleModule",(function(){return z}));var n=o("ofXK"),f=o("NFeN"),e=o("YUcS"),d=o("sYmb"),a=o("cBOY"),r=o("tyNb"),l=o("pD6V"),s=o("quSY"),v=o("fXoL"),P=o("XiUz"),m=o("znSr"),x=function(i){return{"primary-background":i}};function Q(i,b){if(1&i&&(v.Qb(0,"th",38),v.vc(1),v.Pb()),2&i){var t=b.$implicit,c=v.ac();v.fc("ngClass",v.hc(2,x,c.fxMedia.isActive(t.mediaQuery))),v.zb(1),v.wc(t.alias)}}function y(i,b){if(1&i&&(v.Qb(0,"td"),v.Qb(1,"mat-icon",39),v.vc(2,"visibility"),v.Pb(),v.Pb()),2&i){var t=b.$implicit,c=v.ac();v.zb(1),v.fc("fxShow",c.fxMedia.isActive(t.mediaQuery))}}function u(i,b){if(1&i&&(v.Qb(0,"td"),v.Qb(1,"mat-icon",40),v.vc(2,"visibility_off"),v.Pb(),v.Pb()),2&i){var t=b.$implicit,c=v.ac();v.zb(1),v.fc("fxHide",c.fxMedia.isActive(t.mediaQuery))}}function w(i,b){if(1&i&&(v.Qb(0,"td"),v.Qb(1,"mat-icon",41),v.vc(2,"visibility"),v.Pb(),v.Pb()),2&i){var t=b.$implicit,c=v.ac();v.zb(1),v.fc("fxShow",c.media.isMainActive(t.alias))}}var p,h,g,H=[{path:"",component:(p=function(){function t(b,c,o){var n=this;i(this,t),this.bps=b,this.fxMedia=c,this.media=o,this.subs=new s.a,this.windowSize=window&&window.innerWidth,window.addEventListener("resize",(function(){n.windowSize=window.innerWidth}))}var c,o,n;return c=t,(o=[{key:"ngOnInit",value:function(){}},{key:"ngOnDestroy",value:function(){this.subs.unsubscribe()}}])&&b(c.prototype,o),n&&b(c,n),t}(),p.\u0275fac=function(i){return new(i||p)(v.Kb(l.b),v.Kb(l.i),v.Kb(a.i))},p.\u0275cmp=v.Eb({type:p,selectors:[["pip-fx-layout-example"]],decls:134,vars:18,consts:[["fxLayout","row","fxLayout.lt-sm","column"],["fxLayout","row","fxLayout.xs","column"],[3,"fxShow"],["fxHide","","fxShow.document-lt-lg",""],["fxflex","","fxLayout","column"],["ngClass.lt-sm","underline"],["fxFlexOffset.lt-sm","50px"],["border","1","frame","void","rules","all"],[3,"ngClass",4,"ngFor","ngForOf"],[4,"ngFor","ngForOf"],["color","primary","fxHide","","fxShow.xs",""],["color","primary","fxHide","","fxShow.sm",""],["color","primary","fxHide","","fxShow.md",""],["color","primary","fxHide","","fxShow.lg",""],["color","primary","fxHide","","fxShow.xl",""],["color","primary","fxHide","","fxShow.lt-sm",""],["color","primary","fxHide","","fxShow.lt-md",""],["color","primary","fxHide","","fxShow.lt-lg",""],["color","primary","fxHide","","fxShow.lt-xl",""],["color","primary","fxHide","","fxShow.gt-xs",""],["color","primary","fxHide","","fxShow.gt-sm",""],["color","primary","fxHide","","fxShow.gt-md",""],["color","primary","fxHide","","fxShow.gt-lg",""],["color","primary","fxHide","","fxShow.document-lt-lg",""],["fxHide.xs",""],["fxHide.sm",""],["fxHide.md",""],["fxHide.lg",""],["fxHide.xl",""],["fxHide.lt-sm",""],["fxHide.lt-md",""],["fxHide.lt-lg",""],["fxHide.lt-xl",""],["fxHide.gt-xs",""],["fxHide.gt-sm",""],["fxHide.gt-md",""],["fxHide.gt-lg",""],["fxHide.document-lt-lg",""],[3,"ngClass"],["fxHide","","color","primary",3,"fxShow"],[3,"fxHide"],["color","primary","fxHide","",3,"fxShow"]],template:function(i,b){1&i&&(v.Qb(0,"div",0),v.Qb(1,"div"),v.vc(2,"[lt-sm]"),v.Pb(),v.Qb(3,"div"),v.vc(4,"[B]"),v.Pb(),v.Qb(5,"div"),v.vc(6,"[C]"),v.Pb(),v.Pb(),v.Qb(7,"div",1),v.Qb(8,"div"),v.vc(9,"[xs]"),v.Pb(),v.Qb(10,"div"),v.vc(11,"[B]"),v.Pb(),v.Qb(12,"div"),v.vc(13,"[C]"),v.Pb(),v.Pb(),v.Qb(14,"div",2),v.vc(15),v.bc(16,"translate"),v.Pb(),v.Qb(17,"div",3),v.vc(18),v.bc(19,"translate"),v.Pb(),v.Qb(20,"div",4),v.Qb(21,"div",5),v.vc(22),v.bc(23,"translate"),v.Pb(),v.Qb(24,"div",6),v.vc(25),v.bc(26,"translate"),v.Pb(),v.Pb(),v.Qb(27,"table",7),v.Qb(28,"tr"),v.Qb(29,"th"),v.vc(30),v.Pb(),v.tc(31,Q,2,4,"th",8),v.Pb(),v.Qb(32,"tr"),v.Qb(33,"td"),v.vc(34,"fxShow"),v.Pb(),v.tc(35,y,3,1,"td",9),v.Pb(),v.Qb(36,"tr"),v.Qb(37,"td"),v.vc(38,"fxShow."),v.Pb(),v.Qb(39,"td"),v.Qb(40,"mat-icon",10),v.vc(41,"visibility"),v.Pb(),v.Pb(),v.Qb(42,"td"),v.Qb(43,"mat-icon",11),v.vc(44,"visibility"),v.Pb(),v.Pb(),v.Qb(45,"td"),v.Qb(46,"mat-icon",12),v.vc(47,"visibility"),v.Pb(),v.Pb(),v.Qb(48,"td"),v.Qb(49,"mat-icon",13),v.vc(50,"visibility"),v.Pb(),v.Pb(),v.Qb(51,"td"),v.Qb(52,"mat-icon",14),v.vc(53,"visibility"),v.Pb(),v.Pb(),v.Qb(54,"td"),v.Qb(55,"mat-icon",15),v.vc(56,"visibility"),v.Pb(),v.Pb(),v.Qb(57,"td"),v.Qb(58,"mat-icon",16),v.vc(59,"visibility"),v.Pb(),v.Pb(),v.Qb(60,"td"),v.Qb(61,"mat-icon",17),v.vc(62,"visibility"),v.Pb(),v.Pb(),v.Qb(63,"td"),v.Qb(64,"mat-icon",18),v.vc(65,"visibility"),v.Pb(),v.Pb(),v.Qb(66,"td"),v.Qb(67,"mat-icon",19),v.vc(68,"visibility"),v.Pb(),v.Pb(),v.Qb(69,"td"),v.Qb(70,"mat-icon",20),v.vc(71,"visibility"),v.Pb(),v.Pb(),v.Qb(72,"td"),v.Qb(73,"mat-icon",21),v.vc(74,"visibility"),v.Pb(),v.Pb(),v.Qb(75,"td"),v.Qb(76,"mat-icon",22),v.vc(77,"visibility"),v.Pb(),v.Pb(),v.Qb(78,"td"),v.Qb(79,"mat-icon",23),v.vc(80,"visibility"),v.Pb(),v.Pb(),v.Pb(),v.Qb(81,"tr"),v.Qb(82,"td"),v.vc(83,"fxHide"),v.Pb(),v.tc(84,u,3,1,"td",9),v.Pb(),v.Qb(85,"tr"),v.Qb(86,"td"),v.vc(87,"fxHide."),v.Pb(),v.Qb(88,"td"),v.Qb(89,"mat-icon",24),v.vc(90,"visibility_off"),v.Pb(),v.Pb(),v.Qb(91,"td"),v.Qb(92,"mat-icon",25),v.vc(93,"visibility_off"),v.Pb(),v.Pb(),v.Qb(94,"td"),v.Qb(95,"mat-icon",26),v.vc(96,"visibility_off"),v.Pb(),v.Pb(),v.Qb(97,"td"),v.Qb(98,"mat-icon",27),v.vc(99,"visibility_off"),v.Pb(),v.Pb(),v.Qb(100,"td"),v.Qb(101,"mat-icon",28),v.vc(102,"visibility_off"),v.Pb(),v.Pb(),v.Qb(103,"td"),v.Qb(104,"mat-icon",29),v.vc(105,"visibility_off"),v.Pb(),v.Pb(),v.Qb(106,"td"),v.Qb(107,"mat-icon",30),v.vc(108,"visibility_off"),v.Pb(),v.Pb(),v.Qb(109,"td"),v.Qb(110,"mat-icon",31),v.vc(111,"visibility_off"),v.Pb(),v.Pb(),v.Qb(112,"td"),v.Qb(113,"mat-icon",32),v.vc(114,"visibility_off"),v.Pb(),v.Pb(),v.Qb(115,"td"),v.Qb(116,"mat-icon",33),v.vc(117,"visibility_off"),v.Pb(),v.Pb(),v.Qb(118,"td"),v.Qb(119,"mat-icon",34),v.vc(120,"visibility_off"),v.Pb(),v.Pb(),v.Qb(121,"td"),v.Qb(122,"mat-icon",35),v.vc(123,"visibility_off"),v.Pb(),v.Pb(),v.Qb(124,"td"),v.Qb(125,"mat-icon",36),v.vc(126,"visibility_off"),v.Pb(),v.Pb(),v.Qb(127,"td"),v.Qb(128,"mat-icon",37),v.vc(129,"visibility_off"),v.Pb(),v.Pb(),v.Pb(),v.Qb(130,"tr"),v.Qb(131,"td"),v.vc(132,"mainActive"),v.Pb(),v.tc(133,w,3,1,"td",9),v.Pb(),v.Pb()),2&i&&(v.zb(14),v.fc("fxShow",b.media.isMainActive("document-lt-lg")),v.zb(1),v.xc(" ",v.cc(16,10,"PAGE.FX.LT1250_1"),"\n"),v.zb(3),v.xc(" ",v.cc(19,12,"PAGE.FX.LT1250_2"),"\n"),v.zb(4),v.wc(v.cc(23,14,"PAGE.FX.LTSMU")),v.zb(3),v.wc(v.cc(26,16,"PAGE.FX.LTSMO")),v.zb(5),v.wc(b.windowSize),v.zb(1),v.fc("ngForOf",b.bps),v.zb(4),v.fc("ngForOf",b.bps),v.zb(49),v.fc("ngForOf",b.bps),v.zb(49),v.fc("ngForOf",b.bps))},directives:[P.d,m.b,a.u,m.a,P.b,n.j,f.a,n.i],pipes:[d.c],styles:["[_nghost-%COMP%]{display:block;padding:16px}.underline[_ngcontent-%COMP%]{text-decoration:underline}table[_ngcontent-%COMP%]{width:100%;text-align:center}"]}),p)}],S=((g=function b(){i(this,b)}).\u0275mod=v.Ib({type:g}),g.\u0275inj=v.Hb({factory:function(i){return new(i||g)},imports:[[r.g.forChild(H)],r.g]}),g),z=((h=function b(){i(this,b)}).\u0275mod=v.Ib({type:h}),h.\u0275inj=v.Hb({factory:function(i){return new(i||h)},imports:[[n.c,e.a,f.b,a.h,d.b,S]]}),h)}}])}();