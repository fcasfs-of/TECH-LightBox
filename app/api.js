var scriptfd = document.createElement("style");
scriptfd.innerHTML='  .btngbutton {  background-color: #fff;  border: none; font-size: 12px;    padding: 8px;    display: inline-block;  color: #000; border-radius:8px;  padding: 15px 32px;  text-align: center;  text-decoration: none;  font-size: 16px;  cursor: pointer;}  .btngbutton:hover {  background-color: #ccc;    }     #ctx-menu-background {  position: absolute;  top: 0; left: 0;  width: 100%;  height: 100%;  z-index: 998;}.ctx-menu-wrapper {  background-color: rgb(250, 250, 250);  box-shadow: 4px 4px 3px -2px rgba(0, 0, 0, .1);  color: black;  padding: 3px 0 3px 0;  border: 1px solid #b1b1b1;  border-radius: 1px;  font-family: "CtxMenuFont";  font-size: 12px;  -moz-user-select: -moz-none;  -khtml-user-select: none;  -webkit-user-select: none;  -ms-user-select: none;  user-select: none;  position: absolute;  z-index: 999999999;  white-space: nowrap;}.ctx-menu-item {  padding: 2px 10px 2px 10px;  border-radius: 1px;  cursor: pointer;  transition: background-color 0.1s;    }.ctx-menu-item.disabled{   pointer-events:none;  opacity:0.6; }.ctx-menu-item:hover {  background-color: rgba(0,0,0,0.13);   }.ctx-menu-item:active {  transition: background-color 0s;  background-color: rgba(0,0,0,0.2);    }.ctx-menu-separator {  height: 1px;  margin: 3px 0 3px 0;  background-color: rgba(0, 0, 0, 0.2);   }.ctx-menu-hasIcon img {  min-width: 16px;  max-width: 16px;  max-height: 16px;  position: relative;  margin-right: 8px;  pointer-events: none;  user-select: none;   }.ctx-menu-item img[src] {  float: left;    }.ctx-menu-hasIcon .ctx-menu-item {  vertical-align: middle;  max-height: 20px;   }  .mdark.ctx-menu-wrapper {    background-color: rgb(36, 39, 40);    color:white;    border-color: #464646;  }  .mdark .ctx-menu-item{    transition: background-color 0s;  }  .mdark .ctx-menu-item:hover{    background-color: rgb(211, 216, 219);    color: black;  }  .mdark .ctx-menu-separator {    background-color: rgba(255, 255, 255, 0.2);  }  .mdark .ctx-menu-item .ctx-menu-darkInvert{    filter: invert(1);  }  .mdark .ctx-menu-item:hover .ctx-menu-darkInvert{    filter: invert(0);  }      .modal { user-select:none;     display: none;   position: fixed;   z-index: 10001;  padding-bottom: 10px;padding-top: 100px;  left: 0;transition: 0.3s;  top: 0;  width: 100%;  height: 100%;   overflow: auto;   background-color: rgb(0,0,0);   background-color: rgba(0,0,0,0.9); } .modal .modal-content {  margin: auto;  color:#fff;  display: block;  width: 100%;    transition: 0.3s;}    .modal .modal-content .cdof {  margin: auto;  display: block;  width: 100%%;  height:450px;    transition: 0.3s;} .modal #caption {   margin: auto;  display: block;  width: 85%;  max-width: 700px;  text-align: center;  color: #ccc;  padding: 10px 0;  transition: 0.3s;}  .modal #link {  margin: auto;  display: block;  width: 80%;  max-width: 700px;  text-align: center;  color: #ccc;  padding: 10px 0;transition: 0.3s;}    .modal.eff #link, .modal.eff .modal-content, .modal.eff .modal-content .cdof, .modal.eff #caption {    -webkit-animation-name: zoom;  -webkit-animation-duration: 0.6s;  animation-name: zoom;  animation-duration: 0.6s;}   @-webkit-keyframes zoom {  from {-webkit-transform:scale(0)}   to {-webkit-transform:scale(1)}}   @keyframes zoom {  from {transform:scale(0)}   to {transform:scale(1)}}    .modal .bngd {  position: absolute;  top: 15px;  right: 35px;   }    .modal .bngl {  position: absolute;  top: 15px;  left: 12px;  overflow:auto;   width: 60%; }   .modal .ssclose,.modal .ssprev, .modal .ssnext {  color: #f1f1f1;  font-size: 40px;  font-weight: bold;  transition: 0.3s;}   .modal .ssclose:hover,.modal .ssclose:focus, .modal .ssprev:hover, .modal .ssprev:focus, .modal .ssnext:hover, .modal .ssnext:focus {  color: #bbb;  text-decoration: none;  cursor: pointer;transition: 0.3s;}   .modal #btons_cont {  position: absolute;  top: 15px;  left: 35px;  color: #f1f1f1;  font-size: 40px; font-weight: bold;  transition: 0.3s;}   .modal #btons_cont .btns {  color: #f1f1f1;padding:2px;  font-size: 40px;  font-weight: bold;  transition: 0.3s;margin-right:5px;}  .modal #btons_cont .btns .thung{   opacity:0.8;  transition: 0.3s;  }    .modal .ssclose .icon {    display: inline-block;    position: relative;    top: 3px;    height: 32px;    width: 32px;    background-image: url("data:image/png;base64,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");    background-size: cover;    background-repeat: no-repeat;   }    .modal .ssprev .icon::before {  display:block;  position:relative;  top:0px;    content: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAF5JREFUSIntlFEKgCAQBYc8ZJLnSBCsixfoT5J/grhhsAP7O28XlgfKnzGS8gDcgJWQRyA9s42W+0p+qPwTuavksUewDF2nk533ilNDpggRrYpCAC5glQqASV5caZMBe/ojpTunBlAAAAAASUVORK5CYII=");}      .modal #btons_cont .btns:focus .thung, .modal #btons_cont .btns:hover .thung{   opacity:1; transition: 0.3s; }  .modal #btons_cont .tcbtns {  color: #f1f1f1;padding:3px;  font-size: 20px;  font-weight: bold; overflow:auto;  transition: 0.3s;margin-right:5px;}    .modal #btons_cont .tcbtns.c {width:100%;position:absolute;text-align:center;}   .modal #btons_cont .btns:hover,.modal #btons_cont .btns:focus {  color: #bbb;  text-decoration: none;  cursor: pointer;transition: 0.3s;}  @media only screen and (max-width: 700px){  .modal .modal-content {    width: 100%;  }}    body::-webkit-scrollbar,.modal::-webkit-scrollbar {  height: 12px;  width: 12px;}  body::-webkit-scrollbar-track,.modal::-webkit-scrollbar-track {  border-radius: 3px;  background-color: #DFE9EB;  border: 1px solid #FFFFFF;} body::-webkit-scrollbar-track:hover,.modal::-webkit-scrollbar-track:hover {  background-color: #B8C0C2;} body::-webkit-scrollbar-track:active,.modal::-webkit-scrollbar-track:active {  background-color: #B8C0C2;}   body::-webkit-scrollbar-thumb,.modal::-webkit-scrollbar-thumb {  border-radius: 8px;  background-color: #170C75;  border: 1px solid #FFFFFF;}  body::-webkit-scrollbar-thumb:hover,.modal::-webkit-scrollbar-thumb:hover {  background-color: #4747A3; }  body::-webkit-scrollbar-thumb:active,.modal::-webkit-scrollbar-thumb:active {  background-color: #065FA3;}  body.darkmode::-webkit-scrollbar-track{  border: 1px solid #333;}   body.darkmode::-webkit-scrollbar-thumb{    border: 1px solid #000;}      [data-tooltip] {position: relative;}   [data-tooltip]::before,[data-tooltip]::after {  text-transform: none;  font-size: 16px;  line-height: 1;  position: absolute;  display: none;  opacity: 0;}   [data-tooltip]::before {  content: "";  border: 6px solid transparent;  z-index: 101;}   [data-tooltip]::after {  content: attr(data-tooltip);  text-align: center;pointer-events:none;  min-width: 3em;  max-width: 21em;  white-space: nowrap;  overflow: hidden;  text-overflow: ellipsis;  padding: 9px 8px;  border-radius: 6px;  background: #333333;  color: #FFFFFF;  z-index: 100;}   [data-tooltip]:hover::before,[data-tooltip]:hover::after {  display: block;}   [data-tooltip=\'\']::before,[data-tooltip=\'\']::after {  display: none !important;}   [data-tooltip]:not([data-flow])::before,[data-tooltip][data-flow^="top"]::before {   bottom: 100%;  border-bottom-width: 0;  border-top-color: #333333;}   [data-tooltip]:not([data-flow])::after,[data-tooltip][data-flow^="top"]::after {  bottom: calc(100% + 5px);}   [data-tooltip]:not([data-flow])::before,[data-tooltip]:not([data-flow])::after,[data-tooltip][data-flow^="top"]::before,[data-tooltip][data-flow^="top"]::after {  left: 50%;  transform: translate(-50%, -.4em);}   [data-tooltip][data-flow^="bottom"]::before {  top: 100%;  border-top-width: 0;  border-bottom-color: #333333;}   [data-tooltip][data-flow^="bottom"]::after {  top: calc(100% + 5px);}   [data-tooltip][data-flow^="bottom"]::before,[data-tooltip][data-flow^="bottom"]::after {  left: 50%;  transform: translate(-50%, .4em);}   [data-tooltip][data-flow^="left"]::before {  top: 50%;  border-right-width: 0;  border-left-color: #333333;  left: calc(0em - 5px);  transform: translate(-.5em, -50%);}   [data-tooltip][data-flow^="left"]::after {  top: 50%;  right: calc(100% + 5px);  transform: translate(-.4em, -50%);}   [data-tooltip][data-flow^="right"]::before {  top: 50%;  border-left-width: 0;  border-right-color: #333333;  right: calc(0em - 7px);  transform: translate(.4em, -50%);}   [data-tooltip][data-flow^="right"]::after {  top: 50%;  left: calc(100% + 5px);  transform: translate(.5em, -50%);}   @keyframes tooltip-vert {  to {    opacity: 1;    transform: translate(-50%, 0);  }}   @keyframes tooltip-horz {  to {    opacity: 1;    transform: translate(0, -50%);  }}   [data-tooltip]:not([data-flow]):hover::before,[data-tooltip]:not([data-flow]):hover::after,[data-tooltip][data-flow^="top"]:hover::before,[data-tooltip][data-flow^="top"]:hover::after,[data-tooltip][data-flow^="bottom"]:hover::before,[data-tooltip][data-flow^="bottom"]:hover::after {  animation: tooltip-vert .5s ease-out forwards;}   [data-tooltip][data-flow^="left"]:hover::before,[data-tooltip][data-flow^="left"]:hover::after,[data-tooltip][data-flow^="right"]:hover::before,[data-tooltip][data-flow^="right"]:hover::after {  animation: tooltip-horz .5s ease-out forwards;}   .darkmode [data-tooltip]::after {   background: #FFFFFF;  color: #333333;}   .darkmode [data-tooltip][data-flow^="top"]::before {  border-top-color: #FFFFFF; }   .darkmode [data-tooltip][data-flow^="bottom"]::before { border-bottom-color: #FFFFFF; }   .darkmode [data-tooltip][data-flow^="left"]::before { border-left-color: #FFFFFF; }   .darkmode [data-tooltip][data-flow^="right"]::before {  border-right-color: #FFFFFF; }      .modal::-webkit-scrollbar, .modal .modal-content::-webkit-scrollbar {  height: 12px;  width: 12px;}   .modal::-webkit-scrollbar-track, .modal .modal-content::-webkit-scrollbar-track {  border-radius: 3px;  background-color: #DFE9EB;  border: 1px solid #FFFFFF;} .modal::-webkit-scrollbar-track:hover, .modal .modal-content::-webkit-scrollbar-track:hover {  background-color: #B8C0C2;}  .modal::-webkit-scrollbar-track:active, .modal .modal-content::-webkit-scrollbar-track:active {  background-color: #B8C0C2;}  .modal::-webkit-scrollbar-thumb, .modal .modal-content::-webkit-scrollbar-thumb {  border-radius: 8px;  background-color: #170C75;  border: 1px solid #FFFFFF;} .modal::-webkit-scrollbar-thumb:hover, .modal .modal-content::-webkit-scrollbar-thumb:hover {  background-color: #4747A3;} .modal::-webkit-scrollbar-thumb:active, .modal .modal-content::-webkit-scrollbar-thumb:active {  background-color: #065FA3;}   .modal .modal-content::-webkit-scrollbar-track{  border: 1px solid #333;}  .modal .modal-content::-webkit-scrollbar-thumb{    border: 1px solid #000;}       .modal .menulight_scrollmenu {   padding: 8px;   overflow: auto;  background-color: #333;  text-align: center;   white-space: nowrap;   }     .modal .menulight_scrollmenu button {  background-color: #333; display: inline-block;  color: #fff;  text-align: center; cursor:pointer;     padding: 14px;  text-decoration: none;   border-radius: 20px;    margin-left: 4px;    margin-right: 4px;  }    .modal .menulight_scrollmenu button:hover, .modal .menulight_scrollmenu button.active {  background-color: #777;  color:#fff;  }     .modal .menulight_scrollmenu button.active {  pointer-events:none;  opacity: 0.7;   }   .modal .menulight_scrollmenu {    border-radius: 20px;   z-index: 999999;   position: absolute;    top: 11px;    width: 75%;    margin: 0 auto;     left: 9px;       }    ';  
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


