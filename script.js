const stories = [
  { name: "Bia Nunes", role: "Copywriter", initials: "BN", bg: "linear-gradient(145deg,#2b2047,#ff4d8d)", accent: "#ff4d8d" },
  { name: "Studio Norte", role: "Design", initials: "SN", bg: "linear-gradient(145deg,#183644,#31d8ff)", accent: "#31d8ff" },
  { name: "Caio Vidal", role: "Direção", initials: "CV", bg: "linear-gradient(145deg,#3b241c,#ff9b52)", accent: "#ff9b52" },
  { name: "Muda Lab", role: "Estratégia", initials: "ML", bg: "linear-gradient(145deg,#283719,#c8ff55)", accent: "#c8ff55" },
  { name: "Luiza Reis", role: "Motion", initials: "LR", bg: "linear-gradient(145deg,#312041,#8f6cff)", accent: "#8f6cff" },
  { name: "Dobra", role: "Agência", initials: "DB", bg: "linear-gradient(145deg,#44201f,#ff5e57)", accent: "#ff5e57" },
  { name: "Nina Melo", role: "Conteúdo", initials: "NM", bg: "linear-gradient(145deg,#1b3141,#66e0ff)", accent: "#66e0ff" }
];

const trends = [
  { title: "#BrandExperience", posts: "1.248 campanhas", growth: "+38%" },
  { title: "Filmes de 6 segundos", posts: "836 campanhas", growth: "+24%" },
  { title: "Design com IA", posts: "712 campanhas", growth: "+19%" },
  { title: "Rebranding brasileiro", posts: "489 campanhas", growth: "+16%" },
  { title: "Mídia fora da tela", posts: "361 campanhas", growth: "+12%" }
];

const creators = [
  { name: "Pedro Ramos", role: "Creative strategist", initials: "PR", color: "linear-gradient(135deg,#ff845f,#ff4d8d)" },
  { name: "Amanda Kim", role: "Art director", initials: "AK", color: "linear-gradient(135deg,#31d8ff,#3768ff)" },
  { name: "Casa 22", role: "Estúdio independente", initials: "C2", color: "linear-gradient(135deg,#c8ff55,#46c178)" },
  { name: "Renan Dias", role: "Motion designer", initials: "RD", color: "linear-gradient(135deg,#8f6cff,#e95cff)" }
];

const starterCampaigns = [
  {
    id: 1,
    author: "Lume Creative",
    handle: "@lumecreative · 18 min",
    initials: "LC",
    avatar: "linear-gradient(135deg,#ff4d8d,#ff9b52)",
    brand: "Viva Energia",
    category: "Branding",
    title: "Energia que muda o ritmo",
    description: "Uma identidade mutante criada para acompanhar diferentes estados de energia — do primeiro gole ao último beat da noite.",
    art: "aurora",
    posterTitle: "MUDA\nO RITMO",
    posterEyebrow: "VIVA ENERGIA — BRAND WORLD",
    likes: 428,
    comments: 36,
    saves: 91,
    award: "Destaque do dia"
  },
  {
    id: 2,
    author: "Estúdio Intervalo",
    handle: "@intervalo.studio · 1 h",
    initials: "EI",
    avatar: "linear-gradient(135deg,#c8ff55,#29c984)",
    brand: "Fluxo",
    category: "Digital",
    title: "Um banco para quem não para",
    description: "Sistema digital, campanha e linguagem visual baseados no movimento real de quem empreende todos os dias.",
    art: "flux",
    posterTitle: "NÃO\nPARA.",
    posterEyebrow: "FLUXO — OPEN FOR BUSINESS",
    likes: 322,
    comments: 28,
    saves: 74,
    award: null
  },
  {
    id: 3,
    author: "Norte Filmes",
    handle: "@nortefilmes · 3 h",
    initials: "NF",
    avatar: "linear-gradient(135deg,#31d8ff,#8f6cff)",
    brand: "Soma Music",
    category: "Filme",
    title: "O som que existe antes do play",
    description: "Filme-manifesto que transforma silêncio, expectativa e pequenos ruídos em uma narrativa sobre conexão.",
    art: "pulse",
    posterTitle: "FEEL\nTHE\nPULSE",
    posterEyebrow: "SOMA MUSIC — BRAND FILM 01:20",
    likes: 917,
    comments: 84,
    saves: 214,
    award: "Staff pick"
  },
  {
    id: 4,
    author: "Dobra Ideias",
    handle: "@dobraideias · ontem",
    initials: "DI",
    avatar: "linear-gradient(135deg,#2759ff,#31d8ff)",
    brand: "Museu Aberto",
    category: "OOH",
    title: "A cidade inteira como galeria",
    description: "Uma ocupação urbana em 27 pontos da cidade, conectando arte local, dados e participação do público.",
    art: "cobalt",
    posterTitle: "A RUA\nÉ A\nOBRA",
    posterEyebrow: "MUSEU ABERTO — OOH EXPERIENCE",
    likes: 581,
    comments: 47,
    saves: 126,
    award: null
  },
  {
    id: 5,
    author: "Casa Amarela",
    handle: "@casaamarela · 2 dias",
    initials: "CA",
    avatar: "linear-gradient(135deg,#f3efe9,#ff4d8d)",
    brand: "Nativa",
    category: "Social",
    title: "Quando o produto vira conversa",
    description: "Uma plataforma social cocriada com a comunidade para transformar lançamentos em pautas culturais contínuas.",
    art: "mono",
    posterTitle: "FALA\nCOM A\nGENTE",
    posterEyebrow: "NATIVA — SOCIAL PLATFORM",
    likes: 266,
    comments: 31,
    saves: 67,
    award: null
  },
  {
    id: 6,
    author: "Coletivo Horizonte",
    handle: "@horizonte.co · 4 dias",
    initials: "CH",
    avatar: "linear-gradient(135deg,#ff9b52,#8f6cff)",
    brand: "Solara",
    category: "Experiência",
    title: "Um pôr do sol que continua depois",
    description: "Instalação sensorial que combina luz, música e memória afetiva para apresentar a nova coleção da marca.",
    art: "sunset",
    posterTitle: "FICA\nMAIS\nUM POUCO",
    posterEyebrow: "SOLARA — LIVE EXPERIENCE",
    likes: 734,
    comments: 55,
    saves: 169,
    award: "Mais salvo"
  }
];

