var scriptfd = document.createElement("style");
scriptfd.innerHTML='.modal { user-select:none;     display: none;   position: fixed;   z-index: 10001;  padding-bottom: 10px;padding-top: 100px;  left: 0;transition: 0.3s;  top: 0;  width: 100%;  height: 100%;   overflow: auto;   background-color: rgb(0,0,0);   background-color: rgba(0,0,0,0.9); } .modal .modal-content {  margin: auto;  color:#fff;  display: block;  width: 100%;    transition: 0.3s;}    .modal .modal-content .cdof {  margin: auto;  display: block;  width: 100%%;  height:450px;    transition: 0.3s;} .modal #caption {   margin: auto;  display: block;  width: 85%;  max-width: 700px;  text-align: center;  color: #ccc;  padding: 10px 0;  transition: 0.3s;}  .modal #link {  margin: auto;  display: block;  width: 80%;  max-width: 700px;  text-align: center;  color: #ccc;  padding: 10px 0;transition: 0.3s;}    .modal #link, .modal .modal-content, .modal .modal-content .cdof, .modal #caption {    -webkit-animation-name: zoom;  -webkit-animation-duration: 0.6s;  animation-name: zoom;  animation-duration: 0.6s;}   @-webkit-keyframes zoom {  from {-webkit-transform:scale(0)}   to {-webkit-transform:scale(1)}}   @keyframes zoom {  from {transform:scale(0)}   to {transform:scale(1)}}   .modal .bngd {  position: absolute;  top: 15px;  right: 35px;   }   .modal .ssclose {  color: #f1f1f1;  font-size: 40px;  font-weight: bold;  transition: 0.3s;}   .modal .ssclose:hover,.modal .ssclose:focus {  color: #bbb;  text-decoration: none;  cursor: pointer;transition: 0.3s;}   .modal #btons_cont {  position: absolute;  top: 15px;  left: 35px;  color: #f1f1f1;  font-size: 40px; font-weight: bold;  transition: 0.3s;}   .modal #btons_cont .btns {  color: #f1f1f1;padding:2px;  font-size: 40px;  font-weight: bold;  transition: 0.3s;margin-right:5px;}  .modal #btons_cont .btns .thung{   opacity:0.8;  transition: 0.3s;  }    .modal #btons_cont .btns:focus .thung, .modal #btons_cont .btns:hover .thung{   opacity:1; transition: 0.3s; }  .modal #btons_cont .tcbtns {  color: #f1f1f1;padding:3px;  font-size: 20px;  font-weight: bold; overflow:auto;  transition: 0.3s;margin-right:5px;}    .modal #btons_cont .tcbtns.c {width:100%;position:absolute;text-align:center;}   .modal #btons_cont .btns:hover,.modal #btons_cont .btns:focus {  color: #bbb;  text-decoration: none;  cursor: pointer;transition: 0.3s;}  @media only screen and (max-width: 700px){  .modal .modal-content {    width: 100%;  }}    body::-webkit-scrollbar,.modal::-webkit-scrollbar {  height: 12px;  width: 12px;}  body::-webkit-scrollbar-track,.modal::-webkit-scrollbar-track {  border-radius: 3px;  background-color: #DFE9EB;  border: 1px solid #FFFFFF;} body::-webkit-scrollbar-track:hover,.modal::-webkit-scrollbar-track:hover {  background-color: #B8C0C2;} body::-webkit-scrollbar-track:active,.modal::-webkit-scrollbar-track:active {  background-color: #B8C0C2;}   body::-webkit-scrollbar-thumb,.modal::-webkit-scrollbar-thumb {  border-radius: 8px;  background-color: #170C75;  border: 1px solid #FFFFFF;}  body::-webkit-scrollbar-thumb:hover,.modal::-webkit-scrollbar-thumb:hover {  background-color: #4747A3; }  body::-webkit-scrollbar-thumb:active,.modal::-webkit-scrollbar-thumb:active {  background-color: #065FA3;}  body.darkmode::-webkit-scrollbar-track{  border: 1px solid #333;}   body.darkmode::-webkit-scrollbar-thumb{    border: 1px solid #000;}   .modal .ssclose .icon::before {  display:block;  position:relative;  top:0px;    content: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA7AAAAOwBeShxvQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAHASURBVFiF7ZY9SytBFIafCTezuSJ3MAtytZSk8P9oqdYmQbDRWylcf0EgxkK7LfWvXEtTJNgpKCayKCE7CYxFzGWTXeMGR/HrrZaZs+d95uMMB7711SVGB8zyssSYPWAFmLPkcwl4CLEjjo91eOJHJNSYv8CWJeOB5oFtjAH4E55IxQSvWjYPa210IA7A1rbH6XcSgDfVBwI4OjrF82oo1XwyRqkmnlfj8PCffQDH+Ukms0i12oqFUKpJtdoik1lEyin7AKXSLFrXkTLPwYFPNnsdMZcyT7d7zuamax/A910KhSxa10mnF6hU7nHdq4h5qTRNqzWbNG30JVxaMmP/UKrJ/v4tjpMjCBoA/7+LxRl8f+zqxcnJkOfkVeD7LsXiDFrXcZwcjpOj2z1nY+PXc+ZxsleGQozfOWsAgyOQMk8QNAiCBun0AuXy3dgStQIwuHDhbQ8fx2h1WAV46rbHVccEEMkBKpVrpMyjdZ31dTVUaqMQ5fKNfYBOp027XaNQyMbe9gFEp3NGr9dLmnbyd+CFevk7YFnvEuDyFf0ukgB4r2ZvTCR3tCsWYuexe12h383aUL8tT6V2LeX71ifSA3f6ubbY1IiBAAAAAElFTkSuQmCC");}    [data-tooltip] {position: relative;}   [data-tooltip]::before,[data-tooltip]::after {  text-transform: none;  font-size: 16px;  line-height: 1;  position: absolute;  display: none;  opacity: 0;}   [data-tooltip]::before {  content: "";  border: 6px solid transparent;  z-index: 101;}   [data-tooltip]::after {  content: attr(data-tooltip);  text-align: center;pointer-events:none;  min-width: 3em;  max-width: 21em;  white-space: nowrap;  overflow: hidden;  text-overflow: ellipsis;  padding: 9px 8px;  border-radius: 6px;  background: #333333;  color: #FFFFFF;  z-index: 100;}   [data-tooltip]:hover::before,[data-tooltip]:hover::after {  display: block;}   [data-tooltip=\'\']::before,[data-tooltip=\'\']::after {  display: none !important;}   [data-tooltip]:not([data-flow])::before,[data-tooltip][data-flow^="top"]::before {   bottom: 100%;  border-bottom-width: 0;  border-top-color: #333333;}   [data-tooltip]:not([data-flow])::after,[data-tooltip][data-flow^="top"]::after {  bottom: calc(100% + 5px);}   [data-tooltip]:not([data-flow])::before,[data-tooltip]:not([data-flow])::after,[data-tooltip][data-flow^="top"]::before,[data-tooltip][data-flow^="top"]::after {  left: 50%;  transform: translate(-50%, -.4em);}   [data-tooltip][data-flow^="bottom"]::before {  top: 100%;  border-top-width: 0;  border-bottom-color: #333333;}   [data-tooltip][data-flow^="bottom"]::after {  top: calc(100% + 5px);}   [data-tooltip][data-flow^="bottom"]::before,[data-tooltip][data-flow^="bottom"]::after {  left: 50%;  transform: translate(-50%, .4em);}   [data-tooltip][data-flow^="left"]::before {  top: 50%;  border-right-width: 0;  border-left-color: #333333;  left: calc(0em - 5px);  transform: translate(-.5em, -50%);}   [data-tooltip][data-flow^="left"]::after {  top: 50%;  right: calc(100% + 5px);  transform: translate(-.4em, -50%);}   [data-tooltip][data-flow^="right"]::before {  top: 50%;  border-left-width: 0;  border-right-color: #333333;  right: calc(0em - 7px);  transform: translate(.4em, -50%);}   [data-tooltip][data-flow^="right"]::after {  top: 50%;  left: calc(100% + 5px);  transform: translate(.5em, -50%);}   @keyframes tooltip-vert {  to {    opacity: 1;    transform: translate(-50%, 0);  }}   @keyframes tooltip-horz {  to {    opacity: 1;    transform: translate(0, -50%);  }}   [data-tooltip]:not([data-flow]):hover::before,[data-tooltip]:not([data-flow]):hover::after,[data-tooltip][data-flow^="top"]:hover::before,[data-tooltip][data-flow^="top"]:hover::after,[data-tooltip][data-flow^="bottom"]:hover::before,[data-tooltip][data-flow^="bottom"]:hover::after {  animation: tooltip-vert .5s ease-out forwards;}   [data-tooltip][data-flow^="left"]:hover::before,[data-tooltip][data-flow^="left"]:hover::after,[data-tooltip][data-flow^="right"]:hover::before,[data-tooltip][data-flow^="right"]:hover::after {  animation: tooltip-horz .5s ease-out forwards;}   .darkmode [data-tooltip]::after {   background: #FFFFFF;  color: #333333;}   .darkmode [data-tooltip][data-flow^="top"]::before {  border-top-color: #FFFFFF; }   .darkmode [data-tooltip][data-flow^="bottom"]::before { border-bottom-color: #FFFFFF; }   .darkmode [data-tooltip][data-flow^="left"]::before { border-left-color: #FFFFFF; }   .darkmode [data-tooltip][data-flow^="right"]::before {  border-right-color: #FFFFFF; }     ';  
document.getElementsByTagName("head")[0].appendChild(scriptfd);


