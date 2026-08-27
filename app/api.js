var scriptfd = document.createElement("style");
scriptfd.innerHTML='  .btngbutton {  background-color: #fff;  border: none; font-size: 12px;    padding: 8px;    display: inline-block;  color: #000; border-radius:8px;  padding: 15px 32px;  text-align: center;  text-decoration: none;  font-size: 16px;  cursor: pointer;}  .btngbutton:hover {  background-color: #ccc;    }     #ctx-menu-background {  position: absolute;  top: 0; left: 0;  width: 100%;  height: 100%;  z-index: 998;}.ctx-menu-wrapper {  background-color: rgb(250, 250, 250);  box-shadow: 4px 4px 3px -2px rgba(0, 0, 0, .1);  color: black;  padding: 3px 0 3px 0;  border: 1px solid #b1b1b1;  border-radius: 1px;  font-family: "CtxMenuFont";  font-size: 12px;  -moz-user-select: -moz-none;  -khtml-user-select: none;  -webkit-user-select: none;  -ms-user-select: none;  user-select: none;  position: absolute;  z-index: 999999999;  white-space: nowrap;}.ctx-menu-item {  padding: 2px 10px 2px 10px;  border-radius: 1px;  cursor: pointer;  transition: background-color 0.1s;    }.ctx-menu-item.disabled{   pointer-events:none;  opacity:0.6; }.ctx-menu-item:hover {  background-color: rgba(0,0,0,0.13);   }.ctx-menu-item:active {  transition: background-color 0s;  background-color: rgba(0,0,0,0.2);    }.ctx-menu-separator {  height: 1px;  margin: 3px 0 3px 0;  background-color: rgba(0, 0, 0, 0.2);   }.ctx-menu-hasIcon img {  min-width: 16px;  max-width: 16px;  max-height: 16px;  position: relative;  margin-right: 8px;  pointer-events: none;  user-select: none;   }.ctx-menu-item img[src] {  float: left;    }.ctx-menu-hasIcon .ctx-menu-item {  vertical-align: middle;  max-height: 20px;   }  .mdark.ctx-menu-wrapper {    background-color: rgb(36, 39, 40);    color:white;    border-color: #464646;  }  .mdark .ctx-menu-item{    transition: background-color 0s;  }  .mdark .ctx-menu-item:hover{    background-color: rgb(211, 216, 219);    color: black;  }  .mdark .ctx-menu-separator {    background-color: rgba(255, 255, 255, 0.2);  }  .mdark .ctx-menu-item .ctx-menu-darkInvert{    filter: invert(1);  }  .mdark .ctx-menu-item:hover .ctx-menu-darkInvert{    filter: invert(0);  }      .modal { user-select:none;     display: none;   position: fixed;   z-index: 10001;  padding-bottom: 10px;padding-top: 100px;  left: 0;transition: 0.3s;  top: 0;  width: 100%;  height: 100%;   overflow: auto;   background-color: rgb(0,0,0);   background-color: rgba(0,0,0,0.9); } .modal .modal-content {  margin: auto;  color:#fff;  display: block;  width: 100%;    transition: 0.3s;}    .modal .modal-content .cdof {  margin: auto;  display: block;  width: 100%%;  height:450px;    transition: 0.3s;} .modal #caption {   margin: auto;  display: block;  width: 85%;  max-width: 700px;  text-align: center;  color: #ccc;  padding: 10px 0;  transition: 0.3s;}  .modal #link {  margin: auto;  display: block;  width: 80%;  max-width: 700px;  text-align: center;  color: #ccc;  padding: 10px 0;transition: 0.3s;}    .modal.eff #link, .modal.eff .modal-content, .modal.eff .modal-content .cdof, .modal.eff #caption {    -webkit-animation-name: zoom;  -webkit-animation-duration: 0.6s;  animation-name: zoom;  animation-duration: 0.6s;}   @-webkit-keyframes zoom {  from {-webkit-transform:scale(0)}   to {-webkit-transform:scale(1)}}   @keyframes zoom {  from {transform:scale(0)}   to {transform:scale(1)}}    .modal .bngd {  position: absolute;  top: 15px;  right: 35px;   }    .modal .bngl {  position: absolute;  top: 15px;  left: 12px;  overflow:auto;   width: 60%; }   .modal .ssclose,.modal .ssprev, .modal .ssnext {  color: #f1f1f1;  font-size: 40px;  font-weight: bold;  transition: 0.3s;}   .modal .ssclose:hover,.modal .ssclose:focus, .modal .ssprev:hover, .modal .ssprev:focus, .modal .ssnext:hover, .modal .ssnext:focus {  color: #bbb;  text-decoration: none;  cursor: pointer;transition: 0.3s;}   .modal #btons_cont {  position: absolute;  top: 15px;  left: 35px;  color: #f1f1f1;  font-size: 40px; font-weight: bold;  transition: 0.3s;}   .modal #btons_cont .btns {  color: #f1f1f1;padding:2px;  font-size: 40px;  font-weight: bold;  transition: 0.3s;margin-right:5px;}  .modal #btons_cont .btns .thung{   opacity:0.8;  transition: 0.3s;  }    .modal .ssclose .icon {    display: inline-block;    position: relative;    top: 3px;    height: 32px;    width: 32px;    background-image: url("data:image/png;base64,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");    background-size: cover;    background-repeat: no-repeat;   }    .modal .ssprev .icon::before {  display:block;  position:relative;  top:0px;    content: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAF5JREFUSIntlFEKgCAQBYc8ZJLnSBCsixfoT5J/grhhsAP7O28XlgfKnzGS8gDcgJWQRyA9s42W+0p+qPwTuavksUewDF2nk533ilNDpggRrYpCAC5glQqASV5caZMBe/ojpTunBlAAAAAASUVORK5CYII=");}      .modal #btons_cont .btns:focus .thung, .modal #btons_cont .btns:hover .thung{   opacity:1; transition: 0.3s; }  .modal #btons_cont .tcbtns {  color: #f1f1f1;padding:3px;  font-size: 20px;  font-weight: bold; overflow:auto;  transition: 0.3s;margin-right:5px;}    .modal #btons_cont .tcbtns.c {width:100%;position:absolute;text-align:center;}   .modal #btons_cont .btns:hover,.modal #btons_cont .btns:focus {  color: #bbb;  text-decoration: none;  cursor: pointer;transition: 0.3s;}  @media only screen and (max-width: 700px){  .modal .modal-content {    width: 100%;  }}    body::-webkit-scrollbar,.modal::-webkit-scrollbar {  height: 12px;  width: 12px;}  body::-webkit-scrollbar-track,.modal::-webkit-scrollbar-track {  border-radius: 3px;  background-color: #DFE9EB;  border: 1px solid #FFFFFF;} body::-webkit-scrollbar-track:hover,.modal::-webkit-scrollbar-track:hover {  background-color: #B8C0C2;} body::-webkit-scrollbar-track:active,.modal::-webkit-scrollbar-track:active {  background-color: #B8C0C2;}   body::-webkit-scrollbar-thumb,.modal::-webkit-scrollbar-thumb {  border-radius: 8px;  background-color: #170C75;  border: 1px solid #FFFFFF;}  body::-webkit-scrollbar-thumb:hover,.modal::-webkit-scrollbar-thumb:hover {  background-color: #4747A3; }  body::-webkit-scrollbar-thumb:active,.modal::-webkit-scrollbar-thumb:active {  background-color: #065FA3;}  body.darkmode::-webkit-scrollbar-track{  border: 1px solid #333;}   body.darkmode::-webkit-scrollbar-thumb{    border: 1px solid #000;}      [data-tooltip] {position: relative;}   [data-tooltip]::before,[data-tooltip]::after {  text-transform: none;  font-size: 16px;  line-height: 1;  position: absolute;  display: none;  opacity: 0;}   [data-tooltip]::before {  content: "";  border: 6px solid transparent;  z-index: 101;}   [data-tooltip]::after {  content: attr(data-tooltip);  text-align: center;pointer-events:none;  min-width: 3em;  max-width: 21em;  white-space: nowrap;  overflow: hidden;  text-overflow: ellipsis;  padding: 9px 8px;  border-radius: 6px;  background: #333333;  color: #FFFFFF;  z-index: 100;}   [data-tooltip]:hover::before,[data-tooltip]:hover::after {  display: block;}   [data-tooltip=\'\']::before,[data-tooltip=\'\']::after {  display: none !important;}   [data-tooltip]:not([data-flow])::before,[data-tooltip][data-flow^="top"]::before {   bottom: 100%;  border-bottom-width: 0;  border-top-color: #333333;}   [data-tooltip]:not([data-flow])::after,[data-tooltip][data-flow^="top"]::after {  bottom: calc(100% + 5px);}   [data-tooltip]:not([data-flow])::before,[data-tooltip]:not([data-flow])::after,[data-tooltip][data-flow^="top"]::before,[data-tooltip][data-flow^="top"]::after {  left: 50%;  transform: translate(-50%, -.4em);}   [data-tooltip][data-flow^="bottom"]::before {  top: 100%;  border-top-width: 0;  border-bottom-color: #333333;}   [data-tooltip][data-flow^="bottom"]::after {  top: calc(100% + 5px);}   [data-tooltip][data-flow^="bottom"]::before,[data-tooltip][data-flow^="bottom"]::after {  left: 50%;  transform: translate(-50%, .4em);}   [data-tooltip][data-flow^="left"]::before {  top: 50%;  border-right-width: 0;  border-left-color: #333333;  left: calc(0em - 5px);  transform: translate(-.5em, -50%);}   [data-tooltip][data-flow^="left"]::after {  top: 50%;  right: calc(100% + 5px);  transform: translate(-.4em, -50%);}   [data-tooltip][data-flow^="right"]::before {  top: 50%;  border-left-width: 0;  border-right-color: #333333;  right: calc(0em - 7px);  transform: translate(.4em, -50%);}   [data-tooltip][data-flow^="right"]::after {  top: 50%;  left: calc(100% + 5px);  transform: translate(.5em, -50%);}   @keyframes tooltip-vert {  to {    opacity: 1;    transform: translate(-50%, 0);  }}   @keyframes tooltip-horz {  to {    opacity: 1;    transform: translate(0, -50%);  }}   [data-tooltip]:not([data-flow]):hover::before,[data-tooltip]:not([data-flow]):hover::after,[data-tooltip][data-flow^="top"]:hover::before,[data-tooltip][data-flow^="top"]:hover::after,[data-tooltip][data-flow^="bottom"]:hover::before,[data-tooltip][data-flow^="bottom"]:hover::after {  animation: tooltip-vert .5s ease-out forwards;}   [data-tooltip][data-flow^="left"]:hover::before,[data-tooltip][data-flow^="left"]:hover::after,[data-tooltip][data-flow^="right"]:hover::before,[data-tooltip][data-flow^="right"]:hover::after {  animation: tooltip-horz .5s ease-out forwards;}   .darkmode [data-tooltip]::after {   background: #FFFFFF;  color: #333333;}   .darkmode [data-tooltip][data-flow^="top"]::before {  border-top-color: #FFFFFF; }   .darkmode [data-tooltip][data-flow^="bottom"]::before { border-bottom-color: #FFFFFF; }   .darkmode [data-tooltip][data-flow^="left"]::before { border-left-color: #FFFFFF; }   .darkmode [data-tooltip][data-flow^="right"]::before {  border-right-color: #FFFFFF; }      .modal::-webkit-scrollbar, .modal .modal-content::-webkit-scrollbar {  height: 12px;  width: 12px;}   .modal::-webkit-scrollbar-track, .modal .modal-content::-webkit-scrollbar-track {  border-radius: 3px;  background-color: #DFE9EB;  border: 1px solid #FFFFFF;} .modal::-webkit-scrollbar-track:hover, .modal .modal-content::-webkit-scrollbar-track:hover {  background-color: #B8C0C2;}  .modal::-webkit-scrollbar-track:active, .modal .modal-content::-webkit-scrollbar-track:active {  background-color: #B8C0C2;}  .modal::-webkit-scrollbar-thumb, .modal .modal-content::-webkit-scrollbar-thumb {  border-radius: 8px;  background-color: #170C75;  border: 1px solid #FFFFFF;} .modal::-webkit-scrollbar-thumb:hover, .modal .modal-content::-webkit-scrollbar-thumb:hover {  background-color: #4747A3;} .modal::-webkit-scrollbar-thumb:active, .modal .modal-content::-webkit-scrollbar-thumb:active {  background-color: #065FA3;}   .modal .modal-content::-webkit-scrollbar-track{  border: 1px solid #333;}  .modal .modal-content::-webkit-scrollbar-thumb{    border: 1px solid #000;}       .modal .menulight_scrollmenu {   padding: 8px;   overflow: auto;  background-color: #333;  text-align: center;   white-space: nowrap;   }     .modal .menulight_scrollmenu button {  background-color: #333; display: inline-block;  color: #fff;  text-align: center; cursor:pointer;     padding: 14px;  text-decoration: none;   border-radius: 20px;    margin-left: 4px;    margin-right: 4px;  }    .modal .menulight_scrollmenu button:hover, .modal .menulight_scrollmenu button.active {  background-color: #777;  color:#fff;  }     .modal .menulight_scrollmenu button.active {  pointer-events:none;  opacity: 0.7;   }   .modal .menulight_scrollmenu {    border-radius: 20px;   z-index: 999999;   position: absolute;    top: 11px;    width: 84%;    margin: 0 auto;     left: 9px;       }    ';  
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



