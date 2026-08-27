let currentTheme = localStorage.getItem("LightBox_theme") || "light";


// Função para alternar temas
  const toggleThemeBtn = document.getElementById('theme-toggle');
  toggleThemeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    const isDark = document.body.classList.contains('dark');
    toggleThemeBtn.textContent = isDark 'Light Mode' : 'Dark Mode';
    
    localStorage.setItem("LightBox_theme", isDark ? "dark" ? "light" : "dark");
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

  function openModal(contentOptions,obj) {
    fsmodal_open({
      id: "previ_box",
      tiptext: text_thnv,
      scroll_hide: "yes",
      noclose: false,
      menu: true,
      itens: obj,      
      include: { player: contentOptions.includePlayer },
      content: {
        title: contentOptions.title,
        type: contentOptions.type,
        context: contentOptions.context,
        poster: contentOptions.poster,
        size: contentOptions.size,
        description: contentOptions.description,
      }
    });
  }

  document.getElementById('btnImage').addEventListener('click', (e) => {
    openModal({
      title: "Logo 1",
      type: "image",
      context: "https://fcasfs-of.cloud-fs.net/info-profile/logo/cover_b.png",
      size: "150",
      includePlayer: "no",
      description: ""
    },e);
  });

  document.getElementById('btnText').addEventListener('click', (e) => {
    openModal({
      title: "LightBox",
      type: "",
      context: "Lightbox is an innovative app that offers an integrated experience for viewing and interacting with text, links, images, audio, and videos in an intuitive and modern way. <br/> With a clean and responsive interface, the app allows users to explore multimedia content efficiently, providing fluid and engaging navigation.",
      size: "250",
      includePlayer: "no",
      description: "(Text, Link, Video, Image and Audio)"
    },e);
  });

  document.getElementById('btnLink').addEventListener('click', (e) => {
    openModal({
      title: "WebSite",
      type: "link",
      context: "https://lightbox.fcasfs-of.cloud-fs.net/en",
      size: "250",
      includePlayer: "no",
      description: "Oficial"
    },e);
  });

  document.getElementById('btnAudio').addEventListener('click', (e) => {
    openModal({
      title: "Audio 1",
      type: "audio",
      context: "https://fcasfs-of.cloud-fs.net/info-profile/Files/intro1.mp4",
      poster: "https://fcasfs-of.cloud-fs.net/info-profile/Files/intro1.jpg",
      size: "250",
      includePlayer: "yes",
      description: ""
    },e);
  });

  document.getElementById('btnVideo').addEventListener('click', (e) => {
    openModal({
      title: "Video 1",
      type: "video",
      context: "https://fcasfs-of.cloud-fs.net/info-profile/Files/intro1.mp4",
      poster: "https://fcasfs-of.cloud-fs.net/info-profile/Files/intro1.jpg",
      size: "250",
      includePlayer: "yes",
      description: ""
    },e);
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




