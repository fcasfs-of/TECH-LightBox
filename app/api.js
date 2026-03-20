var scriptfd = document.createElement("style");
scriptfd.innerHTML='  #ctx-menu-background {  position: absolute;  top: 0; left: 0;  width: 100%;  height: 100%;  z-index: 998;}.ctx-menu-wrapper {  background-color: rgb(250, 250, 250);  box-shadow: 4px 4px 3px -2px rgba(0, 0, 0, .1);  color: black;  padding: 3px 0 3px 0;  border: 1px solid #b1b1b1;  border-radius: 1px;  font-family: "CtxMenuFont";  font-size: 12px;  -moz-user-select: -moz-none;  -khtml-user-select: none;  -webkit-user-select: none;  -ms-user-select: none;  user-select: none;  position: absolute;  z-index: 999999999;  white-space: nowrap;}.ctx-menu-item {  padding: 2px 10px 2px 10px;  border-radius: 1px;  cursor: pointer;  transition: background-color 0.1s;    }.ctx-menu-item.disabled{   pointer-events:none;  opacity:0.6; }.ctx-menu-item:hover {  background-color: rgba(0,0,0,0.13);   }.ctx-menu-item:active {  transition: background-color 0s;  background-color: rgba(0,0,0,0.2);    }.ctx-menu-separator {  height: 1px;  margin: 3px 0 3px 0;  background-color: rgba(0, 0, 0, 0.2);   }.ctx-menu-hasIcon img {  min-width: 16px;  max-width: 16px;  max-height: 16px;  position: relative;  margin-right: 8px;  pointer-events: none;  user-select: none;   }.ctx-menu-item img[src] {  float: left;    }.ctx-menu-hasIcon .ctx-menu-item {  vertical-align: middle;  max-height: 20px;   }  .mdark.ctx-menu-wrapper {    background-color: rgb(36, 39, 40);    color:white;    border-color: #464646;  }  .mdark .ctx-menu-item{    transition: background-color 0s;  }  .mdark .ctx-menu-item:hover{    background-color: rgb(211, 216, 219);    color: black;  }  .mdark .ctx-menu-separator {    background-color: rgba(255, 255, 255, 0.2);  }  .mdark .ctx-menu-item .ctx-menu-darkInvert{    filter: invert(1);  }  .mdark .ctx-menu-item:hover .ctx-menu-darkInvert{    filter: invert(0);  }      .modal { user-select:none;     display: none;   position: fixed;   z-index: 10001;  padding-bottom: 10px;padding-top: 100px;  left: 0;transition: 0.3s;  top: 0;  width: 100%;  height: 100%;   overflow: auto;   background-color: rgb(0,0,0);   background-color: rgba(0,0,0,0.9); } .modal .modal-content {  margin: auto;  color:#fff;  display: block;  width: 100%;    transition: 0.3s;}    .modal .modal-content .cdof {  margin: auto;  display: block;  width: 100%%;  height:450px;    transition: 0.3s;} .modal #caption {   margin: auto;  display: block;  width: 85%;  max-width: 700px;  text-align: center;  color: #ccc;  padding: 10px 0;  transition: 0.3s;}  .modal #link {  margin: auto;  display: block;  width: 80%;  max-width: 700px;  text-align: center;  color: #ccc;  padding: 10px 0;transition: 0.3s;}    .modal.eff #link, .modal.eff .modal-content, .modal.eff .modal-content .cdof, .modal.eff #caption {    -webkit-animation-name: zoom;  -webkit-animation-duration: 0.6s;  animation-name: zoom;  animation-duration: 0.6s;}   @-webkit-keyframes zoom {  from {-webkit-transform:scale(0)}   to {-webkit-transform:scale(1)}}   @keyframes zoom {  from {transform:scale(0)}   to {transform:scale(1)}}   .modal .bngd {  position: absolute;  top: 15px;  right: 35px;   }   .modal .ssclose {  color: #f1f1f1;  font-size: 40px;  font-weight: bold;  transition: 0.3s;}   .modal .ssclose:hover,.modal .ssclose:focus {  color: #bbb;  text-decoration: none;  cursor: pointer;transition: 0.3s;}   .modal #btons_cont {  position: absolute;  top: 15px;  left: 35px;  color: #f1f1f1;  font-size: 40px; font-weight: bold;  transition: 0.3s;}   .modal #btons_cont .btns {  color: #f1f1f1;padding:2px;  font-size: 40px;  font-weight: bold;  transition: 0.3s;margin-right:5px;}  .modal #btons_cont .btns .thung{   opacity:0.8;  transition: 0.3s;  }    .modal #btons_cont .btns:focus .thung, .modal #btons_cont .btns:hover .thung{   opacity:1; transition: 0.3s; }  .modal #btons_cont .tcbtns {  color: #f1f1f1;padding:3px;  font-size: 20px;  font-weight: bold; overflow:auto;  transition: 0.3s;margin-right:5px;}    .modal #btons_cont .tcbtns.c {width:100%;position:absolute;text-align:center;}   .modal #btons_cont .btns:hover,.modal #btons_cont .btns:focus {  color: #bbb;  text-decoration: none;  cursor: pointer;transition: 0.3s;}  @media only screen and (max-width: 700px){  .modal .modal-content {    width: 100%;  }}    body::-webkit-scrollbar,.modal::-webkit-scrollbar {  height: 12px;  width: 12px;}  body::-webkit-scrollbar-track,.modal::-webkit-scrollbar-track {  border-radius: 3px;  background-color: #DFE9EB;  border: 1px solid #FFFFFF;} body::-webkit-scrollbar-track:hover,.modal::-webkit-scrollbar-track:hover {  background-color: #B8C0C2;} body::-webkit-scrollbar-track:active,.modal::-webkit-scrollbar-track:active {  background-color: #B8C0C2;}   body::-webkit-scrollbar-thumb,.modal::-webkit-scrollbar-thumb {  border-radius: 8px;  background-color: #170C75;  border: 1px solid #FFFFFF;}  body::-webkit-scrollbar-thumb:hover,.modal::-webkit-scrollbar-thumb:hover {  background-color: #4747A3; }  body::-webkit-scrollbar-thumb:active,.modal::-webkit-scrollbar-thumb:active {  background-color: #065FA3;}  body.darkmode::-webkit-scrollbar-track{  border: 1px solid #333;}   body.darkmode::-webkit-scrollbar-thumb{    border: 1px solid #000;}   .modal .ssclose .icon::before {  display:block;  position:relative;  top:0px;    content: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA7AAAAOwBeShxvQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAHASURBVFiF7ZY9SytBFIafCTezuSJ3MAtytZSk8P9oqdYmQbDRWylcf0EgxkK7LfWvXEtTJNgpKCayKCE7CYxFzGWTXeMGR/HrrZaZs+d95uMMB7711SVGB8zyssSYPWAFmLPkcwl4CLEjjo91eOJHJNSYv8CWJeOB5oFtjAH4E55IxQSvWjYPa210IA7A1rbH6XcSgDfVBwI4OjrF82oo1XwyRqkmnlfj8PCffQDH+Ukms0i12oqFUKpJtdoik1lEyin7AKXSLFrXkTLPwYFPNnsdMZcyT7d7zuamax/A910KhSxa10mnF6hU7nHdq4h5qTRNqzWbNG30JVxaMmP/UKrJ/v4tjpMjCBoA/7+LxRl8f+zqxcnJkOfkVeD7LsXiDFrXcZwcjpOj2z1nY+PXc+ZxsleGQozfOWsAgyOQMk8QNAiCBun0AuXy3dgStQIwuHDhbQ8fx2h1WAV46rbHVccEEMkBKpVrpMyjdZ31dTVUaqMQ5fKNfYBOp027XaNQyMbe9gFEp3NGr9dLmnbyd+CFevk7YFnvEuDyFf0ukgB4r2ZvTCR3tCsWYuexe12h383aUL8tT6V2LeX71ifSA3f6ubbY1IiBAAAAAElFTkSuQmCC");}    [data-tooltip] {position: relative;}   [data-tooltip]::before,[data-tooltip]::after {  text-transform: none;  font-size: 16px;  line-height: 1;  position: absolute;  display: none;  opacity: 0;}   [data-tooltip]::before {  content: "";  border: 6px solid transparent;  z-index: 101;}   [data-tooltip]::after {  content: attr(data-tooltip);  text-align: center;pointer-events:none;  min-width: 3em;  max-width: 21em;  white-space: nowrap;  overflow: hidden;  text-overflow: ellipsis;  padding: 9px 8px;  border-radius: 6px;  background: #333333;  color: #FFFFFF;  z-index: 100;}   [data-tooltip]:hover::before,[data-tooltip]:hover::after {  display: block;}   [data-tooltip=\'\']::before,[data-tooltip=\'\']::after {  display: none !important;}   [data-tooltip]:not([data-flow])::before,[data-tooltip][data-flow^="top"]::before {   bottom: 100%;  border-bottom-width: 0;  border-top-color: #333333;}   [data-tooltip]:not([data-flow])::after,[data-tooltip][data-flow^="top"]::after {  bottom: calc(100% + 5px);}   [data-tooltip]:not([data-flow])::before,[data-tooltip]:not([data-flow])::after,[data-tooltip][data-flow^="top"]::before,[data-tooltip][data-flow^="top"]::after {  left: 50%;  transform: translate(-50%, -.4em);}   [data-tooltip][data-flow^="bottom"]::before {  top: 100%;  border-top-width: 0;  border-bottom-color: #333333;}   [data-tooltip][data-flow^="bottom"]::after {  top: calc(100% + 5px);}   [data-tooltip][data-flow^="bottom"]::before,[data-tooltip][data-flow^="bottom"]::after {  left: 50%;  transform: translate(-50%, .4em);}   [data-tooltip][data-flow^="left"]::before {  top: 50%;  border-right-width: 0;  border-left-color: #333333;  left: calc(0em - 5px);  transform: translate(-.5em, -50%);}   [data-tooltip][data-flow^="left"]::after {  top: 50%;  right: calc(100% + 5px);  transform: translate(-.4em, -50%);}   [data-tooltip][data-flow^="right"]::before {  top: 50%;  border-left-width: 0;  border-right-color: #333333;  right: calc(0em - 7px);  transform: translate(.4em, -50%);}   [data-tooltip][data-flow^="right"]::after {  top: 50%;  left: calc(100% + 5px);  transform: translate(.5em, -50%);}   @keyframes tooltip-vert {  to {    opacity: 1;    transform: translate(-50%, 0);  }}   @keyframes tooltip-horz {  to {    opacity: 1;    transform: translate(0, -50%);  }}   [data-tooltip]:not([data-flow]):hover::before,[data-tooltip]:not([data-flow]):hover::after,[data-tooltip][data-flow^="top"]:hover::before,[data-tooltip][data-flow^="top"]:hover::after,[data-tooltip][data-flow^="bottom"]:hover::before,[data-tooltip][data-flow^="bottom"]:hover::after {  animation: tooltip-vert .5s ease-out forwards;}   [data-tooltip][data-flow^="left"]:hover::before,[data-tooltip][data-flow^="left"]:hover::after,[data-tooltip][data-flow^="right"]:hover::before,[data-tooltip][data-flow^="right"]:hover::after {  animation: tooltip-horz .5s ease-out forwards;}   .darkmode [data-tooltip]::after {   background: #FFFFFF;  color: #333333;}   .darkmode [data-tooltip][data-flow^="top"]::before {  border-top-color: #FFFFFF; }   .darkmode [data-tooltip][data-flow^="bottom"]::before { border-bottom-color: #FFFFFF; }   .darkmode [data-tooltip][data-flow^="left"]::before { border-left-color: #FFFFFF; }   .darkmode [data-tooltip][data-flow^="right"]::before {  border-right-color: #FFFFFF; }      .modal::-webkit-scrollbar, .modal .modal-content::-webkit-scrollbar {  height: 12px;  width: 12px;}   .modal::-webkit-scrollbar-track, .modal .modal-content::-webkit-scrollbar-track {  border-radius: 3px;  background-color: #DFE9EB;  border: 1px solid #FFFFFF;} .modal::-webkit-scrollbar-track:hover, .modal .modal-content::-webkit-scrollbar-track:hover {  background-color: #B8C0C2;}  .modal::-webkit-scrollbar-track:active, .modal .modal-content::-webkit-scrollbar-track:active {  background-color: #B8C0C2;}  .modal::-webkit-scrollbar-thumb, .modal .modal-content::-webkit-scrollbar-thumb {  border-radius: 8px;  background-color: #170C75;  border: 1px solid #FFFFFF;} .modal::-webkit-scrollbar-thumb:hover, .modal .modal-content::-webkit-scrollbar-thumb:hover {  background-color: #4747A3;} .modal::-webkit-scrollbar-thumb:active, .modal .modal-content::-webkit-scrollbar-thumb:active {  background-color: #065FA3;}   .modal .modal-content::-webkit-scrollbar-track{  border: 1px solid #333;}  .modal .modal-content::-webkit-scrollbar-thumb{    border: 1px solid #000;}      .modal .modal-content .menulight_scrollmenu {   padding: 8px;   overflow: auto;  background-color: #333;  text-align: center;   white-space: nowrap;   }     .modal .modal-content .menulight_scrollmenu button {  background-color: #333; display: inline-block;  color: #fff;  text-align: center; cursor:pointer;     padding: 14px;  text-decoration: none;}    .modal .modal-content .menulight_scrollmenu button:hover, .modal .modal-content .menulight_scrollmenu button.active {  background-color: #777;  color:#fff;  }     .modal .modal-content .menulight_scrollmenu button.active {  pointer-events:none;  opacity: 0.7;   }   .modal .modal-content .menulight_scrollmenu {       position: fixed;    bottom: 11px;    width: 92%;    margin: 0 auto;    right: 0;    left: 0;       }   ';  
document.getElementsByTagName("head")[0].appendChild(scriptfd);
 
