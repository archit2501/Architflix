// Config
const CONFIG = {
  name: 'Archit Jain',
  email: 'architjain2501@gmail.com',
  githubUser: 'archit2501',
  linkedIn: 'https://www.linkedin.com/in/architjain01/',
  // Pinned repo queries (searched within the user GitHub). Edit names to fit your repos.
  pinnedQueries: [
    'ai outfit recommender',
    'ai resume shortlisting tool',
    'smart blog ai'
  ]
};

// Theme toggle with persistence
const root = document.documentElement;
const themeToggle = () => {
  const current = localStorage.getItem('theme') || 'auto';
  const next = current === 'dark' ? 'light' : current === 'light' ? 'auto' : 'dark';
  setTheme(next);
};
function setTheme(mode){
  root.classList.remove('light','dark');
  if(mode === 'dark') root.classList.add('dark');
  if(mode === 'light') root.classList.add('light');
  localStorage.setItem('theme', mode);
  const btn = document.getElementById('theme-toggle');
  if(btn){
    btn.textContent = mode === 'dark' ? '🌞' : mode === 'light' ? '🌓' : '🌙';
    btn.setAttribute('aria-pressed', mode === 'dark');
    btn.setAttribute('title', `Theme: ${mode}`);
  }
}
(function initTheme(){
  setTheme(localStorage.getItem('theme') || 'auto');
})();

window.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('theme-toggle');
  if(btn) btn.addEventListener('click', themeToggle);
  // year
  const y = document.getElementById('year');
  if(y) y.textContent = new Date().getFullYear();

  // smooth focus for skip link
  const main = document.getElementById('main');
  const skip = document.querySelector('.skip-link');
  if(skip && main){
    skip.addEventListener('click', () => main.focus());
  }

  // Intersection Observer reveal
  const io = new IntersectionObserver((entries)=>{
    for(const e of entries){
      if(e.isIntersecting){
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    }
  }, {threshold: .08});
  document.querySelectorAll('.section, .card').forEach(el=>{
    el.classList.add('reveal');
    io.observe(el);
  });

  // Fetch projects
  loadProjects().catch(console.error);
});

async function loadProjects(){
  const grid = document.getElementById('project-grid');
  if(!grid) return;
  grid.innerHTML = '<p class="meta">Loading selected repositories…</p>';
  try{
    const pinned = await loadPinnedRepos(CONFIG.pinnedQueries || []);
    if(pinned && pinned.length){
      pinned.sort((a,b)=> getUpdatedDate(b) - getUpdatedDate(a));
      grid.innerHTML = pinned.map(r => renderRepoCard(r)).join('');
      return;
    }
    grid.innerHTML = '<p class="meta">No repositories matched the selected project names.</p>';
  }catch(err){
    grid.innerHTML = `<p class="meta">Could not load repositories. ${err.message}</p>`;
  }
}

function renderRepoCard(r){
  const topics = (r.topics || []).slice(0,3).map(t=>`<span class="tag">${t}</span>`).join(' ');
  const homepage = r.homepage && r.homepage.trim() ? `<a href="${r.homepage}" target="_blank" rel="noopener">Live</a>` : '';
  return `
    <article class="card" aria-labelledby="repo-${r.name}">
      <h3 id="repo-${r.name}"><a href="${r.html_url}" target="_blank" rel="noopener">${r.name}</a></h3>
      <p>${r.description ?? 'No description provided.'}</p>
      <p class="meta">${r.language ?? ''} • ★ ${r.stargazers_count ?? 0} • Updated ${new Intl.DateTimeFormat(undefined,{dateStyle:'medium'}).format(new Date(r.pushed_at || r.updated_at || r.created_at))}</p>
      <div class="meta">${topics}</div>
      <div style="margin-top:auto;display:flex;gap:.6rem;flex-wrap:wrap">
        <a href="${r.html_url}" target="_blank" rel="noopener">Source</a>
        ${homepage}
      </div>
    </article>`;
}

// Helpers
async function loadPinnedRepos(queries){
  const results = [];
  for(const q of queries){
    const repo = await searchBestRepo(q, CONFIG.githubUser);
    if(repo) results.push(repo);
  }
  // de-dup by id
  const map = new Map();
  for(const r of results){
    if(!map.has(r.id)) map.set(r.id, r);
  }
  return Array.from(map.values());
}

async function searchBestRepo(query, user){
  const url = new URL('https://api.github.com/search/repositories');
  // search in name with user qualifier; allow partial/fuzzy
  url.searchParams.set('q', `${query} user:${user} in:name`);
  url.searchParams.set('per_page', '5');
  const res = await fetch(url.toString(), {
    headers: {
      'Accept': 'application/vnd.github+json'
    }
  });
  if(!res.ok) return null;
  const data = await res.json();
  const items = Array.isArray(data.items) ? data.items : [];
  if(items.length === 0) return null;
  // Prefer exact-ish name match, then by updated date
  const normalized = (s) => String(s || '').toLowerCase().replace(/[^a-z0-9]+/g,'');
  const nq = normalized(query);
  items.sort((a,b)=>{
    const an = normalized(a.name);
    const bn = normalized(b.name);
    const ae = an.includes(nq) ? 1 : 0;
    const be = bn.includes(nq) ? 1 : 0;
    if(ae !== be) return be - ae;
    return new Date(b.updated_at) - new Date(a.updated_at);
  });
  const best = items[0];
  // fetch full repo to include topics/homepage
  try{
    const fullRes = await fetch(best.url, { headers: { 'Accept': 'application/vnd.github+json' } });
    if(fullRes.ok){
      return await fullRes.json();
    }
  }catch{ /* ignore */ }
  return best; // fallback to search item shape
}

function getUpdatedDate(r){
  return new Date(r.pushed_at || r.updated_at || r.created_at || 0);
}
