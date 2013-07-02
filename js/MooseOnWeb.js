smalltalk.addPackage('MooseOnWeb', {});
smalltalk.addClass('MWActionList', smalltalk.Widget, ['actions', 'mooseEntity', 'isFetched', 'ul'], 'MooseOnWeb');
smalltalk.addMethod(
"_actionClick_",
smalltalk.method({
selector: "actionClick:",
category: 'events',
fn: function (anAction){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$1=_st((smalltalk.MWAddColumn || MWAddColumn))._new();
_st($1)._colId_(_st(_st(_st(self["@ul"])._asJQuery())._parent_("div"))._attr_("row"));
$3=_st((smalltalk.MWResultWidget || MWResultWidget))._new();
_st($3)._action_(anAction);
_st($3)._sourceEntity_(_st(self)._mooseEntity());
$4=_st($3)._getResult();
$2=_st($1)._content_($4);
_st(_st((smalltalk.MWAnnouncer || MWAnnouncer))._current())._announce_($2);
return self}, function($ctx1) {$ctx1.fill(self,"actionClick:",{anAction:anAction}, smalltalk.MWActionList)})},
args: ["anAction"],
source: "actionClick: anAction\x0a\x09MWAnnouncer current announce: (\x0a    \x09MWAddColumn new\x0a        \x09colId: ((ul asJQuery parent: 'div') attr: 'row');\x0a        \x09content: (\x0a              MWResultWidget new \x0a                  action: anAction; \x0a                  sourceEntity: self mooseEntity;\x0a                  getResult\x0a        )\x0a    )\x0a\x0a  ",
messageSends: ["announce:", "colId:", "attr:", "parent:", "asJQuery", "new", "content:", "action:", "sourceEntity:", "mooseEntity", "getResult", "current"],
referencedClasses: ["MWAddColumn", "MWResultWidget", "MWAnnouncer"]
}),
smalltalk.MWActionList);

smalltalk.addMethod(
"_getActions",
smalltalk.method({
selector: "getActions",
category: 'query',
fn: function (){
var self=this;
var result;
return smalltalk.withContext(function($ctx1) { 
return smalltalk.withContext(function($ctx2) {
}, function($ctx2) {$ctx2.fillBlock({tmp:tmp},$ctx1)})})),_st("error").__minus_gt((function(a,b,c){
return smalltalk.withContext(function($ctx2) {
return _st((smalltalk.Transcript || Transcript))._show_(_st(_st(_st(_st(_st("error1").__comma(a)).__comma("2")).__comma(b)).__comma("3")).__comma(c));
}, function($ctx2) {$ctx2.fillBlock({a:a,b:b,c:c},$ctx1)})})),_st("dataType").__minus_gt("json")]));
return self}, function($ctx1) {$ctx1.fill(self,"getActions",{result:result}, smalltalk.MWActionList)})},
args: [],
source: "getActions\x0a\x09| result |\x0a\x09result := jQuery \x0a    \x09ajax: MWEntryPoint restApiLocation, MWEntryPoint urlEntities,'/',self mooseEntity id, '?q=actions'\x0a\x09\x09options: #{\x0a\x09\x09\x09'type' -> 'GET'.\x0a            'success' ->  [ :tmp | self success: tmp].\x0a\x09\x09\x09'error' -> [:a :b : c |  window alert:'error in getting actions list'.Transcript  show: 'error1',a, '2',b,'3',c].\x0a\x09\x09\x09'dataType' -> 'json'\x0a\x09\x09}.",
messageSends: ["ajax:options:", ",", "id", "mooseEntity", "urlEntities", "restApiLocation", "->", "success:", "alert:", "show:"],
referencedClasses: ["MWEntryPoint", "Transcript"]
}),
smalltalk.MWActionList);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@isFetched"]=false;
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{}, smalltalk.MWActionList)})},
args: [],
source: "initialize \x0a\x09super initialize.\x0a\x09isFetched := false.\x0a    ",
messageSends: ["initialize"],
referencedClasses: []
}),
smalltalk.MWActionList);

smalltalk.addMethod(
"_mooseEntity",
smalltalk.method({
selector: "mooseEntity",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$1=self["@mooseEntity"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"mooseEntity",{}, smalltalk.MWActionList)})},
args: [],
source: "mooseEntity\x0a\x09^mooseEntity",
messageSends: [],
referencedClasses: []
}),
smalltalk.MWActionList);

smalltalk.addMethod(
"_mooseEntity_",
smalltalk.method({
selector: "mooseEntity:",
category: 'accessing',
fn: function (aMooseEntity){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"mooseEntity:",{aMooseEntity:aMooseEntity}, smalltalk.MWActionList)})},
args: ["aMooseEntity"],
source: "mooseEntity: aMooseEntity\x0a\x09mooseEntity := aMooseEntity",
messageSends: [],
referencedClasses: []
}),
smalltalk.MWActionList);

smalltalk.addMethod(
"_renderContents_",
smalltalk.method({
selector: "renderContents:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$1=self["@isFetched"];
if(smalltalk.assert($1)){
_st(self["@actions"])._do_((function(action){
return smalltalk.withContext(function($ctx2) {
return smalltalk.withContext(function($ctx3) {
_st($4)._href_("#");
_st($4)._with_(action);
$5=_st($4)._onClick_((function(){
return smalltalk.withContext(function($ctx4) {
}, function($ctx4) {$ctx4.fillBlock({},$ctx1)})}));
return $5;
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
}, function($ctx2) {$ctx2.fillBlock({action:action},$ctx1)})}));
} else {
$2=_st(html)._span();
_st($2)._class_("label label-info");
$3=_st($2)._with_("Loading");
$3;
};
return self}, function($ctx1) {$ctx1.fill(self,"renderContents:",{html:html}, smalltalk.MWActionList)})},
args: ["html"],
source: "renderContents: html\x09\x0a\x09isFetched ifFalse: [\x0a      html span class: 'label label-info'; with: 'Loading'.\x0a    ] ifTrue: [\x0a      actions do: [ :action |\x0a          html li \x0a          \x09with: [\x0a              html a\x0a              \x09  href: '#';\x0a                  with: action;\x0a                  onClick: [ self actionClick: action ]\x0a          ]\x0a      ]\x0a    ]\x0a\x0a  ",
messageSends: ["ifFalse:ifTrue:", "class:", "span", "with:", "do:", "href:", "a", "onClick:", "actionClick:", "li"],
referencedClasses: []
}),
smalltalk.MWActionList);

smalltalk.addMethod(
"_renderOn_",
smalltalk.method({
selector: "renderOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$1=_st(html)._ul();
_st($1)._class_("unstyled");
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
self["@ul"]=$2;
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html}, smalltalk.MWActionList)})},
args: ["html"],
source: "renderOn: html\x0a\x09ul := html ul \x0a    \x09class: 'unstyled';\x0a        with: \x0a           [ self renderContents: html]",
messageSends: ["class:", "ul", "with:", "renderContents:"],
referencedClasses: []
}),
smalltalk.MWActionList);

smalltalk.addMethod(
"_success_",
smalltalk.method({
selector: "success:",
category: 'query',
fn: function (data){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@isFetched"]=true;
_st(_st((smalltalk.MWAnnouncer || MWAnnouncer))._current())._announce_(_st((smalltalk.MWSuccess || MWSuccess))._new());
return self}, function($ctx1) {$ctx1.fill(self,"success:",{data:data}, smalltalk.MWActionList)})},
args: ["data"],
source: "success: data\x0a\x09actions := data asArray.\x0a    isFetched := true.\x0a    MWAnnouncer current announce: MWSuccess new.\x0a\x09",
messageSends: ["asArray", "announce:", "new", "current"],
referencedClasses: ["MWSuccess", "MWAnnouncer"]
}),
smalltalk.MWActionList);

smalltalk.addMethod(
"_title",
smalltalk.method({
selector: "title",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$1=_st(self["@mooseEntity"])._title();
return $1;
}, function($ctx1) {$ctx1.fill(self,"title",{}, smalltalk.MWActionList)})},
args: [],
source: "title\x0a\x09^mooseEntity title",
messageSends: ["title"],
referencedClasses: []
}),
smalltalk.MWActionList);



smalltalk.addClass('MWAnnouncement', smalltalk.Object, ['content'], 'MooseOnWeb');
smalltalk.addMethod(
"_content",
smalltalk.method({
selector: "content",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$1=self["@content"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"content",{}, smalltalk.MWAnnouncement)})},
args: [],
source: "content\x0a\x09^content",
messageSends: [],
referencedClasses: []
}),
smalltalk.MWAnnouncement);

