function fcasfs_lightbox_def_icriarLinkr(c) { if (!c || !c.base || !c.app) return ""; let url = c.base + "/" + c.app + (c.folder ? "/" + c.folder : "") + (c.file ? "/" + c.file : ""); if (c.args && typeof c.args === "object") { let p = []; for (let k in c.args) { if (k && c.args[k] !== undefined && c.args[k] !== null && c.args[k] !== "") p.push(k + "=" + c.args[k]); } if (p.length > 0) url += "?" + p.join("&"); } return url; }

function fcafs_lightboc_cgerenciarUrlParam(action, key, val) {
  const p = new URLSearchParams(window.location.search);
  
  if (action === 'get' || action === 'pegar') return Array.isArray(key) ? key.map(k => (p.get(k) || '').includes('http') ? decodeURIComponent(p.get(k)) : p.get(k) || '') : (p.get(key) || '').includes('http') ? decodeURIComponent(p.get(key)) : p.get(key) || '';
  if (action === 'getAll' || action === 'pegarTudo') return p.toString();
  if (action === 'has' || action === 'tem') return p.has(key);
  if (action === 'set' || action === 'definir') return Array.isArray(key) && Array.isArray(val) ? key.forEach((k, i) => val[i] !== undefined && val[i] !== null && val[i] !== '' ? p.set(k, val[i]) : p.delete(k)) : (val !== undefined && val !== null && val !== '' ? p.set(key, val) : p.delete(key));
  if (action === 'del' || action === 'deletar') return Array.isArray(key) ? key.forEach(k => p.delete(k)) : p.delete(key);
  if (action === 'toggle' || action === 'alternar') return p.set(key, p.get(key) === 'true' ? 'false' : 'true');
  if (action === 'increment' || action === 'incrementar') return p.set(key, (parseInt(p.get(key), 10) || 0) + 1);
  if (action === 'append' || action === 'adicionar') return Array.isArray(val) ? val.forEach(v => v !== undefined && v !== null && v !== '' && p.append(key, v)) : (val !== undefined && val !== null && val !== '' && p.append(key, val));
}