var scriptfd_ff = document.createElement("style");
scriptfd_ff.innerHTML='  .pace {	-webkit-pointer-events: none;	pointer-events: none;	-webkit-user-select: none;	-moz-user-select: none;	user-select: none;}.pace-inactive {	display: none;}.pace .pace-progress {	 background:#29d;  position: fixed;	z-index: 2000;	top: 0;	right: 100%;	width: 100%;	height: 2px;}.pace .pace-progress-inner {	display: block;	position: absolute;	right: 0px;	width: 100px;	height: 100%;	  box-shadow: 0 0 10px #29d, 0 0 5px #29d;	opacity: 1.0;	-webkit-transform: rotate(3deg) translate(0px, -4px);	-moz-transform: rotate(3deg) translate(0px, -4px);	-ms-transform: rotate(3deg) translate(0px, -4px);	-o-transform: rotate(3deg) translate(0px, -4px);	transform: rotate(3deg) translate(0px, -4px);}.pace .pace-activity {	display: block;	position: fixed;	z-index: 2000;	top: 15px;	right: 15px;	width: 14px;	height: 14px;	border: solid 2px transparent;border-top-color: #29d;	border-left-color: #29d;	border-radius: 10px;	-webkit-animation: pace-spinner 400ms linear infinite;	-moz-animation: pace-spinner 400ms linear infinite;	-ms-animation: pace-spinner 400ms linear infinite;	-o-animation: pace-spinner 400ms linear infinite;	animation: pace-spinner 400ms linear infinite;}  @-webkit-keyframes pace-spinner {	0% { -webkit-transform: rotate(0deg); transform: rotate(0deg); }	100% { -webkit-transform: rotate(360deg); transform: rotate(360deg); }}  @-moz-keyframes pace-spinner {	0% { -moz-transform: rotate(0deg); transform: rotate(0deg); }	100% { -moz-transform: rotate(360deg); transform: rotate(360deg); }}   @-o-keyframes pace-spinner {	0% { -o-transform: rotate(0deg); transform: rotate(0deg); }	100% { -o-transform: rotate(360deg); transform: rotate(360deg); }}   @-ms-keyframes pace-spinner {	0% { -ms-transform: rotate(0deg); transform: rotate(0deg); }	100% { -ms-transform: rotate(360deg); transform: rotate(360deg); }}  @keyframes pace-spinner {	0% { transform: rotate(0deg); transform: rotate(0deg); }	100% { transform: rotate(360deg); transform: rotate(360deg); }}     ';  
document.getElementsByTagName("head")[0].appendChild(scriptfd_ff);