smalltalk.addMethod(
"_content_",
smalltalk.method({
selector: "content:",
category: 'accessing',
fn: function (anContent){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"content:",{anContent:anContent}, smalltalk.MWAnnouncement)})},
args: ["anContent"],
source: "content: anContent\x0a\x09content := anContent",
messageSends: [],
referencedClasses: []
}),
smalltalk.MWAnnouncement);



smalltalk.addClass('MWAddColumn', smalltalk.MWAnnouncement, ['colId'], 'MooseOnWeb');
smalltalk.addMethod(
"_colId",
smalltalk.method({
selector: "colId",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$1=self["@colId"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"colId",{}, smalltalk.MWAddCol)})},
args: [],
source: "colId\x0a\x09^colId",
messageSends: [],
referencedClasses: []
}),
smalltalk.MWAddColumn);

smalltalk.addMethod(
"_colId_",
smalltalk.method({
selector: "colId:",
category: 'accessing',
fn: function (id){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"colId:",{id:id}, smalltalk.MWAddCol)})},
args: ["id"],
source: "colId: id\x0a\x09colId := id",
messageSends: [],
referencedClasses: []
}),
smalltalk.MWAddColumn);



smalltalk.addClass('MWDelColumn', smalltalk.MWAnnouncement, ['colId'], 'MooseOnWeb');
smalltalk.addMethod(
"_colId",
smalltalk.method({
selector: "colId",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$1=self["@colId"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"colId",{}, smalltalk.MWDelCol)})},
args: [],
source: "colId\x0a\x09^colId",
messageSends: [],
referencedClasses: []
}),
smalltalk.MWDelColumn);

smalltalk.addMethod(
"_colId_",
smalltalk.method({
selector: "colId:",
category: 'accessing',
fn: function (id){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"colId:",{id:id}, smalltalk.MWDelCol)})},
args: ["id"],
source: "colId: id\x0a\x09colId := id",
messageSends: [],
referencedClasses: []
}),
smalltalk.MWDelColumn);



smalltalk.addClass('MWResetColumn', smalltalk.MWAnnouncement, [], 'MooseOnWeb');


smalltalk.addClass('MWSuccess', smalltalk.MWAnnouncement, [], 'MooseOnWeb');


smalltalk.addClass('MWAnnouncer', smalltalk.Announcer, [], 'MooseOnWeb');

smalltalk.MWAnnouncer.klass.iVarNames = ['current'];
smalltalk.addMethod(
"_current",
smalltalk.method({
selector: "current",
category: 'Accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$2=self["@current"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@current"]=smalltalk.Announcer.klass.fn.prototype._new.apply(_st(self), []);
$1=self["@current"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"current",{}, smalltalk.MWAnnouncer.klass)})},
args: [],
source: "current\x0a\x09^ current ifNil: [ current := super new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: []
}),
smalltalk.MWAnnouncer.klass);

smalltalk.addMethod(
"_new",
smalltalk.method({
selector: "new",
category: 'Creation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"new",{}, smalltalk.MWAnnouncer.klass)})},
args: [],
source: "new\x0a\x09self shouldNotImplement",
messageSends: ["shouldNotImplement"],
referencedClasses: []
}),
smalltalk.MWAnnouncer.klass);


smalltalk.addClass('MWColumnWidget', smalltalk.Widget, ['content', 'number'], 'MooseOnWeb');
smalltalk.addMethod(
"_close",
smalltalk.method({
selector: "close",
category: 'render',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"close",{}, smalltalk.MWColumnWidget)})},
args: [],
source: "close\x0a\x09MWAnnouncer current announce: (\x0a    \x09MWDelColumn new \x0a            colId: self number\x0a    ).",
messageSends: ["announce:", "colId:", "number", "new", "current"],
referencedClasses: ["MWDelColumn", "MWAnnouncer"]
}),
smalltalk.MWColumnWidget);

smalltalk.addMethod(
"_content",
smalltalk.method({
selector: "content",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$1=self["@content"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"content",{}, smalltalk.MWRowWidget)})},
args: [],
source: "content\x0a\x09^content",
messageSends: [],
referencedClasses: []
}),
smalltalk.MWColumnWidget);

smalltalk.addMethod(
"_content_",
smalltalk.method({
selector: "content:",
category: 'accessing',
fn: function (aWidget){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"content:",{aWidget:aWidget}, smalltalk.MWRowWidget)})},
args: ["aWidget"],
source: "content: aWidget\x0a\x09content := aWidget",
messageSends: [],
referencedClasses: []
}),
smalltalk.MWColumnWidget);

smalltalk.addMethod(
"_cssClass",
smalltalk.method({
selector: "cssClass",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
}, function($ctx1) {$ctx1.fill(self,"cssClass",{}, smalltalk.MWRowWidget)})},
args: [],
source: "cssClass\x0a\x09^'span4'",
messageSends: [],
referencedClasses: []
}),
smalltalk.MWColumnWidget);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@content"]=nil;
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{}, smalltalk.MWColumnWidget)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09content := nil",
messageSends: ["initialize"],
referencedClasses: []
}),
smalltalk.MWColumnWidget);

smalltalk.addMethod(
"_number",
smalltalk.method({
selector: "number",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$2=self["@number"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@number"]=(1);
$1=self["@number"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"number",{}, smalltalk.MWColWidget)})},
args: [],
source: "number\x0a\x09^number ifNil: [ number := 1 ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.MWColumnWidget);

smalltalk.addMethod(
"_number_",
smalltalk.method({
selector: "number:",
category: 'accessing',
fn: function (anInt){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"number:",{anInt:anInt}, smalltalk.MWColWidget)})},
args: ["anInt"],
source: "number: anInt\x0a\x09number:= anInt",
messageSends: [],
referencedClasses: []
}),
smalltalk.MWColumnWidget);

smalltalk.addMethod(
"_renderOn_",
smalltalk.method({
selector: "renderOn:",
category: 'render',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$1=_st(html)._div();
_st($1)._class_(_st(self)._cssClass());
_st($1)._at_put_("row",_st(self)._number());
$2=_st($1)._with_((function(element){
return smalltalk.withContext(function($ctx2) {
return smalltalk.withContext(function($ctx3) {
_st($3)._class_(" label label-info");
$4=_st($3)._with_(_st(_st(self)._content())._title());
$4;
$5=_st(cont)._button();
_st($5)._class_("pull-right btn btn-mini btn-danger");
_st($5)._type_("button");
_st($5)._onClick_((function(){
return smalltalk.withContext(function($ctx4) {
}, function($ctx4) {$ctx4.fillBlock({},$ctx1)})}));
$6=_st($5)._with_("X");
return $6;
}, function($ctx3) {$ctx3.fillBlock({cont:cont},$ctx1)})}));
return _st(element)._with_(_st(self)._content());
}, function($ctx2) {$ctx2.fillBlock({element:element},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html}, smalltalk.MWColumnWidget)})},
args: ["html"],
source: "renderOn: html\x0a\x09html div \x0a    \x09class: self cssClass; \x0a        at: 'row' put: self number;\x0a    \x09with: [ :element | \x0a        \x09element div \x0a                with: [ :cont |\x0a                            cont span \x0a                            \x09    class:' label label-info';\x0a                            \x09\x09with: self content title.\x0a                            cont button \x0a                                class:'pull-right btn btn-mini btn-danger';\x0a                                type:'button';\x0a                                onClick: [ self close ];\x0a                                with: 'X'\x0a            \x09]   .\x0a            element with: self content.\x0a        ]\x0a\x09\x09",
messageSends: ["class:", "cssClass", "div", "at:put:", "number", "with:", "span", "title", "content", "button", "type:", "onClick:", "close"],
referencedClasses: []
}),
smalltalk.MWColumnWidget);



smalltalk.addClass('MWEntryPoint', smalltalk.Object, [], 'MooseOnWeb');
smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'Initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st((smalltalk.MWMainWidget || MWMainWidget))._new();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{}, smalltalk.MWEntryPoint)})},
args: [],
source: "initialize\x0a\x09MWMenuWidget new.\x0a    MWMainWidget new.\x0a  \x22  IndexChartApp new.\x0a    ModelRoot new.\x22",
messageSends: ["new"],
referencedClasses: ["MWMenuWidget", "MWMainWidget"]
}),
smalltalk.MWEntryPoint);


smalltalk.addMethod(
"_colorGroup",
smalltalk.method({
selector: "colorGroup",
category: 'Accesseurs',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
}, function($ctx1) {$ctx1.fill(self,"colorGroup",{}, smalltalk.MWEntryPoint.klass)})},
args: [],
source: "colorGroup\x0a\x09 ^'rgb(255,140,0)'",
messageSends: [],
referencedClasses: []
}),
smalltalk.MWEntryPoint.klass);