const artOptions = [
  { key: "aurora", bg: "linear-gradient(135deg,#ff516e,#ffd052)", accent: "#a568ff" },
  { key: "flux", bg: "#bfff45", accent: "#181422" },
  { key: "pulse", bg: "linear-gradient(135deg,#332555,#ff4d8d)", accent: "#31d8ff" },
  { key: "cobalt", bg: "#2759ff", accent: "#ff4d8d" },
  { key: "mono", bg: "#f2efe9", accent: "#15131b" },
  { key: "sunset", bg: "linear-gradient(135deg,#ff7d45,#6b45ff)", accent: "#ffe760" }
];

let campaigns = [...starterCampaigns];
let activeCategory = "Todos";
let searchTerm = "";

const storyRow = document.querySelector("#storyRow");
const campaignList = document.querySelector("#campaignList");
const trendList = document.querySelector("#trendList");
const creatorList = document.querySelector("#creatorList");
const emptyState = document.querySelector("#emptyState");
const toast = document.querySelector("#toast");
const publishModal = document.querySelector("#publishModal");
const publishForm = document.querySelector("#publishForm");
const artPicker = document.querySelector("#artPicker");
const sidebar = document.querySelector("#sidebar");
const sidebarOverlay = document.querySelector("#sidebarOverlay");

function formatNumber(value) {
  if (value >= 1000) return `${(value / 1000).toFixed(value >= 10000 ? 0 : 1).replace(".", ",")}k`;
  return value;
}

function icon(name) {
  const icons = {
    heart: '<svg viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78Z"/></svg>',
    comment: '<svg viewBox="0 0 24 24"><path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4Z"/></svg>',
    save: '<svg viewBox="0 0 24 24"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2Z"/></svg>',
    share: '<svg viewBox="0 0 24 24"><path d="M4 12v8a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-8M16 6l-4-4-4 4M12 2v13"/></svg>'
  };
  return icons[name];
}

function renderStories() {
  storyRow.innerHTML = stories.map(story => `
    <article class="story-card" style="--story-bg:${story.bg};--story-accent:${story.accent}">
      <div class="story-shape"></div>
      <div class="story-avatar">${story.initials}</div>
      <div class="story-copy"><strong>${story.name}</strong><small>${story.role}</small></div>
    </article>
  `).join("");
}