var scrcodiptwwincfd = document.createElement("script");
scrcodiptwwincfd.setAttribute("src", "https://lightbox.fcasfs-of.cloud-fs.net/app/core.js");
document.getElementsByTagName("head")[0].appendChild(scrcodiptwwincfd);

var scriptwwincfd = document.createElement("script");
scriptwwincfd.setAttribute("src", "https://player.fcasfs-of.cloud-fs.net/app/core.js");
document.getElementsByTagName("head")[0].appendChild(scriptwwincfd);
var scriptincfd = document.createElement("script");
scriptincfd.setAttribute("src", "https://player.fcasfs-of.cloud-fs.net/app/api.js");
document.getElementsByTagName("head")[0].appendChild(scriptincfd);


function fsmodal_cl_menu(id) {    if(id && id!=""){    var mdplfsmodal_cl_menu1sfdf = document.getElementById(id);   if(mdplfsmodal_cl_menu1sfdf){   mdplfsmodal_cl_menu1sfdf.click();    } }   }


   function fsmodal_clall_menu(id) {  var fsmodal_clall_menussd="";     if(id.target){   if(id.target.parentNode){     if(id.target.parentNode.getElementsByTagName("button").length>=0){
	for (var isd = 0; isd < id.target.parentNode.getElementsByTagName("button").length; isd++){
		if(id.target.parentNode.getElementsByTagName("button")[isd].getAttribute('id') && id.target.parentNode.getElementsByTagName("button")[isd].getAttribute('id')!=""){
		var fsmodal_clall_menu_acuit="";
		if(id.target.getAttribute('id') && id.target.getAttribute('id')!=""){   if(id.target.parentNode.getElementsByTagName("button")[isd].getAttribute('id')==id.target.getAttribute('id')){   fsmodal_clall_menu_acuit="class='active'";  }  }
		 fsmodal_clall_menussd=fsmodal_clall_menussd+` <button ${fsmodal_clall_menu_acuit} onclick="fsmodal_cl_menu('${id.target.parentNode.getElementsByTagName("button")[isd].getAttribute('id')}')">${id.target.parentNode.getElementsByTagName("button")[isd].textContent}</button>  `;
	}     }   }
	}   }   return fsmodal_clall_menussd;   }