smalltalk.addMethod(
"_colorItems",
smalltalk.method({
selector: "colorItems",
category: 'Accesseurs',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
}, function($ctx1) {$ctx1.fill(self,"colorItems",{}, smalltalk.MWEntryPoint.klass)})},
args: [],
source: "colorItems\x0a\x09 ^'rgb(218, 79, 73)'",
messageSends: [],
referencedClasses: []
}),
smalltalk.MWEntryPoint.klass);

smalltalk.addMethod(
"_colorcolorGroup",
smalltalk.method({
selector: "colorcolorGroup",
category: 'Accesseurs',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
}, function($ctx1) {$ctx1.fill(self,"colorcolorGroup",{}, smalltalk.MWEntryPoint.klass)})},
args: [],
source: "colorcolorGroup\x0a\x09 ^'rgb(255,140,0)'",
messageSends: [],
referencedClasses: []
}),
smalltalk.MWEntryPoint.klass);

smalltalk.addMethod(
"_restApiLocation",
smalltalk.method({
selector: "restApiLocation",
category: 'Accesseurs',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
}, function($ctx1) {$ctx1.fill(self,"restApiLocation",{}, smalltalk.EntryPoint.klass)})},
args: [],
source: "restApiLocation\x0a\x09^'http://localhost:8080/mooseOnWeb'",
messageSends: [],
referencedClasses: []
}),
smalltalk.MWEntryPoint.klass);

smalltalk.addMethod(
"_urlEntities",
smalltalk.method({
selector: "urlEntities",
category: 'Accesseurs',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
}, function($ctx1) {$ctx1.fill(self,"urlEntities",{}, smalltalk.EntryPoint.klass)})},
args: [],
source: "urlEntities\x0a\x09^'/entities'",
messageSends: [],
referencedClasses: []
}),
smalltalk.MWEntryPoint.klass);

smalltalk.addMethod(
"_urlModels",
smalltalk.method({
selector: "urlModels",
category: 'Accesseurs',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
}, function($ctx1) {$ctx1.fill(self,"urlModels",{}, smalltalk.EntryPoint.klass)})},
args: [],
source: "urlModels\x0a\x09^'/models'",
messageSends: [],
referencedClasses: []
}),
smalltalk.MWEntryPoint.klass);


smalltalk.addClass('MWMainWidget', smalltalk.Widget, ['colWidget'], 'MooseOnWeb');
smalltalk.addMethod(
"_addCol_",
smalltalk.method({
selector: "addCol:",
category: 'accessing',
fn: function (aContent){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$1=_st((smalltalk.MWColumnWidget || MWColumnWidget))._new();
_st($1)._content_(aContent);
$2=_st($1)._number_(_st(_st(_st(self)._colWidget())._size()).__plus((1)));
_st(_st(self)._colWidget())._add_($2);
_st(self)._render();
return self}, function($ctx1) {$ctx1.fill(self,"addCol:",{aContent:aContent}, smalltalk.MWMainWidget)})},
args: ["aContent"],
source: "addCol: aContent\x0a\x0a    self colWidget add: (\x0a    \x09MWColumnWidget new \x0a        \x09content: aContent; \x0a           \x09number: (\x0a            \x09self colWidget size +1\x0a            )\x0a       ).\x0a    self render",
messageSends: ["add:", "content:", "new", "number:", "+", "size", "colWidget", "render"],
referencedClasses: ["MWColumnWidget"]
}),
smalltalk.MWMainWidget);

smalltalk.addMethod(
"_colManage_",
smalltalk.method({
selector: "colManage:",
category: 'rendering',
fn: function (announcement){
var self=this;
var begin,end;
return smalltalk.withContext(function($ctx1) { 
end=_st(_st(_st(self)._colWidget())._size()).__plus((1));
_st(_st(self)._colWidget())._removeFrom_to_(begin,end);
_st(self)._addCol_(_st(announcement)._content());
return self}, function($ctx1) {$ctx1.fill(self,"colManage:",{announcement:announcement,begin:begin,end:end}, smalltalk.MWMainWidget)})},
args: ["announcement"],
source: "colManage: announcement\x0a\x09\x09| begin end |\x0a        begin :=  announcement colId asNumber + 1.\x0a        end := self colWidget size +1.\x0a        \x22window alert: begin, ' ',end.\x22\x0a\x09\x09self colWidget removeFrom: begin to: end.\x0a    \x09self addCol: announcement content.",
messageSends: ["+", "asNumber", "colId", "size", "colWidget", "removeFrom:to:", "addCol:", "content"],
referencedClasses: []
}),
smalltalk.MWMainWidget);

smalltalk.addMethod(
"_colReset",
smalltalk.method({
selector: "colReset",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@colWidget"]=_st((smalltalk.Array || Array))._new();
$1=self["@colWidget"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"colReset",{}, smalltalk.MWMainWidget)})},
args: [],
source: "colReset\x0a   \x09^colWidget := Array new",
messageSends: ["new"],
referencedClasses: ["Array"]
}),
smalltalk.MWMainWidget);

smalltalk.addMethod(
"_colResetWith_",
smalltalk.method({
selector: "colResetWith:",
category: 'accessing',
fn: function (aContent){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._colWidget())._add_(_st(_st((smalltalk.MWColumnWidget || MWColumnWidget))._new())._content_(aContent));
_st(self)._render();
return self}, function($ctx1) {$ctx1.fill(self,"colResetWith:",{aContent:aContent}, smalltalk.MWMainWidget)})},
args: ["aContent"],
source: "colResetWith: aContent\x0a\x09self colReset.\x0a    self colWidget add: (MWColumnWidget new content: aContent).\x0a    self render",
messageSends: ["colReset", "add:", "content:", "new", "colWidget", "render"],
referencedClasses: ["MWColumnWidget"]
}),
smalltalk.MWMainWidget);

smalltalk.addMethod(
"_colWidget",
smalltalk.method({
selector: "colWidget",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$2=self["@colWidget"];
if(($receiver = $2) == nil || $receiver == undefined){
$1=_st(self)._colReset();
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"colWidget",{}, smalltalk.MWMainWidget)})},
args: [],
source: "colWidget\x0a\x09^ colWidget ifNil: [ self colReset ]",
messageSends: ["ifNil:", "colReset"],
referencedClasses: []
}),
smalltalk.MWMainWidget);

smalltalk.addMethod(
"_cssClass",
smalltalk.method({
selector: "cssClass",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
}, function($ctx1) {$ctx1.fill(self,"cssClass",{}, smalltalk.MWMainWidget)})},
args: [],
source: "cssClass\x0a\x09^'row-fluid'",
messageSends: [],
referencedClasses: []
}),
smalltalk.MWMainWidget);

smalltalk.addMethod(
"_cssId",
smalltalk.method({
selector: "cssId",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
}, function($ctx1) {$ctx1.fill(self,"cssId",{}, smalltalk.MWMainWidget)})},
args: [],
source: "cssId\x0a\x09^ '#main'",
messageSends: [],
referencedClasses: []
}),
smalltalk.MWMainWidget);