function campaignTemplate(campaign) {
  return `
    <article class="campaign-card" data-id="${campaign.id}">
      <div class="campaign-topline">
        <div class="campaign-author">
          <span class="avatar" style="background:${campaign.avatar}">${campaign.initials}</span>
          <div class="author-copy">
            <strong>${campaign.author} <span class="verified">✓</span></strong>
            <span>${campaign.handle}</span>
          </div>
        </div>
        <button class="follow-button" data-follow>Seguir</button>
        <button class="more-button" aria-label="Mais opções">•••</button>
      </div>
      <div class="campaign-art art-${campaign.art}">
        <div class="poster-noise"></div>
        <span class="poster-eyebrow">${campaign.posterEyebrow}</span>
        <strong class="poster-title">${campaign.posterTitle}</strong>
        <span class="poster-stamp">CRIVELA<br>SELECTED<br>2026</span>
        <i class="poster-shape one"></i><i class="poster-shape two"></i><i class="poster-shape three"></i>
      </div>
      <div class="campaign-content">
        <div class="campaign-meta">
          <span class="category-tag">${campaign.category}</span>
          ${campaign.award ? `<span class="award-tag">✦ ${campaign.award}</span>` : ""}
        </div>
        <h3>${campaign.title} — ${campaign.brand}</h3>
        <p>${campaign.description}</p>
      </div>
      <div class="campaign-footer">
        <button class="engagement-button like" data-action="like" aria-label="Curtir">${icon("heart")}<span>${formatNumber(campaign.likes)}</span></button>
        <button class="engagement-button" aria-label="Comentários">${icon("comment")}<span>${formatNumber(campaign.comments)}</span></button>
        <button class="engagement-button save" data-action="save" aria-label="Salvar">${icon("save")}<span>${formatNumber(campaign.saves)}</span></button>
        <button class="engagement-button share" data-action="share" aria-label="Compartilhar">${icon("share")}</button>
      </div>
    </article>
  `;
}

function renderCampaigns() {
  const normalizedSearch = searchTerm.trim().toLowerCase();
  const filtered = campaigns.filter(campaign => {
    const matchesCategory = activeCategory === "Todos" || campaign.category === activeCategory;
    const haystack = `${campaign.title} ${campaign.brand} ${campaign.author} ${campaign.category} ${campaign.description}`.toLowerCase();
    return matchesCategory && haystack.includes(normalizedSearch);
  });

  campaignList.innerHTML = filtered.map(campaignTemplate).join("");
  emptyState.hidden = filtered.length > 0;
}

function renderTrends() {
  trendList.innerHTML = trends.map((trend, index) => `
    <div class="trend-item">
      <span class="trend-rank">0${index + 1}</span>
      <div class="trend-copy"><strong>${trend.title}</strong><small>${trend.posts}</small></div>
      <span class="trend-growth">${trend.growth}</span>
    </div>
  `).join("");
}

function renderCreators() {
  creatorList.innerHTML = creators.map(creator => `
    <div class="creator-item">
      <span class="avatar" style="background:${creator.color}">${creator.initials}</span>
      <div class="creator-info"><strong>${creator.name}</strong><small>${creator.role}</small></div>
      <button data-creator-follow aria-label="Seguir ${creator.name}">+</button>
    </div>
  `).join("");
}

function renderArtPicker() {
  artPicker.innerHTML = artOptions.map((option, index) => `
    <button type="button" class="art-option ${index === 0 ? "active" : ""}" data-art="${option.key}" style="--option-bg:${option.bg};--option-accent:${option.accent}" aria-label="Estilo ${option.key}"></button>
  `).join("");
}

function showToast(message) {
  toast.querySelector("p").textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast.timeout);
  showToast.timeout = setTimeout(() => toast.classList.remove("show"), 3000);
}

function openModal() {
  publishModal.classList.add("open");
  publishModal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  setTimeout(() => publishForm.elements.title.focus(), 200);
}

function closeModal() {
  publishModal.classList.remove("open");
  publishModal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

function closeSidebar() {
  sidebar.classList.remove("open");
  sidebarOverlay.classList.remove("open");
}

renderStories();
renderCampaigns();
renderTrends();
renderCreators();
renderArtPicker();

document.querySelectorAll("#openPublishModal, #heroPublishButton, #mobilePublishButton").forEach(button => button.addEventListener("click", openModal));
document.querySelectorAll("#closePublishModal, #cancelPublish").forEach(button => button.addEventListener("click", closeModal));
publishModal.addEventListener("click", event => { if (event.target === publishModal) closeModal(); });
document.addEventListener("keydown", event => {
  if (event.key === "Escape") closeModal();
  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
    event.preventDefault();
    document.querySelector("#globalSearch").focus();
  }
});

document.querySelector("#filterBar").addEventListener("click", event => {
  const chip = event.target.closest("[data-category]");
  if (!chip) return;
  document.querySelectorAll(".filter-chip").forEach(item => item.classList.remove("active"));
  chip.classList.add("active");
  activeCategory = chip.dataset.category;
  renderCampaigns();
});

document.querySelector("#globalSearch").addEventListener("input", event => {
  searchTerm = event.target.value;
  renderCampaigns();
});

document.querySelector(".view-switch").addEventListener("click", event => {
  const button = event.target.closest("button[data-view]");
  if (!button) return;
  document.querySelectorAll(".view-switch button").forEach(item => item.classList.remove("active"));
  button.classList.add("active");
  campaignList.classList.toggle("grid-view", button.dataset.view === "grid");
});