function fsmodal_clall_menfu(id) {   var fsmodal_clall_menussd=false;    if(id.target){   if(id.target.parentNode){  
	if(id.target.parentNode.getElementsByTagName("button").length>=0){  fsmodal_clall_menussd=true;   }   }
	}      return fsmodal_clall_menussd;   }
    

function fsmodal_close(id, hifde) {   if(id && id!=""){   
 var mdpl1sfdf = document.getElementById("mdpl1");   if(mdpl1sfdf){    mdpl1sfdf.remove();   }  
var mdpl2gsdf = document.getElementById("mdpl2");   if(mdpl2gsdf){    mdpl2gsdf.remove();   } 

if(document.querySelector("#mendu_df")){  document.querySelector("#mendu_df").innerHTML="";   }
	
 var momocsifipsl = document.getElementById(id);   if(momocsifipsl){   momocsifipsl.innerHTML = "";      if(hifde && hifde=="yes") { document.body.style.overflow="auto";   }    }     }   }
var is_player0j= "no";

function fsmodal_create(optiy, app) {     is_player0j= "no";
 start_fs_mpl={};   fsmodal_createdd="";    start_fs_postermpl="";
if(optiy){       var fsmodal_create_desci="";
 if(optiy.description && optiy.description!=""){   fsmodal_create_desci="<br/><br/><span>"+optiy.description+"</span>";   }
 if(optiy.title && optiy.title!=""){  fsmodal_createdd=fsmodal_createdd+`<h1 style="text-align:center;pointer-events:none;color:#fff;font-weight:bold;" class="">${optiy.title}</h1>`;    }    
if(optiy.context && optiy.context!=""){   
var fsmodal_create_ifir = optiy.context;

if(app && app=="yes" && optiy.type && optiy.type=="id"){   is_player0j= "no";
 var start_fs_mpl_args="";   var stdart_fs_mpl_argsd="";
 if(optiy.view && optiy.view=="info"){  start_fs_mpl_args="&info=on";  }    
 else if(optiy.view && optiy.view=="list"){   start_fs_mpl_args="&list=on";     }   
   if(optiy.config){
     if(optiy.config.pos && optiy.config.pos!=""){  stdart_fs_mpl_argsd=stdart_fs_mpl_argsd+"&pos="+optiy.config.pos;  }    
     if(optiy.config.select && optiy.config.select!=""){  stdart_fs_mpl_argsd=stdart_fs_mpl_argsd+"&fileSelect="+optiy.config.select;  }    
   }    
fsmodal_create_ifir=`<iframe scrolling="no" allow="accelerometer *; ambient-light-sensor *; autoplay *; camera *; clipboard-read *; clipboard-write *; encrypted-media *; fullscreen *; geolocation *; gyroscope *; magnetometer *; microphone *; midi *; payment *; picture-in-picture *; screen-wake-lock *; speaker *; sync-xhr *; usb *; web-share *; vibrate *; vr *" sandbox="allow-downloads allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-top-navigation-by-user-activation allow-storage-access-by-user-activation"  frameborder="0" allowfullscreen src="https://player.fcasfs-of.cloud-fs.net?fileID=${optiy.context}${start_fs_mpl_args}&fileView=true${stdart_fs_mpl_argsd}" style="overflow: hidden;   width:100%; height:${Number(optiy.size)}px;"></iframe>`;
}
else if(optiy.type && optiy.type=="link"){   is_player0j= "no";
fsmodal_create_ifir=`<iframe allow="accelerometer *; ambient-light-sensor *; autoplay *; camera *; clipboard-read *; clipboard-write *; encrypted-media *; fullscreen *; geolocation *; gyroscope *; magnetometer *; microphone *; midi *; payment *; picture-in-picture *; screen-wake-lock *; speaker *; sync-xhr *; usb *; web-share *; vibrate *; vr *" sandbox="allow-downloads allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-top-navigation-by-user-activation allow-storage-access-by-user-activation"  frameborder="0" allowfullscreen src="${optiy.context}" style="width:100%; height:${Number(optiy.size)}px;"></iframe>`;
}
else if(optiy.type && optiy.type=="image"){   is_player0j= "no";
fsmodal_create_ifir=`<img src="${optiy.context}" style="user-select:none;pointer-events:none;  width:${Number(optiy.size)}px;" />`;
}
else if(optiy.type && optiy.type=="audio"){    is_player0j= "yes";
if(optiy.poster && optiy.poster!=""){   start_fs_postermpl=optiy.poster;  }
start_fs_mpl = { OSD:true, config:{}, id:"preview_pls",  customtext:{age:""}, nocontrols:0, autoplay:0, loop:0, title:optiy.title, file:optiy.context, poster:start_fs_postermpl, player:1  };   
fsmodal_create_ifir=`<div style="width:100%; height:${Number(optiy.size)}px;"> <div id="preview_pls" style="width:100%; height:${Number(optiy.size)}px;"></div> </div>`;
}
else if(optiy.type && optiy.type=="video"){   is_player0j= "yes";
if(optiy.poster && optiy.poster!=""){   start_fs_postermpl=optiy.poster;  }
start_fs_mpl = { OSD:true, config:{}, id:"preview_pls",  customtext:{age:""}, nocontrols:0, autoplay:0, loop:0, title:optiy.title, file:optiy.context, poster:start_fs_postermpl, player:1  };   
fsmodal_create_ifir=`<div style="width:100%; height:${Number(optiy.size)}px;"> <div id="preview_pls" style="width:100%; height:${Number(optiy.size)}px;"></div> </div>`;
}

fsmodal_createdd=fsmodal_createdd+`  <div style="padding:5px;  text-align:center;  color:#fff; "><br/>${fsmodal_create_ifir} ${fsmodal_create_desci}<br/><br/><br/><br/></div><br/><br/><br/>`;   
 }   }   return fsmodal_createdd;   }

