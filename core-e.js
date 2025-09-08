
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
    title:"LightBox",
    type:"",
    context:"Lightbox is an innovative app that offers an integrated experience for viewing and interacting with text, links, images, audio, and videos in an intuitive and modern way. <br/> With a clean and responsive interface, the app allows users to explore multimedia content efficiently, providing fluid and engaging navigation.",
    description:"(Text, Link, Video, Image and Audio)"
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
    title:"WebSite",
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


 
 