function fsmodal_cl_menu(id) {
    if (id && id !== "") {
        var element = document.getElementById(id);
        if (element) {            element.click();        }
    }
}




function fsmodal_clall_menu_arrays(id, dcurrent_id) {
  var fsmodal_clall_menussd = "";
 var btunfprecurrent_id = "";
 var btunfprnextent_id = "";
  if (id && id.target && typeof dcurrent_id === 'number') {
    var target = id.target;
    var parentNode = target.parentNode;
    if (parentNode) {
      var buttons = parentNode.getElementsByTagName("button");
		 btunfprecurrent_id = "";
        btunfprnextent_id = "";
       if (buttons.length > 0 && dcurrent_id >= 0 && dcurrent_id < buttons.length) {
        var currentButton = buttons[dcurrent_id];
        if (currentButton.getAttribute('id')) {
          var currentId = currentButton.getAttribute('id');
		  if (currentId==0) {
            var nextButton = buttons[dcurrent_id + 1];
            var nextId = nextButton.getAttribute('id');
            if (nextId) {
              btunfprnextent_id = `<div style="margin-left:4px;" class="btngbutton ssnext" onclick="fsmodal_cl_menu('${nextId}');"><span class="icon"></span></div>`;
            }
          }
		  if (dcurrent_id + 1 < buttons.length) {
            var nextButton = buttons[dcurrent_id + 1];
            var nextId = nextButton.getAttribute('id');
            if (nextId) {
              btunfprnextent_id = `<div style="margin-left:4px;" class="btngbutton ssnext" onclick="fsmodal_cl_menu('${nextId}');"><span class="icon"></span></div>`;
            }
          }
          if (dcurrent_id - 1 >= 0) {
            var prevButton = buttons[dcurrent_id - 1];
            var prevId = prevButton.getAttribute('id');
            if (prevId) {
              btunfprecurrent_id = `<div style="margin-left:4px;" class="btngbutton ssprev" onclick="fsmodal_cl_menu('${prevId}');"><span class="icon"></span></div>`;
            }
          }
          if (dcurrent_id <= 0) {            btunfprecurrent_id = "";          }
          if (dcurrent_id == (buttons.length - 1)) {            btunfprnextent_id = "";          }
          //if (target.getAttribute('id') && target.getAttribute('id') === currentId) {            btunfprnextent_id = "";          }
          fsmodal_clall_menussd = btunfprecurrent_id + " " + btunfprnextent_id;
          if (dcurrent_id >= buttons.length) {            fsmodal_clall_menussd = "";          }
        }
      }
    }
  }
  return fsmodal_clall_menussd;
}


														


