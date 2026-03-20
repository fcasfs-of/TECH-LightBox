  // Função para alternar temas
  const toggleThemeBtn = document.getElementById('theme-toggle');
  toggleThemeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    const isDark = document.body.classList.contains('dark');
    toggleThemeBtn.textContent = isDark ? 'Modo Claro' : 'Modo Escuro';
  });


  const text_thnv = "Fechar";

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
      context: "Lightbox é inovador que oferece uma experiência integrada para visualizar e interagir com textos, links, imagens, áudios e vídeos de forma intuitiva e moderna. <br/> Com uma interface limpa e responsiva, o aplicativo permite aos usuários explorar conteúdos multimídia de maneira eficiente, proporcionando uma navegação fluida e envolvente.",
      size: "250",
      includePlayer: "no",
      description: "(Texto, Link, Vídeo, Imagem e Áudio)"
    },e);
  });

  document.getElementById('btnLink').addEventListener('click', (e) => {
    openModal({
      title: "Site",
      type: "link",
      context: "https://lightbox.fcasfs-of.cloud-fs.net/",
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
