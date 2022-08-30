(function(){"use strict";var e={445:function(e,r,t){var a=t(144),s=function(){var e=this,r=e._self._c;return r("div",{attrs:{id:"app"}},[e._m(0),r("router-view")],1)},o=[function(){var e=this,r=e._self._c;return r("head",[r("link",{attrs:{href:"https://fonts.googleapis.com/icon?family=Material+Icons",rel:"stylesheet"}})])}],i={name:"App"},n=i,l=t(1),c=(0,l.Z)(n,s,o,!1,null,null,null),u=c.exports,d=t(345),p=function(){var e=this,r=e._self._c;return r("div",{staticClass:"container"},[r("leftMenu"),r("div",{staticClass:"flexcol"},[r("div",{staticClass:"main"},[r("div",{staticClass:"search"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.search,expression:"search"}],staticClass:"btn",attrs:{type:"text",id:"search",name:"search",placeholder:"Search for car by producer or model",maxlength:"50"},domProps:{value:e.search},on:{input:function(r){r.target.composing||(e.search=r.target.value)}}}),r("span",{staticClass:"material-icons add",on:{click:e.add}},[e._v("add")])])]),e._l(e.cars,(function(e){return r("div",{key:e.id,staticClass:"wide"},[r("singleCar",{attrs:{id:e.id,producer:e.producer,model:e.model,prodDate:e.prodDate,purchaseDate:e.purchaseDate,mileage:e.mileage,recCreated:e.createdAt,recUpdated:e.updatedAt}})],1)}))],2)],1)},m=[],h=function(){var e=this,r=e._self._c;return r("div",{staticClass:"item"},[e.error?r("span",{staticClass:"error"},[e._v(e._s(e.error))]):e._e(),r("div",{staticClass:"content"},[r("div",{staticClass:"flexcol"},[r("div",{staticClass:"data"},[e._v("ID: "+e._s(e.id))]),r("div",{staticClass:"data"},[e._v("Producent: "+e._s(e.producer))]),r("div",{staticClass:"data"},[e._v("Model: "+e._s(e.model))]),r("div",{staticClass:"data"},[e._v("Production Date: "+e._s(e.prodDate))]),r("div",{staticClass:"data"},[e._v(" Date Of Purchase By The Company: "+e._s(e.purchaseDate)+" ")]),r("div",{staticClass:"data"},[e._v("Car Mileage (km): "+e._s(e.mileage))]),r("div",{staticClass:"data"},[e._v("Record Created At: "+e._s(e.date(e.recCreated)))]),r("div",{staticClass:"data"},[e._v("Record Updated At: "+e._s(e.date(e.recUpdated)))])]),r("div",{staticClass:"options"},[r("span",{staticClass:"material-icons delete",on:{click:e.deleteCar}},[e._v("delete")]),r("span",{staticClass:"material-icons edit",on:{click:function(r){return e.navigateTo({name:"car",params:{carId:e.id}})}}},[e._v("edit")])])])])},v=[],g=t(629),f=t(669),C=t.n(f),w=t(702);a.ZP.use(g.ZP);var y=new g.ZP.Store({strict:!0,plugins:[(0,w.Z)()],state:{token:null,user:null,isUserLoggedIn:!1,cars:null},mutations:{setToken(e,r){e.token=r,e.isUserLoggedIn=!!r},setUser(e,r){e.user=r},setCars(e,r){e.cars=r}},actions:{setToken({commit:e},r){e("setToken",r)},setUser({commit:e},r){e("setUser",r)},setCars({commit:e},r){e("setCars",r)}}}),E=()=>C().create({baseURL:"",headers:{Auth:`Bearer ${y.state.token}`}}),b={getCars(e){return E().get("api/cars",{params:{search:e}})},addCar(e){return E().post("api/add",e)},show(e){return E().get(`api/cars/${e}`)},edit(e,r){return E().put(`api/cars/${r}`,e)},deleteCar(e){return E().delete(`api/cars/${e}`)}},N=t(484),D=t.n(N),$={name:"singleCar",async mounted(){this.isUserLoggedIn||this.$router.push({name:"Login"})},data(){return{error:null}},props:["id","producer","model","prodDate","purchaseDate","mileage","recCreated","recUpdated"],computed:{...(0,g.rn)(["isUserLoggedIn"])},methods:{navigateTo(e){this.$router.push(e)},async deleteCar(){if(confirm("Are you sure you want to delete?"))try{await b.deleteCar(this.id),console.log(),"/"==this.$router.currentRoute.fullPath?this.$router.push("/?search="):this.$router.push("/")}catch(e){this.error=e.response.data.error}},date(e){return D()(e)}}},x=$,P=(0,l.Z)(x,h,v,!1,null,"482566dc",null),k=P.exports,I=function(){var e=this,r=e._self._c;return r("div",{staticClass:"user"},[r("div",{staticClass:"flex"},[r("h1",[e._v("Your profile")]),r("span",{staticClass:"material-icons",on:{click:e.logout}},[e._v("logout")])]),r("h4",[e._v("Profile ID: "+e._s(e.user.id))]),r("h4",[e._v("Name: "+e._s(e.user.firstName)+" "+e._s(e.user.lastName))]),r("h4",[e._v("Email: "+e._s(e.user.email))]),r("h4",[e._v("Created at: "+e._s(e.date(e.user.createdAt)))])])},q=[],L={name:"leftMenu",computed:{...(0,g.rn)(["user"])},methods:{logout(){this.$store.dispatch("setToken",null),this.$store.dispatch("setUser",null),this.$router.push({name:"Login"})},date(e){return D()(e)}}},U=L,Z=(0,l.Z)(U,I,q,!1,null,"c530d878",null),O=Z.exports,T=(t(486),{name:"carsList",components:{singleCar:k,leftMenu:O},data(){return{search:""}},computed:{...(0,g.rn)(["isUserLoggedIn","user","cars"])},mounted(){this.isUserLoggedIn||this.$router.push({name:"Login"})},watch:{search:_.debounce((async function(e){const r={name:"/"};""!==this.search&&(r.query={search:this.search}),this.$router.push(r)}),300),"$route.query.search":{immediate:!0,handler(e){this.search=e}},"$route.query.search":{immediate:!0,async handler(e){const r=await b.getCars(e);this.$store.dispatch("setCars",r.data.cars)}}},methods:{logout(){this.$store.dispatch("setToken",null),this.$store.dispatch("setUser",null),this.$router.push({name:"Login"})},add(){this.$router.push({name:"Add"})}}}),A=T,j=(0,l.Z)(A,p,m,!1,null,"4a2e0abc",null),M=j.exports,S=function(){var e=this,r=e._self._c;return r("div",{staticClass:"container"},[r("div",{staticClass:"panel"},[r("h1",[e._v("Login")]),e.error?r("span",{staticClass:"error"},[e._v(e._s(e.error))]):e._e(),r("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"btn",attrs:{type:"text",id:"email",name:"email",placeholder:"email",required:""},domProps:{value:e.email},on:{input:function(r){r.target.composing||(e.email=r.target.value)}}}),r("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"btn",attrs:{type:"password",id:"password",name:"password",placeholder:"Password",required:""},domProps:{value:e.password},on:{input:function(r){r.target.composing||(e.password=r.target.value)}}}),r("input",{staticClass:"send",attrs:{type:"submit",name:"Send",value:"Login"},on:{click:e.login}}),r("router-link",{attrs:{to:"register"}},[e._v("Register here ")])],1)])},R=[],F={register(e){return E().post("api/register",e)},login(e){return E().post("api/login",e)}},Y={name:"loginPage",data(){return{email:"",password:"",error:null}},methods:{async login(){try{const e=await F.login({email:this.email,password:this.password});this.$store.dispatch("setToken",e.data.token),this.$store.dispatch("setUser",e.data.user),this.$router.push({name:"/"})}catch(e){this.error=e.response.data.error}}}},B=Y,z=(0,l.Z)(B,S,R,!1,null,"16ee2546",null),G=z.exports,H=function(){var e=this,r=e._self._c;return r("div",{staticClass:"container"},[r("div",{staticClass:"panel"},[r("h1",[e._v("Register now")]),e.mainError?r("span",{staticClass:"error"},[e._v(e._s(e.mainError))]):e._e(),r("div",{attrs:{id:"name"}},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.firstName,expression:"firstName"}],staticClass:"btn",attrs:{type:"text",id:"firstName",name:"firstName",placeholder:"First Name",required:""},domProps:{value:e.firstName},on:{input:function(r){r.target.composing||(e.firstName=r.target.value)}}}),r("input",{directives:[{name:"model",rawName:"v-model",value:e.lastName,expression:"lastName"}],staticClass:"btn",attrs:{type:"text",id:"lastName",name:"lastName",placeholder:"Last Name",required:""},domProps:{value:e.lastName},on:{input:function(r){r.target.composing||(e.lastName=r.target.value)}}})]),e.errors.firstNameError?r("span",{staticClass:"error"},[e._v(e._s(e.errors.firstNameError))]):e._e(),e.errors.lastNameError?r("span",{staticClass:"error"},[e._v(e._s(e.errors.lastNameError))]):e._e(),r("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"btn",attrs:{type:"text",id:"email",name:"email",placeholder:"Email",maxlength:"255",required:""},domProps:{value:e.email},on:{input:function(r){r.target.composing||(e.email=r.target.value)}}}),e.errors.emailError?r("span",{staticClass:"error"},[e._v(e._s(e.errors.emailError))]):e._e(),r("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"btn",attrs:{type:"password",id:"password",name:"password",placeholder:"Password",minlength:"6",required:""},domProps:{value:e.password},on:{input:function(r){r.target.composing||(e.password=r.target.value)}}}),e.errors.passwordError?r("span",{staticClass:"error"},[e._v(e._s(e.errors.passwordError))]):e._e(),r("input",{staticClass:"send",attrs:{type:"submit",name:"Send",value:"Sign up"},on:{click:e.register}}),r("router-link",{attrs:{to:"login"}},[e._v("Login here ")])],1)])},J=[],K={name:"registerPage",data(){return{firstName:"",lastName:"",email:"",password:"",mainError:null,errors:{firstNameError:null,lastNameError:null,emailError:null,passwordError:null}}},methods:{async register(){function e(e){const r=/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;return r.test(e)}function r(e){return/\d/.test(e)}this.firstName?this.errors.firstNameError=null:this.errors.firstNameError="First name is required",this.lastName?this.errors.lastNameError=null:this.errors.lastNameError="Last name is required",this.email?this.errors.emailError=null:this.errors.emailError="E-mail is required",!this.password||!e(this.password)||!r(this.password)||this.password.length<6?this.errors.passwordError="Password should be at least 6 characters long, contain 1 number and 1 special sign":this.errors.passwordError=null;const t=Object.values(this.errors).every((e=>null===e));if(t)try{const e=await F.register({firstName:this.firstName,lastName:this.lastName,email:this.email,password:this.password});this.$store.dispatch("setToken",e.data.token),this.$store.dispatch("setUser",e.data.user),this.$router.push({name:"/"})}catch(a){this.mainError=a.response.data.error}}}},Q=K,V=(0,l.Z)(Q,H,J,!1,null,"61edcfd4",null),W=V.exports,X=function(){var e=this,r=e._self._c;return r("div",[r("carInput",{attrs:{method:e.add}})],1)},ee=[],re=function(){var e=this,r=e._self._c;return r("div",{staticClass:"container"},[r("div",{staticClass:"panel"},[r("div",{staticClass:"flex2"},[r("router-link",{attrs:{to:"/"}},[r("span",{staticClass:"material-icons"},[e._v(" arrow_back ")])]),r("h1",[e._v("Your Car")])],1),e.errors.ServerError?r("span",{staticClass:"error"},[e._v(e._s(e.errors.mainError))]):e._e(),r("h3",[e._v("Producer")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.car.producer,expression:"car.producer"}],staticClass:"btn",attrs:{type:"text",id:"producer",name:"producer",required:""},domProps:{value:e.car.producer},on:{input:function(r){r.target.composing||e.$set(e.car,"producer",r.target.value)}}}),e.errors.producerError?r("span",{staticClass:"error"},[e._v(e._s(e.errors.producerError))]):e._e(),r("h3",[e._v("Model")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.car.model,expression:"car.model"}],staticClass:"btn",attrs:{type:"text",id:"model",name:"model",required:""},domProps:{value:e.car.model},on:{input:function(r){r.target.composing||e.$set(e.car,"model",r.target.value)}}}),e.errors.modelError?r("span",{staticClass:"error"},[e._v(e._s(e.errors.modelError))]):e._e(),r("h3",[e._v("Production Date")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.car.prodDate,expression:"car.prodDate"}],staticClass:"btn",attrs:{type:"number",id:"prodDate",name:"prodDate",required:""},domProps:{value:e.car.prodDate},on:{input:function(r){r.target.composing||e.$set(e.car,"prodDate",r.target.value)}}}),e.errors.prodDateError?r("span",{staticClass:"error"},[e._v(e._s(e.errors.prodDateError))]):e._e(),r("h3",[e._v("Date of purchase by the company")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.car.purchaseDate,expression:"car.purchaseDate"}],staticClass:"btn",attrs:{type:"date",id:"purchaseDate",name:"purchaseDate",required:""},domProps:{value:e.car.purchaseDate},on:{input:function(r){r.target.composing||e.$set(e.car,"purchaseDate",r.target.value)}}}),e.errors.purchaseDateError?r("span",{staticClass:"error"},[e._v(e._s(e.errors.purchaseDateError))]):e._e(),r("h3",[e._v("Car Mileage (km)")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.car.mileage,expression:"car.mileage"}],staticClass:"btn",attrs:{type:"number",id:"mileage",name:"mileage",required:""},domProps:{value:e.car.mileage},on:{input:function(r){r.target.composing||e.$set(e.car,"mileage",r.target.value)}}}),e.errors.mileageError?r("span",{staticClass:"error"},[e._v(e._s(e.errors.mileageError))]):e._e(),r("input",{staticClass:"send",attrs:{type:"submit",name:"add",value:"Save"},on:{click:e.checkInput}})])])},te=[],ae={name:"carInput",data(){return{car:{producer:null,model:null,prodDate:null,purchaseDate:null,mileage:null},errors:{mainError:null,producerError:null,modelError:null,prodDateError:null,purchaseDateError:null,mileageError:null},required:e=>!!e||"Required."}},props:{method:{type:Function}},computed:{...(0,g.rn)(["isUserLoggedIn","user","cars"])},async mounted(){if(this.isUserLoggedIn){if(this.$route.params.carId)try{const e=this.$route.params.carId;this.car=(await b.show(e)).data,delete this.car.UserId,delete this.car.id,delete this.car.createdAt,delete this.car.updatedAt}catch(e){this.error=e.response.data.error}}else this.$router.push({name:"Login"})},methods:{async checkInput(){const e=Object.keys(this.car).every((e=>!!this.car[e]));this.errors.mainError=e?null:"You need to fill in all required fields",this.car.producer?this.errors.producerError=null:this.errors.producerError="Producer name is required",this.car.model?this.errors.modelError=null:this.errors.modelError="Model name is required";let r=(new Date).toISOString().slice(0,10),t=(new Date).getFullYear();this.car.prodDate>t||this.car.prodDate<1900?this.errors.prodDateError="Production date cant be in the future, nor before 1900":this.errors.prodDateError=null,this.car.purchaseDate>r||this.car.purchaseDate<"1970-00-00"||!this.car.purchaseDate?this.errors.purchaseDateError="Purchase date cant be in the future, nor before 1970":this.errors.purchaseDateError=null,this.car.mileage<0||!this.car.mileage?this.errors.mileageError="You must insert mileage, which can't be negative number":this.errors.mileageError=null;const a=Object.values(this.errors).every((e=>null===e));a&&this.method(this.car)}}},se=ae,oe=(0,l.Z)(se,re,te,!1,null,"7f9a88ca",null),ie=oe.exports,ne={components:{carInput:ie},name:"newCar",methods:{async add(e){try{await b.addCar(e),this.$router.push({name:"/"})}catch(r){this.error=r.response.data.error}}}},le=ne,ce=(0,l.Z)(le,X,ee,!1,null,null,null),ue=ce.exports,de=function(){var e=this,r=e._self._c;return r("div",[r("carInput",{attrs:{method:e.edit}})],1)},pe=[],me={components:{carInput:ie},name:"editCar",methods:{async edit(e){try{await b.edit(e,this.$route.params.carId),this.$router.push({name:"/"})}catch(r){this.error=r.response.data.error}}}},he=me,ve=(0,l.Z)(he,de,pe,!1,null,null,null),ge=ve.exports;a.ZP.use(d.Z);var fe=new d.Z({routes:[{path:"/",name:"/",component:M},{path:"/register",name:"Register",component:W},{path:"/login",name:"Login",component:G},{path:"/add",name:"Add",component:ue},{path:"/cars/:carId",name:"car",component:ge}]}),_e=t(620);a.ZP.config.productionTip=!1,new a.ZP({router:fe,store:y,dayjs:D(),vuelidate:_e.ZP,render:e=>e(u)}).$mount("#app")}},r={};function t(a){var s=r[a];if(void 0!==s)return s.exports;var o=r[a]={id:a,loaded:!1,exports:{}};return e[a].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}t.m=e,function(){var e=[];t.O=function(r,a,s,o){if(!a){var i=1/0;for(u=0;u<e.length;u++){a=e[u][0],s=e[u][1],o=e[u][2];for(var n=!0,l=0;l<a.length;l++)(!1&o||i>=o)&&Object.keys(t.O).every((function(e){return t.O[e](a[l])}))?a.splice(l--,1):(n=!1,o<i&&(i=o));if(n){e.splice(u--,1);var c=s();void 0!==c&&(r=c)}}return r}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[a,s,o]}}(),function(){t.n=function(e){var r=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(r,{a:r}),r}}(),function(){t.d=function(e,r){for(var a in r)t.o(r,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:r[a]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)}}(),function(){t.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){var e={143:0};t.O.j=function(r){return 0===e[r]};var r=function(r,a){var s,o,i=a[0],n=a[1],l=a[2],c=0;if(i.some((function(r){return 0!==e[r]}))){for(s in n)t.o(n,s)&&(t.m[s]=n[s]);if(l)var u=l(t)}for(r&&r(a);c<i.length;c++)o=i[c],t.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return t.O(u)},a=self["webpackChunkclient"]=self["webpackChunkclient"]||[];a.forEach(r.bind(null,0)),a.push=r.bind(null,a.push.bind(a))}();var a=t.O(void 0,[998],(function(){return t(445)}));a=t.O(a)})();
//# sourceMappingURL=app.da8ff24c.js.map