function d(a){return function(b){this[a]=b}}function f(a){return function(){return this[a]}}var g; function i(a,b,c){this.extend(i,google.maps.OverlayView);this.b=a;this.a=[];this.l=[];this.V=[53,56,66,78,90];this.j=[];this.v=false;c=c||{};this.f=c.gridSize||60;this.R=c.maxZoom||null;this.j=c.styles||[];this.Q=c.imagePath||this.J;this.P=c.imageExtension||this.I;this.W=c.zoomOnClick||true;k(this);this.setMap(a);this.D=this.b.getZoom();var e=this;google.maps.event.addListener(this.b,"zoom_changed",function(){if(this.D!=e.b.getZoom()){this.D=e.b.getZoom();e.m()}});google.maps.event.addListener(this.b, "bounds_changed",function(){e.i()});b&&b.length&&this.z(b,false)}g=i.prototype;g.J="http://google-maps-utility-library-v3.googlecode.com/svn/trunk/markerclusterer/images/m";g.I="png";g.extend=function(a,b){return function(c){for(property in c.prototype)this.prototype[property]=c.prototype[property];return this}.apply(a,[b])};g.onAdd=function(){if(!this.v){this.v=true;l(this)}};g.O=function(){};g.draw=function(){}; function k(a){for(var b=0,c;c=a.V[b];b++)a.j.push({url:a.Q+(b+1)+"."+a.P,height:c,width:c})}g=i.prototype;g.u=f("j");g.L=f("a");g.N=f("a");g.C=function(){return this.R||this.b.mapTypes[this.b.getMapTypeId()].maxZoom};g.A=function(a,b){for(var c=0,e=a.length,h=e;h!==0;){h=parseInt(h/10,10);c++}c=Math.min(c,b);return{text:e,index:c}};g.T=d("A");g.B=f("A");g.z=function(a,b){for(var c=0,e;e=a[c];c++)m(this,e);b||this.i()}; function m(a,b){b.setVisible(false);b.setMap(null);b.q=false;b.draggable&&google.maps.event.addListener(b,"dragend",function(){b.q=false;a.m();a.i()});a.a.push(b)}g=i.prototype;g.o=function(a,b){m(this,a);b||this.i()};g.S=function(a){var b=-1;if(this.a.indexOf)b=this.a.indexOf(a);else for(var c=0,e;e=this.a[c];c++)if(e==a)b=c;if(b==-1)return false;this.a.splice(b,1);a.setVisible(false);a.setMap(null);this.m();this.i();return true};g.M=function(){return this.l.length};g.getMap=f("b");g.setMap=d("b"); g.t=f("f");g.U=d("f");function n(a,b){var c=a.getProjection(),e=new google.maps.LatLng(b.getNorthEast().lat(),b.getNorthEast().lng()),h=new google.maps.LatLng(b.getSouthWest().lat(),b.getSouthWest().lng());e=c.fromLatLngToDivPixel(e);e.x+=a.f;e.y-=a.f;h=c.fromLatLngToDivPixel(h);h.x-=a.f;h.y+=a.f;e=c.fromDivPixelToLatLng(e);c=c.fromDivPixelToLatLng(h);b.extend(e);b.extend(c);return b}i.prototype.K=function(){this.m();this.a=[]}; i.prototype.m=function(){for(var a=0,b;b=this.l[a];a++)b.remove();for(a=0;b=this.a[a];a++){b.q=false;b.setMap(null);b.setVisible(false)}this.l=[]};i.prototype.i=function(){l(this)}; function l(a){if(a.v)for(var b=n(a,new google.maps.LatLngBounds(a.b.getBounds().getSouthWest(),a.b.getBounds().getNorthEast())),c=0,e;e=a.a[c];c++){var h=false;if(!e.q&&b.contains(e.getPosition())){for(var q=0,j;j=a.l[q];q++)if(!h&&j.getCenter()&&j.s.contains(e.getPosition())){h=true;j.o(e);break}if(!h){j=new o(a);j.o(e);a.l.push(j)}}}}function o(a){this.h=a;this.b=a.getMap();this.f=a.t();this.d=null;this.a=[];this.s=null;this.k=new p(this,a.u(),a.t())} o.prototype.o=function(a){var b;a:if(this.a.indexOf)b=this.a.indexOf(a)!=-1;else{b=0;for(var c;c=this.a[b];b++)if(c==a){b=true;break a}b=false}if(b)return false;if(!this.d){this.d=a.getPosition();r(this)}if(this.a.length==0){a.setMap(this.b);a.setVisible(true)}else if(this.a.length==1){this.a[0].setMap(null);this.a[0].setVisible(false)}a.q=true;this.a.push(a);if(this.b.getZoom()>this.h.C())for(a=0;b=this.a[a];a++){b.setMap(this.b);b.setVisible(true)}else if(this.a.length<2)s(this.k);else{a=this.h.u().length; b=this.h.B()(this.a,a);this.k.setCenter(this.d);a=this.k;a.w=b;a.ba=b.text;a.X=b.index;if(a.c)a.c.innerHTML=b.text;b=Math.max(0,a.w.index-1);b=Math.min(a.j.length-1,b);b=a.j[b];a.H=b.url;a.g=b.height;a.n=b.width;a.F=b.Z;a.anchor=b.Y;a.G=b.$;this.k.show()}return true};o.prototype.getBounds=function(){r(this);return this.s};o.prototype.remove=function(){this.k.remove();delete this.a};o.prototype.getCenter=f("d");function r(a){a.s=n(a.h,new google.maps.LatLngBounds(a.d,a.d))}o.prototype.getMap=f("b"); function p(a,b,c){a.h.extend(p,google.maps.OverlayView);this.j=b;this.aa=c||0;this.p=a;this.d=null;this.b=a.getMap();this.w=this.c=null;this.r=false;this.setMap(this.b)} p.prototype.onAdd=function(){this.c=document.createElement("DIV");if(this.r){this.c.style.cssText=t(this,u(this,this.d));this.c.innerHTML=this.w.text}this.getPanes().overlayImage.appendChild(this.c);var a=this;google.maps.event.addDomListener(this.c,"click",function(){var b=a.p.h;google.maps.event.trigger(b,"clusterclick",[a.p]);if(b.W){a.b.panTo(a.p.getCenter());a.b.fitBounds(a.p.getBounds())}})}; function u(a,b){var c=a.projection.fromLatLngToDivPixel(b);c.x-=parseInt(a.n/2,10);c.y-=parseInt(a.g/2,10);return c}p.prototype.draw=function(){if(this.r){var a=u(this,this.d);this.c.style.top=a.y+"px";this.c.style.left=a.x+"px"}};function s(a){if(a.c)a.c.style.display="none";a.r=false}p.prototype.show=function(){if(this.c){this.c.style.cssText=t(this,u(this,this.d));this.c.style.display=""}this.r=true};p.prototype.remove=function(){this.setMap(null)}; p.prototype.onRemove=function(){if(this.c&&this.c.parentNode){s(this);this.c.parentNode.removeChild(this.c);this.c=null}};p.prototype.setCenter=d("d"); function t(a,b){var c=[];document.all?c.push('filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale,src="'+a.H+'");'):c.push("background:url("+a.H+");");if(typeof a.e==="object"){typeof a.e[0]==="number"&&a.e[0]>0&&a.e[0]<a.g?c.push("height:"+(a.g-a.e[0])+"px; padding-top:"+a.e[0]+"px;"):c.push("height:"+a.g+"px; line-height:"+a.g+"px;");typeof a.e[1]==="number"&&a.e[1]>0&&a.e[1]<a.n?c.push("width:"+(a.n-a.e[1])+"px; padding-left:"+a.e[1]+"px;"):c.push("width:"+a.n+"px; text-align:center;")}else c.push("height:"+ a.g+"px; line-height:"+a.g+"px; width:"+a.n+"px; text-align:center;");c.push("cursor:pointer; top:"+b.y+"px; left:"+b.x+"px; color:"+(a.F?a.F:"black")+"; position:absolute; font-size:"+(a.G?a.G:11)+"px; font-family:Arial,sans-serif; font-weight:bold");return c.join("")}window.MarkerClusterer=i;i.prototype.addMarker=i.prototype.o;i.prototype.addMarkers=i.prototype.z;i.prototype.clearMarkers=i.prototype.K;i.prototype.getCalculator=i.prototype.B;i.prototype.getGridSize=i.prototype.t; i.prototype.getMap=i.prototype.getMap;i.prototype.getMarkers=i.prototype.L;i.prototype.getMaxZoom=i.prototype.C;i.prototype.getStyles=i.prototype.u;i.prototype.getTotalClusters=i.prototype.M;i.prototype.getTotalMarkers=i.prototype.N;i.prototype.redraw=i.prototype.i;i.prototype.removeMarker=i.prototype.S;i.prototype.resetViewport=i.prototype.m;i.prototype.setCalculator=i.prototype.T;i.prototype.setGridSize=i.prototype.U;i.prototype.onAdd=i.prototype.onAdd;i.prototype.draw=i.prototype.draw; i.prototype.idle=i.prototype.O;p.prototype.onAdd=p.prototype.onAdd;p.prototype.draw=p.prototype.draw;p.prototype.onRemove=p.prototype.onRemove;
