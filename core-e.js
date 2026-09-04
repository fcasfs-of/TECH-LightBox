let currentTheme = localStorage.getItem("LightBox_theme") || "light";


  const toggleThemeBtn = document.getElementById('theme-toggle');
  toggleThemeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    const isDark = document.body.classList.contains('dark');
    toggleThemeBtn.textContent = isDark ? 'Light Mode' : 'Dark Mode';
    currentTheme = isDark ? "dark" : "light";
    localStorage.setItem("LightBox_theme", currentTheme);
  });


  document.body.classList.remove('dark');
    const isDark = document.body.classList.contains('dark');
    toggleThemeBtn.textContent = isDark ? 'Light Mode' : 'Dark Mode';
if(currentTheme=="dark"){
    document.body.classList.add('dark');
    const isDark = document.body.classList.contains('dark');
    toggleThemeBtn.textContent = isDark ? 'Light Mode' : 'Dark Mode';
}


  const text_thnv = "Close";


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
        config: {  },
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
  'btnCarrossel': function() {
    return {
      title: "Carousel",
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
      context: "Lightbox is an innovative app that offers an integrated experience for viewing and interacting with text, carousel, Playlist, list, graphic, links, Table, SVG, images, audio, and videos in an intuitive and modern way. <br/> With a clean and responsive interface, the app allows users to explore multimedia content efficiently, providing fluid and engaging navigation.",
      size: "250",
      includePlayer: "no",
      description: "(Text, Playlist, Link, SVG, Carousel, Graphic, Table, List, Video, Image and Audio)"
    };
  },
  'btnTable': function() {
    return {
      title: "Table",
      type: "table",
      context:[   {     App: typeof document !== "undefined" ? document.title : "",     Version: typeof app_2ver !== "undefined" ? app_2ver : "",     Link: typeof location !== "undefined" ? location.href : ""  }],
      size: "250",
      includePlayer: "no",
      description: ""
    };
  },
  'btnList': function() {
    return {
      title: "List",
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
      size: "250",
      includePlayer: "yes",
      description: ""
    };
  },
  'btnLink': function() {
    return {
      title: "WebSite",
      type: "link",
      context: "https://lightbox.fcasfs-of.cloud-fs.net/en",
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
      size: "250",
      includePlayer: "yes",
      description: ""
    };
  },
  'btnPDF': function() {
    return {
      title: "PDF",
      type: "pdf",
      context:"https://fcasfs-of.cloud-fs.net/docs/tech-player-en.pdf",
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
      title: "Graphic",
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



modaisDisponiveis.forEach(function(idBotao) {
  var elemento = document.getElementById(idBotao);
  if (elemento) {
    elemento.addEventListener('click', function(evento) {
      var identificador = idBotao; 
      if (modaisDisponiveis[identificador] && typeof modaisDisponiveis[identificador] === 'function') {
        openModal(modaisDisponiveis[identificador](), evento);
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
 var criarMenuRetorno_on=cokk_plu_idf;
 if(criarMenuRetorno_on=="pt"){   criarMenuRetorno_on="";   }
 
criarMenuRetorno({
    idioma: cokk_plu_idf,
    fixo: false, novaAba: false,
    posicao: 'top-center',
    estaticoLarguraToda: true, alinhamento: 'center',arredondamento: '50px',
    negrito: true,    italico: false,    sublinhado: false,
    efeitoTransicao: true,
    urlPrincipal: 'https://fcasfs-of.cloud-fs.net/'+criarMenuRetorno_on
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
  cliqueNoLabel: true, posicao: 'centro',
  comTransicao: fcasfs_obter_booleano("remove_efect", false), 
  fechaAoClicarFora: fcasfs_obter_booleano("click_close", false),
  isFixo: true, 
  configItens: (typeof minhasOpcoes !== 'undefined') ? minhasOpcoes : [],
  onApiReady: function(api) {
    controleApiConfig = api;
    
  }
});
});


