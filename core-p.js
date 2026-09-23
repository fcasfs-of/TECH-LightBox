function fcas_injetarEstilos(){if(document.getElementById('fcas-menu-styles'))return;const style=document.createElement('style');style.id='fcas-menu-styles';style.textContent='.fcas-parent-container{width:100%}.nav-menu{display:flex;flex-direction:column;gap:15px;width:100%}.fcas-sidebar{display:flex;flex-wrap:wrap;gap:10px;width:100%}.fcas-sidebar-item{border-color:#ccc !important;padding:8px 16px;border:1px solid #ccc;background:#fff;color:#333;cursor:pointer;border-radius:4px;display:inline-flex;align-items:center;justify-content:center;gap:8px}.fcas-sidebar-item svg{width:16px;height:16px;fill:currentColor;transition:fill .2s ease}.fcas-divider{width:100%;height:1px;background:#eee;margin:15px 0}.cat-group{display:none;flex-direction:column;gap:10px;width:100%}.fcas-sidebar-item.active{opacity:.5;pointer-events:none;background:#ddd;color:#000}.dark .fcas-sidebar-item{background:transparent;color:#fff;border-color:#555}.dark .fcas-sidebar-item.active{background:#fff;color:#000;opacity:.7}.dark .fcas-divider{background:#444}.fcas-search-wrapper{width:100%;margin-bottom:15px;display:flex;flex-direction:column;gap:8px;border-bottom:1px solid #eee;padding-bottom:15px}.fcas-search-container{position:relative;width:100%;display:flex;align-items:center}.fcas-search-icon{position:absolute;left:10px;width:16px;height:16px;fill:#888;pointer-events:none}.fcas-search-input{width:100%;padding:10px 40px 10px 35px;border:1px solid #ccc;border-radius:4px;box-sizing:border-box}.fcas-search-clear{position:absolute;right:5px;background:none;border:none;padding:8px;cursor:pointer;display:none;align-items:center;justify-content:center;border-radius:50%;transition:background .2s}.fcas-search-clear:hover{background:#f0f0f0}.fcas-search-clear svg{width:16px;height:16px;fill:#888;transition:fill .2s}.fcas-search-clear:hover svg{fill:#333}.fcas-search-results{font-size:13px;color:#155724;background-color:#d4edda;border:1px solid #c3e6cb;font-weight:bold;padding:6px 12px;border-radius:4px;display:none;align-self:center;text-align:center}.fcas-badge{background:#e0e0e0;color:#333;padding:2px 6px;border-radius:10px;font-size:12px;margin-left:5px;font-weight:bold}.fcas-sidebar-item.active .fcas-badge{background:#999;color:#fff}.dark .fcas-badge{background:#444;color:#fff}.dark .fcas-sidebar-item.active .fcas-badge{background:#fff;color:#000}.dark .fcas-search-input{background:#222;color:#fff;border-color:#555}.dark .fcas-search-clear:hover{background:#333}.dark .fcas-search-clear:hover svg{fill:#fff}.dark .fcas-search-results{color:#721c24;background-color:#f8d7da;border-color:#f5c6cb}.dark .fcas-search-wrapper{border-color:#444}.fcas-no-results{display:flex;flex-direction:column;align-items:center;gap:10px;padding:30px 10px;width:100%;text-align:center;color:#888}.fcas-no-results svg{width:48px;height:48px;fill:#bbb}.dark .fcas-no-results{color:#aaa}.dark .fcas-no-results svg{fill:#555}@media(min-width:768px){.fcas-parent-container{display:flex;align-items:stretch;max-width:100%}.nav-menu{width:75%}.fcas-sidebar{flex-direction:column;width:20%}.fcas-sidebar-item{width:100%;text-align:center}.fcas-divider{width:1px;height:auto;min-height:100%;margin:0 2%}}.cat-group:not([style*="display: none"]):has(~ .cat-group:not([style*="display: none"])){border-bottom:1px solid #eee;padding-bottom:15px}.dark .cat-group:not([style*="display: none"]):has(~ .cat-group:not([style*="display: none"])){border-color:#444}.fcas-sidebar-divider{border:0;border-top:1px solid #ccc;margin:10px 0}.dark .fcas-sidebar-divider{border-top:1px solid #444}';document.head.appendChild(style)}
function fcas_montarEstruturaHTML(nav,sidebar){if(sidebar)return document.querySelector('.fcas-parent-container');sidebar=document.createElement('div');sidebar.className='fcas-sidebar';nav.parentNode.insertBefore(sidebar,nav);fcas_injetarEstilos();const divi=document.createElement('div');divi.className='fcas-divider';const wrapper=document.createElement('div');wrapper.className='fcas-parent-container';nav.parentNode.insertBefore(wrapper,sidebar);wrapper.appendChild(sidebar);wrapper.appendChild(divi);wrapper.appendChild(nav);return wrapper;}
function fcas_criarBarraBusca(wrapper,isPt){const sw=document.createElement('div');sw.className='fcas-search-wrapper';const s=new URLSearchParams(window.location.search).get('s')||'';sw.innerHTML='<div class="fcas-search-container"><svg class="fcas-search-icon" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg><input type="text" class="fcas-search-input" value="'+s+'" placeholder="'+(isPt?'Buscar botões...':'Search buttons...')+'"><button class="fcas-search-clear" type="button"><svg viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg></button></div><div class="fcas-search-results"></div>';wrapper.parentNode.insertBefore(sw,wrapper);return sw;}
function fcas_renderizarHTMLMenu(config,isPt,nav,sidebar){let htmlMenu='',totalGeral=0;config.categorias.forEach(g=>{if(g&&Array.isArray(g.botoes))totalGeral+=g.botoes.length});const temIcons=typeof fcasfs_ligh_cate_icons!=='undefined',iconeAll=temIcons&&(fcasfs_ligh_cate_icons['Todos']||fcasfs_ligh_cate_icons['All'])?fcasfs_ligh_cate_icons['Todos']||fcasfs_ligh_cate_icons['All']:'';let htmlSidebar='<button class="fcas-sidebar-item active" data-target="all">'+iconeAll+(isPt?'Todos':'All')+'<span class="fcas-badge">'+totalGeral+'</span></button><hr class="fcas-sidebar-divider">';config.categorias.forEach((g,idx)=>{if(g&&typeof g==='object'&&typeof g.nome==='string'&&Array.isArray(g.botoes)){const iconeSvg=temIcons&&fcasfs_ligh_cate_icons[g.nome]?fcasfs_ligh_cate_icons[g.nome]:'',gid='fcas-grupo-'+idx;htmlMenu+='<div class="cat-group" id="'+gid+'"><h3>'+g.nome+' ('+g.botoes.length+')</h3>';g.botoes.forEach(b=>{if(b&&typeof b==='object'&&typeof b.id==='string'&&typeof b.texto==='string')htmlMenu+='<button id="'+b.id+'">'+b.texto+'</button>'});htmlMenu+='</div>';htmlSidebar+='<button class="fcas-sidebar-item" data-target="'+gid+'">'+iconeSvg+g.nome+'<span class="fcas-badge">'+g.botoes.length+'</span></button>'}});nav.innerHTML=htmlMenu;sidebar.innerHTML=htmlSidebar;}
function fcas_exibirMensagemNenhumResultado(nav,isPt,searchResults){const noRes=document.createElement('div');noRes.className='fcas-no-results';noRes.innerHTML='<svg viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/><circle cx="9.5" cy="9.5" r="2.5" fill="none"/><line x1="14" y1="14" x2="19" y2="19" stroke="#bbb" stroke-width="1.5" stroke-linecap="round"/></svg><span>'+(isPt?'Nenhum botão correspondente encontrado.':'No matching buttons found.')+'</span>';nav.appendChild(noRes);searchResults.style.backgroundColor='#f8d7da';searchResults.style.color='#721c24';searchResults.style.borderColor='#f5c6cb';}
function fcas_executarFiltroBotoes(nav,searchWrapper,searchInput,searchClear,searchResults,isPt,isTyping){const termo=searchInput.value.toLowerCase().trim();let total=0;searchClear.style.display=searchInput.value!==''?'flex':'none';const oldNo=nav.querySelector('.fcas-no-results');if(oldNo)oldNo.remove();nav.querySelectorAll('.cat-group').forEach(function(g){let visiveis=0;g.querySelectorAll('button').forEach(function(b){const match=b.textContent.toLowerCase().includes(termo);b.style.display=match?'':'none';if(match){visiveis++;total++;}});const h3=g.querySelector('h3');g.style.display=(visiveis===0&&termo!=='')?'none':'flex';if(h3)h3.style.display='block';});if(searchInput.value.trim()===''){searchResults.textContent='';searchResults.style.display='none';}else{searchResults.style.display='block';searchResults.textContent=isPt?(total===1?'1 item encontrado':total+' itens encontrados'):(total===1?'1 item found':total+' items found');if(total===0){fcas_exibirMensagemNenhumResultado(nav,isPt,searchResults);}else{searchResults.style.backgroundColor='';searchResults.style.color='';searchResults.style.borderColor='';}if(isTyping){searchWrapper.scrollIntoView({behavior:'smooth',block:'start'});}}}
function fcas_configurarEventosSidebar(sidebar,searchWrapper,searchInput,searchClear,searchResults,nav){sidebar.addEventListener('click',function(e){const b=e.target.closest('.fcas-sidebar-item');if(!b)return;sidebar.querySelectorAll('.fcas-sidebar-item').forEach(btn=>btn.classList.remove('active'));b.classList.add('active');const t=b.getAttribute('data-target');if(t==='all'){searchWrapper.style.display='flex';fcas_executarFiltroBotoes(nav,searchWrapper,searchInput,searchClear,searchResults,navigator.language.startsWith('pt'),false);}else{searchWrapper.style.display='none';searchInput.value='';searchClear.style.display='none';searchResults.textContent='';searchResults.style.display='none';const oldNo=nav.querySelector('.fcas-no-results');if(oldNo)oldNo.remove();}nav.querySelectorAll('.cat-group').forEach(function(g){const h3=g.querySelector('h3');if(t==='all'){if(h3)h3.style.display='block';}else{if(h3)h3.style.display='none';const exibir=(g.id===t);g.style.display=exibir?'flex':'none';g.querySelectorAll('button').forEach(btn=>btn.style.display='');if(exibir){g.scrollIntoView({behavior:'smooth',block:'start'});}}});});}
function fcas_lightbox_gerarMenu(config){if(!config||typeof config!=='object'||!config.categorias)return;const nav=document.querySelector('.nav-menu');if(!nav)return;const isPt=(config.lang||navigator.language).startsWith('pt');let sidebar=document.querySelector('.fcas-sidebar');let wrapper=fcas_montarEstruturaHTML(nav,sidebar);sidebar=document.querySelector('.fcas-sidebar');const sw=fcas_criarBarraBusca(wrapper,isPt);fcas_renderizarHTMLMenu(config,isPt,nav,sidebar);const si=sw.querySelector('.fcas-search-input');const sc=sw.querySelector('.fcas-search-clear');const sr=sw.querySelector('.fcas-search-results');si.addEventListener('input',function(){fcas_executarFiltroBotoes(nav,sw,si,sc,sr,isPt,true);});sc.addEventListener('click',function(){si.value='';fcas_executarFiltroBotoes(nav,sw,si,sc,sr,isPt,false);si.focus();});fcas_configurarEventosSidebar(sidebar,sw,si,sc,sr,nav);nav.querySelectorAll('.cat-group').forEach(g=>g.style.display='flex');if(si.value){si.dispatchEvent(new Event('input'));}}


