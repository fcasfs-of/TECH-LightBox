function fcasfs_lightbox_getsiteof(obj){  const h = obj && obj.host && obj.host.trim() ? obj.host.trim() : "", p = obj && obj.protocolo && obj.protocolo.trim() ? obj.protocolo.trim() : "", s = h ? h.split(".")[0].trim() : "", hc = h && h.split(".").length > 1 ? h.split(".").slice(1).join(".").trim() : ""; return { protocolo: p, subdominio: s, hostCompleto: hc, urlCompleta: p && h ? p + h : "" };    }
function fcasfs_lightbox_criarLinkDoObjeto(d) { if (!d || !d.pagina || !d.pagina.trim()) return ""; var f = function(obj, p) { p = p || ""; var res = []; for (var k in obj) { if (obj.hasOwnProperty(k)) { var n = p ? p + "." + k : k; if (obj[k] && typeof obj[k] === "object") { res = res.concat(f(obj[k], n)); } else { res.push({ k: n, v: obj[k] }); } } } return res; }; var url = "/" + d.pagina.trim(); if (d.arquivo && d.arquivo.trim()) url += "/" + d.arquivo.trim(); var filtro = {}; for (var k in d) { if (["pagina", "arquivo", "hash"].indexOf(k) === -1) filtro[k] = d[k]; } var itens = f(filtro); var params = []; for (var i = 0; i < itens.length; i++) { var item = itens[i]; if (item.v && String(item.v).trim()) { var strV = String(item.v).trim(); var isLnk = strV.indexOf("http://") === 0 || strV.indexOf("https://") === 0; params.push(item.k + "=" + (isLnk ? encodeURIComponent(strV) : strV)); } } if (params.length > 0) url += "?" + params.join("&"); if (d.hash && d.hash.trim()) url += "#" + d.hash.trim(); return url; }

function fcasfs_lightbox_def_injetarEstilo(config) { if (config && config.id && config.css && config.id.trim() !== "" && config.css.trim() !== "" && !document.getElementById(config.id.trim())) { var css = config.css.trim(), el = document.createElement("style"); if (config.vars) { for (var k in config.vars) { if (config.vars.hasOwnProperty(k) && config.vars[k] !== null && config.vars[k] !== undefined && config.vars[k].toString().trim() !== "") { css = css.split("[" + k + "]").join(config.vars[k]); } } } el.id = config.id.trim(); el.innerHTML = css; (document.head || document.getElementsByTagName("head") || document.documentElement).appendChild(el); } }       

function fcasfs_lightbox_def_injetarScript(config) { if (!config || !config.id || !config.src || !config.app || config.id.trim() === "" || config.src.trim() === "" || config.app.trim() === "") return; var idTrimmed = config.id.trim(); if (document.getElementById(idTrimmed)) return; var baseUrl = (config.base && config.base.trim() !== "") ? config.base.trim() : ""; var appUrl = config.app.trim(); var folderUrl = (config.folder && config.folder.trim() !== "") ? config.folder.trim() + "/" : ""; var el = document.createElement("script"); el.id = idTrimmed; el.src = config.src.trim().replaceAll("[URL]", baseUrl).replaceAll("[url]", baseUrl).replaceAll("[APP]", appUrl).replaceAll("[app]", appUrl).replaceAll("[FOLDER]", folderUrl).replaceAll("[folder]", folderUrl); if (config.onload && config.onload.trim() !== "") el.setAttribute("onload", config.onload.replaceAll("[id]", el.id).replaceAll("[ID]", el.id)); (document.head || document.getElementsByTagName("head")[0] || document.documentElement).appendChild(el); }
function fcasfs_lightbox_def_injetarScriptBody(config) { if (!config || !config.id || !config.src || !config.app || config.id.trim() === "" || config.src.trim() === "" || config.app.trim() === "") return; var idTrimmed = config.id.trim(); if (document.getElementById(idTrimmed)) return; var baseUrl = (config.base && config.base.trim() !== "") ? config.base.trim() : ""; var appUrl = config.app.trim(); var folderUrl = (config.folder && config.folder.trim() !== "") ? config.folder.trim() + "/" : ""; var el = document.createElement("script"); el.id = idTrimmed; el.src = config.src.trim().replaceAll("[URL]", baseUrl).replaceAll("[url]", baseUrl).replaceAll("[APP]", appUrl).replaceAll("[app]", appUrl).replaceAll("[FOLDER]", folderUrl).replaceAll("[folder]", folderUrl); if (config.onload && config.onload.trim() !== "") el.setAttribute("onload", config.onload.replaceAll("[id]", el.id).replaceAll("[ID]", el.id)); (document.body || document.getElementsByTagName("body")[0] || document.documentElement).appendChild(el); }
function fcasfs_lightbox_def_icriarLink(c) { if (!c || !c.base || !c.app) return ""; let url = c.base + "/" + c.app + (c.folder ? "/" + c.folder : "") + (c.file ? "/" + c.file : ""); if (c.args && typeof c.args === "object") { let p = []; for (let k in c.args) { if (k && c.args[k] !== undefined && c.args[k] !== null && c.args[k] !== "") p.push(k + "=" + c.args[k]); } if (p.length > 0) url += "?" + p.join("&"); } return url; }

var fcasfs_lightbox_baseUrl = fcasfs_lightbox_getsiteof({ host: "fcasfs-of.cloud-fs.net", protocolo: "https://" }).urlCompleta;

var fcasfs_lightbox_basescicsn={
["close1"]:"data:image/png;base64,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",
["scroll1"]:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAXElEQVRIS+2QsQ3AMAgE4/1gWtgPy1aQUkT8F0llrqL6EzciIq4fGS1AdCLIYYnMbL+tqncADJ1ojbv7vkWEllCC53jCSqDgbTxhJKWgGk+QpBR8QQsgnQjSiSATglp6uTIpTOsAAAAQZGVCR0ZFMTBENzQzOEQwMzE0MTMe++MmAAAAAElFTkSuQmCC",
["scroll2"]:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAYklEQVRIS+3QQQrAMAhEUXM/Pa3ezzKbUErImEIXBd/OjR9mZGbKh0YHmJ6I6omo7UTuLhEx7xVVFTOb99M2ALsIew40AKtI5TmUAnCPVJ9DOQCIQPU5HAXe6ADVE1H/n+gC0wB6uagAqnEAAAAQZGVCR0JBMUE1RDUyOThDNUI1RTBIxFHUAAAAAElFTkSuQmCC"	
};

fcasfs_lightbox_def_injetarEstilo({
    id: "fcasfs_style-core-style",
    css: ' .fcas_lightbox_sem-scroll { overflow: hidden !important; }   .modal_fs_lightbox { user-select:none;     display: none;   position: fixed;   z-index: 10001;  padding-bottom: 10px;padding-top: 100px;  left: 0;transition: 0.3s;  top: 0;  width: 100%;  height: 100%;   overflow: auto;   background-color: rgb(0,0,0);   background-color: rgba(0,0,0,0.9); } .modal_fs_lightbox .modal_fs_lightbox-content {  margin: auto;  color:#fff;  display: block;  width: 100%;    transition: 0.3s;}    .modal_fs_lightbox .modal_fs_lightbox-content .cdof {  margin: auto;  display: block;  width: 100%%;  height:450px;    transition: 0.3s;} .modal_fs_lightbox #caption {   margin: auto;  display: block;  width: 85%;  max-width: 700px;  text-align: center;  color: #ccc;  padding: 10px 0;  transition: 0.3s;}  .modal_fs_lightbox #link {  margin: auto;  display: block;  width: 80%;  max-width: 700px;  text-align: center;  color: #ccc;  padding: 10px 0;transition: 0.3s;}     .modal_fs_lightbox.reff, .modal_fs_lightbox.reff * {     animation: none !important;  transition: none !important;   }   .modal_fs_lightbox.eff, .modal_fs_lightbox.eff * {    transition: all 0.2s linear !important;   }  .modal_fs_lightbox.eff #link, .modal_fs_lightbox.eff .modal_fs_lightbox-content, .modal_fs_lightbox.eff .modal_fs_lightbox-content .cdof, .modal_fs_lightbox.eff #caption {    -webkit-animation-name: modal_fs_lightbox_zoom;  -webkit-animation-duration: 0.6s;  animation-name: modal_fs_lightbox_zoom;  animation-duration: 0.6s;}   @-webkit-keyframes modal_fs_lightbox_zoom {  from {-webkit-transform:scale(0)}   to {-webkit-transform:scale(1)}}   @keyframes modal_fs_lightbox_zoom {  from {transform:scale(0)}   to {transform:scale(1)}}    .modal_fs_lightbox .bngd {  position: absolute;  top: 12px;  right: 20px;   }    .modal_fs_lightbox .bngl {  position: absolute;  top: 15px;  left: 12px;  overflow:auto;   width: 60%; }    .modal_fs_lightbox .ssclose,.modal_fs_lightbox .ssprev, .modal_fs_lightbox .ssnext {  color: #f1f1f1;  font-size: 40px;  font-weight: bold;  transition: 0.3s;}   .modal_fs_lightbox .ssclose:hover,.modal_fs_lightbox .ssclose:focus, .modal_fs_lightbox .ssprev:hover, .modal_fs_lightbox .ssprev:focus, .modal_fs_lightbox .ssnext:hover, .modal_fs_lightbox .ssnext:focus {  color: #bbb;  text-decoration: none;  cursor: pointer;transition: 0.3s;}   .modal_fs_lightbox #btons_cont {  position: absolute;  top: 15px;  left: 35px;  color: #f1f1f1;  font-size: 40px; font-weight: bold;  transition: 0.3s;}   .modal_fs_lightbox #btons_cont .btns {  color: #f1f1f1;padding:2px;  font-size: 40px;  font-weight: bold;  transition: 0.3s;margin-right:5px;}  .modal_fs_lightbox #btons_cont .btns .thung{   opacity:0.8;  transition: 0.3s;  }   .modal_fs_lightbox .ssclose {   display: inline-block;    position: relative;    top: 3px;     }   .modal_fs_lightbox .ssclose .icon {   pointer-events:none;   width: 32px;  height: 32px;  display:block;   background-image: url("[BcloseIcon_def]");    background-size: cover;    background-repeat: no-repeat;   }    .modal_fs_lightbox .ssprev .icon::before {  display:block;  position:relative;  top:0px;    content: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAF5JREFUSIntlFEKgCAQBYc8ZJLnSBCsixfoT5J/grhhsAP7O28XlgfKnzGS8gDcgJWQRyA9s42W+0p+qPwTuavksUewDF2nk533ilNDpggRrYpCAC5glQqASV5caZMBe/ojpTunBlAAAAAASUVORK5CYII=");}      .modal_fs_lightbox #btons_cont .btns:focus .thung, .modal_fs_lightbox #btons_cont .btns:hover .thung{   opacity:1; transition: 0.3s; }  .modal_fs_lightbox #btons_cont .tcbtns {  color: #f1f1f1;padding:3px;  font-size: 20px;  font-weight: bold; overflow:auto;  transition: 0.3s;margin-right:5px;}    .modal_fs_lightbox #btons_cont .tcbtns.c {width:100%;position:absolute;text-align:center;}   .modal_fs_lightbox #btons_cont .btns:hover,.modal_fs_lightbox #btons_cont .btns:focus {  color: #bbb;  text-decoration: none;  cursor: pointer;transition: 0.3s;}   @media only screen and (max-width: 700px){  .modal_fs_lightbox .modal_fs_lightbox-content {    width: 100%;  }}    .modal_fs_lightbox [data-tooltip] {position: relative;}   .modal_fs_lightbox [data-tooltip]::before,.modal_fs_lightbox [data-tooltip]::after {  text-transform: none;  font-size: 16px;  line-height: 1;  position: absolute;  display: none;  opacity: 0;}   .modal_fs_lightbox [data-tooltip]::before {  content: "";  border: 6px solid transparent;  z-index: 101;}   .modal_fs_lightbox [data-tooltip]::after {  content: attr(data-tooltip);  text-align: center;pointer-events:none;  min-width: 3em;  max-width: 21em;  white-space: nowrap;  overflow: hidden;  text-overflow: ellipsis;  padding: 9px 8px;  border-radius: 6px;  background: #333333;  color: #FFFFFF;  z-index: 100;}    .modal_fs_lightbox [data-tooltip]:hover::before,.modal_fs_lightbox [data-tooltip]:hover::after {  display: block;}   .modal_fs_lightbox [data-tooltip=\'\']::before,.modal_fs_lightbox [data-tooltip=\'\']::after {  display: none !important;}    .modal_fs_lightbox [data-tooltip]:not([data-flow])::before,.modal_fs_lightbox [data-tooltip][data-flow^="top"]::before {   bottom: 100%;  border-bottom-width: 0;  border-top-color: #333333;}   .modal_fs_lightbox [data-tooltip]:not([data-flow])::after,.modal_fs_lightbox [data-tooltip][data-flow^="top"]::after {  bottom: calc(100% + 5px);}   .modal_fs_lightbox [data-tooltip]:not([data-flow])::before,.modal_fs_lightbox [data-tooltip]:not([data-flow])::after,.modal_fs_lightbox [data-tooltip][data-flow^="top"]::before,.modal_fs_lightbox [data-tooltip][data-flow^="top"]::after {  left: 50%;  transform: translate(-50%, -.4em);}   .modal_fs_lightbox [data-tooltip][data-flow^="bottom"]::before {  top: 100%;  border-top-width: 0;  border-bottom-color: #333333;}   .modal_fs_lightbox [data-tooltip][data-flow^="bottom"]::after {  top: calc(100% + 5px);}   .modal_fs_lightbox [data-tooltip][data-flow^="bottom"]::before,.modal_fs_lightbox [data-tooltip][data-flow^="bottom"]::after {  left: 50%;  transform: translate(-50%, .4em);}   .modal_fs_lightbox [data-tooltip][data-flow^="left"]::before {  top: 50%;  border-right-width: 0;  border-left-color: #333333;  left: calc(0em - 5px);  transform: translate(-.5em, -50%);}   .modal_fs_lightbox [data-tooltip][data-flow^="left"]::after {  top: 50%;  right: calc(100% + 5px);  transform: translate(-.4em, -50%);}   .modal_fs_lightbox [data-tooltip][data-flow^="right"]::before {  top: 50%;  border-left-width: 0;  border-right-color: #333333;  right: calc(0em - 7px);  transform: translate(.4em, -50%);}   .modal_fs_lightbox [data-tooltip][data-flow^="right"]::after {  top: 50%;  left: calc(100% + 5px);  transform: translate(.5em, -50%);}   @keyframes modal_fs_lightbox_tooltip-vert {  to {    opacity: 1;    transform: translate(-50%, 0);  }}   @keyframes modal_fs_lightbox_tooltip-horz {  to {    opacity: 1;    transform: translate(0, -50%);  }}   .modal_fs_lightbox [data-tooltip]:not([data-flow]):hover::before,.modal_fs_lightbox [data-tooltip]:not([data-flow]):hover::after,.modal_fs_lightbox [data-tooltip][data-flow^="top"]:hover::before,.modal_fs_lightbox [data-tooltip][data-flow^="top"]:hover::after,.modal_fs_lightbox [data-tooltip][data-flow^="bottom"]:hover::before,.modal_fs_lightbox [data-tooltip][data-flow^="bottom"]:hover::after {  animation: modal_fs_lightbox_tooltip-vert .5s ease-out forwards;}   .modal_fs_lightbox [data-tooltip][data-flow^="left"]:hover::before,.modal_fs_lightbox [data-tooltip][data-flow^="left"]:hover::after,.modal_fs_lightbox [data-tooltip][data-flow^="right"]:hover::before,.modal_fs_lightbox [data-tooltip][data-flow^="right"]:hover::after {  animation: modal_fs_lightbox_tooltip-horz .5s ease-out forwards;}     .darkmode .modal_fs_lightbox [data-tooltip]::after {   background: #FFFFFF;  color: #333333;}   .darkmode .modal_fs_lightbox [data-tooltip][data-flow^="top"]::before {  border-top-color: #FFFFFF; }   .darkmode .modal_fs_lightbox [data-tooltip][data-flow^="bottom"]::before { border-bottom-color: #FFFFFF; }   .darkmode .modal_fs_lightbox [data-tooltip][data-flow^="left"]::before { border-left-color: #FFFFFF; }   .darkmode .modal_fs_lightbox [data-tooltip][data-flow^="right"]::before {  border-right-color: #FFFFFF; }     .modal_fs_lightbox .menulight_scrollmenu {   padding: 8px;   overflow: auto;  background-color: #333;  text-align: center;   white-space: nowrap;   }     .modal_fs_lightbox .menulight_scrollmenu button {  background-color: #333; display: inline-block;  color: #fff;  text-align: center; cursor:pointer;     padding: 14px;  text-decoration: none;   border-radius: 20px;    margin-left: 4px;    margin-right: 4px;  }    .modal_fs_lightbox .menulight_scrollmenu button:hover, .modal_fs_lightbox .menulight_scrollmenu button.active {  background-color: #777;  color:#fff;  }  .modal_fs_lightbox .menulight_scrollmenu button.active {       background-color: #000 !important;    border: 2px solid #777;   }   .modal_fs_lightbox .menulight_scrollmenu button.active {  pointer-events:none;  opacity: 0.7;   }   .modal_fs_lightbox .menulight_scrollmenu {    border-radius: 20px;   z-index: 999999;   position: absolute;    top: 11px;    width: 75%;    margin: 0 auto;     left: 9px;       }   .fcas_lightbox_linhaunica { width: 90%;  margin: 0 auto;  white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }    .modal_fs_lightbox .loader-container{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%}.modal_fs_lightbox .classic-spinner{width:60px;height:60px;border:6px solid rgba(0,0,0,.1);border-top:6px solid #3498db;border-radius:50%;margin:40px auto;-webkit-animation:modal_fs_lightbox_girarSpinner 1s linear infinite;animation:modal_fs_lightbox_girarSpinner 1s linear infinite}@media (max-width:768px){.modal_fs_lightbox .classic-spinner{width:45px;height:45px;border-width:5px;margin:30px auto}}@media (max-width:480px){.modal_fs_lightbox .classic-spinner{width:32px;height:32px;border-width:4px;margin:20px auto}}  @-webkit-keyframes modal_fs_lightbox_girarSpinner{0%{-webkit-transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg)}} @keyframes modal_fs_lightbox_girarSpinner{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}   .modal_fs_lightbox .menulight_scrollmenu button {   border: none;    padding: 12px 20px;    font-size: 14px;    border-radius: 6px;    white-space: nowrap;    cursor: pointer;    transition: all 0.2s ease;    flex: 0 0 auto;    text-align: center;} .modal_fs_lightbox .menulight_scrollmenu button.active {    background-color: #04AA6D;    color: #ffffff;    font-weight: bold;    opacity: 0.6;    pointer-events: none;}    .modal_fs_lightbox, .modal_fs_lightbox .modal_fs_lightbox-content, .modal_fs_lightbox .menulight_scrollmenu {scrollbar-color:#ffffff #121212 !important;}.modal_fs_lightbox::-webkit-scrollbar, .modal_fs_lightbox .modal_fs_lightbox-content::-webkit-scrollbar, .modal_fs_lightbox .menulight_scrollmenu::-webkit-scrollbar {  -webkit-appearance: none !important; }.modal_fs_lightbox::-webkit-scrollbar-thumb, .modal_fs_lightbox .modal_fs_lightbox-content::-webkit-scrollbar-thumb, .modal_fs_lightbox .menulight_scrollmenu::-webkit-scrollbar-thumb {background:#ffffff !important;border-radius:4px;}.modal_fs_lightbox::-webkit-scrollbar-thumb:hover, .modal_fs_lightbox .modal_fs_lightbox-content::-webkit-scrollbar-thumb:hover, .modal_fs_lightbox .menulight_scrollmenu::-webkit-scrollbar-thumb:hover {background:#e0e0e0 !important;}.modal_fs_lightbox::-webkit-scrollbar-track, .modal_fs_lightbox .modal_fs_lightbox-content::-webkit-scrollbar-track, .modal_fs_lightbox .menulight_scrollmenu::-webkit-scrollbar-track {background:#fff !important;}    .modal_fs_lightbox::-webkit-scrollbar-button:single-button:vertical:decrement, .modal_fs_lightbox .modal_fs_lightbox-content::-webkit-scrollbar-button:single-button:vertical:decrement, .modal_fs_lightbox .menulight_scrollmenu::-webkit-scrollbar-button:single-button:vertical:decrement {display:block;height:12px;background-image:url("[iconScrool1]");background-position:center;background-repeat:no-repeat}.modal_fs_lightbox::-webkit-scrollbar-button:single-button:vertical:increment, .modal_fs_lightbox .modal_fs_lightbox-content::-webkit-scrollbar-button:single-button:vertical:increment, .modal_fs_lightbox .menulight_scrollmenu::-webkit-scrollbar-button:single-button:vertical:increment {display:block;height:12px;background-image:url("[iconScrool2]");background-position:center;background-repeat:no-repeat}  ',
	vars: {
		BcloseIcon_def: fcasfs_lightbox_basescicsn["close1"],
		iconScrool1: "", iconScrool2: ""
	}
});


