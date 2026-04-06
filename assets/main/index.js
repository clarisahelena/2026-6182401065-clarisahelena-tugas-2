System.register("chunks:///_virtual/Bird.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){var t,i,o,r,n,s,l,c,a,p,d,u;return{setters:[function(e){t=e.applyDecoratedDescriptor,i=e.inheritsLoose,o=e.initializerDefineProperty,r=e.assertThisInitialized},function(e){n=e.cclegacy,s=e._decorator,l=e.SpriteFrame,c=e.Collider2D,a=e.Contact2DType,p=e.Vec3,d=e.Sprite,u=e.Component}],execute:function(){var h,v,f,g,y;n._RF.push({},"ccdbesM1FpAr6dqxO1k9w1f","Bird",void 0);var m=s.ccclass,C=s.property;e("Bird",(h=m("Bird"),v=C({type:[l]}),h((y=t((g=function(e){function t(){for(var t,i=arguments.length,n=new Array(i),s=0;s<i;s++)n[s]=arguments[s];return t=e.call.apply(e,[this].concat(n))||this,o(t,"spriteList",y,r(t)),t.level=0,t}i(t,e);var n=t.prototype;return n.start=function(){var e=this.getComponent(c);e&&e.on(a.BEGIN_CONTACT,this.onBeginContact,this)},n.onBeginContact=function(e,i,o){var r=i.node.getComponent(t);r&&(this.node.uuid>r.node.uuid||this.level===r.level&&this.merge(r))},n.merge=function(e){var t=this.node.worldPosition,i=e.node.worldPosition,o=new p((t.x+i.x)/2,(t.y+i.y)/2,(t.z+i.z)/2);this.level<2&&(this.level++,this.spriteList[this.level]&&(this.getComponent(d).spriteFrame=this.spriteList[this.level]));var r=[1,1.4,1.8][this.level];this.node.setScale(r,r,1),this.node.setWorldPosition(o),console.log("Merged to level:",this.level),e.node.destroy()},t}(u)).prototype,"spriteList",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),f=g))||f));n._RF.pop()}}}));

System.register("chunks:///_virtual/GameController.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var e,r,n,o,i,a,c,l,s,u,p,f,y;return{setters:[function(t){e=t.applyDecoratedDescriptor,r=t.inheritsLoose,n=t.initializerDefineProperty,o=t.assertThisInitialized},function(t){i=t.cclegacy,a=t._decorator,c=t.Prefab,l=t.input,s=t.Input,u=t.instantiate,p=t.RigidBody2D,f=t.ERigidBody2DType,y=t.Component}],execute:function(){var h,d,b,T,v;i._RF.push({},"19721ezRxRIhK8YRDeJRyPG","GameController",void 0);var R=a.ccclass,g=a.property;t("GameController",(h=R("GameController"),d=g({type:c}),h((v=e((T=function(t){function e(){for(var e,r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];return e=t.call.apply(t,[this].concat(i))||this,n(e,"birdPrefab",v,o(e)),e}r(e,t);var i=e.prototype;return i.start=function(){l.on(s.EventType.TOUCH_START,this.onTouchStart,this)},i.onTouchStart=function(t){if(this.birdPrefab){var e=u(this.birdPrefab);this.node.addChild(e);var r=t.getUILocation();e.setWorldPosition(r.x,r.y,0);var n=e.getComponent(p);n&&(n.type=f.Dynamic,n.wakeUp())}},i.onDestroy=function(){l.off(s.EventType.TOUCH_START,this.onTouchStart,this)},e}(y)).prototype,"birdPrefab",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),b=T))||b));i._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./Bird.ts","./GameController.ts"],(function(){return{setters:[null,null],execute:function(){}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});