function dispararCliquesAutomaticos(regras) {
    if (!regras || regras.length === 0) {        return;     }

    var urlParams = new URLSearchParams(window.location.search);
    for (var i = 0; i < regras.length; i++) {
        var regra = regras[i];
        var valorUrl = urlParams.get(regra.parametro) || '';
        if (valorUrl !== '') {
            var seletor = regra.obterSeletor(valorUrl);
            if (seletor !== '') {
                var elemento = document.querySelector(seletor);   if (elemento) {  elemento.click();  }
            }
        }
    }
}


var minhasRegras_syy = [
    {
        parametro: 'button',
        obterSeletor: function(valor) { if (!valor || valor.trim() === '') return ''; return '.nav-menu .cat-group button#btn' + valor; }
    },
    {
        parametro: 'cat',
        obterSeletor: function(valor) { if (!valor || valor.trim() === '') return ''; var sufixo = (!isNaN(valor) && valor.trim() !== '') ? 'fcas-grupo-' + valor : valor; return '.fcas-sidebar .fcas-sidebar-item[data-target="' + sufixo + '"]'; }
    }
];

window.addEventListener('load', function(){ dispararCliquesAutomaticos(minhasRegras_syy); });


let currentTheme = localStorage.getItem("LightBox_theme") || "light";


  const toggleThemeBtn = document.getElementById('theme-toggle');
  toggleThemeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    const isDark = document.body.classList.contains('dark');
    toggleThemeBtn.textContent = isDark ? 'Modo Claro' : 'Modo Escuro';
    currentTheme = isDark ? "dark" : "light";
    localStorage.setItem("LightBox_theme", currentTheme);
  });

  document.body.classList.remove('dark');
    const isDark = document.body.classList.contains('dark');
    toggleThemeBtn.textContent = isDark ? 'Modo Claro' : 'Modo Escuro';