function fcas_lightbox_islisted(config) { const { lista, cores = {}, alinhamento, marcador, tema = 'claro', largura = '400px', arredondado = '8px', bordaEstilo = '1px solid', posicao = 'centro', divisor = false } = config; const temas = { claro: { fundo: '#ffffff', texto: '#333333', borda: '#cccccc', bordaEscura: '#999999' }, escuro: { fundo: '#1e1e1e', texto: '#ffffff', borda: '#444444', bordaEscura: '#666666' }, neon: { fundo: '#0d0e15', texto: '#00ffcc', borda: '#ff007f', bordaEscura: '#cc0066' }, pastel: { fundo: '#fdf6ec', texto: '#6b5b52', borda: '#e8d8c8', bordaEscura: '#bfae9e' }, oceano: { fundo: '#0f2027', texto: '#ffffff', borda: '#2c5364', bordaEscura: '#1e3c4a' }, sepia: { fundo: '#f4ecd8', texto: '#5b4636', borda: '#d3c2a0', bordaEscura: '#a89776' } }; const t = temas[tema] || temas.claro; const fundo = cores.fundo || t.fundo; const texto = cores.texto || t.texto; const bordaTrack = cores.borda || t.borda; const bordaContainer = cores.bordaEscura || t.bordaEscura; let marginValue = '0 auto'; if (posicao === 'esquerda') marginValue = '0 auto 0 0'; if (posicao === 'direita') marginValue = '0 0 0 auto'; const styleId = `fcas-styles-${tema}`; if (!document.getElementById(styleId)) { const style = document.createElement('style'); style.id = styleId; style.textContent = `.fcas-lightbox-container { font-family: system-ui, -apple-system, sans-serif; padding: 16px; background: ${fundo}; border-radius: ${arredondado}; width: 100%; max-width: ${largura}; border: ${bordaEstilo} ${bordaContainer}; max-height: 300px; overflow-y: auto; box-sizing: border-box; box-shadow: 0 4px 12px rgba(0,0,0,0.15); user-select: none; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; margin: ${marginValue}; } .fcas-lightbox-container::-webkit-scrollbar { width: 8px; } .fcas-lightbox-container::-webkit-scrollbar-track { background: ${fundo}; border-radius: ${arredondado}; } .fcas-lightbox-container::-webkit-scrollbar-thumb { background: ${bordaTrack}; border-radius: ${arredondado}; } .fcas-lightbox-container::-webkit-scrollbar-thumb:hover { background: ${texto}; } .fcas-lightbox-list { padding-left: ${marcador ? '24px' : '0'}; margin: 0; color: ${texto}; list-style-type: ${marcador || 'none'}; } .fcas-lightbox-item { padding: 8px 0; text-align: ${alinhamento || 'left'}; word-break: break-word; } .fcas-lightbox-divisor { border-bottom: ${divisor ? `1px solid ${bordaTrack}` : 'none'}; } .fcas-lightbox-divisor:last-child { border-bottom: none; } .fcas-lightbox-vazia { display: flex; align-items: center; justify-content: center; padding: 20px 0; color: ${bordaTrack}; } .fcas-lightbox-vazia svg { width: 48px; height: 48px; fill: currentColor; opacity: 0.6; } @media (max-width: 480px) { .fcas-lightbox-container { padding: 12px; max-height: 250px; margin: 0 auto; } .fcas-lightbox-item { font-size: 14px; } }`; document.head.appendChild(style); } const itensValidos = lista ? lista.filter(item => item && String(item).trim() !== '') : []; if (itensValidos.length === 0) { const svgVazio = `<svg viewBox="0 0 24 24"><path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7zm-4 6h2v-2H3v2z"/></svg>`; return `<div class="fcas-lightbox-container"><div class="fcas-lightbox-vazia">${svgVazio}</div></div>`; } let listItems = ''; itensValidos.forEach(item => { listItems += `<li class="fcas-lightbox-item fcas-lightbox-divisor">${item}</li>`; }); return `<div class="fcas-lightbox-container"><ul class="fcas-lightbox-list">${listItems}</ul></div>`; }

