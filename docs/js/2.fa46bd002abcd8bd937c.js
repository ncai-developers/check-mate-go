webpackJsonp([2],{135:function(t,s,i){function e(t){i(210)}var a=i(121)(i(169),i(213),e,null,null);t.exports=a.exports},169:function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={props:{balance:{type:Object,default:function(){return{ha:"ha, ha"}},required:!0}}}},207:function(t,s,i){s=t.exports=i(133)(void 0),s.push([t.i,"",""])},210:function(t,s,i){var e=i(207);"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);i(134)("17dd6f0d",e,!0)},213:function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",[i("div",{staticClass:"layout-padding"},[i("div",{staticClass:"row justify-center"},[i("div",{staticClass:"width1"},[i("img",{staticClass:"responsive",attrs:{src:"http://alchemy.media/wp-content/uploads/2016/01/icon-tax-copy.png"}}),t._v(" "),i("br"),t._v("\n        "+t._s(t.balance.person_name)+"\n        "),i("br"),t._v(" "),i("img",{staticClass:"responsive",attrs:{src:"statics/student.png"}}),t._v(" "),i("br"),t._v("\n        "+t._s("$"+t.balance.credit_student)+"\n        "),i("br"),t._v(" "),i("img",{staticClass:"responsive",attrs:{src:"statics/family.png"}}),t._v(" "),i("br"),t._v("\n        "+t._s("$"+t.balance.credit_family)+"\n      ")])]),t._v(" "),i("div",{staticClass:"row justify-center large-gutter"},[i("div",{staticClass:"width-2of3"},[i("div",{staticClass:"list"},[i("div",{staticClass:"list-label"},[t._v("Transactions")]),t._v(" "),t._l(t.balance.transactions,function(s){return i("div",{staticClass:"item"},[i("div",{staticClass:"item-content"},[t._v("\n              "+t._s(s.credhist_datetime)+"\n              "),i("br"),t._v(" "),i("b",[t._v(t._s("$"+s.credhist_debit)+":")]),t._v(" "+t._s(s.credhist_description)+"\n            ")])])})],2)])])])])},staticRenderFns:[]}}});