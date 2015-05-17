

var BaseModel=function(){function i(i){this.controller=i,this.isDirty=!0,this.isNew=!0}return i}();
var __extends=this.__extends||function(t,e){function n(){this.constructor=t}for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o]);n.prototype=e.prototype,t.prototype=new n},RecipeModel=function(t){function e(e,n){t.call(this,e),this.RecipeName=n}return __extends(e,t),e}(BaseModel);
var Service=function(){function t(t){this.getJson=t.getJson,this.postJson=t.postJson,this.putJson=t.putJson,this.deleteJson=t.deleteJson}return t}();