smalltalk.addMethod(
"_delCol_",
smalltalk.method({
selector: "delCol:",
category: 'accessing',
fn: function (num){
var self=this;
var i;
return smalltalk.withContext(function($ctx1) { 
i=(1);
_st(_st(self)._colWidget())._do_((function(col){
return smalltalk.withContext(function($ctx2) {
i=_st(i).__plus((1));
return i;
}, function($ctx2) {$ctx2.fillBlock({col:col},$ctx1)})}));
_st(self)._render();
return self}, function($ctx1) {$ctx1.fill(self,"delCol:",{num:num,i:i}, smalltalk.MWMainWidget)})},
args: ["num"],
source: "delCol: num\x0a\x09| i |\x0a    self colWidget removeFrom: num to:  self colWidget size - num + 2.\x0a    i:= 1.\x0a    self colWidget do: [ :col | col number: i. i := i +1. ].\x0a    self render",
messageSends: ["removeFrom:to:", "+", "-", "size", "colWidget", "do:", "number:", "render"],
referencedClasses: []
}),
smalltalk.MWMainWidget);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'initializing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st((smalltalk.MWAnnouncer || MWAnnouncer))._current())._on_do_((smalltalk.MWSuccess || MWSuccess),(function(announcement){
return smalltalk.withContext(function($ctx2) {
}, function($ctx2) {$ctx2.fillBlock({announcement:announcement},$ctx1)})}));
_st(_st((smalltalk.MWAnnouncer || MWAnnouncer))._current())._on_do_((smalltalk.MWAddColumn || MWAddColumn),(function(announcement){
return smalltalk.withContext(function($ctx2) {
}, function($ctx2) {$ctx2.fillBlock({announcement:announcement},$ctx1)})}));
_st(_st((smalltalk.MWAnnouncer || MWAnnouncer))._current())._on_do_((smalltalk.MWResetColumn || MWResetColumn),(function(announcement){
return smalltalk.withContext(function($ctx2) {
}, function($ctx2) {$ctx2.fillBlock({announcement:announcement},$ctx1)})}));
_st(_st((smalltalk.MWAnnouncer || MWAnnouncer))._current())._on_do_((smalltalk.MWDelColumn || MWDelColumn),(function(announcement){
return smalltalk.withContext(function($ctx2) {
}, function($ctx2) {$ctx2.fillBlock({announcement:announcement},$ctx1)})}));
_st(self)._render();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{}, smalltalk.MWMainWidget)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a \x09MWAnnouncer current on: MWSuccess do: [ :announcement | self render ].\x0a    MWAnnouncer current on: MWAddColumn do: [ :announcement | \x0a        self colManage: announcement.\x0a\x09].\x0a    MWAnnouncer current on: MWResetColumn do: [ :announcement | \x0a    \x09self colResetWith: announcement content\x0a\x09].\x0a    MWAnnouncer current on: MWDelColumn do: [ :announcement | \x0a    \x09self delCol: announcement colId\x0a\x09].\x0a\x09self render",
messageSends: ["initialize", "on:do:", "render", "current", "colManage:", "colResetWith:", "content", "delCol:", "colId"],
referencedClasses: ["MWSuccess", "MWAnnouncer", "MWAddColumn", "MWResetColumn", "MWDelColumn"]
}),
smalltalk.MWMainWidget);

smalltalk.addMethod(
"_render",
smalltalk.method({
selector: "render",
category: 'rendering',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._appendToJQuery_(_st(_st(self)._cssId())._asJQuery());
return self}, function($ctx1) {$ctx1.fill(self,"render",{}, smalltalk.MWMainWidget)})},
args: [],
source: "render\x0a\x09(self cssId asJQuery) empty.\x0a\x09self appendToJQuery: (self cssId) asJQuery",
messageSends: ["empty", "asJQuery", "cssId", "appendToJQuery:"],
referencedClasses: []
}),
smalltalk.MWMainWidget);

smalltalk.addMethod(
"_renderOn_",
smalltalk.method({
selector: "renderOn:",
category: 'rendering',
fn: function (html){
var self=this;
var div,size;
return smalltalk.withContext(function($ctx1) { 
div=_st(_st(html)._div())._class_(_st(self)._cssClass());
size=_st(_st(self)._colWidget())._size();
$1=_st(size).__lt((4));
if(smalltalk.assert($1)){
_st(_st(self)._colWidget())._do_((function(c){
return smalltalk.withContext(function($ctx2) {
}, function($ctx2) {$ctx2.fillBlock({c:c},$ctx1)})}));
} else {
_st(_st(_st(size).__minus((2)))._to_(size))._do_((function(i){
return smalltalk.withContext(function($ctx2) {
}, function($ctx2) {$ctx2.fillBlock({i:i},$ctx1)})}));
};
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html,div:div,size:size}, smalltalk.MWMainWidget)})},
args: ["html"],
source: "renderOn: html\x0a\x09| div size |\x0a\x09div := html div \x0a    \x09class: self cssClass.\x0a    size := self colWidget size.\x0a    size < 4  ifTrue: [ self colWidget do: [ :c | div with: c ]  ]\x0a  \x09\x09ifFalse: [ ((size-2) to: (size)) do: [ :i | div with:  (self colWidget at:i) ] ].\x0a\x0a",
messageSends: ["class:", "cssClass", "div", "size", "colWidget", "ifTrue:ifFalse:", "do:", "with:", "at:", "to:", "-", "<"],
referencedClasses: []
}),
smalltalk.MWMainWidget);

smalltalk.addMethod(
"_showActions_",
smalltalk.method({
selector: "showActions:",
category: 'show',
fn: function (mooseEntity){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$1=_st((smalltalk.MWActionList || MWActionList))._new();
_st($1)._mooseEntity_(mooseEntity);
_st($1)._getActions();
$2=_st($1)._yourself();
_st(self)._addCol_($2);
return self}, function($ctx1) {$ctx1.fill(self,"showActions:",{mooseEntity:mooseEntity}, smalltalk.MWMainWidget)})},
args: ["mooseEntity"],
source: "showActions: mooseEntity\x0a\x09self addCol: (MWActionList new mooseEntity: mooseEntity; getActions; yourself).",
messageSends: ["addCol:", "mooseEntity:", "new", "getActions", "yourself"],
referencedClasses: ["MWActionList"]
}),
smalltalk.MWMainWidget);


smalltalk.MWMainWidget.klass.iVarNames = ['colWidget'];

smalltalk.addClass('MWMenuWidget', smalltalk.Widget, ['content'], 'MooseOnWeb');
smalltalk.addMethod(
"_buttonTitle",
smalltalk.method({
selector: "buttonTitle",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
}, function($ctx1) {$ctx1.fill(self,"buttonTitle",{}, smalltalk.MWMenuWidget)})},
args: [],
source: "buttonTitle\x0a\x09^'Models'",
messageSends: [],
referencedClasses: []
}),
smalltalk.MWMenuWidget);

smalltalk.addMethod(
"_cssId",
smalltalk.method({
selector: "cssId",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
}, function($ctx1) {$ctx1.fill(self,"cssId",{}, smalltalk.MWMenuWidget)})},
args: [],
source: "cssId \x0a\x09^'#models-menu'",
messageSends: [],
referencedClasses: []
}),
smalltalk.MWMenuWidget);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._render();
_st((smalltalk.MWModelRoot || MWModelRoot))._new();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{}, smalltalk.MWMenuWidget)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09self render.\x0a    MWModelRoot new.",
messageSends: ["initialize", "render", "new"],
referencedClasses: ["MWModelRoot"]
}),
smalltalk.MWMenuWidget);

smalltalk.addMethod(
"_render",
smalltalk.method({
selector: "render",
category: 'rendering',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._appendToJQuery_(_st(_st(self)._cssId())._asJQuery());
return self}, function($ctx1) {$ctx1.fill(self,"render",{}, smalltalk.MWMenuWidget)})},
args: [],
source: "render\x0a\x09(self cssId asJQuery) empty.\x0a\x09self appendToJQuery: self cssId asJQuery",
messageSends: ["empty", "asJQuery", "cssId", "appendToJQuery:"],
referencedClasses: []
}),
smalltalk.MWMenuWidget);

smalltalk.addMethod(
"_renderOn_",
smalltalk.method({
selector: "renderOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$1=_st(html)._a();
_st($1)._href_("#");
_st($1)._class_("dropdown-toggle");
_st($1)._at_put_("data-toggle","dropdown");
_st($1)._with_(_st(self)._buttonTitle());
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$3=_st(html)._ul();
_st($3)._class_("dropdown-menu");
$4=_st($3)._id_("models-list");
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html}, smalltalk.MWMenuWidget)})},
args: ["html"],
source: "renderOn: html\x0a\x09html a\x0a    \x09href: '#';\x0a    \x09class: 'dropdown-toggle';\x0a        at: 'data-toggle' put: 'dropdown';\x0a        with: self buttonTitle; \x0a        with: [ \x0a        \x09 (html tag: 'b') class: 'caret'\x0a\x09\x09\x09].\x0a     html ul \x0a     \x09class: 'dropdown-menu';\x0a       \x09id: 'models-list'",
messageSends: ["href:", "a", "class:", "at:put:", "with:", "buttonTitle", "tag:", "ul", "id:"],
referencedClasses: []
}),
smalltalk.MWMenuWidget);



smalltalk.addClass('MWModelRoot', smalltalk.Widget, ['models', 'ul'], 'MooseOnWeb');
smalltalk.addMethod(
"_click_",
smalltalk.method({
selector: "click:",
category: 'render',
fn: function (entity){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$1=_st((smalltalk.MWActionList || MWActionList))._new();
_st($1)._mooseEntity_(entity);
_st($1)._getActions();
$2=_st($1)._yourself();
_st(_st((smalltalk.MWAnnouncer || MWAnnouncer))._current())._announce_(_st(_st((smalltalk.MWResetColumn || MWResetColumn))._new())._content_($2));
return self}, function($ctx1) {$ctx1.fill(self,"click:",{entity:entity}, smalltalk.MWModelRoot)})},
args: ["entity"],
source: "click: entity\x0a\x09MWAnnouncer current announce: \x0a    \x09(MWResetColumn new content: (\x0a                MWActionList new \x0a            \x09mooseEntity: entity; \x0a                getActions; \x0a              \x09yourself\x0a      \x09\x09\x09)\x0a         )",
messageSends: ["announce:", "content:", "mooseEntity:", "new", "getActions", "yourself", "current"],
referencedClasses: ["MWActionList", "MWResetColumn", "MWAnnouncer"]
}),
smalltalk.MWModelRoot);