function fsmodal_clall_menu(id, calsd) {										
  var fsmodal_clall_menussd = "";
  var fsmddodal_clall_menussd = "";
	var fsmddodal_clall_menuss_calld = "";
	if (calsd && calsd !== "") {   fsmddodal_clall_menuss_calld=calsd;  }
  var dcurrent_id = 0;
  if (id.target && id.target.parentNode) {
    var buttons = id.target.parentNode.getElementsByTagName("button");
    if (buttons.length >= 0) {
      for (var isd = 0; isd < buttons.length; isd++) {
        var button = buttons[isd];
        var buttonId = button.getAttribute('id');
        if (buttonId && buttonId !== "") {
          var fsmodal_clall_menu_acuit = "";
          if (id.target.getAttribute('id') && id.target.getAttribute('id') !== "") {
            if (buttonId === id.target.getAttribute('id')) {
              dcurrent_id = isd;
              fsmodal_clall_menu_acuit = "class='active'";
            }
          }
          fsmodal_clall_menussd += `<button ${fsmodal_clall_menu_acuit} onclick="${fsmddodal_clall_menuss_calld}  fsmodal_cl_menu('${buttonId}')">${button.textContent}</button>`;
        }
      }
      fsmddodal_clall_menussd = "";
    }
  }
  return { menu:fsmodal_clall_menussd, id:dcurrent_id };
}



