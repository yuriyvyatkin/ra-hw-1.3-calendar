(this["webpackJsonpra-hw-1.3-calendar"]=this["webpackJsonpra-hw-1.3-calendar"]||[]).push([[0],{10:function(e,t,c){},12:function(e,t,c){"use strict";c.r(t);var a=c(1),r=c.n(a),i=c(3),n=c.n(i),s=(c(9),c(10),c(4));var l=c(0);var d=function(e){var t=e.week,c=e.currentDay,a=e.firstWeek,r=e.lastWeek,i=t.map((function(e){var i;return e===c&&(i="ui-datepicker-today"),a&&e>t[6]&&(i="ui-datepicker-other-month"),r&&e<t[0]&&(i="ui-datepicker-other-month"),Object(l.jsx)("td",{className:i,children:e},e.toString())}));return Object(l.jsx)("tr",{children:i})};var j=function(e){var t=e.date,c=t.getDate(),a=function(e){var t=new Date(e.getTime()),c=new Date(t.getFullYear(),t.getMonth()).getDay();c=(0===c?7:c)-1;var a=new Date(t.getFullYear(),t.getMonth()+1,0).getDate(),r=Math.ceil(a/7),i=[],n=1,s=1;t.setDate(0);for(var l=0;l<r;l+=1){for(var d=[],j=0;j<7;j+=1)0===i.length&&j<c?(t.setDate(t.getDate()-(j?1:0)),d.unshift(t.getDate())):n>a?(d.push(s),s+=1):(d.push(n),n+=1);i.push(d)}return i}(t),r=a.length-1;return Object(l.jsx)("tbody",{children:a.map((function(e,t){return Object(l.jsx)(d,{week:e,currentDay:c,firstWeek:0===t,lastWeek:t===r},e.join(""))}))})};var o=function(e){var t=e.date,c=function(e){var t=function(e){return e.charAt(0).toUpperCase()+e.slice(1)},c=new Intl.DateTimeFormat("ru-RU",{weekday:"long",day:"numeric",month:"long",year:"numeric"}).format(e).split(/[,\s\u0433.]+/g),a=Object(s.a)(c,4),r=a[0],i=a[1],n=a[2],l=a[3],d=t(r),j=t(new Intl.DateTimeFormat("ru-RU",{month:"long"}).format(e));return{capitalizedWeekDay:d,day:i,uppercasedMonth:n.toUpperCase(),year:l,capitalizedMonth:j}}(t);return Object(l.jsxs)("div",{className:"ui-datepicker",children:[Object(l.jsxs)("div",{className:"ui-datepicker-material-header",children:[Object(l.jsx)("div",{className:"ui-datepicker-material-day",children:c.capitalizedWeekDay}),Object(l.jsxs)("div",{className:"ui-datepicker-material-date",children:[Object(l.jsx)("div",{className:"ui-datepicker-material-day-num",children:c.day}),Object(l.jsx)("div",{className:"ui-datepicker-material-month",children:c.uppercasedMonth}),Object(l.jsx)("div",{className:"ui-datepicker-material-year",children:c.year})]})]}),Object(l.jsx)("div",{className:"ui-datepicker-header",children:Object(l.jsxs)("div",{className:"ui-datepicker-title",children:[Object(l.jsx)("span",{className:"ui-datepicker-month",children:c.capitalizedMonth}),"\xa0",Object(l.jsx)("span",{className:"ui-datepicker-year",children:c.year})]})}),Object(l.jsxs)("table",{className:"ui-datepicker-calendar",children:[Object(l.jsxs)("colgroup",{children:[Object(l.jsx)("col",{}),Object(l.jsx)("col",{}),Object(l.jsx)("col",{}),Object(l.jsx)("col",{}),Object(l.jsx)("col",{}),Object(l.jsx)("col",{className:"ui-datepicker-week-end"}),Object(l.jsx)("col",{className:"ui-datepicker-week-end"})]}),Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{scope:"col",title:"\u041f\u043e\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u0438\u043a",children:"\u041f\u043d"}),Object(l.jsx)("th",{scope:"col",title:"\u0412\u0442\u043e\u0440\u043d\u0438\u043a",children:"\u0412\u0442"}),Object(l.jsx)("th",{scope:"col",title:"\u0421\u0440\u0435\u0434\u0430",children:"\u0421\u0440"}),Object(l.jsx)("th",{scope:"col",title:"\u0427\u0435\u0442\u0432\u0435\u0440\u0433",children:"\u0427\u0442"}),Object(l.jsx)("th",{scope:"col",title:"\u041f\u044f\u0442\u043d\u0438\u0446\u0430",children:"\u041f\u0442"}),Object(l.jsx)("th",{scope:"col",title:"\u0421\u0443\u0431\u0431\u043e\u0442\u0430",children:"\u0421\u0431"}),Object(l.jsx)("th",{scope:"col",title:"\u0412\u043e\u0441\u043a\u0440\u0435\u0441\u0435\u043d\u044c\u0435",children:"\u0412\u0441"})]})}),Object(l.jsx)(j,{date:t})]})]})},h=new Date(2021,11,24);var u=function(){return Object(l.jsx)(o,{date:h})},p=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,13)).then((function(t){var c=t.getCLS,a=t.getFID,r=t.getFCP,i=t.getLCP,n=t.getTTFB;c(e),a(e),r(e),i(e),n(e)}))};n.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(u,{})}),document.getElementById("root")),p()},9:function(e,t,c){}},[[12,1,2]]]);
//# sourceMappingURL=main.4ff4666d.chunk.js.map