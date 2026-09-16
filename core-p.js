function fcas_lightbox_gerarMenu(config){if(!config||typeof config!=='object'||!config.categorias)return;const nav=document.querySelector('.nav-menu');if(!nav)return;let sidebar=document.querySelector('.fcas-sidebar');let wrapper=document.querySelector('.fcas-parent-container');const lang=config.lang||navigator.language;const isPt=lang.startsWith('pt');if(!sidebar){sidebar=document.createElement('div');sidebar.className='fcas-sidebar';nav.parentNode.insertBefore(sidebar,nav);if(!document.getElementById('fcas-menu-styles')){const style=document.createElement('style');style.id='fcas-menu-styles';style.textContent='.fcas-parent-container{width:100%}.nav-menu{display:flex;flex-direction:column;gap:15px;width:100%}.fcas-sidebar{display:flex;flex-wrap:wrap;gap:10px;width:100%}.fcas-sidebar-item{padding:8px 16px;border:1px solid #ccc;background:#fff;color:#333;cursor:pointer;border-radius:4px}.fcas-divider{width:100%;height:1px;background:#eee;margin:15px 0}.cat-group{display:none;flex-direction:column;gap:10px;width:100%}.fcas-sidebar-item.active{opacity:.5;pointer-events:none;background:#ddd;color:#000}.dark .fcas-sidebar-item{background:transparent;color:#fff;border-color:#555}.dark .fcas-sidebar-item.active{background:#fff;color:#000;opacity:.7}.dark .fcas-divider{background:#444}.fcas-search-wrapper{width:100%;margin-bottom:15px;display:flex;flex-direction:column;gap:5px}.fcas-search-container{position:relative;width:100%;display:flex;align-items:center}.fcas-search-icon{position:absolute;left:10px;width:16px;height:16px;fill:#888;pointer-events:none}.fcas-search-input{width:100%;padding:10px 35px 10px 35px;border:1px solid #ccc;border-radius:4px;box-sizing:border-box}.fcas-search-clear{position:absolute;right:10px;background:none;border:none;padding:0;cursor:pointer;display:none;align-items:center;justify-content:center}.fcas-search-clear svg{width:16px;height:16px;fill:#888}.fcas-search-clear:hover svg{fill:#333}.fcas-search-results{font-size:14px;color:#666;min-height:20px}.dark .fcas-search-input{background:#222;color:#fff;border-color:#555}.dark .fcas-search-clear:hover svg{fill:#fff}.dark .fcas-search-results{color:#aaa}@media(min-width:768px){.fcas-parent-container{display:flex;align-items:stretch;max-width:100%}.nav-menu{width:75%}.fcas-sidebar{flex-direction:column;width:20%}.fcas-sidebar-item{width:100%;text-align:left}.fcas-divider{width:1px;height:auto;min-height:100%;margin:0 2%}}';document.head.appendChild(style);const divi=document.createElement('div');divi.className='fcas-divider';wrapper=document.createElement('div');wrapper.className='fcas-parent-container';nav.parentNode.insertBefore(wrapper,sidebar);wrapper.appendChild(sidebar);wrapper.appendChild(divi);wrapper.appendChild(nav)}}const searchWrapper=document.createElement('div');searchWrapper.className='fcas-search-wrapper';searchWrapper.innerHTML='<div class="fcas-search-container"><svg class="fcas-search-icon" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg><input type="text" class="fcas-search-input" placeholder="'+(isPt?'Buscar botões...':'Search buttons...')+'"><button class="fcas-search-clear" type="button"><svg viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg></button></div><div class="fcas-search-results"></div>';wrapper.parentNode.insertBefore(searchWrapper,wrapper);let htmlMenu='';let htmlSidebar='<button class="fcas-sidebar-item active" data-target="all">'+(isPt?'Todos':'All')+'</button>';config.categorias.forEach(function(grupo,index){if(grupo&&typeof grupo==='object'&&typeof grupo.nome==='string'&&Array.isArray(grupo.botoes)){const grupoId='fcas-grupo-'+index;const qtdBotoes=grupo.botoes.length;htmlMenu+='<div class="cat-group" id="'+grupoId+'"><h3>'+grupo.nome+' ('+qtdBotoes+')</h3>';grupo.botoes.forEach(function(b){if(b&&typeof b==='object'&&typeof b.id==='string'&&typeof b.texto==='string'){htmlMenu+='<button id="'+b.id+'">'+b.texto+'</button>'}});htmlMenu+='</div>';htmlSidebar+='<button class="fcas-sidebar-item" data-target="'+grupoId+'">'+grupo.nome+' ('+qtdBotoes+')</button>'}});nav.innerHTML=htmlMenu;sidebar.innerHTML=htmlSidebar;const searchInput=searchWrapper.querySelector('.fcas-search-input');const searchClear=searchWrapper.querySelector('.fcas-search-clear');const searchResults=searchWrapper.querySelector('.fcas-search-results');function filtrarBotoes(){const termo=searchInput.value.toLowerCase().trim();let totalEncontrado=0;searchClear.style.display=termo!==''?'flex':'none';nav.querySelectorAll('.cat-group').forEach(function(g){let botoesVisiveisNoGrupo=0;const botoes=g.querySelectorAll('button');botoes.forEach(function(b){const textoMatches=b.textContent.toLowerCase().includes(termo);if(textoMatches){b.style.display='';botoesVisiveisNoGrupo++;totalEncontrado++}else{b.style.display='none'}});const h3=g.querySelector('h3');if(botoesVisiveisNoGrupo===0&&termo!==''){g.style.display='none'}else{g.style.display='flex';if(h3)h3.style.display='block'}});if(termo===''){searchResults.textContent=''}else{if(isPt){searchResults.textContent=totalEncontrado===1?'1 item encontrado':totalEncontrado+' itens encontrados'}else{searchResults.textContent=totalEncontrado===1?'1 item found':totalEncontrado+' items found'}}}searchInput.addEventListener('input',filtrarBotoes);searchClear.addEventListener('click',function(){searchInput.value='';filtrarBotoes();searchInput.focus()});sidebar.addEventListener('click',function(e){const b=e.target.closest('.fcas-sidebar-item');if(!b)return;sidebar.querySelectorAll('.fcas-sidebar-item').forEach(btn=>btn.classList.remove('active'));b.classList.add('active');const t=b.getAttribute('data-target');if(t==='all'){searchWrapper.style.display='flex';filtrarBotoes()}else{searchWrapper.style.display='none';searchInput.value='';searchClear.style.display='none';searchResults.textContent=''}nav.querySelectorAll('.cat-group').forEach(function(g){const h3=g.querySelector('h3');if(t==='all'){if(h3)h3.style.display='block'}else{if(h3)h3.style.display='none';const deveExibir=(g.id===t);g.style.display=deveExibir?'flex':'none';g.querySelectorAll('button').forEach(btn=>btn.style.display='');if(deveExibir){g.scrollIntoView({behavior:'smooth',block:'start'})}}})});nav.querySelectorAll('.cat-group').forEach(g=>g.style.display='flex')}


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

  function openModal(contentOptions,obj) {
    fsmodal_open({
      id: "previ_box",
      tiptext: text_thnv,
      scroll_hide: "yes",
      noclose: false,
      remove_efect: fcasfs_obter_booleano("remove_efect", false),
      menu: fcasfs_obter_booleano("menu", true),
      click_close: fcasfs_obter_booleano("click_close", false),
      itens: obj,
      include: { player: contentOptions.includePlayer },
      content: {
        config: {
          Lang:"pt", action: "https://fcasfs-of.cloud-fs.net/projects-pt"
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



fcas_lightbox_gerarMenu({ lang: "pt", 
  categorias: [
    { nome: "Mídia Visual", botoes: [{ id: "btnImage", texto: "Visualizar Imagem" }, { id: "btnSVG", texto: "Visualizar SVG" }] },
    {"nome": "Publicação", "botoes": [{ "id": "btnBlogPost", "texto": "Visualizar Post de Blog" }] },
    { nome: "Galeria", botoes: [{ id: "btnSlideshow", texto: "Visualizar Slideshow" }, { id: "btnCarrossel", texto: "Visualizar Carrossel" }, { "id": "btnTimeline", "texto": "Visualizar Linha do tempo" }] },
    { nome: "Texto & Links", botoes: [{ id: "btnText", texto: "Visualizar Texto" }, { id: "btnLink", texto: "Visualizar Link" }] },
    { nome: "Dados", botoes: [{ id: "btnTable", texto: "Visualizar Tabela" }, { id: "btnList", texto: "Visualizar Lista" }] },
    { nome: "Multimídia", botoes: [{ id: "btnPlaylist", texto: "Visualizar Playlist" }, { id: "btnAudio", texto: "Visualizar Áudio" }, { id: "btnVideo", texto: "Visualizar Vídeo" }] },
    { nome: "Interação", botoes: [{ id: "btnForm", texto: "Visualizar Formulário" }] },
    { nome: "Análise", botoes: [{ id: "btnGrafic", texto: "Visualizar Gráfico" }, { id: "btnDashboard", texto: "Visualizar Dashboard" }] },
    { nome: "Documentos", botoes: [{ id: "btnPDF", texto: "Visualizar PDF" }] },
    { nome: "Localização", botoes: [{ id: "btnMap", texto: "Visualizar Mapa" }] },
    { nome: "Negócios", botoes: [{ id: "btnContact", texto: "Visualizar Contato" }, { id: "btnProduct", texto: "Visualizar Produto" }, { id: "btnPricePlan", texto: "Visualizar Plano de Preços" }] }
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
});