function fsmodal_call_menu(id) {
    var fsmodal_call_menu_sd = false;
    if (id.target) {
        if (id.target.parentNode) {
            if (id.target.parentNode.getElementsByTagName("button").length > 0) {
                fsmodal_call_menu_sd = true;
            }
        }
    }
    return fsmodal_call_menu_sd;
}
    

function fsmodal_close(id, hide) {
    if (id && id !== "") {
        var mdpl1 = document.getElementById("mdpl1");
        if (mdpl1) {            mdpl1.remove();        }
        var mdpl2 = document.getElementById("mdpl2");
        if (mdpl2) {            mdpl2.remove();        }
        var menuDiv = document.querySelector("#mendu_df");
        if (menuDiv) {
            menuDiv.innerHTML = "";
        }
        var modalElement = document.getElementById(id);
        if (modalElement) {
            modalElement.innerHTML = "";
            if (hide && hide === "yes") {
                document.body.style.overflow = "auto";
            }
        }
    }
}


var is_player0j= "no";
    var fsmodal_clall_menussd = "";
    var dcurrent_id = 0;
    var is_player0j = "no";
    var start_fs_mpl = {};
    var fsmodal_createdd = "";
    var start_fs_postermpl = "";

function fsmodal_create(optiy, app) {
     fsmodal_clall_menussd = "";
     dcurrent_id = 0;
     is_player0j = "no";
     start_fs_mpl = {};
     fsmodal_createdd = "";
     start_fs_postermpl = "";

    if (optiy) {
        var fsmodal_create_desci = "";
        if (optiy.description && optiy.description != "") {
            fsmodal_create_desci = "<br/><br/><span>" + optiy.description + "</span>";
        }
        if (optiy.title && optiy.title != "") {
            fsmodal_createdd += `<h1 style="text-align:center;pointer-events:none;color:#fff;font-weight:bold;">${optiy.title}</h1>`;
        }
        if (optiy.context && optiy.context != "") {
            var fsmodal_create_ifir = optiy.context;
            if (app && app == "yes" && optiy.type && optiy.type == "id") {
                is_player0j = "no";
                var start_fs_mpl_args = "";
                var stdart_fs_mpl_argsd = "";
                if (optiy.view && optiy.view == "info") {
                    start_fs_mpl_args = "&info=on";
                } else if (optiy.view && optiy.view == "list") {
                    start_fs_mpl_args = "&list=on";
                }
                if (optiy.config) {
                    if (optiy.config.pos && optiy.config.pos != "") {
                        stdart_fs_mpl_argsd += "&pos=" + optiy.config.pos;
                    }
                    if (optiy.config.select && optiy.config.select != "") {
                        stdart_fs_mpl_argsd += "&fileSelect=" + optiy.config.select;
                    }
                }
                fsmodal_create_ifir = `<iframe scrolling="no" allow="accelerometer *; ambient-light-sensor *; autoplay *; camera *; clipboard-read *; clipboard-write *; encrypted-media *; fullscreen *; geolocation *; gyroscope *; magnetometer *; microphone *; midi *; payment *; picture-in-picture *; screen-wake-lock *; speaker *; sync-xhr *; usb *; web-share *; vibrate *; vr *" sandbox="allow-downloads allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-top-navigation-by-user-activation allow-storage-access-by-user-activation" frameborder="0" allowfullscreen src="https://player.fcasfs-of.cloud-fs.net?fileID=${optiy.context}${start_fs_mpl_args}&fileView=true${stdart_fs_mpl_argsd}" style="overflow: hidden; width:100%; height: ${Number(optiy.size)}px;   display: block; "></iframe>`;
            } else if (optiy.type && optiy.type == "link") {
                is_player0j = "no";
                fsmodal_create_ifir = `<iframe allow="accelerometer *; ambient-light-sensor *; autoplay *; camera *; clipboard-read *; clipboard-write *; encrypted-media *; fullscreen *; geolocation *; gyroscope *; magnetometer *; microphone *; midi *; payment *; picture-in-picture *; screen-wake-lock *; speaker *; sync-xhr *; usb *; web-share *; vibrate *; vr *" sandbox="allow-downloads allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-top-navigation-by-user-activation allow-storage-access-by-user-activation" frameborder="0" allowfullscreen src="${optiy.context}" style="width:100%; height: ${Number(optiy.size)}px;  display: block; "></iframe>`;
            } else if (optiy.type && optiy.type == "image") {
                is_player0j = "no";
                fsmodal_create_ifir = `<img src="${optiy.context}" style="user-select:none;pointer-events:none; width:${Number(optiy.size)}px;" />`;
            } else if (optiy.type && optiy.type == "audio") {
                is_player0j = "yes";
                if (optiy.poster && optiy.poster != "") {
                    start_fs_postermpl = optiy.poster;
                }
                start_fs_mpl = {
                    OSD: true,
                    config: {},
                    id: "preview_pls",
                    customtext: { age: "" },
                    nocontrols: 0,
                    autoplay: 0,
                    loop: 0,
                    title: optiy.title,
                    file: optiy.context,
                    poster: start_fs_postermpl,
                    player: 1
                };
                fsmodal_create_ifir = `<div id="preview_pls" style="width:100%; height:${Number(optiy.size)}px;"></div>`;
            } else if (optiy.type && optiy.type == "video") {
                is_player0j = "yes";
                if (optiy.poster && optiy.poster != "") {
                    start_fs_postermpl = optiy.poster;
                }
                start_fs_mpl = {
                    OSD: true,
                    config: {},
                    id: "preview_pls",
                    customtext: { age: "" },
                    nocontrols: 0,
                    autoplay: 0,
                    loop: 0,
                    title: optiy.title,
                    file: optiy.context,
                    poster: start_fs_postermpl,
                    player: 1
                };
                fsmodal_create_ifir = `<div id="preview_pls" style="width:100%; height:${Number(optiy.size)}px;"></div>`;
            }
            fsmodal_createdd += `<div style="aspect-ratio: 16 / 9;  position: absolute; width: 100%;   padding:5px; text-align:center; color:#fff;">${fsmodal_create_ifir} ${fsmodal_create_desci}<br/><br/><br/><br/></div><br/><br/><br/>`;
        }
        return fsmodal_createdd;
    }
}


