(this.webpackJsonpmasks=this.webpackJsonpmasks||[]).push([[0],[,,,function(e,t,n){e.exports=n(11)},,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),o=n(2),r=n.n(o);n(8),n(9);class l{constructor(){this.get_videos_from_list=({channel_ID:e})=>fetch("".concat(this.endpoint,"/search?key=").concat("AIzaSyD0qpDMAMh6rl9Rvf6GnaGc5JSLKtjn1P0")+"&channelId=".concat(e)+"&part=snippet,id&type=video&order=date&maxResults=18").then(e=>e.json()).then(e=>{if("error"in e)throw new Error(JSON.stringify(e.error));return e}),this.endpoint="https://www.googleapis.com/youtube/v3"}}class i extends s.a.Component{render(){return s.a.createElement("div",{className:"mb-4 col-lg-4 col-md-6 col-12"},s.a.createElement("div",{className:"h-100"},s.a.createElement("div",{className:"h-100 card"},s.a.createElement("img",{src:this.props.data.thumbnails.high.url,className:"card-img-top",alt:this.props.data.title}),s.a.createElement("div",{className:"d-flex flex-column card-body"},s.a.createElement("h5",{className:"card-title"},this.props.data.title),s.a.createElement("p",{className:"flex-grow-1 card-text"},this.props.data.description),s.a.createElement("a",{href:"#",className:"btn btn-primary align-self-center"},"Play Demo")))))}}class c extends s.a.Component{render(){const e=this.props.list;return s.a.createElement("div",{className:"list"},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"row"},e.map(e=>s.a.createElement(i,{key:e.etag,id:e.id.videoId,data:e.snippet})))))}}class h extends s.a.Component{render(){return s.a.createElement("header",null)}}class d extends s.a.Component{constructor(){super(),this.get_list=e=>{this.api.get_videos_from_list({channel_ID:e}).then(t=>{console.log(t);const n={channel_ID:e,list:t.items,is_loading:!1};n.prevPageToken="prevPageToken"in t?t.prevPageToken:null,n.nextPageToken="nextPageToken"in t?t.nextPageToken:null,this.setState(n)}).catch(t=>{console.error(JSON.parse(t.message)),this.setState({prevPageToken:null,nextPageToken:null,channel_ID:e,list:[],is_loading:!1})})},console.log(this.props),this.api=new l,this.state={channel_ID:null,prevPageToken:null,nextPageToken:null,list:[],is_loading:!0},console.log("constructor: ",this.state)}componentDidMount(){const e=this.props.channel_ID;console.log("did mount: ",this.state),this.get_list(e)}componentDidUpdate(e,t){t.prevPageToken===this.state.prevPageToken&&t.nextPageToken===this.state.nextPageToken||this.get_list(this.state.channel_ID)}render(){console.log("render: ",this.state);const e=this.state.list;return s.a.createElement("div",{className:"App"},s.a.createElement(h,null),s.a.createElement(c,{list:e}))}}n(10);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(d,{channel_ID:"UCHS9TqaY4gbhs-QvjH3lxAg"}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(e=>{e.unregister()}).catch(e=>{console.error(e.message)})}],[[3,1,2]]]);
//# sourceMappingURL=main.34137c83.chunk.js.map