if(currentTheme=="dark"){
    document.body.classList.add('dark');
    const isDark = document.body.classList.contains('dark');
    toggleThemeBtn.textContent = isDark ? 'Modo Claro' : 'Modo Escuro';
}


  const text_thnv = "Fechar";


function fcasfs_obter_booleano(chave, padrao){var v=fcasfs_lightbox_config_carregar(''+chave);return v!==null?v==='true':(padrao!==undefined?padrao:true)}
function fcasfs_obter_obterValorPorBooleano(valor, mapeamento) { return !mapeamento ? (valor ? "true" : "false") : (valor ? (mapeamento.seTrue !== undefined ? mapeamento.seTrue : "true") : (mapeamento.seFalse !== undefined ? mapeamento.seFalse : "false")); }

  function openModal(contentOptions,obj) {
    fsmodal_open({
      id: "previ_box",
      tiptext: "",
      scroll_hide: "yes",
      noclose: false,
      remove_efect: fcasfs_obter_booleano("remove_efect", false),
      menu: fcasfs_obter_booleano("menu", true),
      loader: fcasfs_obter_booleano("loader", true),
      click_close: fcasfs_obter_booleano("click_close", false),
      itens: obj,
      include: { player: contentOptions.includePlayer },
      content: {
        config: {
          BG_Blur:fcasfs_obter_obterValorPorBooleano(fcasfs_obter_booleano("bg_blur", true), { seTrue: "8", seFalse: "0" }),  BG_Opacity:fcasfs_obter_obterValorPorBooleano(fcasfs_obter_booleano("bg_opacity", true), { seTrue: "0.9", seFalse: "1" }),
          Lang:"pt", action: "https://fcasfs-of.cloud-fs.net/projects-pt", showReset:true
        },
        title: contentOptions.title,
        type: contentOptions.type,
        context: contentOptions.context,
        poster: contentOptions.poster,
        size: contentOptions.size,
        description: contentOptions.description,
      }
    });
  }


 


