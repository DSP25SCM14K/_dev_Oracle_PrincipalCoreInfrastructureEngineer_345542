const words = ["GPU fleet readiness", "Test automation", "Configuration integrity", "Failure recovery"];
const rotating = document.querySelector("#rotating-text");
let wordIndex = 0;
if (rotating) window.setInterval(() => {
  rotating.classList.add("is-changing");
  window.setTimeout(() => {
    wordIndex = (wordIndex + 1) % words.length;
    rotating.textContent = words[wordIndex];
    rotating.classList.remove("is-changing");
  }, 180);
}, 2600);

const revealObserver = new IntersectionObserver((entries, observer) => entries.forEach(entry => {
  if (entry.isIntersecting) { entry.target.classList.add("is-visible"); observer.unobserve(entry.target); }
}), { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach(el => revealObserver.observe(el));

const captions = {
  nominal: ["QUALIFICATION READY", "Automated GPU tests verify health and configuration before nodes pass the quality gate into a serving fleet."],
  degraded: ["CONFIGURATION DRIFT", "A firmware or driver mismatch holds the node at the gate; fleet telemetry records the signal for diagnosis."],
  recovery: ["RECHECK PASSED", "Repair and triage restore the expected state; validation confirms the node is ready to rejoin the fleet."]
};
document.querySelectorAll(".loop-button").forEach(button => button.addEventListener("click", () => {
  const mode = button.dataset.mode;
  document.querySelectorAll(".loop-button").forEach(other => {
    const active = other === button;
    other.classList.toggle("active", active);
    other.setAttribute("aria-pressed", String(active));
  });
  const panel = document.querySelector(".loop-panel");
  panel.classList.remove("mode-degraded", "mode-recovery");
  if (mode !== "nominal") panel.classList.add(`mode-${mode}`);
  document.querySelector("#loop-status").textContent = captions[mode][0];
  document.querySelector("#loop-caption").textContent = captions[mode][1];
}));

document.querySelectorAll(".filter-button").forEach(button => button.addEventListener("click", () => {
  const filter = button.dataset.filter;
  document.querySelectorAll(".filter-button").forEach(other => {
    const active = other === button;
    other.classList.toggle("active", active);
    other.setAttribute("aria-pressed", String(active));
  });
  let visible = 0;
  document.querySelectorAll(".project-card").forEach(card => {
    const show = filter === "all" || card.dataset.category === filter;
    card.hidden = !show;
    if (show) visible += 1;
  });
  document.querySelector("#visible-project-count").textContent = visible;
}));

const navLinks = [...document.querySelectorAll('.topbar nav a')];
const sections = navLinks.map(link => document.querySelector(link.getAttribute('href'))).filter(Boolean);
const sectionObserver = new IntersectionObserver(entries => entries.forEach(entry => {
  if (entry.isIntersecting) navLinks.forEach(link => link.classList.toggle('current', link.hash === `#${entry.target.id}`));
}), { rootMargin: '-25% 0px -65% 0px' });
sections.forEach(section => sectionObserver.observe(section));
