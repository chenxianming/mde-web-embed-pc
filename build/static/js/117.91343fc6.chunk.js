(window["webpackJsonpmde-editor"]=window["webpackJsonpmde-editor"]||[]).push([[117],{179:function(e,t,n){!function(e){"use strict";e.defineMode("vbscript",(function(e,t){var n="error";function r(e){return new RegExp("^(("+e.join(")|(")+"))\\b","i")}var a=new RegExp("^[\\+\\-\\*/&\\\\\\^<>=]"),i=new RegExp("^((<>)|(<=)|(>=))"),o=new RegExp("^[\\.,]"),c=new RegExp("^[\\(\\)]"),b=new RegExp("^[A-Za-z][_A-Za-z0-9]*"),s=r(["and","or","not","xor","is","mod","eqv","imp"]),l=["WScript","err","debug","RegExp"],u=["clear","execute","raise","replace","test","write","writeline","close","open","state","eof","update","addnew","end","createobject","quit"].concat(["description","firstindex","global","helpcontext","helpfile","ignorecase","length","number","pattern","source","value","count"]);l=l.concat(["vbBlack","vbRed","vbGreen","vbYellow","vbBlue","vbMagenta","vbCyan","vbWhite","vbBinaryCompare","vbTextCompare","vbSunday","vbMonday","vbTuesday","vbWednesday","vbThursday","vbFriday","vbSaturday","vbUseSystemDayOfWeek","vbFirstJan1","vbFirstFourDays","vbFirstFullWeek","vbGeneralDate","vbLongDate","vbShortDate","vbLongTime","vbShortTime","vbObjectError","vbOKOnly","vbOKCancel","vbAbortRetryIgnore","vbYesNoCancel","vbYesNo","vbRetryCancel","vbCritical","vbQuestion","vbExclamation","vbInformation","vbDefaultButton1","vbDefaultButton2","vbDefaultButton3","vbDefaultButton4","vbApplicationModal","vbSystemModal","vbOK","vbCancel","vbAbort","vbRetry","vbIgnore","vbYes","vbNo","vbCr","VbCrLf","vbFormFeed","vbLf","vbNewLine","vbNullChar","vbNullString","vbTab","vbVerticalTab","vbUseDefault","vbTrue","vbFalse","vbEmpty","vbNull","vbInteger","vbLong","vbSingle","vbDouble","vbCurrency","vbDate","vbString","vbObject","vbError","vbBoolean","vbVariant","vbDataObject","vbDecimal","vbByte","vbArray"]),e.isASP&&(l=l.concat(["server","response","request","session","application"]),u=u.concat(["addheader","appendtolog","binarywrite","end","flush","redirect","binaryread","remove","removeall","lock","unlock","abandon","getlasterror","htmlencode","mappath","transfer","urlencode"],["buffer","cachecontrol","charset","contenttype","expires","expiresabsolute","isclientconnected","pics","status","clientcertificate","cookies","form","querystring","servervariables","totalbytes","contents","staticobjects","codepage","lcid","sessionid","timeout","scripttimeout"]));var d=r(["dim","redim","then","until","randomize","byval","byref","new","property","exit","in","const","private","public","get","set","let","stop","on error resume next","on error goto 0","option explicit","call","me"]),v=r(["true","false","nothing","empty","null"]),m=r(["abs","array","asc","atn","cbool","cbyte","ccur","cdate","cdbl","chr","cint","clng","cos","csng","cstr","date","dateadd","datediff","datepart","dateserial","datevalue","day","escape","eval","execute","exp","filter","formatcurrency","formatdatetime","formatnumber","formatpercent","getlocale","getobject","getref","hex","hour","inputbox","instr","instrrev","int","fix","isarray","isdate","isempty","isnull","isnumeric","isobject","join","lbound","lcase","left","len","loadpicture","log","ltrim","rtrim","trim","maths","mid","minute","month","monthname","msgbox","now","oct","replace","rgb","right","rnd","round","scriptengine","scriptenginebuildversion","scriptenginemajorversion","scriptengineminorversion","second","setlocale","sgn","sin","space","split","sqr","strcomp","string","strreverse","tan","time","timer","timeserial","timevalue","typename","ubound","ucase","unescape","vartype","weekday","weekdayname","year"]),p=r(l),f=r(u),h='"',y=r(["class","sub","select","while","if","function","property","with","for"]),g=r(["else","elseif","case"]),w=r(["next","loop","wend"]),x=r(["end"]),k=r(["do"]),I=r(["on error resume next","exit"]),C=r(["rem"]);function L(e,t){t.currentIndent++}function E(e,t){t.currentIndent--}function D(e,r){if(e.eatSpace())return"space";if("'"===e.peek())return e.skipToEnd(),"comment";if(e.match(C))return e.skipToEnd(),"comment";if(e.match(/^((&H)|(&O))?[0-9\.]/i,!1)&&!e.match(/^((&H)|(&O))?[0-9\.]+[a-z_]/i,!1)){var l=!1;if(e.match(/^\d*\.\d+/i)?l=!0:e.match(/^\d+\.\d*/)?l=!0:e.match(/^\.\d+/)&&(l=!0),l)return e.eat(/J/i),"number";var u=!1;if(e.match(/^&H[0-9a-f]+/i)?u=!0:e.match(/^&O[0-7]+/i)?u=!0:e.match(/^[1-9]\d*F?/)?(e.eat(/J/i),u=!0):e.match(/^0(?![\dx])/i)&&(u=!0),u)return e.eat(/L/i),"number"}return e.match(h)?(r.tokenize=function(e){var r=1==e.length;return function(a,i){for(;!a.eol();){if(a.eatWhile(/[^'"]/),a.match(e))return i.tokenize=D,"string";a.eat(/['"]/)}if(r){if(t.singleLineStringErrors)return n;i.tokenize=D}return"string"}}(e.current()),r.tokenize(e,r)):e.match(i)||e.match(a)||e.match(s)?"operator":e.match(o)?null:e.match(c)?"bracket":e.match(I)?(r.doInCurrentLine=!0,"keyword"):e.match(k)?(L(0,r),r.doInCurrentLine=!0,"keyword"):e.match(y)?(r.doInCurrentLine?r.doInCurrentLine=!1:L(0,r),"keyword"):e.match(g)?"keyword":e.match(x)?(E(0,r),E(0,r),"keyword"):e.match(w)?(r.doInCurrentLine?r.doInCurrentLine=!1:E(0,r),"keyword"):e.match(d)?"keyword":e.match(v)?"atom":e.match(f)?"variable-2":e.match(m)?"builtin":e.match(p)?"variable-2":e.match(b)?"variable":(e.next(),n)}return{electricChars:"dDpPtTfFeE ",startState:function(){return{tokenize:D,lastToken:null,currentIndent:0,nextLineIndent:0,doInCurrentLine:!1,ignoreKeyword:!1}},token:function(e,t){e.sol()&&(t.currentIndent+=t.nextLineIndent,t.nextLineIndent=0,t.doInCurrentLine=0);var r=function(e,t){var r=t.tokenize(e,t),a=e.current();return"."===a?(r=t.tokenize(e,t),a=e.current(),!r||"variable"!==r.substr(0,8)&&"builtin"!==r&&"keyword"!==r?n:("builtin"!==r&&"keyword"!==r||(r="variable"),u.indexOf(a.substr(1))>-1&&(r="variable-2"),r)):r}(e,t);return t.lastToken={style:r,content:e.current()},"space"===r&&(r=null),r},indent:function(t,n){var r=n.replace(/^\s+|\s+$/g,"");return r.match(w)||r.match(x)||r.match(g)?e.indentUnit*(t.currentIndent-1):t.currentIndent<0?0:t.currentIndent*e.indentUnit}}})),e.defineMIME("text/vbscript","vbscript")}(n(9))}}]);
//# sourceMappingURL=117.91343fc6.chunk.js.map