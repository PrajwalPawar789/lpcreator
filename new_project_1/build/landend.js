!function e(t,r,i){function n(a,$){if(!r[a]){if(!t[a]){var u="function"==typeof require&&require;if(!$&&u)return u(a,!0);if(o)return o(a,!0);var c=Error("Cannot find module '"+a+"'");throw c.code="MODULE_NOT_FOUND",c}var l=r[a]={exports:{}};t[a][0].call(l.exports,function(e){var r;return n(t[a][1][e]||e)},l,l.exports,e,t,r,i)}return r[a].exports}for(var o="function"==typeof require&&require,a=0;a<i.length;a++)n(i[a]);return n}({1:[function(e,t,r){"use strict";var i=e("./landend/counter/v2/counters"),n=e("./landend/newAwesomeCounter/counter");document.querySelectorAll(".widget-counter").forEach(function(e){return(0,i.initialize)(e)}),document.querySelectorAll(".widget-counterv2").forEach(function(e){return(0,n.initialize)(e)})},{"./landend/counter/v2/counters":2,"./landend/newAwesomeCounter/counter":3}],2:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var i=void 0;function n(e,t,r,i,n){return e.getAttribute("data-format").replace("%dddd",("000"+t).slice(-4)).replace("%ddd",("00"+t).slice(-3)).replace("%dd",("0"+t).slice(-2)).replace("%d",t).replace("%hh",("0"+r).slice(-2)).replace("%mm",("0"+i).slice(-2)).replace("%ss",("0"+n).slice(-2)).replace("%h",r).replace("%m",i).replace("%s",n)}function o(){var e=void 0,t="__storage_test__";if(void 0!==i)return i;if(!window||!window.localStorage)return!1;try{return(e=window.localStorage).setItem(t,t),e.removeItem(t),!0}catch(r){return r instanceof DOMException&&([22,1014].includes(r.code)||["QuotaExceededError","NS_ERROR_DOM_QUOTA_REACHED"].includes(r.name))&&e&&0!==e.length}}r.initialize=function e(t){var r,i,a,$,u,c=(r=t,i=r.getAttribute("data-date"),a=r.getAttribute("data-version"),$=r.getAttribute("id"),u=new Date(i),"-1"===r.getAttribute("data-repeat")&&(o()&&(u=function e(t){var r=t.getAttribute("id"),i=window.localStorage.getItem("count-"+r);if(i)try{var n=JSON.parse(i);if(!function e(t){if(!t.value||!t.expires)return!0;var r=new Date,i=new Date(t.expires);return r.getTime()>i.getTime()}(n))return new Date(n.value);window.localStorage.removeItem("count-"+r)}catch(o){}return null}(r)),u||(u=function e(t){var r=t.getAttribute("id"),i=document.cookie?document.cookie.split(";"):[],n={};for(var o in i)if(i.hasOwnProperty(o)&&"string"==typeof o){var a=i[o].split("=");n[a[0].replace(/\s/g,"")]=a[1]}return n["count-"+r]?new Date(n["count-"+r]):null}(r)),u||function e(t,r){var i=new Date;if(i.setMonth(i.getMonth()+1),o()){var n={value:t.getTime(),expires:new Date(i).getTime()};window.localStorage.setItem("count-"+r,JSON.stringify(n));return}document.cookie="count-"+r+"="+t+";expires="+new Date(i)+";path="+window.location.pathname}(u=new Date,$),u.setMinutes(u.getMinutes()+parseInt(i,10))),a||u.setTime(u.getTime()+6e4*u.getTimezoneOffset()),u),l=void 0;l=setInterval(function(){return function e(t,r,i){var o=Number(t.getAttribute("data-repeat")),a=t.getAttribute("data-version"),$=new Date,u=r-$,c=void 0,l=void 0,s=void 0,d=void 0,g=36e5,f=24*g;if(u<0){if(!a||2>parseInt(a,10)||!o||o<=0)i(),c=0,l=0,s=0,d=0;else for(;u<0;)r.setDate(r.getDate()+o),u=r-$}u>=0&&(c=Math.floor(u/f),l=Math.floor(u%f/g),s=Math.floor(u%g/6e4),d=Math.floor(u%6e4/1e3)),t.querySelectorAll(".widget-text[data-format]").forEach(function(e){e.textContent=n(e,c,l,s,d)}),0===t.querySelectorAll(".widget-text").length&&(t.textContent=n(t,c,l,s,d))}(t,c,function(){return clearInterval(l)})},1e3)}},{}],3:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var i=void 0;function n(){var e=void 0,t="__storage_test__";if(void 0!==i)return i;if(!window||!window.localStorage)return!1;try{return(e=window.localStorage).setItem(t,t),e.removeItem(t),!0}catch(r){return r instanceof DOMException&&([22,1014].includes(r.code)||["QuotaExceededError","NS_ERROR_DOM_QUOTA_REACHED"].includes(r.name))&&e&&0!==e.length}}function o(e,t){var r=e.getAttribute(t);return r?JSON.parse(r):{}}r.initialize=function e(t){var r=function e(t){var r=t.getAttribute("data-strategy"),i="1"===t.getAttribute("data-full-js");var a=new Date;if("evergreen_counter"===r){var $=o(t,"data-intervals"),u=$.days,c=$.hours,l=$.minutes,s=$.seconds;a.setTime(a.getTime()+864e5*(void 0===u?0:u)),a.setTime(a.getTime()+36e5*(void 0===c?0:c)),a.setTime(a.getTime()+6e4*(void 0===l?0:l)),a.setTime(a.getTime()+1e3*(void 0===s?0:s))}else if(i&&"repeat_every_week"===r){var d=parseInt(t.getAttribute("data-week-cycle-start-day-of-week")),g=parseInt(t.getAttribute("data-week-cycle-end-day-of-week")),f=t.getAttribute("data-week-cycle-start-time"),v=parseInt(f.split(":")[0]),m=parseInt(f.split(":")[1]),p=t.getAttribute("data-week-cycle-end-time"),w=parseInt(p.split(":")[0]),T=parseInt(p.split(":")[1]),A=t.getAttribute("data-timezone");7===d&&(d=0),7===g&&(g=0);var y=void 0;y=A?new Date(new Date().toLocaleString("en-US",{timeZone:A})):new Date;var h=Math.round((new Date().getTime()-y.getTime())/1e3/60),_=y.getDay(),b=new Date(y.getTime());b.setHours(v,m,0,0),b.setDate(b.getDate()+(d-_)),(a=new Date(y.getTime())).setHours(w,T,0,0),a.setDate(a.getDate()+(g-_));var S=b.getTime()>y.getTime(),x=function e(t){return t.setMinutes(t.getMinutes()+h),new Date(t.getTime())};return d<g?(S&&a.setTime(a.getTime()-6048e5),x(a)):g<d?(S||a.setTime(a.getTime()+6048e5),x(a)):S?(a.getTime()>b.getTime()&&a.setTime(a.getTime()-6048e5),x(a)):(a.getTime()<b.getTime()&&a.setTime(a.getTime()+6048e5),x(a))}else if(i&&"repeat_every_day"===r){var M=t.getAttribute("data-timezone"),E=new Date(new Date().toLocaleString("en-US",{timeZone:M})),D=Math.round((new Date().getTime()-E.getTime())/1e3/60),k=E.getDay();a=new Date(E.getTime()),0===k&&(k=7);var O=t.getAttribute("data-daily-cycle-"+k+"-start-time"),I=t.getAttribute("data-daily-cycle-"+k+"-end-time");if(O&&I){var C=parseInt(O.split(":")[0]),R=parseInt(O.split(":")[1]),z=parseInt(I.split(":")[0]),H=parseInt(I.split(":")[1]);if(C>E.getHours()||C===E.getHours()&&R>E.getMinutes())return a;a.setHours(z,H,0,0)}return a.setMinutes(a.getMinutes()+D),new Date(a.getTime())}else{var U=t.getAttribute("data-date");a=new Date(U)}if("evergreen_counter"===r){var q=t.getAttribute("id"),N=function e(t){if(n()){var r=t.getAttribute("id"),i=window.localStorage.getItem("count-"+r);if(i)try{var o=JSON.parse(i);if(!function e(t){if(!t.value||!t.expires)return!0;var r=new Date,i=new Date(t.expires);return r.getTime()>i.getTime()}(o))return new Date(o.value);window.localStorage.removeItem("count-"+r)}catch(a){}}return null}(t),P=function e(t){var r=t.getAttribute("id"),i=document.cookie?document.cookie.split(";"):[],n={};for(var o in i)if(i.hasOwnProperty(o)&&"string"==typeof o){var a=i[o].split("=");n[a[0].replace(/\s/g,"")]=a[1]}return n["count-"+r]?new Date(n["count-"+r]):null}(t);window&&window.location&&!window.location.href.includes("editor.landingi")&&(N?a=N:P?a=P:function e(t,r){var i=new Date;if(i.setMonth(i.getMonth()+1),n()){var o={value:t.getTime(),expires:new Date(i).getTime()};window.localStorage.setItem("count-"+r,JSON.stringify(o));return}document.cookie="count-"+r+"="+t+";expires="+new Date(i)+";path="+window.location.pathname}(a,q))}return a}(t),i=o(t,"data-expire-action"),a=void 0;a=setInterval(function(){var e,n,o,$,u,c,l,s,d,g,f,v;return e=t,n=r,o=function(){return clearInterval(a)},$=i,u=n-new Date,c=void 0,l=void 0,s=void 0,d=void 0,g=36e5,f=24*g,void(u<0&&(o(),c=0,l=0,s=0,d=0,v=$,window&&window.location&&!(window.location.href.includes("editor.landingi")||window.location.href.includes("preview-frame"))&&"redirect"===v.type&&window.location.replace(v.url)),u>=0&&(c=Math.floor(u/f),l=Math.floor(u%f/g),s=Math.floor(u%g/6e4),d=Math.floor(u%6e4/1e3)),e.querySelectorAll(".widget-text[data-format]").forEach(function(e){var t,r,i,n,o;e.textContent=(t=e,r=c,i=l,n=s,o=d,r>99&&"%dd"===t.getAttribute("data-format")&&t.setAttribute("data-format","%ddd"),t.getAttribute("data-format").replace("%ddd",("00"+r).slice(-3)).replace("%dd",("0"+r).slice(-2)).replace("%d",r).replace("%hh",("0"+i).slice(-2)).replace("%mm",("0"+n).slice(-2)).replace("%ss",("0"+o).slice(-2)).replace("%h",i).replace("%m",n).replace("%s",o))}))},1e3)}},{}]},{},[1]);