smalltalk.addMethod(
"_cssId",
smalltalk.method({
selector: "cssId",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
}, function($ctx1) {$ctx1.fill(self,"cssId",{}, smalltalk.MWModelRoot)})},
args: [],
source: "cssId \x0a\x09^'#models-list'",
messageSends: [],
referencedClasses: []
}),
smalltalk.MWModelRoot);

smalltalk.addMethod(
"_getModels",
smalltalk.method({
selector: "getModels",
category: 'query',
fn: function (){
var self=this;
var result;
return smalltalk.withContext(function($ctx1) { 
return smalltalk.withContext(function($ctx2) {
}, function($ctx2) {$ctx2.fillBlock({tmp:tmp},$ctx1)})})),_st("error").__minus_gt((function(a,b,c){
return smalltalk.withContext(function($ctx2) {
return _st((smalltalk.Transcript || Transcript))._show_(_st(_st(_st(_st(_st("error1").__comma(a)).__comma("2")).__comma(b)).__comma("3")).__comma(c));
}, function($ctx2) {$ctx2.fillBlock({a:a,b:b,c:c},$ctx1)})})),_st("dataType").__minus_gt("json")]));
return self}, function($ctx1) {$ctx1.fill(self,"getModels",{result:result}, smalltalk.MWModelRoot)})},
args: [],
source: "getModels\x0a\x09| result |\x0a\x09result := jQuery \x0a\x09\x09ajax: MWEntryPoint restApiLocation, MWEntryPoint urlModels\x0a\x09\x09options: #{\x0a\x09\x09\x09'type' -> 'GET'.\x0a            'success' ->  [ :tmp | self success: tmp].\x0a\x09\x09\x09'error' -> [:a :b : c |window alert:'error in getting models list'.Transcript  show: 'error1',a, '2',b,'3',c].\x0a\x09\x09\x09'dataType' -> 'json'\x0a\x09\x09}.",
messageSends: ["ajax:options:", ",", "urlModels", "restApiLocation", "->", "success:", "alert:", "show:"],
referencedClasses: ["MWEntryPoint", "Transcript"]
}),
smalltalk.MWModelRoot);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@models"]=_st((smalltalk.Array || Array))._new();
_st(self)._getModels();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{}, smalltalk.MWModelRoot)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09models := Array new.\x0a\x09self getModels\x0a    ",
messageSends: ["initialize", "new", "getModels"],
referencedClasses: ["Array"]
}),
smalltalk.MWModelRoot);

smalltalk.addMethod(
"_render",
smalltalk.method({
selector: "render",
category: 'render',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._appendToJQuery_(_st(_st(self)._cssId())._asJQuery());
return self}, function($ctx1) {$ctx1.fill(self,"render",{}, smalltalk.MWModelRoot)})},
args: [],
source: "render\x0a\x09(self cssId asJQuery) empty.\x0a\x09self appendToJQuery: (self cssId) asJQuery",
messageSends: ["empty", "asJQuery", "cssId", "appendToJQuery:"],
referencedClasses: []
}),
smalltalk.MWModelRoot);

smalltalk.addMethod(
"_renderOn_",
smalltalk.method({
selector: "renderOn:",
category: 'render',
fn: function (menu){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@models"])._do_((function(e){
return smalltalk.withContext(function($ctx2) {
_st($1)._href_("#");
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx3) {
_st($3)._onClick_((function(){
return smalltalk.withContext(function($ctx4) {
}, function($ctx4) {$ctx4.fillBlock({},$ctx1)})}));
$4=_st($3)._with_(_st(e)._name());
return $4;
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
return $2;
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{menu:menu}, smalltalk.MWModelRoot)})},
args: ["menu"],
source: " renderOn: menu\x0a   \x09models do: [ :e |\x0a    \x09menu li\x0a        \x09href: '#'; \x0a        \x09with: [\x0a        \x09\x09menu a \x0a            \x09\x09onClick: [ self click: e ]; \x0a            \x09\x09with: e name.  \x0a    \x09\x09]\x0a\x09]\x0a        \x0a",
messageSends: ["do:", "href:", "li", "with:", "onClick:", "click:", "a", "name"],
referencedClasses: []
}),
smalltalk.MWModelRoot);

smalltalk.addMethod(
"_success_",
smalltalk.method({
selector: "success:",
category: 'query',
fn: function (data){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(data)._entities())._do_((function(e){
return smalltalk.withContext(function($ctx2) {
_st($1)._name_(_st(e)._name());
_st($1)._id_(_st(e)._id());
_st($1)._type_(_st(e)._type());
$2=_st($1)._yourself();
return _st(self["@models"])._add_($2);
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1)})}));
_st(self)._render();
return self}, function($ctx1) {$ctx1.fill(self,"success:",{data:data}, smalltalk.MWModelRoot)})},
args: ["data"],
source: "success: data\x0a\x09data entities do: [:e |  \x0a    \x09models add: (\x0a        \x09MWMooseEntity new \x0a            \x09name: e name; \x0a                id: e id;\x0a                type: e type;\x0a                yourself\x0a             )\x0a\x09].\x0a\x09self render.\x0a",
messageSends: ["do:", "add:", "name:", "name", "new", "id:", "id", "type:", "type", "yourself", "entities", "render"],
referencedClasses: ["MWMooseEntity"]
}),
smalltalk.MWModelRoot);



smalltalk.addClass('MWMooseEntity', smalltalk.Widget, ['id', 'name', 'type', 'properties', 'isFetched', 'div'], 'MooseOnWeb');
smalltalk.addMethod(
"_clickFrom_",
smalltalk.method({
selector: "clickFrom:",
category: 'rendering',
fn: function (colId){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$1=_st((smalltalk.MWAddColumn || MWAddColumn))._new();
_st($1)._content_(self);
$2=_st($1)._colId_(colId);
_st(_st((smalltalk.MWAnnouncer || MWAnnouncer))._current())._announce_($2);
_st(self)._getProperties();
return self}, function($ctx1) {$ctx1.fill(self,"clickFrom:",{colId:colId}, smalltalk.MWMooseEntity)})},
args: ["colId"],
source: "clickFrom: colId\x0a  \x09MWAnnouncer current announce: (\x0a    \x09MWAddColumn new \x0a        \x09content: self;\x0a            colId: colId\x0a    ).\x0a\x09self getProperties.",
messageSends: ["announce:", "content:", "new", "colId:", "current", "getProperties"],
referencedClasses: ["MWAddColumn", "MWAnnouncer"]
}),
smalltalk.MWMooseEntity);

smalltalk.addMethod(
"_getProperties",
smalltalk.method({
selector: "getProperties",
category: 'query',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return smalltalk.withContext(function($ctx2) {
}, function($ctx2) {$ctx2.fillBlock({tmp:tmp},$ctx1)})})),_st("error").__minus_gt((function(a,b,c){
return smalltalk.withContext(function($ctx2) {
return _st((smalltalk.Transcript || Transcript))._show_(_st(_st(_st(_st(_st("error1").__comma(a)).__comma("2")).__comma(b)).__comma("3")).__comma(c));
}, function($ctx2) {$ctx2.fillBlock({a:a,b:b,c:c},$ctx1)})})),_st("dataType").__minus_gt("json")]));
return self}, function($ctx1) {$ctx1.fill(self,"getProperties",{}, smalltalk.MWMooseEntity)})},
args: [],
source: "getProperties\x0a\x09jQuery \x0a\x09\x09ajax: MWEntryPoint restApiLocation, MWEntryPoint urlEntities, '/', self id\x0a\x09\x09options: #{\x0a\x09\x09\x09'type' -> 'GET'.\x0a            'success' ->  [ :tmp | self success: tmp].\x0a\x09\x09\x09'error' -> [:a :b : c |window alert:'error in getting models list'.Transcript  show: 'error1',a, '2',b,'3',c].\x0a\x09\x09\x09'dataType' -> 'json'\x0a\x09\x09}.",
messageSends: ["ajax:options:", ",", "id", "urlEntities", "restApiLocation", "->", "success:", "alert:", "show:"],
referencedClasses: ["MWEntryPoint", "Transcript"]
}),
smalltalk.MWMooseEntity);