var modaisDisponiveis = {
  'btnFeedback': function() {
    return {
      title: "feedback",
      type: "feedback",
      context:function(){},
      size: "360",
      includePlayer: "no",
      description: ""
    };
  },
  'btnTree': function() {
    return {
      title: "treeview",
      type: "treeview",
      context:{   allOpen: true, showValues: true, 
  data: {
    'Pasta principal': {
      'Subpasta': {
        'Arquivo de Projetos': {    'Nome': 'LightBox',   'Version': 2,   'Ativo': true,     } }
    }
  }  },
      size: "360",
      includePlayer: "no",
      description: ""
    };
  },
  'btnMindmap': function() {
    return {
      title: "mindmap",
      type: "mindmap",
      context:{
 data: [
    'LightBox',
    'LightBox/app',
    'LightBox/app/api'
  ]
},
      size: "360",
      includePlayer: "no",
      description: ""
    };
  },
  'btn3DText': function() {
    return {
      title: "3D Text",
      type: "3DText",
      context:{
    text: "FCAS_FS",  rotateX: "20deg",   rotateY: "-25deg" 
},
      size: "360",
      includePlayer: "no",
      description: ""
    };
  },
  'btnAd': function() {
    return {
      title: "Ad",
      type: "Ad",
      context:{
    title: "LightBox", badgeText:"teste",  desc: "Acesse tudo por tempo ilimitado.",
    url: "https://lightbox.fcasfs-of.cloud-fs.net",   btnText: "Assista à demonstração",
    bgImage: "https://lightbox.fcasfs-of.cloud-fs.net/favicon.png",  btnBg: "#00cd6c"
},
      size: "360",
      includePlayer: "no",
      description: ""
    };
  },  
  'btnVCC': function() {
    return {
      title: "VirtualCreditCard",
      type: "VirtualCreditCard",
      context:{
    holder: "FCAS_FS", chipImg:"https://lightbox.fcasfs-of.cloud-fs.net/favicon.png",   type: "dark"
},
      size: "360",
      includePlayer: "no",
      description: ""
    };
  },
  'btnVirtualCard': function() {
    return {
      title: "VirtualCard",
      type: "VirtualCard",
      context:{
    name: "FCAS_FS",
    role: "LightBox",
    type: "dark",
    model: "badge", 
    items: ["Desenvolvedor"]
},
      size: "360",
      includePlayer: "no",
      description: ""
    };
  },
  'btnProfile': function() {
    return {
      title: "Profile",
      type: "Profile",
      context:{
 name: "FCAS_FS",
            avatar: "",
            background: "#ffffff",
            borderRadius: "16px",
            textColor: "#2d3748",
            infos: [
                { title: "Sobre", content: "Desenvolvedor full-stack apaixonado por criar interfaces limpas e responsivas.." },
                { title: "Habilidades", content: "HTML5, CSS3, JavaScript." }
            ]
},
      size: "360",
      includePlayer: "no",
      description: ""
    };
  },   
  'btnRaffle': function() {
    return {
      title: "Sorteio",
      type: "Sorteio",
      context:{
    title: "Sorteio",
    numberMax: 500,     
    background: "#1e1e24",
    textColor: "#ffffff",
    resultColor: "#00ff88",
    iconColor: "#00ff88",
    borderRadius: "14px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
    fontFamily: "Segoe UI, sans-serif",
    padding: "25px",
    maxWidth: "350px"
},
      size: "360",
      includePlayer: "no",
      description: ""
    };
  },   
  'btnParticipants': function() {
    return {
      title: "Participants",
      type: "Participants",
      context:{
    title: "Confirmados",
    background: "#ffffff",
    textColor: "#2d3748",
    iconColor: "#2ed573", 
    pendingColor: "#ffa502", 
    list: [
        { name: "FCAS_FS", status: "Confirmado", type: "confirmed", avatar: "" },
    ]
},
      size: "360",
      includePlayer: "no",
      description: ""
    };
  },   
  'btnCalendar': function() {
    return {
      title: "Calendar",
      type: "Calendar",
      context:{
    title: "Mês atual",
    mode: "month",  
    actual: true 
},
      size: "360",
      includePlayer: "no",
      description: ""
    };
  },  
  'btnPricePlan': function() {
    return {
      title: "Plano",
      type: "plans",
      context:{
    plans: [
        {
            title: 'Plano Gratuito',
            price: 'R$ 0',
            features: ['Acesso total'],
            buttonText: 'Instalar',
            link: '#'
        }
    ]
},
      size: "360",
      includePlayer: "no",
      description: ""
    };
  },
  'btnTimeline': function() {
    return {
      title: "Linha do tempo",
      type: "timeline",
      context:{
  data: [
{ date: "2025", title: "Começar", description: "Estágio inicial" },
{ date: "2026", title: "Atualizar", description: "Etapa de Aprimoramento" }
],
  options: {}
},
      size: "360",
      includePlayer: "no",
      description: ""
    };
  },
  'btnBlogPost': function() {
    return {
      title: "BlogCard",
      type: "BlogCard",
      context:{
    title: "Como instalar no seu site",
    text: "Leia a documentação atentamente e siga as instruções passo a passo.",
    image: "https://lightbox.fcasfs-of.cloud-fs.net/favicon.png",
    link: "https://lightbox.fcasfs-of.cloud-fs.net/doc",
    linkText: "Leia o artigo completo",
    width: "400px",
    accentColor: ""
},
      size: "360",
      includePlayer: "no",
      description: ""
    };
  },
  'btnDashboard': function() {
    return {
      title: "Dashboard",
      type: "dashboard",
      context:{
  titulo: "Painel de Controle",
  tema: {},
  blocos: [
    { nome: "Acessos",  valor: "1500", indicador: "Servidor estável", svg: '<svg width="24" height="24" viewBox="0 0 24 24" stroke="none" fill="currentColor" stroke-width="2"><path d="M22,15H20V12a1,1,0,0,0-1-1H13V9h2a1,1,0,0,0,1-1V2a1,1,0,0,0-1-1H9A1,1,0,0,0,8,2V8A1,1,0,0,0,9,9h2v2H5a1,1,0,0,0-1,1v3H2a1,1,0,0,0-1,1v6a1,1,0,0,0,1,1H8a1,1,0,0,0,1-1V16a1,1,0,0,0-1-1H6V13H18v2H16a1,1,0,0,0-1,1v6a1,1,0,0,0,1,1h6a1,1,0,0,0,1-1V16A1,1,0,0,0,22,15ZM7,17v4H3V17ZM10,7V3h4V7ZM21,21H17V17h4Z"/>/svg>' },
    {   nome: "Histórico de Downloads",  valor: "52,91%", indicador: "Meta mensal atingida",  svg: '<svg width="24" height="24" viewBox="-1 -2 24 24" stroke="none" fill="currentColor" stroke-width="2"><path d="M13.106 9h3.953c.546 0 .988.448.988 1s-.442 1-.988 1h-4.941a.994.994 0 0 1-.988-1V4c0-.552.442-1 .988-1s.988.448.988 1v5zm6-6.071A10.029 10.029 0 0 1 22 10c0 5.523-4.424 10-9.882 10v-2c4.366 0 7.906-3.582 7.906-8a8.02 8.02 0 0 0-2.316-5.657A7.834 7.834 0 0 0 12.118 2C8.574 2 5.574 4.36 4.571 7.612l1.352-.923a.981.981 0 0 1 1.372.27 1.007 1.007 0 0 1-.267 1.388l-3.277 2.237a.981.981 0 0 1-1.372-.27L.17 6.998a1.007 1.007 0 0 1 .267-1.389.981.981 0 0 1 1.372.27l.839 1.259C3.863 3.01 7.643 0 12.118 0c2.729 0 5.2 1.12 6.988 2.929z"/></svg>' }
  ]
},
      size: "360",
      includePlayer: "no",
      description: ""
    };
  },
  'btnMap': function() {
    return {
      title: "Map",
      type: "map",
      context:[ { nome: "Api", x: 42, y: 34, cor: "#333", formato: "circle" }, { nome: "Site", x: 56, y: 64, cor: "#111", formato: "square" } ],
      size: "360",
      includePlayer: "no",
      description: ""
    };
  },
  'btnProduct': function() {
    return {
      title: "Produto",
      type: "product",
      context:{ id: "prod-0012",  nome: "Tech LightBox",  codigoSku: "FCAS-OF-001",    precoOriginal: 0,    precoPromocional: 0,    descricao: "",    valor: "",    medida: "",    moeda: "R$",     imagens: [],    especificacoes: {},    tema: ""  },
      size: "360",
      includePlayer: "no",
      description: ""
    };
  },
  'btnContact': function() {
    return {
      title: "Contato",
      type: "contact",
      context:{    nome: "FCAS_FS",    cargo: "OF",    empresa: "Tech - LightBox",    telefones: [],    emails: ["fcasfs.of@cloud-fs.net"],    website: "https://fcasfs-of.cloud-fs.net",    endereco: "",    notas: "",    redesSociais: {},    tema: ""  },
      size: "360",
      includePlayer: "no",
      description: ""
    };
  },
  'btnForm': function() {
    return {
      title: "Formulário",
      type: "form",
      context:[ { required:true, label: "Projeto", name: "project", type: "text", placeholder: "Projeto..." } ],
      size: "340",
      includePlayer: "no",
      description: ""
    };
  },
  'btnSlideshow': function() {
    return {
      title: "Slideshow",
      type: "slideshow",
      context:[ { url: "https://lightbox.fcasfs-of.cloud-fs.net/favicon.png", caption: "" },  { url: "https://fcasfs-of.cloud-fs.net/info-profile/logo/cover_b.png", caption: "logo" } ],
      size: "340",
      includePlayer: "no",
      description: ""
    };
  },
  'btnCarrossel': function() {
    return {
      title: "Carrossel",
      type: "carrossel",
      context:[ { url: "https://lightbox.fcasfs-of.cloud-fs.net/favicon.png", legenda: "" },  { url: "https://fcasfs-of.cloud-fs.net/info-profile/logo/cover_b.png", legenda: "" } ],
      size: "320",
      includePlayer: "no",
      description: ""
    };
  },
  'btnPlaylist': function() {
    return {
      title: "Playlist",
      type: "playlist",
      context:[ { titulo: "LightBox", subtitulo: "Português", thumbnail: "https://lightbox.fcasfs-of.cloud-fs.net/favicon.png", href: "https://lightbox.fcasfs-of.cloud-fs.net/" }, { titulo: "LightBox", subtitulo: "English", thumbnail: "https://lightbox.fcasfs-of.cloud-fs.net/favicon.png", href: "https://lightbox.fcasfs-of.cloud-fs.net/en" } ],
      size: "420",
      includePlayer: "no",
      description: ""
    };
  },
  'btnText': function() {
    return {
      title: "LightBox",
      type: "texto",
      context: "Lightbox é inovador que oferece uma experiência integrada para visualizar e interagir com textos, links, carrossel, PDF, Playlist, SVG, gráfico, tabela, imagens, lista, áudios e vídeos de forma intuitiva e moderna. <br/> Com uma interface limpa e responsiva, o aplicativo permite aos usuários explorar conteúdos multimídia de maneira eficiente, proporcionando uma navegação fluida e envolvente.",
      size: "250",
      includePlayer: "no",
      description: "(Texto, PDF, Playlist, Link, SVG, Gráfico, Carrossel, Vídeo, Lista, Tabela, Imagem e Áudio)"
    };
  },
  'btnTable': function() {
    return {
      title: "Tabela",
      type: "table",
      context:[   {     App: typeof document !== "undefined" ? document.title : "",     Version: typeof app_2ver !== "undefined" ? app_2ver : "",     Link: typeof location !== "undefined" ? location.href : ""  }],
      size: "250",
      includePlayer: "no",
      description: ""
    };
  },
  'btnList': function() {
    return {
      title: "Lista",
      type: "list",
      context:[typeof document !== "undefined" ? document.title : "", typeof app_2ver !== "undefined" ? app_2ver : "", typeof location !== "undefined" ? location.href : ""],
      size: "250",
      includePlayer: "no",
      description: ""
    };
  },
  'btnAudio': function() {
    return {
      title: "Audio 1",
      type: "audio",
      context: "https://fcasfs-of.cloud-fs.net/info-profile/Files/intro1.mp4",
      poster: "https://fcasfs-of.cloud-fs.net/info-profile/Files/intro1.jpg",
      size: "320",
      includePlayer: "yes",
      description: ""
    };
  },
  'btnLink': function() {
    return {
      title: "Site",
      type: "link",
      context: "https://lightbox.fcasfs-of.cloud-fs.net/",
      size: "250",
      includePlayer: "no",
      description: "Oficial"
    };
  },  
  'btnVideo': function() {
    return {
      title: "Video 1",
      type: "video",
      context: "https://fcasfs-of.cloud-fs.net/info-profile/Files/intro1.mp4",
      poster: "https://fcasfs-of.cloud-fs.net/info-profile/Files/intro1.jpg",
      size: "360",
      includePlayer: "yes",
      description: ""
    };
  },
  'btnPDF': function() {
    return {
      title: "PDF",
      type: "pdf",
      context:"https://fcasfs-of.cloud-fs.net/docs/tech-player-br.pdf",
      size: "450",
      includePlayer: "no",
      description: ""
    };
  },
  'btnImage': function() {
    return {
      title: "Logo 1",
      type: "image",
      context: "https://fcasfs-of.cloud-fs.net/info-profile/logo/cover_b.png",
      size: "150",
      includePlayer: "no",
      description: ""
    };
  },
  'btnSVG': function() {
    return {
      title: "SVG 1",
      type: "svg",
      context: '<svg fill="#000" width="800px" height="800px" viewBox="-0.5 0 24 24"><path d="m0 0h5.219v5.219h-5.219z"/><path d="m9.39 0h5.219v5.219h-5.219z"/><path d="m17.998 0h5.219v5.219h-5.219z"/><path d="m0 9.39h5.219v5.219h-5.219z"/><path d="m9.39 9.39h5.219v5.219h-5.219z"/><path d="m17.998 9.39h5.219v5.219h-5.219z"/><path d="m0 18.781h5.219v5.219h-5.219z"/><path d="m9.39 18.781h5.219v5.219h-5.219z"/><path d="m17.998 18.781h5.219v5.219h-5.219z"/></svg>',
      size: "224",
      includePlayer: "no",
      description: ""
    };
  },
    'btnGrafic': function() {
    return {
      title: "Gráfico",
      type: "grafico",
      context: [
            { label: "Dom", valor: 58 },
            { label: "Seg", valor: 140 },
            { label: "Ter", valor: 310 },
            { label: "Qua", valor: 520 },
            { label: "Qui", valor: 410 },
            { label: "Sex", valor: 214 },
            { label: "Sab", valor: 85 }
        ],
      size: "450",
      includePlayer: "no",
      description: ""
    };
  }
};


