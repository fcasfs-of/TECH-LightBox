
  document.getElementById('btnImage').addEventListener('click', function(){
fsmodal_open({
  id:"previ_box",
  scroll_hide:"yes",
  noclose:false,
  include:{
    player:"no"
  },
  content:{
    title:"Logo 1",
    type:"image",
    context:"https://fcasfs-of.cloud-fs.net/info-profile/logo/cover_b.png",
    size:"150",
    description:""
  }
});
  });

  document.getElementById('btnText').addEventListener('click',  function(){
  fsmodal_open({
  id:"previ_box",
  scroll_hide:"yes",
  noclose:false,
  include:{
    player:"no"
  },
  content:{
    title:"LightBox (Texto, Link, Vídeo, Imagem e Áudio)",
    type:"",
    context:"Lightbox é inovador que oferece uma experiência integrada para visualizar e interagir com textos, links, imagens, áudios e vídeos de forma intuitiva e moderna. <br/> Com uma interface limpa e responsiva, o aplicativo permite aos usuários explorar conteúdos multimídia de maneira eficiente, proporcionando uma navegação fluida e envolvente.",
    description:""
  }
});
  });

  document.getElementById('btnLink').addEventListener('click',  function(){
  fsmodal_open({
  id:"previ_box",
  scroll_hide:"yes",
  noclose:false,
  include:{
    player:"no"
  },
  content:{
    title:"Site",
    type:"link",
    context:"https://fcasfs-of.cloud-fs.net/",
    size:"250",
    description:"Oficial"
  }
});
  });

  document.getElementById('btnAudio').addEventListener('click',  function(){
 fsmodal_open({
  id:"previ_box",
  scroll_hide:"yes",
  noclose:false,
  include:{
    player:"yes"
  },
  content:{
    title:"Audio 1",
    type:"audio",
    context:"https://fcasfs-of.cloud-fs.net/info-profile/Files/intro1.mp4",
    poster:"https://fcasfs-of.cloud-fs.net/info-profile/Files/intro1.jpg",
    size:"250",
    description:""
  }
});
  });

  document.getElementById('btnVideo').addEventListener('click',  function(){
  fsmodal_open({
  id:"previ_box",
  scroll_hide:"yes",
  noclose:false,
  include:{
    player:"yes"
  },
  content:{
    title:"Video 1",
    type:"video",
    context:"https://fcasfs-of.cloud-fs.net/info-profile/Files/intro1.mp4",
    poster:"https://fcasfs-of.cloud-fs.net/info-profile/Files/intro1.jpg",
    size:"250",
    description:""
  }
}); 
  });


 
 