function loaded_playerinf(dstart_fs_mpl = {}) {
  if (typeof fs_Playerjs === "function") {
       mfplayeri = fs_Playerjs(dstart_fs_mpl);
   }
}


var start_fs_mpl = {};
var mfplayeri;
function mfplayeridd(){  }
var is_player0j = "no";
var fsmodal_createdd = "";
var start_fs_postermpl = "";

function fsmodal_open(optiy) {
    start_fs_mpl = {};
    fsmodal_createdd = "";
    start_fs_postermpl = "";
function mfplayeridd(){  }
	
    if (document.querySelector("#mendu_df")) {
        document.querySelector("#mendu_df").innerHTML = "";
    }	

    var optincludeplayer = "";
    if (optiy && optiy.include && optiy.include.player == "yes") {
        optincludeplayer = "yes";
    }
    var thumsds_efestr = "";
    var fsmodal_open_closegi = "";
    if (optiy && optiy.scroll_hide && optiy.scroll_hide == "yes") {
        fsmodal_open_closegi = ", '" + optiy.scroll_hide + "'";
    }
    if (optiy && optiy.id != "") {
        var fsmodal_offpen_tipf = "";
        var fsmodal_open_tipf = "";
        if (optiy.tiptext && optiy.tiptext != "") {
            fsmodal_offpen_tipf = optiy.tiptext;
            fsmodal_open_tipf = ' data-tooltip="' + optiy.tiptext + '" data-flow="left"';
        }
        var close_fsmofla_strdd = true;
        var close_fsmofla_str = `<div style="margin-left:4px;" class="ssclose" onclick="fsmodal_close('${optiy.id}'${fsmodal_open_closegi});" ${fsmodal_open_tipf}><span class="icon"></span></div>`;
        if (optiy.noclose && optiy.noclose === true) {
            close_fsmofla_str = "";
            close_fsmofla_strdd = false;
        }
        var close_fsmofla_efestr = " eff";
        var btnys_fsmofla_efestr = "";
        if (optiy.remove_efect && optiy.remove_efect === true) {
            close_fsmofla_efestr = "";
        }
        if (optiy.itens && optiy.menu === true) {
            if (fsmodal_call_menu(optiy.itens) === true) {
                var is_menuded = fsmodal_clall_menu(optiy.itens, `fsmodal_close('${optiy.id}', '${optiy.scroll_hide}'); `);
                if (is_menuded && is_menuded.menu && is_menuded.menu != "") {
                    if (optiy.menu_btns && optiy.menu_btns === true) {
                       if(is_menuded.id){   btnys_fsmofla_efestr = fsmodal_clall_menu_arrays(optiy.itens, is_menuded.id);   }
                    }
                    thumsds_efestr = `<div class="menulight_scrollmenu">${is_menuded.menu}</div>`;
                }
            }
        }
        var momocsifipsl = document.getElementById(optiy.id);
        if (momocsifipsl) {
momocsifipsl.innerHTML='';

var scrcontedd = document.createElement("div");
			scrcontedd.innerHTML = `
                <style></style>
                <div class="modal${close_fsmofla_efestr}" id="fs_modal_${optiy.id}" style="display:block; color:#000;">
                    <span class="bngl">${btnys_fsmofla_efestr}</span>
                    <span class="bngd" ${fsmodal_open_tipf}>${close_fsmofla_str}</span>
                    <div style="overflow:auto;" class="modal-content" id="fs_modal_${optiy.id}_content">
                        ${fsmodal_create(optiy.content, optiy.include ? optiy.include.player : "")}
                    </div>
                    <br/><br/>${thumsds_efestr}<br/><br/>
                </div>
                <div id="cf_menuu"></div>
            `;
momocsifipsl.appendChild(scrcontedd);    

            var mffomocsifipsl = document.getElementById("fs_modal_" + optiy.id);
            if (mffomocsifipsl && optiy.click_close && optiy.click_close === true) {
                mffomocsifipsl.onclick = function () {
                    fsmodal_close(optiy.id, optiy.scroll_hide);
                };
            }
            if (optincludeplayer === "yes" && is_player0j === "yes") {
                function mfplayeridd(){  if (typeof loaded_playerinf === "function"){ loaded_playerinf(start_fs_mpl); }  }
            mfplayeridd();		}

var scriptincfd = document.createElement("script");
scriptincfd.setAttribute("src", "https://player.fcasfs-of.cloud-fs.net/app/api.js");
scriptincfd.setAttribute("onload", 'if (typeof loaded_playerinf === "function"){ loaded_playerinf(start_fs_mpl); }');
document.getElementsByTagName("body")[0].appendChild(scriptincfd);    

			
            if (close_fsmofla_strdd === true) {
               
            }
            if (optiy.scroll_hide && optiy.scroll_hide == "yes") {
                document.body.style.overflow = "hidden";
            }
        }
    }
}





