let currentTheme = localStorage.getItem("LightBox_theme") || "light";

  document.body.classList.remove('dark');
    const isDark = document.body.classList.contains('dark');
if(currentTheme=="dark"){
    document.body.classList.add('dark');
    const isDark = document.body.classList.contains('dark');
}



window.createDL=function(arr){const dl=document.createElement('dl');arr.forEach(i=>{const dt=document.createElement('dt');dt.textContent=i[0]+"";const dd=document.createElement('dd');dd.textContent=" "+i[1];dl.appendChild(dt);dl.appendChild(dd);});return dl;};

function criarInstrucaoInstalacao(e,t){const n=document.querySelectorAll(e);if(!n.length)return;if(!document.getElementById("estilo-instalacao-lightbox")){const e=document.createElement("style");e.id="estilo-instalacao-lightbox",e.textContent='.instrucao-instalacao-box{margin-bottom: 22px;} .instrucao-instalacao-box p{ pointer-events: auto; user-select: auto; } .zinstrucao-instalacao-box{background-color:#f4f4f5;border:1px solid #e4e4e7;border-radius:8px;padding:16px;margin:15px 0;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;box-sizing:border-box;width:95%;margin:0 auto;margin-bottom: 22px;}.zinstrucao-instalacao-box h2{color:#18181b;font-size:16px;font-weight:600;margin:0 0 12px 0;line-height:1.4}.instrucao-instalacao-box p{background-color:#18181b;color:#4ade80;padding:12px;border-radius:6px;margin:0;overflow-x:auto;}@media(max-width:600px){.zinstrucao-instalacao-box h2{font-size:14px}.zinstrucao-instalacao-box p{font-size:12px;padding:10px}}',document.head.appendChild(e)}const a="en"===t?["token"," Accepts only numbers and, if valid, removes the LightBox watermark from the footer."]:["token"," Aceita apenas números e, se for válido, remove a marca d’água do LightBox no footer."];n.forEach((n=>{const o=document.createElement("div");o.className="instrucao-instalacao-box";const s=document.createElement("h2");s.textContent="en"===t?"Simply load the API script directly inside the <head> tag of your page:":"Basta carregar o script da API diretamente dentro da tag <head> da sua página:";const c=document.createElement("p");c.style.pointerEvents="auto",c.style.userSelect="auto",c.oncontextmenu=function(){return!0},c.textContent='<script src="https://lightbox.fcasfs-of.cloud-fs.net/app/api.js"><\/script>',o.appendChild(s),o.appendChild(c);const i=document.createElement("small");i.style.display="block",i.style.marginTop="8px",i.style.color="#666",i.innerHTML="en"===t?`Add the <strong>${a}</strong> right after ".js?token=" - ${a}`:`Adicione o <strong>${a}</strong> logo após ".js?token=" - ${a}`,o.appendChild(i),n.insertBefore(o,n.firstChild)}))}
