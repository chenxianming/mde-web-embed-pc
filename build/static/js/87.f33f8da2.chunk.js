(window["webpackJsonpmde-editor"]=window["webpackJsonpmde-editor"]||[]).push([[87],{147:function(e,t,n){!function(e){"use strict";var t=["package","message","import","syntax","required","optional","repeated","reserved","default","extensions","packed","bool","bytes","double","enum","float","string","int32","int64","uint32","uint64","sint32","sint64","fixed32","fixed64","sfixed32","sfixed64","option","service","rpc","returns"],n=new RegExp("^(("+t.join(")|(")+"))\\b","i");e.registerHelper("hintWords","protobuf",t);var r=new RegExp("^[_A-Za-z\xa1-\uffff][_A-Za-z0-9\xa1-\uffff]*");function i(e){if(e.eatSpace())return null;if(e.match("//"))return e.skipToEnd(),"comment";if(e.match(/^[0-9\.+-]/,!1)){if(e.match(/^[+-]?0x[0-9a-fA-F]+/))return"number";if(e.match(/^[+-]?\d*\.\d+([EeDd][+-]?\d+)?/))return"number";if(e.match(/^[+-]?\d+([EeDd][+-]?\d+)?/))return"number"}return e.match(/^"([^"]|(""))*"/)?"string":e.match(/^'([^']|(''))*'/)?"string":e.match(n)?"keyword":e.match(r)?"variable":(e.next(),null)}e.defineMode("protobuf",(function(){return{token:i}})),e.defineMIME("text/x-protobuf","protobuf")}(n(9))}}]);
//# sourceMappingURL=87.f33f8da2.chunk.js.map