const fcasfs_ligh_cate_icons = {
  "Todos": "<svg width=\"24px\" height=\"24px\" viewBox=\"0 0 52 52\" enable-background=\"new 0 0 52 52\" xml:space=\"preserve\"><path d=\"M31.6,21.6c-1.2,0-2.2-1-2.2-2.2V5.5c0-1.2,1-2.2,2.2-2.2h14.2c1.2,0,2.2,1,2.2,2.2v13.9c0,1.2-1,2.2-2.2,2.2H31.6z\" /><path d=\"M37.7,29.8l-8.2,8.9c-0.5,0.5-0.5,1.3,0,1.9l8.2,8.9c0.5,0.6,1.5,0.6,2,0l8.2-8.9c0.5-0.5,0.5-1.3,0-1.9\tl-8.2-8.9C39.2,29.2,38.3,29.2,37.7,29.8z\" /><circle cx=\"13\" cy=\"39.4\" r=\"9.3\" /><path d=\"M4.8,6.5l7.2-4.1c0.7-0.4,1.5-0.4,2.1,0l7.1,4.1c0.7,0.4,1.1,1.1,1.1,1.9v8.2c0,0.8-0.4,1.5-1.1,1.9\tl-7.1,4.1c-0.7,0.4-1.5,0.4-2.1,0l-7.2-4.1c-0.7-0.4-1.1-1.1-1.1-1.9V8.4C3.7,7.6,4.1,6.9,4.8,6.5z\" /></svg>",
  "Mídia Visual": "<svg width=\"24px\" height=\"24px\" viewBox=\"0 0 52 52\"><path d=\"M4,10v32h44V10H4z M44,38H8V14h36V38z\"/><circle cx=\"16\" cy=\"22\" r=\"4\"/><polygon points=\"12,34 22,24 30,30 40,18 42,20 42,34\"/></svg>",
  "Publicação": "<svg width=\"24px\" height=\"24px\" viewBox=\"0 0 52 52\"><path d=\"M10,6v40h32V6H10z M38,42H14V10h24V42z\"/><line x1=\"18\" y1=\"16\" x2=\"34\" y2=\"16\" stroke=\"black\" stroke-width=\"4\"/><line x1=\"18\" y1=\"24\" x2=\"34\" y2=\"24\" stroke=\"black\" stroke-width=\"4\"/><line x1=\"18\" y1=\"32\" x2=\"28\" y2=\"32\" stroke=\"black\" stroke-width=\"4\" /></svg>",
  "Galeria": "<svg width=\"24px\" height=\"24px\" viewBox=\"0 0 52 52\"><rect x=\"6\" y=\"14\" width=\"12\" height=\"12\"/><rect x=\"22\" y=\"14\" width=\"12\" height=\"12\"/><rect x=\"38\" y=\"14\" width=\"12\" height=\"12\"/><rect x=\"6\" y=\"30\" width=\"12\" height=\"12\"/><rect x=\"22\" y=\"30\" width=\"12\" height=\"12\"/><rect x=\"38\" y=\"30\" width=\"12\" height=\"12\" /></svg>",
  "Texto & Links": "<svg width=\"24px\" height=\"24px\" viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z\"/></svg>",
  "Dados": "<svg width=\"24px\" height=\"24px\" viewBox=\"0 0 52 52\"><path d=\"M8,8v36h36V8H8z M22,14h16v6H22V14z M14,14h4v6h-4V14z M14,24h4v6h-4V24z M22,24h16v6H22V24z M14,34h4v6h-4V34z M22,34h16v6H22V34z\"/></svg>",
  "Multimídia": "<svg width=\"24px\" height=\"24px\" viewBox=\"0 0 52 52\"><path d=\"M6,10v32h40V10H6z M42,38H10V14h32V38z\"/><polygon points=\"22,18 34,26 22,34\"/></svg>",
  "Interação": "<svg width=\"24px\" height=\"24px\" viewBox=\"0 0 52 52\"><path d=\"M26,4C13.8,4,4,13.8,4,26c0,5.2,1.8,10,4.8,13.8L6,46l6.5-2.6C16.2,46.3,21,48,26,48c12.2,0,22-9.8,22-22S38.2,4,26,4z M30,34H16v-4h14V34z M36,24H16v-4h20V24z\"/></svg>",
  "Análise": "<svg width=\"24px\" height=\"24px\" viewBox=\"0 0 52 52\"><rect x=\"8\" y=\"28\" width=\"6\" height=\"16\"/><rect x=\"20\" y=\"18\" width=\"6\" height=\"26\"/><rect x=\"32\" y=\"8\" width=\"6\" height=\"36\"/><line x1=\"4\" y1=\"46\" x2=\"48\" y2=\"46\" stroke=\"black\" stroke-width=\"4\"/><polyline points=\"6,24 18,14 30,10 44,4\" fill=\"none\" stroke=\"black\" stroke-width=\"3\"/></svg>",
  "Documentos": "<svg width=\"24px\" height=\"24px\" viewBox=\"0 0 52 52\"><path d=\"M30,4H10v44h32V16L30,4z M32,18V8l10,10H32z M38,44H14V8h14v12h12V44z\"/></svg>",
  "Localização": "<svg width=\"24px\" height=\"24px\" viewBox=\"0 0 52 52\"><path d=\"M26,4C16.1,4,8,12.1,8,22c0,11,15.5,25.3,16.2,25.9c1,0.9,2.6,0.9,3.6,0C28.5,47.3,44,33,44,22C44,12.1,35.9,4,26,4z M26,30c-4.4,0-8-3.6-8-8s3.6-8,8-8s8,3.6,8,8S30.4,30,26,30z\"/></svg>",
  "Navegação & Estrutura": "<svg width=\"24px\" height=\"24px\" viewBox=\"0 0 52 52\"><rect x=\"6\" y=\"21\" width=\"10\" height=\"10\"/><rect x=\"26\" y=\"8\" width=\"10\" height=\"10\"/><rect x=\"26\" y=\"34\" width=\"10\" height=\"10\"/><path d=\"M16,26h10 M31,18v16\" stroke=\"black\" stroke-width=\"3\" fill=\"none\"/></svg>",
  "Utilitários & Dinâmicos": "<svg width=\"24px\" height=\"24px\" viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm1.07-7.75l-.9.92C12.45 11.9 12 12.5 12 14h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H7c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.04-.42 1.99-1.07 2.75z\"/></svg>",
  "Negócios": "<svg width=\"24px\" height=\"24px\" viewBox=\"0 0 52 52\"><path d=\"M42,14h-6v-4c0-2.2-1.8-4-4-4H20c-2.2,0-4,1.8-4,4v4h-6c-2.2,0-4,1.8-4,4v24c0,2.2,1.8,4,4,4h32c2.2,0,4-1.8,4-4V18C46,15.8,44.2,14,42,14z M20,10h12v4H20V10z M42,42H10V22h32V42z\"/></svg>"
};