function fsmodal_close(id, hifde) {   if(id && id!=""){    var momocsifipsl = document.getElementById(id);   if(momocsifipsl){   momocsifipsl.innerHTML = "";      if(hifde && hifde=="yes") { document.body.style.overflow="auto";   }    }     }   }

function fsmodal_create(optiy) {   
 start_fs_mpl={};   fsmodal_createdd="";    start_fs_postermpl="";
if(optiy){     if(optiy.title && optiy.title!=""){  fsmodal_createdd=fsmodal_createdd+`<h1 style="text-align:center;pointer-events:none;color:#fff;font-weight:bold;" class="">${optiy.title}</h1>`;    }    
if(optiy.context && optiy.context!=""){   
var fsmodal_create_ifir = optiy.context;
if(optiy.type && optiy.type=="link"){
fsmodal_create_ifir=`<iframe allow="accelerometer *; ambient-light-sensor *; autoplay *; camera *; clipboard-read *; clipboard-write *; encrypted-media *; fullscreen *; geolocation *; gyroscope *; magnetometer *; microphone *; midi *; payment *; picture-in-picture *; screen-wake-lock *; speaker *; sync-xhr *; usb *; web-share *; vibrate *; vr *" sandbox="allow-downloads allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-top-navigation-by-user-activation allow-storage-access-by-user-activation"  frameborder="0" allowfullscreen src="${optiy.context}" style="width:100%; height:${Number(optiy.size)}px;"></iframe>`;
}
else if(optiy.type && optiy.type=="image"){
fsmodal_create_ifir=`<img src="${optiy.context}" style="user-select:none;pointer-events:none;  width:${Number(optiy.size)}px;" />`;
}
else if(optiy.type && optiy.type=="audio"){
if(optiy.poster && optiy.poster!=""){   start_fs_postermpl=optiy.poster;  }
start_fs_mpl = { OSD:true, config:{}, id:"preview_pls",  customtext:{age:""}, nocontrols:0, autoplay:0, loop:0, title:optiy.title, file:optiy.context, poster:start_fs_postermpl, player:1  };   
fsmodal_create_ifir=`<div id="preview_pls"></div>`;
}
else if(optiy.type && optiy.type=="video"){
if(optiy.poster && optiy.poster!=""){   start_fs_postermpl=optiy.poster;  }
start_fs_mpl = { OSD:true, config:{}, id:"preview_pls",  customtext:{age:""}, nocontrols:0, autoplay:0, loop:0, title:optiy.title, file:optiy.context, poster:start_fs_postermpl, player:1  };   
fsmodal_create_ifir=`<div id="preview_pls"></div>`;
}

fsmodal_createdd=fsmodal_createdd+`  <div style="text-align:center;  color:#fff; "><br/>${fsmodal_create_ifir}</div><br/><br/><br/>`;   
 }   }   return fsmodal_createdd;   }

