(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{264:function(e,t,n){var r=n(273);"string"==typeof r&&(r=[[e.i,r,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n(9)(r,i);r.locals&&(e.exports=r.locals)},272:function(e,t,n){"use strict";var r=n(264);n.n(r).a},273:function(e,t,n){(e.exports=n(8)(!1)).push([e.i,"[data-v-3abbb93d] .youtube iframe {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0;\n}",""])},276:function(e,t,n){var r=n(348);"string"==typeof r&&(r=[[e.i,r,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n(9)(r,i);r.locals&&(e.exports=r.locals)},277:function(e,t,n){"use strict";var r=n(3),i=n.n(r),a=n(283),o=n(20);function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}i.a.use(a.a);var u={name:"MediaContent",props:{height:{type:String,required:!0}},data:function(){return{imgNotExist:[],videoPlaying:!1}},computed:c({},Object(o.c)("map",["selectedEvent","indexSelectedEvent"])),methods:c({},Object(o.d)("map",["REMOVE_EVENT_MEDIA_URL"]))},v=(n(272),n(32)),p=n(33),d=n.n(p),E=n(42),f=n(372),m=n(373),b=n(52),y=n(69),h=n(119),_=n(28),g=Object(v.a)(u,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-carousel",{attrs:{cycle:!e.videoPlaying,height:e.height,"hide-delimiter-background":"","hide-delimiters":""}},[0!==e.selectedEvent.mediaUrl.length?e._l(e.selectedEvent.mediaUrl,(function(t,r){return n("v-carousel-item",{key:r},["viewer"!==e.$route.name&&"viewer-example"!==e.$route.name?n("v-btn",{staticClass:"v-btn--active",staticStyle:{right:"18px",top:"16px"},attrs:{fab:"","x-small":"",depressed:"",absolute:"",color:"grey"},on:{click:function(t){return e.REMOVE_EVENT_MEDIA_URL({indexEvent:e.indexSelectedEvent,indexMediaUrl:r})}}},[n("v-icon",{attrs:{dark:""}},[e._v("clear")])],1):e._e(),e._v(" "),e.imgNotExist.includes(t)?[n("youtube",{staticClass:"youtube",attrs:{"video-id":e.$youtube.getIdFromURL(t)},on:{playing:function(t){e.videoPlaying=!0},paused:function(t){e.videoPlaying=!1},ended:function(t){e.videoPlaying=!1}}})]:[n("v-img",{attrs:{height:"100%",contain:"",src:t},on:{error:function(n){return e.imgNotExist.push(t)}}})]],2)})):n("v-carousel-item",[n("v-sheet",{attrs:{color:"primary",height:"100%"}},[n("v-row",{staticClass:"fill-height",attrs:{align:"center",justify:"center"}},[n("div",{staticClass:"display-1"},[e._v("Контент")])])],1)],1)],2)}),[],!1,null,"3abbb93d",null);t.a=g.exports;d()(g,{VBtn:E.a,VCarousel:f.a,VCarouselItem:m.a,VIcon:b.a,VImg:y.a,VRow:h.a,VSheet:_.a})},347:function(e,t,n){"use strict";var r=n(276);n.n(r).a},348:function(e,t,n){(e.exports=n(8)(!1)).push([e.i,".map[data-v-77822d35] {\n  width: 100%;\n  margin: auto;\n  border: 1px solid #4d565661;\n}",""])},386:function(e,t,n){"use strict";n.r(t);var r=n(38),i=n.n(r),a=n(20),o=n(374),s=n(375),c=n(376),l=n(377),u=n(378),v=n(379),p=n(381);n(284);function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function E(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){f(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var m={name:"Map",components:{LMap:o.a,LTileLayer:s.a,LMarker:c.a,LTooltip:l.a,LIcon:u.a,LPolyline:v.a,LImageOverlay:p.a},data:function(){return{maxBoundsViscosity:.9,polylineOpacity:.6,polylineDashArray:"6"}},watch:{"config.selectedEventId":function(){this.$refs.map.mapObject.flyTo(this.selectedEvent.marker.position)}},computed:E({},Object(a.e)("map",["tile","config","events","tileCenter"]),{},Object(a.c)("map",["selectedEvent","indexSelectedEvent","arrayMarker"]),{sync_center:{get:function(){return this.tileCenter},set:function(e){this.SET_TILE_CENTER(e)}}}),methods:E({},Object(a.b)("map",["saveEmptyExampleMap"]),{},Object(a.d)("map",["SET_TILE_CENTER","SET_SELECTED_EVENT_ID","SET_EVENT_MARKER_POSITION","SET_TILE_BOUNDS","SET_MIN_TILE_ZOOM","SET_MAX_TILE_ZOOM"]),{back:function(){"viewer-example"===this.$route.name&&"0"===this.$route.params.id&&this.saveEmptyExampleMap(),this.$router.go(-1)},prevEvent:function(){0===this.indexSelectedEvent?this.SET_SELECTED_EVENT_ID(this.events[this.events.length-1].id):0!==this.indexSelectedEvent&&this.SET_SELECTED_EVENT_ID(this.events[this.indexSelectedEvent-1].id)},nextEvent:function(){this.indexSelectedEvent===this.events.length-1?this.SET_SELECTED_EVENT_ID(this.events[0].id):this.indexSelectedEvent!==this.events.length-1&&this.SET_SELECTED_EVENT_ID(this.events[this.indexSelectedEvent+1].id)},keyDownEvent:function(e){37===e.keyCode?this.prevEvent():39===e.keyCode&&this.nextEvent()}}),beforeMount:function(){var e=this;window.addEventListener("keydown",(function(t){return e.keyDownEvent(t)}))},beforeDestroy:function(){var e=this;window.removeEventListener("keydown",(function(t){return e.keyDownEvent(t)}))}},b=(n(347),n(32)),y=n(33),h=n.n(y),_=n(42),g=n(52),O=n(245),x=Object(b.a)(m,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("l-map",{ref:"map",staticClass:"map",staticStyle:{width:"66vw","z-index":"0"},attrs:{minZoom:e.tile.minZoom,maxZoom:e.tile.maxZoom,center:e.sync_center,maxBoundsViscosity:e.maxBoundsViscosity,options:{zoomControl:!1}},on:{"update:center":function(t){e.sync_center=t}}},[-1===e.tile.url.indexOf("{z}")||-1===e.tile.url.indexOf("{x}")||-1===e.tile.url.indexOf("{y}")?n("l-image-overlay",{attrs:{url:e.tile.url}}):n("l-tile-layer",{attrs:{url:e.tile.url,noWrap:"",attribution:e.tile.attribution}}),e._v(" "),e._l(e.events,(function(t,r){return n("l-marker",{key:t.id,attrs:{"lat-lng":t.marker.position},on:{click:function(n){return e.SET_SELECTED_EVENT_ID(t.id)}}},[n("l-tooltip",[e._v("\n            "+e._s(t.title)+"\n        ")]),e._v(" "),e.indexSelectedEvent!==r?n("l-icon",{attrs:{"icon-size":t.marker.size,"icon-url":e.events[r].marker.url}}):n("l-icon",{attrs:{"icon-size":[2*t.marker.size[0],2*t.marker.size[1]],"icon-url":e.events[r].marker.url}})],1)})),e._v(" "),e.tile.showPolyline?[n("l-polyline",{attrs:{"lat-lngs":e.arrayMarker,opacity:e.polylineOpacity,dashArray:e.polylineDashArray,weight:void 0!==e.tile.polylineWeight?e.tile.polylineWeight:2}})]:e._e(),e._v(" "),n("v-btn",{staticClass:"v-btn--active",staticStyle:{bottom:"50%",left:"16px","z-index":"401"},attrs:{fab:"",dark:"",text:"","x-large":"",absolute:"",color:"primary"},on:{dblclick:function(e){e.stopPropagation()},click:e.prevEvent}},[n("v-icon",{attrs:{"x-large":""}},[e._v("keyboard_arrow_left")])],1),e._v(" "),n("v-btn",{staticClass:"v-btn--active",staticStyle:{bottom:"50%",right:"16px","z-index":"401"},attrs:{fab:"",dark:"",absolute:"","x-large":"",text:"",color:"primary"},on:{dblclick:function(e){e.stopPropagation()},click:e.nextEvent}},[n("v-icon",{attrs:{"x-large":""}},[e._v("keyboard_arrow_right")])],1),e._v(" "),n("v-tooltip",{attrs:{bottom:""},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on;return[n("v-btn",e._g({staticClass:"v-btn--active",staticStyle:{top:"16px",left:"16px","z-index":"401"},attrs:{absolute:"",text:"",rounded:"","x-large":""},on:{click:function(t){return t.stopPropagation(),e.back(t)}}},r),[n("v-icon",{attrs:{large:""}},[e._v("first_page")])],1)]}}])},[e._v(" "),n("span",[e._v("Назад")])])],2)}),[],!1,null,"77822d35",null),w=x.exports;function T(e,t,n,r,i,a,o){try{var s=e[a](o),c=s.value}catch(e){return void n(e)}s.done?t(c):Promise.resolve(c).then(r,i)}function S(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function j(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?S(Object(n),!0).forEach((function(t){k(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):S(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function k(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}h()(x,{VBtn:_.a,VIcon:g.a,VTooltip:O.a});var P={name:"Viewer",components:{Map:w,MediaContent:n(277).a},data:function(){return{loadingMap:!1}},computed:j({},Object(a.e)("map",["events"]),{},Object(a.c)("map",["selectedEvent"])),methods:j({},Object(a.b)("map",["getMap","setExampleMap"]),{},Object(a.d)("map",["SET_SELECTED_EVENT_ID","SET_TILE_CENTER"])),beforeMount:function(){var e,t=this;return(e=i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("viewer-example"!==t.$route.name||"0"!==t.$route.params.id){e.next=5;break}t.SET_SELECTED_EVENT_ID(t.events[0].id),t.SET_TILE_CENTER(t.selectedEvent.marker.position),e.next=12;break;case 5:if("viewer-example"!==t.$route.name){e.next=9;break}t.setExampleMap(t.$route.params.id),e.next=12;break;case 9:return t.loadingMap=!0,e.next=12,t.getMap(t.$route.params.id).then((function(){t.SET_SELECTED_EVENT_ID(t.events[0].id),t.SET_TILE_CENTER(t.selectedEvent.marker.position)})).finally((function(){t.loadingMap=!1}));case 12:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,i){var a=e.apply(t,n);function o(e){T(a,r,i,o,s,"next",e)}function s(e){T(a,r,i,o,s,"throw",e)}o(void 0)}))})()},beforeDestroy:function(){var e=this;window.removeEventListener("keydown",(function(t){return e.keyDownEvent(t)}))}},D=n(261),C=n(89),M=n(65),L=Object(b.a)(P,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"d-flex flex-row",staticStyle:{height:"100vh"}},[n("v-overlay",{attrs:{value:e.loadingMap}},[n("div",{staticClass:"d-flex flex-column align-center text-center"},[n("v-progress-circular",{attrs:{indeterminate:"",size:128}}),e._v(" "),n("span",{staticClass:"headline mt-4"},[e._v("Loading map")])],1)]),e._v(" "),e.loadingMap?e._e():[n("Map"),e._v(" "),n("div",{staticClass:"text-center",staticStyle:{width:"34vw"}},[n("MediaContent",{attrs:{height:"34vh"}}),e._v(" "),n("v-container",{staticClass:"px-6",staticStyle:{height:"66vh","overflow-y":"scroll"}},[n("div",{staticClass:"headline mt-6 mb-4"},[e._v(e._s(e.selectedEvent.title))]),e._v(" "),n("div",{domProps:{innerHTML:e._s(e.selectedEvent.description)}})])],1)]],2)}),[],!1,null,null,null);t.default=L.exports;h()(L,{VContainer:D.a,VOverlay:C.a,VProgressCircular:M.a})}}]);