smalltalk.addMethod(
"_id",
smalltalk.method({
selector: "id",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$1=self["@id"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"id",{}, smalltalk.MWMooseEntity)})},
args: [],
source: "id\x0a\x09^id",
messageSends: [],
referencedClasses: []
}),
smalltalk.MWMooseEntity);

smalltalk.addMethod(
"_id_",
smalltalk.method({
selector: "id:",
category: 'accessing',
fn: function (anId){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"id:",{anId:anId}, smalltalk.MWMooseEntity)})},
args: ["anId"],
source: "id: anId\x0a\x09id:=anId",
messageSends: [],
referencedClasses: []
}),
smalltalk.MWMooseEntity);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@isFetched"]=false;
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{}, smalltalk.MWMooseEntity)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09isFetched := false.",
messageSends: ["initialize"],
referencedClasses: []
}),
smalltalk.MWMooseEntity);

smalltalk.addMethod(
"_name",
smalltalk.method({
selector: "name",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$1=self["@name"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"name",{}, smalltalk.MWMooseEntity)})},
args: [],
source: "name\x0a\x09^name",
messageSends: [],
referencedClasses: []
}),
smalltalk.MWMooseEntity);

smalltalk.addMethod(
"_name_",
smalltalk.method({
selector: "name:",
category: 'accessing',
fn: function (anName){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"name:",{anName:anName}, smalltalk.MWMooseEntity)})},
args: ["anName"],
source: "name: anName\x0a\x09name:=anName",
messageSends: [],
referencedClasses: []
}),
smalltalk.MWMooseEntity);

smalltalk.addMethod(
"_properties",
smalltalk.method({
selector: "properties",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$2=self["@properties"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@properties"]=_st((smalltalk.Dictionary || Dictionary))._new();
$1=self["@properties"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"properties",{}, smalltalk.MWMooseEntity)})},
args: [],
source: "properties\x0a\x09^properties ifNil: [ properties := Dictionary new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["Dictionary"]
}),
smalltalk.MWMooseEntity);

smalltalk.addMethod(
"_renderContentOn_",
smalltalk.method({
selector: "renderContentOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._properties())._keysAndValuesDo_((function(key,value){
return smalltalk.withContext(function($ctx2) {
return smalltalk.withContext(function($ctx3) {
if(smalltalk.assert($1)){
$2=_st(li)._a();
_st($2)._style_(_st(_st("color: ").__comma(_st((smalltalk.MWEntryPoint || MWEntryPoint))._colorGroup())).__comma(";\x22"));
_st($2)._href_("#");
_st($2)._onClick_((function(){
return smalltalk.withContext(function($ctx4) {
}, function($ctx4) {$ctx4.fillBlock({},$ctx1)})}));
$3=_st($2)._with_(_st(key).__comma(" : "));
$3;
} else {
$4=_st(li)._span();
_st($4)._style_(_st(_st("color: ").__comma(_st((smalltalk.MWEntryPoint || MWEntryPoint))._colorItems())).__comma(";\x22"));
$5=_st($4)._with_(_st(key).__comma(" : "));
$5;
};
return _st(_st(li)._span())._with_(value);
}, function($ctx3) {$ctx3.fillBlock({li:li},$ctx1)})}));
}, function($ctx2) {$ctx2.fillBlock({key:key,value:value},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderContentOn:",{html:html}, smalltalk.MWMooseEntity)})},
args: ["html"],
source: "renderContentOn: html\x0a\x09self properties keysAndValuesDo: [ :key :value |\x0a    \x09html li \x0a        \x09with:  \x0a            \x09[ :li  |\x0a\x0a                 \x09(value isKindOf: MWMooseGroup) ifTrue: [\x0a                    \x09\x09li a\x0a                     \x09\x09\x09style: 'color: ', MWEntryPoint colorGroup,';\x22';\x0a                                href: '#';\x0a                                onClick: [ value clickFrom: ((div asJQuery parents: 'div') attr: 'row') ];\x0a                     \x09\x09\x09with: key, ' : '.\x0a    \x09\x09\x09\x09\x09] ifFalse: [  \x0a                        \x09li span\x0a            \x09                style: 'color: ', MWEntryPoint colorItems,';\x22';\x0a                     \x09\x09\x09with: key, ' : '.\x0a    \x09\x09\x09\x09\x09].\x0a                   li span with: ( value )\x0a \x09\x09\x09\x09]\x0a    ].\x0a",
messageSends: ["keysAndValuesDo:", "with:", "ifTrue:ifFalse:", "style:", ",", "colorGroup", "a", "href:", "onClick:", "clickFrom:", "attr:", "parents:", "asJQuery", "colorItems", "span", "isKindOf:", "li", "properties"],
referencedClasses: ["MWEntryPoint", "MWMooseGroup"]
}),
smalltalk.MWMooseEntity);

smalltalk.addMethod(
"_renderOn_",
smalltalk.method({
selector: "renderOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$1=self["@isFetched"];
if(smalltalk.assert($1)){
$2=_st(html)._ul();
_st($2)._class_("unstyled");
$3=_st($2)._with_((function(){
return smalltalk.withContext(function($ctx2) {
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
self["@div"]=$3;
self["@div"];
} else {
_st(_st(html)._span())._with_("Loading");
};
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html}, smalltalk.MWMooseEntity)})},
args: ["html"],
source: "renderOn: html\x0a\x0a\x0a       isFetched ifTrue: [     \x0a        \x09\x09div := html ul \x0a         \x09\x09\x09 class: 'unstyled';\x0a          \x09\x09\x09 with: [self renderContentOn: html] ]\x0a                   ifFalse: [ \x0a                 html span \x0a          \x09\x09\x09with: 'Loading'.\x0a                   \x0a               ]    \x0a",
messageSends: ["ifTrue:ifFalse:", "class:", "ul", "with:", "renderContentOn:", "span"],
referencedClasses: []
}),
smalltalk.MWMooseEntity);

smalltalk.addMethod(
"_success_",
smalltalk.method({
selector: "success:",
category: 'query',
fn: function (data){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(data)._keysAndValuesDo_((function(key,value){
return smalltalk.withContext(function($ctx2) {
_st((smalltalk.Transcript || Transcript))._show_(value);
return _st((smalltalk.Transcript || Transcript))._show_(_st(value)._asMooseGroup());
}, function($ctx2) {$ctx2.fillBlock({key:key,value:value},$ctx1)})}));
_st(_st((smalltalk.MWAnnouncer || MWAnnouncer))._current())._announce_(_st((smalltalk.MWSuccess || MWSuccess))._new());
return self}, function($ctx1) {$ctx1.fill(self,"success:",{data:data}, smalltalk.MWMooseEntity)})},
args: ["data"],
source: "success: data\x0a\x09isFetched := true.\x0a\x09data keysAndValuesDo: [ :key :value | \x0a    \x09self properties at: key put: ( value asMooseGroup ).\x0a        Transcript show: value.\x0a        Transcript show: value asMooseGroup.\x0a\x09].\x0a    MWAnnouncer current announce: MWSuccess new.\x0a\x0a",
messageSends: ["keysAndValuesDo:", "at:put:", "asMooseGroup", "properties", "show:", "announce:", "new", "current"],
referencedClasses: ["Transcript", "MWSuccess", "MWAnnouncer"]
}),
smalltalk.MWMooseEntity);

smalltalk.addMethod(
"_title",
smalltalk.method({
selector: "title",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$1=_st(self)._name();
return $1;
}, function($ctx1) {$ctx1.fill(self,"title",{}, smalltalk.MWMooseEntity)})},
args: [],
source: "title\x0a\x09^self name",
messageSends: ["name"],
referencedClasses: []
}),
smalltalk.MWMooseEntity);

smalltalk.addMethod(
"_type",
smalltalk.method({
selector: "type",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$1=self["@type"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"type",{}, smalltalk.MWMooseEntity)})},
args: [],
source: "type\x0a\x09^type",
messageSends: [],
referencedClasses: []
}),
smalltalk.MWMooseEntity);

smalltalk.addMethod(
"_type_",
smalltalk.method({
selector: "type:",
category: 'accessing',
fn: function (anType){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"type:",{anType:anType}, smalltalk.MWMooseEntity)})},
args: ["anType"],
source: "type: anType\x0a\x09type :=anType",
messageSends: [],
referencedClasses: []
}),
smalltalk.MWMooseEntity);



