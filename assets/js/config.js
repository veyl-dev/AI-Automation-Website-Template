/* Flowstate starter configuration.
   Change these values first when adapting the kit to a new product.
   Keep this file before main.js / dashboard.js in both HTML pages. */
window.FLOWSTATE_CONFIG = {
  brand: {
    name: "Flowstate",
    mark: "f",
    contactEmail: "hello@example.com",
    tagline: "Make work flow."
  },
  theme: {
    accent: "#b8df78",
    background: "#0b0e0c",
    panel: "#121814",
    panelRaised: "#18211b",
    text: "#f3f5ef",
    muted: "#a0aaa0",
    font: "'Manrope', sans-serif",
    mono: "'DM Mono', monospace"
  },
  workspace: {
    name: "Northstar Studio",
    slug: "northstar-studio",
    userName: "Sam Carter",
    userInitials: "SC",
    role: "Admin account"
  },
  links: {
    primaryCta: "#pricing",
    dashboard: "dashboard.html"
  }
};

(() => {
  const config = window.FLOWSTATE_CONFIG;
  if (!config) return;
  const root = document.documentElement;
  const theme = config.theme || {};
  const vars = {
    "--lime": theme.accent,
    "--accent": theme.accent,
    "--bg": theme.background,
    "--panel": theme.panel,
    "--panel2": theme.panelRaised,
    "--text": theme.text,
    "--muted": theme.muted,
    "--sans": theme.font,
    "--mono": theme.mono
  };
  Object.entries(vars).forEach(([key, value]) => {
    if (typeof value === "string" && value.trim()) root.style.setProperty(key, value);
  });
  const brand = config.brand || {};
  document.querySelectorAll(".brand, .dash-brand").forEach(element => {
    const mark = element.querySelector(".brand-mark");
    const name = element.querySelector(".brand-name") || element.querySelector("span:last-child");
    if (mark && brand.mark) mark.textContent = brand.mark;
    if (name && brand.name) {
      name.innerHTML = "";
      name.append(document.createTextNode(brand.name.toLowerCase()));
      const dot = document.createElement("span");
      dot.className = "brand-dot";
      dot.textContent = ".";
      name.append(dot);
    }
  });
  if (brand.name) {
    document.title = document.title.replace(/Flowstate/g, brand.name);
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(node => { node.nodeValue = node.nodeValue.replace(/Flowstate/gi, brand.name); });
  }
  if (brand.contactEmail) {
    document.querySelectorAll('a[href^="mailto:"]').forEach(link => {
      const subject = link.href.includes("?") ? link.href.slice(link.href.indexOf("?")) : "";
      link.href = "mailto:" + brand.contactEmail + subject;
    });
  }
  const links = config.links || {};
  const primaryCta = document.querySelector(".header-actions .button");
  if (primaryCta && links.primaryCta) primaryCta.href = links.primaryCta;
  const dashboardLink = document.querySelector(".main-nav a[href=\"dashboard.html\"]");
  if (dashboardLink && links.dashboard) dashboardLink.href = links.dashboard;
  const workspace = config.workspace || {};
  const switcher = document.querySelector(".workspace-switch");
  if (switcher && workspace.name) {
    const label = switcher.querySelector("b");
    if (label) label.textContent = workspace.name;
    const avatar = switcher.querySelector(".workspace-avatar");
    if (avatar) avatar.textContent = workspace.name.trim().charAt(0).toUpperCase();
  }
  const profile = document.querySelector(".profile-row");
  if (profile) {
    const name = profile.querySelector("b");
    const role = profile.querySelector("small");
    const avatar = profile.querySelector(".profile-avatar");
    if (name && workspace.userName) name.textContent = workspace.userName;
    if (role && workspace.role) role.textContent = workspace.role;
    if (avatar && workspace.userInitials) avatar.textContent = workspace.userInitials;
  }
  const topAvatar = document.querySelector(".top-avatar");
  if (topAvatar && workspace.userInitials) topAvatar.textContent = workspace.userInitials;
  const workspaceInput = document.querySelector('.settings-form input[value="Northstar Studio"]');
  if (workspaceInput && workspace.name) workspaceInput.value = workspace.name;
  const slugInput = document.querySelector('.settings-form input[value="northstar-studio"]');
  if (slugInput && workspace.slug) slugInput.value = workspace.slug;
})();
