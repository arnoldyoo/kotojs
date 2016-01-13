!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("babel-polyfill"),require("d3")):"function"==typeof define&&define.amd?define(["babel-polyfill","d3"],t):"object"==typeof exports?exports.Koto=t(require("babel-polyfill"),require("d3")):e.Koto=t(e["babel-polyfill"],e.d3)}(this,function(e,t){return function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={exports:{},id:r,loaded:!1};return e[r].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="/dist",t(0)}([function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function s(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var c=function(){function e(e,t){var n=[],r=!0,i=!1,a=void 0;try{for(var s,o=e[Symbol.iterator]();!(r=(s=o.next()).done)&&(n.push(s.value),!t||n.length!==t);r=!0);}catch(c){i=!0,a=c}finally{try{!r&&o["return"]&&o["return"]()}finally{if(i)throw a}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();n(1);var u=n(2),f=r(u),h=n(3),d=r(h),y=n(4),p=r(y);(0,d["default"])(f["default"],"d3 js is required.");var v=function(){function e(t){var n=this;o(this,e),this.base=t,this.hasDrawn=!1,this.merge={},this.merge.configs=function(){for(var e,t=arguments.length,r=Array(t),i=0;t>i;i++)r[i]=arguments[i];return n.configs=(e=Object).assign.apply(e,[{},n.configs].concat(r)),n.configs},this.merge.accessors=function(){for(var e,t=arguments.length,r=Array(t),i=0;t>i;i++)r[i]=arguments[i];return n.accessors=(e=Object).assign.apply(e,[{},n.accessors].concat(r)),n.accessors},this.configs={},this.accessors={},this.promise=null,this._layers=new Map,this._attached=new Map,this._events=new Map,this.c=this.config,this.a=this.accessor}return l(e,[{key:"transform",value:function(e){return e}},{key:"demux",value:function(e,t){return t}},{key:"preDraw",value:function(){}},{key:"postDraw",value:function(){}},{key:"postTransition",value:function(){}},{key:"unlayer",value:function(e){var t=this.layer(e);return this._layers["delete"](e),delete t._chart,t}},{key:"layer",value:function(e,t,n){var r,i=this;if(1===arguments.length)return this._layers.get(e);if(2===arguments.length){if(t instanceof p["default"])return t._chart=this,this._layers.set(e,t),this._layers.get(e);(0,d["default"])(!1,"When reattaching a layer, the second argument must be a koto layer")}return t._chart=this,r=new p["default"](t,n),r.remove=function(){return i._layers["delete"](e),this},this._layers.set(e,r),r}},{key:"attach",value:function(e,t){return 1===arguments.length?this._attached.get(e):(this._attached.set(e,t),t)}},{key:"draw",value:function(e){var t,n,r=this,i=[];return Promise.resolve(this.transform(e)).then(function(e){r.preDraw(e),r.trigger("preDraw",e);var a=!0,s=!1,o=void 0;try{for(var l,u=r._layers.values()[Symbol.iterator]();!(a=(l=u.next()).done);a=!0)t=l.value,t.draw(e),i.push(t.promise)}catch(f){s=!0,o=f}finally{try{!a&&u["return"]&&u["return"]()}finally{if(s)throw o}}var h=!0,d=!1,y=void 0;try{for(var p,v=r._attached.entries()[Symbol.iterator]();!(h=(p=v.next()).done);h=!0){var g=c(p.value,2),m=g[0],b=g[1];n=r.demux?r.demux(m,e):e,b.draw(n),i.push(b.promise)}}catch(f){d=!0,y=f}finally{try{!h&&v["return"]&&v["return"]()}finally{if(d)throw y}}return r.hasDrawn=!0,r.promise=Promise.all(i),r.postDraw(),r.trigger("postDraw",e),r.promise.then(function(){r.postTransition(e),r.trigger("postTransition",e)}),e})}},{key:"on",value:function(e,t,n){var r;return r=this._events.has(e)?this._events.get(e):new Set,r.add({callback:t,context:n||this,_chart:this}),this._events.set(e,r),this}},{key:"once",value:function(e,t,n){var r=this,i=function a(){r.off(e,a),t.apply(this,arguments)};return this.on(e,i,n)}},{key:"off",value:function(e,t,n){return 0===arguments.length?(this._events.clear(),this):1===arguments.length?(this._events.has(e)&&this._events.get(e).clear(),this):(this._events.get(e).forEach(function(e,r,i){(t&&t===r.callback||n&&n===r.context)&&i["delete"](e)}),this)}},{key:"trigger",value:function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;t>r;r++)n[r-1]=arguments[r];return this._events.has(e)&&this._events.get(e).forEach(function(e){var t;(t=e.callback).call.apply(t,[e.context].concat(n))}),this}},{key:"config",value:function(e,t){function n(){function e(e,t){var n=Math.min.call(null,e.map(function(e){return a.config(e)}));return t/n}i.constrain===!0?i.percentage=e(["width","height"],i.value):Array.isArray(i.constrain)?i.percentage=e(i.constrain,i.value):i.percentage=e([i.constrain],i.value)}var r,i,a=this;if(0===arguments.length)return this.configs;if(1===arguments.length){if("object"===("undefined"==typeof e?"undefined":s(e))){for(r in e)this.configs.hasOwnProperty(r)?(i=this.configs[r],i.hasOwnProperty("setter")?i.value=i.setter.call(i,e[r]):i.value=e[r],i.hasOwnProperty("constrain")&&n(),this.configs[r]=i):console.warn("config with name "+e+" is not defined.");return this}return(0,d["default"])(this.configs.hasOwnProperty(e),e+" is not a valid option."),i=this.configs[e],i.hasOwnProperty("getter")?i.getter.call(i):i.value}return 2===arguments.length?(this.configs.hasOwnProperty(e)?(i=this.configs[e],i.hasOwnProperty("setter")?i.value=i.setter.call(i,t):i.value=t,i.hasOwnProperty("constrain")&&n(),this.configs[e]=i):console.warn("config with name "+e+" is not defined."),this):void 0}},{key:"accessor",value:function(e,t){var n;if(0===arguments.length)return this.accessors;if(1===arguments.length){if("string"==typeof e)return(0,d["default"])(this.accessors.hasOwnProperty(e),e+" is not a valid accessor."),this.accessors[e];for(n in e)this.accessors[n]=e[n]}else this.accessors[e]=t;return this}}],[{key:"extend",value:function(e){var t=function(t){function n(t){o(this,n);var r,a=i(this,Object.getPrototypeOf(n).call(this,t));if("function"==typeof e)e.call(a);else{for(r in e)a[r]=e[r];a.initialize.call(a)}return a}return a(n,t),n}(this);return t}}]),e}();v.Layer=p["default"],e.exports=v},function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t){"use strict";function n(e,t){if(!e)throw new Error("[koto] "+t)}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=n},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();Object.defineProperty(t,"__esModule",{value:!0});var s=n(3),o=r(s),c=n(2),l=r(c),u=function(){function e(t,n){if(i(this,e),this._base=t,this._handlers={},this._lifecycleRe=/^(enter|update|merge|exit)(:transition)?$/,n&&(this.dataBind=n.dataBind,this.insert=n.insert,"events"in n))for(var r in n.events)this.on(r,n.events[r])}return a(e,[{key:"dataBind",value:function(){(0,o["default"])(!1,"Layers must specify a dataBind method.")}},{key:"insert",value:function(){(0,o["default"])(!1,"Layers must specify an `insert` method.")}},{key:"on",value:function(e,t,n){return n=n||{},(0,o["default"])(this._lifecycleRe.test(e),"Unrecognized lifecycle event name specified to 'Layer#on': '"+e+"'."),e in this._handlers||(this._handlers[e]=[]),this._handlers[e].push({callback:t,chart:n.chart||null}),this}},{key:"off",value:function(e,t){var n,r=this._handlers[e];if((0,o["default"])(this._lifecycleRe.test(e),"Unrecognized lifecycle event name specified to 'Layer#on': '"+e+"'."),!r)return this;if(1===arguments.length)return r.length=0,this;for(n=r.length-1;n>-1;--n)r[n].callback===t&&r.splice(n,1);return this}},{key:"draw",value:function(e){function t(e,t){var n=0;0===e.size()?t():e.each(function(){++n}).each("interrupt.promise",function(){t.apply(this,arguments)}).each("end.promise",function(){--n||t.apply(this,arguments)})}function n(e){s.call(t,function(){e(!0)})}var r,i,a,s,c,u,f,h,d,y,p,v=[];r=this.dataBind.call(this._base,e,this),(0,o["default"])(r instanceof l["default"].selection,"Invalid selection defined by `Layer#dataBind` method."),(0,o["default"])(r.enter,"Layer selection not properly bound."),i=r.enter(),i._chart=this._base._chart,a=[{name:"update",selection:r},{name:"enter",selection:i,method:this.insert},{name:"merge",selection:r},{name:"exit",selection:r,method:r.exit}];for(var g=0,m=a.length;m>g;++g)if(f=a[g].name,s=a[g].selection,c=a[g].method,"function"==typeof c&&(s=c.call(s,s)),!s.empty()){if((0,o["default"])(s&&s instanceof l["default"].selection,"Invalid selection defined for "+f+" lifecycle event."),u=this._handlers[f])for(h=0,d=u.length;d>h;++h)s._chart=u[h].chart||this._base._chart,u[h].callback.call(s,s);if(u=this._handlers[f+":transition"],u&&u.length)for(s=s.transition(),p=u.length,y=0;p>y;++y)s._chart=u[y].chart||this._base._chart,u[y].callback.call(s,s),v.push(new Promise(n));this.promise=Promise.all(v)}}}]),e}();t["default"]=u}])});
//# sourceMappingURL=koto.js.map