var start_fs_mpl={};   var mfplayeri;   is_player0j= "no";
var fsmodal_createdd="";   var start_fs_postermpl="";

function fsmodal_open(optiy) {   start_fs_mpl={};    fsmodal_createdd="";    start_fs_postermpl="";
							  
if(document.querySelector("#mendu_df")){  document.querySelector("#mendu_df").innerHTML="";   }
							  
 var optincludeplayer= "";   if(optiy){   

if(optiy.include){

if(optiy.include.player && optiy.include.player=="yes"){    optincludeplayer="yes";   }

}
	 
 var  thumsds_efestr="";  
var fsmodal_open_closegi="";   if(optiy.scroll_hide && optiy.scroll_hide=="yes") {  fsmodal_open_closegi=', \''+optiy.scroll_hide+'\'';  }    if(optiy.id && optiy.id!=""){    
 var fsmodal_offpen_tipf="";      var fsmodal_open_tipf="";   if(optiy.tiptext && optiy.tiptext!=""){   fsmodal_offpen_tipf=optiy.tiptext;  fsmodal_open_tipf=' data-tooltip="'+optiy.tiptext+'" data-flow="left"';   }  
 var close_fsmofla_strdd=true;
var close_fsmofla_str='<span class="bngd">  <div style="margin-left:4px;" class="ssclose" onclick="fsmodal_close(\''+optiy.id+'\''+fsmodal_open_closegi+');" '+fsmodal_open_tipf+'><span class="icon"></span></div>  </span>';
 if(optiy.noclose && optiy.noclose==true){   close_fsmofla_str="";  close_fsmofla_strdd=false;  }

 var close_fsmofla_efestr=" eff";
  if(optiy.remove_efect && optiy.remove_efect==true){   close_fsmofla_efestr="";   }

  if(optiy.itens && optiy.menu && optiy.menu==true){   if(fsmodal_clall_menfu(optiy.itens)==true){    var is_menuded=fsmodal_clall_menu(optiy.itens);   if(is_menuded && is_menuded!=""){   thumsds_efestr='  <div class="menulight_scrollmenu">  '+is_menuded+'   </div>  ';   }  }   }

 var momocsifipsl = document.getElementById(optiy.id);   if(momocsifipsl){     momocsifipsl.innerHTML = "";    if(optiy.content){       momocsifipsl.innerHTML = ' <style> .ctx-menu-wrapper{z-index: 999999999; } </style>   <div class="modal'+close_fsmofla_efestr+'" id="fs_modal_'+optiy.id+'" style="display:block;color:#000;">  '+close_fsmofla_str+'       <div style="overflow:auto;" class="modal-content" id="fs_modal_'+optiy.id+'_content">'+fsmodal_create(optiy.content, optincludeplayer)+thumsds_efestr+'</div><br/><br/></div>  <div id="cf_menuu"></div>   ';    

  var mffomocsifipsl = document.getElementById("fs_modal_"+optiy.id); 
 if(optiy.click_close && optiy.click_close==true){    mffomocsifipsl.onclick=function(){fsmodal_close(optiy.id, optiy.scroll_hide);};   }
                                                                                                                                 
function loaded_playerinf(dstart_fs_mpl){   if(typeof fs_Playerjs=="function" && dstart_fs_mpl){   mfplayeri = fs_Playerjs(dstart_fs_mpl);   }   }
                                                                                                                               
if(optincludeplayer && optincludeplayer=="yes" && is_player0j && is_player0j=="yes"){   loaded_playerinf(start_fs_mpl);   }

 if(close_fsmofla_strdd==true){    if(CtxMenu){
  var MainContextMenu = CtxMenu(".modal");
    if(MainContextMenu){ 
    MainContextMenu.addItem(fsmodal_offpen_tipf, function(){
     fsmodal_close(optiy.id, optiy.scroll_hide);
    }, "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA7AAAAOwBeShxvQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAHASURBVFiF7ZY9SytBFIafCTezuSJ3MAtytZSk8P9oqdYmQbDRWylcf0EgxkK7LfWvXEtTJNgpKCayKCE7CYxFzGWTXeMGR/HrrZaZs+d95uMMB7711SVGB8zyssSYPWAFmLPkcwl4CLEjjo91eOJHJNSYv8CWJeOB5oFtjAH4E55IxQSvWjYPa210IA7A1rbH6XcSgDfVBwI4OjrF82oo1XwyRqkmnlfj8PCffQDH+Ukms0i12oqFUKpJtdoik1lEyin7AKXSLFrXkTLPwYFPNnsdMZcyT7d7zuamax/A910KhSxa10mnF6hU7nHdq4h5qTRNqzWbNG30JVxaMmP/UKrJ/v4tjpMjCBoA/7+LxRl8f+zqxcnJkOfkVeD7LsXiDFrXcZwcjpOj2z1nY+PXc+ZxsleGQozfOWsAgyOQMk8QNAiCBun0AuXy3dgStQIwuHDhbQ8fx2h1WAV46rbHVccEEMkBKpVrpMyjdZ31dTVUaqMQ5fKNfYBOp027XaNQyMbe9gFEp3NGr9dLmnbyd+CFevk7YFnvEuDyFf0ukgB4r2ZvTCR3tCsWYuexe12h383aUL8tT6V2LeX71ifSA3f6ubbY1IiBAAAAAElFTkSuQmCC", false, false);
    //MainContextMenu.addSeparator();
    }
    }
 if(MainContextMenu){   MainContextMenu.id("mendu_df");   MainContextMenu.dark(true);   }
 if(CtxMenuBlock){  CtxMenuBlock("#cf_menuu");  }
  }
                                                                                                                                 
 if(optiy.scroll_hide && optiy.scroll_hide=="yes") {  document.body.style.overflow="hidden";  }   }  }    }    }         
 }