fcas_lightbox_gerarMenu({ lang: "pt", 
  categorias: [
    { nome: "Mídia Visual", botoes: [{ id: "btnImage", texto: "Visualizar Imagem" }, { id: "btnSVG", texto: "Visualizar SVG" }] },
    {"nome": "Publicação", "botoes": [{ "id": "btnBlogPost", "texto": "Visualizar Post de Blog" }] },
    { nome: "Galeria", botoes: [{ id: "btnSlideshow", texto: "Visualizar Slideshow" }, { id: "btnCarrossel", texto: "Visualizar Carrossel" }, { "id": "btnTimeline", "texto": "Visualizar Linha do tempo" }] },
    { nome: "Texto & Links", botoes: [{ id: "btnText", texto: "Visualizar Texto" }, { id: "btnLink", texto: "Visualizar Link" }] },
    { nome: "Dados", botoes: [{ id: "btnTable", texto: "Visualizar Tabela" }, { id: "btnList", texto: "Visualizar Lista" }] },
    { nome: "Multimídia", botoes: [{ id: "btnPlaylist", texto: "Visualizar Playlist" }, { id: "btnAudio", texto: "Visualizar Áudio" }, { id: "btnVideo", texto: "Visualizar Vídeo" }] },
    { nome: "Interação", botoes: [{ id: "btnForm", texto: "Visualizar Formulário" }, { id: "btnFeedback", texto: "Visualizar Feedback" }] },
    { nome: "Análise", botoes: [{ id: "btnGrafic", texto: "Visualizar Gráfico" }, { id: "btnDashboard", texto: "Visualizar Dashboard" }] },
    { nome: "Documentos", botoes: [{ id: "btnPDF", texto: "Visualizar PDF" }] },
    { nome: "Localização", botoes: [{ id: "btnMap", texto: "Visualizar Mapa" }] },
    { "nome": "Navegação & Estrutura", "botoes": [ { "id": "btnTree", "texto": "Visualizar Árvore de Arquivos" }, { "id": "btnMindmap", "texto": "Visualizar Mapa Mental" } ] },
    { "nome": "Utilitários & Dinâmicos", "botoes": [{ "id": "btnProfile", "texto": "Visualizar Perfil" }, { "id": "btnRaffle", "texto": "Visualizar Sorteio" }, { "id": "btnParticipants", "texto": "Visualizar Participantes" }, { "id": "btnCalendar", "texto": "Visualizar Calendário" }, { "id": "btnAd", "texto": "Visualizar Anúncio" }, { "id": "btn3DText", "texto": "Visualizar Texto 3D" }] },
    { nome: "Negócios", botoes: [{ id: "btnContact", texto: "Visualizar Contato" }, { id: "btnProduct", texto: "Visualizar Produto" }, { id: "btnPricePlan", texto: "Visualizar Plano de Preços" }, { "id": "btnVirtualCard", "texto": "Visualizar Cartão Virtual" }, { "id": "btnVCC", "texto": "Visualizar Cartão de Crédito" }] }
  ]
});



