!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var n=e();for(var o in n)("object"==typeof exports?exports:t)[o]=n[o]}}(window,(function(){return function(t){var e={};function n(o){if(e[o])return e[o].exports;var i=e[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(o,i,function(e){return t[e]}.bind(null,i));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){const o=n(1).default;window.PatrolControls=o,t.exports=o},function(t,e,n){"use strict";var o=this&&this.__awaiter||function(t,e,n,o){return new(n||(n=Promise))((function(i,r){function a(t){try{u(o.next(t))}catch(t){r(t)}}function s(t){try{u(o.throw(t))}catch(t){r(t)}}function u(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,s)}u((o=o.apply(t,e||[])).next())}))},i=this&&this.__generator||function(t,e){var n,o,i,r,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return r={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function s(r){return function(s){return function(r){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,o&&(i=2&r[0]?o.return:r[0]?o.throw||((i=o.return)&&i.call(o),0):o.next)&&!(i=i.call(o,r[1])).done)return i;switch(o=0,i&&(r=[2&r[0],i.value]),r[0]){case 0:case 1:i=r;break;case 4:return a.label++,{value:r[1],done:!1};case 5:a.label++,o=r[1],r=[0];continue;case 7:r=a.ops.pop(),a.trys.pop();continue;default:if(!(i=a.trys,(i=i.length>0&&i[i.length-1])||6!==r[0]&&2!==r[0])){a=0;continue}if(3===r[0]&&(!i||r[1]>i[0]&&r[1]<i[3])){a.label=r[1];break}if(6===r[0]&&a.label<i[1]){a.label=i[1],i=r;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(r);break}i[2]&&a.ops.pop(),a.trys.pop();continue}r=e.call(t,a)}catch(t){r=[6,t],o=0}finally{n=i=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}([r,s])}}};Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t){this.ssp=t,this.viewport=t.viewport,this.camera=null,this.points=[],this.currentPointIndex=0,this.tween=null,this.isPaused=!1,this.isStoped=!1,this._cameraViewpointData=null}return t.prototype.start=function(t){return o(this,void 0,void 0,(function(){var e,n,o,r,a,s,u,c=this;return i(this,(function(l){switch(l.label){case 0:this.init(),this.initPoints(t),this.setInitCamera(),e=t.naviSpeed,n=t.onUpdate,o=t.onEnd,r=t.path.children,a=function(t){var a,u,l;return i(this,(function(i){switch(i.label){case 0:return a=s.points[t+1],u=s.points[t].distanceTo(a),l=e?u/e:u,[4,s.ssp.animation(s.camera.position,a,{duration:l},(function(e,o){for(var i=r[t].geometry.userData.points,a=1/0,s=0,u=0;u<i.length;u++){var l=e.distanceTo(i[u]);l<a&&(a=l,s=u)}for(var p=[],h=0;h<10;h++){var f=s+h;if(f<=i.length-1)p.push(i[f]);else if(t+1<=r.length-1){var d=r[t+1].geometry.userData.points;p.push(d[f-i.length])}}c.tween=o,n&&n(e,p)})).then((function(){if(c.currentPointIndex=t+1,c.currentPointIndex>=c.points.length-1)o&&o(c.camera.position.clone()),c.points=[],c.currentPointIndex=0,c.tween=null,c.isPaused=!1,c.isStoped=!0;else{var e=c.computedNextRotation();c.ssp.animation(c.camera.rotation,e,{duration:300})}}))];case 1:return i.sent(),[2]}}))},s=this,u=0,l.label=1;case 1:return u<this.points.length-1?[5,a(u)]:[3,4];case 2:l.sent(),l.label=3;case 3:return u++,[3,1];case 4:return[2]}}))}))},t.prototype.pause=function(){this._cameraViewpointData=this.ssp.getCameraViewpoint(),this.isPaused=!0,this.tween&&this.tween.pause()},t.prototype.resume=function(){this._cameraViewpointData&&this.ssp.setCameraViewpoint(this._cameraViewpointData),this.isPaused=!1,this.tween&&this.tween.resume()},t.prototype.stop=function(){this.points=[],this.currentPointIndex=0,this.tween=null,this.isPaused=!1,this.isStoped=!0,this.tween&&this.tween.stop();var t=this.ssp.viewport.cameraControlerManager,e=t._getMainCamera();t._setCurrentCamera(e)},t.prototype.init=function(){var t=this.ssp.viewport.cameraControlerManager;this.camera=t._addCamera("patrolControls"),t._setCurrentCamera(this.camera)},t.prototype.initPoints=function(t){for(var e=0;e<t.path.children.length;e++){var n=t.path.children[e].geometry.userData.points;if(0===e){var o=n[0].clone();t.lookAtY&&o.setY(o.y+t.lookAtY),this.points.push(o);var i=n[n.length-1].clone();t.lookAtY&&i.setY(i.y+t.lookAtY),this.points.push(i)}else{i=n[n.length-1].clone();t.lookAtY&&i.setY(i.y+t.lookAtY),this.points.push(i)}}},t.prototype.setInitCamera=function(){var t=this,e=this.computedNextRotation(),n=this.points[0].clone();this.ssp.nextRender((function(){t.camera.position.copy(n),t.camera.rotation.copy(e)}))},t.prototype.computedNextRotation=function(){var t=new this.viewport.THREE.Matrix4;t.lookAt(this.points[this.currentPointIndex],this.points[this.currentPointIndex+1],this.camera.up);var e=(new this.viewport.THREE.Euler).setFromRotationMatrix(t,"XYZ");return e.x=this.computedExcellentRotationAxis(this.camera.rotation.x,e.x),e.y=this.computedExcellentRotationAxis(this.camera.rotation.y,e.y),e.z=this.computedExcellentRotationAxis(this.camera.rotation.z,e.z),e},t.prototype.computedExcellentRotationAxis=function(t,e){var n=Math.abs(e-t);return n>Math.PI&&(e=e>0?t+(n-2*Math.PI):t-(n-2*Math.PI)),e},t}();e.default=r}])}));