fcasfs_lightbox_def_injetarScript({ app: "TECH-LightBox", folder: "app", base: fcasfs_lightbox_baseUrl, id: "fcasfs_script-lightbox-pdf-core", src: "[URL]/[APP]/[FOLDER]pdf.js", onload: 'document.getElementById("[ID]").remove();'  });
fcasfs_lightbox_def_injetarScript({ app: "TECH-LightBox", folder: "app", base: fcasfs_lightbox_baseUrl, id: "fcasfs_script-lightbox-core", src: "[URL]/[APP]/[FOLDER]core.js", onload: 'document.getElementById("[ID]").remove();' });
fcasfs_lightbox_def_injetarScript({ app: "TECH-Free", folder: "app", base: fcasfs_lightbox_baseUrl, id: "fcasfs_script-player-core", src: "[URL]/[APP]/[FOLDER]core.js", onload: 'document.getElementById("[ID]").remove();'});
fcasfs_lightbox_def_injetarScript({ app: "TECH-LightBox", folder: "app", base: fcasfs_lightbox_baseUrl, id: "fcasfs_script-lightbox-src_basic-core", src: "[URL]/[APP]/[FOLDER]src_basic.js", onload: 'document.getElementById("[ID]").remove();' });
fcasfs_lightbox_def_injetarScript({ app: "TECH-LightBox", folder: "app", base: fcasfs_lightbox_baseUrl, id: "fcasfs_script-lightbox-src_plus-core", src: "[URL]/[APP]/[FOLDER]src_plus.js", onload: 'document.getElementById("[ID]").remove();' });
fcasfs_lightbox_def_injetarScript({ app: "TECH-LightBox", folder: "app", base: fcasfs_lightbox_baseUrl, id: "fcasfs_script-lightbox-src_src_uls-sd", src: "[URL]/[APP]/[FOLDER]src_uls.js", onload: 'document.getElementById("[ID]").remove();' });


function fcasfs_lightbox_gerarEstiloCor(options){const opts=options||{};let cores=opts.cores||[];const fcasfs_lightbox_paletasLightbox=['#ff0055','#00ffcc','#ffcc00','#9900ff','#ff5722','#4caf50','#00bcd4','#e91e63','#3f51b5','#2196f3','#ff0000','#00ff00','#0000ff','#ffff00','#ff00ff','#00ffff','#ff8c00','#8a2be2','#00ced1','#ff1493','#39ff14','#00e5ff','#ff007f','#ccff00','#7efff5','#ff4d4d','#fffa65','#18dcff','#cd84f1','#ff3838','#fff200','#05c46b','#0be881','#575fcf','#ef5777','#f53b57','#ffd32a','#4bcffa','#34e7e4','#00d8d6','#1e272e','#2c3e50','#8e44ad','#2c3a47','#130cb7','#5f27cd','#1dd1a1','#ff6b6b','#10ac84','#222f3e','#0a3d62','#3c6382','#079992','#38ada9','#b33939','#218c74','#40407a','#706fd3','#474787','#aa2b2b','#ffb8b8','#ffdd59','#ffabe7','#a29bfe','#74b9ff','#81ecec','#55efc4','#fab1a0','#ffeaa7','#dff9fb','#c7ecee','#95afc0','#78e08f','#eccc68','#ff7f50','#ff6b81','#ffa502','#70a1ff','#7bed9f','#ffcccc','#ffd700','#c0c0c0','#b87333','#daa520','#8c7ae6','#e1b12c','#44bd32','#718093','#2f3640','#191970'];const fcasfs_lightbox_posicoesValidas=['to right','to left','to top','to bottom','to top right','to top left','to bottom right','to bottom left','to right top','to left top','to right bottom','to left bottom','0deg','15deg','30deg','45deg','60deg','75deg','90deg','105deg','120deg','135deg','150deg','165deg','180deg','195deg','210deg','225deg','240deg','255deg','270deg','285deg','300deg','315deg','330deg','345deg','360deg','-45deg','-90deg','-135deg','-180deg','center','center center','top center','bottom center','center left','center right','center top','center bottom'];const fcasfs_lightbox_formatosValidos=['quadrado','circulo','triangulo','losango','pentagono','estrela','hexagono','octagono','coracao','balao','chevron','paralelogramo','seta','cruz','trapezio'];let posicaoInformada=opts.posicao||('');let fmt=opts.formato||'';const localChave=opts.nomeEstilo?`fcasfs_cache_${opts.nomeEstilo}`:'';if(typeof window!=='undefined'&&localChave){if(opts.remover===true){localStorage.removeItem(localChave);const tagExistente=document.getElementById(localChave);if(tagExistente)tagExistente.remove();}}if(typeof window!=='undefined'&&localChave&&(opts.load===true||(opts.save===true&&opts.update!=='true'))){const cache=localStorage.getItem(localChave);if(cache){const dados=JSON.parse(cache);if(!document.getElementById(localChave)){const tagEstilo=document.createElement('style');tagEstilo.id=localChave;tagEstilo.textContent=dados.css;document.body.appendChild(tagEstilo);}return dados.classe;}}if(opts.aleatorio===true){const paleta=fcasfs_lightbox_paletasLightbox;if(Math.random()>0.5){cores=[paleta[Math.floor(Math.random()*paleta.length)]];}else{const c1=paleta[Math.floor(Math.random()*paleta.length)];let c2=paleta[Math.floor(Math.random()*paleta.length)];while(c1===c2&&paleta.length>1){c2=paleta[Math.floor(Math.random()*paleta.length)];}cores=[c1,c2];}fmt=fcasfs_lightbox_formatosValidos[Math.floor(Math.random()*fcasfs_lightbox_formatosValidos.length)];posicaoInformada=fcasfs_lightbox_posicoesValidas[Math.floor(Math.random()*fcasfs_lightbox_posicoesValidas.length)];}const ehAnguloValido=posicaoInformada.endsWith('deg');const posicao=fcasfs_lightbox_posicoesValidas.includes(posicaoInformada)||ehAnguloValido?posicaoInformada:'to right';const formatoFinal=fcasfs_lightbox_formatosValidos.includes(fmt)?fmt:'quadrado';const intensidade=opts.intensidade?` ${opts.intensidade}%`:'';function converterParaHex(cor){if(typeof window==='undefined')return cor;const div=document.createElement('div');div.style.color=cor;document.body.appendChild(div);const rgb=window.getComputedStyle(div).color;document.body.removeChild(div);const valores=rgb.match(/\d+/g);if(!valores||valores.length<3)return cor;const hex=valores.slice(0,3).map(function(x){const hexString=parseInt(x).toString(16);return hexString.length===1?'0'+hexString:hexString;}).join('');return '#'+hex;}cores=cores.map(converterParaHex);let bgStyle='';if(cores.length===0){bgStyle+='background-color: #000000 !important;';}else if(cores.length===1){bgStyle+=`background-color: ${cores} !important;`;}else{const listaCoresFormatada=cores.map(function(cor,index){return index===cores.length-1?`${cor}${intensidade}`:cor;}).join(', ');if(posicao.includes('center')){bgStyle+=`background-image: radial-gradient(circle at ${posicao}, ${listaCoresFormatada}) !important;`;}else{bgStyle+=`background-image: linear-gradient(${posicao}, ${listaCoresFormatada}) !important;`;}}let containerStyle='';if(opts.largura){containerStyle+=` width: ${opts.largura}px !important;`;}if(opts.altura){containerStyle+=` height: ${opts.altura}px !important;`;}if(opts.blur){containerStyle+=` backdrop-filter: blur(${opts.blur}px) !important; -webkit-backdrop-filter: blur(${opts.blur}px) !important;`;}let opStyle='';if(opts.opacidade!==undefined){const op=parseFloat(opts.opacidade);opStyle=` opacity: ${op>1?op/100:op} !important;`;}let shapeCSS='';if(formatoFinal=='circulo'){shapeCSS='border-radius: 50% !important;';}else if(formatoFinal==='triangulo'){shapeCSS='clip-path: polygon(50% 0%, 0% 100%, 100% 100%) !important;';}else if(formatoFinal==='losango'){shapeCSS='clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%) !important;';}else if(formatoFinal==='pentagono'){shapeCSS='clip-path: polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%) !important;';}else if(formatoFinal==='estrela'){shapeCSS='clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%) !important;';}else if(formatoFinal==='hexagono'){shapeCSS='clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%) !important;';}else if(formatoFinal==='octagono'){shapeCSS='clip-path: polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%) !important;';}else if(formatoFinal==='coracao'){shapeCSS='clip-path: polygon(50% 15%, 65% 0%, 85% 0%, 100% 20%, 100% 45%, 50% 90%, 0% 45%, 0% 20%, 15% 0%, 35% 0%) !important;';}else if(formatoFinal==='balao'){shapeCSS='clip-path: polygon(0% 0%, 100% 0%, 100% 75%, 75% 75%, 75% 100%, 50% 75%, 0% 75%) !important;';}else if(formatoFinal==='chevron'){shapeCSS='clip-path: polygon(100% 0%, 75% 50%, 100% 100%, 25% 100%, 0% 50%, 25% 0%) !important;';}else if(formatoFinal==='paralelogramo'){shapeCSS='clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%) !important;';}else if(formatoFinal==='seta'){shapeCSS='clip-path: polygon(0% 20%, 60% 20%, 60% 0%, 100% 50%, 60% 100%, 60% 80%, 0% 80%) !important;';}else if(formatoFinal==='cruz'){shapeCSS='clip-path: polygon(35% 0%, 65% 0%, 65% 35%, 100% 35%, 100% 65%, 65% 65%, 65% 100%, 35% 100%, 35% 65%, 0% 65%, 0% 35%, 35% 35%) !important;';}else if(formatoFinal==='trapezio'){shapeCSS='clip-path: polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%) !important;';}if(typeof window!=='undefined'){const num=Math.floor(1000+Math.random()*9000);const nomeClasse=opts.nomeEstilo?`fcasfs_lightbox_${num}_${opts.nomeEstilo}`:`fcasfs_lightbox_${num}`;const estiloFinal=`.${nomeClasse} { ${containerStyle} } .${nomeClasse}::before { content: "" !important; position: relative !important; top: 0 !important; left: 0 !important; width: 100% !important; height: 100% !important; z-index: -1 !important; ${bgStyle} ${shapeCSS} ${opStyle} }`;const tagExistente=document.getElementById(localChave);if(tagExistente)tagExistente.remove();const tagEstilo=document.createElement('style');if(localChave)tagEstilo.id=localChave;tagEstilo.textContent=estiloFinal;document.body.appendChild(tagEstilo);if(opts.save===true&&localChave){localStorage.setItem(localChave,JSON.stringify({classe:nomeClasse,css:estiloFinal}));}return nomeClasse;}return containerStyle;}

function fcasfs_lightbox_alternarScrollBody(travar) { const elemento = document.body || document.getElementsByTagName('body')[0]; if (elemento) { elemento.classList[travar ? 'add' : 'remove']('fcas_lightbox_sem-scroll'); } }
function fcas_lightbox_create_scroll(e){var t=document.getElementById(e.id);if(t){t.classList.add("fcas_lightbox_container");var n=document.createElement("div");n.className="fcas_lightbox_wrapper_"+e.id,n.style.width="100%",n.style.height="100%",n.style.boxSizing="border-box",n.style.overflowY=e.vertical?"auto":"hidden",n.style.overflowX=e.horizontal?"auto":"hidden",n.style.msOverflowStyle="none",n.style.scrollbarWidth="none";for(;t.firstChild;)n.appendChild(t.firstChild);t.appendChild(n);var o=e.vertical,r=e.horizontal;function a(t,o){var r="horizontal"===o,a=e.width?"number"==typeof e.width?e.width+"px":e.width:"12px",c=parseFloat(a),i=a,l=c*0.66+"px",d=(c-parseFloat(l))/2+"px",s=r?e.btnLeft:e.btnUp,u=r?e.btnRight:e.btnDown,m="fcas_lightbox_style_tag_"+o+"_"+e.id,h=document.getElementById(m);h&&h.remove();var f=document.createElement("style");f.id=m;var v=r&&e.vertical?"calc(100% - "+i+")":"100%",p=r&&e.vertical?i:"0";f.innerHTML="[class*='fcas_lightbox_wrapper_']{-ms-overflow-style:none!important;scrollbar-width:none!important;}[class*='fcas_lightbox_wrapper_']::-webkit-scrollbar{display:none!important;width:0!important;height:0!important;}.fcas_lightbox_container{overflow:hidden !important;}.fcas_lightbox_track_"+e.id+"_"+o+"{position:absolute;"+(r?"bottom:0;right:"+p+"!important;width:"+v+"!important;height:"+i+";flex-direction:row":"top:0;right:0;width:"+i+";height:100%;flex-direction:column")+";background:#121212;z-index:9999;display:flex;justify-content:space-between;user-select:none;-webkit-user-select:none;}.fcas_lightbox_btn_"+e.id+"_"+o+"{"+(r?"width:"+i+";height:100%":"height:"+i+";width:100%")+";background-position:center;background-repeat:no-repeat;background-size:100% 100%!important;cursor:pointer;transition:opacity 0.2s;}.fcas_lightbox_btn_"+e.id+"_"+o+":hover{opacity:0.7;}.fcas_lightbox_thumb_area_"+e.id+"_"+o+"{flex:1;position:relative;width:100%;height:100%;}.fcas_lightbox_thumb_"+e.id+"_"+o+"{position:absolute;"+(r?"top:"+d+";height:"+l+";left:0":"left:"+d+";width:"+l+";top:0")+";background:#ffffff;border-radius:4px;cursor:pointer;transition:background 0.1s;}.fcas_lightbox_thumb_"+e.id+"_"+o+":hover{background:#e0e0e0!important;}",document.head.appendChild(f);var g=document.createElement("div");g.className="fcas_lightbox_track_"+e.id+"_"+o;var _=document.createElement("div");_.className="fcas_lightbox_thumb_area_"+e.id+"_"+o;var y=document.createElement("div");if(y.className="fcas_lightbox_thumb_"+e.id+"_"+o,_.appendChild(y),s&&u){var x=document.createElement("div");x.className="fcas_lightbox_btn_"+e.id+"_"+o,x.style.backgroundImage='url("'+s+'")';var b=document.createElement("div");b.className="fcas_lightbox_btn_"+e.id+"_"+o,b.style.backgroundImage='url("'+u+'")',g.appendChild(x),g.appendChild(_),g.appendChild(b),x.addEventListener("click",function(){r?n.scrollBy({left:-40,behavior:"smooth"}):n.scrollBy({top:-40,behavior:"smooth"})}),b.addEventListener("click",function(){r?n.scrollBy({left:40,behavior:"smooth"}):n.scrollBy({top:40,behavior:"smooth"})})}else g.appendChild(_);t.appendChild(g);var E=0,w=0,T=function(){var e=r?n.scrollWidth:n.scrollHeight,t=r?n.clientWidth:n.clientHeight,o=r?_.clientWidth:_.clientHeight;if(e!==E||t!==w){E=e;w=t;if(e<=t)g.style.display="none",r?(n.style.paddingBottom="0px"):(n.style.paddingRight="0px");else{g.style.display="flex",r?(n.style.paddingBottom=i):(n.style.paddingRight=i);var a=Math.max(t/e*o,20);r?(y.style.width=a+"px"):(y.style.height=a+"px")}}var c=r?n.scrollLeft:n.scrollTop,s=e-t,u=o-parseFloat(r?y.style.width:y.style.height),m=s>0?c/s*u:0;r?(y.style.left=m+"px"):(y.style.top=m+"px")};n.addEventListener("scroll",T),window.addEventListener("resize",T),setInterval(T,10),T();var L=!1,H=0,S=0;y.addEventListener("mousedown",function(e){L=!0,H=r?e.clientX:e.clientY,S=r?n.scrollLeft:n.scrollTop,document.body.style.userSelect="none",e.stopPropagation()}),y.addEventListener("touchstart",function(e){L=!0,H=r?e.touches.clientX:e.touches.clientY,S=r?n.scrollLeft:n.scrollTop,e.stopPropagation()},{passive:!0}),_.addEventListener("mousedown",function(e){if(e.target===y)return;var t=_.getBoundingClientRect(),a=(r?e.clientX-t.left:e.clientY-t.top)-parseFloat(r?y.style.width:y.style.height)/2;a=Math.max(0,Math.min(a,(r?_.clientWidth:_.clientHeight)-parseFloat(r?y.style.width:y.style.height)));var o=r?n.scrollWidth:n.scrollHeight,c=r?n.clientWidth:n.clientHeight,i=o-c,l=(r?_.clientWidth:_.clientHeight)-parseFloat(r?y.style.width:y.style.height);r?(n.scrollLeft=a/l*i):(n.scrollTop=a/l*i)}),document.addEventListener("mousemove",function(e){if(L){var t=(r?e.clientX:e.clientY)-H,a=r?n.scrollWidth:n.scrollHeight,o=r?n.clientWidth:n.clientHeight,c=r?_.clientWidth:_.clientHeight,i=parseFloat(r?y.style.width:y.style.height),l=a-o,d=c-i,s=t/d*l;r?(n.scrollLeft=S+s):(n.scrollTop=S+s)}}),document.addEventListener("touchmove",function(e){if(L){var t=(r?e.touches.clientX:e.touches.clientY)-H,a=r?n.scrollWidth:n.scrollHeight,o=r?n.clientWidth:n.clientHeight,c=r?_.clientWidth:_.clientHeight,i=parseFloat(r?y.style.width:y.style.height),l=a-o,d=c-i,s=t/d*l;r?(n.scrollLeft=S+s):(n.scrollTop=S+s)}},{passive:!0}),document.addEventListener("mouseup",function(){L=!1,document.body.style.userSelect=""}),document.addEventListener("touchend",function(){L=!1})}o&&a(t,"vertical"),r&&a(t,"horizontal")}}