smalltalk.addClass('MWMooseGroup', smalltalk.Widget, ['id', 'name', 'type', 'entities', 'ul'], 'MooseOnWeb');
smalltalk.addMethod(
"_addAll_",
smalltalk.method({
selector: "addAll:",
category: 'accessing',
fn: function (anObjectCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(anObjectCollection)._do_((function(e){
return smalltalk.withContext(function($ctx2) {
_st($1)._id_(_st(e)._id());
_st($1)._type_(_st(e)._type());
$2=_st($1)._name_(_st(e)._name());
return _st(_st(self)._entities())._add_($2);
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"addAll:",{anObjectCollection:anObjectCollection}, smalltalk.MWMooseGroup)})},
args: ["anObjectCollection"],
source: "addAll: anObjectCollection\x0a\x09\x22anObjectCollection contains MWMooseEntity under JSON format\x22\x0a    anObjectCollection do: [ :e | \x0a    \x09self entities add: (MWMooseEntity new id: e id; type: e type; name: e name).\x0a    ]",
messageSends: ["do:", "add:", "id:", "id", "new", "type:", "type", "name:", "name", "entities"],
referencedClasses: ["MWMooseEntity"]
}),
smalltalk.MWMooseGroup);

smalltalk.addMethod(
"_clickFrom_",
smalltalk.method({
selector: "clickFrom:",
category: 'accessing',
fn: function (colId){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$1=_st((smalltalk.MWAddColumn || MWAddColumn))._new();
_st($1)._content_(self);
$2=_st($1)._colId_(colId);
_st(_st((smalltalk.MWAnnouncer || MWAnnouncer))._current())._announce_($2);
return self}, function($ctx1) {$ctx1.fill(self,"clickFrom:",{colId:colId}, smalltalk.MWMooseGroup)})},
args: ["colId"],
source: "clickFrom: colId\x0a  \x09MWAnnouncer current announce: (\x0a    \x09MWAddColumn new \x0a        \x09content: self;\x0a            colId: colId\x0a    ).\x0a\x09",
messageSends: ["announce:", "content:", "new", "colId:", "current"],
referencedClasses: ["MWAddColumn", "MWAnnouncer"]
}),
smalltalk.MWMooseGroup);

smalltalk.addMethod(
"_entities",
smalltalk.method({
selector: "entities",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$2=self["@entities"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@entities"]=_st((smalltalk.Array || Array))._new();
$1=self["@entities"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"entities",{}, smalltalk.MWMooseGroup)})},
args: [],
source: "entities\x0a\x09^entities ifNil: [ entities := Array new. ]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["Array"]
}),
smalltalk.MWMooseGroup);

smalltalk.addMethod(
"_id",
smalltalk.method({
selector: "id",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$1=self["@id"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"id",{}, smalltalk.MWMooseGroup)})},
args: [],
source: "id\x0a\x09^id",
messageSends: [],
referencedClasses: []
}),
smalltalk.MWMooseGroup);

smalltalk.addMethod(
"_id_",
smalltalk.method({
selector: "id:",
category: 'accessing',
fn: function (anId){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"id:",{anId:anId}, smalltalk.MWMooseGroup)})},
args: ["anId"],
source: "id: anId\x0a\x09id:=anId",
messageSends: [],
referencedClasses: []
}),
smalltalk.MWMooseGroup);

smalltalk.addMethod(
"_name",
smalltalk.method({
selector: "name",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$1=self["@name"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"name",{}, smalltalk.MWMooseGroup)})},
args: [],
source: "name\x0a\x09^name",
messageSends: [],
referencedClasses: []
}),
smalltalk.MWMooseGroup);

smalltalk.addMethod(
"_name_",
smalltalk.method({
selector: "name:",
category: 'accessing',
fn: function (anName){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"name:",{anName:anName}, smalltalk.MWMooseGroup)})},
args: ["anName"],
source: "name: anName\x0a\x09name:=anName",
messageSends: [],
referencedClasses: []
}),
smalltalk.MWMooseGroup);

smalltalk.addMethod(
"_renderContentOn_",
smalltalk.method({
selector: "renderContentOn:",
category: 'accessing',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._entities())._do_((function(e){
return smalltalk.withContext(function($ctx2) {
_st($1)._href_("#");
_st($1)._onClick_((function(){
return smalltalk.withContext(function($ctx3) {
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
$2=_st($1)._with_(_st(e)._name());
return _st(_st(html)._li())._with_($2);
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderContentOn:",{html:html}, smalltalk.MWMooseGroup)})},
args: ["html"],
source: "renderContentOn: html\x0a    self entities do: [ :e |\x0a      html li \x0a    \x09  with:\x0a    \x09\x09  (html a\x0a   \x09\x09\x09\x09   href: '#';\x0a   \x09\x09\x09\x09   onClick: [ e clickFrom:  ((ul asJQuery parents: 'div') attr: 'row') ]; \x0a   \x09\x09\x09\x09   with: e name\x0a     \x09\x09\x09 )\x0a    ]\x0a\x09\x0a\x09",
messageSends: ["do:", "with:", "href:", "a", "onClick:", "clickFrom:", "attr:", "parents:", "asJQuery", "name", "li", "entities"],
referencedClasses: []
}),
smalltalk.MWMooseGroup);

smalltalk.addMethod(
"_renderOn_",
smalltalk.method({
selector: "renderOn:",
category: 'accessing',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$1=_st(html)._pre();
_st($1)._class_("pre-scrollable");
$3=_st(html)._ul();
_st($3)._class_("unstyled");
$4=_st($3)._with_((function(){
return smalltalk.withContext(function($ctx2) {
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$2=_st($1)._with_($4);
self["@ul"]=$2;
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html}, smalltalk.MWMooseGroup)})},
args: ["html"],
source: "renderOn: html\x0a\x09ul := \x0a        html pre\x0a           class: 'pre-scrollable';\x0a           with: (\x0a    \x09\x09\x09html ul\x0a    \x09\x09\x09class: 'unstyled';\x0a        \x09\x09with: [self renderContentOn: html]\x0a              )\x0a        \x0a\x09\x0a\x09",
messageSends: ["class:", "pre", "with:", "ul", "renderContentOn:"],
referencedClasses: []
}),
smalltalk.MWMooseGroup);

smalltalk.addMethod(
"_title",
smalltalk.method({
selector: "title",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$1=_st(self)._name();
return $1;
}, function($ctx1) {$ctx1.fill(self,"title",{}, smalltalk.MWMooseGroup)})},
args: [],
source: "title\x0a\x09^self name",
messageSends: ["name"],
referencedClasses: []
}),
smalltalk.MWMooseGroup);

smalltalk.addMethod(
"_type",
smalltalk.method({
selector: "type",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$1=self["@type"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"type",{}, smalltalk.MWMooseGroup)})},
args: [],
source: "type\x0a\x09^type",
messageSends: [],
referencedClasses: []
}),
smalltalk.MWMooseGroup);

smalltalk.addMethod(
"_type_",
smalltalk.method({
selector: "type:",
category: 'accessing',
fn: function (anType){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"type:",{anType:anType}, smalltalk.MWMooseGroup)})},
args: ["anType"],
source: "type: anType\x0a\x09type :=anType",
messageSends: [],
referencedClasses: []
}),
smalltalk.MWMooseGroup);



smalltalk.addClass('MWResultWidget', smalltalk.Widget, ['sourceEntity', 'action', 'result', 'isFetched'], 'MooseOnWeb');
smalltalk.addMethod(
"_action",
smalltalk.method({
selector: "action",
category: 'accessors',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$1=self["@action"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"action",{}, smalltalk.MWResultWidget)})},
args: [],
source: "action\x0a\x09^action",
messageSends: [],
referencedClasses: []
}),
smalltalk.MWResultWidget);

smalltalk.addMethod(
"_action_",
smalltalk.method({
selector: "action:",
category: 'accessors',
fn: function (anAction){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"action:",{anAction:anAction}, smalltalk.MWResultWidget)})},
args: ["anAction"],
source: "action: anAction\x0a\x09action := anAction",
messageSends: [],
referencedClasses: []
}),
smalltalk.MWResultWidget);

