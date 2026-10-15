const root = document.documentElement;
  const button = document.getElementById("theme-toggle");

  button.addEventListener("click", () => {
    const isDark = root.classList.contains("theme-dark");

    root.classList.remove("theme-dark", "theme-light");
    root.classList.add(isDark ? "theme-light" : "theme-dark");
  });