function fcasfs_lightbox_converterHexParaRgba(corHex,opacidade,importante){const hex=(corHex||'#000000').trim().replace('#','');let op=opacidade!==undefined&&!isNaN(parseFloat(opacidade))?parseFloat(opacidade):1;if(op>1)op=op/100;let r=0,g=0,b=0;if(hex.length===3){r=parseInt(hex[0]+hex[0],16);g=parseInt(hex[1]+hex[1],16);b=parseInt(hex[2]+hex[2],16);}else if(hex.length===6){r=parseInt(hex.slice(0,2),16);g=parseInt(hex.slice(2,4),16);b=parseInt(hex.slice(4,6),16);}const imp=importante===true||importante==='true'?' !important':'';return `rgba(${r},${g},${b},${op})${imp}`;}
function fcasfs_lightbox_ajustarHex(corHex){let h=(corHex||'').trim();if(!h)return '#000';if(!h.startsWith('#'))h='#'+h;const limpo=h.replace('#','');return limpo.length===3||limpo.length===6?h:'#000';}

function fcas_lightbox_footer(c={}){const i=c.idioma||'pt',d=c.desenvolvedor,a=c.nomeApp,v=c.versaoApp,l=c.urlLogo,s=c.show!==undefined?c.show:!0,t={pt:{dev:'Desenvolvido por:',versao:'Versão:'},en:{dev:'Developed by:',versao:'Version:'}}[i]||{dev:'Desenvolvido por:',versao:'Versão:'},sf=s?'0px':'-100px',sb=s?'65px':'15px',ix=`<svg xmlns="http://w3.org" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:18px!important;height:18px!important;display:block!important;"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`,io=`<svg xmlns="http://w3.org" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:18px!important;height:18px!important;display:block!important;"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`,ef=`position:fixed!important;bottom:${sf}!important;left:0!important;right:0!important;background-color:#222!important;color:#fff!important;padding:15px 20px!important;font-family:Arial,sans-serif!important;font-size:14px!important;box-sizing:border-box!important;z-index:999999!important;user-select:none!important;-webkit-user-select:none!important;-moz-user-select:none!important;-ms-user-select:none!important;display:block!important;border:none!important;margin:0!important;transition:bottom 0.1s ease-in-out;`,ec="display:flex!important;justify-content:space-between!important;align-items:center!important;max-width:1200px!important;margin:0 auto!important;flex-wrap:wrap!important;gap:10px!important;width:100%!important;background:none!important;border:none!important;padding:0!important;",eb="display:flex!important;align-items:center!important;gap:10px!important;background:none!important;border:none!important;margin:0!important;padding:0!important;",es="font-family:Arial,sans-serif!important;font-size:14px!important;color:#fff!important;display:inline!important;background:none!important;border:none!important;margin:0!important;padding:0!important;",en="font-family:Arial,sans-serif!important;font-size:14px!important;color:#fff!important;font-weight:bold!important;display:inline!important;background:none!important;border:none!important;margin:0!important;padding:0!important;",el="max-height:24px!important;width:auto!important;display:block!important;border:none!important;margin:0!important;padding:0!important;background:none!important;",ebtn=`position:fixed!important;bottom:${sb}!important;right:20px!important;z-index:1000000!important;background-color:#222!important;color:#fff!important;border:1px solid #444!important;border-radius:50%!important;width:35px!important;height:35px!important;display:flex!important;align-items:center!important;justify-content:center!important;cursor:pointer!important;box-shadow:0 2px 10px rgba(0,0,0,0.5)!important;transition:bottom 0.1s ease-in-out;padding:0!important;margin:0!important;`,m=l?`<img src="${l}" style="pointer-events:none;  ${el}">`:'',ma=a?`<span style="${en}">${a}</span>`:'',mv=v?` ${t.versao} ${v}`:'',mb=(m||ma||mv)?`<div style="${eb}">${m}<span style="${es}">${ma}${mv}</span></div>`:'',md=d?`<span style="${es}">${t.dev} <span style="${en}">${d}</span></span>`:'';window.fcas_lightbox_btnfooter_click=function(){const f=document.getElementById('fcas_lightbox_footer'),b=document.getElementById('fcas_lightbox_btnfooter');if(!f||!b)return;if(f.style.bottom==='0px'||f.style.bottom===''){f.style.bottom='-100px';b.style.bottom='15px';b.innerHTML=`<svg xmlns="http://w3.org" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:18px!important;height:18px!important;display:block!important;"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`;}else{f.style.bottom='0px';b.style.bottom='65px';b.innerHTML=`<svg xmlns="http://w3.org" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:18px!important;height:18px!important;display:block!important;"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`;}};return(mb||md)?`<style>.modal_fs_lightbox-content{padding-bottom:60px!important;}</style><button id="fcas_lightbox_btnfooter" style="${ebtn}" onclick="fcas_lightbox_btnfooter_click()">${s?ix:io}</button><div id="fcas_lightbox_footer" style="${ef}"><div style="${ec}">${mb}${md}</div></div>`:''}
function fcasfs_lightbox_scrolltop_btn(){if(!document.getElementById("fcasfs_lightbox_scroll_style")){var e=document.createElement("style");e.id="fcasfs_lightbox_scroll_style",e.textContent=".fcas_lightbox_scroll-top-btn{position:fixed !important;bottom:15px !important;right:20px !important;width:38px !important;height:38px !important;border-radius:10px !important;background-color:#1a1a1a !important;color:#ffffff !important;border:1px solid rgba(255,255,255,0.1) !important;cursor:pointer !important;display:flex !important;align-items:center !important;justify-content:center !important;box-shadow:0 6px 18px rgba(0,0,0,0.3) !important;z-index:99999 !important;transition:all .1s cubic-bezier(.4,0,.2,1) !important;opacity:0 !important;visibility:hidden !important;transform:translateY(15px) !important}.fcas_lightbox_scroll-top-btn:hover{background-color:#262626 !important;border-color:rgba(255,255,255,0.25) !important;box-shadow:0 8px 24px rgba(0,0,0,0.4) !important}.fcas_lightbox_scroll-top-btn.visible{opacity:1 !important;visibility:visible !important;transform:translateY(0) !important}",document.head.appendChild(e)}if(!document.querySelector(".fcas_lightbox_scroll-top-btn")){var t=document.createElement("button");t.classList.add("fcas_lightbox_scroll-top-btn"),t.innerHTML='<svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2.2" fill="none" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>',document.body.appendChild(t)}function fcasfs_lightbox_scrolltop_handle_scroll(){if(window.fcasfs_lightbox_scrolltop_target){var e=document.querySelector(window.fcasfs_lightbox_scrolltop_target),t=document.querySelector(".fcas_lightbox_scroll-top-btn");if(e&&t){var n=e.getBoundingClientRect().top;if(n<-(window.fcasfs_lightbox_scrolltop_distance||120)){var r=document.getElementById("fcas_lightbox_btnfooter"),o=20;r&&(o+=(r.offsetWidth||0)+6),t.style.setProperty("right",o+"px","important"),t.classList.add("visible")}else{t.classList.remove("visible")}}else if(t){t.classList.remove("visible")}}}function fcasfs_lightbox_scrolltop_handle_click(){if(window.fcasfs_lightbox_scrolltop_target){var e=document.querySelector(window.fcasfs_lightbox_scrolltop_target);e&&e.scrollIntoView({behavior:"smooth",block:"start"})}}var n=document.querySelector(".fcas_lightbox_scroll-top-btn");document.removeEventListener("scroll",fcasfs_lightbox_scrolltop_handle_scroll,true),document.addEventListener("scroll",fcasfs_lightbox_scrolltop_handle_scroll,{passive:true,capture:true}),n&&(n.removeEventListener("click",fcasfs_lightbox_scrolltop_handle_click),n.addEventListener("click",n.scrollIntoView?fcasfs_lightbox_scrolltop_handle_click:(function(){var e=document.querySelector(window.fcasfs_lightbox_scrolltop_target);e&&(e.scrollTop=0)})))}
function fcasfs_inicializarLightboxScroll(config) { if (config && config.id) { window.fcasfs_lightbox_scrolltop_target = "#" + config.id + "_content"; window.fcasfs_lightbox_scrolltop_distance = typeof config.distance === "number" ? config.distance : 120; window.fcasfs_lightbox_scrolltop_active = config.active !== undefined ? config.active : false; if (window.fcasfs_lightbox_scrolltop_active === true) { if (document.body) { fcasfs_lightbox_scrolltop_btn(); } else { document.addEventListener("DOMContentLoaded", fcasfs_lightbox_scrolltop_btn); } } } }

function fcas_lightbox_processarL(objeto) { const token = fcasfs_lightbox_baseTk || ""; return (token !== '' && token !== null && token !== undefined) && fcas_lightbox_checkHash(Number(token)) ? "" : fcas_lightbox_footer({ show: objeto.show, idioma: objeto.idioma || 'pt', desenvolvedor: objeto.desenvolvedor || '', nomeApp: objeto.nomeApp || '', versaoApp: objeto.versaoApp || '', urlLogo: objeto.urlLogo || '' }); }

function fcas_lightbox_cqixaaviso(e){if(!e||typeof e!=="object"||!e.id||!document.getElementById(e.id)||!e.texto||!e.texto.trim())return;const t=document.getElementById(e.id),n=document.createElement("div"),o=document.createElement("style");o.textContent=`#fcas_lightbox_cxaviso-overlay{position:fixed;top:0;left:0;width:100%;height:100%;background-color:rgba(0,0,0,0.7);z-index:9999;display:flex;align-items:center;justify-content:center;padding:20px;box-sizing:border-box}#fcas_lightbox_cxaviso-container{width:100%;max-width:440px;background-color:#1e1e2e;color:#cdd6f4;padding:20px;border-radius:12px;box-shadow:0 8px 32px rgba(0,0,0,0.6);font-family:sans-serif;box-sizing:border-box;display:flex;flex-direction:column;gap:12px;border:1px solid #313244;animation:modalScale 0.25s ease-out}@keyframes modalScale{from{opacity:0;transform:scale(0.95)}to{opacity:1;transform:scale(1)}}#fcas_lightbox_cxaviso-header{display:flex;justify-content:space-between;align-items:center;gap:12px}#fcas_lightbox_cxaviso-title{font-size:1.2rem;font-weight:600;margin:0;color:#cba6f7}#fcas_lightbox_cxaviso-close{background:none;border:none;cursor:pointer;padding:6px;display:flex;align-items:center;justify-content:center;color:#a6adc8;transition:color 0.2s;margin-left:auto;border-radius:4px}#fcas_lightbox_cxaviso-close:hover{color:#f38ba8;background-color:rgba(255,255,255,0.05)}#fcas_lightbox_cxaviso-close svg{width:22px;height:22px;fill:currentColor}#fcas_lightbox_cxaviso-body{font-size:1rem;line-height:1.5;margin:0;color:#bac2de}@media(max-width:480px){#fcas_lightbox_cxaviso-container{padding:16px;gap:10px}}`;document.head.appendChild(o);n.id="fcas_lightbox_cxaviso-overlay";const s=document.createElement("div");s.id="fcas_lightbox_cxaviso-container";const a=document.createElement("div");a.id="fcas_lightbox_cxaviso-header";if(e.titulo&&e.titulo.trim()){const t=document.createElement("h3");t.id="fcas_lightbox_cxaviso-title";t.textContent=e.titulo;a.appendChild(t)}const c=document.createElement("button");c.id="fcas_lightbox_cxaviso-close";c.innerHTML=`<svg viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>`;c.addEventListener("click",()=>{n.remove();o.remove()});a.appendChild(c);s.appendChild(a);const r=document.createElement("p");r.id="fcas_lightbox_cxaviso-body";r.textContent=e.texto;s.appendChild(r);n.appendChild(s);t.appendChild(n)}
function fcas_lightbox_cqixaaviso2(ii,tt,tl){fcas_lightbox_cqixaaviso({id:ii,titulo:tl,texto:tt});}

function fcasfs_lightbox_executarAposTempo(obj,tt) { if (obj && tt && typeof obj.callback === 'function') { if (obj.wait && typeof obj.wait === 'number') {   lightboxPLclos_mowaud("no");   var fcasfs_lightbox_exet = setTimeout(function() { obj.callback(tt);  lightboxPLclos_mowaud("yes");   clearTimeout(fcasfs_lightbox_exet);  }, obj.wait); } else obj.callback(tt); } }
function fcasfs_lightbox_executarTempo(obj,tt) { if (obj && tt && typeof obj.callback === 'function') { if (obj.wait && typeof obj.wait === 'number') {     var fcasfs_lightbox_erxet = setTimeout(function() { obj.callback(tt);    clearTimeout(fcasfs_lightbox_erxet);  }, obj.wait); } } }
function fcasfs_lightbox_iniciarContagemRegressiva(idElemento, tempoEmMilissegundos) { if (typeof idElemento !== "string" || idElemento.trim() === "" || typeof tempoEmMilissegundos !== "number" || isNaN(tempoEmMilissegundos)) { return; } const elemento = document.getElementById(idElemento); if (!elemento) { return; } let tempoRestante = Math.ceil(tempoEmMilissegundos / 1000); function mudarEstiloETempo() { if (tempoRestante >= 0) { let h = Math.floor(tempoRestante / 3600); let m = Math.floor((tempoRestante % 3600) / 60); let s = tempoRestante % 60; let t = (s < 10 ? "0" + s : s); if (m > 0 || h > 0) { t = (m < 10 ? "0" + m : m) + ":" + t; } if (h > 0) { t = (h < 10 ? "0" + h : h) + ":" + t; } elemento.textContent = t; if (tempoRestante <= 10) { elemento.style.cssText = "text-align: center; display: block; margin: 0 auto; width: 100%; max-width: 100%; box-sizing: border-box; color: #ff3333; font-weight: 800; font-size: clamp(2rem, 8vw, 5rem); text-shadow: 0 0 20px rgba(255, 51, 51, 0.4); font-variant-numeric: tabular-nums; transition: all 0.3s linear;"; } else { elemento.style.cssText = "text-align: center; display: block; margin: 0 auto; width: 100%; max-width: 100%; box-sizing: border-box; color: #ffffff; font-weight: 400; font-size: clamp(2rem, 8vw, 5rem); text-shadow: 0 4px 12px rgba(0, 0, 0, 0.5); font-variant-numeric: tabular-nums; transition: all 0.3s linear;"; } } } mudarEstiloETempo(); const cronometro = setInterval(function () { tempoRestante--; mudarEstiloETempo(); if (tempoRestante < 0) { clearInterval(cronometro); return; } }, 1000); }

