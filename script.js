const navBtns = document.querySelectorAll("[data-nav]");
const pages = document.querySelectorAll("[data-page]");

const switchPage = (page) => {
  if (page === "github") {
    window.open("https://github.com/nvbangg", "_blank");
    return;
  }
  if (page === "facebook") {
    window.open("https://www.facebook.com/nvbangg", "_blank");
    return;
  }

  navBtns.forEach((btn) =>
    btn.classList.toggle("active", btn.dataset.nav === page)
  );
  pages.forEach((p) => p.classList.toggle("active", p.dataset.page === page));
  history.pushState(
    null,
    "",
    page === "about" ? location.pathname : `#${page}`
  );
  scrollTo(0, 0);
};

navBtns.forEach((btn) => (btn.onclick = () => switchPage(btn.dataset.nav)));
onhashchange = () => switchPage(location.hash.slice(1) || "about");
switchPage(location.hash.slice(1) || "about");