Object.keys(modaisDisponiveis).forEach(function(idBotao) {
  var elemento = document.getElementById(idBotao);
  if (elemento) {
    elemento.addEventListener('click', function(evento) {
      if (typeof modaisDisponiveis[idBotao] === 'function') {
        openModal(modaisDisponiveis[idBotao](), evento);
      }
    });
  }
});






var cokk_plu_idf="pt";

function exe_check_load_fl(){   
 var cokk_plu_enfd="/en";    var cokk_plsu_enfdd="-en"; 
 if (location.href.toUpperCase().indexOf(cokk_plu_enfd.toUpperCase()) > -1) {    cokk_plu_idf="en";    }
 if (location.href.toUpperCase().indexOf(cokk_plsu_enfdd.toUpperCase()) > -1) {    cokk_plu_idf="en";    }


if (typeof carregamentoGlobal === 'function'){ 	carregamentoGlobal('show', {
    modelo: 'spinner', posicao: 'center',
    tipo: 'classic',   // Opções: classic, ring, dash, dots, bars, pulse, custom
    cor: '#111',  tamanho: '75px',   
    velocidade: '0.8s', arredondamento: '20px',
    fundoOpacity: 0.8,  
    autoDetect: true,
    mostrarPorcentagem: false, texto: ''
});   }


if (typeof criarMenuRetorno === 'function'){ 	
 var criarMenuRetorno_on=cokk_plu_idf;     var criarMddenuRetorno_on="";
 if(criarMenuRetorno_on=="pt"){   criarMenuRetorno_on="";   }
  if(criarMenuRetorno_on=="en"){   criarMddenuRetorno_on="-en";   }

criarMenuRetorno({
    idioma: cokk_plu_idf,
    fixo: false, novaAba: false,
    posicao: 'top-center',
    estaticoLarguraToda: true, alinhamento: 'center',arredondamento: '50px',
    negrito: true,    italico: false,    sublinhado: false,
    efeitoTransicao: true,
    urlPrincipal: 'https://fcasfs-of.cloud-fs.net/'+criarMenuRetorno_on,
    itens: [
      {  urlPrincipal: 'https://fcasfs-of.cloud-fs.net/'+criarMenuRetorno_on, negrito: true    },
      { texto: 'Documentação', idioma: 'pt', urlPrincipal: '/doc'+criarMddenuRetorno_on,  novaAba: false,  iconsvg: `<svg fill="currentColor" width="24px" height="24px" viewBox="-274.15 0 1200 1200" xmlns="http://www.w3.org/2000/svg" class="cf-icon-svg"><path d="M30 161c-16.5 0-30 13.5-30 30v827.8c0 16.5 13.5 30 30 30h591.7c16.5 0 30-13.5 30-30V343.7L469 161H30zm389.6 60v134.8c0 19.9 16.3 36.2 36.2 36.2h135.9v596.8H60V221h359.6z"/><path d="M123.8 768.6h394.8v50H123.8zm0-124.6h394.8v50H123.8zm0-124.5h394.8v50H123.8z"/><circle cx="194" cy="382.3" r="60"/></svg>` }
    ]
});
}



}


