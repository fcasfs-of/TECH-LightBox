function fcas_lightbox_carregarERemoverScript(url, callback) { if (!url) return ''; var s = document.createElement('script'); s.src = url; s.onload = function() { if (typeof callback === 'function') callback(); s.parentNode.removeChild(s); }; document.head.appendChild(s); }

function fcas_lightbox_calcCRC() { let n = 0; for (let i = 0; i < 9; i++) n = n * 10 + Math.floor(Math.random() * 10); let t = n, s = 0; for (let i = 0; i < 9; i++) { s += (t % 10) * (2 + i); t = Math.floor(t / 10); } n = n * 10 + ((s * 10) % 11 % 10); t = n; s = 0; for (let i = 0; i < 10; i++) { s += (t % 10) * (2 + i); t = Math.floor(t / 10); } return n * 10 + ((s * 10) % 11 % 10); }
function fcas_lightbox_checkHash(h) { if (!h || h < 1e10 || h > 99999999999 || !Number.isInteger(h)) return false; let r = 0, m = h; for (let i = 0; i < 11; i++) { if (m % 10 === Math.floor(h / 1e10)) r++; m = Math.floor(m / 10); } if (r === 11) return false; let d2 = h % 10, d1 = Math.floor(h / 10) % 10, t = Math.floor(h / 100), s1 = 0, s2 = 0; for (let i = 0; i < 9; i++) { let d = t % 10; s1 += d * (2 + i); s2 += d * (3 + i); t = Math.floor(t / 10); } return s2 += d1 * 2, ((s1 * (13 - 3)) % (5 + 6) % (14 - 4)) === d1 && ((s2 * 10) % 11 % 10) === d2; }

function fcas_lightbox_processarTextos(t, o) { try { var i, r = '', c = ''; for(i=65;i<=122;i++) if(i<=90||i>=97) c+=String.fromCharCode(i); c+='0123456789-_'; if (!t || (o !== 'encode' && o !== 'decode')) return ''; if (o === 'encode') { for (i = 0; i < t.length; i++) { var v = t.charCodeAt(i); r += c.charAt((v >> 4) & 63) + c.charAt(v & 15); } } else { for (i = 0; i < t.length; i += 2) { r += String.fromCharCode((c.indexOf(t.charAt(i)) << 4) | c.indexOf(t.charAt(i + 1))); } } return r; } catch (e) { return ''; } }

function fcas_lightbox_obterToken() { const e = document.getElementById('fcasfs_script-lightbox-api'); return (e && (e.src.includes('lightbox.fcasfs-of.cloud-fs.net/app/api.js') || e.src.includes('fcasfs-of.cloud-fs.net/TECH-LightBox/app/api.js'))) ? (e.getAttribute('token') || '') : ''; }
function fcas_lightbox_oToken() { const e = document.getElementById('fcasfs_script-lightbox-api'); return (e && (e.src.includes('lightbox.fcasfs-of.cloud-fs.net/app/api.js') || e.src.includes('fcasfs-of.cloud-fs.net/TECH-LightBox/app/api.js'))) ? e.getAttribute('token') : (e && e.removeAttribute('token')); }

function fcas_lightbox_dcriptografar(t, o) { var i, r = '', c = ''; for(i=65;i<=122;i++) if(i<=90||i>=97) c+=String.fromCharCode(i); for(i=48;i<=57;i++) c+=String.fromCharCode(i); c+=String.fromCharCode(45)+String.fromCharCode(95); if (!t || (o !== 'encode' && o !== 'decode')) return ''; if (o === 'encode') { for (i = 0; i < t.length; i++) { var v = t.charCodeAt(i); r += c.charAt((v >> 4) & 63) + c.charAt(v & 15); } } else { for (i = 0; i < t.length; i += 2) { r += String.fromCharCode((c.indexOf(t.charAt(i)) << 4) | c.indexOf(t.charAt(i + 1))); } } return r; }
function fcas_lightbox_ddescriptografarEVerificar(t) { var h = window.location.hostname, r = fcas_lightbox_dcriptografar(t, 'decode'); return (!t || !h || !r) ? false : (r.includes(h) ? true : false); }

var fcas_lightbox_processarLdldddlff={};
var fcas_lightbox_processarLdd = function() { return fcasfs_lightbox_baseTk && fcas_lightbox_checkHash(Number(fcasfs_lightbox_baseTk)) ? true : false;  };

var fcas_lightbox_pvalidarAcessoCompleto = function(dfddf) { var fcasfs_lightbox_baseTksd = dfddf; if (!fcas_lightbox_processarLdldddlff || !fcasfs_lightbox_baseTksd || (fcas_lightbox_checkHash(Number(fcasfs_lightbox_baseTksd)) ? true : false) === false || !fcas_lightbox_processarLdldddlff[fcasfs_lightbox_baseTksd]) return false; return fcas_lightbox_ddescriptografarEVerificar(fcas_lightbox_processarLdldddlff[fcasfs_lightbox_baseTksd]); };
function fcas_lightbox_setAcesso(obje) {  if (obje) {  obje.enum=fcas_lightbox_obterToken() || "";  obje.check = fcas_lightbox_processarLd(obje.enum);   }  }

fcas_lightbox_carregarERemoverScript("https://fcasfs-of.github.io/TECH-LightBox/app/src_tks.js", function(){  fcas_lightbox_processarLdldddlff=fcas_lightbox_CaalUsre;  
 fcas_lightbox_pvalidarAcessoCompleto = function(dfddf) { var fcasfs_lightbox_baseTksd = dfddf; if (!fcas_lightbox_processarLdldddlff || !fcasfs_lightbox_baseTksd || (fcas_lightbox_checkHash(Number(fcasfs_lightbox_baseTksd)) ? true : false) === false || !fcas_lightbox_processarLdldddlff[fcasfs_lightbox_baseTksd]) return false; return fcas_lightbox_ddescriptografarEVerificar(fcas_lightbox_processarLdldddlff[fcasfs_lightbox_baseTksd]); };
 function fcas_lightbox_setAcesso(obje) {  if (obje) {  obje.enum=fcas_lightbox_obterToken() || "";  obje.check = fcas_lightbox_processarLd(obje.enum);   }  }
                                                                                                         
 });

function fcas_lightbox_processarLd(gf){  return fcas_lightbox_pvalidarAcessoCompleto(gf);  }