smalltalk.addMethod(
"_getResult",
smalltalk.method({
selector: "getResult",
category: 'query',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return smalltalk.withContext(function($ctx2) {
}, function($ctx2) {$ctx2.fillBlock({tmp:tmp},$ctx1)})})),_st("error").__minus_gt((function(a,b,c){
return smalltalk.withContext(function($ctx2) {
return _st((smalltalk.Transcript || Transcript))._show_(_st(_st(_st(_st(_st("error1").__comma(a)).__comma("2")).__comma(b)).__comma("3")).__comma(c));
}, function($ctx2) {$ctx2.fillBlock({a:a,b:b,c:c},$ctx1)})})),_st("dataType").__minus_gt("json")]));
return self}, function($ctx1) {$ctx1.fill(self,"getResult",{}, smalltalk.MWResultWidget)})},
args: [],
source: "getResult\x0a\x09jQuery \x0a\x09\x09ajax: MWEntryPoint restApiLocation, MWEntryPoint urlEntities,'/',self sourceEntity id, '?action=',self action\x0a\x09\x09options: #{\x0a\x09\x09\x09'type' -> 'GET'.\x0a            'success' ->  [ :tmp | self success: tmp].\x0a\x09\x09\x09'error' -> [:a :b : c |window alert:'error in getting actions result'.Transcript  show: 'error1',a, '2',b,'3',c].\x0a\x09\x09\x09'dataType' -> 'json'\x0a\x09\x09}.",
messageSends: ["ajax:options:", ",", "action", "id", "sourceEntity", "urlEntities", "restApiLocation", "->", "success:", "alert:", "show:"],
referencedClasses: ["MWEntryPoint", "Transcript"]
}),
smalltalk.MWResultWidget);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'query',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@isFetched"]=false;
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{}, smalltalk.MWResultWidget)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09isFetched := false.",
messageSends: ["initialize"],
referencedClasses: []
}),
smalltalk.MWResultWidget);

smalltalk.addMethod(
"_renderOn_",
smalltalk.method({
selector: "renderOn:",
category: 'render',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$1=self["@isFetched"];
if(smalltalk.assert($1)){
_st(html)._with_(self["@result"]);
} else {
_st(_st(html)._div())._with_("Loading");
};
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html}, smalltalk.MWResultWidget)})},
args: ["html"],
source: "renderOn: html\x0a    isFetched ifFalse: [ \x0a    \x09html div with: 'Loading'.\x0a\x09] ifTrue: [ \x0a    \x09html with: result\x0a\x09]    \x0a\x09\x0a\x09\x09",
messageSends: ["ifFalse:ifTrue:", "with:", "div"],
referencedClasses: []
}),
smalltalk.MWResultWidget);

smalltalk.addMethod(
"_sourceEntity",
smalltalk.method({
selector: "sourceEntity",
category: 'accessors',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$1=self["@sourceEntity"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"sourceEntity",{}, smalltalk.MWResultWidget)})},
args: [],
source: "sourceEntity\x0a\x09^sourceEntity",
messageSends: [],
referencedClasses: []
}),
smalltalk.MWResultWidget);

smalltalk.addMethod(
"_sourceEntity_",
smalltalk.method({
selector: "sourceEntity:",
category: 'accessors',
fn: function (anEntity){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"sourceEntity:",{anEntity:anEntity}, smalltalk.MWResultWidget)})},
args: ["anEntity"],
source: "sourceEntity: anEntity\x0a\x09sourceEntity := anEntity",
messageSends: [],
referencedClasses: []
}),
smalltalk.MWResultWidget);

smalltalk.addMethod(
"_success_",
smalltalk.method({
selector: "success:",
category: 'query',
fn: function (data){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@isFetched"]=true;
_st((function(){
return smalltalk.withContext(function($ctx2) {
_st($1)._addAll_(_st(data)._entities());
$2=_st($1)._yourself();
self["@result"]=$2;
return self["@result"];
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._on_do_((smalltalk.MessageNotUnderstood || MessageNotUnderstood),(function(){
return smalltalk.withContext(function($ctx2) {
self["@result"];
return _st(window)._alert_("not entities");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st(_st((smalltalk.MWAnnouncer || MWAnnouncer))._current())._announce_(_st((smalltalk.MWSuccess || MWSuccess))._new());
return self}, function($ctx1) {$ctx1.fill(self,"success:",{data:data}, smalltalk.MWResultWidget)})},
args: ["data"],
source: "success: data\x0a\x09isFetched := true.\x0a\x09[ result:=(MWMooseGroup new addAll: (data entities); yourself). ] on: MessageNotUnderstood do:\x0a    \x09[ \x0a      \x09  result :=  data.\x0a          window alert: 'not entities'.\x0a\x09\x09].\x0a  \x09MWAnnouncer current announce: MWSuccess new.",
messageSends: ["on:do:", "alert:", "addAll:", "entities", "new", "yourself", "announce:", "current"],
referencedClasses: ["MessageNotUnderstood", "MWMooseGroup", "MWSuccess", "MWAnnouncer"]
}),
smalltalk.MWResultWidget);

smalltalk.addMethod(
"_title",
smalltalk.method({
selector: "title",
category: 'accessors',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$1=_st(self)._action();
return $1;
}, function($ctx1) {$ctx1.fill(self,"title",{}, smalltalk.MWResultWidget)})},
args: [],
source: "title\x0a\x09^self action",
messageSends: ["action"],
referencedClasses: []
}),
smalltalk.MWResultWidget);



smalltalk.addMethod(
"_asMooseGroup",
smalltalk.method({
selector: "asMooseGroup",
category: '*MooseOnWeb',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$1=_st(self)._asMooseObject();
return $1;
}, function($ctx1) {$ctx1.fill(self,"asMooseGroup",{}, smalltalk.Object)})},
args: [],
source: "asMooseGroup\x0a\x09^self asMooseObject",
messageSends: ["asMooseObject"],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
"_asMooseObject",
smalltalk.method({
selector: "asMooseObject",
category: '*MooseOnWeb',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$1=self;
return $1;
}, function($ctx1) {$ctx1.fill(self,"asMooseObject",{}, smalltalk.Object)})},
args: [],
source: "asMooseObject\x0a\x09^self ",
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
"_asMooseObject",
smalltalk.method({
selector: "asMooseObject",
category: '*MooseOnWeb',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$1=_st(self)._isEmpty();
if(! smalltalk.assert($1)){
$2=_st(_st(self)._first())._isKindOf_((smalltalk.JSObjectProxy || JSObjectProxy));
if(smalltalk.assert($2)){
$3=_st(_st((smalltalk.MWMooseGroup || MWMooseGroup))._new())._addAll_(_st(self)._collect_((function(e){
return smalltalk.withContext(function($ctx2) {
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1)})})));
return $3;
} else {
$4=_st(self)._value();
return $4;
};
};
return nil;
}, function($ctx1) {$ctx1.fill(self,"asMooseObject",{}, smalltalk.Array)})},
args: [],
source: "asMooseObject\x0a\x09self isEmpty ifFalse: [\x0a        (self first isKindOf: JSObjectProxy) ifTrue: [\x0a        \x09^MWMooseGroup new addAll: ( self collect: [ :e | e asMooseObject ])\x0a        ] ifFalse:  [ ^self value ]\x0a\x09].\x0a    ^nil",
messageSends: ["ifFalse:", "ifTrue:ifFalse:", "addAll:", "collect:", "asMooseObject", "new", "value", "isKindOf:", "first", "isEmpty"],
referencedClasses: ["MWMooseGroup", "JSObjectProxy"]
}),
smalltalk.Array);

smalltalk.addMethod(
"_asMooseGroup",
smalltalk.method({
selector: "asMooseGroup",
category: '*MooseOnWeb',
fn: function (){
var self=this;
var group;
return smalltalk.withContext(function($ctx1) { 
group=_st((smalltalk.MWMooseGroup || MWMooseGroup))._new();
_st(_st(group)._entities())._add_(_st(self)._asMooseObject());
$1=group;
return $1;
}, function($ctx1) {$ctx1.fill(self,"asMooseGroup",{group:group}, smalltalk.JSObjectProxy)})},
args: [],
source: "asMooseGroup\x0a\x09| group |\x0a\x09group := MWMooseGroup new.\x0a    group entities add: self asMooseObject.\x0a    ^group",
messageSends: ["new", "add:", "asMooseObject", "entities"],
referencedClasses: ["MWMooseGroup"]
}),
smalltalk.JSObjectProxy);

smalltalk.addMethod(
"_asMooseObject",
smalltalk.method({
selector: "asMooseObject",
category: '*MooseOnWeb',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$2=_st((smalltalk.MWMooseEntity || MWMooseEntity))._new();
_st($2)._id_(_st(self)._id());
_st($2)._type_(_st(self)._type());
$3=_st($2)._name_(_st(self)._name());
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"asMooseObject",{}, smalltalk.JSObjectProxy)})},
args: [],
source: "asMooseObject\x0a\x0a   \x09^MWMooseEntity new\x0a       \x09id: self id;\x0a        type: self type;\x0a        name: self name.",
messageSends: ["id:", "id", "new", "type:", "type", "name:", "name"],
referencedClasses: ["MWMooseEntity"]
}),
smalltalk.JSObjectProxy);
