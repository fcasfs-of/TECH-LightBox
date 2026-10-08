function fcasfs_lightbox_def_icriarLinkr(c) { if (!c || !c.base || !c.app) return ""; let url = c.base + "/" + c.app + (c.folder ? "/" + c.folder : "") + (c.file ? "/" + c.file : ""); if (c.args && typeof c.args === "object") { let p = []; for (let k in c.args) { if (k && c.args[k] !== undefined && c.args[k] !== null && c.args[k] !== "") p.push(k + "=" + c.args[k]); } if (p.length > 0) url += "?" + p.join("&"); } return url; }

function fcafs_lightboc_cgerenciarUrlParam(action, key, val) {
  const p = new URLSearchParams(window.location.search);
  
  if (action === 'get' || action === 'pegar') return Array.isArray(key) ? key.map(k => (p.get(k) || '').includes('http') ? decodeURIComponent(p.get(k)) : p.get(k) || '') : (p.get(key) || '').includes('http') ? decodeURIComponent(p.get(key)) : p.get(key) || '';
  if (action === 'getAll' || action === 'pegarTudo') return p.toString();
  if (action === 'has' || action === 'tem') return p.has(key);
  if (action === 'set' || action === 'definir') return Array.isArray(key) && Array.isArray(val) ? key.forEach((k, i) => val[i] !== undefined && val[i] !== null && val[i] !== '' ? p.set(k, val[i]) : p.delete(k)) : (val !== undefined && val !== null && val !== '' ? p.set(key, val) : p.delete(key));
  if (action === 'del' || action === 'deletar') return Array.isArray(key) ? key.forEach(k => p.delete(k)) : p.delete(key);
  if (action === 'toggle' || action === 'alternar') return p.set(key, p.get(key) === 'true' ? 'false' : 'true');
  if (action === 'increment' || action === 'incrementar') return p.set(key, (parseInt(p.get(key), 10) || 0) + 1);
  if (action === 'append' || action === 'adicionar') return Array.isArray(val) ? val.forEach(v => v !== undefined && v !== null && v !== '' && p.append(key, v)) : (val !== undefined && val !== null && val !== '' && p.append(key, val));
}


function fcasfs_lightbox_def_icriarLONBD() {  return {
crea :function(fcasfs_lightbox_baseUrl, ddd, optiy, app, klf, opdd,basedTk, visualaudd){    var fsmodadfdl_createdd = '';      var fsmodal_createdd = '';     var fsmodafdl_createdd = '';  
if(ddd && ddd=="yes"){
fsmodal_createdd = '<div class="loader-container">  <div class="classic-spinner"></div>   </div>';    fsmodafdl_createdd='<div id="fs_lightbox_lader" class="loader-container">  <div class="classic-spinner"></div>   </div>';
}
var fsmodal_createWi_infiio = "";   var fsmodal_creddateWi_infiio = "";   var fsmodal_create_desci = ""; 
var fsmodal_createWi= " margin:0 auto;  width:95%; ";     fsmodal_clall_menussd = "";     dcurrent_id = 0;    is_player0j = "no";     start_fs_mpl = {};       start_fs_postermpl = "";
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
return fsmodadfdl_createdd;    }

};
}
