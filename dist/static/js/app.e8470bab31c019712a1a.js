webpackJsonp([1],{"1uuo":function(e,a){},KV3f:function(e,a){},NHnr:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=t("7+uW"),i={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{attrs:{id:"navbar"}},[t("ul",[t("h1",[e._v("Child Enrollment")]),e._v(" "),e._l(e.tabs,function(a){return t("router-link",{staticClass:"nav-item",attrs:{to:a.url},nativeOn:{click:function(t){e.handleTabClick(a)}}},[t("li",{class:{selected:a.selected}},[t("span",[e._v(e._s(a.title))])])])})],2)])},staticRenderFns:[]};var r={name:"App",components:{Navbar:t("VU/8")({name:"Navbar",data:function(){return{tabs:[]}},methods:{handleTabClick:function(e){for(var a=0;a<this.tabs.length;a++)this.tabs[a].selected=!1;e.selected=!0}}},i,!1,function(e){t("rheF")},"data-v-7269a0bf",null).exports}},l={render:function(){var e=this.$createElement,a=this._self._c||e;return a("div",{attrs:{id:"app"}},[a("Navbar"),this._v(" "),a("router-view")],1)},staticRenderFns:[]};var o=t("VU/8")(r,l,!1,function(e){t("rV5b")},null,null).exports,s=t("/ocq"),d={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"hello"},[t("h1",[e._v(e._s(e.msg))]),e._v(" "),t("h2",[e._v("Essential Links")]),e._v(" "),e._m(0),e._v(" "),t("h2",[e._v("Ecosystem")]),e._v(" "),e._m(1)])},staticRenderFns:[function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ul",[t("li",[t("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[e._v("\n        Core Docs\n      ")])]),e._v(" "),t("li",[t("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[e._v("\n        Forum\n      ")])]),e._v(" "),t("li",[t("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank"}},[e._v("\n        Community Chat\n      ")])]),e._v(" "),t("li",[t("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[e._v("\n        Twitter\n      ")])]),e._v(" "),t("br"),e._v(" "),t("li",[t("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank"}},[e._v("\n        Docs for This Template\n      ")])])])},function(){var e=this.$createElement,a=this._self._c||e;return a("ul",[a("li",[a("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[this._v("\n        vue-router\n      ")])]),this._v(" "),a("li",[a("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[this._v("\n        vuex\n      ")])]),this._v(" "),a("li",[a("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[this._v("\n        vue-loader\n      ")])]),this._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[this._v("\n        awesome-vue\n      ")])])])}]};t("VU/8")({name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App"}}},d,!1,function(e){t("1uuo")},"data-v-d8ec41bc",null).exports;var c=t("Sazm"),h=t.n(c),u=(t("3VHS"),h.a.initializeApp({apiKey:"AIzaSyBzMR_qy0EWpHkpqyKLN_a44NYrMEXENF4",authDomain:"vuetest-fs.firebaseapp.com",databaseURL:"https://vuetest-fs.firebaseio.com",projectId:"vuetest-fs",storageBucket:"vuetest-fs.appspot.com",messagingSenderId:"783169273398"}).firestore()),m={name:"dashboard",data:function(){return{guardians:[],show:!0}},methods:{},created:function(){var e=this;u.collection("guardians").orderBy("guardian_name").get().then(function(a){a.forEach(function(a){var t={id:a.id,guardian_name:a.data().guardian_name,address:a.data().address,phone:a.data().phone};e.guardians.push(t)})})}},_={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{attrs:{id:"dashboard"}},[t("transition",{attrs:{name:"fade"}},[e.show?t("div",{attrs:{id:"emp-list"}},[t("h3",[e._v("Dashboard")]),e._v(" "),t("div",{staticClass:"collection-item",attrs:{id:"grid-header"}},[t("div",[e._v("ID")]),e._v(" "),t("div",[e._v("Guardian Name")]),e._v(" "),t("div",[e._v("Address")]),e._v(" "),t("div",[e._v("Phone")])]),e._v(" "),t("ul",e._l(e.guardians,function(a){return t("li",{key:a.id},[t("router-link",{staticClass:"view-guardian",attrs:{to:"/view_guardian",to:{name:"view-guardian",params:{phone:a.phone}}}},[t("div",{staticClass:"btn-view collection-item"},[t("div",[e._v(e._s(a.id))]),e._v(" "),t("div",[e._v(e._s(a.guardian_name))]),e._v(" "),t("div",[e._v(e._s(a.address))]),e._v(" "),t("div",[e._v(e._s(a.phone))]),t("br")])])],1)}))]):e._e()]),e._v(" "),t("router-link",{attrs:{to:"/new_guardian",id:"new_guardian"}},[t("div",{staticClass:"btn",attrs:{id:"btn-new"}},[t("span",[e._v("Add Guardian")])])])],1)},staticRenderFns:[]};var v=t("VU/8")(m,_,!1,function(e){t("an+s")},"data-v-3909835d",null).exports,p={name:"guardian_info",data:function(){return{guardian_name:null,address:null,phone:null,phone2:null,email:null,relation:null,work_school:null,work_school_address:null,work_school_phone:null,child:{child_name:null,birthdate:null,address:null,comments:null,emergency_contact:{name:null,relation:null,phone:null,address:null},holidays:{christmas:null,columbus_day:null,easter:null,election_day:null,july_4:null,labor_day:null,memorial_day:null,mlk_day:null,new_years:null,presidents_day:null,thanksgiving:null,veterans_day:null}}}},methods:{saveEmployee:function(){var e=this;u.collection("guardians").add({guardian_name:this.guardian_name,address:this.address,phone:this.phone,phone2:this.phone2,email:this.email,relation:this.relation,work_school:this.work_school,work_school_address:this.work_school_address,work_school_phone:this.work_school_phone,child:{child_name:this.child.child_name,birthdate:this.child.birthdate,address:this.child.address,comments:this.child.comments,emergency_contact:{name:this.child.emergency_contact.name,relation:this.child.emergency_contact.relation,phone:this.child.emergency_contact.phone,address:this.child.emergency_contact.address},holidays:{christmas:this.child.holidays.christmas,columbus_day:this.child.holidays.columbus_day,easter:this.child.holidays.easter,election_day:this.child.holidays.election_day,july_4:this.child.holidays.july_4,labor_day:this.child.holidays.labor_day,memorial_day:this.child.holidays.memorial_day,mlk_day:this.child.holidays.mlk_day,new_years:this.child.holidays.new_years,presidents_day:this.child.holidays.presidents_day,thanksgiving:this.child.holidays.thanksgiving,veterans_day:this.child.holidays.veterans_day}}}).then(alert("Enrollment form was submitted!")).then(function(a){return e.$router.go("http://preciousdayslearningacademy.com")}).catch(function(e){return console.log(e)})}}},y={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{attrs:{id:"new-guardian"}},[t("form",{on:{submit:function(a){return a.preventDefault(),e.saveEmployee(a)}}},[t("div",{attrs:{id:"new-guardian-form"}},[t("div",{staticClass:"col",attrs:{id:"col1"}},[t("h3",[e._v("Guardian Information")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.guardian_name,expression:"guardian_name"}],attrs:{type:"text",placeholder:"Full Name",required:""},domProps:{value:e.guardian_name},on:{input:function(a){a.target.composing||(e.guardian_name=a.target.value)}}}),t("br"),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.address,expression:"address"}],attrs:{type:"text",placeholder:"Full Address",required:""},domProps:{value:e.address},on:{input:function(a){a.target.composing||(e.address=a.target.value)}}}),t("br"),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.phone,expression:"phone"}],attrs:{type:"text",placeholder:"Cell Phone Number",required:""},domProps:{value:e.phone},on:{input:function(a){a.target.composing||(e.phone=a.target.value)}}}),t("br"),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.phone2,expression:"phone2"}],attrs:{type:"text",placeholder:"Home Phone Number"},domProps:{value:e.phone2},on:{input:function(a){a.target.composing||(e.phone2=a.target.value)}}}),t("br"),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"text",placeholder:"Email",required:""},domProps:{value:e.email},on:{input:function(a){a.target.composing||(e.email=a.target.value)}}}),t("br"),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.relation,expression:"relation"}],attrs:{type:"text",placeholder:"Relation to Child",required:""},domProps:{value:e.relation},on:{input:function(a){a.target.composing||(e.relation=a.target.value)}}}),t("br"),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.work_school,expression:"work_school"}],attrs:{type:"text",placeholder:"Employer/School",required:""},domProps:{value:e.work_school},on:{input:function(a){a.target.composing||(e.work_school=a.target.value)}}}),t("br"),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.work_school_address,expression:"work_school_address"}],attrs:{type:"text",placeholder:"Work/School Address",required:""},domProps:{value:e.work_school_address},on:{input:function(a){a.target.composing||(e.work_school_address=a.target.value)}}}),t("br"),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.work_school_phone,expression:"work_school_phone"}],attrs:{type:"text",placeholder:"Work Phone",required:""},domProps:{value:e.work_school_phone},on:{input:function(a){a.target.composing||(e.work_school_phone=a.target.value)}}}),t("br")]),e._v(" "),t("div",{staticClass:"col",attrs:{id:"col2"}},[t("h3",[e._v("Child Information")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.child.child_name,expression:"child.child_name"}],attrs:{type:"text",placeholder:"Full Name",required:""},domProps:{value:e.child.child_name},on:{input:function(a){a.target.composing||e.$set(e.child,"child_name",a.target.value)}}}),t("br"),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.child.birthdate,expression:"child.birthdate"}],attrs:{type:"date",placeholder:"Birthdate",required:""},domProps:{value:e.child.birthdate},on:{input:function(a){a.target.composing||e.$set(e.child,"birthdate",a.target.value)}}}),t("br"),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.child.address,expression:"child.address"}],attrs:{type:"text",placeholder:"Address",required:""},domProps:{value:e.child.address},on:{input:function(a){a.target.composing||e.$set(e.child,"address",a.target.value)}}}),t("br"),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.child.comments,expression:"child.comments"}],attrs:{type:"text",placeholder:"Additional Comments"},domProps:{value:e.child.comments},on:{input:function(a){a.target.composing||e.$set(e.child,"comments",a.target.value)}}}),t("br")]),e._v(" "),t("div",{staticClass:"col",attrs:{id:"col3"}},[t("h3",[e._v("Emergency Contact Information")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.child.emergency_contact.name,expression:"child.emergency_contact.name"}],attrs:{type:"text",placeholder:"Full Name",required:""},domProps:{value:e.child.emergency_contact.name},on:{input:function(a){a.target.composing||e.$set(e.child.emergency_contact,"name",a.target.value)}}}),t("br"),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.child.emergency_contact.relation,expression:"child.emergency_contact.relation"}],attrs:{type:"text",placeholder:"Relation to Child",required:""},domProps:{value:e.child.emergency_contact.relation},on:{input:function(a){a.target.composing||e.$set(e.child.emergency_contact,"relation",a.target.value)}}}),t("br"),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.child.emergency_contact.phone,expression:"child.emergency_contact.phone"}],attrs:{type:"text",placeholder:"Phone Number",required:""},domProps:{value:e.child.emergency_contact.phone},on:{input:function(a){a.target.composing||e.$set(e.child.emergency_contact,"phone",a.target.value)}}}),t("br"),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.child.emergency_contact.address,expression:"child.emergency_contact.address"}],attrs:{type:"text",placeholder:"Address",required:""},domProps:{value:e.child.emergency_contact.address},on:{input:function(a){a.target.composing||e.$set(e.child.emergency_contact,"address",a.target.value)}}}),t("br")]),e._v(" "),t("div",{attrs:{id:"col4"}},[t("h3",[e._v("Holiday Attendance")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.child.holidays.christmas,expression:"child.holidays.christmas"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.child.holidays.christmas)?e._i(e.child.holidays.christmas,null)>-1:e.child.holidays.christmas},on:{change:function(a){var t=e.child.holidays.christmas,n=a.target,i=!!n.checked;if(Array.isArray(t)){var r=e._i(t,null);n.checked?r<0&&e.$set(e.child.holidays,"christmas",t.concat([null])):r>-1&&e.$set(e.child.holidays,"christmas",t.slice(0,r).concat(t.slice(r+1)))}else e.$set(e.child.holidays,"christmas",i)}}}),t("span",[e._v("Christmas")]),t("br"),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.child.holidays.columbus_day,expression:"child.holidays.columbus_day"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.child.holidays.columbus_day)?e._i(e.child.holidays.columbus_day,null)>-1:e.child.holidays.columbus_day},on:{change:function(a){var t=e.child.holidays.columbus_day,n=a.target,i=!!n.checked;if(Array.isArray(t)){var r=e._i(t,null);n.checked?r<0&&e.$set(e.child.holidays,"columbus_day",t.concat([null])):r>-1&&e.$set(e.child.holidays,"columbus_day",t.slice(0,r).concat(t.slice(r+1)))}else e.$set(e.child.holidays,"columbus_day",i)}}}),t("span",[e._v("Columbus Day")]),t("br"),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.child.holidays.easter,expression:"child.holidays.easter"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.child.holidays.easter)?e._i(e.child.holidays.easter,null)>-1:e.child.holidays.easter},on:{change:function(a){var t=e.child.holidays.easter,n=a.target,i=!!n.checked;if(Array.isArray(t)){var r=e._i(t,null);n.checked?r<0&&e.$set(e.child.holidays,"easter",t.concat([null])):r>-1&&e.$set(e.child.holidays,"easter",t.slice(0,r).concat(t.slice(r+1)))}else e.$set(e.child.holidays,"easter",i)}}}),t("span",[e._v("Easter")]),t("br"),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.child.holidays.election_day,expression:"child.holidays.election_day"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.child.holidays.election_day)?e._i(e.child.holidays.election_day,null)>-1:e.child.holidays.election_day},on:{change:function(a){var t=e.child.holidays.election_day,n=a.target,i=!!n.checked;if(Array.isArray(t)){var r=e._i(t,null);n.checked?r<0&&e.$set(e.child.holidays,"election_day",t.concat([null])):r>-1&&e.$set(e.child.holidays,"election_day",t.slice(0,r).concat(t.slice(r+1)))}else e.$set(e.child.holidays,"election_day",i)}}}),t("span",[e._v("Election Day")]),t("br"),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.child.holidays.july_4,expression:"child.holidays.july_4"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.child.holidays.july_4)?e._i(e.child.holidays.july_4,null)>-1:e.child.holidays.july_4},on:{change:function(a){var t=e.child.holidays.july_4,n=a.target,i=!!n.checked;if(Array.isArray(t)){var r=e._i(t,null);n.checked?r<0&&e.$set(e.child.holidays,"july_4",t.concat([null])):r>-1&&e.$set(e.child.holidays,"july_4",t.slice(0,r).concat(t.slice(r+1)))}else e.$set(e.child.holidays,"july_4",i)}}}),t("span",[e._v("Independence Day")]),t("br"),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.child.holidays.labor_day,expression:"child.holidays.labor_day"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.child.holidays.labor_day)?e._i(e.child.holidays.labor_day,null)>-1:e.child.holidays.labor_day},on:{change:function(a){var t=e.child.holidays.labor_day,n=a.target,i=!!n.checked;if(Array.isArray(t)){var r=e._i(t,null);n.checked?r<0&&e.$set(e.child.holidays,"labor_day",t.concat([null])):r>-1&&e.$set(e.child.holidays,"labor_day",t.slice(0,r).concat(t.slice(r+1)))}else e.$set(e.child.holidays,"labor_day",i)}}}),t("span",[e._v("Labor Day")]),t("br"),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.child.holidays.memorial_day,expression:"child.holidays.memorial_day"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.child.holidays.memorial_day)?e._i(e.child.holidays.memorial_day,null)>-1:e.child.holidays.memorial_day},on:{change:function(a){var t=e.child.holidays.memorial_day,n=a.target,i=!!n.checked;if(Array.isArray(t)){var r=e._i(t,null);n.checked?r<0&&e.$set(e.child.holidays,"memorial_day",t.concat([null])):r>-1&&e.$set(e.child.holidays,"memorial_day",t.slice(0,r).concat(t.slice(r+1)))}else e.$set(e.child.holidays,"memorial_day",i)}}}),t("span",[e._v("Memorial Day")]),t("br"),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.child.holidays.mlk_day,expression:"child.holidays.mlk_day"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.child.holidays.mlk_day)?e._i(e.child.holidays.mlk_day,null)>-1:e.child.holidays.mlk_day},on:{change:function(a){var t=e.child.holidays.mlk_day,n=a.target,i=!!n.checked;if(Array.isArray(t)){var r=e._i(t,null);n.checked?r<0&&e.$set(e.child.holidays,"mlk_day",t.concat([null])):r>-1&&e.$set(e.child.holidays,"mlk_day",t.slice(0,r).concat(t.slice(r+1)))}else e.$set(e.child.holidays,"mlk_day",i)}}}),t("span",[e._v("MLK Day")]),t("br"),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.child.holidays.new_years,expression:"child.holidays.new_years"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.child.holidays.new_years)?e._i(e.child.holidays.new_years,null)>-1:e.child.holidays.new_years},on:{change:function(a){var t=e.child.holidays.new_years,n=a.target,i=!!n.checked;if(Array.isArray(t)){var r=e._i(t,null);n.checked?r<0&&e.$set(e.child.holidays,"new_years",t.concat([null])):r>-1&&e.$set(e.child.holidays,"new_years",t.slice(0,r).concat(t.slice(r+1)))}else e.$set(e.child.holidays,"new_years",i)}}}),t("span",[e._v("New Years")]),t("br"),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.child.holidays.presidents_day,expression:"child.holidays.presidents_day"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.child.holidays.presidents_day)?e._i(e.child.holidays.presidents_day,null)>-1:e.child.holidays.presidents_day},on:{change:function(a){var t=e.child.holidays.presidents_day,n=a.target,i=!!n.checked;if(Array.isArray(t)){var r=e._i(t,null);n.checked?r<0&&e.$set(e.child.holidays,"presidents_day",t.concat([null])):r>-1&&e.$set(e.child.holidays,"presidents_day",t.slice(0,r).concat(t.slice(r+1)))}else e.$set(e.child.holidays,"presidents_day",i)}}}),t("span",[e._v("Presidents Day")]),t("br"),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.child.holidays.thanksgiving,expression:"child.holidays.thanksgiving"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.child.holidays.thanksgiving)?e._i(e.child.holidays.thanksgiving,null)>-1:e.child.holidays.thanksgiving},on:{change:function(a){var t=e.child.holidays.thanksgiving,n=a.target,i=!!n.checked;if(Array.isArray(t)){var r=e._i(t,null);n.checked?r<0&&e.$set(e.child.holidays,"thanksgiving",t.concat([null])):r>-1&&e.$set(e.child.holidays,"thanksgiving",t.slice(0,r).concat(t.slice(r+1)))}else e.$set(e.child.holidays,"thanksgiving",i)}}}),t("span",[e._v("Thanksgiving")]),t("br"),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.child.holidays.veterans_day,expression:"child.holidays.veterans_day"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.child.holidays.veterans_day)?e._i(e.child.holidays.veterans_day,null)>-1:e.child.holidays.veterans_day},on:{change:function(a){var t=e.child.holidays.veterans_day,n=a.target,i=!!n.checked;if(Array.isArray(t)){var r=e._i(t,null);n.checked?r<0&&e.$set(e.child.holidays,"veterans_day",t.concat([null])):r>-1&&e.$set(e.child.holidays,"veterans_day",t.slice(0,r).concat(t.slice(r+1)))}else e.$set(e.child.holidays,"veterans_day",i)}}}),t("span",[e._v("Veterans Day")]),t("br")]),e._v(" "),e._m(0)])])])},staticRenderFns:[function(){var e=this.$createElement,a=this._self._c||e;return a("div",{staticClass:"col",attrs:{id:"col5"}},[a("h3",[this._v("Complete Enrollment")]),this._v(" "),a("input",{staticClass:"btn-submit btn",attrs:{type:"submit",value:"Finish"}}),this._v(" "),a("a",{staticClass:"back-link",attrs:{href:"http://preciousdayslearningacademy.com"}},[a("div",{staticClass:"btn-cancel btn"},[this._v("Cancel")])])])}]};var g=t("VU/8")(p,y,!1,function(e){t("KV3f")},"data-v-291038be",null).exports,f={name:"view-guardian",data:function(){return{guardian_name:null,address:null,phone:null,phone2:null,email:null,relation:null,work_school:null,work_school_address:null,work_school_phone:null,child:{child_name:null,birthdate:null,address:null,comments:null,emergency_contact:{name:null,relation:null,phone:null,address:null},holidays:{christmas:null,columbus_day:null,easter:null,election_day:null,july_4:null,labor_day:null,memorial_day:null,mlk_day:null,new_years:null,presidents_day:null,thanksgiving:null,veterans_day:null}}}},beforeRouteEnter:function(e,a,t){u.collection("guardians").where("phone","==",e.params.phone).get().then(function(e){e.forEach(function(e){t(function(a){a.guardian_name=e.data().guardian_name,a.address=e.data().address,a.phone=e.data().phone,a.phone2=e.data().phone2,a.email=e.data().email,a.relation=e.data().relation,a.work_school=e.data().work_school,a.work_school_address=e.data().work_school_address,a.work_school_phone=e.data().work_school_phone,a.child.child_name=e.data().child.child_name,a.child.birthdate=e.data().child.birthdate,a.child.address=e.data().child.address,a.child.comments=e.data().child.comments,a.child.emergency_contact.name=e.data().child.emergency_contact.name,a.child.emergency_contact.relation=e.data().child.emergency_contact.relation,a.child.emergency_contact.phone=e.data().child.emergency_contact.phone,a.child.emergency_contact.address=e.data().child.emergency_contact.address})})})},watch:{$route:"fetchData"},methods:{fetchData:function(){var e=this;u.collection("guardians").where("phone","==",this.$route.params.phone).get().then(function(a){a.forEach(function(a){e.guardian_name=a.data().guardian_name,e.address=a.data().address,e.phone=a.data().phone,e.phone2=a.data().phone2,e.email=a.data().email,e.relation=a.data().relation,e.work_school=a.data().work_school,e.work_school_address=a.data().work_school_address,e.work_school_phone=a.data().work_school_phone,e.child.child_name=a.data().child.child_name,e.child.birthdate=a.data().child.birthdate,e.child.address=a.data().child.address,e.child.comments=a.data().child.comments,e.child.emergency_contact.name=a.data().child.emergency_contact.name,e.child.emergency_contact.relation=a.data().child.emergency_contact.relation,e.child.emergency_contact.phone=a.data().child.emergency_contact.phone,e.child.emergency_contact.address=a.data().child.emergency_contact.address})})},deleteGuardian:function(){var e=this;confirm("Are you sure?")&&u.collection("guardians").where("phone","==",this.$route.params.phone).get().then(function(a){a.forEach(function(a){a.ref.delete(),e.$router.push("/")})})}}},b={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{attrs:{id:"view-guardian"}},[t("div",{attrs:{id:"view-g-wrapper"}},[t("h3",[e._v("Guardian Info")]),e._v(" "),t("p",[t("strong",[e._v("Name:")]),e._v(" "+e._s(e.guardian_name))]),e._v(" "),t("p",[t("strong",[e._v("Address:")]),e._v(" "+e._s(e.address))]),e._v(" "),t("p",[t("strong",[e._v("Cell Phone:")]),e._v(" "+e._s(e.phone))]),e._v(" "),t("p",[t("strong",[e._v("Home Phone:")]),e._v(" "+e._s(e.phone2))]),e._v(" "),t("p",[t("strong",[e._v("Email:")]),e._v(" "+e._s(e.email))]),e._v(" "),t("p",[t("strong",[e._v("Relation to child:")]),e._v(" "+e._s(e.relation))]),e._v(" "),t("p",[t("strong",[e._v("Employer/School:")]),e._v(" "+e._s(e.work_school))]),e._v(" "),t("p",[t("strong",[e._v("Work/School Address:")]),e._v(" "+e._s(e.work_school_address))]),e._v(" "),t("p",[t("strong",[e._v("Work Phone:")]),e._v(" "+e._s(e.work_phone))]),e._v(" "),t("h3",[e._v("Child Info")]),e._v(" "),t("p",[t("strong",[e._v("Name:")]),e._v(" "+e._s(e.child.child_name))]),e._v(" "),t("p",[t("strong",[e._v("Birthdate:")]),e._v(" "+e._s(e.child.birthdate))]),e._v(" "),t("p",[t("strong",[e._v("Address:")]),e._v(" "+e._s(e.child.address))]),e._v(" "),t("p",[t("strong",[e._v("Comments:")]),e._v(" "+e._s(e.child.comments))]),e._v(" "),t("h3",[e._v("Emergency Contact Info")]),e._v(" "),t("p",[t("strong",[e._v("Name:")]),e._v(" "+e._s(e.child.emergency_contact.name))]),e._v(" "),t("p",[t("strong",[e._v("Relation to child:")]),e._v(" "+e._s(e.child.emergency_contact.relation))]),e._v(" "),t("p",[t("strong",[e._v("Phone:")]),e._v(" "+e._s(e.child.emergency_contact.phone))]),e._v(" "),t("p",[t("strong",[e._v("Address:")]),e._v(" "+e._s(e.child.emergency_contact.address))]),e._v(" "),t("router-link",{staticClass:"back-link",attrs:{to:"/"}},[t("div",{staticClass:"btn-back btn"},[e._v("Back")])]),e._v(" "),t("router-link",{staticClass:"g-button btn",attrs:{to:{name:"edit-guardian",params:{phone:e.phone}},id:"edit-g"}},[e._v("Edit Guardian")]),e._v(" "),t("button",{staticClass:"emp-button btn",attrs:{id:"delete-emp"},on:{click:e.deleteGuardian}},[e._v("Delete Guardian")])],1)])},staticRenderFns:[]};var k=t("VU/8")(f,b,!1,function(e){t("pf9q")},"data-v-7820da19",null).exports,w={name:"edit-guardian",data:function(){return{guardian_name:null,address:null,phone:null}},beforeRouteEnter:function(e,a,t){u.collection("guardians").where("phone","==",e.params.phone).get().then(function(e){e.forEach(function(e){t(function(a){a.guardian_name=e.data().guardian_name,a.address=e.data().address,a.phone=e.data().phone})})})},watch:{$route:"fetchData"},methods:{fetchData:function(){var e=this;u.collection("guardians").where("phone","==",this.$route.params.phone).get().then(function(a){a.forEach(function(a){e.guardian_name=a.data().guardian_name,e.address=a.data().address,e.phone=a.data().phone})})},updateGuardian:function(){var e=this;u.collection("guardians").where("phone","==",this.$route.params.phone).get().then(function(a){a.forEach(function(a){a.ref.update({guardian_name:e.guardian_name,address:e.address,phone:e.phone}).then(function(){e.$router.push({name:"view-guardian",params:{phone:e.phone}})})})})}}},x={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{attrs:{id:"edit-guardian"}},[t("h3",[e._v("Edit Guardian")]),e._v(" "),t("form",{on:{submit:function(a){return a.preventDefault(),e.updateGuardian(a)}}},[t("div",{attrs:{id:"new-emp-form"}},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.guardian_name,expression:"guardian_name"}],attrs:{disabled:"",type:"text",placeholder:"Name",required:""},domProps:{value:e.guardian_name},on:{input:function(a){a.target.composing||(e.guardian_name=a.target.value)}}}),t("br"),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.address,expression:"address"}],attrs:{type:"text",placeholder:"Address",required:""},domProps:{value:e.address},on:{input:function(a){a.target.composing||(e.address=a.target.value)}}}),t("br"),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.phone,expression:"phone"}],attrs:{type:"text",placeholder:"Phone",required:""},domProps:{value:e.phone},on:{input:function(a){a.target.composing||(e.phone=a.target.value)}}}),t("br"),e._v(" "),t("input",{staticClass:"btn btn-submit",attrs:{type:"submit",value:"Finish"}}),e._v(" "),t("router-link",{staticClass:"back-link",attrs:{to:"/"}},[t("div",{staticClass:"btn btn-cancel"},[e._v("Cancel")])])],1)])])},staticRenderFns:[]};var A=t("VU/8")(w,x,!1,function(e){t("QXD1")},"data-v-156ba424",null).exports,$={name:"guardian_info",data:function(){return{name:null,phone:null,email:null,date:null,time:null,comments:null}},methods:{saveEmployee:function(){var e=this;u.collection("appointments").add({name:this.guardian_name,phone:this.address,email:this.phone,date:this.phone2,time:this.time,comments:this.comments}).then(function(a){return e.$router.push("/")}).catch(function(e){return console.log(e)})}}},N={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{attrs:{id:"new-guardian"}},[t("form",{on:{submit:function(a){return a.preventDefault(),e.saveEmployee(a)}}},[t("div",{attrs:{id:"new-guardian-form"}},[t("h3",[e._v("Schedule an Appointment")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],attrs:{type:"text",placeholder:"Full Name",required:""},domProps:{value:e.name},on:{input:function(a){a.target.composing||(e.name=a.target.value)}}}),t("br"),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.phone,expression:"phone"}],attrs:{type:"text",placeholder:"Phone",required:""},domProps:{value:e.phone},on:{input:function(a){a.target.composing||(e.phone=a.target.value)}}}),t("br"),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"text",placeholder:"Email",required:""},domProps:{value:e.email},on:{input:function(a){a.target.composing||(e.email=a.target.value)}}}),t("br"),e._v("\n      Date: "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.date,expression:"date"}],attrs:{type:"date",placeholder:"Date"},domProps:{value:e.date},on:{input:function(a){a.target.composing||(e.date=a.target.value)}}}),t("br"),e._v("\n      Time: "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.time,expression:"time"}],attrs:{type:"time",placeholder:"Time"},domProps:{value:e.time},on:{input:function(a){a.target.composing||(e.time=a.target.value)}}}),t("br"),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.comments,expression:"comments"}],attrs:{type:"text",placeholder:"Comments",required:""},domProps:{value:e.comments},on:{input:function(a){a.target.composing||(e.comments=a.target.value)}}}),t("br"),e._v(" "),t("input",{staticClass:"btn-submit btn",attrs:{type:"submit",value:"Finish"}}),e._v(" "),t("router-link",{staticClass:"back-link",attrs:{to:"/"}},[t("div",{staticClass:"btn-cancel btn"},[e._v("Cancel")])])],1)])])},staticRenderFns:[]};var P=t("VU/8")($,N,!1,function(e){t("jxt7")},"data-v-6d7be2e0",null).exports;n.a.use(s.a);var C=new s.a({routes:[{path:"/",name:"dashboard",component:v},{path:"/new_guardian",name:"new_guardian",component:g},{path:"/view_guardian/:phone",name:"view-guardian",component:k},{path:"/edit_guardian/:phone",name:"edit-guardian",component:A},{path:"/schedule",name:"schedule",component:P}]});n.a.config.productionTip=!1,new n.a({el:"#app",router:C,components:{App:o},template:"<App/>"})},QXD1:function(e,a){},"an+s":function(e,a){},jxt7:function(e,a){},pf9q:function(e,a){},rV5b:function(e,a){},rheF:function(e,a){}},["NHnr"]);
//# sourceMappingURL=app.e8470bab31c019712a1a.js.map