  // Função para alternar temas
  const toggleThemeBtn = document.getElementById('theme-toggle');
  toggleThemeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    const isDark = document.body.classList.contains('dark');
    toggleThemeBtn.textContent = isDark ? 'Light Mode' : 'Dark Mode';
  });


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