function injetarScriptHome(isHead) {
    var scriptHomeex = document.createElement('script');
    scriptHomeex.src = 'https://fcasfs-of.cloud-fs.net/core_k.js';
    scriptHomeex.onload = function() {
        if (typeof exe_check_load_fl === 'function') {
            exe_check_load_fl();
        }
    };
    var alvo = isHead 
        ? document.getElementsByTagName('head')[0] 
        : document.getElementsByTagName('body')[0];
    alvo.appendChild(scriptHomeex);
}


injetarScriptHome(false);



function injetarScriptHomeAA(isHead, exefl) {
    var scriptHomeex = document.createElement('script');
    scriptHomeex.src = 'core-a.js';
    scriptHomeex.onload = function() {
        if (typeof exefl === 'function') {
            exefl();
        }
    };
    var alvo = isHead 
        ? document.getElementsByTagName('head')[0] 
        : document.getElementsByTagName('body')[0];
    alvo.appendChild(scriptHomeex);
}



function get_themeforop(){  var dget_themeforop= document.body.classList.contains('dark');  return  dget_themeforop ? "escuro" : "claro";  }

injetarScriptHomeAA(false, function(){
var controleApiConfig;
fcasfs_lightbox_config_vincular({
  idBotao: 'meuBotaoConfig',
  idioma: cokk_plu_idf,
  tema: get_themeforop(),
  cliqueNoLabel: true,  posicao: 'centro',
  comTransicao: fcasfs_obter_booleano("remove_efect", false), 
  fechaAoClicarFora: fcasfs_obter_booleano("click_close", false),
  isFixo: true, 
  configItens: (typeof minhasOpcoes !== 'undefined') ? minhasOpcoes : [],
  onApiReady: function(api) {
    controleApiConfig = api;
    
  }
});
window.addEventListener('load', function(){ dispararCliquesAutomaticos([{ parametro: 'config', obterSeletor: function(valor) { if (valor && valor.trim() === 'true') { return '.lbxx-footer-container #meuBotaoConfig'; } return ''; } }]); });

});


