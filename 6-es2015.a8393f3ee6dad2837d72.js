(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"1jcm":function(e,t,i){"use strict";i.d(t,"a",(function(){return q})),i.d(t,"b",(function(){return w}));var a=i("GU7r"),n=i("fXoL"),l=i("FKr1"),o=i("8LU1"),s=i("3Pt+"),r=i("R1ws"),c=i("u47x");const d=["thumbContainer"],u=["toggleBar"],m=["input"],p=function(){return{enterDuration:150}},b=["*"],g=new n.q("mat-slide-toggle-default-options",{providedIn:"root",factory:()=>({disableToggleValue:!1})});let h=0;const f={provide:s.h,useExisting:Object(n.T)(()=>q),multi:!0};class v{constructor(e,t){this.source=e,this.checked=t}}class k{constructor(e){this._elementRef=e}}const x=Object(l.v)(Object(l.r)(Object(l.s)(Object(l.t)(k)),"accent"));let q=(()=>{class e extends x{constructor(e,t,i,a,l,o){super(e),this._focusMonitor=t,this._changeDetectorRef=i,this.defaults=l,this._animationMode=o,this._onChange=e=>{},this._onTouched=()=>{},this._uniqueId="mat-slide-toggle-"+ ++h,this._required=!1,this._checked=!1,this.name=null,this.id=this._uniqueId,this.labelPosition="after",this.ariaLabel=null,this.ariaLabelledby=null,this.change=new n.n,this.toggleChange=new n.n,this.tabIndex=parseInt(a)||0}get required(){return this._required}set required(e){this._required=Object(o.b)(e)}get checked(){return this._checked}set checked(e){this._checked=Object(o.b)(e),this._changeDetectorRef.markForCheck()}get inputId(){return(this.id||this._uniqueId)+"-input"}ngAfterContentInit(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(e=>{"keyboard"===e||"program"===e?this._inputElement.nativeElement.focus():e||Promise.resolve().then(()=>this._onTouched())})}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef)}_onChangeEvent(e){e.stopPropagation(),this.toggleChange.emit(),this.defaults.disableToggleValue?this._inputElement.nativeElement.checked=this.checked:(this.checked=this._inputElement.nativeElement.checked,this._emitChangeEvent())}_onInputClick(e){e.stopPropagation()}writeValue(e){this.checked=!!e}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck()}focus(e){this._focusMonitor.focusVia(this._inputElement,"keyboard",e)}toggle(){this.checked=!this.checked,this._onChange(this.checked)}_emitChangeEvent(){this._onChange(this.checked),this.change.emit(new v(this,this.checked))}_onLabelTextChange(){this._changeDetectorRef.detectChanges()}}return e.\u0275fac=function(t){return new(t||e)(n.Kb(n.l),n.Kb(c.e),n.Kb(n.h),n.Vb("tabindex"),n.Kb(g),n.Kb(r.a,8))},e.\u0275cmp=n.Eb({type:e,selectors:[["mat-slide-toggle"]],viewQuery:function(e,t){var i;1&e&&(n.yc(d,!0),n.yc(u,!0),n.yc(m,!0)),2&e&&(n.jc(i=n.Zb())&&(t._thumbEl=i.first),n.jc(i=n.Zb())&&(t._thumbBarEl=i.first),n.jc(i=n.Zb())&&(t._inputElement=i.first))},hostAttrs:[1,"mat-slide-toggle"],hostVars:12,hostBindings:function(e,t){2&e&&(n.Tb("id",t.id),n.Ab("tabindex",t.disabled?null:-1)("aria-label",null)("aria-labelledby",null),n.Cb("mat-checked",t.checked)("mat-disabled",t.disabled)("mat-slide-toggle-label-before","before"==t.labelPosition)("_mat-animation-noopable","NoopAnimations"===t._animationMode))},inputs:{disabled:"disabled",disableRipple:"disableRipple",color:"color",tabIndex:"tabIndex",name:"name",id:"id",labelPosition:"labelPosition",ariaLabel:["aria-label","ariaLabel"],ariaLabelledby:["aria-labelledby","ariaLabelledby"],required:"required",checked:"checked"},outputs:{change:"change",toggleChange:"toggleChange"},exportAs:["matSlideToggle"],features:[n.yb([f]),n.wb],ngContentSelectors:b,decls:16,vars:18,consts:[[1,"mat-slide-toggle-label"],["label",""],[1,"mat-slide-toggle-bar"],["toggleBar",""],["type","checkbox","role","switch",1,"mat-slide-toggle-input","cdk-visually-hidden",3,"id","required","tabIndex","checked","disabled","change","click"],["input",""],[1,"mat-slide-toggle-thumb-container"],["thumbContainer",""],[1,"mat-slide-toggle-thumb"],["mat-ripple","",1,"mat-slide-toggle-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered","matRippleRadius","matRippleAnimation"],[1,"mat-ripple-element","mat-slide-toggle-persistent-ripple"],[1,"mat-slide-toggle-content",3,"cdkObserveContent"],["labelContent",""],[2,"display","none"]],template:function(e,t){if(1&e&&(n.ec(),n.Qb(0,"label",0,1),n.Qb(2,"div",2,3),n.Qb(4,"input",4,5),n.Yb("change",(function(e){return t._onChangeEvent(e)}))("click",(function(e){return t._onInputClick(e)})),n.Pb(),n.Qb(6,"div",6,7),n.Lb(8,"div",8),n.Qb(9,"div",9),n.Lb(10,"div",10),n.Pb(),n.Pb(),n.Pb(),n.Qb(11,"span",11,12),n.Yb("cdkObserveContent",(function(){return t._onLabelTextChange()})),n.Qb(13,"span",13),n.vc(14,"\xa0"),n.Pb(),n.dc(15),n.Pb(),n.Pb()),2&e){const e=n.kc(1),i=n.kc(12);n.Ab("for",t.inputId),n.zb(2),n.Cb("mat-slide-toggle-bar-no-side-margin",!i.textContent||!i.textContent.trim()),n.zb(2),n.fc("id",t.inputId)("required",t.required)("tabIndex",t.tabIndex)("checked",t.checked)("disabled",t.disabled),n.Ab("name",t.name)("aria-checked",t.checked.toString())("aria-label",t.ariaLabel)("aria-labelledby",t.ariaLabelledby),n.zb(5),n.fc("matRippleTrigger",e)("matRippleDisabled",t.disableRipple||t.disabled)("matRippleCentered",!0)("matRippleRadius",20)("matRippleAnimation",n.gc(17,p))}},directives:[l.m,a.a],styles:[".mat-slide-toggle{display:inline-block;height:24px;max-width:100%;line-height:24px;white-space:nowrap;outline:none;-webkit-tap-highlight-color:transparent}.mat-slide-toggle.mat-checked .mat-slide-toggle-thumb-container{transform:translate3d(16px, 0, 0)}[dir=rtl] .mat-slide-toggle.mat-checked .mat-slide-toggle-thumb-container{transform:translate3d(-16px, 0, 0)}.mat-slide-toggle.mat-disabled{opacity:.38}.mat-slide-toggle.mat-disabled .mat-slide-toggle-label,.mat-slide-toggle.mat-disabled .mat-slide-toggle-thumb-container{cursor:default}.mat-slide-toggle-label{display:flex;flex:1;flex-direction:row;align-items:center;height:inherit;cursor:pointer}.mat-slide-toggle-content{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.mat-slide-toggle-label-before .mat-slide-toggle-label{order:1}.mat-slide-toggle-label-before .mat-slide-toggle-bar{order:2}[dir=rtl] .mat-slide-toggle-label-before .mat-slide-toggle-bar,.mat-slide-toggle-bar{margin-right:8px;margin-left:0}[dir=rtl] .mat-slide-toggle-bar,.mat-slide-toggle-label-before .mat-slide-toggle-bar{margin-left:8px;margin-right:0}.mat-slide-toggle-bar-no-side-margin{margin-left:0;margin-right:0}.mat-slide-toggle-thumb-container{position:absolute;z-index:1;width:20px;height:20px;top:-3px;left:0;transform:translate3d(0, 0, 0);transition:all 80ms linear;transition-property:transform}._mat-animation-noopable .mat-slide-toggle-thumb-container{transition:none}[dir=rtl] .mat-slide-toggle-thumb-container{left:auto;right:0}.mat-slide-toggle-thumb{height:20px;width:20px;border-radius:50%}.mat-slide-toggle-bar{position:relative;width:36px;height:14px;flex-shrink:0;border-radius:8px}.mat-slide-toggle-input{bottom:0;left:10px}[dir=rtl] .mat-slide-toggle-input{left:auto;right:10px}.mat-slide-toggle-bar,.mat-slide-toggle-thumb{transition:all 80ms linear;transition-property:background-color;transition-delay:50ms}._mat-animation-noopable .mat-slide-toggle-bar,._mat-animation-noopable .mat-slide-toggle-thumb{transition:none}.mat-slide-toggle .mat-slide-toggle-ripple{position:absolute;top:calc(50% - 20px);left:calc(50% - 20px);height:40px;width:40px;z-index:1;pointer-events:none}.mat-slide-toggle .mat-slide-toggle-ripple .mat-ripple-element:not(.mat-slide-toggle-persistent-ripple){opacity:.12}.mat-slide-toggle-persistent-ripple{width:100%;height:100%;transform:none}.mat-slide-toggle-bar:hover .mat-slide-toggle-persistent-ripple{opacity:.04}.mat-slide-toggle:not(.mat-disabled).cdk-keyboard-focused .mat-slide-toggle-persistent-ripple{opacity:.12}.mat-slide-toggle-persistent-ripple,.mat-slide-toggle.mat-disabled .mat-slide-toggle-bar:hover .mat-slide-toggle-persistent-ripple{opacity:0}@media(hover: none){.mat-slide-toggle-bar:hover .mat-slide-toggle-persistent-ripple{display:none}}.cdk-high-contrast-active .mat-slide-toggle-thumb,.cdk-high-contrast-active .mat-slide-toggle-bar{border:1px solid}.cdk-high-contrast-active .mat-slide-toggle.cdk-keyboard-focused .mat-slide-toggle-bar{outline:2px dotted;outline-offset:5px}\n"],encapsulation:2,changeDetection:0}),e})(),y=(()=>{class e{}return e.\u0275mod=n.Ib({type:e}),e.\u0275inj=n.Hb({factory:function(t){return new(t||e)}}),e})(),w=(()=>{class e{}return e.\u0275mod=n.Ib({type:e}),e.\u0275inj=n.Hb({factory:function(t){return new(t||e)},imports:[[y,l.n,l.f,a.c],y,l.f]}),e})()},R01B:function(e,t,i){"use strict";i.r(t),i.d(t,"MainMenuLayoutExampleModule",(function(){return y}));var a=i("ofXK"),n=i("YUcS"),l=i("MutI"),o=i("1jcm"),s=i("wZkO"),r=i("sYmb"),c=i("cBOY"),d=i("tyNb"),u=i("Sy1n"),m=i("fXoL"),p=i("XiUz");function b(e,t){if(1&e){const e=m.Rb();m.Qb(0,"a",13),m.Yb("click",(function(){m.lc(e);const i=t.index;return m.ac().onLinkClick(i)})),m.vc(1),m.Pb()}if(2&e){const e=t.$implicit,i=t.index,a=m.ac();m.fc("active",i==a.selectedIndex),m.zb(1),m.xc(" ",e.label," ")}}function g(e,t){if(1&e){const e=m.Rb();m.Qb(0,"mat-list-item",14),m.Yb("click",(function(){m.lc(e);const i=t.index;return m.ac().onItemClick(i)})),m.Qb(1,"h3",15),m.vc(2),m.Pb(),m.Pb()}if(2&e){const e=t.$implicit;m.zb(2),m.wc(e.title)}}function h(e,t){if(1&e){const e=m.Rb();m.Qb(0,"mat-slide-toggle",19),m.Yb("change",(function(){return m.lc(e),m.ac(2).goBack()})),m.vc(1),m.bc(2,"translate"),m.Pb()}if(2&e){const e=m.ac(2);m.fc("checked",e.isSingle),m.zb(1),m.xc(" ",m.cc(2,2,"PAGE.MENU.SINGLE")," ")}}function f(e,t){if(1&e&&(m.Qb(0,"pip-document-layout"),m.Qb(1,"pip-document-content"),m.Qb(2,"h3"),m.vc(3),m.Pb(),m.tc(4,h,3,4,"mat-slide-toggle",16),m.Lb(5,"img",17),m.Qb(6,"div",18),m.vc(7," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. "),m.Pb(),m.Pb(),m.Pb()),2&e){const e=m.ac();m.zb(3),m.xc("Title ",e.itemIndex,""),m.zb(1),m.fc("ngIf",e.media.isMainActive("lt-md"))}}function v(e,t){if(1&e&&(m.Qb(0,"div",23),m.Qb(1,"h3",24),m.vc(2),m.Pb(),m.Lb(3,"img",25),m.Qb(4,"div",18),m.vc(5," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. "),m.Pb(),m.Pb()),2&e){const e=t.$implicit;m.zb(2),m.wc(e.title)}}function k(e,t){if(1&e&&(m.Qb(0,"div",20),m.Qb(1,"pip-tiles-layout",21),m.tc(2,v,6,1,"div",22),m.Pb(),m.Pb()),2&e){const e=m.ac();m.zb(2),m.fc("ngForOf",e.tiles)}}const x=[{path:"",component:(()=>{class e{constructor(e,t){this.media=e,this.parent=t,this.isSingle=!1,this.list=[],this.selectedIndex=0,this.tiles=[],this.itemIndex=0,this.navLinks=[{label:"Document"},{label:"Tiles"}]}ngOnInit(){this.generateList(),this.createTiles()}generateList(){for(let e=0;e<50;e++)this.list.push({title:"Item "+e})}createTiles(){for(let e=0;e<6;e++)this.tiles.push({title:"Tile number "+e})}onLinkClick(e){this.selectedIndex=e}onItemClick(e){this.itemIndex=e,this.media.isMainActive("lt-md")&&(this.isSingle=!0,this._prevIcon=this.parent.showIcon,this.parent.showIcon="back",this.parent.onBackClick=()=>{this.isSingle=!1,this.parent.onBackClick=null,this.parent.showIcon=this._prevIcon})}goBack(){var e;null===(e=null==this?void 0:this.parent)||void 0===e||e.onBackClick()}}return e.\u0275fac=function(t){return new(t||e)(m.Kb(c.i),m.Kb(u.a))},e.\u0275cmp=m.Eb({type:e,selectors:[["pip-main-menu-layout-example"]],decls:14,vars:5,consts:[["visible","true","attachmentSide","top"],["visible","true","attachmentSide","left"],["visible","true","attachmentSide","right"],["fxFlex","fill","fxLayout","column"],["mat-tab-nav-bar","","color","primary"],["mat-tab-link","",3,"active","click",4,"ngFor","ngForOf"],["fxFlex","grow"],[3,"single"],[1,"pip-menu"],[3,"click",4,"ngFor","ngForOf"],[1,"pip-menu-container"],[4,"ngIf"],["class","pip-multi-tiles-container",4,"ngIf"],["mat-tab-link","",3,"active","click"],[3,"click"],["md-line",""],[3,"checked","change",4,"ngIf"],["src","http://s4.thingpic.com/images/pQ/NnndmJd4bex6qPpZAzMJ9mPG.jpeg","width","100%","alt","",2,"margin-top","8px"],[2,"margin-top","8px"],[3,"checked","change"],[1,"pip-multi-tiles-container"],["columnWidth","200"],["class","pip-tile pip-tile-narrow",4,"ngFor","ngForOf"],[1,"pip-tile","pip-tile-narrow"],[2,"margin","16px 8px"],["src","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw6KNcvzNDdDw32Y7Kvnc7zwP6tqwuFLEVJmjsyhQD-X7ls-Z5","width","100%","alt",""]],template:function(e,t){1&e&&(m.Lb(0,"pip-shadow",0),m.Lb(1,"pip-shadow",1),m.Lb(2,"pip-shadow",2),m.Qb(3,"div",3),m.Qb(4,"nav",4),m.tc(5,b,2,2,"a",5),m.Pb(),m.Qb(6,"div",6),m.Qb(7,"pip-menu-layout",7),m.Qb(8,"div",8),m.Qb(9,"mat-nav-list"),m.tc(10,g,3,1,"mat-list-item",9),m.Pb(),m.Pb(),m.Qb(11,"div",10),m.tc(12,f,8,2,"pip-document-layout",11),m.tc(13,k,3,1,"div",12),m.Pb(),m.Pb(),m.Pb(),m.Pb()),2&e&&(m.zb(5),m.fc("ngForOf",t.navLinks),m.zb(2),m.fc("single",t.isSingle),m.zb(3),m.fc("ngForOf",t.list),m.zb(2),m.fc("ngIf",0==t.selectedIndex),m.zb(1),m.fc("ngIf",1==t.selectedIndex))},directives:[c.s,p.a,p.d,s.b,a.j,c.j,l.d,a.k,s.a,l.a,c.f,o.a,c.y],pipes:[r.c],styles:["[_nghost-%COMP%]{height:100%}"]}),e})()}];let q=(()=>{class e{}return e.\u0275mod=m.Ib({type:e}),e.\u0275inj=m.Hb({factory:function(t){return new(t||e)},imports:[[d.g.forChild(x)],d.g]}),e})(),y=(()=>{class e{}return e.\u0275mod=m.Ib({type:e}),e.\u0275inj=m.Hb({factory:function(t){return new(t||e)},imports:[[a.c,n.a,l.b,o.b,s.c,r.b,c.g,c.z,c.h,c.k,c.t,q]]}),e})()}}]);