function fcafs_lightbox_gerarAvisoConteudoAdulto(config){if(!config||!config.isAdult)return'';const min=10;const max=92;let age=config.age!==undefined?config.age:18;if(age<min||age>max){age=18;}const textos={pt:{titulo:"Aviso de Conteúdo Adulto",mensagem:`Este lightbox contém conteúdo para maiores de ${age} anos. Você deseja continuar?`,sim:"Sim",nao:"Não"},en:{titulo:"Adult Content Warning",mensagem:`This lightbox contains content for people over ${age}. Do you wish to continue?`,sim:"Yes",nao:"No"}};const trad=textos[config.lang]?textos[config.lang]:textos.pt;const svgW=`<svg xmlns="http://w3.org" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#dc3545" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:8px"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`;const svgC=`<svg xmlns="http://w3.org" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:6px"><polyline points="20 6 9 17 4 12"/></svg>`;const svgX=`<svg xmlns="http://w3.org" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:6px"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`;const btnS=config.onYes?`<button onclick="${config.onYes}" class="sim">${svgC}${trad.sim}</button>`:'';const btnN=config.onNo?`<button onclick="${config.onNo}" class="nao">${svgX}${trad.nao}</button>`:'';return `<div class="modal-aviso-container"><style>.modal-aviso-container{width:90%;background-color:#111;display:flex;justify-content:center;align-items:center;z-index:99999;font-family:Arial,sans-serif}.modal-aviso-container div{background-color:#fff;padding:30px;border-radius:8px;text-align:center;max-width:400px;box-shadow:0 4px 15px rgba(0,0,0,0.3)}.modal-aviso-container h2{margin:0 0 15px 0;color:#333;display:flex;align-items:center;justify-content:center}.modal-aviso-container p{margin:0 0 25px 0;color:#666;line-height:1.5}.modal-aviso-container div div{background-color:transparent;padding:0;border-radius:0;box-shadow:none;max-width:none;display:flex;justify-content:space-around}.modal-aviso-container button{padding:10px 25px;border:none;border-radius:4px;color:#fff;cursor:pointer;font-weight:bold;display:flex;align-items:center;justify-content:center}.modal-aviso-container .sim{background-color:#28a745}.modal-aviso-container .nao{background-color:#dc3545}@media (max-width:480px){.modal-aviso-container{width:100%!important;padding:15px;box-sizing:border-box}.modal-aviso-container div{width:100%;padding:20px;box-sizing:border-box}.modal-aviso-container div div{gap:15px}.modal-aviso-container button{flex:1;padding:12px 0}}</style><div><h2>${svgW}${trad.titulo}</h2><p>${trad.mensagem}</p><div>${btnS}${btnN}</div></div></div>`;}

function fcafs_lightbox_obterCssObjectFit(tipo) { const tipoFormatado = String(tipo).toLowerCase(); const tiposValidos = ['fill', 'contain', 'cover', 'none', 'scale-down']; return tiposValidos.includes(tipoFormatado) ? `object-fit: ${tipoFormatado};` : ""; }
function fcafs_lightbox_obterCssImagemCrop(cssObjectFit, posicaoX = 'center', posicaoY = 'center') { const posValidas = ['center', 'top', 'bottom', 'left', 'right']; const posX = posValidas.includes(String(posicaoX).toLowerCase()) || String(posicaoX).includes('%') || String(posicaoX).includes('px') ? posicaoX : 'center'; const posY = posValidas.includes(String(posicaoY).toLowerCase()) || String(posicaoY).includes('%') || String(posicaoY).includes('px') ? posicaoY : 'center'; return (cssObjectFit.includes('cover') || cssObjectFit.includes('contain')) ? `${cssObjectFit} object-position: ${posX} ${posY};` : ""; }
function fcafs_lightbox_obterCssMascara(forma, valor = '0%') { const formasValidas = ['inset', 'circle', 'ellipse', 'polygon', 'path', 'rect', 'xywh', 'margin-box', 'border-box', 'padding-box', 'content-box', 'stroke-box', 'view-box']; const formato = String(forma).toLowerCase(); return formasValidas.includes(formato) ? `clip-path: ${formato}(${valor});` : ''; }

