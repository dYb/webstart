define("arale/popup/0.9.13/popup",["$","arale/overlay/0.9.13/overlay","arale/position/1.0.0/position","arale/iframe-shim/1.0.0/iframe-shim","arale/widget/1.0.2/widget","arale/base/1.0.1/base","arale/class/1.0.0/class","arale/events/1.0.0/events"],function(a,b,c){var d=a("$"),e=a("arale/overlay/0.9.13/overlay"),f=e.extend({attrs:{trigger:{value:null,getter:function(a){return d(a)}},triggerType:"hover",align:{value:{baseXY:[0,"100%"],selfXY:[0,0]},setter:function(a){return a?(a.baseElement?this._specifiedBaseElement=!0:this.activeTrigger&&(a.baseElement=this.activeTrigger),a):void 0}},delay:70,disabled:!1,effect:"",duration:250},setup:function(){f.superclass.setup.call(this),this._bindTrigger(),this._blurHide(this.get("trigger")),this.activeTrigger=this.get("trigger").eq(0)},show:function(){if(!this.get("disabled")){!this.rendered&&this.render();var a=this.get("align");this._setPosition(d.extend({},a,this._specifiedBaseElement?{}:{baseElement:this.activeTrigger})),this.set("visible",!0)}},toggle:function(){this[this.get("visible")?"hide":"show"]()},_bindTrigger:function(){function h(){clearTimeout(e),g.get("visible")&&(f=setTimeout(function(){g.hide()},c))}var e,f,a=this.get("trigger"),b=this.get("triggerType"),c=this.get("delay"),g=this;if("click"===b)a.on(b,function(a){a.preventDefault(),g.activeTrigger=d(this),g.toggle()});else if("focus"===b)a.on("focus",function(){g.activeTrigger=d(this),g.show()}).on("blur",function(){setTimeout(function(){!g._downOnElement&&g.hide(),g._downOnElement=!1},c)}),this.element.on("mousedown",function(){g._downOnElement=!0});else{if(0>c)return a.hover(function(){g.activeTrigger=d(this),g.show()},function(){g.hide()}),void 0;a.hover(function(){clearTimeout(f),g.activeTrigger=d(this),e=setTimeout(function(){g.show()},c)},h),this.element.hover(function(){clearTimeout(f)},h)}},_onRenderVisible:function(a){var b=-1!==this.get("effect").indexOf("fade"),c=-1!==this.get("effect").indexOf("slide"),d={};c&&(d.height=a?"show":"hide"),b&&(d.opacity=a?"show":"hide"),b||c?this.element.stop(!0,!0).animate(d,this.get("duration")).css({visibility:"visible"}):this.element[a?"show":"hide"]()}});c.exports=f});