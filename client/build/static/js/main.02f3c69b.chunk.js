(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{104:function(e,t,n){e.exports=n.p+"static/media/logo.29f71dfa.png"},121:function(e,t,n){e.exports=n(186)},126:function(e,t,n){},127:function(e,t,n){},145:function(e,t,n){},149:function(e,t,n){},153:function(e,t,n){},154:function(e,t,n){},181:function(e,t){},184:function(e,t,n){},185:function(e,t,n){},186:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(10),c=n.n(o),l=n(27),s=(n(126),n(21)),u=n(22),i=n(24),m=n(23),d=n(14),p=(n(127),n(128),n(16)),h=n.n(p),g=n(227),f=(n(145),function(e){Object(i.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={learners:[],search:null},e.searchSpace=function(t){var n=t.target.value;e.setState({search:n})},e.getData=function(){h.a.get("/api/projects").then((function(t){e.setState({learners:t.data}),e.state.learners.forEach((function(e){e.languagesSpoken.forEach((function(e){}))}))})).catch((function(e){console.log(e)}))},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.getData()}},{key:"render",value:function(){var e=this,t=this.state.learners.filter((function(t){return null==e.state.search||t.username.toLowerCase().includes(e.state.search.toLowerCase())||t.languagesSpoken.some((function(t){return t.slice(5).toLowerCase().includes(e.state.search.toLowerCase())}))?t:void 0})).map((function(e){return r.a.createElement("div",{className:"UserInformation"},r.a.createElement("a",{className:"nameDisplay",href:"/users/".concat(e._id)},e.username)," ",r.a.createElement("br",null),r.a.createElement("b",null,e.description),r.a.createElement("div",{className:"languageDetails"},r.a.createElement("div",{className:"language"},r.a.createElement("h6",null,"SPEAKS"),e.languagesSpoken.map((function(e){return r.a.createElement("p",null,e)})),r.a.createElement("h6",null,"LEARNS"),e.languagesToLearn.map((function(e){return r.a.createElement("p",null,e)})))))}));return r.a.createElement("div",null,r.a.createElement(g.a.Group,{className:"search-field"},r.a.createElement(g.a.Label,{htmlFor:"search"}," "),r.a.createElement(g.a.Control,{type:"text",name:"search",onChange:function(t){return e.searchSpace(t)},id:"search",placeholder:"Enter the language you want to learn or the user you want to talk to"})),r.a.createElement("div",{className:"userContainer"},t))}}]),n}(a.Component)),v=n(29),E=n(228),b=function(e,t,n,a,r){return h.a.post("/api/auth/signup",{username:e,password:t,languagesSpoken:n,languagesToLearn:a,description:r}).then((function(e){return e.data})).catch((function(e){return e.response.data}))},y=function(e,t){return h.a.post("/api/auth/login",{username:e,password:t}).then((function(e){return e.data})).catch((function(e){return e.response.data}))},k=n(229),w=(n(149),function(e){Object(i.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={username:"",password:"",message:"",languagesSpoken:[],languagesToLearn:[],description:""},e.handleChange=function(t){var n=t.target,a=n.name,r=n.value;e.setState(Object(v.a)({},a,r))},e.spokenLanguageChanges=function(t){t.preventDefault();for(var n=[],a=0;a<t.target.options.length;a++)t.target.options[a].selected&&(n.push(t.target.options[a].value),console.log("this is the value from the if",n));e.setState({languagesSpoken:n}),console.log("this is the state languages spoken? ",e.state.languagesSpoken,"this is the value:",n)},e.languagesToLearnChanges=function(t){t.preventDefault();for(var n=[],a=0;a<t.target.options.length;a++)t.target.options[a].selected&&n.push(t.target.options[a].value);e.setState({languagesToLearn:n})},e.handleSubmit=function(t){t.preventDefault();var n=e.state,a=n.username,r=n.password,o=n.languagesSpoken,c=n.languagesToLearn,l=n.description;b(a,r,o,c,l).then((function(t){console.log(t),t.message?e.setState({message:t.message,username:a,password:"",languagesSpoken:o,languagesToLearn:c,description:l}):(e.props.setUser(t),e.props.history.push("/home"))})),console.log(e.state)},e}return Object(u.a)(n,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(g.a,{onSubmit:this.handleSubmit},r.a.createElement("h2",null,"Signup"),r.a.createElement("div",{className:"signup-container"},r.a.createElement("div",{className:"form-container"},r.a.createElement(g.a.Group,null,r.a.createElement(g.a.Label,{htmlFor:"username"},"Username: "),r.a.createElement(g.a.Control,{type:"text",name:"username",value:this.state.username,onChange:this.handleChange,id:"username"})),r.a.createElement(g.a.Group,null,r.a.createElement(g.a.Label,{htmlFor:"password"},"Password: "),r.a.createElement(g.a.Control,{type:"password",name:"password",value:this.state.password,onChange:this.handleChange,id:"password"})),r.a.createElement(g.a.Group,null,r.a.createElement(g.a.Label,{htmlFor:"description"},"Tell us a little bit about yourself:"),r.a.createElement(g.a.Control,{type:"text",name:"description",value:this.state.description,onChange:this.handleChange,id:"description"}))),r.a.createElement("div",{className:"languages-box"},r.a.createElement(g.a.Group,null,r.a.createElement(g.a.Label,null,"I speak the following languages:"),r.a.createElement(g.a.Control,{as:"select",multiple:!0,name:"languagesSpoken",value:this.state.languagesSpoken,onChange:this.spokenLanguageChanges},r.a.createElement("option",{value:"\ud83c\uddec\ud83c\udde7 English"}," \ud83c\uddec\ud83c\udde7 English"),r.a.createElement("option",{value:"\ud83c\udde9\ud83c\uddea German"},"\ud83c\udde9\ud83c\uddea German"),r.a.createElement("option",{value:"\ud83c\uddeb\ud83c\uddf7 French"},"\ud83c\uddeb\ud83c\uddf7 French"),r.a.createElement("option",{value:"\ud83c\uddee\ud83c\uddea Italian"},"\ud83c\uddee\ud83c\uddea Italian"),r.a.createElement("option",{value:"\ud83c\udde6\ud83c\uddea Arabic"},"\ud83c\udde6\ud83c\uddea Arabic"),r.a.createElement("option",{value:"\ud83c\udde8\ud83c\uddf3 Mandarin"},"\ud83c\udde8\ud83c\uddf3 Mandarin"),r.a.createElement("option",{value:"\ud83c\uddee\ud83c\uddf3 Hindi"},"\ud83c\uddee\ud83c\uddf3 Hindi "),r.a.createElement("option",{value:"\ud83c\uddf9\ud83c\uddf7 Turkish"},"\ud83c\uddf9\ud83c\uddf7 Turkish"),r.a.createElement("option",{value:"\ud83c\uddf5\ud83c\uddf9 Portuguese"},"\ud83c\uddf5\ud83c\uddf9 Portuguese"),r.a.createElement("option",{value:"\ud83c\uddea\ud83c\uddf8 Spanish"},"\ud83c\uddea\ud83c\uddf8 Spanish"),r.a.createElement("option",{value:"\ud83c\uddec\ud83c\uddf7 Greek"},"\ud83c\uddec\ud83c\uddf7 Greek"),r.a.createElement("option",{value:"\ud83c\uddf7\ud83c\uddfa Russian"},"\ud83c\uddf7\ud83c\uddfa Russian"),r.a.createElement("option",{value:"\ud83c\uddef\ud83c\uddf5 Japanese"},"\ud83c\uddef\ud83c\uddf5 Japanese"),r.a.createElement("option",{value:"\ud83c\udde7\ud83c\uddec Bulgarian"},"\ud83c\udde7\ud83c\uddec Bulgarian"),r.a.createElement("option",{value:"\ud83c\uddf0\ud83c\uddf7 Korean"},"\ud83c\uddf0\ud83c\uddf7 Korean"),r.a.createElement("option",{value:"\ud83c\udde6\ud83c\uddf2 Armenian"},"\ud83c\udde6\ud83c\uddf2 Armenian"),r.a.createElement("option",{value:"\ud83c\uddf1\ud83c\uddfa Dutch"},"\ud83c\uddf1\ud83c\uddfa Dutch"),r.a.createElement("option",{value:"\ud83c\uddf5\ud83c\uddf0 Urdu"},"\ud83c\uddf5\ud83c\uddf0 Urdu"))),r.a.createElement(g.a.Group,null,r.a.createElement(g.a.Label,null,"I want to learn the following languages:"),r.a.createElement(g.a.Control,{as:"select",multiple:!0,name:"languagesToLearn",value:this.state.languagesToLearn,onChange:this.languagesToLearnChanges},r.a.createElement("option",{value:"\ud83c\uddec\ud83c\udde7 English"},"\ud83c\uddec\ud83c\udde7 English"),r.a.createElement("option",{value:"\ud83c\udde9\ud83c\uddea German"},"\ud83c\udde9\ud83c\uddea German"),r.a.createElement("option",{value:"\ud83c\uddeb\ud83c\uddf7 French"},"\ud83c\uddeb\ud83c\uddf7 French"),r.a.createElement("option",{value:"\ud83c\uddee\ud83c\uddea Italian"},"\ud83c\uddee\ud83c\uddea Italian"),r.a.createElement("option",{value:"\ud83c\udde6\ud83c\uddea Arabic"},"\ud83c\udde6\ud83c\uddea Arabic"),r.a.createElement("option",{value:"\ud83c\udde8\ud83c\uddf3 Mandarin"},"\ud83c\udde8\ud83c\uddf3 Mandarin"),r.a.createElement("option",{value:"\ud83c\uddee\ud83c\uddf3 Hindi"},"\ud83c\uddee\ud83c\uddf3 Hindi "),r.a.createElement("option",{value:"\ud83c\uddf9\ud83c\uddf7 Turkish"},"\ud83c\uddf9\ud83c\uddf7 Turkish"),r.a.createElement("option",{value:"\ud83c\uddf5\ud83c\uddf9 Portuguese"},"\ud83c\uddf5\ud83c\uddf9 Portuguese"),r.a.createElement("option",{value:"\ud83c\uddea\ud83c\uddf8 Spanish"},"\ud83c\uddea\ud83c\uddf8 Spanish"),r.a.createElement("option",{value:"\ud83c\uddec\ud83c\uddf7 Greek"},"\ud83c\uddec\ud83c\uddf7 Greek"),r.a.createElement("option",{value:"\ud83c\uddf7\ud83c\uddfa Russian"},"\ud83c\uddf7\ud83c\uddfa Russian"),r.a.createElement("option",{value:"\ud83c\uddef\ud83c\uddf5 Japanese"},"\ud83c\uddef\ud83c\uddf5 Japanese"),r.a.createElement("option",{value:"\ud83c\udde7\ud83c\uddec Bulgarian"},"\ud83c\udde7\ud83c\uddec Bulgarian"),r.a.createElement("option",{value:"\ud83c\uddf0\ud83c\uddf7 Korean"},"\ud83c\uddf0\ud83c\uddf7 Korean"),r.a.createElement("option",{value:"\ud83c\udde6\ud83c\uddf2 Armenian"},"\ud83c\udde6\ud83c\uddf2 Armenian"),r.a.createElement("option",{value:"\ud83c\uddf1\ud83c\uddfa Dutch"},"\ud83c\uddf1\ud83c\uddfa Dutch"),r.a.createElement("option",{value:"\ud83c\uddf5\ud83c\uddf0 Urdu"},"\ud83c\uddf5\ud83c\uddf0 Urdu"))),this.state.message&&r.a.createElement(E.a,{variant:"danger"},this.state.message),r.a.createElement(k.a,{variant:"outlined",color:"secondary",type:"submit"},"Join our community")))))}}]),n}(a.Component)),j=(n(153),function(e){Object(i.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={username:"",password:"",message:""},e.handleChange=function(t){var n=t.target,a=n.name,r=n.value;e.setState(Object(v.a)({},a,r))},e.handleSubmit=function(t){t.preventDefault();var n=e.state,a=n.username,r=n.password;y(a,r).then((function(t){t.message?e.setState({message:t.message,username:"",password:""}):(e.props.setUser(t),e.props.history.push("/home"))}))},e}return Object(u.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"loginCredentials"},r.a.createElement(g.a,{onSubmit:this.handleSubmit},r.a.createElement(g.a.Group,null,r.a.createElement(g.a.Control,{type:"text",name:"username",placeholder:"username",value:this.state.username,onChange:this.handleChange,id:"username"})),r.a.createElement(g.a.Group,null,r.a.createElement(g.a.Control,{type:"password",name:"password",placeholder:"password",value:this.state.password,onChange:this.handleChange,id:"password"})),this.state.message&&r.a.createElement(E.a,{variant:"danger"},this.state.message),r.a.createElement("button",{class:"button",type:"submit"},"Login")))}}]),n}(a.Component)),O=(n(154),n(104)),C=n.n(O),S=function(e){h.a.delete("/api/auth/logout").then((function(e){return e.data})).catch((function(e){return e.response.data})).then((function(){e.setUser(null)}))};function N(e){return r.a.createElement("nav",{className:"nav"},r.a.createElement("img",{src:C.a}),e.user&&r.a.createElement("div",{className:"userWelcome"},"Welcome ",e.user.username),e.user?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"loggedinElements"},r.a.createElement("div",{className:"navElements"},r.a.createElement(l.b,{to:"/home"},"Learners  ")),r.a.createElement("div",{className:"navElements"},r.a.createElement(l.b,{to:"/",onClick:function(){return S(e)}},"Logout")))):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"LoginSignup"},r.a.createElement("div",{className:"navElements"},r.a.createElement(l.b,{to:"/signup"},"Signup")),r.a.createElement("div",{className:"navElements"},r.a.createElement(l.b,{to:"/login"},"Login")))))}var D=n(39),x=n(226),L=Object(d.f)((function(e){var t=Object(a.useState)(),n=Object(D.a)(t,2),o=n[0],c=n[1];return r.a.createElement("div",{className:"enterRoom"},r.a.createElement("label",{htmlFor:"roomNumber"},"Please enter a room number: "),r.a.createElement(x.a,{type:"number",name:"roomNumber",id:"roomNumber",value:o,onChange:function(e){c(e.target.value)}}),o&&r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement(k.a,{variant:"outlined",color:"primary",onClick:function(){var t=o;e.history.push("/room/".concat(t))},id:"goRoom"},"Enter Room")))})),T=n(72),U=n(30),R=n(106),A=n.n(R),G=n(31);n(184);function F(){var e=Object(U.a)(["\n  width: 45%;\n  background-color: grey;\n  color: white;\n  border: 1px solid lightgray;\n  padding: 10px;\n  margin-left: 5px;\n  text-align: center;\n  border-top-left-radius: 10%;\n  border-bottom-left-radius: 10%;\n"]);return F=function(){return e},e}function I(){var e=Object(U.a)(["\n  justify-content: flex-start;\n"]);return I=function(){return e},e}function M(){var e=Object(U.a)(["\n  width: 45%;\n  background-color: blue;\n  color: white;\n  padding: 10px;\n  margin-right: 5px;\n  text-align: center;\n  border-top-right-radius: 10%;\n  border-bottom-right-radius: 10%;\n"]);return M=function(){return e},e}function B(){var e=Object(U.a)(["\n  width: 100%;\n  display: flex;\n  justify-content: flex-end;\n  margin-top: 10px;\n"]);return B=function(){return e},e}function P(){var e=Object(U.a)(["\n  width: 50%;\n    border: 1px groove black;\n    margin-top: 15px;\n    height: 5%;\n    border-radius: 5px;\n    cursor: pointer;\n    background-color: #eb8f8f;\n    color: white;\n    font-size: 18px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n"]);return P=function(){return e},e}function W(){var e=Object(U.a)(["\n  width: 100%;\n  height: 10%;\n  border: 1px dotted #ec0101;\n  margin-top: 15px;\n  background-color: #f1f3de;\n"]);return W=function(){return e},e}function J(){var e=Object(U.a)(["\nwidth: 30vh;\nheight: 35vh;\n  border: 1px dotted #ec0101;\n  margin-top: 100px;\n  overflow: scroll;\n  background-color: #f1f3de;\n"]);return J=function(){return e},e}function H(){var e=Object(U.a)(["\n  height: 100vh;\n  width: 50%;\n  margin: auto;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]);return H=function(){return e},e}var _=G.a.div(H()),K=G.a.div(J()),Y=G.a.textarea(W()),z=G.a.div(P()),V=G.a.div(B()),$=G.a.div(M()),q=Object(G.a)(V)(I()),Q=G.a.div(F()),X=function(e){var t=Object(a.useRef)(),n=Object(a.useRef)(),o=Object(a.useRef)(),c=Object(a.useRef)(),l=Object(a.useRef)(),s=Object(a.useRef)(),u=Object(a.useRef)([]),i=Object(a.useRef)([]),m=Object(a.useState)(""),d=Object(D.a)(m,2),p=d[0],h=d[1],g=Object(a.useState)([]),f=Object(D.a)(g,2),v=f[0],E=f[1],b=Object(a.useState)(!0),y=Object(D.a)(b,2),k=y[0],w=y[1],j=Object(a.useState)(""),O=Object(D.a)(j,2),C=O[0],S=O[1];function N(e){E((function(t){return[].concat(Object(T.a)(t),[{yours:!1,value:e.data}])})),console.log(v)}function x(e){var t=new RTCPeerConnection({iceServers:[{urls:"stun:stun.l.google.com:19302"},{urls:"turn:numb.viagenie.ca",credential:"ironhack-082020",username:" idanpap@gmail.com"}]});return t.onicecandidate=G,t.ontrack=I,t.onnegotiationneeded=function(){return function(e){o.current.createOffer().then((function(e){return console.log(e),o.current.setLocalDescription(e)})).then((function(){var t={target:e,caller:c.current.id,sdp:o.current.localDescription};c.current.emit("offer",t)})).catch((function(e){return console.log(e)}))}(e)},w(!1),t}function L(e){o.current=x(),o.current.ondatachannel=function(e){i.current=e.channel,i.current.onmessage=N};var t=new RTCSessionDescription(e.sdp);o.current.setRemoteDescription(t).then((function(){return o.current.createAnswer()})).then((function(e){return console.log(e),o.current.setLocalDescription(e)})).then((function(){var t={target:e.caller,caller:c.current.id,sdp:o.current.localDescription};c.current.emit("answer",t)}))}function U(e){o.current=x();var t=new RTCSessionDescription(e.sdp);o.current.setRemoteDescription(t).then((function(){s.current.getTracks().forEach((function(e){return u.current.push(o.current.addTrack(e,s.current))}))})).then((function(){return o.current.createAnswer()})).then((function(e){return o.current.setLocalDescription(e)})).then((function(){var t={target:e.caller,caller:c.current.id,sdp:o.current.localDescription};c.current.emit("answer",t)}))}function R(e){var t=new RTCSessionDescription(e.sdp);o.current.setRemoteDescription(t).catch((function(e){return console.log(e)}))}function G(e){if(e.candidate){var t={target:l.current,candidate:e.candidate};c.current.emit("ice-candidate",t)}}function F(e){var t=new RTCIceCandidate(e);o.current.addIceCandidate(t).catch((function(e){return console.log(e)}))}function I(e){n.current.srcObject=e.streams[0]}function M(){0!==i.current.length?(i.current.send(p),E((function(e){return[].concat(Object(T.a)(e),[{yours:!0,value:p}])})),h("")):console.log("work")}function B(){var e=["Where did you grow up?","What do you think about the elections in America?","What's your favourite meal?","Tell me about your family","Do you think climate change is real?","Are you interested in blockchain?","Your favourite childhood memory","Your job"],t=Math.floor(Math.random()*e.length);S(e[t])}return Object(a.useEffect)((function(){navigator.mediaDevices.getUserMedia({audio:!0,video:!0}).then((function(n){t.current.srcObject=n,s.current=n,c.current=A.a.connect("/"),c.current.emit("join room",e.match.params.roomID),c.current.on("other user",(function(e){!function(e){o.current=x(e),i.current=o.current.createDataChannel("sendChannel"),i.current.onmessage=N,s.current.getTracks().forEach((function(e){return u.current.push(o.current.addTrack(e,s.current))}))}(e),l.current=e})),c.current.on("user joined",(function(e){l.current=e})),c.current.on("offer",U),c.current.on("offer",L),c.current.on("answer",R),c.current.on("ice-candidate",F)}))}),[]),setTimeout(B,6e4),r.a.createElement("div",null,r.a.createElement("div",{className:"videoAndChat"},r.a.createElement("div",{className:"videoDisplay"},r.a.createElement("video",{controls:!0,style:{height:500,width:400},autoPlay:!0,ref:t,muted:"muted"}),r.a.createElement("video",{controls:!0,style:{height:500,width:400},autoPlay:!0,ref:n})),r.a.createElement("div",{className:"chat"},r.a.createElement(_,null,r.a.createElement(K,null,v.map((function(e,t){return e.yours?r.a.createElement(V,{key:t},r.a.createElement($,null,e.value)):r.a.createElement(q,{key:t},r.a.createElement(Q,null,e.value))}))),r.a.createElement(Y,{value:p,onChange:function(e){h(e.target.value)},placeholder:"Happy Learning :)"}),r.a.createElement(z,{onClick:function(){return M()}},"Send")))),k?r.a.createElement("h2",null):r.a.createElement("div",{className:"share-screen"},r.a.createElement(z,{onClick:function(){navigator.mediaDevices.getDisplayMedia({cursor:!0}).then((function(e){var t=e.getTracks()[0];u.current.find((function(e){return"video"===e.track.kind})).replaceTrack(t),console.log(u.current,"CURRENT 2"),t.onended=function(){u.current.find((function(e){return"video"===e.track.kind})).replaceTrack(s.current.getTracks()[1]),w(!1)}}))}},"Share screen")),r.a.createElement("div",{className:"suggestions"},r.a.createElement(z,{className:"suggestions-button",onClick:function(){return B()}},r.a.createElement("p",null,"Don't know what to talk about?"),r.a.createElement("p",null,"Click here for suggestions!")),r.a.createElement("div",{className:"topics"},C&&r.a.createElement("h2",null,C)," ")))},Z=n(224),ee=n(59),te=n(222),ne=n(223),ae=n(225),re=function(e){Object(i.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={comment:"",receiver:"",receiverUsername:"",senderUsername:"",roomGenerated:!1,allowedToDelete:!1},e.handleSubmit=function(t){t.preventDefault(),h.a.post("/comments",{comment:e.state.comment,receiver:e.props.userId,receiverUsername:e.props.username,senderUsername:e.props.loggedUser.username,roomGenerated:e.state.roomGenerated}).then((function(){e.setState({comment:""}),e.props.getData()})).catch((function(e){console.log(e)}))},e.handleChange=function(t){var n=t.target,a=n.name,r=n.value;e.setState(Object(v.a)({},a,r))},e.handleRandomRoom=function(t){var n=e.props.comments.slice(-1)[0].senderUsername;console.log("sender",e.props.comments.slice(-1)),t.preventDefault(),h.a.post("/comments",{comment:"This is your room number: "+Math.floor(1e6*Math.random()),receiver:e.props.userId,receiverUsername:n,senderUsername:e.props.loggedUser.username,roomGenerated:!e.state.roomGenerated}).then((function(){e.setState({comment:""}),e.props.getData()}))},e.decline=function(t){console.log("find the comment",t),h.a.delete("/comments/".concat(t._id)).then((function(){e.props.getData()})).catch((function(e){console.log(e)}))},e.handleButton=function(e){console.log(e.target.parentName),e.target.className="disappear"},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this,t=this.props.comments.map((function(t){return r.a.createElement("div",null,t.senderUsername===e.props.username?r.a.createElement("h6",{className:"username-comment"},t.receiverUsername," said:"," "):r.a.createElement("h6",{className:"username-comment"},r.a.createElement("b",null,t.senderUsername)," said:"," "),t.comment,r.a.createElement("div",{className:"button-in-comment"},r.a.createElement(g.a,null,r.a.createElement(k.a,{variant:"contained",color:"secondary",onClick:function(){e.decline(t)}},"Decline"))),e.props.loggedUser._id!==t.sender&&!t.roomGenerated&&r.a.createElement("div",{className:"button-in-comment"},r.a.createElement(g.a,{onSubmit:e.handleRandomRoom},r.a.createElement(k.a,{onClick:e.handleButton,variant:"contained",color:"primary",type:"submit"},"Accept invitation"),r.a.createElement("br",null))))}));return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"comment-submit"},r.a.createElement(g.a,{className:"comment-form",onSubmit:this.handleSubmit},r.a.createElement(g.a.Label,{htmlFor:"comment"}),r.a.createElement(x.a,Object(v.a)({id:"standard-primary",label:"Comment here",color:"primary",type:"text",name:"comment",value:this.state.comment,onChange:this.handleChange,placeholder:"Schedule a videocall"},"id","comment")),r.a.createElement(k.a,{variant:"contained",color:"secondary",style:{marginLeft:"20px"},type:"submit"},"Submit")," ",r.a.createElement("br",null))),r.a.createElement("div",{className:"comments"},r.a.createElement("br",null),t))}}]),n}(a.Component),oe=(n(185),function(e){Object(i.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={userId:"",username:"",languagesSpoken:[],languagesToLearn:[],description:"",comments:[],error:"",allowedToDelete:!1},e.getData=function(){h.a.get("/api/projects/".concat(e.props.match.params.id)).then((function(t){var n=t.data.comments.filter((function(t){return console.log("this.props",e.props),console.log("comment in userComments pkdetaisl",t),console.log("comment.receiver: ",t.receiver),console.log("comment.sender: ",t.sender),console.log(e.props.user._id===t.receiver),console.log(t.sender===e.props.user._id),(e.props.user.username===t.receiverUsername||e.props.user.username===t.senderUsername)&&e.props.match.params.id===t.receiver&&t}));e.setState({userId:t.data.user._id,username:t.data.user.username,description:t.data.user.description,languagesSpoken:t.data.user.languagesSpoken,languagesToLearn:t.data.user.languagesToLearn,comments:n})})).catch((function(t){404===t.response.status&&e.setState({error:"Not found"})}))},e.handleChange=function(t){var n=t.target,a=n.name,r=n.value;e.setState(Object(v.a)({},a,r))},e.toggleEditForm=function(){e.setState((function(e){return{editForm:!e.editForm}}))},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.getData()}},{key:"render",value:function(){this.props.user;var e=this.state.languagesSpoken.map((function(e){return r.a.createElement("div",null,r.a.createElement(ne.a,null," ",e," ")," ",r.a.createElement(Z.a,null))})),t=this.state.languagesToLearn.map((function(e){return r.a.createElement("div",null,r.a.createElement(ne.a,null," ",e," ")," ",r.a.createElement(Z.a,null))}));return r.a.createElement("div",null,r.a.createElement("div",{className:"circle-container"},r.a.createElement("h1",{className:"circle"},this.state.username)),r.a.createElement("h5",null,this.state.description),r.a.createElement("div",{className:"details-container"},r.a.createElement("div",{className:"languages-container box"},r.a.createElement(ae.a,{container:!0,spacing:2},r.a.createElement(ae.a,{item:!0,xs:12,md:6},r.a.createElement(ee.a,{variant:"h6"},r.a.createElement("h3",null,"Speaks"),r.a.createElement(te.a,null,e),r.a.createElement("br",null),r.a.createElement("h3",null,"Learns"),r.a.createElement(te.a,null,t)),r.a.createElement("div",null)))),r.a.createElement("div",{className:"comment-box"},r.a.createElement(re,Object.assign({getData:this.getData,loggedUser:this.props.user},this.state)),r.a.createElement(L,null))))}}]),n}(a.Component)),ce=function(e){Object(i.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={user:e.props.user},e.setUser=function(t){e.setState({user:t})},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement(N,{user:this.state.user,setUser:this.setUser}),r.a.createElement(d.b,{exact:!0,path:"/home",render:function(t){return e.state.user?r.a.createElement(f,Object.assign({user:e.state.user},t)):r.a.createElement(d.a,{to:"/"})}}),r.a.createElement(d.b,{exact:!0,path:"/users/:id",render:function(t){return r.a.createElement(oe,Object.assign({user:e.state.user},t))}}),r.a.createElement(d.b,{path:"/room/:roomID",component:X}),r.a.createElement(d.b,{exact:!0,path:"/signup",render:function(t){return r.a.createElement(w,Object.assign({setUser:e.setUser},t))}}),r.a.createElement(d.b,{exact:!0,path:"/login",render:function(t){return r.a.createElement(j,Object.assign({setUser:e.setUser},t))}}),r.a.createElement(d.b,{exact:!0,path:"/",render:function(t){return e.state.user?r.a.createElement("learnersList",t):r.a.createElement("div",{className:"not-signed-up"},r.a.createElement("h1",null,"Welcome to the Barouche"),r.a.createElement("p",null,"Here at Barouche, we care about learning languages. A passion for education, coupled with the new normal imposed by COVID, which means we can't travel as much as normal, motivated us to make our groundbreaking language learning platform available to the public. Connect with normal people from all over the world and learn the language of your choosing, whilst simultaneously sharing your own culture."),r.a.createElement("em",null,"We are Barouche, we are community"),r.a.createElement(j,Object.assign({setUser:e.setUser},t)),r.a.createElement(l.b,{to:"/signup",className:"signupLink"},"Sign Up here"))}}),r.a.createElement(d.b,{exact:!0,path:"/room",render:function(t){return e.state.user?r.a.createElement(L,t):r.a.createElement(d.a,{to:"/"})}}))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));h.a.get("/api/auth/loggedin").then((function(e){var t=e.data;c.a.render(r.a.createElement(l.a,null,r.a.createElement(ce,{user:t})),document.getElementById("root"))})),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[121,1,2]]]);
//# sourceMappingURL=main.02f3c69b.chunk.js.map