function fcas_lightboxd_pegarestylevialist(lista, textoAntes) {  if (!lista || !textoAntes || !Array.isArray(lista) || lista.length === 0) return ''; let cssOriginal = ''; document.querySelectorAll('style').forEach(function(tag) { cssOriginal += tag.innerHTML; }); let cssSemComentarios = cssOriginal.replace(/\/\*[\s\S]*?\*\//g, ''); let resultado = []; let prefixoLimpo = textoAntes.trim(); lista.forEach(function(classe) { if (typeof classe !== 'string' || classe.trim() === '') return; let c = classe.trim(); if (!c.startsWith('.') && !c.startsWith('#')) c = '.' + c; let encontrados = cssSemComentarios.match(new RegExp('(^|}|;)\\s*' + c.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&') + '\\s*\\{[^}]*\\}', 'g')); if (encontrados) { encontrados.forEach(function(bloco) { let blocoLimpo = bloco.replace(/^[^.#]+/, '').trim(); let conteudoChaves = blocoLimpo.substring(blocoLimpo.indexOf('{') + 1, blocoLimpo.lastIndexOf('}')).trim(); if (conteudoChaves.length > 0) resultado.push(prefixoLimpo + ' ' + blocoLimpo); }); } }); return resultado.length > 0 ? resultado.join(' ').trim() : ''; }

function fs_lightbox_carregamentoGlobal(momocsifipsl,e,t){  }

function fcas_lightbox_gerarTexto(e){var t=Array.isArray(e)?e.join("\n").trim():(e?e.trim():"");return t?URL.createObjectURL(new Blob([t],{type:"text/plain"})):""}
function fcas_lightbox_extrairTextoObjeto(e){if(!e||(typeof e==="object"&&Object.keys(e).length===0))return"";return typeof e==="object"?Object.values(e).map(fcas_lightbox_extrairTextoObjeto).filter(Boolean).join("\n"):String(e).trim()}

function fcas_lightbox_bloquearPrint(id, b) { return (id && id!="" && b === true) ? `@media print { #${id} { display: none !important; } }` : ""; }
function fcas_lightbox_escutarPrint(acoes) { if (acoes && typeof acoes.quandoAparece === 'function' && typeof acoes.quandoSumiu === 'function') { var mq = window.matchMedia('print'); mq.addEventListener('change', function(e) { if (e.matches) { acoes.quandoAparece(); } else { acoes.quandoSumiu(); } }); } }

var lightboxPLclos=function(){};    var lightboxPLcloapis=function(){};   var lightboxPLclos_mowaud=function(){};   var lightboxPLclos_mod=function(){};   var lightboxPLclop_mod=function(){};    var lightboxPLclayer_mod=function(){};     var lightboxPLclayer_adfffultmodiuu=function(){};    var lightboxPLclayerff_zoffmodiuu=function(){};   var lightboxPLclayer_zoommodiuu=function(){};     var lightboxPLclayer_adultmodiuu=function(){};    var lightboxPLclayer_modiuu=function(){};

function fcas_lightbox_generateResponsiveFontCSS(config) {  if (!config || !config.font) return ""; const isUrl = config.font.startsWith('http') || config.font.startsWith('//'); const match = isUrl ? config.font.match(/family=([^&:]+)/) : null; const name = match ? decodeURIComponent(match[1]).replace(/\+/g, ' ') : config.font; let cssd = "";  let css = ""; if (isUrl) { cssd += `@import url('${config.font}'); `; } css += ` ${cssd}   #${config.id}, #${config.id} * {  font-family: '${name}', sans-serif !important; `; if (config.weight) { css += `font-weight: ${config.weight} !important; `; } if (config.lineGap) { css += `line-height: ${config.lineGap} !important; `; } if (config.fontSize) { css += `font-size: clamp(14px, 14px + (24 - 14) * ((100vw - 320px) / (1200 - 320)), 24px) !important;`; } css += `} `; return css; }

function fcas_lightbox_gehLinkSvg(i){const t=(i||"").trim().toLowerCase();return t.startsWith("http")&&t.split('?')[0].endsWith(".svg");}

function fcafs_lightboc_contarSZH_HTML(idDaDiv) {    const elemento = document.getElementById(idDaDiv);    return elemento ? elemento.innerHTML.length : 0;    }

function fcasfs_lightbox_injetarEstiloZoom() { if (!document.getElementById('zoomctrl-style')) { const s = document.createElement('style'); s.id = 'zoomctrl-style'; s.textContent = '.zoomctrl-box{position:fixed;bottom:20px;left:20px;display:flex;gap:8px;z-index:99999;max-width:calc(100% - 40px);flex-wrap:wrap;align-items:center;background:#ffffff;border:1px solid #e0e0e0;border-radius:12px;padding:6px;box-shadow:0 4px 12px rgba(0,0,0,0.08);user-select:none;} .zoomctrl-btn{width:32px;height:32px;border:1px solid transparent;background:#f5f5f5;color:#333;border-radius:8px;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:all 0.2s;flex-shrink:0;} .zoomctrl-btn:hover{background:#e0e0e0;transform:translateY(-1px);} .zoomctrl-btn-reset{background:#2196f3 !important;color:#ffffff !important;box-shadow:0 2px 6px rgba(33,150,243,0.3);} .zoomctrl-btn-reset:hover{background:#1e88e5 !important;} .zoomctrl-ico{width:16px;height:16px;fill:currentColor;} .zoomctrl-info{height:32px;padding:0 10px;display:flex;align-items:center;justify-content:center;background:#f5f5f5;border-radius:8px;font-family:sans-serif;font-size:12px;font-weight:bold;color:#333;box-shadow:inset 0 1px 2px rgba(0,0,0,0.02);box-sizing:border-box;flex-shrink:0;} @media(max-width:768px){.zoomctrl-box{bottom:10px !important;left:10px !important;gap:6px !important;padding:5px !important;border-radius:10px !important;max-width:calc(100% - 20px) !important;} .zoomctrl-btn{width:36px !important;height:36px !important;border-radius:8px !important;} .zoomctrl-info{height:36px !important;border-radius:8px !important;font-size:13px !important;padding:0 12px !important;} .zoomctrl-ico{width:18px !important;}} .zoomctrl-btn.disabled{opacity:0.3 !important;pointer-events:none !important;cursor:not-allowed !important;transform:none !important;}'; document.head.appendChild(s); } }
function fcasfs_lightbox_aplicarZoom(id, acao, step, min, max) { const el = document.getElementById(id); if (el) { window.atualZoom = window.atualZoom || 1; if (acao === '+') { window.atualZoom = Math.min(max, window.atualZoom + step); } else if (acao === '-') { window.atualZoom = Math.max(min, window.atualZoom - step); } else if (acao === 'r') { window.atualZoom = 1; } el.style.transform = `scale(${window.atualZoom})`; el.style.transformOrigin = 'top left'; const zoomTexto = Math.round(window.atualZoom * 100) + "%"; lightboxPLclayer_zoommodiuu(zoomTexto); const bTxt = document.getElementById('zoomctrl-info-text'); if (bTxt) bTxt.textContent = zoomTexto; const bP = document.getElementById('zoomctrl-btn-plus'), bM = document.getElementById('zoomctrl-btn-minus'), bR = document.getElementById('zoomctrl-btn-reset'); if (bP) bP.classList.toggle('disabled', window.atualZoom >= max); if (bM) bM.classList.toggle('disabled', window.atualZoom <= min); if (bR) bR.classList.toggle('disabled', window.atualZoom === 1); } }
function fcasfs_lightbox_criarControleZoom(id, atualZoom, step, min, max) { window.atualZoom = atualZoom || 1; fcasfs_lightbox_injetarEstiloZoom(); const zoomInicial = Math.round(window.atualZoom * 100) + "%"; return `<div class="zoomctrl-box"><button id="zoomctrl-btn-plus" class="zoomctrl-btn${window.atualZoom >= max ? ' disabled' : ''}" onclick="fcasfs_lightbox_aplicarZoom('${id}','+',${step},${min},${max})"><svg class="zoomctrl-ico" viewBox="0 0 24 24"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg></button><button id="zoomctrl-btn-minus" class="zoomctrl-btn${window.atualZoom <= min ? ' disabled' : ''}" onclick="fcasfs_lightbox_aplicarZoom('${id}','-',${step},${min},${max})"><svg class="zoomctrl-ico" viewBox="0 0 24 24"><path d="M19 13H5v-2h14v2z"/></svg></button><button id="zoomctrl-btn-reset" class="zoomctrl-btn zoomctrl-btn-reset${window.atualZoom === 1 ? ' disabled' : ''}" onclick="fcasfs_lightbox_aplicarZoom('${id}','r',${step},${min},${max})"><svg class="zoomctrl-ico" viewBox="0 0 24 24"><path d="M12 6v3l4-4-4-4v3c-4.42 0-8 3.58-8 8 0 1.57.46 3.03 1.24 4.26L6.7 14.8c-.45-.83-.7-1.79-.7-2.8 0-3.31 2.69-6 6-6zm6.76 1.74L17.3 9.2c.44.84.7 1.79.7 2.8 0 3.31-2.69 6-6 6v-3l-4 4 4 4v-3c4.42 0 8-3.58 8-8 0-1.57-.46-3.03-1.24-4.26z"/></svg></button><div id="zoomctrl-info-text" class="zoomctrl-info">${zoomInicial}</div></div>`; }


function fcas_lightbox_checkValue(config) {
    const retornoCasoNaoExista = config && config.retornoPadrao !== undefined ? config.retornoPadrao : "";
    if (!config) return retornoCasoNaoExista;
    const listaAlvo = Array.isArray(config.lista) ? config.lista : (config.lista?.lista || config.lista);
    const nomeDaVariavel = config.nome;
    if (!listaAlvo) return retornoCasoNaoExista;
    const item = Array.isArray(listaAlvo) ? listaAlvo[0] : listaAlvo;
    if (item && item[nomeDaVariavel] !== undefined) return item[nomeDaVariavel];
    return retornoCasoNaoExista;
}

function fcas_lightbox_checkValueEX(listad, name1, name2, retronon) {
    const retornoPadrao = retronon !== undefined ? retronon : "";
    if (!listad) return retornoPadrao;
    const primeiroNivel = Array.isArray(listad) ? listad[0] : listad;
    const subConteudo = primeiroNivel?.[name1];
    return fcas_lightbox_checkValue({ lista: subConteudo, nome: name2, retornoPadrao: retornoPadrao });
}


function fsmodal_cl_menu(id) {
    if (id && id !== "") {
        var element = document.getElementById(id);       if (element) {            element.click();      
const activedElement = document.querySelector('.modal_fs_lightbox .menulight_scrollmenu button.active');
if (activedElement) {    activedElement.scrollIntoView({    behavior: 'smooth',   block: 'nearest',  inline: 'center'  });   }
}
    }
}


function fsmodal_close_aloder() {  var modalEdlement = document.getElementById("fs_lightbox_lader");    if (modalEdlement) {  modalEdlement.remove();  }    }


function fcasfs_lightbox_def_icriarLONBD(fcasfs_lightbox_baseUrl, ddd, optiy, app, klf, opdd,basedTk, visualaudd){    var fsmodadfdl_createdd = '';        fsmodal_createdd = '';     var fsmodafdl_createdd = '';  
if(ddd && ddd=="yes"){   fsmodal_createdd = '<div class="loader-container">  <div class="classic-spinner"></div>   </div>';    fsmodafdl_createdd='<div id="fs_lightbox_lader" class="loader-container">  <div class="classic-spinner"></div>   </div>';   }
var fsmodal_createWi_infiio = "";   var fsmodal_creddateWi_infiio = "";    fsmodal_create_desci = "";    var fsmodal_createWi= " margin:0 auto;  width:95%; ";     fsmodal_clall_menussd = "";     dcurrent_id = 0;    is_player0j = "no";     start_fs_mpl = {};       start_fs_postermpl = "";
if(opdd && opdd!=""){   fsmodal_createWi_infiio = opdd;      }
if (basedTk && basedTk===true){   fsmodal_createWi_infiio = "";    fsmodal_creddateWi_infiio = "yes";    }

    if (optiy) {
            optiy.size = optiy.size || 340;
        fsmodal_create_desci = "";     fsmodal_createdd = "";  
        if (optiy.description && optiy.description != "") {            fsmodal_create_desci = "<br/><br/><span style=' white-space: normal;   word-break: break-word; '>" + optiy.description + "</span>";        }
        if (optiy.title && optiy.title != "") {            fsmodal_createdd += `<h1 class="fcas_lightbox_linhaunica" style="text-align:center;pointer-events:none;color:#fff;font-weight:bold;">${optiy.title}</h1>`;        }
        if (optiy.context) {
            var fsmodal_create_ifir = "";
            if(optiy.context!=""){  fsmodal_create_ifir = optiy.context;  }
            if (Array.isArray(optiy.context)) {   fsmodal_create_ifir="";  }
			
            if (app && app == "yes" && optiy.type && optiy.type == "id") {
                is_player0j = "no";
                var start_fs_mpl_affrgs = "";   var start_fs_mplddd_argsdfd = "true";     var start_fs_mpl_argsdfd = "";        var stdart_fs_mpl_argsfdff = "";  var stdart_fs_mpl_argsfd = "";
                if (optiy.view && optiy.view == "info") {  start_fs_mplddd_argsdfd="false";   start_fs_mpl_affrgs = "on";
                } else if (optiy.view && optiy.view == "list") {  start_fs_mplddd_argsdfd="false";  start_fs_mpl_argsdfd = "on";        }
                if (optiy.config) {
                    if (optiy.config.pos && optiy.config.pos != "") {   stdart_fs_mpl_argsfd = "" + convertDurationtoSecondsR(optiy.config.pos);  }
                    if (optiy.config.select && optiy.config.select != "") {    stdart_fs_mpl_argsfdff = "" + optiy.config.select;  }
                }
                fsmodal_create_ifir = ` ${fsmodafdl_createdd}  <iframe onload="fsmodal_close_aloder();this.style.display='block';"  scrolling="no" allow="accelerometer *; ambient-light-sensor *; autoplay *; camera *; clipboard-read *; clipboard-write *; encrypted-media *; fullscreen *; geolocation *; gyroscope *; magnetometer *; microphone *; midi *; payment *; picture-in-picture *; screen-wake-lock *; speaker *; sync-xhr *; usb *; web-share *; vibrate *; vr *" sandbox="allow-downloads allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-top-navigation-by-user-activation allow-storage-access-by-user-activation" frameborder="0" allowfullscreen src="${fcasfs_lightbox_def_icriarLinkr({ base: fcasfs_lightbox_baseUrl, app: "TECH-Free", folder: "", file: "", args: { fileID: optiy.context, fileView:start_fs_mplddd_argsdfd, fileSelect: stdart_fs_mpl_argsfdff, pos: stdart_fs_mpl_argsfd, list: start_fs_mpl_argsdfd, info: start_fs_mpl_affrgs } })}" style="display:none;overflow: hidden; ${fsmodal_createWi} height: ${Number(optiy.size)}px !important;   "></iframe>`;
            } else if (app && app != "yes" && optiy.type && optiy.type == "id") {
				fsmodal_create_ifir = `<div style="${fsmodal_createWi} height:${Number(optiy.size)}px !important; ">   ${fcas_lightbox_aviso_pl(fcas_lightbox_checkValueEX(optiy,"config","Lang","en") || "en")}  </div>`;
			} else if (optiy.type && optiy.type == "slideshow" && typeof fcafs_lightbox_createSlideshow === "function") {
                is_player0j = "no";
                fsmodal_create_ifir = `<div style="${fsmodal_createWi} height:${Number(optiy.size)}px !important; ">  ${fcafs_lightbox_createSlideshow({  slides: optiy.context,  effect: fcas_lightbox_checkValueEX(optiy,"config","effect",'slide') || 'slide', showControls: fcas_lightbox_checkValueEX(optiy,"config","showControls",true) || true,  showCaptions: fcas_lightbox_checkValueEX(optiy,"config","showCaptions",true) || true, })}  </div>`;
            } else if (optiy.type && optiy.type == "list" && typeof fcas_lightbox_islisted === "function") {
                is_player0j = "no";
                fsmodal_create_ifir = `<div style="${fsmodal_createWi}">  ${fcas_lightbox_islisted({  lista: optiy.context, posicao: fcas_lightbox_checkValueEX(optiy,"config","posicao","centro"), largura: '100%', cores: { bordaEscura: '#ccc', fundo: '#ffffff', texto: '#333333' }, alinhamento: fcas_lightbox_checkValueEX(optiy,"config","alinhamento","left"), arredondado: fcas_lightbox_checkValueEX(optiy,"config","arredondado","16px"), tema: fcas_lightbox_checkValueEX(optiy,"config","tema","escuro"), divisor: fcas_lightbox_checkValueEX(optiy,"config","divisor",true),  marcador: fcas_lightbox_checkValueEX(optiy,"config","marcador","") })}  </div>`;
            } else if (optiy.type && optiy.type == "table" && typeof fcas_lightbox_table === "function") {
                is_player0j = "no";
                fsmodal_create_ifir = `<div id="table_fcaslight" style="${fsmodal_createWi} background: #fff;color: #000;">${fcas_lightbox_table({ containerId: "table_fcaslight", showIndex: fcas_lightbox_checkValueEX(optiy,"config","showIndex",false), list: optiy.context, perPage: 12, page: 1, minWidth: '100%', model: fcas_lightbox_checkValueEX(optiy,"config","model","indigo"), zebra: fcas_lightbox_checkValueEX(optiy,"config","zebra",true), align: fcas_lightbox_checkValueEX(optiy,"config","align","left"), headerAlign: fcas_lightbox_checkValueEX(optiy,"config","headerAlign","center"), headerBold: fcas_lightbox_checkValueEX(optiy,"config","headerBold",true), borderRadius: '10px', borderWidth: '2px', borderStyle: 'ridge', borderRadius: '9px', padding: '6px 11px' })}</div>  <style> .fcas-pagination { background: #fff;padding: 6px; } </style>`;
            } else if (optiy.type && optiy.type == "playlist" && typeof fcas_lightbox_criarPlaylist === "function") {
                is_player0j = "no";
                fsmodal_create_ifir = `<div style="${fsmodal_createWi} height:${Number(optiy.size)}px !important;">  ${fcas_lightbox_criarPlaylist({ titulo: fcas_lightbox_checkValueEX(optiy,"config","titulo",""), exibirIndex: fcas_lightbox_checkValueEX(optiy,"config","exibirIndex",true), itensPorPagina: 6, textoOpcional: fcas_lightbox_checkValueEX(optiy,"config","textoOpcional",""), tema: fcas_lightbox_checkValueEX(optiy,"config","tema","light"), itens: optiy.context })}  </div>`;
            } else if (optiy.type && optiy.type == "form" && typeof fcafs_lightbox_gerarFormularioResponsivo === "function") {
                is_player0j = "no";
                fsmodal_create_ifir = `<div style="${fsmodal_createWi} height:${Number(optiy.size)}px !important;">  ${fcafs_lightbox_gerarFormularioResponsivo({ method: fcas_lightbox_checkValueEX(optiy,"config","method","GET") || 'GET', action:fcas_lightbox_checkValueEX(optiy,"config","action","") || '', submitText:fcas_lightbox_checkValueEX(optiy,"config","submitText","") || '', autoClose: false, showReset: fcas_lightbox_checkValueEX(optiy,"config","showReset",false) || false, resetText: fcas_lightbox_checkValueEX(optiy,"config","resetText","") || '', onsubmit: fcas_lightbox_checkValueEX(optiy,"config","onsubmit","") || '', lang: fcas_lightbox_checkValueEX(optiy,"config","Lang","en") ||'en', campos: optiy.context })}  </div>`;
            } else if (optiy.type && optiy.type == "timeline" && typeof fcasfs_light_generateTimeline === "function") {
                is_player0j = "no";
                fsmodal_create_ifir = `<div style="${fsmodal_createWi} height:${Number(optiy.size)}px !important;">  ${fcasfs_light_generateTimeline(optiy.context)}  </div>`;
            } else if (optiy.type && optiy.type == "BlogCard" && typeof fcasfs_light_renderBlogCard === "function") {
                is_player0j = "no";
                fsmodal_create_ifir = `<div style="${fsmodal_createWi} height:${Number(optiy.size)}px !important;">  ${fcasfs_light_renderBlogCard(optiy.context)}  </div>`;
            } else if (optiy.type && optiy.type == "3DText" && typeof fcasfs_lightbox_create3DText === "function") {
                is_player0j = "no";
                fsmodal_create_ifir = `<div style="${fsmodal_createWi} height:${Number(optiy.size)}px !important;">  ${fcasfs_lightbox_create3DText(optiy.context)}  </div>`;
            } else if (optiy.type && optiy.type == "Ad" && typeof fcasfs_lightbox_createAd === "function") {
                is_player0j = "no";
                fsmodal_create_ifir = `<div style="${fsmodal_createWi} height:${Number(optiy.size)}px !important;">  ${fcasfs_lightbox_createAd(optiy.context)}  </div>`;
            } else if (optiy.type && optiy.type == "VirtualCreditCard" && typeof fcasfs_lightbox_createVirtualCreditCard === "function") {
                is_player0j = "no";
                fsmodal_create_ifir = `<div style="${fsmodal_createWi} height:${Number(optiy.size)}px !important;">  ${fcasfs_lightbox_createVirtualCreditCard(optiy.context)}  </div>`;
            } else if (optiy.type && optiy.type == "feedback" && typeof fcas_lightbox_feedback_niveis === "function") {
                is_player0j = "no";
                fsmodal_create_ifir = `<div style="${fsmodal_createWi} height:${Number(optiy.size)}px !important;">  ${fcas_lightbox_feedback_niveis(fcas_lightbox_checkValueEX(optiy,"config","Lang","en") || "en",optiy.context)}  </div>`;
            } else if (optiy.type && optiy.type == "agenda" && typeof fcas_lightbox_criarAgenda === "function") {
                is_player0j = "no";
                fsmodal_create_ifir = `<div style="${fsmodal_createWi} height:${Number(optiy.size)}px !important;">  ${fcas_lightbox_criarAgenda(optiy.context, fcas_lightbox_checkValueEX(optiy,"config","Lang","en") || "en")}  </div>`;
            } else if (optiy.type && optiy.type == "tarefas" && typeof fcas_lightbox_criarTarefas === "function") {
                is_player0j = "no";
                fsmodal_create_ifir = `<div style="${fsmodal_createWi} height:${Number(optiy.size)}px !important;">  ${fcas_lightbox_criarTarefas(optiy.context, fcas_lightbox_checkValueEX(optiy,"config","Lang","en") || "en")}  </div>`;
            } else if (optiy.type && optiy.type == "changelog" && typeof fcas_lightbox_criarChangelog === "function") {
                is_player0j = "no";
                fsmodal_create_ifir = `<div style="${fsmodal_createWi} height:${Number(optiy.size)}px !important;">  ${fcas_lightbox_criarChangelog(optiy.context, fcas_lightbox_checkValueEX(optiy,"config","Lang","en") || "en")}  </div>`;
            } else if (optiy.type && optiy.type == "historico" && typeof fcas_lightbox_criarHistorico === "function") {
                is_player0j = "no";
                fsmodal_create_ifir = `<div style="${fsmodal_createWi} height:${Number(optiy.size)}px !important;">  ${fcas_lightbox_criarHistorico(optiy.context, fcas_lightbox_checkValueEX(optiy,"config","Lang","en") || "en")}  </div>`;
            } else if (optiy.type && optiy.type == "fichas" && typeof fcas_lightbox_criarFichas === "function") {
                is_player0j = "no";
                fsmodal_create_ifir = `<div style="${fsmodal_createWi} height:${Number(optiy.size)}px !important;">  ${fcas_lightbox_criarFichas(optiy.context, fcas_lightbox_checkValueEX(optiy,"config","Lang","en") || "en")}  </div>`;
            } else if (optiy.type && optiy.type == "VirtualCard" && typeof fcasfs_lightbox_createVirtualCard === "function") {
                is_player0j = "no";
                fsmodal_create_ifir = `<div style="${fsmodal_createWi} height:${Number(optiy.size)}px !important;">  ${fcasfs_lightbox_createVirtualCard(optiy.context)}  </div>`;
            } else if (optiy.type && optiy.type == "Profile" && typeof fcasfs_lightbox_createProfile === "function") {
                is_player0j = "no";
                fsmodal_create_ifir = `<div style="${fsmodal_createWi} height:${Number(optiy.size)}px !important;">  ${fcasfs_lightbox_createProfile(optiy.context)}  </div>`;
            } else if (optiy.type && optiy.type == "Participants" && typeof fcasfs_lightbox_createParticipants === "function") {
                is_player0j = "no";
                fsmodal_create_ifir = `<div style="${fsmodal_createWi} height:${Number(optiy.size)}px !important;">  ${fcasfs_lightbox_createParticipants(optiy.context)}  </div>`;
            } else if (optiy.type && optiy.type == "Calendar" && typeof fcasfs_lightbox_createCalendar === "function") {
                is_player0j = "no";
                fsmodal_create_ifir = `<div style="${fsmodal_createWi} height:${Number(optiy.size)}px !important;">  ${fcasfs_lightbox_createCalendar(optiy.context)}  </div>`;
            } else if (optiy.type && optiy.type == "chat" && typeof fcasfs_lightbox_chat === "function") {
                is_player0j = "no";
                fsmodal_create_ifir = `<div style="${fsmodal_createWi} height:${Number(optiy.size)}px !important;">  ${fcasfs_lightbox_chat(optiy.context, fcas_lightbox_checkValueEX(optiy,"config","Lang","en") || "en")}  </div>`;
            } else if (optiy.type && optiy.type == "banner" && typeof fcasfs_lightbox_banner === "function") {
                is_player0j = "no";
                fsmodal_create_ifir = `<div style="${fsmodal_createWi} height:${Number(optiy.size)}px !important;">  ${fcasfs_lightbox_banner(optiy.context, fcas_lightbox_checkValueEX(optiy,"config","Lang","en") || "en")}  </div>`;
            } else if (optiy.type && optiy.type == "faq" && typeof fcasfs_lightbox_faq === "function") {
                is_player0j = "no";
                fsmodal_create_ifir = `<div style="${fsmodal_createWi} height:${Number(optiy.size)}px !important;">  ${fcasfs_lightbox_faq(optiy.context, fcas_lightbox_checkValueEX(optiy,"config","Lang","en") || "en")}  </div>`;
            } else if (optiy.type && optiy.type == "testimonials" && typeof fcasfs_lightbox_testimonials === "function") {
                is_player0j = "no";
                fsmodal_create_ifir = `<div style="${fsmodal_createWi} height:${Number(optiy.size)}px !important;">  ${fcasfs_lightbox_testimonials(optiy.context, fcas_lightbox_checkValueEX(optiy,"config","Lang","en") || "en")}  </div>`;
            } else if (optiy.type && optiy.type == "gallery" && typeof fcasfs_lightbox_gallery === "function") {
                is_player0j = "no";
                fsmodal_create_ifir = `<div style="${fsmodal_createWi} height:${Number(optiy.size)}px !important;">  ${fcasfs_lightbox_gallery(optiy.context, fcas_lightbox_checkValueEX(optiy,"config","Lang","en") || "en")}  </div>`;
            } else if (optiy.type && optiy.type == "coupon" && typeof fcasfs_lightbox_coupon === "function") {
                is_player0j = "no";
                fsmodal_create_ifir = `<div style="${fsmodal_createWi} height:${Number(optiy.size)}px !important;">  ${fcasfs_lightbox_coupon(optiy.context, fcas_lightbox_checkValueEX(optiy,"config","Lang","en") || "en","fs_modal_"+klf+"_cxav")}  </div>`;
            } else if (optiy.type && optiy.type == "review" && typeof fcasfs_lightbox_review === "function") {
                is_player0j = "no";
                fsmodal_create_ifir = `<div style="${fsmodal_createWi} height:${Number(optiy.size)}px !important;">  ${fcasfs_lightbox_review(optiy.context, fcas_lightbox_checkValueEX(optiy,"config","Lang","en") || "en")}  </div>`;
            } else if (optiy.type && optiy.type == "leaderboard" && typeof fcasfs_lightbox_leaderboard === "function") {
                is_player0j = "no";
                fsmodal_create_ifir = `<div style="${fsmodal_createWi} height:${Number(optiy.size)}px !important;">  ${fcasfs_lightbox_leaderboard(optiy.context, fcas_lightbox_checkValueEX(optiy,"config","Lang","en") || "en")}  </div>`;
            } else if (optiy.type && optiy.type == "searchbar" && typeof fcasfs_lightbox_searchbar === "function") {
                is_player0j = "no";
                fsmodal_create_ifir = `<div style="${fsmodal_createWi} height:${Number(optiy.size)}px !important;">  ${fcasfs_lightbox_searchbar(optiy.context, fcas_lightbox_checkValueEX(optiy,"config","Lang","en") || "en")}  </div>`;
            } else if (optiy.type && optiy.type == "Sorteio" && typeof fcasfs_lightbox_createRaffle === "function") { 
                is_player0j = "no";
                fsmodal_create_ifir = `<div style="${fsmodal_createWi} height:${Number(optiy.size)}px !important;">  ${fcasfs_lightbox_createRaffle(optiy.context)}  </div>`;
            } else if (optiy.type && optiy.type == "treeview" && typeof fcafs_lightboc_treeview === "function") {
                is_player0j = "no";
                fsmodal_create_ifir = `<div style="${fsmodal_createWi} height:${Number(optiy.size)}px !important;">  ${fcafs_lightboc_treeview(optiy.context)}  </div>`;
            } else if (optiy.type && optiy.type == "mindmap" && typeof fcafs_lightboc_mindmap === "function") {
                is_player0j = "no";
                fsmodal_create_ifir = `<div style="${fsmodal_createWi} height:${Number(optiy.size)}px !important;">  ${fcafs_lightboc_mindmap(optiy.context)}  </div>`;
            } else if (optiy.type && optiy.type == "plans" && typeof fcasf_lightbox_price_plan === "function") {
                is_player0j = "no";
                fsmodal_create_ifir = `<div style="${fsmodal_createWi} height:${Number(optiy.size)}px !important;">  ${fcasf_lightbox_price_plan(optiy.context)}  </div>`;
            } else if (optiy.type && optiy.type == "dashboard" && typeof fcas_lightbox_dashboard === "function") {
                is_player0j = "no";
                fsmodal_create_ifir = `<div style="${fsmodal_createWi} height:${Number(optiy.size)}px !important;">  ${fcas_lightbox_dashboard(optiy.context)}  </div>`;
            } else if (optiy.type && optiy.type == "contact" && typeof fcas_lightbox_contato === "function") {
                is_player0j = "no";
                fsmodal_create_ifir = `<div style="${fsmodal_createWi} height:${Number(optiy.size)}px !important;">  ${fcas_lightbox_contato(optiy.context || {})}  </div>`;
            } else if (optiy.type && optiy.type == "map" && typeof fcas_lightbox_mapa === "function") {
                is_player0j = "no";
                fsmodal_create_ifir = `<div style="${fsmodal_createWi} height:${Number(optiy.size)}px !important;">  ${fcas_lightbox_mapa({ tema: "claro", modelo: fcas_lightbox_checkValueEX(optiy,"config","modelo","") || "", tamanhoMapa:"80%", locais: optiy.context || [] })}  </div>`;
            } else if (optiy.type && optiy.type == "product" && typeof fcas_lightbox_produto === "function") {
                is_player0j = "no";
                fsmodal_create_ifir = `<div style="${fsmodal_createWi} height:${Number(optiy.size)}px !important;">  ${fcas_lightbox_produto(optiy.context || {})}  </div>`;
            } else if (optiy.type && optiy.type == "carrossel" && typeof fcas_lightbox_criarCarrossel === "function") {
                is_player0j = "no";
                fsmodal_create_ifir = `<div style="${fsmodal_createWi} height:${Number(optiy.size)}px !important;">  ${fcas_lightbox_criarCarrossel({ titulo: fcas_lightbox_checkValueEX(optiy,"config","titulo",""), textoOpcional: fcas_lightbox_checkValueEX(optiy,"config","textoOpcional",""), tema: fcas_lightbox_checkValueEX(optiy,"config","tema","dark"), transicao: fcas_lightbox_checkValueEX(optiy,"config","transicao","slide"),  posicaoDots: fcas_lightbox_checkValueEX(optiy,"config","posicaoDots","center"),  estiloDots: fcas_lightbox_checkValueEX(optiy,"config","estiloDots","barras"),  exibirControles: fcas_lightbox_checkValueEX(optiy,"config","exibirControles",true), exibirDots: fcas_lightbox_checkValueEX(optiy,"config","exibirDots",true), autoPlay: fcas_lightbox_checkValueEX(optiy,"config","autoPlay",false), botoesControle: ["prev","play", "pause", "stop", "next", "dots", "fullscreen"],  intervalo: fcas_lightbox_checkValueEX(optiy,"config","intervalo",3000), imagens: optiy.context    })}  </div>`;
            } else if (optiy.type && optiy.type == "grafico" && typeof fcas_lightbox_criarGrafico === "function") {
                is_player0j = "no";
                fsmodal_create_ifir = `<div style="${fsmodal_createWi} height:${Number(optiy.size)}px !important;">  ${fcas_lightbox_criarGrafico({ titulo: fcas_lightbox_checkValueEX(optiy,"config","titulo",""), textoOpcional: fcas_lightbox_checkValueEX(optiy,"config","textoOpcional",""), tema: fcas_lightbox_checkValueEX(optiy,"config","tema","azul"), exibirValores: fcas_lightbox_checkValueEX(optiy,"config","exibirValores",true), modelo: fcas_lightbox_checkValueEX(optiy,"config","modelo","barras"), orientacao: fcas_lightbox_checkValueEX(optiy,"config","orientacao","horizontal"), exibirTooltips: fcas_lightbox_checkValueEX(optiy,"config","exibirTooltips",true), larguraBarra: fcas_lightbox_checkValueEX(optiy,"config","larguraBarra",0.50), raioCurva: fcas_lightbox_checkValueEX(optiy,"config","raioCurva",8), alturaMax: 260, dados: optiy.context })}  </div>`;
            } else if (optiy.type && optiy.type == "notepad" && typeof fcas_lightbox_notepad === "function") {
                is_player0j = "no";
                fsmodal_create_ifir = `<div style="${fsmodal_createWi} height:${Number(optiy.size)}px !important;">  ${fcas_lightbox_notepad(optiy.context || "", { textAlign: fcas_lightbox_checkValueEX(optiy,"config","textAlign","center") || "center", fontSize: fcas_lightbox_checkValueEX(optiy,"config","fontSize",16) || 16, lowercase: fcas_lightbox_checkValueEX(optiy,"config","lower",false) || false, italic: fcas_lightbox_checkValueEX(optiy,"config","italic",false) || false, uppercase: fcas_lightbox_checkValueEX(optiy,"config","upper",false) || false, bold: fcas_lightbox_checkValueEX(optiy,"config","negrito",false) || false })}  </div>`;
            } else if (optiy.type && optiy.type == "journal" && typeof fcas_lightbox_journal === "function") {
                is_player0j = "no";
                fsmodal_create_ifir = `<div style="${fsmodal_createWi} height:${Number(optiy.size)}px !important;">  ${fcas_lightbox_journal(optiy.context || [], fcas_lightbox_checkValueEX(optiy,"config","page",1) || 1)}  </div>`;
            } else if (optiy.type && optiy.type == "pdf") {
                is_player0j = "pdf";
                start_fs_mpl = { id: "fs_modal_"+klf+"_mpdf", lang: fcas_lightbox_checkValueEX(optiy,"config","Lang","en") ||'en', file:optiy.context || '', pg: fcas_lightbox_checkValueEX(optiy,"config","page",1) || 1 }
                fsmodal_create_ifir = `<div id="fs_modal_${klf}_mpdf" style="${fsmodal_createWi} height:${Number(optiy.size)}px !important;"></div>`;
            } else if (optiy.type && optiy.type == "link") {
                is_player0j = "no";
                fsmodal_create_ifir = ` ${fsmodafdl_createdd}  <iframe onload="fsmodal_close_aloder();this.style.display='block';"  allow="accelerometer *; ambient-light-sensor *; autoplay *; camera *; clipboard-read *; clipboard-write *; encrypted-media *; fullscreen *; geolocation *; gyroscope *; magnetometer *; microphone *; midi *; payment *; picture-in-picture *; screen-wake-lock *; speaker *; sync-xhr *; usb *; web-share *; vibrate *; vr *" sandbox="allow-downloads allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-top-navigation-by-user-activation allow-storage-access-by-user-activation" frameborder="0" allowfullscreen src="${optiy.context}" style="display:none;  ${fsmodal_createWi} height: ${Number(optiy.size)}px !important;  "></iframe>`;
            } else if (optiy.type && optiy.type == "image") {
                var is_player0jmgtrt="";
                is_player0j = "no";
                if(fcas_lightbox_checkValueEX(optiy,"config","scale",false)==true){  is_player0jmgtrt=' style="${fsmodal_createWi} pointer-events:auto;" onclick="fcas_lightbox_alternarAmpliacao(this);" ';  }

                fsmodal_create_ifir = `<div class="lightboxtimdd" ${is_player0jmgtrt}>  ${fsmodafdl_createdd}  <img class="ffimg" onload="fsmodal_close_aloder();this.style.display='inline-block';" src="${optiy.context}" style="${fcafs_lightbox_obterCssObjectFit(fcas_lightbox_checkValueEX(optiy,"config","fit",""))}  display:none;user-select:none;pointer-events:none; width:${Number(optiy.size)}px;" />  </div>`;
            } else if (optiy.type && optiy.type == "texto") {
                is_player0j = "no";
                var fcas_lightbox_checkValueEX_it="";   var fcas_lightbox_checkValueEX_bolff="";    var fcas_lightbox_checkValueEX_bolsdff="";
                if(fcas_lightbox_checkValueEX(optiy,"config","italic",false)==true){   fcas_lightbox_checkValueEX_it=" font-style: italic;  "  }
                if(fcas_lightbox_checkValueEX(optiy,"config","negrito",false)==true){   fcas_lightbox_checkValueEX_bolff=" font-weight: 700;  "  }
                if(fcas_lightbox_checkValueEX(optiy,"config","lower",false)==true){   fcas_lightbox_checkValueEX_bolff=" text-transform: lowercase;  "  }
                if(fcas_lightbox_checkValueEX(optiy,"config","upper",false)==true){   fcas_lightbox_checkValueEX_bolff=" text-transform: uppercase;  "  }
	
                fsmodal_create_ifir = `<br/> <div class="txt" style="${fsmodal_createWi}  height:${Number(optiy.size)}px !important;">  ${optiy.context}  </div>  <br/>   <style> .tlightboc_fcasfs .txt {   ${fcas_lightbox_checkValueEX_bolsdff}   ${fcas_lightbox_checkValueEX_it}  ${fcas_lightbox_checkValueEX_bolff}   font-size: ${fcas_lightbox_checkValueEX(optiy,"config","fontSize","14px")};    text-align: ${fcas_lightbox_checkValueEX(optiy,"config","textAlign","center")};   color: ${fcas_lightbox_checkValueEX(optiy,"config","color","#fff")};  }   .tlightboc_fcasfs .txt hr {   border-color: ${fcas_lightbox_checkValueEX(optiy,"config","color","#fff")}; color: ${fcas_lightbox_checkValueEX(optiy,"config","color","#fff")};  } </style> <br/><br/>`;
            }  if (optiy.type && optiy.type == "svg") {
                is_player0j = "no";    var fis_playerf0jmgtrt="";
                if(fcas_lightbox_checkValueEX(optiy,"config","scale",false)==true){  fis_playerf0jmgtrt=' onclick="fcas_lightbox_alternarAmpliacao(this);" ';  }
				
                fsmodal_create_ifir = `<br/> <div ${fis_playerf0jmgtrt} style="${fsmodal_createWi}"> ${optiy.context}  </div>   <style> .tlightboc_fcasfs svg {   pointer-events: none;    width: ${Number(optiy.size)}px;    height: ${Number(optiy.size)}px;    fill: ${fcas_lightbox_checkValueEX(optiy,"config","fill","currentColor")};    stroke: ${fcas_lightbox_checkValueEX(optiy,"config","stroke","currentColor")};  }  </style> <br/><br/>`;
				var fis_playerf0jmgtdrt = fcas_lightbox_gehLinkSvg(optiy.context);
				if(fis_playerf0jmgtdrt===true){
                   fsmodal_create_ifir = `<div class="lightboxtimdd" ${fis_playerf0jmgtrt}>  ${fsmodafdl_createdd}  <img class="ffimg" onload="fsmodal_close_aloder();this.style.display='inline-block';" src="${optiy.context}" style="${fcafs_lightbox_obterCssObjectFit(fcas_lightbox_checkValueEX(optiy,"config","fit",""))}  display:none;user-select:none;pointer-events:none; width:${Number(optiy.size)}px;" />  </div>`;
				}
            }  else if (optiy.type && optiy.type == "audio") {
                is_player0j = "yes";
				var fcas_lightbox_bindVisualizerToAuds=function(){};
				if (visualaudd && visualaudd===true){
					fcas_lightbox_bindVisualizerToAuds=function(meuPlayerCustomizado, id){
                       if(typeof fcas_lightbox_audioVisualizer === "function"){  fcas_lightbox_bindVisualizerToAudio(meuPlayerCustomizado, fcas_lightbox_audioVisualizer("oframe"+id, { color: 'linear-gradient(to top, #fff, #ccc)', barCount: 36, speed: 98 }));    }
					};
				}
                var tlafn_odslight=fcas_lightbox_checkValueEX(optiy,"config","Lang","en");    if(fcas_lightbox_checkValueEX(optiy,"config","OSD_Lang","")!=""){tlafn_odslight=fcas_lightbox_checkValueEX(optiy,"config","OSD_Lang","en");}
                if (optiy.poster && optiy.poster != "") {   start_fs_postermpl = optiy.poster;   }
                start_fs_mpl = {
                    iscll:fcas_lightbox_bindVisualizerToAuds,
                    OSD: fcas_lightbox_checkValueEX(optiy,"config","OSD",false),
                    config: {
                    autoplay:""+fsmodal_booleanToNumber(fcas_lightbox_checkValueEX(optiy,"config","autoplay",false)) || "0",
                    mute:""+fsmodal_booleanToNumber(fcas_lightbox_checkValueEX(optiy,"config","mute",false)) || "0",
                    coloricons:fcas_lightbox_checkValueEX(optiy,"config","colorIcon","fff") || "fff",
                    colortexts:fcas_lightbox_checkValueEX(optiy,"config","colorText","fff") || "fff",
                    contextmenu_namedisplay: fsmodal_createWi_infiio, contextmenu_display: fsmodal_creddateWi_infiio,
                    contextmenu:""+fsmodal_booleanToNumber(fcas_lightbox_checkValueEX(optiy,"config","contextmenu",true)) || "1",
                    OSD_Lang: tlafn_odslight || "en",
                    OSD_Pos:"top-"+fcas_lightbox_checkValueEX(optiy,"config","OSD_Pos","center") || "center",
                    OSD_Events:fcas_lightbox_checkValueEX(optiy,"config","OSD_Events",[]) || [],
                    osd:{  theme:fcas_lightbox_checkValueEX(optiy,"config","OSD_Theme","dark"), duration:fcas_lightbox_checkValueEX(optiy,"config","OSD_Time",3e3) || 3e3, width:"auto" },
                    volume:fcas_lightbox_checkValueEX(optiy,"config","volume","1"),
                    pos_time:""+convertDurationtoSecondsR(fcas_lightbox_checkValueEX(optiy,"config","pos_time","0")) || "0"
                    },
                    id: "fs_modal_"+klf+"_mplayer",
                    customtext: { age: fcas_lightbox_checkValueEX(optiy,"config","txt","") || "" },
                    nocontrols: fsmodal_booleanToNumber(fcas_lightbox_checkValueEX(optiy,"config","nocontrols",false)) || 0,
                    autoplay: 0,
                    stretch:fsmodal_booleanToNumber(fcas_lightbox_checkValueEX(optiy,"config","stretch",false)) || 0,
                    loop: fsmodal_booleanToNumber(fcas_lightbox_checkValueEX(optiy,"config","loop",false)) || 0,
                    lang: fcas_lightbox_checkValueEX(optiy,"config","Lang","en") || "en",
                    plstart: "fcas_lightbox_playerf_"+ fcas_lightbox_checkValueEX(optiy,"config","select","1") || "1",
                    title: optiy.title,
                    file: optiy.context,
                    poster: start_fs_postermpl,
                    player: 1
                };
				if (app && app != "yes") {
				fsmodal_create_ifir = `<div style="${fsmodal_createWi} height:${Number(optiy.size)}px !important; ">   ${fcas_lightbox_aviso_pl(fcas_lightbox_checkValueEX(optiy,"config","Lang","en") || "en")}  </div>`;
				} 
                if (app && app === "yes") {  fsmodal_create_ifir = `<div id="fs_modal_${klf}_mplayer" style="${fsmodal_createWi}  height:${Number(optiy.size)}px !important;">${fsmodafdl_createdd}</div>`;     }
				
            } else if (optiy.type && (optiy.type == "youtube" || optiy.type == "video" || optiy.type == "PList")) {
                is_player0j = "yes";
                var tlafn_odslight=fcas_lightbox_checkValueEX(optiy,"config","Lang","en");    if(fcas_lightbox_checkValueEX(optiy,"config","OSD_Lang","")!=""){tlafn_odslight=fcas_lightbox_checkValueEX(optiy,"config","OSD_Lang","en");}
                var start_is_player0j=optiy.context;
                if(optiy.type == "PList") {   start_is_player0j=fsmodal_listaFiles(optiy.context);  }
                else if(optiy.type == "youtube") {  start_is_player0j="https://www.youtube.com/watch?v="+optiy.context;  }
                if (optiy.poster && optiy.poster != "") {   start_fs_postermpl = optiy.poster;   }
                start_fs_mpl = {
                    iscll:function(){},
                    OSD: fcas_lightbox_checkValueEX(optiy,"config","OSD",false),
                    config: {
                    autoplay:""+fsmodal_booleanToNumber(fcas_lightbox_checkValueEX(optiy,"config","autoplay",false)) || "0",
                    mute:""+fsmodal_booleanToNumber(fcas_lightbox_checkValueEX(optiy,"config","mute",false)) || "0",
                    contextmenu_namedisplay: fsmodal_createWi_infiio, contextmenu_display: fsmodal_creddateWi_infiio,
                    contextmenu:""+fsmodal_booleanToNumber(fcas_lightbox_checkValueEX(optiy,"config","contextmenu",true)) || "1",
                    coloricons:fcas_lightbox_checkValueEX(optiy,"config","colorIcon","fff") || "fff",
                    colortexts:fcas_lightbox_checkValueEX(optiy,"config","colorText","fff") || "fff",
                    OSD_Lang:tlafn_odslight || "en",
                    OSD_Pos:"top-"+fcas_lightbox_checkValueEX(optiy,"config","OSD_Pos","center") || "center",
                    OSD_Events:fcas_lightbox_checkValueEX(optiy,"config","OSD_Events",[]) || [],
                    osd:{  theme:fcas_lightbox_checkValueEX(optiy,"config","OSD_Theme","dark"), duration:fcas_lightbox_checkValueEX(optiy,"config","OSD_Time",3e3) || 3e3, width:"auto" },
                    volume:fcas_lightbox_checkValueEX(optiy,"config","volume","1"),
                    pos_time:""+convertDurationtoSecondsR(fcas_lightbox_checkValueEX(optiy,"config","pos_time","0")) || "0"
                    },
                    id: "fs_modal_"+klf+"_mplayer",
                    customtext: { age: fcas_lightbox_checkValueEX(optiy,"config","txt","") || "" },
                    plstart: "fcas_lightbox_playerf_"+ fcas_lightbox_checkValueEX(optiy,"config","select","1") || "1",
                    lang: fcas_lightbox_checkValueEX(optiy,"config","Lang","en") || "en",
                    nocontrols: fsmodal_booleanToNumber(fcas_lightbox_checkValueEX(optiy,"config","nocontrols",false)) || 0,
                    autoplay: 0,
                    stretch:fsmodal_booleanToNumber(fcas_lightbox_checkValueEX(optiy,"config","stretch",false)) || 0,
                    loop: fsmodal_booleanToNumber(fcas_lightbox_checkValueEX(optiy,"config","loop",false)) || 0,
                    title: optiy.title,
                    file: start_is_player0j,
                    poster: start_fs_postermpl,
                    player: 1
                };
                if (app && app != "yes") {
				fsmodal_create_ifir = `<div style="${fsmodal_createWi} height:${Number(optiy.size)}px !important; ">   ${fcas_lightbox_aviso_pl(fcas_lightbox_checkValueEX(optiy,"config","Lang","en") || "en")}  </div>`;
				} 
                if (app && app === "yes") {  fsmodal_create_ifir = `<div id="fs_modal_${klf}_mplayer" style="${fsmodal_createWi}  height:${Number(optiy.size)}px !important;">${fsmodafdl_createdd}</div>`;   }
            }
            fsmodal_createdd += `<span id="${klf}_boxx" class="tlightboc_fcasfs" style="overflow:auto; padding:6px; margin: 0 auto; width:96%; text-align:center; display:block; color:#fff;">${fsmodal_create_ifir} ${fsmodal_create_desci} <br/><br/><br/><br/></span><br/><br/>`;
        }
        fsmodadfdl_createdd = fsmodal_createdd;    return fsmodadfdl_createdd;   }
return fsmodadfdl_createdd;   }  


var adultlightboxPLclayer_modiuu=function(){};

function fsmodal_close(id, hide) {  
    if (id && id !== "") {  lightboxPLclayerff_zoffmodiuu=function(){};    lightboxPLclos_mowaud=function(){};   lightboxPLclayer_zoommodiuu=function(){};    lightboxPLclayer_adultmodiuu=function(){};   lightboxPLclayer_adfffultmodiuu=function(){};    adultlightboxPLclayer_modiuu=function(){};
if(lightboxPLcloapis){  lightboxPLcloapis();  }	

var botaotopscrr = document.querySelector('.fcas_lightbox_scroll-top-btn');    if (botaotopscrr) {   botaotopscrr.remove();    }

if(lightboxPLclos){  lightboxPLclos();  }
if(lightboxPLclos_mod){  lightboxPLclos_mod();  }
		
var modalElement = document.getElementById(id);
if (modalElement) {    
lightboxPLclop_mod=function(){  };
lightboxPLclayer_mod=function(){   };    lightboxPLclayer_modiuu=function(){};
lightboxPLclos_mod=function(){  };
lightboxPLcloapis=function(){  };         feedsfsmodal_create=function(){};    
modalElement.innerHTML = "";
if (hide && hide === "yes") {   fcasfs_lightbox_alternarScrollBody(false);   }
modalElement.remove();
}
    }
}


function fcas_lightbox_alternarAmpliacao(el){const img=typeof el==='string'?document.querySelector(el):el;img.style.transform=img.style.transform==="scale(1.5)"?("scale(1)",img.style.zIndex="auto","scale(1)"):("scale(1.5)",img.style.zIndex="9999","scale(1.5)");}

function fcas_lightbox_aviso_pl(idioma){var texto=(idioma==="en")?"The selected media cannot be played with the \"TECH Player\" because it has not been implemented in LightBox.":"A mídia selecionada não pode ser reproduzida com o \"TECH Player\" porque não foi implementada no LightBox.";return '<style>.fcas_lightbox_avisos{box-sizing:border-box;width:100%!important;padding:20px!important;margin:10px auto!important;background-color:#f8d7da!important;color:#721c24!important;border:1px solid #f5c6cb!important;border-radius:6px!important;font-family:system-ui,-apple-system,sans-serif!important;font-size:16px!important;line-height:1.5!important;display:flex!important;align-items:center!important;gap:15px!important}.fcas_lightbox_avisos svg{width:28px!important;height:28px!important;fill:#721c24!important;flex-shrink:0!important}.fcas_lightbox_avisos span{flex:1!important;word-break:break-word!important}@media(max-width:580px){.fcas_lightbox_avisos{flex-direction:column!important;text-align:center!important;padding:15px!important}}</style><div class="fcas_lightbox_avisos"><svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg><span>'+texto+'</span></div>';}

var is_player0j= "no";    var fsmodal_clall_menussd = "";    var dcurrent_id = 0;    var is_player0j = "no";    var start_fs_mpl = {};    var fsmodal_createdd = "";    var start_fs_postermpl = "";

function fsmodal_booleanToNumber(value) { return (value === null || value === undefined) ? 0 : (value === true ? 1 : 0); }

function fsmodal_listaFiles(arrayInterno){  var arrayIntfferno=[];
if(arrayInterno){
for(var j=0; j<arrayInterno.length; j++){
arrayIntfferno[j]={id:"fcas_lightbox_playerf_"+(j+1),title:arrayInterno[j].title || "",file:arrayInterno[j].file || "",poster:arrayInterno[j].poster || ""};
}
}  return arrayIntfferno;  }


function convertDurationtoSecondsR(duration){    const timhdfff= duration.split(':') || "0";    if(timhdfff.length==1){      return Number(timhdfff[0]);    }  else if(timhdfff.length==2){    return Number(timhdfff[0]) * 60 + Number(timhdfff[1]);    }  else{      return Number(timhdfff[0]) * 60 * 60 + Number(timhdfff[1]) * 60 + Number(timhdfff[2]);   }   }

var feedsfsmodal_create=function(){};

function fcas_lightbox_objs_htmm(dofd, fcasfs_lightbox_baseUrl) {   var dffcas_lightbox_objs_htmm="";  
 if(dofd){  dffcas_lightbox_objs_htmm = fcasfs_lightbox_def_icriarLONBD(fcasfs_lightbox_baseUrl, dofd.value, dofd.obj, dofd.player, dofd.id, dofd.app, dofd.check, dofd.barsAudio);    return dffcas_lightbox_objs_htmm;     }      
return dffcas_lightbox_objs_htmm;     } 


function playerfs_osf_evensdef(eventsList, lang = "pt", plobf,timf,kk){    if(plobf){    registerPlayerOSDEvents(plobf, eventsList, lang || "pt", timf,"absolute",kk || "top-center");    }    }


function fcasfs_gerarEstiloLightbox(optiy) {
return `<style id="fs_modal_${optiy.id}_css_custom"> 
  ${fcas_lightbox_generateResponsiveFontCSS({ id: "fs_modal_" + optiy.id + ".modal_fs_lightbox", font: optiy.font || "" })} 
  ${fcas_lightbox_bloquearPrint("fs_modal_" + optiy.id + "", optiy.noprint || false)} 
  #fs_modal_${optiy.id}.modal_fs_lightbox.teff, #fs_modal_${optiy.id}.modal_fs_lightbox.teff * {    transition: all ${optiy.duration_efect || "0.2"}s linear !important;   }
   #fs_modal_${optiy.id}.modal_fs_lightbox img {  pointer-events:none;  }    fs_modal_${optiy.id}.modal_fs_lightbox, #fs_modal_${optiy.id}.modal_fs_lightbox * { -webkit-print-color-adjust: exact !important;        print-color-adjust: exact !important;        color-adjust: exact !important;     }
    .modal_fs_lightbox .classic-spinner{  border-top:6px solid #${fcas_lightbox_checkValueEX(optiy.content, "config", "colorIcon", "fff") || "fff"} !important;  -webkit-animation:modal_fs_lightbox_girarSpinner 0.5s linear infinite;animation:modal_fs_lightbox_girarSpinner 0.5s linear infinite;  }
    #fs_modal_${optiy.id}.modal_fs_lightbox.customstyle_${optiy.id} .menulight_scrollmenu {       background-color: ${fcasfs_lightbox_converterHexParaRgba(fcasfs_lightbox_ajustarHex(fcas_lightbox_checkValueEX(optiy.content, "config", "BG_Color", "111") || "111"), "1", false)};    border: 1px solid #ccc;  }
    #fs_modal_${optiy.id}.modal_fs_lightbox.customstyle_${optiy.id} {  background-color: ${fcasfs_lightbox_converterHexParaRgba(fcasfs_lightbox_ajustarHex(fcas_lightbox_checkValueEX(optiy.content, "config", "BG_Color", "000") || "000"), fcas_lightbox_checkValueEX(optiy.content, "config", "BG_Opacity", "0.9") || "0.9", true)};  -webkit-backdrop-filter: blur(${fcas_lightbox_checkValueEX(optiy.content, "config", "BG_Blur", "6") || "6"}px) !important;   backdrop-filter: blur(${fcas_lightbox_checkValueEX(optiy.content, "config", "BG_Blur", "6") || "6"}px) !important;  }
   #fs_modal_${optiy.id} #fs_modal_${optiy.id}_content .tlightboc_fcasfs, #fs_modal_${optiy.id} #fs_modal_${optiy.id}_content h1 {  color:#${fcas_lightbox_checkValueEX(optiy.content, "config", "colorText", "fff") || "fff"} !important;  }
</style>`;
}


function loaded_playerinf(mfplayeri, dstart_fs_mpl = {}) {     
if (typeof fs_Playerjs === "function") {
mfplayeri = fs_Playerjs(dstart_fs_mpl);
if(mfplayeri){  
lightboxPLclos=function(){  if(dstart_fs_mpl.id && dstart_fs_mpl.id!="" && document.getElementById(dstart_fs_mpl.id)){  document.getElementById(dstart_fs_mpl.id).remove();  }  };
lightboxPLcloapis=function() {    if (mfplayeri){  mfplayeri.api("stop");  }   }
mfplayeri.OnEvents("ui",function(){  });
mfplayeri.OnEvents("init",function(){  
if(dstart_fs_mpl.stretch && dstart_fs_mpl.stretch=="1"){  mfplayeri.api('stretch',1);      }

if(dstart_fs_mpl.config.autoplay && dstart_fs_mpl.config.autoplay=="1"){     }

if (typeof dstart_fs_mpl.iscll === 'function') {
	dstart_fs_mpl.iscll(mfplayeri, dstart_fs_mpl.id);
}

fcas_lightbox_escutarPrint({
  quandoAparece: function() { if (mfplayeri){     mfplayeri.api("pause");  }    },
  quandoSumiu: function() {  }
});

mfplayeri.OnEvents("metadata",function(){   lightboxPLclayer_mod({ text:mfplayeri.api("title"), info:convertSecondsDurationto(mfplayeri.api("duration")) });
if(mfplayeri.api("playlist_length") && mfplayeri.api("playlist_length")>=2){  lightboxPLclayer_modiuu({ tp:"playlist", text:"length", info:mfplayeri.api("playlist_length") });    }								  
});
mfplayeri.api('seek',Number(stringno_valtext(dstart_fs_mpl.config.pos_time,"0")));    
mfplayeri.api("volume", Number(stringno_valtext(dstart_fs_mpl.config.volume,"1")));  if(stringno_valtext(dstart_fs_mpl.config.volume,"")==""){   mfplayeri.api("volume", 1);    }
if(dstart_fs_mpl.config.mute && dstart_fs_mpl.config.mute=="1"){  mfplayeri.api('mute');      }

});
}
if(dstart_fs_mpl.OSD==true){   playerfs_osf_evensdef(dstart_fs_mpl.config.OSD_Events || [], dstart_fs_mpl.config.OSD_Lang || "en", mfplayeri, dstart_fs_mpl.config.osd.duration || 3e3, dstart_fs_mpl.config.OSD_Pos || "top-center");    }

}   }


var start_fs_mpl = {};     
function mfplayeridd(){  }     
var is_player0j = "no";   var fsmodal_createdd = "";    var start_fs_postermpl = "";

var fcasfs_lightbox_baseTk = "";       var fcasfs_lightbox_baseTk_ch = false;
fcasfs_lightbox_def_injetarScript({ app: "TECH-LightBox", folder: "app", base: fcasfs_lightbox_baseUrl, id: "fcasfs_script-lightbox-def_cr", src: "[URL]/[APP]/[FOLDER]src_def.js", onload: '  fcasfs_lightbox_baseTk = fcas_lightbox_obterToken();    fcasfs_lightbox_baseTk_ch = fcas_lightbox_processarLd();  document.getElementById("[ID]").remove();'  });


function fcas_lightbox_fsmodal_open(optiy){     var fcas_lightbox_fsmoddcrue=optiy.id;   const num_fsmodal_open=Math.floor(1000+Math.random()*90000);
lightboxPLclos=function(){   };     feedsfsmodal_create=function(){   fsmodal_close(optiy.id, optiy.scroll_hide);    };  
lightboxPLcloapis=function(){   };
lightboxPLclos_mod=function(){   if(optiy.onClose && typeof optiy.onClose === 'function'){   optiy.onClose({ title:""+optiy.content.title || "", tipo:""+optiy.content.type || "none" });  }  };
lightboxPLclop_mod=function(onh){   if(onh && optiy.onOpen && typeof optiy.onOpen === 'function'){   optiy.onOpen(onh);  }  };
lightboxPLclayer_mod=function(onh){   if(onh && optiy.onPlayer && typeof optiy.onPlayer === 'function'){   optiy.onPlayer(onh);  }  };
lightboxPLclayer_adultmodiuu=function(onh){   if(onh && optiy.onAdult && typeof optiy.onAdult === 'function'){   optiy.onAdult(onh);  }  };
lightboxPLclayer_modiuu=function(onh){   if(onh && optiy.onPlayer_Playlist && typeof optiy.onPlayer_Playlist === 'function'){   optiy.onPlayer_Playlist(onh);  }  };
lightboxPLclayer_zoommodiuu=function(onh){   if(onh && optiy.onZoom && typeof optiy.onZoom === 'function'){   optiy.onZoom(onh);  }  };
lightboxPLclayerff_zoffmodiuu=function(onh){   if(onh && optiy.onLoad && typeof optiy.onLoad === 'function'){   optiy.onLoad(onh);  }   };
										   
start_fs_mpl = {};    fsmodal_createdd = "";    start_fs_postermpl = "";     
function mfplayeridd(){  }    

var optincludeplayider = "fcasfs_lightbox_"+num_fsmodal_open;    var optincludeplayer = "no";
    if (optiy && optiy.include && optiy.include.player == "yes") {        optincludeplayer = "yes";    }
var thumsds_efestr = "";       var fsmodal_open_closegi = "";
var optincludeplayider_url = fcasfs_lightbox_criarLinkDoObjeto({ pagina: "app", arquivo: "fcasfs_lightbox"+".html", obj: { add: optiy.id || "", id: ""+num_fsmodal_open, tipo: ""+optiy.content.type || "" }, install: location.href || "",  hash: ""+optincludeplayer });

	if (optiy && optiy.scroll_hide && optiy.scroll_hide == "yes") {        fsmodal_open_closegi = ", '" + optiy.scroll_hide + "'";    }
    if (optiy && optiy.id != "") {    optincludeplayider=optincludeplayider+"_"+optiy.id; 	}

	if (optincludeplayider && optincludeplayider != "") {
	optiy.id=optincludeplayider;
		
	 lightboxPLclos_mod=function(){   if(optiy.onClose && typeof optiy.onClose === 'function'){   optiy.onClose({ title:""+optiy.content.title || "", tipo:""+optiy.content.type || "none" });  }  };

        var fsmodal_offpen_tipf_zoomm = "";     var fsmodal_offpen_tipf = "";     var fsmodal_open_tipf = "";     var momocsifipsl_chd="no";
		
        if (optiy.loader && optiy.loader === true) {	momocsifipsl_chd="yes";   }
        if (optiy.tiptext && optiy.tiptext != "") {    fsmodal_offpen_tipf = optiy.tiptext;    fsmodal_open_tipf = ' data-tooltip="' + optiy.tiptext + '" data-flow="left"';       }
		
        var close_fsmofla_strdd = true;
        var close_fsmofla_str = `<div style="margin-left:4px;" class="ssclose" onclick="fsmodal_close('${optiy.id}'${fsmodal_open_closegi});" ${fsmodal_open_tipf}><span class="icon"></span></div>`;
        if (optiy.noclose && optiy.noclose === true) {           close_fsmofla_str = "";            close_fsmofla_strdd = false;        }
        var close_fsmofla_efestr = " eff teff";        var btnys_fsmofla_efestr = "";
        if (optiy.remove_efect && optiy.remove_efect === true) {            close_fsmofla_efestr = " reff";        }
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

var scrcontedfddd = document.createElement("div");
scrcontedfddd.innerHTML = "";   scrcontedfddd.id=optiy.id;    
scrcontedfddd.setAttribute("src_id", ""+num_fsmodal_open);   scrcontedfddd.setAttribute("src_type", ""+optiy.content.type || "none");
scrcontedfddd.setAttribute("src_ul", ""+optincludeplayider_url);  
document.getElementsByTagName("body")[0].appendChild(scrcontedfddd);    
var fcaslightconetxndif="";
		
var momocsifipsl = document.getElementById(optiy.id);
if (momocsifipsl) {
momocsifipsl.innerHTML='';
lightboxPLclayer_adfffultmodiuu=function(){   lightboxPLclayer_adultmodiuu("no");   };
adultlightboxPLclayer_modiuu=function(dddd){  lightboxPLclayer_adultmodiuu("yes");   var teipacuttempelementocurr=""; if (dddd && dddd!="") {  if(document.getElementById(dddd)){  var teipacuttempelemento = document.getElementById(dddd);  teipacuttempelementocurr=convertDurationtoSecondsR(teipacuttempelemento.innerHTML)*1000;  }  }   addultlightboxPLclayer_modiuu_call(fcaslightconetxndif,teipacuttempelementocurr);   adultlightboxPLclayer_modiuu_call();   };

fcaslightconetxndif="";
if(typeof fcas_lightbox_objs_htmm === "function") {   
fcaslightconetxndif=fcas_lightbox_objs_htmm({ value: momocsifipsl_chd, obj: optiy.content, player: `${optiy.include ? optiy.include.player : ""}`, id: optiy.id, app: `TECH LightBox${typeof fcas_lightbox_version_ac === 'function' ? `: ${fcas_lightbox_version_ac()}` : ''}`, check: fcasfs_lightbox_baseTk_ch, barsAudio: (optiy && optiy.include && optiy.include.player === "yes" && optiy.include.plugin && optiy.include.plugin.AudioVisualizer === true) ? true : false }, fcasfs_lightbox_baseUrl);
} 

//var fcaslightconetxndiflink=fcas_lightbox_gerarTexto([fcas_lightbox_extrairTextoObjeto(optiy)]);

var fcaslighdddtconetxndif_isnort= convertDurationtoSecondsR(optiy.duration || "10:00")*1000;
var fcaslightconetxndif_isnort=fcaslightconetxndif;   var fcaslightconetxndif_isntempfort="";     var fcaslightconetxndif_isntempid_tempodsrt="";

if (optiy.zoom && optiy.zoom===true){    fsmodal_offpen_tipf_zoomm = fcasfs_lightbox_criarControleZoom('fs_modal_'+optiy.id+'_content', 1, 0.2, 0.5, 2.5);    }

if (optiy.isTemporary && optiy.isTemporary===true){    fcaslightconetxndif_isntempid_tempodsrt=`fs_modal_${optiy.id}_content_cronometro`;    fcaslightconetxndif_isntempfort=`<span id="fs_modal_${optiy.id}_content_cronometro"></span><br/>`;  }

if (optiy.isAdult && optiy.isAdult===true){     fcaslightconetxndif_isnort=fcafs_lightbox_gerarAvisoConteudoAdulto({age: optiy.age || 18, isAdult:optiy.isAdult, lang: fcas_lightbox_checkValueEX(optiy.content,"config","Lang","en") || "en", onNo:`lightboxPLclayer_adfffultmodiuu();  fsmodal_close('${optiy.id}'${fsmodal_open_closegi});`, onYes:` adultlightboxPLclayer_modiuu(\'${fcaslightconetxndif_isntempid_tempodsrt}\'); `});   }

var addultlightboxPLclayer_inffol={ idioma: fcas_lightbox_checkValueEX(optiy.content,"config","Lang","en") || "en", show:false, desenvolvedor: 'FCASFS-OF', nomeApp: 'TECH - LightBox', versaoApp: typeof fcas_lightbox_version_ac === 'function' ? fcas_lightbox_version_ac() : '', urlLogo: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAADu0lEQVR4AbxUa2wUVRQ+Z7b7gM4UDBbqrM90ZX0kbuGXiaKVpGrCP1TUEkGjhl++4oO2GtlsTOlGEtToT/lTaLUKRKiJJhob/WdCjVAoW3ZRU6gir9LZhXanM4dzbzvLzHRaXgmTc/be853vnu/cO3tHgRvwzC2STiupjt7XHsjuff16eplVJLX5u2Wp2PIzAPQZEnya6tjTcq1CgSKp7J4OQKUfABdA5cHNDdneNyvhVUxmiCzP9t4LhBudGlVoWXVVZ0siJqKtDdnvm8T8anyGiEW0zl0ghqb9rZ6p3hnPmA3RfJHI/qFh6+6Fbs7l5jNEeMEj7BULoyk5S0Jnw58v+UL9+bb34MPqrq+JACuky0xkAR/ndnccnRZxMBE3qX88XuxODBtdifsdfK4xSMRzFFGclO8joEicsQGjq/5wqTup83xWCxLxYP+YiweAaCVXOMUeYJi0yTo21pXYMtsRegpOV/CfNWprC7+oz+cXc+IF5kyy+w0593axO3Gi1HnHLf5kkAi5SQQUEjFXIbU5v90wzou7843AArzWDoWPGV8lnnHngkQsNwGBy7sAfcPIea05v8YipZ7hQXa/KWBDT3HH3W84iSARPyZ34ixwxvHsqyeMzEtHx/c+VARL8TQmOIR25UJ7CuaWbrkZCeYJkuMcezgEaeX4Pe3vWBPmOSJcVe5PqmPt6xXzQL3hrJkasXpqBPAUULHcEyLPK+EvDFY55ONLP3p4JBk5DQQfM3ZphzbihV2PaqVtqy4w7liES6EIKiJ/3ZmOMdAYsWybR5eR8m+ivZa77wdUfuOE5x5xLA2jpjXvqT5ZVAIAYehrlI0o0wBEY+HVPMeacavIozSFwF6/7786OwT/c/fLJOj/4fOMPfG7obV0KsqCkmhUMMRxFKCxzxJBRcQmbBXArWMTUv2xwqixq/MgPLv/ZGDnggsRs6S1bD8XefDgn9xEBsB+GhS8rzQ5X+N/YBKRUSZKkRE9PZ/3Kb9DjYXRSM+OQ9a7vw5rfHQyzzy/GUDYFD+wSa15cXCh1nxkhbY2n9aaj+7UnjsyWLduv+dTNFWkJryCq7AOwMrCaFQtW3I3jPltEgg26bnETfGh1p/8ydliKUJVdIgJo+xzGG4rT5S1+FBbBmGNPOs5yJ6UFIkPfDCs58qLeCtvcXac3bEJnnwZgVBNPNf68l1/p905Tl2ZSRFBRUjbeq7tExarRsLViPSkri7S4rm2V2pzG30XTay4cq+IOEuk2FDrbv3w+z/ivg2mg1/PeBEAAP//VxIBJAAAAAZJREFUAwBGlTVCySb0ngAAAABJRU5ErkJggg==' };
if(optincludeplayer === "yes"){
	addultlightboxPLclayer_inffol={ idioma: fcas_lightbox_checkValueEX(optiy.content,"config","Lang","en") || "en", show:false, desenvolvedor: 'FCASFS-OF', nomeApp: 'TECH - Player', versaoApp: '', urlLogo: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAAlCAYAAADBa/A+AAAIIUlEQVR4AexXe3BVxRn/7dk9NwnhJa+akVge4SGTRIqp1ZZXSO69vEoGpAooRStOh6kVULCItFyoEWQo0ogM9IG1ZgShERmQJDeEWBQZijIkgJAmEqTyECiEhJDknt2z/c5NbhKmE7g3pDP9w5Pvd7893377fb/z7e45GwP/x1e7kzu7uVt8ez1vu5HT+a7BDqmOsbXzHd0eaBdyOh+xNrN/6hCKjZEn9FZwp32naDM57YOh8sUilW8+p5jI0cD9qkAshdZu9igU2uFqMzn1MJ/OvXIl91pZ3DCeJyy0baQQp561+dF9Sd+xtImc9POfgLFsp1LSLzR4oIqlB74QJl9QIeXYGG9dxR0zowARk9NFUQncVNsZ05u4Wy5jBpuLTvhG5vOpCNRfSugFW/rNM5ZflMoCPoVytFkiIqf3uIYoS5VJS/zaMNRyJ6u27av2VbGYKvmuMszD6orIBXQ8AwZCsxyq8rq2bpCIyDlTpzWWiYBci0A05QcYWJwNdAGwE7BfIp1GaCHsF6oLf6OFIexmROR0YVR/RrtSmmI2hOxNVdlExJ6CRoAy9mCa9addm64NuAG2BaGLsTlWnhgRug1XR0SOpdV/SaXijCEVTJ4DmJvIDj50YICnpCS+ePKkJ30TPbP3/ObFcSteezW1FEw/AuAGAczArxwdCSIi5wTWCmuER44HokHEKpcsegS/XZrxvSULpv8y/h7OMzJOIf67lSklxXFLJ7ifyXl99cjLzjjCBL0nuh/psCVicuY4+ZF2XsC2Ktq1Kynx8OF4mlU7iIpT3fHhjgdx/EgiZs06gbfe2QLD0Pdm/3UYzT6tSFt5wmZGjhGT07vR2/6heLm8vMfdb2SNhA31X6io6IY313qxavljSEs7g+EjTlf7cwce0FqnU86wxQjbkxx1ofmgEnyfBpYX7BngsomWJphCBCvntFuivKwXlix8ArZydfGM/2cirYPeFCZsCZtcwG/OVVJ/+l52f+vCNx2R5+9PtJyqSQzqm4wh/YchIX4Q2SShwa6CVZVYNH8maqqjO4FeO4jgCoucLuQ/NqDXVte4qjp1sSrz/Amovt5crQ4dTawpm46HMgYhccAD6N2reR06layvN7DuddpD0Bd1Ae51+Em/KHLgtFvDbcnVFqGPUuxvToD9B+KuEjnX1UoX7GBVnAopdIw1nW48nvUjrC6dhofc9yE5YRC9PpyJb/DZ/3EC9vqTUpQtsoPO9EO7vSupVuW25ERAvE2jXQRs39Wv6sYNk1+pjGpcYyqoE+Jc+OMBC+VnG05KT78zBgtzJuHpJ0Yg1iWCPpoex5+XBM3QwyoQozmTszTYm07c1nBLcnoHOtHTDQ8NLjnZvZKmk1VeE5RKNSGG1+CZh00k3MNDrkBtAKrmOqoCtXDWnoNjx+Jw+FDf+5hGka3NcVxaO/ROdNCNp+jmwQ2tW5KTMcJHO6zJRzN+6OKlDlc7d6mDJmohxHHdEI1+6y9U44vMj7B+/AZszPmU/BTBbsK/vuwpyY3uodh4XIILjIg/R6eajToP3Zy+EJoShwwtNT1hUst7MHbw6/Mdqzt3riNqqhESMhD8QuFyTgn+PG4dFvm2oejK5cZ+RUQUtSUeSD6DmK7VRxjYsxR3uCow50lbfB8GCin2QDYWV8jeJLckR4MaFlGj+6H8LVXFx3t2TfhOdTBhqHIBVYuDUzfixZnrsaW4HNeUdVO/DYXhKV8hOvZGrWfsiVxA/5xCjjEMYyflGA3NnqVPYqryi8XaRxbqdOSW5Oh4tIecgp8e0rA13qqsjvpTnMvSTkIbEjYlfv79fZj3/scorbtBdw1Vcux2Y/9jU4oxdNhX6DPw/DzGWD8KuIAIxttSTTe90ucQqy9wJdnAQeajkE4yQqvkdBHuFm65xmbsBQr4B/Kt05q9tN+fs6oGzNIU41ZITj6PlZkF2OvfhMT7z+Hg570/mTGjWELrxxmQT+Q2cK98heLCyhc+ru0s0yMLnfsQbiYXspK2lXiKXpJLTcb2GlpvJZOgoJmkDfeU0+bW9fswf85RxMVVwaZ63dWtBlMnl2L5kk+wLfsDZK0uQHLiRfxu1Sjs/CDxcuaKvGw6QmXReEd2C4+a4zQU/cdmGEQZKKGj/U0Hg5vI0Uc9SubzWYSJNG+vMoaJLD1QYmlWqTVKNR2/KeARwsU+CVWYNrmidvvbe3HQv0N9uCUX8+YUY8zIr9Gje50sLBhQ/8oytxo27NyRzNd2H6exG2hcLMGR8Yo2g9OguD6tMVqY8gXB5XHHFoIRagQ1h7CZKuYu9Rk35V1U+qO6CF1dXutzpXiG1vABuA6whQyo4ZBux09pmUi+UzRQBuDvnNufpbnLojJX7uap6WVDyTaK0CTk93tjvxWsolZIpbpttC2xmKXhbJMTNW4ix7yocXlwBJ3wb2WZ6wHWHYoPr81FHyFUuWL8XeGRGdy0NtPx50kFPlvWiaFRXpwUHrWd1sxAboifUfK9ABzQGqdWs/yDHmIC+c1jPgT7nPMhv6a2nbvS4VDF5q59ml3RvG1bGlkKLOGxZgiPnGTbbEjMOJxmwAoBexRN+VSWCglOf2BJjGMxWlwsve4UJX+ZxqYROIG1wA+ER+1u4R5sskeh4qdV5fadXnk6aGj8MRp1q0qDXdS0czVAi1XPVAYvVX5xTCs2WHhkitYI7rhWA9xBx23JUQX/QpW64BDhtpwc5Q4cpUFzBYz3nLymV+5z9P8ClCf8sKHPC/PIQuYNnAx/ZNs8IyLXthRtH/UtubbW7j8AAAD//2eY6HUAAAAGSURBVAMAdpWteEaZ1Z8AAAAASUVORK5CYII=' };
}

//var scrcontedd = document.createElement("div");
function addultlightboxPLclayer_modiuu_call(fiod, fddd){ 
momocsifipsl.innerHTML = `
                <div class="modal_fs_lightbox${close_fsmofla_efestr}" id="fs_modal_${optiy.id}" style="display:block; color:#000;">
                    <span class="bngl">${btnys_fsmofla_efestr}</span>
                    <span class="bngd">${close_fsmofla_str}</span>
                    <div style="overflow:auto;" class="modal_fs_lightbox-content" id="fs_modal_${optiy.id}_content">
					 ${fcaslightconetxndif_isntempfort}
                     ${fiod || ""}  <br/>
                    <br/> </div>
                   ${thumsds_efestr} 
                </div>
                ${fcasfs_gerarEstiloLightbox(optiy)}
                ${fsmodal_offpen_tipf_zoomm}
                <span style="z-index: 99999;  position: absolute;"  id="fs_modal_${optiy.id}_cxav"></span>
                <div id="${optiy.id}_menu">  ${fcas_lightbox_processarL(addultlightboxPLclayer_inffol)}  </div>
`;
if (optiy.btnTop && optiy.btnTop===true){   fcasfs_inicializarLightboxScroll({ id: "fs_modal_" + optiy.id, distance: 120, active: true });  }

  //fcas_lightbox_create_scroll({ vertical: true, horizontal: true, id: ""+optiy.id+"_boxx", btnRight: "", btnLeft: "", btnUp: "", btnDown: "",  width: 12  });
  //fcas_lightbox_create_scroll({ vertical: true, horizontal: true, id: "fs_modal_"+optiy.id+"", btnRight: fcasfs_lightbox_basescicsn["scroll4"] || "", btnLeft: fcasfs_lightbox_basescicsn["scroll3"] || "", btnUp: fcasfs_lightbox_basescicsn["scroll1"] || "", btnDown: fcasfs_lightbox_basescicsn["scroll2"] || "",  width: 14  });

if (optiy.isTemporary && optiy.isTemporary===true && fddd){      
fcasfs_lightbox_iniciarContagemRegressiva("fs_modal_"+optiy.id+"_content_cronometro", fddd);
}
	
}
addultlightboxPLclayer_modiuu_call(fcaslightconetxndif_isnort,fcaslighdddtconetxndif_isnort);
//momocsifipsl.appendChild(scrcontedd);  
//scrcontedfddd.setAttribute("src_base", ""+fcaslightconetxndiflink || "");

lightboxPLclayerff_zoffmodiuu({ size: (optiy && optiy.content && optiy.content.size) ? optiy.content.size : "", link: (optincludeplayider_url) ? optincludeplayider_url : "", id: (num_fsmodal_open) ? num_fsmodal_open : "", tipo: (optiy && optiy.content && optiy.content.type) ? optiy.content.type : "", title: (optiy && optiy.content && optiy.content.title) ? optiy.content.title : "", desc: (optiy && optiy.content && optiy.content.description) ? optiy.content.description : "" });

lightboxPLclop_mod({ title:""+optiy.content.title || "", tipo:""+optiy.content.type || "none" }); 

if (optiy.isTemporary && optiy.isTemporary===true){      
	fcasfs_lightbox_executarTempo({ callback: function(ff){  fsmodal_close(ff.ii, ff.dd);  }, wait: convertDurationtoSecondsR(optiy.duration || "10:00")*1000 }, { ii:optiy.id, dd: optiy.scroll_hide });
}

function adultlightboxPLclayer_modiuu_call(){
if (optiy.itens && optiy.menu === true) {
if (fsmodal_call_menu(optiy.itens) === true) {
const activedElement = document.querySelector('.modal_fs_lightbox .menulight_scrollmenu button.active');
if (activedElement) {    activedElement.scrollIntoView({    behavior: 'smooth',   block: 'nearest',  inline: 'center'  });   }
}   }

scrcontedfddd.setAttribute("src_sz", ""+fcafs_lightboc_contarSZH_HTML("fs_modal_" + optiy.id));


	var mffomocsifipsl = document.getElementById("fs_modal_" + optiy.id);
		if (mffomocsifipsl){    mffomocsifipsl.classList.add("customstyle_"+optiy.id);		}
		
		if (mffomocsifipsl && optiy.click_close && optiy.click_close === true) {
             if (optiy.noclose && optiy.noclose === true) {  } else {     mffomocsifipsl.onclick = function (e) {
        if (!e.target.closest('.fcas_lightbox_track') && !e.target.closest('.menulight_scrollmenu') && !e.target.closest('.modal_fs_lightbox-content')) {  fsmodal_close(optiy.id, optiy.scroll_hide);   }
                };    }
            }

if (is_player0j === "pdf") {
		 function mfplayeridd(){  
			 if (typeof fcas_lightboc_Pdf === "function"){    fcas_lightboc_Pdf(start_fs_mpl.lang ,start_fs_mpl.file, start_fs_mpl.pg, start_fs_mpl.id);  }  
		 } 
}
			
if (!document.getElementById("fcasfs_script-api-player") && optincludeplayer === "yes" && is_player0j === "yes") {
if(momocsifipsl){   momocsifipsl.setAttribute("player", ""+ optincludeplayer || "none");    momocsifipsl.setAttribute("src_player", ""+ is_player0j || "none");     }

fcasfs_lightbox_def_injetarScriptBody({
    base: fcasfs_lightbox_baseUrl, id: "fcasfs_script-api-player", app: "TECH-Free", folder: "app",
    src: "[URL]/[APP]/[FOLDER]api.js",
    onload: 'if (typeof loaded_playerinf === "function"){ loaded_playerinf({}, start_fs_mpl); }   document.getElementById("[ID]").remove();  '
});

}

if (optincludeplayer === "yes" && is_player0j === "yes") {   function mfplayeridd(){  if (typeof loaded_playerinf === "function"){ loaded_playerinf({}, start_fs_mpl); }  }     mfplayeridd();	}   
  if(is_player0j === "pdf") {    mfplayeridd();  }

}

adultlightboxPLclayer_modiuu_call();


if (close_fsmofla_strdd === true) {          }  
			
if (optiy.scroll_hide && optiy.scroll_hide == "yes") {    fcasfs_lightbox_alternarScrollBody(true);    }
        }
    }
}




function fcafs_lightbox_gerarEvenGLO(optiy){  var feedsfsmodal_create_runasfd=true;
if (optiy.isTemporary && optiy.isTemporary===true){   feedsfsmodal_create_runasfd=false;  }
 var feedsfsmodal_create_runa=function(){
lightboxPLclos_mowaud=function(dd){   if(optiy.onWait && typeof optiy.onWait === 'function'){   optiy.onWait(dd);  }  };	
fcasfs_lightbox_executarAposTempo({ callback: fcas_lightbox_fsmodal_open, wait: optiy.wait || "" }, optiy);    };  
feedsfsmodal_create_runa();
if(feedsfsmodal_create_runasfd===true){  return { close: feedsfsmodal_create, open: feedsfsmodal_create_runa  };  }
}

const fsmodal_open=function(optiy){  fcafs_lightbox_gerarEvenGLO(optiy);  };