var start_fs_mpl={};   var mfplayeri;
var fsmodal_createdd="";   var start_fs_postermpl="";

function fsmodal_open(optiy) {   start_fs_mpl={};    fsmodal_createdd="";    start_fs_postermpl="";
 var optincludeplayer= "";   if(optiy){   

if(optiy.include){

if(optiy.include.player && optiy.include.player=="yes"){
var scriptwwincfd = document.createElement("script");
scriptwwincfd.setAttribute("src", "https://player.fcasfs-of.cloud-fs.net/app/core.js");
document.getElementsByTagName("head")[0].appendChild(scriptwwincfd);
var scriptincfd = document.createElement("script");
scriptincfd.setAttribute("src", "https://player.fcasfs-of.cloud-fs.net/app/api.js");
document.getElementsByTagName("head")[0].appendChild(scriptincfd);
optincludeplayer="yes";
}

}

var fsmodal_open_closegi="";   if(optiy.scroll_hide && optiy.scroll_hide=="yes") {  fsmodal_open_closegi=', \''+optiy.scroll_hide+'\'';  }    if(optiy.id && optiy.id!=""){    
  var fsmodal_open_tipf="";   if(optiy.tiptext && optiy.tiptext!=""){   fsmodal_open_tipf=' data-tooltip="'+optiy.tiptext+'" data-flow="left"';   }  
var close_fsmofla_str='<span class="bngd">  <span style="margin-left:4px;" class="ssclose" onclick="fsmodal_close(\''+optiy.id+'\''+fsmodal_open_closegi+');" '+fsmodal_open_tipf+'><span class="icon"></span></span>  </span>';
 if(optiy.noclose && optiy.noclose==true){   close_fsmofla_str="";   }
 var momocsifipsl = document.getElementById(optiy.id);   if(momocsifipsl){     momocsifipsl.innerHTML = "";    if(optiy.content){       momocsifipsl.innerHTML = ' <div class="modal" style="display:block;color:#000;">  '+close_fsmofla_str+'       <div style="overflow:auto;" class="modal-content" id="fs_modal_'+optiy.id+'_content">'+fsmodal_create(optiy.content)+'</div><br/><br/></div>';    

function loaded_playerinf(dstart_fs_mpl){   if(typeof fs_Playerjs=="function" && dstart_fs_mpl){   mfplayeri = fs_Playerjs(dstart_fs_mpl);   }   }
                                                                                                                               
if(optincludeplayer && optincludeplayer=="yes"){
var sccustrfiptfd = document.createElement("script");
sccustrfiptfd.setAttribute("type", "text/javascript");
sccustrfiptfd.setAttribute("onload", "loaded_playerinf(start_fs_mpl);");
sccustrfiptfd.setAttribute("src", "data:text/javascript,"+encodeURIComponent("loaded_playerinf(start_fs_mpl);"));
document.getElementsByTagName("body")[0].appendChild(sccustrfiptfd); 
 document.getElementsByTagName("body")[0].onload=function(){  loaded_playerinf(start_fs_mpl);   };    
}
 
 if(optiy.scroll_hide && optiy.scroll_hide=="yes") {  document.body.style.overflow="hidden";  }   }  }    }    }         
 }