function fcas_get_model(name) { const m = { dark: { bg: '#2d3748', text: '#ffffff', zebra: '#f7fafc' }, blue: { bg: '#2b6cb0', text: '#ffffff', zebra: '#ebf8ff' }, green: { bg: '#2f855a', text: '#ffffff', zebra: '#f0fff4' }, light: { bg: '#f2f2f2', text: '#000000', zebra: '#fafafa' }, orange: { bg: '#dd6b20', text: '#ffffff', zebra: '#fffaf0' }, purple: { bg: '#6b46c1', text: '#ffffff', zebra: '#faf5ff' }, red: { bg: '#e53e3e', text: '#ffffff', zebra: '#fff5f5' }, teal: { bg: '#319795', text: '#ffffff', zebra: '#e6fffa' }, yellow: { bg: '#d69e2e', text: '#ffffff', zebra: '#fefcbf' }, minimal: { bg: '#ffffff', text: '#1a202c', zebra: '#f7fafc' }, indigo: { bg: '#4c51bf', text: '#ffffff', zebra: '#edf2f7' }, slate: { bg: '#4a5568', text: '#ffffff', zebra: '#f7fafc' }, navy: { bg: '#1a365d', text: '#ffffff', zebra: '#f0f4f8' }, emerald: { bg: '#059669', text: '#ffffff', zebra: '#ecfdf5' }, pink: { bg: '#db2777', text: '#ffffff', zebra: '#fdf2f8' }, cyan: { bg: '#0891b2', text: '#ffffff', zebra: '#ecfeff' }, fuchsia: { bg: '#c084fc', text: '#ffffff', zebra: '#faf5ff' }, lime: { bg: '#65a30d', text: '#ffffff', zebra: '#f7fee7' }, violet: { bg: '#7c3aed', text: '#ffffff', zebra: '#f5f3ff' }, 'pastel-blue': { bg: '#bae6fd', text: '#0369a1', zebra: '#f0f9ff' }, 'pastel-green': { bg: '#bbf7d0', text: '#15803d', zebra: '#f0fdf4' }, 'pastel-pink': { bg: '#fbcfe8', text: '#be185d', zebra: '#fdf2f8' }, neon: { bg: '#0f172a', text: '#38bdf8', zebra: '#1e293b' }, retro: { bg: '#d97706', text: '#fef3c7', zebra: '#fffbeb' }, coffee: { bg: '#78350f', text: '#fef3c7', zebra: '#fffbeb' }, charcoal: { bg: '#1f2937', text: '#f9fafb', zebra: '#374151' }, gold: { bg: '#b45309', text: '#ffffff', zebra: '#fef3c7' } }; return m[name] || m.light; }
function fcas_add_style(cfg) { if (!document.getElementById('fcas-lightbox-style')) { const m = fcas_get_model(cfg.model); const bW = cfg.borderWidth || '1px'; const bS = cfg.borderStyle || 'solid'; const bC = cfg.borderColor || '#ddd'; const style = document.createElement('style'); style.id = 'fcas-lightbox-style'; style.textContent = `.fcas-table-container { width: 100%; overflow-x: auto; -webkit-overflow-scrolling: touch; margin-top: 10px; border: ${bW} ${bS} ${bC}; border-radius: ${cfg.borderRadius || '0px'}; } .fcas-table { width: 100%; border-collapse: collapse; min-width: ${cfg.minWidth || '600px'}; font-family: sans-serif; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; } .fcas-table th, .fcas-table td { border-bottom: ${bW} ${bS} ${bC}; border-right: ${bW} ${bS} ${bC}; padding: ${cfg.padding || '8px'}; text-align: ${cfg.align || 'left'}; } .fcas-table th:last-child, .fcas-table td:last-child { border-right: none; } .fcas-table tr:last-child td { border-bottom: none; } .fcas-table th { background-color: ${cfg.headerColor || m.bg}; color: ${cfg.textColor || m.text}; font-weight: ${cfg.headerBold !== false ? 'bold' : 'normal'}; text-align: ${cfg.headerAlign || cfg.align || 'left'}; } .fcas-table tr:nth-child(even) { background-color: ${cfg.zebraColor || m.zebra}; } .fcas-empty-row td { text-align: center !important; padding: 30px !important; color: #999; } .fcas-pagination { display: flex; align-items: center; justify-content: center; gap: 10px; margin-top: 15px; font-family: sans-serif; } .fcas-page-btn { display: flex; align-items: center; justify-content: center; border: 1px solid #ddd; background: #fff; padding: 6px 12px; cursor: pointer; border-radius: 4px; } .fcas-page-btn:hover { background: ${m.zebra}; } .fcas-page-btn:disabled { opacity: 0.5; cursor: not-allowed; } .fcas-page-info { font-size: 14px; color: #333; }`; document.head.appendChild(style); } }
function fcas_build_headers(item, showIdx) { return '<thead><tr>' + (showIdx ? '<th>#</th>' : '') + (item && Object.keys(item).length > 0 ? Object.keys(item).map(key => '<th>' + key + '</th>').join('') : '<th></th>') + '</tr></thead>'; }
function fcas_build_rows(list, showIdx, startIdx, colsCount) { const filtered = list.filter(item => item && Object.keys(item).length > 0); if (filtered.length === 0) { const svgTable = '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="display:block;margin:0 auto;"><path d="M3 3h18v18H3V3z"/><path d="M21 9H3M21 15H3M12 3v18"/></svg>'; return '<tbody><tr class="fcas-empty-row"><td colspan="' + (colsCount + (showIdx ? 1 : 0)) + '">' + svgTable + '</td></tr></tbody>'; } return '<tbody>' + filtered.map((item, i) => '<tr>' + (showIdx ? '<td>' + (startIdx + i + 1) + '</td>' : '') + Object.values(item).map(val => '<td>' + val + '</td>').join('') + '</tr>').join('') + '</tbody>'; }
window.fcas_go_page = function(id, page) { if (!window._fcas_states || !window._fcas_states[id]) return; const opts = window._fcas_states[id]; opts.page = page; document.getElementById(id).innerHTML = fcas_lightbox_table(opts); };
function fcas_lightbox_table(options) { const opts = options || {}; const list = opts.list; const id = opts.containerId; const showIdx = !!opts.showIndex; if (!list || list.length === 0) return ''; fcas_add_style(opts); if (id) { window._fcas_states = window._fcas_states || {}; window._fcas_states[id] = opts; } const firstValidItem = list.find(item => item && Object.keys(item).length > 0) || (opts.headers ? opts.headers.reduce((acc, h) => { acc[h] = ''; return acc; }, {}) : null); const colsCount = firstValidItem ? Object.keys(firstValidItem).length : 1; const perPage = parseInt(opts.perPage) || Math.max(1, list.length); const totalPages = Math.max(1, Math.ceil(list.length / perPage)); const page = parseInt(opts.page) || 1; const start = (page - 1) * perPage; const paginatedList = (start >= 0 && start < list.length) ? list.slice(start, start + perPage) : []; const svgLeft = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"></polyline></svg>'; const svgRight = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg>'; const tableHtml = '<div class="fcas-table-container"><table class="fcas-table">' + fcas_build_headers(firstValidItem, showIdx) + fcas_build_rows(paginatedList, showIdx, start, colsCount) + '</table></div>'; const clickPrev = id ? 'onclick="fcas_go_page(\'' + id + '\',' + (page - 1) + ')"' : ''; const clickNext = id ? 'onclick="fcas_go_page(\'' + id + '\',' + (page + 1) + ')"' : ''; const navHtml = '<div class="fcas-pagination"><button class="fcas-page-btn" ' + (page <= 1 ? 'disabled' : '') + ' ' + clickPrev + '>' + svgLeft + '</button><span class="fcas-page-info">' + page + ' / ' + totalPages + ' (Total: ' + list.length + ' itens)</span><button class="fcas-page-btn" ' + (page >= totalPages ? 'disabled' : '') + ' ' + clickNext + '>' + svgRight + '</button></div>'; return tableHtml + navHtml; }

function fcas_lightbox_criarGrafico(e){if(!document.getElementById("v-graph-styles")){var t=document.createElement("style");t.id="v-graph-styles",t.innerHTML=".v-graph-container{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:sans-serif;width:100%;height:100%;box-sizing:border-box;padding:4%;border-radius:8px;box-shadow:0 4px 6px -1px rgba(0,0,0,.1);display:flex!important;flex-direction:column;visibility:visible!important;position:relative;overflow:hidden}.v-graph-title{text-align:center;margin-bottom:15px;font-size:clamp(1.1rem,3vw,1.4rem);font-weight:700;flex-shrink:0}.v-graph-desc{text-align:center;margin-top:15px;font-size:clamp(0.75rem,2vw,0.85rem);line-height:1.4;flex-shrink:0}.v-graph-canvas-wrapper{width:100%;height:100%;flex-grow:1;display:block;position:relative}.v-graph-svg{width:100%;height:100%;display:block;overflow:visible}.v-graph-interactive{cursor:pointer}.v-graph-tip-box{visibility:hidden;opacity:0;transition:opacity 0.15s,visibility 0.15s;pointer-events:none}.v-graph-interactive:hover .v-graph-tip-box{visibility:visible;opacity:1}",document.head.appendChild(t)}var r=600,a=400,n="gr_"+Math.random().toString(36).substr(2,9),o={azul:{b1:"#3b82f6",b2:"#1d4ed8",t:"#1e293b",bg:"#fff",p:["#3b82f6","#60a5fa","#93c5fd","#2563eb","#1d4ed8"]},verde:{b1:"#10b981",b2:"#047857",t:"#064e3b",bg:"#fff",p:["#10b981","#34d399","#6ee7b7","#059669","#047857"]},roxo:{b1:"#8b5cf6",b2:"#6d28d9",t:"#2e1065",bg:"#fff",p:["#8b5cf6","#a78bfa","#c4b5fd","#7c3aed","#6d28d9"]},dark:{b1:"#4b5563",b2:"#1f2937",t:"#f9fafb",bg:"#111827",p:["#4b5563","#9ca3af","#d1d5db","#374151","#1f2937"]},laranja:{b1:"#f97316",b2:"#c2410c",t:"#431407",bg:"#fff",p:["#f97316","#fb923c","#fdba74","#ea580c","#c2410c"]},rosa:{b1:"#ec4899",b2:"#be185d",t:"#500724",bg:"#fff",p:["#ec4899","#f472b6","#f9a8d4","#db2777","#be185d"]},neon:{b1:"#00ffcc",b2:"#0099ff",t:"#00ffcc",bg:"#0f172a",p:["#00ffcc","#00ffff","#33ccff","#0099ff","#0066cc"]},gold:{b1:"#eab308",b2:"#a16207",t:"#451a03",bg:"#fefce8",p:["#eab308","#fde047","#fef08a","#ca8a04","#a16207"]}}[e.tema]||{b1:e.corBarra||"#3b82f6",b2:e.corBarraSecundaria||e.corBarra||"#3b82f6",t:e.corTexto||"#333",bg:e.tema=="dark"?"#111827":"#fff",p:[e.corBarra||"#3b82f6","#60a5fa","#93c5fd","#2563eb"]};var i=e.dados||[],l=0,c=0;for(var s=0;s<i.length;s++)i[s].valor>l&&(l=i[s].valor),c+=i[s].valor;l=0===l?1:l;var m=e.modelo||"barras",v=e.orientacao||"vertical",f=e.exibirValores!==!1,d=e.exibirTooltips===!0,p=75,h=40,g=r-35,w=a-55,b="";b+='<svg class="v-graph-svg" viewBox="0 0 '+r+' '+a+'" xmlns="http://w3.org" preserveAspectRatio="xMidYMid meet" style="background:transparent;"><defs><linearGradient id="'+n+'_g" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="'+o.b1+'"/><stop offset="100%" stop-color="'+o.b2+'"/></linearGradient></defs>';if(m=="pizza"){var E=Math.min(r,a)*0.35,u=r/2,k=a/2,y=-Math.PI/2;for(var s=0;s<i.length;s++){var C=i[s],I=c>0?C.valor/c:0,M=I*2*Math.PI,O=y+M/2,N=y+M,P=u+Math.cos(O)*E*0.6,y_=k+Math.sin(O)*E*0.6,z=u+Math.cos(y)*E,q=k+Math.sin(y)*E,F=u+Math.cos(N)*E,A=k+Math.sin(N)*E,j=I>0.5?1:0,L=u+Math.cos(O)*E,W=k+Math.sin(O)*E;b+='<g class="v-graph-interactive"><path d="M '+u+','+k+' L '+z+','+q+' A '+E+','+E+' 0 '+j+',1 '+F+','+A+' Z" fill="'+o.p[s%o.p.length]+'"/>';if(d){var S=C.label+": "+C.valor,K=S.length*6.5+16;var tx=L,ty=W-15;if(L<r*0.3)tx+=K/2;if(L>r*0.7)tx-=K/2;if(W<a*0.3)ty+=30;b+='<g class="v-graph-tip-box"><rect x="'+(tx-K/2)+'" y="'+(ty-12)+'" width="'+K+'" height="22" rx="4" fill="rgba(0,0,0,0.9)"/><text x="'+tx+'" y="'+(ty+4)+'" fill="#fff" font-size="11" font-weight="bold" text-anchor="middle">'+S+'</text></g>'}b+='</g>';if(f){b+='<text x="'+P+'" y="'+y_+'" fill="#fff" font-size="12" font-weight="bold" text-anchor="middle" dominant-baseline="middle">'+Math.round(100*I)+'%</text>'}y=N}}else{var D=e.tema=="dark"||e.tema=="neon"?"#4b5563":"#ccc";b+='<line x1="'+p+'" y1="'+h+'" x2="'+p+'" y2="'+w+'" stroke="'+D+'" stroke-width="2"/><line x1="'+p+'" y1="'+w+'" x2="'+g+'" y2="'+w+'" stroke="'+D+'" stroke-width="2"/>';if(m=="linha"){var H=(g-p)/i.length,V="",W_=[];for(var s=0;s<i.length;s++){var C=i[s],P=p+s*H+H/2,y_=w-((w-h-30)*C.valor/l);V+=(0===s?'M ':'L ')+P+','+y_,W_.push({x:P,y:y_,v:C.valor,l:C.label})}b+='<path d="'+V+'" fill="none" stroke="'+o.b1+'" stroke-width="3"/>';for(var s=0;s<W_.length;s++){b+='<g class="v-graph-interactive"><circle cx="'+W_[s].x+'" cy="'+W_[s].y+'" r="6" fill="'+o.b1+'"/>';if(d){var S=W_[s].l+": "+W_[s].v,K=S.length*6.5+16;var tx=W_[s].x,ty=W_[s].y-15;if(W_[s].x<p+50)tx+=K/2;if(W_[s].x>g-50)tx-=K/2;if(W_[s].y<h+40)ty+=30;b+='<g class="v-graph-tip-box"><rect x="'+(tx-K/2)+'" y="'+(ty-12)+'" width="'+K+'" height="22" rx="4" fill="rgba(0,0,0,0.9)"/><text x="'+tx+'" y="'+(ty+4)+'" fill="#fff" font-size="11" font-weight="bold" text-anchor="middle">'+S+'</text></g>'}b+='</g>',b+='<text x="'+W_[s].x+'" y="'+(w+22)+'" fill="'+o.t+'" font-size="12" font-weight="bold" text-anchor="middle">'+W_[s].l+'</text>';if(f){b+='<text x="'+W_[s].x+'" y="'+(W_[s].y-12)+'" fill="'+o.t+'" font-size="12" font-weight="bold" text-anchor="middle">'+W_[s].v+'</text>'} }}else if(v=="horizontal"){var Z=(w-h)/i.length,w_b=Z*parseFloat(e.larguraBarra||0.6),U=parseInt(e.raioCurva||4);for(var s=0;s<i.length;s++){var C=i[s],X=h+s*Z+Z/2,Y=p+((g-p-60)*C.valor/l),G=X-w_b/2,R=Y-p;b+='<g class="v-graph-interactive"><path d="M '+p+','+G+' L '+(Y-U)+','+G+' Q '+Y+','+G+' '+Y+','+(G+U)+' L '+Y+','+(G+w_b-U)+' Q '+Y+','+(G+w_b)+' '+(Y-U)+','+(G+w_b)+' L '+p+','+(G+w_b)+' Z" fill="url(#'+n+'_g)"/>';if(d){var S=C.label+": "+C.valor,K=S.length*6.5+16;var tx=p+R/2,ty=G+w_b/2;b+='<g class="v-graph-tip-box"><rect x="'+(tx-K/2)+'" y="'+(ty-11)+'" width="'+K+'" height="22" rx="4" fill="rgba(0,0,0,0.9)"/><text x="'+tx+'" y="'+(ty+5)+'" fill="#fff" font-size="11" font-weight="bold" text-anchor="middle">'+S+'</text></g>'}b+='</g>',b+='<text x="'+(p-10)+'" y="'+(X+4)+'" fill="'+o.t+'" font-size="12" font-weight="bold" text-anchor="end">'+C.label+'</text>';if(f){b+='<text x="'+(Y+10)+'" y="'+(X+4)+'" fill="'+o.t+'" font-size="12" font-weight="bold" text-anchor="start">'+C.valor+'</text>'} }}else{var H=(g-p)/i.length,w_b=H*parseFloat(e.larguraBarra||0.6),U=parseInt(e.raioCurva||4);for(var s=0;s<i.length;s++){var C=i[s],P=p+s*H+H/2,y_=w-((w-h-30)*C.valor/l),G=P-w_b/2,R=w-y_;b+='<g class="v-graph-interactive"><path d="M '+G+','+w+' L '+G+','+(y_+U)+' Q '+G+','+y_+' '+(G+U)+','+y_+' L '+(G+w_b-U)+','+y_+' Q '+(G+w_b)+','+y_+' '+(G+w_b)+','+(y_+U)+' L '+G+w_b+','+w+' Z" fill="url(#'+n+'_g)"/>';if(d){var S=C.label+": "+C.valor,K=S.length*6.5+16;var tx=P,ty=y_-15;if(P<p+50)tx+=K/2;if(P>g-50)tx-=K/2;if(y_<h+40)ty+=30;b+='<g class="v-graph-tip-box"><rect x="'+(tx-K/2)+'" y="'+(ty-11)+'" width="'+K+'" height="22" rx="4" fill="rgba(0,0,0,0.9)"/><text x="'+tx+'" y="'+(ty+5)+'" fill="#fff" font-size="11" font-weight="bold" text-anchor="middle">'+S+'</text></g>'}b+='</g>',b+='<text x="'+P+'" y="'+(w+22)+'" fill="'+o.t+'" font-size="12" font-weight="bold" text-anchor="middle">'+C.label+'</text>';if(f){b+='<text x="'+P+'" y="'+(y_-10)+'" fill="'+o.t+'" font-size="12" font-weight="bold" text-anchor="middle">'+C.valor+'</text>'} }}}b+='</svg>';var _font='<div class="v-graph-container" oncontextmenu="return false;" style="background-color:'+o.bg+';">';if(e.titulo){_font+='<div class="v-graph-title" style="color:'+o.t+';">'+e.titulo+'</div>'}_font+='<div class="v-graph-canvas-wrapper">'+b+'</div>';if(e.textoOpcional){var W_=e.tema=="dark"?"#9ca3af":"#64748b";_font+='<div class="v-graph-desc" style="color:'+W_+';">'+e.textoOpcional+'</div>'}return _font+='</div>'}

function fcas_lightbox_criarCarrossel(e){if(!document.getElementById("v-carousel-styles")){var t=document.createElement("style");t.id="v-carousel-styles",t.innerHTML=".v-car-container{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:sans-serif;width:100%;height:100%;box-sizing:border-box;padding:4%;border-radius:8px;box-shadow:0 4px 6px -1px rgba(0,0,0,.1);display:flex!important;flex-direction:column;visibility:visible!important;position:relative;overflow:hidden}.v-car-title{text-align:center;margin-bottom:15px;font-size:clamp(1rem,4vw,1.35rem);font-weight:700;flex-shrink:0;line-height:1.2;padding:0 5px}.v-car-desc{text-align:center;margin-top:15px;font-size:clamp(0.7rem,2.5vw,0.85rem);line-height:1.4;flex-shrink:0;padding:0 5px}.v-car-wrapper{width:100%;flex-grow:1;display:block;position:relative;overflow:hidden;border-radius:6px;min-height:150px}.v-car-track{display:flex;width:100%;height:100%}.v-car-slide{flex-shrink:0;position:relative;height:100%;display:flex!important;flex-direction:column!important;justify-content:flex-end!important}.v-car-img{-webkit-touch-callout:none;-webkit-user-drag:none;user-drag:none;pointer-events:none;width:100%;height:100%;object-fit:contain;display:block;position:absolute;top:0;left:0;z-index:1}.v-car-caption{width:100%;background:rgba(0,0,0,0.75);color:#fff;padding:12px;font-size:clamp(0.7rem,2.2vw,0.85rem);text-align:center;pointer-events:none;line-height:1.3;z-index:5;box-sizing:border-box}.v-car-track-fade .v-car-slide{position:absolute;top:0;left:0;width:100%!important;opacity:0;transition:opacity .4s ease-in-out;pointer-events:none}.v-car-track-fade .v-car-slide.active{opacity:1;pointer-events:auto}.v-car-controls-bar{display:flex;align-items:center;justify-content:center;gap:clamp(5px,1.5vw,10px);margin-top:12px;flex-shrink:0;position:relative;flex-wrap:wrap;width:100%;padding:4px 0}.v-car-btn{background:rgba(0,0,0,0.6);color:#fff;border:none;width:clamp(28px,6vw,34px);height:clamp(28px,6vw,34px);border-radius:6px;cursor:pointer;display:inline-flex;align-items:center;justify-content:center;transition:all .2s;flex-shrink:0;opacity:1!important;pointer-events:auto!important}.v-car-btn:hover{background:rgba(0,0,0,0.85);transform:scale(1.05)}.v-car-btn:active{transform:scale(0.95)}.v-car-btn.v-car-state-active{background:currentColor!important;color:#fff!important;box-shadow:inset 0 0 0 20px rgba(0,0,0,0.2)}.v-car-container[style*='background-color:#111827'] .v-car-btn.v-car-state-active{color:#111827!important;background:#fff!important}.v-car-btn svg{width:clamp(13px,3vw,17px);height:clamp(13px,3vw,17px);fill:none;stroke:currentColor;stroke-width:2.5;stroke-linecap:round;stroke-linejoin:round}.v-car-dots{display:flex;gap:5px;justify-content:center;align-items:center;flex-wrap:wrap;margin:0 4px;flex-shrink:0}.v-car-dots-top{position:absolute;top:12px;left:50%;transform:translateX(-50%);z-index:10;width:90%}.v-car-dots-center{position:absolute;bottom:55px;left:50%;transform:translateX(-50%);z-index:10;width:90%}.v-car-dot{cursor:pointer;transition:all .2s ease-in-out;opacity:0.4;background:rgba(0,0,0,0.4);flex-shrink:0}.v-car-container[style*='background-color:#111827'] .v-car-dot,.v-car-dots-top .v-car-dot,.v-car-dots-center .v-car-dot{background:rgba(255,255,255,0.55)}.v-car-dot.active{background:currentColor!important;opacity:1!important}.v-car-style-bolas .v-car-dot{width:clamp(5px,1.5vw,8px);height:clamp(5px,1.5vw,8px);border-radius:50%}.v-car-style-barras .v-car-dot{width:clamp(10px,2.5vw,16px);height:clamp(4px,1vw,5px);border-radius:3px}.v-car-style-linhas .v-car-dot{width:clamp(14px,3.5vw,22px);height:2px;border-radius:0}.v-car-style-barras .v-car-dot.active{width:clamp(15px,3.5vw,22px)}.v-car-style-linhas .v-car-dot.active{height:3px}.v-car-fullscreen{padding:2%!important;border-radius:0!important}.v-car-fullscreen .v-car-wrapper{aspect-ratio:auto!important}.v-car-fullscreen .v-car-btn-fs .fs-in{display:none}.v-car-container:not(.v-car-fullscreen) .v-car-btn-fs .fs-out{display:none}@media(max-width:360px){.v-car-controls-bar{gap:4px}.v-car-btn{width:26px;height:28px;border-radius:4px}}",document.head.appendChild(t)}var a="car_"+Math.random().toString(36).substr(2,9),r={azul:{t:"#1e293b",bg:"#fff",c:"#3b82f6"},dark:{t:"#f9fafb",bg:"#111827",c:"#f3f4f6"},gold:{t:"#451a03",bg:"#fefce8",c:"#eab308"},neon:{t:"#00ffcc",bg:"#0f172a",c:"#00ffcc"}}[e.tema]||{t:e.corTexto||"#333",bg:e.tema=="dark"?"#111827":"#fff",c:e.corTexto||"#333"};var o=e.imagens||[],n=e.exibirControles!==!1,l=e.exibirDots!==!1,c=e.autoPlay===!0,i=parseInt(e.intervalo||3000),v=e.transicao||"slide",s=e.posicaoDots||"bottom",m=e.estiloDots||"bolas",d=e.botoesControle||["prev","play","pause","stop","dots","fullscreen","next"],h="",f="",u="";h+='<div class="v-car-wrapper"><div id="'+a+'_track" class="v-car-track '+(v=="fade"?"v-car-track-fade":"")+'" style="'+(v=="slide"?"transition:transform .4s cubic-bezier(0.25,0.46,0.45,0.94);":"")+'">';for(var p=0;p<o.length;p++){var g=o[p];h+='<div id="'+a+'_slide_'+p+'" class="v-car-slide" style="width:'+(v=="slide"?(100/o.length):100)+'%;"><img src="'+g.url+'" class="v-car-img" oncontextmenu="return false;" dragstart="return false;" ondragstart="return false;"/>';if(g.legenda){h+='<div class="v-car-caption">'+g.legenda+'</div>'}h+='</div>'}h+='</div>';if(l&&o.length>1&&(s=="top"||s=="center")){var w="v-car-dots v-car-dots-"+s+" v-car-style-"+m;h+='<div class="'+w+'">';for(var p=0;p<o.length;p++)h+='<div id="'+a+'_dot_'+p+'" class="v-car-dot '+(0===p?'active':'')+'" onclick="window[\''+a+'_go\']('+p+')"></div>';h+='</div>'}h+='</div>';f+='<div class="v-car-controls-bar" style="color:'+r.c+';">';if(n&&o.length>1){for(var p=0;p<d.length;p++){var x=d[p];if(x=="prev")f+='<button class="v-car-btn" onclick="window[\''+a+'_move\'](-1)" title="Anterior"><svg viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6"></polyline></svg></button>';if(x=="next")f+='<button class="v-car-btn" onclick="window[\''+a+'_move\'](1)" title="Próximo"><svg viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6"></polyline></svg></button>';if(x=="play")f+='<button id="'+a+'_btn_play" class="v-car-btn" onclick="window[\''+a+'_play\']()" title="Play"><svg viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg></button>';if(x=="pause")f+='<button id="'+a+'_btn_pause" class="v-car-btn" onclick="window[\''+a+'_pause\']()" title="Pause"><svg viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect></svg></button>';if(x=="stop")f+='<button id="'+a+'_btn_stop" class="v-car-btn" onclick="window[\''+a+'_stop\']()" title="Stop"><svg viewBox="0 0 24 24" fill="currentColor"><rect x="4" y="4" width="16" height="16"></rect></svg></button>';if(x=="fullscreen")f+='<button class="v-car-btn v-car-btn-fs" onclick="window[\''+a+'_fs\']()" title="Tela Cheia"><svg class="fs-in" viewBox="0 0 24 24"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/></svg><svg class="fs-out" viewBox="0 0 24 24"><path d="M4 14h4v4m0-4l-5 5m16-5h-4v4m0-4l5 5M4 10h4V6M8 10L3 5m16 5h-4V6m0 4l5-5"/></svg></button>';if(x=="dots"&&l&&s=="bottom"){f+='<div class="v-car-dots v-car-style-'+m+'">';for(var C=0;C<o.length;C++)f+='<div id="'+a+'_dot_'+C+'" class="v-car-dot '+(0===C?'active':'')+'" onclick="window[\''+a+'_go\']('+C+')"></div>';f+='</div>'}}}if(l&&o.length>1&&s=="bottom"&&d.indexOf("dots")===-1){f+='<div class="v-car-dots v-car-style-'+m+'">';for(var p=0;p<o.length;p++)f+='<div id="'+a+'_dot_'+p+'" class="v-car-dot '+(0===p?'active':'')+'" onclick="window[\''+a+'_go\']('+p+')"></div>';f+='</div>'}f+='</div>';setTimeout(function(){var c_e=document.getElementById(a+'_track');if(c_e){var t=c_e.closest('.v-car-container');if(t)t.id=a+'_cnt'}window[a+'_idx']=0;window[a+'_tm']=null;window[a+'_has_auto']=e.autoPlay===true;window[a+'_move']=function(e){window[a+'_go'](window[a+'_idx']+e)};window[a+'_go']=function(e){var t=document.getElementById(a+'_track');var r=o.length;var n_t="'+v+'";if(e<0)e=r-1;if(e>=r)e=0;window[a+'_idx']=e;if(t){if(n_t=="fade"){for(var i=0;i<r;i++){var l=document.getElementById(a+'_slide_'+i);if(l)l.classList.toggle('active',i===e)}}else{t.style.transform='translateX(-'+(e*(100/r))+'%)';t.style.width=(r*100)+'%'}}for(var i=0;i<r;i++){var c=document.getElementById(a+'_dot_'+i);if(c)c.classList.toggle('active',i===e)}};window[a+'_upd_st']=function(e){var t=document.getElementById(a+'_btn_play'),r=document.getElementById(a+'_btn_pause'),n=document.getElementById(a+'_btn_stop');if(e=='play'){t&&(t.className='v-car-btn v-car-state-active');r&&(r.className='v-car-btn');n&&(n.className='v-car-btn')}if(e=='pause'){t&&(t.className='v-car-btn');r&&(r.className='v-car-btn v-car-state-active');n&&(n.className='v-car-btn')}if(e=='stop'){t&&(t.className='v-car-btn');r&&(r.className='v-car-btn');n&&(n.className='v-car-btn v-car-state-active');setTimeout(function(){n&&(n.className='v-car-btn')},300)}};window[a+'_play']=function(){if(!window[a+'_tm']){window[a+'_tm']=setInterval(function(){window[a+'_move'](1)},i)}window[a+'_upd_st']('play')};window[a+'_pause']=function(){if(window[a+'_tm']){clearInterval(window[a+'_tm']);window[a+'_tm']=null}window[a+'_upd_st']('pause')};window[a+'_stop']=function(){if(window[a+'_tm']){clearInterval(window[a+'_tm']);window[a+'_tm']=null}window[a+'_go'](0);window[a+'_upd_st']('stop')};window[a+'_fs']=function(){var e=document.getElementById(a+'_cnt');if(e){if(!document.fullscreenElement){e.requestFullscreen().then(function(){e.classList.add('v-car-fullscreen')})}else{document.exitFullscreen();e.classList.remove('v-car-fullscreen')}}};document.addEventListener('fullscreenchange',function(){var e=document.getElementById(a+'_cnt');if(e&&!document.fullscreenElement){e.classList.remove('v-car-fullscreen')}});window[a+'_go'](0);if(window[a+'_has_auto']&&o.length>1){window[a+'_play']()}else{window[a+'_upd_st']('init')}},50);u+='<div class="v-car-container" oncontextmenu="return false;" style="background-color:'+r.bg+';">';if(e.titulo){u+='<div class="v-car-title" style="color:'+r.t+';">'+e.titulo+'</div>'}u+=h+f;if(e.textoOpcional){var f_=e.tema=="dark"?"#9ca3af":"#64748b";u+='<div class="v-car-desc" style="color:'+f_+';">'+e.textoOpcional+'</div>'}return u+='</div>'}

function fcas_lightbox_criarPlaylist(e){if(!document.getElementById("v-playlist-styles")){var t=document.createElement("style");t.id="v-playlist-styles",t.innerHTML=".v-pl-container{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:sans-serif;width:100%;height:100%;box-sizing:border-box;padding:5%;border-radius:12px;box-shadow:0 10px 25px rgba(0,0,0,.08);display:flex!important;flex-direction:column;visibility:visible!important;position:relative;overflow:hidden}.v-pl-title{text-align:left;margin-bottom:8px;font-size:clamp(1.1rem,4vw,1.45rem);font-weight:800;letter-spacing:-0.5px;flex-shrink:0;line-height:1.2}.v-pl-desc{text-align:left;margin-bottom:20px;font-size:clamp(0.72rem,2.3vw,0.85rem);line-height:1.4;flex-shrink:0;opacity:0.6}.v-pl-wrapper{width:100%;flex-grow:1;display:flex;flex-direction:column;gap:12px;overflow-y:auto;overflow-x:hidden;border-radius:8px;padding:4px;max-height:100%}.v-pl-item{display:none;align-items:center;gap:14px;padding:12px;border-radius:10px;text-decoration:none;background:rgba(0,0,0,0.02);color:inherit;border:1px solid rgba(0,0,0,0.05);width:100%;box-sizing:border-box;cursor:pointer;text-align:left;transition:all .25s cubic-bezier(0.4,0,0.2,1)}.v-pl-item.v-pl-show{display:flex!important}.v-pl-item:hover{background:rgba(0,0,0,0.05);border-color:rgba(0,0,0,0.1);transform:translateY(-2px);box-shadow:0 4px 12px rgba(0,0,0,0.04)}.v-pl-container[style*='background-color:#111827'] .v-pl-item{background:rgba(255,255,255,0.03);border-color:rgba(255,255,255,0.05)}.v-pl-container[style*='background-color:#111827'] .v-pl-item:hover{background:rgba(255,255,255,0.08);border-color:rgba(255,255,255,0.15);box-shadow:0 4px 15px rgba(0,0,0,0.2)}.v-pl-thumb-w{width:clamp(44px,11vw,52px);aspect-ratio:1;border-radius:50%;overflow:hidden;flex-shrink:0;background:#ccc;box-shadow:0 2px 6px rgba(0,0,0,0.1)}.v-pl-img{-webkit-touch-callout:none;-webkit-user-drag:none;user-drag:none;pointer-events:none;width:100%;height:100%;object-fit:cover;display:block;transition:transform .3s ease}.v-pl-item:hover .v-pl-img{transform:scale(1.1)}.v-pl-meta{display:flex;flex-direction:column;gap:3px;flex-grow:1;overflow:hidden}.v-pl-name{font-size:clamp(0.82rem,2.3vw,0.98rem);font-weight:700;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.v-pl-sub{font-size:clamp(0.68rem,1.8vw,0.78rem);opacity:0.55;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.v-pl-icon{flex-shrink:0;opacity:0.4;display:flex;align-items:center;justify-content:center;width:28px;height:22px;transition:all .2s ease}.v-pl-item:hover .v-pl-icon{opacity:1;transform:translateX(2px)}.v-pl-icon svg{width:clamp(14px,3vw,18px);height:clamp(14px,3vw,18px);fill:none;stroke:currentColor;stroke-width:2.5;stroke-linecap:round;stroke-linejoin:round}.v-pl-empty-w{width:100%;flex-grow:1;display:flex;align-items:center;justify-content:center;opacity:0.25;padding:20px;box-sizing:border-box}.v-pl-empty-w svg{width:clamp(56px,15vw,80px);height:clamp(56px,15vw,80px);stroke:currentColor;stroke-width:2;fill:none;stroke-linecap:round;stroke-linejoin:round}.v-pl-nav-bar{display:flex;align-items:center;justify-content:center;gap:12px;margin-top:15px;flex-shrink:0}.v-pl-btn{background:rgba(0,0,0,0.6);color:#fff;border:none;width:32px;height:32px;border-radius:6px;cursor:pointer;display:inline-flex;align-items:center;justify-content:center;transition:all .2s}.v-pl-btn:hover{background:rgba(0,0,0,0.85);transform:scale(1.05)}.v-pl-btn:active{transform:scale(0.95)}.v-pl-btn:disabled{opacity:0.25!important;cursor:default!important;transform:none!important}.v-pl-container[style*='background-color:#111827'] .v-pl-btn{background:rgba(255,255,255,0.1);color:#fff}.v-pl-nav-bar svg{width:16px;height:16px;fill:none;stroke:currentColor;stroke-width:2.5;stroke-linecap:round;stroke-linejoin:round}.v-pl-nav-txt{font-size:12px;font-weight:700;opacity:0.8}",document.head.appendChild(t)}var r="pl_"+Math.random().toString(36).substr(2,9),o=parseInt(e.itensPorPagina||5),a=e.exibirIndex===!0,n=e.itens||[],l="",i="";var s={azul:{t:"#0f172a",bg:"#fff",c:"#3b82f6"},dark:{t:"#f8fafc",bg:"#111827",c:"#f1f5f9"},gold:{t:"#451a03",bg:"#fefce8",c:"#ca8a04"},neon:{t:"#00ffcc",bg:"#0f172a",c:"#00ffcc"}}[e.tema]||{t:e.corTexto||"#333",bg:e.tema=="dark"?"#111827":"#fff",c:e.corTexto||"#333"};if(!n||0===n.length){l+='<div class="v-pl-empty-w" style="color:'+s.t+';"><svg viewBox="0 0 24 24"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path><line x1="9" y1="14" x2="15" y2="14"></line></svg></div>'}else{l+='<div id="'+r+'_wrapper" class="v-pl-wrapper">';for(var c=0;c<n.length;c++){var m=n[c],p=m.href?'a href="'+m.href+'"'+(m.target?' target="'+m.target+'"':''):'button onclick="'+(m.onclick||'')+'"',u=m.href?'</a>':'</button>',v=m.iconeSvg||'<svg viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3" fill="currentColor"></polygon></svg>',w=a?(c+1)+'. ':'';l+='<'+p+' class="v-pl-item" oncontextmenu="return false;" dragstart="return false;" ondragstart="return false;">';if(m.thumbnail){l+='<div class="v-pl-thumb-w"><img src="'+m.thumbnail+'" class="v-pl-img"/></div>'}l+='<div class="v-pl-meta"><div class="v-pl-name" style="color:'+s.t+';">'+w+(m.titulo||"Sem título")+'</div>';if(m.subtitulo){l+='<div class="v-pl-sub" style="color:'+s.t+';">'+m.subtitulo+'</div>'}l+='</div><div class="v-pl-icon" style="color:'+s.c+';">'+v+'</div>'+u}l+='</div>';if(n.length>o){l+='<div class="v-pl-nav-bar" style="color:'+s.t+';"><button id="'+r+'_prev" class="v-pl-btn" onclick="window[\''+r+'_nav\'](-1)"><svg viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6"></polyline></svg></button><div id="'+r+'_txt" class="v-pl-nav-txt"></div><button id="'+r+'_next" class="v-pl-btn" onclick="window[\''+r+'_nav\'](1)"><svg viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6"></polyline></svg></button></div>'}}setTimeout(function(){if(n&&n.length>o){window[r+'_page']=0;var t=Math.ceil(n.length/o);window[r+'_nav']=function(e){var a=window[r+'_page']+e;if(a>=0&&a<t){window[r+'_page']=a;window[r+'_render']()}};window[r+'_render']=function(){var e=window[r+'_page'],a=document.getElementById(r+'_wrapper');if(a){var n_e=a.getElementsByClassName('v-pl-item');for(var l=0;l<n_e.length;l++){var i=l>=e*o&&l<(e+1)*o;n_e[l].classList.toggle('v-pl-show',i)}}var c=document.getElementById(r+'_prev'),m=document.getElementById(r+'_next'),s_t=document.getElementById(r+'_txt');if(c)c.disabled=0===e;if(m)m.disabled=e===t-1;if(s_t)s_t.innerText=(e+1)+' / '+t};window[r+'_render']()}else if(n&&n.length>0){var t=document.getElementById(r+'_wrapper');if(t){var a=t.getElementsByClassName('v-pl-item');for(var r_e=0;r_e<a.length;r_e++)a[r_e].classList.add('v-pl-show')}}},50);i+='<div class="v-pl-container" oncontextmenu="return false;" style="background-color:'+s.bg+';">';if(e.titulo){i+='<div class="v-pl-title" style="color:'+s.t+';">'+e.titulo+'</div>'}if(e.textoOpcional){var f=e.tema=="dark"?"#9ca3af":"#64748b";i+='<div class="v-pl-desc" style="color:'+f+';">'+e.textoOpcional+'</div>'}i+=l;return i+='</div>'}


function fcas_lightbox_checkValue(config) {
    const retornoCasoNaoExista = config && config.retornoPadrao !== undefined ? config.retornoPadrao : "";
    if (!config) return retornoCasoNaoExista;
    const listaAlvo = Array.isArray(config.lista) ? config.lista : (config.lista?.lista || config.lista);
    const nomeDaVariavel = config.nome;
    if (!listaAlvo || !Array.isArray(listaAlvo) || listaAlvo.length === 0) return retornoCasoNaoExista;
    const item = listaAlvo[0];
    if (item && item[nomeDaVariavel] !== undefined) return item[nomeDaVariavel];
    return retornoCasoNaoExista;
}

function fcas_lightbox_checkValueEX(listad,name1,name2,retronon) {   return fcas_lightbox_checkValue({ lista: fcas_lightbox_checkValue({ lista: listad, nome: name1, retornoPadrao: retronon }), nome: name2, retornoPadrao: retronon });   }




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
        if (optiy.context) {
            var fsmodal_create_ifir = "";
			if(optiy.context!=""){  fsmodal_create_ifir = optiy.context;  }
			    if (Array.isArray(optiy.context)) {   fsmodal_create_ifir="";  }
			
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
            } else if (optiy.type && optiy.type == "list") {
                is_player0j = "no";
                fsmodal_create_ifir = `${fcas_lightbox_islisted({  lista: optiy.context, posicao: fcas_lightbox_checkValueEX(optiy,"config","posicao","centro"), largura: '100%', cores: { bordaEscura: '#ccc', fundo: '#ffffff', texto: '#333333' }, alinhamento: fcas_lightbox_checkValueEX(optiy,"config","alinhamento","left"), arredondado: "16px", tema: fcas_lightbox_checkValueEX(optiy,"config","tema","escuro"), divisor: fcas_lightbox_checkValueEX(optiy,"config","divisor",true),  marcador: fcas_lightbox_checkValueEX(optiy,"config","marcador","") })}`;
            } else if (optiy.type && optiy.type == "table") {
                is_player0j = "no";
                fsmodal_create_ifir = `<div id="table_fcaslight" style="background: #fff;color: #000;">${fcas_lightbox_table({ containerId: "table_fcaslight", showIndex: fcas_lightbox_checkValueEX(optiy,"config","showIndex",false), list: optiy.context, perPage: 12, page: 1, minWidth: '100%', model: fcas_lightbox_checkValueEX(optiy,"config","model","indigo"), zebra: true, align: fcas_lightbox_checkValueEX(optiy,"config","align","left"), headerAlign: fcas_lightbox_checkValueEX(optiy,"config","headerAlign","center"), headerBold: true, borderRadius: '10px', borderWidth: '2px', borderStyle: 'ridge', borderRadius: '9px', padding: '6px 11px' })}</div>  <style> .fcas-pagination { background: #fff;padding: 6px; } </style>`;
            } else if (optiy.type && optiy.type == "playlist") {
                is_player0j = "no";
                fsmodal_create_ifir = `<div style="width:100%; height:${Number(optiy.size)}px;">  ${fcas_lightbox_criarPlaylist({ titulo: "", exibirIndex: fcas_lightbox_checkValueEX(optiy,"config","exibirIndex",true), itensPorPagina: 6, textoOpcional: "", tema: fcas_lightbox_checkValueEX(optiy,"config","tema","light"), itens: optiy.context })}  </div>`;
            } else if (optiy.type && optiy.type == "carrossel") {
                is_player0j = "no";
                fsmodal_create_ifir = `<div style="width:100%; height:${Number(optiy.size)}px;">  ${fcas_lightbox_criarCarrossel({ titulo: "", textoOpcional: "", tema: fcas_lightbox_checkValueEX(optiy,"config","tema","dark"), transicao: fcas_lightbox_checkValueEX(optiy,"config","transicao","slide"),  posicaoDots: "center",   estiloDots: fcas_lightbox_checkValueEX(optiy,"config","estiloDots","barras"),  exibirControles: true, exibirDots: true, autoPlay: false, botoesControle: ["prev","play", "pause", "stop", "next", "dots", "fullscreen"],  intervalo: fcas_lightbox_checkValueEX(optiy,"config","intervalo",3000), imagens: optiy.context    })}  </div>`;
            } else if (optiy.type && optiy.type == "grafico") {
                is_player0j = "no";
                fsmodal_create_ifir = `<div style="width:100%; height:${Number(optiy.size)}px;">  ${fcas_lightbox_criarGrafico({ titulo: "", textoOpcional: "", tema: fcas_lightbox_checkValueEX(optiy,"config","tema","azul"), exibirValores: fcas_lightbox_checkValueEX(optiy,"config","exibirValores",true), modelo: fcas_lightbox_checkValueEX(optiy,"config","modelo","barras"), orientacao: fcas_lightbox_checkValueEX(optiy,"config","orientacao","horizontal"), exibirTooltips: fcas_lightbox_checkValueEX(optiy,"config","exibirTooltips",true), larguraBarra: 0.50, raioCurva: 8, alturaMax: 260, dados: optiy.context })}  </div>`;
            } else if (optiy.type && optiy.type == "link") {
                is_player0j = "no";
                fsmodal_create_ifir = `<iframe allow="accelerometer *; ambient-light-sensor *; autoplay *; camera *; clipboard-read *; clipboard-write *; encrypted-media *; fullscreen *; geolocation *; gyroscope *; magnetometer *; microphone *; midi *; payment *; picture-in-picture *; screen-wake-lock *; speaker *; sync-xhr *; usb *; web-share *; vibrate *; vr *" sandbox="allow-downloads allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-top-navigation-by-user-activation allow-storage-access-by-user-activation" frameborder="0" allowfullscreen src="${optiy.context}" style="width:100%; height: ${Number(optiy.size)}px;  display: block; "></iframe>`;
            } else if (optiy.type && optiy.type == "image") {
                is_player0j = "no";
                fsmodal_create_ifir = `<img src="${optiy.context}" style="user-select:none;pointer-events:none; width:${Number(optiy.size)}px;" />`;
            } else if (optiy.type && optiy.type == "svg") {
                is_player0j = "no";
                fsmodal_create_ifir = `<br/> ${optiy.context}    <style> .tlightboc_fcasfs svg {   pointer-events: none;    width: ${Number(optiy.size)}px;    height: ${Number(optiy.size)}px;    fill: currentColor;    stroke: currentColor;  }  </style> <br/><br/>`;
            }  else if (optiy.type && optiy.type == "audio") {
                is_player0j = "yes";
                if (optiy.poster && optiy.poster != "") {
                    start_fs_postermpl = optiy.poster;
                }
                start_fs_mpl = {
                    OSD: fcas_lightbox_checkValueEX(optiy,"config","OSD",true),
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
                    OSD: fcas_lightbox_checkValueEX(optiy,"config","OSD",true),
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
            fsmodal_createdd += `<div class="tlightboc_fcasfs" style="overflow:auto;  position: absolute;  width: 100%;  height: 100%;  padding:5px; text-align:center; color:#fff;">${fsmodal_create_ifir} ${fsmodal_create_desci}<br/><br/><br/><br/></div><br/><br/><br/>`;
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
                mffomocsifipsl.onclick = function (e) {
        if (!e.target.closest('.menulight_scrollmenu') && !e.target.closest('.modal-content')) {
                    fsmodal_close(optiy.id, optiy.scroll_hide);
		}
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