if(CtxMenu && MainContextMenu){  }   else  {
const ECtxMenuNames = {
	menu: 			"ctx-menu-wrapper",
	item: 			"ctx-menu-item",
	separator:		"ctx-menu-separator",
	hasIcon: 		"ctx-menu-hasIcon",
	darkInvert: 	"ctx-menu-darkInvert",
};


class CtxMenuManagerClass {
	constructor(){
		this._currentMenuVisible = null;
		this._ctxMenus = new Map();

		document.addEventListener('contextmenu', this._eventOpenMenu.bind(this));

	};

	_eventOpenMenu(e){
		if (e.path != undefined) {
			var menuAndElement = this._traceCtxMenu(e.path);
		} else {
			var menuAndElement = this._msEdgeTraceCtxMenu(e.target);
		}
		
		this.closeCurrentlyOpenedMenu();

		if (menuAndElement == null) {
			return;
		}

		const menu = menuAndElement[0];
		const elementClicked = menuAndElement[1];

		if (menu == false){
			e.preventDefault();
			return;
		}
		else if (menu == true){
			return;
		}
		
		menu._elementClicked = elementClicked;
		menu.openMenu(e.pageX, e.pageY);
		this._currentMenuVisible = menu;

		document.addEventListener("click", CtxCloseCurrentlyOpenedMenus);
		window.addEventListener("resize", CtxCloseCurrentlyOpenedMenus);
		e.preventDefault();
		if(menu._openEventListener != undefined) {
			menu._openEventListener();
		}
		

	};

	closeMenu(menu){
		menu.closeMenu();
		this._currentMenuVisible = null;
		document.removeEventListener("click", CtxCloseCurrentlyOpenedMenus);
		window.removeEventListener("resize", CtxCloseCurrentlyOpenedMenus);
	};

	closeCurrentlyOpenedMenu(){
		if (this._currentMenuVisible != null){
			this.closeMenu(this._currentMenuVisible);
		}
	};

	_traceCtxMenu(path){
		for (var i = 0; i < path.length; ++i) {
			const menu = this._ctxMenusHas(path[i]);
			if (menu != null){
				return [menu, path[i]];
			}
		}
		return null;
	};

	_msEdgeTraceCtxMenu(element){
		while (element != null) {
			const menu = this._ctxMenusHas(element);
			if (menu != null){
				return [menu, element];
			}
			element = element.parentNode;
		}
		return null;
	};

	_ctxMenusHas(element){
		if (this._ctxMenus.has(element)) {
			return this._ctxMenus.get(element);
		}
		if(this._ctxMenus.has("#"+element.id)){
			return   this._ctxMenus.get("#"+element.id);
		}
		if (element.className != undefined){
			const classNames = element.className.split(" ");
			for(var i = 0; i < classNames.length; i++) {
				if(this._ctxMenus.has("."+classNames[i])){
					return this._ctxMenus.get("."+classNames[i]);
				}
			}
		}
		if (this._ctxMenus.has(element.nodeName)) {
			return this._ctxMenus.get(element.nodeName);
		}
		return null;
	};

	getMenuFromElement(element){
		return this._ctxMenus.get(element);
	};

	createNewMenu(element){
		var menu = new CtxMenuClass();
		this._ctxMenus.set(element, menu);
        return menu;
	};

	setCustomContexMenuValue(element, value){
		this._ctxMenus.set(element,  value);
	};

};

class CtxMenuClass {
	constructor(){
		this.menuContainer = document.createElement("div");
		this.menuContainer.className = ECtxMenuNames.menu;
		document.body.appendChild(this.menuContainer);
		this.closeMenu();

		this._elementClicked = undefined;

		this._openEventListener = undefined;
		this._closeEventListener = undefined;
		this._clickEventListener = undefined;
	}

	 dark(che = false) {
     this.menuContainer.classList.remove("mdark"); 
     if (che==true){   this.menuContainer.classList.add("mdark"); }
     }

	id(name = "") {
		if(name && name!=""){    this.menuContainer.setAttribute("id", name);    }
     }
	
addItem(text, customFunction, icon = undefined, disable = false, hide=false, index = undefined, bInvertIconDarkMode = false) {
		var element = document.createElement("div");
		element.className = ECtxMenuNames.item;

		var iconElement = document.createElement("img");
		if (icon != undefined && icon != null) {
			iconElement.src = icon;
			var bHasIcon = true;
			if (bInvertIconDarkMode)
				iconElement.className = ECtxMenuNames.darkInvert;
		} else {
			var bHasIcon = false;
		}
		element.appendChild(iconElement);

		element.innerHTML += text;
        
		if(disable==true){   element.classList.add("disabled");   }
        
        if(hide==true){   element.style.display="none";   }

		element.addEventListener("click", function(){
			this._callItem(customFunction);
		}.bind(this));

		if (bHasIcon){
			this.menuContainer.classList.add(ECtxMenuNames.hasIcon);
		}

		this.menuContainer.insertBefore(element, this.menuContainer.childNodes[index]);
		return element;
	}

	addSeparator(index = undefined){
		var separator = document.createElement("div");
		separator.className = ECtxMenuNames.separator;
		this.menuContainer.insertBefore(separator, this.menuContainer.childNodes[index]);
		return separator
	}

	getItems() {
		return this.menuContainer.childNodes
	}

	getItemAtIndex(index) {
		return this.menuContainer.childNodes[index]
	}

	addEventListener(type, listener){
		switch (type) {
			case "open":
				this._openEventListener = listener;
			case "close": 
				this._closeEventListener = listener;
			case "click":
				this._clickEventListener = listener;
		}
	}

	openMenu(x, y){
		this.menuContainer.style.display = "block";

		const PageWidth = (document.documentElement.clientWidth + document.documentElement.scrollLeft);
		const PageHeight = (document.documentElement.clientHeight + document.documentElement.scrollTop);
		if (x + this.menuContainer.offsetWidth > PageWidth) {
			x = PageWidth - this.menuContainer.offsetWidth - 1;
		}

		if (y + this.menuContainer.offsetHeight > PageHeight) {
			y = PageHeight - this.menuContainer.offsetHeight - 1;
		}

		this.menuContainer.style.left = x + "px";
		this.menuContainer.style.top = y + "px";
	}

	closeMenu(){
		this.menuContainer.style.left = "0px";
		this.menuContainer.style.top = "0px";
		this.menuContainer.style.display = "none";
		if (this._closeEventListener != undefined){
			this._closeEventListener();
		}
	}

	_callItem(customFunction){
		this.closeMenu();
		setTimeout(function(){
			customFunction(this._elementClicked);
			if (this._clickEventListener != undefined) {
				this._clickEventListener(item);
			}
		}.bind(this), 1);
	}
}

function CtxMenu(element){
	if (element == undefined){
		element = document;
	}
	if (ctxMenuManager.getMenuFromElement(element) != undefined) {
		return ctxMenuManager.getMenuFromElement(element);
	}
	return ctxMenuManager.createNewMenu(element);
}

function CtxMenuBlock(element){
	ctxMenuManager.setCustomContexMenuValue(element, false);
}

function CtxMenuDefault(element){
	ctxMenuManager.setCustomContexMenuValue(element, true);
}

function CtxCloseCurrentlyOpenedMenus(){
	ctxMenuManager.closeCurrentlyOpenedMenu();
}

var ctxMenuManager = new CtxMenuManagerClass();

}