campaignList.addEventListener("click", event => {
  const card = event.target.closest(".campaign-card");
  if (!card) return;
  const campaign = campaigns.find(item => item.id === Number(card.dataset.id));

  const actionButton = event.target.closest("[data-action]");
  if (actionButton) {
    const action = actionButton.dataset.action;
    if (action === "like") {
      const isActive = actionButton.classList.toggle("active");
      campaign.likes += isActive ? 1 : -1;
      actionButton.querySelector("span").textContent = formatNumber(campaign.likes);
    }
    if (action === "save") {
      const isActive = actionButton.classList.toggle("active");
      campaign.saves += isActive ? 1 : -1;
      actionButton.querySelector("span").textContent = formatNumber(campaign.saves);
      showToast(isActive ? "Campanha salva na sua coleção." : "Campanha removida dos salvos.");
    }
    if (action === "share") {
      const shareText = `${campaign.title} — ${campaign.brand}`;
      if (navigator.share) navigator.share({ title: shareText, text: campaign.description }).catch(() => {});
      else navigator.clipboard?.writeText(shareText).then(() => showToast("Título da campanha copiado."));
    }
  }

  const followButton = event.target.closest("[data-follow]");
  if (followButton) {
    const following = followButton.classList.toggle("is-following");
    followButton.textContent = following ? "Seguindo" : "Seguir";
    showToast(following ? `Agora você segue ${campaign.author}.` : `Você deixou de seguir ${campaign.author}.`);
  }
});

creatorList.addEventListener("click", event => {
  const button = event.target.closest("[data-creator-follow]");
  if (!button) return;
  const following = button.classList.toggle("following");
  button.textContent = following ? "✓" : "+";
});

artPicker.addEventListener("click", event => {
  const option = event.target.closest("[data-art]");
  if (!option) return;
  document.querySelectorAll(".art-option").forEach(item => item.classList.remove("active"));
  option.classList.add("active");
  publishForm.elements.art.value = option.dataset.art;
});

publishForm.addEventListener("submit", event => {
  event.preventDefault();
  const data = new FormData(publishForm);
  const title = data.get("title").trim();
  const brand = data.get("brand").trim();
  const category = data.get("category");
  const description = data.get("description").trim();
  const art = data.get("art");

  const words = title.toUpperCase().split(" ");
  const splitIndex = Math.ceil(words.length / 2);
  const posterTitle = `${words.slice(0, splitIndex).join(" ")}\n${words.slice(splitIndex).join(" ") || "AGORA"}`;

  campaigns.unshift({
    id: Date.now(),
    author: "Marina Costa",
    handle: "@marinacosta · agora",
    initials: "MC",
    avatar: "linear-gradient(135deg,#a580ff,#5a3ed2)",
    brand,
    category,
    title,
    description,
    art,
    posterTitle,
    posterEyebrow: `${brand.toUpperCase()} — NOVA CAMPANHA`,
    likes: 0,
    comments: 0,
    saves: 0,
    award: "Recém-publicada"
  });

  activeCategory = "Todos";
  searchTerm = "";
  document.querySelector("#globalSearch").value = "";
  document.querySelectorAll(".filter-chip").forEach(item => item.classList.toggle("active", item.dataset.category === "Todos"));
  renderCampaigns();
  publishForm.reset();
  publishForm.elements.art.value = "aurora";
  document.querySelectorAll(".art-option").forEach((item, index) => item.classList.toggle("active", index === 0));
  closeModal();
  document.querySelector("#campaignFeed").scrollIntoView({ behavior: "smooth" });
  showToast("Sua campanha foi publicada no feed.");
});

document.querySelector("#scrollToFeed").addEventListener("click", () => document.querySelector("#campaignFeed").scrollIntoView({ behavior: "smooth" }));
document.querySelector("#briefButton").addEventListener("click", () => showToast("Você entrou no Brief da Semana."));

document.querySelector("#newsletterForm").addEventListener("submit", event => {
  event.preventDefault();
  event.currentTarget.reset();
  showToast("Assinatura confirmada. Repertório a caminho!");
});

document.querySelector("#menuButton").addEventListener("click", () => {
  sidebar.classList.add("open");
  sidebarOverlay.classList.add("open");
});
sidebarOverlay.addEventListener("click", closeSidebar);

// Pequeno efeito de profundidade no hero, apenas em telas com mouse.
const hero = document.querySelector(".hero-card");
if (window.matchMedia("(pointer: fine)").matches) {
  hero.addEventListener("mousemove", event => {
    const rect = hero.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - .5;
    const y = (event.clientY - rect.top) / rect.height - .5;
    hero.querySelectorAll(".spark-card").forEach((card, index) => {
      const depth = (index + 1) * 5;
      card.style.translate = `${x * depth}px ${y * depth}px`;
    });
  });
  hero.addEventListener("mouseleave", () => hero.querySelectorAll(".spark-card").forEach(card => card.style.translate = "0 0"));
}
