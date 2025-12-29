(function () {
  try {
    const path = (window.location.pathname || "").split("/").pop() || "index.html";
    const links = document.querySelectorAll(".nav a");
    links.forEach((a) => {
      const href = a.getAttribute("href");
      if (!href) return;
      if (href === path) a.classList.add("active");
      if (path === "" && href === "index.html") a.classList.add("active");
    });
  } catch (e) {}
})();
